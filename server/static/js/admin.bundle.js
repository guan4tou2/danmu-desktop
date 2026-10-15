/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var Ut=Object.create;var Le=Object.defineProperty;var Kt=Object.getOwnPropertyDescriptor;var Wt=Object.getOwnPropertyNames;var Gt=Object.getPrototypeOf,zt=Object.prototype.hasOwnProperty;var me=(y,b)=>()=>{try{return b||y((b={exports:{}}).exports,b),b.exports}catch(g){throw b=0,g}};var Vt=(y,b,g,h)=>{if(b&&typeof b=="object"||typeof b=="function")for(let _ of Wt(b))!zt.call(y,_)&&_!==g&&Le(y,_,{get:()=>b[_],enumerable:!(h=Kt(b,_))||h.enumerable});return y};var pe=(y,b,g)=>(g=y!=null?Ut(Gt(y)):{},Vt(b||!y||!y.__esModule?Le(g,"default",{value:y,enumerable:!0}):g,y));var Ce=me(()=>{(function(){"use strict";function y(b,g=!0){let h=document.getElementById("toast-container");if(!h)return;let _=document.createElement("div");_.className="flex items-center w-full max-w-xs p-4 mb-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 transform transition-all opacity-0 translate-x-full",_.setAttribute("role","alert");let G=getComputedStyle(document.documentElement),S=G.getPropertyValue("--motion-normal").trim()||"180ms",A=G.getPropertyValue("--ease-spring").trim()||"cubic-bezier(0.34, 1.56, 0.64, 1)";_.style.transition=`transform ${S} ${A}, opacity ${S} ease-out`;let v=g?'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>':'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',R=g?"text-green-500":"text-red-500";_.innerHTML=`
      <div class="${R}">${v}</div>
      <div class="pl-4 text-sm font-normal"></div>
    `;let L=_.querySelector(".pl-4.text-sm.font-normal");L.textContent=b,h.appendChild(_),requestAnimationFrame(()=>{_.classList.remove("opacity-0","translate-x-full")}),setTimeout(()=>{_.classList.add("opacity-0","translate-x-full"),_.addEventListener("transitionend",()=>{_.remove()})},3e3)}window.showToast=y})()});var Ae=me(()=>{(function(){"use strict";var y="admin-details-open-state";function b(){try{return JSON.parse(localStorage.getItem(y))||{}}catch{return{}}}function g(P){try{localStorage.setItem(y,JSON.stringify(P))}catch{}}var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function _(P){return P==null?"":String(P).replace(/[&<>"']/g,function(N){return h[N]})}function G(){var P=document.querySelector("script[nonce]");return P&&P.nonce||""}function S(P,N){var T=G();return"<style"+(P?' id="'+_(P)+'"':"")+(T?' nonce="'+_(T)+'"':"")+">"+(N||"")+"</style>"}var A='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',v=[],R=null;function L(P){if(!P)return!1;for(var N=P;N&&N!==document.documentElement;N=N.parentElement)if(N.style&&N.style.display==="none")return!1;return!!(P.offsetParent||P.getClientRects().length)}function E(){var P=document.hidden;v.forEach(function(N){var T=typeof N.el=="function"?N.el():N.el,C=!P&&L(T);if(C&&!N.timer){if(N.immediate!==!1)try{N.tick()}catch{}N.timer=setInterval(N.tick,N.intervalMs)}else!C&&N.timer&&(clearInterval(N.timer),N.timer=0)})}function x(P){var N={el:P.el,intervalMs:P.intervalMs,tick:P.tick,immediate:P.immediate,timer:0};return v.push(N),R||(R=new MutationObserver(function(){E()}),R.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden"]}),window.addEventListener("hashchange",E),document.addEventListener("visibilitychange",E),document.addEventListener("admin-panel-rendered",E)),E(),function(){N.timer&&clearInterval(N.timer);var C=v.indexOf(N);C!==-1&&v.splice(C,1)}}window.AdminUtils={DETAILS_STATE_KEY:y,loadDetailsState:b,saveDetailsState:g,escapeHtml:_,cspNonce:G,styleTag:S,closeIcon:A,pollWhileVisible:x}})()});var Be=me(()=>{(function(){"use strict";function y(b,g,h,_){let G=b.querySelector("[data-route-breadcrumb]");if(!G)return;let S=Array.from(b.querySelectorAll(".admin-dash-nav-row[data-route]")),A=S.find(C=>C.dataset.route===g)||S.find(C=>C.dataset.route===h);if(!A){G.replaceChildren(),G.hidden=!0;return}let v="",R=A.previousElementSibling;for(;R;){if(R.classList.contains("admin-dash-nav-label")){v=(R.querySelector("[data-i18n]")||R).textContent.trim();break}R=R.previousElementSibling}let E=(A.querySelector("[data-i18n]")||A.querySelector("span:nth-child(2)")||A).textContent.trim(),x=_?b.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,P=x?(x.querySelector(".admin-tabs-btn-label")||x).textContent.trim():"",N=[v,E,P].filter(Boolean),T=document.createDocumentFragment();N.forEach((C,U)=>{if(U){let f=document.createElement("span");f.className="admin-dash-breadcrumb-sep",f.setAttribute("aria-hidden","true"),f.textContent="\u203A",T.appendChild(f)}let B=document.createElement("span"),O=U===N.length-1;B.className="admin-dash-breadcrumb-item"+(O?" is-current":""),O&&B.setAttribute("aria-current","page"),B.textContent=C,T.appendChild(B)}),G.replaceChildren(T),G.hidden=N.length===0}window.AdminBreadcrumb={render:y}})()});var Fe=me(()=>{(function(y){"use strict";let b={moderation:{defaultTab:"queue",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",sections:["sec-blacklist","sec-filters"]},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},integrations:{defaultTab:"webhooks",tabs:[{slug:"webhooks",labelKey:"tabExtWebhooks",en:"WEBHOOKS",section:"sec-webhooks"},{slug:"plugins",labelKey:"tabExtPlugins",en:"PLUGINS",sections:["sec-plugins","sec-extensions-overview"]},{slug:"api-tokens",labelKey:"tabExtApiKeys",en:"API KEYS",section:"sec-api-tokens-overview"},{slug:"scheduler",labelKey:"tabExtScheduler",en:"SCHEDULER",section:"sec-scheduler"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function g(E){return Array.isArray(E.sections)?E.sections:E.section?[E.section]:[]}function h(E){return!!b[E]}function _(E){return b[E]||null}let G={moderation:{filters:"blacklist",fingerprints:"bans"}};function S(E,x){let P=b[E];if(!P)return null;let N=U=>P.tabs.some(B=>B.slug===U),T=G[E]?.[x];if(T&&N(T))return T;if(x&&N(x))return x;let C=y.AdminRouter?.tabMemory?.get?.(E);return C&&N(C)?C:P.defaultTab}function A(E,x,P){let N=b[E];if(!N)return null;let T=document.createElement("div");return T.className="admin-tabs-strip",T.dataset.nav=E,T.setAttribute("role","tablist"),T.setAttribute("aria-label",E+" tabs"),N.tabs.forEach(C=>{let U=document.createElement("button");U.type="button",U.className="admin-tabs-btn"+(C.slug===x?" is-active":""),U.dataset.nav=E,U.dataset.tab=C.slug,U.setAttribute("role","tab"),U.setAttribute("aria-selected",C.slug===x?"true":"false");let B=document.createElement("span");B.className="admin-tabs-btn-label",B.textContent=C.labelKey?ServerI18n.t(C.labelKey):C.label,U.appendChild(B);let O=document.createElement("span");O.className="admin-tabs-btn-count",O.dataset.tabCount=C.slug,O.textContent=v[E]&&v[E][C.slug]?v[E][C.slug]:"",U.appendChild(O),U.addEventListener("click",()=>{typeof P?.onSelect=="function"&&P.onSelect(C.slug)}),T.appendChild(U)}),T}let v={};function R(E,x,P){if(!b[E])return;v[E]=v[E]||{},v[E][x]=P==null?"":String(P);let N=document.querySelector('.admin-tabs-strip[data-nav="'+E+'"] [data-tab-count="'+x+'"]');N&&(N.textContent=v[E][x])}function L(E,x,P){let N=b[E];!N||!P||N.tabs.forEach(T=>{let C=T.slug===x;g(T).forEach(U=>{let B=P.querySelector("#"+U);B&&(B.style.display=C?"":"none")})})}y.AdminTabs={hasTabsFor:h,getConfig:_,resolveActiveTab:S,renderTabStrip:A,applyTabSectionVisibility:L,setTabCount:R}})(window)});var De=me(()=>{(function(y,b){"use strict";let g="data-quick-action-host",h="admin-quick-action-bar";function _(R){if(R?.host instanceof HTMLElement)return R.host;let L=b.querySelector(".admin-dash-main");if(!L)return b.body;let E=L.querySelector(`[${g}]`);if(!E){E=b.createElement("div"),E.setAttribute(g,"");let x=L.querySelector(".admin-dash-topbar"),N=L.querySelector("[data-admin-tabs-host]")||x;N&&N.parentNode?N.insertAdjacentElement("afterend",E):L.prepend(E)}return E}function G(R,L){typeof y.showToast=="function"&&y.showToast(R,L!==!1)}function S({label:R,undoLabel:L,onUndo:E,windowMs:x}){let P=_(),N=P.querySelector("."+h);N&&N.remove();let T=b.createElement("div");T.className=h,T.setAttribute("role","status"),T.setAttribute("aria-live","polite");let C=b.createElement("span");C.className=h+"-text",C.textContent="\u2713 "+R,T.appendChild(C);let U=b.createElement("button");U.type="button",U.className=h+"-undo",U.textContent="\u21B6 "+(L||ServerI18n.t("qaUndoLabel")),T.appendChild(U);let B=()=>{T.classList.add("is-leaving"),setTimeout(()=>T.remove(),200)},O=setTimeout(B,x||5e3);return U.addEventListener("click",async()=>{clearTimeout(O),U.disabled=!0,U.textContent=ServerI18n.t("qaUndoing");try{await E(),G(ServerI18n.t("qaUndone"),!0)}catch(f){G(ServerI18n.t("qaUndoFailed",{msg:f?.message||String(f)}),!1)}finally{B()}}),P.appendChild(T),requestAnimationFrame(()=>T.classList.add("is-entering")),T}function A(R){if(!R||typeof R!="object")return;let L=R.label||ServerI18n.t("qaDone");R.toast!==!1&&G(L,!0),R.undo&&typeof R.undo.run=="function"&&S({label:L,undoLabel:R.undo.label,onUndo:R.undo.run,windowMs:R.undo.window})}function v(){b.querySelectorAll("."+h).forEach(R=>R.remove())}y.AdminQuickAction={fire:A,dismissAll:v}})(window,document)});var Me=me(()=>{(function(){"use strict";let y="admin-hud-modal-root",b=null,g=null,h='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function _(){let v=document.getElementById(y);return v?Array.prototype.slice.call(v.querySelectorAll(h)).filter(R=>R.offsetParent!==null||R===document.activeElement):[]}function G(v){let R=document.getElementById(y);if(R&&R.remove(),b&&(b(v),b=null),document.removeEventListener("keydown",S),g&&typeof g.focus=="function")try{g.focus()}catch{}g=null}function S(v){if(v.key==="Escape"){v.preventDefault(),G(!1);return}if(v.key==="Tab"){let R=_();if(!R.length){v.preventDefault();return}let L=R[0],E=R[R.length-1],x=document.activeElement;v.shiftKey?(x===L||!R.includes(x))&&(v.preventDefault(),E.focus()):(x===E||!R.includes(x))&&(v.preventDefault(),L.focus())}}function A(v){return new Promise(R=>{b&&G(!1),b=R,g=document.activeElement;let{icon:L="\u26A0",title:E=ServerI18n.t("hudConfirmTitle"),subtitle:x="",severity:P="warn",body:N="",titleText:T,bodyText:C,confirmLabel:U=ServerI18n.t("hudConfirmLabel"),cancelLabel:B=ServerI18n.t("cancel"),width:O=480}=v||{},f=document.createElement("div");f.id=y,f.className=`admin-hud-modal admin-hud-modal--${P}`,f.setAttribute("role","dialog"),f.setAttribute("aria-modal","true"),f.setAttribute("aria-labelledby","admin-hud-modal-title");let c=x?`<div class="admin-hud-modal__subtitle">${x}</div>`:"",i=typeof N=="string"?N:"",a=typeof N!="string"&&N&&N.nodeType;if(f.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${O}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${L}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${E}</div>
              ${c}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${i}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${B}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${U}</button>
          </div>
        </div>`,T!=null){let r=f.querySelector(".admin-hud-modal__title");r&&(r.textContent=String(T))}if(C!=null){let r=f.querySelector("[data-modal-body]");r&&(r.textContent=String(C))}if(a){let r=f.querySelector("[data-modal-body]");r.innerHTML="",r.appendChild(N)}f.addEventListener("click",function(r){let s=r.target.closest("[data-modal-action]");s&&(r.stopPropagation(),G(s.dataset.modalAction==="confirm"))}),document.body.appendChild(f),document.addEventListener("keydown",S),requestAnimationFrame(()=>{f.querySelector(".admin-hud-modal__btn--confirm")?.focus()})})}window.HudConfirm={open:A}})()});var Ne=me(()=>{(function(){"use strict";function b(A){let v=document.createElement("div");return v.className="admin-skel-slow",v.hidden=!0,v.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",A.appendChild(v),setTimeout(function(){v.isConnected&&(v.hidden=!1)},3e3),A}function g(A,v){let R=document.createElement("div");if(R.className="admin-skel "+(A||""),v)for(let L in v)R.style[L]=v[L];return R}function h({rows:A=8}={}){let v=document.createElement("div");v.className="admin-skel-card admin-skel-list";let R=document.createElement("div");R.className="admin-skel-list__head",[60,80,140,200,80].forEach(L=>{R.appendChild(g("admin-skel-bar",{width:L+"px",height:"10px"}))}),v.appendChild(R);for(let L=0;L<A;L++){let E=document.createElement("div");E.className="admin-skel-list__row",E.appendChild(g("admin-skel-circle",{width:"24px",height:"24px"}));let x=document.createElement("div");x.className="admin-skel-list__col",x.appendChild(g("admin-skel-bar",{width:50+L*13%40+"%",height:"10px"})),x.appendChild(g("admin-skel-bar",{width:30+L*7%30+"%",height:"8px"})),E.appendChild(x),E.appendChild(g("admin-skel-bar",{width:"60px",height:"10px"})),v.appendChild(E)}return b(v)}function _({cols:A=4}={}){let v=document.createElement("div");v.className="admin-skel-stats",v.style.gridTemplateColumns=`repeat(${A}, 1fr)`;for(let R=0;R<A;R++){let L=document.createElement("div");L.className="admin-skel-card admin-skel-tile",L.appendChild(g("admin-skel-bar",{width:"60px",height:"8px"})),L.appendChild(g("admin-skel-bar",{width:"80px",height:"28px"})),L.appendChild(g("admin-skel-bar",{width:"100%",height:"18px"})),L.appendChild(g("admin-skel-bar",{width:"90px",height:"8px"})),v.appendChild(L)}return b(v)}function G(){let A=document.createElement("div");A.className="admin-skel-card admin-skel-chart";let v=document.createElement("div");v.className="admin-skel-chart__head",v.appendChild(g("admin-skel-bar",{width:"120px",height:"10px"}));let R=document.createElement("span");R.style.flex="1",v.appendChild(R),v.appendChild(g("admin-skel-bar",{width:"80px",height:"10px"})),A.appendChild(v);let L=document.createElement("div");L.className="admin-skel-chart__body";let E=document.createElement("div");E.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>E.appendChild(g("admin-skel-bar",{width:"24px",height:"6px"}))),L.appendChild(E);let x=document.createElement("div");return x.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(N=>x.appendChild(g("admin-skel-bar admin-skel-chart__bar",{height:N+"%"}))),L.appendChild(x),A.appendChild(L),b(A)}function S(A,v){let R={listRows:h,statsTiles:_,chart:G}[A];return R?R(v||{}).outerHTML:""}window.AdminSkeletons={listRows:h,statsTiles:_,chart:G,html:S}})()});var Pe=me(()=>{(function(){"use strict";let y={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},b={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:y.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:y.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:y.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:y.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:y.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:y.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:y.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:y.cyan}};function g(_){let{icon:G="\xB7",title:S="",desc:A="",accent:v=y.cyan,ctaAccent:R,actionLabel:L,action:E,extra:x}=_||{},P=document.createElement("div");P.className="admin-empty",P.dataset.empty="1",P.style.setProperty("--admin-empty-accent",v),R&&P.style.setProperty("--admin-empty-cta",R);let N=document.createElement("div");if(N.className="admin-empty__icon",N.textContent=G,P.appendChild(N),S){let T=document.createElement("div");T.className="admin-empty__title",T.textContent=S,P.appendChild(T)}if(A){let T=document.createElement("div");T.className="admin-empty__desc",T.textContent=A,P.appendChild(T)}if(L){let T=document.createElement("button");T.type="button",T.className="admin-empty__btn",T.textContent=L,typeof E=="function"&&T.addEventListener("click",E),P.appendChild(T)}if(x){let T=document.createElement("div");T.className="admin-empty__extra",typeof x=="string"?T.innerHTML=x:T.appendChild(x),P.appendChild(T)}return P}function h(_){let G=b[_];if(!G)return g({title:ServerI18n.t("emptyNoData"),desc:""});let S=Object.assign({},G,{title:G.titleKey?ServerI18n.t(G.titleKey):G.title,desc:G.descKey?ServerI18n.t(G.descKey):G.desc,actionLabel:G.actionLabelKey?ServerI18n.t(G.actionLabelKey):G.actionLabel});return g(S)}window.AdminEmpty={render:h,renderCustom:g,PRESETS:b}})()});var Oe=me(()=>{(function(){"use strict";var y=8;function b(S){return S?String(S).slice(0,y):""}function g(S){if(!S||typeof S!="object")return{nickname:"",fp:"",ip:""};var A=S.fingerprint||S.fp||S.hash||"",v=S.clientIp||S.client_ip||S.ip||"",R=S.nickname||S.nick||"";return{nickname:String(R||""),fp:String(A||""),ip:String(v||"")}}function h(S){if(!S||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var A=new TextEncoder().encode(String(S));return window.crypto.subtle.digest("SHA-256",A).then(function(v){var R=Array.from(new Uint8Array(v));return R.map(function(L){return L.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function _(S){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var A=document.getElementById("sec-fingerprints");if(A&&!A.open&&(A.open=!0),A)try{A.scrollIntoView({behavior:"smooth",block:"start"})}catch{}h(S).then(function(v){if(v)var R=0,L=setInterval(function(){R+=1;var E=document.querySelector('[data-fp-hash="'+v+'"]');if(E){clearInterval(L),E.classList.add("admin-identity-flash"),setTimeout(function(){E.classList.remove("admin-identity-flash")},2e3);try{E.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else R>12&&clearInterval(L)},250)})}function G(S){S=S||{};var A=S.nickname||"",v=S.fp||"",R=S.ip||"",L=!!S.compact,E=typeof S.onNicknameClick=="function"?S.onNicknameClick:null,x=typeof S.onFpClick=="function"?S.onFpClick:_,P=document.createElement("span");P.className="admin-identity-row";var N;if(E?(N=document.createElement("button"),N.type="button",N.className="admin-identity-nick is-clickable",N.addEventListener("click",function(f){f.stopPropagation(),E(A)})):(N=document.createElement("span"),N.className="admin-identity-nick"),A)N.textContent="@"+A;else{var T="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var C=ServerI18n.t("anonymousPlaceholder");C&&C!=="anonymousPlaceholder"&&(T=C)}}catch{}N.textContent="@"+T,N.classList.add("is-guest")}if(A&&(N.title=A),P.appendChild(N),v){var U;if(x?(U=document.createElement("button"),U.type="button",U.className="admin-identity-fp is-clickable",U.addEventListener("click",function(f){f.stopPropagation(),x(v)})):(U=document.createElement("span"),U.className="admin-identity-fp"),v==="new"){var B=document.createElement("span");B.className="admin-identity-dot",U.appendChild(B),U.appendChild(document.createTextNode("fp:new"))}else U.textContent="fp:"+b(v);U.title=v,P.appendChild(U)}if(R&&!L){var O=document.createElement("span");O.className="admin-identity-ip",O.textContent=R,O.title=R,P.appendChild(O)}return P}window.AdminIdentity={render:G,parse:g,focusFingerprint:_,hashFp:h,FP_DISPLAY_LEN:y}})()});var Re=me(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function b(r,s){return window.csrfFetch(r,s)}function g(r,s){return window.showToast(r,s)}let h="default",_=[],G={};function S(){let r=document.getElementById("themesList");r&&window.AdminSkeletons&&(r.innerHTML="",r.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function A(){S();try{let r=await b("/admin/themes");if(!r.ok)return;let s=await r.json();h=s.active||"default",_=s.themes||[],G=s.overrides||{},P(_,h),C()}catch(r){console.warn("[Themes] Failed to fetch themes:",r)}}var v="\u5C0F\u660E",R="\u8B1B\u5F97\u597D\uFF01+1";function L(r,s){var l=String(r||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(l)?l:s}function E(r){var s=r.styles||{},l=["color:"+L(s.color,"#ffffff")];if(s.textStroke){var o=Math.max(0,Math.min(6,Number(s.strokeWidth)||0));l.push("-webkit-text-stroke:"+o+"px "+L(s.strokeColor,"#000000")),l.push("paint-order:stroke fill")}if(s.textShadow){var t=Math.max(0,Math.min(40,Number(s.shadowBlur)||0));l.push("text-shadow:0 0 "+t+"px "+L(s.color,"#ffffff"))}var d=r.font&&r.font.family;return d&&/^[\w\s-]{1,40}$/.test(d)&&l.push("font-family:'"+d+"', var(--font-sans)"),r.font&&Number(r.font.weight)&&l.push("font-weight:"+Math.max(100,Math.min(900,Number(r.font.weight)))),l.join(";")}function x(r){var s=r.bg&&r.bg.gradient;return s&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(s).trim())?"background:"+String(s).trim():""}function P(r,s){let l=document.getElementById("themesList");if(l){if(l.innerHTML="",r.length===0){l.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}r.forEach(o=>{let t=o.name===s,d=y(ServerI18n.t("theme_"+o.name)!=="theme_"+o.name?ServerI18n.t("theme_"+o.name):o.label||o.name),m=document.createElement("div");m.className=`theme-pack-card${t?" is-active":""}`,m.innerHTML=`
        <div class="theme-pack-name">${d}</div>
        <div class="theme-pack-sample" style="${y(x(o))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${y(E(o))}">
            <span class="theme-pack-sample-nick">${y(v)}</span>
            ${y(R)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${o.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${y(o.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${t?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${y(o.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,l.appendChild(m)}),l.querySelectorAll(".theme-delete-btn").forEach(o=>{o.addEventListener("click",async()=>{let t=o.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let m=await b("/admin/themes/"+encodeURIComponent(t),{method:"DELETE"});if(!m.ok)throw new Error("HTTP "+m.status);g(ServerI18n.t("themeDeleted"),!0),A()}catch{g(ServerI18n.t("themesDeleteFailed"),!1)}})}),l.querySelectorAll(".theme-activate-btn").forEach(o=>{o.addEventListener("click",async()=>{let t=o.dataset.theme;try{let d=await b("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})});if(d.ok)g(ServerI18n.t("themeActivated"),!0),h=t,P(r,t),C();else{let m=await d.json().catch(()=>({}));g(m.error||ServerI18n.t("setThemeFailed"),!1)}}catch{g(ServerI18n.t("setThemeFailed"),!1)}})})}}function N(){return _.find(r=>r.name===h)||null}function T(r,s){let l=G[h]||{};if(l[r])return l[r];let o=s&&s.styles||{};return r==="stroke"?o.textStroke?Number(o.strokeWidth)>=3?"thick":"thin":"none":o.textShadow?Number(o.shadowBlur)>=10?"strong":"soft":"none"}function C(){let r=document.getElementById("themeDetail"),s=document.getElementById("themeDetailLabel");if(!r||!s)return;let l=N();if(!l)return;let o=ServerI18n.t("theme_"+l.name)!=="theme_"+l.name?ServerI18n.t("theme_"+l.name):l.label||l.name;s.textContent=ServerI18n.t("themeDetailGroup",{name:o}),["stroke","shadow"].forEach(d=>{let m=T(d,l);r.querySelectorAll(`[data-theme-seg="${d}"] [data-theme-opt]`).forEach(e=>{let n=e.getAttribute("data-theme-opt")===m;e.classList.toggle("is-active",n),e.setAttribute("aria-pressed",n?"true":"false")})});let t=r.querySelector('[data-theme-ov="color"]');if(t){let d=L((l.styles||{}).color,"#ffffff");t.value=/^#[0-9a-fA-F]{6}$/.test(d)?d:"#ffffff"}B(l),O(l)}var U=null;async function B(r){let s=document.getElementById("themeOvFont");if(!s)return;if(!U)try{let t=await fetch("/fonts",{credentials:"same-origin"});U=t.ok?(await t.json()).fonts||[]:[]}catch{U=[]}let o=(G[h]||{}).font_family||"";s.innerHTML=`<option value="">${y(ServerI18n.t("themeDetailFontInherit"))}</option>`+U.map(t=>{let d=String(t.name||t);return`<option value="${y(d)}"${d===o?" selected":""}>${y(d)}</option>`}).join("")}function O(r){let s=document.querySelector("[data-theme-preview-line]");s&&s.setAttribute("style",E(r))}async function f(r){try{let s=await b("/admin/themes/"+encodeURIComponent(h)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!s.ok)throw new Error("HTTP "+s.status);g(ServerI18n.t("themeDetailSaved"),!0),await A()}catch{g(ServerI18n.t("themeDetailSaveFailed"),!1)}}function c(){let r=document.getElementById("themeDetail");r&&(r.addEventListener("click",s=>{let l=s.target.closest("[data-theme-opt]");if(!l)return;let o=l.closest("[data-theme-seg]");o&&f({[o.getAttribute("data-theme-seg")]:l.getAttribute("data-theme-opt")})}),r.addEventListener("change",s=>{let l=s.target.closest("[data-theme-ov]");l&&f({[l.getAttribute("data-theme-ov")]:l.value})}))}function i(){let r=document.getElementById("themeNewBtn");r&&r.addEventListener("click",async()=>{let s=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!s||!s.trim()))try{let l=await b("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:s.trim(),base:h})});if(!l.ok)throw new Error("HTTP "+l.status);g(ServerI18n.t("themeCreated"),!0),A()}catch{g(ServerI18n.t("themesNewFailed"),!1)}})}function a(){A(),c(),i();let r=document.getElementById("themeReloadBtn");r&&r.addEventListener("click",async()=>{try{(await b("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(g(ServerI18n.t("themesReloaded")),A()):g(ServerI18n.t("themesReloadFailed"),!1)}catch{g(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:a}})()});var qe=me(()=>{(function(){"use strict";function y(I,F){return window.csrfFetch(I,F)}function b(I,F){return window.showToast(I,F)}var g=window.ServerI18n;function h(I,F){return window.AdminUtils.styleTag(I,F)}let _=null;function G(){let I=document.getElementById("effectEditModal");return I?Array.from(I.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(F=>!F.hasAttribute("disabled")&&F.getAttribute("aria-hidden")!=="true"):[]}function S(I){let F=document.getElementById("effectEditModal");if(!F||F.classList.contains("hidden"))return;if(I.key==="Escape"){I.preventDefault(),A();return}if(I.key!=="Tab")return;let H=G();if(H.length===0){I.preventDefault();return}let D=H[0],$=H[H.length-1],j=document.activeElement;I.shiftKey&&j===D?(I.preventDefault(),$.focus()):!I.shiftKey&&j===$&&(I.preventDefault(),D.focus())}function A(){let I=document.getElementById("effectEditModal");I&&(I.classList.add("hidden"),I.classList.remove("flex"),I.removeEventListener("keydown",S),_&&(_.focus(),_=null))}let v={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(I){return!!v[I]}};let R=new Map,L=new Map;function E(I){if(!I||!I.styleId||!I.keyframes)return;let F="dme-user-"+I.styleId;if(document.getElementById(F))return;let H=document.createElement("style");H.id=F,H.textContent=I.keyframes,document.head.appendChild(H)}async function x(I){if(R.has(I))return R.get(I);if(L.has(I))return L.get(I);let F=(async()=>{try{let H=await y(`/admin/effects/${encodeURIComponent(I)}/content`);if(!H.ok)throw new Error("content fetch failed");let D=await H.json(),$=D&&D.content||"";if(!$)throw new Error("empty content");let j=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:$,params:{}})});if(!j.ok)throw new Error("preview failed");let K=await j.json();if(!K||!K.animation)throw new Error("no animation");return E(K),R.set(I,K),K}catch{return R.set(I,"failed"),null}finally{L.delete(I)}})();return L.set(I,F),F}function P(I,F){let H=I.querySelector(".effect-demo-text");if(!H)return;H.style.animation=F.animation||"",F.animationComposition&&(H.style.animationComposition=F.animationComposition),H.style.animationPlayState="paused";let D=T();D&&D.observe(I)}let N=null;function T(){return N||(typeof IntersectionObserver>"u"?null:(N=new IntersectionObserver(I=>{I.forEach(F=>{let H=F.target.querySelector(".effect-demo-text");H&&(H.style.animationPlayState=F.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),N))}let C=null;function U(I){let F=document.getElementById("effectPreviewParams");if(!F)return{};let H;try{let $=I.split(`
`),j=!1,K=0,Y=null,M=0,q={};for(let V of $){let ne=V.trimStart(),W=V.length-ne.length;if(ne.startsWith("params:")){j=!0,K=W;continue}if(!j||ne===""||ne.startsWith("#"))continue;if(W<=K&&!ne.startsWith("params:")){j=!1;continue}let Z=ne.match(/^([a-zA-Z0-9_]+):\s*$/);if(Z&&W===K+2){Y=Z[1],M=W,q[Y]={};continue}if(Y&&W>M){let te=ne.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(te){let oe=te[1],Q=te[2].trim();if((Q.startsWith('"')&&Q.endsWith('"')||Q.startsWith("'")&&Q.endsWith("'"))&&(Q=Q.slice(1,-1)),oe!=="options"){let se=Number(Q);q[Y][oe]=isNaN(se)?Q:se}}if(ne.startsWith("- value:")){q[Y].options||(q[Y].options=[]);let oe=ne.match(/^- value:\s*(.+)$/);if(oe){let Q=oe[1].trim();(Q.startsWith('"')&&Q.endsWith('"')||Q.startsWith("'")&&Q.endsWith("'"))&&(Q=Q.slice(1,-1)),q[Y].options.push({value:Q,label:Q})}}if(ne.startsWith("label:")&&q[Y].options&&q[Y].options.length>0){let oe=ne.match(/^label:\s*(.+)$/);if(oe){let Q=oe[1].trim();(Q.startsWith('"')&&Q.endsWith('"')||Q.startsWith("'")&&Q.endsWith("'"))&&(Q=Q.slice(1,-1)),q[Y].options[q[Y].options.length-1].label=Q}}}}H=q}catch{H={}}F.innerHTML="";let D={};for(let[$,j]of Object.entries(H||{})){let K=j.type||"float",Y=document.createElement("div");Y.className="flex flex-col gap-0.5";let M=document.createElement("label");if(M.className="font-mono",M.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",M.textContent=`${$} (${K})`,Y.appendChild(M),K==="select"&&Array.isArray(j.options)){let q=document.createElement("select");q.className="admin-ui-select",q.style.cssText="font-size:13px;padding:4px 8px",q.dataset.paramKey=$;for(let V of j.options){let ne=document.createElement("option");ne.value=V.value,ne.textContent=V.label||V.value,V.value===String(j.default)&&(ne.selected=!0),q.appendChild(ne)}D[$]=String(j.default||j.options[0]&&j.options[0].value||""),q.addEventListener("change",()=>{f()}),Y.appendChild(q)}else{let q=j.min!=null?j.min:0,V=j.max!=null?j.max:10,ne=j.step!=null?j.step:K==="int"?1:.1,W=j.default!=null?j.default:q,Z=document.createElement("div");Z.className="flex items-center gap-2";let te=document.createElement("input");te.type="range",te.min=q,te.max=V,te.step=ne,te.value=W,te.dataset.paramKey=$,te.className="flex-1",te.style.accentColor="var(--color-primary)";let oe=document.createElement("span");oe.className="font-mono",oe.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",oe.textContent=String(W),te.addEventListener("input",()=>{oe.textContent=te.value,f()}),Z.appendChild(te),Z.appendChild(oe),Y.appendChild(Z),D[$]=W}F.appendChild(Y)}return D}function B(){let I=document.getElementById("effectPreviewParams");if(!I)return{};let F={};return I.querySelectorAll("[data-param-key]").forEach(H=>{F[H.dataset.paramKey]=H.type==="range"?Number(H.value):H.value}),F}async function O(){let I=document.getElementById("effectEditModalTextarea"),F=document.getElementById("effectPreviewText"),H=document.getElementById("effectPreviewStyle"),D=document.getElementById("effectPreviewError");if(!I||!F||!H)return;let $=I.value;if(!$||$===g.t("effectLoadContent")||$===g.t("effectsNetworkError"))return;let j=B();D?.classList.add("hidden");try{let K=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:$,params:j})}),Y=await K.json().catch(()=>({}));K.ok?(H.textContent=Y.keyframes||"",F.style.animation=Y.animation||"none",F.style.animationComposition=Y.animationComposition||""):(F.style.animation="none",H.textContent="",D&&(D.textContent=Y.error||g.t("previewFailed"),D.classList.remove("hidden")))}catch{F.style.animation="none",H.textContent="",D&&(D.textContent=g.t("effectsNetworkError"),D.classList.remove("hidden"))}}function f(){clearTimeout(C),C=setTimeout(()=>O(),500)}async function c(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
      `),document.getElementById("effectEditModalClose").addEventListener("click",A),document.getElementById("effectEditModalCancel").addEventListener("click",A),document.getElementById("effectEditModal").addEventListener("click",$=>{$.target===$.currentTarget&&A()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let $=document.getElementById("effectEditModalTextarea");$&&(U($.value),f())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{O()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let $=document.getElementById("effectEditModal"),j=document.getElementById("effectEditModalTextarea"),K=document.getElementById("effectEditModalSave"),Y=$?.dataset.effectName;if(!(!Y||!j)){K.disabled=!0;try{let M=await y("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Y,content:j.value})}),q=await M.json().catch(()=>({}));M.ok?(b(q.message||g.t("effectSaveFallback"),!0),A(),await r()):b(q.error||g.t("saveFailed"),!1)}catch{b(g.t("effectsNetworkError"),!1)}finally{K.disabled=!1}}})),await r(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let $=document.getElementById("effectReloadBtn");$&&($.disabled=!0);try{let j=await y("/admin/effects/reload",{method:"POST"}),K=await j.json().catch(()=>({}));j.ok?(b(K.message||g.t("effectsReloadFallback")),await r()):b(K.error||g.t("reloadFailed"),!1)}catch{b(g.t("effectsNetworkError"),!1)}finally{$&&($.disabled=!1)}});async function I($){if(!$)return;let j=new FormData;j.append("effectfile",$);try{let K=await y("/admin/effects/upload",{method:"POST",body:j}),Y=await K.json().catch(()=>({}));K.ok?(b(Y.message||g.t("effectUploadFallback")),await r()):b(Y.error||g.t("uploadFailed"),!1)}catch{b(g.t("effectsNetworkError"),!1)}}let F=document.getElementById("effectUploadInput"),H=F&&!F.dataset.uploadWired;H&&(F.dataset.uploadWired="1"),(H?F:null)?.addEventListener("change",async $=>{await I($.target.files?.[0]),$.target.value=""});let D=document.getElementById("sec-effects-mgmt");if(D){let $=0,j=q=>{q.preventDefault(),$++,D.classList.add("is-drag")},K=q=>{q.preventDefault()},Y=q=>{q.preventDefault(),$=Math.max(0,$-1),$===0&&D.classList.remove("is-drag")},M=async q=>{q.preventDefault(),$=0,D.classList.remove("is-drag");let V=q.dataTransfer?.files?.[0];if(V){if(!/\.(dme|dme\.zip)$/i.test(V.name)){b(g.t("fxToastBadExt"),!1);return}await I(V)}};D.addEventListener("dragenter",j),D.addEventListener("dragover",K),D.addEventListener("dragleave",Y),D.addEventListener("drop",M)}}function i(I){let F=(I||"").toLowerCase();return F.startsWith("glow")||F.includes("neon")?"GLOW":F.startsWith("shake")?"SHAKE":F.startsWith("wave")||F.startsWith("spin")||F.startsWith("bounce")||F.startsWith("zoom")||F.startsWith("fire")||F.includes("motion")?"MOTION":F.startsWith("rainbow")||F.startsWith("blink")||F.includes("color")?"COLOR":F.startsWith("type")||F.includes("text")?"TEXT":"MISC"}let a={all:[],filter:"ALL",selected:null};async function r(){let I=document.getElementById("effectsList");if(I)try{let F=await y("/admin/effects");if(!F.ok){I.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsLoadFailed")+"</span>";return}let H=await F.json();a.all=H.effects||[],s(),o()}catch{I.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsNetworkError")+"</span>"}}function s(){let I=document.getElementById("effectsFilterRow");if(!I)return;let F={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};a.all.forEach(K=>{F[i(K.name)]+=1});let H=a.all.length,D=[["ALL",g.t("fxChipAll"),H],["GLOW",g.t("fxCatGlow"),F.GLOW],["MOTION",g.t("fxCatMotion"),F.MOTION],["COLOR",g.t("fxCatColor"),F.COLOR],["SHAKE",g.t("fxCatShake"),F.SHAKE],["TEXT",g.t("fxCatText"),F.TEXT]];F.MISC>0&&D.push(["MISC",g.t("fxCatMisc"),F.MISC]);let $=D.map(([K,Y,M])=>`<span class="hud-filter-chip ${a.filter===K?"is-active":""}" data-effect-filter="${K}">${Y} ${M}</span>`).join(""),j=I.querySelector("[data-toolbar-spacer]");j?(I.querySelectorAll("[data-effect-filter]").forEach(K=>K.remove()),j.insertAdjacentHTML("beforebegin",$)):I.innerHTML=$,I.querySelectorAll("[data-effect-filter]").forEach(K=>{K.addEventListener("click",()=>{a.filter=K.dataset.effectFilter,s(),o()})})}function l(I){let F=(K,Y)=>{let M=document.querySelector(K);M&&(M.textContent=Y==null?"\u2014":String(Y))},H=I.length,D=I.filter(K=>K.enabled!==!1).length,$=new Set(I.map(K=>i(K.name))),j=I.filter(K=>!v[K.name]).length;F("[data-eflib-total]",H),F("[data-eflib-active]",D),F("[data-eflib-cats]",$.size),F("[data-eflib-user]",j)}function o(){let I=document.getElementById("effectsList");if(!I)return;let F=a.all;l(F);let H=a.filter==="ALL"?F:F.filter(D=>i(D.name)===a.filter);if(!H.length){I.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(F.length?g.t("fxNoFilterMatch"):g.t("noEffectsLoaded"))+"</span>";return}N&&N.disconnect(),I.innerHTML="",H.forEach(D=>{let $=i(D.name),j=$==="GLOW"?"is-glow":$==="COLOR"?"is-color":$==="TEXT"?"is-text":"",K=v[D.name]||"",Y=!!K,M=document.createElement("div");M.className="hud-effect-card"+(a.selected===D.name?" is-selected":""),M.dataset.effectName=D.name,M.title=[D.description,`file: ${D.filename}`].filter(Boolean).join(`
`);var q="effect_"+D.name;let V=g.t(q)!==q?g.t(q):D.label||D.name,ne=Y?"built-in":"user",W=K?`animation:${K};animation-play-state:paused;`:"";if(M.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${t(g.t("fxCat"+$.charAt(0)+$.slice(1).toLowerCase())||$)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${j}"><span class="effect-demo-text" style="${W}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${t(V)}</div>
          <div class="hud-effect-card-meta">${t(ne)} \xB7 ${t(D.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${g.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${g.t("lbDelete")}</button>
        </div>
      `,I.appendChild(M),K){let oe=T();oe&&oe.observe(M)}else{let oe=R.get(D.name);oe&&oe!=="failed"?(E(oe),P(M,oe)):oe!=="failed"&&x(D.name).then(Q=>{if(!Q)return;let se=I.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(D.name)}"]`);se&&P(se,Q)})}M.addEventListener("click",oe=>{oe.target.closest("[data-role]")||p(D)});let Z=M.querySelector('[data-role="edit"]'),te=M.querySelector('[data-role="delete"]');Z.addEventListener("click",async()=>{let oe=document.getElementById("effectEditModal"),Q=document.getElementById("effectEditModalTitle"),se=document.getElementById("effectEditModalFile"),de=document.getElementById("effectEditModalTextarea"),ce=document.getElementById("effectEditModalSave");if(!oe)return;_=document.activeElement instanceof HTMLElement?document.activeElement:null,Q.textContent=D.label||D.name,se.textContent=D.filename,de.value=g.t("effectLoadContent"),de.disabled=!0,ce.disabled=!0,oe.dataset.effectName=D.name,oe.classList.remove("hidden"),oe.classList.add("flex"),oe.addEventListener("keydown",S),de.focus();let ve=document.getElementById("effectPreviewText"),fe=document.getElementById("effectPreviewStyle"),z=document.getElementById("effectPreviewError"),X=document.getElementById("effectPreviewParams");ve&&(ve.style.animation="none"),fe&&(fe.textContent=""),z&&z.classList.add("hidden"),X&&(X.innerHTML="");try{let ee=await y(`/admin/effects/${encodeURIComponent(D.name)}/content`),J=await ee.json().catch(()=>({}));ee.ok?(de.value=J.content||"",de.disabled=!1,ce.disabled=!1,de.focus(),U(de.value),O()):(de.value=J.error||g.t("effectLoadContentFailed"),b(J.error||g.t("effectLoadContentFailed"),!1))}catch{de.value=g.t("effectsNetworkError"),b(g.t("effectsNetworkError"),!1)}}),te.addEventListener("click",async()=>{let oe=D.label||D.name;if(await window.HudConfirm?.open({icon:"\u2297",title:g.t("fxDeleteTitle"),subtitle:g.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${g.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${oe}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${g.t("fxDeleteWarn")}
                </div>`,confirmLabel:g.t("fxDeleteConfirm"),cancelLabel:g.t("cancel"),width:400}))try{let se=await y("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:D.name})}),de=await se.json().catch(()=>({}));se.ok?(b(de.message||g.t("effectDeleteFallback"),!0),await r()):b(de.error||g.t("deleteFailed"),!1)}catch{b(g.t("effectsNetworkError"),!1)}})})}function t(I){return String(I??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function d(I){let F={name:"",label:"",description:"",params:[]};if(!I)return F;let H=I.split(`
`),D="top",$=null;for(let j of H){let K=j.replace(/\r$/,""),Y=K.trimStart();if(!Y||Y.startsWith("#"))continue;let M=K.length-Y.length;if(M===0){if(D="top",$&&(F.params.push($),$=null),Y==="params:"){D="params";continue}let q=Y.match(/^([a-z_]+):\s*(.+)$/);q&&(q[1]==="name"?F.name=q[2].trim():q[1]==="label"?F.label=q[2].trim():q[1]==="description"&&(F.description=q[2].trim()));continue}if(!(D!=="params"&&D!=="param-fields"&&D!=="options")){if(M===2&&(D==="params"||D==="param-fields"||D==="options")){$&&(F.params.push($),$=null);let q=Y.match(/^(\w+):$/);q&&($={key:q[1]},D="param-fields");continue}if(M===4&&D==="param-fields"&&$){let q=Y.match(/^(\w+):\s*(.*)$/);if(q){let V=q[1],ne=q[2].trim();V==="label"?$.label=ne:V==="type"?$.type=ne:V==="default"?$.default=ne:V==="min"?$.min=parseFloat(ne):V==="max"?$.max=parseFloat(ne):V==="step"?$.step=parseFloat(ne):V==="options"&&($.options=[],D="options")}continue}if(D==="options"&&$&&M>=6){let q=Y.match(/^-\s*value:\s*(.+)$/);q&&($.options||($.options=[]),$.options.push({value:q[1].trim(),label:q[1].trim()}));let V=Y.match(/^label:\s*(.+)$/);V&&$.options&&$.options.length>0&&($.options[$.options.length-1].label=V[1].trim())}}}return $&&F.params.push($),F}function m(I,F){let H=I.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),D=H?H[1]:"",$=I.match(/^animation:\s*["']?(.+?)["']?\s*$/m),j=$?$[1].trim():"";for(let K of F.params){let Y=K.default!==void 0?K.default:"",M=new RegExp(`\\{${K.key}\\}`,"g");D=D.replace(M,Y),j=j.replace(M,Y)}return{keyframes:D,animation:j}}function e(I,F){if(I==="COLOR"){let H=F.find(D=>D.key==="duration");if(H&&H.default){let D=parseFloat(H.default);if(D<.25)return"crimson";if(D<.33)return"amber"}}if(I==="MOTION"){let H=F.find(D=>D.key==="height");if(H&&H.default){let D=parseFloat(H.default);if(D>30)return"crimson";if(D>24)return"amber"}}return"lime"}function n(I,F){return I==="COLOR"?F==="crimson"?g.t("fxHintFlashBlock"):F==="amber"?g.t("fxHintFlashWarn"):g.t("fxHintFlashOk"):F==="crimson"?g.t("fxHintAmpBlock"):F==="amber"?g.t("fxHintAmpWarn"):g.t("fxHintAmpOk")}function u(I,F){let H=d(F),{keyframes:D,animation:$}=m(F,H),j=i(I.name),K=H.params.filter(de=>de.type!=="select"),Y=H.params.filter(de=>de.type==="select"),M=e(j,H.params),q=M==="crimson"?"BLOCK":M==="amber"?"WARN":"OK",V=n(j,M),ne="fx-anim-"+I.name.replace(/[^a-z0-9]/gi,"-"),W=D&&$?h(ne,D):"",Z=$?`animation:${$};animation-play-state:running;`:"",te=K.map(de=>{let ce=parseFloat(de.default)||0,ve=de.min??0,fe=de.max??100,z=Math.max(0,Math.min(100,(ce-ve)/(fe-ve)*100)),X=(de.label||"").match(/\(([^)]+)\)$/),ee=X?X[1]:"",J=de.label||de.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${t(J)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${ce}<span style="color:var(--color-text-muted);margin-left:2px">${t(ee)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${z}%"></div>
          <div class="fx-slider-knob" style="left:${z}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${ve}${t(ee)}</span><span>${fe}${t(ee)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${g.t("fxNoNumericParams")}</span>`,oe=Y.map(de=>{let ce=de.options||[],ve=String(de.default||""),fe=ce.map(z=>`<span class="fx-radio-btn${z.value===ve||z.label===ve?" is-active":""}">${t(z.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${t(de.label||de.key)}</div>
        <div class="fx-radio-group">${fe||"<span>\u2014</span>"}</div>
      </div>`}).join(""),Q=["dark","light","photo"].map(de=>{let ce=de==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${de}">
        <span class="fx-preview-bg-label">${de.toUpperCase()}</span>
        <span class="fx-preview-text" style="${Z}color:${ce}">ABC</span>
      </div>`}).join(""),se=`${W}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${g.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${te}</div>
      </div>`;return oe&&(se+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${g.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${oe}</div>
      </div>`),se+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${g.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${Q}</div>
      </div>
      <div class="fx-warn-box${M!=="lime"?" is-"+M:""}">
        <span class="fx-warn-chip${M!=="lime"?" is-"+M:""}">${q}</span>
        <span class="fx-warn-text">${t(V)}</span>
      </div>
    </div>`,se}async function p(I){a.selected=I.name;let F=document.getElementById("effectsInspector"),H=document.getElementById("effectsInspectorTitle"),D=document.getElementById("effectsInspectorKicker"),$=document.getElementById("effectsInspectorBody");if(F){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),H&&(H.textContent=I.label||I.name),D&&(D.textContent="LOADING"),$&&($.className="hud-inspector-body",$.textContent="# "+g.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(j=>{j.classList.toggle("is-selected",j.dataset.effectName===I.name)});try{let j=await y(`/admin/effects/${encodeURIComponent(I.name)}/content`),K=await j.json().catch(()=>({}));if(j.ok){let Y=K.content||"";$&&($.className="hud-inspector-body has-param-panel",$.innerHTML=u(I,Y)),D&&(D.textContent=i(I.name))}else $&&($.className="hud-inspector-body",$.textContent="# "+(K.error||g.t("effectLoadContentFailed"))),D&&(D.textContent="ERROR")}catch{$&&($.className="hud-inspector-body",$.textContent="# "+g.t("effectsNetworkError")),D&&(D.textContent="NETWORK")}}}function k(){let I=document.getElementById("effectsInspectorReload"),F=document.getElementById("effectsInspectorEdit");I?.addEventListener("click",async()=>{if(!a.selected){b(g.t("fxSelectFirst"),!1);return}let H=a.all.find(D=>D.name===a.selected);H&&await p(H)}),F?.addEventListener("click",()=>{if(!a.selected){b(g.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(a.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",k())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:c}})()});var He=me(()=>{(function(){"use strict";var y={};window.DanmuEvents={on:function(b,g){y[b]||(y[b]=[]),y[b].push(g)},off:function(b,g){y[b]=(y[b]||[]).filter(function(h){return h!==g})},emit:function(b,g){(y[b]||[]).forEach(function(h){h(g)})}}})()});var je=me(()=>{(function(){"use strict";let y="sec-events",b="/admin/audit?limit=200",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(B){return String(B).replace(/[&<>"']/g,function(O){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[O]})},_={events:[],filterSev:"all",filterCat:"all",timer:0};function G(B){let O=(B.source||B.kind||"").toLowerCase(),f=(B.action||"").toLowerCase();return O.includes("plugin")||f.includes("plugin")?"plugin":O.includes("webhook")||f.includes("webhook")?"webhook":O.includes("rate")||f.includes("rate")||f.includes("limit")?"rate":O.includes("filter")||f.includes("filter")?"filter":O.includes("overlay")||f.includes("overlay")||O==="broadcast"?"overlay":O.includes("backup")||f.includes("backup")?"backup":O.includes("msg")||O==="messaging"?"msg":O.includes("ws")||O==="websocket"?"ws":"system"}let S=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,A=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function v(B){let O=(B.action||B.kind||"").toLowerCase();return B.severity?B.severity:S.test(O)?"error":A.test(O)?"warn":"info"}function R(B){let O=B.source||"system",f=B.action||B.kind||"";return f?`${O.toUpperCase()}_${f.toUpperCase()}`:O.toUpperCase()}function L(B){if(!B)return"\u2014";let O=new Date(B*1e3),f=c=>String(c).padStart(2,"0");return`${f(O.getHours())}:${f(O.getMinutes())}:${f(O.getSeconds())}`}function E(B){if(B.message)return B.message;let O=B.meta||{},f=[];if(O.from&&O.to)f.push(`${O.from} \u2192 ${O.to}`);else if(O.text_preview)f.push(`"${O.text_preview.slice(0,60)}"`);else if(Object.keys(O).length){let c=Object.keys(O).slice(0,3);for(let i of c)f.push(`${i}=${JSON.stringify(O[i]).slice(0,30)}`)}return f.length?f.join(" \xB7 "):`${B.source||"system"}.${B.action||B.kind||"?"}`}function x(){return`
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
      </div>`}function P(){let B=document.querySelector("[data-ev-rows]");if(!B)return;let O=_.events,f=O.filter(a=>!(_.filterSev!=="all"&&v(a)!==_.filterSev||_.filterCat!=="all"&&G(a)!==_.filterCat));f.length===0?(B.innerHTML="",window.AdminEmpty?B.appendChild(window.AdminEmpty.render("events")):B.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):B.innerHTML=f.map(a=>{let r=v(a);return`
          <div class="admin-ev-v4__row" data-sev="${r}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${h(L(a.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${r}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${r}">${h(R(a))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${h(a.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${h(E(a))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let c={all:O.length,info:0,warn:0,error:0};for(let a of O)c[v(a)]+=1;Object.keys(c).forEach(a=>{let r=document.querySelector(`[data-ev-cnt="${a}"]`);r&&(r.textContent=String(c[a]))});let i=document.querySelector("[data-ev-total]");i&&(i.textContent=`${f.length} / ${O.length}`)}async function N(){try{let B=await fetch(b,{credentials:"same-origin"});if(!B.ok)return;let O=await B.json();_.events=Array.isArray(O.events)?O.events:[],P()}catch{}}function T(){let B=document.getElementById(y);B&&B.addEventListener("click",O=>{let f=O.target.closest("[data-ev-sev]");if(f){B.querySelectorAll("[data-ev-sev]").forEach(a=>a.classList.toggle("is-active",a===f)),_.filterSev=f.dataset.evSev,P();return}let c=O.target.closest("[data-ev-cat]");if(c){B.querySelectorAll("[data-ev-cat]").forEach(a=>a.classList.toggle("is-active",a===c)),_.filterCat=c.dataset.evCat,P();return}let i=O.target.closest("[data-ev-action]");if(i){if(i.dataset.evAction==="refresh")N();else if(i.dataset.evAction==="export"){let a=new Blob([JSON.stringify(_.events,null,2)],{type:"application/json"}),r=URL.createObjectURL(a),s=document.createElement("a");s.href=r,s.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(r),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function C(){let B=document.querySelector(".admin-dash-grid"),O=document.getElementById(y);if(!O)return;let c=(B?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";O.style.display=c?"":"none",c?(N(),_.timer||(_.timer=setInterval(N,15e3))):_.timer&&(clearInterval(_.timer),_.timer=0)}function U(){let B=document.getElementById("settings-grid");!B||document.getElementById(y)||(B.insertAdjacentHTML("beforeend",x()),T(),C())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&U(),C()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",C),document.addEventListener("admin-panel-rendered",()=>{U(),C()}),U()})})()});var Ue=me(()=>{(function(){"use strict";let y="sec-modqueue",b="/admin/modqueue/list",_=window.AdminUtils&&window.AdminUtils.escapeHtml||function(f){return String(f).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})},G={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},S={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},A={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function v(f){let c=0,i=String(f||"");for(let a=0;a<i.length;a++)c=c*31+i.charCodeAt(a)&65535;return c%360}function R(f){if(!f.created_at_ms)return null;let c=(Date.now()-f.created_at_ms)/1e3,i=Math.max(0,G.autoRejectSec-c);return Math.ceil(i)}function L(f,c){let i=(f.severity||"low").toLowerCase(),a=S[i]||S.low,r=v(f.fp),s=String(f.fp||"\u2014").slice(0,8),l=f.nick||f.nickname||ServerI18n.t("audienceAnonymous"),o=(l||"?").slice(0,2).toUpperCase(),t=c==="pending"?R(f):null,d=c==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${_(f.id||"")}">${_(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${_(f.id||"")}">${_(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${_(f.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",m=c==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${_(ServerI18n.t("modqueueStampApproved"))} \xB7 ${_(f.resolved_by||"admin")} \xB7 ${_(f.resolved_ago||"")}
        </div>`:c==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${f.auto_rejected?`${_(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${_(ServerI18n.t("modqueueAutoRejectTimeout",{n:G.autoRejectSec}))}`:`${_(ServerI18n.t("modqueueStampRejected"))} \xB7 ${_(f.resolved_by||"admin")} \xB7 ${_(f.resolved_ago||"")}`}
        </div>`:"",e=c==="pending"&&t!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${t}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${_(f.id||"")}" data-mq-sev="${_(i)}" style="--mq-sev:${a}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${r})">${_(o)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${_(l)}</div>
            <div class="admin-mq-card__fp">fp:${_(s)}</div>
          </div>
          <div class="admin-mq-card__time">${_(f.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${_(f.content||f.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${a}">${_(ServerI18n.t(A[i]||A.low))}</span>
          <span class="admin-mq-card__rule">${_(ServerI18n.t("modqueueRuleLabel"))}: ${_(f.rule||f.matched_rule||"?")}</span>
          ${e}
        </div>
        ${d}
        ${m}
      </div>`}function E(f,c,i){f&&(f.innerHTML=c.map(a=>L(a,i)).join(""))}function x(){let f=document.getElementById(y);if(!f)return;f.querySelectorAll("[data-mq-bulk]").forEach(i=>{i.disabled=!0}),f.querySelector(".admin-mq__body").hidden=!0;let c=f.querySelector("[data-mq-empty]");c&&window.AdminEmpty&&(c.hidden=!1,c.innerHTML="",c.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function P(){let f=document.getElementById(y);if(!f)return;if(G.pending.length+G.approved.length+G.rejected.length===0){x();return}f.querySelector(".admin-mq__body").hidden=!1;let i=f.querySelector("[data-mq-empty]");i&&(i.hidden=!0),E(f.querySelector("[data-mq-col-pending]"),G.pending,"pending"),E(f.querySelector("[data-mq-col-approved]"),G.approved,"approved"),E(f.querySelector("[data-mq-col-rejected]"),G.rejected,"rejected");let a=(o,t)=>{f.querySelectorAll(o).forEach(d=>{d.textContent=String(t)})};a("[data-mq-cnt-pending]",G.pending.length),a("[data-mq-cnt-approved]",G.approved.length),a("[data-mq-cnt-rejected]",G.rejected.length);let r=G.pending.length===0;f.querySelectorAll("[data-mq-bulk]").forEach(o=>{o.disabled=r});let s=G.pending[G.pending.length-1],l=f.querySelector("[data-mq-oldest]");if(l){let o=s?R(s):null;l.textContent=o!=null?`oldest: ${o}s`:""}a("[data-mq-throughput]",G.stats.throughput.toFixed?G.stats.throughput.toFixed(1):G.stats.throughput),a("[data-mq-avg-review]",G.stats.avg_review_sec.toFixed?G.stats.avg_review_sec.toFixed(1):G.stats.avg_review_sec),a("[data-mq-auto-rate]",Math.round(G.stats.auto_reject_pct||0)+"%")}async function N(){try{let f=await fetch(b,{credentials:"same-origin"});if(!f.ok){G.pending=[],G.approved=[],G.rejected=[],P();return}let c=await f.json();G.pending=Array.isArray(c.pending)?c.pending:[],G.approved=Array.isArray(c.approved)?c.approved:[],G.rejected=Array.isArray(c.rejected)?c.rejected:[],G.stats=c.stats||G.stats,typeof c.auto_reject_sec=="number"&&(G.autoRejectSec=c.auto_reject_sec),P()}catch{}}async function T(f,c,i){if(window.csrfFetch)try{let a=await window.csrfFetch("/admin/modqueue/"+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:f,...i||{}})});if(a.ok)window.showToast&&window.showToast(c==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),N();else{let r=await a.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:r.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function C(){return`
      <div id="${y}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
        <!-- 2026-07-30 \u4F7F\u7528\u8005\u6307\u793A\uFF1A\u79FB\u9664\u5340\u584A page-head\u2014\u2014\u5206\u9801\u5217\u5DF2\u9078\u4E2D\u300C\u5BE9\u6838
             \u4F47\u5217\u300D\u3001\u9EB5\u5305\u5C51\u4E5F\u5BEB\u4E86\uFF0C\u9019\u689D\u6A19\u984C\u7D14\u91CD\u8907\u3002\u8AAA\u660E\u7531\u4E0B\u65B9 admin-mq__hint
             \u627F\u63A5\u3002\u540C\u7406\u9069\u7528\u5176\u4ED6\u5BE9\u6838\u5206\u9801\uFF08BANS/BLACKLIST\u2026\uFF09\uFF0C\u672C\u6B21\u5148\u52D5\u4F47\u5217\u3002 -->

        <!-- Toolbar: stats chips + bulk + auto-reject config -->
        <div class="admin-mq__toolbar">
          <span class="admin-mq__chip admin-mq__chip--pending">
            <span class="admin-mq__dot admin-mq__dot--amber"></span>
            ${_(ServerI18n.t("mqStatePending"))} \xB7 <span data-mq-cnt-pending>0</span>
          </span>
          <span class="admin-mq__counter admin-mq__counter--ok">
            <span data-mq-cnt-approved>0</span> ${_(ServerI18n.t("mqStateApproved"))}
          </span>
          <span class="admin-mq__counter admin-mq__counter--rej">
            <span data-mq-cnt-rejected>0</span> ${_(ServerI18n.t("mqStateRejected"))}
          </span>
          <span class="admin-mq__spacer"></span>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--ok" data-mq-bulk="approve-low">${_(ServerI18n.t("modqueueBulkApproveConfirm"))}</button>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--rej" data-mq-bulk="reject-high">${_(ServerI18n.t("modqueueBulkRejectConfirm"))}</button>
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
      </div>`}function U(){let f=document.getElementById(y);f&&f.addEventListener("click",async c=>{let i=c.target.closest("[data-mq-action]");if(i){let r=i.dataset.mqId,s=i.dataset.mqAction;(s==="approve"||s==="reject")&&T(r,s);return}let a=c.target.closest("[data-mq-bulk]");if(a){let r=a.dataset.mqBulk,s=r==="approve-low";if(!await window.HudConfirm?.open({icon:s?"\u2713":"\u2298",title:s?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:s?"warn":"danger",body:s?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:s?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let o=r.startsWith("approve")?"approve":"reject",t=r.endsWith("low")?"low":"high";T(null,"bulk",{action:o,severity:t})}})}function B(){let f=document.querySelector(".admin-dash-grid"),c=document.getElementById(y);if(!c)return;let i=(location.hash||"").replace("#/","").split("/"),a=f?.dataset.activeRoute||i[0]||"",r=f?.dataset.activeLeaf||i[1]||"",s=a==="modqueue"||a==="moderation"&&(r==="queue"||r===""||r==="moderation");c.style.display=s?"":"none",s?(G.timer||(N(),G.timer=setInterval(N,4e3)),G.countdownTimer||(G.countdownTimer=setInterval(P,1e3))):(G.timer&&(clearInterval(G.timer),G.timer=0),G.countdownTimer&&(clearInterval(G.countdownTimer),G.countdownTimer=0))}function O(){let f=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!f||document.getElementById(y)||(f.insertAdjacentHTML("beforeend",C()),U(),B())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(y)&&O(),B()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",B),document.addEventListener("admin-panel-rendered",()=>{O(),B()}),O()})})()});var Ke=me(()=>{(function(){"use strict";let y="sec-modbans-overview",b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(C){return String(C).replace(/[&<>"']/g,function(U){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[U]})},g=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],h={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},_={fingerprint:"FP",ip:"IP",nick:"NICK"},G={rows:[],refreshTimer:0};async function S(){try{let C=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!C.ok)return;let U=await C.json();G.rows=Array.isArray(U.bans)?U.bans:[],R()}catch{}}function A(C){if(!C||C<=0)return"\u2014";let U=Math.floor(C/86400),B=Math.floor(C%86400/3600),O=Math.floor(C%3600/60);return U>0?`${U}d ${B}h`:B>0?`${B}h ${O}m`:`${O}m`}function v(C){let U=C.target_kind;return U==="fingerprint"?`fp:${(C.target||"").slice(0,8)}`:U==="nick"?`@${C.target}`:C.target||"\u2014"}function R(){let C=document.querySelector("[data-modbans-list]");if(!C)return;let U=G.rows||[],B=document.querySelector("[data-modbans-count]");if(B&&(B.textContent=String(U.length)),U.length===0){C.innerHTML="";let O=window.AdminEmpty.render("blacklist");O.dataset.emptyKind="modbans",C.appendChild(O);return}C.innerHTML=U.map(function(O){let f=O.status==="expired",c=O.status==="permanent",i="admin-modbans-chip is-"+O.status,a=c?ServerI18n.t("modbansPermanent"):f?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:A(O.remaining_s)}),r=encodeURIComponent(O.target_kind)+"|"+encodeURIComponent(O.target);return`
        <div class="admin-modbans-row ${f?"is-expired":""}">
          <span class="admin-modbans-target">${b(v(O))}</span>
          <span class="admin-modbans-kind">${b(_[O.target_kind]||O.target_kind)}</span>
          <span class="admin-modbans-reason">${b(O.reason||"\u2014")}</span>
          <span class="${i}">
            ${O.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${b(a)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${r}"
            ${f?"disabled":""}
            title="${f?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${f?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function L(C){let U=C||{},B=U.kind||"ban",O=window.HudConfirm,f=!U.target,c=U.target_kind||"fingerprint",i=U.target||"";return new Promise(function(a){if(!O){a(!1);return}let r=86400,s=!1,l=12,o="hour",t=document.createElement("div");t.className="admin-modbans-modal-body",t.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${b(h[c]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${b(_[c]||"?")} ${b((B||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${b(i?v({target_kind:c,target:i}):"\u2014")}</div>
          </div>
        </div>
        ${f?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(q){return`<button type="button" class="admin-modbans-modal-preset${q===c?" is-active":""}"
                data-modbans-target-kind="${q}">${b(h[q])} ${b(_[q])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${g.map(function(q){return`<button type="button" class="${"admin-modbans-modal-preset"+(q.defaultPick?" is-active":"")+(q.permanent?" is-permanent":"")}" data-modbans-duration="${q.val}">${q.labelKey?ServerI18n.t(q.labelKey):q.label}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let d=t.querySelector("[data-modbans-custom-row]"),m=t.querySelector("[data-modbans-custom-input]"),e=t.querySelector("[data-modbans-custom-seconds]"),n=t.querySelector("[data-modbans-when]"),u=t.querySelector("[data-modbans-custom]"),p=t.querySelector("[data-modbans-target]"),k=t.querySelector("[data-modbans-target-icon]"),w=t.querySelector("[data-modbans-target-label]"),I=t.querySelector("[data-modbans-target-val]"),F=function(){k.textContent=h[c]||"?",w.textContent=`${_[c]||"?"} ${(B||"ban").toUpperCase()}`,I.textContent=i?v({target_kind:c,target:i}):"\u2014"},H=function(){return Math.max(1,parseInt(m.value,10)||1)*(o==="day"?86400:3600)},D=function(){if(r===0){n.textContent=ServerI18n.t("modbansWhenPermanent"),n.classList.remove("is-custom");return}let q=new Date(Date.now()+r*1e3),V=W=>String(W).padStart(2,"0"),ne=`${q.getFullYear()}-${V(q.getMonth()+1)}-${V(q.getDate())} ${V(q.getHours())}:${V(q.getMinutes())}`;s?(n.textContent=ServerI18n.t("modbansWhenCustom",{n:l,unit:ServerI18n.t(o==="day"?"modbansDay":"modbansHour"),stamp:ne}),n.classList.add("is-custom")):(n.textContent=ServerI18n.t("modbansWhenPreset",{dur:A(r),stamp:ne}),n.classList.remove("is-custom"))},$=function(){let q=H();e.textContent=`= ${q.toLocaleString()}s`,s&&(l=Math.max(1,parseInt(m.value,10)||1),r=q,D())},j=t.querySelector("[data-modbans-presets]"),K=function(){s=!0,d.hidden=!1,j.querySelectorAll(".admin-modbans-modal-preset").forEach(function(q){q.classList.toggle("is-active",q===u)}),$()},Y=function(q){s=!1,d.hidden=!0,j.querySelectorAll(".admin-modbans-modal-preset").forEach(function(V){V.classList.toggle("is-active",V===q)})};F(),D(),$(),t.addEventListener("click",function(q){let V=q.target.closest("[data-modbans-target-kind]");if(V){c=V.dataset.modbansTargetKind,V.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(Z){Z.classList.toggle("is-active",Z===V)}),F();return}if(q.target.closest("[data-modbans-custom]")){K();return}let ne=q.target.closest("[data-modbans-custom-unit]");if(ne){o=ne.dataset.modbansCustomUnit||"hour",t.querySelectorAll("[data-modbans-custom-unit]").forEach(function(Z){Z.classList.toggle("is-active",Z===ne)}),$();return}let W=q.target.closest("[data-modbans-duration]");W&&(r=parseInt(W.dataset.modbansDuration,10)||0,Y(W),D())}),m.addEventListener("input",$),p&&p.addEventListener("input",function(){i=p.value.trim(),F()});let M=t.querySelector("[data-modbans-reason]");O.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:t,width:480}).then(function(q){if(!q){a(!1);return}if(!i){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),a(!1);return}r===0?O.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${b(v({target_kind:c,target:i}))}</b>`})}).then(function(V){if(!V){a(!1);return}E(c,i,r,M.value.trim(),B).then(a)}):E(c,i,r,M.value.trim(),B).then(a)})})}async function E(C,U,B,O,f){try{let c=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:C,target:U,duration_s:B,reason:O||"",kind:f||"ban"})});if(!c.ok)throw new Error(`HTTP ${c.status}`);return window.showToast&&window.showToast(B===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:A(B)}),!0),S(),!0}catch(c){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:c.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function x(C){let U=(C||"").split("|");if(U.length!==2)return;let B=decodeURIComponent(U[0]),O=decodeURIComponent(U[1]);try{let f=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:B,target:O})});if(!f.ok)throw new Error(`HTTP ${f.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),S()}catch(f){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:f.message||ServerI18n.t("modbansUnknownError")}),!1)}}function P(){return`
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
      </div>`}function N(){let C=document.getElementById(y);if(!C||C.dataset.modbansBound==="1")return;C.dataset.modbansBound="1",C.addEventListener("click",function(B){if(B.target.closest("[data-modbans-add]")){L({kind:"ban"});return}let O=B.target.closest("[data-modbans-unban]");O&&!O.disabled&&x(O.dataset.modbansUnban)});let U=C.querySelector("[data-modbans-list]");U&&window.AdminSkeletons&&!U.children.length&&U.appendChild(window.AdminSkeletons.listRows({rows:4}))}function T(){let C=document.getElementById("settings-grid");!C||document.getElementById(y)||(C.insertAdjacentHTML("beforeend",P()),N(),S(),G.refreshTimer||(G.refreshTimer=setInterval(S,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&T()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&T()}),window.ModBans={openPicker:L,refreshList:S,formatTarget:v,formatRemaining:A}})()});var We=me(()=>{(function(){"use strict";let y="admin-mobile-nav-root",b=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],g=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"backup",icon:"\u21EA",labelKey:"mnavBackup",descKey:"mnavDescBackup"},{route:"security",icon:"\u26BF",labelKey:"adminRouteTitle_security",descKey:"mnavDescSecurity"},{route:"integrations",icon:"\u232C",labelKey:"adminNavIntegrations",desc:"Slido \xB7 Discord \xB7 OBS"}],h=!1,_=0;function G(){return`
      <div id="${y}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow hidden>
          ${g.map(P=>`
            <button type="button" class="admin-mobile-nav__o-row" data-mn-route="${P.route}">
              <span class="admin-mobile-nav__o-icon">${P.icon}</span>
              <span class="admin-mobile-nav__o-txt">
                <span class="admin-mobile-nav__o-label">${P.labelKey?ServerI18n.t(P.labelKey):P.label}</span>
                <span class="admin-mobile-nav__o-desc">${P.descKey?ServerI18n.t(P.descKey):P.desc||""}</span>
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
          ${b.map(P=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${P.id}" data-mn-route="${P.route||""}">
              <span class="admin-mobile-nav__icon">${P.icon}</span>
              <span class="admin-mobile-nav__label">${P.labelKey?ServerI18n.t(P.labelKey):P.label}</span>
              ${P.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${P.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </div>`}function S(){let P=(location.hash||"").replace("#/","").split("/")[0]||"";return b.some(N=>N.id===P)?P:g.some(N=>N.route===P)?"more":"live"}function A(){let P=document.getElementById(y);if(!P)return;let N=S();P.querySelectorAll("[data-mn-tab]").forEach(T=>{T.classList.toggle("is-active",T.dataset.mnTab===N)})}function v(P){let N=document.getElementById(y);N&&(h=P,N.dataset.overflow=P?"open":"closed",N.querySelector("[data-mn-overflow]").hidden=!P,N.querySelector("[data-mn-backdrop]").hidden=!P,N.querySelector("[data-mn-tab='more']")?.classList.toggle("is-active",P))}function R(P){if(P.target.closest("[data-mn-backdrop]")){v(!1);return}if(P.target.closest("[data-mn-logout]")){v(!1);let C=document.getElementById("logoutButton");C&&C.click();return}let N=P.target.closest("[data-mn-tab]");if(N){if(N.dataset.mnTab==="more"){v(!h);return}v(!1),N.dataset.mnRoute&&(location.hash="#/"+N.dataset.mnRoute);return}let T=P.target.closest("[data-mn-route]");T&&T.classList.contains("admin-mobile-nav__o-row")&&(v(!1),location.hash="#/"+T.dataset.mnRoute)}async function L(){try{let P=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!P.ok)return;let N=await P.json(),T=Array.isArray(N.pending)?N.pending.length:0;_=T;let C=document.querySelector("[data-mn-badge='pending']");if(!C)return;C.textContent=String(T),C.hidden=!(T>0)}catch{}}function E(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let P=0;function N(){let T=document.activeElement,C=T&&(T.tagName==="INPUT"||T.tagName==="TEXTAREA"||T.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!C)}document.addEventListener("focusin",()=>{cancelAnimationFrame(P),P=requestAnimationFrame(N)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(P),P=requestAnimationFrame(()=>setTimeout(N,50))})}function x(){document.getElementById(y)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",G()),document.addEventListener("click",R),window.addEventListener("hashchange",()=>{v(!1),A()}),A(),L(),setInterval(L,8e3),E())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",x):x()})()});var Ge=me(()=>{(function(){"use strict";var y="admin-session-expired-root",b=!1,g=null;function h(v,R){try{var L=window.ServerI18n&&ServerI18n.t(v);return L&&L!==v?L:R}catch{return R}}function _(){var v=document.getElementById(y);if(v&&v.remove(),document.body.classList.remove("is-session-expired"),b=!1,g&&g.focus)try{g.focus()}catch{}g=null}function G(v){if(v.key==="Tab"){var R=document.getElementById(y);if(R){var L=R.querySelectorAll("input, button");if(L.length){var E=L[0],x=L[L.length-1];v.shiftKey&&document.activeElement===E?(v.preventDefault(),x.focus()):!v.shiftKey&&document.activeElement===x&&(v.preventDefault(),E.focus())}}}}function S(){if(!(b||document.getElementById(y))){b=!0,g=document.activeElement,document.body.classList.add("is-session-expired");var v=document.createElement("div");v.id=y,v.className="admin-sx",v.setAttribute("role","alertdialog"),v.setAttribute("aria-modal","true"),v.setAttribute("aria-labelledby","admin-sx-title"),v.setAttribute("aria-describedby","admin-sx-body"),v.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+h("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+h("sxBody","\u9592\u7F6E\u8D85\u904E 8 \u5C0F\u6642\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+h("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+h("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(v),document.addEventListener("keydown",G,!0);var R=v.querySelector("#admin-sx-password");setTimeout(function(){try{R.focus()}catch{}},30),v.querySelector("[data-sx-form]").addEventListener("submit",function(L){L.preventDefault(),A(v,R)})}}function A(v,R){var L=v.querySelector("[data-sx-error]"),E=v.querySelector(".admin-sx__submit");L.hidden=!0,E.disabled=!0;var x=new URLSearchParams;x.set("password",R.value);var P=window.__adminRawFetch||window.fetch;P.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:x.toString()}).then(function(N){return N.json().then(function(T){return{status:N.status,data:T}},function(){return{status:N.status,data:{}}})}).then(function(N){if(E.disabled=!1,N.status===200&&N.data&&N.data.ok){var T=document.querySelector('meta[name="csrf-token"]');T&&N.data.csrf_token&&(T.content=N.data.csrf_token),document.removeEventListener("keydown",G,!0),_(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(h("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}N.status===429?L.textContent=h("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):L.textContent=h("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),L.hidden=!1,R.select()}).catch(function(){E.disabled=!1,L.textContent=h("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),L.hidden=!1})}window.AdminSessionExpired={open:S,close:_,isOpen:function(){return b}}})()});var ze=me(()=>{(function(){"use strict";let y="admin-reconnect-banner",_=0,G=0,S="ok",A=0,v=5e3,R=!1,L=0;function E(i){if(S!==i){if(S=i,i==="ok"||i==="dismissed"){P(),i==="ok"&&(_=0,G=0,v=5e3);return}x()}}function x(){let i=document.getElementById(y);i||(i=document.createElement("div"),i.id=y,i.className="admin-rcb",i.setAttribute("role","status"),i.setAttribute("aria-live","polite"),document.body.insertBefore(i,document.body.firstChild)),i.dataset.state=S;let a=S==="exhausted",r=a?"admin-rcb--crimson":"admin-rcb--amber";i.className=`admin-rcb ${r}`,i.innerHTML=a?T():N(),i.querySelector("[data-rcb-action='retry']")?.addEventListener("click",U),i.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>E("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",a),L||(L=setInterval(C,250))}function P(){let i=document.getElementById(y);i&&i.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),L&&(clearInterval(L),L=0)}function N(){let i=Math.max(0,(A-Date.now())/1e3),a=v/1e3,r=Math.min(100,(a-i)/a*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:G})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${r}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function T(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function C(){if(S!=="reconnecting")return;let i=document.getElementById(y);if(!i)return;let a=Math.max(0,(A-Date.now())/1e3),r=v/1e3,s=Math.min(100,(r-a)/r*100),l=i.querySelector(".admin-rcb__progress-fill");l&&(l.style.width=s+"%")}function U(){G=0,_=0,v=5e3,E("reconnecting"),B()}async function B(){try{let i=await fetch("/admin/bootstrap",{credentials:"same-origin"});i.ok?O():i.status===401||i.status===403?E("ok"):f()}catch{f()}}function O(){E("ok")}function f(){if(_+=1,G+=1,G>=10){E("exhausted");return}_>=3&&(v=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,G-1))),A=Date.now()+v,E("reconnecting"),setTimeout(B,v))}function c(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let i=window.csrfFetch,a=window.fetch;window.__adminRawFetch=a,document.addEventListener("admin:session-restored",()=>{R=!1,O()});async function r(s){try{let l=await s;return l&&l.ok?S!=="ok"&&S!=="dismissed"&&O():l&&l.status===401&&!R?(R=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):l&&l.status>=500&&f(),l}catch(l){throw f(),l}}typeof i=="function"&&(window.csrfFetch=function(){return r(i.apply(this,arguments))}),window.fetch=function(s,l){let o=typeof s=="string"?s:s&&s.url||"",t=a.call(this,s,l);return o.startsWith("/admin/")||o.indexOf("//")===-1&&o.startsWith("admin/")?r(t):t}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var Ve=me(()=>{(function(){"use strict";let y="admin-help-drawer-root",b={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},g=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],h=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function _(N){return N==null?"":String(N).replace(/[&<>"']/g,function(T){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[T]})}function G(){let N=(location.hash||"").replace("#/","").split("/")[0]||"";return b[N]?N:"_default"}function S(){return`
      <div id="${y}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function A(){let N=b[G()],T=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",C=N.titleKey?ServerI18n.t(N.titleKey):N.title,U=N.tipKeys.map(c=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${_(typeof c=="string"?ServerI18n.t(c):c.literal)}</span>
      </div>`).join(""),B=N.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${_(ServerI18n.t(N.fieldTipKey))}</span>
      </div>`:"",O=g.map(c=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${_(c.term)}</div>
        <div class="admin-help__glossary-def">${_(ServerI18n.t(c.defKey))}</div>
      </div>`).join(""),f=h.map(c=>`
      <a class="admin-help__resource" href="${_(c.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${_(c.label)}</span>
        <span class="admin-help__resource-url">${_(c.url.replace(/^https?:\/\//,""))}</span>
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
            <span class="admin-help__route-title">${_(C)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${U}</div>
          ${B}
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerShortcutsLabel")}</div>
          <button type="button" class="admin-help__shortcut" data-help-shortcuts>
            <div class="admin-help__keys"><kbd class="admin-help__kbd">?</kbd></div>
            <span class="admin-help__shortcut-desc">${_(ServerI18n.t("ksTitle"))}</span>
          </button>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerGlossaryLabel")}</div>
          <div class="admin-help__glossary">${O}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${f}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${T?"v"+_(T):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function v(){let N=document.getElementById(y);N||(document.body.insertAdjacentHTML("beforeend",S()),N=document.getElementById(y),N.addEventListener("click",T=>{if(T.target.closest("[data-help-close]")){R();return}T.target.closest("[data-help-shortcuts]")&&(R(),window.AdminShortcuts&&window.AdminShortcuts.open())})),N.querySelector("[data-help-body]").innerHTML=A(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",E)}function R(){let N=document.getElementById(y);N&&N.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",E)}function L(){document.getElementById(y)?R():v()}function E(N){N.key==="Escape"&&(N.preventDefault(),R())}function x(N){let T=N.target;T&&(T.tagName==="INPUT"||T.tagName==="TEXTAREA"||T.isContentEditable)||N.key==="F1"&&(N.preventDefault(),L())}function P(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",x)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P(),window.AdminHelp={open:v,close:R,toggle:L}})()});var Je=me(()=>{(function(){"use strict";var y="admin-shortcuts-root",b=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function g(f,c){try{var i=window.ServerI18n&&ServerI18n.t(f);return i&&i!==f?i:c}catch{return c}}function h(f,c){window.showToast&&window.showToast(f,c!==!1)}function _(f,c){return(window.csrfFetch||window.fetch)(f,c||{})}function G(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}async function S(){var f=!1;try{var c=await fetch("/admin/broadcast/status",{credentials:"same-origin"});c.ok&&(f=(await c.json()).mode==="live")}catch{}try{var i=await _("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:f?"standby":"live"})});if(!i.ok)throw new Error("HTTP "+i.status);h(g(f?"ksToastDisplayOff":"ksToastDisplayOn",f?"\u5DF2\u95DC\u9589":"\u5DF2\u958B\u555F")),window.AdminDashboard&&window.AdminDashboard.refreshCockpitOverlay&&window.AdminDashboard.refreshCockpitOverlay()}catch{h(g("cmdkToastToggleFailed","\u5207\u63DB\u5931\u6557"),!1)}}async function A(){try{var f=await _("/admin/overlay/clear",{method:"POST"});if(!f.ok)throw new Error("HTTP "+f.status);h(g("toastCleared","\u5DF2\u6E05\u7A7A"))}catch{h(g("toastClearFailed","\u6E05\u7A7A\u5931\u6557"),!1)}}async function v(){var f="idle";try{var c=await fetch("/admin/poll/status",{credentials:"same-origin"});c.ok&&(f=(await c.json()).state||"idle")}catch{}if(f==="idle"){location.hash="#/polls",h(g("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var i=f==="active";try{var a=await _(i?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!a.ok)throw new Error("HTTP "+a.status);h(g(i?"ksToastPollEnded":"ksToastPollStarted",i?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{h(g("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function R(f){return b?f.metaKey:f.ctrlKey}var L=b?"\u2318":"Ctrl",E=[{group:"global",keys:[L,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(f){return R(f)&&(f.key==="k"||f.key==="K")},run:G},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(f){return f.key==="?"&&!R(f)&&!f.altKey||f.key==="/"&&R(f)},run:function(){U()}},{group:"global",keys:[L,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u5207\u63DB\u986F\u793A\u5C64",match:function(f){return R(f)&&f.shiftKey&&(f.key==="d"||f.key==="D")},run:S},{group:"global",keys:[L,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u5927\u87A2\u5E55",match:function(f){return R(f)&&f.shiftKey&&f.key==="Backspace"},run:A},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(f){return!R(f)&&"jkJK".indexOf(f.key)>=0},run:function(f){window.AdminLiveFeed.moveFocus(f.key==="j"||f.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(f){return!R(f)&&(f.key==="b"||f.key==="B")},run:function(f){window.AdminLiveFeed.blockFocused(f.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(f){return!R(f)&&f.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(f){return!R(f)&&(f.key==="p"||f.key==="P")},run:v}];function x(f){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(f):f==null?"":String(f).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}function P(f){return E.filter(function(c){return c.group===f}).map(function(c){var i=c.keys.map(function(a){return a==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+x(a)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+x(g(c.labelKey,c.fallback))+'</span><span class="admin-ks__keys">'+i+"</span></div>"}).join("")}function N(){var f=document.getElementById(y);f&&f.remove(),document.removeEventListener("keydown",T,!0)}function T(f){(f.key==="Escape"||f.key==="?")&&(f.preventDefault(),N())}function C(){if(!document.getElementById(y)){var f=document.createElement("div");f.id=y,f.className="admin-ks",f.setAttribute("role","dialog"),f.setAttribute("aria-modal","true"),f.setAttribute("aria-labelledby","admin-ks-title"),f.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+x(g("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+x(g("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+P("global")+'</div><div class="admin-ks__group-label">'+x(g("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+P("feed")+'</div><p class="admin-ks__note">'+x(g("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+x(g("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(f),f.addEventListener("click",function(i){i.target.closest("[data-ks-close]")&&N()}),document.addEventListener("keydown",T,!0);var c=f.querySelector(".admin-ks__close");c&&setTimeout(function(){try{c.focus()}catch{}},30)}}function U(){document.getElementById(y)?N():C()}function B(f){if(!f)return!1;if(f.isContentEditable)return!0;var c=(f.tagName||"").toLowerCase();return c==="input"||c==="textarea"||c==="select"}function O(){return!!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())}document.addEventListener("keydown",function(f){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var c=B(document.activeElement),i=0;i<E.length;i++){var a=E[i];if(a.group==="feed"){if(c||!O())continue}else if(c&&!R(f))continue;if(a.match(f)){f.preventDefault(),a.run(f);return}}}),window.AdminShortcuts={open:C,close:N,toggle:U,list:function(){return E.slice()}}})()});var Ye=me(()=>{(function(){"use strict";let y="theme-mode",b="admin-theme-mode",g="admin-theme-toggle";(function(){try{if(localStorage.getItem(y)!=null)return;let x=localStorage.getItem(b);(x==="light"||x==="dark"||x==="auto")&&(localStorage.setItem(y,x),localStorage.removeItem(b))}catch{}})();function _(){try{let E=localStorage.getItem(y);if(E==="light"||E==="dark"||E==="auto")return E}catch{}return"auto"}function G(E){try{localStorage.setItem(y,E)}catch{}}function S(E){let x=document.documentElement;E==="auto"?x.removeAttribute("data-theme"):x.setAttribute("data-theme",E),v(E)}function A(E){return E==="light"||E==="dark"?E:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function v(E){let x=document.getElementById(g);if(!x)return;let P=A(E);x.dataset.mode=E,x.dataset.effective=P,x.textContent=E==="auto"?"\u25D0":P==="light"?"\u2600":"\u263E",x.title=E==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:P==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):E==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function R(){let E=_(),x=E==="auto"?"light":E==="light"?"dark":"auto";G(x),S(x)}function L(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let E=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,x=document.getElementById(g);if(x){E&&x.classList.contains("admin-theme-toggle--floating")&&E.parentNode&&!E.parentNode.contains(x)&&(x.classList.remove("admin-theme-toggle--floating"),E.parentNode.insertBefore(x,E));return}let P=document.createElement("button");P.id=g,P.type="button",P.className="admin-theme-toggle",P.addEventListener("click",R),E&&E.parentNode?E.parentNode.insertBefore(P,E):(P.classList.add("admin-theme-toggle--floating"),document.body.appendChild(P)),v(_())}if(S(_()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{_()==="auto"&&v("auto")})}catch{}window.addEventListener("storage",E=>{E.key===y&&S(_())}),window.AdminThemeSwitcher={getMode:_,setMode:function(E){E!=="auto"&&E!=="light"&&E!=="dark"||(G(E),S(E),v(E),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:E}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{L(),new MutationObserver(L).observe(document.body,{childList:!0,subtree:!0})}):(L(),new MutationObserver(L).observe(document.body,{childList:!0,subtree:!0}))})()});var Qe=me(()=>{(function(){"use strict";var y={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},b=[];window.DanmuStore={get:function(g){return y[g]},set:function(g,h){y[g]=h,b.forEach(function(_){_(g,h)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+g,h)},subscribe:function(g){b.push(g)},getAll:function(){return Object.assign({},y)}}})()});var Xe=me(()=>{(function(){"use strict";let g=0;function h(){return window.__adminCtx||{}}function _(){let v=h();return typeof v.getSettings=="function"?v.getSettings()||{}:{}}function G(){let v=_();if(v&&typeof v.OpsContact<"u"){let R=v.OpsContact;if(Array.isArray(R))return R[3]||R[0]||null;if(typeof R=="string")return R}return null}function S(){let v=h().appContainer||document.getElementById("app-container");if(!v)return;let R=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";v.innerHTML=`
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
            <div class="admin-login-attempts" id="loginAttemptsHint" hidden></div>
            <button class="admin-login-submit" type="submit" data-i18n="adminLoginSignIn">${ServerI18n.t("adminLoginSignIn")}</button>
          </form>
          <div class="admin-login-chiprow">
            <!-- \u8A2D\u8A08\u7A3F 03\u300C\u539F\u5247 4\u300D\uFF1A\u72C0\u614B\uFF1D\u8272\u9EDE\uFF0B\u6587\u5B57\u3002\u9EDE\u7531 .ui-status::before
                 \u756B\uFF0C\u4E0D\u518D\u81EA\u5DF1\u585E\u4E00\u9846 aria-hidden \u7684 span\u3002 -->
            <span class="ui-status is-success">
              <span data-i18n="adminLoginServerOnline">${ServerI18n.t("adminLoginServerOnline")}</span>${R?` \xB7 v${R}`:""}
            </span>
          </div>
        </div>
      </div>
    `;let L=v.querySelector("[data-login-reveal]");L&&L.addEventListener("click",()=>{let N=document.getElementById("password");if(!N)return;let T=N.type==="text";N.type=T?"password":"text",L.textContent=ServerI18n.t(T?"adminLoginReveal":"adminLoginHide");try{N.focus()}catch{}});let E=document.getElementById("loginForm"),x=document.getElementById("password"),P=document.getElementById("loginAttemptsHint");if(E){try{let N=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(N)&&N>0){g=N;let T=Math.max(0,5-g);if(P&&g>0&&T>0){P.hidden=!1;let C=document.getElementById("password");C&&C.classList.add("is-error"),P.textContent=ServerI18n.t("loginAttemptsRemaining",{n:T})}}}catch{}E.addEventListener("submit",async N=>{if(N.preventDefault(),!x)return;let T=new URLSearchParams;T.set("password",x.value);try{let C=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:T.toString(),redirect:"manual"});if(C.status===429){let U=C.headers.get("Retry-After"),B=parseInt(U,10),O=Number.isFinite(B)&&B>0?B:300;A(O);return}g+=1;try{sessionStorage.setItem("admin_login_attempts",String(g))}catch{}window.location.reload()}catch(C){console.error("Login submit failed:",C),P&&(P.hidden=!1,P.textContent=ServerI18n.t("networkError"))}})}}function A(v){let R=document.getElementById("adminLoginCard");if(!R)return;let L=G(),E=L?`<a class="admin-lockout-contact" href="${L}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";R.classList.add("admin-lockout-card"),R.innerHTML=`
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
        ${E}
      </div>
    `;let x=document.getElementById("lockoutCountdown"),P=v,N=C=>{let U=Math.floor(C/60),B=C%60;return`${String(U).padStart(2,"0")}:${String(B).padStart(2,"0")}`};x&&(x.textContent=N(P));let T=setInterval(()=>{P-=1,x&&(x.textContent=N(Math.max(0,P))),P<=0&&(clearInterval(T),g=0,S(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:S,renderLockout:A}})()});var Ze=me(()=>{(function(){"use strict";function y(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function b(t){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(t):String(t??"").replace(/[&<>"']/g,d=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[d])}async function g(){try{let t=y();await t.prime();let d=t.get("history_stats"),[m,e,n]=await Promise.all([d?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!e.ok)return;let u=d||(m&&m.ok?await m.json():null);if(!u)return;let p=(await e.json()).distribution||[],k=u.stats&&u.stats.total||0,w=p.reduce((K,Y)=>Y.count>(K?.count||-1)?Y:K,null),I=w?w.count:0,F=w?(w.hour||"").slice(-5):"\u2014",H=document.querySelector('[data-kpi="messages"]');H&&(H.querySelector("[data-kpi-value]").textContent=k.toLocaleString());let D=document.querySelector('[data-kpi="peak"]');D&&(D.querySelector("[data-kpi-value]").textContent=I.toLocaleString());let $=document.querySelector('[data-kpi="unique-fp"]');if($){let K=new Set;(u.records||[]).forEach(Y=>{let M=Y.fingerprint||Y.fp||Y.user_fingerprint;M&&K.add(M)}),$.querySelector("[data-kpi-value]").textContent=K.size.toLocaleString()}let j=document.querySelector('[data-kpi="session"]');if(j){let K=n&&n.ok?await n.json():null,Y=K&&K.status==="live",M=j.querySelector("[data-kpi-value]");if(Y&&K.started_at){let q=Math.max(0,Math.floor(Date.now()/1e3-K.started_at)),V=Math.floor(q/3600),ne=Math.floor(q%3600/60);M.textContent=V>0?`${V}:${String(ne).padStart(2,"0")}:${String(q%60).padStart(2,"0")}`:`${ne}:${String(q%60).padStart(2,"0")}`}else M.textContent="\u2014"}}catch{}}function h(t,d){let m=document.querySelector(t);if(m){if(typeof d!="number"||d<=0){m.hidden=!0;return}m.hidden=!1,m.textContent=d>999?"999+":String(d)}}async function _(){try{let t=y();await t.prime();let d=t.get("blacklist"),m=t.get("widgets"),e=t.get("history_stats"),n=t.get("effects"),u=t.get("themes");h("[data-count-blacklist]",Array.isArray(d)?d.length:0),h("[data-count-widgets]",Array.isArray(m?.widgets)?m.widgets.length:0),h("[data-count-messages]",e?.stats?.last_24h||0),h("[data-count-effects]",Array.isArray(n?.effects)?n.effects.length:0),h("[data-count-themes]",Array.isArray(u?.themes)?u.themes.length:0);try{let p=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(p.ok){let k=await p.json();h("[data-count-plugins]",Array.isArray(k?.plugins)?k.plugins.length:0)}}catch{}}catch{}}async function G(){_(),S(),l()}async function S(){let t=document.querySelector("[data-dash-poll-body]"),d=document.querySelector("[data-dash-poll-timer]");if(t)try{let m=y();await m.prime();let n=m.get("metrics");if(!n){let I=await fetch("/admin/metrics",{credentials:"same-origin"});if(!I.ok)return;n=await I.json()}let u=n.poll_state;if(!u||!u.active||!Array.isArray(u.options)||u.options.length===0){t.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,d&&(d.textContent="");return}let p=u.options.reduce((I,F)=>I+(F.votes||0),0),k=["A","B","C","D","E","F"],w=0;if(u.options.forEach((I,F)=>{(I.votes||0)>(u.options[w].votes||0)&&(w=F)}),t.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${b(u.question||ServerI18n.t("dashPollRunning"))}</div>`+u.options.map((I,F)=>{let H=p?Math.round(I.votes/p*100):0;return`
            <div class="admin-dash-poll-opt ${F===w&&p>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${k[F]||String(F+1)}</span>
                <span class="label">${b(I.label||"")}</span>
                <span class="pct">${H}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:I.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${H}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:p})}</div>`,d){let I=u.remaining_seconds;d.textContent=typeof I=="number"&&I>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(I/60),ss:String(I%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function A(t){t.dataset.actionsBound!=="1"&&(t.dataset.actionsBound="1",t.addEventListener("click",async d=>{let m=d.target.closest("[data-msg-action]");if(!m)return;let e=m.closest(".admin-dash-msg-row");if(!e)return;let n=m.dataset.msgAction,u=e.dataset.msgFp,p=e.dataset.msgId;if(n==="blacklist"){if(!u){window.showToast&&window.showToast(ServerI18n.t("dashToastNoFp"),!1);return}if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("dashBlacklistTitle"),subtitle:ServerI18n.t("cfmSubBlacklistFp"),severity:"danger",body:ServerI18n.t("dashBlacklistBody")+`<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:${b(u)}</div>`,confirmLabel:ServerI18n.t("dashBlacklistTitle")}))return;try{let w=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:`fp:${u}`})});if(!w.ok)throw new Error("HTTP "+w.status);window.showToast&&window.showToast(ServerI18n.t("dashToastBlacklistedFp",{fp:u}),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastBlacklistFailed"),!1)}}else if(n==="mask"||n==="hide")e.classList.add("is-masked-row"),window.showToast&&window.showToast(n==="mask"?ServerI18n.t("dashToastMasked"):ServerI18n.t("dashToastHidden"),!0);else if(n==="more"){let k=document.querySelector('[data-route="live"]');k&&k.click()}}))}function v(t){let d=t.visible!==!1,m=t.config&&t.config.title||t.type||"widget",e=(t.type||"widget").toUpperCase(),n=(t.position||"\u2014").toUpperCase(),u=d?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",p=t.created_at&&d?Math.max(0,Math.floor(Date.now()/1e3-t.created_at)):null,k=p!=null?(()=>{let w=Math.floor(p/86400),I=Math.floor(p%86400/3600),F=Math.floor(p%3600/60),H=p%60;return w>0?`UPTIME \xB7 ${w}d ${String(I).padStart(2,"0")}h`:I>0?`UPTIME \xB7 ${I}:${String(F).padStart(2,"0")}:${String(H).padStart(2,"0")}`:`UPTIME \xB7 ${F}:${String(H).padStart(2,"0")}`})():`STATUS \xB7 ${d?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${b(t.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${u}"></span>
          <span class="kind">${b(e)}</span>
          <span class="cat">${b(n)}</span>
        </div>
        <div class="title">${b(m)}</div>
        <div class="uptime">${k}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${d?" is-active":""}" data-widget-action="toggle" data-running="${d?"1":"0"}">${d?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function R(t,d){try{let m=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:t,config:{visible:!d}})});if(!m.ok)throw new Error("HTTP "+m.status);E()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function L(t){t.dataset.bound!=="1"&&(t.dataset.bound="1",t.addEventListener("click",d=>{let m=d.target.closest(".admin-dash-widget-tile");if(!m)return;let e=d.target.dataset.widgetAction,n=m.dataset.widgetId;if(!(!e||!n)){if(e==="toggle")R(n,d.target.dataset.running==="1");else if(e==="config"){let u=document.querySelector('[data-route="widgets"]');u&&u.click()}}}))}async function E(){let t=document.querySelector("[data-dash-widgets]");if(t)try{let d=y();await d.prime();let m=d.get("widgets");if(!m){let n=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!n.ok){t.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}m=await n.json()}let e=(m.widgets||m.items||[]).slice(0,4);if(e.length===0){t.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}t.innerHTML='<div class="admin-dash-widget-grid">'+e.map(v).join("")+"</div>",L(t)}catch{t.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let x=null,P=null,N=null;function T(t){let d=Math.max(0,Math.floor(Date.now()/1e3-t)),m=Math.floor(d/3600),e=Math.floor(d%3600/60),n=d%60;return m>0?`${m}:${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function C(t){let d=document.getElementById("admin-session-banner"),m=document.getElementById("sec-live-feed");if(m&&m.classList.toggle("is-idle-collapsed",!(t&&t.status==="live")),d&&d.classList.toggle("is-hero",!(t&&t.status==="live")),!d)return;if(x=t,!(t&&t.status==="live"))d.hidden=!1,d.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let n=t.started_at||Date.now()/1e3;d.hidden=!1,d.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${b(t.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
          <div class="admin-session-live-actions" data-current-behavior="${t.viewer_end_behavior||"continue"}">
            <a class="admin-ui-action admin-session-display-link" href="#/overlay" title="${ServerI18n.t("dashSessDisplayLinkTitle")}">${ServerI18n.t("dashSessDisplayLink")}</a>
            <button type="button" class="admin-ui-action is-danger admin-session-end-btn" data-sess-action="close">${ServerI18n.t("dashSessEndBtn")}</button>
          </div>
        </div>`,U(n)}d.dataset.bound||(d.dataset.bound="1",d.addEventListener("click",O))}function U(t){N&&clearInterval(N);let d=()=>{let m=document.querySelector("[data-sess-timer]");m&&(m.textContent=T(t))};d(),N=setInterval(d,1e3)}function B(){N&&(clearInterval(N),N=null)}async function O(t){let d=t.target.closest("[data-sess-action]");if(!d)return;let m=d.dataset.sessAction;if(m==="open"){let e=document.querySelector("[data-sess-name]"),n=(e?e.value:"").trim();if(!n){e&&e.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}d.disabled=!0;try{let u=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n})}),p=await u.json();if(!u.ok){window.showToast&&window.showToast(p.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:n}),!0),C(p.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{d.disabled=!1}}else if(m==="close"){let e=d.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",n=(k,w)=>`<option value="${k}"${k===e?" selected":""}>${w}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${n("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${n("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${n("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;d.disabled=!0;let p=document.getElementById("sessCloseBehavior")?.value;if(p&&p!==e)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:p})})}catch{}try{let k=await window.csrfFetch("/admin/session/close",{method:"POST"}),w=await k.json();if(!k.ok){window.showToast&&window.showToast(w.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),B(),C({status:"idle",viewer_end_behavior:w.archived&&w.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{d.disabled=!1}}}async function f(){try{let t=await fetch("/admin/session/current",{credentials:"same-origin"});if(!t.ok)return;let d=await t.json();C(d)}catch{}}function c(){f(),P&&clearInterval(P),P=setInterval(f,1e4)}function i(){P&&(clearInterval(P),P=null),B()}let a=null;async function r(){let t=document.querySelector("[data-cockpit-overlay]");if(!t||t.offsetParent===null)return;let d=0,m=!1;try{let k=await fetch("/overlay_status",{credentials:"same-origin"});k.ok&&(d=(await k.json()).overlay_count||0)}catch{}try{let k=await fetch("/admin/broadcast/status",{credentials:"same-origin"});k.ok&&(m=(await k.json()).mode==="live")}catch{}let e=d>0&&m;t.classList.toggle("is-on",e);let n=t.querySelector("[data-cockpit-status]");n&&(n.textContent=e?ServerI18n.t("adminCockpitOn",{n:d}):ServerI18n.t("adminCockpitOff"));let u=t.querySelector('[data-cockpit-action="toggle"]');u&&(u.textContent=ServerI18n.t(e?"adminCockpitTurnOff":"adminCockpitTurnOn"),u.classList.toggle("is-danger",e),u.classList.toggle("is-primary",!e),u.dataset.next=e?"standby":"live");let p=t.querySelector('[data-cockpit-action="clear"]');p&&(p.disabled=d===0)}function s(){let t=document.querySelector("[data-cockpit-overlay]");if(!t||t.dataset.bound)return;t.dataset.bound="1",t.addEventListener("click",async e=>{let n=e.target.closest("[data-cockpit-action]");if(!n)return;let u=n.dataset.cockpitAction;if(u==="clear"){try{let p=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("toastCleared"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("toastClearFailed"),!1)}return}if(u==="toggle"){try{let p=await window.csrfFetch("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:n.dataset.next||"standby"})});if(!p.ok)throw new Error("HTTP "+p.status)}catch{window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:""}),!1)}r()}});let d=t.parentElement&&t.parentElement.querySelector('[data-cockpit-action="idle-qr"]');d&&d.addEventListener("click",()=>{location.hash="#/overlay"});let m=t.parentElement&&t.parentElement.querySelector('[data-cockpit-action="poll"]');m&&m.addEventListener("click",()=>{location.hash="#/polls"})}function l(){s(),r(),a&&clearInterval(a),a=setInterval(r,5e3)}function o(){a&&(clearInterval(a),a=null)}window.AdminDashboard={refreshKpi:g,refreshSummary:G,refreshSidebarBadges:_,populatePoll:S,populateWidgets:E,refreshSessionBanner:f,startSessionPolling:c,stopSessionPolling:i,refreshCockpitOverlay:r,startCockpitPolling:l,stopCockpitPolling:o}})()});var et=me(()=>{(function(){"use strict";let y="sec-viewer-config-defaults",b=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(z){return String(z).replace(/[&<>"']/g,function(X){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[X]})},_={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:1,max:10,step:1,unit:""}},G=[14,20,32,44,64],S=["#F1F5F9","#94A3B8","#38BDF8","#FBBF24","#86EFAC","#F87171","#64748B","#334155"],A=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function v(z,X){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let ee=window.ServerI18n.t(z,X);if(ee&&ee!==z)return ee}return z}let R={};function L(z){if(R[z]!=null)return R[z];let X=_[z];return X?X.step:1}function E(z,X){R[z]=Number(X)||L(z)}let x={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{}},P=["Color","FontFamily","Layout"];function N(z){return P.indexOf(z)!==-1}function T(z){let X=x.options&&x.options[z],ee=X&&X[1];return Array.isArray(ee)?ee.slice():[]}function C(z){return z==="Color"?S.map(X=>X.replace(/^#/,"").toUpperCase()):z==="Layout"?A.map(X=>X.value):z==="FontFamily"?(x.fonts&&x.fonts.length?x.fonts:["NotoSansTC","Inter"]).map(ee=>typeof ee=="string"?ee:ee.name||ee.family||"").filter(Boolean):[]}function U(z,X){return z==="Color"?String(X||"").replace(/^#/,"").toUpperCase():String(X||"")}function B(){return`
      <div id="${y}" class="admin-dsp2-page hud-page-stack lg:col-span-2" data-tpl="C">
        <!-- \u6A19\u984C\uFF0F\u8AAA\u660E\u5169\u5957\u4E26\u5B58\uFF0C\u7531 data-dsp-mode \u6C7A\u5B9A\u9732\u54EA\u4E00\u5957\uFF08CSS \u5728 style.css\uFF09\u3002
             \u540C\u4E00\u4EFD\u9762\u677F\u670D\u52D9\u986F\u793A\u5C64\u8207\u89C0\u773E\u9801\u5169\u689D\u8DEF\u7531\uFF0C\u6587\u6848\u4E0D\u80FD\u53EA\u5BEB\u4E00\u7A2E\u3002 -->
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title" data-dsp-only="values">${h(v("displayValuesTitle"))}</h2>
          <p class="admin-ui-page-note" data-dsp-only="values">${v("displayValuesNote")}</p>
          <h2 class="admin-ui-page-title" data-dsp-only="audience">${h(v("viewerGroupAudience"))}</h2>
          <p class="admin-ui-page-note" data-dsp-only="audience">${v("displayViewerDefaultsNote")}</p>
        </div>

        <!-- \u986F\u793A\u5C64\u5C08\u5C6C\uFF1A\u5927\u87A2\u5E55\u600E\u9EBC\u6392\uFF082026-08-19 \u8A2D\u8A08\u7A3F 07 \xB7 R1\uFF09\u3002
             \u9019\u56DB\u500B\u548C\u4E0A\u9762\u90A3\u7D44\u4E0D\u540C\u7A2E\u985E\u2014\u2014\u4E0A\u9762\u662F\u300C\u89C0\u773E\u7AEF\u7684\u503C\u300D\uFF0C\u9019\u88E1\u662F
             \u300C\u5927\u87A2\u5E55\u672C\u8EAB\u7684\u6392\u7248\u300D\uFF0C\u89C0\u773E\u6C38\u9060\u78B0\u4E0D\u5230\uFF0C\u6240\u4EE5\u4E0D\u9032 ROWS \u90A3\u5F35\u8868\u3002 -->
        <div data-dsp-only="values">
          <div class="admin-ui-group-label">${h(v("dlGroupLayout"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(v("dlMaxTracks"))}
                <span class="sub">${h(v("dlMaxTracksHint"))}</span>
              </span>
              <span class="val admin-ui-stepper" data-dl-stepper="max_tracks">
                <button type="button" data-dl-step="-1">\u2212</button>
                <span class="stepper-val" data-dl-value="max_tracks">\u2014</span>
                <button type="button" data-dl-step="1">+</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(v("dlAvoidOverlap"))}
                <span class="sub">${h(v("dlAvoidOverlapHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="avoid_overlap" />
              </span>
            </div>
          </div>

          <div class="admin-ui-group-label">${h(v("dlGroupArea"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(v("dlAreaTop"))}</span>
              <span class="val">
                <input type="range" min="0" max="90" step="5" data-dl-range="area_top" />
                <span class="stepper-val" data-dl-value="area_top">\u2014</span>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(v("dlAreaHeight"))}</span>
              <span class="val">
                <input type="range" min="10" max="100" step="5" data-dl-range="area_height" />
                <span class="stepper-val" data-dl-value="area_height">\u2014</span>
              </span>
            </div>
          </div>

          <!-- \u6295\u5F71\u5B89\u5168\u5340\u8207\u6DFA\u5E95\u63CF\u908A\uFF08\u8A2D\u8A08\u7A3F 16 \xB7 OS1\uFF0FOS2\uFF09\u3002\u986F\u793A\u5C64\u90A3\u534A\u65E9\u5C31
               \u5BEB\u597D\u4E86\uFF08child.css \u7684 --overlay-safe\u3001stage-luminance \u7684 setForced\uFF09\uFF0C
               \u7F3A\u7684\u4E00\u76F4\u662F\u9019\u5169\u5217\u2014\u2014\u5B89\u5168\u5340\u6C38\u9060\u505C\u5728\u5BEB\u6B7B\u7684 5%\uFF0C\u63CF\u908A\u6A21\u5F0F\u6C92\u6709\u5165\u53E3\u3002 -->
          <div class="admin-ui-group-label">${h(v("dlGroupStage"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(v("dlSafeArea"))}
                <span class="sub">${h(v("dlSafeAreaHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="safe_area">
                <button type="button" data-dl-opt="0">0%</button>
                <button type="button" data-dl-opt="5">5%</button>
                <button type="button" data-dl-opt="8">8%</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(v("dlStrokeMode"))}
                <span class="sub">${h(v("dlStrokeModeHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="stroke_mode">
                <button type="button" data-dl-opt="auto">${h(v("dlStrokeAuto"))}</button>
                <button type="button" data-dl-opt="always">${h(v("dlStrokeAlways"))}</button>
                <button type="button" data-dl-opt="never">${h(v("dlStrokeNever"))}</button>
              </span>
            </div>

            <!-- 2026-09-08\uFF1A\u6295\u7968\u662F\u7528\u300C\u9001\u51FA\u9078\u9805\u4EE3\u865F\u7576\u5F48\u5E55\u300D\u5BE6\u4F5C\u7684\uFF0C\u6240\u4EE5\u6253\u5B57\u6295\u7968
                 \u7684\u4EBA\u6703\u8B93\u5927\u87A2\u5E55\u51FA\u73FE\u4E00\u6574\u7247 A / B / C / D\u3002\u4E0D\u85CF\u8D77\u4F86\u2014\u2014\u770B\u5F97\u5230\u5927\u5BB6\u5728
                 \u6295\u7968\u672C\u8EAB\u5C31\u662F\u6C23\u6C1B\u2014\u2014\u800C\u662F\u8ABF\u6697\uFF0C\u8B93\u771F\u6B63\u7684\u7559\u8A00\u4ECD\u7136\u8B80\u5F97\u5230\u3002
                 \u4E00\u6B21\u6309\u4E0B\u5373\u6295\u7968\uFF08POST /poll/vote\uFF09\u6839\u672C\u4E0D\u7522\u751F\u5F48\u5E55\uFF0C\u4E0D\u53D7\u9019\u88E1\u5F71\u97FF\u3002 -->
            <div class="admin-ui-group-row">
              <span class="lbl">${h(v("dlDimPollVotes"))}
                <span class="sub">${h(v("dlDimPollVotesHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="dim_poll_votes" />
              </span>
            </div>
            <div class="admin-ui-group-row is-tall" data-dl-row="poll_vote_opacity">
              <span class="lbl">${h(v("dlPollVoteOpacity"))}
                <span class="sub">${h(v("dlPollVoteOpacityHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="poll_vote_opacity">
                <button type="button" data-dl-opt="15">15%</button>
                <button type="button" data-dl-opt="25">25%</button>
                <button type="button" data-dl-opt="40">40%</button>
              </span>
            </div>
          </div>
        </div>

        <div class="admin-dsp2-grid">
          <!-- Left \xB7 row list -->
          <div class="admin-dsp2-list" id="dsp2-list">
            <div class="admin-dsp2-list-head">
              <span>${h(v("displayColParam"))}</span>
              <span data-dsp-only="values">${h(v("displayColValue"))}</span>
              <span class="admin-dsp2-list-head-right" data-dsp-only="audience">${h(v("displayColAudience"))}</span>
            </div>
            <div id="dsp2-rows">
              ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):h(v("loading"))}
            </div>
          </div>

          <!-- Right rail -->
          <div class="admin-dsp2-rail">
            <div class="admin-dsp2-card admin-dsp2-preview" id="dsp2-preview">
              <div class="admin-dsp2-preview-head">
                <span class="admin-ui-monolabel">${ServerI18n.t("mlLivePreview")}</span>
                <span class="admin-dsp2-preview-sync">
                  <span class="admin-dsp2-dot"></span>
                  ${h(v("displayPreviewSync"))}
                </span>
              </div>
              <div class="admin-dsp2-preview-stage" data-preview-stage>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-1" data-preview-pill="1">
                  <span class="admin-dsp2-preview-tag">@guest#1284</span>
                  <span data-preview-text>${h(v("displayPreviewSample1"))}</span>
                </div>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-2" data-preview-pill="2">
                  <span class="admin-dsp2-preview-tag">@annie</span>
                  <span>${h(v("displayPreviewSample2"))}</span>
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
                <span>${h(v("displayAutoSyncTitle"))}</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:4px;background:var(--hud-cyan-soft);border:1px solid var(--color-primary)">
                <span aria-hidden="true" style="width:7px;height:7px;border-radius:50%;background:var(--color-primary);box-shadow:0 0 6px var(--color-primary);animation:hud-pulse 2s ease-in-out infinite"></span>
                <div style="flex:1;min-width:0">
                  <div style="font-family:var(--font-mono);font-size:11px;color: var(--color-ink-accent);letter-spacing:0.1em;font-weight:700">${h(v("displayAutoSyncLive"))}</div>
                  <div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);margin-top:2px;letter-spacing:0.04em">${h(v("displayAutoSyncNote"))}</div>
                </div>
              </div>
              <div style="display:flex;gap:8px">
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-revert" style="flex:1">
                  \u21BA ${h(v("displayDeployRevert"))}
                </button>
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-export" style="flex:1">
                  \u2197 ${h(v("displayExportJson"))}
                </button>
              </div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-admin-controlled" style="padding:14px;background:var(--admin-panel,var(--color-bg-base));border:1px solid var(--hud-line);border-radius:6px;display:flex;flex-direction:column;gap:10px">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span>${h(v("displayAdminControlledTitle"))}</span>
              </div>
              <div style="display:grid;grid-template-columns:auto 1fr;gap:7px 12px;align-items:start;font-size:11px;line-height:1.45">
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">UI language</span><span>Auto (follow browser)</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">Placeholder</span><span>${h(v("displayPlaceholderExample"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">Submit button</span><span>${ServerI18n.t("fireDanmu")}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">Poll prompt</span><span>${h(v("displayPollPromptExample"))}</span>
              </div>
              <div style="padding-top:8px;border-top:1px solid var(--hud-line);font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);line-height:1.6">
                ${h(v("displayAdminControlledNote"))}
              </div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-summary" id="dsp2-summary">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span>${h(v("displaySummaryTitle"))}</span>
              </div>
              <div class="admin-dsp2-summary-list" data-summary-list></div>
            </div>
          </div>
        </div>
      </div>`}let O=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:z=>`${Math.round(z)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:z=>`${z}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:z=>`${(+z).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:z=>`#${String(z||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:z=>z||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:z=>f(z),noRange:!0}];function f(z){let X=A.find(ee=>ee.value===z);return X?v(X.labelKey):z||"\u2014"}function c(z,X){let ee=X[0]!==!1,J=X[3],ie=_[z.key];if(z.key==="Opacity"||z.key==="Speed"){let ae=ie,re=J!=null?Number(J):ae.min,le=isFinite(re)?re:ae.min,he=(le-ae.min)/Math.max(1e-6,ae.max-ae.min)*100;return`
        <div class="admin-dsp2-track" data-track="${z.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${z.key}" data-num-index="3"
            min="${ae.min}" max="${ae.max}" step="${L(z.key)}" value="${h(String(le))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${he.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${he.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${z.key}"
              min="${ae.min}" max="${ae.max}" step="${L(z.key)}" value="${h(String(le))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${ae.min}${ae.unit}</span><span>${ae.max}${ae.unit}</span>
            </div>
          </div>
        </div>`}if(z.key==="FontSize"){let ae=Number(J);return`
        <div class="admin-dsp2-chiprow">
          ${G.map(re=>`<button type="button" class="admin-dsp2-fchip ${ae===re?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${re}">${re}</button>`).join("")}
        </div>`}if(z.key==="Color"){let ae="#"+String(J||"FFFFFF").replace(/^#/,"").toUpperCase(),re=!!x.allowlistEdit.Color,le=re?x.allowlistEdit.Color:new Set(T("Color").map(ge=>U("Color",ge))),he=!re&&le.size===0;return`
        <div class="admin-dsp2-swatches">
          ${S.map(ge=>{let ue=ge.replace(/^#/,"").toUpperCase(),be=ge.toUpperCase()===ae,ye=re?le.has(ue):he||le.has(ue),Te=["admin-dsp2-swatch",be?"is-active":"",re?"is-editing":"",ye?"":"is-blocked"].filter(Boolean).join(" "),ke=re?`data-allow-key="Color" data-allow-value="${ue}"`:`data-chip-key="Color" data-chip-value="${ue}"`;return`<button type="button" class="${Te}" ${ke}
              style="background:${ge}" aria-label="${ge}" aria-pressed="${ye?"true":"false"}">
              ${re?`<span class="admin-dsp2-allow-mark">${ye?"\u2713":""}</span>`:""}
            </button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${h(v("specificColor"))}">
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${h(ae)}" />
          </label>
        </div>
        ${i(z)}
      `}if(z.key==="FontFamily"){let ae=(x.fonts&&x.fonts.length?x.fonts:["NotoSansTC","Inter"]).map(ue=>{let be=typeof ue=="string"?ue:ue.name||ue.family||"",ye=typeof ue=="string"?ue:ue.label||ue.name||ue.family||"";return{value:be,label:ye}}).filter(ue=>ue.value),re=String(J||""),le=!!x.allowlistEdit.FontFamily,he=le?x.allowlistEdit.FontFamily:new Set(T("FontFamily").map(ue=>U("FontFamily",ue))),ge=!le&&he.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ae.map(ue=>{let be=ue.value===re,ye=le?he.has(ue.value):ge||he.has(ue.value),Te=["admin-dsp2-tchip",be?"is-active":"",le?"is-editing":"",ye?"":"is-blocked"].filter(Boolean).join(" "),ke=le?`data-allow-key="FontFamily" data-allow-value="${h(ue.value)}"`:`data-chip-key="FontFamily" data-chip-value="${h(ue.value)}"`;return`<button type="button" class="${Te}" ${ke}
              aria-pressed="${ye?"true":"false"}">
              ${le?`<span class="admin-dsp2-allow-mark">${ye?"\u2713 ":""}</span>`:""}${h(ue.label)}
            </button>`}).join("")}
        </div>
        ${i(z)}
      `}if(z.key==="Layout"){let ae=String(J||"scroll"),re=!!x.allowlistEdit.Layout,le=re?x.allowlistEdit.Layout:new Set(T("Layout").map(ge=>U("Layout",ge))),he=!re&&le.size===0;return`
        <div class="admin-dsp2-tiles">
          ${A.map(ge=>{let ue=ge.value===ae,be=re?le.has(ge.value):he||le.has(ge.value),ye=["admin-dsp2-tile",ue?"is-active":"",re?"is-editing":"",be?"":"is-blocked"].filter(Boolean).join(" "),Te=re?`data-allow-key="Layout" data-allow-value="${ge.value}"`:`data-chip-key="Layout" data-chip-value="${ge.value}"`;return`<button type="button" class="${ye}" ${Te}
              aria-pressed="${be?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${ge.icon}</span>
              <span class="admin-dsp2-tile-label">${v(ge.labelKey)}</span>
              ${re?`<span class="admin-dsp2-allow-mark">${be?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${i(z)}
      `}return""}function i(z){if(!N(z.key))return"";let X=!!x.allowlistEdit[z.key],ee=T(z.key),J=C(z.key).length||0,ie=ee.length>0?v("displayAllowSummaryPartial",{n:ee.length,total:J,label:a(z.key)}):v("displayAllowSummaryAll",{total:J});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${z.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${z.key}">${h(ie)}</span>
        ${X?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${z.key}">${h(v("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${z.key}">${h(v("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${z.key}">${h(v("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${z.key}" title="${h(v("displayEditAllowlistTitle"))}">[${h(v("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function a(z){return v(z==="Color"?"displayLabelColor":z==="FontFamily"?"displayLabelFontFamily":z==="Layout"?"displayLabelLayout":"displayLabelOption")}function r(z,X){if(z.noRange||!(X[0]!==!1))return"";let J=_[z.key],ie=X[1]!=null?X[1]:J.min,ae=X[2]!=null?X[2]:J.max,re=L(z.key);return`
      <div class="admin-dsp2-band">
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${h(v("displayMinAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${z.key}" data-num-index="1"
              min="${J.min}" max="${J.max}" step="${re}" value="${h(String(ie))}" />
            ${J.unit?`<span>${J.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${h(v("displayMaxAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${z.key}" data-num-index="2"
              min="${J.min}" max="${J.max}" step="${re}" value="${h(String(ae))}" />
            ${J.unit?`<span>${J.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlStep")}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${z.key}" data-num-index="step"
              min="0.1" step="0.1" value="${h(String(re))}" />
            ${J.unit?`<span>${J.unit}</span>`:""}
          </div>
        </div>
      </div>`}function s(z,X){let ee=X[0]!==!1,J=X[3],ie=z.fmt?z.fmt(J):J!=null?String(J):"\u2014",ae=z.key==="Layout";return`
      <div class="admin-dsp2-row ${ee?"is-on":"is-off"} ${ae?"is-last":""}" data-row-key="${z.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${h(v(z.labelKey))}</div>
          <div class="admin-dsp2-value-badge ${ee?"is-on":""}" data-value-badge>${h(ie)}</div>
        </div>
        <div class="admin-dsp2-cell-center">
          <!-- \u63D0\u793A\u5169\u5957\u4E26\u5B58\uFF0CCSS \u4F9D data-dsp-mode \u64C7\u4E00\u3002\u986F\u793A\u5C64\u8B1B\u7684\u662F\u300C\u5927\u87A2\u5E55
               \u4E0A\u5C31\u662F\u9019\u500B\u503C\u300D\uFF1B\u89C0\u773E\u9801\u8B1B\u7684\u662F\u300C\u89C0\u773E\u62D6\u6ED1\u687F\u6642\u5F9E\u54EA\u88E1\u958B\u59CB\u300D\u3002 -->
          <div class="admin-dsp2-cell-hint" data-dsp-only="values">
            <span class="admin-dsp2-cell-hint-arrow">\u25B8</span>
            ${h(v("displayHintBigScreen"))}
          </div>
          <div class="admin-dsp2-cell-hint" data-dsp-only="audience">
            <span class="admin-dsp2-cell-hint-arrow">\u25B8</span>
            ${h(v(ee?"displayHintAudienceOn":"displayHintAudienceOff"))}
          </div>
          <div class="admin-dsp2-picker" data-picker-host>${c(z,X)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${r(z,X)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">
          <button type="button" class="admin-dsp2-pill ${ee?"is-on":""}"
            data-toggle-key="${z.key}" aria-pressed="${ee?"true":"false"}">
            <span class="admin-dsp2-pill-track"><span class="admin-dsp2-pill-thumb"></span></span>
            <span class="admin-dsp2-pill-label">${h(v(ee?"displayCustomizable":"displayLocked"))}</span>
          </button>
          <div class="admin-dsp2-toggle-hint">
            ${h(ee?v("displayToggleHintOn"):z.noRange?v("displayToggleHintOffPick"):v("displayToggleHintOffSlider"))}
          </div>
        </div>
      </div>`}function l(){let z=document.getElementById("dsp2-rows");if(z){if(!x.options){z.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):h(v("loading"))}`;return}z.innerHTML=O.map(X=>s(X,x.options[X.key]||[!1,"","",""])).join(""),t(),d()}}function o(z,X){let ee=x.options&&x.options[z];return ee&&ee[3]!=null?ee[3]:X}function t(){let z=document.querySelector("[data-preview-stage]"),X=document.querySelector("[data-preview-pill='1']"),ee=document.querySelector("[data-preview-pill='2']"),J=document.querySelector("[data-preview-foot-l]"),ie=document.querySelector("[data-preview-foot-r]");if(!z||!X||!ee||!x.options)return;let ae=Number(o("FontSize",32)),re=Number(o("Opacity",92)),le=Number(o("Speed",1)),he="#"+String(o("Color","7DD3FC")).replace(/^#/,""),ge=String(o("FontFamily","NotoSansTC")),ue=String(o("Layout","scroll")),be=Math.min(ae,36),ye=Math.max(0,Math.min(100,re))/100;X.style.fontSize=be+"px",X.style.color=he,X.style.opacity=ye.toFixed(2),X.style.fontFamily=ge+", system-ui, sans-serif",X.style.textShadow=`0 0 14px ${he}66`,ee.style.fontSize=(be*.78).toFixed(0)+"px",ee.style.opacity=(ye*.9).toFixed(2),ee.style.fontFamily=ge+", system-ui, sans-serif",z.dataset.layout=ue,J&&(J.textContent=`${f(ue)} \xB7 ${ae}px \xB7 ${(+le).toFixed(1)}\xD7`),ie&&(ie.textContent=v("displayOpacitySuffix",{n:Math.round(re)}))}function d(){let z=document.querySelector("[data-summary-list]"),X=document.querySelector("[data-summary-count]");if(!z||!x.options)return;let ee=O.filter(J=>(x.options[J.key]||[])[0]).length;X&&(X.textContent=`AUDIENCE \xB7 ${ee}/6 OPEN`),z.innerHTML=O.map(J=>{let ie=!!(x.options[J.key]||[])[0];return`<div class="admin-dsp2-srow ${ie?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${h(v(J.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${h(v(ie?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function m(z,X){try{let ee=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:z,enabled:!!X})});if(!ee.ok)throw new Error("toggle "+ee.status);Array.isArray(x.options[z])||(x.options[z]=[!1,"","",""]),x.options[z][0]=!!X,l(),window.showToast&&window.showToast(`${z} ${v("settingsUpdated")}`,!0)}catch(ee){console.warn("[admin-display] toggle failed:",ee),window.showToast&&window.showToast(v("updateFailed"),!1),await p(),l()}}async function e(z,X,ee){try{let J=ee;if(z==="Color"){let ae=String(J).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ae)){window.showToast&&window.showToast(v("colorFormatError"),!1);return}J=ae.toUpperCase()}else if(z==="Opacity"||z==="FontSize"||z==="Speed"){J=parseInt(J,10);let ae=_[z];if(Number.isNaN(J)||ae&&(J<ae.min||J>ae.max)){window.showToast&&window.showToast(`${z} ${ae.min}\u2013${ae.max}`,!1);return}}let ie=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:z,value:J,index:X})});if(!ie.ok)throw new Error("update "+ie.status);Array.isArray(x.options[z])||(x.options[z]=[!1,"","",""]),x.options[z][X]=J,u(z),t(),d()}catch(J){console.warn("[admin-display] update failed:",J),window.showToast&&window.showToast(v("updateFailed"),!1)}}async function n(z,X){try{let ee=await window.csrfFetch(`/admin/options/${encodeURIComponent(z)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:X})});if(!ee.ok)throw new Error("allowlist "+ee.status);let J=await ee.json().catch(()=>({}));J&&Array.isArray(J.option)?x.options[z]=J.option:Array.isArray(x.options[z])&&(x.options[z][1]=X.slice()),u(z),t(),d();let ie=C(z).length||0,ae=X.length>0?v("displayAllowlistToastPartial",{key:z,n:X.length,total:ie}):v("displayAllowlistToastAll",{key:z});window.showToast&&window.showToast(ae,!0)}catch(ee){console.warn("[admin-display] allowlist failed:",ee),window.showToast&&window.showToast(v("updateFailed"),!1)}}function u(z){let X=document.querySelector(`[data-row-key="${z}"]`);if(!X||!x.options)return;let ee=O.find(re=>re.key===z);if(!ee)return;let J=x.options[z]||[!1,"","",""],ie=J[3],ae=X.querySelector("[data-value-badge]");if(ae&&(ae.textContent=ee.fmt?ee.fmt(ie):ie!=null?String(ie):"\u2014"),N(z)){let re=X.querySelector("[data-picker-host]");re&&(re.innerHTML=c(ee,J));return}if((z==="FontSize"||z==="Color"||z==="FontFamily"||z==="Layout")&&X.querySelectorAll(`[data-chip-key="${z}"]`).forEach(re=>{let le=re.getAttribute("data-chip-value"),he=z==="Color"?String(ie||"").replace(/^#/,"").toUpperCase():String(ie??"");re.classList.toggle("is-active",String(le)===he)}),z==="Opacity"||z==="Speed"){let re=_[z],le=Number(ie??re.min),he=(le-re.min)/Math.max(1e-6,re.max-re.min)*100,ge=X.querySelector(".admin-dsp2-slider-fill"),ue=X.querySelector(".admin-dsp2-slider-thumb");ge&&(ge.style.width=he.toFixed(2)+"%"),ue&&(ue.style.left=`calc(${he.toFixed(2)}% - 8px)`);let be=X.querySelector(".admin-dsp2-range");be&&document.activeElement!==be&&(be.value=String(le));let ye=X.querySelector(".admin-dsp2-num");ye&&document.activeElement!==ye&&(ye.value=String(le))}}async function p(){try{let z=await fetch("/get_settings",{credentials:"same-origin"});if(!z.ok)throw new Error(z.status);x.options=await z.json()}catch(z){console.warn("[admin-display] /get_settings failed:",z),x.options=x.options||{}}}async function k(){try{let z=await fetch("/fonts",{credentials:"same-origin"});if(!z.ok)throw new Error(z.status);let X=await z.json();x.fonts=Array.isArray(X)?X:X.fonts||[]}catch{x.fonts=["NotoSansTC","Inter"]}}async function w(){try{let z=await fetch("/admin/metrics",{credentials:"same-origin"});if(!z.ok)return;let X=await z.json();x.viewerCount=X.ws_clients??0}catch{}}function I(){F(),w(),x.metricsTimer=setInterval(w,5e3)}function F(){x.metricsTimer&&(clearInterval(x.metricsTimer),x.metricsTimer=null)}function H(){if(!x.options){window.showToast&&window.showToast(v("loading"),!1);return}let z={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:x.options},X=new Blob([JSON.stringify(z,null,2)],{type:"application/json"}),ee=URL.createObjectURL(X),J=document.createElement("a");J.href=ee,J.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(J),J.click(),document.body.removeChild(J),URL.revokeObjectURL(ee),window.showToast&&window.showToast(v("displayExportDone"),!0)}async function D(){if(!x.options)return;let z=document.getElementById("dsp2-deploy");z&&(z.disabled=!0,z.classList.add("is-pending"));try{for(let X of O){let ee=x.options[X.key];Array.isArray(ee)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:X.key,enabled:!!ee[0]})})}await w(),window.showToast&&window.showToast(v("displayBroadcastDone")+` ${x.viewerCount} ${v("displayViewersReceivedSuffix")}`,!0)}catch(X){console.warn("[admin-display] deploy failed:",X),window.showToast&&window.showToast(v("updateFailed"),!1)}finally{z&&(z.disabled=!1,z.classList.remove("is-pending"))}}async function $(){let z={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,1,10,8],Color:[!0,0,0,"FFFFFF"],FontFamily:[!1,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:v("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"warn",body:v("displayRevertConfirm"),confirmLabel:v("displayDeployRevert")}))try{for(let[ee,J]of Object.entries(z)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:ee,enabled:!!J[0]})});for(let ie=1;ie<=3;ie++)ie<3&&(ee==="Color"||ee==="FontFamily"||ee==="Layout")||J[ie]===""||J[ie]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:ee,value:J[ie],index:ie})})}await p(),l(),window.showToast&&window.showToast(v("displayRevertDone"),!0)}catch(ee){console.warn("[admin-display] revert failed:",ee),window.showToast&&window.showToast(v("updateFailed"),!1)}}function j(){let z=document.getElementById(y);z&&(z.addEventListener("click",X=>{let ee=X.target.closest("[data-toggle-key]");if(ee){let re=ee.getAttribute("data-toggle-key"),le=!!(x.options[re]||[])[0];m(re,!le);return}let J=X.target.closest("[data-allow-action]");if(J){let re=J.getAttribute("data-allow-action"),le=J.getAttribute("data-allow-key");if(!le)return;if(re==="edit"){let he=T(le).map(ge=>U(le,ge));he.length?x.allowlistEdit[le]=new Set(he):x.allowlistEdit[le]=new Set(C(le)),u(le);return}if(re==="cancel"){delete x.allowlistEdit[le],u(le);return}if(re==="clear"){x.allowlistEdit[le]=new Set,n(le,[]),delete x.allowlistEdit[le];return}if(re==="apply"){let he=x.allowlistEdit[le]||new Set,ge=C(le),ue=Array.from(he),be=ge.length>0&&ue.length===ge.length&&ge.every(ye=>he.has(ye));n(le,be?[]:ue),delete x.allowlistEdit[le];return}}let ie=X.target.closest("[data-allow-key][data-allow-value]");if(ie){let re=ie.getAttribute("data-allow-key"),le=ie.getAttribute("data-allow-value"),he=x.allowlistEdit[re];if(he){let ge=U(re,le);he.has(ge)?he.delete(ge):he.add(ge),u(re)}return}let ae=X.target.closest("[data-chip-key]");if(ae){let re=ae.getAttribute("data-chip-key"),le=ae.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${re}"]`).forEach(he=>he.classList.remove("is-active")),ae.classList.add("is-active"),e(re,3,le);return}if(X.target&&X.target.id==="dsp2-revert"){$();return}if(X.target&&X.target.id==="dsp2-export"){H();return}}),z.addEventListener("change",X=>{let ee=X.target;if(!ee)return;let J=ee.getAttribute("data-num-key");if(!J)return;let ie=ee.getAttribute("data-num-index");if(ie==="step"){E(J,ee.value),u(J);return}let ae=parseInt(ie,10);if(Number.isNaN(ae))return;let re=ee.value;J==="Color"&&(re=String(re).replace(/^#/,"").toUpperCase()),e(J,ae,re)}),z.addEventListener("input",X=>{let ee=X.target;if(ee){if(ee.classList&&ee.classList.contains("admin-dsp2-range")){let J=ee.getAttribute("data-range-key"),ie=_[J],ae=Number(ee.value),re=(ae-ie.min)/Math.max(1e-6,ie.max-ie.min)*100,le=ee.closest("[data-row-key]");if(le){let he=le.querySelector(".admin-dsp2-slider-fill"),ge=le.querySelector(".admin-dsp2-slider-thumb");he&&(he.style.width=re.toFixed(2)+"%"),ge&&(ge.style.left=`calc(${re.toFixed(2)}% - 8px)`);let ue=le.querySelector(".admin-dsp2-num");ue&&(ue.value=String(ae))}Array.isArray(x.options[J])&&(x.options[J][3]=ae),t();return}if(ee.classList&&ee.classList.contains("admin-dsp2-num")){let J=ee.getAttribute("data-num-key"),ie=parseInt(ee.getAttribute("data-num-index"),10);if(Number.isNaN(ie)||!Array.isArray(x.options[J]))return;let ae=ee.value;ee.type==="number"&&(ae=Number(ae)),x.options[J][ie]=ae,t()}}}),z.addEventListener("change",X=>{let ee=X.target;if(ee&&ee.classList&&ee.classList.contains("admin-dsp2-range")){let J=ee.getAttribute("data-range-key");e(J,3,ee.value)}}),z.addEventListener("click",X=>{let ee=X.target.closest("[data-dl-step]");if(ee){let ie=ee.closest("[data-dl-stepper]");if(!ie)return;let ae=ie.getAttribute("data-dl-stepper"),le=Number(K[ae]??0)+Number(ee.getAttribute("data-dl-step"));q(ae,le);return}let J=X.target.closest("[data-dl-opt]");if(J){let ie=J.closest("[data-dl-seg]");if(!ie)return;let ae=ie.getAttribute("data-dl-seg"),re=J.getAttribute("data-dl-opt");q(ae,["safe_area","poll_vote_opacity"].indexOf(ae)!==-1?Number(re):re)}}),z.addEventListener("change",X=>{let ee=X.target.closest("[data-dl-toggle]");if(ee){q(ee.getAttribute("data-dl-toggle"),ee.checked);return}let J=X.target.closest("[data-dl-range]");J&&q(J.getAttribute("data-dl-range"),Number(J.value))}),z.addEventListener("input",X=>{let ee=X.target.closest("[data-dl-range]");if(!ee)return;let J=ee.getAttribute("data-dl-range"),ie=z.querySelector(`[data-dl-value="${J}"]`);ie&&(ie.textContent=ee.value+"%")}))}let K={};function Y(){let z=document.getElementById(y);z&&Object.entries(K).forEach(([X,ee])=>{let J=z.querySelector(`[data-dl-value="${X}"]`);J&&(J.textContent=X==="max_tracks"?Number(ee)===0?v("dlMaxTracksAuto"):String(ee):String(ee)+"%");let ie=z.querySelector(`[data-dl-range="${X}"]`);ie&&document.activeElement!==ie&&(ie.value=String(ee));let ae=z.querySelector(`[data-dl-toggle="${X}"]`);ae&&(ae.checked=!!ee);let re=z.querySelector(`[data-dl-seg="${X}"]`);re&&re.querySelectorAll("[data-dl-opt]").forEach(le=>{let he=le.getAttribute("data-dl-opt")===String(ee);le.classList.toggle("is-active",he),le.setAttribute("aria-pressed",he?"true":"false")})})}async function M(){try{let z=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!z.ok)return;K=await z.json(),Y()}catch(z){console.warn("[admin-display] display-layer fetch failed:",z)}}async function q(z,X){let ee=K[z];K[z]=X,Y();try{let J=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[z]:X})});if(!J.ok)throw new Error("display-layer "+J.status);K=await J.json(),Y()}catch(J){K[z]=ee,Y(),console.warn("[admin-display] display-layer update failed:",J),window.showToast&&window.showToast(v("updateFailed"),!1)}}function V(){b.forEach(z=>{let X=document.getElementById(z);X&&X.setAttribute("data-admin-ui-replaced","1")})}let ne=null;function W(z,X){return z==="overlay"||X==="overlay"||z==="display"||X==="display"}function Z(z,X){return z==="viewer-config"||z==="viewer"||X==="viewer-config"||X==="viewer"}function te(z,X){if(!Z(z,X))return;let ee=window.AdminTabs?.getConfig?.("viewer");if(!ee)return;let J=ae=>ee.tabs.some(re=>re.slug===ae),ie=J(X)?X:null;if(!ie&&window.AdminTabs.resolveActiveTab){let ae=window.AdminTabs.resolveActiveTab("viewer",null);J(ae)&&(ie=ae)}ie&&(document.body.dataset.viewerConfigTab=ie)}let oe=!1,Q=!1;async function se(){let z=document.getElementById("sec-viewer-config-limits");if(!z||oe)return;oe=!0;let X=(ee,J)=>{let ie=z.querySelector(ee);ie&&(ie.textContent=J==null?"\u2014":String(J))};try{let ee=await fetch("/admin/metrics",{credentials:"same-origin"});if(!ee.ok)return;let J=await ee.json(),ie=J.rate_limits&&J.rate_limits.fire||{},ae=J.rate_limits&&J.rate_limits.totals||{},re=J.rate_limit_config&&J.rate_limit_config.fire||{},le=Math.max(1,(J.server_time||0)-(J.server_started_at||0));X("[data-vc-rate-fp]",re.limit||"\u2014"),X("[data-vc-rate-global]","\u2014"),X("[data-vc-rate-burst]","\u2014"),X("[data-vc-rate-cooldown]",re.window||"\u2014"),X("[data-vc-msg-len]",100),X("[data-vc-nick-len]","\u2014"),X("[data-vc-dedup]","\u2014");let he=(ie.hits||0)/le;X("[data-vc-avg-rate]",he.toFixed(2)+"/s"),X("[data-vc-throttled]",ie.violations||0),X("[data-vc-blocked]",ae.locked_sources||0),X("[data-vc-deduped]",0)}catch{}finally{oe=!1}}function de(){let z=document.querySelector(".admin-dash-grid"),X=document.getElementById(y);if(!z||!X)return;let ee=z.dataset.activeRoute||"live",J=z.dataset.activeLeaf||ee;te(ee,J);let ie=document.body.dataset.viewerConfigTab||"defaults",ae=Z(ee,J),re=W(ee,J),le=ae||re;X.dataset.dspMode=re?"values":"audience",X.style.display=le?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach(ge=>{let ue=document.getElementById(ge);ue&&(ue.style.display=ae?"":"none")});let he=document.getElementById("sec-viewer-config-info");he&&(he.style.display=ae?"":"none"),ae?Q||(Q=!0,se()):Q=!1,W(ee,J)?x.metricsTimer||I():F(),ne=ee}function ce(){if(document.getElementById("sec-viewer-config-info"))return;let z=document.getElementById("settings-grid");if(!z)return;let X=document.createElement("div");X.id="sec-viewer-config-info",X.className="lg:col-span-2",X.innerHTML='<div class="admin-vc-info-banner">'+v("displayViewerConfigInfoBanner")+"</div>";let ee=[{k:v("displayFieldNicknameLabel"),desc:v("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:v("displayFieldMessageLabel"),desc:v("displayFieldMessageDesc"),on:!0,pinned:!0},{k:v("displayFieldColorLabel"),desc:v("displayFieldColorDesc"),on:!0},{k:v("displayFieldFontLabel"),desc:v("displayFieldFontDesc"),on:!0},{k:v("displayFieldSizeLabel"),desc:v("displayFieldSizeDesc"),on:!0},{k:v("displayFieldOpacityLabel"),desc:v("displayFieldOpacityDesc"),on:!0},{k:v("displayFieldSpeedLabel"),desc:v("displayFieldSpeedDesc"),on:!0},{k:v("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:v("displayFieldEffectLabel"),desc:v("displayFieldEffectDesc"),on:!1}],J=document.createElement("div");J.id="sec-viewer-config-fields",J.className="admin-vc-fields-grid lg:col-span-2";let ie=document.createElement("div");ie.className="admin-vc-col-panel";let ae=document.createElement("div");ae.className="admin-vc-fields-head";let re=ee.filter(function(Se){return Se.on}).length,le=ee.length-re;ae.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+h(v("displayFieldsCountLabel",{count:ee.length}))+'</span><span class="admin-vc-fields-count">'+h(v("displayFieldsShownHidden",{shown:re,hidden:le}))+"</span>",ie.appendChild(ae);let he=document.createElement("div");he.className="admin-vc-fields-list",ee.forEach(function(Se){let _e=document.createElement("div");_e.className="admin-vc-field-row"+(Se.blocked?" is-blocked":"");let Ee=document.createElement("span");Ee.className="admin-vc-field-dot"+(Se.on?" is-on":""),_e.appendChild(Ee);let $e=document.createElement("div");var we="";Se.pinned&&(we='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+h(v("displayFieldBadgeRequired"))+"</span>"),Se.blocked&&(we='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+h(v("displayFieldBadgeBlocked"))+"</span>"),$e.innerHTML='<div class="admin-vc-field-label">'+h(Se.k)+we+'</div><div class="admin-vc-field-desc">'+h(Se.desc)+"</div>",_e.appendChild($e);let Ie=document.createElement("button");if(Ie.type="button",Ie.className="admin-vc-toggle "+(Se.on?"is-on":"is-off"),Ie.textContent=Se.on?v("displayToggleShow"):v("displayToggleHide"),Se.blocked||Se.pinned)Ie.disabled=!0,Ie.className+=" disabled";else{var xe=Se.on;Ie.addEventListener("click",function(){xe=!xe,Ie.className="admin-vc-toggle "+(xe?"is-on":"is-off"),Ie.textContent=v(xe?"displayToggleShow":"displayToggleHide"),Ee.className="admin-vc-field-dot"+(xe?" is-on":"")})}_e.appendChild(Ie),he.appendChild(_e)}),ie.appendChild(he);let ge=document.createElement("div");ge.className="admin-vc-col-panel";var be=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(Se,_e){return'<span class="admin-vc-swatch-dot" style="background:'+Se+";border:"+(_e===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");ge.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+h(v("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(v("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+h(v("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(v("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+h(v("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(v("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+be+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(v("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(v("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(v("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(v("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(v("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(v("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(v("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+h(v("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+h(v("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+h(v("displayFieldsTip"))+"</div>",J.appendChild(ie),J.appendChild(ge);function ye(Se,_e,Ee,$e,we,Ie){let xe=Ie?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+Se+'</div></div><div class="admin-vc-limit-row__value" style="color:'+xe+'">'+Ee+'<span class="admin-vc-limit-row__unit">'+($e||"")+"</span></div>"+(we?'<div class="admin-vc-limit-row__hint">'+we+"</div>":"")+"</div>"}let Te=document.createElement("div");Te.id="sec-viewer-config-limits",Te.className="admin-vc-limits-grid lg:col-span-2",Te.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+h(v("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+h(v("displayEditLink"))+"</a></div>"+ye(h(v("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",h(v("displayRateFpUnit")),h(v("displayRateFpHint")))+ye(h(v("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",h(v("displayRateGlobalHint")))+ye(h(v("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",h(v("displayRateBurstUnit")),h(v("displayRateBurstHint")))+ye(h(v("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",h(v("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+h(v("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+h(v("displayContentLimitsTitle"))+"</span></div>"+ye(h(v("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",h(v("displayMsgLenUnit")),h(v("displayMsgLenHint")))+ye(h(v("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",h(v("displayNickLenUnit")),h(v("displayNickLenHint")))+ye(h(v("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",h(v("displayDedupHint")))+ye(h(v("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+h(v("displayProfanityDefaultValue"))+"</span>","",h(v("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+h(v("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+h(v("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+h(v("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+h(v("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+h(v("displayAuditLogLink"))+"</a></div>";let ke=document.getElementById("sec-viewer-theme");ke&&ke.parentNode===z?(z.insertBefore(X,ke),z.insertBefore(Te,ke),z.insertBefore(J,ke)):(z.appendChild(X),z.appendChild(Te),z.appendChild(J)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),de()}async function ve(){let z=document.getElementById("settings-grid");if(!z||document.getElementById(y)){V();return}z.insertAdjacentHTML("beforeend",B()),j(),V(),de(),x.options||await Promise.all([p(),k()]),M(),l()}function fe(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?ve():V(),de()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",de),document.addEventListener("admin-route-applied",de),document.addEventListener("admin-panel-rendered",()=>{ve(),V(),ce(),de()}),ve(),ce()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",fe):fe()})()});var tt=me(()=>{document.addEventListener("DOMContentLoaded",()=>{function y(){let M=document.querySelector('meta[name="csrf-token"]');return M&&M.content||""}let b=window.DANMU_CONFIG||{},g=b.session||{logged_in:!1},h=b.settingRanges||{};function _(M,q={}){let V={credentials:"same-origin",...q},ne=new Headers(q.headers||{});return ne.set("X-CSRF-Token",y()),V.headers=ne,fetch(M,V)}window.csrfFetch=_;let G=5e3,S={at:0,data:null,promise:null};function A(){return S.data&&Date.now()-S.at<G}function v(){return A()?Promise.resolve(S.data):(S.promise||(S.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(M=>M.ok?M.json():null).then(M=>(M&&(S.data=M,S.at=Date.now()),S.promise=null,M)).catch(()=>(S.promise=null,null))),S.promise)}function R(M){if(!A())return null;let q=S.data[M];return q&&typeof q=="object"&&"_error"in q?null:q}window.__danmuAdminBootstrap={prime:v,get:R},v();let L={},E=null,x=null,P=Object.create(null);Object.assign(P,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},"api-tokens":{nav:"integrations",tab:"api-tokens"},scheduler:{nav:"integrations",tab:"scheduler"}});let N=Object.create(null);Object.assign(N,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"integrations",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"integrations",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"integrations",tab:"plugins"},mobile:{nav:"system",tab:"system"}});let T={_key:M=>"admin:tab:"+M,get(M){try{return sessionStorage.getItem(this._key(M))||null}catch{return null}},set(M,q){try{q?sessionStorage.setItem(this._key(M),q):sessionStorage.removeItem(this._key(M))}catch{}}};function C(M){let q=(M||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!q)return null;let V=q[1],ne=q[2]||null,W=null;if(!ne){let Q=P[V];typeof Q=="string"?V=Q:Q&&typeof Q=="object"&&(V=Q.nav||V,W=Q.tab||null)}let Z=N[V],te=V,oe=null;if(typeof Z=="string"?te=Z:Z&&typeof Z=="object"&&(te=Z.nav||V,oe=Z.tab||null),q[1]!==te&&(C._warned||(C._warned=new Set),!C._warned.has(q[1]))){C._warned.add(q[1]);try{console.info("[admin] legacy route #/"+q[1]+" \u2192 #/"+te+(ne||oe||W?"/"+(ne||oe||W):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:te,tab:ne||oe||W,raw:V}}function U(M,q){return q?"#/"+M+"/"+q:"#/"+M}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:N,tabMemory:T,parseHash:C,buildHash:U});var B=window.AdminUtils.loadDetailsState,O=window.AdminUtils.saveDetailsState,f=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:v,bootstrapSection:R};async function c(){try{L=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),g.logged_in&&I()}catch(M){console.error("Get settings failed:",M),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function i(M){return/^#[0-9A-Fa-f]{6}$/.test(M)}function a(M){return i(M)?M:/^[0-9A-Fa-f]{6}$/.test(M)?"#"+M:(M.startsWith("#")||(M="#"+M),i(M)?M:"#38bdf8")}function r(M,q){if(h[M]){let V=parseInt(q);if(isNaN(V)||V<h[M].min||V>h[M].max)return showToast(ServerI18n.t("settingRangeError",{key:M,min:h[M].min,max:h[M].max}),!1),!1}return!0}function s(M,q,V){if(!V||!Array.isArray(L[M]))return;let ne=L[M][q];M==="Color"&&typeof ne=="string"&&(ne=a(`#${ne}`)),ne!=null&&(V.value=String(ne))}let l={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-plugins","sec-widgets"]}};function o(){Object.values(l).forEach(M=>{let q=document.getElementById(M.containerId);q&&M.orderedIds.forEach(V=>{let ne=document.getElementById(V);ne&&ne.parentElement!==q&&q.appendChild(ne)})})}function t(){E&&(E.disconnect(),E=null),o(),E=new MutationObserver(()=>{o()}),E.observe(e,{childList:!0,subtree:!0})}async function d(M,q,V,ne=null){try{if(M==="Color"){if(!i(q)){showToast(ServerI18n.t("colorFormatError"),!1),s(M,V,ne);return}q=q.replace("#","")}else if((M==="Speed"||M==="Opacity"||M==="FontSize")&&!r(M,q)){s(M,V,ne);return}(await _("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:M,value:q,index:V})})).ok?(Array.isArray(L[M])||(L[M]=[!1,"","",""]),L[M][V]=q,showToast(`${M} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await c())}catch(W){console.error("Error:",W),showToast(`Update Error: ${W.message}`,!1),await c()}}async function m(M,q){try{let V=await _("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:M,enabled:q})}),ne=await V.json().catch(()=>({}));if(V.ok)Array.isArray(L[M])||(L[M]=[!1,"","",""]),L[M][0]=q,showToast(`${M} ${ServerI18n.t("settingsUpdated")}`),I();else{let W=document.getElementById(`toggle-${M}`);W&&(W.checked=!q),showToast(ne.error||ServerI18n.t("updateFailed"),!1)}}catch(V){console.error("Error:",V);let ne=document.getElementById(`toggle-${M}`);ne&&(ne.checked=!q),showToast(`Update Error: ${V.message}`,!1)}}let e=document.getElementById("app-container"),n=document.getElementById("toast-container"),u=(M,q=500)=>"requestIdleCallback"in window?window.requestIdleCallback(M,{timeout:q}):setTimeout(M,q);async function p(){let M=parseInt(document.getElementById("historyHours")?.value||"24");try{let[q,V]=await Promise.all([fetch(`/admin/stats/hourly?hours=${M}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${M}&limit=10`,{credentials:"same-origin"})]);if(!q.ok||!V.ok)return;let ne=await q.json(),W=await V.json(),Z=document.getElementById("statsDashboard");if(!Z)return;let te=ne.distribution||[],oe=W.topTexts||[],Q=Math.max(1,...te.map(fe=>fe.count)),se=te.reduce((fe,z)=>fe+(z.count||0),0),de=te.filter(fe=>fe.count>0).length,ce=te.map(fe=>`<div class="chart-bar" style="height: ${Math.round(fe.count/Q*100)}%" title="${f(fe.hour)}: ${fe.count}"><span class="chart-label">${f(fe.hour.slice(-5,-3))}</span></div>`).join(""),ve=oe.map((fe,z)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${z+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${f(fe.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${fe.count}</td></tr>`).join("");Z.innerHTML=`
        <div class="history-dashboard-grid">
          <div class="history-dashboard-card">
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label">${ServerI18n.t("total")}</span>
              <strong class="history-dashboard-value">${se}</strong>
            </div>
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label" data-i18n="historyActiveSlots">${ServerI18n.t("historyActiveSlots")}</span>
              <strong class="history-dashboard-value">${de}</strong>
            </div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--chart">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("hourlyDistribution")}</h4>
              <span class="history-dashboard-caption">${M}h window</span>
            </div>
            <div class="stats-chart">${ce||`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${oe.length?`<table class="w-full text-xs"><tbody>${ve}</tbody></table>`:`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
          </div>
        </div>`}catch(q){console.error("Load stats error:",q)}}window._loadStats=p,window.csrfFetch=_,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=e,window.__adminCtx.getSettings=()=>L;function k(){e&&(e.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function w(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():k()}function I(){let M=B(),q=(de,ce=!1)=>M[de]!==void 0?M[de]:ce,V=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(de=>Array.isArray(L[de])&&L[de][0]===!0).length,ne=L.Layout&&L.Layout[3]?f(String(L.Layout[3]).replace(/_/g," ")):"scroll",W=L.FontFamily&&L.FontFamily[3]?f(String(L.FontFamily[3])):"NotoSansTC",Z=de=>de.map(ce=>`<span style="height:${ce*10}%;opacity:${.3+ce*.08}"></span>`).join(""),te=ne&&ne!=="off",oe=window.location.port||(window.location.protocol==="https:"?"443":"80");e.innerHTML=`
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
                                    <button class="admin-dash-broadcast ${te?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${f(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${f(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 ${f(te?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}
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
                `;let Q=document.getElementById("settings-grid"),se=L.Effects?L.Effects[0]!==!1:!0;Q.insertAdjacentHTML("beforeend",`
      <div id="sec-effects" class="admin-ui-group admin-master-toggle admin-master-toggle--slim lg:col-span-2">
        <div class="admin-ui-group-row is-tall admin-master-toggle__row">
          <span class="lbl">${ServerI18n.t("effectsSetting")}
            <span class="sub admin-master-toggle__state" data-on="${se}">${se?ServerI18n.t("effectsEnabledMsg"):ServerI18n.t("effectsDisabledMsg")}</span>
          </span>
          <span class="admin-master-toggle__spacer"></span>
          <div class="relative inline-block w-12 align-middle select-none transition duration-200 ease-in flex-shrink-0">
            <input type="checkbox" name="Effects" id="toggle-Effects" role="switch" aria-checked="${se}" aria-label="Toggle ${ServerI18n.t("effectsSetting")}" class="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer" ${se?"checked":""} />
            <label for="toggle-Effects" class="toggle-label block overflow-hidden h-7 rounded-full cursor-pointer" style="background:var(--color-bg-elevated)"></label>
          </div>
        </div>
      </div>`),Q.insertAdjacentHTML("beforeend",`
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
    `),Q.insertAdjacentHTML("beforeend",`
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
    `),u(K),Q.insertAdjacentHTML("beforeend",`
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
    `),D(),t(),u(Y),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),H(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let ce=document.querySelector("[data-telem-bars]");if(!ce)return;let ve=document.querySelector("[data-telem-status]"),fe={cpu:100,mem:100,ws:100,rate:50};function z(J,ie,ae,re,le){let he=ce.querySelector(`[data-telem-fill="${J}"]`),ge=ce.querySelector(`[data-telem-value="${J}"]`);he&&(he.style.width=Math.max(0,Math.min(100,ie))+"%",he.classList.toggle("is-warn",!re)),ge&&(ge.textContent=ae);let ue=ce.querySelector(`[data-telem-row="${J}"]`);ue&&le&&ue.setAttribute("title",le)}function X(J,ie){if(!ie||ie<=0)return Math.round(J)+" MB used";if(ie>=1024){let ae=(J/1024).toFixed(1),re=(ie/1024).toFixed(1);return`${ae} / ${re} GB used`}return`${Math.round(J)} / ${Math.round(ie)} MB used`}async function ee(){try{let J=await fetch("/admin/metrics",{credentials:"same-origin"});if(!J.ok)return;let ie=await J.json(),ae=ie.cpu_series||[],re=ie.mem_series||[],le=ie.mem_mb_series||[],he=ie.ws_series||[],ge=ie.rate_series||[],ue=Ee=>Ee.length?Ee[Ee.length-1]:0,be=Number(ue(ae)||0),ye=Number(ue(re)||0),Te=Number(ue(le)||0),ke=Number(ie.mem_total_mb||0),Se=Number(ue(he)||ie.ws_clients||0),_e=Number(ue(ge)||0)/60;if(z("cpu",be,`${be.toFixed(0)}%`,be<90),z("mem",ye,`${ye.toFixed(0)}%`,ye<90,X(Te,ke)),z("ws",Se/fe.ws*100,String(Se),Se<100),z("rate",_e/fe.rate*100,`${_e.toFixed(1)}/s`,_e<40),ve){let Ee=be>=90||ye>=90||_e>=40;ve.textContent=Ee?"\u25CF BUSY":"\u25CF HEALTHY",ve.classList.toggle("is-warn",Ee)}}catch{}}setTimeout(ee,4e3),setInterval(ee,5e3)})()}let F={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},integrations:{title:"\u64F4\u5145",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"]},firetoken:{title:"Fire Token",kicker:"ADMIN LANE \xB7 FIRE TOKEN \xB7 \u7528\u91CF / IP / AUDIT",sections:["sec-firetoken-overview"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},security:{title:"\u5B89\u5168",kicker:"SECURITY \xB7 \u5BC6\u78BC \xB7 WS TOKEN \xB7 \u5BE9\u8A08",sections:["admin-security-v2-page"]},backup:{title:"\u5099\u4EFD\u8207\u9084\u539F",kicker:"BACKUP \xB7 EXPORT \xB7 DANGER",sections:["admin-backup-v2-page","sec-timeline-export"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=F;function H(){let M=document.querySelector(".admin-dash-grid");if(!M)return;let q="dashboard",V=null;function ne(J){return l.moderation.orderedIds.indexOf(J)!==-1?"moderation-grid":l.assets.orderedIds.indexOf(J)!==-1?"assets-grid":J==="sec-scheduler"||J==="sec-webhooks"?"sec-advanced":"settings-grid"}function W(){let J=M.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),ie=M.querySelector("[data-route-note]"),ae=M.querySelector("[data-route-action]");if(ae&&Array.prototype.slice.call(ae.children).forEach(ue=>{ue._adminHomeHead?ue._adminHomeHead.appendChild(ue):ue.remove()}),!J)return;let re=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(q)),le=Array.prototype.slice.call(M.querySelectorAll(".admin-ui-page-head"));le.forEach(ue=>ue.classList.remove("is-merged-into-topbar"));let he=(F[q]?.title||"").trim().replace(/\s+/g," "),ge=null;le.forEach(ue=>{let be=ue.querySelector(".admin-ui-page-title"),ye=be&&be.textContent.trim().replace(/\s+/g," ");if(ye&&(re||ye===J||ye===he)){if(ue.offsetParent!==null){ge===null&&(ge=ue.querySelector(".admin-ui-page-note")?.innerHTML||"");let ke=ue.querySelector(".admin-ui-page-actions");ke&&ae&&!ae.children.length&&(ke._adminHomeHead=ue,ae.appendChild(ke))}ue.classList.add("is-merged-into-topbar")}}),ie&&(ie.innerHTML=ge||"",ie.hidden=!ge)}function Z(){let J=F[q],ie=new Set((J.sections||[]).map(ne)),ae=re=>re.id==="sec-advanced"?Array.from(re.querySelectorAll('[id^="sec-"]')).some(le=>getComputedStyle(le).display!=="none"):Array.from(re.children).some(le=>getComputedStyle(le).display!=="none");M.querySelectorAll(".admin-route-sections").forEach(re=>{if(!(re.id==="sec-advanced"?ie.has("sec-advanced"):ie.has(re.id))){re.style.display="none";return}re.style.display="",re.style.display=ae(re)?"":"none"})}let te=()=>{let J=F[q],ie=new Set(J.sections);M.querySelectorAll('[id^="sec-"]').forEach(ae=>{if(ae.id){if(ae.id==="sec-advanced"){let re=Array.from(ae.querySelectorAll('[id^="sec-"]')).some(le=>ie.has(le.id));ae.style.display=re?"":"none";return}ae.style.display=ie.has(ae.id)?"":"none"}}),V&&window.AdminTabs?.hasTabsFor?.(q)&&window.AdminTabs.applyTabSectionVisibility(q,V,M),Z(),W()},oe={system:{nav:"system",tab:"overview"},backup:{nav:"backup"},integrations:{nav:"integrations"},"api-tokens":{nav:"integrations",tab:"api-tokens"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},scheduler:{nav:"integrations",tab:"scheduler"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}},Q=(J,ie,ae)=>{if(ae=ae||J,!F[J]){let we=P[J];if(typeof we=="string")J=we;else if(we&&typeof we=="object")we.nav&&(J=we.nav),!ie&&we.tab&&(ie=we.tab);else{let Ie=N[J];typeof Ie=="string"?J=Ie:Ie&&typeof Ie=="object"&&(Ie.nav&&(J=Ie.nav),!ie&&Ie.tab&&(ie=Ie.tab))}}if(J==="system"&&ie&&oe[ie]){let we=oe[ie];J=we.nav,ie=we.tab||null,ae=J}q=F[J]?J:"live",M.dataset.activeRoute=q;let re;window.AdminTabs?.hasTabsFor?.(q)?re=window.AdminTabs.resolveActiveTab(q,ie):re=null;let le=ae&&ae!==q?"#/"+ae:window.AdminRouter?.buildHash?window.AdminRouter.buildHash(q,re):"#/"+q;if(window.location.hash!==le){try{history.replaceState(null,"",le)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let he=F[q],ge=Array.from(M.querySelectorAll(".admin-dash-nav-row[data-route]")),ue=ae!==q?ge.find(we=>we.dataset.route===ae):null;ge.forEach(we=>{let Ie=ue?we===ue:we.dataset.route===q;we.classList.toggle("is-active",Ie),we.setAttribute("aria-selected",Ie?"true":"false")});let be=M.querySelector("[data-route-kicker]"),ye=M.querySelector("[data-route-title]");var Te=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(we){return we},ke="adminRouteTitle_"+q,Se="adminRouteKicker_"+q,_e=Te(ke),Ee=Te(Se);be&&(be.textContent=Ee!==Se?Ee:he.kicker),ye&&(ye.textContent=_e!==ke?_e:he.title);let $e=q==="dashboard"||q==="live";M.querySelectorAll('[data-route-view="dashboard"]').forEach(we=>{we.style.display=$e?"":"none"}),$e?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),V=re,re&&window.AdminRouter?.tabMemory?.set?.(q,re),M.dataset.activeLeaf=re||q,te(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:q,leaf:re}})),Z(),W(),de(q,re),se(ae,q,re);try{history.replaceState(null,"",le)}catch{}};function se(J,ie,ae){window.AdminBreadcrumb?.render(M,J,ie,ae)}function de(J,ie){let ae=M.querySelector("[data-admin-tabs-host]");if(!ae){let re=M.querySelector(".admin-dash-topbar");if(!re)return;ae=document.createElement("div"),ae.dataset.adminTabsHost="",re.insertAdjacentElement("afterend",ae)}if(ae.innerHTML="",window.AdminTabs?.hasTabsFor?.(J)&&ie){ae.hidden=!1;let re=window.AdminTabs.renderTabStrip(J,ie,{onSelect:le=>Q(J,le)});re&&ae.appendChild(re),ae.classList.remove("admin-tabs-host--accordion");return}ae.classList.remove("admin-tabs-host--accordion"),ae.hidden=!0}x&&window.removeEventListener("hashchange",x),x=()=>{let J=C(window.location.hash),ie=(window.location.hash||"").match(/^#\/([\w-]+)/),ae=ie?ie[1]:null;J&&Q(J.nav,J.tab,ae||J.raw)},window.addEventListener("hashchange",x),M.querySelectorAll("[data-route]").forEach(J=>{J.addEventListener("click",ie=>{ie.preventDefault(),Q(J.dataset.route)})});let ce=C(window.location.hash),ve=(window.location.hash||"").match(/^#\/([\w-]+)/),fe=ve?ve[1]:ce?.raw||ce?.nav||"live";Q(ce?.nav||"live",ce?.tab||null,fe),window._adminNavigateTo=()=>Q(q,V);let z=!1;function X(){if(z)return;z=!0;let J=()=>{z=!1,te(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:q,leaf:V}}))};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?requestAnimationFrame(J):setTimeout(J,0)}let ee=M.querySelector(".admin-dash-main");ee&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{X()}).observe(ee,{childList:!0,subtree:!0}),X())}function D(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let M=document.querySelector("[data-open-help]");M&&M.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let q=document.querySelector("[data-open-palette]");if(q){let ne=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};q.addEventListener("click",ne),q.addEventListener("keydown",W=>{(W.key==="Enter"||W.key===" ")&&(W.preventDefault(),ne())})}let V=document.getElementById("logoutButton");V&&V.addEventListener("click",async()=>{try{let ne=await _("/logout",{method:"POST"});ne.redirected&&(window.location.href=ne.url),showToast(ServerI18n.t("logoutSuccess"))}catch(ne){console.error("Logout Failed:",ne),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(ne=>{ne.name&&ne.addEventListener("change",async function(){let W=this.name,Z=this.checked;await m(W,Z)})}),document.querySelectorAll("details[id^='sec-']").forEach(ne=>{ne.addEventListener("toggle",()=>{let W=B();W[ne.id]=ne.open,O(W)})}),document.querySelectorAll(".setting-input").forEach(ne=>{ne.addEventListener("change",async function(){let W=this.dataset.key,Z=parseInt(this.dataset.index),te=this.value;this.type==="number"&&(te=parseInt(te)),await d(W,te,Z,this)})})}function $(){if(g.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}I()}else w()}async function j(){await c(),$(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function K(){window.AdminThemes&&window.AdminThemes.init()}function Y(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{E&&(E.disconnect(),E=null)}),j()})});var nt=me(()=>{(function(){"use strict";var y=null;async function b(){var v=(document.getElementById("pollQuestion")?.value||"").trim(),R=document.querySelectorAll(".poll-option-input"),L=Array.from(R).map(function(P){return P.value.trim()}).filter(Boolean);if(!v){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(L.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var E=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:v,options:L})}),x=await E.json();if(!E.ok){window.showToast(x.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),S(x),_()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function g(){try{var v=await window.csrfFetch("/admin/poll/end",{method:"POST"}),R=await v.json();if(!v.ok){window.showToast(R.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),S(R),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function h(){try{var v=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),R=await v.json();if(!v.ok){window.showToast(R.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),S(R),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function _(){y&&(clearInterval(y),y=null);var v=async function(){try{var R=await fetch("/admin/poll/status",{credentials:"same-origin"});if(R.ok){var L=await R.json();S(L),L.state!=="active"&&y&&(clearInterval(y),y=null)}}catch{}};v(),y=setInterval(v,2e3)}function G(){var v=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var R=document.querySelector('#sec-polls [data-poll-action="add"]');R&&R.click()},extra:`
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
      </div>`});return v.dataset.emptyKind="poll",v}function S(v){var R=document.getElementById("pollStatusDisplay");if(R){if(R.textContent="",!v||v.state==="idle"){R.appendChild(G());return}var L=v.total_votes||0,E=Math.max(1,...v.options.map(function(B){return B.count})),x=document.createElement("div");x.className="admin-poll-status-card";var P=document.createElement("div");P.className="admin-poll-status-header";var N=document.createElement("span");N.className="admin-poll-status-dot"+(v.state==="active"?" is-active":" is-ended"),P.appendChild(N);var T=document.createElement("span");T.className="admin-poll-status-question",T.textContent=v.question||"",P.appendChild(T);var C=document.createElement("span");C.className="admin-poll-status-state",C.textContent=v.state,P.appendChild(C),x.appendChild(P),v.options.forEach(function(B){var O=document.createElement("div");O.className="admin-poll-status-row";var f=document.createElement("div");f.className="admin-poll-status-label";var c=document.createElement("span"),i=document.createElement("b");i.textContent=B.key+".",c.appendChild(i),c.appendChild(document.createTextNode(" "+B.text));var a=document.createElement("span");a.textContent=B.count+" ("+B.percentage+"%)",f.appendChild(c),f.appendChild(a);var r=document.createElement("div");r.className="admin-poll-status-bar";var s=document.createElement("div");s.className="admin-poll-status-bar-fill",s.style.width=B.count/E*100+"%",r.appendChild(s),O.appendChild(f),O.appendChild(r),x.appendChild(O)});var U=document.createElement("div");U.className="admin-poll-status-footer",U.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",L),x.appendChild(U),R.appendChild(x)}}function A(){var v=document.getElementById("sec-polls");if(v&&v.dataset.pollLegacyBound!=="1"){v.dataset.pollLegacyBound="1";var R=document.getElementById("pollCreateBtn");R&&R.addEventListener("click",b);var L=document.getElementById("pollEndBtn");L&&L.addEventListener("click",g);var E=document.getElementById("pollResetBtn");E&&E.addEventListener("click",h);var x=document.getElementById("pollAddOptionBtn");x&&x.addEventListener("click",function(){var T=document.getElementById("pollOptionsContainer");if(T){var C=T.querySelectorAll(".poll-option-input").length;if(C>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var U=document.createElement("input");U.type="text",U.className="poll-option-input admin-ui-input",U.placeholder=String.fromCharCode(65+C)+". Option "+(C+1),U.maxLength=100,T.appendChild(U)}});var P=document.getElementById("pollRemoveOptionBtn");P&&P.addEventListener("click",function(){var T=document.getElementById("pollOptionsContainer");if(T){var C=T.querySelectorAll(".poll-option-input");if(C.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}C[C.length-1].remove()}});var N=v;N&&(N.addEventListener("toggle",function(){N.open&&_()}),_()),window.addEventListener("beforeunload",function(){y&&(clearInterval(y),y=null)})}}document.addEventListener("admin-panel-rendered",function(){A()}),document.addEventListener("DOMContentLoaded",function(){A()}),window.addEventListener("hashchange",function(){var v=window.location.hash||"";v.indexOf("/polls")!==-1&&A()})})()});var at=me(()=>{(function(){"use strict";async function y(){try{let _=await fetch("/admin/blacklist/get",{method:"GET",credentials:"same-origin"});if(!_.ok){let R=await _.json();showToast(ServerI18n.t("errorFetchingBlacklist").replace("{error}",R.error||_.statusText),!1);return}let G=await _.json(),S=document.getElementById("blacklistKeywords");S.innerHTML="";let A=document.getElementById("modBlacklistCount");A&&(A.textContent=`${G.length} words`);let v=document.querySelector('[data-mod-stat="banned"]');v&&(v.textContent=G.length),G.length===0?S.innerHTML=`<div style="padding:12px 0;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${ServerI18n.t("noKeywordsYet")}</div>`:G.forEach(R=>{let L=document.createElement("div");L.className="hud-banned-row";let E=document.createElement("span");E.style.cssText="color: var(--color-ink-error);font-family:var(--font-mono);font-size:13px",E.textContent="\u2298";let x=document.createElement("span");x.style.cssText="flex:1;min-width:0;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all",x.textContent=R;let P=document.createElement("button");P.className="removeKeywordBtn",P.type="button",P.style.cssText="background:transparent;border:none;color: var(--color-ink-accent);font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;cursor:pointer;padding:2px 4px",P.textContent="UNBAN",P.setAttribute("data-keyword",R),L.appendChild(E),L.appendChild(x),L.appendChild(P),S.appendChild(L)})}catch(_){console.error("Fetch blacklist error:",_),showToast(ServerI18n.t("fetchBlacklistError"),!1)}}async function b(){let _=document.getElementById("newKeywordInput"),G=_.value.trim();if(!G){showToast(ServerI18n.t("keywordEmpty"),!1);return}try{let S=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:G})}),A=await S.json();S.ok?(_.value="",y(),window.AdminQuickAction?window.AdminQuickAction.fire({label:A.message||ServerI18n.t("histToastBlacklisted",{keyword:G}),undo:{label:ServerI18n.t("histUndo"),run:async()=>{if(!(await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:G})})).ok)throw new Error("remove failed");y()}}}):showToast(A.message||"Keyword added.",!0)):showToast(A.error||"Failed to add keyword.",!1)}catch(S){console.error("Add keyword error:",S),showToast(ServerI18n.t("addKeywordError"),!1)}}async function g(_){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("histRemoveKwTitle"),subtitle:ServerI18n.t("cfmSubRemoveKeyword"),severity:"warn",bodyText:ServerI18n.t("confirmRemoveKeyword").replace("{keyword}",_),confirmLabel:ServerI18n.t("histRemoveKwConfirm")}))try{let S=await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:_})}),A=await S.json();S.ok?(showToast(A.message||"Keyword removed.",!0),y()):showToast(A.error||"Failed to remove keyword.",!1)}catch(S){console.error("Remove keyword error:",S),showToast(ServerI18n.t("removeKeywordError"),!1)}}function h(){let _=document.getElementById("addKeywordBtn");_&&_.addEventListener("click",b);let G=document.getElementById("newKeywordInput");G&&G.addEventListener("keypress",function(A){(A.key==="Enter"||A.keyCode===13)&&(A.preventDefault(),b())});let S=document.getElementById("blacklistKeywords");S&&S.addEventListener("click",function(A){let v=A.target.closest(".removeKeywordBtn");if(v){let R=v.dataset.keyword;R&&g(R)}})}document.addEventListener("admin-panel-rendered",function(){y(),h()}),window.AdminHistory={fetchBlacklist:y}})()});var st=me(()=>{(function(){"use strict";var y="sec-timeline-export",b="danmu.adminHistoryExports.v1",g=10,h={rawText:!0,polls:!0,masked:!1,metadata:!0},_=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],G=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],S={range:"24h",filters:Object.assign({},h),format:"JSON"};function A(){return document.getElementById(y)}function v(){try{return JSON.parse(localStorage.getItem(b)||"[]")}catch{return[]}}function R(p){try{localStorage.setItem(b,JSON.stringify(p.slice(0,g)))}catch{}}function L(p){var k=v();k.unshift(p),R(k)}function E(p){return p?p<1024?p+" B":p<1024*1024?(p/1024).toFixed(1)+" KB":(p/1024/1024).toFixed(1)+" MB":"0 B"}function x(p){try{var k=new Date(p),w=new Date,I=k.toDateString()===w.toDateString();if(I)return ServerI18n.t("historyV2TodayAt",{time:String(k.getHours()).padStart(2,"0")+":"+String(k.getMinutes()).padStart(2,"0")});var F=new Date(w);return F.setDate(w.getDate()-1),k.toDateString()===F.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(k.getHours()).padStart(2,"0")+":"+String(k.getMinutes()).padStart(2,"0")}):k.getMonth()+1+"-"+String(k.getDate()).padStart(2,"0")+" "+String(k.getHours()).padStart(2,"0")+":"+String(k.getMinutes()).padStart(2,"0")}catch{return p||""}}function P(p){if(p==="1h")return 1;if(p==="24h")return 24;if(p==="7d")return 168;if(p==="today"){var k=new Date,w=new Date(k.getFullYear(),k.getMonth(),k.getDate());return Math.max(1,Math.ceil((k-w)/36e5))}return p==="yest"?48:p==="live"?6:24}function N(p){return p.filter(function(k){return!(!S.filters.rawText&&!k.is_poll&&!k.muted&&!k.banned||!S.filters.polls&&k.is_poll||!S.filters.masked&&(k.muted||k.banned))}).map(function(k){if(!S.filters.metadata){var w=Object.assign({},k);return delete w.clientIp,delete w.fingerprint,w}return k})}function T(p){var k=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],w=function(H){var D=H==null?"":String(H);return D.indexOf(",")>=0||D.indexOf('"')>=0||D.indexOf(`
`)>=0?'"'+D.replace(/"/g,'""')+'"':D},I=function(H){return H.status?H.status:H.banned?"banned":H.muted?"muted":H.is_poll?"poll":"ok"},F=p.map(function(H){return[H.timestamp||"",H.nickname||"",H.text||"",H.color?"#"+H.color:"",H.size!=null?H.size:"",H.speed!=null?H.speed:"",H.opacity!=null?H.opacity:"",H.isImage?"true":"false",H.fontInfo&&H.fontInfo.name||"",H.clientIp||"",H.fingerprint||"",I(H),H.delivery_reason||""].map(w).join(",")});return[k.join(","),F.join(`\r
`)].filter(Boolean).join(`\r
`)}function C(p){return p.map(function(k,w){var I=new Date(k.timestamp||Date.now()),F=U(I),H=U(new Date(I.getTime()+3e3)),D=(k.nickname?"["+k.nickname+"] ":"")+(k.text||"");return w+1+`
`+F+" --> "+H+`
`+D+`
`}).join(`
`)}function U(p){var k=function(w,I){return String(w).padStart(I||2,"0")};return k(p.getHours())+":"+k(p.getMinutes())+":"+k(p.getSeconds())+","+k(p.getMilliseconds(),3)}function B(p,k){var w=URL.createObjectURL(p),I=document.createElement("a");I.href=w,I.download=k,I.click(),URL.revokeObjectURL(w)}function O(){var p=P(S.range),k=document.getElementById("histv2-go");k&&(k.disabled=!0,k.dataset.busy="1"),fetch("/admin/history?hours="+p+"&limit=10000",{credentials:"same-origin"}).then(function(w){if(!w.ok)throw new Error("http "+w.status);return w.json()}).then(function(w){var I=w&&w.records||[],F=N(I);if(F.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var H=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),D,$;if(S.format==="JSON"){var j=JSON.stringify(F,null,2);$=new Blob([j],{type:"application/json"}),D="danmu-history-"+H+".json"}else S.format==="CSV"?($=new Blob(["\uFEFF"+T(F)],{type:"text/csv;charset=utf-8;"}),D="danmu-history-"+H+".csv"):($=new Blob([C(F)],{type:"application/x-subrip;charset=utf-8;"}),D="danmu-history-"+H+".srt");B($,D),L({name:D,fmt:S.format,size:$.size,when:new Date().toISOString(),count:F.length}),c(),f(F.length,$.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:F.length}),!0)}).catch(function(w){console.error("[history-v2] export failed",w),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:w.message||w}),!1)}).finally(function(){k&&(k.disabled=!1,delete k.dataset.busy)})}function f(p,k){var w=document.getElementById("histv2-estimate");w&&(w.textContent=ServerI18n.t("historyV2Estimate",{count:p||"\u2014",size:k?E(k):"\u2014 MB"}))}function c(){var p=document.getElementById("histv2-recent-list");if(p){var k=v();if(k.length===0){p.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}p.innerHTML=k.map(function(w){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+w.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+i(w.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+i(x(w.when))+" \xB7 "+E(w.size)+"</div></div></div>"}).join("")}}function i(p){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(p):p==null?"":String(p).replace(/[&<>"']/g,function(k){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[k]})}function a(){return _.map(function(p){var k=S.range===p.k;return'<button type="button" class="histv2-chip'+(k?" is-active":"")+'" data-histv2-range="'+p.k+'">'+i(ServerI18n.t(p.labelKey))+(p.k==="live"?" \xB7 "+r():"")+"</button>"}).join("")}function r(){var p=new Date;return String(p.getHours()).padStart(2,"0")+":"+String(p.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function s(){var p=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return p.map(function(k){var w=!!S.filters[k.k];return'<button type="button" class="histv2-toggle'+(w?" is-on":"")+'" data-histv2-toggle="'+k.k+'"><span class="histv2-toggle-mark">'+(w?"\u2713":"\u25CB")+"</span><span>"+i(ServerI18n.t(k.labelKey))+"</span></button>"}).join("")}function l(){return G.map(function(p){var k=S.format===p.k;return'<button type="button" class="histv2-fmt'+(k?" is-selected":"")+'" data-histv2-fmt="'+p.k+'">'+(k?'<span class="histv2-fmt-check">\u2713</span>':"")+(p.badge?'<span class="histv2-fmt-badge">'+i(p.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+p.k+'</div><div class="histv2-fmt-desc">'+i(p.desc)+"</div></button>"}).join("")}function o(){var p=A();p&&(p.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+a()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+s()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+l()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",p.addEventListener("click",t),c(),n())}function t(p){var k=p.target.closest("[data-histv2-range]");if(k){S.range=k.dataset.histv2Range,d(),n();return}var w=p.target.closest("[data-histv2-toggle]");if(w){var I=w.dataset.histv2Toggle;S.filters[I]=!S.filters[I],m(),n();return}var F=p.target.closest("[data-histv2-fmt]");if(F){S.format=F.dataset.histv2Fmt,e(),n();return}var H=p.target.closest("#histv2-go");if(H&&!H.dataset.busy){O();return}}function d(){var p=document.getElementById("histv2-chips");p&&(p.innerHTML=a())}function m(){var p=document.getElementById("histv2-toggles");p&&(p.innerHTML=s())}function e(){var p=document.getElementById("histv2-formats");p&&(p.innerHTML=l())}function n(){n._t&&clearTimeout(n._t),n._t=setTimeout(function(){var p=P(S.range);fetch("/admin/history?hours="+p+"&limit=10000",{credentials:"same-origin"}).then(function(k){return k.ok?k.json():null}).then(function(k){if(!k)return f(0,0);var w=N(k&&k.records||[]),I=S.format==="JSON"?220:S.format==="CSV"?110:80;f(w.length,w.length*I)}).catch(function(){f(0,0)})},250)}function u(){var p=A(),k=document.getElementById("admin-backup-v2-page");if(!p){var w=document.getElementById("settings-grid");if(!w)return;p=document.createElement("div"),p.id=y,p.className="admin-ui-card lg:col-span-2 history-v2-section",w.appendChild(p),o()}k&&k.parentElement&&p.previousElementSibling!==k&&k.parentElement.insertBefore(p,k.nextSibling)}document.addEventListener("admin-panel-rendered",u),document.addEventListener("admin-route-applied",u),window.AdminHistoryV2={refresh:n,state:S}})()});var it=me(()=>{(function(){"use strict";let y="admin-replay-bar";function b(){let h=document.getElementById(y);return h||(document.body?(h=document.createElement("div"),h.id=y,h.className="admin-replay-bar",h.hidden=!0,h.setAttribute("role","status"),h.setAttribute("aria-live","polite"),h.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(h,document.body.firstChild),h):null)}function g(h){let _=b();_&&(_.hidden=!h)}window.AdminReplayBar={ensure:b,setActive:g},document.addEventListener("admin-panel-rendered",b)})()});var ot=me(()=>{(function(){"use strict";let y=null;function b(x){window.AdminReplayBar&&window.AdminReplayBar.ensure();let P=document.getElementById("replayPauseBtn"),N=document.getElementById("replayResumeBtn"),T=document.getElementById("replayStopBtn"),C=document.getElementById("replayProgress"),U=(f,c)=>{f&&f.classList.toggle("hidden",!c)},B=x==="playing",O=x==="paused";U(P,B),U(N,O),U(T,B||O),U(C,B||O),!B&&!O&&C&&(C.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(B||O)}function g(){y&&clearInterval(y),y=setInterval(async()=>{try{let x=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!x.ok)return;let P=await x.json(),N=document.getElementById("replayProgress");N&&(N.textContent=ServerI18n.t("replayingProgress").replace("{sent}",P.sent).replace("{total}",P.total)),b(P.state),P.state==="stopped"&&(clearInterval(y),y=null)}catch{}},500)}async function h(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),b("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function _(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),b("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function G(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),b("stopped"),y&&(clearInterval(y),y=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let S=null,A=null,v=0,R=null;function L(){[["replayPauseBtn",h],["replayResumeBtn",_],["replayStopBtn",G]].forEach(function([P,N]){let T=document.getElementById(P);T&&!T.dataset.replayCtrlsBound&&(T.addEventListener("click",N),T.dataset.replayCtrlsBound="1")})}async function E(){try{let x=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!x.ok)return;let P=await x.json();(P.state==="playing"||P.state==="paused")&&(b(P.state),g())}catch{}}window.AdminReplayControls={notifyStarted:function(){b("playing"),g()}},document.addEventListener("admin-panel-rendered",function(){L(),E()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(L,800)})})()});var rt=me(()=>{(function(){"use strict";let y="sec-ratelimit",b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(S){return String(S).replace(/[&<>"']/g,function(A){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[A]})},g=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function h(){return`
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
          ${g.map(S=>`
            <div class="admin-ratelimit-row" data-rl-key="${S.key}">
              <div class="admin-ratelimit-row-head">
                <span class="admin-ratelimit-row-label">${b(ServerI18n.t(S.labelKey))}</span>
                <span class="admin-ratelimit-row-env">${S.envLimit}</span>
              </div>
              <div class="admin-ratelimit-row-body">
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLimit")}</span>
                  <input type="number" min="1" max="1000" value="${S.defLimit}" data-rl-limit="${S.key}" />
                </label>
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldWindow")}</span>
                  <select data-rl-window="${S.key}">
                    <option value="10"${S.defWindow===10?" selected":""}>10s</option>
                    <option value="30"${S.defWindow===30?" selected":""}>30s</option>
                    <option value="60"${S.defWindow===60?" selected":""}>60s</option>
                    <option value="300"${S.defWindow===300?" selected":""}>5 min</option>
                    <option value="3600"${S.defWindow===3600?" selected":""}>1 hr</option>
                  </select>
                </label>
                ${S.key==="login"?`
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLockout")}</span>
                  <input type="number" min="60" max="86400" value="${S.defLockout}" data-rl-lockout="${S.key}" title="${ServerI18n.t("ratelimitLockoutFieldTitle")}" />
                </label>`:""}
                <div class="admin-ratelimit-field admin-ratelimit-bar-field">
                  <span>${ServerI18n.t("ratelimitFieldCurrentUsage")}</span>
                  <div class="admin-ratelimit-bar">
                    <div class="admin-ratelimit-bar-fill" data-rl-bar="${S.key}" style="width:18%"></div>
                  </div>
                  <span class="admin-ratelimit-bar-text" data-rl-current="${S.key}">\u2014</span>
                </div>
                <div class="admin-ratelimit-field admin-ratelimit-save-field">
                  <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save" data-rl-save="${S.key}" title="${ServerI18n.t("ratelimitApplyBtnTitle")}">${ServerI18n.t("ratelimitApplyBtn")}</button>
                </div>
              </div>
              <div class="admin-ratelimit-row-foot">
                <svg class="admin-ratelimit-sparkline" data-rl-spark="${S.key}" viewBox="0 0 96 24" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points="" fill="none" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <span class="admin-ratelimit-effective" data-rl-effective="${S.key}">
                  effective_rate = ${S.defLimit} / ${S.defWindow}s = ${(S.defLimit/S.defWindow).toFixed(2)} req/s \xB7 burst = ${Math.round(S.defLimit*1.5)}${S.key==="login"?" \xB7 lock = "+S.defLockout+"s":""}
                </span>
              </div>
              <div class="admin-ratelimit-suggest" data-rl-suggest="${S.key}" hidden>
                <span class="admin-ratelimit-suggest-icon" aria-hidden="true">\u25B2</span>
                <span class="admin-ratelimit-suggest-body">
                  <span class="admin-ratelimit-suggest-title">${ServerI18n.t("ratelimitSuggestTitle")}</span>
                  <span class="admin-ratelimit-suggest-detail" data-rl-suggest-detail>\u2014</span>
                </span>
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest" data-rl-apply="${S.key}">${ServerI18n.t("ratelimitApplySuggestBtn")}</button>
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
      </div>`}function _(S){let A=S.querySelector("#rlEnvExport");setTimeout(async()=>{try{let c=window.AdminBootstrap;c&&typeof c.primeBootstrap=="function"&&await c.primeBootstrap();let i=c&&c.bootstrapSection?c.bootstrapSection("history_stats"):null,a=c&&c.bootstrapSection?c.bootstrapSection("blacklist"):null,r=c&&c.bootstrapSection?c.bootstrapSection("metrics"):null,s=[];s.push(i?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),s.push(a?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),s.push(r?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[l,o,t]=await Promise.all(s),d=i||(l&&l.ok?await l.json():null);if(d){let k=d.stats&&d.stats.last_24h||0,w=d.stats&&d.stats.total||0,I=S.querySelector("[data-rl-sum-hits]"),F=S.querySelector("[data-rl-sum-hits-delta]");I&&(I.textContent=k.toLocaleString()),F&&(F.textContent=ServerI18n.t("ratelimitSumTotal",{n:w.toLocaleString()}))}let m=a||(o&&o.ok?await o.json():null);if(m){let k=Array.isArray(m)?m:m.entries||m.keywords||[],w=S.querySelector("[data-rl-sum-black]");w&&(w.textContent=k.length?ServerI18n.t("ratelimitCountUnit",{n:k.length}):"0")}let e=S.querySelector("[data-rl-sum-viol]"),n=S.querySelector("[data-rl-sum-viol-rate]"),u=S.querySelector("[data-rl-sum-locked]"),p=r||(t&&t.ok?await t.json():null);if(p){let k=p&&p.rate_limits;if(k&&k.totals){let w=k.totals.hits||0,I=k.totals.violations||0,F=k.totals.locked_sources||0;if(e&&(e.textContent=I.toLocaleString()),n){let H=w+I;n.textContent=H>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(I/H*100).toFixed(1)}):"\u2014"}u&&(u.textContent=ServerI18n.t("ratelimitLockedSources",{n:F.toLocaleString()})),g.forEach(({key:H})=>{let D=k[H],$=S.querySelector(`[data-rl-current="${H}"]`);if($&&D){let j=(D.hits||0).toLocaleString(),K=(D.violations||0).toLocaleString();$.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:j,viol:K})}}),R(k)}else e&&(e.textContent="\u2014"),n&&(n.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014")}else e&&(e.textContent="\u2014"),n&&(n.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014");v(p&&p.recent_violations)}catch{}},4500);function v(c){let i=S.querySelector("[data-rl-vbody]"),a=S.querySelector("[data-rl-vcount]");if(!i)return;let r=Array.isArray(c)?c:[];if(a&&(a.textContent=ServerI18n.t("ratelimitViolationsCount",{n:r.length})),r.length===0){i.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let s=o=>{let t=new Date(o*1e3),d=m=>String(m).padStart(2,"0");return`${d(t.getHours())}:${d(t.getMinutes())}:${d(t.getSeconds())}`},l=o=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[o]||"var(--color-text-muted)";i.innerHTML=r.slice(0,30).map(o=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${s(o.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${l(o.scope)}">${(o.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${b(o.ip||"")}</span>
        </div>
      `).join("")}function R(c){c&&g.forEach(({key:i})=>{let a=c[i],r=S.querySelector(`[data-rl-suggest="${i}"]`);if(!r)return;let s=a&&a.suggestion;if(!s){r.hidden=!0;return}let l=r.querySelector("[data-rl-suggest-detail]");l&&(l.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(s.p95_per_second||0).toFixed(2),limit:a.limit||"\u2014",window:a.window||"\u2014",suggLimit:s.suggested_limit,suggWindow:s.suggested_window}));let o=r.querySelector("[data-rl-apply]");o&&(o.dataset.rlSuggestLimit=String(s.suggested_limit),o.dataset.rlSuggestWindow=String(s.suggested_window)),r.hidden=!1})}async function L(){try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let i=await c.json(),a=i&&i.rate_limits;if(!a)return;g.forEach(({key:r})=>{let s=a[r],l=S.querySelector(`[data-rl-current="${r}"]`);if(l&&s){let o=(s.hits||0).toLocaleString(),t=(s.violations||0).toLocaleString();l.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:o,viol:t})}}),R(a)}catch{}}S.addEventListener("click",async c=>{let i=c.target.closest("[data-rl-action]");if(!i)return;let a=i.dataset.rlAction;if(a==="save"){let r=i.dataset.rlSave,s=S.querySelector(`[data-rl-limit="${r}"]`),l=S.querySelector(`[data-rl-window="${r}"]`);if(!s||!l)return;let o=parseInt(s.value,10),t=parseInt(l.value,10);if(!Number.isFinite(o)||!Number.isFinite(t)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let d=i.textContent;i.disabled=!0,i.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let m=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:r,limit:o,window:t})});if(m.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:r.toUpperCase(),limit:o,window:t}),!0),L();else{let e=await m.json().catch(()=>({})),n=e&&e.error||`HTTP ${m.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:n}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{i.disabled=!1,i.textContent=d}return}if(a==="apply-suggest"){let r=i.dataset.rlApply,s=parseInt(i.dataset.rlSuggestLimit,10),l=parseInt(i.dataset.rlSuggestWindow,10);if(!r||!Number.isFinite(s)||!Number.isFinite(l))return;let o=i.textContent;i.disabled=!0,i.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let t=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:r,limit:s,window:l})});if(t.ok){let d=S.querySelector(`[data-rl-limit="${r}"]`),m=S.querySelector(`[data-rl-window="${r}"]`);d&&(d.value=s),m&&(m.value=l),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:r.toUpperCase(),limit:s,window:l}),!0),L(),E()}else{let d=await t.json().catch(()=>({})),m=d&&d.error||`HTTP ${t.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:m}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{i.disabled=!1,i.textContent=o}return}if(a==="export"){let r=[];S.querySelectorAll("[data-rl-limit]").forEach(s=>{let l=s.dataset.rlLimit.toUpperCase();r.push(`${l}_RATE_LIMIT=${s.value}`)}),S.querySelectorAll("[data-rl-window]").forEach(s=>{let l=s.dataset.rlWindow.toUpperCase();r.push(`${l}_RATE_WINDOW=${s.value}`)}),A.textContent=r.join(`
`),A.hidden=!1;try{navigator.clipboard?.writeText(r.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else a==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([s,[l,o]])=>{let t=S.querySelector(`[data-rl-limit="${s}"]`),d=S.querySelector(`[data-rl-window="${s}"]`);t&&(t.value=l),d&&(d.value=o)}),A.hidden=!0,E())});function E(){g.forEach(({key:c})=>{let i=S.querySelector(`[data-rl-limit="${c}"]`),a=S.querySelector(`[data-rl-window="${c}"]`),r=S.querySelector(`[data-rl-lockout="${c}"]`),s=S.querySelector(`[data-rl-effective="${c}"]`);if(!i||!a||!s)return;let l=parseInt(i.value,10)||0,o=parseInt(a.value,10)||1,t=(l/o).toFixed(2),d=Math.round(l*1.5),m=`effective_rate = ${l} / ${o}s = ${t} req/s \xB7 burst = ${d}`;if(c==="login"&&r){let e=parseInt(r.value,10)||0;m+=` \xB7 lock = ${e}s`}s.textContent=m})}S.addEventListener("input",c=>{let i=c.target;!i||!i.dataset.rlLimit&&!i.dataset.rlLockout||E()}),S.addEventListener("change",c=>{let i=c.target;!i||!i.dataset.rlWindow||E()}),E();function x(c,i){if(!c||!Array.isArray(i))return;let a=96,r=24,s=i.length?i:new Array(24).fill(0),l=Math.max(1,...s),o=a/Math.max(1,s.length-1),t=s.map((m,e)=>`${(e*o).toFixed(1)},${(r-2-m/l*(r-4)).toFixed(1)}`).join(" "),d=c.querySelector("polyline");d&&d.setAttribute("points",t)}g.forEach(({key:c})=>{let i=S.querySelector(`[data-rl-spark="${c}"]`);i&&x(i,new Array(24).fill(0))});let P=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,N={allowlist:[],denylist:[]},T={input:S.querySelector("[data-rl-ip-input]"),select:S.querySelector("[data-rl-ip-select]"),addBtn:S.querySelector("[data-rl-ip-add]"),summary:S.querySelector("[data-rl-ip-summary]"),error:S.querySelector("[data-rl-ip-error]"),allowCount:S.querySelector("[data-rl-ip-allow-count]"),denyCount:S.querySelector("[data-rl-ip-deny-count]"),allowBody:S.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:S.querySelector('[data-rl-ip-body="denylist"]')};function C(c){if(T.error){if(!c){T.error.hidden=!0,T.error.textContent="";return}T.error.hidden=!1,T.error.textContent=c}}function U(c){let i=c==="allowlist"?T.allowBody:T.denyBody,a=c==="allowlist"?T.allowCount:T.denyCount;if(!i||!a)return;let r=Array.isArray(N[c])?N[c]:[];if(a.textContent=String(r.length),r.length===0){let s=ServerI18n.t(c==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");i.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:s})}</div>`;return}i.innerHTML=r.map(s=>{let l=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:b(s)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${b(s)}">
          <span class="admin-ratelimit-ip-chip-cidr">${b(s)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${b(s)}" data-rl-ip-remove-kind="${c}" title="${l}" aria-label="${l}">\xD7</button>
        </div>
      `}).join("")}function B(){if(U("allowlist"),U("denylist"),T.summary){let c=(N.allowlist||[]).length,i=(N.denylist||[]).length;T.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:c,deny:i})}}async function O(){try{let c=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!c.ok){T.summary&&(T.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:c.status}));return}let i=await c.json();i&&typeof i=="object"&&(N={allowlist:Array.isArray(i.allowlist)?i.allowlist:[],denylist:Array.isArray(i.denylist)?i.denylist:[]},B())}catch{T.summary&&(T.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function f(c,{toastLabel:i}={}){try{let a=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(a.ok){let l=await a.json();return N={allowlist:Array.isArray(l.allowlist)?l.allowlist:[],denylist:Array.isArray(l.denylist)?l.denylist:[]},B(),C(""),i&&typeof showToast=="function"&&showToast(i,!0),!0}let r=await a.json().catch(()=>({})),s=r&&r.error||`HTTP ${a.status}`;return C(s),!1}catch{return C(ServerI18n.t("ratelimitNetworkError")),!1}}T.addBtn&&T.addBtn.addEventListener("click",async()=>{if(!T.input||!T.select)return;let c=(T.input.value||"").trim();if(!c){C(ServerI18n.t("ratelimitIpRequiredError"));return}if(!P.test(c)){C(ServerI18n.t("ratelimitIpFormatError"));return}let i=T.select.value==="denylist"?"denylist":"allowlist",a=Array.from(new Set([...N[i]||[],c]));await f({[i]:a},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(i==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:c})})&&(T.input.value="")}),T.input&&(T.input.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),T.addBtn&&T.addBtn.click())}),T.input.addEventListener("input",()=>{T.error&&!T.error.hidden&&C("")})),S.addEventListener("click",async c=>{let i=c.target.closest("[data-rl-ip-remove]");if(!i)return;let a=i.dataset.rlIpRemove,r=i.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",s=(N[r]||[]).filter(l=>l!==a);await f({[r]:s},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(r==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:a})})}),O(),setTimeout(async()=>{try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let i=await c.json(),a=i&&i.rate_limits;if(!a)return;g.forEach(({key:r})=>{let s=a[r]&&(a[r].bucket_history||a[r].history);if(Array.isArray(s)&&s.length){let l=S.querySelector(`[data-rl-spark="${r}"]`);l&&x(l,s.slice(-24))}})}catch{}},5500)}function G(){let S=document.getElementById("settings-grid");if(!S||document.getElementById(y))return;S.insertAdjacentHTML("beforeend",h());let A=document.getElementById(y);A&&_(A)}document.addEventListener("admin-panel-rendered",G),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&G()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),G()})})()});var dt=me(()=>{(function(){"use strict";let y="sec-viewer-theme",b="danmu.viewerTheme.v1",g=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function h(){return`
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
      </div>`}let _=/^#[0-9a-f]{6}$/i,G=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function S(L){return String(L??"").replace(/[&<>"']/g,E=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[E])}function A(L){let E={};return!L||typeof L!="object"||(["bg","primary","hero"].forEach(x=>{typeof L[x]=="string"&&_.test(L[x])&&(E[x]=L[x])}),(L.mode==="dark"||L.mode==="light")&&(E.mode=L.mode),typeof L.font=="string"&&/^[\w .-]{1,64}$/.test(L.font)&&(E.font=L.font),(L.logo===null||typeof L.logo=="string"&&G.test(L.logo))&&(E.logo=L.logo)),E}function v(L){let E={...g[0],logo:null};try{let e=localStorage.getItem(b);e&&(E={...E,...A(JSON.parse(e))})}catch{}let x="default";function P(){try{localStorage.setItem(b,JSON.stringify(E))}catch{}}function N(e){let n=/^#?([0-9a-f]{6})$/i.exec(e);if(!n)return[0,0,0];let u=parseInt(n[1],16);return[u>>16&255,u>>8&255,u&255]}function T([e,n,u]){let p=[e,n,u].map(k=>(k/=255,k<=.03928?k/12.92:Math.pow((k+.055)/1.055,2.4)));return .2126*p[0]+.7152*p[1]+.0722*p[2]}function C(e,n){let u=T(N(e)),p=T(N(n)),[k,w]=u>p?[u,p]:[p,u];return(k+.05)/(w+.05)}function U(e){return e>=7?{label:"AAA",cls:"is-good"}:e>=4.5?{label:"AA",cls:"is-ok"}:e>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function B(){let e=L.querySelector("[data-vt-presets]");e.innerHTML="",g.forEach(n=>{let u=document.createElement("button");u.type="button",u.className="admin-vt-preset"+(x===n.id?" is-active":""),u.innerHTML=`
          <div class="swatch" style="background:${n.bg}">
            <span style="background:${n.primary}"></span>
            <span style="background:${n.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(n.nameKey)}</div>
          <div class="mode">${ServerI18n.t(n.mode==="dark"?"lbDark":"lbLight")}</div>
        `,u.addEventListener("click",()=>{E={...E,...n},x=n.id,P(),m()}),e.appendChild(u)})}function O(){L.querySelectorAll("[data-vt-mode-btn]").forEach(e=>{e.classList.toggle("is-active",E.mode===e.dataset.vtModeBtn)})}function f(){let e=L.querySelector("[data-vt-colors]"),n=E.mode==="dark"?"#F8FAFC":"#0F172A",u=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:n,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:E.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:E.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];e.innerHTML=u.map(p=>{let k=C(E[p.key],p.vs),w=U(k),I=S(E[p.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${I}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${p.label}</span>
                <span class="grade ${w.cls}">${w.label} \xB7 ${k.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${I}" data-vt-color="${p.key}" />
                <input type="text" value="${I}" data-vt-hex="${p.key}" spellcheck="false" />
                <span class="vs">vs ${p.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function c(){let e=L.querySelector("[data-vt-logo-preview]"),n=L.querySelector(".hint-empty"),u=L.querySelector("[data-vt-logo-actions]");E.logo?(e.src=E.logo,e.hidden=!1,n.style.display="none",u.hidden=!1):(e.hidden=!0,n.style.display="",u.hidden=!0)}function i(){let e=L.querySelector("[data-vt-font]");e.value=E.font;let n=L.querySelector("[data-vt-font-specimen]");n.style.fontFamily=E.font}function a(){let e=E.mode==="dark"?"#F8FAFC":"#0F172A",n=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:C(e,E.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:C(E.primary,E.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:C(E.hero,E.bg)}];L.querySelector("[data-vt-contrast]").innerHTML=n.map(u=>{let p=U(u.ratio);return`<span class="vt-contrast-chip ${p.cls}">${u.lbl} \xB7 ${p.label} ${u.ratio.toFixed(1)}</span>`}).join("")}function r(){let e=L.querySelector("[data-vt-stage]"),n=E.mode==="dark"?"#F8FAFC":"#0F172A";e.style.setProperty("--vt-bg",E.bg),e.style.setProperty("--vt-primary",E.primary),e.style.setProperty("--vt-hero",E.hero),e.style.setProperty("--vt-fg",n),e.style.fontFamily=E.font;let u=L.querySelector("[data-vt-preview-logo]");if(E.logo){let p=document.createElement("img");p.src=E.logo,p.style.maxHeight="40px",u.replaceChildren(p)}else u.textContent="Danmu Fire"}let s="auto",l="auto";function o(){L.querySelectorAll("[data-vt-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.vtThemeBtn===s)}),L.querySelectorAll("[data-vt-lang-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.vtLangBtn===l)})}async function t(){try{let e=await fetch("/get_settings",{credentials:"same-origin"});if(!e.ok)return;let n=await e.json(),u=n&&n.ViewerThemeMode&&n.ViewerThemeMode[1],p=n&&n.ViewerLangMode&&n.ViewerLangMode[1];typeof u=="string"&&(s=u),typeof p=="string"&&(l=p),o()}catch{}}async function d(e,n){if(window.csrfFetch)try{let u=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:e,value:n,index:1})});if(!u.ok)throw new Error(u.status);window.showToast&&window.showToast(`${e} = ${n}`,!0)}catch(u){console.warn("[admin-viewer-theme] force-mode update failed:",u),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:e}),!1)}}function m(){B(),O(),f(),c(),i(),a(),r(),o()}L.addEventListener("input",e=>{if(e.target.matches("[data-vt-color]")){let n=e.target.dataset.vtColor;_.test(e.target.value)&&(E[n]=e.target.value,x="custom",P(),m())}else if(e.target.matches("[data-vt-hex]")){let n=e.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(e.target.value)&&(E[n]=e.target.value,x="custom",P(),m())}else e.target.matches("[data-vt-font]")&&(E.font=e.target.value,P(),m())}),L.addEventListener("change",e=>{if(e.target.matches("[data-vt-logo-input]")){let n=e.target.files&&e.target.files[0];if(!n)return;if(n.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let u=new FileReader;u.onload=()=>{E.logo=String(u.result||""),P(),m()},u.readAsDataURL(n)}}),L.addEventListener("click",e=>{let n=e.target.closest("[data-vt-mode-btn]");if(n){E.mode=n.dataset.vtModeBtn,x="custom",P(),m();return}let u=e.target.closest("[data-vt-theme-btn]");if(u){s=u.dataset.vtThemeBtn,o(),d("ViewerThemeMode",s);return}let p=e.target.closest("[data-vt-lang-btn]");if(p){l=p.dataset.vtLangBtn,o(),d("ViewerLangMode",l);return}if(e.target.closest("[data-vt-logo-remove]")){E.logo=null,P(),m();return}let w=e.target.closest("[data-vt-device-btn]");if(w){L.querySelectorAll("[data-vt-device-btn]").forEach(F=>F.classList.toggle("is-active",F===w)),L.querySelector("[data-vt-frame]").dataset.device=w.dataset.vtDeviceBtn;return}let I=e.target.closest("[data-vt-action]");I&&I.dataset.vtAction==="reset"&&(E={...g[0],logo:null},x="default",P(),m())}),m(),t()}document.addEventListener("click",function(L){let E=L.target.closest("[data-vt-jump]");if(!E)return;let x=E.dataset.vtJump;if(x){L.preventDefault();try{location.hash="#/"+x}catch{}}});function R(){let L=document.getElementById("settings-grid");if(!L||document.getElementById(y))return;L.insertAdjacentHTML("beforeend",h());let E=document.getElementById(y);E&&v(E)}document.addEventListener("admin-panel-rendered",R),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&R()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),R()})})()});var lt=me(()=>{(function(){"use strict";let y="sec-system-overview";function b(){return`
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
          ${[{id:"uptime",label:ServerI18n.t("sohMetricUptime")},{id:"conn",label:ServerI18n.t("sohMetricConnected")},{id:"ram",label:ServerI18n.t("sohMetricMemory")},{id:"ver",label:ServerI18n.t("sohMetricVersion")}].map(A=>`
            <div class="admin-soh-kpi" data-m="${A.id}">
              <div class="admin-soh-kpi__label">${A.label}</div>
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
          ${[{hash:"#/backup",label:ServerI18n.t("adminNavBackup"),sub:ServerI18n.t("sohLinkBackupSub"),attr:""},{hash:"#/security",label:ServerI18n.t("adminNavSecurity"),sub:ServerI18n.t("sohLinkSecuritySub"),attr:'data-soh-sub="security"'},{hash:"#/integrations",label:ServerI18n.t("adminNavIntegrations"),sub:"\u2014",attr:'data-soh-sub="integrations"'},{hash:"#/about",label:ServerI18n.t("sohLinkAbout"),sub:ServerI18n.t("sohLinkAboutSub"),attr:""}].map(A=>`
            <a class="admin-ui-group-row admin-soh-link" href="${A.hash}">
              <span class="lbl">${A.label}</span>
              <span class="val admin-soh-link__sub" ${A.attr}>${A.sub}</span>
              <span class="admin-soh-link__chev" aria-hidden="true">\u203A</span>
            </a>`).join("")}
        </div>
      </div>`}function g(A){let v=Math.floor(A/86400),R=Math.floor(A%86400/3600),L=Math.floor(A%3600/60);return v>0?`${v}d ${String(R).padStart(2,"0")}h ${String(L).padStart(2,"0")}m`:R>0?`${R}h ${String(L).padStart(2,"0")}m`:`${L}m ${String(A%60).padStart(2,"0")}s`}function h(A,v,R){let L=document.querySelector(`[data-m="${A}"]`);if(!L)return;let E=L.querySelector("[data-m-v]");E&&(E.textContent=v);let x=L.querySelector("[data-m-sub]");x&&(x.textContent=R||"")}function _(A){let v=document.querySelector("[data-soh-banner-dot]"),R=document.querySelector("[data-soh-banner-title]"),L=document.querySelector("[data-soh-chip]"),x=!(A.queue_size!=null&&A.queue_capacity!=null&&A.queue_size>=A.queue_capacity);L&&L.classList.toggle("is-warn",!x),v&&v.classList.toggle("is-warn",!x),R&&(R.textContent=x?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function G(){(async()=>{try{let R=await window.csrfFetch("/admin/metrics");if(!R.ok)return;let L=await R.json(),E=O=>Array.isArray(O)&&O.length?O[O.length-1]:null,x=L.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-L.server_started_at)):0;h("uptime",x>0?g(x):"\u2014","");let P=null;try{let O=await fetch("/admin/audience/stats",{credentials:"same-origin"});O.ok&&(P=(await O.json()).total_live)}catch{}let N=L.ws_clients??0;h("conn",String(N+(P||0)),P==null?ServerI18n.t("sohConnOverlaysOnly",{n:N}):ServerI18n.t("sohConnBreakdown",{overlays:N,viewers:P}));let T=E(L.mem_series||[]),C=L.mem_total_mb?(L.mem_total_mb/1024).toFixed(0):null;h("ram",T!=null?`${Number(T).toFixed(0)}%`:"\u2014",C?ServerI18n.t("sohMemorySub",{total:C}):"");let U=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";h("ver",`v${U}`,ServerI18n.t("sohVersionSub")),_(L);let B=document.querySelector('[data-soh-sub="integrations"]');B&&(B.textContent=ServerI18n.t("sohLinkExtSub",{webhooks:L.webhooks_count??0,plugins:L.plugins_loaded??0}));try{let O=await window.csrfFetch("/admin/ws-auth");if(O.ok){let f=await O.json(),c=document.querySelector('[data-soh-sub="security"]');c&&(c.textContent=f.require_token?ServerI18n.t("sohLinkSecurityOn"):ServerI18n.t("sohLinkSecurityOff"))}}catch{}}catch{}})();let A=document.getElementById(y);if(!A)return;let v=()=>{let R=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";A.querySelectorAll("[data-soh-mode]").forEach(L=>{let E=L.dataset.sohMode===R;L.classList.toggle("is-active",E),L.setAttribute("aria-pressed",E?"true":"false")})};v(),document.addEventListener("admin:theme-mode",v),A.addEventListener("click",function(R){let L=R.target.closest("[data-soh-mode]");if(L){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(L.dataset.sohMode),v();return}let E=R.target.closest("[data-soh-action]");if(!(!E||E.disabled)){if(E.dataset.sohAction==="copy-url"){let x=document.getElementById("sysoPublicUrl")?.textContent||"";navigator.clipboard?.writeText(x).then(()=>window.showToast&&window.showToast(ServerI18n.t("sohCopied"),!0),()=>window.showToast&&window.showToast(ServerI18n.t("sohCopyFailed"),!1));return}if(E.dataset.sohAction==="show-qr"){let x=A.querySelector("[data-soh-qr]");if(!x)return;if(!x.hidden){x.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(P=>P.ok?P.json():Promise.reject(P)).then(P=>{x.innerHTML=P.svg,x.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function S(){let A=document.getElementById("settings-grid");!A||document.getElementById(y)||(A.insertAdjacentHTML("beforeend",b()),document.getElementById(y)&&G())}document.addEventListener("admin-panel-rendered",S),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&S()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),S()})})()});var ct=me(()=>{(function(){"use strict";let y="sec-polls",b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(G){return String(G).replace(/[&<>"']/g,function(S){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[S]})};function g(){return`
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
  `}function h(){let G=document.getElementById("sec-polls");if(!G)return;let S=G.querySelector("[data-poll-queue]"),A=G.querySelector("[data-poll-editor]"),v=G.querySelector("[data-poll-view-builder]"),R=G.querySelector("[data-poll-view-live]"),L=G.querySelector("[data-poll-view-results]"),E="danmu.adminPollQueue.v2";function x(){return"q_"+Math.random().toString(36).slice(2,8)}function P(){return"o_"+Math.random().toString(36).slice(2,6)}function N(W){return{id:P(),label:"",img:""}}function T(){return{id:x(),text:"",timer:90,multi:!1,crop:"16:9",image_url:"",server_q_id:"",options:[N("A"),N("B")]}}let C=null,U="builder",B=null,O=0,f={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},c=null,i=[];try{let W=localStorage.getItem(E);if(W){let Z=JSON.parse(W);Array.isArray(Z)?i=Z:Z&&Array.isArray(Z.queue)&&(i=Z.queue)}}catch{}(!Array.isArray(i)||i.length===0)&&(i=[T()]),i.forEach(W=>{typeof W.image_url!="string"&&(W.image_url=""),typeof W.server_q_id!="string"&&(W.server_q_id="")});let a=i[0].id,r="manual",s=null,l=null,o={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function t(){try{localStorage.setItem(E,JSON.stringify({queue:i,activeId:a,mode:r}))}catch{}}function d(W){return i.find(Z=>Z.id===W)}function m(W,Z){let te=d(W);te&&Object.assign(te,Z)}function e(W,Z,te){let oe=W.slice(),[Q]=oe.splice(Z,1);return oe.splice(te,0,Q),oe}function n(){S.innerHTML="",i.forEach((W,Z)=>{let te=document.createElement("div");te.className="admin-poll-qrow",W.id===a&&te.classList.add("is-active");let oe=o.active&&o.currentIndex===Z;oe&&te.classList.add("is-running"),te.dataset.qid=W.id,te.draggable=!0;let Q=!!W.image_url||W.options.some(se=>se.img);te.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${Z+1}</span>
            <div class="info">
              <div class="text">${b(W.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:W.options.length})} \xB7 ${W.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):W.timer+"s"} \xB7 ${Q?ServerI18n.t("pollBuilderHasImageCrop",{crop:W.crop}):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${oe?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":W.id===a?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,S.appendChild(te)})}function u(){let W=d(a)||i[0];if(!W){A.innerHTML="";return}let Z=i.indexOf(W);A.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${Z+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:Z+1})}</span>
            </div>
            <span class="progress">Q${Z+1} / ${i.length}</span>
          </div>

          <div class="admin-poll-field-label">${ServerI18n.t("pollQuestion")}</div>
          <input type="text" class="admin-poll-q-text" data-ed-text value="${b(W.text||"")}" placeholder="${ServerI18n.t("pollBuilderQuestionPlaceholder")}" maxlength="200" />

          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderFieldQuestionImage")}</div>
          <div class="admin-poll-q-image">
            ${W.image_url?`
              <img class="admin-poll-q-image-thumb" src="${b(W.image_url)}" alt="" />
              <button type="button" class="admin-ui-action is-danger admin-poll-editor-action" data-ed-action="remove-q-image">${ServerI18n.t("pollBuilderRemoveImage")}</button>
            `:`
              <button type="button" class="admin-ui-action admin-poll-editor-action" data-ed-action="upload-q-image">${ServerI18n.t("pollBuilderUploadImageBtn")}</button>
              <input type="file" data-ed-q-image-input accept="image/jpeg,image/png,image/webp" hidden />
            `}
          </div>

          <div class="admin-poll-crop" data-ed-crop-row>
            <span class="crop-label">${ServerI18n.t("pollBuilderCropLabel")}</span>
            ${["16:9","1:1","4:3"].map(te=>`
              <button type="button" data-ed-crop="${te}" class="${W.crop===te?"is-active":""}">${te}</button>
            `).join("")}
            <span class="crop-note">${ServerI18n.t("pollBuilderCropApplyNote")}</span>
          </div>

          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderOptionsFieldLabel")}</div>
          <div class="admin-poll-opts" data-ed-opts>
            ${W.options.map((te,oe)=>`
              <div class="admin-poll-opt" data-oid="${te.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+oe)}</span>
                <button type="button" class="opt-img-toggle ${te.img?"is-on":""}" data-ed-opt-img="${te.id}" title="${ServerI18n.t("pollBuilderToggleImageTitle")}">
                  ${te.img?'<span class="img-on">\u{1F5BC}</span>':`<span class="img-off">${ServerI18n.t("pollBuilderAddImageShort")}</span>`}
                </button>
                <input type="text" data-ed-opt-text="${te.id}" value="${b(te.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+oe)})}" maxlength="100" />
                ${W.options.length>2?`<button type="button" class="opt-remove" data-ed-opt-remove="${te.id}" title="${ServerI18n.t("pollBuilderDeleteTitle")}">${window.AdminUtils.closeIcon}</button>`:""}
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
            <label class="foot-field foot-check">
              <input type="checkbox" data-ed-multi ${W.multi?"checked":""} />
              <span>${ServerI18n.t("pollBuilderAllowMulti")}</span>
            </label>
            <div class="foot-spacer"></div>
            <!-- 2026-07-30\uFF1A\u300CSTART Qn\u300D\u820A\u8DEF\u5F91\u79FB\u9664\u2014\u2014\u5B83\u7E5E\u904E session \u6A21\u578B\u76F4\u6253
                 \u820A\u55AE\u984C /admin/poll/create\u3001\u524D\u7AEF\u81EA\u5DF1 watchAndAdvance\uFF0C\u9023\u5716\u7247
                 \u90FD\u50B3\u4E0D\u4E86\u3002\u552F\u4E00\u7684\u958B\u59CB\u5165\u53E3\u662F\u5DE6\u6B04 START SESSION\uFF08P0-1 \u6A21\u578B\uFF09\u3002 -->
            <button type="button" class="admin-ui-action is-danger admin-poll-editor-action" data-ed-action="remove-q">${ServerI18n.t("pollBuilderDeleteThisQuestion")}</button>
          </div>
        `}function p(){C&&C.active?U="live":B?U="results":U="builder",G.dataset.pollView=U,v.hidden=U!=="builder",R.hidden=U!=="live",L.hidden=U!=="results",n(),u(),Y(),U==="live"?H():U==="results"&&$(),U==="live"?k():w()}function k(){c||(c=setInterval(()=>{U!=="live"||!C||!C.active||D()},1e3))}function w(){c&&(clearInterval(c),c=null)}function I(W,Z){if(!W||!W.time_limit_seconds)return null;if(!Z)return W.time_limit_seconds;let te=Date.now()/1e3-Z;return Math.max(0,Math.round(W.time_limit_seconds-te))}function F(W){if(W==null)return"\u221E";let Z=String(Math.floor(W/60)).padStart(2,"0"),te=String(W%60).padStart(2,"0");return`${Z}:${te}`}function H(){if(!C||!C.questions||C.questions.length===0){R.innerHTML="";return}let W=C.current_index>=0?C.current_index:0,Z=C.questions.length,te=C.questions[W],oe=I(te,C.started_at),Q=te.time_limit_seconds||0,se=Q>0&&oe!=null?Math.max(0,Math.min(1,oe/Q)):1,de=Q>0&&oe!=null&&oe<=Math.max(5,Q*.15),ce=te.options.reduce((ae,re)=>ae+(re.count||0),0),ve=[...te.options].sort((ae,re)=>(re.count||0)-(ae.count||0)),fe=ve[0]?ve[0].count:0,z=C.questions[W+1],X=110,ee=X/2-6,J=2*Math.PI*ee,ie=J*se;R.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${b((C.poll_id||"").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  ${ServerI18n.t("pollBuilderLiveQuestionProgress",{idx:`<strong>${W+1}</strong>`,total:Z})}
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${X} ${X}" width="56" height="56">
                      <circle cx="${X/2}" cy="${X/2}" r="${ee}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${X/2}" cy="${X/2}" r="${ee}" fill="none"
                        stroke="${de?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${ie} ${J}" stroke-linecap="round"
                        transform="rotate(-90 ${X/2} ${X/2})"
                        style="filter: drop-shadow(0 0 4px ${de?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${de?"is-low":""}" data-live-mmss>${oe==null?ServerI18n.t("pollBuilderNoTimeLimit"):F(oe)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:W+1})}</div>
                <div class="text">${b(te.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${ve.map(ae=>{let re=ce>0?ae.count/ce*100:0,le=(ae.count||0)>0&&ae.count===fe;return`
                    <div class="admin-polls-live-bar ${le?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${b(ae.key)}</span>
                        <span class="lbl">${b(ae.text||"")}</span>
                        ${le?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${re.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:ae.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${re.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${ce}</strong>`})}</span>
                ${z?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${b(z.text||"")}</em>`})}</span>`:""}
                <div class="actions">
                  <button type="button" class="admin-polls-live-btn" data-live-action="advance" ${W>=Z-1?"disabled":""}>${ServerI18n.t("pollBuilderLiveAdvanceBtn")}</button>
                  <button type="button" class="admin-polls-live-btn is-danger" data-live-action="end">${ServerI18n.t("pollBuilderLiveEndBtn")}</button>
                </div>
              </div>
            </div>

            <!-- RIGHT \xB7 queue mini + broadcast -->
            <aside class="admin-polls-live-rail">
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderQuestionProgressTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiProgress")} \xB7 ${W+1}/${Z}</span>
                </div>
                <div class="admin-polls-live-queue">
                  ${C.questions.map((ae,re)=>{let le=re<W?"done":re===W?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${le}">
                        <span class="idx">${le==="done"?"\u2713":re+1}</span>
                        <span class="t">${b(ae.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
                        ${le==="active"?'<span class="dot"></span>':""}
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
                    <label class="admin-polls-live-toggle ${f[ae.k]?"is-on":""}" data-live-toggle="${ae.k}">
                      <span class="lbl">${ae.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function D(){if(!C||!C.active)return;let W=C.current_index>=0?C.current_index:0,Z=C.questions[W];if(!Z)return;let te=I(Z,C.started_at),oe=Z.time_limit_seconds||0,Q=R.querySelector("[data-live-mmss]"),se=R.querySelector("[data-live-ring]");if(Q&&(Q.textContent=te==null?ServerI18n.t("pollBuilderNoTimeLimit"):F(te),Q.classList.toggle("is-low",oe>0&&te!=null&&te<=Math.max(5,oe*.15))),se&&oe>0&&te!=null){let de=+se.getAttribute("r"),ce=2*Math.PI*de,ve=Math.max(0,Math.min(1,te/oe));se.setAttribute("stroke-dasharray",`${ce*ve} ${ce}`);let fe=te<=Math.max(5,oe*.15);se.setAttribute("stroke",fe?"var(--hud-crimson)":"var(--color-primary)"),se.style.filter=`drop-shadow(0 0 4px ${fe?"var(--hud-crimson)":"var(--color-primary)"})`}f.autoAdvance&&oe>0&&te===0&&(W>=C.questions.length-1?V():q())}function $(){let W=B;if(!W||!W.questions||W.questions.length===0){L.innerHTML="";return}let Z=W.questions.length,te=Math.max(0,Math.min(O,Z-1)),oe=W.questions[te],Q=oe.options.reduce((J,ie)=>J+(ie.count||0),0),se=[...oe.options].sort((J,ie)=>(ie.count||0)-(J.count||0)),de=se[0]||{key:"-",text:"\u2014",count:0},ce=se[1],ve=Q>0?de.count/Q*100:0,fe=ce?Math.max(0,de.count-ce.count):de.count,z=W.started_at||0,X=W.ended_at||Date.now()/1e3,ee=Math.max(0,Math.round(X-z));L.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${Z>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${W.questions.map((J,ie)=>`
                    <button type="button" role="tab" class="${ie===te?"is-active":""}" data-results-tab="${ie}">
                      Q${ie+1}<span class="t">${b((J.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${te+1}/${Z} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:F(ee),n:Q})}</span>
                </div>
                <div class="text">${b(oe.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${b(de.key)}</div>
                <div class="info">
                  <div class="lbl">${b(de.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:de.count})} \xB7 ${ve.toFixed(1)}% ${ce?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:fe}):""}</div>
                </div>
                <div class="pct">${ve.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:Q})}</span>
                </div>
                ${se.map((J,ie)=>{let ae=Q>0?J.count/Q*100:0;return`
                    <div class="admin-polls-results-bar ${ie===0&&J.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${ie+1}</span>
                        <span class="tag">${b(J.key)}</span>
                        <span class="lbl">${b(J.text||"")}</span>
                        <span class="pct">${ae.toFixed(1)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:J.count})}</span>
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
                  <span class="big">${Q}</span>
                  <span class="unit">${ServerI18n.t("pollBuilderVotesThisQuestion")}</span>
                </div>
                <div class="admin-polls-results-meter">
                  <div class="fill" style="width:${Math.min(100,Q?100:0)}%"></div>
                </div>
                <div class="admin-polls-results-meta-row">
                  <span>${ServerI18n.t("pollBuilderOptionsCountLabel",{n:oe.options.length})}</span>
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${oe.time_limit_seconds?F(oe.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${W.started_at?new Date(W.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${W.ended_at?new Date(W.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${F(ee)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let J=Math.max(1,...se.map(ie=>ie.count));return se.map(ie=>`<div class="bar" style="height:${Math.max(6,ie.count/J*100)}%"></div>`).join("")})()}
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
        `}function j(W){let Z=[["question_index","question","option_key","option_text","count","percentage"]];return W.questions.forEach((te,oe)=>{let Q=te.options.reduce((se,de)=>se+(de.count||0),0);te.options.forEach(se=>{let de=Q>0?(se.count/Q*100).toFixed(1):"0";Z.push([oe+1,te.text,se.key,se.text,se.count,de])})}),Z.map(te=>te.map(oe=>{let Q=String(oe??"");return/[",\n]/.test(Q)?`"${Q.replace(/"/g,'""')}"`:Q}).join(",")).join(`
`)}function K(W,Z,te){let oe=new Blob([te],{type:Z}),Q=document.createElement("a");Q.href=URL.createObjectURL(oe),Q.download=W,document.body.appendChild(Q),Q.click(),setTimeout(()=>{URL.revokeObjectURL(Q.href),Q.remove()},0)}G.addEventListener("click",W=>{let Z=W.target.closest("[data-live-action]");if(Z){let se=Z.dataset.liveAction;se==="advance"?q():se==="end"?V():se==="pause"&&(f.autoAdvance=!1,H());return}let te=W.target.closest("[data-live-toggle]");if(te){let se=te.dataset.liveToggle;se in f&&(f[se]=!f[se],te.classList.toggle("is-on",f[se]));return}let oe=W.target.closest("[data-results-tab]");if(oe){O=+oe.dataset.resultsTab||0,$();return}let Q=W.target.closest("[data-results-action]");if(Q){let se=Q.dataset.resultsAction,de=B;if(!de)return;if(se==="copy"){let ce=de.questions.map((ve,fe)=>{let z=ve.options.reduce((ee,J)=>ee+(J.count||0),0),X=ve.options.map(ee=>{let J=z>0?(ee.count/z*100).toFixed(1):"0.0";return`  ${ee.key}. ${ee.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:ee.count})} (${J}%)`});return`Q${fe+1}: ${ve.text}
${X.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(ce)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else se==="csv"?K(`poll_${(de.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",j(de)):se==="json"?K(`poll_${(de.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(de,null,2)):se==="reset"&&(B=null,O=0,p());return}}),S.addEventListener("dragstart",W=>{let Z=W.target.closest(".admin-poll-qrow");Z&&(s=Z.dataset.qid,Z.classList.add("is-dragging"))}),S.addEventListener("dragend",W=>{let Z=W.target.closest(".admin-poll-qrow");Z&&Z.classList.remove("is-dragging"),s=null,S.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over"))}),S.addEventListener("dragover",W=>{W.preventDefault();let Z=W.target.closest(".admin-poll-qrow");!Z||!s||Z.dataset.qid===s||(S.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over")),Z.classList.add("is-drag-over"))}),S.addEventListener("drop",W=>{W.preventDefault();let Z=W.target.closest(".admin-poll-qrow");if(!Z||!s)return;let te=i.findIndex(Q=>Q.id===s),oe=i.findIndex(Q=>Q.id===Z.dataset.qid);te<0||oe<0||te===oe||(i=e(i,te,oe),t(),p())}),S.addEventListener("click",W=>{let Z=W.target.closest(".admin-poll-qrow");Z&&(a=Z.dataset.qid,t(),p())}),A.addEventListener("input",W=>{let Z=d(a);if(Z){if(W.target.matches("[data-ed-text]")){Z.text=W.target.value,t(),n();return}if(W.target.matches("[data-ed-opt-text]")){let te=W.target.dataset.edOptText,oe=Z.options.find(Q=>Q.id===te);oe&&(oe.label=W.target.value,t(),n())}}}),A.addEventListener("change",W=>{let Z=d(a);Z&&(W.target.matches("[data-ed-timer]")?(Z.timer=+W.target.value,t(),n()):W.target.matches("[data-ed-multi]")&&(Z.multi=W.target.checked,t()))}),A.addEventListener("click",async W=>{let Z=d(a);if(!Z)return;let te=W.target.closest("[data-ed-crop]");if(te){Z.crop=te.dataset.edCrop,t(),u();return}let oe=W.target.closest("[data-ed-opt-img]");if(oe){let de=Z.options.find(ce=>ce.id===oe.dataset.edOptImg);de&&(de.img=de.img?"":"placeholder",t(),u());return}let Q=W.target.closest("[data-ed-opt-remove]");if(Q){let de=Q.dataset.edOptRemove;Z.options.length>2&&(Z.options=Z.options.filter(ce=>ce.id!==de),t(),u(),n());return}if(W.target.closest("[data-ed-opt-add]")){Z.options.length<6&&(Z.options.push(N()),t(),u(),n());return}let se=W.target.closest("[data-ed-action]");if(se)if(se.dataset.edAction==="remove-q"){if(i.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let ce=i.findIndex(ve=>ve.id===a);i=i.filter(ve=>ve.id!==a),a=i[Math.min(ce,i.length-1)].id,t(),p()}}else if(se.dataset.edAction==="upload-q-image"){let de=A.querySelector("[data-ed-q-image-input]");de&&de.click()}else se.dataset.edAction==="remove-q-image"&&(Z.image_url="",t(),u(),n())}),A.addEventListener("change",async W=>{if(!W.target.matches("[data-ed-q-image-input]"))return;let Z=W.target.files&&W.target.files[0];if(!Z)return;let te=d(a);if(!te)return;if(!o.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),W.target.value="";return}if(!te.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),W.target.value="";return}if(Z.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),W.target.value="";return}let oe=new FormData;oe.append("file",Z);try{let Q=await csrfFetch(`/admin/poll/${encodeURIComponent(o.pollId)}/upload-image/${encodeURIComponent(te.server_q_id)}`,{method:"POST",body:oe}),se=await Q.json().catch(()=>({}));if(!Q.ok)throw new Error(se.error||"upload failed");te.image_url=se.image_url,t(),u(),n(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(Q){showToast&&showToast(String(Q.message||Q),!1)}finally{W.target.value=""}}),A.addEventListener("dragstart",W=>{let Z=W.target.closest(".admin-poll-opt");Z&&(l=Z.dataset.oid,Z.classList.add("is-dragging"))}),A.addEventListener("dragend",W=>{A.querySelectorAll(".is-dragging, .is-drag-over").forEach(Z=>Z.classList.remove("is-dragging","is-drag-over")),l=null}),A.addEventListener("dragover",W=>{let Z=W.target.closest(".admin-poll-opt");!Z||!l||Z.dataset.oid===l||(W.preventDefault(),A.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over")),Z.classList.add("is-drag-over"))}),A.addEventListener("drop",W=>{W.preventDefault();let Z=W.target.closest(".admin-poll-opt"),te=d(a);if(!Z||!l||!te)return;let oe=te.options.findIndex(se=>se.id===l),Q=te.options.findIndex(se=>se.id===Z.dataset.oid);oe<0||Q<0||oe===Q||(te.options=e(te.options,oe,Q),t(),u())}),G.addEventListener("click",W=>{if(W.target.closest("[data-poll-action='add']")){let se=T();i.push(se),a=se.id,t(),p();return}let te=W.target.closest("[data-poll-template]");if(te){let se=T(),de=te.dataset.pollTemplate,ce=["A","B","C","D","E"],ve=fe=>fe.map((z,X)=>{let ee=N(ce[X]);return ee.text=z,ee});de==="yesno"?(se.text="",se.options=ve([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):de==="stars"?(se.timer=60,se.options=ve(["1","2","3","4","5"])):de==="four"&&(se.options=ve(["","","",""])),i.push(se),a=se.id,t(),p();return}let oe=W.target.closest("[data-poll-mode]");oe&&(r=oe.dataset.pollMode,G.querySelectorAll("[data-poll-mode]").forEach(se=>se.classList.toggle("is-active",se===oe)),t());let Q=W.target.closest("[data-poll-session-action]");if(Q){let se=Q.dataset.pollSessionAction;se==="start"?M():se==="advance"?q():se==="end"&&V()}});function Y(){let W=G.querySelector("[data-poll-session]");if(!W)return;let Z=W.querySelector("[data-poll-session-status]"),te=W.querySelector("[data-poll-session-action='start']"),oe=W.querySelector("[data-poll-session-action='advance']"),Q=W.querySelector("[data-poll-session-action='end']");if(!o.pollId||!o.active){Z.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,te.hidden=!1,oe.hidden=!0,Q.hidden=!0;return}let se=i.length,de=o.currentIndex+1,ce=o.currentIndex>=se-1;Z.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${de} / ${se}</span>`,te.hidden=!0,oe.hidden=ce,Q.hidden=!1}async function M(){try{let W=i.map((de,ce)=>{let ve=(de.text||"").trim(),fe=de.options.map(z=>(z.label||"").trim()).filter(Boolean);if(!ve)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:ce+1}));if(fe.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:ce+1}));return{text:ve,options:fe,time_limit_seconds:de.timer&&de.timer>0?de.timer:null}});if(!W.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let Z=(()=>{let de=i.map(ce=>Number(ce.timer)||0).filter(ce=>ce>0);return de.length?Math.round(de.reduce((ce,ve)=>ce+ve,0)/de.length):null})(),te=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:W,mode:r||"manual",default_duration_s:Z})}),oe=await te.json().catch(()=>({}));if(!te.ok)throw new Error(oe.error||ServerI18n.t("pollBuilderErrCreateFailed"));o.pollId=oe.poll_id,(oe.questions||[]).forEach((de,ce)=>{i[ce]&&(i[ce].server_q_id=de.id)}),t();let Q=await csrfFetch("/admin/poll/start",{method:"POST"}),se=await Q.json().catch(()=>({}));if(!Q.ok)throw new Error(se.error||ServerI18n.t("pollBuilderErrStartFailed"));o.active=!0,o.currentIndex=se.current_index??0,C=se,B=null,p(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),ne()}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function q(){try{let W=await csrfFetch("/admin/poll/advance",{method:"POST"}),Z=await W.json().catch(()=>({}));if(!W.ok)throw new Error(Z.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));o.currentIndex=Z.current_index,o.active=!!Z.active,C=Z,p(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:o.currentIndex+1}),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function V(){try{let W=C,Z=await csrfFetch("/admin/poll/end",{method:"POST"});if(!Z.ok){let te=await Z.json().catch(()=>({}));throw new Error(te.error||ServerI18n.t("pollBuilderErrEndFailed"))}W&&W.questions&&(B={...W,ended_at:Date.now()/1e3},O=W.current_index>=0?W.current_index:0),o.active=!1,o.pollId="",o.currentIndex=-1,C=null,o.statusTimer&&(clearInterval(o.statusTimer),o.statusTimer=null),p(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}function ne(){o.statusTimer&&clearInterval(o.statusTimer),o.statusTimer=setInterval(async()=>{if(o.pollId)try{let W=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!W.ok)return;let Z=await W.json();if(Z.poll_id!==o.pollId)return;o.active=!!Z.active,o.currentIndex=Z.current_index??-1;let te=!!(C&&C.active);C=Z,Z.active||(clearInterval(o.statusTimer),o.statusTimer=null,te&&Z.questions&&!B&&(B={...Z,ended_at:Date.now()/1e3},O=Z.current_index>=0?Z.current_index:0),C=null),U==="live"?H():p()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{o.statusTimer&&(clearInterval(o.statusTimer),o.statusTimer=null),w()}),p()}function _(){let G=document.getElementById("settings-grid");!G||document.getElementById(y)||(G.insertAdjacentHTML("beforeend",g()),document.getElementById(y)&&h())}document.addEventListener("admin-panel-rendered",_),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&_()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),_()})})()});var ut=me(()=>{(function(){"use strict";let h="sec-live-feed",_=[],G=[],S=!1,A="",v="all",R=0,L=null,E=null,x=null,P=null;function N(M){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(M):String(M??"").replace(/[&<>"']/g,function(q){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[q]})}function T(M,q){return M?M.length>q?M.slice(0,q)+"\u2026":M:""}function C(M){let q=new Date(M),V=ne=>String(ne).padStart(2,"0");return`${V(q.getHours())}:${V(q.getMinutes())}:${V(q.getSeconds())}`}function U(M){if(!A)return!0;let q=A.toLowerCase(),V=M.data;return V.text&&V.text.toLowerCase().includes(q)||V.nickname&&V.nickname.toLowerCase().includes(q)||V.fingerprint&&V.fingerprint.toLowerCase().includes(q)||V.layout&&V.layout.toLowerCase().includes(q)}function B(M){return v==="muted"?!!M.muted:v==="sensitive"?!!M.sensitive:v==="queued"?M.data&&M.data.status==="queued":!0}function O(){v="all",document.querySelectorAll(".admin-live-feed-tab").forEach(M=>M.classList.toggle("is-active",M.dataset.tab==="all"))}function f(){A="",x&&(x.value=""),O()}function c(M,q){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let ne;return M==="paused"?ne=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:q||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):M==="no-result"?ne=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:q||ServerI18n.t("lfNoMatchDesc")}):ne=window.AdminEmpty.render("messages"),ne.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),ne.setAttribute("data-empty-kind","live-feed"),ne}let V=document.createElement("div");return V.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",V.setAttribute("data-empty-kind","live-feed"),V.innerHTML=`<div class="admin-proto-placeholder-title">${N(M)}</div><div class="admin-proto-placeholder-body">${N(q||"")}</div>`,V}function i(M){let q=M.data,V=document.createElement("div");V.className="admin-live-feed-row"+(M.muted?" is-muted":""),V.dataset.id=M.id,V.tabIndex=-1;let ne=document.createElement("span");if(ne.className="admin-live-feed-time",ne.textContent=C(M.ts),V.appendChild(ne),(q.layout||"scroll").toLowerCase()!=="scroll"){let se=document.createElement("span");se.className="admin-ui-chip admin-live-feed-tag",se.textContent=q.layout,V.appendChild(se)}let Z=document.createElement("span");Z.className="admin-live-feed-text",Z.textContent=T(q.text||"",80),Z.title=q.text||"",V.appendChild(Z);let te=document.createElement("span");te.className="admin-live-feed-identity",window.AdminIdentity&&te.appendChild(AdminIdentity.render({nickname:q.nickname||"",fp:"",onNicknameClick:function(se){!se||!x||(x.value=se,x.dispatchEvent(new Event("input",{bubbles:!0})),x.focus())}})),V.appendChild(te);let oe=document.createElement("span");oe.className="admin-live-feed-actions is-hover-reveal";let Q=document.createElement("button");if(Q.type="button",Q.className="admin-ui-chip is-danger admin-live-feed-action",Q.textContent=ServerI18n.t("blockKeywordBtn"),Q.title=ServerI18n.t("blockKeywordTitle"),Q.addEventListener("click",se=>{se.stopPropagation(),a("keyword",q.text,M.id)}),oe.appendChild(Q),q.fingerprint){let se=document.createElement("button");se.type="button",se.className="admin-ui-chip is-warn admin-live-feed-action",se.textContent=ServerI18n.t("blockFpBtn"),se.title=ServerI18n.t("blockFpTitle").replace("{fp}",q.fingerprint),se.addEventListener("click",de=>{de.stopPropagation(),a("fingerprint",q.fingerprint,M.id)}),oe.appendChild(se)}return V.appendChild(oe),V}async function a(M,q,V){if(!q)return;let ne=M==="keyword"?ServerI18n.t("blockLabelKeyword"):ServerI18n.t("blockLabelFingerprint"),W=M==="keyword"?T(q,30):q.slice(0,8);if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("lfBlockTitle"),subtitle:ServerI18n.t("cfmSubBlockFuture"),severity:"danger",bodyText:ServerI18n.t("blockConfirm").replace("{label}",ne).replace("{display}",W),confirmLabel:ServerI18n.t("lfBlockTitle")}))try{let te=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:M,value:q})}),oe=await te.json();if(te.ok){if(showToast(oe.message||ServerI18n.t("blockFallback").replace("{label}",ne)),V){let Q=_.find(se=>se.id===V);Q&&(Q.muted=!0)}else _.forEach(Q=>{M==="keyword"&&Q.data.text===q&&(Q.muted=!0),M==="fingerprint"&&Q.data.fingerprint===q&&(Q.muted=!0)});r()}else showToast(oe.error||ServerI18n.t("blockFailed"),!1)}catch(te){console.error("[LiveFeed] Block failed:",te),showToast(ServerI18n.t("blockRequestFailed"),!1)}}function r(){if(!L)return;let M=document.createDocumentFragment(),q=_.filter(V=>U(V)&&B(V));for(let V=q.length-1;V>=0;V--)M.appendChild(i(q[V]));if(L.textContent="",M.childNodes.length===0){let V=S?c("paused"):_.length===0?c("empty"):c("no-result");L.appendChild(V)}else L.appendChild(M);s(),t(),d(),o()}function s(){if(!P)return;let M=_.length,q=G.length;P.textContent=ServerI18n.t("lfCountUnit",{n:M})+(q>0?` (+${q})`:"")}function l(M){let q={ts:Date.now(),data:M,id:"e"+ ++R};if(M&&M.status==="blocked"&&(q.muted=!0),M&&(M.sensitive||M.flagged)&&(q.sensitive=!0),S){G.push(q),s(),o();return}if(_.push(q),_.length>200){let V=_.splice(0,_.length-200)}r()}function o(){let M=document.querySelector("[data-lf-jump]"),q=document.querySelector("[data-lf-jump-n]");if(!M||!q)return;let V=G.length;V>0?(M.hidden=!1,q.textContent=String(V)):M.hidden=!0}function t(){let M=document.querySelector("[data-lf-state]");M&&(M.className=S?"ui-status is-warning":"ui-status is-success",M.textContent=S?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function d(){let M=document.getElementById(h)||document,q=(V,ne)=>{let W=M.querySelector(V);W&&(W.textContent=String(ne))};q("[data-cnt-all]",_.length),q("[data-cnt-sens]",_.filter(V=>V.sensitive).length),q("[data-cnt-mut]",_.filter(V=>V.muted).length),q("[data-cnt-q]",_.filter(V=>V.data&&V.data.status==="queued").length)}function m(){if(S=!S,L&&L.setAttribute("aria-live",S?"off":"polite"),E&&(E.textContent=S?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),E.classList.toggle("is-primary",S),E.classList.toggle("is-ghost",!S)),S)s();else{for(let M of G)_.push(M);G=[],_.length>200&&_.splice(0,_.length-200),r()}}function e(){let M=document.getElementById("settings-grid");if(!M)return!1;let q=`
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
              placeholder="${N(ServerI18n.t("liveFeedSearchPlaceholder"))}"
              class="admin-lf-v4__search" />
            <button id="liveFeedPauseBtn" type="button" class="admin-lf-v4__pausebtn">${N(ServerI18n.t("pauseBtn"))}</button>
            <button id="liveFeedClearBtn" type="button" class="admin-lf-v4__pausebtn">${N(ServerI18n.t("clearBtn"))}</button>
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
      </div>`;return M.insertAdjacentHTML("beforeend",q),!0}let n=!1,u=null,p=0,k=1500;async function w(){try{let M=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(p),{credentials:"same-origin"});if(!M.ok)return;let q=await M.json();if(Array.isArray(q.entries))for(let V of q.entries)V&&V.data&&l(V.data);typeof q.next_since=="number"&&(p=q.next_since)}catch{}}function I(){n||(n=!0,w(),u=setInterval(w,k),window.addEventListener("beforeunload",()=>{u&&(clearInterval(u),u=null)}))}function F(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&e()&&H()}).observe(document.body,{childList:!0,subtree:!0}),e()&&H()}function H(){L=document.getElementById("liveFeedList"),E=document.getElementById("liveFeedPauseBtn"),x=document.getElementById("liveFeedSearch"),P=document.getElementById("liveFeedCount");let M=document.getElementById("liveFeedClearBtn"),q=document.querySelectorAll(".admin-live-feed-tab");if(E&&E.addEventListener("click",m),M&&M.addEventListener("click",()=>{_=[],G=[],r()}),q.forEach(V=>{V.addEventListener("click",()=>{q.forEach(ne=>ne.classList.remove("is-active")),V.classList.add("is-active"),v=V.dataset.tab||"all",r()})}),x){let V=null;x.addEventListener("input",()=>{clearTimeout(V),V=setTimeout(()=>{A=x.value.trim(),r()},200)})}I()}function D(M){if(!("ontouchstart"in window))return;let q=0,V=0,ne=0,W=null,Z=null,te=!1;function oe(Q){if(Q.querySelector(".admin-live-feed-row__swipe-actions"))return;let se=document.createElement("div");se.className="admin-live-feed-row__swipe-actions",se.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="mask">
          <span class="admin-live-feed-row__swipe-btn-icon">\u25D0</span>${ServerI18n.t("lfSwipeMask")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mute" data-swipe-act="mute">
          <span class="admin-live-feed-row__swipe-btn-icon">\u25D0</span>${ServerI18n.t("lfSwipeMute")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,se.addEventListener("click",function(de){let ce=de.target.closest("[data-swipe-act]");if(!ce)return;let ve=Q.dataset.id,fe=_.find(X=>X.id===ve);if(!fe||!fe.data)return;let z=ce.dataset.swipeAct;z==="ban"||z==="mute"?fe.data.fingerprint&&a("fingerprint",fe.data.fingerprint,ve):z==="mask"&&fe.data.text&&a("keyword",fe.data.text,ve),Q.classList.remove("is-swiped")}),Q.appendChild(se)}M.addEventListener("touchstart",function(Q){let se=Q.target.closest(".admin-live-feed-row");se&&(Q.target.closest(".admin-live-feed-row__swipe-actions")||(W=se,te=!1,q=Q.touches[0].clientX,V=Q.touches[0].clientY,ne=0))},{passive:!0}),M.addEventListener("touchmove",function(Q){if(!W||te)return;let se=Q.touches[0],de=se.clientX-q,ce=se.clientY-V;if(Math.abs(ce)>Math.abs(de)&&Math.abs(ce)>12){te=!0;return}if(ne=de,de<-10){oe(W),Z=W,W.classList.add("is-swiping");let ve=Math.max(-180,de);W.style.transform=`translateX(${ve}px)`}else de>10&&W.classList.contains("is-swiped")&&(W.style.transform="")},{passive:!0}),M.addEventListener("touchend",function(){W&&(W.classList.remove("is-swiping"),W.style.transform="",ne<=-60?W.classList.add("is-swiped"):W.classList.remove("is-swiped"),W=null,Z=null,ne=0)},{passive:!0})}function $(){return L?Array.from(L.querySelectorAll(".admin-live-feed-row")):[]}function j(){let M=$(),q=document.activeElement;for(let V of M)if(V===q||V.contains(q))return V;return null}function K(M){let q=$();if(!q.length)return!1;let V=j(),ne=V?q.indexOf(V)+M:M>0?0:q.length-1;return ne=Math.max(0,Math.min(q.length-1,ne)),q[ne].focus(),q[ne].scrollIntoView({block:"nearest"}),!0}function Y(M){let q=j();if(!q)return!1;let V=_.find(W=>W.id===q.dataset.id);if(!V)return!1;let ne=M==="keyword"?V.data.text:V.data.fingerprint;return ne?(a(M,ne,V.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return _.slice()},isVisible:function(){return!!(L&&L.offsetParent!==null)},isPaused:function(){return S},moveFocus:K,blockFocused:Y,togglePause:function(){m()}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",F):F()})()});var mt=me(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.loadDetailsState,b=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;function h(d,m=!1){var e=y();return e[d]!==void 0?e[d]:m}function _(d){var m=y();m[d.id]=d.open,b(m)}let G=!1;new MutationObserver(()=>{let d=document.getElementById("settings-grid");if(d&&!(document.getElementById("sec-plugins")||G)){G=!0;try{A(d)}finally{G=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function A(d){let m=`
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
      `;d.insertAdjacentHTML("beforeend",m);let e=document.querySelector("[data-console-filters]");e&&e.addEventListener("click",n=>{let u=n.target.closest("[data-console-filter]");u&&(e.querySelectorAll("[data-console-filter]").forEach(p=>p.classList.toggle("is-active",p===u)),L=u.dataset.consoleFilter,T())}),document.getElementById("pluginsReloadBtn").addEventListener("click",t),B(),U()}let v=0,R=0,L="all",E=[],x=80;function P(d){let m=(d||"INFO").toUpperCase();return m==="ERROR"?"is-error":m==="WARN"?"is-warn":m==="DEBUG"?"is-debug":"is-info"}function N(d){let m=new Date(d*1e3),e=n=>String(n).padStart(2,"0");return`${e(m.getHours())}:${e(m.getMinutes())}:${e(m.getSeconds())}`}function T(){let d=document.getElementById("pluginsConsoleBody");if(!d)return;let m=L==="all"?E:E.filter(e=>(e.level||"INFO").toUpperCase()===L);if(m.length===0){let e=L==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${L} lines yet \xB7 waiting\u2026`;d.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${e}</span>
          </div>`;return}d.innerHTML=m.map(e=>{let n=N(e.ts),u=(e.msg||"").replace(/[<>&"]/g,w=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[w]),p=(e.plugin||"\u2014").replace(/[<>&"]/g,w=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[w]),k=(e.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${n}</span>
          <span class="lv ${P(e.level)}">${k}</span>
          <span class="plg">${p}</span>
          <span class="msg">${u}</span>
        </div>`}).join("")}async function C(){try{let d=await fetch(`/admin/plugins/console?since=${v}`,{credentials:"same-origin"});if(!d.ok)return;let m=await d.json();if(!Array.isArray(m.events)||m.events.length===0)return;for(E.unshift(...m.events);E.length>x;)E.pop();v=m.latest_seq||v,T()}catch{}}function U(){R||(R=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:C}))}async function B(){let d=document.getElementById("pluginsList");if(d)try{let m=await csrfFetch("/admin/plugins/list");if(!m.ok)throw new Error(`HTTP ${m.status}`);let n=(await m.json()).plugins||[];if(n.length===0){d.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",O([]);return}d.innerHTML=n.map(f).join(""),l(d),O(n)}catch(m){console.error("Failed to load plugins:",m),d.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function O(d){let m=d.length,e=d.filter(w=>w.enabled).length,n=m-e,u=d.map(w=>w.priority).filter(w=>typeof w=="number"),p=u.length?Math.round(u.reduce((w,I)=>w+I,0)/u.length):null,k=(w,I)=>{document.querySelectorAll(`[data-plugins-stat="${w}"]`).forEach(F=>{F.textContent=I})};k("loaded",m),k("running",e),k("paused",n),k("priority",p??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(w=>{w.textContent=m})}function f(d){let{name:m,version:e,description:n,priority:u,enabled:p,is_user:k,file:w}=d,I=`plugin-toggle-${m}`,F=a(u),H=s(u),D=i(d),$=k&&w?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${g(w)}"
            data-plugin-name="${g(m)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${g(m)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${g(m)}">
          <span class="admin-plugins-dot ${p?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${g(m)}</div>
            ${n?`<div class="desc">${g(n)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${e?"v"+g(e):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${F}">${u??"\u2014"}${H?" \xB7 "+H:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${r(D)}">${D}</span>
          <div class="admin-plugins-toggle-cell">
            ${$}
            <label class="admin-plugins-switch" for="${I}">
              <input type="checkbox" id="${I}" role="switch"
                aria-checked="${!!p}" aria-label="Toggle plugin ${g(m)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${g(m)}"
                ${p?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function c(d,m){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:d}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:m}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let n=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:m})}),u=await n.json().catch(()=>({}));if(!n.ok){showToast(u.error||ServerI18n.t("pluginsToastRemoveFailed",{status:n.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:d}),!0),await B()}catch(n){showToast(ServerI18n.t("pluginsToastNetError",{msg:n.message||""}),!1)}}function i(d){let m=d.file||d.path||d.source||"";if(typeof m=="string"){if(m.endsWith(".py"))return"PY";if(m.endsWith(".js"))return"JS"}return(d.language||"PY").toUpperCase()}function a(d){return d==null?"is-muted":d<=10?"is-danger":d<=50?"is-warn":"is-cyan"}function r(d){return d==="JS"?"is-cyan":d==="PY"?"is-warn":"is-muted"}function s(d){return d==null?"":d<=10?"CRITICAL":d<=50?"HIGH":"NORMAL"}function l(d){d.querySelectorAll(".plugin-toggle").forEach(m=>{m.addEventListener("change",async function(){let e=this.dataset.pluginName,n=this.checked;await o(e,n,this)})}),d.querySelectorAll(".plugin-uninstall").forEach(m=>{m.addEventListener("click",function(){c(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function o(d,m,e){let n=m?"/admin/plugins/enable":"/admin/plugins/disable";try{let u=await csrfFetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})});if(!u.ok){let p=await u.json().catch(()=>({}));throw new Error(p.error||`HTTP ${u.status}`)}showToast(m?ServerI18n.t("pluginEnabled").replace("{name}",d):ServerI18n.t("pluginDisabled").replace("{name}",d),!0)}catch(u){console.error(`Failed to ${m?"enable":"disable"} plugin:`,u),showToast(u.message||ServerI18n.t("operationFailed"),!1),e&&(e.checked=!m)}}async function t(){let d=document.getElementById("pluginsReloadBtn");d&&(d.disabled=!0);try{let m=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!m.ok){let e=await m.json().catch(()=>({}));throw new Error(e.error||`HTTP ${m.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await B()}catch(m){console.error("Failed to reload plugins:",m),showToast(m.message||ServerI18n.t("reloadFailed"),!1)}finally{d&&(d.disabled=!1)}}})})()});var pt=me(()=>{(function(){"use strict";let y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},b={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},g=null,h=null;function _(){return g||(g=document.createElement("div"),g.className="admin-pu-backdrop",g.hidden=!0,g.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(g),g.addEventListener("click",a=>{(a.target.matches("[data-pu-close]")||a.target===g)&&i()}),g)}function G(a){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((s,l)=>{let o=l+1,t=o<a,m=t?"is-done":o===a?"is-active":"";return(l>0?`<span class="admin-pu-step-line ${t?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${m}">
          <span class="circle">${t?"\u2713":o}</span>
          <span class="label">${s}</span>
        </div>`}).join("")}function S(a,r){h.step=a;let s=g.querySelector("[data-pu-steps]");s&&(s.innerHTML=G(a));let l=g.querySelector("[data-pu-body]");l&&(l.innerHTML=r)}function A(a){let r=a==="error-type"?ServerI18n.t("pluginsUploadErrorType"):a==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):a==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):a==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),s=(a||"").startsWith("error")?"\u2715":a==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(a||"").startsWith("error")?"is-error":a==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${s}</div>
          <div class="admin-pu-dropzone-msg">${y(r)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py,.js" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function v(){let a=g.querySelector("[data-pu-dropzone]"),r=g.querySelector("[data-pu-file]"),s=g.querySelector("[data-pu-browse]");s&&s.addEventListener("click",()=>r&&r.click()),r&&r.addEventListener("change",()=>{r.files&&r.files[0]&&R(r.files[0])}),a&&(a.addEventListener("click",()=>r&&r.click()),a.addEventListener("dragover",l=>{l.preventDefault(),a.classList.add("is-over")}),a.addEventListener("dragleave",()=>a.classList.remove("is-over")),a.addEventListener("drop",l=>{l.preventDefault(),a.classList.remove("is-over");let o=l.dataTransfer&&l.dataTransfer.files;if(!(!o||o.length===0)){if(o.length>1){S(1,A("error-multi")),v();return}R(o[0])}}))}function R(a){if(!a.name.match(/\.(py|js)$/i)){S(1,A("error-type")),v();return}if(a.size>256*1024){S(1,A("error-size")),v();return}h.file=a,S(2,L(a.name)),E(a)}function L(a){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${y(a)}</div>
      </div>`}async function E(a){try{let r=new FormData;r.append("file",a);let s=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:r}),l=await s.json().catch(()=>({}));if(!s.ok&&!l.validation){window.showToast?.(l.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:s.status}),!1),S(1,A()),v();return}h.manifest=l.manifest||{},h.validation=l.validation||{},h.filename=l.filename||a.name,x(h)}catch(r){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:r.message||""}),!1),S(1,A()),v()}}function x(a){let r=a.manifest||{},s=a.validation||{},l="";if(!s.syntax_ok)l=P(s.syntax_err,a);else if(Object.keys(r).length===0)l=N(a);else{let o=(s.deps||[]).some(t=>t.status==="missing");l=U(r,s,a,o)}S(2,`<div class="admin-pu-step2">${l}</div>`),B()}function P(a,r){let s=a&&a.line?a.line:"?",l=a&&a.msg?a.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${s}</span>
        </div>
        <pre class="admin-pu-syntax-body">${y(`>>> ${r.filename}
${l}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function N(a){return`
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
      </footer>`}function T(a){return a==null?"is-muted":a<=10?"is-danger":a<=50?"is-warn":"is-cyan"}function C(a){if(a==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let r=T(a),s=a<=10?"CRITICAL":a<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${r}">${a} \xB7 ${s}</span>`}function U(a,r,s,l){let o=a.name||s.filename.replace(/\.(py|js)$/i,""),t=a.version?`v${y(a.version)}`:"\u2014",d=a.author?`@${y(a.author.replace(/^@/,""))}`:"\u2014",m=a.description||ServerI18n.t("pluginsUploadNoDescription"),e=s.filename.endsWith(".js")?"JS":"PY",n=e==="PY"?"is-warn":"is-cyan",u=Array.isArray(a.permissions)?a.permissions:[],p=Object.keys(b).map(H=>{let D=u.includes(H);return`
        <div class="admin-pu-perm-row ${D?"is-req":"is-not"}">
          <span class="dot">${D?"\u25CF":"\u25CB"}</span>
          <span class="key">${y(H)}</span>
          <span class="label">${y(ServerI18n.t(b[H]))}</span>
        </div>`}).join(""),k=r.deps||[],w=k.map(H=>{let D=H.status==="ok"?"is-ok":H.status==="warn"?"is-warn":"is-err",$=H.status==="ok"?"\u2713":H.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${D}">
          <span class="dot">${$}</span>
          <span class="name">${y(H.name)}</span>
          <span class="note">${y(H.note||"")}</span>
        </div>`}).join(""),I=r.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${y(o)}</span>`})}
      </div>`:"",F=k.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${w}</div>
      </section>`;return`
      ${I}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${y(o)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${t}</span>
          <span class="author">${d}</span>
          <span class="admin-ui-pill admin-pu-pill ${n}" style="margin-left:auto">${e}</span>
        </div>
        <div class="admin-pu-manifest-desc">${y(m)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${C(a.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${p}</div>
        </section>
        ${F}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${l?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${l?"disabled":""} data-pu-confirm>${l?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function B(){let a=g.querySelector("[data-pu-back]");a&&a.addEventListener("click",()=>{h.file=null,h.manifest=null,h.validation=null,S(1,A()),v()});let r=g.querySelector("[data-pu-confirm]");r&&r.addEventListener("click",()=>O());let s=g.querySelector("[data-pu-no-manifest-ack]");s&&r&&s.addEventListener("change",()=>{r.disabled=!s.checked})}function O(){let a=h.manifest||{},r=a.name||(h.filename||"").replace(/\.(py|js)$/i,""),s=a.version?`v${y(a.version)}`:"\u2014",l=Array.isArray(a.permissions)?a.permissions:[],o=l.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:l.map(m=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${y(m)}</span></div>`).join("");S(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${y(r)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${s}</span>
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
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:a.priority!=null?a.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let t=g.querySelector("[data-pu-install]");t&&t.addEventListener("click",f);let d=g.querySelector("[data-pu-back]");d&&d.addEventListener("click",()=>x(h))}async function f(){S(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let a=new FormData;a.append("file",h.file);let r=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:a}),s=await r.json().catch(()=>({}));if(!r.ok){window.showToast?.(s.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:r.status}),!1),x(h);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:s.name||h.filename}),!0),i();let l=document.getElementById("pluginsReloadBtn");l&&l.click()}catch(a){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:a.message||""}),!1),x(h)}}function c(){_(),h={step:1,file:null,manifest:null,validation:null,filename:null},S(1,A()),v(),g.hidden=!1,document.body.classList.add("admin-pu-open")}function i(){g&&(g.hidden=!0,document.body.classList.remove("admin-pu-open"),h=null)}window.AdminPluginUpload={open:c,close:i},document.addEventListener("click",a=>{a.target.closest("#pluginsUploadBtn")&&(a.preventDefault(),c())})})()});var vt=me(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let b="sec-webhooks",g=12e3,h=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function _(o,t){return o?o.length>t?o.slice(0,t)+"\u2026":o:""}function G(o){if(!o)return"\u2014";try{let t=new Date(o),d=Math.max(0,(Date.now()-t.getTime())/1e3);return d<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(d)}):d<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(d/60)}):d<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(d/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(d/86400)})}catch{return"\u2014"}}function S(o){if(!o)return"\u2014";try{return new URL(o).hostname}catch{return _(o,30)}}function A(o){return o==="active"?"is-success":o==="degraded"?"is-warn":"is-muted"}let v={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:h,eventCatalogLoaded:!1};function R(){let o=document.getElementById("advanced-grid")||document.getElementById("settings-grid");!o||document.getElementById(b)||(o.insertAdjacentHTML("beforeend",`
      <div id="${b}" class="admin-webhooks-page hud-page-stack lg:col-span-2" data-tpl="B">
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
    `),L())}function L(){let o=document.getElementById(b);if(!o)return;let t=document.getElementById("wh-register-form");t&&t.addEventListener("submit",async d=>{d.preventDefault();let m=document.getElementById("wh-url").value.trim();if(!m)return;let e=Array.from(t.querySelectorAll('input[name="wh-event"]:checked')).map(k=>k.value);if(e.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let n=document.getElementById("wh-format").value,u=document.getElementById("wh-secret").value.trim(),p={url:m,events:e,format:n};u&&(p.secret=u);try{let k=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),w=await k.json();k.ok&&w.hook_id?(showToast(ServerI18n.t("webhookRegistered")),t.reset(),C(),t.hidden=!0,await E()):showToast(w.error||ServerI18n.t("registrationFailed"),!1)}catch(k){console.error("Webhook register error:",k),showToast(ServerI18n.t("registrationFailed"),!1)}}),o.querySelectorAll(".admin-ui-page-actions [data-wh-action='show-add']").forEach(d=>d.addEventListener("click",()=>{t&&(t.hidden=!1)})),o.addEventListener("click",d=>{if(d.target.closest("[data-wh-action='show-add']")){t&&(t.hidden=!1);return}if(d.target.closest("[data-wh-action='hide-add']")){t&&(t.hidden=!0);return}let n=d.target.closest("[data-wh-log-filter]");if(n){v.deliveryFilter=n.dataset.whLogFilter,o.querySelectorAll("[data-wh-log-filter]").forEach(D=>{D.classList.toggle("is-active",D.dataset.whLogFilter===v.deliveryFilter)}),c();return}let u=d.target.closest("[data-wh-action='test']");if(u){d.stopPropagation(),r(u.dataset.whHookId);return}let p=d.target.closest("[data-wh-action='settings']");if(p){d.stopPropagation(),i(p.dataset.whHookId);return}if(d.target.closest("[data-wh-action='close-detail']")){v.selectedHookId=null,a(),O();return}let w=d.target.closest("[data-wh-action='detail-ping']");if(w){r(w.dataset.whHookId);return}let I=d.target.closest("[data-wh-action='detail-toggle']");if(I){s(I.dataset.whHookId,I.dataset.whNextEnabled==="1");return}let F=d.target.closest("[data-wh-action='detail-delete']");if(F){l(F.dataset.whHookId);return}let H=d.target.closest("[data-wh-hook-row]");if(H&&!d.target.closest("button")){i(H.dataset.whHookId);return}}),v.stopPoll||(v.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(b)},intervalMs:g,tick:E}))}async function E(){await N(),await Promise.all([x(),P()]),U(),O(),c(),a()}async function x(){try{let t=await(await csrfFetch("/admin/webhooks/list")).json();v.hooks=Array.isArray(t.webhooks)?t.webhooks:[]}catch{v.hooks=[]}}async function P(){try{let o=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!o.ok)return;let t=await o.json();v.deliveries=Array.isArray(t.deliveries)?t.deliveries:[],v.stats=t.stats||null}catch{}}async function N(){if(!v.eventCatalogLoaded)try{let o=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(o.ok){let t=await o.json(),d=Array.isArray(t.events)?t.events:[];d.length&&(v.eventCatalog=d)}}catch{}finally{v.eventCatalogLoaded=!0,C()}}function T(o){let t=o&&o.slug?String(o.slug):"";if(o&&o.labelKey){let u=ServerI18n.t(o.labelKey);return{slug:t,label:u?u+" \xB7 "+t:t,title:u}}let d=o&&o.zh?String(o.zh):"",m=o&&o.en?String(o.en):"",e=window.ServerI18n&&ServerI18n.currentLang||"zh",n=(o&&o[e]?String(o[e]):"")||m||d;return{slug:t,label:n?n+" \xB7 "+t:t,title:d&&m?d+" \xB7 "+m:d||m}}function C(){let o=document.querySelector("[data-wh-register-events]");o&&(o.innerHTML=v.eventCatalog.map(function(t){let d=T(t);if(!d.slug)return"";let m=d.slug==="on_danmu"?" checked":"";return'<label title="'+y(d.title)+'"><input type="checkbox" name="wh-event" value="'+y(d.slug)+'"'+m+" /> "+y(d.label)+"</label>"}).join(""))}function U(){let o=document.querySelector("[data-wh-stats]");if(!o)return;let t=v.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};o.innerHTML=`
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
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel",{n:B()})}</div>
        <div class="v" style="color:${t.dropped_24h>0?"var(--hud-crimson)":"var(--color-text-secondary)"}">${t.dropped_24h}</div>
      </div>`}function B(){return v.hooks.length&&v.hooks[0].retry_count||3}function O(){let o=document.getElementById("wh-list"),t=document.querySelector("[data-wh-count]");if(o){if(t&&(t.textContent=String(v.hooks.length)),v.hooks.length===0){o.innerHTML="";let d=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let m=document.getElementById("wh-register-form");m&&(m.hidden=!1),document.getElementById("wh-url")?.focus()}});d.dataset.emptyKind="webhooks",o.appendChild(d);return}o.innerHTML=v.hooks.map(f).join("")}}function f(o){let t=y(o.id||""),d=Number(o.success_count)||0,m=Number(o.fail_count)||0,e=d+m,n=e>0?Math.round(d/e*1e3)/10:100,u=o.enabled!==!1,p=Number(o.last_status)||null,k=u?p&&p>=400||o.last_error?"degraded":"active":"paused",w=k==="active"?"var(--hud-lime)":k==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",I=k==="active"?"ACTIVE":k==="degraded"?"DEGRADED":"PAUSED",F=v.selectedHookId===o.id?" is-selected":"",H=A(k),D=(o.events||[]).map(function(j){return'<span class="admin-ui-pill admin-wh-evt-chip">'+y(j)+"</span>"}).join(""),$=o.last_error?'<div class="admin-wh-card-warn">\u26A0 '+y(_(o.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${F}" data-wh-hook-row data-wh-hook-id="${t}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${w};box-shadow:${u?"0 0 6px "+w:"none"}"></span>
          <span class="name">${y(S(o.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${H}">${I}</span>
          <span class="last">last \xB7 ${y(G(o.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${y(o.url)}</div>
        <div class="admin-wh-card-events">${D}</div>
        ${$}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${n}%;background:${w}"></div></div>
            <span class="pct" style="color:${w}">${n}%</span>
          </div>
          <span class="counter ok">\u2713 ${d.toLocaleString()}</span>
          <span class="counter ${m>0?"fail":"fail-zero"}">\u2717 ${m}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${t}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${t}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function c(){let o=document.getElementById("wh-log-list");if(!o)return;let t=v.deliveries.filter(function(d){return v.deliveryFilter==="all"?!0:v.deliveryFilter==="failed"?!d.ok:v.deliveryFilter==="2xx"?d.code&&d.code>=200&&d.code<300:v.deliveryFilter==="5xx"?d.code&&d.code>=500:!0});if(t.length===0){o.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}o.innerHTML=t.map(function(d){let m=d.ts?new Date(d.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",e=d.code?String(d.code):"\u2014",n=d.ok?"var(--hud-lime)":"var(--hud-crimson)",u=d.duration_ms?d.duration_ms>=1e3?(d.duration_ms/1e3).toFixed(1)+"s":d.duration_ms+"ms":"\u2014",p=d.ok?"var(--color-text-strong)":"var(--hud-amber)",k=y(S(d.hook_url||"")),w=(d.retries||0)===0?"\u2014":"\xD7"+d.retries,I=(d.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${d.dropped?" is-dropped":""}">
          <span class="time">${y(m)}</span>
          <span class="code" style="color:${n};border-color:${n}55;background:${n}15;">${e}</span>
          <span class="dur" style="color:${p}">${y(u)}</span>
          <span class="ep">${k}</span>
          <span class="evt">${y(d.event||"")}</span>
          <span class="retry" style="color:${I}">${w}</span>
        </div>`}).join("")}function i(o){v.selectedHookId=o,O(),a()}function a(){let o=document.querySelector("[data-wh-detail]");if(!o)return;let t=v.hooks.find(function(k){return k.id===v.selectedHookId});if(!t){o.hidden=!0,o.innerHTML="";return}o.hidden=!1;let d=t.enabled!==!1,m=Number(t.last_status)||null,e=d?m&&m>=400||t.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",n=new Set(t.events||[]),u=v.eventCatalog.map(function(k){let w=T(k),I=n.has(w.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(I?"is-active is-on":"")+'" title="'+y(w.title)+'"><span aria-hidden="true">'+(I?"\u2713":"\u25CB")+"</span><span>"+y(w.label)+"</span></label>"}).join(""),p={event:t.events&&t.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:t.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};o.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+e+";box-shadow:0 0 6px "+e+'"></span><span class="name">'+y(S(t.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+u+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(t.retry_count!=null?t.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(t.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+y(JSON.stringify(p,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+y(t.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+y(t.id)+'" data-wh-next-enabled="'+(d?"0":"1")+'">'+(d?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+y(t.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function r(o){if(o)try{let t=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o})}),d=await t.json();t.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(d.error||ServerI18n.t("testFailed"),!1),setTimeout(E,1500)}catch(t){console.error("Webhook test error:",t),showToast(ServerI18n.t("testFailed"),!1)}}async function s(o,t){if(o)try{let d=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o,enabled:t})}),m=await d.json();if(!d.ok){showToast(m.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let e=v.hooks.find(function(n){return n.id===o});e&&(e.enabled=m.enabled),showToast(m.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),U(),O(),a()}catch(d){console.error("Webhook toggle error:",d),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function l(o){if(!(!o||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let d=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o})}),m=await d.json();d.ok?(showToast(ServerI18n.t("webhookDeleted")),v.selectedHookId===o&&(v.selectedHookId=null),E()):showToast(m.error||ServerI18n.t("deleteFailed"),!1)}catch(d){console.error("Webhook delete error:",d),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(b)&&R()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),R()})})()});var ft=me(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let b="sec-sounds",g=null,h=[],_=[];async function G(){try{let c=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!c.ok)throw new Error(await c.text());let i=await c.json();h=i.sounds||[],_=i.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",h.length||"")}catch(c){console.error("Failed to fetch sounds:",c),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),h=[],_=[]}}async function S(){return G()}async function A(c,i){let a=new FormData;a.append("file",c),a.append("name",i);let r=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:a}),s=await r.json();if(!r.ok)throw new Error(s.error||"Upload failed");return s}async function v(c){let i=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),a=await i.json();if(!i.ok)throw new Error(a.error||"Delete failed");return a}async function R(c){let i=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),a=await i.json();if(!i.ok)throw new Error(a.error||"Failed to add rule");return a}async function L(c){let i=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c})}),a=await i.json();if(!i.ok)throw new Error(a.error||"Failed to delete rule");return a}function E(){let c=document.getElementById("soundsList");if(c){if(h.length===0){c.innerHTML="";var i=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});i.dataset.emptyKind="sounds",i.style.gridColumn="1 / -1",c.appendChild(i);return}c.innerHTML=h.map(function(r){var s=y(r.name),l=Math.round((r.volume!=null?r.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+y(r.name)+'"><div class="name" title="'+s+'">'+s+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+y(r.name)+'" min="0" max="100" step="1" value="'+l+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+y(r.name)+'" style="min-width:32px;text-align:right">'+l+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+y(r.name)+'">'+y(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+y(r.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),c.querySelectorAll(".sound-play-btn").forEach(function(r){r.addEventListener("click",function(){var s=r.dataset.name,l=h.find(function(o){return o.name===s});l&&(g&&(g.pause(),g=null),g=new Audio(l.url),g.volume=.5,g.play().catch(function(o){console.warn("Audio preview failed:",o)}))})}),c.querySelectorAll(".sound-delete-btn").forEach(function(r){r.addEventListener("click",async function(){var s=r.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",s),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await v(s),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",s),!0),await G(),E(),P()}catch(o){window.showToast(o.message,!1)}})});var a={};c.querySelectorAll(".sound-volume-slider").forEach(function(r){var s=r.dataset.name,l=c.querySelector('.sound-volume-label[data-name="'+CSS.escape(s)+'"]');r.addEventListener("input",function(){l&&(l.textContent=r.value+"%"),clearTimeout(a[s]),a[s]=setTimeout(function(){x(s,Number(r.value)/100)},300)}),r.addEventListener("change",function(){clearTimeout(a[s]),x(s,Number(r.value)/100)})})}}async function x(c,i){try{var a=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(c)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:i})}),r=await a.json();if(!a.ok){window.showToast(r.error||"Volume update failed",!1);return}var s=h.find(function(l){return l.name===c});s&&(s.volume=i),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(i*100)}),!0)}catch(l){console.warn("[admin-sounds] volume save failed:",l),window.showToast("Network error",!1)}}function P(){let c=document.getElementById("ruleSoundName");if(!c)return;let i=c.value;if(c.innerHTML="",h.length===0){let a=document.createElement("option");a.value="",a.textContent=ServerI18n.t("noSoundsAvailable"),a.disabled=!0,c.appendChild(a);return}h.forEach(a=>{let r=document.createElement("option");r.value=a.name,r.textContent=a.name,c.appendChild(r)}),i&&[...c.options].some(a=>a.value===i)&&(c.value=i)}function N(){let c=document.getElementById("rulesList");if(c){if(_.length===0){c.innerHTML="";var i=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});i.dataset.emptyKind="sound-rules",c.appendChild(i);return}c.innerHTML=_.map(function(a){var r=a.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):a.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",a.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",a.trigger_value),s=Math.round((a.volume!=null?a.volume:1)*100),l=ServerI18n.t("soundDetailLine").replace("{sound}",a.sound_name).replace("{vol}",s).replace("{cd}",a.cooldown!=null?a.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+y(String(a.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+y(r)+'</div><div class="admin-sounds-rule-detail">'+y(l)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+y(String(a.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),c.querySelectorAll(".sound-rule-del-btn").forEach(function(a){a.addEventListener("click",async function(){try{await L(a.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await S(),N()}catch(r){window.showToast(r.message,!1)}})})}}function T(){let c=document.getElementById("soundUploadBtn");c&&c.addEventListener("click",async()=>{let i=document.getElementById("soundFileInput"),a=document.getElementById("soundNameInput"),r=i.files[0];if(!r){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let s=a.value.trim();if(!s){window.showToast(ServerI18n.t("enterSoundName"),!1);return}c.disabled=!0,c.textContent=ServerI18n.t("uploadingStatus");try{await A(r,s),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",s),!0),i.value="",a.value="",await G(),E(),P()}catch(l){window.showToast(l.message,!1)}finally{c.disabled=!1,c.textContent=ServerI18n.t("soundsUploadIdle")}})}function C(){let c=document.getElementById("addRuleBtn");c&&c.addEventListener("click",async()=>{let i=document.getElementById("ruleTriggerType").value,a=document.getElementById("ruleTriggerValue").value.trim(),r=document.getElementById("ruleSoundName").value,s=document.getElementById("ruleVolume"),l=document.getElementById("ruleCooldown");if(i!=="all"&&!a){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!r){window.showToast(ServerI18n.t("selectSound"),!1);return}let o=parseInt(s.value,10)/100,t=parseInt(l.value,10)||0,d={trigger_type:i,trigger_value:i==="all"?"":a,sound_name:r,volume:Math.max(0,Math.min(1,o)),cooldown:Math.max(0,t)};c.disabled=!0;try{await R(d),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await S(),N()}catch(m){window.showToast(m.message,!1)}finally{c.disabled=!1}})}function U(){let c=document.getElementById("ruleTriggerType"),i=document.getElementById("ruleTriggerValue");if(!c||!i)return;function a(){c.value==="all"?(i.disabled=!0,i.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),i.value=""):c.value==="keyword"?(i.disabled=!1,i.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):c.value==="effect"&&(i.disabled=!1,i.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}c.addEventListener("change",a),a()}function B(){let c=document.getElementById("ruleVolume"),i=document.getElementById("ruleVolumeLabel");!c||!i||c.addEventListener("input",()=>{i.textContent=c.value+"%"})}function O(){return`
      <div id="${b}" class="admin-sounds-page hud-page-stack lg:col-span-2" data-tpl="B">
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
    `}async function f(){let c=document.getElementById("settings-grid");if(c){if(c.insertAdjacentHTML("beforeend",O()),window.AdminSkeletons){let i=document.getElementById("soundsList");i&&(i.innerHTML="",i.appendChild(window.AdminSkeletons.listRows({rows:3})));let a=document.getElementById("rulesList");a&&(a.innerHTML="",a.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([G(),S()]),E(),P(),N(),T(),C(),U(),B()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let c=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&!c&&(c=!0,f().finally(()=>{c=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&(c=!0,f().finally(()=>{c=!1}))})})()});var ht=me(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let b=/^[a-zA-Z0-9_]{1,32}$/,g=".png,.gif,.webp",h="sec-emojis",_=[];function G(){return`
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
    `}function S(B){let O=":"+B.name+":",f=Number(B.used)||0,c=f>0?ServerI18n.t("emojisUsedCount",{n:f}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+R(B.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+R(B.url)+'" alt="'+R(O)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+y(O)+'</div><div class="admin-em-v4__tile-meta">'+y(c)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+R(O)+'" title="'+R(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+R(B.name)+'" title="'+R(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function A(B){let O=document.querySelector("[data-em-quota-label]"),f=document.querySelector("[data-em-quota-fill]");if(!O||!f)return;let c=B.length,i=100;O.textContent=ServerI18n.t("emojisQuotaUsed",{n:c,max:i}),f.style.width=Math.min(100,c/i*100)+"%"}function v(B){let O=document.querySelector("[data-em-preview-body]");if(!O)return;if(!B||B.length===0){O.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let c=B.slice(0,3).map(i=>`<span class="admin-em-v4__preview-pair"><code>:${y(i.name)}:</code> \u2192 <img src="${R(i.url)}" alt=":${R(i.name)}:" /></span>`);O.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:c.join(" \xB7 ")})}function R(B){return y(B)}function L(B){var O=document.getElementById("emojiGrid"),f=document.getElementById("emojiCount");O&&(!B||B.length===0?(window.AdminEmpty?(O.innerHTML="",O.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var c=document.getElementById("emojiFileInput");c&&c.click()}}))):O.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("noEmojisUploaded"))+"</div>",f&&(f.textContent="0")):(O.innerHTML=B.map(S).join(""),f&&(f.textContent=String(B.length))),A(_),v(_))}function E(){var B=document.getElementById("emojiGrid");if(B)if(window.AdminSkeletons){B.innerHTML="";for(var O=0;O<8;O++){var f=document.createElement("div");f.className="admin-em-v4__tile admin-em-v4__tile--skel";var c=document.createElement("div");c.className="admin-em-v4__tile-thumb";var i=document.createElement("div");i.className="admin-skel",i.style.width="100%",i.style.height="100%",c.appendChild(i),f.appendChild(c);var a=document.createElement("div");a.className="admin-skel admin-skel-bar",a.style.width="60%",a.style.height="8px",a.style.margin="6px auto",f.appendChild(a),B.appendChild(f)}}else B.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadingEmojis"))+"</div>"}async function x(){try{var B=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!B.ok)throw new Error("HTTP "+B.status);var O=await B.json();_=O.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",_.length||""),P()}catch(c){console.error("[admin-emojis] fetch failed:",c);var f=document.getElementById("emojiGrid");f&&(f.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function P(){var B=document.getElementById("emojiSearchInput"),O=(B&&B.value||"").trim().toLowerCase(),f=O?_.filter(function(c){return(c.name||"").toLowerCase().includes(O)}):_;L(f)}async function N(){var B=document.getElementById("emojiNameInput"),O=document.getElementById("emojiFileInput"),f=document.getElementById("emojiUploadBtn");if(!(!B||!O||!f)){var c=B.value.trim(),i=O.files&&O.files[0];if(!c){showToast(ServerI18n.t("emojiNameRequired"),!1),B.focus();return}if(!b.test(c)){showToast(ServerI18n.t("emojiNameInvalid"),!1),B.focus();return}if(!i){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var a=i.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(a)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}f.disabled=!0,f.textContent=ServerI18n.t("uploadingStatus");try{var r=new FormData;r.append("name",c),r.append("emojifile",i);var s=await csrfFetch("/admin/emojis/upload",{method:"POST",body:r}),l=await s.json();s.ok?(showToast(l.message||ServerI18n.t("emojiUploadFallback")),B.value="",O.value="",await x()):showToast(l.error||ServerI18n.t("uploadFailed"),!1)}catch(o){console.error("[admin-emojis] upload error:",o),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{f.disabled=!1,f.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function T(B){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",B),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var f=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:B})}),c=await f.json();f.ok?(showToast(c.message||ServerI18n.t("emojiDeleteFallback")),await x()):showToast(c.error||ServerI18n.t("deleteFailed"),!1)}catch(i){console.error("[admin-emojis] delete error:",i),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function C(B){try{await navigator.clipboard.writeText(B),showToast(ServerI18n.t("copiedLabel").replace("{label}",B))}catch{var O=document.createElement("textarea");O.value=B,O.style.position="fixed",O.style.opacity="0",document.body.appendChild(O),O.select(),document.execCommand("copy"),document.body.removeChild(O),showToast(ServerI18n.t("copiedLabel").replace("{label}",B))}}function U(){var B=document.getElementById("settings-grid");if(B){B.insertAdjacentHTML("beforeend",G());var O=document.getElementById("emojiUploadBtn");O&&O.addEventListener("click",N);var f=document.getElementById("emojiNameInput");f&&f.addEventListener("keydown",function(s){s.key==="Enter"&&(s.preventDefault(),N())});var c=document.getElementById("emojiSearchInput");c&&c.addEventListener("input",P);var i=document.getElementById("emojiGrid");i&&i.addEventListener("click",function(s){var l=s.target.closest(".emoji-copy-btn");if(l){C(l.dataset.label);return}var o=s.target.closest(".emoji-delete-btn");o&&T(o.dataset.name)});var a=document.querySelector("[data-em-dropzone]"),r=document.getElementById("emojiFileInput");a&&r&&(["dragenter","dragover"].forEach(function(s){a.addEventListener(s,function(l){l.preventDefault(),a.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(s){a.addEventListener(s,function(l){l.preventDefault(),a.classList.remove("is-dragover")})}),a.addEventListener("drop",function(s){var l=s.dataTransfer&&s.dataTransfer.files&&s.dataTransfer.files[0];if(l){var o=new DataTransfer;o.items.add(l),r.files=o.files;var t=document.getElementById("emojiNameInput");if(t&&!t.value){var d=l.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");t.value=d.slice(0,32),t.focus()}a.classList.add("is-dropping"),setTimeout(function(){a.classList.remove("is-dropping")},1200)}})),E(),x()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var B=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&U()});B.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&U()}})})()});var gt=me(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml,b="sec-stickers",g=["png","gif","webp"],h=".gif,.png,.webp",_="__all__",G=[],S=[],A=_;function v(c){return y(c)}function R(){var c=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,i=c?`
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
      <div id="${b}" class="admin-stickers-page hud-page-stack lg:col-span-2" data-tpl="B">
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
            ${c?`<div class="admin-ui-card">${i}</div>`:""}

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
    `}function L(c){return c===_?G.length:G.filter(function(i){return i.pack_id===c}).length}function E(){var c=document.getElementById("stickerPackList");if(c){var i='<button type="button" class="admin-stickers-pack'+(A===_?" is-active":"")+'" data-pack="'+_+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+L(_)+"</span></button>";S.forEach(function(a){var r=a.enabled?"is-success":"is-muted",s="admin-stickers-pack"+(a.id===A?" is-active":""),l=a.id==="default",o=l?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+v(a.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+v(a.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+v(a.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+v(a.id)+'" title="'+(a.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(a.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+v(a.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";i+='<div class="'+s+'" data-pack="'+v(a.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+v(a.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+r+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+y(a.name)+'</span><span class="admin-stickers-pack-count">'+L(a.id)+"</span></button>"+o+"</div>"}),c.innerHTML=i}}function x(c){var i=":"+c.name+":";return'<div class="admin-stickers-tile"><img src="'+v(c.url)+'" alt="'+v(i)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+v(i)+'">'+y(i)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+v(i)+'" title="'+v(ServerI18n.t("copyToClipboard"))+'">'+y(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+v(c.name)+'" title="'+v(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function P(){var c=document.getElementById("stickerGrid"),i=document.getElementById("stickerCount");if(c){var a=document.getElementById("stickerSearchInput"),r=(a&&a.value||"").trim().toLowerCase(),s=G.filter(function(o){return!(A!==_&&o.pack_id!==A||r&&!(o.name||"").toLowerCase().includes(r))});if(s.length===0){c.innerHTML="";var l=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});l.dataset.emptyKind="stickers",l.style.gridColumn="1 / -1",c.appendChild(l),i&&(i.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}c.innerHTML=s.map(x).join(""),i&&(i.textContent=ServerI18n.t("stickersItemCount",{n:s.length}))}}async function N(){var c=document.getElementById("stickerGrid");if(c)try{var[i,a]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!i.ok)throw new Error("HTTP "+i.status);G=(await i.json()).stickers||[],S=a.ok?(await a.json()).packs||[]:[],A!==_&&!S.some(function(r){return r.id===A})&&(A=_),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",S.length?ServerI18n.t("tabCountPacks",{n:S.length}):""),E(),P()}catch(r){console.error("[admin-stickers] fetch failed:",r),c.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function T(c,i){if(c==="select"){A=i,E(),P();return}if(c==="rename"){var a=S.find(function(k){return k.id===i}),r=prompt(ServerI18n.t("stickersPackNamePrompt"),a?a.name:"");if(!r)return;try{var s=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(i)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r})}),l=await s.json();s.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await N()):window.showToast(l.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="toggle"){try{var o=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(i)+"/toggle",{method:"POST"});o.ok&&await N()}catch{}return}if(c==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var t=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(i),{method:"DELETE"}),d=await t.json();t.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),A===i&&(A=_),await N()):window.showToast(d.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="up"||c==="down"){var m=S.slice().sort(function(k,w){return(k.order||0)-(w.order||0)}),e=m.findIndex(function(k){return k.id===i});if(e<0)return;var n=c==="up"?e-1:e+1;if(n<0||n>=m.length)return;var u=m[e],p=m[n];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(u.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:p.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(p.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:u.order||0})})]),await N()}catch{}}}async function C(){var c=prompt(ServerI18n.t("stickersNewPackPrompt"));if(c)try{var i=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),a=await i.json();i.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),A=a.pack&&a.pack.id?a.pack.id:A,await N()):window.showToast(a.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function U(){var c=document.getElementById("stickerFileInput"),i=document.getElementById("stickerUploadBtn");if(!(!c||!i)){var a=c.files&&c.files[0];if(!a){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var r=a.name.split(".").pop().toLowerCase();if(g.indexOf(r)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}i.disabled=!0;var s=i.textContent;i.textContent=ServerI18n.t("uploadingStatus");try{var l=new FormData;l.append("file",a),A&&A!==_&&l.append("pack_id",A);var o=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:l}),t=await o.json();o.ok?(window.showToast(t.message||ServerI18n.t("stickerUploadFallback")),c.value="",await N()):window.showToast(t.error||ServerI18n.t("uploadFailed"),!1)}catch(d){console.error("[admin-stickers] upload error:",d),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{i.disabled=!1,i.textContent=s}}}async function B(c){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",c),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var a=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(c),{method:"DELETE"}),r=await a.json();a.ok?(window.showToast(r.message||ServerI18n.t("stickerDeleteFallback")),await N()):window.showToast(r.error||ServerI18n.t("deleteFailed"),!1)}catch(s){console.error("[admin-stickers] delete error:",s),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function O(c){try{await navigator.clipboard.writeText(c),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}catch{var i=document.createElement("textarea");i.value=c,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}}function f(){var c=document.getElementById("settings-grid");if(c){c.insertAdjacentHTML("beforeend",R());var i=document.getElementById("stickerUploadBtn");i&&i.addEventListener("click",U);var a=document.getElementById("stickerPackAddBtn");a&&a.addEventListener("click",C);var r=document.getElementById("stickerSearchInput");r&&r.addEventListener("input",P);var s=document.getElementById("stickerPackList");s&&s.addEventListener("click",function(o){var t=o.target.closest("[data-pack-action]");if(!t){var d=o.target.closest("[data-pack]");d&&T("select",d.dataset.pack);return}var m=t.dataset.packAction,e=t.dataset.packId;m==="select"&&!e&&(e=t.closest("[data-pack]")&&t.closest("[data-pack]").dataset.pack),T(m,e)});var l=document.getElementById("stickerGrid");l&&l.addEventListener("click",function(o){var t=o.target.closest(".sticker-copy-btn");if(t){O(t.dataset.label);return}var d=o.target.closest(".sticker-delete-btn");d&&B(d.dataset.name)}),N()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&f()});c.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&f()}})})()});var yt=me(()=>{(function(){"use strict";let y="sec-extensions-overview",b=window.AdminUtils.escapeHtml,g=15e3,h=[{id:"slido",name:"Slido Extension",version:"v0.2.0",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload",href:"/static/extensions/danmu-slido-extension-0.2.0.zip"},{kind:"config",labelKey:"extSlidoStepConfig"}]},hasFireTokenUI:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],_={fireToken:null,plainToken:null,sources:[],sourcesTimer:0};function G(){return`
      <div id="${y}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${h.map(S).join("")}
        </div>
      </div>`}function S(T){let C=T.status==="ready",U="is-cold",B=C?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,O=C&&T.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${T.install.steps.map(c=>c.kind==="download"?`<li><a class="admin-ext-step-link" href="${c.href}" target="_blank" rel="noopener noreferrer">${b(ServerI18n.t(c.labelKey))} \u2193</a></li>`:`<li>${b(ServerI18n.t(c.labelKey))}</li>`).join("")}
          </ol>
        </div>`:"",f=T.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
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
      <article class="admin-ext-card" data-ext="${T.id}">
        <div class="admin-ext-head">
          <span class="admin-ext-status-dot ${U}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${T.color}">${T.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${b(T.name)}</div>
            <div class="meta"><span class="ver">${b(T.version)}</span></div>
          </div>
          ${B}
        </div>
        <p class="admin-ext-desc">${b(ServerI18n.t(T.descKey))}</p>
        ${O}
        ${f}
      </article>`}async function A(){try{let T=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!T.ok)return;_.fireToken=await T.json(),x()}catch{}}async function v(){try{let T=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!T.ok)return;let C=await T.json();_.sources=Array.isArray(C.sources)?C.sources:[],P()}catch{}}async function R(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let C=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!C.ok)throw new Error("HTTP "+C.status);let U=await C.json();_.fireToken={enabled:U.enabled,prefix:U.prefix,has_token:!0,rotated_at:U.rotated_at},_.plainToken=U.token,x(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenGenerated"),!0),E(U.token)}catch(C){console.warn("[ext] regen failed:",C),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function L(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let C=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!C.ok)throw new Error("HTTP "+C.status);_.fireToken=await C.json(),_.plainToken=null,x(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(C){console.warn("[ext] revoke failed:",C),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function E(T){if(T)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(T).catch(()=>{});else{let C=document.createElement("textarea");C.value=T,C.style.position="fixed",C.style.opacity="0",document.body.appendChild(C),C.select();try{document.execCommand("copy")}catch{}document.body.removeChild(C)}}function x(){let T=document.querySelector("[data-fire-token-display]"),C=document.querySelector('[data-fire-token-action="copy"]'),U=document.querySelector('[data-fire-token-action="regen"]'),B=document.querySelector('[data-fire-token-action="revoke"]');if(!T)return;let O=_.fireToken;_.plainToken?(T.textContent=_.plainToken,T.classList.add("is-plain")):O&&O.has_token?(T.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:O.prefix||""}),T.classList.remove("is-plain")):(T.textContent=ServerI18n.t("extTokenNotSetHint"),T.classList.remove("is-plain")),C&&(C.disabled=!_.plainToken),U&&(U.textContent=O&&O.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),B&&(B.disabled=!(O&&O.has_token))}function P(){let T=new Set(_.sources.map(C=>C.source));document.querySelectorAll(".admin-ext-card").forEach(C=>{let U=h.find(f=>f.id===C.dataset.ext);if(!U)return;let B=C.querySelector("[data-ext-dot]");if(!B)return;let O=U.sourceMatch&&T.has(U.sourceMatch);B.classList.toggle("is-live",!!O),B.classList.toggle("is-cold",!O)})}function N(){let T=document.getElementById("settings-grid");if(!T||document.getElementById(y))return;T.insertAdjacentHTML("beforeend",G());let C=document.getElementById(y);C&&C.addEventListener("click",U=>{let B=U.target.closest("[data-fire-token-action]");if(!B)return;let O=B.dataset.fireTokenAction;O==="regen"?R():O==="revoke"?L():O==="copy"&&_.plainToken&&(E(_.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),A(),_.stopPoll||(_.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(y)},intervalMs:g,tick:v}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&N()})})()});var bt=me(()=>{(function(){"use strict";let y="sec-firetoken-overview",b=window.AdminUtils.escapeHtml,g=15e3,h={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function _(){return`
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
    `}async function G(){await Promise.all([S(),A(),v()])}async function S(){try{let f=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!f.ok)return;h.token=await f.json(),N()}catch{}}async function A(){try{let f=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!f.ok)return;let c=await f.json();h.usage24h=Array.isArray(c.usage_24h)?c.usage_24h:[],h.ips=Array.isArray(c.ips)?c.ips:[],C(),U(),T()}catch{}}async function v(){try{let f=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!f.ok)return;let c=await f.json();h.audit=Array.isArray(c.events)?c.events:[],B()}catch{}}async function R(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);let i=await c.json();h.token={enabled:i.enabled,prefix:i.prefix,has_token:!0,rotated_at:i.rotated_at,created_at:i.created_at||i.rotated_at},h.plainToken=i.token,N(),E(i.token),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerated"),!0),v()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function L(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);h.token=await c.json(),h.plainToken=null,N(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),v()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function E(f){if(f)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(f).catch(()=>{});else{let c=document.createElement("textarea");c.value=f,c.style.position="fixed",c.style.opacity="0",document.body.appendChild(c),c.select();try{document.execCommand("copy")}catch{}document.body.removeChild(c)}}function x(f){if(!f)return"\u2014";let c=Date.now()/1e3-f;return c<60?ServerI18n.t("firetokenJustNow"):c<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(c/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(c/86400)})}function P(f){if(!f)return"\u2014";try{return new Date(f*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function N(){let f=h.token,c=document.querySelector("[data-ft-token-display]"),i=document.querySelector("[data-ft-status]"),a=document.querySelector('[data-ft-action="copy"]'),r=document.querySelector('[data-ft-action="regen"]'),s=document.querySelector('[data-ft-action="revoke"]'),l=document.querySelector('[data-ft-stat="created"]'),o=document.querySelector('[data-ft-stat="rotated"]'),t=document.getElementById("adminFtCurl");if(c&&(h.plainToken?(c.textContent=h.plainToken,c.classList.add("is-plain")):f&&f.has_token?(c.textContent=(f.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",c.classList.remove("is-plain")):(c.textContent=ServerI18n.t("firetokenNotSetHint"),c.classList.remove("is-plain")),i&&(f&&f.enabled&&f.has_token?(i.textContent=ServerI18n.t("firetokenStatusHealthy"),i.className="admin-ft-status is-good"):f&&f.has_token?(i.textContent=ServerI18n.t("firetokenStatusDisabled"),i.className="admin-ft-status is-warn"):(i.textContent=ServerI18n.t("firetokenStatusUnset"),i.className="admin-ft-status is-muted")),a&&(a.disabled=!h.plainToken),s&&(s.disabled=!(f&&f.has_token)),r&&(r.textContent=f&&f.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),l&&(l.textContent=f?P(f.created_at):"\u2014"),o&&(o.textContent=f?x(f.rotated_at):"\u2014"),t)){let d=h.plainToken?h.plainToken:f&&f.prefix?f.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";t.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${d}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function T(){let f=h.usage24h.map(l=>Number(l)||0),c=f.reduce((l,o)=>l+o,0),i=f.length?Math.max(...f):0,a=document.querySelector('[data-ft-stat="hits"]'),r=document.querySelector('[data-ft-stat="peak"]'),s=document.querySelector("[data-ft-peak-meta]");a&&(a.textContent=c.toLocaleString()),r&&(r.textContent=i.toLocaleString()),s&&(s.textContent=ServerI18n.t("firetokenPeakMeta",{peak:i.toLocaleString()}))}function C(){let f=document.getElementById("adminFtChart24h");if(!f)return;let c=h.usage24h.map(s=>Number(s)||0);if(!c.length){f.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let i=Math.max(...c),a=12e3,r=i>0?Math.min(100,a/Math.max(i,a)*100):100;f.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${c.map((s,l)=>{let o=i>0?Math.max(2,s/i*100):2;return`<div class="bar ${i>0&&s===i?"is-peak":""}" style="height:${o}%" title="${l.toString().padStart(2,"0")}:00 \u2014 ${s}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(s=>`<span>${String(s).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function U(){let f=document.getElementById("adminFtIps"),c=document.querySelector("[data-ft-ip-count]");if(!f)return;let i=h.ips||[];if(c&&(c.textContent=i.length?`${i.length} IP`:"\u2014"),!i.length){f.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let a=i[0]?.ip;f.innerHTML=i.map((r,s)=>{let l=s===0,o=r.source==="web"&&(r.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${l?"is-top":""}">
          <span class="ip">${b(r.ip||"?")}</span>
          ${l?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${o?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${b(r.source||"\u2014")}</span>
          <span class="cnt">${r.count||0} hits</span>
          <span class="when">${x(r.last_seen)}</span>
        </div>`}).join("")}function B(){let f=document.getElementById("adminFtAudit");if(!f)return;let c=h.audit||[];if(!c.length){f.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let i={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},a={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};f.innerHTML=c.map(r=>{let s=a[r.kind]||"is-info",l=i[r.kind]||r.kind,o=r.meta||{},t=o.prefix?` \xB7 prefix=${b(o.prefix)}`:o.enabled!=null?` \xB7 enabled=${o.enabled}`:"";return`
        <div class="admin-ft-audit-row ${s}">
          <span class="ts">${P(r.ts)}</span>
          <span class="kind">${b(l)}</span>
          <span class="detail">${t}</span>
        </div>`}).join("")}function O(){let f=document.getElementById("settings-grid");if(!f||document.getElementById(y))return;f.insertAdjacentHTML("beforeend",_());let c=document.getElementById(y);c&&c.addEventListener("click",i=>{let a=i.target.closest("[data-ft-action]");if(!a)return;let r=a.dataset.ftAction;r==="regen"?R():r==="revoke"?L():r==="copy"&&h.plainToken&&(E(h.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),h.stopPoll||(h.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(y),intervalMs:g,tick:G}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&O()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&O()})})()});var wt=me(()=>{(function(){"use strict";let y="sec-about-overview",b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(B){return String(B).replace(/[&<>"']/g,function(O){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[O]})},g="Danmu Fire",h="https://github.com/guan4tou2/danmu-desktop",_=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],G=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],S="danmu.about.lastUpdateCheck",A={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function v(){return`
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
                <span class="v" style="grid-column: span 2" data-about-admin-url>${b(location.origin+"/admin/")}</span>
              </div>
            </div>
          </article>

          <article class="admin-about-changelog">
            <div class="admin-about-changelog-head">
              <span class="admin-ui-monolabel">${ServerI18n.t("uiSectionChangelog")}</span>
              <a class="admin-about-changelog-more" href="${h}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${_.slice(0,4).map(B=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${b(B.v)}</span>
                  ${B.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${b(B.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${B.notes.slice(0,3).map(O=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${b(O.t)}">${b(O.t.toUpperCase())}</span>
                      <span class="msg">${b(O.l)}</span>
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
              ${G.slice(0,6).map(B=>`
                <div class="admin-about-oss-row">
                  <span class="n">${b(B.n)}</span>
                  <span class="v">${b(B.v)}</span>
                  <span class="l">${b(B.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function R(B){if(!B||B<0)return"\u2014";let O=Math.floor(B/86400),f=Math.floor(B%86400/3600),c=Math.floor(B%3600/60);return O>0?`${O}d ${f}h`:f>0?`${f}h ${c}m`:`${c}m`}function L(){let B=document.querySelector("[data-about-tag]"),O=document.querySelector("[data-about-build]"),f=document.querySelector("[data-about-uptime]"),c=document.querySelector("[data-about-update]"),i=document.querySelector("[data-about-checked]"),a=document.querySelector("[data-about-env]"),r=document.querySelector("[data-about-ws-path]");if(B&&(B.textContent=`v${A.appVersion}`),O){let s=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";O.textContent=`BUILD \xB7 ${s} \xB7 stable channel`,a&&(a.textContent=s)}if(f){let s=A.serverStartedAt?A.serverTime-A.serverStartedAt:0;f.textContent=R(s)}if(c&&(A.isLatest===!0?c.textContent=ServerI18n.t("aboutIsLatestYes"):A.isLatest===!1?c.textContent=ServerI18n.t("aboutHasNewVersion",{v:A.latestVersion||""}):c.textContent="\u2014",c.style.color=A.isLatest===!0?"var(--hud-lime)":A.isLatest===!1?"var(--hud-amber)":""),i&&(i.textContent=A.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:E(A.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),r){let s=window.DANMU_CONFIG||{};r.textContent=s.wsPath||"/ws"}}function E(B){let O=Number(B)||0;if(!O)return"\u2014";let f=String(O).length>12?O:O*1e3,c=(Date.now()-f)/1e3;return c<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(c)}):c<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(c/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(c/86400)})}function x(B,O){let f=r=>String(r||"").replace(/^v/i,"").split("-")[0].split(".").map(function(s){return parseInt(s,10)||0}),c=f(B),i=f(O),a=Math.max(c.length,i.length);for(let r=0;r<a;r++){let s=c[r]||0,l=i[r]||0;if(s>l)return!0;if(s<l)return!1}return!1}async function P({silent:B}={}){B||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let O=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!O.ok)throw new Error("HTTP "+O.status);let c=((await O.json()).tag_name||"").replace(/^v/i,"");A.latestVersion=c,A.lastCheckedAt=Date.now(),A.isLatest=!x(c,A.appVersion);try{localStorage.setItem(S,JSON.stringify({ts:A.lastCheckedAt,latest:c,isLatest:A.isLatest}))}catch{}L(),B||window.showToast&&window.showToast(A.isLatest?ServerI18n.t("aboutToastLatest",{v:A.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:c}),!0)}catch(O){B||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:O.message||""}),!1)}}function N(){try{let B=localStorage.getItem(S);if(!B)return;let O=JSON.parse(B);A.latestVersion=O.latest,A.lastCheckedAt=Number(O.ts)||0,A.isLatest=!!O.isLatest}catch{}}async function T(){try{let B=await fetch("/admin/metrics",{credentials:"same-origin"});if(!B.ok)return;let O=await B.json();A.serverStartedAt=Number(O.server_started_at)||0,A.serverTime=Number(O.server_time)||Date.now()/1e3,L()}catch{}}function C(){let B=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",O=A.serverStartedAt?A.serverTime-A.serverStartedAt:0,f=(navigator.userAgent||"").slice(0,200),c=[`${g} v${A.appVersion}`,`Channel: ${B}`,`Uptime: ${R(O)}`,`User-Agent: ${f}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(c).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function U(){let B=document.getElementById("settings-grid");if(!B||document.getElementById(y))return;B.insertAdjacentHTML("beforeend",v()),A.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",N(),L();let O=document.getElementById(y);O&&O.addEventListener("click",function(f){let c=f.target.closest("[data-about-action]");if(!c)return;let i=c.dataset.aboutAction;i==="copy"?C():i==="check-update"?P({silent:!1}):i==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():i==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),T(),setInterval(T,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&U()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&U()})})()});var St=me(()=>{(function(){"use strict";let y="admin-setup-wizard-root",b="danmu.setupWizard.completed",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(m){return String(m).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})},h=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],_=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function G(m){return m?m.label?m.label:m.labelKey?ServerI18n.t(m.labelKey):m.name||m.id||"\u2014":"\u2014"}function S(m){return m?m.descriptionKey?ServerI18n.t(m.descriptionKey):m.description||"":""}let A={open:!1,step:0,themes:_.slice(),activeTheme:_[0].name,selectedTheme:_[0].name,serverName:"Danmu Fire",publicUrl:"",moderationRules:[{id:"sensitive",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",enabled:!0},{id:"rate-limit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",enabled:!0},{id:"fingerprint",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",enabled:!0}]};function v(){A.serverName="Danmu Fire",A.publicUrl=window.location.origin+"/"}function R(){let m=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";m==="setup"&&!A.open?L():m!=="setup"&&A.open&&E({silent:!0})}function L(){A.open=!0,A.step=0,v(),document.body.dataset.setupWizardOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",x()),i()),s(),P()}function E(m){let e=m&&m.silent;A.open=!1,document.body.dataset.setupWizardOpen="";let n=document.getElementById(y);if(n&&n.remove(),!e&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function x(){return`
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
            ${h.map(function(m,e){return`
                <div class="admin-setup-step" data-step-index="${e}">
                  <span class="bullet">${e+1}</span>
                  <span class="lbl">${g(ServerI18n.t(m.labelKey))}</span>
                </div>
                ${e<h.length-1?'<span class="admin-setup-step-sep"></span>':""}
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
      </div>`}function P(){let m=document.getElementById(y);if(!m)return;m.querySelectorAll(".admin-setup-step").forEach(function(I,F){I.classList.toggle("is-done",F<A.step),I.classList.toggle("is-active",F===A.step)}),m.querySelectorAll(".admin-setup-step-sep").forEach(function(I,F){I.classList.toggle("is-done",F<A.step)});let e=m.querySelector("[data-setup-meta]");e&&(e.textContent=ServerI18n.t("setupWizardStepMeta",{current:A.step+1,total:h.length}));let n=m.querySelector('[data-setup-action="prev"]');n&&(n.disabled=A.step===0);let u=m.querySelector('[data-setup-action="next"]');if(u){let I=h[A.step].id;u.textContent=ServerI18n.t("setupWizardNext")}let p=m.querySelector("[data-setup-foot]");p&&(p.hidden=h[A.step].id==="done");let k=m.querySelector("[data-setup-content]");if(!k)return;let w=h[A.step].id;w==="server"?k.innerHTML=T():w==="moderation"?k.innerHTML=U():w==="theme"?k.innerHTML=f():k.innerHTML=c(),r(w)}function N(m,e,n){return`
      <div class="admin-setup-field">
        <label class="admin-setup-field-label" for="setup-field-${m}">${g(e)}</label>
        <input
          id="setup-field-${m}"
          class="admin-setup-input"
          data-setup-field="${m}"
          value="${g(n)}"
          readonly
        />
      </div>`}function T(){return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardStepServer")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardServerDesc")}</p>
        <div class="admin-setup-server-fields">
          ${N("public-url",ServerI18n.t("setupWizardPublicUrlLabel"),A.publicUrl)}
          ${N("server-name",ServerI18n.t("setupWizardServerNameLabel"),A.serverName)}
        </div>
      </div>`}function C(m,e,n,u){return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${g(m)}</h2>
        <p class="admin-setup-step-desc">${g(e)}</p>
        <div class="admin-setup-toggle-list">
          ${n.map(function(p){return`
              <button
                type="button"
                class="admin-setup-toggle-row${p.enabled?" is-on":""}"
                ${u}="${g(p.id)}"
                aria-pressed="${p.enabled?"true":"false"}"
              >
                <span class="admin-setup-toggle-body">
                  <span class="admin-setup-toggle-title">${g(ServerI18n.t(p.labelKey))}</span>
                  <span class="admin-setup-toggle-desc">${g(ServerI18n.t(p.descKey))}</span>
                </span>
                <span class="admin-setup-toggle-switch${p.enabled?" is-on":""}">
                  <span class="thumb"></span>
                </span>
              </button>`}).join("")}
        </div>
      </div>`}function U(){return C(ServerI18n.t("setupWizardStepModeration"),ServerI18n.t("setupWizardModerationDesc"),A.moderationRules,"data-setup-moderation-toggle")}let B=["default","neon","retro","cinema"];function O(){let m={};return(A.themes||[]).forEach(function(e){m[e.name||e.id]=e}),B.map(function(e){let n=_.filter(function(p){return p.name===e})[0],u=m[e];return n?{name:e,label:u&&u.label,labelKey:n.labelKey,descriptionKey:n.descriptionKey,colors:n.colors}:u}).filter(Boolean)}function f(){let m=O();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${m.map(function(e){let n=e.name||e.id||"",u=(A.selectedTheme||A.activeTheme)===n,p=(e.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${u?" is-selected":""}" data-setup-theme="${g(n)}">
                ${u?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${p.map(function(k,w){let I=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${g(k)};font-size:${10+w*2}px;text-shadow:0 0 6px ${g(k)}66;">${I[w]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${g(G(e))}</div>
                <div class="admin-setup-theme-sub">${g(S(e))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function c(){let m=(function(){for(let n=0;n<A.themes.length;n+=1){let u=A.themes[n];if((u.name||u.id)===(A.selectedTheme||A.activeTheme))return G(u)}return A.selectedTheme||A.activeTheme||"\u2014"})(),e=A.moderationRules.filter(function(n){return n.enabled}).length;return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${g(A.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${g(m)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepModeration")}</span><span class="v">${ServerI18n.t("setupWizardEnabledCount",{n:e,total:A.moderationRules.length})}</span></div>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function i(){let m=document.getElementById(y);m&&m.addEventListener("click",function(e){if(e.target===m){E();return}let n=e.target.closest("[data-setup-action]");if(n){if(n.dataset.setupAction==="close"){E();return}if(n.dataset.setupAction==="prev"&&A.step>0){A.step-=1,P();return}n.dataset.setupAction==="next"&&o()}})}function a(m,e){return m.map(function(n){return n.id===e?Object.assign({},n,{enabled:!n.enabled}):n})}function r(m){let e=document.getElementById(y);if(e){if(m==="moderation"){e.querySelectorAll("[data-setup-moderation-toggle]").forEach(function(n){n.addEventListener("click",function(){A.moderationRules=a(A.moderationRules,n.dataset.setupModerationToggle),P()})});return}if(m==="theme"){e.querySelectorAll("[data-setup-theme]").forEach(function(n){n.addEventListener("click",function(){A.selectedTheme=n.dataset.setupTheme||A.selectedTheme,P()})});return}if(m==="done"){let n=e.querySelector("[data-setup-complete-cta]");n&&n.addEventListener("click",t)}}}async function s(){try{let m=await fetch("/admin/themes",{credentials:"same-origin"});if(!m.ok)return;let e=await m.json(),n=Array.isArray(e.themes)?e.themes:[];if(!n.length)return;A.themes=n.map(function(u){return{name:u.name||u.id||"",label:u.label||u.display_name||u.name||"",description:u.description||"",colors:u.preview_colors||u.colors||u.palette||_[0].colors}}),A.activeTheme=e.active||A.themes[0]&&A.themes[0].name||A.activeTheme,A.selectedTheme||(A.selectedTheme=A.activeTheme),A.open&&h[A.step].id==="theme"&&P()}catch{}}async function l(){if(!A.selectedTheme||A.selectedTheme===A.activeTheme)return!0;try{let m=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A.selectedTheme})});if(!m.ok)throw new Error("HTTP "+m.status);return A.activeTheme=A.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function o(){if(!(h[A.step].id==="theme"&&!await l())){if(A.step<h.length-1){A.step+=1,P();return}t()}}function t(){try{localStorage.setItem(b,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),E()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}L()},close:function(){E()},isCompleted:function(){try{return!!localStorage.getItem(b)}catch{return!1}},__setCapabilityForTest:function(){}};function d(){window.addEventListener("hashchange",R),R()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&d()})})()});var It=me(()=>{(function(){"use strict";let y="sec-poll-deepdive-overview",b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(T){return String(T).replace(/[&<>"']/g,function(C){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[C]})},g={poll:null,refreshTimer:0};function h(){return`
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
      </div>`}function _(T){if(T.innerHTML="",!window.AdminEmpty){T.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let C=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});C.classList.add("lg:col-span-2"),C.dataset.emptyKind="poll-deepdive",T.appendChild(C)}let G=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function S(T){return T?new Date(T*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function A(T){if(!T||T.length<2)return"";let C=Math.max.apply(null,T.map(function(c){return c.n}).concat([1])),U=100,B=32,O=U/(T.length-1),f=T.map(function(c,i){let a=(i*O).toFixed(2),r=(B-c.n/C*(B-2)-1).toFixed(2);return a+","+r});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+U+" "+B+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+f.join(" ")+'" /></svg>'}function v(T){let C=T.state||(T.active?"active":"ended"),U=T.question||"\u2014",B=Array.isArray(T.options)?T.options:[],O=function(m){return Number(m.votes!=null?m.votes:m.count)||0},f=B.reduce(function(m,e){return m+O(e)},0),c=C==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:S(T.ended_at)}),i=(function(){let m=Number(T.started_at)||0;if(!m)return"\u2014";let e=C==="active"?Date.now()/1e3:Number(T.ended_at)||m,n=Math.max(0,Math.floor(e-m));return Math.floor(n/60)+":"+String(n%60).padStart(2,"0")})(),a=Number(window._lastOverlayCount)||0,r=a>0?Math.round(f/a*100)+"%":"\u2014",s=a>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:f,audience:a}):ServerI18n.t("pollDeepdiveParticipationUnknown"),l=(function(){let m=Array.isArray(T.questions)?T.questions:[],e=0;for(let n of m)e+=Number(n.duplicate_attempts)||0;return m.length||(e=Number(T.duplicate_attempts)||0),e})(),o=B.map(function(m,e){let n=O(m),u=f>0?n/f*100:0,p=G[e%G.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${b(m.label||m.text||m.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:e+1}))}</span>
            <span class="votes">${n} \xB7 ${u.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${u.toFixed(2)}%;background:${p}"></div>
          </div>
        </div>`}).join(""),t=Array.isArray(T.vote_timeline)?T.vote_timeline:[],d=t.length>=2?A(t):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${b(U)}</div>
          <div class="admin-pdd-state">${b(c)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${f}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${r}</div><div class="sub">${b(s)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${b(i)}</div></div>
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
          <div class="admin-pdd-timeline">${d}</div>
        </article>
      </div>`}function R(){let T=document.querySelector("[data-pdd-grid]");if(T){if(!g.poll||!g.poll.poll_id){_(T);return}T.innerHTML=v(g.poll)}}async function L(){try{let T=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!T.ok)return;let C=await T.json();g.poll=C,R()}catch{}}function E(){if(!g.poll||!Array.isArray(g.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let T=[["option_label","votes","percentage"]],C=g.poll.options.reduce(function(c,i){return c+(Number(i.votes!=null?i.votes:i.count)||0)},0);g.poll.options.forEach(function(c,i){let a=Number(c.votes!=null?c.votes:c.count)||0,r=C>0?(a/C*100).toFixed(2):"0.00";T.push([c.label||"option_"+(i+1),a,r])});let U=T.map(function(c){return c.map(function(i){let a=String(i);return a.includes(",")||a.includes('"')?'"'+a.replace(/"/g,'""')+'"':a}).join(",")}).join(`
`),B=new Blob([U],{type:"text/csv;charset=utf-8"}),O=URL.createObjectURL(B),f=document.createElement("a");f.href=O,f.download="poll-"+(g.poll.poll_id||"current")+".csv",document.body.appendChild(f),f.click(),document.body.removeChild(f),setTimeout(function(){URL.revokeObjectURL(O)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function x(){try{let T=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!T.ok)throw new Error("HTTP "+T.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function P(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(L(),g.refreshTimer||(g.refreshTimer=setInterval(L,5e3))):g.refreshTimer&&(clearInterval(g.refreshTimer),g.refreshTimer=0)}function N(){let T=document.getElementById("settings-grid");if(!T||document.getElementById(y))return;T.insertAdjacentHTML("beforeend",h());let C=document.getElementById(y);C&&C.addEventListener("click",function(U){let B=U.target.closest("[data-pdd-action]");B&&(B.dataset.pddAction==="export-csv"?E():B.dataset.pddAction==="push"&&x())}),L(),P(),window.addEventListener("hashchange",P)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&N()})})()});var kt=me(()=>{(function(){"use strict";let y="admin-message-drawer-root",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(r){return String(r).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},h={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]};function _(r){let s=r.detail&&r.detail.entry;s&&(h.entry=s,G(),s.data&&s.data.fingerprint&&R(s.data.fingerprint),L(s))}function G(){h.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",E()),x()),P()}function S(){h.open=!1,document.body.dataset.messageDrawerOpen="";let r=document.getElementById(y);r&&r.remove()}function A(r){if(h.open){if(r.key==="Escape"){S();return}if(r.key==="ArrowLeft"||r.key==="k"){v(-1),r.preventDefault();return}if(r.key==="ArrowRight"||r.key==="j"){v(1),r.preventDefault();return}}}function v(r){if(!h.entry)return;let s=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(s=window.AdminLiveFeed.getEntries()),!s.length)return;let l=s.findIndex(function(d){return d.id===h.entry.id});if(l<0)return;let o=l+-r;if(o<0||o>=s.length){window.showToast&&window.showToast(r<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let t=s[o];h.entry=t,h.fingerprintRecord=null,L(t),P(),t.data&&t.data.fingerprint&&R(t.data.fingerprint)}async function R(r){try{let s=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!s.ok)return;let l=await s.json(),t=(Array.isArray(l.records)?l.records:[]).find(function(d){return(d.fingerprint||"").startsWith(r.slice(0,8))});h.fingerprintRecord=t||null,P()}catch{}}function L(r){let s=r.data&&r.data.fingerprint;if(!s){h.sameFpEntries=[];return}let l=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(l=window.AdminLiveFeed.getEntries()),h.sameFpEntries=l.filter(function(o){let t=o.data&&o.data.fingerprint||o.fingerprint||"";return t&&t.startsWith(s.slice(0,8))}).slice(0,8)}function E(){return`
      <div id="${y}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function x(){let r=document.getElementById(y);r&&r.addEventListener("click",function(s){let l=s.target.closest("[data-msgd-action]");if(!l)return;s.stopPropagation();let o=l.dataset.msgdAction;o==="close"?S():o==="ban-fp"?B():o==="ban-fp-quick"?U():o==="mute-fp"?f():o==="mask-msg"?c():o==="blacklist-kw"?i():o==="reply"?a():o==="prev"?v(-1):o==="next"&&v(1)})}function P(){let r=document.getElementById(y);if(!r)return;let s=r.querySelector("[data-msgd-body]");s&&(s.innerHTML=N())}function N(){let r=h.entry;if(!r)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let s=r.data||{},l=s.fingerprint||"\u2014",o=l==="\u2014"?"\u2014":l.slice(0,8),t=l==="\u2014"?"\u2014":l.slice(0,12),d=r.ts?T(r.ts):"\u2014",m=s.nickname||ServerI18n.t("msgDrawerAnonymous"),e=h.fingerprintRecord||{},n=Number(e.message_count)||0,u=Number(e.violation_count)||0,p=h.sameFpEntries||[],k=p.length?Math.round(p.reduce((I,F)=>I+((F.data||F).text||"").length,0)/p.length):(s.text||"").length,w=0;for(let I=0;I<l.length;I++)w=w*31+l.charCodeAt(I)&65535;return w=w%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${w})">${g((m||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${g(m)}</div>
          <div class="admin-msgd-v4__fp">fp:${g(t)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${g(d)}</span>
      </div>

      <div class="admin-msgd-v4__body">${g(s.text||"")}</div>

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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${n||p.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${k}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${u>0?"warn":"good"}">${u}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP \xB7 ${g(s.ip||"\u2014")}<br/>
          UA \xB7 ${g(s.user_agent||s.ua||"\u2014")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: same deferred EN\xB7\u4E2D\u6587 bilingual monolabel pattern as
             SENDER PROFILE above \u2014 left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecModeration")}</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${l==="\u2014"?"disabled":""}>${g(ServerI18n.t("msgdBanFpBtn"))}</button>
          <button type="button" class="admin-msgd-v4__modbtn is-mute" data-msgd-action="mute-fp" ${l==="\u2014"?"disabled":""}>${g(ServerI18n.t("msgdMuteFpBtn"))}</button>
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="mask-msg">\u25D1 Mask</button>
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
    `}function T(r){try{let s=new Date(r),l=String(s.getHours()).padStart(2,"0"),o=String(s.getMinutes()).padStart(2,"0"),t=String(s.getSeconds()).padStart(2,"0");return l+":"+o+":"+t}catch{return"\u2014"}}function C(r){let s;if(typeof r=="number")s=r*1e3;else if(typeof r=="string")s=new Date(r).getTime();else return"\u2014";if(!s)return"\u2014";let l=(Date.now()-s)/1e3;return l<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(l)}):l<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(l/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(l/86400)})}async function U(r,s,l){let o=h.entry&&h.entry.data&&h.entry.data.fingerprint;if(!o)return;let t=parseInt(s||0,10)||0;try{let d=t>0?await window.csrfFetch("/admin/modbans",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:o,duration_s:t,reason:r||"",kind:"ban"})}):await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:o,reason:r||""})});if(!d.ok)throw new Error("HTTP "+d.status);let m=l||(t>0?ServerI18n.t("msgDrawerSecondsLabel",{n:t}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:o.slice(0,8),label:m}),!0),S()}catch(d){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:d.message||""}),!1)}}async function B(){let r=h.entry&&h.entry.data||{},s=r.fingerprint||"\u2014";if(s==="\u2014")return;let l=s.slice(0,12),o=r.nickname||ServerI18n.t("msgDrawerAnonymous"),t=0;for(let w=0;w<s.length;w++)t=t*31+s.charCodeAt(w)&65535;t=t%360;let d=document.createElement("div");d.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${t})">${g((o||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${g(o)}</div>
          <div class="fp">fp:${g(l)}</div>
          <div class="ip">IP \xB7 ${g(r.ip||"\u2014")} \xB7 ${g(r.user_agent||r.ua||"\u2014")}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let m=w=>{d.querySelectorAll(".admin-bancfm-dchip").forEach(I=>I.classList.remove("is-active")),w.classList.add("is-active")};if(d.addEventListener("click",w=>{let I=w.target.closest("[data-ban-duration]");I&&m(I)}),d.addEventListener("keydown",w=>{if(w.key!=="Enter"&&w.key!==" ")return;let I=w.target.closest("[data-ban-duration]");I&&(w.preventDefault(),m(I))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:d,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let n=(d.querySelector("[data-ban-reason]")||{}).value||"",u=d.querySelector(".admin-bancfm-dchip.is-active"),p=u&&parseInt(u.dataset.banDuration||"0",10)||0,k=u?u.textContent.trim():ServerI18n.t("msgDrawerPermanent");return U(n.trim(),p,k)}function O(){}async function f(){return U("[mute]")}async function c(){let r=h.entry&&h.entry.data&&h.entry.data.text;if(!(!r||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBlacklistKwTitle"),subtitle:ServerI18n.t("cfmSubBlacklistKeyword"),severity:"danger",body:ServerI18n.t("msgDrawerBlacklistKwBody"),confirmLabel:ServerI18n.t("msgDrawerBlacklistKwConfirm")})))try{let l=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"keyword",value:r})});if(!l.ok)throw new Error("HTTP "+l.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBlacklisted"),!0),S()}catch(l){window.showToast&&window.showToast(ServerI18n.t("msgDrawerMaskFailed",{msg:l.message||""}),!1)}}async function i(){return c()}async function a(){let r=document.querySelector("[data-msgd-reply]"),s=r?r.value.trim():"";if(s)try{let l=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:s})});if(!l.ok)throw new Error("HTTP "+l.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),r&&(r.value="")}catch(l){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:l.message||""}),!1)}}window.AdminMessageDrawer={open:function(r){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:r}}))},close:S},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",_),document.addEventListener("keydown",A))})})()});var Tt=me(()=>{(function(){"use strict";let y="danmu.notifications.read",b="danmu.notifications.archived",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})},h={items:[],refreshTimer:0};function _(o){try{let t=localStorage.getItem(o);if(!t)return new Set;let d=JSON.parse(t);return new Set(Array.isArray(d)?d:[])}catch{return new Set}}function G(o,t){try{localStorage.setItem(o,JSON.stringify(Array.from(t)))}catch{}}function S(o){let t=_(y);t.add(o),G(y,t)}async function A(){let o=[v().catch(function(){return[]}),R().catch(function(){return[]}),L().catch(function(){return[]}),E().catch(function(){return[]})],d=(await Promise.all(o)).flat();d.sort(function(m,e){return(e.ts||0)-(m.ts||0)}),h.items=d,C(),O()&&U()}async function v(){let o=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!o.ok)return[];let t=await o.json();return(Array.isArray(t.events)?t.events:[]).map(function(m,e){let n=(Number(m.ts)||0)*1e3,u="tok-"+(m.ts||e)+"-"+(m.kind||"x"),p=m.kind||"?",k="info",w=ServerI18n.t("notifTitleFireTokenEvent");if(p==="rotated")k="info",w=ServerI18n.t("notifTitleFireTokenRotated");else if(p==="revoked")k="warn",w=ServerI18n.t("notifTitleFireTokenRevoked");else if(p==="toggled"){let I=m.meta&&m.meta.enabled;k=I?"good":"warn",w=ServerI18n.t("notifTitleFireTokenToggled",{state:I?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:u,sev:k,src:"Fire Token",ts:n,title:w,desc:ServerI18n.t("notifDescEventType",{kind:p})+(m.meta?" \xB7 "+JSON.stringify(m.meta):""),raw:m}})}async function R(){let o=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!o.ok)return[];let t=await o.json();return(Array.isArray(t.events)?t.events:[]).map(function(m,e){let n=(Number(m.ts)||0)*1e3,u="flt-"+(m.ts||e)+"-"+(m.action||"x")+"-"+e,p=m.action||"match";return{id:u,sev:p==="drop"?"warn":"info",src:"Moderation",ts:n,title:ServerI18n.t("notifTitleFilterHit",{action:p}),desc:ServerI18n.t("notifDescFilterHit",{rule:m.rule_id||"?",text:(m.text||"").slice(0,60)}),raw:m}})}async function L(){let o=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!o.ok)return[];let t=await o.json();return(Array.isArray(t.events)?t.events:[]).map(function(m,e){let n=(Number(m.ts)||0)*1e3,u=String(m.kind||"?");return{id:"wh-"+(m.ts||e)+"-"+u+"-"+e,sev:u==="unregister"?"warn":"info",src:"Webhooks",ts:n,title:ServerI18n.t("notifTitleWebhookEvent",{kind:u}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:m.actor||"system"})+(m.meta?" \xB7 "+JSON.stringify(m.meta):""),raw:m}})}async function E(){let o=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!o.ok)return[];let t=await o.json(),d=Array.isArray(t.events)?t.events:[],m=new Set(["auth","broadcast","system","session","sessions"]);return d.filter(function(e){return m.has(String(e.source||""))}).map(function(e,n){let u=(Number(e.ts)||0)*1e3,p=String(e.kind||"?");return{id:"sys-"+(e.ts||n)+"-"+(e.source||"x")+"-"+p+"-"+n,sev:p==="login_failed"?"warn":"info",src:"System",ts:u,title:ServerI18n.t("notifTitleSystemEvent",{kind:p}),desc:ServerI18n.t("notifDescSystemEvent",{source:e.source||"?",actor:e.actor||"system"}),raw:e}})}let x="admin-notif-panel",P={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/integrations/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/integrations/plugins"},System:{key:"adminNavSystem",hash:"#/events"}};function N(o){let t=P[o];return t?ServerI18n.t(t.key):o}function T(){let o=_(y),t=_(b);return h.items.filter(d=>!o.has(d.id)&&!t.has(d.id))}function C(){let o=document.querySelector("[data-notif-badge]");if(!o)return;let t=T().length;o.textContent=t>99?"99+":String(t),o.hidden=t===0}function U(){let o=document.getElementById(x);if(!o)return;let t=T().slice(0,20),d=t.length?t.map(m=>{let e=P[m.src];return'<li class="admin-notif__item" data-sev="'+g(m.sev)+'"><div class="admin-notif__text">'+g(m.title)+'</div><div class="admin-notif__meta">'+g(N(m.src))+" \xB7 "+g(B(m.ts))+"</div>"+(e?'<button type="button" class="admin-notif__action" data-notif-go="'+g(e.hash)+'" data-notif-id="'+g(m.id)+'">'+g(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+g(ServerI18n.t("notifEmpty"))+"</li>";o.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+g(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+g(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+d+"</ul>"}function B(o){if(!o)return"\u2014";let t=(Date.now()-o)/1e3;return t<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(t)}):t<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(t/60)}):t<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(t/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(t/86400)})}function O(){let o=document.getElementById(x);return!!o&&!o.hidden}function f(){let o=document.getElementById(x);o&&(U(),o.hidden=!1,h.refreshTimer||(h.refreshTimer=setInterval(A,3e4)))}function c(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&f()}function i(){let o=document.getElementById(x);o&&(o.hidden=!0),h.refreshTimer&&(clearInterval(h.refreshTimer),h.refreshTimer=0)}function a(){O()?i():f()}function r(){let o=document.querySelector(".admin-dash-topbar-actions");if(!o||document.getElementById("admin-notif-bell"))return;let t=document.createElement("button");if(t.id="admin-notif-bell",t.type="button",t.className="admin-dash-search is-icon-only admin-notif-bell",t.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),t.title=ServerI18n.t("adminRouteTitle_notifications"),t.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',o.insertBefore(t,o.firstChild),!document.getElementById(x)){let d=document.createElement("div");d.id=x,d.className="admin-notif",d.setAttribute("role","dialog"),d.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),d.hidden=!0,document.body.appendChild(d)}C(),c()}function s(){document.addEventListener("click",o=>{if(o.target.closest("#admin-notif-bell")){o.preventDefault(),a();return}let t=o.target.closest("[data-notif-go]");if(t){S(t.dataset.notifId),i(),location.hash=t.dataset.notifGo,C();return}if(o.target.closest("[data-notif-readall]")){T().forEach(d=>S(d.id)),U(),C();return}O()&&!o.target.closest("#"+x)&&i()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&O()&&i()}),window.addEventListener("hashchange",c),c()}function l(){r(),A()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(r).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),s(),l()})})()});var _t=me(()=>{(function(){"use strict";let y="sec-audit-overview",b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},g={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},h={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function _(){return`
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
      </div>`}function G(a){if(!a)return"\u2014";try{let r=new Date(Number(a)*1e3),s=String(r.getHours()).padStart(2,"0"),l=String(r.getMinutes()).padStart(2,"0"),o=String(r.getSeconds()).padStart(2,"0");return`${s}:${l}:${o}`}catch{return"\u2014"}}function S(a){let r=String(a.action||a.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(r)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(r)?"warn":"info"}function A(a){return a==="danger"?"var(--hud-crimson, #f87171)":a==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function v(a){return h.filterActor==="all"||String(a.actor||"").toLowerCase()===h.filterActor}function R(a){return h.filterSeverity==="all"||S(a)===h.filterSeverity}function L(){return h.events.filter(function(a){return v(a)&&R(a)})}function E(a){let r=a&&a.meta&&typeof a.meta=="object"?a.meta:{};return r.target||r.keyword||r.fp||r.fingerprint||r.name||r.mode||r.session||r.hook_id||a.target||""}function x(a,r){let s=a!=null,l=r!=null;if(!s&&!l)return"";let o=s?b(JSON.stringify(a)):"",t=l?b(JSON.stringify(r)):"";return s?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${o}</span> \u2192 <span class="admin-audit-diff-a">${t}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${t}</span></span>`}function P(a){let r=a&&a.meta&&typeof a.meta=="object"?a.meta:{},s=[];a.detail&&s.push(`<span>${b(String(a.detail))}</span>`);let l=x(a.before,a.after);l&&s.push(l);let o=Object.assign({},r);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(d){delete o[d]}),Object.keys(o).length&&s.push(`<code class="admin-ui-code admin-audit-meta-extra">${b(JSON.stringify(o))}</code>`),!s.length){let d=g[a.source]&&g[a.source].label||a.source||"system";s.push(`<span>${b(String(d))}</span>`)}return s.join(" ")}function N(a){return a==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":a==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function T(){let a=document.querySelector("[data-audit-rows]");if(!a)return;let r=L();if(!r.length){a.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}a.innerHTML=r.map(function(s){let l=S(s),o=A(l),t=String(s.actor||"system"),d=E(s);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${l}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${b(G(s.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${o};box-shadow:0 0 6px ${o}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${N(t)}">${b(t)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${b(String(s.action||s.kind||"\u2014"))}</span>
              ${d?`<span class="admin-ui-target admin-audit-target">\u2192 ${b(String(d))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${P(s)}</div>
          </div>
        </div>`}).join("")}function C(){let a=document.querySelector("[data-audit-summary]");if(!a)return;let r=L().length,s=h.filterActor==="all"?ServerI18n.t("auditAllRoles"):h.filterActor,l=h.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):h.filterSeverity.toUpperCase();a.textContent=ServerI18n.t("auditSummaryLine",{n:r,actor:s,sev:l})}function U(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(a){a.classList.toggle("is-active",a.dataset.auditActorFilter===h.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(a){a.classList.toggle("is-active",a.dataset.auditSeverityFilter===h.filterSeverity)})}async function B(){try{let a=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!a.ok)return;let r=await a.json(),s=Array.isArray(r.events)?r.events.slice():[];s.sort(function(l,o){return Number(o.ts||0)-Number(l.ts||0)}),h.events=s,U(),T(),C()}catch{}}function O(){let a=L();if(!a.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let r=new Blob([JSON.stringify(a,null,2)],{type:"application/json;charset=utf-8"}),s=URL.createObjectURL(r),l=document.createElement("a");l.href=s,l.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(l),l.click(),document.body.removeChild(l),setTimeout(function(){URL.revokeObjectURL(s)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:a.length}),!0)}function f(){let a=document.getElementById(y);a&&a.addEventListener("click",function(r){let s=r.target.closest("[data-audit-actor-filter]");if(s){h.filterActor=s.dataset.auditActorFilter||"all",U(),T(),C();return}let l=r.target.closest("[data-audit-severity-filter]");if(l){let o=l.dataset.auditSeverityFilter||"all";h.filterSeverity=h.filterSeverity===o?"all":o,U(),T(),C();return}if(r.target.closest("[data-audit-export]")){O();return}r.target.closest("[data-audit-refresh]")&&B()})}function c(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(B(),h.refreshTimer||(h.refreshTimer=setInterval(B,3e4))):h.refreshTimer&&(clearInterval(h.refreshTimer),h.refreshTimer=0)}function i(){let a=document.getElementById("settings-grid");!a||document.getElementById(y)||(a.insertAdjacentHTML("beforeend",_()),f(),B(),c(),window.addEventListener("hashchange",c))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&i()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&i()})})()});var Et=me(()=>{(function(){"use strict";let y="sec-audience-overview",b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},g=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],h=20,_={records:[],filter:"all",shown:h,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function G(n){if(!n)return g[0];let u=0;for(let p=0;p<n.length;p++)u=u*31+n.charCodeAt(p)>>>0;return g[u%g.length]}function S(n){if(!n)return"\u2014";let u=typeof n=="number"?n*1e3:new Date(n).getTime();if(!u)return"\u2014";let p=Math.max(0,(Date.now()-u)/1e3);return p<60?Math.floor(p)+"s":p<3600?Math.floor(p/60)+"m":p<86400?Math.floor(p/3600)+"h":Math.floor(p/86400)+"d"}function A(n){return n==="blocked"||n==="high"?"is-danger":n==="mid"?"is-warn":"is-success"}function v(){return`
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
      </div>`}function R(){let n=_.search.trim().toLowerCase(),u=_.records.slice();return n&&(u=u.filter(function(p){return String(p.nickname||"").toLowerCase().indexOf(n)!==-1||String(p.hash||"").toLowerCase().indexOf(n)!==-1})),u.sort(function(p,k){return _.sort==="last_seen"?(Number(k.last_seen)||0)-(Number(p.last_seen)||0):(Number(k.msgs)||0)-(Number(p.msgs)||0)}),_.filter==="all"?u:_.filter==="flagged"?u.filter(function(p){return p.state==="flagged"||p.state==="blocked"}):_.filter==="extension"?u.filter(function(p){return p.fingerprint&&(p.fingerprint.indexOf("slido")===0||p.fingerprint.indexOf("ext_")===0)}):u}function L(){let n=document.querySelector("[data-aud-stats]");if(!n)return;let u=_.records,p=u.length,k=u.filter(function(H){return H.state==="flagged"}).length,w=u.filter(function(H){return H.state==="blocked"}).length,I=u.reduce(function(H,D){return H+(Number(D.msgs)||0)},0),F=u.filter(function(H){let D=H.last_seen;if(!D)return!1;let $=typeof D=="number"?D*1e3:new Date(D).getTime();return(Date.now()-$)/1e3<300}).length;n.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${p}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${F}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${I}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${k}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${w}</div></div>`}function E(){let n=document.querySelector("[data-aud-filters]");if(!n)return;let u=_.records.length,p=_.records.filter(function(k){return k.state==="flagged"||k.state==="blocked"}).length;n.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${_.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:u})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${_.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:p})}</button>`}let x="__anon__";function P(n){let u=(n.nickname||"").trim();return!u||u==="\u533F\u540D"}function N(n){let u=n.hash||n.fingerprint||"";return u?u.length>9?u.slice(0,4)+"\u2026"+u.slice(-4):u:"\u2014"}function T(){let n=[],u=[];return R().forEach(function(p){P(p)?u.push(p):n.push(p)}),u.length&&n.push({_anonGroup:!0,_count:u.length,fingerprint:x,msgs:u.reduce(function(p,k){return p+(Number(k.msgs)||0)},0),blocked:u.reduce(function(p,k){return p+(Number(k.blocked)||0)},0),last_seen:Math.max.apply(null,u.map(function(p){return p.last_seen||0})),state:u.some(function(p){return p.state==="blocked"})?"blocked":"active"}),n}function C(){let n=document.querySelector("[data-aud-list]"),u=document.querySelector("[data-aud-summary]");if(!n)return;let p=T(),k=Math.min(p.length,_.shown);if(u&&(u.textContent=ServerI18n.t("audienceShownOfTotal",{n:k,total:p.length})),p.length===0){n.innerHTML="";let H=window.AdminEmpty.render("audience");H.dataset.emptyKind="audience",n.appendChild(H);return}let w=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,I=p.slice(0,k).map(function(H){let D=H.fingerprint||"\u2014",$=H.state==="blocked",j=H._anonGroup?ServerI18n.t("audienceAnonymous"):(H.nickname||"").trim(),K=H._anonGroup?"?":j.slice(0,1),Y=G(D);return`
        <div class="admin-aud-row${_.selectedFp===D?" is-selected":""}" data-aud-row data-aud-fp="${b(D)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${Y}">${b(K)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${b(j)}</span>
            ${H._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:H._count})}</span>`:""}
            ${$&&!H._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${H._anonGroup?"\u2014":b(N(H))}</span>
          <span class="col col-msgs">${Number(H.msgs)||0}</span>
          <span class="col col-blocked">${Number(H.blocked)||0}</span>
          <span class="col col-seen">${b(S(H.last_seen))}</span>
          <span class="col col-actions">
            ${H._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${b(D)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),F=p.length>k?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";n.innerHTML=w+I+F}function U(n){return n&&_.records.find(function(u){return u.fingerprint===n})||null}function B(n){if(!n)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let u=[],p=Number(n.msgs)||0,k=n.fingerprint||"";n.state==="blocked"&&u.push(ServerI18n.t("audienceRuleBlocked")),n.state==="flagged"&&u.push(ServerI18n.t("audienceRuleFlagged")),p>=25?u.push(ServerI18n.t("audienceRuleMsgOver",{n:p})):p>=15&&u.push(ServerI18n.t("audienceRuleMsgNear",{n:p}));let w=_.records.filter(function(D){return D.ip&&n.ip&&D.ip===n.ip}).length;w>=3&&u.push(ServerI18n.t("audienceRuleSameIp",{n:w})),(k.indexOf("slido")===0||k.indexOf("ext_")===0)&&u.push(ServerI18n.t("audienceRuleBridge")),(n.nickname==="\u533F\u540D"||!n.nickname)&&u.push(ServerI18n.t("audienceRuleNoNick"));let I="normal",F="var(--hud-lime)",H="NORMAL";return n.state==="blocked"?(I="blocked",F="var(--hud-crimson)",H="BLOCKED"):n.state==="flagged"||p>=25?(I="high",F="var(--hud-crimson)",H="HIGH RISK"):(p>=15||w>=3)&&(I="mid",F="var(--hud-amber)",H="MID"),{level:I,color:F,label:H,rules:u}}async function O(n){_.detailLoading=!0;try{let u=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!u.ok){_.detailMessages=[];return}let p=await u.json(),k=Array.isArray(p.records)?p.records:[],w=Date.now()-300*1e3;_.detailMessages=k.filter(function(I){return(I.fingerprint||"")!==n?!1:(I.timestamp?new Date(I.timestamp).getTime():0)>=w}).slice(0,8)}catch{_.detailMessages=[]}finally{_.detailLoading=!1}}function f(){let n=document.querySelector("[data-aud-detail]");if(!n)return;let u=_.selectedFp;if(!u){n.hidden=!0,n.innerHTML="";return}let p=U(u);if(!p){_.selectedFp=null,n.hidden=!0;return}n.hidden=!1;let k=B(p);n.dataset.riskLevel=k.level;let w=G(u),I=!p.nickname||p.nickname==="\u533F\u540D",F=I?ServerI18n.t("audienceAnonymous"):p.nickname,H=I?"?":F.slice(0,1),D="fp:"+(u||"").slice(0,8),$=k.rules.length?k.rules.map(function(K){return"<li>"+b(K)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",j="";_.detailLoading?j='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":_.detailMessages.length===0?j='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":j=_.detailMessages.map(function(K){let Y=K.muted?"MASKED":K.banned?"BLOCKED":"SHOWN",M=K.muted?"var(--hud-amber)":K.banned?"var(--hud-crimson)":"var(--hud-lime)",q=K.timestamp?new Date(K.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+b(q)+'</span><span class="m">'+b(K.text||"")+'</span><span class="s" style="color:'+M+'">'+Y+"</span></div>"}).join(""),n.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+A(k.level)+'">'+b(k.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+w+'">'+b(H)+'</span><div><div class="nick">'+b(F)+'</div><div class="fp">'+b(D)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+k.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:k.rules.length})+"</div><ul>"+$+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+j+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+b(u)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+b(u)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(p.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+b(u)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+b(u)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+b(u)+'" data-aud-flagged="'+(p.is_flagged?"true":"false")+'">'+(p.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+b(u)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function c(n){_.selectedFp=n,_.detailMessages=[],f(),O(n).then(f)}async function i(){try{let n=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!n.ok)return;let u=await n.json();_.records=Array.isArray(u.entries)?u.entries:[],_.serverStats=u&&u.stats||null,L(),E(),C(),_.selectedFp&&f()}catch{}}async function a(n,u,p){if(n)try{let k=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n,flagged:!!u,note:p||""})});if(!k.ok)throw new Error("HTTP "+k.status);window.showToast&&window.showToast(u?ServerI18n.t("audienceToastFlagged",{fp:n.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:n.slice(0,8)}),!0),i()}catch(k){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:k.message||""}),!1)}}async function r(n,u){if(!n||n==="\u2014")return;let p=u??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:n.slice(0,8)}),"")||"");if(p!==null)try{let k=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n,reason:p})});if(!k.ok)throw new Error("HTTP "+k.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:n.slice(0,8)}),!0),i()}catch(k){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:k.message||""}),!1)}}async function s(n){if(!(!n||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+b(n.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let p=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n})});if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),i()}catch(p){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:p.message||""}),!1)}}async function l(n){if(!(!n||n==="\u2014"))try{let u=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:n,action:"mask",priority:0,enabled:!0})});if(!u.ok)throw new Error("HTTP "+u.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:n.slice(0,8)}),!0),i()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:u.message||""}),!1)}}async function o(n){if(!(!n||n==="\u2014"))try{let u=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!u.ok)throw new Error("HTTP "+u.status);let p=await u.json(),w=(Array.isArray(p.rules)?p.rules:[]).filter(function(F){return F&&F.type==="fingerprint"&&F.pattern===n});if(w.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let I=0;for(let F of w)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:F.rule_id||F.id})}).catch(function(){return{ok:!1}})).ok&&(I+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:I,fp:n.slice(0,8)}),!0),i()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:u.message||""}),!1)}}async function t(n){if(!(!n||n==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+b(n.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let p=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:n})});if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:n.slice(0,8)}),!0),i()}catch(p){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:p.message||""}),!1)}}function d(){let n=document.getElementById(y);n&&(n.addEventListener("input",function(u){let p=u.target.closest("[data-aud-search]");p&&(_.search=p.value||"",_.shown=h,C())}),n.addEventListener("change",function(u){let p=u.target.closest("[data-aud-sort]");p&&(_.sort=p.value,C())}),n.addEventListener("click",function(u){let p=u.target.closest("[data-aud-filter]");if(p){_.filter=p.dataset.audFilter,_.shown=h,E(),C();return}let k=u.target.closest("[data-aud-action='ban']");if(k){u.stopPropagation(),t(k.dataset.audFp);return}if(u.target.closest("[data-aud-action='refresh']")){i();return}if(u.target.closest("[data-aud-action='more']")){_.shown+=h,C();return}if(u.target.closest("[data-aud-action='close-detail']")){_.selectedFp=null,f();return}let H=u.target.closest("[data-aud-action='detail-ban']");if(H){t(H.dataset.audFp);return}let D=u.target.closest("[data-aud-action='detail-mask']");if(D){l(D.dataset.audFp);return}let $=u.target.closest("[data-aud-action='detail-safe']");if($){o($.dataset.audFp);return}let j=u.target.closest("[data-aud-action='flag']");if(j){u.stopPropagation(),a(j.dataset.audFp,j.dataset.audFlagged!=="true");return}let K=u.target.closest("[data-aud-action='kick']");if(K){u.stopPropagation(),r(K.dataset.audFp);return}let Y=u.target.closest("[data-aud-action='unkick']");if(Y){u.stopPropagation(),s(Y.dataset.audFp);return}let M=u.target.closest("[data-aud-row]");if(!(M&&M.dataset.audFp===x)&&M&&!u.target.closest("button")){c(M.dataset.audFp);return}}))}function m(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(i(),_.refreshTimer||(_.refreshTimer=setInterval(i,15e3))):_.refreshTimer&&(clearInterval(_.refreshTimer),_.refreshTimer=0)}function e(){let n=document.getElementById("settings-grid");!n||document.getElementById(y)||(n.insertAdjacentHTML("beforeend",v()),d(),i(),m(),window.addEventListener("hashchange",m))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&e()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&e()})})()});var $t=me(()=>{(function(){"use strict";let y=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],b={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},g=2500,h=0,_=0,G=null;function S(){if(G)return G;let E=document.createElement("div");return E.className="admin-konami-hud",E.setAttribute("aria-hidden","true"),E.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(E),G=E,E}function A(){if(h===0){G&&G.classList.remove("is-on");return}let E=S();E.classList.add("is-on");let x=E.querySelector(".admin-konami-hud-keys");x&&(x.innerHTML=y.map((N,T)=>`<span class="admin-konami-hud-key ${T<h?"is-filled":""}">${b[N]}</span>`).join(""));let P=E.querySelector(".admin-konami-hud-progress");if(P){let N=Math.round(h/y.length*100);P.style.width=N+"%"}}function v(E){h=0,_&&(clearTimeout(_),_=0),E||A()}function R(){_&&clearTimeout(_),_=setTimeout(()=>v(),g)}async function L(){try{let E=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!E.ok)throw new Error("HTTP "+E.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(E){console.warn("[konami] trigger failed:",E&&E.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",E=>{let x=E.target;if(x&&(x.tagName==="INPUT"||x.tagName==="TEXTAREA"||x.isContentEditable))return;let P=y[h];if(!(E.key===P||P==="b"&&E.key.toLowerCase()==="b"||P==="a"&&E.key.toLowerCase()==="a")){h=E.key===y[0]?1:0,A(),h>0?R():_&&(clearTimeout(_),_=0);return}if(h++,A(),h>=y.length){v(!0),L();return}R()}),window.AdminKonami={trigger:L}})()});var xt=me(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function b(l){return l==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:l==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:l==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function g(){let l=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,o=l?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
    `}var h=null,_=[];function G(l,o){var t=document.getElementById("adminFontEmptyStateHost");if(!t)return;if((l||[]).some(e=>e.type==="uploaded")){t.innerHTML="";return}t.innerHTML="";var m=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:o?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var e=document.getElementById("adminFontFileInput");e&&e.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});m.dataset.emptyKind="fonts",t.appendChild(m)}function S(l,o){let t=l.weight||"\u2014",d=l.sizeLabel||"\u2014",m=l.foundry||(l.type==="system"?"System":l.type==="default"?"Google / Noto":"Uploaded"),e=l.format||"\u2014",n=l.status||l.type,u=`font-family: "${y(l.name)}", sans-serif;`,p=b(n),k=[];if(o){if(n!=="default"&&k.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${y(l.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),n!=="default"){let w=n==="enabled"||n==="system",I=w?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");k.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${y(l.name)}" data-enabled="${w?"true":"false"}">${I}</button>`)}l.type==="uploaded"&&(k.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${y(l.name)}" title="${y(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),k.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${y(l.name)}">${y(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${y(l.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${u}" class="truncate">${y(l.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(k.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${k.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${y(m)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${y(t)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${y(d)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${y(e)}</span><div style="text-align:right">${p}</div></div>`}let A=null,v={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function R(){if(A)return A;try{let l=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return l.ok?(A=(await l.json()).presets||{},A):{}}catch{return{}}}function L(l){return!l||!Number.isFinite(l)?"\u2014":l<1024?l+" B":l<1024*1024?(l/1024).toFixed(1)+" KB":(l/(1024*1024)).toFixed(2)+" MB"}async function E(l){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let o=await R();if(!Object.keys(o).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let t=new Set(["cjk_common","latin"]),d="",m=document.createElement("div");m.className="admin-font-subset-modal-body";let e=()=>{let p=Object.keys(o).map(w=>{let I=v[w]||{label:w,glyphs:"\u2014",estSize:"\u2014"},F=I.labelKey?ServerI18n.t(I.labelKey):I.label,H=t.has(w);return`
          <label class="admin-font-subset-chip${H?" is-active":""}" data-subset-preset="${w}">
            <span class="admin-font-subset-chip-check">${H?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${y(F)}</span>
            <span class="admin-font-subset-chip-range">${y(o[w])}</span>
            <span class="admin-font-subset-chip-meta">${I.glyphs} glyphs \xB7 ${I.estSize}</span>
          </label>`}).join("");m.innerHTML=`
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
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${y(d)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,m.querySelectorAll("[data-subset-preset]").forEach(w=>{w.addEventListener("click",I=>{I.preventDefault();let F=w.dataset.subsetPreset;t.has(F)?t.delete(F):t.add(F),e()})});let k=m.querySelector("[data-subset-custom]");k&&k.addEventListener("input",()=>{d=k.value})};if(e(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:m,width:540}))return;let u=[];if(t.forEach(p=>{o[p]&&u.push(o[p])}),d.trim()&&u.push(d.trim()),!u.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await x(l,u.join(","))}async function x(l,o){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:l}),!0);let t=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(l)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:o})}),d=await t.json().catch(()=>({}));if(t.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!t.ok){window.showToast?.(d.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:t.status}),!1);return}let m=d.saved_bytes||0,e=Math.round((d.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:l,before:L(d.original_size),after:L(d.new_size),pct:e}),!0),T()}catch(t){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:t.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function P(l){try{let o=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:l})});if(!o.ok)throw new Error("HTTP "+o.status);h=l,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:l}),!0),T()}catch(o){console.error("[admin-fonts] set default failed:",o),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function N(l,o){try{let t=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(l)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!o})});if(!t.ok)throw new Error("HTTP "+t.status);window.showToast(ServerI18n.t(o?"fontsToggleOffToast":"fontsToggleOnToast",{name:l}),!0),T()}catch(t){console.error("[admin-fonts] toggle failed:",t),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function T(){var l=document.getElementById("adminFontList");if(!l)return;let o=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var t=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!t.ok)throw new Error("HTTP "+t.status);var d=await t.json(),m=d.fonts||[];if(_=m,window.AdminTabs?.setTabCount?.("assets","fonts",m.length||""),G(m,o),m.length===0){l.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,f(m);return}l.innerHTML=m.map(e=>S(e,o)).join(""),f(m),c()}catch(e){console.error("[admin-fonts] fetch failed:",e),l.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,G([],o)}}async function C(l){try{let o=await l.slice(0,4).arrayBuffer(),t=new Uint8Array(o);return t[0]===0&&t[1]===1&&t[2]===0&&t[3]===0?"TTF":t[0]===79&&t[1]===84&&t[2]===84&&t[3]===79?"OTF":t[0]===119&&t[1]===79&&t[2]===70&&t[3]===50?"WOFF2":t[0]===116&&t[1]===114&&t[2]===117&&t[3]===101?"TTF":t[0]===116&&t[1]===116&&t[2]===99&&t[3]===102?"TTC":null}catch{return null}}function U(l,o){let t=document.getElementById("adminFontDropStatus");if(t){if(!l){t.textContent="",t.hidden=!0,t.classList.remove("is-good","is-bad");return}t.hidden=!1,t.textContent=l,t.classList.toggle("is-good",o==="good"),t.classList.toggle("is-bad",o==="bad")}}function B(l){let o=document.getElementById("adminFontUploadError");if(!o)return;if(!l){o.hidden=!0,o.innerHTML="";return}o.hidden=!1,o.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${y(l)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let t=o.querySelector("[data-font-error-retry]");t&&t.addEventListener("click",function(){let d=document.getElementById("adminFontFileInput");d&&d.click()})}async function O(l){if(!l)return;B("");let o=l.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(o)){window.showToast(ServerI18n.t("invalidFileType"),!1),U(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),B(ServerI18n.t("fontsExtNotSupportedFull"));return}if(l.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),U(ServerI18n.t("fontsFileTooLarge"),"bad"),B(ServerI18n.t("fontsFileTooLargeFull"));return}let t=await C(l);if(!t){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),U(ServerI18n.t("fontsMagicInvalid"),"bad"),B(ServerI18n.t("fontsMagicValidationFailed"));return}U(ServerI18n.t("fontsUploadValidated",{magic:t,size:(l.size/1024).toFixed(1)}),"good");try{var d=new FormData;d.append("fontfile",l);var m=await window.csrfFetch("/admin/upload_font",{method:"POST",body:d}),e=await m.json();m.ok?(window.showToast(e.message||ServerI18n.t("fontUploadFallback")),U(ServerI18n.t("fontsUploadedStatus",{filename:l.name}),"good"),B(""),await T()):(window.showToast(e.error||ServerI18n.t("uploadFailed"),!1),U(e.error||ServerI18n.t("uploadFailed"),"bad"),B(e.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(n){console.error("[admin-fonts] upload error:",n),window.showToast(ServerI18n.t("uploadNetworkError"),!1),U(ServerI18n.t("fontsNetworkErrorShort"),"bad"),B(ServerI18n.t("fontsNetworkDisconnected"))}}function f(l){let o=document.getElementById("fontsTotalSize");o&&(o.textContent=ServerI18n.t("fontsTotalCount",{n:l.length}))}function c(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(l=>{l.addEventListener("click",o=>{if(o.target.closest(".admin-font-delete-btn"))return;let t=l.dataset.font,d=document.getElementById("fontsPreviewFamily"),m=document.getElementById("fontsPreviewHeadline"),e=document.getElementById("fontsPreviewLatin"),n=document.getElementById("fontsPreviewCJK");d&&(d.textContent=t);let u=`"${t}", sans-serif`;m&&(m.style.fontFamily=u),e&&(e.style.fontFamily=u),n&&(n.style.fontFamily=u)})})}async function i(){var l=document.getElementById("adminFontFileInput");if(l){var o=l.files&&l.files[0];if(!o){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await O(o),l.value=""}}function a(){let l=document.getElementById("adminFontDrop"),o=document.getElementById("adminFontFileInput");!l||!o||(l.addEventListener("click",t=>{t.target!==o&&o.click()}),l.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),o.click())}),["dragenter","dragover"].forEach(t=>{l.addEventListener(t,d=>{d.preventDefault(),d.stopPropagation(),l.classList.add("is-drag")})}),["dragleave","drop"].forEach(t=>{l.addEventListener(t,d=>{d.preventDefault(),d.stopPropagation(),l.classList.remove("is-drag")})}),l.addEventListener("drop",async t=>{let d=t.dataTransfer&&t.dataTransfer.files;d&&d[0]&&await O(d[0])}))}async function r(l){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",l),confirmLabel:ServerI18n.t("deleteBtn")}))try{var t=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(l),{method:"DELETE"}),d=await t.json();t.ok?(window.showToast(d.message||ServerI18n.t("fontDeleteFallback")),await T()):window.showToast(d.error||ServerI18n.t("deleteFailed"),!1)}catch(m){console.error("[admin-fonts] delete error:",m),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function s(){var l=document.getElementById("settings-grid");if(l){l.insertAdjacentHTML("beforeend",g());var o=document.getElementById("adminFontFileInput");o&&o.addEventListener("change",i),a();var t=document.getElementById("adminFontList");t&&t.addEventListener("click",function(d){var m=d.target.closest(".admin-font-delete-btn");if(m){d.stopPropagation(),r(m.dataset.name);return}var e=d.target.closest(".admin-font-default-btn");if(e){d.stopPropagation(),P(e.dataset.name);return}var n=d.target.closest(".admin-font-toggle-btn");if(n){d.stopPropagation();let p=n.dataset.enabled==="true";N(n.dataset.name,p);return}var u=d.target.closest(".admin-font-subset-btn");u&&(d.stopPropagation(),E(u.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(d=>d.ok?d.json():null).then(d=>{d&&Array.isArray(d.FontFamily)&&(h=d.FontFamily[3]||null)}).catch(()=>{}).finally(T)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&s()});l.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&s()}})})()});var Lt=me(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let b="sec-scheduler",g=5e3,h=null,_=null;function G(s,l,o,t){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${s}">
        <input type="text" placeholder="${v(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${v(l)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${v(o||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${t||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function S(s){var l=s==="active"?"is-success":s==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+l+'" title="'+v(s)+'"></span>'}function A(s){let l=s.state==="paused",o=s.repeat_count===void 0?"\u2014":s.repeat_count===-1?"\u221E":String(s.repeat_count),t=s.repeat_count>0&&typeof s.remaining=="number"?String(s.repeat_count-s.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${v(s.id)}">
        ${S(s.state)}
        <div>
          <div class="admin-scheduler-job-title">#${y(s.id)}</div>
          <div class="admin-scheduler-job-meta">${y(ServerI18n.t("schedulerMessages"))} ${s.messages?s.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${s.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${y(t)}</span>
        <span class="admin-scheduler-job-val">${y(o)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${l?"is-active":"is-warn"}"
            data-job-id="${v(s.id)}" data-action="${l?"resume":"pause"}">
            ${y(ServerI18n.t(l?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${v(s.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function v(s){return y(s)}function R(){let s=document.querySelectorAll("#schedulerMessages [data-msg-index]"),l=[];return s.forEach(function(o){let t=o.querySelector(".scheduler-msg-text").value.trim(),d=o.querySelector(".scheduler-msg-color").value,m=parseInt(o.querySelector(".scheduler-msg-size").value,10)||48;t&&l.push({text:t,color:d,size:m})}),l}function L(s,l,o){let t=document.getElementById("schedulerMessages");if(!t)return;let d=t.children.length;t.insertAdjacentHTML("beforeend",G(d,s||"",l||"#ffffff",o||48))}function E(s){let l=s.closest("[data-msg-index]");l&&l.remove();let o=document.getElementById("schedulerMessages");o&&o.querySelectorAll("[data-msg-index]").forEach(function(t,d){t.dataset.msgIndex=d})}async function x(){let s=R();if(s.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let l=parseInt(document.getElementById("schedulerInterval").value,10);if(!l||l<1||l>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let o=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(o)||o<-1||o>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let t=document.getElementById("schedulerCreateBtn");t&&(t.disabled=!0);try{let d=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:s,interval_sec:l,repeat_count:o})}),m=await d.json();d.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await f()):showToast(m.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(d){console.error("Scheduler create error:",d),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{t&&(t.disabled=!1)}}function P(s){return"msg"}function N(s){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[s]||"\u25C8"}function T(s){return s.next_run_at?new Date(s.next_run_at*1e3).getHours():new Date().getHours()}function C(s){if(s.next_run_at){let l=new Date(s.next_run_at*1e3);return String(l.getHours()).padStart(2,"0")+":"+String(l.getMinutes()).padStart(2,"0")}return"--:--"}function U(s){let l=s.id||"job",o=Array.isArray(s.messages)?s.messages.length:null;return"Job #"+l+(o!=null?" \xB7 "+o+" messages":"")}function B(s){let l=document.querySelector("[data-sch-timeline]");if(!l)return;let o=[],t=new Date().getHours();for(let m=0;m<24;m++){let e=m>=Math.max(0,t-1)&&m<=Math.min(23,t+2);o.push('<div class="admin-sch-timeline-hour'+(e?" is-peak":"")+'">'+String(m).padStart(2,"0")+"</div>")}let d=(s||[]).map(function(m){let e=P(m),n=N(e),u=m.state!=="paused";return'<div class="admin-sch-timeline-row'+(u?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+y(C(m))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+e+'">'+n+'</span><span class="admin-sch-evt-desc">'+y(U(m))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(u?" is-on":"")+'">'+ServerI18n.t(u?"uiOn":"uiOff")+"</span></div></div>"}).join("");l.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+o.join("")+"</div></div>"+(d||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+y(ServerI18n.t("noActiveJobs"))+"</div>"))}function O(s){let l=document.querySelector("[data-sch-calendar]");if(!l)return;let o=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],t=new Date,d=(t.getDay()+6)%7,m=new Date(t);m.setDate(t.getDate()-d);let e=o.map(function(u,p){let k=new Date(m);return k.setDate(m.getDate()+p),'<div class="admin-sch-calendar-day-head'+(p===d?" is-today":"")+'">'+y(u)+'<span class="date">'+k.getDate()+"</span></div>"}).join(""),n=[0,1,2,3,4,5,6].map(function(u){return'<div class="admin-sch-calendar-cell">'+(u===d?(s||[]).slice(0,5).map(function(k){let w=P(k),I=N(w);return'<span class="admin-sch-cal-chip is-'+w+'">'+y(C(k))+" "+I+"</span>"}).join(""):"")+"</div>"}).join("");l.innerHTML='<div class="admin-sch-calendar-head">'+e+'</div><div class="admin-sch-calendar-body">'+n+"</div>"}async function f(){let s=document.getElementById("schedulerJobsList"),l=document.getElementById("schedulerJobsCount");if(s)try{let o=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!o.ok){s.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",l&&(l.textContent="\u2014");return}let t=await o.json();if(!Array.isArray(t.jobs)){s.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",l&&(l.textContent="\u2014");return}l&&(l.textContent=ServerI18n.t("schItemCount",{n:t.jobs.length})),B(t.jobs),O(t.jobs);let d=document.querySelector("[data-sch-meta]");if(d){let m=new Date().toISOString().slice(0,10);d.textContent=ServerI18n.t("schTodayMeta",{date:m,n:t.jobs.length})}if(t.jobs.length===0){s.innerHTML="";let m=window.AdminEmpty.render("scheduler");m.dataset.emptyKind="scheduler",s.appendChild(m);return}s.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+y(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+y(ServerI18n.t("schColInterval"))+"</span><span>"+y(ServerI18n.t("schColSent"))+"</span><span>"+y(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+t.jobs.map(A).join("")}catch(o){console.error("Scheduler fetch error:",o),s.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadJobsError"))+"</div>"}}async function c(s,l){try{let o=await csrfFetch("/admin/scheduler/"+encodeURIComponent(l),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:s})}),t=await o.json();o.ok?(showToast(l==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await f()):showToast(t.error||ServerI18n.t("actionFailed"),!1)}catch(o){console.error("Scheduler toggle error:",o),showToast(ServerI18n.t("actionFailed"),!1)}}async function i(s){try{let l=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:s})}),o=await l.json();l.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await f()):showToast(o.error||ServerI18n.t("cancelFailed"),!1)}catch(l){console.error("Scheduler cancel error:",l),showToast(ServerI18n.t("cancelFailed"),!1)}}function a(){let s=document.getElementById("advanced-grid")||document.getElementById("settings-grid");if(!s)return;s.insertAdjacentHTML("beforeend",`
      <div id="${b}" class="admin-scheduler-page hud-page-stack lg:col-span-2">
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
    `);let l=document.querySelectorAll("[data-sch-view]");l.forEach(e=>{e.addEventListener("click",()=>{let n=e.dataset.schView;l.forEach(k=>{k.classList.toggle("is-active",k===e),k.setAttribute("aria-selected",k===e?"true":"false")});let u=document.querySelector("[data-sch-timeline]"),p=document.querySelector("[data-sch-calendar]");u&&(u.hidden=n!=="timeline"),p&&(p.hidden=n!=="calendar")})}),L("","#ffffff",48);let o=document.getElementById("schedulerMessages");o&&o.addEventListener("click",function(e){let n=e.target.closest(".scheduler-remove-msg");n&&E(n)});let t=document.getElementById("schedulerAddMsg");t&&t.addEventListener("click",function(){L("","#ffffff",48)});let d=document.getElementById("schedulerCreateBtn");d&&d.addEventListener("click",x);let m=document.getElementById("schedulerJobsList");m&&m.addEventListener("click",function(e){let n=e.target.closest(".scheduler-job-toggle");if(n){c(n.dataset.jobId,n.dataset.action);return}let u=e.target.closest(".scheduler-job-cancel");u&&i(u.dataset.jobId)}),h&&(clearInterval(h),h=null),_||(_=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(b)},intervalMs:g,tick:f}),window.addEventListener("beforeunload",function(){_&&(_(),_=null)}))}function r(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let s=!1;new MutationObserver(function(){if((document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(b)&&!s){s=!0;try{a()}finally{s=!1}}}).observe(document.body,{childList:!0,subtree:!0}),(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(b)&&a()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var Ct=me(()=>{(function(){"use strict";let y="admin-security-v2-page";var b=window.AdminUtils.escapeHtml;let g=null,h=!1,_=!1,G=0;function S(){let e=n=>ServerI18n.t(n);return`
        <div id="${y}" class="admin-security-page hud-page-stack lg:col-span-2" data-tpl="C">
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
      </div>`}function A(e){if(!e)return 0;let n=0;e.length>=8&&n++,e.length>=12&&n++;let u=(/[a-z]/.test(e)?1:0)+(/[A-Z]/.test(e)?1:0)+(/\d/.test(e)?1:0)+(/[^\w]/.test(e)?1:0);return u>=2&&n++,u>=3&&n++,Math.min(4,n)}function v(e){let n=document.getElementById("sec2-pw-meter"),u=document.getElementById("sec2-pw-label");if(!n||!u)return;let p=A(e),k=[0,25,50,75,100],w=["","is-bad","is-warn","is-warn","is-good"],I=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];n.style.width=k[p]+"%",n.className=w[p],u.textContent=I[p]}async function R(e){e.preventDefault();let n=document.getElementById("sec2-pw-current").value,u=document.getElementById("sec2-pw-new").value,p=document.getElementById("sec2-pw-confirm").value;if(!n||!u||!p){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(u.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(u!==p){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let k=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:n,new_password:u,confirm_password:p})}),w=await k.json().catch(()=>({}));k.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),v("")):window.showToast&&showToast(w.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(k){console.error("Password change error:",k),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function L(){let e=++G,n=document.getElementById("sec2-wsa-status");_=!0,E(!0),n.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let u=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!u.ok)throw new Error(u.status);let p=await u.json();if(e!==G)return!1;g={require_token:!!p.require_token,token:p.token||""},document.getElementById("sec2-wsa-toggle").checked=!!p.require_token,document.getElementById("sec2-wsa-token").value=p.token||"",n.textContent=p.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),n.className="admin-ui-chip admin-sec-status-chip "+(p.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,N();let k=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=k?new Date(parseInt(k,10)).toLocaleString():"\u2014",!0}catch{return e!==G||(g=null,E(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,n.textContent=ServerI18n.t("security2LoadFailed"),n.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{e===G&&(_=!1,E(h||!g),h||N())}}function E(e){["toggle","token","save","rotate","copy","reveal"].forEach(n=>{document.getElementById("sec2-wsa-"+n).disabled=e}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",e)}function x(){return h||_||!g?!1:(h=!0,++G,E(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function P(){if(h=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,E(_||!g),g&&!_){let e=document.getElementById("sec2-wsa-status");e.textContent=ServerI18n.t(g.require_token?"security2StatusEnabled":"security2StatusDisabled"),e.className="admin-ui-chip admin-sec-status-chip "+(g.require_token?"is-active":""),N()}}function N(){if(h||_||!g)return;document.getElementById("sec2-wsa-disabled-warning").hidden=g.require_token;let e=document.getElementById("sec2-wsa-toggle").checked!==g.require_token||document.getElementById("sec2-wsa-token").value.trim()!==g.token;document.getElementById("sec2-wsa-draft-hint").hidden=!e}function T(e){return String(e||"").split(/\n+/).map(n=>n.trim()).filter(Boolean)}function C(e){return String(e||"").split(",").map(n=>n.trim().toUpperCase()).filter(Boolean)}function U(e,n){let u=document.getElementById(e);u&&(u.textContent=n==null||n===""?"\u2014":String(n))}async function B(){try{let e=await fetch("/admin/security/settings",{credentials:"same-origin"}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error(n.error||e.status);let u=n.ip_allowlist||{},p=n.cors||{},k=n.tls||{},w=!!u.enabled,I=Array.isArray(u.entries)?u.entries:[],F=document.getElementById("sec2-ip-dot"),H=document.getElementById("sec2-ip-status-chip"),D=document.getElementById("sec2-ip-toggle"),$=document.getElementById("sec2-ip-entries");F&&(F.classList.toggle("is-lime",w),F.classList.toggle("is-amber",!w)),H&&(H.textContent=w?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),H.className="admin-ui-chip admin-sec-status-chip "+(w?"is-active":"is-warn")),D&&(D.checked=w),$&&($.value=I.join(`
`)),U("sec2-ip-current",u.current_ip||"\u2014"),U("sec2-ip-status-line",w?ServerI18n.t("security2IpStatusEnabled",{n:I.length}):ServerI18n.t("security2IpStatusDisabled"));let j=Array.isArray(p.origins)?p.origins:["*"],K=Array.isArray(p.methods)?p.methods:[],Y=document.getElementById("sec2-cors-origins"),M=document.getElementById("sec2-cors-credentials"),q=document.getElementById("sec2-cors-methods"),V=document.getElementById("sec2-cors-cred-dot");Y&&(Y.value=j.join(`
`)),M&&(M.checked=!!p.supports_credentials),q&&(q.value=K.join(", ")),V&&(V.classList.toggle("is-lime",!p.supports_credentials),V.classList.toggle("is-amber",!!p.supports_credentials)),U("sec2-cors-origins-line",j.join(", ")),U("sec2-cors-credentials-line",p.supports_credentials?"true":"false"),U("sec2-cors-methods-line",K.join(", "));let ne=k.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:k.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");U("sec2-hsts-status",ne)}catch(e){console.error("Security settings load error:",e);let n=document.getElementById("sec2-ip-status-chip");n&&(n.textContent=ServerI18n.t("security2LoadFailed"),n.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function O(e){let n={};if(e==="ip")n.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:T(document.getElementById("sec2-ip-entries")?.value||"")};else if(e==="cors"){let u=T(document.getElementById("sec2-cors-origins")?.value||"");n.cors={origins:u.length?u:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:C(document.getElementById("sec2-cors-methods")?.value||"")}}try{let u=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),p=await u.json().catch(()=>({}));if(!u.ok){window.showToast&&showToast(p.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await B()}catch(u){console.error("Security settings save error:",u),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function f(){if(h||_||!g)return;let e=document.getElementById("sec2-wsa-toggle").checked,n=document.getElementById("sec2-wsa-token").value.trim();if(e&&!n){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(x())try{let u=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:e,token:n})}),p=await u.json().catch(()=>({}));u.ok?await L()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(p.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}async function c(){if(!(h||_||!g||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&x())try{let n=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),u=await n.json().catch(()=>({}));if(n.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await L()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(u.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}function i(){let e=document.getElementById("sec2-wsa-token").value;if(!e){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function a(){let e=document.getElementById("sec2-wsa-token");e.type=e.type==="password"?"text":"password";let n=e.type==="text",u=document.getElementById("sec2-wsa-reveal");u.setAttribute("aria-pressed",String(n)),u.textContent=ServerI18n.t(n?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),u.setAttribute("aria-label",u.textContent)}async function r(e){if(e==="reset-ws"&&(h||_||!g))return;let n={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:p=>ServerI18n.t("security2ToastApiTokensRevoked",{n:p.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[e];if(!(!n||!await window.HudConfirm?.open({icon:"\u26A0",title:n.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:n.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:n.severity||"warn",body:n.confirm,confirmLabel:n.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(e==="reset-ws"&&!x()))try{let p=await window.csrfFetch(n.url,{method:"POST"}),k=await p.json().catch(()=>({}));if(!p.ok){window.showToast&&showToast(k.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(e==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await L())return}window.showToast&&showToast(n.ok(k),!0)}catch(p){console.error("Security danger action error:",p),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{e==="reset-ws"&&P()}}function s(){let e=document.getElementById("sec2-session-self-line");if(e){let p=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),k=navigator.platform||navigator.userAgentData?.platform||"",w=p?p[0].split("/")[0]:"Browser";e.textContent=ServerI18n.t("security2SessionSelfLine",{browser:w,platform:k})}let n=document.getElementById("sec2-tls-dot"),u=document.getElementById("sec2-tls-status");if(n&&u){let p=location.protocol==="https:";n.classList.add(p?"is-lime":"is-crimson"),u.textContent=p?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function l(){let e=document.getElementById("sec2-pw-form");e&&e.addEventListener("submit",R);let n=document.getElementById("sec2-pw-new");n&&n.addEventListener("input",u=>v(u.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",f),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",c),document.getElementById("sec2-wsa-copy")?.addEventListener("click",i),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",a),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",N),document.getElementById("sec2-wsa-token")?.addEventListener("input",N),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>O("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>O("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(u=>{u.addEventListener("click",()=>{let p=document.querySelector(`[data-sec-disclosure="${u.dataset.secDisclose}"]`);p&&(p.hidden=!p.hidden,u.setAttribute("aria-expanded",p.hidden?"false":"true"),p.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(u=>{u.dataset.secBound!=="1"&&(u.dataset.secBound="1",u.addEventListener("click",()=>r(u.dataset.secDanger)))}),s(),L(),B()}function o(){}function t(){let e=document.querySelector(".admin-dash-grid"),n=document.getElementById(y);if(!e||!n)return;let u=e.dataset.activeRoute||"live",p=e.dataset.activeLeaf||u;n.style.display=u==="security"||u==="system"&&p==="security"?"":"none"}function d(){let e=document.getElementById("settings-grid");!e||document.getElementById(y)||(e.insertAdjacentHTML("beforeend",S()),l(),t())}function m(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let e=null;function n(){let p=document.querySelector(".admin-dash-grid");!p||e||(e=new MutationObserver(t),e.observe(p,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?d():void 0,n(),t()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",t),document.addEventListener("admin-panel-rendered",()=>{d(),n(),t()}),n(),d()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m()})()});var At=me(()=>{(function(){"use strict";let y="admin-backup-v2-page";var b=window.AdminUtils.escapeHtml;function g(){let s=l=>ServerI18n.t(l);return`
      <div id="${y}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${s("backupPageTitle")}</h2>
          <p class="admin-ui-page-note">${s("backupPageNote")}</p>
          <!-- 2026-09-07\uFF1A\u642C\u56DE\u9801\u9996\u88E1\u3002\u9801\u9996\u88AB\u4F75\u9032 topbar \u6642\uFF0Cshell \u7684
               [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB\uFF08\u898B admin.js \u7684
               _dedupSectionTitles\uFF09\uFF0C\u4E0D\u6703\u518D\u8DDF\u8457\u6D88\u5931\u3002 -->
          <div class="admin-ui-inline-toolbar admin-ui-page-actions">
            <button type="button" id="bk2-pack-export" class="admin-ui-action is-primary">${s("backupPackExportBtn")}</button>
          </div>
        </div>

        <div class="admin-ui-group-label">${s("backupGroupDownload")}</div>
        <div class="admin-ui-group" data-zone="export">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecFullState")}
              <span class="sub" id="bk2-pack-summary">${s("backupCalculatingSize")}</span>
              <span class="sub" id="bk2-pack-detail">${s("backupPackContentList")}</span>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecSettingsSnap")}
              <span class="sub">${s("backupSettingsSnapshotDesc")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-settings-download" class="admin-ui-action is-primary">${s("backupDownloadBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecAssetPack")}
              <span class="sub" id="bk2-assets-summary">${s("backupCalculatingAssetSize")}</span>
              <span class="sub" id="bk2-assets-detail">${s("backupAssetContentList")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-assets-export" class="admin-ui-action is-primary">${s("backupAssetsExportBtn")}</button>
            </span>
          </div>

        </div>

        <div class="admin-ui-group-label">${s("backupGroupRestore")}</div>
        <div class="admin-ui-group" data-zone="restore">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecRestoreSettings")}
              <span class="sub">${s("backupSettingsRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-settings-upload" type="file" accept="application/json,.json" class="admin-ui-input" />
              <button type="button" id="bk2-settings-dryrun" class="admin-ui-action">${s("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-settings-apply" class="admin-ui-danger-btn" disabled title="${s("backupApplyDisabledTitle")}">${s("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-settings-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecRestoreFull")}
              <span class="sub">${s("backupFullPackRestoreNote")}</span>
              <span class="sub">${s("backupRestoreBeforeApplyHint")}</span>
            </span>
            <span class="val">
              <input id="bk2-pack-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-pack-dryrun" class="admin-ui-action">${s("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-pack-apply" class="admin-ui-danger-btn" disabled title="${s("backupApplyDisabledTitle")}">${s("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-pack-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecRestoreAssets")}
              <span class="sub">${s("backupAssetRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-assets-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-assets-dryrun" class="admin-ui-action">${s("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-assets-apply" class="admin-ui-danger-btn" disabled title="${s("backupApplyDisabledTitle")}">${s("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-assets-diff" class="admin-backup-diff" hidden></pre></div>
        </div>

        <div class="admin-ui-danger-label">${s("backupGroupDanger")}</div>
        <div class="admin-ui-group is-danger" data-zone="danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecClearHistory")}
              <span class="sub">${s("backupClearHistoryDesc")}</span>
            </span>
            <span class="val">
              <select id="bk2-clear-scope" class="admin-ui-select">
                <option value="all" selected>${s("backupClearScopeAll")}</option>
              </select>
              <button type="button" id="bk2-clear-history" class="admin-ui-danger-btn">${s("backupClearBtn")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecFactoryReset")}
              <span class="sub">${s("backupFactoryResetDesc")}</span>
            </span>
            <span class="val">
              <input id="bk2-factory-confirm" type="text" class="admin-ui-input" placeholder="reset" autocomplete="off" spellcheck="false" />
              <button type="button" id="bk2-factory-reset" class="admin-ui-danger-btn" disabled>${s("backupFactoryResetBtn")}\u2026</button>
            </span>
          </div>
        </div>
      </div>`}async function h(){try{let s=await fetch("/get_settings",{credentials:"same-origin"});if(!s.ok)throw new Error(s.status);let l=await s.json(),o=["password","token","secret","hash"],t={};Object.keys(l||{}).forEach(u=>{o.some(p=>u.toLowerCase().includes(p))||(t[u]=l[u])});let d=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:t},null,2)],{type:"application/json"}),m=URL.createObjectURL(d),e=new Date().toISOString().replace(/[:.]/g,"-"),n=document.createElement("a");n.href=m,n.download="danmu-settings-"+e+".json",document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(m),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(s){console.error("Settings snapshot error:",s),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let _=null;function G(){_=null;let s=document.getElementById("bk2-settings-apply");s&&(s.disabled=!0,s.title=ServerI18n.t("backupApplyDisabledTitle"))}async function S(){let s=document.getElementById("bk2-settings-upload"),l=document.getElementById("bk2-settings-diff"),o=document.getElementById("bk2-settings-apply"),t=s&&s.files&&s.files[0];if(!t){G(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let d=await t.text(),m=JSON.parse(d),e=m.settings||m;if(!e||typeof e!="object"||Array.isArray(e))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let n=await fetch("/get_settings",{credentials:"same-origin"}),u=n.ok?await n.json():{},p=[];new Set([...Object.keys(u),...Object.keys(e)]).forEach(w=>{let I=JSON.stringify(u[w]),F=JSON.stringify(e[w]);I!==F&&(I===void 0?p.push("+ "+w+": "+F):F===void 0?p.push("- "+w+": "+I):p.push("~ "+w+": "+I+" \u2192 "+F))}),l.textContent=p.length?p.join(`
`):ServerI18n.t("backupNoDiff"),l.hidden=!1,_=e,o&&(o.disabled=!1,o.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:p.length}),!0)}catch(d){console.error("Dry-run error:",d),G(),l.textContent=ServerI18n.t("backupParseFailedDetail",{msg:d&&d.message?d.message:String(d)}),l.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function A(){let s=document.getElementById("bk2-settings-diff"),l=document.getElementById("bk2-settings-apply");if(!_){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"warn",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let t=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:_})}),d=await t.json().catch(()=>({}));if(!t.ok){s&&(s.hidden=!1,s.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(d.details||d,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}s&&(s.hidden=!1,s.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(d.applied||[]).length+" settings"),_=null,l&&(l.disabled=!0,l.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(t){s&&(s.hidden=!1,s.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:t&&t.message?t.message:String(t)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function v(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function R(){let s=document.getElementById("bk2-factory-confirm"),l=document.getElementById("bk2-factory-reset");!s||!l||(s.addEventListener("input",()=>{let o=s.value.trim()==="reset";l.classList.toggle("is-ready",o),l.disabled=!o}),l.addEventListener("click",L))}async function L(){let s=document.getElementById("bk2-factory-confirm"),l=document.getElementById("bk2-factory-reset");if((s?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{l&&(l.disabled=!0);let t=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),d=await t.json().catch(()=>({}));if(!t.ok||!d.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),l&&(l.disabled=!1);return}s&&(s.value=""),l&&(l.classList.remove("is-ready"),l.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),N()}catch{l&&(l.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function E(){document.getElementById("bk2-settings-download")?.addEventListener("click",h),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",S),document.getElementById("bk2-settings-apply")?.addEventListener("click",A),document.getElementById("bk2-clear-history")?.addEventListener("click",v),document.getElementById("bk2-pack-export")?.addEventListener("click",T),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",B),document.getElementById("bk2-pack-apply")?.addEventListener("click",O),document.getElementById("bk2-assets-export")?.addEventListener("click",U),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",f),document.getElementById("bk2-assets-apply")?.addEventListener("click",c),R(),N(),C()}let x=null,P=null;async function N(){let s=document.getElementById("bk2-pack-summary");if(s)try{let l=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!l.ok){s.textContent=ServerI18n.t("backupPreviewUnavailable");return}let o=await l.json(),t=(o.total_bytes/(1024*1024)).toFixed(2);s.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:o.file_count||0,mb:t})}catch{s.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function T(){window.location.href="/admin/backup/export",window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function C(){let s=document.getElementById("bk2-assets-summary");if(s)try{let l=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!l.ok){s.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let o=await l.json(),t=(o.total_bytes/(1024*1024)).toFixed(2);s.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:o.file_count||0,mb:t})}catch{s.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function U(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}async function B(){let l=document.getElementById("bk2-pack-upload")?.files?.[0];if(!l){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(l.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let o=new FormData;o.append("file",l);let t=document.getElementById("bk2-pack-diff"),d=document.getElementById("bk2-pack-apply");try{let m=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:o}),e=await m.json().catch(()=>({}));if(!m.ok||!e.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(e.errors||e,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),d&&(d.disabled=!0),x=null;return}if(t){t.hidden=!1;let n=[],u=e.manifest||{};n.push("manifest version: "+(u.version||"?")),n.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),n.push(""),n.push("Will write "+(e.members?.length||0)+" files:"),(e.members||[]).forEach(p=>{n.push("  "+p.label+"/"+p.path.split("/").slice(1).join("/")+" ("+(p.size||0)+" B)")}),e.skipped?.length&&(n.push(""),n.push("Skipped "+e.skipped.length+" entries:"),e.skipped.forEach(p=>n.push("  "+p.path+" \u2014 "+p.reason))),t.textContent=n.join(`
`)}x=l,d&&(d.disabled=!1,d.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:e.members?.length||0}),!0)}catch(m){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:m.message||""}),!1)}}async function O(){if(!x){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let l=new FormData;l.append("file",x);try{let t=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:l})).json().catch(()=>({})),d=document.getElementById("bk2-pack-diff");if(d){d.hidden=!1;let m=[];t.ok?(m.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),m.push(""),m.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&m.push("Skipped "+t.skipped.length+" (see above)")):(m.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),m.push(JSON.stringify(t.errors||t,null,2))),d.textContent=m.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint",{n:t.applied}),!0),x=null;let m=document.getElementById("bk2-pack-apply");m&&(m.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(o){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:o.message||""}),!1)}}async function f(){let l=document.getElementById("bk2-assets-upload")?.files?.[0];if(!l){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(l.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let o=new FormData;o.append("file",l);let t=document.getElementById("bk2-assets-diff"),d=document.getElementById("bk2-assets-apply");try{let m=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:o}),e=await m.json().catch(()=>({}));if(!m.ok||!e.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(e.errors||e,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),d&&(d.disabled=!0),P=null;return}if(t){t.hidden=!1;let n=[],u=e.manifest||{};n.push("manifest version: "+(u.version||"?")),n.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),n.push(""),n.push("Will write "+(e.members?.length||0)+" asset files:"),(e.members||[]).forEach(p=>{n.push("  "+p.path+" ("+(p.size||0)+" B)")}),e.skipped?.length&&(n.push(""),n.push("Skipped "+e.skipped.length+" entries:"),e.skipped.forEach(p=>n.push("  "+p.path+" \u2014 "+p.reason))),t.textContent=n.join(`
`)}P=l,d&&(d.disabled=!1,d.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:e.members?.length||0}),!0)}catch(m){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:m.message||""}),!1)}}async function c(){if(!P){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"warn",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let l=new FormData;l.append("file",P);try{let t=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:l})).json().catch(()=>({})),d=document.getElementById("bk2-assets-diff");if(d){d.hidden=!1;let m=[];t.ok?(m.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),m.push(""),m.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&m.push("Skipped "+t.skipped.length+" (see above)")):(m.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),m.push(JSON.stringify(t.errors||t,null,2))),d.textContent=m.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:t.applied}),!0),P=null;let m=document.getElementById("bk2-assets-apply");m&&(m.disabled=!0),C()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(o){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:o.message||""}),!1)}}function i(){let s=document.querySelector(".admin-dash-grid"),l=document.getElementById(y);if(!s||!l)return;let o=s.dataset.activeLeaf||"dashboard";l.style.display=o==="backup"?"":"none"}function a(){let s=document.getElementById("settings-grid");!s||document.getElementById(y)||(s.insertAdjacentHTML("beforeend",g()),E(),i())}function r(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&a(),i()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",i),document.addEventListener("admin-panel-rendered",()=>{a(),i()}),a()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var Bt=me(()=>{(function(){"use strict";let y="admin-broadcast-v2-page",b="/admin/broadcast/status",g="/admin/broadcast/toggle",h={mode:"live",started_at:null,total_messages:0,queue_size:0};function _(e){try{window.dispatchEvent(new CustomEvent("danmu-broadcast-changed",{detail:e}))}catch{}}function G(){return{mode:h.mode,started_at:typeof h.started_at=="number"?h.started_at*1e3:null}}let S=null;async function A(){try{let e=await fetch(b,{credentials:"same-origin"});if(!e.ok)return;let n=await e.json();n&&(n.mode==="live"||n.mode==="standby")&&(S=n.session||null,h=n,_(G()))}catch{}}async function v(e){try{let n=await window.csrfFetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:e})});if(!n.ok){let p=await n.json().catch(()=>({}));throw new Error(p&&p.error?p.error:`HTTP ${n.status}`)}return h=await n.json(),_(G()),!0}catch(n){return console.warn("[admin-broadcast] toggle failed:",n),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:n&&n.message||""}),!1),!1}}function R(e){(!Number.isFinite(e)||e<0)&&(e=0);let n=Math.floor(e/1e3),u=String(Math.floor(n/3600)).padStart(2,"0"),p=String(Math.floor(n%3600/60)).padStart(2,"0"),k=String(n%60).padStart(2,"0");return`${u}:${p}:${k}`}function L(){let e=S||{};return e.status==="live"||e.state==="active"}function E(){let e=S||{};return e.status==="ended"||e.state==="ended"}function x(){let e=h.mode||"standby";return E()?"ended":e==="live"?"live":L()?"paused":"standby"}function P(){return`
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
      </div>`}let N=0,T=0,C=0,U=0,B=0;async function O(){try{let e=await fetch("/admin/metrics",{credentials:"same-origin"});if(!e.ok)return;N=(await e.json()).ws_clients||0}catch{}try{let e=await fetch("/admin/fingerprints?limit=1",{credentials:"same-origin"});if(e.ok){let n=await e.json();typeof n.total=="number"&&(T=n.total)}}catch{}}let f={standby:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 OFF"},live:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 ON"},paused:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 PAUSED"},ended:{titleKey:"broadcastEndedTitle",en:"SESSION ENDED"}},c={standby:ServerI18n.t("uiDisplayOff"),live:ServerI18n.t("uiDisplayOn"),paused:"DESKTOP PAUSED",ended:"SESSION ENDED"};function i(){let e=document.getElementById(y);if(!e)return;let n=x(),u=n==="live",p=n==="paused",k=n==="ended",w=n==="standby";e.dataset.bcState=n;let I=e.querySelector("[data-bc-title]"),F=e.querySelector("[data-bc-en]");if(I&&(I.textContent=ServerI18n.t(f[n].titleKey)),F){let Q=u&&h.started_at?Date.now()/1e3-h.started_at:0;F.textContent=u?`DESKTOP \xB7 ON \xB7 ${R(Q*1e3)}`:k&&S?.ended_at?`SESSION ENDED \xB7 ${new Date(S.ended_at*1e3).toISOString().slice(0,10)}`:f[n].en}let H=e.querySelector("[data-bc-body]"),D=e.querySelector("[data-bc-ended]");H&&D&&(H.hidden=k,D.hidden=!k);let $=e.querySelector("[data-bc-statedot]"),j=e.querySelector("[data-bc-statelabel]"),K=e.querySelector("[data-bc-elapsed]"),Y=e.querySelector("[data-bc-sched]");if($&&($.dataset.state=n),j&&(j.textContent=c[n]||c.standby,j.dataset.state=n),K){let Q=u&&h.started_at?Date.now()-h.started_at*1e3:0;K.textContent=R(Q),K.hidden=!u}if(Y){let Q=S?.scheduled_at;if(w&&typeof Q=="number"&&Q>Date.now()/1e3){let se=Math.max(0,Q-Date.now()/1e3),de=String(Math.floor(se/60)).padStart(2,"0"),ce=String(Math.floor(se%60)).padStart(2,"0"),ve=new Date(Q*1e3),fe=`${String(ve.getHours()).padStart(2,"0")}:${String(ve.getMinutes()).padStart(2,"0")}`;Y.textContent=ServerI18n.t("broadcastSchedCountdown",{time:fe,mm:de,ss:ce}),Y.hidden=!1}else Y.hidden=!0}let M=h.total_messages||0,q=h.fire_count||M,V=h.started_at&&(u||p)?Date.now()/1e3-h.started_at:0,ne=w?"\u2014":R(V*1e3).slice(3),W=(Q,se)=>{let de=e.querySelector(Q);de&&(de.textContent=se)};W("[data-bc-stat-elapsed]",w?"\u2014":ne),W("[data-bc-stat-msgs]",w?"0":M.toLocaleString()),W("[data-bc-stat-fp]",w?"0":T.toLocaleString()),W("[data-bc-stat-fire]",w?"0":q.toLocaleString());let Z=e.querySelector("[data-bc-session-ctx]");if(Z){let Q=S||{},se=!!(Q.id||Q.name);if(Z.hidden=!se,se){let de=e.querySelector("[data-bc-session-id]"),ce=e.querySelector("[data-bc-session-started]"),ve=e.querySelector("[data-bc-session-window]");if(de&&(de.textContent=Q.name||Q.id||"\u2014"),ce){let fe=Q.started_at;if(typeof fe=="number"){let z=new Date(fe*1e3),X=ee=>String(ee).padStart(2,"0");ce.textContent=`Started \xB7 ${X(z.getHours())}:${X(z.getMinutes())}:${X(z.getSeconds())}`}else ce.textContent="Started \xB7 \u2014"}if(ve){let fe=Q.started_at;if(typeof fe=="number"){let z=Date.now()-fe*1e3;ve.textContent=`Window \xB7 ${R(z).slice(3)}`}else ve.textContent="Window \xB7 \u2014"}}}let te=e.querySelector("[data-bc-big]");if(te)if(u){let Q=L();te.className="admin-bc-v4__big admin-bc-v5__big is-on",te.textContent=Q?ServerI18n.t("broadcastBigPause"):ServerI18n.t("broadcastBigStop")}else p?(te.className="admin-bc-v4__big admin-bc-v5__big is-resume",te.textContent=ServerI18n.t("broadcastBigResume")):(te.className="admin-bc-v4__big admin-bc-v5__big is-off",te.textContent=ServerI18n.t("broadcastBigStart"));let oe=e.querySelector("[data-bc-confirm-hint]");if(oe&&(oe.hidden=!(u&&!L())),e.querySelectorAll("[data-bc-clear]").forEach(Q=>{Q.disabled=w||k}),k){let Q=S||{},se=Q.duration_sec?R(Q.duration_sec*1e3).slice(3):"\u2014";W("[data-bc-end-dur]",se),W("[data-bc-end-msgs]",String(Q.total_messages||M||"\u2014")),W("[data-bc-end-fp]",String(Q.unique_fp||T||"\u2014")),W("[data-bc-end-fire]",String(Q.fire_count||q||"\u2014"))}}async function a(){let e=x();if(e==="standby")await v("live")&&window.showToast&&showToast(ServerI18n.t("broadcastToastSwitchedLive"),!0);else if(e==="paused")await v("live")&&window.showToast&&showToast(ServerI18n.t("broadcastToastResumed"),!0);else if(e==="live"){if(L()){await v("standby")&&window.showToast&&showToast(ServerI18n.t("broadcastToastPaused"),!0),i();return}let u=h.started_at?Date.now()-h.started_at*1e3:0,p=R(u),k=h.total_messages||0,w=T.toLocaleString();if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("broadcastStopLabel"),subtitle:ServerI18n.t("cfmSubStopDisplay"),severity:"warn",body:`
              <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                ${ServerI18n.t("broadcastStopBodyDesc")}
              </div>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:10px 12px;margin-top:12px;background:var(--hud-bg2, #182239);border-radius:6px;border:1px solid var(--hud-line, rgba(148,163,184,0.18));text-align:center;">
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">${ServerI18n.t("uiStatMsgs")}</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${k.toLocaleString()}</div></div>
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">FP</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${w}</div></div>
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">${ServerI18n.t("uiColTime")}</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${p}</div></div>
              </div>
              <div style="margin-top:12px;font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:0.3px;color: var(--color-ink-warning);">
                ${ServerI18n.t("broadcastStopBodyWarn")}
              </div>`,confirmLabel:ServerI18n.t("broadcastStopLabel"),cancelLabel:ServerI18n.t("cancel"),width:440}))return;await v("standby")&&window.showToast&&showToast(ServerI18n.t("broadcastToastStopped")+" \xB7 "+ServerI18n.t("uiDisplayOff"),!0)}i()}async function r(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"warn",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearModalConfirm")}))try{let n=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});n.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:n.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}function s(){let e=document.getElementById(y);e&&(e.querySelector("[data-bc-big]")?.addEventListener("click",a),e.querySelector("[data-bc-clear]")?.addEventListener("click",r))}function l(){C||(A(),O(),i(),U=setInterval(A,5e3),C=setInterval(()=>{O().then(i)},1e4),B=setInterval(i,1e3))}function o(){U&&(clearInterval(U),U=0),C&&(clearInterval(C),C=0),B&&(clearInterval(B),B=0)}function t(){let e=document.querySelector(".admin-dash-grid"),n=document.getElementById(y);if(!e||!n)return;let u=e.dataset.activeLeaf||"dashboard",p=u==="overlay"||u==="broadcast";n.style.display=p?"":"none",p?l():o()}function d(){let e=document.getElementById("settings-grid");!e||document.getElementById(y)||(e.insertAdjacentHTML("beforeend",P()),s(),t())}function m(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&d(),t()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",t),document.addEventListener("admin-panel-rendered",()=>{d(),t()}),d()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m()})()});var Ft=me(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,b=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;let h=["keyword","regex","replace","rate_limit"],_=["block","replace","allow"];function G(D){var $=y();return $[D]!==void 0?$[D]:!1}function S(D,$){if(typeof ServerI18n<"u"&&ServerI18n.t){let j=ServerI18n.t(D);if(j&&j!==D)return j}return $||D}let A={keyword:"is-cyan",regex:"is-cyan",replace:"is-amber",rate_limit:"is-danger"},v={block:"var(--hud-crimson)",replace:"var(--hud-amber)",allow:"var(--hud-lime)"};function R(){return`
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
            ${[{id:"url",label:ServerI18n.t("fltPresetUrl"),pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",label:ServerI18n.t("fltPresetAllcaps"),pattern:"^[A-Z\\W\\s]{8,}$",action:"mask"},{id:"repeat",label:ServerI18n.t("fltPresetRepeat"),pattern:"(.)\\1{6,}",action:"mask"},{id:"emojionly",label:"Emoji-only",pattern:"^[\\p{Emoji}\\s]+$",action:"block"}].map(D=>`
              <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${D.id}" data-flt-pattern="${D.pattern}" data-flt-action="${D.action}" data-flt-label="${D.label}">
                <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
                <span class="admin-flt-v4__qchip-label">${D.label}</span>
                <span class="admin-flt-v4__qchip-hits" data-flt-quick-hits="${D.id}">\u2014</span>
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
            <div class="hud-table-head" style="grid-template-columns: 1.6fr 80px 80px 60px 60px 40px;border-bottom:1px solid var(--hud-line-strong);padding:8px 14px">
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
                <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">${S("addFilterRule","Add Rule")}</span>

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
                      <option value="block">block</option>
                      <option value="replace">replace</option>
                      <option value="allow">allow</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label for="filterPattern" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("mlPattern")}</label>
                  <input type="text" id="filterPattern" placeholder="${S("filterPatternPlaceholder","Enter pattern...")}"
                    class="admin-ui-input" />
                </div>
                <div id="filterReplacementRow" class="hidden">
                  <label for="filterReplacement" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("fltColReplacement")}</label>
                  <input type="text" id="filterReplacement" placeholder="${S("filterReplacementPlaceholder","Replacement text...")}"
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
                  + ${S("addRule","Add Rule")}
                </button>
              </div>
            </div>

            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">${S("testRule","Test Rule")}</span>
              </div>
              <div style="padding:14px;display:flex;flex-direction:column;gap:8px">
                <input id="filterTestText" type="text" placeholder="${S("sampleText","Sample text...")}"
                  class="admin-ui-input" />
                <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action" style="align-self:flex-start">${S("testBtn","Test")}</button>
                <div id="filterTestResult" style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);letter-spacing:0.02em"></div>
              </div>
            </div>
          </div>
        </div>
      </div>`}let L="all";function E(D){let $=A[D.type]||"is-default",j=v[D.action]||"var(--color-text-muted)",K={keyword:"ulWord",regex:"ulRegex",replace:"ulReplace",rate_limit:"ulRate"},Y=ServerI18n.t(K[D.type]||"ulWord"),M=D.pattern;if(D.type==="replace"&&D.replacement!==void 0&&(M=`${D.pattern}  \u2192  ${D.replacement}`),D.type==="rate_limit"){let V=D.max_count||5,ne=D.window_sec||60;M=`${D.pattern}  \xB7  ${V}/${ne}s`}return`
      <div class="hud-table-row hud-rule-row" style="grid-template-columns: 1.6fr 80px 80px 60px 60px 40px;${D.enabled?"":"opacity:0.45;"}" data-rule-id="${g(D.id)}" data-rule-type="${g(D.type)}">
        <span style="font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all">${g(M)}</span>
        <span class="hud-pill ${$}">${Y}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;padding:2px 6px;border-radius:3px;background:${j};color:#000;font-weight:700;width:fit-content;text-transform:uppercase">${g(D.action)}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">P${g(String(D.priority))}</span>
        <label class="relative inline-block" style="width:32px;align-self:center" title="${g(D.enabled?S("enabled","Enabled"):S("disabled","Disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${g(D.id)}" ${D.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${D.enabled?"is-on":"is-off"}" style="cursor:pointer"></span>
        </label>
        <button class="filter-delete-btn" type="button" data-rule-id="${g(D.id)}" title="${S("deleteRule","Delete")}" aria-label="${S("deleteRule","Delete")}">${window.AdminUtils.closeIcon}</button>
      </div>`}function x(D){let $={all:D.length,keyword:0,regex:0,replace:0,rate_limit:0};D.forEach(K=>{$[K.type]!=null&&$[K.type]++}),Object.keys($).forEach(K=>{let Y=document.querySelector(`[data-filter-count="${K}"]`);Y&&(Y.textContent=$[K])});let j=document.querySelector('[data-mod-stat="rules"]');j&&(j.textContent=$.all)}async function P(){let D=document.querySelector('[data-mod-stat="blacklist"]');if(D)try{let $=await fetch("/admin/blacklist/get",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json(),K=Array.isArray(j)?j:j.keywords||[];D.textContent=String(K.length)}catch{}}async function N(){try{let D=await csrfFetch("/admin/filters/list");if(!D.ok)throw new Error("HTTP "+D.status);return(await D.json()).rules||[]}catch(D){return console.error("Failed to fetch filter rules:",D),showToast(S("fetchFiltersFailed","Failed to load filter rules"),!1),[]}}async function T(){let D=document.getElementById("filterRulesList");if(!D)return;D.innerHTML=`<div style="padding:12px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${S("loading","Loading...")}</div>`;let $=await N();if(x($),P(),$.length===0){if(window.AdminEmpty){let K=window.AdminEmpty.render("filters");K.setAttribute("data-empty-kind","filters"),D.innerHTML="",D.appendChild(K)}else D.innerHTML=`<div data-empty-kind="filters" style="padding:18px 14px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${S("noFilterRules","No filter rules configured.")}</div>`;return}let j=L==="all"?$:$.filter(K=>K.type===L);D.innerHTML=j.map(E).join("")}async function C(){let D=document.getElementById("filterType"),$=document.getElementById("filterAction"),j=document.getElementById("filterPattern"),K=document.getElementById("filterReplacement"),Y=document.getElementById("filterPriority"),M=document.getElementById("filterMaxCount"),q=document.getElementById("filterWindowSec"),V=D.value,ne=(j.value||"").trim();if(!ne){showToast(S("patternRequired","Pattern is required"),!1),j.focus();return}let W={type:V,pattern:ne,action:$.value,priority:parseInt(Y.value,10)||0};V==="replace"&&(W.replacement=K.value||""),V==="rate_limit"&&(W.max_count=parseInt(M.value,10)||5,W.window_sec=parseFloat(q.value)||60);try{let Z=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)}),te=await Z.json();if(!Z.ok){showToast(te.error||S("addRuleFailed","Failed to add rule"),!1);return}showToast(S("ruleAdded","Rule added"),!0),j.value="",K.value="",await T()}catch(Z){console.error("Add filter rule error:",Z),showToast(S("addRuleFailed","Failed to add rule"),!1)}}async function U(D){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("filtersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteFilterRule"),severity:"danger",body:S("confirmDeleteRule","Delete this filter rule?"),confirmLabel:ServerI18n.t("filtersDeleteConfirm")}))try{let j=await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:D})}),K=await j.json();if(!j.ok){showToast(K.error||S("deleteRuleFailed","Failed to delete rule"),!1);return}showToast(S("ruleDeleted","Rule deleted"),!0),await T()}catch(j){console.error("Delete filter rule error:",j),showToast(S("deleteRuleFailed","Failed to delete rule"),!1)}}async function B(D,$){try{let j=await csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:D,updates:{enabled:$}})}),K=await j.json();if(!j.ok){showToast(K.error||S("updateRuleFailed","Failed to update rule"),!1),await T();return}}catch(j){console.error("Toggle filter rule error:",j),showToast(S("updateRuleFailed","Failed to update rule"),!1),await T()}}async function O(){let D=document.getElementById("filterTestText"),$=document.getElementById("filterTestResult"),j=document.getElementById("filterType"),K=document.getElementById("filterAction"),Y=document.getElementById("filterPattern"),M=document.getElementById("filterReplacement"),q=document.getElementById("filterMaxCount"),V=document.getElementById("filterWindowSec"),ne=(D.value||"").trim();if(!ne){showToast(S("sampleTextRequired","Enter sample text to test"),!1),D.focus();return}let W=(Y.value||"").trim();if(!W){showToast(S("patternRequired","Pattern is required"),!1),Y.focus();return}let Z=j.value,te={type:Z,pattern:W,action:K.value};Z==="replace"&&(te.replacement=M.value||""),Z==="rate_limit"&&(te.max_count=parseInt(q.value,10)||5,te.window_sec=parseFloat(V.value)||60),$.innerHTML=`<span style="color:var(--color-text-muted)">${S("testing","Testing...")}</span>`;try{let oe=await csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:te,text:ne})}),Q=await oe.json();if(!oe.ok){$.innerHTML=`<span style="color: var(--color-ink-error)">${g(Q.error||"Test failed")}</span>`;return}let se="";Q.action==="block"?se=`<span style="color: var(--color-ink-error);font-weight:600">${S("blocked","BLOCKED")}</span>`:Q.action==="replace"?se=`<span style="color: var(--color-ink-warning);font-weight:600">${S("replaced","REPLACED")}</span> <span style="color:var(--color-text-secondary)">\u2192 ${g(Q.text)}</span>`:Q.action==="allow"?se=`<span style="color: var(--color-ink-success);font-weight:600">${S("allowed","ALLOWED")}</span>`:se=`<span style="color:var(--color-text-muted)">${S("noMatch","No match (pass)")}</span>`,Q.reason&&(se+=`<br/><span style="font-size:11px;color:var(--color-text-muted)">${g(Q.reason)}</span>`),$.innerHTML=se}catch(oe){console.error("Test filter rule error:",oe),$.innerHTML=`<span style="color: var(--color-ink-error)">${S("testError","Test error")}</span>`}}function f(){let D=document.getElementById("filterType"),$=document.getElementById("filterReplacementRow"),j=document.getElementById("filterRateLimitRow");if(!D)return;let K=D.value;$&&($.style.display=K==="replace"?"":"none"),j&&(j.style.display=K==="rate_limit"?"grid":"none")}function c(){let D=document.getElementById("filterTypeChips");D&&D.addEventListener("click",$=>{let j=$.target.closest(".hud-filter-chip");j&&(L=j.dataset.filterScope||"all",D.querySelectorAll(".hud-filter-chip").forEach(K=>{K.classList.toggle("is-active",K.dataset.filterScope===L)}),T())})}let i=6,a=[],r=!1,s=0,l=0;function o(D){let $=new Date(D*1e3),j=K=>String(K).padStart(2,"0");return`${j($.getHours())}:${j($.getMinutes())}:${j($.getSeconds())}`}function t(D){let $=(D||"").toUpperCase();return $==="BLOCK"?"var(--hud-crimson)":$==="MASK"||$==="REPLACE"?"var(--hud-amber)":$==="REVIEW"?"var(--color-primary)":$==="ALLOW"?"var(--hud-lime)":"var(--color-text-muted)"}function d(){let D=document.getElementById("filterLiveLog");if(D){if(a.length===0){D.innerHTML=`<div style="color:var(--color-text-muted);text-align:center;padding:10px">${ServerI18n.t("fltNoEvents")}</div>`;return}D.innerHTML=a.map($=>{let j=o($.ts),K=($.action||"").toUpperCase(),Y=t(K),M=($.text_excerpt||"").replace(/[<>&"]/g,W=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[W]),q=($.pattern||"").replace(/[<>&"]/g,W=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[W]),V=($.source||"").slice(0,16),ne=V?`\xB7 ${V}`:"";return`<div class="admin-filter-log-row" style="display:grid;grid-template-columns:64px 70px 1fr;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px dashed var(--hud-line)">
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${j}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${Y}">${K}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\u300C${M}\u300D<span style="color:var(--color-text-muted)"> \u2014 \u898F\u5247 ${q} ${ne}</span></span>
      </div>`}).join("")}}async function m(){try{let D=await fetch(`/admin/filters/events?since=${l}`,{credentials:"same-origin"});if(!D.ok)return;let $=await D.json();if($.counts_24h){let j=(K,Y)=>{let M=document.querySelector(`[data-mod-stat="${K}"]`);M&&(M.textContent=Y!=null?String(Y):"\u2014")};j("masked",$.counts_24h.MASK||0),j("blocked",$.counts_24h.BLOCK||0)}if(!Array.isArray($.events)||$.events.length===0)return;for(a.unshift(...$.events);a.length>i;)a.pop();l=$.latest_seq||l,document.getElementById("filterLiveLog")&&d()}catch{}}function e(){r||(r=!0,m(),s=setInterval(m,4e3))}let n=Object.create(null),u="[QUICK]";function p(D,$){return D.find(j=>(j.name||"").startsWith(u+" "+$))}async function k(){let D=await N().catch(()=>[]);document.querySelectorAll(".admin-flt-v4__qchip").forEach($=>{let j=$.dataset.fltLabel,K=p(D,j),Y=!!K&&K.enabled!==!1;$.classList.toggle("is-active",Y),K?n[$.dataset.fltQuickId]=K.id||K.rule_id:delete n[$.dataset.fltQuickId]})}async function w(D){let $=D.dataset.fltQuickId,j=D.dataset.fltPattern,K=D.dataset.fltAction,Y=D.dataset.fltLabel,M=n[$];if(M)(await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:M})})).ok?(delete n[$],D.classList.remove("is-active"),showToast(ServerI18n.t("filtersToastDisabled",{label:Y}),!0)):showToast(ServerI18n.t("filtersToastDisableFailed"),!1);else{let q=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",name:`${u} ${Y}`,pattern:j,action:K,enabled:!0,priority:50})});if(q.ok){let V=await q.json().catch(()=>({}));V.rule_id&&(n[$]=V.rule_id),D.classList.add("is-active"),showToast(ServerI18n.t("filtersToastEnabled",{label:Y}),!0)}else{let V=await q.json().catch(()=>({}));showToast(ServerI18n.t("filtersToastEnableFailed",{msg:V.error||""}),!1)}}typeof renderRules=="function"&&renderRules()}function I(){let D=document.querySelector("[data-flt-quick]");D&&(D.addEventListener("click",$=>{let j=$.target.closest(".admin-flt-v4__qchip");j&&w(j)}),k())}function F(){let D=document.getElementById("settings-grid");if(!D)return;D.insertAdjacentHTML("beforeend",R()),c(),I();let $=document.getElementById("filterType");$&&$.addEventListener("change",f);let j=document.getElementById("filterAddBtn");j&&j.addEventListener("click",C);let K=document.getElementById("filterTestBtn");K&&K.addEventListener("click",O);let Y=document.getElementById("filterTestText");Y&&Y.addEventListener("keydown",V=>{V.key==="Enter"&&(V.preventDefault(),O())});let M=document.getElementById("filterPattern");M&&M.addEventListener("keydown",V=>{V.key==="Enter"&&(V.preventDefault(),C())});let q=document.getElementById("filterRulesList");q&&(q.addEventListener("change",V=>{let ne=V.target.closest(".filter-toggle-cb");if(!ne)return;B(ne.dataset.ruleId,ne.checked);let W=ne.closest(".hud-rule-row"),Z=W?.querySelector(".admin-filter-toggle-dot");Z&&(Z.classList.toggle("is-on",ne.checked),Z.classList.toggle("is-off",!ne.checked)),W&&(W.style.opacity=ne.checked?"":"0.45")}),q.addEventListener("click",V=>{let ne=V.target.closest(".filter-delete-btn");ne&&U(ne.dataset.ruleId)})),T(),e(),d()}function H(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&F()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&F()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",H):H()})()});var Dt=me(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,b=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml,h=1e4,_=null;function G(T){var C=y();return C[T]!==void 0?C[T]:!1}function S(){return`
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
    `}function A(T){var C=ServerI18n.t("fingerprintState_"+T),U="";return T==="blocked"?U=" is-crimson":T==="flagged"?U=" is-amber":T==="active"?U=" is-cyan":U=" is-mute",'<span class="admin-fp-state'+U+'">'+g(C)+"</span>"}function v(T){if(!T)return"\u2014";try{var C=new Date(T*1e3);return C.toLocaleTimeString()}catch{return String(T)}}function R(T){var C=document.getElementById("adminFingerprintTableWrap");if(C){if(!T||T.length===0){C.innerHTML="";var U=window.AdminEmpty.render("audience");U.dataset.emptyKind="fingerprints",C.appendChild(U);return}var B='<div class="admin-fp-row admin-fp-row--head"><span>'+g(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",O=T.map(function(f){var c=f.blocked|0,i=f.hash||"",a=i.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+g(i)+'"><span class="admin-fp-hash admin-identity-fp" title="'+g(i)+'">fp:'+g(a)+'</span><span class="admin-fp-ip admin-identity-ip">'+g(f.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+g(f.ua||"")+'">'+g(f.ua||"\u2014")+'</span><span class="admin-fp-num">'+(f.msgs|0)+'</span><span class="admin-fp-num">'+(f.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(c>0?"is-crimson":"is-mute")+'">'+c+"</span><span>"+A(f.state||"active")+'</span><span class="admin-fp-ts">'+g(v(f.last_seen))+"</span></div>"}).join("");C.innerHTML=B+O}}async function L(){var T=document.getElementById("adminFingerprintCount");try{var C=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!C.ok)throw new Error("HTTP "+C.status);var U=await C.json(),B=U.records||[];if(R(B),T){var O=U.count||B.length,f=U.flagged!=null?U.flagged:B.filter(function(i){return i.state==="flagged"||i.state==="blocked"}).length;T.textContent=ServerI18n.t("fpCountSummary",{unique:O,flagged:f})}}catch(i){console.error("[admin-fingerprints] fetch failed:",i);var c=document.getElementById("adminFingerprintTableWrap");c&&(c.innerHTML='<span class="hud-pill is-danger">'+g(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function E(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var C=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(C.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await L();else{var U=await C.json().catch(function(){return{}});window.showToast(U.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(B){console.error("[admin-fingerprints] reset error:",B),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function x(){P(),_=setInterval(function(){var T=document.getElementById("sec-fingerprints");T&&T.offsetParent!==null&&L()},h)}function P(){_&&(clearInterval(_),_=null)}function N(){var T=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(T){T.insertAdjacentHTML("beforeend",S());var C=document.getElementById("adminFingerprintRefreshBtn");C&&C.addEventListener("click",L);var U=document.getElementById("adminFingerprintResetBtn");U&&U.addEventListener("click",E),L(),x()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var T=new MutationObserver(function(){var U=document.getElementById("moderation-grid")||document.getElementById("settings-grid");U&&!document.getElementById("sec-fingerprints")&&N()});T.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var C=document.getElementById("moderation-grid")||document.getElementById("settings-grid");C&&!document.getElementById("sec-fingerprints")&&N()}})})()});var Mt=me(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.escapeHtml;let b=(t,d)=>{let m=window.ServerI18n?.t?.(t);return m&&m!==t?m:d||t},g=!1;new MutationObserver(()=>{let t=document.getElementById("settings-grid");if(t&&!(document.getElementById("sec-widgets")||g)){g=!0;try{_(t)}finally{g=!1}}}).observe(document.body,{childList:!0,subtree:!0});function _(t){let d=document.createElement("div");d.id="sec-widgets",d.className="admin-widgets-page hud-page-stack lg:col-span-2";let m=location.origin+"/overlay";d.dataset.tpl="B",d.innerHTML=`
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${y(b("widgetsTitle"))}</h2>
          <p class="admin-ui-page-note">${y(b("widgetsDesc"))}</p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 W1\uFF1A\u4E3B\u8981\u52D5\u4F5C\u5728\u9801\u9996\u53F3\u5074\u3002\u9801\u9996\u5728\u6A19\u984C\u8207\u8DEF\u7531\u540C\u540D\u6642\u6703\u88AB
               \u4F75\u9032 topbar\uFF0Cshell \u7684 [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB
               \uFF08\u898B admin.js \u7684 _dedupSectionTitles\uFF09\u3002 -->
          <div class="admin-ui-page-actions admin-ow-addrow">
            <button id="widget-add" type="button" class="admin-ui-action is-primary">
              ${y(b("widgetsAddBtn"))}
            </button>
            <div class="admin-ow-addmenu" data-ow-addmenu hidden>
              <button type="button" data-ow-add="scoreboard">${y(b("widgetScoreboard"))}</button>
              <button type="button" data-ow-add="ticker">${y(b("widgetTicker"))}</button>
              <button type="button" data-ow-add="label">${y(b("widgetLabel"))}</button>
            </div>
          </div>
        </div>

        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:12px">
            <div id="widgets-list" class="admin-widgets-list"></div>
            <div class="admin-widgets-actions">
              <button id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action">
                ${y(b("clearAll"))}
              </button>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:12px;position:sticky;top:0">
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${y(b("widgetsPreviewLabel"))}</div>
              <div class="admin-ow-stage" data-ow-stage></div>
              <p class="admin-ow-card-note">${y(b("widgetsDragHint"))}</p>
            </div>
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${y(b("widgetsObsLabel"))}</div>
              <p class="admin-ow-card-note">
                ${y(b("widgetsObsNote"))}
              </p>
              <div class="admin-ow-urlrow">
                <code class="admin-ow-url" data-ow-obs-url>${y(m)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${y(b("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${y(b("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,t.appendChild(d);let e=document.getElementById("widget-add"),n=d.querySelector("[data-ow-addmenu]");e.addEventListener("click",u=>{u.stopPropagation(),n.hidden=!n.hidden}),n.addEventListener("click",u=>{let p=u.target.closest("[data-ow-add]")?.dataset.owAdd;p&&(n.hidden=!0,A(p))}),document.addEventListener("click",u=>{!n.hidden&&!u.target.closest(".admin-ui-page-actions")&&(n.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",E),d.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let u=d.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(u).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),S()}async function G(t,d="GET",m=null){let e={method:d,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(m){let u=document.querySelector('meta[name="csrf-token"]');u&&(e.headers["X-CSRF-Token"]=u.content),e.body=JSON.stringify(m)}return(await fetch("/admin/widgets/"+t,e)).json()}async function S(){try{let t=await G("list");P(t.widgets||[])}catch(t){console.error("[admin-widgets] Load failed:",t)}}async function A(t){let d={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await G("create","POST",{type:t,config:d[t]||{}}),S()}catch(m){console.error("[admin-widgets] Create failed:",m)}}async function v(t){let d=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:d,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await G("delete","POST",{id:t}),S()}catch(e){console.error("[admin-widgets] Delete failed:",e)}}async function R(t,d){try{await G("update","POST",{id:t,config:d}),S()}catch(m){console.error("[admin-widgets] Update failed:",m)}}async function L(t,d,m){try{await G("score","POST",{id:t,team_index:d,delta:m}),S()}catch(e){console.error("[admin-widgets] Score update failed:",e)}}async function E(){let t=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:t,confirmLabel:ServerI18n.t("clearAll")}))try{await G("clear","POST",{}),S()}catch(m){console.error("[admin-widgets] Clear failed:",m)}}let x=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function P(t){let d=document.getElementById("widgets-list");if(d){if(d.innerHTML="",i(t),t.length===0){let m=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});m.dataset.emptyKind="widgets",d.appendChild(m);return}t.forEach(m=>{d.appendChild(B(m))})}}let N={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function T(t){return b("widgetPos_"+String(t||"top-left").replace("-","_"),t||"")}function C(t){let d=t.config||{},m="";t.type==="scoreboard"?m=(d.teams||[]).map(n=>`${n.name} ${n.score}`).join(" \xB7 "):t.type==="ticker"?(m=(d.messages||[])[0]||"",m&&(m=`\u300C${m}\u300D`)):t.type==="label"&&(m=d.text?`\u300C${d.text}\u300D`:"");let e=T(t.position);return m?`${m} \xB7 ${e}`:e}function U(t){return t==="scoreboard"?b("widgetScoreboard"):t==="ticker"?b("widgetTicker"):t==="label"?b("widgetLabel"):t}function B(t){let d=document.createElement("div");d.className="admin-widget-card",t.visible!==!1&&d.classList.add("is-on");let m=document.createElement("button");m.type="button",m.className="admin-widget-summary",m.setAttribute("aria-expanded","false"),m.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+y(N[t.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+y(U(t.type))+'</span><span class="admin-widget-summary-text">'+y(C(t))+"</span>"+(t.visible===!1?'<span class="admin-widget-summary-off">'+y(b("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',d.appendChild(m);let e=document.createElement("div");e.className="admin-widget-card-body",e.hidden=!0,m.addEventListener("click",()=>{e.hidden=!e.hidden,m.setAttribute("aria-expanded",e.hidden?"false":"true"),d.classList.toggle("is-open",!e.hidden)});let n=o(b("widgetPosition"),x,t.position,w=>R(t.id,{position:w}));e.appendChild(n),t.type==="scoreboard"?a(e,t):t.type==="ticker"?r(e,t):t.type==="label"&&s(e,t);let u=document.createElement("div");u.className="admin-widget-card-actions";let p=document.createElement("button");p.type="button",p.className="admin-ui-action admin-widget-card-action",p.textContent=t.visible?b("widgetHide"):b("widgetShow"),p.addEventListener("click",()=>R(t.id,{visible:!t.visible})),u.appendChild(p);let k=document.createElement("button");return k.type="button",k.className="admin-ui-action is-danger admin-widget-card-action",k.textContent=b("remove"),k.addEventListener("click",()=>v(t.id)),u.appendChild(k),e.appendChild(u),d.appendChild(e),d}let O={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function f(t,d){let m="top-left",e=1/0;for(let[n,[u,p]]of Object.entries(O)){let k=t-u/2,w=d-p/2,I=k*k+w*w;I<e&&(e=I,m=n)}return m}function c(t){let d=t.config||{};return t.type==="scoreboard"?(d.teams||[]).map(m=>`${m.name} ${m.score}`).join("  ")||b("widgetScoreboard"):t.type==="ticker"?(d.messages||[])[0]||b("widgetTicker"):t.type==="label"?d.text||b("widgetLabel"):t.type}function i(t){let d=document.querySelector("[data-ow-stage]");if(d){if(d.innerHTML="",!t.length){d.innerHTML='<span class="admin-ow-stage-empty">'+y(b("widgetsStageEmpty"))+"</span>";return}t.forEach(m=>{let e=document.createElement("div");e.className="admin-ow-box is-"+(m.position||"top-left"),m.visible===!1&&e.classList.add("is-off"),e.dataset.owBox=m.id,e.draggable=!0,e.textContent=c(m),e.title=U(m.type),e.addEventListener("dragend",n=>{let u=d.getBoundingClientRect();if(!u.width||!u.height)return;let p=(n.clientX-u.left)/u.width,k=(n.clientY-u.top)/u.height;if(p<0||p>1||k<0||k>1)return;let w=f(p,k);w!==m.position&&R(m.id,{position:w})}),d.appendChild(e)})}}function a(t,d){let m=d.config||{},e=l(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",m.title||"",n=>R(d.id,{title:n}));t.appendChild(e),(m.teams||[]).forEach((n,u)=>{let p=document.createElement("div");p.className="admin-widget-team";let k=document.createElement("input");k.type="color",k.value=n.color||"#38bdf8",k.className="admin-widget-team-color",k.addEventListener("change",()=>{let D=[...m.teams];D[u]={...D[u],color:k.value},R(d.id,{teams:D})}),p.appendChild(k);let w=document.createElement("input");w.type="text",w.value=n.name,w.className="admin-widget-input",w.addEventListener("change",()=>{let D=[...m.teams];D[u]={...D[u],name:w.value},R(d.id,{teams:D})}),p.appendChild(w);let I=document.createElement("span");I.className="admin-widget-team-score",I.textContent=n.score,p.appendChild(I);let F=document.createElement("button");F.type="button",F.className="admin-widget-step",F.textContent="\u2212",F.addEventListener("click",()=>L(d.id,u,-1)),p.appendChild(F);let H=document.createElement("button");H.type="button",H.className="admin-widget-step",H.textContent="+",H.addEventListener("click",()=>L(d.id,u,1)),p.appendChild(H),t.appendChild(p)})}function r(t,d){let m=d.config||{},e=document.createElement("div");e.className="admin-widget-row";let n=document.createElement("span");n.className="lbl",n.textContent=window.ServerI18n?.t?.("speed")||"SPEED",e.appendChild(n);let u=document.createElement("input");u.type="range",u.min="10",u.max="200",u.value=m.speed||60,u.style.flex="1",u.addEventListener("change",()=>{R(d.id,{speed:parseInt(u.value)})}),e.appendChild(u);let p=document.createElement("span");p.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",p.textContent=u.value,u.addEventListener("input",()=>{p.textContent=u.value}),e.appendChild(p),t.appendChild(e);let k=document.createElement("div");k.className="admin-widget-row",k.style.alignItems="flex-start";let w=document.createElement("span");w.className="lbl",w.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",k.appendChild(w);let I=document.createElement("textarea");I.className="admin-widget-textarea",I.value=(m.messages||[]).join(`
`),I.rows=3,I.placeholder=ServerI18n.t("widgetTickerPlaceholder"),I.addEventListener("change",()=>{let F=I.value.split(`
`).filter(H=>H.trim());R(d.id,{messages:F})}),k.appendChild(I),t.appendChild(k)}function s(t,d){let m=d.config||{};t.appendChild(l(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",m.text||"",e=>R(d.id,{text:e}))),t.appendChild(l(window.ServerI18n?.t?.("size")||"SIZE",String(m.fontSize||24),e=>R(d.id,{fontSize:parseInt(e)||24}),"number"))}function l(t,d,m,e="text"){let n=document.createElement("div");n.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=t,n.appendChild(u);let p=document.createElement("input");return p.type=e,p.value=d,p.className="admin-widget-input",p.addEventListener("change",()=>m(p.value)),n.appendChild(p),n}function o(t,d,m,e){let n=document.createElement("div");n.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=t,n.appendChild(u);let p=document.createElement("select");return p.className="admin-widget-select",d.forEach(k=>{let w=document.createElement("option");w.value=k,w.textContent=k,k===m&&(w.selected=!0),p.appendChild(w)}),p.addEventListener("change",()=>e(p.value)),n.appendChild(p),n}})})()});var Nt=me(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let y=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","backup","integrations","plugins","webhooks","api-tokens","security","notifications","audience","firetoken","overlay","about"];function b(){let $=window.ADMIN_ROUTES||{},j={};return y.forEach(K=>{let Y=$[K];Y&&Y.title&&(j[K]={title:Y.title,kicker:Y.kicker||K.toUpperCase()})}),j}let g=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation",section:"sec-blacklist"},{labelKey:"cmdkSettingFilters",route:"moderation",section:"sec-filters"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{label:"Webhooks",route:"webhooks",section:"sec-webhooks"},{label:"Scheduler",route:"scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],h=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function _(){let $=document.querySelector('meta[name="csrf-token"]');return $&&$.content||""}function G($,j){if(typeof window.csrfFetch=="function")return window.csrfFetch($,j);let K=Object.assign({credentials:"same-origin"},j||{}),Y=new Headers(j&&j.headers||{});return Y.set("X-CSRF-Token",_()),K.headers=Y,fetch($,K)}function S($,j){typeof window.showToast=="function"&&window.showToast($,j!==!1)}let A=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>G("/effects/reload",{method:"POST"}).then($=>S($.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),$.ok)).catch(()=>S(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"cmdkActionOverlayOff",subKey:"adminNavOverlay",action:()=>G("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"overlay_off"})}).then($=>S($.ok?ServerI18n.t("cmdkToastOverlayOff"):ServerI18n.t("cmdkToastToggleFailed"),$.ok)).catch(()=>S(ServerI18n.t("cmdkToastToggleFailed"),!1))},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>G("/admin/poll/reset",{method:"POST"}).then($=>S($.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),$.ok)).catch(()=>S(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return G("/admin/history/clear",{method:"POST"}).then(j=>S(j.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),j.ok)).catch(()=>S(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],v=null,R=null,L=null,E="",x=[],P=[],N=0,T=null,C=null,U=null,B=15e3;function O($){return String($??"").replace(/[&<>"']/g,j=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[j])}function f($,j){if(!j)return 0;let K=String($||"").toLowerCase(),Y=j.toLowerCase(),M=0,q=0,V=0,ne=0;for(;M<K.length&&q<Y.length;)K[M]===Y[q]?(q++,ne++,V+=2+ne):ne=0,M++;return q<Y.length?-1:(K.startsWith(Y)&&(V+=10),V)}function c(){let $=document.createElement("div");$.className="admin-cmdk",$.setAttribute("hidden",""),$.setAttribute("aria-hidden","true"),$.innerHTML=`
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
    `,document.body.appendChild($),v=$,R=$.querySelector(".admin-cmdk-input"),L=$.querySelector(".admin-cmdk-list"),$.addEventListener("click",j=>{j.target.matches("[data-cmdk-close]")&&H()}),R.addEventListener("input",j=>{E=j.target.value,k()}),R.addEventListener("keydown",i),L.addEventListener("click",j=>{let K=j.target.closest("[data-cmdk-idx]");K&&(N=parseInt(K.dataset.cmdkIdx,10)||0,r())})}function i($){if($.key==="Escape"){$.preventDefault(),H();return}if($.key==="ArrowDown"){$.preventDefault(),a(1);return}if($.key==="ArrowUp"){$.preventDefault(),a(-1);return}if($.key==="Enter"){$.preventDefault(),r();return}}function a($){if(!x.length)return;N=(N+$+x.length)%x.length,I();let j=L.querySelector(`[data-cmdk-idx="${N}"]`);j&&j.scrollIntoView({block:"nearest"})}function r(){let $=x[N];if($){if($.type==="route")window.location.hash="#/"+$.route,H();else if($.type==="setting")$.tab&&(document.body.dataset.viewerConfigTab=$.tab),window.location.hash="#/"+$.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let j=document.getElementById($.section);j&&(j.scrollIntoView({behavior:"smooth",block:"start"}),j.tagName==="DETAILS"&&!j.open&&(j.open=!0))},80),H();else if($.type==="message")window.location.hash="#/messages",H();else if($.type==="user")window.location.hash="#/system",setTimeout(()=>{let j=document.getElementById("sec-fingerprints");j&&j.scrollIntoView({behavior:"smooth",block:"start"})},80),H();else if($.type==="theme")G("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:$.id})}).then(j=>{j.ok?(S(ServerI18n.t("cmdkThemeApplied",{name:$.label}),!0),U=null):S(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>S(ServerI18n.t("cmdkThemeApplyFailed"),!1)),H();else if($.type==="action"){try{let j=$.action&&$.action();j&&typeof j.then=="function"&&j.catch(()=>{})}catch{}H()}}}let s={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",history:"adminNavGroupSystem",backup:"adminNavGroupSystem",security:"adminNavGroupSystem",integrations:"adminNavGroupSystem"};function l($){return Object.entries(b()).map(([j,K])=>{let Y=Math.max(f(K.title,$),f(j,$)),M=s[j];return{type:"route",route:j,label:K.title,sub:M?ServerI18n.t(M):"",icon:"\u25C7",score:Y}}).filter(j=>j.score>=0)}function o($){let j=b()[$];return j?j.title:""}function t($){return g.map(j=>{let K=j.labelKey?ServerI18n.t(j.labelKey):j.label;return{type:"setting",route:j.route,tab:j.tab,section:j.section,label:o(j.route)?`${o(j.route)} \u203A ${K}`:K,sub:"",icon:"\u2699",score:f(K,$)}}).filter(j=>j.score>=0)}function d($){return T?(T.records||[]).map(K=>{let Y=K.text||K.message||"",M=K.nickname||K.user||"guest",q=(K.timestamp||"").slice(11,19)||"\u2014",V=(K.fingerprint||K.fp||"").slice(0,8);return{type:"message",label:`${Y}  \xB7  @${M}`,sub:V?`${q} \xB7 fp:${V}`:q,icon:"\u{1F4AC}",score:Math.max(f(Y,$),f(M,$))}}).filter(K=>K.score>=0):[]}function m($){if(!U)return[];let j=U.records||[],K=U.active||"";return j.map(Y=>{let M=Y.label||Y.display_name||Y.name||"",q=Y.description||ServerI18n.t("cmdkThemeDefaultDesc"),V=Y.name===K;return{type:"theme",id:Y.name,label:V?ServerI18n.t("cmdkThemeActive",{name:M}):M,sub:q,icon:"\u{1F3A8}",score:Math.max(f(M,$),f(Y.name||"",$),f(q,$))}}).filter(Y=>Y.score>=0)}function e($){return A.map(j=>{let K=ServerI18n.t(j.labelKey),Y=j.subKey?ServerI18n.t(j.subKey):j.sub;return{type:"action",id:j.id,label:K,sub:Y,icon:"\u26A1",action:j.action,score:Math.max(f(K,$),f(j.id,$),f(Y,$))}}).filter(j=>j.score>=0)}function n($){return C?(C.records||[]).map(K=>{let Y=K.fingerprint||K.fp||K.id||"",M=K.ip||K.last_ip||"",q=K.nickname||"";return{type:"user",label:q?`@${q}  \xB7  ${Y.slice(0,12)}\u2026`:`${Y.slice(0,12)}\u2026`,sub:`user \xB7 ${M||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(f(Y,$),f(M,$),f(q,$))}}).filter(K=>K.score>=0):[]}async function u(){let $=Date.now(),j=[];(!T||$-T.at>B)&&j.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(K=>K.ok?K.json():null).then(K=>{T={at:$,records:K&&K.records||[]}}).catch(()=>{T={at:$,records:[]}})),(!C||$-C.at>B)&&j.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(K=>K.ok?K.json():null).then(K=>{C={at:$,records:K&&K.records||[]}}).catch(()=>{C={at:$,records:[]}})),(!U||$-U.at>B)&&j.push(fetch("/admin/themes",{credentials:"same-origin"}).then(K=>K.ok?K.json():null).then(K=>{U={at:$,records:K&&K.themes||[],active:K&&K.active||""}}).catch(()=>{U={at:$,records:[],active:""}})),j.length&&await Promise.all(j)}let p={actions:5,pages:5,messages:4};async function k(){await u();let $=E.trim(),j={action:e($),route:l($),setting:t($),theme:m($),message:d($),user:n($)};x=[],P=[],h.forEach(K=>{let Y=K.types.reduce((M,q)=>M.concat(j[q]||[]),[]).sort((M,q)=>q.score-M.score).slice(0,p[K.id]||5);Y.length&&(P.push({id:K.id,labelKey:K.labelKey,from:x.length,count:Y.length}),x=x.concat(Y))}),N=0,I()}function w($){return $.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[$.type]||"\xB7"}function I(){if(!x.length){L.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let $=[];P.forEach(j=>{$.push(`<li class="admin-cmdk-group" role="presentation">${O(ServerI18n.t(j.labelKey))}</li>`);for(let K=j.from;K<j.from+j.count;K++){let Y=x[K],M=K===N;$.push(`
        <li class="admin-cmdk-row ${M?"is-active":""}"
            data-cmdk-idx="${K}" role="option" aria-selected="${M}">
          <span class="admin-cmdk-icon" aria-hidden="true">${O(w(Y))}</span>
          <span class="admin-cmdk-label">${O(Y.label)}</span>
          <span class="admin-cmdk-sub">${O(Y.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${M?"\u21B5":""}</span>
        </li>`)}}),L.innerHTML=$.join("")}function F(){v||c(),v.removeAttribute("hidden"),v.setAttribute("aria-hidden","false"),v.classList.add("is-open"),E="",R.value="",k(),setTimeout(()=>R.focus(),20)}function H(){v&&(v.setAttribute("hidden",""),v.setAttribute("aria-hidden","true"),v.classList.remove("is-open"))}function D(){return!!(v&&!v.hasAttribute("hidden"))}window.AdminCommandPalette={open:F,close:H,isOpen:D,toggle:()=>D()?H():F()}})()});var Pt=me(()=>{(function(){"use strict";let y="sec-sessions-overview";var b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(c){return String(c).replace(/[&<>"']/g,function(i){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[i]})},g={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function h(c){if(c=Number(c)||0,c<=0)return"\u2014";var i=Math.floor(c/3600),a=Math.floor(c%3600/60),r=c%60;return i>0?i+"h "+a+"m":a>0?a+"m":r+"s"}function _(c){if(!c)return"\u2014";try{var i=typeof c=="number"?new Date(c<1e12?c*1e3:c):new Date(c);return i.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(c)}}function G(){return'<div id="'+y+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function S(){return'<div class="admin-sessions-th"><span>'+b(ServerI18n.t("sessionsColSession"))+"</span><span>"+b(ServerI18n.t("sessionsColMessages"))+"</span><span>"+b(ServerI18n.t("sessionsColViewers"))+"</span><span>"+b(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function A(c){return c.name||ServerI18n.t("sessionsFallbackName",{id:(c.id||"").slice(0,12)})}function v(){var c=document.getElementById("admin-sessions-table-body");if(c){if(g.loading){window.AdminSkeletons?(c.innerHTML="",c.appendChild(window.AdminSkeletons.listRows({rows:5}))):c.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!g.sessions.length){c.innerHTML="";var i=window.AdminEmpty.render("sessions");i.dataset.emptyKind="sessions",c.appendChild(i);return}var a=g.sessions.map(function(r){var s=b(r.id||"");return'<div class="admin-sessions-tr'+(r.is_live?" is-live":"")+'" data-session-id="'+s+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(r.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+b(A(r))+'<span class="admin-sessions-td-sub">'+b(_(r.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(r.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(r.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+b(h(r.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+s+'">'+b(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");c.innerHTML=S()+a}}var R=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function L(){var c=document.querySelector("[data-sessions-export]");if(c){if(!g.exportId){c.hidden=!0,c.innerHTML="";return}var i=g.sessions.find(function(r){return r.id===g.exportId});if(!i){g.exportId=null,c.hidden=!0,c.innerHTML="";return}var a=R.map(function(r){return'<button type="button" class="admin-sx-export__seg'+(r.id===g.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+r.id+'" aria-pressed="'+(r.id===g.exportFormat?"true":"false")+'">'+b(ServerI18n.t(r.labelKey))+"</button>"}).join("");c.hidden=!1,c.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+b(ServerI18n.t("sessionsExportTitle",{name:A(i)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+b(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+a+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(g.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+b(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+b(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+b(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+b(ServerI18n.t("sessionsDownloadBtn",{fmt:g.exportFormat.toUpperCase()}))+"</button></div>"}}function E(){if(g.exportId){var c="/admin/sessions/"+encodeURIComponent(g.exportId)+"/export?format="+encodeURIComponent(g.exportFormat)+"&include_pii="+(g.exportPii?"1":"0"),i=document.createElement("a");i.href=c,i.rel="noopener",document.body.appendChild(i),i.click(),i.remove()}}async function x(){var c=g.exportId;if(c)try{var i=await fetch("/admin/sessions/"+encodeURIComponent(c)+"/export?format=json",{credentials:"same-origin"});if(!i.ok)throw new Error("HTTP "+i.status);var a=await i.json(),r=(a.records||[]).slice(0,500);if(!r.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var s=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:r,speedMultiplier:1})});if(s.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!s.ok)throw new Error("HTTP "+s.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function P(){v(),L()}async function N(){g.loading=!0,v();try{var[c,i]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),a=[],r=[];if(c.ok){var s=await c.json();a=Array.isArray(s.sessions)?s.sessions:[],a.forEach(function(n){n._explicit=!0})}if(i.ok){var l=await i.json();r=Array.isArray(l.sessions)?l.sessions:[]}var o=a.slice(),t=new Set(a.map(function(n){return n.id}));r.forEach(function(n){t.has(n.id)||o.push(n)}),o.sort(function(n,u){var p=typeof n.started_at=="number"?n.started_at:Date.parse(n.started_at||0),k=typeof u.started_at=="number"?u.started_at:Date.parse(u.started_at||0);return k-p});try{var d=await fetch("/admin/session/current",{credentials:"same-origin"});if(d.ok){var m=await d.json();if(m.status==="live"){var e=Object.assign({},m,{id:m.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});o.unshift(e)}}}catch{}g.sessions=o,g.total=o.length}catch(n){console.error("[admin-sessions] fetch error:",n),g.sessions=[],g.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:n.message||""}),!1)}finally{g.loading=!1,P()}}function T(c){c&&(window.location.hash="#/session-detail?id="+encodeURIComponent(c))}function C(c){g.exportId=c,L();var i=document.querySelector("[data-sessions-export]");i&&i.scrollIntoView({block:"nearest"})}function U(){var c=document.getElementById(y);c&&(c.addEventListener("click",function(i){var a=i.target.closest("[data-sessions-export-open]");if(a){i.stopPropagation(),C(a.dataset.sessionsExportOpen);return}if(i.target.closest("[data-sessions-export-close]")){g.exportId=null,L();return}var r=i.target.closest("[data-sessions-export-fmt]");if(r){g.exportFormat=r.dataset.sessionsExportFmt,L();return}if(i.target.closest("[data-sessions-replay]")){x();return}if(i.target.closest("[data-sessions-download]")){E();return}var s=i.target.closest(".admin-sessions-tr");s&&T(s.dataset.sessionId||null)}),c.addEventListener("change",function(i){var a=i.target.closest("[data-sessions-export-pii]");a&&(g.exportPii=!!a.checked)}),c.addEventListener("keydown",function(i){if(!(i.key!=="Enter"&&i.key!==" ")){var a=i.target.closest(".admin-sessions-tr");a&&(i.preventDefault(),T(a.dataset.sessionId||null))}}))}function B(){var c=document.querySelector(".admin-dash-grid"),i=document.getElementById(y);if(!(!c||!i)){var a=c.dataset.activeLeaf||"dashboard";i.style.display=a==="sessions"?"":"none"}}function O(){var c=document.getElementById("settings-grid");!c||document.getElementById(y)||(c.insertAdjacentHTML("beforeend",G()),U(),N(),B())}function f(){if(window.DANMU_CONFIG?.session?.logged_in){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&O(),B()});c.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",B),document.addEventListener("admin-panel-rendered",function(){O(),B()}),O()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f()})()});var Ot=me(()=>{(function(){"use strict";let y="sec-session-detail-overview",b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(w){return String(w).replace(/[&<>"']/g,function(I){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[I]})},g={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},h=!1,_={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function G(){let w=window.location.hash||"",I=w.indexOf("?");if(I===-1)return null;let F=w.slice(I+1);return new URLSearchParams(F).get("id")||null}function S(w){if(!w)return"\u2014";try{let I=new Date(w);if(isNaN(I.getTime()))return String(w);let F=H=>String(H).padStart(2,"0");return`${I.getFullYear()}-${F(I.getMonth()+1)}-${F(I.getDate())} ${F(I.getHours())}:${F(I.getMinutes())}:${F(I.getSeconds())}`}catch{return String(w)}}function A(w){if(!w||w<0)return"\u2014";let I=Math.round(Number(w)),F=Math.floor(I/3600),H=Math.floor(I%3600/60),D=I%60;return F>0?`${F}h ${H}m ${D}s`:H>0?`${H}m ${D}s`:`${D}s`}function v(w,I){if(!w||!I)return"";try{let F=Math.max(0,Math.round((new Date(w)-new Date(I))/1e3)),H=Math.floor(F/60),D=F%60;return`+${String(H).padStart(2,"0")}:${String(D).padStart(2,"0")}`}catch{return""}}function R(w){let I=Number(w);return isNaN(I)?"\u2014":I.toLocaleString()}function L(w){if(!w)return"#64748b";let I=0;for(let H=0;H<w.length;H++)I=I*31+w.charCodeAt(H)>>>0;return`hsl(${I%360}, 60%, 60%)`}function E(){return`
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
    `}async function x(w){if(!w){B(ServerI18n.t("sessionDetailErrMissingId"));return}U(!0);try{let I=await fetch(`/admin/sessions/${encodeURIComponent(w)}`,{credentials:"same-origin"});if(I.status===404&&(I=await fetch(`/admin/session/archive/${encodeURIComponent(w)}`,{credentials:"same-origin"})),!I.ok)throw new Error(`HTTP ${I.status}`);let F=await I.json();g.session=F.session||null,g.records=F.records||[],g.density=F.density||[],U(!1),O(),P()}catch(I){U(!1),B(ServerI18n.t("sessionDetailErrLoadFailed",{msg:I.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function P(){if(g.sessionId)try{let w=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(g.sessionId)}`,{credentials:"same-origin"});if(!w.ok)return;let I=await w.json();g.annotations=Array.isArray(I.annotations)?I.annotations:[],s()}catch{}}function N(){let w=g.session;if(!w)return 0;if(w.duration_s)return Math.round(w.duration_s*1e3);if(w.duration)return Math.round(w.duration*1e3);let I=w.started_at||w.start_time,F=w.ended_at||w.end_time;if(I&&F)try{return Math.max(0,new Date(F)-new Date(I))}catch{return 0}return g.density&&g.density.length?g.density.length*60*1e3:0}function T(w){let I=Date.parse(w||0);if(Number.isNaN(I))return"\u2014";let F=new Date(I),H=D=>String(D).padStart(2,"0");return`${H(F.getHours())}:${H(F.getMinutes())}:${H(F.getSeconds())}`}function C(w){let I=Math.floor(w/1e3),F=Math.floor(I/3600),H=Math.floor(I%3600/60),D=I%60,$=j=>String(j).padStart(2,"0");return F>0?`${$(F)}:${$(H)}:${$(D)}`:`${$(H)}:${$(D)}`}function U(w){g.loading=w;let I=document.querySelector("[data-sd-loading]"),F=document.querySelector("[data-sd-error]");I&&(I.hidden=!w),F&&w&&(F.hidden=!0);let H=document.querySelector("[data-sd-timeline-wrap]");if(H&&window.AdminSkeletons){let D=H.querySelector("[data-sd-timeline-skel]");w?(H.hidden=!1,D||(D=window.AdminSkeletons.chart(),D.setAttribute("data-sd-timeline-skel","1"),H.appendChild(D))):D&&D.remove()}}function B(w){g.error=w;let I=document.querySelector("[data-sd-error]"),F=document.querySelector("[data-sd-error-msg]");I&&(I.hidden=!1),F&&(F.textContent=w),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(H){let D=document.querySelector(`[${H}]`);D&&(D.hidden=!0)})}function O(){f(),c(),i(),r(),s();let w=document.querySelector("[data-sd-error]");w&&(w.hidden=!0)}function f(){let w=g.session,I=document.querySelector("[data-sd-session-header]");if(!I)return;I.hidden=!1;let F=document.querySelector("[data-sd-session-id]"),H=document.querySelector("[data-sd-meta-start]"),D=document.querySelector("[data-sd-meta-duration]"),$=document.querySelector("[data-sd-title]"),j=w&&(w.session_id||w.id)||g.sessionId||"\u2014";F&&(F.textContent=j),H&&(H.textContent=S(w&&(w.started_at||w.start_time))),D&&(D.textContent=A(w&&(w.duration_s||w.duration))),$&&($.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(j).slice(-8)}))}function c(){let w=g.session;if(!w)return;let I=document.querySelector("[data-sd-kpis]");I&&(I.hidden=!1);let F=function(j,K,Y){let M=document.querySelector(`[data-sd-stat="${j}"]`);M&&(M.textContent=K);let q=document.querySelector(`[data-sd-stat-sub="${j}"]`);q&&(q.textContent=Y||"")};F("msg_count",R(w.msg_count)),F("viewer_count",R(w.viewer_count));let H=Array.isArray(g.density)?g.density:[];if(H.length){let j=0,K=0;H.forEach(function(q,V){q>j&&(j=q,K=V)});let Y=Date.parse(w.started_at||w.start_time||0),M="";if(!Number.isNaN(Y)){let q=new Date(Y+K*6e4),V=ne=>String(ne).padStart(2,"0");M=`${V(q.getHours())}:${V(q.getMinutes())}`}F("peak",R(j),M)}else F("peak","\u2014","");let D=Number(w.blocked_count)||0;F("blocked",R(D));let $=document.querySelector("[data-sd-blocked-btn]");$&&($.textContent=ServerI18n.t("sessionDetailStatBlocked")+(D?" "+D:""),$.disabled=D===0)}function i(){let w=document.querySelector("[data-sd-timeline-wrap]"),I=document.querySelector("[data-sd-timeline]"),F=document.querySelector("[data-sd-timeline-axis]"),H=document.querySelector("[data-sd-peak-label]");if(!w||!I||!F)return;let D=g.density;if(!D||D.length===0){w.hidden=!0;return}w.hidden=!1;let $=Math.max(1,...D),j=0;D.forEach(function(ne,W){ne>D[j]&&(j=W)});let K=D.map(function(ne,W){let Z=Math.max(2,Math.round(ne/$*100));return`<div class="admin-sd-bar${W===j?" is-peak":""}" style="height:${Z}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:ne,minute:W+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:ne})}"></div>`}).join("");I.innerHTML=K;let Y=g.session,M=S(Y&&(Y.started_at||Y.start_time)).slice(11,16)||"00:00",q=S(Y&&(Y.ended_at||Y.end_time)).slice(11,16)||"",V=D.length>2?`+${Math.round(D.length/2)}min`:"";F.innerHTML=`
      <span class="admin-sd-axis-label">${b(M)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${b(V)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${b(q)}</span>
    `,H&&(H.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:D[j],minute:j}))}function a(){let w=(g.msgQuery||"").trim().toLowerCase();return g.records.filter(function(I){let F=(I.status||"shown")==="blocked";return g.msgFilter==="blocked"&&!F?!1:w?String(I.text||"").toLowerCase().indexOf(w)!==-1||String(I.nickname||"").toLowerCase().indexOf(w)!==-1:!0})}function r(){let w=document.querySelector("[data-sd-msgs-wrap]"),I=document.querySelector("[data-sd-msgs-list]");if(!w||!I)return;if(!g.records.length){w.hidden=!0;return}w.hidden=!1;let F=a().slice(0,300);if(!F.length){I.innerHTML='<div class="admin-sd-msgs-empty">'+b(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}I.innerHTML=F.map(function(H){let D=(H.status||"shown")==="blocked",$=L(H.fingerprint||H.fp||""),j=T(H.timestamp||H.created_at),K=String(H.nickname||"").trim();return`
        <div class="admin-sd-msg-row${D?" is-blocked":""}">
          <span class="admin-sd-msg-time">${b(j)}</span>
          <span class="admin-sd-msg-dot" style="background:${$}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${b(H.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${b(ServerI18n.t("deliveryStatus_"+(H.status||"shown")))}
            ${H.delivery_reason?`<span class="admin-sd-msg-rule">${b(ServerI18n.t("deliveryReason_"+H.delivery_reason))}</span>`:""}
            ${D&&H.blockedBy?`<span class="admin-sd-msg-rule">${b(ServerI18n.t("sessionDetailBlockedBy",{rule:H.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${b(K||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function s(){let w=g.annotations||[],I=N(),F=document.querySelector("[data-sd-ann-count]");F&&(F.textContent=w.length?`${w.length} ANNOTATIONS`:"");let H=document.querySelector("[data-sd-ann-head]");H&&(H.textContent=w.length?`ANNOTATIONS \xB7 ${w.length}`:"ANNOTATIONS");let D=document.querySelector("[data-sd-ann-layer]");D&&(!I||w.length===0?D.innerHTML="":D.innerHTML=w.map(function(K){let Y=_[K.label]||_.note,M=Math.min(100,Math.max(0,K.ts_ms/I*100)),q=K.id===g.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${Y.shape}${q?" is-active":""}"
              data-sd-ann-marker="${b(K.id)}"
              style="left:${M.toFixed(2)}%;--ann-color:${Y.color}"
              title="${b(Y.label)} \xB7 ${C(K.ts_ms)}"
              aria-label="${b(Y.label)} at ${C(K.ts_ms)}: ${b(K.note||"")}">
              ${Y.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${q?`<span class="admin-sd-ann-tip"><span style="color:${Y.color}">${Y.icon}</span> ${b((K.note||"").slice(0,40))}${(K.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let $=document.querySelector("[data-sd-ann-legend]");$&&($.innerHTML=Object.keys(_).map(function(K){let Y=_[K],M=Y.shape==="square"?"2px":Y.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${Y.color};border-radius:${M}"></span>
          <span class="admin-sd-ann-legend-label">${Y.label}</span>
        </span>`}).join(""));let j=document.querySelector("[data-sd-ann-list]");if(j){if(w.length===0){j.innerHTML="";let K=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});K.dataset.emptyKind="session-annotations",j.appendChild(K);return}j.innerHTML=w.map(function(K){let Y=_[K.label]||_.note,M=K.id===g.activeAnnId,V=(K.note||"").length>80?(K.note||"").slice(0,80)+"\u2026":K.note||"";return`
        <div class="admin-sd-ann-row${M?" is-active":""}" data-sd-ann-row="${b(K.id)}">
          <span class="admin-sd-ann-ts" style="color:${Y.color}">${C(K.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${Y.color}">${Y.icon} ${Y.label}</span>
          <span class="admin-sd-ann-note">${b(V)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${b(K.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function l(w){if(!g.sessionId)return;let I=window.HudConfirm;if(!I){let Y=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:C(w)}),"");Y!=null&&Y.trim()&&o(w,"note",Y.trim());return}let H="highlight",D="",$=document.createElement("div");$.className="admin-sd-ann-modal-body",$.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${C(w)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(_).map(function(Y){let M=_[Y];return`
              <button type="button" class="admin-sd-ann-modal-lbl${Y==="highlight"?" is-active":""}"
                data-ann-label="${Y}" style="--ann-color:${M.color}">
                <span class="admin-sd-ann-modal-lbl-icon">${M.icon}</span>
                <span class="admin-sd-ann-modal-lbl-text">${M.label}</span>
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
      </div>`,$.addEventListener("click",function(Y){let M=Y.target.closest("[data-ann-label]");M&&(H=M.dataset.annLabel,$.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(q){q.classList.toggle("is-active",q===M)}))});let j=$.querySelector("[data-ann-modal-note]"),K=$.querySelector("[data-ann-modal-counter]");j.addEventListener("input",function(){D=j.value,K.textContent=`${D.length} / 280`}),setTimeout(function(){j&&j.focus()},50),I.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:$,width:460}).then(function(Y){Y&&o(w,H,j.value.trim())})}async function o(w,I,F){if(g.sessionId)try{let H=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:g.sessionId,ts_ms:Math.max(0,Math.round(w)),label:I||"note",note:F||""})});if(!H.ok)throw new Error(`HTTP ${H.status}`);let D=await H.json();D.annotation&&(g.annotations.push(D.annotation),g.annotations.sort(function($,j){return $.ts_ms-j.ts_ms}),g.activeAnnId=D.annotation.id,s(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(H){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:H.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function t(w){if(w)try{let I=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(w)}`,{method:"DELETE",credentials:"same-origin"});if(!I.ok)throw new Error(`HTTP ${I.status}`);g.annotations=g.annotations.filter(function(F){return F.id!==w}),g.activeAnnId===w&&(g.activeAnnId=null),s(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(I){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:I.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function d(w){let I=document.querySelector("[data-sd-timeline-inner]"),F=document.querySelector("[data-sd-ann-hover]");if(!I||!F)return;let H=I.getBoundingClientRect();if(!H.width)return;let D=w.clientX-H.left,$=Math.min(1,Math.max(0,D/H.width)),j=N();if(!j){F.hidden=!0;return}let K=Math.round($*j);g.hoverTsMs=K,F.hidden=!1,F.style.left=`${($*100).toFixed(2)}%`,F.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:C(K)})}function m(){let w=document.querySelector("[data-sd-ann-hover]");w&&(w.hidden=!0),g.hoverTsMs=null}function e(w){if(w.target.closest("[data-sd-ann-marker]"))return;let I=document.querySelector("[data-sd-timeline-inner]");if(!I)return;let F=I.getBoundingClientRect();if(!F.width)return;let H=w.clientX-F.left,D=Math.min(1,Math.max(0,H/F.width)),$=N();$&&l(Math.round(D*$))}async function n(){if(g.sessionId)try{let w=g.records.slice(0,500);if(!w.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let I=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:w,speedMultiplier:1})});if(I.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!I.ok)throw new Error("HTTP "+I.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function u(w,I){if(w==="back")window.location.hash="#/history/sessions";else if(w==="retry")g.sessionId&&x(g.sessionId);else if(w==="export"){if(!g.sessionId)return;let F=document.createElement("a");F.href="/admin/sessions/"+encodeURIComponent(g.sessionId)+"/export?format=csv",F.rel="noopener",document.body.appendChild(F),F.click(),F.remove()}else if(w==="replay")n();else if(w==="add-annotation"){let F=N(),H=g.hoverTsMs!=null?g.hoverTsMs:Math.round(F/2);l(H)}}function p(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let I=G();if(!I){g.sessionId=null,B(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}g.sessionId=I,x(I)}function k(){let w=document.getElementById("settings-grid");if(!w)return;let I=document.getElementById(y);I||(w.insertAdjacentHTML("beforeend",E()),I=document.getElementById(y),s()),I&&I.dataset.sdBound!=="1"&&(I.dataset.sdBound="1",I.addEventListener("click",function(F){let H=F.target.closest("[data-sd-ann-del]");if(H){F.stopPropagation(),t(H.dataset.sdAnnDel);return}let D=F.target.closest("[data-sd-ann-marker]");if(D){F.stopPropagation(),g.activeAnnId=D.dataset.sdAnnMarker,s();let M=document.querySelector(`[data-sd-ann-row="${g.activeAnnId}"]`);M&&M.scrollIntoView&&M.scrollIntoView({block:"nearest",behavior:"smooth"});return}let $=F.target.closest("[data-sd-ann-row]");if($){g.activeAnnId=$.dataset.sdAnnRow,s();return}if(F.target.closest("[data-sd-timeline-inner]")){e(F);return}let K=F.target.closest("[data-sd-action]");if(K){F.preventDefault(),u(K.dataset.sdAction,K);return}let Y=F.target.closest("[data-sd-filter]");Y&&(g.msgFilter=Y.dataset.sdFilter,I.querySelectorAll("[data-sd-filter]").forEach(function(M){M.classList.toggle("is-active",M===Y)}),r())}),I.addEventListener("input",function(F){let H=F.target.closest("[data-sd-search]");H&&(g.msgQuery=H.value||"",r())}),I.addEventListener("mousemove",function(F){F.target.closest("[data-sd-timeline-inner]")&&d(F)}),I.addEventListener("mouseleave",function(F){F.target.closest&&F.target.closest("[data-sd-timeline-inner]")&&m()},!0)),g.sessionId=G(),g.sessionId?x(g.sessionId):B(ServerI18n.t("sessionDetailErrNoSessionSelected")),h||(h=!0,window.addEventListener("hashchange",p))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&k()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let I=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(y)&&I.indexOf("/session-detail")!==-1&&k(),window.addEventListener("admin-route-changed",function(F){(F&&F.detail&&F.detail.route)==="session-detail"&&k()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&k()})})})()});var Rt=me(()=>{(function(){"use strict";let y="sec-search-overview";var b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},g=20,h={query:"",scope:"session",blockedOnly:!1,who:"",shown:g,results:[],total:0,loading:!1,searched:!1},_=0;function G(){return'<div id="'+y+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+b(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+b(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+b(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+b(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+b(ServerI18n.t("searchWhoAria"))+'"><option value="">'+b(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+b(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+b(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function S(a){if(!a)return 200;for(var r=0,s=0;s<Math.min(a.length,6);s++)r=r*31+a.charCodeAt(s)&65535;return r%360}function A(a,r){if(!r||!a)return b(a||"");var s=b(a),l=b(r);try{var o=new RegExp("("+l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return s.replace(o,'<mark class="admin-search-hit">$1</mark>')}catch{return s}}function v(a){if(!a)return"\u2014";try{var r=new Date(a);return r.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return a}}function R(){var a=h.results;return h.blockedOnly&&(a=a.filter(function(r){return(r.status||"shown")==="blocked"})),h.who&&(a=a.filter(function(r){return(r.nickname||"")===h.who})),a}function L(){var a=document.getElementById("admin-search-count");if(a){if(!h.searched||!h.query.trim()){a.textContent="";return}a.textContent=ServerI18n.t("searchResultCount",{n:R().length})}}function E(){var a=document.querySelector("[data-search-who]");if(a){var r=[];h.results.forEach(function(l){var o=(l.nickname||"").trim();o&&r.indexOf(o)===-1&&r.push(o)}),r.sort();var s=h.who;a.innerHTML='<option value="">'+b(ServerI18n.t("searchWhoAnyone"))+"</option>"+r.map(function(l){return'<option value="'+b(l)+'"'+(l===s?" selected":"")+">"+b(l)+"</option>"}).join("")}}function x(){var a=document.getElementById("admin-search-results"),r=document.getElementById("admin-search-empty-state"),s=document.getElementById("admin-search-export-btn");if(a){a.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(e){e.remove()});var l=function(e){r&&(r.style.display="block",r.textContent=e),s&&(s.hidden=!0)};if(h.loading)return l(ServerI18n.t("searchSearching"));if(!h.searched)return l(ServerI18n.t("searchPromptStart"));var o=R();if(o.length===0)return l(ServerI18n.t("searchNoMatch"));r&&(r.style.display="none"),s&&(s.hidden=!1);var t=Math.min(o.length,h.shown),d=document.createDocumentFragment();if(o.slice(0,t).forEach(function(e){var n=document.createElement("div");n.className="admin-search-row",n.innerHTML='<span class="admin-search-row__ts">'+b(v(e.timestamp))+'</span><span class="admin-search-row__text">'+A(e.text||"",h.query)+'</span><span class="admin-search-row__nick">'+b((e.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+b(ServerI18n.t("deliveryStatus_"+(e.status||"shown")))+(e.delivery_reason?"<br>"+b(ServerI18n.t("deliveryReason_"+e.delivery_reason)):"")+"</span></span>",d.appendChild(n)}),a.appendChild(d),o.length>t){var m=document.createElement("button");m.type="button",m.className="admin-search-more",m.dataset.searchMore="1",m.textContent=ServerI18n.t("searchMoreLeft",{n:o.length-t}),a.appendChild(m)}}}function P(){L(),E(),x()}async function N(){var a=h.query.trim();if(!a){h.loading=!1,h.searched=!1,h.results=[],h.total=0,P();return}h.loading=!0,P();try{var r="/admin/search?q="+encodeURIComponent(a);if(h.scope==="session"){var s=await C();s&&(r+="&since="+encodeURIComponent(s))}var l=Date.now(),o=await fetch(r,{credentials:"same-origin"}),t=Date.now()-l;if(!o.ok)throw new Error("HTTP "+o.status);var d=await o.json();h.results=Array.isArray(d.results)?d.results:[],h.total=typeof d.total=="number"?d.total:h.results.length,h.shown=g}catch(m){console.error("[admin-search] fetch error:",m),h.results=[],h.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:m.message||""}),!1)}finally{h.loading=!1,h.searched=!0,P()}}var T=null;async function C(){if(T!==null)return T;try{var a=await fetch("/admin/session/current",{credentials:"same-origin"});if(a.ok){var r=await a.json();if(r.status==="live"&&r.started_at)return T=new Date(r.started_at*1e3).toISOString(),T}}catch{}return T="",""}function U(){clearTimeout(_),_=setTimeout(N,300)}function B(){if(h.results.length){var a=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];h.results.forEach(function(o){var t=[o.nickname||"",o.fingerprint||"",o.timestamp||"",o.status||"",o.text||"",o.delivery_reason||""].map(function(d){return'"'+String(d).replace(/"/g,'""')+'"'});a.push(t.join(","))});var r=new Blob(["\uFEFF"+a.join(`
`)],{type:"text/csv;charset=utf-8"}),s=URL.createObjectURL(r),l=document.createElement("a");l.href=s,l.download="danmu-search-"+(h.query||"export")+".csv",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(s)}}function O(){var a=document.getElementById(y);if(a){var r=document.getElementById("admin-search-input");r&&(r.addEventListener("input",function(){h.query=r.value,U()}),r.addEventListener("keydown",function(l){l.key==="Enter"&&(clearTimeout(_),h.query=r.value,N())})),a.addEventListener("click",function(l){var o=l.target.closest("[data-search-scope]");if(o){h.scope=o.dataset.searchScope,a.querySelectorAll("[data-search-scope]").forEach(function(d){d.classList.toggle("is-active",d===o)}),h.query.trim()&&U();return}var t=l.target.closest("[data-search-blocked]");if(t){h.blockedOnly=!h.blockedOnly,t.classList.toggle("is-active",h.blockedOnly),h.shown=g,P();return}if(l.target.closest("[data-search-more]")){h.shown+=g,x();return}}),a.addEventListener("change",function(l){var o=l.target.closest("[data-search-who]");o&&(h.who=o.value||"",h.shown=g,P())});var s=document.getElementById("admin-search-export-btn");s&&s.addEventListener("click",B)}}function f(){var a=document.querySelector(".admin-dash-grid"),r=document.getElementById(y);if(!(!a||!r)){var s=a.dataset.activeLeaf||"dashboard";r.style.display=s==="search"?"":"none"}}function c(){var a=document.getElementById("settings-grid");!a||document.getElementById(y)||(a.insertAdjacentHTML("beforeend",G()),O(),f())}function i(){if(window.DANMU_CONFIG?.session?.logged_in){var a=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&c(),f()});a.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",f),document.addEventListener("admin-panel-rendered",function(){c(),f()}),c()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i()})()});var qt=me(()=>{(function(){"use strict";let y="sec-api-tokens-overview",b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})},g=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],h=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],_={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function G(e){if(!e)return"\u2014";try{let n=new Date(e);if(isNaN(n.getTime()))return String(e);let u=p=>String(p).padStart(2,"0");return`${n.getFullYear()}-${u(n.getMonth()+1)}-${u(n.getDate())}`}catch{return String(e)}}function S(e){if(!e)return null;try{let n=new Date(e);if(isNaN(n.getTime()))return null;let u=p=>String(p).padStart(2,"0");return`${n.getFullYear()}-${u(n.getMonth()+1)}-${u(n.getDate())} ${u(n.getHours())}:${u(n.getMinutes())}`}catch{return null}}function A(e){let n=Number(e);return isNaN(n)?"0":n.toLocaleString()}function v(e){if(!e||e.enabled===!1)return"inactive";if(!e.expires_at)return"active";try{let n=new Date(e.expires_at).getTime(),u=Date.now();if(n<u)return"expired";if(n-u<168*3600*1e3)return"expiring"}catch{}return"active"}function R(e){if(!e)return 1/0;try{return Math.floor((Date.now()-new Date(e).getTime())/864e5)}catch{return 1/0}}function L(e){return!e||!e.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':e.map(function(n){let u="admin-ui-pill admin-at-scope-badge";return n==="admin:*"?u+=" is-danger":n.startsWith("fire:")?u+=" is-warn":n.startsWith("read:stats")?u+=" is-cyan":u+=" is-success",`<span class="${u}">${b(n)}</span>`}).join(" ")}function E(e){let n="admin-ui-dot admin-at-dot";return e==="active"?n+=" is-success":e==="expiring"?n+=" is-warn":e==="expired"?n+=" is-danger":n+=" is-muted",`<span class="${n}" aria-hidden="true"></span>`}function x(){let e=g.map(function(u){let p=u.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",w=`admin-ui-pill admin-at-scope-badge is-${u.badge==="red"?"danger":u.badge==="amber"?"warn":u.badge==="green"?"success":u.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${b(u.id)}"
          >
          <span class="${w}">${b(u.badgeTxt)}</span>
          <span class="admin-at-scope-label">${b(ServerI18n.t(u.labelKey))}</span>
          ${p}
        </label>
      `}).join(""),n=h.map(function(u){let p=u.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${u.days!==null?String(u.days):"null"}" ${p} class="sr-only">
          <span>${b(ServerI18n.t(u.labelKey))}</span>
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
    `}async function P(){U(!0);try{let e=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!e.ok)throw new Error(`HTTP ${e.status}`);let n=await e.json();_.tokens=n.tokens||n||[],O()}catch(e){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:e.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{U(!1)}}async function N(e){_.creating=!0,B(!0),r();try{let n=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok){let k=await n.json().catch(()=>({}));throw new Error(k.error||k.message||`HTTP ${n.status}`)}let u=await n.json(),p=u.token||u.raw_token||u.access_token||null;_.newTokenRaw=p,f(p),i(),await P(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(n){a(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:n.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:n.message||""}),!1)}finally{_.creating=!1,B(!1)}}async function T(e,n){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${b(n||e)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let p=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(e)}`,{method:"DELETE"});if(!p.ok){let k=await p.json().catch(()=>({}));throw new Error(k.error||k.message||`HTTP ${p.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await P()}catch(p){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:p.message||""}),!1)}}async function C(e,n){try{let u=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(e)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:n})});if(!u.ok){let p=await u.json().catch(()=>({}));throw new Error(p.error||p.message||`HTTP ${u.status}`)}window.showToast&&window.showToast(n?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await P()}catch(u){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:u.message||""}),!1)}}function U(e){let n=document.querySelector("[data-at-list-loading]");n&&(n.hidden=!e)}function B(e){let n=document.getElementById("adminAtSubmitBtn");n&&(n.disabled=e,n.textContent=e?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function O(){let e=_.tokens,n=document.querySelector("[data-at-empty]"),u=document.querySelector("[data-at-table-wrap]"),p=document.querySelector("[data-at-tbody]");if(!(!n||!u||!p)){if(!e||e.length===0){if(!n.firstElementChild&&window.AdminEmpty){let k=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});k.dataset.emptyKind="api-tokens",n.appendChild(k)}n.hidden=!1,u.hidden=!0;return}n.hidden=!0,u.hidden=!1,p.innerHTML=e.map(function(k){let w=v(k),I=E(w),F=k.scopes||k.scope||[],H=Array.isArray(F)?F:String(F).split(",").map(M=>M.trim()).filter(Boolean),$=R(k.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",j=w==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",K=w==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",Y=k.last_used_at?`${S(k.last_used_at)||G(k.last_used_at)}<br><span class="admin-at-ip">${b(k.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${b(k.id||k.token_id||"")}">
          <td class="admin-at-td-label">
            ${I}
            <span class="admin-at-label-text">${b(k.label||k.name||"\u2014")}</span>
            ${$}${j}${K}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${b(k.prefix||k.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${L(H)}</div>
          </td>
          <td class="admin-at-td-used">${Y}</td>
          <td class="admin-at-td-usage">${A(k.usage_count||k.use_count)}</td>
          <td class="admin-at-td-created">${G(k.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${b(k.id||k.token_id||"")}"
              data-token-enabled="${k.enabled===!1?"0":"1"}"
              title="${k.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${k.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${b(k.id||k.token_id||"")}"
              data-token-label="${b(k.label||k.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function f(e){let n=document.getElementById("adminAtSuccessBanner"),u=document.getElementById("adminAtTokenDisplay"),p=document.getElementById("adminAtCreateForm");n&&(n.hidden=!1),u&&e&&(u.value=e),p&&(p.style.opacity="0.5"),n&&n.scrollIntoView({behavior:"smooth",block:"nearest"})}function c(){let e=document.getElementById("adminAtSuccessBanner"),n=document.getElementById("adminAtCreateForm");e&&(e.hidden=!0),n&&(n.style.opacity=""),_.newTokenRaw=null}function i(){let e=document.getElementById("adminAtCreateForm");e&&e.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(p){p.classList.remove("is-active")});let n=document.querySelector("input[name='adminAtExpiry'][value='90']");if(n){n.checked=!0;let p=n.closest(".admin-at-expiry-btn");p&&p.classList.add("is-active")}let u=document.getElementById("adminAtAdminWarn");u&&(u.hidden=!0),r()}function a(e){let n=document.getElementById("adminAtFormError");n&&(n.hidden=!1,n.textContent=e)}function r(){let e=document.getElementById("adminAtFormError");e&&(e.hidden=!0,e.textContent="")}function s(){let e=document.getElementById("adminAtLabel"),n=e?e.value.trim():"",u=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(I){u.push(I.value)});let p=document.querySelector("input[name='adminAtExpiry']:checked"),k=p?p.value:"90",w=k==="null"?null:parseInt(k,10);return{label:n,scopes:u,expiry_days:w}}function l(e){return e.label?e.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!e.scopes||e.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function o(e){if(e.preventDefault(),_.creating)return;r();let n=s(),u=l(n);if(u){a(u);return}N(n)}function t(){let e=_.newTokenRaw;if(!e)return;let n=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(e).then(function(){n&&(n.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){n.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let u=document.getElementById("adminAtTokenDisplay");u&&(u.select(),document.execCommand("copy")),n&&(n.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){n.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function d(){let e=document.getElementById(y);if(!e)return;e.addEventListener("click",function(k){let w=k.target.closest("[data-at-action]");if(w){let F=w.dataset.atAction;if(F==="revoke"){let H=w.dataset.tokenId,D=w.dataset.tokenLabel;T(H,D)}else if(F==="toggle"){let H=w.dataset.tokenId,D=w.dataset.tokenEnabled==="1";C(H,!D)}else F==="copy-token"&&t();return}let I=k.target.closest(".admin-at-expiry-btn");I&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(F){F.classList.remove("is-active")}),I.classList.add("is-active"))});let n=document.getElementById("adminAtScope_admin__");n&&n.addEventListener("change",function(){let k=document.getElementById("adminAtAdminWarn");k&&(k.hidden=!n.checked)});let u=document.getElementById("adminAtCreateForm");u&&u.addEventListener("submit",o);let p=document.querySelector("input[name='adminAtExpiry'][value='90']");if(p){let k=p.closest(".admin-at-expiry-btn");k&&k.classList.add("is-active")}}function m(){let e=document.getElementById("settings-grid");!e||document.getElementById(y)||(e.insertAdjacentHTML("beforeend",x()),d(),P())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&m()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&m()})})()});var Ht=me(()=>{(function(){"use strict";let y="sec-wcag-overview",b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(i){return String(i).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})};function g(i){let a=i.replace(/^#/,""),r=a.length===3?a.split("").map(function(s){return s+s}).join(""):a;return[parseInt(r.slice(0,2),16)/255,parseInt(r.slice(2,4),16)/255,parseInt(r.slice(4,6),16)/255]}function h(i){return i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)}function _(i){let a=g(i);return .2126*h(a[0])+.7152*h(a[1])+.0722*h(a[2])}function G(i,a){let r=_(i),s=_(a),l=Math.max(r,s),o=Math.min(r,s);return(l+.05)/(o+.05)}function S(i){return i>=7?"AAA":i>=4.5?"AA":i>=3?"AA-large":"fail"}function A(i,a){let r=_(a),s=[],l=g(i);for(let o=.05;o<=.6&&s.length<3;o+=.05){let d="#"+l.map(function(e){return Math.min(1,e+o)}).map(function(e){return Math.round(e*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),m=G(d,a);m>=4.5&&s.push({hex:d,ratio:m})}return s}let v=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],R={fg:"#FB7185",bg:"#000000"},L="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",E={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function x(){let i=v.filter(function(s){return S(G(s.fg,s.bg))!=="fail"}).length,a=v.length-i,r=Math.round(i/v.length*100);return`
      <div id="${y}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${P("PASS AA+",i,ServerI18n.t("wcagStatPassLabel"))}
              ${P("BELOW AA",a,ServerI18n.t("wcagStatFailLabel"))}
              ${P("PAIRS",v.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${P("PASS RATE",r+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:r})}">
                <div class="admin-wcag-meter-fill" style="width:${r}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${L}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${v.map(function(s,l){return N(s,l)}).join("")}
            </div>

            <div class="admin-wcag-guardrail">
              <span class="admin-ui-monolabel">${ServerI18n.t("mlBuiltInGuardrail")}</span>
              ${ServerI18n.t("wcagGuardrailNote")}
            </div>
          </div>

          <!-- Right: single-pair tester -->
          <div class="admin-ui-card hud-page-col-gap admin-wcag-tester" data-wcag-tester>
            ${T()}
          </div>
        </div>
      </div>`}function P(i,a,r){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${b(String(a))}</span>
        <span class="hud-stat-tile-label">${b(r)}</span>
      </div>`}function N(i,a){let r=G(i.fg,i.bg),s=S(r),l=E[s],o=ServerI18n.t(i.nameKey),t=l.labelKey?ServerI18n.t(l.labelKey):l.label,d=s==="fail"?ServerI18n.t("wcagWarnFail"):s==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${L}"
        data-wcag-pair-idx="${a}" role="button" tabindex="0"
        aria-label="${b(ServerI18n.t("wcagPairAriaLabel",{name:o,ratio:r.toFixed(2),level:t.slice(2)}))}">
        <span class="admin-wcag-pair-name">${b(o)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${b(i.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${b(i.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${b(i.fg)}">${b(i.fg)} / ${b(i.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${r.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${l.mod}">${t}</span>
        ${d?`<span class="admin-wcag-warn">\u26A0 ${d}</span>`:""}
      </div>`}function T(){let i=G(R.fg,R.bg),a=S(i),r=E[a],s=r.labelKey?ServerI18n.t(r.labelKey):r.label,l=A(R.fg,R.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${C(ServerI18n.t("wcagForegroundLabel"),R.fg,"fg")}
        ${C(ServerI18n.t("wcagBackgroundLabel"),R.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${b(R.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${b(R.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${b(R.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${b(R.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${i.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${r.mod}">${s}</span>
      </div>

      <div class="admin-wcag-levels">
        ${U(ServerI18n.t("wcagCheckAANormal"),i>=4.5)}
        ${U(ServerI18n.t("wcagCheckAALarge"),i>=3)}
        ${U(ServerI18n.t("wcagCheckAAANormal"),i>=7)}
        ${U(ServerI18n.t("wcagCheckAAALarge"),i>=4.5)}
      </div>

      ${l.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${l.map(function(o){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${b(o.hex)}"
                title="${b(ServerI18n.t("wcagSuggApplyTitle",{ratio:o.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${b(R.bg)};color:${b(o.hex)}">${b(o.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${o.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function C(i,a,r){let s="wcag-tester-"+r;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${s}">${b(i)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${b(a)}"></span>
          <input type="text" id="${s}" class="admin-ui-input" data-wcag-tester-${r}
            aria-label="${b(ServerI18n.t("wcagHexAria",{label:i}))}"
            value="${b(a)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function U(i,a){return`<div class="admin-wcag-level ${a?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${a?"\u2713":"\u2717"}</span>
      <span>${b(i)}</span>
    </div>`}function B(){let i=document.getElementById(y);i&&(i.addEventListener("click",function(a){let r=a.target.closest("[data-wcag-pair-idx]");if(r){O(r);return}let s=a.target.closest("[data-wcag-sugg]");s&&(R.fg=s.dataset.wcagSugg,f())}),i.addEventListener("keydown",function(a){if(a.key!=="Enter"&&a.key!==" "&&a.key!=="Spacebar")return;let r=a.target.closest("[data-wcag-pair-idx]");r&&(a.preventDefault(),O(r))}),i.addEventListener("input",function(a){let r=a.target.closest("[data-wcag-tester-fg]"),s=a.target.closest("[data-wcag-tester-bg]");r&&/^#[0-9A-Fa-f]{6}$/.test(r.value)&&(R.fg=r.value.toUpperCase(),f()),s&&/^#[0-9A-Fa-f]{6}$/.test(s.value)&&(R.bg=s.value.toUpperCase(),f())}))}function O(i){let a=v[parseInt(i.dataset.wcagPairIdx,10)];a&&(R.fg=a.fg,R.bg=a.bg,f())}function f(){let i=document.querySelector("[data-wcag-tester]");i&&(i.innerHTML=T())}function c(){let i=document.getElementById("settings-grid");!i||document.getElementById(y)||(i.insertAdjacentHTML("beforeend",x()),B())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&c()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&c()})})()});var jt=me(()=>{(function(){"use strict";let y="danmu.onboarding.done",b="admin-onboarding-root",G=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],S=0,A=!1;window.AdminOnboarding={start:x,isDone:function(){try{return!!localStorage.getItem(y)}catch{return!1}},reset:function(){try{localStorage.removeItem(y)}catch{}}};let v=new Set(["live","dashboard"]);function R(){if(A||window.AdminOnboarding.isDone()||!v.has(L()))return;let i=()=>!!document.querySelector(".admin-session-banner-live");i()||setTimeout(()=>{A||window.AdminOnboarding.isDone()||i()||v.has(L())&&x()},1200)}function L(){let i=document.querySelector(".admin-dash-grid");return i&&i.dataset.activeRoute||"live"}function E(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&x()}function x(){A||(A=!0,S=0,U())}function P(i){if(!A)return;A=!1,document.body.removeEventListener("click",T),document.removeEventListener("keydown",C),window.removeEventListener("resize",B);let a=document.getElementById(b);if(a&&a.remove(),i)try{localStorage.setItem(y,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function N(){S<G.length-1?(S++,B()):P(!0)}function T(i){let a=i.target.closest("[data-ob-action]");a&&(i.stopPropagation(),a.dataset.obAction==="next"?N():a.dataset.obAction==="skip"&&P(!1))}function C(i){A&&i.key==="Escape"&&(i.preventDefault(),P(!1))}function U(){let i=document.getElementById(b);i&&i.remove();let a=document.createElement("div");a.id=b,a.className="admin-ob-root",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","false"),a.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(a),document.body.addEventListener("click",T),document.addEventListener("keydown",C),window.addEventListener("resize",B),B()}function B(){let i=document.getElementById(b);if(!i)return;let a=G[S],r=G.length,s=f(a.target),l=window.innerWidth,o=window.innerHeight,t="";s?t='<div class="admin-ob-spot" style="left:'+(s.left-8)+"px;top:"+(s.top-8)+"px;width:"+(s.width+16)+"px;height:"+(s.height+16)+'px;"></div>':t='<div class="admin-ob-scrim"></div>';let d=(l-360)/2,m=o/2-110,e="none";if(s){let k=s.left+s.width/2;a.side==="top"?(d=k-360/2,m=s.top-16,e="bottom"):a.side==="right"?(d=s.right+16+8,m=s.top,e="left"):(d=k-360/2,m=s.bottom+16+8,e="top"),d=Math.max(16,Math.min(l-360-16,d))}let n=G.map(function(k,w){return'<span class="admin-ob-progress-item'+(w===S?" is-current":"")+'">'+(w+1)+" "+c(ServerI18n.t(k.labelKey))+"</span>"+(w<r-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");i.innerHTML=t+'<div class="admin-ob-bubble" data-arrow="'+e+'" style="left:'+d+"px;top:"+m+'px"><div class="admin-ob-count">'+(S+1)+" / "+r+'</div><div class="admin-ob-title">'+c(ServerI18n.t(a.titleKey))+'</div><div class="admin-ob-body">'+c(ServerI18n.t(a.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+c(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+c(ServerI18n.t(S===r-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+n+"</div></div>";let u=i.querySelector(".admin-ob-bubble");if(!u||!s)return;let p=u.offsetHeight;if(a.side==="top")u.style.top=Math.max(16,s.top-16-8-p)+"px";else if(m+p>o-16){let k=s.top-16-8-p;k>=16?(u.style.top=k+"px",u.setAttribute("data-arrow","bottom")):(u.style.top=Math.max(16,o-p-16)+"px",u.setAttribute("data-arrow","none"))}O(u,s)}function O(i,a){let r=i.getAttribute("data-arrow");if(r==="none")return;let s=i.getBoundingClientRect(),l=r==="top"||r==="bottom",o=l?a.left+a.width/2-s.left:a.top+a.height/2-s.top,t=l?s.width:s.height,d=Math.max(16,Math.min(t-32,o-8));i.style.setProperty("--ob-arrow",d+"px")}function f(i){if(!i)return null;let a=document.querySelector(i);if(!a)return null;let r=a.getBoundingClientRect();return r.width<8||r.height<8||r.bottom<0||r.top>window.innerHeight?null:r}function c(i){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(i):i==null?"":String(i).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",E),E(),window.addEventListener("hashchange",function(){v.has(L())&&setTimeout(R,600)}),setTimeout(R,800))})})()});var Jt=me(()=>{var Ts=pe(Ce()),_s=pe(Ae()),Es=pe(Be()),$s=pe(Fe()),xs=pe(De()),Ls=pe(Me()),Cs=pe(Ne()),As=pe(Pe()),Bs=pe(Oe()),Fs=pe(Re()),Ds=pe(qe()),Ms=pe(He()),Ns=pe(je()),Ps=pe(Ue()),Os=pe(Ke()),Rs=pe(We()),qs=pe(Ge()),Hs=pe(ze()),js=pe(Ve()),Us=pe(Je()),Ks=pe(Ye()),Ws=pe(Qe()),Gs=pe(Xe()),zs=pe(Ze()),Vs=pe(et()),Js=pe(tt()),Ys=pe(nt()),Qs=pe(at()),Xs=pe(st()),Zs=pe(it()),ei=pe(ot()),ti=pe(rt()),ni=pe(dt()),ai=pe(lt()),si=pe(ct()),ii=pe(ut()),oi=pe(mt()),ri=pe(pt()),di=pe(vt()),li=pe(ft()),ci=pe(ht()),ui=pe(gt()),mi=pe(yt()),pi=pe(bt()),vi=pe(wt()),fi=pe(St()),hi=pe(It()),gi=pe(kt()),yi=pe(Tt()),bi=pe(_t()),wi=pe(Et()),Si=pe($t()),Ii=pe(xt()),ki=pe(Lt()),Ti=pe(Ct()),_i=pe(At()),Ei=pe(Bt()),$i=pe(Ft()),xi=pe(Dt()),Li=pe(Mt()),Ci=pe(Nt()),Ai=pe(Pt()),Bi=pe(Ot()),Fi=pe(Rt()),Di=pe(qt()),Mi=pe(Ht()),Ni=pe(jt())});Jt();})();
