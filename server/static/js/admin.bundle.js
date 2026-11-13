/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var Yt=Object.create;var Me=Object.defineProperty;var Qt=Object.getOwnPropertyDescriptor;var Xt=Object.getOwnPropertyNames;var Zt=Object.getPrototypeOf,en=Object.prototype.hasOwnProperty;var he=(y,w)=>()=>{try{return w||y((w={exports:{}}).exports,w),w.exports}catch(g){throw w=0,g}};var tn=(y,w,g,f)=>{if(w&&typeof w=="object"||typeof w=="function")for(let L of Xt(w))!en.call(y,L)&&L!==g&&Me(y,L,{get:()=>w[L],enumerable:!(f=Qt(w,L))||f.enumerable});return y};var be=(y,w,g)=>(g=y!=null?Yt(Zt(y)):{},tn(w||!y||!y.__esModule?Me(g,"default",{value:y,enumerable:!0}):g,y));var Ne=he(()=>{(function(){"use strict";var y=4,w=2500,g=3e3,f=Object.create(null);function L(){return Date.now()}function H(b,k){return(k?"ok:":"err:")+b}function C(b,k){return"var("+b+", "+k+")"}function I(b){return b?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function p(b){for(var k=Array.prototype.slice.call(b.children);k.length>y;){var A=k.shift();A&&A.parentNode&&A.parentNode.removeChild(A)}}function M(b,k){b.remaining=k,b.startedAt=L(),b.timer=setTimeout(function(){S(b)},k)}function F(b){b.timer&&(clearTimeout(b.timer),b.timer=null,b.remaining=Math.max(600,b.remaining-(L()-b.startedAt)))}function $(b){b.timer||!b.el.parentNode||M(b,b.remaining)}function S(b){clearTimeout(b.timer),b.timer=null,b.key&&f[b.key]===b&&delete f[b.key];var k=b.el;!k||!k.parentNode||(k.style.opacity="0",k.style.transform="translateX(8px)",setTimeout(function(){k.parentNode&&k.parentNode.removeChild(k)},180))}function N(b,k){var A=document.getElementById("toast-container");if(A){k=k!==!1;var j=H(String(b),k),B=f[j];if(B&&B.el.parentNode&&L()-B.startedAt<w){B.count+=1,B.countEl&&(B.countEl.textContent="\xD7"+B.count,B.countEl.hidden=!1),F(B),$(B);return}var P=k?C("--color-ink-success","#639922"):C("--color-ink-error","#e24b4a"),m=C("--color-surface","#ffffff"),r=C("--color-text-primary","#1a1a1a"),o=C("--color-border-soft","rgba(0,0,0,.12)"),n=document.createElement("div");n.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+m,"color:"+r,"border:1px solid "+o,"border-left:3px solid "+P,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var d=document.createElement("span");d.style.cssText="display:inline-flex;color:"+P+";flex:0 0 auto",d.innerHTML=I(k);var i=document.createElement("span");i.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",i.textContent=b;var c=document.createElement("span");c.hidden=!0,c.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",n.appendChild(d),n.appendChild(i),n.appendChild(c),A.appendChild(n),p(A),requestAnimationFrame(function(){n.style.opacity="1",n.style.transform="translateX(0)"});var a={key:j,el:n,countEl:c,count:1,timer:null,remaining:g,startedAt:L()};f[j]=a,M(a,g),n.addEventListener("mouseenter",function(){F(a)}),n.addEventListener("mouseleave",function(){$(a)}),n.addEventListener("focusin",function(){F(a)}),n.addEventListener("focusout",function(){$(a)})}}window.showToast=N})()});var Pe=he(()=>{(function(){"use strict";var y="admin-details-open-state";function w(){try{return JSON.parse(localStorage.getItem(y))||{}}catch{return{}}}function g(N){try{localStorage.setItem(y,JSON.stringify(N))}catch{}}var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function L(N){return N==null?"":String(N).replace(/[&<>"']/g,function(b){return f[b]})}function H(){var N=document.querySelector("script[nonce]");return N&&N.nonce||""}function C(N,b){var k=H();return"<style"+(N?' id="'+L(N)+'"':"")+(k?' nonce="'+L(k)+'"':"")+">"+(b||"")+"</style>"}var I='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',p=[],M=null;function F(N){if(!N)return!1;for(var b=N;b&&b!==document.documentElement;b=b.parentElement)if(b.style&&b.style.display==="none")return!1;return!!(N.offsetParent||N.getClientRects().length)}function $(){var N=document.hidden;p.forEach(function(b){var k=typeof b.el=="function"?b.el():b.el,A=!N&&F(k);if(A&&!b.timer){if(b.immediate!==!1)try{b.tick()}catch{}b.timer=setInterval(b.tick,b.intervalMs)}else!A&&b.timer&&(clearInterval(b.timer),b.timer=0)})}function S(N){var b={el:N.el,intervalMs:N.intervalMs,tick:N.tick,immediate:N.immediate,timer:0};return p.push(b),M||(M=new MutationObserver(function(){$()}),M.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden"]}),window.addEventListener("hashchange",$),document.addEventListener("visibilitychange",$),document.addEventListener("admin-panel-rendered",$)),$(),function(){b.timer&&clearInterval(b.timer);var A=p.indexOf(b);A!==-1&&p.splice(A,1)}}window.AdminUtils={DETAILS_STATE_KEY:y,loadDetailsState:w,saveDetailsState:g,escapeHtml:L,cspNonce:H,styleTag:C,closeIcon:I,pollWhileVisible:S}})()});var Re=he(()=>{(function(){"use strict";function y(w,g,f,L){let H=w.querySelector("[data-route-breadcrumb]");if(!H)return;let C=Array.from(w.querySelectorAll(".admin-dash-nav-row[data-route]")),I=C.find(A=>A.dataset.route===g)||C.find(A=>A.dataset.route===f);if(!I){H.replaceChildren(),H.hidden=!0;return}let p="",M=I.previousElementSibling;for(;M;){if(M.classList.contains("admin-dash-nav-label")){p=(M.querySelector("[data-i18n]")||M).textContent.trim();break}M=M.previousElementSibling}let $=(I.querySelector("[data-i18n]")||I.querySelector("span:nth-child(2)")||I).textContent.trim(),S=L?w.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,N=S?(S.querySelector(".admin-tabs-btn-label")||S).textContent.trim():"",b=[p,$,N].filter(Boolean),k=document.createDocumentFragment();b.forEach((A,j)=>{if(j){let m=document.createElement("span");m.className="admin-dash-breadcrumb-sep",m.setAttribute("aria-hidden","true"),m.textContent="\u203A",k.appendChild(m)}let B=document.createElement("span"),P=j===b.length-1;B.className="admin-dash-breadcrumb-item"+(P?" is-current":""),P&&B.setAttribute("aria-current","page"),B.textContent=A,k.appendChild(B)}),H.replaceChildren(k),H.hidden=b.length===0}window.AdminBreadcrumb={render:y}})()});var Oe=he(()=>{(function(y){"use strict";let w={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",sections:["sec-blacklist","sec-filters"]},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},integrations:{defaultTab:"webhooks",tabs:[{slug:"webhooks",labelKey:"tabExtWebhooks",en:"WEBHOOKS",section:"sec-webhooks"},{slug:"plugins",labelKey:"tabExtPlugins",en:"PLUGINS",sections:["sec-plugins","sec-extensions-overview"]},{slug:"api-tokens",labelKey:"tabExtApiKeys",en:"API KEYS",section:"sec-api-tokens-overview"},{slug:"scheduler",labelKey:"tabExtScheduler",en:"SCHEDULER",section:"sec-scheduler"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function g($){return Array.isArray($.sections)?$.sections:$.section?[$.section]:[]}function f($){return!!w[$]}function L($){return w[$]||null}let H={moderation:{filters:"blacklist",fingerprints:"bans"}};function C($,S){let N=w[$];if(!N)return null;let b=j=>N.tabs.some(B=>B.slug===j),k=H[$]?.[S];if(k&&b(k))return k;if(S&&b(S))return S;let A=y.AdminRouter?.tabMemory?.get?.($);return A&&b(A)?A:N.defaultTab}function I($,S,N){let b=w[$];if(!b)return null;let k=document.createElement("div");return k.className="admin-tabs-strip",k.dataset.nav=$,k.setAttribute("role","tablist"),k.setAttribute("aria-label",$+" tabs"),b.tabs.forEach(A=>{let j=document.createElement("button");j.type="button",j.className="admin-tabs-btn"+(A.slug===S?" is-active":""),j.dataset.nav=$,j.dataset.tab=A.slug,j.setAttribute("role","tab"),j.setAttribute("aria-selected",A.slug===S?"true":"false");let B=document.createElement("span");B.className="admin-tabs-btn-label",B.textContent=A.labelKey?ServerI18n.t(A.labelKey):A.label,j.appendChild(B);let P=document.createElement("span");P.className="admin-tabs-btn-count",P.dataset.tabCount=A.slug,P.textContent=p[$]&&p[$][A.slug]?p[$][A.slug]:"",j.appendChild(P),j.addEventListener("click",()=>{typeof N?.onSelect=="function"&&N.onSelect(A.slug)}),k.appendChild(j)}),k}let p={};function M($,S,N){if(!w[$])return;p[$]=p[$]||{},p[$][S]=N==null?"":String(N);let b=document.querySelector('.admin-tabs-strip[data-nav="'+$+'"] [data-tab-count="'+S+'"]');b&&(b.textContent=p[$][S])}function F($,S,N){let b=w[$];!b||!N||b.tabs.forEach(k=>{let A=k.slug===S;g(k).forEach(j=>{let B=N.querySelector("#"+j);B&&(B.style.display=A?"":"none")})})}y.AdminTabs={hasTabsFor:f,getConfig:L,resolveActiveTab:C,renderTabStrip:I,applyTabSectionVisibility:F,setTabCount:M}})(window)});var qe=he(()=>{(function(y,w){"use strict";let g="data-quick-action-host",f="admin-quick-action-bar";function L(M){if(M?.host instanceof HTMLElement)return M.host;let F=w.querySelector(".admin-dash-main");if(!F)return w.body;let $=F.querySelector(`[${g}]`);if(!$){$=w.createElement("div"),$.setAttribute(g,"");let S=F.querySelector(".admin-dash-topbar"),b=F.querySelector("[data-admin-tabs-host]")||S;b&&b.parentNode?b.insertAdjacentElement("afterend",$):F.prepend($)}return $}function H(M,F){typeof y.showToast=="function"&&y.showToast(M,F!==!1)}function C({label:M,undoLabel:F,onUndo:$,windowMs:S}){let N=L(),b=N.querySelector("."+f);b&&b.remove();let k=w.createElement("div");k.className=f,k.setAttribute("role","status"),k.setAttribute("aria-live","polite");let A=w.createElement("span");A.className=f+"-text",A.textContent="\u2713 "+M,k.appendChild(A);let j=w.createElement("button");j.type="button",j.className=f+"-undo",j.textContent="\u21B6 "+(F||ServerI18n.t("qaUndoLabel")),k.appendChild(j);let B=()=>{k.classList.add("is-leaving"),setTimeout(()=>k.remove(),200)},P=setTimeout(B,S||5e3);return j.addEventListener("click",async()=>{clearTimeout(P),j.disabled=!0,j.textContent=ServerI18n.t("qaUndoing");try{await $(),H(ServerI18n.t("qaUndone"),!0)}catch(m){H(ServerI18n.t("qaUndoFailed",{msg:m?.message||String(m)}),!1)}finally{B()}}),N.appendChild(k),requestAnimationFrame(()=>k.classList.add("is-entering")),k}function I(M){if(!M||typeof M!="object")return;let F=M.label||ServerI18n.t("qaDone");M.toast!==!1&&H(F,!0),M.undo&&typeof M.undo.run=="function"&&C({label:F,undoLabel:M.undo.label,onUndo:M.undo.run,windowMs:M.undo.window})}function p(){w.querySelectorAll("."+f).forEach(M=>M.remove())}y.AdminQuickAction={fire:I,dismissAll:p}})(window,document)});var He=he(()=>{(function(){"use strict";let y="admin-hud-modal-root",w=null,g=null,f='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function L(){let p=document.getElementById(y);return p?Array.prototype.slice.call(p.querySelectorAll(f)).filter(M=>M.offsetParent!==null||M===document.activeElement):[]}function H(p){let M=document.getElementById(y);if(M&&M.remove(),w&&(w(p),w=null),document.removeEventListener("keydown",C),g&&typeof g.focus=="function")try{g.focus()}catch{}g=null}function C(p){if(p.key==="Escape"){p.preventDefault(),H(!1);return}if(p.key==="Tab"){let M=L();if(!M.length){p.preventDefault();return}let F=M[0],$=M[M.length-1],S=document.activeElement;p.shiftKey?(S===F||!M.includes(S))&&(p.preventDefault(),$.focus()):(S===$||!M.includes(S))&&(p.preventDefault(),F.focus())}}function I(p){return new Promise(M=>{w&&H(!1),w=M,g=document.activeElement;let{icon:F="\u26A0",title:$=ServerI18n.t("hudConfirmTitle"),subtitle:S="",severity:N="warn",body:b="",titleText:k,bodyText:A,confirmLabel:j=ServerI18n.t("hudConfirmLabel"),cancelLabel:B=ServerI18n.t("cancel"),width:P=480}=p||{},m=document.createElement("div");m.id=y,m.className=`admin-hud-modal admin-hud-modal--${N}`,m.setAttribute("role","dialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","admin-hud-modal-title");let r=S?`<div class="admin-hud-modal__subtitle">${S}</div>`:"",o=typeof b=="string"?b:"",n=typeof b!="string"&&b&&b.nodeType;if(m.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${P}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${F}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${$}</div>
              ${r}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${o}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${B}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${j}</button>
          </div>
        </div>`,k!=null){let d=m.querySelector(".admin-hud-modal__title");d&&(d.textContent=String(k))}if(A!=null){let d=m.querySelector("[data-modal-body]");d&&(d.textContent=String(A))}if(n){let d=m.querySelector("[data-modal-body]");d.innerHTML="",d.appendChild(b)}m.addEventListener("click",function(d){let i=d.target.closest("[data-modal-action]");i&&(d.stopPropagation(),H(i.dataset.modalAction==="confirm"))}),document.body.appendChild(m),document.addEventListener("keydown",C),requestAnimationFrame(()=>{m.querySelector(".admin-hud-modal__btn--confirm")?.focus()})})}window.HudConfirm={open:I}})()});var je=he(()=>{(function(){"use strict";var y=8,w=30;function g(N,b){return window.ServerI18n?window.ServerI18n.t(N,b):N}function f(N,b){return N?N.length>b?N.slice(0,b)+"\u2026":N:""}function L(N){return g(N==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function H(N,b){return N==="keyword"?f(b,w):b.slice(0,y)}async function C(N,b,k){if(!b)return{ok:!1,error:"empty-value"};try{var A={type:N==="keyword"?"keyword":"fingerprint",value:b};k&&(A.reason=k);var j=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)});return j.ok?{ok:!0}:{ok:!1,error:"HTTP "+j.status}}catch(B){return{ok:!1,error:B&&B.message||"network"}}}async function I(N,b,k){if(!N)return{ok:!1,error:"empty-fingerprint"};var A=parseInt(b||0,10)||0;try{var j=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:N,duration_s:A,reason:k||"",kind:"ban"})});return j.ok?{ok:!0}:{ok:!1,error:"HTTP "+j.status}}catch(B){return{ok:!1,error:B&&B.message||"network"}}}async function p(N){if(!N)return{ok:!1,error:"empty-message-id"};try{var b=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:N})});return b.ok?{ok:!0}:{ok:!1,error:"HTTP "+b.status}}catch(k){return{ok:!1,error:k&&k.message||"network"}}}function M(N,b){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:g("lfBlockTitle"),subtitle:g("cfmSubBlockFuture"),severity:"danger",bodyText:g("blockConfirm").replace("{label}",L(N)).replace("{display}",H(N,b)),confirmLabel:g("lfBlockTitle")}):(window.showToast&&window.showToast(g("blockFailed"),!1),Promise.resolve(!1))}function F(N,b,k){window.showToast&&window.showToast(N?g(b,k||{}):g("blockFailed"),!!N)}async function $(N,b){if(!N||(b=b||{},!b.skipConfirm&&!await M("keyword",N)))return!1;var k=await C("keyword",N);return F(k.ok,"blockFallback",{label:L("keyword"),display:H("keyword",N)}),k.ok}async function S(N,b){if(!N||(b=b||{},!b.skipConfirm&&!await M("fingerprint",N)))return!1;var k=await C("fingerprint",N,b.reason);return F(k.ok,"blockFallback",{label:L("fingerprint"),display:H("fingerprint",N)}),k.ok}window.AdminModeration={callBlock:C,banFingerprint:I,recall:p,blockKeyword:$,blockFingerprint:S}})()});var Ue=he(()=>{(function(){"use strict";function w(I){let p=document.createElement("div");return p.className="admin-skel-slow",p.hidden=!0,p.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",I.appendChild(p),setTimeout(function(){p.isConnected&&(p.hidden=!1)},3e3),I}function g(I,p){let M=document.createElement("div");if(M.className="admin-skel "+(I||""),p)for(let F in p)M.style[F]=p[F];return M}function f({rows:I=8}={}){let p=document.createElement("div");p.className="admin-skel-card admin-skel-list";let M=document.createElement("div");M.className="admin-skel-list__head",[60,80,140,200,80].forEach(F=>{M.appendChild(g("admin-skel-bar",{width:F+"px",height:"10px"}))}),p.appendChild(M);for(let F=0;F<I;F++){let $=document.createElement("div");$.className="admin-skel-list__row",$.appendChild(g("admin-skel-circle",{width:"24px",height:"24px"}));let S=document.createElement("div");S.className="admin-skel-list__col",S.appendChild(g("admin-skel-bar",{width:50+F*13%40+"%",height:"10px"})),S.appendChild(g("admin-skel-bar",{width:30+F*7%30+"%",height:"8px"})),$.appendChild(S),$.appendChild(g("admin-skel-bar",{width:"60px",height:"10px"})),p.appendChild($)}return w(p)}function L({cols:I=4}={}){let p=document.createElement("div");p.className="admin-skel-stats",p.style.gridTemplateColumns=`repeat(${I}, 1fr)`;for(let M=0;M<I;M++){let F=document.createElement("div");F.className="admin-skel-card admin-skel-tile",F.appendChild(g("admin-skel-bar",{width:"60px",height:"8px"})),F.appendChild(g("admin-skel-bar",{width:"80px",height:"28px"})),F.appendChild(g("admin-skel-bar",{width:"100%",height:"18px"})),F.appendChild(g("admin-skel-bar",{width:"90px",height:"8px"})),p.appendChild(F)}return w(p)}function H(){let I=document.createElement("div");I.className="admin-skel-card admin-skel-chart";let p=document.createElement("div");p.className="admin-skel-chart__head",p.appendChild(g("admin-skel-bar",{width:"120px",height:"10px"}));let M=document.createElement("span");M.style.flex="1",p.appendChild(M),p.appendChild(g("admin-skel-bar",{width:"80px",height:"10px"})),I.appendChild(p);let F=document.createElement("div");F.className="admin-skel-chart__body";let $=document.createElement("div");$.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>$.appendChild(g("admin-skel-bar",{width:"24px",height:"6px"}))),F.appendChild($);let S=document.createElement("div");return S.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(b=>S.appendChild(g("admin-skel-bar admin-skel-chart__bar",{height:b+"%"}))),F.appendChild(S),I.appendChild(F),w(I)}function C(I,p){let M={listRows:f,statsTiles:L,chart:H}[I];return M?M(p||{}).outerHTML:""}window.AdminSkeletons={listRows:f,statsTiles:L,chart:H,html:C}})()});var Ke=he(()=>{(function(){"use strict";let y={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},w={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:y.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:y.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:y.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:y.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:y.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:y.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:y.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:y.cyan}};function g(L){let{icon:H="\xB7",title:C="",desc:I="",accent:p=y.cyan,ctaAccent:M,actionLabel:F,action:$,extra:S}=L||{},N=document.createElement("div");N.className="admin-empty",N.dataset.empty="1",N.style.setProperty("--admin-empty-accent",p),M&&N.style.setProperty("--admin-empty-cta",M);let b=document.createElement("div");if(b.className="admin-empty__icon",b.textContent=H,N.appendChild(b),C){let k=document.createElement("div");k.className="admin-empty__title",k.textContent=C,N.appendChild(k)}if(I){let k=document.createElement("div");k.className="admin-empty__desc",k.textContent=I,N.appendChild(k)}if(F){let k=document.createElement("button");k.type="button",k.className="admin-empty__btn",k.textContent=F,typeof $=="function"&&k.addEventListener("click",$),N.appendChild(k)}if(S){let k=document.createElement("div");k.className="admin-empty__extra",typeof S=="string"?k.innerHTML=S:k.appendChild(S),N.appendChild(k)}return N}function f(L){let H=w[L];if(!H)return g({title:ServerI18n.t("emptyNoData"),desc:""});let C=Object.assign({},H,{title:H.titleKey?ServerI18n.t(H.titleKey):H.title,desc:H.descKey?ServerI18n.t(H.descKey):H.desc,actionLabel:H.actionLabelKey?ServerI18n.t(H.actionLabelKey):H.actionLabel});return g(C)}window.AdminEmpty={render:f,renderCustom:g,PRESETS:w}})()});var We=he(()=>{(function(){"use strict";var y=8;function w(C){return C?String(C).slice(0,y):""}function g(C){if(!C||typeof C!="object")return{nickname:"",fp:"",ip:""};var I=C.fingerprint||C.fp||C.hash||"",p=C.clientIp||C.client_ip||C.ip||"",M=C.nickname||C.nick||"";return{nickname:String(M||""),fp:String(I||""),ip:String(p||"")}}function f(C){if(!C||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var I=new TextEncoder().encode(String(C));return window.crypto.subtle.digest("SHA-256",I).then(function(p){var M=Array.from(new Uint8Array(p));return M.map(function(F){return F.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function L(C){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var I=document.getElementById("sec-fingerprints");if(I&&!I.open&&(I.open=!0),I)try{I.scrollIntoView({behavior:"smooth",block:"start"})}catch{}f(C).then(function(p){if(p)var M=0,F=setInterval(function(){M+=1;var $=document.querySelector('[data-fp-hash="'+p+'"]');if($){clearInterval(F),$.classList.add("admin-identity-flash"),setTimeout(function(){$.classList.remove("admin-identity-flash")},2e3);try{$.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else M>12&&clearInterval(F)},250)})}function H(C){C=C||{};var I=C.nickname||"",p=C.fp||"",M=C.ip||"",F=!!C.compact,$=typeof C.onNicknameClick=="function"?C.onNicknameClick:null,S=typeof C.onFpClick=="function"?C.onFpClick:L,N=document.createElement("span");N.className="admin-identity-row";var b;if($?(b=document.createElement("button"),b.type="button",b.className="admin-identity-nick is-clickable",b.addEventListener("click",function(m){m.stopPropagation(),$(I)})):(b=document.createElement("span"),b.className="admin-identity-nick"),I)b.textContent="@"+I;else{var k="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var A=ServerI18n.t("anonymousPlaceholder");A&&A!=="anonymousPlaceholder"&&(k=A)}}catch{}b.textContent="@"+k,b.classList.add("is-guest")}if(I&&(b.title=I),N.appendChild(b),p){var j;if(S?(j=document.createElement("button"),j.type="button",j.className="admin-identity-fp is-clickable",j.addEventListener("click",function(m){m.stopPropagation(),S(p)})):(j=document.createElement("span"),j.className="admin-identity-fp"),p==="new"){var B=document.createElement("span");B.className="admin-identity-dot",j.appendChild(B),j.appendChild(document.createTextNode("fp:new"))}else j.textContent="fp:"+w(p);j.title=p,N.appendChild(j)}if(M&&!F){var P=document.createElement("span");P.className="admin-identity-ip",P.textContent=M,P.title=M,N.appendChild(P)}return N}window.AdminIdentity={render:H,parse:g,focusFingerprint:L,hashFp:f,FP_DISPLAY_LEN:y}})()});var Ge=he(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function w(d,i){return window.csrfFetch(d,i)}function g(d,i){return window.showToast(d,i)}let f="default",L=[],H={};function C(){let d=document.getElementById("themesList");d&&window.AdminSkeletons&&(d.innerHTML="",d.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function I(){C();try{let d=await w("/admin/themes");if(!d.ok)return;let i=await d.json();f=i.active||"default",L=i.themes||[],H=i.overrides||{},N(L,f),A()}catch(d){console.warn("[Themes] Failed to fetch themes:",d)}}var p="\u5C0F\u660E",M="\u8B1B\u5F97\u597D\uFF01+1";function F(d,i){var c=String(d||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(c)?c:i}function $(d){var i=d.styles||{},c=["color:"+F(i.color,"#ffffff")];if(i.textStroke){var a=Math.max(0,Math.min(6,Number(i.strokeWidth)||0));c.push("-webkit-text-stroke:"+a+"px "+F(i.strokeColor,"#000000")),c.push("paint-order:stroke fill")}if(i.textShadow){var e=Math.max(0,Math.min(40,Number(i.shadowBlur)||0));c.push("text-shadow:0 0 "+e+"px "+F(i.color,"#ffffff"))}var l=d.font&&d.font.family;return l&&/^[\w\s-]{1,40}$/.test(l)&&c.push("font-family:'"+l+"', var(--font-sans)"),d.font&&Number(d.font.weight)&&c.push("font-weight:"+Math.max(100,Math.min(900,Number(d.font.weight)))),c.join(";")}function S(d){var i=d.bg&&d.bg.gradient;return i&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(i).trim())?"background:"+String(i).trim():""}function N(d,i){let c=document.getElementById("themesList");if(c){if(c.innerHTML="",d.length===0){c.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}d.forEach(a=>{let e=a.name===i,l=y(ServerI18n.t("theme_"+a.name)!=="theme_"+a.name?ServerI18n.t("theme_"+a.name):a.label||a.name),h=document.createElement("div");h.className=`theme-pack-card${e?" is-active":""}`,h.innerHTML=`
        <div class="theme-pack-name">${l}</div>
        <div class="theme-pack-sample" style="${y(S(a))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${y($(a))}">
            <span class="theme-pack-sample-nick">${y(p)}</span>
            ${y(M)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${a.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${y(a.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${e?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${y(a.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,c.appendChild(h)}),c.querySelectorAll(".theme-delete-btn").forEach(a=>{a.addEventListener("click",async()=>{let e=a.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let h=await w("/admin/themes/"+encodeURIComponent(e),{method:"DELETE"});if(!h.ok)throw new Error("HTTP "+h.status);g(ServerI18n.t("themeDeleted"),!0),I()}catch{g(ServerI18n.t("themesDeleteFailed"),!1)}})}),c.querySelectorAll(".theme-activate-btn").forEach(a=>{a.addEventListener("click",async()=>{let e=a.dataset.theme;try{let l=await w("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e})});if(l.ok)g(ServerI18n.t("themeActivated"),!0),f=e,N(d,e),A();else{let h=await l.json().catch(()=>({}));g(h.error||ServerI18n.t("setThemeFailed"),!1)}}catch{g(ServerI18n.t("setThemeFailed"),!1)}})})}}function b(){return L.find(d=>d.name===f)||null}function k(d,i){let c=H[f]||{};if(c[d])return c[d];let a=i&&i.styles||{};return d==="stroke"?a.textStroke?Number(a.strokeWidth)>=3?"thick":"thin":"none":a.textShadow?Number(a.shadowBlur)>=10?"strong":"soft":"none"}function A(){let d=document.getElementById("themeDetail"),i=document.getElementById("themeDetailLabel");if(!d||!i)return;let c=b();if(!c)return;let a=ServerI18n.t("theme_"+c.name)!=="theme_"+c.name?ServerI18n.t("theme_"+c.name):c.label||c.name;i.textContent=ServerI18n.t("themeDetailGroup",{name:a}),["stroke","shadow"].forEach(l=>{let h=k(l,c);d.querySelectorAll(`[data-theme-seg="${l}"] [data-theme-opt]`).forEach(t=>{let s=t.getAttribute("data-theme-opt")===h;t.classList.toggle("is-active",s),t.setAttribute("aria-pressed",s?"true":"false")})});let e=d.querySelector('[data-theme-ov="color"]');if(e){let l=F((c.styles||{}).color,"#ffffff");e.value=/^#[0-9a-fA-F]{6}$/.test(l)?l:"#ffffff"}B(c),P(c)}var j=null;async function B(d){let i=document.getElementById("themeOvFont");if(!i)return;if(!j)try{let e=await fetch("/fonts",{credentials:"same-origin"});j=e.ok?(await e.json()).fonts||[]:[]}catch{j=[]}let a=(H[f]||{}).font_family||"";i.innerHTML=`<option value="">${y(ServerI18n.t("themeDetailFontInherit"))}</option>`+j.map(e=>{let l=String(e.name||e);return`<option value="${y(l)}"${l===a?" selected":""}>${y(l)}</option>`}).join("")}function P(d){let i=document.querySelector("[data-theme-preview-line]");i&&i.setAttribute("style",$(d))}async function m(d){try{let i=await w("/admin/themes/"+encodeURIComponent(f)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});if(!i.ok)throw new Error("HTTP "+i.status);g(ServerI18n.t("themeDetailSaved"),!0),await I()}catch{g(ServerI18n.t("themeDetailSaveFailed"),!1)}}function r(){let d=document.getElementById("themeDetail");d&&(d.addEventListener("click",i=>{let c=i.target.closest("[data-theme-opt]");if(!c)return;let a=c.closest("[data-theme-seg]");a&&m({[a.getAttribute("data-theme-seg")]:c.getAttribute("data-theme-opt")})}),d.addEventListener("change",i=>{let c=i.target.closest("[data-theme-ov]");c&&m({[c.getAttribute("data-theme-ov")]:c.value})}))}function o(){let d=document.getElementById("themeNewBtn");d&&d.addEventListener("click",async()=>{let i=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!i||!i.trim()))try{let c=await w("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:i.trim(),base:f})});if(!c.ok)throw new Error("HTTP "+c.status);g(ServerI18n.t("themeCreated"),!0),I()}catch{g(ServerI18n.t("themesNewFailed"),!1)}})}function n(){I(),r(),o();let d=document.getElementById("themeReloadBtn");d&&d.addEventListener("click",async()=>{try{(await w("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(g(ServerI18n.t("themesReloaded")),I()):g(ServerI18n.t("themesReloadFailed"),!1)}catch{g(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:n}})()});var ze=he(()=>{(function(){"use strict";function y(x,D){return window.csrfFetch(x,D)}function w(x,D){return window.showToast(x,D)}var g=window.ServerI18n;function f(x,D){return window.AdminUtils.styleTag(x,D)}let L=null;function H(){let x=document.getElementById("effectEditModal");return x?Array.from(x.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(D=>!D.hasAttribute("disabled")&&D.getAttribute("aria-hidden")!=="true"):[]}function C(x){let D=document.getElementById("effectEditModal");if(!D||D.classList.contains("hidden"))return;if(x.key==="Escape"){x.preventDefault(),I();return}if(x.key!=="Tab")return;let q=H();if(q.length===0){x.preventDefault();return}let G=q[0],_=q[q.length-1],R=document.activeElement;x.shiftKey&&R===G?(x.preventDefault(),_.focus()):!x.shiftKey&&R===_&&(x.preventDefault(),G.focus())}function I(){let x=document.getElementById("effectEditModal");x&&(x.classList.add("hidden"),x.classList.remove("flex"),x.removeEventListener("keydown",C),L&&(L.focus(),L=null))}let p={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(x){return!!p[x]}};let M=new Map,F=new Map;function $(x){if(!x||!x.styleId||!x.keyframes)return;let D="dme-user-"+x.styleId;if(document.getElementById(D))return;let q=document.createElement("style");q.id=D,q.textContent=x.keyframes,document.head.appendChild(q)}async function S(x){if(M.has(x))return M.get(x);if(F.has(x))return F.get(x);let D=(async()=>{try{let q=await y(`/admin/effects/${encodeURIComponent(x)}/content`);if(!q.ok)throw new Error("content fetch failed");let G=await q.json(),_=G&&G.content||"";if(!_)throw new Error("empty content");let R=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:_,params:{}})});if(!R.ok)throw new Error("preview failed");let U=await R.json();if(!U||!U.animation)throw new Error("no animation");return $(U),M.set(x,U),U}catch{return M.set(x,"failed"),null}finally{F.delete(x)}})();return F.set(x,D),D}function N(x,D){let q=x.querySelector(".effect-demo-text");if(!q)return;q.style.animation=D.animation||"",D.animationComposition&&(q.style.animationComposition=D.animationComposition),q.style.animationPlayState="paused";let G=k();G&&G.observe(x)}let b=null;function k(){return b||(typeof IntersectionObserver>"u"?null:(b=new IntersectionObserver(x=>{x.forEach(D=>{let q=D.target.querySelector(".effect-demo-text");q&&(q.style.animationPlayState=D.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),b))}let A=null;function j(x){let D=document.getElementById("effectPreviewParams");if(!D)return{};let q;try{let _=x.split(`
`),R=!1,U=0,V=null,K=0,z={};for(let ae of _){let ie=ae.trimStart(),W=ae.length-ie.length;if(ie.startsWith("params:")){R=!0,U=W;continue}if(!R||ie===""||ie.startsWith("#"))continue;if(W<=U&&!ie.startsWith("params:")){R=!1;continue}let X=ie.match(/^([a-zA-Z0-9_]+):\s*$/);if(X&&W===U+2){V=X[1],K=W,z[V]={};continue}if(V&&W>K){let ee=ie.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(ee){let se=ee[1],Z=ee[2].trim();if((Z.startsWith('"')&&Z.endsWith('"')||Z.startsWith("'")&&Z.endsWith("'"))&&(Z=Z.slice(1,-1)),se!=="options"){let le=Number(Z);z[V][se]=isNaN(le)?Z:le}}if(ie.startsWith("- value:")){z[V].options||(z[V].options=[]);let se=ie.match(/^- value:\s*(.+)$/);if(se){let Z=se[1].trim();(Z.startsWith('"')&&Z.endsWith('"')||Z.startsWith("'")&&Z.endsWith("'"))&&(Z=Z.slice(1,-1)),z[V].options.push({value:Z,label:Z})}}if(ie.startsWith("label:")&&z[V].options&&z[V].options.length>0){let se=ie.match(/^label:\s*(.+)$/);if(se){let Z=se[1].trim();(Z.startsWith('"')&&Z.endsWith('"')||Z.startsWith("'")&&Z.endsWith("'"))&&(Z=Z.slice(1,-1)),z[V].options[z[V].options.length-1].label=Z}}}}q=z}catch{q={}}D.innerHTML="";let G={};for(let[_,R]of Object.entries(q||{})){let U=R.type||"float",V=document.createElement("div");V.className="flex flex-col gap-0.5";let K=document.createElement("label");if(K.className="font-mono",K.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",K.textContent=`${_} (${U})`,V.appendChild(K),U==="select"&&Array.isArray(R.options)){let z=document.createElement("select");z.className="admin-ui-select",z.style.cssText="font-size:13px;padding:4px 8px",z.dataset.paramKey=_;for(let ae of R.options){let ie=document.createElement("option");ie.value=ae.value,ie.textContent=ae.label||ae.value,ae.value===String(R.default)&&(ie.selected=!0),z.appendChild(ie)}G[_]=String(R.default||R.options[0]&&R.options[0].value||""),z.addEventListener("change",()=>{m()}),V.appendChild(z)}else{let z=R.min!=null?R.min:0,ae=R.max!=null?R.max:10,ie=R.step!=null?R.step:U==="int"?1:.1,W=R.default!=null?R.default:z,X=document.createElement("div");X.className="flex items-center gap-2";let ee=document.createElement("input");ee.type="range",ee.min=z,ee.max=ae,ee.step=ie,ee.value=W,ee.dataset.paramKey=_,ee.className="flex-1",ee.style.accentColor="var(--color-primary)";let se=document.createElement("span");se.className="font-mono",se.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",se.textContent=String(W),ee.addEventListener("input",()=>{se.textContent=ee.value,m()}),X.appendChild(ee),X.appendChild(se),V.appendChild(X),G[_]=W}D.appendChild(V)}return G}function B(){let x=document.getElementById("effectPreviewParams");if(!x)return{};let D={};return x.querySelectorAll("[data-param-key]").forEach(q=>{D[q.dataset.paramKey]=q.type==="range"?Number(q.value):q.value}),D}async function P(){let x=document.getElementById("effectEditModalTextarea"),D=document.getElementById("effectPreviewText"),q=document.getElementById("effectPreviewStyle"),G=document.getElementById("effectPreviewError");if(!x||!D||!q)return;let _=x.value;if(!_||_===g.t("effectLoadContent")||_===g.t("effectsNetworkError"))return;let R=B();G?.classList.add("hidden");try{let U=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:_,params:R})}),V=await U.json().catch(()=>({}));U.ok?(q.textContent=V.keyframes||"",D.style.animation=V.animation||"none",D.style.animationComposition=V.animationComposition||""):(D.style.animation="none",q.textContent="",G&&(G.textContent=V.error||g.t("previewFailed"),G.classList.remove("hidden")))}catch{D.style.animation="none",q.textContent="",G&&(G.textContent=g.t("effectsNetworkError"),G.classList.remove("hidden"))}}function m(){clearTimeout(A),A=setTimeout(()=>P(),500)}async function r(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
      `),document.getElementById("effectEditModalClose").addEventListener("click",I),document.getElementById("effectEditModalCancel").addEventListener("click",I),document.getElementById("effectEditModal").addEventListener("click",_=>{_.target===_.currentTarget&&I()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let _=document.getElementById("effectEditModalTextarea");_&&(j(_.value),m())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{P()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let _=document.getElementById("effectEditModal"),R=document.getElementById("effectEditModalTextarea"),U=document.getElementById("effectEditModalSave"),V=_?.dataset.effectName;if(!(!V||!R)){U.disabled=!0;try{let K=await y("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:V,content:R.value})}),z=await K.json().catch(()=>({}));K.ok?(w(z.message||g.t("effectSaveFallback"),!0),I(),await d()):w(z.error||g.t("saveFailed"),!1)}catch{w(g.t("effectsNetworkError"),!1)}finally{U.disabled=!1}}})),await d(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let _=document.getElementById("effectReloadBtn");_&&(_.disabled=!0);try{let R=await y("/admin/effects/reload",{method:"POST"}),U=await R.json().catch(()=>({}));R.ok?(w(U.message||g.t("effectsReloadFallback")),await d()):w(U.error||g.t("reloadFailed"),!1)}catch{w(g.t("effectsNetworkError"),!1)}finally{_&&(_.disabled=!1)}});async function x(_){if(!_)return;let R=new FormData;R.append("effectfile",_);try{let U=await y("/admin/effects/upload",{method:"POST",body:R}),V=await U.json().catch(()=>({}));U.ok?(w(V.message||g.t("effectUploadFallback")),await d()):w(V.error||g.t("uploadFailed"),!1)}catch{w(g.t("effectsNetworkError"),!1)}}let D=document.getElementById("effectUploadInput"),q=D&&!D.dataset.uploadWired;q&&(D.dataset.uploadWired="1"),(q?D:null)?.addEventListener("change",async _=>{await x(_.target.files?.[0]),_.target.value=""});let G=document.getElementById("sec-effects-mgmt");if(G){let _=0,R=z=>{z.preventDefault(),_++,G.classList.add("is-drag")},U=z=>{z.preventDefault()},V=z=>{z.preventDefault(),_=Math.max(0,_-1),_===0&&G.classList.remove("is-drag")},K=async z=>{z.preventDefault(),_=0,G.classList.remove("is-drag");let ae=z.dataTransfer?.files?.[0];if(ae){if(!/\.(dme|dme\.zip)$/i.test(ae.name)){w(g.t("fxToastBadExt"),!1);return}await x(ae)}};G.addEventListener("dragenter",R),G.addEventListener("dragover",U),G.addEventListener("dragleave",V),G.addEventListener("drop",K)}}function o(x){let D=(x||"").toLowerCase();return D.startsWith("glow")||D.includes("neon")?"GLOW":D.startsWith("shake")?"SHAKE":D.startsWith("wave")||D.startsWith("spin")||D.startsWith("bounce")||D.startsWith("zoom")||D.startsWith("fire")||D.includes("motion")?"MOTION":D.startsWith("rainbow")||D.startsWith("blink")||D.includes("color")?"COLOR":D.startsWith("type")||D.includes("text")?"TEXT":"MISC"}let n={all:[],filter:"ALL",selected:null};async function d(){let x=document.getElementById("effectsList");if(x)try{let D=await y("/admin/effects");if(!D.ok){x.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsLoadFailed")+"</span>";return}let q=await D.json();n.all=q.effects||[],i(),a()}catch{x.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsNetworkError")+"</span>"}}function i(){let x=document.getElementById("effectsFilterRow");if(!x)return;let D={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};n.all.forEach(U=>{D[o(U.name)]+=1});let q=n.all.length,G=[["ALL",g.t("fxChipAll"),q],["GLOW",g.t("fxCatGlow"),D.GLOW],["MOTION",g.t("fxCatMotion"),D.MOTION],["COLOR",g.t("fxCatColor"),D.COLOR],["SHAKE",g.t("fxCatShake"),D.SHAKE],["TEXT",g.t("fxCatText"),D.TEXT]];D.MISC>0&&G.push(["MISC",g.t("fxCatMisc"),D.MISC]);let _=G.map(([U,V,K])=>`<span class="hud-filter-chip ${n.filter===U?"is-active":""}" data-effect-filter="${U}">${V} ${K}</span>`).join(""),R=x.querySelector("[data-toolbar-spacer]");R?(x.querySelectorAll("[data-effect-filter]").forEach(U=>U.remove()),R.insertAdjacentHTML("beforebegin",_)):x.innerHTML=_,x.querySelectorAll("[data-effect-filter]").forEach(U=>{U.addEventListener("click",()=>{n.filter=U.dataset.effectFilter,i(),a()})})}function c(x){let D=(U,V)=>{let K=document.querySelector(U);K&&(K.textContent=V==null?"\u2014":String(V))},q=x.length,G=x.filter(U=>U.enabled!==!1).length,_=new Set(x.map(U=>o(U.name))),R=x.filter(U=>!p[U.name]).length;D("[data-eflib-total]",q),D("[data-eflib-active]",G),D("[data-eflib-cats]",_.size),D("[data-eflib-user]",R)}function a(){let x=document.getElementById("effectsList");if(!x)return;let D=n.all;c(D);let q=n.filter==="ALL"?D:D.filter(G=>o(G.name)===n.filter);if(!q.length){x.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(D.length?g.t("fxNoFilterMatch"):g.t("noEffectsLoaded"))+"</span>";return}b&&b.disconnect(),x.innerHTML="",q.forEach(G=>{let _=o(G.name),R=_==="GLOW"?"is-glow":_==="COLOR"?"is-color":_==="TEXT"?"is-text":"",U=p[G.name]||"",V=!!U,K=document.createElement("div");K.className="hud-effect-card"+(n.selected===G.name?" is-selected":""),K.dataset.effectName=G.name,K.title=[G.description,`file: ${G.filename}`].filter(Boolean).join(`
`);var z="effect_"+G.name;let ae=g.t(z)!==z?g.t(z):G.label||G.name,ie=V?"built-in":"user",W=U?`animation:${U};animation-play-state:paused;`:"";if(K.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${e(g.t("fxCat"+_.charAt(0)+_.slice(1).toLowerCase())||_)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${R}"><span class="effect-demo-text" style="${W}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${e(ae)}</div>
          <div class="hud-effect-card-meta">${e(ie)} \xB7 ${e(G.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${g.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${g.t("lbDelete")}</button>
        </div>
      `,x.appendChild(K),U){let se=k();se&&se.observe(K)}else{let se=M.get(G.name);se&&se!=="failed"?($(se),N(K,se)):se!=="failed"&&S(G.name).then(Z=>{if(!Z)return;let le=x.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(G.name)}"]`);le&&N(le,Z)})}K.addEventListener("click",se=>{se.target.closest("[data-role]")||v(G)});let X=K.querySelector('[data-role="edit"]'),ee=K.querySelector('[data-role="delete"]');X.addEventListener("click",async()=>{let se=document.getElementById("effectEditModal"),Z=document.getElementById("effectEditModalTitle"),le=document.getElementById("effectEditModalFile"),ce=document.getElementById("effectEditModalTextarea"),we=document.getElementById("effectEditModalSave");if(!se)return;L=document.activeElement instanceof HTMLElement?document.activeElement:null,Z.textContent=G.label||G.name,le.textContent=G.filename,ce.value=g.t("effectLoadContent"),ce.disabled=!0,we.disabled=!0,se.dataset.effectName=G.name,se.classList.remove("hidden"),se.classList.add("flex"),se.addEventListener("keydown",C),ce.focus();let Ie=document.getElementById("effectPreviewText"),ke=document.getElementById("effectPreviewStyle"),te=document.getElementById("effectPreviewError"),oe=document.getElementById("effectPreviewParams");Ie&&(Ie.style.animation="none"),ke&&(ke.textContent=""),te&&te.classList.add("hidden"),oe&&(oe.innerHTML="");try{let de=await y(`/admin/effects/${encodeURIComponent(G.name)}/content`),ne=await de.json().catch(()=>({}));de.ok?(ce.value=ne.content||"",ce.disabled=!1,we.disabled=!1,ce.focus(),j(ce.value),P()):(ce.value=ne.error||g.t("effectLoadContentFailed"),w(ne.error||g.t("effectLoadContentFailed"),!1))}catch{ce.value=g.t("effectsNetworkError"),w(g.t("effectsNetworkError"),!1)}}),ee.addEventListener("click",async()=>{let se=G.label||G.name;if(await window.HudConfirm?.open({icon:"\u2297",title:g.t("fxDeleteTitle"),subtitle:g.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${g.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${se}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${g.t("fxDeleteWarn")}
                </div>`,confirmLabel:g.t("fxDeleteConfirm"),cancelLabel:g.t("cancel"),width:400}))try{let le=await y("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:G.name})}),ce=await le.json().catch(()=>({}));le.ok?(w(ce.message||g.t("effectDeleteFallback"),!0),await d()):w(ce.error||g.t("deleteFailed"),!1)}catch{w(g.t("effectsNetworkError"),!1)}})})}function e(x){return String(x??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(x){let D={name:"",label:"",description:"",params:[]};if(!x)return D;let q=x.split(`
`),G="top",_=null;for(let R of q){let U=R.replace(/\r$/,""),V=U.trimStart();if(!V||V.startsWith("#"))continue;let K=U.length-V.length;if(K===0){if(G="top",_&&(D.params.push(_),_=null),V==="params:"){G="params";continue}let z=V.match(/^([a-z_]+):\s*(.+)$/);z&&(z[1]==="name"?D.name=z[2].trim():z[1]==="label"?D.label=z[2].trim():z[1]==="description"&&(D.description=z[2].trim()));continue}if(!(G!=="params"&&G!=="param-fields"&&G!=="options")){if(K===2&&(G==="params"||G==="param-fields"||G==="options")){_&&(D.params.push(_),_=null);let z=V.match(/^(\w+):$/);z&&(_={key:z[1]},G="param-fields");continue}if(K===4&&G==="param-fields"&&_){let z=V.match(/^(\w+):\s*(.*)$/);if(z){let ae=z[1],ie=z[2].trim();ae==="label"?_.label=ie:ae==="type"?_.type=ie:ae==="default"?_.default=ie:ae==="min"?_.min=parseFloat(ie):ae==="max"?_.max=parseFloat(ie):ae==="step"?_.step=parseFloat(ie):ae==="options"&&(_.options=[],G="options")}continue}if(G==="options"&&_&&K>=6){let z=V.match(/^-\s*value:\s*(.+)$/);z&&(_.options||(_.options=[]),_.options.push({value:z[1].trim(),label:z[1].trim()}));let ae=V.match(/^label:\s*(.+)$/);ae&&_.options&&_.options.length>0&&(_.options[_.options.length-1].label=ae[1].trim())}}}return _&&D.params.push(_),D}function h(x,D){let q=x.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),G=q?q[1]:"",_=x.match(/^animation:\s*["']?(.+?)["']?\s*$/m),R=_?_[1].trim():"";for(let U of D.params){let V=U.default!==void 0?U.default:"",K=new RegExp(`\\{${U.key}\\}`,"g");G=G.replace(K,V),R=R.replace(K,V)}return{keyframes:G,animation:R}}function t(x,D){if(x==="COLOR"){let q=D.find(G=>G.key==="duration");if(q&&q.default){let G=parseFloat(q.default);if(G<.25)return"crimson";if(G<.33)return"amber"}}if(x==="MOTION"){let q=D.find(G=>G.key==="height");if(q&&q.default){let G=parseFloat(q.default);if(G>30)return"crimson";if(G>24)return"amber"}}return"lime"}function s(x,D){return x==="COLOR"?D==="crimson"?g.t("fxHintFlashBlock"):D==="amber"?g.t("fxHintFlashWarn"):g.t("fxHintFlashOk"):D==="crimson"?g.t("fxHintAmpBlock"):D==="amber"?g.t("fxHintAmpWarn"):g.t("fxHintAmpOk")}function u(x,D){let q=l(D),{keyframes:G,animation:_}=h(D,q),R=o(x.name),U=q.params.filter(ce=>ce.type!=="select"),V=q.params.filter(ce=>ce.type==="select"),K=t(R,q.params),z=K==="crimson"?"BLOCK":K==="amber"?"WARN":"OK",ae=s(R,K),ie="fx-anim-"+x.name.replace(/[^a-z0-9]/gi,"-"),W=G&&_?f(ie,G):"",X=_?`animation:${_};animation-play-state:running;`:"",ee=U.map(ce=>{let we=parseFloat(ce.default)||0,Ie=ce.min??0,ke=ce.max??100,te=Math.max(0,Math.min(100,(we-Ie)/(ke-Ie)*100)),oe=(ce.label||"").match(/\(([^)]+)\)$/),de=oe?oe[1]:"",ne=ce.label||ce.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${e(ne)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${we}<span style="color:var(--color-text-muted);margin-left:2px">${e(de)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${te}%"></div>
          <div class="fx-slider-knob" style="left:${te}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${Ie}${e(de)}</span><span>${ke}${e(de)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${g.t("fxNoNumericParams")}</span>`,se=V.map(ce=>{let we=ce.options||[],Ie=String(ce.default||""),ke=we.map(te=>`<span class="fx-radio-btn${te.value===Ie||te.label===Ie?" is-active":""}">${e(te.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${e(ce.label||ce.key)}</div>
        <div class="fx-radio-group">${ke||"<span>\u2014</span>"}</div>
      </div>`}).join(""),Z=["dark","light","photo"].map(ce=>{let we=ce==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${ce}">
        <span class="fx-preview-bg-label">${ce.toUpperCase()}</span>
        <span class="fx-preview-text" style="${X}color:${we}">ABC</span>
      </div>`}).join(""),le=`${W}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${g.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${ee}</div>
      </div>`;return se&&(le+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${g.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${se}</div>
      </div>`),le+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${g.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${Z}</div>
      </div>
      <div class="fx-warn-box${K!=="lime"?" is-"+K:""}">
        <span class="fx-warn-chip${K!=="lime"?" is-"+K:""}">${z}</span>
        <span class="fx-warn-text">${e(ae)}</span>
      </div>
    </div>`,le}async function v(x){n.selected=x.name;let D=document.getElementById("effectsInspector"),q=document.getElementById("effectsInspectorTitle"),G=document.getElementById("effectsInspectorKicker"),_=document.getElementById("effectsInspectorBody");if(D){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),q&&(q.textContent=x.label||x.name),G&&(G.textContent="LOADING"),_&&(_.className="hud-inspector-body",_.textContent="# "+g.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(R=>{R.classList.toggle("is-selected",R.dataset.effectName===x.name)});try{let R=await y(`/admin/effects/${encodeURIComponent(x.name)}/content`),U=await R.json().catch(()=>({}));if(R.ok){let V=U.content||"";_&&(_.className="hud-inspector-body has-param-panel",_.innerHTML=u(x,V)),G&&(G.textContent=o(x.name))}else _&&(_.className="hud-inspector-body",_.textContent="# "+(U.error||g.t("effectLoadContentFailed"))),G&&(G.textContent="ERROR")}catch{_&&(_.className="hud-inspector-body",_.textContent="# "+g.t("effectsNetworkError")),G&&(G.textContent="NETWORK")}}}function E(){let x=document.getElementById("effectsInspectorReload"),D=document.getElementById("effectsInspectorEdit");x?.addEventListener("click",async()=>{if(!n.selected){w(g.t("fxSelectFirst"),!1);return}let q=n.all.find(G=>G.name===n.selected);q&&await v(q)}),D?.addEventListener("click",()=>{if(!n.selected){w(g.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(n.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",E())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:r}})()});var Ve=he(()=>{(function(){"use strict";var y={};window.DanmuEvents={on:function(w,g){y[w]||(y[w]=[]),y[w].push(g)},off:function(w,g){y[w]=(y[w]||[]).filter(function(f){return f!==g})},emit:function(w,g){(y[w]||[]).forEach(function(f){f(g)})}}})()});var Je=he(()=>{(function(){"use strict";let y="sec-events",w="/admin/audit?limit=200",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(B){return String(B).replace(/[&<>"']/g,function(P){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[P]})},L={events:[],filterSev:"all",filterCat:"all",timer:0};function H(B){let P=(B.source||B.kind||"").toLowerCase(),m=(B.action||"").toLowerCase();return P.includes("plugin")||m.includes("plugin")?"plugin":P.includes("webhook")||m.includes("webhook")?"webhook":P.includes("rate")||m.includes("rate")||m.includes("limit")?"rate":P.includes("filter")||m.includes("filter")?"filter":P.includes("overlay")||m.includes("overlay")||P==="broadcast"?"overlay":P.includes("backup")||m.includes("backup")?"backup":P.includes("msg")||P==="messaging"?"msg":P.includes("ws")||P==="websocket"?"ws":"system"}let C=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,I=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function p(B){let P=(B.action||B.kind||"").toLowerCase();return B.severity?B.severity:C.test(P)?"error":I.test(P)?"warn":"info"}function M(B){let P=B.source||"system",m=B.action||B.kind||"";return m?`${P.toUpperCase()}_${m.toUpperCase()}`:P.toUpperCase()}function F(B){if(!B)return"\u2014";let P=new Date(B*1e3),m=r=>String(r).padStart(2,"0");return`${m(P.getHours())}:${m(P.getMinutes())}:${m(P.getSeconds())}`}function $(B){if(B.message)return B.message;let P=B.meta||{},m=[];if(P.from&&P.to)m.push(`${P.from} \u2192 ${P.to}`);else if(P.text_preview)m.push(`"${P.text_preview.slice(0,60)}"`);else if(Object.keys(P).length){let r=Object.keys(P).slice(0,3);for(let o of r)m.push(`${o}=${JSON.stringify(P[o]).slice(0,30)}`)}return m.length?m.join(" \xB7 "):`${B.source||"system"}.${B.action||B.kind||"?"}`}function S(){return`
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
      </div>`}function N(){let B=document.querySelector("[data-ev-rows]");if(!B)return;let P=L.events,m=P.filter(n=>!(L.filterSev!=="all"&&p(n)!==L.filterSev||L.filterCat!=="all"&&H(n)!==L.filterCat));m.length===0?(B.innerHTML="",window.AdminEmpty?B.appendChild(window.AdminEmpty.render("events")):B.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):B.innerHTML=m.map(n=>{let d=p(n);return`
          <div class="admin-ev-v4__row" data-sev="${d}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${f(F(n.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${d}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${d}">${f(M(n))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${f(n.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${f($(n))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let r={all:P.length,info:0,warn:0,error:0};for(let n of P)r[p(n)]+=1;Object.keys(r).forEach(n=>{let d=document.querySelector(`[data-ev-cnt="${n}"]`);d&&(d.textContent=String(r[n]))});let o=document.querySelector("[data-ev-total]");o&&(o.textContent=`${m.length} / ${P.length}`)}async function b(){try{let B=await fetch(w,{credentials:"same-origin"});if(!B.ok)return;let P=await B.json();L.events=Array.isArray(P.events)?P.events:[],N()}catch{}}function k(){let B=document.getElementById(y);B&&B.addEventListener("click",P=>{let m=P.target.closest("[data-ev-sev]");if(m){B.querySelectorAll("[data-ev-sev]").forEach(n=>n.classList.toggle("is-active",n===m)),L.filterSev=m.dataset.evSev,N();return}let r=P.target.closest("[data-ev-cat]");if(r){B.querySelectorAll("[data-ev-cat]").forEach(n=>n.classList.toggle("is-active",n===r)),L.filterCat=r.dataset.evCat,N();return}let o=P.target.closest("[data-ev-action]");if(o){if(o.dataset.evAction==="refresh")b();else if(o.dataset.evAction==="export"){let n=new Blob([JSON.stringify(L.events,null,2)],{type:"application/json"}),d=URL.createObjectURL(n),i=document.createElement("a");i.href=d,i.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(d),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function A(){let B=document.querySelector(".admin-dash-grid"),P=document.getElementById(y);if(!P)return;let r=(B?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";P.style.display=r?"":"none",r?(b(),L.timer||(L.timer=setInterval(b,15e3))):L.timer&&(clearInterval(L.timer),L.timer=0)}function j(){let B=document.getElementById("settings-grid");!B||document.getElementById(y)||(B.insertAdjacentHTML("beforeend",S()),k(),A())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&j(),A()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",A),document.addEventListener("admin-panel-rendered",()=>{j(),A()}),j()})})()});var Ye=he(()=>{(function(){"use strict";let y="sec-modqueue",w="/admin/modqueue/list",L=window.AdminUtils&&window.AdminUtils.escapeHtml||function(m){return String(m).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},H={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},C={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},I={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function p(m){let r=0,o=String(m||"");for(let n=0;n<o.length;n++)r=r*31+o.charCodeAt(n)&65535;return r%360}function M(m){if(!m.created_at_ms)return null;let r=(Date.now()-m.created_at_ms)/1e3,o=Math.max(0,H.autoRejectSec-r);return Math.ceil(o)}function F(m,r){let o=(m.severity||"low").toLowerCase(),n=C[o]||C.low,d=p(m.fp),i=String(m.fp||"\u2014").slice(0,8),c=m.nick||m.nickname||ServerI18n.t("audienceAnonymous"),a=(c||"?").slice(0,2).toUpperCase(),e=r==="pending"?M(m):null,l=r==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${L(m.id||"")}">${L(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${L(m.id||"")}">${L(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${L(m.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",h=r==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${L(ServerI18n.t("modqueueStampApproved"))} \xB7 ${L(m.resolved_by||"admin")} \xB7 ${L(m.resolved_ago||"")}
        </div>`:r==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${m.auto_rejected?`${L(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${L(ServerI18n.t("modqueueAutoRejectTimeout",{n:H.autoRejectSec}))}`:`${L(ServerI18n.t("modqueueStampRejected"))} \xB7 ${L(m.resolved_by||"admin")} \xB7 ${L(m.resolved_ago||"")}`}
        </div>`:"",t=r==="pending"&&e!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${e}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${L(m.id||"")}" data-mq-sev="${L(o)}" style="--mq-sev:${n}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${d})">${L(a)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${L(c)}</div>
            <div class="admin-mq-card__fp">fp:${L(i)}</div>
          </div>
          <div class="admin-mq-card__time">${L(m.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${L(m.content||m.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${n}">${L(ServerI18n.t(I[o]||I.low))}</span>
          <span class="admin-mq-card__rule">${L(ServerI18n.t("modqueueRuleLabel"))}: ${L(m.rule||m.matched_rule||"?")}</span>
          ${t}
        </div>
        ${l}
        ${h}
      </div>`}function $(m,r,o){m&&(m.innerHTML=r.map(n=>F(n,o)).join(""))}function S(){let m=document.getElementById(y);if(!m)return;m.querySelectorAll("[data-mq-bulk]").forEach(o=>{o.disabled=!0}),m.querySelector(".admin-mq__body").hidden=!0;let r=m.querySelector("[data-mq-empty]");r&&window.AdminEmpty&&(r.hidden=!1,r.innerHTML="",r.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function N(){let m=document.getElementById(y);if(!m)return;if(H.pending.length+H.approved.length+H.rejected.length===0){S();return}m.querySelector(".admin-mq__body").hidden=!1;let o=m.querySelector("[data-mq-empty]");o&&(o.hidden=!0),$(m.querySelector("[data-mq-col-pending]"),H.pending,"pending"),$(m.querySelector("[data-mq-col-approved]"),H.approved,"approved"),$(m.querySelector("[data-mq-col-rejected]"),H.rejected,"rejected");let n=(a,e)=>{m.querySelectorAll(a).forEach(l=>{l.textContent=String(e)})};n("[data-mq-cnt-pending]",H.pending.length),n("[data-mq-cnt-approved]",H.approved.length),n("[data-mq-cnt-rejected]",H.rejected.length);let d=H.pending.length===0;m.querySelectorAll("[data-mq-bulk]").forEach(a=>{a.disabled=d});let i=H.pending[H.pending.length-1],c=m.querySelector("[data-mq-oldest]");if(c){let a=i?M(i):null;c.textContent=a!=null?`oldest: ${a}s`:""}n("[data-mq-throughput]",H.stats.throughput.toFixed?H.stats.throughput.toFixed(1):H.stats.throughput),n("[data-mq-avg-review]",H.stats.avg_review_sec.toFixed?H.stats.avg_review_sec.toFixed(1):H.stats.avg_review_sec),n("[data-mq-auto-rate]",Math.round(H.stats.auto_reject_pct||0)+"%")}async function b(){try{let m=await fetch(w,{credentials:"same-origin"});if(!m.ok){H.pending=[],H.approved=[],H.rejected=[],N();return}let r=await m.json();H.pending=Array.isArray(r.pending)?r.pending:[],H.approved=Array.isArray(r.approved)?r.approved:[],H.rejected=Array.isArray(r.rejected)?r.rejected:[],H.stats=r.stats||H.stats,typeof r.auto_reject_sec=="number"&&(H.autoRejectSec=r.auto_reject_sec),N()}catch{}}async function k(m,r,o){if(window.csrfFetch)try{let n=await window.csrfFetch("/admin/modqueue/"+r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:m,...o||{}})});if(n.ok)window.showToast&&window.showToast(r==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),b();else{let d=await n.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:d.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function A(){return`
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
      </div>`}function j(){let m=document.getElementById(y);m&&m.addEventListener("click",async r=>{let o=r.target.closest("[data-mq-action]");if(o){let d=o.dataset.mqId,i=o.dataset.mqAction;(i==="approve"||i==="reject")&&k(d,i);return}let n=r.target.closest("[data-mq-bulk]");if(n){let d=n.dataset.mqBulk,i=d==="approve-low";if(!await window.HudConfirm?.open({icon:i?"\u2713":"\u2298",title:i?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:i?"warn":"danger",body:i?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:i?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let a=d.startsWith("approve")?"approve":"reject",e=d.endsWith("low")?"low":"high";k(null,"bulk",{action:a,severity:e})}})}function B(){let m=document.querySelector(".admin-dash-grid"),r=document.getElementById(y);if(!r)return;let o=(location.hash||"").replace("#/","").split("/"),n=m?.dataset.activeRoute||o[0]||"",d=m?.dataset.activeLeaf||o[1]||"",i=n==="modqueue"||n==="moderation"&&(d==="queue"||d===""||d==="moderation");r.style.display=i?"":"none",i?(H.timer||(b(),H.timer=setInterval(b,4e3)),H.countdownTimer||(H.countdownTimer=setInterval(N,1e3))):(H.timer&&(clearInterval(H.timer),H.timer=0),H.countdownTimer&&(clearInterval(H.countdownTimer),H.countdownTimer=0))}function P(){let m=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!m||document.getElementById(y)||(m.insertAdjacentHTML("beforeend",A()),j(),B())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(y)&&P(),B()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",B),document.addEventListener("admin-panel-rendered",()=>{P(),B()}),P()})})()});var Qe=he(()=>{(function(){"use strict";let y="sec-modbans-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(A){return String(A).replace(/[&<>"']/g,function(j){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[j]})},g=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],f={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},L={fingerprint:"FP",ip:"IP",nick:"NICK"},H={rows:[],refreshTimer:0};async function C(){try{let A=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!A.ok)return;let j=await A.json();H.rows=Array.isArray(j.bans)?j.bans:[],M()}catch{}}function I(A){if(!A||A<=0)return"\u2014";let j=Math.floor(A/86400),B=Math.floor(A%86400/3600),P=Math.floor(A%3600/60);return j>0?`${j}d ${B}h`:B>0?`${B}h ${P}m`:`${P}m`}function p(A){let j=A.target_kind;return j==="fingerprint"?`fp:${(A.target||"").slice(0,8)}`:j==="nick"?`@${A.target}`:A.target||"\u2014"}function M(){let A=document.querySelector("[data-modbans-list]");if(!A)return;let j=H.rows||[],B=document.querySelector("[data-modbans-count]");if(B&&(B.textContent=String(j.length)),j.length===0){A.innerHTML="";let P=window.AdminEmpty.render("blacklist");P.dataset.emptyKind="modbans",A.appendChild(P);return}A.innerHTML=j.map(function(P){let m=P.status==="expired",r=P.status==="permanent",o="admin-modbans-chip is-"+P.status,n=r?ServerI18n.t("modbansPermanent"):m?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:I(P.remaining_s)}),d=encodeURIComponent(P.target_kind)+"|"+encodeURIComponent(P.target);return`
        <div class="admin-modbans-row ${m?"is-expired":""}">
          <span class="admin-modbans-target">${w(p(P))}</span>
          <span class="admin-modbans-kind">${w(L[P.target_kind]||P.target_kind)}</span>
          <span class="admin-modbans-reason">${w(P.reason||"\u2014")}</span>
          <span class="${o}">
            ${P.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${w(n)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${d}"
            ${m?"disabled":""}
            title="${m?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${m?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function F(A){let j=A||{},B=j.kind||"ban",P=window.HudConfirm,m=!j.target,r=j.target_kind||"fingerprint",o=j.target||"";return new Promise(function(n){if(!P){n(!1);return}let d=86400,i=!1,c=12,a="hour",e=document.createElement("div");e.className="admin-modbans-modal-body",e.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${w(f[r]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${w(L[r]||"?")} ${w((B||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${w(o?p({target_kind:r,target:o}):"\u2014")}</div>
          </div>
        </div>
        ${m?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(z){return`<button type="button" class="admin-modbans-modal-preset${z===r?" is-active":""}"
                data-modbans-target-kind="${z}">${w(f[z])} ${w(L[z])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${g.map(function(z){return`<button type="button" class="${"admin-modbans-modal-preset"+(z.defaultPick?" is-active":"")+(z.permanent?" is-permanent":"")}" data-modbans-duration="${z.val}">${z.labelKey?ServerI18n.t(z.labelKey):z.label}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let l=e.querySelector("[data-modbans-custom-row]"),h=e.querySelector("[data-modbans-custom-input]"),t=e.querySelector("[data-modbans-custom-seconds]"),s=e.querySelector("[data-modbans-when]"),u=e.querySelector("[data-modbans-custom]"),v=e.querySelector("[data-modbans-target]"),E=e.querySelector("[data-modbans-target-icon]"),T=e.querySelector("[data-modbans-target-label]"),x=e.querySelector("[data-modbans-target-val]"),D=function(){E.textContent=f[r]||"?",T.textContent=`${L[r]||"?"} ${(B||"ban").toUpperCase()}`,x.textContent=o?p({target_kind:r,target:o}):"\u2014"},q=function(){return Math.max(1,parseInt(h.value,10)||1)*(a==="day"?86400:3600)},G=function(){if(d===0){s.textContent=ServerI18n.t("modbansWhenPermanent"),s.classList.remove("is-custom");return}let z=new Date(Date.now()+d*1e3),ae=W=>String(W).padStart(2,"0"),ie=`${z.getFullYear()}-${ae(z.getMonth()+1)}-${ae(z.getDate())} ${ae(z.getHours())}:${ae(z.getMinutes())}`;i?(s.textContent=ServerI18n.t("modbansWhenCustom",{n:c,unit:ServerI18n.t(a==="day"?"modbansDay":"modbansHour"),stamp:ie}),s.classList.add("is-custom")):(s.textContent=ServerI18n.t("modbansWhenPreset",{dur:I(d),stamp:ie}),s.classList.remove("is-custom"))},_=function(){let z=q();t.textContent=`= ${z.toLocaleString()}s`,i&&(c=Math.max(1,parseInt(h.value,10)||1),d=z,G())},R=e.querySelector("[data-modbans-presets]"),U=function(){i=!0,l.hidden=!1,R.querySelectorAll(".admin-modbans-modal-preset").forEach(function(z){z.classList.toggle("is-active",z===u)}),_()},V=function(z){i=!1,l.hidden=!0,R.querySelectorAll(".admin-modbans-modal-preset").forEach(function(ae){ae.classList.toggle("is-active",ae===z)})};D(),G(),_(),e.addEventListener("click",function(z){let ae=z.target.closest("[data-modbans-target-kind]");if(ae){r=ae.dataset.modbansTargetKind,ae.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(X){X.classList.toggle("is-active",X===ae)}),D();return}if(z.target.closest("[data-modbans-custom]")){U();return}let ie=z.target.closest("[data-modbans-custom-unit]");if(ie){a=ie.dataset.modbansCustomUnit||"hour",e.querySelectorAll("[data-modbans-custom-unit]").forEach(function(X){X.classList.toggle("is-active",X===ie)}),_();return}let W=z.target.closest("[data-modbans-duration]");W&&(d=parseInt(W.dataset.modbansDuration,10)||0,V(W),G())}),h.addEventListener("input",_),v&&v.addEventListener("input",function(){o=v.value.trim(),D()});let K=e.querySelector("[data-modbans-reason]");P.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:e,width:480}).then(function(z){if(!z){n(!1);return}if(!o){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),n(!1);return}d===0?P.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${w(p({target_kind:r,target:o}))}</b>`})}).then(function(ae){if(!ae){n(!1);return}$(r,o,d,K.value.trim(),B).then(n)}):$(r,o,d,K.value.trim(),B).then(n)})})}async function $(A,j,B,P,m){try{let r=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:A,target:j,duration_s:B,reason:P||"",kind:m||"ban"})});if(!r.ok)throw new Error(`HTTP ${r.status}`);return window.showToast&&window.showToast(B===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:I(B)}),!0),C(),!0}catch(r){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:r.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function S(A){let j=(A||"").split("|");if(j.length!==2)return;let B=decodeURIComponent(j[0]),P=decodeURIComponent(j[1]);try{let m=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:B,target:P})});if(!m.ok)throw new Error(`HTTP ${m.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),C()}catch(m){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:m.message||ServerI18n.t("modbansUnknownError")}),!1)}}function N(){return`
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
      </div>`}function b(){let A=document.getElementById(y);if(!A||A.dataset.modbansBound==="1")return;A.dataset.modbansBound="1",A.addEventListener("click",function(B){if(B.target.closest("[data-modbans-add]")){F({kind:"ban"});return}let P=B.target.closest("[data-modbans-unban]");P&&!P.disabled&&S(P.dataset.modbansUnban)});let j=A.querySelector("[data-modbans-list]");j&&window.AdminSkeletons&&!j.children.length&&j.appendChild(window.AdminSkeletons.listRows({rows:4}))}function k(){let A=document.getElementById("settings-grid");!A||document.getElementById(y)||(A.insertAdjacentHTML("beforeend",N()),b(),C(),H.refreshTimer||(H.refreshTimer=setInterval(C,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&k()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&k()}),window.ModBans={openPicker:F,refreshList:C,formatTarget:p,formatRemaining:I}})()});var Xe=he(()=>{(function(){"use strict";let y="admin-mobile-nav-root",w=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],g=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"backup",icon:"\u21EA",labelKey:"mnavBackup",descKey:"mnavDescBackup"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"},{route:"integrations",icon:"\u232C",labelKey:"adminNavIntegrations",desc:"Slido \xB7 Discord \xB7 OBS"}],f={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",security:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets",webhooks:"integrations",plugins:"integrations","api-tokens":"integrations",scheduler:"integrations"},L=!1,H=0;function C(){return`
      <nav id="${y}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow id="admin-mobile-more-menu" hidden>
          ${g.map(b=>`
            <button type="button" class="admin-mobile-nav__o-row" data-mn-route="${b.route}">
              <span class="admin-mobile-nav__o-icon">${b.icon}</span>
              <span class="admin-mobile-nav__o-txt">
                <span class="admin-mobile-nav__o-label">${b.labelKey?ServerI18n.t(b.labelKey):b.label}</span>
                <span class="admin-mobile-nav__o-desc">${b.descKey?ServerI18n.t(b.descKey):b.desc||""}</span>
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
          ${w.map(b=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${b.id}" data-mn-route="${b.route||""}" ${b.id==="more"?'aria-expanded="false" aria-controls="admin-mobile-more-menu"':'aria-current="false"'}>
              <span class="admin-mobile-nav__icon">${b.icon}</span>
              <span class="admin-mobile-nav__label">${b.labelKey?ServerI18n.t(b.labelKey):b.label}</span>
              ${b.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${b.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </nav>`}function I(){let b=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",k=f[b]||b;return w.some(A=>A.id===k)?k:g.some(A=>A.route===k)?"more":""}function p(){let b=document.getElementById(y);if(!b)return;let k=I();b.querySelectorAll("[data-mn-tab]").forEach(A=>{A.classList.toggle("is-active",A.dataset.mnTab===k),A.dataset.mnTab!=="more"&&A.setAttribute("aria-current",A.dataset.mnTab===k?"page":"false")})}function M(b){let k=document.getElementById(y);if(!k)return;L=b,k.dataset.overflow=b?"open":"closed",k.querySelector("[data-mn-overflow]").hidden=!b,k.querySelector("[data-mn-backdrop]").hidden=!b;let A=k.querySelector("[data-mn-tab='more']");A?.classList.toggle("is-active",b),A?.setAttribute("aria-expanded",b?"true":"false")}function F(b){if(b.target.closest("[data-mn-backdrop]")){M(!1);return}if(b.target.closest("[data-mn-logout]")){M(!1);let j=document.getElementById("logoutButton");j&&j.click();return}let k=b.target.closest("[data-mn-tab]");if(k){if(k.dataset.mnTab==="more"){M(!L);return}M(!1),k.dataset.mnRoute&&(location.hash="#/"+k.dataset.mnRoute);return}let A=b.target.closest("[data-mn-route]");A&&A.classList.contains("admin-mobile-nav__o-row")&&(M(!1),location.hash="#/"+A.dataset.mnRoute)}async function $(){try{let b=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!b.ok)return;let k=await b.json(),A=Array.isArray(k.pending)?k.pending.length:0;H=A;let j=document.querySelector("[data-mn-badge='pending']");if(!j)return;j.textContent=String(A),j.hidden=!(A>0)}catch{}}function S(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let b=0;function k(){let A=document.activeElement,j=A&&(A.tagName==="INPUT"||A.tagName==="TEXTAREA"||A.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!j)}document.addEventListener("focusin",()=>{cancelAnimationFrame(b),b=requestAnimationFrame(k)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(b),b=requestAnimationFrame(()=>setTimeout(k,50))})}function N(){document.getElementById(y)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",C()),document.addEventListener("click",F),window.addEventListener("hashchange",()=>{M(!1),p()}),p(),$(),setInterval($,8e3),S())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N()})()});var Ze=he(()=>{(function(){"use strict";var y="admin-session-expired-root",w=!1,g=null;function f(p,M){try{var F=window.ServerI18n&&ServerI18n.t(p);return F&&F!==p?F:M}catch{return M}}function L(){var p=document.getElementById(y);if(p&&p.remove(),document.body.classList.remove("is-session-expired"),w=!1,g&&g.focus)try{g.focus()}catch{}g=null}function H(p){if(p.key==="Tab"){var M=document.getElementById(y);if(M){var F=M.querySelectorAll("input, button");if(F.length){var $=F[0],S=F[F.length-1];p.shiftKey&&document.activeElement===$?(p.preventDefault(),S.focus()):!p.shiftKey&&document.activeElement===S&&(p.preventDefault(),$.focus())}}}}function C(){if(!(w||document.getElementById(y))){w=!0,g=document.activeElement,document.body.classList.add("is-session-expired");var p=document.createElement("div");p.id=y,p.className="admin-sx",p.setAttribute("role","alertdialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","admin-sx-title"),p.setAttribute("aria-describedby","admin-sx-body"),p.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+f("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+f("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+f("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+f("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+f("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+f("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(p),document.addEventListener("keydown",H,!0);var M=p.querySelector("#admin-sx-password");setTimeout(function(){try{M.focus()}catch{}},30),p.querySelector("[data-sx-form]").addEventListener("submit",function(F){F.preventDefault(),I(p,M)})}}function I(p,M){var F=p.querySelector("[data-sx-error]"),$=p.querySelector(".admin-sx__submit");F.hidden=!0,$.disabled=!0;var S=new URLSearchParams;S.set("password",M.value),p.querySelector("#admin-sx-remember").checked&&S.set("remember","1");var N=window.__adminRawFetch||window.fetch;N.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:S.toString()}).then(function(b){return b.json().then(function(k){return{status:b.status,data:k}},function(){return{status:b.status,data:{}}})}).then(function(b){if($.disabled=!1,b.status===200&&b.data&&b.data.ok){var k=document.querySelector('meta[name="csrf-token"]');k&&b.data.csrf_token&&(k.content=b.data.csrf_token),document.removeEventListener("keydown",H,!0),L(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(f("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}b.status===429?F.textContent=f("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):F.textContent=f("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),F.hidden=!1,M.select()}).catch(function(){$.disabled=!1,F.textContent=f("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),F.hidden=!1})}window.AdminSessionExpired={open:C,close:L,isOpen:function(){return w}}})()});var et=he(()=>{(function(){"use strict";let y="admin-reconnect-banner",L=0,H=0,C="ok",I=0,p=5e3,M=!1,F=0;function $(o){if(C!==o){if(C=o,o==="ok"||o==="dismissed"){N(),o==="ok"&&(L=0,H=0,p=5e3);return}S()}}function S(){let o=document.getElementById(y);o||(o=document.createElement("div"),o.id=y,o.className="admin-rcb",o.setAttribute("role","status"),o.setAttribute("aria-live","polite"),document.body.insertBefore(o,document.body.firstChild)),o.dataset.state=C;let n=C==="exhausted",d=n?"admin-rcb--crimson":"admin-rcb--amber";o.className=`admin-rcb ${d}`,o.innerHTML=n?k():b(),o.querySelector("[data-rcb-action='retry']")?.addEventListener("click",j),o.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>$("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",n),F||(F=setInterval(A,250))}function N(){let o=document.getElementById(y);o&&o.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),F&&(clearInterval(F),F=0)}function b(){let o=Math.max(0,(I-Date.now())/1e3),n=p/1e3,d=Math.min(100,(n-o)/n*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:H})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${d}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function k(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function A(){if(C!=="reconnecting")return;let o=document.getElementById(y);if(!o)return;let n=Math.max(0,(I-Date.now())/1e3),d=p/1e3,i=Math.min(100,(d-n)/d*100),c=o.querySelector(".admin-rcb__progress-fill");c&&(c.style.width=i+"%")}function j(){H=0,L=0,p=5e3,$("reconnecting"),B()}async function B(){try{let o=await fetch("/admin/bootstrap",{credentials:"same-origin"});o.ok?P():o.status===401||o.status===403?$("ok"):m()}catch{m()}}function P(){$("ok")}function m(){if(L+=1,H+=1,H>=10){$("exhausted");return}L>=3&&(p=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,H-1))),I=Date.now()+p,$("reconnecting"),setTimeout(B,p))}function r(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let o=window.csrfFetch,n=window.fetch;window.__adminRawFetch=n,document.addEventListener("admin:session-restored",()=>{M=!1,P()});async function d(i){try{let c=await i;return c&&c.ok?C!=="ok"&&C!=="dismissed"&&P():c&&c.status===401&&!M?(M=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):c&&c.status>=500&&m(),c}catch(c){throw m(),c}}typeof o=="function"&&(window.csrfFetch=function(){return d(o.apply(this,arguments))}),window.fetch=function(i,c){let a=typeof i=="string"?i:i&&i.url||"",e=n.call(this,i,c);return a.startsWith("/admin/")||a.indexOf("//")===-1&&a.startsWith("admin/")?d(e):e}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var tt=he(()=>{(function(){"use strict";let y="admin-help-drawer-root",w={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},g=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],f=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function L(b){return b==null?"":String(b).replace(/[&<>"']/g,function(k){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[k]})}function H(){let b=(location.hash||"").replace("#/","").split("/")[0]||"";return w[b]?b:"_default"}function C(){return`
      <div id="${y}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function I(){let b=w[H()],k=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",A=b.titleKey?ServerI18n.t(b.titleKey):b.title,j=b.tipKeys.map(r=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${L(typeof r=="string"?ServerI18n.t(r):r.literal)}</span>
      </div>`).join(""),B=b.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${L(ServerI18n.t(b.fieldTipKey))}</span>
      </div>`:"",P=g.map(r=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${L(r.term)}</div>
        <div class="admin-help__glossary-def">${L(ServerI18n.t(r.defKey))}</div>
      </div>`).join(""),m=f.map(r=>`
      <a class="admin-help__resource" href="${L(r.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${L(r.label)}</span>
        <span class="admin-help__resource-url">${L(r.url.replace(/^https?:\/\//,""))}</span>
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
            <span class="admin-help__route-title">${L(A)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${j}</div>
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
          <div class="admin-help__glossary">${P}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${m}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${k?"v"+L(k):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function p(){let b=document.getElementById(y);b||(document.body.insertAdjacentHTML("beforeend",C()),b=document.getElementById(y),b.addEventListener("click",k=>{if(k.target.closest("[data-help-close]")){M();return}k.target.closest("[data-help-shortcuts]")&&(M(),window.AdminShortcuts&&window.AdminShortcuts.open())})),b.querySelector("[data-help-body]").innerHTML=I(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",$)}function M(){let b=document.getElementById(y);b&&b.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",$)}function F(){document.getElementById(y)?M():p()}function $(b){b.key==="Escape"&&(b.preventDefault(),M())}function S(b){let k=b.target;k&&(k.tagName==="INPUT"||k.tagName==="TEXTAREA"||k.isContentEditable)||b.key==="F1"&&(b.preventDefault(),F())}function N(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",S)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N(),window.AdminHelp={open:p,close:M,toggle:F}})()});var nt=he(()=>{(function(){"use strict";var y="admin-shortcuts-root",w=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function g(m,r){try{var o=window.ServerI18n&&ServerI18n.t(m);return o&&o!==m?o:r}catch{return r}}function f(m,r){window.showToast&&window.showToast(m,r!==!1)}function L(m,r){return(window.csrfFetch||window.fetch)(m,r||{})}function H(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}async function C(){var m=!1;try{var r=await fetch("/admin/broadcast/status",{credentials:"same-origin"});r.ok&&(m=(await r.json()).mode==="live")}catch{}try{var o=await L("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:m?"standby":"live"})});if(!o.ok)throw new Error("HTTP "+o.status);f(g(m?"ksToastDisplayOff":"ksToastDisplayOn",m?"\u5DF2\u95DC\u9589":"\u5DF2\u958B\u555F")),window.AdminDashboard&&window.AdminDashboard.refreshCockpitOverlay&&window.AdminDashboard.refreshCockpitOverlay()}catch{f(g("cmdkToastToggleFailed","\u5207\u63DB\u5931\u6557"),!1)}}async function I(){try{var m=await L("/admin/overlay/clear",{method:"POST"});if(!m.ok)throw new Error("HTTP "+m.status);f(g("toastCleared","\u5DF2\u6E05\u7A7A"))}catch{f(g("toastClearFailed","\u6E05\u7A7A\u5931\u6557"),!1)}}async function p(){var m="idle";try{var r=await fetch("/admin/poll/status",{credentials:"same-origin"});r.ok&&(m=(await r.json()).state||"idle")}catch{}if(m==="idle"){location.hash="#/polls",f(g("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var o=m==="active";try{var n=await L(o?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!n.ok)throw new Error("HTTP "+n.status);f(g(o?"ksToastPollEnded":"ksToastPollStarted",o?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{f(g("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function M(m){return w?m.metaKey:m.ctrlKey}var F=w?"\u2318":"Ctrl",$=[{group:"global",keys:[F,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(m){return M(m)&&(m.key==="k"||m.key==="K")},run:H},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(m){return m.key==="?"&&!M(m)&&!m.altKey||m.key==="/"&&M(m)},run:function(){j()}},{group:"global",keys:[F,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u5207\u63DB\u986F\u793A\u5C64",match:function(m){return M(m)&&m.shiftKey&&(m.key==="d"||m.key==="D")},run:C},{group:"global",keys:[F,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u5927\u87A2\u5E55",match:function(m){return M(m)&&m.shiftKey&&m.key==="Backspace"},run:I},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(m){return!M(m)&&"jkJK".indexOf(m.key)>=0},run:function(m){window.AdminLiveFeed.moveFocus(m.key==="j"||m.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(m){return!M(m)&&(m.key==="b"||m.key==="B")},run:function(m){window.AdminLiveFeed.blockFocused(m.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(m){return!M(m)&&m.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(m){return!M(m)&&(m.key==="p"||m.key==="P")},run:p}];function S(m){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(m):m==null?"":String(m).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})}function N(m){return $.filter(function(r){return r.group===m}).map(function(r){var o=r.keys.map(function(n){return n==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+S(n)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+S(g(r.labelKey,r.fallback))+'</span><span class="admin-ks__keys">'+o+"</span></div>"}).join("")}function b(){var m=document.getElementById(y);m&&m.remove(),document.removeEventListener("keydown",k,!0)}function k(m){(m.key==="Escape"||m.key==="?")&&(m.preventDefault(),b())}function A(){if(!document.getElementById(y)){var m=document.createElement("div");m.id=y,m.className="admin-ks",m.setAttribute("role","dialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","admin-ks-title"),m.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+S(g("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+S(g("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+N("global")+'</div><div class="admin-ks__group-label">'+S(g("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+N("feed")+'</div><p class="admin-ks__note">'+S(g("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+S(g("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(m),m.addEventListener("click",function(o){o.target.closest("[data-ks-close]")&&b()}),document.addEventListener("keydown",k,!0);var r=m.querySelector(".admin-ks__close");r&&setTimeout(function(){try{r.focus()}catch{}},30)}}function j(){document.getElementById(y)?b():A()}function B(m){if(!m)return!1;if(m.isContentEditable)return!0;var r=(m.tagName||"").toLowerCase();return r==="input"||r==="textarea"||r==="select"}function P(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(m){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var r=B(document.activeElement),o=0;o<$.length;o++){var n=$[o];if(n.group==="feed"){if(r||!P())continue}else if(r&&!M(m))continue;if(n.match(m)){m.preventDefault(),n.run(m);return}}}),window.AdminShortcuts={open:A,close:b,toggle:j,list:function(){return $.slice()}}})()});var at=he(()=>{(function(){"use strict";let y="theme-mode",w="admin-theme-mode",g="admin-theme-toggle";(function(){try{if(localStorage.getItem(y)!=null)return;let S=localStorage.getItem(w);(S==="light"||S==="dark"||S==="auto")&&(localStorage.setItem(y,S),localStorage.removeItem(w))}catch{}})();function L(){try{let $=localStorage.getItem(y);if($==="light"||$==="dark"||$==="auto")return $}catch{}return"auto"}function H($){try{localStorage.setItem(y,$)}catch{}}function C($){let S=document.documentElement;$==="auto"?S.removeAttribute("data-theme"):S.setAttribute("data-theme",$),p($)}function I($){return $==="light"||$==="dark"?$:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function p($){let S=document.getElementById(g);if(!S)return;let N=I($);S.dataset.mode=$,S.dataset.effective=N,S.textContent=$==="auto"?"\u25D0":N==="light"?"\u2600":"\u263E",S.title=$==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:N==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):$==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function M(){let $=L(),S=$==="auto"?"light":$==="light"?"dark":"auto";H(S),C(S)}function F(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let $=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,S=document.getElementById(g);if(S){$&&S.classList.contains("admin-theme-toggle--floating")&&$.parentNode&&!$.parentNode.contains(S)&&(S.classList.remove("admin-theme-toggle--floating"),$.parentNode.insertBefore(S,$));return}let N=document.createElement("button");N.id=g,N.type="button",N.className="admin-theme-toggle",N.addEventListener("click",M),$&&$.parentNode?$.parentNode.insertBefore(N,$):(N.classList.add("admin-theme-toggle--floating"),document.body.appendChild(N)),p(L())}if(C(L()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{L()==="auto"&&p("auto")})}catch{}window.addEventListener("storage",$=>{$.key===y&&C(L())}),window.AdminThemeSwitcher={getMode:L,setMode:function($){$!=="auto"&&$!=="light"&&$!=="dark"||(H($),C($),p($),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:$}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{F(),new MutationObserver(F).observe(document.body,{childList:!0,subtree:!0})}):(F(),new MutationObserver(F).observe(document.body,{childList:!0,subtree:!0}))})()});var it=he(()=>{(function(){"use strict";var y={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},w=[];window.DanmuStore={get:function(g){return y[g]},set:function(g,f){y[g]=f,w.forEach(function(L){L(g,f)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+g,f)},subscribe:function(g){w.push(g)},getAll:function(){return Object.assign({},y)}}})()});var st=he(()=>{(function(){"use strict";let g=0;function f(){return window.__adminCtx||{}}function L(){let p=f();return typeof p.getSettings=="function"?p.getSettings()||{}:{}}function H(){let p=L();if(p&&typeof p.OpsContact<"u"){let M=p.OpsContact;if(Array.isArray(M))return M[3]||M[0]||null;if(typeof M=="string")return M}return null}function C(){let p=f().appContainer||document.getElementById("app-container");if(!p)return;let M=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";p.innerHTML=`
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
    `;let F=p.querySelector("[data-login-reveal]");F&&F.addEventListener("click",()=>{let b=document.getElementById("password");if(!b)return;let k=b.type==="text";b.type=k?"password":"text",F.textContent=ServerI18n.t(k?"adminLoginReveal":"adminLoginHide");try{b.focus()}catch{}});let $=document.getElementById("loginForm"),S=document.getElementById("password"),N=document.getElementById("loginAttemptsHint");if($){try{let b=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(b)&&b>0){g=b;let k=Math.max(0,5-g);if(N&&g>0&&k>0){N.hidden=!1;let A=document.getElementById("password");A&&A.classList.add("is-error"),N.textContent=ServerI18n.t("loginAttemptsRemaining",{n:k})}}}catch{}$.addEventListener("submit",async b=>{if(b.preventDefault(),!S)return;let k=new URLSearchParams;k.set("password",S.value),document.getElementById("admin-login-remember")?.checked&&k.set("remember","1");try{let A=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:k.toString(),redirect:"manual"});if(A.status===429){let j=A.headers.get("Retry-After"),B=parseInt(j,10),P=Number.isFinite(B)&&B>0?B:300;I(P);return}g+=1;try{sessionStorage.setItem("admin_login_attempts",String(g))}catch{}window.location.reload()}catch(A){console.error("Login submit failed:",A),N&&(N.hidden=!1,N.textContent=ServerI18n.t("networkError"))}})}}function I(p){let M=document.getElementById("adminLoginCard");if(!M)return;let F=H(),$=F?`<a class="admin-lockout-contact" href="${F}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";M.classList.add("admin-lockout-card"),M.innerHTML=`
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
        ${$}
      </div>
    `;let S=document.getElementById("lockoutCountdown"),N=p,b=A=>{let j=Math.floor(A/60),B=A%60;return`${String(j).padStart(2,"0")}:${String(B).padStart(2,"0")}`};S&&(S.textContent=b(N));let k=setInterval(()=>{N-=1,S&&(S.textContent=b(Math.max(0,N))),N<=0&&(clearInterval(k),g=0,C(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:C,renderLockout:I}})()});var ot=he(()=>{(function(){"use strict";function y(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function w(a){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(a):String(a??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function g(){try{let a=y();await a.prime();let e=a.get("history_stats"),[l,h,t]=await Promise.all([e?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!h.ok)return;let s=e||(l&&l.ok?await l.json():null);if(!s)return;let u=(await h.json()).distribution||[],v=s.stats&&s.stats.total||0,E=u.reduce((R,U)=>U.count>(R?.count||-1)?U:R,null),T=E?E.count:0,x=E?(E.hour||"").slice(-5):"\u2014",D=document.querySelector('[data-kpi="messages"]');D&&(D.querySelector("[data-kpi-value]").textContent=v.toLocaleString());let q=document.querySelector('[data-kpi="peak"]');q&&(q.querySelector("[data-kpi-value]").textContent=T.toLocaleString());let G=document.querySelector('[data-kpi="unique-fp"]');if(G){let R=new Set;(s.records||[]).forEach(U=>{let V=U.fingerprint||U.fp||U.user_fingerprint;V&&R.add(V)}),G.querySelector("[data-kpi-value]").textContent=R.size.toLocaleString()}let _=document.querySelector('[data-kpi="session"]');if(_){let R=t&&t.ok?await t.json():null,U=R&&R.status==="live",V=_.querySelector("[data-kpi-value]");if(U&&R.started_at){let K=Math.max(0,Math.floor(Date.now()/1e3-R.started_at)),z=Math.floor(K/3600),ae=Math.floor(K%3600/60);V.textContent=z>0?`${z}:${String(ae).padStart(2,"0")}:${String(K%60).padStart(2,"0")}`:`${ae}:${String(K%60).padStart(2,"0")}`}else V.textContent="\u2014"}}catch{}}function f(a,e){let l=document.querySelector(a);if(l){if(typeof e!="number"||e<=0){l.hidden=!0;return}l.hidden=!1,l.textContent=e>999?"999+":String(e)}}async function L(){try{let a=y();await a.prime();let e=a.get("blacklist"),l=a.get("widgets"),h=a.get("history_stats"),t=a.get("effects"),s=a.get("themes");f("[data-count-blacklist]",Array.isArray(e)?e.length:0),f("[data-count-widgets]",Array.isArray(l?.widgets)?l.widgets.length:0),f("[data-count-messages]",h?.stats?.last_24h||0),f("[data-count-effects]",Array.isArray(t?.effects)?t.effects.length:0),f("[data-count-themes]",Array.isArray(s?.themes)?s.themes.length:0);try{let u=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(u.ok){let v=await u.json();f("[data-count-plugins]",Array.isArray(v?.plugins)?v.plugins.length:0)}}catch{}}catch{}}async function H(){L(),C(),i()}async function C(){let a=document.querySelector("[data-dash-poll-body]"),e=document.querySelector("[data-dash-poll-timer]");if(a)try{let l=y();await l.prime();let t=l.get("metrics");if(!t){let T=await fetch("/admin/metrics",{credentials:"same-origin"});if(!T.ok)return;t=await T.json()}let s=t.poll_state;if(!s||!s.active||!Array.isArray(s.options)||s.options.length===0){a.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,e&&(e.textContent="");return}let u=s.options.reduce((T,x)=>T+(x.votes||0),0),v=["A","B","C","D","E","F"],E=0;if(s.options.forEach((T,x)=>{(T.votes||0)>(s.options[E].votes||0)&&(E=x)}),a.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${w(s.question||ServerI18n.t("dashPollRunning"))}</div>`+s.options.map((T,x)=>{let D=u?Math.round(T.votes/u*100):0;return`
            <div class="admin-dash-poll-opt ${x===E&&u>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${v[x]||String(x+1)}</span>
                <span class="label">${w(T.label||"")}</span>
                <span class="pct">${D}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:T.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${D}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:u})}</div>`,e){let T=s.remaining_seconds;e.textContent=typeof T=="number"&&T>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(T/60),ss:String(T%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function I(a){let e=a.visible!==!1,l=a.config&&a.config.title||a.type||"widget",h=(a.type||"widget").toUpperCase(),t=(a.position||"\u2014").toUpperCase(),s=e?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",u=a.created_at&&e?Math.max(0,Math.floor(Date.now()/1e3-a.created_at)):null,v=u!=null?(()=>{let E=Math.floor(u/86400),T=Math.floor(u%86400/3600),x=Math.floor(u%3600/60),D=u%60;return E>0?`UPTIME \xB7 ${E}d ${String(T).padStart(2,"0")}h`:T>0?`UPTIME \xB7 ${T}:${String(x).padStart(2,"0")}:${String(D).padStart(2,"0")}`:`UPTIME \xB7 ${x}:${String(D).padStart(2,"0")}`})():`STATUS \xB7 ${e?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${w(a.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${s}"></span>
          <span class="kind">${w(h)}</span>
          <span class="cat">${w(t)}</span>
        </div>
        <div class="title">${w(l)}</div>
        <div class="uptime">${v}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${e?" is-active":""}" data-widget-action="toggle" data-running="${e?"1":"0"}">${e?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function p(a,e){try{let l=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:a,config:{visible:!e}})});if(!l.ok)throw new Error("HTTP "+l.status);F()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function M(a){a.dataset.bound!=="1"&&(a.dataset.bound="1",a.addEventListener("click",e=>{let l=e.target.closest(".admin-dash-widget-tile");if(!l)return;let h=e.target.dataset.widgetAction,t=l.dataset.widgetId;if(!(!h||!t)){if(h==="toggle")p(t,e.target.dataset.running==="1");else if(h==="config"){let s=document.querySelector('[data-route="widgets"]');s&&s.click()}}}))}async function F(){let a=document.querySelector("[data-dash-widgets]");if(a)try{let e=y();await e.prime();let l=e.get("widgets");if(!l){let t=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!t.ok){a.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}l=await t.json()}let h=(l.widgets||l.items||[]).slice(0,4);if(h.length===0){a.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}a.innerHTML='<div class="admin-dash-widget-grid">'+h.map(I).join("")+"</div>",M(a)}catch{a.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let $=null,S=null,N=null;function b(a){let e=Math.max(0,Math.floor(Date.now()/1e3-a)),l=Math.floor(e/3600),h=Math.floor(e%3600/60),t=e%60;return l>0?`${l}:${String(h).padStart(2,"0")}:${String(t).padStart(2,"0")}`:`${String(h).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function k(a){let e=document.getElementById("admin-session-banner"),l=document.getElementById("sec-live-feed");if(l&&l.classList.toggle("is-idle-collapsed",!(a&&a.status==="live")),e&&e.classList.toggle("is-hero",!(a&&a.status==="live")),!e)return;if($=a,!(a&&a.status==="live"))e.hidden=!1,e.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let t=a.started_at||Date.now()/1e3;e.hidden=!1,e.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${w(a.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
          <div class="admin-session-live-actions" data-current-behavior="${a.viewer_end_behavior||"continue"}">
            <a class="admin-ui-action admin-session-display-link" href="#/overlay" title="${ServerI18n.t("dashSessDisplayLinkTitle")}">${ServerI18n.t("dashSessDisplayLink")}</a>
            <button type="button" class="admin-ui-action is-danger admin-session-end-btn" data-sess-action="close">${ServerI18n.t("dashSessEndBtn")}</button>
          </div>
        </div>`,A(t)}e.dataset.bound||(e.dataset.bound="1",e.addEventListener("click",B))}function A(a){N&&clearInterval(N);let e=()=>{let l=document.querySelector("[data-sess-timer]");l&&(l.textContent=b(a))};e(),N=setInterval(e,1e3)}function j(){N&&(clearInterval(N),N=null)}async function B(a){let e=a.target.closest("[data-sess-action]");if(!e)return;let l=e.dataset.sessAction;if(l==="open"){let h=document.querySelector("[data-sess-name]"),t=(h?h.value:"").trim();if(!t){h&&h.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}e.disabled=!0;try{let s=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})}),u=await s.json();if(!s.ok){window.showToast&&window.showToast(u.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:t}),!0),k(u.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{e.disabled=!1}}else if(l==="close"){let h=e.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",t=(v,E)=>`<option value="${v}"${v===h?" selected":""}>${E}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
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
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;e.disabled=!0;let u=document.getElementById("sessCloseBehavior")?.value;if(u&&u!==h)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:u})})}catch{}try{let v=await window.csrfFetch("/admin/session/close",{method:"POST"}),E=await v.json();if(!v.ok){window.showToast&&window.showToast(E.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),j(),k({status:"idle",viewer_end_behavior:E.archived&&E.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{e.disabled=!1}}}async function P(){try{let a=await fetch("/admin/session/current",{credentials:"same-origin"});if(!a.ok)return;let e=await a.json();k(e)}catch{}}function m(){P(),S&&clearInterval(S),S=setInterval(P,1e4)}function r(){S&&(clearInterval(S),S=null),j()}let o=null;async function n(){let a=document.querySelector("[data-cockpit-overlay]");if(!a||a.offsetParent===null)return;let e=0,l=!1;try{let v=await fetch("/overlay_status",{credentials:"same-origin"});v.ok&&(e=(await v.json()).overlay_count||0)}catch{}try{let v=await fetch("/admin/broadcast/status",{credentials:"same-origin"});v.ok&&(l=(await v.json()).mode==="live")}catch{}let h=e>0&&l;a.classList.toggle("is-on",h);let t=a.querySelector("[data-cockpit-status]");t&&(t.textContent=h?ServerI18n.t("adminCockpitOn",{n:e}):ServerI18n.t("adminCockpitOff"));let s=a.querySelector('[data-cockpit-action="toggle"]');s&&(s.textContent=ServerI18n.t(h?"adminCockpitTurnOff":"adminCockpitTurnOn"),s.classList.toggle("is-danger",h),s.classList.toggle("is-primary",!h),s.dataset.next=h?"standby":"live");let u=a.querySelector('[data-cockpit-action="clear"]');u&&(u.disabled=e===0)}function d(){let a=document.querySelector("[data-cockpit-overlay]");if(!a||a.dataset.bound)return;a.dataset.bound="1",a.addEventListener("click",async h=>{let t=h.target.closest("[data-cockpit-action]");if(!t)return;let s=t.dataset.cockpitAction;if(s==="clear"){try{let u=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});if(!u.ok)throw new Error("HTTP "+u.status);window.showToast&&window.showToast(ServerI18n.t("toastCleared"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("toastClearFailed"),!1)}return}if(s==="toggle"){try{let u=await window.csrfFetch("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:t.dataset.next||"standby"})});if(!u.ok)throw new Error("HTTP "+u.status)}catch{window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:""}),!1)}n()}});let e=a.parentElement&&a.parentElement.querySelector('[data-cockpit-action="idle-qr"]');e&&e.addEventListener("click",()=>{location.hash="#/overlay"});let l=a.parentElement&&a.parentElement.querySelector('[data-cockpit-action="poll"]');l&&l.addEventListener("click",()=>{location.hash="#/polls"})}function i(){d(),n(),o&&clearInterval(o),o=setInterval(n,5e3)}function c(){o&&(clearInterval(o),o=null)}window.AdminDashboard={refreshKpi:g,refreshSummary:H,refreshSidebarBadges:L,populatePoll:C,populateWidgets:F,refreshSessionBanner:P,startSessionPolling:m,stopSessionPolling:r,refreshCockpitOverlay:n,startCockpitPolling:i,stopCockpitPolling:c}})()});var rt=he(()=>{(function(){"use strict";let y="sec-viewer-config-defaults",w=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(O){return String(O).replace(/[&<>"']/g,function(J){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[J]})},L={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}},H=[14,20,32,44,64],C=window.DANMU_CONFIG?.defaultColorPalette||[],I=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function p(O,J){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let Q=window.ServerI18n.t(O,J);if(Q&&Q!==O)return Q}return O}let M={};function F(O){if(M[O]!=null)return M[O];let J=L[O];return J?J.step:1}function $(O,J){M[O]=Number(J)||F(O)}let S={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",palettePreview:null,paletteNotice:null},N=["Color","FontFamily","Layout"];function b(O){return N.indexOf(O)!==-1}function k(O){let J=S.options&&S.options[O],Q=J&&J[1];return Array.isArray(Q)?Q.slice():[]}function A(O){return O==="Color"?C.map(J=>J.replace(/^#/,"").toUpperCase()):O==="Layout"?I.map(J=>J.value):O==="FontFamily"?(S.fonts&&S.fonts.length?S.fonts:["NotoSansTC","Inter"]).map(Q=>typeof Q=="string"?Q:Q.name||Q.family||"").filter(Boolean):[]}function j(O,J){return O==="Color"?String(J||"").replace(/^#/,"").toUpperCase():String(J||"")}function B(){return`
      <div id="${y}" class="admin-dsp2-page hud-page-stack lg:col-span-2" data-tpl="C">
        <!-- \u6A19\u984C\uFF0F\u8AAA\u660E\u5169\u5957\u4E26\u5B58\uFF0C\u7531 data-dsp-mode \u6C7A\u5B9A\u9732\u54EA\u4E00\u5957\uFF08CSS \u5728 style.css\uFF09\u3002
             \u540C\u4E00\u4EFD\u9762\u677F\u670D\u52D9\u986F\u793A\u5C64\u8207\u89C0\u773E\u9801\u5169\u689D\u8DEF\u7531\uFF0C\u6587\u6848\u4E0D\u80FD\u53EA\u5BEB\u4E00\u7A2E\u3002 -->
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title" data-dsp-only="values">${f(p("displayValuesTitle"))}</h2>
          <p class="admin-ui-page-note" data-dsp-only="values">${p("displayValuesNote")}</p>
          <h2 class="admin-ui-page-title" data-dsp-only="audience">${f(p("viewerGroupAudience"))}</h2>
          <p class="admin-ui-page-note" data-dsp-only="audience">${p("displayViewerDefaultsNote")}</p>
        </div>

        <!-- \u986F\u793A\u5C64\u5C08\u5C6C\uFF1A\u5927\u87A2\u5E55\u600E\u9EBC\u6392\uFF082026-08-19 \u8A2D\u8A08\u7A3F 07 \xB7 R1\uFF09\u3002
             \u9019\u56DB\u500B\u548C\u4E0A\u9762\u90A3\u7D44\u4E0D\u540C\u7A2E\u985E\u2014\u2014\u4E0A\u9762\u662F\u300C\u89C0\u773E\u7AEF\u7684\u503C\u300D\uFF0C\u9019\u88E1\u662F
             \u300C\u5927\u87A2\u5E55\u672C\u8EAB\u7684\u6392\u7248\u300D\uFF0C\u89C0\u773E\u6C38\u9060\u78B0\u4E0D\u5230\uFF0C\u6240\u4EE5\u4E0D\u9032 ROWS \u90A3\u5F35\u8868\u3002 -->
        <div data-dsp-only="values">
          <div class="admin-ui-group-label">${f(p("dlGroupLayout"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(p("dlMaxTracks"))}
                <span class="sub">${f(p("dlMaxTracksHint"))}</span>
              </span>
              <span class="val admin-ui-stepper" data-dl-stepper="max_tracks">
                <button type="button" data-dl-step="-1">\u2212</button>
                <span class="stepper-val" data-dl-value="max_tracks">\u2014</span>
                <button type="button" data-dl-step="1">+</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(p("dlAvoidOverlap"))}
                <span class="sub">${f(p("dlAvoidOverlapHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="avoid_overlap" />
              </span>
            </div>
          </div>

          <div class="admin-ui-group-label">${f(p("dlGroupArea"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(p("dlAreaTop"))}</span>
              <span class="val">
                <input type="range" min="0" max="90" step="5" data-dl-range="area_top" />
                <span class="stepper-val" data-dl-value="area_top">\u2014</span>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(p("dlAreaHeight"))}</span>
              <span class="val">
                <input type="range" min="10" max="100" step="5" data-dl-range="area_height" />
                <span class="stepper-val" data-dl-value="area_height">\u2014</span>
              </span>
            </div>
          </div>

          <!-- \u6295\u5F71\u5B89\u5168\u5340\u8207\u6DFA\u5E95\u63CF\u908A\uFF08\u8A2D\u8A08\u7A3F 16 \xB7 OS1\uFF0FOS2\uFF09\u3002\u986F\u793A\u5C64\u90A3\u534A\u65E9\u5C31
               \u5BEB\u597D\u4E86\uFF08child.css \u7684 --overlay-safe\u3001stage-luminance \u7684 setForced\uFF09\uFF0C
               \u7F3A\u7684\u4E00\u76F4\u662F\u9019\u5169\u5217\u2014\u2014\u5B89\u5168\u5340\u6C38\u9060\u505C\u5728\u5BEB\u6B7B\u7684 5%\uFF0C\u63CF\u908A\u6A21\u5F0F\u6C92\u6709\u5165\u53E3\u3002 -->
          <div class="admin-ui-group-label">${f(p("dlGroupStage"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(p("dlSafeArea"))}
                <span class="sub">${f(p("dlSafeAreaHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="safe_area">
                <button type="button" data-dl-opt="0">0%</button>
                <button type="button" data-dl-opt="5">5%</button>
                <button type="button" data-dl-opt="8">8%</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(p("dlStrokeMode"))}
                <span class="sub">${f(p("dlStrokeModeHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="stroke_mode">
                <button type="button" data-dl-opt="auto">${f(p("dlStrokeAuto"))}</button>
                <button type="button" data-dl-opt="always">${f(p("dlStrokeAlways"))}</button>
                <button type="button" data-dl-opt="never">${f(p("dlStrokeNever"))}</button>
              </span>
            </div>

            <!-- 2026-09-08\uFF1A\u6295\u7968\u662F\u7528\u300C\u9001\u51FA\u9078\u9805\u4EE3\u865F\u7576\u5F48\u5E55\u300D\u5BE6\u4F5C\u7684\uFF0C\u6240\u4EE5\u6253\u5B57\u6295\u7968
                 \u7684\u4EBA\u6703\u8B93\u5927\u87A2\u5E55\u51FA\u73FE\u4E00\u6574\u7247 A / B / C / D\u3002\u4E0D\u85CF\u8D77\u4F86\u2014\u2014\u770B\u5F97\u5230\u5927\u5BB6\u5728
                 \u6295\u7968\u672C\u8EAB\u5C31\u662F\u6C23\u6C1B\u2014\u2014\u800C\u662F\u8ABF\u6697\uFF0C\u8B93\u771F\u6B63\u7684\u7559\u8A00\u4ECD\u7136\u8B80\u5F97\u5230\u3002
                 \u4E00\u6B21\u6309\u4E0B\u5373\u6295\u7968\uFF08POST /poll/vote\uFF09\u6839\u672C\u4E0D\u7522\u751F\u5F48\u5E55\uFF0C\u4E0D\u53D7\u9019\u88E1\u5F71\u97FF\u3002 -->
            <div class="admin-ui-group-row">
              <span class="lbl">${f(p("dlDimPollVotes"))}
                <span class="sub">${f(p("dlDimPollVotesHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="dim_poll_votes" />
              </span>
            </div>
            <div class="admin-ui-group-row is-tall" data-dl-row="poll_vote_opacity">
              <span class="lbl">${f(p("dlPollVoteOpacity"))}
                <span class="sub">${f(p("dlPollVoteOpacityHint"))}</span>
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
              <span>${f(p("displayColParam"))}</span>
              <span data-dsp-only="values">${f(p("displayColValue"))}</span>
              <span class="admin-dsp2-list-head-right" data-dsp-only="audience">${f(p("displayColAudience"))}</span>
            </div>
            <div id="dsp2-rows">
              ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):f(p("loading"))}
            </div>
          </div>

          <!-- Right rail -->
          <div class="admin-dsp2-rail">
            <div class="admin-dsp2-card admin-dsp2-preview" id="dsp2-preview">
              <div class="admin-dsp2-preview-head">
                <span class="admin-ui-monolabel">${ServerI18n.t("mlLivePreview")}</span>
                <span class="admin-dsp2-preview-sync">
                  <span class="admin-dsp2-dot"></span>
                  ${f(p("displayPreviewSync"))}
                </span>
              </div>
              <div class="admin-dsp2-preview-stage" data-preview-stage>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-1" data-preview-pill="1">
                  <span class="admin-dsp2-preview-tag">@guest#1284</span>
                  <span data-preview-text>${f(p("displayPreviewSample1"))}</span>
                </div>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-2" data-preview-pill="2">
                  <span class="admin-dsp2-preview-tag">@annie</span>
                  <span>${f(p("displayPreviewSample2"))}</span>
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
                <span>${f(p("displayAutoSyncTitle"))}</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:4px;background:var(--hud-cyan-soft);border:1px solid var(--color-primary)">
                <span aria-hidden="true" style="width:7px;height:7px;border-radius:50%;background:var(--color-primary);box-shadow:0 0 6px var(--color-primary);animation:hud-pulse 2s ease-in-out infinite"></span>
                <div style="flex:1;min-width:0">
                  <div style="font-family:var(--font-mono);font-size:11px;color: var(--color-ink-accent);letter-spacing:0.1em;font-weight:700">${f(p("displayAutoSyncLive"))}</div>
                  <div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);margin-top:2px;letter-spacing:0.04em">${f(p("displayAutoSyncNote"))}</div>
                </div>
              </div>
              <div style="display:flex;gap:8px">
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-revert" style="flex:1">
                  \u21BA ${f(p("displayDeployRevert"))}
                </button>
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-export" style="flex:1">
                  \u2197 ${f(p("displayExportJson"))}
                </button>
              </div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-admin-controlled" style="padding:14px;background:var(--admin-panel,var(--color-bg-base));border:1px solid var(--hud-line);border-radius:6px;display:flex;flex-direction:column;gap:10px">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span>${f(p("displayAdminControlledTitle"))}</span>
              </div>
              <div style="display:grid;grid-template-columns:auto 1fr;gap:7px 12px;align-items:start;font-size:11px;line-height:1.45">
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">UI language</span><span>Auto (follow browser)</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">Placeholder</span><span>${f(p("displayPlaceholderExample"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">Submit button</span><span>${ServerI18n.t("fireDanmu")}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">Poll prompt</span><span>${f(p("displayPollPromptExample"))}</span>
              </div>
              <div style="padding-top:8px;border-top:1px solid var(--hud-line);font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);line-height:1.6">
                ${f(p("displayAdminControlledNote"))}
              </div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-summary" id="dsp2-summary">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span>${f(p("displaySummaryTitle"))}</span>
              </div>
              <div class="admin-dsp2-summary-list" data-summary-list></div>
            </div>
          </div>
        </div>
      </div>`}let P=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:O=>`${Math.round(O)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:O=>`${O}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:O=>`${(+O).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:O=>`#${String(O||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:O=>O||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:O=>m(O),noRange:!0}];function m(O){let J=I.find(Q=>Q.value===O);return J?p(J.labelKey):O||"\u2014"}function r(O,J){let Q=J[0]!==!1,Y=J[3],re=L[O.key];if(O.key==="Opacity"||O.key==="Speed"){let ue=re,pe=Y!=null?Number(Y):ue.min,Se=isFinite(pe)?pe:ue.min,fe=(Se-ue.min)/Math.max(1e-6,ue.max-ue.min)*100;return`
        <div class="admin-dsp2-track" data-track="${O.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${O.key}" data-num-index="3"
            min="${ue.min}" max="${ue.max}" step="${F(O.key)}" value="${f(String(Se))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${fe.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${fe.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${O.key}"
              min="${ue.min}" max="${ue.max}" step="${F(O.key)}" value="${f(String(Se))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${ue.min}${ue.unit}</span><span>${ue.max}${ue.unit}</span>
            </div>
          </div>
        </div>`}if(O.key==="FontSize"){let ue=Number(Y);return`
        <div class="admin-dsp2-chiprow">
          ${H.map(pe=>`<button type="button" class="admin-dsp2-fchip ${ue===pe?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${pe}">${pe}</button>`).join("")}
        </div>`}if(O.key==="Color"){let ue="#"+String(Y||"FFFFFF").replace(/^#/,"").toUpperCase();return`
        <div class="admin-dsp2-swatches">
          ${a().map(pe=>{let Se=pe.slice(1),fe=pe.toUpperCase()===ue;return`<button type="button" class="admin-dsp2-swatch ${fe?"is-active":""}"
              data-chip-key="Color" data-chip-value="${Se}"
              style="background:${pe}" aria-label="${pe}" aria-pressed="${fe}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${f(p("specificColor"))}">
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${f(ue)}" />
          </label>
        </div>
      `}if(O.key==="FontFamily"){let ue=(S.fonts&&S.fonts.length?S.fonts:["NotoSansTC","Inter"]).map(ye=>{let Te=typeof ye=="string"?ye:ye.name||ye.family||"",Ee=typeof ye=="string"?ye:ye.label||ye.name||ye.family||"";return{value:Te,label:Ee}}).filter(ye=>ye.value),pe=String(Y||""),Se=!!S.allowlistEdit.FontFamily,fe=Se?S.allowlistEdit.FontFamily:new Set(k("FontFamily").map(ye=>j("FontFamily",ye))),ge=!Se&&fe.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ue.map(ye=>{let Te=ye.value===pe,Ee=Se?fe.has(ye.value):ge||fe.has(ye.value),_e=["admin-dsp2-tchip",Te?"is-active":"",Se?"is-editing":"",Ee?"":"is-blocked"].filter(Boolean).join(" "),$e=Se?`data-allow-key="FontFamily" data-allow-value="${f(ye.value)}"`:`data-chip-key="FontFamily" data-chip-value="${f(ye.value)}"`;return`<button type="button" class="${_e}" ${$e}
              aria-pressed="${Ee?"true":"false"}">
              ${Se?`<span class="admin-dsp2-allow-mark">${Ee?"\u2713 ":""}</span>`:""}${f(ye.label)}
            </button>`}).join("")}
        </div>
        ${o(O)}
      `}if(O.key==="Layout"){let ue=String(Y||"scroll"),pe=!!S.allowlistEdit.Layout,Se=pe?S.allowlistEdit.Layout:new Set(k("Layout").map(ge=>j("Layout",ge))),fe=!pe&&Se.size===0;return`
        <div class="admin-dsp2-tiles">
          ${I.map(ge=>{let ye=ge.value===ue,Te=pe?Se.has(ge.value):fe||Se.has(ge.value),Ee=["admin-dsp2-tile",ye?"is-active":"",pe?"is-editing":"",Te?"":"is-blocked"].filter(Boolean).join(" "),_e=pe?`data-allow-key="Layout" data-allow-value="${ge.value}"`:`data-chip-key="Layout" data-chip-value="${ge.value}"`;return`<button type="button" class="${Ee}" ${_e}
              aria-pressed="${Te?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${ge.icon}</span>
              <span class="admin-dsp2-tile-label">${p(ge.labelKey)}</span>
              ${pe?`<span class="admin-dsp2-allow-mark">${Te?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${o(O)}
      `}return""}function o(O){if(!b(O.key))return"";let J=!!S.allowlistEdit[O.key],Q=k(O.key),Y=A(O.key).length||0,re=Q.length>0?p("displayAllowSummaryPartial",{n:Q.length,total:Y,label:n(O.key)}):p("displayAllowSummaryAll",{total:Y});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${O.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${O.key}">${f(re)}</span>
        ${J?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${O.key}">${f(p("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${O.key}">${f(p("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${O.key}">${f(p("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${O.key}" title="${f(p("displayEditAllowlistTitle"))}">[${f(p("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function n(O){return p(O==="Color"?"displayLabelColor":O==="FontFamily"?"displayLabelFontFamily":O==="Layout"?"displayLabelLayout":"displayLabelOption")}function d(O,J){if(O.noRange||!(J[0]!==!1))return"";let Y=L[O.key],re=J[1]!=null?J[1]:Y.min,ue=J[2]!=null?J[2]:Y.max,pe=F(O.key);return`
      <div class="admin-dsp2-band">
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(p("displayMinAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${O.key}" data-num-index="1"
              min="${Y.min}" max="${Y.max}" step="${pe}" value="${f(String(re))}" />
            ${Y.unit?`<span>${Y.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(p("displayMaxAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${O.key}" data-num-index="2"
              min="${Y.min}" max="${Y.max}" step="${pe}" value="${f(String(ue))}" />
            ${Y.unit?`<span>${Y.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlStep")}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${O.key}" data-num-index="step"
              min="0.1" step="0.1" value="${f(String(pe))}" />
            ${Y.unit?`<span>${Y.unit}</span>`:""}
          </div>
        </div>
      </div>`}function i(O,J){let Q=J[0]!==!1,Y=J[3],re=O.fmt?O.fmt(Y):Y!=null?String(Y):"\u2014",ue=O.key==="Layout";return`
      <div class="admin-dsp2-row ${Q?"is-on":"is-off"} ${ue?"is-last":""}" data-row-key="${O.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${f(p(O.labelKey))}</div>
          <div class="admin-dsp2-value-badge ${Q?"is-on":""}" data-value-badge>${f(re)}</div>
        </div>
        <div class="admin-dsp2-cell-center">
          <!-- \u63D0\u793A\u5169\u5957\u4E26\u5B58\uFF0CCSS \u4F9D data-dsp-mode \u64C7\u4E00\u3002\u986F\u793A\u5C64\u8B1B\u7684\u662F\u300C\u5927\u87A2\u5E55
               \u4E0A\u5C31\u662F\u9019\u500B\u503C\u300D\uFF1B\u89C0\u773E\u9801\u8B1B\u7684\u662F\u300C\u89C0\u773E\u62D6\u6ED1\u687F\u6642\u5F9E\u54EA\u88E1\u958B\u59CB\u300D\u3002 -->
          <div class="admin-dsp2-cell-hint" data-dsp-only="values">
            <span class="admin-dsp2-cell-hint-arrow">\u25B8</span>
            ${f(p("displayHintBigScreen"))}
          </div>
          <div class="admin-dsp2-cell-hint" data-dsp-only="audience">
            <span class="admin-dsp2-cell-hint-arrow">\u25B8</span>
            ${f(p(Q?"displayHintAudienceOn":"displayHintAudienceOff"))}
          </div>
          <div class="admin-dsp2-picker" data-picker-host>${r(O,J)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${d(O,J)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">
          <button type="button" class="admin-dsp2-pill ${Q?"is-on":""}"
            data-toggle-key="${O.key}" aria-pressed="${Q?"true":"false"}">
            <span class="admin-dsp2-pill-track"><span class="admin-dsp2-pill-thumb"></span></span>
            <span class="admin-dsp2-pill-label">${f(p(Q?"displayCustomizable":"displayLocked"))}</span>
          </button>
          <div class="admin-dsp2-toggle-hint">
            ${f(Q?p("displayToggleHintOn"):O.noRange?p("displayToggleHintOffPick"):p("displayToggleHintOffSlider"))}
          </div>
        </div>
      </div>`}function c(){let O=document.getElementById("dsp2-rows");if(O){if(!S.options){O.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):f(p("loading"))}`;return}O.innerHTML=P.map(J=>i(J,S.options[J.key]||[!1,"","",""])).join(""),t(),v(),E()}}function a(){let O=k("Color");return[...new Set((O.length?O:C).map(J=>"#"+String(J).replace(/^#/,"").toUpperCase()).filter(J=>/^#[0-9A-F]{6}$/.test(J)))]}function e(O){let J=O.slice(1).match(/.{2}/g).map(Q=>{let Y=parseInt(Q,16)/255;return Y<=.04045?Y/12.92:((Y+.055)/1.055)**2.4});return J[0]*.2126+J[1]*.7152+J[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function l(O,J="error"){S.paletteNotice={message:O,type:J};let Q=document.querySelector("[data-palette-feedback]");Q&&(Q.textContent=O,Q.classList.toggle("is-error",J==="error"))}function h(O,J=!0){let Q=document.querySelector("[data-admin-color-palette]"),Y=Q?.querySelector("[data-palette-preview-text]");!Y||!/^#[0-9A-F]{6}$/i.test(O)||(S.palettePreview=O.toUpperCase(),Y.style.color=O,Q.querySelector("[data-palette-preview-code]").textContent=O.toUpperCase(),Q.querySelectorAll("[data-palette-preview]").forEach(re=>{let ue=re.dataset.palettePreview===O.toUpperCase();re.setAttribute("aria-pressed",String(ue)),re.closest(".admin-color-palette-chip").classList.toggle("is-previewing",ue)}),J&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(Y.getAnimations().forEach(re=>re.cancel()),Y.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function t(){let O=document.querySelector("[data-admin-color-palette]");if(!O||!S.options)return;let J=a(),Q=(S.options.ViewerColorPicker||[!0])[0]!==!1,Y=S.paletteBusy?"disabled":"",re=S.palettePreview||J[0],ue=f(S.paletteDraft),pe=S.paletteNotice;O.setAttribute("aria-busy",String(S.paletteBusy)),O.innerHTML=`
      <div class="admin-color-palette-head">
        <div>
          <!-- 2026-10-29\uFF1Akey \u5F9E viewerPaletteEyebrow \u6539\u540D\u70BA viewerPaletteLabel\u3002
               \u6587\u6848\u6C92\u8B8A\uFF1B\u8A2D\u8A08\u5951\u7D04\u7981\u7684\u662F *Eyebrow / *Kicker \u9019\u7A2E\u547D\u540D\uFF08\u90A3\u4EE3\u8868
               \u300C\u4E2D\u6587\u6A19\u7C64\u65C1\u908A\u518D\u64FA\u4E00\u884C\u5927\u5BEB\u82F1\u6587\u300D\u7684\u820A\u7248\u578B\uFF09\u3002\u9019\u88E1\u7684 eyebrow \u662F
               \u4F7F\u7528\u8005\u8A9E\u8A00\u7684\u5C0F\u6A19\uFF0C\u8207\u4E0B\u65B9\u6A19\u984C\u4E0D\u91CD\u8907\u3002 -->
          <span class="admin-color-palette-eyebrow">${f(p("viewerPaletteLabel"))}</span>
          <h3 class="admin-color-palette-title">${f(p("viewerPaletteTitle"))}</h3>
          <p class="admin-color-palette-note">${f(p("viewerPaletteHint"))}</p>
        </div>
        <span class="admin-color-palette-count"><strong data-palette-count>${J.length}</strong><span>${f(p("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${J.map((Se,fe)=>`<div class="admin-color-palette-chip" style="--palette-color:${Se};--palette-ink:${e(Se)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${Se}"
                aria-label="${f(p("viewerPalettePreviewColor",{color:Se}))}" aria-pressed="${Se===re}" ${Y}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(fe+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${Se}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${Se}" ${J.length<=1?"disabled":Y}
                aria-label="${f(p("viewerPaletteRemove",{color:Se}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${f(p("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${f(p("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(S.paletteDraft)?ue:"#38bdf8"}" data-palette-picker ${Y} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${ue}"
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${Y} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${J.length>=64?"disabled":Y}>
                <span aria-hidden="true">\uFF0B</span> ${f(p("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${f(p(J.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${pe?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${pe?f(pe.message):""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${f(p("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${f(p("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${re}</span><span aria-hidden="true">\u2192</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${f(p("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${f(p("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${f(p("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${Q?"checked":""} ${Y} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${f(p("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,h(re,!1)}async function s(O,J){if(S.paletteBusy)return;let Q=document.querySelector("[data-admin-color-palette]");S.paletteBusy=!0,Q.setAttribute("aria-busy","true"),Q.querySelector("[data-palette-sync-status]").textContent=p("viewerPaletteSaving"),Q.querySelectorAll("input, button").forEach(ue=>{ue.disabled=!0});let Y=await D("Color",O);S.paletteBusy=!1,S.paletteNotice={type:Y?"success":"error",message:p(Y?"viewerPaletteSaved":"updateFailed")},Y&&J&&(S.palettePreview=J),t(),(J&&Y?Q.querySelector(`[data-palette-preview="${J}"]`):Q.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function u(O,J){let Q=S.options&&S.options[O];return Q&&Q[3]!=null?Q[3]:J}function v(){let O=document.querySelector("[data-preview-stage]"),J=document.querySelector("[data-preview-pill='1']"),Q=document.querySelector("[data-preview-pill='2']"),Y=document.querySelector("[data-preview-foot-l]"),re=document.querySelector("[data-preview-foot-r]");if(!O||!J||!Q||!S.options)return;let ue=Number(u("FontSize",32)),pe=Number(u("Opacity",92)),Se=Number(u("Speed",1)),fe="#"+String(u("Color","7DD3FC")).replace(/^#/,""),ge=String(u("FontFamily","NotoSansTC")),ye=String(u("Layout","scroll")),Te=Math.min(ue,36),Ee=Math.max(0,Math.min(100,pe))/100;J.style.fontSize=Te+"px",J.style.color=fe,J.style.opacity=Ee.toFixed(2),J.style.fontFamily=ge+", system-ui, sans-serif",J.style.textShadow=`0 0 14px ${fe}66`,Q.style.fontSize=(Te*.78).toFixed(0)+"px",Q.style.opacity=(Ee*.9).toFixed(2),Q.style.fontFamily=ge+", system-ui, sans-serif",O.dataset.layout=ye,Y&&(Y.textContent=`${m(ye)} \xB7 ${ue}px \xB7 ${(+Se).toFixed(1)}\xD7`),re&&(re.textContent=p("displayOpacitySuffix",{n:Math.round(pe)}))}function E(){let O=document.querySelector("[data-summary-list]"),J=document.querySelector("[data-summary-count]");if(!O||!S.options)return;let Q=P.filter(Y=>(S.options[Y.key]||[])[0]).length;J&&(J.textContent=`AUDIENCE \xB7 ${Q}/6 OPEN`),O.innerHTML=P.map(Y=>{let re=!!(S.options[Y.key]||[])[0];return`<div class="admin-dsp2-srow ${re?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${f(p(Y.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${f(p(re?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function T(O,J){try{let Q=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:O,enabled:!!J})});if(!Q.ok)throw new Error("toggle "+Q.status);Array.isArray(S.options[O])||(S.options[O]=[!1,"","",""]),S.options[O][0]=!!J,c(),O==="ViewerColorPicker"&&document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0});let Y=O==="ViewerColorPicker"?p("viewerPaletteAllowPicker"):O;window.showToast&&window.showToast(`${Y} ${p("settingsUpdated")}`,!0)}catch(Q){console.warn("[admin-display] toggle failed:",Q),window.showToast&&window.showToast(p("updateFailed"),!1),await G(),c()}}async function x(O,J,Q){try{let Y=Q;if(O==="Color"){let ue=String(Y).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ue)){window.showToast&&window.showToast(p("colorFormatError"),!1);return}Y=ue.toUpperCase()}else if(O==="Opacity"||O==="FontSize"||O==="Speed"){Y=O==="Speed"?parseFloat(Y):parseInt(Y,10);let ue=L[O];if(Number.isNaN(Y)||ue&&(Y<ue.min||Y>ue.max)){window.showToast&&window.showToast(`${O} ${ue.min}\u2013${ue.max}`,!1);return}}let re=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:O,value:Y,index:J})});if(!re.ok)throw new Error("update "+re.status);Array.isArray(S.options[O])||(S.options[O]=[!1,"","",""]),S.options[O][J]=Y,q(O),v(),E()}catch(Y){console.warn("[admin-display] update failed:",Y),window.showToast&&window.showToast(p("updateFailed"),!1)}}async function D(O,J){try{let Q=await window.csrfFetch(`/admin/options/${encodeURIComponent(O)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:J})});if(!Q.ok)throw new Error("allowlist "+Q.status);let Y=await Q.json().catch(()=>({}));Y&&Array.isArray(Y.option)?S.options[O]=Y.option:Array.isArray(S.options[O])&&(S.options[O][1]=J.slice()),q(O),v(),E();let re=A(O).length||0,ue=O==="Color"?p("settingsUpdated"):J.length>0?p("displayAllowlistToastPartial",{key:O,n:J.length,total:re}):p("displayAllowlistToastAll",{key:O});return O!=="Color"&&window.showToast&&window.showToast(ue,!0),!0}catch(Q){return console.warn("[admin-display] allowlist failed:",Q),O!=="Color"&&window.showToast&&window.showToast(p("updateFailed"),!1),!1}}function q(O){let J=document.querySelector(`[data-row-key="${O}"]`);if(!J||!S.options)return;let Q=P.find(pe=>pe.key===O);if(!Q)return;let Y=S.options[O]||[!1,"","",""],re=Y[3],ue=J.querySelector("[data-value-badge]");if(ue&&(ue.textContent=Q.fmt?Q.fmt(re):re!=null?String(re):"\u2014"),b(O)){let pe=J.querySelector("[data-picker-host]");pe&&(pe.innerHTML=r(Q,Y));return}if((O==="FontSize"||O==="Color"||O==="FontFamily"||O==="Layout")&&J.querySelectorAll(`[data-chip-key="${O}"]`).forEach(pe=>{let Se=pe.getAttribute("data-chip-value"),fe=O==="Color"?String(re||"").replace(/^#/,"").toUpperCase():String(re??"");pe.classList.toggle("is-active",String(Se)===fe)}),O==="Opacity"||O==="Speed"){let pe=L[O],Se=Number(re??pe.min),fe=(Se-pe.min)/Math.max(1e-6,pe.max-pe.min)*100,ge=J.querySelector(".admin-dsp2-slider-fill"),ye=J.querySelector(".admin-dsp2-slider-thumb");ge&&(ge.style.width=fe.toFixed(2)+"%"),ye&&(ye.style.left=`calc(${fe.toFixed(2)}% - 8px)`);let Te=J.querySelector(".admin-dsp2-range");Te&&document.activeElement!==Te&&(Te.value=String(Se));let Ee=J.querySelector(".admin-dsp2-num");Ee&&document.activeElement!==Ee&&(Ee.value=String(Se))}}async function G(){try{let O=await fetch("/get_settings",{credentials:"same-origin"});if(!O.ok)throw new Error(O.status);S.options=await O.json()}catch(O){console.warn("[admin-display] /get_settings failed:",O),S.options=S.options||{}}}async function _(){try{let O=await fetch("/fonts",{credentials:"same-origin"});if(!O.ok)throw new Error(O.status);let J=await O.json();S.fonts=Array.isArray(J)?J:J.fonts||[]}catch{S.fonts=["NotoSansTC","Inter"]}}async function R(){try{let O=await fetch("/admin/metrics",{credentials:"same-origin"});if(!O.ok)return;let J=await O.json();S.viewerCount=J.ws_clients??0}catch{}}function U(){V(),R(),S.metricsTimer=setInterval(R,5e3)}function V(){S.metricsTimer&&(clearInterval(S.metricsTimer),S.metricsTimer=null)}function K(){if(!S.options){window.showToast&&window.showToast(p("loading"),!1);return}let O={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:S.options},J=new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),Q=URL.createObjectURL(J),Y=document.createElement("a");Y.href=Q,Y.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL(Q),window.showToast&&window.showToast(p("displayExportDone"),!0)}async function z(){if(!S.options)return;let O=document.getElementById("dsp2-deploy");O&&(O.disabled=!0,O.classList.add("is-pending"));try{for(let J of P){let Q=S.options[J.key];Array.isArray(Q)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:J.key,enabled:!!Q[0]})})}await R(),window.showToast&&window.showToast(p("displayBroadcastDone")+` ${S.viewerCount} ${p("displayViewersReceivedSuffix")}`,!0)}catch(J){console.warn("[admin-display] deploy failed:",J),window.showToast&&window.showToast(p("updateFailed"),!1)}finally{O&&(O.disabled=!1,O.classList.remove("is-pending"))}}async function ae(){let O={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,.5,3,1],Color:[!0,0,0,"FFFFFF"],FontFamily:[!0,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:p("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"warn",body:p("displayRevertConfirm"),confirmLabel:p("displayDeployRevert")}))try{for(let[Q,Y]of Object.entries(O)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:Q,enabled:!!Y[0]})});for(let re=1;re<=3;re++)re<3&&(Q==="Color"||Q==="FontFamily"||Q==="Layout")||Y[re]===""||Y[re]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:Q,value:Y[re],index:re})})}await G(),c(),window.showToast&&window.showToast(p("displayRevertDone"),!0)}catch(Q){console.warn("[admin-display] revert failed:",Q),window.showToast&&window.showToast(p("updateFailed"),!1)}}function ie(){let O=document.getElementById(y);O&&(O.addEventListener("click",J=>{let Q=J.target.closest("[data-palette-preview]");if(Q){h(Q.dataset.palettePreview);return}let Y=J.target.closest("[data-palette-remove]");if(Y){let fe=a();if(fe.length>1){let ge=fe.filter(ye=>ye!==Y.dataset.paletteRemove);s(ge,ge.includes(S.palettePreview)?S.palettePreview:ge[0])}return}if(J.target.closest("[data-palette-add]")){let fe=O.querySelector("[data-palette-hex]"),ge=String(fe.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(ge)){fe.setAttribute("aria-invalid","true"),l(p("colorFormatError"));return}let ye=a();if(ye.includes("#"+ge)){l(p("viewerPaletteDuplicate"));return}ye.length<64&&s([...ye,"#"+ge],"#"+ge);return}let re=J.target.closest("[data-toggle-key]");if(re){let fe=re.getAttribute("data-toggle-key"),ge=!!(S.options[fe]||[])[0];T(fe,!ge);return}let ue=J.target.closest("[data-allow-action]");if(ue){let fe=ue.getAttribute("data-allow-action"),ge=ue.getAttribute("data-allow-key");if(!ge)return;if(fe==="edit"){let ye=k(ge).map(Te=>j(ge,Te));ye.length?S.allowlistEdit[ge]=new Set(ye):S.allowlistEdit[ge]=new Set(A(ge)),q(ge);return}if(fe==="cancel"){delete S.allowlistEdit[ge],q(ge);return}if(fe==="clear"){S.allowlistEdit[ge]=new Set,D(ge,[]),delete S.allowlistEdit[ge];return}if(fe==="apply"){let ye=S.allowlistEdit[ge]||new Set,Te=A(ge),Ee=Array.from(ye),_e=Te.length>0&&Ee.length===Te.length&&Te.every($e=>ye.has($e));D(ge,_e?[]:Ee),delete S.allowlistEdit[ge];return}}let pe=J.target.closest("[data-allow-key][data-allow-value]");if(pe){let fe=pe.getAttribute("data-allow-key"),ge=pe.getAttribute("data-allow-value"),ye=S.allowlistEdit[fe];if(ye){let Te=j(fe,ge);ye.has(Te)?ye.delete(Te):ye.add(Te),q(fe)}return}let Se=J.target.closest("[data-chip-key]");if(Se){let fe=Se.getAttribute("data-chip-key"),ge=Se.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${fe}"]`).forEach(ye=>ye.classList.remove("is-active")),Se.classList.add("is-active"),x(fe,3,ge);return}if(J.target&&J.target.id==="dsp2-revert"){ae();return}if(J.target&&J.target.id==="dsp2-export"){K();return}}),O.addEventListener("keydown",J=>{J.key==="Enter"&&J.target.matches("[data-palette-hex]")&&!J.isComposing&&(J.preventDefault(),O.querySelector("[data-palette-add]")?.click())}),O.addEventListener("change",J=>{let Q=J.target;if(!Q)return;if(Q.matches("[data-viewer-color-picker]")){Q.disabled=!0,T("ViewerColorPicker",Q.checked);return}let Y=Q.getAttribute("data-num-key");if(!Y)return;let re=Q.getAttribute("data-num-index");if(re==="step"){$(Y,Q.value),q(Y);return}let ue=parseInt(re,10);if(Number.isNaN(ue))return;let pe=Q.value;Y==="Color"&&(pe=String(pe).replace(/^#/,"").toUpperCase()),x(Y,ue,pe)}),O.addEventListener("input",J=>{let Q=J.target;if(Q){if(Q.matches("[data-palette-picker]")){S.paletteDraft=Q.value.toUpperCase(),O.querySelector("[data-palette-hex]").value=S.paletteDraft,l("","success"),h(S.paletteDraft);return}if(Q.matches("[data-palette-hex]")){S.paletteDraft=Q.value;let Y=Q.value.replace(/^#/,"");Q.removeAttribute("aria-invalid"),l("","success"),/^[0-9a-fA-F]{6}$/.test(Y)&&(O.querySelector("[data-palette-picker]").value="#"+Y,h("#"+Y));return}if(Q.classList&&Q.classList.contains("admin-dsp2-range")){let Y=Q.getAttribute("data-range-key"),re=L[Y],ue=Number(Q.value),pe=(ue-re.min)/Math.max(1e-6,re.max-re.min)*100,Se=Q.closest("[data-row-key]");if(Se){let fe=Se.querySelector(".admin-dsp2-slider-fill"),ge=Se.querySelector(".admin-dsp2-slider-thumb");fe&&(fe.style.width=pe.toFixed(2)+"%"),ge&&(ge.style.left=`calc(${pe.toFixed(2)}% - 8px)`);let ye=Se.querySelector(".admin-dsp2-num");ye&&(ye.value=String(ue))}Array.isArray(S.options[Y])&&(S.options[Y][3]=ue),v();return}if(Q.classList&&Q.classList.contains("admin-dsp2-num")){let Y=Q.getAttribute("data-num-key"),re=parseInt(Q.getAttribute("data-num-index"),10);if(Number.isNaN(re)||!Array.isArray(S.options[Y]))return;let ue=Q.value;Q.type==="number"&&(ue=Number(ue)),S.options[Y][re]=ue,v()}}}),O.addEventListener("change",J=>{let Q=J.target;if(Q&&Q.classList&&Q.classList.contains("admin-dsp2-range")){let Y=Q.getAttribute("data-range-key");x(Y,3,Q.value)}}),O.addEventListener("click",J=>{let Q=J.target.closest("[data-dl-step]");if(Q){let re=Q.closest("[data-dl-stepper]");if(!re)return;let ue=re.getAttribute("data-dl-stepper"),Se=Number(W[ue]??0)+Number(Q.getAttribute("data-dl-step"));se(ue,Se);return}let Y=J.target.closest("[data-dl-opt]");if(Y){let re=Y.closest("[data-dl-seg]");if(!re)return;let ue=re.getAttribute("data-dl-seg"),pe=Y.getAttribute("data-dl-opt");se(ue,["safe_area","poll_vote_opacity"].indexOf(ue)!==-1?Number(pe):pe)}}),O.addEventListener("change",J=>{let Q=J.target.closest("[data-dl-toggle]");if(Q){se(Q.getAttribute("data-dl-toggle"),Q.checked);return}let Y=J.target.closest("[data-dl-range]");Y&&se(Y.getAttribute("data-dl-range"),Number(Y.value))}),O.addEventListener("input",J=>{let Q=J.target.closest("[data-dl-range]");if(!Q)return;let Y=Q.getAttribute("data-dl-range"),re=O.querySelector(`[data-dl-value="${Y}"]`);re&&(re.textContent=Q.value+"%")}))}let W={};function X(){let O=document.getElementById(y);O&&Object.entries(W).forEach(([J,Q])=>{let Y=O.querySelector(`[data-dl-value="${J}"]`);Y&&(Y.textContent=J==="max_tracks"?Number(Q)===0?p("dlMaxTracksAuto"):String(Q):String(Q)+"%");let re=O.querySelector(`[data-dl-range="${J}"]`);re&&document.activeElement!==re&&(re.value=String(Q));let ue=O.querySelector(`[data-dl-toggle="${J}"]`);ue&&(ue.checked=!!Q);let pe=O.querySelector(`[data-dl-seg="${J}"]`);pe&&pe.querySelectorAll("[data-dl-opt]").forEach(Se=>{let fe=Se.getAttribute("data-dl-opt")===String(Q);Se.classList.toggle("is-active",fe),Se.setAttribute("aria-pressed",fe?"true":"false")})})}async function ee(){try{let O=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!O.ok)return;W=await O.json(),X()}catch(O){console.warn("[admin-display] display-layer fetch failed:",O)}}async function se(O,J){let Q=W[O];W[O]=J,X();try{let Y=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[O]:J})});if(!Y.ok)throw new Error("display-layer "+Y.status);W=await Y.json(),X()}catch(Y){W[O]=Q,X(),console.warn("[admin-display] display-layer update failed:",Y),window.showToast&&window.showToast(p("updateFailed"),!1)}}function Z(){w.forEach(O=>{let J=document.getElementById(O);J&&J.setAttribute("data-admin-ui-replaced","1")})}let le=null;function ce(O,J){return O==="overlay"||J==="overlay"||O==="display"||J==="display"}function we(O,J){return O==="viewer-config"||O==="viewer"||J==="viewer-config"||J==="viewer"}function Ie(O,J){if(!we(O,J))return;let Q=window.AdminTabs?.getConfig?.("viewer");if(!Q)return;let Y=ue=>Q.tabs.some(pe=>pe.slug===ue),re=Y(J)?J:null;if(!re&&window.AdminTabs.resolveActiveTab){let ue=window.AdminTabs.resolveActiveTab("viewer",null);Y(ue)&&(re=ue)}re&&(document.body.dataset.viewerConfigTab=re)}let ke=!1,te=!1;async function oe(){let O=document.getElementById("sec-viewer-config-limits");if(!O||ke)return;ke=!0;let J=(Q,Y)=>{let re=O.querySelector(Q);re&&(re.textContent=Y==null?"\u2014":String(Y))};try{let Q=await fetch("/admin/metrics",{credentials:"same-origin"});if(!Q.ok)return;let Y=await Q.json(),re=Y.rate_limits&&Y.rate_limits.fire||{},ue=Y.rate_limits&&Y.rate_limits.totals||{},pe=Y.rate_limit_config&&Y.rate_limit_config.fire||{},Se=Math.max(1,(Y.server_time||0)-(Y.server_started_at||0));J("[data-vc-rate-fp]",pe.limit||"\u2014"),J("[data-vc-rate-global]","\u2014"),J("[data-vc-rate-burst]","\u2014"),J("[data-vc-rate-cooldown]",pe.window||"\u2014"),J("[data-vc-msg-len]",100),J("[data-vc-nick-len]","\u2014"),J("[data-vc-dedup]","\u2014");let fe=(re.hits||0)/Se;J("[data-vc-avg-rate]",fe.toFixed(2)+"/s"),J("[data-vc-throttled]",re.violations||0),J("[data-vc-blocked]",ue.locked_sources||0),J("[data-vc-deduped]",0)}catch{}finally{ke=!1}}function de(){let O=document.querySelector(".admin-dash-grid"),J=document.getElementById(y);if(!O||!J)return;let Q=O.dataset.activeRoute||"live",Y=O.dataset.activeLeaf||Q;Ie(Q,Y);let re=document.body.dataset.viewerConfigTab||"defaults",ue=we(Q,Y),pe=ce(Q,Y),Se=ue||pe;J.dataset.dspMode=pe?"values":"audience",J.style.display=Se?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach(ge=>{let ye=document.getElementById(ge);ye&&(ye.style.display=ue?"":"none")});let fe=document.getElementById("sec-viewer-config-info");fe&&(fe.style.display=ue?"":"none"),ue?te||(te=!0,oe()):te=!1,ce(Q,Y)?S.metricsTimer||U():V(),le=Q}function ne(){if(document.getElementById("sec-viewer-config-info"))return;let O=document.getElementById("settings-grid");if(!O)return;let J=document.createElement("div");J.id="sec-viewer-config-info",J.className="lg:col-span-2",J.innerHTML='<div class="admin-vc-info-banner">'+p("displayViewerConfigInfoBanner")+"</div>";let Q=[{k:p("displayFieldNicknameLabel"),desc:p("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:p("displayFieldMessageLabel"),desc:p("displayFieldMessageDesc"),on:!0,pinned:!0},{k:p("displayFieldColorLabel"),desc:p("displayFieldColorDesc"),on:!0},{k:p("displayFieldFontLabel"),desc:p("displayFieldFontDesc"),on:!0},{k:p("displayFieldSizeLabel"),desc:p("displayFieldSizeDesc"),on:!0},{k:p("displayFieldOpacityLabel"),desc:p("displayFieldOpacityDesc"),on:!0},{k:p("displayFieldSpeedLabel"),desc:p("displayFieldSpeedDesc"),on:!0},{k:p("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:p("displayFieldEffectLabel"),desc:p("displayFieldEffectDesc"),on:!1}],Y=document.createElement("div");Y.id="sec-viewer-config-fields",Y.className="admin-vc-fields-grid lg:col-span-2";let re=document.createElement("div");re.className="admin-vc-col-panel";let ue=document.createElement("div");ue.className="admin-vc-fields-head";let pe=Q.filter(function(xe){return xe.on}).length,Se=Q.length-pe;ue.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+f(p("displayFieldsCountLabel",{count:Q.length}))+'</span><span class="admin-vc-fields-count">'+f(p("displayFieldsShownHidden",{shown:pe,hidden:Se}))+"</span>",re.appendChild(ue);let fe=document.createElement("div");fe.className="admin-vc-fields-list",Q.forEach(function(xe){let Ce=document.createElement("div");Ce.className="admin-vc-field-row"+(xe.blocked?" is-blocked":"");let Fe=document.createElement("span");Fe.className="admin-vc-field-dot"+(xe.on?" is-on":""),Ce.appendChild(Fe);let De=document.createElement("div");var Be="";xe.pinned&&(Be='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+f(p("displayFieldBadgeRequired"))+"</span>"),xe.blocked&&(Be='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+f(p("displayFieldBadgeBlocked"))+"</span>"),De.innerHTML='<div class="admin-vc-field-label">'+f(xe.k)+Be+'</div><div class="admin-vc-field-desc">'+f(xe.desc)+"</div>",Ce.appendChild(De);let Le=document.createElement("button");if(Le.type="button",Le.className="admin-vc-toggle "+(xe.on?"is-on":"is-off"),Le.textContent=xe.on?p("displayToggleShow"):p("displayToggleHide"),xe.blocked||xe.pinned)Le.disabled=!0,Le.className+=" disabled";else{var Ae=xe.on;Le.addEventListener("click",function(){Ae=!Ae,Le.className="admin-vc-toggle "+(Ae?"is-on":"is-off"),Le.textContent=p(Ae?"displayToggleShow":"displayToggleHide"),Fe.className="admin-vc-field-dot"+(Ae?" is-on":"")})}Ce.appendChild(Le),fe.appendChild(Ce)}),re.appendChild(fe);let ge=document.createElement("div");ge.className="admin-vc-col-panel";var Te=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(xe,Ce){return'<span class="admin-vc-swatch-dot" style="background:'+xe+";border:"+(Ce===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");ge.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+f(p("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+f(p("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+f(p("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+Te+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+f(p("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+f(p("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+f(p("displayFieldsTip"))+"</div>",Y.appendChild(re),Y.appendChild(ge);function Ee(xe,Ce,Fe,De,Be,Le){let Ae=Le?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+xe+'</div></div><div class="admin-vc-limit-row__value" style="color:'+Ae+'">'+Fe+'<span class="admin-vc-limit-row__unit">'+(De||"")+"</span></div>"+(Be?'<div class="admin-vc-limit-row__hint">'+Be+"</div>":"")+"</div>"}let _e=document.createElement("div");_e.id="sec-viewer-config-limits",_e.className="admin-vc-limits-grid lg:col-span-2",_e.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+f(p("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+f(p("displayEditLink"))+"</a></div>"+Ee(f(p("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",f(p("displayRateFpUnit")),f(p("displayRateFpHint")))+Ee(f(p("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",f(p("displayRateGlobalHint")))+Ee(f(p("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",f(p("displayRateBurstUnit")),f(p("displayRateBurstHint")))+Ee(f(p("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",f(p("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+f(p("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+f(p("displayContentLimitsTitle"))+"</span></div>"+Ee(f(p("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",f(p("displayMsgLenUnit")),f(p("displayMsgLenHint")))+Ee(f(p("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",f(p("displayNickLenUnit")),f(p("displayNickLenHint")))+Ee(f(p("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",f(p("displayDedupHint")))+Ee(f(p("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+f(p("displayProfanityDefaultValue"))+"</span>","",f(p("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+f(p("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(p("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+f(p("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(p("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+f(p("displayAuditLogLink"))+"</a></div>";let $e=document.getElementById("sec-viewer-theme");$e&&$e.parentNode===O?(O.insertBefore(J,$e),O.insertBefore(_e,$e),O.insertBefore(Y,$e)):(O.appendChild(J),O.appendChild(_e),O.appendChild(Y)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),de()}async function me(){let O=document.getElementById("settings-grid");if(!O||document.getElementById(y)){Z();return}O.insertAdjacentHTML("beforeend",B()),ie(),Z(),de(),S.options||await Promise.all([G(),_()]),ee(),c()}function ve(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?me():Z(),de()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",de),document.addEventListener("admin-route-applied",de),document.addEventListener("admin-panel-rendered",()=>{me(),Z(),ne(),de()}),me(),ne()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ve):ve()})()});var dt=he(()=>{document.addEventListener("DOMContentLoaded",()=>{function y(){let K=document.querySelector('meta[name="csrf-token"]');return K&&K.content||""}let w=window.DANMU_CONFIG||{},g=w.session||{logged_in:!1},f=w.settingRanges||{};function L(K,z={}){let ae={credentials:"same-origin",...z},ie=new Headers(z.headers||{});return ie.set("X-CSRF-Token",y()),ae.headers=ie,fetch(K,ae)}window.csrfFetch=L;let H=5e3,C={at:0,data:null,promise:null};function I(){return C.data&&Date.now()-C.at<H}function p(){return I()?Promise.resolve(C.data):(C.promise||(C.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(K=>K.ok?K.json():null).then(K=>(K&&(C.data=K,C.at=Date.now()),C.promise=null,K)).catch(()=>(C.promise=null,null))),C.promise)}function M(K){if(!I())return null;let z=C.data[K];return z&&typeof z=="object"&&"_error"in z?null:z}window.__danmuAdminBootstrap={prime:p,get:M},p();let F={},$=null,S=null,N=Object.create(null);Object.assign(N,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},"api-tokens":{nav:"integrations",tab:"api-tokens"},scheduler:{nav:"integrations",tab:"scheduler"},security:{nav:"system",tab:"security"}});let b=Object.create(null);Object.assign(b,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"integrations",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"integrations",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"integrations",tab:"plugins"},mobile:{nav:"system",tab:"system"}});let k={_key:K=>"admin:tab:"+K,get(K){try{return sessionStorage.getItem(this._key(K))||null}catch{return null}},set(K,z){try{z?sessionStorage.setItem(this._key(K),z):sessionStorage.removeItem(this._key(K))}catch{}}};function A(K){let z=(K||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!z)return null;let ae=z[1],ie=z[2]||null,W=null;if(!ie){let Z=N[ae];typeof Z=="string"?ae=Z:Z&&typeof Z=="object"&&(ae=Z.nav||ae,W=Z.tab||null)}let X=b[ae],ee=ae,se=null;if(typeof X=="string"?ee=X:X&&typeof X=="object"&&(ee=X.nav||ae,se=X.tab||null),z[1]!==ee&&(A._warned||(A._warned=new Set),!A._warned.has(z[1]))){A._warned.add(z[1]);try{console.info("[admin] legacy route #/"+z[1]+" \u2192 #/"+ee+(ie||se||W?"/"+(ie||se||W):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:ee,tab:ie||se||W,raw:ae}}function j(K,z){return z?"#/"+K+"/"+z:"#/"+K}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:b,tabMemory:k,parseHash:A,buildHash:j});var B=window.AdminUtils.loadDetailsState,P=window.AdminUtils.saveDetailsState,m=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:p,bootstrapSection:M};async function r(){try{F=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),g.logged_in&&x()}catch(K){console.error("Get settings failed:",K),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function o(K){return/^#[0-9A-Fa-f]{6}$/.test(K)}function n(K){return o(K)?K:/^[0-9A-Fa-f]{6}$/.test(K)?"#"+K:(K.startsWith("#")||(K="#"+K),o(K)?K:"#38bdf8")}function d(K,z){if(f[K]){let ae=parseInt(z);if(isNaN(ae)||ae<f[K].min||ae>f[K].max)return showToast(ServerI18n.t("settingRangeError",{key:K,min:f[K].min,max:f[K].max}),!1),!1}return!0}function i(K,z,ae){if(!ae||!Array.isArray(F[K]))return;let ie=F[K][z];K==="Color"&&typeof ie=="string"&&(ie=n(`#${ie}`)),ie!=null&&(ae.value=String(ie))}let c={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-plugins","sec-widgets"]}};function a(){Object.values(c).forEach(K=>{let z=document.getElementById(K.containerId);z&&K.orderedIds.forEach(ae=>{let ie=document.getElementById(ae);ie&&ie.parentElement!==z&&z.appendChild(ie)})})}function e(){$&&($.disconnect(),$=null),a(),$=new MutationObserver(()=>{a()}),$.observe(t,{childList:!0,subtree:!0})}async function l(K,z,ae,ie=null){try{if(K==="Color"){if(!o(z)){showToast(ServerI18n.t("colorFormatError"),!1),i(K,ae,ie);return}z=z.replace("#","")}else if((K==="Speed"||K==="Opacity"||K==="FontSize")&&!d(K,z)){i(K,ae,ie);return}(await L("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:K,value:z,index:ae})})).ok?(Array.isArray(F[K])||(F[K]=[!1,"","",""]),F[K][ae]=z,showToast(`${K} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await r())}catch(W){console.error("Error:",W),showToast(`Update Error: ${W.message}`,!1),await r()}}async function h(K,z){try{let ae=await L("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:K,enabled:z})}),ie=await ae.json().catch(()=>({}));if(ae.ok)Array.isArray(F[K])||(F[K]=[!1,"","",""]),F[K][0]=z,showToast(`${K} ${ServerI18n.t("settingsUpdated")}`),x();else{let W=document.getElementById(`toggle-${K}`);W&&(W.checked=!z),showToast(ie.error||ServerI18n.t("updateFailed"),!1)}}catch(ae){console.error("Error:",ae);let ie=document.getElementById(`toggle-${K}`);ie&&(ie.checked=!z),showToast(`Update Error: ${ae.message}`,!1)}}let t=document.getElementById("app-container"),s=document.getElementById("toast-container"),u=(K,z=500)=>"requestIdleCallback"in window?window.requestIdleCallback(K,{timeout:z}):setTimeout(K,z);async function v(){let K=parseInt(document.getElementById("historyHours")?.value||"24");try{let[z,ae]=await Promise.all([fetch(`/admin/stats/hourly?hours=${K}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${K}&limit=10`,{credentials:"same-origin"})]);if(!z.ok||!ae.ok)return;let ie=await z.json(),W=await ae.json(),X=document.getElementById("statsDashboard");if(!X)return;let ee=ie.distribution||[],se=W.topTexts||[],Z=Math.max(1,...ee.map(ke=>ke.count)),le=ee.reduce((ke,te)=>ke+(te.count||0),0),ce=ee.filter(ke=>ke.count>0).length,we=ee.map(ke=>`<div class="chart-bar" style="height: ${Math.round(ke.count/Z*100)}%" title="${m(ke.hour)}: ${ke.count}"><span class="chart-label">${m(ke.hour.slice(-5,-3))}</span></div>`).join(""),Ie=se.map((ke,te)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${te+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${m(ke.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${ke.count}</td></tr>`).join("");X.innerHTML=`
        <div class="history-dashboard-grid">
          <div class="history-dashboard-card">
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label">${ServerI18n.t("total")}</span>
              <strong class="history-dashboard-value">${le}</strong>
            </div>
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label" data-i18n="historyActiveSlots">${ServerI18n.t("historyActiveSlots")}</span>
              <strong class="history-dashboard-value">${ce}</strong>
            </div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--chart">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("hourlyDistribution")}</h4>
              <span class="history-dashboard-caption">${K}h window</span>
            </div>
            <div class="stats-chart">${we||`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${se.length?`<table class="w-full text-xs"><tbody>${Ie}</tbody></table>`:`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
          </div>
        </div>`}catch(z){console.error("Load stats error:",z)}}window._loadStats=v,window.csrfFetch=L,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=t,window.__adminCtx.getSettings=()=>F;function E(){t&&(t.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function T(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():E()}function x(){let K=B(),z=(ce,we=!1)=>K[ce]!==void 0?K[ce]:we,ae=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(ce=>Array.isArray(F[ce])&&F[ce][0]===!0).length,ie=F.Layout&&F.Layout[3]?m(String(F.Layout[3]).replace(/_/g," ")):"scroll",W=F.FontFamily&&F.FontFamily[3]?m(String(F.FontFamily[3])):"NotoSansTC",X=ce=>ce.map(we=>`<span style="height:${we*10}%;opacity:${.3+we*.08}"></span>`).join(""),ee=ie&&ie!=="off",se=window.location.port||(window.location.protocol==="https:"?"443":"80");t.innerHTML=`
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
                                         aria-label="${m(ServerI18n.t("adminSearchHint"))}"
                                         title="${m(ServerI18n.t("adminSearchHint"))} \u2318K">
                                        <span aria-hidden="true">\u2315</span>
                                    </button>
                                    <!-- \u8A2D\u8A08\u7A3F 15 \xB7 HD1\uFF1A\u8AAA\u660E\u62BD\u5C5C\u7531\u300C?\u300D\u6309\u9215\u958B\u3002
                                         \u5728\u9019\u4E4B\u524D\u62BD\u5C5C\u53EA\u6709\u9375\u76E4\uFF08F1\uFF09\u80FD\u958B\uFF0C\u7B49\u65BC\u5C0D\u6ED1\u9F20\u4F7F\u7528\u8005
                                         \u4E0D\u5B58\u5728\u3002\u9375\u76E4\u7684 ? \u5DF2\u6539\u6210\u53EB\u300C\u5FEB\u901F\u9375\u4E00\u89BD\u300D\uFF08KS1\uFF09\u3002 -->
                                    <button class="admin-dash-search is-icon-only" type="button" data-open-help
                                         aria-label="${m(ServerI18n.t("helpDrawerTitle"))}"
                                         title="${m(ServerI18n.t("helpDrawerTitle"))} F1">
                                        <span aria-hidden="true">?</span>
                                    </button>
                                    <!-- \u8AA0\u5BE6\u7684\u72C0\u614B\u71C8\uFF0B\u6377\u5F91\uFF1A\u5B83\u662F\u5C0E\u822A\uFF08\u524D\u5F80\u986F\u793A\u5C64\u9801\uFF09\uFF0C
                                         \u4E0D\u662F\u958B\u95DC\u3002 -->
                                    <button class="admin-dash-broadcast ${ee?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${m(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${m(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 ${m(ee?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}
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
                `;let Z=document.getElementById("settings-grid"),le=F.Effects?F.Effects[0]!==!1:!0;Z.insertAdjacentHTML("beforeend",`
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
      </div>`),Z.insertAdjacentHTML("beforeend",`
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
    `),Z.insertAdjacentHTML("beforeend",`
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
            <span class="lbl">${m(ServerI18n.t("themeDetailFont"))}</span>
            <span class="val">
              <select class="admin-ui-input" data-theme-ov="font_family" id="themeOvFont"></select>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${m(ServerI18n.t("themeDetailStroke"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="stroke">
              <button type="button" data-theme-opt="none">${m(ServerI18n.t("themeStrokeNone"))}</button>
              <button type="button" data-theme-opt="thin">${m(ServerI18n.t("themeStrokeThin"))}</button>
              <button type="button" data-theme-opt="thick">${m(ServerI18n.t("themeStrokeThick"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${m(ServerI18n.t("themeDetailShadow"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="shadow">
              <button type="button" data-theme-opt="none">${m(ServerI18n.t("themeShadowNone"))}</button>
              <button type="button" data-theme-opt="soft">${m(ServerI18n.t("themeShadowSoft"))}</button>
              <button type="button" data-theme-opt="strong">${m(ServerI18n.t("themeShadowStrong"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${m(ServerI18n.t("themeDetailColor"))}
              <span class="sub">${m(ServerI18n.t("themeDetailColorHint"))}</span>
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
    `),u(U),Z.insertAdjacentHTML("beforeend",`
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
    `),G(),e(),u(V),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),q(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let we=document.querySelector("[data-telem-bars]");if(!we)return;let Ie=document.querySelector("[data-telem-status]"),ke={cpu:100,mem:100,ws:100,rate:50};function te(ne,me,ve,O,J){let Q=we.querySelector(`[data-telem-fill="${ne}"]`),Y=we.querySelector(`[data-telem-value="${ne}"]`);Q&&(Q.style.width=Math.max(0,Math.min(100,me))+"%",Q.classList.toggle("is-warn",!O)),Y&&(Y.textContent=ve);let re=we.querySelector(`[data-telem-row="${ne}"]`);re&&J&&re.setAttribute("title",J)}function oe(ne,me){if(!me||me<=0)return Math.round(ne)+" MB used";if(me>=1024){let ve=(ne/1024).toFixed(1),O=(me/1024).toFixed(1);return`${ve} / ${O} GB used`}return`${Math.round(ne)} / ${Math.round(me)} MB used`}async function de(){try{let ne=await fetch("/admin/metrics",{credentials:"same-origin"});if(!ne.ok)return;let me=await ne.json(),ve=me.cpu_series||[],O=me.mem_series||[],J=me.mem_mb_series||[],Q=me.ws_series||[],Y=me.rate_series||[],re=Te=>Te.length?Te[Te.length-1]:0,ue=Number(re(ve)||0),pe=Number(re(O)||0),Se=Number(re(J)||0),fe=Number(me.mem_total_mb||0),ge=Number(re(Q)||me.ws_clients||0),ye=Number(re(Y)||0)/60;if(te("cpu",ue,`${ue.toFixed(0)}%`,ue<90),te("mem",pe,`${pe.toFixed(0)}%`,pe<90,oe(Se,fe)),te("ws",ge/ke.ws*100,String(ge),ge<100),te("rate",ye/ke.rate*100,`${ye.toFixed(1)}/s`,ye<40),Ie){let Te=ue>=90||pe>=90||ye>=40;Ie.textContent=Te?"\u25CF BUSY":"\u25CF HEALTHY",Ie.classList.toggle("is-warn",Te)}}catch{}}setTimeout(de,4e3),setInterval(de,5e3)})()}let D={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},integrations:{title:"\u64F4\u5145",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"]},firetoken:{title:"Fire Token",kicker:"ADMIN LANE \xB7 FIRE TOKEN \xB7 \u7528\u91CF / IP / AUDIT",sections:["sec-firetoken-overview"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},backup:{title:"\u5099\u4EFD\u8207\u9084\u539F",kicker:"BACKUP \xB7 EXPORT \xB7 DANGER",sections:["admin-backup-v2-page","sec-timeline-export"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=D;function q(){let K=document.querySelector(".admin-dash-grid");if(!K)return;let z="dashboard",ae=null;function ie(ne){return c.moderation.orderedIds.indexOf(ne)!==-1?"moderation-grid":c.assets.orderedIds.indexOf(ne)!==-1?"assets-grid":ne==="sec-scheduler"||ne==="sec-webhooks"?"sec-advanced":"settings-grid"}function W(){let ne=K.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),me=K.querySelector("[data-route-note]"),ve=K.querySelector("[data-route-action]");if(ve&&Array.prototype.slice.call(ve.children).forEach(re=>{re._adminHomeHead?re._adminHomeHead.appendChild(re):re.remove()}),!ne)return;let O=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(z)),J=Array.prototype.slice.call(K.querySelectorAll(".admin-ui-page-head"));J.forEach(re=>re.classList.remove("is-merged-into-topbar"));let Q=(D[z]?.title||"").trim().replace(/\s+/g," "),Y=null;J.forEach(re=>{let ue=re.querySelector(".admin-ui-page-title"),pe=ue&&ue.textContent.trim().replace(/\s+/g," ");if(pe&&(O||pe===ne||pe===Q)){if(re.offsetParent!==null){Y===null&&(Y=re.querySelector(".admin-ui-page-note")?.innerHTML||"");let fe=re.querySelector(".admin-ui-page-actions");fe&&ve&&!ve.children.length&&(fe._adminHomeHead=re,ve.appendChild(fe))}re.classList.add("is-merged-into-topbar")}}),me&&(me.innerHTML=Y||"",me.hidden=!Y)}function X(){let ne=D[z],me=new Set((ne.sections||[]).map(ie)),ve=O=>O.id==="sec-advanced"?Array.from(O.querySelectorAll('[id^="sec-"]')).some(J=>getComputedStyle(J).display!=="none"):Array.from(O.children).some(J=>getComputedStyle(J).display!=="none");K.querySelectorAll(".admin-route-sections").forEach(O=>{if(!(O.id==="sec-advanced"?me.has("sec-advanced"):me.has(O.id))){O.style.display="none";return}O.style.display="",O.style.display=ve(O)?"":"none"})}let ee=()=>{let ne=D[z],me=new Set(ne.sections);K.querySelectorAll('[id^="sec-"]').forEach(ve=>{if(ve.id){if(ve.id==="sec-advanced"){let O=Array.from(ve.querySelectorAll('[id^="sec-"]')).some(J=>me.has(J.id));ve.style.display=O?"":"none";return}ve.style.display=me.has(ve.id)?"":"none"}}),ae&&window.AdminTabs?.hasTabsFor?.(z)&&window.AdminTabs.applyTabSectionVisibility(z,ae,K),X(),W()},se={system:{nav:"system",tab:"overview"},backup:{nav:"backup"},integrations:{nav:"integrations"},"api-tokens":{nav:"integrations",tab:"api-tokens"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},scheduler:{nav:"integrations",tab:"scheduler"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}},Z=(ne,me,ve)=>{if(ve=ve||ne,!D[ne]){let _e=N[ne];if(typeof _e=="string")ne=_e;else if(_e&&typeof _e=="object")_e.nav&&(ne=_e.nav),!me&&_e.tab&&(me=_e.tab);else{let $e=b[ne];typeof $e=="string"?ne=$e:$e&&typeof $e=="object"&&($e.nav&&(ne=$e.nav),!me&&$e.tab&&(me=$e.tab))}}if(ne==="system"&&me&&se[me]){let _e=se[me];ne=_e.nav,me=_e.tab||null,ve=ne}z=D[ne]?ne:"live",K.dataset.activeRoute=z;let O;window.AdminTabs?.hasTabsFor?.(z)?O=window.AdminTabs.resolveActiveTab(z,me):O=null;let J=ve&&ve!==z?"#/"+ve:window.AdminRouter?.buildHash?window.AdminRouter.buildHash(z,O):"#/"+z;if(window.location.hash!==J){try{history.replaceState(null,"",J)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let Q=D[z],Y=Array.from(K.querySelectorAll(".admin-dash-nav-row[data-route]")),re=ve!==z?Y.find(_e=>_e.dataset.route===ve):null;Y.forEach(_e=>{let $e=re?_e===re:_e.dataset.route===z;_e.classList.toggle("is-active",$e),_e.setAttribute("aria-selected",$e?"true":"false")});let ue=K.querySelector("[data-route-kicker]"),pe=K.querySelector("[data-route-title]");var Se=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(_e){return _e},fe="adminRouteTitle_"+z,ge="adminRouteKicker_"+z,ye=Se(fe),Te=Se(ge);ue&&(ue.textContent=Te!==ge?Te:Q.kicker),pe&&(pe.textContent=ye!==fe?ye:Q.title);let Ee=z==="dashboard"||z==="live";K.querySelectorAll('[data-route-view="dashboard"]').forEach(_e=>{_e.style.display=Ee?"":"none"}),Ee?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),ae=O,O&&window.AdminRouter?.tabMemory?.set?.(z,O),K.dataset.activeLeaf=O||z,ee(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:z,leaf:O}})),X(),W(),ce(z,O),le(ve,z,O);try{history.replaceState(null,"",J)}catch{}};function le(ne,me,ve){window.AdminBreadcrumb?.render(K,ne,me,ve)}function ce(ne,me){let ve=K.querySelector("[data-admin-tabs-host]");if(!ve){let O=K.querySelector(".admin-dash-topbar");if(!O)return;ve=document.createElement("div"),ve.dataset.adminTabsHost="",O.insertAdjacentElement("afterend",ve)}if(ve.innerHTML="",window.AdminTabs?.hasTabsFor?.(ne)&&me){ve.hidden=!1;let O=window.AdminTabs.renderTabStrip(ne,me,{onSelect:J=>Z(ne,J)});O&&ve.appendChild(O),ve.classList.remove("admin-tabs-host--accordion");return}ve.classList.remove("admin-tabs-host--accordion"),ve.hidden=!0}S&&window.removeEventListener("hashchange",S),S=()=>{let ne=A(window.location.hash),me=(window.location.hash||"").match(/^#\/([\w-]+)/),ve=me?me[1]:null;ne&&Z(ne.nav,ne.tab,ve||ne.raw)},window.addEventListener("hashchange",S),K.querySelectorAll("[data-route]").forEach(ne=>{ne.addEventListener("click",me=>{me.preventDefault(),Z(ne.dataset.route)})});let we=A(window.location.hash),Ie=(window.location.hash||"").match(/^#\/([\w-]+)/),ke=Ie?Ie[1]:we?.raw||we?.nav||"live";Z(we?.nav||"live",we?.tab||null,ke),window._adminNavigateTo=()=>Z(z,ae);let te=!1;function oe(){if(te)return;te=!0;let ne=()=>{te=!1,ee(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:z,leaf:ae}}))};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?requestAnimationFrame(ne):setTimeout(ne,0)}let de=K.querySelector(".admin-dash-main");de&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{oe()}).observe(de,{childList:!0,subtree:!0}),oe())}function G(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let K=document.querySelector("[data-open-help]");K&&K.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let z=document.querySelector("[data-open-palette]");if(z){let ie=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};z.addEventListener("click",ie),z.addEventListener("keydown",W=>{(W.key==="Enter"||W.key===" ")&&(W.preventDefault(),ie())})}let ae=document.getElementById("logoutButton");ae&&ae.addEventListener("click",async()=>{try{let ie=await L("/logout",{method:"POST"});ie.redirected&&(window.location.href=ie.url),showToast(ServerI18n.t("logoutSuccess"))}catch(ie){console.error("Logout Failed:",ie),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(ie=>{ie.name&&ie.addEventListener("change",async function(){let W=this.name,X=this.checked;await h(W,X)})}),document.querySelectorAll("details[id^='sec-']").forEach(ie=>{ie.addEventListener("toggle",()=>{let W=B();W[ie.id]=ie.open,P(W)})}),document.querySelectorAll(".setting-input").forEach(ie=>{ie.addEventListener("change",async function(){let W=this.dataset.key,X=parseInt(this.dataset.index),ee=this.value;this.type==="number"&&(ee=parseInt(ee)),await l(W,ee,X,this)})})}function _(){if(g.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}x()}else T()}async function R(){await r(),_(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function U(){window.AdminThemes&&window.AdminThemes.init()}function V(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{$&&($.disconnect(),$=null)}),R()})});var lt=he(()=>{(function(){"use strict";var y=null;async function w(){var p=(document.getElementById("pollQuestion")?.value||"").trim(),M=document.querySelectorAll(".poll-option-input"),F=Array.from(M).map(function(N){return N.value.trim()}).filter(Boolean);if(!p){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(F.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var $=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:p,options:F})}),S=await $.json();if(!$.ok){window.showToast(S.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),C(S),L()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function g(){try{var p=await window.csrfFetch("/admin/poll/end",{method:"POST"}),M=await p.json();if(!p.ok){window.showToast(M.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),C(M),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function f(){try{var p=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),M=await p.json();if(!p.ok){window.showToast(M.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),C(M),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function L(){y&&(clearInterval(y),y=null);var p=async function(){try{var M=await fetch("/admin/poll/status",{credentials:"same-origin"});if(M.ok){var F=await M.json();C(F),F.state!=="active"&&y&&(clearInterval(y),y=null)}}catch{}};p(),y=setInterval(p,2e3)}function H(){var p=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var M=document.querySelector('#sec-polls [data-poll-action="add"]');M&&M.click()},extra:`
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
      </div>`});return p.dataset.emptyKind="poll",p}function C(p){var M=document.getElementById("pollStatusDisplay");if(M){if(M.textContent="",!p||p.state==="idle"){M.appendChild(H());return}var F=p.total_votes||0,$=Math.max(1,...p.options.map(function(B){return B.count})),S=document.createElement("div");S.className="admin-poll-status-card";var N=document.createElement("div");N.className="admin-poll-status-header";var b=document.createElement("span");b.className="admin-poll-status-dot"+(p.state==="active"?" is-active":" is-ended"),N.appendChild(b);var k=document.createElement("span");k.className="admin-poll-status-question",k.textContent=p.question||"",N.appendChild(k);var A=document.createElement("span");A.className="admin-poll-status-state",A.textContent=p.state,N.appendChild(A),S.appendChild(N),p.options.forEach(function(B){var P=document.createElement("div");P.className="admin-poll-status-row";var m=document.createElement("div");m.className="admin-poll-status-label";var r=document.createElement("span"),o=document.createElement("b");o.textContent=B.key+".",r.appendChild(o),r.appendChild(document.createTextNode(" "+B.text));var n=document.createElement("span");n.textContent=B.count+" ("+B.percentage+"%)",m.appendChild(r),m.appendChild(n);var d=document.createElement("div");d.className="admin-poll-status-bar";var i=document.createElement("div");i.className="admin-poll-status-bar-fill",i.style.width=B.count/$*100+"%",d.appendChild(i),P.appendChild(m),P.appendChild(d),S.appendChild(P)});var j=document.createElement("div");j.className="admin-poll-status-footer",j.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",F),S.appendChild(j),M.appendChild(S)}}function I(){var p=document.getElementById("sec-polls");if(p&&p.dataset.pollLegacyBound!=="1"){p.dataset.pollLegacyBound="1";var M=document.getElementById("pollCreateBtn");M&&M.addEventListener("click",w);var F=document.getElementById("pollEndBtn");F&&F.addEventListener("click",g);var $=document.getElementById("pollResetBtn");$&&$.addEventListener("click",f);var S=document.getElementById("pollAddOptionBtn");S&&S.addEventListener("click",function(){var k=document.getElementById("pollOptionsContainer");if(k){var A=k.querySelectorAll(".poll-option-input").length;if(A>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var j=document.createElement("input");j.type="text",j.className="poll-option-input admin-ui-input",j.placeholder=String.fromCharCode(65+A)+". Option "+(A+1),j.maxLength=100,k.appendChild(j)}});var N=document.getElementById("pollRemoveOptionBtn");N&&N.addEventListener("click",function(){var k=document.getElementById("pollOptionsContainer");if(k){var A=k.querySelectorAll(".poll-option-input");if(A.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}A[A.length-1].remove()}});var b=p;b&&(b.addEventListener("toggle",function(){b.open&&L()}),L()),window.addEventListener("beforeunload",function(){y&&(clearInterval(y),y=null)})}}document.addEventListener("admin-panel-rendered",function(){I()}),document.addEventListener("DOMContentLoaded",function(){I()}),window.addEventListener("hashchange",function(){var p=window.location.hash||"";p.indexOf("/polls")!==-1&&I()})})()});var ct=he(()=>{(function(){"use strict";async function y(){try{let L=await fetch("/admin/blacklist/get",{method:"GET",credentials:"same-origin"});if(!L.ok){let M=await L.json();showToast(ServerI18n.t("errorFetchingBlacklist").replace("{error}",M.error||L.statusText),!1);return}let H=await L.json(),C=document.getElementById("blacklistKeywords");C.innerHTML="";let I=document.getElementById("modBlacklistCount");I&&(I.textContent=`${H.length} words`);let p=document.querySelector('[data-mod-stat="banned"]');p&&(p.textContent=H.length),H.length===0?C.innerHTML=`<div style="padding:12px 0;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${ServerI18n.t("noKeywordsYet")}</div>`:H.forEach(M=>{let F=document.createElement("div");F.className="hud-banned-row";let $=document.createElement("span");$.style.cssText="color: var(--color-ink-error);font-family:var(--font-mono);font-size:13px",$.textContent="\u2298";let S=document.createElement("span");S.style.cssText="flex:1;min-width:0;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all",S.textContent=M;let N=document.createElement("button");N.className="removeKeywordBtn",N.type="button",N.style.cssText="background:transparent;border:none;color: var(--color-ink-accent);font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;cursor:pointer;padding:2px 4px",N.textContent="UNBAN",N.setAttribute("data-keyword",M),F.appendChild($),F.appendChild(S),F.appendChild(N),C.appendChild(F)})}catch(L){console.error("Fetch blacklist error:",L),showToast(ServerI18n.t("fetchBlacklistError"),!1)}}async function w(){let L=document.getElementById("newKeywordInput"),H=L.value.trim();if(!H){showToast(ServerI18n.t("keywordEmpty"),!1);return}try{let C=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:H})}),I=await C.json();C.ok?(L.value="",y(),window.AdminQuickAction?window.AdminQuickAction.fire({label:I.message||ServerI18n.t("histToastBlacklisted",{keyword:H}),undo:{label:ServerI18n.t("histUndo"),run:async()=>{if(!(await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:H})})).ok)throw new Error("remove failed");y()}}}):showToast(I.message||"Keyword added.",!0)):showToast(I.error||"Failed to add keyword.",!1)}catch(C){console.error("Add keyword error:",C),showToast(ServerI18n.t("addKeywordError"),!1)}}async function g(L){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("histRemoveKwTitle"),subtitle:ServerI18n.t("cfmSubRemoveKeyword"),severity:"warn",bodyText:ServerI18n.t("confirmRemoveKeyword").replace("{keyword}",L),confirmLabel:ServerI18n.t("histRemoveKwConfirm")}))try{let C=await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:L})}),I=await C.json();C.ok?(showToast(I.message||"Keyword removed.",!0),y()):showToast(I.error||"Failed to remove keyword.",!1)}catch(C){console.error("Remove keyword error:",C),showToast(ServerI18n.t("removeKeywordError"),!1)}}function f(){let L=document.getElementById("addKeywordBtn");L&&L.addEventListener("click",w);let H=document.getElementById("newKeywordInput");H&&H.addEventListener("keypress",function(I){(I.key==="Enter"||I.keyCode===13)&&(I.preventDefault(),w())});let C=document.getElementById("blacklistKeywords");C&&C.addEventListener("click",function(I){let p=I.target.closest(".removeKeywordBtn");if(p){let M=p.dataset.keyword;M&&g(M)}})}document.addEventListener("admin-panel-rendered",function(){y(),f()}),window.AdminHistory={fetchBlacklist:y}})()});var ut=he(()=>{(function(){"use strict";var y="sec-timeline-export",w="danmu.adminHistoryExports.v1",g=10,f={rawText:!0,polls:!0,masked:!1,metadata:!0},L=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],H=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],C={range:"24h",filters:Object.assign({},f),format:"JSON"};function I(){return document.getElementById(y)}function p(){try{return JSON.parse(localStorage.getItem(w)||"[]")}catch{return[]}}function M(v){try{localStorage.setItem(w,JSON.stringify(v.slice(0,g)))}catch{}}function F(v){var E=p();E.unshift(v),M(E)}function $(v){return v?v<1024?v+" B":v<1024*1024?(v/1024).toFixed(1)+" KB":(v/1024/1024).toFixed(1)+" MB":"0 B"}function S(v){try{var E=new Date(v),T=new Date,x=E.toDateString()===T.toDateString();if(x)return ServerI18n.t("historyV2TodayAt",{time:String(E.getHours()).padStart(2,"0")+":"+String(E.getMinutes()).padStart(2,"0")});var D=new Date(T);return D.setDate(T.getDate()-1),E.toDateString()===D.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(E.getHours()).padStart(2,"0")+":"+String(E.getMinutes()).padStart(2,"0")}):E.getMonth()+1+"-"+String(E.getDate()).padStart(2,"0")+" "+String(E.getHours()).padStart(2,"0")+":"+String(E.getMinutes()).padStart(2,"0")}catch{return v||""}}function N(v){if(v==="1h")return 1;if(v==="24h")return 24;if(v==="7d")return 168;if(v==="today"){var E=new Date,T=new Date(E.getFullYear(),E.getMonth(),E.getDate());return Math.max(1,Math.ceil((E-T)/36e5))}return v==="yest"?48:v==="live"?6:24}function b(v){return v.filter(function(E){return!(!C.filters.rawText&&!E.is_poll&&!E.muted&&!E.banned||!C.filters.polls&&E.is_poll||!C.filters.masked&&(E.muted||E.banned))}).map(function(E){if(!C.filters.metadata){var T=Object.assign({},E);return delete T.clientIp,delete T.fingerprint,T}return E})}function k(v){var E=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],T=function(q){var G=q==null?"":String(q);return G.indexOf(",")>=0||G.indexOf('"')>=0||G.indexOf(`
`)>=0?'"'+G.replace(/"/g,'""')+'"':G},x=function(q){return q.status?q.status:q.banned?"banned":q.muted?"muted":q.is_poll?"poll":"ok"},D=v.map(function(q){return[q.timestamp||"",q.nickname||"",q.text||"",q.color?"#"+q.color:"",q.size!=null?q.size:"",q.speed!=null?q.speed:"",q.opacity!=null?q.opacity:"",q.isImage?"true":"false",q.fontInfo&&q.fontInfo.name||"",q.clientIp||"",q.fingerprint||"",x(q),q.delivery_reason||""].map(T).join(",")});return[E.join(","),D.join(`\r
`)].filter(Boolean).join(`\r
`)}function A(v){return v.map(function(E,T){var x=new Date(E.timestamp||Date.now()),D=j(x),q=j(new Date(x.getTime()+3e3)),G=(E.nickname?"["+E.nickname+"] ":"")+(E.text||"");return T+1+`
`+D+" --> "+q+`
`+G+`
`}).join(`
`)}function j(v){var E=function(T,x){return String(T).padStart(x||2,"0")};return E(v.getHours())+":"+E(v.getMinutes())+":"+E(v.getSeconds())+","+E(v.getMilliseconds(),3)}function B(v,E){var T=URL.createObjectURL(v),x=document.createElement("a");x.href=T,x.download=E,x.click(),URL.revokeObjectURL(T)}function P(){var v=N(C.range),E=document.getElementById("histv2-go");E&&(E.disabled=!0,E.dataset.busy="1"),fetch("/admin/history?hours="+v+"&limit=10000",{credentials:"same-origin"}).then(function(T){if(!T.ok)throw new Error("http "+T.status);return T.json()}).then(function(T){var x=T&&T.records||[],D=b(x);if(D.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var q=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),G,_;if(C.format==="JSON"){var R=JSON.stringify(D,null,2);_=new Blob([R],{type:"application/json"}),G="danmu-history-"+q+".json"}else C.format==="CSV"?(_=new Blob(["\uFEFF"+k(D)],{type:"text/csv;charset=utf-8;"}),G="danmu-history-"+q+".csv"):(_=new Blob([A(D)],{type:"application/x-subrip;charset=utf-8;"}),G="danmu-history-"+q+".srt");B(_,G),F({name:G,fmt:C.format,size:_.size,when:new Date().toISOString(),count:D.length}),r(),m(D.length,_.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:D.length}),!0)}).catch(function(T){console.error("[history-v2] export failed",T),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:T.message||T}),!1)}).finally(function(){E&&(E.disabled=!1,delete E.dataset.busy)})}function m(v,E){var T=document.getElementById("histv2-estimate");T&&(T.textContent=ServerI18n.t("historyV2Estimate",{count:v||"\u2014",size:E?$(E):"\u2014 MB"}))}function r(){var v=document.getElementById("histv2-recent-list");if(v){var E=p();if(E.length===0){v.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}v.innerHTML=E.map(function(T){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+T.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+o(T.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+o(S(T.when))+" \xB7 "+$(T.size)+"</div></div></div>"}).join("")}}function o(v){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(v):v==null?"":String(v).replace(/[&<>"']/g,function(E){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[E]})}function n(){return L.map(function(v){var E=C.range===v.k;return'<button type="button" class="histv2-chip'+(E?" is-active":"")+'" data-histv2-range="'+v.k+'">'+o(ServerI18n.t(v.labelKey))+(v.k==="live"?" \xB7 "+d():"")+"</button>"}).join("")}function d(){var v=new Date;return String(v.getHours()).padStart(2,"0")+":"+String(v.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function i(){var v=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return v.map(function(E){var T=!!C.filters[E.k];return'<button type="button" class="histv2-toggle'+(T?" is-on":"")+'" data-histv2-toggle="'+E.k+'"><span class="histv2-toggle-mark">'+(T?"\u2713":"\u25CB")+"</span><span>"+o(ServerI18n.t(E.labelKey))+"</span></button>"}).join("")}function c(){return H.map(function(v){var E=C.format===v.k;return'<button type="button" class="histv2-fmt'+(E?" is-selected":"")+'" data-histv2-fmt="'+v.k+'">'+(E?'<span class="histv2-fmt-check">\u2713</span>':"")+(v.badge?'<span class="histv2-fmt-badge">'+o(v.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+v.k+'</div><div class="histv2-fmt-desc">'+o(v.desc)+"</div></button>"}).join("")}function a(){var v=I();v&&(v.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+n()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+i()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+c()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",v.addEventListener("click",e),r(),s())}function e(v){var E=v.target.closest("[data-histv2-range]");if(E){C.range=E.dataset.histv2Range,l(),s();return}var T=v.target.closest("[data-histv2-toggle]");if(T){var x=T.dataset.histv2Toggle;C.filters[x]=!C.filters[x],h(),s();return}var D=v.target.closest("[data-histv2-fmt]");if(D){C.format=D.dataset.histv2Fmt,t(),s();return}var q=v.target.closest("#histv2-go");if(q&&!q.dataset.busy){P();return}}function l(){var v=document.getElementById("histv2-chips");v&&(v.innerHTML=n())}function h(){var v=document.getElementById("histv2-toggles");v&&(v.innerHTML=i())}function t(){var v=document.getElementById("histv2-formats");v&&(v.innerHTML=c())}function s(){s._t&&clearTimeout(s._t),s._t=setTimeout(function(){var v=N(C.range);fetch("/admin/history?hours="+v+"&limit=10000",{credentials:"same-origin"}).then(function(E){return E.ok?E.json():null}).then(function(E){if(!E)return m(0,0);var T=b(E&&E.records||[]),x=C.format==="JSON"?220:C.format==="CSV"?110:80;m(T.length,T.length*x)}).catch(function(){m(0,0)})},250)}function u(){var v=I(),E=document.getElementById("admin-backup-v2-page");if(!v){var T=document.getElementById("settings-grid");if(!T)return;v=document.createElement("div"),v.id=y,v.className="admin-ui-card lg:col-span-2 history-v2-section",T.appendChild(v),a()}E&&E.parentElement&&v.previousElementSibling!==E&&E.parentElement.insertBefore(v,E.nextSibling)}document.addEventListener("admin-panel-rendered",u),document.addEventListener("admin-route-applied",u),window.AdminHistoryV2={refresh:s,state:C}})()});var mt=he(()=>{(function(){"use strict";let y="admin-replay-bar";function w(){let f=document.getElementById(y);return f||(document.body?(f=document.createElement("div"),f.id=y,f.className="admin-replay-bar",f.hidden=!0,f.setAttribute("role","status"),f.setAttribute("aria-live","polite"),f.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(f,document.body.firstChild),f):null)}function g(f){let L=w();L&&(L.hidden=!f)}window.AdminReplayBar={ensure:w,setActive:g},document.addEventListener("admin-panel-rendered",w)})()});var pt=he(()=>{(function(){"use strict";let y=null;function w(S){window.AdminReplayBar&&window.AdminReplayBar.ensure();let N=document.getElementById("replayPauseBtn"),b=document.getElementById("replayResumeBtn"),k=document.getElementById("replayStopBtn"),A=document.getElementById("replayProgress"),j=(m,r)=>{m&&m.classList.toggle("hidden",!r)},B=S==="playing",P=S==="paused";j(N,B),j(b,P),j(k,B||P),j(A,B||P),!B&&!P&&A&&(A.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(B||P)}function g(){y&&clearInterval(y),y=setInterval(async()=>{try{let S=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!S.ok)return;let N=await S.json(),b=document.getElementById("replayProgress");b&&(b.textContent=ServerI18n.t("replayingProgress").replace("{sent}",N.sent).replace("{total}",N.total)),w(N.state),N.state==="stopped"&&(clearInterval(y),y=null)}catch{}},500)}async function f(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),w("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function L(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),w("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function H(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),w("stopped"),y&&(clearInterval(y),y=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let C=null,I=null,p=0,M=null;function F(){[["replayPauseBtn",f],["replayResumeBtn",L],["replayStopBtn",H]].forEach(function([N,b]){let k=document.getElementById(N);k&&!k.dataset.replayCtrlsBound&&(k.addEventListener("click",b),k.dataset.replayCtrlsBound="1")})}async function $(){try{let S=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!S.ok)return;let N=await S.json();(N.state==="playing"||N.state==="paused")&&(w(N.state),g())}catch{}}window.AdminReplayControls={notifyStarted:function(){w("playing"),g()}},document.addEventListener("admin-panel-rendered",function(){F(),$()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(F,800)})})()});var vt=he(()=>{(function(){"use strict";let y="sec-ratelimit",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(C){return String(C).replace(/[&<>"']/g,function(I){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[I]})},g=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function f(){return`
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
                <span class="admin-ratelimit-row-label">${w(ServerI18n.t(C.labelKey))}</span>
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
      </div>`}function L(C){let I=C.querySelector("#rlEnvExport");setTimeout(async()=>{try{let r=window.AdminBootstrap;r&&typeof r.primeBootstrap=="function"&&await r.primeBootstrap();let o=r&&r.bootstrapSection?r.bootstrapSection("history_stats"):null,n=r&&r.bootstrapSection?r.bootstrapSection("blacklist"):null,d=r&&r.bootstrapSection?r.bootstrapSection("metrics"):null,i=[];i.push(o?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),i.push(n?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),i.push(d?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[c,a,e]=await Promise.all(i),l=o||(c&&c.ok?await c.json():null);if(l){let E=l.stats&&l.stats.last_24h||0,T=l.stats&&l.stats.total||0,x=C.querySelector("[data-rl-sum-hits]"),D=C.querySelector("[data-rl-sum-hits-delta]");x&&(x.textContent=E.toLocaleString()),D&&(D.textContent=ServerI18n.t("ratelimitSumTotal",{n:T.toLocaleString()}))}let h=n||(a&&a.ok?await a.json():null);if(h){let E=Array.isArray(h)?h:h.entries||h.keywords||[],T=C.querySelector("[data-rl-sum-black]");T&&(T.textContent=E.length?ServerI18n.t("ratelimitCountUnit",{n:E.length}):"0")}let t=C.querySelector("[data-rl-sum-viol]"),s=C.querySelector("[data-rl-sum-viol-rate]"),u=C.querySelector("[data-rl-sum-locked]"),v=d||(e&&e.ok?await e.json():null);if(v){let E=v&&v.rate_limits;if(E&&E.totals){let T=E.totals.hits||0,x=E.totals.violations||0,D=E.totals.locked_sources||0;if(t&&(t.textContent=x.toLocaleString()),s){let q=T+x;s.textContent=q>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(x/q*100).toFixed(1)}):"\u2014"}u&&(u.textContent=ServerI18n.t("ratelimitLockedSources",{n:D.toLocaleString()})),g.forEach(({key:q})=>{let G=E[q],_=C.querySelector(`[data-rl-current="${q}"]`);if(_&&G){let R=(G.hits||0).toLocaleString(),U=(G.violations||0).toLocaleString();_.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:R,viol:U})}}),M(E)}else t&&(t.textContent="\u2014"),s&&(s.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014")}else t&&(t.textContent="\u2014"),s&&(s.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014");p(v&&v.recent_violations)}catch{}},4500);function p(r){let o=C.querySelector("[data-rl-vbody]"),n=C.querySelector("[data-rl-vcount]");if(!o)return;let d=Array.isArray(r)?r:[];if(n&&(n.textContent=ServerI18n.t("ratelimitViolationsCount",{n:d.length})),d.length===0){o.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let i=a=>{let e=new Date(a*1e3),l=h=>String(h).padStart(2,"0");return`${l(e.getHours())}:${l(e.getMinutes())}:${l(e.getSeconds())}`},c=a=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[a]||"var(--color-text-muted)";o.innerHTML=d.slice(0,30).map(a=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${i(a.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${c(a.scope)}">${(a.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${w(a.ip||"")}</span>
        </div>
      `).join("")}function M(r){r&&g.forEach(({key:o})=>{let n=r[o],d=C.querySelector(`[data-rl-suggest="${o}"]`);if(!d)return;let i=n&&n.suggestion;if(!i){d.hidden=!0;return}let c=d.querySelector("[data-rl-suggest-detail]");c&&(c.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(i.p95_per_second||0).toFixed(2),limit:n.limit||"\u2014",window:n.window||"\u2014",suggLimit:i.suggested_limit,suggWindow:i.suggested_window}));let a=d.querySelector("[data-rl-apply]");a&&(a.dataset.rlSuggestLimit=String(i.suggested_limit),a.dataset.rlSuggestWindow=String(i.suggested_window)),d.hidden=!1})}async function F(){try{let r=await fetch("/admin/metrics",{credentials:"same-origin"});if(!r.ok)return;let o=await r.json(),n=o&&o.rate_limits;if(!n)return;g.forEach(({key:d})=>{let i=n[d],c=C.querySelector(`[data-rl-current="${d}"]`);if(c&&i){let a=(i.hits||0).toLocaleString(),e=(i.violations||0).toLocaleString();c.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:a,viol:e})}}),M(n)}catch{}}C.addEventListener("click",async r=>{let o=r.target.closest("[data-rl-action]");if(!o)return;let n=o.dataset.rlAction;if(n==="save"){let d=o.dataset.rlSave,i=C.querySelector(`[data-rl-limit="${d}"]`),c=C.querySelector(`[data-rl-window="${d}"]`);if(!i||!c)return;let a=parseInt(i.value,10),e=parseInt(c.value,10);if(!Number.isFinite(a)||!Number.isFinite(e)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let l=o.textContent;o.disabled=!0,o.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let h=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:d,limit:a,window:e})});if(h.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:d.toUpperCase(),limit:a,window:e}),!0),F();else{let t=await h.json().catch(()=>({})),s=t&&t.error||`HTTP ${h.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:s}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{o.disabled=!1,o.textContent=l}return}if(n==="apply-suggest"){let d=o.dataset.rlApply,i=parseInt(o.dataset.rlSuggestLimit,10),c=parseInt(o.dataset.rlSuggestWindow,10);if(!d||!Number.isFinite(i)||!Number.isFinite(c))return;let a=o.textContent;o.disabled=!0,o.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let e=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:d,limit:i,window:c})});if(e.ok){let l=C.querySelector(`[data-rl-limit="${d}"]`),h=C.querySelector(`[data-rl-window="${d}"]`);l&&(l.value=i),h&&(h.value=c),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:d.toUpperCase(),limit:i,window:c}),!0),F(),$()}else{let l=await e.json().catch(()=>({})),h=l&&l.error||`HTTP ${e.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:h}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{o.disabled=!1,o.textContent=a}return}if(n==="export"){let d=[];C.querySelectorAll("[data-rl-limit]").forEach(i=>{let c=i.dataset.rlLimit.toUpperCase();d.push(`${c}_RATE_LIMIT=${i.value}`)}),C.querySelectorAll("[data-rl-window]").forEach(i=>{let c=i.dataset.rlWindow.toUpperCase();d.push(`${c}_RATE_WINDOW=${i.value}`)}),I.textContent=d.join(`
`),I.hidden=!1;try{navigator.clipboard?.writeText(d.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else n==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([i,[c,a]])=>{let e=C.querySelector(`[data-rl-limit="${i}"]`),l=C.querySelector(`[data-rl-window="${i}"]`);e&&(e.value=c),l&&(l.value=a)}),I.hidden=!0,$())});function $(){g.forEach(({key:r})=>{let o=C.querySelector(`[data-rl-limit="${r}"]`),n=C.querySelector(`[data-rl-window="${r}"]`),d=C.querySelector(`[data-rl-lockout="${r}"]`),i=C.querySelector(`[data-rl-effective="${r}"]`);if(!o||!n||!i)return;let c=parseInt(o.value,10)||0,a=parseInt(n.value,10)||1,e=(c/a).toFixed(2),l=Math.round(c*1.5),h=`effective_rate = ${c} / ${a}s = ${e} req/s \xB7 burst = ${l}`;if(r==="login"&&d){let t=parseInt(d.value,10)||0;h+=` \xB7 lock = ${t}s`}i.textContent=h})}C.addEventListener("input",r=>{let o=r.target;!o||!o.dataset.rlLimit&&!o.dataset.rlLockout||$()}),C.addEventListener("change",r=>{let o=r.target;!o||!o.dataset.rlWindow||$()}),$();function S(r,o){if(!r||!Array.isArray(o))return;let n=96,d=24,i=o.length?o:new Array(24).fill(0),c=Math.max(1,...i),a=n/Math.max(1,i.length-1),e=i.map((h,t)=>`${(t*a).toFixed(1)},${(d-2-h/c*(d-4)).toFixed(1)}`).join(" "),l=r.querySelector("polyline");l&&l.setAttribute("points",e)}g.forEach(({key:r})=>{let o=C.querySelector(`[data-rl-spark="${r}"]`);o&&S(o,new Array(24).fill(0))});let N=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,b={allowlist:[],denylist:[]},k={input:C.querySelector("[data-rl-ip-input]"),select:C.querySelector("[data-rl-ip-select]"),addBtn:C.querySelector("[data-rl-ip-add]"),summary:C.querySelector("[data-rl-ip-summary]"),error:C.querySelector("[data-rl-ip-error]"),allowCount:C.querySelector("[data-rl-ip-allow-count]"),denyCount:C.querySelector("[data-rl-ip-deny-count]"),allowBody:C.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:C.querySelector('[data-rl-ip-body="denylist"]')};function A(r){if(k.error){if(!r){k.error.hidden=!0,k.error.textContent="";return}k.error.hidden=!1,k.error.textContent=r}}function j(r){let o=r==="allowlist"?k.allowBody:k.denyBody,n=r==="allowlist"?k.allowCount:k.denyCount;if(!o||!n)return;let d=Array.isArray(b[r])?b[r]:[];if(n.textContent=String(d.length),d.length===0){let i=ServerI18n.t(r==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");o.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:i})}</div>`;return}o.innerHTML=d.map(i=>{let c=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:w(i)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${w(i)}">
          <span class="admin-ratelimit-ip-chip-cidr">${w(i)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${w(i)}" data-rl-ip-remove-kind="${r}" title="${c}" aria-label="${c}">\xD7</button>
        </div>
      `}).join("")}function B(){if(j("allowlist"),j("denylist"),k.summary){let r=(b.allowlist||[]).length,o=(b.denylist||[]).length;k.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:r,deny:o})}}async function P(){try{let r=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!r.ok){k.summary&&(k.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:r.status}));return}let o=await r.json();o&&typeof o=="object"&&(b={allowlist:Array.isArray(o.allowlist)?o.allowlist:[],denylist:Array.isArray(o.denylist)?o.denylist:[]},B())}catch{k.summary&&(k.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function m(r,{toastLabel:o}={}){try{let n=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(n.ok){let c=await n.json();return b={allowlist:Array.isArray(c.allowlist)?c.allowlist:[],denylist:Array.isArray(c.denylist)?c.denylist:[]},B(),A(""),o&&typeof showToast=="function"&&showToast(o,!0),!0}let d=await n.json().catch(()=>({})),i=d&&d.error||`HTTP ${n.status}`;return A(i),!1}catch{return A(ServerI18n.t("ratelimitNetworkError")),!1}}k.addBtn&&k.addBtn.addEventListener("click",async()=>{if(!k.input||!k.select)return;let r=(k.input.value||"").trim();if(!r){A(ServerI18n.t("ratelimitIpRequiredError"));return}if(!N.test(r)){A(ServerI18n.t("ratelimitIpFormatError"));return}let o=k.select.value==="denylist"?"denylist":"allowlist",n=Array.from(new Set([...b[o]||[],r]));await m({[o]:n},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(o==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:r})})&&(k.input.value="")}),k.input&&(k.input.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),k.addBtn&&k.addBtn.click())}),k.input.addEventListener("input",()=>{k.error&&!k.error.hidden&&A("")})),C.addEventListener("click",async r=>{let o=r.target.closest("[data-rl-ip-remove]");if(!o)return;let n=o.dataset.rlIpRemove,d=o.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",i=(b[d]||[]).filter(c=>c!==n);await m({[d]:i},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(d==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:n})})}),P(),setTimeout(async()=>{try{let r=await fetch("/admin/metrics",{credentials:"same-origin"});if(!r.ok)return;let o=await r.json(),n=o&&o.rate_limits;if(!n)return;g.forEach(({key:d})=>{let i=n[d]&&(n[d].bucket_history||n[d].history);if(Array.isArray(i)&&i.length){let c=C.querySelector(`[data-rl-spark="${d}"]`);c&&S(c,i.slice(-24))}})}catch{}},5500)}function H(){let C=document.getElementById("settings-grid");if(!C||document.getElementById(y))return;C.insertAdjacentHTML("beforeend",f());let I=document.getElementById(y);I&&L(I)}document.addEventListener("admin-panel-rendered",H),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&H()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),H()})})()});var ft=he(()=>{(function(){"use strict";let y="sec-viewer-theme",w="danmu.viewerTheme.v1",g=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function f(){return`
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
      </div>`}let L=/^#[0-9a-f]{6}$/i,H=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function C(F){return String(F??"").replace(/[&<>"']/g,$=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[$])}function I(F){let $={};return!F||typeof F!="object"||(["bg","primary","hero"].forEach(S=>{typeof F[S]=="string"&&L.test(F[S])&&($[S]=F[S])}),(F.mode==="dark"||F.mode==="light")&&($.mode=F.mode),typeof F.font=="string"&&/^[\w .-]{1,64}$/.test(F.font)&&($.font=F.font),(F.logo===null||typeof F.logo=="string"&&H.test(F.logo))&&($.logo=F.logo)),$}function p(F){let $={...g[0],logo:null};try{let t=localStorage.getItem(w);t&&($={...$,...I(JSON.parse(t))})}catch{}let S="default";function N(){try{localStorage.setItem(w,JSON.stringify($))}catch{}}function b(t){let s=/^#?([0-9a-f]{6})$/i.exec(t);if(!s)return[0,0,0];let u=parseInt(s[1],16);return[u>>16&255,u>>8&255,u&255]}function k([t,s,u]){let v=[t,s,u].map(E=>(E/=255,E<=.03928?E/12.92:Math.pow((E+.055)/1.055,2.4)));return .2126*v[0]+.7152*v[1]+.0722*v[2]}function A(t,s){let u=k(b(t)),v=k(b(s)),[E,T]=u>v?[u,v]:[v,u];return(E+.05)/(T+.05)}function j(t){return t>=7?{label:"AAA",cls:"is-good"}:t>=4.5?{label:"AA",cls:"is-ok"}:t>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function B(){let t=F.querySelector("[data-vt-presets]");t.innerHTML="",g.forEach(s=>{let u=document.createElement("button");u.type="button",u.className="admin-vt-preset"+(S===s.id?" is-active":""),u.innerHTML=`
          <div class="swatch" style="background:${s.bg}">
            <span style="background:${s.primary}"></span>
            <span style="background:${s.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(s.nameKey)}</div>
          <div class="mode">${ServerI18n.t(s.mode==="dark"?"lbDark":"lbLight")}</div>
        `,u.addEventListener("click",()=>{$={...$,...s},S=s.id,N(),h()}),t.appendChild(u)})}function P(){F.querySelectorAll("[data-vt-mode-btn]").forEach(t=>{t.classList.toggle("is-active",$.mode===t.dataset.vtModeBtn)})}function m(){let t=F.querySelector("[data-vt-colors]"),s=$.mode==="dark"?"#F8FAFC":"#0F172A",u=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:s,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:$.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:$.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];t.innerHTML=u.map(v=>{let E=A($[v.key],v.vs),T=j(E),x=C($[v.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${x}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${v.label}</span>
                <span class="grade ${T.cls}">${T.label} \xB7 ${E.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${x}" data-vt-color="${v.key}" />
                <input type="text" value="${x}" data-vt-hex="${v.key}" spellcheck="false" />
                <span class="vs">vs ${v.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function r(){let t=F.querySelector("[data-vt-logo-preview]"),s=F.querySelector(".hint-empty"),u=F.querySelector("[data-vt-logo-actions]");$.logo?(t.src=$.logo,t.hidden=!1,s.style.display="none",u.hidden=!1):(t.hidden=!0,s.style.display="",u.hidden=!0)}function o(){let t=F.querySelector("[data-vt-font]");t.value=$.font;let s=F.querySelector("[data-vt-font-specimen]");s.style.fontFamily=$.font}function n(){let t=$.mode==="dark"?"#F8FAFC":"#0F172A",s=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:A(t,$.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:A($.primary,$.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:A($.hero,$.bg)}];F.querySelector("[data-vt-contrast]").innerHTML=s.map(u=>{let v=j(u.ratio);return`<span class="vt-contrast-chip ${v.cls}">${u.lbl} \xB7 ${v.label} ${u.ratio.toFixed(1)}</span>`}).join("")}function d(){let t=F.querySelector("[data-vt-stage]"),s=$.mode==="dark"?"#F8FAFC":"#0F172A";t.style.setProperty("--vt-bg",$.bg),t.style.setProperty("--vt-primary",$.primary),t.style.setProperty("--vt-hero",$.hero),t.style.setProperty("--vt-fg",s),t.style.fontFamily=$.font;let u=F.querySelector("[data-vt-preview-logo]");if($.logo){let v=document.createElement("img");v.src=$.logo,v.style.maxHeight="40px",u.replaceChildren(v)}else u.textContent="Danmu Fire"}let i="auto",c="auto";function a(){F.querySelectorAll("[data-vt-theme-btn]").forEach(t=>{t.classList.toggle("is-active",t.dataset.vtThemeBtn===i)}),F.querySelectorAll("[data-vt-lang-btn]").forEach(t=>{t.classList.toggle("is-active",t.dataset.vtLangBtn===c)})}async function e(){try{let t=await fetch("/get_settings",{credentials:"same-origin"});if(!t.ok)return;let s=await t.json(),u=s&&s.ViewerThemeMode&&s.ViewerThemeMode[1],v=s&&s.ViewerLangMode&&s.ViewerLangMode[1];typeof u=="string"&&(i=u),typeof v=="string"&&(c=v),a()}catch{}}async function l(t,s){if(window.csrfFetch)try{let u=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:t,value:s,index:1})});if(!u.ok)throw new Error(u.status);window.showToast&&window.showToast(`${t} = ${s}`,!0)}catch(u){console.warn("[admin-viewer-theme] force-mode update failed:",u),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:t}),!1)}}function h(){B(),P(),m(),r(),o(),n(),d(),a()}F.addEventListener("input",t=>{if(t.target.matches("[data-vt-color]")){let s=t.target.dataset.vtColor;L.test(t.target.value)&&($[s]=t.target.value,S="custom",N(),h())}else if(t.target.matches("[data-vt-hex]")){let s=t.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(t.target.value)&&($[s]=t.target.value,S="custom",N(),h())}else t.target.matches("[data-vt-font]")&&($.font=t.target.value,N(),h())}),F.addEventListener("change",t=>{if(t.target.matches("[data-vt-logo-input]")){let s=t.target.files&&t.target.files[0];if(!s)return;if(s.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let u=new FileReader;u.onload=()=>{$.logo=String(u.result||""),N(),h()},u.readAsDataURL(s)}}),F.addEventListener("click",t=>{let s=t.target.closest("[data-vt-mode-btn]");if(s){$.mode=s.dataset.vtModeBtn,S="custom",N(),h();return}let u=t.target.closest("[data-vt-theme-btn]");if(u){i=u.dataset.vtThemeBtn,a(),l("ViewerThemeMode",i);return}let v=t.target.closest("[data-vt-lang-btn]");if(v){c=v.dataset.vtLangBtn,a(),l("ViewerLangMode",c);return}if(t.target.closest("[data-vt-logo-remove]")){$.logo=null,N(),h();return}let T=t.target.closest("[data-vt-device-btn]");if(T){F.querySelectorAll("[data-vt-device-btn]").forEach(D=>D.classList.toggle("is-active",D===T)),F.querySelector("[data-vt-frame]").dataset.device=T.dataset.vtDeviceBtn;return}let x=t.target.closest("[data-vt-action]");x&&x.dataset.vtAction==="reset"&&($={...g[0],logo:null},S="default",N(),h())}),h(),e()}document.addEventListener("click",function(F){let $=F.target.closest("[data-vt-jump]");if(!$)return;let S=$.dataset.vtJump;if(S){F.preventDefault();try{location.hash="#/"+S}catch{}}});function M(){let F=document.getElementById("settings-grid");if(!F||document.getElementById(y))return;F.insertAdjacentHTML("beforeend",f());let $=document.getElementById(y);$&&p($)}document.addEventListener("admin-panel-rendered",M),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var ht=he(()=>{(function(){"use strict";let y="sec-system-overview";function w(){return`
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
          ${[{id:"uptime",label:ServerI18n.t("sohMetricUptime")},{id:"conn",label:ServerI18n.t("sohMetricConnected")},{id:"ram",label:ServerI18n.t("sohMetricMemory")},{id:"ver",label:ServerI18n.t("sohMetricVersion")}].map(I=>`
            <div class="admin-soh-kpi" data-m="${I.id}">
              <div class="admin-soh-kpi__label">${I.label}</div>
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
          ${[{hash:"#/backup",label:ServerI18n.t("adminNavBackup"),sub:ServerI18n.t("sohLinkBackupSub"),attr:""},{hash:"#/security",label:ServerI18n.t("adminNavSecurity"),sub:ServerI18n.t("sohLinkSecuritySub"),attr:'data-soh-sub="security"'},{hash:"#/integrations",label:ServerI18n.t("adminNavIntegrations"),sub:"\u2014",attr:'data-soh-sub="integrations"'},{hash:"#/about",label:ServerI18n.t("sohLinkAbout"),sub:ServerI18n.t("sohLinkAboutSub"),attr:""}].map(I=>`
            <a class="admin-ui-group-row admin-soh-link" href="${I.hash}">
              <span class="lbl">${I.label}</span>
              <span class="val admin-soh-link__sub" ${I.attr}>${I.sub}</span>
              <span class="admin-soh-link__chev" aria-hidden="true">\u203A</span>
            </a>`).join("")}
        </div>
      </div>`}function g(I){let p=Math.floor(I/86400),M=Math.floor(I%86400/3600),F=Math.floor(I%3600/60);return p>0?`${p}d ${String(M).padStart(2,"0")}h ${String(F).padStart(2,"0")}m`:M>0?`${M}h ${String(F).padStart(2,"0")}m`:`${F}m ${String(I%60).padStart(2,"0")}s`}function f(I,p,M){let F=document.querySelector(`[data-m="${I}"]`);if(!F)return;let $=F.querySelector("[data-m-v]");$&&($.textContent=p);let S=F.querySelector("[data-m-sub]");S&&(S.textContent=M||"")}function L(I){let p=document.querySelector("[data-soh-banner-dot]"),M=document.querySelector("[data-soh-banner-title]"),F=document.querySelector("[data-soh-chip]"),S=!(I.queue_size!=null&&I.queue_capacity!=null&&I.queue_size>=I.queue_capacity);F&&F.classList.toggle("is-warn",!S),p&&p.classList.toggle("is-warn",!S),M&&(M.textContent=S?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function H(){(async()=>{try{let M=await window.csrfFetch("/admin/metrics");if(!M.ok)return;let F=await M.json(),$=P=>Array.isArray(P)&&P.length?P[P.length-1]:null,S=F.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-F.server_started_at)):0;f("uptime",S>0?g(S):"\u2014","");let N=null;try{let P=await fetch("/admin/audience/stats",{credentials:"same-origin"});P.ok&&(N=(await P.json()).total_live)}catch{}let b=F.ws_clients??0;f("conn",String(b+(N||0)),N==null?ServerI18n.t("sohConnOverlaysOnly",{n:b}):ServerI18n.t("sohConnBreakdown",{overlays:b,viewers:N}));let k=$(F.mem_series||[]),A=F.mem_total_mb?(F.mem_total_mb/1024).toFixed(0):null;f("ram",k!=null?`${Number(k).toFixed(0)}%`:"\u2014",A?ServerI18n.t("sohMemorySub",{total:A}):"");let j=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";f("ver",`v${j}`,ServerI18n.t("sohVersionSub")),L(F);let B=document.querySelector('[data-soh-sub="integrations"]');B&&(B.textContent=ServerI18n.t("sohLinkExtSub",{webhooks:F.webhooks_count??0,plugins:F.plugins_loaded??0}));try{let P=await window.csrfFetch("/admin/ws-auth");if(P.ok){let m=await P.json(),r=document.querySelector('[data-soh-sub="security"]');r&&(r.textContent=m.require_token?ServerI18n.t("sohLinkSecurityOn"):ServerI18n.t("sohLinkSecurityOff"))}}catch{}}catch{}})();let I=document.getElementById(y);if(!I)return;let p=()=>{let M=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";I.querySelectorAll("[data-soh-mode]").forEach(F=>{let $=F.dataset.sohMode===M;F.classList.toggle("is-active",$),F.setAttribute("aria-pressed",$?"true":"false")})};p(),document.addEventListener("admin:theme-mode",p),I.addEventListener("click",function(M){let F=M.target.closest("[data-soh-mode]");if(F){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(F.dataset.sohMode),p();return}let $=M.target.closest("[data-soh-action]");if(!(!$||$.disabled)){if($.dataset.sohAction==="copy-url"){let S=document.getElementById("sysoPublicUrl")?.textContent||"";navigator.clipboard?.writeText(S).then(()=>window.showToast&&window.showToast(ServerI18n.t("sohCopied"),!0),()=>window.showToast&&window.showToast(ServerI18n.t("sohCopyFailed"),!1));return}if($.dataset.sohAction==="show-qr"){let S=I.querySelector("[data-soh-qr]");if(!S)return;if(!S.hidden){S.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(N=>N.ok?N.json():Promise.reject(N)).then(N=>{S.innerHTML=N.svg,S.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function C(){let I=document.getElementById("settings-grid");!I||document.getElementById(y)||(I.insertAdjacentHTML("beforeend",w()),document.getElementById(y)&&H())}document.addEventListener("admin-panel-rendered",C),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&C()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),C()})})()});var gt=he(()=>{(function(){"use strict";let y="sec-polls",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(H){return String(H).replace(/[&<>"']/g,function(C){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[C]})};function g(){return`
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
  `}function f(){let H=document.getElementById("sec-polls");if(!H)return;let C=H.querySelector("[data-poll-queue]"),I=H.querySelector("[data-poll-editor]"),p=H.querySelector("[data-poll-view-builder]"),M=H.querySelector("[data-poll-view-live]"),F=H.querySelector("[data-poll-view-results]"),$="danmu.adminPollQueue.v2";function S(){return"q_"+Math.random().toString(36).slice(2,8)}function N(){return"o_"+Math.random().toString(36).slice(2,6)}function b(W){return{id:N(),label:""}}function k(){return{id:S(),text:"",timer:90,image_url:"",server_q_id:"",options:[b("A"),b("B")]}}let A=null,j="builder",B=null,P=0,m={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},r=null,o=[];try{let W=localStorage.getItem($);if(W){let X=JSON.parse(W);Array.isArray(X)?o=X:X&&Array.isArray(X.queue)&&(o=X.queue)}}catch{}(!Array.isArray(o)||o.length===0)&&(o=[k()]),o.forEach(W=>{typeof W.image_url!="string"&&(W.image_url=""),typeof W.server_q_id!="string"&&(W.server_q_id="")});let n=o[0].id,d="manual",i=null,c=null,a={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function e(){try{localStorage.setItem($,JSON.stringify({queue:o,activeId:n,mode:d}))}catch{}}function l(W){return o.find(X=>X.id===W)}function h(W,X){let ee=l(W);ee&&Object.assign(ee,X)}function t(W,X,ee){let se=W.slice(),[Z]=se.splice(X,1);return se.splice(ee,0,Z),se}function s(){C.innerHTML="",o.forEach((W,X)=>{let ee=document.createElement("div");ee.className="admin-poll-qrow",W.id===n&&ee.classList.add("is-active");let se=a.active&&a.currentIndex===X;se&&ee.classList.add("is-running"),ee.dataset.qid=W.id,ee.draggable=!0;let Z=!!W.image_url;ee.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${X+1}</span>
            <div class="info">
              <div class="text">${w(W.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:W.options.length})} \xB7 ${W.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):W.timer+"s"} \xB7 ${Z?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${se?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":W.id===n?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,C.appendChild(ee)})}function u(){let W=l(n)||o[0];if(!W){I.innerHTML="";return}let X=o.indexOf(W);I.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${X+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:X+1})}</span>
            </div>
            <span class="progress">Q${X+1} / ${o.length}</span>
          </div>

          <div class="admin-poll-field-label">${ServerI18n.t("pollQuestion")}</div>
          <input type="text" class="admin-poll-q-text" data-ed-text value="${w(W.text||"")}" placeholder="${ServerI18n.t("pollBuilderQuestionPlaceholder")}" maxlength="200" />

          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderFieldQuestionImage")}</div>
          <div class="admin-poll-q-image">
            ${W.image_url?`
              <img class="admin-poll-q-image-thumb" src="${w(W.image_url)}" alt="" />
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
            ${W.options.map((ee,se)=>`
              <div class="admin-poll-opt" data-oid="${ee.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+se)}</span>
                <!-- 2026-10-29\uFF1A\u9078\u9805\u5716\u7247\u9215\u79FB\u9664\u3002\u5B83\u53EA\u628A opt.img \u8A2D\u6210\u5B57\u4E32
                     "placeholder"\uFF0C\u6C92\u6709\u4E0A\u50B3\u3001\u6C92\u6709\u9001\u51FA\u3001\u5F8C\u7AEF schema \u4E5F\u53EA\u6536
                     options \u5B57\u4E32\u9663\u5217\u2014\u2014\u662F\u4E00\u9846\u770B\u8D77\u4F86\u80FD\u7528\u7684\u5047\u6309\u9215\u3002 -->
                <input type="text" data-ed-opt-text="${ee.id}" value="${w(ee.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+se)})}" maxlength="100" />
                ${W.options.length>2?`<button type="button" class="opt-remove" data-ed-opt-remove="${ee.id}" title="${ServerI18n.t("pollBuilderDeleteTitle")}">${window.AdminUtils.closeIcon}</button>`:""}
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
        `}function v(){A&&A.active?j="live":B?j="results":j="builder",H.dataset.pollView=j,p.hidden=j!=="builder",M.hidden=j!=="live",F.hidden=j!=="results",s(),u(),V(),j==="live"?q():j==="results"&&_(),j==="live"?E():T()}function E(){r||(r=setInterval(()=>{j!=="live"||!A||!A.active||G()},1e3))}function T(){r&&(clearInterval(r),r=null)}function x(W,X){if(!W||!W.time_limit_seconds)return null;if(!X)return W.time_limit_seconds;let ee=Date.now()/1e3-X;return Math.max(0,Math.round(W.time_limit_seconds-ee))}function D(W){if(W==null)return"\u221E";let X=String(Math.floor(W/60)).padStart(2,"0"),ee=String(W%60).padStart(2,"0");return`${X}:${ee}`}function q(){if(!A||!A.questions||A.questions.length===0){M.innerHTML="";return}let W=A.current_index>=0?A.current_index:0,X=A.questions.length,ee=A.questions[W],se=x(ee,A.started_at),Z=ee.time_limit_seconds||0,le=Z>0&&se!=null?Math.max(0,Math.min(1,se/Z)):1,ce=Z>0&&se!=null&&se<=Math.max(5,Z*.15),we=ee.options.reduce((ve,O)=>ve+(O.count||0),0),Ie=[...ee.options].sort((ve,O)=>(O.count||0)-(ve.count||0)),ke=Ie[0]?Ie[0].count:0,te=A.questions[W+1],oe=110,de=oe/2-6,ne=2*Math.PI*de,me=ne*le;M.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${w((A.poll_id||"").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  ${ServerI18n.t("pollBuilderLiveQuestionProgress",{idx:`<strong>${W+1}</strong>`,total:X})}
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${oe} ${oe}" width="56" height="56">
                      <circle cx="${oe/2}" cy="${oe/2}" r="${de}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${oe/2}" cy="${oe/2}" r="${de}" fill="none"
                        stroke="${ce?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${me} ${ne}" stroke-linecap="round"
                        transform="rotate(-90 ${oe/2} ${oe/2})"
                        style="filter: drop-shadow(0 0 4px ${ce?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${ce?"is-low":""}" data-live-mmss>${se==null?ServerI18n.t("pollBuilderNoTimeLimit"):D(se)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:W+1})}</div>
                <div class="text">${w(ee.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${Ie.map(ve=>{let O=we>0?ve.count/we*100:0,J=(ve.count||0)>0&&ve.count===ke;return`
                    <div class="admin-polls-live-bar ${J?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${w(ve.key)}</span>
                        <span class="lbl">${w(ve.text||"")}</span>
                        ${J?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${O.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:ve.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${O.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${we}</strong>`})}</span>
                ${te?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${w(te.text||"")}</em>`})}</span>`:""}
                <div class="actions">
                  <button type="button" class="admin-polls-live-btn" data-live-action="advance" ${W>=X-1?"disabled":""}>${ServerI18n.t("pollBuilderLiveAdvanceBtn")}</button>
                  <button type="button" class="admin-polls-live-btn is-danger" data-live-action="end">${ServerI18n.t("pollBuilderLiveEndBtn")}</button>
                </div>
              </div>
            </div>

            <!-- RIGHT \xB7 queue mini + broadcast -->
            <aside class="admin-polls-live-rail">
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderQuestionProgressTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiProgress")} \xB7 ${W+1}/${X}</span>
                </div>
                <div class="admin-polls-live-queue">
                  ${A.questions.map((ve,O)=>{let J=O<W?"done":O===W?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${J}">
                        <span class="idx">${J==="done"?"\u2713":O+1}</span>
                        <span class="t">${w(ve.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
                        ${J==="active"?'<span class="dot"></span>':""}
                      </div>
                    `}).join("")}
                </div>
              </div>
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderPushTitle")}</span>
                </div>
                <div class="admin-polls-live-toggles">
                  ${[{k:"showResults",label:ServerI18n.t("pollBuilderToggleShowResults")},{k:"showTotals",label:ServerI18n.t("pollBuilderToggleShowTotals")},{k:"autoAdvance",label:ServerI18n.t("pollBuilderAutoAdvanceDesc")},{k:"anonymous",label:ServerI18n.t("pollBuilderToggleAnonymous")}].map(ve=>`
                    <label class="admin-polls-live-toggle ${m[ve.k]?"is-on":""}" data-live-toggle="${ve.k}">
                      <span class="lbl">${ve.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function G(){if(!A||!A.active)return;let W=A.current_index>=0?A.current_index:0,X=A.questions[W];if(!X)return;let ee=x(X,A.started_at),se=X.time_limit_seconds||0,Z=M.querySelector("[data-live-mmss]"),le=M.querySelector("[data-live-ring]");if(Z&&(Z.textContent=ee==null?ServerI18n.t("pollBuilderNoTimeLimit"):D(ee),Z.classList.toggle("is-low",se>0&&ee!=null&&ee<=Math.max(5,se*.15))),le&&se>0&&ee!=null){let ce=+le.getAttribute("r"),we=2*Math.PI*ce,Ie=Math.max(0,Math.min(1,ee/se));le.setAttribute("stroke-dasharray",`${we*Ie} ${we}`);let ke=ee<=Math.max(5,se*.15);le.setAttribute("stroke",ke?"var(--hud-crimson)":"var(--color-primary)"),le.style.filter=`drop-shadow(0 0 4px ${ke?"var(--hud-crimson)":"var(--color-primary)"})`}m.autoAdvance&&se>0&&ee===0&&(W>=A.questions.length-1?ae():z())}function _(){let W=B;if(!W||!W.questions||W.questions.length===0){F.innerHTML="";return}let X=W.questions.length,ee=Math.max(0,Math.min(P,X-1)),se=W.questions[ee],Z=se.options.reduce((ne,me)=>ne+(me.count||0),0),le=[...se.options].sort((ne,me)=>(me.count||0)-(ne.count||0)),ce=le[0]||{key:"-",text:"\u2014",count:0},we=le[1],Ie=Z>0?ce.count/Z*100:0,ke=we?Math.max(0,ce.count-we.count):ce.count,te=W.started_at||0,oe=W.ended_at||Date.now()/1e3,de=Math.max(0,Math.round(oe-te));F.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${X>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${W.questions.map((ne,me)=>`
                    <button type="button" role="tab" class="${me===ee?"is-active":""}" data-results-tab="${me}">
                      Q${me+1}<span class="t">${w((ne.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${ee+1}/${X} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:D(de),n:Z})}</span>
                </div>
                <div class="text">${w(se.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${w(ce.key)}</div>
                <div class="info">
                  <div class="lbl">${w(ce.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:ce.count})} \xB7 ${Ie.toFixed(1)}% ${we?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:ke}):""}</div>
                </div>
                <div class="pct">${Ie.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:Z})}</span>
                </div>
                ${le.map((ne,me)=>{let ve=Z>0?ne.count/Z*100:0;return`
                    <div class="admin-polls-results-bar ${me===0&&ne.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${me+1}</span>
                        <span class="tag">${w(ne.key)}</span>
                        <span class="lbl">${w(ne.text||"")}</span>
                        <span class="pct">${ve.toFixed(1)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:ne.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${ve.toFixed(1)}%"></div></div>
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
                  <span class="big">${Z}</span>
                  <span class="unit">${ServerI18n.t("pollBuilderVotesThisQuestion")}</span>
                </div>
                <div class="admin-polls-results-meter">
                  <div class="fill" style="width:${Math.min(100,Z?100:0)}%"></div>
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
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${W.started_at?new Date(W.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${W.ended_at?new Date(W.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${D(de)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let ne=Math.max(1,...le.map(me=>me.count));return le.map(me=>`<div class="bar" style="height:${Math.max(6,me.count/ne*100)}%"></div>`).join("")})()}
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
        `}function R(W){let X=[["question_index","question","option_key","option_text","count","percentage"]];return W.questions.forEach((ee,se)=>{let Z=ee.options.reduce((le,ce)=>le+(ce.count||0),0);ee.options.forEach(le=>{let ce=Z>0?(le.count/Z*100).toFixed(1):"0";X.push([se+1,ee.text,le.key,le.text,le.count,ce])})}),X.map(ee=>ee.map(se=>{let Z=String(se??"");return/[",\n]/.test(Z)?`"${Z.replace(/"/g,'""')}"`:Z}).join(",")).join(`
`)}function U(W,X,ee){let se=new Blob([ee],{type:X}),Z=document.createElement("a");Z.href=URL.createObjectURL(se),Z.download=W,document.body.appendChild(Z),Z.click(),setTimeout(()=>{URL.revokeObjectURL(Z.href),Z.remove()},0)}H.addEventListener("click",W=>{let X=W.target.closest("[data-live-action]");if(X){let le=X.dataset.liveAction;le==="advance"?z():le==="end"?ae():le==="pause"&&(m.autoAdvance=!1,q());return}let ee=W.target.closest("[data-live-toggle]");if(ee){let le=ee.dataset.liveToggle;le in m&&(m[le]=!m[le],ee.classList.toggle("is-on",m[le]));return}let se=W.target.closest("[data-results-tab]");if(se){P=+se.dataset.resultsTab||0,_();return}let Z=W.target.closest("[data-results-action]");if(Z){let le=Z.dataset.resultsAction,ce=B;if(!ce)return;if(le==="copy"){let we=ce.questions.map((Ie,ke)=>{let te=Ie.options.reduce((de,ne)=>de+(ne.count||0),0),oe=Ie.options.map(de=>{let ne=te>0?(de.count/te*100).toFixed(1):"0.0";return`  ${de.key}. ${de.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:de.count})} (${ne}%)`});return`Q${ke+1}: ${Ie.text}
${oe.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(we)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else le==="csv"?U(`poll_${(ce.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",R(ce)):le==="json"?U(`poll_${(ce.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(ce,null,2)):le==="reset"&&(B=null,P=0,v());return}}),C.addEventListener("dragstart",W=>{let X=W.target.closest(".admin-poll-qrow");X&&(i=X.dataset.qid,X.classList.add("is-dragging"))}),C.addEventListener("dragend",W=>{let X=W.target.closest(".admin-poll-qrow");X&&X.classList.remove("is-dragging"),i=null,C.querySelectorAll(".is-drag-over").forEach(ee=>ee.classList.remove("is-drag-over"))}),C.addEventListener("dragover",W=>{W.preventDefault();let X=W.target.closest(".admin-poll-qrow");!X||!i||X.dataset.qid===i||(C.querySelectorAll(".is-drag-over").forEach(ee=>ee.classList.remove("is-drag-over")),X.classList.add("is-drag-over"))}),C.addEventListener("drop",W=>{W.preventDefault();let X=W.target.closest(".admin-poll-qrow");if(!X||!i)return;let ee=o.findIndex(Z=>Z.id===i),se=o.findIndex(Z=>Z.id===X.dataset.qid);ee<0||se<0||ee===se||(o=t(o,ee,se),e(),v())}),C.addEventListener("click",W=>{let X=W.target.closest(".admin-poll-qrow");X&&(n=X.dataset.qid,e(),v())}),I.addEventListener("input",W=>{let X=l(n);if(X){if(W.target.matches("[data-ed-text]")){X.text=W.target.value,e(),s();return}if(W.target.matches("[data-ed-opt-text]")){let ee=W.target.dataset.edOptText,se=X.options.find(Z=>Z.id===ee);se&&(se.label=W.target.value,e(),s())}}}),I.addEventListener("change",W=>{let X=l(n);X&&W.target.matches("[data-ed-timer]")&&(X.timer=+W.target.value,e(),s())}),I.addEventListener("click",async W=>{let X=l(n);if(!X)return;let ee=W.target.closest("[data-ed-opt-remove]");if(ee){let Z=ee.dataset.edOptRemove;X.options.length>2&&(X.options=X.options.filter(le=>le.id!==Z),e(),u(),s());return}if(W.target.closest("[data-ed-opt-add]")){X.options.length<6&&(X.options.push(b()),e(),u(),s());return}let se=W.target.closest("[data-ed-action]");if(se)if(se.dataset.edAction==="remove-q"){if(o.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let le=o.findIndex(ce=>ce.id===n);o=o.filter(ce=>ce.id!==n),n=o[Math.min(le,o.length-1)].id,e(),v()}}else if(se.dataset.edAction==="upload-q-image"){let Z=I.querySelector("[data-ed-q-image-input]");Z&&Z.click()}else se.dataset.edAction==="remove-q-image"&&(X.image_url="",e(),u(),s())}),I.addEventListener("change",async W=>{if(!W.target.matches("[data-ed-q-image-input]"))return;let X=W.target.files&&W.target.files[0];if(!X)return;let ee=l(n);if(!ee)return;if(!a.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),W.target.value="";return}if(!ee.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),W.target.value="";return}if(X.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),W.target.value="";return}let se=new FormData;se.append("file",X);try{let Z=await csrfFetch(`/admin/poll/${encodeURIComponent(a.pollId)}/upload-image/${encodeURIComponent(ee.server_q_id)}`,{method:"POST",body:se}),le=await Z.json().catch(()=>({}));if(!Z.ok)throw new Error(le.error||"upload failed");ee.image_url=le.image_url,e(),u(),s(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(Z){showToast&&showToast(String(Z.message||Z),!1)}finally{W.target.value=""}}),I.addEventListener("dragstart",W=>{let X=W.target.closest(".admin-poll-opt");X&&(c=X.dataset.oid,X.classList.add("is-dragging"))}),I.addEventListener("dragend",W=>{I.querySelectorAll(".is-dragging, .is-drag-over").forEach(X=>X.classList.remove("is-dragging","is-drag-over")),c=null}),I.addEventListener("dragover",W=>{let X=W.target.closest(".admin-poll-opt");!X||!c||X.dataset.oid===c||(W.preventDefault(),I.querySelectorAll(".is-drag-over").forEach(ee=>ee.classList.remove("is-drag-over")),X.classList.add("is-drag-over"))}),I.addEventListener("drop",W=>{W.preventDefault();let X=W.target.closest(".admin-poll-opt"),ee=l(n);if(!X||!c||!ee)return;let se=ee.options.findIndex(le=>le.id===c),Z=ee.options.findIndex(le=>le.id===X.dataset.oid);se<0||Z<0||se===Z||(ee.options=t(ee.options,se,Z),e(),u())}),H.addEventListener("click",W=>{if(W.target.closest("[data-poll-action='add']")){let le=k();o.push(le),n=le.id,e(),v();return}let ee=W.target.closest("[data-poll-template]");if(ee){let le=k(),ce=ee.dataset.pollTemplate,we=["A","B","C","D","E"],Ie=ke=>ke.map((te,oe)=>{let de=b(we[oe]);return de.text=te,de});ce==="yesno"?(le.text="",le.options=Ie([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):ce==="stars"?(le.timer=60,le.options=Ie(["1","2","3","4","5"])):ce==="four"&&(le.options=Ie(["","","",""])),o.push(le),n=le.id,e(),v();return}let se=W.target.closest("[data-poll-mode]");se&&(d=se.dataset.pollMode,H.querySelectorAll("[data-poll-mode]").forEach(le=>le.classList.toggle("is-active",le===se)),e());let Z=W.target.closest("[data-poll-session-action]");if(Z){let le=Z.dataset.pollSessionAction;le==="start"?K():le==="advance"?z():le==="end"&&ae()}});function V(){let W=H.querySelector("[data-poll-session]");if(!W)return;let X=W.querySelector("[data-poll-session-status]"),ee=W.querySelector("[data-poll-session-action='start']"),se=W.querySelector("[data-poll-session-action='advance']"),Z=W.querySelector("[data-poll-session-action='end']");if(!a.pollId||!a.active){X.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,ee.hidden=!1,se.hidden=!0,Z.hidden=!0;return}let le=o.length,ce=a.currentIndex+1,we=a.currentIndex>=le-1;X.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${ce} / ${le}</span>`,ee.hidden=!0,se.hidden=we,Z.hidden=!1}async function K(){try{let W=o.map((ce,we)=>{let Ie=(ce.text||"").trim(),ke=ce.options.map(te=>(te.label||"").trim()).filter(Boolean);if(!Ie)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:we+1}));if(ke.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:we+1}));return{text:Ie,options:ke,time_limit_seconds:ce.timer&&ce.timer>0?ce.timer:null}});if(!W.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let X=(()=>{let ce=o.map(we=>Number(we.timer)||0).filter(we=>we>0);return ce.length?Math.round(ce.reduce((we,Ie)=>we+Ie,0)/ce.length):null})(),ee=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:W,mode:d||"manual",default_duration_s:X})}),se=await ee.json().catch(()=>({}));if(!ee.ok)throw new Error(se.error||ServerI18n.t("pollBuilderErrCreateFailed"));a.pollId=se.poll_id,(se.questions||[]).forEach((ce,we)=>{o[we]&&(o[we].server_q_id=ce.id)}),e();let Z=await csrfFetch("/admin/poll/start",{method:"POST"}),le=await Z.json().catch(()=>({}));if(!Z.ok)throw new Error(le.error||ServerI18n.t("pollBuilderErrStartFailed"));a.active=!0,a.currentIndex=le.current_index??0,A=le,B=null,v(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),ie()}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function z(){try{let W=await csrfFetch("/admin/poll/advance",{method:"POST"}),X=await W.json().catch(()=>({}));if(!W.ok)throw new Error(X.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));a.currentIndex=X.current_index,a.active=!!X.active,A=X,v(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:a.currentIndex+1}),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function ae(){try{let W=A,X=await csrfFetch("/admin/poll/end",{method:"POST"});if(!X.ok){let ee=await X.json().catch(()=>({}));throw new Error(ee.error||ServerI18n.t("pollBuilderErrEndFailed"))}W&&W.questions&&(B={...W,ended_at:Date.now()/1e3},P=W.current_index>=0?W.current_index:0),a.active=!1,a.pollId="",a.currentIndex=-1,A=null,a.statusTimer&&(clearInterval(a.statusTimer),a.statusTimer=null),v(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}function ie(){a.statusTimer&&clearInterval(a.statusTimer),a.statusTimer=setInterval(async()=>{if(a.pollId)try{let W=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!W.ok)return;let X=await W.json();if(X.poll_id!==a.pollId)return;a.active=!!X.active,a.currentIndex=X.current_index??-1;let ee=!!(A&&A.active);A=X,X.active||(clearInterval(a.statusTimer),a.statusTimer=null,ee&&X.questions&&!B&&(B={...X,ended_at:Date.now()/1e3},P=X.current_index>=0?X.current_index:0),A=null),j==="live"?q():v()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{a.statusTimer&&(clearInterval(a.statusTimer),a.statusTimer=null),T()}),v()}function L(){let H=document.getElementById("settings-grid");!H||document.getElementById(y)||(H.insertAdjacentHTML("beforeend",g()),document.getElementById(y)&&f())}document.addEventListener("admin-panel-rendered",L),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&L()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),L()})})()});var yt=he(()=>{(function(){"use strict";let f="sec-live-feed",L={slido:"Slido",discord:"Discord",obs:"OBS",bookmarklet:"Bookmarklet"},H=[],C=[],I=!1,p="",M="all",F=0,$=0,S=null,N=null,b=null;function k(te){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(te):String(te??"").replace(/[&<>"']/g,function(oe){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[oe]})}function A(te,oe){return te?te.length>oe?te.slice(0,oe)+"\u2026":te:""}function j(te){let oe=new Date(te),de=ne=>String(ne).padStart(2,"0");return`${de(oe.getHours())}:${de(oe.getMinutes())}:${de(oe.getSeconds())}`}function B(te){if(!p)return!0;let oe=p.toLowerCase(),de=te.data;return de.text&&de.text.toLowerCase().includes(oe)||de.nickname&&de.nickname.toLowerCase().includes(oe)||de.fingerprint&&de.fingerprint.toLowerCase().includes(oe)||de.layout&&de.layout.toLowerCase().includes(oe)}function P(te){return M==="muted"?!!te.muted:!0}function m(){M="all",document.querySelectorAll(".admin-live-feed-tab").forEach(te=>te.classList.toggle("is-active",te.dataset.tab==="all"))}function r(){p="",b&&(b.value=""),m()}function o(te,oe){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let ne;return te==="paused"?ne=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:oe||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):te==="no-result"?ne=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:oe||ServerI18n.t("lfNoMatchDesc")}):ne=window.AdminEmpty.render("messages"),ne.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),ne.setAttribute("data-empty-kind","live-feed"),ne}let de=document.createElement("div");return de.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",de.setAttribute("data-empty-kind","live-feed"),de.innerHTML=`<div class="admin-proto-placeholder-title">${k(te)}</div><div class="admin-proto-placeholder-body">${k(oe||"")}</div>`,de}function n(te){let oe=te.data,de=document.createElement("div");de.className="admin-live-feed-row"+(te.muted?" is-muted":""),de.dataset.id=te.id,de.tabIndex=-1;let ne=document.createElement("span");if(ne.className="admin-live-feed-time",ne.textContent=j(te.ts),de.appendChild(ne),(oe.layout||"scroll").toLowerCase()!=="scroll"){let Y=document.createElement("span");Y.className="admin-ui-chip admin-live-feed-tag",Y.textContent=oe.layout,de.appendChild(Y)}if(oe.source){let Y=document.createElement("span");Y.className="admin-ui-chip admin-live-feed-tag",Y.textContent=L[oe.source]||oe.source,de.appendChild(Y)}let ve=document.createElement("span");ve.className="admin-live-feed-text",ve.textContent=A(oe.text||"",80),ve.title=oe.text||"",de.appendChild(ve);let O=document.createElement("span");O.className="admin-live-feed-identity",window.AdminIdentity&&O.appendChild(AdminIdentity.render({nickname:oe.nickname||"",fp:"",onNicknameClick:function(Y){!Y||!b||(b.value=Y,b.dispatchEvent(new Event("input",{bubbles:!0})),b.focus())}})),de.appendChild(O);let J=document.createElement("span");if(J.className="admin-live-feed-actions is-hover-reveal",oe.message_id){let Y=document.createElement("button");Y.type="button",Y.className="admin-ui-chip admin-live-feed-action",Y.textContent=ServerI18n.t("lfRecallBtn"),Y.title=ServerI18n.t("lfRecallTitle"),Y.addEventListener("click",re=>{re.stopPropagation(),i(te)}),J.appendChild(Y)}let Q=document.createElement("button");if(Q.type="button",Q.className="admin-ui-chip is-danger admin-live-feed-action",Q.textContent=ServerI18n.t("blockKeywordBtn"),Q.title=ServerI18n.t("blockKeywordTitle"),Q.addEventListener("click",Y=>{Y.stopPropagation(),c("keyword",oe.text,te.id)}),J.appendChild(Q),oe.fingerprint){let Y=document.createElement("button");Y.type="button",Y.className="admin-ui-chip is-warn admin-live-feed-action",Y.textContent=ServerI18n.t("blockFpBtn"),Y.title=ServerI18n.t("blockFpTitle").replace("{fp}",oe.fingerprint),Y.addEventListener("click",re=>{re.stopPropagation(),c("fingerprint",oe.fingerprint,te.id)}),J.appendChild(Y)}return de.appendChild(J),de.classList.add("is-clickable"),de.addEventListener("click",Y=>{Y.target.closest(".admin-live-feed-actions")||d(te)}),de.addEventListener("keydown",Y=>{Y.key!=="Enter"||Y.target.closest("button")||(Y.preventDefault(),d(te))}),de}function d(te){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(te)}async function i(te){let oe=te&&te.data&&te.data.message_id;if(!oe)return;let de=await window.AdminModeration.recall(oe);if(!de.ok){console.error("[LiveFeed] Recall failed:",de.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}te.recalled=!0;let ne=a(te.id);ne&&ne.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function c(te,oe,de){if(!(!oe||!await(te==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,oe))){if(de){let ve=H.find(O=>O.id===de);ve&&(ve.muted=!0)}else H.forEach(ve=>{te==="keyword"&&ve.data.text===oe&&(ve.muted=!0),te==="fingerprint"&&ve.data.fingerprint===oe&&(ve.muted=!0)});h()}}function a(te){if(!S||!te)return null;let oe=S.children;for(let de=0;de<oe.length;de++)if(oe[de].dataset&&oe[de].dataset.id===te)return oe[de];return null}function e(){let te=document.activeElement,oe=te&&te.closest?te.closest(".admin-live-feed-row"):null;return oe?oe.dataset.id:null}function l(te){if(!te)return;let oe=a(te);oe&&document.activeElement!==oe&&oe.focus({preventScroll:!0})}function h(){if(!S)return;let te=e(),oe=document.createDocumentFragment(),de=H.filter(ne=>B(ne)&&P(ne));for(let ne=de.length-1;ne>=0;ne--)oe.appendChild(n(de[ne]));if(S.textContent="",oe.childNodes.length===0){let ne=I?o("paused"):H.length===0?o("empty"):o("no-result");S.appendChild(ne)}else S.appendChild(oe);u(),l(te)}function t(te){if(!S||!B(te)||!P(te))return null;let oe=S.querySelector("[data-empty-kind='live-feed']");oe&&oe.remove();let de=S.scrollTop<=8,ne=n(te);if(de)S.insertBefore(ne,S.firstChild);else{let me=S.scrollHeight;S.insertBefore(ne,S.firstChild),S.scrollTop+=S.scrollHeight-me,$+=1}return ne}function s(){let te=H.length-200;if(te<=0)return;H.splice(0,te).forEach(de=>{let ne=a(de.id);ne&&ne.remove()})}function u(){x(),D(),E()}function v(te){let oe={ts:Date.now(),data:te,id:te&&te.message_id?"m"+te.message_id:"e"+ ++F};if(te&&te.status==="blocked"&&(oe.muted=!0),I){C.push(oe),D(),E();return}H.push(oe),t(oe),s(),u()}function E(){let te=document.querySelector("[data-lf-jump]"),oe=document.querySelector("[data-lf-jump-n]");if(!te||!oe)return;let de=C.length,ne=de>0?de:$;ne>0?(te.hidden=!1,oe.textContent=String(ne)):te.hidden=!0}function T(){I&&q(),$=0,S&&(S.scrollTop=0),E()}function x(){let te=document.querySelector("[data-lf-state]");te&&(te.className=I?"ui-status is-warning":"ui-status is-success",te.textContent=I?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function D(){let te=document.getElementById(f)||document,oe=(de,ne)=>{let me=te.querySelector(de);me&&(me.textContent=String(ne))};oe("[data-cnt-all]",H.length),oe("[data-cnt-mut]",H.filter(de=>de.muted).length)}function q(){if(I=!I,S&&S.setAttribute("aria-live",I?"off":"polite"),N&&(N.textContent=I?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),N.classList.toggle("is-primary",I),N.classList.toggle("is-ghost",!I)),I)D(),E();else{for(let te of C)H.push(te);C=[],H.length>200&&H.splice(0,H.length-200),$=0,h()}}function G(){let te=document.getElementById("settings-grid");if(!te)return!1;let oe=`
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
              placeholder="${k(ServerI18n.t("liveFeedSearchPlaceholder"))}"
              class="admin-lf-v4__search" />
            <button id="liveFeedPauseBtn" type="button" class="admin-lf-v4__pausebtn">${k(ServerI18n.t("pauseBtn"))}</button>
            <button id="liveFeedClearBtn" type="button" class="admin-lf-v4__pausebtn">${k(ServerI18n.t("clearBtn"))}</button>
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
      </div>`;return te.insertAdjacentHTML("beforeend",oe),!0}let _=!1,R=null,U=0,V=1500,K=!1;async function z(){if(!K){K=!0;try{let te=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(U),{credentials:"same-origin"});if(!te.ok)return;let oe=await te.json();if(Array.isArray(oe.entries)){for(let de of oe.entries)if(!(!de||!de.data)){if(typeof de.seq=="number"){if(de.seq<=U)continue;U=de.seq}v(de.data)}}typeof oe.next_since=="number"&&oe.next_since>U&&(U=oe.next_since)}catch{}finally{K=!1}}}let ae=5e3,ie=null,W=!1;async function X(){if(!(W||document.hidden)){W=!0;try{let te=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!te.ok)return;let oe=await te.json(),de=Array.isArray(oe.pending)?oe.pending.length:0,ne=document.getElementById(f);if(!ne)return;let me=ne.querySelector("[data-cnt-q]");me&&(me.textContent=String(de));let ve=ne.querySelector("[data-lf-pending-link]");ve&&ve.classList.toggle("has-pending",de>0)}catch{}finally{W=!1}}}function ee(){_||(_=!0,z(),R=setInterval(z,V),X(),ie=setInterval(X,ae),window.addEventListener("beforeunload",()=>{ie&&(clearInterval(ie),ie=null),R&&(clearInterval(R),R=null)}))}function se(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById(f)&&G()&&(Z(),h())}function Z(){S=document.getElementById("liveFeedList"),N=document.getElementById("liveFeedPauseBtn"),b=document.getElementById("liveFeedSearch");let te=document.getElementById("liveFeedClearBtn"),oe=document.querySelectorAll(".admin-live-feed-tab");N&&N.addEventListener("click",q),te&&te.addEventListener("click",()=>{H=[],C=[],$=0,h()});let de=document.querySelector("[data-lf-jump-btn]");if(de&&de.addEventListener("click",T),S&&S.addEventListener("scroll",()=>{S.scrollTop<=8&&$>0&&($=0,E())},{passive:!0}),oe.forEach(ne=>{ne.addEventListener("click",()=>{oe.forEach(me=>me.classList.remove("is-active")),ne.classList.add("is-active"),M=ne.dataset.tab||"all",h()})}),b){let ne=null;b.addEventListener("input",()=>{clearTimeout(ne),ne=setTimeout(()=>{p=b.value.trim(),h()},200)})}ee()}function le(te){if(!("ontouchstart"in window))return;let oe=0,de=0,ne=0,me=null,ve=null,O=!1;function J(Q){if(Q.querySelector(".admin-live-feed-row__swipe-actions"))return;let Y=Q.dataset.id,re=H.find(Se=>Se.id===Y),ue=!!(re&&re.data&&re.data.message_id),pe=document.createElement("div");pe.className="admin-live-feed-row__swipe-actions",pe.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${ue?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,pe.addEventListener("click",function(Se){let fe=Se.target.closest("[data-swipe-act]");if(!fe||fe.disabled)return;let ge=Q.dataset.id,ye=H.find(Ee=>Ee.id===ge);if(!ye||!ye.data)return;let Te=fe.dataset.swipeAct;Te==="ban"?ye.data.fingerprint&&c("fingerprint",ye.data.fingerprint,ge):Te==="recall"&&i(ye),Q.classList.remove("is-swiped")}),Q.appendChild(pe)}te.addEventListener("touchstart",function(Q){let Y=Q.target.closest(".admin-live-feed-row");Y&&(Q.target.closest(".admin-live-feed-row__swipe-actions")||(me=Y,O=!1,oe=Q.touches[0].clientX,de=Q.touches[0].clientY,ne=0))},{passive:!0}),te.addEventListener("touchmove",function(Q){if(!me||O)return;let Y=Q.touches[0],re=Y.clientX-oe,ue=Y.clientY-de;if(Math.abs(ue)>Math.abs(re)&&Math.abs(ue)>12){O=!0;return}if(ne=re,re<-10){J(me),ve=me,me.classList.add("is-swiping");let pe=Math.max(-180,re);me.style.transform=`translateX(${pe}px)`}else re>10&&me.classList.contains("is-swiped")&&(me.style.transform="")},{passive:!0}),te.addEventListener("touchend",function(){me&&(me.classList.remove("is-swiping"),me.style.transform="",ne<=-60?me.classList.add("is-swiped"):me.classList.remove("is-swiped"),me=null,ve=null,ne=0)},{passive:!0})}function ce(){return S?Array.from(S.querySelectorAll(".admin-live-feed-row")):[]}function we(){let te=ce(),oe=document.activeElement;for(let de of te)if(de===oe||de.contains(oe))return de;return null}function Ie(te){let oe=ce();if(!oe.length)return!1;let de=we(),ne=de?oe.indexOf(de)+te:te>0?0:oe.length-1;return ne=Math.max(0,Math.min(oe.length-1,ne)),oe[ne].focus(),oe[ne].scrollIntoView({block:"nearest"}),!0}function ke(te){let oe=we();if(!oe)return!1;let de=H.find(me=>me.id===oe.dataset.id);if(!de)return!1;let ne=te==="keyword"?de.data.text:de.data.fingerprint;return ne?(c(te,ne,de.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return H.slice()},isVisible:function(){return!!(S&&S.offsetParent!==null)},isPaused:function(){return I},moveFocus:Ie,blockFocused:ke,togglePause:function(){q()}},document.addEventListener("admin-panel-rendered",se),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",se):se()})()});var bt=he(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.loadDetailsState,w=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;function f(l,h=!1){var t=y();return t[l]!==void 0?t[l]:h}function L(l){var h=y();h[l.id]=l.open,w(h)}let H=!1;new MutationObserver(()=>{let l=document.getElementById("settings-grid");if(l&&!(document.getElementById("sec-plugins")||H)){H=!0;try{I(l)}finally{H=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function I(l){let h=`
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
      `;l.insertAdjacentHTML("beforeend",h);let t=document.querySelector("[data-console-filters]");t&&t.addEventListener("click",s=>{let u=s.target.closest("[data-console-filter]");u&&(t.querySelectorAll("[data-console-filter]").forEach(v=>v.classList.toggle("is-active",v===u)),F=u.dataset.consoleFilter,k())}),document.getElementById("pluginsReloadBtn").addEventListener("click",e),B(),j()}let p=0,M=0,F="all",$=[],S=80;function N(l){let h=(l||"INFO").toUpperCase();return h==="ERROR"?"is-error":h==="WARN"?"is-warn":h==="DEBUG"?"is-debug":"is-info"}function b(l){let h=new Date(l*1e3),t=s=>String(s).padStart(2,"0");return`${t(h.getHours())}:${t(h.getMinutes())}:${t(h.getSeconds())}`}function k(){let l=document.getElementById("pluginsConsoleBody");if(!l)return;let h=F==="all"?$:$.filter(t=>(t.level||"INFO").toUpperCase()===F);if(h.length===0){let t=F==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${F} lines yet \xB7 waiting\u2026`;l.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${t}</span>
          </div>`;return}l.innerHTML=h.map(t=>{let s=b(t.ts),u=(t.msg||"").replace(/[<>&"]/g,T=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[T]),v=(t.plugin||"\u2014").replace(/[<>&"]/g,T=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[T]),E=(t.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${s}</span>
          <span class="lv ${N(t.level)}">${E}</span>
          <span class="plg">${v}</span>
          <span class="msg">${u}</span>
        </div>`}).join("")}async function A(){try{let l=await fetch(`/admin/plugins/console?since=${p}`,{credentials:"same-origin"});if(!l.ok)return;let h=await l.json();if(!Array.isArray(h.events)||h.events.length===0)return;for($.unshift(...h.events);$.length>S;)$.pop();p=h.latest_seq||p,k()}catch{}}function j(){M||(M=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:A}))}async function B(){let l=document.getElementById("pluginsList");if(l)try{let h=await csrfFetch("/admin/plugins/list");if(!h.ok)throw new Error(`HTTP ${h.status}`);let s=(await h.json()).plugins||[];if(s.length===0){l.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",P([]);return}l.innerHTML=s.map(m).join(""),c(l),P(s)}catch(h){console.error("Failed to load plugins:",h),l.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function P(l){let h=l.length,t=l.filter(T=>T.enabled).length,s=h-t,u=l.map(T=>T.priority).filter(T=>typeof T=="number"),v=u.length?Math.round(u.reduce((T,x)=>T+x,0)/u.length):null,E=(T,x)=>{document.querySelectorAll(`[data-plugins-stat="${T}"]`).forEach(D=>{D.textContent=x})};E("loaded",h),E("running",t),E("paused",s),E("priority",v??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(T=>{T.textContent=h})}function m(l){let{name:h,version:t,description:s,priority:u,enabled:v,is_user:E,file:T}=l,x=`plugin-toggle-${h}`,D=n(u),q=i(u),G=o(l),_=E&&T?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${g(T)}"
            data-plugin-name="${g(h)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${g(h)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${g(h)}">
          <span class="admin-plugins-dot ${v?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${g(h)}</div>
            ${s?`<div class="desc">${g(s)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${t?"v"+g(t):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${D}">${u??"\u2014"}${q?" \xB7 "+q:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${d(G)}">${G}</span>
          <div class="admin-plugins-toggle-cell">
            ${_}
            <label class="admin-plugins-switch" for="${x}">
              <input type="checkbox" id="${x}" role="switch"
                aria-checked="${!!v}" aria-label="Toggle plugin ${g(h)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${g(h)}"
                ${v?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function r(l,h){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:l}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:h}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let s=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:h})}),u=await s.json().catch(()=>({}));if(!s.ok){showToast(u.error||ServerI18n.t("pluginsToastRemoveFailed",{status:s.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:l}),!0),await B()}catch(s){showToast(ServerI18n.t("pluginsToastNetError",{msg:s.message||""}),!1)}}function o(l){let h=l.file||l.path||l.source||"";if(typeof h=="string"){if(h.endsWith(".py"))return"PY";if(h.endsWith(".js"))return"JS"}return(l.language||"PY").toUpperCase()}function n(l){return l==null?"is-muted":l<=10?"is-danger":l<=50?"is-warn":"is-cyan"}function d(l){return l==="JS"?"is-cyan":l==="PY"?"is-warn":"is-muted"}function i(l){return l==null?"":l<=10?"CRITICAL":l<=50?"HIGH":"NORMAL"}function c(l){l.querySelectorAll(".plugin-toggle").forEach(h=>{h.addEventListener("change",async function(){let t=this.dataset.pluginName,s=this.checked;await a(t,s,this)})}),l.querySelectorAll(".plugin-uninstall").forEach(h=>{h.addEventListener("click",function(){r(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function a(l,h,t){let s=h?"/admin/plugins/enable":"/admin/plugins/disable";try{let u=await csrfFetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})});if(!u.ok){let v=await u.json().catch(()=>({}));throw new Error(v.error||`HTTP ${u.status}`)}showToast(h?ServerI18n.t("pluginEnabled").replace("{name}",l):ServerI18n.t("pluginDisabled").replace("{name}",l),!0)}catch(u){console.error(`Failed to ${h?"enable":"disable"} plugin:`,u),showToast(u.message||ServerI18n.t("operationFailed"),!1),t&&(t.checked=!h)}}async function e(){let l=document.getElementById("pluginsReloadBtn");l&&(l.disabled=!0);try{let h=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!h.ok){let t=await h.json().catch(()=>({}));throw new Error(t.error||`HTTP ${h.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await B()}catch(h){console.error("Failed to reload plugins:",h),showToast(h.message||ServerI18n.t("reloadFailed"),!1)}finally{l&&(l.disabled=!1)}}})})()});var wt=he(()=>{(function(){"use strict";let y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},w={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},g=null,f=null;function L(){return g||(g=document.createElement("div"),g.className="admin-pu-backdrop",g.hidden=!0,g.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(g),g.addEventListener("click",n=>{(n.target.matches("[data-pu-close]")||n.target===g)&&o()}),g)}function H(n){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((i,c)=>{let a=c+1,e=a<n,h=e?"is-done":a===n?"is-active":"";return(c>0?`<span class="admin-pu-step-line ${e?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${h}">
          <span class="circle">${e?"\u2713":a}</span>
          <span class="label">${i}</span>
        </div>`}).join("")}function C(n,d){f.step=n;let i=g.querySelector("[data-pu-steps]");i&&(i.innerHTML=H(n));let c=g.querySelector("[data-pu-body]");c&&(c.innerHTML=d)}function I(n){let d=n==="error-type"?ServerI18n.t("pluginsUploadErrorType"):n==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):n==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):n==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),i=(n||"").startsWith("error")?"\u2715":n==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(n||"").startsWith("error")?"is-error":n==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${i}</div>
          <div class="admin-pu-dropzone-msg">${y(d)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function p(){let n=g.querySelector("[data-pu-dropzone]"),d=g.querySelector("[data-pu-file]"),i=g.querySelector("[data-pu-browse]");i&&i.addEventListener("click",()=>d&&d.click()),d&&d.addEventListener("change",()=>{d.files&&d.files[0]&&M(d.files[0])}),n&&(n.addEventListener("click",()=>d&&d.click()),n.addEventListener("dragover",c=>{c.preventDefault(),n.classList.add("is-over")}),n.addEventListener("dragleave",()=>n.classList.remove("is-over")),n.addEventListener("drop",c=>{c.preventDefault(),n.classList.remove("is-over");let a=c.dataTransfer&&c.dataTransfer.files;if(!(!a||a.length===0)){if(a.length>1){C(1,I("error-multi")),p();return}M(a[0])}}))}function M(n){if(!n.name.match(/\.py$/i)){C(1,I("error-type")),p();return}if(n.size>256*1024){C(1,I("error-size")),p();return}f.file=n,C(2,F(n.name)),$(n)}function F(n){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${y(n)}</div>
      </div>`}async function $(n){try{let d=new FormData;d.append("file",n);let i=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:d}),c=await i.json().catch(()=>({}));if(!i.ok&&!c.validation){window.showToast?.(c.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:i.status}),!1),C(1,I()),p();return}f.manifest=c.manifest||{},f.validation=c.validation||{},f.filename=c.filename||n.name,S(f)}catch(d){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:d.message||""}),!1),C(1,I()),p()}}function S(n){let d=n.manifest||{},i=n.validation||{},c="";if(!i.syntax_ok)c=N(i.syntax_err,n);else if(Object.keys(d).length===0)c=b(n);else{let a=(i.deps||[]).some(e=>e.status==="missing");c=j(d,i,n,a)}C(2,`<div class="admin-pu-step2">${c}</div>`),B()}function N(n,d){let i=n&&n.line?n.line:"?",c=n&&n.msg?n.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${i}</span>
        </div>
        <pre class="admin-pu-syntax-body">${y(`>>> ${d.filename}
${c}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function b(n){return`
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
      </footer>`}function k(n){return n==null?"is-muted":n<=10?"is-danger":n<=50?"is-warn":"is-cyan"}function A(n){if(n==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let d=k(n),i=n<=10?"CRITICAL":n<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${d}">${n} \xB7 ${i}</span>`}function j(n,d,i,c){let a=n.name||i.filename.replace(/\.(py|js)$/i,""),e=n.version?`v${y(n.version)}`:"\u2014",l=n.author?`@${y(n.author.replace(/^@/,""))}`:"\u2014",h=n.description||ServerI18n.t("pluginsUploadNoDescription"),t="PY",s="is-warn",u=Array.isArray(n.permissions)?n.permissions:[],v=Object.keys(w).map(q=>{let G=u.includes(q);return`
        <div class="admin-pu-perm-row ${G?"is-req":"is-not"}">
          <span class="dot">${G?"\u25CF":"\u25CB"}</span>
          <span class="key">${y(q)}</span>
          <span class="label">${y(ServerI18n.t(w[q]))}</span>
        </div>`}).join(""),E=d.deps||[],T=E.map(q=>{let G=q.status==="ok"?"is-ok":q.status==="warn"?"is-warn":"is-err",_=q.status==="ok"?"\u2713":q.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${G}">
          <span class="dot">${_}</span>
          <span class="name">${y(q.name)}</span>
          <span class="note">${y(q.note||"")}</span>
        </div>`}).join(""),x=d.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${y(a)}</span>`})}
      </div>`:"",D=E.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${T}</div>
      </section>`;return`
      ${x}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${y(a)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${e}</span>
          <span class="author">${l}</span>
          <span class="admin-ui-pill admin-pu-pill ${s}" style="margin-left:auto">${t}</span>
        </div>
        <div class="admin-pu-manifest-desc">${y(h)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${A(n.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${v}</div>
        </section>
        ${D}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${c?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${c?"disabled":""} data-pu-confirm>${c?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function B(){let n=g.querySelector("[data-pu-back]");n&&n.addEventListener("click",()=>{f.file=null,f.manifest=null,f.validation=null,C(1,I()),p()});let d=g.querySelector("[data-pu-confirm]");d&&d.addEventListener("click",()=>P());let i=g.querySelector("[data-pu-no-manifest-ack]");i&&d&&i.addEventListener("change",()=>{d.disabled=!i.checked})}function P(){let n=f.manifest||{},d=n.name||(f.filename||"").replace(/\.(py|js)$/i,""),i=n.version?`v${y(n.version)}`:"\u2014",c=Array.isArray(n.permissions)?n.permissions:[],a=c.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:c.map(h=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${y(h)}</span></div>`).join("");C(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${y(d)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${i}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${a}</div>
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
      </div>`);let e=g.querySelector("[data-pu-install]");e&&e.addEventListener("click",m);let l=g.querySelector("[data-pu-back]");l&&l.addEventListener("click",()=>S(f))}async function m(){C(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let n=new FormData;n.append("file",f.file);let d=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:n}),i=await d.json().catch(()=>({}));if(!d.ok){window.showToast?.(i.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:d.status}),!1),S(f);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:i.name||f.filename}),!0),o();let c=document.getElementById("pluginsReloadBtn");c&&c.click()}catch(n){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:n.message||""}),!1),S(f)}}function r(){L(),f={step:1,file:null,manifest:null,validation:null,filename:null},C(1,I()),p(),g.hidden=!1,document.body.classList.add("admin-pu-open")}function o(){g&&(g.hidden=!0,document.body.classList.remove("admin-pu-open"),f=null)}window.AdminPluginUpload={open:r,close:o},document.addEventListener("click",n=>{n.target.closest("#pluginsUploadBtn")&&(n.preventDefault(),r())})})()});var St=he(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let w="sec-webhooks",g=12e3,f=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function L(a,e){return a?a.length>e?a.slice(0,e)+"\u2026":a:""}function H(a){if(!a)return"\u2014";try{let e=new Date(a),l=Math.max(0,(Date.now()-e.getTime())/1e3);return l<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(l)}):l<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(l/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(l/86400)})}catch{return"\u2014"}}function C(a){if(!a)return"\u2014";try{return new URL(a).hostname}catch{return L(a,30)}}function I(a){return a==="active"?"is-success":a==="degraded"?"is-warn":"is-muted"}let p={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:f,eventCatalogLoaded:!1};function M(){let a=document.getElementById("advanced-grid")||document.getElementById("settings-grid");!a||document.getElementById(w)||(a.insertAdjacentHTML("beforeend",`
      <div id="${w}" class="admin-webhooks-page hud-page-stack lg:col-span-2" data-tpl="B">
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
    `),F())}function F(){let a=document.getElementById(w);if(!a)return;let e=document.getElementById("wh-register-form");e&&e.addEventListener("submit",async l=>{l.preventDefault();let h=document.getElementById("wh-url").value.trim();if(!h)return;let t=Array.from(e.querySelectorAll('input[name="wh-event"]:checked')).map(E=>E.value);if(t.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let s=document.getElementById("wh-format").value,u=document.getElementById("wh-secret").value.trim(),v={url:h,events:t,format:s};u&&(v.secret=u);try{let E=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}),T=await E.json();E.ok&&T.hook_id?(showToast(ServerI18n.t("webhookRegistered")),e.reset(),A(),e.hidden=!0,await $()):showToast(T.error||ServerI18n.t("registrationFailed"),!1)}catch(E){console.error("Webhook register error:",E),showToast(ServerI18n.t("registrationFailed"),!1)}}),a.querySelectorAll(".admin-ui-page-actions [data-wh-action='show-add']").forEach(l=>l.addEventListener("click",()=>{e&&(e.hidden=!1)})),a.addEventListener("click",l=>{if(l.target.closest("[data-wh-action='show-add']")){e&&(e.hidden=!1);return}if(l.target.closest("[data-wh-action='hide-add']")){e&&(e.hidden=!0);return}let s=l.target.closest("[data-wh-log-filter]");if(s){p.deliveryFilter=s.dataset.whLogFilter,a.querySelectorAll("[data-wh-log-filter]").forEach(G=>{G.classList.toggle("is-active",G.dataset.whLogFilter===p.deliveryFilter)}),r();return}let u=l.target.closest("[data-wh-action='test']");if(u){l.stopPropagation(),d(u.dataset.whHookId);return}let v=l.target.closest("[data-wh-action='settings']");if(v){l.stopPropagation(),o(v.dataset.whHookId);return}if(l.target.closest("[data-wh-action='close-detail']")){p.selectedHookId=null,n(),P();return}let T=l.target.closest("[data-wh-action='detail-ping']");if(T){d(T.dataset.whHookId);return}let x=l.target.closest("[data-wh-action='detail-toggle']");if(x){i(x.dataset.whHookId,x.dataset.whNextEnabled==="1");return}let D=l.target.closest("[data-wh-action='detail-delete']");if(D){c(D.dataset.whHookId);return}let q=l.target.closest("[data-wh-hook-row]");if(q&&!l.target.closest("button")){o(q.dataset.whHookId);return}}),p.stopPoll||(p.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(w)},intervalMs:g,tick:$}))}async function $(){await b(),await Promise.all([S(),N()]),j(),P(),r(),n()}async function S(){try{let e=await(await csrfFetch("/admin/webhooks/list")).json();p.hooks=Array.isArray(e.webhooks)?e.webhooks:[]}catch{p.hooks=[]}}async function N(){try{let a=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!a.ok)return;let e=await a.json();p.deliveries=Array.isArray(e.deliveries)?e.deliveries:[],p.stats=e.stats||null}catch{}}async function b(){if(!p.eventCatalogLoaded)try{let a=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(a.ok){let e=await a.json(),l=Array.isArray(e.events)?e.events:[];l.length&&(p.eventCatalog=l)}}catch{}finally{p.eventCatalogLoaded=!0,A()}}function k(a){let e=a&&a.slug?String(a.slug):"";if(a&&a.labelKey){let u=ServerI18n.t(a.labelKey);return{slug:e,label:u?u+" \xB7 "+e:e,title:u}}let l=a&&a.zh?String(a.zh):"",h=a&&a.en?String(a.en):"",t=window.ServerI18n&&ServerI18n.currentLang||"zh",s=(a&&a[t]?String(a[t]):"")||h||l;return{slug:e,label:s?s+" \xB7 "+e:e,title:l&&h?l+" \xB7 "+h:l||h}}function A(){let a=document.querySelector("[data-wh-register-events]");a&&(a.innerHTML=p.eventCatalog.map(function(e){let l=k(e);if(!l.slug)return"";let h=l.slug==="on_danmu"?" checked":"";return'<label title="'+y(l.title)+'"><input type="checkbox" name="wh-event" value="'+y(l.slug)+'"'+h+" /> "+y(l.label)+"</label>"}).join(""))}function j(){let a=document.querySelector("[data-wh-stats]");if(!a)return;let e=p.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};a.innerHTML=`
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
      </div>`}function B(){return p.hooks.length&&p.hooks[0].retry_count||3}function P(){let a=document.getElementById("wh-list"),e=document.querySelector("[data-wh-count]");if(a){if(e&&(e.textContent=String(p.hooks.length)),p.hooks.length===0){a.innerHTML="";let l=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let h=document.getElementById("wh-register-form");h&&(h.hidden=!1),document.getElementById("wh-url")?.focus()}});l.dataset.emptyKind="webhooks",a.appendChild(l);return}a.innerHTML=p.hooks.map(m).join("")}}function m(a){let e=y(a.id||""),l=Number(a.success_count)||0,h=Number(a.fail_count)||0,t=l+h,s=t>0?Math.round(l/t*1e3)/10:100,u=a.enabled!==!1,v=Number(a.last_status)||null,E=u?v&&v>=400||a.last_error?"degraded":"active":"paused",T=E==="active"?"var(--hud-lime)":E==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",x=E==="active"?"ACTIVE":E==="degraded"?"DEGRADED":"PAUSED",D=p.selectedHookId===a.id?" is-selected":"",q=I(E),G=(a.events||[]).map(function(R){return'<span class="admin-ui-pill admin-wh-evt-chip">'+y(R)+"</span>"}).join(""),_=a.last_error?'<div class="admin-wh-card-warn">\u26A0 '+y(L(a.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${D}" data-wh-hook-row data-wh-hook-id="${e}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${T};box-shadow:${u?"0 0 6px "+T:"none"}"></span>
          <span class="name">${y(C(a.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${q}">${x}</span>
          <span class="last">last \xB7 ${y(H(a.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${y(a.url)}</div>
        <div class="admin-wh-card-events">${G}</div>
        ${_}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${s}%;background:${T}"></div></div>
            <span class="pct" style="color:${T}">${s}%</span>
          </div>
          <span class="counter ok">\u2713 ${l.toLocaleString()}</span>
          <span class="counter ${h>0?"fail":"fail-zero"}">\u2717 ${h}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${e}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${e}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function r(){let a=document.getElementById("wh-log-list");if(!a)return;let e=p.deliveries.filter(function(l){return p.deliveryFilter==="all"?!0:p.deliveryFilter==="failed"?!l.ok:p.deliveryFilter==="2xx"?l.code&&l.code>=200&&l.code<300:p.deliveryFilter==="5xx"?l.code&&l.code>=500:!0});if(e.length===0){a.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}a.innerHTML=e.map(function(l){let h=l.ts?new Date(l.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",t=l.code?String(l.code):"\u2014",s=l.ok?"var(--hud-lime)":"var(--hud-crimson)",u=l.duration_ms?l.duration_ms>=1e3?(l.duration_ms/1e3).toFixed(1)+"s":l.duration_ms+"ms":"\u2014",v=l.ok?"var(--color-text-strong)":"var(--hud-amber)",E=y(C(l.hook_url||"")),T=(l.retries||0)===0?"\u2014":"\xD7"+l.retries,x=(l.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${l.dropped?" is-dropped":""}">
          <span class="time">${y(h)}</span>
          <span class="code" style="color:${s};border-color:${s}55;background:${s}15;">${t}</span>
          <span class="dur" style="color:${v}">${y(u)}</span>
          <span class="ep">${E}</span>
          <span class="evt">${y(l.event||"")}</span>
          <span class="retry" style="color:${x}">${T}</span>
        </div>`}).join("")}function o(a){p.selectedHookId=a,P(),n()}function n(){let a=document.querySelector("[data-wh-detail]");if(!a)return;let e=p.hooks.find(function(E){return E.id===p.selectedHookId});if(!e){a.hidden=!0,a.innerHTML="";return}a.hidden=!1;let l=e.enabled!==!1,h=Number(e.last_status)||null,t=l?h&&h>=400||e.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",s=new Set(e.events||[]),u=p.eventCatalog.map(function(E){let T=k(E),x=s.has(T.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(x?"is-active is-on":"")+'" title="'+y(T.title)+'"><span aria-hidden="true">'+(x?"\u2713":"\u25CB")+"</span><span>"+y(T.label)+"</span></label>"}).join(""),v={event:e.events&&e.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:e.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};a.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+t+";box-shadow:0 0 6px "+t+'"></span><span class="name">'+y(C(e.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+u+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(e.retry_count!=null?e.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(e.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+y(JSON.stringify(v,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+y(e.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+y(e.id)+'" data-wh-next-enabled="'+(l?"0":"1")+'">'+(l?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+y(e.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function d(a){if(a)try{let e=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:a})}),l=await e.json();e.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(l.error||ServerI18n.t("testFailed"),!1),setTimeout($,1500)}catch(e){console.error("Webhook test error:",e),showToast(ServerI18n.t("testFailed"),!1)}}async function i(a,e){if(a)try{let l=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:a,enabled:e})}),h=await l.json();if(!l.ok){showToast(h.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let t=p.hooks.find(function(s){return s.id===a});t&&(t.enabled=h.enabled),showToast(h.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),j(),P(),n()}catch(l){console.error("Webhook toggle error:",l),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function c(a){if(!(!a||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let l=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:a})}),h=await l.json();l.ok?(showToast(ServerI18n.t("webhookDeleted")),p.selectedHookId===a&&(p.selectedHookId=null),$()):showToast(h.error||ServerI18n.t("deleteFailed"),!1)}catch(l){console.error("Webhook delete error:",l),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(w)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var kt=he(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let w="sec-sounds",g=null,f=[],L=[];async function H(){try{let r=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!r.ok)throw new Error(await r.text());let o=await r.json();f=o.sounds||[],L=o.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",f.length||"")}catch(r){console.error("Failed to fetch sounds:",r),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),f=[],L=[]}}async function C(){return H()}async function I(r,o){let n=new FormData;n.append("file",r),n.append("name",o);let d=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:n}),i=await d.json();if(!d.ok)throw new Error(i.error||"Upload failed");return i}async function p(r){let o=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r})}),n=await o.json();if(!o.ok)throw new Error(n.error||"Delete failed");return n}async function M(r){let o=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),n=await o.json();if(!o.ok)throw new Error(n.error||"Failed to add rule");return n}async function F(r){let o=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:r})}),n=await o.json();if(!o.ok)throw new Error(n.error||"Failed to delete rule");return n}function $(){let r=document.getElementById("soundsList");if(r){if(f.length===0){r.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});o.dataset.emptyKind="sounds",o.style.gridColumn="1 / -1",r.appendChild(o);return}r.innerHTML=f.map(function(d){var i=y(d.name),c=Math.round((d.volume!=null?d.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+y(d.name)+'"><div class="name" title="'+i+'">'+i+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+y(d.name)+'" min="0" max="100" step="1" value="'+c+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+y(d.name)+'" style="min-width:32px;text-align:right">'+c+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+y(d.name)+'">'+y(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+y(d.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),r.querySelectorAll(".sound-play-btn").forEach(function(d){d.addEventListener("click",function(){var i=d.dataset.name,c=f.find(function(a){return a.name===i});c&&(g&&(g.pause(),g=null),g=new Audio(c.url),g.volume=.5,g.play().catch(function(a){console.warn("Audio preview failed:",a)}))})}),r.querySelectorAll(".sound-delete-btn").forEach(function(d){d.addEventListener("click",async function(){var i=d.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",i),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await p(i),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",i),!0),await H(),$(),N()}catch(a){window.showToast(a.message,!1)}})});var n={};r.querySelectorAll(".sound-volume-slider").forEach(function(d){var i=d.dataset.name,c=r.querySelector('.sound-volume-label[data-name="'+CSS.escape(i)+'"]');d.addEventListener("input",function(){c&&(c.textContent=d.value+"%"),clearTimeout(n[i]),n[i]=setTimeout(function(){S(i,Number(d.value)/100)},300)}),d.addEventListener("change",function(){clearTimeout(n[i]),S(i,Number(d.value)/100)})})}}async function S(r,o){try{var n=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(r)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:o})}),d=await n.json();if(!n.ok){window.showToast(d.error||"Volume update failed",!1);return}var i=f.find(function(c){return c.name===r});i&&(i.volume=o),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(o*100)}),!0)}catch(c){console.warn("[admin-sounds] volume save failed:",c),window.showToast("Network error",!1)}}function N(){let r=document.getElementById("ruleSoundName");if(!r)return;let o=r.value;if(r.innerHTML="",f.length===0){let n=document.createElement("option");n.value="",n.textContent=ServerI18n.t("noSoundsAvailable"),n.disabled=!0,r.appendChild(n);return}f.forEach(n=>{let d=document.createElement("option");d.value=n.name,d.textContent=n.name,r.appendChild(d)}),o&&[...r.options].some(n=>n.value===o)&&(r.value=o)}function b(){let r=document.getElementById("rulesList");if(r){if(L.length===0){r.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});o.dataset.emptyKind="sound-rules",r.appendChild(o);return}r.innerHTML=L.map(function(n){var d=n.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):n.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",n.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",n.trigger_value),i=Math.round((n.volume!=null?n.volume:1)*100),c=ServerI18n.t("soundDetailLine").replace("{sound}",n.sound_name).replace("{vol}",i).replace("{cd}",n.cooldown!=null?n.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+y(String(n.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+y(d)+'</div><div class="admin-sounds-rule-detail">'+y(c)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+y(String(n.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),r.querySelectorAll(".sound-rule-del-btn").forEach(function(n){n.addEventListener("click",async function(){try{await F(n.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await C(),b()}catch(d){window.showToast(d.message,!1)}})})}}function k(){let r=document.getElementById("soundUploadBtn");r&&r.addEventListener("click",async()=>{let o=document.getElementById("soundFileInput"),n=document.getElementById("soundNameInput"),d=o.files[0];if(!d){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let i=n.value.trim();if(!i){window.showToast(ServerI18n.t("enterSoundName"),!1);return}r.disabled=!0,r.textContent=ServerI18n.t("uploadingStatus");try{await I(d,i),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",i),!0),o.value="",n.value="",await H(),$(),N()}catch(c){window.showToast(c.message,!1)}finally{r.disabled=!1,r.textContent=ServerI18n.t("soundsUploadIdle")}})}function A(){let r=document.getElementById("addRuleBtn");r&&r.addEventListener("click",async()=>{let o=document.getElementById("ruleTriggerType").value,n=document.getElementById("ruleTriggerValue").value.trim(),d=document.getElementById("ruleSoundName").value,i=document.getElementById("ruleVolume"),c=document.getElementById("ruleCooldown");if(o!=="all"&&!n){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!d){window.showToast(ServerI18n.t("selectSound"),!1);return}let a=parseInt(i.value,10)/100,e=parseInt(c.value,10)||0,l={trigger_type:o,trigger_value:o==="all"?"":n,sound_name:d,volume:Math.max(0,Math.min(1,a)),cooldown:Math.max(0,e)};r.disabled=!0;try{await M(l),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await C(),b()}catch(h){window.showToast(h.message,!1)}finally{r.disabled=!1}})}function j(){let r=document.getElementById("ruleTriggerType"),o=document.getElementById("ruleTriggerValue");if(!r||!o)return;function n(){r.value==="all"?(o.disabled=!0,o.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),o.value=""):r.value==="keyword"?(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):r.value==="effect"&&(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}r.addEventListener("change",n),n()}function B(){let r=document.getElementById("ruleVolume"),o=document.getElementById("ruleVolumeLabel");!r||!o||r.addEventListener("input",()=>{o.textContent=r.value+"%"})}function P(){return`
      <div id="${w}" class="admin-sounds-page hud-page-stack lg:col-span-2" data-tpl="B">
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
    `}async function m(){let r=document.getElementById("settings-grid");if(r){if(r.insertAdjacentHTML("beforeend",P()),window.AdminSkeletons){let o=document.getElementById("soundsList");o&&(o.innerHTML="",o.appendChild(window.AdminSkeletons.listRows({rows:3})));let n=document.getElementById("rulesList");n&&(n.innerHTML="",n.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([H(),C()]),$(),N(),b(),k(),A(),j(),B()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let r=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(w)&&!r&&(r=!0,m().finally(()=>{r=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(w)&&(r=!0,m().finally(()=>{r=!1}))})})()});var It=he(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let w=/^[a-zA-Z0-9_]{1,32}$/,g=".png,.gif,.webp",f="sec-emojis",L=[];function H(){return`
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
    `}function C(B){let P=":"+B.name+":",m=Number(B.used)||0,r=m>0?ServerI18n.t("emojisUsedCount",{n:m}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+M(B.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+M(B.url)+'" alt="'+M(P)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+y(P)+'</div><div class="admin-em-v4__tile-meta">'+y(r)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+M(P)+'" title="'+M(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+M(B.name)+'" title="'+M(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function I(B){let P=document.querySelector("[data-em-quota-label]"),m=document.querySelector("[data-em-quota-fill]");if(!P||!m)return;let r=B.length,o=100;P.textContent=ServerI18n.t("emojisQuotaUsed",{n:r,max:o}),m.style.width=Math.min(100,r/o*100)+"%"}function p(B){let P=document.querySelector("[data-em-preview-body]");if(!P)return;if(!B||B.length===0){P.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let r=B.slice(0,3).map(o=>`<span class="admin-em-v4__preview-pair"><code>:${y(o.name)}:</code> \u2192 <img src="${M(o.url)}" alt=":${M(o.name)}:" /></span>`);P.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:r.join(" \xB7 ")})}function M(B){return y(B)}function F(B){var P=document.getElementById("emojiGrid"),m=document.getElementById("emojiCount");P&&(!B||B.length===0?(window.AdminEmpty?(P.innerHTML="",P.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var r=document.getElementById("emojiFileInput");r&&r.click()}}))):P.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("noEmojisUploaded"))+"</div>",m&&(m.textContent="0")):(P.innerHTML=B.map(C).join(""),m&&(m.textContent=String(B.length))),I(L),p(L))}function $(){var B=document.getElementById("emojiGrid");if(B)if(window.AdminSkeletons){B.innerHTML="";for(var P=0;P<8;P++){var m=document.createElement("div");m.className="admin-em-v4__tile admin-em-v4__tile--skel";var r=document.createElement("div");r.className="admin-em-v4__tile-thumb";var o=document.createElement("div");o.className="admin-skel",o.style.width="100%",o.style.height="100%",r.appendChild(o),m.appendChild(r);var n=document.createElement("div");n.className="admin-skel admin-skel-bar",n.style.width="60%",n.style.height="8px",n.style.margin="6px auto",m.appendChild(n),B.appendChild(m)}}else B.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadingEmojis"))+"</div>"}async function S(){try{var B=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!B.ok)throw new Error("HTTP "+B.status);var P=await B.json();L=P.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",L.length||""),N()}catch(r){console.error("[admin-emojis] fetch failed:",r);var m=document.getElementById("emojiGrid");m&&(m.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function N(){var B=document.getElementById("emojiSearchInput"),P=(B&&B.value||"").trim().toLowerCase(),m=P?L.filter(function(r){return(r.name||"").toLowerCase().includes(P)}):L;F(m)}async function b(){var B=document.getElementById("emojiNameInput"),P=document.getElementById("emojiFileInput"),m=document.getElementById("emojiUploadBtn");if(!(!B||!P||!m)){var r=B.value.trim(),o=P.files&&P.files[0];if(!r){showToast(ServerI18n.t("emojiNameRequired"),!1),B.focus();return}if(!w.test(r)){showToast(ServerI18n.t("emojiNameInvalid"),!1),B.focus();return}if(!o){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var n=o.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(n)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}m.disabled=!0,m.textContent=ServerI18n.t("uploadingStatus");try{var d=new FormData;d.append("name",r),d.append("emojifile",o);var i=await csrfFetch("/admin/emojis/upload",{method:"POST",body:d}),c=await i.json();i.ok?(showToast(c.message||ServerI18n.t("emojiUploadFallback")),B.value="",P.value="",await S()):showToast(c.error||ServerI18n.t("uploadFailed"),!1)}catch(a){console.error("[admin-emojis] upload error:",a),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{m.disabled=!1,m.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function k(B){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",B),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var m=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:B})}),r=await m.json();m.ok?(showToast(r.message||ServerI18n.t("emojiDeleteFallback")),await S()):showToast(r.error||ServerI18n.t("deleteFailed"),!1)}catch(o){console.error("[admin-emojis] delete error:",o),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function A(B){try{await navigator.clipboard.writeText(B),showToast(ServerI18n.t("copiedLabel").replace("{label}",B))}catch{var P=document.createElement("textarea");P.value=B,P.style.position="fixed",P.style.opacity="0",document.body.appendChild(P),P.select(),document.execCommand("copy"),document.body.removeChild(P),showToast(ServerI18n.t("copiedLabel").replace("{label}",B))}}function j(){var B=document.getElementById("settings-grid");if(B){B.insertAdjacentHTML("beforeend",H());var P=document.getElementById("emojiUploadBtn");P&&P.addEventListener("click",b);var m=document.getElementById("emojiNameInput");m&&m.addEventListener("keydown",function(i){i.key==="Enter"&&(i.preventDefault(),b())});var r=document.getElementById("emojiSearchInput");r&&r.addEventListener("input",N);var o=document.getElementById("emojiGrid");o&&o.addEventListener("click",function(i){var c=i.target.closest(".emoji-copy-btn");if(c){A(c.dataset.label);return}var a=i.target.closest(".emoji-delete-btn");a&&k(a.dataset.name)});var n=document.querySelector("[data-em-dropzone]"),d=document.getElementById("emojiFileInput");n&&d&&(["dragenter","dragover"].forEach(function(i){n.addEventListener(i,function(c){c.preventDefault(),n.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(i){n.addEventListener(i,function(c){c.preventDefault(),n.classList.remove("is-dragover")})}),n.addEventListener("drop",function(i){var c=i.dataTransfer&&i.dataTransfer.files&&i.dataTransfer.files[0];if(c){var a=new DataTransfer;a.items.add(c),d.files=a.files;var e=document.getElementById("emojiNameInput");if(e&&!e.value){var l=c.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");e.value=l.slice(0,32),e.focus()}n.classList.add("is-dropping"),setTimeout(function(){n.classList.remove("is-dropping")},1200)}})),$(),S()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var B=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(f)&&j()});B.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&j()}})})()});var Tt=he(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml,w="sec-stickers",g=["png","gif","webp"],f=".gif,.png,.webp",L="__all__",H=[],C=[],I=L;function p(r){return y(r)}function M(){var r=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,o=r?`
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
      <div id="${w}" class="admin-stickers-page hud-page-stack lg:col-span-2" data-tpl="B">
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
                ${window.AdminSkeletons?window.AdminSkeletons.html("statsTiles",{cols:4}):y(ServerI18n.t("loadingStickers"))}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}function F(r){return r===L?H.length:H.filter(function(o){return o.pack_id===r}).length}function $(){var r=document.getElementById("stickerPackList");if(r){var o='<button type="button" class="admin-stickers-pack'+(I===L?" is-active":"")+'" data-pack="'+L+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+F(L)+"</span></button>";C.forEach(function(n){var d=n.enabled?"is-success":"is-muted",i="admin-stickers-pack"+(n.id===I?" is-active":""),c=n.id==="default",a=c?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+p(n.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+p(n.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+p(n.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+p(n.id)+'" title="'+(n.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(n.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+p(n.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";o+='<div class="'+i+'" data-pack="'+p(n.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+p(n.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+d+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+y(n.name)+'</span><span class="admin-stickers-pack-count">'+F(n.id)+"</span></button>"+a+"</div>"}),r.innerHTML=o}}function S(r){var o=":"+r.name+":";return'<div class="admin-stickers-tile"><img src="'+p(r.url)+'" alt="'+p(o)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+p(o)+'">'+y(o)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+p(o)+'" title="'+p(ServerI18n.t("copyToClipboard"))+'">'+y(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+p(r.name)+'" title="'+p(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function N(){var r=document.getElementById("stickerGrid"),o=document.getElementById("stickerCount");if(r){var n=document.getElementById("stickerSearchInput"),d=(n&&n.value||"").trim().toLowerCase(),i=H.filter(function(a){return!(I!==L&&a.pack_id!==I||d&&!(a.name||"").toLowerCase().includes(d))});if(i.length===0){r.innerHTML="";var c=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});c.dataset.emptyKind="stickers",c.style.gridColumn="1 / -1",r.appendChild(c),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}r.innerHTML=i.map(S).join(""),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:i.length}))}}async function b(){var r=document.getElementById("stickerGrid");if(r)try{var[o,n]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!o.ok)throw new Error("HTTP "+o.status);H=(await o.json()).stickers||[],C=n.ok?(await n.json()).packs||[]:[],I!==L&&!C.some(function(d){return d.id===I})&&(I=L),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",C.length?ServerI18n.t("tabCountPacks",{n:C.length}):""),$(),N()}catch(d){console.error("[admin-stickers] fetch failed:",d),r.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function k(r,o){if(r==="select"){I=o,$(),N();return}if(r==="rename"){var n=C.find(function(E){return E.id===o}),d=prompt(ServerI18n.t("stickersPackNamePrompt"),n?n.name:"");if(!d)return;try{var i=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})}),c=await i.json();i.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await b()):window.showToast(c.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(r==="toggle"){try{var a=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/toggle",{method:"POST"});a.ok&&await b()}catch{}return}if(r==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var e=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o),{method:"DELETE"}),l=await e.json();e.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),I===o&&(I=L),await b()):window.showToast(l.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(r==="up"||r==="down"){var h=C.slice().sort(function(E,T){return(E.order||0)-(T.order||0)}),t=h.findIndex(function(E){return E.id===o});if(t<0)return;var s=r==="up"?t-1:t+1;if(s<0||s>=h.length)return;var u=h[t],v=h[s];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(u.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:v.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(v.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:u.order||0})})]),await b()}catch{}}}async function A(){var r=prompt(ServerI18n.t("stickersNewPackPrompt"));if(r)try{var o=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r})}),n=await o.json();o.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),I=n.pack&&n.pack.id?n.pack.id:I,await b()):window.showToast(n.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function j(){var r=document.getElementById("stickerFileInput"),o=document.getElementById("stickerUploadBtn");if(!(!r||!o)){var n=r.files&&r.files[0];if(!n){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var d=n.name.split(".").pop().toLowerCase();if(g.indexOf(d)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}o.disabled=!0;var i=o.textContent;o.textContent=ServerI18n.t("uploadingStatus");try{var c=new FormData;c.append("file",n),I&&I!==L&&c.append("pack_id",I);var a=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:c}),e=await a.json();a.ok?(window.showToast(e.message||ServerI18n.t("stickerUploadFallback")),r.value="",await b()):window.showToast(e.error||ServerI18n.t("uploadFailed"),!1)}catch(l){console.error("[admin-stickers] upload error:",l),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{o.disabled=!1,o.textContent=i}}}async function B(r){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",r),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var n=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(r),{method:"DELETE"}),d=await n.json();n.ok?(window.showToast(d.message||ServerI18n.t("stickerDeleteFallback")),await b()):window.showToast(d.error||ServerI18n.t("deleteFailed"),!1)}catch(i){console.error("[admin-stickers] delete error:",i),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function P(r){try{await navigator.clipboard.writeText(r),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",r))}catch{var o=document.createElement("textarea");o.value=r,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",r))}}function m(){var r=document.getElementById("settings-grid");if(r){r.insertAdjacentHTML("beforeend",M());var o=document.getElementById("stickerUploadBtn");o&&o.addEventListener("click",j);var n=document.getElementById("stickerPackAddBtn");n&&n.addEventListener("click",A);var d=document.getElementById("stickerSearchInput");d&&d.addEventListener("input",N);var i=document.getElementById("stickerPackList");i&&i.addEventListener("click",function(a){var e=a.target.closest("[data-pack-action]");if(!e){var l=a.target.closest("[data-pack]");l&&k("select",l.dataset.pack);return}var h=e.dataset.packAction,t=e.dataset.packId;h==="select"&&!t&&(t=e.closest("[data-pack]")&&e.closest("[data-pack]").dataset.pack),k(h,t)});var c=document.getElementById("stickerGrid");c&&c.addEventListener("click",function(a){var e=a.target.closest(".sticker-copy-btn");if(e){P(e.dataset.label);return}var l=a.target.closest(".sticker-delete-btn");l&&B(l.dataset.name)}),b()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var r=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(w)&&m()});r.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(w)&&m()}})})()});var _t=he(()=>{(function(){"use strict";let y="sec-extensions-overview",w=window.AdminUtils.escapeHtml,g=15e3,f=[{id:"slido",name:"Slido Extension",version:"v0.3.0",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload",href:"/static/extensions/danmu-slido-extension-0.2.0.zip"},{kind:"config",labelKey:"extSlidoStepConfig"}]},hasFireTokenUI:!0,hasLiveStatus:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],L={fireToken:null,plainToken:null,sources:[],sourcesTimer:0,slidoStatus:null},H=["rate_limited","no_overlay","rejected","feed_unrecognized","server_unreachable"];function C(m){let r=m&&!m.stale?m.report:null;if(!r)return{tone:"",text:ServerI18n.t("extSlidoStatusNone")};if(r.state==="error"){let o=H.includes(r.error)?r.error:"rejected";return{tone:"is-error",text:ServerI18n.t("extSlidoErr_"+o)}}return{tone:"is-live",text:ServerI18n.t("extSlidoStatusWatching",{sent:r.sent||0,blocked:r.blocked||0})}}function I(){return`
      <div id="${y}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${f.map(p).join("")}
        </div>
      </div>`}function p(m){let r=m.status==="ready",o="is-cold",n=r?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,d=r&&m.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${m.install.steps.map(c=>c.kind==="download"?`<li><a class="admin-ext-step-link" href="${c.href}" target="_blank" rel="noopener noreferrer">${w(ServerI18n.t(c.labelKey))} \u2193</a></li>`:`<li>${w(ServerI18n.t(c.labelKey))}</li>`).join("")}
          </ol>
        </div>`:"",i=m.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
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
      <article class="admin-ext-card" data-ext="${m.id}">
        <div class="admin-ext-head">
          <span class="admin-ext-status-dot ${o}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${m.color}">${m.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${w(m.name)}</div>
            <div class="meta"><span class="ver">${w(m.version)}</span></div>
          </div>
          ${n}
        </div>
        <p class="admin-ext-desc">${w(ServerI18n.t(m.descKey))}</p>
        ${m.hasLiveStatus?`<p class="admin-ext-live-status" data-slido-status role="status" aria-live="polite">${w(ServerI18n.t("extSlidoStatusNone"))}</p>`:""}
        ${d}
        ${i}
      </article>`}async function M(){try{let m=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!m.ok)return;L.fireToken=await m.json(),A()}catch{}}async function F(){try{let m=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!m.ok)return;let r=await m.json();L.sources=Array.isArray(r.sources)?r.sources:[],j()}catch{}}async function $(){try{let m=await fetch("/admin/integrations/slido/status",{credentials:"same-origin"});if(!m.ok)return;L.slidoStatus=await m.json(),B()}catch{}}function S(){F(),$()}async function N(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let r=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!r.ok)throw new Error("HTTP "+r.status);let o=await r.json();L.fireToken={enabled:o.enabled,prefix:o.prefix,has_token:!0,rotated_at:o.rotated_at},L.plainToken=o.token,A(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenGenerated"),!0),k(o.token)}catch(r){console.warn("[ext] regen failed:",r),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function b(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let r=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!r.ok)throw new Error("HTTP "+r.status);L.fireToken=await r.json(),L.plainToken=null,A(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(r){console.warn("[ext] revoke failed:",r),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function k(m){if(m)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(m).catch(()=>{});else{let r=document.createElement("textarea");r.value=m,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select();try{document.execCommand("copy")}catch{}document.body.removeChild(r)}}function A(){let m=document.querySelector("[data-fire-token-display]"),r=document.querySelector('[data-fire-token-action="copy"]'),o=document.querySelector('[data-fire-token-action="regen"]'),n=document.querySelector('[data-fire-token-action="revoke"]');if(!m)return;let d=L.fireToken;L.plainToken?(m.textContent=L.plainToken,m.classList.add("is-plain")):d&&d.has_token?(m.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:d.prefix||""}),m.classList.remove("is-plain")):(m.textContent=ServerI18n.t("extTokenNotSetHint"),m.classList.remove("is-plain")),r&&(r.disabled=!L.plainToken),o&&(o.textContent=d&&d.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),n&&(n.disabled=!(d&&d.has_token))}function j(){let m=new Set(L.sources.map(r=>r.source));document.querySelectorAll(".admin-ext-card").forEach(r=>{let o=f.find(i=>i.id===r.dataset.ext);if(!o)return;let n=r.querySelector("[data-ext-dot]");if(!n)return;let d=o.sourceMatch&&m.has(o.sourceMatch);n.classList.toggle("is-live",!!d),n.classList.toggle("is-cold",!d)})}function B(){let m=document.querySelector("[data-slido-status]");if(!m)return;let r=C(L.slidoStatus);m.textContent=r.text,m.classList.toggle("is-live",r.tone==="is-live"),m.classList.toggle("is-error",r.tone==="is-error")}function P(){let m=document.getElementById("settings-grid");if(!m||document.getElementById(y))return;m.insertAdjacentHTML("beforeend",I());let r=document.getElementById(y);r&&r.addEventListener("click",o=>{let n=o.target.closest("[data-fire-token-action]");if(!n)return;let d=n.dataset.fireTokenAction;d==="regen"?N():d==="revoke"?b():d==="copy"&&L.plainToken&&(k(L.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),M(),L.stopPoll||(L.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(y)},intervalMs:g,tick:S}))}window.AdminExtensions={slidoStatusView:C},document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&P()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&P()})})()});var Et=he(()=>{(function(){"use strict";let y="sec-firetoken-overview",w=window.AdminUtils.escapeHtml,g=15e3,f={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function L(){return`
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
    `}async function H(){await Promise.all([C(),I(),p()])}async function C(){try{let m=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!m.ok)return;f.token=await m.json(),b()}catch{}}async function I(){try{let m=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!m.ok)return;let r=await m.json();f.usage24h=Array.isArray(r.usage_24h)?r.usage_24h:[],f.ips=Array.isArray(r.ips)?r.ips:[],A(),j(),k()}catch{}}async function p(){try{let m=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!m.ok)return;let r=await m.json();f.audit=Array.isArray(r.events)?r.events:[],B()}catch{}}async function M(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let r=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!r.ok)throw new Error("HTTP "+r.status);let o=await r.json();f.token={enabled:o.enabled,prefix:o.prefix,has_token:!0,rotated_at:o.rotated_at,created_at:o.created_at||o.rotated_at},f.plainToken=o.token,b(),$(o.token),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerated"),!0),p()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function F(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let r=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!r.ok)throw new Error("HTTP "+r.status);f.token=await r.json(),f.plainToken=null,b(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),p()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function $(m){if(m)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(m).catch(()=>{});else{let r=document.createElement("textarea");r.value=m,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select();try{document.execCommand("copy")}catch{}document.body.removeChild(r)}}function S(m){if(!m)return"\u2014";let r=Date.now()/1e3-m;return r<60?ServerI18n.t("firetokenJustNow"):r<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(r/60)}):r<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(r/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(r/86400)})}function N(m){if(!m)return"\u2014";try{return new Date(m*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function b(){let m=f.token,r=document.querySelector("[data-ft-token-display]"),o=document.querySelector("[data-ft-status]"),n=document.querySelector('[data-ft-action="copy"]'),d=document.querySelector('[data-ft-action="regen"]'),i=document.querySelector('[data-ft-action="revoke"]'),c=document.querySelector('[data-ft-stat="created"]'),a=document.querySelector('[data-ft-stat="rotated"]'),e=document.getElementById("adminFtCurl");if(r&&(f.plainToken?(r.textContent=f.plainToken,r.classList.add("is-plain")):m&&m.has_token?(r.textContent=(m.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",r.classList.remove("is-plain")):(r.textContent=ServerI18n.t("firetokenNotSetHint"),r.classList.remove("is-plain")),o&&(m&&m.enabled&&m.has_token?(o.textContent=ServerI18n.t("firetokenStatusHealthy"),o.className="admin-ft-status is-good"):m&&m.has_token?(o.textContent=ServerI18n.t("firetokenStatusDisabled"),o.className="admin-ft-status is-warn"):(o.textContent=ServerI18n.t("firetokenStatusUnset"),o.className="admin-ft-status is-muted")),n&&(n.disabled=!f.plainToken),i&&(i.disabled=!(m&&m.has_token)),d&&(d.textContent=m&&m.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),c&&(c.textContent=m?N(m.created_at):"\u2014"),a&&(a.textContent=m?S(m.rotated_at):"\u2014"),e)){let l=f.plainToken?f.plainToken:m&&m.prefix?m.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";e.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${l}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function k(){let m=f.usage24h.map(c=>Number(c)||0),r=m.reduce((c,a)=>c+a,0),o=m.length?Math.max(...m):0,n=document.querySelector('[data-ft-stat="hits"]'),d=document.querySelector('[data-ft-stat="peak"]'),i=document.querySelector("[data-ft-peak-meta]");n&&(n.textContent=r.toLocaleString()),d&&(d.textContent=o.toLocaleString()),i&&(i.textContent=ServerI18n.t("firetokenPeakMeta",{peak:o.toLocaleString()}))}function A(){let m=document.getElementById("adminFtChart24h");if(!m)return;let r=f.usage24h.map(i=>Number(i)||0);if(!r.length){m.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let o=Math.max(...r),n=12e3,d=o>0?Math.min(100,n/Math.max(o,n)*100):100;m.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${r.map((i,c)=>{let a=o>0?Math.max(2,i/o*100):2;return`<div class="bar ${o>0&&i===o?"is-peak":""}" style="height:${a}%" title="${c.toString().padStart(2,"0")}:00 \u2014 ${i}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(i=>`<span>${String(i).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function j(){let m=document.getElementById("adminFtIps"),r=document.querySelector("[data-ft-ip-count]");if(!m)return;let o=f.ips||[];if(r&&(r.textContent=o.length?`${o.length} IP`:"\u2014"),!o.length){m.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let n=o[0]?.ip;m.innerHTML=o.map((d,i)=>{let c=i===0,a=d.source==="web"&&(d.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${c?"is-top":""}">
          <span class="ip">${w(d.ip||"?")}</span>
          ${c?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${a?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${w(d.source||"\u2014")}</span>
          <span class="cnt">${d.count||0} hits</span>
          <span class="when">${S(d.last_seen)}</span>
        </div>`}).join("")}function B(){let m=document.getElementById("adminFtAudit");if(!m)return;let r=f.audit||[];if(!r.length){m.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let o={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},n={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};m.innerHTML=r.map(d=>{let i=n[d.kind]||"is-info",c=o[d.kind]||d.kind,a=d.meta||{},e=a.prefix?` \xB7 prefix=${w(a.prefix)}`:a.enabled!=null?` \xB7 enabled=${a.enabled}`:"";return`
        <div class="admin-ft-audit-row ${i}">
          <span class="ts">${N(d.ts)}</span>
          <span class="kind">${w(c)}</span>
          <span class="detail">${e}</span>
        </div>`}).join("")}function P(){let m=document.getElementById("settings-grid");if(!m||document.getElementById(y))return;m.insertAdjacentHTML("beforeend",L());let r=document.getElementById(y);r&&r.addEventListener("click",o=>{let n=o.target.closest("[data-ft-action]");if(!n)return;let d=n.dataset.ftAction;d==="regen"?M():d==="revoke"?F():d==="copy"&&f.plainToken&&($(f.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),f.stopPoll||(f.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(y),intervalMs:g,tick:H}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&P()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&P()})})()});var $t=he(()=>{(function(){"use strict";let y="sec-about-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(B){return String(B).replace(/[&<>"']/g,function(P){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[P]})},g="Danmu Fire",f="https://github.com/guan4tou2/danmu-desktop",L=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],H=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],C="danmu.about.lastUpdateCheck",I={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function p(){return`
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
                <span class="v" style="grid-column: span 2" data-about-admin-url>${w(location.origin+"/admin/")}</span>
              </div>
            </div>
          </article>

          <article class="admin-about-changelog">
            <div class="admin-about-changelog-head">
              <span class="admin-ui-monolabel">${ServerI18n.t("uiSectionChangelog")}</span>
              <a class="admin-about-changelog-more" href="${f}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${L.slice(0,4).map(B=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${w(B.v)}</span>
                  ${B.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${w(B.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${B.notes.slice(0,3).map(P=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${w(P.t)}">${w(P.t.toUpperCase())}</span>
                      <span class="msg">${w(P.l)}</span>
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
              ${H.slice(0,6).map(B=>`
                <div class="admin-about-oss-row">
                  <span class="n">${w(B.n)}</span>
                  <span class="v">${w(B.v)}</span>
                  <span class="l">${w(B.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function M(B){if(!B||B<0)return"\u2014";let P=Math.floor(B/86400),m=Math.floor(B%86400/3600),r=Math.floor(B%3600/60);return P>0?`${P}d ${m}h`:m>0?`${m}h ${r}m`:`${r}m`}function F(){let B=document.querySelector("[data-about-tag]"),P=document.querySelector("[data-about-build]"),m=document.querySelector("[data-about-uptime]"),r=document.querySelector("[data-about-update]"),o=document.querySelector("[data-about-checked]"),n=document.querySelector("[data-about-env]"),d=document.querySelector("[data-about-ws-path]");if(B&&(B.textContent=`v${I.appVersion}`),P){let i=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";P.textContent=`BUILD \xB7 ${i} \xB7 stable channel`,n&&(n.textContent=i)}if(m){let i=I.serverStartedAt?I.serverTime-I.serverStartedAt:0;m.textContent=M(i)}if(r&&(I.isLatest===!0?r.textContent=ServerI18n.t("aboutIsLatestYes"):I.isLatest===!1?r.textContent=ServerI18n.t("aboutHasNewVersion",{v:I.latestVersion||""}):r.textContent="\u2014",r.style.color=I.isLatest===!0?"var(--hud-lime)":I.isLatest===!1?"var(--hud-amber)":""),o&&(o.textContent=I.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:$(I.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),d){let i=window.DANMU_CONFIG||{};d.textContent=i.wsPath||"/ws"}}function $(B){let P=Number(B)||0;if(!P)return"\u2014";let m=String(P).length>12?P:P*1e3,r=(Date.now()-m)/1e3;return r<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(r)}):r<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(r/60)}):r<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(r/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(r/86400)})}function S(B,P){let m=d=>String(d||"").replace(/^v/i,"").split("-")[0].split(".").map(function(i){return parseInt(i,10)||0}),r=m(B),o=m(P),n=Math.max(r.length,o.length);for(let d=0;d<n;d++){let i=r[d]||0,c=o[d]||0;if(i>c)return!0;if(i<c)return!1}return!1}async function N({silent:B}={}){B||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let P=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!P.ok)throw new Error("HTTP "+P.status);let r=((await P.json()).tag_name||"").replace(/^v/i,"");I.latestVersion=r,I.lastCheckedAt=Date.now(),I.isLatest=!S(r,I.appVersion);try{localStorage.setItem(C,JSON.stringify({ts:I.lastCheckedAt,latest:r,isLatest:I.isLatest}))}catch{}F(),B||window.showToast&&window.showToast(I.isLatest?ServerI18n.t("aboutToastLatest",{v:I.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:r}),!0)}catch(P){B||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:P.message||""}),!1)}}function b(){try{let B=localStorage.getItem(C);if(!B)return;let P=JSON.parse(B);I.latestVersion=P.latest,I.lastCheckedAt=Number(P.ts)||0,I.isLatest=!!P.isLatest}catch{}}async function k(){try{let B=await fetch("/admin/metrics",{credentials:"same-origin"});if(!B.ok)return;let P=await B.json();I.serverStartedAt=Number(P.server_started_at)||0,I.serverTime=Number(P.server_time)||Date.now()/1e3,F()}catch{}}function A(){let B=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",P=I.serverStartedAt?I.serverTime-I.serverStartedAt:0,m=(navigator.userAgent||"").slice(0,200),r=[`${g} v${I.appVersion}`,`Channel: ${B}`,`Uptime: ${M(P)}`,`User-Agent: ${m}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(r).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function j(){let B=document.getElementById("settings-grid");if(!B||document.getElementById(y))return;B.insertAdjacentHTML("beforeend",p()),I.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",b(),F();let P=document.getElementById(y);P&&P.addEventListener("click",function(m){let r=m.target.closest("[data-about-action]");if(!r)return;let o=r.dataset.aboutAction;o==="copy"?A():o==="check-update"?N({silent:!1}):o==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():o==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),k(),setInterval(k,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&j()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&j()})})()});var xt=he(()=>{(function(){"use strict";let y="admin-setup-wizard-root",w="danmu.setupWizard.completed",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},f=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],L=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function H(e){return e?e.label?e.label:e.labelKey?ServerI18n.t(e.labelKey):e.name||e.id||"\u2014":"\u2014"}function C(e){return e?e.descriptionKey?ServerI18n.t(e.descriptionKey):e.description||"":""}let I={open:!1,step:0,themes:L.slice(),activeTheme:L[0].name,selectedTheme:L[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function p(){I.publicUrl=window.location.origin+"/"}function M(){let e=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";e==="setup"&&!I.open?F():e!=="setup"&&I.open&&$({silent:!0})}function F(){I.open=!0,I.step=0,p(),document.body.dataset.setupWizardOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",S()),r()),n(),k(),N()}function $(e){let l=e&&e.silent;I.open=!1,document.body.dataset.setupWizardOpen="";let h=document.getElementById(y);if(h&&h.remove(),!l&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function S(){return`
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
            ${f.map(function(e,l){return`
                <div class="admin-setup-step" data-step-index="${l}">
                  <span class="bullet">${l+1}</span>
                  <span class="lbl">${g(ServerI18n.t(e.labelKey))}</span>
                </div>
                ${l<f.length-1?'<span class="admin-setup-step-sep"></span>':""}
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
      </div>`}function N(){let e=document.getElementById(y);if(!e)return;e.querySelectorAll(".admin-setup-step").forEach(function(E,T){E.classList.toggle("is-done",T<I.step),E.classList.toggle("is-active",T===I.step)}),e.querySelectorAll(".admin-setup-step-sep").forEach(function(E,T){E.classList.toggle("is-done",T<I.step)});let l=e.querySelector("[data-setup-meta]");l&&(l.textContent=ServerI18n.t("setupWizardStepMeta",{current:I.step+1,total:f.length}));let h=e.querySelector('[data-setup-action="prev"]');h&&(h.disabled=I.step===0);let t=e.querySelector('[data-setup-action="next"]');if(t){let E=f[I.step].id;t.textContent=ServerI18n.t("setupWizardNext")}let s=e.querySelector("[data-setup-foot]");s&&(s.hidden=f[I.step].id==="done");let u=e.querySelector("[data-setup-content]");if(!u)return;let v=f[I.step].id;v==="server"?u.innerHTML=b():v==="moderation"?u.innerHTML=A():v==="theme"?u.innerHTML=P():u.innerHTML=m(),o(v)}function b(){let e=I.readiness,l=e?Number(e.overlay_count)||0:null,h=l!==null&&l>0,s=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:I.publicUrl},{ok:h,unknown:l===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:h?ServerI18n.t("setupWizardReadyDisplayOk",{n:l}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!(I.activeTheme||I.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:H(I.themes.filter(function(u){return(u.name||u.id)===(I.selectedTheme||I.activeTheme)})[0]||I.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(u){let v=u.unknown?"is-unknown":u.ok?"is-done":"is-pending",E=u.unknown?"?":u.ok?"\u2713":"!",T='<span class="admin-setup-ready-title">'+g(u.title)+'</span><span class="admin-setup-ready-value">'+g(u.value||"")+"</span>",x=u.goto?'<a class="admin-setup-ready-go" href="'+u.goto+'" data-setup-goto="'+u.goto+'">'+g(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+v+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+E+"</span>"+T+x+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${g(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${g(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${s}</div>
      </div>`}async function k(){try{let e=await fetch("/overlay_status",{credentials:"same-origin"});if(!e.ok)throw new Error("HTTP "+e.status);let l=await e.json();I.readiness={overlay_count:Number(l.overlay_count)||0,mode:l.mode||""}}catch{I.readiness=null}I.open&&f[I.step].id==="server"&&N()}function A(){let e=I.moderationRules.map(function(l){return`
        <a class="admin-setup-mod-row" href="#/${l.route}" data-setup-goto="#/${l.route}">
          <span class="admin-setup-mod-body">
            <span class="admin-setup-mod-title">${g(ServerI18n.t(l.labelKey))}</span>
            <span class="admin-setup-mod-desc">${g(ServerI18n.t(l.descKey))}</span>
          </span>
          <span class="admin-setup-mod-go">${g(ServerI18n.t("setupWizardModGo"))}<span aria-hidden="true">\u203A</span></span>
        </a>`}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${g(ServerI18n.t("setupWizardStepModeration"))}</h2>
        <p class="admin-setup-step-desc">${g(ServerI18n.t("setupWizardModerationDesc"))}</p>
        <div class="admin-setup-mod-list">${e}</div>
      </div>`}let j=["default","neon","retro","cinema"];function B(){let e={};return(I.themes||[]).forEach(function(l){e[l.name||l.id]=l}),j.map(function(l){let h=L.filter(function(s){return s.name===l})[0],t=e[l];return h?{name:l,label:t&&t.label,labelKey:h.labelKey,descriptionKey:h.descriptionKey,colors:h.colors}:t}).filter(Boolean)}function P(){let e=B();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${e.map(function(l){let h=l.name||l.id||"",t=(I.selectedTheme||I.activeTheme)===h,s=(l.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${t?" is-selected":""}" data-setup-theme="${g(h)}">
                ${t?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${s.map(function(u,v){let E=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${g(u)};font-size:${10+v*2}px;text-shadow:0 0 6px ${g(u)}66;">${E[v]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${g(H(l))}</div>
                <div class="admin-setup-theme-sub">${g(C(l))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function m(){let e=(function(){for(let l=0;l<I.themes.length;l+=1){let h=I.themes[l];if((h.name||h.id)===(I.selectedTheme||I.activeTheme))return H(h)}return I.selectedTheme||I.activeTheme||"\u2014"})();return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${g(I.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${g(e)}</span></div>
        </div>
        <div class="admin-setup-done-next">
          <a class="admin-setup-done-link" href="#/moderation" data-setup-goto="#/moderation">${g(ServerI18n.t("setupWizardStepModeration"))}<span aria-hidden="true">\u203A</span></a>
          <a class="admin-setup-done-link" href="#/overlay" data-setup-goto="#/overlay">${g(ServerI18n.t("adminRouteTitle_overlay"))}<span aria-hidden="true">\u203A</span></a>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function r(){let e=document.getElementById(y);e&&e.addEventListener("click",function(l){if(l.target===e){$();return}let h=l.target.closest("[data-setup-action]");if(h){if(h.dataset.setupAction==="close"){$();return}if(h.dataset.setupAction==="prev"&&I.step>0){I.step-=1,N();return}h.dataset.setupAction==="next"&&i()}})}function o(e){let l=document.getElementById(y);if(l){if(e==="moderation"||e==="done"||e==="server"){if(l.querySelectorAll("[data-setup-goto]").forEach(function(h){h.addEventListener("click",function(){$();let t=h.dataset.setupGoto;t&&(window.location.hash=t)})}),e==="done"){let h=l.querySelector("[data-setup-complete-cta]");h&&h.addEventListener("click",c)}return}if(e==="theme"){l.querySelectorAll("[data-setup-theme]").forEach(function(h){h.addEventListener("click",function(){I.selectedTheme=h.dataset.setupTheme||I.selectedTheme,N()})});return}}}async function n(){try{let e=await fetch("/admin/themes",{credentials:"same-origin"});if(!e.ok)return;let l=await e.json(),h=Array.isArray(l.themes)?l.themes:[];if(!h.length)return;I.themes=h.map(function(t){return{name:t.name||t.id||"",label:t.label||t.display_name||t.name||"",description:t.description||"",colors:t.preview_colors||t.colors||t.palette||L[0].colors}}),I.activeTheme=l.active||I.themes[0]&&I.themes[0].name||I.activeTheme,I.selectedTheme||(I.selectedTheme=I.activeTheme),I.open&&f[I.step].id==="theme"&&N()}catch{}}async function d(){if(!I.selectedTheme||I.selectedTheme===I.activeTheme)return!0;try{let e=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:I.selectedTheme})});if(!e.ok)throw new Error("HTTP "+e.status);return I.activeTheme=I.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function i(){if(!(f[I.step].id==="theme"&&!await d())){if(I.step<f.length-1){I.step+=1,N();return}c()}}function c(){try{localStorage.setItem(w,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),$()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}F()},close:function(){$()},isCompleted:function(){try{return!!localStorage.getItem(w)}catch{return!1}},__setCapabilityForTest:function(){}};function a(){window.addEventListener("hashchange",M),M()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&a()})})()});var Lt=he(()=>{(function(){"use strict";let y="sec-poll-deepdive-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(k){return String(k).replace(/[&<>"']/g,function(A){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[A]})},g={poll:null,refreshTimer:0};function f(){return`
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
      </div>`}function L(k){if(k.innerHTML="",!window.AdminEmpty){k.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let A=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});A.classList.add("lg:col-span-2"),A.dataset.emptyKind="poll-deepdive",k.appendChild(A)}let H=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function C(k){return k?new Date(k*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function I(k){if(!k||k.length<2)return"";let A=Math.max.apply(null,k.map(function(r){return r.n}).concat([1])),j=100,B=32,P=j/(k.length-1),m=k.map(function(r,o){let n=(o*P).toFixed(2),d=(B-r.n/A*(B-2)-1).toFixed(2);return n+","+d});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+j+" "+B+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+m.join(" ")+'" /></svg>'}function p(k){let A=k.state||(k.active?"active":"ended"),j=k.question||"\u2014",B=Array.isArray(k.options)?k.options:[],P=function(h){return Number(h.votes!=null?h.votes:h.count)||0},m=B.reduce(function(h,t){return h+P(t)},0),r=A==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:C(k.ended_at)}),o=(function(){let h=Number(k.started_at)||0;if(!h)return"\u2014";let t=A==="active"?Date.now()/1e3:Number(k.ended_at)||h,s=Math.max(0,Math.floor(t-h));return Math.floor(s/60)+":"+String(s%60).padStart(2,"0")})(),n=Number(window._lastOverlayCount)||0,d=n>0?Math.round(m/n*100)+"%":"\u2014",i=n>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:m,audience:n}):ServerI18n.t("pollDeepdiveParticipationUnknown"),c=(function(){let h=Array.isArray(k.questions)?k.questions:[],t=0;for(let s of h)t+=Number(s.duplicate_attempts)||0;return h.length||(t=Number(k.duplicate_attempts)||0),t})(),a=B.map(function(h,t){let s=P(h),u=m>0?s/m*100:0,v=H[t%H.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${w(h.label||h.text||h.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:t+1}))}</span>
            <span class="votes">${s} \xB7 ${u.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${u.toFixed(2)}%;background:${v}"></div>
          </div>
        </div>`}).join(""),e=Array.isArray(k.vote_timeline)?k.vote_timeline:[],l=e.length>=2?I(e):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${w(j)}</div>
          <div class="admin-pdd-state">${w(r)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${m}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${d}</div><div class="sub">${w(i)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${w(o)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${c}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${B.length?a:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${l}</div>
        </article>
      </div>`}function M(){let k=document.querySelector("[data-pdd-grid]");if(k){if(!g.poll||!g.poll.poll_id){L(k);return}k.innerHTML=p(g.poll)}}async function F(){try{let k=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!k.ok)return;let A=await k.json();g.poll=A,M()}catch{}}function $(){if(!g.poll||!Array.isArray(g.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let k=[["option_label","votes","percentage"]],A=g.poll.options.reduce(function(r,o){return r+(Number(o.votes!=null?o.votes:o.count)||0)},0);g.poll.options.forEach(function(r,o){let n=Number(r.votes!=null?r.votes:r.count)||0,d=A>0?(n/A*100).toFixed(2):"0.00";k.push([r.label||"option_"+(o+1),n,d])});let j=k.map(function(r){return r.map(function(o){let n=String(o);return n.includes(",")||n.includes('"')?'"'+n.replace(/"/g,'""')+'"':n}).join(",")}).join(`
`),B=new Blob([j],{type:"text/csv;charset=utf-8"}),P=URL.createObjectURL(B),m=document.createElement("a");m.href=P,m.download="poll-"+(g.poll.poll_id||"current")+".csv",document.body.appendChild(m),m.click(),document.body.removeChild(m),setTimeout(function(){URL.revokeObjectURL(P)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function S(){try{let k=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!k.ok)throw new Error("HTTP "+k.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function N(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(F(),g.refreshTimer||(g.refreshTimer=setInterval(F,5e3))):g.refreshTimer&&(clearInterval(g.refreshTimer),g.refreshTimer=0)}function b(){let k=document.getElementById("settings-grid");if(!k||document.getElementById(y))return;k.insertAdjacentHTML("beforeend",f());let A=document.getElementById(y);A&&A.addEventListener("click",function(j){let B=j.target.closest("[data-pdd-action]");B&&(B.dataset.pddAction==="export-csv"?$():B.dataset.pddAction==="push"&&S())}),F(),N(),window.addEventListener("hashchange",N)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&b()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&b()})})()});var Ct=he(()=>{(function(){"use strict";let y="admin-message-drawer-root",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(d){return String(d).replace(/[&<>"']/g,function(i){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[i]})},f={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},L=null;function H(d){let i=d.detail&&d.detail.entry;i&&(f.open||(L=document.activeElement),f.entry=i,C(),i.data&&i.data.fingerprint&&F(i.data.fingerprint),$(i))}function C(){f.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",S()),N()),b();let d=document.querySelector("#"+y+" .admin-msgd-v4__close")||document.querySelector("#"+y+" button");if(d)try{d.focus({preventScroll:!0})}catch{}}function I(){f.open=!1,document.body.dataset.messageDrawerOpen="";let d=document.getElementById(y);if(d&&d.remove(),L&&typeof L.focus=="function"&&document.contains(L))try{L.focus({preventScroll:!0})}catch{}L=null}function p(d){if(!f.open)return;if(d.key==="Escape"){I();return}let i=document.activeElement,c=i?(i.tagName||"").toLowerCase():"";if(!(i&&(i.isContentEditable||c==="input"||c==="textarea"||c==="select"))){if(d.key==="ArrowLeft"||d.key==="k"){M(-1),d.preventDefault();return}if(d.key==="ArrowRight"||d.key==="j"){M(1),d.preventDefault();return}}}function M(d){if(!f.entry)return;let i=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(i=window.AdminLiveFeed.getEntries()),!i.length)return;let c=i.findIndex(function(l){return l.id===f.entry.id});if(c<0)return;let a=c+-d;if(a<0||a>=i.length){window.showToast&&window.showToast(d<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let e=i[a];f.entry=e,f.fingerprintRecord=null,$(e),b(),e.data&&e.data.fingerprint&&F(e.data.fingerprint)}async function F(d){try{let i=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!i.ok)return;let c=await i.json(),e=(Array.isArray(c.records)?c.records:[]).find(function(l){return(l.fingerprint||"").startsWith(d.slice(0,8))});f.fingerprintRecord=e||null,b()}catch{}}function $(d){let i=d.data&&d.data.fingerprint;if(!i){f.sameFpEntries=[];return}let c=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(c=window.AdminLiveFeed.getEntries()),f.sameFpEntries=c.filter(function(a){let e=a.data&&a.data.fingerprint||a.fingerprint||"";return e&&e.startsWith(i.slice(0,8))}).slice(0,8)}function S(){return`
      <div id="${y}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function N(){let d=document.getElementById(y);d&&d.addEventListener("click",function(i){let c=i.target.closest("[data-msgd-action]");if(!c)return;i.stopPropagation();let a=c.dataset.msgdAction;a==="close"?I():a==="ban-fp"?P():a==="ban-fp-quick"?B():a==="recall-msg"?r():a==="blacklist-kw"?o():a==="reply"?n():a==="prev"?M(-1):a==="next"&&M(1)})}function b(){let d=document.getElementById(y);if(!d)return;let i=d.querySelector("[data-msgd-body]");i&&(i.innerHTML=k())}function k(){let d=f.entry;if(!d)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let i=d.data||{},c=i.fingerprint||"\u2014",a=c==="\u2014"?"\u2014":c.slice(0,8),e=c==="\u2014"?"\u2014":c.slice(0,12),l=d.ts?A(d.ts):"\u2014",h=i.nickname||ServerI18n.t("msgDrawerAnonymous"),t=f.fingerprintRecord||{},s=Number(t.message_count)||0,u=Number(t.violation_count)||0,v=f.sameFpEntries||[],E=v.length?Math.round(v.reduce((x,D)=>x+((D.data||D).text||"").length,0)/v.length):(i.text||"").length,T=0;for(let x=0;x<c.length;x++)T=T*31+c.charCodeAt(x)&65535;return T=T%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${T})">${g((h||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${g(h)}</div>
          <div class="admin-msgd-v4__fp">fp:${g(e)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${g(l)}</span>
      </div>

      <div class="admin-msgd-v4__body">${g(i.text||"")}</div>

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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${s||v.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${E}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${u>0?"warn":"good"}">${u}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP \xB7 ${g(i.ip||"\u2014")}<br/>
          UA \xB7 ${g(i.user_agent||i.ua||"\u2014")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: same deferred EN\xB7\u4E2D\u6587 bilingual monolabel pattern as
             SENDER PROFILE above \u2014 left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecModeration")}</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${c==="\u2014"?"disabled":""}>${g(ServerI18n.t("msgdBanFpBtn"))}</button>
          <!-- 2026-10-29\uFF1A\u539F\u672C\u9019\u88E1\u662F\u300C\u975C\u97F3\u6307\u7D0B\u300D\uFF0B\u300C\u25D1 Mask\u300D\u5169\u9846\u3002
               \u975C\u97F3\u8207\u5C01\u7981\u6253\u7684\u662F\u540C\u4E00\u652F API\uFF08\u540C\u4E00\u500B\u6C38\u4E45\u6548\u679C\uFF09\uFF0C\u800C Mask \u5176\u5BE6\u662F
               \u628A\u6574\u53E5\u6587\u672C\u52A0\u9032\u9ED1\u540D\u55AE\u2014\u2014\u5169\u9846\u90FD\u5728\u627F\u8AFE\u4E00\u500B\u4E0D\u5B58\u5728\u7684\u9078\u9805\u3002
               \u63DB\u6210\u771F\u7684\u505A\u5F97\u5230\u7684\u4E8B\uFF1A\u628A\u9019\u4E00\u5247\u5F9E\u5927\u87A2\u5E55\u64A4\u4E0B\u3002 -->
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="recall-msg" ${i.message_id?"":"disabled"}>${g(ServerI18n.t("lfRecallBtn"))}</button>
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
    `}function A(d){try{let i=new Date(d),c=String(i.getHours()).padStart(2,"0"),a=String(i.getMinutes()).padStart(2,"0"),e=String(i.getSeconds()).padStart(2,"0");return c+":"+a+":"+e}catch{return"\u2014"}}function j(d){let i;if(typeof d=="number")i=d*1e3;else if(typeof d=="string")i=new Date(d).getTime();else return"\u2014";if(!i)return"\u2014";let c=(Date.now()-i)/1e3;return c<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(c)}):c<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(c/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(c/86400)})}async function B(d,i,c){let a=f.entry&&f.entry.data&&f.entry.data.fingerprint;if(!a)return;let e=parseInt(i||0,10)||0,l=e>0?await window.AdminModeration.banFingerprint(a,e,d):await window.AdminModeration.callBlock("fingerprint",a,d);if(!l.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:l.error||""}),!1);return}let h=c||(e>0?ServerI18n.t("msgDrawerSecondsLabel",{n:e}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:a.slice(0,8),label:h}),!0),I()}async function P(){let d=f.entry&&f.entry.data||{},i=d.fingerprint||"\u2014";if(i==="\u2014")return;let c=i.slice(0,12),a=d.nickname||ServerI18n.t("msgDrawerAnonymous"),e=0;for(let T=0;T<i.length;T++)e=e*31+i.charCodeAt(T)&65535;e=e%360;let l=document.createElement("div");l.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${e})">${g((a||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${g(a)}</div>
          <div class="fp">fp:${g(c)}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let h=T=>{l.querySelectorAll(".admin-bancfm-dchip").forEach(x=>x.classList.remove("is-active")),T.classList.add("is-active")};if(l.addEventListener("click",T=>{let x=T.target.closest("[data-ban-duration]");x&&h(x)}),l.addEventListener("keydown",T=>{if(T.key!=="Enter"&&T.key!==" ")return;let x=T.target.closest("[data-ban-duration]");x&&(T.preventDefault(),h(x))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:l,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let s=(l.querySelector("[data-ban-reason]")||{}).value||"",u=l.querySelector(".admin-bancfm-dchip.is-active"),v=u&&parseInt(u.dataset.banDuration||"0",10)||0,E=u?u.textContent.trim():ServerI18n.t("msgDrawerPermanent");return B(s.trim(),v,E)}function m(){}async function r(){let d=f.entry,i=d&&d.data&&d.data.message_id;if(!i)return;if(!(await window.AdminModeration.recall(i)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),I()}async function o(){let d=f.entry&&f.entry.data&&f.entry.data.text;if(!d)return;await window.AdminModeration.blockKeyword(d)&&I()}async function n(){let d=document.querySelector("[data-msgd-reply]"),i=d?d.value.trim():"";if(i)try{let c=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:i})});if(!c.ok)throw new Error("HTTP "+c.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),d&&(d.value="")}catch(c){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:c.message||""}),!1)}}window.AdminMessageDrawer={open:function(d){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:d}}))},close:I},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",H),document.addEventListener("keydown",p))})})()});var At=he(()=>{(function(){"use strict";let y="danmu.notifications.read",w="danmu.notifications.archived",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})},f={items:[],refreshTimer:0};function L(a){try{let e=localStorage.getItem(a);if(!e)return new Set;let l=JSON.parse(e);return new Set(Array.isArray(l)?l:[])}catch{return new Set}}function H(a,e){try{localStorage.setItem(a,JSON.stringify(Array.from(e)))}catch{}}function C(a){let e=L(y);e.add(a),H(y,e)}async function I(){let a=[p().catch(function(){return[]}),M().catch(function(){return[]}),F().catch(function(){return[]}),$().catch(function(){return[]})],l=(await Promise.all(a)).flat();l.sort(function(h,t){return(t.ts||0)-(h.ts||0)}),f.items=l,A(),P()&&j()}async function p(){let a=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!a.ok)return[];let e=await a.json();return(Array.isArray(e.events)?e.events:[]).map(function(h,t){let s=(Number(h.ts)||0)*1e3,u="tok-"+(h.ts||t)+"-"+(h.kind||"x"),v=h.kind||"?",E="info",T=ServerI18n.t("notifTitleFireTokenEvent");if(v==="rotated")E="info",T=ServerI18n.t("notifTitleFireTokenRotated");else if(v==="revoked")E="warn",T=ServerI18n.t("notifTitleFireTokenRevoked");else if(v==="toggled"){let x=h.meta&&h.meta.enabled;E=x?"good":"warn",T=ServerI18n.t("notifTitleFireTokenToggled",{state:x?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:u,sev:E,src:"Fire Token",ts:s,title:T,desc:ServerI18n.t("notifDescEventType",{kind:v})+(h.meta?" \xB7 "+JSON.stringify(h.meta):""),raw:h}})}async function M(){let a=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!a.ok)return[];let e=await a.json();return(Array.isArray(e.events)?e.events:[]).map(function(h,t){let s=(Number(h.ts)||0)*1e3,u="flt-"+(h.ts||t)+"-"+(h.action||"x")+"-"+t,v=h.action||"match";return{id:u,sev:v==="drop"?"warn":"info",src:"Moderation",ts:s,title:ServerI18n.t("notifTitleFilterHit",{action:v}),desc:ServerI18n.t("notifDescFilterHit",{rule:h.rule_id||"?",text:(h.text||"").slice(0,60)}),raw:h}})}async function F(){let a=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!a.ok)return[];let e=await a.json();return(Array.isArray(e.events)?e.events:[]).map(function(h,t){let s=(Number(h.ts)||0)*1e3,u=String(h.kind||"?");return{id:"wh-"+(h.ts||t)+"-"+u+"-"+t,sev:u==="unregister"?"warn":"info",src:"Webhooks",ts:s,title:ServerI18n.t("notifTitleWebhookEvent",{kind:u}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:h.actor||"system"})+(h.meta?" \xB7 "+JSON.stringify(h.meta):""),raw:h}})}async function $(){let a=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!a.ok)return[];let e=await a.json(),l=Array.isArray(e.events)?e.events:[],h=new Set(["auth","broadcast","system","session","sessions"]);return l.filter(function(t){return h.has(String(t.source||""))}).map(function(t,s){let u=(Number(t.ts)||0)*1e3,v=String(t.kind||"?");return{id:"sys-"+(t.ts||s)+"-"+(t.source||"x")+"-"+v+"-"+s,sev:v==="login_failed"?"warn":"info",src:"System",ts:u,title:ServerI18n.t("notifTitleSystemEvent",{kind:v}),desc:ServerI18n.t("notifDescSystemEvent",{source:t.source||"?",actor:t.actor||"system"}),raw:t}})}let S="admin-notif-panel",N={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/integrations/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/integrations/plugins"},System:{key:"adminNavSystem",hash:"#/events"}};function b(a){let e=N[a];return e?ServerI18n.t(e.key):a}function k(){let a=L(y),e=L(w);return f.items.filter(l=>!a.has(l.id)&&!e.has(l.id))}function A(){let a=document.querySelector("[data-notif-badge]");if(!a)return;let e=k().length;a.textContent=e>99?"99+":String(e),a.hidden=e===0}function j(){let a=document.getElementById(S);if(!a)return;let e=k().slice(0,20),l=e.length?e.map(h=>{let t=N[h.src];return'<li class="admin-notif__item" data-sev="'+g(h.sev)+'"><div class="admin-notif__text">'+g(h.title)+'</div><div class="admin-notif__meta">'+g(b(h.src))+" \xB7 "+g(B(h.ts))+"</div>"+(t?'<button type="button" class="admin-notif__action" data-notif-go="'+g(t.hash)+'" data-notif-id="'+g(h.id)+'">'+g(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+g(ServerI18n.t("notifEmpty"))+"</li>";a.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+g(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+g(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+l+"</ul>"}function B(a){if(!a)return"\u2014";let e=(Date.now()-a)/1e3;return e<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(e)}):e<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(e/60)}):e<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(e/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(e/86400)})}function P(){let a=document.getElementById(S);return!!a&&!a.hidden}function m(){let a=document.getElementById(S);a&&(j(),a.hidden=!1,f.refreshTimer||(f.refreshTimer=setInterval(I,3e4)))}function r(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&m()}function o(){let a=document.getElementById(S);a&&(a.hidden=!0),f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function n(){P()?o():m()}function d(){let a=document.querySelector(".admin-dash-topbar-actions");if(!a||document.getElementById("admin-notif-bell"))return;let e=document.createElement("button");if(e.id="admin-notif-bell",e.type="button",e.className="admin-dash-search is-icon-only admin-notif-bell",e.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),e.title=ServerI18n.t("adminRouteTitle_notifications"),e.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',a.insertBefore(e,a.firstChild),!document.getElementById(S)){let l=document.createElement("div");l.id=S,l.className="admin-notif",l.setAttribute("role","dialog"),l.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),l.hidden=!0,document.body.appendChild(l)}A(),r()}function i(){document.addEventListener("click",a=>{if(a.target.closest("#admin-notif-bell")){a.preventDefault(),n();return}let e=a.target.closest("[data-notif-go]");if(e){C(e.dataset.notifId),o(),location.hash=e.dataset.notifGo,A();return}if(a.target.closest("[data-notif-readall]")){k().forEach(l=>C(l.id)),j(),A();return}P()&&!a.target.closest("#"+S)&&o()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&P()&&o()}),window.addEventListener("hashchange",r),r()}function c(){d(),I()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(d).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),i(),c()})})()});var Bt=he(()=>{(function(){"use strict";let y="sec-audit-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},g={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},f={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function L(){return`
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
      </div>`}function H(n){if(!n)return"\u2014";try{let d=new Date(Number(n)*1e3),i=String(d.getHours()).padStart(2,"0"),c=String(d.getMinutes()).padStart(2,"0"),a=String(d.getSeconds()).padStart(2,"0");return`${i}:${c}:${a}`}catch{return"\u2014"}}function C(n){let d=String(n.action||n.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(d)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(d)?"warn":"info"}function I(n){return n==="danger"?"var(--hud-crimson, #f87171)":n==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function p(n){return f.filterActor==="all"||String(n.actor||"").toLowerCase()===f.filterActor}function M(n){return f.filterSeverity==="all"||C(n)===f.filterSeverity}function F(){return f.events.filter(function(n){return p(n)&&M(n)})}function $(n){let d=n&&n.meta&&typeof n.meta=="object"?n.meta:{};return d.target||d.keyword||d.fp||d.fingerprint||d.name||d.mode||d.session||d.hook_id||n.target||""}function S(n,d){let i=n!=null,c=d!=null;if(!i&&!c)return"";let a=i?w(JSON.stringify(n)):"",e=c?w(JSON.stringify(d)):"";return i?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${a}</span> \u2192 <span class="admin-audit-diff-a">${e}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${e}</span></span>`}function N(n){let d=n&&n.meta&&typeof n.meta=="object"?n.meta:{},i=[];n.detail&&i.push(`<span>${w(String(n.detail))}</span>`);let c=S(n.before,n.after);c&&i.push(c);let a=Object.assign({},d);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(l){delete a[l]}),Object.keys(a).length&&i.push(`<code class="admin-ui-code admin-audit-meta-extra">${w(JSON.stringify(a))}</code>`),!i.length){let l=g[n.source]&&g[n.source].label||n.source||"system";i.push(`<span>${w(String(l))}</span>`)}return i.join(" ")}function b(n){return n==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":n==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function k(){let n=document.querySelector("[data-audit-rows]");if(!n)return;let d=F();if(!d.length){n.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}n.innerHTML=d.map(function(i){let c=C(i),a=I(c),e=String(i.actor||"system"),l=$(i);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${c}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${w(H(i.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${a};box-shadow:0 0 6px ${a}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${b(e)}">${w(e)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${w(String(i.action||i.kind||"\u2014"))}</span>
              ${l?`<span class="admin-ui-target admin-audit-target">\u2192 ${w(String(l))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${N(i)}</div>
          </div>
        </div>`}).join("")}function A(){let n=document.querySelector("[data-audit-summary]");if(!n)return;let d=F().length,i=f.filterActor==="all"?ServerI18n.t("auditAllRoles"):f.filterActor,c=f.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):f.filterSeverity.toUpperCase();n.textContent=ServerI18n.t("auditSummaryLine",{n:d,actor:i,sev:c})}function j(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(n){n.classList.toggle("is-active",n.dataset.auditActorFilter===f.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(n){n.classList.toggle("is-active",n.dataset.auditSeverityFilter===f.filterSeverity)})}async function B(){try{let n=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!n.ok)return;let d=await n.json(),i=Array.isArray(d.events)?d.events.slice():[];i.sort(function(c,a){return Number(a.ts||0)-Number(c.ts||0)}),f.events=i,j(),k(),A()}catch{}}function P(){let n=F();if(!n.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let d=new Blob([JSON.stringify(n,null,2)],{type:"application/json;charset=utf-8"}),i=URL.createObjectURL(d),c=document.createElement("a");c.href=i,c.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),setTimeout(function(){URL.revokeObjectURL(i)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:n.length}),!0)}function m(){let n=document.getElementById(y);n&&n.addEventListener("click",function(d){let i=d.target.closest("[data-audit-actor-filter]");if(i){f.filterActor=i.dataset.auditActorFilter||"all",j(),k(),A();return}let c=d.target.closest("[data-audit-severity-filter]");if(c){let a=c.dataset.auditSeverityFilter||"all";f.filterSeverity=f.filterSeverity===a?"all":a,j(),k(),A();return}if(d.target.closest("[data-audit-export]")){P();return}d.target.closest("[data-audit-refresh]")&&B()})}function r(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(B(),f.refreshTimer||(f.refreshTimer=setInterval(B,3e4))):f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function o(){let n=document.getElementById("settings-grid");!n||document.getElementById(y)||(n.insertAdjacentHTML("beforeend",L()),m(),B(),r(),window.addEventListener("hashchange",r))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&o()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&o()})})()});var Ft=he(()=>{(function(){"use strict";let y="sec-audience-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},g=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],f=20,L={records:[],filter:"all",shown:f,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function H(s){if(!s)return g[0];let u=0;for(let v=0;v<s.length;v++)u=u*31+s.charCodeAt(v)>>>0;return g[u%g.length]}function C(s){if(!s)return"\u2014";let u=typeof s=="number"?s*1e3:new Date(s).getTime();if(!u)return"\u2014";let v=Math.max(0,(Date.now()-u)/1e3);return v<60?Math.floor(v)+"s":v<3600?Math.floor(v/60)+"m":v<86400?Math.floor(v/3600)+"h":Math.floor(v/86400)+"d"}function I(s){return s==="blocked"||s==="high"?"is-danger":s==="mid"?"is-warn":"is-success"}function p(){return`
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
      </div>`}function M(){let s=L.search.trim().toLowerCase(),u=L.records.slice();return s&&(u=u.filter(function(v){return String(v.nickname||"").toLowerCase().indexOf(s)!==-1||String(v.hash||"").toLowerCase().indexOf(s)!==-1})),u.sort(function(v,E){return L.sort==="last_seen"?(Number(E.last_seen)||0)-(Number(v.last_seen)||0):(Number(E.msgs)||0)-(Number(v.msgs)||0)}),L.filter==="all"?u:L.filter==="flagged"?u.filter(function(v){return v.state==="flagged"||v.state==="blocked"}):L.filter==="extension"?u.filter(function(v){return v.fingerprint&&(v.fingerprint.indexOf("slido")===0||v.fingerprint.indexOf("ext_")===0)}):u}function F(){let s=document.querySelector("[data-aud-stats]");if(!s)return;let u=L.records,v=u.length,E=u.filter(function(q){return q.state==="flagged"}).length,T=u.filter(function(q){return q.state==="blocked"}).length,x=u.reduce(function(q,G){return q+(Number(G.msgs)||0)},0),D=u.filter(function(q){let G=q.last_seen;if(!G)return!1;let _=typeof G=="number"?G*1e3:new Date(G).getTime();return(Date.now()-_)/1e3<300}).length;s.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${v}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${D}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${x}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${E}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${T}</div></div>`}function $(){let s=document.querySelector("[data-aud-filters]");if(!s)return;let u=L.records.length,v=L.records.filter(function(E){return E.state==="flagged"||E.state==="blocked"}).length;s.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${L.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:u})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${L.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:v})}</button>`}let S="__anon__";function N(s){let u=(s.nickname||"").trim();return!u||u==="\u533F\u540D"}function b(s){let u=s.hash||s.fingerprint||"";return u?u.length>9?u.slice(0,4)+"\u2026"+u.slice(-4):u:"\u2014"}function k(){let s=[],u=[];return M().forEach(function(v){N(v)?u.push(v):s.push(v)}),u.length&&s.push({_anonGroup:!0,_count:u.length,fingerprint:S,msgs:u.reduce(function(v,E){return v+(Number(E.msgs)||0)},0),blocked:u.reduce(function(v,E){return v+(Number(E.blocked)||0)},0),last_seen:Math.max.apply(null,u.map(function(v){return v.last_seen||0})),state:u.some(function(v){return v.state==="blocked"})?"blocked":"active"}),s}function A(){let s=document.querySelector("[data-aud-list]"),u=document.querySelector("[data-aud-summary]");if(!s)return;let v=k(),E=Math.min(v.length,L.shown);if(u&&(u.textContent=ServerI18n.t("audienceShownOfTotal",{n:E,total:v.length})),v.length===0){s.innerHTML="";let q=window.AdminEmpty.render("audience");q.dataset.emptyKind="audience",s.appendChild(q);return}let T=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,x=v.slice(0,E).map(function(q){let G=q.fingerprint||"\u2014",_=q.state==="blocked",R=q._anonGroup?ServerI18n.t("audienceAnonymous"):(q.nickname||"").trim(),U=q._anonGroup?"?":R.slice(0,1),V=H(G);return`
        <div class="admin-aud-row${L.selectedFp===G?" is-selected":""}" data-aud-row data-aud-fp="${w(G)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${V}">${w(U)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${w(R)}</span>
            ${q._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:q._count})}</span>`:""}
            ${_&&!q._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${q._anonGroup?"\u2014":w(b(q))}</span>
          <span class="col col-msgs">${Number(q.msgs)||0}</span>
          <span class="col col-blocked">${Number(q.blocked)||0}</span>
          <span class="col col-seen">${w(C(q.last_seen))}</span>
          <span class="col col-actions">
            ${q._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${w(G)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),D=v.length>E?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";s.innerHTML=T+x+D}function j(s){return s&&L.records.find(function(u){return u.fingerprint===s})||null}function B(s){if(!s)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let u=[],v=Number(s.msgs)||0,E=s.fingerprint||"";s.state==="blocked"&&u.push(ServerI18n.t("audienceRuleBlocked")),s.state==="flagged"&&u.push(ServerI18n.t("audienceRuleFlagged")),v>=25?u.push(ServerI18n.t("audienceRuleMsgOver",{n:v})):v>=15&&u.push(ServerI18n.t("audienceRuleMsgNear",{n:v}));let T=L.records.filter(function(G){return G.ip&&s.ip&&G.ip===s.ip}).length;T>=3&&u.push(ServerI18n.t("audienceRuleSameIp",{n:T})),(E.indexOf("slido")===0||E.indexOf("ext_")===0)&&u.push(ServerI18n.t("audienceRuleBridge")),(s.nickname==="\u533F\u540D"||!s.nickname)&&u.push(ServerI18n.t("audienceRuleNoNick"));let x="normal",D="var(--hud-lime)",q="NORMAL";return s.state==="blocked"?(x="blocked",D="var(--hud-crimson)",q="BLOCKED"):s.state==="flagged"||v>=25?(x="high",D="var(--hud-crimson)",q="HIGH RISK"):(v>=15||T>=3)&&(x="mid",D="var(--hud-amber)",q="MID"),{level:x,color:D,label:q,rules:u}}async function P(s){L.detailLoading=!0;try{let u=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!u.ok){L.detailMessages=[];return}let v=await u.json(),E=Array.isArray(v.records)?v.records:[],T=Date.now()-300*1e3;L.detailMessages=E.filter(function(x){return(x.fingerprint||"")!==s?!1:(x.timestamp?new Date(x.timestamp).getTime():0)>=T}).slice(0,8)}catch{L.detailMessages=[]}finally{L.detailLoading=!1}}function m(){let s=document.querySelector("[data-aud-detail]");if(!s)return;let u=L.selectedFp;if(!u){s.hidden=!0,s.innerHTML="";return}let v=j(u);if(!v){L.selectedFp=null,s.hidden=!0;return}s.hidden=!1;let E=B(v);s.dataset.riskLevel=E.level;let T=H(u),x=!v.nickname||v.nickname==="\u533F\u540D",D=x?ServerI18n.t("audienceAnonymous"):v.nickname,q=x?"?":D.slice(0,1),G="fp:"+(u||"").slice(0,8),_=E.rules.length?E.rules.map(function(U){return"<li>"+w(U)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",R="";L.detailLoading?R='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":L.detailMessages.length===0?R='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":R=L.detailMessages.map(function(U){let V=U.muted?"MASKED":U.banned?"BLOCKED":"SHOWN",K=U.muted?"var(--hud-amber)":U.banned?"var(--hud-crimson)":"var(--hud-lime)",z=U.timestamp?new Date(U.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+w(z)+'</span><span class="m">'+w(U.text||"")+'</span><span class="s" style="color:'+K+'">'+V+"</span></div>"}).join(""),s.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+I(E.level)+'">'+w(E.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+T+'">'+w(q)+'</span><div><div class="nick">'+w(D)+'</div><div class="fp">'+w(G)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+E.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:E.rules.length})+"</div><ul>"+_+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+R+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+w(u)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+w(u)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(v.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+w(u)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+w(u)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+w(u)+'" data-aud-flagged="'+(v.is_flagged?"true":"false")+'">'+(v.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+w(u)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function r(s){L.selectedFp=s,L.detailMessages=[],m(),P(s).then(m)}async function o(){try{let s=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!s.ok)return;let u=await s.json();L.records=Array.isArray(u.entries)?u.entries:[],L.serverStats=u&&u.stats||null,F(),$(),A(),L.selectedFp&&m()}catch{}}async function n(s,u,v){if(s)try{let E=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:s,flagged:!!u,note:v||""})});if(!E.ok)throw new Error("HTTP "+E.status);window.showToast&&window.showToast(u?ServerI18n.t("audienceToastFlagged",{fp:s.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:s.slice(0,8)}),!0),o()}catch(E){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:E.message||""}),!1)}}async function d(s,u){if(!s||s==="\u2014")return;let v=u??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:s.slice(0,8)}),"")||"");if(v!==null)try{let E=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:s,reason:v})});if(!E.ok)throw new Error("HTTP "+E.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:s.slice(0,8)}),!0),o()}catch(E){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:E.message||""}),!1)}}async function i(s){if(!(!s||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+w(s.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let v=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:s})});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),o()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:v.message||""}),!1)}}async function c(s){if(!(!s||s==="\u2014"))try{let u=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:s,action:"mask",priority:0,enabled:!0})});if(!u.ok)throw new Error("HTTP "+u.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:s.slice(0,8)}),!0),o()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:u.message||""}),!1)}}async function a(s){if(!(!s||s==="\u2014"))try{let u=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!u.ok)throw new Error("HTTP "+u.status);let v=await u.json(),T=(Array.isArray(v.rules)?v.rules:[]).filter(function(D){return D&&D.type==="fingerprint"&&D.pattern===s});if(T.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let x=0;for(let D of T)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:D.rule_id||D.id})}).catch(function(){return{ok:!1}})).ok&&(x+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:x,fp:s.slice(0,8)}),!0),o()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:u.message||""}),!1)}}async function e(s){if(!(!s||s==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+w(s.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let v=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:s})});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:s.slice(0,8)}),!0),o()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:v.message||""}),!1)}}function l(){let s=document.getElementById(y);s&&(s.addEventListener("input",function(u){let v=u.target.closest("[data-aud-search]");v&&(L.search=v.value||"",L.shown=f,A())}),s.addEventListener("change",function(u){let v=u.target.closest("[data-aud-sort]");v&&(L.sort=v.value,A())}),s.addEventListener("click",function(u){let v=u.target.closest("[data-aud-filter]");if(v){L.filter=v.dataset.audFilter,L.shown=f,$(),A();return}let E=u.target.closest("[data-aud-action='ban']");if(E){u.stopPropagation(),e(E.dataset.audFp);return}if(u.target.closest("[data-aud-action='refresh']")){o();return}if(u.target.closest("[data-aud-action='more']")){L.shown+=f,A();return}if(u.target.closest("[data-aud-action='close-detail']")){L.selectedFp=null,m();return}let q=u.target.closest("[data-aud-action='detail-ban']");if(q){e(q.dataset.audFp);return}let G=u.target.closest("[data-aud-action='detail-mask']");if(G){c(G.dataset.audFp);return}let _=u.target.closest("[data-aud-action='detail-safe']");if(_){a(_.dataset.audFp);return}let R=u.target.closest("[data-aud-action='flag']");if(R){u.stopPropagation(),n(R.dataset.audFp,R.dataset.audFlagged!=="true");return}let U=u.target.closest("[data-aud-action='kick']");if(U){u.stopPropagation(),d(U.dataset.audFp);return}let V=u.target.closest("[data-aud-action='unkick']");if(V){u.stopPropagation(),i(V.dataset.audFp);return}let K=u.target.closest("[data-aud-row]");if(!(K&&K.dataset.audFp===S)&&K&&!u.target.closest("button")){r(K.dataset.audFp);return}}))}function h(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(o(),L.refreshTimer||(L.refreshTimer=setInterval(o,15e3))):L.refreshTimer&&(clearInterval(L.refreshTimer),L.refreshTimer=0)}function t(){let s=document.getElementById("settings-grid");!s||document.getElementById(y)||(s.insertAdjacentHTML("beforeend",p()),l(),o(),h(),window.addEventListener("hashchange",h))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&t()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&t()})})()});var Dt=he(()=>{(function(){"use strict";let y=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],w={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},g=2500,f=0,L=0,H=null;function C(){if(H)return H;let $=document.createElement("div");return $.className="admin-konami-hud",$.setAttribute("aria-hidden","true"),$.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild($),H=$,$}function I(){if(f===0){H&&H.classList.remove("is-on");return}let $=C();$.classList.add("is-on");let S=$.querySelector(".admin-konami-hud-keys");S&&(S.innerHTML=y.map((b,k)=>`<span class="admin-konami-hud-key ${k<f?"is-filled":""}">${w[b]}</span>`).join(""));let N=$.querySelector(".admin-konami-hud-progress");if(N){let b=Math.round(f/y.length*100);N.style.width=b+"%"}}function p($){f=0,L&&(clearTimeout(L),L=0),$||I()}function M(){L&&clearTimeout(L),L=setTimeout(()=>p(),g)}async function F(){try{let $=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!$.ok)throw new Error("HTTP "+$.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch($){console.warn("[konami] trigger failed:",$&&$.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",$=>{let S=$.target;if(S&&(S.tagName==="INPUT"||S.tagName==="TEXTAREA"||S.isContentEditable))return;let N=y[f];if(!($.key===N||N==="b"&&$.key.toLowerCase()==="b"||N==="a"&&$.key.toLowerCase()==="a")){f=$.key===y[0]?1:0,I(),f>0?M():L&&(clearTimeout(L),L=0);return}if(f++,I(),f>=y.length){p(!0),F();return}M()}),window.AdminKonami={trigger:F}})()});var Mt=he(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function w(c){return c==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:c==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:c==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function g(){let c=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,a=c?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${c?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${y(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${a}`:""}
                <span id="fontsTotalSize" style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.12em">${ServerI18n.t("fontsTotalPlaceholder")}</span>
              </div>
            </div>
            <div id="adminFontEmptyStateHost"></div>
            ${c?`
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
    `}var f=null,L=[];function H(c,a){var e=document.getElementById("adminFontEmptyStateHost");if(!e)return;if((c||[]).some(t=>t.type==="uploaded")){e.innerHTML="";return}e.innerHTML="";var h=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:a?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var t=document.getElementById("adminFontFileInput");t&&t.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});h.dataset.emptyKind="fonts",e.appendChild(h)}function C(c,a){let e=c.weight||"\u2014",l=c.sizeLabel||"\u2014",h=c.foundry||(c.type==="system"?"System":c.type==="default"?"Google / Noto":"Uploaded"),t=c.format||"\u2014",s=c.status||c.type,u=`font-family: "${y(c.name)}", sans-serif;`,v=w(s),E=[];if(a){if(s!=="default"&&E.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${y(c.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),s!=="default"){let T=s==="enabled"||s==="system",x=T?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");E.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${y(c.name)}" data-enabled="${T?"true":"false"}">${x}</button>`)}c.type==="uploaded"&&(E.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${y(c.name)}" title="${y(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),E.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${y(c.name)}">${y(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${y(c.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${u}" class="truncate">${y(c.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(E.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${E.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${y(h)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${y(e)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${y(l)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${y(t)}</span><div style="text-align:right">${v}</div></div>`}let I=null,p={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function M(){if(I)return I;try{let c=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return c.ok?(I=(await c.json()).presets||{},I):{}}catch{return{}}}function F(c){return!c||!Number.isFinite(c)?"\u2014":c<1024?c+" B":c<1024*1024?(c/1024).toFixed(1)+" KB":(c/(1024*1024)).toFixed(2)+" MB"}async function $(c){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let a=await M();if(!Object.keys(a).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let e=new Set(["cjk_common","latin"]),l="",h=document.createElement("div");h.className="admin-font-subset-modal-body";let t=()=>{let v=Object.keys(a).map(T=>{let x=p[T]||{label:T,glyphs:"\u2014",estSize:"\u2014"},D=x.labelKey?ServerI18n.t(x.labelKey):x.label,q=e.has(T);return`
          <label class="admin-font-subset-chip${q?" is-active":""}" data-subset-preset="${T}">
            <span class="admin-font-subset-chip-check">${q?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${y(D)}</span>
            <span class="admin-font-subset-chip-range">${y(a[T])}</span>
            <span class="admin-font-subset-chip-meta">${x.glyphs} glyphs \xB7 ${x.estSize}</span>
          </label>`}).join("");h.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${y(c)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${v}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${y(l)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,h.querySelectorAll("[data-subset-preset]").forEach(T=>{T.addEventListener("click",x=>{x.preventDefault();let D=T.dataset.subsetPreset;e.has(D)?e.delete(D):e.add(D),t()})});let E=h.querySelector("[data-subset-custom]");E&&E.addEventListener("input",()=>{l=E.value})};if(t(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:h,width:540}))return;let u=[];if(e.forEach(v=>{a[v]&&u.push(a[v])}),l.trim()&&u.push(l.trim()),!u.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await S(c,u.join(","))}async function S(c,a){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:c}),!0);let e=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(c)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:a})}),l=await e.json().catch(()=>({}));if(e.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!e.ok){window.showToast?.(l.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:e.status}),!1);return}let h=l.saved_bytes||0,t=Math.round((l.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:c,before:F(l.original_size),after:F(l.new_size),pct:t}),!0),k()}catch(e){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:e.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function N(c){try{let a=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:c})});if(!a.ok)throw new Error("HTTP "+a.status);f=c,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:c}),!0),k()}catch(a){console.error("[admin-fonts] set default failed:",a),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function b(c,a){try{let e=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(c)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!a})});if(!e.ok)throw new Error("HTTP "+e.status);window.showToast(ServerI18n.t(a?"fontsToggleOffToast":"fontsToggleOnToast",{name:c}),!0),k()}catch(e){console.error("[admin-fonts] toggle failed:",e),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function k(){var c=document.getElementById("adminFontList");if(!c)return;let a=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var e=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!e.ok)throw new Error("HTTP "+e.status);var l=await e.json(),h=l.fonts||[];if(L=h,window.AdminTabs?.setTabCount?.("assets","fonts",h.length||""),H(h,a),h.length===0){c.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,m(h);return}c.innerHTML=h.map(t=>C(t,a)).join(""),m(h),r()}catch(t){console.error("[admin-fonts] fetch failed:",t),c.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,H([],a)}}async function A(c){try{let a=await c.slice(0,4).arrayBuffer(),e=new Uint8Array(a);return e[0]===0&&e[1]===1&&e[2]===0&&e[3]===0?"TTF":e[0]===79&&e[1]===84&&e[2]===84&&e[3]===79?"OTF":e[0]===119&&e[1]===79&&e[2]===70&&e[3]===50?"WOFF2":e[0]===116&&e[1]===114&&e[2]===117&&e[3]===101?"TTF":e[0]===116&&e[1]===116&&e[2]===99&&e[3]===102?"TTC":null}catch{return null}}function j(c,a){let e=document.getElementById("adminFontDropStatus");if(e){if(!c){e.textContent="",e.hidden=!0,e.classList.remove("is-good","is-bad");return}e.hidden=!1,e.textContent=c,e.classList.toggle("is-good",a==="good"),e.classList.toggle("is-bad",a==="bad")}}function B(c){let a=document.getElementById("adminFontUploadError");if(!a)return;if(!c){a.hidden=!0,a.innerHTML="";return}a.hidden=!1,a.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${y(c)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let e=a.querySelector("[data-font-error-retry]");e&&e.addEventListener("click",function(){let l=document.getElementById("adminFontFileInput");l&&l.click()})}async function P(c){if(!c)return;B("");let a=c.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(a)){window.showToast(ServerI18n.t("invalidFileType"),!1),j(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),B(ServerI18n.t("fontsExtNotSupportedFull"));return}if(c.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),j(ServerI18n.t("fontsFileTooLarge"),"bad"),B(ServerI18n.t("fontsFileTooLargeFull"));return}let e=await A(c);if(!e){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),j(ServerI18n.t("fontsMagicInvalid"),"bad"),B(ServerI18n.t("fontsMagicValidationFailed"));return}j(ServerI18n.t("fontsUploadValidated",{magic:e,size:(c.size/1024).toFixed(1)}),"good");try{var l=new FormData;l.append("fontfile",c);var h=await window.csrfFetch("/admin/upload_font",{method:"POST",body:l}),t=await h.json();h.ok?(window.showToast(t.message||ServerI18n.t("fontUploadFallback")),j(ServerI18n.t("fontsUploadedStatus",{filename:c.name}),"good"),B(""),await k()):(window.showToast(t.error||ServerI18n.t("uploadFailed"),!1),j(t.error||ServerI18n.t("uploadFailed"),"bad"),B(t.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(s){console.error("[admin-fonts] upload error:",s),window.showToast(ServerI18n.t("uploadNetworkError"),!1),j(ServerI18n.t("fontsNetworkErrorShort"),"bad"),B(ServerI18n.t("fontsNetworkDisconnected"))}}function m(c){let a=document.getElementById("fontsTotalSize");a&&(a.textContent=ServerI18n.t("fontsTotalCount",{n:c.length}))}function r(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(c=>{c.addEventListener("click",a=>{if(a.target.closest(".admin-font-delete-btn"))return;let e=c.dataset.font,l=document.getElementById("fontsPreviewFamily"),h=document.getElementById("fontsPreviewHeadline"),t=document.getElementById("fontsPreviewLatin"),s=document.getElementById("fontsPreviewCJK");l&&(l.textContent=e);let u=`"${e}", sans-serif`;h&&(h.style.fontFamily=u),t&&(t.style.fontFamily=u),s&&(s.style.fontFamily=u)})})}async function o(){var c=document.getElementById("adminFontFileInput");if(c){var a=c.files&&c.files[0];if(!a){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await P(a),c.value=""}}function n(){let c=document.getElementById("adminFontDrop"),a=document.getElementById("adminFontFileInput");!c||!a||(c.addEventListener("click",e=>{e.target!==a&&a.click()}),c.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),a.click())}),["dragenter","dragover"].forEach(e=>{c.addEventListener(e,l=>{l.preventDefault(),l.stopPropagation(),c.classList.add("is-drag")})}),["dragleave","drop"].forEach(e=>{c.addEventListener(e,l=>{l.preventDefault(),l.stopPropagation(),c.classList.remove("is-drag")})}),c.addEventListener("drop",async e=>{let l=e.dataTransfer&&e.dataTransfer.files;l&&l[0]&&await P(l[0])}))}async function d(c){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",c),confirmLabel:ServerI18n.t("deleteBtn")}))try{var e=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(c),{method:"DELETE"}),l=await e.json();e.ok?(window.showToast(l.message||ServerI18n.t("fontDeleteFallback")),await k()):window.showToast(l.error||ServerI18n.t("deleteFailed"),!1)}catch(h){console.error("[admin-fonts] delete error:",h),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function i(){var c=document.getElementById("settings-grid");if(c){c.insertAdjacentHTML("beforeend",g());var a=document.getElementById("adminFontFileInput");a&&a.addEventListener("change",o),n();var e=document.getElementById("adminFontList");e&&e.addEventListener("click",function(l){var h=l.target.closest(".admin-font-delete-btn");if(h){l.stopPropagation(),d(h.dataset.name);return}var t=l.target.closest(".admin-font-default-btn");if(t){l.stopPropagation(),N(t.dataset.name);return}var s=l.target.closest(".admin-font-toggle-btn");if(s){l.stopPropagation();let v=s.dataset.enabled==="true";b(s.dataset.name,v);return}var u=l.target.closest(".admin-font-subset-btn");u&&(l.stopPropagation(),$(u.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(l=>l.ok?l.json():null).then(l=>{l&&Array.isArray(l.FontFamily)&&(f=l.FontFamily[3]||null)}).catch(()=>{}).finally(k)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&i()});c.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&i()}})})()});var Nt=he(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let w="sec-scheduler",g=5e3,f=null,L=null;function H(i,c,a,e){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${i}">
        <input type="text" placeholder="${p(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${p(c)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${p(a||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${e||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function C(i){var c=i==="active"?"is-success":i==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+c+'" title="'+p(i)+'"></span>'}function I(i){let c=i.state==="paused",a=i.repeat_count===void 0?"\u2014":i.repeat_count===-1?"\u221E":String(i.repeat_count),e=i.repeat_count>0&&typeof i.remaining=="number"?String(i.repeat_count-i.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${p(i.id)}">
        ${C(i.state)}
        <div>
          <div class="admin-scheduler-job-title">#${y(i.id)}</div>
          <div class="admin-scheduler-job-meta">${y(ServerI18n.t("schedulerMessages"))} ${i.messages?i.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${i.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${y(e)}</span>
        <span class="admin-scheduler-job-val">${y(a)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${c?"is-active":"is-warn"}"
            data-job-id="${p(i.id)}" data-action="${c?"resume":"pause"}">
            ${y(ServerI18n.t(c?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${p(i.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function p(i){return y(i)}function M(){let i=document.querySelectorAll("#schedulerMessages [data-msg-index]"),c=[];return i.forEach(function(a){let e=a.querySelector(".scheduler-msg-text").value.trim(),l=a.querySelector(".scheduler-msg-color").value,h=parseInt(a.querySelector(".scheduler-msg-size").value,10)||48;e&&c.push({text:e,color:l,size:h})}),c}function F(i,c,a){let e=document.getElementById("schedulerMessages");if(!e)return;let l=e.children.length;e.insertAdjacentHTML("beforeend",H(l,i||"",c||"#ffffff",a||48))}function $(i){let c=i.closest("[data-msg-index]");c&&c.remove();let a=document.getElementById("schedulerMessages");a&&a.querySelectorAll("[data-msg-index]").forEach(function(e,l){e.dataset.msgIndex=l})}async function S(){let i=M();if(i.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let c=parseInt(document.getElementById("schedulerInterval").value,10);if(!c||c<1||c>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let a=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(a)||a<-1||a>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let e=document.getElementById("schedulerCreateBtn");e&&(e.disabled=!0);try{let l=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:i,interval_sec:c,repeat_count:a})}),h=await l.json();l.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await m()):showToast(h.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(l){console.error("Scheduler create error:",l),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{e&&(e.disabled=!1)}}function N(i){return"msg"}function b(i){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[i]||"\u25C8"}function k(i){return i.next_run_at?new Date(i.next_run_at*1e3).getHours():new Date().getHours()}function A(i){if(i.next_run_at){let c=new Date(i.next_run_at*1e3);return String(c.getHours()).padStart(2,"0")+":"+String(c.getMinutes()).padStart(2,"0")}return"--:--"}function j(i){let c=i.id||"job",a=Array.isArray(i.messages)?i.messages.length:null;return"Job #"+c+(a!=null?" \xB7 "+a+" messages":"")}function B(i){let c=document.querySelector("[data-sch-timeline]");if(!c)return;let a=[],e=new Date().getHours();for(let h=0;h<24;h++){let t=h>=Math.max(0,e-1)&&h<=Math.min(23,e+2);a.push('<div class="admin-sch-timeline-hour'+(t?" is-peak":"")+'">'+String(h).padStart(2,"0")+"</div>")}let l=(i||[]).map(function(h){let t=N(h),s=b(t),u=h.state!=="paused";return'<div class="admin-sch-timeline-row'+(u?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+y(A(h))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+t+'">'+s+'</span><span class="admin-sch-evt-desc">'+y(j(h))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(u?" is-on":"")+'">'+ServerI18n.t(u?"uiOn":"uiOff")+"</span></div></div>"}).join("");c.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+a.join("")+"</div></div>"+(l||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+y(ServerI18n.t("noActiveJobs"))+"</div>"))}function P(i){let c=document.querySelector("[data-sch-calendar]");if(!c)return;let a=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],e=new Date,l=(e.getDay()+6)%7,h=new Date(e);h.setDate(e.getDate()-l);let t=a.map(function(u,v){let E=new Date(h);return E.setDate(h.getDate()+v),'<div class="admin-sch-calendar-day-head'+(v===l?" is-today":"")+'">'+y(u)+'<span class="date">'+E.getDate()+"</span></div>"}).join(""),s=[0,1,2,3,4,5,6].map(function(u){return'<div class="admin-sch-calendar-cell">'+(u===l?(i||[]).slice(0,5).map(function(E){let T=N(E),x=b(T);return'<span class="admin-sch-cal-chip is-'+T+'">'+y(A(E))+" "+x+"</span>"}).join(""):"")+"</div>"}).join("");c.innerHTML='<div class="admin-sch-calendar-head">'+t+'</div><div class="admin-sch-calendar-body">'+s+"</div>"}async function m(){let i=document.getElementById("schedulerJobsList"),c=document.getElementById("schedulerJobsCount");if(i)try{let a=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!a.ok){i.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",c&&(c.textContent="\u2014");return}let e=await a.json();if(!Array.isArray(e.jobs)){i.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",c&&(c.textContent="\u2014");return}c&&(c.textContent=ServerI18n.t("schItemCount",{n:e.jobs.length})),B(e.jobs),P(e.jobs);let l=document.querySelector("[data-sch-meta]");if(l){let h=new Date().toISOString().slice(0,10);l.textContent=ServerI18n.t("schTodayMeta",{date:h,n:e.jobs.length})}if(e.jobs.length===0){i.innerHTML="";let h=window.AdminEmpty.render("scheduler");h.dataset.emptyKind="scheduler",i.appendChild(h);return}i.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+y(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+y(ServerI18n.t("schColInterval"))+"</span><span>"+y(ServerI18n.t("schColSent"))+"</span><span>"+y(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+e.jobs.map(I).join("")}catch(a){console.error("Scheduler fetch error:",a),i.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadJobsError"))+"</div>"}}async function r(i,c){try{let a=await csrfFetch("/admin/scheduler/"+encodeURIComponent(c),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:i})}),e=await a.json();a.ok?(showToast(c==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await m()):showToast(e.error||ServerI18n.t("actionFailed"),!1)}catch(a){console.error("Scheduler toggle error:",a),showToast(ServerI18n.t("actionFailed"),!1)}}async function o(i){try{let c=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:i})}),a=await c.json();c.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await m()):showToast(a.error||ServerI18n.t("cancelFailed"),!1)}catch(c){console.error("Scheduler cancel error:",c),showToast(ServerI18n.t("cancelFailed"),!1)}}function n(){let i=document.getElementById("advanced-grid")||document.getElementById("settings-grid");if(!i)return;i.insertAdjacentHTML("beforeend",`
      <div id="${w}" class="admin-scheduler-page hud-page-stack lg:col-span-2">
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
    `);let c=document.querySelectorAll("[data-sch-view]");c.forEach(t=>{t.addEventListener("click",()=>{let s=t.dataset.schView;c.forEach(E=>{E.classList.toggle("is-active",E===t),E.setAttribute("aria-selected",E===t?"true":"false")});let u=document.querySelector("[data-sch-timeline]"),v=document.querySelector("[data-sch-calendar]");u&&(u.hidden=s!=="timeline"),v&&(v.hidden=s!=="calendar")})}),F("","#ffffff",48);let a=document.getElementById("schedulerMessages");a&&a.addEventListener("click",function(t){let s=t.target.closest(".scheduler-remove-msg");s&&$(s)});let e=document.getElementById("schedulerAddMsg");e&&e.addEventListener("click",function(){F("","#ffffff",48)});let l=document.getElementById("schedulerCreateBtn");l&&l.addEventListener("click",S);let h=document.getElementById("schedulerJobsList");h&&h.addEventListener("click",function(t){let s=t.target.closest(".scheduler-job-toggle");if(s){r(s.dataset.jobId,s.dataset.action);return}let u=t.target.closest(".scheduler-job-cancel");u&&o(u.dataset.jobId)}),f&&(clearInterval(f),f=null),L||(L=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(w)},intervalMs:g,tick:m}),window.addEventListener("beforeunload",function(){L&&(L(),L=null)}))}function d(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let i=!1;new MutationObserver(function(){if((document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(w)&&!i){i=!0;try{n()}finally{i=!1}}}).observe(document.body,{childList:!0,subtree:!0}),(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(w)&&n()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var Pt=he(()=>{(function(){"use strict";let y="admin-security-v2-page";var w=window.AdminUtils.escapeHtml;let g=null,f=!1,L=!1,H=0;function C(){let t=s=>ServerI18n.t(s);return`
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
      </div>`}function I(t){if(!t)return 0;let s=0;t.length>=8&&s++,t.length>=12&&s++;let u=(/[a-z]/.test(t)?1:0)+(/[A-Z]/.test(t)?1:0)+(/\d/.test(t)?1:0)+(/[^\w]/.test(t)?1:0);return u>=2&&s++,u>=3&&s++,Math.min(4,s)}function p(t){let s=document.getElementById("sec2-pw-meter"),u=document.getElementById("sec2-pw-label");if(!s||!u)return;let v=I(t),E=[0,25,50,75,100],T=["","is-bad","is-warn","is-warn","is-good"],x=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];s.style.width=E[v]+"%",s.className=T[v],u.textContent=x[v]}async function M(t){t.preventDefault();let s=document.getElementById("sec2-pw-current").value,u=document.getElementById("sec2-pw-new").value,v=document.getElementById("sec2-pw-confirm").value;if(!s||!u||!v){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(u.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(u!==v){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let E=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:s,new_password:u,confirm_password:v})}),T=await E.json().catch(()=>({}));E.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),p(""),T.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(T.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(E){console.error("Password change error:",E),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function F(){let t=++H,s=document.getElementById("sec2-wsa-status");L=!0,$(!0),s.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let u=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!u.ok)throw new Error(u.status);let v=await u.json();if(t!==H)return!1;g={require_token:!!v.require_token,token:v.token||""},document.getElementById("sec2-wsa-toggle").checked=!!v.require_token,document.getElementById("sec2-wsa-token").value=v.token||"",s.textContent=v.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),s.className="admin-ui-chip admin-sec-status-chip "+(v.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,b();let E=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=E?new Date(parseInt(E,10)).toLocaleString():"\u2014",!0}catch{return t!==H||(g=null,$(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,s.textContent=ServerI18n.t("security2LoadFailed"),s.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{t===H&&(L=!1,$(f||!g),f||b())}}function $(t){["toggle","token","save","rotate","copy","reveal"].forEach(s=>{document.getElementById("sec2-wsa-"+s).disabled=t}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",t)}function S(){return f||L||!g?!1:(f=!0,++H,$(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function N(){if(f=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,$(L||!g),g&&!L){let t=document.getElementById("sec2-wsa-status");t.textContent=ServerI18n.t(g.require_token?"security2StatusEnabled":"security2StatusDisabled"),t.className="admin-ui-chip admin-sec-status-chip "+(g.require_token?"is-active":""),b()}}function b(){if(f||L||!g)return;document.getElementById("sec2-wsa-disabled-warning").hidden=g.require_token;let t=document.getElementById("sec2-wsa-toggle").checked!==g.require_token||document.getElementById("sec2-wsa-token").value.trim()!==g.token;document.getElementById("sec2-wsa-draft-hint").hidden=!t}function k(t){return String(t||"").split(/\n+/).map(s=>s.trim()).filter(Boolean)}function A(t){return String(t||"").split(",").map(s=>s.trim().toUpperCase()).filter(Boolean)}function j(t,s){let u=document.getElementById(t);u&&(u.textContent=s==null||s===""?"\u2014":String(s))}async function B(){try{let t=await fetch("/admin/security/settings",{credentials:"same-origin"}),s=await t.json().catch(()=>({}));if(!t.ok)throw new Error(s.error||t.status);let u=s.ip_allowlist||{},v=s.cors||{},E=s.tls||{},T=!!u.enabled,x=Array.isArray(u.entries)?u.entries:[],D=document.getElementById("sec2-ip-dot"),q=document.getElementById("sec2-ip-status-chip"),G=document.getElementById("sec2-ip-toggle"),_=document.getElementById("sec2-ip-entries");D&&(D.classList.toggle("is-lime",T),D.classList.toggle("is-amber",!T)),q&&(q.textContent=T?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),q.className="admin-ui-chip admin-sec-status-chip "+(T?"is-active":"is-warn")),G&&(G.checked=T),_&&(_.value=x.join(`
`)),j("sec2-ip-current",u.current_ip||"\u2014"),j("sec2-ip-status-line",T?ServerI18n.t("security2IpStatusEnabled",{n:x.length}):ServerI18n.t("security2IpStatusDisabled"));let R=Array.isArray(v.origins)?v.origins:["*"],U=Array.isArray(v.methods)?v.methods:[],V=document.getElementById("sec2-cors-origins"),K=document.getElementById("sec2-cors-credentials"),z=document.getElementById("sec2-cors-methods"),ae=document.getElementById("sec2-cors-cred-dot");V&&(V.value=R.join(`
`)),K&&(K.checked=!!v.supports_credentials),z&&(z.value=U.join(", ")),ae&&(ae.classList.toggle("is-lime",!v.supports_credentials),ae.classList.toggle("is-amber",!!v.supports_credentials)),j("sec2-cors-origins-line",R.join(", ")),j("sec2-cors-credentials-line",v.supports_credentials?"true":"false"),j("sec2-cors-methods-line",U.join(", "));let ie=E.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:E.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");j("sec2-hsts-status",ie)}catch(t){console.error("Security settings load error:",t);let s=document.getElementById("sec2-ip-status-chip");s&&(s.textContent=ServerI18n.t("security2LoadFailed"),s.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function P(t){let s={};if(t==="ip")s.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:k(document.getElementById("sec2-ip-entries")?.value||"")};else if(t==="cors"){let u=k(document.getElementById("sec2-cors-origins")?.value||"");s.cors={origins:u.length?u:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:A(document.getElementById("sec2-cors-methods")?.value||"")}}try{let u=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),v=await u.json().catch(()=>({}));if(!u.ok){window.showToast&&showToast(v.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await B()}catch(u){console.error("Security settings save error:",u),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function m(){if(f||L||!g)return;let t=document.getElementById("sec2-wsa-toggle").checked,s=document.getElementById("sec2-wsa-token").value.trim();if(t&&!s){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(S())try{let u=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:t,token:s})}),v=await u.json().catch(()=>({}));u.ok?await F()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(v.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{N()}}async function r(){if(!(f||L||!g||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&S())try{let s=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),u=await s.json().catch(()=>({}));if(s.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await F()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(u.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{N()}}function o(){let t=document.getElementById("sec2-wsa-token").value;if(!t){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function n(){let t=document.getElementById("sec2-wsa-token");t.type=t.type==="password"?"text":"password";let s=t.type==="text",u=document.getElementById("sec2-wsa-reveal");u.setAttribute("aria-pressed",String(s)),u.textContent=ServerI18n.t(s?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),u.setAttribute("aria-label",u.textContent)}async function d(t){if(t==="reset-ws"&&(f||L||!g))return;let s={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:v=>ServerI18n.t("security2ToastApiTokensRevoked",{n:v.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[t];if(!(!s||!await window.HudConfirm?.open({icon:"\u26A0",title:s.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:s.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:s.severity||"warn",body:s.confirm,confirmLabel:s.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(t==="reset-ws"&&!S()))try{let v=await window.csrfFetch(s.url,{method:"POST"}),E=await v.json().catch(()=>({}));if(!v.ok){window.showToast&&showToast(E.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(t==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await F())return}window.showToast&&showToast(s.ok(E),!0)}catch(v){console.error("Security danger action error:",v),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{t==="reset-ws"&&N()}}function i(){let t=document.getElementById("sec2-session-self-line");if(t){let v=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),E=navigator.platform||navigator.userAgentData?.platform||"",T=v?v[0].split("/")[0]:"Browser";t.textContent=ServerI18n.t("security2SessionSelfLine",{browser:T,platform:E})}let s=document.getElementById("sec2-tls-dot"),u=document.getElementById("sec2-tls-status");if(s&&u){let v=location.protocol==="https:";s.classList.add(v?"is-lime":"is-crimson"),u.textContent=v?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function c(){let t=document.getElementById("sec2-pw-form");t&&t.addEventListener("submit",M);let s=document.getElementById("sec2-pw-new");s&&s.addEventListener("input",u=>p(u.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",m),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",r),document.getElementById("sec2-wsa-copy")?.addEventListener("click",o),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",n),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",b),document.getElementById("sec2-wsa-token")?.addEventListener("input",b),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>P("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>P("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(u=>{u.addEventListener("click",()=>{let v=document.querySelector(`[data-sec-disclosure="${u.dataset.secDisclose}"]`);v&&(v.hidden=!v.hidden,u.setAttribute("aria-expanded",v.hidden?"false":"true"),v.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(u=>{u.dataset.secBound!=="1"&&(u.dataset.secBound="1",u.addEventListener("click",()=>d(u.dataset.secDanger)))}),i(),F(),B()}function a(){}function e(){let t=document.querySelector(".admin-dash-grid"),s=document.getElementById(y);if(!t||!s)return;let u=t.dataset.activeRoute||"live",v=t.dataset.activeLeaf||u;s.style.display=u==="security"||u==="system"&&v==="security"?"":"none"}function l(){let t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("beforeend",C()),c(),e())}function h(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let t=null;function s(){let v=document.querySelector(".admin-dash-grid");!v||t||(t=new MutationObserver(e),t.observe(v,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?l():void 0,s(),e()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",e),document.addEventListener("admin-panel-rendered",()=>{l(),s(),e()}),s(),l()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h()})()});var Rt=he(()=>{(function(){"use strict";let y="admin-backup-v2-page";var w=window.AdminUtils.escapeHtml;function g(){let i=c=>ServerI18n.t(c);return`
      <div id="${y}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${i("backupPageTitle")}</h2>
          <p class="admin-ui-page-note">${i("backupPageNote")}</p>
          <!-- 2026-09-07\uFF1A\u642C\u56DE\u9801\u9996\u88E1\u3002\u9801\u9996\u88AB\u4F75\u9032 topbar \u6642\uFF0Cshell \u7684
               [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB\uFF08\u898B admin.js \u7684
               _dedupSectionTitles\uFF09\uFF0C\u4E0D\u6703\u518D\u8DDF\u8457\u6D88\u5931\u3002 -->
          <div class="admin-ui-inline-toolbar admin-ui-page-actions">
            <button type="button" id="bk2-pack-export" class="admin-ui-action is-primary">${i("backupPackExportBtn")}</button>
          </div>
        </div>

        <div class="admin-ui-group-label">${i("backupGroupDownload")}</div>
        <div class="admin-ui-group" data-zone="export">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("backupSecFullState")}
              <span class="sub" id="bk2-pack-summary">${i("backupCalculatingSize")}</span>
              <span class="sub" id="bk2-pack-detail">${i("backupPackContentList")}</span>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("backupSecSettingsSnap")}
              <span class="sub">${i("backupSettingsSnapshotDesc")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-settings-download" class="admin-ui-action is-primary">${i("backupDownloadBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("backupSecAssetPack")}
              <span class="sub" id="bk2-assets-summary">${i("backupCalculatingAssetSize")}</span>
              <span class="sub" id="bk2-assets-detail">${i("backupAssetContentList")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-assets-export" class="admin-ui-action is-primary">${i("backupAssetsExportBtn")}</button>
            </span>
          </div>

        </div>

        <div class="admin-ui-group-label">${i("backupGroupRestore")}</div>
        <div class="admin-ui-group" data-zone="restore">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("backupSecRestoreSettings")}
              <span class="sub">${i("backupSettingsRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-settings-upload" type="file" accept="application/json,.json" class="admin-ui-input" />
              <button type="button" id="bk2-settings-dryrun" class="admin-ui-action">${i("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-settings-apply" class="admin-ui-danger-btn" disabled title="${i("backupApplyDisabledTitle")}">${i("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-settings-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("backupSecRestoreFull")}
              <span class="sub">${i("backupFullPackRestoreNote")}</span>
              <span class="sub">${i("backupRestoreBeforeApplyHint")}</span>
            </span>
            <span class="val">
              <input id="bk2-pack-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-pack-dryrun" class="admin-ui-action">${i("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-pack-apply" class="admin-ui-danger-btn" disabled title="${i("backupApplyDisabledTitle")}">${i("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-pack-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("backupSecRestoreAssets")}
              <span class="sub">${i("backupAssetRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-assets-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-assets-dryrun" class="admin-ui-action">${i("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-assets-apply" class="admin-ui-danger-btn" disabled title="${i("backupApplyDisabledTitle")}">${i("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-assets-diff" class="admin-backup-diff" hidden></pre></div>
        </div>

        <div class="admin-ui-danger-label">${i("backupGroupDanger")}</div>
        <div class="admin-ui-group is-danger" data-zone="danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("backupSecClearHistory")}
              <span class="sub">${i("backupClearHistoryDesc")}</span>
            </span>
            <span class="val">
              <select id="bk2-clear-scope" class="admin-ui-select">
                <option value="all" selected>${i("backupClearScopeAll")}</option>
              </select>
              <button type="button" id="bk2-clear-history" class="admin-ui-danger-btn">${i("backupClearBtn")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("backupSecFactoryReset")}
              <span class="sub">${i("backupFactoryResetDesc")}</span>
            </span>
            <span class="val">
              <input id="bk2-factory-confirm" type="text" class="admin-ui-input" placeholder="reset" autocomplete="off" spellcheck="false" />
              <button type="button" id="bk2-factory-reset" class="admin-ui-danger-btn" disabled>${i("backupFactoryResetBtn")}\u2026</button>
            </span>
          </div>
        </div>
      </div>`}async function f(){try{let i=await fetch("/get_settings",{credentials:"same-origin"});if(!i.ok)throw new Error(i.status);let c=await i.json(),a=["password","token","secret","hash"],e={};Object.keys(c||{}).forEach(u=>{a.some(v=>u.toLowerCase().includes(v))||(e[u]=c[u])});let l=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:e},null,2)],{type:"application/json"}),h=URL.createObjectURL(l),t=new Date().toISOString().replace(/[:.]/g,"-"),s=document.createElement("a");s.href=h,s.download="danmu-settings-"+t+".json",document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(h),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(i){console.error("Settings snapshot error:",i),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let L=null;function H(){L=null;let i=document.getElementById("bk2-settings-apply");i&&(i.disabled=!0,i.title=ServerI18n.t("backupApplyDisabledTitle"))}async function C(){let i=document.getElementById("bk2-settings-upload"),c=document.getElementById("bk2-settings-diff"),a=document.getElementById("bk2-settings-apply"),e=i&&i.files&&i.files[0];if(!e){H(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let l=await e.text(),h=JSON.parse(l),t=h.settings||h;if(!t||typeof t!="object"||Array.isArray(t))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let s=await fetch("/get_settings",{credentials:"same-origin"}),u=s.ok?await s.json():{},v=[];new Set([...Object.keys(u),...Object.keys(t)]).forEach(T=>{let x=JSON.stringify(u[T]),D=JSON.stringify(t[T]);x!==D&&(x===void 0?v.push("+ "+T+": "+D):D===void 0?v.push("- "+T+": "+x):v.push("~ "+T+": "+x+" \u2192 "+D))}),c.textContent=v.length?v.join(`
`):ServerI18n.t("backupNoDiff"),c.hidden=!1,L=t,a&&(a.disabled=!1,a.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:v.length}),!0)}catch(l){console.error("Dry-run error:",l),H(),c.textContent=ServerI18n.t("backupParseFailedDetail",{msg:l&&l.message?l.message:String(l)}),c.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function I(){let i=document.getElementById("bk2-settings-diff"),c=document.getElementById("bk2-settings-apply");if(!L){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"warn",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let e=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:L})}),l=await e.json().catch(()=>({}));if(!e.ok){i&&(i.hidden=!1,i.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(l.details||l,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}i&&(i.hidden=!1,i.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(l.applied||[]).length+" settings"),L=null,c&&(c.disabled=!0,c.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(e){i&&(i.hidden=!1,i.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:e&&e.message?e.message:String(e)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function p(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function M(){let i=document.getElementById("bk2-factory-confirm"),c=document.getElementById("bk2-factory-reset");!i||!c||(i.addEventListener("input",()=>{let a=i.value.trim()==="reset";c.classList.toggle("is-ready",a),c.disabled=!a}),c.addEventListener("click",F))}async function F(){let i=document.getElementById("bk2-factory-confirm"),c=document.getElementById("bk2-factory-reset");if((i?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{c&&(c.disabled=!0);let e=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),l=await e.json().catch(()=>({}));if(!e.ok||!l.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),c&&(c.disabled=!1);return}i&&(i.value=""),c&&(c.classList.remove("is-ready"),c.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),b()}catch{c&&(c.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function $(){document.getElementById("bk2-settings-download")?.addEventListener("click",f),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",C),document.getElementById("bk2-settings-apply")?.addEventListener("click",I),document.getElementById("bk2-clear-history")?.addEventListener("click",p),document.getElementById("bk2-pack-export")?.addEventListener("click",k),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",B),document.getElementById("bk2-pack-apply")?.addEventListener("click",P),document.getElementById("bk2-assets-export")?.addEventListener("click",j),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",m),document.getElementById("bk2-assets-apply")?.addEventListener("click",r),M(),b(),A()}let S=null,N=null;async function b(){let i=document.getElementById("bk2-pack-summary");if(i)try{let c=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!c.ok){i.textContent=ServerI18n.t("backupPreviewUnavailable");return}let a=await c.json(),e=(a.total_bytes/(1024*1024)).toFixed(2);i.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:a.file_count||0,mb:e})}catch{i.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function k(){window.location.href="/admin/backup/export",window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function A(){let i=document.getElementById("bk2-assets-summary");if(i)try{let c=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!c.ok){i.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let a=await c.json(),e=(a.total_bytes/(1024*1024)).toFixed(2);i.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:a.file_count||0,mb:e})}catch{i.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function j(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}async function B(){let c=document.getElementById("bk2-pack-upload")?.files?.[0];if(!c){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(c.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let a=new FormData;a.append("file",c);let e=document.getElementById("bk2-pack-diff"),l=document.getElementById("bk2-pack-apply");try{let h=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:a}),t=await h.json().catch(()=>({}));if(!h.ok||!t.ok){e&&(e.hidden=!1,e.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(t.errors||t,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),l&&(l.disabled=!0),S=null;return}if(e){e.hidden=!1;let s=[],u=t.manifest||{};s.push("manifest version: "+(u.version||"?")),s.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),s.push(""),s.push("Will write "+(t.members?.length||0)+" files:"),(t.members||[]).forEach(v=>{s.push("  "+v.label+"/"+v.path.split("/").slice(1).join("/")+" ("+(v.size||0)+" B)")}),t.skipped?.length&&(s.push(""),s.push("Skipped "+t.skipped.length+" entries:"),t.skipped.forEach(v=>s.push("  "+v.path+" \u2014 "+v.reason))),e.textContent=s.join(`
`)}S=c,l&&(l.disabled=!1,l.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:t.members?.length||0}),!0)}catch(h){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:h.message||""}),!1)}}async function P(){if(!S){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let c=new FormData;c.append("file",S);try{let e=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:c})).json().catch(()=>({})),l=document.getElementById("bk2-pack-diff");if(l){l.hidden=!1;let h=[];e.ok?(h.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),h.push(""),h.push("Applied "+(e.applied||0)+" files"),e.skipped?.length&&h.push("Skipped "+e.skipped.length+" (see above)")):(h.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),h.push(JSON.stringify(e.errors||e,null,2))),l.textContent=h.join(`
`)}if(e.ok){window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint",{n:e.applied}),!0),S=null;let h=document.getElementById("bk2-pack-apply");h&&(h.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(a){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:a.message||""}),!1)}}async function m(){let c=document.getElementById("bk2-assets-upload")?.files?.[0];if(!c){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(c.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let a=new FormData;a.append("file",c);let e=document.getElementById("bk2-assets-diff"),l=document.getElementById("bk2-assets-apply");try{let h=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:a}),t=await h.json().catch(()=>({}));if(!h.ok||!t.ok){e&&(e.hidden=!1,e.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(t.errors||t,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),l&&(l.disabled=!0),N=null;return}if(e){e.hidden=!1;let s=[],u=t.manifest||{};s.push("manifest version: "+(u.version||"?")),s.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),s.push(""),s.push("Will write "+(t.members?.length||0)+" asset files:"),(t.members||[]).forEach(v=>{s.push("  "+v.path+" ("+(v.size||0)+" B)")}),t.skipped?.length&&(s.push(""),s.push("Skipped "+t.skipped.length+" entries:"),t.skipped.forEach(v=>s.push("  "+v.path+" \u2014 "+v.reason))),e.textContent=s.join(`
`)}N=c,l&&(l.disabled=!1,l.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:t.members?.length||0}),!0)}catch(h){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:h.message||""}),!1)}}async function r(){if(!N){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"warn",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let c=new FormData;c.append("file",N);try{let e=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:c})).json().catch(()=>({})),l=document.getElementById("bk2-assets-diff");if(l){l.hidden=!1;let h=[];e.ok?(h.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),h.push(""),h.push("Applied "+(e.applied||0)+" files"),e.skipped?.length&&h.push("Skipped "+e.skipped.length+" (see above)")):(h.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),h.push(JSON.stringify(e.errors||e,null,2))),l.textContent=h.join(`
`)}if(e.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:e.applied}),!0),N=null;let h=document.getElementById("bk2-assets-apply");h&&(h.disabled=!0),A()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(a){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:a.message||""}),!1)}}function o(){let i=document.querySelector(".admin-dash-grid"),c=document.getElementById(y);if(!i||!c)return;let a=i.dataset.activeLeaf||"dashboard";c.style.display=a==="backup"?"":"none"}function n(){let i=document.getElementById("settings-grid");!i||document.getElementById(y)||(i.insertAdjacentHTML("beforeend",g()),$(),o())}function d(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&n(),o()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",o),document.addEventListener("admin-panel-rendered",()=>{n(),o()}),n()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var Ot=he(()=>{(function(){"use strict";let y="admin-broadcast-v2-page",w="/admin/broadcast/status",g="/admin/broadcast/toggle",f={mode:"live",started_at:null,total_messages:0,queue_size:0};function L(t){try{window.dispatchEvent(new CustomEvent("danmu-broadcast-changed",{detail:t}))}catch{}}function H(){return{mode:f.mode,started_at:typeof f.started_at=="number"?f.started_at*1e3:null}}let C=null;async function I(){try{let t=await fetch(w,{credentials:"same-origin"});if(!t.ok)return;let s=await t.json();s&&(s.mode==="live"||s.mode==="standby")&&(C=s.session||null,f=s,L(H()))}catch{}}async function p(t){try{let s=await window.csrfFetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:t})});if(!s.ok){let v=await s.json().catch(()=>({}));throw new Error(v&&v.error?v.error:`HTTP ${s.status}`)}return f=await s.json(),L(H()),!0}catch(s){return console.warn("[admin-broadcast] toggle failed:",s),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:s&&s.message||""}),!1),!1}}function M(t){(!Number.isFinite(t)||t<0)&&(t=0);let s=Math.floor(t/1e3),u=String(Math.floor(s/3600)).padStart(2,"0"),v=String(Math.floor(s%3600/60)).padStart(2,"0"),E=String(s%60).padStart(2,"0");return`${u}:${v}:${E}`}function F(){let t=C||{};return t.status==="live"||t.state==="active"}function $(){let t=C||{};return t.status==="ended"||t.state==="ended"}function S(){let t=f.mode||"standby";return $()?"ended":t==="live"?"live":F()?"paused":"standby"}function N(){return`
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
      </div>`}let b=0,k=0,A=0,j=0,B=0;async function P(){try{let t=await fetch("/admin/metrics",{credentials:"same-origin"});if(!t.ok)return;b=(await t.json()).ws_clients||0}catch{}try{let t=await fetch("/admin/fingerprints?limit=1",{credentials:"same-origin"});if(t.ok){let s=await t.json();typeof s.total=="number"&&(k=s.total)}}catch{}}let m={standby:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 OFF"},live:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 ON"},paused:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 PAUSED"},ended:{titleKey:"broadcastEndedTitle",en:"SESSION ENDED"}},r={standby:ServerI18n.t("uiDisplayOff"),live:ServerI18n.t("uiDisplayOn"),paused:"DESKTOP PAUSED",ended:"SESSION ENDED"};function o(){let t=document.getElementById(y);if(!t)return;let s=S(),u=s==="live",v=s==="paused",E=s==="ended",T=s==="standby";t.dataset.bcState=s;let x=t.querySelector("[data-bc-title]"),D=t.querySelector("[data-bc-en]");if(x&&(x.textContent=ServerI18n.t(m[s].titleKey)),D){let Z=u&&f.started_at?Date.now()/1e3-f.started_at:0;D.textContent=u?`DESKTOP \xB7 ON \xB7 ${M(Z*1e3)}`:E&&C?.ended_at?`SESSION ENDED \xB7 ${new Date(C.ended_at*1e3).toISOString().slice(0,10)}`:m[s].en}let q=t.querySelector("[data-bc-body]"),G=t.querySelector("[data-bc-ended]");q&&G&&(q.hidden=E,G.hidden=!E);let _=t.querySelector("[data-bc-statedot]"),R=t.querySelector("[data-bc-statelabel]"),U=t.querySelector("[data-bc-elapsed]"),V=t.querySelector("[data-bc-sched]");if(_&&(_.dataset.state=s),R&&(R.textContent=r[s]||r.standby,R.dataset.state=s),U){let Z=u&&f.started_at?Date.now()-f.started_at*1e3:0;U.textContent=M(Z),U.hidden=!u}if(V){let Z=C?.scheduled_at;if(T&&typeof Z=="number"&&Z>Date.now()/1e3){let le=Math.max(0,Z-Date.now()/1e3),ce=String(Math.floor(le/60)).padStart(2,"0"),we=String(Math.floor(le%60)).padStart(2,"0"),Ie=new Date(Z*1e3),ke=`${String(Ie.getHours()).padStart(2,"0")}:${String(Ie.getMinutes()).padStart(2,"0")}`;V.textContent=ServerI18n.t("broadcastSchedCountdown",{time:ke,mm:ce,ss:we}),V.hidden=!1}else V.hidden=!0}let K=f.total_messages||0,z=f.fire_count||K,ae=f.started_at&&(u||v)?Date.now()/1e3-f.started_at:0,ie=T?"\u2014":M(ae*1e3).slice(3),W=(Z,le)=>{let ce=t.querySelector(Z);ce&&(ce.textContent=le)};W("[data-bc-stat-elapsed]",T?"\u2014":ie),W("[data-bc-stat-msgs]",T?"0":K.toLocaleString()),W("[data-bc-stat-fp]",T?"0":k.toLocaleString()),W("[data-bc-stat-fire]",T?"0":z.toLocaleString());let X=t.querySelector("[data-bc-session-ctx]");if(X){let Z=C||{},le=!!(Z.id||Z.name);if(X.hidden=!le,le){let ce=t.querySelector("[data-bc-session-id]"),we=t.querySelector("[data-bc-session-started]"),Ie=t.querySelector("[data-bc-session-window]");if(ce&&(ce.textContent=Z.name||Z.id||"\u2014"),we){let ke=Z.started_at;if(typeof ke=="number"){let te=new Date(ke*1e3),oe=de=>String(de).padStart(2,"0");we.textContent=`Started \xB7 ${oe(te.getHours())}:${oe(te.getMinutes())}:${oe(te.getSeconds())}`}else we.textContent="Started \xB7 \u2014"}if(Ie){let ke=Z.started_at;if(typeof ke=="number"){let te=Date.now()-ke*1e3;Ie.textContent=`Window \xB7 ${M(te).slice(3)}`}else Ie.textContent="Window \xB7 \u2014"}}}let ee=t.querySelector("[data-bc-big]");if(ee)if(u){let Z=F();ee.className="admin-bc-v4__big admin-bc-v5__big is-on",ee.textContent=Z?ServerI18n.t("broadcastBigPause"):ServerI18n.t("broadcastBigStop")}else v?(ee.className="admin-bc-v4__big admin-bc-v5__big is-resume",ee.textContent=ServerI18n.t("broadcastBigResume")):(ee.className="admin-bc-v4__big admin-bc-v5__big is-off",ee.textContent=ServerI18n.t("broadcastBigStart"));let se=t.querySelector("[data-bc-confirm-hint]");if(se&&(se.hidden=!(u&&!F())),t.querySelectorAll("[data-bc-clear]").forEach(Z=>{Z.disabled=T||E}),E){let Z=C||{},le=Z.duration_sec?M(Z.duration_sec*1e3).slice(3):"\u2014";W("[data-bc-end-dur]",le),W("[data-bc-end-msgs]",String(Z.total_messages||K||"\u2014")),W("[data-bc-end-fp]",String(Z.unique_fp||k||"\u2014")),W("[data-bc-end-fire]",String(Z.fire_count||z||"\u2014"))}}async function n(){let t=S();if(t==="standby")await p("live")&&window.showToast&&showToast(ServerI18n.t("broadcastToastSwitchedLive"),!0);else if(t==="paused")await p("live")&&window.showToast&&showToast(ServerI18n.t("broadcastToastResumed"),!0);else if(t==="live"){if(F()){await p("standby")&&window.showToast&&showToast(ServerI18n.t("broadcastToastPaused"),!0),o();return}let u=f.started_at?Date.now()-f.started_at*1e3:0,v=M(u),E=f.total_messages||0,T=k.toLocaleString();if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("broadcastStopLabel"),subtitle:ServerI18n.t("cfmSubStopDisplay"),severity:"warn",body:`
              <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                ${ServerI18n.t("broadcastStopBodyDesc")}
              </div>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:10px 12px;margin-top:12px;background:var(--hud-bg2, #182239);border-radius:6px;border:1px solid var(--hud-line, rgba(148,163,184,0.18));text-align:center;">
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">${ServerI18n.t("uiStatMsgs")}</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${E.toLocaleString()}</div></div>
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">FP</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${T}</div></div>
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">${ServerI18n.t("uiColTime")}</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${v}</div></div>
              </div>
              <div style="margin-top:12px;font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:0.3px;color: var(--color-ink-warning);">
                ${ServerI18n.t("broadcastStopBodyWarn")}
              </div>`,confirmLabel:ServerI18n.t("broadcastStopLabel"),cancelLabel:ServerI18n.t("cancel"),width:440}))return;await p("standby")&&window.showToast&&showToast(ServerI18n.t("broadcastToastStopped")+" \xB7 "+ServerI18n.t("uiDisplayOff"),!0)}o()}async function d(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"warn",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearModalConfirm")}))try{let s=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});s.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:s.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}function i(){let t=document.getElementById(y);t&&(t.querySelector("[data-bc-big]")?.addEventListener("click",n),t.querySelector("[data-bc-clear]")?.addEventListener("click",d))}function c(){A||(I(),P(),o(),j=setInterval(I,5e3),A=setInterval(()=>{P().then(o)},1e4),B=setInterval(o,1e3))}function a(){j&&(clearInterval(j),j=0),A&&(clearInterval(A),A=0),B&&(clearInterval(B),B=0)}function e(){let t=document.querySelector(".admin-dash-grid"),s=document.getElementById(y);if(!t||!s)return;let u=t.dataset.activeLeaf||"dashboard",v=u==="overlay"||u==="broadcast";s.style.display=v?"":"none",v?c():a()}function l(){let t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("beforeend",N()),i(),e())}function h(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&l(),e()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",e),document.addEventListener("admin-panel-rendered",()=>{l(),e()}),l()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h()})()});var qt=he(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,w=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;let f=["keyword","regex","replace","rate_limit"],L=["block","replace","allow","review"],H={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"};function C(_){var R=y();return R[_]!==void 0?R[_]:!1}function I(_,R){if(typeof ServerI18n<"u"&&ServerI18n.t){let U=ServerI18n.t(_);if(U&&U!==_)return U}return R||_}let p={keyword:"is-cyan",regex:"is-cyan",replace:"is-amber",rate_limit:"is-danger"},M={block:"var(--hud-crimson)",replace:"var(--hud-amber)",allow:"var(--hud-lime)",review:"var(--color-ink-accent)"};function F(){return`
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
            ${[{id:"url",label:ServerI18n.t("fltPresetUrl"),pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",label:ServerI18n.t("fltPresetAllcaps"),pattern:"^[A-Z\\W\\s]{8,}$",action:"review"},{id:"repeat",label:ServerI18n.t("fltPresetRepeat"),pattern:"(.)\\1{6,}",action:"review"},{id:"emojionly",label:"Emoji-only",pattern:"^[\\p{Emoji}\\s]+$",action:"block"}].map(_=>`
              <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${_.id}" data-flt-pattern="${_.pattern}" data-flt-action="${_.action}" data-flt-label="${_.label}">
                <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
                <span class="admin-flt-v4__qchip-label">${_.label}</span>
                <span class="admin-flt-v4__qchip-hits" data-flt-quick-hits="${_.id}">\u2014</span>
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
                <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">${I("addFilterRule","Add Rule")}</span>

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
                  <input type="text" id="filterPattern" placeholder="${I("filterPatternPlaceholder","Enter pattern...")}"
                    class="admin-ui-input" />
                </div>
                <div id="filterReplacementRow" class="hidden">
                  <label for="filterReplacement" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("fltColReplacement")}</label>
                  <input type="text" id="filterReplacement" placeholder="${I("filterReplacementPlaceholder","Replacement text...")}"
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
                  + ${I("addRule","Add Rule")}
                </button>
              </div>
            </div>

            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">${I("testRule","Test Rule")}</span>
              </div>
              <div style="padding:14px;display:flex;flex-direction:column;gap:8px">
                <input id="filterTestText" type="text" placeholder="${I("sampleText","Sample text...")}"
                  class="admin-ui-input" />
                <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action" style="align-self:flex-start">${I("testBtn","Test")}</button>
                <div id="filterTestResult" style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);letter-spacing:0.02em"></div>
              </div>
            </div>
          </div>
        </div>
      </div>`}let $="all";function S(_){let R=p[_.type]||"is-default",U=M[_.action]||"var(--color-text-muted)",V={keyword:"ulWord",regex:"ulRegex",replace:"ulReplace",rate_limit:"ulRate"},K=ServerI18n.t(V[_.type]||"ulWord"),z=_.pattern;if(_.type==="replace"&&_.replacement!==void 0&&(z=`${_.pattern}  \u2192  ${_.replacement}`),_.type==="rate_limit"){let W=_.max_count||5,X=_.window_sec||60;z=`${_.pattern}  \xB7  ${W}/${X}s`}let ae=_.enabled?"":"opacity:0.45;",ie=H[_.action]?ServerI18n.t(H[_.action]):_.action;return`
      <div class="hud-table-row hud-rule-row admin-flt-v4__grid" style="${ae}" data-rule-id="${g(_.id)}" data-rule-type="${g(_.type)}">
        <span style="font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all">${g(z)}</span>
        <span class="hud-pill ${R}">${K}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;padding:2px 6px;border-radius:3px;background:${U};color:#000;font-weight:700;width:fit-content">${g(ie)}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">P${g(String(_.priority))}</span>
        <label class="relative inline-block" style="width:32px;align-self:center" title="${g(_.enabled?I("enabled","Enabled"):I("disabled","Disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${g(_.id)}" ${_.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${_.enabled?"is-on":"is-off"}" style="cursor:pointer"></span>
        </label>
        <button class="filter-delete-btn" type="button" data-rule-id="${g(_.id)}" title="${I("deleteRule","Delete")}" aria-label="${I("deleteRule","Delete")}">${window.AdminUtils.closeIcon}</button>
      </div>`}function N(_){let R={all:_.length,keyword:0,regex:0,replace:0,rate_limit:0};_.forEach(V=>{R[V.type]!=null&&R[V.type]++}),Object.keys(R).forEach(V=>{let K=document.querySelector(`[data-filter-count="${V}"]`);K&&(K.textContent=R[V])});let U=document.querySelector('[data-mod-stat="rules"]');U&&(U.textContent=R.all)}async function b(){let _=document.querySelector('[data-mod-stat="blacklist"]');if(_)try{let R=await fetch("/admin/blacklist/get",{credentials:"same-origin"});if(!R.ok)return;let U=await R.json(),V=Array.isArray(U)?U:U.keywords||[];_.textContent=String(V.length)}catch{}}async function k(){try{let _=await csrfFetch("/admin/filters/list");if(!_.ok)throw new Error("HTTP "+_.status);return(await _.json()).rules||[]}catch(_){return console.error("Failed to fetch filter rules:",_),showToast(I("fetchFiltersFailed","Failed to load filter rules"),!1),[]}}async function A(){let _=document.getElementById("filterRulesList");if(!_)return;_.innerHTML=`<div style="padding:12px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${I("loading","Loading...")}</div>`;let R=await k();if(N(R),b(),R.length===0){if(window.AdminEmpty){let V=window.AdminEmpty.render("filters");V.setAttribute("data-empty-kind","filters"),_.innerHTML="",_.appendChild(V)}else _.innerHTML=`<div data-empty-kind="filters" style="padding:18px 14px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${I("noFilterRules","No filter rules configured.")}</div>`;return}let U=$==="all"?R:R.filter(V=>V.type===$);_.innerHTML=U.map(S).join("")}async function j(){let _=document.getElementById("filterType"),R=document.getElementById("filterAction"),U=document.getElementById("filterPattern"),V=document.getElementById("filterReplacement"),K=document.getElementById("filterPriority"),z=document.getElementById("filterMaxCount"),ae=document.getElementById("filterWindowSec"),ie=_.value,W=(U.value||"").trim();if(!W){showToast(I("patternRequired","Pattern is required"),!1),U.focus();return}let X={type:ie,pattern:W,action:R.value,priority:parseInt(K.value,10)||0};ie==="replace"&&(X.replacement=V.value||""),ie==="rate_limit"&&(X.max_count=parseInt(z.value,10)||5,X.window_sec=parseFloat(ae.value)||60);try{let ee=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(X)}),se=await ee.json();if(!ee.ok){showToast(se.error||I("addRuleFailed","Failed to add rule"),!1);return}showToast(I("ruleAdded","Rule added"),!0),U.value="",V.value="",await A()}catch(ee){console.error("Add filter rule error:",ee),showToast(I("addRuleFailed","Failed to add rule"),!1)}}async function B(_){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("filtersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteFilterRule"),severity:"danger",body:I("confirmDeleteRule","Delete this filter rule?"),confirmLabel:ServerI18n.t("filtersDeleteConfirm")}))try{let U=await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:_})}),V=await U.json();if(!U.ok){showToast(V.error||I("deleteRuleFailed","Failed to delete rule"),!1);return}showToast(I("ruleDeleted","Rule deleted"),!0),await A()}catch(U){console.error("Delete filter rule error:",U),showToast(I("deleteRuleFailed","Failed to delete rule"),!1)}}async function P(_,R){try{let U=await csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:_,updates:{enabled:R}})}),V=await U.json();if(!U.ok){showToast(V.error||I("updateRuleFailed","Failed to update rule"),!1),await A();return}}catch(U){console.error("Toggle filter rule error:",U),showToast(I("updateRuleFailed","Failed to update rule"),!1),await A()}}async function m(){let _=document.getElementById("filterTestText"),R=document.getElementById("filterTestResult"),U=document.getElementById("filterType"),V=document.getElementById("filterAction"),K=document.getElementById("filterPattern"),z=document.getElementById("filterReplacement"),ae=document.getElementById("filterMaxCount"),ie=document.getElementById("filterWindowSec"),W=(_.value||"").trim();if(!W){showToast(I("sampleTextRequired","Enter sample text to test"),!1),_.focus();return}let X=(K.value||"").trim();if(!X){showToast(I("patternRequired","Pattern is required"),!1),K.focus();return}let ee=U.value,se={type:ee,pattern:X,action:V.value};ee==="replace"&&(se.replacement=z.value||""),ee==="rate_limit"&&(se.max_count=parseInt(ae.value,10)||5,se.window_sec=parseFloat(ie.value)||60),R.innerHTML=`<span style="color:var(--color-text-muted)">${I("testing","Testing...")}</span>`;try{let Z=await csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:se,text:W})}),le=await Z.json();if(!Z.ok){R.innerHTML=`<span style="color: var(--color-ink-error)">${g(le.error||"Test failed")}</span>`;return}let ce="";le.action==="block"?ce=`<span style="color: var(--color-ink-error);font-weight:600">${I("blocked","BLOCKED")}</span>`:le.action==="replace"?ce=`<span style="color: var(--color-ink-warning);font-weight:600">${I("replaced","REPLACED")}</span> <span style="color:var(--color-text-secondary)">\u2192 ${g(le.text)}</span>`:le.action==="allow"?ce=`<span style="color: var(--color-ink-success);font-weight:600">${I("allowed","ALLOWED")}</span>`:le.action==="review"?ce=`<span style="color: var(--color-ink-accent);font-weight:600">${ServerI18n.t("fltActReview")}</span>`:ce=`<span style="color:var(--color-text-muted)">${I("noMatch","No match (pass)")}</span>`,le.reason&&(ce+=`<br/><span style="font-size:11px;color:var(--color-text-muted)">${g(le.reason)}</span>`),R.innerHTML=ce}catch(Z){console.error("Test filter rule error:",Z),R.innerHTML=`<span style="color: var(--color-ink-error)">${I("testError","Test error")}</span>`}}function r(){let _=document.getElementById("filterType"),R=document.getElementById("filterReplacementRow"),U=document.getElementById("filterRateLimitRow");if(!_)return;let V=_.value;R&&(R.style.display=V==="replace"?"":"none"),U&&(U.style.display=V==="rate_limit"?"grid":"none")}function o(){let _=document.getElementById("filterTypeChips");_&&_.addEventListener("click",R=>{let U=R.target.closest(".hud-filter-chip");U&&($=U.dataset.filterScope||"all",_.querySelectorAll(".hud-filter-chip").forEach(V=>{V.classList.toggle("is-active",V.dataset.filterScope===$)}),A())})}let n=6,d=[],i=!1,c=0,a=0;function e(_){let R=new Date(_*1e3),U=V=>String(V).padStart(2,"0");return`${U(R.getHours())}:${U(R.getMinutes())}:${U(R.getSeconds())}`}function l(_){let R=(_||"").toUpperCase();return R==="BLOCK"?"var(--hud-crimson)":R==="MASK"||R==="REPLACE"?"var(--hud-amber)":R==="REVIEW"?"var(--color-primary)":R==="ALLOW"?"var(--hud-lime)":"var(--color-text-muted)"}function h(){let _=document.getElementById("filterLiveLog");if(_){if(d.length===0){_.innerHTML=`<div style="color:var(--color-text-muted);text-align:center;padding:10px">${ServerI18n.t("fltNoEvents")}</div>`;return}_.innerHTML=d.map(R=>{let U=e(R.ts),V=(R.action||"").toUpperCase(),K=l(V),z=(R.text_excerpt||"").replace(/[<>&"]/g,X=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[X]),ae=(R.pattern||"").replace(/[<>&"]/g,X=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[X]),ie=(R.source||"").slice(0,16),W=ie?`\xB7 ${ie}`:"";return`<div class="admin-filter-log-row" style="display:grid;grid-template-columns:64px 70px 1fr;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px dashed var(--hud-line)">
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${U}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${K}">${V}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\u300C${z}\u300D<span style="color:var(--color-text-muted)"> \u2014 \u898F\u5247 ${ae} ${W}</span></span>
      </div>`}).join("")}}async function t(){try{let _=await fetch(`/admin/filters/events?since=${a}`,{credentials:"same-origin"});if(!_.ok)return;let R=await _.json();if(R.counts_24h){let U=(V,K)=>{let z=document.querySelector(`[data-mod-stat="${V}"]`);z&&(z.textContent=K!=null?String(K):"\u2014")};U("masked",R.counts_24h.MASK||0),U("blocked",R.counts_24h.BLOCK||0)}if(!Array.isArray(R.events)||R.events.length===0)return;for(d.unshift(...R.events);d.length>n;)d.pop();a=R.latest_seq||a,document.getElementById("filterLiveLog")&&h()}catch{}}function s(){i||(i=!0,t(),c=setInterval(t,4e3))}let u=Object.create(null),v="[QUICK]";function E(_,R){return _.find(U=>(U.name||"").startsWith(v+" "+R))}async function T(){let _=await k().catch(()=>[]);document.querySelectorAll(".admin-flt-v4__qchip").forEach(R=>{let U=R.dataset.fltLabel,V=E(_,U),K=!!V&&V.enabled!==!1;R.classList.toggle("is-active",K),V?u[R.dataset.fltQuickId]=V.id||V.rule_id:delete u[R.dataset.fltQuickId]})}async function x(_){let R=_.dataset.fltQuickId,U=_.dataset.fltPattern,V=_.dataset.fltAction,K=_.dataset.fltLabel,z=u[R];if(z)(await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:z})})).ok?(delete u[R],_.classList.remove("is-active"),showToast(ServerI18n.t("filtersToastDisabled",{label:K}),!0)):showToast(ServerI18n.t("filtersToastDisableFailed"),!1);else{let ae=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",name:`${v} ${K}`,pattern:U,action:V,enabled:!0,priority:50})});if(ae.ok){let ie=await ae.json().catch(()=>({}));ie.rule_id&&(u[R]=ie.rule_id),_.classList.add("is-active"),showToast(ServerI18n.t("filtersToastEnabled",{label:K}),!0)}else{let ie=await ae.json().catch(()=>({}));showToast(ServerI18n.t("filtersToastEnableFailed",{msg:ie.error||""}),!1)}}typeof renderRules=="function"&&renderRules()}function D(){let _=document.querySelector("[data-flt-quick]");_&&(_.addEventListener("click",R=>{let U=R.target.closest(".admin-flt-v4__qchip");U&&x(U)}),T())}function q(){let _=document.getElementById("settings-grid");if(!_)return;_.insertAdjacentHTML("beforeend",F()),o(),D();let R=document.getElementById("filterType");R&&R.addEventListener("change",r);let U=document.getElementById("filterAddBtn");U&&U.addEventListener("click",j);let V=document.getElementById("filterTestBtn");V&&V.addEventListener("click",m);let K=document.getElementById("filterTestText");K&&K.addEventListener("keydown",ie=>{ie.key==="Enter"&&(ie.preventDefault(),m())});let z=document.getElementById("filterPattern");z&&z.addEventListener("keydown",ie=>{ie.key==="Enter"&&(ie.preventDefault(),j())});let ae=document.getElementById("filterRulesList");ae&&(ae.addEventListener("change",ie=>{let W=ie.target.closest(".filter-toggle-cb");if(!W)return;P(W.dataset.ruleId,W.checked);let X=W.closest(".hud-rule-row"),ee=X?.querySelector(".admin-filter-toggle-dot");ee&&(ee.classList.toggle("is-on",W.checked),ee.classList.toggle("is-off",!W.checked)),X&&(X.style.opacity=W.checked?"":"0.45")}),ae.addEventListener("click",ie=>{let W=ie.target.closest(".filter-delete-btn");W&&B(W.dataset.ruleId)})),A(),s(),h()}function G(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&q()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&q()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",G):G()})()});var Ht=he(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,w=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml,f=1e4,L=null;function H(k){var A=y();return A[k]!==void 0?A[k]:!1}function C(){return`
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
    `}function I(k){var A=ServerI18n.t("fingerprintState_"+k),j="";return k==="blocked"?j=" is-crimson":k==="flagged"?j=" is-amber":k==="active"?j=" is-cyan":j=" is-mute",'<span class="admin-fp-state'+j+'">'+g(A)+"</span>"}function p(k){if(!k)return"\u2014";try{var A=new Date(k*1e3);return A.toLocaleTimeString()}catch{return String(k)}}function M(k){var A=document.getElementById("adminFingerprintTableWrap");if(A){if(!k||k.length===0){A.innerHTML="";var j=window.AdminEmpty.render("audience");j.dataset.emptyKind="fingerprints",A.appendChild(j);return}var B='<div class="admin-fp-row admin-fp-row--head"><span>'+g(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",P=k.map(function(m){var r=m.blocked|0,o=m.hash||"",n=o.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+g(o)+'"><span class="admin-fp-hash admin-identity-fp" title="'+g(o)+'">fp:'+g(n)+'</span><span class="admin-fp-ip admin-identity-ip">'+g(m.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+g(m.ua||"")+'">'+g(m.ua||"\u2014")+'</span><span class="admin-fp-num">'+(m.msgs|0)+'</span><span class="admin-fp-num">'+(m.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(r>0?"is-crimson":"is-mute")+'">'+r+"</span><span>"+I(m.state||"active")+'</span><span class="admin-fp-ts">'+g(p(m.last_seen))+"</span></div>"}).join("");A.innerHTML=B+P}}async function F(){var k=document.getElementById("adminFingerprintCount");try{var A=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!A.ok)throw new Error("HTTP "+A.status);var j=await A.json(),B=j.records||[];if(M(B),k){var P=j.count||B.length,m=j.flagged!=null?j.flagged:B.filter(function(o){return o.state==="flagged"||o.state==="blocked"}).length;k.textContent=ServerI18n.t("fpCountSummary",{unique:P,flagged:m})}}catch(o){console.error("[admin-fingerprints] fetch failed:",o);var r=document.getElementById("adminFingerprintTableWrap");r&&(r.innerHTML='<span class="hud-pill is-danger">'+g(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function $(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var A=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(A.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await F();else{var j=await A.json().catch(function(){return{}});window.showToast(j.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(B){console.error("[admin-fingerprints] reset error:",B),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function S(){N(),L=setInterval(function(){var k=document.getElementById("sec-fingerprints");k&&k.offsetParent!==null&&F()},f)}function N(){L&&(clearInterval(L),L=null)}function b(){var k=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(k){k.insertAdjacentHTML("beforeend",C());var A=document.getElementById("adminFingerprintRefreshBtn");A&&A.addEventListener("click",F);var j=document.getElementById("adminFingerprintResetBtn");j&&j.addEventListener("click",$),F(),S()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var k=new MutationObserver(function(){var j=document.getElementById("moderation-grid")||document.getElementById("settings-grid");j&&!document.getElementById("sec-fingerprints")&&b()});k.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var A=document.getElementById("moderation-grid")||document.getElementById("settings-grid");A&&!document.getElementById("sec-fingerprints")&&b()}})})()});var jt=he(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.escapeHtml;let w=(e,l)=>{let h=window.ServerI18n?.t?.(e);return h&&h!==e?h:l||e},g=!1;new MutationObserver(()=>{let e=document.getElementById("settings-grid");if(e&&!(document.getElementById("sec-widgets")||g)){g=!0;try{L(e)}finally{g=!1}}}).observe(document.body,{childList:!0,subtree:!0});function L(e){let l=document.createElement("div");l.id="sec-widgets",l.className="admin-widgets-page hud-page-stack lg:col-span-2";let h=location.origin+"/overlay";l.dataset.tpl="B",l.innerHTML=`
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${y(w("widgetsTitle"))}</h2>
          <p class="admin-ui-page-note">${y(w("widgetsDesc"))}</p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 W1\uFF1A\u4E3B\u8981\u52D5\u4F5C\u5728\u9801\u9996\u53F3\u5074\u3002\u9801\u9996\u5728\u6A19\u984C\u8207\u8DEF\u7531\u540C\u540D\u6642\u6703\u88AB
               \u4F75\u9032 topbar\uFF0Cshell \u7684 [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB
               \uFF08\u898B admin.js \u7684 _dedupSectionTitles\uFF09\u3002 -->
          <div class="admin-ui-page-actions admin-ow-addrow">
            <button id="widget-add" type="button" class="admin-ui-action is-primary">
              ${y(w("widgetsAddBtn"))}
            </button>
            <div class="admin-ow-addmenu" data-ow-addmenu hidden>
              <button type="button" data-ow-add="scoreboard">${y(w("widgetScoreboard"))}</button>
              <button type="button" data-ow-add="ticker">${y(w("widgetTicker"))}</button>
              <button type="button" data-ow-add="label">${y(w("widgetLabel"))}</button>
            </div>
          </div>
        </div>

        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:12px">
            <div id="widgets-list" class="admin-widgets-list"></div>
            <div class="admin-widgets-actions">
              <button id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action">
                ${y(w("clearAll"))}
              </button>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:12px;position:sticky;top:0">
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${y(w("widgetsPreviewLabel"))}</div>
              <div class="admin-ow-stage" data-ow-stage></div>
              <p class="admin-ow-card-note">${y(w("widgetsDragHint"))}</p>
            </div>
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${y(w("widgetsObsLabel"))}</div>
              <p class="admin-ow-card-note">
                ${y(w("widgetsObsNote"))}
              </p>
              <div class="admin-ow-urlrow">
                <code class="admin-ow-url" data-ow-obs-url>${y(h)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${y(w("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${y(w("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,e.appendChild(l);let t=document.getElementById("widget-add"),s=l.querySelector("[data-ow-addmenu]");t.addEventListener("click",u=>{u.stopPropagation(),s.hidden=!s.hidden}),s.addEventListener("click",u=>{let v=u.target.closest("[data-ow-add]")?.dataset.owAdd;v&&(s.hidden=!0,I(v))}),document.addEventListener("click",u=>{!s.hidden&&!u.target.closest(".admin-ui-page-actions")&&(s.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",$),l.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let u=l.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(u).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),C()}async function H(e,l="GET",h=null){let t={method:l,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(h){let u=document.querySelector('meta[name="csrf-token"]');u&&(t.headers["X-CSRF-Token"]=u.content),t.body=JSON.stringify(h)}return(await fetch("/admin/widgets/"+e,t)).json()}async function C(){try{let e=await H("list");N(e.widgets||[])}catch(e){console.error("[admin-widgets] Load failed:",e)}}async function I(e){let l={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await H("create","POST",{type:e,config:l[e]||{}}),C()}catch(h){console.error("[admin-widgets] Create failed:",h)}}async function p(e){let l=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:l,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await H("delete","POST",{id:e}),C()}catch(t){console.error("[admin-widgets] Delete failed:",t)}}async function M(e,l){try{await H("update","POST",{id:e,config:l}),C()}catch(h){console.error("[admin-widgets] Update failed:",h)}}async function F(e,l,h){try{await H("score","POST",{id:e,team_index:l,delta:h}),C()}catch(t){console.error("[admin-widgets] Score update failed:",t)}}async function $(){let e=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:e,confirmLabel:ServerI18n.t("clearAll")}))try{await H("clear","POST",{}),C()}catch(h){console.error("[admin-widgets] Clear failed:",h)}}let S=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function N(e){let l=document.getElementById("widgets-list");if(l){if(l.innerHTML="",o(e),e.length===0){let h=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});h.dataset.emptyKind="widgets",l.appendChild(h);return}e.forEach(h=>{l.appendChild(B(h))})}}let b={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function k(e){return w("widgetPos_"+String(e||"top-left").replace("-","_"),e||"")}function A(e){let l=e.config||{},h="";e.type==="scoreboard"?h=(l.teams||[]).map(s=>`${s.name} ${s.score}`).join(" \xB7 "):e.type==="ticker"?(h=(l.messages||[])[0]||"",h&&(h=`\u300C${h}\u300D`)):e.type==="label"&&(h=l.text?`\u300C${l.text}\u300D`:"");let t=k(e.position);return h?`${h} \xB7 ${t}`:t}function j(e){return e==="scoreboard"?w("widgetScoreboard"):e==="ticker"?w("widgetTicker"):e==="label"?w("widgetLabel"):e}function B(e){let l=document.createElement("div");l.className="admin-widget-card",e.visible!==!1&&l.classList.add("is-on");let h=document.createElement("button");h.type="button",h.className="admin-widget-summary",h.setAttribute("aria-expanded","false"),h.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+y(b[e.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+y(j(e.type))+'</span><span class="admin-widget-summary-text">'+y(A(e))+"</span>"+(e.visible===!1?'<span class="admin-widget-summary-off">'+y(w("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',l.appendChild(h);let t=document.createElement("div");t.className="admin-widget-card-body",t.hidden=!0,h.addEventListener("click",()=>{t.hidden=!t.hidden,h.setAttribute("aria-expanded",t.hidden?"false":"true"),l.classList.toggle("is-open",!t.hidden)});let s=a(w("widgetPosition"),S,e.position,T=>M(e.id,{position:T}));t.appendChild(s),e.type==="scoreboard"?n(t,e):e.type==="ticker"?d(t,e):e.type==="label"&&i(t,e);let u=document.createElement("div");u.className="admin-widget-card-actions";let v=document.createElement("button");v.type="button",v.className="admin-ui-action admin-widget-card-action",v.textContent=e.visible?w("widgetHide"):w("widgetShow"),v.addEventListener("click",()=>M(e.id,{visible:!e.visible})),u.appendChild(v);let E=document.createElement("button");return E.type="button",E.className="admin-ui-action is-danger admin-widget-card-action",E.textContent=w("remove"),E.addEventListener("click",()=>p(e.id)),u.appendChild(E),t.appendChild(u),l.appendChild(t),l}let P={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function m(e,l){let h="top-left",t=1/0;for(let[s,[u,v]]of Object.entries(P)){let E=e-u/2,T=l-v/2,x=E*E+T*T;x<t&&(t=x,h=s)}return h}function r(e){let l=e.config||{};return e.type==="scoreboard"?(l.teams||[]).map(h=>`${h.name} ${h.score}`).join("  ")||w("widgetScoreboard"):e.type==="ticker"?(l.messages||[])[0]||w("widgetTicker"):e.type==="label"?l.text||w("widgetLabel"):e.type}function o(e){let l=document.querySelector("[data-ow-stage]");if(l){if(l.innerHTML="",!e.length){l.innerHTML='<span class="admin-ow-stage-empty">'+y(w("widgetsStageEmpty"))+"</span>";return}e.forEach(h=>{let t=document.createElement("div");t.className="admin-ow-box is-"+(h.position||"top-left"),h.visible===!1&&t.classList.add("is-off"),t.dataset.owBox=h.id,t.draggable=!0,t.textContent=r(h),t.title=j(h.type),t.addEventListener("dragend",s=>{let u=l.getBoundingClientRect();if(!u.width||!u.height)return;let v=(s.clientX-u.left)/u.width,E=(s.clientY-u.top)/u.height;if(v<0||v>1||E<0||E>1)return;let T=m(v,E);T!==h.position&&M(h.id,{position:T})}),l.appendChild(t)})}}function n(e,l){let h=l.config||{},t=c(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",h.title||"",s=>M(l.id,{title:s}));e.appendChild(t),(h.teams||[]).forEach((s,u)=>{let v=document.createElement("div");v.className="admin-widget-team";let E=document.createElement("input");E.type="color",E.value=s.color||"#38bdf8",E.className="admin-widget-team-color",E.addEventListener("change",()=>{let G=[...h.teams];G[u]={...G[u],color:E.value},M(l.id,{teams:G})}),v.appendChild(E);let T=document.createElement("input");T.type="text",T.value=s.name,T.className="admin-widget-input",T.addEventListener("change",()=>{let G=[...h.teams];G[u]={...G[u],name:T.value},M(l.id,{teams:G})}),v.appendChild(T);let x=document.createElement("span");x.className="admin-widget-team-score",x.textContent=s.score,v.appendChild(x);let D=document.createElement("button");D.type="button",D.className="admin-widget-step",D.textContent="\u2212",D.addEventListener("click",()=>F(l.id,u,-1)),v.appendChild(D);let q=document.createElement("button");q.type="button",q.className="admin-widget-step",q.textContent="+",q.addEventListener("click",()=>F(l.id,u,1)),v.appendChild(q),e.appendChild(v)})}function d(e,l){let h=l.config||{},t=document.createElement("div");t.className="admin-widget-row";let s=document.createElement("span");s.className="lbl",s.textContent=window.ServerI18n?.t?.("speed")||"SPEED",t.appendChild(s);let u=document.createElement("input");u.type="range",u.min="10",u.max="200",u.value=h.speed||60,u.style.flex="1",u.addEventListener("change",()=>{M(l.id,{speed:parseInt(u.value)})}),t.appendChild(u);let v=document.createElement("span");v.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",v.textContent=u.value,u.addEventListener("input",()=>{v.textContent=u.value}),t.appendChild(v),e.appendChild(t);let E=document.createElement("div");E.className="admin-widget-row",E.style.alignItems="flex-start";let T=document.createElement("span");T.className="lbl",T.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",E.appendChild(T);let x=document.createElement("textarea");x.className="admin-widget-textarea",x.value=(h.messages||[]).join(`
`),x.rows=3,x.placeholder=ServerI18n.t("widgetTickerPlaceholder"),x.addEventListener("change",()=>{let D=x.value.split(`
`).filter(q=>q.trim());M(l.id,{messages:D})}),E.appendChild(x),e.appendChild(E)}function i(e,l){let h=l.config||{};e.appendChild(c(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",h.text||"",t=>M(l.id,{text:t}))),e.appendChild(c(window.ServerI18n?.t?.("size")||"SIZE",String(h.fontSize||24),t=>M(l.id,{fontSize:parseInt(t)||24}),"number"))}function c(e,l,h,t="text"){let s=document.createElement("div");s.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=e,s.appendChild(u);let v=document.createElement("input");return v.type=t,v.value=l,v.className="admin-widget-input",v.addEventListener("change",()=>h(v.value)),s.appendChild(v),s}function a(e,l,h,t){let s=document.createElement("div");s.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=e,s.appendChild(u);let v=document.createElement("select");return v.className="admin-widget-select",l.forEach(E=>{let T=document.createElement("option");T.value=E,T.textContent=E,E===h&&(T.selected=!0),v.appendChild(T)}),v.addEventListener("change",()=>t(v.value)),s.appendChild(v),s}})})()});var Ut=he(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let y=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","backup","integrations","plugins","webhooks","api-tokens","security","notifications","audience","firetoken","overlay","about"];function w(){let _=window.ADMIN_ROUTES||{},R={};return y.forEach(U=>{let V=_[U];V&&V.title&&(R[U]={title:V.title,kicker:V.kicker||U.toUpperCase()})}),R}let g=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation",section:"sec-blacklist"},{labelKey:"cmdkSettingFilters",route:"moderation",section:"sec-filters"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"security",tab:"security",section:"admin-security-v2-page"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{label:"Webhooks",route:"webhooks",section:"sec-webhooks"},{label:"Scheduler",route:"scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],f=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function L(){let _=document.querySelector('meta[name="csrf-token"]');return _&&_.content||""}function H(_,R){if(typeof window.csrfFetch=="function")return window.csrfFetch(_,R);let U=Object.assign({credentials:"same-origin"},R||{}),V=new Headers(R&&R.headers||{});return V.set("X-CSRF-Token",L()),U.headers=V,fetch(_,U)}function C(_,R){typeof window.showToast=="function"&&window.showToast(_,R!==!1)}let I=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>H("/effects/reload",{method:"POST"}).then(_=>C(_.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),_.ok)).catch(()=>C(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"cmdkActionOverlayOff",subKey:"adminNavOverlay",action:()=>H("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"overlay_off"})}).then(_=>C(_.ok?ServerI18n.t("cmdkToastOverlayOff"):ServerI18n.t("cmdkToastToggleFailed"),_.ok)).catch(()=>C(ServerI18n.t("cmdkToastToggleFailed"),!1))},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>H("/admin/poll/reset",{method:"POST"}).then(_=>C(_.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),_.ok)).catch(()=>C(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return H("/admin/history/clear",{method:"POST"}).then(R=>C(R.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),R.ok)).catch(()=>C(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],p=null,M=null,F=null,$="",S=[],N=[],b=0,k=null,A=null,j=null,B=15e3;function P(_){return String(_??"").replace(/[&<>"']/g,R=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[R])}function m(_,R){if(!R)return 0;let U=String(_||"").toLowerCase(),V=R.toLowerCase(),K=0,z=0,ae=0,ie=0;for(;K<U.length&&z<V.length;)U[K]===V[z]?(z++,ie++,ae+=2+ie):ie=0,K++;return z<V.length?-1:(U.startsWith(V)&&(ae+=10),ae)}function r(){let _=document.createElement("div");_.className="admin-cmdk",_.setAttribute("hidden",""),_.setAttribute("aria-hidden","true"),_.innerHTML=`
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
    `,document.body.appendChild(_),p=_,M=_.querySelector(".admin-cmdk-input"),F=_.querySelector(".admin-cmdk-list"),_.addEventListener("click",R=>{R.target.matches("[data-cmdk-close]")&&q()}),M.addEventListener("input",R=>{$=R.target.value,E()}),M.addEventListener("keydown",o),F.addEventListener("click",R=>{let U=R.target.closest("[data-cmdk-idx]");U&&(b=parseInt(U.dataset.cmdkIdx,10)||0,d())})}function o(_){if(_.key==="Escape"){_.preventDefault(),q();return}if(_.key==="ArrowDown"){_.preventDefault(),n(1);return}if(_.key==="ArrowUp"){_.preventDefault(),n(-1);return}if(_.key==="Enter"){_.preventDefault(),d();return}}function n(_){if(!S.length)return;b=(b+_+S.length)%S.length,x();let R=F.querySelector(`[data-cmdk-idx="${b}"]`);R&&R.scrollIntoView({block:"nearest"})}function d(){let _=S[b];if(_){if(_.type==="route")window.location.hash="#/"+_.route,q();else if(_.type==="setting")_.tab&&(document.body.dataset.viewerConfigTab=_.tab),window.location.hash="#/"+_.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let R=document.getElementById(_.section);R&&(R.scrollIntoView({behavior:"smooth",block:"start"}),R.tagName==="DETAILS"&&!R.open&&(R.open=!0))},80),q();else if(_.type==="message")window.location.hash="#/messages",q();else if(_.type==="user")window.location.hash="#/system",setTimeout(()=>{let R=document.getElementById("sec-fingerprints");R&&R.scrollIntoView({behavior:"smooth",block:"start"})},80),q();else if(_.type==="theme")H("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:_.id})}).then(R=>{R.ok?(C(ServerI18n.t("cmdkThemeApplied",{name:_.label}),!0),j=null):C(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>C(ServerI18n.t("cmdkThemeApplyFailed"),!1)),q();else if(_.type==="action"){try{let R=_.action&&_.action();R&&typeof R.then=="function"&&R.catch(()=>{})}catch{}q()}}}let i={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",history:"adminNavGroupSystem",backup:"adminNavGroupSystem",security:"adminNavGroupSystem",integrations:"adminNavGroupSystem"};function c(_){return Object.entries(w()).map(([R,U])=>{let V=Math.max(m(U.title,_),m(R,_)),K=i[R];return{type:"route",route:R,label:U.title,sub:K?ServerI18n.t(K):"",icon:"\u25C7",score:V}}).filter(R=>R.score>=0)}function a(_){let R=w()[_];return R?R.title:""}function e(_){return g.map(R=>{let U=R.labelKey?ServerI18n.t(R.labelKey):R.label;return{type:"setting",route:R.route,tab:R.tab,section:R.section,label:a(R.route)?`${a(R.route)} \u203A ${U}`:U,sub:"",icon:"\u2699",score:m(U,_)}}).filter(R=>R.score>=0)}function l(_){return k?(k.records||[]).map(U=>{let V=U.text||U.message||"",K=U.nickname||U.user||"guest",z=(U.timestamp||"").slice(11,19)||"\u2014",ae=(U.fingerprint||U.fp||"").slice(0,8);return{type:"message",label:`${V}  \xB7  @${K}`,sub:ae?`${z} \xB7 fp:${ae}`:z,icon:"\u{1F4AC}",score:Math.max(m(V,_),m(K,_))}}).filter(U=>U.score>=0):[]}function h(_){if(!j)return[];let R=j.records||[],U=j.active||"";return R.map(V=>{let K=V.label||V.display_name||V.name||"",z=V.description||ServerI18n.t("cmdkThemeDefaultDesc"),ae=V.name===U;return{type:"theme",id:V.name,label:ae?ServerI18n.t("cmdkThemeActive",{name:K}):K,sub:z,icon:"\u{1F3A8}",score:Math.max(m(K,_),m(V.name||"",_),m(z,_))}}).filter(V=>V.score>=0)}function t(_){return I.map(R=>{let U=ServerI18n.t(R.labelKey),V=R.subKey?ServerI18n.t(R.subKey):R.sub;return{type:"action",id:R.id,label:U,sub:V,icon:"\u26A1",action:R.action,score:Math.max(m(U,_),m(R.id,_),m(V,_))}}).filter(R=>R.score>=0)}function s(_){return A?(A.records||[]).map(U=>{let V=U.fingerprint||U.fp||U.id||"",K=U.ip||U.last_ip||"",z=U.nickname||"";return{type:"user",label:z?`@${z}  \xB7  ${V.slice(0,12)}\u2026`:`${V.slice(0,12)}\u2026`,sub:`user \xB7 ${K||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(m(V,_),m(K,_),m(z,_))}}).filter(U=>U.score>=0):[]}async function u(){let _=Date.now(),R=[];(!k||_-k.at>B)&&R.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{k={at:_,records:U&&U.records||[]}}).catch(()=>{k={at:_,records:[]}})),(!A||_-A.at>B)&&R.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{A={at:_,records:U&&U.records||[]}}).catch(()=>{A={at:_,records:[]}})),(!j||_-j.at>B)&&R.push(fetch("/admin/themes",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{j={at:_,records:U&&U.themes||[],active:U&&U.active||""}}).catch(()=>{j={at:_,records:[],active:""}})),R.length&&await Promise.all(R)}let v={actions:5,pages:5,messages:4};async function E(){await u();let _=$.trim(),R={action:t(_),route:c(_),setting:e(_),theme:h(_),message:l(_),user:s(_)};S=[],N=[],f.forEach(U=>{let V=U.types.reduce((K,z)=>K.concat(R[z]||[]),[]).sort((K,z)=>z.score-K.score).slice(0,v[U.id]||5);V.length&&(N.push({id:U.id,labelKey:U.labelKey,from:S.length,count:V.length}),S=S.concat(V))}),b=0,x()}function T(_){return _.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[_.type]||"\xB7"}function x(){if(!S.length){F.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let _=[];N.forEach(R=>{_.push(`<li class="admin-cmdk-group" role="presentation">${P(ServerI18n.t(R.labelKey))}</li>`);for(let U=R.from;U<R.from+R.count;U++){let V=S[U],K=U===b;_.push(`
        <li class="admin-cmdk-row ${K?"is-active":""}"
            data-cmdk-idx="${U}" role="option" aria-selected="${K}">
          <span class="admin-cmdk-icon" aria-hidden="true">${P(T(V))}</span>
          <span class="admin-cmdk-label">${P(V.label)}</span>
          <span class="admin-cmdk-sub">${P(V.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${K?"\u21B5":""}</span>
        </li>`)}}),F.innerHTML=_.join("")}function D(){p||r(),p.removeAttribute("hidden"),p.setAttribute("aria-hidden","false"),p.classList.add("is-open"),$="",M.value="",E(),setTimeout(()=>M.focus(),20)}function q(){p&&(p.setAttribute("hidden",""),p.setAttribute("aria-hidden","true"),p.classList.remove("is-open"))}function G(){return!!(p&&!p.hasAttribute("hidden"))}window.AdminCommandPalette={open:D,close:q,isOpen:G,toggle:()=>G()?q():D()}})()});var Kt=he(()=>{(function(){"use strict";let y="sec-sessions-overview";var w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(r){return String(r).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},g={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function f(r){if(r=Number(r)||0,r<=0)return"\u2014";var o=Math.floor(r/3600),n=Math.floor(r%3600/60),d=r%60;return o>0?o+"h "+n+"m":n>0?n+"m":d+"s"}function L(r){if(!r)return"\u2014";try{var o=typeof r=="number"?new Date(r<1e12?r*1e3:r):new Date(r);return o.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(r)}}function H(){return'<div id="'+y+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function C(){return'<div class="admin-sessions-th"><span>'+w(ServerI18n.t("sessionsColSession"))+"</span><span>"+w(ServerI18n.t("sessionsColMessages"))+"</span><span>"+w(ServerI18n.t("sessionsColViewers"))+"</span><span>"+w(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function I(r){return r.name||ServerI18n.t("sessionsFallbackName",{id:(r.id||"").slice(0,12)})}function p(){var r=document.getElementById("admin-sessions-table-body");if(r){if(g.loading){window.AdminSkeletons?(r.innerHTML="",r.appendChild(window.AdminSkeletons.listRows({rows:5}))):r.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!g.sessions.length){r.innerHTML="";var o=window.AdminEmpty.render("sessions");o.dataset.emptyKind="sessions",r.appendChild(o);return}var n=g.sessions.map(function(d){var i=w(d.id||"");return'<div class="admin-sessions-tr'+(d.is_live?" is-live":"")+'" data-session-id="'+i+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(d.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+w(I(d))+'<span class="admin-sessions-td-sub">'+w(L(d.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(d.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(d.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+w(f(d.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+i+'">'+w(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");r.innerHTML=C()+n}}var M=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function F(){var r=document.querySelector("[data-sessions-export]");if(r){if(!g.exportId){r.hidden=!0,r.innerHTML="";return}var o=g.sessions.find(function(d){return d.id===g.exportId});if(!o){g.exportId=null,r.hidden=!0,r.innerHTML="";return}var n=M.map(function(d){return'<button type="button" class="admin-sx-export__seg'+(d.id===g.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+d.id+'" aria-pressed="'+(d.id===g.exportFormat?"true":"false")+'">'+w(ServerI18n.t(d.labelKey))+"</button>"}).join("");r.hidden=!1,r.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+w(ServerI18n.t("sessionsExportTitle",{name:I(o)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+w(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+n+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(g.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+w(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+w(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+w(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+w(ServerI18n.t("sessionsDownloadBtn",{fmt:g.exportFormat.toUpperCase()}))+"</button></div>"}}function $(){if(g.exportId){var r="/admin/sessions/"+encodeURIComponent(g.exportId)+"/export?format="+encodeURIComponent(g.exportFormat)+"&include_pii="+(g.exportPii?"1":"0"),o=document.createElement("a");o.href=r,o.rel="noopener",document.body.appendChild(o),o.click(),o.remove()}}async function S(){var r=g.exportId;if(r)try{var o=await fetch("/admin/sessions/"+encodeURIComponent(r)+"/export?format=json",{credentials:"same-origin"});if(!o.ok)throw new Error("HTTP "+o.status);var n=await o.json(),d=(n.records||[]).slice(0,500);if(!d.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var i=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:d,speedMultiplier:1})});if(i.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!i.ok)throw new Error("HTTP "+i.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function N(){p(),F()}async function b(){g.loading=!0,p();try{var[r,o]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),n=[],d=[];if(r.ok){var i=await r.json();n=Array.isArray(i.sessions)?i.sessions:[],n.forEach(function(s){s._explicit=!0})}if(o.ok){var c=await o.json();d=Array.isArray(c.sessions)?c.sessions:[]}var a=n.slice(),e=new Set(n.map(function(s){return s.id}));d.forEach(function(s){e.has(s.id)||a.push(s)}),a.sort(function(s,u){var v=typeof s.started_at=="number"?s.started_at:Date.parse(s.started_at||0),E=typeof u.started_at=="number"?u.started_at:Date.parse(u.started_at||0);return E-v});try{var l=await fetch("/admin/session/current",{credentials:"same-origin"});if(l.ok){var h=await l.json();if(h.status==="live"){var t=Object.assign({},h,{id:h.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});a.unshift(t)}}}catch{}g.sessions=a,g.total=a.length}catch(s){console.error("[admin-sessions] fetch error:",s),g.sessions=[],g.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:s.message||""}),!1)}finally{g.loading=!1,N()}}function k(r){r&&(window.location.hash="#/session-detail?id="+encodeURIComponent(r))}function A(r){g.exportId=r,F();var o=document.querySelector("[data-sessions-export]");o&&o.scrollIntoView({block:"nearest"})}function j(){var r=document.getElementById(y);r&&(r.addEventListener("click",function(o){var n=o.target.closest("[data-sessions-export-open]");if(n){o.stopPropagation(),A(n.dataset.sessionsExportOpen);return}if(o.target.closest("[data-sessions-export-close]")){g.exportId=null,F();return}var d=o.target.closest("[data-sessions-export-fmt]");if(d){g.exportFormat=d.dataset.sessionsExportFmt,F();return}if(o.target.closest("[data-sessions-replay]")){S();return}if(o.target.closest("[data-sessions-download]")){$();return}var i=o.target.closest(".admin-sessions-tr");i&&k(i.dataset.sessionId||null)}),r.addEventListener("change",function(o){var n=o.target.closest("[data-sessions-export-pii]");n&&(g.exportPii=!!n.checked)}),r.addEventListener("keydown",function(o){if(!(o.key!=="Enter"&&o.key!==" ")){var n=o.target.closest(".admin-sessions-tr");n&&(o.preventDefault(),k(n.dataset.sessionId||null))}}))}function B(){var r=document.querySelector(".admin-dash-grid"),o=document.getElementById(y);if(!(!r||!o)){var n=r.dataset.activeLeaf||"dashboard";o.style.display=n==="sessions"?"":"none"}}function P(){var r=document.getElementById("settings-grid");!r||document.getElementById(y)||(r.insertAdjacentHTML("beforeend",H()),j(),b(),B())}function m(){if(window.DANMU_CONFIG?.session?.logged_in){var r=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&P(),B()});r.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",B),document.addEventListener("admin-panel-rendered",function(){P(),B()}),P()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m()})()});var Wt=he(()=>{(function(){"use strict";let y="sec-session-detail-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(T){return String(T).replace(/[&<>"']/g,function(x){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]})},g={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},f=!1,L={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function H(){let T=window.location.hash||"",x=T.indexOf("?");if(x===-1)return null;let D=T.slice(x+1);return new URLSearchParams(D).get("id")||null}function C(T){if(!T)return"\u2014";try{let x=new Date(T);if(isNaN(x.getTime()))return String(T);let D=q=>String(q).padStart(2,"0");return`${x.getFullYear()}-${D(x.getMonth()+1)}-${D(x.getDate())} ${D(x.getHours())}:${D(x.getMinutes())}:${D(x.getSeconds())}`}catch{return String(T)}}function I(T){if(!T||T<0)return"\u2014";let x=Math.round(Number(T)),D=Math.floor(x/3600),q=Math.floor(x%3600/60),G=x%60;return D>0?`${D}h ${q}m ${G}s`:q>0?`${q}m ${G}s`:`${G}s`}function p(T,x){if(!T||!x)return"";try{let D=Math.max(0,Math.round((new Date(T)-new Date(x))/1e3)),q=Math.floor(D/60),G=D%60;return`+${String(q).padStart(2,"0")}:${String(G).padStart(2,"0")}`}catch{return""}}function M(T){let x=Number(T);return isNaN(x)?"\u2014":x.toLocaleString()}function F(T){if(!T)return"#64748b";let x=0;for(let q=0;q<T.length;q++)x=x*31+T.charCodeAt(q)>>>0;return`hsl(${x%360}, 60%, 60%)`}function $(){return`
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
    `}async function S(T){if(!T){B(ServerI18n.t("sessionDetailErrMissingId"));return}j(!0);try{let x=await fetch(`/admin/sessions/${encodeURIComponent(T)}`,{credentials:"same-origin"});if(x.status===404&&(x=await fetch(`/admin/session/archive/${encodeURIComponent(T)}`,{credentials:"same-origin"})),!x.ok)throw new Error(`HTTP ${x.status}`);let D=await x.json();g.session=D.session||null,g.records=D.records||[],g.density=D.density||[],j(!1),P(),N()}catch(x){j(!1),B(ServerI18n.t("sessionDetailErrLoadFailed",{msg:x.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function N(){if(g.sessionId)try{let T=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(g.sessionId)}`,{credentials:"same-origin"});if(!T.ok)return;let x=await T.json();g.annotations=Array.isArray(x.annotations)?x.annotations:[],i()}catch{}}function b(){let T=g.session;if(!T)return 0;if(T.duration_s)return Math.round(T.duration_s*1e3);if(T.duration)return Math.round(T.duration*1e3);let x=T.started_at||T.start_time,D=T.ended_at||T.end_time;if(x&&D)try{return Math.max(0,new Date(D)-new Date(x))}catch{return 0}return g.density&&g.density.length?g.density.length*60*1e3:0}function k(T){let x=Date.parse(T||0);if(Number.isNaN(x))return"\u2014";let D=new Date(x),q=G=>String(G).padStart(2,"0");return`${q(D.getHours())}:${q(D.getMinutes())}:${q(D.getSeconds())}`}function A(T){let x=Math.floor(T/1e3),D=Math.floor(x/3600),q=Math.floor(x%3600/60),G=x%60,_=R=>String(R).padStart(2,"0");return D>0?`${_(D)}:${_(q)}:${_(G)}`:`${_(q)}:${_(G)}`}function j(T){g.loading=T;let x=document.querySelector("[data-sd-loading]"),D=document.querySelector("[data-sd-error]");x&&(x.hidden=!T),D&&T&&(D.hidden=!0);let q=document.querySelector("[data-sd-timeline-wrap]");if(q&&window.AdminSkeletons){let G=q.querySelector("[data-sd-timeline-skel]");T?(q.hidden=!1,G||(G=window.AdminSkeletons.chart(),G.setAttribute("data-sd-timeline-skel","1"),q.appendChild(G))):G&&G.remove()}}function B(T){g.error=T;let x=document.querySelector("[data-sd-error]"),D=document.querySelector("[data-sd-error-msg]");x&&(x.hidden=!1),D&&(D.textContent=T),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(q){let G=document.querySelector(`[${q}]`);G&&(G.hidden=!0)})}function P(){m(),r(),o(),d(),i();let T=document.querySelector("[data-sd-error]");T&&(T.hidden=!0)}function m(){let T=g.session,x=document.querySelector("[data-sd-session-header]");if(!x)return;x.hidden=!1;let D=document.querySelector("[data-sd-session-id]"),q=document.querySelector("[data-sd-meta-start]"),G=document.querySelector("[data-sd-meta-duration]"),_=document.querySelector("[data-sd-title]"),R=T&&(T.session_id||T.id)||g.sessionId||"\u2014";D&&(D.textContent=R),q&&(q.textContent=C(T&&(T.started_at||T.start_time))),G&&(G.textContent=I(T&&(T.duration_s||T.duration))),_&&(_.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(R).slice(-8)}))}function r(){let T=g.session;if(!T)return;let x=document.querySelector("[data-sd-kpis]");x&&(x.hidden=!1);let D=function(R,U,V){let K=document.querySelector(`[data-sd-stat="${R}"]`);K&&(K.textContent=U);let z=document.querySelector(`[data-sd-stat-sub="${R}"]`);z&&(z.textContent=V||"")};D("msg_count",M(T.msg_count)),D("viewer_count",M(T.viewer_count));let q=Array.isArray(g.density)?g.density:[];if(q.length){let R=0,U=0;q.forEach(function(z,ae){z>R&&(R=z,U=ae)});let V=Date.parse(T.started_at||T.start_time||0),K="";if(!Number.isNaN(V)){let z=new Date(V+U*6e4),ae=ie=>String(ie).padStart(2,"0");K=`${ae(z.getHours())}:${ae(z.getMinutes())}`}D("peak",M(R),K)}else D("peak","\u2014","");let G=Number(T.blocked_count)||0;D("blocked",M(G));let _=document.querySelector("[data-sd-blocked-btn]");_&&(_.textContent=ServerI18n.t("sessionDetailStatBlocked")+(G?" "+G:""),_.disabled=G===0)}function o(){let T=document.querySelector("[data-sd-timeline-wrap]"),x=document.querySelector("[data-sd-timeline]"),D=document.querySelector("[data-sd-timeline-axis]"),q=document.querySelector("[data-sd-peak-label]");if(!T||!x||!D)return;let G=g.density;if(!G||G.length===0){T.hidden=!0;return}T.hidden=!1;let _=Math.max(1,...G),R=0;G.forEach(function(ie,W){ie>G[R]&&(R=W)});let U=G.map(function(ie,W){let X=Math.max(2,Math.round(ie/_*100));return`<div class="admin-sd-bar${W===R?" is-peak":""}" style="height:${X}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:ie,minute:W+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:ie})}"></div>`}).join("");x.innerHTML=U;let V=g.session,K=C(V&&(V.started_at||V.start_time)).slice(11,16)||"00:00",z=C(V&&(V.ended_at||V.end_time)).slice(11,16)||"",ae=G.length>2?`+${Math.round(G.length/2)}min`:"";D.innerHTML=`
      <span class="admin-sd-axis-label">${w(K)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${w(ae)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${w(z)}</span>
    `,q&&(q.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:G[R],minute:R}))}function n(){let T=(g.msgQuery||"").trim().toLowerCase();return g.records.filter(function(x){let D=(x.status||"shown")==="blocked";return g.msgFilter==="blocked"&&!D?!1:T?String(x.text||"").toLowerCase().indexOf(T)!==-1||String(x.nickname||"").toLowerCase().indexOf(T)!==-1:!0})}function d(){let T=document.querySelector("[data-sd-msgs-wrap]"),x=document.querySelector("[data-sd-msgs-list]");if(!T||!x)return;if(!g.records.length){T.hidden=!0;return}T.hidden=!1;let D=n().slice(0,300);if(!D.length){x.innerHTML='<div class="admin-sd-msgs-empty">'+w(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}x.innerHTML=D.map(function(q){let G=(q.status||"shown")==="blocked",_=F(q.fingerprint||q.fp||""),R=k(q.timestamp||q.created_at),U=String(q.nickname||"").trim();return`
        <div class="admin-sd-msg-row${G?" is-blocked":""}">
          <span class="admin-sd-msg-time">${w(R)}</span>
          <span class="admin-sd-msg-dot" style="background:${_}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${w(q.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${w(ServerI18n.t("deliveryStatus_"+(q.status||"shown")))}
            ${q.delivery_reason?`<span class="admin-sd-msg-rule">${w(ServerI18n.t("deliveryReason_"+q.delivery_reason))}</span>`:""}
            ${G&&q.blockedBy?`<span class="admin-sd-msg-rule">${w(ServerI18n.t("sessionDetailBlockedBy",{rule:q.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${w(U||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function i(){let T=g.annotations||[],x=b(),D=document.querySelector("[data-sd-ann-count]");D&&(D.textContent=T.length?`${T.length} ANNOTATIONS`:"");let q=document.querySelector("[data-sd-ann-head]");q&&(q.textContent=T.length?`ANNOTATIONS \xB7 ${T.length}`:"ANNOTATIONS");let G=document.querySelector("[data-sd-ann-layer]");G&&(!x||T.length===0?G.innerHTML="":G.innerHTML=T.map(function(U){let V=L[U.label]||L.note,K=Math.min(100,Math.max(0,U.ts_ms/x*100)),z=U.id===g.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${V.shape}${z?" is-active":""}"
              data-sd-ann-marker="${w(U.id)}"
              style="left:${K.toFixed(2)}%;--ann-color:${V.color}"
              title="${w(V.label)} \xB7 ${A(U.ts_ms)}"
              aria-label="${w(V.label)} at ${A(U.ts_ms)}: ${w(U.note||"")}">
              ${V.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${z?`<span class="admin-sd-ann-tip"><span style="color:${V.color}">${V.icon}</span> ${w((U.note||"").slice(0,40))}${(U.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let _=document.querySelector("[data-sd-ann-legend]");_&&(_.innerHTML=Object.keys(L).map(function(U){let V=L[U],K=V.shape==="square"?"2px":V.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${V.color};border-radius:${K}"></span>
          <span class="admin-sd-ann-legend-label">${V.label}</span>
        </span>`}).join(""));let R=document.querySelector("[data-sd-ann-list]");if(R){if(T.length===0){R.innerHTML="";let U=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});U.dataset.emptyKind="session-annotations",R.appendChild(U);return}R.innerHTML=T.map(function(U){let V=L[U.label]||L.note,K=U.id===g.activeAnnId,ae=(U.note||"").length>80?(U.note||"").slice(0,80)+"\u2026":U.note||"";return`
        <div class="admin-sd-ann-row${K?" is-active":""}" data-sd-ann-row="${w(U.id)}">
          <span class="admin-sd-ann-ts" style="color:${V.color}">${A(U.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${V.color}">${V.icon} ${V.label}</span>
          <span class="admin-sd-ann-note">${w(ae)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${w(U.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function c(T){if(!g.sessionId)return;let x=window.HudConfirm;if(!x){let V=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:A(T)}),"");V!=null&&V.trim()&&a(T,"note",V.trim());return}let q="highlight",G="",_=document.createElement("div");_.className="admin-sd-ann-modal-body",_.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${A(T)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(L).map(function(V){let K=L[V];return`
              <button type="button" class="admin-sd-ann-modal-lbl${V==="highlight"?" is-active":""}"
                data-ann-label="${V}" style="--ann-color:${K.color}">
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
      </div>`,_.addEventListener("click",function(V){let K=V.target.closest("[data-ann-label]");K&&(q=K.dataset.annLabel,_.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(z){z.classList.toggle("is-active",z===K)}))});let R=_.querySelector("[data-ann-modal-note]"),U=_.querySelector("[data-ann-modal-counter]");R.addEventListener("input",function(){G=R.value,U.textContent=`${G.length} / 280`}),setTimeout(function(){R&&R.focus()},50),x.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:_,width:460}).then(function(V){V&&a(T,q,R.value.trim())})}async function a(T,x,D){if(g.sessionId)try{let q=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:g.sessionId,ts_ms:Math.max(0,Math.round(T)),label:x||"note",note:D||""})});if(!q.ok)throw new Error(`HTTP ${q.status}`);let G=await q.json();G.annotation&&(g.annotations.push(G.annotation),g.annotations.sort(function(_,R){return _.ts_ms-R.ts_ms}),g.activeAnnId=G.annotation.id,i(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(q){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:q.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function e(T){if(T)try{let x=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(T)}`,{method:"DELETE",credentials:"same-origin"});if(!x.ok)throw new Error(`HTTP ${x.status}`);g.annotations=g.annotations.filter(function(D){return D.id!==T}),g.activeAnnId===T&&(g.activeAnnId=null),i(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(x){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:x.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function l(T){let x=document.querySelector("[data-sd-timeline-inner]"),D=document.querySelector("[data-sd-ann-hover]");if(!x||!D)return;let q=x.getBoundingClientRect();if(!q.width)return;let G=T.clientX-q.left,_=Math.min(1,Math.max(0,G/q.width)),R=b();if(!R){D.hidden=!0;return}let U=Math.round(_*R);g.hoverTsMs=U,D.hidden=!1,D.style.left=`${(_*100).toFixed(2)}%`,D.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:A(U)})}function h(){let T=document.querySelector("[data-sd-ann-hover]");T&&(T.hidden=!0),g.hoverTsMs=null}function t(T){if(T.target.closest("[data-sd-ann-marker]"))return;let x=document.querySelector("[data-sd-timeline-inner]");if(!x)return;let D=x.getBoundingClientRect();if(!D.width)return;let q=T.clientX-D.left,G=Math.min(1,Math.max(0,q/D.width)),_=b();_&&c(Math.round(G*_))}async function s(){if(g.sessionId)try{let T=g.records.slice(0,500);if(!T.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let x=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:T,speedMultiplier:1})});if(x.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!x.ok)throw new Error("HTTP "+x.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function u(T,x){if(T==="back")window.location.hash="#/history/sessions";else if(T==="retry")g.sessionId&&S(g.sessionId);else if(T==="export"){if(!g.sessionId)return;let D=document.createElement("a");D.href="/admin/sessions/"+encodeURIComponent(g.sessionId)+"/export?format=csv",D.rel="noopener",document.body.appendChild(D),D.click(),D.remove()}else if(T==="replay")s();else if(T==="add-annotation"){let D=b(),q=g.hoverTsMs!=null?g.hoverTsMs:Math.round(D/2);c(q)}}function v(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let x=H();if(!x){g.sessionId=null,B(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}g.sessionId=x,S(x)}function E(){let T=document.getElementById("settings-grid");if(!T)return;let x=document.getElementById(y);x||(T.insertAdjacentHTML("beforeend",$()),x=document.getElementById(y),i()),x&&x.dataset.sdBound!=="1"&&(x.dataset.sdBound="1",x.addEventListener("click",function(D){let q=D.target.closest("[data-sd-ann-del]");if(q){D.stopPropagation(),e(q.dataset.sdAnnDel);return}let G=D.target.closest("[data-sd-ann-marker]");if(G){D.stopPropagation(),g.activeAnnId=G.dataset.sdAnnMarker,i();let K=document.querySelector(`[data-sd-ann-row="${g.activeAnnId}"]`);K&&K.scrollIntoView&&K.scrollIntoView({block:"nearest",behavior:"smooth"});return}let _=D.target.closest("[data-sd-ann-row]");if(_){g.activeAnnId=_.dataset.sdAnnRow,i();return}if(D.target.closest("[data-sd-timeline-inner]")){t(D);return}let U=D.target.closest("[data-sd-action]");if(U){D.preventDefault(),u(U.dataset.sdAction,U);return}let V=D.target.closest("[data-sd-filter]");V&&(g.msgFilter=V.dataset.sdFilter,x.querySelectorAll("[data-sd-filter]").forEach(function(K){K.classList.toggle("is-active",K===V)}),d())}),x.addEventListener("input",function(D){let q=D.target.closest("[data-sd-search]");q&&(g.msgQuery=q.value||"",d())}),x.addEventListener("mousemove",function(D){D.target.closest("[data-sd-timeline-inner]")&&l(D)}),x.addEventListener("mouseleave",function(D){D.target.closest&&D.target.closest("[data-sd-timeline-inner]")&&h()},!0)),g.sessionId=H(),g.sessionId?S(g.sessionId):B(ServerI18n.t("sessionDetailErrNoSessionSelected")),f||(f=!0,window.addEventListener("hashchange",v))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&E()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let x=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(y)&&x.indexOf("/session-detail")!==-1&&E(),window.addEventListener("admin-route-changed",function(D){(D&&D.detail&&D.detail.route)==="session-detail"&&E()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&E()})})})()});var Gt=he(()=>{(function(){"use strict";let y="sec-search-overview";var w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},g=20,f={query:"",scope:"session",blockedOnly:!1,who:"",shown:g,results:[],total:0,loading:!1,searched:!1},L=0;function H(){return'<div id="'+y+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+w(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+w(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+w(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+w(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+w(ServerI18n.t("searchWhoAria"))+'"><option value="">'+w(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+w(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+w(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function C(n){if(!n)return 200;for(var d=0,i=0;i<Math.min(n.length,6);i++)d=d*31+n.charCodeAt(i)&65535;return d%360}function I(n,d){if(!d||!n)return w(n||"");var i=w(n),c=w(d);try{var a=new RegExp("("+c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return i.replace(a,'<mark class="admin-search-hit">$1</mark>')}catch{return i}}function p(n){if(!n)return"\u2014";try{var d=new Date(n);return d.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return n}}function M(){var n=f.results;return f.blockedOnly&&(n=n.filter(function(d){return(d.status||"shown")==="blocked"})),f.who&&(n=n.filter(function(d){return(d.nickname||"")===f.who})),n}function F(){var n=document.getElementById("admin-search-count");if(n){if(!f.searched||!f.query.trim()){n.textContent="";return}n.textContent=ServerI18n.t("searchResultCount",{n:M().length})}}function $(){var n=document.querySelector("[data-search-who]");if(n){var d=[];f.results.forEach(function(c){var a=(c.nickname||"").trim();a&&d.indexOf(a)===-1&&d.push(a)}),d.sort();var i=f.who;n.innerHTML='<option value="">'+w(ServerI18n.t("searchWhoAnyone"))+"</option>"+d.map(function(c){return'<option value="'+w(c)+'"'+(c===i?" selected":"")+">"+w(c)+"</option>"}).join("")}}function S(){var n=document.getElementById("admin-search-results"),d=document.getElementById("admin-search-empty-state"),i=document.getElementById("admin-search-export-btn");if(n){n.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(t){t.remove()});var c=function(t){d&&(d.style.display="block",d.textContent=t),i&&(i.hidden=!0)};if(f.loading)return c(ServerI18n.t("searchSearching"));if(!f.searched)return c(ServerI18n.t("searchPromptStart"));var a=M();if(a.length===0)return c(ServerI18n.t("searchNoMatch"));d&&(d.style.display="none"),i&&(i.hidden=!1);var e=Math.min(a.length,f.shown),l=document.createDocumentFragment();if(a.slice(0,e).forEach(function(t){var s=document.createElement("div");s.className="admin-search-row",s.innerHTML='<span class="admin-search-row__ts">'+w(p(t.timestamp))+'</span><span class="admin-search-row__text">'+I(t.text||"",f.query)+'</span><span class="admin-search-row__nick">'+w((t.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+w(ServerI18n.t("deliveryStatus_"+(t.status||"shown")))+(t.delivery_reason?"<br>"+w(ServerI18n.t("deliveryReason_"+t.delivery_reason)):"")+"</span></span>",l.appendChild(s)}),n.appendChild(l),a.length>e){var h=document.createElement("button");h.type="button",h.className="admin-search-more",h.dataset.searchMore="1",h.textContent=ServerI18n.t("searchMoreLeft",{n:a.length-e}),n.appendChild(h)}}}function N(){F(),$(),S()}async function b(){var n=f.query.trim();if(!n){f.loading=!1,f.searched=!1,f.results=[],f.total=0,N();return}f.loading=!0,N();try{var d="/admin/search?q="+encodeURIComponent(n);if(f.scope==="session"){var i=await A();i&&(d+="&since="+encodeURIComponent(i))}var c=Date.now(),a=await fetch(d,{credentials:"same-origin"}),e=Date.now()-c;if(!a.ok)throw new Error("HTTP "+a.status);var l=await a.json();f.results=Array.isArray(l.results)?l.results:[],f.total=typeof l.total=="number"?l.total:f.results.length,f.shown=g}catch(h){console.error("[admin-search] fetch error:",h),f.results=[],f.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:h.message||""}),!1)}finally{f.loading=!1,f.searched=!0,N()}}var k=null;async function A(){if(k!==null)return k;try{var n=await fetch("/admin/session/current",{credentials:"same-origin"});if(n.ok){var d=await n.json();if(d.status==="live"&&d.started_at)return k=new Date(d.started_at*1e3).toISOString(),k}}catch{}return k="",""}function j(){clearTimeout(L),L=setTimeout(b,300)}function B(){if(f.results.length){var n=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];f.results.forEach(function(a){var e=[a.nickname||"",a.fingerprint||"",a.timestamp||"",a.status||"",a.text||"",a.delivery_reason||""].map(function(l){return'"'+String(l).replace(/"/g,'""')+'"'});n.push(e.join(","))});var d=new Blob(["\uFEFF"+n.join(`
`)],{type:"text/csv;charset=utf-8"}),i=URL.createObjectURL(d),c=document.createElement("a");c.href=i,c.download="danmu-search-"+(f.query||"export")+".csv",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(i)}}function P(){var n=document.getElementById(y);if(n){var d=document.getElementById("admin-search-input");d&&(d.addEventListener("input",function(){f.query=d.value,j()}),d.addEventListener("keydown",function(c){c.key==="Enter"&&(clearTimeout(L),f.query=d.value,b())})),n.addEventListener("click",function(c){var a=c.target.closest("[data-search-scope]");if(a){f.scope=a.dataset.searchScope,n.querySelectorAll("[data-search-scope]").forEach(function(l){l.classList.toggle("is-active",l===a)}),f.query.trim()&&j();return}var e=c.target.closest("[data-search-blocked]");if(e){f.blockedOnly=!f.blockedOnly,e.classList.toggle("is-active",f.blockedOnly),f.shown=g,N();return}if(c.target.closest("[data-search-more]")){f.shown+=g,S();return}}),n.addEventListener("change",function(c){var a=c.target.closest("[data-search-who]");a&&(f.who=a.value||"",f.shown=g,N())});var i=document.getElementById("admin-search-export-btn");i&&i.addEventListener("click",B)}}function m(){var n=document.querySelector(".admin-dash-grid"),d=document.getElementById(y);if(!(!n||!d)){var i=n.dataset.activeLeaf||"dashboard";d.style.display=i==="search"?"":"none"}}function r(){var n=document.getElementById("settings-grid");!n||document.getElementById(y)||(n.insertAdjacentHTML("beforeend",H()),P(),m())}function o(){if(window.DANMU_CONFIG?.session?.logged_in){var n=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&r(),m()});n.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",m),document.addEventListener("admin-panel-rendered",function(){r(),m()}),r()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var zt=he(()=>{(function(){"use strict";let y="sec-api-tokens-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},g=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],f=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],L={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function H(t){if(!t)return"\u2014";try{let s=new Date(t);if(isNaN(s.getTime()))return String(t);let u=v=>String(v).padStart(2,"0");return`${s.getFullYear()}-${u(s.getMonth()+1)}-${u(s.getDate())}`}catch{return String(t)}}function C(t){if(!t)return null;try{let s=new Date(t);if(isNaN(s.getTime()))return null;let u=v=>String(v).padStart(2,"0");return`${s.getFullYear()}-${u(s.getMonth()+1)}-${u(s.getDate())} ${u(s.getHours())}:${u(s.getMinutes())}`}catch{return null}}function I(t){let s=Number(t);return isNaN(s)?"0":s.toLocaleString()}function p(t){if(!t||t.enabled===!1)return"inactive";if(!t.expires_at)return"active";try{let s=new Date(t.expires_at).getTime(),u=Date.now();if(s<u)return"expired";if(s-u<168*3600*1e3)return"expiring"}catch{}return"active"}function M(t){if(!t)return 1/0;try{return Math.floor((Date.now()-new Date(t).getTime())/864e5)}catch{return 1/0}}function F(t){return!t||!t.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':t.map(function(s){let u="admin-ui-pill admin-at-scope-badge";return s==="admin:*"?u+=" is-danger":s.startsWith("fire:")?u+=" is-warn":s.startsWith("read:stats")?u+=" is-cyan":u+=" is-success",`<span class="${u}">${w(s)}</span>`}).join(" ")}function $(t){let s="admin-ui-dot admin-at-dot";return t==="active"?s+=" is-success":t==="expiring"?s+=" is-warn":t==="expired"?s+=" is-danger":s+=" is-muted",`<span class="${s}" aria-hidden="true"></span>`}function S(){let t=g.map(function(u){let v=u.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",T=`admin-ui-pill admin-at-scope-badge is-${u.badge==="red"?"danger":u.badge==="amber"?"warn":u.badge==="green"?"success":u.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${w(u.id)}"
          >
          <span class="${T}">${w(u.badgeTxt)}</span>
          <span class="admin-at-scope-label">${w(ServerI18n.t(u.labelKey))}</span>
          ${v}
        </label>
      `}).join(""),s=f.map(function(u){let v=u.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${u.days!==null?String(u.days):"null"}" ${v} class="sr-only">
          <span>${w(ServerI18n.t(u.labelKey))}</span>
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
    `}async function N(){j(!0);try{let t=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let s=await t.json();L.tokens=s.tokens||s||[],P()}catch(t){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:t.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{j(!1)}}async function b(t){L.creating=!0,B(!0),d();try{let s=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!s.ok){let E=await s.json().catch(()=>({}));throw new Error(E.error||E.message||`HTTP ${s.status}`)}let u=await s.json(),v=u.token||u.raw_token||u.access_token||null;L.newTokenRaw=v,m(v),o(),await N(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(s){n(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:s.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:s.message||""}),!1)}finally{L.creating=!1,B(!1)}}async function k(t,s){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${w(s||t)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let v=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(t)}`,{method:"DELETE"});if(!v.ok){let E=await v.json().catch(()=>({}));throw new Error(E.error||E.message||`HTTP ${v.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await N()}catch(v){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:v.message||""}),!1)}}async function A(t,s){try{let u=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(t)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:s})});if(!u.ok){let v=await u.json().catch(()=>({}));throw new Error(v.error||v.message||`HTTP ${u.status}`)}window.showToast&&window.showToast(s?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await N()}catch(u){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:u.message||""}),!1)}}function j(t){let s=document.querySelector("[data-at-list-loading]");s&&(s.hidden=!t)}function B(t){let s=document.getElementById("adminAtSubmitBtn");s&&(s.disabled=t,s.textContent=t?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function P(){let t=L.tokens,s=document.querySelector("[data-at-empty]"),u=document.querySelector("[data-at-table-wrap]"),v=document.querySelector("[data-at-tbody]");if(!(!s||!u||!v)){if(!t||t.length===0){if(!s.firstElementChild&&window.AdminEmpty){let E=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});E.dataset.emptyKind="api-tokens",s.appendChild(E)}s.hidden=!1,u.hidden=!0;return}s.hidden=!0,u.hidden=!1,v.innerHTML=t.map(function(E){let T=p(E),x=$(T),D=E.scopes||E.scope||[],q=Array.isArray(D)?D:String(D).split(",").map(K=>K.trim()).filter(Boolean),_=M(E.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",R=T==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",U=T==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",V=E.last_used_at?`${C(E.last_used_at)||H(E.last_used_at)}<br><span class="admin-at-ip">${w(E.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${w(E.id||E.token_id||"")}">
          <td class="admin-at-td-label">
            ${x}
            <span class="admin-at-label-text">${w(E.label||E.name||"\u2014")}</span>
            ${_}${R}${U}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${w(E.prefix||E.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${F(q)}</div>
          </td>
          <td class="admin-at-td-used">${V}</td>
          <td class="admin-at-td-usage">${I(E.usage_count||E.use_count)}</td>
          <td class="admin-at-td-created">${H(E.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${w(E.id||E.token_id||"")}"
              data-token-enabled="${E.enabled===!1?"0":"1"}"
              title="${E.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${E.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${w(E.id||E.token_id||"")}"
              data-token-label="${w(E.label||E.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function m(t){let s=document.getElementById("adminAtSuccessBanner"),u=document.getElementById("adminAtTokenDisplay"),v=document.getElementById("adminAtCreateForm");s&&(s.hidden=!1),u&&t&&(u.value=t),v&&(v.style.opacity="0.5"),s&&s.scrollIntoView({behavior:"smooth",block:"nearest"})}function r(){let t=document.getElementById("adminAtSuccessBanner"),s=document.getElementById("adminAtCreateForm");t&&(t.hidden=!0),s&&(s.style.opacity=""),L.newTokenRaw=null}function o(){let t=document.getElementById("adminAtCreateForm");t&&t.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(v){v.classList.remove("is-active")});let s=document.querySelector("input[name='adminAtExpiry'][value='90']");if(s){s.checked=!0;let v=s.closest(".admin-at-expiry-btn");v&&v.classList.add("is-active")}let u=document.getElementById("adminAtAdminWarn");u&&(u.hidden=!0),d()}function n(t){let s=document.getElementById("adminAtFormError");s&&(s.hidden=!1,s.textContent=t)}function d(){let t=document.getElementById("adminAtFormError");t&&(t.hidden=!0,t.textContent="")}function i(){let t=document.getElementById("adminAtLabel"),s=t?t.value.trim():"",u=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(x){u.push(x.value)});let v=document.querySelector("input[name='adminAtExpiry']:checked"),E=v?v.value:"90",T=E==="null"?null:parseInt(E,10);return{label:s,scopes:u,expiry_days:T}}function c(t){return t.label?t.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!t.scopes||t.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function a(t){if(t.preventDefault(),L.creating)return;d();let s=i(),u=c(s);if(u){n(u);return}b(s)}function e(){let t=L.newTokenRaw;if(!t)return;let s=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(function(){s&&(s.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){s.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let u=document.getElementById("adminAtTokenDisplay");u&&(u.select(),document.execCommand("copy")),s&&(s.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){s.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function l(){let t=document.getElementById(y);if(!t)return;t.addEventListener("click",function(E){let T=E.target.closest("[data-at-action]");if(T){let D=T.dataset.atAction;if(D==="revoke"){let q=T.dataset.tokenId,G=T.dataset.tokenLabel;k(q,G)}else if(D==="toggle"){let q=T.dataset.tokenId,G=T.dataset.tokenEnabled==="1";A(q,!G)}else D==="copy-token"&&e();return}let x=E.target.closest(".admin-at-expiry-btn");x&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(D){D.classList.remove("is-active")}),x.classList.add("is-active"))});let s=document.getElementById("adminAtScope_admin__");s&&s.addEventListener("change",function(){let E=document.getElementById("adminAtAdminWarn");E&&(E.hidden=!s.checked)});let u=document.getElementById("adminAtCreateForm");u&&u.addEventListener("submit",a);let v=document.querySelector("input[name='adminAtExpiry'][value='90']");if(v){let E=v.closest(".admin-at-expiry-btn");E&&E.classList.add("is-active")}}function h(){let t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("beforeend",S()),l(),N())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&h()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&h()})})()});var Vt=he(()=>{(function(){"use strict";let y="sec-wcag-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})};function g(o){let n=o.replace(/^#/,""),d=n.length===3?n.split("").map(function(i){return i+i}).join(""):n;return[parseInt(d.slice(0,2),16)/255,parseInt(d.slice(2,4),16)/255,parseInt(d.slice(4,6),16)/255]}function f(o){return o<=.04045?o/12.92:Math.pow((o+.055)/1.055,2.4)}function L(o){let n=g(o);return .2126*f(n[0])+.7152*f(n[1])+.0722*f(n[2])}function H(o,n){let d=L(o),i=L(n),c=Math.max(d,i),a=Math.min(d,i);return(c+.05)/(a+.05)}function C(o){return o>=7?"AAA":o>=4.5?"AA":o>=3?"AA-large":"fail"}function I(o,n){let d=L(n),i=[],c=g(o);for(let a=.05;a<=.6&&i.length<3;a+=.05){let l="#"+c.map(function(t){return Math.min(1,t+a)}).map(function(t){return Math.round(t*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),h=H(l,n);h>=4.5&&i.push({hex:l,ratio:h})}return i}let p=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],M={fg:"#FB7185",bg:"#000000"},F="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",$={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function S(){let o=p.filter(function(i){return C(H(i.fg,i.bg))!=="fail"}).length,n=p.length-o,d=Math.round(o/p.length*100);return`
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
              ${N("BELOW AA",n,ServerI18n.t("wcagStatFailLabel"))}
              ${N("PAIRS",p.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${N("PASS RATE",d+"%",ServerI18n.t("wcagStatRateLabel"))}
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
              ${p.map(function(i,c){return b(i,c)}).join("")}
            </div>

            <div class="admin-wcag-guardrail">
              <span class="admin-ui-monolabel">${ServerI18n.t("mlBuiltInGuardrail")}</span>
              ${ServerI18n.t("wcagGuardrailNote")}
            </div>
          </div>

          <!-- Right: single-pair tester -->
          <div class="admin-ui-card hud-page-col-gap admin-wcag-tester" data-wcag-tester>
            ${k()}
          </div>
        </div>
      </div>`}function N(o,n,d){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${w(String(n))}</span>
        <span class="hud-stat-tile-label">${w(d)}</span>
      </div>`}function b(o,n){let d=H(o.fg,o.bg),i=C(d),c=$[i],a=ServerI18n.t(o.nameKey),e=c.labelKey?ServerI18n.t(c.labelKey):c.label,l=i==="fail"?ServerI18n.t("wcagWarnFail"):i==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${F}"
        data-wcag-pair-idx="${n}" role="button" tabindex="0"
        aria-label="${w(ServerI18n.t("wcagPairAriaLabel",{name:a,ratio:d.toFixed(2),level:e.slice(2)}))}">
        <span class="admin-wcag-pair-name">${w(a)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${w(o.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${w(o.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${w(o.fg)}">${w(o.fg)} / ${w(o.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${d.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${c.mod}">${e}</span>
        ${l?`<span class="admin-wcag-warn">\u26A0 ${l}</span>`:""}
      </div>`}function k(){let o=H(M.fg,M.bg),n=C(o),d=$[n],i=d.labelKey?ServerI18n.t(d.labelKey):d.label,c=I(M.fg,M.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${A(ServerI18n.t("wcagForegroundLabel"),M.fg,"fg")}
        ${A(ServerI18n.t("wcagBackgroundLabel"),M.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${w(M.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${w(M.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${w(M.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${w(M.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${o.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${d.mod}">${i}</span>
      </div>

      <div class="admin-wcag-levels">
        ${j(ServerI18n.t("wcagCheckAANormal"),o>=4.5)}
        ${j(ServerI18n.t("wcagCheckAALarge"),o>=3)}
        ${j(ServerI18n.t("wcagCheckAAANormal"),o>=7)}
        ${j(ServerI18n.t("wcagCheckAAALarge"),o>=4.5)}
      </div>

      ${c.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${c.map(function(a){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${w(a.hex)}"
                title="${w(ServerI18n.t("wcagSuggApplyTitle",{ratio:a.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${w(M.bg)};color:${w(a.hex)}">${w(a.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${a.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function A(o,n,d){let i="wcag-tester-"+d;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${i}">${w(o)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${w(n)}"></span>
          <input type="text" id="${i}" class="admin-ui-input" data-wcag-tester-${d}
            aria-label="${w(ServerI18n.t("wcagHexAria",{label:o}))}"
            value="${w(n)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function j(o,n){return`<div class="admin-wcag-level ${n?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${n?"\u2713":"\u2717"}</span>
      <span>${w(o)}</span>
    </div>`}function B(){let o=document.getElementById(y);o&&(o.addEventListener("click",function(n){let d=n.target.closest("[data-wcag-pair-idx]");if(d){P(d);return}let i=n.target.closest("[data-wcag-sugg]");i&&(M.fg=i.dataset.wcagSugg,m())}),o.addEventListener("keydown",function(n){if(n.key!=="Enter"&&n.key!==" "&&n.key!=="Spacebar")return;let d=n.target.closest("[data-wcag-pair-idx]");d&&(n.preventDefault(),P(d))}),o.addEventListener("input",function(n){let d=n.target.closest("[data-wcag-tester-fg]"),i=n.target.closest("[data-wcag-tester-bg]");d&&/^#[0-9A-Fa-f]{6}$/.test(d.value)&&(M.fg=d.value.toUpperCase(),m()),i&&/^#[0-9A-Fa-f]{6}$/.test(i.value)&&(M.bg=i.value.toUpperCase(),m())}))}function P(o){let n=p[parseInt(o.dataset.wcagPairIdx,10)];n&&(M.fg=n.fg,M.bg=n.bg,m())}function m(){let o=document.querySelector("[data-wcag-tester]");o&&(o.innerHTML=k())}function r(){let o=document.getElementById("settings-grid");!o||document.getElementById(y)||(o.insertAdjacentHTML("beforeend",S()),B())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&r()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&r()})})()});var Jt=he(()=>{(function(){"use strict";let y="danmu.onboarding.done",w="admin-onboarding-root",H=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],C=0,I=!1;window.AdminOnboarding={start:S,isDone:function(){try{return!!localStorage.getItem(y)}catch{return!1}},reset:function(){try{localStorage.removeItem(y)}catch{}}};let p=new Set(["live","dashboard"]);function M(){if(I||window.AdminOnboarding.isDone()||!p.has(F()))return;let o=()=>!!document.querySelector(".admin-session-banner-live");o()||setTimeout(()=>{I||window.AdminOnboarding.isDone()||o()||p.has(F())&&S()},1200)}function F(){let o=document.querySelector(".admin-dash-grid");return o&&o.dataset.activeRoute||"live"}function $(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&S()}function S(){I||(I=!0,C=0,j())}function N(o){if(!I)return;I=!1,document.body.removeEventListener("click",k),document.removeEventListener("keydown",A),window.removeEventListener("resize",B);let n=document.getElementById(w);if(n&&n.remove(),o)try{localStorage.setItem(y,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function b(){C<H.length-1?(C++,B()):N(!0)}function k(o){let n=o.target.closest("[data-ob-action]");n&&(o.stopPropagation(),n.dataset.obAction==="next"?b():n.dataset.obAction==="skip"&&N(!1))}function A(o){I&&o.key==="Escape"&&(o.preventDefault(),N(!1))}function j(){let o=document.getElementById(w);o&&o.remove();let n=document.createElement("div");n.id=w,n.className="admin-ob-root",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","false"),n.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(n),document.body.addEventListener("click",k),document.addEventListener("keydown",A),window.addEventListener("resize",B),B()}function B(){let o=document.getElementById(w);if(!o)return;let n=H[C],d=H.length,i=m(n.target),c=window.innerWidth,a=window.innerHeight,e="";i?e='<div class="admin-ob-spot" style="left:'+(i.left-8)+"px;top:"+(i.top-8)+"px;width:"+(i.width+16)+"px;height:"+(i.height+16)+'px;"></div>':e='<div class="admin-ob-scrim"></div>';let l=(c-360)/2,h=a/2-110,t="none";if(i){let E=i.left+i.width/2;n.side==="top"?(l=E-360/2,h=i.top-16,t="bottom"):n.side==="right"?(l=i.right+16+8,h=i.top,t="left"):(l=E-360/2,h=i.bottom+16+8,t="top"),l=Math.max(16,Math.min(c-360-16,l))}let s=H.map(function(E,T){return'<span class="admin-ob-progress-item'+(T===C?" is-current":"")+'">'+(T+1)+" "+r(ServerI18n.t(E.labelKey))+"</span>"+(T<d-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");o.innerHTML=e+'<div class="admin-ob-bubble" data-arrow="'+t+'" style="left:'+l+"px;top:"+h+'px"><div class="admin-ob-count">'+(C+1)+" / "+d+'</div><div class="admin-ob-title">'+r(ServerI18n.t(n.titleKey))+'</div><div class="admin-ob-body">'+r(ServerI18n.t(n.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+r(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+r(ServerI18n.t(C===d-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+s+"</div></div>";let u=o.querySelector(".admin-ob-bubble");if(!u||!i)return;let v=u.offsetHeight;if(n.side==="top")u.style.top=Math.max(16,i.top-16-8-v)+"px";else if(h+v>a-16){let E=i.top-16-8-v;E>=16?(u.style.top=E+"px",u.setAttribute("data-arrow","bottom")):(u.style.top=Math.max(16,a-v-16)+"px",u.setAttribute("data-arrow","none"))}P(u,i)}function P(o,n){let d=o.getAttribute("data-arrow");if(d==="none")return;let i=o.getBoundingClientRect(),c=d==="top"||d==="bottom",a=c?n.left+n.width/2-i.left:n.top+n.height/2-i.top,e=c?i.width:i.height,l=Math.max(16,Math.min(e-32,a-8));o.style.setProperty("--ob-arrow",l+"px")}function m(o){if(!o)return null;let n=document.querySelector(o);if(!n)return null;let d=n.getBoundingClientRect();return d.width<8||d.height<8||d.bottom<0||d.top>window.innerHeight?null:d}function r(o){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(o):o==null?"":String(o).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",$),$(),window.addEventListener("hashchange",function(){p.has(F())&&setTimeout(M,600)}),setTimeout(M,800))})})()});var nn=he(()=>{var Fi=be(Ne()),Di=be(Pe()),Mi=be(Re()),Ni=be(Oe()),Pi=be(qe()),Ri=be(He()),Oi=be(je()),qi=be(Ue()),Hi=be(Ke()),ji=be(We()),Ui=be(Ge()),Ki=be(ze()),Wi=be(Ve()),Gi=be(Je()),zi=be(Ye()),Vi=be(Qe()),Ji=be(Xe()),Yi=be(Ze()),Qi=be(et()),Xi=be(tt()),Zi=be(nt()),es=be(at()),ts=be(it()),ns=be(st()),as=be(ot()),is=be(rt()),ss=be(dt()),os=be(lt()),rs=be(ct()),ds=be(ut()),ls=be(mt()),cs=be(pt()),us=be(vt()),ms=be(ft()),ps=be(ht()),vs=be(gt()),fs=be(yt()),hs=be(bt()),gs=be(wt()),ys=be(St()),bs=be(kt()),ws=be(It()),Ss=be(Tt()),ks=be(_t()),Is=be(Et()),Ts=be($t()),_s=be(xt()),Es=be(Lt()),$s=be(Ct()),xs=be(At()),Ls=be(Bt()),Cs=be(Ft()),As=be(Dt()),Bs=be(Mt()),Fs=be(Nt()),Ds=be(Pt()),Ms=be(Rt()),Ns=be(Ot()),Ps=be(qt()),Rs=be(Ht()),Os=be(jt()),qs=be(Ut()),Hs=be(Kt()),js=be(Wt()),Us=be(Gt()),Ks=be(zt()),Ws=be(Vt()),Gs=be(Jt())});nn();})();
