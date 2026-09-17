/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var jt=Object.create;var Le=Object.defineProperty;var Ut=Object.getOwnPropertyDescriptor;var Kt=Object.getOwnPropertyNames;var Wt=Object.getPrototypeOf,Gt=Object.prototype.hasOwnProperty;var me=(b,w)=>()=>{try{return w||b((w={exports:{}}).exports,w),w.exports}catch(g){throw w=0,g}};var zt=(b,w,g,f)=>{if(w&&typeof w=="object"||typeof w=="function")for(let _ of Kt(w))!Gt.call(b,_)&&_!==g&&Le(b,_,{get:()=>w[_],enumerable:!(f=Ut(w,_))||f.enumerable});return b};var pe=(b,w,g)=>(g=b!=null?jt(Wt(b)):{},zt(w||!b||!b.__esModule?Le(g,"default",{value:b,enumerable:!0}):g,b));var Ce=me(()=>{(function(){"use strict";function b(w,g=!0){let f=document.getElementById("toast-container");if(!f)return;let _=document.createElement("div");_.className="flex items-center w-full max-w-xs p-4 mb-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 transform transition-all opacity-0 translate-x-full",_.setAttribute("role","alert");let z=getComputedStyle(document.documentElement),y=z.getPropertyValue("--motion-normal").trim()||"180ms",A=z.getPropertyValue("--ease-spring").trim()||"cubic-bezier(0.34, 1.56, 0.64, 1)";_.style.transition=`transform ${y} ${A}, opacity ${y} ease-out`;let m=g?'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>':'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',$=g?"text-green-500":"text-red-500";_.innerHTML=`
      <div class="${$}">${m}</div>
      <div class="pl-4 text-sm font-normal"></div>
    `;let x=_.querySelector(".pl-4.text-sm.font-normal");x.textContent=w,f.appendChild(_),requestAnimationFrame(()=>{_.classList.remove("opacity-0","translate-x-full")}),setTimeout(()=>{_.classList.add("opacity-0","translate-x-full"),_.addEventListener("transitionend",()=>{_.remove()})},3e3)}window.showToast=b})()});var Ae=me(()=>{(function(){"use strict";var b="admin-details-open-state";function w(){try{return JSON.parse(localStorage.getItem(b))||{}}catch{return{}}}function g(q){try{localStorage.setItem(b,JSON.stringify(q))}catch{}}var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function _(q){return q==null?"":String(q).replace(/[&<>"']/g,function(O){return f[O]})}function z(){var q=document.querySelector("script[nonce]");return q&&q.nonce||""}function y(q,O){var I=z();return"<style"+(q?' id="'+_(q)+'"':"")+(I?' nonce="'+_(I)+'"':"")+">"+(O||"")+"</style>"}var A='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',m=[],$=null;function x(q){if(!q)return!1;for(var O=q;O&&O!==document.documentElement;O=O.parentElement)if(O.style&&O.style.display==="none")return!1;return!!(q.offsetParent||q.getClientRects().length)}function D(){var q=document.hidden;m.forEach(function(O){var I=typeof O.el=="function"?O.el():O.el,C=!q&&x(I);if(C&&!O.timer){if(O.immediate!==!1)try{O.tick()}catch{}O.timer=setInterval(O.tick,O.intervalMs)}else!C&&O.timer&&(clearInterval(O.timer),O.timer=0)})}function L(q){var O={el:q.el,intervalMs:q.intervalMs,tick:q.tick,immediate:q.immediate,timer:0};return m.push(O),$||($=new MutationObserver(function(){D()}),$.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden"]}),window.addEventListener("hashchange",D),document.addEventListener("visibilitychange",D),document.addEventListener("admin-panel-rendered",D)),D(),function(){O.timer&&clearInterval(O.timer);var C=m.indexOf(O);C!==-1&&m.splice(C,1)}}window.AdminUtils={DETAILS_STATE_KEY:b,loadDetailsState:w,saveDetailsState:g,escapeHtml:_,cspNonce:z,styleTag:y,closeIcon:A,pollWhileVisible:L}})()});var Be=me(()=>{(function(b){"use strict";let w={moderation:{defaultTab:"queue",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",sections:["sec-blacklist","sec-filters"]},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},integrations:{defaultTab:"webhooks",tabs:[{slug:"webhooks",labelKey:"tabExtWebhooks",en:"WEBHOOKS",section:"sec-webhooks"},{slug:"plugins",labelKey:"tabExtPlugins",en:"PLUGINS",sections:["sec-plugins","sec-extensions-overview"]},{slug:"api-tokens",labelKey:"tabExtApiKeys",en:"API KEYS",section:"sec-api-tokens-overview"},{slug:"scheduler",labelKey:"tabExtScheduler",en:"SCHEDULER",section:"sec-scheduler"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function g(D){return Array.isArray(D.sections)?D.sections:D.section?[D.section]:[]}function f(D){return!!w[D]}function _(D){return w[D]||null}let z={moderation:{filters:"blacklist",fingerprints:"bans"}};function y(D,L){let q=w[D];if(!q)return null;let O=K=>q.tabs.some(F=>F.slug===K),I=z[D]?.[L];if(I&&O(I))return I;if(L&&O(L))return L;let C=b.AdminRouter?.tabMemory?.get?.(D);return C&&O(C)?C:q.defaultTab}function A(D,L,q){let O=w[D];if(!O)return null;let I=document.createElement("div");return I.className="admin-tabs-strip",I.dataset.nav=D,I.setAttribute("role","tablist"),I.setAttribute("aria-label",D+" tabs"),O.tabs.forEach(C=>{let K=document.createElement("button");K.type="button",K.className="admin-tabs-btn"+(C.slug===L?" is-active":""),K.dataset.nav=D,K.dataset.tab=C.slug,K.setAttribute("role","tab"),K.setAttribute("aria-selected",C.slug===L?"true":"false");let F=document.createElement("span");F.className="admin-tabs-btn-label",F.textContent=C.labelKey?ServerI18n.t(C.labelKey):C.label,K.appendChild(F);let P=document.createElement("span");P.className="admin-tabs-btn-count",P.dataset.tabCount=C.slug,P.textContent=m[D]&&m[D][C.slug]?m[D][C.slug]:"",K.appendChild(P),K.addEventListener("click",()=>{typeof q?.onSelect=="function"&&q.onSelect(C.slug)}),I.appendChild(K)}),I}let m={};function $(D,L,q){if(!w[D])return;m[D]=m[D]||{},m[D][L]=q==null?"":String(q);let O=document.querySelector('.admin-tabs-strip[data-nav="'+D+'"] [data-tab-count="'+L+'"]');O&&(O.textContent=m[D][L])}function x(D,L,q){let O=w[D];!O||!q||O.tabs.forEach(I=>{let C=I.slug===L;g(I).forEach(K=>{let F=q.querySelector("#"+K);F&&(F.style.display=C?"":"none")})})}b.AdminTabs={hasTabsFor:f,getConfig:_,resolveActiveTab:y,renderTabStrip:A,applyTabSectionVisibility:x,setTabCount:$}})(window)});var Fe=me(()=>{(function(b,w){"use strict";let g="data-quick-action-host",f="admin-quick-action-bar";function _($){if($?.host instanceof HTMLElement)return $.host;let x=w.querySelector(".admin-dash-main");if(!x)return w.body;let D=x.querySelector(`[${g}]`);if(!D){D=w.createElement("div"),D.setAttribute(g,"");let L=x.querySelector(".admin-dash-topbar"),O=x.querySelector("[data-admin-tabs-host]")||L;O&&O.parentNode?O.insertAdjacentElement("afterend",D):x.prepend(D)}return D}function z($,x){typeof b.showToast=="function"&&b.showToast($,x!==!1)}function y({label:$,undoLabel:x,onUndo:D,windowMs:L}){let q=_(),O=q.querySelector("."+f);O&&O.remove();let I=w.createElement("div");I.className=f,I.setAttribute("role","status"),I.setAttribute("aria-live","polite");let C=w.createElement("span");C.className=f+"-text",C.textContent="\u2713 "+$,I.appendChild(C);let K=w.createElement("button");K.type="button",K.className=f+"-undo",K.textContent="\u21B6 "+(x||ServerI18n.t("qaUndoLabel")),I.appendChild(K);let F=()=>{I.classList.add("is-leaving"),setTimeout(()=>I.remove(),200)},P=setTimeout(F,L||5e3);return K.addEventListener("click",async()=>{clearTimeout(P),K.disabled=!0,K.textContent=ServerI18n.t("qaUndoing");try{await D(),z(ServerI18n.t("qaUndone"),!0)}catch(p){z(ServerI18n.t("qaUndoFailed",{msg:p?.message||String(p)}),!1)}finally{F()}}),q.appendChild(I),requestAnimationFrame(()=>I.classList.add("is-entering")),I}function A($){if(!$||typeof $!="object")return;let x=$.label||ServerI18n.t("qaDone");$.toast!==!1&&z(x,!0),$.undo&&typeof $.undo.run=="function"&&y({label:x,undoLabel:$.undo.label,onUndo:$.undo.run,windowMs:$.undo.window})}function m(){w.querySelectorAll("."+f).forEach($=>$.remove())}b.AdminQuickAction={fire:A,dismissAll:m}})(window,document)});var De=me(()=>{(function(){"use strict";let b="admin-hud-modal-root",w=null,g=null,f='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function _(){let m=document.getElementById(b);return m?Array.prototype.slice.call(m.querySelectorAll(f)).filter($=>$.offsetParent!==null||$===document.activeElement):[]}function z(m){let $=document.getElementById(b);if($&&$.remove(),w&&(w(m),w=null),document.removeEventListener("keydown",y),g&&typeof g.focus=="function")try{g.focus()}catch{}g=null}function y(m){if(m.key==="Escape"){m.preventDefault(),z(!1);return}if(m.key==="Enter"){m.preventDefault(),z(!0);return}if(m.key==="Tab"){let $=_();if(!$.length){m.preventDefault();return}let x=$[0],D=$[$.length-1],L=document.activeElement;m.shiftKey?(L===x||!$.includes(L))&&(m.preventDefault(),D.focus()):(L===D||!$.includes(L))&&(m.preventDefault(),x.focus())}}function A(m){return new Promise($=>{w&&z(!1),w=$,g=document.activeElement;let{icon:x="\u26A0",title:D=ServerI18n.t("hudConfirmTitle"),subtitle:L="",severity:q="warn",body:O="",titleText:I,bodyText:C,confirmLabel:K=ServerI18n.t("hudConfirmLabel"),cancelLabel:F=ServerI18n.t("cancel"),width:P=480}=m||{},p=document.createElement("div");p.id=b,p.className=`admin-hud-modal admin-hud-modal--${q}`,p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","admin-hud-modal-title");let c=L?`<div class="admin-hud-modal__subtitle">${L}</div>`:"",o=typeof O=="string"?O:"",e=typeof O!="string"&&O&&O.nodeType;if(p.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${P}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${x}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${D}</div>
              ${c}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${o}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${F}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${K}</button>
          </div>
        </div>`,I!=null){let a=p.querySelector(".admin-hud-modal__title");a&&(a.textContent=String(I))}if(C!=null){let a=p.querySelector("[data-modal-body]");a&&(a.textContent=String(C))}if(e){let a=p.querySelector("[data-modal-body]");a.innerHTML="",a.appendChild(O)}p.addEventListener("click",function(a){let t=a.target.closest("[data-modal-action]");t&&(a.stopPropagation(),z(t.dataset.modalAction==="confirm"))}),document.body.appendChild(p),document.addEventListener("keydown",y),requestAnimationFrame(()=>{p.querySelector(".admin-hud-modal__btn--confirm")?.focus()})})}window.HudConfirm={open:A}})()});var Me=me(()=>{(function(){"use strict";function w(A){let m=document.createElement("div");return m.className="admin-skel-slow",m.hidden=!0,m.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",A.appendChild(m),setTimeout(function(){m.isConnected&&(m.hidden=!1)},3e3),A}function g(A,m){let $=document.createElement("div");if($.className="admin-skel "+(A||""),m)for(let x in m)$.style[x]=m[x];return $}function f({rows:A=8}={}){let m=document.createElement("div");m.className="admin-skel-card admin-skel-list";let $=document.createElement("div");$.className="admin-skel-list__head",[60,80,140,200,80].forEach(x=>{$.appendChild(g("admin-skel-bar",{width:x+"px",height:"10px"}))}),m.appendChild($);for(let x=0;x<A;x++){let D=document.createElement("div");D.className="admin-skel-list__row",D.appendChild(g("admin-skel-circle",{width:"24px",height:"24px"}));let L=document.createElement("div");L.className="admin-skel-list__col",L.appendChild(g("admin-skel-bar",{width:50+x*13%40+"%",height:"10px"})),L.appendChild(g("admin-skel-bar",{width:30+x*7%30+"%",height:"8px"})),D.appendChild(L),D.appendChild(g("admin-skel-bar",{width:"60px",height:"10px"})),m.appendChild(D)}return w(m)}function _({cols:A=4}={}){let m=document.createElement("div");m.className="admin-skel-stats",m.style.gridTemplateColumns=`repeat(${A}, 1fr)`;for(let $=0;$<A;$++){let x=document.createElement("div");x.className="admin-skel-card admin-skel-tile",x.appendChild(g("admin-skel-bar",{width:"60px",height:"8px"})),x.appendChild(g("admin-skel-bar",{width:"80px",height:"28px"})),x.appendChild(g("admin-skel-bar",{width:"100%",height:"18px"})),x.appendChild(g("admin-skel-bar",{width:"90px",height:"8px"})),m.appendChild(x)}return w(m)}function z(){let A=document.createElement("div");A.className="admin-skel-card admin-skel-chart";let m=document.createElement("div");m.className="admin-skel-chart__head",m.appendChild(g("admin-skel-bar",{width:"120px",height:"10px"}));let $=document.createElement("span");$.style.flex="1",m.appendChild($),m.appendChild(g("admin-skel-bar",{width:"80px",height:"10px"})),A.appendChild(m);let x=document.createElement("div");x.className="admin-skel-chart__body";let D=document.createElement("div");D.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>D.appendChild(g("admin-skel-bar",{width:"24px",height:"6px"}))),x.appendChild(D);let L=document.createElement("div");return L.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(O=>L.appendChild(g("admin-skel-bar admin-skel-chart__bar",{height:O+"%"}))),x.appendChild(L),A.appendChild(x),w(A)}function y(A,m){let $={listRows:f,statsTiles:_,chart:z}[A];return $?$(m||{}).outerHTML:""}window.AdminSkeletons={listRows:f,statsTiles:_,chart:z,html:y}})()});var Ne=me(()=>{(function(){"use strict";let b={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},w={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:b.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:b.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:b.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:b.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:b.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:b.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:b.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:b.cyan}};function g(_){let{icon:z="\xB7",title:y="",desc:A="",accent:m=b.cyan,ctaAccent:$,actionLabel:x,action:D,extra:L}=_||{},q=document.createElement("div");q.className="admin-empty",q.dataset.empty="1",q.style.setProperty("--admin-empty-accent",m),$&&q.style.setProperty("--admin-empty-cta",$);let O=document.createElement("div");if(O.className="admin-empty__icon",O.textContent=z,q.appendChild(O),y){let I=document.createElement("div");I.className="admin-empty__title",I.textContent=y,q.appendChild(I)}if(A){let I=document.createElement("div");I.className="admin-empty__desc",I.textContent=A,q.appendChild(I)}if(x){let I=document.createElement("button");I.type="button",I.className="admin-empty__btn",I.textContent=x,typeof D=="function"&&I.addEventListener("click",D),q.appendChild(I)}if(L){let I=document.createElement("div");I.className="admin-empty__extra",typeof L=="string"?I.innerHTML=L:I.appendChild(L),q.appendChild(I)}return q}function f(_){let z=w[_];if(!z)return g({title:ServerI18n.t("emptyNoData"),desc:""});let y=Object.assign({},z,{title:z.titleKey?ServerI18n.t(z.titleKey):z.title,desc:z.descKey?ServerI18n.t(z.descKey):z.desc,actionLabel:z.actionLabelKey?ServerI18n.t(z.actionLabelKey):z.actionLabel});return g(y)}window.AdminEmpty={render:f,renderCustom:g,PRESETS:w}})()});var Pe=me(()=>{(function(){"use strict";var b=8;function w(y){return y?String(y).slice(0,b):""}function g(y){if(!y||typeof y!="object")return{nickname:"",fp:"",ip:""};var A=y.fingerprint||y.fp||y.hash||"",m=y.clientIp||y.client_ip||y.ip||"",$=y.nickname||y.nick||"";return{nickname:String($||""),fp:String(A||""),ip:String(m||"")}}function f(y){if(!y||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var A=new TextEncoder().encode(String(y));return window.crypto.subtle.digest("SHA-256",A).then(function(m){var $=Array.from(new Uint8Array(m));return $.map(function(x){return x.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function _(y){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var A=document.getElementById("sec-fingerprints");if(A&&!A.open&&(A.open=!0),A)try{A.scrollIntoView({behavior:"smooth",block:"start"})}catch{}f(y).then(function(m){if(m)var $=0,x=setInterval(function(){$+=1;var D=document.querySelector('[data-fp-hash="'+m+'"]');if(D){clearInterval(x),D.classList.add("admin-identity-flash"),setTimeout(function(){D.classList.remove("admin-identity-flash")},2e3);try{D.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else $>12&&clearInterval(x)},250)})}function z(y){y=y||{};var A=y.nickname||"",m=y.fp||"",$=y.ip||"",x=!!y.compact,D=typeof y.onNicknameClick=="function"?y.onNicknameClick:null,L=typeof y.onFpClick=="function"?y.onFpClick:_,q=document.createElement("span");q.className="admin-identity-row";var O;if(D?(O=document.createElement("button"),O.type="button",O.className="admin-identity-nick is-clickable",O.addEventListener("click",function(p){p.stopPropagation(),D(A)})):(O=document.createElement("span"),O.className="admin-identity-nick"),A)O.textContent="@"+A;else{var I="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var C=ServerI18n.t("anonymousPlaceholder");C&&C!=="anonymousPlaceholder"&&(I=C)}}catch{}O.textContent="@"+I,O.classList.add("is-guest")}if(A&&(O.title=A),q.appendChild(O),m){var K;if(L?(K=document.createElement("button"),K.type="button",K.className="admin-identity-fp is-clickable",K.addEventListener("click",function(p){p.stopPropagation(),L(m)})):(K=document.createElement("span"),K.className="admin-identity-fp"),m==="new"){var F=document.createElement("span");F.className="admin-identity-dot",K.appendChild(F),K.appendChild(document.createTextNode("fp:new"))}else K.textContent="fp:"+w(m);K.title=m,q.appendChild(K)}if($&&!x){var P=document.createElement("span");P.className="admin-identity-ip",P.textContent=$,P.title=$,q.appendChild(P)}return q}window.AdminIdentity={render:z,parse:g,focusFingerprint:_,hashFp:f,FP_DISPLAY_LEN:b}})()});var Oe=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;function w(a,t){return window.csrfFetch(a,t)}function g(a,t){return window.showToast(a,t)}let f="default",_=[],z={};function y(){let a=document.getElementById("themesList");a&&window.AdminSkeletons&&(a.innerHTML="",a.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function A(){y();try{let a=await w("/admin/themes");if(!a.ok)return;let t=await a.json();f=t.active||"default",_=t.themes||[],z=t.overrides||{},q(_,f),C()}catch(a){console.warn("[Themes] Failed to fetch themes:",a)}}var m="\u5C0F\u660E",$="\u8B1B\u5F97\u597D\uFF01+1";function x(a,t){var s=String(a||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(s)?s:t}function D(a){var t=a.styles||{},s=["color:"+x(t.color,"#ffffff")];if(t.textStroke){var r=Math.max(0,Math.min(6,Number(t.strokeWidth)||0));s.push("-webkit-text-stroke:"+r+"px "+x(t.strokeColor,"#000000")),s.push("paint-order:stroke fill")}if(t.textShadow){var n=Math.max(0,Math.min(40,Number(t.shadowBlur)||0));s.push("text-shadow:0 0 "+n+"px "+x(t.color,"#ffffff"))}var d=a.font&&a.font.family;return d&&/^[\w\s-]{1,40}$/.test(d)&&s.push("font-family:'"+d+"', var(--font-sans)"),a.font&&Number(a.font.weight)&&s.push("font-weight:"+Math.max(100,Math.min(900,Number(a.font.weight)))),s.join(";")}function L(a){var t=a.bg&&a.bg.gradient;return t&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(t).trim())?"background:"+String(t).trim():""}function q(a,t){let s=document.getElementById("themesList");if(s){if(s.innerHTML="",a.length===0){s.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}a.forEach(r=>{let n=r.name===t,d=b(ServerI18n.t("theme_"+r.name)!=="theme_"+r.name?ServerI18n.t("theme_"+r.name):r.label||r.name),l=document.createElement("div");l.className=`theme-pack-card${n?" is-active":""}`,l.innerHTML=`
        <div class="theme-pack-name">${d}</div>
        <div class="theme-pack-sample" style="${b(L(r))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${b(D(r))}">
            <span class="theme-pack-sample-nick">${b(m)}</span>
            ${b($)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${r.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${b(r.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${n?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${b(r.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,s.appendChild(l)}),s.querySelectorAll(".theme-delete-btn").forEach(r=>{r.addEventListener("click",async()=>{let n=r.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let l=await w("/admin/themes/"+encodeURIComponent(n),{method:"DELETE"});if(!l.ok)throw new Error("HTTP "+l.status);g(ServerI18n.t("themeDeleted"),!0),A()}catch{g(ServerI18n.t("themesDeleteFailed"),!1)}})}),s.querySelectorAll(".theme-activate-btn").forEach(r=>{r.addEventListener("click",async()=>{let n=r.dataset.theme;try{let d=await w("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n})});if(d.ok)g(ServerI18n.t("themeActivated"),!0),f=n,q(a,n),C();else{let l=await d.json().catch(()=>({}));g(l.error||ServerI18n.t("setThemeFailed"),!1)}}catch{g(ServerI18n.t("setThemeFailed"),!1)}})})}}function O(){return _.find(a=>a.name===f)||null}function I(a,t){let s=z[f]||{};if(s[a])return s[a];let r=t&&t.styles||{};return a==="stroke"?r.textStroke?Number(r.strokeWidth)>=3?"thick":"thin":"none":r.textShadow?Number(r.shadowBlur)>=10?"strong":"soft":"none"}function C(){let a=document.getElementById("themeDetail"),t=document.getElementById("themeDetailLabel");if(!a||!t)return;let s=O();if(!s)return;let r=ServerI18n.t("theme_"+s.name)!=="theme_"+s.name?ServerI18n.t("theme_"+s.name):s.label||s.name;t.textContent=ServerI18n.t("themeDetailGroup",{name:r}),["stroke","shadow"].forEach(d=>{let l=I(d,s);a.querySelectorAll(`[data-theme-seg="${d}"] [data-theme-opt]`).forEach(u=>{let i=u.getAttribute("data-theme-opt")===l;u.classList.toggle("is-active",i),u.setAttribute("aria-pressed",i?"true":"false")})});let n=a.querySelector('[data-theme-ov="color"]');if(n){let d=x((s.styles||{}).color,"#ffffff");n.value=/^#[0-9a-fA-F]{6}$/.test(d)?d:"#ffffff"}F(s),P(s)}var K=null;async function F(a){let t=document.getElementById("themeOvFont");if(!t)return;if(!K)try{let n=await fetch("/fonts",{credentials:"same-origin"});K=n.ok?(await n.json()).fonts||[]:[]}catch{K=[]}let r=(z[f]||{}).font_family||"";t.innerHTML=`<option value="">${b(ServerI18n.t("themeDetailFontInherit"))}</option>`+K.map(n=>{let d=String(n.name||n);return`<option value="${b(d)}"${d===r?" selected":""}>${b(d)}</option>`}).join("")}function P(a){let t=document.querySelector("[data-theme-preview-line]");t&&t.setAttribute("style",D(a))}async function p(a){try{let t=await w("/admin/themes/"+encodeURIComponent(f)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!t.ok)throw new Error("HTTP "+t.status);g(ServerI18n.t("themeDetailSaved"),!0),await A()}catch{g(ServerI18n.t("themeDetailSaveFailed"),!1)}}function c(){let a=document.getElementById("themeDetail");a&&(a.addEventListener("click",t=>{let s=t.target.closest("[data-theme-opt]");if(!s)return;let r=s.closest("[data-theme-seg]");r&&p({[r.getAttribute("data-theme-seg")]:s.getAttribute("data-theme-opt")})}),a.addEventListener("change",t=>{let s=t.target.closest("[data-theme-ov]");s&&p({[s.getAttribute("data-theme-ov")]:s.value})}))}function o(){let a=document.getElementById("themeNewBtn");a&&a.addEventListener("click",async()=>{let t=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!t||!t.trim()))try{let s=await w("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:t.trim(),base:f})});if(!s.ok)throw new Error("HTTP "+s.status);g(ServerI18n.t("themeCreated"),!0),A()}catch{g(ServerI18n.t("themesNewFailed"),!1)}})}function e(){A(),c(),o();let a=document.getElementById("themeReloadBtn");a&&a.addEventListener("click",async()=>{try{(await w("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(g(ServerI18n.t("themesReloaded")),A()):g(ServerI18n.t("themesReloadFailed"),!1)}catch{g(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:e}})()});var Re=me(()=>{(function(){"use strict";function b(S,B){return window.csrfFetch(S,B)}function w(S,B){return window.showToast(S,B)}var g=window.ServerI18n;function f(S,B){return window.AdminUtils.styleTag(S,B)}let _=null;function z(){let S=document.getElementById("effectEditModal");return S?Array.from(S.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(B=>!B.hasAttribute("disabled")&&B.getAttribute("aria-hidden")!=="true"):[]}function y(S){let B=document.getElementById("effectEditModal");if(!B||B.classList.contains("hidden"))return;if(S.key==="Escape"){S.preventDefault(),A();return}if(S.key!=="Tab")return;let H=z();if(H.length===0){S.preventDefault();return}let M=H[0],E=H[H.length-1],j=document.activeElement;S.shiftKey&&j===M?(S.preventDefault(),E.focus()):!S.shiftKey&&j===E&&(S.preventDefault(),M.focus())}function A(){let S=document.getElementById("effectEditModal");S&&(S.classList.add("hidden"),S.classList.remove("flex"),S.removeEventListener("keydown",y),_&&(_.focus(),_=null))}let m={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(S){return!!m[S]}};let $=new Map,x=new Map;function D(S){if(!S||!S.styleId||!S.keyframes)return;let B="dme-user-"+S.styleId;if(document.getElementById(B))return;let H=document.createElement("style");H.id=B,H.textContent=S.keyframes,document.head.appendChild(H)}async function L(S){if($.has(S))return $.get(S);if(x.has(S))return x.get(S);let B=(async()=>{try{let H=await b(`/admin/effects/${encodeURIComponent(S)}/content`);if(!H.ok)throw new Error("content fetch failed");let M=await H.json(),E=M&&M.content||"";if(!E)throw new Error("empty content");let j=await b("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:E,params:{}})});if(!j.ok)throw new Error("preview failed");let U=await j.json();if(!U||!U.animation)throw new Error("no animation");return D(U),$.set(S,U),U}catch{return $.set(S,"failed"),null}finally{x.delete(S)}})();return x.set(S,B),B}function q(S,B){let H=S.querySelector(".effect-demo-text");if(!H)return;H.style.animation=B.animation||"",B.animationComposition&&(H.style.animationComposition=B.animationComposition),H.style.animationPlayState="paused";let M=I();M&&M.observe(S)}let O=null;function I(){return O||(typeof IntersectionObserver>"u"?null:(O=new IntersectionObserver(S=>{S.forEach(B=>{let H=B.target.querySelector(".effect-demo-text");H&&(H.style.animationPlayState=B.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),O))}let C=null;function K(S){let B=document.getElementById("effectPreviewParams");if(!B)return{};let H;try{let E=S.split(`
`),j=!1,U=0,Y=null,N=0,R={};for(let V of E){let ne=V.trimStart(),W=V.length-ne.length;if(ne.startsWith("params:")){j=!0,U=W;continue}if(!j||ne===""||ne.startsWith("#"))continue;if(W<=U&&!ne.startsWith("params:")){j=!1;continue}let Z=ne.match(/^([a-zA-Z0-9_]+):\s*$/);if(Z&&W===U+2){Y=Z[1],N=W,R[Y]={};continue}if(Y&&W>N){let te=ne.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(te){let oe=te[1],Q=te[2].trim();if((Q.startsWith('"')&&Q.endsWith('"')||Q.startsWith("'")&&Q.endsWith("'"))&&(Q=Q.slice(1,-1)),oe!=="options"){let se=Number(Q);R[Y][oe]=isNaN(se)?Q:se}}if(ne.startsWith("- value:")){R[Y].options||(R[Y].options=[]);let oe=ne.match(/^- value:\s*(.+)$/);if(oe){let Q=oe[1].trim();(Q.startsWith('"')&&Q.endsWith('"')||Q.startsWith("'")&&Q.endsWith("'"))&&(Q=Q.slice(1,-1)),R[Y].options.push({value:Q,label:Q})}}if(ne.startsWith("label:")&&R[Y].options&&R[Y].options.length>0){let oe=ne.match(/^label:\s*(.+)$/);if(oe){let Q=oe[1].trim();(Q.startsWith('"')&&Q.endsWith('"')||Q.startsWith("'")&&Q.endsWith("'"))&&(Q=Q.slice(1,-1)),R[Y].options[R[Y].options.length-1].label=Q}}}}H=R}catch{H={}}B.innerHTML="";let M={};for(let[E,j]of Object.entries(H||{})){let U=j.type||"float",Y=document.createElement("div");Y.className="flex flex-col gap-0.5";let N=document.createElement("label");if(N.className="font-mono",N.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",N.textContent=`${E} (${U})`,Y.appendChild(N),U==="select"&&Array.isArray(j.options)){let R=document.createElement("select");R.className="admin-ui-select",R.style.cssText="font-size:13px;padding:4px 8px",R.dataset.paramKey=E;for(let V of j.options){let ne=document.createElement("option");ne.value=V.value,ne.textContent=V.label||V.value,V.value===String(j.default)&&(ne.selected=!0),R.appendChild(ne)}M[E]=String(j.default||j.options[0]&&j.options[0].value||""),R.addEventListener("change",()=>{p()}),Y.appendChild(R)}else{let R=j.min!=null?j.min:0,V=j.max!=null?j.max:10,ne=j.step!=null?j.step:U==="int"?1:.1,W=j.default!=null?j.default:R,Z=document.createElement("div");Z.className="flex items-center gap-2";let te=document.createElement("input");te.type="range",te.min=R,te.max=V,te.step=ne,te.value=W,te.dataset.paramKey=E,te.className="flex-1",te.style.accentColor="var(--color-primary)";let oe=document.createElement("span");oe.className="font-mono",oe.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",oe.textContent=String(W),te.addEventListener("input",()=>{oe.textContent=te.value,p()}),Z.appendChild(te),Z.appendChild(oe),Y.appendChild(Z),M[E]=W}B.appendChild(Y)}return M}function F(){let S=document.getElementById("effectPreviewParams");if(!S)return{};let B={};return S.querySelectorAll("[data-param-key]").forEach(H=>{B[H.dataset.paramKey]=H.type==="range"?Number(H.value):H.value}),B}async function P(){let S=document.getElementById("effectEditModalTextarea"),B=document.getElementById("effectPreviewText"),H=document.getElementById("effectPreviewStyle"),M=document.getElementById("effectPreviewError");if(!S||!B||!H)return;let E=S.value;if(!E||E===g.t("effectLoadContent")||E===g.t("effectsNetworkError"))return;let j=F();M?.classList.add("hidden");try{let U=await b("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:E,params:j})}),Y=await U.json().catch(()=>({}));U.ok?(H.textContent=Y.keyframes||"",B.style.animation=Y.animation||"none",B.style.animationComposition=Y.animationComposition||""):(B.style.animation="none",H.textContent="",M&&(M.textContent=Y.error||g.t("previewFailed"),M.classList.remove("hidden")))}catch{B.style.animation="none",H.textContent="",M&&(M.textContent=g.t("effectsNetworkError"),M.classList.remove("hidden"))}}function p(){clearTimeout(C),C=setTimeout(()=>P(),500)}async function c(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
      `),document.getElementById("effectEditModalClose").addEventListener("click",A),document.getElementById("effectEditModalCancel").addEventListener("click",A),document.getElementById("effectEditModal").addEventListener("click",E=>{E.target===E.currentTarget&&A()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let E=document.getElementById("effectEditModalTextarea");E&&(K(E.value),p())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{P()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let E=document.getElementById("effectEditModal"),j=document.getElementById("effectEditModalTextarea"),U=document.getElementById("effectEditModalSave"),Y=E?.dataset.effectName;if(!(!Y||!j)){U.disabled=!0;try{let N=await b("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Y,content:j.value})}),R=await N.json().catch(()=>({}));N.ok?(w(R.message||g.t("effectSaveFallback"),!0),A(),await a()):w(R.error||g.t("saveFailed"),!1)}catch{w(g.t("effectsNetworkError"),!1)}finally{U.disabled=!1}}})),await a(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let E=document.getElementById("effectReloadBtn");E&&(E.disabled=!0);try{let j=await b("/admin/effects/reload",{method:"POST"}),U=await j.json().catch(()=>({}));j.ok?(w(U.message||g.t("effectsReloadFallback")),await a()):w(U.error||g.t("reloadFailed"),!1)}catch{w(g.t("effectsNetworkError"),!1)}finally{E&&(E.disabled=!1)}});async function S(E){if(!E)return;let j=new FormData;j.append("effectfile",E);try{let U=await b("/admin/effects/upload",{method:"POST",body:j}),Y=await U.json().catch(()=>({}));U.ok?(w(Y.message||g.t("effectUploadFallback")),await a()):w(Y.error||g.t("uploadFailed"),!1)}catch{w(g.t("effectsNetworkError"),!1)}}let B=document.getElementById("effectUploadInput"),H=B&&!B.dataset.uploadWired;H&&(B.dataset.uploadWired="1"),(H?B:null)?.addEventListener("change",async E=>{await S(E.target.files?.[0]),E.target.value=""});let M=document.getElementById("sec-effects-mgmt");if(M){let E=0,j=R=>{R.preventDefault(),E++,M.classList.add("is-drag")},U=R=>{R.preventDefault()},Y=R=>{R.preventDefault(),E=Math.max(0,E-1),E===0&&M.classList.remove("is-drag")},N=async R=>{R.preventDefault(),E=0,M.classList.remove("is-drag");let V=R.dataTransfer?.files?.[0];if(V){if(!/\.(dme|dme\.zip)$/i.test(V.name)){w(g.t("fxToastBadExt"),!1);return}await S(V)}};M.addEventListener("dragenter",j),M.addEventListener("dragover",U),M.addEventListener("dragleave",Y),M.addEventListener("drop",N)}}function o(S){let B=(S||"").toLowerCase();return B.startsWith("glow")||B.includes("neon")?"GLOW":B.startsWith("shake")?"SHAKE":B.startsWith("wave")||B.startsWith("spin")||B.startsWith("bounce")||B.startsWith("zoom")||B.startsWith("fire")||B.includes("motion")?"MOTION":B.startsWith("rainbow")||B.startsWith("blink")||B.includes("color")?"COLOR":B.startsWith("type")||B.includes("text")?"TEXT":"MISC"}let e={all:[],filter:"ALL",selected:null};async function a(){let S=document.getElementById("effectsList");if(S)try{let B=await b("/admin/effects");if(!B.ok){S.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsLoadFailed")+"</span>";return}let H=await B.json();e.all=H.effects||[],t(),r()}catch{S.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsNetworkError")+"</span>"}}function t(){let S=document.getElementById("effectsFilterRow");if(!S)return;let B={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};e.all.forEach(U=>{B[o(U.name)]+=1});let H=e.all.length,M=[["ALL",g.t("fxChipAll"),H],["GLOW",g.t("fxCatGlow"),B.GLOW],["MOTION",g.t("fxCatMotion"),B.MOTION],["COLOR",g.t("fxCatColor"),B.COLOR],["SHAKE",g.t("fxCatShake"),B.SHAKE],["TEXT",g.t("fxCatText"),B.TEXT]];B.MISC>0&&M.push(["MISC",g.t("fxCatMisc"),B.MISC]);let E=M.map(([U,Y,N])=>`<span class="hud-filter-chip ${e.filter===U?"is-active":""}" data-effect-filter="${U}">${Y} ${N}</span>`).join(""),j=S.querySelector("[data-toolbar-spacer]");j?(S.querySelectorAll("[data-effect-filter]").forEach(U=>U.remove()),j.insertAdjacentHTML("beforebegin",E)):S.innerHTML=E,S.querySelectorAll("[data-effect-filter]").forEach(U=>{U.addEventListener("click",()=>{e.filter=U.dataset.effectFilter,t(),r()})})}function s(S){let B=(U,Y)=>{let N=document.querySelector(U);N&&(N.textContent=Y==null?"\u2014":String(Y))},H=S.length,M=S.filter(U=>U.enabled!==!1).length,E=new Set(S.map(U=>o(U.name))),j=S.filter(U=>!m[U.name]).length;B("[data-eflib-total]",H),B("[data-eflib-active]",M),B("[data-eflib-cats]",E.size),B("[data-eflib-user]",j)}function r(){let S=document.getElementById("effectsList");if(!S)return;let B=e.all;s(B);let H=e.filter==="ALL"?B:B.filter(M=>o(M.name)===e.filter);if(!H.length){S.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(B.length?g.t("fxNoFilterMatch"):g.t("noEffectsLoaded"))+"</span>";return}O&&O.disconnect(),S.innerHTML="",H.forEach(M=>{let E=o(M.name),j=E==="GLOW"?"is-glow":E==="COLOR"?"is-color":E==="TEXT"?"is-text":"",U=m[M.name]||"",Y=!!U,N=document.createElement("div");N.className="hud-effect-card"+(e.selected===M.name?" is-selected":""),N.dataset.effectName=M.name,N.title=[M.description,`file: ${M.filename}`].filter(Boolean).join(`
`);var R="effect_"+M.name;let V=g.t(R)!==R?g.t(R):M.label||M.name,ne=Y?"built-in":"user",W=U?`animation:${U};animation-play-state:paused;`:"";if(N.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${n(g.t("fxCat"+E.charAt(0)+E.slice(1).toLowerCase())||E)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${j}"><span class="effect-demo-text" style="${W}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${n(V)}</div>
          <div class="hud-effect-card-meta">${n(ne)} \xB7 ${n(M.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${g.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${g.t("lbDelete")}</button>
        </div>
      `,S.appendChild(N),U){let oe=I();oe&&oe.observe(N)}else{let oe=$.get(M.name);oe&&oe!=="failed"?(D(oe),q(N,oe)):oe!=="failed"&&L(M.name).then(Q=>{if(!Q)return;let se=S.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(M.name)}"]`);se&&q(se,Q)})}N.addEventListener("click",oe=>{oe.target.closest("[data-role]")||h(M)});let Z=N.querySelector('[data-role="edit"]'),te=N.querySelector('[data-role="delete"]');Z.addEventListener("click",async()=>{let oe=document.getElementById("effectEditModal"),Q=document.getElementById("effectEditModalTitle"),se=document.getElementById("effectEditModalFile"),de=document.getElementById("effectEditModalTextarea"),ue=document.getElementById("effectEditModalSave");if(!oe)return;_=document.activeElement instanceof HTMLElement?document.activeElement:null,Q.textContent=M.label||M.name,se.textContent=M.filename,de.value=g.t("effectLoadContent"),de.disabled=!0,ue.disabled=!0,oe.dataset.effectName=M.name,oe.classList.remove("hidden"),oe.classList.add("flex"),oe.addEventListener("keydown",y),de.focus();let fe=document.getElementById("effectPreviewText"),ge=document.getElementById("effectPreviewStyle"),G=document.getElementById("effectPreviewError"),X=document.getElementById("effectPreviewParams");fe&&(fe.style.animation="none"),ge&&(ge.textContent=""),G&&G.classList.add("hidden"),X&&(X.innerHTML="");try{let ee=await b(`/admin/effects/${encodeURIComponent(M.name)}/content`),J=await ee.json().catch(()=>({}));ee.ok?(de.value=J.content||"",de.disabled=!1,ue.disabled=!1,de.focus(),K(de.value),P()):(de.value=J.error||g.t("effectLoadContentFailed"),w(J.error||g.t("effectLoadContentFailed"),!1))}catch{de.value=g.t("effectsNetworkError"),w(g.t("effectsNetworkError"),!1)}}),te.addEventListener("click",async()=>{let oe=M.label||M.name;if(await window.HudConfirm?.open({icon:"\u2297",title:g.t("fxDeleteTitle"),subtitle:g.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${g.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${oe}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${g.t("fxDeleteWarn")}
                </div>`,confirmLabel:g.t("fxDeleteConfirm"),cancelLabel:g.t("cancel"),width:400}))try{let se=await b("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:M.name})}),de=await se.json().catch(()=>({}));se.ok?(w(de.message||g.t("effectDeleteFallback"),!0),await a()):w(de.error||g.t("deleteFailed"),!1)}catch{w(g.t("effectsNetworkError"),!1)}})})}function n(S){return String(S??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function d(S){let B={name:"",label:"",description:"",params:[]};if(!S)return B;let H=S.split(`
`),M="top",E=null;for(let j of H){let U=j.replace(/\r$/,""),Y=U.trimStart();if(!Y||Y.startsWith("#"))continue;let N=U.length-Y.length;if(N===0){if(M="top",E&&(B.params.push(E),E=null),Y==="params:"){M="params";continue}let R=Y.match(/^([a-z_]+):\s*(.+)$/);R&&(R[1]==="name"?B.name=R[2].trim():R[1]==="label"?B.label=R[2].trim():R[1]==="description"&&(B.description=R[2].trim()));continue}if(!(M!=="params"&&M!=="param-fields"&&M!=="options")){if(N===2&&(M==="params"||M==="param-fields"||M==="options")){E&&(B.params.push(E),E=null);let R=Y.match(/^(\w+):$/);R&&(E={key:R[1]},M="param-fields");continue}if(N===4&&M==="param-fields"&&E){let R=Y.match(/^(\w+):\s*(.*)$/);if(R){let V=R[1],ne=R[2].trim();V==="label"?E.label=ne:V==="type"?E.type=ne:V==="default"?E.default=ne:V==="min"?E.min=parseFloat(ne):V==="max"?E.max=parseFloat(ne):V==="step"?E.step=parseFloat(ne):V==="options"&&(E.options=[],M="options")}continue}if(M==="options"&&E&&N>=6){let R=Y.match(/^-\s*value:\s*(.+)$/);R&&(E.options||(E.options=[]),E.options.push({value:R[1].trim(),label:R[1].trim()}));let V=Y.match(/^label:\s*(.+)$/);V&&E.options&&E.options.length>0&&(E.options[E.options.length-1].label=V[1].trim())}}}return E&&B.params.push(E),B}function l(S,B){let H=S.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),M=H?H[1]:"",E=S.match(/^animation:\s*["']?(.+?)["']?\s*$/m),j=E?E[1].trim():"";for(let U of B.params){let Y=U.default!==void 0?U.default:"",N=new RegExp(`\\{${U.key}\\}`,"g");M=M.replace(N,Y),j=j.replace(N,Y)}return{keyframes:M,animation:j}}function u(S,B){if(S==="COLOR"){let H=B.find(M=>M.key==="duration");if(H&&H.default){let M=parseFloat(H.default);if(M<.25)return"crimson";if(M<.33)return"amber"}}if(S==="MOTION"){let H=B.find(M=>M.key==="height");if(H&&H.default){let M=parseFloat(H.default);if(M>30)return"crimson";if(M>24)return"amber"}}return"lime"}function i(S,B){return S==="COLOR"?B==="crimson"?g.t("fxHintFlashBlock"):B==="amber"?g.t("fxHintFlashWarn"):g.t("fxHintFlashOk"):B==="crimson"?g.t("fxHintAmpBlock"):B==="amber"?g.t("fxHintAmpWarn"):g.t("fxHintAmpOk")}function v(S,B){let H=d(B),{keyframes:M,animation:E}=l(B,H),j=o(S.name),U=H.params.filter(de=>de.type!=="select"),Y=H.params.filter(de=>de.type==="select"),N=u(j,H.params),R=N==="crimson"?"BLOCK":N==="amber"?"WARN":"OK",V=i(j,N),ne="fx-anim-"+S.name.replace(/[^a-z0-9]/gi,"-"),W=M&&E?f(ne,M):"",Z=E?`animation:${E};animation-play-state:running;`:"",te=U.map(de=>{let ue=parseFloat(de.default)||0,fe=de.min??0,ge=de.max??100,G=Math.max(0,Math.min(100,(ue-fe)/(ge-fe)*100)),X=(de.label||"").match(/\(([^)]+)\)$/),ee=X?X[1]:"",J=de.label||de.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${n(J)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${ue}<span style="color:var(--color-text-muted);margin-left:2px">${n(ee)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${G}%"></div>
          <div class="fx-slider-knob" style="left:${G}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${fe}${n(ee)}</span><span>${ge}${n(ee)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${g.t("fxNoNumericParams")}</span>`,oe=Y.map(de=>{let ue=de.options||[],fe=String(de.default||""),ge=ue.map(G=>`<span class="fx-radio-btn${G.value===fe||G.label===fe?" is-active":""}">${n(G.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${n(de.label||de.key)}</div>
        <div class="fx-radio-group">${ge||"<span>\u2014</span>"}</div>
      </div>`}).join(""),Q=["dark","light","photo"].map(de=>{let ue=de==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${de}">
        <span class="fx-preview-bg-label">${de.toUpperCase()}</span>
        <span class="fx-preview-text" style="${Z}color:${ue}">ABC</span>
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
      <div class="fx-warn-box${N!=="lime"?" is-"+N:""}">
        <span class="fx-warn-chip${N!=="lime"?" is-"+N:""}">${R}</span>
        <span class="fx-warn-text">${n(V)}</span>
      </div>
    </div>`,se}async function h(S){e.selected=S.name;let B=document.getElementById("effectsInspector"),H=document.getElementById("effectsInspectorTitle"),M=document.getElementById("effectsInspectorKicker"),E=document.getElementById("effectsInspectorBody");if(B){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),H&&(H.textContent=S.label||S.name),M&&(M.textContent="LOADING"),E&&(E.className="hud-inspector-body",E.textContent="# "+g.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(j=>{j.classList.toggle("is-selected",j.dataset.effectName===S.name)});try{let j=await b(`/admin/effects/${encodeURIComponent(S.name)}/content`),U=await j.json().catch(()=>({}));if(j.ok){let Y=U.content||"";E&&(E.className="hud-inspector-body has-param-panel",E.innerHTML=v(S,Y)),M&&(M.textContent=o(S.name))}else E&&(E.className="hud-inspector-body",E.textContent="# "+(U.error||g.t("effectLoadContentFailed"))),M&&(M.textContent="ERROR")}catch{E&&(E.className="hud-inspector-body",E.textContent="# "+g.t("effectsNetworkError")),M&&(M.textContent="NETWORK")}}}function T(){let S=document.getElementById("effectsInspectorReload"),B=document.getElementById("effectsInspectorEdit");S?.addEventListener("click",async()=>{if(!e.selected){w(g.t("fxSelectFirst"),!1);return}let H=e.all.find(M=>M.name===e.selected);H&&await h(H)}),B?.addEventListener("click",()=>{if(!e.selected){w(g.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(e.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",T())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:c}})()});var qe=me(()=>{(function(){"use strict";var b={};window.DanmuEvents={on:function(w,g){b[w]||(b[w]=[]),b[w].push(g)},off:function(w,g){b[w]=(b[w]||[]).filter(function(f){return f!==g})},emit:function(w,g){(b[w]||[]).forEach(function(f){f(g)})}}})()});var He=me(()=>{(function(){"use strict";let b="sec-events",w="/admin/audit?limit=200",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(F){return String(F).replace(/[&<>"']/g,function(P){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[P]})},_={events:[],filterSev:"all",filterCat:"all",timer:0};function z(F){let P=(F.source||F.kind||"").toLowerCase(),p=(F.action||"").toLowerCase();return P.includes("plugin")||p.includes("plugin")?"plugin":P.includes("webhook")||p.includes("webhook")?"webhook":P.includes("rate")||p.includes("rate")||p.includes("limit")?"rate":P.includes("filter")||p.includes("filter")?"filter":P.includes("overlay")||p.includes("overlay")||P==="broadcast"?"overlay":P.includes("backup")||p.includes("backup")?"backup":P.includes("msg")||P==="messaging"?"msg":P.includes("ws")||P==="websocket"?"ws":"system"}let y=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,A=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function m(F){let P=(F.action||F.kind||"").toLowerCase();return F.severity?F.severity:y.test(P)?"error":A.test(P)?"warn":"info"}function $(F){let P=F.source||"system",p=F.action||F.kind||"";return p?`${P.toUpperCase()}_${p.toUpperCase()}`:P.toUpperCase()}function x(F){if(!F)return"\u2014";let P=new Date(F*1e3),p=c=>String(c).padStart(2,"0");return`${p(P.getHours())}:${p(P.getMinutes())}:${p(P.getSeconds())}`}function D(F){if(F.message)return F.message;let P=F.meta||{},p=[];if(P.from&&P.to)p.push(`${P.from} \u2192 ${P.to}`);else if(P.text_preview)p.push(`"${P.text_preview.slice(0,60)}"`);else if(Object.keys(P).length){let c=Object.keys(P).slice(0,3);for(let o of c)p.push(`${o}=${JSON.stringify(P[o]).slice(0,30)}`)}return p.length?p.join(" \xB7 "):`${F.source||"system"}.${F.action||F.kind||"?"}`}function L(){return`
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
      </div>`}function q(){let F=document.querySelector("[data-ev-rows]");if(!F)return;let P=_.events,p=P.filter(e=>!(_.filterSev!=="all"&&m(e)!==_.filterSev||_.filterCat!=="all"&&z(e)!==_.filterCat));p.length===0?(F.innerHTML="",window.AdminEmpty?F.appendChild(window.AdminEmpty.render("events")):F.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):F.innerHTML=p.map(e=>{let a=m(e);return`
          <div class="admin-ev-v4__row" data-sev="${a}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${f(x(e.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${a}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${a}">${f($(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${f(e.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${f(D(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let c={all:P.length,info:0,warn:0,error:0};for(let e of P)c[m(e)]+=1;Object.keys(c).forEach(e=>{let a=document.querySelector(`[data-ev-cnt="${e}"]`);a&&(a.textContent=String(c[e]))});let o=document.querySelector("[data-ev-total]");o&&(o.textContent=`${p.length} / ${P.length}`)}async function O(){try{let F=await fetch(w,{credentials:"same-origin"});if(!F.ok)return;let P=await F.json();_.events=Array.isArray(P.events)?P.events:[],q()}catch{}}function I(){let F=document.getElementById(b);F&&F.addEventListener("click",P=>{let p=P.target.closest("[data-ev-sev]");if(p){F.querySelectorAll("[data-ev-sev]").forEach(e=>e.classList.toggle("is-active",e===p)),_.filterSev=p.dataset.evSev,q();return}let c=P.target.closest("[data-ev-cat]");if(c){F.querySelectorAll("[data-ev-cat]").forEach(e=>e.classList.toggle("is-active",e===c)),_.filterCat=c.dataset.evCat,q();return}let o=P.target.closest("[data-ev-action]");if(o){if(o.dataset.evAction==="refresh")O();else if(o.dataset.evAction==="export"){let e=new Blob([JSON.stringify(_.events,null,2)],{type:"application/json"}),a=URL.createObjectURL(e),t=document.createElement("a");t.href=a,t.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(t),t.click(),t.remove(),URL.revokeObjectURL(a),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function C(){let F=document.querySelector(".admin-dash-grid"),P=document.getElementById(b);if(!P)return;let c=(F?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";P.style.display=c?"":"none",c?(O(),_.timer||(_.timer=setInterval(O,15e3))):_.timer&&(clearInterval(_.timer),_.timer=0)}function K(){let F=document.getElementById("settings-grid");!F||document.getElementById(b)||(F.insertAdjacentHTML("beforeend",L()),I(),C())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&K(),C()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",C),document.addEventListener("admin-panel-rendered",()=>{K(),C()}),K()})})()});var je=me(()=>{(function(){"use strict";let b="sec-modqueue",w="/admin/modqueue/list",_=window.AdminUtils&&window.AdminUtils.escapeHtml||function(p){return String(p).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})},z={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},y={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},A={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function m(p){let c=0,o=String(p||"");for(let e=0;e<o.length;e++)c=c*31+o.charCodeAt(e)&65535;return c%360}function $(p){if(!p.created_at_ms)return null;let c=(Date.now()-p.created_at_ms)/1e3,o=Math.max(0,z.autoRejectSec-c);return Math.ceil(o)}function x(p,c){let o=(p.severity||"low").toLowerCase(),e=y[o]||y.low,a=m(p.fp),t=String(p.fp||"\u2014").slice(0,8),s=p.nick||p.nickname||ServerI18n.t("audienceAnonymous"),r=(s||"?").slice(0,2).toUpperCase(),n=c==="pending"?$(p):null,d=c==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${_(p.id||"")}">${_(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${_(p.id||"")}">${_(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${_(p.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",l=c==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${_(ServerI18n.t("modqueueStampApproved"))} \xB7 ${_(p.resolved_by||"admin")} \xB7 ${_(p.resolved_ago||"")}
        </div>`:c==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${p.auto_rejected?`${_(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${_(ServerI18n.t("modqueueAutoRejectTimeout",{n:z.autoRejectSec}))}`:`${_(ServerI18n.t("modqueueStampRejected"))} \xB7 ${_(p.resolved_by||"admin")} \xB7 ${_(p.resolved_ago||"")}`}
        </div>`:"",u=c==="pending"&&n!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${n}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${_(p.id||"")}" data-mq-sev="${_(o)}" style="--mq-sev:${e}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${a})">${_(r)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${_(s)}</div>
            <div class="admin-mq-card__fp">fp:${_(t)}</div>
          </div>
          <div class="admin-mq-card__time">${_(p.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${_(p.content||p.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${e}">${_(ServerI18n.t(A[o]||A.low))}</span>
          <span class="admin-mq-card__rule">${_(ServerI18n.t("modqueueRuleLabel"))}: ${_(p.rule||p.matched_rule||"?")}</span>
          ${u}
        </div>
        ${d}
        ${l}
      </div>`}function D(p,c,o){p&&(p.innerHTML=c.map(e=>x(e,o)).join(""))}function L(){let p=document.getElementById(b);if(!p)return;p.querySelectorAll("[data-mq-bulk]").forEach(o=>{o.disabled=!0}),p.querySelector(".admin-mq__body").hidden=!0;let c=p.querySelector("[data-mq-empty]");c&&window.AdminEmpty&&(c.hidden=!1,c.innerHTML="",c.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function q(){let p=document.getElementById(b);if(!p)return;if(z.pending.length+z.approved.length+z.rejected.length===0){L();return}p.querySelector(".admin-mq__body").hidden=!1;let o=p.querySelector("[data-mq-empty]");o&&(o.hidden=!0),D(p.querySelector("[data-mq-col-pending]"),z.pending,"pending"),D(p.querySelector("[data-mq-col-approved]"),z.approved,"approved"),D(p.querySelector("[data-mq-col-rejected]"),z.rejected,"rejected");let e=(r,n)=>{p.querySelectorAll(r).forEach(d=>{d.textContent=String(n)})};e("[data-mq-cnt-pending]",z.pending.length),e("[data-mq-cnt-approved]",z.approved.length),e("[data-mq-cnt-rejected]",z.rejected.length);let a=z.pending.length===0;p.querySelectorAll("[data-mq-bulk]").forEach(r=>{r.disabled=a});let t=z.pending[z.pending.length-1],s=p.querySelector("[data-mq-oldest]");if(s){let r=t?$(t):null;s.textContent=r!=null?`oldest: ${r}s`:""}e("[data-mq-throughput]",z.stats.throughput.toFixed?z.stats.throughput.toFixed(1):z.stats.throughput),e("[data-mq-avg-review]",z.stats.avg_review_sec.toFixed?z.stats.avg_review_sec.toFixed(1):z.stats.avg_review_sec),e("[data-mq-auto-rate]",Math.round(z.stats.auto_reject_pct||0)+"%")}async function O(){try{let p=await fetch(w,{credentials:"same-origin"});if(!p.ok){z.pending=[],z.approved=[],z.rejected=[],q();return}let c=await p.json();z.pending=Array.isArray(c.pending)?c.pending:[],z.approved=Array.isArray(c.approved)?c.approved:[],z.rejected=Array.isArray(c.rejected)?c.rejected:[],z.stats=c.stats||z.stats,typeof c.auto_reject_sec=="number"&&(z.autoRejectSec=c.auto_reject_sec),q()}catch{}}async function I(p,c,o){if(window.csrfFetch)try{let e=await window.csrfFetch("/admin/modqueue/"+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:p,...o||{}})});if(e.ok)window.showToast&&window.showToast(c==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),O();else{let a=await e.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:a.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function C(){return`
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
      </div>`}function K(){let p=document.getElementById(b);p&&p.addEventListener("click",async c=>{let o=c.target.closest("[data-mq-action]");if(o){let a=o.dataset.mqId,t=o.dataset.mqAction;(t==="approve"||t==="reject")&&I(a,t);return}let e=c.target.closest("[data-mq-bulk]");if(e){let a=e.dataset.mqBulk,t=a==="approve-low";if(!await window.HudConfirm?.open({icon:t?"\u2713":"\u2298",title:t?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:t?"warn":"danger",body:t?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:t?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let r=a.startsWith("approve")?"approve":"reject",n=a.endsWith("low")?"low":"high";I(null,"bulk",{action:r,severity:n})}})}function F(){let p=document.querySelector(".admin-dash-grid"),c=document.getElementById(b);if(!c)return;let o=(location.hash||"").replace("#/","").split("/"),e=p?.dataset.activeRoute||o[0]||"",a=p?.dataset.activeLeaf||o[1]||"",t=e==="modqueue"||e==="moderation"&&(a==="queue"||a===""||a==="moderation");c.style.display=t?"":"none",t?(z.timer||(O(),z.timer=setInterval(O,4e3)),z.countdownTimer||(z.countdownTimer=setInterval(q,1e3))):(z.timer&&(clearInterval(z.timer),z.timer=0),z.countdownTimer&&(clearInterval(z.countdownTimer),z.countdownTimer=0))}function P(){let p=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!p||document.getElementById(b)||(p.insertAdjacentHTML("beforeend",C()),K(),F())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(b)&&P(),F()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",F),document.addEventListener("admin-panel-rendered",()=>{P(),F()}),P()})})()});var Ue=me(()=>{(function(){"use strict";let b="sec-modbans-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(C){return String(C).replace(/[&<>"']/g,function(K){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[K]})},g=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],f={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},_={fingerprint:"FP",ip:"IP",nick:"NICK"},z={rows:[],refreshTimer:0};async function y(){try{let C=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!C.ok)return;let K=await C.json();z.rows=Array.isArray(K.bans)?K.bans:[],$()}catch{}}function A(C){if(!C||C<=0)return"\u2014";let K=Math.floor(C/86400),F=Math.floor(C%86400/3600),P=Math.floor(C%3600/60);return K>0?`${K}d ${F}h`:F>0?`${F}h ${P}m`:`${P}m`}function m(C){let K=C.target_kind;return K==="fingerprint"?`fp:${(C.target||"").slice(0,8)}`:K==="nick"?`@${C.target}`:C.target||"\u2014"}function $(){let C=document.querySelector("[data-modbans-list]");if(!C)return;let K=z.rows||[],F=document.querySelector("[data-modbans-count]");if(F&&(F.textContent=String(K.length)),K.length===0){C.innerHTML="";let P=window.AdminEmpty.render("blacklist");P.dataset.emptyKind="modbans",C.appendChild(P);return}C.innerHTML=K.map(function(P){let p=P.status==="expired",c=P.status==="permanent",o="admin-modbans-chip is-"+P.status,e=c?ServerI18n.t("modbansPermanent"):p?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:A(P.remaining_s)}),a=encodeURIComponent(P.target_kind)+"|"+encodeURIComponent(P.target);return`
        <div class="admin-modbans-row ${p?"is-expired":""}">
          <span class="admin-modbans-target">${w(m(P))}</span>
          <span class="admin-modbans-kind">${w(_[P.target_kind]||P.target_kind)}</span>
          <span class="admin-modbans-reason">${w(P.reason||"\u2014")}</span>
          <span class="${o}">
            ${P.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${w(e)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${a}"
            ${p?"disabled":""}
            title="${p?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${p?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function x(C){let K=C||{},F=K.kind||"ban",P=window.HudConfirm,p=!K.target,c=K.target_kind||"fingerprint",o=K.target||"";return new Promise(function(e){if(!P){e(!1);return}let a=86400,t=!1,s=12,r="hour",n=document.createElement("div");n.className="admin-modbans-modal-body",n.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${w(f[c]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${w(_[c]||"?")} ${w((F||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${w(o?m({target_kind:c,target:o}):"\u2014")}</div>
          </div>
        </div>
        ${p?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(R){return`<button type="button" class="admin-modbans-modal-preset${R===c?" is-active":""}"
                data-modbans-target-kind="${R}">${w(f[R])} ${w(_[R])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${g.map(function(R){return`<button type="button" class="${"admin-modbans-modal-preset"+(R.defaultPick?" is-active":"")+(R.permanent?" is-permanent":"")}" data-modbans-duration="${R.val}">${R.labelKey?ServerI18n.t(R.labelKey):R.label}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let d=n.querySelector("[data-modbans-custom-row]"),l=n.querySelector("[data-modbans-custom-input]"),u=n.querySelector("[data-modbans-custom-seconds]"),i=n.querySelector("[data-modbans-when]"),v=n.querySelector("[data-modbans-custom]"),h=n.querySelector("[data-modbans-target]"),T=n.querySelector("[data-modbans-target-icon]"),k=n.querySelector("[data-modbans-target-label]"),S=n.querySelector("[data-modbans-target-val]"),B=function(){T.textContent=f[c]||"?",k.textContent=`${_[c]||"?"} ${(F||"ban").toUpperCase()}`,S.textContent=o?m({target_kind:c,target:o}):"\u2014"},H=function(){return Math.max(1,parseInt(l.value,10)||1)*(r==="day"?86400:3600)},M=function(){if(a===0){i.textContent=ServerI18n.t("modbansWhenPermanent"),i.classList.remove("is-custom");return}let R=new Date(Date.now()+a*1e3),V=W=>String(W).padStart(2,"0"),ne=`${R.getFullYear()}-${V(R.getMonth()+1)}-${V(R.getDate())} ${V(R.getHours())}:${V(R.getMinutes())}`;t?(i.textContent=ServerI18n.t("modbansWhenCustom",{n:s,unit:ServerI18n.t(r==="day"?"modbansDay":"modbansHour"),stamp:ne}),i.classList.add("is-custom")):(i.textContent=ServerI18n.t("modbansWhenPreset",{dur:A(a),stamp:ne}),i.classList.remove("is-custom"))},E=function(){let R=H();u.textContent=`= ${R.toLocaleString()}s`,t&&(s=Math.max(1,parseInt(l.value,10)||1),a=R,M())},j=n.querySelector("[data-modbans-presets]"),U=function(){t=!0,d.hidden=!1,j.querySelectorAll(".admin-modbans-modal-preset").forEach(function(R){R.classList.toggle("is-active",R===v)}),E()},Y=function(R){t=!1,d.hidden=!0,j.querySelectorAll(".admin-modbans-modal-preset").forEach(function(V){V.classList.toggle("is-active",V===R)})};B(),M(),E(),n.addEventListener("click",function(R){let V=R.target.closest("[data-modbans-target-kind]");if(V){c=V.dataset.modbansTargetKind,V.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(Z){Z.classList.toggle("is-active",Z===V)}),B();return}if(R.target.closest("[data-modbans-custom]")){U();return}let ne=R.target.closest("[data-modbans-custom-unit]");if(ne){r=ne.dataset.modbansCustomUnit||"hour",n.querySelectorAll("[data-modbans-custom-unit]").forEach(function(Z){Z.classList.toggle("is-active",Z===ne)}),E();return}let W=R.target.closest("[data-modbans-duration]");W&&(a=parseInt(W.dataset.modbansDuration,10)||0,Y(W),M())}),l.addEventListener("input",E),h&&h.addEventListener("input",function(){o=h.value.trim(),B()});let N=n.querySelector("[data-modbans-reason]");P.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:n,width:480}).then(function(R){if(!R){e(!1);return}if(!o){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),e(!1);return}a===0?P.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${w(m({target_kind:c,target:o}))}</b>`})}).then(function(V){if(!V){e(!1);return}D(c,o,a,N.value.trim(),F).then(e)}):D(c,o,a,N.value.trim(),F).then(e)})})}async function D(C,K,F,P,p){try{let c=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:C,target:K,duration_s:F,reason:P||"",kind:p||"ban"})});if(!c.ok)throw new Error(`HTTP ${c.status}`);return window.showToast&&window.showToast(F===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:A(F)}),!0),y(),!0}catch(c){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:c.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function L(C){let K=(C||"").split("|");if(K.length!==2)return;let F=decodeURIComponent(K[0]),P=decodeURIComponent(K[1]);try{let p=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:F,target:P})});if(!p.ok)throw new Error(`HTTP ${p.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),y()}catch(p){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:p.message||ServerI18n.t("modbansUnknownError")}),!1)}}function q(){return`
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
      </div>`}function O(){let C=document.getElementById(b);if(!C||C.dataset.modbansBound==="1")return;C.dataset.modbansBound="1",C.addEventListener("click",function(F){if(F.target.closest("[data-modbans-add]")){x({kind:"ban"});return}let P=F.target.closest("[data-modbans-unban]");P&&!P.disabled&&L(P.dataset.modbansUnban)});let K=C.querySelector("[data-modbans-list]");K&&window.AdminSkeletons&&!K.children.length&&K.appendChild(window.AdminSkeletons.listRows({rows:4}))}function I(){let C=document.getElementById("settings-grid");!C||document.getElementById(b)||(C.insertAdjacentHTML("beforeend",q()),O(),y(),z.refreshTimer||(z.refreshTimer=setInterval(y,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&I()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&I()}),window.ModBans={openPicker:x,refreshList:y,formatTarget:m,formatRemaining:A}})()});var Ke=me(()=>{(function(){"use strict";let b="admin-mobile-nav-root",w=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],g=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"backup",icon:"\u21EA",labelKey:"mnavBackup",descKey:"mnavDescBackup"},{route:"security",icon:"\u26BF",labelKey:"adminRouteTitle_security",descKey:"mnavDescSecurity"},{route:"integrations",icon:"\u232C",labelKey:"adminNavIntegrations",desc:"Slido \xB7 Discord \xB7 OBS"}],f=!1,_=0;function z(){return`
      <div id="${b}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow hidden>
          ${g.map(q=>`
            <button type="button" class="admin-mobile-nav__o-row" data-mn-route="${q.route}">
              <span class="admin-mobile-nav__o-icon">${q.icon}</span>
              <span class="admin-mobile-nav__o-txt">
                <span class="admin-mobile-nav__o-label">${q.labelKey?ServerI18n.t(q.labelKey):q.label}</span>
                <span class="admin-mobile-nav__o-desc">${q.descKey?ServerI18n.t(q.descKey):q.desc||""}</span>
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
          ${w.map(q=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${q.id}" data-mn-route="${q.route||""}">
              <span class="admin-mobile-nav__icon">${q.icon}</span>
              <span class="admin-mobile-nav__label">${q.labelKey?ServerI18n.t(q.labelKey):q.label}</span>
              ${q.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${q.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </div>`}function y(){let q=(location.hash||"").replace("#/","").split("/")[0]||"";return w.some(O=>O.id===q)?q:g.some(O=>O.route===q)?"more":"live"}function A(){let q=document.getElementById(b);if(!q)return;let O=y();q.querySelectorAll("[data-mn-tab]").forEach(I=>{I.classList.toggle("is-active",I.dataset.mnTab===O)})}function m(q){let O=document.getElementById(b);O&&(f=q,O.dataset.overflow=q?"open":"closed",O.querySelector("[data-mn-overflow]").hidden=!q,O.querySelector("[data-mn-backdrop]").hidden=!q,O.querySelector("[data-mn-tab='more']")?.classList.toggle("is-active",q))}function $(q){if(q.target.closest("[data-mn-backdrop]")){m(!1);return}if(q.target.closest("[data-mn-logout]")){m(!1);let C=document.getElementById("logoutButton");C&&C.click();return}let O=q.target.closest("[data-mn-tab]");if(O){if(O.dataset.mnTab==="more"){m(!f);return}m(!1),O.dataset.mnRoute&&(location.hash="#/"+O.dataset.mnRoute);return}let I=q.target.closest("[data-mn-route]");I&&I.classList.contains("admin-mobile-nav__o-row")&&(m(!1),location.hash="#/"+I.dataset.mnRoute)}async function x(){try{let q=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!q.ok)return;let O=await q.json(),I=Array.isArray(O.pending)?O.pending.length:0;_=I;let C=document.querySelector("[data-mn-badge='pending']");if(!C)return;C.textContent=String(I),C.hidden=!(I>0)}catch{}}function D(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let q=0;function O(){let I=document.activeElement,C=I&&(I.tagName==="INPUT"||I.tagName==="TEXTAREA"||I.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!C)}document.addEventListener("focusin",()=>{cancelAnimationFrame(q),q=requestAnimationFrame(O)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(q),q=requestAnimationFrame(()=>setTimeout(O,50))})}function L(){document.getElementById(b)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",z()),document.addEventListener("click",$),window.addEventListener("hashchange",()=>{m(!1),A()}),A(),x(),setInterval(x,8e3),D())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",L):L()})()});var We=me(()=>{(function(){"use strict";var b="admin-session-expired-root",w=!1,g=null;function f(m,$){try{var x=window.ServerI18n&&ServerI18n.t(m);return x&&x!==m?x:$}catch{return $}}function _(){var m=document.getElementById(b);if(m&&m.remove(),document.body.classList.remove("is-session-expired"),w=!1,g&&g.focus)try{g.focus()}catch{}g=null}function z(m){if(m.key==="Tab"){var $=document.getElementById(b);if($){var x=$.querySelectorAll("input, button");if(x.length){var D=x[0],L=x[x.length-1];m.shiftKey&&document.activeElement===D?(m.preventDefault(),L.focus()):!m.shiftKey&&document.activeElement===L&&(m.preventDefault(),D.focus())}}}}function y(){if(!(w||document.getElementById(b))){w=!0,g=document.activeElement,document.body.classList.add("is-session-expired");var m=document.createElement("div");m.id=b,m.className="admin-sx",m.setAttribute("role","alertdialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","admin-sx-title"),m.setAttribute("aria-describedby","admin-sx-body"),m.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+f("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+f("sxBody","\u9592\u7F6E\u8D85\u904E 8 \u5C0F\u6642\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+f("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+f("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(m),document.addEventListener("keydown",z,!0);var $=m.querySelector("#admin-sx-password");setTimeout(function(){try{$.focus()}catch{}},30),m.querySelector("[data-sx-form]").addEventListener("submit",function(x){x.preventDefault(),A(m,$)})}}function A(m,$){var x=m.querySelector("[data-sx-error]"),D=m.querySelector(".admin-sx__submit");x.hidden=!0,D.disabled=!0;var L=new URLSearchParams;L.set("password",$.value);var q=window.__adminRawFetch||window.fetch;q.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:L.toString()}).then(function(O){return O.json().then(function(I){return{status:O.status,data:I}},function(){return{status:O.status,data:{}}})}).then(function(O){if(D.disabled=!1,O.status===200&&O.data&&O.data.ok){var I=document.querySelector('meta[name="csrf-token"]');I&&O.data.csrf_token&&(I.content=O.data.csrf_token),document.removeEventListener("keydown",z,!0),_(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(f("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}O.status===429?x.textContent=f("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):x.textContent=f("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),x.hidden=!1,$.select()}).catch(function(){D.disabled=!1,x.textContent=f("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),x.hidden=!1})}window.AdminSessionExpired={open:y,close:_,isOpen:function(){return w}}})()});var Ge=me(()=>{(function(){"use strict";let b="admin-reconnect-banner",_=0,z=0,y="ok",A=0,m=5e3,$=!1,x=0;function D(o){if(y!==o){if(y=o,o==="ok"||o==="dismissed"){q(),o==="ok"&&(_=0,z=0,m=5e3);return}L()}}function L(){let o=document.getElementById(b);o||(o=document.createElement("div"),o.id=b,o.className="admin-rcb",o.setAttribute("role","status"),o.setAttribute("aria-live","polite"),document.body.insertBefore(o,document.body.firstChild)),o.dataset.state=y;let e=y==="exhausted",a=e?"admin-rcb--crimson":"admin-rcb--amber";o.className=`admin-rcb ${a}`,o.innerHTML=e?I():O(),o.querySelector("[data-rcb-action='retry']")?.addEventListener("click",K),o.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>D("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",e),x||(x=setInterval(C,250))}function q(){let o=document.getElementById(b);o&&o.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),x&&(clearInterval(x),x=0)}function O(){let o=Math.max(0,(A-Date.now())/1e3),e=m/1e3,a=Math.min(100,(e-o)/e*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:z})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${a}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function I(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function C(){if(y!=="reconnecting")return;let o=document.getElementById(b);if(!o)return;let e=Math.max(0,(A-Date.now())/1e3),a=m/1e3,t=Math.min(100,(a-e)/a*100),s=o.querySelector(".admin-rcb__progress-fill");s&&(s.style.width=t+"%")}function K(){z=0,_=0,m=5e3,D("reconnecting"),F()}async function F(){try{let o=await fetch("/admin/bootstrap",{credentials:"same-origin"});o.ok?P():o.status===401||o.status===403?D("ok"):p()}catch{p()}}function P(){D("ok")}function p(){if(_+=1,z+=1,z>=10){D("exhausted");return}_>=3&&(m=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,z-1))),A=Date.now()+m,D("reconnecting"),setTimeout(F,m))}function c(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let o=window.csrfFetch,e=window.fetch;window.__adminRawFetch=e,document.addEventListener("admin:session-restored",()=>{$=!1,P()});async function a(t){try{let s=await t;return s&&s.ok?y!=="ok"&&y!=="dismissed"&&P():s&&s.status===401&&!$?($=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):s&&s.status>=500&&p(),s}catch(s){throw p(),s}}typeof o=="function"&&(window.csrfFetch=function(){return a(o.apply(this,arguments))}),window.fetch=function(t,s){let r=typeof t=="string"?t:t&&t.url||"",n=e.call(this,t,s);return r.startsWith("/admin/")||r.indexOf("//")===-1&&r.startsWith("admin/")?a(n):n}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var ze=me(()=>{(function(){"use strict";let b="admin-help-drawer-root",w={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},g=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],f=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function _(O){return O==null?"":String(O).replace(/[&<>"']/g,function(I){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[I]})}function z(){let O=(location.hash||"").replace("#/","").split("/")[0]||"";return w[O]?O:"_default"}function y(){return`
      <div id="${b}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function A(){let O=w[z()],I=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",C=O.titleKey?ServerI18n.t(O.titleKey):O.title,K=O.tipKeys.map(c=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${_(typeof c=="string"?ServerI18n.t(c):c.literal)}</span>
      </div>`).join(""),F=O.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${_(ServerI18n.t(O.fieldTipKey))}</span>
      </div>`:"",P=g.map(c=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${_(c.term)}</div>
        <div class="admin-help__glossary-def">${_(ServerI18n.t(c.defKey))}</div>
      </div>`).join(""),p=f.map(c=>`
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
          <div class="admin-help__glossary">${P}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${p}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${I?"v"+_(I):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function m(){let O=document.getElementById(b);O||(document.body.insertAdjacentHTML("beforeend",y()),O=document.getElementById(b),O.addEventListener("click",I=>{if(I.target.closest("[data-help-close]")){$();return}I.target.closest("[data-help-shortcuts]")&&($(),window.AdminShortcuts&&window.AdminShortcuts.open())})),O.querySelector("[data-help-body]").innerHTML=A(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",D)}function $(){let O=document.getElementById(b);O&&O.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",D)}function x(){document.getElementById(b)?$():m()}function D(O){O.key==="Escape"&&(O.preventDefault(),$())}function L(O){let I=O.target;I&&(I.tagName==="INPUT"||I.tagName==="TEXTAREA"||I.isContentEditable)||O.key==="F1"&&(O.preventDefault(),x())}function q(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",L)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",q):q(),window.AdminHelp={open:m,close:$,toggle:x}})()});var Ve=me(()=>{(function(){"use strict";var b="admin-shortcuts-root",w=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function g(p,c){try{var o=window.ServerI18n&&ServerI18n.t(p);return o&&o!==p?o:c}catch{return c}}function f(p,c){window.showToast&&window.showToast(p,c!==!1)}function _(p,c){return(window.csrfFetch||window.fetch)(p,c||{})}function z(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}async function y(){var p=!1;try{var c=await fetch("/admin/broadcast/status",{credentials:"same-origin"});c.ok&&(p=(await c.json()).mode==="live")}catch{}try{var o=await _("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:p?"standby":"live"})});if(!o.ok)throw new Error("HTTP "+o.status);f(g(p?"ksToastDisplayOff":"ksToastDisplayOn",p?"\u5DF2\u95DC\u9589":"\u5DF2\u958B\u555F")),window.AdminDashboard&&window.AdminDashboard.refreshCockpitOverlay&&window.AdminDashboard.refreshCockpitOverlay()}catch{f(g("cmdkToastToggleFailed","\u5207\u63DB\u5931\u6557"),!1)}}async function A(){try{var p=await _("/admin/overlay/clear",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);f(g("toastCleared","\u5DF2\u6E05\u7A7A"))}catch{f(g("toastClearFailed","\u6E05\u7A7A\u5931\u6557"),!1)}}async function m(){var p="idle";try{var c=await fetch("/admin/poll/status",{credentials:"same-origin"});c.ok&&(p=(await c.json()).state||"idle")}catch{}if(p==="idle"){location.hash="#/polls",f(g("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var o=p==="active";try{var e=await _(o?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!e.ok)throw new Error("HTTP "+e.status);f(g(o?"ksToastPollEnded":"ksToastPollStarted",o?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{f(g("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function $(p){return w?p.metaKey:p.ctrlKey}var x=w?"\u2318":"Ctrl",D=[{group:"global",keys:[x,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(p){return $(p)&&(p.key==="k"||p.key==="K")},run:z},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(p){return p.key==="?"&&!$(p)&&!p.altKey||p.key==="/"&&$(p)},run:function(){K()}},{group:"global",keys:[x,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u5207\u63DB\u986F\u793A\u5C64",match:function(p){return $(p)&&p.shiftKey&&(p.key==="d"||p.key==="D")},run:y},{group:"global",keys:[x,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u5927\u87A2\u5E55",match:function(p){return $(p)&&p.shiftKey&&p.key==="Backspace"},run:A},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(p){return!$(p)&&"jkJK".indexOf(p.key)>=0},run:function(p){window.AdminLiveFeed.moveFocus(p.key==="j"||p.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(p){return!$(p)&&(p.key==="b"||p.key==="B")},run:function(p){window.AdminLiveFeed.blockFocused(p.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(p){return!$(p)&&p.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(p){return!$(p)&&(p.key==="p"||p.key==="P")},run:m}];function L(p){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(p):p==null?"":String(p).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}function q(p){return D.filter(function(c){return c.group===p}).map(function(c){var o=c.keys.map(function(e){return e==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+L(e)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+L(g(c.labelKey,c.fallback))+'</span><span class="admin-ks__keys">'+o+"</span></div>"}).join("")}function O(){var p=document.getElementById(b);p&&p.remove(),document.removeEventListener("keydown",I,!0)}function I(p){(p.key==="Escape"||p.key==="?")&&(p.preventDefault(),O())}function C(){if(!document.getElementById(b)){var p=document.createElement("div");p.id=b,p.className="admin-ks",p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","admin-ks-title"),p.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+L(g("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+L(g("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+q("global")+'</div><div class="admin-ks__group-label">'+L(g("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+q("feed")+'</div><p class="admin-ks__note">'+L(g("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+L(g("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(p),p.addEventListener("click",function(o){o.target.closest("[data-ks-close]")&&O()}),document.addEventListener("keydown",I,!0);var c=p.querySelector(".admin-ks__close");c&&setTimeout(function(){try{c.focus()}catch{}},30)}}function K(){document.getElementById(b)?O():C()}function F(p){if(!p)return!1;if(p.isContentEditable)return!0;var c=(p.tagName||"").toLowerCase();return c==="input"||c==="textarea"||c==="select"}function P(){return!!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())}document.addEventListener("keydown",function(p){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var c=F(document.activeElement),o=0;o<D.length;o++){var e=D[o];if(e.group==="feed"){if(c||!P())continue}else if(c&&!$(p))continue;if(e.match(p)){p.preventDefault(),e.run(p);return}}}),window.AdminShortcuts={open:C,close:O,toggle:K,list:function(){return D.slice()}}})()});var Je=me(()=>{(function(){"use strict";let b="theme-mode",w="admin-theme-mode",g="admin-theme-toggle";(function(){try{if(localStorage.getItem(b)!=null)return;let L=localStorage.getItem(w);(L==="light"||L==="dark"||L==="auto")&&(localStorage.setItem(b,L),localStorage.removeItem(w))}catch{}})();function _(){try{let D=localStorage.getItem(b);if(D==="light"||D==="dark"||D==="auto")return D}catch{}return"auto"}function z(D){try{localStorage.setItem(b,D)}catch{}}function y(D){let L=document.documentElement;D==="auto"?L.removeAttribute("data-theme"):L.setAttribute("data-theme",D),m(D)}function A(D){return D==="light"||D==="dark"?D:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function m(D){let L=document.getElementById(g);if(!L)return;let q=A(D);L.dataset.mode=D,L.dataset.effective=q,L.textContent=D==="auto"?"\u25D0":q==="light"?"\u2600":"\u263E",L.title=D==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:q==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):D==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function $(){let D=_(),L=D==="auto"?"light":D==="light"?"dark":"auto";z(L),y(L)}function x(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let D=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,L=document.getElementById(g);if(L){D&&L.classList.contains("admin-theme-toggle--floating")&&D.parentNode&&!D.parentNode.contains(L)&&(L.classList.remove("admin-theme-toggle--floating"),D.parentNode.insertBefore(L,D));return}let q=document.createElement("button");q.id=g,q.type="button",q.className="admin-theme-toggle",q.addEventListener("click",$),D&&D.parentNode?D.parentNode.insertBefore(q,D):(q.classList.add("admin-theme-toggle--floating"),document.body.appendChild(q)),m(_())}if(y(_()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{_()==="auto"&&m("auto")})}catch{}window.addEventListener("storage",D=>{D.key===b&&y(_())}),window.AdminThemeSwitcher={getMode:_,setMode:function(D){D!=="auto"&&D!=="light"&&D!=="dark"||(z(D),y(D),m(D),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:D}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{x(),new MutationObserver(x).observe(document.body,{childList:!0,subtree:!0})}):(x(),new MutationObserver(x).observe(document.body,{childList:!0,subtree:!0}))})()});var Ye=me(()=>{(function(){"use strict";var b={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},w=[];window.DanmuStore={get:function(g){return b[g]},set:function(g,f){b[g]=f,w.forEach(function(_){_(g,f)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+g,f)},subscribe:function(g){w.push(g)},getAll:function(){return Object.assign({},b)}}})()});var Qe=me(()=>{(function(){"use strict";let g=0;function f(){return window.__adminCtx||{}}function _(){let m=f();return typeof m.getSettings=="function"?m.getSettings()||{}:{}}function z(){let m=_();if(m&&typeof m.OpsContact<"u"){let $=m.OpsContact;if(Array.isArray($))return $[3]||$[0]||null;if(typeof $=="string")return $}return null}function y(){let m=f().appContainer||document.getElementById("app-container");if(!m)return;let $=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";m.innerHTML=`
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
              <span data-i18n="adminLoginServerOnline">${ServerI18n.t("adminLoginServerOnline")}</span>${$?` \xB7 v${$}`:""}
            </span>
          </div>
        </div>
      </div>
    `;let x=m.querySelector("[data-login-reveal]");x&&x.addEventListener("click",()=>{let O=document.getElementById("password");if(!O)return;let I=O.type==="text";O.type=I?"password":"text",x.textContent=ServerI18n.t(I?"adminLoginReveal":"adminLoginHide");try{O.focus()}catch{}});let D=document.getElementById("loginForm"),L=document.getElementById("password"),q=document.getElementById("loginAttemptsHint");if(D){try{let O=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(O)&&O>0){g=O;let I=Math.max(0,5-g);if(q&&g>0&&I>0){q.hidden=!1;let C=document.getElementById("password");C&&C.classList.add("is-error"),q.textContent=ServerI18n.t("loginAttemptsRemaining",{n:I})}}}catch{}D.addEventListener("submit",async O=>{if(O.preventDefault(),!L)return;let I=new URLSearchParams;I.set("password",L.value);try{let C=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:I.toString(),redirect:"manual"});if(C.status===429){let K=C.headers.get("Retry-After"),F=parseInt(K,10),P=Number.isFinite(F)&&F>0?F:300;A(P);return}g+=1;try{sessionStorage.setItem("admin_login_attempts",String(g))}catch{}window.location.reload()}catch(C){console.error("Login submit failed:",C),q&&(q.hidden=!1,q.textContent=ServerI18n.t("networkError"))}})}}function A(m){let $=document.getElementById("adminLoginCard");if(!$)return;let x=z(),D=x?`<a class="admin-lockout-contact" href="${x}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";$.classList.add("admin-lockout-card"),$.innerHTML=`
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
        ${D}
      </div>
    `;let L=document.getElementById("lockoutCountdown"),q=m,O=C=>{let K=Math.floor(C/60),F=C%60;return`${String(K).padStart(2,"0")}:${String(F).padStart(2,"0")}`};L&&(L.textContent=O(q));let I=setInterval(()=>{q-=1,L&&(L.textContent=O(Math.max(0,q))),q<=0&&(clearInterval(I),g=0,y(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:y,renderLockout:A}})()});var Xe=me(()=>{(function(){"use strict";function b(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function w(n){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(n):String(n??"").replace(/[&<>"']/g,d=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[d])}async function g(){try{let n=b();await n.prime();let d=n.get("history_stats"),[l,u,i]=await Promise.all([d?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!u.ok)return;let v=d||(l&&l.ok?await l.json():null);if(!v)return;let h=(await u.json()).distribution||[],T=v.stats&&v.stats.total||0,k=h.reduce((U,Y)=>Y.count>(U?.count||-1)?Y:U,null),S=k?k.count:0,B=k?(k.hour||"").slice(-5):"\u2014",H=document.querySelector('[data-kpi="messages"]');H&&(H.querySelector("[data-kpi-value]").textContent=T.toLocaleString());let M=document.querySelector('[data-kpi="peak"]');M&&(M.querySelector("[data-kpi-value]").textContent=S.toLocaleString());let E=document.querySelector('[data-kpi="unique-fp"]');if(E){let U=new Set;(v.records||[]).forEach(Y=>{let N=Y.fingerprint||Y.fp||Y.user_fingerprint;N&&U.add(N)}),E.querySelector("[data-kpi-value]").textContent=U.size.toLocaleString()}let j=document.querySelector('[data-kpi="session"]');if(j){let U=i&&i.ok?await i.json():null,Y=U&&U.status==="live",N=j.querySelector("[data-kpi-value]");if(Y&&U.started_at){let R=Math.max(0,Math.floor(Date.now()/1e3-U.started_at)),V=Math.floor(R/3600),ne=Math.floor(R%3600/60);N.textContent=V>0?`${V}:${String(ne).padStart(2,"0")}:${String(R%60).padStart(2,"0")}`:`${ne}:${String(R%60).padStart(2,"0")}`}else N.textContent="\u2014"}}catch{}}function f(n,d){let l=document.querySelector(n);if(l){if(typeof d!="number"||d<=0){l.hidden=!0;return}l.hidden=!1,l.textContent=d>999?"999+":String(d)}}async function _(){try{let n=b();await n.prime();let d=n.get("blacklist"),l=n.get("widgets"),u=n.get("history_stats"),i=n.get("effects"),v=n.get("themes");f("[data-count-blacklist]",Array.isArray(d)?d.length:0),f("[data-count-widgets]",Array.isArray(l?.widgets)?l.widgets.length:0),f("[data-count-messages]",u?.stats?.last_24h||0),f("[data-count-effects]",Array.isArray(i?.effects)?i.effects.length:0),f("[data-count-themes]",Array.isArray(v?.themes)?v.themes.length:0);try{let h=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(h.ok){let T=await h.json();f("[data-count-plugins]",Array.isArray(T?.plugins)?T.plugins.length:0)}}catch{}}catch{}}async function z(){_(),y(),s()}async function y(){let n=document.querySelector("[data-dash-poll-body]"),d=document.querySelector("[data-dash-poll-timer]");if(n)try{let l=b();await l.prime();let i=l.get("metrics");if(!i){let S=await fetch("/admin/metrics",{credentials:"same-origin"});if(!S.ok)return;i=await S.json()}let v=i.poll_state;if(!v||!v.active||!Array.isArray(v.options)||v.options.length===0){n.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,d&&(d.textContent="");return}let h=v.options.reduce((S,B)=>S+(B.votes||0),0),T=["A","B","C","D","E","F"],k=0;if(v.options.forEach((S,B)=>{(S.votes||0)>(v.options[k].votes||0)&&(k=B)}),n.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${w(v.question||ServerI18n.t("dashPollRunning"))}</div>`+v.options.map((S,B)=>{let H=h?Math.round(S.votes/h*100):0;return`
            <div class="admin-dash-poll-opt ${B===k&&h>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${T[B]||String(B+1)}</span>
                <span class="label">${w(S.label||"")}</span>
                <span class="pct">${H}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:S.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${H}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:h})}</div>`,d){let S=v.remaining_seconds;d.textContent=typeof S=="number"&&S>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(S/60),ss:String(S%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function A(n){n.dataset.actionsBound!=="1"&&(n.dataset.actionsBound="1",n.addEventListener("click",async d=>{let l=d.target.closest("[data-msg-action]");if(!l)return;let u=l.closest(".admin-dash-msg-row");if(!u)return;let i=l.dataset.msgAction,v=u.dataset.msgFp,h=u.dataset.msgId;if(i==="blacklist"){if(!v){window.showToast&&window.showToast(ServerI18n.t("dashToastNoFp"),!1);return}if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("dashBlacklistTitle"),subtitle:ServerI18n.t("cfmSubBlacklistFp"),severity:"danger",body:ServerI18n.t("dashBlacklistBody")+`<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:${w(v)}</div>`,confirmLabel:ServerI18n.t("dashBlacklistTitle")}))return;try{let k=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:`fp:${v}`})});if(!k.ok)throw new Error("HTTP "+k.status);window.showToast&&window.showToast(ServerI18n.t("dashToastBlacklistedFp",{fp:v}),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastBlacklistFailed"),!1)}}else if(i==="mask"||i==="hide")u.classList.add("is-masked-row"),window.showToast&&window.showToast(i==="mask"?ServerI18n.t("dashToastMasked"):ServerI18n.t("dashToastHidden"),!0);else if(i==="more"){let T=document.querySelector('[data-route="live"]');T&&T.click()}}))}function m(n){let d=n.visible!==!1,l=n.config&&n.config.title||n.type||"widget",u=(n.type||"widget").toUpperCase(),i=(n.position||"\u2014").toUpperCase(),v=d?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",h=n.created_at&&d?Math.max(0,Math.floor(Date.now()/1e3-n.created_at)):null,T=h!=null?(()=>{let k=Math.floor(h/86400),S=Math.floor(h%86400/3600),B=Math.floor(h%3600/60),H=h%60;return k>0?`UPTIME \xB7 ${k}d ${String(S).padStart(2,"0")}h`:S>0?`UPTIME \xB7 ${S}:${String(B).padStart(2,"0")}:${String(H).padStart(2,"0")}`:`UPTIME \xB7 ${B}:${String(H).padStart(2,"0")}`})():`STATUS \xB7 ${d?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${w(n.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${v}"></span>
          <span class="kind">${w(u)}</span>
          <span class="cat">${w(i)}</span>
        </div>
        <div class="title">${w(l)}</div>
        <div class="uptime">${T}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${d?" is-active":""}" data-widget-action="toggle" data-running="${d?"1":"0"}">${d?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function $(n,d){try{let l=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:n,config:{visible:!d}})});if(!l.ok)throw new Error("HTTP "+l.status);D()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function x(n){n.dataset.bound!=="1"&&(n.dataset.bound="1",n.addEventListener("click",d=>{let l=d.target.closest(".admin-dash-widget-tile");if(!l)return;let u=d.target.dataset.widgetAction,i=l.dataset.widgetId;if(!(!u||!i)){if(u==="toggle")$(i,d.target.dataset.running==="1");else if(u==="config"){let v=document.querySelector('[data-route="widgets"]');v&&v.click()}}}))}async function D(){let n=document.querySelector("[data-dash-widgets]");if(n)try{let d=b();await d.prime();let l=d.get("widgets");if(!l){let i=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!i.ok){n.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}l=await i.json()}let u=(l.widgets||l.items||[]).slice(0,4);if(u.length===0){n.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}n.innerHTML='<div class="admin-dash-widget-grid">'+u.map(m).join("")+"</div>",x(n)}catch{n.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let L=null,q=null,O=null;function I(n){let d=Math.max(0,Math.floor(Date.now()/1e3-n)),l=Math.floor(d/3600),u=Math.floor(d%3600/60),i=d%60;return l>0?`${l}:${String(u).padStart(2,"0")}:${String(i).padStart(2,"0")}`:`${String(u).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function C(n){let d=document.getElementById("admin-session-banner"),l=document.getElementById("sec-live-feed");if(l&&l.classList.toggle("is-idle-collapsed",!(n&&n.status==="live")),d&&d.classList.toggle("is-hero",!(n&&n.status==="live")),!d)return;if(L=n,!(n&&n.status==="live"))d.hidden=!1,d.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let i=n.started_at||Date.now()/1e3;d.hidden=!1,d.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${w(n.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
          <div class="admin-session-live-actions" data-current-behavior="${n.viewer_end_behavior||"continue"}">
            <a class="admin-ui-action admin-session-display-link" href="#/overlay" title="${ServerI18n.t("dashSessDisplayLinkTitle")}">${ServerI18n.t("dashSessDisplayLink")}</a>
            <button type="button" class="admin-ui-action is-danger admin-session-end-btn" data-sess-action="close">${ServerI18n.t("dashSessEndBtn")}</button>
          </div>
        </div>`,K(i)}d.dataset.bound||(d.dataset.bound="1",d.addEventListener("click",P))}function K(n){O&&clearInterval(O);let d=()=>{let l=document.querySelector("[data-sess-timer]");l&&(l.textContent=I(n))};d(),O=setInterval(d,1e3)}function F(){O&&(clearInterval(O),O=null)}async function P(n){let d=n.target.closest("[data-sess-action]");if(!d)return;let l=d.dataset.sessAction;if(l==="open"){let u=document.querySelector("[data-sess-name]"),i=(u?u.value:"").trim();if(!i){u&&u.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}d.disabled=!0;try{let v=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i})}),h=await v.json();if(!v.ok){window.showToast&&window.showToast(h.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:i}),!0),C(h.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{d.disabled=!1}}else if(l==="close"){let u=d.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",i=(T,k)=>`<option value="${T}"${T===u?" selected":""}>${k}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${i("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${i("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${i("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;d.disabled=!0;let h=document.getElementById("sessCloseBehavior")?.value;if(h&&h!==u)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:h})})}catch{}try{let T=await window.csrfFetch("/admin/session/close",{method:"POST"}),k=await T.json();if(!T.ok){window.showToast&&window.showToast(k.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),F(),C({status:"idle",viewer_end_behavior:k.archived&&k.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{d.disabled=!1}}}async function p(){try{let n=await fetch("/admin/session/current",{credentials:"same-origin"});if(!n.ok)return;let d=await n.json();C(d)}catch{}}function c(){p(),q&&clearInterval(q),q=setInterval(p,1e4)}function o(){q&&(clearInterval(q),q=null),F()}let e=null;async function a(){let n=document.querySelector("[data-cockpit-overlay]");if(!n||n.offsetParent===null)return;let d=0,l=!1;try{let T=await fetch("/overlay_status",{credentials:"same-origin"});T.ok&&(d=(await T.json()).overlay_count||0)}catch{}try{let T=await fetch("/admin/broadcast/status",{credentials:"same-origin"});T.ok&&(l=(await T.json()).mode==="live")}catch{}let u=d>0&&l;n.classList.toggle("is-on",u);let i=n.querySelector("[data-cockpit-status]");i&&(i.textContent=u?ServerI18n.t("adminCockpitOn",{n:d}):ServerI18n.t("adminCockpitOff"));let v=n.querySelector('[data-cockpit-action="toggle"]');v&&(v.textContent=ServerI18n.t(u?"adminCockpitTurnOff":"adminCockpitTurnOn"),v.classList.toggle("is-danger",u),v.classList.toggle("is-primary",!u),v.dataset.next=u?"standby":"live");let h=n.querySelector('[data-cockpit-action="clear"]');h&&(h.disabled=d===0)}function t(){let n=document.querySelector("[data-cockpit-overlay]");if(!n||n.dataset.bound)return;n.dataset.bound="1",n.addEventListener("click",async u=>{let i=u.target.closest("[data-cockpit-action]");if(!i)return;let v=i.dataset.cockpitAction;if(v==="clear"){try{let h=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});if(!h.ok)throw new Error("HTTP "+h.status);window.showToast&&window.showToast(ServerI18n.t("toastCleared"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("toastClearFailed"),!1)}return}if(v==="toggle"){try{let h=await window.csrfFetch("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:i.dataset.next||"standby"})});if(!h.ok)throw new Error("HTTP "+h.status)}catch{window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:""}),!1)}a()}});let d=n.parentElement&&n.parentElement.querySelector('[data-cockpit-action="idle-qr"]');d&&d.addEventListener("click",()=>{location.hash="#/overlay"});let l=n.parentElement&&n.parentElement.querySelector('[data-cockpit-action="poll"]');l&&l.addEventListener("click",()=>{location.hash="#/polls"})}function s(){t(),a(),e&&clearInterval(e),e=setInterval(a,5e3)}function r(){e&&(clearInterval(e),e=null)}window.AdminDashboard={refreshKpi:g,refreshSummary:z,refreshSidebarBadges:_,populatePoll:y,populateWidgets:D,refreshSessionBanner:p,startSessionPolling:c,stopSessionPolling:o,refreshCockpitOverlay:a,startCockpitPolling:s,stopCockpitPolling:r}})()});var Ze=me(()=>{(function(){"use strict";let b="sec-viewer-config-defaults",w=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(G){return String(G).replace(/[&<>"']/g,function(X){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[X]})},_={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:1,max:10,step:1,unit:""}},z=[14,20,32,44,64],y=["#F1F5F9","#94A3B8","#38BDF8","#FBBF24","#86EFAC","#F87171","#64748B","#334155"],A=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function m(G,X){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let ee=window.ServerI18n.t(G,X);if(ee&&ee!==G)return ee}return G}let $={};function x(G){if($[G]!=null)return $[G];let X=_[G];return X?X.step:1}function D(G,X){$[G]=Number(X)||x(G)}let L={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{}},q=["Color","FontFamily","Layout"];function O(G){return q.indexOf(G)!==-1}function I(G){let X=L.options&&L.options[G],ee=X&&X[1];return Array.isArray(ee)?ee.slice():[]}function C(G){return G==="Color"?y.map(X=>X.replace(/^#/,"").toUpperCase()):G==="Layout"?A.map(X=>X.value):G==="FontFamily"?(L.fonts&&L.fonts.length?L.fonts:["NotoSansTC","Inter"]).map(ee=>typeof ee=="string"?ee:ee.name||ee.family||"").filter(Boolean):[]}function K(G,X){return G==="Color"?String(X||"").replace(/^#/,"").toUpperCase():String(X||"")}function F(){return`
      <div id="${b}" class="admin-dsp2-page hud-page-stack lg:col-span-2" data-tpl="C">
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
      </div>`}let P=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:G=>`${Math.round(G)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:G=>`${G}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:G=>`${(+G).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:G=>`#${String(G||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:G=>G||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:G=>p(G),noRange:!0}];function p(G){let X=A.find(ee=>ee.value===G);return X?m(X.labelKey):G||"\u2014"}function c(G,X){let ee=X[0]!==!1,J=X[3],ie=_[G.key];if(G.key==="Opacity"||G.key==="Speed"){let ae=ie,re=J!=null?Number(J):ae.min,le=isFinite(re)?re:ae.min,ve=(le-ae.min)/Math.max(1e-6,ae.max-ae.min)*100;return`
        <div class="admin-dsp2-track" data-track="${G.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${G.key}" data-num-index="3"
            min="${ae.min}" max="${ae.max}" step="${x(G.key)}" value="${f(String(le))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${ve.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${ve.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${G.key}"
              min="${ae.min}" max="${ae.max}" step="${x(G.key)}" value="${f(String(le))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${ae.min}${ae.unit}</span><span>${ae.max}${ae.unit}</span>
            </div>
          </div>
        </div>`}if(G.key==="FontSize"){let ae=Number(J);return`
        <div class="admin-dsp2-chiprow">
          ${z.map(re=>`<button type="button" class="admin-dsp2-fchip ${ae===re?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${re}">${re}</button>`).join("")}
        </div>`}if(G.key==="Color"){let ae="#"+String(J||"FFFFFF").replace(/^#/,"").toUpperCase(),re=!!L.allowlistEdit.Color,le=re?L.allowlistEdit.Color:new Set(I("Color").map(he=>K("Color",he))),ve=!re&&le.size===0;return`
        <div class="admin-dsp2-swatches">
          ${y.map(he=>{let ce=he.replace(/^#/,"").toUpperCase(),ye=he.toUpperCase()===ae,be=re?le.has(ce):ve||le.has(ce),_e=["admin-dsp2-swatch",ye?"is-active":"",re?"is-editing":"",be?"":"is-blocked"].filter(Boolean).join(" "),Ie=re?`data-allow-key="Color" data-allow-value="${ce}"`:`data-chip-key="Color" data-chip-value="${ce}"`;return`<button type="button" class="${_e}" ${Ie}
              style="background:${he}" aria-label="${he}" aria-pressed="${be?"true":"false"}">
              ${re?`<span class="admin-dsp2-allow-mark">${be?"\u2713":""}</span>`:""}
            </button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${f(m("specificColor"))}">
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${f(ae)}" />
          </label>
        </div>
        ${o(G)}
      `}if(G.key==="FontFamily"){let ae=(L.fonts&&L.fonts.length?L.fonts:["NotoSansTC","Inter"]).map(ce=>{let ye=typeof ce=="string"?ce:ce.name||ce.family||"",be=typeof ce=="string"?ce:ce.label||ce.name||ce.family||"";return{value:ye,label:be}}).filter(ce=>ce.value),re=String(J||""),le=!!L.allowlistEdit.FontFamily,ve=le?L.allowlistEdit.FontFamily:new Set(I("FontFamily").map(ce=>K("FontFamily",ce))),he=!le&&ve.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ae.map(ce=>{let ye=ce.value===re,be=le?ve.has(ce.value):he||ve.has(ce.value),_e=["admin-dsp2-tchip",ye?"is-active":"",le?"is-editing":"",be?"":"is-blocked"].filter(Boolean).join(" "),Ie=le?`data-allow-key="FontFamily" data-allow-value="${f(ce.value)}"`:`data-chip-key="FontFamily" data-chip-value="${f(ce.value)}"`;return`<button type="button" class="${_e}" ${Ie}
              aria-pressed="${be?"true":"false"}">
              ${le?`<span class="admin-dsp2-allow-mark">${be?"\u2713 ":""}</span>`:""}${f(ce.label)}
            </button>`}).join("")}
        </div>
        ${o(G)}
      `}if(G.key==="Layout"){let ae=String(J||"scroll"),re=!!L.allowlistEdit.Layout,le=re?L.allowlistEdit.Layout:new Set(I("Layout").map(he=>K("Layout",he))),ve=!re&&le.size===0;return`
        <div class="admin-dsp2-tiles">
          ${A.map(he=>{let ce=he.value===ae,ye=re?le.has(he.value):ve||le.has(he.value),be=["admin-dsp2-tile",ce?"is-active":"",re?"is-editing":"",ye?"":"is-blocked"].filter(Boolean).join(" "),_e=re?`data-allow-key="Layout" data-allow-value="${he.value}"`:`data-chip-key="Layout" data-chip-value="${he.value}"`;return`<button type="button" class="${be}" ${_e}
              aria-pressed="${ye?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${he.icon}</span>
              <span class="admin-dsp2-tile-label">${m(he.labelKey)}</span>
              ${re?`<span class="admin-dsp2-allow-mark">${ye?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${o(G)}
      `}return""}function o(G){if(!O(G.key))return"";let X=!!L.allowlistEdit[G.key],ee=I(G.key),J=C(G.key).length||0,ie=ee.length>0?m("displayAllowSummaryPartial",{n:ee.length,total:J,label:e(G.key)}):m("displayAllowSummaryAll",{total:J});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${G.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${G.key}">${f(ie)}</span>
        ${X?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${G.key}">${f(m("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${G.key}">${f(m("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${G.key}">${f(m("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${G.key}" title="${f(m("displayEditAllowlistTitle"))}">[${f(m("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function e(G){return m(G==="Color"?"displayLabelColor":G==="FontFamily"?"displayLabelFontFamily":G==="Layout"?"displayLabelLayout":"displayLabelOption")}function a(G,X){if(G.noRange||!(X[0]!==!1))return"";let J=_[G.key],ie=X[1]!=null?X[1]:J.min,ae=X[2]!=null?X[2]:J.max,re=x(G.key);return`
      <div class="admin-dsp2-band">
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(m("displayMinAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${G.key}" data-num-index="1"
              min="${J.min}" max="${J.max}" step="${re}" value="${f(String(ie))}" />
            ${J.unit?`<span>${J.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(m("displayMaxAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${G.key}" data-num-index="2"
              min="${J.min}" max="${J.max}" step="${re}" value="${f(String(ae))}" />
            ${J.unit?`<span>${J.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlStep")}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${G.key}" data-num-index="step"
              min="0.1" step="0.1" value="${f(String(re))}" />
            ${J.unit?`<span>${J.unit}</span>`:""}
          </div>
        </div>
      </div>`}function t(G,X){let ee=X[0]!==!1,J=X[3],ie=G.fmt?G.fmt(J):J!=null?String(J):"\u2014",ae=G.key==="Layout";return`
      <div class="admin-dsp2-row ${ee?"is-on":"is-off"} ${ae?"is-last":""}" data-row-key="${G.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${f(m(G.labelKey))}</div>
          <div class="admin-dsp2-value-badge ${ee?"is-on":""}" data-value-badge>${f(ie)}</div>
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
          <div class="admin-dsp2-picker" data-picker-host>${c(G,X)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${a(G,X)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">
          <button type="button" class="admin-dsp2-pill ${ee?"is-on":""}"
            data-toggle-key="${G.key}" aria-pressed="${ee?"true":"false"}">
            <span class="admin-dsp2-pill-track"><span class="admin-dsp2-pill-thumb"></span></span>
            <span class="admin-dsp2-pill-label">${f(m(ee?"displayCustomizable":"displayLocked"))}</span>
          </button>
          <div class="admin-dsp2-toggle-hint">
            ${f(ee?m("displayToggleHintOn"):G.noRange?m("displayToggleHintOffPick"):m("displayToggleHintOffSlider"))}
          </div>
        </div>
      </div>`}function s(){let G=document.getElementById("dsp2-rows");if(G){if(!L.options){G.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):f(m("loading"))}`;return}G.innerHTML=P.map(X=>t(X,L.options[X.key]||[!1,"","",""])).join(""),n(),d()}}function r(G,X){let ee=L.options&&L.options[G];return ee&&ee[3]!=null?ee[3]:X}function n(){let G=document.querySelector("[data-preview-stage]"),X=document.querySelector("[data-preview-pill='1']"),ee=document.querySelector("[data-preview-pill='2']"),J=document.querySelector("[data-preview-foot-l]"),ie=document.querySelector("[data-preview-foot-r]");if(!G||!X||!ee||!L.options)return;let ae=Number(r("FontSize",32)),re=Number(r("Opacity",92)),le=Number(r("Speed",1)),ve="#"+String(r("Color","7DD3FC")).replace(/^#/,""),he=String(r("FontFamily","NotoSansTC")),ce=String(r("Layout","scroll")),ye=Math.min(ae,36),be=Math.max(0,Math.min(100,re))/100;X.style.fontSize=ye+"px",X.style.color=ve,X.style.opacity=be.toFixed(2),X.style.fontFamily=he+", system-ui, sans-serif",X.style.textShadow=`0 0 14px ${ve}66`,ee.style.fontSize=(ye*.78).toFixed(0)+"px",ee.style.opacity=(be*.9).toFixed(2),ee.style.fontFamily=he+", system-ui, sans-serif",G.dataset.layout=ce,J&&(J.textContent=`${p(ce)} \xB7 ${ae}px \xB7 ${(+le).toFixed(1)}\xD7`),ie&&(ie.textContent=m("displayOpacitySuffix",{n:Math.round(re)}))}function d(){let G=document.querySelector("[data-summary-list]"),X=document.querySelector("[data-summary-count]");if(!G||!L.options)return;let ee=P.filter(J=>(L.options[J.key]||[])[0]).length;X&&(X.textContent=`AUDIENCE \xB7 ${ee}/6 OPEN`),G.innerHTML=P.map(J=>{let ie=!!(L.options[J.key]||[])[0];return`<div class="admin-dsp2-srow ${ie?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${f(m(J.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${f(m(ie?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function l(G,X){try{let ee=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:G,enabled:!!X})});if(!ee.ok)throw new Error("toggle "+ee.status);Array.isArray(L.options[G])||(L.options[G]=[!1,"","",""]),L.options[G][0]=!!X,s(),window.showToast&&window.showToast(`${G} ${m("settingsUpdated")}`,!0)}catch(ee){console.warn("[admin-display] toggle failed:",ee),window.showToast&&window.showToast(m("updateFailed"),!1),await h(),s()}}async function u(G,X,ee){try{let J=ee;if(G==="Color"){let ae=String(J).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ae)){window.showToast&&window.showToast(m("colorFormatError"),!1);return}J=ae.toUpperCase()}else if(G==="Opacity"||G==="FontSize"||G==="Speed"){J=parseInt(J,10);let ae=_[G];if(Number.isNaN(J)||ae&&(J<ae.min||J>ae.max)){window.showToast&&window.showToast(`${G} ${ae.min}\u2013${ae.max}`,!1);return}}let ie=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:G,value:J,index:X})});if(!ie.ok)throw new Error("update "+ie.status);Array.isArray(L.options[G])||(L.options[G]=[!1,"","",""]),L.options[G][X]=J,v(G),n(),d()}catch(J){console.warn("[admin-display] update failed:",J),window.showToast&&window.showToast(m("updateFailed"),!1)}}async function i(G,X){try{let ee=await window.csrfFetch(`/admin/options/${encodeURIComponent(G)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:X})});if(!ee.ok)throw new Error("allowlist "+ee.status);let J=await ee.json().catch(()=>({}));J&&Array.isArray(J.option)?L.options[G]=J.option:Array.isArray(L.options[G])&&(L.options[G][1]=X.slice()),v(G),n(),d();let ie=C(G).length||0,ae=X.length>0?m("displayAllowlistToastPartial",{key:G,n:X.length,total:ie}):m("displayAllowlistToastAll",{key:G});window.showToast&&window.showToast(ae,!0)}catch(ee){console.warn("[admin-display] allowlist failed:",ee),window.showToast&&window.showToast(m("updateFailed"),!1)}}function v(G){let X=document.querySelector(`[data-row-key="${G}"]`);if(!X||!L.options)return;let ee=P.find(re=>re.key===G);if(!ee)return;let J=L.options[G]||[!1,"","",""],ie=J[3],ae=X.querySelector("[data-value-badge]");if(ae&&(ae.textContent=ee.fmt?ee.fmt(ie):ie!=null?String(ie):"\u2014"),O(G)){let re=X.querySelector("[data-picker-host]");re&&(re.innerHTML=c(ee,J));return}if((G==="FontSize"||G==="Color"||G==="FontFamily"||G==="Layout")&&X.querySelectorAll(`[data-chip-key="${G}"]`).forEach(re=>{let le=re.getAttribute("data-chip-value"),ve=G==="Color"?String(ie||"").replace(/^#/,"").toUpperCase():String(ie??"");re.classList.toggle("is-active",String(le)===ve)}),G==="Opacity"||G==="Speed"){let re=_[G],le=Number(ie??re.min),ve=(le-re.min)/Math.max(1e-6,re.max-re.min)*100,he=X.querySelector(".admin-dsp2-slider-fill"),ce=X.querySelector(".admin-dsp2-slider-thumb");he&&(he.style.width=ve.toFixed(2)+"%"),ce&&(ce.style.left=`calc(${ve.toFixed(2)}% - 8px)`);let ye=X.querySelector(".admin-dsp2-range");ye&&document.activeElement!==ye&&(ye.value=String(le));let be=X.querySelector(".admin-dsp2-num");be&&document.activeElement!==be&&(be.value=String(le))}}async function h(){try{let G=await fetch("/get_settings",{credentials:"same-origin"});if(!G.ok)throw new Error(G.status);L.options=await G.json()}catch(G){console.warn("[admin-display] /get_settings failed:",G),L.options=L.options||{}}}async function T(){try{let G=await fetch("/fonts",{credentials:"same-origin"});if(!G.ok)throw new Error(G.status);let X=await G.json();L.fonts=Array.isArray(X)?X:X.fonts||[]}catch{L.fonts=["NotoSansTC","Inter"]}}async function k(){try{let G=await fetch("/admin/metrics",{credentials:"same-origin"});if(!G.ok)return;let X=await G.json();L.viewerCount=X.ws_clients??0}catch{}}function S(){B(),k(),L.metricsTimer=setInterval(k,5e3)}function B(){L.metricsTimer&&(clearInterval(L.metricsTimer),L.metricsTimer=null)}function H(){if(!L.options){window.showToast&&window.showToast(m("loading"),!1);return}let G={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:L.options},X=new Blob([JSON.stringify(G,null,2)],{type:"application/json"}),ee=URL.createObjectURL(X),J=document.createElement("a");J.href=ee,J.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(J),J.click(),document.body.removeChild(J),URL.revokeObjectURL(ee),window.showToast&&window.showToast(m("displayExportDone"),!0)}async function M(){if(!L.options)return;let G=document.getElementById("dsp2-deploy");G&&(G.disabled=!0,G.classList.add("is-pending"));try{for(let X of P){let ee=L.options[X.key];Array.isArray(ee)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:X.key,enabled:!!ee[0]})})}await k(),window.showToast&&window.showToast(m("displayBroadcastDone")+` ${L.viewerCount} ${m("displayViewersReceivedSuffix")}`,!0)}catch(X){console.warn("[admin-display] deploy failed:",X),window.showToast&&window.showToast(m("updateFailed"),!1)}finally{G&&(G.disabled=!1,G.classList.remove("is-pending"))}}async function E(){let G={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,1,10,8],Color:[!0,0,0,"FFFFFF"],FontFamily:[!1,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:m("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"warn",body:m("displayRevertConfirm"),confirmLabel:m("displayDeployRevert")}))try{for(let[ee,J]of Object.entries(G)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:ee,enabled:!!J[0]})});for(let ie=1;ie<=3;ie++)ie<3&&(ee==="Color"||ee==="FontFamily"||ee==="Layout")||J[ie]===""||J[ie]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:ee,value:J[ie],index:ie})})}await h(),s(),window.showToast&&window.showToast(m("displayRevertDone"),!0)}catch(ee){console.warn("[admin-display] revert failed:",ee),window.showToast&&window.showToast(m("updateFailed"),!1)}}function j(){let G=document.getElementById(b);G&&(G.addEventListener("click",X=>{let ee=X.target.closest("[data-toggle-key]");if(ee){let re=ee.getAttribute("data-toggle-key"),le=!!(L.options[re]||[])[0];l(re,!le);return}let J=X.target.closest("[data-allow-action]");if(J){let re=J.getAttribute("data-allow-action"),le=J.getAttribute("data-allow-key");if(!le)return;if(re==="edit"){let ve=I(le).map(he=>K(le,he));ve.length?L.allowlistEdit[le]=new Set(ve):L.allowlistEdit[le]=new Set(C(le)),v(le);return}if(re==="cancel"){delete L.allowlistEdit[le],v(le);return}if(re==="clear"){L.allowlistEdit[le]=new Set,i(le,[]),delete L.allowlistEdit[le];return}if(re==="apply"){let ve=L.allowlistEdit[le]||new Set,he=C(le),ce=Array.from(ve),ye=he.length>0&&ce.length===he.length&&he.every(be=>ve.has(be));i(le,ye?[]:ce),delete L.allowlistEdit[le];return}}let ie=X.target.closest("[data-allow-key][data-allow-value]");if(ie){let re=ie.getAttribute("data-allow-key"),le=ie.getAttribute("data-allow-value"),ve=L.allowlistEdit[re];if(ve){let he=K(re,le);ve.has(he)?ve.delete(he):ve.add(he),v(re)}return}let ae=X.target.closest("[data-chip-key]");if(ae){let re=ae.getAttribute("data-chip-key"),le=ae.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${re}"]`).forEach(ve=>ve.classList.remove("is-active")),ae.classList.add("is-active"),u(re,3,le);return}if(X.target&&X.target.id==="dsp2-revert"){E();return}if(X.target&&X.target.id==="dsp2-export"){H();return}}),G.addEventListener("change",X=>{let ee=X.target;if(!ee)return;let J=ee.getAttribute("data-num-key");if(!J)return;let ie=ee.getAttribute("data-num-index");if(ie==="step"){D(J,ee.value),v(J);return}let ae=parseInt(ie,10);if(Number.isNaN(ae))return;let re=ee.value;J==="Color"&&(re=String(re).replace(/^#/,"").toUpperCase()),u(J,ae,re)}),G.addEventListener("input",X=>{let ee=X.target;if(ee){if(ee.classList&&ee.classList.contains("admin-dsp2-range")){let J=ee.getAttribute("data-range-key"),ie=_[J],ae=Number(ee.value),re=(ae-ie.min)/Math.max(1e-6,ie.max-ie.min)*100,le=ee.closest("[data-row-key]");if(le){let ve=le.querySelector(".admin-dsp2-slider-fill"),he=le.querySelector(".admin-dsp2-slider-thumb");ve&&(ve.style.width=re.toFixed(2)+"%"),he&&(he.style.left=`calc(${re.toFixed(2)}% - 8px)`);let ce=le.querySelector(".admin-dsp2-num");ce&&(ce.value=String(ae))}Array.isArray(L.options[J])&&(L.options[J][3]=ae),n();return}if(ee.classList&&ee.classList.contains("admin-dsp2-num")){let J=ee.getAttribute("data-num-key"),ie=parseInt(ee.getAttribute("data-num-index"),10);if(Number.isNaN(ie)||!Array.isArray(L.options[J]))return;let ae=ee.value;ee.type==="number"&&(ae=Number(ae)),L.options[J][ie]=ae,n()}}}),G.addEventListener("change",X=>{let ee=X.target;if(ee&&ee.classList&&ee.classList.contains("admin-dsp2-range")){let J=ee.getAttribute("data-range-key");u(J,3,ee.value)}}),G.addEventListener("click",X=>{let ee=X.target.closest("[data-dl-step]");if(ee){let ie=ee.closest("[data-dl-stepper]");if(!ie)return;let ae=ie.getAttribute("data-dl-stepper"),le=Number(U[ae]??0)+Number(ee.getAttribute("data-dl-step"));R(ae,le);return}let J=X.target.closest("[data-dl-opt]");if(J){let ie=J.closest("[data-dl-seg]");if(!ie)return;let ae=ie.getAttribute("data-dl-seg"),re=J.getAttribute("data-dl-opt");R(ae,["safe_area","poll_vote_opacity"].indexOf(ae)!==-1?Number(re):re)}}),G.addEventListener("change",X=>{let ee=X.target.closest("[data-dl-toggle]");if(ee){R(ee.getAttribute("data-dl-toggle"),ee.checked);return}let J=X.target.closest("[data-dl-range]");J&&R(J.getAttribute("data-dl-range"),Number(J.value))}),G.addEventListener("input",X=>{let ee=X.target.closest("[data-dl-range]");if(!ee)return;let J=ee.getAttribute("data-dl-range"),ie=G.querySelector(`[data-dl-value="${J}"]`);ie&&(ie.textContent=ee.value+"%")}))}let U={};function Y(){let G=document.getElementById(b);G&&Object.entries(U).forEach(([X,ee])=>{let J=G.querySelector(`[data-dl-value="${X}"]`);J&&(J.textContent=X==="max_tracks"?Number(ee)===0?m("dlMaxTracksAuto"):String(ee):String(ee)+"%");let ie=G.querySelector(`[data-dl-range="${X}"]`);ie&&document.activeElement!==ie&&(ie.value=String(ee));let ae=G.querySelector(`[data-dl-toggle="${X}"]`);ae&&(ae.checked=!!ee);let re=G.querySelector(`[data-dl-seg="${X}"]`);re&&re.querySelectorAll("[data-dl-opt]").forEach(le=>{let ve=le.getAttribute("data-dl-opt")===String(ee);le.classList.toggle("is-active",ve),le.setAttribute("aria-pressed",ve?"true":"false")})})}async function N(){try{let G=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!G.ok)return;U=await G.json(),Y()}catch(G){console.warn("[admin-display] display-layer fetch failed:",G)}}async function R(G,X){let ee=U[G];U[G]=X,Y();try{let J=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[G]:X})});if(!J.ok)throw new Error("display-layer "+J.status);U=await J.json(),Y()}catch(J){U[G]=ee,Y(),console.warn("[admin-display] display-layer update failed:",J),window.showToast&&window.showToast(m("updateFailed"),!1)}}function V(){w.forEach(G=>{let X=document.getElementById(G);X&&X.setAttribute("data-admin-ui-replaced","1")})}let ne=null;function W(G,X){return G==="overlay"||X==="overlay"||G==="display"||X==="display"}function Z(G,X){return G==="viewer-config"||G==="viewer"||X==="viewer-config"||X==="viewer"}function te(G,X){if(!Z(G,X))return;let ee=window.AdminTabs?.getConfig?.("viewer");if(!ee)return;let J=ae=>ee.tabs.some(re=>re.slug===ae),ie=J(X)?X:null;if(!ie&&window.AdminTabs.resolveActiveTab){let ae=window.AdminTabs.resolveActiveTab("viewer",null);J(ae)&&(ie=ae)}ie&&(document.body.dataset.viewerConfigTab=ie)}let oe=!1,Q=!1;async function se(){let G=document.getElementById("sec-viewer-config-limits");if(!G||oe)return;oe=!0;let X=(ee,J)=>{let ie=G.querySelector(ee);ie&&(ie.textContent=J==null?"\u2014":String(J))};try{let ee=await fetch("/admin/metrics",{credentials:"same-origin"});if(!ee.ok)return;let J=await ee.json(),ie=J.rate_limits&&J.rate_limits.fire||{},ae=J.rate_limits&&J.rate_limits.totals||{},re=J.rate_limit_config&&J.rate_limit_config.fire||{},le=Math.max(1,(J.server_time||0)-(J.server_started_at||0));X("[data-vc-rate-fp]",re.limit||"\u2014"),X("[data-vc-rate-global]","\u2014"),X("[data-vc-rate-burst]","\u2014"),X("[data-vc-rate-cooldown]",re.window||"\u2014"),X("[data-vc-msg-len]",100),X("[data-vc-nick-len]","\u2014"),X("[data-vc-dedup]","\u2014");let ve=(ie.hits||0)/le;X("[data-vc-avg-rate]",ve.toFixed(2)+"/s"),X("[data-vc-throttled]",ie.violations||0),X("[data-vc-blocked]",ae.locked_sources||0),X("[data-vc-deduped]",0)}catch{}finally{oe=!1}}function de(){let G=document.querySelector(".admin-dash-grid"),X=document.getElementById(b);if(!G||!X)return;let ee=G.dataset.activeRoute||"live",J=G.dataset.activeLeaf||ee;te(ee,J);let ie=document.body.dataset.viewerConfigTab||"defaults",ae=Z(ee,J),re=W(ee,J),le=ae||re;X.dataset.dspMode=re?"values":"audience",X.style.display=le?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach(he=>{let ce=document.getElementById(he);ce&&(ce.style.display=ae?"":"none")});let ve=document.getElementById("sec-viewer-config-info");ve&&(ve.style.display=ae?"":"none"),ae?Q||(Q=!0,se()):Q=!1,W(ee,J)?L.metricsTimer||S():B(),ne=ee}function ue(){if(document.getElementById("sec-viewer-config-info"))return;let G=document.getElementById("settings-grid");if(!G)return;let X=document.createElement("div");X.id="sec-viewer-config-info",X.className="lg:col-span-2",X.innerHTML='<div class="admin-vc-info-banner">'+m("displayViewerConfigInfoBanner")+"</div>";let ee=[{k:m("displayFieldNicknameLabel"),desc:m("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:m("displayFieldMessageLabel"),desc:m("displayFieldMessageDesc"),on:!0,pinned:!0},{k:m("displayFieldColorLabel"),desc:m("displayFieldColorDesc"),on:!0},{k:m("displayFieldFontLabel"),desc:m("displayFieldFontDesc"),on:!0},{k:m("displayFieldSizeLabel"),desc:m("displayFieldSizeDesc"),on:!0},{k:m("displayFieldOpacityLabel"),desc:m("displayFieldOpacityDesc"),on:!0},{k:m("displayFieldSpeedLabel"),desc:m("displayFieldSpeedDesc"),on:!0},{k:m("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:m("displayFieldEffectLabel"),desc:m("displayFieldEffectDesc"),on:!1}],J=document.createElement("div");J.id="sec-viewer-config-fields",J.className="admin-vc-fields-grid lg:col-span-2";let ie=document.createElement("div");ie.className="admin-vc-col-panel";let ae=document.createElement("div");ae.className="admin-vc-fields-head";let re=ee.filter(function(we){return we.on}).length,le=ee.length-re;ae.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+f(m("displayFieldsCountLabel",{count:ee.length}))+'</span><span class="admin-vc-fields-count">'+f(m("displayFieldsShownHidden",{shown:re,hidden:le}))+"</span>",ie.appendChild(ae);let ve=document.createElement("div");ve.className="admin-vc-fields-list",ee.forEach(function(we){let ke=document.createElement("div");ke.className="admin-vc-field-row"+(we.blocked?" is-blocked":"");let Ee=document.createElement("span");Ee.className="admin-vc-field-dot"+(we.on?" is-on":""),ke.appendChild(Ee);let $e=document.createElement("div");var Se="";we.pinned&&(Se='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+f(m("displayFieldBadgeRequired"))+"</span>"),we.blocked&&(Se='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+f(m("displayFieldBadgeBlocked"))+"</span>"),$e.innerHTML='<div class="admin-vc-field-label">'+f(we.k)+Se+'</div><div class="admin-vc-field-desc">'+f(we.desc)+"</div>",ke.appendChild($e);let Te=document.createElement("button");if(Te.type="button",Te.className="admin-vc-toggle "+(we.on?"is-on":"is-off"),Te.textContent=we.on?m("displayToggleShow"):m("displayToggleHide"),we.blocked||we.pinned)Te.disabled=!0,Te.className+=" disabled";else{var xe=we.on;Te.addEventListener("click",function(){xe=!xe,Te.className="admin-vc-toggle "+(xe?"is-on":"is-off"),Te.textContent=m(xe?"displayToggleShow":"displayToggleHide"),Ee.className="admin-vc-field-dot"+(xe?" is-on":"")})}ke.appendChild(Te),ve.appendChild(ke)}),ie.appendChild(ve);let he=document.createElement("div");he.className="admin-vc-col-panel";var ye=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(we,ke){return'<span class="admin-vc-swatch-dot" style="background:'+we+";border:"+(ke===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");he.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+f(m("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+f(m("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+f(m("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+ye+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+f(m("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+f(m("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+f(m("displayFieldsTip"))+"</div>",J.appendChild(ie),J.appendChild(he);function be(we,ke,Ee,$e,Se,Te){let xe=Te?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+we+'</div></div><div class="admin-vc-limit-row__value" style="color:'+xe+'">'+Ee+'<span class="admin-vc-limit-row__unit">'+($e||"")+"</span></div>"+(Se?'<div class="admin-vc-limit-row__hint">'+Se+"</div>":"")+"</div>"}let _e=document.createElement("div");_e.id="sec-viewer-config-limits",_e.className="admin-vc-limits-grid lg:col-span-2",_e.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+f(m("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+f(m("displayEditLink"))+"</a></div>"+be(f(m("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",f(m("displayRateFpUnit")),f(m("displayRateFpHint")))+be(f(m("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",f(m("displayRateGlobalHint")))+be(f(m("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",f(m("displayRateBurstUnit")),f(m("displayRateBurstHint")))+be(f(m("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",f(m("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+f(m("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+f(m("displayContentLimitsTitle"))+"</span></div>"+be(f(m("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",f(m("displayMsgLenUnit")),f(m("displayMsgLenHint")))+be(f(m("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",f(m("displayNickLenUnit")),f(m("displayNickLenHint")))+be(f(m("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",f(m("displayDedupHint")))+be(f(m("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+f(m("displayProfanityDefaultValue"))+"</span>","",f(m("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+f(m("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(m("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+f(m("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(m("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+f(m("displayAuditLogLink"))+"</a></div>";let Ie=document.getElementById("sec-viewer-theme");Ie&&Ie.parentNode===G?(G.insertBefore(X,Ie),G.insertBefore(_e,Ie),G.insertBefore(J,Ie)):(G.appendChild(X),G.appendChild(_e),G.appendChild(J)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),de()}async function fe(){let G=document.getElementById("settings-grid");if(!G||document.getElementById(b)){V();return}G.insertAdjacentHTML("beforeend",F()),j(),V(),de(),L.options||await Promise.all([h(),T()]),N(),s()}function ge(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)?fe():V(),de()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",de),document.addEventListener("admin-route-applied",de),document.addEventListener("admin-panel-rendered",()=>{fe(),V(),ue(),de()}),fe(),ue()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ge):ge()})()});var et=me(()=>{document.addEventListener("DOMContentLoaded",()=>{function b(){let N=document.querySelector('meta[name="csrf-token"]');return N&&N.content||""}let w=window.DANMU_CONFIG||{},g=w.session||{logged_in:!1},f=w.settingRanges||{};function _(N,R={}){let V={credentials:"same-origin",...R},ne=new Headers(R.headers||{});return ne.set("X-CSRF-Token",b()),V.headers=ne,fetch(N,V)}window.csrfFetch=_;let z=5e3,y={at:0,data:null,promise:null};function A(){return y.data&&Date.now()-y.at<z}function m(){return A()?Promise.resolve(y.data):(y.promise||(y.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(N=>N.ok?N.json():null).then(N=>(N&&(y.data=N,y.at=Date.now()),y.promise=null,N)).catch(()=>(y.promise=null,null))),y.promise)}function $(N){if(!A())return null;let R=y.data[N];return R&&typeof R=="object"&&"_error"in R?null:R}window.__danmuAdminBootstrap={prime:m,get:$},m();let x={},D=null,L=null,q=Object.create(null);Object.assign(q,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},"api-tokens":{nav:"integrations",tab:"api-tokens"},scheduler:{nav:"integrations",tab:"scheduler"}});let O=Object.create(null);Object.assign(O,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"integrations",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"integrations",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"integrations",tab:"plugins"},mobile:{nav:"system",tab:"system"}});let I={_key:N=>"admin:tab:"+N,get(N){try{return sessionStorage.getItem(this._key(N))||null}catch{return null}},set(N,R){try{R?sessionStorage.setItem(this._key(N),R):sessionStorage.removeItem(this._key(N))}catch{}}};function C(N){let R=(N||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!R)return null;let V=R[1],ne=R[2]||null,W=null;if(!ne){let Q=q[V];typeof Q=="string"?V=Q:Q&&typeof Q=="object"&&(V=Q.nav||V,W=Q.tab||null)}let Z=O[V],te=V,oe=null;if(typeof Z=="string"?te=Z:Z&&typeof Z=="object"&&(te=Z.nav||V,oe=Z.tab||null),R[1]!==te&&(C._warned||(C._warned=new Set),!C._warned.has(R[1]))){C._warned.add(R[1]);try{console.info("[admin] legacy route #/"+R[1]+" \u2192 #/"+te+(ne||oe||W?"/"+(ne||oe||W):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:te,tab:ne||oe||W,raw:V}}function K(N,R){return R?"#/"+N+"/"+R:"#/"+N}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:O,tabMemory:I,parseHash:C,buildHash:K});var F=window.AdminUtils.loadDetailsState,P=window.AdminUtils.saveDetailsState,p=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:m,bootstrapSection:$};async function c(){try{x=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),g.logged_in&&S()}catch(N){console.error("Get settings failed:",N),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function o(N){return/^#[0-9A-Fa-f]{6}$/.test(N)}function e(N){return o(N)?N:/^[0-9A-Fa-f]{6}$/.test(N)?"#"+N:(N.startsWith("#")||(N="#"+N),o(N)?N:"#38bdf8")}function a(N,R){if(f[N]){let V=parseInt(R);if(isNaN(V)||V<f[N].min||V>f[N].max)return showToast(ServerI18n.t("settingRangeError",{key:N,min:f[N].min,max:f[N].max}),!1),!1}return!0}function t(N,R,V){if(!V||!Array.isArray(x[N]))return;let ne=x[N][R];N==="Color"&&typeof ne=="string"&&(ne=e(`#${ne}`)),ne!=null&&(V.value=String(ne))}let s={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-plugins","sec-widgets"]}};function r(){Object.values(s).forEach(N=>{let R=document.getElementById(N.containerId);R&&N.orderedIds.forEach(V=>{let ne=document.getElementById(V);ne&&ne.parentElement!==R&&R.appendChild(ne)})})}function n(){D&&(D.disconnect(),D=null),r(),D=new MutationObserver(()=>{r()}),D.observe(u,{childList:!0,subtree:!0})}async function d(N,R,V,ne=null){try{if(N==="Color"){if(!o(R)){showToast(ServerI18n.t("colorFormatError"),!1),t(N,V,ne);return}R=R.replace("#","")}else if((N==="Speed"||N==="Opacity"||N==="FontSize")&&!a(N,R)){t(N,V,ne);return}(await _("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:N,value:R,index:V})})).ok?(Array.isArray(x[N])||(x[N]=[!1,"","",""]),x[N][V]=R,showToast(`${N} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await c())}catch(W){console.error("Error:",W),showToast(`Update Error: ${W.message}`,!1),await c()}}async function l(N,R){try{let V=await _("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:N,enabled:R})}),ne=await V.json().catch(()=>({}));if(V.ok)Array.isArray(x[N])||(x[N]=[!1,"","",""]),x[N][0]=R,showToast(`${N} ${ServerI18n.t("settingsUpdated")}`),S();else{let W=document.getElementById(`toggle-${N}`);W&&(W.checked=!R),showToast(ne.error||ServerI18n.t("updateFailed"),!1)}}catch(V){console.error("Error:",V);let ne=document.getElementById(`toggle-${N}`);ne&&(ne.checked=!R),showToast(`Update Error: ${V.message}`,!1)}}let u=document.getElementById("app-container"),i=document.getElementById("toast-container"),v=(N,R=500)=>"requestIdleCallback"in window?window.requestIdleCallback(N,{timeout:R}):setTimeout(N,R);async function h(){let N=parseInt(document.getElementById("historyHours")?.value||"24");try{let[R,V]=await Promise.all([fetch(`/admin/stats/hourly?hours=${N}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${N}&limit=10`,{credentials:"same-origin"})]);if(!R.ok||!V.ok)return;let ne=await R.json(),W=await V.json(),Z=document.getElementById("statsDashboard");if(!Z)return;let te=ne.distribution||[],oe=W.topTexts||[],Q=Math.max(1,...te.map(ge=>ge.count)),se=te.reduce((ge,G)=>ge+(G.count||0),0),de=te.filter(ge=>ge.count>0).length,ue=te.map(ge=>`<div class="chart-bar" style="height: ${Math.round(ge.count/Q*100)}%" title="${p(ge.hour)}: ${ge.count}"><span class="chart-label">${p(ge.hour.slice(-5,-3))}</span></div>`).join(""),fe=oe.map((ge,G)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${G+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${p(ge.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${ge.count}</td></tr>`).join("");Z.innerHTML=`
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
              <span class="history-dashboard-caption">${N}h window</span>
            </div>
            <div class="stats-chart">${ue||`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${oe.length?`<table class="w-full text-xs"><tbody>${fe}</tbody></table>`:`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
          </div>
        </div>`}catch(R){console.error("Load stats error:",R)}}window._loadStats=h,window.csrfFetch=_,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=u,window.__adminCtx.getSettings=()=>x;function T(){u&&(u.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function k(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():T()}function S(){let N=F(),R=(de,ue=!1)=>N[de]!==void 0?N[de]:ue,V=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(de=>Array.isArray(x[de])&&x[de][0]===!0).length,ne=x.Layout&&x.Layout[3]?p(String(x.Layout[3]).replace(/_/g," ")):"scroll",W=x.FontFamily&&x.FontFamily[3]?p(String(x.FontFamily[3])):"NotoSansTC",Z=de=>de.map(ue=>`<span style="height:${ue*10}%;opacity:${.3+ue*.08}"></span>`).join(""),te=ne&&ne!=="off",oe=window.location.port||(window.location.protocol==="https:"?"443":"80");u.innerHTML=`
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
                                         aria-label="${p(ServerI18n.t("adminSearchHint"))}"
                                         title="${p(ServerI18n.t("adminSearchHint"))} \u2318K">
                                        <span aria-hidden="true">\u2315</span>
                                    </button>
                                    <!-- \u8A2D\u8A08\u7A3F 15 \xB7 HD1\uFF1A\u8AAA\u660E\u62BD\u5C5C\u7531\u300C?\u300D\u6309\u9215\u958B\u3002
                                         \u5728\u9019\u4E4B\u524D\u62BD\u5C5C\u53EA\u6709\u9375\u76E4\uFF08F1\uFF09\u80FD\u958B\uFF0C\u7B49\u65BC\u5C0D\u6ED1\u9F20\u4F7F\u7528\u8005
                                         \u4E0D\u5B58\u5728\u3002\u9375\u76E4\u7684 ? \u5DF2\u6539\u6210\u53EB\u300C\u5FEB\u901F\u9375\u4E00\u89BD\u300D\uFF08KS1\uFF09\u3002 -->
                                    <button class="admin-dash-search is-icon-only" type="button" data-open-help
                                         aria-label="${p(ServerI18n.t("helpDrawerTitle"))}"
                                         title="${p(ServerI18n.t("helpDrawerTitle"))} F1">
                                        <span aria-hidden="true">?</span>
                                    </button>
                                    <!-- \u8AA0\u5BE6\u7684\u72C0\u614B\u71C8\uFF0B\u6377\u5F91\uFF1A\u5B83\u662F\u5C0E\u822A\uFF08\u524D\u5F80\u986F\u793A\u5C64\u9801\uFF09\uFF0C
                                         \u4E0D\u662F\u958B\u95DC\u3002 -->
                                    <button class="admin-dash-broadcast ${te?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${p(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${p(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 ${p(te?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}
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
                `;let Q=document.getElementById("settings-grid"),se=x.Effects?x.Effects[0]!==!1:!0;Q.insertAdjacentHTML("beforeend",`
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
            <span class="lbl">${p(ServerI18n.t("themeDetailFont"))}</span>
            <span class="val">
              <select class="admin-ui-input" data-theme-ov="font_family" id="themeOvFont"></select>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${p(ServerI18n.t("themeDetailStroke"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="stroke">
              <button type="button" data-theme-opt="none">${p(ServerI18n.t("themeStrokeNone"))}</button>
              <button type="button" data-theme-opt="thin">${p(ServerI18n.t("themeStrokeThin"))}</button>
              <button type="button" data-theme-opt="thick">${p(ServerI18n.t("themeStrokeThick"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${p(ServerI18n.t("themeDetailShadow"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="shadow">
              <button type="button" data-theme-opt="none">${p(ServerI18n.t("themeShadowNone"))}</button>
              <button type="button" data-theme-opt="soft">${p(ServerI18n.t("themeShadowSoft"))}</button>
              <button type="button" data-theme-opt="strong">${p(ServerI18n.t("themeShadowStrong"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${p(ServerI18n.t("themeDetailColor"))}
              <span class="sub">${p(ServerI18n.t("themeDetailColorHint"))}</span>
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
    `),v(U),Q.insertAdjacentHTML("beforeend",`
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
    `),M(),n(),v(Y),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),H(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let ue=document.querySelector("[data-telem-bars]");if(!ue)return;let fe=document.querySelector("[data-telem-status]"),ge={cpu:100,mem:100,ws:100,rate:50};function G(J,ie,ae,re,le){let ve=ue.querySelector(`[data-telem-fill="${J}"]`),he=ue.querySelector(`[data-telem-value="${J}"]`);ve&&(ve.style.width=Math.max(0,Math.min(100,ie))+"%",ve.classList.toggle("is-warn",!re)),he&&(he.textContent=ae);let ce=ue.querySelector(`[data-telem-row="${J}"]`);ce&&le&&ce.setAttribute("title",le)}function X(J,ie){if(!ie||ie<=0)return Math.round(J)+" MB used";if(ie>=1024){let ae=(J/1024).toFixed(1),re=(ie/1024).toFixed(1);return`${ae} / ${re} GB used`}return`${Math.round(J)} / ${Math.round(ie)} MB used`}async function ee(){try{let J=await fetch("/admin/metrics",{credentials:"same-origin"});if(!J.ok)return;let ie=await J.json(),ae=ie.cpu_series||[],re=ie.mem_series||[],le=ie.mem_mb_series||[],ve=ie.ws_series||[],he=ie.rate_series||[],ce=Ee=>Ee.length?Ee[Ee.length-1]:0,ye=Number(ce(ae)||0),be=Number(ce(re)||0),_e=Number(ce(le)||0),Ie=Number(ie.mem_total_mb||0),we=Number(ce(ve)||ie.ws_clients||0),ke=Number(ce(he)||0)/60;if(G("cpu",ye,`${ye.toFixed(0)}%`,ye<90),G("mem",be,`${be.toFixed(0)}%`,be<90,X(_e,Ie)),G("ws",we/ge.ws*100,String(we),we<100),G("rate",ke/ge.rate*100,`${ke.toFixed(1)}/s`,ke<40),fe){let Ee=ye>=90||be>=90||ke>=40;fe.textContent=Ee?"\u25CF BUSY":"\u25CF HEALTHY",fe.classList.toggle("is-warn",Ee)}}catch{}}setTimeout(ee,4e3),setInterval(ee,5e3)})()}let B={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},integrations:{title:"\u64F4\u5145",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"]},firetoken:{title:"Fire Token",kicker:"ADMIN LANE \xB7 FIRE TOKEN \xB7 \u7528\u91CF / IP / AUDIT",sections:["sec-firetoken-overview"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},security:{title:"\u5B89\u5168",kicker:"SECURITY \xB7 \u5BC6\u78BC \xB7 WS TOKEN \xB7 \u5BE9\u8A08",sections:["admin-security-v2-page"]},backup:{title:"\u5099\u4EFD\u8207\u9084\u539F",kicker:"BACKUP \xB7 EXPORT \xB7 DANGER",sections:["admin-backup-v2-page","sec-timeline-export"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=B;function H(){let N=document.querySelector(".admin-dash-grid");if(!N)return;let R="dashboard",V=null;function ne(J){return s.moderation.orderedIds.indexOf(J)!==-1?"moderation-grid":s.assets.orderedIds.indexOf(J)!==-1?"assets-grid":J==="sec-scheduler"||J==="sec-webhooks"?"sec-advanced":"settings-grid"}function W(){let J=N.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),ie=N.querySelector("[data-route-note]"),ae=N.querySelector("[data-route-action]");if(ae&&Array.prototype.slice.call(ae.children).forEach(ce=>{ce._adminHomeHead?ce._adminHomeHead.appendChild(ce):ce.remove()}),!J)return;let re=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(R)),le=Array.prototype.slice.call(N.querySelectorAll(".admin-ui-page-head"));le.forEach(ce=>ce.classList.remove("is-merged-into-topbar"));let ve=(B[R]?.title||"").trim().replace(/\s+/g," "),he=null;le.forEach(ce=>{let ye=ce.querySelector(".admin-ui-page-title"),be=ye&&ye.textContent.trim().replace(/\s+/g," ");if(be&&(re||be===J||be===ve)){if(ce.offsetParent!==null){he===null&&(he=ce.querySelector(".admin-ui-page-note")?.innerHTML||"");let Ie=ce.querySelector(".admin-ui-page-actions");Ie&&ae&&!ae.children.length&&(Ie._adminHomeHead=ce,ae.appendChild(Ie))}ce.classList.add("is-merged-into-topbar")}}),ie&&(ie.innerHTML=he||"",ie.hidden=!he)}function Z(){let J=B[R],ie=new Set((J.sections||[]).map(ne)),ae=re=>re.id==="sec-advanced"?Array.from(re.querySelectorAll('[id^="sec-"]')).some(le=>getComputedStyle(le).display!=="none"):Array.from(re.children).some(le=>getComputedStyle(le).display!=="none");N.querySelectorAll(".admin-route-sections").forEach(re=>{if(!(re.id==="sec-advanced"?ie.has("sec-advanced"):ie.has(re.id))){re.style.display="none";return}re.style.display="",re.style.display=ae(re)?"":"none"})}let te=()=>{let J=B[R],ie=new Set(J.sections);N.querySelectorAll('[id^="sec-"]').forEach(ae=>{if(ae.id){if(ae.id==="sec-advanced"){let re=Array.from(ae.querySelectorAll('[id^="sec-"]')).some(le=>ie.has(le.id));ae.style.display=re?"":"none";return}ae.style.display=ie.has(ae.id)?"":"none"}}),V&&window.AdminTabs?.hasTabsFor?.(R)&&window.AdminTabs.applyTabSectionVisibility(R,V,N),Z(),W()},oe={system:{nav:"system",tab:"overview"},backup:{nav:"backup"},integrations:{nav:"integrations"},"api-tokens":{nav:"integrations",tab:"api-tokens"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},scheduler:{nav:"integrations",tab:"scheduler"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}},Q=(J,ie,ae)=>{if(ae=ae||J,!B[J]){let Se=q[J];if(typeof Se=="string")J=Se;else if(Se&&typeof Se=="object")Se.nav&&(J=Se.nav),!ie&&Se.tab&&(ie=Se.tab);else{let Te=O[J];typeof Te=="string"?J=Te:Te&&typeof Te=="object"&&(Te.nav&&(J=Te.nav),!ie&&Te.tab&&(ie=Te.tab))}}if(J==="system"&&ie&&oe[ie]){let Se=oe[ie];J=Se.nav,ie=Se.tab||null,ae=J}R=B[J]?J:"live",N.dataset.activeRoute=R;let re;window.AdminTabs?.hasTabsFor?.(R)?re=window.AdminTabs.resolveActiveTab(R,ie):re=null;let le=ae&&ae!==R?"#/"+ae:window.AdminRouter?.buildHash?window.AdminRouter.buildHash(R,re):"#/"+R;if(window.location.hash!==le){try{history.replaceState(null,"",le)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let ve=B[R],he=Array.from(N.querySelectorAll(".admin-dash-nav-row[data-route]")),ce=ae!==R?he.find(Se=>Se.dataset.route===ae):null;he.forEach(Se=>{let Te=ce?Se===ce:Se.dataset.route===R;Se.classList.toggle("is-active",Te),Se.setAttribute("aria-selected",Te?"true":"false")});let ye=N.querySelector("[data-route-kicker]"),be=N.querySelector("[data-route-title]");var _e=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(Se){return Se},Ie="adminRouteTitle_"+R,we="adminRouteKicker_"+R,ke=_e(Ie),Ee=_e(we);ye&&(ye.textContent=Ee!==we?Ee:ve.kicker),be&&(be.textContent=ke!==Ie?ke:ve.title);let $e=R==="dashboard"||R==="live";N.querySelectorAll('[data-route-view="dashboard"]').forEach(Se=>{Se.style.display=$e?"":"none"}),$e?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),V=re,re&&window.AdminRouter?.tabMemory?.set?.(R,re),N.dataset.activeLeaf=re||R,te(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:R,leaf:re}})),Z(),W(),de(R,re),se(ae,R,re);try{history.replaceState(null,"",le)}catch{}};function se(J,ie,ae){let re=N.querySelector("[data-route-breadcrumb]");if(!re)return;let le=Array.from(N.querySelectorAll(".admin-dash-nav-row[data-route]")),ve=le.find(we=>we.dataset.route===J);if(ve||(ve=le.find(we=>we.dataset.route===ie)),!ve){re.textContent="",re.hidden=!0;return}let he="",ce=ve.previousElementSibling;for(;ce;){if(ce.classList&&ce.classList.contains("admin-dash-nav-label")){he=((ce.querySelector("[data-i18n]")||ce).textContent||"").trim();break}ce=ce.previousElementSibling}let ye=ve.querySelector("[data-i18n]")||ve.querySelector("span:nth-child(2)"),be=(ye?ye.textContent:ve.textContent||"").trim(),_e="";if(ae){let we=N.querySelector("[data-admin-tabs-host]"),ke=we?we.querySelector(".is-active, [aria-selected='true']"):null;ke&&(_e=((ke.querySelector(".admin-tabs-btn-label")||ke).textContent||"").trim())}let Ie=[he,be].filter(Boolean);_e&&Ie.push(_e),re.hidden=Ie.length===0,re.innerHTML=Ie.map((we,ke)=>{let Ee=ke>0?'<span class="admin-dash-breadcrumb-sep" aria-hidden="true">\u203A</span>':"",$e=ke===Ie.length-1?"admin-dash-breadcrumb-item is-current":"admin-dash-breadcrumb-item";return Ee+'<span class="'+$e+'">'+p(we)+"</span>"}).join("")}function de(J,ie){let ae=N.querySelector("[data-admin-tabs-host]");if(!ae){let re=N.querySelector(".admin-dash-topbar");if(!re)return;ae=document.createElement("div"),ae.dataset.adminTabsHost="",re.insertAdjacentElement("afterend",ae)}if(ae.innerHTML="",window.AdminTabs?.hasTabsFor?.(J)&&ie){ae.hidden=!1;let re=window.AdminTabs.renderTabStrip(J,ie,{onSelect:le=>Q(J,le)});re&&ae.appendChild(re),ae.classList.remove("admin-tabs-host--accordion");return}ae.classList.remove("admin-tabs-host--accordion"),ae.hidden=!0}L&&window.removeEventListener("hashchange",L),L=()=>{let J=C(window.location.hash),ie=(window.location.hash||"").match(/^#\/([\w-]+)/),ae=ie?ie[1]:null;J&&Q(J.nav,J.tab,ae||J.raw)},window.addEventListener("hashchange",L),N.querySelectorAll("[data-route]").forEach(J=>{J.addEventListener("click",ie=>{ie.preventDefault(),Q(J.dataset.route)})});let ue=C(window.location.hash),fe=(window.location.hash||"").match(/^#\/([\w-]+)/),ge=fe?fe[1]:ue?.raw||ue?.nav||"live";Q(ue?.nav||"live",ue?.tab||null,ge),window._adminNavigateTo=()=>Q(R,V);let G=!1;function X(){if(G)return;G=!0;let J=()=>{G=!1,te(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:R,leaf:V}}))};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?requestAnimationFrame(J):setTimeout(J,0)}let ee=N.querySelector(".admin-dash-main");ee&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{X()}).observe(ee,{childList:!0,subtree:!0}),X())}function M(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let N=document.querySelector("[data-open-help]");N&&N.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let R=document.querySelector("[data-open-palette]");if(R){let ne=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};R.addEventListener("click",ne),R.addEventListener("keydown",W=>{(W.key==="Enter"||W.key===" ")&&(W.preventDefault(),ne())})}let V=document.getElementById("logoutButton");V&&V.addEventListener("click",async()=>{try{let ne=await _("/logout",{method:"POST"});ne.redirected&&(window.location.href=ne.url),showToast(ServerI18n.t("logoutSuccess"))}catch(ne){console.error("Logout Failed:",ne),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(ne=>{ne.name&&ne.addEventListener("change",async function(){let W=this.name,Z=this.checked;await l(W,Z)})}),document.querySelectorAll("details[id^='sec-']").forEach(ne=>{ne.addEventListener("toggle",()=>{let W=F();W[ne.id]=ne.open,P(W)})}),document.querySelectorAll(".setting-input").forEach(ne=>{ne.addEventListener("change",async function(){let W=this.dataset.key,Z=parseInt(this.dataset.index),te=this.value;this.type==="number"&&(te=parseInt(te)),await d(W,te,Z,this)})})}function E(){if(g.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}S()}else k()}async function j(){await c(),E(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function U(){window.AdminThemes&&window.AdminThemes.init()}function Y(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{D&&(D.disconnect(),D=null)}),j()})});var tt=me(()=>{(function(){"use strict";var b=null;async function w(){var m=(document.getElementById("pollQuestion")?.value||"").trim(),$=document.querySelectorAll(".poll-option-input"),x=Array.from($).map(function(q){return q.value.trim()}).filter(Boolean);if(!m){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(x.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var D=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:m,options:x})}),L=await D.json();if(!D.ok){window.showToast(L.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),y(L),_()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function g(){try{var m=await window.csrfFetch("/admin/poll/end",{method:"POST"}),$=await m.json();if(!m.ok){window.showToast($.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),y($),b&&(clearInterval(b),b=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function f(){try{var m=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),$=await m.json();if(!m.ok){window.showToast($.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),y($),b&&(clearInterval(b),b=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function _(){b&&(clearInterval(b),b=null);var m=async function(){try{var $=await fetch("/admin/poll/status",{credentials:"same-origin"});if($.ok){var x=await $.json();y(x),x.state!=="active"&&b&&(clearInterval(b),b=null)}}catch{}};m(),b=setInterval(m,2e3)}function z(){var m=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var $=document.querySelector('#sec-polls [data-poll-action="add"]');$&&$.click()},extra:`
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
      </div>`});return m.dataset.emptyKind="poll",m}function y(m){var $=document.getElementById("pollStatusDisplay");if($){if($.textContent="",!m||m.state==="idle"){$.appendChild(z());return}var x=m.total_votes||0,D=Math.max(1,...m.options.map(function(F){return F.count})),L=document.createElement("div");L.className="admin-poll-status-card";var q=document.createElement("div");q.className="admin-poll-status-header";var O=document.createElement("span");O.className="admin-poll-status-dot"+(m.state==="active"?" is-active":" is-ended"),q.appendChild(O);var I=document.createElement("span");I.className="admin-poll-status-question",I.textContent=m.question||"",q.appendChild(I);var C=document.createElement("span");C.className="admin-poll-status-state",C.textContent=m.state,q.appendChild(C),L.appendChild(q),m.options.forEach(function(F){var P=document.createElement("div");P.className="admin-poll-status-row";var p=document.createElement("div");p.className="admin-poll-status-label";var c=document.createElement("span"),o=document.createElement("b");o.textContent=F.key+".",c.appendChild(o),c.appendChild(document.createTextNode(" "+F.text));var e=document.createElement("span");e.textContent=F.count+" ("+F.percentage+"%)",p.appendChild(c),p.appendChild(e);var a=document.createElement("div");a.className="admin-poll-status-bar";var t=document.createElement("div");t.className="admin-poll-status-bar-fill",t.style.width=F.count/D*100+"%",a.appendChild(t),P.appendChild(p),P.appendChild(a),L.appendChild(P)});var K=document.createElement("div");K.className="admin-poll-status-footer",K.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",x),L.appendChild(K),$.appendChild(L)}}function A(){var m=document.getElementById("sec-polls");if(m&&m.dataset.pollLegacyBound!=="1"){m.dataset.pollLegacyBound="1";var $=document.getElementById("pollCreateBtn");$&&$.addEventListener("click",w);var x=document.getElementById("pollEndBtn");x&&x.addEventListener("click",g);var D=document.getElementById("pollResetBtn");D&&D.addEventListener("click",f);var L=document.getElementById("pollAddOptionBtn");L&&L.addEventListener("click",function(){var I=document.getElementById("pollOptionsContainer");if(I){var C=I.querySelectorAll(".poll-option-input").length;if(C>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var K=document.createElement("input");K.type="text",K.className="poll-option-input admin-ui-input",K.placeholder=String.fromCharCode(65+C)+". Option "+(C+1),K.maxLength=100,I.appendChild(K)}});var q=document.getElementById("pollRemoveOptionBtn");q&&q.addEventListener("click",function(){var I=document.getElementById("pollOptionsContainer");if(I){var C=I.querySelectorAll(".poll-option-input");if(C.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}C[C.length-1].remove()}});var O=m;O&&(O.addEventListener("toggle",function(){O.open&&_()}),_()),window.addEventListener("beforeunload",function(){b&&(clearInterval(b),b=null)})}}document.addEventListener("admin-panel-rendered",function(){A()}),document.addEventListener("DOMContentLoaded",function(){A()}),window.addEventListener("hashchange",function(){var m=window.location.hash||"";m.indexOf("/polls")!==-1&&A()})})()});var nt=me(()=>{(function(){"use strict";async function b(){try{let _=await fetch("/admin/blacklist/get",{method:"GET",credentials:"same-origin"});if(!_.ok){let $=await _.json();showToast(ServerI18n.t("errorFetchingBlacklist").replace("{error}",$.error||_.statusText),!1);return}let z=await _.json(),y=document.getElementById("blacklistKeywords");y.innerHTML="";let A=document.getElementById("modBlacklistCount");A&&(A.textContent=`${z.length} words`);let m=document.querySelector('[data-mod-stat="banned"]');m&&(m.textContent=z.length),z.length===0?y.innerHTML=`<div style="padding:12px 0;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${ServerI18n.t("noKeywordsYet")}</div>`:z.forEach($=>{let x=document.createElement("div");x.className="hud-banned-row";let D=document.createElement("span");D.style.cssText="color: var(--color-ink-error);font-family:var(--font-mono);font-size:13px",D.textContent="\u2298";let L=document.createElement("span");L.style.cssText="flex:1;min-width:0;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all",L.textContent=$;let q=document.createElement("button");q.className="removeKeywordBtn",q.type="button",q.style.cssText="background:transparent;border:none;color: var(--color-ink-accent);font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;cursor:pointer;padding:2px 4px",q.textContent="UNBAN",q.setAttribute("data-keyword",$),x.appendChild(D),x.appendChild(L),x.appendChild(q),y.appendChild(x)})}catch(_){console.error("Fetch blacklist error:",_),showToast(ServerI18n.t("fetchBlacklistError"),!1)}}async function w(){let _=document.getElementById("newKeywordInput"),z=_.value.trim();if(!z){showToast(ServerI18n.t("keywordEmpty"),!1);return}try{let y=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:z})}),A=await y.json();y.ok?(_.value="",b(),window.AdminQuickAction?window.AdminQuickAction.fire({label:A.message||ServerI18n.t("histToastBlacklisted",{keyword:z}),undo:{label:ServerI18n.t("histUndo"),run:async()=>{if(!(await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:z})})).ok)throw new Error("remove failed");b()}}}):showToast(A.message||"Keyword added.",!0)):showToast(A.error||"Failed to add keyword.",!1)}catch(y){console.error("Add keyword error:",y),showToast(ServerI18n.t("addKeywordError"),!1)}}async function g(_){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("histRemoveKwTitle"),subtitle:ServerI18n.t("cfmSubRemoveKeyword"),severity:"warn",bodyText:ServerI18n.t("confirmRemoveKeyword").replace("{keyword}",_),confirmLabel:ServerI18n.t("histRemoveKwConfirm")}))try{let y=await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:_})}),A=await y.json();y.ok?(showToast(A.message||"Keyword removed.",!0),b()):showToast(A.error||"Failed to remove keyword.",!1)}catch(y){console.error("Remove keyword error:",y),showToast(ServerI18n.t("removeKeywordError"),!1)}}function f(){let _=document.getElementById("addKeywordBtn");_&&_.addEventListener("click",w);let z=document.getElementById("newKeywordInput");z&&z.addEventListener("keypress",function(A){(A.key==="Enter"||A.keyCode===13)&&(A.preventDefault(),w())});let y=document.getElementById("blacklistKeywords");y&&y.addEventListener("click",function(A){let m=A.target.closest(".removeKeywordBtn");if(m){let $=m.dataset.keyword;$&&g($)}})}document.addEventListener("admin-panel-rendered",function(){b(),f()}),window.AdminHistory={fetchBlacklist:b}})()});var at=me(()=>{(function(){"use strict";var b="sec-timeline-export",w="danmu.adminHistoryExports.v1",g=10,f={rawText:!0,polls:!0,masked:!1,metadata:!0},_=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],z=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],y={range:"24h",filters:Object.assign({},f),format:"JSON"};function A(){return document.getElementById(b)}function m(){try{return JSON.parse(localStorage.getItem(w)||"[]")}catch{return[]}}function $(h){try{localStorage.setItem(w,JSON.stringify(h.slice(0,g)))}catch{}}function x(h){var T=m();T.unshift(h),$(T)}function D(h){return h?h<1024?h+" B":h<1024*1024?(h/1024).toFixed(1)+" KB":(h/1024/1024).toFixed(1)+" MB":"0 B"}function L(h){try{var T=new Date(h),k=new Date,S=T.toDateString()===k.toDateString();if(S)return ServerI18n.t("historyV2TodayAt",{time:String(T.getHours()).padStart(2,"0")+":"+String(T.getMinutes()).padStart(2,"0")});var B=new Date(k);return B.setDate(k.getDate()-1),T.toDateString()===B.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(T.getHours()).padStart(2,"0")+":"+String(T.getMinutes()).padStart(2,"0")}):T.getMonth()+1+"-"+String(T.getDate()).padStart(2,"0")+" "+String(T.getHours()).padStart(2,"0")+":"+String(T.getMinutes()).padStart(2,"0")}catch{return h||""}}function q(h){if(h==="1h")return 1;if(h==="24h")return 24;if(h==="7d")return 168;if(h==="today"){var T=new Date,k=new Date(T.getFullYear(),T.getMonth(),T.getDate());return Math.max(1,Math.ceil((T-k)/36e5))}return h==="yest"?48:h==="live"?6:24}function O(h){return h.filter(function(T){return!(!y.filters.rawText&&!T.is_poll&&!T.muted&&!T.banned||!y.filters.polls&&T.is_poll||!y.filters.masked&&(T.muted||T.banned))}).map(function(T){if(!y.filters.metadata){var k=Object.assign({},T);return delete k.clientIp,delete k.fingerprint,k}return T})}function I(h){var T=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status"],k=function(H){var M=H==null?"":String(H);return M.indexOf(",")>=0||M.indexOf('"')>=0||M.indexOf(`
`)>=0?'"'+M.replace(/"/g,'""')+'"':M},S=function(H){return H.banned?"banned":H.muted?"muted":H.is_poll?"poll":"ok"},B=h.map(function(H){return[H.timestamp||"",H.nickname||"",H.text||"",H.color?"#"+H.color:"",H.size!=null?H.size:"",H.speed!=null?H.speed:"",H.opacity!=null?H.opacity:"",H.isImage?"true":"false",H.fontInfo&&H.fontInfo.name||"",H.clientIp||"",H.fingerprint||"",S(H)].map(k).join(",")});return[T.join(","),B.join(`\r
`)].filter(Boolean).join(`\r
`)}function C(h){return h.map(function(T,k){var S=new Date(T.timestamp||Date.now()),B=K(S),H=K(new Date(S.getTime()+3e3)),M=(T.nickname?"["+T.nickname+"] ":"")+(T.text||"");return k+1+`
`+B+" --> "+H+`
`+M+`
`}).join(`
`)}function K(h){var T=function(k,S){return String(k).padStart(S||2,"0")};return T(h.getHours())+":"+T(h.getMinutes())+":"+T(h.getSeconds())+","+T(h.getMilliseconds(),3)}function F(h,T){var k=URL.createObjectURL(h),S=document.createElement("a");S.href=k,S.download=T,S.click(),URL.revokeObjectURL(k)}function P(){var h=q(y.range),T=document.getElementById("histv2-go");T&&(T.disabled=!0,T.dataset.busy="1"),fetch("/admin/history?hours="+h+"&limit=10000",{credentials:"same-origin"}).then(function(k){if(!k.ok)throw new Error("http "+k.status);return k.json()}).then(function(k){var S=k&&k.records||[],B=O(S);if(B.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var H=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),M,E;if(y.format==="JSON"){var j=JSON.stringify(B,null,2);E=new Blob([j],{type:"application/json"}),M="danmu-history-"+H+".json"}else y.format==="CSV"?(E=new Blob(["\uFEFF"+I(B)],{type:"text/csv;charset=utf-8;"}),M="danmu-history-"+H+".csv"):(E=new Blob([C(B)],{type:"application/x-subrip;charset=utf-8;"}),M="danmu-history-"+H+".srt");F(E,M),x({name:M,fmt:y.format,size:E.size,when:new Date().toISOString(),count:B.length}),c(),p(B.length,E.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:B.length}),!0)}).catch(function(k){console.error("[history-v2] export failed",k),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:k.message||k}),!1)}).finally(function(){T&&(T.disabled=!1,delete T.dataset.busy)})}function p(h,T){var k=document.getElementById("histv2-estimate");k&&(k.textContent=ServerI18n.t("historyV2Estimate",{count:h||"\u2014",size:T?D(T):"\u2014 MB"}))}function c(){var h=document.getElementById("histv2-recent-list");if(h){var T=m();if(T.length===0){h.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}h.innerHTML=T.map(function(k){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+k.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+o(k.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+o(L(k.when))+" \xB7 "+D(k.size)+"</div></div></div>"}).join("")}}function o(h){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(h):h==null?"":String(h).replace(/[&<>"']/g,function(T){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[T]})}function e(){return _.map(function(h){var T=y.range===h.k;return'<button type="button" class="histv2-chip'+(T?" is-active":"")+'" data-histv2-range="'+h.k+'">'+o(ServerI18n.t(h.labelKey))+(h.k==="live"?" \xB7 "+a():"")+"</button>"}).join("")}function a(){var h=new Date;return String(h.getHours()).padStart(2,"0")+":"+String(h.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function t(){var h=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return h.map(function(T){var k=!!y.filters[T.k];return'<button type="button" class="histv2-toggle'+(k?" is-on":"")+'" data-histv2-toggle="'+T.k+'"><span class="histv2-toggle-mark">'+(k?"\u2713":"\u25CB")+"</span><span>"+o(ServerI18n.t(T.labelKey))+"</span></button>"}).join("")}function s(){return z.map(function(h){var T=y.format===h.k;return'<button type="button" class="histv2-fmt'+(T?" is-selected":"")+'" data-histv2-fmt="'+h.k+'">'+(T?'<span class="histv2-fmt-check">\u2713</span>':"")+(h.badge?'<span class="histv2-fmt-badge">'+o(h.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+h.k+'</div><div class="histv2-fmt-desc">'+o(h.desc)+"</div></button>"}).join("")}function r(){var h=A();h&&(h.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+e()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+t()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+s()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",h.addEventListener("click",n),c(),i())}function n(h){var T=h.target.closest("[data-histv2-range]");if(T){y.range=T.dataset.histv2Range,d(),i();return}var k=h.target.closest("[data-histv2-toggle]");if(k){var S=k.dataset.histv2Toggle;y.filters[S]=!y.filters[S],l(),i();return}var B=h.target.closest("[data-histv2-fmt]");if(B){y.format=B.dataset.histv2Fmt,u(),i();return}var H=h.target.closest("#histv2-go");if(H&&!H.dataset.busy){P();return}}function d(){var h=document.getElementById("histv2-chips");h&&(h.innerHTML=e())}function l(){var h=document.getElementById("histv2-toggles");h&&(h.innerHTML=t())}function u(){var h=document.getElementById("histv2-formats");h&&(h.innerHTML=s())}function i(){i._t&&clearTimeout(i._t),i._t=setTimeout(function(){var h=q(y.range);fetch("/admin/history?hours="+h+"&limit=10000",{credentials:"same-origin"}).then(function(T){return T.ok?T.json():null}).then(function(T){if(!T)return p(0,0);var k=O(T&&T.records||[]),S=y.format==="JSON"?220:y.format==="CSV"?110:80;p(k.length,k.length*S)}).catch(function(){p(0,0)})},250)}function v(){var h=A(),T=document.getElementById("admin-backup-v2-page");if(!h){var k=document.getElementById("settings-grid");if(!k)return;h=document.createElement("div"),h.id=b,h.className="admin-ui-card lg:col-span-2 history-v2-section",k.appendChild(h),r()}T&&T.parentElement&&h.previousElementSibling!==T&&T.parentElement.insertBefore(h,T.nextSibling)}document.addEventListener("admin-panel-rendered",v),document.addEventListener("admin-route-applied",v),window.AdminHistoryV2={refresh:i,state:y}})()});var st=me(()=>{(function(){"use strict";let b="admin-replay-bar";function w(){let f=document.getElementById(b);return f||(document.body?(f=document.createElement("div"),f.id=b,f.className="admin-replay-bar",f.hidden=!0,f.setAttribute("role","status"),f.setAttribute("aria-live","polite"),f.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(f,document.body.firstChild),f):null)}function g(f){let _=w();_&&(_.hidden=!f)}window.AdminReplayBar={ensure:w,setActive:g},document.addEventListener("admin-panel-rendered",w)})()});var it=me(()=>{(function(){"use strict";let b=null;function w(L){window.AdminReplayBar&&window.AdminReplayBar.ensure();let q=document.getElementById("replayPauseBtn"),O=document.getElementById("replayResumeBtn"),I=document.getElementById("replayStopBtn"),C=document.getElementById("replayProgress"),K=(p,c)=>{p&&p.classList.toggle("hidden",!c)},F=L==="playing",P=L==="paused";K(q,F),K(O,P),K(I,F||P),K(C,F||P),!F&&!P&&C&&(C.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(F||P)}function g(){b&&clearInterval(b),b=setInterval(async()=>{try{let L=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!L.ok)return;let q=await L.json(),O=document.getElementById("replayProgress");O&&(O.textContent=ServerI18n.t("replayingProgress").replace("{sent}",q.sent).replace("{total}",q.total)),w(q.state),q.state==="stopped"&&(clearInterval(b),b=null)}catch{}},500)}async function f(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),w("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function _(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),w("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function z(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),w("stopped"),b&&(clearInterval(b),b=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let y=null,A=null,m=0,$=null;function x(){[["replayPauseBtn",f],["replayResumeBtn",_],["replayStopBtn",z]].forEach(function([q,O]){let I=document.getElementById(q);I&&!I.dataset.replayCtrlsBound&&(I.addEventListener("click",O),I.dataset.replayCtrlsBound="1")})}async function D(){try{let L=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!L.ok)return;let q=await L.json();(q.state==="playing"||q.state==="paused")&&(w(q.state),g())}catch{}}window.AdminReplayControls={notifyStarted:function(){w("playing"),g()}},document.addEventListener("admin-panel-rendered",function(){x(),D()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(x,800)})})()});var ot=me(()=>{(function(){"use strict";let b="sec-ratelimit",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(y){return String(y).replace(/[&<>"']/g,function(A){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[A]})},g=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function f(){return`
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
          ${g.map(y=>`
            <div class="admin-ratelimit-row" data-rl-key="${y.key}">
              <div class="admin-ratelimit-row-head">
                <span class="admin-ratelimit-row-label">${w(ServerI18n.t(y.labelKey))}</span>
                <span class="admin-ratelimit-row-env">${y.envLimit}</span>
              </div>
              <div class="admin-ratelimit-row-body">
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLimit")}</span>
                  <input type="number" min="1" max="1000" value="${y.defLimit}" data-rl-limit="${y.key}" />
                </label>
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldWindow")}</span>
                  <select data-rl-window="${y.key}">
                    <option value="10"${y.defWindow===10?" selected":""}>10s</option>
                    <option value="30"${y.defWindow===30?" selected":""}>30s</option>
                    <option value="60"${y.defWindow===60?" selected":""}>60s</option>
                    <option value="300"${y.defWindow===300?" selected":""}>5 min</option>
                    <option value="3600"${y.defWindow===3600?" selected":""}>1 hr</option>
                  </select>
                </label>
                ${y.key==="login"?`
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLockout")}</span>
                  <input type="number" min="60" max="86400" value="${y.defLockout}" data-rl-lockout="${y.key}" title="${ServerI18n.t("ratelimitLockoutFieldTitle")}" />
                </label>`:""}
                <div class="admin-ratelimit-field admin-ratelimit-bar-field">
                  <span>${ServerI18n.t("ratelimitFieldCurrentUsage")}</span>
                  <div class="admin-ratelimit-bar">
                    <div class="admin-ratelimit-bar-fill" data-rl-bar="${y.key}" style="width:18%"></div>
                  </div>
                  <span class="admin-ratelimit-bar-text" data-rl-current="${y.key}">\u2014</span>
                </div>
                <div class="admin-ratelimit-field admin-ratelimit-save-field">
                  <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save" data-rl-save="${y.key}" title="${ServerI18n.t("ratelimitApplyBtnTitle")}">${ServerI18n.t("ratelimitApplyBtn")}</button>
                </div>
              </div>
              <div class="admin-ratelimit-row-foot">
                <svg class="admin-ratelimit-sparkline" data-rl-spark="${y.key}" viewBox="0 0 96 24" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points="" fill="none" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <span class="admin-ratelimit-effective" data-rl-effective="${y.key}">
                  effective_rate = ${y.defLimit} / ${y.defWindow}s = ${(y.defLimit/y.defWindow).toFixed(2)} req/s \xB7 burst = ${Math.round(y.defLimit*1.5)}${y.key==="login"?" \xB7 lock = "+y.defLockout+"s":""}
                </span>
              </div>
              <div class="admin-ratelimit-suggest" data-rl-suggest="${y.key}" hidden>
                <span class="admin-ratelimit-suggest-icon" aria-hidden="true">\u25B2</span>
                <span class="admin-ratelimit-suggest-body">
                  <span class="admin-ratelimit-suggest-title">${ServerI18n.t("ratelimitSuggestTitle")}</span>
                  <span class="admin-ratelimit-suggest-detail" data-rl-suggest-detail>\u2014</span>
                </span>
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest" data-rl-apply="${y.key}">${ServerI18n.t("ratelimitApplySuggestBtn")}</button>
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
      </div>`}function _(y){let A=y.querySelector("#rlEnvExport");setTimeout(async()=>{try{let c=window.AdminBootstrap;c&&typeof c.primeBootstrap=="function"&&await c.primeBootstrap();let o=c&&c.bootstrapSection?c.bootstrapSection("history_stats"):null,e=c&&c.bootstrapSection?c.bootstrapSection("blacklist"):null,a=c&&c.bootstrapSection?c.bootstrapSection("metrics"):null,t=[];t.push(o?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),t.push(e?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),t.push(a?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[s,r,n]=await Promise.all(t),d=o||(s&&s.ok?await s.json():null);if(d){let T=d.stats&&d.stats.last_24h||0,k=d.stats&&d.stats.total||0,S=y.querySelector("[data-rl-sum-hits]"),B=y.querySelector("[data-rl-sum-hits-delta]");S&&(S.textContent=T.toLocaleString()),B&&(B.textContent=ServerI18n.t("ratelimitSumTotal",{n:k.toLocaleString()}))}let l=e||(r&&r.ok?await r.json():null);if(l){let T=Array.isArray(l)?l:l.entries||l.keywords||[],k=y.querySelector("[data-rl-sum-black]");k&&(k.textContent=T.length?ServerI18n.t("ratelimitCountUnit",{n:T.length}):"0")}let u=y.querySelector("[data-rl-sum-viol]"),i=y.querySelector("[data-rl-sum-viol-rate]"),v=y.querySelector("[data-rl-sum-locked]"),h=a||(n&&n.ok?await n.json():null);if(h){let T=h&&h.rate_limits;if(T&&T.totals){let k=T.totals.hits||0,S=T.totals.violations||0,B=T.totals.locked_sources||0;if(u&&(u.textContent=S.toLocaleString()),i){let H=k+S;i.textContent=H>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(S/H*100).toFixed(1)}):"\u2014"}v&&(v.textContent=ServerI18n.t("ratelimitLockedSources",{n:B.toLocaleString()})),g.forEach(({key:H})=>{let M=T[H],E=y.querySelector(`[data-rl-current="${H}"]`);if(E&&M){let j=(M.hits||0).toLocaleString(),U=(M.violations||0).toLocaleString();E.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:j,viol:U})}}),$(T)}else u&&(u.textContent="\u2014"),i&&(i.textContent=ServerI18n.t("ratelimitCountPendingBackend")),v&&(v.textContent="\u2014")}else u&&(u.textContent="\u2014"),i&&(i.textContent=ServerI18n.t("ratelimitCountPendingBackend")),v&&(v.textContent="\u2014");m(h&&h.recent_violations)}catch{}},4500);function m(c){let o=y.querySelector("[data-rl-vbody]"),e=y.querySelector("[data-rl-vcount]");if(!o)return;let a=Array.isArray(c)?c:[];if(e&&(e.textContent=ServerI18n.t("ratelimitViolationsCount",{n:a.length})),a.length===0){o.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let t=r=>{let n=new Date(r*1e3),d=l=>String(l).padStart(2,"0");return`${d(n.getHours())}:${d(n.getMinutes())}:${d(n.getSeconds())}`},s=r=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[r]||"var(--color-text-muted)";o.innerHTML=a.slice(0,30).map(r=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${t(r.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${s(r.scope)}">${(r.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${w(r.ip||"")}</span>
        </div>
      `).join("")}function $(c){c&&g.forEach(({key:o})=>{let e=c[o],a=y.querySelector(`[data-rl-suggest="${o}"]`);if(!a)return;let t=e&&e.suggestion;if(!t){a.hidden=!0;return}let s=a.querySelector("[data-rl-suggest-detail]");s&&(s.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(t.p95_per_second||0).toFixed(2),limit:e.limit||"\u2014",window:e.window||"\u2014",suggLimit:t.suggested_limit,suggWindow:t.suggested_window}));let r=a.querySelector("[data-rl-apply]");r&&(r.dataset.rlSuggestLimit=String(t.suggested_limit),r.dataset.rlSuggestWindow=String(t.suggested_window)),a.hidden=!1})}async function x(){try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let o=await c.json(),e=o&&o.rate_limits;if(!e)return;g.forEach(({key:a})=>{let t=e[a],s=y.querySelector(`[data-rl-current="${a}"]`);if(s&&t){let r=(t.hits||0).toLocaleString(),n=(t.violations||0).toLocaleString();s.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:r,viol:n})}}),$(e)}catch{}}y.addEventListener("click",async c=>{let o=c.target.closest("[data-rl-action]");if(!o)return;let e=o.dataset.rlAction;if(e==="save"){let a=o.dataset.rlSave,t=y.querySelector(`[data-rl-limit="${a}"]`),s=y.querySelector(`[data-rl-window="${a}"]`);if(!t||!s)return;let r=parseInt(t.value,10),n=parseInt(s.value,10);if(!Number.isFinite(r)||!Number.isFinite(n)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let d=o.textContent;o.disabled=!0,o.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let l=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:a,limit:r,window:n})});if(l.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:a.toUpperCase(),limit:r,window:n}),!0),x();else{let u=await l.json().catch(()=>({})),i=u&&u.error||`HTTP ${l.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:i}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{o.disabled=!1,o.textContent=d}return}if(e==="apply-suggest"){let a=o.dataset.rlApply,t=parseInt(o.dataset.rlSuggestLimit,10),s=parseInt(o.dataset.rlSuggestWindow,10);if(!a||!Number.isFinite(t)||!Number.isFinite(s))return;let r=o.textContent;o.disabled=!0,o.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let n=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:a,limit:t,window:s})});if(n.ok){let d=y.querySelector(`[data-rl-limit="${a}"]`),l=y.querySelector(`[data-rl-window="${a}"]`);d&&(d.value=t),l&&(l.value=s),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:a.toUpperCase(),limit:t,window:s}),!0),x(),D()}else{let d=await n.json().catch(()=>({})),l=d&&d.error||`HTTP ${n.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:l}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{o.disabled=!1,o.textContent=r}return}if(e==="export"){let a=[];y.querySelectorAll("[data-rl-limit]").forEach(t=>{let s=t.dataset.rlLimit.toUpperCase();a.push(`${s}_RATE_LIMIT=${t.value}`)}),y.querySelectorAll("[data-rl-window]").forEach(t=>{let s=t.dataset.rlWindow.toUpperCase();a.push(`${s}_RATE_WINDOW=${t.value}`)}),A.textContent=a.join(`
`),A.hidden=!1;try{navigator.clipboard?.writeText(a.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else e==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([t,[s,r]])=>{let n=y.querySelector(`[data-rl-limit="${t}"]`),d=y.querySelector(`[data-rl-window="${t}"]`);n&&(n.value=s),d&&(d.value=r)}),A.hidden=!0,D())});function D(){g.forEach(({key:c})=>{let o=y.querySelector(`[data-rl-limit="${c}"]`),e=y.querySelector(`[data-rl-window="${c}"]`),a=y.querySelector(`[data-rl-lockout="${c}"]`),t=y.querySelector(`[data-rl-effective="${c}"]`);if(!o||!e||!t)return;let s=parseInt(o.value,10)||0,r=parseInt(e.value,10)||1,n=(s/r).toFixed(2),d=Math.round(s*1.5),l=`effective_rate = ${s} / ${r}s = ${n} req/s \xB7 burst = ${d}`;if(c==="login"&&a){let u=parseInt(a.value,10)||0;l+=` \xB7 lock = ${u}s`}t.textContent=l})}y.addEventListener("input",c=>{let o=c.target;!o||!o.dataset.rlLimit&&!o.dataset.rlLockout||D()}),y.addEventListener("change",c=>{let o=c.target;!o||!o.dataset.rlWindow||D()}),D();function L(c,o){if(!c||!Array.isArray(o))return;let e=96,a=24,t=o.length?o:new Array(24).fill(0),s=Math.max(1,...t),r=e/Math.max(1,t.length-1),n=t.map((l,u)=>`${(u*r).toFixed(1)},${(a-2-l/s*(a-4)).toFixed(1)}`).join(" "),d=c.querySelector("polyline");d&&d.setAttribute("points",n)}g.forEach(({key:c})=>{let o=y.querySelector(`[data-rl-spark="${c}"]`);o&&L(o,new Array(24).fill(0))});let q=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,O={allowlist:[],denylist:[]},I={input:y.querySelector("[data-rl-ip-input]"),select:y.querySelector("[data-rl-ip-select]"),addBtn:y.querySelector("[data-rl-ip-add]"),summary:y.querySelector("[data-rl-ip-summary]"),error:y.querySelector("[data-rl-ip-error]"),allowCount:y.querySelector("[data-rl-ip-allow-count]"),denyCount:y.querySelector("[data-rl-ip-deny-count]"),allowBody:y.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:y.querySelector('[data-rl-ip-body="denylist"]')};function C(c){if(I.error){if(!c){I.error.hidden=!0,I.error.textContent="";return}I.error.hidden=!1,I.error.textContent=c}}function K(c){let o=c==="allowlist"?I.allowBody:I.denyBody,e=c==="allowlist"?I.allowCount:I.denyCount;if(!o||!e)return;let a=Array.isArray(O[c])?O[c]:[];if(e.textContent=String(a.length),a.length===0){let t=ServerI18n.t(c==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");o.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:t})}</div>`;return}o.innerHTML=a.map(t=>{let s=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:w(t)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${w(t)}">
          <span class="admin-ratelimit-ip-chip-cidr">${w(t)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${w(t)}" data-rl-ip-remove-kind="${c}" title="${s}" aria-label="${s}">\xD7</button>
        </div>
      `}).join("")}function F(){if(K("allowlist"),K("denylist"),I.summary){let c=(O.allowlist||[]).length,o=(O.denylist||[]).length;I.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:c,deny:o})}}async function P(){try{let c=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!c.ok){I.summary&&(I.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:c.status}));return}let o=await c.json();o&&typeof o=="object"&&(O={allowlist:Array.isArray(o.allowlist)?o.allowlist:[],denylist:Array.isArray(o.denylist)?o.denylist:[]},F())}catch{I.summary&&(I.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function p(c,{toastLabel:o}={}){try{let e=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(e.ok){let s=await e.json();return O={allowlist:Array.isArray(s.allowlist)?s.allowlist:[],denylist:Array.isArray(s.denylist)?s.denylist:[]},F(),C(""),o&&typeof showToast=="function"&&showToast(o,!0),!0}let a=await e.json().catch(()=>({})),t=a&&a.error||`HTTP ${e.status}`;return C(t),!1}catch{return C(ServerI18n.t("ratelimitNetworkError")),!1}}I.addBtn&&I.addBtn.addEventListener("click",async()=>{if(!I.input||!I.select)return;let c=(I.input.value||"").trim();if(!c){C(ServerI18n.t("ratelimitIpRequiredError"));return}if(!q.test(c)){C(ServerI18n.t("ratelimitIpFormatError"));return}let o=I.select.value==="denylist"?"denylist":"allowlist",e=Array.from(new Set([...O[o]||[],c]));await p({[o]:e},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(o==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:c})})&&(I.input.value="")}),I.input&&(I.input.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),I.addBtn&&I.addBtn.click())}),I.input.addEventListener("input",()=>{I.error&&!I.error.hidden&&C("")})),y.addEventListener("click",async c=>{let o=c.target.closest("[data-rl-ip-remove]");if(!o)return;let e=o.dataset.rlIpRemove,a=o.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",t=(O[a]||[]).filter(s=>s!==e);await p({[a]:t},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(a==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:e})})}),P(),setTimeout(async()=>{try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let o=await c.json(),e=o&&o.rate_limits;if(!e)return;g.forEach(({key:a})=>{let t=e[a]&&(e[a].bucket_history||e[a].history);if(Array.isArray(t)&&t.length){let s=y.querySelector(`[data-rl-spark="${a}"]`);s&&L(s,t.slice(-24))}})}catch{}},5500)}function z(){let y=document.getElementById("settings-grid");if(!y||document.getElementById(b))return;y.insertAdjacentHTML("beforeend",f());let A=document.getElementById(b);A&&_(A)}document.addEventListener("admin-panel-rendered",z),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&z()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),z()})})()});var rt=me(()=>{(function(){"use strict";let b="sec-viewer-theme",w="danmu.viewerTheme.v1",g=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function f(){return`
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
      </div>`}let _=/^#[0-9a-f]{6}$/i,z=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function y($){let x={};return!$||typeof $!="object"||(["bg","primary","hero"].forEach(D=>{typeof $[D]=="string"&&_.test($[D])&&(x[D]=$[D])}),($.mode==="dark"||$.mode==="light")&&(x.mode=$.mode),typeof $.font=="string"&&/^[\w .-]{1,64}$/.test($.font)&&(x.font=$.font),($.logo===null||typeof $.logo=="string"&&z.test($.logo))&&(x.logo=$.logo)),x}function A($){let x={...g[0],logo:null};try{let l=localStorage.getItem(w);l&&(x={...x,...y(JSON.parse(l))})}catch{}let D="default";function L(){try{localStorage.setItem(w,JSON.stringify(x))}catch{}}function q(l){let u=/^#?([0-9a-f]{6})$/i.exec(l);if(!u)return[0,0,0];let i=parseInt(u[1],16);return[i>>16&255,i>>8&255,i&255]}function O([l,u,i]){let v=[l,u,i].map(h=>(h/=255,h<=.03928?h/12.92:Math.pow((h+.055)/1.055,2.4)));return .2126*v[0]+.7152*v[1]+.0722*v[2]}function I(l,u){let i=O(q(l)),v=O(q(u)),[h,T]=i>v?[i,v]:[v,i];return(h+.05)/(T+.05)}function C(l){return l>=7?{label:"AAA",cls:"is-good"}:l>=4.5?{label:"AA",cls:"is-ok"}:l>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function K(){let l=$.querySelector("[data-vt-presets]");l.innerHTML="",g.forEach(u=>{let i=document.createElement("button");i.type="button",i.className="admin-vt-preset"+(D===u.id?" is-active":""),i.innerHTML=`
          <div class="swatch" style="background:${u.bg}">
            <span style="background:${u.primary}"></span>
            <span style="background:${u.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(u.nameKey)}</div>
          <div class="mode">${ServerI18n.t(u.mode==="dark"?"lbDark":"lbLight")}</div>
        `,i.addEventListener("click",()=>{x={...x,...u},D=u.id,L(),d()}),l.appendChild(i)})}function F(){$.querySelectorAll("[data-vt-mode-btn]").forEach(l=>{l.classList.toggle("is-active",x.mode===l.dataset.vtModeBtn)})}function P(){let l=$.querySelector("[data-vt-colors]"),u=x.mode==="dark"?"#F8FAFC":"#0F172A",i=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:u,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:x.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:x.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];l.innerHTML=i.map(v=>{let h=I(x[v.key],v.vs),T=C(h);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${x[v.key]}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${v.label}</span>
                <span class="grade ${T.cls}">${T.label} \xB7 ${h.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${x[v.key]}" data-vt-color="${v.key}" />
                <input type="text" value="${x[v.key]}" data-vt-hex="${v.key}" spellcheck="false" />
                <span class="vs">vs ${v.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function p(){let l=$.querySelector("[data-vt-logo-preview]"),u=$.querySelector(".hint-empty"),i=$.querySelector("[data-vt-logo-actions]");x.logo?(l.src=x.logo,l.hidden=!1,u.style.display="none",i.hidden=!1):(l.hidden=!0,u.style.display="",i.hidden=!0)}function c(){let l=$.querySelector("[data-vt-font]");l.value=x.font;let u=$.querySelector("[data-vt-font-specimen]");u.style.fontFamily=x.font}function o(){let l=x.mode==="dark"?"#F8FAFC":"#0F172A",u=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(l,x.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(x.primary,x.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(x.hero,x.bg)}];$.querySelector("[data-vt-contrast]").innerHTML=u.map(i=>{let v=C(i.ratio);return`<span class="vt-contrast-chip ${v.cls}">${i.lbl} \xB7 ${v.label} ${i.ratio.toFixed(1)}</span>`}).join("")}function e(){let l=$.querySelector("[data-vt-stage]"),u=x.mode==="dark"?"#F8FAFC":"#0F172A";l.style.setProperty("--vt-bg",x.bg),l.style.setProperty("--vt-primary",x.primary),l.style.setProperty("--vt-hero",x.hero),l.style.setProperty("--vt-fg",u),l.style.fontFamily=x.font;let i=$.querySelector("[data-vt-preview-logo]");x.logo?i.innerHTML=`<img src="${x.logo}" style="max-height:40px" />`:i.textContent="Danmu Fire"}let a="auto",t="auto";function s(){$.querySelectorAll("[data-vt-theme-btn]").forEach(l=>{l.classList.toggle("is-active",l.dataset.vtThemeBtn===a)}),$.querySelectorAll("[data-vt-lang-btn]").forEach(l=>{l.classList.toggle("is-active",l.dataset.vtLangBtn===t)})}async function r(){try{let l=await fetch("/get_settings",{credentials:"same-origin"});if(!l.ok)return;let u=await l.json(),i=u&&u.ViewerThemeMode&&u.ViewerThemeMode[1],v=u&&u.ViewerLangMode&&u.ViewerLangMode[1];typeof i=="string"&&(a=i),typeof v=="string"&&(t=v),s()}catch{}}async function n(l,u){if(window.csrfFetch)try{let i=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:l,value:u,index:1})});if(!i.ok)throw new Error(i.status);window.showToast&&window.showToast(`${l} = ${u}`,!0)}catch(i){console.warn("[admin-viewer-theme] force-mode update failed:",i),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:l}),!1)}}function d(){K(),F(),P(),p(),c(),o(),e(),s()}$.addEventListener("input",l=>{if(l.target.matches("[data-vt-color]")){let u=l.target.dataset.vtColor;x[u]=l.target.value,D="custom",L(),d()}else if(l.target.matches("[data-vt-hex]")){let u=l.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(l.target.value)&&(x[u]=l.target.value,D="custom",L(),d())}else l.target.matches("[data-vt-font]")&&(x.font=l.target.value,L(),d())}),$.addEventListener("change",l=>{if(l.target.matches("[data-vt-logo-input]")){let u=l.target.files&&l.target.files[0];if(!u)return;if(u.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let i=new FileReader;i.onload=()=>{x.logo=String(i.result||""),L(),d()},i.readAsDataURL(u)}}),$.addEventListener("click",l=>{let u=l.target.closest("[data-vt-mode-btn]");if(u){x.mode=u.dataset.vtModeBtn,D="custom",L(),d();return}let i=l.target.closest("[data-vt-theme-btn]");if(i){a=i.dataset.vtThemeBtn,s(),n("ViewerThemeMode",a);return}let v=l.target.closest("[data-vt-lang-btn]");if(v){t=v.dataset.vtLangBtn,s(),n("ViewerLangMode",t);return}if(l.target.closest("[data-vt-logo-remove]")){x.logo=null,L(),d();return}let T=l.target.closest("[data-vt-device-btn]");if(T){$.querySelectorAll("[data-vt-device-btn]").forEach(S=>S.classList.toggle("is-active",S===T)),$.querySelector("[data-vt-frame]").dataset.device=T.dataset.vtDeviceBtn;return}let k=l.target.closest("[data-vt-action]");k&&k.dataset.vtAction==="reset"&&(x={...g[0],logo:null},D="default",L(),d())}),d(),r()}document.addEventListener("click",function($){let x=$.target.closest("[data-vt-jump]");if(!x)return;let D=x.dataset.vtJump;if(D){$.preventDefault();try{location.hash="#/"+D}catch{}}});function m(){let $=document.getElementById("settings-grid");if(!$||document.getElementById(b))return;$.insertAdjacentHTML("beforeend",f());let x=document.getElementById(b);x&&A(x)}document.addEventListener("admin-panel-rendered",m),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&m()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),m()})})()});var dt=me(()=>{(function(){"use strict";let b="sec-system-overview";function w(){return`
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
      </div>`}function g(A){let m=Math.floor(A/86400),$=Math.floor(A%86400/3600),x=Math.floor(A%3600/60);return m>0?`${m}d ${String($).padStart(2,"0")}h ${String(x).padStart(2,"0")}m`:$>0?`${$}h ${String(x).padStart(2,"0")}m`:`${x}m ${String(A%60).padStart(2,"0")}s`}function f(A,m,$){let x=document.querySelector(`[data-m="${A}"]`);if(!x)return;let D=x.querySelector("[data-m-v]");D&&(D.textContent=m);let L=x.querySelector("[data-m-sub]");L&&(L.textContent=$||"")}function _(A){let m=document.querySelector("[data-soh-banner-dot]"),$=document.querySelector("[data-soh-banner-title]"),x=document.querySelector("[data-soh-chip]"),L=!(A.queue_size!=null&&A.queue_capacity!=null&&A.queue_size>=A.queue_capacity);x&&x.classList.toggle("is-warn",!L),m&&m.classList.toggle("is-warn",!L),$&&($.textContent=L?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function z(){(async()=>{try{let $=await window.csrfFetch("/admin/metrics");if(!$.ok)return;let x=await $.json(),D=P=>Array.isArray(P)&&P.length?P[P.length-1]:null,L=x.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-x.server_started_at)):0;f("uptime",L>0?g(L):"\u2014","");let q=null;try{let P=await fetch("/admin/audience/stats",{credentials:"same-origin"});P.ok&&(q=(await P.json()).total_live)}catch{}let O=x.ws_clients??0;f("conn",String(O+(q||0)),q==null?ServerI18n.t("sohConnOverlaysOnly",{n:O}):ServerI18n.t("sohConnBreakdown",{overlays:O,viewers:q}));let I=D(x.mem_series||[]),C=x.mem_total_mb?(x.mem_total_mb/1024).toFixed(0):null;f("ram",I!=null?`${Number(I).toFixed(0)}%`:"\u2014",C?ServerI18n.t("sohMemorySub",{total:C}):"");let K=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";f("ver",`v${K}`,ServerI18n.t("sohVersionSub")),_(x);let F=document.querySelector('[data-soh-sub="integrations"]');F&&(F.textContent=ServerI18n.t("sohLinkExtSub",{webhooks:x.webhooks_count??0,plugins:x.plugins_loaded??0}));try{let P=await window.csrfFetch("/admin/ws-auth");if(P.ok){let p=await P.json(),c=document.querySelector('[data-soh-sub="security"]');c&&(c.textContent=p.require_token?ServerI18n.t("sohLinkSecurityOn"):ServerI18n.t("sohLinkSecurityOff"))}}catch{}}catch{}})();let A=document.getElementById(b);if(!A)return;let m=()=>{let $=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";A.querySelectorAll("[data-soh-mode]").forEach(x=>{let D=x.dataset.sohMode===$;x.classList.toggle("is-active",D),x.setAttribute("aria-pressed",D?"true":"false")})};m(),document.addEventListener("admin:theme-mode",m),A.addEventListener("click",function($){let x=$.target.closest("[data-soh-mode]");if(x){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(x.dataset.sohMode),m();return}let D=$.target.closest("[data-soh-action]");if(!(!D||D.disabled)){if(D.dataset.sohAction==="copy-url"){let L=document.getElementById("sysoPublicUrl")?.textContent||"";navigator.clipboard?.writeText(L).then(()=>window.showToast&&window.showToast(ServerI18n.t("sohCopied"),!0),()=>window.showToast&&window.showToast(ServerI18n.t("sohCopyFailed"),!1));return}if(D.dataset.sohAction==="show-qr"){let L=A.querySelector("[data-soh-qr]");if(!L)return;if(!L.hidden){L.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(q=>q.ok?q.json():Promise.reject(q)).then(q=>{L.innerHTML=q.svg,L.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function y(){let A=document.getElementById("settings-grid");!A||document.getElementById(b)||(A.insertAdjacentHTML("beforeend",w()),document.getElementById(b)&&z())}document.addEventListener("admin-panel-rendered",y),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&y()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),y()})})()});var lt=me(()=>{(function(){"use strict";let b="sec-polls",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(z){return String(z).replace(/[&<>"']/g,function(y){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[y]})};function g(){return`
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
  `}function f(){let z=document.getElementById("sec-polls");if(!z)return;let y=z.querySelector("[data-poll-queue]"),A=z.querySelector("[data-poll-editor]"),m=z.querySelector("[data-poll-view-builder]"),$=z.querySelector("[data-poll-view-live]"),x=z.querySelector("[data-poll-view-results]"),D="danmu.adminPollQueue.v2";function L(){return"q_"+Math.random().toString(36).slice(2,8)}function q(){return"o_"+Math.random().toString(36).slice(2,6)}function O(W){return{id:q(),label:"",img:""}}function I(){return{id:L(),text:"",timer:90,multi:!1,crop:"16:9",image_url:"",server_q_id:"",options:[O("A"),O("B")]}}let C=null,K="builder",F=null,P=0,p={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},c=null,o=[];try{let W=localStorage.getItem(D);if(W){let Z=JSON.parse(W);Array.isArray(Z)?o=Z:Z&&Array.isArray(Z.queue)&&(o=Z.queue)}}catch{}(!Array.isArray(o)||o.length===0)&&(o=[I()]),o.forEach(W=>{typeof W.image_url!="string"&&(W.image_url=""),typeof W.server_q_id!="string"&&(W.server_q_id="")});let e=o[0].id,a="manual",t=null,s=null,r={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function n(){try{localStorage.setItem(D,JSON.stringify({queue:o,activeId:e,mode:a}))}catch{}}function d(W){return o.find(Z=>Z.id===W)}function l(W,Z){let te=d(W);te&&Object.assign(te,Z)}function u(W,Z,te){let oe=W.slice(),[Q]=oe.splice(Z,1);return oe.splice(te,0,Q),oe}function i(){y.innerHTML="",o.forEach((W,Z)=>{let te=document.createElement("div");te.className="admin-poll-qrow",W.id===e&&te.classList.add("is-active");let oe=r.active&&r.currentIndex===Z;oe&&te.classList.add("is-running"),te.dataset.qid=W.id,te.draggable=!0;let Q=!!W.image_url||W.options.some(se=>se.img);te.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${Z+1}</span>
            <div class="info">
              <div class="text">${w(W.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:W.options.length})} \xB7 ${W.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):W.timer+"s"} \xB7 ${Q?ServerI18n.t("pollBuilderHasImageCrop",{crop:W.crop}):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${oe?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":W.id===e?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,y.appendChild(te)})}function v(){let W=d(e)||o[0];if(!W){A.innerHTML="";return}let Z=o.indexOf(W);A.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${Z+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:Z+1})}</span>
            </div>
            <span class="progress">Q${Z+1} / ${o.length}</span>
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
                <input type="text" data-ed-opt-text="${te.id}" value="${w(te.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+oe)})}" maxlength="100" />
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
        `}function h(){C&&C.active?K="live":F?K="results":K="builder",z.dataset.pollView=K,m.hidden=K!=="builder",$.hidden=K!=="live",x.hidden=K!=="results",i(),v(),Y(),K==="live"?H():K==="results"&&E(),K==="live"?T():k()}function T(){c||(c=setInterval(()=>{K!=="live"||!C||!C.active||M()},1e3))}function k(){c&&(clearInterval(c),c=null)}function S(W,Z){if(!W||!W.time_limit_seconds)return null;if(!Z)return W.time_limit_seconds;let te=Date.now()/1e3-Z;return Math.max(0,Math.round(W.time_limit_seconds-te))}function B(W){if(W==null)return"\u221E";let Z=String(Math.floor(W/60)).padStart(2,"0"),te=String(W%60).padStart(2,"0");return`${Z}:${te}`}function H(){if(!C||!C.questions||C.questions.length===0){$.innerHTML="";return}let W=C.current_index>=0?C.current_index:0,Z=C.questions.length,te=C.questions[W],oe=S(te,C.started_at),Q=te.time_limit_seconds||0,se=Q>0&&oe!=null?Math.max(0,Math.min(1,oe/Q)):1,de=Q>0&&oe!=null&&oe<=Math.max(5,Q*.15),ue=te.options.reduce((ae,re)=>ae+(re.count||0),0),fe=[...te.options].sort((ae,re)=>(re.count||0)-(ae.count||0)),ge=fe[0]?fe[0].count:0,G=C.questions[W+1],X=110,ee=X/2-6,J=2*Math.PI*ee,ie=J*se;$.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${w((C.poll_id||"").slice(-6))}
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
                    <div class="mmss ${de?"is-low":""}" data-live-mmss>${oe==null?ServerI18n.t("pollBuilderNoTimeLimit"):B(oe)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:W+1})}</div>
                <div class="text">${w(te.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${fe.map(ae=>{let re=ue>0?ae.count/ue*100:0,le=(ae.count||0)>0&&ae.count===ge;return`
                    <div class="admin-polls-live-bar ${le?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${w(ae.key)}</span>
                        <span class="lbl">${w(ae.text||"")}</span>
                        ${le?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${re.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:ae.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${re.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${ue}</strong>`})}</span>
                ${G?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${w(G.text||"")}</em>`})}</span>`:""}
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
                        <span class="t">${w(ae.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
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
                    <label class="admin-polls-live-toggle ${p[ae.k]?"is-on":""}" data-live-toggle="${ae.k}">
                      <span class="lbl">${ae.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function M(){if(!C||!C.active)return;let W=C.current_index>=0?C.current_index:0,Z=C.questions[W];if(!Z)return;let te=S(Z,C.started_at),oe=Z.time_limit_seconds||0,Q=$.querySelector("[data-live-mmss]"),se=$.querySelector("[data-live-ring]");if(Q&&(Q.textContent=te==null?ServerI18n.t("pollBuilderNoTimeLimit"):B(te),Q.classList.toggle("is-low",oe>0&&te!=null&&te<=Math.max(5,oe*.15))),se&&oe>0&&te!=null){let de=+se.getAttribute("r"),ue=2*Math.PI*de,fe=Math.max(0,Math.min(1,te/oe));se.setAttribute("stroke-dasharray",`${ue*fe} ${ue}`);let ge=te<=Math.max(5,oe*.15);se.setAttribute("stroke",ge?"var(--hud-crimson)":"var(--color-primary)"),se.style.filter=`drop-shadow(0 0 4px ${ge?"var(--hud-crimson)":"var(--color-primary)"})`}p.autoAdvance&&oe>0&&te===0&&(W>=C.questions.length-1?V():R())}function E(){let W=F;if(!W||!W.questions||W.questions.length===0){x.innerHTML="";return}let Z=W.questions.length,te=Math.max(0,Math.min(P,Z-1)),oe=W.questions[te],Q=oe.options.reduce((J,ie)=>J+(ie.count||0),0),se=[...oe.options].sort((J,ie)=>(ie.count||0)-(J.count||0)),de=se[0]||{key:"-",text:"\u2014",count:0},ue=se[1],fe=Q>0?de.count/Q*100:0,ge=ue?Math.max(0,de.count-ue.count):de.count,G=W.started_at||0,X=W.ended_at||Date.now()/1e3,ee=Math.max(0,Math.round(X-G));x.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${Z>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${W.questions.map((J,ie)=>`
                    <button type="button" role="tab" class="${ie===te?"is-active":""}" data-results-tab="${ie}">
                      Q${ie+1}<span class="t">${w((J.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${te+1}/${Z} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:B(ee),n:Q})}</span>
                </div>
                <div class="text">${w(oe.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${w(de.key)}</div>
                <div class="info">
                  <div class="lbl">${w(de.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:de.count})} \xB7 ${fe.toFixed(1)}% ${ue?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:ge}):""}</div>
                </div>
                <div class="pct">${fe.toFixed(0)}<span>%</span></div>
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
                        <span class="tag">${w(J.key)}</span>
                        <span class="lbl">${w(J.text||"")}</span>
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
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${oe.time_limit_seconds?B(oe.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${W.started_at?new Date(W.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${W.ended_at?new Date(W.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${B(ee)}</span></div>
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
`)}function U(W,Z,te){let oe=new Blob([te],{type:Z}),Q=document.createElement("a");Q.href=URL.createObjectURL(oe),Q.download=W,document.body.appendChild(Q),Q.click(),setTimeout(()=>{URL.revokeObjectURL(Q.href),Q.remove()},0)}z.addEventListener("click",W=>{let Z=W.target.closest("[data-live-action]");if(Z){let se=Z.dataset.liveAction;se==="advance"?R():se==="end"?V():se==="pause"&&(p.autoAdvance=!1,H());return}let te=W.target.closest("[data-live-toggle]");if(te){let se=te.dataset.liveToggle;se in p&&(p[se]=!p[se],te.classList.toggle("is-on",p[se]));return}let oe=W.target.closest("[data-results-tab]");if(oe){P=+oe.dataset.resultsTab||0,E();return}let Q=W.target.closest("[data-results-action]");if(Q){let se=Q.dataset.resultsAction,de=F;if(!de)return;if(se==="copy"){let ue=de.questions.map((fe,ge)=>{let G=fe.options.reduce((ee,J)=>ee+(J.count||0),0),X=fe.options.map(ee=>{let J=G>0?(ee.count/G*100).toFixed(1):"0.0";return`  ${ee.key}. ${ee.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:ee.count})} (${J}%)`});return`Q${ge+1}: ${fe.text}
${X.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(ue)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else se==="csv"?U(`poll_${(de.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",j(de)):se==="json"?U(`poll_${(de.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(de,null,2)):se==="reset"&&(F=null,P=0,h());return}}),y.addEventListener("dragstart",W=>{let Z=W.target.closest(".admin-poll-qrow");Z&&(t=Z.dataset.qid,Z.classList.add("is-dragging"))}),y.addEventListener("dragend",W=>{let Z=W.target.closest(".admin-poll-qrow");Z&&Z.classList.remove("is-dragging"),t=null,y.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over"))}),y.addEventListener("dragover",W=>{W.preventDefault();let Z=W.target.closest(".admin-poll-qrow");!Z||!t||Z.dataset.qid===t||(y.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over")),Z.classList.add("is-drag-over"))}),y.addEventListener("drop",W=>{W.preventDefault();let Z=W.target.closest(".admin-poll-qrow");if(!Z||!t)return;let te=o.findIndex(Q=>Q.id===t),oe=o.findIndex(Q=>Q.id===Z.dataset.qid);te<0||oe<0||te===oe||(o=u(o,te,oe),n(),h())}),y.addEventListener("click",W=>{let Z=W.target.closest(".admin-poll-qrow");Z&&(e=Z.dataset.qid,n(),h())}),A.addEventListener("input",W=>{let Z=d(e);if(Z){if(W.target.matches("[data-ed-text]")){Z.text=W.target.value,n(),i();return}if(W.target.matches("[data-ed-opt-text]")){let te=W.target.dataset.edOptText,oe=Z.options.find(Q=>Q.id===te);oe&&(oe.label=W.target.value,n(),i())}}}),A.addEventListener("change",W=>{let Z=d(e);Z&&(W.target.matches("[data-ed-timer]")?(Z.timer=+W.target.value,n(),i()):W.target.matches("[data-ed-multi]")&&(Z.multi=W.target.checked,n()))}),A.addEventListener("click",async W=>{let Z=d(e);if(!Z)return;let te=W.target.closest("[data-ed-crop]");if(te){Z.crop=te.dataset.edCrop,n(),v();return}let oe=W.target.closest("[data-ed-opt-img]");if(oe){let de=Z.options.find(ue=>ue.id===oe.dataset.edOptImg);de&&(de.img=de.img?"":"placeholder",n(),v());return}let Q=W.target.closest("[data-ed-opt-remove]");if(Q){let de=Q.dataset.edOptRemove;Z.options.length>2&&(Z.options=Z.options.filter(ue=>ue.id!==de),n(),v(),i());return}if(W.target.closest("[data-ed-opt-add]")){Z.options.length<6&&(Z.options.push(O()),n(),v(),i());return}let se=W.target.closest("[data-ed-action]");if(se)if(se.dataset.edAction==="remove-q"){if(o.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let ue=o.findIndex(fe=>fe.id===e);o=o.filter(fe=>fe.id!==e),e=o[Math.min(ue,o.length-1)].id,n(),h()}}else if(se.dataset.edAction==="upload-q-image"){let de=A.querySelector("[data-ed-q-image-input]");de&&de.click()}else se.dataset.edAction==="remove-q-image"&&(Z.image_url="",n(),v(),i())}),A.addEventListener("change",async W=>{if(!W.target.matches("[data-ed-q-image-input]"))return;let Z=W.target.files&&W.target.files[0];if(!Z)return;let te=d(e);if(!te)return;if(!r.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),W.target.value="";return}if(!te.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),W.target.value="";return}if(Z.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),W.target.value="";return}let oe=new FormData;oe.append("file",Z);try{let Q=await csrfFetch(`/admin/poll/${encodeURIComponent(r.pollId)}/upload-image/${encodeURIComponent(te.server_q_id)}`,{method:"POST",body:oe}),se=await Q.json().catch(()=>({}));if(!Q.ok)throw new Error(se.error||"upload failed");te.image_url=se.image_url,n(),v(),i(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(Q){showToast&&showToast(String(Q.message||Q),!1)}finally{W.target.value=""}}),A.addEventListener("dragstart",W=>{let Z=W.target.closest(".admin-poll-opt");Z&&(s=Z.dataset.oid,Z.classList.add("is-dragging"))}),A.addEventListener("dragend",W=>{A.querySelectorAll(".is-dragging, .is-drag-over").forEach(Z=>Z.classList.remove("is-dragging","is-drag-over")),s=null}),A.addEventListener("dragover",W=>{let Z=W.target.closest(".admin-poll-opt");!Z||!s||Z.dataset.oid===s||(W.preventDefault(),A.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over")),Z.classList.add("is-drag-over"))}),A.addEventListener("drop",W=>{W.preventDefault();let Z=W.target.closest(".admin-poll-opt"),te=d(e);if(!Z||!s||!te)return;let oe=te.options.findIndex(se=>se.id===s),Q=te.options.findIndex(se=>se.id===Z.dataset.oid);oe<0||Q<0||oe===Q||(te.options=u(te.options,oe,Q),n(),v())}),z.addEventListener("click",W=>{if(W.target.closest("[data-poll-action='add']")){let se=I();o.push(se),e=se.id,n(),h();return}let te=W.target.closest("[data-poll-template]");if(te){let se=I(),de=te.dataset.pollTemplate,ue=["A","B","C","D","E"],fe=ge=>ge.map((G,X)=>{let ee=O(ue[X]);return ee.text=G,ee});de==="yesno"?(se.text="",se.options=fe([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):de==="stars"?(se.timer=60,se.options=fe(["1","2","3","4","5"])):de==="four"&&(se.options=fe(["","","",""])),o.push(se),e=se.id,n(),h();return}let oe=W.target.closest("[data-poll-mode]");oe&&(a=oe.dataset.pollMode,z.querySelectorAll("[data-poll-mode]").forEach(se=>se.classList.toggle("is-active",se===oe)),n());let Q=W.target.closest("[data-poll-session-action]");if(Q){let se=Q.dataset.pollSessionAction;se==="start"?N():se==="advance"?R():se==="end"&&V()}});function Y(){let W=z.querySelector("[data-poll-session]");if(!W)return;let Z=W.querySelector("[data-poll-session-status]"),te=W.querySelector("[data-poll-session-action='start']"),oe=W.querySelector("[data-poll-session-action='advance']"),Q=W.querySelector("[data-poll-session-action='end']");if(!r.pollId||!r.active){Z.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,te.hidden=!1,oe.hidden=!0,Q.hidden=!0;return}let se=o.length,de=r.currentIndex+1,ue=r.currentIndex>=se-1;Z.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${de} / ${se}</span>`,te.hidden=!0,oe.hidden=ue,Q.hidden=!1}async function N(){try{let W=o.map((de,ue)=>{let fe=(de.text||"").trim(),ge=de.options.map(G=>(G.label||"").trim()).filter(Boolean);if(!fe)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:ue+1}));if(ge.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:ue+1}));return{text:fe,options:ge,time_limit_seconds:de.timer&&de.timer>0?de.timer:null}});if(!W.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let Z=(()=>{let de=o.map(ue=>Number(ue.timer)||0).filter(ue=>ue>0);return de.length?Math.round(de.reduce((ue,fe)=>ue+fe,0)/de.length):null})(),te=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:W,mode:a||"manual",default_duration_s:Z})}),oe=await te.json().catch(()=>({}));if(!te.ok)throw new Error(oe.error||ServerI18n.t("pollBuilderErrCreateFailed"));r.pollId=oe.poll_id,(oe.questions||[]).forEach((de,ue)=>{o[ue]&&(o[ue].server_q_id=de.id)}),n();let Q=await csrfFetch("/admin/poll/start",{method:"POST"}),se=await Q.json().catch(()=>({}));if(!Q.ok)throw new Error(se.error||ServerI18n.t("pollBuilderErrStartFailed"));r.active=!0,r.currentIndex=se.current_index??0,C=se,F=null,h(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),ne()}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function R(){try{let W=await csrfFetch("/admin/poll/advance",{method:"POST"}),Z=await W.json().catch(()=>({}));if(!W.ok)throw new Error(Z.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));r.currentIndex=Z.current_index,r.active=!!Z.active,C=Z,h(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:r.currentIndex+1}),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function V(){try{let W=C,Z=await csrfFetch("/admin/poll/end",{method:"POST"});if(!Z.ok){let te=await Z.json().catch(()=>({}));throw new Error(te.error||ServerI18n.t("pollBuilderErrEndFailed"))}W&&W.questions&&(F={...W,ended_at:Date.now()/1e3},P=W.current_index>=0?W.current_index:0),r.active=!1,r.pollId="",r.currentIndex=-1,C=null,r.statusTimer&&(clearInterval(r.statusTimer),r.statusTimer=null),h(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}function ne(){r.statusTimer&&clearInterval(r.statusTimer),r.statusTimer=setInterval(async()=>{if(r.pollId)try{let W=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!W.ok)return;let Z=await W.json();if(Z.poll_id!==r.pollId)return;r.active=!!Z.active,r.currentIndex=Z.current_index??-1;let te=!!(C&&C.active);C=Z,Z.active||(clearInterval(r.statusTimer),r.statusTimer=null,te&&Z.questions&&!F&&(F={...Z,ended_at:Date.now()/1e3},P=Z.current_index>=0?Z.current_index:0),C=null),K==="live"?H():h()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{r.statusTimer&&(clearInterval(r.statusTimer),r.statusTimer=null),k()}),h()}function _(){let z=document.getElementById("settings-grid");!z||document.getElementById(b)||(z.insertAdjacentHTML("beforeend",g()),document.getElementById(b)&&f())}document.addEventListener("admin-panel-rendered",_),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&_()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),_()})})()});var ct=me(()=>{(function(){"use strict";let f="sec-live-feed",_=[],z=[],y=!1,A="",m="all",$=0,x=null,D=null,L=null,q=null;function O(N){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(N):String(N??"").replace(/[&<>"']/g,function(R){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[R]})}function I(N,R){return N?N.length>R?N.slice(0,R)+"\u2026":N:""}function C(N){let R=new Date(N),V=ne=>String(ne).padStart(2,"0");return`${V(R.getHours())}:${V(R.getMinutes())}:${V(R.getSeconds())}`}function K(N){if(!A)return!0;let R=A.toLowerCase(),V=N.data;return V.text&&V.text.toLowerCase().includes(R)||V.nickname&&V.nickname.toLowerCase().includes(R)||V.fingerprint&&V.fingerprint.toLowerCase().includes(R)||V.layout&&V.layout.toLowerCase().includes(R)}function F(N){return m==="muted"?!!N.muted:m==="sensitive"?!!N.sensitive:m==="queued"?N.data&&N.data.status==="queued":!0}function P(){m="all",document.querySelectorAll(".admin-live-feed-tab").forEach(N=>N.classList.toggle("is-active",N.dataset.tab==="all"))}function p(){A="",L&&(L.value=""),P()}function c(N,R){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let ne;return N==="paused"?ne=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:R||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):N==="no-result"?ne=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:R||ServerI18n.t("lfNoMatchDesc")}):ne=window.AdminEmpty.render("messages"),ne.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),ne.setAttribute("data-empty-kind","live-feed"),ne}let V=document.createElement("div");return V.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",V.setAttribute("data-empty-kind","live-feed"),V.innerHTML=`<div class="admin-proto-placeholder-title">${O(N)}</div><div class="admin-proto-placeholder-body">${O(R||"")}</div>`,V}function o(N){let R=N.data,V=document.createElement("div");V.className="admin-live-feed-row"+(N.muted?" is-muted":""),V.dataset.id=N.id,V.tabIndex=-1;let ne=document.createElement("span");if(ne.className="admin-live-feed-time",ne.textContent=C(N.ts),V.appendChild(ne),(R.layout||"scroll").toLowerCase()!=="scroll"){let se=document.createElement("span");se.className="admin-ui-chip admin-live-feed-tag",se.textContent=R.layout,V.appendChild(se)}let Z=document.createElement("span");Z.className="admin-live-feed-text",Z.textContent=I(R.text||"",80),Z.title=R.text||"",V.appendChild(Z);let te=document.createElement("span");te.className="admin-live-feed-identity",window.AdminIdentity&&te.appendChild(AdminIdentity.render({nickname:R.nickname||"",fp:"",onNicknameClick:function(se){!se||!L||(L.value=se,L.dispatchEvent(new Event("input",{bubbles:!0})),L.focus())}})),V.appendChild(te);let oe=document.createElement("span");oe.className="admin-live-feed-actions is-hover-reveal";let Q=document.createElement("button");if(Q.type="button",Q.className="admin-ui-chip is-danger admin-live-feed-action",Q.textContent=ServerI18n.t("blockKeywordBtn"),Q.title=ServerI18n.t("blockKeywordTitle"),Q.addEventListener("click",se=>{se.stopPropagation(),e("keyword",R.text,N.id)}),oe.appendChild(Q),R.fingerprint){let se=document.createElement("button");se.type="button",se.className="admin-ui-chip is-warn admin-live-feed-action",se.textContent=ServerI18n.t("blockFpBtn"),se.title=ServerI18n.t("blockFpTitle").replace("{fp}",R.fingerprint),se.addEventListener("click",de=>{de.stopPropagation(),e("fingerprint",R.fingerprint,N.id)}),oe.appendChild(se)}return V.appendChild(oe),V}async function e(N,R,V){if(!R)return;let ne=N==="keyword"?ServerI18n.t("blockLabelKeyword"):ServerI18n.t("blockLabelFingerprint"),W=N==="keyword"?I(R,30):R.slice(0,8);if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("lfBlockTitle"),subtitle:ServerI18n.t("cfmSubBlockFuture"),severity:"danger",bodyText:ServerI18n.t("blockConfirm").replace("{label}",ne).replace("{display}",W),confirmLabel:ServerI18n.t("lfBlockTitle")}))try{let te=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:N,value:R})}),oe=await te.json();if(te.ok){if(showToast(oe.message||ServerI18n.t("blockFallback").replace("{label}",ne)),V){let Q=_.find(se=>se.id===V);Q&&(Q.muted=!0)}else _.forEach(Q=>{N==="keyword"&&Q.data.text===R&&(Q.muted=!0),N==="fingerprint"&&Q.data.fingerprint===R&&(Q.muted=!0)});a()}else showToast(oe.error||ServerI18n.t("blockFailed"),!1)}catch(te){console.error("[LiveFeed] Block failed:",te),showToast(ServerI18n.t("blockRequestFailed"),!1)}}function a(){if(!x)return;let N=document.createDocumentFragment(),R=_.filter(V=>K(V)&&F(V));for(let V=R.length-1;V>=0;V--)N.appendChild(o(R[V]));if(x.textContent="",N.childNodes.length===0){let V=y?c("paused"):_.length===0?c("empty"):c("no-result");x.appendChild(V)}else x.appendChild(N);t(),n(),d(),r()}function t(){if(!q)return;let N=_.length,R=z.length;q.textContent=ServerI18n.t("lfCountUnit",{n:N})+(R>0?` (+${R})`:"")}function s(N){let R={ts:Date.now(),data:N,id:"e"+ ++$};if(N&&N.status==="blocked"&&(R.muted=!0),N&&(N.sensitive||N.flagged)&&(R.sensitive=!0),y){z.push(R),t(),r();return}if(_.push(R),_.length>200){let V=_.splice(0,_.length-200)}a()}function r(){let N=document.querySelector("[data-lf-jump]"),R=document.querySelector("[data-lf-jump-n]");if(!N||!R)return;let V=z.length;V>0?(N.hidden=!1,R.textContent=String(V)):N.hidden=!0}function n(){let N=document.querySelector("[data-lf-state]");N&&(N.className=y?"ui-status is-warning":"ui-status is-success",N.textContent=y?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function d(){let N=document.getElementById(f)||document,R=(V,ne)=>{let W=N.querySelector(V);W&&(W.textContent=String(ne))};R("[data-cnt-all]",_.length),R("[data-cnt-sens]",_.filter(V=>V.sensitive).length),R("[data-cnt-mut]",_.filter(V=>V.muted).length),R("[data-cnt-q]",_.filter(V=>V.data&&V.data.status==="queued").length)}function l(){if(y=!y,x&&x.setAttribute("aria-live",y?"off":"polite"),D&&(D.textContent=y?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),D.classList.toggle("is-primary",y),D.classList.toggle("is-ghost",!y)),y)t();else{for(let N of z)_.push(N);z=[],_.length>200&&_.splice(0,_.length-200),a()}}function u(){let N=document.getElementById("settings-grid");if(!N)return!1;let R=`
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
              placeholder="${O(ServerI18n.t("liveFeedSearchPlaceholder"))}"
              class="admin-lf-v4__search" />
            <button id="liveFeedPauseBtn" type="button" class="admin-lf-v4__pausebtn">${O(ServerI18n.t("pauseBtn"))}</button>
            <button id="liveFeedClearBtn" type="button" class="admin-lf-v4__pausebtn">${O(ServerI18n.t("clearBtn"))}</button>
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
      </div>`;return N.insertAdjacentHTML("beforeend",R),!0}let i=!1,v=null,h=0,T=1500;async function k(){try{let N=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(h),{credentials:"same-origin"});if(!N.ok)return;let R=await N.json();if(Array.isArray(R.entries))for(let V of R.entries)V&&V.data&&s(V.data);typeof R.next_since=="number"&&(h=R.next_since)}catch{}}function S(){i||(i=!0,k(),v=setInterval(k,T),window.addEventListener("beforeunload",()=>{v&&(clearInterval(v),v=null)}))}function B(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(f)&&u()&&H()}).observe(document.body,{childList:!0,subtree:!0}),u()&&H()}function H(){x=document.getElementById("liveFeedList"),D=document.getElementById("liveFeedPauseBtn"),L=document.getElementById("liveFeedSearch"),q=document.getElementById("liveFeedCount");let N=document.getElementById("liveFeedClearBtn"),R=document.querySelectorAll(".admin-live-feed-tab");if(D&&D.addEventListener("click",l),N&&N.addEventListener("click",()=>{_=[],z=[],a()}),R.forEach(V=>{V.addEventListener("click",()=>{R.forEach(ne=>ne.classList.remove("is-active")),V.classList.add("is-active"),m=V.dataset.tab||"all",a()})}),L){let V=null;L.addEventListener("input",()=>{clearTimeout(V),V=setTimeout(()=>{A=L.value.trim(),a()},200)})}S()}function M(N){if(!("ontouchstart"in window))return;let R=0,V=0,ne=0,W=null,Z=null,te=!1;function oe(Q){if(Q.querySelector(".admin-live-feed-row__swipe-actions"))return;let se=document.createElement("div");se.className="admin-live-feed-row__swipe-actions",se.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="mask">
          <span class="admin-live-feed-row__swipe-btn-icon">\u25D0</span>${ServerI18n.t("lfSwipeMask")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mute" data-swipe-act="mute">
          <span class="admin-live-feed-row__swipe-btn-icon">\u25D0</span>${ServerI18n.t("lfSwipeMute")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,se.addEventListener("click",function(de){let ue=de.target.closest("[data-swipe-act]");if(!ue)return;let fe=Q.dataset.id,ge=_.find(X=>X.id===fe);if(!ge||!ge.data)return;let G=ue.dataset.swipeAct;G==="ban"||G==="mute"?ge.data.fingerprint&&e("fingerprint",ge.data.fingerprint,fe):G==="mask"&&ge.data.text&&e("keyword",ge.data.text,fe),Q.classList.remove("is-swiped")}),Q.appendChild(se)}N.addEventListener("touchstart",function(Q){let se=Q.target.closest(".admin-live-feed-row");se&&(Q.target.closest(".admin-live-feed-row__swipe-actions")||(W=se,te=!1,R=Q.touches[0].clientX,V=Q.touches[0].clientY,ne=0))},{passive:!0}),N.addEventListener("touchmove",function(Q){if(!W||te)return;let se=Q.touches[0],de=se.clientX-R,ue=se.clientY-V;if(Math.abs(ue)>Math.abs(de)&&Math.abs(ue)>12){te=!0;return}if(ne=de,de<-10){oe(W),Z=W,W.classList.add("is-swiping");let fe=Math.max(-180,de);W.style.transform=`translateX(${fe}px)`}else de>10&&W.classList.contains("is-swiped")&&(W.style.transform="")},{passive:!0}),N.addEventListener("touchend",function(){W&&(W.classList.remove("is-swiping"),W.style.transform="",ne<=-60?W.classList.add("is-swiped"):W.classList.remove("is-swiped"),W=null,Z=null,ne=0)},{passive:!0})}function E(){return x?Array.from(x.querySelectorAll(".admin-live-feed-row")):[]}function j(){let N=E(),R=document.activeElement;for(let V of N)if(V===R||V.contains(R))return V;return null}function U(N){let R=E();if(!R.length)return!1;let V=j(),ne=V?R.indexOf(V)+N:N>0?0:R.length-1;return ne=Math.max(0,Math.min(R.length-1,ne)),R[ne].focus(),R[ne].scrollIntoView({block:"nearest"}),!0}function Y(N){let R=j();if(!R)return!1;let V=_.find(W=>W.id===R.dataset.id);if(!V)return!1;let ne=N==="keyword"?V.data.text:V.data.fingerprint;return ne?(e(N,ne,V.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return _.slice()},isVisible:function(){return!!(x&&x.offsetParent!==null)},isPaused:function(){return y},moveFocus:U,blockFocused:Y,togglePause:function(){l()}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",B):B()})()});var ut=me(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var b=window.AdminUtils.loadDetailsState,w=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;function f(d,l=!1){var u=b();return u[d]!==void 0?u[d]:l}function _(d){var l=b();l[d.id]=d.open,w(l)}let z=!1;new MutationObserver(()=>{let d=document.getElementById("settings-grid");if(d&&!(document.getElementById("sec-plugins")||z)){z=!0;try{A(d)}finally{z=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function A(d){let l=`
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
      `;d.insertAdjacentHTML("beforeend",l);let u=document.querySelector("[data-console-filters]");u&&u.addEventListener("click",i=>{let v=i.target.closest("[data-console-filter]");v&&(u.querySelectorAll("[data-console-filter]").forEach(h=>h.classList.toggle("is-active",h===v)),x=v.dataset.consoleFilter,I())}),document.getElementById("pluginsReloadBtn").addEventListener("click",n),F(),K()}let m=0,$=0,x="all",D=[],L=80;function q(d){let l=(d||"INFO").toUpperCase();return l==="ERROR"?"is-error":l==="WARN"?"is-warn":l==="DEBUG"?"is-debug":"is-info"}function O(d){let l=new Date(d*1e3),u=i=>String(i).padStart(2,"0");return`${u(l.getHours())}:${u(l.getMinutes())}:${u(l.getSeconds())}`}function I(){let d=document.getElementById("pluginsConsoleBody");if(!d)return;let l=x==="all"?D:D.filter(u=>(u.level||"INFO").toUpperCase()===x);if(l.length===0){let u=x==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${x} lines yet \xB7 waiting\u2026`;d.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${u}</span>
          </div>`;return}d.innerHTML=l.map(u=>{let i=O(u.ts),v=(u.msg||"").replace(/[<>&"]/g,k=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[k]),h=(u.plugin||"\u2014").replace(/[<>&"]/g,k=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[k]),T=(u.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${i}</span>
          <span class="lv ${q(u.level)}">${T}</span>
          <span class="plg">${h}</span>
          <span class="msg">${v}</span>
        </div>`}).join("")}async function C(){try{let d=await fetch(`/admin/plugins/console?since=${m}`,{credentials:"same-origin"});if(!d.ok)return;let l=await d.json();if(!Array.isArray(l.events)||l.events.length===0)return;for(D.unshift(...l.events);D.length>L;)D.pop();m=l.latest_seq||m,I()}catch{}}function K(){$||($=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:C}))}async function F(){let d=document.getElementById("pluginsList");if(d)try{let l=await csrfFetch("/admin/plugins/list");if(!l.ok)throw new Error(`HTTP ${l.status}`);let i=(await l.json()).plugins||[];if(i.length===0){d.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",P([]);return}d.innerHTML=i.map(p).join(""),s(d),P(i)}catch(l){console.error("Failed to load plugins:",l),d.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function P(d){let l=d.length,u=d.filter(k=>k.enabled).length,i=l-u,v=d.map(k=>k.priority).filter(k=>typeof k=="number"),h=v.length?Math.round(v.reduce((k,S)=>k+S,0)/v.length):null,T=(k,S)=>{document.querySelectorAll(`[data-plugins-stat="${k}"]`).forEach(B=>{B.textContent=S})};T("loaded",l),T("running",u),T("paused",i),T("priority",h??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(k=>{k.textContent=l})}function p(d){let{name:l,version:u,description:i,priority:v,enabled:h,is_user:T,file:k}=d,S=`plugin-toggle-${l}`,B=e(v),H=t(v),M=o(d),E=T&&k?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${g(k)}"
            data-plugin-name="${g(l)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${g(l)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${g(l)}">
          <span class="admin-plugins-dot ${h?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${g(l)}</div>
            ${i?`<div class="desc">${g(i)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${u?"v"+g(u):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${B}">${v??"\u2014"}${H?" \xB7 "+H:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${a(M)}">${M}</span>
          <div class="admin-plugins-toggle-cell">
            ${E}
            <label class="admin-plugins-switch" for="${S}">
              <input type="checkbox" id="${S}" role="switch"
                aria-checked="${!!h}" aria-label="Toggle plugin ${g(l)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${g(l)}"
                ${h?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function c(d,l){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:d}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:l}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let i=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:l})}),v=await i.json().catch(()=>({}));if(!i.ok){showToast(v.error||ServerI18n.t("pluginsToastRemoveFailed",{status:i.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:d}),!0),await F()}catch(i){showToast(ServerI18n.t("pluginsToastNetError",{msg:i.message||""}),!1)}}function o(d){let l=d.file||d.path||d.source||"";if(typeof l=="string"){if(l.endsWith(".py"))return"PY";if(l.endsWith(".js"))return"JS"}return(d.language||"PY").toUpperCase()}function e(d){return d==null?"is-muted":d<=10?"is-danger":d<=50?"is-warn":"is-cyan"}function a(d){return d==="JS"?"is-cyan":d==="PY"?"is-warn":"is-muted"}function t(d){return d==null?"":d<=10?"CRITICAL":d<=50?"HIGH":"NORMAL"}function s(d){d.querySelectorAll(".plugin-toggle").forEach(l=>{l.addEventListener("change",async function(){let u=this.dataset.pluginName,i=this.checked;await r(u,i,this)})}),d.querySelectorAll(".plugin-uninstall").forEach(l=>{l.addEventListener("click",function(){c(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function r(d,l,u){let i=l?"/admin/plugins/enable":"/admin/plugins/disable";try{let v=await csrfFetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})});if(!v.ok){let h=await v.json().catch(()=>({}));throw new Error(h.error||`HTTP ${v.status}`)}showToast(l?ServerI18n.t("pluginEnabled").replace("{name}",d):ServerI18n.t("pluginDisabled").replace("{name}",d),!0)}catch(v){console.error(`Failed to ${l?"enable":"disable"} plugin:`,v),showToast(v.message||ServerI18n.t("operationFailed"),!1),u&&(u.checked=!l)}}async function n(){let d=document.getElementById("pluginsReloadBtn");d&&(d.disabled=!0);try{let l=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!l.ok){let u=await l.json().catch(()=>({}));throw new Error(u.error||`HTTP ${l.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await F()}catch(l){console.error("Failed to reload plugins:",l),showToast(l.message||ServerI18n.t("reloadFailed"),!1)}finally{d&&(d.disabled=!1)}}})})()});var mt=me(()=>{(function(){"use strict";let b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})},w={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},g=null,f=null;function _(){return g||(g=document.createElement("div"),g.className="admin-pu-backdrop",g.hidden=!0,g.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(g),g.addEventListener("click",e=>{(e.target.matches("[data-pu-close]")||e.target===g)&&o()}),g)}function z(e){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((t,s)=>{let r=s+1,n=r<e,l=n?"is-done":r===e?"is-active":"";return(s>0?`<span class="admin-pu-step-line ${n?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${l}">
          <span class="circle">${n?"\u2713":r}</span>
          <span class="label">${t}</span>
        </div>`}).join("")}function y(e,a){f.step=e;let t=g.querySelector("[data-pu-steps]");t&&(t.innerHTML=z(e));let s=g.querySelector("[data-pu-body]");s&&(s.innerHTML=a)}function A(e){let a=e==="error-type"?ServerI18n.t("pluginsUploadErrorType"):e==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):e==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):e==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),t=(e||"").startsWith("error")?"\u2715":e==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(e||"").startsWith("error")?"is-error":e==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${t}</div>
          <div class="admin-pu-dropzone-msg">${b(a)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py,.js" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function m(){let e=g.querySelector("[data-pu-dropzone]"),a=g.querySelector("[data-pu-file]"),t=g.querySelector("[data-pu-browse]");t&&t.addEventListener("click",()=>a&&a.click()),a&&a.addEventListener("change",()=>{a.files&&a.files[0]&&$(a.files[0])}),e&&(e.addEventListener("click",()=>a&&a.click()),e.addEventListener("dragover",s=>{s.preventDefault(),e.classList.add("is-over")}),e.addEventListener("dragleave",()=>e.classList.remove("is-over")),e.addEventListener("drop",s=>{s.preventDefault(),e.classList.remove("is-over");let r=s.dataTransfer&&s.dataTransfer.files;if(!(!r||r.length===0)){if(r.length>1){y(1,A("error-multi")),m();return}$(r[0])}}))}function $(e){if(!e.name.match(/\.(py|js)$/i)){y(1,A("error-type")),m();return}if(e.size>256*1024){y(1,A("error-size")),m();return}f.file=e,y(2,x(e.name)),D(e)}function x(e){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${b(e)}</div>
      </div>`}async function D(e){try{let a=new FormData;a.append("file",e);let t=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:a}),s=await t.json().catch(()=>({}));if(!t.ok&&!s.validation){window.showToast?.(s.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:t.status}),!1),y(1,A()),m();return}f.manifest=s.manifest||{},f.validation=s.validation||{},f.filename=s.filename||e.name,L(f)}catch(a){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:a.message||""}),!1),y(1,A()),m()}}function L(e){let a=e.manifest||{},t=e.validation||{},s="";if(!t.syntax_ok)s=q(t.syntax_err,e);else if(Object.keys(a).length===0)s=O(e);else{let r=(t.deps||[]).some(n=>n.status==="missing");s=K(a,t,e,r)}y(2,`<div class="admin-pu-step2">${s}</div>`),F()}function q(e,a){let t=e&&e.line?e.line:"?",s=e&&e.msg?e.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${t}</span>
        </div>
        <pre class="admin-pu-syntax-body">${b(`>>> ${a.filename}
${s}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function O(e){return`
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
      </footer>`}function I(e){return e==null?"is-muted":e<=10?"is-danger":e<=50?"is-warn":"is-cyan"}function C(e){if(e==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let a=I(e),t=e<=10?"CRITICAL":e<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${a}">${e} \xB7 ${t}</span>`}function K(e,a,t,s){let r=e.name||t.filename.replace(/\.(py|js)$/i,""),n=e.version?`v${b(e.version)}`:"\u2014",d=e.author?`@${b(e.author.replace(/^@/,""))}`:"\u2014",l=e.description||ServerI18n.t("pluginsUploadNoDescription"),u=t.filename.endsWith(".js")?"JS":"PY",i=u==="PY"?"is-warn":"is-cyan",v=Array.isArray(e.permissions)?e.permissions:[],h=Object.keys(w).map(H=>{let M=v.includes(H);return`
        <div class="admin-pu-perm-row ${M?"is-req":"is-not"}">
          <span class="dot">${M?"\u25CF":"\u25CB"}</span>
          <span class="key">${b(H)}</span>
          <span class="label">${b(ServerI18n.t(w[H]))}</span>
        </div>`}).join(""),T=a.deps||[],k=T.map(H=>{let M=H.status==="ok"?"is-ok":H.status==="warn"?"is-warn":"is-err",E=H.status==="ok"?"\u2713":H.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${M}">
          <span class="dot">${E}</span>
          <span class="name">${b(H.name)}</span>
          <span class="note">${b(H.note||"")}</span>
        </div>`}).join(""),S=a.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${b(r)}</span>`})}
      </div>`:"",B=T.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${k}</div>
      </section>`;return`
      ${S}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${b(r)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${n}</span>
          <span class="author">${d}</span>
          <span class="admin-ui-pill admin-pu-pill ${i}" style="margin-left:auto">${u}</span>
        </div>
        <div class="admin-pu-manifest-desc">${b(l)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${C(e.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${h}</div>
        </section>
        ${B}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${s?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${s?"disabled":""} data-pu-confirm>${s?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function F(){let e=g.querySelector("[data-pu-back]");e&&e.addEventListener("click",()=>{f.file=null,f.manifest=null,f.validation=null,y(1,A()),m()});let a=g.querySelector("[data-pu-confirm]");a&&a.addEventListener("click",()=>P());let t=g.querySelector("[data-pu-no-manifest-ack]");t&&a&&t.addEventListener("change",()=>{a.disabled=!t.checked})}function P(){let e=f.manifest||{},a=e.name||(f.filename||"").replace(/\.(py|js)$/i,""),t=e.version?`v${b(e.version)}`:"\u2014",s=Array.isArray(e.permissions)?e.permissions:[],r=s.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:s.map(l=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${b(l)}</span></div>`).join("");y(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${b(a)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${t}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${r}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${b(f.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:e.priority!=null?e.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let n=g.querySelector("[data-pu-install]");n&&n.addEventListener("click",p);let d=g.querySelector("[data-pu-back]");d&&d.addEventListener("click",()=>L(f))}async function p(){y(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let e=new FormData;e.append("file",f.file);let a=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:e}),t=await a.json().catch(()=>({}));if(!a.ok){window.showToast?.(t.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:a.status}),!1),L(f);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:t.name||f.filename}),!0),o();let s=document.getElementById("pluginsReloadBtn");s&&s.click()}catch(e){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:e.message||""}),!1),L(f)}}function c(){_(),f={step:1,file:null,manifest:null,validation:null,filename:null},y(1,A()),m(),g.hidden=!1,document.body.classList.add("admin-pu-open")}function o(){g&&(g.hidden=!0,document.body.classList.remove("admin-pu-open"),f=null)}window.AdminPluginUpload={open:c,close:o},document.addEventListener("click",e=>{e.target.closest("#pluginsUploadBtn")&&(e.preventDefault(),c())})})()});var pt=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let w="sec-webhooks",g=12e3,f=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function _(r,n){return r?r.length>n?r.slice(0,n)+"\u2026":r:""}function z(r){if(!r)return"\u2014";try{let n=new Date(r),d=Math.max(0,(Date.now()-n.getTime())/1e3);return d<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(d)}):d<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(d/60)}):d<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(d/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(d/86400)})}catch{return"\u2014"}}function y(r){if(!r)return"\u2014";try{return new URL(r).hostname}catch{return _(r,30)}}function A(r){return r==="active"?"is-success":r==="degraded"?"is-warn":"is-muted"}let m={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:f,eventCatalogLoaded:!1};function $(){let r=document.getElementById("advanced-grid")||document.getElementById("settings-grid");!r||document.getElementById(w)||(r.insertAdjacentHTML("beforeend",`
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
    `),x())}function x(){let r=document.getElementById(w);if(!r)return;let n=document.getElementById("wh-register-form");n&&n.addEventListener("submit",async d=>{d.preventDefault();let l=document.getElementById("wh-url").value.trim();if(!l)return;let u=Array.from(n.querySelectorAll('input[name="wh-event"]:checked')).map(T=>T.value);if(u.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let i=document.getElementById("wh-format").value,v=document.getElementById("wh-secret").value.trim(),h={url:l,events:u,format:i};v&&(h.secret=v);try{let T=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}),k=await T.json();T.ok&&k.hook_id?(showToast(ServerI18n.t("webhookRegistered")),n.reset(),C(),n.hidden=!0,await D()):showToast(k.error||ServerI18n.t("registrationFailed"),!1)}catch(T){console.error("Webhook register error:",T),showToast(ServerI18n.t("registrationFailed"),!1)}}),r.querySelectorAll(".admin-ui-page-actions [data-wh-action='show-add']").forEach(d=>d.addEventListener("click",()=>{n&&(n.hidden=!1)})),r.addEventListener("click",d=>{if(d.target.closest("[data-wh-action='show-add']")){n&&(n.hidden=!1);return}if(d.target.closest("[data-wh-action='hide-add']")){n&&(n.hidden=!0);return}let i=d.target.closest("[data-wh-log-filter]");if(i){m.deliveryFilter=i.dataset.whLogFilter,r.querySelectorAll("[data-wh-log-filter]").forEach(M=>{M.classList.toggle("is-active",M.dataset.whLogFilter===m.deliveryFilter)}),c();return}let v=d.target.closest("[data-wh-action='test']");if(v){d.stopPropagation(),a(v.dataset.whHookId);return}let h=d.target.closest("[data-wh-action='settings']");if(h){d.stopPropagation(),o(h.dataset.whHookId);return}if(d.target.closest("[data-wh-action='close-detail']")){m.selectedHookId=null,e(),P();return}let k=d.target.closest("[data-wh-action='detail-ping']");if(k){a(k.dataset.whHookId);return}let S=d.target.closest("[data-wh-action='detail-toggle']");if(S){t(S.dataset.whHookId,S.dataset.whNextEnabled==="1");return}let B=d.target.closest("[data-wh-action='detail-delete']");if(B){s(B.dataset.whHookId);return}let H=d.target.closest("[data-wh-hook-row]");if(H&&!d.target.closest("button")){o(H.dataset.whHookId);return}}),m.stopPoll||(m.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(w)},intervalMs:g,tick:D}))}async function D(){await O(),await Promise.all([L(),q()]),K(),P(),c(),e()}async function L(){try{let n=await(await csrfFetch("/admin/webhooks/list")).json();m.hooks=Array.isArray(n.webhooks)?n.webhooks:[]}catch{m.hooks=[]}}async function q(){try{let r=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!r.ok)return;let n=await r.json();m.deliveries=Array.isArray(n.deliveries)?n.deliveries:[],m.stats=n.stats||null}catch{}}async function O(){if(!m.eventCatalogLoaded)try{let r=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(r.ok){let n=await r.json(),d=Array.isArray(n.events)?n.events:[];d.length&&(m.eventCatalog=d)}}catch{}finally{m.eventCatalogLoaded=!0,C()}}function I(r){let n=r&&r.slug?String(r.slug):"";if(r&&r.labelKey){let v=ServerI18n.t(r.labelKey);return{slug:n,label:v?v+" \xB7 "+n:n,title:v}}let d=r&&r.zh?String(r.zh):"",l=r&&r.en?String(r.en):"",u=window.ServerI18n&&ServerI18n.currentLang||"zh",i=(r&&r[u]?String(r[u]):"")||l||d;return{slug:n,label:i?i+" \xB7 "+n:n,title:d&&l?d+" \xB7 "+l:d||l}}function C(){let r=document.querySelector("[data-wh-register-events]");r&&(r.innerHTML=m.eventCatalog.map(function(n){let d=I(n);if(!d.slug)return"";let l=d.slug==="on_danmu"?" checked":"";return'<label title="'+b(d.title)+'"><input type="checkbox" name="wh-event" value="'+b(d.slug)+'"'+l+" /> "+b(d.label)+"</label>"}).join(""))}function K(){let r=document.querySelector("[data-wh-stats]");if(!r)return;let n=m.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};r.innerHTML=`
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatEnabledLabel")}</div>
        <div class="v">${n.endpoints_enabled} / ${n.endpoints_total}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatDeliveries24hLabel")}</div>
        <div class="v" style="color: var(--color-ink-success)">${n.deliveries_24h.toLocaleString?n.deliveries_24h.toLocaleString():n.deliveries_24h}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatFailedLabel")}</div>
        <div class="v" style="color:${n.failed_pending_retry>0?"var(--hud-amber)":"var(--color-text-secondary)"}">${n.failed_pending_retry}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel",{n:F()})}</div>
        <div class="v" style="color:${n.dropped_24h>0?"var(--hud-crimson)":"var(--color-text-secondary)"}">${n.dropped_24h}</div>
      </div>`}function F(){return m.hooks.length&&m.hooks[0].retry_count||3}function P(){let r=document.getElementById("wh-list"),n=document.querySelector("[data-wh-count]");if(r){if(n&&(n.textContent=String(m.hooks.length)),m.hooks.length===0){r.innerHTML="";let d=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let l=document.getElementById("wh-register-form");l&&(l.hidden=!1),document.getElementById("wh-url")?.focus()}});d.dataset.emptyKind="webhooks",r.appendChild(d);return}r.innerHTML=m.hooks.map(p).join("")}}function p(r){let n=b(r.id||""),d=Number(r.success_count)||0,l=Number(r.fail_count)||0,u=d+l,i=u>0?Math.round(d/u*1e3)/10:100,v=r.enabled!==!1,h=Number(r.last_status)||null,T=v?h&&h>=400||r.last_error?"degraded":"active":"paused",k=T==="active"?"var(--hud-lime)":T==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",S=T==="active"?"ACTIVE":T==="degraded"?"DEGRADED":"PAUSED",B=m.selectedHookId===r.id?" is-selected":"",H=A(T),M=(r.events||[]).map(function(j){return'<span class="admin-ui-pill admin-wh-evt-chip">'+b(j)+"</span>"}).join(""),E=r.last_error?'<div class="admin-wh-card-warn">\u26A0 '+b(_(r.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${B}" data-wh-hook-row data-wh-hook-id="${n}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${k};box-shadow:${v?"0 0 6px "+k:"none"}"></span>
          <span class="name">${b(y(r.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${H}">${S}</span>
          <span class="last">last \xB7 ${b(z(r.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${b(r.url)}</div>
        <div class="admin-wh-card-events">${M}</div>
        ${E}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${i}%;background:${k}"></div></div>
            <span class="pct" style="color:${k}">${i}%</span>
          </div>
          <span class="counter ok">\u2713 ${d.toLocaleString()}</span>
          <span class="counter ${l>0?"fail":"fail-zero"}">\u2717 ${l}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${n}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${n}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function c(){let r=document.getElementById("wh-log-list");if(!r)return;let n=m.deliveries.filter(function(d){return m.deliveryFilter==="all"?!0:m.deliveryFilter==="failed"?!d.ok:m.deliveryFilter==="2xx"?d.code&&d.code>=200&&d.code<300:m.deliveryFilter==="5xx"?d.code&&d.code>=500:!0});if(n.length===0){r.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}r.innerHTML=n.map(function(d){let l=d.ts?new Date(d.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",u=d.code?String(d.code):"\u2014",i=d.ok?"var(--hud-lime)":"var(--hud-crimson)",v=d.duration_ms?d.duration_ms>=1e3?(d.duration_ms/1e3).toFixed(1)+"s":d.duration_ms+"ms":"\u2014",h=d.ok?"var(--color-text-strong)":"var(--hud-amber)",T=b(y(d.hook_url||"")),k=(d.retries||0)===0?"\u2014":"\xD7"+d.retries,S=(d.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${d.dropped?" is-dropped":""}">
          <span class="time">${b(l)}</span>
          <span class="code" style="color:${i};border-color:${i}55;background:${i}15;">${u}</span>
          <span class="dur" style="color:${h}">${b(v)}</span>
          <span class="ep">${T}</span>
          <span class="evt">${b(d.event||"")}</span>
          <span class="retry" style="color:${S}">${k}</span>
        </div>`}).join("")}function o(r){m.selectedHookId=r,P(),e()}function e(){let r=document.querySelector("[data-wh-detail]");if(!r)return;let n=m.hooks.find(function(T){return T.id===m.selectedHookId});if(!n){r.hidden=!0,r.innerHTML="";return}r.hidden=!1;let d=n.enabled!==!1,l=Number(n.last_status)||null,u=d?l&&l>=400||n.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",i=new Set(n.events||[]),v=m.eventCatalog.map(function(T){let k=I(T),S=i.has(k.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(S?"is-active is-on":"")+'" title="'+b(k.title)+'"><span aria-hidden="true">'+(S?"\u2713":"\u25CB")+"</span><span>"+b(k.label)+"</span></label>"}).join(""),h={event:n.events&&n.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:n.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};r.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+u+";box-shadow:0 0 6px "+u+'"></span><span class="name">'+b(y(n.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+v+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(n.retry_count!=null?n.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(n.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+b(JSON.stringify(h,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+b(n.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+b(n.id)+'" data-wh-next-enabled="'+(d?"0":"1")+'">'+(d?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+b(n.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function a(r){if(r)try{let n=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:r})}),d=await n.json();n.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(d.error||ServerI18n.t("testFailed"),!1),setTimeout(D,1500)}catch(n){console.error("Webhook test error:",n),showToast(ServerI18n.t("testFailed"),!1)}}async function t(r,n){if(r)try{let d=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:r,enabled:n})}),l=await d.json();if(!d.ok){showToast(l.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let u=m.hooks.find(function(i){return i.id===r});u&&(u.enabled=l.enabled),showToast(l.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),K(),P(),e()}catch(d){console.error("Webhook toggle error:",d),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function s(r){if(!(!r||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let d=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:r})}),l=await d.json();d.ok?(showToast(ServerI18n.t("webhookDeleted")),m.selectedHookId===r&&(m.selectedHookId=null),D()):showToast(l.error||ServerI18n.t("deleteFailed"),!1)}catch(d){console.error("Webhook delete error:",d),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(w)&&$()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),$()})})()});var vt=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let w="sec-sounds",g=null,f=[],_=[];async function z(){try{let c=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!c.ok)throw new Error(await c.text());let o=await c.json();f=o.sounds||[],_=o.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",f.length||"")}catch(c){console.error("Failed to fetch sounds:",c),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),f=[],_=[]}}async function y(){return z()}async function A(c,o){let e=new FormData;e.append("file",c),e.append("name",o);let a=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:e}),t=await a.json();if(!a.ok)throw new Error(t.error||"Upload failed");return t}async function m(c){let o=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),e=await o.json();if(!o.ok)throw new Error(e.error||"Delete failed");return e}async function $(c){let o=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),e=await o.json();if(!o.ok)throw new Error(e.error||"Failed to add rule");return e}async function x(c){let o=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c})}),e=await o.json();if(!o.ok)throw new Error(e.error||"Failed to delete rule");return e}function D(){let c=document.getElementById("soundsList");if(c){if(f.length===0){c.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});o.dataset.emptyKind="sounds",o.style.gridColumn="1 / -1",c.appendChild(o);return}c.innerHTML=f.map(function(a){var t=b(a.name),s=Math.round((a.volume!=null?a.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+b(a.name)+'"><div class="name" title="'+t+'">'+t+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+b(a.name)+'" min="0" max="100" step="1" value="'+s+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+b(a.name)+'" style="min-width:32px;text-align:right">'+s+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+b(a.name)+'">'+b(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+b(a.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),c.querySelectorAll(".sound-play-btn").forEach(function(a){a.addEventListener("click",function(){var t=a.dataset.name,s=f.find(function(r){return r.name===t});s&&(g&&(g.pause(),g=null),g=new Audio(s.url),g.volume=.5,g.play().catch(function(r){console.warn("Audio preview failed:",r)}))})}),c.querySelectorAll(".sound-delete-btn").forEach(function(a){a.addEventListener("click",async function(){var t=a.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",t),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await m(t),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",t),!0),await z(),D(),q()}catch(r){window.showToast(r.message,!1)}})});var e={};c.querySelectorAll(".sound-volume-slider").forEach(function(a){var t=a.dataset.name,s=c.querySelector('.sound-volume-label[data-name="'+CSS.escape(t)+'"]');a.addEventListener("input",function(){s&&(s.textContent=a.value+"%"),clearTimeout(e[t]),e[t]=setTimeout(function(){L(t,Number(a.value)/100)},300)}),a.addEventListener("change",function(){clearTimeout(e[t]),L(t,Number(a.value)/100)})})}}async function L(c,o){try{var e=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(c)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:o})}),a=await e.json();if(!e.ok){window.showToast(a.error||"Volume update failed",!1);return}var t=f.find(function(s){return s.name===c});t&&(t.volume=o),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(o*100)}),!0)}catch(s){console.warn("[admin-sounds] volume save failed:",s),window.showToast("Network error",!1)}}function q(){let c=document.getElementById("ruleSoundName");if(!c)return;let o=c.value;if(c.innerHTML="",f.length===0){let e=document.createElement("option");e.value="",e.textContent=ServerI18n.t("noSoundsAvailable"),e.disabled=!0,c.appendChild(e);return}f.forEach(e=>{let a=document.createElement("option");a.value=e.name,a.textContent=e.name,c.appendChild(a)}),o&&[...c.options].some(e=>e.value===o)&&(c.value=o)}function O(){let c=document.getElementById("rulesList");if(c){if(_.length===0){c.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});o.dataset.emptyKind="sound-rules",c.appendChild(o);return}c.innerHTML=_.map(function(e){var a=e.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):e.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",e.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",e.trigger_value),t=Math.round((e.volume!=null?e.volume:1)*100),s=ServerI18n.t("soundDetailLine").replace("{sound}",e.sound_name).replace("{vol}",t).replace("{cd}",e.cooldown!=null?e.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+b(String(e.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+b(a)+'</div><div class="admin-sounds-rule-detail">'+b(s)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+b(String(e.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),c.querySelectorAll(".sound-rule-del-btn").forEach(function(e){e.addEventListener("click",async function(){try{await x(e.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await y(),O()}catch(a){window.showToast(a.message,!1)}})})}}function I(){let c=document.getElementById("soundUploadBtn");c&&c.addEventListener("click",async()=>{let o=document.getElementById("soundFileInput"),e=document.getElementById("soundNameInput"),a=o.files[0];if(!a){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let t=e.value.trim();if(!t){window.showToast(ServerI18n.t("enterSoundName"),!1);return}c.disabled=!0,c.textContent=ServerI18n.t("uploadingStatus");try{await A(a,t),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",t),!0),o.value="",e.value="",await z(),D(),q()}catch(s){window.showToast(s.message,!1)}finally{c.disabled=!1,c.textContent=ServerI18n.t("soundsUploadIdle")}})}function C(){let c=document.getElementById("addRuleBtn");c&&c.addEventListener("click",async()=>{let o=document.getElementById("ruleTriggerType").value,e=document.getElementById("ruleTriggerValue").value.trim(),a=document.getElementById("ruleSoundName").value,t=document.getElementById("ruleVolume"),s=document.getElementById("ruleCooldown");if(o!=="all"&&!e){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!a){window.showToast(ServerI18n.t("selectSound"),!1);return}let r=parseInt(t.value,10)/100,n=parseInt(s.value,10)||0,d={trigger_type:o,trigger_value:o==="all"?"":e,sound_name:a,volume:Math.max(0,Math.min(1,r)),cooldown:Math.max(0,n)};c.disabled=!0;try{await $(d),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await y(),O()}catch(l){window.showToast(l.message,!1)}finally{c.disabled=!1}})}function K(){let c=document.getElementById("ruleTriggerType"),o=document.getElementById("ruleTriggerValue");if(!c||!o)return;function e(){c.value==="all"?(o.disabled=!0,o.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),o.value=""):c.value==="keyword"?(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):c.value==="effect"&&(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}c.addEventListener("change",e),e()}function F(){let c=document.getElementById("ruleVolume"),o=document.getElementById("ruleVolumeLabel");!c||!o||c.addEventListener("input",()=>{o.textContent=c.value+"%"})}function P(){return`
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
    `}async function p(){let c=document.getElementById("settings-grid");if(c){if(c.insertAdjacentHTML("beforeend",P()),window.AdminSkeletons){let o=document.getElementById("soundsList");o&&(o.innerHTML="",o.appendChild(window.AdminSkeletons.listRows({rows:3})));let e=document.getElementById("rulesList");e&&(e.innerHTML="",e.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([z(),y()]),D(),q(),O(),I(),C(),K(),F()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let c=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(w)&&!c&&(c=!0,p().finally(()=>{c=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(w)&&(c=!0,p().finally(()=>{c=!1}))})})()});var ft=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let w=/^[a-zA-Z0-9_]{1,32}$/,g=".png,.gif,.webp",f="sec-emojis",_=[];function z(){return`
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
    `}function y(F){let P=":"+F.name+":",p=Number(F.used)||0,c=p>0?ServerI18n.t("emojisUsedCount",{n:p}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+$(F.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+$(F.url)+'" alt="'+$(P)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+b(P)+'</div><div class="admin-em-v4__tile-meta">'+b(c)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+$(P)+'" title="'+$(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+$(F.name)+'" title="'+$(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function A(F){let P=document.querySelector("[data-em-quota-label]"),p=document.querySelector("[data-em-quota-fill]");if(!P||!p)return;let c=F.length,o=100;P.textContent=ServerI18n.t("emojisQuotaUsed",{n:c,max:o}),p.style.width=Math.min(100,c/o*100)+"%"}function m(F){let P=document.querySelector("[data-em-preview-body]");if(!P)return;if(!F||F.length===0){P.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let c=F.slice(0,3).map(o=>`<span class="admin-em-v4__preview-pair"><code>:${b(o.name)}:</code> \u2192 <img src="${$(o.url)}" alt=":${$(o.name)}:" /></span>`);P.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:c.join(" \xB7 ")})}function $(F){return b(F)}function x(F){var P=document.getElementById("emojiGrid"),p=document.getElementById("emojiCount");P&&(!F||F.length===0?(window.AdminEmpty?(P.innerHTML="",P.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var c=document.getElementById("emojiFileInput");c&&c.click()}}))):P.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("noEmojisUploaded"))+"</div>",p&&(p.textContent="0")):(P.innerHTML=F.map(y).join(""),p&&(p.textContent=String(F.length))),A(_),m(_))}function D(){var F=document.getElementById("emojiGrid");if(F)if(window.AdminSkeletons){F.innerHTML="";for(var P=0;P<8;P++){var p=document.createElement("div");p.className="admin-em-v4__tile admin-em-v4__tile--skel";var c=document.createElement("div");c.className="admin-em-v4__tile-thumb";var o=document.createElement("div");o.className="admin-skel",o.style.width="100%",o.style.height="100%",c.appendChild(o),p.appendChild(c);var e=document.createElement("div");e.className="admin-skel admin-skel-bar",e.style.width="60%",e.style.height="8px",e.style.margin="6px auto",p.appendChild(e),F.appendChild(p)}}else F.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadingEmojis"))+"</div>"}async function L(){try{var F=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!F.ok)throw new Error("HTTP "+F.status);var P=await F.json();_=P.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",_.length||""),q()}catch(c){console.error("[admin-emojis] fetch failed:",c);var p=document.getElementById("emojiGrid");p&&(p.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function q(){var F=document.getElementById("emojiSearchInput"),P=(F&&F.value||"").trim().toLowerCase(),p=P?_.filter(function(c){return(c.name||"").toLowerCase().includes(P)}):_;x(p)}async function O(){var F=document.getElementById("emojiNameInput"),P=document.getElementById("emojiFileInput"),p=document.getElementById("emojiUploadBtn");if(!(!F||!P||!p)){var c=F.value.trim(),o=P.files&&P.files[0];if(!c){showToast(ServerI18n.t("emojiNameRequired"),!1),F.focus();return}if(!w.test(c)){showToast(ServerI18n.t("emojiNameInvalid"),!1),F.focus();return}if(!o){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var e=o.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(e)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}p.disabled=!0,p.textContent=ServerI18n.t("uploadingStatus");try{var a=new FormData;a.append("name",c),a.append("emojifile",o);var t=await csrfFetch("/admin/emojis/upload",{method:"POST",body:a}),s=await t.json();t.ok?(showToast(s.message||ServerI18n.t("emojiUploadFallback")),F.value="",P.value="",await L()):showToast(s.error||ServerI18n.t("uploadFailed"),!1)}catch(r){console.error("[admin-emojis] upload error:",r),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{p.disabled=!1,p.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function I(F){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",F),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var p=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:F})}),c=await p.json();p.ok?(showToast(c.message||ServerI18n.t("emojiDeleteFallback")),await L()):showToast(c.error||ServerI18n.t("deleteFailed"),!1)}catch(o){console.error("[admin-emojis] delete error:",o),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function C(F){try{await navigator.clipboard.writeText(F),showToast(ServerI18n.t("copiedLabel").replace("{label}",F))}catch{var P=document.createElement("textarea");P.value=F,P.style.position="fixed",P.style.opacity="0",document.body.appendChild(P),P.select(),document.execCommand("copy"),document.body.removeChild(P),showToast(ServerI18n.t("copiedLabel").replace("{label}",F))}}function K(){var F=document.getElementById("settings-grid");if(F){F.insertAdjacentHTML("beforeend",z());var P=document.getElementById("emojiUploadBtn");P&&P.addEventListener("click",O);var p=document.getElementById("emojiNameInput");p&&p.addEventListener("keydown",function(t){t.key==="Enter"&&(t.preventDefault(),O())});var c=document.getElementById("emojiSearchInput");c&&c.addEventListener("input",q);var o=document.getElementById("emojiGrid");o&&o.addEventListener("click",function(t){var s=t.target.closest(".emoji-copy-btn");if(s){C(s.dataset.label);return}var r=t.target.closest(".emoji-delete-btn");r&&I(r.dataset.name)});var e=document.querySelector("[data-em-dropzone]"),a=document.getElementById("emojiFileInput");e&&a&&(["dragenter","dragover"].forEach(function(t){e.addEventListener(t,function(s){s.preventDefault(),e.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(t){e.addEventListener(t,function(s){s.preventDefault(),e.classList.remove("is-dragover")})}),e.addEventListener("drop",function(t){var s=t.dataTransfer&&t.dataTransfer.files&&t.dataTransfer.files[0];if(s){var r=new DataTransfer;r.items.add(s),a.files=r.files;var n=document.getElementById("emojiNameInput");if(n&&!n.value){var d=s.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");n.value=d.slice(0,32),n.focus()}e.classList.add("is-dropping"),setTimeout(function(){e.classList.remove("is-dropping")},1200)}})),D(),L()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var F=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(f)&&K()});F.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&K()}})})()});var ht=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml,w="sec-stickers",g=["png","gif","webp"],f=".gif,.png,.webp",_="__all__",z=[],y=[],A=_;function m(c){return b(c)}function $(){var c=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,o=c?`
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
                ${window.AdminSkeletons?window.AdminSkeletons.html("statsTiles",{cols:4}):b(ServerI18n.t("loadingStickers"))}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}function x(c){return c===_?z.length:z.filter(function(o){return o.pack_id===c}).length}function D(){var c=document.getElementById("stickerPackList");if(c){var o='<button type="button" class="admin-stickers-pack'+(A===_?" is-active":"")+'" data-pack="'+_+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+x(_)+"</span></button>";y.forEach(function(e){var a=e.enabled?"is-success":"is-muted",t="admin-stickers-pack"+(e.id===A?" is-active":""),s=e.id==="default",r=s?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+m(e.id)+'" title="'+(e.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(e.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";o+='<div class="'+t+'" data-pack="'+m(e.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+m(e.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+a+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+b(e.name)+'</span><span class="admin-stickers-pack-count">'+x(e.id)+"</span></button>"+r+"</div>"}),c.innerHTML=o}}function L(c){var o=":"+c.name+":";return'<div class="admin-stickers-tile"><img src="'+m(c.url)+'" alt="'+m(o)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+m(o)+'">'+b(o)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+m(o)+'" title="'+m(ServerI18n.t("copyToClipboard"))+'">'+b(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+m(c.name)+'" title="'+m(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function q(){var c=document.getElementById("stickerGrid"),o=document.getElementById("stickerCount");if(c){var e=document.getElementById("stickerSearchInput"),a=(e&&e.value||"").trim().toLowerCase(),t=z.filter(function(r){return!(A!==_&&r.pack_id!==A||a&&!(r.name||"").toLowerCase().includes(a))});if(t.length===0){c.innerHTML="";var s=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});s.dataset.emptyKind="stickers",s.style.gridColumn="1 / -1",c.appendChild(s),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}c.innerHTML=t.map(L).join(""),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:t.length}))}}async function O(){var c=document.getElementById("stickerGrid");if(c)try{var[o,e]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!o.ok)throw new Error("HTTP "+o.status);z=(await o.json()).stickers||[],y=e.ok?(await e.json()).packs||[]:[],A!==_&&!y.some(function(a){return a.id===A})&&(A=_),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",y.length?ServerI18n.t("tabCountPacks",{n:y.length}):""),D(),q()}catch(a){console.error("[admin-stickers] fetch failed:",a),c.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function I(c,o){if(c==="select"){A=o,D(),q();return}if(c==="rename"){var e=y.find(function(T){return T.id===o}),a=prompt(ServerI18n.t("stickersPackNamePrompt"),e?e.name:"");if(!a)return;try{var t=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a})}),s=await t.json();t.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await O()):window.showToast(s.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="toggle"){try{var r=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/toggle",{method:"POST"});r.ok&&await O()}catch{}return}if(c==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var n=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o),{method:"DELETE"}),d=await n.json();n.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),A===o&&(A=_),await O()):window.showToast(d.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="up"||c==="down"){var l=y.slice().sort(function(T,k){return(T.order||0)-(k.order||0)}),u=l.findIndex(function(T){return T.id===o});if(u<0)return;var i=c==="up"?u-1:u+1;if(i<0||i>=l.length)return;var v=l[u],h=l[i];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(v.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:h.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(h.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:v.order||0})})]),await O()}catch{}}}async function C(){var c=prompt(ServerI18n.t("stickersNewPackPrompt"));if(c)try{var o=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),e=await o.json();o.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),A=e.pack&&e.pack.id?e.pack.id:A,await O()):window.showToast(e.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function K(){var c=document.getElementById("stickerFileInput"),o=document.getElementById("stickerUploadBtn");if(!(!c||!o)){var e=c.files&&c.files[0];if(!e){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var a=e.name.split(".").pop().toLowerCase();if(g.indexOf(a)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}o.disabled=!0;var t=o.textContent;o.textContent=ServerI18n.t("uploadingStatus");try{var s=new FormData;s.append("file",e),A&&A!==_&&s.append("pack_id",A);var r=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:s}),n=await r.json();r.ok?(window.showToast(n.message||ServerI18n.t("stickerUploadFallback")),c.value="",await O()):window.showToast(n.error||ServerI18n.t("uploadFailed"),!1)}catch(d){console.error("[admin-stickers] upload error:",d),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{o.disabled=!1,o.textContent=t}}}async function F(c){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",c),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var e=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(c),{method:"DELETE"}),a=await e.json();e.ok?(window.showToast(a.message||ServerI18n.t("stickerDeleteFallback")),await O()):window.showToast(a.error||ServerI18n.t("deleteFailed"),!1)}catch(t){console.error("[admin-stickers] delete error:",t),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function P(c){try{await navigator.clipboard.writeText(c),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}catch{var o=document.createElement("textarea");o.value=c,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}}function p(){var c=document.getElementById("settings-grid");if(c){c.insertAdjacentHTML("beforeend",$());var o=document.getElementById("stickerUploadBtn");o&&o.addEventListener("click",K);var e=document.getElementById("stickerPackAddBtn");e&&e.addEventListener("click",C);var a=document.getElementById("stickerSearchInput");a&&a.addEventListener("input",q);var t=document.getElementById("stickerPackList");t&&t.addEventListener("click",function(r){var n=r.target.closest("[data-pack-action]");if(!n){var d=r.target.closest("[data-pack]");d&&I("select",d.dataset.pack);return}var l=n.dataset.packAction,u=n.dataset.packId;l==="select"&&!u&&(u=n.closest("[data-pack]")&&n.closest("[data-pack]").dataset.pack),I(l,u)});var s=document.getElementById("stickerGrid");s&&s.addEventListener("click",function(r){var n=r.target.closest(".sticker-copy-btn");if(n){P(n.dataset.label);return}var d=r.target.closest(".sticker-delete-btn");d&&F(d.dataset.name)}),O()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(w)&&p()});c.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(w)&&p()}})})()});var gt=me(()=>{(function(){"use strict";let b="sec-extensions-overview",w=window.AdminUtils.escapeHtml,g=15e3,f=[{id:"slido",name:"Slido Extension",version:"v0.2.0",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload",href:"/static/extensions/danmu-slido-extension-0.2.0.zip"},{kind:"config",labelKey:"extSlidoStepConfig"}]},hasFireTokenUI:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],_={fireToken:null,plainToken:null,sources:[],sourcesTimer:0};function z(){return`
      <div id="${b}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${f.map(y).join("")}
        </div>
      </div>`}function y(I){let C=I.status==="ready",K="is-cold",F=C?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,P=C&&I.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${I.install.steps.map(c=>c.kind==="download"?`<li><a class="admin-ext-step-link" href="${c.href}" target="_blank" rel="noopener noreferrer">${w(ServerI18n.t(c.labelKey))} \u2193</a></li>`:`<li>${w(ServerI18n.t(c.labelKey))}</li>`).join("")}
          </ol>
        </div>`:"",p=I.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
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
      <article class="admin-ext-card" data-ext="${I.id}">
        <div class="admin-ext-head">
          <span class="admin-ext-status-dot ${K}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${I.color}">${I.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${w(I.name)}</div>
            <div class="meta"><span class="ver">${w(I.version)}</span></div>
          </div>
          ${F}
        </div>
        <p class="admin-ext-desc">${w(ServerI18n.t(I.descKey))}</p>
        ${P}
        ${p}
      </article>`}async function A(){try{let I=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!I.ok)return;_.fireToken=await I.json(),L()}catch{}}async function m(){try{let I=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!I.ok)return;let C=await I.json();_.sources=Array.isArray(C.sources)?C.sources:[],q()}catch{}}async function $(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let C=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!C.ok)throw new Error("HTTP "+C.status);let K=await C.json();_.fireToken={enabled:K.enabled,prefix:K.prefix,has_token:!0,rotated_at:K.rotated_at},_.plainToken=K.token,L(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenGenerated"),!0),D(K.token)}catch(C){console.warn("[ext] regen failed:",C),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function x(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let C=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!C.ok)throw new Error("HTTP "+C.status);_.fireToken=await C.json(),_.plainToken=null,L(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(C){console.warn("[ext] revoke failed:",C),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function D(I){if(I)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(I).catch(()=>{});else{let C=document.createElement("textarea");C.value=I,C.style.position="fixed",C.style.opacity="0",document.body.appendChild(C),C.select();try{document.execCommand("copy")}catch{}document.body.removeChild(C)}}function L(){let I=document.querySelector("[data-fire-token-display]"),C=document.querySelector('[data-fire-token-action="copy"]'),K=document.querySelector('[data-fire-token-action="regen"]'),F=document.querySelector('[data-fire-token-action="revoke"]');if(!I)return;let P=_.fireToken;_.plainToken?(I.textContent=_.plainToken,I.classList.add("is-plain")):P&&P.has_token?(I.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:P.prefix||""}),I.classList.remove("is-plain")):(I.textContent=ServerI18n.t("extTokenNotSetHint"),I.classList.remove("is-plain")),C&&(C.disabled=!_.plainToken),K&&(K.textContent=P&&P.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),F&&(F.disabled=!(P&&P.has_token))}function q(){let I=new Set(_.sources.map(C=>C.source));document.querySelectorAll(".admin-ext-card").forEach(C=>{let K=f.find(p=>p.id===C.dataset.ext);if(!K)return;let F=C.querySelector("[data-ext-dot]");if(!F)return;let P=K.sourceMatch&&I.has(K.sourceMatch);F.classList.toggle("is-live",!!P),F.classList.toggle("is-cold",!P)})}function O(){let I=document.getElementById("settings-grid");if(!I||document.getElementById(b))return;I.insertAdjacentHTML("beforeend",z());let C=document.getElementById(b);C&&C.addEventListener("click",K=>{let F=K.target.closest("[data-fire-token-action]");if(!F)return;let P=F.dataset.fireTokenAction;P==="regen"?$():P==="revoke"?x():P==="copy"&&_.plainToken&&(D(_.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),A(),_.stopPoll||(_.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(b)},intervalMs:g,tick:m}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&O()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&O()})})()});var bt=me(()=>{(function(){"use strict";let b="sec-firetoken-overview",w=window.AdminUtils.escapeHtml,g=15e3,f={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function _(){return`
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
    `}async function z(){await Promise.all([y(),A(),m()])}async function y(){try{let p=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!p.ok)return;f.token=await p.json(),O()}catch{}}async function A(){try{let p=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!p.ok)return;let c=await p.json();f.usage24h=Array.isArray(c.usage_24h)?c.usage_24h:[],f.ips=Array.isArray(c.ips)?c.ips:[],C(),K(),I()}catch{}}async function m(){try{let p=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!p.ok)return;let c=await p.json();f.audit=Array.isArray(c.events)?c.events:[],F()}catch{}}async function $(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);let o=await c.json();f.token={enabled:o.enabled,prefix:o.prefix,has_token:!0,rotated_at:o.rotated_at,created_at:o.created_at||o.rotated_at},f.plainToken=o.token,O(),D(o.token),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerated"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function x(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);f.token=await c.json(),f.plainToken=null,O(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function D(p){if(p)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(p).catch(()=>{});else{let c=document.createElement("textarea");c.value=p,c.style.position="fixed",c.style.opacity="0",document.body.appendChild(c),c.select();try{document.execCommand("copy")}catch{}document.body.removeChild(c)}}function L(p){if(!p)return"\u2014";let c=Date.now()/1e3-p;return c<60?ServerI18n.t("firetokenJustNow"):c<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(c/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(c/86400)})}function q(p){if(!p)return"\u2014";try{return new Date(p*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function O(){let p=f.token,c=document.querySelector("[data-ft-token-display]"),o=document.querySelector("[data-ft-status]"),e=document.querySelector('[data-ft-action="copy"]'),a=document.querySelector('[data-ft-action="regen"]'),t=document.querySelector('[data-ft-action="revoke"]'),s=document.querySelector('[data-ft-stat="created"]'),r=document.querySelector('[data-ft-stat="rotated"]'),n=document.getElementById("adminFtCurl");if(c&&(f.plainToken?(c.textContent=f.plainToken,c.classList.add("is-plain")):p&&p.has_token?(c.textContent=(p.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",c.classList.remove("is-plain")):(c.textContent=ServerI18n.t("firetokenNotSetHint"),c.classList.remove("is-plain")),o&&(p&&p.enabled&&p.has_token?(o.textContent=ServerI18n.t("firetokenStatusHealthy"),o.className="admin-ft-status is-good"):p&&p.has_token?(o.textContent=ServerI18n.t("firetokenStatusDisabled"),o.className="admin-ft-status is-warn"):(o.textContent=ServerI18n.t("firetokenStatusUnset"),o.className="admin-ft-status is-muted")),e&&(e.disabled=!f.plainToken),t&&(t.disabled=!(p&&p.has_token)),a&&(a.textContent=p&&p.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),s&&(s.textContent=p?q(p.created_at):"\u2014"),r&&(r.textContent=p?L(p.rotated_at):"\u2014"),n)){let d=f.plainToken?f.plainToken:p&&p.prefix?p.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";n.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${d}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function I(){let p=f.usage24h.map(s=>Number(s)||0),c=p.reduce((s,r)=>s+r,0),o=p.length?Math.max(...p):0,e=document.querySelector('[data-ft-stat="hits"]'),a=document.querySelector('[data-ft-stat="peak"]'),t=document.querySelector("[data-ft-peak-meta]");e&&(e.textContent=c.toLocaleString()),a&&(a.textContent=o.toLocaleString()),t&&(t.textContent=ServerI18n.t("firetokenPeakMeta",{peak:o.toLocaleString()}))}function C(){let p=document.getElementById("adminFtChart24h");if(!p)return;let c=f.usage24h.map(t=>Number(t)||0);if(!c.length){p.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let o=Math.max(...c),e=12e3,a=o>0?Math.min(100,e/Math.max(o,e)*100):100;p.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${c.map((t,s)=>{let r=o>0?Math.max(2,t/o*100):2;return`<div class="bar ${o>0&&t===o?"is-peak":""}" style="height:${r}%" title="${s.toString().padStart(2,"0")}:00 \u2014 ${t}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(t=>`<span>${String(t).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function K(){let p=document.getElementById("adminFtIps"),c=document.querySelector("[data-ft-ip-count]");if(!p)return;let o=f.ips||[];if(c&&(c.textContent=o.length?`${o.length} IP`:"\u2014"),!o.length){p.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let e=o[0]?.ip;p.innerHTML=o.map((a,t)=>{let s=t===0,r=a.source==="web"&&(a.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${s?"is-top":""}">
          <span class="ip">${w(a.ip||"?")}</span>
          ${s?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${r?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${w(a.source||"\u2014")}</span>
          <span class="cnt">${a.count||0} hits</span>
          <span class="when">${L(a.last_seen)}</span>
        </div>`}).join("")}function F(){let p=document.getElementById("adminFtAudit");if(!p)return;let c=f.audit||[];if(!c.length){p.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let o={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},e={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};p.innerHTML=c.map(a=>{let t=e[a.kind]||"is-info",s=o[a.kind]||a.kind,r=a.meta||{},n=r.prefix?` \xB7 prefix=${w(r.prefix)}`:r.enabled!=null?` \xB7 enabled=${r.enabled}`:"";return`
        <div class="admin-ft-audit-row ${t}">
          <span class="ts">${q(a.ts)}</span>
          <span class="kind">${w(s)}</span>
          <span class="detail">${n}</span>
        </div>`}).join("")}function P(){let p=document.getElementById("settings-grid");if(!p||document.getElementById(b))return;p.insertAdjacentHTML("beforeend",_());let c=document.getElementById(b);c&&c.addEventListener("click",o=>{let e=o.target.closest("[data-ft-action]");if(!e)return;let a=e.dataset.ftAction;a==="regen"?$():a==="revoke"?x():a==="copy"&&f.plainToken&&(D(f.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),f.stopPoll||(f.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(b),intervalMs:g,tick:()=>{A(),m()}}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&P()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&P()})})()});var yt=me(()=>{(function(){"use strict";let b="sec-about-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(F){return String(F).replace(/[&<>"']/g,function(P){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[P]})},g="Danmu Fire",f="https://github.com/guan4tou2/danmu-desktop",_=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],z=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],y="danmu.about.lastUpdateCheck",A={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function m(){return`
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
                <span class="v" style="grid-column: span 2" data-about-admin-url>${w(location.origin+"/admin/")}</span>
              </div>
            </div>
          </article>

          <article class="admin-about-changelog">
            <div class="admin-about-changelog-head">
              <span class="admin-ui-monolabel">${ServerI18n.t("uiSectionChangelog")}</span>
              <a class="admin-about-changelog-more" href="${f}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${_.slice(0,4).map(F=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${w(F.v)}</span>
                  ${F.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${w(F.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${F.notes.slice(0,3).map(P=>`
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
              ${z.slice(0,6).map(F=>`
                <div class="admin-about-oss-row">
                  <span class="n">${w(F.n)}</span>
                  <span class="v">${w(F.v)}</span>
                  <span class="l">${w(F.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function $(F){if(!F||F<0)return"\u2014";let P=Math.floor(F/86400),p=Math.floor(F%86400/3600),c=Math.floor(F%3600/60);return P>0?`${P}d ${p}h`:p>0?`${p}h ${c}m`:`${c}m`}function x(){let F=document.querySelector("[data-about-tag]"),P=document.querySelector("[data-about-build]"),p=document.querySelector("[data-about-uptime]"),c=document.querySelector("[data-about-update]"),o=document.querySelector("[data-about-checked]"),e=document.querySelector("[data-about-env]"),a=document.querySelector("[data-about-ws-path]");if(F&&(F.textContent=`v${A.appVersion}`),P){let t=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";P.textContent=`BUILD \xB7 ${t} \xB7 stable channel`,e&&(e.textContent=t)}if(p){let t=A.serverStartedAt?A.serverTime-A.serverStartedAt:0;p.textContent=$(t)}if(c&&(A.isLatest===!0?c.textContent=ServerI18n.t("aboutIsLatestYes"):A.isLatest===!1?c.textContent=ServerI18n.t("aboutHasNewVersion",{v:A.latestVersion||""}):c.textContent="\u2014",c.style.color=A.isLatest===!0?"var(--hud-lime)":A.isLatest===!1?"var(--hud-amber)":""),o&&(o.textContent=A.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:D(A.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),a){let t=window.DANMU_CONFIG||{};a.textContent=t.wsPath||"/ws"}}function D(F){let P=Number(F)||0;if(!P)return"\u2014";let p=String(P).length>12?P:P*1e3,c=(Date.now()-p)/1e3;return c<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(c)}):c<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(c/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(c/86400)})}function L(F,P){let p=a=>String(a||"").replace(/^v/i,"").split("-")[0].split(".").map(function(t){return parseInt(t,10)||0}),c=p(F),o=p(P),e=Math.max(c.length,o.length);for(let a=0;a<e;a++){let t=c[a]||0,s=o[a]||0;if(t>s)return!0;if(t<s)return!1}return!1}async function q({silent:F}={}){F||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let P=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!P.ok)throw new Error("HTTP "+P.status);let c=((await P.json()).tag_name||"").replace(/^v/i,"");A.latestVersion=c,A.lastCheckedAt=Date.now(),A.isLatest=!L(c,A.appVersion);try{localStorage.setItem(y,JSON.stringify({ts:A.lastCheckedAt,latest:c,isLatest:A.isLatest}))}catch{}x(),F||window.showToast&&window.showToast(A.isLatest?ServerI18n.t("aboutToastLatest",{v:A.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:c}),!0)}catch(P){F||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:P.message||""}),!1)}}function O(){try{let F=localStorage.getItem(y);if(!F)return;let P=JSON.parse(F);A.latestVersion=P.latest,A.lastCheckedAt=Number(P.ts)||0,A.isLatest=!!P.isLatest}catch{}}async function I(){try{let F=await fetch("/admin/metrics",{credentials:"same-origin"});if(!F.ok)return;let P=await F.json();A.serverStartedAt=Number(P.server_started_at)||0,A.serverTime=Number(P.server_time)||Date.now()/1e3,x()}catch{}}function C(){let F=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",P=A.serverStartedAt?A.serverTime-A.serverStartedAt:0,p=(navigator.userAgent||"").slice(0,200),c=[`${g} v${A.appVersion}`,`Channel: ${F}`,`Uptime: ${$(P)}`,`User-Agent: ${p}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(c).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function K(){let F=document.getElementById("settings-grid");if(!F||document.getElementById(b))return;F.insertAdjacentHTML("beforeend",m()),A.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",O(),x();let P=document.getElementById(b);P&&P.addEventListener("click",function(p){let c=p.target.closest("[data-about-action]");if(!c)return;let o=c.dataset.aboutAction;o==="copy"?C():o==="check-update"?q({silent:!1}):o==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():o==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),I(),setInterval(I,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&K()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&K()})})()});var wt=me(()=>{(function(){"use strict";let b="admin-setup-wizard-root",w="danmu.setupWizard.completed",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(l){return String(l).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},f=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],_=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function z(l){return l?l.label?l.label:l.labelKey?ServerI18n.t(l.labelKey):l.name||l.id||"\u2014":"\u2014"}function y(l){return l?l.descriptionKey?ServerI18n.t(l.descriptionKey):l.description||"":""}let A={open:!1,step:0,themes:_.slice(),activeTheme:_[0].name,selectedTheme:_[0].name,serverName:"Danmu Fire",publicUrl:"",moderationRules:[{id:"sensitive",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",enabled:!0},{id:"rate-limit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",enabled:!0},{id:"fingerprint",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",enabled:!0}]};function m(){A.serverName="Danmu Fire",A.publicUrl=window.location.origin+"/"}function $(){let l=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";l==="setup"&&!A.open?x():l!=="setup"&&A.open&&D({silent:!0})}function x(){A.open=!0,A.step=0,m(),document.body.dataset.setupWizardOpen="1",document.getElementById(b)||(document.body.insertAdjacentHTML("beforeend",L()),o()),t(),q()}function D(l){let u=l&&l.silent;A.open=!1,document.body.dataset.setupWizardOpen="";let i=document.getElementById(b);if(i&&i.remove(),!u&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function L(){return`
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
            ${f.map(function(l,u){return`
                <div class="admin-setup-step" data-step-index="${u}">
                  <span class="bullet">${u+1}</span>
                  <span class="lbl">${g(ServerI18n.t(l.labelKey))}</span>
                </div>
                ${u<f.length-1?'<span class="admin-setup-step-sep"></span>':""}
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
      </div>`}function q(){let l=document.getElementById(b);if(!l)return;l.querySelectorAll(".admin-setup-step").forEach(function(S,B){S.classList.toggle("is-done",B<A.step),S.classList.toggle("is-active",B===A.step)}),l.querySelectorAll(".admin-setup-step-sep").forEach(function(S,B){S.classList.toggle("is-done",B<A.step)});let u=l.querySelector("[data-setup-meta]");u&&(u.textContent=ServerI18n.t("setupWizardStepMeta",{current:A.step+1,total:f.length}));let i=l.querySelector('[data-setup-action="prev"]');i&&(i.disabled=A.step===0);let v=l.querySelector('[data-setup-action="next"]');if(v){let S=f[A.step].id;v.textContent=ServerI18n.t("setupWizardNext")}let h=l.querySelector("[data-setup-foot]");h&&(h.hidden=f[A.step].id==="done");let T=l.querySelector("[data-setup-content]");if(!T)return;let k=f[A.step].id;k==="server"?T.innerHTML=I():k==="moderation"?T.innerHTML=K():k==="theme"?T.innerHTML=p():T.innerHTML=c(),a(k)}function O(l,u,i){return`
      <div class="admin-setup-field">
        <label class="admin-setup-field-label" for="setup-field-${l}">${g(u)}</label>
        <input
          id="setup-field-${l}"
          class="admin-setup-input"
          data-setup-field="${l}"
          value="${g(i)}"
          readonly
        />
      </div>`}function I(){return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardStepServer")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardServerDesc")}</p>
        <div class="admin-setup-server-fields">
          ${O("public-url",ServerI18n.t("setupWizardPublicUrlLabel"),A.publicUrl)}
          ${O("server-name",ServerI18n.t("setupWizardServerNameLabel"),A.serverName)}
        </div>
      </div>`}function C(l,u,i,v){return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${g(l)}</h2>
        <p class="admin-setup-step-desc">${g(u)}</p>
        <div class="admin-setup-toggle-list">
          ${i.map(function(h){return`
              <button
                type="button"
                class="admin-setup-toggle-row${h.enabled?" is-on":""}"
                ${v}="${g(h.id)}"
                aria-pressed="${h.enabled?"true":"false"}"
              >
                <span class="admin-setup-toggle-body">
                  <span class="admin-setup-toggle-title">${g(ServerI18n.t(h.labelKey))}</span>
                  <span class="admin-setup-toggle-desc">${g(ServerI18n.t(h.descKey))}</span>
                </span>
                <span class="admin-setup-toggle-switch${h.enabled?" is-on":""}">
                  <span class="thumb"></span>
                </span>
              </button>`}).join("")}
        </div>
      </div>`}function K(){return C(ServerI18n.t("setupWizardStepModeration"),ServerI18n.t("setupWizardModerationDesc"),A.moderationRules,"data-setup-moderation-toggle")}let F=["default","neon","retro","cinema"];function P(){let l={};return(A.themes||[]).forEach(function(u){l[u.name||u.id]=u}),F.map(function(u){let i=_.filter(function(h){return h.name===u})[0],v=l[u];return i?{name:u,label:v&&v.label,labelKey:i.labelKey,descriptionKey:i.descriptionKey,colors:i.colors}:v}).filter(Boolean)}function p(){let l=P();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${l.map(function(u){let i=u.name||u.id||"",v=(A.selectedTheme||A.activeTheme)===i,h=(u.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${v?" is-selected":""}" data-setup-theme="${g(i)}">
                ${v?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${h.map(function(T,k){let S=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${g(T)};font-size:${10+k*2}px;text-shadow:0 0 6px ${g(T)}66;">${S[k]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${g(z(u))}</div>
                <div class="admin-setup-theme-sub">${g(y(u))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function c(){let l=(function(){for(let i=0;i<A.themes.length;i+=1){let v=A.themes[i];if((v.name||v.id)===(A.selectedTheme||A.activeTheme))return z(v)}return A.selectedTheme||A.activeTheme||"\u2014"})(),u=A.moderationRules.filter(function(i){return i.enabled}).length;return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${g(A.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${g(l)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepModeration")}</span><span class="v">${ServerI18n.t("setupWizardEnabledCount",{n:u,total:A.moderationRules.length})}</span></div>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function o(){let l=document.getElementById(b);l&&l.addEventListener("click",function(u){if(u.target===l){D();return}let i=u.target.closest("[data-setup-action]");if(i){if(i.dataset.setupAction==="close"){D();return}if(i.dataset.setupAction==="prev"&&A.step>0){A.step-=1,q();return}i.dataset.setupAction==="next"&&r()}})}function e(l,u){return l.map(function(i){return i.id===u?Object.assign({},i,{enabled:!i.enabled}):i})}function a(l){let u=document.getElementById(b);if(u){if(l==="moderation"){u.querySelectorAll("[data-setup-moderation-toggle]").forEach(function(i){i.addEventListener("click",function(){A.moderationRules=e(A.moderationRules,i.dataset.setupModerationToggle),q()})});return}if(l==="theme"){u.querySelectorAll("[data-setup-theme]").forEach(function(i){i.addEventListener("click",function(){A.selectedTheme=i.dataset.setupTheme||A.selectedTheme,q()})});return}if(l==="done"){let i=u.querySelector("[data-setup-complete-cta]");i&&i.addEventListener("click",n)}}}async function t(){try{let l=await fetch("/admin/themes",{credentials:"same-origin"});if(!l.ok)return;let u=await l.json(),i=Array.isArray(u.themes)?u.themes:[];if(!i.length)return;A.themes=i.map(function(v){return{name:v.name||v.id||"",label:v.label||v.display_name||v.name||"",description:v.description||"",colors:v.preview_colors||v.colors||v.palette||_[0].colors}}),A.activeTheme=u.active||A.themes[0]&&A.themes[0].name||A.activeTheme,A.selectedTheme||(A.selectedTheme=A.activeTheme),A.open&&f[A.step].id==="theme"&&q()}catch{}}async function s(){if(!A.selectedTheme||A.selectedTheme===A.activeTheme)return!0;try{let l=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A.selectedTheme})});if(!l.ok)throw new Error("HTTP "+l.status);return A.activeTheme=A.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function r(){if(!(f[A.step].id==="theme"&&!await s())){if(A.step<f.length-1){A.step+=1,q();return}n()}}function n(){try{localStorage.setItem(w,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),D()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}x()},close:function(){D()},isCompleted:function(){try{return!!localStorage.getItem(w)}catch{return!1}},__setCapabilityForTest:function(){}};function d(){window.addEventListener("hashchange",$),$()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&d()})})()});var St=me(()=>{(function(){"use strict";let b="sec-poll-deepdive-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(I){return String(I).replace(/[&<>"']/g,function(C){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[C]})},g={poll:null,refreshTimer:0};function f(){return`
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
      </div>`}function _(I){if(I.innerHTML="",!window.AdminEmpty){I.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let C=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});C.classList.add("lg:col-span-2"),C.dataset.emptyKind="poll-deepdive",I.appendChild(C)}let z=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function y(I){return I?new Date(I*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function A(I){if(!I||I.length<2)return"";let C=Math.max.apply(null,I.map(function(c){return c.n}).concat([1])),K=100,F=32,P=K/(I.length-1),p=I.map(function(c,o){let e=(o*P).toFixed(2),a=(F-c.n/C*(F-2)-1).toFixed(2);return e+","+a});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+K+" "+F+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+p.join(" ")+'" /></svg>'}function m(I){let C=I.state||(I.active?"active":"ended"),K=I.question||"\u2014",F=Array.isArray(I.options)?I.options:[],P=function(l){return Number(l.votes!=null?l.votes:l.count)||0},p=F.reduce(function(l,u){return l+P(u)},0),c=C==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:y(I.ended_at)}),o=(function(){let l=Number(I.started_at)||0;if(!l)return"\u2014";let u=C==="active"?Date.now()/1e3:Number(I.ended_at)||l,i=Math.max(0,Math.floor(u-l));return Math.floor(i/60)+":"+String(i%60).padStart(2,"0")})(),e=Number(window._lastOverlayCount)||0,a=e>0?Math.round(p/e*100)+"%":"\u2014",t=e>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:p,audience:e}):ServerI18n.t("pollDeepdiveParticipationUnknown"),s=(function(){let l=Array.isArray(I.questions)?I.questions:[],u=0;for(let i of l)u+=Number(i.duplicate_attempts)||0;return l.length||(u=Number(I.duplicate_attempts)||0),u})(),r=F.map(function(l,u){let i=P(l),v=p>0?i/p*100:0,h=z[u%z.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${w(l.label||l.text||l.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:u+1}))}</span>
            <span class="votes">${i} \xB7 ${v.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${v.toFixed(2)}%;background:${h}"></div>
          </div>
        </div>`}).join(""),n=Array.isArray(I.vote_timeline)?I.vote_timeline:[],d=n.length>=2?A(n):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${w(K)}</div>
          <div class="admin-pdd-state">${w(c)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${p}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${a}</div><div class="sub">${w(t)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${w(o)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${s}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
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
      </div>`}function $(){let I=document.querySelector("[data-pdd-grid]");if(I){if(!g.poll||!g.poll.poll_id){_(I);return}I.innerHTML=m(g.poll)}}async function x(){try{let I=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!I.ok)return;let C=await I.json();g.poll=C,$()}catch{}}function D(){if(!g.poll||!Array.isArray(g.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let I=[["option_label","votes","percentage"]],C=g.poll.options.reduce(function(c,o){return c+(Number(o.votes!=null?o.votes:o.count)||0)},0);g.poll.options.forEach(function(c,o){let e=Number(c.votes!=null?c.votes:c.count)||0,a=C>0?(e/C*100).toFixed(2):"0.00";I.push([c.label||"option_"+(o+1),e,a])});let K=I.map(function(c){return c.map(function(o){let e=String(o);return e.includes(",")||e.includes('"')?'"'+e.replace(/"/g,'""')+'"':e}).join(",")}).join(`
`),F=new Blob([K],{type:"text/csv;charset=utf-8"}),P=URL.createObjectURL(F),p=document.createElement("a");p.href=P,p.download="poll-"+(g.poll.poll_id||"current")+".csv",document.body.appendChild(p),p.click(),document.body.removeChild(p),setTimeout(function(){URL.revokeObjectURL(P)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function L(){try{let I=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!I.ok)throw new Error("HTTP "+I.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function q(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(x(),g.refreshTimer||(g.refreshTimer=setInterval(x,5e3))):g.refreshTimer&&(clearInterval(g.refreshTimer),g.refreshTimer=0)}function O(){let I=document.getElementById("settings-grid");if(!I||document.getElementById(b))return;I.insertAdjacentHTML("beforeend",f());let C=document.getElementById(b);C&&C.addEventListener("click",function(K){let F=K.target.closest("[data-pdd-action]");F&&(F.dataset.pddAction==="export-csv"?D():F.dataset.pddAction==="push"&&L())}),x(),q(),window.addEventListener("hashchange",q)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&O()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&O()})})()});var It=me(()=>{(function(){"use strict";let b="admin-message-drawer-root",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})},f={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]};function _(a){let t=a.detail&&a.detail.entry;t&&(f.entry=t,z(),t.data&&t.data.fingerprint&&$(t.data.fingerprint),x(t))}function z(){f.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(b)||(document.body.insertAdjacentHTML("beforeend",D()),L()),q()}function y(){f.open=!1,document.body.dataset.messageDrawerOpen="";let a=document.getElementById(b);a&&a.remove()}function A(a){if(f.open){if(a.key==="Escape"){y();return}if(a.key==="ArrowLeft"||a.key==="k"){m(-1),a.preventDefault();return}if(a.key==="ArrowRight"||a.key==="j"){m(1),a.preventDefault();return}}}function m(a){if(!f.entry)return;let t=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(t=window.AdminLiveFeed.getEntries()),!t.length)return;let s=t.findIndex(function(d){return d.id===f.entry.id});if(s<0)return;let r=s+-a;if(r<0||r>=t.length){window.showToast&&window.showToast(a<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let n=t[r];f.entry=n,f.fingerprintRecord=null,x(n),q(),n.data&&n.data.fingerprint&&$(n.data.fingerprint)}async function $(a){try{let t=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!t.ok)return;let s=await t.json(),n=(Array.isArray(s.records)?s.records:[]).find(function(d){return(d.fingerprint||"").startsWith(a.slice(0,8))});f.fingerprintRecord=n||null,q()}catch{}}function x(a){let t=a.data&&a.data.fingerprint;if(!t){f.sameFpEntries=[];return}let s=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(s=window.AdminLiveFeed.getEntries()),f.sameFpEntries=s.filter(function(r){let n=r.data&&r.data.fingerprint||r.fingerprint||"";return n&&n.startsWith(t.slice(0,8))}).slice(0,8)}function D(){return`
      <div id="${b}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function L(){let a=document.getElementById(b);a&&a.addEventListener("click",function(t){let s=t.target.closest("[data-msgd-action]");if(!s)return;t.stopPropagation();let r=s.dataset.msgdAction;r==="close"?y():r==="ban-fp"?F():r==="ban-fp-quick"?K():r==="mute-fp"?p():r==="mask-msg"?c():r==="blacklist-kw"?o():r==="reply"?e():r==="prev"?m(-1):r==="next"&&m(1)})}function q(){let a=document.getElementById(b);if(!a)return;let t=a.querySelector("[data-msgd-body]");t&&(t.innerHTML=O())}function O(){let a=f.entry;if(!a)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let t=a.data||{},s=t.fingerprint||"\u2014",r=s==="\u2014"?"\u2014":s.slice(0,8),n=s==="\u2014"?"\u2014":s.slice(0,12),d=a.ts?I(a.ts):"\u2014",l=t.nickname||ServerI18n.t("msgDrawerAnonymous"),u=f.fingerprintRecord||{},i=Number(u.message_count)||0,v=Number(u.violation_count)||0,h=f.sameFpEntries||[],T=h.length?Math.round(h.reduce((S,B)=>S+((B.data||B).text||"").length,0)/h.length):(t.text||"").length,k=0;for(let S=0;S<s.length;S++)k=k*31+s.charCodeAt(S)&65535;return k=k%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${k})">${g((l||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${g(l)}</div>
          <div class="admin-msgd-v4__fp">fp:${g(n)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${g(d)}</span>
      </div>

      <div class="admin-msgd-v4__body">${g(t.text||"")}</div>

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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${i||h.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${T}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${v>0?"warn":"good"}">${v}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP \xB7 ${g(t.ip||"\u2014")}<br/>
          UA \xB7 ${g(t.user_agent||t.ua||"\u2014")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: same deferred EN\xB7\u4E2D\u6587 bilingual monolabel pattern as
             SENDER PROFILE above \u2014 left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecModeration")}</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${s==="\u2014"?"disabled":""}>${g(ServerI18n.t("msgdBanFpBtn"))}</button>
          <button type="button" class="admin-msgd-v4__modbtn is-mute" data-msgd-action="mute-fp" ${s==="\u2014"?"disabled":""}>${g(ServerI18n.t("msgdMuteFpBtn"))}</button>
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
    `}function I(a){try{let t=new Date(a),s=String(t.getHours()).padStart(2,"0"),r=String(t.getMinutes()).padStart(2,"0"),n=String(t.getSeconds()).padStart(2,"0");return s+":"+r+":"+n}catch{return"\u2014"}}function C(a){let t;if(typeof a=="number")t=a*1e3;else if(typeof a=="string")t=new Date(a).getTime();else return"\u2014";if(!t)return"\u2014";let s=(Date.now()-t)/1e3;return s<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(s)}):s<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(s/60)}):s<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(s/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(s/86400)})}async function K(a,t,s){let r=f.entry&&f.entry.data&&f.entry.data.fingerprint;if(!r)return;let n=parseInt(t||0,10)||0;try{let d=n>0?await window.csrfFetch("/admin/modbans",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:r,duration_s:n,reason:a||"",kind:"ban"})}):await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:r,reason:a||""})});if(!d.ok)throw new Error("HTTP "+d.status);let l=s||(n>0?ServerI18n.t("msgDrawerSecondsLabel",{n}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:r.slice(0,8),label:l}),!0),y()}catch(d){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:d.message||""}),!1)}}async function F(){let a=f.entry&&f.entry.data||{},t=a.fingerprint||"\u2014";if(t==="\u2014")return;let s=t.slice(0,12),r=a.nickname||ServerI18n.t("msgDrawerAnonymous"),n=0;for(let k=0;k<t.length;k++)n=n*31+t.charCodeAt(k)&65535;n=n%360;let d=document.createElement("div");d.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${n})">${g((r||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${g(r)}</div>
          <div class="fp">fp:${g(s)}</div>
          <div class="ip">IP \xB7 ${g(a.ip||"\u2014")} \xB7 ${g(a.user_agent||a.ua||"\u2014")}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let l=k=>{d.querySelectorAll(".admin-bancfm-dchip").forEach(S=>S.classList.remove("is-active")),k.classList.add("is-active")};if(d.addEventListener("click",k=>{let S=k.target.closest("[data-ban-duration]");S&&l(S)}),d.addEventListener("keydown",k=>{if(k.key!=="Enter"&&k.key!==" ")return;let S=k.target.closest("[data-ban-duration]");S&&(k.preventDefault(),l(S))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:d,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let i=(d.querySelector("[data-ban-reason]")||{}).value||"",v=d.querySelector(".admin-bancfm-dchip.is-active"),h=v&&parseInt(v.dataset.banDuration||"0",10)||0,T=v?v.textContent.trim():ServerI18n.t("msgDrawerPermanent");return K(i.trim(),h,T)}function P(){}async function p(){return K("[mute]")}async function c(){let a=f.entry&&f.entry.data&&f.entry.data.text;if(!(!a||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBlacklistKwTitle"),subtitle:ServerI18n.t("cfmSubBlacklistKeyword"),severity:"danger",body:ServerI18n.t("msgDrawerBlacklistKwBody"),confirmLabel:ServerI18n.t("msgDrawerBlacklistKwConfirm")})))try{let s=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"keyword",value:a})});if(!s.ok)throw new Error("HTTP "+s.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBlacklisted"),!0),y()}catch(s){window.showToast&&window.showToast(ServerI18n.t("msgDrawerMaskFailed",{msg:s.message||""}),!1)}}async function o(){return c()}async function e(){let a=document.querySelector("[data-msgd-reply]"),t=a?a.value.trim():"";if(t)try{let s=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t})});if(!s.ok)throw new Error("HTTP "+s.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),a&&(a.value="")}catch(s){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:s.message||""}),!1)}}window.AdminMessageDrawer={open:function(a){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:a}}))},close:y},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",_),document.addEventListener("keydown",A))})})()});var kt=me(()=>{(function(){"use strict";let b="danmu.notifications.read",w="danmu.notifications.archived",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(r){return String(r).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})},f={items:[],refreshTimer:0};function _(r){try{let n=localStorage.getItem(r);if(!n)return new Set;let d=JSON.parse(n);return new Set(Array.isArray(d)?d:[])}catch{return new Set}}function z(r,n){try{localStorage.setItem(r,JSON.stringify(Array.from(n)))}catch{}}function y(r){let n=_(b);n.add(r),z(b,n)}async function A(){let r=[m().catch(function(){return[]}),$().catch(function(){return[]}),x().catch(function(){return[]}),D().catch(function(){return[]})],d=(await Promise.all(r)).flat();d.sort(function(l,u){return(u.ts||0)-(l.ts||0)}),f.items=d,C(),P()&&K()}async function m(){let r=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!r.ok)return[];let n=await r.json();return(Array.isArray(n.events)?n.events:[]).map(function(l,u){let i=(Number(l.ts)||0)*1e3,v="tok-"+(l.ts||u)+"-"+(l.kind||"x"),h=l.kind||"?",T="info",k=ServerI18n.t("notifTitleFireTokenEvent");if(h==="rotated")T="info",k=ServerI18n.t("notifTitleFireTokenRotated");else if(h==="revoked")T="warn",k=ServerI18n.t("notifTitleFireTokenRevoked");else if(h==="toggled"){let S=l.meta&&l.meta.enabled;T=S?"good":"warn",k=ServerI18n.t("notifTitleFireTokenToggled",{state:S?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:v,sev:T,src:"Fire Token",ts:i,title:k,desc:ServerI18n.t("notifDescEventType",{kind:h})+(l.meta?" \xB7 "+JSON.stringify(l.meta):""),raw:l}})}async function $(){let r=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!r.ok)return[];let n=await r.json();return(Array.isArray(n.events)?n.events:[]).map(function(l,u){let i=(Number(l.ts)||0)*1e3,v="flt-"+(l.ts||u)+"-"+(l.action||"x")+"-"+u,h=l.action||"match";return{id:v,sev:h==="drop"?"warn":"info",src:"Moderation",ts:i,title:ServerI18n.t("notifTitleFilterHit",{action:h}),desc:ServerI18n.t("notifDescFilterHit",{rule:l.rule_id||"?",text:(l.text||"").slice(0,60)}),raw:l}})}async function x(){let r=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!r.ok)return[];let n=await r.json();return(Array.isArray(n.events)?n.events:[]).map(function(l,u){let i=(Number(l.ts)||0)*1e3,v=String(l.kind||"?");return{id:"wh-"+(l.ts||u)+"-"+v+"-"+u,sev:v==="unregister"?"warn":"info",src:"Webhooks",ts:i,title:ServerI18n.t("notifTitleWebhookEvent",{kind:v}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:l.actor||"system"})+(l.meta?" \xB7 "+JSON.stringify(l.meta):""),raw:l}})}async function D(){let r=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!r.ok)return[];let n=await r.json(),d=Array.isArray(n.events)?n.events:[],l=new Set(["auth","broadcast","system","session","sessions"]);return d.filter(function(u){return l.has(String(u.source||""))}).map(function(u,i){let v=(Number(u.ts)||0)*1e3,h=String(u.kind||"?");return{id:"sys-"+(u.ts||i)+"-"+(u.source||"x")+"-"+h+"-"+i,sev:h==="login_failed"?"warn":"info",src:"System",ts:v,title:ServerI18n.t("notifTitleSystemEvent",{kind:h}),desc:ServerI18n.t("notifDescSystemEvent",{source:u.source||"?",actor:u.actor||"system"}),raw:u}})}let L="admin-notif-panel",q={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/integrations/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/integrations/plugins"},System:{key:"adminNavSystem",hash:"#/events"}};function O(r){let n=q[r];return n?ServerI18n.t(n.key):r}function I(){let r=_(b),n=_(w);return f.items.filter(d=>!r.has(d.id)&&!n.has(d.id))}function C(){let r=document.querySelector("[data-notif-badge]");if(!r)return;let n=I().length;r.textContent=n>99?"99+":String(n),r.hidden=n===0}function K(){let r=document.getElementById(L);if(!r)return;let n=I().slice(0,20),d=n.length?n.map(l=>{let u=q[l.src];return'<li class="admin-notif__item" data-sev="'+g(l.sev)+'"><div class="admin-notif__text">'+g(l.title)+'</div><div class="admin-notif__meta">'+g(O(l.src))+" \xB7 "+g(F(l.ts))+"</div>"+(u?'<button type="button" class="admin-notif__action" data-notif-go="'+g(u.hash)+'" data-notif-id="'+g(l.id)+'">'+g(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+g(ServerI18n.t("notifEmpty"))+"</li>";r.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+g(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+g(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+d+"</ul>"}function F(r){if(!r)return"\u2014";let n=(Date.now()-r)/1e3;return n<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(n)}):n<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(n/60)}):n<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(n/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(n/86400)})}function P(){let r=document.getElementById(L);return!!r&&!r.hidden}function p(){let r=document.getElementById(L);r&&(K(),r.hidden=!1,f.refreshTimer||(f.refreshTimer=setInterval(A,3e4)))}function c(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&p()}function o(){let r=document.getElementById(L);r&&(r.hidden=!0),f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function e(){P()?o():p()}function a(){let r=document.querySelector(".admin-dash-topbar-actions");if(!r||document.getElementById("admin-notif-bell"))return;let n=document.createElement("button");if(n.id="admin-notif-bell",n.type="button",n.className="admin-dash-search is-icon-only admin-notif-bell",n.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),n.title=ServerI18n.t("adminRouteTitle_notifications"),n.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',r.insertBefore(n,r.firstChild),!document.getElementById(L)){let d=document.createElement("div");d.id=L,d.className="admin-notif",d.setAttribute("role","dialog"),d.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),d.hidden=!0,document.body.appendChild(d)}C(),c()}function t(){document.addEventListener("click",r=>{if(r.target.closest("#admin-notif-bell")){r.preventDefault(),e();return}let n=r.target.closest("[data-notif-go]");if(n){y(n.dataset.notifId),o(),location.hash=n.dataset.notifGo,C();return}if(r.target.closest("[data-notif-readall]")){I().forEach(d=>y(d.id)),K(),C();return}P()&&!r.target.closest("#"+L)&&o()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&P()&&o()}),window.addEventListener("hashchange",c),c()}function s(){a(),A()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(a).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),t(),s()})})()});var Tt=me(()=>{(function(){"use strict";let b="sec-audit-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})},g={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},f={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function _(){return`
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
      </div>`}function z(e){if(!e)return"\u2014";try{let a=new Date(Number(e)*1e3),t=String(a.getHours()).padStart(2,"0"),s=String(a.getMinutes()).padStart(2,"0"),r=String(a.getSeconds()).padStart(2,"0");return`${t}:${s}:${r}`}catch{return"\u2014"}}function y(e){let a=String(e.action||e.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(a)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(a)?"warn":"info"}function A(e){return e==="danger"?"var(--hud-crimson, #f87171)":e==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function m(e){return f.filterActor==="all"||String(e.actor||"").toLowerCase()===f.filterActor}function $(e){return f.filterSeverity==="all"||y(e)===f.filterSeverity}function x(){return f.events.filter(function(e){return m(e)&&$(e)})}function D(e){let a=e&&e.meta&&typeof e.meta=="object"?e.meta:{};return a.target||a.keyword||a.fp||a.fingerprint||a.name||a.mode||a.session||a.hook_id||e.target||""}function L(e,a){let t=e!=null,s=a!=null;if(!t&&!s)return"";let r=t?w(JSON.stringify(e)):"",n=s?w(JSON.stringify(a)):"";return t?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${r}</span> \u2192 <span class="admin-audit-diff-a">${n}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${n}</span></span>`}function q(e){let a=e&&e.meta&&typeof e.meta=="object"?e.meta:{},t=[];e.detail&&t.push(`<span>${w(String(e.detail))}</span>`);let s=L(e.before,e.after);s&&t.push(s);let r=Object.assign({},a);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(d){delete r[d]}),Object.keys(r).length&&t.push(`<code class="admin-ui-code admin-audit-meta-extra">${w(JSON.stringify(r))}</code>`),!t.length){let d=g[e.source]&&g[e.source].label||e.source||"system";t.push(`<span>${w(String(d))}</span>`)}return t.join(" ")}function O(e){return e==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":e==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function I(){let e=document.querySelector("[data-audit-rows]");if(!e)return;let a=x();if(!a.length){e.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}e.innerHTML=a.map(function(t){let s=y(t),r=A(s),n=String(t.actor||"system"),d=D(t);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${s}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${w(z(t.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${r};box-shadow:0 0 6px ${r}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${O(n)}">${w(n)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${w(String(t.action||t.kind||"\u2014"))}</span>
              ${d?`<span class="admin-ui-target admin-audit-target">\u2192 ${w(String(d))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${q(t)}</div>
          </div>
        </div>`}).join("")}function C(){let e=document.querySelector("[data-audit-summary]");if(!e)return;let a=x().length,t=f.filterActor==="all"?ServerI18n.t("auditAllRoles"):f.filterActor,s=f.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):f.filterSeverity.toUpperCase();e.textContent=ServerI18n.t("auditSummaryLine",{n:a,actor:t,sev:s})}function K(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(e){e.classList.toggle("is-active",e.dataset.auditActorFilter===f.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(e){e.classList.toggle("is-active",e.dataset.auditSeverityFilter===f.filterSeverity)})}async function F(){try{let e=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!e.ok)return;let a=await e.json(),t=Array.isArray(a.events)?a.events.slice():[];t.sort(function(s,r){return Number(r.ts||0)-Number(s.ts||0)}),f.events=t,K(),I(),C()}catch{}}function P(){let e=x();if(!e.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let a=new Blob([JSON.stringify(e,null,2)],{type:"application/json;charset=utf-8"}),t=URL.createObjectURL(a),s=document.createElement("a");s.href=t,s.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(s),s.click(),document.body.removeChild(s),setTimeout(function(){URL.revokeObjectURL(t)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:e.length}),!0)}function p(){let e=document.getElementById(b);e&&e.addEventListener("click",function(a){let t=a.target.closest("[data-audit-actor-filter]");if(t){f.filterActor=t.dataset.auditActorFilter||"all",K(),I(),C();return}let s=a.target.closest("[data-audit-severity-filter]");if(s){let r=s.dataset.auditSeverityFilter||"all";f.filterSeverity=f.filterSeverity===r?"all":r,K(),I(),C();return}if(a.target.closest("[data-audit-export]")){P();return}a.target.closest("[data-audit-refresh]")&&F()})}function c(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(F(),f.refreshTimer||(f.refreshTimer=setInterval(F,3e4))):f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function o(){let e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",_()),p(),F(),c(),window.addEventListener("hashchange",c))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&o()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&o()})})()});var _t=me(()=>{(function(){"use strict";let b="sec-audience-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(i){return String(i).replace(/[&<>"']/g,function(v){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[v]})},g=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],f=20,_={records:[],filter:"all",shown:f,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function z(i){if(!i)return g[0];let v=0;for(let h=0;h<i.length;h++)v=v*31+i.charCodeAt(h)>>>0;return g[v%g.length]}function y(i){if(!i)return"\u2014";let v=typeof i=="number"?i*1e3:new Date(i).getTime();if(!v)return"\u2014";let h=Math.max(0,(Date.now()-v)/1e3);return h<60?Math.floor(h)+"s":h<3600?Math.floor(h/60)+"m":h<86400?Math.floor(h/3600)+"h":Math.floor(h/86400)+"d"}function A(i){return i==="blocked"||i==="high"?"is-danger":i==="mid"?"is-warn":"is-success"}function m(){return`
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
      </div>`}function $(){let i=_.search.trim().toLowerCase(),v=_.records.slice();return i&&(v=v.filter(function(h){return String(h.nickname||"").toLowerCase().indexOf(i)!==-1||String(h.hash||"").toLowerCase().indexOf(i)!==-1})),v.sort(function(h,T){return _.sort==="last_seen"?(Number(T.last_seen)||0)-(Number(h.last_seen)||0):(Number(T.msgs)||0)-(Number(h.msgs)||0)}),_.filter==="all"?v:_.filter==="flagged"?v.filter(function(h){return h.state==="flagged"||h.state==="blocked"}):_.filter==="extension"?v.filter(function(h){return h.fingerprint&&(h.fingerprint.indexOf("slido")===0||h.fingerprint.indexOf("ext_")===0)}):v}function x(){let i=document.querySelector("[data-aud-stats]");if(!i)return;let v=_.records,h=v.length,T=v.filter(function(H){return H.state==="flagged"}).length,k=v.filter(function(H){return H.state==="blocked"}).length,S=v.reduce(function(H,M){return H+(Number(M.msgs)||0)},0),B=v.filter(function(H){let M=H.last_seen;if(!M)return!1;let E=typeof M=="number"?M*1e3:new Date(M).getTime();return(Date.now()-E)/1e3<300}).length;i.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${h}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${B}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${S}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${T}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${k}</div></div>`}function D(){let i=document.querySelector("[data-aud-filters]");if(!i)return;let v=_.records.length,h=_.records.filter(function(T){return T.state==="flagged"||T.state==="blocked"}).length;i.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${_.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:v})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${_.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:h})}</button>`}let L="__anon__";function q(i){let v=(i.nickname||"").trim();return!v||v==="\u533F\u540D"}function O(i){let v=i.hash||i.fingerprint||"";return v?v.length>9?v.slice(0,4)+"\u2026"+v.slice(-4):v:"\u2014"}function I(){let i=[],v=[];return $().forEach(function(h){q(h)?v.push(h):i.push(h)}),v.length&&i.push({_anonGroup:!0,_count:v.length,fingerprint:L,msgs:v.reduce(function(h,T){return h+(Number(T.msgs)||0)},0),blocked:v.reduce(function(h,T){return h+(Number(T.blocked)||0)},0),last_seen:Math.max.apply(null,v.map(function(h){return h.last_seen||0})),state:v.some(function(h){return h.state==="blocked"})?"blocked":"active"}),i}function C(){let i=document.querySelector("[data-aud-list]"),v=document.querySelector("[data-aud-summary]");if(!i)return;let h=I(),T=Math.min(h.length,_.shown);if(v&&(v.textContent=ServerI18n.t("audienceShownOfTotal",{n:T,total:h.length})),h.length===0){i.innerHTML="";let H=window.AdminEmpty.render("audience");H.dataset.emptyKind="audience",i.appendChild(H);return}let k=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,S=h.slice(0,T).map(function(H){let M=H.fingerprint||"\u2014",E=H.state==="blocked",j=H._anonGroup?ServerI18n.t("audienceAnonymous"):(H.nickname||"").trim(),U=H._anonGroup?"?":j.slice(0,1),Y=z(M);return`
        <div class="admin-aud-row${_.selectedFp===M?" is-selected":""}" data-aud-row data-aud-fp="${w(M)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${Y}">${w(U)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${w(j)}</span>
            ${H._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:H._count})}</span>`:""}
            ${E&&!H._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${H._anonGroup?"\u2014":w(O(H))}</span>
          <span class="col col-msgs">${Number(H.msgs)||0}</span>
          <span class="col col-blocked">${Number(H.blocked)||0}</span>
          <span class="col col-seen">${w(y(H.last_seen))}</span>
          <span class="col col-actions">
            ${H._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${w(M)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),B=h.length>T?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";i.innerHTML=k+S+B}function K(i){return i&&_.records.find(function(v){return v.fingerprint===i})||null}function F(i){if(!i)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let v=[],h=Number(i.msgs)||0,T=i.fingerprint||"";i.state==="blocked"&&v.push(ServerI18n.t("audienceRuleBlocked")),i.state==="flagged"&&v.push(ServerI18n.t("audienceRuleFlagged")),h>=25?v.push(ServerI18n.t("audienceRuleMsgOver",{n:h})):h>=15&&v.push(ServerI18n.t("audienceRuleMsgNear",{n:h}));let k=_.records.filter(function(M){return M.ip&&i.ip&&M.ip===i.ip}).length;k>=3&&v.push(ServerI18n.t("audienceRuleSameIp",{n:k})),(T.indexOf("slido")===0||T.indexOf("ext_")===0)&&v.push(ServerI18n.t("audienceRuleBridge")),(i.nickname==="\u533F\u540D"||!i.nickname)&&v.push(ServerI18n.t("audienceRuleNoNick"));let S="normal",B="var(--hud-lime)",H="NORMAL";return i.state==="blocked"?(S="blocked",B="var(--hud-crimson)",H="BLOCKED"):i.state==="flagged"||h>=25?(S="high",B="var(--hud-crimson)",H="HIGH RISK"):(h>=15||k>=3)&&(S="mid",B="var(--hud-amber)",H="MID"),{level:S,color:B,label:H,rules:v}}async function P(i){_.detailLoading=!0;try{let v=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!v.ok){_.detailMessages=[];return}let h=await v.json(),T=Array.isArray(h.records)?h.records:[],k=Date.now()-300*1e3;_.detailMessages=T.filter(function(S){return(S.fingerprint||"")!==i?!1:(S.timestamp?new Date(S.timestamp).getTime():0)>=k}).slice(0,8)}catch{_.detailMessages=[]}finally{_.detailLoading=!1}}function p(){let i=document.querySelector("[data-aud-detail]");if(!i)return;let v=_.selectedFp;if(!v){i.hidden=!0,i.innerHTML="";return}let h=K(v);if(!h){_.selectedFp=null,i.hidden=!0;return}i.hidden=!1;let T=F(h);i.dataset.riskLevel=T.level;let k=z(v),S=!h.nickname||h.nickname==="\u533F\u540D",B=S?ServerI18n.t("audienceAnonymous"):h.nickname,H=S?"?":B.slice(0,1),M="fp:"+(v||"").slice(0,8),E=T.rules.length?T.rules.map(function(U){return"<li>"+w(U)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",j="";_.detailLoading?j='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":_.detailMessages.length===0?j='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":j=_.detailMessages.map(function(U){let Y=U.muted?"MASKED":U.banned?"BLOCKED":"SHOWN",N=U.muted?"var(--hud-amber)":U.banned?"var(--hud-crimson)":"var(--hud-lime)",R=U.timestamp?new Date(U.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+w(R)+'</span><span class="m">'+w(U.text||"")+'</span><span class="s" style="color:'+N+'">'+Y+"</span></div>"}).join(""),i.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+A(T.level)+'">'+w(T.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+k+'">'+w(H)+'</span><div><div class="nick">'+w(B)+'</div><div class="fp">'+w(M)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+T.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:T.rules.length})+"</div><ul>"+E+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+j+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+w(v)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+w(v)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(h.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+w(v)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+w(v)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+w(v)+'" data-aud-flagged="'+(h.is_flagged?"true":"false")+'">'+(h.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+w(v)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function c(i){_.selectedFp=i,_.detailMessages=[],p(),P(i).then(p)}async function o(){try{let i=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!i.ok)return;let v=await i.json();_.records=Array.isArray(v.entries)?v.entries:[],_.serverStats=v&&v.stats||null,x(),D(),C(),_.selectedFp&&p()}catch{}}async function e(i,v,h){if(i)try{let T=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i,flagged:!!v,note:h||""})});if(!T.ok)throw new Error("HTTP "+T.status);window.showToast&&window.showToast(v?ServerI18n.t("audienceToastFlagged",{fp:i.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:i.slice(0,8)}),!0),o()}catch(T){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:T.message||""}),!1)}}async function a(i,v){if(!i||i==="\u2014")return;let h=v??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:i.slice(0,8)}),"")||"");if(h!==null)try{let T=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i,reason:h})});if(!T.ok)throw new Error("HTTP "+T.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:i.slice(0,8)}),!0),o()}catch(T){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:T.message||""}),!1)}}async function t(i){if(!(!i||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+w(i.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let h=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i})});if(!h.ok)throw new Error("HTTP "+h.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),o()}catch(h){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:h.message||""}),!1)}}async function s(i){if(!(!i||i==="\u2014"))try{let v=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:i,action:"mask",priority:0,enabled:!0})});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:i.slice(0,8)}),!0),o()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:v.message||""}),!1)}}async function r(i){if(!(!i||i==="\u2014"))try{let v=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!v.ok)throw new Error("HTTP "+v.status);let h=await v.json(),k=(Array.isArray(h.rules)?h.rules:[]).filter(function(B){return B&&B.type==="fingerprint"&&B.pattern===i});if(k.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let S=0;for(let B of k)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:B.rule_id||B.id})}).catch(function(){return{ok:!1}})).ok&&(S+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:S,fp:i.slice(0,8)}),!0),o()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:v.message||""}),!1)}}async function n(i){if(!(!i||i==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+w(i.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let h=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:i})});if(!h.ok)throw new Error("HTTP "+h.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:i.slice(0,8)}),!0),o()}catch(h){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:h.message||""}),!1)}}function d(){let i=document.getElementById(b);i&&(i.addEventListener("input",function(v){let h=v.target.closest("[data-aud-search]");h&&(_.search=h.value||"",_.shown=f,C())}),i.addEventListener("change",function(v){let h=v.target.closest("[data-aud-sort]");h&&(_.sort=h.value,C())}),i.addEventListener("click",function(v){let h=v.target.closest("[data-aud-filter]");if(h){_.filter=h.dataset.audFilter,_.shown=f,D(),C();return}let T=v.target.closest("[data-aud-action='ban']");if(T){v.stopPropagation(),n(T.dataset.audFp);return}if(v.target.closest("[data-aud-action='refresh']")){o();return}if(v.target.closest("[data-aud-action='more']")){_.shown+=f,C();return}if(v.target.closest("[data-aud-action='close-detail']")){_.selectedFp=null,p();return}let H=v.target.closest("[data-aud-action='detail-ban']");if(H){n(H.dataset.audFp);return}let M=v.target.closest("[data-aud-action='detail-mask']");if(M){s(M.dataset.audFp);return}let E=v.target.closest("[data-aud-action='detail-safe']");if(E){r(E.dataset.audFp);return}let j=v.target.closest("[data-aud-action='flag']");if(j){v.stopPropagation(),e(j.dataset.audFp,j.dataset.audFlagged!=="true");return}let U=v.target.closest("[data-aud-action='kick']");if(U){v.stopPropagation(),a(U.dataset.audFp);return}let Y=v.target.closest("[data-aud-action='unkick']");if(Y){v.stopPropagation(),t(Y.dataset.audFp);return}let N=v.target.closest("[data-aud-row]");if(!(N&&N.dataset.audFp===L)&&N&&!v.target.closest("button")){c(N.dataset.audFp);return}}))}function l(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(o(),_.refreshTimer||(_.refreshTimer=setInterval(o,15e3))):_.refreshTimer&&(clearInterval(_.refreshTimer),_.refreshTimer=0)}function u(){let i=document.getElementById("settings-grid");!i||document.getElementById(b)||(i.insertAdjacentHTML("beforeend",m()),d(),o(),l(),window.addEventListener("hashchange",l))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&u()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&u()})})()});var Et=me(()=>{(function(){"use strict";let b=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],w={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},g=2500,f=0,_=0,z=null;function y(){if(z)return z;let D=document.createElement("div");return D.className="admin-konami-hud",D.setAttribute("aria-hidden","true"),D.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(D),z=D,D}function A(){if(f===0){z&&z.classList.remove("is-on");return}let D=y();D.classList.add("is-on");let L=D.querySelector(".admin-konami-hud-keys");L&&(L.innerHTML=b.map((O,I)=>`<span class="admin-konami-hud-key ${I<f?"is-filled":""}">${w[O]}</span>`).join(""));let q=D.querySelector(".admin-konami-hud-progress");if(q){let O=Math.round(f/b.length*100);q.style.width=O+"%"}}function m(D){f=0,_&&(clearTimeout(_),_=0),D||A()}function $(){_&&clearTimeout(_),_=setTimeout(()=>m(),g)}async function x(){try{let D=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!D.ok)throw new Error("HTTP "+D.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(D){console.warn("[konami] trigger failed:",D&&D.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",D=>{let L=D.target;if(L&&(L.tagName==="INPUT"||L.tagName==="TEXTAREA"||L.isContentEditable))return;let q=b[f];if(!(D.key===q||q==="b"&&D.key.toLowerCase()==="b"||q==="a"&&D.key.toLowerCase()==="a")){f=D.key===b[0]?1:0,A(),f>0?$():_&&(clearTimeout(_),_=0);return}if(f++,A(),f>=b.length){m(!0),x();return}$()}),window.AdminKonami={trigger:x}})()});var $t=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;function w(s){return s==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:s==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:s==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function g(){let s=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,r=s?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${s?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${b(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${r}`:""}
                <span id="fontsTotalSize" style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.12em">${ServerI18n.t("fontsTotalPlaceholder")}</span>
              </div>
            </div>
            <div id="adminFontEmptyStateHost"></div>
            ${s?`
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
    `}var f=null,_=[];function z(s,r){var n=document.getElementById("adminFontEmptyStateHost");if(!n)return;if((s||[]).some(u=>u.type==="uploaded")){n.innerHTML="";return}n.innerHTML="";var l=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:r?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var u=document.getElementById("adminFontFileInput");u&&u.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});l.dataset.emptyKind="fonts",n.appendChild(l)}function y(s,r){let n=s.weight||"\u2014",d=s.sizeLabel||"\u2014",l=s.foundry||(s.type==="system"?"System":s.type==="default"?"Google / Noto":"Uploaded"),u=s.format||"\u2014",i=s.status||s.type,v=`font-family: "${b(s.name)}", sans-serif;`,h=w(i),T=[];if(r){if(i!=="default"&&T.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${b(s.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),i!=="default"){let k=i==="enabled"||i==="system",S=k?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");T.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${b(s.name)}" data-enabled="${k?"true":"false"}">${S}</button>`)}s.type==="uploaded"&&(T.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${b(s.name)}" title="${b(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),T.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${b(s.name)}">${b(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${b(s.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${v}" class="truncate">${b(s.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(T.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${T.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${b(l)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${b(n)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${b(d)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${b(u)}</span><div style="text-align:right">${h}</div></div>`}let A=null,m={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function $(){if(A)return A;try{let s=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return s.ok?(A=(await s.json()).presets||{},A):{}}catch{return{}}}function x(s){return!s||!Number.isFinite(s)?"\u2014":s<1024?s+" B":s<1024*1024?(s/1024).toFixed(1)+" KB":(s/(1024*1024)).toFixed(2)+" MB"}async function D(s){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let r=await $();if(!Object.keys(r).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let n=new Set(["cjk_common","latin"]),d="",l=document.createElement("div");l.className="admin-font-subset-modal-body";let u=()=>{let h=Object.keys(r).map(k=>{let S=m[k]||{label:k,glyphs:"\u2014",estSize:"\u2014"},B=S.labelKey?ServerI18n.t(S.labelKey):S.label,H=n.has(k);return`
          <label class="admin-font-subset-chip${H?" is-active":""}" data-subset-preset="${k}">
            <span class="admin-font-subset-chip-check">${H?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${b(B)}</span>
            <span class="admin-font-subset-chip-range">${b(r[k])}</span>
            <span class="admin-font-subset-chip-meta">${S.glyphs} glyphs \xB7 ${S.estSize}</span>
          </label>`}).join("");l.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${b(s)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${h}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${b(d)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,l.querySelectorAll("[data-subset-preset]").forEach(k=>{k.addEventListener("click",S=>{S.preventDefault();let B=k.dataset.subsetPreset;n.has(B)?n.delete(B):n.add(B),u()})});let T=l.querySelector("[data-subset-custom]");T&&T.addEventListener("input",()=>{d=T.value})};if(u(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:l,width:540}))return;let v=[];if(n.forEach(h=>{r[h]&&v.push(r[h])}),d.trim()&&v.push(d.trim()),!v.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await L(s,v.join(","))}async function L(s,r){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:s}),!0);let n=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(s)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:r})}),d=await n.json().catch(()=>({}));if(n.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!n.ok){window.showToast?.(d.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:n.status}),!1);return}let l=d.saved_bytes||0,u=Math.round((d.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:s,before:x(d.original_size),after:x(d.new_size),pct:u}),!0),I()}catch(n){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:n.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function q(s){try{let r=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:s})});if(!r.ok)throw new Error("HTTP "+r.status);f=s,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:s}),!0),I()}catch(r){console.error("[admin-fonts] set default failed:",r),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function O(s,r){try{let n=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(s)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!r})});if(!n.ok)throw new Error("HTTP "+n.status);window.showToast(ServerI18n.t(r?"fontsToggleOffToast":"fontsToggleOnToast",{name:s}),!0),I()}catch(n){console.error("[admin-fonts] toggle failed:",n),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function I(){var s=document.getElementById("adminFontList");if(!s)return;let r=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var n=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!n.ok)throw new Error("HTTP "+n.status);var d=await n.json(),l=d.fonts||[];if(_=l,window.AdminTabs?.setTabCount?.("assets","fonts",l.length||""),z(l,r),l.length===0){s.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,p(l);return}s.innerHTML=l.map(u=>y(u,r)).join(""),p(l),c()}catch(u){console.error("[admin-fonts] fetch failed:",u),s.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,z([],r)}}async function C(s){try{let r=await s.slice(0,4).arrayBuffer(),n=new Uint8Array(r);return n[0]===0&&n[1]===1&&n[2]===0&&n[3]===0?"TTF":n[0]===79&&n[1]===84&&n[2]===84&&n[3]===79?"OTF":n[0]===119&&n[1]===79&&n[2]===70&&n[3]===50?"WOFF2":n[0]===116&&n[1]===114&&n[2]===117&&n[3]===101?"TTF":n[0]===116&&n[1]===116&&n[2]===99&&n[3]===102?"TTC":null}catch{return null}}function K(s,r){let n=document.getElementById("adminFontDropStatus");if(n){if(!s){n.textContent="",n.hidden=!0,n.classList.remove("is-good","is-bad");return}n.hidden=!1,n.textContent=s,n.classList.toggle("is-good",r==="good"),n.classList.toggle("is-bad",r==="bad")}}function F(s){let r=document.getElementById("adminFontUploadError");if(!r)return;if(!s){r.hidden=!0,r.innerHTML="";return}r.hidden=!1,r.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${b(s)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let n=r.querySelector("[data-font-error-retry]");n&&n.addEventListener("click",function(){let d=document.getElementById("adminFontFileInput");d&&d.click()})}async function P(s){if(!s)return;F("");let r=s.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(r)){window.showToast(ServerI18n.t("invalidFileType"),!1),K(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),F(ServerI18n.t("fontsExtNotSupportedFull"));return}if(s.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),K(ServerI18n.t("fontsFileTooLarge"),"bad"),F(ServerI18n.t("fontsFileTooLargeFull"));return}let n=await C(s);if(!n){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),K(ServerI18n.t("fontsMagicInvalid"),"bad"),F(ServerI18n.t("fontsMagicValidationFailed"));return}K(ServerI18n.t("fontsUploadValidated",{magic:n,size:(s.size/1024).toFixed(1)}),"good");try{var d=new FormData;d.append("fontfile",s);var l=await window.csrfFetch("/admin/upload_font",{method:"POST",body:d}),u=await l.json();l.ok?(window.showToast(u.message||ServerI18n.t("fontUploadFallback")),K(ServerI18n.t("fontsUploadedStatus",{filename:s.name}),"good"),F(""),await I()):(window.showToast(u.error||ServerI18n.t("uploadFailed"),!1),K(u.error||ServerI18n.t("uploadFailed"),"bad"),F(u.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(i){console.error("[admin-fonts] upload error:",i),window.showToast(ServerI18n.t("uploadNetworkError"),!1),K(ServerI18n.t("fontsNetworkErrorShort"),"bad"),F(ServerI18n.t("fontsNetworkDisconnected"))}}function p(s){let r=document.getElementById("fontsTotalSize");r&&(r.textContent=ServerI18n.t("fontsTotalCount",{n:s.length}))}function c(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(s=>{s.addEventListener("click",r=>{if(r.target.closest(".admin-font-delete-btn"))return;let n=s.dataset.font,d=document.getElementById("fontsPreviewFamily"),l=document.getElementById("fontsPreviewHeadline"),u=document.getElementById("fontsPreviewLatin"),i=document.getElementById("fontsPreviewCJK");d&&(d.textContent=n);let v=`"${n}", sans-serif`;l&&(l.style.fontFamily=v),u&&(u.style.fontFamily=v),i&&(i.style.fontFamily=v)})})}async function o(){var s=document.getElementById("adminFontFileInput");if(s){var r=s.files&&s.files[0];if(!r){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await P(r),s.value=""}}function e(){let s=document.getElementById("adminFontDrop"),r=document.getElementById("adminFontFileInput");!s||!r||(s.addEventListener("click",n=>{n.target!==r&&r.click()}),s.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),r.click())}),["dragenter","dragover"].forEach(n=>{s.addEventListener(n,d=>{d.preventDefault(),d.stopPropagation(),s.classList.add("is-drag")})}),["dragleave","drop"].forEach(n=>{s.addEventListener(n,d=>{d.preventDefault(),d.stopPropagation(),s.classList.remove("is-drag")})}),s.addEventListener("drop",async n=>{let d=n.dataTransfer&&n.dataTransfer.files;d&&d[0]&&await P(d[0])}))}async function a(s){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",s),confirmLabel:ServerI18n.t("deleteBtn")}))try{var n=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(s),{method:"DELETE"}),d=await n.json();n.ok?(window.showToast(d.message||ServerI18n.t("fontDeleteFallback")),await I()):window.showToast(d.error||ServerI18n.t("deleteFailed"),!1)}catch(l){console.error("[admin-fonts] delete error:",l),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function t(){var s=document.getElementById("settings-grid");if(s){s.insertAdjacentHTML("beforeend",g());var r=document.getElementById("adminFontFileInput");r&&r.addEventListener("change",o),e();var n=document.getElementById("adminFontList");n&&n.addEventListener("click",function(d){var l=d.target.closest(".admin-font-delete-btn");if(l){d.stopPropagation(),a(l.dataset.name);return}var u=d.target.closest(".admin-font-default-btn");if(u){d.stopPropagation(),q(u.dataset.name);return}var i=d.target.closest(".admin-font-toggle-btn");if(i){d.stopPropagation();let h=i.dataset.enabled==="true";O(i.dataset.name,h);return}var v=d.target.closest(".admin-font-subset-btn");v&&(d.stopPropagation(),D(v.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(d=>d.ok?d.json():null).then(d=>{d&&Array.isArray(d.FontFamily)&&(f=d.FontFamily[3]||null)}).catch(()=>{}).finally(I)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var s=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&t()});s.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&t()}})})()});var xt=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let w="sec-scheduler",g=5e3,f=null,_=null;function z(t,s,r,n){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${t}">
        <input type="text" placeholder="${m(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${m(s)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${m(r||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${n||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function y(t){var s=t==="active"?"is-success":t==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+s+'" title="'+m(t)+'"></span>'}function A(t){let s=t.state==="paused",r=t.repeat_count===void 0?"\u2014":t.repeat_count===-1?"\u221E":String(t.repeat_count),n=t.repeat_count>0&&typeof t.remaining=="number"?String(t.repeat_count-t.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${m(t.id)}">
        ${y(t.state)}
        <div>
          <div class="admin-scheduler-job-title">#${b(t.id)}</div>
          <div class="admin-scheduler-job-meta">${b(ServerI18n.t("schedulerMessages"))} ${t.messages?t.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${t.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${b(n)}</span>
        <span class="admin-scheduler-job-val">${b(r)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${s?"is-active":"is-warn"}"
            data-job-id="${m(t.id)}" data-action="${s?"resume":"pause"}">
            ${b(ServerI18n.t(s?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${m(t.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function m(t){return b(t)}function $(){let t=document.querySelectorAll("#schedulerMessages [data-msg-index]"),s=[];return t.forEach(function(r){let n=r.querySelector(".scheduler-msg-text").value.trim(),d=r.querySelector(".scheduler-msg-color").value,l=parseInt(r.querySelector(".scheduler-msg-size").value,10)||48;n&&s.push({text:n,color:d,size:l})}),s}function x(t,s,r){let n=document.getElementById("schedulerMessages");if(!n)return;let d=n.children.length;n.insertAdjacentHTML("beforeend",z(d,t||"",s||"#ffffff",r||48))}function D(t){let s=t.closest("[data-msg-index]");s&&s.remove();let r=document.getElementById("schedulerMessages");r&&r.querySelectorAll("[data-msg-index]").forEach(function(n,d){n.dataset.msgIndex=d})}async function L(){let t=$();if(t.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let s=parseInt(document.getElementById("schedulerInterval").value,10);if(!s||s<1||s>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let r=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(r)||r<-1||r>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let n=document.getElementById("schedulerCreateBtn");n&&(n.disabled=!0);try{let d=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:t,interval_sec:s,repeat_count:r})}),l=await d.json();d.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await p()):showToast(l.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(d){console.error("Scheduler create error:",d),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{n&&(n.disabled=!1)}}function q(t){return"msg"}function O(t){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[t]||"\u25C8"}function I(t){return t.next_run_at?new Date(t.next_run_at*1e3).getHours():new Date().getHours()}function C(t){if(t.next_run_at){let s=new Date(t.next_run_at*1e3);return String(s.getHours()).padStart(2,"0")+":"+String(s.getMinutes()).padStart(2,"0")}return"--:--"}function K(t){let s=t.id||"job",r=Array.isArray(t.messages)?t.messages.length:null;return"Job #"+s+(r!=null?" \xB7 "+r+" messages":"")}function F(t){let s=document.querySelector("[data-sch-timeline]");if(!s)return;let r=[],n=new Date().getHours();for(let l=0;l<24;l++){let u=l>=Math.max(0,n-1)&&l<=Math.min(23,n+2);r.push('<div class="admin-sch-timeline-hour'+(u?" is-peak":"")+'">'+String(l).padStart(2,"0")+"</div>")}let d=(t||[]).map(function(l){let u=q(l),i=O(u),v=l.state!=="paused";return'<div class="admin-sch-timeline-row'+(v?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+b(C(l))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+u+'">'+i+'</span><span class="admin-sch-evt-desc">'+b(K(l))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(v?" is-on":"")+'">'+ServerI18n.t(v?"uiOn":"uiOff")+"</span></div></div>"}).join("");s.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+r.join("")+"</div></div>"+(d||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+b(ServerI18n.t("noActiveJobs"))+"</div>"))}function P(t){let s=document.querySelector("[data-sch-calendar]");if(!s)return;let r=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],n=new Date,d=(n.getDay()+6)%7,l=new Date(n);l.setDate(n.getDate()-d);let u=r.map(function(v,h){let T=new Date(l);return T.setDate(l.getDate()+h),'<div class="admin-sch-calendar-day-head'+(h===d?" is-today":"")+'">'+b(v)+'<span class="date">'+T.getDate()+"</span></div>"}).join(""),i=[0,1,2,3,4,5,6].map(function(v){return'<div class="admin-sch-calendar-cell">'+(v===d?(t||[]).slice(0,5).map(function(T){let k=q(T),S=O(k);return'<span class="admin-sch-cal-chip is-'+k+'">'+b(C(T))+" "+S+"</span>"}).join(""):"")+"</div>"}).join("");s.innerHTML='<div class="admin-sch-calendar-head">'+u+'</div><div class="admin-sch-calendar-body">'+i+"</div>"}async function p(){let t=document.getElementById("schedulerJobsList"),s=document.getElementById("schedulerJobsCount");if(t)try{let r=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!r.ok){t.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadJobsFailed"))+"</div>",s&&(s.textContent="\u2014");return}let n=await r.json();if(!Array.isArray(n.jobs)){t.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadJobsFailed"))+"</div>",s&&(s.textContent="\u2014");return}s&&(s.textContent=ServerI18n.t("schItemCount",{n:n.jobs.length})),F(n.jobs),P(n.jobs);let d=document.querySelector("[data-sch-meta]");if(d){let l=new Date().toISOString().slice(0,10);d.textContent=ServerI18n.t("schTodayMeta",{date:l,n:n.jobs.length})}if(n.jobs.length===0){t.innerHTML="";let l=window.AdminEmpty.render("scheduler");l.dataset.emptyKind="scheduler",t.appendChild(l);return}t.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+b(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+b(ServerI18n.t("schColInterval"))+"</span><span>"+b(ServerI18n.t("schColSent"))+"</span><span>"+b(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+n.jobs.map(A).join("")}catch(r){console.error("Scheduler fetch error:",r),t.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadJobsError"))+"</div>"}}async function c(t,s){try{let r=await csrfFetch("/admin/scheduler/"+encodeURIComponent(s),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:t})}),n=await r.json();r.ok?(showToast(s==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await p()):showToast(n.error||ServerI18n.t("actionFailed"),!1)}catch(r){console.error("Scheduler toggle error:",r),showToast(ServerI18n.t("actionFailed"),!1)}}async function o(t){try{let s=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:t})}),r=await s.json();s.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await p()):showToast(r.error||ServerI18n.t("cancelFailed"),!1)}catch(s){console.error("Scheduler cancel error:",s),showToast(ServerI18n.t("cancelFailed"),!1)}}function e(){let t=document.getElementById("advanced-grid")||document.getElementById("settings-grid");if(!t)return;t.insertAdjacentHTML("beforeend",`
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
    `);let s=document.querySelectorAll("[data-sch-view]");s.forEach(u=>{u.addEventListener("click",()=>{let i=u.dataset.schView;s.forEach(T=>{T.classList.toggle("is-active",T===u),T.setAttribute("aria-selected",T===u?"true":"false")});let v=document.querySelector("[data-sch-timeline]"),h=document.querySelector("[data-sch-calendar]");v&&(v.hidden=i!=="timeline"),h&&(h.hidden=i!=="calendar")})}),x("","#ffffff",48);let r=document.getElementById("schedulerMessages");r&&r.addEventListener("click",function(u){let i=u.target.closest(".scheduler-remove-msg");i&&D(i)});let n=document.getElementById("schedulerAddMsg");n&&n.addEventListener("click",function(){x("","#ffffff",48)});let d=document.getElementById("schedulerCreateBtn");d&&d.addEventListener("click",L);let l=document.getElementById("schedulerJobsList");l&&l.addEventListener("click",function(u){let i=u.target.closest(".scheduler-job-toggle");if(i){c(i.dataset.jobId,i.dataset.action);return}let v=u.target.closest(".scheduler-job-cancel");v&&o(v.dataset.jobId)}),f&&(clearInterval(f),f=null),_||(_=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(w)},intervalMs:g,tick:p}),window.addEventListener("beforeunload",function(){_&&(_(),_=null)}))}function a(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let t=!1;new MutationObserver(function(){if((document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(w)&&!t){t=!0;try{e()}finally{t=!1}}}).observe(document.body,{childList:!0,subtree:!0}),(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(w)&&e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a()})()});var Lt=me(()=>{(function(){"use strict";let b="admin-security-v2-page";var w=window.AdminUtils.escapeHtml;function g(){let e=a=>ServerI18n.t(a);return`
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
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("security2WsTokenToggleLabel")}
              <span class="sub">${e("security2WsTokenToggleHint")}</span>
            </span>
            <span class="val">
              <span id="sec2-wsa-status" class="admin-ui-chip admin-sec-status-chip">${e("security2Loading")}</span>
              <input id="sec2-wsa-toggle" type="checkbox" class="admin-ui-checkbox" />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <input id="sec2-wsa-token" type="password" class="admin-ui-input admin-ui-grow" placeholder="${e("security2NotConfigured")}" autocomplete="off" spellcheck="false" />
            <span class="val">
              <button type="button" id="sec2-wsa-reveal" class="admin-ui-action admin-sec-token-action">\u{1F441}</button>
              <button type="button" id="sec2-wsa-copy" class="admin-ui-action admin-sec-token-action">${e("security2CopyButton")}</button>
              <button type="button" id="sec2-wsa-rotate" class="admin-ui-danger-btn">${e("security2RegenerateButton")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${e("security2LastRotationLabel")}</span>
            <span class="val">
              <span id="sec2-wsa-lastrot" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-wsa-save" class="admin-ui-action is-primary">${e("security2SaveButton")}</button>
            </span>
          </div>
        </div>

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
      </div>`}function f(e){if(!e)return 0;let a=0;e.length>=8&&a++,e.length>=12&&a++;let t=(/[a-z]/.test(e)?1:0)+(/[A-Z]/.test(e)?1:0)+(/\d/.test(e)?1:0)+(/[^\w]/.test(e)?1:0);return t>=2&&a++,t>=3&&a++,Math.min(4,a)}function _(e){let a=document.getElementById("sec2-pw-meter"),t=document.getElementById("sec2-pw-label");if(!a||!t)return;let s=f(e),r=[0,25,50,75,100],n=["","is-bad","is-warn","is-warn","is-good"],d=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];a.style.width=r[s]+"%",a.className=n[s],t.textContent=d[s]}async function z(e){e.preventDefault();let a=document.getElementById("sec2-pw-current").value,t=document.getElementById("sec2-pw-new").value,s=document.getElementById("sec2-pw-confirm").value;if(!a||!t||!s){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(t.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(t!==s){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let r=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:a,new_password:t,confirm_password:s})}),n=await r.json().catch(()=>({}));r.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),_("")):window.showToast&&showToast(n.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(r){console.error("Password change error:",r),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function y(){let e=document.getElementById("sec2-wsa-status");try{let a=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!a.ok)throw new Error(a.status);let t=await a.json();document.getElementById("sec2-wsa-toggle").checked=!!t.require_token,document.getElementById("sec2-wsa-token").value=t.token||"",e.textContent=t.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),e.className="admin-ui-chip admin-sec-status-chip "+(t.require_token?"is-active":"");let s=localStorage.getItem("ws-auth-last-rotation");document.getElementById("sec2-wsa-lastrot").textContent=s?new Date(parseInt(s,10)).toLocaleString():"\u2014"}catch{e.textContent=ServerI18n.t("security2LoadFailed"),e.className="admin-ui-chip is-danger admin-sec-status-chip"}}function A(e){return String(e||"").split(/\n+/).map(a=>a.trim()).filter(Boolean)}function m(e){return String(e||"").split(",").map(a=>a.trim().toUpperCase()).filter(Boolean)}function $(e,a){let t=document.getElementById(e);t&&(t.textContent=a==null||a===""?"\u2014":String(a))}async function x(){try{let e=await fetch("/admin/security/settings",{credentials:"same-origin"}),a=await e.json().catch(()=>({}));if(!e.ok)throw new Error(a.error||e.status);let t=a.ip_allowlist||{},s=a.cors||{},r=a.tls||{},n=!!t.enabled,d=Array.isArray(t.entries)?t.entries:[],l=document.getElementById("sec2-ip-dot"),u=document.getElementById("sec2-ip-status-chip"),i=document.getElementById("sec2-ip-toggle"),v=document.getElementById("sec2-ip-entries");l&&(l.classList.toggle("is-lime",n),l.classList.toggle("is-amber",!n)),u&&(u.textContent=n?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),u.className="admin-ui-chip admin-sec-status-chip "+(n?"is-active":"is-warn")),i&&(i.checked=n),v&&(v.value=d.join(`
`)),$("sec2-ip-current",t.current_ip||"\u2014"),$("sec2-ip-status-line",n?ServerI18n.t("security2IpStatusEnabled",{n:d.length}):ServerI18n.t("security2IpStatusDisabled"));let h=Array.isArray(s.origins)?s.origins:["*"],T=Array.isArray(s.methods)?s.methods:[],k=document.getElementById("sec2-cors-origins"),S=document.getElementById("sec2-cors-credentials"),B=document.getElementById("sec2-cors-methods"),H=document.getElementById("sec2-cors-cred-dot");k&&(k.value=h.join(`
`)),S&&(S.checked=!!s.supports_credentials),B&&(B.value=T.join(", ")),H&&(H.classList.toggle("is-lime",!s.supports_credentials),H.classList.toggle("is-amber",!!s.supports_credentials)),$("sec2-cors-origins-line",h.join(", ")),$("sec2-cors-credentials-line",s.supports_credentials?"true":"false"),$("sec2-cors-methods-line",T.join(", "));let M=r.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:r.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");$("sec2-hsts-status",M)}catch(e){console.error("Security settings load error:",e);let a=document.getElementById("sec2-ip-status-chip");a&&(a.textContent=ServerI18n.t("security2LoadFailed"),a.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function D(e){let a={};if(e==="ip")a.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:A(document.getElementById("sec2-ip-entries")?.value||"")};else if(e==="cors"){let t=A(document.getElementById("sec2-cors-origins")?.value||"");a.cors={origins:t.length?t:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:m(document.getElementById("sec2-cors-methods")?.value||"")}}try{let t=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),s=await t.json().catch(()=>({}));if(!t.ok){window.showToast&&showToast(s.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await x()}catch(t){console.error("Security settings save error:",t),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function L(){let e=document.getElementById("sec2-wsa-toggle").checked,a=document.getElementById("sec2-wsa-token").value.trim();if(e&&!a){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}try{let t=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:e,token:a})}),s=await t.json().catch(()=>({}));t.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0),await y()):window.showToast&&showToast(s.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function q(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))try{let a=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),t=await a.json().catch(()=>({}));if(a.ok){window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0);try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await y()}else window.showToast&&showToast(t.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}function O(){let e=document.getElementById("sec2-wsa-token").value;if(!e){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function I(){let e=document.getElementById("sec2-wsa-token");e.type=e.type==="password"?"text":"password"}async function C(e){let a={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:s=>ServerI18n.t("security2ToastApiTokensRevoked",{n:s.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[e];if(!(!a||!await window.HudConfirm?.open({icon:"\u26A0",title:a.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:a.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:a.severity||"warn",body:a.confirm,confirmLabel:a.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")})))try{let s=await window.csrfFetch(a.url,{method:"POST"}),r=await s.json().catch(()=>({}));if(!s.ok){window.showToast&&showToast(r.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(window.showToast&&showToast(a.ok(r),!0),e==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await y()}}catch(s){console.error("Security danger action error:",s),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}function K(){let e=document.getElementById("sec2-session-self-line");if(e){let s=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),r=navigator.platform||navigator.userAgentData?.platform||"",n=s?s[0].split("/")[0]:"Browser";e.textContent=ServerI18n.t("security2SessionSelfLine",{browser:n,platform:r})}let a=document.getElementById("sec2-tls-dot"),t=document.getElementById("sec2-tls-status");if(a&&t){let s=location.protocol==="https:";a.classList.add(s?"is-lime":"is-crimson"),t.textContent=s?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function F(){let e=document.getElementById("sec2-pw-form");e&&e.addEventListener("submit",z);let a=document.getElementById("sec2-pw-new");a&&a.addEventListener("input",t=>_(t.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",L),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",q),document.getElementById("sec2-wsa-copy")?.addEventListener("click",O),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",I),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>D("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>D("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(t=>{t.addEventListener("click",()=>{let s=document.querySelector(`[data-sec-disclosure="${t.dataset.secDisclose}"]`);s&&(s.hidden=!s.hidden,t.setAttribute("aria-expanded",s.hidden?"false":"true"),s.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(t=>{t.dataset.secBound!=="1"&&(t.dataset.secBound="1",t.addEventListener("click",()=>C(t.dataset.secDanger)))}),K(),y(),x()}function P(){}function p(){let e=document.querySelector(".admin-dash-grid"),a=document.getElementById(b);if(!e||!a)return;let t=e.dataset.activeRoute||"live",s=e.dataset.activeLeaf||t;a.style.display=t==="security"||t==="system"&&s==="security"?"":"none"}function c(){let e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",g()),F(),p())}function o(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let e=null;function a(){let s=document.querySelector(".admin-dash-grid");!s||e||(e=new MutationObserver(p),e.observe(s,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)?c():void 0,a(),p()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",p),document.addEventListener("admin-panel-rendered",()=>{c(),a(),p()}),a(),c()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var Ct=me(()=>{(function(){"use strict";let b="admin-backup-v2-page";var w=window.AdminUtils.escapeHtml;function g(){let t=s=>ServerI18n.t(s);return`
      <div id="${b}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${t("backupPageTitle")}</h2>
          <p class="admin-ui-page-note">${t("backupPageNote")}</p>
          <!-- 2026-09-07\uFF1A\u642C\u56DE\u9801\u9996\u88E1\u3002\u9801\u9996\u88AB\u4F75\u9032 topbar \u6642\uFF0Cshell \u7684
               [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB\uFF08\u898B admin.js \u7684
               _dedupSectionTitles\uFF09\uFF0C\u4E0D\u6703\u518D\u8DDF\u8457\u6D88\u5931\u3002 -->
          <div class="admin-ui-inline-toolbar admin-ui-page-actions">
            <button type="button" id="bk2-pack-export" class="admin-ui-action is-primary">${t("backupPackExportBtn")}</button>
          </div>
        </div>

        <div class="admin-ui-group-label">${t("backupGroupDownload")}</div>
        <div class="admin-ui-group" data-zone="export">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecFullState")}
              <span class="sub" id="bk2-pack-summary">${t("backupCalculatingSize")}</span>
              <span class="sub" id="bk2-pack-detail">${t("backupPackContentList")}</span>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecSettingsSnap")}
              <span class="sub">${t("backupSettingsSnapshotDesc")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-settings-download" class="admin-ui-action is-primary">${t("backupDownloadBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecAssetPack")}
              <span class="sub" id="bk2-assets-summary">${t("backupCalculatingAssetSize")}</span>
              <span class="sub" id="bk2-assets-detail">${t("backupAssetContentList")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-assets-export" class="admin-ui-action is-primary">${t("backupAssetsExportBtn")}</button>
            </span>
          </div>

        </div>

        <div class="admin-ui-group-label">${t("backupGroupRestore")}</div>
        <div class="admin-ui-group" data-zone="restore">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecRestoreSettings")}
              <span class="sub">${t("backupSettingsRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-settings-upload" type="file" accept="application/json,.json" class="admin-ui-input" />
              <button type="button" id="bk2-settings-dryrun" class="admin-ui-action">${t("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-settings-apply" class="admin-ui-danger-btn" disabled title="${t("backupApplyDisabledTitle")}">${t("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-settings-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecRestoreFull")}
              <span class="sub">${t("backupFullPackRestoreNote")}</span>
              <span class="sub">${t("backupRestoreBeforeApplyHint")}</span>
            </span>
            <span class="val">
              <input id="bk2-pack-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-pack-dryrun" class="admin-ui-action">${t("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-pack-apply" class="admin-ui-danger-btn" disabled title="${t("backupApplyDisabledTitle")}">${t("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-pack-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecRestoreAssets")}
              <span class="sub">${t("backupAssetRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-assets-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-assets-dryrun" class="admin-ui-action">${t("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-assets-apply" class="admin-ui-danger-btn" disabled title="${t("backupApplyDisabledTitle")}">${t("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-assets-diff" class="admin-backup-diff" hidden></pre></div>
        </div>

        <div class="admin-ui-danger-label">${t("backupGroupDanger")}</div>
        <div class="admin-ui-group is-danger" data-zone="danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecClearHistory")}
              <span class="sub">${t("backupClearHistoryDesc")}</span>
            </span>
            <span class="val">
              <select id="bk2-clear-scope" class="admin-ui-select">
                <option value="all" selected>${t("backupClearScopeAll")}</option>
              </select>
              <button type="button" id="bk2-clear-history" class="admin-ui-danger-btn">${t("backupClearBtn")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecFactoryReset")}
              <span class="sub">${t("backupFactoryResetDesc")}</span>
            </span>
            <span class="val">
              <input id="bk2-factory-confirm" type="text" class="admin-ui-input" placeholder="reset" autocomplete="off" spellcheck="false" />
              <button type="button" id="bk2-factory-reset" class="admin-ui-danger-btn" disabled>${t("backupFactoryResetBtn")}\u2026</button>
            </span>
          </div>
        </div>
      </div>`}async function f(){try{let t=await fetch("/get_settings",{credentials:"same-origin"});if(!t.ok)throw new Error(t.status);let s=await t.json(),r=["password","token","secret","hash"],n={};Object.keys(s||{}).forEach(v=>{r.some(h=>v.toLowerCase().includes(h))||(n[v]=s[v])});let d=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:n},null,2)],{type:"application/json"}),l=URL.createObjectURL(d),u=new Date().toISOString().replace(/[:.]/g,"-"),i=document.createElement("a");i.href=l,i.download="danmu-settings-"+u+".json",document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(l),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(t){console.error("Settings snapshot error:",t),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let _=null;function z(){_=null;let t=document.getElementById("bk2-settings-apply");t&&(t.disabled=!0,t.title=ServerI18n.t("backupApplyDisabledTitle"))}async function y(){let t=document.getElementById("bk2-settings-upload"),s=document.getElementById("bk2-settings-diff"),r=document.getElementById("bk2-settings-apply"),n=t&&t.files&&t.files[0];if(!n){z(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let d=await n.text(),l=JSON.parse(d),u=l.settings||l;if(!u||typeof u!="object"||Array.isArray(u))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let i=await fetch("/get_settings",{credentials:"same-origin"}),v=i.ok?await i.json():{},h=[];new Set([...Object.keys(v),...Object.keys(u)]).forEach(k=>{let S=JSON.stringify(v[k]),B=JSON.stringify(u[k]);S!==B&&(S===void 0?h.push("+ "+k+": "+B):B===void 0?h.push("- "+k+": "+S):h.push("~ "+k+": "+S+" \u2192 "+B))}),s.textContent=h.length?h.join(`
`):ServerI18n.t("backupNoDiff"),s.hidden=!1,_=u,r&&(r.disabled=!1,r.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:h.length}),!0)}catch(d){console.error("Dry-run error:",d),z(),s.textContent=ServerI18n.t("backupParseFailedDetail",{msg:d&&d.message?d.message:String(d)}),s.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function A(){let t=document.getElementById("bk2-settings-diff"),s=document.getElementById("bk2-settings-apply");if(!_){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"warn",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let n=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:_})}),d=await n.json().catch(()=>({}));if(!n.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(d.details||d,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(d.applied||[]).length+" settings"),_=null,s&&(s.disabled=!0,s.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(n){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:n&&n.message?n.message:String(n)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function m(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function $(){let t=document.getElementById("bk2-factory-confirm"),s=document.getElementById("bk2-factory-reset");!t||!s||(t.addEventListener("input",()=>{let r=t.value.trim()==="reset";s.classList.toggle("is-ready",r),s.disabled=!r}),s.addEventListener("click",x))}async function x(){let t=document.getElementById("bk2-factory-confirm"),s=document.getElementById("bk2-factory-reset");if((t?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{s&&(s.disabled=!0);let n=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),d=await n.json().catch(()=>({}));if(!n.ok||!d.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),s&&(s.disabled=!1);return}t&&(t.value=""),s&&(s.classList.remove("is-ready"),s.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),O()}catch{s&&(s.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function D(){document.getElementById("bk2-settings-download")?.addEventListener("click",f),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",y),document.getElementById("bk2-settings-apply")?.addEventListener("click",A),document.getElementById("bk2-clear-history")?.addEventListener("click",m),document.getElementById("bk2-pack-export")?.addEventListener("click",I),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",F),document.getElementById("bk2-pack-apply")?.addEventListener("click",P),document.getElementById("bk2-assets-export")?.addEventListener("click",K),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",p),document.getElementById("bk2-assets-apply")?.addEventListener("click",c),$(),O(),C()}let L=null,q=null;async function O(){let t=document.getElementById("bk2-pack-summary");if(t)try{let s=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!s.ok){t.textContent=ServerI18n.t("backupPreviewUnavailable");return}let r=await s.json(),n=(r.total_bytes/(1024*1024)).toFixed(2);t.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:r.file_count||0,mb:n})}catch{t.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function I(){window.location.href="/admin/backup/export",window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function C(){let t=document.getElementById("bk2-assets-summary");if(t)try{let s=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!s.ok){t.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let r=await s.json(),n=(r.total_bytes/(1024*1024)).toFixed(2);t.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:r.file_count||0,mb:n})}catch{t.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function K(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}async function F(){let s=document.getElementById("bk2-pack-upload")?.files?.[0];if(!s){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(s.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let r=new FormData;r.append("file",s);let n=document.getElementById("bk2-pack-diff"),d=document.getElementById("bk2-pack-apply");try{let l=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:r}),u=await l.json().catch(()=>({}));if(!l.ok||!u.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(u.errors||u,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),d&&(d.disabled=!0),L=null;return}if(n){n.hidden=!1;let i=[],v=u.manifest||{};i.push("manifest version: "+(v.version||"?")),i.push("generated_at: "+(v.generated_at?new Date(v.generated_at*1e3).toISOString():"\u2014")),i.push(""),i.push("Will write "+(u.members?.length||0)+" files:"),(u.members||[]).forEach(h=>{i.push("  "+h.label+"/"+h.path.split("/").slice(1).join("/")+" ("+(h.size||0)+" B)")}),u.skipped?.length&&(i.push(""),i.push("Skipped "+u.skipped.length+" entries:"),u.skipped.forEach(h=>i.push("  "+h.path+" \u2014 "+h.reason))),n.textContent=i.join(`
`)}L=s,d&&(d.disabled=!1,d.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:u.members?.length||0}),!0)}catch(l){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:l.message||""}),!1)}}async function P(){if(!L){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let s=new FormData;s.append("file",L);try{let n=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:s})).json().catch(()=>({})),d=document.getElementById("bk2-pack-diff");if(d){d.hidden=!1;let l=[];n.ok?(l.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),l.push(""),l.push("Applied "+(n.applied||0)+" files"),n.skipped?.length&&l.push("Skipped "+n.skipped.length+" (see above)")):(l.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),l.push(JSON.stringify(n.errors||n,null,2))),d.textContent=l.join(`
`)}if(n.ok){window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint",{n:n.applied}),!0),L=null;let l=document.getElementById("bk2-pack-apply");l&&(l.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(r){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:r.message||""}),!1)}}async function p(){let s=document.getElementById("bk2-assets-upload")?.files?.[0];if(!s){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(s.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let r=new FormData;r.append("file",s);let n=document.getElementById("bk2-assets-diff"),d=document.getElementById("bk2-assets-apply");try{let l=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:r}),u=await l.json().catch(()=>({}));if(!l.ok||!u.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(u.errors||u,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),d&&(d.disabled=!0),q=null;return}if(n){n.hidden=!1;let i=[],v=u.manifest||{};i.push("manifest version: "+(v.version||"?")),i.push("generated_at: "+(v.generated_at?new Date(v.generated_at*1e3).toISOString():"\u2014")),i.push(""),i.push("Will write "+(u.members?.length||0)+" asset files:"),(u.members||[]).forEach(h=>{i.push("  "+h.path+" ("+(h.size||0)+" B)")}),u.skipped?.length&&(i.push(""),i.push("Skipped "+u.skipped.length+" entries:"),u.skipped.forEach(h=>i.push("  "+h.path+" \u2014 "+h.reason))),n.textContent=i.join(`
`)}q=s,d&&(d.disabled=!1,d.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:u.members?.length||0}),!0)}catch(l){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:l.message||""}),!1)}}async function c(){if(!q){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"warn",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let s=new FormData;s.append("file",q);try{let n=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:s})).json().catch(()=>({})),d=document.getElementById("bk2-assets-diff");if(d){d.hidden=!1;let l=[];n.ok?(l.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),l.push(""),l.push("Applied "+(n.applied||0)+" files"),n.skipped?.length&&l.push("Skipped "+n.skipped.length+" (see above)")):(l.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),l.push(JSON.stringify(n.errors||n,null,2))),d.textContent=l.join(`
`)}if(n.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:n.applied}),!0),q=null;let l=document.getElementById("bk2-assets-apply");l&&(l.disabled=!0),C()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(r){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:r.message||""}),!1)}}function o(){let t=document.querySelector(".admin-dash-grid"),s=document.getElementById(b);if(!t||!s)return;let r=t.dataset.activeLeaf||"dashboard";s.style.display=r==="backup"?"":"none"}function e(){let t=document.getElementById("settings-grid");!t||document.getElementById(b)||(t.insertAdjacentHTML("beforeend",g()),D(),o())}function a(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&e(),o()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",o),document.addEventListener("admin-panel-rendered",()=>{e(),o()}),e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a()})()});var At=me(()=>{(function(){"use strict";let b="admin-broadcast-v2-page",w="/admin/broadcast/status",g="/admin/broadcast/toggle",f={mode:"live",started_at:null,total_messages:0,queue_size:0};function _(u){try{window.dispatchEvent(new CustomEvent("danmu-broadcast-changed",{detail:u}))}catch{}}function z(){return{mode:f.mode,started_at:typeof f.started_at=="number"?f.started_at*1e3:null}}let y=null;async function A(){try{let u=await fetch(w,{credentials:"same-origin"});if(!u.ok)return;let i=await u.json();i&&(i.mode==="live"||i.mode==="standby")&&(y=i.session||null,f=i,_(z()))}catch{}}async function m(u){try{let i=await window.csrfFetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:u})});if(!i.ok){let h=await i.json().catch(()=>({}));throw new Error(h&&h.error?h.error:`HTTP ${i.status}`)}return f=await i.json(),_(z()),!0}catch(i){return console.warn("[admin-broadcast] toggle failed:",i),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:i&&i.message||""}),!1),!1}}function $(u){(!Number.isFinite(u)||u<0)&&(u=0);let i=Math.floor(u/1e3),v=String(Math.floor(i/3600)).padStart(2,"0"),h=String(Math.floor(i%3600/60)).padStart(2,"0"),T=String(i%60).padStart(2,"0");return`${v}:${h}:${T}`}function x(){let u=y||{};return u.status==="live"||u.state==="active"}function D(){let u=y||{};return u.status==="ended"||u.state==="ended"}function L(){let u=f.mode||"standby";return D()?"ended":u==="live"?"live":x()?"paused":"standby"}function q(){return`
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
      </div>`}let O=0,I=0,C=0,K=0,F=0;async function P(){try{let u=await fetch("/admin/metrics",{credentials:"same-origin"});if(!u.ok)return;O=(await u.json()).ws_clients||0}catch{}try{let u=await fetch("/admin/fingerprints?limit=1",{credentials:"same-origin"});if(u.ok){let i=await u.json();typeof i.total=="number"&&(I=i.total)}}catch{}}let p={standby:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 OFF"},live:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 ON"},paused:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 PAUSED"},ended:{titleKey:"broadcastEndedTitle",en:"SESSION ENDED"}},c={standby:ServerI18n.t("uiDisplayOff"),live:ServerI18n.t("uiDisplayOn"),paused:"DESKTOP PAUSED",ended:"SESSION ENDED"};function o(){let u=document.getElementById(b);if(!u)return;let i=L(),v=i==="live",h=i==="paused",T=i==="ended",k=i==="standby";u.dataset.bcState=i;let S=u.querySelector("[data-bc-title]"),B=u.querySelector("[data-bc-en]");if(S&&(S.textContent=ServerI18n.t(p[i].titleKey)),B){let Q=v&&f.started_at?Date.now()/1e3-f.started_at:0;B.textContent=v?`DESKTOP \xB7 ON \xB7 ${$(Q*1e3)}`:T&&y?.ended_at?`SESSION ENDED \xB7 ${new Date(y.ended_at*1e3).toISOString().slice(0,10)}`:p[i].en}let H=u.querySelector("[data-bc-body]"),M=u.querySelector("[data-bc-ended]");H&&M&&(H.hidden=T,M.hidden=!T);let E=u.querySelector("[data-bc-statedot]"),j=u.querySelector("[data-bc-statelabel]"),U=u.querySelector("[data-bc-elapsed]"),Y=u.querySelector("[data-bc-sched]");if(E&&(E.dataset.state=i),j&&(j.textContent=c[i]||c.standby,j.dataset.state=i),U){let Q=v&&f.started_at?Date.now()-f.started_at*1e3:0;U.textContent=$(Q),U.hidden=!v}if(Y){let Q=y?.scheduled_at;if(k&&typeof Q=="number"&&Q>Date.now()/1e3){let se=Math.max(0,Q-Date.now()/1e3),de=String(Math.floor(se/60)).padStart(2,"0"),ue=String(Math.floor(se%60)).padStart(2,"0"),fe=new Date(Q*1e3),ge=`${String(fe.getHours()).padStart(2,"0")}:${String(fe.getMinutes()).padStart(2,"0")}`;Y.textContent=ServerI18n.t("broadcastSchedCountdown",{time:ge,mm:de,ss:ue}),Y.hidden=!1}else Y.hidden=!0}let N=f.total_messages||0,R=f.fire_count||N,V=f.started_at&&(v||h)?Date.now()/1e3-f.started_at:0,ne=k?"\u2014":$(V*1e3).slice(3),W=(Q,se)=>{let de=u.querySelector(Q);de&&(de.textContent=se)};W("[data-bc-stat-elapsed]",k?"\u2014":ne),W("[data-bc-stat-msgs]",k?"0":N.toLocaleString()),W("[data-bc-stat-fp]",k?"0":I.toLocaleString()),W("[data-bc-stat-fire]",k?"0":R.toLocaleString());let Z=u.querySelector("[data-bc-session-ctx]");if(Z){let Q=y||{},se=!!(Q.id||Q.name);if(Z.hidden=!se,se){let de=u.querySelector("[data-bc-session-id]"),ue=u.querySelector("[data-bc-session-started]"),fe=u.querySelector("[data-bc-session-window]");if(de&&(de.textContent=Q.name||Q.id||"\u2014"),ue){let ge=Q.started_at;if(typeof ge=="number"){let G=new Date(ge*1e3),X=ee=>String(ee).padStart(2,"0");ue.textContent=`Started \xB7 ${X(G.getHours())}:${X(G.getMinutes())}:${X(G.getSeconds())}`}else ue.textContent="Started \xB7 \u2014"}if(fe){let ge=Q.started_at;if(typeof ge=="number"){let G=Date.now()-ge*1e3;fe.textContent=`Window \xB7 ${$(G).slice(3)}`}else fe.textContent="Window \xB7 \u2014"}}}let te=u.querySelector("[data-bc-big]");if(te)if(v){let Q=x();te.className="admin-bc-v4__big admin-bc-v5__big is-on",te.textContent=Q?ServerI18n.t("broadcastBigPause"):ServerI18n.t("broadcastBigStop")}else h?(te.className="admin-bc-v4__big admin-bc-v5__big is-resume",te.textContent=ServerI18n.t("broadcastBigResume")):(te.className="admin-bc-v4__big admin-bc-v5__big is-off",te.textContent=ServerI18n.t("broadcastBigStart"));let oe=u.querySelector("[data-bc-confirm-hint]");if(oe&&(oe.hidden=!(v&&!x())),u.querySelectorAll("[data-bc-clear]").forEach(Q=>{Q.disabled=k||T}),T){let Q=y||{},se=Q.duration_sec?$(Q.duration_sec*1e3).slice(3):"\u2014";W("[data-bc-end-dur]",se),W("[data-bc-end-msgs]",String(Q.total_messages||N||"\u2014")),W("[data-bc-end-fp]",String(Q.unique_fp||I||"\u2014")),W("[data-bc-end-fire]",String(Q.fire_count||R||"\u2014"))}}async function e(){let u=L();if(u==="standby")await m("live")&&window.showToast&&showToast(ServerI18n.t("broadcastToastSwitchedLive"),!0);else if(u==="paused")await m("live")&&window.showToast&&showToast(ServerI18n.t("broadcastToastResumed"),!0);else if(u==="live"){if(x()){await m("standby")&&window.showToast&&showToast(ServerI18n.t("broadcastToastPaused"),!0),o();return}let v=f.started_at?Date.now()-f.started_at*1e3:0,h=$(v),T=f.total_messages||0,k=I.toLocaleString();if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("broadcastStopLabel"),subtitle:ServerI18n.t("cfmSubStopDisplay"),severity:"warn",body:`
              <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                ${ServerI18n.t("broadcastStopBodyDesc")}
              </div>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:10px 12px;margin-top:12px;background:var(--hud-bg2, #182239);border-radius:6px;border:1px solid var(--hud-line, rgba(148,163,184,0.18));text-align:center;">
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">${ServerI18n.t("uiStatMsgs")}</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${T.toLocaleString()}</div></div>
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">FP</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${k}</div></div>
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">${ServerI18n.t("uiColTime")}</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${h}</div></div>
              </div>
              <div style="margin-top:12px;font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:0.3px;color: var(--color-ink-warning);">
                ${ServerI18n.t("broadcastStopBodyWarn")}
              </div>`,confirmLabel:ServerI18n.t("broadcastStopLabel"),cancelLabel:ServerI18n.t("cancel"),width:440}))return;await m("standby")&&window.showToast&&showToast(ServerI18n.t("broadcastToastStopped")+" \xB7 "+ServerI18n.t("uiDisplayOff"),!0)}o()}async function a(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"warn",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearModalConfirm")}))try{let i=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});i.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:i.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}function t(){let u=document.getElementById(b);u&&(u.querySelector("[data-bc-big]")?.addEventListener("click",e),u.querySelector("[data-bc-clear]")?.addEventListener("click",a))}function s(){C||(A(),P(),o(),K=setInterval(A,5e3),C=setInterval(()=>{P().then(o)},1e4),F=setInterval(o,1e3))}function r(){K&&(clearInterval(K),K=0),C&&(clearInterval(C),C=0),F&&(clearInterval(F),F=0)}function n(){let u=document.querySelector(".admin-dash-grid"),i=document.getElementById(b);if(!u||!i)return;let v=u.dataset.activeLeaf||"dashboard",h=v==="overlay"||v==="broadcast";i.style.display=h?"":"none",h?s():r()}function d(){let u=document.getElementById("settings-grid");!u||document.getElementById(b)||(u.insertAdjacentHTML("beforeend",q()),t(),n())}function l(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&d(),n()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",n),document.addEventListener("admin-panel-rendered",()=>{d(),n()}),d()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l()})()});var Bt=me(()=>{(function(){"use strict";var b=window.AdminUtils.loadDetailsState,w=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;let f=["keyword","regex","replace","rate_limit"],_=["block","replace","allow"];function z(M){var E=b();return E[M]!==void 0?E[M]:!1}function y(M,E){if(typeof ServerI18n<"u"&&ServerI18n.t){let j=ServerI18n.t(M);if(j&&j!==M)return j}return E||M}let A={keyword:"is-cyan",regex:"is-cyan",replace:"is-amber",rate_limit:"is-danger"},m={block:"var(--hud-crimson)",replace:"var(--hud-amber)",allow:"var(--hud-lime)"};function $(){return`
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
            ${[{id:"url",label:ServerI18n.t("fltPresetUrl"),pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",label:ServerI18n.t("fltPresetAllcaps"),pattern:"^[A-Z\\W\\s]{8,}$",action:"mask"},{id:"repeat",label:ServerI18n.t("fltPresetRepeat"),pattern:"(.)\\1{6,}",action:"mask"},{id:"emojionly",label:"Emoji-only",pattern:"^[\\p{Emoji}\\s]+$",action:"block"}].map(M=>`
              <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${M.id}" data-flt-pattern="${M.pattern}" data-flt-action="${M.action}" data-flt-label="${M.label}">
                <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
                <span class="admin-flt-v4__qchip-label">${M.label}</span>
                <span class="admin-flt-v4__qchip-hits" data-flt-quick-hits="${M.id}">\u2014</span>
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
                <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">${y("addFilterRule","Add Rule")}</span>

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
                  <input type="text" id="filterPattern" placeholder="${y("filterPatternPlaceholder","Enter pattern...")}"
                    class="admin-ui-input" />
                </div>
                <div id="filterReplacementRow" class="hidden">
                  <label for="filterReplacement" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("fltColReplacement")}</label>
                  <input type="text" id="filterReplacement" placeholder="${y("filterReplacementPlaceholder","Replacement text...")}"
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
                  + ${y("addRule","Add Rule")}
                </button>
              </div>
            </div>

            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">${y("testRule","Test Rule")}</span>
              </div>
              <div style="padding:14px;display:flex;flex-direction:column;gap:8px">
                <input id="filterTestText" type="text" placeholder="${y("sampleText","Sample text...")}"
                  class="admin-ui-input" />
                <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action" style="align-self:flex-start">${y("testBtn","Test")}</button>
                <div id="filterTestResult" style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);letter-spacing:0.02em"></div>
              </div>
            </div>
          </div>
        </div>
      </div>`}let x="all";function D(M){let E=A[M.type]||"is-default",j=m[M.action]||"var(--color-text-muted)",U={keyword:"ulWord",regex:"ulRegex",replace:"ulReplace",rate_limit:"ulRate"},Y=ServerI18n.t(U[M.type]||"ulWord"),N=M.pattern;if(M.type==="replace"&&M.replacement!==void 0&&(N=`${M.pattern}  \u2192  ${M.replacement}`),M.type==="rate_limit"){let V=M.max_count||5,ne=M.window_sec||60;N=`${M.pattern}  \xB7  ${V}/${ne}s`}return`
      <div class="hud-table-row hud-rule-row" style="grid-template-columns: 1.6fr 80px 80px 60px 60px 40px;${M.enabled?"":"opacity:0.45;"}" data-rule-id="${g(M.id)}" data-rule-type="${g(M.type)}">
        <span style="font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all">${g(N)}</span>
        <span class="hud-pill ${E}">${Y}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;padding:2px 6px;border-radius:3px;background:${j};color:#000;font-weight:700;width:fit-content;text-transform:uppercase">${g(M.action)}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">P${g(String(M.priority))}</span>
        <label class="relative inline-block" style="width:32px;align-self:center" title="${g(M.enabled?y("enabled","Enabled"):y("disabled","Disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${g(M.id)}" ${M.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${M.enabled?"is-on":"is-off"}" style="cursor:pointer"></span>
        </label>
        <button class="filter-delete-btn" type="button" data-rule-id="${g(M.id)}" title="${y("deleteRule","Delete")}" aria-label="${y("deleteRule","Delete")}">${window.AdminUtils.closeIcon}</button>
      </div>`}function L(M){let E={all:M.length,keyword:0,regex:0,replace:0,rate_limit:0};M.forEach(U=>{E[U.type]!=null&&E[U.type]++}),Object.keys(E).forEach(U=>{let Y=document.querySelector(`[data-filter-count="${U}"]`);Y&&(Y.textContent=E[U])});let j=document.querySelector('[data-mod-stat="rules"]');j&&(j.textContent=E.all)}async function q(){let M=document.querySelector('[data-mod-stat="blacklist"]');if(M)try{let E=await fetch("/admin/blacklist/get",{credentials:"same-origin"});if(!E.ok)return;let j=await E.json(),U=Array.isArray(j)?j:j.keywords||[];M.textContent=String(U.length)}catch{}}async function O(){try{let M=await csrfFetch("/admin/filters/list");if(!M.ok)throw new Error("HTTP "+M.status);return(await M.json()).rules||[]}catch(M){return console.error("Failed to fetch filter rules:",M),showToast(y("fetchFiltersFailed","Failed to load filter rules"),!1),[]}}async function I(){let M=document.getElementById("filterRulesList");if(!M)return;M.innerHTML=`<div style="padding:12px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${y("loading","Loading...")}</div>`;let E=await O();if(L(E),q(),E.length===0){if(window.AdminEmpty){let U=window.AdminEmpty.render("filters");U.setAttribute("data-empty-kind","filters"),M.innerHTML="",M.appendChild(U)}else M.innerHTML=`<div data-empty-kind="filters" style="padding:18px 14px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${y("noFilterRules","No filter rules configured.")}</div>`;return}let j=x==="all"?E:E.filter(U=>U.type===x);M.innerHTML=j.map(D).join("")}async function C(){let M=document.getElementById("filterType"),E=document.getElementById("filterAction"),j=document.getElementById("filterPattern"),U=document.getElementById("filterReplacement"),Y=document.getElementById("filterPriority"),N=document.getElementById("filterMaxCount"),R=document.getElementById("filterWindowSec"),V=M.value,ne=(j.value||"").trim();if(!ne){showToast(y("patternRequired","Pattern is required"),!1),j.focus();return}let W={type:V,pattern:ne,action:E.value,priority:parseInt(Y.value,10)||0};V==="replace"&&(W.replacement=U.value||""),V==="rate_limit"&&(W.max_count=parseInt(N.value,10)||5,W.window_sec=parseFloat(R.value)||60);try{let Z=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)}),te=await Z.json();if(!Z.ok){showToast(te.error||y("addRuleFailed","Failed to add rule"),!1);return}showToast(y("ruleAdded","Rule added"),!0),j.value="",U.value="",await I()}catch(Z){console.error("Add filter rule error:",Z),showToast(y("addRuleFailed","Failed to add rule"),!1)}}async function K(M){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("filtersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteFilterRule"),severity:"danger",body:y("confirmDeleteRule","Delete this filter rule?"),confirmLabel:ServerI18n.t("filtersDeleteConfirm")}))try{let j=await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:M})}),U=await j.json();if(!j.ok){showToast(U.error||y("deleteRuleFailed","Failed to delete rule"),!1);return}showToast(y("ruleDeleted","Rule deleted"),!0),await I()}catch(j){console.error("Delete filter rule error:",j),showToast(y("deleteRuleFailed","Failed to delete rule"),!1)}}async function F(M,E){try{let j=await csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:M,updates:{enabled:E}})}),U=await j.json();if(!j.ok){showToast(U.error||y("updateRuleFailed","Failed to update rule"),!1),await I();return}}catch(j){console.error("Toggle filter rule error:",j),showToast(y("updateRuleFailed","Failed to update rule"),!1),await I()}}async function P(){let M=document.getElementById("filterTestText"),E=document.getElementById("filterTestResult"),j=document.getElementById("filterType"),U=document.getElementById("filterAction"),Y=document.getElementById("filterPattern"),N=document.getElementById("filterReplacement"),R=document.getElementById("filterMaxCount"),V=document.getElementById("filterWindowSec"),ne=(M.value||"").trim();if(!ne){showToast(y("sampleTextRequired","Enter sample text to test"),!1),M.focus();return}let W=(Y.value||"").trim();if(!W){showToast(y("patternRequired","Pattern is required"),!1),Y.focus();return}let Z=j.value,te={type:Z,pattern:W,action:U.value};Z==="replace"&&(te.replacement=N.value||""),Z==="rate_limit"&&(te.max_count=parseInt(R.value,10)||5,te.window_sec=parseFloat(V.value)||60),E.innerHTML=`<span style="color:var(--color-text-muted)">${y("testing","Testing...")}</span>`;try{let oe=await csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:te,text:ne})}),Q=await oe.json();if(!oe.ok){E.innerHTML=`<span style="color: var(--color-ink-error)">${g(Q.error||"Test failed")}</span>`;return}let se="";Q.action==="block"?se=`<span style="color: var(--color-ink-error);font-weight:600">${y("blocked","BLOCKED")}</span>`:Q.action==="replace"?se=`<span style="color: var(--color-ink-warning);font-weight:600">${y("replaced","REPLACED")}</span> <span style="color:var(--color-text-secondary)">\u2192 ${g(Q.text)}</span>`:Q.action==="allow"?se=`<span style="color: var(--color-ink-success);font-weight:600">${y("allowed","ALLOWED")}</span>`:se=`<span style="color:var(--color-text-muted)">${y("noMatch","No match (pass)")}</span>`,Q.reason&&(se+=`<br/><span style="font-size:11px;color:var(--color-text-muted)">${g(Q.reason)}</span>`),E.innerHTML=se}catch(oe){console.error("Test filter rule error:",oe),E.innerHTML=`<span style="color: var(--color-ink-error)">${y("testError","Test error")}</span>`}}function p(){let M=document.getElementById("filterType"),E=document.getElementById("filterReplacementRow"),j=document.getElementById("filterRateLimitRow");if(!M)return;let U=M.value;E&&(E.style.display=U==="replace"?"":"none"),j&&(j.style.display=U==="rate_limit"?"grid":"none")}function c(){let M=document.getElementById("filterTypeChips");M&&M.addEventListener("click",E=>{let j=E.target.closest(".hud-filter-chip");j&&(x=j.dataset.filterScope||"all",M.querySelectorAll(".hud-filter-chip").forEach(U=>{U.classList.toggle("is-active",U.dataset.filterScope===x)}),I())})}let o=6,e=[],a=!1,t=0,s=0;function r(M){let E=new Date(M*1e3),j=U=>String(U).padStart(2,"0");return`${j(E.getHours())}:${j(E.getMinutes())}:${j(E.getSeconds())}`}function n(M){let E=(M||"").toUpperCase();return E==="BLOCK"?"var(--hud-crimson)":E==="MASK"||E==="REPLACE"?"var(--hud-amber)":E==="REVIEW"?"var(--color-primary)":E==="ALLOW"?"var(--hud-lime)":"var(--color-text-muted)"}function d(){let M=document.getElementById("filterLiveLog");if(M){if(e.length===0){M.innerHTML=`<div style="color:var(--color-text-muted);text-align:center;padding:10px">${ServerI18n.t("fltNoEvents")}</div>`;return}M.innerHTML=e.map(E=>{let j=r(E.ts),U=(E.action||"").toUpperCase(),Y=n(U),N=(E.text_excerpt||"").replace(/[<>&"]/g,W=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[W]),R=(E.pattern||"").replace(/[<>&"]/g,W=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[W]),V=(E.source||"").slice(0,16),ne=V?`\xB7 ${V}`:"";return`<div class="admin-filter-log-row" style="display:grid;grid-template-columns:64px 70px 1fr;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px dashed var(--hud-line)">
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${j}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${Y}">${U}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\u300C${N}\u300D<span style="color:var(--color-text-muted)"> \u2014 \u898F\u5247 ${R} ${ne}</span></span>
      </div>`}).join("")}}async function l(){try{let M=await fetch(`/admin/filters/events?since=${s}`,{credentials:"same-origin"});if(!M.ok)return;let E=await M.json();if(E.counts_24h){let j=(U,Y)=>{let N=document.querySelector(`[data-mod-stat="${U}"]`);N&&(N.textContent=Y!=null?String(Y):"\u2014")};j("masked",E.counts_24h.MASK||0),j("blocked",E.counts_24h.BLOCK||0)}if(!Array.isArray(E.events)||E.events.length===0)return;for(e.unshift(...E.events);e.length>o;)e.pop();s=E.latest_seq||s,document.getElementById("filterLiveLog")&&d()}catch{}}function u(){a||(a=!0,l(),t=setInterval(l,4e3))}let i=Object.create(null),v="[QUICK]";function h(M,E){return M.find(j=>(j.name||"").startsWith(v+" "+E))}async function T(){let M=await O().catch(()=>[]);document.querySelectorAll(".admin-flt-v4__qchip").forEach(E=>{let j=E.dataset.fltLabel,U=h(M,j),Y=!!U&&U.enabled!==!1;E.classList.toggle("is-active",Y),U?i[E.dataset.fltQuickId]=U.id||U.rule_id:delete i[E.dataset.fltQuickId]})}async function k(M){let E=M.dataset.fltQuickId,j=M.dataset.fltPattern,U=M.dataset.fltAction,Y=M.dataset.fltLabel,N=i[E];if(N)(await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:N})})).ok?(delete i[E],M.classList.remove("is-active"),showToast(ServerI18n.t("filtersToastDisabled",{label:Y}),!0)):showToast(ServerI18n.t("filtersToastDisableFailed"),!1);else{let R=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",name:`${v} ${Y}`,pattern:j,action:U,enabled:!0,priority:50})});if(R.ok){let V=await R.json().catch(()=>({}));V.rule_id&&(i[E]=V.rule_id),M.classList.add("is-active"),showToast(ServerI18n.t("filtersToastEnabled",{label:Y}),!0)}else{let V=await R.json().catch(()=>({}));showToast(ServerI18n.t("filtersToastEnableFailed",{msg:V.error||""}),!1)}}typeof renderRules=="function"&&renderRules()}function S(){let M=document.querySelector("[data-flt-quick]");M&&(M.addEventListener("click",E=>{let j=E.target.closest(".admin-flt-v4__qchip");j&&k(j)}),T())}function B(){let M=document.getElementById("settings-grid");if(!M)return;M.insertAdjacentHTML("beforeend",$()),c(),S();let E=document.getElementById("filterType");E&&E.addEventListener("change",p);let j=document.getElementById("filterAddBtn");j&&j.addEventListener("click",C);let U=document.getElementById("filterTestBtn");U&&U.addEventListener("click",P);let Y=document.getElementById("filterTestText");Y&&Y.addEventListener("keydown",V=>{V.key==="Enter"&&(V.preventDefault(),P())});let N=document.getElementById("filterPattern");N&&N.addEventListener("keydown",V=>{V.key==="Enter"&&(V.preventDefault(),C())});let R=document.getElementById("filterRulesList");R&&(R.addEventListener("change",V=>{let ne=V.target.closest(".filter-toggle-cb");if(!ne)return;F(ne.dataset.ruleId,ne.checked);let W=ne.closest(".hud-rule-row"),Z=W?.querySelector(".admin-filter-toggle-dot");Z&&(Z.classList.toggle("is-on",ne.checked),Z.classList.toggle("is-off",!ne.checked)),W&&(W.style.opacity=ne.checked?"":"0.45")}),R.addEventListener("click",V=>{let ne=V.target.closest(".filter-delete-btn");ne&&K(ne.dataset.ruleId)})),I(),u(),d()}function H(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&B()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&B()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",H):H()})()});var Ft=me(()=>{(function(){"use strict";var b=window.AdminUtils.loadDetailsState,w=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml,f=1e4,_=null;function z(I){var C=b();return C[I]!==void 0?C[I]:!1}function y(){return`
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
    `}function A(I){var C=ServerI18n.t("fingerprintState_"+I),K="";return I==="blocked"?K=" is-crimson":I==="flagged"?K=" is-amber":I==="active"?K=" is-cyan":K=" is-mute",'<span class="admin-fp-state'+K+'">'+g(C)+"</span>"}function m(I){if(!I)return"\u2014";try{var C=new Date(I*1e3);return C.toLocaleTimeString()}catch{return String(I)}}function $(I){var C=document.getElementById("adminFingerprintTableWrap");if(C){if(!I||I.length===0){C.innerHTML="";var K=window.AdminEmpty.render("audience");K.dataset.emptyKind="fingerprints",C.appendChild(K);return}var F='<div class="admin-fp-row admin-fp-row--head"><span>'+g(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",P=I.map(function(p){var c=p.blocked|0,o=p.hash||"",e=o.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+g(o)+'"><span class="admin-fp-hash admin-identity-fp" title="'+g(o)+'">fp:'+g(e)+'</span><span class="admin-fp-ip admin-identity-ip">'+g(p.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+g(p.ua||"")+'">'+g(p.ua||"\u2014")+'</span><span class="admin-fp-num">'+(p.msgs|0)+'</span><span class="admin-fp-num">'+(p.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(c>0?"is-crimson":"is-mute")+'">'+c+"</span><span>"+A(p.state||"active")+'</span><span class="admin-fp-ts">'+g(m(p.last_seen))+"</span></div>"}).join("");C.innerHTML=F+P}}async function x(){var I=document.getElementById("adminFingerprintCount");try{var C=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!C.ok)throw new Error("HTTP "+C.status);var K=await C.json(),F=K.records||[];if($(F),I){var P=K.count||F.length,p=K.flagged!=null?K.flagged:F.filter(function(o){return o.state==="flagged"||o.state==="blocked"}).length;I.textContent=ServerI18n.t("fpCountSummary",{unique:P,flagged:p})}}catch(o){console.error("[admin-fingerprints] fetch failed:",o);var c=document.getElementById("adminFingerprintTableWrap");c&&(c.innerHTML='<span class="hud-pill is-danger">'+g(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function D(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var C=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(C.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await x();else{var K=await C.json().catch(function(){return{}});window.showToast(K.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(F){console.error("[admin-fingerprints] reset error:",F),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function L(){q(),_=setInterval(function(){var I=document.getElementById("sec-fingerprints");I&&I.offsetParent!==null&&x()},f)}function q(){_&&(clearInterval(_),_=null)}function O(){var I=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(I){I.insertAdjacentHTML("beforeend",y());var C=document.getElementById("adminFingerprintRefreshBtn");C&&C.addEventListener("click",x);var K=document.getElementById("adminFingerprintResetBtn");K&&K.addEventListener("click",D),x(),L()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var I=new MutationObserver(function(){var K=document.getElementById("moderation-grid")||document.getElementById("settings-grid");K&&!document.getElementById("sec-fingerprints")&&O()});I.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var C=document.getElementById("moderation-grid")||document.getElementById("settings-grid");C&&!document.getElementById("sec-fingerprints")&&O()}})})()});var Dt=me(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var b=window.AdminUtils.escapeHtml;let w=(n,d)=>{let l=window.ServerI18n?.t?.(n);return l&&l!==n?l:d||n},g=!1;new MutationObserver(()=>{let n=document.getElementById("settings-grid");if(n&&!(document.getElementById("sec-widgets")||g)){g=!0;try{_(n)}finally{g=!1}}}).observe(document.body,{childList:!0,subtree:!0});function _(n){let d=document.createElement("div");d.id="sec-widgets",d.className="admin-widgets-page hud-page-stack lg:col-span-2";let l=location.origin+"/overlay";d.dataset.tpl="B",d.innerHTML=`
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${b(w("widgetsTitle"))}</h2>
          <p class="admin-ui-page-note">${b(w("widgetsDesc"))}</p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 W1\uFF1A\u4E3B\u8981\u52D5\u4F5C\u5728\u9801\u9996\u53F3\u5074\u3002\u9801\u9996\u5728\u6A19\u984C\u8207\u8DEF\u7531\u540C\u540D\u6642\u6703\u88AB
               \u4F75\u9032 topbar\uFF0Cshell \u7684 [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB
               \uFF08\u898B admin.js \u7684 _dedupSectionTitles\uFF09\u3002 -->
          <div class="admin-ui-page-actions admin-ow-addrow">
            <button id="widget-add" type="button" class="admin-ui-action is-primary">
              ${b(w("widgetsAddBtn"))}
            </button>
            <div class="admin-ow-addmenu" data-ow-addmenu hidden>
              <button type="button" data-ow-add="scoreboard">${b(w("widgetScoreboard"))}</button>
              <button type="button" data-ow-add="ticker">${b(w("widgetTicker"))}</button>
              <button type="button" data-ow-add="label">${b(w("widgetLabel"))}</button>
            </div>
          </div>
        </div>

        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:12px">
            <div id="widgets-list" class="admin-widgets-list"></div>
            <div class="admin-widgets-actions">
              <button id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action">
                ${b(w("clearAll"))}
              </button>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:12px;position:sticky;top:0">
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${b(w("widgetsPreviewLabel"))}</div>
              <div class="admin-ow-stage" data-ow-stage></div>
              <p class="admin-ow-card-note">${b(w("widgetsDragHint"))}</p>
            </div>
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${b(w("widgetsObsLabel"))}</div>
              <p class="admin-ow-card-note">
                ${b(w("widgetsObsNote"))}
              </p>
              <div class="admin-ow-urlrow">
                <code class="admin-ow-url" data-ow-obs-url>${b(l)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${b(w("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${b(w("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,n.appendChild(d);let u=document.getElementById("widget-add"),i=d.querySelector("[data-ow-addmenu]");u.addEventListener("click",v=>{v.stopPropagation(),i.hidden=!i.hidden}),i.addEventListener("click",v=>{let h=v.target.closest("[data-ow-add]")?.dataset.owAdd;h&&(i.hidden=!0,A(h))}),document.addEventListener("click",v=>{!i.hidden&&!v.target.closest(".admin-ui-page-actions")&&(i.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",D),d.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let v=d.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(v).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),y()}async function z(n,d="GET",l=null){let u={method:d,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(l){let v=document.querySelector('meta[name="csrf-token"]');v&&(u.headers["X-CSRF-Token"]=v.content),u.body=JSON.stringify(l)}return(await fetch("/admin/widgets/"+n,u)).json()}async function y(){try{let n=await z("list");q(n.widgets||[])}catch(n){console.error("[admin-widgets] Load failed:",n)}}async function A(n){let d={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await z("create","POST",{type:n,config:d[n]||{}}),y()}catch(l){console.error("[admin-widgets] Create failed:",l)}}async function m(n){let d=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:d,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await z("delete","POST",{id:n}),y()}catch(u){console.error("[admin-widgets] Delete failed:",u)}}async function $(n,d){try{await z("update","POST",{id:n,config:d}),y()}catch(l){console.error("[admin-widgets] Update failed:",l)}}async function x(n,d,l){try{await z("score","POST",{id:n,team_index:d,delta:l}),y()}catch(u){console.error("[admin-widgets] Score update failed:",u)}}async function D(){let n=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:n,confirmLabel:ServerI18n.t("clearAll")}))try{await z("clear","POST",{}),y()}catch(l){console.error("[admin-widgets] Clear failed:",l)}}let L=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function q(n){let d=document.getElementById("widgets-list");if(d){if(d.innerHTML="",o(n),n.length===0){let l=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});l.dataset.emptyKind="widgets",d.appendChild(l);return}n.forEach(l=>{d.appendChild(F(l))})}}let O={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function I(n){return w("widgetPos_"+String(n||"top-left").replace("-","_"),n||"")}function C(n){let d=n.config||{},l="";n.type==="scoreboard"?l=(d.teams||[]).map(i=>`${i.name} ${i.score}`).join(" \xB7 "):n.type==="ticker"?(l=(d.messages||[])[0]||"",l&&(l=`\u300C${l}\u300D`)):n.type==="label"&&(l=d.text?`\u300C${d.text}\u300D`:"");let u=I(n.position);return l?`${l} \xB7 ${u}`:u}function K(n){return n==="scoreboard"?w("widgetScoreboard"):n==="ticker"?w("widgetTicker"):n==="label"?w("widgetLabel"):n}function F(n){let d=document.createElement("div");d.className="admin-widget-card",n.visible!==!1&&d.classList.add("is-on");let l=document.createElement("button");l.type="button",l.className="admin-widget-summary",l.setAttribute("aria-expanded","false"),l.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+b(O[n.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+b(K(n.type))+'</span><span class="admin-widget-summary-text">'+b(C(n))+"</span>"+(n.visible===!1?'<span class="admin-widget-summary-off">'+b(w("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',d.appendChild(l);let u=document.createElement("div");u.className="admin-widget-card-body",u.hidden=!0,l.addEventListener("click",()=>{u.hidden=!u.hidden,l.setAttribute("aria-expanded",u.hidden?"false":"true"),d.classList.toggle("is-open",!u.hidden)});let i=r(w("widgetPosition"),L,n.position,k=>$(n.id,{position:k}));u.appendChild(i),n.type==="scoreboard"?e(u,n):n.type==="ticker"?a(u,n):n.type==="label"&&t(u,n);let v=document.createElement("div");v.className="admin-widget-card-actions";let h=document.createElement("button");h.type="button",h.className="admin-ui-action admin-widget-card-action",h.textContent=n.visible?w("widgetHide"):w("widgetShow"),h.addEventListener("click",()=>$(n.id,{visible:!n.visible})),v.appendChild(h);let T=document.createElement("button");return T.type="button",T.className="admin-ui-action is-danger admin-widget-card-action",T.textContent=w("remove"),T.addEventListener("click",()=>m(n.id)),v.appendChild(T),u.appendChild(v),d.appendChild(u),d}let P={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function p(n,d){let l="top-left",u=1/0;for(let[i,[v,h]]of Object.entries(P)){let T=n-v/2,k=d-h/2,S=T*T+k*k;S<u&&(u=S,l=i)}return l}function c(n){let d=n.config||{};return n.type==="scoreboard"?(d.teams||[]).map(l=>`${l.name} ${l.score}`).join("  ")||w("widgetScoreboard"):n.type==="ticker"?(d.messages||[])[0]||w("widgetTicker"):n.type==="label"?d.text||w("widgetLabel"):n.type}function o(n){let d=document.querySelector("[data-ow-stage]");if(d){if(d.innerHTML="",!n.length){d.innerHTML='<span class="admin-ow-stage-empty">'+b(w("widgetsStageEmpty"))+"</span>";return}n.forEach(l=>{let u=document.createElement("div");u.className="admin-ow-box is-"+(l.position||"top-left"),l.visible===!1&&u.classList.add("is-off"),u.dataset.owBox=l.id,u.draggable=!0,u.textContent=c(l),u.title=K(l.type),u.addEventListener("dragend",i=>{let v=d.getBoundingClientRect();if(!v.width||!v.height)return;let h=(i.clientX-v.left)/v.width,T=(i.clientY-v.top)/v.height;if(h<0||h>1||T<0||T>1)return;let k=p(h,T);k!==l.position&&$(l.id,{position:k})}),d.appendChild(u)})}}function e(n,d){let l=d.config||{},u=s(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",l.title||"",i=>$(d.id,{title:i}));n.appendChild(u),(l.teams||[]).forEach((i,v)=>{let h=document.createElement("div");h.className="admin-widget-team";let T=document.createElement("input");T.type="color",T.value=i.color||"#38bdf8",T.className="admin-widget-team-color",T.addEventListener("change",()=>{let M=[...l.teams];M[v]={...M[v],color:T.value},$(d.id,{teams:M})}),h.appendChild(T);let k=document.createElement("input");k.type="text",k.value=i.name,k.className="admin-widget-input",k.addEventListener("change",()=>{let M=[...l.teams];M[v]={...M[v],name:k.value},$(d.id,{teams:M})}),h.appendChild(k);let S=document.createElement("span");S.className="admin-widget-team-score",S.textContent=i.score,h.appendChild(S);let B=document.createElement("button");B.type="button",B.className="admin-widget-step",B.textContent="\u2212",B.addEventListener("click",()=>x(d.id,v,-1)),h.appendChild(B);let H=document.createElement("button");H.type="button",H.className="admin-widget-step",H.textContent="+",H.addEventListener("click",()=>x(d.id,v,1)),h.appendChild(H),n.appendChild(h)})}function a(n,d){let l=d.config||{},u=document.createElement("div");u.className="admin-widget-row";let i=document.createElement("span");i.className="lbl",i.textContent=window.ServerI18n?.t?.("speed")||"SPEED",u.appendChild(i);let v=document.createElement("input");v.type="range",v.min="10",v.max="200",v.value=l.speed||60,v.style.flex="1",v.addEventListener("change",()=>{$(d.id,{speed:parseInt(v.value)})}),u.appendChild(v);let h=document.createElement("span");h.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",h.textContent=v.value,v.addEventListener("input",()=>{h.textContent=v.value}),u.appendChild(h),n.appendChild(u);let T=document.createElement("div");T.className="admin-widget-row",T.style.alignItems="flex-start";let k=document.createElement("span");k.className="lbl",k.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",T.appendChild(k);let S=document.createElement("textarea");S.className="admin-widget-textarea",S.value=(l.messages||[]).join(`
`),S.rows=3,S.placeholder=ServerI18n.t("widgetTickerPlaceholder"),S.addEventListener("change",()=>{let B=S.value.split(`
`).filter(H=>H.trim());$(d.id,{messages:B})}),T.appendChild(S),n.appendChild(T)}function t(n,d){let l=d.config||{};n.appendChild(s(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",l.text||"",u=>$(d.id,{text:u}))),n.appendChild(s(window.ServerI18n?.t?.("size")||"SIZE",String(l.fontSize||24),u=>$(d.id,{fontSize:parseInt(u)||24}),"number"))}function s(n,d,l,u="text"){let i=document.createElement("div");i.className="admin-widget-row";let v=document.createElement("span");v.className="lbl",v.textContent=n,i.appendChild(v);let h=document.createElement("input");return h.type=u,h.value=d,h.className="admin-widget-input",h.addEventListener("change",()=>l(h.value)),i.appendChild(h),i}function r(n,d,l,u){let i=document.createElement("div");i.className="admin-widget-row";let v=document.createElement("span");v.className="lbl",v.textContent=n,i.appendChild(v);let h=document.createElement("select");return h.className="admin-widget-select",d.forEach(T=>{let k=document.createElement("option");k.value=T,k.textContent=T,T===l&&(k.selected=!0),h.appendChild(k)}),h.addEventListener("change",()=>u(h.value)),i.appendChild(h),i}})})()});var Mt=me(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let b=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","backup","integrations","plugins","webhooks","api-tokens","security","notifications","audience","firetoken","overlay","about"];function w(){let E=window.ADMIN_ROUTES||{},j={};return b.forEach(U=>{let Y=E[U];Y&&Y.title&&(j[U]={title:Y.title,kicker:Y.kicker||U.toUpperCase()})}),j}let g=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation",section:"sec-blacklist"},{labelKey:"cmdkSettingFilters",route:"moderation",section:"sec-filters"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{label:"Webhooks",route:"webhooks",section:"sec-webhooks"},{label:"Scheduler",route:"scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],f=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function _(){let E=document.querySelector('meta[name="csrf-token"]');return E&&E.content||""}function z(E,j){if(typeof window.csrfFetch=="function")return window.csrfFetch(E,j);let U=Object.assign({credentials:"same-origin"},j||{}),Y=new Headers(j&&j.headers||{});return Y.set("X-CSRF-Token",_()),U.headers=Y,fetch(E,U)}function y(E,j){typeof window.showToast=="function"&&window.showToast(E,j!==!1)}let A=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>z("/effects/reload",{method:"POST"}).then(E=>y(E.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),E.ok)).catch(()=>y(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"cmdkActionOverlayOff",subKey:"adminNavOverlay",action:()=>z("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"overlay_off"})}).then(E=>y(E.ok?ServerI18n.t("cmdkToastOverlayOff"):ServerI18n.t("cmdkToastToggleFailed"),E.ok)).catch(()=>y(ServerI18n.t("cmdkToastToggleFailed"),!1))},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>z("/admin/poll/reset",{method:"POST"}).then(E=>y(E.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),E.ok)).catch(()=>y(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return z("/admin/history/clear",{method:"POST"}).then(j=>y(j.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),j.ok)).catch(()=>y(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],m=null,$=null,x=null,D="",L=[],q=[],O=0,I=null,C=null,K=null,F=15e3;function P(E){return String(E??"").replace(/[&<>"']/g,j=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[j])}function p(E,j){if(!j)return 0;let U=String(E||"").toLowerCase(),Y=j.toLowerCase(),N=0,R=0,V=0,ne=0;for(;N<U.length&&R<Y.length;)U[N]===Y[R]?(R++,ne++,V+=2+ne):ne=0,N++;return R<Y.length?-1:(U.startsWith(Y)&&(V+=10),V)}function c(){let E=document.createElement("div");E.className="admin-cmdk",E.setAttribute("hidden",""),E.setAttribute("aria-hidden","true"),E.innerHTML=`
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
    `,document.body.appendChild(E),m=E,$=E.querySelector(".admin-cmdk-input"),x=E.querySelector(".admin-cmdk-list"),E.addEventListener("click",j=>{j.target.matches("[data-cmdk-close]")&&H()}),$.addEventListener("input",j=>{D=j.target.value,T()}),$.addEventListener("keydown",o),x.addEventListener("click",j=>{let U=j.target.closest("[data-cmdk-idx]");U&&(O=parseInt(U.dataset.cmdkIdx,10)||0,a())})}function o(E){if(E.key==="Escape"){E.preventDefault(),H();return}if(E.key==="ArrowDown"){E.preventDefault(),e(1);return}if(E.key==="ArrowUp"){E.preventDefault(),e(-1);return}if(E.key==="Enter"){E.preventDefault(),a();return}}function e(E){if(!L.length)return;O=(O+E+L.length)%L.length,S();let j=x.querySelector(`[data-cmdk-idx="${O}"]`);j&&j.scrollIntoView({block:"nearest"})}function a(){let E=L[O];if(E){if(E.type==="route")window.location.hash="#/"+E.route,H();else if(E.type==="setting")E.tab&&(document.body.dataset.viewerConfigTab=E.tab),window.location.hash="#/"+E.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let j=document.getElementById(E.section);j&&(j.scrollIntoView({behavior:"smooth",block:"start"}),j.tagName==="DETAILS"&&!j.open&&(j.open=!0))},80),H();else if(E.type==="message")window.location.hash="#/messages",H();else if(E.type==="user")window.location.hash="#/system",setTimeout(()=>{let j=document.getElementById("sec-fingerprints");j&&j.scrollIntoView({behavior:"smooth",block:"start"})},80),H();else if(E.type==="theme")z("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:E.id})}).then(j=>{j.ok?(y(ServerI18n.t("cmdkThemeApplied",{name:E.label}),!0),K=null):y(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>y(ServerI18n.t("cmdkThemeApplyFailed"),!1)),H();else if(E.type==="action"){try{let j=E.action&&E.action();j&&typeof j.then=="function"&&j.catch(()=>{})}catch{}H()}}}let t={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",history:"adminNavGroupSystem",backup:"adminNavGroupSystem",security:"adminNavGroupSystem",integrations:"adminNavGroupSystem"};function s(E){return Object.entries(w()).map(([j,U])=>{let Y=Math.max(p(U.title,E),p(j,E)),N=t[j];return{type:"route",route:j,label:U.title,sub:N?ServerI18n.t(N):"",icon:"\u25C7",score:Y}}).filter(j=>j.score>=0)}function r(E){let j=w()[E];return j?j.title:""}function n(E){return g.map(j=>{let U=j.labelKey?ServerI18n.t(j.labelKey):j.label;return{type:"setting",route:j.route,tab:j.tab,section:j.section,label:r(j.route)?`${r(j.route)} \u203A ${U}`:U,sub:"",icon:"\u2699",score:p(U,E)}}).filter(j=>j.score>=0)}function d(E){return I?(I.records||[]).map(U=>{let Y=U.text||U.message||"",N=U.nickname||U.user||"guest",R=(U.timestamp||"").slice(11,19)||"\u2014",V=(U.fingerprint||U.fp||"").slice(0,8);return{type:"message",label:`${Y}  \xB7  @${N}`,sub:V?`${R} \xB7 fp:${V}`:R,icon:"\u{1F4AC}",score:Math.max(p(Y,E),p(N,E))}}).filter(U=>U.score>=0):[]}function l(E){if(!K)return[];let j=K.records||[],U=K.active||"";return j.map(Y=>{let N=Y.label||Y.display_name||Y.name||"",R=Y.description||ServerI18n.t("cmdkThemeDefaultDesc"),V=Y.name===U;return{type:"theme",id:Y.name,label:V?ServerI18n.t("cmdkThemeActive",{name:N}):N,sub:R,icon:"\u{1F3A8}",score:Math.max(p(N,E),p(Y.name||"",E),p(R,E))}}).filter(Y=>Y.score>=0)}function u(E){return A.map(j=>{let U=ServerI18n.t(j.labelKey),Y=j.subKey?ServerI18n.t(j.subKey):j.sub;return{type:"action",id:j.id,label:U,sub:Y,icon:"\u26A1",action:j.action,score:Math.max(p(U,E),p(j.id,E),p(Y,E))}}).filter(j=>j.score>=0)}function i(E){return C?(C.records||[]).map(U=>{let Y=U.fingerprint||U.fp||U.id||"",N=U.ip||U.last_ip||"",R=U.nickname||"";return{type:"user",label:R?`@${R}  \xB7  ${Y.slice(0,12)}\u2026`:`${Y.slice(0,12)}\u2026`,sub:`user \xB7 ${N||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(p(Y,E),p(N,E),p(R,E))}}).filter(U=>U.score>=0):[]}async function v(){let E=Date.now(),j=[];(!I||E-I.at>F)&&j.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{I={at:E,records:U&&U.records||[]}}).catch(()=>{I={at:E,records:[]}})),(!C||E-C.at>F)&&j.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{C={at:E,records:U&&U.records||[]}}).catch(()=>{C={at:E,records:[]}})),(!K||E-K.at>F)&&j.push(fetch("/admin/themes",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{K={at:E,records:U&&U.themes||[],active:U&&U.active||""}}).catch(()=>{K={at:E,records:[],active:""}})),j.length&&await Promise.all(j)}let h={actions:5,pages:5,messages:4};async function T(){await v();let E=D.trim(),j={action:u(E),route:s(E),setting:n(E),theme:l(E),message:d(E),user:i(E)};L=[],q=[],f.forEach(U=>{let Y=U.types.reduce((N,R)=>N.concat(j[R]||[]),[]).sort((N,R)=>R.score-N.score).slice(0,h[U.id]||5);Y.length&&(q.push({id:U.id,labelKey:U.labelKey,from:L.length,count:Y.length}),L=L.concat(Y))}),O=0,S()}function k(E){return E.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[E.type]||"\xB7"}function S(){if(!L.length){x.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let E=[];q.forEach(j=>{E.push(`<li class="admin-cmdk-group" role="presentation">${P(ServerI18n.t(j.labelKey))}</li>`);for(let U=j.from;U<j.from+j.count;U++){let Y=L[U],N=U===O;E.push(`
        <li class="admin-cmdk-row ${N?"is-active":""}"
            data-cmdk-idx="${U}" role="option" aria-selected="${N}">
          <span class="admin-cmdk-icon" aria-hidden="true">${P(k(Y))}</span>
          <span class="admin-cmdk-label">${P(Y.label)}</span>
          <span class="admin-cmdk-sub">${P(Y.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${N?"\u21B5":""}</span>
        </li>`)}}),x.innerHTML=E.join("")}function B(){m||c(),m.removeAttribute("hidden"),m.setAttribute("aria-hidden","false"),m.classList.add("is-open"),D="",$.value="",T(),setTimeout(()=>$.focus(),20)}function H(){m&&(m.setAttribute("hidden",""),m.setAttribute("aria-hidden","true"),m.classList.remove("is-open"))}function M(){return!!(m&&!m.hasAttribute("hidden"))}window.AdminCommandPalette={open:B,close:H,isOpen:M,toggle:()=>M()?H():B()}})()});var Nt=me(()=>{(function(){"use strict";let b="sec-sessions-overview";var w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(c){return String(c).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},g={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function f(c){if(c=Number(c)||0,c<=0)return"\u2014";var o=Math.floor(c/3600),e=Math.floor(c%3600/60),a=c%60;return o>0?o+"h "+e+"m":e>0?e+"m":a+"s"}function _(c){if(!c)return"\u2014";try{var o=typeof c=="number"?new Date(c<1e12?c*1e3:c):new Date(c);return o.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(c)}}function z(){return'<div id="'+b+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function y(){return'<div class="admin-sessions-th"><span>'+w(ServerI18n.t("sessionsColSession"))+"</span><span>"+w(ServerI18n.t("sessionsColMessages"))+"</span><span>"+w(ServerI18n.t("sessionsColViewers"))+"</span><span>"+w(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function A(c){return c.name||ServerI18n.t("sessionsFallbackName",{id:(c.id||"").slice(0,12)})}function m(){var c=document.getElementById("admin-sessions-table-body");if(c){if(g.loading){window.AdminSkeletons?(c.innerHTML="",c.appendChild(window.AdminSkeletons.listRows({rows:5}))):c.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!g.sessions.length){c.innerHTML="";var o=window.AdminEmpty.render("sessions");o.dataset.emptyKind="sessions",c.appendChild(o);return}var e=g.sessions.map(function(a){var t=w(a.id||"");return'<div class="admin-sessions-tr'+(a.is_live?" is-live":"")+'" data-session-id="'+t+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(a.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+w(A(a))+'<span class="admin-sessions-td-sub">'+w(_(a.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(a.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(a.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+w(f(a.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+t+'">'+w(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");c.innerHTML=y()+e}}var $=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function x(){var c=document.querySelector("[data-sessions-export]");if(c){if(!g.exportId){c.hidden=!0,c.innerHTML="";return}var o=g.sessions.find(function(a){return a.id===g.exportId});if(!o){g.exportId=null,c.hidden=!0,c.innerHTML="";return}var e=$.map(function(a){return'<button type="button" class="admin-sx-export__seg'+(a.id===g.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+a.id+'" aria-pressed="'+(a.id===g.exportFormat?"true":"false")+'">'+w(ServerI18n.t(a.labelKey))+"</button>"}).join("");c.hidden=!1,c.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+w(ServerI18n.t("sessionsExportTitle",{name:A(o)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+w(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+e+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(g.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+w(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+w(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+w(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+w(ServerI18n.t("sessionsDownloadBtn",{fmt:g.exportFormat.toUpperCase()}))+"</button></div>"}}function D(){if(g.exportId){var c="/admin/sessions/"+encodeURIComponent(g.exportId)+"/export?format="+encodeURIComponent(g.exportFormat)+"&include_pii="+(g.exportPii?"1":"0"),o=document.createElement("a");o.href=c,o.rel="noopener",document.body.appendChild(o),o.click(),o.remove()}}async function L(){var c=g.exportId;if(c)try{var o=await fetch("/admin/sessions/"+encodeURIComponent(c)+"/export?format=json",{credentials:"same-origin"});if(!o.ok)throw new Error("HTTP "+o.status);var e=await o.json(),a=(e.records||[]).slice(0,500);if(!a.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var t=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:a,speedMultiplier:1})});if(t.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!t.ok)throw new Error("HTTP "+t.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function q(){m(),x()}async function O(){g.loading=!0,m();try{var[c,o]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),e=[],a=[];if(c.ok){var t=await c.json();e=Array.isArray(t.sessions)?t.sessions:[],e.forEach(function(i){i._explicit=!0})}if(o.ok){var s=await o.json();a=Array.isArray(s.sessions)?s.sessions:[]}var r=e.slice(),n=new Set(e.map(function(i){return i.id}));a.forEach(function(i){n.has(i.id)||r.push(i)}),r.sort(function(i,v){var h=typeof i.started_at=="number"?i.started_at:Date.parse(i.started_at||0),T=typeof v.started_at=="number"?v.started_at:Date.parse(v.started_at||0);return T-h});try{var d=await fetch("/admin/session/current",{credentials:"same-origin"});if(d.ok){var l=await d.json();if(l.status==="live"){var u=Object.assign({},l,{id:l.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});r.unshift(u)}}}catch{}g.sessions=r,g.total=r.length}catch(i){console.error("[admin-sessions] fetch error:",i),g.sessions=[],g.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:i.message||""}),!1)}finally{g.loading=!1,q()}}function I(c){c&&(window.location.hash="#/session-detail?id="+encodeURIComponent(c))}function C(c){g.exportId=c,x();var o=document.querySelector("[data-sessions-export]");o&&o.scrollIntoView({block:"nearest"})}function K(){var c=document.getElementById(b);c&&(c.addEventListener("click",function(o){var e=o.target.closest("[data-sessions-export-open]");if(e){o.stopPropagation(),C(e.dataset.sessionsExportOpen);return}if(o.target.closest("[data-sessions-export-close]")){g.exportId=null,x();return}var a=o.target.closest("[data-sessions-export-fmt]");if(a){g.exportFormat=a.dataset.sessionsExportFmt,x();return}if(o.target.closest("[data-sessions-replay]")){L();return}if(o.target.closest("[data-sessions-download]")){D();return}var t=o.target.closest(".admin-sessions-tr");t&&I(t.dataset.sessionId||null)}),c.addEventListener("change",function(o){var e=o.target.closest("[data-sessions-export-pii]");e&&(g.exportPii=!!e.checked)}),c.addEventListener("keydown",function(o){if(!(o.key!=="Enter"&&o.key!==" ")){var e=o.target.closest(".admin-sessions-tr");e&&(o.preventDefault(),I(e.dataset.sessionId||null))}}))}function F(){var c=document.querySelector(".admin-dash-grid"),o=document.getElementById(b);if(!(!c||!o)){var e=c.dataset.activeLeaf||"dashboard";o.style.display=e==="sessions"?"":"none"}}function P(){var c=document.getElementById("settings-grid");!c||document.getElementById(b)||(c.insertAdjacentHTML("beforeend",z()),K(),O(),F())}function p(){if(window.DANMU_CONFIG?.session?.logged_in){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&P(),F()});c.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",F),document.addEventListener("admin-panel-rendered",function(){P(),F()}),P()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p()})()});var Pt=me(()=>{(function(){"use strict";let b="sec-session-detail-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(k){return String(k).replace(/[&<>"']/g,function(S){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[S]})},g={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},f=!1,_={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function z(){let k=window.location.hash||"",S=k.indexOf("?");if(S===-1)return null;let B=k.slice(S+1);return new URLSearchParams(B).get("id")||null}function y(k){if(!k)return"\u2014";try{let S=new Date(k);if(isNaN(S.getTime()))return String(k);let B=H=>String(H).padStart(2,"0");return`${S.getFullYear()}-${B(S.getMonth()+1)}-${B(S.getDate())} ${B(S.getHours())}:${B(S.getMinutes())}:${B(S.getSeconds())}`}catch{return String(k)}}function A(k){if(!k||k<0)return"\u2014";let S=Math.round(Number(k)),B=Math.floor(S/3600),H=Math.floor(S%3600/60),M=S%60;return B>0?`${B}h ${H}m ${M}s`:H>0?`${H}m ${M}s`:`${M}s`}function m(k,S){if(!k||!S)return"";try{let B=Math.max(0,Math.round((new Date(k)-new Date(S))/1e3)),H=Math.floor(B/60),M=B%60;return`+${String(H).padStart(2,"0")}:${String(M).padStart(2,"0")}`}catch{return""}}function $(k){let S=Number(k);return isNaN(S)?"\u2014":S.toLocaleString()}function x(k){if(!k)return"#64748b";let S=0;for(let H=0;H<k.length;H++)S=S*31+k.charCodeAt(H)>>>0;return`hsl(${S%360}, 60%, 60%)`}function D(){return`
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
    `}async function L(k){if(!k){F(ServerI18n.t("sessionDetailErrMissingId"));return}K(!0);try{let S=await fetch(`/admin/sessions/${encodeURIComponent(k)}`,{credentials:"same-origin"});if(S.status===404&&(S=await fetch(`/admin/session/archive/${encodeURIComponent(k)}`,{credentials:"same-origin"})),!S.ok)throw new Error(`HTTP ${S.status}`);let B=await S.json();g.session=B.session||null,g.records=B.records||[],g.density=B.density||[],K(!1),P(),q()}catch(S){K(!1),F(ServerI18n.t("sessionDetailErrLoadFailed",{msg:S.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function q(){if(g.sessionId)try{let k=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(g.sessionId)}`,{credentials:"same-origin"});if(!k.ok)return;let S=await k.json();g.annotations=Array.isArray(S.annotations)?S.annotations:[],t()}catch{}}function O(){let k=g.session;if(!k)return 0;if(k.duration_s)return Math.round(k.duration_s*1e3);if(k.duration)return Math.round(k.duration*1e3);let S=k.started_at||k.start_time,B=k.ended_at||k.end_time;if(S&&B)try{return Math.max(0,new Date(B)-new Date(S))}catch{return 0}return g.density&&g.density.length?g.density.length*60*1e3:0}function I(k){let S=Date.parse(k||0);if(Number.isNaN(S))return"\u2014";let B=new Date(S),H=M=>String(M).padStart(2,"0");return`${H(B.getHours())}:${H(B.getMinutes())}:${H(B.getSeconds())}`}function C(k){let S=Math.floor(k/1e3),B=Math.floor(S/3600),H=Math.floor(S%3600/60),M=S%60,E=j=>String(j).padStart(2,"0");return B>0?`${E(B)}:${E(H)}:${E(M)}`:`${E(H)}:${E(M)}`}function K(k){g.loading=k;let S=document.querySelector("[data-sd-loading]"),B=document.querySelector("[data-sd-error]");S&&(S.hidden=!k),B&&k&&(B.hidden=!0);let H=document.querySelector("[data-sd-timeline-wrap]");if(H&&window.AdminSkeletons){let M=H.querySelector("[data-sd-timeline-skel]");k?(H.hidden=!1,M||(M=window.AdminSkeletons.chart(),M.setAttribute("data-sd-timeline-skel","1"),H.appendChild(M))):M&&M.remove()}}function F(k){g.error=k;let S=document.querySelector("[data-sd-error]"),B=document.querySelector("[data-sd-error-msg]");S&&(S.hidden=!1),B&&(B.textContent=k),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(H){let M=document.querySelector(`[${H}]`);M&&(M.hidden=!0)})}function P(){p(),c(),o(),a(),t();let k=document.querySelector("[data-sd-error]");k&&(k.hidden=!0)}function p(){let k=g.session,S=document.querySelector("[data-sd-session-header]");if(!S)return;S.hidden=!1;let B=document.querySelector("[data-sd-session-id]"),H=document.querySelector("[data-sd-meta-start]"),M=document.querySelector("[data-sd-meta-duration]"),E=document.querySelector("[data-sd-title]"),j=k&&(k.session_id||k.id)||g.sessionId||"\u2014";B&&(B.textContent=j),H&&(H.textContent=y(k&&(k.started_at||k.start_time))),M&&(M.textContent=A(k&&(k.duration_s||k.duration))),E&&(E.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(j).slice(-8)}))}function c(){let k=g.session;if(!k)return;let S=document.querySelector("[data-sd-kpis]");S&&(S.hidden=!1);let B=function(j,U,Y){let N=document.querySelector(`[data-sd-stat="${j}"]`);N&&(N.textContent=U);let R=document.querySelector(`[data-sd-stat-sub="${j}"]`);R&&(R.textContent=Y||"")};B("msg_count",$(k.msg_count)),B("viewer_count",$(k.viewer_count));let H=Array.isArray(g.density)?g.density:[];if(H.length){let j=0,U=0;H.forEach(function(R,V){R>j&&(j=R,U=V)});let Y=Date.parse(k.started_at||k.start_time||0),N="";if(!Number.isNaN(Y)){let R=new Date(Y+U*6e4),V=ne=>String(ne).padStart(2,"0");N=`${V(R.getHours())}:${V(R.getMinutes())}`}B("peak",$(j),N)}else B("peak","\u2014","");let M=Number(k.blocked_count)||0;B("blocked",$(M));let E=document.querySelector("[data-sd-blocked-btn]");E&&(E.textContent=ServerI18n.t("sessionDetailStatBlocked")+(M?" "+M:""),E.disabled=M===0)}function o(){let k=document.querySelector("[data-sd-timeline-wrap]"),S=document.querySelector("[data-sd-timeline]"),B=document.querySelector("[data-sd-timeline-axis]"),H=document.querySelector("[data-sd-peak-label]");if(!k||!S||!B)return;let M=g.density;if(!M||M.length===0){k.hidden=!0;return}k.hidden=!1;let E=Math.max(1,...M),j=0;M.forEach(function(ne,W){ne>M[j]&&(j=W)});let U=M.map(function(ne,W){let Z=Math.max(2,Math.round(ne/E*100));return`<div class="admin-sd-bar${W===j?" is-peak":""}" style="height:${Z}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:ne,minute:W+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:ne})}"></div>`}).join("");S.innerHTML=U;let Y=g.session,N=y(Y&&(Y.started_at||Y.start_time)).slice(11,16)||"00:00",R=y(Y&&(Y.ended_at||Y.end_time)).slice(11,16)||"",V=M.length>2?`+${Math.round(M.length/2)}min`:"";B.innerHTML=`
      <span class="admin-sd-axis-label">${w(N)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${w(V)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${w(R)}</span>
    `,H&&(H.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:M[j],minute:j}))}function e(){let k=(g.msgQuery||"").trim().toLowerCase();return g.records.filter(function(S){let B=(S.status||"shown")==="blocked";return g.msgFilter==="blocked"&&!B?!1:k?String(S.text||"").toLowerCase().indexOf(k)!==-1||String(S.nickname||"").toLowerCase().indexOf(k)!==-1:!0})}function a(){let k=document.querySelector("[data-sd-msgs-wrap]"),S=document.querySelector("[data-sd-msgs-list]");if(!k||!S)return;if(!g.records.length){k.hidden=!0;return}k.hidden=!1;let B=e().slice(0,300);if(!B.length){S.innerHTML='<div class="admin-sd-msgs-empty">'+w(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}S.innerHTML=B.map(function(H){let M=(H.status||"shown")==="blocked",E=x(H.fingerprint||H.fp||""),j=I(H.timestamp||H.created_at),U=String(H.nickname||"").trim();return`
        <div class="admin-sd-msg-row${M?" is-blocked":""}">
          <span class="admin-sd-msg-time">${w(j)}</span>
          <span class="admin-sd-msg-dot" style="background:${E}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${w(H.text||"")}</span>
          ${M&&H.blockedBy?`<span class="admin-sd-msg-rule">${w(ServerI18n.t("sessionDetailBlockedBy",{rule:H.blockedBy}))}</span>`:""}
          <span class="admin-sd-msg-nick">${w(U||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function t(){let k=g.annotations||[],S=O(),B=document.querySelector("[data-sd-ann-count]");B&&(B.textContent=k.length?`${k.length} ANNOTATIONS`:"");let H=document.querySelector("[data-sd-ann-head]");H&&(H.textContent=k.length?`ANNOTATIONS \xB7 ${k.length}`:"ANNOTATIONS");let M=document.querySelector("[data-sd-ann-layer]");M&&(!S||k.length===0?M.innerHTML="":M.innerHTML=k.map(function(U){let Y=_[U.label]||_.note,N=Math.min(100,Math.max(0,U.ts_ms/S*100)),R=U.id===g.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${Y.shape}${R?" is-active":""}"
              data-sd-ann-marker="${w(U.id)}"
              style="left:${N.toFixed(2)}%;--ann-color:${Y.color}"
              title="${w(Y.label)} \xB7 ${C(U.ts_ms)}"
              aria-label="${w(Y.label)} at ${C(U.ts_ms)}: ${w(U.note||"")}">
              ${Y.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${R?`<span class="admin-sd-ann-tip"><span style="color:${Y.color}">${Y.icon}</span> ${w((U.note||"").slice(0,40))}${(U.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let E=document.querySelector("[data-sd-ann-legend]");E&&(E.innerHTML=Object.keys(_).map(function(U){let Y=_[U],N=Y.shape==="square"?"2px":Y.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${Y.color};border-radius:${N}"></span>
          <span class="admin-sd-ann-legend-label">${Y.label}</span>
        </span>`}).join(""));let j=document.querySelector("[data-sd-ann-list]");if(j){if(k.length===0){j.innerHTML="";let U=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});U.dataset.emptyKind="session-annotations",j.appendChild(U);return}j.innerHTML=k.map(function(U){let Y=_[U.label]||_.note,N=U.id===g.activeAnnId,V=(U.note||"").length>80?(U.note||"").slice(0,80)+"\u2026":U.note||"";return`
        <div class="admin-sd-ann-row${N?" is-active":""}" data-sd-ann-row="${w(U.id)}">
          <span class="admin-sd-ann-ts" style="color:${Y.color}">${C(U.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${Y.color}">${Y.icon} ${Y.label}</span>
          <span class="admin-sd-ann-note">${w(V)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${w(U.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function s(k){if(!g.sessionId)return;let S=window.HudConfirm;if(!S){let Y=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:C(k)}),"");Y!=null&&Y.trim()&&r(k,"note",Y.trim());return}let H="highlight",M="",E=document.createElement("div");E.className="admin-sd-ann-modal-body",E.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${C(k)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(_).map(function(Y){let N=_[Y];return`
              <button type="button" class="admin-sd-ann-modal-lbl${Y==="highlight"?" is-active":""}"
                data-ann-label="${Y}" style="--ann-color:${N.color}">
                <span class="admin-sd-ann-modal-lbl-icon">${N.icon}</span>
                <span class="admin-sd-ann-modal-lbl-text">${N.label}</span>
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
      </div>`,E.addEventListener("click",function(Y){let N=Y.target.closest("[data-ann-label]");N&&(H=N.dataset.annLabel,E.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(R){R.classList.toggle("is-active",R===N)}))});let j=E.querySelector("[data-ann-modal-note]"),U=E.querySelector("[data-ann-modal-counter]");j.addEventListener("input",function(){M=j.value,U.textContent=`${M.length} / 280`}),setTimeout(function(){j&&j.focus()},50),S.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:E,width:460}).then(function(Y){Y&&r(k,H,j.value.trim())})}async function r(k,S,B){if(g.sessionId)try{let H=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:g.sessionId,ts_ms:Math.max(0,Math.round(k)),label:S||"note",note:B||""})});if(!H.ok)throw new Error(`HTTP ${H.status}`);let M=await H.json();M.annotation&&(g.annotations.push(M.annotation),g.annotations.sort(function(E,j){return E.ts_ms-j.ts_ms}),g.activeAnnId=M.annotation.id,t(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(H){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:H.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function n(k){if(k)try{let S=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(k)}`,{method:"DELETE",credentials:"same-origin"});if(!S.ok)throw new Error(`HTTP ${S.status}`);g.annotations=g.annotations.filter(function(B){return B.id!==k}),g.activeAnnId===k&&(g.activeAnnId=null),t(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(S){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:S.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function d(k){let S=document.querySelector("[data-sd-timeline-inner]"),B=document.querySelector("[data-sd-ann-hover]");if(!S||!B)return;let H=S.getBoundingClientRect();if(!H.width)return;let M=k.clientX-H.left,E=Math.min(1,Math.max(0,M/H.width)),j=O();if(!j){B.hidden=!0;return}let U=Math.round(E*j);g.hoverTsMs=U,B.hidden=!1,B.style.left=`${(E*100).toFixed(2)}%`,B.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:C(U)})}function l(){let k=document.querySelector("[data-sd-ann-hover]");k&&(k.hidden=!0),g.hoverTsMs=null}function u(k){if(k.target.closest("[data-sd-ann-marker]"))return;let S=document.querySelector("[data-sd-timeline-inner]");if(!S)return;let B=S.getBoundingClientRect();if(!B.width)return;let H=k.clientX-B.left,M=Math.min(1,Math.max(0,H/B.width)),E=O();E&&s(Math.round(M*E))}async function i(){if(g.sessionId)try{let k=g.records.slice(0,500);if(!k.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let S=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:k,speedMultiplier:1})});if(S.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!S.ok)throw new Error("HTTP "+S.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function v(k,S){if(k==="back")window.location.hash="#/history/sessions";else if(k==="retry")g.sessionId&&L(g.sessionId);else if(k==="export"){if(!g.sessionId)return;let B=document.createElement("a");B.href="/admin/sessions/"+encodeURIComponent(g.sessionId)+"/export?format=csv",B.rel="noopener",document.body.appendChild(B),B.click(),B.remove()}else if(k==="replay")i();else if(k==="add-annotation"){let B=O(),H=g.hoverTsMs!=null?g.hoverTsMs:Math.round(B/2);s(H)}}function h(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let S=z();if(!S){g.sessionId=null,F(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}g.sessionId=S,L(S)}function T(){let k=document.getElementById("settings-grid");if(!k)return;let S=document.getElementById(b);S||(k.insertAdjacentHTML("beforeend",D()),S=document.getElementById(b),t()),S&&S.dataset.sdBound!=="1"&&(S.dataset.sdBound="1",S.addEventListener("click",function(B){let H=B.target.closest("[data-sd-ann-del]");if(H){B.stopPropagation(),n(H.dataset.sdAnnDel);return}let M=B.target.closest("[data-sd-ann-marker]");if(M){B.stopPropagation(),g.activeAnnId=M.dataset.sdAnnMarker,t();let N=document.querySelector(`[data-sd-ann-row="${g.activeAnnId}"]`);N&&N.scrollIntoView&&N.scrollIntoView({block:"nearest",behavior:"smooth"});return}let E=B.target.closest("[data-sd-ann-row]");if(E){g.activeAnnId=E.dataset.sdAnnRow,t();return}if(B.target.closest("[data-sd-timeline-inner]")){u(B);return}let U=B.target.closest("[data-sd-action]");if(U){B.preventDefault(),v(U.dataset.sdAction,U);return}let Y=B.target.closest("[data-sd-filter]");Y&&(g.msgFilter=Y.dataset.sdFilter,S.querySelectorAll("[data-sd-filter]").forEach(function(N){N.classList.toggle("is-active",N===Y)}),a())}),S.addEventListener("input",function(B){let H=B.target.closest("[data-sd-search]");H&&(g.msgQuery=H.value||"",a())}),S.addEventListener("mousemove",function(B){B.target.closest("[data-sd-timeline-inner]")&&d(B)}),S.addEventListener("mouseleave",function(B){B.target.closest&&B.target.closest("[data-sd-timeline-inner]")&&l()},!0)),g.sessionId=z(),g.sessionId?L(g.sessionId):F(ServerI18n.t("sessionDetailErrNoSessionSelected")),f||(f=!0,window.addEventListener("hashchange",h))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&T()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let S=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(b)&&S.indexOf("/session-detail")!==-1&&T(),window.addEventListener("admin-route-changed",function(B){(B&&B.detail&&B.detail.route)==="session-detail"&&T()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&T()})})})()});var Ot=me(()=>{(function(){"use strict";let b="sec-search-overview";var w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})},g=20,f={query:"",scope:"session",blockedOnly:!1,who:"",shown:g,results:[],total:0,loading:!1,searched:!1},_=0;function z(){return'<div id="'+b+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+w(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+w(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+w(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+w(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+w(ServerI18n.t("searchWhoAria"))+'"><option value="">'+w(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+w(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+w(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function y(e){if(!e)return 200;for(var a=0,t=0;t<Math.min(e.length,6);t++)a=a*31+e.charCodeAt(t)&65535;return a%360}function A(e,a){if(!a||!e)return w(e||"");var t=w(e),s=w(a);try{var r=new RegExp("("+s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return t.replace(r,'<mark class="admin-search-hit">$1</mark>')}catch{return t}}function m(e){if(!e)return"\u2014";try{var a=new Date(e);return a.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return e}}function $(){var e=f.results;return f.blockedOnly&&(e=e.filter(function(a){return(a.status||"shown")==="blocked"})),f.who&&(e=e.filter(function(a){return(a.nickname||"")===f.who})),e}function x(){var e=document.getElementById("admin-search-count");if(e){if(!f.searched||!f.query.trim()){e.textContent="";return}e.textContent=ServerI18n.t("searchResultCount",{n:$().length})}}function D(){var e=document.querySelector("[data-search-who]");if(e){var a=[];f.results.forEach(function(s){var r=(s.nickname||"").trim();r&&a.indexOf(r)===-1&&a.push(r)}),a.sort();var t=f.who;e.innerHTML='<option value="">'+w(ServerI18n.t("searchWhoAnyone"))+"</option>"+a.map(function(s){return'<option value="'+w(s)+'"'+(s===t?" selected":"")+">"+w(s)+"</option>"}).join("")}}function L(){var e=document.getElementById("admin-search-results"),a=document.getElementById("admin-search-empty-state"),t=document.getElementById("admin-search-export-btn");if(e){e.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(u){u.remove()});var s=function(u){a&&(a.style.display="block",a.textContent=u),t&&(t.hidden=!0)};if(f.loading)return s(ServerI18n.t("searchSearching"));if(!f.searched)return s(ServerI18n.t("searchPromptStart"));var r=$();if(r.length===0)return s(ServerI18n.t("searchNoMatch"));a&&(a.style.display="none"),t&&(t.hidden=!1);var n=Math.min(r.length,f.shown),d=document.createDocumentFragment();if(r.slice(0,n).forEach(function(u){var i=document.createElement("div");i.className="admin-search-row",i.innerHTML='<span class="admin-search-row__ts">'+w(m(u.timestamp))+'</span><span class="admin-search-row__text">'+A(u.text||"",f.query)+'</span><span class="admin-search-row__nick">'+w((u.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+"</span>",d.appendChild(i)}),e.appendChild(d),r.length>n){var l=document.createElement("button");l.type="button",l.className="admin-search-more",l.dataset.searchMore="1",l.textContent=ServerI18n.t("searchMoreLeft",{n:r.length-n}),e.appendChild(l)}}}function q(){x(),D(),L()}async function O(){var e=f.query.trim();if(!e){f.loading=!1,f.searched=!1,f.results=[],f.total=0,q();return}f.loading=!0,q();try{var a="/admin/search?q="+encodeURIComponent(e);if(f.scope==="session"){var t=await C();t&&(a+="&since="+encodeURIComponent(t))}var s=Date.now(),r=await fetch(a,{credentials:"same-origin"}),n=Date.now()-s;if(!r.ok)throw new Error("HTTP "+r.status);var d=await r.json();f.results=Array.isArray(d.results)?d.results:[],f.total=typeof d.total=="number"?d.total:f.results.length,f.shown=g}catch(l){console.error("[admin-search] fetch error:",l),f.results=[],f.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:l.message||""}),!1)}finally{f.loading=!1,f.searched=!0,q()}}var I=null;async function C(){if(I!==null)return I;try{var e=await fetch("/admin/session/current",{credentials:"same-origin"});if(e.ok){var a=await e.json();if(a.status==="live"&&a.started_at)return I=new Date(a.started_at*1e3).toISOString(),I}}catch{}return I="",""}function K(){clearTimeout(_),_=setTimeout(O,300)}function F(){if(f.results.length){var e=[["nickname","fingerprint","timestamp","status","text"].join(",")];f.results.forEach(function(r){var n=[r.nickname||"",r.fingerprint||"",r.timestamp||"",r.status||"",r.text||""].map(function(d){return'"'+String(d).replace(/"/g,'""')+'"'});e.push(n.join(","))});var a=new Blob(["\uFEFF"+e.join(`
`)],{type:"text/csv;charset=utf-8"}),t=URL.createObjectURL(a),s=document.createElement("a");s.href=t,s.download="danmu-search-"+(f.query||"export")+".csv",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(t)}}function P(){var e=document.getElementById(b);if(e){var a=document.getElementById("admin-search-input");a&&(a.addEventListener("input",function(){f.query=a.value,K()}),a.addEventListener("keydown",function(s){s.key==="Enter"&&(clearTimeout(_),f.query=a.value,O())})),e.addEventListener("click",function(s){var r=s.target.closest("[data-search-scope]");if(r){f.scope=r.dataset.searchScope,e.querySelectorAll("[data-search-scope]").forEach(function(d){d.classList.toggle("is-active",d===r)}),f.query.trim()&&K();return}var n=s.target.closest("[data-search-blocked]");if(n){f.blockedOnly=!f.blockedOnly,n.classList.toggle("is-active",f.blockedOnly),f.shown=g,q();return}if(s.target.closest("[data-search-more]")){f.shown+=g,L();return}}),e.addEventListener("change",function(s){var r=s.target.closest("[data-search-who]");r&&(f.who=r.value||"",f.shown=g,q())});var t=document.getElementById("admin-search-export-btn");t&&t.addEventListener("click",F)}}function p(){var e=document.querySelector(".admin-dash-grid"),a=document.getElementById(b);if(!(!e||!a)){var t=e.dataset.activeLeaf||"dashboard";a.style.display=t==="search"?"":"none"}}function c(){var e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",z()),P(),p())}function o(){if(window.DANMU_CONFIG?.session?.logged_in){var e=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&c(),p()});e.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",p),document.addEventListener("admin-panel-rendered",function(){c(),p()}),c()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var Rt=me(()=>{(function(){"use strict";let b="sec-api-tokens-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(u){return String(u).replace(/[&<>"']/g,function(i){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[i]})},g=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],f=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],_={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function z(u){if(!u)return"\u2014";try{let i=new Date(u);if(isNaN(i.getTime()))return String(u);let v=h=>String(h).padStart(2,"0");return`${i.getFullYear()}-${v(i.getMonth()+1)}-${v(i.getDate())}`}catch{return String(u)}}function y(u){if(!u)return null;try{let i=new Date(u);if(isNaN(i.getTime()))return null;let v=h=>String(h).padStart(2,"0");return`${i.getFullYear()}-${v(i.getMonth()+1)}-${v(i.getDate())} ${v(i.getHours())}:${v(i.getMinutes())}`}catch{return null}}function A(u){let i=Number(u);return isNaN(i)?"0":i.toLocaleString()}function m(u){if(!u||u.enabled===!1)return"inactive";if(!u.expires_at)return"active";try{let i=new Date(u.expires_at).getTime(),v=Date.now();if(i<v)return"expired";if(i-v<168*3600*1e3)return"expiring"}catch{}return"active"}function $(u){if(!u)return 1/0;try{return Math.floor((Date.now()-new Date(u).getTime())/864e5)}catch{return 1/0}}function x(u){return!u||!u.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':u.map(function(i){let v="admin-ui-pill admin-at-scope-badge";return i==="admin:*"?v+=" is-danger":i.startsWith("fire:")?v+=" is-warn":i.startsWith("read:stats")?v+=" is-cyan":v+=" is-success",`<span class="${v}">${w(i)}</span>`}).join(" ")}function D(u){let i="admin-ui-dot admin-at-dot";return u==="active"?i+=" is-success":u==="expiring"?i+=" is-warn":u==="expired"?i+=" is-danger":i+=" is-muted",`<span class="${i}" aria-hidden="true"></span>`}function L(){let u=g.map(function(v){let h=v.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",k=`admin-ui-pill admin-at-scope-badge is-${v.badge==="red"?"danger":v.badge==="amber"?"warn":v.badge==="green"?"success":v.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${v.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${v.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${w(v.id)}"
          >
          <span class="${k}">${w(v.badgeTxt)}</span>
          <span class="admin-at-scope-label">${w(ServerI18n.t(v.labelKey))}</span>
          ${h}
        </label>
      `}).join(""),i=f.map(function(v){let h=v.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${v.days!==null?String(v.days):"null"}" ${h} class="sr-only">
          <span>${w(ServerI18n.t(v.labelKey))}</span>
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
                    ${u}
                  </div>
                </div>

                <!-- Expiry -->
                <div class="admin-at-field">
                  <div class="admin-ui-monolabel" style="margin-bottom:8px">${ServerI18n.t("uiExpiry")} \xB7 ${ServerI18n.t("apiTokensExpiryLabel")}</div>
                  <div class="admin-at-expiry-row" id="adminAtExpiryRow">
                    ${i}
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
    `}async function q(){K(!0);try{let u=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!u.ok)throw new Error(`HTTP ${u.status}`);let i=await u.json();_.tokens=i.tokens||i||[],P()}catch(u){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:u.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{K(!1)}}async function O(u){_.creating=!0,F(!0),a();try{let i=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!i.ok){let T=await i.json().catch(()=>({}));throw new Error(T.error||T.message||`HTTP ${i.status}`)}let v=await i.json(),h=v.token||v.raw_token||v.access_token||null;_.newTokenRaw=h,p(h),o(),await q(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(i){e(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:i.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:i.message||""}),!1)}finally{_.creating=!1,F(!1)}}async function I(u,i){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${w(i||u)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let h=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(u)}`,{method:"DELETE"});if(!h.ok){let T=await h.json().catch(()=>({}));throw new Error(T.error||T.message||`HTTP ${h.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await q()}catch(h){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:h.message||""}),!1)}}async function C(u,i){try{let v=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(u)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:i})});if(!v.ok){let h=await v.json().catch(()=>({}));throw new Error(h.error||h.message||`HTTP ${v.status}`)}window.showToast&&window.showToast(i?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await q()}catch(v){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:v.message||""}),!1)}}function K(u){let i=document.querySelector("[data-at-list-loading]");i&&(i.hidden=!u)}function F(u){let i=document.getElementById("adminAtSubmitBtn");i&&(i.disabled=u,i.textContent=u?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function P(){let u=_.tokens,i=document.querySelector("[data-at-empty]"),v=document.querySelector("[data-at-table-wrap]"),h=document.querySelector("[data-at-tbody]");if(!(!i||!v||!h)){if(!u||u.length===0){if(!i.firstElementChild&&window.AdminEmpty){let T=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});T.dataset.emptyKind="api-tokens",i.appendChild(T)}i.hidden=!1,v.hidden=!0;return}i.hidden=!0,v.hidden=!1,h.innerHTML=u.map(function(T){let k=m(T),S=D(k),B=T.scopes||T.scope||[],H=Array.isArray(B)?B:String(B).split(",").map(N=>N.trim()).filter(Boolean),E=$(T.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",j=k==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",U=k==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",Y=T.last_used_at?`${y(T.last_used_at)||z(T.last_used_at)}<br><span class="admin-at-ip">${w(T.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${w(T.id||T.token_id||"")}">
          <td class="admin-at-td-label">
            ${S}
            <span class="admin-at-label-text">${w(T.label||T.name||"\u2014")}</span>
            ${E}${j}${U}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${w(T.prefix||T.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${x(H)}</div>
          </td>
          <td class="admin-at-td-used">${Y}</td>
          <td class="admin-at-td-usage">${A(T.usage_count||T.use_count)}</td>
          <td class="admin-at-td-created">${z(T.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${w(T.id||T.token_id||"")}"
              data-token-enabled="${T.enabled===!1?"0":"1"}"
              title="${T.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${T.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${w(T.id||T.token_id||"")}"
              data-token-label="${w(T.label||T.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function p(u){let i=document.getElementById("adminAtSuccessBanner"),v=document.getElementById("adminAtTokenDisplay"),h=document.getElementById("adminAtCreateForm");i&&(i.hidden=!1),v&&u&&(v.value=u),h&&(h.style.opacity="0.5"),i&&i.scrollIntoView({behavior:"smooth",block:"nearest"})}function c(){let u=document.getElementById("adminAtSuccessBanner"),i=document.getElementById("adminAtCreateForm");u&&(u.hidden=!0),i&&(i.style.opacity=""),_.newTokenRaw=null}function o(){let u=document.getElementById("adminAtCreateForm");u&&u.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(h){h.classList.remove("is-active")});let i=document.querySelector("input[name='adminAtExpiry'][value='90']");if(i){i.checked=!0;let h=i.closest(".admin-at-expiry-btn");h&&h.classList.add("is-active")}let v=document.getElementById("adminAtAdminWarn");v&&(v.hidden=!0),a()}function e(u){let i=document.getElementById("adminAtFormError");i&&(i.hidden=!1,i.textContent=u)}function a(){let u=document.getElementById("adminAtFormError");u&&(u.hidden=!0,u.textContent="")}function t(){let u=document.getElementById("adminAtLabel"),i=u?u.value.trim():"",v=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(S){v.push(S.value)});let h=document.querySelector("input[name='adminAtExpiry']:checked"),T=h?h.value:"90",k=T==="null"?null:parseInt(T,10);return{label:i,scopes:v,expiry_days:k}}function s(u){return u.label?u.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!u.scopes||u.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function r(u){if(u.preventDefault(),_.creating)return;a();let i=t(),v=s(i);if(v){e(v);return}O(i)}function n(){let u=_.newTokenRaw;if(!u)return;let i=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(u).then(function(){i&&(i.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){i.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let v=document.getElementById("adminAtTokenDisplay");v&&(v.select(),document.execCommand("copy")),i&&(i.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){i.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function d(){let u=document.getElementById(b);if(!u)return;u.addEventListener("click",function(T){let k=T.target.closest("[data-at-action]");if(k){let B=k.dataset.atAction;if(B==="revoke"){let H=k.dataset.tokenId,M=k.dataset.tokenLabel;I(H,M)}else if(B==="toggle"){let H=k.dataset.tokenId,M=k.dataset.tokenEnabled==="1";C(H,!M)}else B==="copy-token"&&n();return}let S=T.target.closest(".admin-at-expiry-btn");S&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(B){B.classList.remove("is-active")}),S.classList.add("is-active"))});let i=document.getElementById("adminAtScope_admin__");i&&i.addEventListener("change",function(){let T=document.getElementById("adminAtAdminWarn");T&&(T.hidden=!i.checked)});let v=document.getElementById("adminAtCreateForm");v&&v.addEventListener("submit",r);let h=document.querySelector("input[name='adminAtExpiry'][value='90']");if(h){let T=h.closest(".admin-at-expiry-btn");T&&T.classList.add("is-active")}}function l(){let u=document.getElementById("settings-grid");!u||document.getElementById(b)||(u.insertAdjacentHTML("beforeend",L()),d(),q())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&l()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&l()})})()});var qt=me(()=>{(function(){"use strict";let b="sec-wcag-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})};function g(o){let e=o.replace(/^#/,""),a=e.length===3?e.split("").map(function(t){return t+t}).join(""):e;return[parseInt(a.slice(0,2),16)/255,parseInt(a.slice(2,4),16)/255,parseInt(a.slice(4,6),16)/255]}function f(o){return o<=.04045?o/12.92:Math.pow((o+.055)/1.055,2.4)}function _(o){let e=g(o);return .2126*f(e[0])+.7152*f(e[1])+.0722*f(e[2])}function z(o,e){let a=_(o),t=_(e),s=Math.max(a,t),r=Math.min(a,t);return(s+.05)/(r+.05)}function y(o){return o>=7?"AAA":o>=4.5?"AA":o>=3?"AA-large":"fail"}function A(o,e){let a=_(e),t=[],s=g(o);for(let r=.05;r<=.6&&t.length<3;r+=.05){let d="#"+s.map(function(u){return Math.min(1,u+r)}).map(function(u){return Math.round(u*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),l=z(d,e);l>=4.5&&t.push({hex:d,ratio:l})}return t}let m=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],$={fg:"#FB7185",bg:"#000000"},x="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",D={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function L(){let o=m.filter(function(t){return y(z(t.fg,t.bg))!=="fail"}).length,e=m.length-o,a=Math.round(o/m.length*100);return`
      <div id="${b}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${q("PASS AA+",o,ServerI18n.t("wcagStatPassLabel"))}
              ${q("BELOW AA",e,ServerI18n.t("wcagStatFailLabel"))}
              ${q("PAIRS",m.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${q("PASS RATE",a+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:a})}">
                <div class="admin-wcag-meter-fill" style="width:${a}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${x}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${m.map(function(t,s){return O(t,s)}).join("")}
            </div>

            <div class="admin-wcag-guardrail">
              <span class="admin-ui-monolabel">${ServerI18n.t("mlBuiltInGuardrail")}</span>
              ${ServerI18n.t("wcagGuardrailNote")}
            </div>
          </div>

          <!-- Right: single-pair tester -->
          <div class="admin-ui-card hud-page-col-gap admin-wcag-tester" data-wcag-tester>
            ${I()}
          </div>
        </div>
      </div>`}function q(o,e,a){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${w(String(e))}</span>
        <span class="hud-stat-tile-label">${w(a)}</span>
      </div>`}function O(o,e){let a=z(o.fg,o.bg),t=y(a),s=D[t],r=ServerI18n.t(o.nameKey),n=s.labelKey?ServerI18n.t(s.labelKey):s.label,d=t==="fail"?ServerI18n.t("wcagWarnFail"):t==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${x}"
        data-wcag-pair-idx="${e}" role="button" tabindex="0"
        aria-label="${w(ServerI18n.t("wcagPairAriaLabel",{name:r,ratio:a.toFixed(2),level:n.slice(2)}))}">
        <span class="admin-wcag-pair-name">${w(r)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${w(o.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${w(o.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${w(o.fg)}">${w(o.fg)} / ${w(o.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${a.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${s.mod}">${n}</span>
        ${d?`<span class="admin-wcag-warn">\u26A0 ${d}</span>`:""}
      </div>`}function I(){let o=z($.fg,$.bg),e=y(o),a=D[e],t=a.labelKey?ServerI18n.t(a.labelKey):a.label,s=A($.fg,$.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${C(ServerI18n.t("wcagForegroundLabel"),$.fg,"fg")}
        ${C(ServerI18n.t("wcagBackgroundLabel"),$.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${w($.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${w($.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${w($.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${w($.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${o.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${a.mod}">${t}</span>
      </div>

      <div class="admin-wcag-levels">
        ${K(ServerI18n.t("wcagCheckAANormal"),o>=4.5)}
        ${K(ServerI18n.t("wcagCheckAALarge"),o>=3)}
        ${K(ServerI18n.t("wcagCheckAAANormal"),o>=7)}
        ${K(ServerI18n.t("wcagCheckAAALarge"),o>=4.5)}
      </div>

      ${s.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${s.map(function(r){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${w(r.hex)}"
                title="${w(ServerI18n.t("wcagSuggApplyTitle",{ratio:r.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${w($.bg)};color:${w(r.hex)}">${w(r.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${r.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function C(o,e,a){let t="wcag-tester-"+a;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${t}">${w(o)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${w(e)}"></span>
          <input type="text" id="${t}" class="admin-ui-input" data-wcag-tester-${a}
            aria-label="${w(ServerI18n.t("wcagHexAria",{label:o}))}"
            value="${w(e)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function K(o,e){return`<div class="admin-wcag-level ${e?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${e?"\u2713":"\u2717"}</span>
      <span>${w(o)}</span>
    </div>`}function F(){let o=document.getElementById(b);o&&(o.addEventListener("click",function(e){let a=e.target.closest("[data-wcag-pair-idx]");if(a){P(a);return}let t=e.target.closest("[data-wcag-sugg]");t&&($.fg=t.dataset.wcagSugg,p())}),o.addEventListener("keydown",function(e){if(e.key!=="Enter"&&e.key!==" "&&e.key!=="Spacebar")return;let a=e.target.closest("[data-wcag-pair-idx]");a&&(e.preventDefault(),P(a))}),o.addEventListener("input",function(e){let a=e.target.closest("[data-wcag-tester-fg]"),t=e.target.closest("[data-wcag-tester-bg]");a&&/^#[0-9A-Fa-f]{6}$/.test(a.value)&&($.fg=a.value.toUpperCase(),p()),t&&/^#[0-9A-Fa-f]{6}$/.test(t.value)&&($.bg=t.value.toUpperCase(),p())}))}function P(o){let e=m[parseInt(o.dataset.wcagPairIdx,10)];e&&($.fg=e.fg,$.bg=e.bg,p())}function p(){let o=document.querySelector("[data-wcag-tester]");o&&(o.innerHTML=I())}function c(){let o=document.getElementById("settings-grid");!o||document.getElementById(b)||(o.insertAdjacentHTML("beforeend",L()),F())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&c()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&c()})})()});var Ht=me(()=>{(function(){"use strict";let b="danmu.onboarding.done",w="admin-onboarding-root",z=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],y=0,A=!1;window.AdminOnboarding={start:L,isDone:function(){try{return!!localStorage.getItem(b)}catch{return!1}},reset:function(){try{localStorage.removeItem(b)}catch{}}};let m=new Set(["live","dashboard"]);function $(){if(A||window.AdminOnboarding.isDone()||!m.has(x()))return;let o=()=>!!document.querySelector(".admin-session-banner-live");o()||setTimeout(()=>{A||window.AdminOnboarding.isDone()||o()||m.has(x())&&L()},1200)}function x(){let o=document.querySelector(".admin-dash-grid");return o&&o.dataset.activeRoute||"live"}function D(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&L()}function L(){A||(A=!0,y=0,K())}function q(o){if(!A)return;A=!1,document.body.removeEventListener("click",I),document.removeEventListener("keydown",C),window.removeEventListener("resize",F);let e=document.getElementById(w);if(e&&e.remove(),o)try{localStorage.setItem(b,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function O(){y<z.length-1?(y++,F()):q(!0)}function I(o){let e=o.target.closest("[data-ob-action]");e&&(o.stopPropagation(),e.dataset.obAction==="next"?O():e.dataset.obAction==="skip"&&q(!1))}function C(o){A&&o.key==="Escape"&&(o.preventDefault(),q(!1))}function K(){let o=document.getElementById(w);o&&o.remove();let e=document.createElement("div");e.id=w,e.className="admin-ob-root",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","false"),e.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(e),document.body.addEventListener("click",I),document.addEventListener("keydown",C),window.addEventListener("resize",F),F()}function F(){let o=document.getElementById(w);if(!o)return;let e=z[y],a=z.length,t=p(e.target),s=window.innerWidth,r=window.innerHeight,n="";t?n='<div class="admin-ob-spot" style="left:'+(t.left-8)+"px;top:"+(t.top-8)+"px;width:"+(t.width+16)+"px;height:"+(t.height+16)+'px;"></div>':n='<div class="admin-ob-scrim"></div>';let d=(s-360)/2,l=r/2-110,u="none";if(t){let T=t.left+t.width/2;e.side==="top"?(d=T-360/2,l=t.top-16,u="bottom"):e.side==="right"?(d=t.right+16+8,l=t.top,u="left"):(d=T-360/2,l=t.bottom+16+8,u="top"),d=Math.max(16,Math.min(s-360-16,d))}let i=z.map(function(T,k){return'<span class="admin-ob-progress-item'+(k===y?" is-current":"")+'">'+(k+1)+" "+c(ServerI18n.t(T.labelKey))+"</span>"+(k<a-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");o.innerHTML=n+'<div class="admin-ob-bubble" data-arrow="'+u+'" style="left:'+d+"px;top:"+l+'px"><div class="admin-ob-count">'+(y+1)+" / "+a+'</div><div class="admin-ob-title">'+c(ServerI18n.t(e.titleKey))+'</div><div class="admin-ob-body">'+c(ServerI18n.t(e.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+c(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+c(ServerI18n.t(y===a-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+i+"</div></div>";let v=o.querySelector(".admin-ob-bubble");if(!v||!t)return;let h=v.offsetHeight;if(e.side==="top")v.style.top=Math.max(16,t.top-16-8-h)+"px";else if(l+h>r-16){let T=t.top-16-8-h;T>=16?(v.style.top=T+"px",v.setAttribute("data-arrow","bottom")):(v.style.top=Math.max(16,r-h-16)+"px",v.setAttribute("data-arrow","none"))}P(v,t)}function P(o,e){let a=o.getAttribute("data-arrow");if(a==="none")return;let t=o.getBoundingClientRect(),s=a==="top"||a==="bottom",r=s?e.left+e.width/2-t.left:e.top+e.height/2-t.top,n=s?t.width:t.height,d=Math.max(16,Math.min(n-32,r-8));o.style.setProperty("--ob-arrow",d+"px")}function p(o){if(!o)return null;let e=document.querySelector(o);if(!e)return null;let a=e.getBoundingClientRect();return a.width<8||a.height<8||a.bottom<0||a.top>window.innerHeight?null:a}function c(o){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(o):o==null?"":String(o).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",D),D(),window.addEventListener("hashchange",function(){m.has(x())&&setTimeout($,600)}),setTimeout($,800))})})()});var Vt=me(()=>{var Ss=pe(Ce()),Is=pe(Ae()),ks=pe(Be()),Ts=pe(Fe()),_s=pe(De()),Es=pe(Me()),$s=pe(Ne()),xs=pe(Pe()),Ls=pe(Oe()),Cs=pe(Re()),As=pe(qe()),Bs=pe(He()),Fs=pe(je()),Ds=pe(Ue()),Ms=pe(Ke()),Ns=pe(We()),Ps=pe(Ge()),Os=pe(ze()),Rs=pe(Ve()),qs=pe(Je()),Hs=pe(Ye()),js=pe(Qe()),Us=pe(Xe()),Ks=pe(Ze()),Ws=pe(et()),Gs=pe(tt()),zs=pe(nt()),Vs=pe(at()),Js=pe(st()),Ys=pe(it()),Qs=pe(ot()),Xs=pe(rt()),Zs=pe(dt()),ei=pe(lt()),ti=pe(ct()),ni=pe(ut()),ai=pe(mt()),si=pe(pt()),ii=pe(vt()),oi=pe(ft()),ri=pe(ht()),di=pe(gt()),li=pe(bt()),ci=pe(yt()),ui=pe(wt()),mi=pe(St()),pi=pe(It()),vi=pe(kt()),fi=pe(Tt()),hi=pe(_t()),gi=pe(Et()),bi=pe($t()),yi=pe(xt()),wi=pe(Lt()),Si=pe(Ct()),Ii=pe(At()),ki=pe(Bt()),Ti=pe(Ft()),_i=pe(Dt()),Ei=pe(Mt()),$i=pe(Nt()),xi=pe(Pt()),Li=pe(Ot()),Ci=pe(Rt()),Ai=pe(qt()),Bi=pe(Ht())});Vt();})();
