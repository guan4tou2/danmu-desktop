/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var jt=Object.create;var Le=Object.defineProperty;var Ut=Object.getOwnPropertyDescriptor;var Kt=Object.getOwnPropertyNames;var Wt=Object.getPrototypeOf,Gt=Object.prototype.hasOwnProperty;var me=(b,w)=>()=>{try{return w||b((w={exports:{}}).exports,w),w.exports}catch(h){throw w=0,h}};var zt=(b,w,h,f)=>{if(w&&typeof w=="object"||typeof w=="function")for(let _ of Kt(w))!Gt.call(b,_)&&_!==h&&Le(b,_,{get:()=>w[_],enumerable:!(f=Ut(w,_))||f.enumerable});return b};var pe=(b,w,h)=>(h=b!=null?jt(Wt(b)):{},zt(w||!b||!b.__esModule?Le(h,"default",{value:b,enumerable:!0}):h,b));var Ce=me(()=>{(function(){"use strict";function b(w,h=!0){let f=document.getElementById("toast-container");if(!f)return;let _=document.createElement("div");_.className="flex items-center w-full max-w-xs p-4 mb-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 transform transition-all opacity-0 translate-x-full",_.setAttribute("role","alert");let z=getComputedStyle(document.documentElement),y=z.getPropertyValue("--motion-normal").trim()||"180ms",S=z.getPropertyValue("--ease-spring").trim()||"cubic-bezier(0.34, 1.56, 0.64, 1)";_.style.transition=`transform ${y} ${S}, opacity ${y} ease-out`;let m=h?'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>':'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',D=h?"text-green-500":"text-red-500";_.innerHTML=`
      <div class="${D}">${m}</div>
      <div class="pl-4 text-sm font-normal"></div>
    `;let q=_.querySelector(".pl-4.text-sm.font-normal");q.textContent=w,f.appendChild(_),requestAnimationFrame(()=>{_.classList.remove("opacity-0","translate-x-full")}),setTimeout(()=>{_.classList.add("opacity-0","translate-x-full"),_.addEventListener("transitionend",()=>{_.remove()})},3e3)}window.showToast=b})()});var Ae=me(()=>{(function(){"use strict";var b="admin-details-open-state";function w(){try{return JSON.parse(localStorage.getItem(b))||{}}catch{return{}}}function h(R){try{localStorage.setItem(b,JSON.stringify(R))}catch{}}var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function _(R){return R==null?"":String(R).replace(/[&<>"']/g,function(P){return f[P]})}function z(){var R=document.querySelector("script[nonce]");return R&&R.nonce||""}function y(R,P){var k=z();return"<style"+(R?' id="'+_(R)+'"':"")+(k?' nonce="'+_(k)+'"':"")+">"+(P||"")+"</style>"}var S='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',m=[],D=null;function q(R){if(!R)return!1;for(var P=R;P&&P!==document.documentElement;P=P.parentElement)if(P.style&&P.style.display==="none")return!1;return!!(R.offsetParent||R.getClientRects().length)}function M(){var R=document.hidden;m.forEach(function(P){var k=typeof P.el=="function"?P.el():P.el,x=!R&&q(k);if(x&&!P.timer){if(P.immediate!==!1)try{P.tick()}catch{}P.timer=setInterval(P.tick,P.intervalMs)}else!x&&P.timer&&(clearInterval(P.timer),P.timer=0)})}function L(R){var P={el:R.el,intervalMs:R.intervalMs,tick:R.tick,immediate:R.immediate,timer:0};return m.push(P),D||(D=new MutationObserver(function(){M()}),D.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden"]}),window.addEventListener("hashchange",M),document.addEventListener("visibilitychange",M),document.addEventListener("admin-panel-rendered",M)),M(),function(){P.timer&&clearInterval(P.timer);var x=m.indexOf(P);x!==-1&&m.splice(x,1)}}window.AdminUtils={DETAILS_STATE_KEY:b,loadDetailsState:w,saveDetailsState:h,escapeHtml:_,cspNonce:z,styleTag:y,closeIcon:S,pollWhileVisible:L}})()});var Be=me(()=>{(function(b){"use strict";let w={moderation:{defaultTab:"queue",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",sections:["sec-blacklist","sec-filters"]},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},integrations:{defaultTab:"webhooks",tabs:[{slug:"webhooks",labelKey:"tabExtWebhooks",en:"WEBHOOKS",section:"sec-webhooks"},{slug:"plugins",labelKey:"tabExtPlugins",en:"PLUGINS",sections:["sec-plugins","sec-extensions-overview"]},{slug:"api-tokens",labelKey:"tabExtApiKeys",en:"API KEYS",section:"sec-api-tokens-overview"},{slug:"scheduler",labelKey:"tabExtScheduler",en:"SCHEDULER",section:"sec-scheduler"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function h(M){return Array.isArray(M.sections)?M.sections:M.section?[M.section]:[]}function f(M){return!!w[M]}function _(M){return w[M]||null}let z={moderation:{filters:"blacklist",fingerprints:"bans"}};function y(M,L){let R=w[M];if(!R)return null;let P=K=>R.tabs.some(A=>A.slug===K),k=z[M]?.[L];if(k&&P(k))return k;if(L&&P(L))return L;let x=b.AdminRouter?.tabMemory?.get?.(M);return x&&P(x)?x:R.defaultTab}function S(M,L,R){let P=w[M];if(!P)return null;let k=document.createElement("div");return k.className="admin-tabs-strip",k.dataset.nav=M,k.setAttribute("role","tablist"),k.setAttribute("aria-label",M+" tabs"),P.tabs.forEach(x=>{let K=document.createElement("button");K.type="button",K.className="admin-tabs-btn"+(x.slug===L?" is-active":""),K.dataset.nav=M,K.dataset.tab=x.slug,K.setAttribute("role","tab"),K.setAttribute("aria-selected",x.slug===L?"true":"false");let A=document.createElement("span");A.className="admin-tabs-btn-label",A.textContent=x.labelKey?ServerI18n.t(x.labelKey):x.label,K.appendChild(A);let N=document.createElement("span");N.className="admin-tabs-btn-count",N.dataset.tabCount=x.slug,N.textContent=m[M]&&m[M][x.slug]?m[M][x.slug]:"",K.appendChild(N),K.addEventListener("click",()=>{typeof R?.onSelect=="function"&&R.onSelect(x.slug)}),k.appendChild(K)}),k}let m={};function D(M,L,R){if(!w[M])return;m[M]=m[M]||{},m[M][L]=R==null?"":String(R);let P=document.querySelector('.admin-tabs-strip[data-nav="'+M+'"] [data-tab-count="'+L+'"]');P&&(P.textContent=m[M][L])}function q(M,L,R){let P=w[M];!P||!R||P.tabs.forEach(k=>{let x=k.slug===L;h(k).forEach(K=>{let A=R.querySelector("#"+K);A&&(A.style.display=x?"":"none")})})}b.AdminTabs={hasTabsFor:f,getConfig:_,resolveActiveTab:y,renderTabStrip:S,applyTabSectionVisibility:q,setTabCount:D}})(window)});var Fe=me(()=>{(function(b,w){"use strict";let h="data-quick-action-host",f="admin-quick-action-bar";function _(D){if(D?.host instanceof HTMLElement)return D.host;let q=w.querySelector(".admin-dash-main");if(!q)return w.body;let M=q.querySelector(`[${h}]`);if(!M){M=w.createElement("div"),M.setAttribute(h,"");let L=q.querySelector(".admin-dash-topbar"),P=q.querySelector("[data-admin-tabs-host]")||L;P&&P.parentNode?P.insertAdjacentElement("afterend",M):q.prepend(M)}return M}function z(D,q){typeof b.showToast=="function"&&b.showToast(D,q!==!1)}function y({label:D,undoLabel:q,onUndo:M,windowMs:L}){let R=_(),P=R.querySelector("."+f);P&&P.remove();let k=w.createElement("div");k.className=f,k.setAttribute("role","status"),k.setAttribute("aria-live","polite");let x=w.createElement("span");x.className=f+"-text",x.textContent="\u2713 "+D,k.appendChild(x);let K=w.createElement("button");K.type="button",K.className=f+"-undo",K.textContent="\u21B6 "+(q||ServerI18n.t("qaUndoLabel")),k.appendChild(K);let A=()=>{k.classList.add("is-leaving"),setTimeout(()=>k.remove(),200)},N=setTimeout(A,L||5e3);return K.addEventListener("click",async()=>{clearTimeout(N),K.disabled=!0,K.textContent=ServerI18n.t("qaUndoing");try{await M(),z(ServerI18n.t("qaUndone"),!0)}catch(p){z(ServerI18n.t("qaUndoFailed",{msg:p?.message||String(p)}),!1)}finally{A()}}),R.appendChild(k),requestAnimationFrame(()=>k.classList.add("is-entering")),k}function S(D){if(!D||typeof D!="object")return;let q=D.label||ServerI18n.t("qaDone");D.toast!==!1&&z(q,!0),D.undo&&typeof D.undo.run=="function"&&y({label:q,undoLabel:D.undo.label,onUndo:D.undo.run,windowMs:D.undo.window})}function m(){w.querySelectorAll("."+f).forEach(D=>D.remove())}b.AdminQuickAction={fire:S,dismissAll:m}})(window,document)});var De=me(()=>{(function(){"use strict";let b="admin-hud-modal-root",w=null,h=null,f='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function _(){let m=document.getElementById(b);return m?Array.prototype.slice.call(m.querySelectorAll(f)).filter(D=>D.offsetParent!==null||D===document.activeElement):[]}function z(m){let D=document.getElementById(b);if(D&&D.remove(),w&&(w(m),w=null),document.removeEventListener("keydown",y),h&&typeof h.focus=="function")try{h.focus()}catch{}h=null}function y(m){if(m.key==="Escape"){m.preventDefault(),z(!1);return}if(m.key==="Enter"){m.preventDefault(),z(!0);return}if(m.key==="Tab"){let D=_();if(!D.length){m.preventDefault();return}let q=D[0],M=D[D.length-1],L=document.activeElement;m.shiftKey?(L===q||!D.includes(L))&&(m.preventDefault(),M.focus()):(L===M||!D.includes(L))&&(m.preventDefault(),q.focus())}}function S(m){return new Promise(D=>{w&&z(!1),w=D,h=document.activeElement;let{icon:q="\u26A0",title:M=ServerI18n.t("hudConfirmTitle"),subtitle:L="",severity:R="warn",body:P="",titleText:k,bodyText:x,confirmLabel:K=ServerI18n.t("hudConfirmLabel"),cancelLabel:A=ServerI18n.t("cancel"),width:N=480}=m||{},p=document.createElement("div");p.id=b,p.className=`admin-hud-modal admin-hud-modal--${R}`,p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","admin-hud-modal-title");let d=L?`<div class="admin-hud-modal__subtitle">${L}</div>`:"",r=typeof P=="string"?P:"",e=typeof P!="string"&&P&&P.nodeType;if(p.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${N}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${q}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${M}</div>
              ${d}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${r}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${A}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${K}</button>
          </div>
        </div>`,k!=null){let s=p.querySelector(".admin-hud-modal__title");s&&(s.textContent=String(k))}if(x!=null){let s=p.querySelector("[data-modal-body]");s&&(s.textContent=String(x))}if(e){let s=p.querySelector("[data-modal-body]");s.innerHTML="",s.appendChild(P)}p.addEventListener("click",function(s){let n=s.target.closest("[data-modal-action]");n&&(s.stopPropagation(),z(n.dataset.modalAction==="confirm"))}),document.body.appendChild(p),document.addEventListener("keydown",y),requestAnimationFrame(()=>{p.querySelector(".admin-hud-modal__btn--confirm")?.focus()})})}window.HudConfirm={open:S}})()});var Me=me(()=>{(function(){"use strict";function w(S){let m=document.createElement("div");return m.className="admin-skel-slow",m.hidden=!0,m.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",S.appendChild(m),setTimeout(function(){m.isConnected&&(m.hidden=!1)},3e3),S}function h(S,m){let D=document.createElement("div");if(D.className="admin-skel "+(S||""),m)for(let q in m)D.style[q]=m[q];return D}function f({rows:S=8}={}){let m=document.createElement("div");m.className="admin-skel-card admin-skel-list";let D=document.createElement("div");D.className="admin-skel-list__head",[60,80,140,200,80].forEach(q=>{D.appendChild(h("admin-skel-bar",{width:q+"px",height:"10px"}))}),m.appendChild(D);for(let q=0;q<S;q++){let M=document.createElement("div");M.className="admin-skel-list__row",M.appendChild(h("admin-skel-circle",{width:"24px",height:"24px"}));let L=document.createElement("div");L.className="admin-skel-list__col",L.appendChild(h("admin-skel-bar",{width:50+q*13%40+"%",height:"10px"})),L.appendChild(h("admin-skel-bar",{width:30+q*7%30+"%",height:"8px"})),M.appendChild(L),M.appendChild(h("admin-skel-bar",{width:"60px",height:"10px"})),m.appendChild(M)}return w(m)}function _({cols:S=4}={}){let m=document.createElement("div");m.className="admin-skel-stats",m.style.gridTemplateColumns=`repeat(${S}, 1fr)`;for(let D=0;D<S;D++){let q=document.createElement("div");q.className="admin-skel-card admin-skel-tile",q.appendChild(h("admin-skel-bar",{width:"60px",height:"8px"})),q.appendChild(h("admin-skel-bar",{width:"80px",height:"28px"})),q.appendChild(h("admin-skel-bar",{width:"100%",height:"18px"})),q.appendChild(h("admin-skel-bar",{width:"90px",height:"8px"})),m.appendChild(q)}return w(m)}function z(){let S=document.createElement("div");S.className="admin-skel-card admin-skel-chart";let m=document.createElement("div");m.className="admin-skel-chart__head",m.appendChild(h("admin-skel-bar",{width:"120px",height:"10px"}));let D=document.createElement("span");D.style.flex="1",m.appendChild(D),m.appendChild(h("admin-skel-bar",{width:"80px",height:"10px"})),S.appendChild(m);let q=document.createElement("div");q.className="admin-skel-chart__body";let M=document.createElement("div");M.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>M.appendChild(h("admin-skel-bar",{width:"24px",height:"6px"}))),q.appendChild(M);let L=document.createElement("div");return L.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(P=>L.appendChild(h("admin-skel-bar admin-skel-chart__bar",{height:P+"%"}))),q.appendChild(L),S.appendChild(q),w(S)}function y(S,m){let D={listRows:f,statsTiles:_,chart:z}[S];return D?D(m||{}).outerHTML:""}window.AdminSkeletons={listRows:f,statsTiles:_,chart:z,html:y}})()});var Ne=me(()=>{(function(){"use strict";let b={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},w={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:b.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:b.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:b.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:b.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:b.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:b.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:b.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:b.cyan}};function h(_){let{icon:z="\xB7",title:y="",desc:S="",accent:m=b.cyan,ctaAccent:D,actionLabel:q,action:M,extra:L}=_||{},R=document.createElement("div");R.className="admin-empty",R.dataset.empty="1",R.style.setProperty("--admin-empty-accent",m),D&&R.style.setProperty("--admin-empty-cta",D);let P=document.createElement("div");if(P.className="admin-empty__icon",P.textContent=z,R.appendChild(P),y){let k=document.createElement("div");k.className="admin-empty__title",k.textContent=y,R.appendChild(k)}if(S){let k=document.createElement("div");k.className="admin-empty__desc",k.textContent=S,R.appendChild(k)}if(q){let k=document.createElement("button");k.type="button",k.className="admin-empty__btn",k.textContent=q,typeof M=="function"&&k.addEventListener("click",M),R.appendChild(k)}if(L){let k=document.createElement("div");k.className="admin-empty__extra",typeof L=="string"?k.innerHTML=L:k.appendChild(L),R.appendChild(k)}return R}function f(_){let z=w[_];if(!z)return h({title:ServerI18n.t("emptyNoData"),desc:""});let y=Object.assign({},z,{title:z.titleKey?ServerI18n.t(z.titleKey):z.title,desc:z.descKey?ServerI18n.t(z.descKey):z.desc,actionLabel:z.actionLabelKey?ServerI18n.t(z.actionLabelKey):z.actionLabel});return h(y)}window.AdminEmpty={render:f,renderCustom:h,PRESETS:w}})()});var Pe=me(()=>{(function(){"use strict";var b=8;function w(y){return y?String(y).slice(0,b):""}function h(y){if(!y||typeof y!="object")return{nickname:"",fp:"",ip:""};var S=y.fingerprint||y.fp||y.hash||"",m=y.clientIp||y.client_ip||y.ip||"",D=y.nickname||y.nick||"";return{nickname:String(D||""),fp:String(S||""),ip:String(m||"")}}function f(y){if(!y||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var S=new TextEncoder().encode(String(y));return window.crypto.subtle.digest("SHA-256",S).then(function(m){var D=Array.from(new Uint8Array(m));return D.map(function(q){return q.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function _(y){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var S=document.getElementById("sec-fingerprints");if(S&&!S.open&&(S.open=!0),S)try{S.scrollIntoView({behavior:"smooth",block:"start"})}catch{}f(y).then(function(m){if(m)var D=0,q=setInterval(function(){D+=1;var M=document.querySelector('[data-fp-hash="'+m+'"]');if(M){clearInterval(q),M.classList.add("admin-identity-flash"),setTimeout(function(){M.classList.remove("admin-identity-flash")},2e3);try{M.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else D>12&&clearInterval(q)},250)})}function z(y){y=y||{};var S=y.nickname||"",m=y.fp||"",D=y.ip||"",q=!!y.compact,M=typeof y.onNicknameClick=="function"?y.onNicknameClick:null,L=typeof y.onFpClick=="function"?y.onFpClick:_,R=document.createElement("span");R.className="admin-identity-row";var P;if(M?(P=document.createElement("button"),P.type="button",P.className="admin-identity-nick is-clickable",P.addEventListener("click",function(p){p.stopPropagation(),M(S)})):(P=document.createElement("span"),P.className="admin-identity-nick"),S)P.textContent="@"+S;else{var k="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var x=ServerI18n.t("anonymousPlaceholder");x&&x!=="anonymousPlaceholder"&&(k=x)}}catch{}P.textContent="@"+k,P.classList.add("is-guest")}if(S&&(P.title=S),R.appendChild(P),m){var K;if(L?(K=document.createElement("button"),K.type="button",K.className="admin-identity-fp is-clickable",K.addEventListener("click",function(p){p.stopPropagation(),L(m)})):(K=document.createElement("span"),K.className="admin-identity-fp"),m==="new"){var A=document.createElement("span");A.className="admin-identity-dot",K.appendChild(A),K.appendChild(document.createTextNode("fp:new"))}else K.textContent="fp:"+w(m);K.title=m,R.appendChild(K)}if(D&&!q){var N=document.createElement("span");N.className="admin-identity-ip",N.textContent=D,N.title=D,R.appendChild(N)}return R}window.AdminIdentity={render:z,parse:h,focusFingerprint:_,hashFp:f,FP_DISPLAY_LEN:b}})()});var Oe=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;function w(s,n){return window.csrfFetch(s,n)}function h(s,n){return window.showToast(s,n)}let f="default",_=[],z={};function y(){let s=document.getElementById("themesList");s&&window.AdminSkeletons&&(s.innerHTML="",s.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function S(){y();try{let s=await w("/admin/themes");if(!s.ok)return;let n=await s.json();f=n.active||"default",_=n.themes||[],z=n.overrides||{},R(_,f),x()}catch(s){console.warn("[Themes] Failed to fetch themes:",s)}}var m="\u5C0F\u660E",D="\u8B1B\u5F97\u597D\uFF01+1";function q(s,n){var i=String(s||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(i)?i:n}function M(s){var n=s.styles||{},i=["color:"+q(n.color,"#ffffff")];if(n.textStroke){var a=Math.max(0,Math.min(6,Number(n.strokeWidth)||0));i.push("-webkit-text-stroke:"+a+"px "+q(n.strokeColor,"#000000")),i.push("paint-order:stroke fill")}if(n.textShadow){var t=Math.max(0,Math.min(40,Number(n.shadowBlur)||0));i.push("text-shadow:0 0 "+t+"px "+q(n.color,"#ffffff"))}var o=s.font&&s.font.family;return o&&/^[\w\s-]{1,40}$/.test(o)&&i.push("font-family:'"+o+"', var(--font-sans)"),s.font&&Number(s.font.weight)&&i.push("font-weight:"+Math.max(100,Math.min(900,Number(s.font.weight)))),i.join(";")}function L(s){var n=s.bg&&s.bg.gradient;return n&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(n).trim())?"background:"+String(n).trim():""}function R(s,n){let i=document.getElementById("themesList");if(i){if(i.innerHTML="",s.length===0){i.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}s.forEach(a=>{let t=a.name===n,o=b(ServerI18n.t("theme_"+a.name)!=="theme_"+a.name?ServerI18n.t("theme_"+a.name):a.label||a.name),c=document.createElement("div");c.className=`theme-pack-card${t?" is-active":""}`,c.innerHTML=`
        <div class="theme-pack-name">${o}</div>
        <div class="theme-pack-sample" style="${b(L(a))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${b(M(a))}">
            <span class="theme-pack-sample-nick">${b(m)}</span>
            ${b(D)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${a.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${b(a.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${t?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${b(a.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,i.appendChild(c)}),i.querySelectorAll(".theme-delete-btn").forEach(a=>{a.addEventListener("click",async()=>{let t=a.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let c=await w("/admin/themes/"+encodeURIComponent(t),{method:"DELETE"});if(!c.ok)throw new Error("HTTP "+c.status);h(ServerI18n.t("themeDeleted"),!0),S()}catch{h(ServerI18n.t("themesDeleteFailed"),!1)}})}),i.querySelectorAll(".theme-activate-btn").forEach(a=>{a.addEventListener("click",async()=>{let t=a.dataset.theme;try{let o=await w("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})});if(o.ok)h(ServerI18n.t("themeActivated"),!0),f=t,R(s,t),x();else{let c=await o.json().catch(()=>({}));h(c.error||ServerI18n.t("setThemeFailed"),!1)}}catch{h(ServerI18n.t("setThemeFailed"),!1)}})})}}function P(){return _.find(s=>s.name===f)||null}function k(s,n){let i=z[f]||{};if(i[s])return i[s];let a=n&&n.styles||{};return s==="stroke"?a.textStroke?Number(a.strokeWidth)>=3?"thick":"thin":"none":a.textShadow?Number(a.shadowBlur)>=10?"strong":"soft":"none"}function x(){let s=document.getElementById("themeDetail"),n=document.getElementById("themeDetailLabel");if(!s||!n)return;let i=P();if(!i)return;let a=ServerI18n.t("theme_"+i.name)!=="theme_"+i.name?ServerI18n.t("theme_"+i.name):i.label||i.name;n.textContent=ServerI18n.t("themeDetailGroup",{name:a}),["stroke","shadow"].forEach(o=>{let c=k(o,i);s.querySelectorAll(`[data-theme-seg="${o}"] [data-theme-opt]`).forEach(u=>{let l=u.getAttribute("data-theme-opt")===c;u.classList.toggle("is-active",l),u.setAttribute("aria-pressed",l?"true":"false")})});let t=s.querySelector('[data-theme-ov="color"]');if(t){let o=q((i.styles||{}).color,"#ffffff");t.value=/^#[0-9a-fA-F]{6}$/.test(o)?o:"#ffffff"}A(i),N(i)}var K=null;async function A(s){let n=document.getElementById("themeOvFont");if(!n)return;if(!K)try{let t=await fetch("/fonts",{credentials:"same-origin"});K=t.ok?(await t.json()).fonts||[]:[]}catch{K=[]}let a=(z[f]||{}).font_family||"";n.innerHTML=`<option value="">${b(ServerI18n.t("themeDetailFontInherit"))}</option>`+K.map(t=>{let o=String(t.name||t);return`<option value="${b(o)}"${o===a?" selected":""}>${b(o)}</option>`}).join("")}function N(s){let n=document.querySelector("[data-theme-preview-line]");n&&n.setAttribute("style",M(s))}async function p(s){try{let n=await w("/admin/themes/"+encodeURIComponent(f)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!n.ok)throw new Error("HTTP "+n.status);h(ServerI18n.t("themeDetailSaved"),!0),await S()}catch{h(ServerI18n.t("themeDetailSaveFailed"),!1)}}function d(){let s=document.getElementById("themeDetail");s&&(s.addEventListener("click",n=>{let i=n.target.closest("[data-theme-opt]");if(!i)return;let a=i.closest("[data-theme-seg]");a&&p({[a.getAttribute("data-theme-seg")]:i.getAttribute("data-theme-opt")})}),s.addEventListener("change",n=>{let i=n.target.closest("[data-theme-ov]");i&&p({[i.getAttribute("data-theme-ov")]:i.value})}))}function r(){let s=document.getElementById("themeNewBtn");s&&s.addEventListener("click",async()=>{let n=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!n||!n.trim()))try{let i=await w("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:n.trim(),base:f})});if(!i.ok)throw new Error("HTTP "+i.status);h(ServerI18n.t("themeCreated"),!0),S()}catch{h(ServerI18n.t("themesNewFailed"),!1)}})}function e(){S(),d(),r();let s=document.getElementById("themeReloadBtn");s&&s.addEventListener("click",async()=>{try{(await w("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(h(ServerI18n.t("themesReloaded")),S()):h(ServerI18n.t("themesReloadFailed"),!1)}catch{h(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:e}})()});var Re=me(()=>{(function(){"use strict";function b(I,C){return window.csrfFetch(I,C)}function w(I,C){return window.showToast(I,C)}var h=window.ServerI18n;function f(I,C){return window.AdminUtils.styleTag(I,C)}let _=null;function z(){let I=document.getElementById("effectEditModal");return I?Array.from(I.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(C=>!C.hasAttribute("disabled")&&C.getAttribute("aria-hidden")!=="true"):[]}function y(I){let C=document.getElementById("effectEditModal");if(!C||C.classList.contains("hidden"))return;if(I.key==="Escape"){I.preventDefault(),S();return}if(I.key!=="Tab")return;let H=z();if(H.length===0){I.preventDefault();return}let B=H[0],$=H[H.length-1],j=document.activeElement;I.shiftKey&&j===B?(I.preventDefault(),$.focus()):!I.shiftKey&&j===$&&(I.preventDefault(),B.focus())}function S(){let I=document.getElementById("effectEditModal");I&&(I.classList.add("hidden"),I.classList.remove("flex"),I.removeEventListener("keydown",y),_&&(_.focus(),_=null))}let m={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(I){return!!m[I]}};let D=new Map,q=new Map;function M(I){if(!I||!I.styleId||!I.keyframes)return;let C="dme-user-"+I.styleId;if(document.getElementById(C))return;let H=document.createElement("style");H.id=C,H.textContent=I.keyframes,document.head.appendChild(H)}async function L(I){if(D.has(I))return D.get(I);if(q.has(I))return q.get(I);let C=(async()=>{try{let H=await b(`/admin/effects/${encodeURIComponent(I)}/content`);if(!H.ok)throw new Error("content fetch failed");let B=await H.json(),$=B&&B.content||"";if(!$)throw new Error("empty content");let j=await b("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:$,params:{}})});if(!j.ok)throw new Error("preview failed");let U=await j.json();if(!U||!U.animation)throw new Error("no animation");return M(U),D.set(I,U),U}catch{return D.set(I,"failed"),null}finally{q.delete(I)}})();return q.set(I,C),C}function R(I,C){let H=I.querySelector(".effect-demo-text");if(!H)return;H.style.animation=C.animation||"",C.animationComposition&&(H.style.animationComposition=C.animationComposition),H.style.animationPlayState="paused";let B=k();B&&B.observe(I)}let P=null;function k(){return P||(typeof IntersectionObserver>"u"?null:(P=new IntersectionObserver(I=>{I.forEach(C=>{let H=C.target.querySelector(".effect-demo-text");H&&(H.style.animationPlayState=C.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),P))}let x=null;function K(I){let C=document.getElementById("effectPreviewParams");if(!C)return{};let H;try{let $=I.split(`
`),j=!1,U=0,Y=null,F=0,O={};for(let V of $){let ne=V.trimStart(),W=V.length-ne.length;if(ne.startsWith("params:")){j=!0,U=W;continue}if(!j||ne===""||ne.startsWith("#"))continue;if(W<=U&&!ne.startsWith("params:")){j=!1;continue}let Z=ne.match(/^([a-zA-Z0-9_]+):\s*$/);if(Z&&W===U+2){Y=Z[1],F=W,O[Y]={};continue}if(Y&&W>F){let te=ne.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(te){let oe=te[1],Q=te[2].trim();if((Q.startsWith('"')&&Q.endsWith('"')||Q.startsWith("'")&&Q.endsWith("'"))&&(Q=Q.slice(1,-1)),oe!=="options"){let se=Number(Q);O[Y][oe]=isNaN(se)?Q:se}}if(ne.startsWith("- value:")){O[Y].options||(O[Y].options=[]);let oe=ne.match(/^- value:\s*(.+)$/);if(oe){let Q=oe[1].trim();(Q.startsWith('"')&&Q.endsWith('"')||Q.startsWith("'")&&Q.endsWith("'"))&&(Q=Q.slice(1,-1)),O[Y].options.push({value:Q,label:Q})}}if(ne.startsWith("label:")&&O[Y].options&&O[Y].options.length>0){let oe=ne.match(/^label:\s*(.+)$/);if(oe){let Q=oe[1].trim();(Q.startsWith('"')&&Q.endsWith('"')||Q.startsWith("'")&&Q.endsWith("'"))&&(Q=Q.slice(1,-1)),O[Y].options[O[Y].options.length-1].label=Q}}}}H=O}catch{H={}}C.innerHTML="";let B={};for(let[$,j]of Object.entries(H||{})){let U=j.type||"float",Y=document.createElement("div");Y.className="flex flex-col gap-0.5";let F=document.createElement("label");if(F.className="font-mono",F.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",F.textContent=`${$} (${U})`,Y.appendChild(F),U==="select"&&Array.isArray(j.options)){let O=document.createElement("select");O.className="admin-ui-select",O.style.cssText="font-size:13px;padding:4px 8px",O.dataset.paramKey=$;for(let V of j.options){let ne=document.createElement("option");ne.value=V.value,ne.textContent=V.label||V.value,V.value===String(j.default)&&(ne.selected=!0),O.appendChild(ne)}B[$]=String(j.default||j.options[0]&&j.options[0].value||""),O.addEventListener("change",()=>{p()}),Y.appendChild(O)}else{let O=j.min!=null?j.min:0,V=j.max!=null?j.max:10,ne=j.step!=null?j.step:U==="int"?1:.1,W=j.default!=null?j.default:O,Z=document.createElement("div");Z.className="flex items-center gap-2";let te=document.createElement("input");te.type="range",te.min=O,te.max=V,te.step=ne,te.value=W,te.dataset.paramKey=$,te.className="flex-1",te.style.accentColor="var(--color-primary)";let oe=document.createElement("span");oe.className="font-mono",oe.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",oe.textContent=String(W),te.addEventListener("input",()=>{oe.textContent=te.value,p()}),Z.appendChild(te),Z.appendChild(oe),Y.appendChild(Z),B[$]=W}C.appendChild(Y)}return B}function A(){let I=document.getElementById("effectPreviewParams");if(!I)return{};let C={};return I.querySelectorAll("[data-param-key]").forEach(H=>{C[H.dataset.paramKey]=H.type==="range"?Number(H.value):H.value}),C}async function N(){let I=document.getElementById("effectEditModalTextarea"),C=document.getElementById("effectPreviewText"),H=document.getElementById("effectPreviewStyle"),B=document.getElementById("effectPreviewError");if(!I||!C||!H)return;let $=I.value;if(!$||$===h.t("effectLoadContent")||$===h.t("effectsNetworkError"))return;let j=A();B?.classList.add("hidden");try{let U=await b("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:$,params:j})}),Y=await U.json().catch(()=>({}));U.ok?(H.textContent=Y.keyframes||"",C.style.animation=Y.animation||"none",C.style.animationComposition=Y.animationComposition||""):(C.style.animation="none",H.textContent="",B&&(B.textContent=Y.error||h.t("previewFailed"),B.classList.remove("hidden")))}catch{C.style.animation="none",H.textContent="",B&&(B.textContent=h.t("effectsNetworkError"),B.classList.remove("hidden"))}}function p(){clearTimeout(x),x=setTimeout(()=>N(),500)}async function d(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
                  <p class="text-xs font-semibold m-0" style="color:var(--color-text-muted)">${h.t("livePreviewLabel")}</p>
                  <button id="effectPreviewRefreshBtn" class="admin-ui-action admin-fx-preview-refresh">${h.t("refresh")}</button>
                </div>
                <div id="effectPreviewBox" style="background:var(--color-bg-elevated);padding:20px;border-radius:8px;display:flex;align-items:center;justify-content:center;min-height:80px;">
                  <span id="effectPreviewText" style="font-size:34px;color:var(--color-text-strong);display:inline-block;">${h.t("previewText")}</span>
                </div>
                ${f("effectPreviewStyle","")}
                <div id="effectPreviewParams" class="flex flex-col gap-2"></div>
                <p id="effectPreviewError" class="text-xs m-0 hidden" style="color: var(--color-ink-error)"></p>
              </div>
            </div>
            <div class="flex justify-end gap-2 px-5 py-3 shrink-0" style="border-top:1px solid var(--admin-line)">
              <button id="effectEditModalCancel" class="admin-ui-action admin-fx-modal-action">${h.t("cancel")}</button>
              <button id="effectEditModalSave" class="admin-ui-action is-primary admin-fx-modal-action">${h.t("saveChanges")}</button>
            </div>
          </div>
        </div>
      `),document.getElementById("effectEditModalClose").addEventListener("click",S),document.getElementById("effectEditModalCancel").addEventListener("click",S),document.getElementById("effectEditModal").addEventListener("click",$=>{$.target===$.currentTarget&&S()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let $=document.getElementById("effectEditModalTextarea");$&&(K($.value),p())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{N()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let $=document.getElementById("effectEditModal"),j=document.getElementById("effectEditModalTextarea"),U=document.getElementById("effectEditModalSave"),Y=$?.dataset.effectName;if(!(!Y||!j)){U.disabled=!0;try{let F=await b("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Y,content:j.value})}),O=await F.json().catch(()=>({}));F.ok?(w(O.message||h.t("effectSaveFallback"),!0),S(),await s()):w(O.error||h.t("saveFailed"),!1)}catch{w(h.t("effectsNetworkError"),!1)}finally{U.disabled=!1}}})),await s(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let $=document.getElementById("effectReloadBtn");$&&($.disabled=!0);try{let j=await b("/admin/effects/reload",{method:"POST"}),U=await j.json().catch(()=>({}));j.ok?(w(U.message||h.t("effectsReloadFallback")),await s()):w(U.error||h.t("reloadFailed"),!1)}catch{w(h.t("effectsNetworkError"),!1)}finally{$&&($.disabled=!1)}});async function I($){if(!$)return;let j=new FormData;j.append("effectfile",$);try{let U=await b("/admin/effects/upload",{method:"POST",body:j}),Y=await U.json().catch(()=>({}));U.ok?(w(Y.message||h.t("effectUploadFallback")),await s()):w(Y.error||h.t("uploadFailed"),!1)}catch{w(h.t("effectsNetworkError"),!1)}}let C=document.getElementById("effectUploadInput"),H=C&&!C.dataset.uploadWired;H&&(C.dataset.uploadWired="1"),(H?C:null)?.addEventListener("change",async $=>{await I($.target.files?.[0]),$.target.value=""});let B=document.getElementById("sec-effects-mgmt");if(B){let $=0,j=O=>{O.preventDefault(),$++,B.classList.add("is-drag")},U=O=>{O.preventDefault()},Y=O=>{O.preventDefault(),$=Math.max(0,$-1),$===0&&B.classList.remove("is-drag")},F=async O=>{O.preventDefault(),$=0,B.classList.remove("is-drag");let V=O.dataTransfer?.files?.[0];if(V){if(!/\.(dme|dme\.zip)$/i.test(V.name)){w(h.t("fxToastBadExt"),!1);return}await I(V)}};B.addEventListener("dragenter",j),B.addEventListener("dragover",U),B.addEventListener("dragleave",Y),B.addEventListener("drop",F)}}function r(I){let C=(I||"").toLowerCase();return C.startsWith("glow")||C.includes("neon")?"GLOW":C.startsWith("shake")?"SHAKE":C.startsWith("wave")||C.startsWith("spin")||C.startsWith("bounce")||C.startsWith("zoom")||C.startsWith("fire")||C.includes("motion")?"MOTION":C.startsWith("rainbow")||C.startsWith("blink")||C.includes("color")?"COLOR":C.startsWith("type")||C.includes("text")?"TEXT":"MISC"}let e={all:[],filter:"ALL",selected:null};async function s(){let I=document.getElementById("effectsList");if(I)try{let C=await b("/admin/effects");if(!C.ok){I.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+h.t("effectsLoadFailed")+"</span>";return}let H=await C.json();e.all=H.effects||[],n(),a()}catch{I.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+h.t("effectsNetworkError")+"</span>"}}function n(){let I=document.getElementById("effectsFilterRow");if(!I)return;let C={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};e.all.forEach(U=>{C[r(U.name)]+=1});let H=e.all.length,B=[["ALL",h.t("fxChipAll"),H],["GLOW",h.t("fxCatGlow"),C.GLOW],["MOTION",h.t("fxCatMotion"),C.MOTION],["COLOR",h.t("fxCatColor"),C.COLOR],["SHAKE",h.t("fxCatShake"),C.SHAKE],["TEXT",h.t("fxCatText"),C.TEXT]];C.MISC>0&&B.push(["MISC",h.t("fxCatMisc"),C.MISC]);let $=B.map(([U,Y,F])=>`<span class="hud-filter-chip ${e.filter===U?"is-active":""}" data-effect-filter="${U}">${Y} ${F}</span>`).join(""),j=I.querySelector("[data-toolbar-spacer]");j?(I.querySelectorAll("[data-effect-filter]").forEach(U=>U.remove()),j.insertAdjacentHTML("beforebegin",$)):I.innerHTML=$,I.querySelectorAll("[data-effect-filter]").forEach(U=>{U.addEventListener("click",()=>{e.filter=U.dataset.effectFilter,n(),a()})})}function i(I){let C=(U,Y)=>{let F=document.querySelector(U);F&&(F.textContent=Y==null?"\u2014":String(Y))},H=I.length,B=I.filter(U=>U.enabled!==!1).length,$=new Set(I.map(U=>r(U.name))),j=I.filter(U=>!m[U.name]).length;C("[data-eflib-total]",H),C("[data-eflib-active]",B),C("[data-eflib-cats]",$.size),C("[data-eflib-user]",j)}function a(){let I=document.getElementById("effectsList");if(!I)return;let C=e.all;i(C);let H=e.filter==="ALL"?C:C.filter(B=>r(B.name)===e.filter);if(!H.length){I.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(C.length?h.t("fxNoFilterMatch"):h.t("noEffectsLoaded"))+"</span>";return}P&&P.disconnect(),I.innerHTML="",H.forEach(B=>{let $=r(B.name),j=$==="GLOW"?"is-glow":$==="COLOR"?"is-color":$==="TEXT"?"is-text":"",U=m[B.name]||"",Y=!!U,F=document.createElement("div");F.className="hud-effect-card"+(e.selected===B.name?" is-selected":""),F.dataset.effectName=B.name,F.title=[B.description,`file: ${B.filename}`].filter(Boolean).join(`
`);var O="effect_"+B.name;let V=h.t(O)!==O?h.t(O):B.label||B.name,ne=Y?"built-in":"user",W=U?`animation:${U};animation-play-state:paused;`:"";if(F.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${t(h.t("fxCat"+$.charAt(0)+$.slice(1).toLowerCase())||$)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${j}"><span class="effect-demo-text" style="${W}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${t(V)}</div>
          <div class="hud-effect-card-meta">${t(ne)} \xB7 ${t(B.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${h.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${h.t("lbDelete")}</button>
        </div>
      `,I.appendChild(F),U){let oe=k();oe&&oe.observe(F)}else{let oe=D.get(B.name);oe&&oe!=="failed"?(M(oe),R(F,oe)):oe!=="failed"&&L(B.name).then(Q=>{if(!Q)return;let se=I.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(B.name)}"]`);se&&R(se,Q)})}F.addEventListener("click",oe=>{oe.target.closest("[data-role]")||g(B)});let Z=F.querySelector('[data-role="edit"]'),te=F.querySelector('[data-role="delete"]');Z.addEventListener("click",async()=>{let oe=document.getElementById("effectEditModal"),Q=document.getElementById("effectEditModalTitle"),se=document.getElementById("effectEditModalFile"),de=document.getElementById("effectEditModalTextarea"),ue=document.getElementById("effectEditModalSave");if(!oe)return;_=document.activeElement instanceof HTMLElement?document.activeElement:null,Q.textContent=B.label||B.name,se.textContent=B.filename,de.value=h.t("effectLoadContent"),de.disabled=!0,ue.disabled=!0,oe.dataset.effectName=B.name,oe.classList.remove("hidden"),oe.classList.add("flex"),oe.addEventListener("keydown",y),de.focus();let fe=document.getElementById("effectPreviewText"),ge=document.getElementById("effectPreviewStyle"),G=document.getElementById("effectPreviewError"),X=document.getElementById("effectPreviewParams");fe&&(fe.style.animation="none"),ge&&(ge.textContent=""),G&&G.classList.add("hidden"),X&&(X.innerHTML="");try{let ee=await b(`/admin/effects/${encodeURIComponent(B.name)}/content`),J=await ee.json().catch(()=>({}));ee.ok?(de.value=J.content||"",de.disabled=!1,ue.disabled=!1,de.focus(),K(de.value),N()):(de.value=J.error||h.t("effectLoadContentFailed"),w(J.error||h.t("effectLoadContentFailed"),!1))}catch{de.value=h.t("effectsNetworkError"),w(h.t("effectsNetworkError"),!1)}}),te.addEventListener("click",async()=>{let oe=B.label||B.name;if(await window.HudConfirm?.open({icon:"\u2297",title:h.t("fxDeleteTitle"),subtitle:h.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${h.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${oe}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${h.t("fxDeleteWarn")}
                </div>`,confirmLabel:h.t("fxDeleteConfirm"),cancelLabel:h.t("cancel"),width:400}))try{let se=await b("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:B.name})}),de=await se.json().catch(()=>({}));se.ok?(w(de.message||h.t("effectDeleteFallback"),!0),await s()):w(de.error||h.t("deleteFailed"),!1)}catch{w(h.t("effectsNetworkError"),!1)}})})}function t(I){return String(I??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(I){let C={name:"",label:"",description:"",params:[]};if(!I)return C;let H=I.split(`
`),B="top",$=null;for(let j of H){let U=j.replace(/\r$/,""),Y=U.trimStart();if(!Y||Y.startsWith("#"))continue;let F=U.length-Y.length;if(F===0){if(B="top",$&&(C.params.push($),$=null),Y==="params:"){B="params";continue}let O=Y.match(/^([a-z_]+):\s*(.+)$/);O&&(O[1]==="name"?C.name=O[2].trim():O[1]==="label"?C.label=O[2].trim():O[1]==="description"&&(C.description=O[2].trim()));continue}if(!(B!=="params"&&B!=="param-fields"&&B!=="options")){if(F===2&&(B==="params"||B==="param-fields"||B==="options")){$&&(C.params.push($),$=null);let O=Y.match(/^(\w+):$/);O&&($={key:O[1]},B="param-fields");continue}if(F===4&&B==="param-fields"&&$){let O=Y.match(/^(\w+):\s*(.*)$/);if(O){let V=O[1],ne=O[2].trim();V==="label"?$.label=ne:V==="type"?$.type=ne:V==="default"?$.default=ne:V==="min"?$.min=parseFloat(ne):V==="max"?$.max=parseFloat(ne):V==="step"?$.step=parseFloat(ne):V==="options"&&($.options=[],B="options")}continue}if(B==="options"&&$&&F>=6){let O=Y.match(/^-\s*value:\s*(.+)$/);O&&($.options||($.options=[]),$.options.push({value:O[1].trim(),label:O[1].trim()}));let V=Y.match(/^label:\s*(.+)$/);V&&$.options&&$.options.length>0&&($.options[$.options.length-1].label=V[1].trim())}}}return $&&C.params.push($),C}function c(I,C){let H=I.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),B=H?H[1]:"",$=I.match(/^animation:\s*["']?(.+?)["']?\s*$/m),j=$?$[1].trim():"";for(let U of C.params){let Y=U.default!==void 0?U.default:"",F=new RegExp(`\\{${U.key}\\}`,"g");B=B.replace(F,Y),j=j.replace(F,Y)}return{keyframes:B,animation:j}}function u(I,C){if(I==="COLOR"){let H=C.find(B=>B.key==="duration");if(H&&H.default){let B=parseFloat(H.default);if(B<.25)return"crimson";if(B<.33)return"amber"}}if(I==="MOTION"){let H=C.find(B=>B.key==="height");if(H&&H.default){let B=parseFloat(H.default);if(B>30)return"crimson";if(B>24)return"amber"}}return"lime"}function l(I,C){return I==="COLOR"?C==="crimson"?h.t("fxHintFlashBlock"):C==="amber"?h.t("fxHintFlashWarn"):h.t("fxHintFlashOk"):C==="crimson"?h.t("fxHintAmpBlock"):C==="amber"?h.t("fxHintAmpWarn"):h.t("fxHintAmpOk")}function v(I,C){let H=o(C),{keyframes:B,animation:$}=c(C,H),j=r(I.name),U=H.params.filter(de=>de.type!=="select"),Y=H.params.filter(de=>de.type==="select"),F=u(j,H.params),O=F==="crimson"?"BLOCK":F==="amber"?"WARN":"OK",V=l(j,F),ne="fx-anim-"+I.name.replace(/[^a-z0-9]/gi,"-"),W=B&&$?f(ne,B):"",Z=$?`animation:${$};animation-play-state:running;`:"",te=U.map(de=>{let ue=parseFloat(de.default)||0,fe=de.min??0,ge=de.max??100,G=Math.max(0,Math.min(100,(ue-fe)/(ge-fe)*100)),X=(de.label||"").match(/\(([^)]+)\)$/),ee=X?X[1]:"",J=de.label||de.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${t(J)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${ue}<span style="color:var(--color-text-muted);margin-left:2px">${t(ee)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${G}%"></div>
          <div class="fx-slider-knob" style="left:${G}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${fe}${t(ee)}</span><span>${ge}${t(ee)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${h.t("fxNoNumericParams")}</span>`,oe=Y.map(de=>{let ue=de.options||[],fe=String(de.default||""),ge=ue.map(G=>`<span class="fx-radio-btn${G.value===fe||G.label===fe?" is-active":""}">${t(G.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${t(de.label||de.key)}</div>
        <div class="fx-radio-group">${ge||"<span>\u2014</span>"}</div>
      </div>`}).join(""),Q=["dark","light","photo"].map(de=>{let ue=de==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${de}">
        <span class="fx-preview-bg-label">${de.toUpperCase()}</span>
        <span class="fx-preview-text" style="${Z}color:${ue}">ABC</span>
      </div>`}).join(""),se=`${W}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${h.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${te}</div>
      </div>`;return oe&&(se+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${h.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${oe}</div>
      </div>`),se+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${h.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${Q}</div>
      </div>
      <div class="fx-warn-box${F!=="lime"?" is-"+F:""}">
        <span class="fx-warn-chip${F!=="lime"?" is-"+F:""}">${O}</span>
        <span class="fx-warn-text">${t(V)}</span>
      </div>
    </div>`,se}async function g(I){e.selected=I.name;let C=document.getElementById("effectsInspector"),H=document.getElementById("effectsInspectorTitle"),B=document.getElementById("effectsInspectorKicker"),$=document.getElementById("effectsInspectorBody");if(C){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),H&&(H.textContent=I.label||I.name),B&&(B.textContent="LOADING"),$&&($.className="hud-inspector-body",$.textContent="# "+h.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(j=>{j.classList.toggle("is-selected",j.dataset.effectName===I.name)});try{let j=await b(`/admin/effects/${encodeURIComponent(I.name)}/content`),U=await j.json().catch(()=>({}));if(j.ok){let Y=U.content||"";$&&($.className="hud-inspector-body has-param-panel",$.innerHTML=v(I,Y)),B&&(B.textContent=r(I.name))}else $&&($.className="hud-inspector-body",$.textContent="# "+(U.error||h.t("effectLoadContentFailed"))),B&&(B.textContent="ERROR")}catch{$&&($.className="hud-inspector-body",$.textContent="# "+h.t("effectsNetworkError")),B&&(B.textContent="NETWORK")}}}function E(){let I=document.getElementById("effectsInspectorReload"),C=document.getElementById("effectsInspectorEdit");I?.addEventListener("click",async()=>{if(!e.selected){w(h.t("fxSelectFirst"),!1);return}let H=e.all.find(B=>B.name===e.selected);H&&await g(H)}),C?.addEventListener("click",()=>{if(!e.selected){w(h.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(e.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",E())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:d}})()});var qe=me(()=>{(function(){"use strict";var b={};window.DanmuEvents={on:function(w,h){b[w]||(b[w]=[]),b[w].push(h)},off:function(w,h){b[w]=(b[w]||[]).filter(function(f){return f!==h})},emit:function(w,h){(b[w]||[]).forEach(function(f){f(h)})}}})()});var He=me(()=>{(function(){"use strict";let b="sec-events",w="/admin/audit?limit=200",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(A){return String(A).replace(/[&<>"']/g,function(N){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[N]})},_={events:[],filterSev:"all",filterCat:"all",timer:0};function z(A){let N=(A.source||A.kind||"").toLowerCase(),p=(A.action||"").toLowerCase();return N.includes("plugin")||p.includes("plugin")?"plugin":N.includes("webhook")||p.includes("webhook")?"webhook":N.includes("rate")||p.includes("rate")||p.includes("limit")?"rate":N.includes("filter")||p.includes("filter")?"filter":N.includes("overlay")||p.includes("overlay")||N==="broadcast"?"overlay":N.includes("backup")||p.includes("backup")?"backup":N.includes("msg")||N==="messaging"?"msg":N.includes("ws")||N==="websocket"?"ws":"system"}let y=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,S=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function m(A){let N=(A.action||A.kind||"").toLowerCase();return A.severity?A.severity:y.test(N)?"error":S.test(N)?"warn":"info"}function D(A){let N=A.source||"system",p=A.action||A.kind||"";return p?`${N.toUpperCase()}_${p.toUpperCase()}`:N.toUpperCase()}function q(A){if(!A)return"\u2014";let N=new Date(A*1e3),p=d=>String(d).padStart(2,"0");return`${p(N.getHours())}:${p(N.getMinutes())}:${p(N.getSeconds())}`}function M(A){if(A.message)return A.message;let N=A.meta||{},p=[];if(N.from&&N.to)p.push(`${N.from} \u2192 ${N.to}`);else if(N.text_preview)p.push(`"${N.text_preview.slice(0,60)}"`);else if(Object.keys(N).length){let d=Object.keys(N).slice(0,3);for(let r of d)p.push(`${r}=${JSON.stringify(N[r]).slice(0,30)}`)}return p.length?p.join(" \xB7 "):`${A.source||"system"}.${A.action||A.kind||"?"}`}function L(){return`
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
      </div>`}function R(){let A=document.querySelector("[data-ev-rows]");if(!A)return;let N=_.events,p=N.filter(e=>!(_.filterSev!=="all"&&m(e)!==_.filterSev||_.filterCat!=="all"&&z(e)!==_.filterCat));p.length===0?(A.innerHTML="",window.AdminEmpty?A.appendChild(window.AdminEmpty.render("events")):A.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):A.innerHTML=p.map(e=>{let s=m(e);return`
          <div class="admin-ev-v4__row" data-sev="${s}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${f(q(e.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${s}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${s}">${f(D(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${f(e.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${f(M(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let d={all:N.length,info:0,warn:0,error:0};for(let e of N)d[m(e)]+=1;Object.keys(d).forEach(e=>{let s=document.querySelector(`[data-ev-cnt="${e}"]`);s&&(s.textContent=String(d[e]))});let r=document.querySelector("[data-ev-total]");r&&(r.textContent=`${p.length} / ${N.length}`)}async function P(){try{let A=await fetch(w,{credentials:"same-origin"});if(!A.ok)return;let N=await A.json();_.events=Array.isArray(N.events)?N.events:[],R()}catch{}}function k(){let A=document.getElementById(b);A&&A.addEventListener("click",N=>{let p=N.target.closest("[data-ev-sev]");if(p){A.querySelectorAll("[data-ev-sev]").forEach(e=>e.classList.toggle("is-active",e===p)),_.filterSev=p.dataset.evSev,R();return}let d=N.target.closest("[data-ev-cat]");if(d){A.querySelectorAll("[data-ev-cat]").forEach(e=>e.classList.toggle("is-active",e===d)),_.filterCat=d.dataset.evCat,R();return}let r=N.target.closest("[data-ev-action]");if(r){if(r.dataset.evAction==="refresh")P();else if(r.dataset.evAction==="export"){let e=new Blob([JSON.stringify(_.events,null,2)],{type:"application/json"}),s=URL.createObjectURL(e),n=document.createElement("a");n.href=s,n.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(s),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function x(){let A=document.querySelector(".admin-dash-grid"),N=document.getElementById(b);if(!N)return;let d=(A?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";N.style.display=d?"":"none",d?(P(),_.timer||(_.timer=setInterval(P,15e3))):_.timer&&(clearInterval(_.timer),_.timer=0)}function K(){let A=document.getElementById("settings-grid");!A||document.getElementById(b)||(A.insertAdjacentHTML("beforeend",L()),k(),x())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&K(),x()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",x),document.addEventListener("admin-panel-rendered",()=>{K(),x()}),K()})})()});var je=me(()=>{(function(){"use strict";let b="sec-modqueue",w="/admin/modqueue/list",_=window.AdminUtils&&window.AdminUtils.escapeHtml||function(p){return String(p).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},z={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},y={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},S={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function m(p){let d=0,r=String(p||"");for(let e=0;e<r.length;e++)d=d*31+r.charCodeAt(e)&65535;return d%360}function D(p){if(!p.created_at_ms)return null;let d=(Date.now()-p.created_at_ms)/1e3,r=Math.max(0,z.autoRejectSec-d);return Math.ceil(r)}function q(p,d){let r=(p.severity||"low").toLowerCase(),e=y[r]||y.low,s=m(p.fp),n=String(p.fp||"\u2014").slice(0,8),i=p.nick||p.nickname||ServerI18n.t("audienceAnonymous"),a=(i||"?").slice(0,2).toUpperCase(),t=d==="pending"?D(p):null,o=d==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${_(p.id||"")}">${_(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${_(p.id||"")}">${_(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${_(p.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",c=d==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${_(ServerI18n.t("modqueueStampApproved"))} \xB7 ${_(p.resolved_by||"admin")} \xB7 ${_(p.resolved_ago||"")}
        </div>`:d==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${p.auto_rejected?`${_(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${_(ServerI18n.t("modqueueAutoRejectTimeout",{n:z.autoRejectSec}))}`:`${_(ServerI18n.t("modqueueStampRejected"))} \xB7 ${_(p.resolved_by||"admin")} \xB7 ${_(p.resolved_ago||"")}`}
        </div>`:"",u=d==="pending"&&t!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${t}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${_(p.id||"")}" data-mq-sev="${_(r)}" style="--mq-sev:${e}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${s})">${_(a)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${_(i)}</div>
            <div class="admin-mq-card__fp">fp:${_(n)}</div>
          </div>
          <div class="admin-mq-card__time">${_(p.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${_(p.content||p.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${e}">${_(ServerI18n.t(S[r]||S.low))}</span>
          <span class="admin-mq-card__rule">${_(ServerI18n.t("modqueueRuleLabel"))}: ${_(p.rule||p.matched_rule||"?")}</span>
          ${u}
        </div>
        ${o}
        ${c}
      </div>`}function M(p,d,r){p&&(p.innerHTML=d.map(e=>q(e,r)).join(""))}function L(){let p=document.getElementById(b);if(!p)return;p.querySelectorAll("[data-mq-bulk]").forEach(r=>{r.disabled=!0}),p.querySelector(".admin-mq__body").hidden=!0;let d=p.querySelector("[data-mq-empty]");d&&window.AdminEmpty&&(d.hidden=!1,d.innerHTML="",d.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function R(){let p=document.getElementById(b);if(!p)return;if(z.pending.length+z.approved.length+z.rejected.length===0){L();return}p.querySelector(".admin-mq__body").hidden=!1;let r=p.querySelector("[data-mq-empty]");r&&(r.hidden=!0),M(p.querySelector("[data-mq-col-pending]"),z.pending,"pending"),M(p.querySelector("[data-mq-col-approved]"),z.approved,"approved"),M(p.querySelector("[data-mq-col-rejected]"),z.rejected,"rejected");let e=(a,t)=>{p.querySelectorAll(a).forEach(o=>{o.textContent=String(t)})};e("[data-mq-cnt-pending]",z.pending.length),e("[data-mq-cnt-approved]",z.approved.length),e("[data-mq-cnt-rejected]",z.rejected.length);let s=z.pending.length===0;p.querySelectorAll("[data-mq-bulk]").forEach(a=>{a.disabled=s});let n=z.pending[z.pending.length-1],i=p.querySelector("[data-mq-oldest]");if(i){let a=n?D(n):null;i.textContent=a!=null?`oldest: ${a}s`:""}e("[data-mq-throughput]",z.stats.throughput.toFixed?z.stats.throughput.toFixed(1):z.stats.throughput),e("[data-mq-avg-review]",z.stats.avg_review_sec.toFixed?z.stats.avg_review_sec.toFixed(1):z.stats.avg_review_sec),e("[data-mq-auto-rate]",Math.round(z.stats.auto_reject_pct||0)+"%")}async function P(){try{let p=await fetch(w,{credentials:"same-origin"});if(!p.ok){z.pending=[],z.approved=[],z.rejected=[],R();return}let d=await p.json();z.pending=Array.isArray(d.pending)?d.pending:[],z.approved=Array.isArray(d.approved)?d.approved:[],z.rejected=Array.isArray(d.rejected)?d.rejected:[],z.stats=d.stats||z.stats,typeof d.auto_reject_sec=="number"&&(z.autoRejectSec=d.auto_reject_sec),R()}catch{}}async function k(p,d,r){if(window.csrfFetch)try{let e=await window.csrfFetch("/admin/modqueue/"+d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:p,...r||{}})});if(e.ok)window.showToast&&window.showToast(d==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),P();else{let s=await e.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:s.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function x(){return`
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
      </div>`}function K(){let p=document.getElementById(b);p&&p.addEventListener("click",async d=>{let r=d.target.closest("[data-mq-action]");if(r){let s=r.dataset.mqId,n=r.dataset.mqAction;(n==="approve"||n==="reject")&&k(s,n);return}let e=d.target.closest("[data-mq-bulk]");if(e){let s=e.dataset.mqBulk,n=s==="approve-low";if(!await window.HudConfirm?.open({icon:n?"\u2713":"\u2298",title:n?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:n?"warn":"danger",body:n?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:n?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let a=s.startsWith("approve")?"approve":"reject",t=s.endsWith("low")?"low":"high";k(null,"bulk",{action:a,severity:t})}})}function A(){let p=document.querySelector(".admin-dash-grid"),d=document.getElementById(b);if(!d)return;let r=(location.hash||"").replace("#/","").split("/"),e=p?.dataset.activeRoute||r[0]||"",s=p?.dataset.activeLeaf||r[1]||"",n=e==="modqueue"||e==="moderation"&&(s==="queue"||s===""||s==="moderation");d.style.display=n?"":"none",n?(z.timer||(P(),z.timer=setInterval(P,4e3)),z.countdownTimer||(z.countdownTimer=setInterval(R,1e3))):(z.timer&&(clearInterval(z.timer),z.timer=0),z.countdownTimer&&(clearInterval(z.countdownTimer),z.countdownTimer=0))}function N(){let p=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!p||document.getElementById(b)||(p.insertAdjacentHTML("beforeend",x()),K(),A())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(b)&&N(),A()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",A),document.addEventListener("admin-panel-rendered",()=>{N(),A()}),N()})})()});var Ue=me(()=>{(function(){"use strict";let b="sec-modbans-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(x){return String(x).replace(/[&<>"']/g,function(K){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[K]})},h=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],f={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},_={fingerprint:"FP",ip:"IP",nick:"NICK"},z={rows:[],refreshTimer:0};async function y(){try{let x=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!x.ok)return;let K=await x.json();z.rows=Array.isArray(K.bans)?K.bans:[],D()}catch{}}function S(x){if(!x||x<=0)return"\u2014";let K=Math.floor(x/86400),A=Math.floor(x%86400/3600),N=Math.floor(x%3600/60);return K>0?`${K}d ${A}h`:A>0?`${A}h ${N}m`:`${N}m`}function m(x){let K=x.target_kind;return K==="fingerprint"?`fp:${(x.target||"").slice(0,8)}`:K==="nick"?`@${x.target}`:x.target||"\u2014"}function D(){let x=document.querySelector("[data-modbans-list]");if(!x)return;let K=z.rows||[],A=document.querySelector("[data-modbans-count]");if(A&&(A.textContent=String(K.length)),K.length===0){x.innerHTML="";let N=window.AdminEmpty.render("blacklist");N.dataset.emptyKind="modbans",x.appendChild(N);return}x.innerHTML=K.map(function(N){let p=N.status==="expired",d=N.status==="permanent",r="admin-modbans-chip is-"+N.status,e=d?ServerI18n.t("modbansPermanent"):p?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:S(N.remaining_s)}),s=encodeURIComponent(N.target_kind)+"|"+encodeURIComponent(N.target);return`
        <div class="admin-modbans-row ${p?"is-expired":""}">
          <span class="admin-modbans-target">${w(m(N))}</span>
          <span class="admin-modbans-kind">${w(_[N.target_kind]||N.target_kind)}</span>
          <span class="admin-modbans-reason">${w(N.reason||"\u2014")}</span>
          <span class="${r}">
            ${N.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${w(e)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${s}"
            ${p?"disabled":""}
            title="${p?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${p?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function q(x){let K=x||{},A=K.kind||"ban",N=window.HudConfirm,p=!K.target,d=K.target_kind||"fingerprint",r=K.target||"";return new Promise(function(e){if(!N){e(!1);return}let s=86400,n=!1,i=12,a="hour",t=document.createElement("div");t.className="admin-modbans-modal-body",t.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${w(f[d]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${w(_[d]||"?")} ${w((A||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${w(r?m({target_kind:d,target:r}):"\u2014")}</div>
          </div>
        </div>
        ${p?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(O){return`<button type="button" class="admin-modbans-modal-preset${O===d?" is-active":""}"
                data-modbans-target-kind="${O}">${w(f[O])} ${w(_[O])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${h.map(function(O){return`<button type="button" class="${"admin-modbans-modal-preset"+(O.defaultPick?" is-active":"")+(O.permanent?" is-permanent":"")}" data-modbans-duration="${O.val}">${O.labelKey?ServerI18n.t(O.labelKey):O.label}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let o=t.querySelector("[data-modbans-custom-row]"),c=t.querySelector("[data-modbans-custom-input]"),u=t.querySelector("[data-modbans-custom-seconds]"),l=t.querySelector("[data-modbans-when]"),v=t.querySelector("[data-modbans-custom]"),g=t.querySelector("[data-modbans-target]"),E=t.querySelector("[data-modbans-target-icon]"),T=t.querySelector("[data-modbans-target-label]"),I=t.querySelector("[data-modbans-target-val]"),C=function(){E.textContent=f[d]||"?",T.textContent=`${_[d]||"?"} ${(A||"ban").toUpperCase()}`,I.textContent=r?m({target_kind:d,target:r}):"\u2014"},H=function(){return Math.max(1,parseInt(c.value,10)||1)*(a==="day"?86400:3600)},B=function(){if(s===0){l.textContent=ServerI18n.t("modbansWhenPermanent"),l.classList.remove("is-custom");return}let O=new Date(Date.now()+s*1e3),V=W=>String(W).padStart(2,"0"),ne=`${O.getFullYear()}-${V(O.getMonth()+1)}-${V(O.getDate())} ${V(O.getHours())}:${V(O.getMinutes())}`;n?(l.textContent=ServerI18n.t("modbansWhenCustom",{n:i,unit:ServerI18n.t(a==="day"?"modbansDay":"modbansHour"),stamp:ne}),l.classList.add("is-custom")):(l.textContent=ServerI18n.t("modbansWhenPreset",{dur:S(s),stamp:ne}),l.classList.remove("is-custom"))},$=function(){let O=H();u.textContent=`= ${O.toLocaleString()}s`,n&&(i=Math.max(1,parseInt(c.value,10)||1),s=O,B())},j=t.querySelector("[data-modbans-presets]"),U=function(){n=!0,o.hidden=!1,j.querySelectorAll(".admin-modbans-modal-preset").forEach(function(O){O.classList.toggle("is-active",O===v)}),$()},Y=function(O){n=!1,o.hidden=!0,j.querySelectorAll(".admin-modbans-modal-preset").forEach(function(V){V.classList.toggle("is-active",V===O)})};C(),B(),$(),t.addEventListener("click",function(O){let V=O.target.closest("[data-modbans-target-kind]");if(V){d=V.dataset.modbansTargetKind,V.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(Z){Z.classList.toggle("is-active",Z===V)}),C();return}if(O.target.closest("[data-modbans-custom]")){U();return}let ne=O.target.closest("[data-modbans-custom-unit]");if(ne){a=ne.dataset.modbansCustomUnit||"hour",t.querySelectorAll("[data-modbans-custom-unit]").forEach(function(Z){Z.classList.toggle("is-active",Z===ne)}),$();return}let W=O.target.closest("[data-modbans-duration]");W&&(s=parseInt(W.dataset.modbansDuration,10)||0,Y(W),B())}),c.addEventListener("input",$),g&&g.addEventListener("input",function(){r=g.value.trim(),C()});let F=t.querySelector("[data-modbans-reason]");N.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:t,width:480}).then(function(O){if(!O){e(!1);return}if(!r){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),e(!1);return}s===0?N.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${w(m({target_kind:d,target:r}))}</b>`})}).then(function(V){if(!V){e(!1);return}M(d,r,s,F.value.trim(),A).then(e)}):M(d,r,s,F.value.trim(),A).then(e)})})}async function M(x,K,A,N,p){try{let d=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:x,target:K,duration_s:A,reason:N||"",kind:p||"ban"})});if(!d.ok)throw new Error(`HTTP ${d.status}`);return window.showToast&&window.showToast(A===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:S(A)}),!0),y(),!0}catch(d){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:d.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function L(x){let K=(x||"").split("|");if(K.length!==2)return;let A=decodeURIComponent(K[0]),N=decodeURIComponent(K[1]);try{let p=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:A,target:N})});if(!p.ok)throw new Error(`HTTP ${p.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),y()}catch(p){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:p.message||ServerI18n.t("modbansUnknownError")}),!1)}}function R(){return`
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
      </div>`}function P(){let x=document.getElementById(b);if(!x||x.dataset.modbansBound==="1")return;x.dataset.modbansBound="1",x.addEventListener("click",function(A){if(A.target.closest("[data-modbans-add]")){q({kind:"ban"});return}let N=A.target.closest("[data-modbans-unban]");N&&!N.disabled&&L(N.dataset.modbansUnban)});let K=x.querySelector("[data-modbans-list]");K&&window.AdminSkeletons&&!K.children.length&&K.appendChild(window.AdminSkeletons.listRows({rows:4}))}function k(){let x=document.getElementById("settings-grid");!x||document.getElementById(b)||(x.insertAdjacentHTML("beforeend",R()),P(),y(),z.refreshTimer||(z.refreshTimer=setInterval(y,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&k()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&k()}),window.ModBans={openPicker:q,refreshList:y,formatTarget:m,formatRemaining:S}})()});var Ke=me(()=>{(function(){"use strict";let b="admin-mobile-nav-root",w=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],h=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"backup",icon:"\u21EA",labelKey:"mnavBackup",descKey:"mnavDescBackup"},{route:"security",icon:"\u26BF",labelKey:"adminRouteTitle_security",descKey:"mnavDescSecurity"},{route:"integrations",icon:"\u232C",labelKey:"adminNavIntegrations",desc:"Slido \xB7 Discord \xB7 OBS"}],f=!1,_=0;function z(){return`
      <div id="${b}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow hidden>
          ${h.map(R=>`
            <button type="button" class="admin-mobile-nav__o-row" data-mn-route="${R.route}">
              <span class="admin-mobile-nav__o-icon">${R.icon}</span>
              <span class="admin-mobile-nav__o-txt">
                <span class="admin-mobile-nav__o-label">${R.labelKey?ServerI18n.t(R.labelKey):R.label}</span>
                <span class="admin-mobile-nav__o-desc">${R.descKey?ServerI18n.t(R.descKey):R.desc||""}</span>
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
          ${w.map(R=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${R.id}" data-mn-route="${R.route||""}">
              <span class="admin-mobile-nav__icon">${R.icon}</span>
              <span class="admin-mobile-nav__label">${R.labelKey?ServerI18n.t(R.labelKey):R.label}</span>
              ${R.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${R.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </div>`}function y(){let R=(location.hash||"").replace("#/","").split("/")[0]||"";return w.some(P=>P.id===R)?R:h.some(P=>P.route===R)?"more":"live"}function S(){let R=document.getElementById(b);if(!R)return;let P=y();R.querySelectorAll("[data-mn-tab]").forEach(k=>{k.classList.toggle("is-active",k.dataset.mnTab===P)})}function m(R){let P=document.getElementById(b);P&&(f=R,P.dataset.overflow=R?"open":"closed",P.querySelector("[data-mn-overflow]").hidden=!R,P.querySelector("[data-mn-backdrop]").hidden=!R,P.querySelector("[data-mn-tab='more']")?.classList.toggle("is-active",R))}function D(R){if(R.target.closest("[data-mn-backdrop]")){m(!1);return}if(R.target.closest("[data-mn-logout]")){m(!1);let x=document.getElementById("logoutButton");x&&x.click();return}let P=R.target.closest("[data-mn-tab]");if(P){if(P.dataset.mnTab==="more"){m(!f);return}m(!1),P.dataset.mnRoute&&(location.hash="#/"+P.dataset.mnRoute);return}let k=R.target.closest("[data-mn-route]");k&&k.classList.contains("admin-mobile-nav__o-row")&&(m(!1),location.hash="#/"+k.dataset.mnRoute)}async function q(){try{let R=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!R.ok)return;let P=await R.json(),k=Array.isArray(P.pending)?P.pending.length:0;_=k;let x=document.querySelector("[data-mn-badge='pending']");if(!x)return;x.textContent=String(k),x.hidden=!(k>0)}catch{}}function M(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let R=0;function P(){let k=document.activeElement,x=k&&(k.tagName==="INPUT"||k.tagName==="TEXTAREA"||k.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!x)}document.addEventListener("focusin",()=>{cancelAnimationFrame(R),R=requestAnimationFrame(P)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(R),R=requestAnimationFrame(()=>setTimeout(P,50))})}function L(){document.getElementById(b)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",z()),document.addEventListener("click",D),window.addEventListener("hashchange",()=>{m(!1),S()}),S(),q(),setInterval(q,8e3),M())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",L):L()})()});var We=me(()=>{(function(){"use strict";var b="admin-session-expired-root",w=!1,h=null;function f(m,D){try{var q=window.ServerI18n&&ServerI18n.t(m);return q&&q!==m?q:D}catch{return D}}function _(){var m=document.getElementById(b);if(m&&m.remove(),document.body.classList.remove("is-session-expired"),w=!1,h&&h.focus)try{h.focus()}catch{}h=null}function z(m){if(m.key==="Tab"){var D=document.getElementById(b);if(D){var q=D.querySelectorAll("input, button");if(q.length){var M=q[0],L=q[q.length-1];m.shiftKey&&document.activeElement===M?(m.preventDefault(),L.focus()):!m.shiftKey&&document.activeElement===L&&(m.preventDefault(),M.focus())}}}}function y(){if(!(w||document.getElementById(b))){w=!0,h=document.activeElement,document.body.classList.add("is-session-expired");var m=document.createElement("div");m.id=b,m.className="admin-sx",m.setAttribute("role","alertdialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","admin-sx-title"),m.setAttribute("aria-describedby","admin-sx-body"),m.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+f("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+f("sxBody","\u9592\u7F6E\u8D85\u904E 8 \u5C0F\u6642\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+f("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+f("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(m),document.addEventListener("keydown",z,!0);var D=m.querySelector("#admin-sx-password");setTimeout(function(){try{D.focus()}catch{}},30),m.querySelector("[data-sx-form]").addEventListener("submit",function(q){q.preventDefault(),S(m,D)})}}function S(m,D){var q=m.querySelector("[data-sx-error]"),M=m.querySelector(".admin-sx__submit");q.hidden=!0,M.disabled=!0;var L=new URLSearchParams;L.set("password",D.value);var R=window.__adminRawFetch||window.fetch;R.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:L.toString()}).then(function(P){return P.json().then(function(k){return{status:P.status,data:k}},function(){return{status:P.status,data:{}}})}).then(function(P){if(M.disabled=!1,P.status===200&&P.data&&P.data.ok){var k=document.querySelector('meta[name="csrf-token"]');k&&P.data.csrf_token&&(k.content=P.data.csrf_token),document.removeEventListener("keydown",z,!0),_(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(f("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}P.status===429?q.textContent=f("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):q.textContent=f("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),q.hidden=!1,D.select()}).catch(function(){M.disabled=!1,q.textContent=f("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),q.hidden=!1})}window.AdminSessionExpired={open:y,close:_,isOpen:function(){return w}}})()});var Ge=me(()=>{(function(){"use strict";let b="admin-reconnect-banner",_=0,z=0,y="ok",S=0,m=5e3,D=!1,q=0;function M(r){if(y!==r){if(y=r,r==="ok"||r==="dismissed"){R(),r==="ok"&&(_=0,z=0,m=5e3);return}L()}}function L(){let r=document.getElementById(b);r||(r=document.createElement("div"),r.id=b,r.className="admin-rcb",r.setAttribute("role","status"),r.setAttribute("aria-live","polite"),document.body.insertBefore(r,document.body.firstChild)),r.dataset.state=y;let e=y==="exhausted",s=e?"admin-rcb--crimson":"admin-rcb--amber";r.className=`admin-rcb ${s}`,r.innerHTML=e?k():P(),r.querySelector("[data-rcb-action='retry']")?.addEventListener("click",K),r.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>M("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",e),q||(q=setInterval(x,250))}function R(){let r=document.getElementById(b);r&&r.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),q&&(clearInterval(q),q=0)}function P(){let r=Math.max(0,(S-Date.now())/1e3),e=m/1e3,s=Math.min(100,(e-r)/e*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:z})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${s}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function k(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function x(){if(y!=="reconnecting")return;let r=document.getElementById(b);if(!r)return;let e=Math.max(0,(S-Date.now())/1e3),s=m/1e3,n=Math.min(100,(s-e)/s*100),i=r.querySelector(".admin-rcb__progress-fill");i&&(i.style.width=n+"%")}function K(){z=0,_=0,m=5e3,M("reconnecting"),A()}async function A(){try{let r=await fetch("/admin/bootstrap",{credentials:"same-origin"});r.ok?N():r.status===401||r.status===403?M("ok"):p()}catch{p()}}function N(){M("ok")}function p(){if(_+=1,z+=1,z>=10){M("exhausted");return}_>=3&&(m=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,z-1))),S=Date.now()+m,M("reconnecting"),setTimeout(A,m))}function d(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let r=window.csrfFetch,e=window.fetch;window.__adminRawFetch=e,document.addEventListener("admin:session-restored",()=>{D=!1,N()});async function s(n){try{let i=await n;return i&&i.ok?y!=="ok"&&y!=="dismissed"&&N():i&&i.status===401&&!D?(D=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):i&&i.status>=500&&p(),i}catch(i){throw p(),i}}typeof r=="function"&&(window.csrfFetch=function(){return s(r.apply(this,arguments))}),window.fetch=function(n,i){let a=typeof n=="string"?n:n&&n.url||"",t=e.call(this,n,i);return a.startsWith("/admin/")||a.indexOf("//")===-1&&a.startsWith("admin/")?s(t):t}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var ze=me(()=>{(function(){"use strict";let b="admin-help-drawer-root",w={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},h=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],f=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function _(P){return P==null?"":String(P).replace(/[&<>"']/g,function(k){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[k]})}function z(){let P=(location.hash||"").replace("#/","").split("/")[0]||"";return w[P]?P:"_default"}function y(){return`
      <div id="${b}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function S(){let P=w[z()],k=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",x=P.titleKey?ServerI18n.t(P.titleKey):P.title,K=P.tipKeys.map(d=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${_(typeof d=="string"?ServerI18n.t(d):d.literal)}</span>
      </div>`).join(""),A=P.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${_(ServerI18n.t(P.fieldTipKey))}</span>
      </div>`:"",N=h.map(d=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${_(d.term)}</div>
        <div class="admin-help__glossary-def">${_(ServerI18n.t(d.defKey))}</div>
      </div>`).join(""),p=f.map(d=>`
      <a class="admin-help__resource" href="${_(d.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${_(d.label)}</span>
        <span class="admin-help__resource-url">${_(d.url.replace(/^https?:\/\//,""))}</span>
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
            <span class="admin-help__route-title">${_(x)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${K}</div>
          ${A}
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
          <div class="admin-help__glossary">${N}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${p}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${k?"v"+_(k):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function m(){let P=document.getElementById(b);P||(document.body.insertAdjacentHTML("beforeend",y()),P=document.getElementById(b),P.addEventListener("click",k=>{if(k.target.closest("[data-help-close]")){D();return}k.target.closest("[data-help-shortcuts]")&&(D(),window.AdminShortcuts&&window.AdminShortcuts.open())})),P.querySelector("[data-help-body]").innerHTML=S(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",M)}function D(){let P=document.getElementById(b);P&&P.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",M)}function q(){document.getElementById(b)?D():m()}function M(P){P.key==="Escape"&&(P.preventDefault(),D())}function L(P){let k=P.target;k&&(k.tagName==="INPUT"||k.tagName==="TEXTAREA"||k.isContentEditable)||P.key==="F1"&&(P.preventDefault(),q())}function R(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",L)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",R):R(),window.AdminHelp={open:m,close:D,toggle:q}})()});var Ve=me(()=>{(function(){"use strict";var b="admin-shortcuts-root",w=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function h(p,d){try{var r=window.ServerI18n&&ServerI18n.t(p);return r&&r!==p?r:d}catch{return d}}function f(p,d){window.showToast&&window.showToast(p,d!==!1)}function _(p,d){return(window.csrfFetch||window.fetch)(p,d||{})}function z(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}async function y(){var p=!1;try{var d=await fetch("/admin/broadcast/status",{credentials:"same-origin"});d.ok&&(p=(await d.json()).mode==="live")}catch{}try{var r=await _("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:p?"standby":"live"})});if(!r.ok)throw new Error("HTTP "+r.status);f(h(p?"ksToastDisplayOff":"ksToastDisplayOn",p?"\u5DF2\u95DC\u9589":"\u5DF2\u958B\u555F")),window.AdminDashboard&&window.AdminDashboard.refreshCockpitOverlay&&window.AdminDashboard.refreshCockpitOverlay()}catch{f(h("cmdkToastToggleFailed","\u5207\u63DB\u5931\u6557"),!1)}}async function S(){try{var p=await _("/admin/overlay/clear",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);f(h("toastCleared","\u5DF2\u6E05\u7A7A"))}catch{f(h("toastClearFailed","\u6E05\u7A7A\u5931\u6557"),!1)}}async function m(){var p="idle";try{var d=await fetch("/admin/poll/status",{credentials:"same-origin"});d.ok&&(p=(await d.json()).state||"idle")}catch{}if(p==="idle"){location.hash="#/polls",f(h("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var r=p==="active";try{var e=await _(r?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!e.ok)throw new Error("HTTP "+e.status);f(h(r?"ksToastPollEnded":"ksToastPollStarted",r?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{f(h("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function D(p){return w?p.metaKey:p.ctrlKey}var q=w?"\u2318":"Ctrl",M=[{group:"global",keys:[q,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(p){return D(p)&&(p.key==="k"||p.key==="K")},run:z},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(p){return p.key==="?"&&!D(p)&&!p.altKey||p.key==="/"&&D(p)},run:function(){K()}},{group:"global",keys:[q,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u5207\u63DB\u986F\u793A\u5C64",match:function(p){return D(p)&&p.shiftKey&&(p.key==="d"||p.key==="D")},run:y},{group:"global",keys:[q,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u5927\u87A2\u5E55",match:function(p){return D(p)&&p.shiftKey&&p.key==="Backspace"},run:S},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(p){return!D(p)&&"jkJK".indexOf(p.key)>=0},run:function(p){window.AdminLiveFeed.moveFocus(p.key==="j"||p.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(p){return!D(p)&&(p.key==="b"||p.key==="B")},run:function(p){window.AdminLiveFeed.blockFocused(p.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(p){return!D(p)&&p.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(p){return!D(p)&&(p.key==="p"||p.key==="P")},run:m}];function L(p){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(p):p==null?"":String(p).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})}function R(p){return M.filter(function(d){return d.group===p}).map(function(d){var r=d.keys.map(function(e){return e==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+L(e)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+L(h(d.labelKey,d.fallback))+'</span><span class="admin-ks__keys">'+r+"</span></div>"}).join("")}function P(){var p=document.getElementById(b);p&&p.remove(),document.removeEventListener("keydown",k,!0)}function k(p){(p.key==="Escape"||p.key==="?")&&(p.preventDefault(),P())}function x(){if(!document.getElementById(b)){var p=document.createElement("div");p.id=b,p.className="admin-ks",p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","admin-ks-title"),p.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+L(h("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+L(h("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+R("global")+'</div><div class="admin-ks__group-label">'+L(h("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+R("feed")+'</div><p class="admin-ks__note">'+L(h("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+L(h("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(p),p.addEventListener("click",function(r){r.target.closest("[data-ks-close]")&&P()}),document.addEventListener("keydown",k,!0);var d=p.querySelector(".admin-ks__close");d&&setTimeout(function(){try{d.focus()}catch{}},30)}}function K(){document.getElementById(b)?P():x()}function A(p){if(!p)return!1;if(p.isContentEditable)return!0;var d=(p.tagName||"").toLowerCase();return d==="input"||d==="textarea"||d==="select"}function N(){return!!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())}document.addEventListener("keydown",function(p){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var d=A(document.activeElement),r=0;r<M.length;r++){var e=M[r];if(e.group==="feed"){if(d||!N())continue}else if(d&&!D(p))continue;if(e.match(p)){p.preventDefault(),e.run(p);return}}}),window.AdminShortcuts={open:x,close:P,toggle:K,list:function(){return M.slice()}}})()});var Je=me(()=>{(function(){"use strict";let b="theme-mode",w="admin-theme-mode",h="admin-theme-toggle";(function(){try{if(localStorage.getItem(b)!=null)return;let L=localStorage.getItem(w);(L==="light"||L==="dark"||L==="auto")&&(localStorage.setItem(b,L),localStorage.removeItem(w))}catch{}})();function _(){try{let M=localStorage.getItem(b);if(M==="light"||M==="dark"||M==="auto")return M}catch{}return"auto"}function z(M){try{localStorage.setItem(b,M)}catch{}}function y(M){let L=document.documentElement;M==="auto"?L.removeAttribute("data-theme"):L.setAttribute("data-theme",M),m(M)}function S(M){return M==="light"||M==="dark"?M:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function m(M){let L=document.getElementById(h);if(!L)return;let R=S(M);L.dataset.mode=M,L.dataset.effective=R,L.textContent=M==="auto"?"\u25D0":R==="light"?"\u2600":"\u263E",L.title=M==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:R==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):M==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function D(){let M=_(),L=M==="auto"?"light":M==="light"?"dark":"auto";z(L),y(L)}function q(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let M=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,L=document.getElementById(h);if(L){M&&L.classList.contains("admin-theme-toggle--floating")&&M.parentNode&&!M.parentNode.contains(L)&&(L.classList.remove("admin-theme-toggle--floating"),M.parentNode.insertBefore(L,M));return}let R=document.createElement("button");R.id=h,R.type="button",R.className="admin-theme-toggle",R.addEventListener("click",D),M&&M.parentNode?M.parentNode.insertBefore(R,M):(R.classList.add("admin-theme-toggle--floating"),document.body.appendChild(R)),m(_())}if(y(_()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{_()==="auto"&&m("auto")})}catch{}window.addEventListener("storage",M=>{M.key===b&&y(_())}),window.AdminThemeSwitcher={getMode:_,setMode:function(M){M!=="auto"&&M!=="light"&&M!=="dark"||(z(M),y(M),m(M),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:M}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{q(),new MutationObserver(q).observe(document.body,{childList:!0,subtree:!0})}):(q(),new MutationObserver(q).observe(document.body,{childList:!0,subtree:!0}))})()});var Ye=me(()=>{(function(){"use strict";var b={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},w=[];window.DanmuStore={get:function(h){return b[h]},set:function(h,f){b[h]=f,w.forEach(function(_){_(h,f)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+h,f)},subscribe:function(h){w.push(h)},getAll:function(){return Object.assign({},b)}}})()});var Qe=me(()=>{(function(){"use strict";let h=0;function f(){return window.__adminCtx||{}}function _(){let m=f();return typeof m.getSettings=="function"?m.getSettings()||{}:{}}function z(){let m=_();if(m&&typeof m.OpsContact<"u"){let D=m.OpsContact;if(Array.isArray(D))return D[3]||D[0]||null;if(typeof D=="string")return D}return null}function y(){let m=f().appContainer||document.getElementById("app-container");if(!m)return;let D=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";m.innerHTML=`
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
              <span data-i18n="adminLoginServerOnline">${ServerI18n.t("adminLoginServerOnline")}</span>${D?` \xB7 v${D}`:""}
            </span>
          </div>
        </div>
      </div>
    `;let q=m.querySelector("[data-login-reveal]");q&&q.addEventListener("click",()=>{let P=document.getElementById("password");if(!P)return;let k=P.type==="text";P.type=k?"password":"text",q.textContent=ServerI18n.t(k?"adminLoginReveal":"adminLoginHide");try{P.focus()}catch{}});let M=document.getElementById("loginForm"),L=document.getElementById("password"),R=document.getElementById("loginAttemptsHint");if(M){try{let P=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(P)&&P>0){h=P;let k=Math.max(0,5-h);if(R&&h>0&&k>0){R.hidden=!1;let x=document.getElementById("password");x&&x.classList.add("is-error"),R.textContent=ServerI18n.t("loginAttemptsRemaining",{n:k})}}}catch{}M.addEventListener("submit",async P=>{if(P.preventDefault(),!L)return;let k=new URLSearchParams;k.set("password",L.value);try{let x=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:k.toString(),redirect:"manual"});if(x.status===429){let K=x.headers.get("Retry-After"),A=parseInt(K,10),N=Number.isFinite(A)&&A>0?A:300;S(N);return}h+=1;try{sessionStorage.setItem("admin_login_attempts",String(h))}catch{}window.location.reload()}catch(x){console.error("Login submit failed:",x),R&&(R.hidden=!1,R.textContent=ServerI18n.t("networkError"))}})}}function S(m){let D=document.getElementById("adminLoginCard");if(!D)return;let q=z(),M=q?`<a class="admin-lockout-contact" href="${q}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";D.classList.add("admin-lockout-card"),D.innerHTML=`
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
        ${M}
      </div>
    `;let L=document.getElementById("lockoutCountdown"),R=m,P=x=>{let K=Math.floor(x/60),A=x%60;return`${String(K).padStart(2,"0")}:${String(A).padStart(2,"0")}`};L&&(L.textContent=P(R));let k=setInterval(()=>{R-=1,L&&(L.textContent=P(Math.max(0,R))),R<=0&&(clearInterval(k),h=0,y(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:y,renderLockout:S}})()});var Xe=me(()=>{(function(){"use strict";function b(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function w(t){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(t):String(t??"").replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o])}async function h(){try{let t=b();await t.prime();let o=t.get("history_stats"),[c,u,l]=await Promise.all([o?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!u.ok)return;let v=o||(c&&c.ok?await c.json():null);if(!v)return;let g=(await u.json()).distribution||[],E=v.stats&&v.stats.total||0,T=g.reduce((U,Y)=>Y.count>(U?.count||-1)?Y:U,null),I=T?T.count:0,C=T?(T.hour||"").slice(-5):"\u2014",H=document.querySelector('[data-kpi="messages"]');H&&(H.querySelector("[data-kpi-value]").textContent=E.toLocaleString());let B=document.querySelector('[data-kpi="peak"]');B&&(B.querySelector("[data-kpi-value]").textContent=I.toLocaleString());let $=document.querySelector('[data-kpi="unique-fp"]');if($){let U=new Set;(v.records||[]).forEach(Y=>{let F=Y.fingerprint||Y.fp||Y.user_fingerprint;F&&U.add(F)}),$.querySelector("[data-kpi-value]").textContent=U.size.toLocaleString()}let j=document.querySelector('[data-kpi="session"]');if(j){let U=l&&l.ok?await l.json():null,Y=U&&U.status==="live",F=j.querySelector("[data-kpi-value]");if(Y&&U.started_at){let O=Math.max(0,Math.floor(Date.now()/1e3-U.started_at)),V=Math.floor(O/3600),ne=Math.floor(O%3600/60);F.textContent=V>0?`${V}:${String(ne).padStart(2,"0")}:${String(O%60).padStart(2,"0")}`:`${ne}:${String(O%60).padStart(2,"0")}`}else F.textContent="\u2014"}}catch{}}function f(t,o){let c=document.querySelector(t);if(c){if(typeof o!="number"||o<=0){c.hidden=!0;return}c.hidden=!1,c.textContent=o>999?"999+":String(o)}}async function _(){try{let t=b();await t.prime();let o=t.get("blacklist"),c=t.get("widgets"),u=t.get("history_stats"),l=t.get("effects"),v=t.get("themes");f("[data-count-blacklist]",Array.isArray(o)?o.length:0),f("[data-count-widgets]",Array.isArray(c?.widgets)?c.widgets.length:0),f("[data-count-messages]",u?.stats?.last_24h||0),f("[data-count-effects]",Array.isArray(l?.effects)?l.effects.length:0),f("[data-count-themes]",Array.isArray(v?.themes)?v.themes.length:0);try{let g=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(g.ok){let E=await g.json();f("[data-count-plugins]",Array.isArray(E?.plugins)?E.plugins.length:0)}}catch{}}catch{}}async function z(){_(),y(),i()}async function y(){let t=document.querySelector("[data-dash-poll-body]"),o=document.querySelector("[data-dash-poll-timer]");if(t)try{let c=b();await c.prime();let l=c.get("metrics");if(!l){let I=await fetch("/admin/metrics",{credentials:"same-origin"});if(!I.ok)return;l=await I.json()}let v=l.poll_state;if(!v||!v.active||!Array.isArray(v.options)||v.options.length===0){t.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,o&&(o.textContent="");return}let g=v.options.reduce((I,C)=>I+(C.votes||0),0),E=["A","B","C","D","E","F"],T=0;if(v.options.forEach((I,C)=>{(I.votes||0)>(v.options[T].votes||0)&&(T=C)}),t.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${w(v.question||ServerI18n.t("dashPollRunning"))}</div>`+v.options.map((I,C)=>{let H=g?Math.round(I.votes/g*100):0;return`
            <div class="admin-dash-poll-opt ${C===T&&g>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${E[C]||String(C+1)}</span>
                <span class="label">${w(I.label||"")}</span>
                <span class="pct">${H}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:I.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${H}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:g})}</div>`,o){let I=v.remaining_seconds;o.textContent=typeof I=="number"&&I>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(I/60),ss:String(I%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function S(t){t.dataset.actionsBound!=="1"&&(t.dataset.actionsBound="1",t.addEventListener("click",async o=>{let c=o.target.closest("[data-msg-action]");if(!c)return;let u=c.closest(".admin-dash-msg-row");if(!u)return;let l=c.dataset.msgAction,v=u.dataset.msgFp,g=u.dataset.msgId;if(l==="blacklist"){if(!v){window.showToast&&window.showToast(ServerI18n.t("dashToastNoFp"),!1);return}if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("dashBlacklistTitle"),subtitle:ServerI18n.t("cfmSubBlacklistFp"),severity:"danger",body:ServerI18n.t("dashBlacklistBody")+`<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:${w(v)}</div>`,confirmLabel:ServerI18n.t("dashBlacklistTitle")}))return;try{let T=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:`fp:${v}`})});if(!T.ok)throw new Error("HTTP "+T.status);window.showToast&&window.showToast(ServerI18n.t("dashToastBlacklistedFp",{fp:v}),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastBlacklistFailed"),!1)}}else if(l==="mask"||l==="hide")u.classList.add("is-masked-row"),window.showToast&&window.showToast(l==="mask"?ServerI18n.t("dashToastMasked"):ServerI18n.t("dashToastHidden"),!0);else if(l==="more"){let E=document.querySelector('[data-route="live"]');E&&E.click()}}))}function m(t){let o=t.visible!==!1,c=t.config&&t.config.title||t.type||"widget",u=(t.type||"widget").toUpperCase(),l=(t.position||"\u2014").toUpperCase(),v=o?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",g=t.created_at&&o?Math.max(0,Math.floor(Date.now()/1e3-t.created_at)):null,E=g!=null?(()=>{let T=Math.floor(g/86400),I=Math.floor(g%86400/3600),C=Math.floor(g%3600/60),H=g%60;return T>0?`UPTIME \xB7 ${T}d ${String(I).padStart(2,"0")}h`:I>0?`UPTIME \xB7 ${I}:${String(C).padStart(2,"0")}:${String(H).padStart(2,"0")}`:`UPTIME \xB7 ${C}:${String(H).padStart(2,"0")}`})():`STATUS \xB7 ${o?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${w(t.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${v}"></span>
          <span class="kind">${w(u)}</span>
          <span class="cat">${w(l)}</span>
        </div>
        <div class="title">${w(c)}</div>
        <div class="uptime">${E}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${o?" is-active":""}" data-widget-action="toggle" data-running="${o?"1":"0"}">${o?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function D(t,o){try{let c=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:t,config:{visible:!o}})});if(!c.ok)throw new Error("HTTP "+c.status);M()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function q(t){t.dataset.bound!=="1"&&(t.dataset.bound="1",t.addEventListener("click",o=>{let c=o.target.closest(".admin-dash-widget-tile");if(!c)return;let u=o.target.dataset.widgetAction,l=c.dataset.widgetId;if(!(!u||!l)){if(u==="toggle")D(l,o.target.dataset.running==="1");else if(u==="config"){let v=document.querySelector('[data-route="widgets"]');v&&v.click()}}}))}async function M(){let t=document.querySelector("[data-dash-widgets]");if(t)try{let o=b();await o.prime();let c=o.get("widgets");if(!c){let l=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!l.ok){t.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}c=await l.json()}let u=(c.widgets||c.items||[]).slice(0,4);if(u.length===0){t.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}t.innerHTML='<div class="admin-dash-widget-grid">'+u.map(m).join("")+"</div>",q(t)}catch{t.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let L=null,R=null,P=null;function k(t){let o=Math.max(0,Math.floor(Date.now()/1e3-t)),c=Math.floor(o/3600),u=Math.floor(o%3600/60),l=o%60;return c>0?`${c}:${String(u).padStart(2,"0")}:${String(l).padStart(2,"0")}`:`${String(u).padStart(2,"0")}:${String(l).padStart(2,"0")}`}function x(t){let o=document.getElementById("admin-session-banner"),c=document.getElementById("sec-live-feed");if(c&&c.classList.toggle("is-idle-collapsed",!(t&&t.status==="live")),o&&o.classList.toggle("is-hero",!(t&&t.status==="live")),!o)return;if(L=t,!(t&&t.status==="live"))o.hidden=!1,o.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let l=t.started_at||Date.now()/1e3;o.hidden=!1,o.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${w(t.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
        </div>`,K(l)}o.dataset.bound||(o.dataset.bound="1",o.addEventListener("click",N))}function K(t){P&&clearInterval(P);let o=()=>{let c=document.querySelector("[data-sess-timer]");c&&(c.textContent=k(t))};o(),P=setInterval(o,1e3)}function A(){P&&(clearInterval(P),P=null)}async function N(t){let o=t.target.closest("[data-sess-action]");if(!o)return;let c=o.dataset.sessAction;if(c==="open"){let u=document.querySelector("[data-sess-name]"),l=(u?u.value:"").trim();if(!l){u&&u.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}o.disabled=!0;try{let v=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),g=await v.json();if(!v.ok){window.showToast&&window.showToast(g.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:l}),!0),x(g.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{o.disabled=!1}}else if(c==="close"){let u=o.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",l=(E,T)=>`<option value="${E}"${E===u?" selected":""}>${T}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
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
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;o.disabled=!0;let g=document.getElementById("sessCloseBehavior")?.value;if(g&&g!==u)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:g})})}catch{}try{let E=await window.csrfFetch("/admin/session/close",{method:"POST"}),T=await E.json();if(!E.ok){window.showToast&&window.showToast(T.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),A(),x({status:"idle",viewer_end_behavior:T.archived&&T.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{o.disabled=!1}}}async function p(){try{let t=await fetch("/admin/session/current",{credentials:"same-origin"});if(!t.ok)return;let o=await t.json();x(o)}catch{}}function d(){p(),R&&clearInterval(R),R=setInterval(p,1e4)}function r(){R&&(clearInterval(R),R=null),A()}let e=null;async function s(){let t=document.querySelector("[data-cockpit-overlay]");if(!t||t.offsetParent===null)return;let o=0,c=!1;try{let E=await fetch("/overlay_status",{credentials:"same-origin"});E.ok&&(o=(await E.json()).overlay_count||0)}catch{}try{let E=await fetch("/admin/broadcast/status",{credentials:"same-origin"});E.ok&&(c=(await E.json()).mode==="live")}catch{}let u=o>0&&c;t.classList.toggle("is-on",u);let l=t.querySelector("[data-cockpit-status]");l&&(l.textContent=u?ServerI18n.t("adminCockpitOn",{n:o}):ServerI18n.t("adminCockpitOff"));let v=t.querySelector('[data-cockpit-action="toggle"]');v&&(v.textContent=ServerI18n.t(u?"adminCockpitTurnOff":"adminCockpitTurnOn"),v.classList.toggle("is-danger",u),v.classList.toggle("is-primary",!u),v.dataset.next=u?"standby":"live");let g=t.querySelector('[data-cockpit-action="clear"]');g&&(g.disabled=o===0)}function n(){let t=document.querySelector("[data-cockpit-overlay]");if(!t||t.dataset.bound)return;t.dataset.bound="1",t.addEventListener("click",async u=>{let l=u.target.closest("[data-cockpit-action]");if(!l)return;let v=l.dataset.cockpitAction;if(v==="clear"){try{let g=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});if(!g.ok)throw new Error("HTTP "+g.status);window.showToast&&window.showToast(ServerI18n.t("toastCleared"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("toastClearFailed"),!1)}return}if(v==="toggle"){try{let g=await window.csrfFetch("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:l.dataset.next||"standby"})});if(!g.ok)throw new Error("HTTP "+g.status)}catch{window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:""}),!1)}s()}});let o=t.parentElement&&t.parentElement.querySelector('[data-cockpit-action="idle-qr"]');o&&o.addEventListener("click",()=>{location.hash="#/overlay"});let c=t.parentElement&&t.parentElement.querySelector('[data-cockpit-action="poll"]');c&&c.addEventListener("click",()=>{location.hash="#/polls"})}function i(){n(),s(),e&&clearInterval(e),e=setInterval(s,5e3)}function a(){e&&(clearInterval(e),e=null)}window.AdminDashboard={refreshKpi:h,refreshSummary:z,refreshSidebarBadges:_,populatePoll:y,populateWidgets:M,refreshSessionBanner:p,startSessionPolling:d,stopSessionPolling:r,refreshCockpitOverlay:s,startCockpitPolling:i,stopCockpitPolling:a}})()});var Ze=me(()=>{(function(){"use strict";let b="sec-viewer-config-defaults",w=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(G){return String(G).replace(/[&<>"']/g,function(X){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[X]})},_={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:1,max:10,step:1,unit:""}},z=[14,20,32,44,64],y=["#F1F5F9","#94A3B8","#38BDF8","#FBBF24","#86EFAC","#F87171","#64748B","#334155"],S=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function m(G,X){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let ee=window.ServerI18n.t(G,X);if(ee&&ee!==G)return ee}return G}let D={};function q(G){if(D[G]!=null)return D[G];let X=_[G];return X?X.step:1}function M(G,X){D[G]=Number(X)||q(G)}let L={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{}},R=["Color","FontFamily","Layout"];function P(G){return R.indexOf(G)!==-1}function k(G){let X=L.options&&L.options[G],ee=X&&X[1];return Array.isArray(ee)?ee.slice():[]}function x(G){return G==="Color"?y.map(X=>X.replace(/^#/,"").toUpperCase()):G==="Layout"?S.map(X=>X.value):G==="FontFamily"?(L.fonts&&L.fonts.length?L.fonts:["NotoSansTC","Inter"]).map(ee=>typeof ee=="string"?ee:ee.name||ee.family||"").filter(Boolean):[]}function K(G,X){return G==="Color"?String(X||"").replace(/^#/,"").toUpperCase():String(X||"")}function A(){return`
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
      </div>`}let N=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:G=>`${Math.round(G)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:G=>`${G}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:G=>`${(+G).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:G=>`#${String(G||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:G=>G||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:G=>p(G),noRange:!0}];function p(G){let X=S.find(ee=>ee.value===G);return X?m(X.labelKey):G||"\u2014"}function d(G,X){let ee=X[0]!==!1,J=X[3],ie=_[G.key];if(G.key==="Opacity"||G.key==="Speed"){let ae=ie,re=J!=null?Number(J):ae.min,le=isFinite(re)?re:ae.min,ve=(le-ae.min)/Math.max(1e-6,ae.max-ae.min)*100;return`
        <div class="admin-dsp2-track" data-track="${G.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${G.key}" data-num-index="3"
            min="${ae.min}" max="${ae.max}" step="${q(G.key)}" value="${f(String(le))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${ve.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${ve.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${G.key}"
              min="${ae.min}" max="${ae.max}" step="${q(G.key)}" value="${f(String(le))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${ae.min}${ae.unit}</span><span>${ae.max}${ae.unit}</span>
            </div>
          </div>
        </div>`}if(G.key==="FontSize"){let ae=Number(J);return`
        <div class="admin-dsp2-chiprow">
          ${z.map(re=>`<button type="button" class="admin-dsp2-fchip ${ae===re?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${re}">${re}</button>`).join("")}
        </div>`}if(G.key==="Color"){let ae="#"+String(J||"FFFFFF").replace(/^#/,"").toUpperCase(),re=!!L.allowlistEdit.Color,le=re?L.allowlistEdit.Color:new Set(k("Color").map(he=>K("Color",he))),ve=!re&&le.size===0;return`
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
        ${r(G)}
      `}if(G.key==="FontFamily"){let ae=(L.fonts&&L.fonts.length?L.fonts:["NotoSansTC","Inter"]).map(ce=>{let ye=typeof ce=="string"?ce:ce.name||ce.family||"",be=typeof ce=="string"?ce:ce.label||ce.name||ce.family||"";return{value:ye,label:be}}).filter(ce=>ce.value),re=String(J||""),le=!!L.allowlistEdit.FontFamily,ve=le?L.allowlistEdit.FontFamily:new Set(k("FontFamily").map(ce=>K("FontFamily",ce))),he=!le&&ve.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ae.map(ce=>{let ye=ce.value===re,be=le?ve.has(ce.value):he||ve.has(ce.value),_e=["admin-dsp2-tchip",ye?"is-active":"",le?"is-editing":"",be?"":"is-blocked"].filter(Boolean).join(" "),Ie=le?`data-allow-key="FontFamily" data-allow-value="${f(ce.value)}"`:`data-chip-key="FontFamily" data-chip-value="${f(ce.value)}"`;return`<button type="button" class="${_e}" ${Ie}
              aria-pressed="${be?"true":"false"}">
              ${le?`<span class="admin-dsp2-allow-mark">${be?"\u2713 ":""}</span>`:""}${f(ce.label)}
            </button>`}).join("")}
        </div>
        ${r(G)}
      `}if(G.key==="Layout"){let ae=String(J||"scroll"),re=!!L.allowlistEdit.Layout,le=re?L.allowlistEdit.Layout:new Set(k("Layout").map(he=>K("Layout",he))),ve=!re&&le.size===0;return`
        <div class="admin-dsp2-tiles">
          ${S.map(he=>{let ce=he.value===ae,ye=re?le.has(he.value):ve||le.has(he.value),be=["admin-dsp2-tile",ce?"is-active":"",re?"is-editing":"",ye?"":"is-blocked"].filter(Boolean).join(" "),_e=re?`data-allow-key="Layout" data-allow-value="${he.value}"`:`data-chip-key="Layout" data-chip-value="${he.value}"`;return`<button type="button" class="${be}" ${_e}
              aria-pressed="${ye?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${he.icon}</span>
              <span class="admin-dsp2-tile-label">${m(he.labelKey)}</span>
              ${re?`<span class="admin-dsp2-allow-mark">${ye?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${r(G)}
      `}return""}function r(G){if(!P(G.key))return"";let X=!!L.allowlistEdit[G.key],ee=k(G.key),J=x(G.key).length||0,ie=ee.length>0?m("displayAllowSummaryPartial",{n:ee.length,total:J,label:e(G.key)}):m("displayAllowSummaryAll",{total:J});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${G.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${G.key}">${f(ie)}</span>
        ${X?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${G.key}">${f(m("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${G.key}">${f(m("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${G.key}">${f(m("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${G.key}" title="${f(m("displayEditAllowlistTitle"))}">[${f(m("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function e(G){return m(G==="Color"?"displayLabelColor":G==="FontFamily"?"displayLabelFontFamily":G==="Layout"?"displayLabelLayout":"displayLabelOption")}function s(G,X){if(G.noRange||!(X[0]!==!1))return"";let J=_[G.key],ie=X[1]!=null?X[1]:J.min,ae=X[2]!=null?X[2]:J.max,re=q(G.key);return`
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
      </div>`}function n(G,X){let ee=X[0]!==!1,J=X[3],ie=G.fmt?G.fmt(J):J!=null?String(J):"\u2014",ae=G.key==="Layout";return`
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
          <div class="admin-dsp2-picker" data-picker-host>${d(G,X)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${s(G,X)}</div>
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
      </div>`}function i(){let G=document.getElementById("dsp2-rows");if(G){if(!L.options){G.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):f(m("loading"))}`;return}G.innerHTML=N.map(X=>n(X,L.options[X.key]||[!1,"","",""])).join(""),t(),o()}}function a(G,X){let ee=L.options&&L.options[G];return ee&&ee[3]!=null?ee[3]:X}function t(){let G=document.querySelector("[data-preview-stage]"),X=document.querySelector("[data-preview-pill='1']"),ee=document.querySelector("[data-preview-pill='2']"),J=document.querySelector("[data-preview-foot-l]"),ie=document.querySelector("[data-preview-foot-r]");if(!G||!X||!ee||!L.options)return;let ae=Number(a("FontSize",32)),re=Number(a("Opacity",92)),le=Number(a("Speed",1)),ve="#"+String(a("Color","7DD3FC")).replace(/^#/,""),he=String(a("FontFamily","NotoSansTC")),ce=String(a("Layout","scroll")),ye=Math.min(ae,36),be=Math.max(0,Math.min(100,re))/100;X.style.fontSize=ye+"px",X.style.color=ve,X.style.opacity=be.toFixed(2),X.style.fontFamily=he+", system-ui, sans-serif",X.style.textShadow=`0 0 14px ${ve}66`,ee.style.fontSize=(ye*.78).toFixed(0)+"px",ee.style.opacity=(be*.9).toFixed(2),ee.style.fontFamily=he+", system-ui, sans-serif",G.dataset.layout=ce,J&&(J.textContent=`${p(ce)} \xB7 ${ae}px \xB7 ${(+le).toFixed(1)}\xD7`),ie&&(ie.textContent=m("displayOpacitySuffix",{n:Math.round(re)}))}function o(){let G=document.querySelector("[data-summary-list]"),X=document.querySelector("[data-summary-count]");if(!G||!L.options)return;let ee=N.filter(J=>(L.options[J.key]||[])[0]).length;X&&(X.textContent=`AUDIENCE \xB7 ${ee}/6 OPEN`),G.innerHTML=N.map(J=>{let ie=!!(L.options[J.key]||[])[0];return`<div class="admin-dsp2-srow ${ie?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${f(m(J.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${f(m(ie?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function c(G,X){try{let ee=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:G,enabled:!!X})});if(!ee.ok)throw new Error("toggle "+ee.status);Array.isArray(L.options[G])||(L.options[G]=[!1,"","",""]),L.options[G][0]=!!X,i(),window.showToast&&window.showToast(`${G} ${m("settingsUpdated")}`,!0)}catch(ee){console.warn("[admin-display] toggle failed:",ee),window.showToast&&window.showToast(m("updateFailed"),!1),await g(),i()}}async function u(G,X,ee){try{let J=ee;if(G==="Color"){let ae=String(J).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ae)){window.showToast&&window.showToast(m("colorFormatError"),!1);return}J=ae.toUpperCase()}else if(G==="Opacity"||G==="FontSize"||G==="Speed"){J=parseInt(J,10);let ae=_[G];if(Number.isNaN(J)||ae&&(J<ae.min||J>ae.max)){window.showToast&&window.showToast(`${G} ${ae.min}\u2013${ae.max}`,!1);return}}let ie=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:G,value:J,index:X})});if(!ie.ok)throw new Error("update "+ie.status);Array.isArray(L.options[G])||(L.options[G]=[!1,"","",""]),L.options[G][X]=J,v(G),t(),o()}catch(J){console.warn("[admin-display] update failed:",J),window.showToast&&window.showToast(m("updateFailed"),!1)}}async function l(G,X){try{let ee=await window.csrfFetch(`/admin/options/${encodeURIComponent(G)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:X})});if(!ee.ok)throw new Error("allowlist "+ee.status);let J=await ee.json().catch(()=>({}));J&&Array.isArray(J.option)?L.options[G]=J.option:Array.isArray(L.options[G])&&(L.options[G][1]=X.slice()),v(G),t(),o();let ie=x(G).length||0,ae=X.length>0?m("displayAllowlistToastPartial",{key:G,n:X.length,total:ie}):m("displayAllowlistToastAll",{key:G});window.showToast&&window.showToast(ae,!0)}catch(ee){console.warn("[admin-display] allowlist failed:",ee),window.showToast&&window.showToast(m("updateFailed"),!1)}}function v(G){let X=document.querySelector(`[data-row-key="${G}"]`);if(!X||!L.options)return;let ee=N.find(re=>re.key===G);if(!ee)return;let J=L.options[G]||[!1,"","",""],ie=J[3],ae=X.querySelector("[data-value-badge]");if(ae&&(ae.textContent=ee.fmt?ee.fmt(ie):ie!=null?String(ie):"\u2014"),P(G)){let re=X.querySelector("[data-picker-host]");re&&(re.innerHTML=d(ee,J));return}if((G==="FontSize"||G==="Color"||G==="FontFamily"||G==="Layout")&&X.querySelectorAll(`[data-chip-key="${G}"]`).forEach(re=>{let le=re.getAttribute("data-chip-value"),ve=G==="Color"?String(ie||"").replace(/^#/,"").toUpperCase():String(ie??"");re.classList.toggle("is-active",String(le)===ve)}),G==="Opacity"||G==="Speed"){let re=_[G],le=Number(ie??re.min),ve=(le-re.min)/Math.max(1e-6,re.max-re.min)*100,he=X.querySelector(".admin-dsp2-slider-fill"),ce=X.querySelector(".admin-dsp2-slider-thumb");he&&(he.style.width=ve.toFixed(2)+"%"),ce&&(ce.style.left=`calc(${ve.toFixed(2)}% - 8px)`);let ye=X.querySelector(".admin-dsp2-range");ye&&document.activeElement!==ye&&(ye.value=String(le));let be=X.querySelector(".admin-dsp2-num");be&&document.activeElement!==be&&(be.value=String(le))}}async function g(){try{let G=await fetch("/get_settings",{credentials:"same-origin"});if(!G.ok)throw new Error(G.status);L.options=await G.json()}catch(G){console.warn("[admin-display] /get_settings failed:",G),L.options=L.options||{}}}async function E(){try{let G=await fetch("/fonts",{credentials:"same-origin"});if(!G.ok)throw new Error(G.status);let X=await G.json();L.fonts=Array.isArray(X)?X:X.fonts||[]}catch{L.fonts=["NotoSansTC","Inter"]}}async function T(){try{let G=await fetch("/admin/metrics",{credentials:"same-origin"});if(!G.ok)return;let X=await G.json();L.viewerCount=X.ws_clients??0}catch{}}function I(){C(),T(),L.metricsTimer=setInterval(T,5e3)}function C(){L.metricsTimer&&(clearInterval(L.metricsTimer),L.metricsTimer=null)}function H(){if(!L.options){window.showToast&&window.showToast(m("loading"),!1);return}let G={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:L.options},X=new Blob([JSON.stringify(G,null,2)],{type:"application/json"}),ee=URL.createObjectURL(X),J=document.createElement("a");J.href=ee,J.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(J),J.click(),document.body.removeChild(J),URL.revokeObjectURL(ee),window.showToast&&window.showToast(m("displayExportDone"),!0)}async function B(){if(!L.options)return;let G=document.getElementById("dsp2-deploy");G&&(G.disabled=!0,G.classList.add("is-pending"));try{for(let X of N){let ee=L.options[X.key];Array.isArray(ee)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:X.key,enabled:!!ee[0]})})}await T(),window.showToast&&window.showToast(m("displayBroadcastDone")+` ${L.viewerCount} ${m("displayViewersReceivedSuffix")}`,!0)}catch(X){console.warn("[admin-display] deploy failed:",X),window.showToast&&window.showToast(m("updateFailed"),!1)}finally{G&&(G.disabled=!1,G.classList.remove("is-pending"))}}async function $(){let G={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,1,10,8],Color:[!0,0,0,"FFFFFF"],FontFamily:[!1,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:m("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"warn",body:m("displayRevertConfirm"),confirmLabel:m("displayDeployRevert")}))try{for(let[ee,J]of Object.entries(G)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:ee,enabled:!!J[0]})});for(let ie=1;ie<=3;ie++)ie<3&&(ee==="Color"||ee==="FontFamily"||ee==="Layout")||J[ie]===""||J[ie]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:ee,value:J[ie],index:ie})})}await g(),i(),window.showToast&&window.showToast(m("displayRevertDone"),!0)}catch(ee){console.warn("[admin-display] revert failed:",ee),window.showToast&&window.showToast(m("updateFailed"),!1)}}function j(){let G=document.getElementById(b);G&&(G.addEventListener("click",X=>{let ee=X.target.closest("[data-toggle-key]");if(ee){let re=ee.getAttribute("data-toggle-key"),le=!!(L.options[re]||[])[0];c(re,!le);return}let J=X.target.closest("[data-allow-action]");if(J){let re=J.getAttribute("data-allow-action"),le=J.getAttribute("data-allow-key");if(!le)return;if(re==="edit"){let ve=k(le).map(he=>K(le,he));ve.length?L.allowlistEdit[le]=new Set(ve):L.allowlistEdit[le]=new Set(x(le)),v(le);return}if(re==="cancel"){delete L.allowlistEdit[le],v(le);return}if(re==="clear"){L.allowlistEdit[le]=new Set,l(le,[]),delete L.allowlistEdit[le];return}if(re==="apply"){let ve=L.allowlistEdit[le]||new Set,he=x(le),ce=Array.from(ve),ye=he.length>0&&ce.length===he.length&&he.every(be=>ve.has(be));l(le,ye?[]:ce),delete L.allowlistEdit[le];return}}let ie=X.target.closest("[data-allow-key][data-allow-value]");if(ie){let re=ie.getAttribute("data-allow-key"),le=ie.getAttribute("data-allow-value"),ve=L.allowlistEdit[re];if(ve){let he=K(re,le);ve.has(he)?ve.delete(he):ve.add(he),v(re)}return}let ae=X.target.closest("[data-chip-key]");if(ae){let re=ae.getAttribute("data-chip-key"),le=ae.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${re}"]`).forEach(ve=>ve.classList.remove("is-active")),ae.classList.add("is-active"),u(re,3,le);return}if(X.target&&X.target.id==="dsp2-revert"){$();return}if(X.target&&X.target.id==="dsp2-export"){H();return}}),G.addEventListener("change",X=>{let ee=X.target;if(!ee)return;let J=ee.getAttribute("data-num-key");if(!J)return;let ie=ee.getAttribute("data-num-index");if(ie==="step"){M(J,ee.value),v(J);return}let ae=parseInt(ie,10);if(Number.isNaN(ae))return;let re=ee.value;J==="Color"&&(re=String(re).replace(/^#/,"").toUpperCase()),u(J,ae,re)}),G.addEventListener("input",X=>{let ee=X.target;if(ee){if(ee.classList&&ee.classList.contains("admin-dsp2-range")){let J=ee.getAttribute("data-range-key"),ie=_[J],ae=Number(ee.value),re=(ae-ie.min)/Math.max(1e-6,ie.max-ie.min)*100,le=ee.closest("[data-row-key]");if(le){let ve=le.querySelector(".admin-dsp2-slider-fill"),he=le.querySelector(".admin-dsp2-slider-thumb");ve&&(ve.style.width=re.toFixed(2)+"%"),he&&(he.style.left=`calc(${re.toFixed(2)}% - 8px)`);let ce=le.querySelector(".admin-dsp2-num");ce&&(ce.value=String(ae))}Array.isArray(L.options[J])&&(L.options[J][3]=ae),t();return}if(ee.classList&&ee.classList.contains("admin-dsp2-num")){let J=ee.getAttribute("data-num-key"),ie=parseInt(ee.getAttribute("data-num-index"),10);if(Number.isNaN(ie)||!Array.isArray(L.options[J]))return;let ae=ee.value;ee.type==="number"&&(ae=Number(ae)),L.options[J][ie]=ae,t()}}}),G.addEventListener("change",X=>{let ee=X.target;if(ee&&ee.classList&&ee.classList.contains("admin-dsp2-range")){let J=ee.getAttribute("data-range-key");u(J,3,ee.value)}}),G.addEventListener("click",X=>{let ee=X.target.closest("[data-dl-step]");if(ee){let ie=ee.closest("[data-dl-stepper]");if(!ie)return;let ae=ie.getAttribute("data-dl-stepper"),le=Number(U[ae]??0)+Number(ee.getAttribute("data-dl-step"));O(ae,le);return}let J=X.target.closest("[data-dl-opt]");if(J){let ie=J.closest("[data-dl-seg]");if(!ie)return;let ae=ie.getAttribute("data-dl-seg"),re=J.getAttribute("data-dl-opt");O(ae,["safe_area","poll_vote_opacity"].indexOf(ae)!==-1?Number(re):re)}}),G.addEventListener("change",X=>{let ee=X.target.closest("[data-dl-toggle]");if(ee){O(ee.getAttribute("data-dl-toggle"),ee.checked);return}let J=X.target.closest("[data-dl-range]");J&&O(J.getAttribute("data-dl-range"),Number(J.value))}),G.addEventListener("input",X=>{let ee=X.target.closest("[data-dl-range]");if(!ee)return;let J=ee.getAttribute("data-dl-range"),ie=G.querySelector(`[data-dl-value="${J}"]`);ie&&(ie.textContent=ee.value+"%")}))}let U={};function Y(){let G=document.getElementById(b);G&&Object.entries(U).forEach(([X,ee])=>{let J=G.querySelector(`[data-dl-value="${X}"]`);J&&(J.textContent=X==="max_tracks"?Number(ee)===0?m("dlMaxTracksAuto"):String(ee):String(ee)+"%");let ie=G.querySelector(`[data-dl-range="${X}"]`);ie&&document.activeElement!==ie&&(ie.value=String(ee));let ae=G.querySelector(`[data-dl-toggle="${X}"]`);ae&&(ae.checked=!!ee);let re=G.querySelector(`[data-dl-seg="${X}"]`);re&&re.querySelectorAll("[data-dl-opt]").forEach(le=>{let ve=le.getAttribute("data-dl-opt")===String(ee);le.classList.toggle("is-active",ve),le.setAttribute("aria-pressed",ve?"true":"false")})})}async function F(){try{let G=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!G.ok)return;U=await G.json(),Y()}catch(G){console.warn("[admin-display] display-layer fetch failed:",G)}}async function O(G,X){let ee=U[G];U[G]=X,Y();try{let J=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[G]:X})});if(!J.ok)throw new Error("display-layer "+J.status);U=await J.json(),Y()}catch(J){U[G]=ee,Y(),console.warn("[admin-display] display-layer update failed:",J),window.showToast&&window.showToast(m("updateFailed"),!1)}}function V(){w.forEach(G=>{let X=document.getElementById(G);X&&X.setAttribute("data-admin-ui-replaced","1")})}let ne=null;function W(G,X){return G==="overlay"||X==="overlay"||G==="display"||X==="display"}function Z(G,X){return G==="viewer-config"||G==="viewer"||X==="viewer-config"||X==="viewer"}function te(G,X){if(!Z(G,X))return;let ee=window.AdminTabs?.getConfig?.("viewer");if(!ee)return;let J=ae=>ee.tabs.some(re=>re.slug===ae),ie=J(X)?X:null;if(!ie&&window.AdminTabs.resolveActiveTab){let ae=window.AdminTabs.resolveActiveTab("viewer",null);J(ae)&&(ie=ae)}ie&&(document.body.dataset.viewerConfigTab=ie)}let oe=!1,Q=!1;async function se(){let G=document.getElementById("sec-viewer-config-limits");if(!G||oe)return;oe=!0;let X=(ee,J)=>{let ie=G.querySelector(ee);ie&&(ie.textContent=J==null?"\u2014":String(J))};try{let ee=await fetch("/admin/metrics",{credentials:"same-origin"});if(!ee.ok)return;let J=await ee.json(),ie=J.rate_limits&&J.rate_limits.fire||{},ae=J.rate_limits&&J.rate_limits.totals||{},re=J.rate_limit_config&&J.rate_limit_config.fire||{},le=Math.max(1,(J.server_time||0)-(J.server_started_at||0));X("[data-vc-rate-fp]",re.limit||"\u2014"),X("[data-vc-rate-global]","\u2014"),X("[data-vc-rate-burst]","\u2014"),X("[data-vc-rate-cooldown]",re.window||"\u2014"),X("[data-vc-msg-len]",100),X("[data-vc-nick-len]","\u2014"),X("[data-vc-dedup]","\u2014");let ve=(ie.hits||0)/le;X("[data-vc-avg-rate]",ve.toFixed(2)+"/s"),X("[data-vc-throttled]",ie.violations||0),X("[data-vc-blocked]",ae.locked_sources||0),X("[data-vc-deduped]",0)}catch{}finally{oe=!1}}function de(){let G=document.querySelector(".admin-dash-grid"),X=document.getElementById(b);if(!G||!X)return;let ee=G.dataset.activeRoute||"live",J=G.dataset.activeLeaf||ee;te(ee,J);let ie=document.body.dataset.viewerConfigTab||"defaults",ae=Z(ee,J),re=W(ee,J),le=ae||re;X.dataset.dspMode=re?"values":"audience",X.style.display=le?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach(he=>{let ce=document.getElementById(he);ce&&(ce.style.display=ae?"":"none")});let ve=document.getElementById("sec-viewer-config-info");ve&&(ve.style.display=ae?"":"none"),ae?Q||(Q=!0,se()):Q=!1,W(ee,J)?L.metricsTimer||I():C(),ne=ee}function ue(){if(document.getElementById("sec-viewer-config-info"))return;let G=document.getElementById("settings-grid");if(!G)return;let X=document.createElement("div");X.id="sec-viewer-config-info",X.className="lg:col-span-2",X.innerHTML='<div class="admin-vc-info-banner">'+m("displayViewerConfigInfoBanner")+"</div>";let ee=[{k:m("displayFieldNicknameLabel"),desc:m("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:m("displayFieldMessageLabel"),desc:m("displayFieldMessageDesc"),on:!0,pinned:!0},{k:m("displayFieldColorLabel"),desc:m("displayFieldColorDesc"),on:!0},{k:m("displayFieldFontLabel"),desc:m("displayFieldFontDesc"),on:!0},{k:m("displayFieldSizeLabel"),desc:m("displayFieldSizeDesc"),on:!0},{k:m("displayFieldOpacityLabel"),desc:m("displayFieldOpacityDesc"),on:!0},{k:m("displayFieldSpeedLabel"),desc:m("displayFieldSpeedDesc"),on:!0},{k:m("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:m("displayFieldEffectLabel"),desc:m("displayFieldEffectDesc"),on:!1}],J=document.createElement("div");J.id="sec-viewer-config-fields",J.className="admin-vc-fields-grid lg:col-span-2";let ie=document.createElement("div");ie.className="admin-vc-col-panel";let ae=document.createElement("div");ae.className="admin-vc-fields-head";let re=ee.filter(function(we){return we.on}).length,le=ee.length-re;ae.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+f(m("displayFieldsCountLabel",{count:ee.length}))+'</span><span class="admin-vc-fields-count">'+f(m("displayFieldsShownHidden",{shown:re,hidden:le}))+"</span>",ie.appendChild(ae);let ve=document.createElement("div");ve.className="admin-vc-fields-list",ee.forEach(function(we){let ke=document.createElement("div");ke.className="admin-vc-field-row"+(we.blocked?" is-blocked":"");let Ee=document.createElement("span");Ee.className="admin-vc-field-dot"+(we.on?" is-on":""),ke.appendChild(Ee);let $e=document.createElement("div");var Se="";we.pinned&&(Se='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+f(m("displayFieldBadgeRequired"))+"</span>"),we.blocked&&(Se='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+f(m("displayFieldBadgeBlocked"))+"</span>"),$e.innerHTML='<div class="admin-vc-field-label">'+f(we.k)+Se+'</div><div class="admin-vc-field-desc">'+f(we.desc)+"</div>",ke.appendChild($e);let Te=document.createElement("button");if(Te.type="button",Te.className="admin-vc-toggle "+(we.on?"is-on":"is-off"),Te.textContent=we.on?m("displayToggleShow"):m("displayToggleHide"),we.blocked||we.pinned)Te.disabled=!0,Te.className+=" disabled";else{var xe=we.on;Te.addEventListener("click",function(){xe=!xe,Te.className="admin-vc-toggle "+(xe?"is-on":"is-off"),Te.textContent=m(xe?"displayToggleShow":"displayToggleHide"),Ee.className="admin-vc-field-dot"+(xe?" is-on":"")})}ke.appendChild(Te),ve.appendChild(ke)}),ie.appendChild(ve);let he=document.createElement("div");he.className="admin-vc-col-panel";var ye=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(we,ke){return'<span class="admin-vc-swatch-dot" style="background:'+we+";border:"+(ke===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");he.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+f(m("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+f(m("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+f(m("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+ye+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+f(m("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+f(m("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+f(m("displayFieldsTip"))+"</div>",J.appendChild(ie),J.appendChild(he);function be(we,ke,Ee,$e,Se,Te){let xe=Te?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+we+'</div></div><div class="admin-vc-limit-row__value" style="color:'+xe+'">'+Ee+'<span class="admin-vc-limit-row__unit">'+($e||"")+"</span></div>"+(Se?'<div class="admin-vc-limit-row__hint">'+Se+"</div>":"")+"</div>"}let _e=document.createElement("div");_e.id="sec-viewer-config-limits",_e.className="admin-vc-limits-grid lg:col-span-2",_e.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+f(m("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+f(m("displayEditLink"))+"</a></div>"+be(f(m("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",f(m("displayRateFpUnit")),f(m("displayRateFpHint")))+be(f(m("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",f(m("displayRateGlobalHint")))+be(f(m("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",f(m("displayRateBurstUnit")),f(m("displayRateBurstHint")))+be(f(m("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",f(m("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+f(m("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+f(m("displayContentLimitsTitle"))+"</span></div>"+be(f(m("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",f(m("displayMsgLenUnit")),f(m("displayMsgLenHint")))+be(f(m("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",f(m("displayNickLenUnit")),f(m("displayNickLenHint")))+be(f(m("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",f(m("displayDedupHint")))+be(f(m("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+f(m("displayProfanityDefaultValue"))+"</span>","",f(m("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+f(m("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(m("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+f(m("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(m("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+f(m("displayAuditLogLink"))+"</a></div>";let Ie=document.getElementById("sec-viewer-theme");Ie&&Ie.parentNode===G?(G.insertBefore(X,Ie),G.insertBefore(_e,Ie),G.insertBefore(J,Ie)):(G.appendChild(X),G.appendChild(_e),G.appendChild(J)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),de()}async function fe(){let G=document.getElementById("settings-grid");if(!G||document.getElementById(b)){V();return}G.insertAdjacentHTML("beforeend",A()),j(),V(),de(),L.options||await Promise.all([g(),E()]),F(),i()}function ge(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)?fe():V(),de()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",de),document.addEventListener("admin-route-applied",de),document.addEventListener("admin-panel-rendered",()=>{fe(),V(),ue(),de()}),fe(),ue()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ge):ge()})()});var et=me(()=>{document.addEventListener("DOMContentLoaded",()=>{function b(){let F=document.querySelector('meta[name="csrf-token"]');return F&&F.content||""}let w=window.DANMU_CONFIG||{},h=w.session||{logged_in:!1},f=w.settingRanges||{};function _(F,O={}){let V={credentials:"same-origin",...O},ne=new Headers(O.headers||{});return ne.set("X-CSRF-Token",b()),V.headers=ne,fetch(F,V)}window.csrfFetch=_;let z=5e3,y={at:0,data:null,promise:null};function S(){return y.data&&Date.now()-y.at<z}function m(){return S()?Promise.resolve(y.data):(y.promise||(y.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(F=>F.ok?F.json():null).then(F=>(F&&(y.data=F,y.at=Date.now()),y.promise=null,F)).catch(()=>(y.promise=null,null))),y.promise)}function D(F){if(!S())return null;let O=y.data[F];return O&&typeof O=="object"&&"_error"in O?null:O}window.__danmuAdminBootstrap={prime:m,get:D},m();let q={},M=null,L=null,R=Object.create(null);Object.assign(R,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},"api-tokens":{nav:"integrations",tab:"api-tokens"},scheduler:{nav:"integrations",tab:"scheduler"}});let P=Object.create(null);Object.assign(P,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"integrations",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"integrations",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"integrations",tab:"plugins"},mobile:{nav:"system",tab:"system"}});let k={_key:F=>"admin:tab:"+F,get(F){try{return sessionStorage.getItem(this._key(F))||null}catch{return null}},set(F,O){try{O?sessionStorage.setItem(this._key(F),O):sessionStorage.removeItem(this._key(F))}catch{}}};function x(F){let O=(F||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!O)return null;let V=O[1],ne=O[2]||null,W=null;if(!ne){let Q=R[V];typeof Q=="string"?V=Q:Q&&typeof Q=="object"&&(V=Q.nav||V,W=Q.tab||null)}let Z=P[V],te=V,oe=null;if(typeof Z=="string"?te=Z:Z&&typeof Z=="object"&&(te=Z.nav||V,oe=Z.tab||null),O[1]!==te&&(x._warned||(x._warned=new Set),!x._warned.has(O[1]))){x._warned.add(O[1]);try{console.info("[admin] legacy route #/"+O[1]+" \u2192 #/"+te+(ne||oe||W?"/"+(ne||oe||W):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:te,tab:ne||oe||W,raw:V}}function K(F,O){return O?"#/"+F+"/"+O:"#/"+F}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:P,tabMemory:k,parseHash:x,buildHash:K});var A=window.AdminUtils.loadDetailsState,N=window.AdminUtils.saveDetailsState,p=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:m,bootstrapSection:D};async function d(){try{q=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),h.logged_in&&I()}catch(F){console.error("Get settings failed:",F),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function r(F){return/^#[0-9A-Fa-f]{6}$/.test(F)}function e(F){return r(F)?F:/^[0-9A-Fa-f]{6}$/.test(F)?"#"+F:(F.startsWith("#")||(F="#"+F),r(F)?F:"#38bdf8")}function s(F,O){if(f[F]){let V=parseInt(O);if(isNaN(V)||V<f[F].min||V>f[F].max)return showToast(ServerI18n.t("settingRangeError",{key:F,min:f[F].min,max:f[F].max}),!1),!1}return!0}function n(F,O,V){if(!V||!Array.isArray(q[F]))return;let ne=q[F][O];F==="Color"&&typeof ne=="string"&&(ne=e(`#${ne}`)),ne!=null&&(V.value=String(ne))}let i={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-plugins","sec-widgets"]}};function a(){Object.values(i).forEach(F=>{let O=document.getElementById(F.containerId);O&&F.orderedIds.forEach(V=>{let ne=document.getElementById(V);ne&&ne.parentElement!==O&&O.appendChild(ne)})})}function t(){M&&(M.disconnect(),M=null),a(),M=new MutationObserver(()=>{a()}),M.observe(u,{childList:!0,subtree:!0})}async function o(F,O,V,ne=null){try{if(F==="Color"){if(!r(O)){showToast(ServerI18n.t("colorFormatError"),!1),n(F,V,ne);return}O=O.replace("#","")}else if((F==="Speed"||F==="Opacity"||F==="FontSize")&&!s(F,O)){n(F,V,ne);return}(await _("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:F,value:O,index:V})})).ok?(Array.isArray(q[F])||(q[F]=[!1,"","",""]),q[F][V]=O,showToast(`${F} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await d())}catch(W){console.error("Error:",W),showToast(`Update Error: ${W.message}`,!1),await d()}}async function c(F,O){try{let V=await _("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:F,enabled:O})}),ne=await V.json().catch(()=>({}));if(V.ok)Array.isArray(q[F])||(q[F]=[!1,"","",""]),q[F][0]=O,showToast(`${F} ${ServerI18n.t("settingsUpdated")}`),I();else{let W=document.getElementById(`toggle-${F}`);W&&(W.checked=!O),showToast(ne.error||ServerI18n.t("updateFailed"),!1)}}catch(V){console.error("Error:",V);let ne=document.getElementById(`toggle-${F}`);ne&&(ne.checked=!O),showToast(`Update Error: ${V.message}`,!1)}}let u=document.getElementById("app-container"),l=document.getElementById("toast-container"),v=(F,O=500)=>"requestIdleCallback"in window?window.requestIdleCallback(F,{timeout:O}):setTimeout(F,O);async function g(){let F=parseInt(document.getElementById("historyHours")?.value||"24");try{let[O,V]=await Promise.all([fetch(`/admin/stats/hourly?hours=${F}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${F}&limit=10`,{credentials:"same-origin"})]);if(!O.ok||!V.ok)return;let ne=await O.json(),W=await V.json(),Z=document.getElementById("statsDashboard");if(!Z)return;let te=ne.distribution||[],oe=W.topTexts||[],Q=Math.max(1,...te.map(ge=>ge.count)),se=te.reduce((ge,G)=>ge+(G.count||0),0),de=te.filter(ge=>ge.count>0).length,ue=te.map(ge=>`<div class="chart-bar" style="height: ${Math.round(ge.count/Q*100)}%" title="${p(ge.hour)}: ${ge.count}"><span class="chart-label">${p(ge.hour.slice(-5,-3))}</span></div>`).join(""),fe=oe.map((ge,G)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${G+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${p(ge.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${ge.count}</td></tr>`).join("");Z.innerHTML=`
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
              <span class="history-dashboard-caption">${F}h window</span>
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
        </div>`}catch(O){console.error("Load stats error:",O)}}window._loadStats=g,window.csrfFetch=_,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=u,window.__adminCtx.getSettings=()=>q;function E(){u&&(u.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function T(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():E()}function I(){let F=A(),O=(de,ue=!1)=>F[de]!==void 0?F[de]:ue,V=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(de=>Array.isArray(q[de])&&q[de][0]===!0).length,ne=q.Layout&&q.Layout[3]?p(String(q.Layout[3]).replace(/_/g," ")):"scroll",W=q.FontFamily&&q.FontFamily[3]?p(String(q.FontFamily[3])):"NotoSansTC",Z=de=>de.map(ue=>`<span style="height:${ue*10}%;opacity:${.3+ue*.08}"></span>`).join(""),te=ne&&ne!=="off",oe=window.location.port||(window.location.protocol==="https:"?"443":"80");u.innerHTML=`
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
                `;let Q=document.getElementById("settings-grid"),se=q.Effects?q.Effects[0]!==!1:!0;Q.insertAdjacentHTML("beforeend",`
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
    `),B(),t(),v(Y),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),H(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let ue=document.querySelector("[data-telem-bars]");if(!ue)return;let fe=document.querySelector("[data-telem-status]"),ge={cpu:100,mem:100,ws:100,rate:50};function G(J,ie,ae,re,le){let ve=ue.querySelector(`[data-telem-fill="${J}"]`),he=ue.querySelector(`[data-telem-value="${J}"]`);ve&&(ve.style.width=Math.max(0,Math.min(100,ie))+"%",ve.classList.toggle("is-warn",!re)),he&&(he.textContent=ae);let ce=ue.querySelector(`[data-telem-row="${J}"]`);ce&&le&&ce.setAttribute("title",le)}function X(J,ie){if(!ie||ie<=0)return Math.round(J)+" MB used";if(ie>=1024){let ae=(J/1024).toFixed(1),re=(ie/1024).toFixed(1);return`${ae} / ${re} GB used`}return`${Math.round(J)} / ${Math.round(ie)} MB used`}async function ee(){try{let J=await fetch("/admin/metrics",{credentials:"same-origin"});if(!J.ok)return;let ie=await J.json(),ae=ie.cpu_series||[],re=ie.mem_series||[],le=ie.mem_mb_series||[],ve=ie.ws_series||[],he=ie.rate_series||[],ce=Ee=>Ee.length?Ee[Ee.length-1]:0,ye=Number(ce(ae)||0),be=Number(ce(re)||0),_e=Number(ce(le)||0),Ie=Number(ie.mem_total_mb||0),we=Number(ce(ve)||ie.ws_clients||0),ke=Number(ce(he)||0)/60;if(G("cpu",ye,`${ye.toFixed(0)}%`,ye<90),G("mem",be,`${be.toFixed(0)}%`,be<90,X(_e,Ie)),G("ws",we/ge.ws*100,String(we),we<100),G("rate",ke/ge.rate*100,`${ke.toFixed(1)}/s`,ke<40),fe){let Ee=ye>=90||be>=90||ke>=40;fe.textContent=Ee?"\u25CF BUSY":"\u25CF HEALTHY",fe.classList.toggle("is-warn",Ee)}}catch{}}setTimeout(ee,4e3),setInterval(ee,5e3)})()}let C={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},integrations:{title:"\u64F4\u5145",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"]},firetoken:{title:"Fire Token",kicker:"ADMIN LANE \xB7 FIRE TOKEN \xB7 \u7528\u91CF / IP / AUDIT",sections:["sec-firetoken-overview"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},security:{title:"\u5B89\u5168",kicker:"SECURITY \xB7 \u5BC6\u78BC \xB7 WS TOKEN \xB7 \u5BE9\u8A08",sections:["admin-security-v2-page"]},backup:{title:"\u5099\u4EFD\u8207\u9084\u539F",kicker:"BACKUP \xB7 EXPORT \xB7 DANGER",sections:["admin-backup-v2-page","sec-timeline-export"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=C;function H(){let F=document.querySelector(".admin-dash-grid");if(!F)return;let O="dashboard",V=null;function ne(J){return i.moderation.orderedIds.indexOf(J)!==-1?"moderation-grid":i.assets.orderedIds.indexOf(J)!==-1?"assets-grid":J==="sec-scheduler"||J==="sec-webhooks"?"sec-advanced":"settings-grid"}function W(){let J=F.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),ie=F.querySelector("[data-route-note]"),ae=F.querySelector("[data-route-action]");if(ae&&Array.prototype.slice.call(ae.children).forEach(ce=>{ce._adminHomeHead?ce._adminHomeHead.appendChild(ce):ce.remove()}),!J)return;let re=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(O)),le=Array.prototype.slice.call(F.querySelectorAll(".admin-ui-page-head"));le.forEach(ce=>ce.classList.remove("is-merged-into-topbar"));let ve=(C[O]?.title||"").trim().replace(/\s+/g," "),he=null;le.forEach(ce=>{let ye=ce.querySelector(".admin-ui-page-title"),be=ye&&ye.textContent.trim().replace(/\s+/g," ");if(be&&(re||be===J||be===ve)){if(ce.offsetParent!==null){he===null&&(he=ce.querySelector(".admin-ui-page-note")?.innerHTML||"");let Ie=ce.querySelector(".admin-ui-page-actions");Ie&&ae&&!ae.children.length&&(Ie._adminHomeHead=ce,ae.appendChild(Ie))}ce.classList.add("is-merged-into-topbar")}}),ie&&(ie.innerHTML=he||"",ie.hidden=!he)}function Z(){let J=C[O],ie=new Set((J.sections||[]).map(ne)),ae=re=>re.id==="sec-advanced"?Array.from(re.querySelectorAll('[id^="sec-"]')).some(le=>getComputedStyle(le).display!=="none"):Array.from(re.children).some(le=>getComputedStyle(le).display!=="none");F.querySelectorAll(".admin-route-sections").forEach(re=>{if(!(re.id==="sec-advanced"?ie.has("sec-advanced"):ie.has(re.id))){re.style.display="none";return}re.style.display="",re.style.display=ae(re)?"":"none"})}let te=()=>{let J=C[O],ie=new Set(J.sections);F.querySelectorAll('[id^="sec-"]').forEach(ae=>{if(ae.id){if(ae.id==="sec-advanced"){let re=Array.from(ae.querySelectorAll('[id^="sec-"]')).some(le=>ie.has(le.id));ae.style.display=re?"":"none";return}ae.style.display=ie.has(ae.id)?"":"none"}}),V&&window.AdminTabs?.hasTabsFor?.(O)&&window.AdminTabs.applyTabSectionVisibility(O,V,F),Z(),W()},oe={system:{nav:"system",tab:"overview"},backup:{nav:"backup"},integrations:{nav:"integrations"},"api-tokens":{nav:"integrations",tab:"api-tokens"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},scheduler:{nav:"integrations",tab:"scheduler"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}},Q=(J,ie,ae)=>{if(ae=ae||J,!C[J]){let Se=R[J];if(typeof Se=="string")J=Se;else if(Se&&typeof Se=="object")Se.nav&&(J=Se.nav),!ie&&Se.tab&&(ie=Se.tab);else{let Te=P[J];typeof Te=="string"?J=Te:Te&&typeof Te=="object"&&(Te.nav&&(J=Te.nav),!ie&&Te.tab&&(ie=Te.tab))}}if(J==="system"&&ie&&oe[ie]){let Se=oe[ie];J=Se.nav,ie=Se.tab||null,ae=J}O=C[J]?J:"live",F.dataset.activeRoute=O;let re;window.AdminTabs?.hasTabsFor?.(O)?re=window.AdminTabs.resolveActiveTab(O,ie):re=null;let le=ae&&ae!==O?"#/"+ae:window.AdminRouter?.buildHash?window.AdminRouter.buildHash(O,re):"#/"+O;if(window.location.hash!==le){try{history.replaceState(null,"",le)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let ve=C[O],he=Array.from(F.querySelectorAll(".admin-dash-nav-row[data-route]")),ce=ae!==O?he.find(Se=>Se.dataset.route===ae):null;he.forEach(Se=>{let Te=ce?Se===ce:Se.dataset.route===O;Se.classList.toggle("is-active",Te),Se.setAttribute("aria-selected",Te?"true":"false")});let ye=F.querySelector("[data-route-kicker]"),be=F.querySelector("[data-route-title]");var _e=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(Se){return Se},Ie="adminRouteTitle_"+O,we="adminRouteKicker_"+O,ke=_e(Ie),Ee=_e(we);ye&&(ye.textContent=Ee!==we?Ee:ve.kicker),be&&(be.innerHTML=ke!==Ie?ke:ve.title);let $e=O==="dashboard"||O==="live";F.querySelectorAll('[data-route-view="dashboard"]').forEach(Se=>{Se.style.display=$e?"":"none"}),$e?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),V=re,re&&window.AdminRouter?.tabMemory?.set?.(O,re),F.dataset.activeLeaf=re||O,te(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:O,leaf:re}})),Z(),W(),de(O,re),se(ae,O,re);try{history.replaceState(null,"",le)}catch{}};function se(J,ie,ae){let re=F.querySelector("[data-route-breadcrumb]");if(!re)return;let le=Array.from(F.querySelectorAll(".admin-dash-nav-row[data-route]")),ve=le.find(we=>we.dataset.route===J);if(ve||(ve=le.find(we=>we.dataset.route===ie)),!ve){re.textContent="",re.hidden=!0;return}let he="",ce=ve.previousElementSibling;for(;ce;){if(ce.classList&&ce.classList.contains("admin-dash-nav-label")){he=((ce.querySelector("[data-i18n]")||ce).textContent||"").trim();break}ce=ce.previousElementSibling}let ye=ve.querySelector("[data-i18n]")||ve.querySelector("span:nth-child(2)"),be=(ye?ye.textContent:ve.textContent||"").trim(),_e="";if(ae){let we=F.querySelector("[data-admin-tabs-host]"),ke=we?we.querySelector(".is-active, [aria-selected='true']"):null;ke&&(_e=((ke.querySelector(".admin-tabs-btn-label")||ke).textContent||"").trim())}let Ie=[he,be].filter(Boolean);_e&&Ie.push(_e),re.hidden=Ie.length===0,re.innerHTML=Ie.map((we,ke)=>{let Ee=ke>0?'<span class="admin-dash-breadcrumb-sep" aria-hidden="true">\u203A</span>':"",$e=ke===Ie.length-1?"admin-dash-breadcrumb-item is-current":"admin-dash-breadcrumb-item";return Ee+'<span class="'+$e+'">'+p(we)+"</span>"}).join("")}function de(J,ie){let ae=F.querySelector("[data-admin-tabs-host]");if(!ae){let re=F.querySelector(".admin-dash-topbar");if(!re)return;ae=document.createElement("div"),ae.dataset.adminTabsHost="",re.insertAdjacentElement("afterend",ae)}if(ae.innerHTML="",window.AdminTabs?.hasTabsFor?.(J)&&ie){ae.hidden=!1;let re=window.AdminTabs.renderTabStrip(J,ie,{onSelect:le=>Q(J,le)});re&&ae.appendChild(re),ae.classList.remove("admin-tabs-host--accordion");return}ae.classList.remove("admin-tabs-host--accordion"),ae.hidden=!0}L&&window.removeEventListener("hashchange",L),L=()=>{let J=x(window.location.hash),ie=(window.location.hash||"").match(/^#\/([\w-]+)/),ae=ie?ie[1]:null;J&&Q(J.nav,J.tab,ae||J.raw)},window.addEventListener("hashchange",L),F.querySelectorAll("[data-route]").forEach(J=>{J.addEventListener("click",ie=>{ie.preventDefault(),Q(J.dataset.route)})});let ue=x(window.location.hash),fe=(window.location.hash||"").match(/^#\/([\w-]+)/),ge=fe?fe[1]:ue?.raw||ue?.nav||"live";Q(ue?.nav||"live",ue?.tab||null,ge),window._adminNavigateTo=()=>Q(O,V);let G=!1;function X(){if(G)return;G=!0;let J=()=>{G=!1,te(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:O,leaf:V}}))};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?requestAnimationFrame(J):setTimeout(J,0)}let ee=F.querySelector(".admin-dash-main");ee&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{X()}).observe(ee,{childList:!0,subtree:!0}),X())}function B(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let F=document.querySelector("[data-open-help]");F&&F.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let O=document.querySelector("[data-open-palette]");if(O){let ne=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};O.addEventListener("click",ne),O.addEventListener("keydown",W=>{(W.key==="Enter"||W.key===" ")&&(W.preventDefault(),ne())})}let V=document.getElementById("logoutButton");V&&V.addEventListener("click",async()=>{try{let ne=await _("/logout",{method:"POST"});ne.redirected&&(window.location.href=ne.url),showToast(ServerI18n.t("logoutSuccess"))}catch(ne){console.error("Logout Failed:",ne),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(ne=>{ne.name&&ne.addEventListener("change",async function(){let W=this.name,Z=this.checked;await c(W,Z)})}),document.querySelectorAll("details[id^='sec-']").forEach(ne=>{ne.addEventListener("toggle",()=>{let W=A();W[ne.id]=ne.open,N(W)})}),document.querySelectorAll(".setting-input").forEach(ne=>{ne.addEventListener("change",async function(){let W=this.dataset.key,Z=parseInt(this.dataset.index),te=this.value;this.type==="number"&&(te=parseInt(te)),await o(W,te,Z,this)})})}function $(){if(h.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}I()}else T()}async function j(){await d(),$(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function U(){window.AdminThemes&&window.AdminThemes.init()}function Y(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{M&&(M.disconnect(),M=null)}),j()})});var tt=me(()=>{(function(){"use strict";var b=null;async function w(){var m=(document.getElementById("pollQuestion")?.value||"").trim(),D=document.querySelectorAll(".poll-option-input"),q=Array.from(D).map(function(R){return R.value.trim()}).filter(Boolean);if(!m){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(q.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var M=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:m,options:q})}),L=await M.json();if(!M.ok){window.showToast(L.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),y(L),_()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function h(){try{var m=await window.csrfFetch("/admin/poll/end",{method:"POST"}),D=await m.json();if(!m.ok){window.showToast(D.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),y(D),b&&(clearInterval(b),b=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function f(){try{var m=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),D=await m.json();if(!m.ok){window.showToast(D.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),y(D),b&&(clearInterval(b),b=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function _(){b&&(clearInterval(b),b=null);var m=async function(){try{var D=await fetch("/admin/poll/status",{credentials:"same-origin"});if(D.ok){var q=await D.json();y(q),q.state!=="active"&&b&&(clearInterval(b),b=null)}}catch{}};m(),b=setInterval(m,2e3)}function z(){var m=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var D=document.querySelector('#sec-polls [data-poll-action="add"]');D&&D.click()},extra:`
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
      </div>`});return m.dataset.emptyKind="poll",m}function y(m){var D=document.getElementById("pollStatusDisplay");if(D){if(D.textContent="",!m||m.state==="idle"){D.appendChild(z());return}var q=m.total_votes||0,M=Math.max(1,...m.options.map(function(A){return A.count})),L=document.createElement("div");L.className="admin-poll-status-card";var R=document.createElement("div");R.className="admin-poll-status-header";var P=document.createElement("span");P.className="admin-poll-status-dot"+(m.state==="active"?" is-active":" is-ended"),R.appendChild(P);var k=document.createElement("span");k.className="admin-poll-status-question",k.textContent=m.question||"",R.appendChild(k);var x=document.createElement("span");x.className="admin-poll-status-state",x.textContent=m.state,R.appendChild(x),L.appendChild(R),m.options.forEach(function(A){var N=document.createElement("div");N.className="admin-poll-status-row";var p=document.createElement("div");p.className="admin-poll-status-label";var d=document.createElement("span"),r=document.createElement("b");r.textContent=A.key+".",d.appendChild(r),d.appendChild(document.createTextNode(" "+A.text));var e=document.createElement("span");e.textContent=A.count+" ("+A.percentage+"%)",p.appendChild(d),p.appendChild(e);var s=document.createElement("div");s.className="admin-poll-status-bar";var n=document.createElement("div");n.className="admin-poll-status-bar-fill",n.style.width=A.count/M*100+"%",s.appendChild(n),N.appendChild(p),N.appendChild(s),L.appendChild(N)});var K=document.createElement("div");K.className="admin-poll-status-footer",K.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",q),L.appendChild(K),D.appendChild(L)}}function S(){var m=document.getElementById("sec-polls");if(m&&m.dataset.pollLegacyBound!=="1"){m.dataset.pollLegacyBound="1";var D=document.getElementById("pollCreateBtn");D&&D.addEventListener("click",w);var q=document.getElementById("pollEndBtn");q&&q.addEventListener("click",h);var M=document.getElementById("pollResetBtn");M&&M.addEventListener("click",f);var L=document.getElementById("pollAddOptionBtn");L&&L.addEventListener("click",function(){var k=document.getElementById("pollOptionsContainer");if(k){var x=k.querySelectorAll(".poll-option-input").length;if(x>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var K=document.createElement("input");K.type="text",K.className="poll-option-input admin-ui-input",K.placeholder=String.fromCharCode(65+x)+". Option "+(x+1),K.maxLength=100,k.appendChild(K)}});var R=document.getElementById("pollRemoveOptionBtn");R&&R.addEventListener("click",function(){var k=document.getElementById("pollOptionsContainer");if(k){var x=k.querySelectorAll(".poll-option-input");if(x.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}x[x.length-1].remove()}});var P=m;P&&(P.addEventListener("toggle",function(){P.open&&_()}),_()),window.addEventListener("beforeunload",function(){b&&(clearInterval(b),b=null)})}}document.addEventListener("admin-panel-rendered",function(){S()}),document.addEventListener("DOMContentLoaded",function(){S()}),window.addEventListener("hashchange",function(){var m=window.location.hash||"";m.indexOf("/polls")!==-1&&S()})})()});var nt=me(()=>{(function(){"use strict";async function b(){try{let _=await fetch("/admin/blacklist/get",{method:"GET",credentials:"same-origin"});if(!_.ok){let D=await _.json();showToast(ServerI18n.t("errorFetchingBlacklist").replace("{error}",D.error||_.statusText),!1);return}let z=await _.json(),y=document.getElementById("blacklistKeywords");y.innerHTML="";let S=document.getElementById("modBlacklistCount");S&&(S.textContent=`${z.length} words`);let m=document.querySelector('[data-mod-stat="banned"]');m&&(m.textContent=z.length),z.length===0?y.innerHTML=`<div style="padding:12px 0;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${ServerI18n.t("noKeywordsYet")}</div>`:z.forEach(D=>{let q=document.createElement("div");q.className="hud-banned-row";let M=document.createElement("span");M.style.cssText="color: var(--color-ink-error);font-family:var(--font-mono);font-size:13px",M.textContent="\u2298";let L=document.createElement("span");L.style.cssText="flex:1;min-width:0;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all",L.textContent=D;let R=document.createElement("button");R.className="removeKeywordBtn",R.type="button",R.style.cssText="background:transparent;border:none;color: var(--color-ink-accent);font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;cursor:pointer;padding:2px 4px",R.textContent="UNBAN",R.setAttribute("data-keyword",D),q.appendChild(M),q.appendChild(L),q.appendChild(R),y.appendChild(q)})}catch(_){console.error("Fetch blacklist error:",_),showToast(ServerI18n.t("fetchBlacklistError"),!1)}}async function w(){let _=document.getElementById("newKeywordInput"),z=_.value.trim();if(!z){showToast(ServerI18n.t("keywordEmpty"),!1);return}try{let y=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:z})}),S=await y.json();y.ok?(_.value="",b(),window.AdminQuickAction?window.AdminQuickAction.fire({label:S.message||ServerI18n.t("histToastBlacklisted",{keyword:z}),undo:{label:ServerI18n.t("histUndo"),run:async()=>{if(!(await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:z})})).ok)throw new Error("remove failed");b()}}}):showToast(S.message||"Keyword added.",!0)):showToast(S.error||"Failed to add keyword.",!1)}catch(y){console.error("Add keyword error:",y),showToast(ServerI18n.t("addKeywordError"),!1)}}async function h(_){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("histRemoveKwTitle"),subtitle:ServerI18n.t("cfmSubRemoveKeyword"),severity:"warn",bodyText:ServerI18n.t("confirmRemoveKeyword").replace("{keyword}",_),confirmLabel:ServerI18n.t("histRemoveKwConfirm")}))try{let y=await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:_})}),S=await y.json();y.ok?(showToast(S.message||"Keyword removed.",!0),b()):showToast(S.error||"Failed to remove keyword.",!1)}catch(y){console.error("Remove keyword error:",y),showToast(ServerI18n.t("removeKeywordError"),!1)}}function f(){let _=document.getElementById("addKeywordBtn");_&&_.addEventListener("click",w);let z=document.getElementById("newKeywordInput");z&&z.addEventListener("keypress",function(S){(S.key==="Enter"||S.keyCode===13)&&(S.preventDefault(),w())});let y=document.getElementById("blacklistKeywords");y&&y.addEventListener("click",function(S){let m=S.target.closest(".removeKeywordBtn");if(m){let D=m.dataset.keyword;D&&h(D)}})}document.addEventListener("admin-panel-rendered",function(){b(),f()}),window.AdminHistory={fetchBlacklist:b}})()});var at=me(()=>{(function(){"use strict";var b="sec-timeline-export",w="danmu.adminHistoryExports.v1",h=10,f={rawText:!0,polls:!0,masked:!1,metadata:!0},_=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],z=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],y={range:"24h",filters:Object.assign({},f),format:"JSON"};function S(){return document.getElementById(b)}function m(){try{return JSON.parse(localStorage.getItem(w)||"[]")}catch{return[]}}function D(g){try{localStorage.setItem(w,JSON.stringify(g.slice(0,h)))}catch{}}function q(g){var E=m();E.unshift(g),D(E)}function M(g){return g?g<1024?g+" B":g<1024*1024?(g/1024).toFixed(1)+" KB":(g/1024/1024).toFixed(1)+" MB":"0 B"}function L(g){try{var E=new Date(g),T=new Date,I=E.toDateString()===T.toDateString();if(I)return ServerI18n.t("historyV2TodayAt",{time:String(E.getHours()).padStart(2,"0")+":"+String(E.getMinutes()).padStart(2,"0")});var C=new Date(T);return C.setDate(T.getDate()-1),E.toDateString()===C.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(E.getHours()).padStart(2,"0")+":"+String(E.getMinutes()).padStart(2,"0")}):E.getMonth()+1+"-"+String(E.getDate()).padStart(2,"0")+" "+String(E.getHours()).padStart(2,"0")+":"+String(E.getMinutes()).padStart(2,"0")}catch{return g||""}}function R(g){if(g==="1h")return 1;if(g==="24h")return 24;if(g==="7d")return 168;if(g==="today"){var E=new Date,T=new Date(E.getFullYear(),E.getMonth(),E.getDate());return Math.max(1,Math.ceil((E-T)/36e5))}return g==="yest"?48:g==="live"?6:24}function P(g){return g.filter(function(E){return!(!y.filters.rawText&&!E.is_poll&&!E.muted&&!E.banned||!y.filters.polls&&E.is_poll||!y.filters.masked&&(E.muted||E.banned))}).map(function(E){if(!y.filters.metadata){var T=Object.assign({},E);return delete T.clientIp,delete T.fingerprint,T}return E})}function k(g){var E=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status"],T=function(H){var B=H==null?"":String(H);return B.indexOf(",")>=0||B.indexOf('"')>=0||B.indexOf(`
`)>=0?'"'+B.replace(/"/g,'""')+'"':B},I=function(H){return H.banned?"banned":H.muted?"muted":H.is_poll?"poll":"ok"},C=g.map(function(H){return[H.timestamp||"",H.nickname||"",H.text||"",H.color?"#"+H.color:"",H.size!=null?H.size:"",H.speed!=null?H.speed:"",H.opacity!=null?H.opacity:"",H.isImage?"true":"false",H.fontInfo&&H.fontInfo.name||"",H.clientIp||"",H.fingerprint||"",I(H)].map(T).join(",")});return[E.join(","),C.join(`\r
`)].filter(Boolean).join(`\r
`)}function x(g){return g.map(function(E,T){var I=new Date(E.timestamp||Date.now()),C=K(I),H=K(new Date(I.getTime()+3e3)),B=(E.nickname?"["+E.nickname+"] ":"")+(E.text||"");return T+1+`
`+C+" --> "+H+`
`+B+`
`}).join(`
`)}function K(g){var E=function(T,I){return String(T).padStart(I||2,"0")};return E(g.getHours())+":"+E(g.getMinutes())+":"+E(g.getSeconds())+","+E(g.getMilliseconds(),3)}function A(g,E){var T=URL.createObjectURL(g),I=document.createElement("a");I.href=T,I.download=E,I.click(),URL.revokeObjectURL(T)}function N(){var g=R(y.range),E=document.getElementById("histv2-go");E&&(E.disabled=!0,E.dataset.busy="1"),fetch("/admin/history?hours="+g+"&limit=10000",{credentials:"same-origin"}).then(function(T){if(!T.ok)throw new Error("http "+T.status);return T.json()}).then(function(T){var I=T&&T.records||[],C=P(I);if(C.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var H=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),B,$;if(y.format==="JSON"){var j=JSON.stringify(C,null,2);$=new Blob([j],{type:"application/json"}),B="danmu-history-"+H+".json"}else y.format==="CSV"?($=new Blob(["\uFEFF"+k(C)],{type:"text/csv;charset=utf-8;"}),B="danmu-history-"+H+".csv"):($=new Blob([x(C)],{type:"application/x-subrip;charset=utf-8;"}),B="danmu-history-"+H+".srt");A($,B),q({name:B,fmt:y.format,size:$.size,when:new Date().toISOString(),count:C.length}),d(),p(C.length,$.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:C.length}),!0)}).catch(function(T){console.error("[history-v2] export failed",T),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:T.message||T}),!1)}).finally(function(){E&&(E.disabled=!1,delete E.dataset.busy)})}function p(g,E){var T=document.getElementById("histv2-estimate");T&&(T.textContent=ServerI18n.t("historyV2Estimate",{count:g||"\u2014",size:E?M(E):"\u2014 MB"}))}function d(){var g=document.getElementById("histv2-recent-list");if(g){var E=m();if(E.length===0){g.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}g.innerHTML=E.map(function(T){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+T.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+r(T.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+r(L(T.when))+" \xB7 "+M(T.size)+"</div></div></div>"}).join("")}}function r(g){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(g):g==null?"":String(g).replace(/[&<>"']/g,function(E){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[E]})}function e(){return _.map(function(g){var E=y.range===g.k;return'<button type="button" class="histv2-chip'+(E?" is-active":"")+'" data-histv2-range="'+g.k+'">'+r(ServerI18n.t(g.labelKey))+(g.k==="live"?" \xB7 "+s():"")+"</button>"}).join("")}function s(){var g=new Date;return String(g.getHours()).padStart(2,"0")+":"+String(g.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function n(){var g=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return g.map(function(E){var T=!!y.filters[E.k];return'<button type="button" class="histv2-toggle'+(T?" is-on":"")+'" data-histv2-toggle="'+E.k+'"><span class="histv2-toggle-mark">'+(T?"\u2713":"\u25CB")+"</span><span>"+r(ServerI18n.t(E.labelKey))+"</span></button>"}).join("")}function i(){return z.map(function(g){var E=y.format===g.k;return'<button type="button" class="histv2-fmt'+(E?" is-selected":"")+'" data-histv2-fmt="'+g.k+'">'+(E?'<span class="histv2-fmt-check">\u2713</span>':"")+(g.badge?'<span class="histv2-fmt-badge">'+r(g.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+g.k+'</div><div class="histv2-fmt-desc">'+r(g.desc)+"</div></button>"}).join("")}function a(){var g=S();g&&(g.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+e()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+n()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+i()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",g.addEventListener("click",t),d(),l())}function t(g){var E=g.target.closest("[data-histv2-range]");if(E){y.range=E.dataset.histv2Range,o(),l();return}var T=g.target.closest("[data-histv2-toggle]");if(T){var I=T.dataset.histv2Toggle;y.filters[I]=!y.filters[I],c(),l();return}var C=g.target.closest("[data-histv2-fmt]");if(C){y.format=C.dataset.histv2Fmt,u(),l();return}var H=g.target.closest("#histv2-go");if(H&&!H.dataset.busy){N();return}}function o(){var g=document.getElementById("histv2-chips");g&&(g.innerHTML=e())}function c(){var g=document.getElementById("histv2-toggles");g&&(g.innerHTML=n())}function u(){var g=document.getElementById("histv2-formats");g&&(g.innerHTML=i())}function l(){l._t&&clearTimeout(l._t),l._t=setTimeout(function(){var g=R(y.range);fetch("/admin/history?hours="+g+"&limit=10000",{credentials:"same-origin"}).then(function(E){return E.ok?E.json():null}).then(function(E){if(!E)return p(0,0);var T=P(E&&E.records||[]),I=y.format==="JSON"?220:y.format==="CSV"?110:80;p(T.length,T.length*I)}).catch(function(){p(0,0)})},250)}function v(){var g=S(),E=document.getElementById("admin-backup-v2-page");if(!g){var T=document.getElementById("settings-grid");if(!T)return;g=document.createElement("div"),g.id=b,g.className="admin-ui-card lg:col-span-2 history-v2-section",T.appendChild(g),a()}E&&E.parentElement&&g.previousElementSibling!==E&&E.parentElement.insertBefore(g,E.nextSibling)}document.addEventListener("admin-panel-rendered",v),document.addEventListener("admin-route-applied",v),window.AdminHistoryV2={refresh:l,state:y}})()});var st=me(()=>{(function(){"use strict";let b="admin-replay-bar";function w(){let f=document.getElementById(b);return f||(document.body?(f=document.createElement("div"),f.id=b,f.className="admin-replay-bar",f.hidden=!0,f.setAttribute("role","status"),f.setAttribute("aria-live","polite"),f.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(f,document.body.firstChild),f):null)}function h(f){let _=w();_&&(_.hidden=!f)}window.AdminReplayBar={ensure:w,setActive:h},document.addEventListener("admin-panel-rendered",w)})()});var it=me(()=>{(function(){"use strict";let b=null;function w(L){window.AdminReplayBar&&window.AdminReplayBar.ensure();let R=document.getElementById("replayPauseBtn"),P=document.getElementById("replayResumeBtn"),k=document.getElementById("replayStopBtn"),x=document.getElementById("replayProgress"),K=(p,d)=>{p&&p.classList.toggle("hidden",!d)},A=L==="playing",N=L==="paused";K(R,A),K(P,N),K(k,A||N),K(x,A||N),!A&&!N&&x&&(x.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(A||N)}function h(){b&&clearInterval(b),b=setInterval(async()=>{try{let L=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!L.ok)return;let R=await L.json(),P=document.getElementById("replayProgress");P&&(P.textContent=ServerI18n.t("replayingProgress").replace("{sent}",R.sent).replace("{total}",R.total)),w(R.state),R.state==="stopped"&&(clearInterval(b),b=null)}catch{}},500)}async function f(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),w("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function _(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),w("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function z(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),w("stopped"),b&&(clearInterval(b),b=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let y=null,S=null,m=0,D=null;function q(){[["replayPauseBtn",f],["replayResumeBtn",_],["replayStopBtn",z]].forEach(function([R,P]){let k=document.getElementById(R);k&&!k.dataset.replayCtrlsBound&&(k.addEventListener("click",P),k.dataset.replayCtrlsBound="1")})}async function M(){try{let L=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!L.ok)return;let R=await L.json();(R.state==="playing"||R.state==="paused")&&(w(R.state),h())}catch{}}window.AdminReplayControls={notifyStarted:function(){w("playing"),h()}},document.addEventListener("admin-panel-rendered",function(){q(),M()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(q,800)})})()});var ot=me(()=>{(function(){"use strict";let b="sec-ratelimit",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(y){return String(y).replace(/[&<>"']/g,function(S){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[S]})},h=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function f(){return`
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
          ${h.map(y=>`
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
      </div>`}function _(y){let S=y.querySelector("#rlEnvExport");setTimeout(async()=>{try{let d=window.AdminBootstrap;d&&typeof d.primeBootstrap=="function"&&await d.primeBootstrap();let r=d&&d.bootstrapSection?d.bootstrapSection("history_stats"):null,e=d&&d.bootstrapSection?d.bootstrapSection("blacklist"):null,s=d&&d.bootstrapSection?d.bootstrapSection("metrics"):null,n=[];n.push(r?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),n.push(e?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),n.push(s?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[i,a,t]=await Promise.all(n),o=r||(i&&i.ok?await i.json():null);if(o){let E=o.stats&&o.stats.last_24h||0,T=o.stats&&o.stats.total||0,I=y.querySelector("[data-rl-sum-hits]"),C=y.querySelector("[data-rl-sum-hits-delta]");I&&(I.textContent=E.toLocaleString()),C&&(C.textContent=ServerI18n.t("ratelimitSumTotal",{n:T.toLocaleString()}))}let c=e||(a&&a.ok?await a.json():null);if(c){let E=Array.isArray(c)?c:c.entries||c.keywords||[],T=y.querySelector("[data-rl-sum-black]");T&&(T.textContent=E.length?ServerI18n.t("ratelimitCountUnit",{n:E.length}):"0")}let u=y.querySelector("[data-rl-sum-viol]"),l=y.querySelector("[data-rl-sum-viol-rate]"),v=y.querySelector("[data-rl-sum-locked]"),g=s||(t&&t.ok?await t.json():null);if(g){let E=g&&g.rate_limits;if(E&&E.totals){let T=E.totals.hits||0,I=E.totals.violations||0,C=E.totals.locked_sources||0;if(u&&(u.textContent=I.toLocaleString()),l){let H=T+I;l.textContent=H>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(I/H*100).toFixed(1)}):"\u2014"}v&&(v.textContent=ServerI18n.t("ratelimitLockedSources",{n:C.toLocaleString()})),h.forEach(({key:H})=>{let B=E[H],$=y.querySelector(`[data-rl-current="${H}"]`);if($&&B){let j=(B.hits||0).toLocaleString(),U=(B.violations||0).toLocaleString();$.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:j,viol:U})}}),D(E)}else u&&(u.textContent="\u2014"),l&&(l.textContent=ServerI18n.t("ratelimitCountPendingBackend")),v&&(v.textContent="\u2014")}else u&&(u.textContent="\u2014"),l&&(l.textContent=ServerI18n.t("ratelimitCountPendingBackend")),v&&(v.textContent="\u2014");m(g&&g.recent_violations)}catch{}},4500);function m(d){let r=y.querySelector("[data-rl-vbody]"),e=y.querySelector("[data-rl-vcount]");if(!r)return;let s=Array.isArray(d)?d:[];if(e&&(e.textContent=ServerI18n.t("ratelimitViolationsCount",{n:s.length})),s.length===0){r.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let n=a=>{let t=new Date(a*1e3),o=c=>String(c).padStart(2,"0");return`${o(t.getHours())}:${o(t.getMinutes())}:${o(t.getSeconds())}`},i=a=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[a]||"var(--color-text-muted)";r.innerHTML=s.slice(0,30).map(a=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${n(a.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${i(a.scope)}">${(a.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${w(a.ip||"")}</span>
        </div>
      `).join("")}function D(d){d&&h.forEach(({key:r})=>{let e=d[r],s=y.querySelector(`[data-rl-suggest="${r}"]`);if(!s)return;let n=e&&e.suggestion;if(!n){s.hidden=!0;return}let i=s.querySelector("[data-rl-suggest-detail]");i&&(i.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(n.p95_per_second||0).toFixed(2),limit:e.limit||"\u2014",window:e.window||"\u2014",suggLimit:n.suggested_limit,suggWindow:n.suggested_window}));let a=s.querySelector("[data-rl-apply]");a&&(a.dataset.rlSuggestLimit=String(n.suggested_limit),a.dataset.rlSuggestWindow=String(n.suggested_window)),s.hidden=!1})}async function q(){try{let d=await fetch("/admin/metrics",{credentials:"same-origin"});if(!d.ok)return;let r=await d.json(),e=r&&r.rate_limits;if(!e)return;h.forEach(({key:s})=>{let n=e[s],i=y.querySelector(`[data-rl-current="${s}"]`);if(i&&n){let a=(n.hits||0).toLocaleString(),t=(n.violations||0).toLocaleString();i.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:a,viol:t})}}),D(e)}catch{}}y.addEventListener("click",async d=>{let r=d.target.closest("[data-rl-action]");if(!r)return;let e=r.dataset.rlAction;if(e==="save"){let s=r.dataset.rlSave,n=y.querySelector(`[data-rl-limit="${s}"]`),i=y.querySelector(`[data-rl-window="${s}"]`);if(!n||!i)return;let a=parseInt(n.value,10),t=parseInt(i.value,10);if(!Number.isFinite(a)||!Number.isFinite(t)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let o=r.textContent;r.disabled=!0,r.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let c=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:s,limit:a,window:t})});if(c.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:s.toUpperCase(),limit:a,window:t}),!0),q();else{let u=await c.json().catch(()=>({})),l=u&&u.error||`HTTP ${c.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:l}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{r.disabled=!1,r.textContent=o}return}if(e==="apply-suggest"){let s=r.dataset.rlApply,n=parseInt(r.dataset.rlSuggestLimit,10),i=parseInt(r.dataset.rlSuggestWindow,10);if(!s||!Number.isFinite(n)||!Number.isFinite(i))return;let a=r.textContent;r.disabled=!0,r.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let t=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:s,limit:n,window:i})});if(t.ok){let o=y.querySelector(`[data-rl-limit="${s}"]`),c=y.querySelector(`[data-rl-window="${s}"]`);o&&(o.value=n),c&&(c.value=i),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:s.toUpperCase(),limit:n,window:i}),!0),q(),M()}else{let o=await t.json().catch(()=>({})),c=o&&o.error||`HTTP ${t.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:c}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{r.disabled=!1,r.textContent=a}return}if(e==="export"){let s=[];y.querySelectorAll("[data-rl-limit]").forEach(n=>{let i=n.dataset.rlLimit.toUpperCase();s.push(`${i}_RATE_LIMIT=${n.value}`)}),y.querySelectorAll("[data-rl-window]").forEach(n=>{let i=n.dataset.rlWindow.toUpperCase();s.push(`${i}_RATE_WINDOW=${n.value}`)}),S.textContent=s.join(`
`),S.hidden=!1;try{navigator.clipboard?.writeText(s.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else e==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([n,[i,a]])=>{let t=y.querySelector(`[data-rl-limit="${n}"]`),o=y.querySelector(`[data-rl-window="${n}"]`);t&&(t.value=i),o&&(o.value=a)}),S.hidden=!0,M())});function M(){h.forEach(({key:d})=>{let r=y.querySelector(`[data-rl-limit="${d}"]`),e=y.querySelector(`[data-rl-window="${d}"]`),s=y.querySelector(`[data-rl-lockout="${d}"]`),n=y.querySelector(`[data-rl-effective="${d}"]`);if(!r||!e||!n)return;let i=parseInt(r.value,10)||0,a=parseInt(e.value,10)||1,t=(i/a).toFixed(2),o=Math.round(i*1.5),c=`effective_rate = ${i} / ${a}s = ${t} req/s \xB7 burst = ${o}`;if(d==="login"&&s){let u=parseInt(s.value,10)||0;c+=` \xB7 lock = ${u}s`}n.textContent=c})}y.addEventListener("input",d=>{let r=d.target;!r||!r.dataset.rlLimit&&!r.dataset.rlLockout||M()}),y.addEventListener("change",d=>{let r=d.target;!r||!r.dataset.rlWindow||M()}),M();function L(d,r){if(!d||!Array.isArray(r))return;let e=96,s=24,n=r.length?r:new Array(24).fill(0),i=Math.max(1,...n),a=e/Math.max(1,n.length-1),t=n.map((c,u)=>`${(u*a).toFixed(1)},${(s-2-c/i*(s-4)).toFixed(1)}`).join(" "),o=d.querySelector("polyline");o&&o.setAttribute("points",t)}h.forEach(({key:d})=>{let r=y.querySelector(`[data-rl-spark="${d}"]`);r&&L(r,new Array(24).fill(0))});let R=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,P={allowlist:[],denylist:[]},k={input:y.querySelector("[data-rl-ip-input]"),select:y.querySelector("[data-rl-ip-select]"),addBtn:y.querySelector("[data-rl-ip-add]"),summary:y.querySelector("[data-rl-ip-summary]"),error:y.querySelector("[data-rl-ip-error]"),allowCount:y.querySelector("[data-rl-ip-allow-count]"),denyCount:y.querySelector("[data-rl-ip-deny-count]"),allowBody:y.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:y.querySelector('[data-rl-ip-body="denylist"]')};function x(d){if(k.error){if(!d){k.error.hidden=!0,k.error.textContent="";return}k.error.hidden=!1,k.error.textContent=d}}function K(d){let r=d==="allowlist"?k.allowBody:k.denyBody,e=d==="allowlist"?k.allowCount:k.denyCount;if(!r||!e)return;let s=Array.isArray(P[d])?P[d]:[];if(e.textContent=String(s.length),s.length===0){let n=ServerI18n.t(d==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");r.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:n})}</div>`;return}r.innerHTML=s.map(n=>{let i=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:w(n)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${w(n)}">
          <span class="admin-ratelimit-ip-chip-cidr">${w(n)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${w(n)}" data-rl-ip-remove-kind="${d}" title="${i}" aria-label="${i}">\xD7</button>
        </div>
      `}).join("")}function A(){if(K("allowlist"),K("denylist"),k.summary){let d=(P.allowlist||[]).length,r=(P.denylist||[]).length;k.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:d,deny:r})}}async function N(){try{let d=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!d.ok){k.summary&&(k.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:d.status}));return}let r=await d.json();r&&typeof r=="object"&&(P={allowlist:Array.isArray(r.allowlist)?r.allowlist:[],denylist:Array.isArray(r.denylist)?r.denylist:[]},A())}catch{k.summary&&(k.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function p(d,{toastLabel:r}={}){try{let e=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});if(e.ok){let i=await e.json();return P={allowlist:Array.isArray(i.allowlist)?i.allowlist:[],denylist:Array.isArray(i.denylist)?i.denylist:[]},A(),x(""),r&&typeof showToast=="function"&&showToast(r,!0),!0}let s=await e.json().catch(()=>({})),n=s&&s.error||`HTTP ${e.status}`;return x(n),!1}catch{return x(ServerI18n.t("ratelimitNetworkError")),!1}}k.addBtn&&k.addBtn.addEventListener("click",async()=>{if(!k.input||!k.select)return;let d=(k.input.value||"").trim();if(!d){x(ServerI18n.t("ratelimitIpRequiredError"));return}if(!R.test(d)){x(ServerI18n.t("ratelimitIpFormatError"));return}let r=k.select.value==="denylist"?"denylist":"allowlist",e=Array.from(new Set([...P[r]||[],d]));await p({[r]:e},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(r==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:d})})&&(k.input.value="")}),k.input&&(k.input.addEventListener("keydown",d=>{d.key==="Enter"&&(d.preventDefault(),k.addBtn&&k.addBtn.click())}),k.input.addEventListener("input",()=>{k.error&&!k.error.hidden&&x("")})),y.addEventListener("click",async d=>{let r=d.target.closest("[data-rl-ip-remove]");if(!r)return;let e=r.dataset.rlIpRemove,s=r.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",n=(P[s]||[]).filter(i=>i!==e);await p({[s]:n},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(s==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:e})})}),N(),setTimeout(async()=>{try{let d=await fetch("/admin/metrics",{credentials:"same-origin"});if(!d.ok)return;let r=await d.json(),e=r&&r.rate_limits;if(!e)return;h.forEach(({key:s})=>{let n=e[s]&&(e[s].bucket_history||e[s].history);if(Array.isArray(n)&&n.length){let i=y.querySelector(`[data-rl-spark="${s}"]`);i&&L(i,n.slice(-24))}})}catch{}},5500)}function z(){let y=document.getElementById("settings-grid");if(!y||document.getElementById(b))return;y.insertAdjacentHTML("beforeend",f());let S=document.getElementById(b);S&&_(S)}document.addEventListener("admin-panel-rendered",z),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&z()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),z()})})()});var rt=me(()=>{(function(){"use strict";let b="sec-viewer-theme",w="danmu.viewerTheme.v1",h=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function f(){return`
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
      </div>`}function _(y){let S={...h[0],logo:null};try{let a=localStorage.getItem(w);a&&(S={...S,...JSON.parse(a)})}catch{}let m="default";function D(){try{localStorage.setItem(w,JSON.stringify(S))}catch{}}function q(a){let t=/^#?([0-9a-f]{6})$/i.exec(a);if(!t)return[0,0,0];let o=parseInt(t[1],16);return[o>>16&255,o>>8&255,o&255]}function M([a,t,o]){let c=[a,t,o].map(u=>(u/=255,u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4)));return .2126*c[0]+.7152*c[1]+.0722*c[2]}function L(a,t){let o=M(q(a)),c=M(q(t)),[u,l]=o>c?[o,c]:[c,o];return(u+.05)/(l+.05)}function R(a){return a>=7?{label:"AAA",cls:"is-good"}:a>=4.5?{label:"AA",cls:"is-ok"}:a>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function P(){let a=y.querySelector("[data-vt-presets]");a.innerHTML="",h.forEach(t=>{let o=document.createElement("button");o.type="button",o.className="admin-vt-preset"+(m===t.id?" is-active":""),o.innerHTML=`
          <div class="swatch" style="background:${t.bg}">
            <span style="background:${t.primary}"></span>
            <span style="background:${t.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(t.nameKey)}</div>
          <div class="mode">${ServerI18n.t(t.mode==="dark"?"lbDark":"lbLight")}</div>
        `,o.addEventListener("click",()=>{S={...S,...t},m=t.id,D(),i()}),a.appendChild(o)})}function k(){y.querySelectorAll("[data-vt-mode-btn]").forEach(a=>{a.classList.toggle("is-active",S.mode===a.dataset.vtModeBtn)})}function x(){let a=y.querySelector("[data-vt-colors]"),t=S.mode==="dark"?"#F8FAFC":"#0F172A",o=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:t,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:S.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:S.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];a.innerHTML=o.map(c=>{let u=L(S[c.key],c.vs),l=R(u);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${S[c.key]}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${c.label}</span>
                <span class="grade ${l.cls}">${l.label} \xB7 ${u.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${S[c.key]}" data-vt-color="${c.key}" />
                <input type="text" value="${S[c.key]}" data-vt-hex="${c.key}" spellcheck="false" />
                <span class="vs">vs ${c.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function K(){let a=y.querySelector("[data-vt-logo-preview]"),t=y.querySelector(".hint-empty"),o=y.querySelector("[data-vt-logo-actions]");S.logo?(a.src=S.logo,a.hidden=!1,t.style.display="none",o.hidden=!1):(a.hidden=!0,t.style.display="",o.hidden=!0)}function A(){let a=y.querySelector("[data-vt-font]");a.value=S.font;let t=y.querySelector("[data-vt-font-specimen]");t.style.fontFamily=S.font}function N(){let a=S.mode==="dark"?"#F8FAFC":"#0F172A",t=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:L(a,S.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:L(S.primary,S.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:L(S.hero,S.bg)}];y.querySelector("[data-vt-contrast]").innerHTML=t.map(o=>{let c=R(o.ratio);return`<span class="vt-contrast-chip ${c.cls}">${o.lbl} \xB7 ${c.label} ${o.ratio.toFixed(1)}</span>`}).join("")}function p(){let a=y.querySelector("[data-vt-stage]"),t=S.mode==="dark"?"#F8FAFC":"#0F172A";a.style.setProperty("--vt-bg",S.bg),a.style.setProperty("--vt-primary",S.primary),a.style.setProperty("--vt-hero",S.hero),a.style.setProperty("--vt-fg",t),a.style.fontFamily=S.font;let o=y.querySelector("[data-vt-preview-logo]");S.logo?o.innerHTML=`<img src="${S.logo}" style="max-height:40px" />`:o.textContent="Danmu Fire"}let d="auto",r="auto";function e(){y.querySelectorAll("[data-vt-theme-btn]").forEach(a=>{a.classList.toggle("is-active",a.dataset.vtThemeBtn===d)}),y.querySelectorAll("[data-vt-lang-btn]").forEach(a=>{a.classList.toggle("is-active",a.dataset.vtLangBtn===r)})}async function s(){try{let a=await fetch("/get_settings",{credentials:"same-origin"});if(!a.ok)return;let t=await a.json(),o=t&&t.ViewerThemeMode&&t.ViewerThemeMode[1],c=t&&t.ViewerLangMode&&t.ViewerLangMode[1];typeof o=="string"&&(d=o),typeof c=="string"&&(r=c),e()}catch{}}async function n(a,t){if(window.csrfFetch)try{let o=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:a,value:t,index:1})});if(!o.ok)throw new Error(o.status);window.showToast&&window.showToast(`${a} = ${t}`,!0)}catch(o){console.warn("[admin-viewer-theme] force-mode update failed:",o),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:a}),!1)}}function i(){P(),k(),x(),K(),A(),N(),p(),e()}y.addEventListener("input",a=>{if(a.target.matches("[data-vt-color]")){let t=a.target.dataset.vtColor;S[t]=a.target.value,m="custom",D(),i()}else if(a.target.matches("[data-vt-hex]")){let t=a.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(a.target.value)&&(S[t]=a.target.value,m="custom",D(),i())}else a.target.matches("[data-vt-font]")&&(S.font=a.target.value,D(),i())}),y.addEventListener("change",a=>{if(a.target.matches("[data-vt-logo-input]")){let t=a.target.files&&a.target.files[0];if(!t)return;if(t.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let o=new FileReader;o.onload=()=>{S.logo=String(o.result||""),D(),i()},o.readAsDataURL(t)}}),y.addEventListener("click",a=>{let t=a.target.closest("[data-vt-mode-btn]");if(t){S.mode=t.dataset.vtModeBtn,m="custom",D(),i();return}let o=a.target.closest("[data-vt-theme-btn]");if(o){d=o.dataset.vtThemeBtn,e(),n("ViewerThemeMode",d);return}let c=a.target.closest("[data-vt-lang-btn]");if(c){r=c.dataset.vtLangBtn,e(),n("ViewerLangMode",r);return}if(a.target.closest("[data-vt-logo-remove]")){S.logo=null,D(),i();return}let l=a.target.closest("[data-vt-device-btn]");if(l){y.querySelectorAll("[data-vt-device-btn]").forEach(g=>g.classList.toggle("is-active",g===l)),y.querySelector("[data-vt-frame]").dataset.device=l.dataset.vtDeviceBtn;return}let v=a.target.closest("[data-vt-action]");v&&v.dataset.vtAction==="reset"&&(S={...h[0],logo:null},m="default",D(),i())}),i(),s()}document.addEventListener("click",function(y){let S=y.target.closest("[data-vt-jump]");if(!S)return;let m=S.dataset.vtJump;if(m){y.preventDefault();try{location.hash="#/"+m}catch{}}});function z(){let y=document.getElementById("settings-grid");if(!y||document.getElementById(b))return;y.insertAdjacentHTML("beforeend",f());let S=document.getElementById(b);S&&_(S)}document.addEventListener("admin-panel-rendered",z),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&z()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),z()})})()});var dt=me(()=>{(function(){"use strict";let b="sec-system-overview";function w(){return`
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
          ${[{id:"uptime",label:ServerI18n.t("sohMetricUptime")},{id:"conn",label:ServerI18n.t("sohMetricConnected")},{id:"ram",label:ServerI18n.t("sohMetricMemory")},{id:"ver",label:ServerI18n.t("sohMetricVersion")}].map(S=>`
            <div class="admin-soh-kpi" data-m="${S.id}">
              <div class="admin-soh-kpi__label">${S.label}</div>
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
          ${[{hash:"#/backup",label:ServerI18n.t("adminNavBackup"),sub:ServerI18n.t("sohLinkBackupSub"),attr:""},{hash:"#/security",label:ServerI18n.t("adminNavSecurity"),sub:ServerI18n.t("sohLinkSecuritySub"),attr:'data-soh-sub="security"'},{hash:"#/integrations",label:ServerI18n.t("adminNavIntegrations"),sub:"\u2014",attr:'data-soh-sub="integrations"'},{hash:"#/about",label:ServerI18n.t("sohLinkAbout"),sub:ServerI18n.t("sohLinkAboutSub"),attr:""}].map(S=>`
            <a class="admin-ui-group-row admin-soh-link" href="${S.hash}">
              <span class="lbl">${S.label}</span>
              <span class="val admin-soh-link__sub" ${S.attr}>${S.sub}</span>
              <span class="admin-soh-link__chev" aria-hidden="true">\u203A</span>
            </a>`).join("")}
        </div>
      </div>`}function h(S){let m=Math.floor(S/86400),D=Math.floor(S%86400/3600),q=Math.floor(S%3600/60);return m>0?`${m}d ${String(D).padStart(2,"0")}h ${String(q).padStart(2,"0")}m`:D>0?`${D}h ${String(q).padStart(2,"0")}m`:`${q}m ${String(S%60).padStart(2,"0")}s`}function f(S,m,D){let q=document.querySelector(`[data-m="${S}"]`);if(!q)return;let M=q.querySelector("[data-m-v]");M&&(M.textContent=m);let L=q.querySelector("[data-m-sub]");L&&(L.textContent=D||"")}function _(S){let m=document.querySelector("[data-soh-banner-dot]"),D=document.querySelector("[data-soh-banner-title]"),q=document.querySelector("[data-soh-chip]"),L=!(S.queue_size!=null&&S.queue_capacity!=null&&S.queue_size>=S.queue_capacity);q&&q.classList.toggle("is-warn",!L),m&&m.classList.toggle("is-warn",!L),D&&(D.textContent=L?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function z(){(async()=>{try{let D=await window.csrfFetch("/admin/metrics");if(!D.ok)return;let q=await D.json(),M=N=>Array.isArray(N)&&N.length?N[N.length-1]:null,L=q.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-q.server_started_at)):0;f("uptime",L>0?h(L):"\u2014","");let R=null;try{let N=await fetch("/admin/audience/stats",{credentials:"same-origin"});N.ok&&(R=(await N.json()).total_live)}catch{}let P=q.ws_clients??0;f("conn",String(P+(R||0)),R==null?ServerI18n.t("sohConnOverlaysOnly",{n:P}):ServerI18n.t("sohConnBreakdown",{overlays:P,viewers:R}));let k=M(q.mem_series||[]),x=q.mem_total_mb?(q.mem_total_mb/1024).toFixed(0):null;f("ram",k!=null?`${Number(k).toFixed(0)}%`:"\u2014",x?ServerI18n.t("sohMemorySub",{total:x}):"");let K=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";f("ver",`v${K}`,ServerI18n.t("sohVersionSub")),_(q);let A=document.querySelector('[data-soh-sub="integrations"]');A&&(A.textContent=ServerI18n.t("sohLinkExtSub",{webhooks:q.webhooks_count??0,plugins:q.plugins_loaded??0}));try{let N=await window.csrfFetch("/admin/ws-auth");if(N.ok){let p=await N.json(),d=document.querySelector('[data-soh-sub="security"]');d&&(d.textContent=p.require_token?ServerI18n.t("sohLinkSecurityOn"):ServerI18n.t("sohLinkSecurityOff"))}}catch{}}catch{}})();let S=document.getElementById(b);if(!S)return;let m=()=>{let D=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";S.querySelectorAll("[data-soh-mode]").forEach(q=>{let M=q.dataset.sohMode===D;q.classList.toggle("is-active",M),q.setAttribute("aria-pressed",M?"true":"false")})};m(),document.addEventListener("admin:theme-mode",m),S.addEventListener("click",function(D){let q=D.target.closest("[data-soh-mode]");if(q){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(q.dataset.sohMode),m();return}let M=D.target.closest("[data-soh-action]");if(!(!M||M.disabled)){if(M.dataset.sohAction==="copy-url"){let L=document.getElementById("sysoPublicUrl")?.textContent||"";navigator.clipboard?.writeText(L).then(()=>window.showToast&&window.showToast(ServerI18n.t("sohCopied"),!0),()=>window.showToast&&window.showToast(ServerI18n.t("sohCopyFailed"),!1));return}if(M.dataset.sohAction==="show-qr"){let L=S.querySelector("[data-soh-qr]");if(!L)return;if(!L.hidden){L.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(R=>R.ok?R.json():Promise.reject(R)).then(R=>{L.innerHTML=R.svg,L.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function y(){let S=document.getElementById("settings-grid");!S||document.getElementById(b)||(S.insertAdjacentHTML("beforeend",w()),document.getElementById(b)&&z())}document.addEventListener("admin-panel-rendered",y),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&y()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),y()})})()});var lt=me(()=>{(function(){"use strict";let b="sec-polls",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(z){return String(z).replace(/[&<>"']/g,function(y){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[y]})};function h(){return`
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
  `}function f(){let z=document.getElementById("sec-polls");if(!z)return;let y=z.querySelector("[data-poll-queue]"),S=z.querySelector("[data-poll-editor]"),m=z.querySelector("[data-poll-view-builder]"),D=z.querySelector("[data-poll-view-live]"),q=z.querySelector("[data-poll-view-results]"),M="danmu.adminPollQueue.v2";function L(){return"q_"+Math.random().toString(36).slice(2,8)}function R(){return"o_"+Math.random().toString(36).slice(2,6)}function P(W){return{id:R(),label:"",img:""}}function k(){return{id:L(),text:"",timer:90,multi:!1,crop:"16:9",image_url:"",server_q_id:"",options:[P("A"),P("B")]}}let x=null,K="builder",A=null,N=0,p={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},d=null,r=[];try{let W=localStorage.getItem(M);if(W){let Z=JSON.parse(W);Array.isArray(Z)?r=Z:Z&&Array.isArray(Z.queue)&&(r=Z.queue)}}catch{}(!Array.isArray(r)||r.length===0)&&(r=[k()]),r.forEach(W=>{typeof W.image_url!="string"&&(W.image_url=""),typeof W.server_q_id!="string"&&(W.server_q_id="")});let e=r[0].id,s="manual",n=null,i=null,a={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function t(){try{localStorage.setItem(M,JSON.stringify({queue:r,activeId:e,mode:s}))}catch{}}function o(W){return r.find(Z=>Z.id===W)}function c(W,Z){let te=o(W);te&&Object.assign(te,Z)}function u(W,Z,te){let oe=W.slice(),[Q]=oe.splice(Z,1);return oe.splice(te,0,Q),oe}function l(){y.innerHTML="",r.forEach((W,Z)=>{let te=document.createElement("div");te.className="admin-poll-qrow",W.id===e&&te.classList.add("is-active");let oe=a.active&&a.currentIndex===Z;oe&&te.classList.add("is-running"),te.dataset.qid=W.id,te.draggable=!0;let Q=!!W.image_url||W.options.some(se=>se.img);te.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${Z+1}</span>
            <div class="info">
              <div class="text">${w(W.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:W.options.length})} \xB7 ${W.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):W.timer+"s"} \xB7 ${Q?ServerI18n.t("pollBuilderHasImageCrop",{crop:W.crop}):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${oe?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":W.id===e?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,y.appendChild(te)})}function v(){let W=o(e)||r[0];if(!W){S.innerHTML="";return}let Z=r.indexOf(W);S.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${Z+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:Z+1})}</span>
            </div>
            <span class="progress">Q${Z+1} / ${r.length}</span>
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
        `}function g(){x&&x.active?K="live":A?K="results":K="builder",z.dataset.pollView=K,m.hidden=K!=="builder",D.hidden=K!=="live",q.hidden=K!=="results",l(),v(),Y(),K==="live"?H():K==="results"&&$(),K==="live"?E():T()}function E(){d||(d=setInterval(()=>{K!=="live"||!x||!x.active||B()},1e3))}function T(){d&&(clearInterval(d),d=null)}function I(W,Z){if(!W||!W.time_limit_seconds)return null;if(!Z)return W.time_limit_seconds;let te=Date.now()/1e3-Z;return Math.max(0,Math.round(W.time_limit_seconds-te))}function C(W){if(W==null)return"\u221E";let Z=String(Math.floor(W/60)).padStart(2,"0"),te=String(W%60).padStart(2,"0");return`${Z}:${te}`}function H(){if(!x||!x.questions||x.questions.length===0){D.innerHTML="";return}let W=x.current_index>=0?x.current_index:0,Z=x.questions.length,te=x.questions[W],oe=I(te,x.started_at),Q=te.time_limit_seconds||0,se=Q>0&&oe!=null?Math.max(0,Math.min(1,oe/Q)):1,de=Q>0&&oe!=null&&oe<=Math.max(5,Q*.15),ue=te.options.reduce((ae,re)=>ae+(re.count||0),0),fe=[...te.options].sort((ae,re)=>(re.count||0)-(ae.count||0)),ge=fe[0]?fe[0].count:0,G=x.questions[W+1],X=110,ee=X/2-6,J=2*Math.PI*ee,ie=J*se;D.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${w((x.poll_id||"").slice(-6))}
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
                    <div class="mmss ${de?"is-low":""}" data-live-mmss>${oe==null?ServerI18n.t("pollBuilderNoTimeLimit"):C(oe)}</div>
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
                  ${x.questions.map((ae,re)=>{let le=re<W?"done":re===W?"active":"queued";return`
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
        `}function B(){if(!x||!x.active)return;let W=x.current_index>=0?x.current_index:0,Z=x.questions[W];if(!Z)return;let te=I(Z,x.started_at),oe=Z.time_limit_seconds||0,Q=D.querySelector("[data-live-mmss]"),se=D.querySelector("[data-live-ring]");if(Q&&(Q.textContent=te==null?ServerI18n.t("pollBuilderNoTimeLimit"):C(te),Q.classList.toggle("is-low",oe>0&&te!=null&&te<=Math.max(5,oe*.15))),se&&oe>0&&te!=null){let de=+se.getAttribute("r"),ue=2*Math.PI*de,fe=Math.max(0,Math.min(1,te/oe));se.setAttribute("stroke-dasharray",`${ue*fe} ${ue}`);let ge=te<=Math.max(5,oe*.15);se.setAttribute("stroke",ge?"var(--hud-crimson)":"var(--color-primary)"),se.style.filter=`drop-shadow(0 0 4px ${ge?"var(--hud-crimson)":"var(--color-primary)"})`}p.autoAdvance&&oe>0&&te===0&&(W>=x.questions.length-1?V():O())}function $(){let W=A;if(!W||!W.questions||W.questions.length===0){q.innerHTML="";return}let Z=W.questions.length,te=Math.max(0,Math.min(N,Z-1)),oe=W.questions[te],Q=oe.options.reduce((J,ie)=>J+(ie.count||0),0),se=[...oe.options].sort((J,ie)=>(ie.count||0)-(J.count||0)),de=se[0]||{key:"-",text:"\u2014",count:0},ue=se[1],fe=Q>0?de.count/Q*100:0,ge=ue?Math.max(0,de.count-ue.count):de.count,G=W.started_at||0,X=W.ended_at||Date.now()/1e3,ee=Math.max(0,Math.round(X-G));q.innerHTML=`
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
                  <span>Q${te+1}/${Z} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:C(ee),n:Q})}</span>
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
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${oe.time_limit_seconds?C(oe.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${W.started_at?new Date(W.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${W.ended_at?new Date(W.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${C(ee)}</span></div>
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
`)}function U(W,Z,te){let oe=new Blob([te],{type:Z}),Q=document.createElement("a");Q.href=URL.createObjectURL(oe),Q.download=W,document.body.appendChild(Q),Q.click(),setTimeout(()=>{URL.revokeObjectURL(Q.href),Q.remove()},0)}z.addEventListener("click",W=>{let Z=W.target.closest("[data-live-action]");if(Z){let se=Z.dataset.liveAction;se==="advance"?O():se==="end"?V():se==="pause"&&(p.autoAdvance=!1,H());return}let te=W.target.closest("[data-live-toggle]");if(te){let se=te.dataset.liveToggle;se in p&&(p[se]=!p[se],te.classList.toggle("is-on",p[se]));return}let oe=W.target.closest("[data-results-tab]");if(oe){N=+oe.dataset.resultsTab||0,$();return}let Q=W.target.closest("[data-results-action]");if(Q){let se=Q.dataset.resultsAction,de=A;if(!de)return;if(se==="copy"){let ue=de.questions.map((fe,ge)=>{let G=fe.options.reduce((ee,J)=>ee+(J.count||0),0),X=fe.options.map(ee=>{let J=G>0?(ee.count/G*100).toFixed(1):"0.0";return`  ${ee.key}. ${ee.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:ee.count})} (${J}%)`});return`Q${ge+1}: ${fe.text}
${X.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(ue)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else se==="csv"?U(`poll_${(de.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",j(de)):se==="json"?U(`poll_${(de.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(de,null,2)):se==="reset"&&(A=null,N=0,g());return}}),y.addEventListener("dragstart",W=>{let Z=W.target.closest(".admin-poll-qrow");Z&&(n=Z.dataset.qid,Z.classList.add("is-dragging"))}),y.addEventListener("dragend",W=>{let Z=W.target.closest(".admin-poll-qrow");Z&&Z.classList.remove("is-dragging"),n=null,y.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over"))}),y.addEventListener("dragover",W=>{W.preventDefault();let Z=W.target.closest(".admin-poll-qrow");!Z||!n||Z.dataset.qid===n||(y.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over")),Z.classList.add("is-drag-over"))}),y.addEventListener("drop",W=>{W.preventDefault();let Z=W.target.closest(".admin-poll-qrow");if(!Z||!n)return;let te=r.findIndex(Q=>Q.id===n),oe=r.findIndex(Q=>Q.id===Z.dataset.qid);te<0||oe<0||te===oe||(r=u(r,te,oe),t(),g())}),y.addEventListener("click",W=>{let Z=W.target.closest(".admin-poll-qrow");Z&&(e=Z.dataset.qid,t(),g())}),S.addEventListener("input",W=>{let Z=o(e);if(Z){if(W.target.matches("[data-ed-text]")){Z.text=W.target.value,t(),l();return}if(W.target.matches("[data-ed-opt-text]")){let te=W.target.dataset.edOptText,oe=Z.options.find(Q=>Q.id===te);oe&&(oe.label=W.target.value,t(),l())}}}),S.addEventListener("change",W=>{let Z=o(e);Z&&(W.target.matches("[data-ed-timer]")?(Z.timer=+W.target.value,t(),l()):W.target.matches("[data-ed-multi]")&&(Z.multi=W.target.checked,t()))}),S.addEventListener("click",async W=>{let Z=o(e);if(!Z)return;let te=W.target.closest("[data-ed-crop]");if(te){Z.crop=te.dataset.edCrop,t(),v();return}let oe=W.target.closest("[data-ed-opt-img]");if(oe){let de=Z.options.find(ue=>ue.id===oe.dataset.edOptImg);de&&(de.img=de.img?"":"placeholder",t(),v());return}let Q=W.target.closest("[data-ed-opt-remove]");if(Q){let de=Q.dataset.edOptRemove;Z.options.length>2&&(Z.options=Z.options.filter(ue=>ue.id!==de),t(),v(),l());return}if(W.target.closest("[data-ed-opt-add]")){Z.options.length<6&&(Z.options.push(P()),t(),v(),l());return}let se=W.target.closest("[data-ed-action]");if(se)if(se.dataset.edAction==="remove-q"){if(r.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let ue=r.findIndex(fe=>fe.id===e);r=r.filter(fe=>fe.id!==e),e=r[Math.min(ue,r.length-1)].id,t(),g()}}else if(se.dataset.edAction==="upload-q-image"){let de=S.querySelector("[data-ed-q-image-input]");de&&de.click()}else se.dataset.edAction==="remove-q-image"&&(Z.image_url="",t(),v(),l())}),S.addEventListener("change",async W=>{if(!W.target.matches("[data-ed-q-image-input]"))return;let Z=W.target.files&&W.target.files[0];if(!Z)return;let te=o(e);if(!te)return;if(!a.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),W.target.value="";return}if(!te.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),W.target.value="";return}if(Z.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),W.target.value="";return}let oe=new FormData;oe.append("file",Z);try{let Q=await csrfFetch(`/admin/poll/${encodeURIComponent(a.pollId)}/upload-image/${encodeURIComponent(te.server_q_id)}`,{method:"POST",body:oe}),se=await Q.json().catch(()=>({}));if(!Q.ok)throw new Error(se.error||"upload failed");te.image_url=se.image_url,t(),v(),l(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(Q){showToast&&showToast(String(Q.message||Q),!1)}finally{W.target.value=""}}),S.addEventListener("dragstart",W=>{let Z=W.target.closest(".admin-poll-opt");Z&&(i=Z.dataset.oid,Z.classList.add("is-dragging"))}),S.addEventListener("dragend",W=>{S.querySelectorAll(".is-dragging, .is-drag-over").forEach(Z=>Z.classList.remove("is-dragging","is-drag-over")),i=null}),S.addEventListener("dragover",W=>{let Z=W.target.closest(".admin-poll-opt");!Z||!i||Z.dataset.oid===i||(W.preventDefault(),S.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over")),Z.classList.add("is-drag-over"))}),S.addEventListener("drop",W=>{W.preventDefault();let Z=W.target.closest(".admin-poll-opt"),te=o(e);if(!Z||!i||!te)return;let oe=te.options.findIndex(se=>se.id===i),Q=te.options.findIndex(se=>se.id===Z.dataset.oid);oe<0||Q<0||oe===Q||(te.options=u(te.options,oe,Q),t(),v())}),z.addEventListener("click",W=>{if(W.target.closest("[data-poll-action='add']")){let se=k();r.push(se),e=se.id,t(),g();return}let te=W.target.closest("[data-poll-template]");if(te){let se=k(),de=te.dataset.pollTemplate,ue=["A","B","C","D","E"],fe=ge=>ge.map((G,X)=>{let ee=P(ue[X]);return ee.text=G,ee});de==="yesno"?(se.text="",se.options=fe([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):de==="stars"?(se.timer=60,se.options=fe(["1","2","3","4","5"])):de==="four"&&(se.options=fe(["","","",""])),r.push(se),e=se.id,t(),g();return}let oe=W.target.closest("[data-poll-mode]");oe&&(s=oe.dataset.pollMode,z.querySelectorAll("[data-poll-mode]").forEach(se=>se.classList.toggle("is-active",se===oe)),t());let Q=W.target.closest("[data-poll-session-action]");if(Q){let se=Q.dataset.pollSessionAction;se==="start"?F():se==="advance"?O():se==="end"&&V()}});function Y(){let W=z.querySelector("[data-poll-session]");if(!W)return;let Z=W.querySelector("[data-poll-session-status]"),te=W.querySelector("[data-poll-session-action='start']"),oe=W.querySelector("[data-poll-session-action='advance']"),Q=W.querySelector("[data-poll-session-action='end']");if(!a.pollId||!a.active){Z.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,te.hidden=!1,oe.hidden=!0,Q.hidden=!0;return}let se=r.length,de=a.currentIndex+1,ue=a.currentIndex>=se-1;Z.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${de} / ${se}</span>`,te.hidden=!0,oe.hidden=ue,Q.hidden=!1}async function F(){try{let W=r.map((de,ue)=>{let fe=(de.text||"").trim(),ge=de.options.map(G=>(G.label||"").trim()).filter(Boolean);if(!fe)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:ue+1}));if(ge.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:ue+1}));return{text:fe,options:ge,time_limit_seconds:de.timer&&de.timer>0?de.timer:null}});if(!W.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let Z=(()=>{let de=r.map(ue=>Number(ue.timer)||0).filter(ue=>ue>0);return de.length?Math.round(de.reduce((ue,fe)=>ue+fe,0)/de.length):null})(),te=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:W,mode:s||"manual",default_duration_s:Z})}),oe=await te.json().catch(()=>({}));if(!te.ok)throw new Error(oe.error||ServerI18n.t("pollBuilderErrCreateFailed"));a.pollId=oe.poll_id,(oe.questions||[]).forEach((de,ue)=>{r[ue]&&(r[ue].server_q_id=de.id)}),t();let Q=await csrfFetch("/admin/poll/start",{method:"POST"}),se=await Q.json().catch(()=>({}));if(!Q.ok)throw new Error(se.error||ServerI18n.t("pollBuilderErrStartFailed"));a.active=!0,a.currentIndex=se.current_index??0,x=se,A=null,g(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),ne()}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function O(){try{let W=await csrfFetch("/admin/poll/advance",{method:"POST"}),Z=await W.json().catch(()=>({}));if(!W.ok)throw new Error(Z.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));a.currentIndex=Z.current_index,a.active=!!Z.active,x=Z,g(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:a.currentIndex+1}),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function V(){try{let W=x,Z=await csrfFetch("/admin/poll/end",{method:"POST"});if(!Z.ok){let te=await Z.json().catch(()=>({}));throw new Error(te.error||ServerI18n.t("pollBuilderErrEndFailed"))}W&&W.questions&&(A={...W,ended_at:Date.now()/1e3},N=W.current_index>=0?W.current_index:0),a.active=!1,a.pollId="",a.currentIndex=-1,x=null,a.statusTimer&&(clearInterval(a.statusTimer),a.statusTimer=null),g(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}function ne(){a.statusTimer&&clearInterval(a.statusTimer),a.statusTimer=setInterval(async()=>{if(a.pollId)try{let W=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!W.ok)return;let Z=await W.json();if(Z.poll_id!==a.pollId)return;a.active=!!Z.active,a.currentIndex=Z.current_index??-1;let te=!!(x&&x.active);x=Z,Z.active||(clearInterval(a.statusTimer),a.statusTimer=null,te&&Z.questions&&!A&&(A={...Z,ended_at:Date.now()/1e3},N=Z.current_index>=0?Z.current_index:0),x=null),K==="live"?H():g()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{a.statusTimer&&(clearInterval(a.statusTimer),a.statusTimer=null),T()}),g()}function _(){let z=document.getElementById("settings-grid");!z||document.getElementById(b)||(z.insertAdjacentHTML("beforeend",h()),document.getElementById(b)&&f())}document.addEventListener("admin-panel-rendered",_),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&_()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),_()})})()});var ct=me(()=>{(function(){"use strict";let f="sec-live-feed",_=[],z=[],y=!1,S="",m="all",D=0,q=null,M=null,L=null,R=null;function P(F){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(F):String(F??"").replace(/[&<>"']/g,function(O){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[O]})}function k(F,O){return F?F.length>O?F.slice(0,O)+"\u2026":F:""}function x(F){let O=new Date(F),V=ne=>String(ne).padStart(2,"0");return`${V(O.getHours())}:${V(O.getMinutes())}:${V(O.getSeconds())}`}function K(F){if(!S)return!0;let O=S.toLowerCase(),V=F.data;return V.text&&V.text.toLowerCase().includes(O)||V.nickname&&V.nickname.toLowerCase().includes(O)||V.fingerprint&&V.fingerprint.toLowerCase().includes(O)||V.layout&&V.layout.toLowerCase().includes(O)}function A(F){return m==="muted"?!!F.muted:m==="sensitive"?!!F.sensitive:m==="queued"?F.data&&F.data.status==="queued":!0}function N(){m="all",document.querySelectorAll(".admin-live-feed-tab").forEach(F=>F.classList.toggle("is-active",F.dataset.tab==="all"))}function p(){S="",L&&(L.value=""),N()}function d(F,O){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let ne;return F==="paused"?ne=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:O||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):F==="no-result"?ne=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:O||ServerI18n.t("lfNoMatchDesc")}):ne=window.AdminEmpty.render("messages"),ne.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),ne.setAttribute("data-empty-kind","live-feed"),ne}let V=document.createElement("div");return V.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",V.setAttribute("data-empty-kind","live-feed"),V.innerHTML=`<div class="admin-proto-placeholder-title">${P(F)}</div><div class="admin-proto-placeholder-body">${P(O||"")}</div>`,V}function r(F){let O=F.data,V=document.createElement("div");V.className="admin-live-feed-row"+(F.muted?" is-muted":""),V.dataset.id=F.id,V.tabIndex=-1;let ne=document.createElement("span");if(ne.className="admin-live-feed-time",ne.textContent=x(F.ts),V.appendChild(ne),(O.layout||"scroll").toLowerCase()!=="scroll"){let se=document.createElement("span");se.className="admin-ui-chip admin-live-feed-tag",se.textContent=O.layout,V.appendChild(se)}let Z=document.createElement("span");Z.className="admin-live-feed-text",Z.textContent=k(O.text||"",80),Z.title=O.text||"",V.appendChild(Z);let te=document.createElement("span");te.className="admin-live-feed-identity",window.AdminIdentity&&te.appendChild(AdminIdentity.render({nickname:O.nickname||"",fp:"",onNicknameClick:function(se){!se||!L||(L.value=se,L.dispatchEvent(new Event("input",{bubbles:!0})),L.focus())}})),V.appendChild(te);let oe=document.createElement("span");oe.className="admin-live-feed-actions is-hover-reveal";let Q=document.createElement("button");if(Q.type="button",Q.className="admin-ui-chip is-danger admin-live-feed-action",Q.textContent=ServerI18n.t("blockKeywordBtn"),Q.title=ServerI18n.t("blockKeywordTitle"),Q.addEventListener("click",se=>{se.stopPropagation(),e("keyword",O.text,F.id)}),oe.appendChild(Q),O.fingerprint){let se=document.createElement("button");se.type="button",se.className="admin-ui-chip is-warn admin-live-feed-action",se.textContent=ServerI18n.t("blockFpBtn"),se.title=ServerI18n.t("blockFpTitle").replace("{fp}",O.fingerprint),se.addEventListener("click",de=>{de.stopPropagation(),e("fingerprint",O.fingerprint,F.id)}),oe.appendChild(se)}return V.appendChild(oe),V}async function e(F,O,V){if(!O)return;let ne=F==="keyword"?ServerI18n.t("blockLabelKeyword"):ServerI18n.t("blockLabelFingerprint"),W=F==="keyword"?k(O,30):O.slice(0,8);if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("lfBlockTitle"),subtitle:ServerI18n.t("cfmSubBlockFuture"),severity:"danger",bodyText:ServerI18n.t("blockConfirm").replace("{label}",ne).replace("{display}",W),confirmLabel:ServerI18n.t("lfBlockTitle")}))try{let te=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:F,value:O})}),oe=await te.json();if(te.ok){if(showToast(oe.message||ServerI18n.t("blockFallback").replace("{label}",ne)),V){let Q=_.find(se=>se.id===V);Q&&(Q.muted=!0)}else _.forEach(Q=>{F==="keyword"&&Q.data.text===O&&(Q.muted=!0),F==="fingerprint"&&Q.data.fingerprint===O&&(Q.muted=!0)});s()}else showToast(oe.error||ServerI18n.t("blockFailed"),!1)}catch(te){console.error("[LiveFeed] Block failed:",te),showToast(ServerI18n.t("blockRequestFailed"),!1)}}function s(){if(!q)return;let F=document.createDocumentFragment(),O=_.filter(V=>K(V)&&A(V));for(let V=O.length-1;V>=0;V--)F.appendChild(r(O[V]));if(q.textContent="",F.childNodes.length===0){let V=y?d("paused"):_.length===0?d("empty"):d("no-result");q.appendChild(V)}else q.appendChild(F);n(),t(),o(),a()}function n(){if(!R)return;let F=_.length,O=z.length;R.textContent=ServerI18n.t("lfCountUnit",{n:F})+(O>0?` (+${O})`:"")}function i(F){let O={ts:Date.now(),data:F,id:"e"+ ++D};if(F&&F.status==="blocked"&&(O.muted=!0),F&&(F.sensitive||F.flagged)&&(O.sensitive=!0),y){z.push(O),n(),a();return}if(_.push(O),_.length>200){let V=_.splice(0,_.length-200)}s()}function a(){let F=document.querySelector("[data-lf-jump]"),O=document.querySelector("[data-lf-jump-n]");if(!F||!O)return;let V=z.length;V>0?(F.hidden=!1,O.textContent=String(V)):F.hidden=!0}function t(){let F=document.querySelector("[data-lf-state]");F&&(F.className=y?"ui-status is-warning":"ui-status is-success",F.textContent=y?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function o(){let F=document.getElementById(f)||document,O=(V,ne)=>{let W=F.querySelector(V);W&&(W.textContent=String(ne))};O("[data-cnt-all]",_.length),O("[data-cnt-sens]",_.filter(V=>V.sensitive).length),O("[data-cnt-mut]",_.filter(V=>V.muted).length),O("[data-cnt-q]",_.filter(V=>V.data&&V.data.status==="queued").length)}function c(){if(y=!y,q&&q.setAttribute("aria-live",y?"off":"polite"),M&&(M.textContent=y?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),M.classList.toggle("is-primary",y),M.classList.toggle("is-ghost",!y)),y)n();else{for(let F of z)_.push(F);z=[],_.length>200&&_.splice(0,_.length-200),s()}}function u(){let F=document.getElementById("settings-grid");if(!F)return!1;let O=`
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
              placeholder="${P(ServerI18n.t("liveFeedSearchPlaceholder"))}"
              class="admin-lf-v4__search" />
            <button id="liveFeedPauseBtn" type="button" class="admin-lf-v4__pausebtn">${P(ServerI18n.t("pauseBtn"))}</button>
            <button id="liveFeedClearBtn" type="button" class="admin-lf-v4__pausebtn">${P(ServerI18n.t("clearBtn"))}</button>
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
      </div>`;return F.insertAdjacentHTML("beforeend",O),!0}let l=!1,v=null,g=0,E=1500;async function T(){try{let F=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(g),{credentials:"same-origin"});if(!F.ok)return;let O=await F.json();if(Array.isArray(O.entries))for(let V of O.entries)V&&V.data&&i(V.data);typeof O.next_since=="number"&&(g=O.next_since)}catch{}}function I(){l||(l=!0,T(),v=setInterval(T,E),window.addEventListener("beforeunload",()=>{v&&(clearInterval(v),v=null)}))}function C(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(f)&&u()&&H()}).observe(document.body,{childList:!0,subtree:!0}),u()&&H()}function H(){q=document.getElementById("liveFeedList"),M=document.getElementById("liveFeedPauseBtn"),L=document.getElementById("liveFeedSearch"),R=document.getElementById("liveFeedCount");let F=document.getElementById("liveFeedClearBtn"),O=document.querySelectorAll(".admin-live-feed-tab");if(M&&M.addEventListener("click",c),F&&F.addEventListener("click",()=>{_=[],z=[],s()}),O.forEach(V=>{V.addEventListener("click",()=>{O.forEach(ne=>ne.classList.remove("is-active")),V.classList.add("is-active"),m=V.dataset.tab||"all",s()})}),L){let V=null;L.addEventListener("input",()=>{clearTimeout(V),V=setTimeout(()=>{S=L.value.trim(),s()},200)})}I()}function B(F){if(!("ontouchstart"in window))return;let O=0,V=0,ne=0,W=null,Z=null,te=!1;function oe(Q){if(Q.querySelector(".admin-live-feed-row__swipe-actions"))return;let se=document.createElement("div");se.className="admin-live-feed-row__swipe-actions",se.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="mask">
          <span class="admin-live-feed-row__swipe-btn-icon">\u25D0</span>${ServerI18n.t("lfSwipeMask")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mute" data-swipe-act="mute">
          <span class="admin-live-feed-row__swipe-btn-icon">\u25D0</span>${ServerI18n.t("lfSwipeMute")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,se.addEventListener("click",function(de){let ue=de.target.closest("[data-swipe-act]");if(!ue)return;let fe=Q.dataset.id,ge=_.find(X=>X.id===fe);if(!ge||!ge.data)return;let G=ue.dataset.swipeAct;G==="ban"||G==="mute"?ge.data.fingerprint&&e("fingerprint",ge.data.fingerprint,fe):G==="mask"&&ge.data.text&&e("keyword",ge.data.text,fe),Q.classList.remove("is-swiped")}),Q.appendChild(se)}F.addEventListener("touchstart",function(Q){let se=Q.target.closest(".admin-live-feed-row");se&&(Q.target.closest(".admin-live-feed-row__swipe-actions")||(W=se,te=!1,O=Q.touches[0].clientX,V=Q.touches[0].clientY,ne=0))},{passive:!0}),F.addEventListener("touchmove",function(Q){if(!W||te)return;let se=Q.touches[0],de=se.clientX-O,ue=se.clientY-V;if(Math.abs(ue)>Math.abs(de)&&Math.abs(ue)>12){te=!0;return}if(ne=de,de<-10){oe(W),Z=W,W.classList.add("is-swiping");let fe=Math.max(-180,de);W.style.transform=`translateX(${fe}px)`}else de>10&&W.classList.contains("is-swiped")&&(W.style.transform="")},{passive:!0}),F.addEventListener("touchend",function(){W&&(W.classList.remove("is-swiping"),W.style.transform="",ne<=-60?W.classList.add("is-swiped"):W.classList.remove("is-swiped"),W=null,Z=null,ne=0)},{passive:!0})}function $(){return q?Array.from(q.querySelectorAll(".admin-live-feed-row")):[]}function j(){let F=$(),O=document.activeElement;for(let V of F)if(V===O||V.contains(O))return V;return null}function U(F){let O=$();if(!O.length)return!1;let V=j(),ne=V?O.indexOf(V)+F:F>0?0:O.length-1;return ne=Math.max(0,Math.min(O.length-1,ne)),O[ne].focus(),O[ne].scrollIntoView({block:"nearest"}),!0}function Y(F){let O=j();if(!O)return!1;let V=_.find(W=>W.id===O.dataset.id);if(!V)return!1;let ne=F==="keyword"?V.data.text:V.data.fingerprint;return ne?(e(F,ne,V.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return _.slice()},isVisible:function(){return!!(q&&q.offsetParent!==null)},isPaused:function(){return y},moveFocus:U,blockFocused:Y,togglePause:function(){c()}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",C):C()})()});var ut=me(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var b=window.AdminUtils.loadDetailsState,w=window.AdminUtils.saveDetailsState,h=window.AdminUtils.escapeHtml;function f(o,c=!1){var u=b();return u[o]!==void 0?u[o]:c}function _(o){var c=b();c[o.id]=o.open,w(c)}let z=!1;new MutationObserver(()=>{let o=document.getElementById("settings-grid");if(o&&!(document.getElementById("sec-plugins")||z)){z=!0;try{S(o)}finally{z=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function S(o){let c=`
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
      `;o.insertAdjacentHTML("beforeend",c);let u=document.querySelector("[data-console-filters]");u&&u.addEventListener("click",l=>{let v=l.target.closest("[data-console-filter]");v&&(u.querySelectorAll("[data-console-filter]").forEach(g=>g.classList.toggle("is-active",g===v)),q=v.dataset.consoleFilter,k())}),document.getElementById("pluginsReloadBtn").addEventListener("click",t),A(),K()}let m=0,D=0,q="all",M=[],L=80;function R(o){let c=(o||"INFO").toUpperCase();return c==="ERROR"?"is-error":c==="WARN"?"is-warn":c==="DEBUG"?"is-debug":"is-info"}function P(o){let c=new Date(o*1e3),u=l=>String(l).padStart(2,"0");return`${u(c.getHours())}:${u(c.getMinutes())}:${u(c.getSeconds())}`}function k(){let o=document.getElementById("pluginsConsoleBody");if(!o)return;let c=q==="all"?M:M.filter(u=>(u.level||"INFO").toUpperCase()===q);if(c.length===0){let u=q==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${q} lines yet \xB7 waiting\u2026`;o.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${u}</span>
          </div>`;return}o.innerHTML=c.map(u=>{let l=P(u.ts),v=(u.msg||"").replace(/[<>&"]/g,T=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[T]),g=(u.plugin||"\u2014").replace(/[<>&"]/g,T=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[T]),E=(u.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${l}</span>
          <span class="lv ${R(u.level)}">${E}</span>
          <span class="plg">${g}</span>
          <span class="msg">${v}</span>
        </div>`}).join("")}async function x(){try{let o=await fetch(`/admin/plugins/console?since=${m}`,{credentials:"same-origin"});if(!o.ok)return;let c=await o.json();if(!Array.isArray(c.events)||c.events.length===0)return;for(M.unshift(...c.events);M.length>L;)M.pop();m=c.latest_seq||m,k()}catch{}}function K(){D||(D=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:x}))}async function A(){let o=document.getElementById("pluginsList");if(o)try{let c=await csrfFetch("/admin/plugins/list");if(!c.ok)throw new Error(`HTTP ${c.status}`);let l=(await c.json()).plugins||[];if(l.length===0){o.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",N([]);return}o.innerHTML=l.map(p).join(""),i(o),N(l)}catch(c){console.error("Failed to load plugins:",c),o.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function N(o){let c=o.length,u=o.filter(T=>T.enabled).length,l=c-u,v=o.map(T=>T.priority).filter(T=>typeof T=="number"),g=v.length?Math.round(v.reduce((T,I)=>T+I,0)/v.length):null,E=(T,I)=>{document.querySelectorAll(`[data-plugins-stat="${T}"]`).forEach(C=>{C.textContent=I})};E("loaded",c),E("running",u),E("paused",l),E("priority",g??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(T=>{T.textContent=c})}function p(o){let{name:c,version:u,description:l,priority:v,enabled:g,is_user:E,file:T}=o,I=`plugin-toggle-${c}`,C=e(v),H=n(v),B=r(o),$=E&&T?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${h(T)}"
            data-plugin-name="${h(c)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${h(c)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${h(c)}">
          <span class="admin-plugins-dot ${g?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${h(c)}</div>
            ${l?`<div class="desc">${h(l)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${u?"v"+h(u):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${C}">${v??"\u2014"}${H?" \xB7 "+H:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${s(B)}">${B}</span>
          <div class="admin-plugins-toggle-cell">
            ${$}
            <label class="admin-plugins-switch" for="${I}">
              <input type="checkbox" id="${I}" role="switch"
                aria-checked="${!!g}" aria-label="Toggle plugin ${h(c)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${h(c)}"
                ${g?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function d(o,c){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:o}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:c}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let l=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:c})}),v=await l.json().catch(()=>({}));if(!l.ok){showToast(v.error||ServerI18n.t("pluginsToastRemoveFailed",{status:l.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:o}),!0),await A()}catch(l){showToast(ServerI18n.t("pluginsToastNetError",{msg:l.message||""}),!1)}}function r(o){let c=o.file||o.path||o.source||"";if(typeof c=="string"){if(c.endsWith(".py"))return"PY";if(c.endsWith(".js"))return"JS"}return(o.language||"PY").toUpperCase()}function e(o){return o==null?"is-muted":o<=10?"is-danger":o<=50?"is-warn":"is-cyan"}function s(o){return o==="JS"?"is-cyan":o==="PY"?"is-warn":"is-muted"}function n(o){return o==null?"":o<=10?"CRITICAL":o<=50?"HIGH":"NORMAL"}function i(o){o.querySelectorAll(".plugin-toggle").forEach(c=>{c.addEventListener("change",async function(){let u=this.dataset.pluginName,l=this.checked;await a(u,l,this)})}),o.querySelectorAll(".plugin-uninstall").forEach(c=>{c.addEventListener("click",function(){d(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function a(o,c,u){let l=c?"/admin/plugins/enable":"/admin/plugins/disable";try{let v=await csrfFetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o})});if(!v.ok){let g=await v.json().catch(()=>({}));throw new Error(g.error||`HTTP ${v.status}`)}showToast(c?ServerI18n.t("pluginEnabled").replace("{name}",o):ServerI18n.t("pluginDisabled").replace("{name}",o),!0)}catch(v){console.error(`Failed to ${c?"enable":"disable"} plugin:`,v),showToast(v.message||ServerI18n.t("operationFailed"),!1),u&&(u.checked=!c)}}async function t(){let o=document.getElementById("pluginsReloadBtn");o&&(o.disabled=!0);try{let c=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!c.ok){let u=await c.json().catch(()=>({}));throw new Error(u.error||`HTTP ${c.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await A()}catch(c){console.error("Failed to reload plugins:",c),showToast(c.message||ServerI18n.t("reloadFailed"),!1)}finally{o&&(o.disabled=!1)}}})})()});var mt=me(()=>{(function(){"use strict";let b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},w={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},h=null,f=null;function _(){return h||(h=document.createElement("div"),h.className="admin-pu-backdrop",h.hidden=!0,h.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(h),h.addEventListener("click",e=>{(e.target.matches("[data-pu-close]")||e.target===h)&&r()}),h)}function z(e){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((n,i)=>{let a=i+1,t=a<e,c=t?"is-done":a===e?"is-active":"";return(i>0?`<span class="admin-pu-step-line ${t?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${c}">
          <span class="circle">${t?"\u2713":a}</span>
          <span class="label">${n}</span>
        </div>`}).join("")}function y(e,s){f.step=e;let n=h.querySelector("[data-pu-steps]");n&&(n.innerHTML=z(e));let i=h.querySelector("[data-pu-body]");i&&(i.innerHTML=s)}function S(e){let s=e==="error-type"?ServerI18n.t("pluginsUploadErrorType"):e==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):e==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):e==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),n=(e||"").startsWith("error")?"\u2715":e==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(e||"").startsWith("error")?"is-error":e==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${n}</div>
          <div class="admin-pu-dropzone-msg">${b(s)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py,.js" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function m(){let e=h.querySelector("[data-pu-dropzone]"),s=h.querySelector("[data-pu-file]"),n=h.querySelector("[data-pu-browse]");n&&n.addEventListener("click",()=>s&&s.click()),s&&s.addEventListener("change",()=>{s.files&&s.files[0]&&D(s.files[0])}),e&&(e.addEventListener("click",()=>s&&s.click()),e.addEventListener("dragover",i=>{i.preventDefault(),e.classList.add("is-over")}),e.addEventListener("dragleave",()=>e.classList.remove("is-over")),e.addEventListener("drop",i=>{i.preventDefault(),e.classList.remove("is-over");let a=i.dataTransfer&&i.dataTransfer.files;if(!(!a||a.length===0)){if(a.length>1){y(1,S("error-multi")),m();return}D(a[0])}}))}function D(e){if(!e.name.match(/\.(py|js)$/i)){y(1,S("error-type")),m();return}if(e.size>256*1024){y(1,S("error-size")),m();return}f.file=e,y(2,q(e.name)),M(e)}function q(e){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${b(e)}</div>
      </div>`}async function M(e){try{let s=new FormData;s.append("file",e);let n=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:s}),i=await n.json().catch(()=>({}));if(!n.ok&&!i.validation){window.showToast?.(i.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:n.status}),!1),y(1,S()),m();return}f.manifest=i.manifest||{},f.validation=i.validation||{},f.filename=i.filename||e.name,L(f)}catch(s){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:s.message||""}),!1),y(1,S()),m()}}function L(e){let s=e.manifest||{},n=e.validation||{},i="";if(!n.syntax_ok)i=R(n.syntax_err,e);else if(Object.keys(s).length===0)i=P(e);else{let a=(n.deps||[]).some(t=>t.status==="missing");i=K(s,n,e,a)}y(2,`<div class="admin-pu-step2">${i}</div>`),A()}function R(e,s){let n=e&&e.line?e.line:"?",i=e&&e.msg?e.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${n}</span>
        </div>
        <pre class="admin-pu-syntax-body">${b(`>>> ${s.filename}
${i}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function P(e){return`
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
      </footer>`}function k(e){return e==null?"is-muted":e<=10?"is-danger":e<=50?"is-warn":"is-cyan"}function x(e){if(e==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let s=k(e),n=e<=10?"CRITICAL":e<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${s}">${e} \xB7 ${n}</span>`}function K(e,s,n,i){let a=e.name||n.filename.replace(/\.(py|js)$/i,""),t=e.version?`v${b(e.version)}`:"\u2014",o=e.author?`@${b(e.author.replace(/^@/,""))}`:"\u2014",c=e.description||ServerI18n.t("pluginsUploadNoDescription"),u=n.filename.endsWith(".js")?"JS":"PY",l=u==="PY"?"is-warn":"is-cyan",v=Array.isArray(e.permissions)?e.permissions:[],g=Object.keys(w).map(H=>{let B=v.includes(H);return`
        <div class="admin-pu-perm-row ${B?"is-req":"is-not"}">
          <span class="dot">${B?"\u25CF":"\u25CB"}</span>
          <span class="key">${b(H)}</span>
          <span class="label">${b(ServerI18n.t(w[H]))}</span>
        </div>`}).join(""),E=s.deps||[],T=E.map(H=>{let B=H.status==="ok"?"is-ok":H.status==="warn"?"is-warn":"is-err",$=H.status==="ok"?"\u2713":H.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${B}">
          <span class="dot">${$}</span>
          <span class="name">${b(H.name)}</span>
          <span class="note">${b(H.note||"")}</span>
        </div>`}).join(""),I=s.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${b(a)}</span>`})}
      </div>`:"",C=E.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${T}</div>
      </section>`;return`
      ${I}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${b(a)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${t}</span>
          <span class="author">${o}</span>
          <span class="admin-ui-pill admin-pu-pill ${l}" style="margin-left:auto">${u}</span>
        </div>
        <div class="admin-pu-manifest-desc">${b(c)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${x(e.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${g}</div>
        </section>
        ${C}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${i?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${i?"disabled":""} data-pu-confirm>${i?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function A(){let e=h.querySelector("[data-pu-back]");e&&e.addEventListener("click",()=>{f.file=null,f.manifest=null,f.validation=null,y(1,S()),m()});let s=h.querySelector("[data-pu-confirm]");s&&s.addEventListener("click",()=>N());let n=h.querySelector("[data-pu-no-manifest-ack]");n&&s&&n.addEventListener("change",()=>{s.disabled=!n.checked})}function N(){let e=f.manifest||{},s=e.name||(f.filename||"").replace(/\.(py|js)$/i,""),n=e.version?`v${b(e.version)}`:"\u2014",i=Array.isArray(e.permissions)?e.permissions:[],a=i.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:i.map(c=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${b(c)}</span></div>`).join("");y(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${b(s)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${n}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${a}</div>
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
      </div>`);let t=h.querySelector("[data-pu-install]");t&&t.addEventListener("click",p);let o=h.querySelector("[data-pu-back]");o&&o.addEventListener("click",()=>L(f))}async function p(){y(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let e=new FormData;e.append("file",f.file);let s=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:e}),n=await s.json().catch(()=>({}));if(!s.ok){window.showToast?.(n.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:s.status}),!1),L(f);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:n.name||f.filename}),!0),r();let i=document.getElementById("pluginsReloadBtn");i&&i.click()}catch(e){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:e.message||""}),!1),L(f)}}function d(){_(),f={step:1,file:null,manifest:null,validation:null,filename:null},y(1,S()),m(),h.hidden=!1,document.body.classList.add("admin-pu-open")}function r(){h&&(h.hidden=!0,document.body.classList.remove("admin-pu-open"),f=null)}window.AdminPluginUpload={open:d,close:r},document.addEventListener("click",e=>{e.target.closest("#pluginsUploadBtn")&&(e.preventDefault(),d())})})()});var pt=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let w="sec-webhooks",h=12e3,f=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function _(a,t){return a?a.length>t?a.slice(0,t)+"\u2026":a:""}function z(a){if(!a)return"\u2014";try{let t=new Date(a),o=Math.max(0,(Date.now()-t.getTime())/1e3);return o<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(o)}):o<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(o/60)}):o<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(o/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(o/86400)})}catch{return"\u2014"}}function y(a){if(!a)return"\u2014";try{return new URL(a).hostname}catch{return _(a,30)}}function S(a){return a==="active"?"is-success":a==="degraded"?"is-warn":"is-muted"}let m={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:f,eventCatalogLoaded:!1};function D(){let a=document.getElementById("advanced-grid")||document.getElementById("settings-grid");!a||document.getElementById(w)||(a.insertAdjacentHTML("beforeend",`
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
    `),q())}function q(){let a=document.getElementById(w);if(!a)return;let t=document.getElementById("wh-register-form");t&&t.addEventListener("submit",async o=>{o.preventDefault();let c=document.getElementById("wh-url").value.trim();if(!c)return;let u=Array.from(t.querySelectorAll('input[name="wh-event"]:checked')).map(E=>E.value);if(u.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let l=document.getElementById("wh-format").value,v=document.getElementById("wh-secret").value.trim(),g={url:c,events:u,format:l};v&&(g.secret=v);try{let E=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}),T=await E.json();E.ok&&T.hook_id?(showToast(ServerI18n.t("webhookRegistered")),t.reset(),x(),t.hidden=!0,await M()):showToast(T.error||ServerI18n.t("registrationFailed"),!1)}catch(E){console.error("Webhook register error:",E),showToast(ServerI18n.t("registrationFailed"),!1)}}),a.querySelectorAll(".admin-ui-page-actions [data-wh-action='show-add']").forEach(o=>o.addEventListener("click",()=>{t&&(t.hidden=!1)})),a.addEventListener("click",o=>{if(o.target.closest("[data-wh-action='show-add']")){t&&(t.hidden=!1);return}if(o.target.closest("[data-wh-action='hide-add']")){t&&(t.hidden=!0);return}let l=o.target.closest("[data-wh-log-filter]");if(l){m.deliveryFilter=l.dataset.whLogFilter,a.querySelectorAll("[data-wh-log-filter]").forEach(B=>{B.classList.toggle("is-active",B.dataset.whLogFilter===m.deliveryFilter)}),d();return}let v=o.target.closest("[data-wh-action='test']");if(v){o.stopPropagation(),s(v.dataset.whHookId);return}let g=o.target.closest("[data-wh-action='settings']");if(g){o.stopPropagation(),r(g.dataset.whHookId);return}if(o.target.closest("[data-wh-action='close-detail']")){m.selectedHookId=null,e(),N();return}let T=o.target.closest("[data-wh-action='detail-ping']");if(T){s(T.dataset.whHookId);return}let I=o.target.closest("[data-wh-action='detail-toggle']");if(I){n(I.dataset.whHookId,I.dataset.whNextEnabled==="1");return}let C=o.target.closest("[data-wh-action='detail-delete']");if(C){i(C.dataset.whHookId);return}let H=o.target.closest("[data-wh-hook-row]");if(H&&!o.target.closest("button")){r(H.dataset.whHookId);return}}),m.stopPoll||(m.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(w)},intervalMs:h,tick:M}))}async function M(){await P(),await Promise.all([L(),R()]),K(),N(),d(),e()}async function L(){try{let t=await(await csrfFetch("/admin/webhooks/list")).json();m.hooks=Array.isArray(t.webhooks)?t.webhooks:[]}catch{m.hooks=[]}}async function R(){try{let a=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!a.ok)return;let t=await a.json();m.deliveries=Array.isArray(t.deliveries)?t.deliveries:[],m.stats=t.stats||null}catch{}}async function P(){if(!m.eventCatalogLoaded)try{let a=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(a.ok){let t=await a.json(),o=Array.isArray(t.events)?t.events:[];o.length&&(m.eventCatalog=o)}}catch{}finally{m.eventCatalogLoaded=!0,x()}}function k(a){let t=a&&a.slug?String(a.slug):"";if(a&&a.labelKey){let v=ServerI18n.t(a.labelKey);return{slug:t,label:v?v+" \xB7 "+t:t,title:v}}let o=a&&a.zh?String(a.zh):"",c=a&&a.en?String(a.en):"",u=window.ServerI18n&&ServerI18n.currentLang||"zh",l=(a&&a[u]?String(a[u]):"")||c||o;return{slug:t,label:l?l+" \xB7 "+t:t,title:o&&c?o+" \xB7 "+c:o||c}}function x(){let a=document.querySelector("[data-wh-register-events]");a&&(a.innerHTML=m.eventCatalog.map(function(t){let o=k(t);if(!o.slug)return"";let c=o.slug==="on_danmu"?" checked":"";return'<label title="'+b(o.title)+'"><input type="checkbox" name="wh-event" value="'+b(o.slug)+'"'+c+" /> "+b(o.label)+"</label>"}).join(""))}function K(){let a=document.querySelector("[data-wh-stats]");if(!a)return;let t=m.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};a.innerHTML=`
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
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel",{n:A()})}</div>
        <div class="v" style="color:${t.dropped_24h>0?"var(--hud-crimson)":"var(--color-text-secondary)"}">${t.dropped_24h}</div>
      </div>`}function A(){return m.hooks.length&&m.hooks[0].retry_count||3}function N(){let a=document.getElementById("wh-list"),t=document.querySelector("[data-wh-count]");if(a){if(t&&(t.textContent=String(m.hooks.length)),m.hooks.length===0){a.innerHTML="";let o=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let c=document.getElementById("wh-register-form");c&&(c.hidden=!1),document.getElementById("wh-url")?.focus()}});o.dataset.emptyKind="webhooks",a.appendChild(o);return}a.innerHTML=m.hooks.map(p).join("")}}function p(a){let t=b(a.id||""),o=Number(a.success_count)||0,c=Number(a.fail_count)||0,u=o+c,l=u>0?Math.round(o/u*1e3)/10:100,v=a.enabled!==!1,g=Number(a.last_status)||null,E=v?g&&g>=400||a.last_error?"degraded":"active":"paused",T=E==="active"?"var(--hud-lime)":E==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",I=E==="active"?"ACTIVE":E==="degraded"?"DEGRADED":"PAUSED",C=m.selectedHookId===a.id?" is-selected":"",H=S(E),B=(a.events||[]).map(function(j){return'<span class="admin-ui-pill admin-wh-evt-chip">'+b(j)+"</span>"}).join(""),$=a.last_error?'<div class="admin-wh-card-warn">\u26A0 '+b(_(a.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${C}" data-wh-hook-row data-wh-hook-id="${t}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${T};box-shadow:${v?"0 0 6px "+T:"none"}"></span>
          <span class="name">${b(y(a.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${H}">${I}</span>
          <span class="last">last \xB7 ${b(z(a.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${b(a.url)}</div>
        <div class="admin-wh-card-events">${B}</div>
        ${$}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${l}%;background:${T}"></div></div>
            <span class="pct" style="color:${T}">${l}%</span>
          </div>
          <span class="counter ok">\u2713 ${o.toLocaleString()}</span>
          <span class="counter ${c>0?"fail":"fail-zero"}">\u2717 ${c}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${t}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${t}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function d(){let a=document.getElementById("wh-log-list");if(!a)return;let t=m.deliveries.filter(function(o){return m.deliveryFilter==="all"?!0:m.deliveryFilter==="failed"?!o.ok:m.deliveryFilter==="2xx"?o.code&&o.code>=200&&o.code<300:m.deliveryFilter==="5xx"?o.code&&o.code>=500:!0});if(t.length===0){a.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}a.innerHTML=t.map(function(o){let c=o.ts?new Date(o.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",u=o.code?String(o.code):"\u2014",l=o.ok?"var(--hud-lime)":"var(--hud-crimson)",v=o.duration_ms?o.duration_ms>=1e3?(o.duration_ms/1e3).toFixed(1)+"s":o.duration_ms+"ms":"\u2014",g=o.ok?"var(--color-text-strong)":"var(--hud-amber)",E=b(y(o.hook_url||"")),T=(o.retries||0)===0?"\u2014":"\xD7"+o.retries,I=(o.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${o.dropped?" is-dropped":""}">
          <span class="time">${b(c)}</span>
          <span class="code" style="color:${l};border-color:${l}55;background:${l}15;">${u}</span>
          <span class="dur" style="color:${g}">${b(v)}</span>
          <span class="ep">${E}</span>
          <span class="evt">${b(o.event||"")}</span>
          <span class="retry" style="color:${I}">${T}</span>
        </div>`}).join("")}function r(a){m.selectedHookId=a,N(),e()}function e(){let a=document.querySelector("[data-wh-detail]");if(!a)return;let t=m.hooks.find(function(E){return E.id===m.selectedHookId});if(!t){a.hidden=!0,a.innerHTML="";return}a.hidden=!1;let o=t.enabled!==!1,c=Number(t.last_status)||null,u=o?c&&c>=400||t.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",l=new Set(t.events||[]),v=m.eventCatalog.map(function(E){let T=k(E),I=l.has(T.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(I?"is-active is-on":"")+'" title="'+b(T.title)+'"><span aria-hidden="true">'+(I?"\u2713":"\u25CB")+"</span><span>"+b(T.label)+"</span></label>"}).join(""),g={event:t.events&&t.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:t.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};a.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+u+";box-shadow:0 0 6px "+u+'"></span><span class="name">'+b(y(t.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+v+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(t.retry_count!=null?t.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(t.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+b(JSON.stringify(g,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+b(t.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+b(t.id)+'" data-wh-next-enabled="'+(o?"0":"1")+'">'+(o?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+b(t.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function s(a){if(a)try{let t=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:a})}),o=await t.json();t.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(o.error||ServerI18n.t("testFailed"),!1),setTimeout(M,1500)}catch(t){console.error("Webhook test error:",t),showToast(ServerI18n.t("testFailed"),!1)}}async function n(a,t){if(a)try{let o=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:a,enabled:t})}),c=await o.json();if(!o.ok){showToast(c.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let u=m.hooks.find(function(l){return l.id===a});u&&(u.enabled=c.enabled),showToast(c.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),K(),N(),e()}catch(o){console.error("Webhook toggle error:",o),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function i(a){if(!(!a||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let o=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:a})}),c=await o.json();o.ok?(showToast(ServerI18n.t("webhookDeleted")),m.selectedHookId===a&&(m.selectedHookId=null),M()):showToast(c.error||ServerI18n.t("deleteFailed"),!1)}catch(o){console.error("Webhook delete error:",o),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(w)&&D()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),D()})})()});var vt=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let w="sec-sounds",h=null,f=[],_=[];async function z(){try{let d=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!d.ok)throw new Error(await d.text());let r=await d.json();f=r.sounds||[],_=r.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",f.length||"")}catch(d){console.error("Failed to fetch sounds:",d),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),f=[],_=[]}}async function y(){return z()}async function S(d,r){let e=new FormData;e.append("file",d),e.append("name",r);let s=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:e}),n=await s.json();if(!s.ok)throw new Error(n.error||"Upload failed");return n}async function m(d){let r=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})}),e=await r.json();if(!r.ok)throw new Error(e.error||"Delete failed");return e}async function D(d){let r=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}),e=await r.json();if(!r.ok)throw new Error(e.error||"Failed to add rule");return e}async function q(d){let r=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:d})}),e=await r.json();if(!r.ok)throw new Error(e.error||"Failed to delete rule");return e}function M(){let d=document.getElementById("soundsList");if(d){if(f.length===0){d.innerHTML="";var r=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});r.dataset.emptyKind="sounds",r.style.gridColumn="1 / -1",d.appendChild(r);return}d.innerHTML=f.map(function(s){var n=b(s.name),i=Math.round((s.volume!=null?s.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+b(s.name)+'"><div class="name" title="'+n+'">'+n+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+b(s.name)+'" min="0" max="100" step="1" value="'+i+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+b(s.name)+'" style="min-width:32px;text-align:right">'+i+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+b(s.name)+'">'+b(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+b(s.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),d.querySelectorAll(".sound-play-btn").forEach(function(s){s.addEventListener("click",function(){var n=s.dataset.name,i=f.find(function(a){return a.name===n});i&&(h&&(h.pause(),h=null),h=new Audio(i.url),h.volume=.5,h.play().catch(function(a){console.warn("Audio preview failed:",a)}))})}),d.querySelectorAll(".sound-delete-btn").forEach(function(s){s.addEventListener("click",async function(){var n=s.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",n),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await m(n),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",n),!0),await z(),M(),R()}catch(a){window.showToast(a.message,!1)}})});var e={};d.querySelectorAll(".sound-volume-slider").forEach(function(s){var n=s.dataset.name,i=d.querySelector('.sound-volume-label[data-name="'+CSS.escape(n)+'"]');s.addEventListener("input",function(){i&&(i.textContent=s.value+"%"),clearTimeout(e[n]),e[n]=setTimeout(function(){L(n,Number(s.value)/100)},300)}),s.addEventListener("change",function(){clearTimeout(e[n]),L(n,Number(s.value)/100)})})}}async function L(d,r){try{var e=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(d)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:r})}),s=await e.json();if(!e.ok){window.showToast(s.error||"Volume update failed",!1);return}var n=f.find(function(i){return i.name===d});n&&(n.volume=r),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(r*100)}),!0)}catch(i){console.warn("[admin-sounds] volume save failed:",i),window.showToast("Network error",!1)}}function R(){let d=document.getElementById("ruleSoundName");if(!d)return;let r=d.value;if(d.innerHTML="",f.length===0){let e=document.createElement("option");e.value="",e.textContent=ServerI18n.t("noSoundsAvailable"),e.disabled=!0,d.appendChild(e);return}f.forEach(e=>{let s=document.createElement("option");s.value=e.name,s.textContent=e.name,d.appendChild(s)}),r&&[...d.options].some(e=>e.value===r)&&(d.value=r)}function P(){let d=document.getElementById("rulesList");if(d){if(_.length===0){d.innerHTML="";var r=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});r.dataset.emptyKind="sound-rules",d.appendChild(r);return}d.innerHTML=_.map(function(e){var s=e.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):e.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",e.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",e.trigger_value),n=Math.round((e.volume!=null?e.volume:1)*100),i=ServerI18n.t("soundDetailLine").replace("{sound}",e.sound_name).replace("{vol}",n).replace("{cd}",e.cooldown!=null?e.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+b(String(e.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+b(s)+'</div><div class="admin-sounds-rule-detail">'+b(i)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+b(String(e.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),d.querySelectorAll(".sound-rule-del-btn").forEach(function(e){e.addEventListener("click",async function(){try{await q(e.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await y(),P()}catch(s){window.showToast(s.message,!1)}})})}}function k(){let d=document.getElementById("soundUploadBtn");d&&d.addEventListener("click",async()=>{let r=document.getElementById("soundFileInput"),e=document.getElementById("soundNameInput"),s=r.files[0];if(!s){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let n=e.value.trim();if(!n){window.showToast(ServerI18n.t("enterSoundName"),!1);return}d.disabled=!0,d.textContent=ServerI18n.t("uploadingStatus");try{await S(s,n),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",n),!0),r.value="",e.value="",await z(),M(),R()}catch(i){window.showToast(i.message,!1)}finally{d.disabled=!1,d.textContent=ServerI18n.t("soundsUploadIdle")}})}function x(){let d=document.getElementById("addRuleBtn");d&&d.addEventListener("click",async()=>{let r=document.getElementById("ruleTriggerType").value,e=document.getElementById("ruleTriggerValue").value.trim(),s=document.getElementById("ruleSoundName").value,n=document.getElementById("ruleVolume"),i=document.getElementById("ruleCooldown");if(r!=="all"&&!e){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!s){window.showToast(ServerI18n.t("selectSound"),!1);return}let a=parseInt(n.value,10)/100,t=parseInt(i.value,10)||0,o={trigger_type:r,trigger_value:r==="all"?"":e,sound_name:s,volume:Math.max(0,Math.min(1,a)),cooldown:Math.max(0,t)};d.disabled=!0;try{await D(o),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await y(),P()}catch(c){window.showToast(c.message,!1)}finally{d.disabled=!1}})}function K(){let d=document.getElementById("ruleTriggerType"),r=document.getElementById("ruleTriggerValue");if(!d||!r)return;function e(){d.value==="all"?(r.disabled=!0,r.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),r.value=""):d.value==="keyword"?(r.disabled=!1,r.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):d.value==="effect"&&(r.disabled=!1,r.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}d.addEventListener("change",e),e()}function A(){let d=document.getElementById("ruleVolume"),r=document.getElementById("ruleVolumeLabel");!d||!r||d.addEventListener("input",()=>{r.textContent=d.value+"%"})}function N(){return`
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
    `}async function p(){let d=document.getElementById("settings-grid");if(d){if(d.insertAdjacentHTML("beforeend",N()),window.AdminSkeletons){let r=document.getElementById("soundsList");r&&(r.innerHTML="",r.appendChild(window.AdminSkeletons.listRows({rows:3})));let e=document.getElementById("rulesList");e&&(e.innerHTML="",e.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([z(),y()]),M(),R(),P(),k(),x(),K(),A()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let d=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(w)&&!d&&(d=!0,p().finally(()=>{d=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(w)&&(d=!0,p().finally(()=>{d=!1}))})})()});var ft=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let w=/^[a-zA-Z0-9_]{1,32}$/,h=".png,.gif,.webp",f="sec-emojis",_=[];function z(){return`
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
              <input id="emojiFileInput" type="file" accept="${h}" />
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
    `}function y(A){let N=":"+A.name+":",p=Number(A.used)||0,d=p>0?ServerI18n.t("emojisUsedCount",{n:p}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+D(A.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+D(A.url)+'" alt="'+D(N)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+b(N)+'</div><div class="admin-em-v4__tile-meta">'+b(d)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+D(N)+'" title="'+D(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+D(A.name)+'" title="'+D(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function S(A){let N=document.querySelector("[data-em-quota-label]"),p=document.querySelector("[data-em-quota-fill]");if(!N||!p)return;let d=A.length,r=100;N.textContent=ServerI18n.t("emojisQuotaUsed",{n:d,max:r}),p.style.width=Math.min(100,d/r*100)+"%"}function m(A){let N=document.querySelector("[data-em-preview-body]");if(!N)return;if(!A||A.length===0){N.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let d=A.slice(0,3).map(r=>`<span class="admin-em-v4__preview-pair"><code>:${b(r.name)}:</code> \u2192 <img src="${D(r.url)}" alt=":${D(r.name)}:" /></span>`);N.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:d.join(" \xB7 ")})}function D(A){return b(A)}function q(A){var N=document.getElementById("emojiGrid"),p=document.getElementById("emojiCount");N&&(!A||A.length===0?(window.AdminEmpty?(N.innerHTML="",N.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var d=document.getElementById("emojiFileInput");d&&d.click()}}))):N.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("noEmojisUploaded"))+"</div>",p&&(p.textContent="0")):(N.innerHTML=A.map(y).join(""),p&&(p.textContent=String(A.length))),S(_),m(_))}function M(){var A=document.getElementById("emojiGrid");if(A)if(window.AdminSkeletons){A.innerHTML="";for(var N=0;N<8;N++){var p=document.createElement("div");p.className="admin-em-v4__tile admin-em-v4__tile--skel";var d=document.createElement("div");d.className="admin-em-v4__tile-thumb";var r=document.createElement("div");r.className="admin-skel",r.style.width="100%",r.style.height="100%",d.appendChild(r),p.appendChild(d);var e=document.createElement("div");e.className="admin-skel admin-skel-bar",e.style.width="60%",e.style.height="8px",e.style.margin="6px auto",p.appendChild(e),A.appendChild(p)}}else A.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadingEmojis"))+"</div>"}async function L(){try{var A=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!A.ok)throw new Error("HTTP "+A.status);var N=await A.json();_=N.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",_.length||""),R()}catch(d){console.error("[admin-emojis] fetch failed:",d);var p=document.getElementById("emojiGrid");p&&(p.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function R(){var A=document.getElementById("emojiSearchInput"),N=(A&&A.value||"").trim().toLowerCase(),p=N?_.filter(function(d){return(d.name||"").toLowerCase().includes(N)}):_;q(p)}async function P(){var A=document.getElementById("emojiNameInput"),N=document.getElementById("emojiFileInput"),p=document.getElementById("emojiUploadBtn");if(!(!A||!N||!p)){var d=A.value.trim(),r=N.files&&N.files[0];if(!d){showToast(ServerI18n.t("emojiNameRequired"),!1),A.focus();return}if(!w.test(d)){showToast(ServerI18n.t("emojiNameInvalid"),!1),A.focus();return}if(!r){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var e=r.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(e)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}p.disabled=!0,p.textContent=ServerI18n.t("uploadingStatus");try{var s=new FormData;s.append("name",d),s.append("emojifile",r);var n=await csrfFetch("/admin/emojis/upload",{method:"POST",body:s}),i=await n.json();n.ok?(showToast(i.message||ServerI18n.t("emojiUploadFallback")),A.value="",N.value="",await L()):showToast(i.error||ServerI18n.t("uploadFailed"),!1)}catch(a){console.error("[admin-emojis] upload error:",a),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{p.disabled=!1,p.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function k(A){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",A),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var p=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A})}),d=await p.json();p.ok?(showToast(d.message||ServerI18n.t("emojiDeleteFallback")),await L()):showToast(d.error||ServerI18n.t("deleteFailed"),!1)}catch(r){console.error("[admin-emojis] delete error:",r),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function x(A){try{await navigator.clipboard.writeText(A),showToast(ServerI18n.t("copiedLabel").replace("{label}",A))}catch{var N=document.createElement("textarea");N.value=A,N.style.position="fixed",N.style.opacity="0",document.body.appendChild(N),N.select(),document.execCommand("copy"),document.body.removeChild(N),showToast(ServerI18n.t("copiedLabel").replace("{label}",A))}}function K(){var A=document.getElementById("settings-grid");if(A){A.insertAdjacentHTML("beforeend",z());var N=document.getElementById("emojiUploadBtn");N&&N.addEventListener("click",P);var p=document.getElementById("emojiNameInput");p&&p.addEventListener("keydown",function(n){n.key==="Enter"&&(n.preventDefault(),P())});var d=document.getElementById("emojiSearchInput");d&&d.addEventListener("input",R);var r=document.getElementById("emojiGrid");r&&r.addEventListener("click",function(n){var i=n.target.closest(".emoji-copy-btn");if(i){x(i.dataset.label);return}var a=n.target.closest(".emoji-delete-btn");a&&k(a.dataset.name)});var e=document.querySelector("[data-em-dropzone]"),s=document.getElementById("emojiFileInput");e&&s&&(["dragenter","dragover"].forEach(function(n){e.addEventListener(n,function(i){i.preventDefault(),e.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(n){e.addEventListener(n,function(i){i.preventDefault(),e.classList.remove("is-dragover")})}),e.addEventListener("drop",function(n){var i=n.dataTransfer&&n.dataTransfer.files&&n.dataTransfer.files[0];if(i){var a=new DataTransfer;a.items.add(i),s.files=a.files;var t=document.getElementById("emojiNameInput");if(t&&!t.value){var o=i.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");t.value=o.slice(0,32),t.focus()}e.classList.add("is-dropping"),setTimeout(function(){e.classList.remove("is-dropping")},1200)}})),M(),L()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var A=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(f)&&K()});A.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&K()}})})()});var ht=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml,w="sec-stickers",h=["png","gif","webp"],f=".gif,.png,.webp",_="__all__",z=[],y=[],S=_;function m(d){return b(d)}function D(){var d=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,r=d?`
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
            ${d?`<div class="admin-ui-card">${r}</div>`:""}

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
    `}function q(d){return d===_?z.length:z.filter(function(r){return r.pack_id===d}).length}function M(){var d=document.getElementById("stickerPackList");if(d){var r='<button type="button" class="admin-stickers-pack'+(S===_?" is-active":"")+'" data-pack="'+_+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+q(_)+"</span></button>";y.forEach(function(e){var s=e.enabled?"is-success":"is-muted",n="admin-stickers-pack"+(e.id===S?" is-active":""),i=e.id==="default",a=i?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+m(e.id)+'" title="'+(e.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(e.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";r+='<div class="'+n+'" data-pack="'+m(e.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+m(e.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+s+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+b(e.name)+'</span><span class="admin-stickers-pack-count">'+q(e.id)+"</span></button>"+a+"</div>"}),d.innerHTML=r}}function L(d){var r=":"+d.name+":";return'<div class="admin-stickers-tile"><img src="'+m(d.url)+'" alt="'+m(r)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+m(r)+'">'+b(r)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+m(r)+'" title="'+m(ServerI18n.t("copyToClipboard"))+'">'+b(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+m(d.name)+'" title="'+m(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function R(){var d=document.getElementById("stickerGrid"),r=document.getElementById("stickerCount");if(d){var e=document.getElementById("stickerSearchInput"),s=(e&&e.value||"").trim().toLowerCase(),n=z.filter(function(a){return!(S!==_&&a.pack_id!==S||s&&!(a.name||"").toLowerCase().includes(s))});if(n.length===0){d.innerHTML="";var i=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});i.dataset.emptyKind="stickers",i.style.gridColumn="1 / -1",d.appendChild(i),r&&(r.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}d.innerHTML=n.map(L).join(""),r&&(r.textContent=ServerI18n.t("stickersItemCount",{n:n.length}))}}async function P(){var d=document.getElementById("stickerGrid");if(d)try{var[r,e]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!r.ok)throw new Error("HTTP "+r.status);z=(await r.json()).stickers||[],y=e.ok?(await e.json()).packs||[]:[],S!==_&&!y.some(function(s){return s.id===S})&&(S=_),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",y.length?ServerI18n.t("tabCountPacks",{n:y.length}):""),M(),R()}catch(s){console.error("[admin-stickers] fetch failed:",s),d.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function k(d,r){if(d==="select"){S=r,M(),R();return}if(d==="rename"){var e=y.find(function(E){return E.id===r}),s=prompt(ServerI18n.t("stickersPackNamePrompt"),e?e.name:"");if(!s)return;try{var n=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s})}),i=await n.json();n.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await P()):window.showToast(i.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(d==="toggle"){try{var a=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r)+"/toggle",{method:"POST"});a.ok&&await P()}catch{}return}if(d==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var t=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r),{method:"DELETE"}),o=await t.json();t.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),S===r&&(S=_),await P()):window.showToast(o.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(d==="up"||d==="down"){var c=y.slice().sort(function(E,T){return(E.order||0)-(T.order||0)}),u=c.findIndex(function(E){return E.id===r});if(u<0)return;var l=d==="up"?u-1:u+1;if(l<0||l>=c.length)return;var v=c[u],g=c[l];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(v.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:g.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(g.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:v.order||0})})]),await P()}catch{}}}async function x(){var d=prompt(ServerI18n.t("stickersNewPackPrompt"));if(d)try{var r=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})}),e=await r.json();r.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),S=e.pack&&e.pack.id?e.pack.id:S,await P()):window.showToast(e.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function K(){var d=document.getElementById("stickerFileInput"),r=document.getElementById("stickerUploadBtn");if(!(!d||!r)){var e=d.files&&d.files[0];if(!e){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var s=e.name.split(".").pop().toLowerCase();if(h.indexOf(s)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}r.disabled=!0;var n=r.textContent;r.textContent=ServerI18n.t("uploadingStatus");try{var i=new FormData;i.append("file",e),S&&S!==_&&i.append("pack_id",S);var a=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:i}),t=await a.json();a.ok?(window.showToast(t.message||ServerI18n.t("stickerUploadFallback")),d.value="",await P()):window.showToast(t.error||ServerI18n.t("uploadFailed"),!1)}catch(o){console.error("[admin-stickers] upload error:",o),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{r.disabled=!1,r.textContent=n}}}async function A(d){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",d),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var e=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(d),{method:"DELETE"}),s=await e.json();e.ok?(window.showToast(s.message||ServerI18n.t("stickerDeleteFallback")),await P()):window.showToast(s.error||ServerI18n.t("deleteFailed"),!1)}catch(n){console.error("[admin-stickers] delete error:",n),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function N(d){try{await navigator.clipboard.writeText(d),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",d))}catch{var r=document.createElement("textarea");r.value=d,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",d))}}function p(){var d=document.getElementById("settings-grid");if(d){d.insertAdjacentHTML("beforeend",D());var r=document.getElementById("stickerUploadBtn");r&&r.addEventListener("click",K);var e=document.getElementById("stickerPackAddBtn");e&&e.addEventListener("click",x);var s=document.getElementById("stickerSearchInput");s&&s.addEventListener("input",R);var n=document.getElementById("stickerPackList");n&&n.addEventListener("click",function(a){var t=a.target.closest("[data-pack-action]");if(!t){var o=a.target.closest("[data-pack]");o&&k("select",o.dataset.pack);return}var c=t.dataset.packAction,u=t.dataset.packId;c==="select"&&!u&&(u=t.closest("[data-pack]")&&t.closest("[data-pack]").dataset.pack),k(c,u)});var i=document.getElementById("stickerGrid");i&&i.addEventListener("click",function(a){var t=a.target.closest(".sticker-copy-btn");if(t){N(t.dataset.label);return}var o=a.target.closest(".sticker-delete-btn");o&&A(o.dataset.name)}),P()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var d=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(w)&&p()});d.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(w)&&p()}})})()});var gt=me(()=>{(function(){"use strict";let b="sec-extensions-overview",w=window.AdminUtils.escapeHtml,h=15e3,f=[{id:"slido",name:"Slido Extension",version:"v0.2.0",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload",href:"/static/extensions/danmu-slido-extension-0.2.0.zip"},{kind:"config",labelKey:"extSlidoStepConfig"}]},hasFireTokenUI:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],_={fireToken:null,plainToken:null,sources:[],sourcesTimer:0};function z(){return`
      <div id="${b}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${f.map(y).join("")}
        </div>
      </div>`}function y(k){let x=k.status==="ready",K="is-cold",A=x?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,N=x&&k.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${k.install.steps.map(d=>d.kind==="download"?`<li><a class="admin-ext-step-link" href="${d.href}" target="_blank" rel="noopener noreferrer">${w(ServerI18n.t(d.labelKey))} \u2193</a></li>`:`<li>${w(ServerI18n.t(d.labelKey))}</li>`).join("")}
          </ol>
        </div>`:"",p=k.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
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
      <article class="admin-ext-card" data-ext="${k.id}">
        <div class="admin-ext-head">
          <span class="admin-ext-status-dot ${K}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${k.color}">${k.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${w(k.name)}</div>
            <div class="meta"><span class="ver">${w(k.version)}</span></div>
          </div>
          ${A}
        </div>
        <p class="admin-ext-desc">${w(ServerI18n.t(k.descKey))}</p>
        ${N}
        ${p}
      </article>`}async function S(){try{let k=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!k.ok)return;_.fireToken=await k.json(),L()}catch{}}async function m(){try{let k=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!k.ok)return;let x=await k.json();_.sources=Array.isArray(x.sources)?x.sources:[],R()}catch{}}async function D(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let x=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!x.ok)throw new Error("HTTP "+x.status);let K=await x.json();_.fireToken={enabled:K.enabled,prefix:K.prefix,has_token:!0,rotated_at:K.rotated_at},_.plainToken=K.token,L(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenGenerated"),!0),M(K.token)}catch(x){console.warn("[ext] regen failed:",x),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function q(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let x=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!x.ok)throw new Error("HTTP "+x.status);_.fireToken=await x.json(),_.plainToken=null,L(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(x){console.warn("[ext] revoke failed:",x),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function M(k){if(k)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(k).catch(()=>{});else{let x=document.createElement("textarea");x.value=k,x.style.position="fixed",x.style.opacity="0",document.body.appendChild(x),x.select();try{document.execCommand("copy")}catch{}document.body.removeChild(x)}}function L(){let k=document.querySelector("[data-fire-token-display]"),x=document.querySelector('[data-fire-token-action="copy"]'),K=document.querySelector('[data-fire-token-action="regen"]'),A=document.querySelector('[data-fire-token-action="revoke"]');if(!k)return;let N=_.fireToken;_.plainToken?(k.textContent=_.plainToken,k.classList.add("is-plain")):N&&N.has_token?(k.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:N.prefix||""}),k.classList.remove("is-plain")):(k.textContent=ServerI18n.t("extTokenNotSetHint"),k.classList.remove("is-plain")),x&&(x.disabled=!_.plainToken),K&&(K.textContent=N&&N.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),A&&(A.disabled=!(N&&N.has_token))}function R(){let k=new Set(_.sources.map(x=>x.source));document.querySelectorAll(".admin-ext-card").forEach(x=>{let K=f.find(p=>p.id===x.dataset.ext);if(!K)return;let A=x.querySelector("[data-ext-dot]");if(!A)return;let N=K.sourceMatch&&k.has(K.sourceMatch);A.classList.toggle("is-live",!!N),A.classList.toggle("is-cold",!N)})}function P(){let k=document.getElementById("settings-grid");if(!k||document.getElementById(b))return;k.insertAdjacentHTML("beforeend",z());let x=document.getElementById(b);x&&x.addEventListener("click",K=>{let A=K.target.closest("[data-fire-token-action]");if(!A)return;let N=A.dataset.fireTokenAction;N==="regen"?D():N==="revoke"?q():N==="copy"&&_.plainToken&&(M(_.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),S(),_.stopPoll||(_.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(b)},intervalMs:h,tick:m}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&P()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&P()})})()});var bt=me(()=>{(function(){"use strict";let b="sec-firetoken-overview",w=window.AdminUtils.escapeHtml,h=15e3,f={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function _(){return`
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
    `}async function z(){await Promise.all([y(),S(),m()])}async function y(){try{let p=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!p.ok)return;f.token=await p.json(),P()}catch{}}async function S(){try{let p=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!p.ok)return;let d=await p.json();f.usage24h=Array.isArray(d.usage_24h)?d.usage_24h:[],f.ips=Array.isArray(d.ips)?d.ips:[],x(),K(),k()}catch{}}async function m(){try{let p=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!p.ok)return;let d=await p.json();f.audit=Array.isArray(d.events)?d.events:[],A()}catch{}}async function D(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let d=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!d.ok)throw new Error("HTTP "+d.status);let r=await d.json();f.token={enabled:r.enabled,prefix:r.prefix,has_token:!0,rotated_at:r.rotated_at,created_at:r.created_at||r.rotated_at},f.plainToken=r.token,P(),M(r.token),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerated"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function q(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let d=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!d.ok)throw new Error("HTTP "+d.status);f.token=await d.json(),f.plainToken=null,P(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function M(p){if(p)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(p).catch(()=>{});else{let d=document.createElement("textarea");d.value=p,d.style.position="fixed",d.style.opacity="0",document.body.appendChild(d),d.select();try{document.execCommand("copy")}catch{}document.body.removeChild(d)}}function L(p){if(!p)return"\u2014";let d=Date.now()/1e3-p;return d<60?ServerI18n.t("firetokenJustNow"):d<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(d/60)}):d<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(d/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(d/86400)})}function R(p){if(!p)return"\u2014";try{return new Date(p*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function P(){let p=f.token,d=document.querySelector("[data-ft-token-display]"),r=document.querySelector("[data-ft-status]"),e=document.querySelector('[data-ft-action="copy"]'),s=document.querySelector('[data-ft-action="regen"]'),n=document.querySelector('[data-ft-action="revoke"]'),i=document.querySelector('[data-ft-stat="created"]'),a=document.querySelector('[data-ft-stat="rotated"]'),t=document.getElementById("adminFtCurl");if(d&&(f.plainToken?(d.textContent=f.plainToken,d.classList.add("is-plain")):p&&p.has_token?(d.textContent=(p.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",d.classList.remove("is-plain")):(d.textContent=ServerI18n.t("firetokenNotSetHint"),d.classList.remove("is-plain")),r&&(p&&p.enabled&&p.has_token?(r.textContent=ServerI18n.t("firetokenStatusHealthy"),r.className="admin-ft-status is-good"):p&&p.has_token?(r.textContent=ServerI18n.t("firetokenStatusDisabled"),r.className="admin-ft-status is-warn"):(r.textContent=ServerI18n.t("firetokenStatusUnset"),r.className="admin-ft-status is-muted")),e&&(e.disabled=!f.plainToken),n&&(n.disabled=!(p&&p.has_token)),s&&(s.textContent=p&&p.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),i&&(i.textContent=p?R(p.created_at):"\u2014"),a&&(a.textContent=p?L(p.rotated_at):"\u2014"),t)){let o=f.plainToken?f.plainToken:p&&p.prefix?p.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";t.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${o}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function k(){let p=f.usage24h.map(i=>Number(i)||0),d=p.reduce((i,a)=>i+a,0),r=p.length?Math.max(...p):0,e=document.querySelector('[data-ft-stat="hits"]'),s=document.querySelector('[data-ft-stat="peak"]'),n=document.querySelector("[data-ft-peak-meta]");e&&(e.textContent=d.toLocaleString()),s&&(s.textContent=r.toLocaleString()),n&&(n.textContent=ServerI18n.t("firetokenPeakMeta",{peak:r.toLocaleString()}))}function x(){let p=document.getElementById("adminFtChart24h");if(!p)return;let d=f.usage24h.map(n=>Number(n)||0);if(!d.length){p.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let r=Math.max(...d),e=12e3,s=r>0?Math.min(100,e/Math.max(r,e)*100):100;p.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${d.map((n,i)=>{let a=r>0?Math.max(2,n/r*100):2;return`<div class="bar ${r>0&&n===r?"is-peak":""}" style="height:${a}%" title="${i.toString().padStart(2,"0")}:00 \u2014 ${n}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(n=>`<span>${String(n).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function K(){let p=document.getElementById("adminFtIps"),d=document.querySelector("[data-ft-ip-count]");if(!p)return;let r=f.ips||[];if(d&&(d.textContent=r.length?`${r.length} IP`:"\u2014"),!r.length){p.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let e=r[0]?.ip;p.innerHTML=r.map((s,n)=>{let i=n===0,a=s.source==="web"&&(s.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${i?"is-top":""}">
          <span class="ip">${w(s.ip||"?")}</span>
          ${i?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${a?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${w(s.source||"\u2014")}</span>
          <span class="cnt">${s.count||0} hits</span>
          <span class="when">${L(s.last_seen)}</span>
        </div>`}).join("")}function A(){let p=document.getElementById("adminFtAudit");if(!p)return;let d=f.audit||[];if(!d.length){p.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let r={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},e={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};p.innerHTML=d.map(s=>{let n=e[s.kind]||"is-info",i=r[s.kind]||s.kind,a=s.meta||{},t=a.prefix?` \xB7 prefix=${w(a.prefix)}`:a.enabled!=null?` \xB7 enabled=${a.enabled}`:"";return`
        <div class="admin-ft-audit-row ${n}">
          <span class="ts">${R(s.ts)}</span>
          <span class="kind">${w(i)}</span>
          <span class="detail">${t}</span>
        </div>`}).join("")}function N(){let p=document.getElementById("settings-grid");if(!p||document.getElementById(b))return;p.insertAdjacentHTML("beforeend",_());let d=document.getElementById(b);d&&d.addEventListener("click",r=>{let e=r.target.closest("[data-ft-action]");if(!e)return;let s=e.dataset.ftAction;s==="regen"?D():s==="revoke"?q():s==="copy"&&f.plainToken&&(M(f.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),f.stopPoll||(f.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(b),intervalMs:h,tick:()=>{S(),m()}}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&N()})})()});var yt=me(()=>{(function(){"use strict";let b="sec-about-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(A){return String(A).replace(/[&<>"']/g,function(N){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[N]})},h="Danmu Fire",f="https://github.com/guan4tou2/danmu-desktop",_=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],z=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],y="danmu.about.lastUpdateCheck",S={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function m(){return`
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
                <div class="admin-about-version-name">${h}</div>
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
            ${_.slice(0,4).map(A=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${w(A.v)}</span>
                  ${A.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${w(A.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${A.notes.slice(0,3).map(N=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${w(N.t)}">${w(N.t.toUpperCase())}</span>
                      <span class="msg">${w(N.l)}</span>
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
              ${z.slice(0,6).map(A=>`
                <div class="admin-about-oss-row">
                  <span class="n">${w(A.n)}</span>
                  <span class="v">${w(A.v)}</span>
                  <span class="l">${w(A.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function D(A){if(!A||A<0)return"\u2014";let N=Math.floor(A/86400),p=Math.floor(A%86400/3600),d=Math.floor(A%3600/60);return N>0?`${N}d ${p}h`:p>0?`${p}h ${d}m`:`${d}m`}function q(){let A=document.querySelector("[data-about-tag]"),N=document.querySelector("[data-about-build]"),p=document.querySelector("[data-about-uptime]"),d=document.querySelector("[data-about-update]"),r=document.querySelector("[data-about-checked]"),e=document.querySelector("[data-about-env]"),s=document.querySelector("[data-about-ws-path]");if(A&&(A.textContent=`v${S.appVersion}`),N){let n=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";N.textContent=`BUILD \xB7 ${n} \xB7 stable channel`,e&&(e.textContent=n)}if(p){let n=S.serverStartedAt?S.serverTime-S.serverStartedAt:0;p.textContent=D(n)}if(d&&(S.isLatest===!0?d.textContent=ServerI18n.t("aboutIsLatestYes"):S.isLatest===!1?d.textContent=ServerI18n.t("aboutHasNewVersion",{v:S.latestVersion||""}):d.textContent="\u2014",d.style.color=S.isLatest===!0?"var(--hud-lime)":S.isLatest===!1?"var(--hud-amber)":""),r&&(r.textContent=S.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:M(S.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),s){let n=window.DANMU_CONFIG||{};s.textContent=n.wsPath||"/ws"}}function M(A){let N=Number(A)||0;if(!N)return"\u2014";let p=String(N).length>12?N:N*1e3,d=(Date.now()-p)/1e3;return d<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(d)}):d<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(d/60)}):d<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(d/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(d/86400)})}function L(A,N){let p=s=>String(s||"").replace(/^v/i,"").split("-")[0].split(".").map(function(n){return parseInt(n,10)||0}),d=p(A),r=p(N),e=Math.max(d.length,r.length);for(let s=0;s<e;s++){let n=d[s]||0,i=r[s]||0;if(n>i)return!0;if(n<i)return!1}return!1}async function R({silent:A}={}){A||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let N=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!N.ok)throw new Error("HTTP "+N.status);let d=((await N.json()).tag_name||"").replace(/^v/i,"");S.latestVersion=d,S.lastCheckedAt=Date.now(),S.isLatest=!L(d,S.appVersion);try{localStorage.setItem(y,JSON.stringify({ts:S.lastCheckedAt,latest:d,isLatest:S.isLatest}))}catch{}q(),A||window.showToast&&window.showToast(S.isLatest?ServerI18n.t("aboutToastLatest",{v:S.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:d}),!0)}catch(N){A||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:N.message||""}),!1)}}function P(){try{let A=localStorage.getItem(y);if(!A)return;let N=JSON.parse(A);S.latestVersion=N.latest,S.lastCheckedAt=Number(N.ts)||0,S.isLatest=!!N.isLatest}catch{}}async function k(){try{let A=await fetch("/admin/metrics",{credentials:"same-origin"});if(!A.ok)return;let N=await A.json();S.serverStartedAt=Number(N.server_started_at)||0,S.serverTime=Number(N.server_time)||Date.now()/1e3,q()}catch{}}function x(){let A=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",N=S.serverStartedAt?S.serverTime-S.serverStartedAt:0,p=(navigator.userAgent||"").slice(0,200),d=[`${h} v${S.appVersion}`,`Channel: ${A}`,`Uptime: ${D(N)}`,`User-Agent: ${p}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(d).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function K(){let A=document.getElementById("settings-grid");if(!A||document.getElementById(b))return;A.insertAdjacentHTML("beforeend",m()),S.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",P(),q();let N=document.getElementById(b);N&&N.addEventListener("click",function(p){let d=p.target.closest("[data-about-action]");if(!d)return;let r=d.dataset.aboutAction;r==="copy"?x():r==="check-update"?R({silent:!1}):r==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():r==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),k(),setInterval(k,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&K()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&K()})})()});var wt=me(()=>{(function(){"use strict";let b="admin-setup-wizard-root",w="danmu.setupWizard.completed",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(c){return String(c).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},f=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],_=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function z(c){return c?c.label?c.label:c.labelKey?ServerI18n.t(c.labelKey):c.name||c.id||"\u2014":"\u2014"}function y(c){return c?c.descriptionKey?ServerI18n.t(c.descriptionKey):c.description||"":""}let S={open:!1,step:0,themes:_.slice(),activeTheme:_[0].name,selectedTheme:_[0].name,serverName:"Danmu Fire",publicUrl:"",moderationRules:[{id:"sensitive",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",enabled:!0},{id:"rate-limit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",enabled:!0},{id:"fingerprint",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",enabled:!0}]};function m(){S.serverName="Danmu Fire",S.publicUrl=window.location.origin+"/"}function D(){let c=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";c==="setup"&&!S.open?q():c!=="setup"&&S.open&&M({silent:!0})}function q(){S.open=!0,S.step=0,m(),document.body.dataset.setupWizardOpen="1",document.getElementById(b)||(document.body.insertAdjacentHTML("beforeend",L()),r()),n(),R()}function M(c){let u=c&&c.silent;S.open=!1,document.body.dataset.setupWizardOpen="";let l=document.getElementById(b);if(l&&l.remove(),!u&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function L(){return`
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
            ${f.map(function(c,u){return`
                <div class="admin-setup-step" data-step-index="${u}">
                  <span class="bullet">${u+1}</span>
                  <span class="lbl">${h(ServerI18n.t(c.labelKey))}</span>
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
      </div>`}function R(){let c=document.getElementById(b);if(!c)return;c.querySelectorAll(".admin-setup-step").forEach(function(I,C){I.classList.toggle("is-done",C<S.step),I.classList.toggle("is-active",C===S.step)}),c.querySelectorAll(".admin-setup-step-sep").forEach(function(I,C){I.classList.toggle("is-done",C<S.step)});let u=c.querySelector("[data-setup-meta]");u&&(u.textContent=ServerI18n.t("setupWizardStepMeta",{current:S.step+1,total:f.length}));let l=c.querySelector('[data-setup-action="prev"]');l&&(l.disabled=S.step===0);let v=c.querySelector('[data-setup-action="next"]');if(v){let I=f[S.step].id;v.textContent=ServerI18n.t("setupWizardNext")}let g=c.querySelector("[data-setup-foot]");g&&(g.hidden=f[S.step].id==="done");let E=c.querySelector("[data-setup-content]");if(!E)return;let T=f[S.step].id;T==="server"?E.innerHTML=k():T==="moderation"?E.innerHTML=K():T==="theme"?E.innerHTML=p():E.innerHTML=d(),s(T)}function P(c,u,l){return`
      <div class="admin-setup-field">
        <label class="admin-setup-field-label" for="setup-field-${c}">${h(u)}</label>
        <input
          id="setup-field-${c}"
          class="admin-setup-input"
          data-setup-field="${c}"
          value="${h(l)}"
          readonly
        />
      </div>`}function k(){return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardStepServer")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardServerDesc")}</p>
        <div class="admin-setup-server-fields">
          ${P("public-url",ServerI18n.t("setupWizardPublicUrlLabel"),S.publicUrl)}
          ${P("server-name",ServerI18n.t("setupWizardServerNameLabel"),S.serverName)}
        </div>
      </div>`}function x(c,u,l,v){return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${h(c)}</h2>
        <p class="admin-setup-step-desc">${h(u)}</p>
        <div class="admin-setup-toggle-list">
          ${l.map(function(g){return`
              <button
                type="button"
                class="admin-setup-toggle-row${g.enabled?" is-on":""}"
                ${v}="${h(g.id)}"
                aria-pressed="${g.enabled?"true":"false"}"
              >
                <span class="admin-setup-toggle-body">
                  <span class="admin-setup-toggle-title">${h(ServerI18n.t(g.labelKey))}</span>
                  <span class="admin-setup-toggle-desc">${h(ServerI18n.t(g.descKey))}</span>
                </span>
                <span class="admin-setup-toggle-switch${g.enabled?" is-on":""}">
                  <span class="thumb"></span>
                </span>
              </button>`}).join("")}
        </div>
      </div>`}function K(){return x(ServerI18n.t("setupWizardStepModeration"),ServerI18n.t("setupWizardModerationDesc"),S.moderationRules,"data-setup-moderation-toggle")}let A=["default","neon","retro","cinema"];function N(){let c={};return(S.themes||[]).forEach(function(u){c[u.name||u.id]=u}),A.map(function(u){let l=_.filter(function(g){return g.name===u})[0],v=c[u];return l?{name:u,label:v&&v.label,labelKey:l.labelKey,descriptionKey:l.descriptionKey,colors:l.colors}:v}).filter(Boolean)}function p(){let c=N();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${c.map(function(u){let l=u.name||u.id||"",v=(S.selectedTheme||S.activeTheme)===l,g=(u.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${v?" is-selected":""}" data-setup-theme="${h(l)}">
                ${v?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${g.map(function(E,T){let I=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${h(E)};font-size:${10+T*2}px;text-shadow:0 0 6px ${h(E)}66;">${I[T]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${h(z(u))}</div>
                <div class="admin-setup-theme-sub">${h(y(u))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function d(){let c=(function(){for(let l=0;l<S.themes.length;l+=1){let v=S.themes[l];if((v.name||v.id)===(S.selectedTheme||S.activeTheme))return z(v)}return S.selectedTheme||S.activeTheme||"\u2014"})(),u=S.moderationRules.filter(function(l){return l.enabled}).length;return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${h(S.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${h(c)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepModeration")}</span><span class="v">${ServerI18n.t("setupWizardEnabledCount",{n:u,total:S.moderationRules.length})}</span></div>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function r(){let c=document.getElementById(b);c&&c.addEventListener("click",function(u){if(u.target===c){M();return}let l=u.target.closest("[data-setup-action]");if(l){if(l.dataset.setupAction==="close"){M();return}if(l.dataset.setupAction==="prev"&&S.step>0){S.step-=1,R();return}l.dataset.setupAction==="next"&&a()}})}function e(c,u){return c.map(function(l){return l.id===u?Object.assign({},l,{enabled:!l.enabled}):l})}function s(c){let u=document.getElementById(b);if(u){if(c==="moderation"){u.querySelectorAll("[data-setup-moderation-toggle]").forEach(function(l){l.addEventListener("click",function(){S.moderationRules=e(S.moderationRules,l.dataset.setupModerationToggle),R()})});return}if(c==="theme"){u.querySelectorAll("[data-setup-theme]").forEach(function(l){l.addEventListener("click",function(){S.selectedTheme=l.dataset.setupTheme||S.selectedTheme,R()})});return}if(c==="done"){let l=u.querySelector("[data-setup-complete-cta]");l&&l.addEventListener("click",t)}}}async function n(){try{let c=await fetch("/admin/themes",{credentials:"same-origin"});if(!c.ok)return;let u=await c.json(),l=Array.isArray(u.themes)?u.themes:[];if(!l.length)return;S.themes=l.map(function(v){return{name:v.name||v.id||"",label:v.label||v.display_name||v.name||"",description:v.description||"",colors:v.preview_colors||v.colors||v.palette||_[0].colors}}),S.activeTheme=u.active||S.themes[0]&&S.themes[0].name||S.activeTheme,S.selectedTheme||(S.selectedTheme=S.activeTheme),S.open&&f[S.step].id==="theme"&&R()}catch{}}async function i(){if(!S.selectedTheme||S.selectedTheme===S.activeTheme)return!0;try{let c=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:S.selectedTheme})});if(!c.ok)throw new Error("HTTP "+c.status);return S.activeTheme=S.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function a(){if(!(f[S.step].id==="theme"&&!await i())){if(S.step<f.length-1){S.step+=1,R();return}t()}}function t(){try{localStorage.setItem(w,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),M()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}q()},close:function(){M()},isCompleted:function(){try{return!!localStorage.getItem(w)}catch{return!1}},__setCapabilityForTest:function(){}};function o(){window.addEventListener("hashchange",D),D()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&o()})})()});var St=me(()=>{(function(){"use strict";let b="sec-poll-deepdive-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(k){return String(k).replace(/[&<>"']/g,function(x){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]})},h={poll:null,refreshTimer:0};function f(){return`
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
      </div>`}function _(k){if(k.innerHTML="",!window.AdminEmpty){k.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let x=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});x.classList.add("lg:col-span-2"),x.dataset.emptyKind="poll-deepdive",k.appendChild(x)}let z=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function y(k){return k?new Date(k*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function S(k){if(!k||k.length<2)return"";let x=Math.max.apply(null,k.map(function(d){return d.n}).concat([1])),K=100,A=32,N=K/(k.length-1),p=k.map(function(d,r){let e=(r*N).toFixed(2),s=(A-d.n/x*(A-2)-1).toFixed(2);return e+","+s});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+K+" "+A+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+p.join(" ")+'" /></svg>'}function m(k){let x=k.state||(k.active?"active":"ended"),K=k.question||"\u2014",A=Array.isArray(k.options)?k.options:[],N=function(c){return Number(c.votes!=null?c.votes:c.count)||0},p=A.reduce(function(c,u){return c+N(u)},0),d=x==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:y(k.ended_at)}),r=(function(){let c=Number(k.started_at)||0;if(!c)return"\u2014";let u=x==="active"?Date.now()/1e3:Number(k.ended_at)||c,l=Math.max(0,Math.floor(u-c));return Math.floor(l/60)+":"+String(l%60).padStart(2,"0")})(),e=Number(window._lastOverlayCount)||0,s=e>0?Math.round(p/e*100)+"%":"\u2014",n=e>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:p,audience:e}):ServerI18n.t("pollDeepdiveParticipationUnknown"),i=(function(){let c=Array.isArray(k.questions)?k.questions:[],u=0;for(let l of c)u+=Number(l.duplicate_attempts)||0;return c.length||(u=Number(k.duplicate_attempts)||0),u})(),a=A.map(function(c,u){let l=N(c),v=p>0?l/p*100:0,g=z[u%z.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${w(c.label||c.text||c.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:u+1}))}</span>
            <span class="votes">${l} \xB7 ${v.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${v.toFixed(2)}%;background:${g}"></div>
          </div>
        </div>`}).join(""),t=Array.isArray(k.vote_timeline)?k.vote_timeline:[],o=t.length>=2?S(t):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${w(K)}</div>
          <div class="admin-pdd-state">${w(d)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${p}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${s}</div><div class="sub">${w(n)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${w(r)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${i}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${A.length?a:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${o}</div>
        </article>
      </div>`}function D(){let k=document.querySelector("[data-pdd-grid]");if(k){if(!h.poll||!h.poll.poll_id){_(k);return}k.innerHTML=m(h.poll)}}async function q(){try{let k=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!k.ok)return;let x=await k.json();h.poll=x,D()}catch{}}function M(){if(!h.poll||!Array.isArray(h.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let k=[["option_label","votes","percentage"]],x=h.poll.options.reduce(function(d,r){return d+(Number(r.votes!=null?r.votes:r.count)||0)},0);h.poll.options.forEach(function(d,r){let e=Number(d.votes!=null?d.votes:d.count)||0,s=x>0?(e/x*100).toFixed(2):"0.00";k.push([d.label||"option_"+(r+1),e,s])});let K=k.map(function(d){return d.map(function(r){let e=String(r);return e.includes(",")||e.includes('"')?'"'+e.replace(/"/g,'""')+'"':e}).join(",")}).join(`
`),A=new Blob([K],{type:"text/csv;charset=utf-8"}),N=URL.createObjectURL(A),p=document.createElement("a");p.href=N,p.download="poll-"+(h.poll.poll_id||"current")+".csv",document.body.appendChild(p),p.click(),document.body.removeChild(p),setTimeout(function(){URL.revokeObjectURL(N)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function L(){try{let k=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!k.ok)throw new Error("HTTP "+k.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function R(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(q(),h.refreshTimer||(h.refreshTimer=setInterval(q,5e3))):h.refreshTimer&&(clearInterval(h.refreshTimer),h.refreshTimer=0)}function P(){let k=document.getElementById("settings-grid");if(!k||document.getElementById(b))return;k.insertAdjacentHTML("beforeend",f());let x=document.getElementById(b);x&&x.addEventListener("click",function(K){let A=K.target.closest("[data-pdd-action]");A&&(A.dataset.pddAction==="export-csv"?M():A.dataset.pddAction==="push"&&L())}),q(),R(),window.addEventListener("hashchange",R)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&P()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&P()})})()});var It=me(()=>{(function(){"use strict";let b="admin-message-drawer-root",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})},f={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]};function _(s){let n=s.detail&&s.detail.entry;n&&(f.entry=n,z(),n.data&&n.data.fingerprint&&D(n.data.fingerprint),q(n))}function z(){f.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(b)||(document.body.insertAdjacentHTML("beforeend",M()),L()),R()}function y(){f.open=!1,document.body.dataset.messageDrawerOpen="";let s=document.getElementById(b);s&&s.remove()}function S(s){if(f.open){if(s.key==="Escape"){y();return}if(s.key==="ArrowLeft"||s.key==="k"){m(-1),s.preventDefault();return}if(s.key==="ArrowRight"||s.key==="j"){m(1),s.preventDefault();return}}}function m(s){if(!f.entry)return;let n=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(n=window.AdminLiveFeed.getEntries()),!n.length)return;let i=n.findIndex(function(o){return o.id===f.entry.id});if(i<0)return;let a=i+-s;if(a<0||a>=n.length){window.showToast&&window.showToast(s<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let t=n[a];f.entry=t,f.fingerprintRecord=null,q(t),R(),t.data&&t.data.fingerprint&&D(t.data.fingerprint)}async function D(s){try{let n=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!n.ok)return;let i=await n.json(),t=(Array.isArray(i.records)?i.records:[]).find(function(o){return(o.fingerprint||"").startsWith(s.slice(0,8))});f.fingerprintRecord=t||null,R()}catch{}}function q(s){let n=s.data&&s.data.fingerprint;if(!n){f.sameFpEntries=[];return}let i=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(i=window.AdminLiveFeed.getEntries()),f.sameFpEntries=i.filter(function(a){let t=a.data&&a.data.fingerprint||a.fingerprint||"";return t&&t.startsWith(n.slice(0,8))}).slice(0,8)}function M(){return`
      <div id="${b}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function L(){let s=document.getElementById(b);s&&s.addEventListener("click",function(n){let i=n.target.closest("[data-msgd-action]");if(!i)return;n.stopPropagation();let a=i.dataset.msgdAction;a==="close"?y():a==="ban-fp"?A():a==="ban-fp-quick"?K():a==="mute-fp"?p():a==="mask-msg"?d():a==="blacklist-kw"?r():a==="reply"?e():a==="prev"?m(-1):a==="next"&&m(1)})}function R(){let s=document.getElementById(b);if(!s)return;let n=s.querySelector("[data-msgd-body]");n&&(n.innerHTML=P())}function P(){let s=f.entry;if(!s)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let n=s.data||{},i=n.fingerprint||"\u2014",a=i==="\u2014"?"\u2014":i.slice(0,8),t=i==="\u2014"?"\u2014":i.slice(0,12),o=s.ts?k(s.ts):"\u2014",c=n.nickname||ServerI18n.t("msgDrawerAnonymous"),u=f.fingerprintRecord||{},l=Number(u.message_count)||0,v=Number(u.violation_count)||0,g=f.sameFpEntries||[],E=g.length?Math.round(g.reduce((I,C)=>I+((C.data||C).text||"").length,0)/g.length):(n.text||"").length,T=0;for(let I=0;I<i.length;I++)T=T*31+i.charCodeAt(I)&65535;return T=T%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${T})">${h((c||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${h(c)}</div>
          <div class="admin-msgd-v4__fp">fp:${h(t)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${h(o)}</span>
      </div>

      <div class="admin-msgd-v4__body">${h(n.text||"")}</div>

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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${l||g.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${E}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${v>0?"warn":"good"}">${v}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP \xB7 ${h(n.ip||"\u2014")}<br/>
          UA \xB7 ${h(n.user_agent||n.ua||"\u2014")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: same deferred EN\xB7\u4E2D\u6587 bilingual monolabel pattern as
             SENDER PROFILE above \u2014 left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecModeration")}</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${i==="\u2014"?"disabled":""}>${h(ServerI18n.t("msgdBanFpBtn"))}</button>
          <button type="button" class="admin-msgd-v4__modbtn is-mute" data-msgd-action="mute-fp" ${i==="\u2014"?"disabled":""}>${h(ServerI18n.t("msgdMuteFpBtn"))}</button>
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
    `}function k(s){try{let n=new Date(s),i=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0"),t=String(n.getSeconds()).padStart(2,"0");return i+":"+a+":"+t}catch{return"\u2014"}}function x(s){let n;if(typeof s=="number")n=s*1e3;else if(typeof s=="string")n=new Date(s).getTime();else return"\u2014";if(!n)return"\u2014";let i=(Date.now()-n)/1e3;return i<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(i)}):i<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(i/60)}):i<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(i/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(i/86400)})}async function K(s,n,i){let a=f.entry&&f.entry.data&&f.entry.data.fingerprint;if(!a)return;let t=parseInt(n||0,10)||0;try{let o=t>0?await window.csrfFetch("/admin/modbans",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:a,duration_s:t,reason:s||"",kind:"ban"})}):await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:a,reason:s||""})});if(!o.ok)throw new Error("HTTP "+o.status);let c=i||(t>0?ServerI18n.t("msgDrawerSecondsLabel",{n:t}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:a.slice(0,8),label:c}),!0),y()}catch(o){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:o.message||""}),!1)}}async function A(){let s=f.entry&&f.entry.data||{},n=s.fingerprint||"\u2014";if(n==="\u2014")return;let i=n.slice(0,12),a=s.nickname||ServerI18n.t("msgDrawerAnonymous"),t=0;for(let T=0;T<n.length;T++)t=t*31+n.charCodeAt(T)&65535;t=t%360;let o=document.createElement("div");o.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${t})">${h((a||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${h(a)}</div>
          <div class="fp">fp:${h(i)}</div>
          <div class="ip">IP \xB7 ${h(s.ip||"\u2014")} \xB7 ${h(s.user_agent||s.ua||"\u2014")}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let c=T=>{o.querySelectorAll(".admin-bancfm-dchip").forEach(I=>I.classList.remove("is-active")),T.classList.add("is-active")};if(o.addEventListener("click",T=>{let I=T.target.closest("[data-ban-duration]");I&&c(I)}),o.addEventListener("keydown",T=>{if(T.key!=="Enter"&&T.key!==" ")return;let I=T.target.closest("[data-ban-duration]");I&&(T.preventDefault(),c(I))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:o,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let l=(o.querySelector("[data-ban-reason]")||{}).value||"",v=o.querySelector(".admin-bancfm-dchip.is-active"),g=v&&parseInt(v.dataset.banDuration||"0",10)||0,E=v?v.textContent.trim():ServerI18n.t("msgDrawerPermanent");return K(l.trim(),g,E)}function N(){}async function p(){return K("[mute]")}async function d(){let s=f.entry&&f.entry.data&&f.entry.data.text;if(!(!s||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBlacklistKwTitle"),subtitle:ServerI18n.t("cfmSubBlacklistKeyword"),severity:"danger",body:ServerI18n.t("msgDrawerBlacklistKwBody"),confirmLabel:ServerI18n.t("msgDrawerBlacklistKwConfirm")})))try{let i=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"keyword",value:s})});if(!i.ok)throw new Error("HTTP "+i.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBlacklisted"),!0),y()}catch(i){window.showToast&&window.showToast(ServerI18n.t("msgDrawerMaskFailed",{msg:i.message||""}),!1)}}async function r(){return d()}async function e(){let s=document.querySelector("[data-msgd-reply]"),n=s?s.value.trim():"";if(n)try{let i=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:n})});if(!i.ok)throw new Error("HTTP "+i.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),s&&(s.value="")}catch(i){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:i.message||""}),!1)}}window.AdminMessageDrawer={open:function(s){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:s}}))},close:y},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",_),document.addEventListener("keydown",S))})})()});var kt=me(()=>{(function(){"use strict";let b="danmu.notifications.read",w="danmu.notifications.archived",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})},f={items:[],refreshTimer:0};function _(a){try{let t=localStorage.getItem(a);if(!t)return new Set;let o=JSON.parse(t);return new Set(Array.isArray(o)?o:[])}catch{return new Set}}function z(a,t){try{localStorage.setItem(a,JSON.stringify(Array.from(t)))}catch{}}function y(a){let t=_(b);t.add(a),z(b,t)}async function S(){let a=[m().catch(function(){return[]}),D().catch(function(){return[]}),q().catch(function(){return[]}),M().catch(function(){return[]})],o=(await Promise.all(a)).flat();o.sort(function(c,u){return(u.ts||0)-(c.ts||0)}),f.items=o,x(),N()&&K()}async function m(){let a=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!a.ok)return[];let t=await a.json();return(Array.isArray(t.events)?t.events:[]).map(function(c,u){let l=(Number(c.ts)||0)*1e3,v="tok-"+(c.ts||u)+"-"+(c.kind||"x"),g=c.kind||"?",E="info",T=ServerI18n.t("notifTitleFireTokenEvent");if(g==="rotated")E="info",T=ServerI18n.t("notifTitleFireTokenRotated");else if(g==="revoked")E="warn",T=ServerI18n.t("notifTitleFireTokenRevoked");else if(g==="toggled"){let I=c.meta&&c.meta.enabled;E=I?"good":"warn",T=ServerI18n.t("notifTitleFireTokenToggled",{state:I?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:v,sev:E,src:"Fire Token",ts:l,title:T,desc:ServerI18n.t("notifDescEventType",{kind:g})+(c.meta?" \xB7 "+JSON.stringify(c.meta):""),raw:c}})}async function D(){let a=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!a.ok)return[];let t=await a.json();return(Array.isArray(t.events)?t.events:[]).map(function(c,u){let l=(Number(c.ts)||0)*1e3,v="flt-"+(c.ts||u)+"-"+(c.action||"x")+"-"+u,g=c.action||"match";return{id:v,sev:g==="drop"?"warn":"info",src:"Moderation",ts:l,title:ServerI18n.t("notifTitleFilterHit",{action:g}),desc:ServerI18n.t("notifDescFilterHit",{rule:c.rule_id||"?",text:(c.text||"").slice(0,60)}),raw:c}})}async function q(){let a=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!a.ok)return[];let t=await a.json();return(Array.isArray(t.events)?t.events:[]).map(function(c,u){let l=(Number(c.ts)||0)*1e3,v=String(c.kind||"?");return{id:"wh-"+(c.ts||u)+"-"+v+"-"+u,sev:v==="unregister"?"warn":"info",src:"Webhooks",ts:l,title:ServerI18n.t("notifTitleWebhookEvent",{kind:v}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:c.actor||"system"})+(c.meta?" \xB7 "+JSON.stringify(c.meta):""),raw:c}})}async function M(){let a=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!a.ok)return[];let t=await a.json(),o=Array.isArray(t.events)?t.events:[],c=new Set(["auth","broadcast","system","session","sessions"]);return o.filter(function(u){return c.has(String(u.source||""))}).map(function(u,l){let v=(Number(u.ts)||0)*1e3,g=String(u.kind||"?");return{id:"sys-"+(u.ts||l)+"-"+(u.source||"x")+"-"+g+"-"+l,sev:g==="login_failed"?"warn":"info",src:"System",ts:v,title:ServerI18n.t("notifTitleSystemEvent",{kind:g}),desc:ServerI18n.t("notifDescSystemEvent",{source:u.source||"?",actor:u.actor||"system"}),raw:u}})}let L="admin-notif-panel",R={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/integrations/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/integrations/plugins"},System:{key:"adminNavSystem",hash:"#/events"}};function P(a){let t=R[a];return t?ServerI18n.t(t.key):a}function k(){let a=_(b),t=_(w);return f.items.filter(o=>!a.has(o.id)&&!t.has(o.id))}function x(){let a=document.querySelector("[data-notif-badge]");if(!a)return;let t=k().length;a.textContent=t>99?"99+":String(t),a.hidden=t===0}function K(){let a=document.getElementById(L);if(!a)return;let t=k().slice(0,20),o=t.length?t.map(c=>{let u=R[c.src];return'<li class="admin-notif__item" data-sev="'+h(c.sev)+'"><div class="admin-notif__text">'+h(c.title)+'</div><div class="admin-notif__meta">'+h(P(c.src))+" \xB7 "+h(A(c.ts))+"</div>"+(u?'<button type="button" class="admin-notif__action" data-notif-go="'+h(u.hash)+'" data-notif-id="'+h(c.id)+'">'+h(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+h(ServerI18n.t("notifEmpty"))+"</li>";a.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+h(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+h(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+o+"</ul>"}function A(a){if(!a)return"\u2014";let t=(Date.now()-a)/1e3;return t<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(t)}):t<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(t/60)}):t<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(t/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(t/86400)})}function N(){let a=document.getElementById(L);return!!a&&!a.hidden}function p(){let a=document.getElementById(L);a&&(K(),a.hidden=!1,f.refreshTimer||(f.refreshTimer=setInterval(S,3e4)))}function d(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&p()}function r(){let a=document.getElementById(L);a&&(a.hidden=!0),f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function e(){N()?r():p()}function s(){let a=document.querySelector(".admin-dash-topbar-actions");if(!a||document.getElementById("admin-notif-bell"))return;let t=document.createElement("button");if(t.id="admin-notif-bell",t.type="button",t.className="admin-dash-search is-icon-only admin-notif-bell",t.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),t.title=ServerI18n.t("adminRouteTitle_notifications"),t.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',a.insertBefore(t,a.firstChild),!document.getElementById(L)){let o=document.createElement("div");o.id=L,o.className="admin-notif",o.setAttribute("role","dialog"),o.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),o.hidden=!0,document.body.appendChild(o)}x(),d()}function n(){document.addEventListener("click",a=>{if(a.target.closest("#admin-notif-bell")){a.preventDefault(),e();return}let t=a.target.closest("[data-notif-go]");if(t){y(t.dataset.notifId),r(),location.hash=t.dataset.notifGo,x();return}if(a.target.closest("[data-notif-readall]")){k().forEach(o=>y(o.id)),K(),x();return}N()&&!a.target.closest("#"+L)&&r()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&N()&&r()}),window.addEventListener("hashchange",d),d()}function i(){s(),S()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(s).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),n(),i()})})()});var Tt=me(()=>{(function(){"use strict";let b="sec-audit-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},h={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},f={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function _(){return`
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
      </div>`}function z(e){if(!e)return"\u2014";try{let s=new Date(Number(e)*1e3),n=String(s.getHours()).padStart(2,"0"),i=String(s.getMinutes()).padStart(2,"0"),a=String(s.getSeconds()).padStart(2,"0");return`${n}:${i}:${a}`}catch{return"\u2014"}}function y(e){let s=String(e.action||e.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(s)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(s)?"warn":"info"}function S(e){return e==="danger"?"var(--hud-crimson, #f87171)":e==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function m(e){return f.filterActor==="all"||String(e.actor||"").toLowerCase()===f.filterActor}function D(e){return f.filterSeverity==="all"||y(e)===f.filterSeverity}function q(){return f.events.filter(function(e){return m(e)&&D(e)})}function M(e){let s=e&&e.meta&&typeof e.meta=="object"?e.meta:{};return s.target||s.keyword||s.fp||s.fingerprint||s.name||s.mode||s.session||s.hook_id||e.target||""}function L(e,s){let n=e!=null,i=s!=null;if(!n&&!i)return"";let a=n?w(JSON.stringify(e)):"",t=i?w(JSON.stringify(s)):"";return n?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${a}</span> \u2192 <span class="admin-audit-diff-a">${t}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${t}</span></span>`}function R(e){let s=e&&e.meta&&typeof e.meta=="object"?e.meta:{},n=[];e.detail&&n.push(`<span>${w(String(e.detail))}</span>`);let i=L(e.before,e.after);i&&n.push(i);let a=Object.assign({},s);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(o){delete a[o]}),Object.keys(a).length&&n.push(`<code class="admin-ui-code admin-audit-meta-extra">${w(JSON.stringify(a))}</code>`),!n.length){let o=h[e.source]&&h[e.source].label||e.source||"system";n.push(`<span>${w(String(o))}</span>`)}return n.join(" ")}function P(e){return e==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":e==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function k(){let e=document.querySelector("[data-audit-rows]");if(!e)return;let s=q();if(!s.length){e.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}e.innerHTML=s.map(function(n){let i=y(n),a=S(i),t=String(n.actor||"system"),o=M(n);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${i}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${w(z(n.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${a};box-shadow:0 0 6px ${a}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${P(t)}">${w(t)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${w(String(n.action||n.kind||"\u2014"))}</span>
              ${o?`<span class="admin-ui-target admin-audit-target">\u2192 ${w(String(o))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${R(n)}</div>
          </div>
        </div>`}).join("")}function x(){let e=document.querySelector("[data-audit-summary]");if(!e)return;let s=q().length,n=f.filterActor==="all"?ServerI18n.t("auditAllRoles"):f.filterActor,i=f.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):f.filterSeverity.toUpperCase();e.textContent=ServerI18n.t("auditSummaryLine",{n:s,actor:n,sev:i})}function K(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(e){e.classList.toggle("is-active",e.dataset.auditActorFilter===f.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(e){e.classList.toggle("is-active",e.dataset.auditSeverityFilter===f.filterSeverity)})}async function A(){try{let e=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!e.ok)return;let s=await e.json(),n=Array.isArray(s.events)?s.events.slice():[];n.sort(function(i,a){return Number(a.ts||0)-Number(i.ts||0)}),f.events=n,K(),k(),x()}catch{}}function N(){let e=q();if(!e.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let s=new Blob([JSON.stringify(e,null,2)],{type:"application/json;charset=utf-8"}),n=URL.createObjectURL(s),i=document.createElement("a");i.href=n,i.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(n)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:e.length}),!0)}function p(){let e=document.getElementById(b);e&&e.addEventListener("click",function(s){let n=s.target.closest("[data-audit-actor-filter]");if(n){f.filterActor=n.dataset.auditActorFilter||"all",K(),k(),x();return}let i=s.target.closest("[data-audit-severity-filter]");if(i){let a=i.dataset.auditSeverityFilter||"all";f.filterSeverity=f.filterSeverity===a?"all":a,K(),k(),x();return}if(s.target.closest("[data-audit-export]")){N();return}s.target.closest("[data-audit-refresh]")&&A()})}function d(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(A(),f.refreshTimer||(f.refreshTimer=setInterval(A,3e4))):f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function r(){let e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",_()),p(),A(),d(),window.addEventListener("hashchange",d))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&r()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&r()})})()});var _t=me(()=>{(function(){"use strict";let b="sec-audience-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(l){return String(l).replace(/[&<>"']/g,function(v){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[v]})},h=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],f=20,_={records:[],filter:"all",shown:f,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function z(l){if(!l)return h[0];let v=0;for(let g=0;g<l.length;g++)v=v*31+l.charCodeAt(g)>>>0;return h[v%h.length]}function y(l){if(!l)return"\u2014";let v=typeof l=="number"?l*1e3:new Date(l).getTime();if(!v)return"\u2014";let g=Math.max(0,(Date.now()-v)/1e3);return g<60?Math.floor(g)+"s":g<3600?Math.floor(g/60)+"m":g<86400?Math.floor(g/3600)+"h":Math.floor(g/86400)+"d"}function S(l){return l==="blocked"||l==="high"?"is-danger":l==="mid"?"is-warn":"is-success"}function m(){return`
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
      </div>`}function D(){let l=_.search.trim().toLowerCase(),v=_.records.slice();return l&&(v=v.filter(function(g){return String(g.nickname||"").toLowerCase().indexOf(l)!==-1||String(g.hash||"").toLowerCase().indexOf(l)!==-1})),v.sort(function(g,E){return _.sort==="last_seen"?(Number(E.last_seen)||0)-(Number(g.last_seen)||0):(Number(E.msgs)||0)-(Number(g.msgs)||0)}),_.filter==="all"?v:_.filter==="flagged"?v.filter(function(g){return g.state==="flagged"||g.state==="blocked"}):_.filter==="extension"?v.filter(function(g){return g.fingerprint&&(g.fingerprint.indexOf("slido")===0||g.fingerprint.indexOf("ext_")===0)}):v}function q(){let l=document.querySelector("[data-aud-stats]");if(!l)return;let v=_.records,g=v.length,E=v.filter(function(H){return H.state==="flagged"}).length,T=v.filter(function(H){return H.state==="blocked"}).length,I=v.reduce(function(H,B){return H+(Number(B.msgs)||0)},0),C=v.filter(function(H){let B=H.last_seen;if(!B)return!1;let $=typeof B=="number"?B*1e3:new Date(B).getTime();return(Date.now()-$)/1e3<300}).length;l.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${g}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${C}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${I}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${E}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${T}</div></div>`}function M(){let l=document.querySelector("[data-aud-filters]");if(!l)return;let v=_.records.length,g=_.records.filter(function(E){return E.state==="flagged"||E.state==="blocked"}).length;l.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${_.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:v})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${_.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:g})}</button>`}let L="__anon__";function R(l){let v=(l.nickname||"").trim();return!v||v==="\u533F\u540D"}function P(l){let v=l.hash||l.fingerprint||"";return v?v.length>9?v.slice(0,4)+"\u2026"+v.slice(-4):v:"\u2014"}function k(){let l=[],v=[];return D().forEach(function(g){R(g)?v.push(g):l.push(g)}),v.length&&l.push({_anonGroup:!0,_count:v.length,fingerprint:L,msgs:v.reduce(function(g,E){return g+(Number(E.msgs)||0)},0),blocked:v.reduce(function(g,E){return g+(Number(E.blocked)||0)},0),last_seen:Math.max.apply(null,v.map(function(g){return g.last_seen||0})),state:v.some(function(g){return g.state==="blocked"})?"blocked":"active"}),l}function x(){let l=document.querySelector("[data-aud-list]"),v=document.querySelector("[data-aud-summary]");if(!l)return;let g=k(),E=Math.min(g.length,_.shown);if(v&&(v.textContent=ServerI18n.t("audienceShownOfTotal",{n:E,total:g.length})),g.length===0){l.innerHTML="";let H=window.AdminEmpty.render("audience");H.dataset.emptyKind="audience",l.appendChild(H);return}let T=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,I=g.slice(0,E).map(function(H){let B=H.fingerprint||"\u2014",$=H.state==="blocked",j=H._anonGroup?ServerI18n.t("audienceAnonymous"):(H.nickname||"").trim(),U=H._anonGroup?"?":j.slice(0,1),Y=z(B);return`
        <div class="admin-aud-row${_.selectedFp===B?" is-selected":""}" data-aud-row data-aud-fp="${w(B)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${Y}">${w(U)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${w(j)}</span>
            ${H._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:H._count})}</span>`:""}
            ${$&&!H._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${H._anonGroup?"\u2014":w(P(H))}</span>
          <span class="col col-msgs">${Number(H.msgs)||0}</span>
          <span class="col col-blocked">${Number(H.blocked)||0}</span>
          <span class="col col-seen">${w(y(H.last_seen))}</span>
          <span class="col col-actions">
            ${H._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${w(B)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),C=g.length>E?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";l.innerHTML=T+I+C}function K(l){return l&&_.records.find(function(v){return v.fingerprint===l})||null}function A(l){if(!l)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let v=[],g=Number(l.msgs)||0,E=l.fingerprint||"";l.state==="blocked"&&v.push(ServerI18n.t("audienceRuleBlocked")),l.state==="flagged"&&v.push(ServerI18n.t("audienceRuleFlagged")),g>=25?v.push(ServerI18n.t("audienceRuleMsgOver",{n:g})):g>=15&&v.push(ServerI18n.t("audienceRuleMsgNear",{n:g}));let T=_.records.filter(function(B){return B.ip&&l.ip&&B.ip===l.ip}).length;T>=3&&v.push(ServerI18n.t("audienceRuleSameIp",{n:T})),(E.indexOf("slido")===0||E.indexOf("ext_")===0)&&v.push(ServerI18n.t("audienceRuleBridge")),(l.nickname==="\u533F\u540D"||!l.nickname)&&v.push(ServerI18n.t("audienceRuleNoNick"));let I="normal",C="var(--hud-lime)",H="NORMAL";return l.state==="blocked"?(I="blocked",C="var(--hud-crimson)",H="BLOCKED"):l.state==="flagged"||g>=25?(I="high",C="var(--hud-crimson)",H="HIGH RISK"):(g>=15||T>=3)&&(I="mid",C="var(--hud-amber)",H="MID"),{level:I,color:C,label:H,rules:v}}async function N(l){_.detailLoading=!0;try{let v=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!v.ok){_.detailMessages=[];return}let g=await v.json(),E=Array.isArray(g.records)?g.records:[],T=Date.now()-300*1e3;_.detailMessages=E.filter(function(I){return(I.fingerprint||"")!==l?!1:(I.timestamp?new Date(I.timestamp).getTime():0)>=T}).slice(0,8)}catch{_.detailMessages=[]}finally{_.detailLoading=!1}}function p(){let l=document.querySelector("[data-aud-detail]");if(!l)return;let v=_.selectedFp;if(!v){l.hidden=!0,l.innerHTML="";return}let g=K(v);if(!g){_.selectedFp=null,l.hidden=!0;return}l.hidden=!1;let E=A(g);l.dataset.riskLevel=E.level;let T=z(v),I=!g.nickname||g.nickname==="\u533F\u540D",C=I?ServerI18n.t("audienceAnonymous"):g.nickname,H=I?"?":C.slice(0,1),B="fp:"+(v||"").slice(0,8),$=E.rules.length?E.rules.map(function(U){return"<li>"+w(U)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",j="";_.detailLoading?j='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":_.detailMessages.length===0?j='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":j=_.detailMessages.map(function(U){let Y=U.muted?"MASKED":U.banned?"BLOCKED":"SHOWN",F=U.muted?"var(--hud-amber)":U.banned?"var(--hud-crimson)":"var(--hud-lime)",O=U.timestamp?new Date(U.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+w(O)+'</span><span class="m">'+w(U.text||"")+'</span><span class="s" style="color:'+F+'">'+Y+"</span></div>"}).join(""),l.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+S(E.level)+'">'+w(E.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+T+'">'+w(H)+'</span><div><div class="nick">'+w(C)+'</div><div class="fp">'+w(B)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+E.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:E.rules.length})+"</div><ul>"+$+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+j+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+w(v)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+w(v)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(g.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+w(v)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+w(v)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+w(v)+'" data-aud-flagged="'+(g.is_flagged?"true":"false")+'">'+(g.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+w(v)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function d(l){_.selectedFp=l,_.detailMessages=[],p(),N(l).then(p)}async function r(){try{let l=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!l.ok)return;let v=await l.json();_.records=Array.isArray(v.entries)?v.entries:[],_.serverStats=v&&v.stats||null,q(),M(),x(),_.selectedFp&&p()}catch{}}async function e(l,v,g){if(l)try{let E=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:l,flagged:!!v,note:g||""})});if(!E.ok)throw new Error("HTTP "+E.status);window.showToast&&window.showToast(v?ServerI18n.t("audienceToastFlagged",{fp:l.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:l.slice(0,8)}),!0),r()}catch(E){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:E.message||""}),!1)}}async function s(l,v){if(!l||l==="\u2014")return;let g=v??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:l.slice(0,8)}),"")||"");if(g!==null)try{let E=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:l,reason:g})});if(!E.ok)throw new Error("HTTP "+E.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:l.slice(0,8)}),!0),r()}catch(E){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:E.message||""}),!1)}}async function n(l){if(!(!l||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+w(l.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let g=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:l})});if(!g.ok)throw new Error("HTTP "+g.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),r()}catch(g){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:g.message||""}),!1)}}async function i(l){if(!(!l||l==="\u2014"))try{let v=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:l,action:"mask",priority:0,enabled:!0})});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:l.slice(0,8)}),!0),r()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:v.message||""}),!1)}}async function a(l){if(!(!l||l==="\u2014"))try{let v=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!v.ok)throw new Error("HTTP "+v.status);let g=await v.json(),T=(Array.isArray(g.rules)?g.rules:[]).filter(function(C){return C&&C.type==="fingerprint"&&C.pattern===l});if(T.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let I=0;for(let C of T)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:C.rule_id||C.id})}).catch(function(){return{ok:!1}})).ok&&(I+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:I,fp:l.slice(0,8)}),!0),r()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:v.message||""}),!1)}}async function t(l){if(!(!l||l==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+w(l.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let g=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:l})});if(!g.ok)throw new Error("HTTP "+g.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:l.slice(0,8)}),!0),r()}catch(g){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:g.message||""}),!1)}}function o(){let l=document.getElementById(b);l&&(l.addEventListener("input",function(v){let g=v.target.closest("[data-aud-search]");g&&(_.search=g.value||"",_.shown=f,x())}),l.addEventListener("change",function(v){let g=v.target.closest("[data-aud-sort]");g&&(_.sort=g.value,x())}),l.addEventListener("click",function(v){let g=v.target.closest("[data-aud-filter]");if(g){_.filter=g.dataset.audFilter,_.shown=f,M(),x();return}let E=v.target.closest("[data-aud-action='ban']");if(E){v.stopPropagation(),t(E.dataset.audFp);return}if(v.target.closest("[data-aud-action='refresh']")){r();return}if(v.target.closest("[data-aud-action='more']")){_.shown+=f,x();return}if(v.target.closest("[data-aud-action='close-detail']")){_.selectedFp=null,p();return}let H=v.target.closest("[data-aud-action='detail-ban']");if(H){t(H.dataset.audFp);return}let B=v.target.closest("[data-aud-action='detail-mask']");if(B){i(B.dataset.audFp);return}let $=v.target.closest("[data-aud-action='detail-safe']");if($){a($.dataset.audFp);return}let j=v.target.closest("[data-aud-action='flag']");if(j){v.stopPropagation(),e(j.dataset.audFp,j.dataset.audFlagged!=="true");return}let U=v.target.closest("[data-aud-action='kick']");if(U){v.stopPropagation(),s(U.dataset.audFp);return}let Y=v.target.closest("[data-aud-action='unkick']");if(Y){v.stopPropagation(),n(Y.dataset.audFp);return}let F=v.target.closest("[data-aud-row]");if(!(F&&F.dataset.audFp===L)&&F&&!v.target.closest("button")){d(F.dataset.audFp);return}}))}function c(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(r(),_.refreshTimer||(_.refreshTimer=setInterval(r,15e3))):_.refreshTimer&&(clearInterval(_.refreshTimer),_.refreshTimer=0)}function u(){let l=document.getElementById("settings-grid");!l||document.getElementById(b)||(l.insertAdjacentHTML("beforeend",m()),o(),r(),c(),window.addEventListener("hashchange",c))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&u()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&u()})})()});var Et=me(()=>{(function(){"use strict";let b=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],w={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},h=2500,f=0,_=0,z=null;function y(){if(z)return z;let M=document.createElement("div");return M.className="admin-konami-hud",M.setAttribute("aria-hidden","true"),M.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(M),z=M,M}function S(){if(f===0){z&&z.classList.remove("is-on");return}let M=y();M.classList.add("is-on");let L=M.querySelector(".admin-konami-hud-keys");L&&(L.innerHTML=b.map((P,k)=>`<span class="admin-konami-hud-key ${k<f?"is-filled":""}">${w[P]}</span>`).join(""));let R=M.querySelector(".admin-konami-hud-progress");if(R){let P=Math.round(f/b.length*100);R.style.width=P+"%"}}function m(M){f=0,_&&(clearTimeout(_),_=0),M||S()}function D(){_&&clearTimeout(_),_=setTimeout(()=>m(),h)}async function q(){try{let M=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!M.ok)throw new Error("HTTP "+M.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(M){console.warn("[konami] trigger failed:",M&&M.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",M=>{let L=M.target;if(L&&(L.tagName==="INPUT"||L.tagName==="TEXTAREA"||L.isContentEditable))return;let R=b[f];if(!(M.key===R||R==="b"&&M.key.toLowerCase()==="b"||R==="a"&&M.key.toLowerCase()==="a")){f=M.key===b[0]?1:0,S(),f>0?D():_&&(clearTimeout(_),_=0);return}if(f++,S(),f>=b.length){m(!0),q();return}D()}),window.AdminKonami={trigger:q}})()});var $t=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;function w(i){return i==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:i==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:i==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function h(){let i=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,a=i?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${i?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${b(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${a}`:""}
                <span id="fontsTotalSize" style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.12em">${ServerI18n.t("fontsTotalPlaceholder")}</span>
              </div>
            </div>
            <div id="adminFontEmptyStateHost"></div>
            ${i?`
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
    `}var f=null,_=[];function z(i,a){var t=document.getElementById("adminFontEmptyStateHost");if(!t)return;if((i||[]).some(u=>u.type==="uploaded")){t.innerHTML="";return}t.innerHTML="";var c=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:a?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var u=document.getElementById("adminFontFileInput");u&&u.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});c.dataset.emptyKind="fonts",t.appendChild(c)}function y(i,a){let t=i.weight||"\u2014",o=i.sizeLabel||"\u2014",c=i.foundry||(i.type==="system"?"System":i.type==="default"?"Google / Noto":"Uploaded"),u=i.format||"\u2014",l=i.status||i.type,v=`font-family: "${b(i.name)}", sans-serif;`,g=w(l),E=[];if(a){if(l!=="default"&&E.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${b(i.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),l!=="default"){let T=l==="enabled"||l==="system",I=T?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");E.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${b(i.name)}" data-enabled="${T?"true":"false"}">${I}</button>`)}i.type==="uploaded"&&(E.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${b(i.name)}" title="${b(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),E.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${b(i.name)}">${b(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${b(i.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${v}" class="truncate">${b(i.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(E.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${E.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${b(c)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${b(t)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${b(o)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${b(u)}</span><div style="text-align:right">${g}</div></div>`}let S=null,m={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function D(){if(S)return S;try{let i=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return i.ok?(S=(await i.json()).presets||{},S):{}}catch{return{}}}function q(i){return!i||!Number.isFinite(i)?"\u2014":i<1024?i+" B":i<1024*1024?(i/1024).toFixed(1)+" KB":(i/(1024*1024)).toFixed(2)+" MB"}async function M(i){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let a=await D();if(!Object.keys(a).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let t=new Set(["cjk_common","latin"]),o="",c=document.createElement("div");c.className="admin-font-subset-modal-body";let u=()=>{let g=Object.keys(a).map(T=>{let I=m[T]||{label:T,glyphs:"\u2014",estSize:"\u2014"},C=I.labelKey?ServerI18n.t(I.labelKey):I.label,H=t.has(T);return`
          <label class="admin-font-subset-chip${H?" is-active":""}" data-subset-preset="${T}">
            <span class="admin-font-subset-chip-check">${H?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${b(C)}</span>
            <span class="admin-font-subset-chip-range">${b(a[T])}</span>
            <span class="admin-font-subset-chip-meta">${I.glyphs} glyphs \xB7 ${I.estSize}</span>
          </label>`}).join("");c.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${b(i)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${g}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${b(o)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,c.querySelectorAll("[data-subset-preset]").forEach(T=>{T.addEventListener("click",I=>{I.preventDefault();let C=T.dataset.subsetPreset;t.has(C)?t.delete(C):t.add(C),u()})});let E=c.querySelector("[data-subset-custom]");E&&E.addEventListener("input",()=>{o=E.value})};if(u(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:c,width:540}))return;let v=[];if(t.forEach(g=>{a[g]&&v.push(a[g])}),o.trim()&&v.push(o.trim()),!v.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await L(i,v.join(","))}async function L(i,a){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:i}),!0);let t=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(i)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:a})}),o=await t.json().catch(()=>({}));if(t.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!t.ok){window.showToast?.(o.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:t.status}),!1);return}let c=o.saved_bytes||0,u=Math.round((o.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:i,before:q(o.original_size),after:q(o.new_size),pct:u}),!0),k()}catch(t){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:t.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function R(i){try{let a=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:i})});if(!a.ok)throw new Error("HTTP "+a.status);f=i,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:i}),!0),k()}catch(a){console.error("[admin-fonts] set default failed:",a),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function P(i,a){try{let t=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(i)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!a})});if(!t.ok)throw new Error("HTTP "+t.status);window.showToast(ServerI18n.t(a?"fontsToggleOffToast":"fontsToggleOnToast",{name:i}),!0),k()}catch(t){console.error("[admin-fonts] toggle failed:",t),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function k(){var i=document.getElementById("adminFontList");if(!i)return;let a=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var t=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!t.ok)throw new Error("HTTP "+t.status);var o=await t.json(),c=o.fonts||[];if(_=c,window.AdminTabs?.setTabCount?.("assets","fonts",c.length||""),z(c,a),c.length===0){i.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,p(c);return}i.innerHTML=c.map(u=>y(u,a)).join(""),p(c),d()}catch(u){console.error("[admin-fonts] fetch failed:",u),i.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,z([],a)}}async function x(i){try{let a=await i.slice(0,4).arrayBuffer(),t=new Uint8Array(a);return t[0]===0&&t[1]===1&&t[2]===0&&t[3]===0?"TTF":t[0]===79&&t[1]===84&&t[2]===84&&t[3]===79?"OTF":t[0]===119&&t[1]===79&&t[2]===70&&t[3]===50?"WOFF2":t[0]===116&&t[1]===114&&t[2]===117&&t[3]===101?"TTF":t[0]===116&&t[1]===116&&t[2]===99&&t[3]===102?"TTC":null}catch{return null}}function K(i,a){let t=document.getElementById("adminFontDropStatus");if(t){if(!i){t.textContent="",t.hidden=!0,t.classList.remove("is-good","is-bad");return}t.hidden=!1,t.textContent=i,t.classList.toggle("is-good",a==="good"),t.classList.toggle("is-bad",a==="bad")}}function A(i){let a=document.getElementById("adminFontUploadError");if(!a)return;if(!i){a.hidden=!0,a.innerHTML="";return}a.hidden=!1,a.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${b(i)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let t=a.querySelector("[data-font-error-retry]");t&&t.addEventListener("click",function(){let o=document.getElementById("adminFontFileInput");o&&o.click()})}async function N(i){if(!i)return;A("");let a=i.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(a)){window.showToast(ServerI18n.t("invalidFileType"),!1),K(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),A(ServerI18n.t("fontsExtNotSupportedFull"));return}if(i.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),K(ServerI18n.t("fontsFileTooLarge"),"bad"),A(ServerI18n.t("fontsFileTooLargeFull"));return}let t=await x(i);if(!t){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),K(ServerI18n.t("fontsMagicInvalid"),"bad"),A(ServerI18n.t("fontsMagicValidationFailed"));return}K(ServerI18n.t("fontsUploadValidated",{magic:t,size:(i.size/1024).toFixed(1)}),"good");try{var o=new FormData;o.append("fontfile",i);var c=await window.csrfFetch("/admin/upload_font",{method:"POST",body:o}),u=await c.json();c.ok?(window.showToast(u.message||ServerI18n.t("fontUploadFallback")),K(ServerI18n.t("fontsUploadedStatus",{filename:i.name}),"good"),A(""),await k()):(window.showToast(u.error||ServerI18n.t("uploadFailed"),!1),K(u.error||ServerI18n.t("uploadFailed"),"bad"),A(u.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(l){console.error("[admin-fonts] upload error:",l),window.showToast(ServerI18n.t("uploadNetworkError"),!1),K(ServerI18n.t("fontsNetworkErrorShort"),"bad"),A(ServerI18n.t("fontsNetworkDisconnected"))}}function p(i){let a=document.getElementById("fontsTotalSize");a&&(a.textContent=ServerI18n.t("fontsTotalCount",{n:i.length}))}function d(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(i=>{i.addEventListener("click",a=>{if(a.target.closest(".admin-font-delete-btn"))return;let t=i.dataset.font,o=document.getElementById("fontsPreviewFamily"),c=document.getElementById("fontsPreviewHeadline"),u=document.getElementById("fontsPreviewLatin"),l=document.getElementById("fontsPreviewCJK");o&&(o.textContent=t);let v=`"${t}", sans-serif`;c&&(c.style.fontFamily=v),u&&(u.style.fontFamily=v),l&&(l.style.fontFamily=v)})})}async function r(){var i=document.getElementById("adminFontFileInput");if(i){var a=i.files&&i.files[0];if(!a){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await N(a),i.value=""}}function e(){let i=document.getElementById("adminFontDrop"),a=document.getElementById("adminFontFileInput");!i||!a||(i.addEventListener("click",t=>{t.target!==a&&a.click()}),i.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),a.click())}),["dragenter","dragover"].forEach(t=>{i.addEventListener(t,o=>{o.preventDefault(),o.stopPropagation(),i.classList.add("is-drag")})}),["dragleave","drop"].forEach(t=>{i.addEventListener(t,o=>{o.preventDefault(),o.stopPropagation(),i.classList.remove("is-drag")})}),i.addEventListener("drop",async t=>{let o=t.dataTransfer&&t.dataTransfer.files;o&&o[0]&&await N(o[0])}))}async function s(i){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",i),confirmLabel:ServerI18n.t("deleteBtn")}))try{var t=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(i),{method:"DELETE"}),o=await t.json();t.ok?(window.showToast(o.message||ServerI18n.t("fontDeleteFallback")),await k()):window.showToast(o.error||ServerI18n.t("deleteFailed"),!1)}catch(c){console.error("[admin-fonts] delete error:",c),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function n(){var i=document.getElementById("settings-grid");if(i){i.insertAdjacentHTML("beforeend",h());var a=document.getElementById("adminFontFileInput");a&&a.addEventListener("change",r),e();var t=document.getElementById("adminFontList");t&&t.addEventListener("click",function(o){var c=o.target.closest(".admin-font-delete-btn");if(c){o.stopPropagation(),s(c.dataset.name);return}var u=o.target.closest(".admin-font-default-btn");if(u){o.stopPropagation(),R(u.dataset.name);return}var l=o.target.closest(".admin-font-toggle-btn");if(l){o.stopPropagation();let g=l.dataset.enabled==="true";P(l.dataset.name,g);return}var v=o.target.closest(".admin-font-subset-btn");v&&(o.stopPropagation(),M(v.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(o=>o.ok?o.json():null).then(o=>{o&&Array.isArray(o.FontFamily)&&(f=o.FontFamily[3]||null)}).catch(()=>{}).finally(k)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var i=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&n()});i.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&n()}})})()});var xt=me(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let w="sec-scheduler",h=5e3,f=null,_=null;function z(n,i,a,t){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${n}">
        <input type="text" placeholder="${m(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${m(i)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${m(a||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${t||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function y(n){var i=n==="active"?"is-success":n==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+i+'" title="'+m(n)+'"></span>'}function S(n){let i=n.state==="paused",a=n.repeat_count===void 0?"\u2014":n.repeat_count===-1?"\u221E":String(n.repeat_count),t=n.repeat_count>0&&typeof n.remaining=="number"?String(n.repeat_count-n.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${m(n.id)}">
        ${y(n.state)}
        <div>
          <div class="admin-scheduler-job-title">#${b(n.id)}</div>
          <div class="admin-scheduler-job-meta">${b(ServerI18n.t("schedulerMessages"))} ${n.messages?n.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${n.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${b(t)}</span>
        <span class="admin-scheduler-job-val">${b(a)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${i?"is-active":"is-warn"}"
            data-job-id="${m(n.id)}" data-action="${i?"resume":"pause"}">
            ${b(ServerI18n.t(i?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${m(n.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function m(n){return b(n)}function D(){let n=document.querySelectorAll("#schedulerMessages [data-msg-index]"),i=[];return n.forEach(function(a){let t=a.querySelector(".scheduler-msg-text").value.trim(),o=a.querySelector(".scheduler-msg-color").value,c=parseInt(a.querySelector(".scheduler-msg-size").value,10)||48;t&&i.push({text:t,color:o,size:c})}),i}function q(n,i,a){let t=document.getElementById("schedulerMessages");if(!t)return;let o=t.children.length;t.insertAdjacentHTML("beforeend",z(o,n||"",i||"#ffffff",a||48))}function M(n){let i=n.closest("[data-msg-index]");i&&i.remove();let a=document.getElementById("schedulerMessages");a&&a.querySelectorAll("[data-msg-index]").forEach(function(t,o){t.dataset.msgIndex=o})}async function L(){let n=D();if(n.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let i=parseInt(document.getElementById("schedulerInterval").value,10);if(!i||i<1||i>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let a=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(a)||a<-1||a>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let t=document.getElementById("schedulerCreateBtn");t&&(t.disabled=!0);try{let o=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:n,interval_sec:i,repeat_count:a})}),c=await o.json();o.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await p()):showToast(c.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(o){console.error("Scheduler create error:",o),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{t&&(t.disabled=!1)}}function R(n){return"msg"}function P(n){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[n]||"\u25C8"}function k(n){return n.next_run_at?new Date(n.next_run_at*1e3).getHours():new Date().getHours()}function x(n){if(n.next_run_at){let i=new Date(n.next_run_at*1e3);return String(i.getHours()).padStart(2,"0")+":"+String(i.getMinutes()).padStart(2,"0")}return"--:--"}function K(n){let i=n.id||"job",a=Array.isArray(n.messages)?n.messages.length:null;return"Job #"+i+(a!=null?" \xB7 "+a+" messages":"")}function A(n){let i=document.querySelector("[data-sch-timeline]");if(!i)return;let a=[],t=new Date().getHours();for(let c=0;c<24;c++){let u=c>=Math.max(0,t-1)&&c<=Math.min(23,t+2);a.push('<div class="admin-sch-timeline-hour'+(u?" is-peak":"")+'">'+String(c).padStart(2,"0")+"</div>")}let o=(n||[]).map(function(c){let u=R(c),l=P(u),v=c.state!=="paused";return'<div class="admin-sch-timeline-row'+(v?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+b(x(c))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+u+'">'+l+'</span><span class="admin-sch-evt-desc">'+b(K(c))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(v?" is-on":"")+'">'+ServerI18n.t(v?"uiOn":"uiOff")+"</span></div></div>"}).join("");i.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+a.join("")+"</div></div>"+(o||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+b(ServerI18n.t("noActiveJobs"))+"</div>"))}function N(n){let i=document.querySelector("[data-sch-calendar]");if(!i)return;let a=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],t=new Date,o=(t.getDay()+6)%7,c=new Date(t);c.setDate(t.getDate()-o);let u=a.map(function(v,g){let E=new Date(c);return E.setDate(c.getDate()+g),'<div class="admin-sch-calendar-day-head'+(g===o?" is-today":"")+'">'+b(v)+'<span class="date">'+E.getDate()+"</span></div>"}).join(""),l=[0,1,2,3,4,5,6].map(function(v){return'<div class="admin-sch-calendar-cell">'+(v===o?(n||[]).slice(0,5).map(function(E){let T=R(E),I=P(T);return'<span class="admin-sch-cal-chip is-'+T+'">'+b(x(E))+" "+I+"</span>"}).join(""):"")+"</div>"}).join("");i.innerHTML='<div class="admin-sch-calendar-head">'+u+'</div><div class="admin-sch-calendar-body">'+l+"</div>"}async function p(){let n=document.getElementById("schedulerJobsList"),i=document.getElementById("schedulerJobsCount");if(n)try{let a=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!a.ok){n.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadJobsFailed"))+"</div>",i&&(i.textContent="\u2014");return}let t=await a.json();if(!Array.isArray(t.jobs)){n.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadJobsFailed"))+"</div>",i&&(i.textContent="\u2014");return}i&&(i.textContent=ServerI18n.t("schItemCount",{n:t.jobs.length})),A(t.jobs),N(t.jobs);let o=document.querySelector("[data-sch-meta]");if(o){let c=new Date().toISOString().slice(0,10);o.textContent=ServerI18n.t("schTodayMeta",{date:c,n:t.jobs.length})}if(t.jobs.length===0){n.innerHTML="";let c=window.AdminEmpty.render("scheduler");c.dataset.emptyKind="scheduler",n.appendChild(c);return}n.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+b(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+b(ServerI18n.t("schColInterval"))+"</span><span>"+b(ServerI18n.t("schColSent"))+"</span><span>"+b(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+t.jobs.map(S).join("")}catch(a){console.error("Scheduler fetch error:",a),n.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadJobsError"))+"</div>"}}async function d(n,i){try{let a=await csrfFetch("/admin/scheduler/"+encodeURIComponent(i),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:n})}),t=await a.json();a.ok?(showToast(i==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await p()):showToast(t.error||ServerI18n.t("actionFailed"),!1)}catch(a){console.error("Scheduler toggle error:",a),showToast(ServerI18n.t("actionFailed"),!1)}}async function r(n){try{let i=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:n})}),a=await i.json();i.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await p()):showToast(a.error||ServerI18n.t("cancelFailed"),!1)}catch(i){console.error("Scheduler cancel error:",i),showToast(ServerI18n.t("cancelFailed"),!1)}}function e(){let n=document.getElementById("advanced-grid")||document.getElementById("settings-grid");if(!n)return;n.insertAdjacentHTML("beforeend",`
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
    `);let i=document.querySelectorAll("[data-sch-view]");i.forEach(u=>{u.addEventListener("click",()=>{let l=u.dataset.schView;i.forEach(E=>{E.classList.toggle("is-active",E===u),E.setAttribute("aria-selected",E===u?"true":"false")});let v=document.querySelector("[data-sch-timeline]"),g=document.querySelector("[data-sch-calendar]");v&&(v.hidden=l!=="timeline"),g&&(g.hidden=l!=="calendar")})}),q("","#ffffff",48);let a=document.getElementById("schedulerMessages");a&&a.addEventListener("click",function(u){let l=u.target.closest(".scheduler-remove-msg");l&&M(l)});let t=document.getElementById("schedulerAddMsg");t&&t.addEventListener("click",function(){q("","#ffffff",48)});let o=document.getElementById("schedulerCreateBtn");o&&o.addEventListener("click",L);let c=document.getElementById("schedulerJobsList");c&&c.addEventListener("click",function(u){let l=u.target.closest(".scheduler-job-toggle");if(l){d(l.dataset.jobId,l.dataset.action);return}let v=u.target.closest(".scheduler-job-cancel");v&&r(v.dataset.jobId)}),f&&(clearInterval(f),f=null),_||(_=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(w)},intervalMs:h,tick:p}),window.addEventListener("beforeunload",function(){_&&(_(),_=null)}))}function s(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let n=!1;new MutationObserver(function(){if((document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(w)&&!n){n=!0;try{e()}finally{n=!1}}}).observe(document.body,{childList:!0,subtree:!0}),(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(w)&&e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()})()});var Lt=me(()=>{(function(){"use strict";let b="admin-security-v2-page";var w=window.AdminUtils.escapeHtml;function h(){let e=s=>ServerI18n.t(s);return`
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
      </div>`}function f(e){if(!e)return 0;let s=0;e.length>=8&&s++,e.length>=12&&s++;let n=(/[a-z]/.test(e)?1:0)+(/[A-Z]/.test(e)?1:0)+(/\d/.test(e)?1:0)+(/[^\w]/.test(e)?1:0);return n>=2&&s++,n>=3&&s++,Math.min(4,s)}function _(e){let s=document.getElementById("sec2-pw-meter"),n=document.getElementById("sec2-pw-label");if(!s||!n)return;let i=f(e),a=[0,25,50,75,100],t=["","is-bad","is-warn","is-warn","is-good"],o=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];s.style.width=a[i]+"%",s.className=t[i],n.textContent=o[i]}async function z(e){e.preventDefault();let s=document.getElementById("sec2-pw-current").value,n=document.getElementById("sec2-pw-new").value,i=document.getElementById("sec2-pw-confirm").value;if(!s||!n||!i){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(n.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(n!==i){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let a=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:s,new_password:n,confirm_password:i})}),t=await a.json().catch(()=>({}));a.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),_("")):window.showToast&&showToast(t.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(a){console.error("Password change error:",a),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function y(){let e=document.getElementById("sec2-wsa-status");try{let s=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!s.ok)throw new Error(s.status);let n=await s.json();document.getElementById("sec2-wsa-toggle").checked=!!n.require_token,document.getElementById("sec2-wsa-token").value=n.token||"",e.textContent=n.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),e.className="admin-ui-chip admin-sec-status-chip "+(n.require_token?"is-active":"");let i=localStorage.getItem("ws-auth-last-rotation");document.getElementById("sec2-wsa-lastrot").textContent=i?new Date(parseInt(i,10)).toLocaleString():"\u2014"}catch{e.textContent=ServerI18n.t("security2LoadFailed"),e.className="admin-ui-chip is-danger admin-sec-status-chip"}}function S(e){return String(e||"").split(/\n+/).map(s=>s.trim()).filter(Boolean)}function m(e){return String(e||"").split(",").map(s=>s.trim().toUpperCase()).filter(Boolean)}function D(e,s){let n=document.getElementById(e);n&&(n.textContent=s==null||s===""?"\u2014":String(s))}async function q(){try{let e=await fetch("/admin/security/settings",{credentials:"same-origin"}),s=await e.json().catch(()=>({}));if(!e.ok)throw new Error(s.error||e.status);let n=s.ip_allowlist||{},i=s.cors||{},a=s.tls||{},t=!!n.enabled,o=Array.isArray(n.entries)?n.entries:[],c=document.getElementById("sec2-ip-dot"),u=document.getElementById("sec2-ip-status-chip"),l=document.getElementById("sec2-ip-toggle"),v=document.getElementById("sec2-ip-entries");c&&(c.classList.toggle("is-lime",t),c.classList.toggle("is-amber",!t)),u&&(u.textContent=t?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),u.className="admin-ui-chip admin-sec-status-chip "+(t?"is-active":"is-warn")),l&&(l.checked=t),v&&(v.value=o.join(`
`)),D("sec2-ip-current",n.current_ip||"\u2014"),D("sec2-ip-status-line",t?ServerI18n.t("security2IpStatusEnabled",{n:o.length}):ServerI18n.t("security2IpStatusDisabled"));let g=Array.isArray(i.origins)?i.origins:["*"],E=Array.isArray(i.methods)?i.methods:[],T=document.getElementById("sec2-cors-origins"),I=document.getElementById("sec2-cors-credentials"),C=document.getElementById("sec2-cors-methods"),H=document.getElementById("sec2-cors-cred-dot");T&&(T.value=g.join(`
`)),I&&(I.checked=!!i.supports_credentials),C&&(C.value=E.join(", ")),H&&(H.classList.toggle("is-lime",!i.supports_credentials),H.classList.toggle("is-amber",!!i.supports_credentials)),D("sec2-cors-origins-line",g.join(", ")),D("sec2-cors-credentials-line",i.supports_credentials?"true":"false"),D("sec2-cors-methods-line",E.join(", "));let B=a.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:a.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");D("sec2-hsts-status",B)}catch(e){console.error("Security settings load error:",e);let s=document.getElementById("sec2-ip-status-chip");s&&(s.textContent=ServerI18n.t("security2LoadFailed"),s.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function M(e){let s={};if(e==="ip")s.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:S(document.getElementById("sec2-ip-entries")?.value||"")};else if(e==="cors"){let n=S(document.getElementById("sec2-cors-origins")?.value||"");s.cors={origins:n.length?n:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:m(document.getElementById("sec2-cors-methods")?.value||"")}}try{let n=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),i=await n.json().catch(()=>({}));if(!n.ok){window.showToast&&showToast(i.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await q()}catch(n){console.error("Security settings save error:",n),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function L(){let e=document.getElementById("sec2-wsa-toggle").checked,s=document.getElementById("sec2-wsa-token").value.trim();if(e&&!s){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}try{let n=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:e,token:s})}),i=await n.json().catch(()=>({}));n.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0),await y()):window.showToast&&showToast(i.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function R(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))try{let s=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),n=await s.json().catch(()=>({}));if(s.ok){window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0);try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await y()}else window.showToast&&showToast(n.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}function P(){let e=document.getElementById("sec2-wsa-token").value;if(!e){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function k(){let e=document.getElementById("sec2-wsa-token");e.type=e.type==="password"?"text":"password"}async function x(e){let s={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:i=>ServerI18n.t("security2ToastApiTokensRevoked",{n:i.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[e];if(!(!s||!await window.HudConfirm?.open({icon:"\u26A0",title:s.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:s.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:s.severity||"warn",body:s.confirm,confirmLabel:s.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")})))try{let i=await window.csrfFetch(s.url,{method:"POST"}),a=await i.json().catch(()=>({}));if(!i.ok){window.showToast&&showToast(a.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(window.showToast&&showToast(s.ok(a),!0),e==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await y()}}catch(i){console.error("Security danger action error:",i),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}function K(){let e=document.getElementById("sec2-session-self-line");if(e){let i=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),a=navigator.platform||navigator.userAgentData?.platform||"",t=i?i[0].split("/")[0]:"Browser";e.textContent=ServerI18n.t("security2SessionSelfLine",{browser:t,platform:a})}let s=document.getElementById("sec2-tls-dot"),n=document.getElementById("sec2-tls-status");if(s&&n){let i=location.protocol==="https:";s.classList.add(i?"is-lime":"is-crimson"),n.textContent=i?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function A(){let e=document.getElementById("sec2-pw-form");e&&e.addEventListener("submit",z);let s=document.getElementById("sec2-pw-new");s&&s.addEventListener("input",n=>_(n.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",L),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",R),document.getElementById("sec2-wsa-copy")?.addEventListener("click",P),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",k),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>M("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>M("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(n=>{n.addEventListener("click",()=>{let i=document.querySelector(`[data-sec-disclosure="${n.dataset.secDisclose}"]`);i&&(i.hidden=!i.hidden,n.setAttribute("aria-expanded",i.hidden?"false":"true"),i.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(n=>{n.dataset.secBound!=="1"&&(n.dataset.secBound="1",n.addEventListener("click",()=>x(n.dataset.secDanger)))}),K(),y(),q()}function N(){}function p(){let e=document.querySelector(".admin-dash-grid"),s=document.getElementById(b);if(!e||!s)return;let n=e.dataset.activeRoute||"live",i=e.dataset.activeLeaf||n;s.style.display=n==="security"||n==="system"&&i==="security"?"":"none"}function d(){let e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",h()),A(),p())}function r(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let e=null;function s(){let i=document.querySelector(".admin-dash-grid");!i||e||(e=new MutationObserver(p),e.observe(i,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)?d():void 0,s(),p()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",p),document.addEventListener("admin-panel-rendered",()=>{d(),s(),p()}),s(),d()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var Ct=me(()=>{(function(){"use strict";let b="admin-backup-v2-page";var w=window.AdminUtils.escapeHtml;function h(){let n=i=>ServerI18n.t(i);return`
      <div id="${b}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
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
      </div>`}async function f(){try{let n=await fetch("/get_settings",{credentials:"same-origin"});if(!n.ok)throw new Error(n.status);let i=await n.json(),a=["password","token","secret","hash"],t={};Object.keys(i||{}).forEach(v=>{a.some(g=>v.toLowerCase().includes(g))||(t[v]=i[v])});let o=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:t},null,2)],{type:"application/json"}),c=URL.createObjectURL(o),u=new Date().toISOString().replace(/[:.]/g,"-"),l=document.createElement("a");l.href=c,l.download="danmu-settings-"+u+".json",document.body.appendChild(l),l.click(),l.remove(),setTimeout(()=>URL.revokeObjectURL(c),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(n){console.error("Settings snapshot error:",n),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let _=null;function z(){_=null;let n=document.getElementById("bk2-settings-apply");n&&(n.disabled=!0,n.title=ServerI18n.t("backupApplyDisabledTitle"))}async function y(){let n=document.getElementById("bk2-settings-upload"),i=document.getElementById("bk2-settings-diff"),a=document.getElementById("bk2-settings-apply"),t=n&&n.files&&n.files[0];if(!t){z(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let o=await t.text(),c=JSON.parse(o),u=c.settings||c;if(!u||typeof u!="object"||Array.isArray(u))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let l=await fetch("/get_settings",{credentials:"same-origin"}),v=l.ok?await l.json():{},g=[];new Set([...Object.keys(v),...Object.keys(u)]).forEach(T=>{let I=JSON.stringify(v[T]),C=JSON.stringify(u[T]);I!==C&&(I===void 0?g.push("+ "+T+": "+C):C===void 0?g.push("- "+T+": "+I):g.push("~ "+T+": "+I+" \u2192 "+C))}),i.textContent=g.length?g.join(`
`):ServerI18n.t("backupNoDiff"),i.hidden=!1,_=u,a&&(a.disabled=!1,a.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:g.length}),!0)}catch(o){console.error("Dry-run error:",o),z(),i.textContent=ServerI18n.t("backupParseFailedDetail",{msg:o&&o.message?o.message:String(o)}),i.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function S(){let n=document.getElementById("bk2-settings-diff"),i=document.getElementById("bk2-settings-apply");if(!_){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"warn",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let t=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:_})}),o=await t.json().catch(()=>({}));if(!t.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(o.details||o,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(o.applied||[]).length+" settings"),_=null,i&&(i.disabled=!0,i.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(t){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:t&&t.message?t.message:String(t)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function m(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function D(){let n=document.getElementById("bk2-factory-confirm"),i=document.getElementById("bk2-factory-reset");!n||!i||(n.addEventListener("input",()=>{let a=n.value.trim()==="reset";i.classList.toggle("is-ready",a),i.disabled=!a}),i.addEventListener("click",q))}async function q(){let n=document.getElementById("bk2-factory-confirm"),i=document.getElementById("bk2-factory-reset");if((n?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{i&&(i.disabled=!0);let t=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),o=await t.json().catch(()=>({}));if(!t.ok||!o.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),i&&(i.disabled=!1);return}n&&(n.value=""),i&&(i.classList.remove("is-ready"),i.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),P()}catch{i&&(i.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function M(){document.getElementById("bk2-settings-download")?.addEventListener("click",f),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",y),document.getElementById("bk2-settings-apply")?.addEventListener("click",S),document.getElementById("bk2-clear-history")?.addEventListener("click",m),document.getElementById("bk2-pack-export")?.addEventListener("click",k),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",A),document.getElementById("bk2-pack-apply")?.addEventListener("click",N),document.getElementById("bk2-assets-export")?.addEventListener("click",K),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",p),document.getElementById("bk2-assets-apply")?.addEventListener("click",d),D(),P(),x()}let L=null,R=null;async function P(){let n=document.getElementById("bk2-pack-summary");if(n)try{let i=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!i.ok){n.textContent=ServerI18n.t("backupPreviewUnavailable");return}let a=await i.json(),t=(a.total_bytes/(1024*1024)).toFixed(2);n.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:a.file_count||0,mb:t})}catch{n.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function k(){window.location.href="/admin/backup/export",window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function x(){let n=document.getElementById("bk2-assets-summary");if(n)try{let i=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!i.ok){n.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let a=await i.json(),t=(a.total_bytes/(1024*1024)).toFixed(2);n.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:a.file_count||0,mb:t})}catch{n.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function K(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}async function A(){let i=document.getElementById("bk2-pack-upload")?.files?.[0];if(!i){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(i.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let a=new FormData;a.append("file",i);let t=document.getElementById("bk2-pack-diff"),o=document.getElementById("bk2-pack-apply");try{let c=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:a}),u=await c.json().catch(()=>({}));if(!c.ok||!u.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(u.errors||u,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),o&&(o.disabled=!0),L=null;return}if(t){t.hidden=!1;let l=[],v=u.manifest||{};l.push("manifest version: "+(v.version||"?")),l.push("generated_at: "+(v.generated_at?new Date(v.generated_at*1e3).toISOString():"\u2014")),l.push(""),l.push("Will write "+(u.members?.length||0)+" files:"),(u.members||[]).forEach(g=>{l.push("  "+g.label+"/"+g.path.split("/").slice(1).join("/")+" ("+(g.size||0)+" B)")}),u.skipped?.length&&(l.push(""),l.push("Skipped "+u.skipped.length+" entries:"),u.skipped.forEach(g=>l.push("  "+g.path+" \u2014 "+g.reason))),t.textContent=l.join(`
`)}L=i,o&&(o.disabled=!1,o.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:u.members?.length||0}),!0)}catch(c){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:c.message||""}),!1)}}async function N(){if(!L){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let i=new FormData;i.append("file",L);try{let t=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:i})).json().catch(()=>({})),o=document.getElementById("bk2-pack-diff");if(o){o.hidden=!1;let c=[];t.ok?(c.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),c.push(""),c.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&c.push("Skipped "+t.skipped.length+" (see above)")):(c.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),c.push(JSON.stringify(t.errors||t,null,2))),o.textContent=c.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint",{n:t.applied}),!0),L=null;let c=document.getElementById("bk2-pack-apply");c&&(c.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(a){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:a.message||""}),!1)}}async function p(){let i=document.getElementById("bk2-assets-upload")?.files?.[0];if(!i){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(i.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let a=new FormData;a.append("file",i);let t=document.getElementById("bk2-assets-diff"),o=document.getElementById("bk2-assets-apply");try{let c=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:a}),u=await c.json().catch(()=>({}));if(!c.ok||!u.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(u.errors||u,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),o&&(o.disabled=!0),R=null;return}if(t){t.hidden=!1;let l=[],v=u.manifest||{};l.push("manifest version: "+(v.version||"?")),l.push("generated_at: "+(v.generated_at?new Date(v.generated_at*1e3).toISOString():"\u2014")),l.push(""),l.push("Will write "+(u.members?.length||0)+" asset files:"),(u.members||[]).forEach(g=>{l.push("  "+g.path+" ("+(g.size||0)+" B)")}),u.skipped?.length&&(l.push(""),l.push("Skipped "+u.skipped.length+" entries:"),u.skipped.forEach(g=>l.push("  "+g.path+" \u2014 "+g.reason))),t.textContent=l.join(`
`)}R=i,o&&(o.disabled=!1,o.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:u.members?.length||0}),!0)}catch(c){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:c.message||""}),!1)}}async function d(){if(!R){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"warn",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let i=new FormData;i.append("file",R);try{let t=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:i})).json().catch(()=>({})),o=document.getElementById("bk2-assets-diff");if(o){o.hidden=!1;let c=[];t.ok?(c.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),c.push(""),c.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&c.push("Skipped "+t.skipped.length+" (see above)")):(c.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),c.push(JSON.stringify(t.errors||t,null,2))),o.textContent=c.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:t.applied}),!0),R=null;let c=document.getElementById("bk2-assets-apply");c&&(c.disabled=!0),x()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(a){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:a.message||""}),!1)}}function r(){let n=document.querySelector(".admin-dash-grid"),i=document.getElementById(b);if(!n||!i)return;let a=n.dataset.activeLeaf||"dashboard";i.style.display=a==="backup"?"":"none"}function e(){let n=document.getElementById("settings-grid");!n||document.getElementById(b)||(n.insertAdjacentHTML("beforeend",h()),M(),r())}function s(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&e(),r()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",r),document.addEventListener("admin-panel-rendered",()=>{e(),r()}),e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()})()});var At=me(()=>{(function(){"use strict";let b="admin-broadcast-v2-page",w="/admin/broadcast/status",h="/admin/broadcast/toggle",f={mode:"live",started_at:null,total_messages:0,queue_size:0};function _(u){try{window.dispatchEvent(new CustomEvent("danmu-broadcast-changed",{detail:u}))}catch{}}function z(){return{mode:f.mode,started_at:typeof f.started_at=="number"?f.started_at*1e3:null}}let y=null;async function S(){try{let u=await fetch(w,{credentials:"same-origin"});if(!u.ok)return;let l=await u.json();l&&(l.mode==="live"||l.mode==="standby")&&(y=l.session||null,f=l,_(z()))}catch{}}async function m(u){try{let l=await window.csrfFetch(h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:u})});if(!l.ok){let g=await l.json().catch(()=>({}));throw new Error(g&&g.error?g.error:`HTTP ${l.status}`)}return f=await l.json(),_(z()),!0}catch(l){return console.warn("[admin-broadcast] toggle failed:",l),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:l&&l.message||""}),!1),!1}}function D(u){(!Number.isFinite(u)||u<0)&&(u=0);let l=Math.floor(u/1e3),v=String(Math.floor(l/3600)).padStart(2,"0"),g=String(Math.floor(l%3600/60)).padStart(2,"0"),E=String(l%60).padStart(2,"0");return`${v}:${g}:${E}`}function q(){let u=y||{};return u.status==="live"||u.state==="active"}function M(){let u=y||{};return u.status==="ended"||u.state==="ended"}function L(){let u=f.mode||"standby";return M()?"ended":u==="live"?"live":q()?"paused":"standby"}function R(){return`
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
      </div>`}let P=0,k=0,x=0,K=0,A=0;async function N(){try{let u=await fetch("/admin/metrics",{credentials:"same-origin"});if(!u.ok)return;P=(await u.json()).ws_clients||0}catch{}try{let u=await fetch("/admin/fingerprints?limit=1",{credentials:"same-origin"});if(u.ok){let l=await u.json();typeof l.total=="number"&&(k=l.total)}}catch{}}let p={standby:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 OFF"},live:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 ON"},paused:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 PAUSED"},ended:{titleKey:"broadcastEndedTitle",en:"SESSION ENDED"}},d={standby:ServerI18n.t("uiDisplayOff"),live:ServerI18n.t("uiDisplayOn"),paused:"DESKTOP PAUSED",ended:"SESSION ENDED"};function r(){let u=document.getElementById(b);if(!u)return;let l=L(),v=l==="live",g=l==="paused",E=l==="ended",T=l==="standby";u.dataset.bcState=l;let I=u.querySelector("[data-bc-title]"),C=u.querySelector("[data-bc-en]");if(I&&(I.textContent=ServerI18n.t(p[l].titleKey)),C){let Q=v&&f.started_at?Date.now()/1e3-f.started_at:0;C.textContent=v?`DESKTOP \xB7 ON \xB7 ${D(Q*1e3)}`:E&&y?.ended_at?`SESSION ENDED \xB7 ${new Date(y.ended_at*1e3).toISOString().slice(0,10)}`:p[l].en}let H=u.querySelector("[data-bc-body]"),B=u.querySelector("[data-bc-ended]");H&&B&&(H.hidden=E,B.hidden=!E);let $=u.querySelector("[data-bc-statedot]"),j=u.querySelector("[data-bc-statelabel]"),U=u.querySelector("[data-bc-elapsed]"),Y=u.querySelector("[data-bc-sched]");if($&&($.dataset.state=l),j&&(j.textContent=d[l]||d.standby,j.dataset.state=l),U){let Q=v&&f.started_at?Date.now()-f.started_at*1e3:0;U.textContent=D(Q),U.hidden=!v}if(Y){let Q=y?.scheduled_at;if(T&&typeof Q=="number"&&Q>Date.now()/1e3){let se=Math.max(0,Q-Date.now()/1e3),de=String(Math.floor(se/60)).padStart(2,"0"),ue=String(Math.floor(se%60)).padStart(2,"0"),fe=new Date(Q*1e3),ge=`${String(fe.getHours()).padStart(2,"0")}:${String(fe.getMinutes()).padStart(2,"0")}`;Y.textContent=ServerI18n.t("broadcastSchedCountdown",{time:ge,mm:de,ss:ue}),Y.hidden=!1}else Y.hidden=!0}let F=f.total_messages||0,O=f.fire_count||F,V=f.started_at&&(v||g)?Date.now()/1e3-f.started_at:0,ne=T?"\u2014":D(V*1e3).slice(3),W=(Q,se)=>{let de=u.querySelector(Q);de&&(de.textContent=se)};W("[data-bc-stat-elapsed]",T?"\u2014":ne),W("[data-bc-stat-msgs]",T?"0":F.toLocaleString()),W("[data-bc-stat-fp]",T?"0":k.toLocaleString()),W("[data-bc-stat-fire]",T?"0":O.toLocaleString());let Z=u.querySelector("[data-bc-session-ctx]");if(Z){let Q=y||{},se=!!(Q.id||Q.name);if(Z.hidden=!se,se){let de=u.querySelector("[data-bc-session-id]"),ue=u.querySelector("[data-bc-session-started]"),fe=u.querySelector("[data-bc-session-window]");if(de&&(de.textContent=Q.name||Q.id||"\u2014"),ue){let ge=Q.started_at;if(typeof ge=="number"){let G=new Date(ge*1e3),X=ee=>String(ee).padStart(2,"0");ue.textContent=`Started \xB7 ${X(G.getHours())}:${X(G.getMinutes())}:${X(G.getSeconds())}`}else ue.textContent="Started \xB7 \u2014"}if(fe){let ge=Q.started_at;if(typeof ge=="number"){let G=Date.now()-ge*1e3;fe.textContent=`Window \xB7 ${D(G).slice(3)}`}else fe.textContent="Window \xB7 \u2014"}}}let te=u.querySelector("[data-bc-big]");if(te)if(v){let Q=q();te.className="admin-bc-v4__big admin-bc-v5__big is-on",te.textContent=Q?ServerI18n.t("broadcastBigPause"):ServerI18n.t("broadcastBigStop")}else g?(te.className="admin-bc-v4__big admin-bc-v5__big is-resume",te.textContent=ServerI18n.t("broadcastBigResume")):(te.className="admin-bc-v4__big admin-bc-v5__big is-off",te.textContent=ServerI18n.t("broadcastBigStart"));let oe=u.querySelector("[data-bc-confirm-hint]");if(oe&&(oe.hidden=!(v&&!q())),u.querySelectorAll("[data-bc-clear]").forEach(Q=>{Q.disabled=T||E}),E){let Q=y||{},se=Q.duration_sec?D(Q.duration_sec*1e3).slice(3):"\u2014";W("[data-bc-end-dur]",se),W("[data-bc-end-msgs]",String(Q.total_messages||F||"\u2014")),W("[data-bc-end-fp]",String(Q.unique_fp||k||"\u2014")),W("[data-bc-end-fire]",String(Q.fire_count||O||"\u2014"))}}async function e(){let u=L();if(u==="standby")await m("live")&&window.showToast&&showToast(ServerI18n.t("broadcastToastSwitchedLive"),!0);else if(u==="paused")await m("live")&&window.showToast&&showToast(ServerI18n.t("broadcastToastResumed"),!0);else if(u==="live"){if(q()){await m("standby")&&window.showToast&&showToast(ServerI18n.t("broadcastToastPaused"),!0),r();return}let v=f.started_at?Date.now()-f.started_at*1e3:0,g=D(v),E=f.total_messages||0,T=k.toLocaleString();if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("broadcastStopLabel"),subtitle:ServerI18n.t("cfmSubStopDisplay"),severity:"warn",body:`
              <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                ${ServerI18n.t("broadcastStopBodyDesc")}
              </div>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:10px 12px;margin-top:12px;background:var(--hud-bg2, #182239);border-radius:6px;border:1px solid var(--hud-line, rgba(148,163,184,0.18));text-align:center;">
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">${ServerI18n.t("uiStatMsgs")}</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${E.toLocaleString()}</div></div>
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">FP</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${T}</div></div>
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">${ServerI18n.t("uiColTime")}</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${g}</div></div>
              </div>
              <div style="margin-top:12px;font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:0.3px;color: var(--color-ink-warning);">
                ${ServerI18n.t("broadcastStopBodyWarn")}
              </div>`,confirmLabel:ServerI18n.t("broadcastStopLabel"),cancelLabel:ServerI18n.t("cancel"),width:440}))return;await m("standby")&&window.showToast&&showToast(ServerI18n.t("broadcastToastStopped")+" \xB7 "+ServerI18n.t("uiDisplayOff"),!0)}r()}async function s(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"warn",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearModalConfirm")}))try{let l=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});l.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:l.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}function n(){let u=document.getElementById(b);u&&(u.querySelector("[data-bc-big]")?.addEventListener("click",e),u.querySelector("[data-bc-clear]")?.addEventListener("click",s))}function i(){x||(S(),N(),r(),K=setInterval(S,5e3),x=setInterval(()=>{N().then(r)},1e4),A=setInterval(r,1e3))}function a(){K&&(clearInterval(K),K=0),x&&(clearInterval(x),x=0),A&&(clearInterval(A),A=0)}function t(){let u=document.querySelector(".admin-dash-grid"),l=document.getElementById(b);if(!u||!l)return;let v=u.dataset.activeLeaf||"dashboard",g=v==="overlay"||v==="broadcast";l.style.display=g?"":"none",g?i():a()}function o(){let u=document.getElementById("settings-grid");!u||document.getElementById(b)||(u.insertAdjacentHTML("beforeend",R()),n(),t())}function c(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&o(),t()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",t),document.addEventListener("admin-panel-rendered",()=>{o(),t()}),o()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var Bt=me(()=>{(function(){"use strict";var b=window.AdminUtils.loadDetailsState,w=window.AdminUtils.saveDetailsState,h=window.AdminUtils.escapeHtml;let f=["keyword","regex","replace","rate_limit"],_=["block","replace","allow"];function z(B){var $=b();return $[B]!==void 0?$[B]:!1}function y(B,$){if(typeof ServerI18n<"u"&&ServerI18n.t){let j=ServerI18n.t(B);if(j&&j!==B)return j}return $||B}let S={keyword:"is-cyan",regex:"is-cyan",replace:"is-amber",rate_limit:"is-danger"},m={block:"var(--hud-crimson)",replace:"var(--hud-amber)",allow:"var(--hud-lime)"};function D(){return`
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
            ${[{id:"url",label:ServerI18n.t("fltPresetUrl"),pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",label:ServerI18n.t("fltPresetAllcaps"),pattern:"^[A-Z\\W\\s]{8,}$",action:"mask"},{id:"repeat",label:ServerI18n.t("fltPresetRepeat"),pattern:"(.)\\1{6,}",action:"mask"},{id:"emojionly",label:"Emoji-only",pattern:"^[\\p{Emoji}\\s]+$",action:"block"}].map(B=>`
              <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${B.id}" data-flt-pattern="${B.pattern}" data-flt-action="${B.action}" data-flt-label="${B.label}">
                <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
                <span class="admin-flt-v4__qchip-label">${B.label}</span>
                <span class="admin-flt-v4__qchip-hits" data-flt-quick-hits="${B.id}">\u2014</span>
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
      </div>`}let q="all";function M(B){let $=S[B.type]||"is-default",j=m[B.action]||"var(--color-text-muted)",U={keyword:"ulWord",regex:"ulRegex",replace:"ulReplace",rate_limit:"ulRate"},Y=ServerI18n.t(U[B.type]||"ulWord"),F=B.pattern;if(B.type==="replace"&&B.replacement!==void 0&&(F=`${B.pattern}  \u2192  ${B.replacement}`),B.type==="rate_limit"){let V=B.max_count||5,ne=B.window_sec||60;F=`${B.pattern}  \xB7  ${V}/${ne}s`}return`
      <div class="hud-table-row hud-rule-row" style="grid-template-columns: 1.6fr 80px 80px 60px 60px 40px;${B.enabled?"":"opacity:0.45;"}" data-rule-id="${h(B.id)}" data-rule-type="${h(B.type)}">
        <span style="font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all">${h(F)}</span>
        <span class="hud-pill ${$}">${Y}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;padding:2px 6px;border-radius:3px;background:${j};color:#000;font-weight:700;width:fit-content;text-transform:uppercase">${h(B.action)}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">P${h(String(B.priority))}</span>
        <label class="relative inline-block" style="width:32px;align-self:center" title="${h(B.enabled?y("enabled","Enabled"):y("disabled","Disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${h(B.id)}" ${B.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${B.enabled?"is-on":"is-off"}" style="cursor:pointer"></span>
        </label>
        <button class="filter-delete-btn" type="button" data-rule-id="${h(B.id)}" title="${y("deleteRule","Delete")}" aria-label="${y("deleteRule","Delete")}">${window.AdminUtils.closeIcon}</button>
      </div>`}function L(B){let $={all:B.length,keyword:0,regex:0,replace:0,rate_limit:0};B.forEach(U=>{$[U.type]!=null&&$[U.type]++}),Object.keys($).forEach(U=>{let Y=document.querySelector(`[data-filter-count="${U}"]`);Y&&(Y.textContent=$[U])});let j=document.querySelector('[data-mod-stat="rules"]');j&&(j.textContent=$.all)}async function R(){let B=document.querySelector('[data-mod-stat="blacklist"]');if(B)try{let $=await fetch("/admin/blacklist/get",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json(),U=Array.isArray(j)?j:j.keywords||[];B.textContent=String(U.length)}catch{}}async function P(){try{let B=await csrfFetch("/admin/filters/list");if(!B.ok)throw new Error("HTTP "+B.status);return(await B.json()).rules||[]}catch(B){return console.error("Failed to fetch filter rules:",B),showToast(y("fetchFiltersFailed","Failed to load filter rules"),!1),[]}}async function k(){let B=document.getElementById("filterRulesList");if(!B)return;B.innerHTML=`<div style="padding:12px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${y("loading","Loading...")}</div>`;let $=await P();if(L($),R(),$.length===0){if(window.AdminEmpty){let U=window.AdminEmpty.render("filters");U.setAttribute("data-empty-kind","filters"),B.innerHTML="",B.appendChild(U)}else B.innerHTML=`<div data-empty-kind="filters" style="padding:18px 14px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${y("noFilterRules","No filter rules configured.")}</div>`;return}let j=q==="all"?$:$.filter(U=>U.type===q);B.innerHTML=j.map(M).join("")}async function x(){let B=document.getElementById("filterType"),$=document.getElementById("filterAction"),j=document.getElementById("filterPattern"),U=document.getElementById("filterReplacement"),Y=document.getElementById("filterPriority"),F=document.getElementById("filterMaxCount"),O=document.getElementById("filterWindowSec"),V=B.value,ne=(j.value||"").trim();if(!ne){showToast(y("patternRequired","Pattern is required"),!1),j.focus();return}let W={type:V,pattern:ne,action:$.value,priority:parseInt(Y.value,10)||0};V==="replace"&&(W.replacement=U.value||""),V==="rate_limit"&&(W.max_count=parseInt(F.value,10)||5,W.window_sec=parseFloat(O.value)||60);try{let Z=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)}),te=await Z.json();if(!Z.ok){showToast(te.error||y("addRuleFailed","Failed to add rule"),!1);return}showToast(y("ruleAdded","Rule added"),!0),j.value="",U.value="",await k()}catch(Z){console.error("Add filter rule error:",Z),showToast(y("addRuleFailed","Failed to add rule"),!1)}}async function K(B){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("filtersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteFilterRule"),severity:"danger",body:y("confirmDeleteRule","Delete this filter rule?"),confirmLabel:ServerI18n.t("filtersDeleteConfirm")}))try{let j=await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:B})}),U=await j.json();if(!j.ok){showToast(U.error||y("deleteRuleFailed","Failed to delete rule"),!1);return}showToast(y("ruleDeleted","Rule deleted"),!0),await k()}catch(j){console.error("Delete filter rule error:",j),showToast(y("deleteRuleFailed","Failed to delete rule"),!1)}}async function A(B,$){try{let j=await csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:B,updates:{enabled:$}})}),U=await j.json();if(!j.ok){showToast(U.error||y("updateRuleFailed","Failed to update rule"),!1),await k();return}}catch(j){console.error("Toggle filter rule error:",j),showToast(y("updateRuleFailed","Failed to update rule"),!1),await k()}}async function N(){let B=document.getElementById("filterTestText"),$=document.getElementById("filterTestResult"),j=document.getElementById("filterType"),U=document.getElementById("filterAction"),Y=document.getElementById("filterPattern"),F=document.getElementById("filterReplacement"),O=document.getElementById("filterMaxCount"),V=document.getElementById("filterWindowSec"),ne=(B.value||"").trim();if(!ne){showToast(y("sampleTextRequired","Enter sample text to test"),!1),B.focus();return}let W=(Y.value||"").trim();if(!W){showToast(y("patternRequired","Pattern is required"),!1),Y.focus();return}let Z=j.value,te={type:Z,pattern:W,action:U.value};Z==="replace"&&(te.replacement=F.value||""),Z==="rate_limit"&&(te.max_count=parseInt(O.value,10)||5,te.window_sec=parseFloat(V.value)||60),$.innerHTML=`<span style="color:var(--color-text-muted)">${y("testing","Testing...")}</span>`;try{let oe=await csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:te,text:ne})}),Q=await oe.json();if(!oe.ok){$.innerHTML=`<span style="color: var(--color-ink-error)">${h(Q.error||"Test failed")}</span>`;return}let se="";Q.action==="block"?se=`<span style="color: var(--color-ink-error);font-weight:600">${y("blocked","BLOCKED")}</span>`:Q.action==="replace"?se=`<span style="color: var(--color-ink-warning);font-weight:600">${y("replaced","REPLACED")}</span> <span style="color:var(--color-text-secondary)">\u2192 ${h(Q.text)}</span>`:Q.action==="allow"?se=`<span style="color: var(--color-ink-success);font-weight:600">${y("allowed","ALLOWED")}</span>`:se=`<span style="color:var(--color-text-muted)">${y("noMatch","No match (pass)")}</span>`,Q.reason&&(se+=`<br/><span style="font-size:11px;color:var(--color-text-muted)">${h(Q.reason)}</span>`),$.innerHTML=se}catch(oe){console.error("Test filter rule error:",oe),$.innerHTML=`<span style="color: var(--color-ink-error)">${y("testError","Test error")}</span>`}}function p(){let B=document.getElementById("filterType"),$=document.getElementById("filterReplacementRow"),j=document.getElementById("filterRateLimitRow");if(!B)return;let U=B.value;$&&($.style.display=U==="replace"?"":"none"),j&&(j.style.display=U==="rate_limit"?"grid":"none")}function d(){let B=document.getElementById("filterTypeChips");B&&B.addEventListener("click",$=>{let j=$.target.closest(".hud-filter-chip");j&&(q=j.dataset.filterScope||"all",B.querySelectorAll(".hud-filter-chip").forEach(U=>{U.classList.toggle("is-active",U.dataset.filterScope===q)}),k())})}let r=6,e=[],s=!1,n=0,i=0;function a(B){let $=new Date(B*1e3),j=U=>String(U).padStart(2,"0");return`${j($.getHours())}:${j($.getMinutes())}:${j($.getSeconds())}`}function t(B){let $=(B||"").toUpperCase();return $==="BLOCK"?"var(--hud-crimson)":$==="MASK"||$==="REPLACE"?"var(--hud-amber)":$==="REVIEW"?"var(--color-primary)":$==="ALLOW"?"var(--hud-lime)":"var(--color-text-muted)"}function o(){let B=document.getElementById("filterLiveLog");if(B){if(e.length===0){B.innerHTML=`<div style="color:var(--color-text-muted);text-align:center;padding:10px">${ServerI18n.t("fltNoEvents")}</div>`;return}B.innerHTML=e.map($=>{let j=a($.ts),U=($.action||"").toUpperCase(),Y=t(U),F=($.text_excerpt||"").replace(/[<>&"]/g,W=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[W]),O=($.pattern||"").replace(/[<>&"]/g,W=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[W]),V=($.source||"").slice(0,16),ne=V?`\xB7 ${V}`:"";return`<div class="admin-filter-log-row" style="display:grid;grid-template-columns:64px 70px 1fr;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px dashed var(--hud-line)">
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${j}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${Y}">${U}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\u300C${F}\u300D<span style="color:var(--color-text-muted)"> \u2014 \u898F\u5247 ${O} ${ne}</span></span>
      </div>`}).join("")}}async function c(){try{let B=await fetch(`/admin/filters/events?since=${i}`,{credentials:"same-origin"});if(!B.ok)return;let $=await B.json();if($.counts_24h){let j=(U,Y)=>{let F=document.querySelector(`[data-mod-stat="${U}"]`);F&&(F.textContent=Y!=null?String(Y):"\u2014")};j("masked",$.counts_24h.MASK||0),j("blocked",$.counts_24h.BLOCK||0)}if(!Array.isArray($.events)||$.events.length===0)return;for(e.unshift(...$.events);e.length>r;)e.pop();i=$.latest_seq||i,document.getElementById("filterLiveLog")&&o()}catch{}}function u(){s||(s=!0,c(),n=setInterval(c,4e3))}let l=Object.create(null),v="[QUICK]";function g(B,$){return B.find(j=>(j.name||"").startsWith(v+" "+$))}async function E(){let B=await P().catch(()=>[]);document.querySelectorAll(".admin-flt-v4__qchip").forEach($=>{let j=$.dataset.fltLabel,U=g(B,j),Y=!!U&&U.enabled!==!1;$.classList.toggle("is-active",Y),U?l[$.dataset.fltQuickId]=U.id||U.rule_id:delete l[$.dataset.fltQuickId]})}async function T(B){let $=B.dataset.fltQuickId,j=B.dataset.fltPattern,U=B.dataset.fltAction,Y=B.dataset.fltLabel,F=l[$];if(F)(await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:F})})).ok?(delete l[$],B.classList.remove("is-active"),showToast(ServerI18n.t("filtersToastDisabled",{label:Y}),!0)):showToast(ServerI18n.t("filtersToastDisableFailed"),!1);else{let O=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",name:`${v} ${Y}`,pattern:j,action:U,enabled:!0,priority:50})});if(O.ok){let V=await O.json().catch(()=>({}));V.rule_id&&(l[$]=V.rule_id),B.classList.add("is-active"),showToast(ServerI18n.t("filtersToastEnabled",{label:Y}),!0)}else{let V=await O.json().catch(()=>({}));showToast(ServerI18n.t("filtersToastEnableFailed",{msg:V.error||""}),!1)}}typeof renderRules=="function"&&renderRules()}function I(){let B=document.querySelector("[data-flt-quick]");B&&(B.addEventListener("click",$=>{let j=$.target.closest(".admin-flt-v4__qchip");j&&T(j)}),E())}function C(){let B=document.getElementById("settings-grid");if(!B)return;B.insertAdjacentHTML("beforeend",D()),d(),I();let $=document.getElementById("filterType");$&&$.addEventListener("change",p);let j=document.getElementById("filterAddBtn");j&&j.addEventListener("click",x);let U=document.getElementById("filterTestBtn");U&&U.addEventListener("click",N);let Y=document.getElementById("filterTestText");Y&&Y.addEventListener("keydown",V=>{V.key==="Enter"&&(V.preventDefault(),N())});let F=document.getElementById("filterPattern");F&&F.addEventListener("keydown",V=>{V.key==="Enter"&&(V.preventDefault(),x())});let O=document.getElementById("filterRulesList");O&&(O.addEventListener("change",V=>{let ne=V.target.closest(".filter-toggle-cb");if(!ne)return;A(ne.dataset.ruleId,ne.checked);let W=ne.closest(".hud-rule-row"),Z=W?.querySelector(".admin-filter-toggle-dot");Z&&(Z.classList.toggle("is-on",ne.checked),Z.classList.toggle("is-off",!ne.checked)),W&&(W.style.opacity=ne.checked?"":"0.45")}),O.addEventListener("click",V=>{let ne=V.target.closest(".filter-delete-btn");ne&&K(ne.dataset.ruleId)})),k(),u(),o()}function H(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&C()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&C()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",H):H()})()});var Ft=me(()=>{(function(){"use strict";var b=window.AdminUtils.loadDetailsState,w=window.AdminUtils.saveDetailsState,h=window.AdminUtils.escapeHtml,f=1e4,_=null;function z(k){var x=b();return x[k]!==void 0?x[k]:!1}function y(){return`
      <div id="sec-fingerprints" class="admin-fp-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${h(ServerI18n.t("fingerprintsTitle"))}</h2>
          <p class="admin-ui-page-note">${h(ServerI18n.t("fingerprintsDesc"))}</p>
        </div>

        <div class="admin-fp-toolbar">
          <span id="adminFingerprintCount" class="admin-fp-count">\u2014</span>
          <span style="flex:1"></span>
          <button id="adminFingerprintRefreshBtn" class="admin-ui-action admin-fp-toolbar-action" type="button">${h(ServerI18n.t("refreshBtn"))}</button>
          <button id="adminFingerprintResetBtn" class="admin-ui-action is-danger admin-fp-toolbar-action" type="button">${h(ServerI18n.t("fingerprintResetBtn"))}</button>
        </div>

        <div class="admin-fp-card" id="adminFingerprintTableWrap">
          <div class="admin-fp-loading">${h(ServerI18n.t("loadingFingerprints"))}</div>
        </div>
      </div>
    `}function S(k){var x=ServerI18n.t("fingerprintState_"+k),K="";return k==="blocked"?K=" is-crimson":k==="flagged"?K=" is-amber":k==="active"?K=" is-cyan":K=" is-mute",'<span class="admin-fp-state'+K+'">'+h(x)+"</span>"}function m(k){if(!k)return"\u2014";try{var x=new Date(k*1e3);return x.toLocaleTimeString()}catch{return String(k)}}function D(k){var x=document.getElementById("adminFingerprintTableWrap");if(x){if(!k||k.length===0){x.innerHTML="";var K=window.AdminEmpty.render("audience");K.dataset.emptyKind="fingerprints",x.appendChild(K);return}var A='<div class="admin-fp-row admin-fp-row--head"><span>'+h(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+h(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+h(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+h(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+h(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+h(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+h(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+h(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",N=k.map(function(p){var d=p.blocked|0,r=p.hash||"",e=r.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+h(r)+'"><span class="admin-fp-hash admin-identity-fp" title="'+h(r)+'">fp:'+h(e)+'</span><span class="admin-fp-ip admin-identity-ip">'+h(p.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+h(p.ua||"")+'">'+h(p.ua||"\u2014")+'</span><span class="admin-fp-num">'+(p.msgs|0)+'</span><span class="admin-fp-num">'+(p.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(d>0?"is-crimson":"is-mute")+'">'+d+"</span><span>"+S(p.state||"active")+'</span><span class="admin-fp-ts">'+h(m(p.last_seen))+"</span></div>"}).join("");x.innerHTML=A+N}}async function q(){var k=document.getElementById("adminFingerprintCount");try{var x=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!x.ok)throw new Error("HTTP "+x.status);var K=await x.json(),A=K.records||[];if(D(A),k){var N=K.count||A.length,p=K.flagged!=null?K.flagged:A.filter(function(r){return r.state==="flagged"||r.state==="blocked"}).length;k.textContent=ServerI18n.t("fpCountSummary",{unique:N,flagged:p})}}catch(r){console.error("[admin-fingerprints] fetch failed:",r);var d=document.getElementById("adminFingerprintTableWrap");d&&(d.innerHTML='<span class="hud-pill is-danger">'+h(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function M(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var x=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(x.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await q();else{var K=await x.json().catch(function(){return{}});window.showToast(K.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(A){console.error("[admin-fingerprints] reset error:",A),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function L(){R(),_=setInterval(function(){var k=document.getElementById("sec-fingerprints");k&&k.offsetParent!==null&&q()},f)}function R(){_&&(clearInterval(_),_=null)}function P(){var k=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(k){k.insertAdjacentHTML("beforeend",y());var x=document.getElementById("adminFingerprintRefreshBtn");x&&x.addEventListener("click",q);var K=document.getElementById("adminFingerprintResetBtn");K&&K.addEventListener("click",M),q(),L()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var k=new MutationObserver(function(){var K=document.getElementById("moderation-grid")||document.getElementById("settings-grid");K&&!document.getElementById("sec-fingerprints")&&P()});k.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var x=document.getElementById("moderation-grid")||document.getElementById("settings-grid");x&&!document.getElementById("sec-fingerprints")&&P()}})})()});var Dt=me(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var b=window.AdminUtils.escapeHtml;let w=(t,o)=>{let c=window.ServerI18n?.t?.(t);return c&&c!==t?c:o||t},h=!1;new MutationObserver(()=>{let t=document.getElementById("settings-grid");if(t&&!(document.getElementById("sec-widgets")||h)){h=!0;try{_(t)}finally{h=!1}}}).observe(document.body,{childList:!0,subtree:!0});function _(t){let o=document.createElement("div");o.id="sec-widgets",o.className="admin-widgets-page hud-page-stack lg:col-span-2";let c=location.origin+"/overlay";o.dataset.tpl="B",o.innerHTML=`
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
                <code class="admin-ow-url" data-ow-obs-url>${b(c)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${b(w("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${b(w("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,t.appendChild(o);let u=document.getElementById("widget-add"),l=o.querySelector("[data-ow-addmenu]");u.addEventListener("click",v=>{v.stopPropagation(),l.hidden=!l.hidden}),l.addEventListener("click",v=>{let g=v.target.closest("[data-ow-add]")?.dataset.owAdd;g&&(l.hidden=!0,S(g))}),document.addEventListener("click",v=>{!l.hidden&&!v.target.closest(".admin-ui-page-actions")&&(l.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",M),o.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let v=o.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(v).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),y()}async function z(t,o="GET",c=null){let u={method:o,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(c){let v=document.querySelector('meta[name="csrf-token"]');v&&(u.headers["X-CSRF-Token"]=v.content),u.body=JSON.stringify(c)}return(await fetch("/admin/widgets/"+t,u)).json()}async function y(){try{let t=await z("list");R(t.widgets||[])}catch(t){console.error("[admin-widgets] Load failed:",t)}}async function S(t){let o={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await z("create","POST",{type:t,config:o[t]||{}}),y()}catch(c){console.error("[admin-widgets] Create failed:",c)}}async function m(t){let o=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:o,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await z("delete","POST",{id:t}),y()}catch(u){console.error("[admin-widgets] Delete failed:",u)}}async function D(t,o){try{await z("update","POST",{id:t,config:o}),y()}catch(c){console.error("[admin-widgets] Update failed:",c)}}async function q(t,o,c){try{await z("score","POST",{id:t,team_index:o,delta:c}),y()}catch(u){console.error("[admin-widgets] Score update failed:",u)}}async function M(){let t=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:t,confirmLabel:ServerI18n.t("clearAll")}))try{await z("clear","POST",{}),y()}catch(c){console.error("[admin-widgets] Clear failed:",c)}}let L=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function R(t){let o=document.getElementById("widgets-list");if(o){if(o.innerHTML="",r(t),t.length===0){let c=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});c.dataset.emptyKind="widgets",o.appendChild(c);return}t.forEach(c=>{o.appendChild(A(c))})}}let P={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function k(t){return w("widgetPos_"+String(t||"top-left").replace("-","_"),t||"")}function x(t){let o=t.config||{},c="";t.type==="scoreboard"?c=(o.teams||[]).map(l=>`${l.name} ${l.score}`).join(" \xB7 "):t.type==="ticker"?(c=(o.messages||[])[0]||"",c&&(c=`\u300C${c}\u300D`)):t.type==="label"&&(c=o.text?`\u300C${o.text}\u300D`:"");let u=k(t.position);return c?`${c} \xB7 ${u}`:u}function K(t){return t==="scoreboard"?w("widgetScoreboard"):t==="ticker"?w("widgetTicker"):t==="label"?w("widgetLabel"):t}function A(t){let o=document.createElement("div");o.className="admin-widget-card",t.visible!==!1&&o.classList.add("is-on");let c=document.createElement("button");c.type="button",c.className="admin-widget-summary",c.setAttribute("aria-expanded","false"),c.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+b(P[t.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+b(K(t.type))+'</span><span class="admin-widget-summary-text">'+b(x(t))+"</span>"+(t.visible===!1?'<span class="admin-widget-summary-off">'+b(w("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',o.appendChild(c);let u=document.createElement("div");u.className="admin-widget-card-body",u.hidden=!0,c.addEventListener("click",()=>{u.hidden=!u.hidden,c.setAttribute("aria-expanded",u.hidden?"false":"true"),o.classList.toggle("is-open",!u.hidden)});let l=a(w("widgetPosition"),L,t.position,T=>D(t.id,{position:T}));u.appendChild(l),t.type==="scoreboard"?e(u,t):t.type==="ticker"?s(u,t):t.type==="label"&&n(u,t);let v=document.createElement("div");v.className="admin-widget-card-actions";let g=document.createElement("button");g.type="button",g.className="admin-ui-action admin-widget-card-action",g.textContent=t.visible?w("widgetHide"):w("widgetShow"),g.addEventListener("click",()=>D(t.id,{visible:!t.visible})),v.appendChild(g);let E=document.createElement("button");return E.type="button",E.className="admin-ui-action is-danger admin-widget-card-action",E.textContent=w("remove"),E.addEventListener("click",()=>m(t.id)),v.appendChild(E),u.appendChild(v),o.appendChild(u),o}let N={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function p(t,o){let c="top-left",u=1/0;for(let[l,[v,g]]of Object.entries(N)){let E=t-v/2,T=o-g/2,I=E*E+T*T;I<u&&(u=I,c=l)}return c}function d(t){let o=t.config||{};return t.type==="scoreboard"?(o.teams||[]).map(c=>`${c.name} ${c.score}`).join("  ")||w("widgetScoreboard"):t.type==="ticker"?(o.messages||[])[0]||w("widgetTicker"):t.type==="label"?o.text||w("widgetLabel"):t.type}function r(t){let o=document.querySelector("[data-ow-stage]");if(o){if(o.innerHTML="",!t.length){o.innerHTML='<span class="admin-ow-stage-empty">'+b(w("widgetsStageEmpty"))+"</span>";return}t.forEach(c=>{let u=document.createElement("div");u.className="admin-ow-box is-"+(c.position||"top-left"),c.visible===!1&&u.classList.add("is-off"),u.dataset.owBox=c.id,u.draggable=!0,u.textContent=d(c),u.title=K(c.type),u.addEventListener("dragend",l=>{let v=o.getBoundingClientRect();if(!v.width||!v.height)return;let g=(l.clientX-v.left)/v.width,E=(l.clientY-v.top)/v.height;if(g<0||g>1||E<0||E>1)return;let T=p(g,E);T!==c.position&&D(c.id,{position:T})}),o.appendChild(u)})}}function e(t,o){let c=o.config||{},u=i(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",c.title||"",l=>D(o.id,{title:l}));t.appendChild(u),(c.teams||[]).forEach((l,v)=>{let g=document.createElement("div");g.className="admin-widget-team";let E=document.createElement("input");E.type="color",E.value=l.color||"#38bdf8",E.className="admin-widget-team-color",E.addEventListener("change",()=>{let B=[...c.teams];B[v]={...B[v],color:E.value},D(o.id,{teams:B})}),g.appendChild(E);let T=document.createElement("input");T.type="text",T.value=l.name,T.className="admin-widget-input",T.addEventListener("change",()=>{let B=[...c.teams];B[v]={...B[v],name:T.value},D(o.id,{teams:B})}),g.appendChild(T);let I=document.createElement("span");I.className="admin-widget-team-score",I.textContent=l.score,g.appendChild(I);let C=document.createElement("button");C.type="button",C.className="admin-widget-step",C.textContent="\u2212",C.addEventListener("click",()=>q(o.id,v,-1)),g.appendChild(C);let H=document.createElement("button");H.type="button",H.className="admin-widget-step",H.textContent="+",H.addEventListener("click",()=>q(o.id,v,1)),g.appendChild(H),t.appendChild(g)})}function s(t,o){let c=o.config||{},u=document.createElement("div");u.className="admin-widget-row";let l=document.createElement("span");l.className="lbl",l.textContent=window.ServerI18n?.t?.("speed")||"SPEED",u.appendChild(l);let v=document.createElement("input");v.type="range",v.min="10",v.max="200",v.value=c.speed||60,v.style.flex="1",v.addEventListener("change",()=>{D(o.id,{speed:parseInt(v.value)})}),u.appendChild(v);let g=document.createElement("span");g.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",g.textContent=v.value,v.addEventListener("input",()=>{g.textContent=v.value}),u.appendChild(g),t.appendChild(u);let E=document.createElement("div");E.className="admin-widget-row",E.style.alignItems="flex-start";let T=document.createElement("span");T.className="lbl",T.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",E.appendChild(T);let I=document.createElement("textarea");I.className="admin-widget-textarea",I.value=(c.messages||[]).join(`
`),I.rows=3,I.placeholder=ServerI18n.t("widgetTickerPlaceholder"),I.addEventListener("change",()=>{let C=I.value.split(`
`).filter(H=>H.trim());D(o.id,{messages:C})}),E.appendChild(I),t.appendChild(E)}function n(t,o){let c=o.config||{};t.appendChild(i(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",c.text||"",u=>D(o.id,{text:u}))),t.appendChild(i(window.ServerI18n?.t?.("size")||"SIZE",String(c.fontSize||24),u=>D(o.id,{fontSize:parseInt(u)||24}),"number"))}function i(t,o,c,u="text"){let l=document.createElement("div");l.className="admin-widget-row";let v=document.createElement("span");v.className="lbl",v.textContent=t,l.appendChild(v);let g=document.createElement("input");return g.type=u,g.value=o,g.className="admin-widget-input",g.addEventListener("change",()=>c(g.value)),l.appendChild(g),l}function a(t,o,c,u){let l=document.createElement("div");l.className="admin-widget-row";let v=document.createElement("span");v.className="lbl",v.textContent=t,l.appendChild(v);let g=document.createElement("select");return g.className="admin-widget-select",o.forEach(E=>{let T=document.createElement("option");T.value=E,T.textContent=E,E===c&&(T.selected=!0),g.appendChild(T)}),g.addEventListener("change",()=>u(g.value)),l.appendChild(g),l}})})()});var Mt=me(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let b=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","backup","integrations","plugins","webhooks","api-tokens","security","notifications","audience","firetoken","overlay","about"];function w(){let $=window.ADMIN_ROUTES||{},j={};return b.forEach(U=>{let Y=$[U];Y&&Y.title&&(j[U]={title:Y.title,kicker:Y.kicker||U.toUpperCase()})}),j}let h=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation",section:"sec-blacklist"},{labelKey:"cmdkSettingFilters",route:"moderation",section:"sec-filters"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{label:"Webhooks",route:"webhooks",section:"sec-webhooks"},{label:"Scheduler",route:"scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],f=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function _(){let $=document.querySelector('meta[name="csrf-token"]');return $&&$.content||""}function z($,j){if(typeof window.csrfFetch=="function")return window.csrfFetch($,j);let U=Object.assign({credentials:"same-origin"},j||{}),Y=new Headers(j&&j.headers||{});return Y.set("X-CSRF-Token",_()),U.headers=Y,fetch($,U)}function y($,j){typeof window.showToast=="function"&&window.showToast($,j!==!1)}let S=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>z("/effects/reload",{method:"POST"}).then($=>y($.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),$.ok)).catch(()=>y(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"cmdkActionOverlayOff",subKey:"adminNavOverlay",action:()=>z("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"overlay_off"})}).then($=>y($.ok?ServerI18n.t("cmdkToastOverlayOff"):ServerI18n.t("cmdkToastToggleFailed"),$.ok)).catch(()=>y(ServerI18n.t("cmdkToastToggleFailed"),!1))},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>z("/admin/poll/reset",{method:"POST"}).then($=>y($.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),$.ok)).catch(()=>y(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return z("/admin/history/clear",{method:"POST"}).then(j=>y(j.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),j.ok)).catch(()=>y(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],m=null,D=null,q=null,M="",L=[],R=[],P=0,k=null,x=null,K=null,A=15e3;function N($){return String($??"").replace(/[&<>"']/g,j=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[j])}function p($,j){if(!j)return 0;let U=String($||"").toLowerCase(),Y=j.toLowerCase(),F=0,O=0,V=0,ne=0;for(;F<U.length&&O<Y.length;)U[F]===Y[O]?(O++,ne++,V+=2+ne):ne=0,F++;return O<Y.length?-1:(U.startsWith(Y)&&(V+=10),V)}function d(){let $=document.createElement("div");$.className="admin-cmdk",$.setAttribute("hidden",""),$.setAttribute("aria-hidden","true"),$.innerHTML=`
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
    `,document.body.appendChild($),m=$,D=$.querySelector(".admin-cmdk-input"),q=$.querySelector(".admin-cmdk-list"),$.addEventListener("click",j=>{j.target.matches("[data-cmdk-close]")&&H()}),D.addEventListener("input",j=>{M=j.target.value,E()}),D.addEventListener("keydown",r),q.addEventListener("click",j=>{let U=j.target.closest("[data-cmdk-idx]");U&&(P=parseInt(U.dataset.cmdkIdx,10)||0,s())})}function r($){if($.key==="Escape"){$.preventDefault(),H();return}if($.key==="ArrowDown"){$.preventDefault(),e(1);return}if($.key==="ArrowUp"){$.preventDefault(),e(-1);return}if($.key==="Enter"){$.preventDefault(),s();return}}function e($){if(!L.length)return;P=(P+$+L.length)%L.length,I();let j=q.querySelector(`[data-cmdk-idx="${P}"]`);j&&j.scrollIntoView({block:"nearest"})}function s(){let $=L[P];if($){if($.type==="route")window.location.hash="#/"+$.route,H();else if($.type==="setting")$.tab&&(document.body.dataset.viewerConfigTab=$.tab),window.location.hash="#/"+$.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let j=document.getElementById($.section);j&&(j.scrollIntoView({behavior:"smooth",block:"start"}),j.tagName==="DETAILS"&&!j.open&&(j.open=!0))},80),H();else if($.type==="message")window.location.hash="#/messages",H();else if($.type==="user")window.location.hash="#/system",setTimeout(()=>{let j=document.getElementById("sec-fingerprints");j&&j.scrollIntoView({behavior:"smooth",block:"start"})},80),H();else if($.type==="theme")z("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:$.id})}).then(j=>{j.ok?(y(ServerI18n.t("cmdkThemeApplied",{name:$.label}),!0),K=null):y(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>y(ServerI18n.t("cmdkThemeApplyFailed"),!1)),H();else if($.type==="action"){try{let j=$.action&&$.action();j&&typeof j.then=="function"&&j.catch(()=>{})}catch{}H()}}}let n={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",history:"adminNavGroupSystem",backup:"adminNavGroupSystem",security:"adminNavGroupSystem",integrations:"adminNavGroupSystem"};function i($){return Object.entries(w()).map(([j,U])=>{let Y=Math.max(p(U.title,$),p(j,$)),F=n[j];return{type:"route",route:j,label:U.title,sub:F?ServerI18n.t(F):"",icon:"\u25C7",score:Y}}).filter(j=>j.score>=0)}function a($){let j=w()[$];return j?j.title:""}function t($){return h.map(j=>{let U=j.labelKey?ServerI18n.t(j.labelKey):j.label;return{type:"setting",route:j.route,tab:j.tab,section:j.section,label:a(j.route)?`${a(j.route)} \u203A ${U}`:U,sub:"",icon:"\u2699",score:p(U,$)}}).filter(j=>j.score>=0)}function o($){return k?(k.records||[]).map(U=>{let Y=U.text||U.message||"",F=U.nickname||U.user||"guest",O=(U.timestamp||"").slice(11,19)||"\u2014",V=(U.fingerprint||U.fp||"").slice(0,8);return{type:"message",label:`${Y}  \xB7  @${F}`,sub:V?`${O} \xB7 fp:${V}`:O,icon:"\u{1F4AC}",score:Math.max(p(Y,$),p(F,$))}}).filter(U=>U.score>=0):[]}function c($){if(!K)return[];let j=K.records||[],U=K.active||"";return j.map(Y=>{let F=Y.label||Y.display_name||Y.name||"",O=Y.description||ServerI18n.t("cmdkThemeDefaultDesc"),V=Y.name===U;return{type:"theme",id:Y.name,label:V?ServerI18n.t("cmdkThemeActive",{name:F}):F,sub:O,icon:"\u{1F3A8}",score:Math.max(p(F,$),p(Y.name||"",$),p(O,$))}}).filter(Y=>Y.score>=0)}function u($){return S.map(j=>{let U=ServerI18n.t(j.labelKey),Y=j.subKey?ServerI18n.t(j.subKey):j.sub;return{type:"action",id:j.id,label:U,sub:Y,icon:"\u26A1",action:j.action,score:Math.max(p(U,$),p(j.id,$),p(Y,$))}}).filter(j=>j.score>=0)}function l($){return x?(x.records||[]).map(U=>{let Y=U.fingerprint||U.fp||U.id||"",F=U.ip||U.last_ip||"",O=U.nickname||"";return{type:"user",label:O?`@${O}  \xB7  ${Y.slice(0,12)}\u2026`:`${Y.slice(0,12)}\u2026`,sub:`user \xB7 ${F||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(p(Y,$),p(F,$),p(O,$))}}).filter(U=>U.score>=0):[]}async function v(){let $=Date.now(),j=[];(!k||$-k.at>A)&&j.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{k={at:$,records:U&&U.records||[]}}).catch(()=>{k={at:$,records:[]}})),(!x||$-x.at>A)&&j.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{x={at:$,records:U&&U.records||[]}}).catch(()=>{x={at:$,records:[]}})),(!K||$-K.at>A)&&j.push(fetch("/admin/themes",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{K={at:$,records:U&&U.themes||[],active:U&&U.active||""}}).catch(()=>{K={at:$,records:[],active:""}})),j.length&&await Promise.all(j)}let g={actions:5,pages:5,messages:4};async function E(){await v();let $=M.trim(),j={action:u($),route:i($),setting:t($),theme:c($),message:o($),user:l($)};L=[],R=[],f.forEach(U=>{let Y=U.types.reduce((F,O)=>F.concat(j[O]||[]),[]).sort((F,O)=>O.score-F.score).slice(0,g[U.id]||5);Y.length&&(R.push({id:U.id,labelKey:U.labelKey,from:L.length,count:Y.length}),L=L.concat(Y))}),P=0,I()}function T($){return $.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[$.type]||"\xB7"}function I(){if(!L.length){q.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let $=[];R.forEach(j=>{$.push(`<li class="admin-cmdk-group" role="presentation">${N(ServerI18n.t(j.labelKey))}</li>`);for(let U=j.from;U<j.from+j.count;U++){let Y=L[U],F=U===P;$.push(`
        <li class="admin-cmdk-row ${F?"is-active":""}"
            data-cmdk-idx="${U}" role="option" aria-selected="${F}">
          <span class="admin-cmdk-icon" aria-hidden="true">${N(T(Y))}</span>
          <span class="admin-cmdk-label">${N(Y.label)}</span>
          <span class="admin-cmdk-sub">${N(Y.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${F?"\u21B5":""}</span>
        </li>`)}}),q.innerHTML=$.join("")}function C(){m||d(),m.removeAttribute("hidden"),m.setAttribute("aria-hidden","false"),m.classList.add("is-open"),M="",D.value="",E(),setTimeout(()=>D.focus(),20)}function H(){m&&(m.setAttribute("hidden",""),m.setAttribute("aria-hidden","true"),m.classList.remove("is-open"))}function B(){return!!(m&&!m.hasAttribute("hidden"))}window.AdminCommandPalette={open:C,close:H,isOpen:B,toggle:()=>B()?H():C()}})()});var Nt=me(()=>{(function(){"use strict";let b="sec-sessions-overview";var w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(d){return String(d).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},h={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function f(d){if(d=Number(d)||0,d<=0)return"\u2014";var r=Math.floor(d/3600),e=Math.floor(d%3600/60),s=d%60;return r>0?r+"h "+e+"m":e>0?e+"m":s+"s"}function _(d){if(!d)return"\u2014";try{var r=typeof d=="number"?new Date(d<1e12?d*1e3:d):new Date(d);return r.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(d)}}function z(){return'<div id="'+b+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function y(){return'<div class="admin-sessions-th"><span>'+w(ServerI18n.t("sessionsColSession"))+"</span><span>"+w(ServerI18n.t("sessionsColMessages"))+"</span><span>"+w(ServerI18n.t("sessionsColViewers"))+"</span><span>"+w(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function S(d){return d.name||ServerI18n.t("sessionsFallbackName",{id:(d.id||"").slice(0,12)})}function m(){var d=document.getElementById("admin-sessions-table-body");if(d){if(h.loading){window.AdminSkeletons?(d.innerHTML="",d.appendChild(window.AdminSkeletons.listRows({rows:5}))):d.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!h.sessions.length){d.innerHTML="";var r=window.AdminEmpty.render("sessions");r.dataset.emptyKind="sessions",d.appendChild(r);return}var e=h.sessions.map(function(s){var n=w(s.id||"");return'<div class="admin-sessions-tr'+(s.is_live?" is-live":"")+'" data-session-id="'+n+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(s.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+w(S(s))+'<span class="admin-sessions-td-sub">'+w(_(s.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(s.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(s.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+w(f(s.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+n+'">'+w(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");d.innerHTML=y()+e}}var D=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function q(){var d=document.querySelector("[data-sessions-export]");if(d){if(!h.exportId){d.hidden=!0,d.innerHTML="";return}var r=h.sessions.find(function(s){return s.id===h.exportId});if(!r){h.exportId=null,d.hidden=!0,d.innerHTML="";return}var e=D.map(function(s){return'<button type="button" class="admin-sx-export__seg'+(s.id===h.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+s.id+'" aria-pressed="'+(s.id===h.exportFormat?"true":"false")+'">'+w(ServerI18n.t(s.labelKey))+"</button>"}).join("");d.hidden=!1,d.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+w(ServerI18n.t("sessionsExportTitle",{name:S(r)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+w(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+e+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(h.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+w(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+w(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+w(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+w(ServerI18n.t("sessionsDownloadBtn",{fmt:h.exportFormat.toUpperCase()}))+"</button></div>"}}function M(){if(h.exportId){var d="/admin/sessions/"+encodeURIComponent(h.exportId)+"/export?format="+encodeURIComponent(h.exportFormat)+"&include_pii="+(h.exportPii?"1":"0"),r=document.createElement("a");r.href=d,r.rel="noopener",document.body.appendChild(r),r.click(),r.remove()}}async function L(){var d=h.exportId;if(d)try{var r=await fetch("/admin/sessions/"+encodeURIComponent(d)+"/export?format=json",{credentials:"same-origin"});if(!r.ok)throw new Error("HTTP "+r.status);var e=await r.json(),s=(e.records||[]).slice(0,500);if(!s.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var n=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:s,speedMultiplier:1})});if(n.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!n.ok)throw new Error("HTTP "+n.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function R(){m(),q()}async function P(){h.loading=!0,m();try{var[d,r]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),e=[],s=[];if(d.ok){var n=await d.json();e=Array.isArray(n.sessions)?n.sessions:[],e.forEach(function(l){l._explicit=!0})}if(r.ok){var i=await r.json();s=Array.isArray(i.sessions)?i.sessions:[]}var a=e.slice(),t=new Set(e.map(function(l){return l.id}));s.forEach(function(l){t.has(l.id)||a.push(l)}),a.sort(function(l,v){var g=typeof l.started_at=="number"?l.started_at:Date.parse(l.started_at||0),E=typeof v.started_at=="number"?v.started_at:Date.parse(v.started_at||0);return E-g});try{var o=await fetch("/admin/session/current",{credentials:"same-origin"});if(o.ok){var c=await o.json();if(c.status==="live"){var u=Object.assign({},c,{id:c.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});a.unshift(u)}}}catch{}h.sessions=a,h.total=a.length}catch(l){console.error("[admin-sessions] fetch error:",l),h.sessions=[],h.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:l.message||""}),!1)}finally{h.loading=!1,R()}}function k(d){d&&(window.location.hash="#/session-detail?id="+encodeURIComponent(d))}function x(d){h.exportId=d,q();var r=document.querySelector("[data-sessions-export]");r&&r.scrollIntoView({block:"nearest"})}function K(){var d=document.getElementById(b);d&&(d.addEventListener("click",function(r){var e=r.target.closest("[data-sessions-export-open]");if(e){r.stopPropagation(),x(e.dataset.sessionsExportOpen);return}if(r.target.closest("[data-sessions-export-close]")){h.exportId=null,q();return}var s=r.target.closest("[data-sessions-export-fmt]");if(s){h.exportFormat=s.dataset.sessionsExportFmt,q();return}if(r.target.closest("[data-sessions-replay]")){L();return}if(r.target.closest("[data-sessions-download]")){M();return}var n=r.target.closest(".admin-sessions-tr");n&&k(n.dataset.sessionId||null)}),d.addEventListener("change",function(r){var e=r.target.closest("[data-sessions-export-pii]");e&&(h.exportPii=!!e.checked)}),d.addEventListener("keydown",function(r){if(!(r.key!=="Enter"&&r.key!==" ")){var e=r.target.closest(".admin-sessions-tr");e&&(r.preventDefault(),k(e.dataset.sessionId||null))}}))}function A(){var d=document.querySelector(".admin-dash-grid"),r=document.getElementById(b);if(!(!d||!r)){var e=d.dataset.activeLeaf||"dashboard";r.style.display=e==="sessions"?"":"none"}}function N(){var d=document.getElementById("settings-grid");!d||document.getElementById(b)||(d.insertAdjacentHTML("beforeend",z()),K(),P(),A())}function p(){if(window.DANMU_CONFIG?.session?.logged_in){var d=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&N(),A()});d.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",A),document.addEventListener("admin-panel-rendered",function(){N(),A()}),N()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p()})()});var Pt=me(()=>{(function(){"use strict";let b="sec-session-detail-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(T){return String(T).replace(/[&<>"']/g,function(I){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[I]})},h={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},f=!1,_={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function z(){let T=window.location.hash||"",I=T.indexOf("?");if(I===-1)return null;let C=T.slice(I+1);return new URLSearchParams(C).get("id")||null}function y(T){if(!T)return"\u2014";try{let I=new Date(T);if(isNaN(I.getTime()))return String(T);let C=H=>String(H).padStart(2,"0");return`${I.getFullYear()}-${C(I.getMonth()+1)}-${C(I.getDate())} ${C(I.getHours())}:${C(I.getMinutes())}:${C(I.getSeconds())}`}catch{return String(T)}}function S(T){if(!T||T<0)return"\u2014";let I=Math.round(Number(T)),C=Math.floor(I/3600),H=Math.floor(I%3600/60),B=I%60;return C>0?`${C}h ${H}m ${B}s`:H>0?`${H}m ${B}s`:`${B}s`}function m(T,I){if(!T||!I)return"";try{let C=Math.max(0,Math.round((new Date(T)-new Date(I))/1e3)),H=Math.floor(C/60),B=C%60;return`+${String(H).padStart(2,"0")}:${String(B).padStart(2,"0")}`}catch{return""}}function D(T){let I=Number(T);return isNaN(I)?"\u2014":I.toLocaleString()}function q(T){if(!T)return"#64748b";let I=0;for(let H=0;H<T.length;H++)I=I*31+T.charCodeAt(H)>>>0;return`hsl(${I%360}, 60%, 60%)`}function M(){return`
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
    `}async function L(T){if(!T){A(ServerI18n.t("sessionDetailErrMissingId"));return}K(!0);try{let I=await fetch(`/admin/sessions/${encodeURIComponent(T)}`,{credentials:"same-origin"});if(I.status===404&&(I=await fetch(`/admin/session/archive/${encodeURIComponent(T)}`,{credentials:"same-origin"})),!I.ok)throw new Error(`HTTP ${I.status}`);let C=await I.json();h.session=C.session||null,h.records=C.records||[],h.density=C.density||[],K(!1),N(),R()}catch(I){K(!1),A(ServerI18n.t("sessionDetailErrLoadFailed",{msg:I.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function R(){if(h.sessionId)try{let T=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(h.sessionId)}`,{credentials:"same-origin"});if(!T.ok)return;let I=await T.json();h.annotations=Array.isArray(I.annotations)?I.annotations:[],n()}catch{}}function P(){let T=h.session;if(!T)return 0;if(T.duration_s)return Math.round(T.duration_s*1e3);if(T.duration)return Math.round(T.duration*1e3);let I=T.started_at||T.start_time,C=T.ended_at||T.end_time;if(I&&C)try{return Math.max(0,new Date(C)-new Date(I))}catch{return 0}return h.density&&h.density.length?h.density.length*60*1e3:0}function k(T){let I=Date.parse(T||0);if(Number.isNaN(I))return"\u2014";let C=new Date(I),H=B=>String(B).padStart(2,"0");return`${H(C.getHours())}:${H(C.getMinutes())}:${H(C.getSeconds())}`}function x(T){let I=Math.floor(T/1e3),C=Math.floor(I/3600),H=Math.floor(I%3600/60),B=I%60,$=j=>String(j).padStart(2,"0");return C>0?`${$(C)}:${$(H)}:${$(B)}`:`${$(H)}:${$(B)}`}function K(T){h.loading=T;let I=document.querySelector("[data-sd-loading]"),C=document.querySelector("[data-sd-error]");I&&(I.hidden=!T),C&&T&&(C.hidden=!0);let H=document.querySelector("[data-sd-timeline-wrap]");if(H&&window.AdminSkeletons){let B=H.querySelector("[data-sd-timeline-skel]");T?(H.hidden=!1,B||(B=window.AdminSkeletons.chart(),B.setAttribute("data-sd-timeline-skel","1"),H.appendChild(B))):B&&B.remove()}}function A(T){h.error=T;let I=document.querySelector("[data-sd-error]"),C=document.querySelector("[data-sd-error-msg]");I&&(I.hidden=!1),C&&(C.textContent=T),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(H){let B=document.querySelector(`[${H}]`);B&&(B.hidden=!0)})}function N(){p(),d(),r(),s(),n();let T=document.querySelector("[data-sd-error]");T&&(T.hidden=!0)}function p(){let T=h.session,I=document.querySelector("[data-sd-session-header]");if(!I)return;I.hidden=!1;let C=document.querySelector("[data-sd-session-id]"),H=document.querySelector("[data-sd-meta-start]"),B=document.querySelector("[data-sd-meta-duration]"),$=document.querySelector("[data-sd-title]"),j=T&&(T.session_id||T.id)||h.sessionId||"\u2014";C&&(C.textContent=j),H&&(H.textContent=y(T&&(T.started_at||T.start_time))),B&&(B.textContent=S(T&&(T.duration_s||T.duration))),$&&($.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(j).slice(-8)}))}function d(){let T=h.session;if(!T)return;let I=document.querySelector("[data-sd-kpis]");I&&(I.hidden=!1);let C=function(j,U,Y){let F=document.querySelector(`[data-sd-stat="${j}"]`);F&&(F.textContent=U);let O=document.querySelector(`[data-sd-stat-sub="${j}"]`);O&&(O.textContent=Y||"")};C("msg_count",D(T.msg_count)),C("viewer_count",D(T.viewer_count));let H=Array.isArray(h.density)?h.density:[];if(H.length){let j=0,U=0;H.forEach(function(O,V){O>j&&(j=O,U=V)});let Y=Date.parse(T.started_at||T.start_time||0),F="";if(!Number.isNaN(Y)){let O=new Date(Y+U*6e4),V=ne=>String(ne).padStart(2,"0");F=`${V(O.getHours())}:${V(O.getMinutes())}`}C("peak",D(j),F)}else C("peak","\u2014","");let B=Number(T.blocked_count)||0;C("blocked",D(B));let $=document.querySelector("[data-sd-blocked-btn]");$&&($.textContent=ServerI18n.t("sessionDetailStatBlocked")+(B?" "+B:""),$.disabled=B===0)}function r(){let T=document.querySelector("[data-sd-timeline-wrap]"),I=document.querySelector("[data-sd-timeline]"),C=document.querySelector("[data-sd-timeline-axis]"),H=document.querySelector("[data-sd-peak-label]");if(!T||!I||!C)return;let B=h.density;if(!B||B.length===0){T.hidden=!0;return}T.hidden=!1;let $=Math.max(1,...B),j=0;B.forEach(function(ne,W){ne>B[j]&&(j=W)});let U=B.map(function(ne,W){let Z=Math.max(2,Math.round(ne/$*100));return`<div class="admin-sd-bar${W===j?" is-peak":""}" style="height:${Z}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:ne,minute:W+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:ne})}"></div>`}).join("");I.innerHTML=U;let Y=h.session,F=y(Y&&(Y.started_at||Y.start_time)).slice(11,16)||"00:00",O=y(Y&&(Y.ended_at||Y.end_time)).slice(11,16)||"",V=B.length>2?`+${Math.round(B.length/2)}min`:"";C.innerHTML=`
      <span class="admin-sd-axis-label">${w(F)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${w(V)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${w(O)}</span>
    `,H&&(H.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:B[j],minute:j}))}function e(){let T=(h.msgQuery||"").trim().toLowerCase();return h.records.filter(function(I){let C=(I.status||"shown")==="blocked";return h.msgFilter==="blocked"&&!C?!1:T?String(I.text||"").toLowerCase().indexOf(T)!==-1||String(I.nickname||"").toLowerCase().indexOf(T)!==-1:!0})}function s(){let T=document.querySelector("[data-sd-msgs-wrap]"),I=document.querySelector("[data-sd-msgs-list]");if(!T||!I)return;if(!h.records.length){T.hidden=!0;return}T.hidden=!1;let C=e().slice(0,300);if(!C.length){I.innerHTML='<div class="admin-sd-msgs-empty">'+w(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}I.innerHTML=C.map(function(H){let B=(H.status||"shown")==="blocked",$=q(H.fingerprint||H.fp||""),j=k(H.timestamp||H.created_at),U=String(H.nickname||"").trim();return`
        <div class="admin-sd-msg-row${B?" is-blocked":""}">
          <span class="admin-sd-msg-time">${w(j)}</span>
          <span class="admin-sd-msg-dot" style="background:${$}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${w(H.text||"")}</span>
          ${B&&H.blockedBy?`<span class="admin-sd-msg-rule">${w(ServerI18n.t("sessionDetailBlockedBy",{rule:H.blockedBy}))}</span>`:""}
          <span class="admin-sd-msg-nick">${w(U||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function n(){let T=h.annotations||[],I=P(),C=document.querySelector("[data-sd-ann-count]");C&&(C.textContent=T.length?`${T.length} ANNOTATIONS`:"");let H=document.querySelector("[data-sd-ann-head]");H&&(H.textContent=T.length?`ANNOTATIONS \xB7 ${T.length}`:"ANNOTATIONS");let B=document.querySelector("[data-sd-ann-layer]");B&&(!I||T.length===0?B.innerHTML="":B.innerHTML=T.map(function(U){let Y=_[U.label]||_.note,F=Math.min(100,Math.max(0,U.ts_ms/I*100)),O=U.id===h.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${Y.shape}${O?" is-active":""}"
              data-sd-ann-marker="${w(U.id)}"
              style="left:${F.toFixed(2)}%;--ann-color:${Y.color}"
              title="${w(Y.label)} \xB7 ${x(U.ts_ms)}"
              aria-label="${w(Y.label)} at ${x(U.ts_ms)}: ${w(U.note||"")}">
              ${Y.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${O?`<span class="admin-sd-ann-tip"><span style="color:${Y.color}">${Y.icon}</span> ${w((U.note||"").slice(0,40))}${(U.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let $=document.querySelector("[data-sd-ann-legend]");$&&($.innerHTML=Object.keys(_).map(function(U){let Y=_[U],F=Y.shape==="square"?"2px":Y.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${Y.color};border-radius:${F}"></span>
          <span class="admin-sd-ann-legend-label">${Y.label}</span>
        </span>`}).join(""));let j=document.querySelector("[data-sd-ann-list]");if(j){if(T.length===0){j.innerHTML="";let U=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});U.dataset.emptyKind="session-annotations",j.appendChild(U);return}j.innerHTML=T.map(function(U){let Y=_[U.label]||_.note,F=U.id===h.activeAnnId,V=(U.note||"").length>80?(U.note||"").slice(0,80)+"\u2026":U.note||"";return`
        <div class="admin-sd-ann-row${F?" is-active":""}" data-sd-ann-row="${w(U.id)}">
          <span class="admin-sd-ann-ts" style="color:${Y.color}">${x(U.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${Y.color}">${Y.icon} ${Y.label}</span>
          <span class="admin-sd-ann-note">${w(V)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${w(U.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function i(T){if(!h.sessionId)return;let I=window.HudConfirm;if(!I){let Y=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:x(T)}),"");Y!=null&&Y.trim()&&a(T,"note",Y.trim());return}let H="highlight",B="",$=document.createElement("div");$.className="admin-sd-ann-modal-body",$.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${x(T)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(_).map(function(Y){let F=_[Y];return`
              <button type="button" class="admin-sd-ann-modal-lbl${Y==="highlight"?" is-active":""}"
                data-ann-label="${Y}" style="--ann-color:${F.color}">
                <span class="admin-sd-ann-modal-lbl-icon">${F.icon}</span>
                <span class="admin-sd-ann-modal-lbl-text">${F.label}</span>
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
      </div>`,$.addEventListener("click",function(Y){let F=Y.target.closest("[data-ann-label]");F&&(H=F.dataset.annLabel,$.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(O){O.classList.toggle("is-active",O===F)}))});let j=$.querySelector("[data-ann-modal-note]"),U=$.querySelector("[data-ann-modal-counter]");j.addEventListener("input",function(){B=j.value,U.textContent=`${B.length} / 280`}),setTimeout(function(){j&&j.focus()},50),I.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:$,width:460}).then(function(Y){Y&&a(T,H,j.value.trim())})}async function a(T,I,C){if(h.sessionId)try{let H=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:h.sessionId,ts_ms:Math.max(0,Math.round(T)),label:I||"note",note:C||""})});if(!H.ok)throw new Error(`HTTP ${H.status}`);let B=await H.json();B.annotation&&(h.annotations.push(B.annotation),h.annotations.sort(function($,j){return $.ts_ms-j.ts_ms}),h.activeAnnId=B.annotation.id,n(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(H){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:H.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function t(T){if(T)try{let I=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(T)}`,{method:"DELETE",credentials:"same-origin"});if(!I.ok)throw new Error(`HTTP ${I.status}`);h.annotations=h.annotations.filter(function(C){return C.id!==T}),h.activeAnnId===T&&(h.activeAnnId=null),n(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(I){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:I.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function o(T){let I=document.querySelector("[data-sd-timeline-inner]"),C=document.querySelector("[data-sd-ann-hover]");if(!I||!C)return;let H=I.getBoundingClientRect();if(!H.width)return;let B=T.clientX-H.left,$=Math.min(1,Math.max(0,B/H.width)),j=P();if(!j){C.hidden=!0;return}let U=Math.round($*j);h.hoverTsMs=U,C.hidden=!1,C.style.left=`${($*100).toFixed(2)}%`,C.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:x(U)})}function c(){let T=document.querySelector("[data-sd-ann-hover]");T&&(T.hidden=!0),h.hoverTsMs=null}function u(T){if(T.target.closest("[data-sd-ann-marker]"))return;let I=document.querySelector("[data-sd-timeline-inner]");if(!I)return;let C=I.getBoundingClientRect();if(!C.width)return;let H=T.clientX-C.left,B=Math.min(1,Math.max(0,H/C.width)),$=P();$&&i(Math.round(B*$))}async function l(){if(h.sessionId)try{let T=h.records.slice(0,500);if(!T.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let I=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:T,speedMultiplier:1})});if(I.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!I.ok)throw new Error("HTTP "+I.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function v(T,I){if(T==="back")window.location.hash="#/history/sessions";else if(T==="retry")h.sessionId&&L(h.sessionId);else if(T==="export"){if(!h.sessionId)return;let C=document.createElement("a");C.href="/admin/sessions/"+encodeURIComponent(h.sessionId)+"/export?format=csv",C.rel="noopener",document.body.appendChild(C),C.click(),C.remove()}else if(T==="replay")l();else if(T==="add-annotation"){let C=P(),H=h.hoverTsMs!=null?h.hoverTsMs:Math.round(C/2);i(H)}}function g(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let I=z();if(!I){h.sessionId=null,A(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}h.sessionId=I,L(I)}function E(){let T=document.getElementById("settings-grid");if(!T)return;let I=document.getElementById(b);I||(T.insertAdjacentHTML("beforeend",M()),I=document.getElementById(b),n()),I&&I.dataset.sdBound!=="1"&&(I.dataset.sdBound="1",I.addEventListener("click",function(C){let H=C.target.closest("[data-sd-ann-del]");if(H){C.stopPropagation(),t(H.dataset.sdAnnDel);return}let B=C.target.closest("[data-sd-ann-marker]");if(B){C.stopPropagation(),h.activeAnnId=B.dataset.sdAnnMarker,n();let F=document.querySelector(`[data-sd-ann-row="${h.activeAnnId}"]`);F&&F.scrollIntoView&&F.scrollIntoView({block:"nearest",behavior:"smooth"});return}let $=C.target.closest("[data-sd-ann-row]");if($){h.activeAnnId=$.dataset.sdAnnRow,n();return}if(C.target.closest("[data-sd-timeline-inner]")){u(C);return}let U=C.target.closest("[data-sd-action]");if(U){C.preventDefault(),v(U.dataset.sdAction,U);return}let Y=C.target.closest("[data-sd-filter]");Y&&(h.msgFilter=Y.dataset.sdFilter,I.querySelectorAll("[data-sd-filter]").forEach(function(F){F.classList.toggle("is-active",F===Y)}),s())}),I.addEventListener("input",function(C){let H=C.target.closest("[data-sd-search]");H&&(h.msgQuery=H.value||"",s())}),I.addEventListener("mousemove",function(C){C.target.closest("[data-sd-timeline-inner]")&&o(C)}),I.addEventListener("mouseleave",function(C){C.target.closest&&C.target.closest("[data-sd-timeline-inner]")&&c()},!0)),h.sessionId=z(),h.sessionId?L(h.sessionId):A(ServerI18n.t("sessionDetailErrNoSessionSelected")),f||(f=!0,window.addEventListener("hashchange",g))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&E()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let I=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(b)&&I.indexOf("/session-detail")!==-1&&E(),window.addEventListener("admin-route-changed",function(C){(C&&C.detail&&C.detail.route)==="session-detail"&&E()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&E()})})})()});var Ot=me(()=>{(function(){"use strict";let b="sec-search-overview";var w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},h=20,f={query:"",scope:"session",blockedOnly:!1,who:"",shown:h,results:[],total:0,loading:!1,searched:!1},_=0;function z(){return'<div id="'+b+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+w(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+w(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+w(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+w(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+w(ServerI18n.t("searchWhoAria"))+'"><option value="">'+w(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+w(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+w(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function y(e){if(!e)return 200;for(var s=0,n=0;n<Math.min(e.length,6);n++)s=s*31+e.charCodeAt(n)&65535;return s%360}function S(e,s){if(!s||!e)return w(e||"");var n=w(e),i=w(s);try{var a=new RegExp("("+i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return n.replace(a,'<mark class="admin-search-hit">$1</mark>')}catch{return n}}function m(e){if(!e)return"\u2014";try{var s=new Date(e);return s.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return e}}function D(){var e=f.results;return f.blockedOnly&&(e=e.filter(function(s){return(s.status||"shown")==="blocked"})),f.who&&(e=e.filter(function(s){return(s.nickname||"")===f.who})),e}function q(){var e=document.getElementById("admin-search-count");if(e){if(!f.searched||!f.query.trim()){e.textContent="";return}e.textContent=ServerI18n.t("searchResultCount",{n:D().length})}}function M(){var e=document.querySelector("[data-search-who]");if(e){var s=[];f.results.forEach(function(i){var a=(i.nickname||"").trim();a&&s.indexOf(a)===-1&&s.push(a)}),s.sort();var n=f.who;e.innerHTML='<option value="">'+w(ServerI18n.t("searchWhoAnyone"))+"</option>"+s.map(function(i){return'<option value="'+w(i)+'"'+(i===n?" selected":"")+">"+w(i)+"</option>"}).join("")}}function L(){var e=document.getElementById("admin-search-results"),s=document.getElementById("admin-search-empty-state"),n=document.getElementById("admin-search-export-btn");if(e){e.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(u){u.remove()});var i=function(u){s&&(s.style.display="block",s.textContent=u),n&&(n.hidden=!0)};if(f.loading)return i(ServerI18n.t("searchSearching"));if(!f.searched)return i(ServerI18n.t("searchPromptStart"));var a=D();if(a.length===0)return i(ServerI18n.t("searchNoMatch"));s&&(s.style.display="none"),n&&(n.hidden=!1);var t=Math.min(a.length,f.shown),o=document.createDocumentFragment();if(a.slice(0,t).forEach(function(u){var l=document.createElement("div");l.className="admin-search-row",l.innerHTML='<span class="admin-search-row__ts">'+w(m(u.timestamp))+'</span><span class="admin-search-row__text">'+S(u.text||"",f.query)+'</span><span class="admin-search-row__nick">'+w((u.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+"</span>",o.appendChild(l)}),e.appendChild(o),a.length>t){var c=document.createElement("button");c.type="button",c.className="admin-search-more",c.dataset.searchMore="1",c.textContent=ServerI18n.t("searchMoreLeft",{n:a.length-t}),e.appendChild(c)}}}function R(){q(),M(),L()}async function P(){var e=f.query.trim();if(!e){f.loading=!1,f.searched=!1,f.results=[],f.total=0,R();return}f.loading=!0,R();try{var s="/admin/search?q="+encodeURIComponent(e);if(f.scope==="session"){var n=await x();n&&(s+="&since="+encodeURIComponent(n))}var i=Date.now(),a=await fetch(s,{credentials:"same-origin"}),t=Date.now()-i;if(!a.ok)throw new Error("HTTP "+a.status);var o=await a.json();f.results=Array.isArray(o.results)?o.results:[],f.total=typeof o.total=="number"?o.total:f.results.length,f.shown=h}catch(c){console.error("[admin-search] fetch error:",c),f.results=[],f.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:c.message||""}),!1)}finally{f.loading=!1,f.searched=!0,R()}}var k=null;async function x(){if(k!==null)return k;try{var e=await fetch("/admin/session/current",{credentials:"same-origin"});if(e.ok){var s=await e.json();if(s.status==="live"&&s.started_at)return k=new Date(s.started_at*1e3).toISOString(),k}}catch{}return k="",""}function K(){clearTimeout(_),_=setTimeout(P,300)}function A(){if(f.results.length){var e=[["nickname","fingerprint","timestamp","status","text"].join(",")];f.results.forEach(function(a){var t=[a.nickname||"",a.fingerprint||"",a.timestamp||"",a.status||"",a.text||""].map(function(o){return'"'+String(o).replace(/"/g,'""')+'"'});e.push(t.join(","))});var s=new Blob(["\uFEFF"+e.join(`
`)],{type:"text/csv;charset=utf-8"}),n=URL.createObjectURL(s),i=document.createElement("a");i.href=n,i.download="danmu-search-"+(f.query||"export")+".csv",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(n)}}function N(){var e=document.getElementById(b);if(e){var s=document.getElementById("admin-search-input");s&&(s.addEventListener("input",function(){f.query=s.value,K()}),s.addEventListener("keydown",function(i){i.key==="Enter"&&(clearTimeout(_),f.query=s.value,P())})),e.addEventListener("click",function(i){var a=i.target.closest("[data-search-scope]");if(a){f.scope=a.dataset.searchScope,e.querySelectorAll("[data-search-scope]").forEach(function(o){o.classList.toggle("is-active",o===a)}),f.query.trim()&&K();return}var t=i.target.closest("[data-search-blocked]");if(t){f.blockedOnly=!f.blockedOnly,t.classList.toggle("is-active",f.blockedOnly),f.shown=h,R();return}if(i.target.closest("[data-search-more]")){f.shown+=h,L();return}}),e.addEventListener("change",function(i){var a=i.target.closest("[data-search-who]");a&&(f.who=a.value||"",f.shown=h,R())});var n=document.getElementById("admin-search-export-btn");n&&n.addEventListener("click",A)}}function p(){var e=document.querySelector(".admin-dash-grid"),s=document.getElementById(b);if(!(!e||!s)){var n=e.dataset.activeLeaf||"dashboard";s.style.display=n==="search"?"":"none"}}function d(){var e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",z()),N(),p())}function r(){if(window.DANMU_CONFIG?.session?.logged_in){var e=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&d(),p()});e.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",p),document.addEventListener("admin-panel-rendered",function(){d(),p()}),d()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var Rt=me(()=>{(function(){"use strict";let b="sec-api-tokens-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(u){return String(u).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},h=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],f=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],_={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function z(u){if(!u)return"\u2014";try{let l=new Date(u);if(isNaN(l.getTime()))return String(u);let v=g=>String(g).padStart(2,"0");return`${l.getFullYear()}-${v(l.getMonth()+1)}-${v(l.getDate())}`}catch{return String(u)}}function y(u){if(!u)return null;try{let l=new Date(u);if(isNaN(l.getTime()))return null;let v=g=>String(g).padStart(2,"0");return`${l.getFullYear()}-${v(l.getMonth()+1)}-${v(l.getDate())} ${v(l.getHours())}:${v(l.getMinutes())}`}catch{return null}}function S(u){let l=Number(u);return isNaN(l)?"0":l.toLocaleString()}function m(u){if(!u||u.enabled===!1)return"inactive";if(!u.expires_at)return"active";try{let l=new Date(u.expires_at).getTime(),v=Date.now();if(l<v)return"expired";if(l-v<168*3600*1e3)return"expiring"}catch{}return"active"}function D(u){if(!u)return 1/0;try{return Math.floor((Date.now()-new Date(u).getTime())/864e5)}catch{return 1/0}}function q(u){return!u||!u.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':u.map(function(l){let v="admin-ui-pill admin-at-scope-badge";return l==="admin:*"?v+=" is-danger":l.startsWith("fire:")?v+=" is-warn":l.startsWith("read:stats")?v+=" is-cyan":v+=" is-success",`<span class="${v}">${w(l)}</span>`}).join(" ")}function M(u){let l="admin-ui-dot admin-at-dot";return u==="active"?l+=" is-success":u==="expiring"?l+=" is-warn":u==="expired"?l+=" is-danger":l+=" is-muted",`<span class="${l}" aria-hidden="true"></span>`}function L(){let u=h.map(function(v){let g=v.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",T=`admin-ui-pill admin-at-scope-badge is-${v.badge==="red"?"danger":v.badge==="amber"?"warn":v.badge==="green"?"success":v.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${v.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${v.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${w(v.id)}"
          >
          <span class="${T}">${w(v.badgeTxt)}</span>
          <span class="admin-at-scope-label">${w(ServerI18n.t(v.labelKey))}</span>
          ${g}
        </label>
      `}).join(""),l=f.map(function(v){let g=v.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${v.days!==null?String(v.days):"null"}" ${g} class="sr-only">
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
    `}async function R(){K(!0);try{let u=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!u.ok)throw new Error(`HTTP ${u.status}`);let l=await u.json();_.tokens=l.tokens||l||[],N()}catch(u){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:u.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{K(!1)}}async function P(u){_.creating=!0,A(!0),s();try{let l=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!l.ok){let E=await l.json().catch(()=>({}));throw new Error(E.error||E.message||`HTTP ${l.status}`)}let v=await l.json(),g=v.token||v.raw_token||v.access_token||null;_.newTokenRaw=g,p(g),r(),await R(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(l){e(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:l.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:l.message||""}),!1)}finally{_.creating=!1,A(!1)}}async function k(u,l){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${w(l||u)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let g=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(u)}`,{method:"DELETE"});if(!g.ok){let E=await g.json().catch(()=>({}));throw new Error(E.error||E.message||`HTTP ${g.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await R()}catch(g){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:g.message||""}),!1)}}async function x(u,l){try{let v=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(u)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:l})});if(!v.ok){let g=await v.json().catch(()=>({}));throw new Error(g.error||g.message||`HTTP ${v.status}`)}window.showToast&&window.showToast(l?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await R()}catch(v){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:v.message||""}),!1)}}function K(u){let l=document.querySelector("[data-at-list-loading]");l&&(l.hidden=!u)}function A(u){let l=document.getElementById("adminAtSubmitBtn");l&&(l.disabled=u,l.textContent=u?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function N(){let u=_.tokens,l=document.querySelector("[data-at-empty]"),v=document.querySelector("[data-at-table-wrap]"),g=document.querySelector("[data-at-tbody]");if(!(!l||!v||!g)){if(!u||u.length===0){if(!l.firstElementChild&&window.AdminEmpty){let E=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});E.dataset.emptyKind="api-tokens",l.appendChild(E)}l.hidden=!1,v.hidden=!0;return}l.hidden=!0,v.hidden=!1,g.innerHTML=u.map(function(E){let T=m(E),I=M(T),C=E.scopes||E.scope||[],H=Array.isArray(C)?C:String(C).split(",").map(F=>F.trim()).filter(Boolean),$=D(E.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",j=T==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",U=T==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",Y=E.last_used_at?`${y(E.last_used_at)||z(E.last_used_at)}<br><span class="admin-at-ip">${w(E.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${w(E.id||E.token_id||"")}">
          <td class="admin-at-td-label">
            ${I}
            <span class="admin-at-label-text">${w(E.label||E.name||"\u2014")}</span>
            ${$}${j}${U}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${w(E.prefix||E.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${q(H)}</div>
          </td>
          <td class="admin-at-td-used">${Y}</td>
          <td class="admin-at-td-usage">${S(E.usage_count||E.use_count)}</td>
          <td class="admin-at-td-created">${z(E.created_at)}</td>
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
      `}).join("")}}function p(u){let l=document.getElementById("adminAtSuccessBanner"),v=document.getElementById("adminAtTokenDisplay"),g=document.getElementById("adminAtCreateForm");l&&(l.hidden=!1),v&&u&&(v.value=u),g&&(g.style.opacity="0.5"),l&&l.scrollIntoView({behavior:"smooth",block:"nearest"})}function d(){let u=document.getElementById("adminAtSuccessBanner"),l=document.getElementById("adminAtCreateForm");u&&(u.hidden=!0),l&&(l.style.opacity=""),_.newTokenRaw=null}function r(){let u=document.getElementById("adminAtCreateForm");u&&u.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(g){g.classList.remove("is-active")});let l=document.querySelector("input[name='adminAtExpiry'][value='90']");if(l){l.checked=!0;let g=l.closest(".admin-at-expiry-btn");g&&g.classList.add("is-active")}let v=document.getElementById("adminAtAdminWarn");v&&(v.hidden=!0),s()}function e(u){let l=document.getElementById("adminAtFormError");l&&(l.hidden=!1,l.textContent=u)}function s(){let u=document.getElementById("adminAtFormError");u&&(u.hidden=!0,u.textContent="")}function n(){let u=document.getElementById("adminAtLabel"),l=u?u.value.trim():"",v=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(I){v.push(I.value)});let g=document.querySelector("input[name='adminAtExpiry']:checked"),E=g?g.value:"90",T=E==="null"?null:parseInt(E,10);return{label:l,scopes:v,expiry_days:T}}function i(u){return u.label?u.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!u.scopes||u.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function a(u){if(u.preventDefault(),_.creating)return;s();let l=n(),v=i(l);if(v){e(v);return}P(l)}function t(){let u=_.newTokenRaw;if(!u)return;let l=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(u).then(function(){l&&(l.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){l.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let v=document.getElementById("adminAtTokenDisplay");v&&(v.select(),document.execCommand("copy")),l&&(l.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){l.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function o(){let u=document.getElementById(b);if(!u)return;u.addEventListener("click",function(E){let T=E.target.closest("[data-at-action]");if(T){let C=T.dataset.atAction;if(C==="revoke"){let H=T.dataset.tokenId,B=T.dataset.tokenLabel;k(H,B)}else if(C==="toggle"){let H=T.dataset.tokenId,B=T.dataset.tokenEnabled==="1";x(H,!B)}else C==="copy-token"&&t();return}let I=E.target.closest(".admin-at-expiry-btn");I&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(C){C.classList.remove("is-active")}),I.classList.add("is-active"))});let l=document.getElementById("adminAtScope_admin__");l&&l.addEventListener("change",function(){let E=document.getElementById("adminAtAdminWarn");E&&(E.hidden=!l.checked)});let v=document.getElementById("adminAtCreateForm");v&&v.addEventListener("submit",a);let g=document.querySelector("input[name='adminAtExpiry'][value='90']");if(g){let E=g.closest(".admin-at-expiry-btn");E&&E.classList.add("is-active")}}function c(){let u=document.getElementById("settings-grid");!u||document.getElementById(b)||(u.insertAdjacentHTML("beforeend",L()),o(),R())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&c()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&c()})})()});var qt=me(()=>{(function(){"use strict";let b="sec-wcag-overview",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(r){return String(r).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})};function h(r){let e=r.replace(/^#/,""),s=e.length===3?e.split("").map(function(n){return n+n}).join(""):e;return[parseInt(s.slice(0,2),16)/255,parseInt(s.slice(2,4),16)/255,parseInt(s.slice(4,6),16)/255]}function f(r){return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)}function _(r){let e=h(r);return .2126*f(e[0])+.7152*f(e[1])+.0722*f(e[2])}function z(r,e){let s=_(r),n=_(e),i=Math.max(s,n),a=Math.min(s,n);return(i+.05)/(a+.05)}function y(r){return r>=7?"AAA":r>=4.5?"AA":r>=3?"AA-large":"fail"}function S(r,e){let s=_(e),n=[],i=h(r);for(let a=.05;a<=.6&&n.length<3;a+=.05){let o="#"+i.map(function(u){return Math.min(1,u+a)}).map(function(u){return Math.round(u*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),c=z(o,e);c>=4.5&&n.push({hex:o,ratio:c})}return n}let m=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],D={fg:"#FB7185",bg:"#000000"},q="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",M={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function L(){let r=m.filter(function(n){return y(z(n.fg,n.bg))!=="fail"}).length,e=m.length-r,s=Math.round(r/m.length*100);return`
      <div id="${b}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${R("PASS AA+",r,ServerI18n.t("wcagStatPassLabel"))}
              ${R("BELOW AA",e,ServerI18n.t("wcagStatFailLabel"))}
              ${R("PAIRS",m.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${R("PASS RATE",s+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:s})}">
                <div class="admin-wcag-meter-fill" style="width:${s}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${q}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${m.map(function(n,i){return P(n,i)}).join("")}
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
      </div>`}function R(r,e,s){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${w(String(e))}</span>
        <span class="hud-stat-tile-label">${w(s)}</span>
      </div>`}function P(r,e){let s=z(r.fg,r.bg),n=y(s),i=M[n],a=ServerI18n.t(r.nameKey),t=i.labelKey?ServerI18n.t(i.labelKey):i.label,o=n==="fail"?ServerI18n.t("wcagWarnFail"):n==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${q}"
        data-wcag-pair-idx="${e}" role="button" tabindex="0"
        aria-label="${w(ServerI18n.t("wcagPairAriaLabel",{name:a,ratio:s.toFixed(2),level:t.slice(2)}))}">
        <span class="admin-wcag-pair-name">${w(a)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${w(r.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${w(r.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${w(r.fg)}">${w(r.fg)} / ${w(r.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${s.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${i.mod}">${t}</span>
        ${o?`<span class="admin-wcag-warn">\u26A0 ${o}</span>`:""}
      </div>`}function k(){let r=z(D.fg,D.bg),e=y(r),s=M[e],n=s.labelKey?ServerI18n.t(s.labelKey):s.label,i=S(D.fg,D.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${x(ServerI18n.t("wcagForegroundLabel"),D.fg,"fg")}
        ${x(ServerI18n.t("wcagBackgroundLabel"),D.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${w(D.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${w(D.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${w(D.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${w(D.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${r.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${s.mod}">${n}</span>
      </div>

      <div class="admin-wcag-levels">
        ${K(ServerI18n.t("wcagCheckAANormal"),r>=4.5)}
        ${K(ServerI18n.t("wcagCheckAALarge"),r>=3)}
        ${K(ServerI18n.t("wcagCheckAAANormal"),r>=7)}
        ${K(ServerI18n.t("wcagCheckAAALarge"),r>=4.5)}
      </div>

      ${i.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${i.map(function(a){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${w(a.hex)}"
                title="${w(ServerI18n.t("wcagSuggApplyTitle",{ratio:a.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${w(D.bg)};color:${w(a.hex)}">${w(a.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${a.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function x(r,e,s){let n="wcag-tester-"+s;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${n}">${w(r)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${w(e)}"></span>
          <input type="text" id="${n}" class="admin-ui-input" data-wcag-tester-${s}
            aria-label="${w(ServerI18n.t("wcagHexAria",{label:r}))}"
            value="${w(e)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function K(r,e){return`<div class="admin-wcag-level ${e?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${e?"\u2713":"\u2717"}</span>
      <span>${w(r)}</span>
    </div>`}function A(){let r=document.getElementById(b);r&&(r.addEventListener("click",function(e){let s=e.target.closest("[data-wcag-pair-idx]");if(s){N(s);return}let n=e.target.closest("[data-wcag-sugg]");n&&(D.fg=n.dataset.wcagSugg,p())}),r.addEventListener("keydown",function(e){if(e.key!=="Enter"&&e.key!==" "&&e.key!=="Spacebar")return;let s=e.target.closest("[data-wcag-pair-idx]");s&&(e.preventDefault(),N(s))}),r.addEventListener("input",function(e){let s=e.target.closest("[data-wcag-tester-fg]"),n=e.target.closest("[data-wcag-tester-bg]");s&&/^#[0-9A-Fa-f]{6}$/.test(s.value)&&(D.fg=s.value.toUpperCase(),p()),n&&/^#[0-9A-Fa-f]{6}$/.test(n.value)&&(D.bg=n.value.toUpperCase(),p())}))}function N(r){let e=m[parseInt(r.dataset.wcagPairIdx,10)];e&&(D.fg=e.fg,D.bg=e.bg,p())}function p(){let r=document.querySelector("[data-wcag-tester]");r&&(r.innerHTML=k())}function d(){let r=document.getElementById("settings-grid");!r||document.getElementById(b)||(r.insertAdjacentHTML("beforeend",L()),A())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&d()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&d()})})()});var Ht=me(()=>{(function(){"use strict";let b="danmu.onboarding.done",w="admin-onboarding-root",z=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],y=0,S=!1;window.AdminOnboarding={start:L,isDone:function(){try{return!!localStorage.getItem(b)}catch{return!1}},reset:function(){try{localStorage.removeItem(b)}catch{}}};let m=new Set(["live","dashboard"]);function D(){if(S||window.AdminOnboarding.isDone()||!m.has(q()))return;let r=()=>!!document.querySelector(".admin-session-banner-live");r()||setTimeout(()=>{S||window.AdminOnboarding.isDone()||r()||m.has(q())&&L()},1200)}function q(){let r=document.querySelector(".admin-dash-grid");return r&&r.dataset.activeRoute||"live"}function M(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&L()}function L(){S||(S=!0,y=0,K())}function R(r){if(!S)return;S=!1,document.body.removeEventListener("click",k),document.removeEventListener("keydown",x),window.removeEventListener("resize",A);let e=document.getElementById(w);if(e&&e.remove(),r)try{localStorage.setItem(b,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function P(){y<z.length-1?(y++,A()):R(!0)}function k(r){let e=r.target.closest("[data-ob-action]");e&&(r.stopPropagation(),e.dataset.obAction==="next"?P():e.dataset.obAction==="skip"&&R(!1))}function x(r){S&&r.key==="Escape"&&(r.preventDefault(),R(!1))}function K(){let r=document.getElementById(w);r&&r.remove();let e=document.createElement("div");e.id=w,e.className="admin-ob-root",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","false"),e.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(e),document.body.addEventListener("click",k),document.addEventListener("keydown",x),window.addEventListener("resize",A),A()}function A(){let r=document.getElementById(w);if(!r)return;let e=z[y],s=z.length,n=p(e.target),i=window.innerWidth,a=window.innerHeight,t="";n?t='<div class="admin-ob-spot" style="left:'+(n.left-8)+"px;top:"+(n.top-8)+"px;width:"+(n.width+16)+"px;height:"+(n.height+16)+'px;"></div>':t='<div class="admin-ob-scrim"></div>';let o=(i-360)/2,c=a/2-110,u="none";if(n){let E=n.left+n.width/2;e.side==="top"?(o=E-360/2,c=n.top-16,u="bottom"):e.side==="right"?(o=n.right+16+8,c=n.top,u="left"):(o=E-360/2,c=n.bottom+16+8,u="top"),o=Math.max(16,Math.min(i-360-16,o))}let l=z.map(function(E,T){return'<span class="admin-ob-progress-item'+(T===y?" is-current":"")+'">'+(T+1)+" "+d(ServerI18n.t(E.labelKey))+"</span>"+(T<s-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");r.innerHTML=t+'<div class="admin-ob-bubble" data-arrow="'+u+'" style="left:'+o+"px;top:"+c+'px"><div class="admin-ob-count">'+(y+1)+" / "+s+'</div><div class="admin-ob-title">'+d(ServerI18n.t(e.titleKey))+'</div><div class="admin-ob-body">'+d(ServerI18n.t(e.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+d(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+d(ServerI18n.t(y===s-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+l+"</div></div>";let v=r.querySelector(".admin-ob-bubble");if(!v||!n)return;let g=v.offsetHeight;if(e.side==="top")v.style.top=Math.max(16,n.top-16-8-g)+"px";else if(c+g>a-16){let E=n.top-16-8-g;E>=16?(v.style.top=E+"px",v.setAttribute("data-arrow","bottom")):(v.style.top=Math.max(16,a-g-16)+"px",v.setAttribute("data-arrow","none"))}N(v,n)}function N(r,e){let s=r.getAttribute("data-arrow");if(s==="none")return;let n=r.getBoundingClientRect(),i=s==="top"||s==="bottom",a=i?e.left+e.width/2-n.left:e.top+e.height/2-n.top,t=i?n.width:n.height,o=Math.max(16,Math.min(t-32,a-8));r.style.setProperty("--ob-arrow",o+"px")}function p(r){if(!r)return null;let e=document.querySelector(r);if(!e)return null;let s=e.getBoundingClientRect();return s.width<8||s.height<8||s.bottom<0||s.top>window.innerHeight?null:s}function d(r){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(r):r==null?"":String(r).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",M),M(),window.addEventListener("hashchange",function(){m.has(q())&&setTimeout(D,600)}),setTimeout(D,800))})})()});var Vt=me(()=>{var Ss=pe(Ce()),Is=pe(Ae()),ks=pe(Be()),Ts=pe(Fe()),_s=pe(De()),Es=pe(Me()),$s=pe(Ne()),xs=pe(Pe()),Ls=pe(Oe()),Cs=pe(Re()),As=pe(qe()),Bs=pe(He()),Fs=pe(je()),Ds=pe(Ue()),Ms=pe(Ke()),Ns=pe(We()),Ps=pe(Ge()),Os=pe(ze()),Rs=pe(Ve()),qs=pe(Je()),Hs=pe(Ye()),js=pe(Qe()),Us=pe(Xe()),Ks=pe(Ze()),Ws=pe(et()),Gs=pe(tt()),zs=pe(nt()),Vs=pe(at()),Js=pe(st()),Ys=pe(it()),Qs=pe(ot()),Xs=pe(rt()),Zs=pe(dt()),ei=pe(lt()),ti=pe(ct()),ni=pe(ut()),ai=pe(mt()),si=pe(pt()),ii=pe(vt()),oi=pe(ft()),ri=pe(ht()),di=pe(gt()),li=pe(bt()),ci=pe(yt()),ui=pe(wt()),mi=pe(St()),pi=pe(It()),vi=pe(kt()),fi=pe(Tt()),hi=pe(_t()),gi=pe(Et()),bi=pe($t()),yi=pe(xt()),wi=pe(Lt()),Si=pe(Ct()),Ii=pe(At()),ki=pe(Bt()),Ti=pe(Ft()),_i=pe(Dt()),Ei=pe(Mt()),$i=pe(Nt()),xi=pe(Pt()),Li=pe(Ot()),Ci=pe(Rt()),Ai=pe(qt()),Bi=pe(Ht())});Vt();})();
