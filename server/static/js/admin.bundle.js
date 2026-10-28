/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var Jt=Object.create;var Me=Object.defineProperty;var Yt=Object.getOwnPropertyDescriptor;var Qt=Object.getOwnPropertyNames;var Xt=Object.getPrototypeOf,Zt=Object.prototype.hasOwnProperty;var me=(b,y)=>()=>{try{return y||b((y={exports:{}}).exports,y),y.exports}catch(g){throw y=0,g}};var en=(b,y,g,h)=>{if(y&&typeof y=="object"||typeof y=="function")for(let _ of Qt(y))!Zt.call(b,_)&&_!==g&&Me(b,_,{get:()=>y[_],enumerable:!(h=Yt(y,_))||h.enumerable});return b};var pe=(b,y,g)=>(g=b!=null?Jt(Xt(b)):{},en(y||!b||!b.__esModule?Me(g,"default",{value:b,enumerable:!0}):g,b));var Ne=me(()=>{(function(){"use strict";function b(y,g=!0){let h=document.getElementById("toast-container");if(!h)return;let _=document.createElement("div");_.className="flex items-center w-full max-w-xs p-4 mb-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 transform transition-all opacity-0 translate-x-full",_.setAttribute("role","alert");let z=getComputedStyle(document.documentElement),S=z.getPropertyValue("--motion-normal").trim()||"180ms",A=z.getPropertyValue("--ease-spring").trim()||"cubic-bezier(0.34, 1.56, 0.64, 1)";_.style.transition=`transform ${S} ${A}, opacity ${S} ease-out`;let m=g?'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>':'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',R=g?"text-green-500":"text-red-500";_.innerHTML=`
      <div class="${R}">${m}</div>
      <div class="pl-4 text-sm font-normal"></div>
    `;let L=_.querySelector(".pl-4.text-sm.font-normal");L.textContent=y,h.appendChild(_),requestAnimationFrame(()=>{_.classList.remove("opacity-0","translate-x-full")}),setTimeout(()=>{_.classList.add("opacity-0","translate-x-full"),_.addEventListener("transitionend",()=>{_.remove()})},3e3)}window.showToast=b})()});var Pe=me(()=>{(function(){"use strict";var b="admin-details-open-state";function y(){try{return JSON.parse(localStorage.getItem(b))||{}}catch{return{}}}function g(P){try{localStorage.setItem(b,JSON.stringify(P))}catch{}}var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function _(P){return P==null?"":String(P).replace(/[&<>"']/g,function(N){return h[N]})}function z(){var P=document.querySelector("script[nonce]");return P&&P.nonce||""}function S(P,N){var T=z();return"<style"+(P?' id="'+_(P)+'"':"")+(T?' nonce="'+_(T)+'"':"")+">"+(N||"")+"</style>"}var A='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',m=[],R=null;function L(P){if(!P)return!1;for(var N=P;N&&N!==document.documentElement;N=N.parentElement)if(N.style&&N.style.display==="none")return!1;return!!(P.offsetParent||P.getClientRects().length)}function $(){var P=document.hidden;m.forEach(function(N){var T=typeof N.el=="function"?N.el():N.el,C=!P&&L(T);if(C&&!N.timer){if(N.immediate!==!1)try{N.tick()}catch{}N.timer=setInterval(N.tick,N.intervalMs)}else!C&&N.timer&&(clearInterval(N.timer),N.timer=0)})}function E(P){var N={el:P.el,intervalMs:P.intervalMs,tick:P.tick,immediate:P.immediate,timer:0};return m.push(N),R||(R=new MutationObserver(function(){$()}),R.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden"]}),window.addEventListener("hashchange",$),document.addEventListener("visibilitychange",$),document.addEventListener("admin-panel-rendered",$)),$(),function(){N.timer&&clearInterval(N.timer);var C=m.indexOf(N);C!==-1&&m.splice(C,1)}}window.AdminUtils={DETAILS_STATE_KEY:b,loadDetailsState:y,saveDetailsState:g,escapeHtml:_,cspNonce:z,styleTag:S,closeIcon:A,pollWhileVisible:E}})()});var Oe=me(()=>{(function(){"use strict";function b(y,g,h,_){let z=y.querySelector("[data-route-breadcrumb]");if(!z)return;let S=Array.from(y.querySelectorAll(".admin-dash-nav-row[data-route]")),A=S.find(C=>C.dataset.route===g)||S.find(C=>C.dataset.route===h);if(!A){z.replaceChildren(),z.hidden=!0;return}let m="",R=A.previousElementSibling;for(;R;){if(R.classList.contains("admin-dash-nav-label")){m=(R.querySelector("[data-i18n]")||R).textContent.trim();break}R=R.previousElementSibling}let $=(A.querySelector("[data-i18n]")||A.querySelector("span:nth-child(2)")||A).textContent.trim(),E=_?y.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,P=E?(E.querySelector(".admin-tabs-btn-label")||E).textContent.trim():"",N=[m,$,P].filter(Boolean),T=document.createDocumentFragment();N.forEach((C,K)=>{if(K){let f=document.createElement("span");f.className="admin-dash-breadcrumb-sep",f.setAttribute("aria-hidden","true"),f.textContent="\u203A",T.appendChild(f)}let F=document.createElement("span"),O=K===N.length-1;F.className="admin-dash-breadcrumb-item"+(O?" is-current":""),O&&F.setAttribute("aria-current","page"),F.textContent=C,T.appendChild(F)}),z.replaceChildren(T),z.hidden=N.length===0}window.AdminBreadcrumb={render:b}})()});var Re=me(()=>{(function(b){"use strict";let y={moderation:{defaultTab:"queue",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",sections:["sec-blacklist","sec-filters"]},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},integrations:{defaultTab:"webhooks",tabs:[{slug:"webhooks",labelKey:"tabExtWebhooks",en:"WEBHOOKS",section:"sec-webhooks"},{slug:"plugins",labelKey:"tabExtPlugins",en:"PLUGINS",sections:["sec-plugins","sec-extensions-overview"]},{slug:"api-tokens",labelKey:"tabExtApiKeys",en:"API KEYS",section:"sec-api-tokens-overview"},{slug:"scheduler",labelKey:"tabExtScheduler",en:"SCHEDULER",section:"sec-scheduler"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function g($){return Array.isArray($.sections)?$.sections:$.section?[$.section]:[]}function h($){return!!y[$]}function _($){return y[$]||null}let z={moderation:{filters:"blacklist",fingerprints:"bans"}};function S($,E){let P=y[$];if(!P)return null;let N=K=>P.tabs.some(F=>F.slug===K),T=z[$]?.[E];if(T&&N(T))return T;if(E&&N(E))return E;let C=b.AdminRouter?.tabMemory?.get?.($);return C&&N(C)?C:P.defaultTab}function A($,E,P){let N=y[$];if(!N)return null;let T=document.createElement("div");return T.className="admin-tabs-strip",T.dataset.nav=$,T.setAttribute("role","tablist"),T.setAttribute("aria-label",$+" tabs"),N.tabs.forEach(C=>{let K=document.createElement("button");K.type="button",K.className="admin-tabs-btn"+(C.slug===E?" is-active":""),K.dataset.nav=$,K.dataset.tab=C.slug,K.setAttribute("role","tab"),K.setAttribute("aria-selected",C.slug===E?"true":"false");let F=document.createElement("span");F.className="admin-tabs-btn-label",F.textContent=C.labelKey?ServerI18n.t(C.labelKey):C.label,K.appendChild(F);let O=document.createElement("span");O.className="admin-tabs-btn-count",O.dataset.tabCount=C.slug,O.textContent=m[$]&&m[$][C.slug]?m[$][C.slug]:"",K.appendChild(O),K.addEventListener("click",()=>{typeof P?.onSelect=="function"&&P.onSelect(C.slug)}),T.appendChild(K)}),T}let m={};function R($,E,P){if(!y[$])return;m[$]=m[$]||{},m[$][E]=P==null?"":String(P);let N=document.querySelector('.admin-tabs-strip[data-nav="'+$+'"] [data-tab-count="'+E+'"]');N&&(N.textContent=m[$][E])}function L($,E,P){let N=y[$];!N||!P||N.tabs.forEach(T=>{let C=T.slug===E;g(T).forEach(K=>{let F=P.querySelector("#"+K);F&&(F.style.display=C?"":"none")})})}b.AdminTabs={hasTabsFor:h,getConfig:_,resolveActiveTab:S,renderTabStrip:A,applyTabSectionVisibility:L,setTabCount:R}})(window)});var qe=me(()=>{(function(b,y){"use strict";let g="data-quick-action-host",h="admin-quick-action-bar";function _(R){if(R?.host instanceof HTMLElement)return R.host;let L=y.querySelector(".admin-dash-main");if(!L)return y.body;let $=L.querySelector(`[${g}]`);if(!$){$=y.createElement("div"),$.setAttribute(g,"");let E=L.querySelector(".admin-dash-topbar"),N=L.querySelector("[data-admin-tabs-host]")||E;N&&N.parentNode?N.insertAdjacentElement("afterend",$):L.prepend($)}return $}function z(R,L){typeof b.showToast=="function"&&b.showToast(R,L!==!1)}function S({label:R,undoLabel:L,onUndo:$,windowMs:E}){let P=_(),N=P.querySelector("."+h);N&&N.remove();let T=y.createElement("div");T.className=h,T.setAttribute("role","status"),T.setAttribute("aria-live","polite");let C=y.createElement("span");C.className=h+"-text",C.textContent="\u2713 "+R,T.appendChild(C);let K=y.createElement("button");K.type="button",K.className=h+"-undo",K.textContent="\u21B6 "+(L||ServerI18n.t("qaUndoLabel")),T.appendChild(K);let F=()=>{T.classList.add("is-leaving"),setTimeout(()=>T.remove(),200)},O=setTimeout(F,E||5e3);return K.addEventListener("click",async()=>{clearTimeout(O),K.disabled=!0,K.textContent=ServerI18n.t("qaUndoing");try{await $(),z(ServerI18n.t("qaUndone"),!0)}catch(f){z(ServerI18n.t("qaUndoFailed",{msg:f?.message||String(f)}),!1)}finally{F()}}),P.appendChild(T),requestAnimationFrame(()=>T.classList.add("is-entering")),T}function A(R){if(!R||typeof R!="object")return;let L=R.label||ServerI18n.t("qaDone");R.toast!==!1&&z(L,!0),R.undo&&typeof R.undo.run=="function"&&S({label:L,undoLabel:R.undo.label,onUndo:R.undo.run,windowMs:R.undo.window})}function m(){y.querySelectorAll("."+h).forEach(R=>R.remove())}b.AdminQuickAction={fire:A,dismissAll:m}})(window,document)});var He=me(()=>{(function(){"use strict";let b="admin-hud-modal-root",y=null,g=null,h='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function _(){let m=document.getElementById(b);return m?Array.prototype.slice.call(m.querySelectorAll(h)).filter(R=>R.offsetParent!==null||R===document.activeElement):[]}function z(m){let R=document.getElementById(b);if(R&&R.remove(),y&&(y(m),y=null),document.removeEventListener("keydown",S),g&&typeof g.focus=="function")try{g.focus()}catch{}g=null}function S(m){if(m.key==="Escape"){m.preventDefault(),z(!1);return}if(m.key==="Tab"){let R=_();if(!R.length){m.preventDefault();return}let L=R[0],$=R[R.length-1],E=document.activeElement;m.shiftKey?(E===L||!R.includes(E))&&(m.preventDefault(),$.focus()):(E===$||!R.includes(E))&&(m.preventDefault(),L.focus())}}function A(m){return new Promise(R=>{y&&z(!1),y=R,g=document.activeElement;let{icon:L="\u26A0",title:$=ServerI18n.t("hudConfirmTitle"),subtitle:E="",severity:P="warn",body:N="",titleText:T,bodyText:C,confirmLabel:K=ServerI18n.t("hudConfirmLabel"),cancelLabel:F=ServerI18n.t("cancel"),width:O=480}=m||{},f=document.createElement("div");f.id=b,f.className=`admin-hud-modal admin-hud-modal--${P}`,f.setAttribute("role","dialog"),f.setAttribute("aria-modal","true"),f.setAttribute("aria-labelledby","admin-hud-modal-title");let c=E?`<div class="admin-hud-modal__subtitle">${E}</div>`:"",i=typeof N=="string"?N:"",a=typeof N!="string"&&N&&N.nodeType;if(f.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${O}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${L}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${$}</div>
              ${c}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${i}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${F}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${K}</button>
          </div>
        </div>`,T!=null){let o=f.querySelector(".admin-hud-modal__title");o&&(o.textContent=String(T))}if(C!=null){let o=f.querySelector("[data-modal-body]");o&&(o.textContent=String(C))}if(a){let o=f.querySelector("[data-modal-body]");o.innerHTML="",o.appendChild(N)}f.addEventListener("click",function(o){let s=o.target.closest("[data-modal-action]");s&&(o.stopPropagation(),z(s.dataset.modalAction==="confirm"))}),document.body.appendChild(f),document.addEventListener("keydown",S),requestAnimationFrame(()=>{f.querySelector(".admin-hud-modal__btn--confirm")?.focus()})})}window.HudConfirm={open:A}})()});var je=me(()=>{(function(){"use strict";function y(A){let m=document.createElement("div");return m.className="admin-skel-slow",m.hidden=!0,m.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",A.appendChild(m),setTimeout(function(){m.isConnected&&(m.hidden=!1)},3e3),A}function g(A,m){let R=document.createElement("div");if(R.className="admin-skel "+(A||""),m)for(let L in m)R.style[L]=m[L];return R}function h({rows:A=8}={}){let m=document.createElement("div");m.className="admin-skel-card admin-skel-list";let R=document.createElement("div");R.className="admin-skel-list__head",[60,80,140,200,80].forEach(L=>{R.appendChild(g("admin-skel-bar",{width:L+"px",height:"10px"}))}),m.appendChild(R);for(let L=0;L<A;L++){let $=document.createElement("div");$.className="admin-skel-list__row",$.appendChild(g("admin-skel-circle",{width:"24px",height:"24px"}));let E=document.createElement("div");E.className="admin-skel-list__col",E.appendChild(g("admin-skel-bar",{width:50+L*13%40+"%",height:"10px"})),E.appendChild(g("admin-skel-bar",{width:30+L*7%30+"%",height:"8px"})),$.appendChild(E),$.appendChild(g("admin-skel-bar",{width:"60px",height:"10px"})),m.appendChild($)}return y(m)}function _({cols:A=4}={}){let m=document.createElement("div");m.className="admin-skel-stats",m.style.gridTemplateColumns=`repeat(${A}, 1fr)`;for(let R=0;R<A;R++){let L=document.createElement("div");L.className="admin-skel-card admin-skel-tile",L.appendChild(g("admin-skel-bar",{width:"60px",height:"8px"})),L.appendChild(g("admin-skel-bar",{width:"80px",height:"28px"})),L.appendChild(g("admin-skel-bar",{width:"100%",height:"18px"})),L.appendChild(g("admin-skel-bar",{width:"90px",height:"8px"})),m.appendChild(L)}return y(m)}function z(){let A=document.createElement("div");A.className="admin-skel-card admin-skel-chart";let m=document.createElement("div");m.className="admin-skel-chart__head",m.appendChild(g("admin-skel-bar",{width:"120px",height:"10px"}));let R=document.createElement("span");R.style.flex="1",m.appendChild(R),m.appendChild(g("admin-skel-bar",{width:"80px",height:"10px"})),A.appendChild(m);let L=document.createElement("div");L.className="admin-skel-chart__body";let $=document.createElement("div");$.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>$.appendChild(g("admin-skel-bar",{width:"24px",height:"6px"}))),L.appendChild($);let E=document.createElement("div");return E.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(N=>E.appendChild(g("admin-skel-bar admin-skel-chart__bar",{height:N+"%"}))),L.appendChild(E),A.appendChild(L),y(A)}function S(A,m){let R={listRows:h,statsTiles:_,chart:z}[A];return R?R(m||{}).outerHTML:""}window.AdminSkeletons={listRows:h,statsTiles:_,chart:z,html:S}})()});var Ue=me(()=>{(function(){"use strict";let b={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},y={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:b.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:b.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:b.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:b.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:b.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:b.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:b.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:b.cyan}};function g(_){let{icon:z="\xB7",title:S="",desc:A="",accent:m=b.cyan,ctaAccent:R,actionLabel:L,action:$,extra:E}=_||{},P=document.createElement("div");P.className="admin-empty",P.dataset.empty="1",P.style.setProperty("--admin-empty-accent",m),R&&P.style.setProperty("--admin-empty-cta",R);let N=document.createElement("div");if(N.className="admin-empty__icon",N.textContent=z,P.appendChild(N),S){let T=document.createElement("div");T.className="admin-empty__title",T.textContent=S,P.appendChild(T)}if(A){let T=document.createElement("div");T.className="admin-empty__desc",T.textContent=A,P.appendChild(T)}if(L){let T=document.createElement("button");T.type="button",T.className="admin-empty__btn",T.textContent=L,typeof $=="function"&&T.addEventListener("click",$),P.appendChild(T)}if(E){let T=document.createElement("div");T.className="admin-empty__extra",typeof E=="string"?T.innerHTML=E:T.appendChild(E),P.appendChild(T)}return P}function h(_){let z=y[_];if(!z)return g({title:ServerI18n.t("emptyNoData"),desc:""});let S=Object.assign({},z,{title:z.titleKey?ServerI18n.t(z.titleKey):z.title,desc:z.descKey?ServerI18n.t(z.descKey):z.desc,actionLabel:z.actionLabelKey?ServerI18n.t(z.actionLabelKey):z.actionLabel});return g(S)}window.AdminEmpty={render:h,renderCustom:g,PRESETS:y}})()});var Ke=me(()=>{(function(){"use strict";var b=8;function y(S){return S?String(S).slice(0,b):""}function g(S){if(!S||typeof S!="object")return{nickname:"",fp:"",ip:""};var A=S.fingerprint||S.fp||S.hash||"",m=S.clientIp||S.client_ip||S.ip||"",R=S.nickname||S.nick||"";return{nickname:String(R||""),fp:String(A||""),ip:String(m||"")}}function h(S){if(!S||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var A=new TextEncoder().encode(String(S));return window.crypto.subtle.digest("SHA-256",A).then(function(m){var R=Array.from(new Uint8Array(m));return R.map(function(L){return L.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function _(S){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var A=document.getElementById("sec-fingerprints");if(A&&!A.open&&(A.open=!0),A)try{A.scrollIntoView({behavior:"smooth",block:"start"})}catch{}h(S).then(function(m){if(m)var R=0,L=setInterval(function(){R+=1;var $=document.querySelector('[data-fp-hash="'+m+'"]');if($){clearInterval(L),$.classList.add("admin-identity-flash"),setTimeout(function(){$.classList.remove("admin-identity-flash")},2e3);try{$.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else R>12&&clearInterval(L)},250)})}function z(S){S=S||{};var A=S.nickname||"",m=S.fp||"",R=S.ip||"",L=!!S.compact,$=typeof S.onNicknameClick=="function"?S.onNicknameClick:null,E=typeof S.onFpClick=="function"?S.onFpClick:_,P=document.createElement("span");P.className="admin-identity-row";var N;if($?(N=document.createElement("button"),N.type="button",N.className="admin-identity-nick is-clickable",N.addEventListener("click",function(f){f.stopPropagation(),$(A)})):(N=document.createElement("span"),N.className="admin-identity-nick"),A)N.textContent="@"+A;else{var T="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var C=ServerI18n.t("anonymousPlaceholder");C&&C!=="anonymousPlaceholder"&&(T=C)}}catch{}N.textContent="@"+T,N.classList.add("is-guest")}if(A&&(N.title=A),P.appendChild(N),m){var K;if(E?(K=document.createElement("button"),K.type="button",K.className="admin-identity-fp is-clickable",K.addEventListener("click",function(f){f.stopPropagation(),E(m)})):(K=document.createElement("span"),K.className="admin-identity-fp"),m==="new"){var F=document.createElement("span");F.className="admin-identity-dot",K.appendChild(F),K.appendChild(document.createTextNode("fp:new"))}else K.textContent="fp:"+y(m);K.title=m,P.appendChild(K)}if(R&&!L){var O=document.createElement("span");O.className="admin-identity-ip",O.textContent=R,O.title=R,P.appendChild(O)}return P}window.AdminIdentity={render:z,parse:g,focusFingerprint:_,hashFp:h,FP_DISPLAY_LEN:b}})()});var We=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;function y(o,s){return window.csrfFetch(o,s)}function g(o,s){return window.showToast(o,s)}let h="default",_=[],z={};function S(){let o=document.getElementById("themesList");o&&window.AdminSkeletons&&(o.innerHTML="",o.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function A(){S();try{let o=await y("/admin/themes");if(!o.ok)return;let s=await o.json();h=s.active||"default",_=s.themes||[],z=s.overrides||{},P(_,h),C()}catch(o){console.warn("[Themes] Failed to fetch themes:",o)}}var m="\u5C0F\u660E",R="\u8B1B\u5F97\u597D\uFF01+1";function L(o,s){var l=String(o||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(l)?l:s}function $(o){var s=o.styles||{},l=["color:"+L(s.color,"#ffffff")];if(s.textStroke){var r=Math.max(0,Math.min(6,Number(s.strokeWidth)||0));l.push("-webkit-text-stroke:"+r+"px "+L(s.strokeColor,"#000000")),l.push("paint-order:stroke fill")}if(s.textShadow){var t=Math.max(0,Math.min(40,Number(s.shadowBlur)||0));l.push("text-shadow:0 0 "+t+"px "+L(s.color,"#ffffff"))}var d=o.font&&o.font.family;return d&&/^[\w\s-]{1,40}$/.test(d)&&l.push("font-family:'"+d+"', var(--font-sans)"),o.font&&Number(o.font.weight)&&l.push("font-weight:"+Math.max(100,Math.min(900,Number(o.font.weight)))),l.join(";")}function E(o){var s=o.bg&&o.bg.gradient;return s&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(s).trim())?"background:"+String(s).trim():""}function P(o,s){let l=document.getElementById("themesList");if(l){if(l.innerHTML="",o.length===0){l.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}o.forEach(r=>{let t=r.name===s,d=b(ServerI18n.t("theme_"+r.name)!=="theme_"+r.name?ServerI18n.t("theme_"+r.name):r.label||r.name),p=document.createElement("div");p.className=`theme-pack-card${t?" is-active":""}`,p.innerHTML=`
        <div class="theme-pack-name">${d}</div>
        <div class="theme-pack-sample" style="${b(E(r))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${b($(r))}">
            <span class="theme-pack-sample-nick">${b(m)}</span>
            ${b(R)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${r.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${b(r.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${t?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${b(r.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,l.appendChild(p)}),l.querySelectorAll(".theme-delete-btn").forEach(r=>{r.addEventListener("click",async()=>{let t=r.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let p=await y("/admin/themes/"+encodeURIComponent(t),{method:"DELETE"});if(!p.ok)throw new Error("HTTP "+p.status);g(ServerI18n.t("themeDeleted"),!0),A()}catch{g(ServerI18n.t("themesDeleteFailed"),!1)}})}),l.querySelectorAll(".theme-activate-btn").forEach(r=>{r.addEventListener("click",async()=>{let t=r.dataset.theme;try{let d=await y("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})});if(d.ok)g(ServerI18n.t("themeActivated"),!0),h=t,P(o,t),C();else{let p=await d.json().catch(()=>({}));g(p.error||ServerI18n.t("setThemeFailed"),!1)}}catch{g(ServerI18n.t("setThemeFailed"),!1)}})})}}function N(){return _.find(o=>o.name===h)||null}function T(o,s){let l=z[h]||{};if(l[o])return l[o];let r=s&&s.styles||{};return o==="stroke"?r.textStroke?Number(r.strokeWidth)>=3?"thick":"thin":"none":r.textShadow?Number(r.shadowBlur)>=10?"strong":"soft":"none"}function C(){let o=document.getElementById("themeDetail"),s=document.getElementById("themeDetailLabel");if(!o||!s)return;let l=N();if(!l)return;let r=ServerI18n.t("theme_"+l.name)!=="theme_"+l.name?ServerI18n.t("theme_"+l.name):l.label||l.name;s.textContent=ServerI18n.t("themeDetailGroup",{name:r}),["stroke","shadow"].forEach(d=>{let p=T(d,l);o.querySelectorAll(`[data-theme-seg="${d}"] [data-theme-opt]`).forEach(e=>{let n=e.getAttribute("data-theme-opt")===p;e.classList.toggle("is-active",n),e.setAttribute("aria-pressed",n?"true":"false")})});let t=o.querySelector('[data-theme-ov="color"]');if(t){let d=L((l.styles||{}).color,"#ffffff");t.value=/^#[0-9a-fA-F]{6}$/.test(d)?d:"#ffffff"}F(l),O(l)}var K=null;async function F(o){let s=document.getElementById("themeOvFont");if(!s)return;if(!K)try{let t=await fetch("/fonts",{credentials:"same-origin"});K=t.ok?(await t.json()).fonts||[]:[]}catch{K=[]}let r=(z[h]||{}).font_family||"";s.innerHTML=`<option value="">${b(ServerI18n.t("themeDetailFontInherit"))}</option>`+K.map(t=>{let d=String(t.name||t);return`<option value="${b(d)}"${d===r?" selected":""}>${b(d)}</option>`}).join("")}function O(o){let s=document.querySelector("[data-theme-preview-line]");s&&s.setAttribute("style",$(o))}async function f(o){try{let s=await y("/admin/themes/"+encodeURIComponent(h)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!s.ok)throw new Error("HTTP "+s.status);g(ServerI18n.t("themeDetailSaved"),!0),await A()}catch{g(ServerI18n.t("themeDetailSaveFailed"),!1)}}function c(){let o=document.getElementById("themeDetail");o&&(o.addEventListener("click",s=>{let l=s.target.closest("[data-theme-opt]");if(!l)return;let r=l.closest("[data-theme-seg]");r&&f({[r.getAttribute("data-theme-seg")]:l.getAttribute("data-theme-opt")})}),o.addEventListener("change",s=>{let l=s.target.closest("[data-theme-ov]");l&&f({[l.getAttribute("data-theme-ov")]:l.value})}))}function i(){let o=document.getElementById("themeNewBtn");o&&o.addEventListener("click",async()=>{let s=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!s||!s.trim()))try{let l=await y("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:s.trim(),base:h})});if(!l.ok)throw new Error("HTTP "+l.status);g(ServerI18n.t("themeCreated"),!0),A()}catch{g(ServerI18n.t("themesNewFailed"),!1)}})}function a(){A(),c(),i();let o=document.getElementById("themeReloadBtn");o&&o.addEventListener("click",async()=>{try{(await y("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(g(ServerI18n.t("themesReloaded")),A()):g(ServerI18n.t("themesReloadFailed"),!1)}catch{g(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:a}})()});var Ge=me(()=>{(function(){"use strict";function b(I,B){return window.csrfFetch(I,B)}function y(I,B){return window.showToast(I,B)}var g=window.ServerI18n;function h(I,B){return window.AdminUtils.styleTag(I,B)}let _=null;function z(){let I=document.getElementById("effectEditModal");return I?Array.from(I.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(B=>!B.hasAttribute("disabled")&&B.getAttribute("aria-hidden")!=="true"):[]}function S(I){let B=document.getElementById("effectEditModal");if(!B||B.classList.contains("hidden"))return;if(I.key==="Escape"){I.preventDefault(),A();return}if(I.key!=="Tab")return;let H=z();if(H.length===0){I.preventDefault();return}let D=H[0],x=H[H.length-1],U=document.activeElement;I.shiftKey&&U===D?(I.preventDefault(),x.focus()):!I.shiftKey&&U===x&&(I.preventDefault(),D.focus())}function A(){let I=document.getElementById("effectEditModal");I&&(I.classList.add("hidden"),I.classList.remove("flex"),I.removeEventListener("keydown",S),_&&(_.focus(),_=null))}let m={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(I){return!!m[I]}};let R=new Map,L=new Map;function $(I){if(!I||!I.styleId||!I.keyframes)return;let B="dme-user-"+I.styleId;if(document.getElementById(B))return;let H=document.createElement("style");H.id=B,H.textContent=I.keyframes,document.head.appendChild(H)}async function E(I){if(R.has(I))return R.get(I);if(L.has(I))return L.get(I);let B=(async()=>{try{let H=await b(`/admin/effects/${encodeURIComponent(I)}/content`);if(!H.ok)throw new Error("content fetch failed");let D=await H.json(),x=D&&D.content||"";if(!x)throw new Error("empty content");let U=await b("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:x,params:{}})});if(!U.ok)throw new Error("preview failed");let G=await U.json();if(!G||!G.animation)throw new Error("no animation");return $(G),R.set(I,G),G}catch{return R.set(I,"failed"),null}finally{L.delete(I)}})();return L.set(I,B),B}function P(I,B){let H=I.querySelector(".effect-demo-text");if(!H)return;H.style.animation=B.animation||"",B.animationComposition&&(H.style.animationComposition=B.animationComposition),H.style.animationPlayState="paused";let D=T();D&&D.observe(I)}let N=null;function T(){return N||(typeof IntersectionObserver>"u"?null:(N=new IntersectionObserver(I=>{I.forEach(B=>{let H=B.target.querySelector(".effect-demo-text");H&&(H.style.animationPlayState=B.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),N))}let C=null;function K(I){let B=document.getElementById("effectPreviewParams");if(!B)return{};let H;try{let x=I.split(`
`),U=!1,G=0,Y=null,M=0,q={};for(let V of x){let ne=V.trimStart(),W=V.length-ne.length;if(ne.startsWith("params:")){U=!0,G=W;continue}if(!U||ne===""||ne.startsWith("#"))continue;if(W<=G&&!ne.startsWith("params:")){U=!1;continue}let X=ne.match(/^([a-zA-Z0-9_]+):\s*$/);if(X&&W===G+2){Y=X[1],M=W,q[Y]={};continue}if(Y&&W>M){let ee=ne.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(ee){let se=ee[1],Q=ee[2].trim();if((Q.startsWith('"')&&Q.endsWith('"')||Q.startsWith("'")&&Q.endsWith("'"))&&(Q=Q.slice(1,-1)),se!=="options"){let ae=Number(Q);q[Y][se]=isNaN(ae)?Q:ae}}if(ne.startsWith("- value:")){q[Y].options||(q[Y].options=[]);let se=ne.match(/^- value:\s*(.+)$/);if(se){let Q=se[1].trim();(Q.startsWith('"')&&Q.endsWith('"')||Q.startsWith("'")&&Q.endsWith("'"))&&(Q=Q.slice(1,-1)),q[Y].options.push({value:Q,label:Q})}}if(ne.startsWith("label:")&&q[Y].options&&q[Y].options.length>0){let se=ne.match(/^label:\s*(.+)$/);if(se){let Q=se[1].trim();(Q.startsWith('"')&&Q.endsWith('"')||Q.startsWith("'")&&Q.endsWith("'"))&&(Q=Q.slice(1,-1)),q[Y].options[q[Y].options.length-1].label=Q}}}}H=q}catch{H={}}B.innerHTML="";let D={};for(let[x,U]of Object.entries(H||{})){let G=U.type||"float",Y=document.createElement("div");Y.className="flex flex-col gap-0.5";let M=document.createElement("label");if(M.className="font-mono",M.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",M.textContent=`${x} (${G})`,Y.appendChild(M),G==="select"&&Array.isArray(U.options)){let q=document.createElement("select");q.className="admin-ui-select",q.style.cssText="font-size:13px;padding:4px 8px",q.dataset.paramKey=x;for(let V of U.options){let ne=document.createElement("option");ne.value=V.value,ne.textContent=V.label||V.value,V.value===String(U.default)&&(ne.selected=!0),q.appendChild(ne)}D[x]=String(U.default||U.options[0]&&U.options[0].value||""),q.addEventListener("change",()=>{f()}),Y.appendChild(q)}else{let q=U.min!=null?U.min:0,V=U.max!=null?U.max:10,ne=U.step!=null?U.step:G==="int"?1:.1,W=U.default!=null?U.default:q,X=document.createElement("div");X.className="flex items-center gap-2";let ee=document.createElement("input");ee.type="range",ee.min=q,ee.max=V,ee.step=ne,ee.value=W,ee.dataset.paramKey=x,ee.className="flex-1",ee.style.accentColor="var(--color-primary)";let se=document.createElement("span");se.className="font-mono",se.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",se.textContent=String(W),ee.addEventListener("input",()=>{se.textContent=ee.value,f()}),X.appendChild(ee),X.appendChild(se),Y.appendChild(X),D[x]=W}B.appendChild(Y)}return D}function F(){let I=document.getElementById("effectPreviewParams");if(!I)return{};let B={};return I.querySelectorAll("[data-param-key]").forEach(H=>{B[H.dataset.paramKey]=H.type==="range"?Number(H.value):H.value}),B}async function O(){let I=document.getElementById("effectEditModalTextarea"),B=document.getElementById("effectPreviewText"),H=document.getElementById("effectPreviewStyle"),D=document.getElementById("effectPreviewError");if(!I||!B||!H)return;let x=I.value;if(!x||x===g.t("effectLoadContent")||x===g.t("effectsNetworkError"))return;let U=F();D?.classList.add("hidden");try{let G=await b("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:x,params:U})}),Y=await G.json().catch(()=>({}));G.ok?(H.textContent=Y.keyframes||"",B.style.animation=Y.animation||"none",B.style.animationComposition=Y.animationComposition||""):(B.style.animation="none",H.textContent="",D&&(D.textContent=Y.error||g.t("previewFailed"),D.classList.remove("hidden")))}catch{B.style.animation="none",H.textContent="",D&&(D.textContent=g.t("effectsNetworkError"),D.classList.remove("hidden"))}}function f(){clearTimeout(C),C=setTimeout(()=>O(),500)}async function c(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
      `),document.getElementById("effectEditModalClose").addEventListener("click",A),document.getElementById("effectEditModalCancel").addEventListener("click",A),document.getElementById("effectEditModal").addEventListener("click",x=>{x.target===x.currentTarget&&A()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let x=document.getElementById("effectEditModalTextarea");x&&(K(x.value),f())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{O()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let x=document.getElementById("effectEditModal"),U=document.getElementById("effectEditModalTextarea"),G=document.getElementById("effectEditModalSave"),Y=x?.dataset.effectName;if(!(!Y||!U)){G.disabled=!0;try{let M=await b("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Y,content:U.value})}),q=await M.json().catch(()=>({}));M.ok?(y(q.message||g.t("effectSaveFallback"),!0),A(),await o()):y(q.error||g.t("saveFailed"),!1)}catch{y(g.t("effectsNetworkError"),!1)}finally{G.disabled=!1}}})),await o(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let x=document.getElementById("effectReloadBtn");x&&(x.disabled=!0);try{let U=await b("/admin/effects/reload",{method:"POST"}),G=await U.json().catch(()=>({}));U.ok?(y(G.message||g.t("effectsReloadFallback")),await o()):y(G.error||g.t("reloadFailed"),!1)}catch{y(g.t("effectsNetworkError"),!1)}finally{x&&(x.disabled=!1)}});async function I(x){if(!x)return;let U=new FormData;U.append("effectfile",x);try{let G=await b("/admin/effects/upload",{method:"POST",body:U}),Y=await G.json().catch(()=>({}));G.ok?(y(Y.message||g.t("effectUploadFallback")),await o()):y(Y.error||g.t("uploadFailed"),!1)}catch{y(g.t("effectsNetworkError"),!1)}}let B=document.getElementById("effectUploadInput"),H=B&&!B.dataset.uploadWired;H&&(B.dataset.uploadWired="1"),(H?B:null)?.addEventListener("change",async x=>{await I(x.target.files?.[0]),x.target.value=""});let D=document.getElementById("sec-effects-mgmt");if(D){let x=0,U=q=>{q.preventDefault(),x++,D.classList.add("is-drag")},G=q=>{q.preventDefault()},Y=q=>{q.preventDefault(),x=Math.max(0,x-1),x===0&&D.classList.remove("is-drag")},M=async q=>{q.preventDefault(),x=0,D.classList.remove("is-drag");let V=q.dataTransfer?.files?.[0];if(V){if(!/\.(dme|dme\.zip)$/i.test(V.name)){y(g.t("fxToastBadExt"),!1);return}await I(V)}};D.addEventListener("dragenter",U),D.addEventListener("dragover",G),D.addEventListener("dragleave",Y),D.addEventListener("drop",M)}}function i(I){let B=(I||"").toLowerCase();return B.startsWith("glow")||B.includes("neon")?"GLOW":B.startsWith("shake")?"SHAKE":B.startsWith("wave")||B.startsWith("spin")||B.startsWith("bounce")||B.startsWith("zoom")||B.startsWith("fire")||B.includes("motion")?"MOTION":B.startsWith("rainbow")||B.startsWith("blink")||B.includes("color")?"COLOR":B.startsWith("type")||B.includes("text")?"TEXT":"MISC"}let a={all:[],filter:"ALL",selected:null};async function o(){let I=document.getElementById("effectsList");if(I)try{let B=await b("/admin/effects");if(!B.ok){I.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsLoadFailed")+"</span>";return}let H=await B.json();a.all=H.effects||[],s(),r()}catch{I.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsNetworkError")+"</span>"}}function s(){let I=document.getElementById("effectsFilterRow");if(!I)return;let B={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};a.all.forEach(G=>{B[i(G.name)]+=1});let H=a.all.length,D=[["ALL",g.t("fxChipAll"),H],["GLOW",g.t("fxCatGlow"),B.GLOW],["MOTION",g.t("fxCatMotion"),B.MOTION],["COLOR",g.t("fxCatColor"),B.COLOR],["SHAKE",g.t("fxCatShake"),B.SHAKE],["TEXT",g.t("fxCatText"),B.TEXT]];B.MISC>0&&D.push(["MISC",g.t("fxCatMisc"),B.MISC]);let x=D.map(([G,Y,M])=>`<span class="hud-filter-chip ${a.filter===G?"is-active":""}" data-effect-filter="${G}">${Y} ${M}</span>`).join(""),U=I.querySelector("[data-toolbar-spacer]");U?(I.querySelectorAll("[data-effect-filter]").forEach(G=>G.remove()),U.insertAdjacentHTML("beforebegin",x)):I.innerHTML=x,I.querySelectorAll("[data-effect-filter]").forEach(G=>{G.addEventListener("click",()=>{a.filter=G.dataset.effectFilter,s(),r()})})}function l(I){let B=(G,Y)=>{let M=document.querySelector(G);M&&(M.textContent=Y==null?"\u2014":String(Y))},H=I.length,D=I.filter(G=>G.enabled!==!1).length,x=new Set(I.map(G=>i(G.name))),U=I.filter(G=>!m[G.name]).length;B("[data-eflib-total]",H),B("[data-eflib-active]",D),B("[data-eflib-cats]",x.size),B("[data-eflib-user]",U)}function r(){let I=document.getElementById("effectsList");if(!I)return;let B=a.all;l(B);let H=a.filter==="ALL"?B:B.filter(D=>i(D.name)===a.filter);if(!H.length){I.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(B.length?g.t("fxNoFilterMatch"):g.t("noEffectsLoaded"))+"</span>";return}N&&N.disconnect(),I.innerHTML="",H.forEach(D=>{let x=i(D.name),U=x==="GLOW"?"is-glow":x==="COLOR"?"is-color":x==="TEXT"?"is-text":"",G=m[D.name]||"",Y=!!G,M=document.createElement("div");M.className="hud-effect-card"+(a.selected===D.name?" is-selected":""),M.dataset.effectName=D.name,M.title=[D.description,`file: ${D.filename}`].filter(Boolean).join(`
`);var q="effect_"+D.name;let V=g.t(q)!==q?g.t(q):D.label||D.name,ne=Y?"built-in":"user",W=G?`animation:${G};animation-play-state:paused;`:"";if(M.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${t(g.t("fxCat"+x.charAt(0)+x.slice(1).toLowerCase())||x)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${U}"><span class="effect-demo-text" style="${W}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${t(V)}</div>
          <div class="hud-effect-card-meta">${t(ne)} \xB7 ${t(D.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${g.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${g.t("lbDelete")}</button>
        </div>
      `,I.appendChild(M),G){let se=T();se&&se.observe(M)}else{let se=R.get(D.name);se&&se!=="failed"?($(se),P(M,se)):se!=="failed"&&E(D.name).then(Q=>{if(!Q)return;let ae=I.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(D.name)}"]`);ae&&P(ae,Q)})}M.addEventListener("click",se=>{se.target.closest("[data-role]")||v(D)});let X=M.querySelector('[data-role="edit"]'),ee=M.querySelector('[data-role="delete"]');X.addEventListener("click",async()=>{let se=document.getElementById("effectEditModal"),Q=document.getElementById("effectEditModalTitle"),ae=document.getElementById("effectEditModalFile"),ie=document.getElementById("effectEditModalTextarea"),ce=document.getElementById("effectEditModalSave");if(!se)return;_=document.activeElement instanceof HTMLElement?document.activeElement:null,Q.textContent=D.label||D.name,ae.textContent=D.filename,ie.value=g.t("effectLoadContent"),ie.disabled=!0,ce.disabled=!0,se.dataset.effectName=D.name,se.classList.remove("hidden"),se.classList.add("flex"),se.addEventListener("keydown",S),ie.focus();let ye=document.getElementById("effectPreviewText"),we=document.getElementById("effectPreviewStyle"),Se=document.getElementById("effectPreviewError"),_e=document.getElementById("effectPreviewParams");ye&&(ye.style.animation="none"),we&&(we.textContent=""),Se&&Se.classList.add("hidden"),_e&&(_e.innerHTML="");try{let Ie=await b(`/admin/effects/${encodeURIComponent(D.name)}/content`),de=await Ie.json().catch(()=>({}));Ie.ok?(ie.value=de.content||"",ie.disabled=!1,ce.disabled=!1,ie.focus(),K(ie.value),O()):(ie.value=de.error||g.t("effectLoadContentFailed"),y(de.error||g.t("effectLoadContentFailed"),!1))}catch{ie.value=g.t("effectsNetworkError"),y(g.t("effectsNetworkError"),!1)}}),ee.addEventListener("click",async()=>{let se=D.label||D.name;if(await window.HudConfirm?.open({icon:"\u2297",title:g.t("fxDeleteTitle"),subtitle:g.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${g.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${se}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${g.t("fxDeleteWarn")}
                </div>`,confirmLabel:g.t("fxDeleteConfirm"),cancelLabel:g.t("cancel"),width:400}))try{let ae=await b("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:D.name})}),ie=await ae.json().catch(()=>({}));ae.ok?(y(ie.message||g.t("effectDeleteFallback"),!0),await o()):y(ie.error||g.t("deleteFailed"),!1)}catch{y(g.t("effectsNetworkError"),!1)}})})}function t(I){return String(I??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function d(I){let B={name:"",label:"",description:"",params:[]};if(!I)return B;let H=I.split(`
`),D="top",x=null;for(let U of H){let G=U.replace(/\r$/,""),Y=G.trimStart();if(!Y||Y.startsWith("#"))continue;let M=G.length-Y.length;if(M===0){if(D="top",x&&(B.params.push(x),x=null),Y==="params:"){D="params";continue}let q=Y.match(/^([a-z_]+):\s*(.+)$/);q&&(q[1]==="name"?B.name=q[2].trim():q[1]==="label"?B.label=q[2].trim():q[1]==="description"&&(B.description=q[2].trim()));continue}if(!(D!=="params"&&D!=="param-fields"&&D!=="options")){if(M===2&&(D==="params"||D==="param-fields"||D==="options")){x&&(B.params.push(x),x=null);let q=Y.match(/^(\w+):$/);q&&(x={key:q[1]},D="param-fields");continue}if(M===4&&D==="param-fields"&&x){let q=Y.match(/^(\w+):\s*(.*)$/);if(q){let V=q[1],ne=q[2].trim();V==="label"?x.label=ne:V==="type"?x.type=ne:V==="default"?x.default=ne:V==="min"?x.min=parseFloat(ne):V==="max"?x.max=parseFloat(ne):V==="step"?x.step=parseFloat(ne):V==="options"&&(x.options=[],D="options")}continue}if(D==="options"&&x&&M>=6){let q=Y.match(/^-\s*value:\s*(.+)$/);q&&(x.options||(x.options=[]),x.options.push({value:q[1].trim(),label:q[1].trim()}));let V=Y.match(/^label:\s*(.+)$/);V&&x.options&&x.options.length>0&&(x.options[x.options.length-1].label=V[1].trim())}}}return x&&B.params.push(x),B}function p(I,B){let H=I.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),D=H?H[1]:"",x=I.match(/^animation:\s*["']?(.+?)["']?\s*$/m),U=x?x[1].trim():"";for(let G of B.params){let Y=G.default!==void 0?G.default:"",M=new RegExp(`\\{${G.key}\\}`,"g");D=D.replace(M,Y),U=U.replace(M,Y)}return{keyframes:D,animation:U}}function e(I,B){if(I==="COLOR"){let H=B.find(D=>D.key==="duration");if(H&&H.default){let D=parseFloat(H.default);if(D<.25)return"crimson";if(D<.33)return"amber"}}if(I==="MOTION"){let H=B.find(D=>D.key==="height");if(H&&H.default){let D=parseFloat(H.default);if(D>30)return"crimson";if(D>24)return"amber"}}return"lime"}function n(I,B){return I==="COLOR"?B==="crimson"?g.t("fxHintFlashBlock"):B==="amber"?g.t("fxHintFlashWarn"):g.t("fxHintFlashOk"):B==="crimson"?g.t("fxHintAmpBlock"):B==="amber"?g.t("fxHintAmpWarn"):g.t("fxHintAmpOk")}function u(I,B){let H=d(B),{keyframes:D,animation:x}=p(B,H),U=i(I.name),G=H.params.filter(ie=>ie.type!=="select"),Y=H.params.filter(ie=>ie.type==="select"),M=e(U,H.params),q=M==="crimson"?"BLOCK":M==="amber"?"WARN":"OK",V=n(U,M),ne="fx-anim-"+I.name.replace(/[^a-z0-9]/gi,"-"),W=D&&x?h(ne,D):"",X=x?`animation:${x};animation-play-state:running;`:"",ee=G.map(ie=>{let ce=parseFloat(ie.default)||0,ye=ie.min??0,we=ie.max??100,Se=Math.max(0,Math.min(100,(ce-ye)/(we-ye)*100)),_e=(ie.label||"").match(/\(([^)]+)\)$/),Ie=_e?_e[1]:"",de=ie.label||ie.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${t(de)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${ce}<span style="color:var(--color-text-muted);margin-left:2px">${t(Ie)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${Se}%"></div>
          <div class="fx-slider-knob" style="left:${Se}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${ye}${t(Ie)}</span><span>${we}${t(Ie)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${g.t("fxNoNumericParams")}</span>`,se=Y.map(ie=>{let ce=ie.options||[],ye=String(ie.default||""),we=ce.map(Se=>`<span class="fx-radio-btn${Se.value===ye||Se.label===ye?" is-active":""}">${t(Se.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${t(ie.label||ie.key)}</div>
        <div class="fx-radio-group">${we||"<span>\u2014</span>"}</div>
      </div>`}).join(""),Q=["dark","light","photo"].map(ie=>{let ce=ie==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${ie}">
        <span class="fx-preview-bg-label">${ie.toUpperCase()}</span>
        <span class="fx-preview-text" style="${X}color:${ce}">ABC</span>
      </div>`}).join(""),ae=`${W}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${g.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${ee}</div>
      </div>`;return se&&(ae+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${g.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${se}</div>
      </div>`),ae+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${g.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${Q}</div>
      </div>
      <div class="fx-warn-box${M!=="lime"?" is-"+M:""}">
        <span class="fx-warn-chip${M!=="lime"?" is-"+M:""}">${q}</span>
        <span class="fx-warn-text">${t(V)}</span>
      </div>
    </div>`,ae}async function v(I){a.selected=I.name;let B=document.getElementById("effectsInspector"),H=document.getElementById("effectsInspectorTitle"),D=document.getElementById("effectsInspectorKicker"),x=document.getElementById("effectsInspectorBody");if(B){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),H&&(H.textContent=I.label||I.name),D&&(D.textContent="LOADING"),x&&(x.className="hud-inspector-body",x.textContent="# "+g.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(U=>{U.classList.toggle("is-selected",U.dataset.effectName===I.name)});try{let U=await b(`/admin/effects/${encodeURIComponent(I.name)}/content`),G=await U.json().catch(()=>({}));if(U.ok){let Y=G.content||"";x&&(x.className="hud-inspector-body has-param-panel",x.innerHTML=u(I,Y)),D&&(D.textContent=i(I.name))}else x&&(x.className="hud-inspector-body",x.textContent="# "+(G.error||g.t("effectLoadContentFailed"))),D&&(D.textContent="ERROR")}catch{x&&(x.className="hud-inspector-body",x.textContent="# "+g.t("effectsNetworkError")),D&&(D.textContent="NETWORK")}}}function k(){let I=document.getElementById("effectsInspectorReload"),B=document.getElementById("effectsInspectorEdit");I?.addEventListener("click",async()=>{if(!a.selected){y(g.t("fxSelectFirst"),!1);return}let H=a.all.find(D=>D.name===a.selected);H&&await v(H)}),B?.addEventListener("click",()=>{if(!a.selected){y(g.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(a.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",k())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:c}})()});var ze=me(()=>{(function(){"use strict";var b={};window.DanmuEvents={on:function(y,g){b[y]||(b[y]=[]),b[y].push(g)},off:function(y,g){b[y]=(b[y]||[]).filter(function(h){return h!==g})},emit:function(y,g){(b[y]||[]).forEach(function(h){h(g)})}}})()});var Ve=me(()=>{(function(){"use strict";let b="sec-events",y="/admin/audit?limit=200",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(F){return String(F).replace(/[&<>"']/g,function(O){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[O]})},_={events:[],filterSev:"all",filterCat:"all",timer:0};function z(F){let O=(F.source||F.kind||"").toLowerCase(),f=(F.action||"").toLowerCase();return O.includes("plugin")||f.includes("plugin")?"plugin":O.includes("webhook")||f.includes("webhook")?"webhook":O.includes("rate")||f.includes("rate")||f.includes("limit")?"rate":O.includes("filter")||f.includes("filter")?"filter":O.includes("overlay")||f.includes("overlay")||O==="broadcast"?"overlay":O.includes("backup")||f.includes("backup")?"backup":O.includes("msg")||O==="messaging"?"msg":O.includes("ws")||O==="websocket"?"ws":"system"}let S=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,A=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function m(F){let O=(F.action||F.kind||"").toLowerCase();return F.severity?F.severity:S.test(O)?"error":A.test(O)?"warn":"info"}function R(F){let O=F.source||"system",f=F.action||F.kind||"";return f?`${O.toUpperCase()}_${f.toUpperCase()}`:O.toUpperCase()}function L(F){if(!F)return"\u2014";let O=new Date(F*1e3),f=c=>String(c).padStart(2,"0");return`${f(O.getHours())}:${f(O.getMinutes())}:${f(O.getSeconds())}`}function $(F){if(F.message)return F.message;let O=F.meta||{},f=[];if(O.from&&O.to)f.push(`${O.from} \u2192 ${O.to}`);else if(O.text_preview)f.push(`"${O.text_preview.slice(0,60)}"`);else if(Object.keys(O).length){let c=Object.keys(O).slice(0,3);for(let i of c)f.push(`${i}=${JSON.stringify(O[i]).slice(0,30)}`)}return f.length?f.join(" \xB7 "):`${F.source||"system"}.${F.action||F.kind||"?"}`}function E(){return`
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
      </div>`}function P(){let F=document.querySelector("[data-ev-rows]");if(!F)return;let O=_.events,f=O.filter(a=>!(_.filterSev!=="all"&&m(a)!==_.filterSev||_.filterCat!=="all"&&z(a)!==_.filterCat));f.length===0?(F.innerHTML="",window.AdminEmpty?F.appendChild(window.AdminEmpty.render("events")):F.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):F.innerHTML=f.map(a=>{let o=m(a);return`
          <div class="admin-ev-v4__row" data-sev="${o}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${h(L(a.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${o}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${o}">${h(R(a))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${h(a.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${h($(a))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let c={all:O.length,info:0,warn:0,error:0};for(let a of O)c[m(a)]+=1;Object.keys(c).forEach(a=>{let o=document.querySelector(`[data-ev-cnt="${a}"]`);o&&(o.textContent=String(c[a]))});let i=document.querySelector("[data-ev-total]");i&&(i.textContent=`${f.length} / ${O.length}`)}async function N(){try{let F=await fetch(y,{credentials:"same-origin"});if(!F.ok)return;let O=await F.json();_.events=Array.isArray(O.events)?O.events:[],P()}catch{}}function T(){let F=document.getElementById(b);F&&F.addEventListener("click",O=>{let f=O.target.closest("[data-ev-sev]");if(f){F.querySelectorAll("[data-ev-sev]").forEach(a=>a.classList.toggle("is-active",a===f)),_.filterSev=f.dataset.evSev,P();return}let c=O.target.closest("[data-ev-cat]");if(c){F.querySelectorAll("[data-ev-cat]").forEach(a=>a.classList.toggle("is-active",a===c)),_.filterCat=c.dataset.evCat,P();return}let i=O.target.closest("[data-ev-action]");if(i){if(i.dataset.evAction==="refresh")N();else if(i.dataset.evAction==="export"){let a=new Blob([JSON.stringify(_.events,null,2)],{type:"application/json"}),o=URL.createObjectURL(a),s=document.createElement("a");s.href=o,s.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(o),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function C(){let F=document.querySelector(".admin-dash-grid"),O=document.getElementById(b);if(!O)return;let c=(F?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";O.style.display=c?"":"none",c?(N(),_.timer||(_.timer=setInterval(N,15e3))):_.timer&&(clearInterval(_.timer),_.timer=0)}function K(){let F=document.getElementById("settings-grid");!F||document.getElementById(b)||(F.insertAdjacentHTML("beforeend",E()),T(),C())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&K(),C()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",C),document.addEventListener("admin-panel-rendered",()=>{K(),C()}),K()})})()});var Je=me(()=>{(function(){"use strict";let b="sec-modqueue",y="/admin/modqueue/list",_=window.AdminUtils&&window.AdminUtils.escapeHtml||function(f){return String(f).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})},z={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},S={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},A={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function m(f){let c=0,i=String(f||"");for(let a=0;a<i.length;a++)c=c*31+i.charCodeAt(a)&65535;return c%360}function R(f){if(!f.created_at_ms)return null;let c=(Date.now()-f.created_at_ms)/1e3,i=Math.max(0,z.autoRejectSec-c);return Math.ceil(i)}function L(f,c){let i=(f.severity||"low").toLowerCase(),a=S[i]||S.low,o=m(f.fp),s=String(f.fp||"\u2014").slice(0,8),l=f.nick||f.nickname||ServerI18n.t("audienceAnonymous"),r=(l||"?").slice(0,2).toUpperCase(),t=c==="pending"?R(f):null,d=c==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${_(f.id||"")}">${_(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${_(f.id||"")}">${_(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${_(f.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",p=c==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${_(ServerI18n.t("modqueueStampApproved"))} \xB7 ${_(f.resolved_by||"admin")} \xB7 ${_(f.resolved_ago||"")}
        </div>`:c==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${f.auto_rejected?`${_(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${_(ServerI18n.t("modqueueAutoRejectTimeout",{n:z.autoRejectSec}))}`:`${_(ServerI18n.t("modqueueStampRejected"))} \xB7 ${_(f.resolved_by||"admin")} \xB7 ${_(f.resolved_ago||"")}`}
        </div>`:"",e=c==="pending"&&t!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${t}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${_(f.id||"")}" data-mq-sev="${_(i)}" style="--mq-sev:${a}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${o})">${_(r)}</span>
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
        ${p}
      </div>`}function $(f,c,i){f&&(f.innerHTML=c.map(a=>L(a,i)).join(""))}function E(){let f=document.getElementById(b);if(!f)return;f.querySelectorAll("[data-mq-bulk]").forEach(i=>{i.disabled=!0}),f.querySelector(".admin-mq__body").hidden=!0;let c=f.querySelector("[data-mq-empty]");c&&window.AdminEmpty&&(c.hidden=!1,c.innerHTML="",c.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function P(){let f=document.getElementById(b);if(!f)return;if(z.pending.length+z.approved.length+z.rejected.length===0){E();return}f.querySelector(".admin-mq__body").hidden=!1;let i=f.querySelector("[data-mq-empty]");i&&(i.hidden=!0),$(f.querySelector("[data-mq-col-pending]"),z.pending,"pending"),$(f.querySelector("[data-mq-col-approved]"),z.approved,"approved"),$(f.querySelector("[data-mq-col-rejected]"),z.rejected,"rejected");let a=(r,t)=>{f.querySelectorAll(r).forEach(d=>{d.textContent=String(t)})};a("[data-mq-cnt-pending]",z.pending.length),a("[data-mq-cnt-approved]",z.approved.length),a("[data-mq-cnt-rejected]",z.rejected.length);let o=z.pending.length===0;f.querySelectorAll("[data-mq-bulk]").forEach(r=>{r.disabled=o});let s=z.pending[z.pending.length-1],l=f.querySelector("[data-mq-oldest]");if(l){let r=s?R(s):null;l.textContent=r!=null?`oldest: ${r}s`:""}a("[data-mq-throughput]",z.stats.throughput.toFixed?z.stats.throughput.toFixed(1):z.stats.throughput),a("[data-mq-avg-review]",z.stats.avg_review_sec.toFixed?z.stats.avg_review_sec.toFixed(1):z.stats.avg_review_sec),a("[data-mq-auto-rate]",Math.round(z.stats.auto_reject_pct||0)+"%")}async function N(){try{let f=await fetch(y,{credentials:"same-origin"});if(!f.ok){z.pending=[],z.approved=[],z.rejected=[],P();return}let c=await f.json();z.pending=Array.isArray(c.pending)?c.pending:[],z.approved=Array.isArray(c.approved)?c.approved:[],z.rejected=Array.isArray(c.rejected)?c.rejected:[],z.stats=c.stats||z.stats,typeof c.auto_reject_sec=="number"&&(z.autoRejectSec=c.auto_reject_sec),P()}catch{}}async function T(f,c,i){if(window.csrfFetch)try{let a=await window.csrfFetch("/admin/modqueue/"+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:f,...i||{}})});if(a.ok)window.showToast&&window.showToast(c==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),N();else{let o=await a.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:o.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function C(){return`
      <div id="${b}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
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
      </div>`}function K(){let f=document.getElementById(b);f&&f.addEventListener("click",async c=>{let i=c.target.closest("[data-mq-action]");if(i){let o=i.dataset.mqId,s=i.dataset.mqAction;(s==="approve"||s==="reject")&&T(o,s);return}let a=c.target.closest("[data-mq-bulk]");if(a){let o=a.dataset.mqBulk,s=o==="approve-low";if(!await window.HudConfirm?.open({icon:s?"\u2713":"\u2298",title:s?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:s?"warn":"danger",body:s?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:s?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let r=o.startsWith("approve")?"approve":"reject",t=o.endsWith("low")?"low":"high";T(null,"bulk",{action:r,severity:t})}})}function F(){let f=document.querySelector(".admin-dash-grid"),c=document.getElementById(b);if(!c)return;let i=(location.hash||"").replace("#/","").split("/"),a=f?.dataset.activeRoute||i[0]||"",o=f?.dataset.activeLeaf||i[1]||"",s=a==="modqueue"||a==="moderation"&&(o==="queue"||o===""||o==="moderation");c.style.display=s?"":"none",s?(z.timer||(N(),z.timer=setInterval(N,4e3)),z.countdownTimer||(z.countdownTimer=setInterval(P,1e3))):(z.timer&&(clearInterval(z.timer),z.timer=0),z.countdownTimer&&(clearInterval(z.countdownTimer),z.countdownTimer=0))}function O(){let f=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!f||document.getElementById(b)||(f.insertAdjacentHTML("beforeend",C()),K(),F())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(b)&&O(),F()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",F),document.addEventListener("admin-panel-rendered",()=>{O(),F()}),O()})})()});var Ye=me(()=>{(function(){"use strict";let b="sec-modbans-overview",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(C){return String(C).replace(/[&<>"']/g,function(K){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[K]})},g=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],h={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},_={fingerprint:"FP",ip:"IP",nick:"NICK"},z={rows:[],refreshTimer:0};async function S(){try{let C=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!C.ok)return;let K=await C.json();z.rows=Array.isArray(K.bans)?K.bans:[],R()}catch{}}function A(C){if(!C||C<=0)return"\u2014";let K=Math.floor(C/86400),F=Math.floor(C%86400/3600),O=Math.floor(C%3600/60);return K>0?`${K}d ${F}h`:F>0?`${F}h ${O}m`:`${O}m`}function m(C){let K=C.target_kind;return K==="fingerprint"?`fp:${(C.target||"").slice(0,8)}`:K==="nick"?`@${C.target}`:C.target||"\u2014"}function R(){let C=document.querySelector("[data-modbans-list]");if(!C)return;let K=z.rows||[],F=document.querySelector("[data-modbans-count]");if(F&&(F.textContent=String(K.length)),K.length===0){C.innerHTML="";let O=window.AdminEmpty.render("blacklist");O.dataset.emptyKind="modbans",C.appendChild(O);return}C.innerHTML=K.map(function(O){let f=O.status==="expired",c=O.status==="permanent",i="admin-modbans-chip is-"+O.status,a=c?ServerI18n.t("modbansPermanent"):f?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:A(O.remaining_s)}),o=encodeURIComponent(O.target_kind)+"|"+encodeURIComponent(O.target);return`
        <div class="admin-modbans-row ${f?"is-expired":""}">
          <span class="admin-modbans-target">${y(m(O))}</span>
          <span class="admin-modbans-kind">${y(_[O.target_kind]||O.target_kind)}</span>
          <span class="admin-modbans-reason">${y(O.reason||"\u2014")}</span>
          <span class="${i}">
            ${O.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${y(a)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${o}"
            ${f?"disabled":""}
            title="${f?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${f?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function L(C){let K=C||{},F=K.kind||"ban",O=window.HudConfirm,f=!K.target,c=K.target_kind||"fingerprint",i=K.target||"";return new Promise(function(a){if(!O){a(!1);return}let o=86400,s=!1,l=12,r="hour",t=document.createElement("div");t.className="admin-modbans-modal-body",t.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${y(h[c]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${y(_[c]||"?")} ${y((F||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${y(i?m({target_kind:c,target:i}):"\u2014")}</div>
          </div>
        </div>
        ${f?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(q){return`<button type="button" class="admin-modbans-modal-preset${q===c?" is-active":""}"
                data-modbans-target-kind="${q}">${y(h[q])} ${y(_[q])}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let d=t.querySelector("[data-modbans-custom-row]"),p=t.querySelector("[data-modbans-custom-input]"),e=t.querySelector("[data-modbans-custom-seconds]"),n=t.querySelector("[data-modbans-when]"),u=t.querySelector("[data-modbans-custom]"),v=t.querySelector("[data-modbans-target]"),k=t.querySelector("[data-modbans-target-icon]"),w=t.querySelector("[data-modbans-target-label]"),I=t.querySelector("[data-modbans-target-val]"),B=function(){k.textContent=h[c]||"?",w.textContent=`${_[c]||"?"} ${(F||"ban").toUpperCase()}`,I.textContent=i?m({target_kind:c,target:i}):"\u2014"},H=function(){return Math.max(1,parseInt(p.value,10)||1)*(r==="day"?86400:3600)},D=function(){if(o===0){n.textContent=ServerI18n.t("modbansWhenPermanent"),n.classList.remove("is-custom");return}let q=new Date(Date.now()+o*1e3),V=W=>String(W).padStart(2,"0"),ne=`${q.getFullYear()}-${V(q.getMonth()+1)}-${V(q.getDate())} ${V(q.getHours())}:${V(q.getMinutes())}`;s?(n.textContent=ServerI18n.t("modbansWhenCustom",{n:l,unit:ServerI18n.t(r==="day"?"modbansDay":"modbansHour"),stamp:ne}),n.classList.add("is-custom")):(n.textContent=ServerI18n.t("modbansWhenPreset",{dur:A(o),stamp:ne}),n.classList.remove("is-custom"))},x=function(){let q=H();e.textContent=`= ${q.toLocaleString()}s`,s&&(l=Math.max(1,parseInt(p.value,10)||1),o=q,D())},U=t.querySelector("[data-modbans-presets]"),G=function(){s=!0,d.hidden=!1,U.querySelectorAll(".admin-modbans-modal-preset").forEach(function(q){q.classList.toggle("is-active",q===u)}),x()},Y=function(q){s=!1,d.hidden=!0,U.querySelectorAll(".admin-modbans-modal-preset").forEach(function(V){V.classList.toggle("is-active",V===q)})};B(),D(),x(),t.addEventListener("click",function(q){let V=q.target.closest("[data-modbans-target-kind]");if(V){c=V.dataset.modbansTargetKind,V.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(X){X.classList.toggle("is-active",X===V)}),B();return}if(q.target.closest("[data-modbans-custom]")){G();return}let ne=q.target.closest("[data-modbans-custom-unit]");if(ne){r=ne.dataset.modbansCustomUnit||"hour",t.querySelectorAll("[data-modbans-custom-unit]").forEach(function(X){X.classList.toggle("is-active",X===ne)}),x();return}let W=q.target.closest("[data-modbans-duration]");W&&(o=parseInt(W.dataset.modbansDuration,10)||0,Y(W),D())}),p.addEventListener("input",x),v&&v.addEventListener("input",function(){i=v.value.trim(),B()});let M=t.querySelector("[data-modbans-reason]");O.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:t,width:480}).then(function(q){if(!q){a(!1);return}if(!i){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),a(!1);return}o===0?O.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${y(m({target_kind:c,target:i}))}</b>`})}).then(function(V){if(!V){a(!1);return}$(c,i,o,M.value.trim(),F).then(a)}):$(c,i,o,M.value.trim(),F).then(a)})})}async function $(C,K,F,O,f){try{let c=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:C,target:K,duration_s:F,reason:O||"",kind:f||"ban"})});if(!c.ok)throw new Error(`HTTP ${c.status}`);return window.showToast&&window.showToast(F===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:A(F)}),!0),S(),!0}catch(c){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:c.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function E(C){let K=(C||"").split("|");if(K.length!==2)return;let F=decodeURIComponent(K[0]),O=decodeURIComponent(K[1]);try{let f=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:F,target:O})});if(!f.ok)throw new Error(`HTTP ${f.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),S()}catch(f){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:f.message||ServerI18n.t("modbansUnknownError")}),!1)}}function P(){return`
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
      </div>`}function N(){let C=document.getElementById(b);if(!C||C.dataset.modbansBound==="1")return;C.dataset.modbansBound="1",C.addEventListener("click",function(F){if(F.target.closest("[data-modbans-add]")){L({kind:"ban"});return}let O=F.target.closest("[data-modbans-unban]");O&&!O.disabled&&E(O.dataset.modbansUnban)});let K=C.querySelector("[data-modbans-list]");K&&window.AdminSkeletons&&!K.children.length&&K.appendChild(window.AdminSkeletons.listRows({rows:4}))}function T(){let C=document.getElementById("settings-grid");!C||document.getElementById(b)||(C.insertAdjacentHTML("beforeend",P()),N(),S(),z.refreshTimer||(z.refreshTimer=setInterval(S,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&T()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&T()}),window.ModBans={openPicker:L,refreshList:S,formatTarget:m,formatRemaining:A}})()});var Qe=me(()=>{(function(){"use strict";let b="admin-mobile-nav-root",y=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],g=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"backup",icon:"\u21EA",labelKey:"mnavBackup",descKey:"mnavDescBackup"},{route:"security",icon:"\u26BF",labelKey:"adminRouteTitle_security",descKey:"mnavDescSecurity"},{route:"integrations",icon:"\u232C",labelKey:"adminNavIntegrations",desc:"Slido \xB7 Discord \xB7 OBS"}],h=!1,_=0;function z(){return`
      <div id="${b}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
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
          ${y.map(P=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${P.id}" data-mn-route="${P.route||""}">
              <span class="admin-mobile-nav__icon">${P.icon}</span>
              <span class="admin-mobile-nav__label">${P.labelKey?ServerI18n.t(P.labelKey):P.label}</span>
              ${P.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${P.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </div>`}function S(){let P=(location.hash||"").replace("#/","").split("/")[0]||"";return y.some(N=>N.id===P)?P:g.some(N=>N.route===P)?"more":"live"}function A(){let P=document.getElementById(b);if(!P)return;let N=S();P.querySelectorAll("[data-mn-tab]").forEach(T=>{T.classList.toggle("is-active",T.dataset.mnTab===N)})}function m(P){let N=document.getElementById(b);N&&(h=P,N.dataset.overflow=P?"open":"closed",N.querySelector("[data-mn-overflow]").hidden=!P,N.querySelector("[data-mn-backdrop]").hidden=!P,N.querySelector("[data-mn-tab='more']")?.classList.toggle("is-active",P))}function R(P){if(P.target.closest("[data-mn-backdrop]")){m(!1);return}if(P.target.closest("[data-mn-logout]")){m(!1);let C=document.getElementById("logoutButton");C&&C.click();return}let N=P.target.closest("[data-mn-tab]");if(N){if(N.dataset.mnTab==="more"){m(!h);return}m(!1),N.dataset.mnRoute&&(location.hash="#/"+N.dataset.mnRoute);return}let T=P.target.closest("[data-mn-route]");T&&T.classList.contains("admin-mobile-nav__o-row")&&(m(!1),location.hash="#/"+T.dataset.mnRoute)}async function L(){try{let P=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!P.ok)return;let N=await P.json(),T=Array.isArray(N.pending)?N.pending.length:0;_=T;let C=document.querySelector("[data-mn-badge='pending']");if(!C)return;C.textContent=String(T),C.hidden=!(T>0)}catch{}}function $(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let P=0;function N(){let T=document.activeElement,C=T&&(T.tagName==="INPUT"||T.tagName==="TEXTAREA"||T.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!C)}document.addEventListener("focusin",()=>{cancelAnimationFrame(P),P=requestAnimationFrame(N)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(P),P=requestAnimationFrame(()=>setTimeout(N,50))})}function E(){document.getElementById(b)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",z()),document.addEventListener("click",R),window.addEventListener("hashchange",()=>{m(!1),A()}),A(),L(),setInterval(L,8e3),$())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",E):E()})()});var Xe=me(()=>{(function(){"use strict";var b="admin-session-expired-root",y=!1,g=null;function h(m,R){try{var L=window.ServerI18n&&ServerI18n.t(m);return L&&L!==m?L:R}catch{return R}}function _(){var m=document.getElementById(b);if(m&&m.remove(),document.body.classList.remove("is-session-expired"),y=!1,g&&g.focus)try{g.focus()}catch{}g=null}function z(m){if(m.key==="Tab"){var R=document.getElementById(b);if(R){var L=R.querySelectorAll("input, button");if(L.length){var $=L[0],E=L[L.length-1];m.shiftKey&&document.activeElement===$?(m.preventDefault(),E.focus()):!m.shiftKey&&document.activeElement===E&&(m.preventDefault(),$.focus())}}}}function S(){if(!(y||document.getElementById(b))){y=!0,g=document.activeElement,document.body.classList.add("is-session-expired");var m=document.createElement("div");m.id=b,m.className="admin-sx",m.setAttribute("role","alertdialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","admin-sx-title"),m.setAttribute("aria-describedby","admin-sx-body"),m.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+h("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+h("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+h("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+h("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+h("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+h("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(m),document.addEventListener("keydown",z,!0);var R=m.querySelector("#admin-sx-password");setTimeout(function(){try{R.focus()}catch{}},30),m.querySelector("[data-sx-form]").addEventListener("submit",function(L){L.preventDefault(),A(m,R)})}}function A(m,R){var L=m.querySelector("[data-sx-error]"),$=m.querySelector(".admin-sx__submit");L.hidden=!0,$.disabled=!0;var E=new URLSearchParams;E.set("password",R.value),m.querySelector("#admin-sx-remember").checked&&E.set("remember","1");var P=window.__adminRawFetch||window.fetch;P.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:E.toString()}).then(function(N){return N.json().then(function(T){return{status:N.status,data:T}},function(){return{status:N.status,data:{}}})}).then(function(N){if($.disabled=!1,N.status===200&&N.data&&N.data.ok){var T=document.querySelector('meta[name="csrf-token"]');T&&N.data.csrf_token&&(T.content=N.data.csrf_token),document.removeEventListener("keydown",z,!0),_(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(h("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}N.status===429?L.textContent=h("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):L.textContent=h("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),L.hidden=!1,R.select()}).catch(function(){$.disabled=!1,L.textContent=h("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),L.hidden=!1})}window.AdminSessionExpired={open:S,close:_,isOpen:function(){return y}}})()});var Ze=me(()=>{(function(){"use strict";let b="admin-reconnect-banner",_=0,z=0,S="ok",A=0,m=5e3,R=!1,L=0;function $(i){if(S!==i){if(S=i,i==="ok"||i==="dismissed"){P(),i==="ok"&&(_=0,z=0,m=5e3);return}E()}}function E(){let i=document.getElementById(b);i||(i=document.createElement("div"),i.id=b,i.className="admin-rcb",i.setAttribute("role","status"),i.setAttribute("aria-live","polite"),document.body.insertBefore(i,document.body.firstChild)),i.dataset.state=S;let a=S==="exhausted",o=a?"admin-rcb--crimson":"admin-rcb--amber";i.className=`admin-rcb ${o}`,i.innerHTML=a?T():N(),i.querySelector("[data-rcb-action='retry']")?.addEventListener("click",K),i.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>$("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",a),L||(L=setInterval(C,250))}function P(){let i=document.getElementById(b);i&&i.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),L&&(clearInterval(L),L=0)}function N(){let i=Math.max(0,(A-Date.now())/1e3),a=m/1e3,o=Math.min(100,(a-i)/a*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:z})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${o}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function T(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function C(){if(S!=="reconnecting")return;let i=document.getElementById(b);if(!i)return;let a=Math.max(0,(A-Date.now())/1e3),o=m/1e3,s=Math.min(100,(o-a)/o*100),l=i.querySelector(".admin-rcb__progress-fill");l&&(l.style.width=s+"%")}function K(){z=0,_=0,m=5e3,$("reconnecting"),F()}async function F(){try{let i=await fetch("/admin/bootstrap",{credentials:"same-origin"});i.ok?O():i.status===401||i.status===403?$("ok"):f()}catch{f()}}function O(){$("ok")}function f(){if(_+=1,z+=1,z>=10){$("exhausted");return}_>=3&&(m=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,z-1))),A=Date.now()+m,$("reconnecting"),setTimeout(F,m))}function c(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let i=window.csrfFetch,a=window.fetch;window.__adminRawFetch=a,document.addEventListener("admin:session-restored",()=>{R=!1,O()});async function o(s){try{let l=await s;return l&&l.ok?S!=="ok"&&S!=="dismissed"&&O():l&&l.status===401&&!R?(R=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):l&&l.status>=500&&f(),l}catch(l){throw f(),l}}typeof i=="function"&&(window.csrfFetch=function(){return o(i.apply(this,arguments))}),window.fetch=function(s,l){let r=typeof s=="string"?s:s&&s.url||"",t=a.call(this,s,l);return r.startsWith("/admin/")||r.indexOf("//")===-1&&r.startsWith("admin/")?o(t):t}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var et=me(()=>{(function(){"use strict";let b="admin-help-drawer-root",y={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},g=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],h=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function _(N){return N==null?"":String(N).replace(/[&<>"']/g,function(T){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[T]})}function z(){let N=(location.hash||"").replace("#/","").split("/")[0]||"";return y[N]?N:"_default"}function S(){return`
      <div id="${b}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function A(){let N=y[z()],T=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",C=N.titleKey?ServerI18n.t(N.titleKey):N.title,K=N.tipKeys.map(c=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${_(typeof c=="string"?ServerI18n.t(c):c.literal)}</span>
      </div>`).join(""),F=N.fieldTipKey?`
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
          <div class="admin-help__tips">${K}</div>
          ${F}
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
      </footer>`}function m(){let N=document.getElementById(b);N||(document.body.insertAdjacentHTML("beforeend",S()),N=document.getElementById(b),N.addEventListener("click",T=>{if(T.target.closest("[data-help-close]")){R();return}T.target.closest("[data-help-shortcuts]")&&(R(),window.AdminShortcuts&&window.AdminShortcuts.open())})),N.querySelector("[data-help-body]").innerHTML=A(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",$)}function R(){let N=document.getElementById(b);N&&N.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",$)}function L(){document.getElementById(b)?R():m()}function $(N){N.key==="Escape"&&(N.preventDefault(),R())}function E(N){let T=N.target;T&&(T.tagName==="INPUT"||T.tagName==="TEXTAREA"||T.isContentEditable)||N.key==="F1"&&(N.preventDefault(),L())}function P(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",E)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P(),window.AdminHelp={open:m,close:R,toggle:L}})()});var tt=me(()=>{(function(){"use strict";var b="admin-shortcuts-root",y=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function g(f,c){try{var i=window.ServerI18n&&ServerI18n.t(f);return i&&i!==f?i:c}catch{return c}}function h(f,c){window.showToast&&window.showToast(f,c!==!1)}function _(f,c){return(window.csrfFetch||window.fetch)(f,c||{})}function z(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}async function S(){var f=!1;try{var c=await fetch("/admin/broadcast/status",{credentials:"same-origin"});c.ok&&(f=(await c.json()).mode==="live")}catch{}try{var i=await _("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:f?"standby":"live"})});if(!i.ok)throw new Error("HTTP "+i.status);h(g(f?"ksToastDisplayOff":"ksToastDisplayOn",f?"\u5DF2\u95DC\u9589":"\u5DF2\u958B\u555F")),window.AdminDashboard&&window.AdminDashboard.refreshCockpitOverlay&&window.AdminDashboard.refreshCockpitOverlay()}catch{h(g("cmdkToastToggleFailed","\u5207\u63DB\u5931\u6557"),!1)}}async function A(){try{var f=await _("/admin/overlay/clear",{method:"POST"});if(!f.ok)throw new Error("HTTP "+f.status);h(g("toastCleared","\u5DF2\u6E05\u7A7A"))}catch{h(g("toastClearFailed","\u6E05\u7A7A\u5931\u6557"),!1)}}async function m(){var f="idle";try{var c=await fetch("/admin/poll/status",{credentials:"same-origin"});c.ok&&(f=(await c.json()).state||"idle")}catch{}if(f==="idle"){location.hash="#/polls",h(g("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var i=f==="active";try{var a=await _(i?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!a.ok)throw new Error("HTTP "+a.status);h(g(i?"ksToastPollEnded":"ksToastPollStarted",i?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{h(g("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function R(f){return y?f.metaKey:f.ctrlKey}var L=y?"\u2318":"Ctrl",$=[{group:"global",keys:[L,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(f){return R(f)&&(f.key==="k"||f.key==="K")},run:z},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(f){return f.key==="?"&&!R(f)&&!f.altKey||f.key==="/"&&R(f)},run:function(){K()}},{group:"global",keys:[L,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u5207\u63DB\u986F\u793A\u5C64",match:function(f){return R(f)&&f.shiftKey&&(f.key==="d"||f.key==="D")},run:S},{group:"global",keys:[L,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u5927\u87A2\u5E55",match:function(f){return R(f)&&f.shiftKey&&f.key==="Backspace"},run:A},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(f){return!R(f)&&"jkJK".indexOf(f.key)>=0},run:function(f){window.AdminLiveFeed.moveFocus(f.key==="j"||f.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(f){return!R(f)&&(f.key==="b"||f.key==="B")},run:function(f){window.AdminLiveFeed.blockFocused(f.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(f){return!R(f)&&f.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(f){return!R(f)&&(f.key==="p"||f.key==="P")},run:m}];function E(f){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(f):f==null?"":String(f).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}function P(f){return $.filter(function(c){return c.group===f}).map(function(c){var i=c.keys.map(function(a){return a==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+E(a)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+E(g(c.labelKey,c.fallback))+'</span><span class="admin-ks__keys">'+i+"</span></div>"}).join("")}function N(){var f=document.getElementById(b);f&&f.remove(),document.removeEventListener("keydown",T,!0)}function T(f){(f.key==="Escape"||f.key==="?")&&(f.preventDefault(),N())}function C(){if(!document.getElementById(b)){var f=document.createElement("div");f.id=b,f.className="admin-ks",f.setAttribute("role","dialog"),f.setAttribute("aria-modal","true"),f.setAttribute("aria-labelledby","admin-ks-title"),f.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+E(g("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+E(g("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+P("global")+'</div><div class="admin-ks__group-label">'+E(g("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+P("feed")+'</div><p class="admin-ks__note">'+E(g("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+E(g("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(f),f.addEventListener("click",function(i){i.target.closest("[data-ks-close]")&&N()}),document.addEventListener("keydown",T,!0);var c=f.querySelector(".admin-ks__close");c&&setTimeout(function(){try{c.focus()}catch{}},30)}}function K(){document.getElementById(b)?N():C()}function F(f){if(!f)return!1;if(f.isContentEditable)return!0;var c=(f.tagName||"").toLowerCase();return c==="input"||c==="textarea"||c==="select"}function O(){return!!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())}document.addEventListener("keydown",function(f){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var c=F(document.activeElement),i=0;i<$.length;i++){var a=$[i];if(a.group==="feed"){if(c||!O())continue}else if(c&&!R(f))continue;if(a.match(f)){f.preventDefault(),a.run(f);return}}}),window.AdminShortcuts={open:C,close:N,toggle:K,list:function(){return $.slice()}}})()});var nt=me(()=>{(function(){"use strict";let b="theme-mode",y="admin-theme-mode",g="admin-theme-toggle";(function(){try{if(localStorage.getItem(b)!=null)return;let E=localStorage.getItem(y);(E==="light"||E==="dark"||E==="auto")&&(localStorage.setItem(b,E),localStorage.removeItem(y))}catch{}})();function _(){try{let $=localStorage.getItem(b);if($==="light"||$==="dark"||$==="auto")return $}catch{}return"auto"}function z($){try{localStorage.setItem(b,$)}catch{}}function S($){let E=document.documentElement;$==="auto"?E.removeAttribute("data-theme"):E.setAttribute("data-theme",$),m($)}function A($){return $==="light"||$==="dark"?$:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function m($){let E=document.getElementById(g);if(!E)return;let P=A($);E.dataset.mode=$,E.dataset.effective=P,E.textContent=$==="auto"?"\u25D0":P==="light"?"\u2600":"\u263E",E.title=$==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:P==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):$==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function R(){let $=_(),E=$==="auto"?"light":$==="light"?"dark":"auto";z(E),S(E)}function L(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let $=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,E=document.getElementById(g);if(E){$&&E.classList.contains("admin-theme-toggle--floating")&&$.parentNode&&!$.parentNode.contains(E)&&(E.classList.remove("admin-theme-toggle--floating"),$.parentNode.insertBefore(E,$));return}let P=document.createElement("button");P.id=g,P.type="button",P.className="admin-theme-toggle",P.addEventListener("click",R),$&&$.parentNode?$.parentNode.insertBefore(P,$):(P.classList.add("admin-theme-toggle--floating"),document.body.appendChild(P)),m(_())}if(S(_()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{_()==="auto"&&m("auto")})}catch{}window.addEventListener("storage",$=>{$.key===b&&S(_())}),window.AdminThemeSwitcher={getMode:_,setMode:function($){$!=="auto"&&$!=="light"&&$!=="dark"||(z($),S($),m($),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:$}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{L(),new MutationObserver(L).observe(document.body,{childList:!0,subtree:!0})}):(L(),new MutationObserver(L).observe(document.body,{childList:!0,subtree:!0}))})()});var at=me(()=>{(function(){"use strict";var b={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},y=[];window.DanmuStore={get:function(g){return b[g]},set:function(g,h){b[g]=h,y.forEach(function(_){_(g,h)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+g,h)},subscribe:function(g){y.push(g)},getAll:function(){return Object.assign({},b)}}})()});var st=me(()=>{(function(){"use strict";let g=0;function h(){return window.__adminCtx||{}}function _(){let m=h();return typeof m.getSettings=="function"?m.getSettings()||{}:{}}function z(){let m=_();if(m&&typeof m.OpsContact<"u"){let R=m.OpsContact;if(Array.isArray(R))return R[3]||R[0]||null;if(typeof R=="string")return R}return null}function S(){let m=h().appContainer||document.getElementById("app-container");if(!m)return;let R=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";m.innerHTML=`
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
              <span data-i18n="adminLoginServerOnline">${ServerI18n.t("adminLoginServerOnline")}</span>${R?` \xB7 v${R}`:""}
            </span>
          </div>
        </div>
      </div>
    `;let L=m.querySelector("[data-login-reveal]");L&&L.addEventListener("click",()=>{let N=document.getElementById("password");if(!N)return;let T=N.type==="text";N.type=T?"password":"text",L.textContent=ServerI18n.t(T?"adminLoginReveal":"adminLoginHide");try{N.focus()}catch{}});let $=document.getElementById("loginForm"),E=document.getElementById("password"),P=document.getElementById("loginAttemptsHint");if($){try{let N=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(N)&&N>0){g=N;let T=Math.max(0,5-g);if(P&&g>0&&T>0){P.hidden=!1;let C=document.getElementById("password");C&&C.classList.add("is-error"),P.textContent=ServerI18n.t("loginAttemptsRemaining",{n:T})}}}catch{}$.addEventListener("submit",async N=>{if(N.preventDefault(),!E)return;let T=new URLSearchParams;T.set("password",E.value),document.getElementById("admin-login-remember")?.checked&&T.set("remember","1");try{let C=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:T.toString(),redirect:"manual"});if(C.status===429){let K=C.headers.get("Retry-After"),F=parseInt(K,10),O=Number.isFinite(F)&&F>0?F:300;A(O);return}g+=1;try{sessionStorage.setItem("admin_login_attempts",String(g))}catch{}window.location.reload()}catch(C){console.error("Login submit failed:",C),P&&(P.hidden=!1,P.textContent=ServerI18n.t("networkError"))}})}}function A(m){let R=document.getElementById("adminLoginCard");if(!R)return;let L=z(),$=L?`<a class="admin-lockout-contact" href="${L}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";R.classList.add("admin-lockout-card"),R.innerHTML=`
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
    `;let E=document.getElementById("lockoutCountdown"),P=m,N=C=>{let K=Math.floor(C/60),F=C%60;return`${String(K).padStart(2,"0")}:${String(F).padStart(2,"0")}`};E&&(E.textContent=N(P));let T=setInterval(()=>{P-=1,E&&(E.textContent=N(Math.max(0,P))),P<=0&&(clearInterval(T),g=0,S(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:S,renderLockout:A}})()});var it=me(()=>{(function(){"use strict";function b(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function y(t){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(t):String(t??"").replace(/[&<>"']/g,d=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[d])}async function g(){try{let t=b();await t.prime();let d=t.get("history_stats"),[p,e,n]=await Promise.all([d?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!e.ok)return;let u=d||(p&&p.ok?await p.json():null);if(!u)return;let v=(await e.json()).distribution||[],k=u.stats&&u.stats.total||0,w=v.reduce((G,Y)=>Y.count>(G?.count||-1)?Y:G,null),I=w?w.count:0,B=w?(w.hour||"").slice(-5):"\u2014",H=document.querySelector('[data-kpi="messages"]');H&&(H.querySelector("[data-kpi-value]").textContent=k.toLocaleString());let D=document.querySelector('[data-kpi="peak"]');D&&(D.querySelector("[data-kpi-value]").textContent=I.toLocaleString());let x=document.querySelector('[data-kpi="unique-fp"]');if(x){let G=new Set;(u.records||[]).forEach(Y=>{let M=Y.fingerprint||Y.fp||Y.user_fingerprint;M&&G.add(M)}),x.querySelector("[data-kpi-value]").textContent=G.size.toLocaleString()}let U=document.querySelector('[data-kpi="session"]');if(U){let G=n&&n.ok?await n.json():null,Y=G&&G.status==="live",M=U.querySelector("[data-kpi-value]");if(Y&&G.started_at){let q=Math.max(0,Math.floor(Date.now()/1e3-G.started_at)),V=Math.floor(q/3600),ne=Math.floor(q%3600/60);M.textContent=V>0?`${V}:${String(ne).padStart(2,"0")}:${String(q%60).padStart(2,"0")}`:`${ne}:${String(q%60).padStart(2,"0")}`}else M.textContent="\u2014"}}catch{}}function h(t,d){let p=document.querySelector(t);if(p){if(typeof d!="number"||d<=0){p.hidden=!0;return}p.hidden=!1,p.textContent=d>999?"999+":String(d)}}async function _(){try{let t=b();await t.prime();let d=t.get("blacklist"),p=t.get("widgets"),e=t.get("history_stats"),n=t.get("effects"),u=t.get("themes");h("[data-count-blacklist]",Array.isArray(d)?d.length:0),h("[data-count-widgets]",Array.isArray(p?.widgets)?p.widgets.length:0),h("[data-count-messages]",e?.stats?.last_24h||0),h("[data-count-effects]",Array.isArray(n?.effects)?n.effects.length:0),h("[data-count-themes]",Array.isArray(u?.themes)?u.themes.length:0);try{let v=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(v.ok){let k=await v.json();h("[data-count-plugins]",Array.isArray(k?.plugins)?k.plugins.length:0)}}catch{}}catch{}}async function z(){_(),S(),l()}async function S(){let t=document.querySelector("[data-dash-poll-body]"),d=document.querySelector("[data-dash-poll-timer]");if(t)try{let p=b();await p.prime();let n=p.get("metrics");if(!n){let I=await fetch("/admin/metrics",{credentials:"same-origin"});if(!I.ok)return;n=await I.json()}let u=n.poll_state;if(!u||!u.active||!Array.isArray(u.options)||u.options.length===0){t.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,d&&(d.textContent="");return}let v=u.options.reduce((I,B)=>I+(B.votes||0),0),k=["A","B","C","D","E","F"],w=0;if(u.options.forEach((I,B)=>{(I.votes||0)>(u.options[w].votes||0)&&(w=B)}),t.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${y(u.question||ServerI18n.t("dashPollRunning"))}</div>`+u.options.map((I,B)=>{let H=v?Math.round(I.votes/v*100):0;return`
            <div class="admin-dash-poll-opt ${B===w&&v>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${k[B]||String(B+1)}</span>
                <span class="label">${y(I.label||"")}</span>
                <span class="pct">${H}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:I.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${H}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:v})}</div>`,d){let I=u.remaining_seconds;d.textContent=typeof I=="number"&&I>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(I/60),ss:String(I%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function A(t){t.dataset.actionsBound!=="1"&&(t.dataset.actionsBound="1",t.addEventListener("click",async d=>{let p=d.target.closest("[data-msg-action]");if(!p)return;let e=p.closest(".admin-dash-msg-row");if(!e)return;let n=p.dataset.msgAction,u=e.dataset.msgFp,v=e.dataset.msgId;if(n==="blacklist"){if(!u){window.showToast&&window.showToast(ServerI18n.t("dashToastNoFp"),!1);return}if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("dashBlacklistTitle"),subtitle:ServerI18n.t("cfmSubBlacklistFp"),severity:"danger",body:ServerI18n.t("dashBlacklistBody")+`<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:${y(u)}</div>`,confirmLabel:ServerI18n.t("dashBlacklistTitle")}))return;try{let w=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:`fp:${u}`})});if(!w.ok)throw new Error("HTTP "+w.status);window.showToast&&window.showToast(ServerI18n.t("dashToastBlacklistedFp",{fp:u}),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastBlacklistFailed"),!1)}}else if(n==="mask"||n==="hide")e.classList.add("is-masked-row"),window.showToast&&window.showToast(n==="mask"?ServerI18n.t("dashToastMasked"):ServerI18n.t("dashToastHidden"),!0);else if(n==="more"){let k=document.querySelector('[data-route="live"]');k&&k.click()}}))}function m(t){let d=t.visible!==!1,p=t.config&&t.config.title||t.type||"widget",e=(t.type||"widget").toUpperCase(),n=(t.position||"\u2014").toUpperCase(),u=d?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",v=t.created_at&&d?Math.max(0,Math.floor(Date.now()/1e3-t.created_at)):null,k=v!=null?(()=>{let w=Math.floor(v/86400),I=Math.floor(v%86400/3600),B=Math.floor(v%3600/60),H=v%60;return w>0?`UPTIME \xB7 ${w}d ${String(I).padStart(2,"0")}h`:I>0?`UPTIME \xB7 ${I}:${String(B).padStart(2,"0")}:${String(H).padStart(2,"0")}`:`UPTIME \xB7 ${B}:${String(H).padStart(2,"0")}`})():`STATUS \xB7 ${d?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${y(t.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${u}"></span>
          <span class="kind">${y(e)}</span>
          <span class="cat">${y(n)}</span>
        </div>
        <div class="title">${y(p)}</div>
        <div class="uptime">${k}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${d?" is-active":""}" data-widget-action="toggle" data-running="${d?"1":"0"}">${d?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function R(t,d){try{let p=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:t,config:{visible:!d}})});if(!p.ok)throw new Error("HTTP "+p.status);$()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function L(t){t.dataset.bound!=="1"&&(t.dataset.bound="1",t.addEventListener("click",d=>{let p=d.target.closest(".admin-dash-widget-tile");if(!p)return;let e=d.target.dataset.widgetAction,n=p.dataset.widgetId;if(!(!e||!n)){if(e==="toggle")R(n,d.target.dataset.running==="1");else if(e==="config"){let u=document.querySelector('[data-route="widgets"]');u&&u.click()}}}))}async function $(){let t=document.querySelector("[data-dash-widgets]");if(t)try{let d=b();await d.prime();let p=d.get("widgets");if(!p){let n=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!n.ok){t.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}p=await n.json()}let e=(p.widgets||p.items||[]).slice(0,4);if(e.length===0){t.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}t.innerHTML='<div class="admin-dash-widget-grid">'+e.map(m).join("")+"</div>",L(t)}catch{t.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let E=null,P=null,N=null;function T(t){let d=Math.max(0,Math.floor(Date.now()/1e3-t)),p=Math.floor(d/3600),e=Math.floor(d%3600/60),n=d%60;return p>0?`${p}:${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function C(t){let d=document.getElementById("admin-session-banner"),p=document.getElementById("sec-live-feed");if(p&&p.classList.toggle("is-idle-collapsed",!(t&&t.status==="live")),d&&d.classList.toggle("is-hero",!(t&&t.status==="live")),!d)return;if(E=t,!(t&&t.status==="live"))d.hidden=!1,d.innerHTML=`
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
            <span class="admin-session-live-name">${y(t.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
        </div>`,K(n)}d.dataset.bound||(d.dataset.bound="1",d.addEventListener("click",O))}function K(t){N&&clearInterval(N);let d=()=>{let p=document.querySelector("[data-sess-timer]");p&&(p.textContent=T(t))};d(),N=setInterval(d,1e3)}function F(){N&&(clearInterval(N),N=null)}async function O(t){let d=t.target.closest("[data-sess-action]");if(!d)return;let p=d.dataset.sessAction;if(p==="open"){let e=document.querySelector("[data-sess-name]"),n=(e?e.value:"").trim();if(!n){e&&e.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}d.disabled=!0;try{let u=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n})}),v=await u.json();if(!u.ok){window.showToast&&window.showToast(v.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:n}),!0),C(v.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{d.disabled=!1}}else if(p==="close"){let e=d.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",n=(k,w)=>`<option value="${k}"${k===e?" selected":""}>${w}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
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
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;d.disabled=!0;let v=document.getElementById("sessCloseBehavior")?.value;if(v&&v!==e)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:v})})}catch{}try{let k=await window.csrfFetch("/admin/session/close",{method:"POST"}),w=await k.json();if(!k.ok){window.showToast&&window.showToast(w.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),F(),C({status:"idle",viewer_end_behavior:w.archived&&w.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{d.disabled=!1}}}async function f(){try{let t=await fetch("/admin/session/current",{credentials:"same-origin"});if(!t.ok)return;let d=await t.json();C(d)}catch{}}function c(){f(),P&&clearInterval(P),P=setInterval(f,1e4)}function i(){P&&(clearInterval(P),P=null),F()}let a=null;async function o(){let t=document.querySelector("[data-cockpit-overlay]");if(!t||t.offsetParent===null)return;let d=0,p=!1;try{let k=await fetch("/overlay_status",{credentials:"same-origin"});k.ok&&(d=(await k.json()).overlay_count||0)}catch{}try{let k=await fetch("/admin/broadcast/status",{credentials:"same-origin"});k.ok&&(p=(await k.json()).mode==="live")}catch{}let e=d>0&&p;t.classList.toggle("is-on",e);let n=t.querySelector("[data-cockpit-status]");n&&(n.textContent=e?ServerI18n.t("adminCockpitOn",{n:d}):ServerI18n.t("adminCockpitOff"));let u=t.querySelector('[data-cockpit-action="toggle"]');u&&(u.textContent=ServerI18n.t(e?"adminCockpitTurnOff":"adminCockpitTurnOn"),u.classList.toggle("is-danger",e),u.classList.toggle("is-primary",!e),u.dataset.next=e?"standby":"live");let v=t.querySelector('[data-cockpit-action="clear"]');v&&(v.disabled=d===0)}function s(){let t=document.querySelector("[data-cockpit-overlay]");if(!t||t.dataset.bound)return;t.dataset.bound="1",t.addEventListener("click",async e=>{let n=e.target.closest("[data-cockpit-action]");if(!n)return;let u=n.dataset.cockpitAction;if(u==="clear"){try{let v=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(ServerI18n.t("toastCleared"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("toastClearFailed"),!1)}return}if(u==="toggle"){try{let v=await window.csrfFetch("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:n.dataset.next||"standby"})});if(!v.ok)throw new Error("HTTP "+v.status)}catch{window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:""}),!1)}o()}});let d=t.parentElement&&t.parentElement.querySelector('[data-cockpit-action="idle-qr"]');d&&d.addEventListener("click",()=>{location.hash="#/overlay"});let p=t.parentElement&&t.parentElement.querySelector('[data-cockpit-action="poll"]');p&&p.addEventListener("click",()=>{location.hash="#/polls"})}function l(){s(),o(),a&&clearInterval(a),a=setInterval(o,5e3)}function r(){a&&(clearInterval(a),a=null)}window.AdminDashboard={refreshKpi:g,refreshSummary:z,refreshSidebarBadges:_,populatePoll:S,populateWidgets:$,refreshSessionBanner:f,startSessionPolling:c,stopSessionPolling:i,refreshCockpitOverlay:o,startCockpitPolling:l,stopCockpitPolling:r}})()});var ot=me(()=>{(function(){"use strict";let b="sec-viewer-config-defaults",y=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(j){return String(j).replace(/[&<>"']/g,function(J){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[J]})},_={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}},z=[14,20,32,44,64],S=window.DANMU_CONFIG?.defaultColorPalette||[],A=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function m(j,J){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let Z=window.ServerI18n.t(j,J);if(Z&&Z!==j)return Z}return j}let R={};function L(j){if(R[j]!=null)return R[j];let J=_[j];return J?J.step:1}function $(j,J){R[j]=Number(J)||L(j)}let E={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",palettePreview:null,paletteNotice:null},P=["Color","FontFamily","Layout"];function N(j){return P.indexOf(j)!==-1}function T(j){let J=E.options&&E.options[j],Z=J&&J[1];return Array.isArray(Z)?Z.slice():[]}function C(j){return j==="Color"?S.map(J=>J.replace(/^#/,"").toUpperCase()):j==="Layout"?A.map(J=>J.value):j==="FontFamily"?(E.fonts&&E.fonts.length?E.fonts:["NotoSansTC","Inter"]).map(Z=>typeof Z=="string"?Z:Z.name||Z.family||"").filter(Boolean):[]}function K(j,J){return j==="Color"?String(J||"").replace(/^#/,"").toUpperCase():String(J||"")}function F(){return`
      <div id="${b}" class="admin-dsp2-page hud-page-stack lg:col-span-2" data-tpl="C">
        <!-- \u6A19\u984C\uFF0F\u8AAA\u660E\u5169\u5957\u4E26\u5B58\uFF0C\u7531 data-dsp-mode \u6C7A\u5B9A\u9732\u54EA\u4E00\u5957\uFF08CSS \u5728 style.css\uFF09\u3002
             \u540C\u4E00\u4EFD\u9762\u677F\u670D\u52D9\u986F\u793A\u5C64\u8207\u89C0\u773E\u9801\u5169\u689D\u8DEF\u7531\uFF0C\u6587\u6848\u4E0D\u80FD\u53EA\u5BEB\u4E00\u7A2E\u3002 -->
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title" data-dsp-only="values">${h(m("displayValuesTitle"))}</h2>
          <p class="admin-ui-page-note" data-dsp-only="values">${m("displayValuesNote")}</p>
          <h2 class="admin-ui-page-title" data-dsp-only="audience">${h(m("viewerGroupAudience"))}</h2>
          <p class="admin-ui-page-note" data-dsp-only="audience">${m("displayViewerDefaultsNote")}</p>
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
      </div>`}let O=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:j=>`${Math.round(j)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:j=>`${j}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:j=>`${(+j).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:j=>`#${String(j||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:j=>j||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:j=>f(j),noRange:!0}];function f(j){let J=A.find(Z=>Z.value===j);return J?m(J.labelKey):j||"\u2014"}function c(j,J){let Z=J[0]!==!1,te=J[3],oe=_[j.key];if(j.key==="Opacity"||j.key==="Speed"){let re=oe,le=te!=null?Number(te):re.min,ge=isFinite(le)?le:re.min,fe=(ge-re.min)/Math.max(1e-6,re.max-re.min)*100;return`
        <div class="admin-dsp2-track" data-track="${j.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${j.key}" data-num-index="3"
            min="${re.min}" max="${re.max}" step="${L(j.key)}" value="${h(String(ge))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${fe.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${fe.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${j.key}"
              min="${re.min}" max="${re.max}" step="${L(j.key)}" value="${h(String(ge))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${re.min}${re.unit}</span><span>${re.max}${re.unit}</span>
            </div>
          </div>
        </div>`}if(j.key==="FontSize"){let re=Number(te);return`
        <div class="admin-dsp2-chiprow">
          ${z.map(le=>`<button type="button" class="admin-dsp2-fchip ${re===le?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${le}">${le}</button>`).join("")}
        </div>`}if(j.key==="Color"){let re="#"+String(te||"FFFFFF").replace(/^#/,"").toUpperCase();return`
        <div class="admin-dsp2-swatches">
          ${r().map(le=>{let ge=le.slice(1),fe=le.toUpperCase()===re;return`<button type="button" class="admin-dsp2-swatch ${fe?"is-active":""}"
              data-chip-key="Color" data-chip-value="${ge}"
              style="background:${le}" aria-label="${le}" aria-pressed="${fe}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${h(m("specificColor"))}">
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${h(re)}" />
          </label>
        </div>
      `}if(j.key==="FontFamily"){let re=(E.fonts&&E.fonts.length?E.fonts:["NotoSansTC","Inter"]).map(be=>{let ke=typeof be=="string"?be:be.name||be.family||"",Ee=typeof be=="string"?be:be.label||be.name||be.family||"";return{value:ke,label:Ee}}).filter(be=>be.value),le=String(te||""),ge=!!E.allowlistEdit.FontFamily,fe=ge?E.allowlistEdit.FontFamily:new Set(T("FontFamily").map(be=>K("FontFamily",be))),he=!ge&&fe.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${re.map(be=>{let ke=be.value===le,Ee=ge?fe.has(be.value):he||fe.has(be.value),Te=["admin-dsp2-tchip",ke?"is-active":"",ge?"is-editing":"",Ee?"":"is-blocked"].filter(Boolean).join(" "),$e=ge?`data-allow-key="FontFamily" data-allow-value="${h(be.value)}"`:`data-chip-key="FontFamily" data-chip-value="${h(be.value)}"`;return`<button type="button" class="${Te}" ${$e}
              aria-pressed="${Ee?"true":"false"}">
              ${ge?`<span class="admin-dsp2-allow-mark">${Ee?"\u2713 ":""}</span>`:""}${h(be.label)}
            </button>`}).join("")}
        </div>
        ${i(j)}
      `}if(j.key==="Layout"){let re=String(te||"scroll"),le=!!E.allowlistEdit.Layout,ge=le?E.allowlistEdit.Layout:new Set(T("Layout").map(he=>K("Layout",he))),fe=!le&&ge.size===0;return`
        <div class="admin-dsp2-tiles">
          ${A.map(he=>{let be=he.value===re,ke=le?ge.has(he.value):fe||ge.has(he.value),Ee=["admin-dsp2-tile",be?"is-active":"",le?"is-editing":"",ke?"":"is-blocked"].filter(Boolean).join(" "),Te=le?`data-allow-key="Layout" data-allow-value="${he.value}"`:`data-chip-key="Layout" data-chip-value="${he.value}"`;return`<button type="button" class="${Ee}" ${Te}
              aria-pressed="${ke?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${he.icon}</span>
              <span class="admin-dsp2-tile-label">${m(he.labelKey)}</span>
              ${le?`<span class="admin-dsp2-allow-mark">${ke?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${i(j)}
      `}return""}function i(j){if(!N(j.key))return"";let J=!!E.allowlistEdit[j.key],Z=T(j.key),te=C(j.key).length||0,oe=Z.length>0?m("displayAllowSummaryPartial",{n:Z.length,total:te,label:a(j.key)}):m("displayAllowSummaryAll",{total:te});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${j.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${j.key}">${h(oe)}</span>
        ${J?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${j.key}">${h(m("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${j.key}">${h(m("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${j.key}">${h(m("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${j.key}" title="${h(m("displayEditAllowlistTitle"))}">[${h(m("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function a(j){return m(j==="Color"?"displayLabelColor":j==="FontFamily"?"displayLabelFontFamily":j==="Layout"?"displayLabelLayout":"displayLabelOption")}function o(j,J){if(j.noRange||!(J[0]!==!1))return"";let te=_[j.key],oe=J[1]!=null?J[1]:te.min,re=J[2]!=null?J[2]:te.max,le=L(j.key);return`
      <div class="admin-dsp2-band">
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${h(m("displayMinAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${j.key}" data-num-index="1"
              min="${te.min}" max="${te.max}" step="${le}" value="${h(String(oe))}" />
            ${te.unit?`<span>${te.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${h(m("displayMaxAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${j.key}" data-num-index="2"
              min="${te.min}" max="${te.max}" step="${le}" value="${h(String(re))}" />
            ${te.unit?`<span>${te.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlStep")}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${j.key}" data-num-index="step"
              min="0.1" step="0.1" value="${h(String(le))}" />
            ${te.unit?`<span>${te.unit}</span>`:""}
          </div>
        </div>
      </div>`}function s(j,J){let Z=J[0]!==!1,te=J[3],oe=j.fmt?j.fmt(te):te!=null?String(te):"\u2014",re=j.key==="Layout";return`
      <div class="admin-dsp2-row ${Z?"is-on":"is-off"} ${re?"is-last":""}" data-row-key="${j.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${h(m(j.labelKey))}</div>
          <div class="admin-dsp2-value-badge ${Z?"is-on":""}" data-value-badge>${h(oe)}</div>
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
            ${h(m(Z?"displayHintAudienceOn":"displayHintAudienceOff"))}
          </div>
          <div class="admin-dsp2-picker" data-picker-host>${c(j,J)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${o(j,J)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">
          <button type="button" class="admin-dsp2-pill ${Z?"is-on":""}"
            data-toggle-key="${j.key}" aria-pressed="${Z?"true":"false"}">
            <span class="admin-dsp2-pill-track"><span class="admin-dsp2-pill-thumb"></span></span>
            <span class="admin-dsp2-pill-label">${h(m(Z?"displayCustomizable":"displayLocked"))}</span>
          </button>
          <div class="admin-dsp2-toggle-hint">
            ${h(Z?m("displayToggleHintOn"):j.noRange?m("displayToggleHintOffPick"):m("displayToggleHintOffSlider"))}
          </div>
        </div>
      </div>`}function l(){let j=document.getElementById("dsp2-rows");if(j){if(!E.options){j.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):h(m("loading"))}`;return}j.innerHTML=O.map(J=>s(J,E.options[J.key]||[!1,"","",""])).join(""),e(),v(),k()}}function r(){let j=T("Color");return[...new Set((j.length?j:S).map(J=>"#"+String(J).replace(/^#/,"").toUpperCase()).filter(J=>/^#[0-9A-F]{6}$/.test(J)))]}function t(j){let J=j.slice(1).match(/.{2}/g).map(Z=>{let te=parseInt(Z,16)/255;return te<=.04045?te/12.92:((te+.055)/1.055)**2.4});return J[0]*.2126+J[1]*.7152+J[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function d(j,J="error"){E.paletteNotice={message:j,type:J};let Z=document.querySelector("[data-palette-feedback]");Z&&(Z.textContent=j,Z.classList.toggle("is-error",J==="error"))}function p(j,J=!0){let Z=document.querySelector("[data-admin-color-palette]"),te=Z?.querySelector("[data-palette-preview-text]");!te||!/^#[0-9A-F]{6}$/i.test(j)||(E.palettePreview=j.toUpperCase(),te.style.color=j,Z.querySelector("[data-palette-preview-code]").textContent=j.toUpperCase(),Z.querySelectorAll("[data-palette-preview]").forEach(oe=>{let re=oe.dataset.palettePreview===j.toUpperCase();oe.setAttribute("aria-pressed",String(re)),oe.closest(".admin-color-palette-chip").classList.toggle("is-previewing",re)}),J&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(te.getAnimations().forEach(oe=>oe.cancel()),te.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function e(){let j=document.querySelector("[data-admin-color-palette]");if(!j||!E.options)return;let J=r(),Z=(E.options.ViewerColorPicker||[!0])[0]!==!1,te=E.paletteBusy?"disabled":"",oe=E.palettePreview||J[0],re=h(E.paletteDraft),le=E.paletteNotice;j.setAttribute("aria-busy",String(E.paletteBusy)),j.innerHTML=`
      <div class="admin-color-palette-head">
        <div>
          <span class="admin-color-palette-eyebrow">${h(m("viewerPaletteEyebrow"))}</span>
          <h3 class="admin-color-palette-title">${h(m("viewerPaletteTitle"))}</h3>
          <p class="admin-color-palette-note">${h(m("viewerPaletteHint"))}</p>
        </div>
        <span class="admin-color-palette-count"><strong data-palette-count>${J.length}</strong><span>${h(m("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${J.map((ge,fe)=>`<div class="admin-color-palette-chip" style="--palette-color:${ge};--palette-ink:${t(ge)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${ge}"
                aria-label="${h(m("viewerPalettePreviewColor",{color:ge}))}" aria-pressed="${ge===oe}" ${te}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(fe+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${ge}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${ge}" ${J.length<=1?"disabled":te}
                aria-label="${h(m("viewerPaletteRemove",{color:ge}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${h(m("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${h(m("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(E.paletteDraft)?re:"#38bdf8"}" data-palette-picker ${te} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${re}"
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${te} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${J.length>=64?"disabled":te}>
                <span aria-hidden="true">\uFF0B</span> ${h(m("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${h(m(J.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${le?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${le?h(le.message):""}</p>
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
              <input type="checkbox" data-viewer-color-picker ${Z?"checked":""} ${te} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${h(m("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,p(oe,!1)}async function n(j,J){if(E.paletteBusy)return;let Z=document.querySelector("[data-admin-color-palette]");E.paletteBusy=!0,Z.setAttribute("aria-busy","true"),Z.querySelector("[data-palette-sync-status]").textContent=m("viewerPaletteSaving"),Z.querySelectorAll("input, button").forEach(re=>{re.disabled=!0});let te=await B("Color",j);E.paletteBusy=!1,E.paletteNotice={type:te?"success":"error",message:m(te?"viewerPaletteSaved":"updateFailed")},te&&J&&(E.palettePreview=J),e(),(J&&te?Z.querySelector(`[data-palette-preview="${J}"]`):Z.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function u(j,J){let Z=E.options&&E.options[j];return Z&&Z[3]!=null?Z[3]:J}function v(){let j=document.querySelector("[data-preview-stage]"),J=document.querySelector("[data-preview-pill='1']"),Z=document.querySelector("[data-preview-pill='2']"),te=document.querySelector("[data-preview-foot-l]"),oe=document.querySelector("[data-preview-foot-r]");if(!j||!J||!Z||!E.options)return;let re=Number(u("FontSize",32)),le=Number(u("Opacity",92)),ge=Number(u("Speed",1)),fe="#"+String(u("Color","7DD3FC")).replace(/^#/,""),he=String(u("FontFamily","NotoSansTC")),be=String(u("Layout","scroll")),ke=Math.min(re,36),Ee=Math.max(0,Math.min(100,le))/100;J.style.fontSize=ke+"px",J.style.color=fe,J.style.opacity=Ee.toFixed(2),J.style.fontFamily=he+", system-ui, sans-serif",J.style.textShadow=`0 0 14px ${fe}66`,Z.style.fontSize=(ke*.78).toFixed(0)+"px",Z.style.opacity=(Ee*.9).toFixed(2),Z.style.fontFamily=he+", system-ui, sans-serif",j.dataset.layout=be,te&&(te.textContent=`${f(be)} \xB7 ${re}px \xB7 ${(+ge).toFixed(1)}\xD7`),oe&&(oe.textContent=m("displayOpacitySuffix",{n:Math.round(le)}))}function k(){let j=document.querySelector("[data-summary-list]"),J=document.querySelector("[data-summary-count]");if(!j||!E.options)return;let Z=O.filter(te=>(E.options[te.key]||[])[0]).length;J&&(J.textContent=`AUDIENCE \xB7 ${Z}/6 OPEN`),j.innerHTML=O.map(te=>{let oe=!!(E.options[te.key]||[])[0];return`<div class="admin-dsp2-srow ${oe?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${h(m(te.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${h(m(oe?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function w(j,J){try{let Z=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:j,enabled:!!J})});if(!Z.ok)throw new Error("toggle "+Z.status);Array.isArray(E.options[j])||(E.options[j]=[!1,"","",""]),E.options[j][0]=!!J,l(),j==="ViewerColorPicker"&&document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0});let te=j==="ViewerColorPicker"?m("viewerPaletteAllowPicker"):j;window.showToast&&window.showToast(`${te} ${m("settingsUpdated")}`,!0)}catch(Z){console.warn("[admin-display] toggle failed:",Z),window.showToast&&window.showToast(m("updateFailed"),!1),await D(),l()}}async function I(j,J,Z){try{let te=Z;if(j==="Color"){let re=String(te).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(re)){window.showToast&&window.showToast(m("colorFormatError"),!1);return}te=re.toUpperCase()}else if(j==="Opacity"||j==="FontSize"||j==="Speed"){te=j==="Speed"?parseFloat(te):parseInt(te,10);let re=_[j];if(Number.isNaN(te)||re&&(te<re.min||te>re.max)){window.showToast&&window.showToast(`${j} ${re.min}\u2013${re.max}`,!1);return}}let oe=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:j,value:te,index:J})});if(!oe.ok)throw new Error("update "+oe.status);Array.isArray(E.options[j])||(E.options[j]=[!1,"","",""]),E.options[j][J]=te,H(j),v(),k()}catch(te){console.warn("[admin-display] update failed:",te),window.showToast&&window.showToast(m("updateFailed"),!1)}}async function B(j,J){try{let Z=await window.csrfFetch(`/admin/options/${encodeURIComponent(j)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:J})});if(!Z.ok)throw new Error("allowlist "+Z.status);let te=await Z.json().catch(()=>({}));te&&Array.isArray(te.option)?E.options[j]=te.option:Array.isArray(E.options[j])&&(E.options[j][1]=J.slice()),H(j),v(),k();let oe=C(j).length||0,re=j==="Color"?m("settingsUpdated"):J.length>0?m("displayAllowlistToastPartial",{key:j,n:J.length,total:oe}):m("displayAllowlistToastAll",{key:j});return j!=="Color"&&window.showToast&&window.showToast(re,!0),!0}catch(Z){return console.warn("[admin-display] allowlist failed:",Z),j!=="Color"&&window.showToast&&window.showToast(m("updateFailed"),!1),!1}}function H(j){let J=document.querySelector(`[data-row-key="${j}"]`);if(!J||!E.options)return;let Z=O.find(le=>le.key===j);if(!Z)return;let te=E.options[j]||[!1,"","",""],oe=te[3],re=J.querySelector("[data-value-badge]");if(re&&(re.textContent=Z.fmt?Z.fmt(oe):oe!=null?String(oe):"\u2014"),N(j)){let le=J.querySelector("[data-picker-host]");le&&(le.innerHTML=c(Z,te));return}if((j==="FontSize"||j==="Color"||j==="FontFamily"||j==="Layout")&&J.querySelectorAll(`[data-chip-key="${j}"]`).forEach(le=>{let ge=le.getAttribute("data-chip-value"),fe=j==="Color"?String(oe||"").replace(/^#/,"").toUpperCase():String(oe??"");le.classList.toggle("is-active",String(ge)===fe)}),j==="Opacity"||j==="Speed"){let le=_[j],ge=Number(oe??le.min),fe=(ge-le.min)/Math.max(1e-6,le.max-le.min)*100,he=J.querySelector(".admin-dsp2-slider-fill"),be=J.querySelector(".admin-dsp2-slider-thumb");he&&(he.style.width=fe.toFixed(2)+"%"),be&&(be.style.left=`calc(${fe.toFixed(2)}% - 8px)`);let ke=J.querySelector(".admin-dsp2-range");ke&&document.activeElement!==ke&&(ke.value=String(ge));let Ee=J.querySelector(".admin-dsp2-num");Ee&&document.activeElement!==Ee&&(Ee.value=String(ge))}}async function D(){try{let j=await fetch("/get_settings",{credentials:"same-origin"});if(!j.ok)throw new Error(j.status);E.options=await j.json()}catch(j){console.warn("[admin-display] /get_settings failed:",j),E.options=E.options||{}}}async function x(){try{let j=await fetch("/fonts",{credentials:"same-origin"});if(!j.ok)throw new Error(j.status);let J=await j.json();E.fonts=Array.isArray(J)?J:J.fonts||[]}catch{E.fonts=["NotoSansTC","Inter"]}}async function U(){try{let j=await fetch("/admin/metrics",{credentials:"same-origin"});if(!j.ok)return;let J=await j.json();E.viewerCount=J.ws_clients??0}catch{}}function G(){Y(),U(),E.metricsTimer=setInterval(U,5e3)}function Y(){E.metricsTimer&&(clearInterval(E.metricsTimer),E.metricsTimer=null)}function M(){if(!E.options){window.showToast&&window.showToast(m("loading"),!1);return}let j={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:E.options},J=new Blob([JSON.stringify(j,null,2)],{type:"application/json"}),Z=URL.createObjectURL(J),te=document.createElement("a");te.href=Z,te.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(te),te.click(),document.body.removeChild(te),URL.revokeObjectURL(Z),window.showToast&&window.showToast(m("displayExportDone"),!0)}async function q(){if(!E.options)return;let j=document.getElementById("dsp2-deploy");j&&(j.disabled=!0,j.classList.add("is-pending"));try{for(let J of O){let Z=E.options[J.key];Array.isArray(Z)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:J.key,enabled:!!Z[0]})})}await U(),window.showToast&&window.showToast(m("displayBroadcastDone")+` ${E.viewerCount} ${m("displayViewersReceivedSuffix")}`,!0)}catch(J){console.warn("[admin-display] deploy failed:",J),window.showToast&&window.showToast(m("updateFailed"),!1)}finally{j&&(j.disabled=!1,j.classList.remove("is-pending"))}}async function V(){let j={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,.5,3,1],Color:[!0,0,0,"FFFFFF"],FontFamily:[!1,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:m("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"warn",body:m("displayRevertConfirm"),confirmLabel:m("displayDeployRevert")}))try{for(let[Z,te]of Object.entries(j)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:Z,enabled:!!te[0]})});for(let oe=1;oe<=3;oe++)oe<3&&(Z==="Color"||Z==="FontFamily"||Z==="Layout")||te[oe]===""||te[oe]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:Z,value:te[oe],index:oe})})}await D(),l(),window.showToast&&window.showToast(m("displayRevertDone"),!0)}catch(Z){console.warn("[admin-display] revert failed:",Z),window.showToast&&window.showToast(m("updateFailed"),!1)}}function ne(){let j=document.getElementById(b);j&&(j.addEventListener("click",J=>{let Z=J.target.closest("[data-palette-preview]");if(Z){p(Z.dataset.palettePreview);return}let te=J.target.closest("[data-palette-remove]");if(te){let fe=r();if(fe.length>1){let he=fe.filter(be=>be!==te.dataset.paletteRemove);n(he,he.includes(E.palettePreview)?E.palettePreview:he[0])}return}if(J.target.closest("[data-palette-add]")){let fe=j.querySelector("[data-palette-hex]"),he=String(fe.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(he)){fe.setAttribute("aria-invalid","true"),d(m("colorFormatError"));return}let be=r();if(be.includes("#"+he)){d(m("viewerPaletteDuplicate"));return}be.length<64&&n([...be,"#"+he],"#"+he);return}let oe=J.target.closest("[data-toggle-key]");if(oe){let fe=oe.getAttribute("data-toggle-key"),he=!!(E.options[fe]||[])[0];w(fe,!he);return}let re=J.target.closest("[data-allow-action]");if(re){let fe=re.getAttribute("data-allow-action"),he=re.getAttribute("data-allow-key");if(!he)return;if(fe==="edit"){let be=T(he).map(ke=>K(he,ke));be.length?E.allowlistEdit[he]=new Set(be):E.allowlistEdit[he]=new Set(C(he)),H(he);return}if(fe==="cancel"){delete E.allowlistEdit[he],H(he);return}if(fe==="clear"){E.allowlistEdit[he]=new Set,B(he,[]),delete E.allowlistEdit[he];return}if(fe==="apply"){let be=E.allowlistEdit[he]||new Set,ke=C(he),Ee=Array.from(be),Te=ke.length>0&&Ee.length===ke.length&&ke.every($e=>be.has($e));B(he,Te?[]:Ee),delete E.allowlistEdit[he];return}}let le=J.target.closest("[data-allow-key][data-allow-value]");if(le){let fe=le.getAttribute("data-allow-key"),he=le.getAttribute("data-allow-value"),be=E.allowlistEdit[fe];if(be){let ke=K(fe,he);be.has(ke)?be.delete(ke):be.add(ke),H(fe)}return}let ge=J.target.closest("[data-chip-key]");if(ge){let fe=ge.getAttribute("data-chip-key"),he=ge.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${fe}"]`).forEach(be=>be.classList.remove("is-active")),ge.classList.add("is-active"),I(fe,3,he);return}if(J.target&&J.target.id==="dsp2-revert"){V();return}if(J.target&&J.target.id==="dsp2-export"){M();return}}),j.addEventListener("keydown",J=>{J.key==="Enter"&&J.target.matches("[data-palette-hex]")&&!J.isComposing&&(J.preventDefault(),j.querySelector("[data-palette-add]")?.click())}),j.addEventListener("change",J=>{let Z=J.target;if(!Z)return;if(Z.matches("[data-viewer-color-picker]")){Z.disabled=!0,w("ViewerColorPicker",Z.checked);return}let te=Z.getAttribute("data-num-key");if(!te)return;let oe=Z.getAttribute("data-num-index");if(oe==="step"){$(te,Z.value),H(te);return}let re=parseInt(oe,10);if(Number.isNaN(re))return;let le=Z.value;te==="Color"&&(le=String(le).replace(/^#/,"").toUpperCase()),I(te,re,le)}),j.addEventListener("input",J=>{let Z=J.target;if(Z){if(Z.matches("[data-palette-picker]")){E.paletteDraft=Z.value.toUpperCase(),j.querySelector("[data-palette-hex]").value=E.paletteDraft,d("","success"),p(E.paletteDraft);return}if(Z.matches("[data-palette-hex]")){E.paletteDraft=Z.value;let te=Z.value.replace(/^#/,"");Z.removeAttribute("aria-invalid"),d("","success"),/^[0-9a-fA-F]{6}$/.test(te)&&(j.querySelector("[data-palette-picker]").value="#"+te,p("#"+te));return}if(Z.classList&&Z.classList.contains("admin-dsp2-range")){let te=Z.getAttribute("data-range-key"),oe=_[te],re=Number(Z.value),le=(re-oe.min)/Math.max(1e-6,oe.max-oe.min)*100,ge=Z.closest("[data-row-key]");if(ge){let fe=ge.querySelector(".admin-dsp2-slider-fill"),he=ge.querySelector(".admin-dsp2-slider-thumb");fe&&(fe.style.width=le.toFixed(2)+"%"),he&&(he.style.left=`calc(${le.toFixed(2)}% - 8px)`);let be=ge.querySelector(".admin-dsp2-num");be&&(be.value=String(re))}Array.isArray(E.options[te])&&(E.options[te][3]=re),v();return}if(Z.classList&&Z.classList.contains("admin-dsp2-num")){let te=Z.getAttribute("data-num-key"),oe=parseInt(Z.getAttribute("data-num-index"),10);if(Number.isNaN(oe)||!Array.isArray(E.options[te]))return;let re=Z.value;Z.type==="number"&&(re=Number(re)),E.options[te][oe]=re,v()}}}),j.addEventListener("change",J=>{let Z=J.target;if(Z&&Z.classList&&Z.classList.contains("admin-dsp2-range")){let te=Z.getAttribute("data-range-key");I(te,3,Z.value)}}),j.addEventListener("click",J=>{let Z=J.target.closest("[data-dl-step]");if(Z){let oe=Z.closest("[data-dl-stepper]");if(!oe)return;let re=oe.getAttribute("data-dl-stepper"),ge=Number(W[re]??0)+Number(Z.getAttribute("data-dl-step"));se(re,ge);return}let te=J.target.closest("[data-dl-opt]");if(te){let oe=te.closest("[data-dl-seg]");if(!oe)return;let re=oe.getAttribute("data-dl-seg"),le=te.getAttribute("data-dl-opt");se(re,["safe_area","poll_vote_opacity"].indexOf(re)!==-1?Number(le):le)}}),j.addEventListener("change",J=>{let Z=J.target.closest("[data-dl-toggle]");if(Z){se(Z.getAttribute("data-dl-toggle"),Z.checked);return}let te=J.target.closest("[data-dl-range]");te&&se(te.getAttribute("data-dl-range"),Number(te.value))}),j.addEventListener("input",J=>{let Z=J.target.closest("[data-dl-range]");if(!Z)return;let te=Z.getAttribute("data-dl-range"),oe=j.querySelector(`[data-dl-value="${te}"]`);oe&&(oe.textContent=Z.value+"%")}))}let W={};function X(){let j=document.getElementById(b);j&&Object.entries(W).forEach(([J,Z])=>{let te=j.querySelector(`[data-dl-value="${J}"]`);te&&(te.textContent=J==="max_tracks"?Number(Z)===0?m("dlMaxTracksAuto"):String(Z):String(Z)+"%");let oe=j.querySelector(`[data-dl-range="${J}"]`);oe&&document.activeElement!==oe&&(oe.value=String(Z));let re=j.querySelector(`[data-dl-toggle="${J}"]`);re&&(re.checked=!!Z);let le=j.querySelector(`[data-dl-seg="${J}"]`);le&&le.querySelectorAll("[data-dl-opt]").forEach(ge=>{let fe=ge.getAttribute("data-dl-opt")===String(Z);ge.classList.toggle("is-active",fe),ge.setAttribute("aria-pressed",fe?"true":"false")})})}async function ee(){try{let j=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!j.ok)return;W=await j.json(),X()}catch(j){console.warn("[admin-display] display-layer fetch failed:",j)}}async function se(j,J){let Z=W[j];W[j]=J,X();try{let te=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[j]:J})});if(!te.ok)throw new Error("display-layer "+te.status);W=await te.json(),X()}catch(te){W[j]=Z,X(),console.warn("[admin-display] display-layer update failed:",te),window.showToast&&window.showToast(m("updateFailed"),!1)}}function Q(){y.forEach(j=>{let J=document.getElementById(j);J&&J.setAttribute("data-admin-ui-replaced","1")})}let ae=null;function ie(j,J){return j==="overlay"||J==="overlay"||j==="display"||J==="display"}function ce(j,J){return j==="viewer-config"||j==="viewer"||J==="viewer-config"||J==="viewer"}function ye(j,J){if(!ce(j,J))return;let Z=window.AdminTabs?.getConfig?.("viewer");if(!Z)return;let te=re=>Z.tabs.some(le=>le.slug===re),oe=te(J)?J:null;if(!oe&&window.AdminTabs.resolveActiveTab){let re=window.AdminTabs.resolveActiveTab("viewer",null);te(re)&&(oe=re)}oe&&(document.body.dataset.viewerConfigTab=oe)}let we=!1,Se=!1;async function _e(){let j=document.getElementById("sec-viewer-config-limits");if(!j||we)return;we=!0;let J=(Z,te)=>{let oe=j.querySelector(Z);oe&&(oe.textContent=te==null?"\u2014":String(te))};try{let Z=await fetch("/admin/metrics",{credentials:"same-origin"});if(!Z.ok)return;let te=await Z.json(),oe=te.rate_limits&&te.rate_limits.fire||{},re=te.rate_limits&&te.rate_limits.totals||{},le=te.rate_limit_config&&te.rate_limit_config.fire||{},ge=Math.max(1,(te.server_time||0)-(te.server_started_at||0));J("[data-vc-rate-fp]",le.limit||"\u2014"),J("[data-vc-rate-global]","\u2014"),J("[data-vc-rate-burst]","\u2014"),J("[data-vc-rate-cooldown]",le.window||"\u2014"),J("[data-vc-msg-len]",100),J("[data-vc-nick-len]","\u2014"),J("[data-vc-dedup]","\u2014");let fe=(oe.hits||0)/ge;J("[data-vc-avg-rate]",fe.toFixed(2)+"/s"),J("[data-vc-throttled]",oe.violations||0),J("[data-vc-blocked]",re.locked_sources||0),J("[data-vc-deduped]",0)}catch{}finally{we=!1}}function Ie(){let j=document.querySelector(".admin-dash-grid"),J=document.getElementById(b);if(!j||!J)return;let Z=j.dataset.activeRoute||"live",te=j.dataset.activeLeaf||Z;ye(Z,te);let oe=document.body.dataset.viewerConfigTab||"defaults",re=ce(Z,te),le=ie(Z,te),ge=re||le;J.dataset.dspMode=le?"values":"audience",J.style.display=ge?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach(he=>{let be=document.getElementById(he);be&&(be.style.display=re?"":"none")});let fe=document.getElementById("sec-viewer-config-info");fe&&(fe.style.display=re?"":"none"),re?Se||(Se=!0,_e()):Se=!1,ie(Z,te)?E.metricsTimer||G():Y(),ae=Z}function de(){if(document.getElementById("sec-viewer-config-info"))return;let j=document.getElementById("settings-grid");if(!j)return;let J=document.createElement("div");J.id="sec-viewer-config-info",J.className="lg:col-span-2",J.innerHTML='<div class="admin-vc-info-banner">'+m("displayViewerConfigInfoBanner")+"</div>";let Z=[{k:m("displayFieldNicknameLabel"),desc:m("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:m("displayFieldMessageLabel"),desc:m("displayFieldMessageDesc"),on:!0,pinned:!0},{k:m("displayFieldColorLabel"),desc:m("displayFieldColorDesc"),on:!0},{k:m("displayFieldFontLabel"),desc:m("displayFieldFontDesc"),on:!0},{k:m("displayFieldSizeLabel"),desc:m("displayFieldSizeDesc"),on:!0},{k:m("displayFieldOpacityLabel"),desc:m("displayFieldOpacityDesc"),on:!0},{k:m("displayFieldSpeedLabel"),desc:m("displayFieldSpeedDesc"),on:!0},{k:m("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:m("displayFieldEffectLabel"),desc:m("displayFieldEffectDesc"),on:!1}],te=document.createElement("div");te.id="sec-viewer-config-fields",te.className="admin-vc-fields-grid lg:col-span-2";let oe=document.createElement("div");oe.className="admin-vc-col-panel";let re=document.createElement("div");re.className="admin-vc-fields-head";let le=Z.filter(function(xe){return xe.on}).length,ge=Z.length-le;re.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+h(m("displayFieldsCountLabel",{count:Z.length}))+'</span><span class="admin-vc-fields-count">'+h(m("displayFieldsShownHidden",{shown:le,hidden:ge}))+"</span>",oe.appendChild(re);let fe=document.createElement("div");fe.className="admin-vc-fields-list",Z.forEach(function(xe){let Ce=document.createElement("div");Ce.className="admin-vc-field-row"+(xe.blocked?" is-blocked":"");let Fe=document.createElement("span");Fe.className="admin-vc-field-dot"+(xe.on?" is-on":""),Ce.appendChild(Fe);let De=document.createElement("div");var Be="";xe.pinned&&(Be='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+h(m("displayFieldBadgeRequired"))+"</span>"),xe.blocked&&(Be='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+h(m("displayFieldBadgeBlocked"))+"</span>"),De.innerHTML='<div class="admin-vc-field-label">'+h(xe.k)+Be+'</div><div class="admin-vc-field-desc">'+h(xe.desc)+"</div>",Ce.appendChild(De);let Le=document.createElement("button");if(Le.type="button",Le.className="admin-vc-toggle "+(xe.on?"is-on":"is-off"),Le.textContent=xe.on?m("displayToggleShow"):m("displayToggleHide"),xe.blocked||xe.pinned)Le.disabled=!0,Le.className+=" disabled";else{var Ae=xe.on;Le.addEventListener("click",function(){Ae=!Ae,Le.className="admin-vc-toggle "+(Ae?"is-on":"is-off"),Le.textContent=m(Ae?"displayToggleShow":"displayToggleHide"),Fe.className="admin-vc-field-dot"+(Ae?" is-on":"")})}Ce.appendChild(Le),fe.appendChild(Ce)}),oe.appendChild(fe);let he=document.createElement("div");he.className="admin-vc-col-panel";var ke=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(xe,Ce){return'<span class="admin-vc-swatch-dot" style="background:'+xe+";border:"+(Ce===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");he.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+h(m("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+h(m("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+h(m("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+ke+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+h(m("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+h(m("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+h(m("displayFieldsTip"))+"</div>",te.appendChild(oe),te.appendChild(he);function Ee(xe,Ce,Fe,De,Be,Le){let Ae=Le?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+xe+'</div></div><div class="admin-vc-limit-row__value" style="color:'+Ae+'">'+Fe+'<span class="admin-vc-limit-row__unit">'+(De||"")+"</span></div>"+(Be?'<div class="admin-vc-limit-row__hint">'+Be+"</div>":"")+"</div>"}let Te=document.createElement("div");Te.id="sec-viewer-config-limits",Te.className="admin-vc-limits-grid lg:col-span-2",Te.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+h(m("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+h(m("displayEditLink"))+"</a></div>"+Ee(h(m("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",h(m("displayRateFpUnit")),h(m("displayRateFpHint")))+Ee(h(m("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",h(m("displayRateGlobalHint")))+Ee(h(m("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",h(m("displayRateBurstUnit")),h(m("displayRateBurstHint")))+Ee(h(m("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",h(m("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+h(m("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+h(m("displayContentLimitsTitle"))+"</span></div>"+Ee(h(m("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",h(m("displayMsgLenUnit")),h(m("displayMsgLenHint")))+Ee(h(m("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",h(m("displayNickLenUnit")),h(m("displayNickLenHint")))+Ee(h(m("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",h(m("displayDedupHint")))+Ee(h(m("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+h(m("displayProfanityDefaultValue"))+"</span>","",h(m("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+h(m("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+h(m("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+h(m("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+h(m("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+h(m("displayAuditLogLink"))+"</a></div>";let $e=document.getElementById("sec-viewer-theme");$e&&$e.parentNode===j?(j.insertBefore(J,$e),j.insertBefore(Te,$e),j.insertBefore(te,$e)):(j.appendChild(J),j.appendChild(Te),j.appendChild(te)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),Ie()}async function ve(){let j=document.getElementById("settings-grid");if(!j||document.getElementById(b)){Q();return}j.insertAdjacentHTML("beforeend",F()),ne(),Q(),Ie(),E.options||await Promise.all([D(),x()]),ee(),l()}function ue(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)?ve():Q(),Ie()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",Ie),document.addEventListener("admin-route-applied",Ie),document.addEventListener("admin-panel-rendered",()=>{ve(),Q(),de(),Ie()}),ve(),de()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ue):ue()})()});var rt=me(()=>{document.addEventListener("DOMContentLoaded",()=>{function b(){let M=document.querySelector('meta[name="csrf-token"]');return M&&M.content||""}let y=window.DANMU_CONFIG||{},g=y.session||{logged_in:!1},h=y.settingRanges||{};function _(M,q={}){let V={credentials:"same-origin",...q},ne=new Headers(q.headers||{});return ne.set("X-CSRF-Token",b()),V.headers=ne,fetch(M,V)}window.csrfFetch=_;let z=5e3,S={at:0,data:null,promise:null};function A(){return S.data&&Date.now()-S.at<z}function m(){return A()?Promise.resolve(S.data):(S.promise||(S.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(M=>M.ok?M.json():null).then(M=>(M&&(S.data=M,S.at=Date.now()),S.promise=null,M)).catch(()=>(S.promise=null,null))),S.promise)}function R(M){if(!A())return null;let q=S.data[M];return q&&typeof q=="object"&&"_error"in q?null:q}window.__danmuAdminBootstrap={prime:m,get:R},m();let L={},$=null,E=null,P=Object.create(null);Object.assign(P,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},"api-tokens":{nav:"integrations",tab:"api-tokens"},scheduler:{nav:"integrations",tab:"scheduler"}});let N=Object.create(null);Object.assign(N,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"integrations",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"integrations",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"integrations",tab:"plugins"},mobile:{nav:"system",tab:"system"}});let T={_key:M=>"admin:tab:"+M,get(M){try{return sessionStorage.getItem(this._key(M))||null}catch{return null}},set(M,q){try{q?sessionStorage.setItem(this._key(M),q):sessionStorage.removeItem(this._key(M))}catch{}}};function C(M){let q=(M||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!q)return null;let V=q[1],ne=q[2]||null,W=null;if(!ne){let Q=P[V];typeof Q=="string"?V=Q:Q&&typeof Q=="object"&&(V=Q.nav||V,W=Q.tab||null)}let X=N[V],ee=V,se=null;if(typeof X=="string"?ee=X:X&&typeof X=="object"&&(ee=X.nav||V,se=X.tab||null),q[1]!==ee&&(C._warned||(C._warned=new Set),!C._warned.has(q[1]))){C._warned.add(q[1]);try{console.info("[admin] legacy route #/"+q[1]+" \u2192 #/"+ee+(ne||se||W?"/"+(ne||se||W):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:ee,tab:ne||se||W,raw:V}}function K(M,q){return q?"#/"+M+"/"+q:"#/"+M}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:N,tabMemory:T,parseHash:C,buildHash:K});var F=window.AdminUtils.loadDetailsState,O=window.AdminUtils.saveDetailsState,f=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:m,bootstrapSection:R};async function c(){try{L=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),g.logged_in&&I()}catch(M){console.error("Get settings failed:",M),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function i(M){return/^#[0-9A-Fa-f]{6}$/.test(M)}function a(M){return i(M)?M:/^[0-9A-Fa-f]{6}$/.test(M)?"#"+M:(M.startsWith("#")||(M="#"+M),i(M)?M:"#38bdf8")}function o(M,q){if(h[M]){let V=parseInt(q);if(isNaN(V)||V<h[M].min||V>h[M].max)return showToast(ServerI18n.t("settingRangeError",{key:M,min:h[M].min,max:h[M].max}),!1),!1}return!0}function s(M,q,V){if(!V||!Array.isArray(L[M]))return;let ne=L[M][q];M==="Color"&&typeof ne=="string"&&(ne=a(`#${ne}`)),ne!=null&&(V.value=String(ne))}let l={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-plugins","sec-widgets"]}};function r(){Object.values(l).forEach(M=>{let q=document.getElementById(M.containerId);q&&M.orderedIds.forEach(V=>{let ne=document.getElementById(V);ne&&ne.parentElement!==q&&q.appendChild(ne)})})}function t(){$&&($.disconnect(),$=null),r(),$=new MutationObserver(()=>{r()}),$.observe(e,{childList:!0,subtree:!0})}async function d(M,q,V,ne=null){try{if(M==="Color"){if(!i(q)){showToast(ServerI18n.t("colorFormatError"),!1),s(M,V,ne);return}q=q.replace("#","")}else if((M==="Speed"||M==="Opacity"||M==="FontSize")&&!o(M,q)){s(M,V,ne);return}(await _("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:M,value:q,index:V})})).ok?(Array.isArray(L[M])||(L[M]=[!1,"","",""]),L[M][V]=q,showToast(`${M} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await c())}catch(W){console.error("Error:",W),showToast(`Update Error: ${W.message}`,!1),await c()}}async function p(M,q){try{let V=await _("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:M,enabled:q})}),ne=await V.json().catch(()=>({}));if(V.ok)Array.isArray(L[M])||(L[M]=[!1,"","",""]),L[M][0]=q,showToast(`${M} ${ServerI18n.t("settingsUpdated")}`),I();else{let W=document.getElementById(`toggle-${M}`);W&&(W.checked=!q),showToast(ne.error||ServerI18n.t("updateFailed"),!1)}}catch(V){console.error("Error:",V);let ne=document.getElementById(`toggle-${M}`);ne&&(ne.checked=!q),showToast(`Update Error: ${V.message}`,!1)}}let e=document.getElementById("app-container"),n=document.getElementById("toast-container"),u=(M,q=500)=>"requestIdleCallback"in window?window.requestIdleCallback(M,{timeout:q}):setTimeout(M,q);async function v(){let M=parseInt(document.getElementById("historyHours")?.value||"24");try{let[q,V]=await Promise.all([fetch(`/admin/stats/hourly?hours=${M}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${M}&limit=10`,{credentials:"same-origin"})]);if(!q.ok||!V.ok)return;let ne=await q.json(),W=await V.json(),X=document.getElementById("statsDashboard");if(!X)return;let ee=ne.distribution||[],se=W.topTexts||[],Q=Math.max(1,...ee.map(we=>we.count)),ae=ee.reduce((we,Se)=>we+(Se.count||0),0),ie=ee.filter(we=>we.count>0).length,ce=ee.map(we=>`<div class="chart-bar" style="height: ${Math.round(we.count/Q*100)}%" title="${f(we.hour)}: ${we.count}"><span class="chart-label">${f(we.hour.slice(-5,-3))}</span></div>`).join(""),ye=se.map((we,Se)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${Se+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${f(we.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${we.count}</td></tr>`).join("");X.innerHTML=`
        <div class="history-dashboard-grid">
          <div class="history-dashboard-card">
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label">${ServerI18n.t("total")}</span>
              <strong class="history-dashboard-value">${ae}</strong>
            </div>
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label" data-i18n="historyActiveSlots">${ServerI18n.t("historyActiveSlots")}</span>
              <strong class="history-dashboard-value">${ie}</strong>
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
            ${se.length?`<table class="w-full text-xs"><tbody>${ye}</tbody></table>`:`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
          </div>
        </div>`}catch(q){console.error("Load stats error:",q)}}window._loadStats=v,window.csrfFetch=_,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=e,window.__adminCtx.getSettings=()=>L;function k(){e&&(e.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function w(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():k()}function I(){let M=F(),q=(ie,ce=!1)=>M[ie]!==void 0?M[ie]:ce,V=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(ie=>Array.isArray(L[ie])&&L[ie][0]===!0).length,ne=L.Layout&&L.Layout[3]?f(String(L.Layout[3]).replace(/_/g," ")):"scroll",W=L.FontFamily&&L.FontFamily[3]?f(String(L.FontFamily[3])):"NotoSansTC",X=ie=>ie.map(ce=>`<span style="height:${ce*10}%;opacity:${.3+ce*.08}"></span>`).join(""),ee=ne&&ne!=="off",se=window.location.port||(window.location.protocol==="https:"?"443":"80");e.innerHTML=`
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
                                    <button class="admin-dash-broadcast ${ee?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${f(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${f(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 ${f(ee?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}
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
                `;let Q=document.getElementById("settings-grid"),ae=L.Effects?L.Effects[0]!==!1:!0;Q.insertAdjacentHTML("beforeend",`
      <div id="sec-effects" class="admin-ui-group admin-master-toggle admin-master-toggle--slim lg:col-span-2">
        <div class="admin-ui-group-row is-tall admin-master-toggle__row">
          <span class="lbl">${ServerI18n.t("effectsSetting")}
            <span class="sub admin-master-toggle__state" data-on="${ae}">${ae?ServerI18n.t("effectsEnabledMsg"):ServerI18n.t("effectsDisabledMsg")}</span>
          </span>
          <span class="admin-master-toggle__spacer"></span>
          <div class="relative inline-block w-12 align-middle select-none transition duration-200 ease-in flex-shrink-0">
            <input type="checkbox" name="Effects" id="toggle-Effects" role="switch" aria-checked="${ae}" aria-label="Toggle ${ServerI18n.t("effectsSetting")}" class="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer" ${ae?"checked":""} />
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
    `),u(G),Q.insertAdjacentHTML("beforeend",`
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
    `),D(),t(),u(Y),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),H(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let ce=document.querySelector("[data-telem-bars]");if(!ce)return;let ye=document.querySelector("[data-telem-status]"),we={cpu:100,mem:100,ws:100,rate:50};function Se(de,ve,ue,j,J){let Z=ce.querySelector(`[data-telem-fill="${de}"]`),te=ce.querySelector(`[data-telem-value="${de}"]`);Z&&(Z.style.width=Math.max(0,Math.min(100,ve))+"%",Z.classList.toggle("is-warn",!j)),te&&(te.textContent=ue);let oe=ce.querySelector(`[data-telem-row="${de}"]`);oe&&J&&oe.setAttribute("title",J)}function _e(de,ve){if(!ve||ve<=0)return Math.round(de)+" MB used";if(ve>=1024){let ue=(de/1024).toFixed(1),j=(ve/1024).toFixed(1);return`${ue} / ${j} GB used`}return`${Math.round(de)} / ${Math.round(ve)} MB used`}async function Ie(){try{let de=await fetch("/admin/metrics",{credentials:"same-origin"});if(!de.ok)return;let ve=await de.json(),ue=ve.cpu_series||[],j=ve.mem_series||[],J=ve.mem_mb_series||[],Z=ve.ws_series||[],te=ve.rate_series||[],oe=ke=>ke.length?ke[ke.length-1]:0,re=Number(oe(ue)||0),le=Number(oe(j)||0),ge=Number(oe(J)||0),fe=Number(ve.mem_total_mb||0),he=Number(oe(Z)||ve.ws_clients||0),be=Number(oe(te)||0)/60;if(Se("cpu",re,`${re.toFixed(0)}%`,re<90),Se("mem",le,`${le.toFixed(0)}%`,le<90,_e(ge,fe)),Se("ws",he/we.ws*100,String(he),he<100),Se("rate",be/we.rate*100,`${be.toFixed(1)}/s`,be<40),ye){let ke=re>=90||le>=90||be>=40;ye.textContent=ke?"\u25CF BUSY":"\u25CF HEALTHY",ye.classList.toggle("is-warn",ke)}}catch{}}setTimeout(Ie,4e3),setInterval(Ie,5e3)})()}let B={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},integrations:{title:"\u64F4\u5145",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"]},firetoken:{title:"Fire Token",kicker:"ADMIN LANE \xB7 FIRE TOKEN \xB7 \u7528\u91CF / IP / AUDIT",sections:["sec-firetoken-overview"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},security:{title:"\u5B89\u5168",kicker:"SECURITY \xB7 \u5BC6\u78BC \xB7 WS TOKEN \xB7 \u5BE9\u8A08",sections:["admin-security-v2-page"]},backup:{title:"\u5099\u4EFD\u8207\u9084\u539F",kicker:"BACKUP \xB7 EXPORT \xB7 DANGER",sections:["admin-backup-v2-page","sec-timeline-export"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=B;function H(){let M=document.querySelector(".admin-dash-grid");if(!M)return;let q="dashboard",V=null;function ne(de){return l.moderation.orderedIds.indexOf(de)!==-1?"moderation-grid":l.assets.orderedIds.indexOf(de)!==-1?"assets-grid":de==="sec-scheduler"||de==="sec-webhooks"?"sec-advanced":"settings-grid"}function W(){let de=M.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),ve=M.querySelector("[data-route-note]"),ue=M.querySelector("[data-route-action]");if(ue&&Array.prototype.slice.call(ue.children).forEach(oe=>{oe._adminHomeHead?oe._adminHomeHead.appendChild(oe):oe.remove()}),!de)return;let j=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(q)),J=Array.prototype.slice.call(M.querySelectorAll(".admin-ui-page-head"));J.forEach(oe=>oe.classList.remove("is-merged-into-topbar"));let Z=(B[q]?.title||"").trim().replace(/\s+/g," "),te=null;J.forEach(oe=>{let re=oe.querySelector(".admin-ui-page-title"),le=re&&re.textContent.trim().replace(/\s+/g," ");if(le&&(j||le===de||le===Z)){if(oe.offsetParent!==null){te===null&&(te=oe.querySelector(".admin-ui-page-note")?.innerHTML||"");let fe=oe.querySelector(".admin-ui-page-actions");fe&&ue&&!ue.children.length&&(fe._adminHomeHead=oe,ue.appendChild(fe))}oe.classList.add("is-merged-into-topbar")}}),ve&&(ve.innerHTML=te||"",ve.hidden=!te)}function X(){let de=B[q],ve=new Set((de.sections||[]).map(ne)),ue=j=>j.id==="sec-advanced"?Array.from(j.querySelectorAll('[id^="sec-"]')).some(J=>getComputedStyle(J).display!=="none"):Array.from(j.children).some(J=>getComputedStyle(J).display!=="none");M.querySelectorAll(".admin-route-sections").forEach(j=>{if(!(j.id==="sec-advanced"?ve.has("sec-advanced"):ve.has(j.id))){j.style.display="none";return}j.style.display="",j.style.display=ue(j)?"":"none"})}let ee=()=>{let de=B[q],ve=new Set(de.sections);M.querySelectorAll('[id^="sec-"]').forEach(ue=>{if(ue.id){if(ue.id==="sec-advanced"){let j=Array.from(ue.querySelectorAll('[id^="sec-"]')).some(J=>ve.has(J.id));ue.style.display=j?"":"none";return}ue.style.display=ve.has(ue.id)?"":"none"}}),V&&window.AdminTabs?.hasTabsFor?.(q)&&window.AdminTabs.applyTabSectionVisibility(q,V,M),X(),W()},se={system:{nav:"system",tab:"overview"},backup:{nav:"backup"},integrations:{nav:"integrations"},"api-tokens":{nav:"integrations",tab:"api-tokens"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},scheduler:{nav:"integrations",tab:"scheduler"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}},Q=(de,ve,ue)=>{if(ue=ue||de,!B[de]){let Te=P[de];if(typeof Te=="string")de=Te;else if(Te&&typeof Te=="object")Te.nav&&(de=Te.nav),!ve&&Te.tab&&(ve=Te.tab);else{let $e=N[de];typeof $e=="string"?de=$e:$e&&typeof $e=="object"&&($e.nav&&(de=$e.nav),!ve&&$e.tab&&(ve=$e.tab))}}if(de==="system"&&ve&&se[ve]){let Te=se[ve];de=Te.nav,ve=Te.tab||null,ue=de}q=B[de]?de:"live",M.dataset.activeRoute=q;let j;window.AdminTabs?.hasTabsFor?.(q)?j=window.AdminTabs.resolveActiveTab(q,ve):j=null;let J=ue&&ue!==q?"#/"+ue:window.AdminRouter?.buildHash?window.AdminRouter.buildHash(q,j):"#/"+q;if(window.location.hash!==J){try{history.replaceState(null,"",J)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let Z=B[q],te=Array.from(M.querySelectorAll(".admin-dash-nav-row[data-route]")),oe=ue!==q?te.find(Te=>Te.dataset.route===ue):null;te.forEach(Te=>{let $e=oe?Te===oe:Te.dataset.route===q;Te.classList.toggle("is-active",$e),Te.setAttribute("aria-selected",$e?"true":"false")});let re=M.querySelector("[data-route-kicker]"),le=M.querySelector("[data-route-title]");var ge=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(Te){return Te},fe="adminRouteTitle_"+q,he="adminRouteKicker_"+q,be=ge(fe),ke=ge(he);re&&(re.textContent=ke!==he?ke:Z.kicker),le&&(le.textContent=be!==fe?be:Z.title);let Ee=q==="dashboard"||q==="live";M.querySelectorAll('[data-route-view="dashboard"]').forEach(Te=>{Te.style.display=Ee?"":"none"}),Ee?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),V=j,j&&window.AdminRouter?.tabMemory?.set?.(q,j),M.dataset.activeLeaf=j||q,ee(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:q,leaf:j}})),X(),W(),ie(q,j),ae(ue,q,j);try{history.replaceState(null,"",J)}catch{}};function ae(de,ve,ue){window.AdminBreadcrumb?.render(M,de,ve,ue)}function ie(de,ve){let ue=M.querySelector("[data-admin-tabs-host]");if(!ue){let j=M.querySelector(".admin-dash-topbar");if(!j)return;ue=document.createElement("div"),ue.dataset.adminTabsHost="",j.insertAdjacentElement("afterend",ue)}if(ue.innerHTML="",window.AdminTabs?.hasTabsFor?.(de)&&ve){ue.hidden=!1;let j=window.AdminTabs.renderTabStrip(de,ve,{onSelect:J=>Q(de,J)});j&&ue.appendChild(j),ue.classList.remove("admin-tabs-host--accordion");return}ue.classList.remove("admin-tabs-host--accordion"),ue.hidden=!0}E&&window.removeEventListener("hashchange",E),E=()=>{let de=C(window.location.hash),ve=(window.location.hash||"").match(/^#\/([\w-]+)/),ue=ve?ve[1]:null;de&&Q(de.nav,de.tab,ue||de.raw)},window.addEventListener("hashchange",E),M.querySelectorAll("[data-route]").forEach(de=>{de.addEventListener("click",ve=>{ve.preventDefault(),Q(de.dataset.route)})});let ce=C(window.location.hash),ye=(window.location.hash||"").match(/^#\/([\w-]+)/),we=ye?ye[1]:ce?.raw||ce?.nav||"live";Q(ce?.nav||"live",ce?.tab||null,we),window._adminNavigateTo=()=>Q(q,V);let Se=!1;function _e(){if(Se)return;Se=!0;let de=()=>{Se=!1,ee(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:q,leaf:V}}))};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?requestAnimationFrame(de):setTimeout(de,0)}let Ie=M.querySelector(".admin-dash-main");Ie&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{_e()}).observe(Ie,{childList:!0,subtree:!0}),_e())}function D(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let M=document.querySelector("[data-open-help]");M&&M.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let q=document.querySelector("[data-open-palette]");if(q){let ne=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};q.addEventListener("click",ne),q.addEventListener("keydown",W=>{(W.key==="Enter"||W.key===" ")&&(W.preventDefault(),ne())})}let V=document.getElementById("logoutButton");V&&V.addEventListener("click",async()=>{try{let ne=await _("/logout",{method:"POST"});ne.redirected&&(window.location.href=ne.url),showToast(ServerI18n.t("logoutSuccess"))}catch(ne){console.error("Logout Failed:",ne),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(ne=>{ne.name&&ne.addEventListener("change",async function(){let W=this.name,X=this.checked;await p(W,X)})}),document.querySelectorAll("details[id^='sec-']").forEach(ne=>{ne.addEventListener("toggle",()=>{let W=F();W[ne.id]=ne.open,O(W)})}),document.querySelectorAll(".setting-input").forEach(ne=>{ne.addEventListener("change",async function(){let W=this.dataset.key,X=parseInt(this.dataset.index),ee=this.value;this.type==="number"&&(ee=parseInt(ee)),await d(W,ee,X,this)})})}function x(){if(g.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}I()}else w()}async function U(){await c(),x(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function G(){window.AdminThemes&&window.AdminThemes.init()}function Y(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{$&&($.disconnect(),$=null)}),U()})});var dt=me(()=>{(function(){"use strict";var b=null;async function y(){var m=(document.getElementById("pollQuestion")?.value||"").trim(),R=document.querySelectorAll(".poll-option-input"),L=Array.from(R).map(function(P){return P.value.trim()}).filter(Boolean);if(!m){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(L.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var $=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:m,options:L})}),E=await $.json();if(!$.ok){window.showToast(E.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),S(E),_()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function g(){try{var m=await window.csrfFetch("/admin/poll/end",{method:"POST"}),R=await m.json();if(!m.ok){window.showToast(R.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),S(R),b&&(clearInterval(b),b=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function h(){try{var m=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),R=await m.json();if(!m.ok){window.showToast(R.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),S(R),b&&(clearInterval(b),b=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function _(){b&&(clearInterval(b),b=null);var m=async function(){try{var R=await fetch("/admin/poll/status",{credentials:"same-origin"});if(R.ok){var L=await R.json();S(L),L.state!=="active"&&b&&(clearInterval(b),b=null)}}catch{}};m(),b=setInterval(m,2e3)}function z(){var m=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var R=document.querySelector('#sec-polls [data-poll-action="add"]');R&&R.click()},extra:`
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
      </div>`});return m.dataset.emptyKind="poll",m}function S(m){var R=document.getElementById("pollStatusDisplay");if(R){if(R.textContent="",!m||m.state==="idle"){R.appendChild(z());return}var L=m.total_votes||0,$=Math.max(1,...m.options.map(function(F){return F.count})),E=document.createElement("div");E.className="admin-poll-status-card";var P=document.createElement("div");P.className="admin-poll-status-header";var N=document.createElement("span");N.className="admin-poll-status-dot"+(m.state==="active"?" is-active":" is-ended"),P.appendChild(N);var T=document.createElement("span");T.className="admin-poll-status-question",T.textContent=m.question||"",P.appendChild(T);var C=document.createElement("span");C.className="admin-poll-status-state",C.textContent=m.state,P.appendChild(C),E.appendChild(P),m.options.forEach(function(F){var O=document.createElement("div");O.className="admin-poll-status-row";var f=document.createElement("div");f.className="admin-poll-status-label";var c=document.createElement("span"),i=document.createElement("b");i.textContent=F.key+".",c.appendChild(i),c.appendChild(document.createTextNode(" "+F.text));var a=document.createElement("span");a.textContent=F.count+" ("+F.percentage+"%)",f.appendChild(c),f.appendChild(a);var o=document.createElement("div");o.className="admin-poll-status-bar";var s=document.createElement("div");s.className="admin-poll-status-bar-fill",s.style.width=F.count/$*100+"%",o.appendChild(s),O.appendChild(f),O.appendChild(o),E.appendChild(O)});var K=document.createElement("div");K.className="admin-poll-status-footer",K.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",L),E.appendChild(K),R.appendChild(E)}}function A(){var m=document.getElementById("sec-polls");if(m&&m.dataset.pollLegacyBound!=="1"){m.dataset.pollLegacyBound="1";var R=document.getElementById("pollCreateBtn");R&&R.addEventListener("click",y);var L=document.getElementById("pollEndBtn");L&&L.addEventListener("click",g);var $=document.getElementById("pollResetBtn");$&&$.addEventListener("click",h);var E=document.getElementById("pollAddOptionBtn");E&&E.addEventListener("click",function(){var T=document.getElementById("pollOptionsContainer");if(T){var C=T.querySelectorAll(".poll-option-input").length;if(C>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var K=document.createElement("input");K.type="text",K.className="poll-option-input admin-ui-input",K.placeholder=String.fromCharCode(65+C)+". Option "+(C+1),K.maxLength=100,T.appendChild(K)}});var P=document.getElementById("pollRemoveOptionBtn");P&&P.addEventListener("click",function(){var T=document.getElementById("pollOptionsContainer");if(T){var C=T.querySelectorAll(".poll-option-input");if(C.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}C[C.length-1].remove()}});var N=m;N&&(N.addEventListener("toggle",function(){N.open&&_()}),_()),window.addEventListener("beforeunload",function(){b&&(clearInterval(b),b=null)})}}document.addEventListener("admin-panel-rendered",function(){A()}),document.addEventListener("DOMContentLoaded",function(){A()}),window.addEventListener("hashchange",function(){var m=window.location.hash||"";m.indexOf("/polls")!==-1&&A()})})()});var lt=me(()=>{(function(){"use strict";async function b(){try{let _=await fetch("/admin/blacklist/get",{method:"GET",credentials:"same-origin"});if(!_.ok){let R=await _.json();showToast(ServerI18n.t("errorFetchingBlacklist").replace("{error}",R.error||_.statusText),!1);return}let z=await _.json(),S=document.getElementById("blacklistKeywords");S.innerHTML="";let A=document.getElementById("modBlacklistCount");A&&(A.textContent=`${z.length} words`);let m=document.querySelector('[data-mod-stat="banned"]');m&&(m.textContent=z.length),z.length===0?S.innerHTML=`<div style="padding:12px 0;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${ServerI18n.t("noKeywordsYet")}</div>`:z.forEach(R=>{let L=document.createElement("div");L.className="hud-banned-row";let $=document.createElement("span");$.style.cssText="color: var(--color-ink-error);font-family:var(--font-mono);font-size:13px",$.textContent="\u2298";let E=document.createElement("span");E.style.cssText="flex:1;min-width:0;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all",E.textContent=R;let P=document.createElement("button");P.className="removeKeywordBtn",P.type="button",P.style.cssText="background:transparent;border:none;color: var(--color-ink-accent);font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;cursor:pointer;padding:2px 4px",P.textContent="UNBAN",P.setAttribute("data-keyword",R),L.appendChild($),L.appendChild(E),L.appendChild(P),S.appendChild(L)})}catch(_){console.error("Fetch blacklist error:",_),showToast(ServerI18n.t("fetchBlacklistError"),!1)}}async function y(){let _=document.getElementById("newKeywordInput"),z=_.value.trim();if(!z){showToast(ServerI18n.t("keywordEmpty"),!1);return}try{let S=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:z})}),A=await S.json();S.ok?(_.value="",b(),window.AdminQuickAction?window.AdminQuickAction.fire({label:A.message||ServerI18n.t("histToastBlacklisted",{keyword:z}),undo:{label:ServerI18n.t("histUndo"),run:async()=>{if(!(await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:z})})).ok)throw new Error("remove failed");b()}}}):showToast(A.message||"Keyword added.",!0)):showToast(A.error||"Failed to add keyword.",!1)}catch(S){console.error("Add keyword error:",S),showToast(ServerI18n.t("addKeywordError"),!1)}}async function g(_){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("histRemoveKwTitle"),subtitle:ServerI18n.t("cfmSubRemoveKeyword"),severity:"warn",bodyText:ServerI18n.t("confirmRemoveKeyword").replace("{keyword}",_),confirmLabel:ServerI18n.t("histRemoveKwConfirm")}))try{let S=await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:_})}),A=await S.json();S.ok?(showToast(A.message||"Keyword removed.",!0),b()):showToast(A.error||"Failed to remove keyword.",!1)}catch(S){console.error("Remove keyword error:",S),showToast(ServerI18n.t("removeKeywordError"),!1)}}function h(){let _=document.getElementById("addKeywordBtn");_&&_.addEventListener("click",y);let z=document.getElementById("newKeywordInput");z&&z.addEventListener("keypress",function(A){(A.key==="Enter"||A.keyCode===13)&&(A.preventDefault(),y())});let S=document.getElementById("blacklistKeywords");S&&S.addEventListener("click",function(A){let m=A.target.closest(".removeKeywordBtn");if(m){let R=m.dataset.keyword;R&&g(R)}})}document.addEventListener("admin-panel-rendered",function(){b(),h()}),window.AdminHistory={fetchBlacklist:b}})()});var ct=me(()=>{(function(){"use strict";var b="sec-timeline-export",y="danmu.adminHistoryExports.v1",g=10,h={rawText:!0,polls:!0,masked:!1,metadata:!0},_=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],z=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],S={range:"24h",filters:Object.assign({},h),format:"JSON"};function A(){return document.getElementById(b)}function m(){try{return JSON.parse(localStorage.getItem(y)||"[]")}catch{return[]}}function R(v){try{localStorage.setItem(y,JSON.stringify(v.slice(0,g)))}catch{}}function L(v){var k=m();k.unshift(v),R(k)}function $(v){return v?v<1024?v+" B":v<1024*1024?(v/1024).toFixed(1)+" KB":(v/1024/1024).toFixed(1)+" MB":"0 B"}function E(v){try{var k=new Date(v),w=new Date,I=k.toDateString()===w.toDateString();if(I)return ServerI18n.t("historyV2TodayAt",{time:String(k.getHours()).padStart(2,"0")+":"+String(k.getMinutes()).padStart(2,"0")});var B=new Date(w);return B.setDate(w.getDate()-1),k.toDateString()===B.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(k.getHours()).padStart(2,"0")+":"+String(k.getMinutes()).padStart(2,"0")}):k.getMonth()+1+"-"+String(k.getDate()).padStart(2,"0")+" "+String(k.getHours()).padStart(2,"0")+":"+String(k.getMinutes()).padStart(2,"0")}catch{return v||""}}function P(v){if(v==="1h")return 1;if(v==="24h")return 24;if(v==="7d")return 168;if(v==="today"){var k=new Date,w=new Date(k.getFullYear(),k.getMonth(),k.getDate());return Math.max(1,Math.ceil((k-w)/36e5))}return v==="yest"?48:v==="live"?6:24}function N(v){return v.filter(function(k){return!(!S.filters.rawText&&!k.is_poll&&!k.muted&&!k.banned||!S.filters.polls&&k.is_poll||!S.filters.masked&&(k.muted||k.banned))}).map(function(k){if(!S.filters.metadata){var w=Object.assign({},k);return delete w.clientIp,delete w.fingerprint,w}return k})}function T(v){var k=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],w=function(H){var D=H==null?"":String(H);return D.indexOf(",")>=0||D.indexOf('"')>=0||D.indexOf(`
`)>=0?'"'+D.replace(/"/g,'""')+'"':D},I=function(H){return H.status?H.status:H.banned?"banned":H.muted?"muted":H.is_poll?"poll":"ok"},B=v.map(function(H){return[H.timestamp||"",H.nickname||"",H.text||"",H.color?"#"+H.color:"",H.size!=null?H.size:"",H.speed!=null?H.speed:"",H.opacity!=null?H.opacity:"",H.isImage?"true":"false",H.fontInfo&&H.fontInfo.name||"",H.clientIp||"",H.fingerprint||"",I(H),H.delivery_reason||""].map(w).join(",")});return[k.join(","),B.join(`\r
`)].filter(Boolean).join(`\r
`)}function C(v){return v.map(function(k,w){var I=new Date(k.timestamp||Date.now()),B=K(I),H=K(new Date(I.getTime()+3e3)),D=(k.nickname?"["+k.nickname+"] ":"")+(k.text||"");return w+1+`
`+B+" --> "+H+`
`+D+`
`}).join(`
`)}function K(v){var k=function(w,I){return String(w).padStart(I||2,"0")};return k(v.getHours())+":"+k(v.getMinutes())+":"+k(v.getSeconds())+","+k(v.getMilliseconds(),3)}function F(v,k){var w=URL.createObjectURL(v),I=document.createElement("a");I.href=w,I.download=k,I.click(),URL.revokeObjectURL(w)}function O(){var v=P(S.range),k=document.getElementById("histv2-go");k&&(k.disabled=!0,k.dataset.busy="1"),fetch("/admin/history?hours="+v+"&limit=10000",{credentials:"same-origin"}).then(function(w){if(!w.ok)throw new Error("http "+w.status);return w.json()}).then(function(w){var I=w&&w.records||[],B=N(I);if(B.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var H=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),D,x;if(S.format==="JSON"){var U=JSON.stringify(B,null,2);x=new Blob([U],{type:"application/json"}),D="danmu-history-"+H+".json"}else S.format==="CSV"?(x=new Blob(["\uFEFF"+T(B)],{type:"text/csv;charset=utf-8;"}),D="danmu-history-"+H+".csv"):(x=new Blob([C(B)],{type:"application/x-subrip;charset=utf-8;"}),D="danmu-history-"+H+".srt");F(x,D),L({name:D,fmt:S.format,size:x.size,when:new Date().toISOString(),count:B.length}),c(),f(B.length,x.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:B.length}),!0)}).catch(function(w){console.error("[history-v2] export failed",w),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:w.message||w}),!1)}).finally(function(){k&&(k.disabled=!1,delete k.dataset.busy)})}function f(v,k){var w=document.getElementById("histv2-estimate");w&&(w.textContent=ServerI18n.t("historyV2Estimate",{count:v||"\u2014",size:k?$(k):"\u2014 MB"}))}function c(){var v=document.getElementById("histv2-recent-list");if(v){var k=m();if(k.length===0){v.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}v.innerHTML=k.map(function(w){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+w.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+i(w.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+i(E(w.when))+" \xB7 "+$(w.size)+"</div></div></div>"}).join("")}}function i(v){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(v):v==null?"":String(v).replace(/[&<>"']/g,function(k){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[k]})}function a(){return _.map(function(v){var k=S.range===v.k;return'<button type="button" class="histv2-chip'+(k?" is-active":"")+'" data-histv2-range="'+v.k+'">'+i(ServerI18n.t(v.labelKey))+(v.k==="live"?" \xB7 "+o():"")+"</button>"}).join("")}function o(){var v=new Date;return String(v.getHours()).padStart(2,"0")+":"+String(v.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function s(){var v=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return v.map(function(k){var w=!!S.filters[k.k];return'<button type="button" class="histv2-toggle'+(w?" is-on":"")+'" data-histv2-toggle="'+k.k+'"><span class="histv2-toggle-mark">'+(w?"\u2713":"\u25CB")+"</span><span>"+i(ServerI18n.t(k.labelKey))+"</span></button>"}).join("")}function l(){return z.map(function(v){var k=S.format===v.k;return'<button type="button" class="histv2-fmt'+(k?" is-selected":"")+'" data-histv2-fmt="'+v.k+'">'+(k?'<span class="histv2-fmt-check">\u2713</span>':"")+(v.badge?'<span class="histv2-fmt-badge">'+i(v.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+v.k+'</div><div class="histv2-fmt-desc">'+i(v.desc)+"</div></button>"}).join("")}function r(){var v=A();v&&(v.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+a()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+s()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+l()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",v.addEventListener("click",t),c(),n())}function t(v){var k=v.target.closest("[data-histv2-range]");if(k){S.range=k.dataset.histv2Range,d(),n();return}var w=v.target.closest("[data-histv2-toggle]");if(w){var I=w.dataset.histv2Toggle;S.filters[I]=!S.filters[I],p(),n();return}var B=v.target.closest("[data-histv2-fmt]");if(B){S.format=B.dataset.histv2Fmt,e(),n();return}var H=v.target.closest("#histv2-go");if(H&&!H.dataset.busy){O();return}}function d(){var v=document.getElementById("histv2-chips");v&&(v.innerHTML=a())}function p(){var v=document.getElementById("histv2-toggles");v&&(v.innerHTML=s())}function e(){var v=document.getElementById("histv2-formats");v&&(v.innerHTML=l())}function n(){n._t&&clearTimeout(n._t),n._t=setTimeout(function(){var v=P(S.range);fetch("/admin/history?hours="+v+"&limit=10000",{credentials:"same-origin"}).then(function(k){return k.ok?k.json():null}).then(function(k){if(!k)return f(0,0);var w=N(k&&k.records||[]),I=S.format==="JSON"?220:S.format==="CSV"?110:80;f(w.length,w.length*I)}).catch(function(){f(0,0)})},250)}function u(){var v=A(),k=document.getElementById("admin-backup-v2-page");if(!v){var w=document.getElementById("settings-grid");if(!w)return;v=document.createElement("div"),v.id=b,v.className="admin-ui-card lg:col-span-2 history-v2-section",w.appendChild(v),r()}k&&k.parentElement&&v.previousElementSibling!==k&&k.parentElement.insertBefore(v,k.nextSibling)}document.addEventListener("admin-panel-rendered",u),document.addEventListener("admin-route-applied",u),window.AdminHistoryV2={refresh:n,state:S}})()});var ut=me(()=>{(function(){"use strict";let b="admin-replay-bar";function y(){let h=document.getElementById(b);return h||(document.body?(h=document.createElement("div"),h.id=b,h.className="admin-replay-bar",h.hidden=!0,h.setAttribute("role","status"),h.setAttribute("aria-live","polite"),h.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(h,document.body.firstChild),h):null)}function g(h){let _=y();_&&(_.hidden=!h)}window.AdminReplayBar={ensure:y,setActive:g},document.addEventListener("admin-panel-rendered",y)})()});var mt=me(()=>{(function(){"use strict";let b=null;function y(E){window.AdminReplayBar&&window.AdminReplayBar.ensure();let P=document.getElementById("replayPauseBtn"),N=document.getElementById("replayResumeBtn"),T=document.getElementById("replayStopBtn"),C=document.getElementById("replayProgress"),K=(f,c)=>{f&&f.classList.toggle("hidden",!c)},F=E==="playing",O=E==="paused";K(P,F),K(N,O),K(T,F||O),K(C,F||O),!F&&!O&&C&&(C.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(F||O)}function g(){b&&clearInterval(b),b=setInterval(async()=>{try{let E=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!E.ok)return;let P=await E.json(),N=document.getElementById("replayProgress");N&&(N.textContent=ServerI18n.t("replayingProgress").replace("{sent}",P.sent).replace("{total}",P.total)),y(P.state),P.state==="stopped"&&(clearInterval(b),b=null)}catch{}},500)}async function h(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),y("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function _(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),y("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function z(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),y("stopped"),b&&(clearInterval(b),b=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let S=null,A=null,m=0,R=null;function L(){[["replayPauseBtn",h],["replayResumeBtn",_],["replayStopBtn",z]].forEach(function([P,N]){let T=document.getElementById(P);T&&!T.dataset.replayCtrlsBound&&(T.addEventListener("click",N),T.dataset.replayCtrlsBound="1")})}async function $(){try{let E=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!E.ok)return;let P=await E.json();(P.state==="playing"||P.state==="paused")&&(y(P.state),g())}catch{}}window.AdminReplayControls={notifyStarted:function(){y("playing"),g()}},document.addEventListener("admin-panel-rendered",function(){L(),$()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(L,800)})})()});var pt=me(()=>{(function(){"use strict";let b="sec-ratelimit",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(S){return String(S).replace(/[&<>"']/g,function(A){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[A]})},g=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function h(){return`
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
          ${g.map(S=>`
            <div class="admin-ratelimit-row" data-rl-key="${S.key}">
              <div class="admin-ratelimit-row-head">
                <span class="admin-ratelimit-row-label">${y(ServerI18n.t(S.labelKey))}</span>
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
      </div>`}function _(S){let A=S.querySelector("#rlEnvExport");setTimeout(async()=>{try{let c=window.AdminBootstrap;c&&typeof c.primeBootstrap=="function"&&await c.primeBootstrap();let i=c&&c.bootstrapSection?c.bootstrapSection("history_stats"):null,a=c&&c.bootstrapSection?c.bootstrapSection("blacklist"):null,o=c&&c.bootstrapSection?c.bootstrapSection("metrics"):null,s=[];s.push(i?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),s.push(a?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),s.push(o?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[l,r,t]=await Promise.all(s),d=i||(l&&l.ok?await l.json():null);if(d){let k=d.stats&&d.stats.last_24h||0,w=d.stats&&d.stats.total||0,I=S.querySelector("[data-rl-sum-hits]"),B=S.querySelector("[data-rl-sum-hits-delta]");I&&(I.textContent=k.toLocaleString()),B&&(B.textContent=ServerI18n.t("ratelimitSumTotal",{n:w.toLocaleString()}))}let p=a||(r&&r.ok?await r.json():null);if(p){let k=Array.isArray(p)?p:p.entries||p.keywords||[],w=S.querySelector("[data-rl-sum-black]");w&&(w.textContent=k.length?ServerI18n.t("ratelimitCountUnit",{n:k.length}):"0")}let e=S.querySelector("[data-rl-sum-viol]"),n=S.querySelector("[data-rl-sum-viol-rate]"),u=S.querySelector("[data-rl-sum-locked]"),v=o||(t&&t.ok?await t.json():null);if(v){let k=v&&v.rate_limits;if(k&&k.totals){let w=k.totals.hits||0,I=k.totals.violations||0,B=k.totals.locked_sources||0;if(e&&(e.textContent=I.toLocaleString()),n){let H=w+I;n.textContent=H>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(I/H*100).toFixed(1)}):"\u2014"}u&&(u.textContent=ServerI18n.t("ratelimitLockedSources",{n:B.toLocaleString()})),g.forEach(({key:H})=>{let D=k[H],x=S.querySelector(`[data-rl-current="${H}"]`);if(x&&D){let U=(D.hits||0).toLocaleString(),G=(D.violations||0).toLocaleString();x.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:U,viol:G})}}),R(k)}else e&&(e.textContent="\u2014"),n&&(n.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014")}else e&&(e.textContent="\u2014"),n&&(n.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014");m(v&&v.recent_violations)}catch{}},4500);function m(c){let i=S.querySelector("[data-rl-vbody]"),a=S.querySelector("[data-rl-vcount]");if(!i)return;let o=Array.isArray(c)?c:[];if(a&&(a.textContent=ServerI18n.t("ratelimitViolationsCount",{n:o.length})),o.length===0){i.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let s=r=>{let t=new Date(r*1e3),d=p=>String(p).padStart(2,"0");return`${d(t.getHours())}:${d(t.getMinutes())}:${d(t.getSeconds())}`},l=r=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[r]||"var(--color-text-muted)";i.innerHTML=o.slice(0,30).map(r=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${s(r.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${l(r.scope)}">${(r.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${y(r.ip||"")}</span>
        </div>
      `).join("")}function R(c){c&&g.forEach(({key:i})=>{let a=c[i],o=S.querySelector(`[data-rl-suggest="${i}"]`);if(!o)return;let s=a&&a.suggestion;if(!s){o.hidden=!0;return}let l=o.querySelector("[data-rl-suggest-detail]");l&&(l.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(s.p95_per_second||0).toFixed(2),limit:a.limit||"\u2014",window:a.window||"\u2014",suggLimit:s.suggested_limit,suggWindow:s.suggested_window}));let r=o.querySelector("[data-rl-apply]");r&&(r.dataset.rlSuggestLimit=String(s.suggested_limit),r.dataset.rlSuggestWindow=String(s.suggested_window)),o.hidden=!1})}async function L(){try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let i=await c.json(),a=i&&i.rate_limits;if(!a)return;g.forEach(({key:o})=>{let s=a[o],l=S.querySelector(`[data-rl-current="${o}"]`);if(l&&s){let r=(s.hits||0).toLocaleString(),t=(s.violations||0).toLocaleString();l.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:r,viol:t})}}),R(a)}catch{}}S.addEventListener("click",async c=>{let i=c.target.closest("[data-rl-action]");if(!i)return;let a=i.dataset.rlAction;if(a==="save"){let o=i.dataset.rlSave,s=S.querySelector(`[data-rl-limit="${o}"]`),l=S.querySelector(`[data-rl-window="${o}"]`);if(!s||!l)return;let r=parseInt(s.value,10),t=parseInt(l.value,10);if(!Number.isFinite(r)||!Number.isFinite(t)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let d=i.textContent;i.disabled=!0,i.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let p=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:o,limit:r,window:t})});if(p.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:o.toUpperCase(),limit:r,window:t}),!0),L();else{let e=await p.json().catch(()=>({})),n=e&&e.error||`HTTP ${p.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:n}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{i.disabled=!1,i.textContent=d}return}if(a==="apply-suggest"){let o=i.dataset.rlApply,s=parseInt(i.dataset.rlSuggestLimit,10),l=parseInt(i.dataset.rlSuggestWindow,10);if(!o||!Number.isFinite(s)||!Number.isFinite(l))return;let r=i.textContent;i.disabled=!0,i.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let t=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:o,limit:s,window:l})});if(t.ok){let d=S.querySelector(`[data-rl-limit="${o}"]`),p=S.querySelector(`[data-rl-window="${o}"]`);d&&(d.value=s),p&&(p.value=l),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:o.toUpperCase(),limit:s,window:l}),!0),L(),$()}else{let d=await t.json().catch(()=>({})),p=d&&d.error||`HTTP ${t.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:p}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{i.disabled=!1,i.textContent=r}return}if(a==="export"){let o=[];S.querySelectorAll("[data-rl-limit]").forEach(s=>{let l=s.dataset.rlLimit.toUpperCase();o.push(`${l}_RATE_LIMIT=${s.value}`)}),S.querySelectorAll("[data-rl-window]").forEach(s=>{let l=s.dataset.rlWindow.toUpperCase();o.push(`${l}_RATE_WINDOW=${s.value}`)}),A.textContent=o.join(`
`),A.hidden=!1;try{navigator.clipboard?.writeText(o.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else a==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([s,[l,r]])=>{let t=S.querySelector(`[data-rl-limit="${s}"]`),d=S.querySelector(`[data-rl-window="${s}"]`);t&&(t.value=l),d&&(d.value=r)}),A.hidden=!0,$())});function $(){g.forEach(({key:c})=>{let i=S.querySelector(`[data-rl-limit="${c}"]`),a=S.querySelector(`[data-rl-window="${c}"]`),o=S.querySelector(`[data-rl-lockout="${c}"]`),s=S.querySelector(`[data-rl-effective="${c}"]`);if(!i||!a||!s)return;let l=parseInt(i.value,10)||0,r=parseInt(a.value,10)||1,t=(l/r).toFixed(2),d=Math.round(l*1.5),p=`effective_rate = ${l} / ${r}s = ${t} req/s \xB7 burst = ${d}`;if(c==="login"&&o){let e=parseInt(o.value,10)||0;p+=` \xB7 lock = ${e}s`}s.textContent=p})}S.addEventListener("input",c=>{let i=c.target;!i||!i.dataset.rlLimit&&!i.dataset.rlLockout||$()}),S.addEventListener("change",c=>{let i=c.target;!i||!i.dataset.rlWindow||$()}),$();function E(c,i){if(!c||!Array.isArray(i))return;let a=96,o=24,s=i.length?i:new Array(24).fill(0),l=Math.max(1,...s),r=a/Math.max(1,s.length-1),t=s.map((p,e)=>`${(e*r).toFixed(1)},${(o-2-p/l*(o-4)).toFixed(1)}`).join(" "),d=c.querySelector("polyline");d&&d.setAttribute("points",t)}g.forEach(({key:c})=>{let i=S.querySelector(`[data-rl-spark="${c}"]`);i&&E(i,new Array(24).fill(0))});let P=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,N={allowlist:[],denylist:[]},T={input:S.querySelector("[data-rl-ip-input]"),select:S.querySelector("[data-rl-ip-select]"),addBtn:S.querySelector("[data-rl-ip-add]"),summary:S.querySelector("[data-rl-ip-summary]"),error:S.querySelector("[data-rl-ip-error]"),allowCount:S.querySelector("[data-rl-ip-allow-count]"),denyCount:S.querySelector("[data-rl-ip-deny-count]"),allowBody:S.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:S.querySelector('[data-rl-ip-body="denylist"]')};function C(c){if(T.error){if(!c){T.error.hidden=!0,T.error.textContent="";return}T.error.hidden=!1,T.error.textContent=c}}function K(c){let i=c==="allowlist"?T.allowBody:T.denyBody,a=c==="allowlist"?T.allowCount:T.denyCount;if(!i||!a)return;let o=Array.isArray(N[c])?N[c]:[];if(a.textContent=String(o.length),o.length===0){let s=ServerI18n.t(c==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");i.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:s})}</div>`;return}i.innerHTML=o.map(s=>{let l=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:y(s)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${y(s)}">
          <span class="admin-ratelimit-ip-chip-cidr">${y(s)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${y(s)}" data-rl-ip-remove-kind="${c}" title="${l}" aria-label="${l}">\xD7</button>
        </div>
      `}).join("")}function F(){if(K("allowlist"),K("denylist"),T.summary){let c=(N.allowlist||[]).length,i=(N.denylist||[]).length;T.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:c,deny:i})}}async function O(){try{let c=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!c.ok){T.summary&&(T.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:c.status}));return}let i=await c.json();i&&typeof i=="object"&&(N={allowlist:Array.isArray(i.allowlist)?i.allowlist:[],denylist:Array.isArray(i.denylist)?i.denylist:[]},F())}catch{T.summary&&(T.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function f(c,{toastLabel:i}={}){try{let a=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(a.ok){let l=await a.json();return N={allowlist:Array.isArray(l.allowlist)?l.allowlist:[],denylist:Array.isArray(l.denylist)?l.denylist:[]},F(),C(""),i&&typeof showToast=="function"&&showToast(i,!0),!0}let o=await a.json().catch(()=>({})),s=o&&o.error||`HTTP ${a.status}`;return C(s),!1}catch{return C(ServerI18n.t("ratelimitNetworkError")),!1}}T.addBtn&&T.addBtn.addEventListener("click",async()=>{if(!T.input||!T.select)return;let c=(T.input.value||"").trim();if(!c){C(ServerI18n.t("ratelimitIpRequiredError"));return}if(!P.test(c)){C(ServerI18n.t("ratelimitIpFormatError"));return}let i=T.select.value==="denylist"?"denylist":"allowlist",a=Array.from(new Set([...N[i]||[],c]));await f({[i]:a},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(i==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:c})})&&(T.input.value="")}),T.input&&(T.input.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),T.addBtn&&T.addBtn.click())}),T.input.addEventListener("input",()=>{T.error&&!T.error.hidden&&C("")})),S.addEventListener("click",async c=>{let i=c.target.closest("[data-rl-ip-remove]");if(!i)return;let a=i.dataset.rlIpRemove,o=i.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",s=(N[o]||[]).filter(l=>l!==a);await f({[o]:s},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(o==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:a})})}),O(),setTimeout(async()=>{try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let i=await c.json(),a=i&&i.rate_limits;if(!a)return;g.forEach(({key:o})=>{let s=a[o]&&(a[o].bucket_history||a[o].history);if(Array.isArray(s)&&s.length){let l=S.querySelector(`[data-rl-spark="${o}"]`);l&&E(l,s.slice(-24))}})}catch{}},5500)}function z(){let S=document.getElementById("settings-grid");if(!S||document.getElementById(b))return;S.insertAdjacentHTML("beforeend",h());let A=document.getElementById(b);A&&_(A)}document.addEventListener("admin-panel-rendered",z),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&z()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),z()})})()});var vt=me(()=>{(function(){"use strict";let b="sec-viewer-theme",y="danmu.viewerTheme.v1",g=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function h(){return`
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
      </div>`}let _=/^#[0-9a-f]{6}$/i,z=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function S(L){return String(L??"").replace(/[&<>"']/g,$=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[$])}function A(L){let $={};return!L||typeof L!="object"||(["bg","primary","hero"].forEach(E=>{typeof L[E]=="string"&&_.test(L[E])&&($[E]=L[E])}),(L.mode==="dark"||L.mode==="light")&&($.mode=L.mode),typeof L.font=="string"&&/^[\w .-]{1,64}$/.test(L.font)&&($.font=L.font),(L.logo===null||typeof L.logo=="string"&&z.test(L.logo))&&($.logo=L.logo)),$}function m(L){let $={...g[0],logo:null};try{let e=localStorage.getItem(y);e&&($={...$,...A(JSON.parse(e))})}catch{}let E="default";function P(){try{localStorage.setItem(y,JSON.stringify($))}catch{}}function N(e){let n=/^#?([0-9a-f]{6})$/i.exec(e);if(!n)return[0,0,0];let u=parseInt(n[1],16);return[u>>16&255,u>>8&255,u&255]}function T([e,n,u]){let v=[e,n,u].map(k=>(k/=255,k<=.03928?k/12.92:Math.pow((k+.055)/1.055,2.4)));return .2126*v[0]+.7152*v[1]+.0722*v[2]}function C(e,n){let u=T(N(e)),v=T(N(n)),[k,w]=u>v?[u,v]:[v,u];return(k+.05)/(w+.05)}function K(e){return e>=7?{label:"AAA",cls:"is-good"}:e>=4.5?{label:"AA",cls:"is-ok"}:e>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function F(){let e=L.querySelector("[data-vt-presets]");e.innerHTML="",g.forEach(n=>{let u=document.createElement("button");u.type="button",u.className="admin-vt-preset"+(E===n.id?" is-active":""),u.innerHTML=`
          <div class="swatch" style="background:${n.bg}">
            <span style="background:${n.primary}"></span>
            <span style="background:${n.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(n.nameKey)}</div>
          <div class="mode">${ServerI18n.t(n.mode==="dark"?"lbDark":"lbLight")}</div>
        `,u.addEventListener("click",()=>{$={...$,...n},E=n.id,P(),p()}),e.appendChild(u)})}function O(){L.querySelectorAll("[data-vt-mode-btn]").forEach(e=>{e.classList.toggle("is-active",$.mode===e.dataset.vtModeBtn)})}function f(){let e=L.querySelector("[data-vt-colors]"),n=$.mode==="dark"?"#F8FAFC":"#0F172A",u=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:n,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:$.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:$.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];e.innerHTML=u.map(v=>{let k=C($[v.key],v.vs),w=K(k),I=S($[v.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${I}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${v.label}</span>
                <span class="grade ${w.cls}">${w.label} \xB7 ${k.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${I}" data-vt-color="${v.key}" />
                <input type="text" value="${I}" data-vt-hex="${v.key}" spellcheck="false" />
                <span class="vs">vs ${v.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function c(){let e=L.querySelector("[data-vt-logo-preview]"),n=L.querySelector(".hint-empty"),u=L.querySelector("[data-vt-logo-actions]");$.logo?(e.src=$.logo,e.hidden=!1,n.style.display="none",u.hidden=!1):(e.hidden=!0,n.style.display="",u.hidden=!0)}function i(){let e=L.querySelector("[data-vt-font]");e.value=$.font;let n=L.querySelector("[data-vt-font-specimen]");n.style.fontFamily=$.font}function a(){let e=$.mode==="dark"?"#F8FAFC":"#0F172A",n=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:C(e,$.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:C($.primary,$.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:C($.hero,$.bg)}];L.querySelector("[data-vt-contrast]").innerHTML=n.map(u=>{let v=K(u.ratio);return`<span class="vt-contrast-chip ${v.cls}">${u.lbl} \xB7 ${v.label} ${u.ratio.toFixed(1)}</span>`}).join("")}function o(){let e=L.querySelector("[data-vt-stage]"),n=$.mode==="dark"?"#F8FAFC":"#0F172A";e.style.setProperty("--vt-bg",$.bg),e.style.setProperty("--vt-primary",$.primary),e.style.setProperty("--vt-hero",$.hero),e.style.setProperty("--vt-fg",n),e.style.fontFamily=$.font;let u=L.querySelector("[data-vt-preview-logo]");if($.logo){let v=document.createElement("img");v.src=$.logo,v.style.maxHeight="40px",u.replaceChildren(v)}else u.textContent="Danmu Fire"}let s="auto",l="auto";function r(){L.querySelectorAll("[data-vt-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.vtThemeBtn===s)}),L.querySelectorAll("[data-vt-lang-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.vtLangBtn===l)})}async function t(){try{let e=await fetch("/get_settings",{credentials:"same-origin"});if(!e.ok)return;let n=await e.json(),u=n&&n.ViewerThemeMode&&n.ViewerThemeMode[1],v=n&&n.ViewerLangMode&&n.ViewerLangMode[1];typeof u=="string"&&(s=u),typeof v=="string"&&(l=v),r()}catch{}}async function d(e,n){if(window.csrfFetch)try{let u=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:e,value:n,index:1})});if(!u.ok)throw new Error(u.status);window.showToast&&window.showToast(`${e} = ${n}`,!0)}catch(u){console.warn("[admin-viewer-theme] force-mode update failed:",u),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:e}),!1)}}function p(){F(),O(),f(),c(),i(),a(),o(),r()}L.addEventListener("input",e=>{if(e.target.matches("[data-vt-color]")){let n=e.target.dataset.vtColor;_.test(e.target.value)&&($[n]=e.target.value,E="custom",P(),p())}else if(e.target.matches("[data-vt-hex]")){let n=e.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(e.target.value)&&($[n]=e.target.value,E="custom",P(),p())}else e.target.matches("[data-vt-font]")&&($.font=e.target.value,P(),p())}),L.addEventListener("change",e=>{if(e.target.matches("[data-vt-logo-input]")){let n=e.target.files&&e.target.files[0];if(!n)return;if(n.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let u=new FileReader;u.onload=()=>{$.logo=String(u.result||""),P(),p()},u.readAsDataURL(n)}}),L.addEventListener("click",e=>{let n=e.target.closest("[data-vt-mode-btn]");if(n){$.mode=n.dataset.vtModeBtn,E="custom",P(),p();return}let u=e.target.closest("[data-vt-theme-btn]");if(u){s=u.dataset.vtThemeBtn,r(),d("ViewerThemeMode",s);return}let v=e.target.closest("[data-vt-lang-btn]");if(v){l=v.dataset.vtLangBtn,r(),d("ViewerLangMode",l);return}if(e.target.closest("[data-vt-logo-remove]")){$.logo=null,P(),p();return}let w=e.target.closest("[data-vt-device-btn]");if(w){L.querySelectorAll("[data-vt-device-btn]").forEach(B=>B.classList.toggle("is-active",B===w)),L.querySelector("[data-vt-frame]").dataset.device=w.dataset.vtDeviceBtn;return}let I=e.target.closest("[data-vt-action]");I&&I.dataset.vtAction==="reset"&&($={...g[0],logo:null},E="default",P(),p())}),p(),t()}document.addEventListener("click",function(L){let $=L.target.closest("[data-vt-jump]");if(!$)return;let E=$.dataset.vtJump;if(E){L.preventDefault();try{location.hash="#/"+E}catch{}}});function R(){let L=document.getElementById("settings-grid");if(!L||document.getElementById(b))return;L.insertAdjacentHTML("beforeend",h());let $=document.getElementById(b);$&&m($)}document.addEventListener("admin-panel-rendered",R),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&R()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),R()})})()});var ft=me(()=>{(function(){"use strict";let b="sec-system-overview";function y(){return`
      <div id="${b}" class="admin-soh-v4 hud-page-stack lg:col-span-2" data-tpl="A">
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
      </div>`}function g(A){let m=Math.floor(A/86400),R=Math.floor(A%86400/3600),L=Math.floor(A%3600/60);return m>0?`${m}d ${String(R).padStart(2,"0")}h ${String(L).padStart(2,"0")}m`:R>0?`${R}h ${String(L).padStart(2,"0")}m`:`${L}m ${String(A%60).padStart(2,"0")}s`}function h(A,m,R){let L=document.querySelector(`[data-m="${A}"]`);if(!L)return;let $=L.querySelector("[data-m-v]");$&&($.textContent=m);let E=L.querySelector("[data-m-sub]");E&&(E.textContent=R||"")}function _(A){let m=document.querySelector("[data-soh-banner-dot]"),R=document.querySelector("[data-soh-banner-title]"),L=document.querySelector("[data-soh-chip]"),E=!(A.queue_size!=null&&A.queue_capacity!=null&&A.queue_size>=A.queue_capacity);L&&L.classList.toggle("is-warn",!E),m&&m.classList.toggle("is-warn",!E),R&&(R.textContent=E?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function z(){(async()=>{try{let R=await window.csrfFetch("/admin/metrics");if(!R.ok)return;let L=await R.json(),$=O=>Array.isArray(O)&&O.length?O[O.length-1]:null,E=L.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-L.server_started_at)):0;h("uptime",E>0?g(E):"\u2014","");let P=null;try{let O=await fetch("/admin/audience/stats",{credentials:"same-origin"});O.ok&&(P=(await O.json()).total_live)}catch{}let N=L.ws_clients??0;h("conn",String(N+(P||0)),P==null?ServerI18n.t("sohConnOverlaysOnly",{n:N}):ServerI18n.t("sohConnBreakdown",{overlays:N,viewers:P}));let T=$(L.mem_series||[]),C=L.mem_total_mb?(L.mem_total_mb/1024).toFixed(0):null;h("ram",T!=null?`${Number(T).toFixed(0)}%`:"\u2014",C?ServerI18n.t("sohMemorySub",{total:C}):"");let K=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";h("ver",`v${K}`,ServerI18n.t("sohVersionSub")),_(L);let F=document.querySelector('[data-soh-sub="integrations"]');F&&(F.textContent=ServerI18n.t("sohLinkExtSub",{webhooks:L.webhooks_count??0,plugins:L.plugins_loaded??0}));try{let O=await window.csrfFetch("/admin/ws-auth");if(O.ok){let f=await O.json(),c=document.querySelector('[data-soh-sub="security"]');c&&(c.textContent=f.require_token?ServerI18n.t("sohLinkSecurityOn"):ServerI18n.t("sohLinkSecurityOff"))}}catch{}}catch{}})();let A=document.getElementById(b);if(!A)return;let m=()=>{let R=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";A.querySelectorAll("[data-soh-mode]").forEach(L=>{let $=L.dataset.sohMode===R;L.classList.toggle("is-active",$),L.setAttribute("aria-pressed",$?"true":"false")})};m(),document.addEventListener("admin:theme-mode",m),A.addEventListener("click",function(R){let L=R.target.closest("[data-soh-mode]");if(L){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(L.dataset.sohMode),m();return}let $=R.target.closest("[data-soh-action]");if(!(!$||$.disabled)){if($.dataset.sohAction==="copy-url"){let E=document.getElementById("sysoPublicUrl")?.textContent||"";navigator.clipboard?.writeText(E).then(()=>window.showToast&&window.showToast(ServerI18n.t("sohCopied"),!0),()=>window.showToast&&window.showToast(ServerI18n.t("sohCopyFailed"),!1));return}if($.dataset.sohAction==="show-qr"){let E=A.querySelector("[data-soh-qr]");if(!E)return;if(!E.hidden){E.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(P=>P.ok?P.json():Promise.reject(P)).then(P=>{E.innerHTML=P.svg,E.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function S(){let A=document.getElementById("settings-grid");!A||document.getElementById(b)||(A.insertAdjacentHTML("beforeend",y()),document.getElementById(b)&&z())}document.addEventListener("admin-panel-rendered",S),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&S()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),S()})})()});var ht=me(()=>{(function(){"use strict";let b="sec-polls",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(z){return String(z).replace(/[&<>"']/g,function(S){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[S]})};function g(){return`
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
  `}function h(){let z=document.getElementById("sec-polls");if(!z)return;let S=z.querySelector("[data-poll-queue]"),A=z.querySelector("[data-poll-editor]"),m=z.querySelector("[data-poll-view-builder]"),R=z.querySelector("[data-poll-view-live]"),L=z.querySelector("[data-poll-view-results]"),$="danmu.adminPollQueue.v2";function E(){return"q_"+Math.random().toString(36).slice(2,8)}function P(){return"o_"+Math.random().toString(36).slice(2,6)}function N(W){return{id:P(),label:"",img:""}}function T(){return{id:E(),text:"",timer:90,multi:!1,crop:"16:9",image_url:"",server_q_id:"",options:[N("A"),N("B")]}}let C=null,K="builder",F=null,O=0,f={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},c=null,i=[];try{let W=localStorage.getItem($);if(W){let X=JSON.parse(W);Array.isArray(X)?i=X:X&&Array.isArray(X.queue)&&(i=X.queue)}}catch{}(!Array.isArray(i)||i.length===0)&&(i=[T()]),i.forEach(W=>{typeof W.image_url!="string"&&(W.image_url=""),typeof W.server_q_id!="string"&&(W.server_q_id="")});let a=i[0].id,o="manual",s=null,l=null,r={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function t(){try{localStorage.setItem($,JSON.stringify({queue:i,activeId:a,mode:o}))}catch{}}function d(W){return i.find(X=>X.id===W)}function p(W,X){let ee=d(W);ee&&Object.assign(ee,X)}function e(W,X,ee){let se=W.slice(),[Q]=se.splice(X,1);return se.splice(ee,0,Q),se}function n(){S.innerHTML="",i.forEach((W,X)=>{let ee=document.createElement("div");ee.className="admin-poll-qrow",W.id===a&&ee.classList.add("is-active");let se=r.active&&r.currentIndex===X;se&&ee.classList.add("is-running"),ee.dataset.qid=W.id,ee.draggable=!0;let Q=!!W.image_url||W.options.some(ae=>ae.img);ee.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${X+1}</span>
            <div class="info">
              <div class="text">${y(W.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:W.options.length})} \xB7 ${W.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):W.timer+"s"} \xB7 ${Q?ServerI18n.t("pollBuilderHasImageCrop",{crop:W.crop}):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${se?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":W.id===a?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,S.appendChild(ee)})}function u(){let W=d(a)||i[0];if(!W){A.innerHTML="";return}let X=i.indexOf(W);A.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${X+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:X+1})}</span>
            </div>
            <span class="progress">Q${X+1} / ${i.length}</span>
          </div>

          <div class="admin-poll-field-label">${ServerI18n.t("pollQuestion")}</div>
          <input type="text" class="admin-poll-q-text" data-ed-text value="${y(W.text||"")}" placeholder="${ServerI18n.t("pollBuilderQuestionPlaceholder")}" maxlength="200" />

          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderFieldQuestionImage")}</div>
          <div class="admin-poll-q-image">
            ${W.image_url?`
              <img class="admin-poll-q-image-thumb" src="${y(W.image_url)}" alt="" />
              <button type="button" class="admin-ui-action is-danger admin-poll-editor-action" data-ed-action="remove-q-image">${ServerI18n.t("pollBuilderRemoveImage")}</button>
            `:`
              <button type="button" class="admin-ui-action admin-poll-editor-action" data-ed-action="upload-q-image">${ServerI18n.t("pollBuilderUploadImageBtn")}</button>
              <input type="file" data-ed-q-image-input accept="image/jpeg,image/png,image/webp" hidden />
            `}
          </div>

          <div class="admin-poll-crop" data-ed-crop-row>
            <span class="crop-label">${ServerI18n.t("pollBuilderCropLabel")}</span>
            ${["16:9","1:1","4:3"].map(ee=>`
              <button type="button" data-ed-crop="${ee}" class="${W.crop===ee?"is-active":""}">${ee}</button>
            `).join("")}
            <span class="crop-note">${ServerI18n.t("pollBuilderCropApplyNote")}</span>
          </div>

          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderOptionsFieldLabel")}</div>
          <div class="admin-poll-opts" data-ed-opts>
            ${W.options.map((ee,se)=>`
              <div class="admin-poll-opt" data-oid="${ee.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+se)}</span>
                <button type="button" class="opt-img-toggle ${ee.img?"is-on":""}" data-ed-opt-img="${ee.id}" title="${ServerI18n.t("pollBuilderToggleImageTitle")}">
                  ${ee.img?'<span class="img-on">\u{1F5BC}</span>':`<span class="img-off">${ServerI18n.t("pollBuilderAddImageShort")}</span>`}
                </button>
                <input type="text" data-ed-opt-text="${ee.id}" value="${y(ee.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+se)})}" maxlength="100" />
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
        `}function v(){C&&C.active?K="live":F?K="results":K="builder",z.dataset.pollView=K,m.hidden=K!=="builder",R.hidden=K!=="live",L.hidden=K!=="results",n(),u(),Y(),K==="live"?H():K==="results"&&x(),K==="live"?k():w()}function k(){c||(c=setInterval(()=>{K!=="live"||!C||!C.active||D()},1e3))}function w(){c&&(clearInterval(c),c=null)}function I(W,X){if(!W||!W.time_limit_seconds)return null;if(!X)return W.time_limit_seconds;let ee=Date.now()/1e3-X;return Math.max(0,Math.round(W.time_limit_seconds-ee))}function B(W){if(W==null)return"\u221E";let X=String(Math.floor(W/60)).padStart(2,"0"),ee=String(W%60).padStart(2,"0");return`${X}:${ee}`}function H(){if(!C||!C.questions||C.questions.length===0){R.innerHTML="";return}let W=C.current_index>=0?C.current_index:0,X=C.questions.length,ee=C.questions[W],se=I(ee,C.started_at),Q=ee.time_limit_seconds||0,ae=Q>0&&se!=null?Math.max(0,Math.min(1,se/Q)):1,ie=Q>0&&se!=null&&se<=Math.max(5,Q*.15),ce=ee.options.reduce((ue,j)=>ue+(j.count||0),0),ye=[...ee.options].sort((ue,j)=>(j.count||0)-(ue.count||0)),we=ye[0]?ye[0].count:0,Se=C.questions[W+1],_e=110,Ie=_e/2-6,de=2*Math.PI*Ie,ve=de*ae;R.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${y((C.poll_id||"").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  ${ServerI18n.t("pollBuilderLiveQuestionProgress",{idx:`<strong>${W+1}</strong>`,total:X})}
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${_e} ${_e}" width="56" height="56">
                      <circle cx="${_e/2}" cy="${_e/2}" r="${Ie}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${_e/2}" cy="${_e/2}" r="${Ie}" fill="none"
                        stroke="${ie?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${ve} ${de}" stroke-linecap="round"
                        transform="rotate(-90 ${_e/2} ${_e/2})"
                        style="filter: drop-shadow(0 0 4px ${ie?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${ie?"is-low":""}" data-live-mmss>${se==null?ServerI18n.t("pollBuilderNoTimeLimit"):B(se)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:W+1})}</div>
                <div class="text">${y(ee.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${ye.map(ue=>{let j=ce>0?ue.count/ce*100:0,J=(ue.count||0)>0&&ue.count===we;return`
                    <div class="admin-polls-live-bar ${J?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${y(ue.key)}</span>
                        <span class="lbl">${y(ue.text||"")}</span>
                        ${J?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${j.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:ue.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${j.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${ce}</strong>`})}</span>
                ${Se?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${y(Se.text||"")}</em>`})}</span>`:""}
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
                  ${C.questions.map((ue,j)=>{let J=j<W?"done":j===W?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${J}">
                        <span class="idx">${J==="done"?"\u2713":j+1}</span>
                        <span class="t">${y(ue.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
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
                  ${[{k:"showResults",label:ServerI18n.t("pollBuilderToggleShowResults")},{k:"showTotals",label:ServerI18n.t("pollBuilderToggleShowTotals")},{k:"autoAdvance",label:ServerI18n.t("pollBuilderAutoAdvanceDesc")},{k:"anonymous",label:ServerI18n.t("pollBuilderToggleAnonymous")}].map(ue=>`
                    <label class="admin-polls-live-toggle ${f[ue.k]?"is-on":""}" data-live-toggle="${ue.k}">
                      <span class="lbl">${ue.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function D(){if(!C||!C.active)return;let W=C.current_index>=0?C.current_index:0,X=C.questions[W];if(!X)return;let ee=I(X,C.started_at),se=X.time_limit_seconds||0,Q=R.querySelector("[data-live-mmss]"),ae=R.querySelector("[data-live-ring]");if(Q&&(Q.textContent=ee==null?ServerI18n.t("pollBuilderNoTimeLimit"):B(ee),Q.classList.toggle("is-low",se>0&&ee!=null&&ee<=Math.max(5,se*.15))),ae&&se>0&&ee!=null){let ie=+ae.getAttribute("r"),ce=2*Math.PI*ie,ye=Math.max(0,Math.min(1,ee/se));ae.setAttribute("stroke-dasharray",`${ce*ye} ${ce}`);let we=ee<=Math.max(5,se*.15);ae.setAttribute("stroke",we?"var(--hud-crimson)":"var(--color-primary)"),ae.style.filter=`drop-shadow(0 0 4px ${we?"var(--hud-crimson)":"var(--color-primary)"})`}f.autoAdvance&&se>0&&ee===0&&(W>=C.questions.length-1?V():q())}function x(){let W=F;if(!W||!W.questions||W.questions.length===0){L.innerHTML="";return}let X=W.questions.length,ee=Math.max(0,Math.min(O,X-1)),se=W.questions[ee],Q=se.options.reduce((de,ve)=>de+(ve.count||0),0),ae=[...se.options].sort((de,ve)=>(ve.count||0)-(de.count||0)),ie=ae[0]||{key:"-",text:"\u2014",count:0},ce=ae[1],ye=Q>0?ie.count/Q*100:0,we=ce?Math.max(0,ie.count-ce.count):ie.count,Se=W.started_at||0,_e=W.ended_at||Date.now()/1e3,Ie=Math.max(0,Math.round(_e-Se));L.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${X>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${W.questions.map((de,ve)=>`
                    <button type="button" role="tab" class="${ve===ee?"is-active":""}" data-results-tab="${ve}">
                      Q${ve+1}<span class="t">${y((de.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${ee+1}/${X} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:B(Ie),n:Q})}</span>
                </div>
                <div class="text">${y(se.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${y(ie.key)}</div>
                <div class="info">
                  <div class="lbl">${y(ie.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:ie.count})} \xB7 ${ye.toFixed(1)}% ${ce?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:we}):""}</div>
                </div>
                <div class="pct">${ye.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:Q})}</span>
                </div>
                ${ae.map((de,ve)=>{let ue=Q>0?de.count/Q*100:0;return`
                    <div class="admin-polls-results-bar ${ve===0&&de.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${ve+1}</span>
                        <span class="tag">${y(de.key)}</span>
                        <span class="lbl">${y(de.text||"")}</span>
                        <span class="pct">${ue.toFixed(1)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:de.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${ue.toFixed(1)}%"></div></div>
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
                  <span>${ServerI18n.t("pollBuilderOptionsCountLabel",{n:se.options.length})}</span>
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${se.time_limit_seconds?B(se.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${W.started_at?new Date(W.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${W.ended_at?new Date(W.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${B(Ie)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let de=Math.max(1,...ae.map(ve=>ve.count));return ae.map(ve=>`<div class="bar" style="height:${Math.max(6,ve.count/de*100)}%"></div>`).join("")})()}
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
        `}function U(W){let X=[["question_index","question","option_key","option_text","count","percentage"]];return W.questions.forEach((ee,se)=>{let Q=ee.options.reduce((ae,ie)=>ae+(ie.count||0),0);ee.options.forEach(ae=>{let ie=Q>0?(ae.count/Q*100).toFixed(1):"0";X.push([se+1,ee.text,ae.key,ae.text,ae.count,ie])})}),X.map(ee=>ee.map(se=>{let Q=String(se??"");return/[",\n]/.test(Q)?`"${Q.replace(/"/g,'""')}"`:Q}).join(",")).join(`
`)}function G(W,X,ee){let se=new Blob([ee],{type:X}),Q=document.createElement("a");Q.href=URL.createObjectURL(se),Q.download=W,document.body.appendChild(Q),Q.click(),setTimeout(()=>{URL.revokeObjectURL(Q.href),Q.remove()},0)}z.addEventListener("click",W=>{let X=W.target.closest("[data-live-action]");if(X){let ae=X.dataset.liveAction;ae==="advance"?q():ae==="end"?V():ae==="pause"&&(f.autoAdvance=!1,H());return}let ee=W.target.closest("[data-live-toggle]");if(ee){let ae=ee.dataset.liveToggle;ae in f&&(f[ae]=!f[ae],ee.classList.toggle("is-on",f[ae]));return}let se=W.target.closest("[data-results-tab]");if(se){O=+se.dataset.resultsTab||0,x();return}let Q=W.target.closest("[data-results-action]");if(Q){let ae=Q.dataset.resultsAction,ie=F;if(!ie)return;if(ae==="copy"){let ce=ie.questions.map((ye,we)=>{let Se=ye.options.reduce((Ie,de)=>Ie+(de.count||0),0),_e=ye.options.map(Ie=>{let de=Se>0?(Ie.count/Se*100).toFixed(1):"0.0";return`  ${Ie.key}. ${Ie.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:Ie.count})} (${de}%)`});return`Q${we+1}: ${ye.text}
${_e.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(ce)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else ae==="csv"?G(`poll_${(ie.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",U(ie)):ae==="json"?G(`poll_${(ie.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(ie,null,2)):ae==="reset"&&(F=null,O=0,v());return}}),S.addEventListener("dragstart",W=>{let X=W.target.closest(".admin-poll-qrow");X&&(s=X.dataset.qid,X.classList.add("is-dragging"))}),S.addEventListener("dragend",W=>{let X=W.target.closest(".admin-poll-qrow");X&&X.classList.remove("is-dragging"),s=null,S.querySelectorAll(".is-drag-over").forEach(ee=>ee.classList.remove("is-drag-over"))}),S.addEventListener("dragover",W=>{W.preventDefault();let X=W.target.closest(".admin-poll-qrow");!X||!s||X.dataset.qid===s||(S.querySelectorAll(".is-drag-over").forEach(ee=>ee.classList.remove("is-drag-over")),X.classList.add("is-drag-over"))}),S.addEventListener("drop",W=>{W.preventDefault();let X=W.target.closest(".admin-poll-qrow");if(!X||!s)return;let ee=i.findIndex(Q=>Q.id===s),se=i.findIndex(Q=>Q.id===X.dataset.qid);ee<0||se<0||ee===se||(i=e(i,ee,se),t(),v())}),S.addEventListener("click",W=>{let X=W.target.closest(".admin-poll-qrow");X&&(a=X.dataset.qid,t(),v())}),A.addEventListener("input",W=>{let X=d(a);if(X){if(W.target.matches("[data-ed-text]")){X.text=W.target.value,t(),n();return}if(W.target.matches("[data-ed-opt-text]")){let ee=W.target.dataset.edOptText,se=X.options.find(Q=>Q.id===ee);se&&(se.label=W.target.value,t(),n())}}}),A.addEventListener("change",W=>{let X=d(a);X&&(W.target.matches("[data-ed-timer]")?(X.timer=+W.target.value,t(),n()):W.target.matches("[data-ed-multi]")&&(X.multi=W.target.checked,t()))}),A.addEventListener("click",async W=>{let X=d(a);if(!X)return;let ee=W.target.closest("[data-ed-crop]");if(ee){X.crop=ee.dataset.edCrop,t(),u();return}let se=W.target.closest("[data-ed-opt-img]");if(se){let ie=X.options.find(ce=>ce.id===se.dataset.edOptImg);ie&&(ie.img=ie.img?"":"placeholder",t(),u());return}let Q=W.target.closest("[data-ed-opt-remove]");if(Q){let ie=Q.dataset.edOptRemove;X.options.length>2&&(X.options=X.options.filter(ce=>ce.id!==ie),t(),u(),n());return}if(W.target.closest("[data-ed-opt-add]")){X.options.length<6&&(X.options.push(N()),t(),u(),n());return}let ae=W.target.closest("[data-ed-action]");if(ae)if(ae.dataset.edAction==="remove-q"){if(i.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let ce=i.findIndex(ye=>ye.id===a);i=i.filter(ye=>ye.id!==a),a=i[Math.min(ce,i.length-1)].id,t(),v()}}else if(ae.dataset.edAction==="upload-q-image"){let ie=A.querySelector("[data-ed-q-image-input]");ie&&ie.click()}else ae.dataset.edAction==="remove-q-image"&&(X.image_url="",t(),u(),n())}),A.addEventListener("change",async W=>{if(!W.target.matches("[data-ed-q-image-input]"))return;let X=W.target.files&&W.target.files[0];if(!X)return;let ee=d(a);if(!ee)return;if(!r.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),W.target.value="";return}if(!ee.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),W.target.value="";return}if(X.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),W.target.value="";return}let se=new FormData;se.append("file",X);try{let Q=await csrfFetch(`/admin/poll/${encodeURIComponent(r.pollId)}/upload-image/${encodeURIComponent(ee.server_q_id)}`,{method:"POST",body:se}),ae=await Q.json().catch(()=>({}));if(!Q.ok)throw new Error(ae.error||"upload failed");ee.image_url=ae.image_url,t(),u(),n(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(Q){showToast&&showToast(String(Q.message||Q),!1)}finally{W.target.value=""}}),A.addEventListener("dragstart",W=>{let X=W.target.closest(".admin-poll-opt");X&&(l=X.dataset.oid,X.classList.add("is-dragging"))}),A.addEventListener("dragend",W=>{A.querySelectorAll(".is-dragging, .is-drag-over").forEach(X=>X.classList.remove("is-dragging","is-drag-over")),l=null}),A.addEventListener("dragover",W=>{let X=W.target.closest(".admin-poll-opt");!X||!l||X.dataset.oid===l||(W.preventDefault(),A.querySelectorAll(".is-drag-over").forEach(ee=>ee.classList.remove("is-drag-over")),X.classList.add("is-drag-over"))}),A.addEventListener("drop",W=>{W.preventDefault();let X=W.target.closest(".admin-poll-opt"),ee=d(a);if(!X||!l||!ee)return;let se=ee.options.findIndex(ae=>ae.id===l),Q=ee.options.findIndex(ae=>ae.id===X.dataset.oid);se<0||Q<0||se===Q||(ee.options=e(ee.options,se,Q),t(),u())}),z.addEventListener("click",W=>{if(W.target.closest("[data-poll-action='add']")){let ae=T();i.push(ae),a=ae.id,t(),v();return}let ee=W.target.closest("[data-poll-template]");if(ee){let ae=T(),ie=ee.dataset.pollTemplate,ce=["A","B","C","D","E"],ye=we=>we.map((Se,_e)=>{let Ie=N(ce[_e]);return Ie.text=Se,Ie});ie==="yesno"?(ae.text="",ae.options=ye([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):ie==="stars"?(ae.timer=60,ae.options=ye(["1","2","3","4","5"])):ie==="four"&&(ae.options=ye(["","","",""])),i.push(ae),a=ae.id,t(),v();return}let se=W.target.closest("[data-poll-mode]");se&&(o=se.dataset.pollMode,z.querySelectorAll("[data-poll-mode]").forEach(ae=>ae.classList.toggle("is-active",ae===se)),t());let Q=W.target.closest("[data-poll-session-action]");if(Q){let ae=Q.dataset.pollSessionAction;ae==="start"?M():ae==="advance"?q():ae==="end"&&V()}});function Y(){let W=z.querySelector("[data-poll-session]");if(!W)return;let X=W.querySelector("[data-poll-session-status]"),ee=W.querySelector("[data-poll-session-action='start']"),se=W.querySelector("[data-poll-session-action='advance']"),Q=W.querySelector("[data-poll-session-action='end']");if(!r.pollId||!r.active){X.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,ee.hidden=!1,se.hidden=!0,Q.hidden=!0;return}let ae=i.length,ie=r.currentIndex+1,ce=r.currentIndex>=ae-1;X.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${ie} / ${ae}</span>`,ee.hidden=!0,se.hidden=ce,Q.hidden=!1}async function M(){try{let W=i.map((ie,ce)=>{let ye=(ie.text||"").trim(),we=ie.options.map(Se=>(Se.label||"").trim()).filter(Boolean);if(!ye)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:ce+1}));if(we.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:ce+1}));return{text:ye,options:we,time_limit_seconds:ie.timer&&ie.timer>0?ie.timer:null}});if(!W.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let X=(()=>{let ie=i.map(ce=>Number(ce.timer)||0).filter(ce=>ce>0);return ie.length?Math.round(ie.reduce((ce,ye)=>ce+ye,0)/ie.length):null})(),ee=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:W,mode:o||"manual",default_duration_s:X})}),se=await ee.json().catch(()=>({}));if(!ee.ok)throw new Error(se.error||ServerI18n.t("pollBuilderErrCreateFailed"));r.pollId=se.poll_id,(se.questions||[]).forEach((ie,ce)=>{i[ce]&&(i[ce].server_q_id=ie.id)}),t();let Q=await csrfFetch("/admin/poll/start",{method:"POST"}),ae=await Q.json().catch(()=>({}));if(!Q.ok)throw new Error(ae.error||ServerI18n.t("pollBuilderErrStartFailed"));r.active=!0,r.currentIndex=ae.current_index??0,C=ae,F=null,v(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),ne()}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function q(){try{let W=await csrfFetch("/admin/poll/advance",{method:"POST"}),X=await W.json().catch(()=>({}));if(!W.ok)throw new Error(X.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));r.currentIndex=X.current_index,r.active=!!X.active,C=X,v(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:r.currentIndex+1}),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function V(){try{let W=C,X=await csrfFetch("/admin/poll/end",{method:"POST"});if(!X.ok){let ee=await X.json().catch(()=>({}));throw new Error(ee.error||ServerI18n.t("pollBuilderErrEndFailed"))}W&&W.questions&&(F={...W,ended_at:Date.now()/1e3},O=W.current_index>=0?W.current_index:0),r.active=!1,r.pollId="",r.currentIndex=-1,C=null,r.statusTimer&&(clearInterval(r.statusTimer),r.statusTimer=null),v(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}function ne(){r.statusTimer&&clearInterval(r.statusTimer),r.statusTimer=setInterval(async()=>{if(r.pollId)try{let W=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!W.ok)return;let X=await W.json();if(X.poll_id!==r.pollId)return;r.active=!!X.active,r.currentIndex=X.current_index??-1;let ee=!!(C&&C.active);C=X,X.active||(clearInterval(r.statusTimer),r.statusTimer=null,ee&&X.questions&&!F&&(F={...X,ended_at:Date.now()/1e3},O=X.current_index>=0?X.current_index:0),C=null),K==="live"?H():v()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{r.statusTimer&&(clearInterval(r.statusTimer),r.statusTimer=null),w()}),v()}function _(){let z=document.getElementById("settings-grid");!z||document.getElementById(b)||(z.insertAdjacentHTML("beforeend",g()),document.getElementById(b)&&h())}document.addEventListener("admin-panel-rendered",_),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&_()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),_()})})()});var gt=me(()=>{(function(){"use strict";let h="sec-live-feed",_=[],z=[],S=!1,A="",m="all",R=0,L=null,$=null,E=null,P=null;function N(M){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(M):String(M??"").replace(/[&<>"']/g,function(q){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[q]})}function T(M,q){return M?M.length>q?M.slice(0,q)+"\u2026":M:""}function C(M){let q=new Date(M),V=ne=>String(ne).padStart(2,"0");return`${V(q.getHours())}:${V(q.getMinutes())}:${V(q.getSeconds())}`}function K(M){if(!A)return!0;let q=A.toLowerCase(),V=M.data;return V.text&&V.text.toLowerCase().includes(q)||V.nickname&&V.nickname.toLowerCase().includes(q)||V.fingerprint&&V.fingerprint.toLowerCase().includes(q)||V.layout&&V.layout.toLowerCase().includes(q)}function F(M){return m==="muted"?!!M.muted:m==="sensitive"?!!M.sensitive:m==="queued"?M.data&&M.data.status==="queued":!0}function O(){m="all",document.querySelectorAll(".admin-live-feed-tab").forEach(M=>M.classList.toggle("is-active",M.dataset.tab==="all"))}function f(){A="",E&&(E.value=""),O()}function c(M,q){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let ne;return M==="paused"?ne=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:q||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):M==="no-result"?ne=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:q||ServerI18n.t("lfNoMatchDesc")}):ne=window.AdminEmpty.render("messages"),ne.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),ne.setAttribute("data-empty-kind","live-feed"),ne}let V=document.createElement("div");return V.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",V.setAttribute("data-empty-kind","live-feed"),V.innerHTML=`<div class="admin-proto-placeholder-title">${N(M)}</div><div class="admin-proto-placeholder-body">${N(q||"")}</div>`,V}function i(M){let q=M.data,V=document.createElement("div");V.className="admin-live-feed-row"+(M.muted?" is-muted":""),V.dataset.id=M.id,V.tabIndex=-1;let ne=document.createElement("span");if(ne.className="admin-live-feed-time",ne.textContent=C(M.ts),V.appendChild(ne),(q.layout||"scroll").toLowerCase()!=="scroll"){let ae=document.createElement("span");ae.className="admin-ui-chip admin-live-feed-tag",ae.textContent=q.layout,V.appendChild(ae)}let X=document.createElement("span");X.className="admin-live-feed-text",X.textContent=T(q.text||"",80),X.title=q.text||"",V.appendChild(X);let ee=document.createElement("span");ee.className="admin-live-feed-identity",window.AdminIdentity&&ee.appendChild(AdminIdentity.render({nickname:q.nickname||"",fp:"",onNicknameClick:function(ae){!ae||!E||(E.value=ae,E.dispatchEvent(new Event("input",{bubbles:!0})),E.focus())}})),V.appendChild(ee);let se=document.createElement("span");se.className="admin-live-feed-actions is-hover-reveal";let Q=document.createElement("button");if(Q.type="button",Q.className="admin-ui-chip is-danger admin-live-feed-action",Q.textContent=ServerI18n.t("blockKeywordBtn"),Q.title=ServerI18n.t("blockKeywordTitle"),Q.addEventListener("click",ae=>{ae.stopPropagation(),a("keyword",q.text,M.id)}),se.appendChild(Q),q.fingerprint){let ae=document.createElement("button");ae.type="button",ae.className="admin-ui-chip is-warn admin-live-feed-action",ae.textContent=ServerI18n.t("blockFpBtn"),ae.title=ServerI18n.t("blockFpTitle").replace("{fp}",q.fingerprint),ae.addEventListener("click",ie=>{ie.stopPropagation(),a("fingerprint",q.fingerprint,M.id)}),se.appendChild(ae)}return V.appendChild(se),V}async function a(M,q,V){if(!q)return;let ne=M==="keyword"?ServerI18n.t("blockLabelKeyword"):ServerI18n.t("blockLabelFingerprint"),W=M==="keyword"?T(q,30):q.slice(0,8);if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("lfBlockTitle"),subtitle:ServerI18n.t("cfmSubBlockFuture"),severity:"danger",bodyText:ServerI18n.t("blockConfirm").replace("{label}",ne).replace("{display}",W),confirmLabel:ServerI18n.t("lfBlockTitle")}))try{let ee=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:M,value:q})}),se=await ee.json();if(ee.ok){if(showToast(se.message||ServerI18n.t("blockFallback").replace("{label}",ne)),V){let Q=_.find(ae=>ae.id===V);Q&&(Q.muted=!0)}else _.forEach(Q=>{M==="keyword"&&Q.data.text===q&&(Q.muted=!0),M==="fingerprint"&&Q.data.fingerprint===q&&(Q.muted=!0)});o()}else showToast(se.error||ServerI18n.t("blockFailed"),!1)}catch(ee){console.error("[LiveFeed] Block failed:",ee),showToast(ServerI18n.t("blockRequestFailed"),!1)}}function o(){if(!L)return;let M=document.createDocumentFragment(),q=_.filter(V=>K(V)&&F(V));for(let V=q.length-1;V>=0;V--)M.appendChild(i(q[V]));if(L.textContent="",M.childNodes.length===0){let V=S?c("paused"):_.length===0?c("empty"):c("no-result");L.appendChild(V)}else L.appendChild(M);s(),t(),d(),r()}function s(){if(!P)return;let M=_.length,q=z.length;P.textContent=ServerI18n.t("lfCountUnit",{n:M})+(q>0?` (+${q})`:"")}function l(M){let q={ts:Date.now(),data:M,id:"e"+ ++R};if(M&&M.status==="blocked"&&(q.muted=!0),M&&(M.sensitive||M.flagged)&&(q.sensitive=!0),S){z.push(q),s(),r();return}if(_.push(q),_.length>200){let V=_.splice(0,_.length-200)}o()}function r(){let M=document.querySelector("[data-lf-jump]"),q=document.querySelector("[data-lf-jump-n]");if(!M||!q)return;let V=z.length;V>0?(M.hidden=!1,q.textContent=String(V)):M.hidden=!0}function t(){let M=document.querySelector("[data-lf-state]");M&&(M.className=S?"ui-status is-warning":"ui-status is-success",M.textContent=S?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function d(){let M=document.getElementById(h)||document,q=(V,ne)=>{let W=M.querySelector(V);W&&(W.textContent=String(ne))};q("[data-cnt-all]",_.length),q("[data-cnt-sens]",_.filter(V=>V.sensitive).length),q("[data-cnt-mut]",_.filter(V=>V.muted).length),q("[data-cnt-q]",_.filter(V=>V.data&&V.data.status==="queued").length)}function p(){if(S=!S,L&&L.setAttribute("aria-live",S?"off":"polite"),$&&($.textContent=S?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),$.classList.toggle("is-primary",S),$.classList.toggle("is-ghost",!S)),S)s();else{for(let M of z)_.push(M);z=[],_.length>200&&_.splice(0,_.length-200),o()}}function e(){let M=document.getElementById("settings-grid");if(!M)return!1;let q=`
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
      </div>`;return M.insertAdjacentHTML("beforeend",q),!0}let n=!1,u=null,v=0,k=1500;async function w(){try{let M=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(v),{credentials:"same-origin"});if(!M.ok)return;let q=await M.json();if(Array.isArray(q.entries))for(let V of q.entries)V&&V.data&&l(V.data);typeof q.next_since=="number"&&(v=q.next_since)}catch{}}function I(){n||(n=!0,w(),u=setInterval(w,k),window.addEventListener("beforeunload",()=>{u&&(clearInterval(u),u=null)}))}function B(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&e()&&H()}).observe(document.body,{childList:!0,subtree:!0}),e()&&H()}function H(){L=document.getElementById("liveFeedList"),$=document.getElementById("liveFeedPauseBtn"),E=document.getElementById("liveFeedSearch"),P=document.getElementById("liveFeedCount");let M=document.getElementById("liveFeedClearBtn"),q=document.querySelectorAll(".admin-live-feed-tab");if($&&$.addEventListener("click",p),M&&M.addEventListener("click",()=>{_=[],z=[],o()}),q.forEach(V=>{V.addEventListener("click",()=>{q.forEach(ne=>ne.classList.remove("is-active")),V.classList.add("is-active"),m=V.dataset.tab||"all",o()})}),E){let V=null;E.addEventListener("input",()=>{clearTimeout(V),V=setTimeout(()=>{A=E.value.trim(),o()},200)})}I()}function D(M){if(!("ontouchstart"in window))return;let q=0,V=0,ne=0,W=null,X=null,ee=!1;function se(Q){if(Q.querySelector(".admin-live-feed-row__swipe-actions"))return;let ae=document.createElement("div");ae.className="admin-live-feed-row__swipe-actions",ae.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="mask">
          <span class="admin-live-feed-row__swipe-btn-icon">\u25D0</span>${ServerI18n.t("lfSwipeMask")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mute" data-swipe-act="mute">
          <span class="admin-live-feed-row__swipe-btn-icon">\u25D0</span>${ServerI18n.t("lfSwipeMute")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,ae.addEventListener("click",function(ie){let ce=ie.target.closest("[data-swipe-act]");if(!ce)return;let ye=Q.dataset.id,we=_.find(_e=>_e.id===ye);if(!we||!we.data)return;let Se=ce.dataset.swipeAct;Se==="ban"||Se==="mute"?we.data.fingerprint&&a("fingerprint",we.data.fingerprint,ye):Se==="mask"&&we.data.text&&a("keyword",we.data.text,ye),Q.classList.remove("is-swiped")}),Q.appendChild(ae)}M.addEventListener("touchstart",function(Q){let ae=Q.target.closest(".admin-live-feed-row");ae&&(Q.target.closest(".admin-live-feed-row__swipe-actions")||(W=ae,ee=!1,q=Q.touches[0].clientX,V=Q.touches[0].clientY,ne=0))},{passive:!0}),M.addEventListener("touchmove",function(Q){if(!W||ee)return;let ae=Q.touches[0],ie=ae.clientX-q,ce=ae.clientY-V;if(Math.abs(ce)>Math.abs(ie)&&Math.abs(ce)>12){ee=!0;return}if(ne=ie,ie<-10){se(W),X=W,W.classList.add("is-swiping");let ye=Math.max(-180,ie);W.style.transform=`translateX(${ye}px)`}else ie>10&&W.classList.contains("is-swiped")&&(W.style.transform="")},{passive:!0}),M.addEventListener("touchend",function(){W&&(W.classList.remove("is-swiping"),W.style.transform="",ne<=-60?W.classList.add("is-swiped"):W.classList.remove("is-swiped"),W=null,X=null,ne=0)},{passive:!0})}function x(){return L?Array.from(L.querySelectorAll(".admin-live-feed-row")):[]}function U(){let M=x(),q=document.activeElement;for(let V of M)if(V===q||V.contains(q))return V;return null}function G(M){let q=x();if(!q.length)return!1;let V=U(),ne=V?q.indexOf(V)+M:M>0?0:q.length-1;return ne=Math.max(0,Math.min(q.length-1,ne)),q[ne].focus(),q[ne].scrollIntoView({block:"nearest"}),!0}function Y(M){let q=U();if(!q)return!1;let V=_.find(W=>W.id===q.dataset.id);if(!V)return!1;let ne=M==="keyword"?V.data.text:V.data.fingerprint;return ne?(a(M,ne,V.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return _.slice()},isVisible:function(){return!!(L&&L.offsetParent!==null)},isPaused:function(){return S},moveFocus:G,blockFocused:Y,togglePause:function(){p()}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",B):B()})()});var bt=me(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var b=window.AdminUtils.loadDetailsState,y=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;function h(d,p=!1){var e=b();return e[d]!==void 0?e[d]:p}function _(d){var p=b();p[d.id]=d.open,y(p)}let z=!1;new MutationObserver(()=>{let d=document.getElementById("settings-grid");if(d&&!(document.getElementById("sec-plugins")||z)){z=!0;try{A(d)}finally{z=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function A(d){let p=`
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
      `;d.insertAdjacentHTML("beforeend",p);let e=document.querySelector("[data-console-filters]");e&&e.addEventListener("click",n=>{let u=n.target.closest("[data-console-filter]");u&&(e.querySelectorAll("[data-console-filter]").forEach(v=>v.classList.toggle("is-active",v===u)),L=u.dataset.consoleFilter,T())}),document.getElementById("pluginsReloadBtn").addEventListener("click",t),F(),K()}let m=0,R=0,L="all",$=[],E=80;function P(d){let p=(d||"INFO").toUpperCase();return p==="ERROR"?"is-error":p==="WARN"?"is-warn":p==="DEBUG"?"is-debug":"is-info"}function N(d){let p=new Date(d*1e3),e=n=>String(n).padStart(2,"0");return`${e(p.getHours())}:${e(p.getMinutes())}:${e(p.getSeconds())}`}function T(){let d=document.getElementById("pluginsConsoleBody");if(!d)return;let p=L==="all"?$:$.filter(e=>(e.level||"INFO").toUpperCase()===L);if(p.length===0){let e=L==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${L} lines yet \xB7 waiting\u2026`;d.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${e}</span>
          </div>`;return}d.innerHTML=p.map(e=>{let n=N(e.ts),u=(e.msg||"").replace(/[<>&"]/g,w=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[w]),v=(e.plugin||"\u2014").replace(/[<>&"]/g,w=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[w]),k=(e.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${n}</span>
          <span class="lv ${P(e.level)}">${k}</span>
          <span class="plg">${v}</span>
          <span class="msg">${u}</span>
        </div>`}).join("")}async function C(){try{let d=await fetch(`/admin/plugins/console?since=${m}`,{credentials:"same-origin"});if(!d.ok)return;let p=await d.json();if(!Array.isArray(p.events)||p.events.length===0)return;for($.unshift(...p.events);$.length>E;)$.pop();m=p.latest_seq||m,T()}catch{}}function K(){R||(R=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:C}))}async function F(){let d=document.getElementById("pluginsList");if(d)try{let p=await csrfFetch("/admin/plugins/list");if(!p.ok)throw new Error(`HTTP ${p.status}`);let n=(await p.json()).plugins||[];if(n.length===0){d.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",O([]);return}d.innerHTML=n.map(f).join(""),l(d),O(n)}catch(p){console.error("Failed to load plugins:",p),d.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function O(d){let p=d.length,e=d.filter(w=>w.enabled).length,n=p-e,u=d.map(w=>w.priority).filter(w=>typeof w=="number"),v=u.length?Math.round(u.reduce((w,I)=>w+I,0)/u.length):null,k=(w,I)=>{document.querySelectorAll(`[data-plugins-stat="${w}"]`).forEach(B=>{B.textContent=I})};k("loaded",p),k("running",e),k("paused",n),k("priority",v??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(w=>{w.textContent=p})}function f(d){let{name:p,version:e,description:n,priority:u,enabled:v,is_user:k,file:w}=d,I=`plugin-toggle-${p}`,B=a(u),H=s(u),D=i(d),x=k&&w?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${g(w)}"
            data-plugin-name="${g(p)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${g(p)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${g(p)}">
          <span class="admin-plugins-dot ${v?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${g(p)}</div>
            ${n?`<div class="desc">${g(n)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${e?"v"+g(e):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${B}">${u??"\u2014"}${H?" \xB7 "+H:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${o(D)}">${D}</span>
          <div class="admin-plugins-toggle-cell">
            ${x}
            <label class="admin-plugins-switch" for="${I}">
              <input type="checkbox" id="${I}" role="switch"
                aria-checked="${!!v}" aria-label="Toggle plugin ${g(p)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${g(p)}"
                ${v?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function c(d,p){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:d}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:p}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let n=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:p})}),u=await n.json().catch(()=>({}));if(!n.ok){showToast(u.error||ServerI18n.t("pluginsToastRemoveFailed",{status:n.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:d}),!0),await F()}catch(n){showToast(ServerI18n.t("pluginsToastNetError",{msg:n.message||""}),!1)}}function i(d){let p=d.file||d.path||d.source||"";if(typeof p=="string"){if(p.endsWith(".py"))return"PY";if(p.endsWith(".js"))return"JS"}return(d.language||"PY").toUpperCase()}function a(d){return d==null?"is-muted":d<=10?"is-danger":d<=50?"is-warn":"is-cyan"}function o(d){return d==="JS"?"is-cyan":d==="PY"?"is-warn":"is-muted"}function s(d){return d==null?"":d<=10?"CRITICAL":d<=50?"HIGH":"NORMAL"}function l(d){d.querySelectorAll(".plugin-toggle").forEach(p=>{p.addEventListener("change",async function(){let e=this.dataset.pluginName,n=this.checked;await r(e,n,this)})}),d.querySelectorAll(".plugin-uninstall").forEach(p=>{p.addEventListener("click",function(){c(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function r(d,p,e){let n=p?"/admin/plugins/enable":"/admin/plugins/disable";try{let u=await csrfFetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})});if(!u.ok){let v=await u.json().catch(()=>({}));throw new Error(v.error||`HTTP ${u.status}`)}showToast(p?ServerI18n.t("pluginEnabled").replace("{name}",d):ServerI18n.t("pluginDisabled").replace("{name}",d),!0)}catch(u){console.error(`Failed to ${p?"enable":"disable"} plugin:`,u),showToast(u.message||ServerI18n.t("operationFailed"),!1),e&&(e.checked=!p)}}async function t(){let d=document.getElementById("pluginsReloadBtn");d&&(d.disabled=!0);try{let p=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!p.ok){let e=await p.json().catch(()=>({}));throw new Error(e.error||`HTTP ${p.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await F()}catch(p){console.error("Failed to reload plugins:",p),showToast(p.message||ServerI18n.t("reloadFailed"),!1)}finally{d&&(d.disabled=!1)}}})})()});var yt=me(()=>{(function(){"use strict";let b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},y={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},g=null,h=null;function _(){return g||(g=document.createElement("div"),g.className="admin-pu-backdrop",g.hidden=!0,g.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(g),g.addEventListener("click",a=>{(a.target.matches("[data-pu-close]")||a.target===g)&&i()}),g)}function z(a){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((s,l)=>{let r=l+1,t=r<a,p=t?"is-done":r===a?"is-active":"";return(l>0?`<span class="admin-pu-step-line ${t?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${p}">
          <span class="circle">${t?"\u2713":r}</span>
          <span class="label">${s}</span>
        </div>`}).join("")}function S(a,o){h.step=a;let s=g.querySelector("[data-pu-steps]");s&&(s.innerHTML=z(a));let l=g.querySelector("[data-pu-body]");l&&(l.innerHTML=o)}function A(a){let o=a==="error-type"?ServerI18n.t("pluginsUploadErrorType"):a==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):a==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):a==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),s=(a||"").startsWith("error")?"\u2715":a==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(a||"").startsWith("error")?"is-error":a==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${s}</div>
          <div class="admin-pu-dropzone-msg">${b(o)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py,.js" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function m(){let a=g.querySelector("[data-pu-dropzone]"),o=g.querySelector("[data-pu-file]"),s=g.querySelector("[data-pu-browse]");s&&s.addEventListener("click",()=>o&&o.click()),o&&o.addEventListener("change",()=>{o.files&&o.files[0]&&R(o.files[0])}),a&&(a.addEventListener("click",()=>o&&o.click()),a.addEventListener("dragover",l=>{l.preventDefault(),a.classList.add("is-over")}),a.addEventListener("dragleave",()=>a.classList.remove("is-over")),a.addEventListener("drop",l=>{l.preventDefault(),a.classList.remove("is-over");let r=l.dataTransfer&&l.dataTransfer.files;if(!(!r||r.length===0)){if(r.length>1){S(1,A("error-multi")),m();return}R(r[0])}}))}function R(a){if(!a.name.match(/\.(py|js)$/i)){S(1,A("error-type")),m();return}if(a.size>256*1024){S(1,A("error-size")),m();return}h.file=a,S(2,L(a.name)),$(a)}function L(a){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${b(a)}</div>
      </div>`}async function $(a){try{let o=new FormData;o.append("file",a);let s=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:o}),l=await s.json().catch(()=>({}));if(!s.ok&&!l.validation){window.showToast?.(l.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:s.status}),!1),S(1,A()),m();return}h.manifest=l.manifest||{},h.validation=l.validation||{},h.filename=l.filename||a.name,E(h)}catch(o){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:o.message||""}),!1),S(1,A()),m()}}function E(a){let o=a.manifest||{},s=a.validation||{},l="";if(!s.syntax_ok)l=P(s.syntax_err,a);else if(Object.keys(o).length===0)l=N(a);else{let r=(s.deps||[]).some(t=>t.status==="missing");l=K(o,s,a,r)}S(2,`<div class="admin-pu-step2">${l}</div>`),F()}function P(a,o){let s=a&&a.line?a.line:"?",l=a&&a.msg?a.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${s}</span>
        </div>
        <pre class="admin-pu-syntax-body">${b(`>>> ${o.filename}
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
      </footer>`}function T(a){return a==null?"is-muted":a<=10?"is-danger":a<=50?"is-warn":"is-cyan"}function C(a){if(a==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let o=T(a),s=a<=10?"CRITICAL":a<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${o}">${a} \xB7 ${s}</span>`}function K(a,o,s,l){let r=a.name||s.filename.replace(/\.(py|js)$/i,""),t=a.version?`v${b(a.version)}`:"\u2014",d=a.author?`@${b(a.author.replace(/^@/,""))}`:"\u2014",p=a.description||ServerI18n.t("pluginsUploadNoDescription"),e=s.filename.endsWith(".js")?"JS":"PY",n=e==="PY"?"is-warn":"is-cyan",u=Array.isArray(a.permissions)?a.permissions:[],v=Object.keys(y).map(H=>{let D=u.includes(H);return`
        <div class="admin-pu-perm-row ${D?"is-req":"is-not"}">
          <span class="dot">${D?"\u25CF":"\u25CB"}</span>
          <span class="key">${b(H)}</span>
          <span class="label">${b(ServerI18n.t(y[H]))}</span>
        </div>`}).join(""),k=o.deps||[],w=k.map(H=>{let D=H.status==="ok"?"is-ok":H.status==="warn"?"is-warn":"is-err",x=H.status==="ok"?"\u2713":H.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${D}">
          <span class="dot">${x}</span>
          <span class="name">${b(H.name)}</span>
          <span class="note">${b(H.note||"")}</span>
        </div>`}).join(""),I=o.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${b(r)}</span>`})}
      </div>`:"",B=k.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${w}</div>
      </section>`;return`
      ${I}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${b(r)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${t}</span>
          <span class="author">${d}</span>
          <span class="admin-ui-pill admin-pu-pill ${n}" style="margin-left:auto">${e}</span>
        </div>
        <div class="admin-pu-manifest-desc">${b(p)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${C(a.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${v}</div>
        </section>
        ${B}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${l?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${l?"disabled":""} data-pu-confirm>${l?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function F(){let a=g.querySelector("[data-pu-back]");a&&a.addEventListener("click",()=>{h.file=null,h.manifest=null,h.validation=null,S(1,A()),m()});let o=g.querySelector("[data-pu-confirm]");o&&o.addEventListener("click",()=>O());let s=g.querySelector("[data-pu-no-manifest-ack]");s&&o&&s.addEventListener("change",()=>{o.disabled=!s.checked})}function O(){let a=h.manifest||{},o=a.name||(h.filename||"").replace(/\.(py|js)$/i,""),s=a.version?`v${b(a.version)}`:"\u2014",l=Array.isArray(a.permissions)?a.permissions:[],r=l.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:l.map(p=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${b(p)}</span></div>`).join("");S(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${b(o)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${s}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${r}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${b(h.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:a.priority!=null?a.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let t=g.querySelector("[data-pu-install]");t&&t.addEventListener("click",f);let d=g.querySelector("[data-pu-back]");d&&d.addEventListener("click",()=>E(h))}async function f(){S(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let a=new FormData;a.append("file",h.file);let o=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:a}),s=await o.json().catch(()=>({}));if(!o.ok){window.showToast?.(s.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:o.status}),!1),E(h);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:s.name||h.filename}),!0),i();let l=document.getElementById("pluginsReloadBtn");l&&l.click()}catch(a){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:a.message||""}),!1),E(h)}}function c(){_(),h={step:1,file:null,manifest:null,validation:null,filename:null},S(1,A()),m(),g.hidden=!1,document.body.classList.add("admin-pu-open")}function i(){g&&(g.hidden=!0,document.body.classList.remove("admin-pu-open"),h=null)}window.AdminPluginUpload={open:c,close:i},document.addEventListener("click",a=>{a.target.closest("#pluginsUploadBtn")&&(a.preventDefault(),c())})})()});var wt=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let y="sec-webhooks",g=12e3,h=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function _(r,t){return r?r.length>t?r.slice(0,t)+"\u2026":r:""}function z(r){if(!r)return"\u2014";try{let t=new Date(r),d=Math.max(0,(Date.now()-t.getTime())/1e3);return d<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(d)}):d<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(d/60)}):d<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(d/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(d/86400)})}catch{return"\u2014"}}function S(r){if(!r)return"\u2014";try{return new URL(r).hostname}catch{return _(r,30)}}function A(r){return r==="active"?"is-success":r==="degraded"?"is-warn":"is-muted"}let m={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:h,eventCatalogLoaded:!1};function R(){let r=document.getElementById("advanced-grid")||document.getElementById("settings-grid");!r||document.getElementById(y)||(r.insertAdjacentHTML("beforeend",`
      <div id="${y}" class="admin-webhooks-page hud-page-stack lg:col-span-2" data-tpl="B">
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
    `),L())}function L(){let r=document.getElementById(y);if(!r)return;let t=document.getElementById("wh-register-form");t&&t.addEventListener("submit",async d=>{d.preventDefault();let p=document.getElementById("wh-url").value.trim();if(!p)return;let e=Array.from(t.querySelectorAll('input[name="wh-event"]:checked')).map(k=>k.value);if(e.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let n=document.getElementById("wh-format").value,u=document.getElementById("wh-secret").value.trim(),v={url:p,events:e,format:n};u&&(v.secret=u);try{let k=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}),w=await k.json();k.ok&&w.hook_id?(showToast(ServerI18n.t("webhookRegistered")),t.reset(),C(),t.hidden=!0,await $()):showToast(w.error||ServerI18n.t("registrationFailed"),!1)}catch(k){console.error("Webhook register error:",k),showToast(ServerI18n.t("registrationFailed"),!1)}}),r.querySelectorAll(".admin-ui-page-actions [data-wh-action='show-add']").forEach(d=>d.addEventListener("click",()=>{t&&(t.hidden=!1)})),r.addEventListener("click",d=>{if(d.target.closest("[data-wh-action='show-add']")){t&&(t.hidden=!1);return}if(d.target.closest("[data-wh-action='hide-add']")){t&&(t.hidden=!0);return}let n=d.target.closest("[data-wh-log-filter]");if(n){m.deliveryFilter=n.dataset.whLogFilter,r.querySelectorAll("[data-wh-log-filter]").forEach(D=>{D.classList.toggle("is-active",D.dataset.whLogFilter===m.deliveryFilter)}),c();return}let u=d.target.closest("[data-wh-action='test']");if(u){d.stopPropagation(),o(u.dataset.whHookId);return}let v=d.target.closest("[data-wh-action='settings']");if(v){d.stopPropagation(),i(v.dataset.whHookId);return}if(d.target.closest("[data-wh-action='close-detail']")){m.selectedHookId=null,a(),O();return}let w=d.target.closest("[data-wh-action='detail-ping']");if(w){o(w.dataset.whHookId);return}let I=d.target.closest("[data-wh-action='detail-toggle']");if(I){s(I.dataset.whHookId,I.dataset.whNextEnabled==="1");return}let B=d.target.closest("[data-wh-action='detail-delete']");if(B){l(B.dataset.whHookId);return}let H=d.target.closest("[data-wh-hook-row]");if(H&&!d.target.closest("button")){i(H.dataset.whHookId);return}}),m.stopPoll||(m.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(y)},intervalMs:g,tick:$}))}async function $(){await N(),await Promise.all([E(),P()]),K(),O(),c(),a()}async function E(){try{let t=await(await csrfFetch("/admin/webhooks/list")).json();m.hooks=Array.isArray(t.webhooks)?t.webhooks:[]}catch{m.hooks=[]}}async function P(){try{let r=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!r.ok)return;let t=await r.json();m.deliveries=Array.isArray(t.deliveries)?t.deliveries:[],m.stats=t.stats||null}catch{}}async function N(){if(!m.eventCatalogLoaded)try{let r=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(r.ok){let t=await r.json(),d=Array.isArray(t.events)?t.events:[];d.length&&(m.eventCatalog=d)}}catch{}finally{m.eventCatalogLoaded=!0,C()}}function T(r){let t=r&&r.slug?String(r.slug):"";if(r&&r.labelKey){let u=ServerI18n.t(r.labelKey);return{slug:t,label:u?u+" \xB7 "+t:t,title:u}}let d=r&&r.zh?String(r.zh):"",p=r&&r.en?String(r.en):"",e=window.ServerI18n&&ServerI18n.currentLang||"zh",n=(r&&r[e]?String(r[e]):"")||p||d;return{slug:t,label:n?n+" \xB7 "+t:t,title:d&&p?d+" \xB7 "+p:d||p}}function C(){let r=document.querySelector("[data-wh-register-events]");r&&(r.innerHTML=m.eventCatalog.map(function(t){let d=T(t);if(!d.slug)return"";let p=d.slug==="on_danmu"?" checked":"";return'<label title="'+b(d.title)+'"><input type="checkbox" name="wh-event" value="'+b(d.slug)+'"'+p+" /> "+b(d.label)+"</label>"}).join(""))}function K(){let r=document.querySelector("[data-wh-stats]");if(!r)return;let t=m.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};r.innerHTML=`
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
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel",{n:F()})}</div>
        <div class="v" style="color:${t.dropped_24h>0?"var(--hud-crimson)":"var(--color-text-secondary)"}">${t.dropped_24h}</div>
      </div>`}function F(){return m.hooks.length&&m.hooks[0].retry_count||3}function O(){let r=document.getElementById("wh-list"),t=document.querySelector("[data-wh-count]");if(r){if(t&&(t.textContent=String(m.hooks.length)),m.hooks.length===0){r.innerHTML="";let d=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let p=document.getElementById("wh-register-form");p&&(p.hidden=!1),document.getElementById("wh-url")?.focus()}});d.dataset.emptyKind="webhooks",r.appendChild(d);return}r.innerHTML=m.hooks.map(f).join("")}}function f(r){let t=b(r.id||""),d=Number(r.success_count)||0,p=Number(r.fail_count)||0,e=d+p,n=e>0?Math.round(d/e*1e3)/10:100,u=r.enabled!==!1,v=Number(r.last_status)||null,k=u?v&&v>=400||r.last_error?"degraded":"active":"paused",w=k==="active"?"var(--hud-lime)":k==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",I=k==="active"?"ACTIVE":k==="degraded"?"DEGRADED":"PAUSED",B=m.selectedHookId===r.id?" is-selected":"",H=A(k),D=(r.events||[]).map(function(U){return'<span class="admin-ui-pill admin-wh-evt-chip">'+b(U)+"</span>"}).join(""),x=r.last_error?'<div class="admin-wh-card-warn">\u26A0 '+b(_(r.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${B}" data-wh-hook-row data-wh-hook-id="${t}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${w};box-shadow:${u?"0 0 6px "+w:"none"}"></span>
          <span class="name">${b(S(r.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${H}">${I}</span>
          <span class="last">last \xB7 ${b(z(r.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${b(r.url)}</div>
        <div class="admin-wh-card-events">${D}</div>
        ${x}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${n}%;background:${w}"></div></div>
            <span class="pct" style="color:${w}">${n}%</span>
          </div>
          <span class="counter ok">\u2713 ${d.toLocaleString()}</span>
          <span class="counter ${p>0?"fail":"fail-zero"}">\u2717 ${p}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${t}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${t}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function c(){let r=document.getElementById("wh-log-list");if(!r)return;let t=m.deliveries.filter(function(d){return m.deliveryFilter==="all"?!0:m.deliveryFilter==="failed"?!d.ok:m.deliveryFilter==="2xx"?d.code&&d.code>=200&&d.code<300:m.deliveryFilter==="5xx"?d.code&&d.code>=500:!0});if(t.length===0){r.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}r.innerHTML=t.map(function(d){let p=d.ts?new Date(d.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",e=d.code?String(d.code):"\u2014",n=d.ok?"var(--hud-lime)":"var(--hud-crimson)",u=d.duration_ms?d.duration_ms>=1e3?(d.duration_ms/1e3).toFixed(1)+"s":d.duration_ms+"ms":"\u2014",v=d.ok?"var(--color-text-strong)":"var(--hud-amber)",k=b(S(d.hook_url||"")),w=(d.retries||0)===0?"\u2014":"\xD7"+d.retries,I=(d.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${d.dropped?" is-dropped":""}">
          <span class="time">${b(p)}</span>
          <span class="code" style="color:${n};border-color:${n}55;background:${n}15;">${e}</span>
          <span class="dur" style="color:${v}">${b(u)}</span>
          <span class="ep">${k}</span>
          <span class="evt">${b(d.event||"")}</span>
          <span class="retry" style="color:${I}">${w}</span>
        </div>`}).join("")}function i(r){m.selectedHookId=r,O(),a()}function a(){let r=document.querySelector("[data-wh-detail]");if(!r)return;let t=m.hooks.find(function(k){return k.id===m.selectedHookId});if(!t){r.hidden=!0,r.innerHTML="";return}r.hidden=!1;let d=t.enabled!==!1,p=Number(t.last_status)||null,e=d?p&&p>=400||t.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",n=new Set(t.events||[]),u=m.eventCatalog.map(function(k){let w=T(k),I=n.has(w.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(I?"is-active is-on":"")+'" title="'+b(w.title)+'"><span aria-hidden="true">'+(I?"\u2713":"\u25CB")+"</span><span>"+b(w.label)+"</span></label>"}).join(""),v={event:t.events&&t.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:t.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};r.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+e+";box-shadow:0 0 6px "+e+'"></span><span class="name">'+b(S(t.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+u+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(t.retry_count!=null?t.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(t.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+b(JSON.stringify(v,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+b(t.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+b(t.id)+'" data-wh-next-enabled="'+(d?"0":"1")+'">'+(d?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+b(t.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function o(r){if(r)try{let t=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:r})}),d=await t.json();t.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(d.error||ServerI18n.t("testFailed"),!1),setTimeout($,1500)}catch(t){console.error("Webhook test error:",t),showToast(ServerI18n.t("testFailed"),!1)}}async function s(r,t){if(r)try{let d=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:r,enabled:t})}),p=await d.json();if(!d.ok){showToast(p.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let e=m.hooks.find(function(n){return n.id===r});e&&(e.enabled=p.enabled),showToast(p.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),K(),O(),a()}catch(d){console.error("Webhook toggle error:",d),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function l(r){if(!(!r||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let d=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:r})}),p=await d.json();d.ok?(showToast(ServerI18n.t("webhookDeleted")),m.selectedHookId===r&&(m.selectedHookId=null),$()):showToast(p.error||ServerI18n.t("deleteFailed"),!1)}catch(d){console.error("Webhook delete error:",d),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(y)&&R()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),R()})})()});var St=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let y="sec-sounds",g=null,h=[],_=[];async function z(){try{let c=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!c.ok)throw new Error(await c.text());let i=await c.json();h=i.sounds||[],_=i.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",h.length||"")}catch(c){console.error("Failed to fetch sounds:",c),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),h=[],_=[]}}async function S(){return z()}async function A(c,i){let a=new FormData;a.append("file",c),a.append("name",i);let o=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:a}),s=await o.json();if(!o.ok)throw new Error(s.error||"Upload failed");return s}async function m(c){let i=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),a=await i.json();if(!i.ok)throw new Error(a.error||"Delete failed");return a}async function R(c){let i=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),a=await i.json();if(!i.ok)throw new Error(a.error||"Failed to add rule");return a}async function L(c){let i=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c})}),a=await i.json();if(!i.ok)throw new Error(a.error||"Failed to delete rule");return a}function $(){let c=document.getElementById("soundsList");if(c){if(h.length===0){c.innerHTML="";var i=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});i.dataset.emptyKind="sounds",i.style.gridColumn="1 / -1",c.appendChild(i);return}c.innerHTML=h.map(function(o){var s=b(o.name),l=Math.round((o.volume!=null?o.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+b(o.name)+'"><div class="name" title="'+s+'">'+s+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+b(o.name)+'" min="0" max="100" step="1" value="'+l+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+b(o.name)+'" style="min-width:32px;text-align:right">'+l+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+b(o.name)+'">'+b(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+b(o.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),c.querySelectorAll(".sound-play-btn").forEach(function(o){o.addEventListener("click",function(){var s=o.dataset.name,l=h.find(function(r){return r.name===s});l&&(g&&(g.pause(),g=null),g=new Audio(l.url),g.volume=.5,g.play().catch(function(r){console.warn("Audio preview failed:",r)}))})}),c.querySelectorAll(".sound-delete-btn").forEach(function(o){o.addEventListener("click",async function(){var s=o.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",s),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await m(s),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",s),!0),await z(),$(),P()}catch(r){window.showToast(r.message,!1)}})});var a={};c.querySelectorAll(".sound-volume-slider").forEach(function(o){var s=o.dataset.name,l=c.querySelector('.sound-volume-label[data-name="'+CSS.escape(s)+'"]');o.addEventListener("input",function(){l&&(l.textContent=o.value+"%"),clearTimeout(a[s]),a[s]=setTimeout(function(){E(s,Number(o.value)/100)},300)}),o.addEventListener("change",function(){clearTimeout(a[s]),E(s,Number(o.value)/100)})})}}async function E(c,i){try{var a=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(c)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:i})}),o=await a.json();if(!a.ok){window.showToast(o.error||"Volume update failed",!1);return}var s=h.find(function(l){return l.name===c});s&&(s.volume=i),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(i*100)}),!0)}catch(l){console.warn("[admin-sounds] volume save failed:",l),window.showToast("Network error",!1)}}function P(){let c=document.getElementById("ruleSoundName");if(!c)return;let i=c.value;if(c.innerHTML="",h.length===0){let a=document.createElement("option");a.value="",a.textContent=ServerI18n.t("noSoundsAvailable"),a.disabled=!0,c.appendChild(a);return}h.forEach(a=>{let o=document.createElement("option");o.value=a.name,o.textContent=a.name,c.appendChild(o)}),i&&[...c.options].some(a=>a.value===i)&&(c.value=i)}function N(){let c=document.getElementById("rulesList");if(c){if(_.length===0){c.innerHTML="";var i=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});i.dataset.emptyKind="sound-rules",c.appendChild(i);return}c.innerHTML=_.map(function(a){var o=a.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):a.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",a.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",a.trigger_value),s=Math.round((a.volume!=null?a.volume:1)*100),l=ServerI18n.t("soundDetailLine").replace("{sound}",a.sound_name).replace("{vol}",s).replace("{cd}",a.cooldown!=null?a.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+b(String(a.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+b(o)+'</div><div class="admin-sounds-rule-detail">'+b(l)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+b(String(a.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),c.querySelectorAll(".sound-rule-del-btn").forEach(function(a){a.addEventListener("click",async function(){try{await L(a.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await S(),N()}catch(o){window.showToast(o.message,!1)}})})}}function T(){let c=document.getElementById("soundUploadBtn");c&&c.addEventListener("click",async()=>{let i=document.getElementById("soundFileInput"),a=document.getElementById("soundNameInput"),o=i.files[0];if(!o){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let s=a.value.trim();if(!s){window.showToast(ServerI18n.t("enterSoundName"),!1);return}c.disabled=!0,c.textContent=ServerI18n.t("uploadingStatus");try{await A(o,s),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",s),!0),i.value="",a.value="",await z(),$(),P()}catch(l){window.showToast(l.message,!1)}finally{c.disabled=!1,c.textContent=ServerI18n.t("soundsUploadIdle")}})}function C(){let c=document.getElementById("addRuleBtn");c&&c.addEventListener("click",async()=>{let i=document.getElementById("ruleTriggerType").value,a=document.getElementById("ruleTriggerValue").value.trim(),o=document.getElementById("ruleSoundName").value,s=document.getElementById("ruleVolume"),l=document.getElementById("ruleCooldown");if(i!=="all"&&!a){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!o){window.showToast(ServerI18n.t("selectSound"),!1);return}let r=parseInt(s.value,10)/100,t=parseInt(l.value,10)||0,d={trigger_type:i,trigger_value:i==="all"?"":a,sound_name:o,volume:Math.max(0,Math.min(1,r)),cooldown:Math.max(0,t)};c.disabled=!0;try{await R(d),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await S(),N()}catch(p){window.showToast(p.message,!1)}finally{c.disabled=!1}})}function K(){let c=document.getElementById("ruleTriggerType"),i=document.getElementById("ruleTriggerValue");if(!c||!i)return;function a(){c.value==="all"?(i.disabled=!0,i.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),i.value=""):c.value==="keyword"?(i.disabled=!1,i.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):c.value==="effect"&&(i.disabled=!1,i.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}c.addEventListener("change",a),a()}function F(){let c=document.getElementById("ruleVolume"),i=document.getElementById("ruleVolumeLabel");!c||!i||c.addEventListener("input",()=>{i.textContent=c.value+"%"})}function O(){return`
      <div id="${y}" class="admin-sounds-page hud-page-stack lg:col-span-2" data-tpl="B">
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
    `}async function f(){let c=document.getElementById("settings-grid");if(c){if(c.insertAdjacentHTML("beforeend",O()),window.AdminSkeletons){let i=document.getElementById("soundsList");i&&(i.innerHTML="",i.appendChild(window.AdminSkeletons.listRows({rows:3})));let a=document.getElementById("rulesList");a&&(a.innerHTML="",a.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([z(),S()]),$(),P(),N(),T(),C(),K(),F()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let c=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&!c&&(c=!0,f().finally(()=>{c=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&(c=!0,f().finally(()=>{c=!1}))})})()});var It=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let y=/^[a-zA-Z0-9_]{1,32}$/,g=".png,.gif,.webp",h="sec-emojis",_=[];function z(){return`
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
    `}function S(F){let O=":"+F.name+":",f=Number(F.used)||0,c=f>0?ServerI18n.t("emojisUsedCount",{n:f}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+R(F.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+R(F.url)+'" alt="'+R(O)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+b(O)+'</div><div class="admin-em-v4__tile-meta">'+b(c)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+R(O)+'" title="'+R(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+R(F.name)+'" title="'+R(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function A(F){let O=document.querySelector("[data-em-quota-label]"),f=document.querySelector("[data-em-quota-fill]");if(!O||!f)return;let c=F.length,i=100;O.textContent=ServerI18n.t("emojisQuotaUsed",{n:c,max:i}),f.style.width=Math.min(100,c/i*100)+"%"}function m(F){let O=document.querySelector("[data-em-preview-body]");if(!O)return;if(!F||F.length===0){O.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let c=F.slice(0,3).map(i=>`<span class="admin-em-v4__preview-pair"><code>:${b(i.name)}:</code> \u2192 <img src="${R(i.url)}" alt=":${R(i.name)}:" /></span>`);O.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:c.join(" \xB7 ")})}function R(F){return b(F)}function L(F){var O=document.getElementById("emojiGrid"),f=document.getElementById("emojiCount");O&&(!F||F.length===0?(window.AdminEmpty?(O.innerHTML="",O.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var c=document.getElementById("emojiFileInput");c&&c.click()}}))):O.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("noEmojisUploaded"))+"</div>",f&&(f.textContent="0")):(O.innerHTML=F.map(S).join(""),f&&(f.textContent=String(F.length))),A(_),m(_))}function $(){var F=document.getElementById("emojiGrid");if(F)if(window.AdminSkeletons){F.innerHTML="";for(var O=0;O<8;O++){var f=document.createElement("div");f.className="admin-em-v4__tile admin-em-v4__tile--skel";var c=document.createElement("div");c.className="admin-em-v4__tile-thumb";var i=document.createElement("div");i.className="admin-skel",i.style.width="100%",i.style.height="100%",c.appendChild(i),f.appendChild(c);var a=document.createElement("div");a.className="admin-skel admin-skel-bar",a.style.width="60%",a.style.height="8px",a.style.margin="6px auto",f.appendChild(a),F.appendChild(f)}}else F.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadingEmojis"))+"</div>"}async function E(){try{var F=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!F.ok)throw new Error("HTTP "+F.status);var O=await F.json();_=O.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",_.length||""),P()}catch(c){console.error("[admin-emojis] fetch failed:",c);var f=document.getElementById("emojiGrid");f&&(f.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function P(){var F=document.getElementById("emojiSearchInput"),O=(F&&F.value||"").trim().toLowerCase(),f=O?_.filter(function(c){return(c.name||"").toLowerCase().includes(O)}):_;L(f)}async function N(){var F=document.getElementById("emojiNameInput"),O=document.getElementById("emojiFileInput"),f=document.getElementById("emojiUploadBtn");if(!(!F||!O||!f)){var c=F.value.trim(),i=O.files&&O.files[0];if(!c){showToast(ServerI18n.t("emojiNameRequired"),!1),F.focus();return}if(!y.test(c)){showToast(ServerI18n.t("emojiNameInvalid"),!1),F.focus();return}if(!i){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var a=i.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(a)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}f.disabled=!0,f.textContent=ServerI18n.t("uploadingStatus");try{var o=new FormData;o.append("name",c),o.append("emojifile",i);var s=await csrfFetch("/admin/emojis/upload",{method:"POST",body:o}),l=await s.json();s.ok?(showToast(l.message||ServerI18n.t("emojiUploadFallback")),F.value="",O.value="",await E()):showToast(l.error||ServerI18n.t("uploadFailed"),!1)}catch(r){console.error("[admin-emojis] upload error:",r),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{f.disabled=!1,f.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function T(F){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",F),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var f=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:F})}),c=await f.json();f.ok?(showToast(c.message||ServerI18n.t("emojiDeleteFallback")),await E()):showToast(c.error||ServerI18n.t("deleteFailed"),!1)}catch(i){console.error("[admin-emojis] delete error:",i),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function C(F){try{await navigator.clipboard.writeText(F),showToast(ServerI18n.t("copiedLabel").replace("{label}",F))}catch{var O=document.createElement("textarea");O.value=F,O.style.position="fixed",O.style.opacity="0",document.body.appendChild(O),O.select(),document.execCommand("copy"),document.body.removeChild(O),showToast(ServerI18n.t("copiedLabel").replace("{label}",F))}}function K(){var F=document.getElementById("settings-grid");if(F){F.insertAdjacentHTML("beforeend",z());var O=document.getElementById("emojiUploadBtn");O&&O.addEventListener("click",N);var f=document.getElementById("emojiNameInput");f&&f.addEventListener("keydown",function(s){s.key==="Enter"&&(s.preventDefault(),N())});var c=document.getElementById("emojiSearchInput");c&&c.addEventListener("input",P);var i=document.getElementById("emojiGrid");i&&i.addEventListener("click",function(s){var l=s.target.closest(".emoji-copy-btn");if(l){C(l.dataset.label);return}var r=s.target.closest(".emoji-delete-btn");r&&T(r.dataset.name)});var a=document.querySelector("[data-em-dropzone]"),o=document.getElementById("emojiFileInput");a&&o&&(["dragenter","dragover"].forEach(function(s){a.addEventListener(s,function(l){l.preventDefault(),a.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(s){a.addEventListener(s,function(l){l.preventDefault(),a.classList.remove("is-dragover")})}),a.addEventListener("drop",function(s){var l=s.dataTransfer&&s.dataTransfer.files&&s.dataTransfer.files[0];if(l){var r=new DataTransfer;r.items.add(l),o.files=r.files;var t=document.getElementById("emojiNameInput");if(t&&!t.value){var d=l.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");t.value=d.slice(0,32),t.focus()}a.classList.add("is-dropping"),setTimeout(function(){a.classList.remove("is-dropping")},1200)}})),$(),E()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var F=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&K()});F.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&K()}})})()});var kt=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml,y="sec-stickers",g=["png","gif","webp"],h=".gif,.png,.webp",_="__all__",z=[],S=[],A=_;function m(c){return b(c)}function R(){var c=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,i=c?`
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
      <div id="${y}" class="admin-stickers-page hud-page-stack lg:col-span-2" data-tpl="B">
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
                ${window.AdminSkeletons?window.AdminSkeletons.html("statsTiles",{cols:4}):b(ServerI18n.t("loadingStickers"))}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}function L(c){return c===_?z.length:z.filter(function(i){return i.pack_id===c}).length}function $(){var c=document.getElementById("stickerPackList");if(c){var i='<button type="button" class="admin-stickers-pack'+(A===_?" is-active":"")+'" data-pack="'+_+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+L(_)+"</span></button>";S.forEach(function(a){var o=a.enabled?"is-success":"is-muted",s="admin-stickers-pack"+(a.id===A?" is-active":""),l=a.id==="default",r=l?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+m(a.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+m(a.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+m(a.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+m(a.id)+'" title="'+(a.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(a.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+m(a.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";i+='<div class="'+s+'" data-pack="'+m(a.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+m(a.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+o+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+b(a.name)+'</span><span class="admin-stickers-pack-count">'+L(a.id)+"</span></button>"+r+"</div>"}),c.innerHTML=i}}function E(c){var i=":"+c.name+":";return'<div class="admin-stickers-tile"><img src="'+m(c.url)+'" alt="'+m(i)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+m(i)+'">'+b(i)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+m(i)+'" title="'+m(ServerI18n.t("copyToClipboard"))+'">'+b(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+m(c.name)+'" title="'+m(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function P(){var c=document.getElementById("stickerGrid"),i=document.getElementById("stickerCount");if(c){var a=document.getElementById("stickerSearchInput"),o=(a&&a.value||"").trim().toLowerCase(),s=z.filter(function(r){return!(A!==_&&r.pack_id!==A||o&&!(r.name||"").toLowerCase().includes(o))});if(s.length===0){c.innerHTML="";var l=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});l.dataset.emptyKind="stickers",l.style.gridColumn="1 / -1",c.appendChild(l),i&&(i.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}c.innerHTML=s.map(E).join(""),i&&(i.textContent=ServerI18n.t("stickersItemCount",{n:s.length}))}}async function N(){var c=document.getElementById("stickerGrid");if(c)try{var[i,a]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!i.ok)throw new Error("HTTP "+i.status);z=(await i.json()).stickers||[],S=a.ok?(await a.json()).packs||[]:[],A!==_&&!S.some(function(o){return o.id===A})&&(A=_),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",S.length?ServerI18n.t("tabCountPacks",{n:S.length}):""),$(),P()}catch(o){console.error("[admin-stickers] fetch failed:",o),c.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function T(c,i){if(c==="select"){A=i,$(),P();return}if(c==="rename"){var a=S.find(function(k){return k.id===i}),o=prompt(ServerI18n.t("stickersPackNamePrompt"),a?a.name:"");if(!o)return;try{var s=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(i)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o})}),l=await s.json();s.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await N()):window.showToast(l.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="toggle"){try{var r=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(i)+"/toggle",{method:"POST"});r.ok&&await N()}catch{}return}if(c==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var t=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(i),{method:"DELETE"}),d=await t.json();t.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),A===i&&(A=_),await N()):window.showToast(d.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="up"||c==="down"){var p=S.slice().sort(function(k,w){return(k.order||0)-(w.order||0)}),e=p.findIndex(function(k){return k.id===i});if(e<0)return;var n=c==="up"?e-1:e+1;if(n<0||n>=p.length)return;var u=p[e],v=p[n];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(u.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:v.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(v.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:u.order||0})})]),await N()}catch{}}}async function C(){var c=prompt(ServerI18n.t("stickersNewPackPrompt"));if(c)try{var i=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),a=await i.json();i.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),A=a.pack&&a.pack.id?a.pack.id:A,await N()):window.showToast(a.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function K(){var c=document.getElementById("stickerFileInput"),i=document.getElementById("stickerUploadBtn");if(!(!c||!i)){var a=c.files&&c.files[0];if(!a){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var o=a.name.split(".").pop().toLowerCase();if(g.indexOf(o)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}i.disabled=!0;var s=i.textContent;i.textContent=ServerI18n.t("uploadingStatus");try{var l=new FormData;l.append("file",a),A&&A!==_&&l.append("pack_id",A);var r=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:l}),t=await r.json();r.ok?(window.showToast(t.message||ServerI18n.t("stickerUploadFallback")),c.value="",await N()):window.showToast(t.error||ServerI18n.t("uploadFailed"),!1)}catch(d){console.error("[admin-stickers] upload error:",d),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{i.disabled=!1,i.textContent=s}}}async function F(c){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",c),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var a=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(c),{method:"DELETE"}),o=await a.json();a.ok?(window.showToast(o.message||ServerI18n.t("stickerDeleteFallback")),await N()):window.showToast(o.error||ServerI18n.t("deleteFailed"),!1)}catch(s){console.error("[admin-stickers] delete error:",s),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function O(c){try{await navigator.clipboard.writeText(c),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}catch{var i=document.createElement("textarea");i.value=c,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}}function f(){var c=document.getElementById("settings-grid");if(c){c.insertAdjacentHTML("beforeend",R());var i=document.getElementById("stickerUploadBtn");i&&i.addEventListener("click",K);var a=document.getElementById("stickerPackAddBtn");a&&a.addEventListener("click",C);var o=document.getElementById("stickerSearchInput");o&&o.addEventListener("input",P);var s=document.getElementById("stickerPackList");s&&s.addEventListener("click",function(r){var t=r.target.closest("[data-pack-action]");if(!t){var d=r.target.closest("[data-pack]");d&&T("select",d.dataset.pack);return}var p=t.dataset.packAction,e=t.dataset.packId;p==="select"&&!e&&(e=t.closest("[data-pack]")&&t.closest("[data-pack]").dataset.pack),T(p,e)});var l=document.getElementById("stickerGrid");l&&l.addEventListener("click",function(r){var t=r.target.closest(".sticker-copy-btn");if(t){O(t.dataset.label);return}var d=r.target.closest(".sticker-delete-btn");d&&F(d.dataset.name)}),N()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&f()});c.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&f()}})})()});var Tt=me(()=>{(function(){"use strict";let b="sec-extensions-overview",y=window.AdminUtils.escapeHtml,g=15e3,h=[{id:"slido",name:"Slido Extension",version:"v0.2.0",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload",href:"/static/extensions/danmu-slido-extension-0.2.0.zip"},{kind:"config",labelKey:"extSlidoStepConfig"}]},hasFireTokenUI:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],_={fireToken:null,plainToken:null,sources:[],sourcesTimer:0};function z(){return`
      <div id="${b}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${h.map(S).join("")}
        </div>
      </div>`}function S(T){let C=T.status==="ready",K="is-cold",F=C?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,O=C&&T.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${T.install.steps.map(c=>c.kind==="download"?`<li><a class="admin-ext-step-link" href="${c.href}" target="_blank" rel="noopener noreferrer">${y(ServerI18n.t(c.labelKey))} \u2193</a></li>`:`<li>${y(ServerI18n.t(c.labelKey))}</li>`).join("")}
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
          <span class="admin-ext-status-dot ${K}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${T.color}">${T.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${y(T.name)}</div>
            <div class="meta"><span class="ver">${y(T.version)}</span></div>
          </div>
          ${F}
        </div>
        <p class="admin-ext-desc">${y(ServerI18n.t(T.descKey))}</p>
        ${O}
        ${f}
      </article>`}async function A(){try{let T=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!T.ok)return;_.fireToken=await T.json(),E()}catch{}}async function m(){try{let T=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!T.ok)return;let C=await T.json();_.sources=Array.isArray(C.sources)?C.sources:[],P()}catch{}}async function R(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let C=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!C.ok)throw new Error("HTTP "+C.status);let K=await C.json();_.fireToken={enabled:K.enabled,prefix:K.prefix,has_token:!0,rotated_at:K.rotated_at},_.plainToken=K.token,E(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenGenerated"),!0),$(K.token)}catch(C){console.warn("[ext] regen failed:",C),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function L(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let C=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!C.ok)throw new Error("HTTP "+C.status);_.fireToken=await C.json(),_.plainToken=null,E(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(C){console.warn("[ext] revoke failed:",C),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function $(T){if(T)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(T).catch(()=>{});else{let C=document.createElement("textarea");C.value=T,C.style.position="fixed",C.style.opacity="0",document.body.appendChild(C),C.select();try{document.execCommand("copy")}catch{}document.body.removeChild(C)}}function E(){let T=document.querySelector("[data-fire-token-display]"),C=document.querySelector('[data-fire-token-action="copy"]'),K=document.querySelector('[data-fire-token-action="regen"]'),F=document.querySelector('[data-fire-token-action="revoke"]');if(!T)return;let O=_.fireToken;_.plainToken?(T.textContent=_.plainToken,T.classList.add("is-plain")):O&&O.has_token?(T.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:O.prefix||""}),T.classList.remove("is-plain")):(T.textContent=ServerI18n.t("extTokenNotSetHint"),T.classList.remove("is-plain")),C&&(C.disabled=!_.plainToken),K&&(K.textContent=O&&O.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),F&&(F.disabled=!(O&&O.has_token))}function P(){let T=new Set(_.sources.map(C=>C.source));document.querySelectorAll(".admin-ext-card").forEach(C=>{let K=h.find(f=>f.id===C.dataset.ext);if(!K)return;let F=C.querySelector("[data-ext-dot]");if(!F)return;let O=K.sourceMatch&&T.has(K.sourceMatch);F.classList.toggle("is-live",!!O),F.classList.toggle("is-cold",!O)})}function N(){let T=document.getElementById("settings-grid");if(!T||document.getElementById(b))return;T.insertAdjacentHTML("beforeend",z());let C=document.getElementById(b);C&&C.addEventListener("click",K=>{let F=K.target.closest("[data-fire-token-action]");if(!F)return;let O=F.dataset.fireTokenAction;O==="regen"?R():O==="revoke"?L():O==="copy"&&_.plainToken&&($(_.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),A(),_.stopPoll||(_.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(b)},intervalMs:g,tick:m}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&N()})})()});var _t=me(()=>{(function(){"use strict";let b="sec-firetoken-overview",y=window.AdminUtils.escapeHtml,g=15e3,h={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function _(){return`
      <div id="${b}" class="admin-ft-page hud-page-stack lg:col-span-2">
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
    `}async function z(){await Promise.all([S(),A(),m()])}async function S(){try{let f=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!f.ok)return;h.token=await f.json(),N()}catch{}}async function A(){try{let f=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!f.ok)return;let c=await f.json();h.usage24h=Array.isArray(c.usage_24h)?c.usage_24h:[],h.ips=Array.isArray(c.ips)?c.ips:[],C(),K(),T()}catch{}}async function m(){try{let f=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!f.ok)return;let c=await f.json();h.audit=Array.isArray(c.events)?c.events:[],F()}catch{}}async function R(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);let i=await c.json();h.token={enabled:i.enabled,prefix:i.prefix,has_token:!0,rotated_at:i.rotated_at,created_at:i.created_at||i.rotated_at},h.plainToken=i.token,N(),$(i.token),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerated"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function L(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);h.token=await c.json(),h.plainToken=null,N(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function $(f){if(f)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(f).catch(()=>{});else{let c=document.createElement("textarea");c.value=f,c.style.position="fixed",c.style.opacity="0",document.body.appendChild(c),c.select();try{document.execCommand("copy")}catch{}document.body.removeChild(c)}}function E(f){if(!f)return"\u2014";let c=Date.now()/1e3-f;return c<60?ServerI18n.t("firetokenJustNow"):c<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(c/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(c/86400)})}function P(f){if(!f)return"\u2014";try{return new Date(f*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function N(){let f=h.token,c=document.querySelector("[data-ft-token-display]"),i=document.querySelector("[data-ft-status]"),a=document.querySelector('[data-ft-action="copy"]'),o=document.querySelector('[data-ft-action="regen"]'),s=document.querySelector('[data-ft-action="revoke"]'),l=document.querySelector('[data-ft-stat="created"]'),r=document.querySelector('[data-ft-stat="rotated"]'),t=document.getElementById("adminFtCurl");if(c&&(h.plainToken?(c.textContent=h.plainToken,c.classList.add("is-plain")):f&&f.has_token?(c.textContent=(f.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",c.classList.remove("is-plain")):(c.textContent=ServerI18n.t("firetokenNotSetHint"),c.classList.remove("is-plain")),i&&(f&&f.enabled&&f.has_token?(i.textContent=ServerI18n.t("firetokenStatusHealthy"),i.className="admin-ft-status is-good"):f&&f.has_token?(i.textContent=ServerI18n.t("firetokenStatusDisabled"),i.className="admin-ft-status is-warn"):(i.textContent=ServerI18n.t("firetokenStatusUnset"),i.className="admin-ft-status is-muted")),a&&(a.disabled=!h.plainToken),s&&(s.disabled=!(f&&f.has_token)),o&&(o.textContent=f&&f.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),l&&(l.textContent=f?P(f.created_at):"\u2014"),r&&(r.textContent=f?E(f.rotated_at):"\u2014"),t)){let d=h.plainToken?h.plainToken:f&&f.prefix?f.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";t.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${d}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function T(){let f=h.usage24h.map(l=>Number(l)||0),c=f.reduce((l,r)=>l+r,0),i=f.length?Math.max(...f):0,a=document.querySelector('[data-ft-stat="hits"]'),o=document.querySelector('[data-ft-stat="peak"]'),s=document.querySelector("[data-ft-peak-meta]");a&&(a.textContent=c.toLocaleString()),o&&(o.textContent=i.toLocaleString()),s&&(s.textContent=ServerI18n.t("firetokenPeakMeta",{peak:i.toLocaleString()}))}function C(){let f=document.getElementById("adminFtChart24h");if(!f)return;let c=h.usage24h.map(s=>Number(s)||0);if(!c.length){f.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let i=Math.max(...c),a=12e3,o=i>0?Math.min(100,a/Math.max(i,a)*100):100;f.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${c.map((s,l)=>{let r=i>0?Math.max(2,s/i*100):2;return`<div class="bar ${i>0&&s===i?"is-peak":""}" style="height:${r}%" title="${l.toString().padStart(2,"0")}:00 \u2014 ${s}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(s=>`<span>${String(s).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function K(){let f=document.getElementById("adminFtIps"),c=document.querySelector("[data-ft-ip-count]");if(!f)return;let i=h.ips||[];if(c&&(c.textContent=i.length?`${i.length} IP`:"\u2014"),!i.length){f.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let a=i[0]?.ip;f.innerHTML=i.map((o,s)=>{let l=s===0,r=o.source==="web"&&(o.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${l?"is-top":""}">
          <span class="ip">${y(o.ip||"?")}</span>
          ${l?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${r?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${y(o.source||"\u2014")}</span>
          <span class="cnt">${o.count||0} hits</span>
          <span class="when">${E(o.last_seen)}</span>
        </div>`}).join("")}function F(){let f=document.getElementById("adminFtAudit");if(!f)return;let c=h.audit||[];if(!c.length){f.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let i={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},a={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};f.innerHTML=c.map(o=>{let s=a[o.kind]||"is-info",l=i[o.kind]||o.kind,r=o.meta||{},t=r.prefix?` \xB7 prefix=${y(r.prefix)}`:r.enabled!=null?` \xB7 enabled=${r.enabled}`:"";return`
        <div class="admin-ft-audit-row ${s}">
          <span class="ts">${P(o.ts)}</span>
          <span class="kind">${y(l)}</span>
          <span class="detail">${t}</span>
        </div>`}).join("")}function O(){let f=document.getElementById("settings-grid");if(!f||document.getElementById(b))return;f.insertAdjacentHTML("beforeend",_());let c=document.getElementById(b);c&&c.addEventListener("click",i=>{let a=i.target.closest("[data-ft-action]");if(!a)return;let o=a.dataset.ftAction;o==="regen"?R():o==="revoke"?L():o==="copy"&&h.plainToken&&($(h.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),h.stopPoll||(h.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(b),intervalMs:g,tick:z}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&O()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&O()})})()});var Et=me(()=>{(function(){"use strict";let b="sec-about-overview",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(F){return String(F).replace(/[&<>"']/g,function(O){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[O]})},g="Danmu Fire",h="https://github.com/guan4tou2/danmu-desktop",_=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],z=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],S="danmu.about.lastUpdateCheck",A={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function m(){return`
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
                <span class="v" style="grid-column: span 2" data-about-admin-url>${y(location.origin+"/admin/")}</span>
              </div>
            </div>
          </article>

          <article class="admin-about-changelog">
            <div class="admin-about-changelog-head">
              <span class="admin-ui-monolabel">${ServerI18n.t("uiSectionChangelog")}</span>
              <a class="admin-about-changelog-more" href="${h}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${_.slice(0,4).map(F=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${y(F.v)}</span>
                  ${F.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${y(F.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${F.notes.slice(0,3).map(O=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${y(O.t)}">${y(O.t.toUpperCase())}</span>
                      <span class="msg">${y(O.l)}</span>
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
              ${z.slice(0,6).map(F=>`
                <div class="admin-about-oss-row">
                  <span class="n">${y(F.n)}</span>
                  <span class="v">${y(F.v)}</span>
                  <span class="l">${y(F.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function R(F){if(!F||F<0)return"\u2014";let O=Math.floor(F/86400),f=Math.floor(F%86400/3600),c=Math.floor(F%3600/60);return O>0?`${O}d ${f}h`:f>0?`${f}h ${c}m`:`${c}m`}function L(){let F=document.querySelector("[data-about-tag]"),O=document.querySelector("[data-about-build]"),f=document.querySelector("[data-about-uptime]"),c=document.querySelector("[data-about-update]"),i=document.querySelector("[data-about-checked]"),a=document.querySelector("[data-about-env]"),o=document.querySelector("[data-about-ws-path]");if(F&&(F.textContent=`v${A.appVersion}`),O){let s=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";O.textContent=`BUILD \xB7 ${s} \xB7 stable channel`,a&&(a.textContent=s)}if(f){let s=A.serverStartedAt?A.serverTime-A.serverStartedAt:0;f.textContent=R(s)}if(c&&(A.isLatest===!0?c.textContent=ServerI18n.t("aboutIsLatestYes"):A.isLatest===!1?c.textContent=ServerI18n.t("aboutHasNewVersion",{v:A.latestVersion||""}):c.textContent="\u2014",c.style.color=A.isLatest===!0?"var(--hud-lime)":A.isLatest===!1?"var(--hud-amber)":""),i&&(i.textContent=A.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:$(A.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),o){let s=window.DANMU_CONFIG||{};o.textContent=s.wsPath||"/ws"}}function $(F){let O=Number(F)||0;if(!O)return"\u2014";let f=String(O).length>12?O:O*1e3,c=(Date.now()-f)/1e3;return c<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(c)}):c<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(c/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(c/86400)})}function E(F,O){let f=o=>String(o||"").replace(/^v/i,"").split("-")[0].split(".").map(function(s){return parseInt(s,10)||0}),c=f(F),i=f(O),a=Math.max(c.length,i.length);for(let o=0;o<a;o++){let s=c[o]||0,l=i[o]||0;if(s>l)return!0;if(s<l)return!1}return!1}async function P({silent:F}={}){F||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let O=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!O.ok)throw new Error("HTTP "+O.status);let c=((await O.json()).tag_name||"").replace(/^v/i,"");A.latestVersion=c,A.lastCheckedAt=Date.now(),A.isLatest=!E(c,A.appVersion);try{localStorage.setItem(S,JSON.stringify({ts:A.lastCheckedAt,latest:c,isLatest:A.isLatest}))}catch{}L(),F||window.showToast&&window.showToast(A.isLatest?ServerI18n.t("aboutToastLatest",{v:A.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:c}),!0)}catch(O){F||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:O.message||""}),!1)}}function N(){try{let F=localStorage.getItem(S);if(!F)return;let O=JSON.parse(F);A.latestVersion=O.latest,A.lastCheckedAt=Number(O.ts)||0,A.isLatest=!!O.isLatest}catch{}}async function T(){try{let F=await fetch("/admin/metrics",{credentials:"same-origin"});if(!F.ok)return;let O=await F.json();A.serverStartedAt=Number(O.server_started_at)||0,A.serverTime=Number(O.server_time)||Date.now()/1e3,L()}catch{}}function C(){let F=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",O=A.serverStartedAt?A.serverTime-A.serverStartedAt:0,f=(navigator.userAgent||"").slice(0,200),c=[`${g} v${A.appVersion}`,`Channel: ${F}`,`Uptime: ${R(O)}`,`User-Agent: ${f}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(c).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function K(){let F=document.getElementById("settings-grid");if(!F||document.getElementById(b))return;F.insertAdjacentHTML("beforeend",m()),A.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",N(),L();let O=document.getElementById(b);O&&O.addEventListener("click",function(f){let c=f.target.closest("[data-about-action]");if(!c)return;let i=c.dataset.aboutAction;i==="copy"?C():i==="check-update"?P({silent:!1}):i==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():i==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),T(),setInterval(T,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&K()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&K()})})()});var $t=me(()=>{(function(){"use strict";let b="admin-setup-wizard-root",y="danmu.setupWizard.completed",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(p){return String(p).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})},h=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],_=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function z(p){return p?p.label?p.label:p.labelKey?ServerI18n.t(p.labelKey):p.name||p.id||"\u2014":"\u2014"}function S(p){return p?p.descriptionKey?ServerI18n.t(p.descriptionKey):p.description||"":""}let A={open:!1,step:0,themes:_.slice(),activeTheme:_[0].name,selectedTheme:_[0].name,serverName:"Danmu Fire",publicUrl:"",moderationRules:[{id:"sensitive",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",enabled:!0},{id:"rate-limit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",enabled:!0},{id:"fingerprint",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",enabled:!0}]};function m(){A.serverName="Danmu Fire",A.publicUrl=window.location.origin+"/"}function R(){let p=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";p==="setup"&&!A.open?L():p!=="setup"&&A.open&&$({silent:!0})}function L(){A.open=!0,A.step=0,m(),document.body.dataset.setupWizardOpen="1",document.getElementById(b)||(document.body.insertAdjacentHTML("beforeend",E()),i()),s(),P()}function $(p){let e=p&&p.silent;A.open=!1,document.body.dataset.setupWizardOpen="";let n=document.getElementById(b);if(n&&n.remove(),!e&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function E(){return`
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
            ${h.map(function(p,e){return`
                <div class="admin-setup-step" data-step-index="${e}">
                  <span class="bullet">${e+1}</span>
                  <span class="lbl">${g(ServerI18n.t(p.labelKey))}</span>
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
      </div>`}function P(){let p=document.getElementById(b);if(!p)return;p.querySelectorAll(".admin-setup-step").forEach(function(I,B){I.classList.toggle("is-done",B<A.step),I.classList.toggle("is-active",B===A.step)}),p.querySelectorAll(".admin-setup-step-sep").forEach(function(I,B){I.classList.toggle("is-done",B<A.step)});let e=p.querySelector("[data-setup-meta]");e&&(e.textContent=ServerI18n.t("setupWizardStepMeta",{current:A.step+1,total:h.length}));let n=p.querySelector('[data-setup-action="prev"]');n&&(n.disabled=A.step===0);let u=p.querySelector('[data-setup-action="next"]');if(u){let I=h[A.step].id;u.textContent=ServerI18n.t("setupWizardNext")}let v=p.querySelector("[data-setup-foot]");v&&(v.hidden=h[A.step].id==="done");let k=p.querySelector("[data-setup-content]");if(!k)return;let w=h[A.step].id;w==="server"?k.innerHTML=T():w==="moderation"?k.innerHTML=K():w==="theme"?k.innerHTML=f():k.innerHTML=c(),o(w)}function N(p,e,n){return`
      <div class="admin-setup-field">
        <label class="admin-setup-field-label" for="setup-field-${p}">${g(e)}</label>
        <input
          id="setup-field-${p}"
          class="admin-setup-input"
          data-setup-field="${p}"
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
      </div>`}function C(p,e,n,u){return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${g(p)}</h2>
        <p class="admin-setup-step-desc">${g(e)}</p>
        <div class="admin-setup-toggle-list">
          ${n.map(function(v){return`
              <button
                type="button"
                class="admin-setup-toggle-row${v.enabled?" is-on":""}"
                ${u}="${g(v.id)}"
                aria-pressed="${v.enabled?"true":"false"}"
              >
                <span class="admin-setup-toggle-body">
                  <span class="admin-setup-toggle-title">${g(ServerI18n.t(v.labelKey))}</span>
                  <span class="admin-setup-toggle-desc">${g(ServerI18n.t(v.descKey))}</span>
                </span>
                <span class="admin-setup-toggle-switch${v.enabled?" is-on":""}">
                  <span class="thumb"></span>
                </span>
              </button>`}).join("")}
        </div>
      </div>`}function K(){return C(ServerI18n.t("setupWizardStepModeration"),ServerI18n.t("setupWizardModerationDesc"),A.moderationRules,"data-setup-moderation-toggle")}let F=["default","neon","retro","cinema"];function O(){let p={};return(A.themes||[]).forEach(function(e){p[e.name||e.id]=e}),F.map(function(e){let n=_.filter(function(v){return v.name===e})[0],u=p[e];return n?{name:e,label:u&&u.label,labelKey:n.labelKey,descriptionKey:n.descriptionKey,colors:n.colors}:u}).filter(Boolean)}function f(){let p=O();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${p.map(function(e){let n=e.name||e.id||"",u=(A.selectedTheme||A.activeTheme)===n,v=(e.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${u?" is-selected":""}" data-setup-theme="${g(n)}">
                ${u?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${v.map(function(k,w){let I=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${g(k)};font-size:${10+w*2}px;text-shadow:0 0 6px ${g(k)}66;">${I[w]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${g(z(e))}</div>
                <div class="admin-setup-theme-sub">${g(S(e))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function c(){let p=(function(){for(let n=0;n<A.themes.length;n+=1){let u=A.themes[n];if((u.name||u.id)===(A.selectedTheme||A.activeTheme))return z(u)}return A.selectedTheme||A.activeTheme||"\u2014"})(),e=A.moderationRules.filter(function(n){return n.enabled}).length;return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${g(A.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${g(p)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepModeration")}</span><span class="v">${ServerI18n.t("setupWizardEnabledCount",{n:e,total:A.moderationRules.length})}</span></div>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function i(){let p=document.getElementById(b);p&&p.addEventListener("click",function(e){if(e.target===p){$();return}let n=e.target.closest("[data-setup-action]");if(n){if(n.dataset.setupAction==="close"){$();return}if(n.dataset.setupAction==="prev"&&A.step>0){A.step-=1,P();return}n.dataset.setupAction==="next"&&r()}})}function a(p,e){return p.map(function(n){return n.id===e?Object.assign({},n,{enabled:!n.enabled}):n})}function o(p){let e=document.getElementById(b);if(e){if(p==="moderation"){e.querySelectorAll("[data-setup-moderation-toggle]").forEach(function(n){n.addEventListener("click",function(){A.moderationRules=a(A.moderationRules,n.dataset.setupModerationToggle),P()})});return}if(p==="theme"){e.querySelectorAll("[data-setup-theme]").forEach(function(n){n.addEventListener("click",function(){A.selectedTheme=n.dataset.setupTheme||A.selectedTheme,P()})});return}if(p==="done"){let n=e.querySelector("[data-setup-complete-cta]");n&&n.addEventListener("click",t)}}}async function s(){try{let p=await fetch("/admin/themes",{credentials:"same-origin"});if(!p.ok)return;let e=await p.json(),n=Array.isArray(e.themes)?e.themes:[];if(!n.length)return;A.themes=n.map(function(u){return{name:u.name||u.id||"",label:u.label||u.display_name||u.name||"",description:u.description||"",colors:u.preview_colors||u.colors||u.palette||_[0].colors}}),A.activeTheme=e.active||A.themes[0]&&A.themes[0].name||A.activeTheme,A.selectedTheme||(A.selectedTheme=A.activeTheme),A.open&&h[A.step].id==="theme"&&P()}catch{}}async function l(){if(!A.selectedTheme||A.selectedTheme===A.activeTheme)return!0;try{let p=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A.selectedTheme})});if(!p.ok)throw new Error("HTTP "+p.status);return A.activeTheme=A.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function r(){if(!(h[A.step].id==="theme"&&!await l())){if(A.step<h.length-1){A.step+=1,P();return}t()}}function t(){try{localStorage.setItem(y,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),$()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}L()},close:function(){$()},isCompleted:function(){try{return!!localStorage.getItem(y)}catch{return!1}},__setCapabilityForTest:function(){}};function d(){window.addEventListener("hashchange",R),R()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&d()})})()});var xt=me(()=>{(function(){"use strict";let b="sec-poll-deepdive-overview",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(T){return String(T).replace(/[&<>"']/g,function(C){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[C]})},g={poll:null,refreshTimer:0};function h(){return`
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
      </div>`}function _(T){if(T.innerHTML="",!window.AdminEmpty){T.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let C=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});C.classList.add("lg:col-span-2"),C.dataset.emptyKind="poll-deepdive",T.appendChild(C)}let z=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function S(T){return T?new Date(T*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function A(T){if(!T||T.length<2)return"";let C=Math.max.apply(null,T.map(function(c){return c.n}).concat([1])),K=100,F=32,O=K/(T.length-1),f=T.map(function(c,i){let a=(i*O).toFixed(2),o=(F-c.n/C*(F-2)-1).toFixed(2);return a+","+o});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+K+" "+F+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+f.join(" ")+'" /></svg>'}function m(T){let C=T.state||(T.active?"active":"ended"),K=T.question||"\u2014",F=Array.isArray(T.options)?T.options:[],O=function(p){return Number(p.votes!=null?p.votes:p.count)||0},f=F.reduce(function(p,e){return p+O(e)},0),c=C==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:S(T.ended_at)}),i=(function(){let p=Number(T.started_at)||0;if(!p)return"\u2014";let e=C==="active"?Date.now()/1e3:Number(T.ended_at)||p,n=Math.max(0,Math.floor(e-p));return Math.floor(n/60)+":"+String(n%60).padStart(2,"0")})(),a=Number(window._lastOverlayCount)||0,o=a>0?Math.round(f/a*100)+"%":"\u2014",s=a>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:f,audience:a}):ServerI18n.t("pollDeepdiveParticipationUnknown"),l=(function(){let p=Array.isArray(T.questions)?T.questions:[],e=0;for(let n of p)e+=Number(n.duplicate_attempts)||0;return p.length||(e=Number(T.duplicate_attempts)||0),e})(),r=F.map(function(p,e){let n=O(p),u=f>0?n/f*100:0,v=z[e%z.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${y(p.label||p.text||p.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:e+1}))}</span>
            <span class="votes">${n} \xB7 ${u.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${u.toFixed(2)}%;background:${v}"></div>
          </div>
        </div>`}).join(""),t=Array.isArray(T.vote_timeline)?T.vote_timeline:[],d=t.length>=2?A(t):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${y(K)}</div>
          <div class="admin-pdd-state">${y(c)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${f}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${o}</div><div class="sub">${y(s)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${y(i)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${l}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${F.length?r:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${d}</div>
        </article>
      </div>`}function R(){let T=document.querySelector("[data-pdd-grid]");if(T){if(!g.poll||!g.poll.poll_id){_(T);return}T.innerHTML=m(g.poll)}}async function L(){try{let T=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!T.ok)return;let C=await T.json();g.poll=C,R()}catch{}}function $(){if(!g.poll||!Array.isArray(g.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let T=[["option_label","votes","percentage"]],C=g.poll.options.reduce(function(c,i){return c+(Number(i.votes!=null?i.votes:i.count)||0)},0);g.poll.options.forEach(function(c,i){let a=Number(c.votes!=null?c.votes:c.count)||0,o=C>0?(a/C*100).toFixed(2):"0.00";T.push([c.label||"option_"+(i+1),a,o])});let K=T.map(function(c){return c.map(function(i){let a=String(i);return a.includes(",")||a.includes('"')?'"'+a.replace(/"/g,'""')+'"':a}).join(",")}).join(`
`),F=new Blob([K],{type:"text/csv;charset=utf-8"}),O=URL.createObjectURL(F),f=document.createElement("a");f.href=O,f.download="poll-"+(g.poll.poll_id||"current")+".csv",document.body.appendChild(f),f.click(),document.body.removeChild(f),setTimeout(function(){URL.revokeObjectURL(O)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function E(){try{let T=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!T.ok)throw new Error("HTTP "+T.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function P(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(L(),g.refreshTimer||(g.refreshTimer=setInterval(L,5e3))):g.refreshTimer&&(clearInterval(g.refreshTimer),g.refreshTimer=0)}function N(){let T=document.getElementById("settings-grid");if(!T||document.getElementById(b))return;T.insertAdjacentHTML("beforeend",h());let C=document.getElementById(b);C&&C.addEventListener("click",function(K){let F=K.target.closest("[data-pdd-action]");F&&(F.dataset.pddAction==="export-csv"?$():F.dataset.pddAction==="push"&&E())}),L(),P(),window.addEventListener("hashchange",P)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&N()})})()});var Lt=me(()=>{(function(){"use strict";let b="admin-message-drawer-root",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},h={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]};function _(o){let s=o.detail&&o.detail.entry;s&&(h.entry=s,z(),s.data&&s.data.fingerprint&&R(s.data.fingerprint),L(s))}function z(){h.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(b)||(document.body.insertAdjacentHTML("beforeend",$()),E()),P()}function S(){h.open=!1,document.body.dataset.messageDrawerOpen="";let o=document.getElementById(b);o&&o.remove()}function A(o){if(h.open){if(o.key==="Escape"){S();return}if(o.key==="ArrowLeft"||o.key==="k"){m(-1),o.preventDefault();return}if(o.key==="ArrowRight"||o.key==="j"){m(1),o.preventDefault();return}}}function m(o){if(!h.entry)return;let s=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(s=window.AdminLiveFeed.getEntries()),!s.length)return;let l=s.findIndex(function(d){return d.id===h.entry.id});if(l<0)return;let r=l+-o;if(r<0||r>=s.length){window.showToast&&window.showToast(o<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let t=s[r];h.entry=t,h.fingerprintRecord=null,L(t),P(),t.data&&t.data.fingerprint&&R(t.data.fingerprint)}async function R(o){try{let s=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!s.ok)return;let l=await s.json(),t=(Array.isArray(l.records)?l.records:[]).find(function(d){return(d.fingerprint||"").startsWith(o.slice(0,8))});h.fingerprintRecord=t||null,P()}catch{}}function L(o){let s=o.data&&o.data.fingerprint;if(!s){h.sameFpEntries=[];return}let l=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(l=window.AdminLiveFeed.getEntries()),h.sameFpEntries=l.filter(function(r){let t=r.data&&r.data.fingerprint||r.fingerprint||"";return t&&t.startsWith(s.slice(0,8))}).slice(0,8)}function $(){return`
      <div id="${b}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function E(){let o=document.getElementById(b);o&&o.addEventListener("click",function(s){let l=s.target.closest("[data-msgd-action]");if(!l)return;s.stopPropagation();let r=l.dataset.msgdAction;r==="close"?S():r==="ban-fp"?F():r==="ban-fp-quick"?K():r==="mute-fp"?f():r==="mask-msg"?c():r==="blacklist-kw"?i():r==="reply"?a():r==="prev"?m(-1):r==="next"&&m(1)})}function P(){let o=document.getElementById(b);if(!o)return;let s=o.querySelector("[data-msgd-body]");s&&(s.innerHTML=N())}function N(){let o=h.entry;if(!o)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let s=o.data||{},l=s.fingerprint||"\u2014",r=l==="\u2014"?"\u2014":l.slice(0,8),t=l==="\u2014"?"\u2014":l.slice(0,12),d=o.ts?T(o.ts):"\u2014",p=s.nickname||ServerI18n.t("msgDrawerAnonymous"),e=h.fingerprintRecord||{},n=Number(e.message_count)||0,u=Number(e.violation_count)||0,v=h.sameFpEntries||[],k=v.length?Math.round(v.reduce((I,B)=>I+((B.data||B).text||"").length,0)/v.length):(s.text||"").length,w=0;for(let I=0;I<l.length;I++)w=w*31+l.charCodeAt(I)&65535;return w=w%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${w})">${g((p||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${g(p)}</div>
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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${n||v.length}</div></div>
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
    `}function T(o){try{let s=new Date(o),l=String(s.getHours()).padStart(2,"0"),r=String(s.getMinutes()).padStart(2,"0"),t=String(s.getSeconds()).padStart(2,"0");return l+":"+r+":"+t}catch{return"\u2014"}}function C(o){let s;if(typeof o=="number")s=o*1e3;else if(typeof o=="string")s=new Date(o).getTime();else return"\u2014";if(!s)return"\u2014";let l=(Date.now()-s)/1e3;return l<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(l)}):l<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(l/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(l/86400)})}async function K(o,s,l){let r=h.entry&&h.entry.data&&h.entry.data.fingerprint;if(!r)return;let t=parseInt(s||0,10)||0;try{let d=t>0?await window.csrfFetch("/admin/modbans",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:r,duration_s:t,reason:o||"",kind:"ban"})}):await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:r,reason:o||""})});if(!d.ok)throw new Error("HTTP "+d.status);let p=l||(t>0?ServerI18n.t("msgDrawerSecondsLabel",{n:t}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:r.slice(0,8),label:p}),!0),S()}catch(d){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:d.message||""}),!1)}}async function F(){let o=h.entry&&h.entry.data||{},s=o.fingerprint||"\u2014";if(s==="\u2014")return;let l=s.slice(0,12),r=o.nickname||ServerI18n.t("msgDrawerAnonymous"),t=0;for(let w=0;w<s.length;w++)t=t*31+s.charCodeAt(w)&65535;t=t%360;let d=document.createElement("div");d.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${t})">${g((r||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${g(r)}</div>
          <div class="fp">fp:${g(l)}</div>
          <div class="ip">IP \xB7 ${g(o.ip||"\u2014")} \xB7 ${g(o.user_agent||o.ua||"\u2014")}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let p=w=>{d.querySelectorAll(".admin-bancfm-dchip").forEach(I=>I.classList.remove("is-active")),w.classList.add("is-active")};if(d.addEventListener("click",w=>{let I=w.target.closest("[data-ban-duration]");I&&p(I)}),d.addEventListener("keydown",w=>{if(w.key!=="Enter"&&w.key!==" ")return;let I=w.target.closest("[data-ban-duration]");I&&(w.preventDefault(),p(I))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:d,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let n=(d.querySelector("[data-ban-reason]")||{}).value||"",u=d.querySelector(".admin-bancfm-dchip.is-active"),v=u&&parseInt(u.dataset.banDuration||"0",10)||0,k=u?u.textContent.trim():ServerI18n.t("msgDrawerPermanent");return K(n.trim(),v,k)}function O(){}async function f(){return K("[mute]")}async function c(){let o=h.entry&&h.entry.data&&h.entry.data.text;if(!(!o||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBlacklistKwTitle"),subtitle:ServerI18n.t("cfmSubBlacklistKeyword"),severity:"danger",body:ServerI18n.t("msgDrawerBlacklistKwBody"),confirmLabel:ServerI18n.t("msgDrawerBlacklistKwConfirm")})))try{let l=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"keyword",value:o})});if(!l.ok)throw new Error("HTTP "+l.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBlacklisted"),!0),S()}catch(l){window.showToast&&window.showToast(ServerI18n.t("msgDrawerMaskFailed",{msg:l.message||""}),!1)}}async function i(){return c()}async function a(){let o=document.querySelector("[data-msgd-reply]"),s=o?o.value.trim():"";if(s)try{let l=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:s})});if(!l.ok)throw new Error("HTTP "+l.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),o&&(o.value="")}catch(l){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:l.message||""}),!1)}}window.AdminMessageDrawer={open:function(o){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:o}}))},close:S},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",_),document.addEventListener("keydown",A))})})()});var Ct=me(()=>{(function(){"use strict";let b="danmu.notifications.read",y="danmu.notifications.archived",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(r){return String(r).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})},h={items:[],refreshTimer:0};function _(r){try{let t=localStorage.getItem(r);if(!t)return new Set;let d=JSON.parse(t);return new Set(Array.isArray(d)?d:[])}catch{return new Set}}function z(r,t){try{localStorage.setItem(r,JSON.stringify(Array.from(t)))}catch{}}function S(r){let t=_(b);t.add(r),z(b,t)}async function A(){let r=[m().catch(function(){return[]}),R().catch(function(){return[]}),L().catch(function(){return[]}),$().catch(function(){return[]})],d=(await Promise.all(r)).flat();d.sort(function(p,e){return(e.ts||0)-(p.ts||0)}),h.items=d,C(),O()&&K()}async function m(){let r=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!r.ok)return[];let t=await r.json();return(Array.isArray(t.events)?t.events:[]).map(function(p,e){let n=(Number(p.ts)||0)*1e3,u="tok-"+(p.ts||e)+"-"+(p.kind||"x"),v=p.kind||"?",k="info",w=ServerI18n.t("notifTitleFireTokenEvent");if(v==="rotated")k="info",w=ServerI18n.t("notifTitleFireTokenRotated");else if(v==="revoked")k="warn",w=ServerI18n.t("notifTitleFireTokenRevoked");else if(v==="toggled"){let I=p.meta&&p.meta.enabled;k=I?"good":"warn",w=ServerI18n.t("notifTitleFireTokenToggled",{state:I?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:u,sev:k,src:"Fire Token",ts:n,title:w,desc:ServerI18n.t("notifDescEventType",{kind:v})+(p.meta?" \xB7 "+JSON.stringify(p.meta):""),raw:p}})}async function R(){let r=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!r.ok)return[];let t=await r.json();return(Array.isArray(t.events)?t.events:[]).map(function(p,e){let n=(Number(p.ts)||0)*1e3,u="flt-"+(p.ts||e)+"-"+(p.action||"x")+"-"+e,v=p.action||"match";return{id:u,sev:v==="drop"?"warn":"info",src:"Moderation",ts:n,title:ServerI18n.t("notifTitleFilterHit",{action:v}),desc:ServerI18n.t("notifDescFilterHit",{rule:p.rule_id||"?",text:(p.text||"").slice(0,60)}),raw:p}})}async function L(){let r=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!r.ok)return[];let t=await r.json();return(Array.isArray(t.events)?t.events:[]).map(function(p,e){let n=(Number(p.ts)||0)*1e3,u=String(p.kind||"?");return{id:"wh-"+(p.ts||e)+"-"+u+"-"+e,sev:u==="unregister"?"warn":"info",src:"Webhooks",ts:n,title:ServerI18n.t("notifTitleWebhookEvent",{kind:u}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:p.actor||"system"})+(p.meta?" \xB7 "+JSON.stringify(p.meta):""),raw:p}})}async function $(){let r=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!r.ok)return[];let t=await r.json(),d=Array.isArray(t.events)?t.events:[],p=new Set(["auth","broadcast","system","session","sessions"]);return d.filter(function(e){return p.has(String(e.source||""))}).map(function(e,n){let u=(Number(e.ts)||0)*1e3,v=String(e.kind||"?");return{id:"sys-"+(e.ts||n)+"-"+(e.source||"x")+"-"+v+"-"+n,sev:v==="login_failed"?"warn":"info",src:"System",ts:u,title:ServerI18n.t("notifTitleSystemEvent",{kind:v}),desc:ServerI18n.t("notifDescSystemEvent",{source:e.source||"?",actor:e.actor||"system"}),raw:e}})}let E="admin-notif-panel",P={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/integrations/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/integrations/plugins"},System:{key:"adminNavSystem",hash:"#/events"}};function N(r){let t=P[r];return t?ServerI18n.t(t.key):r}function T(){let r=_(b),t=_(y);return h.items.filter(d=>!r.has(d.id)&&!t.has(d.id))}function C(){let r=document.querySelector("[data-notif-badge]");if(!r)return;let t=T().length;r.textContent=t>99?"99+":String(t),r.hidden=t===0}function K(){let r=document.getElementById(E);if(!r)return;let t=T().slice(0,20),d=t.length?t.map(p=>{let e=P[p.src];return'<li class="admin-notif__item" data-sev="'+g(p.sev)+'"><div class="admin-notif__text">'+g(p.title)+'</div><div class="admin-notif__meta">'+g(N(p.src))+" \xB7 "+g(F(p.ts))+"</div>"+(e?'<button type="button" class="admin-notif__action" data-notif-go="'+g(e.hash)+'" data-notif-id="'+g(p.id)+'">'+g(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+g(ServerI18n.t("notifEmpty"))+"</li>";r.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+g(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+g(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+d+"</ul>"}function F(r){if(!r)return"\u2014";let t=(Date.now()-r)/1e3;return t<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(t)}):t<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(t/60)}):t<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(t/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(t/86400)})}function O(){let r=document.getElementById(E);return!!r&&!r.hidden}function f(){let r=document.getElementById(E);r&&(K(),r.hidden=!1,h.refreshTimer||(h.refreshTimer=setInterval(A,3e4)))}function c(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&f()}function i(){let r=document.getElementById(E);r&&(r.hidden=!0),h.refreshTimer&&(clearInterval(h.refreshTimer),h.refreshTimer=0)}function a(){O()?i():f()}function o(){let r=document.querySelector(".admin-dash-topbar-actions");if(!r||document.getElementById("admin-notif-bell"))return;let t=document.createElement("button");if(t.id="admin-notif-bell",t.type="button",t.className="admin-dash-search is-icon-only admin-notif-bell",t.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),t.title=ServerI18n.t("adminRouteTitle_notifications"),t.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',r.insertBefore(t,r.firstChild),!document.getElementById(E)){let d=document.createElement("div");d.id=E,d.className="admin-notif",d.setAttribute("role","dialog"),d.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),d.hidden=!0,document.body.appendChild(d)}C(),c()}function s(){document.addEventListener("click",r=>{if(r.target.closest("#admin-notif-bell")){r.preventDefault(),a();return}let t=r.target.closest("[data-notif-go]");if(t){S(t.dataset.notifId),i(),location.hash=t.dataset.notifGo,C();return}if(r.target.closest("[data-notif-readall]")){T().forEach(d=>S(d.id)),K(),C();return}O()&&!r.target.closest("#"+E)&&i()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&O()&&i()}),window.addEventListener("hashchange",c),c()}function l(){o(),A()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(o).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),s(),l()})})()});var At=me(()=>{(function(){"use strict";let b="sec-audit-overview",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},g={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},h={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function _(){return`
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
      </div>`}function z(a){if(!a)return"\u2014";try{let o=new Date(Number(a)*1e3),s=String(o.getHours()).padStart(2,"0"),l=String(o.getMinutes()).padStart(2,"0"),r=String(o.getSeconds()).padStart(2,"0");return`${s}:${l}:${r}`}catch{return"\u2014"}}function S(a){let o=String(a.action||a.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(o)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(o)?"warn":"info"}function A(a){return a==="danger"?"var(--hud-crimson, #f87171)":a==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function m(a){return h.filterActor==="all"||String(a.actor||"").toLowerCase()===h.filterActor}function R(a){return h.filterSeverity==="all"||S(a)===h.filterSeverity}function L(){return h.events.filter(function(a){return m(a)&&R(a)})}function $(a){let o=a&&a.meta&&typeof a.meta=="object"?a.meta:{};return o.target||o.keyword||o.fp||o.fingerprint||o.name||o.mode||o.session||o.hook_id||a.target||""}function E(a,o){let s=a!=null,l=o!=null;if(!s&&!l)return"";let r=s?y(JSON.stringify(a)):"",t=l?y(JSON.stringify(o)):"";return s?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${r}</span> \u2192 <span class="admin-audit-diff-a">${t}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${t}</span></span>`}function P(a){let o=a&&a.meta&&typeof a.meta=="object"?a.meta:{},s=[];a.detail&&s.push(`<span>${y(String(a.detail))}</span>`);let l=E(a.before,a.after);l&&s.push(l);let r=Object.assign({},o);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(d){delete r[d]}),Object.keys(r).length&&s.push(`<code class="admin-ui-code admin-audit-meta-extra">${y(JSON.stringify(r))}</code>`),!s.length){let d=g[a.source]&&g[a.source].label||a.source||"system";s.push(`<span>${y(String(d))}</span>`)}return s.join(" ")}function N(a){return a==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":a==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function T(){let a=document.querySelector("[data-audit-rows]");if(!a)return;let o=L();if(!o.length){a.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}a.innerHTML=o.map(function(s){let l=S(s),r=A(l),t=String(s.actor||"system"),d=$(s);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${l}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${y(z(s.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${r};box-shadow:0 0 6px ${r}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${N(t)}">${y(t)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${y(String(s.action||s.kind||"\u2014"))}</span>
              ${d?`<span class="admin-ui-target admin-audit-target">\u2192 ${y(String(d))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${P(s)}</div>
          </div>
        </div>`}).join("")}function C(){let a=document.querySelector("[data-audit-summary]");if(!a)return;let o=L().length,s=h.filterActor==="all"?ServerI18n.t("auditAllRoles"):h.filterActor,l=h.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):h.filterSeverity.toUpperCase();a.textContent=ServerI18n.t("auditSummaryLine",{n:o,actor:s,sev:l})}function K(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(a){a.classList.toggle("is-active",a.dataset.auditActorFilter===h.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(a){a.classList.toggle("is-active",a.dataset.auditSeverityFilter===h.filterSeverity)})}async function F(){try{let a=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!a.ok)return;let o=await a.json(),s=Array.isArray(o.events)?o.events.slice():[];s.sort(function(l,r){return Number(r.ts||0)-Number(l.ts||0)}),h.events=s,K(),T(),C()}catch{}}function O(){let a=L();if(!a.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let o=new Blob([JSON.stringify(a,null,2)],{type:"application/json;charset=utf-8"}),s=URL.createObjectURL(o),l=document.createElement("a");l.href=s,l.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(l),l.click(),document.body.removeChild(l),setTimeout(function(){URL.revokeObjectURL(s)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:a.length}),!0)}function f(){let a=document.getElementById(b);a&&a.addEventListener("click",function(o){let s=o.target.closest("[data-audit-actor-filter]");if(s){h.filterActor=s.dataset.auditActorFilter||"all",K(),T(),C();return}let l=o.target.closest("[data-audit-severity-filter]");if(l){let r=l.dataset.auditSeverityFilter||"all";h.filterSeverity=h.filterSeverity===r?"all":r,K(),T(),C();return}if(o.target.closest("[data-audit-export]")){O();return}o.target.closest("[data-audit-refresh]")&&F()})}function c(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(F(),h.refreshTimer||(h.refreshTimer=setInterval(F,3e4))):h.refreshTimer&&(clearInterval(h.refreshTimer),h.refreshTimer=0)}function i(){let a=document.getElementById("settings-grid");!a||document.getElementById(b)||(a.insertAdjacentHTML("beforeend",_()),f(),F(),c(),window.addEventListener("hashchange",c))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&i()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&i()})})()});var Bt=me(()=>{(function(){"use strict";let b="sec-audience-overview",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},g=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],h=20,_={records:[],filter:"all",shown:h,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function z(n){if(!n)return g[0];let u=0;for(let v=0;v<n.length;v++)u=u*31+n.charCodeAt(v)>>>0;return g[u%g.length]}function S(n){if(!n)return"\u2014";let u=typeof n=="number"?n*1e3:new Date(n).getTime();if(!u)return"\u2014";let v=Math.max(0,(Date.now()-u)/1e3);return v<60?Math.floor(v)+"s":v<3600?Math.floor(v/60)+"m":v<86400?Math.floor(v/3600)+"h":Math.floor(v/86400)+"d"}function A(n){return n==="blocked"||n==="high"?"is-danger":n==="mid"?"is-warn":"is-success"}function m(){return`
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
      </div>`}function R(){let n=_.search.trim().toLowerCase(),u=_.records.slice();return n&&(u=u.filter(function(v){return String(v.nickname||"").toLowerCase().indexOf(n)!==-1||String(v.hash||"").toLowerCase().indexOf(n)!==-1})),u.sort(function(v,k){return _.sort==="last_seen"?(Number(k.last_seen)||0)-(Number(v.last_seen)||0):(Number(k.msgs)||0)-(Number(v.msgs)||0)}),_.filter==="all"?u:_.filter==="flagged"?u.filter(function(v){return v.state==="flagged"||v.state==="blocked"}):_.filter==="extension"?u.filter(function(v){return v.fingerprint&&(v.fingerprint.indexOf("slido")===0||v.fingerprint.indexOf("ext_")===0)}):u}function L(){let n=document.querySelector("[data-aud-stats]");if(!n)return;let u=_.records,v=u.length,k=u.filter(function(H){return H.state==="flagged"}).length,w=u.filter(function(H){return H.state==="blocked"}).length,I=u.reduce(function(H,D){return H+(Number(D.msgs)||0)},0),B=u.filter(function(H){let D=H.last_seen;if(!D)return!1;let x=typeof D=="number"?D*1e3:new Date(D).getTime();return(Date.now()-x)/1e3<300}).length;n.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${v}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${B}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${I}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${k}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${w}</div></div>`}function $(){let n=document.querySelector("[data-aud-filters]");if(!n)return;let u=_.records.length,v=_.records.filter(function(k){return k.state==="flagged"||k.state==="blocked"}).length;n.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${_.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:u})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${_.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:v})}</button>`}let E="__anon__";function P(n){let u=(n.nickname||"").trim();return!u||u==="\u533F\u540D"}function N(n){let u=n.hash||n.fingerprint||"";return u?u.length>9?u.slice(0,4)+"\u2026"+u.slice(-4):u:"\u2014"}function T(){let n=[],u=[];return R().forEach(function(v){P(v)?u.push(v):n.push(v)}),u.length&&n.push({_anonGroup:!0,_count:u.length,fingerprint:E,msgs:u.reduce(function(v,k){return v+(Number(k.msgs)||0)},0),blocked:u.reduce(function(v,k){return v+(Number(k.blocked)||0)},0),last_seen:Math.max.apply(null,u.map(function(v){return v.last_seen||0})),state:u.some(function(v){return v.state==="blocked"})?"blocked":"active"}),n}function C(){let n=document.querySelector("[data-aud-list]"),u=document.querySelector("[data-aud-summary]");if(!n)return;let v=T(),k=Math.min(v.length,_.shown);if(u&&(u.textContent=ServerI18n.t("audienceShownOfTotal",{n:k,total:v.length})),v.length===0){n.innerHTML="";let H=window.AdminEmpty.render("audience");H.dataset.emptyKind="audience",n.appendChild(H);return}let w=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,I=v.slice(0,k).map(function(H){let D=H.fingerprint||"\u2014",x=H.state==="blocked",U=H._anonGroup?ServerI18n.t("audienceAnonymous"):(H.nickname||"").trim(),G=H._anonGroup?"?":U.slice(0,1),Y=z(D);return`
        <div class="admin-aud-row${_.selectedFp===D?" is-selected":""}" data-aud-row data-aud-fp="${y(D)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${Y}">${y(G)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${y(U)}</span>
            ${H._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:H._count})}</span>`:""}
            ${x&&!H._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${H._anonGroup?"\u2014":y(N(H))}</span>
          <span class="col col-msgs">${Number(H.msgs)||0}</span>
          <span class="col col-blocked">${Number(H.blocked)||0}</span>
          <span class="col col-seen">${y(S(H.last_seen))}</span>
          <span class="col col-actions">
            ${H._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${y(D)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),B=v.length>k?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";n.innerHTML=w+I+B}function K(n){return n&&_.records.find(function(u){return u.fingerprint===n})||null}function F(n){if(!n)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let u=[],v=Number(n.msgs)||0,k=n.fingerprint||"";n.state==="blocked"&&u.push(ServerI18n.t("audienceRuleBlocked")),n.state==="flagged"&&u.push(ServerI18n.t("audienceRuleFlagged")),v>=25?u.push(ServerI18n.t("audienceRuleMsgOver",{n:v})):v>=15&&u.push(ServerI18n.t("audienceRuleMsgNear",{n:v}));let w=_.records.filter(function(D){return D.ip&&n.ip&&D.ip===n.ip}).length;w>=3&&u.push(ServerI18n.t("audienceRuleSameIp",{n:w})),(k.indexOf("slido")===0||k.indexOf("ext_")===0)&&u.push(ServerI18n.t("audienceRuleBridge")),(n.nickname==="\u533F\u540D"||!n.nickname)&&u.push(ServerI18n.t("audienceRuleNoNick"));let I="normal",B="var(--hud-lime)",H="NORMAL";return n.state==="blocked"?(I="blocked",B="var(--hud-crimson)",H="BLOCKED"):n.state==="flagged"||v>=25?(I="high",B="var(--hud-crimson)",H="HIGH RISK"):(v>=15||w>=3)&&(I="mid",B="var(--hud-amber)",H="MID"),{level:I,color:B,label:H,rules:u}}async function O(n){_.detailLoading=!0;try{let u=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!u.ok){_.detailMessages=[];return}let v=await u.json(),k=Array.isArray(v.records)?v.records:[],w=Date.now()-300*1e3;_.detailMessages=k.filter(function(I){return(I.fingerprint||"")!==n?!1:(I.timestamp?new Date(I.timestamp).getTime():0)>=w}).slice(0,8)}catch{_.detailMessages=[]}finally{_.detailLoading=!1}}function f(){let n=document.querySelector("[data-aud-detail]");if(!n)return;let u=_.selectedFp;if(!u){n.hidden=!0,n.innerHTML="";return}let v=K(u);if(!v){_.selectedFp=null,n.hidden=!0;return}n.hidden=!1;let k=F(v);n.dataset.riskLevel=k.level;let w=z(u),I=!v.nickname||v.nickname==="\u533F\u540D",B=I?ServerI18n.t("audienceAnonymous"):v.nickname,H=I?"?":B.slice(0,1),D="fp:"+(u||"").slice(0,8),x=k.rules.length?k.rules.map(function(G){return"<li>"+y(G)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",U="";_.detailLoading?U='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":_.detailMessages.length===0?U='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":U=_.detailMessages.map(function(G){let Y=G.muted?"MASKED":G.banned?"BLOCKED":"SHOWN",M=G.muted?"var(--hud-amber)":G.banned?"var(--hud-crimson)":"var(--hud-lime)",q=G.timestamp?new Date(G.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+y(q)+'</span><span class="m">'+y(G.text||"")+'</span><span class="s" style="color:'+M+'">'+Y+"</span></div>"}).join(""),n.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+A(k.level)+'">'+y(k.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+w+'">'+y(H)+'</span><div><div class="nick">'+y(B)+'</div><div class="fp">'+y(D)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+k.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:k.rules.length})+"</div><ul>"+x+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+U+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+y(u)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+y(u)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(v.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+y(u)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+y(u)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+y(u)+'" data-aud-flagged="'+(v.is_flagged?"true":"false")+'">'+(v.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+y(u)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function c(n){_.selectedFp=n,_.detailMessages=[],f(),O(n).then(f)}async function i(){try{let n=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!n.ok)return;let u=await n.json();_.records=Array.isArray(u.entries)?u.entries:[],_.serverStats=u&&u.stats||null,L(),$(),C(),_.selectedFp&&f()}catch{}}async function a(n,u,v){if(n)try{let k=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n,flagged:!!u,note:v||""})});if(!k.ok)throw new Error("HTTP "+k.status);window.showToast&&window.showToast(u?ServerI18n.t("audienceToastFlagged",{fp:n.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:n.slice(0,8)}),!0),i()}catch(k){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:k.message||""}),!1)}}async function o(n,u){if(!n||n==="\u2014")return;let v=u??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:n.slice(0,8)}),"")||"");if(v!==null)try{let k=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n,reason:v})});if(!k.ok)throw new Error("HTTP "+k.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:n.slice(0,8)}),!0),i()}catch(k){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:k.message||""}),!1)}}async function s(n){if(!(!n||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+y(n.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let v=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n})});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),i()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:v.message||""}),!1)}}async function l(n){if(!(!n||n==="\u2014"))try{let u=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:n,action:"mask",priority:0,enabled:!0})});if(!u.ok)throw new Error("HTTP "+u.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:n.slice(0,8)}),!0),i()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:u.message||""}),!1)}}async function r(n){if(!(!n||n==="\u2014"))try{let u=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!u.ok)throw new Error("HTTP "+u.status);let v=await u.json(),w=(Array.isArray(v.rules)?v.rules:[]).filter(function(B){return B&&B.type==="fingerprint"&&B.pattern===n});if(w.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let I=0;for(let B of w)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:B.rule_id||B.id})}).catch(function(){return{ok:!1}})).ok&&(I+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:I,fp:n.slice(0,8)}),!0),i()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:u.message||""}),!1)}}async function t(n){if(!(!n||n==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+y(n.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let v=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:n})});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:n.slice(0,8)}),!0),i()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:v.message||""}),!1)}}function d(){let n=document.getElementById(b);n&&(n.addEventListener("input",function(u){let v=u.target.closest("[data-aud-search]");v&&(_.search=v.value||"",_.shown=h,C())}),n.addEventListener("change",function(u){let v=u.target.closest("[data-aud-sort]");v&&(_.sort=v.value,C())}),n.addEventListener("click",function(u){let v=u.target.closest("[data-aud-filter]");if(v){_.filter=v.dataset.audFilter,_.shown=h,$(),C();return}let k=u.target.closest("[data-aud-action='ban']");if(k){u.stopPropagation(),t(k.dataset.audFp);return}if(u.target.closest("[data-aud-action='refresh']")){i();return}if(u.target.closest("[data-aud-action='more']")){_.shown+=h,C();return}if(u.target.closest("[data-aud-action='close-detail']")){_.selectedFp=null,f();return}let H=u.target.closest("[data-aud-action='detail-ban']");if(H){t(H.dataset.audFp);return}let D=u.target.closest("[data-aud-action='detail-mask']");if(D){l(D.dataset.audFp);return}let x=u.target.closest("[data-aud-action='detail-safe']");if(x){r(x.dataset.audFp);return}let U=u.target.closest("[data-aud-action='flag']");if(U){u.stopPropagation(),a(U.dataset.audFp,U.dataset.audFlagged!=="true");return}let G=u.target.closest("[data-aud-action='kick']");if(G){u.stopPropagation(),o(G.dataset.audFp);return}let Y=u.target.closest("[data-aud-action='unkick']");if(Y){u.stopPropagation(),s(Y.dataset.audFp);return}let M=u.target.closest("[data-aud-row]");if(!(M&&M.dataset.audFp===E)&&M&&!u.target.closest("button")){c(M.dataset.audFp);return}}))}function p(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(i(),_.refreshTimer||(_.refreshTimer=setInterval(i,15e3))):_.refreshTimer&&(clearInterval(_.refreshTimer),_.refreshTimer=0)}function e(){let n=document.getElementById("settings-grid");!n||document.getElementById(b)||(n.insertAdjacentHTML("beforeend",m()),d(),i(),p(),window.addEventListener("hashchange",p))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&e()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&e()})})()});var Ft=me(()=>{(function(){"use strict";let b=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],y={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},g=2500,h=0,_=0,z=null;function S(){if(z)return z;let $=document.createElement("div");return $.className="admin-konami-hud",$.setAttribute("aria-hidden","true"),$.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild($),z=$,$}function A(){if(h===0){z&&z.classList.remove("is-on");return}let $=S();$.classList.add("is-on");let E=$.querySelector(".admin-konami-hud-keys");E&&(E.innerHTML=b.map((N,T)=>`<span class="admin-konami-hud-key ${T<h?"is-filled":""}">${y[N]}</span>`).join(""));let P=$.querySelector(".admin-konami-hud-progress");if(P){let N=Math.round(h/b.length*100);P.style.width=N+"%"}}function m($){h=0,_&&(clearTimeout(_),_=0),$||A()}function R(){_&&clearTimeout(_),_=setTimeout(()=>m(),g)}async function L(){try{let $=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!$.ok)throw new Error("HTTP "+$.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch($){console.warn("[konami] trigger failed:",$&&$.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",$=>{let E=$.target;if(E&&(E.tagName==="INPUT"||E.tagName==="TEXTAREA"||E.isContentEditable))return;let P=b[h];if(!($.key===P||P==="b"&&$.key.toLowerCase()==="b"||P==="a"&&$.key.toLowerCase()==="a")){h=$.key===b[0]?1:0,A(),h>0?R():_&&(clearTimeout(_),_=0);return}if(h++,A(),h>=b.length){m(!0),L();return}R()}),window.AdminKonami={trigger:L}})()});var Dt=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;function y(l){return l==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:l==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:l==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function g(){let l=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,r=l?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${l?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${b(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${r}`:""}
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
    `}var h=null,_=[];function z(l,r){var t=document.getElementById("adminFontEmptyStateHost");if(!t)return;if((l||[]).some(e=>e.type==="uploaded")){t.innerHTML="";return}t.innerHTML="";var p=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:r?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var e=document.getElementById("adminFontFileInput");e&&e.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});p.dataset.emptyKind="fonts",t.appendChild(p)}function S(l,r){let t=l.weight||"\u2014",d=l.sizeLabel||"\u2014",p=l.foundry||(l.type==="system"?"System":l.type==="default"?"Google / Noto":"Uploaded"),e=l.format||"\u2014",n=l.status||l.type,u=`font-family: "${b(l.name)}", sans-serif;`,v=y(n),k=[];if(r){if(n!=="default"&&k.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${b(l.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),n!=="default"){let w=n==="enabled"||n==="system",I=w?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");k.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${b(l.name)}" data-enabled="${w?"true":"false"}">${I}</button>`)}l.type==="uploaded"&&(k.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${b(l.name)}" title="${b(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),k.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${b(l.name)}">${b(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${b(l.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${u}" class="truncate">${b(l.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(k.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${k.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${b(p)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${b(t)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${b(d)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${b(e)}</span><div style="text-align:right">${v}</div></div>`}let A=null,m={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function R(){if(A)return A;try{let l=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return l.ok?(A=(await l.json()).presets||{},A):{}}catch{return{}}}function L(l){return!l||!Number.isFinite(l)?"\u2014":l<1024?l+" B":l<1024*1024?(l/1024).toFixed(1)+" KB":(l/(1024*1024)).toFixed(2)+" MB"}async function $(l){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let r=await R();if(!Object.keys(r).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let t=new Set(["cjk_common","latin"]),d="",p=document.createElement("div");p.className="admin-font-subset-modal-body";let e=()=>{let v=Object.keys(r).map(w=>{let I=m[w]||{label:w,glyphs:"\u2014",estSize:"\u2014"},B=I.labelKey?ServerI18n.t(I.labelKey):I.label,H=t.has(w);return`
          <label class="admin-font-subset-chip${H?" is-active":""}" data-subset-preset="${w}">
            <span class="admin-font-subset-chip-check">${H?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${b(B)}</span>
            <span class="admin-font-subset-chip-range">${b(r[w])}</span>
            <span class="admin-font-subset-chip-meta">${I.glyphs} glyphs \xB7 ${I.estSize}</span>
          </label>`}).join("");p.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${b(l)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${v}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${b(d)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,p.querySelectorAll("[data-subset-preset]").forEach(w=>{w.addEventListener("click",I=>{I.preventDefault();let B=w.dataset.subsetPreset;t.has(B)?t.delete(B):t.add(B),e()})});let k=p.querySelector("[data-subset-custom]");k&&k.addEventListener("input",()=>{d=k.value})};if(e(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:p,width:540}))return;let u=[];if(t.forEach(v=>{r[v]&&u.push(r[v])}),d.trim()&&u.push(d.trim()),!u.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await E(l,u.join(","))}async function E(l,r){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:l}),!0);let t=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(l)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:r})}),d=await t.json().catch(()=>({}));if(t.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!t.ok){window.showToast?.(d.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:t.status}),!1);return}let p=d.saved_bytes||0,e=Math.round((d.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:l,before:L(d.original_size),after:L(d.new_size),pct:e}),!0),T()}catch(t){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:t.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function P(l){try{let r=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:l})});if(!r.ok)throw new Error("HTTP "+r.status);h=l,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:l}),!0),T()}catch(r){console.error("[admin-fonts] set default failed:",r),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function N(l,r){try{let t=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(l)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!r})});if(!t.ok)throw new Error("HTTP "+t.status);window.showToast(ServerI18n.t(r?"fontsToggleOffToast":"fontsToggleOnToast",{name:l}),!0),T()}catch(t){console.error("[admin-fonts] toggle failed:",t),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function T(){var l=document.getElementById("adminFontList");if(!l)return;let r=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var t=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!t.ok)throw new Error("HTTP "+t.status);var d=await t.json(),p=d.fonts||[];if(_=p,window.AdminTabs?.setTabCount?.("assets","fonts",p.length||""),z(p,r),p.length===0){l.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,f(p);return}l.innerHTML=p.map(e=>S(e,r)).join(""),f(p),c()}catch(e){console.error("[admin-fonts] fetch failed:",e),l.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,z([],r)}}async function C(l){try{let r=await l.slice(0,4).arrayBuffer(),t=new Uint8Array(r);return t[0]===0&&t[1]===1&&t[2]===0&&t[3]===0?"TTF":t[0]===79&&t[1]===84&&t[2]===84&&t[3]===79?"OTF":t[0]===119&&t[1]===79&&t[2]===70&&t[3]===50?"WOFF2":t[0]===116&&t[1]===114&&t[2]===117&&t[3]===101?"TTF":t[0]===116&&t[1]===116&&t[2]===99&&t[3]===102?"TTC":null}catch{return null}}function K(l,r){let t=document.getElementById("adminFontDropStatus");if(t){if(!l){t.textContent="",t.hidden=!0,t.classList.remove("is-good","is-bad");return}t.hidden=!1,t.textContent=l,t.classList.toggle("is-good",r==="good"),t.classList.toggle("is-bad",r==="bad")}}function F(l){let r=document.getElementById("adminFontUploadError");if(!r)return;if(!l){r.hidden=!0,r.innerHTML="";return}r.hidden=!1,r.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${b(l)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let t=r.querySelector("[data-font-error-retry]");t&&t.addEventListener("click",function(){let d=document.getElementById("adminFontFileInput");d&&d.click()})}async function O(l){if(!l)return;F("");let r=l.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(r)){window.showToast(ServerI18n.t("invalidFileType"),!1),K(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),F(ServerI18n.t("fontsExtNotSupportedFull"));return}if(l.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),K(ServerI18n.t("fontsFileTooLarge"),"bad"),F(ServerI18n.t("fontsFileTooLargeFull"));return}let t=await C(l);if(!t){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),K(ServerI18n.t("fontsMagicInvalid"),"bad"),F(ServerI18n.t("fontsMagicValidationFailed"));return}K(ServerI18n.t("fontsUploadValidated",{magic:t,size:(l.size/1024).toFixed(1)}),"good");try{var d=new FormData;d.append("fontfile",l);var p=await window.csrfFetch("/admin/upload_font",{method:"POST",body:d}),e=await p.json();p.ok?(window.showToast(e.message||ServerI18n.t("fontUploadFallback")),K(ServerI18n.t("fontsUploadedStatus",{filename:l.name}),"good"),F(""),await T()):(window.showToast(e.error||ServerI18n.t("uploadFailed"),!1),K(e.error||ServerI18n.t("uploadFailed"),"bad"),F(e.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(n){console.error("[admin-fonts] upload error:",n),window.showToast(ServerI18n.t("uploadNetworkError"),!1),K(ServerI18n.t("fontsNetworkErrorShort"),"bad"),F(ServerI18n.t("fontsNetworkDisconnected"))}}function f(l){let r=document.getElementById("fontsTotalSize");r&&(r.textContent=ServerI18n.t("fontsTotalCount",{n:l.length}))}function c(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(l=>{l.addEventListener("click",r=>{if(r.target.closest(".admin-font-delete-btn"))return;let t=l.dataset.font,d=document.getElementById("fontsPreviewFamily"),p=document.getElementById("fontsPreviewHeadline"),e=document.getElementById("fontsPreviewLatin"),n=document.getElementById("fontsPreviewCJK");d&&(d.textContent=t);let u=`"${t}", sans-serif`;p&&(p.style.fontFamily=u),e&&(e.style.fontFamily=u),n&&(n.style.fontFamily=u)})})}async function i(){var l=document.getElementById("adminFontFileInput");if(l){var r=l.files&&l.files[0];if(!r){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await O(r),l.value=""}}function a(){let l=document.getElementById("adminFontDrop"),r=document.getElementById("adminFontFileInput");!l||!r||(l.addEventListener("click",t=>{t.target!==r&&r.click()}),l.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),r.click())}),["dragenter","dragover"].forEach(t=>{l.addEventListener(t,d=>{d.preventDefault(),d.stopPropagation(),l.classList.add("is-drag")})}),["dragleave","drop"].forEach(t=>{l.addEventListener(t,d=>{d.preventDefault(),d.stopPropagation(),l.classList.remove("is-drag")})}),l.addEventListener("drop",async t=>{let d=t.dataTransfer&&t.dataTransfer.files;d&&d[0]&&await O(d[0])}))}async function o(l){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",l),confirmLabel:ServerI18n.t("deleteBtn")}))try{var t=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(l),{method:"DELETE"}),d=await t.json();t.ok?(window.showToast(d.message||ServerI18n.t("fontDeleteFallback")),await T()):window.showToast(d.error||ServerI18n.t("deleteFailed"),!1)}catch(p){console.error("[admin-fonts] delete error:",p),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function s(){var l=document.getElementById("settings-grid");if(l){l.insertAdjacentHTML("beforeend",g());var r=document.getElementById("adminFontFileInput");r&&r.addEventListener("change",i),a();var t=document.getElementById("adminFontList");t&&t.addEventListener("click",function(d){var p=d.target.closest(".admin-font-delete-btn");if(p){d.stopPropagation(),o(p.dataset.name);return}var e=d.target.closest(".admin-font-default-btn");if(e){d.stopPropagation(),P(e.dataset.name);return}var n=d.target.closest(".admin-font-toggle-btn");if(n){d.stopPropagation();let v=n.dataset.enabled==="true";N(n.dataset.name,v);return}var u=d.target.closest(".admin-font-subset-btn");u&&(d.stopPropagation(),$(u.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(d=>d.ok?d.json():null).then(d=>{d&&Array.isArray(d.FontFamily)&&(h=d.FontFamily[3]||null)}).catch(()=>{}).finally(T)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&s()});l.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&s()}})})()});var Mt=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let y="sec-scheduler",g=5e3,h=null,_=null;function z(s,l,r,t){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${s}">
        <input type="text" placeholder="${m(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${m(l)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${m(r||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${t||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function S(s){var l=s==="active"?"is-success":s==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+l+'" title="'+m(s)+'"></span>'}function A(s){let l=s.state==="paused",r=s.repeat_count===void 0?"\u2014":s.repeat_count===-1?"\u221E":String(s.repeat_count),t=s.repeat_count>0&&typeof s.remaining=="number"?String(s.repeat_count-s.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${m(s.id)}">
        ${S(s.state)}
        <div>
          <div class="admin-scheduler-job-title">#${b(s.id)}</div>
          <div class="admin-scheduler-job-meta">${b(ServerI18n.t("schedulerMessages"))} ${s.messages?s.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${s.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${b(t)}</span>
        <span class="admin-scheduler-job-val">${b(r)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${l?"is-active":"is-warn"}"
            data-job-id="${m(s.id)}" data-action="${l?"resume":"pause"}">
            ${b(ServerI18n.t(l?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${m(s.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function m(s){return b(s)}function R(){let s=document.querySelectorAll("#schedulerMessages [data-msg-index]"),l=[];return s.forEach(function(r){let t=r.querySelector(".scheduler-msg-text").value.trim(),d=r.querySelector(".scheduler-msg-color").value,p=parseInt(r.querySelector(".scheduler-msg-size").value,10)||48;t&&l.push({text:t,color:d,size:p})}),l}function L(s,l,r){let t=document.getElementById("schedulerMessages");if(!t)return;let d=t.children.length;t.insertAdjacentHTML("beforeend",z(d,s||"",l||"#ffffff",r||48))}function $(s){let l=s.closest("[data-msg-index]");l&&l.remove();let r=document.getElementById("schedulerMessages");r&&r.querySelectorAll("[data-msg-index]").forEach(function(t,d){t.dataset.msgIndex=d})}async function E(){let s=R();if(s.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let l=parseInt(document.getElementById("schedulerInterval").value,10);if(!l||l<1||l>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let r=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(r)||r<-1||r>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let t=document.getElementById("schedulerCreateBtn");t&&(t.disabled=!0);try{let d=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:s,interval_sec:l,repeat_count:r})}),p=await d.json();d.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await f()):showToast(p.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(d){console.error("Scheduler create error:",d),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{t&&(t.disabled=!1)}}function P(s){return"msg"}function N(s){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[s]||"\u25C8"}function T(s){return s.next_run_at?new Date(s.next_run_at*1e3).getHours():new Date().getHours()}function C(s){if(s.next_run_at){let l=new Date(s.next_run_at*1e3);return String(l.getHours()).padStart(2,"0")+":"+String(l.getMinutes()).padStart(2,"0")}return"--:--"}function K(s){let l=s.id||"job",r=Array.isArray(s.messages)?s.messages.length:null;return"Job #"+l+(r!=null?" \xB7 "+r+" messages":"")}function F(s){let l=document.querySelector("[data-sch-timeline]");if(!l)return;let r=[],t=new Date().getHours();for(let p=0;p<24;p++){let e=p>=Math.max(0,t-1)&&p<=Math.min(23,t+2);r.push('<div class="admin-sch-timeline-hour'+(e?" is-peak":"")+'">'+String(p).padStart(2,"0")+"</div>")}let d=(s||[]).map(function(p){let e=P(p),n=N(e),u=p.state!=="paused";return'<div class="admin-sch-timeline-row'+(u?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+b(C(p))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+e+'">'+n+'</span><span class="admin-sch-evt-desc">'+b(K(p))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(u?" is-on":"")+'">'+ServerI18n.t(u?"uiOn":"uiOff")+"</span></div></div>"}).join("");l.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+r.join("")+"</div></div>"+(d||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+b(ServerI18n.t("noActiveJobs"))+"</div>"))}function O(s){let l=document.querySelector("[data-sch-calendar]");if(!l)return;let r=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],t=new Date,d=(t.getDay()+6)%7,p=new Date(t);p.setDate(t.getDate()-d);let e=r.map(function(u,v){let k=new Date(p);return k.setDate(p.getDate()+v),'<div class="admin-sch-calendar-day-head'+(v===d?" is-today":"")+'">'+b(u)+'<span class="date">'+k.getDate()+"</span></div>"}).join(""),n=[0,1,2,3,4,5,6].map(function(u){return'<div class="admin-sch-calendar-cell">'+(u===d?(s||[]).slice(0,5).map(function(k){let w=P(k),I=N(w);return'<span class="admin-sch-cal-chip is-'+w+'">'+b(C(k))+" "+I+"</span>"}).join(""):"")+"</div>"}).join("");l.innerHTML='<div class="admin-sch-calendar-head">'+e+'</div><div class="admin-sch-calendar-body">'+n+"</div>"}async function f(){let s=document.getElementById("schedulerJobsList"),l=document.getElementById("schedulerJobsCount");if(s)try{let r=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!r.ok){s.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadJobsFailed"))+"</div>",l&&(l.textContent="\u2014");return}let t=await r.json();if(!Array.isArray(t.jobs)){s.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadJobsFailed"))+"</div>",l&&(l.textContent="\u2014");return}l&&(l.textContent=ServerI18n.t("schItemCount",{n:t.jobs.length})),F(t.jobs),O(t.jobs);let d=document.querySelector("[data-sch-meta]");if(d){let p=new Date().toISOString().slice(0,10);d.textContent=ServerI18n.t("schTodayMeta",{date:p,n:t.jobs.length})}if(t.jobs.length===0){s.innerHTML="";let p=window.AdminEmpty.render("scheduler");p.dataset.emptyKind="scheduler",s.appendChild(p);return}s.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+b(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+b(ServerI18n.t("schColInterval"))+"</span><span>"+b(ServerI18n.t("schColSent"))+"</span><span>"+b(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+t.jobs.map(A).join("")}catch(r){console.error("Scheduler fetch error:",r),s.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadJobsError"))+"</div>"}}async function c(s,l){try{let r=await csrfFetch("/admin/scheduler/"+encodeURIComponent(l),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:s})}),t=await r.json();r.ok?(showToast(l==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await f()):showToast(t.error||ServerI18n.t("actionFailed"),!1)}catch(r){console.error("Scheduler toggle error:",r),showToast(ServerI18n.t("actionFailed"),!1)}}async function i(s){try{let l=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:s})}),r=await l.json();l.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await f()):showToast(r.error||ServerI18n.t("cancelFailed"),!1)}catch(l){console.error("Scheduler cancel error:",l),showToast(ServerI18n.t("cancelFailed"),!1)}}function a(){let s=document.getElementById("advanced-grid")||document.getElementById("settings-grid");if(!s)return;s.insertAdjacentHTML("beforeend",`
      <div id="${y}" class="admin-scheduler-page hud-page-stack lg:col-span-2">
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
    `);let l=document.querySelectorAll("[data-sch-view]");l.forEach(e=>{e.addEventListener("click",()=>{let n=e.dataset.schView;l.forEach(k=>{k.classList.toggle("is-active",k===e),k.setAttribute("aria-selected",k===e?"true":"false")});let u=document.querySelector("[data-sch-timeline]"),v=document.querySelector("[data-sch-calendar]");u&&(u.hidden=n!=="timeline"),v&&(v.hidden=n!=="calendar")})}),L("","#ffffff",48);let r=document.getElementById("schedulerMessages");r&&r.addEventListener("click",function(e){let n=e.target.closest(".scheduler-remove-msg");n&&$(n)});let t=document.getElementById("schedulerAddMsg");t&&t.addEventListener("click",function(){L("","#ffffff",48)});let d=document.getElementById("schedulerCreateBtn");d&&d.addEventListener("click",E);let p=document.getElementById("schedulerJobsList");p&&p.addEventListener("click",function(e){let n=e.target.closest(".scheduler-job-toggle");if(n){c(n.dataset.jobId,n.dataset.action);return}let u=e.target.closest(".scheduler-job-cancel");u&&i(u.dataset.jobId)}),h&&(clearInterval(h),h=null),_||(_=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(y)},intervalMs:g,tick:f}),window.addEventListener("beforeunload",function(){_&&(_(),_=null)}))}function o(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let s=!1;new MutationObserver(function(){if((document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(y)&&!s){s=!0;try{a()}finally{s=!1}}}).observe(document.body,{childList:!0,subtree:!0}),(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(y)&&a()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var Nt=me(()=>{(function(){"use strict";let b="admin-security-v2-page";var y=window.AdminUtils.escapeHtml;let g=null,h=!1,_=!1,z=0;function S(){let e=n=>ServerI18n.t(n);return`
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
      </div>`}function A(e){if(!e)return 0;let n=0;e.length>=8&&n++,e.length>=12&&n++;let u=(/[a-z]/.test(e)?1:0)+(/[A-Z]/.test(e)?1:0)+(/\d/.test(e)?1:0)+(/[^\w]/.test(e)?1:0);return u>=2&&n++,u>=3&&n++,Math.min(4,n)}function m(e){let n=document.getElementById("sec2-pw-meter"),u=document.getElementById("sec2-pw-label");if(!n||!u)return;let v=A(e),k=[0,25,50,75,100],w=["","is-bad","is-warn","is-warn","is-good"],I=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];n.style.width=k[v]+"%",n.className=w[v],u.textContent=I[v]}async function R(e){e.preventDefault();let n=document.getElementById("sec2-pw-current").value,u=document.getElementById("sec2-pw-new").value,v=document.getElementById("sec2-pw-confirm").value;if(!n||!u||!v){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(u.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(u!==v){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let k=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:n,new_password:u,confirm_password:v})}),w=await k.json().catch(()=>({}));k.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),m(""),w.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(w.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(k){console.error("Password change error:",k),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function L(){let e=++z,n=document.getElementById("sec2-wsa-status");_=!0,$(!0),n.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let u=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!u.ok)throw new Error(u.status);let v=await u.json();if(e!==z)return!1;g={require_token:!!v.require_token,token:v.token||""},document.getElementById("sec2-wsa-toggle").checked=!!v.require_token,document.getElementById("sec2-wsa-token").value=v.token||"",n.textContent=v.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),n.className="admin-ui-chip admin-sec-status-chip "+(v.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,N();let k=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=k?new Date(parseInt(k,10)).toLocaleString():"\u2014",!0}catch{return e!==z||(g=null,$(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,n.textContent=ServerI18n.t("security2LoadFailed"),n.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{e===z&&(_=!1,$(h||!g),h||N())}}function $(e){["toggle","token","save","rotate","copy","reveal"].forEach(n=>{document.getElementById("sec2-wsa-"+n).disabled=e}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",e)}function E(){return h||_||!g?!1:(h=!0,++z,$(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function P(){if(h=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,$(_||!g),g&&!_){let e=document.getElementById("sec2-wsa-status");e.textContent=ServerI18n.t(g.require_token?"security2StatusEnabled":"security2StatusDisabled"),e.className="admin-ui-chip admin-sec-status-chip "+(g.require_token?"is-active":""),N()}}function N(){if(h||_||!g)return;document.getElementById("sec2-wsa-disabled-warning").hidden=g.require_token;let e=document.getElementById("sec2-wsa-toggle").checked!==g.require_token||document.getElementById("sec2-wsa-token").value.trim()!==g.token;document.getElementById("sec2-wsa-draft-hint").hidden=!e}function T(e){return String(e||"").split(/\n+/).map(n=>n.trim()).filter(Boolean)}function C(e){return String(e||"").split(",").map(n=>n.trim().toUpperCase()).filter(Boolean)}function K(e,n){let u=document.getElementById(e);u&&(u.textContent=n==null||n===""?"\u2014":String(n))}async function F(){try{let e=await fetch("/admin/security/settings",{credentials:"same-origin"}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error(n.error||e.status);let u=n.ip_allowlist||{},v=n.cors||{},k=n.tls||{},w=!!u.enabled,I=Array.isArray(u.entries)?u.entries:[],B=document.getElementById("sec2-ip-dot"),H=document.getElementById("sec2-ip-status-chip"),D=document.getElementById("sec2-ip-toggle"),x=document.getElementById("sec2-ip-entries");B&&(B.classList.toggle("is-lime",w),B.classList.toggle("is-amber",!w)),H&&(H.textContent=w?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),H.className="admin-ui-chip admin-sec-status-chip "+(w?"is-active":"is-warn")),D&&(D.checked=w),x&&(x.value=I.join(`
`)),K("sec2-ip-current",u.current_ip||"\u2014"),K("sec2-ip-status-line",w?ServerI18n.t("security2IpStatusEnabled",{n:I.length}):ServerI18n.t("security2IpStatusDisabled"));let U=Array.isArray(v.origins)?v.origins:["*"],G=Array.isArray(v.methods)?v.methods:[],Y=document.getElementById("sec2-cors-origins"),M=document.getElementById("sec2-cors-credentials"),q=document.getElementById("sec2-cors-methods"),V=document.getElementById("sec2-cors-cred-dot");Y&&(Y.value=U.join(`
`)),M&&(M.checked=!!v.supports_credentials),q&&(q.value=G.join(", ")),V&&(V.classList.toggle("is-lime",!v.supports_credentials),V.classList.toggle("is-amber",!!v.supports_credentials)),K("sec2-cors-origins-line",U.join(", ")),K("sec2-cors-credentials-line",v.supports_credentials?"true":"false"),K("sec2-cors-methods-line",G.join(", "));let ne=k.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:k.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");K("sec2-hsts-status",ne)}catch(e){console.error("Security settings load error:",e);let n=document.getElementById("sec2-ip-status-chip");n&&(n.textContent=ServerI18n.t("security2LoadFailed"),n.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function O(e){let n={};if(e==="ip")n.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:T(document.getElementById("sec2-ip-entries")?.value||"")};else if(e==="cors"){let u=T(document.getElementById("sec2-cors-origins")?.value||"");n.cors={origins:u.length?u:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:C(document.getElementById("sec2-cors-methods")?.value||"")}}try{let u=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),v=await u.json().catch(()=>({}));if(!u.ok){window.showToast&&showToast(v.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await F()}catch(u){console.error("Security settings save error:",u),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function f(){if(h||_||!g)return;let e=document.getElementById("sec2-wsa-toggle").checked,n=document.getElementById("sec2-wsa-token").value.trim();if(e&&!n){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(E())try{let u=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:e,token:n})}),v=await u.json().catch(()=>({}));u.ok?await L()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(v.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}async function c(){if(!(h||_||!g||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&E())try{let n=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),u=await n.json().catch(()=>({}));if(n.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await L()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(u.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}function i(){let e=document.getElementById("sec2-wsa-token").value;if(!e){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function a(){let e=document.getElementById("sec2-wsa-token");e.type=e.type==="password"?"text":"password";let n=e.type==="text",u=document.getElementById("sec2-wsa-reveal");u.setAttribute("aria-pressed",String(n)),u.textContent=ServerI18n.t(n?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),u.setAttribute("aria-label",u.textContent)}async function o(e){if(e==="reset-ws"&&(h||_||!g))return;let n={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:v=>ServerI18n.t("security2ToastApiTokensRevoked",{n:v.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[e];if(!(!n||!await window.HudConfirm?.open({icon:"\u26A0",title:n.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:n.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:n.severity||"warn",body:n.confirm,confirmLabel:n.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(e==="reset-ws"&&!E()))try{let v=await window.csrfFetch(n.url,{method:"POST"}),k=await v.json().catch(()=>({}));if(!v.ok){window.showToast&&showToast(k.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(e==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await L())return}window.showToast&&showToast(n.ok(k),!0)}catch(v){console.error("Security danger action error:",v),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{e==="reset-ws"&&P()}}function s(){let e=document.getElementById("sec2-session-self-line");if(e){let v=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),k=navigator.platform||navigator.userAgentData?.platform||"",w=v?v[0].split("/")[0]:"Browser";e.textContent=ServerI18n.t("security2SessionSelfLine",{browser:w,platform:k})}let n=document.getElementById("sec2-tls-dot"),u=document.getElementById("sec2-tls-status");if(n&&u){let v=location.protocol==="https:";n.classList.add(v?"is-lime":"is-crimson"),u.textContent=v?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function l(){let e=document.getElementById("sec2-pw-form");e&&e.addEventListener("submit",R);let n=document.getElementById("sec2-pw-new");n&&n.addEventListener("input",u=>m(u.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",f),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",c),document.getElementById("sec2-wsa-copy")?.addEventListener("click",i),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",a),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",N),document.getElementById("sec2-wsa-token")?.addEventListener("input",N),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>O("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>O("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(u=>{u.addEventListener("click",()=>{let v=document.querySelector(`[data-sec-disclosure="${u.dataset.secDisclose}"]`);v&&(v.hidden=!v.hidden,u.setAttribute("aria-expanded",v.hidden?"false":"true"),v.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(u=>{u.dataset.secBound!=="1"&&(u.dataset.secBound="1",u.addEventListener("click",()=>o(u.dataset.secDanger)))}),s(),L(),F()}function r(){}function t(){let e=document.querySelector(".admin-dash-grid"),n=document.getElementById(b);if(!e||!n)return;let u=e.dataset.activeRoute||"live",v=e.dataset.activeLeaf||u;n.style.display=u==="security"||u==="system"&&v==="security"?"":"none"}function d(){let e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",S()),l(),t())}function p(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let e=null;function n(){let v=document.querySelector(".admin-dash-grid");!v||e||(e=new MutationObserver(t),e.observe(v,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)?d():void 0,n(),t()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",t),document.addEventListener("admin-panel-rendered",()=>{d(),n(),t()}),n(),d()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p()})()});var Pt=me(()=>{(function(){"use strict";let b="admin-backup-v2-page";var y=window.AdminUtils.escapeHtml;function g(){let s=l=>ServerI18n.t(l);return`
      <div id="${b}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
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
      </div>`}async function h(){try{let s=await fetch("/get_settings",{credentials:"same-origin"});if(!s.ok)throw new Error(s.status);let l=await s.json(),r=["password","token","secret","hash"],t={};Object.keys(l||{}).forEach(u=>{r.some(v=>u.toLowerCase().includes(v))||(t[u]=l[u])});let d=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:t},null,2)],{type:"application/json"}),p=URL.createObjectURL(d),e=new Date().toISOString().replace(/[:.]/g,"-"),n=document.createElement("a");n.href=p,n.download="danmu-settings-"+e+".json",document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(p),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(s){console.error("Settings snapshot error:",s),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let _=null;function z(){_=null;let s=document.getElementById("bk2-settings-apply");s&&(s.disabled=!0,s.title=ServerI18n.t("backupApplyDisabledTitle"))}async function S(){let s=document.getElementById("bk2-settings-upload"),l=document.getElementById("bk2-settings-diff"),r=document.getElementById("bk2-settings-apply"),t=s&&s.files&&s.files[0];if(!t){z(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let d=await t.text(),p=JSON.parse(d),e=p.settings||p;if(!e||typeof e!="object"||Array.isArray(e))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let n=await fetch("/get_settings",{credentials:"same-origin"}),u=n.ok?await n.json():{},v=[];new Set([...Object.keys(u),...Object.keys(e)]).forEach(w=>{let I=JSON.stringify(u[w]),B=JSON.stringify(e[w]);I!==B&&(I===void 0?v.push("+ "+w+": "+B):B===void 0?v.push("- "+w+": "+I):v.push("~ "+w+": "+I+" \u2192 "+B))}),l.textContent=v.length?v.join(`
`):ServerI18n.t("backupNoDiff"),l.hidden=!1,_=e,r&&(r.disabled=!1,r.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:v.length}),!0)}catch(d){console.error("Dry-run error:",d),z(),l.textContent=ServerI18n.t("backupParseFailedDetail",{msg:d&&d.message?d.message:String(d)}),l.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function A(){let s=document.getElementById("bk2-settings-diff"),l=document.getElementById("bk2-settings-apply");if(!_){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"warn",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let t=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:_})}),d=await t.json().catch(()=>({}));if(!t.ok){s&&(s.hidden=!1,s.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(d.details||d,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}s&&(s.hidden=!1,s.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(d.applied||[]).length+" settings"),_=null,l&&(l.disabled=!0,l.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(t){s&&(s.hidden=!1,s.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:t&&t.message?t.message:String(t)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function m(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function R(){let s=document.getElementById("bk2-factory-confirm"),l=document.getElementById("bk2-factory-reset");!s||!l||(s.addEventListener("input",()=>{let r=s.value.trim()==="reset";l.classList.toggle("is-ready",r),l.disabled=!r}),l.addEventListener("click",L))}async function L(){let s=document.getElementById("bk2-factory-confirm"),l=document.getElementById("bk2-factory-reset");if((s?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{l&&(l.disabled=!0);let t=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),d=await t.json().catch(()=>({}));if(!t.ok||!d.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),l&&(l.disabled=!1);return}s&&(s.value=""),l&&(l.classList.remove("is-ready"),l.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),N()}catch{l&&(l.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function $(){document.getElementById("bk2-settings-download")?.addEventListener("click",h),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",S),document.getElementById("bk2-settings-apply")?.addEventListener("click",A),document.getElementById("bk2-clear-history")?.addEventListener("click",m),document.getElementById("bk2-pack-export")?.addEventListener("click",T),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",F),document.getElementById("bk2-pack-apply")?.addEventListener("click",O),document.getElementById("bk2-assets-export")?.addEventListener("click",K),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",f),document.getElementById("bk2-assets-apply")?.addEventListener("click",c),R(),N(),C()}let E=null,P=null;async function N(){let s=document.getElementById("bk2-pack-summary");if(s)try{let l=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!l.ok){s.textContent=ServerI18n.t("backupPreviewUnavailable");return}let r=await l.json(),t=(r.total_bytes/(1024*1024)).toFixed(2);s.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:r.file_count||0,mb:t})}catch{s.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function T(){window.location.href="/admin/backup/export",window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function C(){let s=document.getElementById("bk2-assets-summary");if(s)try{let l=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!l.ok){s.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let r=await l.json(),t=(r.total_bytes/(1024*1024)).toFixed(2);s.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:r.file_count||0,mb:t})}catch{s.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function K(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}async function F(){let l=document.getElementById("bk2-pack-upload")?.files?.[0];if(!l){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(l.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let r=new FormData;r.append("file",l);let t=document.getElementById("bk2-pack-diff"),d=document.getElementById("bk2-pack-apply");try{let p=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:r}),e=await p.json().catch(()=>({}));if(!p.ok||!e.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(e.errors||e,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),d&&(d.disabled=!0),E=null;return}if(t){t.hidden=!1;let n=[],u=e.manifest||{};n.push("manifest version: "+(u.version||"?")),n.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),n.push(""),n.push("Will write "+(e.members?.length||0)+" files:"),(e.members||[]).forEach(v=>{n.push("  "+v.label+"/"+v.path.split("/").slice(1).join("/")+" ("+(v.size||0)+" B)")}),e.skipped?.length&&(n.push(""),n.push("Skipped "+e.skipped.length+" entries:"),e.skipped.forEach(v=>n.push("  "+v.path+" \u2014 "+v.reason))),t.textContent=n.join(`
`)}E=l,d&&(d.disabled=!1,d.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:e.members?.length||0}),!0)}catch(p){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:p.message||""}),!1)}}async function O(){if(!E){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let l=new FormData;l.append("file",E);try{let t=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:l})).json().catch(()=>({})),d=document.getElementById("bk2-pack-diff");if(d){d.hidden=!1;let p=[];t.ok?(p.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),p.push(""),p.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&p.push("Skipped "+t.skipped.length+" (see above)")):(p.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),p.push(JSON.stringify(t.errors||t,null,2))),d.textContent=p.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint",{n:t.applied}),!0),E=null;let p=document.getElementById("bk2-pack-apply");p&&(p.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(r){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:r.message||""}),!1)}}async function f(){let l=document.getElementById("bk2-assets-upload")?.files?.[0];if(!l){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(l.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let r=new FormData;r.append("file",l);let t=document.getElementById("bk2-assets-diff"),d=document.getElementById("bk2-assets-apply");try{let p=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:r}),e=await p.json().catch(()=>({}));if(!p.ok||!e.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(e.errors||e,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),d&&(d.disabled=!0),P=null;return}if(t){t.hidden=!1;let n=[],u=e.manifest||{};n.push("manifest version: "+(u.version||"?")),n.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),n.push(""),n.push("Will write "+(e.members?.length||0)+" asset files:"),(e.members||[]).forEach(v=>{n.push("  "+v.path+" ("+(v.size||0)+" B)")}),e.skipped?.length&&(n.push(""),n.push("Skipped "+e.skipped.length+" entries:"),e.skipped.forEach(v=>n.push("  "+v.path+" \u2014 "+v.reason))),t.textContent=n.join(`
`)}P=l,d&&(d.disabled=!1,d.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:e.members?.length||0}),!0)}catch(p){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:p.message||""}),!1)}}async function c(){if(!P){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"warn",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let l=new FormData;l.append("file",P);try{let t=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:l})).json().catch(()=>({})),d=document.getElementById("bk2-assets-diff");if(d){d.hidden=!1;let p=[];t.ok?(p.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),p.push(""),p.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&p.push("Skipped "+t.skipped.length+" (see above)")):(p.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),p.push(JSON.stringify(t.errors||t,null,2))),d.textContent=p.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:t.applied}),!0),P=null;let p=document.getElementById("bk2-assets-apply");p&&(p.disabled=!0),C()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(r){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:r.message||""}),!1)}}function i(){let s=document.querySelector(".admin-dash-grid"),l=document.getElementById(b);if(!s||!l)return;let r=s.dataset.activeLeaf||"dashboard";l.style.display=r==="backup"?"":"none"}function a(){let s=document.getElementById("settings-grid");!s||document.getElementById(b)||(s.insertAdjacentHTML("beforeend",g()),$(),i())}function o(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&a(),i()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",i),document.addEventListener("admin-panel-rendered",()=>{a(),i()}),a()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var Ot=me(()=>{(function(){"use strict";let b="admin-broadcast-v2-page",y="/admin/broadcast/status",g="/admin/broadcast/toggle",h={mode:"live",started_at:null,total_messages:0,queue_size:0};function _(e){try{window.dispatchEvent(new CustomEvent("danmu-broadcast-changed",{detail:e}))}catch{}}function z(){return{mode:h.mode,started_at:typeof h.started_at=="number"?h.started_at*1e3:null}}let S=null;async function A(){try{let e=await fetch(y,{credentials:"same-origin"});if(!e.ok)return;let n=await e.json();n&&(n.mode==="live"||n.mode==="standby")&&(S=n.session||null,h=n,_(z()))}catch{}}async function m(e){try{let n=await window.csrfFetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:e})});if(!n.ok){let v=await n.json().catch(()=>({}));throw new Error(v&&v.error?v.error:`HTTP ${n.status}`)}return h=await n.json(),_(z()),!0}catch(n){return console.warn("[admin-broadcast] toggle failed:",n),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:n&&n.message||""}),!1),!1}}function R(e){(!Number.isFinite(e)||e<0)&&(e=0);let n=Math.floor(e/1e3),u=String(Math.floor(n/3600)).padStart(2,"0"),v=String(Math.floor(n%3600/60)).padStart(2,"0"),k=String(n%60).padStart(2,"0");return`${u}:${v}:${k}`}function L(){let e=S||{};return e.status==="live"||e.state==="active"}function $(){let e=S||{};return e.status==="ended"||e.state==="ended"}function E(){let e=h.mode||"standby";return $()?"ended":e==="live"?"live":L()?"paused":"standby"}function P(){return`
      <div id="${b}" class="admin-broadcast-page admin-bc-v4 admin-bc-v5 hud-page-stack lg:col-span-2" data-bc-state="standby">
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
      </div>`}let N=0,T=0,C=0,K=0,F=0;async function O(){try{let e=await fetch("/admin/metrics",{credentials:"same-origin"});if(!e.ok)return;N=(await e.json()).ws_clients||0}catch{}try{let e=await fetch("/admin/fingerprints?limit=1",{credentials:"same-origin"});if(e.ok){let n=await e.json();typeof n.total=="number"&&(T=n.total)}}catch{}}let f={standby:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 OFF"},live:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 ON"},paused:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 PAUSED"},ended:{titleKey:"broadcastEndedTitle",en:"SESSION ENDED"}},c={standby:ServerI18n.t("uiDisplayOff"),live:ServerI18n.t("uiDisplayOn"),paused:"DESKTOP PAUSED",ended:"SESSION ENDED"};function i(){let e=document.getElementById(b);if(!e)return;let n=E(),u=n==="live",v=n==="paused",k=n==="ended",w=n==="standby";e.dataset.bcState=n;let I=e.querySelector("[data-bc-title]"),B=e.querySelector("[data-bc-en]");if(I&&(I.textContent=ServerI18n.t(f[n].titleKey)),B){let Q=u&&h.started_at?Date.now()/1e3-h.started_at:0;B.textContent=u?`DESKTOP \xB7 ON \xB7 ${R(Q*1e3)}`:k&&S?.ended_at?`SESSION ENDED \xB7 ${new Date(S.ended_at*1e3).toISOString().slice(0,10)}`:f[n].en}let H=e.querySelector("[data-bc-body]"),D=e.querySelector("[data-bc-ended]");H&&D&&(H.hidden=k,D.hidden=!k);let x=e.querySelector("[data-bc-statedot]"),U=e.querySelector("[data-bc-statelabel]"),G=e.querySelector("[data-bc-elapsed]"),Y=e.querySelector("[data-bc-sched]");if(x&&(x.dataset.state=n),U&&(U.textContent=c[n]||c.standby,U.dataset.state=n),G){let Q=u&&h.started_at?Date.now()-h.started_at*1e3:0;G.textContent=R(Q),G.hidden=!u}if(Y){let Q=S?.scheduled_at;if(w&&typeof Q=="number"&&Q>Date.now()/1e3){let ae=Math.max(0,Q-Date.now()/1e3),ie=String(Math.floor(ae/60)).padStart(2,"0"),ce=String(Math.floor(ae%60)).padStart(2,"0"),ye=new Date(Q*1e3),we=`${String(ye.getHours()).padStart(2,"0")}:${String(ye.getMinutes()).padStart(2,"0")}`;Y.textContent=ServerI18n.t("broadcastSchedCountdown",{time:we,mm:ie,ss:ce}),Y.hidden=!1}else Y.hidden=!0}let M=h.total_messages||0,q=h.fire_count||M,V=h.started_at&&(u||v)?Date.now()/1e3-h.started_at:0,ne=w?"\u2014":R(V*1e3).slice(3),W=(Q,ae)=>{let ie=e.querySelector(Q);ie&&(ie.textContent=ae)};W("[data-bc-stat-elapsed]",w?"\u2014":ne),W("[data-bc-stat-msgs]",w?"0":M.toLocaleString()),W("[data-bc-stat-fp]",w?"0":T.toLocaleString()),W("[data-bc-stat-fire]",w?"0":q.toLocaleString());let X=e.querySelector("[data-bc-session-ctx]");if(X){let Q=S||{},ae=!!(Q.id||Q.name);if(X.hidden=!ae,ae){let ie=e.querySelector("[data-bc-session-id]"),ce=e.querySelector("[data-bc-session-started]"),ye=e.querySelector("[data-bc-session-window]");if(ie&&(ie.textContent=Q.name||Q.id||"\u2014"),ce){let we=Q.started_at;if(typeof we=="number"){let Se=new Date(we*1e3),_e=Ie=>String(Ie).padStart(2,"0");ce.textContent=`Started \xB7 ${_e(Se.getHours())}:${_e(Se.getMinutes())}:${_e(Se.getSeconds())}`}else ce.textContent="Started \xB7 \u2014"}if(ye){let we=Q.started_at;if(typeof we=="number"){let Se=Date.now()-we*1e3;ye.textContent=`Window \xB7 ${R(Se).slice(3)}`}else ye.textContent="Window \xB7 \u2014"}}}let ee=e.querySelector("[data-bc-big]");if(ee)if(u){let Q=L();ee.className="admin-bc-v4__big admin-bc-v5__big is-on",ee.textContent=Q?ServerI18n.t("broadcastBigPause"):ServerI18n.t("broadcastBigStop")}else v?(ee.className="admin-bc-v4__big admin-bc-v5__big is-resume",ee.textContent=ServerI18n.t("broadcastBigResume")):(ee.className="admin-bc-v4__big admin-bc-v5__big is-off",ee.textContent=ServerI18n.t("broadcastBigStart"));let se=e.querySelector("[data-bc-confirm-hint]");if(se&&(se.hidden=!(u&&!L())),e.querySelectorAll("[data-bc-clear]").forEach(Q=>{Q.disabled=w||k}),k){let Q=S||{},ae=Q.duration_sec?R(Q.duration_sec*1e3).slice(3):"\u2014";W("[data-bc-end-dur]",ae),W("[data-bc-end-msgs]",String(Q.total_messages||M||"\u2014")),W("[data-bc-end-fp]",String(Q.unique_fp||T||"\u2014")),W("[data-bc-end-fire]",String(Q.fire_count||q||"\u2014"))}}async function a(){let e=E();if(e==="standby")await m("live")&&window.showToast&&showToast(ServerI18n.t("broadcastToastSwitchedLive"),!0);else if(e==="paused")await m("live")&&window.showToast&&showToast(ServerI18n.t("broadcastToastResumed"),!0);else if(e==="live"){if(L()){await m("standby")&&window.showToast&&showToast(ServerI18n.t("broadcastToastPaused"),!0),i();return}let u=h.started_at?Date.now()-h.started_at*1e3:0,v=R(u),k=h.total_messages||0,w=T.toLocaleString();if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("broadcastStopLabel"),subtitle:ServerI18n.t("cfmSubStopDisplay"),severity:"warn",body:`
              <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                ${ServerI18n.t("broadcastStopBodyDesc")}
              </div>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:10px 12px;margin-top:12px;background:var(--hud-bg2, #182239);border-radius:6px;border:1px solid var(--hud-line, rgba(148,163,184,0.18));text-align:center;">
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">${ServerI18n.t("uiStatMsgs")}</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${k.toLocaleString()}</div></div>
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">FP</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${w}</div></div>
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">${ServerI18n.t("uiColTime")}</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${v}</div></div>
              </div>
              <div style="margin-top:12px;font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:0.3px;color: var(--color-ink-warning);">
                ${ServerI18n.t("broadcastStopBodyWarn")}
              </div>`,confirmLabel:ServerI18n.t("broadcastStopLabel"),cancelLabel:ServerI18n.t("cancel"),width:440}))return;await m("standby")&&window.showToast&&showToast(ServerI18n.t("broadcastToastStopped")+" \xB7 "+ServerI18n.t("uiDisplayOff"),!0)}i()}async function o(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"warn",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearModalConfirm")}))try{let n=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});n.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:n.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}function s(){let e=document.getElementById(b);e&&(e.querySelector("[data-bc-big]")?.addEventListener("click",a),e.querySelector("[data-bc-clear]")?.addEventListener("click",o))}function l(){C||(A(),O(),i(),K=setInterval(A,5e3),C=setInterval(()=>{O().then(i)},1e4),F=setInterval(i,1e3))}function r(){K&&(clearInterval(K),K=0),C&&(clearInterval(C),C=0),F&&(clearInterval(F),F=0)}function t(){let e=document.querySelector(".admin-dash-grid"),n=document.getElementById(b);if(!e||!n)return;let u=e.dataset.activeLeaf||"dashboard",v=u==="overlay"||u==="broadcast";n.style.display=v?"":"none",v?l():r()}function d(){let e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",P()),s(),t())}function p(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&d(),t()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",t),document.addEventListener("admin-panel-rendered",()=>{d(),t()}),d()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p()})()});var Rt=me(()=>{(function(){"use strict";var b=window.AdminUtils.loadDetailsState,y=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;let h=["keyword","regex","replace","rate_limit"],_=["block","replace","allow"];function z(D){var x=b();return x[D]!==void 0?x[D]:!1}function S(D,x){if(typeof ServerI18n<"u"&&ServerI18n.t){let U=ServerI18n.t(D);if(U&&U!==D)return U}return x||D}let A={keyword:"is-cyan",regex:"is-cyan",replace:"is-amber",rate_limit:"is-danger"},m={block:"var(--hud-crimson)",replace:"var(--hud-amber)",allow:"var(--hud-lime)"};function R(){return`
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
      </div>`}let L="all";function $(D){let x=A[D.type]||"is-default",U=m[D.action]||"var(--color-text-muted)",G={keyword:"ulWord",regex:"ulRegex",replace:"ulReplace",rate_limit:"ulRate"},Y=ServerI18n.t(G[D.type]||"ulWord"),M=D.pattern;if(D.type==="replace"&&D.replacement!==void 0&&(M=`${D.pattern}  \u2192  ${D.replacement}`),D.type==="rate_limit"){let V=D.max_count||5,ne=D.window_sec||60;M=`${D.pattern}  \xB7  ${V}/${ne}s`}return`
      <div class="hud-table-row hud-rule-row" style="grid-template-columns: 1.6fr 80px 80px 60px 60px 40px;${D.enabled?"":"opacity:0.45;"}" data-rule-id="${g(D.id)}" data-rule-type="${g(D.type)}">
        <span style="font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all">${g(M)}</span>
        <span class="hud-pill ${x}">${Y}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;padding:2px 6px;border-radius:3px;background:${U};color:#000;font-weight:700;width:fit-content;text-transform:uppercase">${g(D.action)}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">P${g(String(D.priority))}</span>
        <label class="relative inline-block" style="width:32px;align-self:center" title="${g(D.enabled?S("enabled","Enabled"):S("disabled","Disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${g(D.id)}" ${D.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${D.enabled?"is-on":"is-off"}" style="cursor:pointer"></span>
        </label>
        <button class="filter-delete-btn" type="button" data-rule-id="${g(D.id)}" title="${S("deleteRule","Delete")}" aria-label="${S("deleteRule","Delete")}">${window.AdminUtils.closeIcon}</button>
      </div>`}function E(D){let x={all:D.length,keyword:0,regex:0,replace:0,rate_limit:0};D.forEach(G=>{x[G.type]!=null&&x[G.type]++}),Object.keys(x).forEach(G=>{let Y=document.querySelector(`[data-filter-count="${G}"]`);Y&&(Y.textContent=x[G])});let U=document.querySelector('[data-mod-stat="rules"]');U&&(U.textContent=x.all)}async function P(){let D=document.querySelector('[data-mod-stat="blacklist"]');if(D)try{let x=await fetch("/admin/blacklist/get",{credentials:"same-origin"});if(!x.ok)return;let U=await x.json(),G=Array.isArray(U)?U:U.keywords||[];D.textContent=String(G.length)}catch{}}async function N(){try{let D=await csrfFetch("/admin/filters/list");if(!D.ok)throw new Error("HTTP "+D.status);return(await D.json()).rules||[]}catch(D){return console.error("Failed to fetch filter rules:",D),showToast(S("fetchFiltersFailed","Failed to load filter rules"),!1),[]}}async function T(){let D=document.getElementById("filterRulesList");if(!D)return;D.innerHTML=`<div style="padding:12px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${S("loading","Loading...")}</div>`;let x=await N();if(E(x),P(),x.length===0){if(window.AdminEmpty){let G=window.AdminEmpty.render("filters");G.setAttribute("data-empty-kind","filters"),D.innerHTML="",D.appendChild(G)}else D.innerHTML=`<div data-empty-kind="filters" style="padding:18px 14px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${S("noFilterRules","No filter rules configured.")}</div>`;return}let U=L==="all"?x:x.filter(G=>G.type===L);D.innerHTML=U.map($).join("")}async function C(){let D=document.getElementById("filterType"),x=document.getElementById("filterAction"),U=document.getElementById("filterPattern"),G=document.getElementById("filterReplacement"),Y=document.getElementById("filterPriority"),M=document.getElementById("filterMaxCount"),q=document.getElementById("filterWindowSec"),V=D.value,ne=(U.value||"").trim();if(!ne){showToast(S("patternRequired","Pattern is required"),!1),U.focus();return}let W={type:V,pattern:ne,action:x.value,priority:parseInt(Y.value,10)||0};V==="replace"&&(W.replacement=G.value||""),V==="rate_limit"&&(W.max_count=parseInt(M.value,10)||5,W.window_sec=parseFloat(q.value)||60);try{let X=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)}),ee=await X.json();if(!X.ok){showToast(ee.error||S("addRuleFailed","Failed to add rule"),!1);return}showToast(S("ruleAdded","Rule added"),!0),U.value="",G.value="",await T()}catch(X){console.error("Add filter rule error:",X),showToast(S("addRuleFailed","Failed to add rule"),!1)}}async function K(D){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("filtersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteFilterRule"),severity:"danger",body:S("confirmDeleteRule","Delete this filter rule?"),confirmLabel:ServerI18n.t("filtersDeleteConfirm")}))try{let U=await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:D})}),G=await U.json();if(!U.ok){showToast(G.error||S("deleteRuleFailed","Failed to delete rule"),!1);return}showToast(S("ruleDeleted","Rule deleted"),!0),await T()}catch(U){console.error("Delete filter rule error:",U),showToast(S("deleteRuleFailed","Failed to delete rule"),!1)}}async function F(D,x){try{let U=await csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:D,updates:{enabled:x}})}),G=await U.json();if(!U.ok){showToast(G.error||S("updateRuleFailed","Failed to update rule"),!1),await T();return}}catch(U){console.error("Toggle filter rule error:",U),showToast(S("updateRuleFailed","Failed to update rule"),!1),await T()}}async function O(){let D=document.getElementById("filterTestText"),x=document.getElementById("filterTestResult"),U=document.getElementById("filterType"),G=document.getElementById("filterAction"),Y=document.getElementById("filterPattern"),M=document.getElementById("filterReplacement"),q=document.getElementById("filterMaxCount"),V=document.getElementById("filterWindowSec"),ne=(D.value||"").trim();if(!ne){showToast(S("sampleTextRequired","Enter sample text to test"),!1),D.focus();return}let W=(Y.value||"").trim();if(!W){showToast(S("patternRequired","Pattern is required"),!1),Y.focus();return}let X=U.value,ee={type:X,pattern:W,action:G.value};X==="replace"&&(ee.replacement=M.value||""),X==="rate_limit"&&(ee.max_count=parseInt(q.value,10)||5,ee.window_sec=parseFloat(V.value)||60),x.innerHTML=`<span style="color:var(--color-text-muted)">${S("testing","Testing...")}</span>`;try{let se=await csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:ee,text:ne})}),Q=await se.json();if(!se.ok){x.innerHTML=`<span style="color: var(--color-ink-error)">${g(Q.error||"Test failed")}</span>`;return}let ae="";Q.action==="block"?ae=`<span style="color: var(--color-ink-error);font-weight:600">${S("blocked","BLOCKED")}</span>`:Q.action==="replace"?ae=`<span style="color: var(--color-ink-warning);font-weight:600">${S("replaced","REPLACED")}</span> <span style="color:var(--color-text-secondary)">\u2192 ${g(Q.text)}</span>`:Q.action==="allow"?ae=`<span style="color: var(--color-ink-success);font-weight:600">${S("allowed","ALLOWED")}</span>`:ae=`<span style="color:var(--color-text-muted)">${S("noMatch","No match (pass)")}</span>`,Q.reason&&(ae+=`<br/><span style="font-size:11px;color:var(--color-text-muted)">${g(Q.reason)}</span>`),x.innerHTML=ae}catch(se){console.error("Test filter rule error:",se),x.innerHTML=`<span style="color: var(--color-ink-error)">${S("testError","Test error")}</span>`}}function f(){let D=document.getElementById("filterType"),x=document.getElementById("filterReplacementRow"),U=document.getElementById("filterRateLimitRow");if(!D)return;let G=D.value;x&&(x.style.display=G==="replace"?"":"none"),U&&(U.style.display=G==="rate_limit"?"grid":"none")}function c(){let D=document.getElementById("filterTypeChips");D&&D.addEventListener("click",x=>{let U=x.target.closest(".hud-filter-chip");U&&(L=U.dataset.filterScope||"all",D.querySelectorAll(".hud-filter-chip").forEach(G=>{G.classList.toggle("is-active",G.dataset.filterScope===L)}),T())})}let i=6,a=[],o=!1,s=0,l=0;function r(D){let x=new Date(D*1e3),U=G=>String(G).padStart(2,"0");return`${U(x.getHours())}:${U(x.getMinutes())}:${U(x.getSeconds())}`}function t(D){let x=(D||"").toUpperCase();return x==="BLOCK"?"var(--hud-crimson)":x==="MASK"||x==="REPLACE"?"var(--hud-amber)":x==="REVIEW"?"var(--color-primary)":x==="ALLOW"?"var(--hud-lime)":"var(--color-text-muted)"}function d(){let D=document.getElementById("filterLiveLog");if(D){if(a.length===0){D.innerHTML=`<div style="color:var(--color-text-muted);text-align:center;padding:10px">${ServerI18n.t("fltNoEvents")}</div>`;return}D.innerHTML=a.map(x=>{let U=r(x.ts),G=(x.action||"").toUpperCase(),Y=t(G),M=(x.text_excerpt||"").replace(/[<>&"]/g,W=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[W]),q=(x.pattern||"").replace(/[<>&"]/g,W=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[W]),V=(x.source||"").slice(0,16),ne=V?`\xB7 ${V}`:"";return`<div class="admin-filter-log-row" style="display:grid;grid-template-columns:64px 70px 1fr;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px dashed var(--hud-line)">
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${U}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${Y}">${G}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\u300C${M}\u300D<span style="color:var(--color-text-muted)"> \u2014 \u898F\u5247 ${q} ${ne}</span></span>
      </div>`}).join("")}}async function p(){try{let D=await fetch(`/admin/filters/events?since=${l}`,{credentials:"same-origin"});if(!D.ok)return;let x=await D.json();if(x.counts_24h){let U=(G,Y)=>{let M=document.querySelector(`[data-mod-stat="${G}"]`);M&&(M.textContent=Y!=null?String(Y):"\u2014")};U("masked",x.counts_24h.MASK||0),U("blocked",x.counts_24h.BLOCK||0)}if(!Array.isArray(x.events)||x.events.length===0)return;for(a.unshift(...x.events);a.length>i;)a.pop();l=x.latest_seq||l,document.getElementById("filterLiveLog")&&d()}catch{}}function e(){o||(o=!0,p(),s=setInterval(p,4e3))}let n=Object.create(null),u="[QUICK]";function v(D,x){return D.find(U=>(U.name||"").startsWith(u+" "+x))}async function k(){let D=await N().catch(()=>[]);document.querySelectorAll(".admin-flt-v4__qchip").forEach(x=>{let U=x.dataset.fltLabel,G=v(D,U),Y=!!G&&G.enabled!==!1;x.classList.toggle("is-active",Y),G?n[x.dataset.fltQuickId]=G.id||G.rule_id:delete n[x.dataset.fltQuickId]})}async function w(D){let x=D.dataset.fltQuickId,U=D.dataset.fltPattern,G=D.dataset.fltAction,Y=D.dataset.fltLabel,M=n[x];if(M)(await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:M})})).ok?(delete n[x],D.classList.remove("is-active"),showToast(ServerI18n.t("filtersToastDisabled",{label:Y}),!0)):showToast(ServerI18n.t("filtersToastDisableFailed"),!1);else{let q=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",name:`${u} ${Y}`,pattern:U,action:G,enabled:!0,priority:50})});if(q.ok){let V=await q.json().catch(()=>({}));V.rule_id&&(n[x]=V.rule_id),D.classList.add("is-active"),showToast(ServerI18n.t("filtersToastEnabled",{label:Y}),!0)}else{let V=await q.json().catch(()=>({}));showToast(ServerI18n.t("filtersToastEnableFailed",{msg:V.error||""}),!1)}}typeof renderRules=="function"&&renderRules()}function I(){let D=document.querySelector("[data-flt-quick]");D&&(D.addEventListener("click",x=>{let U=x.target.closest(".admin-flt-v4__qchip");U&&w(U)}),k())}function B(){let D=document.getElementById("settings-grid");if(!D)return;D.insertAdjacentHTML("beforeend",R()),c(),I();let x=document.getElementById("filterType");x&&x.addEventListener("change",f);let U=document.getElementById("filterAddBtn");U&&U.addEventListener("click",C);let G=document.getElementById("filterTestBtn");G&&G.addEventListener("click",O);let Y=document.getElementById("filterTestText");Y&&Y.addEventListener("keydown",V=>{V.key==="Enter"&&(V.preventDefault(),O())});let M=document.getElementById("filterPattern");M&&M.addEventListener("keydown",V=>{V.key==="Enter"&&(V.preventDefault(),C())});let q=document.getElementById("filterRulesList");q&&(q.addEventListener("change",V=>{let ne=V.target.closest(".filter-toggle-cb");if(!ne)return;F(ne.dataset.ruleId,ne.checked);let W=ne.closest(".hud-rule-row"),X=W?.querySelector(".admin-filter-toggle-dot");X&&(X.classList.toggle("is-on",ne.checked),X.classList.toggle("is-off",!ne.checked)),W&&(W.style.opacity=ne.checked?"":"0.45")}),q.addEventListener("click",V=>{let ne=V.target.closest(".filter-delete-btn");ne&&K(ne.dataset.ruleId)})),T(),e(),d()}function H(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&B()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&B()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",H):H()})()});var qt=me(()=>{(function(){"use strict";var b=window.AdminUtils.loadDetailsState,y=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml,h=1e4,_=null;function z(T){var C=b();return C[T]!==void 0?C[T]:!1}function S(){return`
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
    `}function A(T){var C=ServerI18n.t("fingerprintState_"+T),K="";return T==="blocked"?K=" is-crimson":T==="flagged"?K=" is-amber":T==="active"?K=" is-cyan":K=" is-mute",'<span class="admin-fp-state'+K+'">'+g(C)+"</span>"}function m(T){if(!T)return"\u2014";try{var C=new Date(T*1e3);return C.toLocaleTimeString()}catch{return String(T)}}function R(T){var C=document.getElementById("adminFingerprintTableWrap");if(C){if(!T||T.length===0){C.innerHTML="";var K=window.AdminEmpty.render("audience");K.dataset.emptyKind="fingerprints",C.appendChild(K);return}var F='<div class="admin-fp-row admin-fp-row--head"><span>'+g(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",O=T.map(function(f){var c=f.blocked|0,i=f.hash||"",a=i.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+g(i)+'"><span class="admin-fp-hash admin-identity-fp" title="'+g(i)+'">fp:'+g(a)+'</span><span class="admin-fp-ip admin-identity-ip">'+g(f.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+g(f.ua||"")+'">'+g(f.ua||"\u2014")+'</span><span class="admin-fp-num">'+(f.msgs|0)+'</span><span class="admin-fp-num">'+(f.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(c>0?"is-crimson":"is-mute")+'">'+c+"</span><span>"+A(f.state||"active")+'</span><span class="admin-fp-ts">'+g(m(f.last_seen))+"</span></div>"}).join("");C.innerHTML=F+O}}async function L(){var T=document.getElementById("adminFingerprintCount");try{var C=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!C.ok)throw new Error("HTTP "+C.status);var K=await C.json(),F=K.records||[];if(R(F),T){var O=K.count||F.length,f=K.flagged!=null?K.flagged:F.filter(function(i){return i.state==="flagged"||i.state==="blocked"}).length;T.textContent=ServerI18n.t("fpCountSummary",{unique:O,flagged:f})}}catch(i){console.error("[admin-fingerprints] fetch failed:",i);var c=document.getElementById("adminFingerprintTableWrap");c&&(c.innerHTML='<span class="hud-pill is-danger">'+g(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function $(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var C=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(C.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await L();else{var K=await C.json().catch(function(){return{}});window.showToast(K.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(F){console.error("[admin-fingerprints] reset error:",F),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function E(){P(),_=setInterval(function(){var T=document.getElementById("sec-fingerprints");T&&T.offsetParent!==null&&L()},h)}function P(){_&&(clearInterval(_),_=null)}function N(){var T=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(T){T.insertAdjacentHTML("beforeend",S());var C=document.getElementById("adminFingerprintRefreshBtn");C&&C.addEventListener("click",L);var K=document.getElementById("adminFingerprintResetBtn");K&&K.addEventListener("click",$),L(),E()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var T=new MutationObserver(function(){var K=document.getElementById("moderation-grid")||document.getElementById("settings-grid");K&&!document.getElementById("sec-fingerprints")&&N()});T.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var C=document.getElementById("moderation-grid")||document.getElementById("settings-grid");C&&!document.getElementById("sec-fingerprints")&&N()}})})()});var Ht=me(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var b=window.AdminUtils.escapeHtml;let y=(t,d)=>{let p=window.ServerI18n?.t?.(t);return p&&p!==t?p:d||t},g=!1;new MutationObserver(()=>{let t=document.getElementById("settings-grid");if(t&&!(document.getElementById("sec-widgets")||g)){g=!0;try{_(t)}finally{g=!1}}}).observe(document.body,{childList:!0,subtree:!0});function _(t){let d=document.createElement("div");d.id="sec-widgets",d.className="admin-widgets-page hud-page-stack lg:col-span-2";let p=location.origin+"/overlay";d.dataset.tpl="B",d.innerHTML=`
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${b(y("widgetsTitle"))}</h2>
          <p class="admin-ui-page-note">${b(y("widgetsDesc"))}</p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 W1\uFF1A\u4E3B\u8981\u52D5\u4F5C\u5728\u9801\u9996\u53F3\u5074\u3002\u9801\u9996\u5728\u6A19\u984C\u8207\u8DEF\u7531\u540C\u540D\u6642\u6703\u88AB
               \u4F75\u9032 topbar\uFF0Cshell \u7684 [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB
               \uFF08\u898B admin.js \u7684 _dedupSectionTitles\uFF09\u3002 -->
          <div class="admin-ui-page-actions admin-ow-addrow">
            <button id="widget-add" type="button" class="admin-ui-action is-primary">
              ${b(y("widgetsAddBtn"))}
            </button>
            <div class="admin-ow-addmenu" data-ow-addmenu hidden>
              <button type="button" data-ow-add="scoreboard">${b(y("widgetScoreboard"))}</button>
              <button type="button" data-ow-add="ticker">${b(y("widgetTicker"))}</button>
              <button type="button" data-ow-add="label">${b(y("widgetLabel"))}</button>
            </div>
          </div>
        </div>

        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:12px">
            <div id="widgets-list" class="admin-widgets-list"></div>
            <div class="admin-widgets-actions">
              <button id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action">
                ${b(y("clearAll"))}
              </button>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:12px;position:sticky;top:0">
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${b(y("widgetsPreviewLabel"))}</div>
              <div class="admin-ow-stage" data-ow-stage></div>
              <p class="admin-ow-card-note">${b(y("widgetsDragHint"))}</p>
            </div>
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${b(y("widgetsObsLabel"))}</div>
              <p class="admin-ow-card-note">
                ${b(y("widgetsObsNote"))}
              </p>
              <div class="admin-ow-urlrow">
                <code class="admin-ow-url" data-ow-obs-url>${b(p)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${b(y("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${b(y("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,t.appendChild(d);let e=document.getElementById("widget-add"),n=d.querySelector("[data-ow-addmenu]");e.addEventListener("click",u=>{u.stopPropagation(),n.hidden=!n.hidden}),n.addEventListener("click",u=>{let v=u.target.closest("[data-ow-add]")?.dataset.owAdd;v&&(n.hidden=!0,A(v))}),document.addEventListener("click",u=>{!n.hidden&&!u.target.closest(".admin-ui-page-actions")&&(n.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",$),d.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let u=d.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(u).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),S()}async function z(t,d="GET",p=null){let e={method:d,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(p){let u=document.querySelector('meta[name="csrf-token"]');u&&(e.headers["X-CSRF-Token"]=u.content),e.body=JSON.stringify(p)}return(await fetch("/admin/widgets/"+t,e)).json()}async function S(){try{let t=await z("list");P(t.widgets||[])}catch(t){console.error("[admin-widgets] Load failed:",t)}}async function A(t){let d={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await z("create","POST",{type:t,config:d[t]||{}}),S()}catch(p){console.error("[admin-widgets] Create failed:",p)}}async function m(t){let d=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:d,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await z("delete","POST",{id:t}),S()}catch(e){console.error("[admin-widgets] Delete failed:",e)}}async function R(t,d){try{await z("update","POST",{id:t,config:d}),S()}catch(p){console.error("[admin-widgets] Update failed:",p)}}async function L(t,d,p){try{await z("score","POST",{id:t,team_index:d,delta:p}),S()}catch(e){console.error("[admin-widgets] Score update failed:",e)}}async function $(){let t=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:t,confirmLabel:ServerI18n.t("clearAll")}))try{await z("clear","POST",{}),S()}catch(p){console.error("[admin-widgets] Clear failed:",p)}}let E=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function P(t){let d=document.getElementById("widgets-list");if(d){if(d.innerHTML="",i(t),t.length===0){let p=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});p.dataset.emptyKind="widgets",d.appendChild(p);return}t.forEach(p=>{d.appendChild(F(p))})}}let N={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function T(t){return y("widgetPos_"+String(t||"top-left").replace("-","_"),t||"")}function C(t){let d=t.config||{},p="";t.type==="scoreboard"?p=(d.teams||[]).map(n=>`${n.name} ${n.score}`).join(" \xB7 "):t.type==="ticker"?(p=(d.messages||[])[0]||"",p&&(p=`\u300C${p}\u300D`)):t.type==="label"&&(p=d.text?`\u300C${d.text}\u300D`:"");let e=T(t.position);return p?`${p} \xB7 ${e}`:e}function K(t){return t==="scoreboard"?y("widgetScoreboard"):t==="ticker"?y("widgetTicker"):t==="label"?y("widgetLabel"):t}function F(t){let d=document.createElement("div");d.className="admin-widget-card",t.visible!==!1&&d.classList.add("is-on");let p=document.createElement("button");p.type="button",p.className="admin-widget-summary",p.setAttribute("aria-expanded","false"),p.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+b(N[t.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+b(K(t.type))+'</span><span class="admin-widget-summary-text">'+b(C(t))+"</span>"+(t.visible===!1?'<span class="admin-widget-summary-off">'+b(y("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',d.appendChild(p);let e=document.createElement("div");e.className="admin-widget-card-body",e.hidden=!0,p.addEventListener("click",()=>{e.hidden=!e.hidden,p.setAttribute("aria-expanded",e.hidden?"false":"true"),d.classList.toggle("is-open",!e.hidden)});let n=r(y("widgetPosition"),E,t.position,w=>R(t.id,{position:w}));e.appendChild(n),t.type==="scoreboard"?a(e,t):t.type==="ticker"?o(e,t):t.type==="label"&&s(e,t);let u=document.createElement("div");u.className="admin-widget-card-actions";let v=document.createElement("button");v.type="button",v.className="admin-ui-action admin-widget-card-action",v.textContent=t.visible?y("widgetHide"):y("widgetShow"),v.addEventListener("click",()=>R(t.id,{visible:!t.visible})),u.appendChild(v);let k=document.createElement("button");return k.type="button",k.className="admin-ui-action is-danger admin-widget-card-action",k.textContent=y("remove"),k.addEventListener("click",()=>m(t.id)),u.appendChild(k),e.appendChild(u),d.appendChild(e),d}let O={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function f(t,d){let p="top-left",e=1/0;for(let[n,[u,v]]of Object.entries(O)){let k=t-u/2,w=d-v/2,I=k*k+w*w;I<e&&(e=I,p=n)}return p}function c(t){let d=t.config||{};return t.type==="scoreboard"?(d.teams||[]).map(p=>`${p.name} ${p.score}`).join("  ")||y("widgetScoreboard"):t.type==="ticker"?(d.messages||[])[0]||y("widgetTicker"):t.type==="label"?d.text||y("widgetLabel"):t.type}function i(t){let d=document.querySelector("[data-ow-stage]");if(d){if(d.innerHTML="",!t.length){d.innerHTML='<span class="admin-ow-stage-empty">'+b(y("widgetsStageEmpty"))+"</span>";return}t.forEach(p=>{let e=document.createElement("div");e.className="admin-ow-box is-"+(p.position||"top-left"),p.visible===!1&&e.classList.add("is-off"),e.dataset.owBox=p.id,e.draggable=!0,e.textContent=c(p),e.title=K(p.type),e.addEventListener("dragend",n=>{let u=d.getBoundingClientRect();if(!u.width||!u.height)return;let v=(n.clientX-u.left)/u.width,k=(n.clientY-u.top)/u.height;if(v<0||v>1||k<0||k>1)return;let w=f(v,k);w!==p.position&&R(p.id,{position:w})}),d.appendChild(e)})}}function a(t,d){let p=d.config||{},e=l(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",p.title||"",n=>R(d.id,{title:n}));t.appendChild(e),(p.teams||[]).forEach((n,u)=>{let v=document.createElement("div");v.className="admin-widget-team";let k=document.createElement("input");k.type="color",k.value=n.color||"#38bdf8",k.className="admin-widget-team-color",k.addEventListener("change",()=>{let D=[...p.teams];D[u]={...D[u],color:k.value},R(d.id,{teams:D})}),v.appendChild(k);let w=document.createElement("input");w.type="text",w.value=n.name,w.className="admin-widget-input",w.addEventListener("change",()=>{let D=[...p.teams];D[u]={...D[u],name:w.value},R(d.id,{teams:D})}),v.appendChild(w);let I=document.createElement("span");I.className="admin-widget-team-score",I.textContent=n.score,v.appendChild(I);let B=document.createElement("button");B.type="button",B.className="admin-widget-step",B.textContent="\u2212",B.addEventListener("click",()=>L(d.id,u,-1)),v.appendChild(B);let H=document.createElement("button");H.type="button",H.className="admin-widget-step",H.textContent="+",H.addEventListener("click",()=>L(d.id,u,1)),v.appendChild(H),t.appendChild(v)})}function o(t,d){let p=d.config||{},e=document.createElement("div");e.className="admin-widget-row";let n=document.createElement("span");n.className="lbl",n.textContent=window.ServerI18n?.t?.("speed")||"SPEED",e.appendChild(n);let u=document.createElement("input");u.type="range",u.min="10",u.max="200",u.value=p.speed||60,u.style.flex="1",u.addEventListener("change",()=>{R(d.id,{speed:parseInt(u.value)})}),e.appendChild(u);let v=document.createElement("span");v.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",v.textContent=u.value,u.addEventListener("input",()=>{v.textContent=u.value}),e.appendChild(v),t.appendChild(e);let k=document.createElement("div");k.className="admin-widget-row",k.style.alignItems="flex-start";let w=document.createElement("span");w.className="lbl",w.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",k.appendChild(w);let I=document.createElement("textarea");I.className="admin-widget-textarea",I.value=(p.messages||[]).join(`
`),I.rows=3,I.placeholder=ServerI18n.t("widgetTickerPlaceholder"),I.addEventListener("change",()=>{let B=I.value.split(`
`).filter(H=>H.trim());R(d.id,{messages:B})}),k.appendChild(I),t.appendChild(k)}function s(t,d){let p=d.config||{};t.appendChild(l(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",p.text||"",e=>R(d.id,{text:e}))),t.appendChild(l(window.ServerI18n?.t?.("size")||"SIZE",String(p.fontSize||24),e=>R(d.id,{fontSize:parseInt(e)||24}),"number"))}function l(t,d,p,e="text"){let n=document.createElement("div");n.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=t,n.appendChild(u);let v=document.createElement("input");return v.type=e,v.value=d,v.className="admin-widget-input",v.addEventListener("change",()=>p(v.value)),n.appendChild(v),n}function r(t,d,p,e){let n=document.createElement("div");n.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=t,n.appendChild(u);let v=document.createElement("select");return v.className="admin-widget-select",d.forEach(k=>{let w=document.createElement("option");w.value=k,w.textContent=k,k===p&&(w.selected=!0),v.appendChild(w)}),v.addEventListener("change",()=>e(v.value)),n.appendChild(v),n}})})()});var jt=me(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let b=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","backup","integrations","plugins","webhooks","api-tokens","security","notifications","audience","firetoken","overlay","about"];function y(){let x=window.ADMIN_ROUTES||{},U={};return b.forEach(G=>{let Y=x[G];Y&&Y.title&&(U[G]={title:Y.title,kicker:Y.kicker||G.toUpperCase()})}),U}let g=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation",section:"sec-blacklist"},{labelKey:"cmdkSettingFilters",route:"moderation",section:"sec-filters"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{label:"Webhooks",route:"webhooks",section:"sec-webhooks"},{label:"Scheduler",route:"scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],h=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function _(){let x=document.querySelector('meta[name="csrf-token"]');return x&&x.content||""}function z(x,U){if(typeof window.csrfFetch=="function")return window.csrfFetch(x,U);let G=Object.assign({credentials:"same-origin"},U||{}),Y=new Headers(U&&U.headers||{});return Y.set("X-CSRF-Token",_()),G.headers=Y,fetch(x,G)}function S(x,U){typeof window.showToast=="function"&&window.showToast(x,U!==!1)}let A=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>z("/effects/reload",{method:"POST"}).then(x=>S(x.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),x.ok)).catch(()=>S(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"cmdkActionOverlayOff",subKey:"adminNavOverlay",action:()=>z("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"overlay_off"})}).then(x=>S(x.ok?ServerI18n.t("cmdkToastOverlayOff"):ServerI18n.t("cmdkToastToggleFailed"),x.ok)).catch(()=>S(ServerI18n.t("cmdkToastToggleFailed"),!1))},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>z("/admin/poll/reset",{method:"POST"}).then(x=>S(x.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),x.ok)).catch(()=>S(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return z("/admin/history/clear",{method:"POST"}).then(U=>S(U.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),U.ok)).catch(()=>S(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],m=null,R=null,L=null,$="",E=[],P=[],N=0,T=null,C=null,K=null,F=15e3;function O(x){return String(x??"").replace(/[&<>"']/g,U=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[U])}function f(x,U){if(!U)return 0;let G=String(x||"").toLowerCase(),Y=U.toLowerCase(),M=0,q=0,V=0,ne=0;for(;M<G.length&&q<Y.length;)G[M]===Y[q]?(q++,ne++,V+=2+ne):ne=0,M++;return q<Y.length?-1:(G.startsWith(Y)&&(V+=10),V)}function c(){let x=document.createElement("div");x.className="admin-cmdk",x.setAttribute("hidden",""),x.setAttribute("aria-hidden","true"),x.innerHTML=`
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
    `,document.body.appendChild(x),m=x,R=x.querySelector(".admin-cmdk-input"),L=x.querySelector(".admin-cmdk-list"),x.addEventListener("click",U=>{U.target.matches("[data-cmdk-close]")&&H()}),R.addEventListener("input",U=>{$=U.target.value,k()}),R.addEventListener("keydown",i),L.addEventListener("click",U=>{let G=U.target.closest("[data-cmdk-idx]");G&&(N=parseInt(G.dataset.cmdkIdx,10)||0,o())})}function i(x){if(x.key==="Escape"){x.preventDefault(),H();return}if(x.key==="ArrowDown"){x.preventDefault(),a(1);return}if(x.key==="ArrowUp"){x.preventDefault(),a(-1);return}if(x.key==="Enter"){x.preventDefault(),o();return}}function a(x){if(!E.length)return;N=(N+x+E.length)%E.length,I();let U=L.querySelector(`[data-cmdk-idx="${N}"]`);U&&U.scrollIntoView({block:"nearest"})}function o(){let x=E[N];if(x){if(x.type==="route")window.location.hash="#/"+x.route,H();else if(x.type==="setting")x.tab&&(document.body.dataset.viewerConfigTab=x.tab),window.location.hash="#/"+x.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let U=document.getElementById(x.section);U&&(U.scrollIntoView({behavior:"smooth",block:"start"}),U.tagName==="DETAILS"&&!U.open&&(U.open=!0))},80),H();else if(x.type==="message")window.location.hash="#/messages",H();else if(x.type==="user")window.location.hash="#/system",setTimeout(()=>{let U=document.getElementById("sec-fingerprints");U&&U.scrollIntoView({behavior:"smooth",block:"start"})},80),H();else if(x.type==="theme")z("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:x.id})}).then(U=>{U.ok?(S(ServerI18n.t("cmdkThemeApplied",{name:x.label}),!0),K=null):S(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>S(ServerI18n.t("cmdkThemeApplyFailed"),!1)),H();else if(x.type==="action"){try{let U=x.action&&x.action();U&&typeof U.then=="function"&&U.catch(()=>{})}catch{}H()}}}let s={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",history:"adminNavGroupSystem",backup:"adminNavGroupSystem",security:"adminNavGroupSystem",integrations:"adminNavGroupSystem"};function l(x){return Object.entries(y()).map(([U,G])=>{let Y=Math.max(f(G.title,x),f(U,x)),M=s[U];return{type:"route",route:U,label:G.title,sub:M?ServerI18n.t(M):"",icon:"\u25C7",score:Y}}).filter(U=>U.score>=0)}function r(x){let U=y()[x];return U?U.title:""}function t(x){return g.map(U=>{let G=U.labelKey?ServerI18n.t(U.labelKey):U.label;return{type:"setting",route:U.route,tab:U.tab,section:U.section,label:r(U.route)?`${r(U.route)} \u203A ${G}`:G,sub:"",icon:"\u2699",score:f(G,x)}}).filter(U=>U.score>=0)}function d(x){return T?(T.records||[]).map(G=>{let Y=G.text||G.message||"",M=G.nickname||G.user||"guest",q=(G.timestamp||"").slice(11,19)||"\u2014",V=(G.fingerprint||G.fp||"").slice(0,8);return{type:"message",label:`${Y}  \xB7  @${M}`,sub:V?`${q} \xB7 fp:${V}`:q,icon:"\u{1F4AC}",score:Math.max(f(Y,x),f(M,x))}}).filter(G=>G.score>=0):[]}function p(x){if(!K)return[];let U=K.records||[],G=K.active||"";return U.map(Y=>{let M=Y.label||Y.display_name||Y.name||"",q=Y.description||ServerI18n.t("cmdkThemeDefaultDesc"),V=Y.name===G;return{type:"theme",id:Y.name,label:V?ServerI18n.t("cmdkThemeActive",{name:M}):M,sub:q,icon:"\u{1F3A8}",score:Math.max(f(M,x),f(Y.name||"",x),f(q,x))}}).filter(Y=>Y.score>=0)}function e(x){return A.map(U=>{let G=ServerI18n.t(U.labelKey),Y=U.subKey?ServerI18n.t(U.subKey):U.sub;return{type:"action",id:U.id,label:G,sub:Y,icon:"\u26A1",action:U.action,score:Math.max(f(G,x),f(U.id,x),f(Y,x))}}).filter(U=>U.score>=0)}function n(x){return C?(C.records||[]).map(G=>{let Y=G.fingerprint||G.fp||G.id||"",M=G.ip||G.last_ip||"",q=G.nickname||"";return{type:"user",label:q?`@${q}  \xB7  ${Y.slice(0,12)}\u2026`:`${Y.slice(0,12)}\u2026`,sub:`user \xB7 ${M||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(f(Y,x),f(M,x),f(q,x))}}).filter(G=>G.score>=0):[]}async function u(){let x=Date.now(),U=[];(!T||x-T.at>F)&&U.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(G=>G.ok?G.json():null).then(G=>{T={at:x,records:G&&G.records||[]}}).catch(()=>{T={at:x,records:[]}})),(!C||x-C.at>F)&&U.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(G=>G.ok?G.json():null).then(G=>{C={at:x,records:G&&G.records||[]}}).catch(()=>{C={at:x,records:[]}})),(!K||x-K.at>F)&&U.push(fetch("/admin/themes",{credentials:"same-origin"}).then(G=>G.ok?G.json():null).then(G=>{K={at:x,records:G&&G.themes||[],active:G&&G.active||""}}).catch(()=>{K={at:x,records:[],active:""}})),U.length&&await Promise.all(U)}let v={actions:5,pages:5,messages:4};async function k(){await u();let x=$.trim(),U={action:e(x),route:l(x),setting:t(x),theme:p(x),message:d(x),user:n(x)};E=[],P=[],h.forEach(G=>{let Y=G.types.reduce((M,q)=>M.concat(U[q]||[]),[]).sort((M,q)=>q.score-M.score).slice(0,v[G.id]||5);Y.length&&(P.push({id:G.id,labelKey:G.labelKey,from:E.length,count:Y.length}),E=E.concat(Y))}),N=0,I()}function w(x){return x.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[x.type]||"\xB7"}function I(){if(!E.length){L.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let x=[];P.forEach(U=>{x.push(`<li class="admin-cmdk-group" role="presentation">${O(ServerI18n.t(U.labelKey))}</li>`);for(let G=U.from;G<U.from+U.count;G++){let Y=E[G],M=G===N;x.push(`
        <li class="admin-cmdk-row ${M?"is-active":""}"
            data-cmdk-idx="${G}" role="option" aria-selected="${M}">
          <span class="admin-cmdk-icon" aria-hidden="true">${O(w(Y))}</span>
          <span class="admin-cmdk-label">${O(Y.label)}</span>
          <span class="admin-cmdk-sub">${O(Y.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${M?"\u21B5":""}</span>
        </li>`)}}),L.innerHTML=x.join("")}function B(){m||c(),m.removeAttribute("hidden"),m.setAttribute("aria-hidden","false"),m.classList.add("is-open"),$="",R.value="",k(),setTimeout(()=>R.focus(),20)}function H(){m&&(m.setAttribute("hidden",""),m.setAttribute("aria-hidden","true"),m.classList.remove("is-open"))}function D(){return!!(m&&!m.hasAttribute("hidden"))}window.AdminCommandPalette={open:B,close:H,isOpen:D,toggle:()=>D()?H():B()}})()});var Ut=me(()=>{(function(){"use strict";let b="sec-sessions-overview";var y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(c){return String(c).replace(/[&<>"']/g,function(i){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[i]})},g={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function h(c){if(c=Number(c)||0,c<=0)return"\u2014";var i=Math.floor(c/3600),a=Math.floor(c%3600/60),o=c%60;return i>0?i+"h "+a+"m":a>0?a+"m":o+"s"}function _(c){if(!c)return"\u2014";try{var i=typeof c=="number"?new Date(c<1e12?c*1e3:c):new Date(c);return i.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(c)}}function z(){return'<div id="'+b+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function S(){return'<div class="admin-sessions-th"><span>'+y(ServerI18n.t("sessionsColSession"))+"</span><span>"+y(ServerI18n.t("sessionsColMessages"))+"</span><span>"+y(ServerI18n.t("sessionsColViewers"))+"</span><span>"+y(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function A(c){return c.name||ServerI18n.t("sessionsFallbackName",{id:(c.id||"").slice(0,12)})}function m(){var c=document.getElementById("admin-sessions-table-body");if(c){if(g.loading){window.AdminSkeletons?(c.innerHTML="",c.appendChild(window.AdminSkeletons.listRows({rows:5}))):c.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!g.sessions.length){c.innerHTML="";var i=window.AdminEmpty.render("sessions");i.dataset.emptyKind="sessions",c.appendChild(i);return}var a=g.sessions.map(function(o){var s=y(o.id||"");return'<div class="admin-sessions-tr'+(o.is_live?" is-live":"")+'" data-session-id="'+s+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(o.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+y(A(o))+'<span class="admin-sessions-td-sub">'+y(_(o.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(o.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(o.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+y(h(o.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+s+'">'+y(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");c.innerHTML=S()+a}}var R=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function L(){var c=document.querySelector("[data-sessions-export]");if(c){if(!g.exportId){c.hidden=!0,c.innerHTML="";return}var i=g.sessions.find(function(o){return o.id===g.exportId});if(!i){g.exportId=null,c.hidden=!0,c.innerHTML="";return}var a=R.map(function(o){return'<button type="button" class="admin-sx-export__seg'+(o.id===g.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+o.id+'" aria-pressed="'+(o.id===g.exportFormat?"true":"false")+'">'+y(ServerI18n.t(o.labelKey))+"</button>"}).join("");c.hidden=!1,c.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+y(ServerI18n.t("sessionsExportTitle",{name:A(i)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+y(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+a+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(g.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+y(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+y(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+y(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+y(ServerI18n.t("sessionsDownloadBtn",{fmt:g.exportFormat.toUpperCase()}))+"</button></div>"}}function $(){if(g.exportId){var c="/admin/sessions/"+encodeURIComponent(g.exportId)+"/export?format="+encodeURIComponent(g.exportFormat)+"&include_pii="+(g.exportPii?"1":"0"),i=document.createElement("a");i.href=c,i.rel="noopener",document.body.appendChild(i),i.click(),i.remove()}}async function E(){var c=g.exportId;if(c)try{var i=await fetch("/admin/sessions/"+encodeURIComponent(c)+"/export?format=json",{credentials:"same-origin"});if(!i.ok)throw new Error("HTTP "+i.status);var a=await i.json(),o=(a.records||[]).slice(0,500);if(!o.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var s=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:o,speedMultiplier:1})});if(s.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!s.ok)throw new Error("HTTP "+s.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function P(){m(),L()}async function N(){g.loading=!0,m();try{var[c,i]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),a=[],o=[];if(c.ok){var s=await c.json();a=Array.isArray(s.sessions)?s.sessions:[],a.forEach(function(n){n._explicit=!0})}if(i.ok){var l=await i.json();o=Array.isArray(l.sessions)?l.sessions:[]}var r=a.slice(),t=new Set(a.map(function(n){return n.id}));o.forEach(function(n){t.has(n.id)||r.push(n)}),r.sort(function(n,u){var v=typeof n.started_at=="number"?n.started_at:Date.parse(n.started_at||0),k=typeof u.started_at=="number"?u.started_at:Date.parse(u.started_at||0);return k-v});try{var d=await fetch("/admin/session/current",{credentials:"same-origin"});if(d.ok){var p=await d.json();if(p.status==="live"){var e=Object.assign({},p,{id:p.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});r.unshift(e)}}}catch{}g.sessions=r,g.total=r.length}catch(n){console.error("[admin-sessions] fetch error:",n),g.sessions=[],g.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:n.message||""}),!1)}finally{g.loading=!1,P()}}function T(c){c&&(window.location.hash="#/session-detail?id="+encodeURIComponent(c))}function C(c){g.exportId=c,L();var i=document.querySelector("[data-sessions-export]");i&&i.scrollIntoView({block:"nearest"})}function K(){var c=document.getElementById(b);c&&(c.addEventListener("click",function(i){var a=i.target.closest("[data-sessions-export-open]");if(a){i.stopPropagation(),C(a.dataset.sessionsExportOpen);return}if(i.target.closest("[data-sessions-export-close]")){g.exportId=null,L();return}var o=i.target.closest("[data-sessions-export-fmt]");if(o){g.exportFormat=o.dataset.sessionsExportFmt,L();return}if(i.target.closest("[data-sessions-replay]")){E();return}if(i.target.closest("[data-sessions-download]")){$();return}var s=i.target.closest(".admin-sessions-tr");s&&T(s.dataset.sessionId||null)}),c.addEventListener("change",function(i){var a=i.target.closest("[data-sessions-export-pii]");a&&(g.exportPii=!!a.checked)}),c.addEventListener("keydown",function(i){if(!(i.key!=="Enter"&&i.key!==" ")){var a=i.target.closest(".admin-sessions-tr");a&&(i.preventDefault(),T(a.dataset.sessionId||null))}}))}function F(){var c=document.querySelector(".admin-dash-grid"),i=document.getElementById(b);if(!(!c||!i)){var a=c.dataset.activeLeaf||"dashboard";i.style.display=a==="sessions"?"":"none"}}function O(){var c=document.getElementById("settings-grid");!c||document.getElementById(b)||(c.insertAdjacentHTML("beforeend",z()),K(),N(),F())}function f(){if(window.DANMU_CONFIG?.session?.logged_in){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&O(),F()});c.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",F),document.addEventListener("admin-panel-rendered",function(){O(),F()}),O()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f()})()});var Kt=me(()=>{(function(){"use strict";let b="sec-session-detail-overview",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(w){return String(w).replace(/[&<>"']/g,function(I){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[I]})},g={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},h=!1,_={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function z(){let w=window.location.hash||"",I=w.indexOf("?");if(I===-1)return null;let B=w.slice(I+1);return new URLSearchParams(B).get("id")||null}function S(w){if(!w)return"\u2014";try{let I=new Date(w);if(isNaN(I.getTime()))return String(w);let B=H=>String(H).padStart(2,"0");return`${I.getFullYear()}-${B(I.getMonth()+1)}-${B(I.getDate())} ${B(I.getHours())}:${B(I.getMinutes())}:${B(I.getSeconds())}`}catch{return String(w)}}function A(w){if(!w||w<0)return"\u2014";let I=Math.round(Number(w)),B=Math.floor(I/3600),H=Math.floor(I%3600/60),D=I%60;return B>0?`${B}h ${H}m ${D}s`:H>0?`${H}m ${D}s`:`${D}s`}function m(w,I){if(!w||!I)return"";try{let B=Math.max(0,Math.round((new Date(w)-new Date(I))/1e3)),H=Math.floor(B/60),D=B%60;return`+${String(H).padStart(2,"0")}:${String(D).padStart(2,"0")}`}catch{return""}}function R(w){let I=Number(w);return isNaN(I)?"\u2014":I.toLocaleString()}function L(w){if(!w)return"#64748b";let I=0;for(let H=0;H<w.length;H++)I=I*31+w.charCodeAt(H)>>>0;return`hsl(${I%360}, 60%, 60%)`}function $(){return`
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
    `}async function E(w){if(!w){F(ServerI18n.t("sessionDetailErrMissingId"));return}K(!0);try{let I=await fetch(`/admin/sessions/${encodeURIComponent(w)}`,{credentials:"same-origin"});if(I.status===404&&(I=await fetch(`/admin/session/archive/${encodeURIComponent(w)}`,{credentials:"same-origin"})),!I.ok)throw new Error(`HTTP ${I.status}`);let B=await I.json();g.session=B.session||null,g.records=B.records||[],g.density=B.density||[],K(!1),O(),P()}catch(I){K(!1),F(ServerI18n.t("sessionDetailErrLoadFailed",{msg:I.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function P(){if(g.sessionId)try{let w=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(g.sessionId)}`,{credentials:"same-origin"});if(!w.ok)return;let I=await w.json();g.annotations=Array.isArray(I.annotations)?I.annotations:[],s()}catch{}}function N(){let w=g.session;if(!w)return 0;if(w.duration_s)return Math.round(w.duration_s*1e3);if(w.duration)return Math.round(w.duration*1e3);let I=w.started_at||w.start_time,B=w.ended_at||w.end_time;if(I&&B)try{return Math.max(0,new Date(B)-new Date(I))}catch{return 0}return g.density&&g.density.length?g.density.length*60*1e3:0}function T(w){let I=Date.parse(w||0);if(Number.isNaN(I))return"\u2014";let B=new Date(I),H=D=>String(D).padStart(2,"0");return`${H(B.getHours())}:${H(B.getMinutes())}:${H(B.getSeconds())}`}function C(w){let I=Math.floor(w/1e3),B=Math.floor(I/3600),H=Math.floor(I%3600/60),D=I%60,x=U=>String(U).padStart(2,"0");return B>0?`${x(B)}:${x(H)}:${x(D)}`:`${x(H)}:${x(D)}`}function K(w){g.loading=w;let I=document.querySelector("[data-sd-loading]"),B=document.querySelector("[data-sd-error]");I&&(I.hidden=!w),B&&w&&(B.hidden=!0);let H=document.querySelector("[data-sd-timeline-wrap]");if(H&&window.AdminSkeletons){let D=H.querySelector("[data-sd-timeline-skel]");w?(H.hidden=!1,D||(D=window.AdminSkeletons.chart(),D.setAttribute("data-sd-timeline-skel","1"),H.appendChild(D))):D&&D.remove()}}function F(w){g.error=w;let I=document.querySelector("[data-sd-error]"),B=document.querySelector("[data-sd-error-msg]");I&&(I.hidden=!1),B&&(B.textContent=w),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(H){let D=document.querySelector(`[${H}]`);D&&(D.hidden=!0)})}function O(){f(),c(),i(),o(),s();let w=document.querySelector("[data-sd-error]");w&&(w.hidden=!0)}function f(){let w=g.session,I=document.querySelector("[data-sd-session-header]");if(!I)return;I.hidden=!1;let B=document.querySelector("[data-sd-session-id]"),H=document.querySelector("[data-sd-meta-start]"),D=document.querySelector("[data-sd-meta-duration]"),x=document.querySelector("[data-sd-title]"),U=w&&(w.session_id||w.id)||g.sessionId||"\u2014";B&&(B.textContent=U),H&&(H.textContent=S(w&&(w.started_at||w.start_time))),D&&(D.textContent=A(w&&(w.duration_s||w.duration))),x&&(x.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(U).slice(-8)}))}function c(){let w=g.session;if(!w)return;let I=document.querySelector("[data-sd-kpis]");I&&(I.hidden=!1);let B=function(U,G,Y){let M=document.querySelector(`[data-sd-stat="${U}"]`);M&&(M.textContent=G);let q=document.querySelector(`[data-sd-stat-sub="${U}"]`);q&&(q.textContent=Y||"")};B("msg_count",R(w.msg_count)),B("viewer_count",R(w.viewer_count));let H=Array.isArray(g.density)?g.density:[];if(H.length){let U=0,G=0;H.forEach(function(q,V){q>U&&(U=q,G=V)});let Y=Date.parse(w.started_at||w.start_time||0),M="";if(!Number.isNaN(Y)){let q=new Date(Y+G*6e4),V=ne=>String(ne).padStart(2,"0");M=`${V(q.getHours())}:${V(q.getMinutes())}`}B("peak",R(U),M)}else B("peak","\u2014","");let D=Number(w.blocked_count)||0;B("blocked",R(D));let x=document.querySelector("[data-sd-blocked-btn]");x&&(x.textContent=ServerI18n.t("sessionDetailStatBlocked")+(D?" "+D:""),x.disabled=D===0)}function i(){let w=document.querySelector("[data-sd-timeline-wrap]"),I=document.querySelector("[data-sd-timeline]"),B=document.querySelector("[data-sd-timeline-axis]"),H=document.querySelector("[data-sd-peak-label]");if(!w||!I||!B)return;let D=g.density;if(!D||D.length===0){w.hidden=!0;return}w.hidden=!1;let x=Math.max(1,...D),U=0;D.forEach(function(ne,W){ne>D[U]&&(U=W)});let G=D.map(function(ne,W){let X=Math.max(2,Math.round(ne/x*100));return`<div class="admin-sd-bar${W===U?" is-peak":""}" style="height:${X}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:ne,minute:W+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:ne})}"></div>`}).join("");I.innerHTML=G;let Y=g.session,M=S(Y&&(Y.started_at||Y.start_time)).slice(11,16)||"00:00",q=S(Y&&(Y.ended_at||Y.end_time)).slice(11,16)||"",V=D.length>2?`+${Math.round(D.length/2)}min`:"";B.innerHTML=`
      <span class="admin-sd-axis-label">${y(M)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${y(V)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${y(q)}</span>
    `,H&&(H.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:D[U],minute:U}))}function a(){let w=(g.msgQuery||"").trim().toLowerCase();return g.records.filter(function(I){let B=(I.status||"shown")==="blocked";return g.msgFilter==="blocked"&&!B?!1:w?String(I.text||"").toLowerCase().indexOf(w)!==-1||String(I.nickname||"").toLowerCase().indexOf(w)!==-1:!0})}function o(){let w=document.querySelector("[data-sd-msgs-wrap]"),I=document.querySelector("[data-sd-msgs-list]");if(!w||!I)return;if(!g.records.length){w.hidden=!0;return}w.hidden=!1;let B=a().slice(0,300);if(!B.length){I.innerHTML='<div class="admin-sd-msgs-empty">'+y(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}I.innerHTML=B.map(function(H){let D=(H.status||"shown")==="blocked",x=L(H.fingerprint||H.fp||""),U=T(H.timestamp||H.created_at),G=String(H.nickname||"").trim();return`
        <div class="admin-sd-msg-row${D?" is-blocked":""}">
          <span class="admin-sd-msg-time">${y(U)}</span>
          <span class="admin-sd-msg-dot" style="background:${x}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${y(H.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${y(ServerI18n.t("deliveryStatus_"+(H.status||"shown")))}
            ${H.delivery_reason?`<span class="admin-sd-msg-rule">${y(ServerI18n.t("deliveryReason_"+H.delivery_reason))}</span>`:""}
            ${D&&H.blockedBy?`<span class="admin-sd-msg-rule">${y(ServerI18n.t("sessionDetailBlockedBy",{rule:H.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${y(G||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function s(){let w=g.annotations||[],I=N(),B=document.querySelector("[data-sd-ann-count]");B&&(B.textContent=w.length?`${w.length} ANNOTATIONS`:"");let H=document.querySelector("[data-sd-ann-head]");H&&(H.textContent=w.length?`ANNOTATIONS \xB7 ${w.length}`:"ANNOTATIONS");let D=document.querySelector("[data-sd-ann-layer]");D&&(!I||w.length===0?D.innerHTML="":D.innerHTML=w.map(function(G){let Y=_[G.label]||_.note,M=Math.min(100,Math.max(0,G.ts_ms/I*100)),q=G.id===g.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${Y.shape}${q?" is-active":""}"
              data-sd-ann-marker="${y(G.id)}"
              style="left:${M.toFixed(2)}%;--ann-color:${Y.color}"
              title="${y(Y.label)} \xB7 ${C(G.ts_ms)}"
              aria-label="${y(Y.label)} at ${C(G.ts_ms)}: ${y(G.note||"")}">
              ${Y.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${q?`<span class="admin-sd-ann-tip"><span style="color:${Y.color}">${Y.icon}</span> ${y((G.note||"").slice(0,40))}${(G.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let x=document.querySelector("[data-sd-ann-legend]");x&&(x.innerHTML=Object.keys(_).map(function(G){let Y=_[G],M=Y.shape==="square"?"2px":Y.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${Y.color};border-radius:${M}"></span>
          <span class="admin-sd-ann-legend-label">${Y.label}</span>
        </span>`}).join(""));let U=document.querySelector("[data-sd-ann-list]");if(U){if(w.length===0){U.innerHTML="";let G=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});G.dataset.emptyKind="session-annotations",U.appendChild(G);return}U.innerHTML=w.map(function(G){let Y=_[G.label]||_.note,M=G.id===g.activeAnnId,V=(G.note||"").length>80?(G.note||"").slice(0,80)+"\u2026":G.note||"";return`
        <div class="admin-sd-ann-row${M?" is-active":""}" data-sd-ann-row="${y(G.id)}">
          <span class="admin-sd-ann-ts" style="color:${Y.color}">${C(G.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${Y.color}">${Y.icon} ${Y.label}</span>
          <span class="admin-sd-ann-note">${y(V)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${y(G.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function l(w){if(!g.sessionId)return;let I=window.HudConfirm;if(!I){let Y=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:C(w)}),"");Y!=null&&Y.trim()&&r(w,"note",Y.trim());return}let H="highlight",D="",x=document.createElement("div");x.className="admin-sd-ann-modal-body",x.innerHTML=`
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
      </div>`,x.addEventListener("click",function(Y){let M=Y.target.closest("[data-ann-label]");M&&(H=M.dataset.annLabel,x.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(q){q.classList.toggle("is-active",q===M)}))});let U=x.querySelector("[data-ann-modal-note]"),G=x.querySelector("[data-ann-modal-counter]");U.addEventListener("input",function(){D=U.value,G.textContent=`${D.length} / 280`}),setTimeout(function(){U&&U.focus()},50),I.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:x,width:460}).then(function(Y){Y&&r(w,H,U.value.trim())})}async function r(w,I,B){if(g.sessionId)try{let H=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:g.sessionId,ts_ms:Math.max(0,Math.round(w)),label:I||"note",note:B||""})});if(!H.ok)throw new Error(`HTTP ${H.status}`);let D=await H.json();D.annotation&&(g.annotations.push(D.annotation),g.annotations.sort(function(x,U){return x.ts_ms-U.ts_ms}),g.activeAnnId=D.annotation.id,s(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(H){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:H.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function t(w){if(w)try{let I=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(w)}`,{method:"DELETE",credentials:"same-origin"});if(!I.ok)throw new Error(`HTTP ${I.status}`);g.annotations=g.annotations.filter(function(B){return B.id!==w}),g.activeAnnId===w&&(g.activeAnnId=null),s(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(I){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:I.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function d(w){let I=document.querySelector("[data-sd-timeline-inner]"),B=document.querySelector("[data-sd-ann-hover]");if(!I||!B)return;let H=I.getBoundingClientRect();if(!H.width)return;let D=w.clientX-H.left,x=Math.min(1,Math.max(0,D/H.width)),U=N();if(!U){B.hidden=!0;return}let G=Math.round(x*U);g.hoverTsMs=G,B.hidden=!1,B.style.left=`${(x*100).toFixed(2)}%`,B.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:C(G)})}function p(){let w=document.querySelector("[data-sd-ann-hover]");w&&(w.hidden=!0),g.hoverTsMs=null}function e(w){if(w.target.closest("[data-sd-ann-marker]"))return;let I=document.querySelector("[data-sd-timeline-inner]");if(!I)return;let B=I.getBoundingClientRect();if(!B.width)return;let H=w.clientX-B.left,D=Math.min(1,Math.max(0,H/B.width)),x=N();x&&l(Math.round(D*x))}async function n(){if(g.sessionId)try{let w=g.records.slice(0,500);if(!w.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let I=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:w,speedMultiplier:1})});if(I.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!I.ok)throw new Error("HTTP "+I.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function u(w,I){if(w==="back")window.location.hash="#/history/sessions";else if(w==="retry")g.sessionId&&E(g.sessionId);else if(w==="export"){if(!g.sessionId)return;let B=document.createElement("a");B.href="/admin/sessions/"+encodeURIComponent(g.sessionId)+"/export?format=csv",B.rel="noopener",document.body.appendChild(B),B.click(),B.remove()}else if(w==="replay")n();else if(w==="add-annotation"){let B=N(),H=g.hoverTsMs!=null?g.hoverTsMs:Math.round(B/2);l(H)}}function v(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let I=z();if(!I){g.sessionId=null,F(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}g.sessionId=I,E(I)}function k(){let w=document.getElementById("settings-grid");if(!w)return;let I=document.getElementById(b);I||(w.insertAdjacentHTML("beforeend",$()),I=document.getElementById(b),s()),I&&I.dataset.sdBound!=="1"&&(I.dataset.sdBound="1",I.addEventListener("click",function(B){let H=B.target.closest("[data-sd-ann-del]");if(H){B.stopPropagation(),t(H.dataset.sdAnnDel);return}let D=B.target.closest("[data-sd-ann-marker]");if(D){B.stopPropagation(),g.activeAnnId=D.dataset.sdAnnMarker,s();let M=document.querySelector(`[data-sd-ann-row="${g.activeAnnId}"]`);M&&M.scrollIntoView&&M.scrollIntoView({block:"nearest",behavior:"smooth"});return}let x=B.target.closest("[data-sd-ann-row]");if(x){g.activeAnnId=x.dataset.sdAnnRow,s();return}if(B.target.closest("[data-sd-timeline-inner]")){e(B);return}let G=B.target.closest("[data-sd-action]");if(G){B.preventDefault(),u(G.dataset.sdAction,G);return}let Y=B.target.closest("[data-sd-filter]");Y&&(g.msgFilter=Y.dataset.sdFilter,I.querySelectorAll("[data-sd-filter]").forEach(function(M){M.classList.toggle("is-active",M===Y)}),o())}),I.addEventListener("input",function(B){let H=B.target.closest("[data-sd-search]");H&&(g.msgQuery=H.value||"",o())}),I.addEventListener("mousemove",function(B){B.target.closest("[data-sd-timeline-inner]")&&d(B)}),I.addEventListener("mouseleave",function(B){B.target.closest&&B.target.closest("[data-sd-timeline-inner]")&&p()},!0)),g.sessionId=z(),g.sessionId?E(g.sessionId):F(ServerI18n.t("sessionDetailErrNoSessionSelected")),h||(h=!0,window.addEventListener("hashchange",v))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&k()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let I=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(b)&&I.indexOf("/session-detail")!==-1&&k(),window.addEventListener("admin-route-changed",function(B){(B&&B.detail&&B.detail.route)==="session-detail"&&k()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&k()})})})()});var Wt=me(()=>{(function(){"use strict";let b="sec-search-overview";var y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},g=20,h={query:"",scope:"session",blockedOnly:!1,who:"",shown:g,results:[],total:0,loading:!1,searched:!1},_=0;function z(){return'<div id="'+b+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+y(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+y(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+y(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+y(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+y(ServerI18n.t("searchWhoAria"))+'"><option value="">'+y(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+y(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+y(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function S(a){if(!a)return 200;for(var o=0,s=0;s<Math.min(a.length,6);s++)o=o*31+a.charCodeAt(s)&65535;return o%360}function A(a,o){if(!o||!a)return y(a||"");var s=y(a),l=y(o);try{var r=new RegExp("("+l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return s.replace(r,'<mark class="admin-search-hit">$1</mark>')}catch{return s}}function m(a){if(!a)return"\u2014";try{var o=new Date(a);return o.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return a}}function R(){var a=h.results;return h.blockedOnly&&(a=a.filter(function(o){return(o.status||"shown")==="blocked"})),h.who&&(a=a.filter(function(o){return(o.nickname||"")===h.who})),a}function L(){var a=document.getElementById("admin-search-count");if(a){if(!h.searched||!h.query.trim()){a.textContent="";return}a.textContent=ServerI18n.t("searchResultCount",{n:R().length})}}function $(){var a=document.querySelector("[data-search-who]");if(a){var o=[];h.results.forEach(function(l){var r=(l.nickname||"").trim();r&&o.indexOf(r)===-1&&o.push(r)}),o.sort();var s=h.who;a.innerHTML='<option value="">'+y(ServerI18n.t("searchWhoAnyone"))+"</option>"+o.map(function(l){return'<option value="'+y(l)+'"'+(l===s?" selected":"")+">"+y(l)+"</option>"}).join("")}}function E(){var a=document.getElementById("admin-search-results"),o=document.getElementById("admin-search-empty-state"),s=document.getElementById("admin-search-export-btn");if(a){a.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(e){e.remove()});var l=function(e){o&&(o.style.display="block",o.textContent=e),s&&(s.hidden=!0)};if(h.loading)return l(ServerI18n.t("searchSearching"));if(!h.searched)return l(ServerI18n.t("searchPromptStart"));var r=R();if(r.length===0)return l(ServerI18n.t("searchNoMatch"));o&&(o.style.display="none"),s&&(s.hidden=!1);var t=Math.min(r.length,h.shown),d=document.createDocumentFragment();if(r.slice(0,t).forEach(function(e){var n=document.createElement("div");n.className="admin-search-row",n.innerHTML='<span class="admin-search-row__ts">'+y(m(e.timestamp))+'</span><span class="admin-search-row__text">'+A(e.text||"",h.query)+'</span><span class="admin-search-row__nick">'+y((e.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+y(ServerI18n.t("deliveryStatus_"+(e.status||"shown")))+(e.delivery_reason?"<br>"+y(ServerI18n.t("deliveryReason_"+e.delivery_reason)):"")+"</span></span>",d.appendChild(n)}),a.appendChild(d),r.length>t){var p=document.createElement("button");p.type="button",p.className="admin-search-more",p.dataset.searchMore="1",p.textContent=ServerI18n.t("searchMoreLeft",{n:r.length-t}),a.appendChild(p)}}}function P(){L(),$(),E()}async function N(){var a=h.query.trim();if(!a){h.loading=!1,h.searched=!1,h.results=[],h.total=0,P();return}h.loading=!0,P();try{var o="/admin/search?q="+encodeURIComponent(a);if(h.scope==="session"){var s=await C();s&&(o+="&since="+encodeURIComponent(s))}var l=Date.now(),r=await fetch(o,{credentials:"same-origin"}),t=Date.now()-l;if(!r.ok)throw new Error("HTTP "+r.status);var d=await r.json();h.results=Array.isArray(d.results)?d.results:[],h.total=typeof d.total=="number"?d.total:h.results.length,h.shown=g}catch(p){console.error("[admin-search] fetch error:",p),h.results=[],h.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:p.message||""}),!1)}finally{h.loading=!1,h.searched=!0,P()}}var T=null;async function C(){if(T!==null)return T;try{var a=await fetch("/admin/session/current",{credentials:"same-origin"});if(a.ok){var o=await a.json();if(o.status==="live"&&o.started_at)return T=new Date(o.started_at*1e3).toISOString(),T}}catch{}return T="",""}function K(){clearTimeout(_),_=setTimeout(N,300)}function F(){if(h.results.length){var a=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];h.results.forEach(function(r){var t=[r.nickname||"",r.fingerprint||"",r.timestamp||"",r.status||"",r.text||"",r.delivery_reason||""].map(function(d){return'"'+String(d).replace(/"/g,'""')+'"'});a.push(t.join(","))});var o=new Blob(["\uFEFF"+a.join(`
`)],{type:"text/csv;charset=utf-8"}),s=URL.createObjectURL(o),l=document.createElement("a");l.href=s,l.download="danmu-search-"+(h.query||"export")+".csv",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(s)}}function O(){var a=document.getElementById(b);if(a){var o=document.getElementById("admin-search-input");o&&(o.addEventListener("input",function(){h.query=o.value,K()}),o.addEventListener("keydown",function(l){l.key==="Enter"&&(clearTimeout(_),h.query=o.value,N())})),a.addEventListener("click",function(l){var r=l.target.closest("[data-search-scope]");if(r){h.scope=r.dataset.searchScope,a.querySelectorAll("[data-search-scope]").forEach(function(d){d.classList.toggle("is-active",d===r)}),h.query.trim()&&K();return}var t=l.target.closest("[data-search-blocked]");if(t){h.blockedOnly=!h.blockedOnly,t.classList.toggle("is-active",h.blockedOnly),h.shown=g,P();return}if(l.target.closest("[data-search-more]")){h.shown+=g,E();return}}),a.addEventListener("change",function(l){var r=l.target.closest("[data-search-who]");r&&(h.who=r.value||"",h.shown=g,P())});var s=document.getElementById("admin-search-export-btn");s&&s.addEventListener("click",F)}}function f(){var a=document.querySelector(".admin-dash-grid"),o=document.getElementById(b);if(!(!a||!o)){var s=a.dataset.activeLeaf||"dashboard";o.style.display=s==="search"?"":"none"}}function c(){var a=document.getElementById("settings-grid");!a||document.getElementById(b)||(a.insertAdjacentHTML("beforeend",z()),O(),f())}function i(){if(window.DANMU_CONFIG?.session?.logged_in){var a=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&c(),f()});a.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",f),document.addEventListener("admin-panel-rendered",function(){c(),f()}),c()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i()})()});var Gt=me(()=>{(function(){"use strict";let b="sec-api-tokens-overview",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})},g=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],h=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],_={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function z(e){if(!e)return"\u2014";try{let n=new Date(e);if(isNaN(n.getTime()))return String(e);let u=v=>String(v).padStart(2,"0");return`${n.getFullYear()}-${u(n.getMonth()+1)}-${u(n.getDate())}`}catch{return String(e)}}function S(e){if(!e)return null;try{let n=new Date(e);if(isNaN(n.getTime()))return null;let u=v=>String(v).padStart(2,"0");return`${n.getFullYear()}-${u(n.getMonth()+1)}-${u(n.getDate())} ${u(n.getHours())}:${u(n.getMinutes())}`}catch{return null}}function A(e){let n=Number(e);return isNaN(n)?"0":n.toLocaleString()}function m(e){if(!e||e.enabled===!1)return"inactive";if(!e.expires_at)return"active";try{let n=new Date(e.expires_at).getTime(),u=Date.now();if(n<u)return"expired";if(n-u<168*3600*1e3)return"expiring"}catch{}return"active"}function R(e){if(!e)return 1/0;try{return Math.floor((Date.now()-new Date(e).getTime())/864e5)}catch{return 1/0}}function L(e){return!e||!e.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':e.map(function(n){let u="admin-ui-pill admin-at-scope-badge";return n==="admin:*"?u+=" is-danger":n.startsWith("fire:")?u+=" is-warn":n.startsWith("read:stats")?u+=" is-cyan":u+=" is-success",`<span class="${u}">${y(n)}</span>`}).join(" ")}function $(e){let n="admin-ui-dot admin-at-dot";return e==="active"?n+=" is-success":e==="expiring"?n+=" is-warn":e==="expired"?n+=" is-danger":n+=" is-muted",`<span class="${n}" aria-hidden="true"></span>`}function E(){let e=g.map(function(u){let v=u.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",w=`admin-ui-pill admin-at-scope-badge is-${u.badge==="red"?"danger":u.badge==="amber"?"warn":u.badge==="green"?"success":u.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${y(u.id)}"
          >
          <span class="${w}">${y(u.badgeTxt)}</span>
          <span class="admin-at-scope-label">${y(ServerI18n.t(u.labelKey))}</span>
          ${v}
        </label>
      `}).join(""),n=h.map(function(u){let v=u.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${u.days!==null?String(u.days):"null"}" ${v} class="sr-only">
          <span>${y(ServerI18n.t(u.labelKey))}</span>
        </label>
      `}).join("");return`
      <div id="${b}" class="admin-at-page hud-page-stack lg:col-span-2" data-tpl="B">
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
    `}async function P(){K(!0);try{let e=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!e.ok)throw new Error(`HTTP ${e.status}`);let n=await e.json();_.tokens=n.tokens||n||[],O()}catch(e){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:e.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{K(!1)}}async function N(e){_.creating=!0,F(!0),o();try{let n=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok){let k=await n.json().catch(()=>({}));throw new Error(k.error||k.message||`HTTP ${n.status}`)}let u=await n.json(),v=u.token||u.raw_token||u.access_token||null;_.newTokenRaw=v,f(v),i(),await P(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(n){a(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:n.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:n.message||""}),!1)}finally{_.creating=!1,F(!1)}}async function T(e,n){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${y(n||e)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let v=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(e)}`,{method:"DELETE"});if(!v.ok){let k=await v.json().catch(()=>({}));throw new Error(k.error||k.message||`HTTP ${v.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await P()}catch(v){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:v.message||""}),!1)}}async function C(e,n){try{let u=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(e)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:n})});if(!u.ok){let v=await u.json().catch(()=>({}));throw new Error(v.error||v.message||`HTTP ${u.status}`)}window.showToast&&window.showToast(n?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await P()}catch(u){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:u.message||""}),!1)}}function K(e){let n=document.querySelector("[data-at-list-loading]");n&&(n.hidden=!e)}function F(e){let n=document.getElementById("adminAtSubmitBtn");n&&(n.disabled=e,n.textContent=e?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function O(){let e=_.tokens,n=document.querySelector("[data-at-empty]"),u=document.querySelector("[data-at-table-wrap]"),v=document.querySelector("[data-at-tbody]");if(!(!n||!u||!v)){if(!e||e.length===0){if(!n.firstElementChild&&window.AdminEmpty){let k=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});k.dataset.emptyKind="api-tokens",n.appendChild(k)}n.hidden=!1,u.hidden=!0;return}n.hidden=!0,u.hidden=!1,v.innerHTML=e.map(function(k){let w=m(k),I=$(w),B=k.scopes||k.scope||[],H=Array.isArray(B)?B:String(B).split(",").map(M=>M.trim()).filter(Boolean),x=R(k.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",U=w==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",G=w==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",Y=k.last_used_at?`${S(k.last_used_at)||z(k.last_used_at)}<br><span class="admin-at-ip">${y(k.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${y(k.id||k.token_id||"")}">
          <td class="admin-at-td-label">
            ${I}
            <span class="admin-at-label-text">${y(k.label||k.name||"\u2014")}</span>
            ${x}${U}${G}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${y(k.prefix||k.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${L(H)}</div>
          </td>
          <td class="admin-at-td-used">${Y}</td>
          <td class="admin-at-td-usage">${A(k.usage_count||k.use_count)}</td>
          <td class="admin-at-td-created">${z(k.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${y(k.id||k.token_id||"")}"
              data-token-enabled="${k.enabled===!1?"0":"1"}"
              title="${k.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${k.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${y(k.id||k.token_id||"")}"
              data-token-label="${y(k.label||k.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function f(e){let n=document.getElementById("adminAtSuccessBanner"),u=document.getElementById("adminAtTokenDisplay"),v=document.getElementById("adminAtCreateForm");n&&(n.hidden=!1),u&&e&&(u.value=e),v&&(v.style.opacity="0.5"),n&&n.scrollIntoView({behavior:"smooth",block:"nearest"})}function c(){let e=document.getElementById("adminAtSuccessBanner"),n=document.getElementById("adminAtCreateForm");e&&(e.hidden=!0),n&&(n.style.opacity=""),_.newTokenRaw=null}function i(){let e=document.getElementById("adminAtCreateForm");e&&e.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(v){v.classList.remove("is-active")});let n=document.querySelector("input[name='adminAtExpiry'][value='90']");if(n){n.checked=!0;let v=n.closest(".admin-at-expiry-btn");v&&v.classList.add("is-active")}let u=document.getElementById("adminAtAdminWarn");u&&(u.hidden=!0),o()}function a(e){let n=document.getElementById("adminAtFormError");n&&(n.hidden=!1,n.textContent=e)}function o(){let e=document.getElementById("adminAtFormError");e&&(e.hidden=!0,e.textContent="")}function s(){let e=document.getElementById("adminAtLabel"),n=e?e.value.trim():"",u=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(I){u.push(I.value)});let v=document.querySelector("input[name='adminAtExpiry']:checked"),k=v?v.value:"90",w=k==="null"?null:parseInt(k,10);return{label:n,scopes:u,expiry_days:w}}function l(e){return e.label?e.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!e.scopes||e.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function r(e){if(e.preventDefault(),_.creating)return;o();let n=s(),u=l(n);if(u){a(u);return}N(n)}function t(){let e=_.newTokenRaw;if(!e)return;let n=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(e).then(function(){n&&(n.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){n.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let u=document.getElementById("adminAtTokenDisplay");u&&(u.select(),document.execCommand("copy")),n&&(n.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){n.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function d(){let e=document.getElementById(b);if(!e)return;e.addEventListener("click",function(k){let w=k.target.closest("[data-at-action]");if(w){let B=w.dataset.atAction;if(B==="revoke"){let H=w.dataset.tokenId,D=w.dataset.tokenLabel;T(H,D)}else if(B==="toggle"){let H=w.dataset.tokenId,D=w.dataset.tokenEnabled==="1";C(H,!D)}else B==="copy-token"&&t();return}let I=k.target.closest(".admin-at-expiry-btn");I&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(B){B.classList.remove("is-active")}),I.classList.add("is-active"))});let n=document.getElementById("adminAtScope_admin__");n&&n.addEventListener("change",function(){let k=document.getElementById("adminAtAdminWarn");k&&(k.hidden=!n.checked)});let u=document.getElementById("adminAtCreateForm");u&&u.addEventListener("submit",r);let v=document.querySelector("input[name='adminAtExpiry'][value='90']");if(v){let k=v.closest(".admin-at-expiry-btn");k&&k.classList.add("is-active")}}function p(){let e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",E()),d(),P())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&p()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&p()})})()});var zt=me(()=>{(function(){"use strict";let b="sec-wcag-overview",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(i){return String(i).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})};function g(i){let a=i.replace(/^#/,""),o=a.length===3?a.split("").map(function(s){return s+s}).join(""):a;return[parseInt(o.slice(0,2),16)/255,parseInt(o.slice(2,4),16)/255,parseInt(o.slice(4,6),16)/255]}function h(i){return i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)}function _(i){let a=g(i);return .2126*h(a[0])+.7152*h(a[1])+.0722*h(a[2])}function z(i,a){let o=_(i),s=_(a),l=Math.max(o,s),r=Math.min(o,s);return(l+.05)/(r+.05)}function S(i){return i>=7?"AAA":i>=4.5?"AA":i>=3?"AA-large":"fail"}function A(i,a){let o=_(a),s=[],l=g(i);for(let r=.05;r<=.6&&s.length<3;r+=.05){let d="#"+l.map(function(e){return Math.min(1,e+r)}).map(function(e){return Math.round(e*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),p=z(d,a);p>=4.5&&s.push({hex:d,ratio:p})}return s}let m=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],R={fg:"#FB7185",bg:"#000000"},L="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",$={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function E(){let i=m.filter(function(s){return S(z(s.fg,s.bg))!=="fail"}).length,a=m.length-i,o=Math.round(i/m.length*100);return`
      <div id="${b}" class="admin-wcag-page hud-page-stack lg:col-span-2">
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
              ${P("PAIRS",m.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${P("PASS RATE",o+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:o})}">
                <div class="admin-wcag-meter-fill" style="width:${o}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${L}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${m.map(function(s,l){return N(s,l)}).join("")}
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
      </div>`}function P(i,a,o){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${y(String(a))}</span>
        <span class="hud-stat-tile-label">${y(o)}</span>
      </div>`}function N(i,a){let o=z(i.fg,i.bg),s=S(o),l=$[s],r=ServerI18n.t(i.nameKey),t=l.labelKey?ServerI18n.t(l.labelKey):l.label,d=s==="fail"?ServerI18n.t("wcagWarnFail"):s==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${L}"
        data-wcag-pair-idx="${a}" role="button" tabindex="0"
        aria-label="${y(ServerI18n.t("wcagPairAriaLabel",{name:r,ratio:o.toFixed(2),level:t.slice(2)}))}">
        <span class="admin-wcag-pair-name">${y(r)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${y(i.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${y(i.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${y(i.fg)}">${y(i.fg)} / ${y(i.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${o.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${l.mod}">${t}</span>
        ${d?`<span class="admin-wcag-warn">\u26A0 ${d}</span>`:""}
      </div>`}function T(){let i=z(R.fg,R.bg),a=S(i),o=$[a],s=o.labelKey?ServerI18n.t(o.labelKey):o.label,l=A(R.fg,R.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${C(ServerI18n.t("wcagForegroundLabel"),R.fg,"fg")}
        ${C(ServerI18n.t("wcagBackgroundLabel"),R.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${y(R.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${y(R.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${y(R.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${y(R.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${i.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${o.mod}">${s}</span>
      </div>

      <div class="admin-wcag-levels">
        ${K(ServerI18n.t("wcagCheckAANormal"),i>=4.5)}
        ${K(ServerI18n.t("wcagCheckAALarge"),i>=3)}
        ${K(ServerI18n.t("wcagCheckAAANormal"),i>=7)}
        ${K(ServerI18n.t("wcagCheckAAALarge"),i>=4.5)}
      </div>

      ${l.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${l.map(function(r){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${y(r.hex)}"
                title="${y(ServerI18n.t("wcagSuggApplyTitle",{ratio:r.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${y(R.bg)};color:${y(r.hex)}">${y(r.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${r.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function C(i,a,o){let s="wcag-tester-"+o;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${s}">${y(i)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${y(a)}"></span>
          <input type="text" id="${s}" class="admin-ui-input" data-wcag-tester-${o}
            aria-label="${y(ServerI18n.t("wcagHexAria",{label:i}))}"
            value="${y(a)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function K(i,a){return`<div class="admin-wcag-level ${a?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${a?"\u2713":"\u2717"}</span>
      <span>${y(i)}</span>
    </div>`}function F(){let i=document.getElementById(b);i&&(i.addEventListener("click",function(a){let o=a.target.closest("[data-wcag-pair-idx]");if(o){O(o);return}let s=a.target.closest("[data-wcag-sugg]");s&&(R.fg=s.dataset.wcagSugg,f())}),i.addEventListener("keydown",function(a){if(a.key!=="Enter"&&a.key!==" "&&a.key!=="Spacebar")return;let o=a.target.closest("[data-wcag-pair-idx]");o&&(a.preventDefault(),O(o))}),i.addEventListener("input",function(a){let o=a.target.closest("[data-wcag-tester-fg]"),s=a.target.closest("[data-wcag-tester-bg]");o&&/^#[0-9A-Fa-f]{6}$/.test(o.value)&&(R.fg=o.value.toUpperCase(),f()),s&&/^#[0-9A-Fa-f]{6}$/.test(s.value)&&(R.bg=s.value.toUpperCase(),f())}))}function O(i){let a=m[parseInt(i.dataset.wcagPairIdx,10)];a&&(R.fg=a.fg,R.bg=a.bg,f())}function f(){let i=document.querySelector("[data-wcag-tester]");i&&(i.innerHTML=T())}function c(){let i=document.getElementById("settings-grid");!i||document.getElementById(b)||(i.insertAdjacentHTML("beforeend",E()),F())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&c()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&c()})})()});var Vt=me(()=>{(function(){"use strict";let b="danmu.onboarding.done",y="admin-onboarding-root",z=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],S=0,A=!1;window.AdminOnboarding={start:E,isDone:function(){try{return!!localStorage.getItem(b)}catch{return!1}},reset:function(){try{localStorage.removeItem(b)}catch{}}};let m=new Set(["live","dashboard"]);function R(){if(A||window.AdminOnboarding.isDone()||!m.has(L()))return;let i=()=>!!document.querySelector(".admin-session-banner-live");i()||setTimeout(()=>{A||window.AdminOnboarding.isDone()||i()||m.has(L())&&E()},1200)}function L(){let i=document.querySelector(".admin-dash-grid");return i&&i.dataset.activeRoute||"live"}function $(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&E()}function E(){A||(A=!0,S=0,K())}function P(i){if(!A)return;A=!1,document.body.removeEventListener("click",T),document.removeEventListener("keydown",C),window.removeEventListener("resize",F);let a=document.getElementById(y);if(a&&a.remove(),i)try{localStorage.setItem(b,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function N(){S<z.length-1?(S++,F()):P(!0)}function T(i){let a=i.target.closest("[data-ob-action]");a&&(i.stopPropagation(),a.dataset.obAction==="next"?N():a.dataset.obAction==="skip"&&P(!1))}function C(i){A&&i.key==="Escape"&&(i.preventDefault(),P(!1))}function K(){let i=document.getElementById(y);i&&i.remove();let a=document.createElement("div");a.id=y,a.className="admin-ob-root",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","false"),a.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(a),document.body.addEventListener("click",T),document.addEventListener("keydown",C),window.addEventListener("resize",F),F()}function F(){let i=document.getElementById(y);if(!i)return;let a=z[S],o=z.length,s=f(a.target),l=window.innerWidth,r=window.innerHeight,t="";s?t='<div class="admin-ob-spot" style="left:'+(s.left-8)+"px;top:"+(s.top-8)+"px;width:"+(s.width+16)+"px;height:"+(s.height+16)+'px;"></div>':t='<div class="admin-ob-scrim"></div>';let d=(l-360)/2,p=r/2-110,e="none";if(s){let k=s.left+s.width/2;a.side==="top"?(d=k-360/2,p=s.top-16,e="bottom"):a.side==="right"?(d=s.right+16+8,p=s.top,e="left"):(d=k-360/2,p=s.bottom+16+8,e="top"),d=Math.max(16,Math.min(l-360-16,d))}let n=z.map(function(k,w){return'<span class="admin-ob-progress-item'+(w===S?" is-current":"")+'">'+(w+1)+" "+c(ServerI18n.t(k.labelKey))+"</span>"+(w<o-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");i.innerHTML=t+'<div class="admin-ob-bubble" data-arrow="'+e+'" style="left:'+d+"px;top:"+p+'px"><div class="admin-ob-count">'+(S+1)+" / "+o+'</div><div class="admin-ob-title">'+c(ServerI18n.t(a.titleKey))+'</div><div class="admin-ob-body">'+c(ServerI18n.t(a.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+c(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+c(ServerI18n.t(S===o-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+n+"</div></div>";let u=i.querySelector(".admin-ob-bubble");if(!u||!s)return;let v=u.offsetHeight;if(a.side==="top")u.style.top=Math.max(16,s.top-16-8-v)+"px";else if(p+v>r-16){let k=s.top-16-8-v;k>=16?(u.style.top=k+"px",u.setAttribute("data-arrow","bottom")):(u.style.top=Math.max(16,r-v-16)+"px",u.setAttribute("data-arrow","none"))}O(u,s)}function O(i,a){let o=i.getAttribute("data-arrow");if(o==="none")return;let s=i.getBoundingClientRect(),l=o==="top"||o==="bottom",r=l?a.left+a.width/2-s.left:a.top+a.height/2-s.top,t=l?s.width:s.height,d=Math.max(16,Math.min(t-32,r-8));i.style.setProperty("--ob-arrow",d+"px")}function f(i){if(!i)return null;let a=document.querySelector(i);if(!a)return null;let o=a.getBoundingClientRect();return o.width<8||o.height<8||o.bottom<0||o.top>window.innerHeight?null:o}function c(i){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(i):i==null?"":String(i).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",$),$(),window.addEventListener("hashchange",function(){m.has(L())&&setTimeout(R,600)}),setTimeout(R,800))})})()});var tn=me(()=>{var Cs=pe(Ne()),As=pe(Pe()),Bs=pe(Oe()),Fs=pe(Re()),Ds=pe(qe()),Ms=pe(He()),Ns=pe(je()),Ps=pe(Ue()),Os=pe(Ke()),Rs=pe(We()),qs=pe(Ge()),Hs=pe(ze()),js=pe(Ve()),Us=pe(Je()),Ks=pe(Ye()),Ws=pe(Qe()),Gs=pe(Xe()),zs=pe(Ze()),Vs=pe(et()),Js=pe(tt()),Ys=pe(nt()),Qs=pe(at()),Xs=pe(st()),Zs=pe(it()),ei=pe(ot()),ti=pe(rt()),ni=pe(dt()),ai=pe(lt()),si=pe(ct()),ii=pe(ut()),oi=pe(mt()),ri=pe(pt()),di=pe(vt()),li=pe(ft()),ci=pe(ht()),ui=pe(gt()),mi=pe(bt()),pi=pe(yt()),vi=pe(wt()),fi=pe(St()),hi=pe(It()),gi=pe(kt()),bi=pe(Tt()),yi=pe(_t()),wi=pe(Et()),Si=pe($t()),Ii=pe(xt()),ki=pe(Lt()),Ti=pe(Ct()),_i=pe(At()),Ei=pe(Bt()),$i=pe(Ft()),xi=pe(Dt()),Li=pe(Mt()),Ci=pe(Nt()),Ai=pe(Pt()),Bi=pe(Ot()),Fi=pe(Rt()),Di=pe(qt()),Mi=pe(Ht()),Ni=pe(jt()),Pi=pe(Ut()),Oi=pe(Kt()),Ri=pe(Wt()),qi=pe(Gt()),Hi=pe(zt()),ji=pe(Vt())});tn();})();
