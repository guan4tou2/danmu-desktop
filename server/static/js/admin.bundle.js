/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var Xt=Object.create;var Pe=Object.defineProperty;var Zt=Object.getOwnPropertyDescriptor;var en=Object.getOwnPropertyNames;var tn=Object.getPrototypeOf,nn=Object.prototype.hasOwnProperty;var ye=(y,k)=>()=>{try{return k||y((k={exports:{}}).exports,k),k.exports}catch(g){throw k=0,g}};var an=(y,k,g,f)=>{if(k&&typeof k=="object"||typeof k=="function")for(let C of en(k))!nn.call(y,C)&&C!==g&&Pe(y,C,{get:()=>k[C],enumerable:!(f=Zt(k,C))||f.enumerable});return y};var we=(y,k,g)=>(g=y!=null?Xt(tn(y)):{},an(k||!y||!y.__esModule?Pe(g,"default",{value:y,enumerable:!0}):g,y));var Re=ye(()=>{(function(){"use strict";var y=4,k=2500,g=3e3,f=Object.create(null);function C(){return Date.now()}function j(S,b){return(b?"ok:":"err:")+S}function F(S,b){return"var("+S+", "+b+")"}function $(S){return S?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function p(S){for(var b=Array.prototype.slice.call(S.children);b.length>y;){var I=b.shift();I&&I.parentNode&&I.parentNode.removeChild(I)}}function N(S,b){S.remaining=b,S.startedAt=C(),S.timer=setTimeout(function(){x(S)},b)}function D(S){S.timer&&(clearTimeout(S.timer),S.timer=null,S.remaining=Math.max(600,S.remaining-(C()-S.startedAt)))}function w(S){S.timer||!S.el.parentNode||N(S,S.remaining)}function x(S){clearTimeout(S.timer),S.timer=null,S.key&&f[S.key]===S&&delete f[S.key];var b=S.el;!b||!b.parentNode||(b.style.opacity="0",b.style.transform="translateX(8px)",setTimeout(function(){b.parentNode&&b.parentNode.removeChild(b)},180))}function R(S,b){var I=document.getElementById("toast-container");if(I){b=b!==!1;var O=j(String(S),b),A=f[O];if(A&&A.el.parentNode&&C()-A.startedAt<k){A.count+=1,A.countEl&&(A.countEl.textContent="\xD7"+A.count,A.countEl.hidden=!1),D(A),w(A);return}var B=b?F("--color-ink-success","#639922"):F("--color-ink-error","#e24b4a"),h=F("--color-surface","#ffffff"),c=F("--color-text-primary","#1a1a1a"),r=F("--color-border-soft","rgba(0,0,0,.12)"),t=document.createElement("div");t.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+h,"color:"+c,"border:1px solid "+r,"border-left:3px solid "+B,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var d=document.createElement("span");d.style.cssText="display:inline-flex;color:"+B+";flex:0 0 auto",d.innerHTML=$(b);var e=document.createElement("span");e.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",e.textContent=S;var i=document.createElement("span");i.hidden=!0,i.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",t.appendChild(d),t.appendChild(e),t.appendChild(i),I.appendChild(t),p(I),requestAnimationFrame(function(){t.style.opacity="1",t.style.transform="translateX(0)"});var o={key:O,el:t,countEl:i,count:1,timer:null,remaining:g,startedAt:C()};f[O]=o,N(o,g),t.addEventListener("mouseenter",function(){D(o)}),t.addEventListener("mouseleave",function(){w(o)}),t.addEventListener("focusin",function(){D(o)}),t.addEventListener("focusout",function(){w(o)})}}window.showToast=R})()});var Oe=ye(()=>{(function(){"use strict";var y="admin-details-open-state";function k(){try{return JSON.parse(localStorage.getItem(y))||{}}catch{return{}}}function g(b){try{localStorage.setItem(y,JSON.stringify(b))}catch{}}var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function C(b){return b==null?"":String(b).replace(/[&<>"']/g,function(I){return f[I]})}function j(){var b=document.querySelector("script[nonce]");return b&&b.nonce||""}function F(b,I){var O=j();return"<style"+(b?' id="'+C(b)+'"':"")+(O?' nonce="'+C(O)+'"':"")+">"+(I||"")+"</style>"}var $='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',p=[],N=null;function D(b){if(!b)return!1;for(var I=b;I&&I!==document.documentElement;I=I.parentElement)if(I.style&&I.style.display==="none")return!1;return!!(b.offsetParent||b.getClientRects().length)}function w(){var b=document.hidden;p.forEach(function(I){var O=typeof I.el=="function"?I.el():I.el,A=!b&&D(O);if(A&&!I.timer){if(I.immediate!==!1)try{I.tick()}catch{}I.timer=setInterval(I.tick,I.intervalMs)}else!A&&I.timer&&(clearInterval(I.timer),I.timer=0)})}function x(b){var I={el:b.el,intervalMs:b.intervalMs,tick:b.tick,immediate:b.immediate,timer:0};return p.push(I),N||(N=new MutationObserver(function(){w()}),N.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden"]}),window.addEventListener("hashchange",w),document.addEventListener("visibilitychange",w),document.addEventListener("admin-panel-rendered",w)),w(),function(){I.timer&&clearInterval(I.timer);var A=p.indexOf(I);A!==-1&&p.splice(A,1)}}function R(b){let I=document.createElement("textarea");I.value=b,I.setAttribute("readonly",""),I.style.position="fixed",I.style.opacity="0",document.body.appendChild(I),I.select();let O=!1;try{O=!!document.execCommand("copy")}catch{O=!1}return document.body.removeChild(I),O}function S(b,I){let O=h=>window.ServerI18n?window.ServerI18n.t(h):h,A=h=>(window.showToast&&window.showToast(h?I||O("sohCopied"):O("sohCopyFailed"),h),h);if(!b)return Promise.resolve(A(!1));let B=navigator.clipboard;return B&&typeof B.writeText=="function"?B.writeText(b).then(()=>A(!0),()=>A(R(b))):Promise.resolve(A(R(b)))}window.AdminUtils={copyText:S,DETAILS_STATE_KEY:y,loadDetailsState:k,saveDetailsState:g,escapeHtml:C,cspNonce:j,styleTag:F,closeIcon:$,pollWhileVisible:x}})()});var qe=ye(()=>{(function(){"use strict";function y(k,g,f,C){let j=k.querySelector("[data-route-breadcrumb]");if(!j)return;let F=Array.from(k.querySelectorAll(".admin-dash-nav-row[data-route]")),$=F.find(I=>I.dataset.route===g)||F.find(I=>I.dataset.route===f);if(!$){j.replaceChildren(),j.hidden=!0;return}let p="",N=$.previousElementSibling;for(;N;){if(N.classList.contains("admin-dash-nav-label")){p=(N.querySelector("[data-i18n]")||N).textContent.trim();break}N=N.previousElementSibling}let w=($.querySelector("[data-i18n]")||$.querySelector("span:nth-child(2)")||$).textContent.trim(),x=C?k.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,R=x?(x.querySelector(".admin-tabs-btn-label")||x).textContent.trim():"",S=[p,w,R].filter(Boolean),b=document.createDocumentFragment();S.forEach((I,O)=>{if(O){let h=document.createElement("span");h.className="admin-dash-breadcrumb-sep",h.setAttribute("aria-hidden","true"),h.textContent="\u203A",b.appendChild(h)}let A=document.createElement("span"),B=O===S.length-1;A.className="admin-dash-breadcrumb-item"+(B?" is-current":""),B&&A.setAttribute("aria-current","page"),A.textContent=I,b.appendChild(A)}),j.replaceChildren(b),j.hidden=S.length===0}window.AdminBreadcrumb={render:y}})()});var He=ye(()=>{(function(y){"use strict";let k={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",sections:["sec-blacklist","sec-filters"]},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},integrations:{defaultTab:"webhooks",tabs:[{slug:"webhooks",labelKey:"tabExtWebhooks",en:"WEBHOOKS",section:"sec-webhooks"},{slug:"plugins",labelKey:"tabExtPlugins",en:"PLUGINS",sections:["sec-plugins","sec-extensions-overview"]},{slug:"api-tokens",labelKey:"tabExtApiKeys",en:"API KEYS",section:"sec-api-tokens-overview"},{slug:"scheduler",labelKey:"tabExtScheduler",en:"SCHEDULER",section:"sec-scheduler"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function g(w){return Array.isArray(w.sections)?w.sections:w.section?[w.section]:[]}function f(w){return!!k[w]}function C(w){return k[w]||null}let j={moderation:{filters:"blacklist",fingerprints:"bans"}};function F(w,x){let R=k[w];if(!R)return null;let S=O=>R.tabs.some(A=>A.slug===O),b=j[w]?.[x];if(b&&S(b))return b;if(x&&S(x))return x;let I=y.AdminRouter?.tabMemory?.get?.(w);return I&&S(I)?I:R.defaultTab}function $(w,x,R){let S=k[w];if(!S)return null;let b=document.createElement("div");return b.className="admin-tabs-strip",b.dataset.nav=w,b.setAttribute("role","tablist"),b.setAttribute("aria-label",w+" tabs"),S.tabs.forEach(I=>{let O=document.createElement("button");O.type="button",O.className="admin-tabs-btn"+(I.slug===x?" is-active":""),O.dataset.nav=w,O.dataset.tab=I.slug,O.setAttribute("role","tab"),O.setAttribute("aria-selected",I.slug===x?"true":"false");let A=document.createElement("span");A.className="admin-tabs-btn-label",A.textContent=I.labelKey?ServerI18n.t(I.labelKey):I.label,O.appendChild(A);let B=document.createElement("span");B.className="admin-tabs-btn-count",B.dataset.tabCount=I.slug,B.textContent=p[w]&&p[w][I.slug]?p[w][I.slug]:"",O.appendChild(B),O.addEventListener("click",()=>{typeof R?.onSelect=="function"&&R.onSelect(I.slug)}),b.appendChild(O)}),b}let p={};function N(w,x,R){if(!k[w])return;p[w]=p[w]||{},p[w][x]=R==null?"":String(R);let S=document.querySelector('.admin-tabs-strip[data-nav="'+w+'"] [data-tab-count="'+x+'"]');S&&(S.textContent=p[w][x])}function D(w,x,R){let S=k[w];!S||!R||S.tabs.forEach(b=>{let I=b.slug===x;g(b).forEach(O=>{let A=R.querySelector("#"+O);A&&(A.style.display=I?"":"none")})})}y.AdminTabs={hasTabsFor:f,getConfig:C,resolveActiveTab:F,renderTabStrip:$,applyTabSectionVisibility:D,setTabCount:N}})(window)});var je=ye(()=>{(function(y,k){"use strict";let g="data-quick-action-host",f="admin-quick-action-bar";function C(N){if(N?.host instanceof HTMLElement)return N.host;let D=k.querySelector(".admin-dash-main");if(!D)return k.body;let w=D.querySelector(`[${g}]`);if(!w){w=k.createElement("div"),w.setAttribute(g,"");let x=D.querySelector(".admin-dash-topbar"),S=D.querySelector("[data-admin-tabs-host]")||x;S&&S.parentNode?S.insertAdjacentElement("afterend",w):D.prepend(w)}return w}function j(N,D){typeof y.showToast=="function"&&y.showToast(N,D!==!1)}function F({label:N,undoLabel:D,onUndo:w,windowMs:x}){let R=C(),S=R.querySelector("."+f);S&&S.remove();let b=k.createElement("div");b.className=f,b.setAttribute("role","status"),b.setAttribute("aria-live","polite");let I=k.createElement("span");I.className=f+"-text",I.textContent="\u2713 "+N,b.appendChild(I);let O=k.createElement("button");O.type="button",O.className=f+"-undo",O.textContent="\u21B6 "+(D||ServerI18n.t("qaUndoLabel")),b.appendChild(O);let A=()=>{b.classList.add("is-leaving"),setTimeout(()=>b.remove(),200)},B=setTimeout(A,x||5e3);return O.addEventListener("click",async()=>{clearTimeout(B),O.disabled=!0,O.textContent=ServerI18n.t("qaUndoing");try{await w(),j(ServerI18n.t("qaUndone"),!0)}catch(h){j(ServerI18n.t("qaUndoFailed",{msg:h?.message||String(h)}),!1)}finally{A()}}),R.appendChild(b),requestAnimationFrame(()=>b.classList.add("is-entering")),b}function $(N){if(!N||typeof N!="object")return;let D=N.label||ServerI18n.t("qaDone");N.toast!==!1&&j(D,!0),N.undo&&typeof N.undo.run=="function"&&F({label:D,undoLabel:N.undo.label,onUndo:N.undo.run,windowMs:N.undo.window})}function p(){k.querySelectorAll("."+f).forEach(N=>N.remove())}y.AdminQuickAction={fire:$,dismissAll:p}})(window,document)});var Ue=ye(()=>{(function(){"use strict";let y="admin-hud-modal-root",k=null,g=null,f='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function C(){let p=document.getElementById(y);return p?Array.prototype.slice.call(p.querySelectorAll(f)).filter(N=>N.offsetParent!==null||N===document.activeElement):[]}function j(p){let N=document.getElementById(y);if(N&&N.remove(),k&&(k(p),k=null),document.removeEventListener("keydown",F),g&&typeof g.focus=="function")try{g.focus()}catch{}g=null}function F(p){if(p.key==="Escape"){p.preventDefault(),j(!1);return}if(p.key==="Tab"){let N=C();if(!N.length){p.preventDefault();return}let D=N[0],w=N[N.length-1],x=document.activeElement;p.shiftKey?(x===D||!N.includes(x))&&(p.preventDefault(),w.focus()):(x===w||!N.includes(x))&&(p.preventDefault(),D.focus())}}function $(p){return new Promise(N=>{k&&j(!1),k=N,g=document.activeElement;let{icon:D="\u26A0",title:w=ServerI18n.t("hudConfirmTitle"),subtitle:x="",severity:R="warn",body:S="",titleText:b,bodyText:I,confirmLabel:O=ServerI18n.t("hudConfirmLabel"),cancelLabel:A=ServerI18n.t("cancel"),width:B=480}=p||{},h=document.createElement("div");h.id=y,h.className=`admin-hud-modal admin-hud-modal--${R}`,h.setAttribute("role","dialog"),h.setAttribute("aria-modal","true"),h.setAttribute("aria-labelledby","admin-hud-modal-title");let c=x?`<div class="admin-hud-modal__subtitle">${x}</div>`:"",r=typeof S=="string"?S:"",t=typeof S!="string"&&S&&S.nodeType;if(h.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${B}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${D}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${w}</div>
              ${c}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${r}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${A}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${O}</button>
          </div>
        </div>`,b!=null){let e=h.querySelector(".admin-hud-modal__title");e&&(e.textContent=String(b))}if(I!=null){let e=h.querySelector("[data-modal-body]");e&&(e.textContent=String(I))}if(t){let e=h.querySelector("[data-modal-body]");e.innerHTML="",e.appendChild(S)}h.addEventListener("click",function(e){let i=e.target.closest("[data-modal-action]");i&&(e.stopPropagation(),j(i.dataset.modalAction==="confirm"))}),document.body.appendChild(h),document.addEventListener("keydown",F);let d=R==="danger"?"cancel":"confirm";requestAnimationFrame(()=>{h.querySelector(`.admin-hud-modal__btn--${d}`)?.focus({focusVisible:!0})})})}window.HudConfirm={open:$}})()});var Ke=ye(()=>{(function(){"use strict";var y=8,k=30;function g(R,S){return window.ServerI18n?window.ServerI18n.t(R,S):R}function f(R,S){return R?R.length>S?R.slice(0,S)+"\u2026":R:""}function C(R){return g(R==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function j(R,S){return R==="keyword"?f(S,k):S.slice(0,y)}async function F(R,S,b){if(!S)return{ok:!1,error:"empty-value"};try{var I={type:R==="keyword"?"keyword":"fingerprint",value:S};b&&(I.reason=b);var O=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I)});return O.ok?{ok:!0}:{ok:!1,error:"HTTP "+O.status}}catch(A){return{ok:!1,error:A&&A.message||"network"}}}async function $(R,S,b){if(!R)return{ok:!1,error:"empty-fingerprint"};var I=parseInt(S||0,10)||0;try{var O=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:R,duration_s:I,reason:b||"",kind:"ban"})});return O.ok?{ok:!0}:{ok:!1,error:"HTTP "+O.status}}catch(A){return{ok:!1,error:A&&A.message||"network"}}}async function p(R){if(!R)return{ok:!1,error:"empty-message-id"};try{var S=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:R})});return S.ok?{ok:!0}:{ok:!1,error:"HTTP "+S.status}}catch(b){return{ok:!1,error:b&&b.message||"network"}}}function N(R,S){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:g("lfBlockTitle"),subtitle:g("cfmSubBlockFuture"),severity:"danger",bodyText:g("blockConfirm").replace("{label}",C(R)).replace("{display}",j(R,S)),confirmLabel:g("lfBlockTitle")}):(window.showToast&&window.showToast(g("blockFailed"),!1),Promise.resolve(!1))}function D(R,S,b){window.showToast&&window.showToast(R?g(S,b||{}):g("blockFailed"),!!R)}async function w(R,S){if(!R||(S=S||{},!S.skipConfirm&&!await N("keyword",R)))return!1;var b=await F("keyword",R);return D(b.ok,"blockFallback",{label:C("keyword"),display:j("keyword",R)}),b.ok}async function x(R,S){if(!R||(S=S||{},!S.skipConfirm&&!await N("fingerprint",R)))return!1;var b=await F("fingerprint",R,S.reason);return D(b.ok,"blockFallback",{label:C("fingerprint"),display:j("fingerprint",R)}),b.ok}window.AdminModeration={callBlock:F,banFingerprint:$,recall:p,blockKeyword:w,blockFingerprint:x}})()});var We=ye(()=>{(function(){"use strict";function k($){let p=document.createElement("div");return p.className="admin-skel-slow",p.hidden=!0,p.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",$.appendChild(p),setTimeout(function(){p.isConnected&&(p.hidden=!1)},3e3),$}function g($,p){let N=document.createElement("div");if(N.className="admin-skel "+($||""),p)for(let D in p)N.style[D]=p[D];return N}function f({rows:$=8}={}){let p=document.createElement("div");p.className="admin-skel-card admin-skel-list";let N=document.createElement("div");N.className="admin-skel-list__head",[60,80,140,200,80].forEach(D=>{N.appendChild(g("admin-skel-bar",{width:D+"px",height:"10px"}))}),p.appendChild(N);for(let D=0;D<$;D++){let w=document.createElement("div");w.className="admin-skel-list__row",w.appendChild(g("admin-skel-circle",{width:"24px",height:"24px"}));let x=document.createElement("div");x.className="admin-skel-list__col",x.appendChild(g("admin-skel-bar",{width:50+D*13%40+"%",height:"10px"})),x.appendChild(g("admin-skel-bar",{width:30+D*7%30+"%",height:"8px"})),w.appendChild(x),w.appendChild(g("admin-skel-bar",{width:"60px",height:"10px"})),p.appendChild(w)}return k(p)}function C({cols:$=4}={}){let p=document.createElement("div");p.className="admin-skel-stats",p.style.gridTemplateColumns=`repeat(${$}, 1fr)`;for(let N=0;N<$;N++){let D=document.createElement("div");D.className="admin-skel-card admin-skel-tile",D.appendChild(g("admin-skel-bar",{width:"60px",height:"8px"})),D.appendChild(g("admin-skel-bar",{width:"80px",height:"28px"})),D.appendChild(g("admin-skel-bar",{width:"100%",height:"18px"})),D.appendChild(g("admin-skel-bar",{width:"90px",height:"8px"})),p.appendChild(D)}return k(p)}function j(){let $=document.createElement("div");$.className="admin-skel-card admin-skel-chart";let p=document.createElement("div");p.className="admin-skel-chart__head",p.appendChild(g("admin-skel-bar",{width:"120px",height:"10px"}));let N=document.createElement("span");N.style.flex="1",p.appendChild(N),p.appendChild(g("admin-skel-bar",{width:"80px",height:"10px"})),$.appendChild(p);let D=document.createElement("div");D.className="admin-skel-chart__body";let w=document.createElement("div");w.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>w.appendChild(g("admin-skel-bar",{width:"24px",height:"6px"}))),D.appendChild(w);let x=document.createElement("div");return x.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(S=>x.appendChild(g("admin-skel-bar admin-skel-chart__bar",{height:S+"%"}))),D.appendChild(x),$.appendChild(D),k($)}function F($,p){let N={listRows:f,statsTiles:C,chart:j}[$];return N?N(p||{}).outerHTML:""}window.AdminSkeletons={listRows:f,statsTiles:C,chart:j,html:F}})()});var Ge=ye(()=>{(function(){"use strict";let y={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},k={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:y.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:y.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:y.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:y.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:y.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:y.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:y.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:y.cyan}};function g(C){let{icon:j="\xB7",title:F="",desc:$="",accent:p=y.cyan,ctaAccent:N,actionLabel:D,action:w,extra:x}=C||{},R=document.createElement("div");R.className="admin-empty",R.dataset.empty="1",R.style.setProperty("--admin-empty-accent",p),N&&R.style.setProperty("--admin-empty-cta",N);let S=document.createElement("div");if(S.className="admin-empty__icon",S.textContent=j,R.appendChild(S),F){let b=document.createElement("div");b.className="admin-empty__title",b.textContent=F,R.appendChild(b)}if($){let b=document.createElement("div");b.className="admin-empty__desc",b.textContent=$,R.appendChild(b)}if(D){let b=document.createElement("button");b.type="button",b.className="admin-empty__btn",b.textContent=D,typeof w=="function"&&b.addEventListener("click",w),R.appendChild(b)}if(x){let b=document.createElement("div");b.className="admin-empty__extra",typeof x=="string"?b.innerHTML=x:b.appendChild(x),R.appendChild(b)}return R}function f(C){let j=k[C];if(!j)return g({title:ServerI18n.t("emptyNoData"),desc:""});let F=Object.assign({},j,{title:j.titleKey?ServerI18n.t(j.titleKey):j.title,desc:j.descKey?ServerI18n.t(j.descKey):j.desc,actionLabel:j.actionLabelKey?ServerI18n.t(j.actionLabelKey):j.actionLabel});return g(F)}window.AdminEmpty={render:f,renderCustom:g,PRESETS:k}})()});var ze=ye(()=>{(function(){"use strict";var y=8;function k(F){return F?String(F).slice(0,y):""}function g(F){if(!F||typeof F!="object")return{nickname:"",fp:"",ip:""};var $=F.fingerprint||F.fp||F.hash||"",p=F.clientIp||F.client_ip||F.ip||"",N=F.nickname||F.nick||"";return{nickname:String(N||""),fp:String($||""),ip:String(p||"")}}function f(F){if(!F||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var $=new TextEncoder().encode(String(F));return window.crypto.subtle.digest("SHA-256",$).then(function(p){var N=Array.from(new Uint8Array(p));return N.map(function(D){return D.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function C(F){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var $=document.getElementById("sec-fingerprints");if($&&!$.open&&($.open=!0),$)try{$.scrollIntoView({behavior:"smooth",block:"start"})}catch{}f(F).then(function(p){if(p)var N=0,D=setInterval(function(){N+=1;var w=document.querySelector('[data-fp-hash="'+p+'"]');if(w){clearInterval(D),w.classList.add("admin-identity-flash"),setTimeout(function(){w.classList.remove("admin-identity-flash")},2e3);try{w.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else N>12&&clearInterval(D)},250)})}function j(F){F=F||{};var $=F.nickname||"",p=F.fp||"",N=F.ip||"",D=!!F.compact,w=typeof F.onNicknameClick=="function"?F.onNicknameClick:null,x=typeof F.onFpClick=="function"?F.onFpClick:C,R=document.createElement("span");R.className="admin-identity-row";var S;if(w?(S=document.createElement("button"),S.type="button",S.className="admin-identity-nick is-clickable",S.addEventListener("click",function(h){h.stopPropagation(),w($)})):(S=document.createElement("span"),S.className="admin-identity-nick"),$)S.textContent="@"+$;else{var b="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var I=ServerI18n.t("anonymousPlaceholder");I&&I!=="anonymousPlaceholder"&&(b=I)}}catch{}S.textContent="@"+b,S.classList.add("is-guest")}if($&&(S.title=$),R.appendChild(S),p){var O;if(x?(O=document.createElement("button"),O.type="button",O.className="admin-identity-fp is-clickable",O.addEventListener("click",function(h){h.stopPropagation(),x(p)})):(O=document.createElement("span"),O.className="admin-identity-fp"),p==="new"){var A=document.createElement("span");A.className="admin-identity-dot",O.appendChild(A),O.appendChild(document.createTextNode("fp:new"))}else O.textContent="fp:"+k(p);O.title=p,R.appendChild(O)}if(N&&!D){var B=document.createElement("span");B.className="admin-identity-ip",B.textContent=N,B.title=N,R.appendChild(B)}return R}window.AdminIdentity={render:j,parse:g,focusFingerprint:C,hashFp:f,FP_DISPLAY_LEN:y}})()});var Ve=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function k(d,e){return window.csrfFetch(d,e)}function g(d,e){return window.showToast(d,e)}let f="default",C=[],j={};function F(){let d=document.getElementById("themesList");d&&window.AdminSkeletons&&(d.innerHTML="",d.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function $(){F();try{let d=await k("/admin/themes");if(!d.ok)return;let e=await d.json();f=e.active||"default",C=e.themes||[],j=e.overrides||{},R(C,f),I()}catch(d){console.warn("[Themes] Failed to fetch themes:",d)}}var p="\u5C0F\u660E",N="\u8B1B\u5F97\u597D\uFF01+1";function D(d,e){var i=String(d||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(i)?i:e}function w(d){var e=d.styles||{},i=["color:"+D(e.color,"#ffffff")];if(e.textStroke){var o=Math.max(0,Math.min(6,Number(e.strokeWidth)||0));i.push("-webkit-text-stroke:"+o+"px "+D(e.strokeColor,"#000000")),i.push("paint-order:stroke fill")}if(e.textShadow){var n=Math.max(0,Math.min(40,Number(e.shadowBlur)||0));i.push("text-shadow:0 0 "+n+"px "+D(e.color,"#ffffff"))}var l=d.font&&d.font.family;return l&&/^[\w\s-]{1,40}$/.test(l)&&i.push("font-family:'"+l+"', var(--font-sans)"),d.font&&Number(d.font.weight)&&i.push("font-weight:"+Math.max(100,Math.min(900,Number(d.font.weight)))),i.join(";")}function x(d){var e=d.bg&&d.bg.gradient;return e&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(e).trim())?"background:"+String(e).trim():""}function R(d,e){let i=document.getElementById("themesList");if(i){if(i.innerHTML="",d.length===0){i.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}d.forEach(o=>{let n=o.name===e,l=y(ServerI18n.t("theme_"+o.name)!=="theme_"+o.name?ServerI18n.t("theme_"+o.name):o.label||o.name),m=document.createElement("div");m.className=`theme-pack-card${n?" is-active":""}`,m.innerHTML=`
        <div class="theme-pack-name">${l}</div>
        <div class="theme-pack-sample" style="${y(x(o))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${y(w(o))}">
            <span class="theme-pack-sample-nick">${y(p)}</span>
            ${y(N)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${o.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${y(o.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${n?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${y(o.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,i.appendChild(m)}),i.querySelectorAll(".theme-delete-btn").forEach(o=>{o.addEventListener("click",async()=>{let n=o.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let m=await k("/admin/themes/"+encodeURIComponent(n),{method:"DELETE"});if(!m.ok)throw new Error("HTTP "+m.status);g(ServerI18n.t("themeDeleted"),!0),$()}catch{g(ServerI18n.t("themesDeleteFailed"),!1)}})}),i.querySelectorAll(".theme-activate-btn").forEach(o=>{o.addEventListener("click",async()=>{let n=o.dataset.theme;try{let l=await k("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n})});if(l.ok)g(ServerI18n.t("themeActivated"),!0),f=n,R(d,n),I();else{let m=await l.json().catch(()=>({}));g(m.error||ServerI18n.t("setThemeFailed"),!1)}}catch{g(ServerI18n.t("setThemeFailed"),!1)}})})}}function S(){return C.find(d=>d.name===f)||null}function b(d,e){let i=j[f]||{};if(i[d])return i[d];let o=e&&e.styles||{};return d==="stroke"?o.textStroke?Number(o.strokeWidth)>=3?"thick":"thin":"none":o.textShadow?Number(o.shadowBlur)>=10?"strong":"soft":"none"}function I(){let d=document.getElementById("themeDetail"),e=document.getElementById("themeDetailLabel");if(!d||!e)return;let i=S();if(!i)return;let o=ServerI18n.t("theme_"+i.name)!=="theme_"+i.name?ServerI18n.t("theme_"+i.name):i.label||i.name;e.textContent=ServerI18n.t("themeDetailGroup",{name:o}),["stroke","shadow"].forEach(l=>{let m=b(l,i);d.querySelectorAll(`[data-theme-seg="${l}"] [data-theme-opt]`).forEach(a=>{let s=a.getAttribute("data-theme-opt")===m;a.classList.toggle("is-active",s),a.setAttribute("aria-pressed",s?"true":"false")})});let n=d.querySelector('[data-theme-ov="color"]');if(n){let l=D((i.styles||{}).color,"#ffffff");n.value=/^#[0-9a-fA-F]{6}$/.test(l)?l:"#ffffff"}A(i),B(i)}var O=null;async function A(d){let e=document.getElementById("themeOvFont");if(!e)return;if(!O)try{let n=await fetch("/fonts",{credentials:"same-origin"});O=n.ok?(await n.json()).fonts||[]:[]}catch{O=[]}let o=(j[f]||{}).font_family||"";e.innerHTML=`<option value="">${y(ServerI18n.t("themeDetailFontInherit"))}</option>`+O.map(n=>{let l=String(n.name||n);return`<option value="${y(l)}"${l===o?" selected":""}>${y(l)}</option>`}).join("")}function B(d){let e=document.querySelector("[data-theme-preview-line]");e&&e.setAttribute("style",w(d))}async function h(d){try{let e=await k("/admin/themes/"+encodeURIComponent(f)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});if(!e.ok)throw new Error("HTTP "+e.status);g(ServerI18n.t("themeDetailSaved"),!0),await $()}catch{g(ServerI18n.t("themeDetailSaveFailed"),!1)}}function c(){let d=document.getElementById("themeDetail");d&&(d.addEventListener("click",e=>{let i=e.target.closest("[data-theme-opt]");if(!i)return;let o=i.closest("[data-theme-seg]");o&&h({[o.getAttribute("data-theme-seg")]:i.getAttribute("data-theme-opt")})}),d.addEventListener("change",e=>{let i=e.target.closest("[data-theme-ov]");i&&h({[i.getAttribute("data-theme-ov")]:i.value})}))}function r(){let d=document.getElementById("themeNewBtn");d&&d.addEventListener("click",async()=>{let e=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!e||!e.trim()))try{let i=await k("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:e.trim(),base:f})});if(!i.ok)throw new Error("HTTP "+i.status);g(ServerI18n.t("themeCreated"),!0),$()}catch{g(ServerI18n.t("themesNewFailed"),!1)}})}function t(){$(),c(),r();let d=document.getElementById("themeReloadBtn");d&&d.addEventListener("click",async()=>{try{(await k("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(g(ServerI18n.t("themesReloaded")),$()):g(ServerI18n.t("themesReloadFailed"),!1)}catch{g(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:t}})()});var Je=ye(()=>{(function(){"use strict";function y(L,M){return window.csrfFetch(L,M)}function k(L,M){return window.showToast(L,M)}var g=window.ServerI18n;function f(L,M){return window.AdminUtils.styleTag(L,M)}let C=null;function j(){let L=document.getElementById("effectEditModal");return L?Array.from(L.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(M=>!M.hasAttribute("disabled")&&M.getAttribute("aria-hidden")!=="true"):[]}function F(L){let M=document.getElementById("effectEditModal");if(!M||M.classList.contains("hidden"))return;if(L.key==="Escape"){L.preventDefault(),$();return}if(L.key!=="Tab")return;let P=j();if(P.length===0){L.preventDefault();return}let W=P[0],T=P[P.length-1],q=document.activeElement;L.shiftKey&&q===W?(L.preventDefault(),T.focus()):!L.shiftKey&&q===T&&(L.preventDefault(),W.focus())}function $(){let L=document.getElementById("effectEditModal");L&&(L.classList.add("hidden"),L.classList.remove("flex"),L.removeEventListener("keydown",F),C&&(C.focus(),C=null))}let p={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(L){return!!p[L]}};let N=new Map,D=new Map;function w(L){if(!L||!L.styleId||!L.keyframes)return;let M="dme-user-"+L.styleId;if(document.getElementById(M))return;let P=document.createElement("style");P.id=M,P.textContent=L.keyframes,document.head.appendChild(P)}async function x(L){if(N.has(L))return N.get(L);if(D.has(L))return D.get(L);let M=(async()=>{try{let P=await y(`/admin/effects/${encodeURIComponent(L)}/content`);if(!P.ok)throw new Error("content fetch failed");let W=await P.json(),T=W&&W.content||"";if(!T)throw new Error("empty content");let q=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:T,params:{}})});if(!q.ok)throw new Error("preview failed");let U=await q.json();if(!U||!U.animation)throw new Error("no animation");return w(U),N.set(L,U),U}catch{return N.set(L,"failed"),null}finally{D.delete(L)}})();return D.set(L,M),M}function R(L,M){let P=L.querySelector(".effect-demo-text");if(!P)return;P.style.animation=M.animation||"",M.animationComposition&&(P.style.animationComposition=M.animationComposition),P.style.animationPlayState="paused";let W=b();W&&W.observe(L)}let S=null;function b(){return S||(typeof IntersectionObserver>"u"?null:(S=new IntersectionObserver(L=>{L.forEach(M=>{let P=M.target.querySelector(".effect-demo-text");P&&(P.style.animationPlayState=M.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),S))}let I=null;function O(L){let M=document.getElementById("effectPreviewParams");if(!M)return{};let P;try{let T=L.split(`
`),q=!1,U=0,J=null,K=0,G={};for(let te of T){let ne=te.trimStart(),z=te.length-ne.length;if(ne.startsWith("params:")){q=!0,U=z;continue}if(!q||ne===""||ne.startsWith("#"))continue;if(z<=U&&!ne.startsWith("params:")){q=!1;continue}let Q=ne.match(/^([a-zA-Z0-9_]+):\s*$/);if(Q&&z===U+2){J=Q[1],K=z,G[J]={};continue}if(J&&z>K){let Z=ne.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(Z){let se=Z[1],ie=Z[2].trim();if((ie.startsWith('"')&&ie.endsWith('"')||ie.startsWith("'")&&ie.endsWith("'"))&&(ie=ie.slice(1,-1)),se!=="options"){let de=Number(ie);G[J][se]=isNaN(de)?ie:de}}if(ne.startsWith("- value:")){G[J].options||(G[J].options=[]);let se=ne.match(/^- value:\s*(.+)$/);if(se){let ie=se[1].trim();(ie.startsWith('"')&&ie.endsWith('"')||ie.startsWith("'")&&ie.endsWith("'"))&&(ie=ie.slice(1,-1)),G[J].options.push({value:ie,label:ie})}}if(ne.startsWith("label:")&&G[J].options&&G[J].options.length>0){let se=ne.match(/^label:\s*(.+)$/);if(se){let ie=se[1].trim();(ie.startsWith('"')&&ie.endsWith('"')||ie.startsWith("'")&&ie.endsWith("'"))&&(ie=ie.slice(1,-1)),G[J].options[G[J].options.length-1].label=ie}}}}P=G}catch{P={}}M.innerHTML="";let W={};for(let[T,q]of Object.entries(P||{})){let U=q.type||"float",J=document.createElement("div");J.className="flex flex-col gap-0.5";let K=document.createElement("label");if(K.className="font-mono",K.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",K.textContent=`${T} (${U})`,J.appendChild(K),U==="select"&&Array.isArray(q.options)){let G=document.createElement("select");G.className="admin-ui-select",G.style.cssText="font-size:13px;padding:4px 8px",G.dataset.paramKey=T;for(let te of q.options){let ne=document.createElement("option");ne.value=te.value,ne.textContent=te.label||te.value,te.value===String(q.default)&&(ne.selected=!0),G.appendChild(ne)}W[T]=String(q.default||q.options[0]&&q.options[0].value||""),G.addEventListener("change",()=>{h()}),J.appendChild(G)}else{let G=q.min!=null?q.min:0,te=q.max!=null?q.max:10,ne=q.step!=null?q.step:U==="int"?1:.1,z=q.default!=null?q.default:G,Q=document.createElement("div");Q.className="flex items-center gap-2";let Z=document.createElement("input");Z.type="range",Z.min=G,Z.max=te,Z.step=ne,Z.value=z,Z.dataset.paramKey=T,Z.className="flex-1",Z.style.accentColor="var(--color-primary)";let se=document.createElement("span");se.className="font-mono",se.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",se.textContent=String(z),Z.addEventListener("input",()=>{se.textContent=Z.value,h()}),Q.appendChild(Z),Q.appendChild(se),J.appendChild(Q),W[T]=z}M.appendChild(J)}return W}function A(){let L=document.getElementById("effectPreviewParams");if(!L)return{};let M={};return L.querySelectorAll("[data-param-key]").forEach(P=>{M[P.dataset.paramKey]=P.type==="range"?Number(P.value):P.value}),M}async function B(){let L=document.getElementById("effectEditModalTextarea"),M=document.getElementById("effectPreviewText"),P=document.getElementById("effectPreviewStyle"),W=document.getElementById("effectPreviewError");if(!L||!M||!P)return;let T=L.value;if(!T||T===g.t("effectLoadContent")||T===g.t("effectsNetworkError"))return;let q=A();W?.classList.add("hidden");try{let U=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:T,params:q})}),J=await U.json().catch(()=>({}));U.ok?(P.textContent=J.keyframes||"",M.style.animation=J.animation||"none",M.style.animationComposition=J.animationComposition||""):(M.style.animation="none",P.textContent="",W&&(W.textContent=J.error||g.t("previewFailed"),W.classList.remove("hidden")))}catch{M.style.animation="none",P.textContent="",W&&(W.textContent=g.t("effectsNetworkError"),W.classList.remove("hidden"))}}function h(){clearTimeout(I),I=setTimeout(()=>B(),500)}async function c(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
      `),document.getElementById("effectEditModalClose").addEventListener("click",$),document.getElementById("effectEditModalCancel").addEventListener("click",$),document.getElementById("effectEditModal").addEventListener("click",T=>{T.target===T.currentTarget&&$()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let T=document.getElementById("effectEditModalTextarea");T&&(O(T.value),h())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{B()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let T=document.getElementById("effectEditModal"),q=document.getElementById("effectEditModalTextarea"),U=document.getElementById("effectEditModalSave"),J=T?.dataset.effectName;if(!(!J||!q)){U.disabled=!0;try{let K=await y("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:J,content:q.value})}),G=await K.json().catch(()=>({}));K.ok?(k(G.message||g.t("effectSaveFallback"),!0),$(),await d()):k(G.error||g.t("saveFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}finally{U.disabled=!1}}})),await d(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let T=document.getElementById("effectReloadBtn");T&&(T.disabled=!0);try{let q=await y("/admin/effects/reload",{method:"POST"}),U=await q.json().catch(()=>({}));q.ok?(k(U.message||g.t("effectsReloadFallback")),await d()):k(U.error||g.t("reloadFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}finally{T&&(T.disabled=!1)}});async function L(T){if(!T)return;let q=new FormData;q.append("effectfile",T);try{let U=await y("/admin/effects/upload",{method:"POST",body:q}),J=await U.json().catch(()=>({}));U.ok?(k(J.message||g.t("effectUploadFallback")),await d()):k(J.error||g.t("uploadFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}}let M=document.getElementById("effectUploadInput"),P=M&&!M.dataset.uploadWired;P&&(M.dataset.uploadWired="1"),(P?M:null)?.addEventListener("change",async T=>{await L(T.target.files?.[0]),T.target.value=""});let W=document.getElementById("sec-effects-mgmt");if(W){let T=0,q=G=>{G.preventDefault(),T++,W.classList.add("is-drag")},U=G=>{G.preventDefault()},J=G=>{G.preventDefault(),T=Math.max(0,T-1),T===0&&W.classList.remove("is-drag")},K=async G=>{G.preventDefault(),T=0,W.classList.remove("is-drag");let te=G.dataTransfer?.files?.[0];if(te){if(!/\.(dme|dme\.zip)$/i.test(te.name)){k(g.t("fxToastBadExt"),!1);return}await L(te)}};W.addEventListener("dragenter",q),W.addEventListener("dragover",U),W.addEventListener("dragleave",J),W.addEventListener("drop",K)}}function r(L){let M=(L||"").toLowerCase();return M.startsWith("glow")||M.includes("neon")?"GLOW":M.startsWith("shake")?"SHAKE":M.startsWith("wave")||M.startsWith("spin")||M.startsWith("bounce")||M.startsWith("zoom")||M.startsWith("fire")||M.includes("motion")?"MOTION":M.startsWith("rainbow")||M.startsWith("blink")||M.includes("color")?"COLOR":M.startsWith("type")||M.includes("text")?"TEXT":"MISC"}let t={all:[],filter:"ALL",selected:null};async function d(){let L=document.getElementById("effectsList");if(L)try{let M=await y("/admin/effects");if(!M.ok){L.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsLoadFailed")+"</span>";return}let P=await M.json();t.all=P.effects||[],e(),o()}catch{L.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsNetworkError")+"</span>"}}function e(){let L=document.getElementById("effectsFilterRow");if(!L)return;let M={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};t.all.forEach(U=>{M[r(U.name)]+=1});let P=t.all.length,W=[["ALL",g.t("fxChipAll"),P],["GLOW",g.t("fxCatGlow"),M.GLOW],["MOTION",g.t("fxCatMotion"),M.MOTION],["COLOR",g.t("fxCatColor"),M.COLOR],["SHAKE",g.t("fxCatShake"),M.SHAKE],["TEXT",g.t("fxCatText"),M.TEXT]];M.MISC>0&&W.push(["MISC",g.t("fxCatMisc"),M.MISC]);let T=W.map(([U,J,K])=>`<span class="hud-filter-chip ${t.filter===U?"is-active":""}" data-effect-filter="${U}">${J} ${K}</span>`).join(""),q=L.querySelector("[data-toolbar-spacer]");q?(L.querySelectorAll("[data-effect-filter]").forEach(U=>U.remove()),q.insertAdjacentHTML("beforebegin",T)):L.innerHTML=T,L.querySelectorAll("[data-effect-filter]").forEach(U=>{U.addEventListener("click",()=>{t.filter=U.dataset.effectFilter,e(),o()})})}function i(L){let M=(U,J)=>{let K=document.querySelector(U);K&&(K.textContent=J==null?"\u2014":String(J))},P=L.length,W=L.filter(U=>U.enabled!==!1).length,T=new Set(L.map(U=>r(U.name))),q=L.filter(U=>!p[U.name]).length;M("[data-eflib-total]",P),M("[data-eflib-active]",W),M("[data-eflib-cats]",T.size),M("[data-eflib-user]",q)}function o(){let L=document.getElementById("effectsList");if(!L)return;let M=t.all;i(M);let P=t.filter==="ALL"?M:M.filter(W=>r(W.name)===t.filter);if(!P.length){L.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(M.length?g.t("fxNoFilterMatch"):g.t("noEffectsLoaded"))+"</span>";return}S&&S.disconnect(),L.innerHTML="",P.forEach(W=>{let T=r(W.name),q=T==="GLOW"?"is-glow":T==="COLOR"?"is-color":T==="TEXT"?"is-text":"",U=p[W.name]||"",J=!!U,K=document.createElement("div");K.className="hud-effect-card"+(t.selected===W.name?" is-selected":""),K.dataset.effectName=W.name,K.title=[W.description,`file: ${W.filename}`].filter(Boolean).join(`
`);var G="effect_"+W.name;let te=g.t(G)!==G?g.t(G):W.label||W.name,ne=J?"built-in":"user",z=U?`animation:${U};animation-play-state:paused;`:"";if(K.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${n(g.t("fxCat"+T.charAt(0)+T.slice(1).toLowerCase())||T)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${q}"><span class="effect-demo-text" style="${z}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${n(te)}</div>
          <div class="hud-effect-card-meta">${n(ne)} \xB7 ${n(W.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${g.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${g.t("lbDelete")}</button>
        </div>
      `,L.appendChild(K),U){let se=b();se&&se.observe(K)}else{let se=N.get(W.name);se&&se!=="failed"?(w(se),R(K,se)):se!=="failed"&&x(W.name).then(ie=>{if(!ie)return;let de=L.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(W.name)}"]`);de&&R(de,ie)})}K.addEventListener("click",se=>{se.target.closest("[data-role]")||v(W)});let Q=K.querySelector('[data-role="edit"]'),Z=K.querySelector('[data-role="delete"]');Q.addEventListener("click",async()=>{let se=document.getElementById("effectEditModal"),ie=document.getElementById("effectEditModalTitle"),de=document.getElementById("effectEditModalFile"),ce=document.getElementById("effectEditModalTextarea"),ke=document.getElementById("effectEditModalSave");if(!se)return;C=document.activeElement instanceof HTMLElement?document.activeElement:null,ie.textContent=W.label||W.name,de.textContent=W.filename,ce.value=g.t("effectLoadContent"),ce.disabled=!0,ke.disabled=!0,se.dataset.effectName=W.name,se.classList.remove("hidden"),se.classList.add("flex"),se.addEventListener("keydown",F),ce.focus();let Ee=document.getElementById("effectPreviewText"),ee=document.getElementById("effectPreviewStyle"),ae=document.getElementById("effectPreviewError"),oe=document.getElementById("effectPreviewParams");Ee&&(Ee.style.animation="none"),ee&&(ee.textContent=""),ae&&ae.classList.add("hidden"),oe&&(oe.innerHTML="");try{let me=await y(`/admin/effects/${encodeURIComponent(W.name)}/content`),re=await me.json().catch(()=>({}));me.ok?(ce.value=re.content||"",ce.disabled=!1,ke.disabled=!1,ce.focus(),O(ce.value),B()):(ce.value=re.error||g.t("effectLoadContentFailed"),k(re.error||g.t("effectLoadContentFailed"),!1))}catch{ce.value=g.t("effectsNetworkError"),k(g.t("effectsNetworkError"),!1)}}),Z.addEventListener("click",async()=>{let se=W.label||W.name;if(await window.HudConfirm?.open({icon:"\u2297",title:g.t("fxDeleteTitle"),subtitle:g.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${g.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${se}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${g.t("fxDeleteWarn")}
                </div>`,confirmLabel:g.t("fxDeleteConfirm"),cancelLabel:g.t("cancel"),width:400}))try{let de=await y("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:W.name})}),ce=await de.json().catch(()=>({}));de.ok?(k(ce.message||g.t("effectDeleteFallback"),!0),await d()):k(ce.error||g.t("deleteFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}})})}function n(L){return String(L??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(L){let M={name:"",label:"",description:"",params:[]};if(!L)return M;let P=L.split(`
`),W="top",T=null;for(let q of P){let U=q.replace(/\r$/,""),J=U.trimStart();if(!J||J.startsWith("#"))continue;let K=U.length-J.length;if(K===0){if(W="top",T&&(M.params.push(T),T=null),J==="params:"){W="params";continue}let G=J.match(/^([a-z_]+):\s*(.+)$/);G&&(G[1]==="name"?M.name=G[2].trim():G[1]==="label"?M.label=G[2].trim():G[1]==="description"&&(M.description=G[2].trim()));continue}if(!(W!=="params"&&W!=="param-fields"&&W!=="options")){if(K===2&&(W==="params"||W==="param-fields"||W==="options")){T&&(M.params.push(T),T=null);let G=J.match(/^(\w+):$/);G&&(T={key:G[1]},W="param-fields");continue}if(K===4&&W==="param-fields"&&T){let G=J.match(/^(\w+):\s*(.*)$/);if(G){let te=G[1],ne=G[2].trim();te==="label"?T.label=ne:te==="type"?T.type=ne:te==="default"?T.default=ne:te==="min"?T.min=parseFloat(ne):te==="max"?T.max=parseFloat(ne):te==="step"?T.step=parseFloat(ne):te==="options"&&(T.options=[],W="options")}continue}if(W==="options"&&T&&K>=6){let G=J.match(/^-\s*value:\s*(.+)$/);G&&(T.options||(T.options=[]),T.options.push({value:G[1].trim(),label:G[1].trim()}));let te=J.match(/^label:\s*(.+)$/);te&&T.options&&T.options.length>0&&(T.options[T.options.length-1].label=te[1].trim())}}}return T&&M.params.push(T),M}function m(L,M){let P=L.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),W=P?P[1]:"",T=L.match(/^animation:\s*["']?(.+?)["']?\s*$/m),q=T?T[1].trim():"";for(let U of M.params){let J=U.default!==void 0?U.default:"",K=new RegExp(`\\{${U.key}\\}`,"g");W=W.replace(K,J),q=q.replace(K,J)}return{keyframes:W,animation:q}}function a(L,M){if(L==="COLOR"){let P=M.find(W=>W.key==="duration");if(P&&P.default){let W=parseFloat(P.default);if(W<.25)return"crimson";if(W<.33)return"amber"}}if(L==="MOTION"){let P=M.find(W=>W.key==="height");if(P&&P.default){let W=parseFloat(P.default);if(W>30)return"crimson";if(W>24)return"amber"}}return"lime"}function s(L,M){return L==="COLOR"?M==="crimson"?g.t("fxHintFlashBlock"):M==="amber"?g.t("fxHintFlashWarn"):g.t("fxHintFlashOk"):M==="crimson"?g.t("fxHintAmpBlock"):M==="amber"?g.t("fxHintAmpWarn"):g.t("fxHintAmpOk")}function u(L,M){let P=l(M),{keyframes:W,animation:T}=m(M,P),q=r(L.name),U=P.params.filter(ce=>ce.type!=="select"),J=P.params.filter(ce=>ce.type==="select"),K=a(q,P.params),G=K==="crimson"?"BLOCK":K==="amber"?"WARN":"OK",te=s(q,K),ne="fx-anim-"+L.name.replace(/[^a-z0-9]/gi,"-"),z=W&&T?f(ne,W):"",Q=T?`animation:${T};animation-play-state:running;`:"",Z=U.map(ce=>{let ke=parseFloat(ce.default)||0,Ee=ce.min??0,ee=ce.max??100,ae=Math.max(0,Math.min(100,(ke-Ee)/(ee-Ee)*100)),oe=(ce.label||"").match(/\(([^)]+)\)$/),me=oe?oe[1]:"",re=ce.label||ce.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${n(re)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${ke}<span style="color:var(--color-text-muted);margin-left:2px">${n(me)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${ae}%"></div>
          <div class="fx-slider-knob" style="left:${ae}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${Ee}${n(me)}</span><span>${ee}${n(me)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${g.t("fxNoNumericParams")}</span>`,se=J.map(ce=>{let ke=ce.options||[],Ee=String(ce.default||""),ee=ke.map(ae=>`<span class="fx-radio-btn${ae.value===Ee||ae.label===Ee?" is-active":""}">${n(ae.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${n(ce.label||ce.key)}</div>
        <div class="fx-radio-group">${ee||"<span>\u2014</span>"}</div>
      </div>`}).join(""),ie=["dark","light","photo"].map(ce=>{let ke=ce==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${ce}">
        <span class="fx-preview-bg-label">${ce.toUpperCase()}</span>
        <span class="fx-preview-text" style="${Q}color:${ke}">ABC</span>
      </div>`}).join(""),de=`${z}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${g.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${Z}</div>
      </div>`;return se&&(de+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${g.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${se}</div>
      </div>`),de+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${g.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${ie}</div>
      </div>
      <div class="fx-warn-box${K!=="lime"?" is-"+K:""}">
        <span class="fx-warn-chip${K!=="lime"?" is-"+K:""}">${G}</span>
        <span class="fx-warn-text">${n(te)}</span>
      </div>
    </div>`,de}async function v(L){t.selected=L.name;let M=document.getElementById("effectsInspector"),P=document.getElementById("effectsInspectorTitle"),W=document.getElementById("effectsInspectorKicker"),T=document.getElementById("effectsInspectorBody");if(M){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),P&&(P.textContent=L.label||L.name),W&&(W.textContent="LOADING"),T&&(T.className="hud-inspector-body",T.textContent="# "+g.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(q=>{q.classList.toggle("is-selected",q.dataset.effectName===L.name)});try{let q=await y(`/admin/effects/${encodeURIComponent(L.name)}/content`),U=await q.json().catch(()=>({}));if(q.ok){let J=U.content||"";T&&(T.className="hud-inspector-body has-param-panel",T.innerHTML=u(L,J)),W&&(W.textContent=r(L.name))}else T&&(T.className="hud-inspector-body",T.textContent="# "+(U.error||g.t("effectLoadContentFailed"))),W&&(W.textContent="ERROR")}catch{T&&(T.className="hud-inspector-body",T.textContent="# "+g.t("effectsNetworkError")),W&&(W.textContent="NETWORK")}}}function E(){let L=document.getElementById("effectsInspectorReload"),M=document.getElementById("effectsInspectorEdit");L?.addEventListener("click",async()=>{if(!t.selected){k(g.t("fxSelectFirst"),!1);return}let P=t.all.find(W=>W.name===t.selected);P&&await v(P)}),M?.addEventListener("click",()=>{if(!t.selected){k(g.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(t.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",E())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:c}})()});var Ye=ye(()=>{(function(){"use strict";var y={};window.DanmuEvents={on:function(k,g){y[k]||(y[k]=[]),y[k].push(g)},off:function(k,g){y[k]=(y[k]||[]).filter(function(f){return f!==g})},emit:function(k,g){(y[k]||[]).forEach(function(f){f(g)})}}})()});var Qe=ye(()=>{(function(){"use strict";let y="sec-events",k="/admin/audit?limit=200",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(A){return String(A).replace(/[&<>"']/g,function(B){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[B]})},C={events:[],filterSev:"all",filterCat:"all",timer:0};function j(A){let B=(A.source||A.kind||"").toLowerCase(),h=(A.action||"").toLowerCase();return B.includes("plugin")||h.includes("plugin")?"plugin":B.includes("webhook")||h.includes("webhook")?"webhook":B.includes("rate")||h.includes("rate")||h.includes("limit")?"rate":B.includes("filter")||h.includes("filter")?"filter":B.includes("overlay")||h.includes("overlay")||B==="broadcast"?"overlay":B.includes("backup")||h.includes("backup")?"backup":B.includes("msg")||B==="messaging"?"msg":B.includes("ws")||B==="websocket"?"ws":"system"}let F=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,$=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function p(A){let B=(A.action||A.kind||"").toLowerCase();return A.severity?A.severity:F.test(B)?"error":$.test(B)?"warn":"info"}function N(A){let B=A.source||"system",h=A.action||A.kind||"";return h?`${B.toUpperCase()}_${h.toUpperCase()}`:B.toUpperCase()}function D(A){if(!A)return"\u2014";let B=new Date(A*1e3),h=c=>String(c).padStart(2,"0");return`${h(B.getHours())}:${h(B.getMinutes())}:${h(B.getSeconds())}`}function w(A){if(A.message)return A.message;let B=A.meta||{},h=[];if(B.from&&B.to)h.push(`${B.from} \u2192 ${B.to}`);else if(B.text_preview)h.push(`"${B.text_preview.slice(0,60)}"`);else if(Object.keys(B).length){let c=Object.keys(B).slice(0,3);for(let r of c)h.push(`${r}=${JSON.stringify(B[r]).slice(0,30)}`)}return h.length?h.join(" \xB7 "):`${A.source||"system"}.${A.action||A.kind||"?"}`}function x(){return`
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
      </div>`}function R(){let A=document.querySelector("[data-ev-rows]");if(!A)return;let B=C.events,h=B.filter(t=>!(C.filterSev!=="all"&&p(t)!==C.filterSev||C.filterCat!=="all"&&j(t)!==C.filterCat));h.length===0?(A.innerHTML="",window.AdminEmpty?A.appendChild(window.AdminEmpty.render("events")):A.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):A.innerHTML=h.map(t=>{let d=p(t);return`
          <div class="admin-ev-v4__row" data-sev="${d}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${f(D(t.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${d}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${d}">${f(N(t))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${f(t.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${f(w(t))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let c={all:B.length,info:0,warn:0,error:0};for(let t of B)c[p(t)]+=1;Object.keys(c).forEach(t=>{let d=document.querySelector(`[data-ev-cnt="${t}"]`);d&&(d.textContent=String(c[t]))});let r=document.querySelector("[data-ev-total]");r&&(r.textContent=`${h.length} / ${B.length}`)}async function S(){try{let A=await fetch(k,{credentials:"same-origin"});if(!A.ok)return;let B=await A.json();C.events=Array.isArray(B.events)?B.events:[],R()}catch{}}function b(){let A=document.getElementById(y);A&&A.addEventListener("click",B=>{let h=B.target.closest("[data-ev-sev]");if(h){A.querySelectorAll("[data-ev-sev]").forEach(t=>t.classList.toggle("is-active",t===h)),C.filterSev=h.dataset.evSev,R();return}let c=B.target.closest("[data-ev-cat]");if(c){A.querySelectorAll("[data-ev-cat]").forEach(t=>t.classList.toggle("is-active",t===c)),C.filterCat=c.dataset.evCat,R();return}let r=B.target.closest("[data-ev-action]");if(r){if(r.dataset.evAction==="refresh")S();else if(r.dataset.evAction==="export"){let t=new Blob([JSON.stringify(C.events,null,2)],{type:"application/json"}),d=URL.createObjectURL(t),e=document.createElement("a");e.href=d,e.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(e),e.click(),e.remove(),URL.revokeObjectURL(d),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function I(){let A=document.querySelector(".admin-dash-grid"),B=document.getElementById(y);if(!B)return;let c=(A?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";B.style.display=c?"":"none",c?(S(),C.timer||(C.timer=setInterval(S,15e3))):C.timer&&(clearInterval(C.timer),C.timer=0)}function O(){let A=document.getElementById("settings-grid");!A||document.getElementById(y)||(A.insertAdjacentHTML("beforeend",x()),b(),I())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&O(),I()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",I),document.addEventListener("admin-panel-rendered",()=>{O(),I()}),O()})})()});var Xe=ye(()=>{(function(){"use strict";let y="sec-modqueue",k="/admin/modqueue/list",C=window.AdminUtils&&window.AdminUtils.escapeHtml||function(h){return String(h).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})},j={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},F={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},$={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function p(h){let c=0,r=String(h||"");for(let t=0;t<r.length;t++)c=c*31+r.charCodeAt(t)&65535;return c%360}function N(h){if(!h.created_at_ms)return null;let c=(Date.now()-h.created_at_ms)/1e3,r=Math.max(0,j.autoRejectSec-c);return Math.ceil(r)}function D(h,c){let r=(h.severity||"low").toLowerCase(),t=F[r]||F.low,d=p(h.fp),e=String(h.fp||"\u2014").slice(0,8),i=h.nick||h.nickname||ServerI18n.t("audienceAnonymous"),o=(i||"?").slice(0,2).toUpperCase(),n=c==="pending"?N(h):null,l=c==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${C(h.id||"")}">${C(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${C(h.id||"")}">${C(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${C(h.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",m=c==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${C(ServerI18n.t("modqueueStampApproved"))} \xB7 ${C(h.resolved_by||"admin")} \xB7 ${C(h.resolved_ago||"")}
        </div>`:c==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${h.auto_rejected?`${C(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${C(ServerI18n.t("modqueueAutoRejectTimeout",{n:j.autoRejectSec}))}`:`${C(ServerI18n.t("modqueueStampRejected"))} \xB7 ${C(h.resolved_by||"admin")} \xB7 ${C(h.resolved_ago||"")}`}
        </div>`:"",a=c==="pending"&&n!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${n}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${C(h.id||"")}" data-mq-sev="${C(r)}" style="--mq-sev:${t}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${d})">${C(o)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${C(i)}</div>
            <div class="admin-mq-card__fp">fp:${C(e)}</div>
          </div>
          <div class="admin-mq-card__time">${C(h.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${C(h.content||h.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${t}">${C(ServerI18n.t($[r]||$.low))}</span>
          <span class="admin-mq-card__rule">${C(ServerI18n.t("modqueueRuleLabel"))}: ${C(h.rule||h.matched_rule||"?")}</span>
          ${a}
        </div>
        ${l}
        ${m}
      </div>`}function w(h,c,r){h&&(h.innerHTML=c.map(t=>D(t,r)).join(""))}function x(){let h=document.getElementById(y);if(!h)return;h.querySelectorAll("[data-mq-bulk]").forEach(r=>{r.disabled=!0}),h.querySelector(".admin-mq__body").hidden=!0;let c=h.querySelector("[data-mq-empty]");c&&window.AdminEmpty&&(c.hidden=!1,c.innerHTML="",c.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function R(){let h=document.getElementById(y);if(!h)return;if(j.pending.length+j.approved.length+j.rejected.length===0){x();return}h.querySelector(".admin-mq__body").hidden=!1;let r=h.querySelector("[data-mq-empty]");r&&(r.hidden=!0),w(h.querySelector("[data-mq-col-pending]"),j.pending,"pending"),w(h.querySelector("[data-mq-col-approved]"),j.approved,"approved"),w(h.querySelector("[data-mq-col-rejected]"),j.rejected,"rejected");let t=(o,n)=>{h.querySelectorAll(o).forEach(l=>{l.textContent=String(n)})};t("[data-mq-cnt-pending]",j.pending.length),t("[data-mq-cnt-approved]",j.approved.length),t("[data-mq-cnt-rejected]",j.rejected.length);let d=j.pending.length===0;h.querySelectorAll("[data-mq-bulk]").forEach(o=>{o.disabled=d});let e=j.pending[j.pending.length-1],i=h.querySelector("[data-mq-oldest]");if(i){let o=e?N(e):null;i.textContent=o!=null?`oldest: ${o}s`:""}t("[data-mq-throughput]",j.stats.throughput.toFixed?j.stats.throughput.toFixed(1):j.stats.throughput),t("[data-mq-avg-review]",j.stats.avg_review_sec.toFixed?j.stats.avg_review_sec.toFixed(1):j.stats.avg_review_sec),t("[data-mq-auto-rate]",Math.round(j.stats.auto_reject_pct||0)+"%")}async function S(){try{let h=await fetch(k,{credentials:"same-origin"});if(!h.ok){j.pending=[],j.approved=[],j.rejected=[],R();return}let c=await h.json();j.pending=Array.isArray(c.pending)?c.pending:[],j.approved=Array.isArray(c.approved)?c.approved:[],j.rejected=Array.isArray(c.rejected)?c.rejected:[],j.stats=c.stats||j.stats,typeof c.auto_reject_sec=="number"&&(j.autoRejectSec=c.auto_reject_sec),R()}catch{}}async function b(h,c,r){if(window.csrfFetch)try{let t=await window.csrfFetch("/admin/modqueue/"+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:h,...r||{}})});if(t.ok)window.showToast&&window.showToast(c==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),S();else{let d=await t.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:d.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function I(){return`
      <div id="${y}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
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
      </div>`}function O(){let h=document.getElementById(y);h&&h.addEventListener("click",async c=>{let r=c.target.closest("[data-mq-action]");if(r){let d=r.dataset.mqId,e=r.dataset.mqAction;(e==="approve"||e==="reject")&&b(d,e);return}let t=c.target.closest("[data-mq-bulk]");if(t){let d=t.dataset.mqBulk,e=d==="approve-low";if(!await window.HudConfirm?.open({icon:e?"\u2713":"\u2298",title:e?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:e?"warn":"danger",body:e?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:e?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let o=d.startsWith("approve")?"approve":"reject",n=d.endsWith("low")?"low":"high";b(null,"bulk",{action:o,severity:n})}})}function A(){let h=document.querySelector(".admin-dash-grid"),c=document.getElementById(y);if(!c)return;let r=(location.hash||"").replace("#/","").split("/"),t=h?.dataset.activeRoute||r[0]||"",d=h?.dataset.activeLeaf||r[1]||"",e=t==="modqueue"||t==="moderation"&&(d==="queue"||d===""||d==="moderation");c.style.display=e?"":"none",e?(j.timer||(S(),j.timer=setInterval(S,4e3)),j.countdownTimer||(j.countdownTimer=setInterval(R,1e3))):(j.timer&&(clearInterval(j.timer),j.timer=0),j.countdownTimer&&(clearInterval(j.countdownTimer),j.countdownTimer=0))}function B(){let h=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!h||document.getElementById(y)||(h.insertAdjacentHTML("beforeend",I()),O(),A())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(y)&&B(),A()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",A),document.addEventListener("admin-panel-rendered",()=>{B(),A()}),B()})})()});var Ze=ye(()=>{(function(){"use strict";let y="sec-modbans-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(I){return String(I).replace(/[&<>"']/g,function(O){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[O]})},g=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],f={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},C={fingerprint:"FP",ip:"IP",nick:"NICK"},j={rows:[],refreshTimer:0};async function F(){try{let I=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!I.ok)return;let O=await I.json();j.rows=Array.isArray(O.bans)?O.bans:[],N()}catch{}}function $(I){if(!I||I<=0)return"\u2014";let O=Math.floor(I/86400),A=Math.floor(I%86400/3600),B=Math.floor(I%3600/60);return O>0?`${O}d ${A}h`:A>0?`${A}h ${B}m`:`${B}m`}function p(I){let O=I.target_kind;return O==="fingerprint"?`fp:${(I.target||"").slice(0,8)}`:O==="nick"?`@${I.target}`:I.target||"\u2014"}function N(){let I=document.querySelector("[data-modbans-list]");if(!I)return;let O=j.rows||[],A=document.querySelector("[data-modbans-count]");if(A&&(A.textContent=String(O.length)),O.length===0){I.innerHTML="";let B=window.AdminEmpty.render("blacklist");B.dataset.emptyKind="modbans",I.appendChild(B);return}I.innerHTML=O.map(function(B){let h=B.status==="expired",c=B.status==="permanent",r="admin-modbans-chip is-"+B.status,t=c?ServerI18n.t("modbansPermanent"):h?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:$(B.remaining_s)}),d=encodeURIComponent(B.target_kind)+"|"+encodeURIComponent(B.target);return`
        <div class="admin-modbans-row ${h?"is-expired":""}">
          <span class="admin-modbans-target">${k(p(B))}</span>
          <span class="admin-modbans-kind">${k(C[B.target_kind]||B.target_kind)}</span>
          <span class="admin-modbans-reason">${k(B.reason||"\u2014")}</span>
          <span class="${r}">
            ${B.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${k(t)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${d}"
            ${h?"disabled":""}
            title="${h?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${h?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function D(I){let O=I||{},A=O.kind||"ban",B=window.HudConfirm,h=!O.target,c=O.target_kind||"fingerprint",r=O.target||"";return new Promise(function(t){if(!B){t(!1);return}let d=86400,e=!1,i=12,o="hour",n=document.createElement("div");n.className="admin-modbans-modal-body",n.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${k(f[c]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${k(C[c]||"?")} ${k((A||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${k(r?p({target_kind:c,target:r}):"\u2014")}</div>
          </div>
        </div>
        ${h?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(G){return`<button type="button" class="admin-modbans-modal-preset${G===c?" is-active":""}"
                data-modbans-target-kind="${G}">${k(f[G])} ${k(C[G])}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let l=n.querySelector("[data-modbans-custom-row]"),m=n.querySelector("[data-modbans-custom-input]"),a=n.querySelector("[data-modbans-custom-seconds]"),s=n.querySelector("[data-modbans-when]"),u=n.querySelector("[data-modbans-custom]"),v=n.querySelector("[data-modbans-target]"),E=n.querySelector("[data-modbans-target-icon]"),_=n.querySelector("[data-modbans-target-label]"),L=n.querySelector("[data-modbans-target-val]"),M=function(){E.textContent=f[c]||"?",_.textContent=`${C[c]||"?"} ${(A||"ban").toUpperCase()}`,L.textContent=r?p({target_kind:c,target:r}):"\u2014"},P=function(){return Math.max(1,parseInt(m.value,10)||1)*(o==="day"?86400:3600)},W=function(){if(d===0){s.textContent=ServerI18n.t("modbansWhenPermanent"),s.classList.remove("is-custom");return}let G=new Date(Date.now()+d*1e3),te=z=>String(z).padStart(2,"0"),ne=`${G.getFullYear()}-${te(G.getMonth()+1)}-${te(G.getDate())} ${te(G.getHours())}:${te(G.getMinutes())}`;e?(s.textContent=ServerI18n.t("modbansWhenCustom",{n:i,unit:ServerI18n.t(o==="day"?"modbansDay":"modbansHour"),stamp:ne}),s.classList.add("is-custom")):(s.textContent=ServerI18n.t("modbansWhenPreset",{dur:$(d),stamp:ne}),s.classList.remove("is-custom"))},T=function(){let G=P();a.textContent=`= ${G.toLocaleString()}s`,e&&(i=Math.max(1,parseInt(m.value,10)||1),d=G,W())},q=n.querySelector("[data-modbans-presets]"),U=function(){e=!0,l.hidden=!1,q.querySelectorAll(".admin-modbans-modal-preset").forEach(function(G){G.classList.toggle("is-active",G===u)}),T()},J=function(G){e=!1,l.hidden=!0,q.querySelectorAll(".admin-modbans-modal-preset").forEach(function(te){te.classList.toggle("is-active",te===G)})};M(),W(),T(),n.addEventListener("click",function(G){let te=G.target.closest("[data-modbans-target-kind]");if(te){c=te.dataset.modbansTargetKind,te.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(Q){Q.classList.toggle("is-active",Q===te)}),M();return}if(G.target.closest("[data-modbans-custom]")){U();return}let ne=G.target.closest("[data-modbans-custom-unit]");if(ne){o=ne.dataset.modbansCustomUnit||"hour",n.querySelectorAll("[data-modbans-custom-unit]").forEach(function(Q){Q.classList.toggle("is-active",Q===ne)}),T();return}let z=G.target.closest("[data-modbans-duration]");z&&(d=parseInt(z.dataset.modbansDuration,10)||0,J(z),W())}),m.addEventListener("input",T),v&&v.addEventListener("input",function(){r=v.value.trim(),M()});let K=n.querySelector("[data-modbans-reason]");B.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:n,width:480}).then(function(G){if(!G){t(!1);return}if(!r){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),t(!1);return}d===0?B.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${k(p({target_kind:c,target:r}))}</b>`})}).then(function(te){if(!te){t(!1);return}w(c,r,d,K.value.trim(),A).then(t)}):w(c,r,d,K.value.trim(),A).then(t)})})}async function w(I,O,A,B,h){try{let c=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:I,target:O,duration_s:A,reason:B||"",kind:h||"ban"})});if(!c.ok)throw new Error(`HTTP ${c.status}`);return window.showToast&&window.showToast(A===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:$(A)}),!0),F(),!0}catch(c){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:c.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function x(I){let O=(I||"").split("|");if(O.length!==2)return;let A=decodeURIComponent(O[0]),B=decodeURIComponent(O[1]);try{let h=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:A,target:B})});if(!h.ok)throw new Error(`HTTP ${h.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),F()}catch(h){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:h.message||ServerI18n.t("modbansUnknownError")}),!1)}}function R(){return`
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
      </div>`}function S(){let I=document.getElementById(y);if(!I||I.dataset.modbansBound==="1")return;I.dataset.modbansBound="1",I.addEventListener("click",function(A){if(A.target.closest("[data-modbans-add]")){D({kind:"ban"});return}let B=A.target.closest("[data-modbans-unban]");B&&!B.disabled&&x(B.dataset.modbansUnban)});let O=I.querySelector("[data-modbans-list]");O&&window.AdminSkeletons&&!O.children.length&&O.appendChild(window.AdminSkeletons.listRows({rows:4}))}function b(){let I=document.getElementById("settings-grid");!I||document.getElementById(y)||(I.insertAdjacentHTML("beforeend",R()),S(),F(),j.refreshTimer||(j.refreshTimer=setInterval(F,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&b()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&b()}),window.ModBans={openPicker:D,refreshList:F,formatTarget:p,formatRemaining:$}})()});var et=ye(()=>{(function(){"use strict";let y="admin-mobile-nav-root",k=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],g=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"backup",icon:"\u21EA",labelKey:"mnavBackup",descKey:"mnavDescBackup"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"},{route:"integrations",icon:"\u232C",labelKey:"adminNavIntegrations",desc:"Slido \xB7 Discord \xB7 OBS"}],f={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",security:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets",webhooks:"integrations",plugins:"integrations","api-tokens":"integrations",scheduler:"integrations"},C=!1,j=0;function F(){return`
      <nav id="${y}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow id="admin-mobile-more-menu" hidden>
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
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${S.id}" data-mn-route="${S.route||""}" ${S.id==="more"?'aria-expanded="false" aria-controls="admin-mobile-more-menu"':'aria-current="false"'}>
              <span class="admin-mobile-nav__icon">${S.icon}</span>
              <span class="admin-mobile-nav__label">${S.labelKey?ServerI18n.t(S.labelKey):S.label}</span>
              ${S.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${S.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </nav>`}function $(){let S=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",b=f[S]||S;return k.some(I=>I.id===b)?b:g.some(I=>I.route===b)?"more":""}function p(){let S=document.getElementById(y);if(!S)return;let b=$();S.querySelectorAll("[data-mn-tab]").forEach(I=>{I.classList.toggle("is-active",I.dataset.mnTab===b),I.dataset.mnTab!=="more"&&I.setAttribute("aria-current",I.dataset.mnTab===b?"page":"false")})}function N(S){let b=document.getElementById(y);if(!b)return;C=S,b.dataset.overflow=S?"open":"closed",b.querySelector("[data-mn-overflow]").hidden=!S,b.querySelector("[data-mn-backdrop]").hidden=!S;let I=b.querySelector("[data-mn-tab='more']");I?.classList.toggle("is-active",S),I?.setAttribute("aria-expanded",S?"true":"false")}function D(S){if(S.target.closest("[data-mn-backdrop]")){N(!1);return}if(S.target.closest("[data-mn-logout]")){N(!1);let O=document.getElementById("logoutButton");O&&O.click();return}let b=S.target.closest("[data-mn-tab]");if(b){if(b.dataset.mnTab==="more"){N(!C);return}N(!1),b.dataset.mnRoute&&(location.hash="#/"+b.dataset.mnRoute);return}let I=S.target.closest("[data-mn-route]");I&&I.classList.contains("admin-mobile-nav__o-row")&&(N(!1),location.hash="#/"+I.dataset.mnRoute)}async function w(){try{let S=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!S.ok)return;let b=await S.json(),I=Array.isArray(b.pending)?b.pending.length:0;j=I;let O=document.querySelector("[data-mn-badge='pending']");if(!O)return;O.textContent=String(I),O.hidden=!(I>0)}catch{}}function x(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let S=0;function b(){let I=document.activeElement,O=I&&(I.tagName==="INPUT"||I.tagName==="TEXTAREA"||I.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!O)}document.addEventListener("focusin",()=>{cancelAnimationFrame(S),S=requestAnimationFrame(b)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(S),S=requestAnimationFrame(()=>setTimeout(b,50))})}function R(){document.getElementById(y)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",F()),document.addEventListener("click",D),window.addEventListener("hashchange",()=>{N(!1),p()}),p(),w(),setInterval(w,8e3),x())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",R):R()})()});var tt=ye(()=>{(function(){"use strict";var y="admin-session-expired-root",k=!1,g=null;function f(p,N){try{var D=window.ServerI18n&&ServerI18n.t(p);return D&&D!==p?D:N}catch{return N}}function C(){var p=document.getElementById(y);if(p&&p.remove(),document.body.classList.remove("is-session-expired"),k=!1,g&&g.focus)try{g.focus()}catch{}g=null}function j(p){if(p.key==="Tab"){var N=document.getElementById(y);if(N){var D=N.querySelectorAll("input, button");if(D.length){var w=D[0],x=D[D.length-1];p.shiftKey&&document.activeElement===w?(p.preventDefault(),x.focus()):!p.shiftKey&&document.activeElement===x&&(p.preventDefault(),w.focus())}}}}function F(){if(!(k||document.getElementById(y))){k=!0,g=document.activeElement,document.body.classList.add("is-session-expired");var p=document.createElement("div");p.id=y,p.className="admin-sx",p.setAttribute("role","alertdialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","admin-sx-title"),p.setAttribute("aria-describedby","admin-sx-body"),p.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+f("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+f("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+f("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+f("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+f("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+f("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(p),document.addEventListener("keydown",j,!0);var N=p.querySelector("#admin-sx-password");setTimeout(function(){try{N.focus()}catch{}},30),p.querySelector("[data-sx-form]").addEventListener("submit",function(D){D.preventDefault(),$(p,N)})}}function $(p,N){var D=p.querySelector("[data-sx-error]"),w=p.querySelector(".admin-sx__submit");D.hidden=!0,w.disabled=!0;var x=new URLSearchParams;x.set("password",N.value),p.querySelector("#admin-sx-remember").checked&&x.set("remember","1");var R=window.__adminRawFetch||window.fetch;R.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:x.toString()}).then(function(S){return S.json().then(function(b){return{status:S.status,data:b}},function(){return{status:S.status,data:{}}})}).then(function(S){if(w.disabled=!1,S.status===200&&S.data&&S.data.ok){var b=document.querySelector('meta[name="csrf-token"]');b&&S.data.csrf_token&&(b.content=S.data.csrf_token),document.removeEventListener("keydown",j,!0),C(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(f("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}S.status===429?D.textContent=f("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):D.textContent=f("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),D.hidden=!1,N.select()}).catch(function(){w.disabled=!1,D.textContent=f("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),D.hidden=!1})}window.AdminSessionExpired={open:F,close:C,isOpen:function(){return k}}})()});var nt=ye(()=>{(function(){"use strict";let y="admin-reconnect-banner",C=0,j=0,F="ok",$=0,p=5e3,N=!1,D=0;function w(r){if(F!==r){if(F=r,r==="ok"||r==="dismissed"){R(),r==="ok"&&(C=0,j=0,p=5e3);return}x()}}function x(){let r=document.getElementById(y);r||(r=document.createElement("div"),r.id=y,r.className="admin-rcb",r.setAttribute("role","status"),r.setAttribute("aria-live","polite"),document.body.insertBefore(r,document.body.firstChild)),r.dataset.state=F;let t=F==="exhausted",d=t?"admin-rcb--crimson":"admin-rcb--amber";r.className=`admin-rcb ${d}`,r.innerHTML=t?b():S(),r.querySelector("[data-rcb-action='retry']")?.addEventListener("click",O),r.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>w("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",t),D||(D=setInterval(I,250))}function R(){let r=document.getElementById(y);r&&r.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),D&&(clearInterval(D),D=0)}function S(){let r=Math.max(0,($-Date.now())/1e3),t=p/1e3,d=Math.min(100,(t-r)/t*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:j})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${d}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function b(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function I(){if(F!=="reconnecting")return;let r=document.getElementById(y);if(!r)return;let t=Math.max(0,($-Date.now())/1e3),d=p/1e3,e=Math.min(100,(d-t)/d*100),i=r.querySelector(".admin-rcb__progress-fill");i&&(i.style.width=e+"%")}function O(){j=0,C=0,p=5e3,w("reconnecting"),A()}async function A(){try{let r=await fetch("/admin/bootstrap",{credentials:"same-origin"});r.ok?B():r.status===401||r.status===403?w("ok"):h()}catch{h()}}function B(){w("ok")}function h(){if(C+=1,j+=1,j>=10){w("exhausted");return}C>=3&&(p=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,j-1))),$=Date.now()+p,w("reconnecting"),setTimeout(A,p))}function c(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let r=window.csrfFetch,t=window.fetch;window.__adminRawFetch=t,document.addEventListener("admin:session-restored",()=>{N=!1,B()});async function d(e){try{let i=await e;return i&&i.ok?F!=="ok"&&F!=="dismissed"&&B():i&&i.status===401&&!N?(N=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):i&&i.status>=500&&h(),i}catch(i){throw h(),i}}typeof r=="function"&&(window.csrfFetch=function(){return d(r.apply(this,arguments))}),window.fetch=function(e,i){let o=typeof e=="string"?e:e&&e.url||"",n=t.call(this,e,i);return o.startsWith("/admin/")||o.indexOf("//")===-1&&o.startsWith("admin/")?d(n):n}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var at=ye(()=>{(function(){"use strict";let y="admin-help-drawer-root",k={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},g=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],f=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function C(S){return S==null?"":String(S).replace(/[&<>"']/g,function(b){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[b]})}function j(){let S=(location.hash||"").replace("#/","").split("/")[0]||"";return k[S]?S:"_default"}function F(){return`
      <div id="${y}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function $(){let S=k[j()],b=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",I=S.titleKey?ServerI18n.t(S.titleKey):S.title,O=S.tipKeys.map(c=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${C(typeof c=="string"?ServerI18n.t(c):c.literal)}</span>
      </div>`).join(""),A=S.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${C(ServerI18n.t(S.fieldTipKey))}</span>
      </div>`:"",B=g.map(c=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${C(c.term)}</div>
        <div class="admin-help__glossary-def">${C(ServerI18n.t(c.defKey))}</div>
      </div>`).join(""),h=f.map(c=>`
      <a class="admin-help__resource" href="${C(c.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${C(c.label)}</span>
        <span class="admin-help__resource-url">${C(c.url.replace(/^https?:\/\//,""))}</span>
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
          <div class="admin-help__tips">${O}</div>
          ${A}
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
          <div class="admin-help__glossary">${B}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${h}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${b?"v"+C(b):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function p(){let S=document.getElementById(y);S||(document.body.insertAdjacentHTML("beforeend",F()),S=document.getElementById(y),S.addEventListener("click",b=>{if(b.target.closest("[data-help-close]")){N();return}b.target.closest("[data-help-shortcuts]")&&(N(),window.AdminShortcuts&&window.AdminShortcuts.open())})),S.querySelector("[data-help-body]").innerHTML=$(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",w)}function N(){let S=document.getElementById(y);S&&S.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",w)}function D(){document.getElementById(y)?N():p()}function w(S){S.key==="Escape"&&(S.preventDefault(),N())}function x(S){let b=S.target;b&&(b.tagName==="INPUT"||b.tagName==="TEXTAREA"||b.isContentEditable)||S.key==="F1"&&(S.preventDefault(),D())}function R(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",x)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",R):R(),window.AdminHelp={open:p,close:N,toggle:D}})()});var it=ye(()=>{(function(){"use strict";var y="admin-shortcuts-root",k=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function g(h,c){try{var r=window.ServerI18n&&ServerI18n.t(h);return r&&r!==h?r:c}catch{return c}}function f(h,c){window.showToast&&window.showToast(h,c!==!1)}function C(h,c){return(window.csrfFetch||window.fetch)(h,c||{})}function j(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}function F(){window.AdminOverlayControl&&window.AdminOverlayControl.toggleDisplay()}function $(){window.AdminOverlayControl&&window.AdminOverlayControl.clearScreen()}async function p(){var h="idle";try{var c=await fetch("/admin/poll/status",{credentials:"same-origin"});c.ok&&(h=(await c.json()).state||"idle")}catch{}if(h==="idle"){location.hash="#/polls",f(g("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var r=h==="active";try{var t=await C(r?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!t.ok)throw new Error("HTTP "+t.status);f(g(r?"ksToastPollEnded":"ksToastPollStarted",r?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{f(g("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function N(h){return k?h.metaKey:h.ctrlKey}var D=k?"\u2318":"Ctrl",w=[{group:"global",keys:[D,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(h){return N(h)&&(h.key==="k"||h.key==="K")},run:j},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(h){return h.key==="?"&&!N(h)&&!h.altKey||h.key==="/"&&N(h)},run:function(){O()}},{group:"global",keys:[D,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u66AB\u505C\u986F\u793A\uFF0F\u7E7C\u7E8C\u986F\u793A",match:function(h){return N(h)&&h.shiftKey&&(h.key==="d"||h.key==="D")},run:F},{group:"global",keys:[D,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u756B\u9762",match:function(h){return N(h)&&h.shiftKey&&h.key==="Backspace"},run:$},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(h){return!N(h)&&"jkJK".indexOf(h.key)>=0},run:function(h){window.AdminLiveFeed.moveFocus(h.key==="j"||h.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(h){return!N(h)&&(h.key==="b"||h.key==="B")},run:function(h){window.AdminLiveFeed.blockFocused(h.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(h){return!N(h)&&h.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(h){return!N(h)&&(h.key==="p"||h.key==="P")},run:p}];function x(h){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(h):h==null?"":String(h).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}function R(h){return w.filter(function(c){return c.group===h}).map(function(c){var r=c.keys.map(function(t){return t==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+x(t)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+x(g(c.labelKey,c.fallback))+'</span><span class="admin-ks__keys">'+r+"</span></div>"}).join("")}function S(){var h=document.getElementById(y);h&&h.remove(),document.removeEventListener("keydown",b,!0)}function b(h){(h.key==="Escape"||h.key==="?")&&(h.preventDefault(),S())}function I(){if(!document.getElementById(y)){var h=document.createElement("div");h.id=y,h.className="admin-ks",h.setAttribute("role","dialog"),h.setAttribute("aria-modal","true"),h.setAttribute("aria-labelledby","admin-ks-title"),h.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+x(g("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+x(g("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+R("global")+'</div><div class="admin-ks__group-label">'+x(g("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+R("feed")+'</div><p class="admin-ks__note">'+x(g("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+x(g("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(h),h.addEventListener("click",function(r){r.target.closest("[data-ks-close]")&&S()}),document.addEventListener("keydown",b,!0);var c=h.querySelector(".admin-ks__close");c&&setTimeout(function(){try{c.focus()}catch{}},30)}}function O(){document.getElementById(y)?S():I()}function A(h){if(!h)return!1;if(h.isContentEditable)return!0;var c=(h.tagName||"").toLowerCase();return c==="input"||c==="textarea"||c==="select"}function B(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(h){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var c=A(document.activeElement),r=0;r<w.length;r++){var t=w[r];if(t.group==="feed"){if(c||!B())continue}else if(c&&!N(h))continue;if(t.match(h)){h.preventDefault(),t.run(h);return}}}),window.AdminShortcuts={open:I,close:S,toggle:O,list:function(){return w.slice()}}})()});var st=ye(()=>{(function(){"use strict";let y="theme-mode",k="admin-theme-mode",g="admin-theme-toggle";(function(){try{if(localStorage.getItem(y)!=null)return;let x=localStorage.getItem(k);(x==="light"||x==="dark"||x==="auto")&&(localStorage.setItem(y,x),localStorage.removeItem(k))}catch{}})();function C(){try{let w=localStorage.getItem(y);if(w==="light"||w==="dark"||w==="auto")return w}catch{}return"auto"}function j(w){try{localStorage.setItem(y,w)}catch{}}function F(w){let x=document.documentElement;w==="auto"?x.removeAttribute("data-theme"):x.setAttribute("data-theme",w),p(w)}function $(w){return w==="light"||w==="dark"?w:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function p(w){let x=document.getElementById(g);if(!x)return;let R=$(w);x.dataset.mode=w,x.dataset.effective=R,x.textContent=w==="auto"?"\u25D0":R==="light"?"\u2600":"\u263E",x.title=w==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:R==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):w==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function N(){let w=C(),x=w==="auto"?"light":w==="light"?"dark":"auto";j(x),F(x)}function D(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let w=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,x=document.getElementById(g);if(x){w&&x.classList.contains("admin-theme-toggle--floating")&&w.parentNode&&!w.parentNode.contains(x)&&(x.classList.remove("admin-theme-toggle--floating"),w.parentNode.insertBefore(x,w));return}let R=document.createElement("button");R.id=g,R.type="button",R.className="admin-theme-toggle",R.addEventListener("click",N),w&&w.parentNode?w.parentNode.insertBefore(R,w):(R.classList.add("admin-theme-toggle--floating"),document.body.appendChild(R)),p(C())}if(F(C()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{C()==="auto"&&p("auto")})}catch{}window.addEventListener("storage",w=>{w.key===y&&F(C())}),window.AdminThemeSwitcher={getMode:C,setMode:function(w){w!=="auto"&&w!=="light"&&w!=="dark"||(j(w),F(w),p(w),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:w}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0})}):(D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0}))})()});var ot=ye(()=>{(function(){"use strict";var y={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},k=[];window.DanmuStore={get:function(g){return y[g]},set:function(g,f){y[g]=f,k.forEach(function(C){C(g,f)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+g,f)},subscribe:function(g){k.push(g)},getAll:function(){return Object.assign({},y)}}})()});var rt=ye(()=>{(function(){"use strict";let g=0;function f(){return window.__adminCtx||{}}function C(){let p=f();return typeof p.getSettings=="function"?p.getSettings()||{}:{}}function j(){let p=C();if(p&&typeof p.OpsContact<"u"){let N=p.OpsContact;if(Array.isArray(N))return N[3]||N[0]||null;if(typeof N=="string")return N}return null}function F(){let p=f().appContainer||document.getElementById("app-container");if(!p)return;let N=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";p.innerHTML=`
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
              <span data-i18n="adminLoginServerOnline">${ServerI18n.t("adminLoginServerOnline")}</span>${N?` \xB7 v${N}`:""}
            </span>
          </div>
        </div>
      </div>
    `;let D=p.querySelector("[data-login-reveal]");D&&D.addEventListener("click",()=>{let S=document.getElementById("password");if(!S)return;let b=S.type==="text";S.type=b?"password":"text",D.textContent=ServerI18n.t(b?"adminLoginReveal":"adminLoginHide");try{S.focus()}catch{}});let w=document.getElementById("loginForm"),x=document.getElementById("password"),R=document.getElementById("loginAttemptsHint");if(w){try{let S=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(S)&&S>0){g=S;let b=Math.max(0,5-g);if(R&&g>0&&b>0){R.hidden=!1;let I=document.getElementById("password");I&&I.classList.add("is-error"),R.textContent=ServerI18n.t("loginAttemptsRemaining",{n:b})}}}catch{}w.addEventListener("submit",async S=>{if(S.preventDefault(),!x)return;let b=new URLSearchParams;b.set("password",x.value),document.getElementById("admin-login-remember")?.checked&&b.set("remember","1");try{let I=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b.toString(),redirect:"manual"});if(I.status===429){let O=I.headers.get("Retry-After"),A=parseInt(O,10),B=Number.isFinite(A)&&A>0?A:300;$(B);return}g+=1;try{sessionStorage.setItem("admin_login_attempts",String(g))}catch{}window.location.reload()}catch(I){console.error("Login submit failed:",I),R&&(R.hidden=!1,R.textContent=ServerI18n.t("networkError"))}})}}function $(p){let N=document.getElementById("adminLoginCard");if(!N)return;let D=j(),w=D?`<a class="admin-lockout-contact" href="${D}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";N.classList.add("admin-lockout-card"),N.innerHTML=`
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
    `;let x=document.getElementById("lockoutCountdown"),R=p,S=I=>{let O=Math.floor(I/60),A=I%60;return`${String(O).padStart(2,"0")}:${String(A).padStart(2,"0")}`};x&&(x.textContent=S(R));let b=setInterval(()=>{R-=1,x&&(x.textContent=S(Math.max(0,R))),R<=0&&(clearInterval(b),g=0,F(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:F,renderLockout:$}})()});var dt=ye(()=>{(function(){"use strict";function y(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function k(m){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(m):String(m??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}async function g(){try{let m=y();await m.prime();let a=m.get("history_stats"),[s,u,v]=await Promise.all([a?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!u.ok)return;let E=a||(s&&s.ok?await s.json():null);if(!E)return;let _=(await u.json()).distribution||[],L=E.stats&&E.stats.total||0,M=_.reduce((K,G)=>G.count>(K?.count||-1)?G:K,null),P=M?M.count:0,W=M?(M.hour||"").slice(-5):"\u2014",T=document.querySelector('[data-kpi="messages"]');T&&(T.querySelector("[data-kpi-value]").textContent=L.toLocaleString());let q=document.querySelector('[data-kpi="peak"]');q&&(q.querySelector("[data-kpi-value]").textContent=P.toLocaleString());let U=document.querySelector('[data-kpi="unique-fp"]');if(U){let K=new Set;(E.records||[]).forEach(G=>{let te=G.fingerprint||G.fp||G.user_fingerprint;te&&K.add(te)}),U.querySelector("[data-kpi-value]").textContent=K.size.toLocaleString()}let J=document.querySelector('[data-kpi="session"]');if(J){let K=v&&v.ok?await v.json():null,G=K&&K.status==="live",te=J.querySelector("[data-kpi-value]");if(G&&K.started_at){let ne=Math.max(0,Math.floor(Date.now()/1e3-K.started_at)),z=Math.floor(ne/3600),Q=Math.floor(ne%3600/60);te.textContent=z>0?`${z}:${String(Q).padStart(2,"0")}:${String(ne%60).padStart(2,"0")}`:`${Q}:${String(ne%60).padStart(2,"0")}`}else te.textContent="\u2014"}}catch{}}function f(m,a){let s=document.querySelector(m);if(s){if(typeof a!="number"||a<=0){s.hidden=!0;return}s.hidden=!1,s.textContent=a>999?"999+":String(a)}}async function C(){try{let m=y();await m.prime();let a=m.get("blacklist"),s=m.get("widgets"),u=m.get("history_stats"),v=m.get("effects"),E=m.get("themes");f("[data-count-blacklist]",Array.isArray(a)?a.length:0),f("[data-count-widgets]",Array.isArray(s?.widgets)?s.widgets.length:0),f("[data-count-messages]",u?.stats?.last_24h||0),f("[data-count-effects]",Array.isArray(v?.effects)?v.effects.length:0),f("[data-count-themes]",Array.isArray(E?.themes)?E.themes.length:0);try{let _=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(_.ok){let L=await _.json();f("[data-count-plugins]",Array.isArray(L?.plugins)?L.plugins.length:0)}}catch{}}catch{}}async function j(){C(),F(),n()}async function F(){let m=document.querySelector("[data-dash-poll-body]"),a=document.querySelector("[data-dash-poll-timer]");if(m)try{let s=y();await s.prime();let v=s.get("metrics");if(!v){let P=await fetch("/admin/metrics",{credentials:"same-origin"});if(!P.ok)return;v=await P.json()}let E=v.poll_state;if(!E||!E.active||!Array.isArray(E.options)||E.options.length===0){m.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,a&&(a.textContent="");return}let _=E.options.reduce((P,W)=>P+(W.votes||0),0),L=["A","B","C","D","E","F"],M=0;if(E.options.forEach((P,W)=>{(P.votes||0)>(E.options[M].votes||0)&&(M=W)}),m.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${k(E.question||ServerI18n.t("dashPollRunning"))}</div>`+E.options.map((P,W)=>{let T=_?Math.round(P.votes/_*100):0;return`
            <div class="admin-dash-poll-opt ${W===M&&_>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${L[W]||String(W+1)}</span>
                <span class="label">${k(P.label||"")}</span>
                <span class="pct">${T}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:P.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${T}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:_})}</div>`,a){let P=E.remaining_seconds;a.textContent=typeof P=="number"&&P>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(P/60),ss:String(P%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function $(m){let a=m.visible!==!1,s=m.config&&m.config.title||m.type||"widget",u=(m.type||"widget").toUpperCase(),v=(m.position||"\u2014").toUpperCase(),E=a?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",_=m.created_at&&a?Math.max(0,Math.floor(Date.now()/1e3-m.created_at)):null,L=_!=null?(()=>{let M=Math.floor(_/86400),P=Math.floor(_%86400/3600),W=Math.floor(_%3600/60),T=_%60;return M>0?`UPTIME \xB7 ${M}d ${String(P).padStart(2,"0")}h`:P>0?`UPTIME \xB7 ${P}:${String(W).padStart(2,"0")}:${String(T).padStart(2,"0")}`:`UPTIME \xB7 ${W}:${String(T).padStart(2,"0")}`})():`STATUS \xB7 ${a?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${k(m.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${E}"></span>
          <span class="kind">${k(u)}</span>
          <span class="cat">${k(v)}</span>
        </div>
        <div class="title">${k(s)}</div>
        <div class="uptime">${L}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${a?" is-active":""}" data-widget-action="toggle" data-running="${a?"1":"0"}">${a?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function p(m,a){try{let s=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:m,config:{visible:!a}})});if(!s.ok)throw new Error("HTTP "+s.status);D()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function N(m){m.dataset.bound!=="1"&&(m.dataset.bound="1",m.addEventListener("click",a=>{let s=a.target.closest(".admin-dash-widget-tile");if(!s)return;let u=a.target.dataset.widgetAction,v=s.dataset.widgetId;if(!(!u||!v)){if(u==="toggle")p(v,a.target.dataset.running==="1");else if(u==="config"){let E=document.querySelector('[data-route="widgets"]');E&&E.click()}}}))}async function D(){let m=document.querySelector("[data-dash-widgets]");if(m)try{let a=y();await a.prime();let s=a.get("widgets");if(!s){let v=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!v.ok){m.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}s=await v.json()}let u=(s.widgets||s.items||[]).slice(0,4);if(u.length===0){m.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}m.innerHTML='<div class="admin-dash-widget-grid">'+u.map($).join("")+"</div>",N(m)}catch{m.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let w=null,x=null,R=null;function S(m){let a=Math.max(0,Math.floor(Date.now()/1e3-m)),s=Math.floor(a/3600),u=Math.floor(a%3600/60),v=a%60;return s>0?`${s}:${String(u).padStart(2,"0")}:${String(v).padStart(2,"0")}`:`${String(u).padStart(2,"0")}:${String(v).padStart(2,"0")}`}function b(m){let a=document.getElementById("admin-session-banner"),s=document.getElementById("sec-live-feed");if(s&&s.classList.toggle("is-idle-collapsed",!(m&&m.status==="live")),a&&a.classList.toggle("is-hero",!(m&&m.status==="live")),!a)return;if(w=m,!(m&&m.status==="live"))a.hidden=!1,a.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let v=m.started_at||Date.now()/1e3;a.hidden=!1,a.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${k(m.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
          <div class="admin-session-live-actions" data-current-behavior="${m.viewer_end_behavior||"continue"}">
            <a class="admin-ui-action admin-session-display-link" href="#/overlay" title="${ServerI18n.t("dashSessDisplayLinkTitle")}">${ServerI18n.t("dashSessDisplayLink")}</a>
            <button type="button" class="admin-ui-action is-danger admin-session-end-btn" data-sess-action="close">${ServerI18n.t("dashSessEndBtn")}</button>
          </div>
        </div>`,I(v)}a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",A))}function I(m){R&&clearInterval(R);let a=()=>{let s=document.querySelector("[data-sess-timer]");s&&(s.textContent=S(m))};a(),R=setInterval(a,1e3)}function O(){R&&(clearInterval(R),R=null)}async function A(m){let a=m.target.closest("[data-sess-action]");if(!a)return;let s=a.dataset.sessAction;if(s==="open"){let u=document.querySelector("[data-sess-name]"),v=(u?u.value:"").trim();if(!v){u&&u.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}a.disabled=!0;try{let E=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:v})}),_=await E.json();if(!E.ok){window.showToast&&window.showToast(_.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:v}),!0),b(_.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{a.disabled=!1}}else if(s==="close"){let u=a.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",v=(L,M)=>`<option value="${L}"${L===u?" selected":""}>${M}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
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
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;a.disabled=!0;let _=document.getElementById("sessCloseBehavior")?.value;if(_&&_!==u)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:_})})}catch{}try{let L=await window.csrfFetch("/admin/session/close",{method:"POST"}),M=await L.json();if(!L.ok){window.showToast&&window.showToast(M.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),O(),b({status:"idle",viewer_end_behavior:M.archived&&M.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{a.disabled=!1}}}async function B(){try{let m=await fetch("/admin/session/current",{credentials:"same-origin"});if(!m.ok)return;let a=await m.json();b(a)}catch{}}function h(){B(),x&&clearInterval(x),x=setInterval(B,1e4)}function c(){x&&(clearInterval(x),x=null),O()}let r=null,t=null;function d(){let m=document.querySelector("[data-cockpit-overlay]"),a=window.AdminOverlayControl,s=t;if(!m||!a||!s)return;m.classList.toggle("is-on",s.live);let u=m.querySelector("[data-cockpit-status]");u&&(u.textContent=a.statusText(s.live,s.count));let v=m.querySelector('[data-cockpit-action="toggle"]');v&&(v.dataset.i18n=a.toggleKey(s.live),v.textContent=ServerI18n.t(v.dataset.i18n),v.dataset.next=s.live?"standby":"live")}async function e(){let m=document.querySelector("[data-cockpit-overlay]");if(!m||m.offsetParent===null)return;let a=0,s=!1;try{let u=await fetch("/overlay_status",{credentials:"same-origin"});u.ok&&(a=(await u.json()).overlay_count||0)}catch{}try{let u=await fetch("/admin/broadcast/status",{credentials:"same-origin"});u.ok&&(s=(await u.json()).mode==="live")}catch{}t={live:s,count:a},d()}document.addEventListener("admin-overlay-state",m=>{let a=m&&m.detail||{};t={live:!!a.live,count:typeof a.count=="number"?a.count:t?t.count:0},d()}),document.addEventListener("admin-route-applied",m=>{let a=m&&m.detail&&m.detail.route;a!=="live"&&a!=="dashboard"||(d(),e())});function i(){let m=document.querySelector("[data-cockpit-overlay]");if(!m||m.dataset.bound)return;m.dataset.bound="1",m.addEventListener("click",async u=>{let v=u.target.closest("[data-cockpit-action]");if(!v)return;let E=v.dataset.cockpitAction;if(E==="clear"){window.AdminOverlayControl?.clearScreen();return}E==="toggle"&&(await window.AdminOverlayControl?.setDisplay(v.dataset.next==="live"),e())});let a=m.parentElement&&m.parentElement.querySelector('[data-cockpit-action="idle-qr"]');a&&a.addEventListener("click",o);let s=m.parentElement&&m.parentElement.querySelector('[data-cockpit-action="poll"]');s&&s.addEventListener("click",()=>{location.hash="#/polls"})}async function o(){let m;try{let u=await fetch("/admin/qr/public",{credentials:"same-origin"});if(!u.ok)throw new Error("HTTP "+u.status);m=await u.json()}catch{window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1);return}let a=document.createElement("div");a.className="admin-soh-qr",a.innerHTML=m.svg,await window.HudConfirm?.open({icon:"\u25A6",titleText:m.url,body:a,severity:"info",confirmLabel:ServerI18n.t("copyBtn"),cancelLabel:ServerI18n.t("close"),width:360})&&window.AdminUtils.copyText(m.url)}function n(){i(),e(),r&&clearInterval(r),r=setInterval(e,5e3)}function l(){r&&(clearInterval(r),r=null)}window.AdminDashboard={refreshKpi:g,refreshSummary:j,refreshSidebarBadges:C,populatePoll:F,populateWidgets:D,refreshSessionBanner:B,startSessionPolling:h,stopSessionPolling:c,refreshCockpitOverlay:e,renderCockpitOverlay:d,startCockpitPolling:n,stopCockpitPolling:l}})()});var lt=ye(()=>{(function(){"use strict";let y="sec-viewer-config-defaults",k=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(H){return String(H).replace(/[&<>"']/g,function(V){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[V]})},C={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}},j=[14,20,32,44,64],F=window.DANMU_CONFIG?.defaultColorPalette||[],$=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function p(H,V){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let Y=window.ServerI18n.t(H,V);if(Y&&Y!==H)return Y}return H}let N={};function D(H){if(N[H]!=null)return N[H];let V=C[H];return V?V.step:1}function w(H,V){N[H]=Number(V)||D(H)}let x={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",paletteInvalid:!1,palettePreview:null,paletteNotice:null},R=["Color","FontFamily","Layout"];function S(H){return R.indexOf(H)!==-1}function b(H){let V=x.options&&x.options[H],Y=V&&V[1];return Array.isArray(Y)?Y.slice():[]}function I(H){return H==="Color"?F.map(V=>V.replace(/^#/,"").toUpperCase()):H==="Layout"?$.map(V=>V.value):H==="FontFamily"?(x.fonts&&x.fonts.length?x.fonts:["NotoSansTC","Inter"]).map(Y=>typeof Y=="string"?Y:Y.name||Y.family||"").filter(Boolean):[]}function O(H,V){return H==="Color"?String(V||"").replace(/^#/,"").toUpperCase():String(V||"")}function A(){return`
      <div id="${y}" class="lg:col-span-2" data-tpl="C">
        <!-- \u540C\u4E00\u4EFD\u9762\u677F\u670D\u52D9\u5169\u689D\u8DEF\u7531\u3002\u986F\u793A\u5C64 (values) \u4E0A\u5B83\u662F\u6B21\u8981\u8A2D\u5B9A\uFF0C\u6536\u9032\u9810\u8A2D
             \u6536\u5408\u7684 details\uFF0Csummary \u5C31\u662F\u6A19\u984C\uFF1B\u89C0\u773E\u9801 (audience) \u4E0A\u5B83\u662F\u4E3B\u9AD4\uFF0C
             syncVisibility \u628A\u5B83\u5C55\u958B\u3001summary \u85CF\u8D77\u4F86\u3002 -->
        <details class="admin-dsp2-fold" data-dsp-fold>
        <summary class="admin-ui-page-title" data-dsp-only="values" data-i18n="displayValuesTitle">${f(p("displayValuesTitle"))}</summary>
        <div class="admin-dsp2-page hud-page-stack">
        <div class="admin-ui-page-head" data-dsp-only="audience">
          <h2 class="admin-ui-page-title" data-i18n="viewerGroupAudience">${f(p("viewerGroupAudience"))}</h2>
          <p class="admin-ui-page-note">${p("displayViewerDefaultsNote")}</p>
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
                <span data-i18n="displayAdminControlledTitle">${f(p("displayAdminControlledTitle"))}</span>
              </div>
              <div style="display:grid;grid-template-columns:auto 1fr;gap:7px 12px;align-items:start;font-size:11px;line-height:1.45">
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="language">${f(p("language"))}</span><span data-i18n="viewerThemeFollowBrowser">${f(p("viewerThemeFollowBrowser"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlPlaceholder">${f(p("displayAdminCtlPlaceholder"))}</span><span data-i18n="displayPlaceholderExample">${f(p("displayPlaceholderExample"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlSubmit">${f(p("displayAdminCtlSubmit"))}</span><span data-i18n="fireDanmu">${f(p("fireDanmu"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlPollPrompt">${f(p("displayAdminCtlPollPrompt"))}</span><span data-i18n="displayPollPromptExample">${f(p("displayPollPromptExample"))}</span>
              </div>
              <div style="padding-top:8px;border-top:1px solid var(--hud-line);font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);line-height:1.6"
                   data-i18n="displayAdminControlledNote">${f(p("displayAdminControlledNote"))}</div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-summary" id="dsp2-summary">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span>${f(p("displaySummaryTitle"))}</span>
              </div>
              <div class="admin-dsp2-summary-list" data-summary-list></div>
            </div>
          </div>
        </div>
        </div>
        </details>
      </div>`}let B=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:H=>`${Math.round(H)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:H=>`${H}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:H=>`${(+H).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:H=>`#${String(H||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:H=>H||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:H=>h(H),noRange:!0}];function h(H){let V=$.find(Y=>Y.value===H);return V?p(V.labelKey):H||"\u2014"}function c(H,V){let Y=V[0]!==!1,X=V[3],le=C[H.key];if(H.key==="Opacity"||H.key==="Speed"){let ue=le,pe=X!=null?Number(X):ue.min,ge=isFinite(pe)?pe:ue.min,be=(ge-ue.min)/Math.max(1e-6,ue.max-ue.min)*100;return`
        <div class="admin-dsp2-track" data-track="${H.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${H.key}" data-num-index="3"
            min="${ue.min}" max="${ue.max}" step="${D(H.key)}" value="${f(String(ge))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${be.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${be.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${H.key}"
              min="${ue.min}" max="${ue.max}" step="${D(H.key)}" value="${f(String(ge))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${ue.min}${ue.unit}</span><span>${ue.max}${ue.unit}</span>
            </div>
          </div>
        </div>`}if(H.key==="FontSize"){let ue=Number(X);return`
        <div class="admin-dsp2-chiprow">
          ${j.map(pe=>`<button type="button" class="admin-dsp2-fchip ${ue===pe?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${pe}">${pe}</button>`).join("")}
        </div>`}if(H.key==="Color"){let ue="#"+String(X||"FFFFFF").replace(/^#/,"").toUpperCase();return`
        <div class="admin-dsp2-swatches">
          ${o().map(pe=>{let ge=pe.slice(1),be=pe.toUpperCase()===ue;return`<button type="button" class="admin-dsp2-swatch ${be?"is-active":""}"
              data-chip-key="Color" data-chip-value="${ge}"
              style="background:${pe}" aria-label="${pe}" aria-pressed="${be}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${f(p("specificColor"))}">
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${f(ue)}" />
          </label>
        </div>
      `}if(H.key==="FontFamily"){let ue=(x.fonts&&x.fonts.length?x.fonts:["NotoSansTC","Inter"]).map(Ie=>{let Te=typeof Ie=="string"?Ie:Ie.name||Ie.family||"",$e=typeof Ie=="string"?Ie:Ie.label||Ie.name||Ie.family||"";return{value:Te,label:$e}}).filter(Ie=>Ie.value),pe=String(X||""),ge=!!x.allowlistEdit.FontFamily,be=ge?x.allowlistEdit.FontFamily:new Set(b("FontFamily").map(Ie=>O("FontFamily",Ie))),he=!ge&&be.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ue.map(Ie=>{let Te=Ie.value===pe,$e=ge?be.has(Ie.value):he||be.has(Ie.value),Le=["admin-dsp2-tchip",Te?"is-active":"",ge?"is-editing":"",$e?"":"is-blocked"].filter(Boolean).join(" "),Ce=ge?`data-allow-key="FontFamily" data-allow-value="${f(Ie.value)}"`:`data-chip-key="FontFamily" data-chip-value="${f(Ie.value)}"`;return`<button type="button" class="${Le}" ${Ce}
              aria-pressed="${$e?"true":"false"}">
              ${ge?`<span class="admin-dsp2-allow-mark">${$e?"\u2713 ":""}</span>`:""}${f(Ie.label)}
            </button>`}).join("")}
        </div>
        ${r(H)}
      `}if(H.key==="Layout"){let ue=String(X||"scroll"),pe=!!x.allowlistEdit.Layout,ge=pe?x.allowlistEdit.Layout:new Set(b("Layout").map(he=>O("Layout",he))),be=!pe&&ge.size===0;return`
        <div class="admin-dsp2-tiles">
          ${$.map(he=>{let Ie=he.value===ue,Te=pe?ge.has(he.value):be||ge.has(he.value),$e=["admin-dsp2-tile",Ie?"is-active":"",pe?"is-editing":"",Te?"":"is-blocked"].filter(Boolean).join(" "),Le=pe?`data-allow-key="Layout" data-allow-value="${he.value}"`:`data-chip-key="Layout" data-chip-value="${he.value}"`;return`<button type="button" class="${$e}" ${Le}
              aria-pressed="${Te?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${he.icon}</span>
              <span class="admin-dsp2-tile-label">${p(he.labelKey)}</span>
              ${pe?`<span class="admin-dsp2-allow-mark">${Te?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${r(H)}
      `}return""}function r(H){if(!S(H.key))return"";let V=!!x.allowlistEdit[H.key],Y=b(H.key),X=I(H.key).length||0,le=Y.length>0?p("displayAllowSummaryPartial",{n:Y.length,total:X,label:t(H.key)}):p("displayAllowSummaryAll",{total:X});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${H.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${H.key}">${f(le)}</span>
        ${V?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${H.key}">${f(p("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${H.key}">${f(p("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${H.key}">${f(p("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${H.key}" title="${f(p("displayEditAllowlistTitle"))}">[${f(p("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function t(H){return p(H==="Color"?"displayLabelColor":H==="FontFamily"?"displayLabelFontFamily":H==="Layout"?"displayLabelLayout":"displayLabelOption")}function d(H,V){if(H.noRange||!(V[0]!==!1))return"";let X=C[H.key],le=V[1]!=null?V[1]:X.min,ue=V[2]!=null?V[2]:X.max,pe=D(H.key);return`
      <div class="admin-dsp2-band">
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(p("displayMinAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${H.key}" data-num-index="1"
              min="${X.min}" max="${X.max}" step="${pe}" value="${f(String(le))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(p("displayMaxAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${H.key}" data-num-index="2"
              min="${X.min}" max="${X.max}" step="${pe}" value="${f(String(ue))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlStep")}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${H.key}" data-num-index="step"
              min="0.1" step="0.1" value="${f(String(pe))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
      </div>`}function e(H,V){let Y=V[0]!==!1,X=V[3],le=H.fmt?H.fmt(X):X!=null?String(X):"\u2014",ue=H.key==="Layout";return`
      <div class="admin-dsp2-row ${Y?"is-on":"is-off"} ${ue?"is-last":""}" data-row-key="${H.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${f(p(H.labelKey))}</div>
          <div class="admin-dsp2-value-badge ${Y?"is-on":""}" data-value-badge>${f(le)}</div>
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
            ${f(p(Y?"displayHintAudienceOn":"displayHintAudienceOff"))}
          </div>
          <div class="admin-dsp2-picker" data-picker-host>${c(H,V)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${d(H,V)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">
          <button type="button" class="admin-dsp2-pill ${Y?"is-on":""}"
            data-toggle-key="${H.key}" aria-pressed="${Y?"true":"false"}">
            <span class="admin-dsp2-pill-track"><span class="admin-dsp2-pill-thumb"></span></span>
            <span class="admin-dsp2-pill-label">${f(p(Y?"displayCustomizable":"displayLocked"))}</span>
          </button>
          <div class="admin-dsp2-toggle-hint">
            ${f(Y?p("displayToggleHintOn"):H.noRange?p("displayToggleHintOffPick"):p("displayToggleHintOffSlider"))}
          </div>
        </div>
      </div>`}function i(){let H=document.getElementById("dsp2-rows");if(H){if(!x.options){H.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):f(p("loading"))}`;return}H.innerHTML=B.map(V=>e(V,x.options[V.key]||[!1,"","",""])).join(""),a(),v(),E()}}function o(){let H=b("Color");return[...new Set((H.length?H:F).map(V=>"#"+String(V).replace(/^#/,"").toUpperCase()).filter(V=>/^#[0-9A-F]{6}$/.test(V)))]}function n(H){let V=H.slice(1).match(/.{2}/g).map(Y=>{let X=parseInt(Y,16)/255;return X<=.04045?X/12.92:((X+.055)/1.055)**2.4});return V[0]*.2126+V[1]*.7152+V[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function l(H,V="error"){x.paletteNotice={message:H,type:V};let Y=document.querySelector("[data-palette-feedback]");Y&&(Y.textContent=H,Y.classList.toggle("is-error",V==="error"))}function m(H,V=!0){let Y=document.querySelector("[data-admin-color-palette]"),X=Y?.querySelector("[data-palette-preview-text]");!X||!/^#[0-9A-F]{6}$/i.test(H)||(x.palettePreview=H.toUpperCase(),X.style.color=H,Y.querySelector("[data-palette-preview-code]").textContent=H.toUpperCase(),Y.querySelectorAll("[data-palette-preview]").forEach(le=>{let ue=le.dataset.palettePreview===H.toUpperCase();le.setAttribute("aria-pressed",String(ue)),le.closest(".admin-color-palette-chip").classList.toggle("is-previewing",ue)}),V&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(X.getAnimations().forEach(le=>le.cancel()),X.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function a(){let H=document.querySelector("[data-admin-color-palette]");if(!H||!x.options)return;let V=o(),Y=(x.options.ViewerColorPicker||[!0])[0]!==!1,X=x.paletteBusy?"disabled":"",le=x.palettePreview||V[0],ue=f(x.paletteDraft),pe=x.paletteNotice;H.setAttribute("aria-busy",String(x.paletteBusy)),H.innerHTML=`
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
        <span class="admin-color-palette-count"><strong data-palette-count>${V.length}</strong><span>${f(p("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${V.map((ge,be)=>`<div class="admin-color-palette-chip" style="--palette-color:${ge};--palette-ink:${n(ge)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${ge}"
                aria-label="${f(p("viewerPalettePreviewColor",{color:ge}))}" aria-pressed="${ge===le}" ${X}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(be+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${ge}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${ge}" ${V.length<=1?"disabled":X}
                aria-label="${f(p("viewerPaletteRemove",{color:ge}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${f(p("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${f(p("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(x.paletteDraft)?ue:"#38bdf8"}" data-palette-picker ${X} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${ue}"
                ${x.paletteInvalid?'aria-invalid="true"':""}
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${X} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${V.length>=64?"disabled":X}>
                <span aria-hidden="true">\uFF0B</span> ${f(p("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${f(p(V.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${pe?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${pe?f(pe.message):""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${f(p("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${f(p("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${le}</span><span aria-hidden="true">\u2192</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${f(p("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${f(p("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${f(p("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${Y?"checked":""} ${X} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${f(p("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,m(le,!1)}async function s(H,V){if(x.paletteBusy)return;let Y=document.querySelector("[data-admin-color-palette]");x.paletteBusy=!0,Y.setAttribute("aria-busy","true"),Y.querySelector("[data-palette-sync-status]").textContent=p("viewerPaletteSaving"),Y.querySelectorAll("input, button").forEach(ue=>{ue.disabled=!0});let X=await M("Color",H);x.paletteBusy=!1,x.paletteNotice={type:X?"success":"error",message:p(X?"viewerPaletteSaved":"updateFailed")},X&&V&&(x.palettePreview=V),a(),(V&&X?Y.querySelector(`[data-palette-preview="${V}"]`):Y.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function u(H,V){let Y=x.options&&x.options[H];return Y&&Y[3]!=null?Y[3]:V}function v(){let H=document.querySelector("[data-preview-stage]"),V=document.querySelector("[data-preview-pill='1']"),Y=document.querySelector("[data-preview-pill='2']"),X=document.querySelector("[data-preview-foot-l]"),le=document.querySelector("[data-preview-foot-r]");if(!H||!V||!Y||!x.options)return;let ue=Number(u("FontSize",32)),pe=Number(u("Opacity",92)),ge=Number(u("Speed",1)),be="#"+String(u("Color","7DD3FC")).replace(/^#/,""),he=String(u("FontFamily","NotoSansTC")),Ie=String(u("Layout","scroll")),Te=Math.min(ue,36),$e=Math.max(0,Math.min(100,pe))/100;V.style.fontSize=Te+"px",V.style.color=be,V.style.opacity=$e.toFixed(2),V.style.fontFamily=he+", system-ui, sans-serif",V.style.textShadow=`0 0 14px ${be}66`,Y.style.fontSize=(Te*.78).toFixed(0)+"px",Y.style.opacity=($e*.9).toFixed(2),Y.style.fontFamily=he+", system-ui, sans-serif",H.dataset.layout=Ie,X&&(X.textContent=`${h(Ie)} \xB7 ${ue}px \xB7 ${(+ge).toFixed(1)}\xD7`),le&&(le.textContent=p("displayOpacitySuffix",{n:Math.round(pe)}))}function E(){let H=document.querySelector("[data-summary-list]"),V=document.querySelector("[data-summary-count]");if(!H||!x.options)return;let Y=B.filter(X=>(x.options[X.key]||[])[0]).length;V&&(V.textContent=`AUDIENCE \xB7 ${Y}/6 OPEN`),H.innerHTML=B.map(X=>{let le=!!(x.options[X.key]||[])[0];return`<div class="admin-dsp2-srow ${le?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${f(p(X.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${f(p(le?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function _(H,V){try{let Y=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:H,enabled:!!V})});if(!Y.ok)throw new Error("toggle "+Y.status);Array.isArray(x.options[H])||(x.options[H]=[!1,"","",""]),x.options[H][0]=!!V,i(),H==="ViewerColorPicker"&&document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0});let X=H==="ViewerColorPicker"?p("viewerPaletteAllowPicker"):H;window.showToast&&window.showToast(`${X} ${p("settingsUpdated")}`,!0)}catch(Y){console.warn("[admin-display] toggle failed:",Y),window.showToast&&window.showToast(p("updateFailed"),!1),await W(),i()}}async function L(H,V,Y){try{let X=Y;if(H==="Color"){let ue=String(X).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ue)){window.showToast&&window.showToast(p("colorFormatError"),!1);return}X=ue.toUpperCase()}else if(H==="Opacity"||H==="FontSize"||H==="Speed"){X=H==="Speed"?parseFloat(X):parseInt(X,10);let ue=C[H];if(Number.isNaN(X)||ue&&(X<ue.min||X>ue.max)){window.showToast&&window.showToast(`${H} ${ue.min}\u2013${ue.max}`,!1);return}}let le=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:H,value:X,index:V})});if(!le.ok)throw new Error("update "+le.status);Array.isArray(x.options[H])||(x.options[H]=[!1,"","",""]),x.options[H][V]=X,P(H),v(),E()}catch(X){console.warn("[admin-display] update failed:",X),window.showToast&&window.showToast(p("updateFailed"),!1)}}async function M(H,V){try{let Y=await window.csrfFetch(`/admin/options/${encodeURIComponent(H)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:V})});if(!Y.ok)throw new Error("allowlist "+Y.status);let X=await Y.json().catch(()=>({}));X&&Array.isArray(X.option)?x.options[H]=X.option:Array.isArray(x.options[H])&&(x.options[H][1]=V.slice()),P(H),v(),E();let le=I(H).length||0,ue=H==="Color"?p("settingsUpdated"):V.length>0?p("displayAllowlistToastPartial",{key:H,n:V.length,total:le}):p("displayAllowlistToastAll",{key:H});return H!=="Color"&&window.showToast&&window.showToast(ue,!0),!0}catch(Y){return console.warn("[admin-display] allowlist failed:",Y),H!=="Color"&&window.showToast&&window.showToast(p("updateFailed"),!1),!1}}function P(H){let V=document.querySelector(`[data-row-key="${H}"]`);if(!V||!x.options)return;let Y=B.find(pe=>pe.key===H);if(!Y)return;let X=x.options[H]||[!1,"","",""],le=X[3],ue=V.querySelector("[data-value-badge]");if(ue&&(ue.textContent=Y.fmt?Y.fmt(le):le!=null?String(le):"\u2014"),S(H)){let pe=V.querySelector("[data-picker-host]");pe&&(pe.innerHTML=c(Y,X));return}if((H==="FontSize"||H==="Color"||H==="FontFamily"||H==="Layout")&&V.querySelectorAll(`[data-chip-key="${H}"]`).forEach(pe=>{let ge=pe.getAttribute("data-chip-value"),be=H==="Color"?String(le||"").replace(/^#/,"").toUpperCase():String(le??"");pe.classList.toggle("is-active",String(ge)===be)}),H==="Opacity"||H==="Speed"){let pe=C[H],ge=Number(le??pe.min),be=(ge-pe.min)/Math.max(1e-6,pe.max-pe.min)*100,he=V.querySelector(".admin-dsp2-slider-fill"),Ie=V.querySelector(".admin-dsp2-slider-thumb");he&&(he.style.width=be.toFixed(2)+"%"),Ie&&(Ie.style.left=`calc(${be.toFixed(2)}% - 8px)`);let Te=V.querySelector(".admin-dsp2-range");Te&&document.activeElement!==Te&&(Te.value=String(ge));let $e=V.querySelector(".admin-dsp2-num");$e&&document.activeElement!==$e&&($e.value=String(ge))}}async function W(){try{let H=await fetch("/get_settings",{credentials:"same-origin"});if(!H.ok)throw new Error(H.status);x.options=await H.json()}catch(H){console.warn("[admin-display] /get_settings failed:",H),x.options=x.options||{}}}async function T(){try{let H=await fetch("/fonts",{credentials:"same-origin"});if(!H.ok)throw new Error(H.status);let V=await H.json();x.fonts=Array.isArray(V)?V:V.fonts||[]}catch{x.fonts=["NotoSansTC","Inter"]}}async function q(){try{let H=await fetch("/admin/metrics",{credentials:"same-origin"});if(!H.ok)return;let V=await H.json();x.viewerCount=V.ws_clients??0}catch{}}function U(){J(),q(),x.metricsTimer=setInterval(q,5e3)}function J(){x.metricsTimer&&(clearInterval(x.metricsTimer),x.metricsTimer=null)}function K(){if(!x.options){window.showToast&&window.showToast(p("loading"),!1);return}let H={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:x.options},V=new Blob([JSON.stringify(H,null,2)],{type:"application/json"}),Y=URL.createObjectURL(V),X=document.createElement("a");X.href=Y,X.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(Y),window.showToast&&window.showToast(p("displayExportDone"),!0)}async function G(){if(!x.options)return;let H=document.getElementById("dsp2-deploy");H&&(H.disabled=!0,H.classList.add("is-pending"));try{for(let V of B){let Y=x.options[V.key];Array.isArray(Y)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:V.key,enabled:!!Y[0]})})}await q(),window.showToast&&window.showToast(p("displayBroadcastDone")+` ${x.viewerCount} ${p("displayViewersReceivedSuffix")}`,!0)}catch(V){console.warn("[admin-display] deploy failed:",V),window.showToast&&window.showToast(p("updateFailed"),!1)}finally{H&&(H.disabled=!1,H.classList.remove("is-pending"))}}async function te(){let H={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,.5,3,1],Color:[!0,0,0,"FFFFFF"],FontFamily:[!0,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:p("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"danger",body:p("displayRevertConfirm"),confirmLabel:p("displayDeployRevert")}))try{for(let[Y,X]of Object.entries(H)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:Y,enabled:!!X[0]})});for(let le=1;le<=3;le++)le<3&&(Y==="Color"||Y==="FontFamily"||Y==="Layout")||X[le]===""||X[le]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:Y,value:X[le],index:le})})}await W(),i(),window.showToast&&window.showToast(p("displayRevertDone"),!0)}catch(Y){console.warn("[admin-display] revert failed:",Y),window.showToast&&window.showToast(p("updateFailed"),!1)}}function ne(){let H=document.getElementById(y);H&&(H.addEventListener("click",V=>{let Y=V.target.closest("[data-palette-preview]");if(Y){m(Y.dataset.palettePreview);return}let X=V.target.closest("[data-palette-remove]");if(X){let be=o();if(be.length>1){let he=be.filter(Ie=>Ie!==X.dataset.paletteRemove);s(he,he.includes(x.palettePreview)?x.palettePreview:he[0])}return}if(V.target.closest("[data-palette-add]")){let be=H.querySelector("[data-palette-hex]"),he=String(be.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(he)){x.paletteInvalid=!0,be.setAttribute("aria-invalid","true"),l(p("colorFormatError"));return}let Ie=o();if(Ie.includes("#"+he)){l(p("viewerPaletteDuplicate"));return}Ie.length<64&&s([...Ie,"#"+he],"#"+he);return}let le=V.target.closest("[data-toggle-key]");if(le){let be=le.getAttribute("data-toggle-key"),he=!!(x.options[be]||[])[0];_(be,!he);return}let ue=V.target.closest("[data-allow-action]");if(ue){let be=ue.getAttribute("data-allow-action"),he=ue.getAttribute("data-allow-key");if(!he)return;if(be==="edit"){let Ie=b(he).map(Te=>O(he,Te));Ie.length?x.allowlistEdit[he]=new Set(Ie):x.allowlistEdit[he]=new Set(I(he)),P(he);return}if(be==="cancel"){delete x.allowlistEdit[he],P(he);return}if(be==="clear"){x.allowlistEdit[he]=new Set,M(he,[]),delete x.allowlistEdit[he];return}if(be==="apply"){let Ie=x.allowlistEdit[he]||new Set,Te=I(he),$e=Array.from(Ie),Le=Te.length>0&&$e.length===Te.length&&Te.every(Ce=>Ie.has(Ce));M(he,Le?[]:$e),delete x.allowlistEdit[he];return}}let pe=V.target.closest("[data-allow-key][data-allow-value]");if(pe){let be=pe.getAttribute("data-allow-key"),he=pe.getAttribute("data-allow-value"),Ie=x.allowlistEdit[be];if(Ie){let Te=O(be,he);Ie.has(Te)?Ie.delete(Te):Ie.add(Te),P(be)}return}let ge=V.target.closest("[data-chip-key]");if(ge){let be=ge.getAttribute("data-chip-key"),he=ge.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${be}"]`).forEach(Ie=>Ie.classList.remove("is-active")),ge.classList.add("is-active"),L(be,3,he);return}if(V.target&&V.target.id==="dsp2-revert"){te();return}if(V.target&&V.target.id==="dsp2-export"){K();return}}),H.addEventListener("keydown",V=>{V.key==="Enter"&&V.target.matches("[data-palette-hex]")&&!V.isComposing&&(V.preventDefault(),H.querySelector("[data-palette-add]")?.click())}),H.addEventListener("change",V=>{let Y=V.target;if(!Y)return;if(Y.matches("[data-viewer-color-picker]")){Y.disabled=!0,_("ViewerColorPicker",Y.checked);return}let X=Y.getAttribute("data-num-key");if(!X)return;let le=Y.getAttribute("data-num-index");if(le==="step"){w(X,Y.value),P(X);return}let ue=parseInt(le,10);if(Number.isNaN(ue))return;let pe=Y.value;X==="Color"&&(pe=String(pe).replace(/^#/,"").toUpperCase()),L(X,ue,pe)}),H.addEventListener("input",V=>{let Y=V.target;if(Y){if(Y.matches("[data-palette-picker]")){x.paletteDraft=Y.value.toUpperCase(),x.paletteInvalid=!1;let X=H.querySelector("[data-palette-hex]");X.value=x.paletteDraft,X.removeAttribute("aria-invalid"),l("","success"),m(x.paletteDraft);return}if(Y.matches("[data-palette-hex]")){x.paletteDraft=Y.value,x.paletteInvalid=!1;let X=Y.value.replace(/^#/,"");Y.removeAttribute("aria-invalid"),l("","success"),/^[0-9a-fA-F]{6}$/.test(X)&&(H.querySelector("[data-palette-picker]").value="#"+X,m("#"+X));return}if(Y.classList&&Y.classList.contains("admin-dsp2-range")){let X=Y.getAttribute("data-range-key"),le=C[X],ue=Number(Y.value),pe=(ue-le.min)/Math.max(1e-6,le.max-le.min)*100,ge=Y.closest("[data-row-key]");if(ge){let be=ge.querySelector(".admin-dsp2-slider-fill"),he=ge.querySelector(".admin-dsp2-slider-thumb");be&&(be.style.width=pe.toFixed(2)+"%"),he&&(he.style.left=`calc(${pe.toFixed(2)}% - 8px)`);let Ie=ge.querySelector(".admin-dsp2-num");Ie&&(Ie.value=String(ue))}Array.isArray(x.options[X])&&(x.options[X][3]=ue),v();return}if(Y.classList&&Y.classList.contains("admin-dsp2-num")){let X=Y.getAttribute("data-num-key"),le=parseInt(Y.getAttribute("data-num-index"),10);if(Number.isNaN(le)||!Array.isArray(x.options[X]))return;let ue=Y.value;Y.type==="number"&&(ue=Number(ue)),x.options[X][le]=ue,v()}}}),H.addEventListener("change",V=>{let Y=V.target;if(Y&&Y.classList&&Y.classList.contains("admin-dsp2-range")){let X=Y.getAttribute("data-range-key");L(X,3,Y.value)}}),H.addEventListener("click",V=>{let Y=V.target.closest("[data-dl-step]");if(Y){let le=Y.closest("[data-dl-stepper]");if(!le)return;let ue=le.getAttribute("data-dl-stepper"),ge=Number(z[ue]??0)+Number(Y.getAttribute("data-dl-step"));se(ue,ge);return}let X=V.target.closest("[data-dl-opt]");if(X){let le=X.closest("[data-dl-seg]");if(!le)return;let ue=le.getAttribute("data-dl-seg"),pe=X.getAttribute("data-dl-opt");se(ue,["safe_area","poll_vote_opacity"].indexOf(ue)!==-1?Number(pe):pe)}}),H.addEventListener("change",V=>{let Y=V.target.closest("[data-dl-toggle]");if(Y){se(Y.getAttribute("data-dl-toggle"),Y.checked);return}let X=V.target.closest("[data-dl-range]");X&&se(X.getAttribute("data-dl-range"),Number(X.value))}),H.addEventListener("input",V=>{let Y=V.target.closest("[data-dl-range]");if(!Y)return;let X=Y.getAttribute("data-dl-range"),le=H.querySelector(`[data-dl-value="${X}"]`);le&&(le.textContent=Y.value+"%")}))}let z={};function Q(){let H=document.getElementById(y);H&&Object.entries(z).forEach(([V,Y])=>{let X=H.querySelector(`[data-dl-value="${V}"]`);X&&(X.textContent=V==="max_tracks"?Number(Y)===0?p("dlMaxTracksAuto"):String(Y):String(Y)+"%");let le=H.querySelector(`[data-dl-range="${V}"]`);le&&document.activeElement!==le&&(le.value=String(Y));let ue=H.querySelector(`[data-dl-toggle="${V}"]`);ue&&(ue.checked=!!Y);let pe=H.querySelector(`[data-dl-seg="${V}"]`);pe&&pe.querySelectorAll("[data-dl-opt]").forEach(ge=>{let be=ge.getAttribute("data-dl-opt")===String(Y);ge.classList.toggle("is-active",be),ge.setAttribute("aria-pressed",be?"true":"false")})})}async function Z(){try{let H=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!H.ok)return;z=await H.json(),Q()}catch(H){console.warn("[admin-display] display-layer fetch failed:",H)}}async function se(H,V){let Y=z[H];z[H]=V,Q();try{let X=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[H]:V})});if(!X.ok)throw new Error("display-layer "+X.status);z=await X.json(),Q()}catch(X){z[H]=Y,Q(),console.warn("[admin-display] display-layer update failed:",X),window.showToast&&window.showToast(p("updateFailed"),!1)}}function ie(){k.forEach(H=>{let V=document.getElementById(H);V&&V.setAttribute("data-admin-ui-replaced","1")})}let de=null;function ce(H,V){return H==="overlay"||V==="overlay"||H==="display"||V==="display"}function ke(H,V){return H==="viewer-config"||H==="viewer"||V==="viewer-config"||V==="viewer"}function Ee(H,V){if(!ke(H,V))return;let Y=window.AdminTabs?.getConfig?.("viewer");if(!Y)return;let X=ue=>Y.tabs.some(pe=>pe.slug===ue),le=X(V)?V:null;if(!le&&window.AdminTabs.resolveActiveTab){let ue=window.AdminTabs.resolveActiveTab("viewer",null);X(ue)&&(le=ue)}le&&(document.body.dataset.viewerConfigTab=le)}let ee=!1,ae=!1;async function oe(){let H=document.getElementById("sec-viewer-config-limits");if(!H||ee)return;ee=!0;let V=(Y,X)=>{let le=H.querySelector(Y);le&&(le.textContent=X==null?"\u2014":String(X))};try{let Y=await fetch("/admin/metrics",{credentials:"same-origin"});if(!Y.ok)return;let X=await Y.json(),le=X.rate_limits&&X.rate_limits.fire||{},ue=X.rate_limits&&X.rate_limits.totals||{},pe=X.rate_limit_config&&X.rate_limit_config.fire||{},ge=Math.max(1,(X.server_time||0)-(X.server_started_at||0));V("[data-vc-rate-fp]",pe.limit||"\u2014"),V("[data-vc-rate-global]","\u2014"),V("[data-vc-rate-burst]","\u2014"),V("[data-vc-rate-cooldown]",pe.window||"\u2014"),V("[data-vc-msg-len]",100),V("[data-vc-nick-len]","\u2014"),V("[data-vc-dedup]","\u2014");let be=(le.hits||0)/ge;V("[data-vc-avg-rate]",be.toFixed(2)+"/s"),V("[data-vc-throttled]",le.violations||0),V("[data-vc-blocked]",ue.locked_sources||0),V("[data-vc-deduped]",0)}catch{}finally{ee=!1}}let me=null;function re(H){let V=window.ServerI18n&&window.ServerI18n.currentLang;if(!V||V===me)return;let Y=me===null;if(me=V,Y)return;let X=H.querySelector("[data-dsp-fold]"),le=!!(X&&X.open),ue=document.createElement("div");ue.innerHTML=A(),H.replaceChildren(...ue.firstElementChild.childNodes);let pe=H.querySelector("[data-dsp-fold]");pe&&(pe.open=le),i(),Q()}function ve(){let H=document.querySelector(".admin-dash-grid"),V=document.getElementById(y);if(!H||!V)return;re(V);let Y=H.dataset.activeRoute||"live",X=H.dataset.activeLeaf||Y;Ee(Y,X);let le=document.body.dataset.viewerConfigTab||"defaults",ue=ke(Y,X),pe=ce(Y,X),ge=ue||pe,be=V.querySelector("[data-dsp-fold]");be&&V.dataset.dspMode!==(pe?"values":"audience")&&(be.open=!pe),V.dataset.dspMode=pe?"values":"audience",V.style.display=ge?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach(Ie=>{let Te=document.getElementById(Ie);Te&&(Te.style.display=ue?"":"none")});let he=document.getElementById("sec-viewer-config-info");he&&(he.style.display=ue?"":"none"),ue?ae||(ae=!0,oe()):ae=!1,ce(Y,X)?x.metricsTimer||U():J(),de=Y}function fe(){if(document.getElementById("sec-viewer-config-info"))return;let H=document.getElementById("settings-grid");if(!H)return;let V=document.createElement("div");V.id="sec-viewer-config-info",V.className="lg:col-span-2",V.innerHTML='<div class="admin-vc-info-banner">'+p("displayViewerConfigInfoBanner")+"</div>";let Y=[{k:p("displayFieldNicknameLabel"),desc:p("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:p("displayFieldMessageLabel"),desc:p("displayFieldMessageDesc"),on:!0,pinned:!0},{k:p("displayFieldColorLabel"),desc:p("displayFieldColorDesc"),on:!0},{k:p("displayFieldFontLabel"),desc:p("displayFieldFontDesc"),on:!0},{k:p("displayFieldSizeLabel"),desc:p("displayFieldSizeDesc"),on:!0},{k:p("displayFieldOpacityLabel"),desc:p("displayFieldOpacityDesc"),on:!0},{k:p("displayFieldSpeedLabel"),desc:p("displayFieldSpeedDesc"),on:!0},{k:p("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:p("displayFieldEffectLabel"),desc:p("displayFieldEffectDesc"),on:!1}],X=document.createElement("div");X.id="sec-viewer-config-fields",X.className="admin-vc-fields-grid lg:col-span-2";let le=document.createElement("div");le.className="admin-vc-col-panel";let ue=document.createElement("div");ue.className="admin-vc-fields-head";let pe=Y.filter(function(xe){return xe.on}).length,ge=Y.length-pe;ue.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+f(p("displayFieldsCountLabel",{count:Y.length}))+'</span><span class="admin-vc-fields-count">'+f(p("displayFieldsShownHidden",{shown:pe,hidden:ge}))+"</span>",le.appendChild(ue);let be=document.createElement("div");be.className="admin-vc-fields-list",Y.forEach(function(xe){let Be=document.createElement("div");Be.className="admin-vc-field-row"+(xe.blocked?" is-blocked":"");let Me=document.createElement("span");Me.className="admin-vc-field-dot"+(xe.on?" is-on":""),Be.appendChild(Me);let Ne=document.createElement("div");var De="";xe.pinned&&(De='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+f(p("displayFieldBadgeRequired"))+"</span>"),xe.blocked&&(De='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+f(p("displayFieldBadgeBlocked"))+"</span>"),Ne.innerHTML='<div class="admin-vc-field-label">'+f(xe.k)+De+'</div><div class="admin-vc-field-desc">'+f(xe.desc)+"</div>",Be.appendChild(Ne);let Ae=document.createElement("button");if(Ae.type="button",Ae.className="admin-vc-toggle "+(xe.on?"is-on":"is-off"),Ae.textContent=xe.on?p("displayToggleShow"):p("displayToggleHide"),xe.blocked||xe.pinned)Ae.disabled=!0,Ae.className+=" disabled";else{var Fe=xe.on;Ae.addEventListener("click",function(){Fe=!Fe,Ae.className="admin-vc-toggle "+(Fe?"is-on":"is-off"),Ae.textContent=p(Fe?"displayToggleShow":"displayToggleHide"),Me.className="admin-vc-field-dot"+(Fe?" is-on":"")})}Be.appendChild(Ae),be.appendChild(Be)}),le.appendChild(be);let he=document.createElement("div");he.className="admin-vc-col-panel";var Te=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(xe,Be){return'<span class="admin-vc-swatch-dot" style="background:'+xe+";border:"+(Be===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");he.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+f(p("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+f(p("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+f(p("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+Te+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(p("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+f(p("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+f(p("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+f(p("displayFieldsTip"))+"</div>",X.appendChild(le),X.appendChild(he);function $e(xe,Be,Me,Ne,De,Ae){let Fe=Ae?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+xe+'</div></div><div class="admin-vc-limit-row__value" style="color:'+Fe+'">'+Me+'<span class="admin-vc-limit-row__unit">'+(Ne||"")+"</span></div>"+(De?'<div class="admin-vc-limit-row__hint">'+De+"</div>":"")+"</div>"}let Le=document.createElement("div");Le.id="sec-viewer-config-limits",Le.className="admin-vc-limits-grid lg:col-span-2",Le.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+f(p("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+f(p("displayEditLink"))+"</a></div>"+$e(f(p("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",f(p("displayRateFpUnit")),f(p("displayRateFpHint")))+$e(f(p("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",f(p("displayRateGlobalHint")))+$e(f(p("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",f(p("displayRateBurstUnit")),f(p("displayRateBurstHint")))+$e(f(p("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",f(p("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+f(p("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+f(p("displayContentLimitsTitle"))+"</span></div>"+$e(f(p("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",f(p("displayMsgLenUnit")),f(p("displayMsgLenHint")))+$e(f(p("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",f(p("displayNickLenUnit")),f(p("displayNickLenHint")))+$e(f(p("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",f(p("displayDedupHint")))+$e(f(p("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+f(p("displayProfanityDefaultValue"))+"</span>","",f(p("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+f(p("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(p("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+f(p("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(p("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+f(p("displayAuditLogLink"))+"</a></div>";let Ce=document.getElementById("sec-viewer-theme");Ce&&Ce.parentNode===H?(H.insertBefore(V,Ce),H.insertBefore(Le,Ce),H.insertBefore(X,Ce)):(H.appendChild(V),H.appendChild(Le),H.appendChild(X)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),ve()}async function Se(){let H=document.getElementById("settings-grid");if(!H||document.getElementById(y)){ie();return}H.insertAdjacentHTML("beforeend",A()),ne(),ie(),ve(),x.options||await Promise.all([W(),T()]),Z(),i()}function _e(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?Se():ie(),ve()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",ve),document.addEventListener("admin-route-applied",ve),document.addEventListener("admin-panel-rendered",()=>{Se(),ie(),fe(),ve()}),Se(),fe()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_e):_e()})()});var ct=ye(()=>{document.addEventListener("DOMContentLoaded",()=>{function y(){let K=document.querySelector('meta[name="csrf-token"]');return K&&K.content||""}let k=window.DANMU_CONFIG||{},g=k.session||{logged_in:!1},f=k.settingRanges||{};function C(K,G={}){let te={credentials:"same-origin",...G},ne=new Headers(G.headers||{});return ne.set("X-CSRF-Token",y()),te.headers=ne,fetch(K,te)}window.csrfFetch=C;let j=5e3,F={at:0,data:null,promise:null};function $(){return F.data&&Date.now()-F.at<j}function p(){return $()?Promise.resolve(F.data):(F.promise||(F.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(K=>K.ok?K.json():null).then(K=>(K&&(F.data=K,F.at=Date.now()),F.promise=null,K)).catch(()=>(F.promise=null,null))),F.promise)}function N(K){if(!$())return null;let G=F.data[K];return G&&typeof G=="object"&&"_error"in G?null:G}window.__danmuAdminBootstrap={prime:p,get:N},p();let D={},w=null,x=null,R=Object.create(null);Object.assign(R,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},"api-tokens":{nav:"integrations",tab:"api-tokens"},scheduler:{nav:"integrations",tab:"scheduler"},security:{nav:"system",tab:"security"}});let S=Object.create(null);Object.assign(S,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"integrations",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"integrations",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"integrations",tab:"plugins"},mobile:{nav:"system",tab:"system"}});let b={_key:K=>"admin:tab:"+K,get(K){try{return sessionStorage.getItem(this._key(K))||null}catch{return null}},set(K,G){try{G?sessionStorage.setItem(this._key(K),G):sessionStorage.removeItem(this._key(K))}catch{}}};function I(K){let G=(K||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!G)return null;let te=G[1],ne=G[2]||null,z=null;if(!ne){let ie=R[te];typeof ie=="string"?te=ie:ie&&typeof ie=="object"&&(te=ie.nav||te,z=ie.tab||null)}let Q=S[te],Z=te,se=null;if(typeof Q=="string"?Z=Q:Q&&typeof Q=="object"&&(Z=Q.nav||te,se=Q.tab||null),G[1]!==Z&&(I._warned||(I._warned=new Set),!I._warned.has(G[1]))){I._warned.add(G[1]);try{console.info("[admin] legacy route #/"+G[1]+" \u2192 #/"+Z+(ne||se||z?"/"+(ne||se||z):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:Z,tab:ne||se||z,raw:te}}function O(K,G){return G?"#/"+K+"/"+G:"#/"+K}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:S,tabMemory:b,parseHash:I,buildHash:O});var A=window.AdminUtils.loadDetailsState,B=window.AdminUtils.saveDetailsState,h=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:p,bootstrapSection:N};async function c(){try{D=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),g.logged_in&&L()}catch(K){console.error("Get settings failed:",K),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function r(K){return/^#[0-9A-Fa-f]{6}$/.test(K)}function t(K){return r(K)?K:/^[0-9A-Fa-f]{6}$/.test(K)?"#"+K:(K.startsWith("#")||(K="#"+K),r(K)?K:"#38bdf8")}function d(K,G){if(f[K]){let te=parseInt(G);if(isNaN(te)||te<f[K].min||te>f[K].max)return showToast(ServerI18n.t("settingRangeError",{key:K,min:f[K].min,max:f[K].max}),!1),!1}return!0}function e(K,G,te){if(!te||!Array.isArray(D[K]))return;let ne=D[K][G];K==="Color"&&typeof ne=="string"&&(ne=t(`#${ne}`)),ne!=null&&(te.value=String(ne))}let i={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-plugins","sec-widgets"]}};function o(){Object.values(i).forEach(K=>{let G=document.getElementById(K.containerId);G&&K.orderedIds.forEach(te=>{let ne=document.getElementById(te);ne&&ne.parentElement!==G&&G.appendChild(ne)})})}function n(){w&&(w.disconnect(),w=null),o(),w=new MutationObserver(()=>{o()}),w.observe(a,{childList:!0,subtree:!0})}async function l(K,G,te,ne=null){try{if(K==="Color"){if(!r(G)){showToast(ServerI18n.t("colorFormatError"),!1),e(K,te,ne);return}G=G.replace("#","")}else if((K==="Speed"||K==="Opacity"||K==="FontSize")&&!d(K,G)){e(K,te,ne);return}(await C("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:K,value:G,index:te})})).ok?(Array.isArray(D[K])||(D[K]=[!1,"","",""]),D[K][te]=G,showToast(`${K} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await c())}catch(z){console.error("Error:",z),showToast(`Update Error: ${z.message}`,!1),await c()}}async function m(K,G){try{let te=await C("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:K,enabled:G})}),ne=await te.json().catch(()=>({}));if(te.ok)Array.isArray(D[K])||(D[K]=[!1,"","",""]),D[K][0]=G,showToast(`${K} ${ServerI18n.t("settingsUpdated")}`),L();else{let z=document.getElementById(`toggle-${K}`);z&&(z.checked=!G),showToast(ne.error||ServerI18n.t("updateFailed"),!1)}}catch(te){console.error("Error:",te);let ne=document.getElementById(`toggle-${K}`);ne&&(ne.checked=!G),showToast(`Update Error: ${te.message}`,!1)}}let a=document.getElementById("app-container"),s=document.getElementById("toast-container"),u=(K,G=500)=>"requestIdleCallback"in window?window.requestIdleCallback(K,{timeout:G}):setTimeout(K,G);async function v(){let K=parseInt(document.getElementById("historyHours")?.value||"24");try{let[G,te]=await Promise.all([fetch(`/admin/stats/hourly?hours=${K}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${K}&limit=10`,{credentials:"same-origin"})]);if(!G.ok||!te.ok)return;let ne=await G.json(),z=await te.json(),Q=document.getElementById("statsDashboard");if(!Q)return;let Z=ne.distribution||[],se=z.topTexts||[],ie=Math.max(1,...Z.map(ee=>ee.count)),de=Z.reduce((ee,ae)=>ee+(ae.count||0),0),ce=Z.filter(ee=>ee.count>0).length,ke=Z.map(ee=>`<div class="chart-bar" style="height: ${Math.round(ee.count/ie*100)}%" title="${h(ee.hour)}: ${ee.count}"><span class="chart-label">${h(ee.hour.slice(-5,-3))}</span></div>`).join(""),Ee=se.map((ee,ae)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${ae+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${h(ee.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${ee.count}</td></tr>`).join("");Q.innerHTML=`
        <div class="history-dashboard-grid">
          <div class="history-dashboard-card">
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label">${ServerI18n.t("total")}</span>
              <strong class="history-dashboard-value">${de}</strong>
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
            <div class="stats-chart">${ke||`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${se.length?`<table class="w-full text-xs"><tbody>${Ee}</tbody></table>`:`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
          </div>
        </div>`}catch(G){console.error("Load stats error:",G)}}window._loadStats=v,window.csrfFetch=C,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=a,window.__adminCtx.getSettings=()=>D;function E(){a&&(a.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function _(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():E()}function L(){let K=A(),G=(ce,ke=!1)=>K[ce]!==void 0?K[ce]:ke,te=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(ce=>Array.isArray(D[ce])&&D[ce][0]===!0).length,ne=D.Layout&&D.Layout[3]?h(String(D.Layout[3]).replace(/_/g," ")):"scroll",z=D.FontFamily&&D.FontFamily[3]?h(String(D.FontFamily[3])):"NotoSansTC",Q=ce=>ce.map(ke=>`<span style="height:${ke*10}%;opacity:${.3+ke*.08}"></span>`).join(""),Z=ne&&ne!=="off",se=window.location.port||(window.location.protocol==="https:"?"443":"80");a.innerHTML=`
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
                                         aria-label="${h(ServerI18n.t("adminSearchHint"))}"
                                         title="${h(ServerI18n.t("adminSearchHint"))} \u2318K">
                                        <span aria-hidden="true">\u2315</span>
                                    </button>
                                    <!-- \u8A2D\u8A08\u7A3F 15 \xB7 HD1\uFF1A\u8AAA\u660E\u62BD\u5C5C\u7531\u300C?\u300D\u6309\u9215\u958B\u3002
                                         \u5728\u9019\u4E4B\u524D\u62BD\u5C5C\u53EA\u6709\u9375\u76E4\uFF08F1\uFF09\u80FD\u958B\uFF0C\u7B49\u65BC\u5C0D\u6ED1\u9F20\u4F7F\u7528\u8005
                                         \u4E0D\u5B58\u5728\u3002\u9375\u76E4\u7684 ? \u5DF2\u6539\u6210\u53EB\u300C\u5FEB\u901F\u9375\u4E00\u89BD\u300D\uFF08KS1\uFF09\u3002 -->
                                    <button class="admin-dash-search is-icon-only" type="button" data-open-help
                                         aria-label="${h(ServerI18n.t("helpDrawerTitle"))}"
                                         title="${h(ServerI18n.t("helpDrawerTitle"))} F1">
                                        <span aria-hidden="true">?</span>
                                    </button>
                                    <!-- \u8AA0\u5BE6\u7684\u72C0\u614B\u71C8\uFF0B\u6377\u5F91\uFF1A\u5B83\u662F\u5C0E\u822A\uFF08\u524D\u5F80\u986F\u793A\u5C64\u9801\uFF09\uFF0C
                                         \u4E0D\u662F\u958B\u95DC\u3002 -->
                                    <button class="admin-dash-broadcast ${Z?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${h(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${h(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 ${h(Z?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}
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
                `;let ie=document.getElementById("settings-grid"),de=D.Effects?D.Effects[0]!==!1:!0;ie.insertAdjacentHTML("beforeend",`
      <div id="sec-effects" class="admin-ui-group admin-master-toggle admin-master-toggle--slim lg:col-span-2">
        <div class="admin-ui-group-row is-tall admin-master-toggle__row">
          <span class="lbl">${ServerI18n.t("effectsSetting")}
            <span class="sub admin-master-toggle__state" data-on="${de}">${de?ServerI18n.t("effectsEnabledMsg"):ServerI18n.t("effectsDisabledMsg")}</span>
          </span>
          <span class="admin-master-toggle__spacer"></span>
          <div class="relative inline-block w-12 align-middle select-none transition duration-200 ease-in flex-shrink-0">
            <input type="checkbox" name="Effects" id="toggle-Effects" role="switch" aria-checked="${de}" aria-label="Toggle ${ServerI18n.t("effectsSetting")}" class="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer" ${de?"checked":""} />
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
            <span class="lbl">${h(ServerI18n.t("themeDetailFont"))}</span>
            <span class="val">
              <select class="admin-ui-input" data-theme-ov="font_family" id="themeOvFont"></select>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${h(ServerI18n.t("themeDetailStroke"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="stroke">
              <button type="button" data-theme-opt="none">${h(ServerI18n.t("themeStrokeNone"))}</button>
              <button type="button" data-theme-opt="thin">${h(ServerI18n.t("themeStrokeThin"))}</button>
              <button type="button" data-theme-opt="thick">${h(ServerI18n.t("themeStrokeThick"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${h(ServerI18n.t("themeDetailShadow"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="shadow">
              <button type="button" data-theme-opt="none">${h(ServerI18n.t("themeShadowNone"))}</button>
              <button type="button" data-theme-opt="soft">${h(ServerI18n.t("themeShadowSoft"))}</button>
              <button type="button" data-theme-opt="strong">${h(ServerI18n.t("themeShadowStrong"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${h(ServerI18n.t("themeDetailColor"))}
              <span class="sub">${h(ServerI18n.t("themeDetailColorHint"))}</span>
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
    `),u(U),ie.insertAdjacentHTML("beforeend",`
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
    `),W(),n(),u(J),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),P(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let ke=document.querySelector("[data-telem-bars]");if(!ke)return;let Ee=document.querySelector("[data-telem-status]"),ee={cpu:100,mem:100,ws:100,rate:50};function ae(re,ve,fe,Se,_e){let H=ke.querySelector(`[data-telem-fill="${re}"]`),V=ke.querySelector(`[data-telem-value="${re}"]`);H&&(H.style.width=Math.max(0,Math.min(100,ve))+"%",H.classList.toggle("is-warn",!Se)),V&&(V.textContent=fe);let Y=ke.querySelector(`[data-telem-row="${re}"]`);Y&&_e&&Y.setAttribute("title",_e)}function oe(re,ve){if(!ve||ve<=0)return Math.round(re)+" MB used";if(ve>=1024){let fe=(re/1024).toFixed(1),Se=(ve/1024).toFixed(1);return`${fe} / ${Se} GB used`}return`${Math.round(re)} / ${Math.round(ve)} MB used`}async function me(){try{let re=await fetch("/admin/metrics",{credentials:"same-origin"});if(!re.ok)return;let ve=await re.json(),fe=ve.cpu_series||[],Se=ve.mem_series||[],_e=ve.mem_mb_series||[],H=ve.ws_series||[],V=ve.rate_series||[],Y=he=>he.length?he[he.length-1]:0,X=Number(Y(fe)||0),le=Number(Y(Se)||0),ue=Number(Y(_e)||0),pe=Number(ve.mem_total_mb||0),ge=Number(Y(H)||ve.ws_clients||0),be=Number(Y(V)||0)/60;if(ae("cpu",X,`${X.toFixed(0)}%`,X<90),ae("mem",le,`${le.toFixed(0)}%`,le<90,oe(ue,pe)),ae("ws",ge/ee.ws*100,String(ge),ge<100),ae("rate",be/ee.rate*100,`${be.toFixed(1)}/s`,be<40),Ee){let he=X>=90||le>=90||be>=40;Ee.textContent=he?"\u25CF BUSY":"\u25CF HEALTHY",Ee.classList.toggle("is-warn",he)}}catch{}}setTimeout(me,4e3),setInterval(me,5e3)})()}let M={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},integrations:{title:"\u64F4\u5145",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"]},firetoken:{title:"Fire Token",kicker:"ADMIN LANE \xB7 FIRE TOKEN \xB7 \u7528\u91CF / IP / AUDIT",sections:["sec-firetoken-overview"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},backup:{title:"\u5099\u4EFD\u8207\u9084\u539F",kicker:"BACKUP \xB7 EXPORT \xB7 DANGER",sections:["admin-backup-v2-page","sec-timeline-export"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=M;function P(){let K=document.querySelector(".admin-dash-grid");if(!K)return;let G="dashboard",te=null;function ne(re){return i.moderation.orderedIds.indexOf(re)!==-1?"moderation-grid":i.assets.orderedIds.indexOf(re)!==-1?"assets-grid":re==="sec-scheduler"||re==="sec-webhooks"?"sec-advanced":"settings-grid"}function z(){let re=K.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),ve=K.querySelector("[data-route-note]"),fe=K.querySelector("[data-route-action]");if(fe&&Array.prototype.slice.call(fe.children).forEach(Y=>{Y._adminHomeHead?Y._adminHomeHead.appendChild(Y):Y.remove()}),!re)return;let Se=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(G)),_e=Array.prototype.slice.call(K.querySelectorAll(".admin-ui-page-head"));_e.forEach(Y=>Y.classList.remove("is-merged-into-topbar"));let H=(M[G]?.title||"").trim().replace(/\s+/g," "),V=null;_e.forEach(Y=>{let X=Y.querySelector(".admin-ui-page-title"),le=X&&X.textContent.trim().replace(/\s+/g," ");if(le&&(Se||le===re||le===H)){if(Y.offsetParent!==null){V===null&&(V=Y.querySelector(".admin-ui-page-note")?.innerHTML||"");let pe=Y.querySelector(".admin-ui-page-actions");pe&&fe&&!fe.children.length&&(pe._adminHomeHead=Y,fe.appendChild(pe))}Y.classList.add("is-merged-into-topbar")}}),ve&&(ve.innerHTML=V||"",ve.hidden=!V)}function Q(){let re=M[G],ve=new Set((re.sections||[]).map(ne)),fe=Se=>Se.id==="sec-advanced"?Array.from(Se.querySelectorAll('[id^="sec-"]')).some(_e=>getComputedStyle(_e).display!=="none"):Array.from(Se.children).some(_e=>getComputedStyle(_e).display!=="none");K.querySelectorAll(".admin-route-sections").forEach(Se=>{if(!(Se.id==="sec-advanced"?ve.has("sec-advanced"):ve.has(Se.id))){Se.style.display="none";return}Se.style.display="",Se.style.display=fe(Se)?"":"none"})}let Z=()=>{let re=M[G],ve=new Set(re.sections);K.querySelectorAll('[id^="sec-"]').forEach(fe=>{if(fe.id){if(fe.id==="sec-advanced"){let Se=Array.from(fe.querySelectorAll('[id^="sec-"]')).some(_e=>ve.has(_e.id));fe.style.display=Se?"":"none";return}fe.style.display=ve.has(fe.id)?"":"none"}}),te&&window.AdminTabs?.hasTabsFor?.(G)&&window.AdminTabs.applyTabSectionVisibility(G,te,K),Q(),z()},se={system:{nav:"system",tab:"overview"},backup:{nav:"backup"},integrations:{nav:"integrations"},"api-tokens":{nav:"integrations",tab:"api-tokens"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},scheduler:{nav:"integrations",tab:"scheduler"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}},ie=(re,ve,fe)=>{if(fe=fe||re,!M[re]){let Te=R[re];if(typeof Te=="string")re=Te;else if(Te&&typeof Te=="object")Te.nav&&(re=Te.nav),!ve&&Te.tab&&(ve=Te.tab);else{let $e=S[re];typeof $e=="string"?re=$e:$e&&typeof $e=="object"&&($e.nav&&(re=$e.nav),!ve&&$e.tab&&(ve=$e.tab))}}if(re==="system"&&ve&&se[ve]){let Te=se[ve];re=Te.nav,ve=Te.tab||null,fe=re}G=M[re]?re:"live",K.dataset.activeRoute=G;let Se;window.AdminTabs?.hasTabsFor?.(G)?Se=window.AdminTabs.resolveActiveTab(G,ve):Se=null;let _e=fe&&fe!==G?"#/"+fe:window.AdminRouter?.buildHash?window.AdminRouter.buildHash(G,Se):"#/"+G;if(window.location.hash!==_e){try{history.replaceState(null,"",_e)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let H=M[G],V=Array.from(K.querySelectorAll(".admin-dash-nav-row[data-route]")),Y=fe!==G?V.find(Te=>Te.dataset.route===fe):null;V.forEach(Te=>{let $e=Y?Te===Y:Te.dataset.route===G;Te.classList.toggle("is-active",$e),Te.setAttribute("aria-selected",$e?"true":"false")});let X=K.querySelector("[data-route-kicker]"),le=K.querySelector("[data-route-title]");var ue=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(Te){return Te},pe="adminRouteTitle_"+G,ge="adminRouteKicker_"+G,be=ue(pe),he=ue(ge);X&&(X.textContent=he!==ge?he:H.kicker),le&&(le.textContent=be!==pe?be:H.title);let Ie=G==="dashboard"||G==="live";K.querySelectorAll('[data-route-view="dashboard"]').forEach(Te=>{Te.style.display=Ie?"":"none"}),Ie?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),te=Se,Se&&window.AdminRouter?.tabMemory?.set?.(G,Se),K.dataset.activeLeaf=Se||G,Z(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:G,leaf:Se}})),Q(),z(),ce(G,Se),de(fe,G,Se);try{history.replaceState(null,"",_e)}catch{}};function de(re,ve,fe){window.AdminBreadcrumb?.render(K,re,ve,fe)}function ce(re,ve){let fe=K.querySelector("[data-admin-tabs-host]");if(!fe){let Se=K.querySelector(".admin-dash-topbar");if(!Se)return;fe=document.createElement("div"),fe.dataset.adminTabsHost="",Se.insertAdjacentElement("afterend",fe)}if(fe.innerHTML="",window.AdminTabs?.hasTabsFor?.(re)&&ve){fe.hidden=!1;let Se=window.AdminTabs.renderTabStrip(re,ve,{onSelect:_e=>ie(re,_e)});Se&&fe.appendChild(Se),fe.classList.remove("admin-tabs-host--accordion");return}fe.classList.remove("admin-tabs-host--accordion"),fe.hidden=!0}x&&window.removeEventListener("hashchange",x),x=()=>{let re=I(window.location.hash),ve=(window.location.hash||"").match(/^#\/([\w-]+)/),fe=ve?ve[1]:null;re&&ie(re.nav,re.tab,fe||re.raw)},window.addEventListener("hashchange",x),K.querySelectorAll("[data-route]").forEach(re=>{re.addEventListener("click",ve=>{ve.preventDefault(),ie(re.dataset.route)})});let ke=I(window.location.hash),Ee=(window.location.hash||"").match(/^#\/([\w-]+)/),ee=Ee?Ee[1]:ke?.raw||ke?.nav||"live";ie(ke?.nav||"live",ke?.tab||null,ee),window._adminNavigateTo=()=>ie(G,te);let ae=!1;function oe(){if(ae)return;ae=!0;let re=()=>{ae=!1,Z(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:G,leaf:te}}))};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?requestAnimationFrame(re):setTimeout(re,0)}let me=K.querySelector(".admin-dash-main");me&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{oe()}).observe(me,{childList:!0,subtree:!0}),oe())}function W(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let K=document.querySelector("[data-open-help]");K&&K.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let G=document.querySelector("[data-open-palette]");if(G){let ne=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};G.addEventListener("click",ne),G.addEventListener("keydown",z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),ne())})}let te=document.getElementById("logoutButton");te&&te.addEventListener("click",async()=>{try{let ne=await C("/logout",{method:"POST"});ne.redirected&&(window.location.href=ne.url),showToast(ServerI18n.t("logoutSuccess"))}catch(ne){console.error("Logout Failed:",ne),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(ne=>{ne.name&&ne.addEventListener("change",async function(){let z=this.name,Q=this.checked;await m(z,Q)})}),document.querySelectorAll("details[id^='sec-']").forEach(ne=>{ne.addEventListener("toggle",()=>{let z=A();z[ne.id]=ne.open,B(z)})}),document.querySelectorAll(".setting-input").forEach(ne=>{ne.addEventListener("change",async function(){let z=this.dataset.key,Q=parseInt(this.dataset.index),Z=this.value;this.type==="number"&&(Z=parseInt(Z)),await l(z,Z,Q,this)})})}function T(){if(g.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}L()}else _()}async function q(){await c(),T(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function U(){window.AdminThemes&&window.AdminThemes.init()}function J(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{w&&(w.disconnect(),w=null)}),q()})});var ut=ye(()=>{(function(){"use strict";var y=null;async function k(){var p=(document.getElementById("pollQuestion")?.value||"").trim(),N=document.querySelectorAll(".poll-option-input"),D=Array.from(N).map(function(R){return R.value.trim()}).filter(Boolean);if(!p){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(D.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var w=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:p,options:D})}),x=await w.json();if(!w.ok){window.showToast(x.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),F(x),C()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function g(){try{var p=await window.csrfFetch("/admin/poll/end",{method:"POST"}),N=await p.json();if(!p.ok){window.showToast(N.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),F(N),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function f(){try{var p=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),N=await p.json();if(!p.ok){window.showToast(N.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),F(N),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function C(){y&&(clearInterval(y),y=null);var p=async function(){try{var N=await fetch("/admin/poll/status",{credentials:"same-origin"});if(N.ok){var D=await N.json();F(D),D.state!=="active"&&y&&(clearInterval(y),y=null)}}catch{}};p(),y=setInterval(p,2e3)}function j(){var p=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var N=document.querySelector('#sec-polls [data-poll-action="add"]');N&&N.click()},extra:`
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
      </div>`});return p.dataset.emptyKind="poll",p}function F(p){var N=document.getElementById("pollStatusDisplay");if(N){if(N.textContent="",!p||p.state==="idle"){N.appendChild(j());return}var D=p.total_votes||0,w=Math.max(1,...p.options.map(function(A){return A.count})),x=document.createElement("div");x.className="admin-poll-status-card";var R=document.createElement("div");R.className="admin-poll-status-header";var S=document.createElement("span");S.className="admin-poll-status-dot"+(p.state==="active"?" is-active":" is-ended"),R.appendChild(S);var b=document.createElement("span");b.className="admin-poll-status-question",b.textContent=p.question||"",R.appendChild(b);var I=document.createElement("span");I.className="admin-poll-status-state",I.textContent=p.state,R.appendChild(I),x.appendChild(R),p.options.forEach(function(A){var B=document.createElement("div");B.className="admin-poll-status-row";var h=document.createElement("div");h.className="admin-poll-status-label";var c=document.createElement("span"),r=document.createElement("b");r.textContent=A.key+".",c.appendChild(r),c.appendChild(document.createTextNode(" "+A.text));var t=document.createElement("span");t.textContent=A.count+" ("+A.percentage+"%)",h.appendChild(c),h.appendChild(t);var d=document.createElement("div");d.className="admin-poll-status-bar";var e=document.createElement("div");e.className="admin-poll-status-bar-fill",e.style.width=A.count/w*100+"%",d.appendChild(e),B.appendChild(h),B.appendChild(d),x.appendChild(B)});var O=document.createElement("div");O.className="admin-poll-status-footer",O.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",D),x.appendChild(O),N.appendChild(x)}}function $(){var p=document.getElementById("sec-polls");if(p&&p.dataset.pollLegacyBound!=="1"){p.dataset.pollLegacyBound="1";var N=document.getElementById("pollCreateBtn");N&&N.addEventListener("click",k);var D=document.getElementById("pollEndBtn");D&&D.addEventListener("click",g);var w=document.getElementById("pollResetBtn");w&&w.addEventListener("click",f);var x=document.getElementById("pollAddOptionBtn");x&&x.addEventListener("click",function(){var b=document.getElementById("pollOptionsContainer");if(b){var I=b.querySelectorAll(".poll-option-input").length;if(I>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var O=document.createElement("input");O.type="text",O.className="poll-option-input admin-ui-input",O.placeholder=String.fromCharCode(65+I)+". Option "+(I+1),O.maxLength=100,b.appendChild(O)}});var R=document.getElementById("pollRemoveOptionBtn");R&&R.addEventListener("click",function(){var b=document.getElementById("pollOptionsContainer");if(b){var I=b.querySelectorAll(".poll-option-input");if(I.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}I[I.length-1].remove()}});var S=p;S&&(S.addEventListener("toggle",function(){S.open&&C()}),C()),window.addEventListener("beforeunload",function(){y&&(clearInterval(y),y=null)})}}document.addEventListener("admin-panel-rendered",function(){$()}),document.addEventListener("DOMContentLoaded",function(){$()}),window.addEventListener("hashchange",function(){var p=window.location.hash||"";p.indexOf("/polls")!==-1&&$()})})()});var mt=ye(()=>{(function(){"use strict";async function y(){try{let C=await fetch("/admin/blacklist/get",{method:"GET",credentials:"same-origin"});if(!C.ok){let N=await C.json();showToast(ServerI18n.t("errorFetchingBlacklist").replace("{error}",N.error||C.statusText),!1);return}let j=await C.json(),F=document.getElementById("blacklistKeywords");F.innerHTML="";let $=document.getElementById("modBlacklistCount");$&&($.textContent=`${j.length} words`);let p=document.querySelector('[data-mod-stat="banned"]');p&&(p.textContent=j.length),j.length===0?F.innerHTML=`<div style="padding:12px 0;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${ServerI18n.t("noKeywordsYet")}</div>`:j.forEach(N=>{let D=document.createElement("div");D.className="hud-banned-row";let w=document.createElement("span");w.style.cssText="color: var(--color-ink-error);font-family:var(--font-mono);font-size:13px",w.textContent="\u2298";let x=document.createElement("span");x.style.cssText="flex:1;min-width:0;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all",x.textContent=N;let R=document.createElement("button");R.className="removeKeywordBtn",R.type="button",R.style.cssText="background:transparent;border:none;color: var(--color-ink-accent);font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;cursor:pointer;padding:2px 4px",R.textContent="UNBAN",R.setAttribute("data-keyword",N),D.appendChild(w),D.appendChild(x),D.appendChild(R),F.appendChild(D)})}catch(C){console.error("Fetch blacklist error:",C),showToast(ServerI18n.t("fetchBlacklistError"),!1)}}async function k(){let C=document.getElementById("newKeywordInput"),j=C.value.trim();if(!j){showToast(ServerI18n.t("keywordEmpty"),!1);return}try{let F=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:j})}),$=await F.json();F.ok?(C.value="",y(),window.AdminQuickAction?window.AdminQuickAction.fire({label:$.message||ServerI18n.t("histToastBlacklisted",{keyword:j}),undo:{label:ServerI18n.t("histUndo"),run:async()=>{if(!(await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:j})})).ok)throw new Error("remove failed");y()}}}):showToast($.message||"Keyword added.",!0)):showToast($.error||"Failed to add keyword.",!1)}catch(F){console.error("Add keyword error:",F),showToast(ServerI18n.t("addKeywordError"),!1)}}async function g(C){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("histRemoveKwTitle"),subtitle:ServerI18n.t("cfmSubRemoveKeyword"),severity:"warn",bodyText:ServerI18n.t("confirmRemoveKeyword").replace("{keyword}",C),confirmLabel:ServerI18n.t("histRemoveKwConfirm")}))try{let F=await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:C})}),$=await F.json();F.ok?(showToast($.message||"Keyword removed.",!0),y()):showToast($.error||"Failed to remove keyword.",!1)}catch(F){console.error("Remove keyword error:",F),showToast(ServerI18n.t("removeKeywordError"),!1)}}function f(){let C=document.getElementById("addKeywordBtn");C&&C.addEventListener("click",k);let j=document.getElementById("newKeywordInput");j&&j.addEventListener("keypress",function($){($.key==="Enter"||$.keyCode===13)&&($.preventDefault(),k())});let F=document.getElementById("blacklistKeywords");F&&F.addEventListener("click",function($){let p=$.target.closest(".removeKeywordBtn");if(p){let N=p.dataset.keyword;N&&g(N)}})}document.addEventListener("admin-panel-rendered",function(){y(),f()}),window.AdminHistory={fetchBlacklist:y}})()});var pt=ye(()=>{(function(){"use strict";var y="sec-timeline-export",k="danmu.adminHistoryExports.v1",g=10,f={rawText:!0,polls:!0,masked:!1,metadata:!0},C=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],j=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],F={range:"24h",filters:Object.assign({},f),format:"JSON"};function $(){return document.getElementById(y)}function p(){try{return JSON.parse(localStorage.getItem(k)||"[]")}catch{return[]}}function N(v){try{localStorage.setItem(k,JSON.stringify(v.slice(0,g)))}catch{}}function D(v){var E=p();E.unshift(v),N(E)}function w(v){return v?v<1024?v+" B":v<1024*1024?(v/1024).toFixed(1)+" KB":(v/1024/1024).toFixed(1)+" MB":"0 B"}function x(v){try{var E=new Date(v),_=new Date,L=E.toDateString()===_.toDateString();if(L)return ServerI18n.t("historyV2TodayAt",{time:String(E.getHours()).padStart(2,"0")+":"+String(E.getMinutes()).padStart(2,"0")});var M=new Date(_);return M.setDate(_.getDate()-1),E.toDateString()===M.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(E.getHours()).padStart(2,"0")+":"+String(E.getMinutes()).padStart(2,"0")}):E.getMonth()+1+"-"+String(E.getDate()).padStart(2,"0")+" "+String(E.getHours()).padStart(2,"0")+":"+String(E.getMinutes()).padStart(2,"0")}catch{return v||""}}function R(v){if(v==="1h")return 1;if(v==="24h")return 24;if(v==="7d")return 168;if(v==="today"){var E=new Date,_=new Date(E.getFullYear(),E.getMonth(),E.getDate());return Math.max(1,Math.ceil((E-_)/36e5))}return v==="yest"?48:v==="live"?6:24}function S(v){return v.filter(function(E){return!(!F.filters.rawText&&!E.is_poll&&!E.muted&&!E.banned||!F.filters.polls&&E.is_poll||!F.filters.masked&&(E.muted||E.banned))}).map(function(E){if(!F.filters.metadata){var _=Object.assign({},E);return delete _.clientIp,delete _.fingerprint,_}return E})}function b(v){var E=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],_=function(P){var W=P==null?"":String(P);return W.indexOf(",")>=0||W.indexOf('"')>=0||W.indexOf(`
`)>=0?'"'+W.replace(/"/g,'""')+'"':W},L=function(P){return P.status?P.status:P.banned?"banned":P.muted?"muted":P.is_poll?"poll":"ok"},M=v.map(function(P){return[P.timestamp||"",P.nickname||"",P.text||"",P.color?"#"+P.color:"",P.size!=null?P.size:"",P.speed!=null?P.speed:"",P.opacity!=null?P.opacity:"",P.isImage?"true":"false",P.fontInfo&&P.fontInfo.name||"",P.clientIp||"",P.fingerprint||"",L(P),P.delivery_reason||""].map(_).join(",")});return[E.join(","),M.join(`\r
`)].filter(Boolean).join(`\r
`)}function I(v){return v.map(function(E,_){var L=new Date(E.timestamp||Date.now()),M=O(L),P=O(new Date(L.getTime()+3e3)),W=(E.nickname?"["+E.nickname+"] ":"")+(E.text||"");return _+1+`
`+M+" --> "+P+`
`+W+`
`}).join(`
`)}function O(v){var E=function(_,L){return String(_).padStart(L||2,"0")};return E(v.getHours())+":"+E(v.getMinutes())+":"+E(v.getSeconds())+","+E(v.getMilliseconds(),3)}function A(v,E){var _=URL.createObjectURL(v),L=document.createElement("a");L.href=_,L.download=E,L.click(),URL.revokeObjectURL(_)}function B(){var v=R(F.range),E=document.getElementById("histv2-go");E&&(E.disabled=!0,E.dataset.busy="1"),fetch("/admin/history?hours="+v+"&limit=10000",{credentials:"same-origin"}).then(function(_){if(!_.ok)throw new Error("http "+_.status);return _.json()}).then(function(_){var L=_&&_.records||[],M=S(L);if(M.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var P=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),W,T;if(F.format==="JSON"){var q=JSON.stringify(M,null,2);T=new Blob([q],{type:"application/json"}),W="danmu-history-"+P+".json"}else F.format==="CSV"?(T=new Blob(["\uFEFF"+b(M)],{type:"text/csv;charset=utf-8;"}),W="danmu-history-"+P+".csv"):(T=new Blob([I(M)],{type:"application/x-subrip;charset=utf-8;"}),W="danmu-history-"+P+".srt");A(T,W),D({name:W,fmt:F.format,size:T.size,when:new Date().toISOString(),count:M.length}),c(),h(M.length,T.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:M.length}),!0)}).catch(function(_){console.error("[history-v2] export failed",_),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:_.message||_}),!1)}).finally(function(){E&&(E.disabled=!1,delete E.dataset.busy)})}function h(v,E){var _=document.getElementById("histv2-estimate");_&&(_.textContent=ServerI18n.t("historyV2Estimate",{count:v||"\u2014",size:E?w(E):"\u2014 MB"}))}function c(){var v=document.getElementById("histv2-recent-list");if(v){var E=p();if(E.length===0){v.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}v.innerHTML=E.map(function(_){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+_.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+r(_.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+r(x(_.when))+" \xB7 "+w(_.size)+"</div></div></div>"}).join("")}}function r(v){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(v):v==null?"":String(v).replace(/[&<>"']/g,function(E){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[E]})}function t(){return C.map(function(v){var E=F.range===v.k;return'<button type="button" class="histv2-chip'+(E?" is-active":"")+'" data-histv2-range="'+v.k+'">'+r(ServerI18n.t(v.labelKey))+(v.k==="live"?" \xB7 "+d():"")+"</button>"}).join("")}function d(){var v=new Date;return String(v.getHours()).padStart(2,"0")+":"+String(v.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function e(){var v=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return v.map(function(E){var _=!!F.filters[E.k];return'<button type="button" class="histv2-toggle'+(_?" is-on":"")+'" data-histv2-toggle="'+E.k+'"><span class="histv2-toggle-mark">'+(_?"\u2713":"\u25CB")+"</span><span>"+r(ServerI18n.t(E.labelKey))+"</span></button>"}).join("")}function i(){return j.map(function(v){var E=F.format===v.k;return'<button type="button" class="histv2-fmt'+(E?" is-selected":"")+'" data-histv2-fmt="'+v.k+'">'+(E?'<span class="histv2-fmt-check">\u2713</span>':"")+(v.badge?'<span class="histv2-fmt-badge">'+r(v.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+v.k+'</div><div class="histv2-fmt-desc">'+r(v.desc)+"</div></button>"}).join("")}function o(){var v=$();v&&(v.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+t()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+e()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+i()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",v.addEventListener("click",n),c(),s())}function n(v){var E=v.target.closest("[data-histv2-range]");if(E){F.range=E.dataset.histv2Range,l(),s();return}var _=v.target.closest("[data-histv2-toggle]");if(_){var L=_.dataset.histv2Toggle;F.filters[L]=!F.filters[L],m(),s();return}var M=v.target.closest("[data-histv2-fmt]");if(M){F.format=M.dataset.histv2Fmt,a(),s();return}var P=v.target.closest("#histv2-go");if(P&&!P.dataset.busy){B();return}}function l(){var v=document.getElementById("histv2-chips");v&&(v.innerHTML=t())}function m(){var v=document.getElementById("histv2-toggles");v&&(v.innerHTML=e())}function a(){var v=document.getElementById("histv2-formats");v&&(v.innerHTML=i())}function s(){s._t&&clearTimeout(s._t),s._t=setTimeout(function(){var v=R(F.range);fetch("/admin/history?hours="+v+"&limit=10000",{credentials:"same-origin"}).then(function(E){return E.ok?E.json():null}).then(function(E){if(!E)return h(0,0);var _=S(E&&E.records||[]),L=F.format==="JSON"?220:F.format==="CSV"?110:80;h(_.length,_.length*L)}).catch(function(){h(0,0)})},250)}function u(){var v=$(),E=document.getElementById("admin-backup-v2-page");if(!v){var _=document.getElementById("settings-grid");if(!_)return;v=document.createElement("div"),v.id=y,v.className="admin-ui-card lg:col-span-2 history-v2-section",_.appendChild(v),o()}E&&E.parentElement&&v.previousElementSibling!==E&&E.parentElement.insertBefore(v,E.nextSibling)}document.addEventListener("admin-panel-rendered",u),document.addEventListener("admin-route-applied",u),window.AdminHistoryV2={refresh:s,state:F}})()});var vt=ye(()=>{(function(){"use strict";let y="admin-replay-bar";function k(){let f=document.getElementById(y);return f||(document.body?(f=document.createElement("div"),f.id=y,f.className="admin-replay-bar",f.hidden=!0,f.setAttribute("role","status"),f.setAttribute("aria-live","polite"),f.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(f,document.body.firstChild),f):null)}function g(f){let C=k();C&&(C.hidden=!f)}window.AdminReplayBar={ensure:k,setActive:g},document.addEventListener("admin-panel-rendered",k)})()});var ft=ye(()=>{(function(){"use strict";let y=null;function k(x){window.AdminReplayBar&&window.AdminReplayBar.ensure();let R=document.getElementById("replayPauseBtn"),S=document.getElementById("replayResumeBtn"),b=document.getElementById("replayStopBtn"),I=document.getElementById("replayProgress"),O=(h,c)=>{h&&h.classList.toggle("hidden",!c)},A=x==="playing",B=x==="paused";O(R,A),O(S,B),O(b,A||B),O(I,A||B),!A&&!B&&I&&(I.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(A||B)}function g(){y&&clearInterval(y),y=setInterval(async()=>{try{let x=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!x.ok)return;let R=await x.json(),S=document.getElementById("replayProgress");S&&(S.textContent=ServerI18n.t("replayingProgress").replace("{sent}",R.sent).replace("{total}",R.total)),k(R.state),R.state==="stopped"&&(clearInterval(y),y=null)}catch{}},500)}async function f(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),k("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function C(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),k("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function j(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),k("stopped"),y&&(clearInterval(y),y=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let F=null,$=null,p=0,N=null;function D(){[["replayPauseBtn",f],["replayResumeBtn",C],["replayStopBtn",j]].forEach(function([R,S]){let b=document.getElementById(R);b&&!b.dataset.replayCtrlsBound&&(b.addEventListener("click",S),b.dataset.replayCtrlsBound="1")})}async function w(){try{let x=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!x.ok)return;let R=await x.json();(R.state==="playing"||R.state==="paused")&&(k(R.state),g())}catch{}}window.AdminReplayControls={notifyStarted:function(){k("playing"),g()}},document.addEventListener("admin-panel-rendered",function(){D(),w()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(D,800)})})()});var ht=ye(()=>{(function(){"use strict";let y="sec-ratelimit",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(F){return String(F).replace(/[&<>"']/g,function($){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[$]})},g=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function f(){return`
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
          ${g.map(F=>`
            <div class="admin-ratelimit-row" data-rl-key="${F.key}">
              <div class="admin-ratelimit-row-head">
                <span class="admin-ratelimit-row-label">${k(ServerI18n.t(F.labelKey))}</span>
                <span class="admin-ratelimit-row-env">${F.envLimit}</span>
              </div>
              <div class="admin-ratelimit-row-body">
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLimit")}</span>
                  <input type="number" min="1" max="1000" value="${F.defLimit}" data-rl-limit="${F.key}" />
                </label>
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldWindow")}</span>
                  <select data-rl-window="${F.key}">
                    <option value="10"${F.defWindow===10?" selected":""}>10s</option>
                    <option value="30"${F.defWindow===30?" selected":""}>30s</option>
                    <option value="60"${F.defWindow===60?" selected":""}>60s</option>
                    <option value="300"${F.defWindow===300?" selected":""}>5 min</option>
                    <option value="3600"${F.defWindow===3600?" selected":""}>1 hr</option>
                  </select>
                </label>
                ${F.key==="login"?`
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLockout")}</span>
                  <input type="number" min="60" max="86400" value="${F.defLockout}" data-rl-lockout="${F.key}" title="${ServerI18n.t("ratelimitLockoutFieldTitle")}" />
                </label>`:""}
                <div class="admin-ratelimit-field admin-ratelimit-bar-field">
                  <span>${ServerI18n.t("ratelimitFieldCurrentUsage")}</span>
                  <div class="admin-ratelimit-bar">
                    <div class="admin-ratelimit-bar-fill" data-rl-bar="${F.key}" style="width:18%"></div>
                  </div>
                  <span class="admin-ratelimit-bar-text" data-rl-current="${F.key}">\u2014</span>
                </div>
                <div class="admin-ratelimit-field admin-ratelimit-save-field">
                  <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save" data-rl-save="${F.key}" title="${ServerI18n.t("ratelimitApplyBtnTitle")}">${ServerI18n.t("ratelimitApplyBtn")}</button>
                </div>
              </div>
              <div class="admin-ratelimit-row-foot">
                <svg class="admin-ratelimit-sparkline" data-rl-spark="${F.key}" viewBox="0 0 96 24" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points="" fill="none" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <span class="admin-ratelimit-effective" data-rl-effective="${F.key}">
                  effective_rate = ${F.defLimit} / ${F.defWindow}s = ${(F.defLimit/F.defWindow).toFixed(2)} req/s \xB7 burst = ${Math.round(F.defLimit*1.5)}${F.key==="login"?" \xB7 lock = "+F.defLockout+"s":""}
                </span>
              </div>
              <div class="admin-ratelimit-suggest" data-rl-suggest="${F.key}" hidden>
                <span class="admin-ratelimit-suggest-icon" aria-hidden="true">\u25B2</span>
                <span class="admin-ratelimit-suggest-body">
                  <span class="admin-ratelimit-suggest-title">${ServerI18n.t("ratelimitSuggestTitle")}</span>
                  <span class="admin-ratelimit-suggest-detail" data-rl-suggest-detail>\u2014</span>
                </span>
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest" data-rl-apply="${F.key}">${ServerI18n.t("ratelimitApplySuggestBtn")}</button>
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
      </div>`}function C(F){let $=F.querySelector("#rlEnvExport");setTimeout(async()=>{try{let c=window.AdminBootstrap;c&&typeof c.primeBootstrap=="function"&&await c.primeBootstrap();let r=c&&c.bootstrapSection?c.bootstrapSection("history_stats"):null,t=c&&c.bootstrapSection?c.bootstrapSection("blacklist"):null,d=c&&c.bootstrapSection?c.bootstrapSection("metrics"):null,e=[];e.push(r?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),e.push(t?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),e.push(d?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[i,o,n]=await Promise.all(e),l=r||(i&&i.ok?await i.json():null);if(l){let E=l.stats&&l.stats.last_24h||0,_=l.stats&&l.stats.total||0,L=F.querySelector("[data-rl-sum-hits]"),M=F.querySelector("[data-rl-sum-hits-delta]");L&&(L.textContent=E.toLocaleString()),M&&(M.textContent=ServerI18n.t("ratelimitSumTotal",{n:_.toLocaleString()}))}let m=t||(o&&o.ok?await o.json():null);if(m){let E=Array.isArray(m)?m:m.entries||m.keywords||[],_=F.querySelector("[data-rl-sum-black]");_&&(_.textContent=E.length?ServerI18n.t("ratelimitCountUnit",{n:E.length}):"0")}let a=F.querySelector("[data-rl-sum-viol]"),s=F.querySelector("[data-rl-sum-viol-rate]"),u=F.querySelector("[data-rl-sum-locked]"),v=d||(n&&n.ok?await n.json():null);if(v){let E=v&&v.rate_limits;if(E&&E.totals){let _=E.totals.hits||0,L=E.totals.violations||0,M=E.totals.locked_sources||0;if(a&&(a.textContent=L.toLocaleString()),s){let P=_+L;s.textContent=P>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(L/P*100).toFixed(1)}):"\u2014"}u&&(u.textContent=ServerI18n.t("ratelimitLockedSources",{n:M.toLocaleString()})),g.forEach(({key:P})=>{let W=E[P],T=F.querySelector(`[data-rl-current="${P}"]`);if(T&&W){let q=(W.hits||0).toLocaleString(),U=(W.violations||0).toLocaleString();T.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:q,viol:U})}}),N(E)}else a&&(a.textContent="\u2014"),s&&(s.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014")}else a&&(a.textContent="\u2014"),s&&(s.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014");p(v&&v.recent_violations)}catch{}},4500);function p(c){let r=F.querySelector("[data-rl-vbody]"),t=F.querySelector("[data-rl-vcount]");if(!r)return;let d=Array.isArray(c)?c:[];if(t&&(t.textContent=ServerI18n.t("ratelimitViolationsCount",{n:d.length})),d.length===0){r.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let e=o=>{let n=new Date(o*1e3),l=m=>String(m).padStart(2,"0");return`${l(n.getHours())}:${l(n.getMinutes())}:${l(n.getSeconds())}`},i=o=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[o]||"var(--color-text-muted)";r.innerHTML=d.slice(0,30).map(o=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${e(o.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${i(o.scope)}">${(o.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${k(o.ip||"")}</span>
        </div>
      `).join("")}function N(c){c&&g.forEach(({key:r})=>{let t=c[r],d=F.querySelector(`[data-rl-suggest="${r}"]`);if(!d)return;let e=t&&t.suggestion;if(!e){d.hidden=!0;return}let i=d.querySelector("[data-rl-suggest-detail]");i&&(i.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(e.p95_per_second||0).toFixed(2),limit:t.limit||"\u2014",window:t.window||"\u2014",suggLimit:e.suggested_limit,suggWindow:e.suggested_window}));let o=d.querySelector("[data-rl-apply]");o&&(o.dataset.rlSuggestLimit=String(e.suggested_limit),o.dataset.rlSuggestWindow=String(e.suggested_window)),d.hidden=!1})}async function D(){try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let r=await c.json(),t=r&&r.rate_limits;if(!t)return;g.forEach(({key:d})=>{let e=t[d],i=F.querySelector(`[data-rl-current="${d}"]`);if(i&&e){let o=(e.hits||0).toLocaleString(),n=(e.violations||0).toLocaleString();i.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:o,viol:n})}}),N(t)}catch{}}F.addEventListener("click",async c=>{let r=c.target.closest("[data-rl-action]");if(!r)return;let t=r.dataset.rlAction;if(t==="save"){let d=r.dataset.rlSave,e=F.querySelector(`[data-rl-limit="${d}"]`),i=F.querySelector(`[data-rl-window="${d}"]`);if(!e||!i)return;let o=parseInt(e.value,10),n=parseInt(i.value,10);if(!Number.isFinite(o)||!Number.isFinite(n)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let l=r.textContent;r.disabled=!0,r.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let m=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:d,limit:o,window:n})});if(m.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:d.toUpperCase(),limit:o,window:n}),!0),D();else{let a=await m.json().catch(()=>({})),s=a&&a.error||`HTTP ${m.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:s}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{r.disabled=!1,r.textContent=l}return}if(t==="apply-suggest"){let d=r.dataset.rlApply,e=parseInt(r.dataset.rlSuggestLimit,10),i=parseInt(r.dataset.rlSuggestWindow,10);if(!d||!Number.isFinite(e)||!Number.isFinite(i))return;let o=r.textContent;r.disabled=!0,r.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let n=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:d,limit:e,window:i})});if(n.ok){let l=F.querySelector(`[data-rl-limit="${d}"]`),m=F.querySelector(`[data-rl-window="${d}"]`);l&&(l.value=e),m&&(m.value=i),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:d.toUpperCase(),limit:e,window:i}),!0),D(),w()}else{let l=await n.json().catch(()=>({})),m=l&&l.error||`HTTP ${n.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:m}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{r.disabled=!1,r.textContent=o}return}if(t==="export"){let d=[];F.querySelectorAll("[data-rl-limit]").forEach(e=>{let i=e.dataset.rlLimit.toUpperCase();d.push(`${i}_RATE_LIMIT=${e.value}`)}),F.querySelectorAll("[data-rl-window]").forEach(e=>{let i=e.dataset.rlWindow.toUpperCase();d.push(`${i}_RATE_WINDOW=${e.value}`)}),$.textContent=d.join(`
`),$.hidden=!1;try{navigator.clipboard?.writeText(d.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else t==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([e,[i,o]])=>{let n=F.querySelector(`[data-rl-limit="${e}"]`),l=F.querySelector(`[data-rl-window="${e}"]`);n&&(n.value=i),l&&(l.value=o)}),$.hidden=!0,w())});function w(){g.forEach(({key:c})=>{let r=F.querySelector(`[data-rl-limit="${c}"]`),t=F.querySelector(`[data-rl-window="${c}"]`),d=F.querySelector(`[data-rl-lockout="${c}"]`),e=F.querySelector(`[data-rl-effective="${c}"]`);if(!r||!t||!e)return;let i=parseInt(r.value,10)||0,o=parseInt(t.value,10)||1,n=(i/o).toFixed(2),l=Math.round(i*1.5),m=`effective_rate = ${i} / ${o}s = ${n} req/s \xB7 burst = ${l}`;if(c==="login"&&d){let a=parseInt(d.value,10)||0;m+=` \xB7 lock = ${a}s`}e.textContent=m})}F.addEventListener("input",c=>{let r=c.target;!r||!r.dataset.rlLimit&&!r.dataset.rlLockout||w()}),F.addEventListener("change",c=>{let r=c.target;!r||!r.dataset.rlWindow||w()}),w();function x(c,r){if(!c||!Array.isArray(r))return;let t=96,d=24,e=r.length?r:new Array(24).fill(0),i=Math.max(1,...e),o=t/Math.max(1,e.length-1),n=e.map((m,a)=>`${(a*o).toFixed(1)},${(d-2-m/i*(d-4)).toFixed(1)}`).join(" "),l=c.querySelector("polyline");l&&l.setAttribute("points",n)}g.forEach(({key:c})=>{let r=F.querySelector(`[data-rl-spark="${c}"]`);r&&x(r,new Array(24).fill(0))});let R=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,S={allowlist:[],denylist:[]},b={input:F.querySelector("[data-rl-ip-input]"),select:F.querySelector("[data-rl-ip-select]"),addBtn:F.querySelector("[data-rl-ip-add]"),summary:F.querySelector("[data-rl-ip-summary]"),error:F.querySelector("[data-rl-ip-error]"),allowCount:F.querySelector("[data-rl-ip-allow-count]"),denyCount:F.querySelector("[data-rl-ip-deny-count]"),allowBody:F.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:F.querySelector('[data-rl-ip-body="denylist"]')};function I(c){if(b.error){if(!c){b.error.hidden=!0,b.error.textContent="";return}b.error.hidden=!1,b.error.textContent=c}}function O(c){let r=c==="allowlist"?b.allowBody:b.denyBody,t=c==="allowlist"?b.allowCount:b.denyCount;if(!r||!t)return;let d=Array.isArray(S[c])?S[c]:[];if(t.textContent=String(d.length),d.length===0){let e=ServerI18n.t(c==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");r.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:e})}</div>`;return}r.innerHTML=d.map(e=>{let i=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:k(e)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${k(e)}">
          <span class="admin-ratelimit-ip-chip-cidr">${k(e)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${k(e)}" data-rl-ip-remove-kind="${c}" title="${i}" aria-label="${i}">\xD7</button>
        </div>
      `}).join("")}function A(){if(O("allowlist"),O("denylist"),b.summary){let c=(S.allowlist||[]).length,r=(S.denylist||[]).length;b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:c,deny:r})}}async function B(){try{let c=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!c.ok){b.summary&&(b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:c.status}));return}let r=await c.json();r&&typeof r=="object"&&(S={allowlist:Array.isArray(r.allowlist)?r.allowlist:[],denylist:Array.isArray(r.denylist)?r.denylist:[]},A())}catch{b.summary&&(b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function h(c,{toastLabel:r}={}){try{let t=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(t.ok){let i=await t.json();return S={allowlist:Array.isArray(i.allowlist)?i.allowlist:[],denylist:Array.isArray(i.denylist)?i.denylist:[]},A(),I(""),r&&typeof showToast=="function"&&showToast(r,!0),!0}let d=await t.json().catch(()=>({})),e=d&&d.error||`HTTP ${t.status}`;return I(e),!1}catch{return I(ServerI18n.t("ratelimitNetworkError")),!1}}b.addBtn&&b.addBtn.addEventListener("click",async()=>{if(!b.input||!b.select)return;let c=(b.input.value||"").trim();if(!c){I(ServerI18n.t("ratelimitIpRequiredError"));return}if(!R.test(c)){I(ServerI18n.t("ratelimitIpFormatError"));return}let r=b.select.value==="denylist"?"denylist":"allowlist",t=Array.from(new Set([...S[r]||[],c]));await h({[r]:t},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(r==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:c})})&&(b.input.value="")}),b.input&&(b.input.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),b.addBtn&&b.addBtn.click())}),b.input.addEventListener("input",()=>{b.error&&!b.error.hidden&&I("")})),F.addEventListener("click",async c=>{let r=c.target.closest("[data-rl-ip-remove]");if(!r)return;let t=r.dataset.rlIpRemove,d=r.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",e=(S[d]||[]).filter(i=>i!==t);await h({[d]:e},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(d==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:t})})}),B(),setTimeout(async()=>{try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let r=await c.json(),t=r&&r.rate_limits;if(!t)return;g.forEach(({key:d})=>{let e=t[d]&&(t[d].bucket_history||t[d].history);if(Array.isArray(e)&&e.length){let i=F.querySelector(`[data-rl-spark="${d}"]`);i&&x(i,e.slice(-24))}})}catch{}},5500)}function j(){let F=document.getElementById("settings-grid");if(!F||document.getElementById(y))return;F.insertAdjacentHTML("beforeend",f());let $=document.getElementById(y);$&&C($)}document.addEventListener("admin-panel-rendered",j),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&j()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),j()})})()});var gt=ye(()=>{(function(){"use strict";let y="sec-viewer-theme",k="danmu.viewerTheme.v1",g=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function f(){return`
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
      </div>`}let C=/^#[0-9a-f]{6}$/i,j=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function F(D){return String(D??"").replace(/[&<>"']/g,w=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[w])}function $(D){let w={};return!D||typeof D!="object"||(["bg","primary","hero"].forEach(x=>{typeof D[x]=="string"&&C.test(D[x])&&(w[x]=D[x])}),(D.mode==="dark"||D.mode==="light")&&(w.mode=D.mode),typeof D.font=="string"&&/^[\w .-]{1,64}$/.test(D.font)&&(w.font=D.font),(D.logo===null||typeof D.logo=="string"&&j.test(D.logo))&&(w.logo=D.logo)),w}function p(D){let w={...g[0],logo:null};try{let a=localStorage.getItem(k);a&&(w={...w,...$(JSON.parse(a))})}catch{}let x="default";function R(){try{localStorage.setItem(k,JSON.stringify(w))}catch{}}function S(a){let s=/^#?([0-9a-f]{6})$/i.exec(a);if(!s)return[0,0,0];let u=parseInt(s[1],16);return[u>>16&255,u>>8&255,u&255]}function b([a,s,u]){let v=[a,s,u].map(E=>(E/=255,E<=.03928?E/12.92:Math.pow((E+.055)/1.055,2.4)));return .2126*v[0]+.7152*v[1]+.0722*v[2]}function I(a,s){let u=b(S(a)),v=b(S(s)),[E,_]=u>v?[u,v]:[v,u];return(E+.05)/(_+.05)}function O(a){return a>=7?{label:"AAA",cls:"is-good"}:a>=4.5?{label:"AA",cls:"is-ok"}:a>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function A(){let a=D.querySelector("[data-vt-presets]");a.innerHTML="",g.forEach(s=>{let u=document.createElement("button");u.type="button",u.className="admin-vt-preset"+(x===s.id?" is-active":""),u.innerHTML=`
          <div class="swatch" style="background:${s.bg}">
            <span style="background:${s.primary}"></span>
            <span style="background:${s.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(s.nameKey)}</div>
          <div class="mode">${ServerI18n.t(s.mode==="dark"?"lbDark":"lbLight")}</div>
        `,u.addEventListener("click",()=>{w={...w,...s},x=s.id,R(),m()}),a.appendChild(u)})}function B(){D.querySelectorAll("[data-vt-mode-btn]").forEach(a=>{a.classList.toggle("is-active",w.mode===a.dataset.vtModeBtn)})}function h(){let a=D.querySelector("[data-vt-colors]"),s=w.mode==="dark"?"#F8FAFC":"#0F172A",u=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:s,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:w.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:w.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];a.innerHTML=u.map(v=>{let E=I(w[v.key],v.vs),_=O(E),L=F(w[v.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${L}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${v.label}</span>
                <span class="grade ${_.cls}">${_.label} \xB7 ${E.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${L}" data-vt-color="${v.key}" />
                <input type="text" value="${L}" data-vt-hex="${v.key}" spellcheck="false" />
                <span class="vs">vs ${v.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function c(){let a=D.querySelector("[data-vt-logo-preview]"),s=D.querySelector(".hint-empty"),u=D.querySelector("[data-vt-logo-actions]");w.logo?(a.src=w.logo,a.hidden=!1,s.style.display="none",u.hidden=!1):(a.hidden=!0,s.style.display="",u.hidden=!0)}function r(){let a=D.querySelector("[data-vt-font]");a.value=w.font;let s=D.querySelector("[data-vt-font-specimen]");s.style.fontFamily=w.font}function t(){let a=w.mode==="dark"?"#F8FAFC":"#0F172A",s=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(a,w.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(w.primary,w.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(w.hero,w.bg)}];D.querySelector("[data-vt-contrast]").innerHTML=s.map(u=>{let v=O(u.ratio);return`<span class="vt-contrast-chip ${v.cls}">${u.lbl} \xB7 ${v.label} ${u.ratio.toFixed(1)}</span>`}).join("")}function d(){let a=D.querySelector("[data-vt-stage]"),s=w.mode==="dark"?"#F8FAFC":"#0F172A";a.style.setProperty("--vt-bg",w.bg),a.style.setProperty("--vt-primary",w.primary),a.style.setProperty("--vt-hero",w.hero),a.style.setProperty("--vt-fg",s),a.style.fontFamily=w.font;let u=D.querySelector("[data-vt-preview-logo]");if(w.logo){let v=document.createElement("img");v.src=w.logo,v.style.maxHeight="40px",u.replaceChildren(v)}else u.textContent="Danmu Fire"}let e="auto",i="auto";function o(){D.querySelectorAll("[data-vt-theme-btn]").forEach(a=>{a.classList.toggle("is-active",a.dataset.vtThemeBtn===e)}),D.querySelectorAll("[data-vt-lang-btn]").forEach(a=>{a.classList.toggle("is-active",a.dataset.vtLangBtn===i)})}async function n(){try{let a=await fetch("/get_settings",{credentials:"same-origin"});if(!a.ok)return;let s=await a.json(),u=s&&s.ViewerThemeMode&&s.ViewerThemeMode[1],v=s&&s.ViewerLangMode&&s.ViewerLangMode[1];typeof u=="string"&&(e=u),typeof v=="string"&&(i=v),o()}catch{}}async function l(a,s){if(window.csrfFetch)try{let u=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:a,value:s,index:1})});if(!u.ok)throw new Error(u.status);window.showToast&&window.showToast(`${a} = ${s}`,!0)}catch(u){console.warn("[admin-viewer-theme] force-mode update failed:",u),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:a}),!1)}}function m(){A(),B(),h(),c(),r(),t(),d(),o()}D.addEventListener("input",a=>{if(a.target.matches("[data-vt-color]")){let s=a.target.dataset.vtColor;C.test(a.target.value)&&(w[s]=a.target.value,x="custom",R(),m())}else if(a.target.matches("[data-vt-hex]")){let s=a.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(a.target.value)&&(w[s]=a.target.value,x="custom",R(),m())}else a.target.matches("[data-vt-font]")&&(w.font=a.target.value,R(),m())}),D.addEventListener("change",a=>{if(a.target.matches("[data-vt-logo-input]")){let s=a.target.files&&a.target.files[0];if(!s)return;if(s.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let u=new FileReader;u.onload=()=>{w.logo=String(u.result||""),R(),m()},u.readAsDataURL(s)}}),D.addEventListener("click",a=>{let s=a.target.closest("[data-vt-mode-btn]");if(s){w.mode=s.dataset.vtModeBtn,x="custom",R(),m();return}let u=a.target.closest("[data-vt-theme-btn]");if(u){e=u.dataset.vtThemeBtn,o(),l("ViewerThemeMode",e);return}let v=a.target.closest("[data-vt-lang-btn]");if(v){i=v.dataset.vtLangBtn,o(),l("ViewerLangMode",i);return}if(a.target.closest("[data-vt-logo-remove]")){w.logo=null,R(),m();return}let _=a.target.closest("[data-vt-device-btn]");if(_){D.querySelectorAll("[data-vt-device-btn]").forEach(M=>M.classList.toggle("is-active",M===_)),D.querySelector("[data-vt-frame]").dataset.device=_.dataset.vtDeviceBtn;return}let L=a.target.closest("[data-vt-action]");L&&L.dataset.vtAction==="reset"&&(w={...g[0],logo:null},x="default",R(),m())}),m(),n()}document.addEventListener("click",function(D){let w=D.target.closest("[data-vt-jump]");if(!w)return;let x=w.dataset.vtJump;if(x){D.preventDefault();try{location.hash="#/"+x}catch{}}});function N(){let D=document.getElementById("settings-grid");if(!D||document.getElementById(y))return;D.insertAdjacentHTML("beforeend",f());let w=document.getElementById(y);w&&p(w)}document.addEventListener("admin-panel-rendered",N),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),N()})})()});var yt=ye(()=>{(function(){"use strict";let y="sec-system-overview";function k(){return`
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
          ${[{id:"uptime",label:ServerI18n.t("sohMetricUptime")},{id:"conn",label:ServerI18n.t("sohMetricConnected")},{id:"ram",label:ServerI18n.t("sohMetricMemory")},{id:"ver",label:ServerI18n.t("sohMetricVersion")}].map($=>`
            <div class="admin-soh-kpi" data-m="${$.id}">
              <div class="admin-soh-kpi__label">${$.label}</div>
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
          ${[{hash:"#/backup",label:ServerI18n.t("adminNavBackup"),sub:ServerI18n.t("sohLinkBackupSub"),attr:""},{hash:"#/security",label:ServerI18n.t("adminNavSecurity"),sub:ServerI18n.t("sohLinkSecuritySub"),attr:'data-soh-sub="security"'},{hash:"#/integrations",label:ServerI18n.t("adminNavIntegrations"),sub:"\u2014",attr:'data-soh-sub="integrations"'},{hash:"#/about",label:ServerI18n.t("sohLinkAbout"),sub:ServerI18n.t("sohLinkAboutSub"),attr:""}].map($=>`
            <a class="admin-ui-group-row admin-soh-link" href="${$.hash}">
              <span class="lbl">${$.label}</span>
              <span class="val admin-soh-link__sub" ${$.attr}>${$.sub}</span>
              <span class="admin-soh-link__chev" aria-hidden="true">\u203A</span>
            </a>`).join("")}
        </div>
      </div>`}function g($){let p=Math.floor($/86400),N=Math.floor($%86400/3600),D=Math.floor($%3600/60);return p>0?`${p}d ${String(N).padStart(2,"0")}h ${String(D).padStart(2,"0")}m`:N>0?`${N}h ${String(D).padStart(2,"0")}m`:`${D}m ${String($%60).padStart(2,"0")}s`}function f($,p,N){let D=document.querySelector(`[data-m="${$}"]`);if(!D)return;let w=D.querySelector("[data-m-v]");w&&(w.textContent=p);let x=D.querySelector("[data-m-sub]");x&&(x.textContent=N||"")}function C($){let p=document.querySelector("[data-soh-banner-dot]"),N=document.querySelector("[data-soh-banner-title]"),D=document.querySelector("[data-soh-chip]"),x=!($.queue_size!=null&&$.queue_capacity!=null&&$.queue_size>=$.queue_capacity);D&&D.classList.toggle("is-warn",!x),p&&p.classList.toggle("is-warn",!x),N&&(N.textContent=x?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function j(){(async()=>{try{let N=await window.csrfFetch("/admin/metrics");if(!N.ok)return;let D=await N.json(),w=B=>Array.isArray(B)&&B.length?B[B.length-1]:null,x=D.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-D.server_started_at)):0;f("uptime",x>0?g(x):"\u2014","");let R=null;try{let B=await fetch("/admin/audience/stats",{credentials:"same-origin"});B.ok&&(R=(await B.json()).total_live)}catch{}let S=D.ws_clients??0;f("conn",String(S+(R||0)),R==null?ServerI18n.t("sohConnOverlaysOnly",{n:S}):ServerI18n.t("sohConnBreakdown",{overlays:S,viewers:R}));let b=w(D.mem_series||[]),I=D.mem_total_mb?(D.mem_total_mb/1024).toFixed(0):null;f("ram",b!=null?`${Number(b).toFixed(0)}%`:"\u2014",I?ServerI18n.t("sohMemorySub",{total:I}):"");let O=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";f("ver",`v${O}`,ServerI18n.t("sohVersionSub")),C(D);let A=document.querySelector('[data-soh-sub="integrations"]');A&&(A.textContent=ServerI18n.t("sohLinkExtSub",{webhooks:D.webhooks_count??0,plugins:D.plugins_loaded??0}));try{let B=await window.csrfFetch("/admin/ws-auth");if(B.ok){let h=await B.json(),c=document.querySelector('[data-soh-sub="security"]');c&&(c.textContent=h.require_token?ServerI18n.t("sohLinkSecurityOn"):ServerI18n.t("sohLinkSecurityOff"))}}catch{}}catch{}})();let $=document.getElementById(y);if(!$)return;let p=()=>{let N=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";$.querySelectorAll("[data-soh-mode]").forEach(D=>{let w=D.dataset.sohMode===N;D.classList.toggle("is-active",w),D.setAttribute("aria-pressed",w?"true":"false")})};p(),document.addEventListener("admin:theme-mode",p),$.addEventListener("click",function(N){let D=N.target.closest("[data-soh-mode]");if(D){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(D.dataset.sohMode),p();return}let w=N.target.closest("[data-soh-action]");if(!(!w||w.disabled)){if(w.dataset.sohAction==="copy-url"){let x=document.getElementById("sysoPublicUrl")?.textContent||"";window.AdminUtils.copyText(x);return}if(w.dataset.sohAction==="show-qr"){let x=$.querySelector("[data-soh-qr]");if(!x)return;if(!x.hidden){x.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(R=>R.ok?R.json():Promise.reject(R)).then(R=>{x.innerHTML=R.svg,x.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function F(){let $=document.getElementById("settings-grid");!$||document.getElementById(y)||($.insertAdjacentHTML("beforeend",k()),document.getElementById(y)&&j())}document.addEventListener("admin-panel-rendered",F),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&F()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),F()})})()});var bt=ye(()=>{(function(){"use strict";let y="sec-polls",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(j){return String(j).replace(/[&<>"']/g,function(F){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[F]})};function g(){return`
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
  `}function f(){let j=document.getElementById("sec-polls");if(!j)return;let F=j.querySelector("[data-poll-queue]"),$=j.querySelector("[data-poll-editor]"),p=j.querySelector("[data-poll-view-builder]"),N=j.querySelector("[data-poll-view-live]"),D=j.querySelector("[data-poll-view-results]"),w="danmu.adminPollQueue.v2";function x(){return"q_"+Math.random().toString(36).slice(2,8)}function R(){return"o_"+Math.random().toString(36).slice(2,6)}function S(z){return{id:R(),label:""}}function b(){return{id:x(),text:"",timer:90,image_url:"",server_q_id:"",options:[S("A"),S("B")]}}let I=null,O="builder",A=null,B=0,h={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},c=null,r=[];try{let z=localStorage.getItem(w);if(z){let Q=JSON.parse(z);Array.isArray(Q)?r=Q:Q&&Array.isArray(Q.queue)&&(r=Q.queue)}}catch{}(!Array.isArray(r)||r.length===0)&&(r=[b()]),r.forEach(z=>{typeof z.image_url!="string"&&(z.image_url=""),typeof z.server_q_id!="string"&&(z.server_q_id="")});let t=r[0].id,d="manual",e=null,i=null,o={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function n(){try{localStorage.setItem(w,JSON.stringify({queue:r,activeId:t,mode:d}))}catch{}}function l(z){return r.find(Q=>Q.id===z)}function m(z,Q){let Z=l(z);Z&&Object.assign(Z,Q)}function a(z,Q,Z){let se=z.slice(),[ie]=se.splice(Q,1);return se.splice(Z,0,ie),se}function s(){F.innerHTML="",r.forEach((z,Q)=>{let Z=document.createElement("div");Z.className="admin-poll-qrow",z.id===t&&Z.classList.add("is-active");let se=o.active&&o.currentIndex===Q;se&&Z.classList.add("is-running"),Z.dataset.qid=z.id,Z.draggable=!0;let ie=!!z.image_url;Z.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${Q+1}</span>
            <div class="info">
              <div class="text">${k(z.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:z.options.length})} \xB7 ${z.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):z.timer+"s"} \xB7 ${ie?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${se?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":z.id===t?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,F.appendChild(Z)})}function u(){let z=l(t)||r[0];if(!z){$.innerHTML="";return}let Q=r.indexOf(z);$.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${Q+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:Q+1})}</span>
            </div>
            <span class="progress">Q${Q+1} / ${r.length}</span>
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
        `}function v(){I&&I.active?O="live":A?O="results":O="builder",j.dataset.pollView=O,p.hidden=O!=="builder",N.hidden=O!=="live",D.hidden=O!=="results",s(),u(),J(),O==="live"?P():O==="results"&&T(),O==="live"?E():_()}function E(){c||(c=setInterval(()=>{O!=="live"||!I||!I.active||W()},1e3))}function _(){c&&(clearInterval(c),c=null)}function L(z,Q){if(!z||!z.time_limit_seconds)return null;if(!Q)return z.time_limit_seconds;let Z=Date.now()/1e3-Q;return Math.max(0,Math.round(z.time_limit_seconds-Z))}function M(z){if(z==null)return"\u221E";let Q=String(Math.floor(z/60)).padStart(2,"0"),Z=String(z%60).padStart(2,"0");return`${Q}:${Z}`}function P(){if(!I||!I.questions||I.questions.length===0){N.innerHTML="";return}let z=I.current_index>=0?I.current_index:0,Q=I.questions.length,Z=I.questions[z],se=L(Z,I.started_at),ie=Z.time_limit_seconds||0,de=ie>0&&se!=null?Math.max(0,Math.min(1,se/ie)):1,ce=ie>0&&se!=null&&se<=Math.max(5,ie*.15),ke=Z.options.reduce((fe,Se)=>fe+(Se.count||0),0),Ee=[...Z.options].sort((fe,Se)=>(Se.count||0)-(fe.count||0)),ee=Ee[0]?Ee[0].count:0,ae=I.questions[z+1],oe=110,me=oe/2-6,re=2*Math.PI*me,ve=re*de;N.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${k((I.poll_id||"").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  ${ServerI18n.t("pollBuilderLiveQuestionProgress",{idx:`<strong>${z+1}</strong>`,total:Q})}
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${oe} ${oe}" width="56" height="56">
                      <circle cx="${oe/2}" cy="${oe/2}" r="${me}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${oe/2}" cy="${oe/2}" r="${me}" fill="none"
                        stroke="${ce?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${ve} ${re}" stroke-linecap="round"
                        transform="rotate(-90 ${oe/2} ${oe/2})"
                        style="filter: drop-shadow(0 0 4px ${ce?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${ce?"is-low":""}" data-live-mmss>${se==null?ServerI18n.t("pollBuilderNoTimeLimit"):M(se)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:z+1})}</div>
                <div class="text">${k(Z.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${Ee.map(fe=>{let Se=ke>0?fe.count/ke*100:0,_e=(fe.count||0)>0&&fe.count===ee;return`
                    <div class="admin-polls-live-bar ${_e?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${k(fe.key)}</span>
                        <span class="lbl">${k(fe.text||"")}</span>
                        ${_e?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${Se.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:fe.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${Se.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${ke}</strong>`})}</span>
                ${ae?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${k(ae.text||"")}</em>`})}</span>`:""}
                <div class="actions">
                  <button type="button" class="admin-polls-live-btn" data-live-action="advance" ${z>=Q-1?"disabled":""}>${ServerI18n.t("pollBuilderLiveAdvanceBtn")}</button>
                  <button type="button" class="admin-polls-live-btn is-danger" data-live-action="end">${ServerI18n.t("pollBuilderLiveEndBtn")}</button>
                </div>
              </div>
            </div>

            <!-- RIGHT \xB7 queue mini + broadcast -->
            <aside class="admin-polls-live-rail">
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderQuestionProgressTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiProgress")} \xB7 ${z+1}/${Q}</span>
                </div>
                <div class="admin-polls-live-queue">
                  ${I.questions.map((fe,Se)=>{let _e=Se<z?"done":Se===z?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${_e}">
                        <span class="idx">${_e==="done"?"\u2713":Se+1}</span>
                        <span class="t">${k(fe.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
                        ${_e==="active"?'<span class="dot"></span>':""}
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
                    <label class="admin-polls-live-toggle ${h[fe.k]?"is-on":""}" data-live-toggle="${fe.k}">
                      <span class="lbl">${fe.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function W(){if(!I||!I.active)return;let z=I.current_index>=0?I.current_index:0,Q=I.questions[z];if(!Q)return;let Z=L(Q,I.started_at),se=Q.time_limit_seconds||0,ie=N.querySelector("[data-live-mmss]"),de=N.querySelector("[data-live-ring]");if(ie&&(ie.textContent=Z==null?ServerI18n.t("pollBuilderNoTimeLimit"):M(Z),ie.classList.toggle("is-low",se>0&&Z!=null&&Z<=Math.max(5,se*.15))),de&&se>0&&Z!=null){let ce=+de.getAttribute("r"),ke=2*Math.PI*ce,Ee=Math.max(0,Math.min(1,Z/se));de.setAttribute("stroke-dasharray",`${ke*Ee} ${ke}`);let ee=Z<=Math.max(5,se*.15);de.setAttribute("stroke",ee?"var(--hud-crimson)":"var(--color-primary)"),de.style.filter=`drop-shadow(0 0 4px ${ee?"var(--hud-crimson)":"var(--color-primary)"})`}h.autoAdvance&&se>0&&Z===0&&(z>=I.questions.length-1?te():G())}function T(){let z=A;if(!z||!z.questions||z.questions.length===0){D.innerHTML="";return}let Q=z.questions.length,Z=Math.max(0,Math.min(B,Q-1)),se=z.questions[Z],ie=se.options.reduce((re,ve)=>re+(ve.count||0),0),de=[...se.options].sort((re,ve)=>(ve.count||0)-(re.count||0)),ce=de[0]||{key:"-",text:"\u2014",count:0},ke=de[1],Ee=ie>0?ce.count/ie*100:0,ee=ke?Math.max(0,ce.count-ke.count):ce.count,ae=z.started_at||0,oe=z.ended_at||Date.now()/1e3,me=Math.max(0,Math.round(oe-ae));D.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${Q>1?`
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
                  <span>Q${Z+1}/${Q} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:M(me),n:ie})}</span>
                </div>
                <div class="text">${k(se.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${k(ce.key)}</div>
                <div class="info">
                  <div class="lbl">${k(ce.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:ce.count})} \xB7 ${Ee.toFixed(1)}% ${ke?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:ee}):""}</div>
                </div>
                <div class="pct">${Ee.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:ie})}</span>
                </div>
                ${de.map((re,ve)=>{let fe=ie>0?re.count/ie*100:0;return`
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
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${se.time_limit_seconds?M(se.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${z.started_at?new Date(z.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${z.ended_at?new Date(z.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${M(me)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let re=Math.max(1,...de.map(ve=>ve.count));return de.map(ve=>`<div class="bar" style="height:${Math.max(6,ve.count/re*100)}%"></div>`).join("")})()}
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
        `}function q(z){let Q=[["question_index","question","option_key","option_text","count","percentage"]];return z.questions.forEach((Z,se)=>{let ie=Z.options.reduce((de,ce)=>de+(ce.count||0),0);Z.options.forEach(de=>{let ce=ie>0?(de.count/ie*100).toFixed(1):"0";Q.push([se+1,Z.text,de.key,de.text,de.count,ce])})}),Q.map(Z=>Z.map(se=>{let ie=String(se??"");return/[",\n]/.test(ie)?`"${ie.replace(/"/g,'""')}"`:ie}).join(",")).join(`
`)}function U(z,Q,Z){let se=new Blob([Z],{type:Q}),ie=document.createElement("a");ie.href=URL.createObjectURL(se),ie.download=z,document.body.appendChild(ie),ie.click(),setTimeout(()=>{URL.revokeObjectURL(ie.href),ie.remove()},0)}j.addEventListener("click",z=>{let Q=z.target.closest("[data-live-action]");if(Q){let de=Q.dataset.liveAction;de==="advance"?G():de==="end"?te():de==="pause"&&(h.autoAdvance=!1,P());return}let Z=z.target.closest("[data-live-toggle]");if(Z){let de=Z.dataset.liveToggle;de in h&&(h[de]=!h[de],Z.classList.toggle("is-on",h[de]));return}let se=z.target.closest("[data-results-tab]");if(se){B=+se.dataset.resultsTab||0,T();return}let ie=z.target.closest("[data-results-action]");if(ie){let de=ie.dataset.resultsAction,ce=A;if(!ce)return;if(de==="copy"){let ke=ce.questions.map((Ee,ee)=>{let ae=Ee.options.reduce((me,re)=>me+(re.count||0),0),oe=Ee.options.map(me=>{let re=ae>0?(me.count/ae*100).toFixed(1):"0.0";return`  ${me.key}. ${me.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:me.count})} (${re}%)`});return`Q${ee+1}: ${Ee.text}
${oe.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(ke)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else de==="csv"?U(`poll_${(ce.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",q(ce)):de==="json"?U(`poll_${(ce.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(ce,null,2)):de==="reset"&&(A=null,B=0,v());return}}),F.addEventListener("dragstart",z=>{let Q=z.target.closest(".admin-poll-qrow");Q&&(e=Q.dataset.qid,Q.classList.add("is-dragging"))}),F.addEventListener("dragend",z=>{let Q=z.target.closest(".admin-poll-qrow");Q&&Q.classList.remove("is-dragging"),e=null,F.querySelectorAll(".is-drag-over").forEach(Z=>Z.classList.remove("is-drag-over"))}),F.addEventListener("dragover",z=>{z.preventDefault();let Q=z.target.closest(".admin-poll-qrow");!Q||!e||Q.dataset.qid===e||(F.querySelectorAll(".is-drag-over").forEach(Z=>Z.classList.remove("is-drag-over")),Q.classList.add("is-drag-over"))}),F.addEventListener("drop",z=>{z.preventDefault();let Q=z.target.closest(".admin-poll-qrow");if(!Q||!e)return;let Z=r.findIndex(ie=>ie.id===e),se=r.findIndex(ie=>ie.id===Q.dataset.qid);Z<0||se<0||Z===se||(r=a(r,Z,se),n(),v())}),F.addEventListener("click",z=>{let Q=z.target.closest(".admin-poll-qrow");Q&&(t=Q.dataset.qid,n(),v())}),$.addEventListener("input",z=>{let Q=l(t);if(Q){if(z.target.matches("[data-ed-text]")){Q.text=z.target.value,n(),s();return}if(z.target.matches("[data-ed-opt-text]")){let Z=z.target.dataset.edOptText,se=Q.options.find(ie=>ie.id===Z);se&&(se.label=z.target.value,n(),s())}}}),$.addEventListener("change",z=>{let Q=l(t);Q&&z.target.matches("[data-ed-timer]")&&(Q.timer=+z.target.value,n(),s())}),$.addEventListener("click",async z=>{let Q=l(t);if(!Q)return;let Z=z.target.closest("[data-ed-opt-remove]");if(Z){let ie=Z.dataset.edOptRemove;Q.options.length>2&&(Q.options=Q.options.filter(de=>de.id!==ie),n(),u(),s());return}if(z.target.closest("[data-ed-opt-add]")){Q.options.length<6&&(Q.options.push(S()),n(),u(),s());return}let se=z.target.closest("[data-ed-action]");if(se)if(se.dataset.edAction==="remove-q"){if(r.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let de=r.findIndex(ce=>ce.id===t);r=r.filter(ce=>ce.id!==t),t=r[Math.min(de,r.length-1)].id,n(),v()}}else if(se.dataset.edAction==="upload-q-image"){let ie=$.querySelector("[data-ed-q-image-input]");ie&&ie.click()}else se.dataset.edAction==="remove-q-image"&&(Q.image_url="",n(),u(),s())}),$.addEventListener("change",async z=>{if(!z.target.matches("[data-ed-q-image-input]"))return;let Q=z.target.files&&z.target.files[0];if(!Q)return;let Z=l(t);if(!Z)return;if(!o.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),z.target.value="";return}if(!Z.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),z.target.value="";return}if(Q.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),z.target.value="";return}let se=new FormData;se.append("file",Q);try{let ie=await csrfFetch(`/admin/poll/${encodeURIComponent(o.pollId)}/upload-image/${encodeURIComponent(Z.server_q_id)}`,{method:"POST",body:se}),de=await ie.json().catch(()=>({}));if(!ie.ok)throw new Error(de.error||"upload failed");Z.image_url=de.image_url,n(),u(),s(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(ie){showToast&&showToast(String(ie.message||ie),!1)}finally{z.target.value=""}}),$.addEventListener("dragstart",z=>{let Q=z.target.closest(".admin-poll-opt");Q&&(i=Q.dataset.oid,Q.classList.add("is-dragging"))}),$.addEventListener("dragend",z=>{$.querySelectorAll(".is-dragging, .is-drag-over").forEach(Q=>Q.classList.remove("is-dragging","is-drag-over")),i=null}),$.addEventListener("dragover",z=>{let Q=z.target.closest(".admin-poll-opt");!Q||!i||Q.dataset.oid===i||(z.preventDefault(),$.querySelectorAll(".is-drag-over").forEach(Z=>Z.classList.remove("is-drag-over")),Q.classList.add("is-drag-over"))}),$.addEventListener("drop",z=>{z.preventDefault();let Q=z.target.closest(".admin-poll-opt"),Z=l(t);if(!Q||!i||!Z)return;let se=Z.options.findIndex(de=>de.id===i),ie=Z.options.findIndex(de=>de.id===Q.dataset.oid);se<0||ie<0||se===ie||(Z.options=a(Z.options,se,ie),n(),u())}),j.addEventListener("click",z=>{if(z.target.closest("[data-poll-action='add']")){let de=b();r.push(de),t=de.id,n(),v();return}let Z=z.target.closest("[data-poll-template]");if(Z){let de=b(),ce=Z.dataset.pollTemplate,ke=["A","B","C","D","E"],Ee=ee=>ee.map((ae,oe)=>{let me=S(ke[oe]);return me.text=ae,me});ce==="yesno"?(de.text="",de.options=Ee([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):ce==="stars"?(de.timer=60,de.options=Ee(["1","2","3","4","5"])):ce==="four"&&(de.options=Ee(["","","",""])),r.push(de),t=de.id,n(),v();return}let se=z.target.closest("[data-poll-mode]");se&&(d=se.dataset.pollMode,j.querySelectorAll("[data-poll-mode]").forEach(de=>de.classList.toggle("is-active",de===se)),n());let ie=z.target.closest("[data-poll-session-action]");if(ie){let de=ie.dataset.pollSessionAction;de==="start"?K():de==="advance"?G():de==="end"&&te()}});function J(){let z=j.querySelector("[data-poll-session]");if(!z)return;let Q=z.querySelector("[data-poll-session-status]"),Z=z.querySelector("[data-poll-session-action='start']"),se=z.querySelector("[data-poll-session-action='advance']"),ie=z.querySelector("[data-poll-session-action='end']");if(!o.pollId||!o.active){Q.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,Z.hidden=!1,se.hidden=!0,ie.hidden=!0;return}let de=r.length,ce=o.currentIndex+1,ke=o.currentIndex>=de-1;Q.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${ce} / ${de}</span>`,Z.hidden=!0,se.hidden=ke,ie.hidden=!1}async function K(){try{let z=r.map((ce,ke)=>{let Ee=(ce.text||"").trim(),ee=ce.options.map(ae=>(ae.label||"").trim()).filter(Boolean);if(!Ee)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:ke+1}));if(ee.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:ke+1}));return{text:Ee,options:ee,time_limit_seconds:ce.timer&&ce.timer>0?ce.timer:null}});if(!z.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let Q=(()=>{let ce=r.map(ke=>Number(ke.timer)||0).filter(ke=>ke>0);return ce.length?Math.round(ce.reduce((ke,Ee)=>ke+Ee,0)/ce.length):null})(),Z=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:z,mode:d||"manual",default_duration_s:Q})}),se=await Z.json().catch(()=>({}));if(!Z.ok)throw new Error(se.error||ServerI18n.t("pollBuilderErrCreateFailed"));o.pollId=se.poll_id,(se.questions||[]).forEach((ce,ke)=>{r[ke]&&(r[ke].server_q_id=ce.id)}),n();let ie=await csrfFetch("/admin/poll/start",{method:"POST"}),de=await ie.json().catch(()=>({}));if(!ie.ok)throw new Error(de.error||ServerI18n.t("pollBuilderErrStartFailed"));o.active=!0,o.currentIndex=de.current_index??0,I=de,A=null,v(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),ne()}catch(z){showToast&&showToast(String(z.message||z),!1)}}async function G(){try{let z=await csrfFetch("/admin/poll/advance",{method:"POST"}),Q=await z.json().catch(()=>({}));if(!z.ok)throw new Error(Q.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));o.currentIndex=Q.current_index,o.active=!!Q.active,I=Q,v(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:o.currentIndex+1}),!0)}catch(z){showToast&&showToast(String(z.message||z),!1)}}async function te(){try{let z=I,Q=await csrfFetch("/admin/poll/end",{method:"POST"});if(!Q.ok){let Z=await Q.json().catch(()=>({}));throw new Error(Z.error||ServerI18n.t("pollBuilderErrEndFailed"))}z&&z.questions&&(A={...z,ended_at:Date.now()/1e3},B=z.current_index>=0?z.current_index:0),o.active=!1,o.pollId="",o.currentIndex=-1,I=null,o.statusTimer&&(clearInterval(o.statusTimer),o.statusTimer=null),v(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(z){showToast&&showToast(String(z.message||z),!1)}}function ne(){o.statusTimer&&clearInterval(o.statusTimer),o.statusTimer=setInterval(async()=>{if(o.pollId)try{let z=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!z.ok)return;let Q=await z.json();if(Q.poll_id!==o.pollId)return;o.active=!!Q.active,o.currentIndex=Q.current_index??-1;let Z=!!(I&&I.active);I=Q,Q.active||(clearInterval(o.statusTimer),o.statusTimer=null,Z&&Q.questions&&!A&&(A={...Q,ended_at:Date.now()/1e3},B=Q.current_index>=0?Q.current_index:0),I=null),O==="live"?P():v()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{o.statusTimer&&(clearInterval(o.statusTimer),o.statusTimer=null),_()}),v()}function C(){let j=document.getElementById("settings-grid");!j||document.getElementById(y)||(j.insertAdjacentHTML("beforeend",g()),document.getElementById(y)&&f())}document.addEventListener("admin-panel-rendered",C),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&C()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),C()})})()});var wt=ye(()=>{(function(){"use strict";let f="sec-live-feed",C=[],j=[],F=!1,$="",p="all",N=0,D=0,w=null,x=null,R=null;function S(ee){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(ee):String(ee??"").replace(/[&<>"']/g,function(ae){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ae]})}function b(ee,ae){return ee?ee.length>ae?ee.slice(0,ae)+"\u2026":ee:""}function I(ee){let ae=new Date(ee),oe=me=>String(me).padStart(2,"0");return`${oe(ae.getHours())}:${oe(ae.getMinutes())}:${oe(ae.getSeconds())}`}function O(ee){if(!$)return!0;let ae=$.toLowerCase(),oe=ee.data;return oe.text&&oe.text.toLowerCase().includes(ae)||oe.nickname&&oe.nickname.toLowerCase().includes(ae)||oe.fingerprint&&oe.fingerprint.toLowerCase().includes(ae)||oe.layout&&oe.layout.toLowerCase().includes(ae)}function A(ee){return p==="muted"?!!ee.muted:!0}function B(){p="all",document.querySelectorAll(".admin-live-feed-tab").forEach(ee=>ee.classList.toggle("is-active",ee.dataset.tab==="all"))}function h(){$="",R&&(R.value=""),B()}function c(ee,ae){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let me;return ee==="paused"?me=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:ae||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):ee==="no-result"?me=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:ae||ServerI18n.t("lfNoMatchDesc")}):me=window.AdminEmpty.render("messages"),me.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),me.setAttribute("data-empty-kind","live-feed"),me}let oe=document.createElement("div");return oe.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",oe.setAttribute("data-empty-kind","live-feed"),oe.innerHTML=`<div class="admin-proto-placeholder-title">${S(ee)}</div><div class="admin-proto-placeholder-body">${S(ae||"")}</div>`,oe}function r(ee){let ae=ee.data,oe=document.createElement("div");oe.className="admin-live-feed-row"+(ee.muted?" is-muted":""),oe.dataset.id=ee.id,oe.tabIndex=-1;let me=document.createElement("span");if(me.className="admin-live-feed-time",me.textContent=I(ee.ts),oe.appendChild(me),(ae.layout||"scroll").toLowerCase()!=="scroll"){let H=document.createElement("span");H.className="admin-ui-chip admin-live-feed-tag",H.textContent=ae.layout,oe.appendChild(H)}let ve=document.createElement("span");ve.className="admin-live-feed-text",ve.textContent=b(ae.text||"",80),ve.title=ae.text||"",oe.appendChild(ve);let fe=document.createElement("span");fe.className="admin-live-feed-identity",window.AdminIdentity&&fe.appendChild(AdminIdentity.render({nickname:ae.nickname||"",fp:"",onNicknameClick:function(H){!H||!R||(R.value=H,R.dispatchEvent(new Event("input",{bubbles:!0})),R.focus())}})),oe.appendChild(fe);let Se=document.createElement("span");if(Se.className="admin-live-feed-actions is-hover-reveal",ae.message_id){let H=document.createElement("button");H.type="button",H.className="admin-ui-chip admin-live-feed-action",H.textContent=ServerI18n.t("lfRecallBtn"),H.title=ServerI18n.t("lfRecallTitle"),H.addEventListener("click",V=>{V.stopPropagation(),d(ee)}),Se.appendChild(H)}let _e=document.createElement("button");if(_e.type="button",_e.className="admin-ui-chip is-danger admin-live-feed-action",_e.textContent=ServerI18n.t("blockKeywordBtn"),_e.title=ServerI18n.t("blockKeywordTitle"),_e.addEventListener("click",H=>{H.stopPropagation(),e("keyword",ae.text,ee.id)}),Se.appendChild(_e),ae.fingerprint){let H=document.createElement("button");H.type="button",H.className="admin-ui-chip is-warn admin-live-feed-action",H.textContent=ServerI18n.t("blockFpBtn"),H.title=ServerI18n.t("blockFpTitle").replace("{fp}",ae.fingerprint),H.addEventListener("click",V=>{V.stopPropagation(),e("fingerprint",ae.fingerprint,ee.id)}),Se.appendChild(H)}return oe.appendChild(Se),oe.classList.add("is-clickable"),oe.addEventListener("click",H=>{H.target.closest(".admin-live-feed-actions")||t(ee)}),oe.addEventListener("keydown",H=>{H.key!=="Enter"||H.target.closest("button")||(H.preventDefault(),t(ee))}),oe}function t(ee){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(ee)}async function d(ee){let ae=ee&&ee.data&&ee.data.message_id;if(!ae)return;let oe=await window.AdminModeration.recall(ae);if(!oe.ok){console.error("[LiveFeed] Recall failed:",oe.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}ee.recalled=!0;let me=i(ee.id);me&&me.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function e(ee,ae,oe){if(!(!ae||!await(ee==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,ae))){if(oe){let ve=C.find(fe=>fe.id===oe);ve&&(ve.muted=!0)}else C.forEach(ve=>{ee==="keyword"&&ve.data.text===ae&&(ve.muted=!0),ee==="fingerprint"&&ve.data.fingerprint===ae&&(ve.muted=!0)});l()}}function i(ee){if(!w||!ee)return null;let ae=w.children;for(let oe=0;oe<ae.length;oe++)if(ae[oe].dataset&&ae[oe].dataset.id===ee)return ae[oe];return null}function o(){let ee=document.activeElement,ae=ee&&ee.closest?ee.closest(".admin-live-feed-row"):null;return ae?ae.dataset.id:null}function n(ee){if(!ee)return;let ae=i(ee);ae&&document.activeElement!==ae&&ae.focus({preventScroll:!0})}function l(){if(!w)return;let ee=o(),ae=document.createDocumentFragment(),oe=C.filter(me=>O(me)&&A(me));for(let me=oe.length-1;me>=0;me--)ae.appendChild(r(oe[me]));if(w.textContent="",ae.childNodes.length===0){let me=F?c("paused"):C.length===0?c("empty"):c("no-result");w.appendChild(me)}else w.appendChild(ae);s(),n(ee)}function m(ee){if(!w||!O(ee)||!A(ee))return null;let ae=w.querySelector("[data-empty-kind='live-feed']");ae&&ae.remove();let oe=w.scrollTop<=8,me=r(ee);if(oe)w.insertBefore(me,w.firstChild);else{let re=w.scrollHeight;w.insertBefore(me,w.firstChild),w.scrollTop+=w.scrollHeight-re,D+=1}return me}function a(){let ee=C.length-200;if(ee<=0)return;C.splice(0,ee).forEach(oe=>{let me=i(oe.id);me&&me.remove()})}function s(){_(),L(),v()}function u(ee){let ae={ts:Date.now(),data:ee,id:ee&&ee.message_id?"m"+ee.message_id:"e"+ ++N};if(ee&&ee.status==="blocked"&&(ae.muted=!0),F){j.push(ae),L(),v();return}C.push(ae),m(ae),a(),s()}function v(){let ee=document.querySelector("[data-lf-jump]"),ae=document.querySelector("[data-lf-jump-n]");if(!ee||!ae)return;let oe=j.length,me=oe>0?oe:D;me>0?(ee.hidden=!1,ae.textContent=String(me)):ee.hidden=!0}function E(){F&&M(),D=0,w&&(w.scrollTop=0),v()}function _(){let ee=document.querySelector("[data-lf-state]");ee&&(ee.className=F?"ui-status is-warning":"ui-status is-success",ee.textContent=F?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function L(){let ee=document.getElementById(f)||document,ae=(oe,me)=>{let re=ee.querySelector(oe);re&&(re.textContent=String(me))};ae("[data-cnt-all]",C.length),ae("[data-cnt-mut]",C.filter(oe=>oe.muted).length)}function M(){if(F=!F,w&&w.setAttribute("aria-live",F?"off":"polite"),x&&(x.textContent=F?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),x.classList.toggle("is-primary",F),x.classList.toggle("is-ghost",!F)),F)L(),v();else{for(let ee of j)C.push(ee);j=[],C.length>200&&C.splice(0,C.length-200),D=0,l()}}function P(){let ee=document.getElementById("settings-grid");if(!ee)return!1;let ae=`
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
      </div>`;return ee.insertAdjacentHTML("beforeend",ae),!0}let W=!1,T=null,q=0,U=1500,J=!1;async function K(){if(!J){J=!0;try{let ee=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(q),{credentials:"same-origin"});if(!ee.ok)return;let ae=await ee.json();if(Array.isArray(ae.entries)){for(let oe of ae.entries)if(!(!oe||!oe.data)){if(typeof oe.seq=="number"){if(oe.seq<=q)continue;q=oe.seq}u(oe.data)}}typeof ae.next_since=="number"&&ae.next_since>q&&(q=ae.next_since)}catch{}finally{J=!1}}}let G=5e3,te=null,ne=!1;async function z(){if(!(ne||document.hidden)){ne=!0;try{let ee=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!ee.ok)return;let ae=await ee.json(),oe=Array.isArray(ae.pending)?ae.pending.length:0,me=document.getElementById(f);if(!me)return;let re=me.querySelector("[data-cnt-q]");re&&(re.textContent=String(oe));let ve=me.querySelector("[data-lf-pending-link]");ve&&ve.classList.toggle("has-pending",oe>0)}catch{}finally{ne=!1}}}function Q(){W||(W=!0,K(),T=setInterval(K,U),z(),te=setInterval(z,G),window.addEventListener("beforeunload",()=>{te&&(clearInterval(te),te=null),T&&(clearInterval(T),T=null)}))}function Z(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById(f)&&P()&&(se(),l())}function se(){w=document.getElementById("liveFeedList"),x=document.getElementById("liveFeedPauseBtn"),R=document.getElementById("liveFeedSearch");let ee=document.getElementById("liveFeedClearBtn"),ae=document.querySelectorAll(".admin-live-feed-tab");x&&x.addEventListener("click",M),ee&&ee.addEventListener("click",()=>{C=[],j=[],D=0,l()});let oe=document.querySelector("[data-lf-jump-btn]");if(oe&&oe.addEventListener("click",E),w&&w.addEventListener("scroll",()=>{w.scrollTop<=8&&D>0&&(D=0,v())},{passive:!0}),ae.forEach(me=>{me.addEventListener("click",()=>{ae.forEach(re=>re.classList.remove("is-active")),me.classList.add("is-active"),p=me.dataset.tab||"all",l()})}),R){let me=null;R.addEventListener("input",()=>{clearTimeout(me),me=setTimeout(()=>{$=R.value.trim(),l()},200)})}Q()}function ie(ee){if(!("ontouchstart"in window))return;let ae=0,oe=0,me=0,re=null,ve=null,fe=!1;function Se(_e){if(_e.querySelector(".admin-live-feed-row__swipe-actions"))return;let H=_e.dataset.id,V=C.find(le=>le.id===H),Y=!!(V&&V.data&&V.data.message_id),X=document.createElement("div");X.className="admin-live-feed-row__swipe-actions",X.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${Y?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,X.addEventListener("click",function(le){let ue=le.target.closest("[data-swipe-act]");if(!ue||ue.disabled)return;let pe=_e.dataset.id,ge=C.find(he=>he.id===pe);if(!ge||!ge.data)return;let be=ue.dataset.swipeAct;be==="ban"?ge.data.fingerprint&&e("fingerprint",ge.data.fingerprint,pe):be==="recall"&&d(ge),_e.classList.remove("is-swiped")}),_e.appendChild(X)}ee.addEventListener("touchstart",function(_e){let H=_e.target.closest(".admin-live-feed-row");H&&(_e.target.closest(".admin-live-feed-row__swipe-actions")||(re=H,fe=!1,ae=_e.touches[0].clientX,oe=_e.touches[0].clientY,me=0))},{passive:!0}),ee.addEventListener("touchmove",function(_e){if(!re||fe)return;let H=_e.touches[0],V=H.clientX-ae,Y=H.clientY-oe;if(Math.abs(Y)>Math.abs(V)&&Math.abs(Y)>12){fe=!0;return}if(me=V,V<-10){Se(re),ve=re,re.classList.add("is-swiping");let X=Math.max(-180,V);re.style.transform=`translateX(${X}px)`}else V>10&&re.classList.contains("is-swiped")&&(re.style.transform="")},{passive:!0}),ee.addEventListener("touchend",function(){re&&(re.classList.remove("is-swiping"),re.style.transform="",me<=-60?re.classList.add("is-swiped"):re.classList.remove("is-swiped"),re=null,ve=null,me=0)},{passive:!0})}function de(){return w?Array.from(w.querySelectorAll(".admin-live-feed-row")):[]}function ce(){let ee=de(),ae=document.activeElement;for(let oe of ee)if(oe===ae||oe.contains(ae))return oe;return null}function ke(ee){let ae=de();if(!ae.length)return!1;let oe=ce(),me=oe?ae.indexOf(oe)+ee:ee>0?0:ae.length-1;return me=Math.max(0,Math.min(ae.length-1,me)),ae[me].focus(),ae[me].scrollIntoView({block:"nearest"}),!0}function Ee(ee){let ae=ce();if(!ae)return!1;let oe=C.find(re=>re.id===ae.dataset.id);if(!oe)return!1;let me=ee==="keyword"?oe.data.text:oe.data.fingerprint;return me?(e(ee,me,oe.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return C.slice()},isVisible:function(){return!!(w&&w.offsetParent!==null)},isPaused:function(){return F},moveFocus:ke,blockFocused:Ee,togglePause:function(){M()}},document.addEventListener("admin-panel-rendered",Z),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Z):Z()})()});var St=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.loadDetailsState,k=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;function f(l,m=!1){var a=y();return a[l]!==void 0?a[l]:m}function C(l){var m=y();m[l.id]=l.open,k(m)}let j=!1;new MutationObserver(()=>{let l=document.getElementById("settings-grid");if(l&&!(document.getElementById("sec-plugins")||j)){j=!0;try{$(l)}finally{j=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function $(l){let m=`
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
      `;l.insertAdjacentHTML("beforeend",m);let a=document.querySelector("[data-console-filters]");a&&a.addEventListener("click",s=>{let u=s.target.closest("[data-console-filter]");u&&(a.querySelectorAll("[data-console-filter]").forEach(v=>v.classList.toggle("is-active",v===u)),D=u.dataset.consoleFilter,b())}),document.getElementById("pluginsReloadBtn").addEventListener("click",n),A(),O()}let p=0,N=0,D="all",w=[],x=80;function R(l){let m=(l||"INFO").toUpperCase();return m==="ERROR"?"is-error":m==="WARN"?"is-warn":m==="DEBUG"?"is-debug":"is-info"}function S(l){let m=new Date(l*1e3),a=s=>String(s).padStart(2,"0");return`${a(m.getHours())}:${a(m.getMinutes())}:${a(m.getSeconds())}`}function b(){let l=document.getElementById("pluginsConsoleBody");if(!l)return;let m=D==="all"?w:w.filter(a=>(a.level||"INFO").toUpperCase()===D);if(m.length===0){let a=D==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${D} lines yet \xB7 waiting\u2026`;l.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${a}</span>
          </div>`;return}l.innerHTML=m.map(a=>{let s=S(a.ts),u=(a.msg||"").replace(/[<>&"]/g,_=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[_]),v=(a.plugin||"\u2014").replace(/[<>&"]/g,_=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[_]),E=(a.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${s}</span>
          <span class="lv ${R(a.level)}">${E}</span>
          <span class="plg">${v}</span>
          <span class="msg">${u}</span>
        </div>`}).join("")}async function I(){try{let l=await fetch(`/admin/plugins/console?since=${p}`,{credentials:"same-origin"});if(!l.ok)return;let m=await l.json();if(!Array.isArray(m.events)||m.events.length===0)return;for(w.unshift(...m.events);w.length>x;)w.pop();p=m.latest_seq||p,b()}catch{}}function O(){N||(N=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:I}))}async function A(){let l=document.getElementById("pluginsList");if(l)try{let m=await csrfFetch("/admin/plugins/list");if(!m.ok)throw new Error(`HTTP ${m.status}`);let s=(await m.json()).plugins||[];if(s.length===0){l.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",B([]);return}l.innerHTML=s.map(h).join(""),i(l),B(s)}catch(m){console.error("Failed to load plugins:",m),l.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function B(l){let m=l.length,a=l.filter(_=>_.enabled).length,s=m-a,u=l.map(_=>_.priority).filter(_=>typeof _=="number"),v=u.length?Math.round(u.reduce((_,L)=>_+L,0)/u.length):null,E=(_,L)=>{document.querySelectorAll(`[data-plugins-stat="${_}"]`).forEach(M=>{M.textContent=L})};E("loaded",m),E("running",a),E("paused",s),E("priority",v??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(_=>{_.textContent=m})}function h(l){let{name:m,version:a,description:s,priority:u,enabled:v,is_user:E,file:_}=l,L=`plugin-toggle-${m}`,M=t(u),P=e(u),W=r(l),T=E&&_?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${g(_)}"
            data-plugin-name="${g(m)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${g(m)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${g(m)}">
          <span class="admin-plugins-dot ${v?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${g(m)}</div>
            ${s?`<div class="desc">${g(s)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${a?"v"+g(a):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${M}">${u??"\u2014"}${P?" \xB7 "+P:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${d(W)}">${W}</span>
          <div class="admin-plugins-toggle-cell">
            ${T}
            <label class="admin-plugins-switch" for="${L}">
              <input type="checkbox" id="${L}" role="switch"
                aria-checked="${!!v}" aria-label="Toggle plugin ${g(m)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${g(m)}"
                ${v?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function c(l,m){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:l}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:m}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let s=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:m})}),u=await s.json().catch(()=>({}));if(!s.ok){showToast(u.error||ServerI18n.t("pluginsToastRemoveFailed",{status:s.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:l}),!0),await A()}catch(s){showToast(ServerI18n.t("pluginsToastNetError",{msg:s.message||""}),!1)}}function r(l){let m=l.file||l.path||l.source||"";if(typeof m=="string"){if(m.endsWith(".py"))return"PY";if(m.endsWith(".js"))return"JS"}return(l.language||"PY").toUpperCase()}function t(l){return l==null?"is-muted":l<=10?"is-danger":l<=50?"is-warn":"is-cyan"}function d(l){return l==="JS"?"is-cyan":l==="PY"?"is-warn":"is-muted"}function e(l){return l==null?"":l<=10?"CRITICAL":l<=50?"HIGH":"NORMAL"}function i(l){l.querySelectorAll(".plugin-toggle").forEach(m=>{m.addEventListener("change",async function(){let a=this.dataset.pluginName,s=this.checked;await o(a,s,this)})}),l.querySelectorAll(".plugin-uninstall").forEach(m=>{m.addEventListener("click",function(){c(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function o(l,m,a){let s=m?"/admin/plugins/enable":"/admin/plugins/disable";try{let u=await csrfFetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})});if(!u.ok){let v=await u.json().catch(()=>({}));throw new Error(v.error||`HTTP ${u.status}`)}showToast(m?ServerI18n.t("pluginEnabled").replace("{name}",l):ServerI18n.t("pluginDisabled").replace("{name}",l),!0)}catch(u){console.error(`Failed to ${m?"enable":"disable"} plugin:`,u),showToast(u.message||ServerI18n.t("operationFailed"),!1),a&&(a.checked=!m)}}async function n(){let l=document.getElementById("pluginsReloadBtn");l&&(l.disabled=!0);try{let m=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!m.ok){let a=await m.json().catch(()=>({}));throw new Error(a.error||`HTTP ${m.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await A()}catch(m){console.error("Failed to reload plugins:",m),showToast(m.message||ServerI18n.t("reloadFailed"),!1)}finally{l&&(l.disabled=!1)}}})})()});var kt=ye(()=>{(function(){"use strict";let y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},k={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},g=null,f=null;function C(){return g||(g=document.createElement("div"),g.className="admin-pu-backdrop",g.hidden=!0,g.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(g),g.addEventListener("click",t=>{(t.target.matches("[data-pu-close]")||t.target===g)&&r()}),g)}function j(t){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((e,i)=>{let o=i+1,n=o<t,m=n?"is-done":o===t?"is-active":"";return(i>0?`<span class="admin-pu-step-line ${n?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${m}">
          <span class="circle">${n?"\u2713":o}</span>
          <span class="label">${e}</span>
        </div>`}).join("")}function F(t,d){f.step=t;let e=g.querySelector("[data-pu-steps]");e&&(e.innerHTML=j(t));let i=g.querySelector("[data-pu-body]");i&&(i.innerHTML=d)}function $(t){let d=t==="error-type"?ServerI18n.t("pluginsUploadErrorType"):t==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):t==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):t==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),e=(t||"").startsWith("error")?"\u2715":t==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(t||"").startsWith("error")?"is-error":t==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${e}</div>
          <div class="admin-pu-dropzone-msg">${y(d)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function p(){let t=g.querySelector("[data-pu-dropzone]"),d=g.querySelector("[data-pu-file]"),e=g.querySelector("[data-pu-browse]");e&&e.addEventListener("click",()=>d&&d.click()),d&&d.addEventListener("change",()=>{d.files&&d.files[0]&&N(d.files[0])}),t&&(t.addEventListener("click",()=>d&&d.click()),t.addEventListener("dragover",i=>{i.preventDefault(),t.classList.add("is-over")}),t.addEventListener("dragleave",()=>t.classList.remove("is-over")),t.addEventListener("drop",i=>{i.preventDefault(),t.classList.remove("is-over");let o=i.dataTransfer&&i.dataTransfer.files;if(!(!o||o.length===0)){if(o.length>1){F(1,$("error-multi")),p();return}N(o[0])}}))}function N(t){if(!t.name.match(/\.py$/i)){F(1,$("error-type")),p();return}if(t.size>256*1024){F(1,$("error-size")),p();return}f.file=t,F(2,D(t.name)),w(t)}function D(t){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${y(t)}</div>
      </div>`}async function w(t){try{let d=new FormData;d.append("file",t);let e=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:d}),i=await e.json().catch(()=>({}));if(!e.ok&&!i.validation){window.showToast?.(i.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:e.status}),!1),F(1,$()),p();return}f.manifest=i.manifest||{},f.validation=i.validation||{},f.filename=i.filename||t.name,x(f)}catch(d){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:d.message||""}),!1),F(1,$()),p()}}function x(t){let d=t.manifest||{},e=t.validation||{},i="";if(!e.syntax_ok)i=R(e.syntax_err,t);else if(Object.keys(d).length===0)i=S(t);else{let o=(e.deps||[]).some(n=>n.status==="missing");i=O(d,e,t,o)}F(2,`<div class="admin-pu-step2">${i}</div>`),A()}function R(t,d){let e=t&&t.line?t.line:"?",i=t&&t.msg?t.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${e}</span>
        </div>
        <pre class="admin-pu-syntax-body">${y(`>>> ${d.filename}
${i}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function S(t){return`
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
      </footer>`}function b(t){return t==null?"is-muted":t<=10?"is-danger":t<=50?"is-warn":"is-cyan"}function I(t){if(t==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let d=b(t),e=t<=10?"CRITICAL":t<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${d}">${t} \xB7 ${e}</span>`}function O(t,d,e,i){let o=t.name||e.filename.replace(/\.(py|js)$/i,""),n=t.version?`v${y(t.version)}`:"\u2014",l=t.author?`@${y(t.author.replace(/^@/,""))}`:"\u2014",m=t.description||ServerI18n.t("pluginsUploadNoDescription"),a="PY",s="is-warn",u=Array.isArray(t.permissions)?t.permissions:[],v=Object.keys(k).map(P=>{let W=u.includes(P);return`
        <div class="admin-pu-perm-row ${W?"is-req":"is-not"}">
          <span class="dot">${W?"\u25CF":"\u25CB"}</span>
          <span class="key">${y(P)}</span>
          <span class="label">${y(ServerI18n.t(k[P]))}</span>
        </div>`}).join(""),E=d.deps||[],_=E.map(P=>{let W=P.status==="ok"?"is-ok":P.status==="warn"?"is-warn":"is-err",T=P.status==="ok"?"\u2713":P.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${W}">
          <span class="dot">${T}</span>
          <span class="name">${y(P.name)}</span>
          <span class="note">${y(P.note||"")}</span>
        </div>`}).join(""),L=d.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${y(o)}</span>`})}
      </div>`:"",M=E.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${_}</div>
      </section>`;return`
      ${L}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${y(o)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${n}</span>
          <span class="author">${l}</span>
          <span class="admin-ui-pill admin-pu-pill ${s}" style="margin-left:auto">${a}</span>
        </div>
        <div class="admin-pu-manifest-desc">${y(m)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${I(t.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${v}</div>
        </section>
        ${M}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${i?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${i?"disabled":""} data-pu-confirm>${i?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function A(){let t=g.querySelector("[data-pu-back]");t&&t.addEventListener("click",()=>{f.file=null,f.manifest=null,f.validation=null,F(1,$()),p()});let d=g.querySelector("[data-pu-confirm]");d&&d.addEventListener("click",()=>B());let e=g.querySelector("[data-pu-no-manifest-ack]");e&&d&&e.addEventListener("change",()=>{d.disabled=!e.checked})}function B(){let t=f.manifest||{},d=t.name||(f.filename||"").replace(/\.(py|js)$/i,""),e=t.version?`v${y(t.version)}`:"\u2014",i=Array.isArray(t.permissions)?t.permissions:[],o=i.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:i.map(m=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${y(m)}</span></div>`).join("");F(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${y(d)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${e}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${o}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${y(f.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:t.priority!=null?t.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let n=g.querySelector("[data-pu-install]");n&&n.addEventListener("click",h);let l=g.querySelector("[data-pu-back]");l&&l.addEventListener("click",()=>x(f))}async function h(){F(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let t=new FormData;t.append("file",f.file);let d=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:t}),e=await d.json().catch(()=>({}));if(!d.ok){window.showToast?.(e.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:d.status}),!1),x(f);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:e.name||f.filename}),!0),r();let i=document.getElementById("pluginsReloadBtn");i&&i.click()}catch(t){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:t.message||""}),!1),x(f)}}function c(){C(),f={step:1,file:null,manifest:null,validation:null,filename:null},F(1,$()),p(),g.hidden=!1,document.body.classList.add("admin-pu-open")}function r(){g&&(g.hidden=!0,document.body.classList.remove("admin-pu-open"),f=null)}window.AdminPluginUpload={open:c,close:r},document.addEventListener("click",t=>{t.target.closest("#pluginsUploadBtn")&&(t.preventDefault(),c())})})()});var It=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k="sec-webhooks",g=12e3,f=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function C(o,n){return o?o.length>n?o.slice(0,n)+"\u2026":o:""}function j(o){if(!o)return"\u2014";try{let n=new Date(o),l=Math.max(0,(Date.now()-n.getTime())/1e3);return l<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(l)}):l<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(l/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(l/86400)})}catch{return"\u2014"}}function F(o){if(!o)return"\u2014";try{return new URL(o).hostname}catch{return C(o,30)}}function $(o){return o==="active"?"is-success":o==="degraded"?"is-warn":"is-muted"}let p={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:f,eventCatalogLoaded:!1};function N(){let o=document.getElementById("advanced-grid")||document.getElementById("settings-grid");!o||document.getElementById(k)||(o.insertAdjacentHTML("beforeend",`
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
    `),D())}function D(){let o=document.getElementById(k);if(!o)return;let n=document.getElementById("wh-register-form");n&&n.addEventListener("submit",async l=>{l.preventDefault();let m=document.getElementById("wh-url").value.trim();if(!m)return;let a=Array.from(n.querySelectorAll('input[name="wh-event"]:checked')).map(E=>E.value);if(a.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let s=document.getElementById("wh-format").value,u=document.getElementById("wh-secret").value.trim(),v={url:m,events:a,format:s};u&&(v.secret=u);try{let E=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}),_=await E.json();E.ok&&_.hook_id?(showToast(ServerI18n.t("webhookRegistered")),n.reset(),I(),n.hidden=!0,await w()):showToast(_.error||ServerI18n.t("registrationFailed"),!1)}catch(E){console.error("Webhook register error:",E),showToast(ServerI18n.t("registrationFailed"),!1)}}),o.querySelectorAll(".admin-ui-page-actions [data-wh-action='show-add']").forEach(l=>l.addEventListener("click",()=>{n&&(n.hidden=!1)})),o.addEventListener("click",l=>{if(l.target.closest("[data-wh-action='show-add']")){n&&(n.hidden=!1);return}if(l.target.closest("[data-wh-action='hide-add']")){n&&(n.hidden=!0);return}let s=l.target.closest("[data-wh-log-filter]");if(s){p.deliveryFilter=s.dataset.whLogFilter,o.querySelectorAll("[data-wh-log-filter]").forEach(W=>{W.classList.toggle("is-active",W.dataset.whLogFilter===p.deliveryFilter)}),c();return}let u=l.target.closest("[data-wh-action='test']");if(u){l.stopPropagation(),d(u.dataset.whHookId);return}let v=l.target.closest("[data-wh-action='settings']");if(v){l.stopPropagation(),r(v.dataset.whHookId);return}if(l.target.closest("[data-wh-action='close-detail']")){p.selectedHookId=null,t(),B();return}let _=l.target.closest("[data-wh-action='detail-ping']");if(_){d(_.dataset.whHookId);return}let L=l.target.closest("[data-wh-action='detail-toggle']");if(L){e(L.dataset.whHookId,L.dataset.whNextEnabled==="1");return}let M=l.target.closest("[data-wh-action='detail-delete']");if(M){i(M.dataset.whHookId);return}let P=l.target.closest("[data-wh-hook-row]");if(P&&!l.target.closest("button")){r(P.dataset.whHookId);return}}),p.stopPoll||(p.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(k)},intervalMs:g,tick:w}))}async function w(){await S(),await Promise.all([x(),R()]),O(),B(),c(),t()}async function x(){try{let n=await(await csrfFetch("/admin/webhooks/list")).json();p.hooks=Array.isArray(n.webhooks)?n.webhooks:[]}catch{p.hooks=[]}}async function R(){try{let o=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!o.ok)return;let n=await o.json();p.deliveries=Array.isArray(n.deliveries)?n.deliveries:[],p.stats=n.stats||null}catch{}}async function S(){if(!p.eventCatalogLoaded)try{let o=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(o.ok){let n=await o.json(),l=Array.isArray(n.events)?n.events:[];l.length&&(p.eventCatalog=l)}}catch{}finally{p.eventCatalogLoaded=!0,I()}}function b(o){let n=o&&o.slug?String(o.slug):"";if(o&&o.labelKey){let u=ServerI18n.t(o.labelKey);return{slug:n,label:u?u+" \xB7 "+n:n,title:u}}let l=o&&o.zh?String(o.zh):"",m=o&&o.en?String(o.en):"",a=window.ServerI18n&&ServerI18n.currentLang||"zh",s=(o&&o[a]?String(o[a]):"")||m||l;return{slug:n,label:s?s+" \xB7 "+n:n,title:l&&m?l+" \xB7 "+m:l||m}}function I(){let o=document.querySelector("[data-wh-register-events]");o&&(o.innerHTML=p.eventCatalog.map(function(n){let l=b(n);if(!l.slug)return"";let m=l.slug==="on_danmu"?" checked":"";return'<label title="'+y(l.title)+'"><input type="checkbox" name="wh-event" value="'+y(l.slug)+'"'+m+" /> "+y(l.label)+"</label>"}).join(""))}function O(){let o=document.querySelector("[data-wh-stats]");if(!o)return;let n=p.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};o.innerHTML=`
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
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel",{n:A()})}</div>
        <div class="v" style="color:${n.dropped_24h>0?"var(--hud-crimson)":"var(--color-text-secondary)"}">${n.dropped_24h}</div>
      </div>`}function A(){return p.hooks.length&&p.hooks[0].retry_count||3}function B(){let o=document.getElementById("wh-list"),n=document.querySelector("[data-wh-count]");if(o){if(n&&(n.textContent=String(p.hooks.length)),p.hooks.length===0){o.innerHTML="";let l=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let m=document.getElementById("wh-register-form");m&&(m.hidden=!1),document.getElementById("wh-url")?.focus()}});l.dataset.emptyKind="webhooks",o.appendChild(l);return}o.innerHTML=p.hooks.map(h).join("")}}function h(o){let n=y(o.id||""),l=Number(o.success_count)||0,m=Number(o.fail_count)||0,a=l+m,s=a>0?Math.round(l/a*1e3)/10:100,u=o.enabled!==!1,v=Number(o.last_status)||null,E=u?v&&v>=400||o.last_error?"degraded":"active":"paused",_=E==="active"?"var(--hud-lime)":E==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",L=E==="active"?"ACTIVE":E==="degraded"?"DEGRADED":"PAUSED",M=p.selectedHookId===o.id?" is-selected":"",P=$(E),W=(o.events||[]).map(function(q){return'<span class="admin-ui-pill admin-wh-evt-chip">'+y(q)+"</span>"}).join(""),T=o.last_error?'<div class="admin-wh-card-warn">\u26A0 '+y(C(o.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${M}" data-wh-hook-row data-wh-hook-id="${n}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${_};box-shadow:${u?"0 0 6px "+_:"none"}"></span>
          <span class="name">${y(F(o.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${P}">${L}</span>
          <span class="last">last \xB7 ${y(j(o.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${y(o.url)}</div>
        <div class="admin-wh-card-events">${W}</div>
        ${T}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${s}%;background:${_}"></div></div>
            <span class="pct" style="color:${_}">${s}%</span>
          </div>
          <span class="counter ok">\u2713 ${l.toLocaleString()}</span>
          <span class="counter ${m>0?"fail":"fail-zero"}">\u2717 ${m}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${n}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${n}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function c(){let o=document.getElementById("wh-log-list");if(!o)return;let n=p.deliveries.filter(function(l){return p.deliveryFilter==="all"?!0:p.deliveryFilter==="failed"?!l.ok:p.deliveryFilter==="2xx"?l.code&&l.code>=200&&l.code<300:p.deliveryFilter==="5xx"?l.code&&l.code>=500:!0});if(n.length===0){o.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}o.innerHTML=n.map(function(l){let m=l.ts?new Date(l.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",a=l.code?String(l.code):"\u2014",s=l.ok?"var(--hud-lime)":"var(--hud-crimson)",u=l.duration_ms?l.duration_ms>=1e3?(l.duration_ms/1e3).toFixed(1)+"s":l.duration_ms+"ms":"\u2014",v=l.ok?"var(--color-text-strong)":"var(--hud-amber)",E=y(F(l.hook_url||"")),_=(l.retries||0)===0?"\u2014":"\xD7"+l.retries,L=(l.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${l.dropped?" is-dropped":""}">
          <span class="time">${y(m)}</span>
          <span class="code" style="color:${s};border-color:${s}55;background:${s}15;">${a}</span>
          <span class="dur" style="color:${v}">${y(u)}</span>
          <span class="ep">${E}</span>
          <span class="evt">${y(l.event||"")}</span>
          <span class="retry" style="color:${L}">${_}</span>
        </div>`}).join("")}function r(o){p.selectedHookId=o,B(),t()}function t(){let o=document.querySelector("[data-wh-detail]");if(!o)return;let n=p.hooks.find(function(E){return E.id===p.selectedHookId});if(!n){o.hidden=!0,o.innerHTML="";return}o.hidden=!1;let l=n.enabled!==!1,m=Number(n.last_status)||null,a=l?m&&m>=400||n.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",s=new Set(n.events||[]),u=p.eventCatalog.map(function(E){let _=b(E),L=s.has(_.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(L?"is-active is-on":"")+'" title="'+y(_.title)+'"><span aria-hidden="true">'+(L?"\u2713":"\u25CB")+"</span><span>"+y(_.label)+"</span></label>"}).join(""),v={event:n.events&&n.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:n.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};o.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+a+";box-shadow:0 0 6px "+a+'"></span><span class="name">'+y(F(n.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+u+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(n.retry_count!=null?n.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(n.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+y(JSON.stringify(v,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+y(n.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+y(n.id)+'" data-wh-next-enabled="'+(l?"0":"1")+'">'+(l?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+y(n.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function d(o){if(o)try{let n=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o})}),l=await n.json();n.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(l.error||ServerI18n.t("testFailed"),!1),setTimeout(w,1500)}catch(n){console.error("Webhook test error:",n),showToast(ServerI18n.t("testFailed"),!1)}}async function e(o,n){if(o)try{let l=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o,enabled:n})}),m=await l.json();if(!l.ok){showToast(m.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let a=p.hooks.find(function(s){return s.id===o});a&&(a.enabled=m.enabled),showToast(m.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),O(),B(),t()}catch(l){console.error("Webhook toggle error:",l),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function i(o){if(!(!o||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let l=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o})}),m=await l.json();l.ok?(showToast(ServerI18n.t("webhookDeleted")),p.selectedHookId===o&&(p.selectedHookId=null),w()):showToast(m.error||ServerI18n.t("deleteFailed"),!1)}catch(l){console.error("Webhook delete error:",l),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(k)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),N()})})()});var Tt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k="sec-sounds",g=null,f=[],C=[];async function j(){try{let c=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!c.ok)throw new Error(await c.text());let r=await c.json();f=r.sounds||[],C=r.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",f.length||"")}catch(c){console.error("Failed to fetch sounds:",c),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),f=[],C=[]}}async function F(){return j()}async function $(c,r){let t=new FormData;t.append("file",c),t.append("name",r);let d=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:t}),e=await d.json();if(!d.ok)throw new Error(e.error||"Upload failed");return e}async function p(c){let r=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),t=await r.json();if(!r.ok)throw new Error(t.error||"Delete failed");return t}async function N(c){let r=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),t=await r.json();if(!r.ok)throw new Error(t.error||"Failed to add rule");return t}async function D(c){let r=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c})}),t=await r.json();if(!r.ok)throw new Error(t.error||"Failed to delete rule");return t}function w(){let c=document.getElementById("soundsList");if(c){if(f.length===0){c.innerHTML="";var r=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});r.dataset.emptyKind="sounds",r.style.gridColumn="1 / -1",c.appendChild(r);return}c.innerHTML=f.map(function(d){var e=y(d.name),i=Math.round((d.volume!=null?d.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+y(d.name)+'"><div class="name" title="'+e+'">'+e+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+y(d.name)+'" min="0" max="100" step="1" value="'+i+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+y(d.name)+'" style="min-width:32px;text-align:right">'+i+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+y(d.name)+'">'+y(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+y(d.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),c.querySelectorAll(".sound-play-btn").forEach(function(d){d.addEventListener("click",function(){var e=d.dataset.name,i=f.find(function(o){return o.name===e});i&&(g&&(g.pause(),g=null),g=new Audio(i.url),g.volume=.5,g.play().catch(function(o){console.warn("Audio preview failed:",o)}))})}),c.querySelectorAll(".sound-delete-btn").forEach(function(d){d.addEventListener("click",async function(){var e=d.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",e),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await p(e),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",e),!0),await j(),w(),R()}catch(o){window.showToast(o.message,!1)}})});var t={};c.querySelectorAll(".sound-volume-slider").forEach(function(d){var e=d.dataset.name,i=c.querySelector('.sound-volume-label[data-name="'+CSS.escape(e)+'"]');d.addEventListener("input",function(){i&&(i.textContent=d.value+"%"),clearTimeout(t[e]),t[e]=setTimeout(function(){x(e,Number(d.value)/100)},300)}),d.addEventListener("change",function(){clearTimeout(t[e]),x(e,Number(d.value)/100)})})}}async function x(c,r){try{var t=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(c)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:r})}),d=await t.json();if(!t.ok){window.showToast(d.error||"Volume update failed",!1);return}var e=f.find(function(i){return i.name===c});e&&(e.volume=r),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(r*100)}),!0)}catch(i){console.warn("[admin-sounds] volume save failed:",i),window.showToast("Network error",!1)}}function R(){let c=document.getElementById("ruleSoundName");if(!c)return;let r=c.value;if(c.innerHTML="",f.length===0){let t=document.createElement("option");t.value="",t.textContent=ServerI18n.t("noSoundsAvailable"),t.disabled=!0,c.appendChild(t);return}f.forEach(t=>{let d=document.createElement("option");d.value=t.name,d.textContent=t.name,c.appendChild(d)}),r&&[...c.options].some(t=>t.value===r)&&(c.value=r)}function S(){let c=document.getElementById("rulesList");if(c){if(C.length===0){c.innerHTML="";var r=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});r.dataset.emptyKind="sound-rules",c.appendChild(r);return}c.innerHTML=C.map(function(t){var d=t.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):t.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",t.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",t.trigger_value),e=Math.round((t.volume!=null?t.volume:1)*100),i=ServerI18n.t("soundDetailLine").replace("{sound}",t.sound_name).replace("{vol}",e).replace("{cd}",t.cooldown!=null?t.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+y(String(t.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+y(d)+'</div><div class="admin-sounds-rule-detail">'+y(i)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+y(String(t.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),c.querySelectorAll(".sound-rule-del-btn").forEach(function(t){t.addEventListener("click",async function(){try{await D(t.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await F(),S()}catch(d){window.showToast(d.message,!1)}})})}}function b(){let c=document.getElementById("soundUploadBtn");c&&c.addEventListener("click",async()=>{let r=document.getElementById("soundFileInput"),t=document.getElementById("soundNameInput"),d=r.files[0];if(!d){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let e=t.value.trim();if(!e){window.showToast(ServerI18n.t("enterSoundName"),!1);return}c.disabled=!0,c.textContent=ServerI18n.t("uploadingStatus");try{await $(d,e),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",e),!0),r.value="",t.value="",await j(),w(),R()}catch(i){window.showToast(i.message,!1)}finally{c.disabled=!1,c.textContent=ServerI18n.t("soundsUploadIdle")}})}function I(){let c=document.getElementById("addRuleBtn");c&&c.addEventListener("click",async()=>{let r=document.getElementById("ruleTriggerType").value,t=document.getElementById("ruleTriggerValue").value.trim(),d=document.getElementById("ruleSoundName").value,e=document.getElementById("ruleVolume"),i=document.getElementById("ruleCooldown");if(r!=="all"&&!t){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!d){window.showToast(ServerI18n.t("selectSound"),!1);return}let o=parseInt(e.value,10)/100,n=parseInt(i.value,10)||0,l={trigger_type:r,trigger_value:r==="all"?"":t,sound_name:d,volume:Math.max(0,Math.min(1,o)),cooldown:Math.max(0,n)};c.disabled=!0;try{await N(l),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await F(),S()}catch(m){window.showToast(m.message,!1)}finally{c.disabled=!1}})}function O(){let c=document.getElementById("ruleTriggerType"),r=document.getElementById("ruleTriggerValue");if(!c||!r)return;function t(){c.value==="all"?(r.disabled=!0,r.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),r.value=""):c.value==="keyword"?(r.disabled=!1,r.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):c.value==="effect"&&(r.disabled=!1,r.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}c.addEventListener("change",t),t()}function A(){let c=document.getElementById("ruleVolume"),r=document.getElementById("ruleVolumeLabel");!c||!r||c.addEventListener("input",()=>{r.textContent=c.value+"%"})}function B(){return`
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
    `}async function h(){let c=document.getElementById("settings-grid");if(c){if(c.insertAdjacentHTML("beforeend",B()),window.AdminSkeletons){let r=document.getElementById("soundsList");r&&(r.innerHTML="",r.appendChild(window.AdminSkeletons.listRows({rows:3})));let t=document.getElementById("rulesList");t&&(t.innerHTML="",t.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([j(),F()]),w(),R(),S(),b(),I(),O(),A()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let c=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(k)&&!c&&(c=!0,h().finally(()=>{c=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(k)&&(c=!0,h().finally(()=>{c=!1}))})})()});var _t=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k=/^[a-zA-Z0-9_]{1,32}$/,g=".png,.gif,.webp",f="sec-emojis",C=[];function j(){return`
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
    `}function F(A){let B=":"+A.name+":",h=Number(A.used)||0,c=h>0?ServerI18n.t("emojisUsedCount",{n:h}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+N(A.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+N(A.url)+'" alt="'+N(B)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+y(B)+'</div><div class="admin-em-v4__tile-meta">'+y(c)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+N(B)+'" title="'+N(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+N(A.name)+'" title="'+N(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function $(A){let B=document.querySelector("[data-em-quota-label]"),h=document.querySelector("[data-em-quota-fill]");if(!B||!h)return;let c=A.length,r=100;B.textContent=ServerI18n.t("emojisQuotaUsed",{n:c,max:r}),h.style.width=Math.min(100,c/r*100)+"%"}function p(A){let B=document.querySelector("[data-em-preview-body]");if(!B)return;if(!A||A.length===0){B.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let c=A.slice(0,3).map(r=>`<span class="admin-em-v4__preview-pair"><code>:${y(r.name)}:</code> \u2192 <img src="${N(r.url)}" alt=":${N(r.name)}:" /></span>`);B.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:c.join(" \xB7 ")})}function N(A){return y(A)}function D(A){var B=document.getElementById("emojiGrid"),h=document.getElementById("emojiCount");B&&(!A||A.length===0?(window.AdminEmpty?(B.innerHTML="",B.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var c=document.getElementById("emojiFileInput");c&&c.click()}}))):B.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("noEmojisUploaded"))+"</div>",h&&(h.textContent="0")):(B.innerHTML=A.map(F).join(""),h&&(h.textContent=String(A.length))),$(C),p(C))}function w(){var A=document.getElementById("emojiGrid");if(A)if(window.AdminSkeletons){A.innerHTML="";for(var B=0;B<8;B++){var h=document.createElement("div");h.className="admin-em-v4__tile admin-em-v4__tile--skel";var c=document.createElement("div");c.className="admin-em-v4__tile-thumb";var r=document.createElement("div");r.className="admin-skel",r.style.width="100%",r.style.height="100%",c.appendChild(r),h.appendChild(c);var t=document.createElement("div");t.className="admin-skel admin-skel-bar",t.style.width="60%",t.style.height="8px",t.style.margin="6px auto",h.appendChild(t),A.appendChild(h)}}else A.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadingEmojis"))+"</div>"}async function x(){try{var A=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!A.ok)throw new Error("HTTP "+A.status);var B=await A.json();C=B.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",C.length||""),R()}catch(c){console.error("[admin-emojis] fetch failed:",c);var h=document.getElementById("emojiGrid");h&&(h.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function R(){var A=document.getElementById("emojiSearchInput"),B=(A&&A.value||"").trim().toLowerCase(),h=B?C.filter(function(c){return(c.name||"").toLowerCase().includes(B)}):C;D(h)}async function S(){var A=document.getElementById("emojiNameInput"),B=document.getElementById("emojiFileInput"),h=document.getElementById("emojiUploadBtn");if(!(!A||!B||!h)){var c=A.value.trim(),r=B.files&&B.files[0];if(!c){showToast(ServerI18n.t("emojiNameRequired"),!1),A.focus();return}if(!k.test(c)){showToast(ServerI18n.t("emojiNameInvalid"),!1),A.focus();return}if(!r){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var t=r.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(t)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}h.disabled=!0,h.textContent=ServerI18n.t("uploadingStatus");try{var d=new FormData;d.append("name",c),d.append("emojifile",r);var e=await csrfFetch("/admin/emojis/upload",{method:"POST",body:d}),i=await e.json();e.ok?(showToast(i.message||ServerI18n.t("emojiUploadFallback")),A.value="",B.value="",await x()):showToast(i.error||ServerI18n.t("uploadFailed"),!1)}catch(o){console.error("[admin-emojis] upload error:",o),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{h.disabled=!1,h.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function b(A){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",A),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var h=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A})}),c=await h.json();h.ok?(showToast(c.message||ServerI18n.t("emojiDeleteFallback")),await x()):showToast(c.error||ServerI18n.t("deleteFailed"),!1)}catch(r){console.error("[admin-emojis] delete error:",r),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function I(A){try{await navigator.clipboard.writeText(A),showToast(ServerI18n.t("copiedLabel").replace("{label}",A))}catch{var B=document.createElement("textarea");B.value=A,B.style.position="fixed",B.style.opacity="0",document.body.appendChild(B),B.select(),document.execCommand("copy"),document.body.removeChild(B),showToast(ServerI18n.t("copiedLabel").replace("{label}",A))}}function O(){var A=document.getElementById("settings-grid");if(A){A.insertAdjacentHTML("beforeend",j());var B=document.getElementById("emojiUploadBtn");B&&B.addEventListener("click",S);var h=document.getElementById("emojiNameInput");h&&h.addEventListener("keydown",function(e){e.key==="Enter"&&(e.preventDefault(),S())});var c=document.getElementById("emojiSearchInput");c&&c.addEventListener("input",R);var r=document.getElementById("emojiGrid");r&&r.addEventListener("click",function(e){var i=e.target.closest(".emoji-copy-btn");if(i){I(i.dataset.label);return}var o=e.target.closest(".emoji-delete-btn");o&&b(o.dataset.name)});var t=document.querySelector("[data-em-dropzone]"),d=document.getElementById("emojiFileInput");t&&d&&(["dragenter","dragover"].forEach(function(e){t.addEventListener(e,function(i){i.preventDefault(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(e){t.addEventListener(e,function(i){i.preventDefault(),t.classList.remove("is-dragover")})}),t.addEventListener("drop",function(e){var i=e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0];if(i){var o=new DataTransfer;o.items.add(i),d.files=o.files;var n=document.getElementById("emojiNameInput");if(n&&!n.value){var l=i.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");n.value=l.slice(0,32),n.focus()}t.classList.add("is-dropping"),setTimeout(function(){t.classList.remove("is-dropping")},1200)}})),w(),x()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var A=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(f)&&O()});A.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&O()}})})()});var Et=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml,k="sec-stickers",g=["png","gif","webp"],f=".gif,.png,.webp",C="__all__",j=[],F=[],$=C;function p(c){return y(c)}function N(){var c=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,r=c?`
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
    `}function D(c){return c===C?j.length:j.filter(function(r){return r.pack_id===c}).length}function w(){var c=document.getElementById("stickerPackList");if(c){var r='<button type="button" class="admin-stickers-pack'+($===C?" is-active":"")+'" data-pack="'+C+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+D(C)+"</span></button>";F.forEach(function(t){var d=t.enabled?"is-success":"is-muted",e="admin-stickers-pack"+(t.id===$?" is-active":""),i=t.id==="default",o=i?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+p(t.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+p(t.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+p(t.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+p(t.id)+'" title="'+(t.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(t.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+p(t.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";r+='<div class="'+e+'" data-pack="'+p(t.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+p(t.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+d+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+y(t.name)+'</span><span class="admin-stickers-pack-count">'+D(t.id)+"</span></button>"+o+"</div>"}),c.innerHTML=r}}function x(c){var r=":"+c.name+":";return'<div class="admin-stickers-tile"><img src="'+p(c.url)+'" alt="'+p(r)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+p(r)+'">'+y(r)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+p(r)+'" title="'+p(ServerI18n.t("copyToClipboard"))+'">'+y(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+p(c.name)+'" title="'+p(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function R(){var c=document.getElementById("stickerGrid"),r=document.getElementById("stickerCount");if(c){var t=document.getElementById("stickerSearchInput"),d=(t&&t.value||"").trim().toLowerCase(),e=j.filter(function(o){return!($!==C&&o.pack_id!==$||d&&!(o.name||"").toLowerCase().includes(d))});if(e.length===0){c.innerHTML="";var i=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});i.dataset.emptyKind="stickers",i.style.gridColumn="1 / -1",c.appendChild(i),r&&(r.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}c.innerHTML=e.map(x).join(""),r&&(r.textContent=ServerI18n.t("stickersItemCount",{n:e.length}))}}async function S(){var c=document.getElementById("stickerGrid");if(c)try{var[r,t]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!r.ok)throw new Error("HTTP "+r.status);j=(await r.json()).stickers||[],F=t.ok?(await t.json()).packs||[]:[],$!==C&&!F.some(function(d){return d.id===$})&&($=C),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",F.length?ServerI18n.t("tabCountPacks",{n:F.length}):""),w(),R()}catch(d){console.error("[admin-stickers] fetch failed:",d),c.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function b(c,r){if(c==="select"){$=r,w(),R();return}if(c==="rename"){var t=F.find(function(E){return E.id===r}),d=prompt(ServerI18n.t("stickersPackNamePrompt"),t?t.name:"");if(!d)return;try{var e=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})}),i=await e.json();e.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await S()):window.showToast(i.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="toggle"){try{var o=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r)+"/toggle",{method:"POST"});o.ok&&await S()}catch{}return}if(c==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var n=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r),{method:"DELETE"}),l=await n.json();n.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),$===r&&($=C),await S()):window.showToast(l.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="up"||c==="down"){var m=F.slice().sort(function(E,_){return(E.order||0)-(_.order||0)}),a=m.findIndex(function(E){return E.id===r});if(a<0)return;var s=c==="up"?a-1:a+1;if(s<0||s>=m.length)return;var u=m[a],v=m[s];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(u.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:v.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(v.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:u.order||0})})]),await S()}catch{}}}async function I(){var c=prompt(ServerI18n.t("stickersNewPackPrompt"));if(c)try{var r=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),t=await r.json();r.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),$=t.pack&&t.pack.id?t.pack.id:$,await S()):window.showToast(t.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function O(){var c=document.getElementById("stickerFileInput"),r=document.getElementById("stickerUploadBtn");if(!(!c||!r)){var t=c.files&&c.files[0];if(!t){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var d=t.name.split(".").pop().toLowerCase();if(g.indexOf(d)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}r.disabled=!0;var e=r.textContent;r.textContent=ServerI18n.t("uploadingStatus");try{var i=new FormData;i.append("file",t),$&&$!==C&&i.append("pack_id",$);var o=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:i}),n=await o.json();o.ok?(window.showToast(n.message||ServerI18n.t("stickerUploadFallback")),c.value="",await S()):window.showToast(n.error||ServerI18n.t("uploadFailed"),!1)}catch(l){console.error("[admin-stickers] upload error:",l),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{r.disabled=!1,r.textContent=e}}}async function A(c){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",c),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var t=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(c),{method:"DELETE"}),d=await t.json();t.ok?(window.showToast(d.message||ServerI18n.t("stickerDeleteFallback")),await S()):window.showToast(d.error||ServerI18n.t("deleteFailed"),!1)}catch(e){console.error("[admin-stickers] delete error:",e),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function B(c){try{await navigator.clipboard.writeText(c),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}catch{var r=document.createElement("textarea");r.value=c,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}}function h(){var c=document.getElementById("settings-grid");if(c){c.insertAdjacentHTML("beforeend",N());var r=document.getElementById("stickerUploadBtn");r&&r.addEventListener("click",O);var t=document.getElementById("stickerPackAddBtn");t&&t.addEventListener("click",I);var d=document.getElementById("stickerSearchInput");d&&d.addEventListener("input",R);var e=document.getElementById("stickerPackList");e&&e.addEventListener("click",function(o){var n=o.target.closest("[data-pack-action]");if(!n){var l=o.target.closest("[data-pack]");l&&b("select",l.dataset.pack);return}var m=n.dataset.packAction,a=n.dataset.packId;m==="select"&&!a&&(a=n.closest("[data-pack]")&&n.closest("[data-pack]").dataset.pack),b(m,a)});var i=document.getElementById("stickerGrid");i&&i.addEventListener("click",function(o){var n=o.target.closest(".sticker-copy-btn");if(n){B(n.dataset.label);return}var l=o.target.closest(".sticker-delete-btn");l&&A(l.dataset.name)}),S()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(k)&&h()});c.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(k)&&h()}})})()});var $t=ye(()=>{(function(){"use strict";let y="sec-extensions-overview",k=window.AdminUtils.escapeHtml,g=15e3,f=[{id:"slido",name:"Slido Extension",version:"v0.2.0",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload",href:"/static/extensions/danmu-slido-extension-0.2.0.zip"},{kind:"config",labelKey:"extSlidoStepConfig"}]},hasFireTokenUI:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],C={fireToken:null,plainToken:null,sources:[],sourcesTimer:0};function j(){return`
      <div id="${y}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${f.map(F).join("")}
        </div>
      </div>`}function F(S){let b=S.status==="ready",I="is-cold",O=b?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,A=b&&S.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${S.install.steps.map(h=>h.kind==="download"?`<li><a class="admin-ext-step-link" href="${h.href}" target="_blank" rel="noopener noreferrer">${k(ServerI18n.t(h.labelKey))} \u2193</a></li>`:`<li>${k(ServerI18n.t(h.labelKey))}</li>`).join("")}
          </ol>
        </div>`:"",B=S.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
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
      <article class="admin-ext-card" data-ext="${S.id}">
        <div class="admin-ext-head">
          <span class="admin-ext-status-dot ${I}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${S.color}">${S.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${k(S.name)}</div>
            <div class="meta"><span class="ver">${k(S.version)}</span></div>
          </div>
          ${O}
        </div>
        <p class="admin-ext-desc">${k(ServerI18n.t(S.descKey))}</p>
        ${A}
        ${B}
      </article>`}async function $(){try{let S=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!S.ok)return;C.fireToken=await S.json(),w()}catch{}}async function p(){try{let S=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!S.ok)return;let b=await S.json();C.sources=Array.isArray(b.sources)?b.sources:[],x()}catch{}}async function N(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let b=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!b.ok)throw new Error("HTTP "+b.status);let I=await b.json();C.fireToken={enabled:I.enabled,prefix:I.prefix,has_token:!0,rotated_at:I.rotated_at},C.plainToken=I.token,w(),window.AdminUtils.copyText(I.token,ServerI18n.t("extToastTokenGenerated"))}catch(b){console.warn("[ext] regen failed:",b),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function D(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let b=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!b.ok)throw new Error("HTTP "+b.status);C.fireToken=await b.json(),C.plainToken=null,w(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(b){console.warn("[ext] revoke failed:",b),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function w(){let S=document.querySelector("[data-fire-token-display]"),b=document.querySelector('[data-fire-token-action="copy"]'),I=document.querySelector('[data-fire-token-action="regen"]'),O=document.querySelector('[data-fire-token-action="revoke"]');if(!S)return;let A=C.fireToken;C.plainToken?(S.textContent=C.plainToken,S.classList.add("is-plain")):A&&A.has_token?(S.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:A.prefix||""}),S.classList.remove("is-plain")):(S.textContent=ServerI18n.t("extTokenNotSetHint"),S.classList.remove("is-plain")),b&&(b.disabled=!C.plainToken),I&&(I.textContent=A&&A.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),O&&(O.disabled=!(A&&A.has_token))}function x(){let S=new Set(C.sources.map(b=>b.source));document.querySelectorAll(".admin-ext-card").forEach(b=>{let I=f.find(B=>B.id===b.dataset.ext);if(!I)return;let O=b.querySelector("[data-ext-dot]");if(!O)return;let A=I.sourceMatch&&S.has(I.sourceMatch);O.classList.toggle("is-live",!!A),O.classList.toggle("is-cold",!A)})}function R(){let S=document.getElementById("settings-grid");if(!S||document.getElementById(y))return;S.insertAdjacentHTML("beforeend",j());let b=document.getElementById(y);b&&b.addEventListener("click",I=>{let O=I.target.closest("[data-fire-token-action]");if(!O)return;let A=O.dataset.fireTokenAction;A==="regen"?N():A==="revoke"?D():A==="copy"&&C.plainToken&&window.AdminUtils.copyText(C.plainToken,ServerI18n.t("firetokenToastCopied"))}),$(),C.stopPoll||(C.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(y)},intervalMs:g,tick:p}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&R()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&R()})})()});var xt=ye(()=>{(function(){"use strict";let y="sec-firetoken-overview",k=window.AdminUtils.escapeHtml,g=15e3,f={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function C(){return`
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
    `}async function j(){await Promise.all([F(),$(),p()])}async function F(){try{let B=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!B.ok)return;f.token=await B.json(),R()}catch{}}async function $(){try{let B=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!B.ok)return;let h=await B.json();f.usage24h=Array.isArray(h.usage_24h)?h.usage_24h:[],f.ips=Array.isArray(h.ips)?h.ips:[],b(),I(),S()}catch{}}async function p(){try{let B=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!B.ok)return;let h=await B.json();f.audit=Array.isArray(h.events)?h.events:[],O()}catch{}}async function N(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let h=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!h.ok)throw new Error("HTTP "+h.status);let c=await h.json();f.token={enabled:c.enabled,prefix:c.prefix,has_token:!0,rotated_at:c.rotated_at,created_at:c.created_at||c.rotated_at},f.plainToken=c.token,R(),window.AdminUtils.copyText(c.token,ServerI18n.t("firetokenToastGenerated")),p()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function D(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let h=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!h.ok)throw new Error("HTTP "+h.status);f.token=await h.json(),f.plainToken=null,R(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),p()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function w(B){if(!B)return"\u2014";let h=Date.now()/1e3-B;return h<60?ServerI18n.t("firetokenJustNow"):h<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(h/60)}):h<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(h/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(h/86400)})}function x(B){if(!B)return"\u2014";try{return new Date(B*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function R(){let B=f.token,h=document.querySelector("[data-ft-token-display]"),c=document.querySelector("[data-ft-status]"),r=document.querySelector('[data-ft-action="copy"]'),t=document.querySelector('[data-ft-action="regen"]'),d=document.querySelector('[data-ft-action="revoke"]'),e=document.querySelector('[data-ft-stat="created"]'),i=document.querySelector('[data-ft-stat="rotated"]'),o=document.getElementById("adminFtCurl");if(h&&(f.plainToken?(h.textContent=f.plainToken,h.classList.add("is-plain")):B&&B.has_token?(h.textContent=(B.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",h.classList.remove("is-plain")):(h.textContent=ServerI18n.t("firetokenNotSetHint"),h.classList.remove("is-plain")),c&&(B&&B.enabled&&B.has_token?(c.textContent=ServerI18n.t("firetokenStatusHealthy"),c.className="admin-ft-status is-good"):B&&B.has_token?(c.textContent=ServerI18n.t("firetokenStatusDisabled"),c.className="admin-ft-status is-warn"):(c.textContent=ServerI18n.t("firetokenStatusUnset"),c.className="admin-ft-status is-muted")),r&&(r.disabled=!f.plainToken),d&&(d.disabled=!(B&&B.has_token)),t&&(t.textContent=B&&B.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),e&&(e.textContent=B?x(B.created_at):"\u2014"),i&&(i.textContent=B?w(B.rotated_at):"\u2014"),o)){let n=f.plainToken?f.plainToken:B&&B.prefix?B.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";o.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${n}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function S(){let B=f.usage24h.map(e=>Number(e)||0),h=B.reduce((e,i)=>e+i,0),c=B.length?Math.max(...B):0,r=document.querySelector('[data-ft-stat="hits"]'),t=document.querySelector('[data-ft-stat="peak"]'),d=document.querySelector("[data-ft-peak-meta]");r&&(r.textContent=h.toLocaleString()),t&&(t.textContent=c.toLocaleString()),d&&(d.textContent=ServerI18n.t("firetokenPeakMeta",{peak:c.toLocaleString()}))}function b(){let B=document.getElementById("adminFtChart24h");if(!B)return;let h=f.usage24h.map(d=>Number(d)||0);if(!h.length){B.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let c=Math.max(...h),r=12e3,t=c>0?Math.min(100,r/Math.max(c,r)*100):100;B.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${h.map((d,e)=>{let i=c>0?Math.max(2,d/c*100):2;return`<div class="bar ${c>0&&d===c?"is-peak":""}" style="height:${i}%" title="${e.toString().padStart(2,"0")}:00 \u2014 ${d}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(d=>`<span>${String(d).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function I(){let B=document.getElementById("adminFtIps"),h=document.querySelector("[data-ft-ip-count]");if(!B)return;let c=f.ips||[];if(h&&(h.textContent=c.length?`${c.length} IP`:"\u2014"),!c.length){B.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let r=c[0]?.ip;B.innerHTML=c.map((t,d)=>{let e=d===0,i=t.source==="web"&&(t.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${e?"is-top":""}">
          <span class="ip">${k(t.ip||"?")}</span>
          ${e?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${i?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${k(t.source||"\u2014")}</span>
          <span class="cnt">${t.count||0} hits</span>
          <span class="when">${w(t.last_seen)}</span>
        </div>`}).join("")}function O(){let B=document.getElementById("adminFtAudit");if(!B)return;let h=f.audit||[];if(!h.length){B.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let c={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},r={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};B.innerHTML=h.map(t=>{let d=r[t.kind]||"is-info",e=c[t.kind]||t.kind,i=t.meta||{},o=i.prefix?` \xB7 prefix=${k(i.prefix)}`:i.enabled!=null?` \xB7 enabled=${i.enabled}`:"";return`
        <div class="admin-ft-audit-row ${d}">
          <span class="ts">${x(t.ts)}</span>
          <span class="kind">${k(e)}</span>
          <span class="detail">${o}</span>
        </div>`}).join("")}function A(){let B=document.getElementById("settings-grid");if(!B||document.getElementById(y))return;B.insertAdjacentHTML("beforeend",C());let h=document.getElementById(y);h&&h.addEventListener("click",c=>{let r=c.target.closest("[data-ft-action]");if(!r)return;let t=r.dataset.ftAction;t==="regen"?N():t==="revoke"?D():t==="copy"&&f.plainToken&&window.AdminUtils.copyText(f.plainToken,ServerI18n.t("firetokenToastCopied"))}),f.stopPoll||(f.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(y),intervalMs:g,tick:j}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&A()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&A()})})()});var Lt=ye(()=>{(function(){"use strict";let y="sec-about-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(A){return String(A).replace(/[&<>"']/g,function(B){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[B]})},g="Danmu Fire",f="https://github.com/guan4tou2/danmu-desktop",C=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],j=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],F="danmu.about.lastUpdateCheck",$={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function p(){return`
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
            ${C.slice(0,4).map(A=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${k(A.v)}</span>
                  ${A.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${k(A.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${A.notes.slice(0,3).map(B=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${k(B.t)}">${k(B.t.toUpperCase())}</span>
                      <span class="msg">${k(B.l)}</span>
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
              ${j.slice(0,6).map(A=>`
                <div class="admin-about-oss-row">
                  <span class="n">${k(A.n)}</span>
                  <span class="v">${k(A.v)}</span>
                  <span class="l">${k(A.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function N(A){if(!A||A<0)return"\u2014";let B=Math.floor(A/86400),h=Math.floor(A%86400/3600),c=Math.floor(A%3600/60);return B>0?`${B}d ${h}h`:h>0?`${h}h ${c}m`:`${c}m`}function D(){let A=document.querySelector("[data-about-tag]"),B=document.querySelector("[data-about-build]"),h=document.querySelector("[data-about-uptime]"),c=document.querySelector("[data-about-update]"),r=document.querySelector("[data-about-checked]"),t=document.querySelector("[data-about-env]"),d=document.querySelector("[data-about-ws-path]");if(A&&(A.textContent=`v${$.appVersion}`),B){let e=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";B.textContent=`BUILD \xB7 ${e} \xB7 stable channel`,t&&(t.textContent=e)}if(h){let e=$.serverStartedAt?$.serverTime-$.serverStartedAt:0;h.textContent=N(e)}if(c&&($.isLatest===!0?c.textContent=ServerI18n.t("aboutIsLatestYes"):$.isLatest===!1?c.textContent=ServerI18n.t("aboutHasNewVersion",{v:$.latestVersion||""}):c.textContent="\u2014",c.style.color=$.isLatest===!0?"var(--hud-lime)":$.isLatest===!1?"var(--hud-amber)":""),r&&(r.textContent=$.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:w($.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),d){let e=window.DANMU_CONFIG||{};d.textContent=e.wsPath||"/ws"}}function w(A){let B=Number(A)||0;if(!B)return"\u2014";let h=String(B).length>12?B:B*1e3,c=(Date.now()-h)/1e3;return c<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(c)}):c<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(c/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(c/86400)})}function x(A,B){let h=d=>String(d||"").replace(/^v/i,"").split("-")[0].split(".").map(function(e){return parseInt(e,10)||0}),c=h(A),r=h(B),t=Math.max(c.length,r.length);for(let d=0;d<t;d++){let e=c[d]||0,i=r[d]||0;if(e>i)return!0;if(e<i)return!1}return!1}async function R({silent:A}={}){A||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let B=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!B.ok)throw new Error("HTTP "+B.status);let c=((await B.json()).tag_name||"").replace(/^v/i,"");$.latestVersion=c,$.lastCheckedAt=Date.now(),$.isLatest=!x(c,$.appVersion);try{localStorage.setItem(F,JSON.stringify({ts:$.lastCheckedAt,latest:c,isLatest:$.isLatest}))}catch{}D(),A||window.showToast&&window.showToast($.isLatest?ServerI18n.t("aboutToastLatest",{v:$.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:c}),!0)}catch(B){A||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:B.message||""}),!1)}}function S(){try{let A=localStorage.getItem(F);if(!A)return;let B=JSON.parse(A);$.latestVersion=B.latest,$.lastCheckedAt=Number(B.ts)||0,$.isLatest=!!B.isLatest}catch{}}async function b(){try{let A=await fetch("/admin/metrics",{credentials:"same-origin"});if(!A.ok)return;let B=await A.json();$.serverStartedAt=Number(B.server_started_at)||0,$.serverTime=Number(B.server_time)||Date.now()/1e3,D()}catch{}}function I(){let A=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",B=$.serverStartedAt?$.serverTime-$.serverStartedAt:0,h=(navigator.userAgent||"").slice(0,200),c=[`${g} v${$.appVersion}`,`Channel: ${A}`,`Uptime: ${N(B)}`,`User-Agent: ${h}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(c).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function O(){let A=document.getElementById("settings-grid");if(!A||document.getElementById(y))return;A.insertAdjacentHTML("beforeend",p()),$.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",S(),D();let B=document.getElementById(y);B&&B.addEventListener("click",function(h){let c=h.target.closest("[data-about-action]");if(!c)return;let r=c.dataset.aboutAction;r==="copy"?I():r==="check-update"?R({silent:!1}):r==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():r==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),b(),setInterval(b,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&O()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&O()})})()});var At=ye(()=>{(function(){"use strict";let y="admin-setup-wizard-root",k="danmu.setupWizard.completed",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},f=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],C=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function j(n){return n?n.label?n.label:n.labelKey?ServerI18n.t(n.labelKey):n.name||n.id||"\u2014":"\u2014"}function F(n){return n?n.descriptionKey?ServerI18n.t(n.descriptionKey):n.description||"":""}let $={open:!1,step:0,themes:C.slice(),activeTheme:C[0].name,selectedTheme:C[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function p(){$.publicUrl=window.location.origin+"/"}function N(){let n=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";n==="setup"&&!$.open?D():n!=="setup"&&$.open&&w({silent:!0})}function D(){$.open=!0,$.step=0,p(),document.body.dataset.setupWizardOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",x()),c()),t(),b(),R()}function w(n){let l=n&&n.silent;$.open=!1,document.body.dataset.setupWizardOpen="";let m=document.getElementById(y);if(m&&m.remove(),!l&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function x(){return`
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
            ${f.map(function(n,l){return`
                <div class="admin-setup-step" data-step-index="${l}">
                  <span class="bullet">${l+1}</span>
                  <span class="lbl">${g(ServerI18n.t(n.labelKey))}</span>
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
      </div>`}function R(){let n=document.getElementById(y);if(!n)return;n.querySelectorAll(".admin-setup-step").forEach(function(E,_){E.classList.toggle("is-done",_<$.step),E.classList.toggle("is-active",_===$.step)}),n.querySelectorAll(".admin-setup-step-sep").forEach(function(E,_){E.classList.toggle("is-done",_<$.step)});let l=n.querySelector("[data-setup-meta]");l&&(l.textContent=ServerI18n.t("setupWizardStepMeta",{current:$.step+1,total:f.length}));let m=n.querySelector('[data-setup-action="prev"]');m&&(m.disabled=$.step===0);let a=n.querySelector('[data-setup-action="next"]');if(a){let E=f[$.step].id;a.textContent=ServerI18n.t("setupWizardNext")}let s=n.querySelector("[data-setup-foot]");s&&(s.hidden=f[$.step].id==="done");let u=n.querySelector("[data-setup-content]");if(!u)return;let v=f[$.step].id;v==="server"?u.innerHTML=S():v==="moderation"?u.innerHTML=I():v==="theme"?u.innerHTML=B():u.innerHTML=h(),r(v)}function S(){let n=$.readiness,l=n?Number(n.overlay_count)||0:null,m=l!==null&&l>0,s=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:$.publicUrl},{ok:m,unknown:l===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:m?ServerI18n.t("setupWizardReadyDisplayOk",{n:l}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!($.activeTheme||$.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:j($.themes.filter(function(u){return(u.name||u.id)===($.selectedTheme||$.activeTheme)})[0]||$.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(u){let v=u.unknown?"is-unknown":u.ok?"is-done":"is-pending",E=u.unknown?"?":u.ok?"\u2713":"!",_='<span class="admin-setup-ready-title">'+g(u.title)+'</span><span class="admin-setup-ready-value">'+g(u.value||"")+"</span>",L=u.goto?'<a class="admin-setup-ready-go" href="'+u.goto+'" data-setup-goto="'+u.goto+'">'+g(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+v+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+E+"</span>"+_+L+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${g(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${g(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${s}</div>
      </div>`}async function b(){try{let n=await fetch("/overlay_status",{credentials:"same-origin"});if(!n.ok)throw new Error("HTTP "+n.status);let l=await n.json();$.readiness={overlay_count:Number(l.overlay_count)||0,mode:l.mode||""}}catch{$.readiness=null}$.open&&f[$.step].id==="server"&&R()}function I(){let n=$.moderationRules.map(function(l){return`
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
        <div class="admin-setup-mod-list">${n}</div>
      </div>`}let O=["default","neon","retro","cinema"];function A(){let n={};return($.themes||[]).forEach(function(l){n[l.name||l.id]=l}),O.map(function(l){let m=C.filter(function(s){return s.name===l})[0],a=n[l];return m?{name:l,label:a&&a.label,labelKey:m.labelKey,descriptionKey:m.descriptionKey,colors:m.colors}:a}).filter(Boolean)}function B(){let n=A();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${n.map(function(l){let m=l.name||l.id||"",a=($.selectedTheme||$.activeTheme)===m,s=(l.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${a?" is-selected":""}" data-setup-theme="${g(m)}">
                ${a?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${s.map(function(u,v){let E=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${g(u)};font-size:${10+v*2}px;text-shadow:0 0 6px ${g(u)}66;">${E[v]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${g(j(l))}</div>
                <div class="admin-setup-theme-sub">${g(F(l))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function h(){let n=(function(){for(let l=0;l<$.themes.length;l+=1){let m=$.themes[l];if((m.name||m.id)===($.selectedTheme||$.activeTheme))return j(m)}return $.selectedTheme||$.activeTheme||"\u2014"})();return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${g($.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${g(n)}</span></div>
        </div>
        <div class="admin-setup-done-next">
          <a class="admin-setup-done-link" href="#/moderation" data-setup-goto="#/moderation">${g(ServerI18n.t("setupWizardStepModeration"))}<span aria-hidden="true">\u203A</span></a>
          <a class="admin-setup-done-link" href="#/overlay" data-setup-goto="#/overlay">${g(ServerI18n.t("adminRouteTitle_overlay"))}<span aria-hidden="true">\u203A</span></a>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function c(){let n=document.getElementById(y);n&&n.addEventListener("click",function(l){if(l.target===n){w();return}let m=l.target.closest("[data-setup-action]");if(m){if(m.dataset.setupAction==="close"){w();return}if(m.dataset.setupAction==="prev"&&$.step>0){$.step-=1,R();return}m.dataset.setupAction==="next"&&e()}})}function r(n){let l=document.getElementById(y);if(l){if(n==="moderation"||n==="done"||n==="server"){if(l.querySelectorAll("[data-setup-goto]").forEach(function(m){m.addEventListener("click",function(){w();let a=m.dataset.setupGoto;a&&(window.location.hash=a)})}),n==="done"){let m=l.querySelector("[data-setup-complete-cta]");m&&m.addEventListener("click",i)}return}if(n==="theme"){l.querySelectorAll("[data-setup-theme]").forEach(function(m){m.addEventListener("click",function(){$.selectedTheme=m.dataset.setupTheme||$.selectedTheme,R()})});return}}}async function t(){try{let n=await fetch("/admin/themes",{credentials:"same-origin"});if(!n.ok)return;let l=await n.json(),m=Array.isArray(l.themes)?l.themes:[];if(!m.length)return;$.themes=m.map(function(a){return{name:a.name||a.id||"",label:a.label||a.display_name||a.name||"",description:a.description||"",colors:a.preview_colors||a.colors||a.palette||C[0].colors}}),$.activeTheme=l.active||$.themes[0]&&$.themes[0].name||$.activeTheme,$.selectedTheme||($.selectedTheme=$.activeTheme),$.open&&f[$.step].id==="theme"&&R()}catch{}}async function d(){if(!$.selectedTheme||$.selectedTheme===$.activeTheme)return!0;try{let n=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:$.selectedTheme})});if(!n.ok)throw new Error("HTTP "+n.status);return $.activeTheme=$.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function e(){if(!(f[$.step].id==="theme"&&!await d())){if($.step<f.length-1){$.step+=1,R();return}i()}}function i(){try{localStorage.setItem(k,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),w()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}D()},close:function(){w()},isCompleted:function(){try{return!!localStorage.getItem(k)}catch{return!1}},__setCapabilityForTest:function(){}};function o(){window.addEventListener("hashchange",N),N()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&o()})})()});var Ct=ye(()=>{(function(){"use strict";let y="sec-poll-deepdive-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(b){return String(b).replace(/[&<>"']/g,function(I){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[I]})},g={poll:null,refreshTimer:0};function f(){return`
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
      </div>`}function C(b){if(b.innerHTML="",!window.AdminEmpty){b.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let I=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});I.classList.add("lg:col-span-2"),I.dataset.emptyKind="poll-deepdive",b.appendChild(I)}let j=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function F(b){return b?new Date(b*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function $(b){if(!b||b.length<2)return"";let I=Math.max.apply(null,b.map(function(c){return c.n}).concat([1])),O=100,A=32,B=O/(b.length-1),h=b.map(function(c,r){let t=(r*B).toFixed(2),d=(A-c.n/I*(A-2)-1).toFixed(2);return t+","+d});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+O+" "+A+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+h.join(" ")+'" /></svg>'}function p(b){let I=b.state||(b.active?"active":"ended"),O=b.question||"\u2014",A=Array.isArray(b.options)?b.options:[],B=function(m){return Number(m.votes!=null?m.votes:m.count)||0},h=A.reduce(function(m,a){return m+B(a)},0),c=I==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:F(b.ended_at)}),r=(function(){let m=Number(b.started_at)||0;if(!m)return"\u2014";let a=I==="active"?Date.now()/1e3:Number(b.ended_at)||m,s=Math.max(0,Math.floor(a-m));return Math.floor(s/60)+":"+String(s%60).padStart(2,"0")})(),t=Number(window._lastOverlayCount)||0,d=t>0?Math.round(h/t*100)+"%":"\u2014",e=t>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:h,audience:t}):ServerI18n.t("pollDeepdiveParticipationUnknown"),i=(function(){let m=Array.isArray(b.questions)?b.questions:[],a=0;for(let s of m)a+=Number(s.duplicate_attempts)||0;return m.length||(a=Number(b.duplicate_attempts)||0),a})(),o=A.map(function(m,a){let s=B(m),u=h>0?s/h*100:0,v=j[a%j.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${k(m.label||m.text||m.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:a+1}))}</span>
            <span class="votes">${s} \xB7 ${u.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${u.toFixed(2)}%;background:${v}"></div>
          </div>
        </div>`}).join(""),n=Array.isArray(b.vote_timeline)?b.vote_timeline:[],l=n.length>=2?$(n):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${k(O)}</div>
          <div class="admin-pdd-state">${k(c)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${h}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${d}</div><div class="sub">${k(e)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${k(r)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${i}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${A.length?o:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${l}</div>
        </article>
      </div>`}function N(){let b=document.querySelector("[data-pdd-grid]");if(b){if(!g.poll||!g.poll.poll_id){C(b);return}b.innerHTML=p(g.poll)}}async function D(){try{let b=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!b.ok)return;let I=await b.json();g.poll=I,N()}catch{}}function w(){if(!g.poll||!Array.isArray(g.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let b=[["option_label","votes","percentage"]],I=g.poll.options.reduce(function(c,r){return c+(Number(r.votes!=null?r.votes:r.count)||0)},0);g.poll.options.forEach(function(c,r){let t=Number(c.votes!=null?c.votes:c.count)||0,d=I>0?(t/I*100).toFixed(2):"0.00";b.push([c.label||"option_"+(r+1),t,d])});let O=b.map(function(c){return c.map(function(r){let t=String(r);return t.includes(",")||t.includes('"')?'"'+t.replace(/"/g,'""')+'"':t}).join(",")}).join(`
`),A=new Blob([O],{type:"text/csv;charset=utf-8"}),B=URL.createObjectURL(A),h=document.createElement("a");h.href=B,h.download="poll-"+(g.poll.poll_id||"current")+".csv",document.body.appendChild(h),h.click(),document.body.removeChild(h),setTimeout(function(){URL.revokeObjectURL(B)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function x(){try{let b=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!b.ok)throw new Error("HTTP "+b.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function R(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(D(),g.refreshTimer||(g.refreshTimer=setInterval(D,5e3))):g.refreshTimer&&(clearInterval(g.refreshTimer),g.refreshTimer=0)}function S(){let b=document.getElementById("settings-grid");if(!b||document.getElementById(y))return;b.insertAdjacentHTML("beforeend",f());let I=document.getElementById(y);I&&I.addEventListener("click",function(O){let A=O.target.closest("[data-pdd-action]");A&&(A.dataset.pddAction==="export-csv"?w():A.dataset.pddAction==="push"&&x())}),D(),R(),window.addEventListener("hashchange",R)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&S()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&S()})})()});var Bt=ye(()=>{(function(){"use strict";let y="admin-message-drawer-root",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(d){return String(d).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})},f={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},C=null;function j(d){let e=d.detail&&d.detail.entry;e&&(f.open||(C=document.activeElement),f.entry=e,F(),e.data&&e.data.fingerprint&&D(e.data.fingerprint),w(e))}function F(){f.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",x()),R()),S();let d=document.querySelector("#"+y+" .admin-msgd-v4__close")||document.querySelector("#"+y+" button");if(d)try{d.focus({preventScroll:!0})}catch{}}function $(){f.open=!1,document.body.dataset.messageDrawerOpen="";let d=document.getElementById(y);if(d&&d.remove(),C&&typeof C.focus=="function"&&document.contains(C))try{C.focus({preventScroll:!0})}catch{}C=null}function p(d){if(!f.open)return;if(d.key==="Escape"){$();return}let e=document.activeElement,i=e?(e.tagName||"").toLowerCase():"";if(!(e&&(e.isContentEditable||i==="input"||i==="textarea"||i==="select"))){if(d.key==="ArrowLeft"||d.key==="k"){N(-1),d.preventDefault();return}if(d.key==="ArrowRight"||d.key==="j"){N(1),d.preventDefault();return}}}function N(d){if(!f.entry)return;let e=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(e=window.AdminLiveFeed.getEntries()),!e.length)return;let i=e.findIndex(function(l){return l.id===f.entry.id});if(i<0)return;let o=i+-d;if(o<0||o>=e.length){window.showToast&&window.showToast(d<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let n=e[o];f.entry=n,f.fingerprintRecord=null,w(n),S(),n.data&&n.data.fingerprint&&D(n.data.fingerprint)}async function D(d){try{let e=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!e.ok)return;let i=await e.json(),n=(Array.isArray(i.records)?i.records:[]).find(function(l){return(l.fingerprint||"").startsWith(d.slice(0,8))});f.fingerprintRecord=n||null,S()}catch{}}function w(d){let e=d.data&&d.data.fingerprint;if(!e){f.sameFpEntries=[];return}let i=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(i=window.AdminLiveFeed.getEntries()),f.sameFpEntries=i.filter(function(o){let n=o.data&&o.data.fingerprint||o.fingerprint||"";return n&&n.startsWith(e.slice(0,8))}).slice(0,8)}function x(){return`
      <div id="${y}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function R(){let d=document.getElementById(y);d&&d.addEventListener("click",function(e){let i=e.target.closest("[data-msgd-action]");if(!i)return;e.stopPropagation();let o=i.dataset.msgdAction;o==="close"?$():o==="ban-fp"?B():o==="ban-fp-quick"?A():o==="recall-msg"?c():o==="blacklist-kw"?r():o==="reply"?t():o==="prev"?N(-1):o==="next"&&N(1)})}function S(){let d=document.getElementById(y);if(!d)return;let e=d.querySelector("[data-msgd-body]");e&&(e.innerHTML=b())}function b(){let d=f.entry;if(!d)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let e=d.data||{},i=e.fingerprint||"\u2014",o=i==="\u2014"?"\u2014":i.slice(0,8),n=i==="\u2014"?"\u2014":i.slice(0,12),l=d.ts?I(d.ts):"\u2014",m=e.nickname||ServerI18n.t("msgDrawerAnonymous"),a=f.fingerprintRecord||{},s=Number(a.message_count)||0,u=Number(a.violation_count)||0,v=f.sameFpEntries||[],E=v.length?Math.round(v.reduce((L,M)=>L+((M.data||M).text||"").length,0)/v.length):(e.text||"").length,_=0;for(let L=0;L<i.length;L++)_=_*31+i.charCodeAt(L)&65535;return _=_%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${_})">${g((m||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${g(m)}</div>
          <div class="admin-msgd-v4__fp">fp:${g(n)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${g(l)}</span>
      </div>

      <div class="admin-msgd-v4__body">${g(e.text||"")}</div>

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
          IP \xB7 ${g(e.ip||"\u2014")}<br/>
          UA \xB7 ${g(e.user_agent||e.ua||"\u2014")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: same deferred EN\xB7\u4E2D\u6587 bilingual monolabel pattern as
             SENDER PROFILE above \u2014 left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecModeration")}</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${i==="\u2014"?"disabled":""}>${g(ServerI18n.t("msgdBanFpBtn"))}</button>
          <!-- 2026-10-29\uFF1A\u539F\u672C\u9019\u88E1\u662F\u300C\u975C\u97F3\u6307\u7D0B\u300D\uFF0B\u300C\u25D1 Mask\u300D\u5169\u9846\u3002
               \u975C\u97F3\u8207\u5C01\u7981\u6253\u7684\u662F\u540C\u4E00\u652F API\uFF08\u540C\u4E00\u500B\u6C38\u4E45\u6548\u679C\uFF09\uFF0C\u800C Mask \u5176\u5BE6\u662F
               \u628A\u6574\u53E5\u6587\u672C\u52A0\u9032\u9ED1\u540D\u55AE\u2014\u2014\u5169\u9846\u90FD\u5728\u627F\u8AFE\u4E00\u500B\u4E0D\u5B58\u5728\u7684\u9078\u9805\u3002
               \u63DB\u6210\u771F\u7684\u505A\u5F97\u5230\u7684\u4E8B\uFF1A\u628A\u9019\u4E00\u5247\u5F9E\u5927\u87A2\u5E55\u64A4\u4E0B\u3002 -->
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="recall-msg" ${e.message_id?"":"disabled"}>${g(ServerI18n.t("lfRecallBtn"))}</button>
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
    `}function I(d){try{let e=new Date(d),i=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0"),n=String(e.getSeconds()).padStart(2,"0");return i+":"+o+":"+n}catch{return"\u2014"}}function O(d){let e;if(typeof d=="number")e=d*1e3;else if(typeof d=="string")e=new Date(d).getTime();else return"\u2014";if(!e)return"\u2014";let i=(Date.now()-e)/1e3;return i<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(i)}):i<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(i/60)}):i<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(i/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(i/86400)})}async function A(d,e,i){let o=f.entry&&f.entry.data&&f.entry.data.fingerprint;if(!o)return;let n=parseInt(e||0,10)||0,l=n>0?await window.AdminModeration.banFingerprint(o,n,d):await window.AdminModeration.callBlock("fingerprint",o,d);if(!l.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:l.error||""}),!1);return}let m=i||(n>0?ServerI18n.t("msgDrawerSecondsLabel",{n}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:o.slice(0,8),label:m}),!0),$()}async function B(){let d=f.entry&&f.entry.data||{},e=d.fingerprint||"\u2014";if(e==="\u2014")return;let i=e.slice(0,12),o=d.nickname||ServerI18n.t("msgDrawerAnonymous"),n=0;for(let _=0;_<e.length;_++)n=n*31+e.charCodeAt(_)&65535;n=n%360;let l=document.createElement("div");l.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${n})">${g((o||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${g(o)}</div>
          <div class="fp">fp:${g(i)}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let m=_=>{l.querySelectorAll(".admin-bancfm-dchip").forEach(L=>L.classList.remove("is-active")),_.classList.add("is-active")};if(l.addEventListener("click",_=>{let L=_.target.closest("[data-ban-duration]");L&&m(L)}),l.addEventListener("keydown",_=>{if(_.key!=="Enter"&&_.key!==" ")return;let L=_.target.closest("[data-ban-duration]");L&&(_.preventDefault(),m(L))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:l,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let s=(l.querySelector("[data-ban-reason]")||{}).value||"",u=l.querySelector(".admin-bancfm-dchip.is-active"),v=u&&parseInt(u.dataset.banDuration||"0",10)||0,E=u?u.textContent.trim():ServerI18n.t("msgDrawerPermanent");return A(s.trim(),v,E)}function h(){}async function c(){let d=f.entry,e=d&&d.data&&d.data.message_id;if(!e)return;if(!(await window.AdminModeration.recall(e)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),$()}async function r(){let d=f.entry&&f.entry.data&&f.entry.data.text;if(!d)return;await window.AdminModeration.blockKeyword(d)&&$()}async function t(){let d=document.querySelector("[data-msgd-reply]"),e=d?d.value.trim():"";if(e)try{let i=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:e})});if(!i.ok)throw new Error("HTTP "+i.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),d&&(d.value="")}catch(i){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:i.message||""}),!1)}}window.AdminMessageDrawer={open:function(d){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:d}}))},close:$},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",j),document.addEventListener("keydown",p))})})()});var Ft=ye(()=>{(function(){"use strict";let y="danmu.notifications.read",k="danmu.notifications.archived",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})},f={items:[],refreshTimer:0};function C(o){try{let n=localStorage.getItem(o);if(!n)return new Set;let l=JSON.parse(n);return new Set(Array.isArray(l)?l:[])}catch{return new Set}}function j(o,n){try{localStorage.setItem(o,JSON.stringify(Array.from(n)))}catch{}}function F(o){let n=C(y);n.add(o),j(y,n)}async function $(){let o=[p().catch(function(){return[]}),N().catch(function(){return[]}),D().catch(function(){return[]}),w().catch(function(){return[]})],l=(await Promise.all(o)).flat();l.sort(function(m,a){return(a.ts||0)-(m.ts||0)}),f.items=l,I(),B()&&O()}async function p(){let o=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!o.ok)return[];let n=await o.json();return(Array.isArray(n.events)?n.events:[]).map(function(m,a){let s=(Number(m.ts)||0)*1e3,u="tok-"+(m.ts||a)+"-"+(m.kind||"x"),v=m.kind||"?",E="info",_=ServerI18n.t("notifTitleFireTokenEvent");if(v==="rotated")E="info",_=ServerI18n.t("notifTitleFireTokenRotated");else if(v==="revoked")E="warn",_=ServerI18n.t("notifTitleFireTokenRevoked");else if(v==="toggled"){let L=m.meta&&m.meta.enabled;E=L?"good":"warn",_=ServerI18n.t("notifTitleFireTokenToggled",{state:L?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:u,sev:E,src:"Fire Token",ts:s,title:_,desc:ServerI18n.t("notifDescEventType",{kind:v})+(m.meta?" \xB7 "+JSON.stringify(m.meta):""),raw:m}})}async function N(){let o=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!o.ok)return[];let n=await o.json();return(Array.isArray(n.events)?n.events:[]).map(function(m,a){let s=(Number(m.ts)||0)*1e3,u="flt-"+(m.ts||a)+"-"+(m.action||"x")+"-"+a,v=m.action||"match";return{id:u,sev:v==="drop"?"warn":"info",src:"Moderation",ts:s,title:ServerI18n.t("notifTitleFilterHit",{action:v}),desc:ServerI18n.t("notifDescFilterHit",{rule:m.rule_id||"?",text:(m.text||"").slice(0,60)}),raw:m}})}async function D(){let o=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!o.ok)return[];let n=await o.json();return(Array.isArray(n.events)?n.events:[]).map(function(m,a){let s=(Number(m.ts)||0)*1e3,u=String(m.kind||"?");return{id:"wh-"+(m.ts||a)+"-"+u+"-"+a,sev:u==="unregister"?"warn":"info",src:"Webhooks",ts:s,title:ServerI18n.t("notifTitleWebhookEvent",{kind:u}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:m.actor||"system"})+(m.meta?" \xB7 "+JSON.stringify(m.meta):""),raw:m}})}async function w(){let o=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!o.ok)return[];let n=await o.json(),l=Array.isArray(n.events)?n.events:[],m=new Set(["auth","broadcast","system","session","sessions"]);return l.filter(function(a){return m.has(String(a.source||""))}).map(function(a,s){let u=(Number(a.ts)||0)*1e3,v=String(a.kind||"?");return{id:"sys-"+(a.ts||s)+"-"+(a.source||"x")+"-"+v+"-"+s,sev:v==="login_failed"?"warn":"info",src:"System",ts:u,title:ServerI18n.t("notifTitleSystemEvent",{kind:v}),desc:ServerI18n.t("notifDescSystemEvent",{source:a.source||"?",actor:a.actor||"system"}),raw:a}})}let x="admin-notif-panel",R={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/integrations/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/integrations/plugins"},System:{key:"adminNavSystem",hash:"#/events"}};function S(o){let n=R[o];return n?ServerI18n.t(n.key):o}function b(){let o=C(y),n=C(k);return f.items.filter(l=>!o.has(l.id)&&!n.has(l.id))}function I(){let o=document.querySelector("[data-notif-badge]");if(!o)return;let n=b().length;o.textContent=n>99?"99+":String(n),o.hidden=n===0}function O(){let o=document.getElementById(x);if(!o)return;let n=b().slice(0,20),l=n.length?n.map(m=>{let a=R[m.src];return'<li class="admin-notif__item" data-sev="'+g(m.sev)+'"><div class="admin-notif__text">'+g(m.title)+'</div><div class="admin-notif__meta">'+g(S(m.src))+" \xB7 "+g(A(m.ts))+"</div>"+(a?'<button type="button" class="admin-notif__action" data-notif-go="'+g(a.hash)+'" data-notif-id="'+g(m.id)+'">'+g(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+g(ServerI18n.t("notifEmpty"))+"</li>";o.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+g(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+g(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+l+"</ul>"}function A(o){if(!o)return"\u2014";let n=(Date.now()-o)/1e3;return n<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(n)}):n<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(n/60)}):n<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(n/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(n/86400)})}function B(){let o=document.getElementById(x);return!!o&&!o.hidden}function h(){let o=document.getElementById(x);o&&(O(),o.hidden=!1,f.refreshTimer||(f.refreshTimer=setInterval($,3e4)))}function c(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&h()}function r(){let o=document.getElementById(x);o&&(o.hidden=!0),f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function t(){B()?r():h()}function d(){let o=document.querySelector(".admin-dash-topbar-actions");if(!o||document.getElementById("admin-notif-bell"))return;let n=document.createElement("button");if(n.id="admin-notif-bell",n.type="button",n.className="admin-dash-search is-icon-only admin-notif-bell",n.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),n.title=ServerI18n.t("adminRouteTitle_notifications"),n.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',o.insertBefore(n,o.firstChild),!document.getElementById(x)){let l=document.createElement("div");l.id=x,l.className="admin-notif",l.setAttribute("role","dialog"),l.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),l.hidden=!0,document.body.appendChild(l)}I(),c()}function e(){document.addEventListener("click",o=>{if(o.target.closest("#admin-notif-bell")){o.preventDefault(),t();return}let n=o.target.closest("[data-notif-go]");if(n){F(n.dataset.notifId),r(),location.hash=n.dataset.notifGo,I();return}if(o.target.closest("[data-notif-readall]")){b().forEach(l=>F(l.id)),O(),I();return}B()&&!o.target.closest("#"+x)&&r()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&B()&&r()}),window.addEventListener("hashchange",c),c()}function i(){d(),$()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(d).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),e(),i()})})()});var Dt=ye(()=>{(function(){"use strict";let y="sec-audit-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},g={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},f={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function C(){return`
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
      </div>`}function j(t){if(!t)return"\u2014";try{let d=new Date(Number(t)*1e3),e=String(d.getHours()).padStart(2,"0"),i=String(d.getMinutes()).padStart(2,"0"),o=String(d.getSeconds()).padStart(2,"0");return`${e}:${i}:${o}`}catch{return"\u2014"}}function F(t){let d=String(t.action||t.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(d)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(d)?"warn":"info"}function $(t){return t==="danger"?"var(--hud-crimson, #f87171)":t==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function p(t){return f.filterActor==="all"||String(t.actor||"").toLowerCase()===f.filterActor}function N(t){return f.filterSeverity==="all"||F(t)===f.filterSeverity}function D(){return f.events.filter(function(t){return p(t)&&N(t)})}function w(t){let d=t&&t.meta&&typeof t.meta=="object"?t.meta:{};return d.target||d.keyword||d.fp||d.fingerprint||d.name||d.mode||d.session||d.hook_id||t.target||""}function x(t,d){let e=t!=null,i=d!=null;if(!e&&!i)return"";let o=e?k(JSON.stringify(t)):"",n=i?k(JSON.stringify(d)):"";return e?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${o}</span> \u2192 <span class="admin-audit-diff-a">${n}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${n}</span></span>`}function R(t){let d=t&&t.meta&&typeof t.meta=="object"?t.meta:{},e=[];t.detail&&e.push(`<span>${k(String(t.detail))}</span>`);let i=x(t.before,t.after);i&&e.push(i);let o=Object.assign({},d);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(l){delete o[l]}),Object.keys(o).length&&e.push(`<code class="admin-ui-code admin-audit-meta-extra">${k(JSON.stringify(o))}</code>`),!e.length){let l=g[t.source]&&g[t.source].label||t.source||"system";e.push(`<span>${k(String(l))}</span>`)}return e.join(" ")}function S(t){return t==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":t==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function b(){let t=document.querySelector("[data-audit-rows]");if(!t)return;let d=D();if(!d.length){t.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}t.innerHTML=d.map(function(e){let i=F(e),o=$(i),n=String(e.actor||"system"),l=w(e);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${i}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${k(j(e.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${o};box-shadow:0 0 6px ${o}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${S(n)}">${k(n)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${k(String(e.action||e.kind||"\u2014"))}</span>
              ${l?`<span class="admin-ui-target admin-audit-target">\u2192 ${k(String(l))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${R(e)}</div>
          </div>
        </div>`}).join("")}function I(){let t=document.querySelector("[data-audit-summary]");if(!t)return;let d=D().length,e=f.filterActor==="all"?ServerI18n.t("auditAllRoles"):f.filterActor,i=f.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):f.filterSeverity.toUpperCase();t.textContent=ServerI18n.t("auditSummaryLine",{n:d,actor:e,sev:i})}function O(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(t){t.classList.toggle("is-active",t.dataset.auditActorFilter===f.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(t){t.classList.toggle("is-active",t.dataset.auditSeverityFilter===f.filterSeverity)})}async function A(){try{let t=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!t.ok)return;let d=await t.json(),e=Array.isArray(d.events)?d.events.slice():[];e.sort(function(i,o){return Number(o.ts||0)-Number(i.ts||0)}),f.events=e,O(),b(),I()}catch{}}function B(){let t=D();if(!t.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let d=new Blob([JSON.stringify(t,null,2)],{type:"application/json;charset=utf-8"}),e=URL.createObjectURL(d),i=document.createElement("a");i.href=e,i.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(e)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:t.length}),!0)}function h(){let t=document.getElementById(y);t&&t.addEventListener("click",function(d){let e=d.target.closest("[data-audit-actor-filter]");if(e){f.filterActor=e.dataset.auditActorFilter||"all",O(),b(),I();return}let i=d.target.closest("[data-audit-severity-filter]");if(i){let o=i.dataset.auditSeverityFilter||"all";f.filterSeverity=f.filterSeverity===o?"all":o,O(),b(),I();return}if(d.target.closest("[data-audit-export]")){B();return}d.target.closest("[data-audit-refresh]")&&A()})}function c(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(A(),f.refreshTimer||(f.refreshTimer=setInterval(A,3e4))):f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function r(){let t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("beforeend",C()),h(),A(),c(),window.addEventListener("hashchange",c))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&r()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&r()})})()});var Mt=ye(()=>{(function(){"use strict";let y="sec-audience-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},g=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],f=20,C={records:[],filter:"all",shown:f,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function j(s){if(!s)return g[0];let u=0;for(let v=0;v<s.length;v++)u=u*31+s.charCodeAt(v)>>>0;return g[u%g.length]}function F(s){if(!s)return"\u2014";let u=typeof s=="number"?s*1e3:new Date(s).getTime();if(!u)return"\u2014";let v=Math.max(0,(Date.now()-u)/1e3);return v<60?Math.floor(v)+"s":v<3600?Math.floor(v/60)+"m":v<86400?Math.floor(v/3600)+"h":Math.floor(v/86400)+"d"}function $(s){return s==="blocked"||s==="high"?"is-danger":s==="mid"?"is-warn":"is-success"}function p(){return`
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
      </div>`}function N(){let s=C.search.trim().toLowerCase(),u=C.records.slice();return s&&(u=u.filter(function(v){return String(v.nickname||"").toLowerCase().indexOf(s)!==-1||String(v.hash||"").toLowerCase().indexOf(s)!==-1})),u.sort(function(v,E){return C.sort==="last_seen"?(Number(E.last_seen)||0)-(Number(v.last_seen)||0):(Number(E.msgs)||0)-(Number(v.msgs)||0)}),C.filter==="all"?u:C.filter==="flagged"?u.filter(function(v){return v.state==="flagged"||v.state==="blocked"}):C.filter==="extension"?u.filter(function(v){return v.fingerprint&&(v.fingerprint.indexOf("slido")===0||v.fingerprint.indexOf("ext_")===0)}):u}function D(){let s=document.querySelector("[data-aud-stats]");if(!s)return;let u=C.records,v=u.length,E=u.filter(function(P){return P.state==="flagged"}).length,_=u.filter(function(P){return P.state==="blocked"}).length,L=u.reduce(function(P,W){return P+(Number(W.msgs)||0)},0),M=u.filter(function(P){let W=P.last_seen;if(!W)return!1;let T=typeof W=="number"?W*1e3:new Date(W).getTime();return(Date.now()-T)/1e3<300}).length;s.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${v}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${M}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${L}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${E}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${_}</div></div>`}function w(){let s=document.querySelector("[data-aud-filters]");if(!s)return;let u=C.records.length,v=C.records.filter(function(E){return E.state==="flagged"||E.state==="blocked"}).length;s.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${C.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:u})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${C.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:v})}</button>`}let x="__anon__";function R(s){let u=(s.nickname||"").trim();return!u||u==="\u533F\u540D"}function S(s){let u=s.hash||s.fingerprint||"";return u?u.length>9?u.slice(0,4)+"\u2026"+u.slice(-4):u:"\u2014"}function b(){let s=[],u=[];return N().forEach(function(v){R(v)?u.push(v):s.push(v)}),u.length&&s.push({_anonGroup:!0,_count:u.length,fingerprint:x,msgs:u.reduce(function(v,E){return v+(Number(E.msgs)||0)},0),blocked:u.reduce(function(v,E){return v+(Number(E.blocked)||0)},0),last_seen:Math.max.apply(null,u.map(function(v){return v.last_seen||0})),state:u.some(function(v){return v.state==="blocked"})?"blocked":"active"}),s}function I(){let s=document.querySelector("[data-aud-list]"),u=document.querySelector("[data-aud-summary]");if(!s)return;let v=b(),E=Math.min(v.length,C.shown);if(u&&(u.textContent=ServerI18n.t("audienceShownOfTotal",{n:E,total:v.length})),v.length===0){s.innerHTML="";let P=window.AdminEmpty.render("audience");P.dataset.emptyKind="audience",s.appendChild(P);return}let _=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,L=v.slice(0,E).map(function(P){let W=P.fingerprint||"\u2014",T=P.state==="blocked",q=P._anonGroup?ServerI18n.t("audienceAnonymous"):(P.nickname||"").trim(),U=P._anonGroup?"?":q.slice(0,1),J=j(W);return`
        <div class="admin-aud-row${C.selectedFp===W?" is-selected":""}" data-aud-row data-aud-fp="${k(W)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${J}">${k(U)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${k(q)}</span>
            ${P._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:P._count})}</span>`:""}
            ${T&&!P._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${P._anonGroup?"\u2014":k(S(P))}</span>
          <span class="col col-msgs">${Number(P.msgs)||0}</span>
          <span class="col col-blocked">${Number(P.blocked)||0}</span>
          <span class="col col-seen">${k(F(P.last_seen))}</span>
          <span class="col col-actions">
            ${P._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${k(W)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),M=v.length>E?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";s.innerHTML=_+L+M}function O(s){return s&&C.records.find(function(u){return u.fingerprint===s})||null}function A(s){if(!s)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let u=[],v=Number(s.msgs)||0,E=s.fingerprint||"";s.state==="blocked"&&u.push(ServerI18n.t("audienceRuleBlocked")),s.state==="flagged"&&u.push(ServerI18n.t("audienceRuleFlagged")),v>=25?u.push(ServerI18n.t("audienceRuleMsgOver",{n:v})):v>=15&&u.push(ServerI18n.t("audienceRuleMsgNear",{n:v}));let _=C.records.filter(function(W){return W.ip&&s.ip&&W.ip===s.ip}).length;_>=3&&u.push(ServerI18n.t("audienceRuleSameIp",{n:_})),(E.indexOf("slido")===0||E.indexOf("ext_")===0)&&u.push(ServerI18n.t("audienceRuleBridge")),(s.nickname==="\u533F\u540D"||!s.nickname)&&u.push(ServerI18n.t("audienceRuleNoNick"));let L="normal",M="var(--hud-lime)",P="NORMAL";return s.state==="blocked"?(L="blocked",M="var(--hud-crimson)",P="BLOCKED"):s.state==="flagged"||v>=25?(L="high",M="var(--hud-crimson)",P="HIGH RISK"):(v>=15||_>=3)&&(L="mid",M="var(--hud-amber)",P="MID"),{level:L,color:M,label:P,rules:u}}async function B(s){C.detailLoading=!0;try{let u=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!u.ok){C.detailMessages=[];return}let v=await u.json(),E=Array.isArray(v.records)?v.records:[],_=Date.now()-300*1e3;C.detailMessages=E.filter(function(L){return(L.fingerprint||"")!==s?!1:(L.timestamp?new Date(L.timestamp).getTime():0)>=_}).slice(0,8)}catch{C.detailMessages=[]}finally{C.detailLoading=!1}}function h(){let s=document.querySelector("[data-aud-detail]");if(!s)return;let u=C.selectedFp;if(!u){s.hidden=!0,s.innerHTML="";return}let v=O(u);if(!v){C.selectedFp=null,s.hidden=!0;return}s.hidden=!1;let E=A(v);s.dataset.riskLevel=E.level;let _=j(u),L=!v.nickname||v.nickname==="\u533F\u540D",M=L?ServerI18n.t("audienceAnonymous"):v.nickname,P=L?"?":M.slice(0,1),W="fp:"+(u||"").slice(0,8),T=E.rules.length?E.rules.map(function(U){return"<li>"+k(U)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",q="";C.detailLoading?q='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":C.detailMessages.length===0?q='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":q=C.detailMessages.map(function(U){let J=U.muted?"MASKED":U.banned?"BLOCKED":"SHOWN",K=U.muted?"var(--hud-amber)":U.banned?"var(--hud-crimson)":"var(--hud-lime)",G=U.timestamp?new Date(U.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+k(G)+'</span><span class="m">'+k(U.text||"")+'</span><span class="s" style="color:'+K+'">'+J+"</span></div>"}).join(""),s.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+$(E.level)+'">'+k(E.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+_+'">'+k(P)+'</span><div><div class="nick">'+k(M)+'</div><div class="fp">'+k(W)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+E.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:E.rules.length})+"</div><ul>"+T+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+q+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(v.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+k(u)+'" data-aud-flagged="'+(v.is_flagged?"true":"false")+'">'+(v.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function c(s){C.selectedFp=s,C.detailMessages=[],h(),B(s).then(h)}async function r(){try{let s=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!s.ok)return;let u=await s.json();C.records=Array.isArray(u.entries)?u.entries:[],C.serverStats=u&&u.stats||null,D(),w(),I(),C.selectedFp&&h()}catch{}}async function t(s,u,v){if(s)try{let E=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:s,flagged:!!u,note:v||""})});if(!E.ok)throw new Error("HTTP "+E.status);window.showToast&&window.showToast(u?ServerI18n.t("audienceToastFlagged",{fp:s.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:s.slice(0,8)}),!0),r()}catch(E){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:E.message||""}),!1)}}async function d(s,u){if(!s||s==="\u2014")return;let v=u??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:s.slice(0,8)}),"")||"");if(v!==null)try{let E=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:s,reason:v})});if(!E.ok)throw new Error("HTTP "+E.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:s.slice(0,8)}),!0),r()}catch(E){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:E.message||""}),!1)}}async function e(s){if(!(!s||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+k(s.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let v=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:s})});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),r()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:v.message||""}),!1)}}async function i(s){if(!(!s||s==="\u2014"))try{let u=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:s,action:"mask",priority:0,enabled:!0})});if(!u.ok)throw new Error("HTTP "+u.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:s.slice(0,8)}),!0),r()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:u.message||""}),!1)}}async function o(s){if(!(!s||s==="\u2014"))try{let u=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!u.ok)throw new Error("HTTP "+u.status);let v=await u.json(),_=(Array.isArray(v.rules)?v.rules:[]).filter(function(M){return M&&M.type==="fingerprint"&&M.pattern===s});if(_.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let L=0;for(let M of _)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:M.rule_id||M.id})}).catch(function(){return{ok:!1}})).ok&&(L+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:L,fp:s.slice(0,8)}),!0),r()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:u.message||""}),!1)}}async function n(s){if(!(!s||s==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+k(s.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let v=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:s})});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:s.slice(0,8)}),!0),r()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:v.message||""}),!1)}}function l(){let s=document.getElementById(y);s&&(s.addEventListener("input",function(u){let v=u.target.closest("[data-aud-search]");v&&(C.search=v.value||"",C.shown=f,I())}),s.addEventListener("change",function(u){let v=u.target.closest("[data-aud-sort]");v&&(C.sort=v.value,I())}),s.addEventListener("click",function(u){let v=u.target.closest("[data-aud-filter]");if(v){C.filter=v.dataset.audFilter,C.shown=f,w(),I();return}let E=u.target.closest("[data-aud-action='ban']");if(E){u.stopPropagation(),n(E.dataset.audFp);return}if(u.target.closest("[data-aud-action='refresh']")){r();return}if(u.target.closest("[data-aud-action='more']")){C.shown+=f,I();return}if(u.target.closest("[data-aud-action='close-detail']")){C.selectedFp=null,h();return}let P=u.target.closest("[data-aud-action='detail-ban']");if(P){n(P.dataset.audFp);return}let W=u.target.closest("[data-aud-action='detail-mask']");if(W){i(W.dataset.audFp);return}let T=u.target.closest("[data-aud-action='detail-safe']");if(T){o(T.dataset.audFp);return}let q=u.target.closest("[data-aud-action='flag']");if(q){u.stopPropagation(),t(q.dataset.audFp,q.dataset.audFlagged!=="true");return}let U=u.target.closest("[data-aud-action='kick']");if(U){u.stopPropagation(),d(U.dataset.audFp);return}let J=u.target.closest("[data-aud-action='unkick']");if(J){u.stopPropagation(),e(J.dataset.audFp);return}let K=u.target.closest("[data-aud-row]");if(!(K&&K.dataset.audFp===x)&&K&&!u.target.closest("button")){c(K.dataset.audFp);return}}))}function m(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(r(),C.refreshTimer||(C.refreshTimer=setInterval(r,15e3))):C.refreshTimer&&(clearInterval(C.refreshTimer),C.refreshTimer=0)}function a(){let s=document.getElementById("settings-grid");!s||document.getElementById(y)||(s.insertAdjacentHTML("beforeend",p()),l(),r(),m(),window.addEventListener("hashchange",m))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&a()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&a()})})()});var Nt=ye(()=>{(function(){"use strict";let y=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],k={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},g=2500,f=0,C=0,j=null;function F(){if(j)return j;let w=document.createElement("div");return w.className="admin-konami-hud",w.setAttribute("aria-hidden","true"),w.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(w),j=w,w}function $(){if(f===0){j&&j.classList.remove("is-on");return}let w=F();w.classList.add("is-on");let x=w.querySelector(".admin-konami-hud-keys");x&&(x.innerHTML=y.map((S,b)=>`<span class="admin-konami-hud-key ${b<f?"is-filled":""}">${k[S]}</span>`).join(""));let R=w.querySelector(".admin-konami-hud-progress");if(R){let S=Math.round(f/y.length*100);R.style.width=S+"%"}}function p(w){f=0,C&&(clearTimeout(C),C=0),w||$()}function N(){C&&clearTimeout(C),C=setTimeout(()=>p(),g)}async function D(){try{let w=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!w.ok)throw new Error("HTTP "+w.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(w){console.warn("[konami] trigger failed:",w&&w.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",w=>{let x=w.target;if(x&&(x.tagName==="INPUT"||x.tagName==="TEXTAREA"||x.isContentEditable))return;let R=y[f];if(!(w.key===R||R==="b"&&w.key.toLowerCase()==="b"||R==="a"&&w.key.toLowerCase()==="a")){f=w.key===y[0]?1:0,$(),f>0?N():C&&(clearTimeout(C),C=0);return}if(f++,$(),f>=y.length){p(!0),D();return}N()}),window.AdminKonami={trigger:D}})()});var Pt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function k(i){return i==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:i==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:i==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function g(){let i=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,o=i?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${i?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${y(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${o}`:""}
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
    `}var f=null,C=[];function j(i,o){var n=document.getElementById("adminFontEmptyStateHost");if(!n)return;if((i||[]).some(a=>a.type==="uploaded")){n.innerHTML="";return}n.innerHTML="";var m=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:o?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var a=document.getElementById("adminFontFileInput");a&&a.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});m.dataset.emptyKind="fonts",n.appendChild(m)}function F(i,o){let n=i.weight||"\u2014",l=i.sizeLabel||"\u2014",m=i.foundry||(i.type==="system"?"System":i.type==="default"?"Google / Noto":"Uploaded"),a=i.format||"\u2014",s=i.status||i.type,u=`font-family: "${y(i.name)}", sans-serif;`,v=k(s),E=[];if(o){if(s!=="default"&&E.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${y(i.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),s!=="default"){let _=s==="enabled"||s==="system",L=_?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");E.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${y(i.name)}" data-enabled="${_?"true":"false"}">${L}</button>`)}i.type==="uploaded"&&(E.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${y(i.name)}" title="${y(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),E.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${y(i.name)}">${y(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${y(i.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${u}" class="truncate">${y(i.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(E.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${E.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${y(m)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${y(n)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${y(l)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${y(a)}</span><div style="text-align:right">${v}</div></div>`}let $=null,p={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function N(){if($)return $;try{let i=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return i.ok?($=(await i.json()).presets||{},$):{}}catch{return{}}}function D(i){return!i||!Number.isFinite(i)?"\u2014":i<1024?i+" B":i<1024*1024?(i/1024).toFixed(1)+" KB":(i/(1024*1024)).toFixed(2)+" MB"}async function w(i){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let o=await N();if(!Object.keys(o).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let n=new Set(["cjk_common","latin"]),l="",m=document.createElement("div");m.className="admin-font-subset-modal-body";let a=()=>{let v=Object.keys(o).map(_=>{let L=p[_]||{label:_,glyphs:"\u2014",estSize:"\u2014"},M=L.labelKey?ServerI18n.t(L.labelKey):L.label,P=n.has(_);return`
          <label class="admin-font-subset-chip${P?" is-active":""}" data-subset-preset="${_}">
            <span class="admin-font-subset-chip-check">${P?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${y(M)}</span>
            <span class="admin-font-subset-chip-range">${y(o[_])}</span>
            <span class="admin-font-subset-chip-meta">${L.glyphs} glyphs \xB7 ${L.estSize}</span>
          </label>`}).join("");m.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${y(i)}</div>
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
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,m.querySelectorAll("[data-subset-preset]").forEach(_=>{_.addEventListener("click",L=>{L.preventDefault();let M=_.dataset.subsetPreset;n.has(M)?n.delete(M):n.add(M),a()})});let E=m.querySelector("[data-subset-custom]");E&&E.addEventListener("input",()=>{l=E.value})};if(a(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:m,width:540}))return;let u=[];if(n.forEach(v=>{o[v]&&u.push(o[v])}),l.trim()&&u.push(l.trim()),!u.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await x(i,u.join(","))}async function x(i,o){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:i}),!0);let n=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(i)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:o})}),l=await n.json().catch(()=>({}));if(n.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!n.ok){window.showToast?.(l.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:n.status}),!1);return}let m=l.saved_bytes||0,a=Math.round((l.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:i,before:D(l.original_size),after:D(l.new_size),pct:a}),!0),b()}catch(n){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:n.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function R(i){try{let o=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:i})});if(!o.ok)throw new Error("HTTP "+o.status);f=i,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:i}),!0),b()}catch(o){console.error("[admin-fonts] set default failed:",o),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function S(i,o){try{let n=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(i)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!o})});if(!n.ok)throw new Error("HTTP "+n.status);window.showToast(ServerI18n.t(o?"fontsToggleOffToast":"fontsToggleOnToast",{name:i}),!0),b()}catch(n){console.error("[admin-fonts] toggle failed:",n),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function b(){var i=document.getElementById("adminFontList");if(!i)return;let o=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var n=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!n.ok)throw new Error("HTTP "+n.status);var l=await n.json(),m=l.fonts||[];if(C=m,window.AdminTabs?.setTabCount?.("assets","fonts",m.length||""),j(m,o),m.length===0){i.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,h(m);return}i.innerHTML=m.map(a=>F(a,o)).join(""),h(m),c()}catch(a){console.error("[admin-fonts] fetch failed:",a),i.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,j([],o)}}async function I(i){try{let o=await i.slice(0,4).arrayBuffer(),n=new Uint8Array(o);return n[0]===0&&n[1]===1&&n[2]===0&&n[3]===0?"TTF":n[0]===79&&n[1]===84&&n[2]===84&&n[3]===79?"OTF":n[0]===119&&n[1]===79&&n[2]===70&&n[3]===50?"WOFF2":n[0]===116&&n[1]===114&&n[2]===117&&n[3]===101?"TTF":n[0]===116&&n[1]===116&&n[2]===99&&n[3]===102?"TTC":null}catch{return null}}function O(i,o){let n=document.getElementById("adminFontDropStatus");if(n){if(!i){n.textContent="",n.hidden=!0,n.classList.remove("is-good","is-bad");return}n.hidden=!1,n.textContent=i,n.classList.toggle("is-good",o==="good"),n.classList.toggle("is-bad",o==="bad")}}function A(i){let o=document.getElementById("adminFontUploadError");if(!o)return;if(!i){o.hidden=!0,o.innerHTML="";return}o.hidden=!1,o.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${y(i)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let n=o.querySelector("[data-font-error-retry]");n&&n.addEventListener("click",function(){let l=document.getElementById("adminFontFileInput");l&&l.click()})}async function B(i){if(!i)return;A("");let o=i.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(o)){window.showToast(ServerI18n.t("invalidFileType"),!1),O(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),A(ServerI18n.t("fontsExtNotSupportedFull"));return}if(i.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),O(ServerI18n.t("fontsFileTooLarge"),"bad"),A(ServerI18n.t("fontsFileTooLargeFull"));return}let n=await I(i);if(!n){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),O(ServerI18n.t("fontsMagicInvalid"),"bad"),A(ServerI18n.t("fontsMagicValidationFailed"));return}O(ServerI18n.t("fontsUploadValidated",{magic:n,size:(i.size/1024).toFixed(1)}),"good");try{var l=new FormData;l.append("fontfile",i);var m=await window.csrfFetch("/admin/upload_font",{method:"POST",body:l}),a=await m.json();m.ok?(window.showToast(a.message||ServerI18n.t("fontUploadFallback")),O(ServerI18n.t("fontsUploadedStatus",{filename:i.name}),"good"),A(""),await b()):(window.showToast(a.error||ServerI18n.t("uploadFailed"),!1),O(a.error||ServerI18n.t("uploadFailed"),"bad"),A(a.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(s){console.error("[admin-fonts] upload error:",s),window.showToast(ServerI18n.t("uploadNetworkError"),!1),O(ServerI18n.t("fontsNetworkErrorShort"),"bad"),A(ServerI18n.t("fontsNetworkDisconnected"))}}function h(i){let o=document.getElementById("fontsTotalSize");o&&(o.textContent=ServerI18n.t("fontsTotalCount",{n:i.length}))}function c(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(i=>{i.addEventListener("click",o=>{if(o.target.closest(".admin-font-delete-btn"))return;let n=i.dataset.font,l=document.getElementById("fontsPreviewFamily"),m=document.getElementById("fontsPreviewHeadline"),a=document.getElementById("fontsPreviewLatin"),s=document.getElementById("fontsPreviewCJK");l&&(l.textContent=n);let u=`"${n}", sans-serif`;m&&(m.style.fontFamily=u),a&&(a.style.fontFamily=u),s&&(s.style.fontFamily=u)})})}async function r(){var i=document.getElementById("adminFontFileInput");if(i){var o=i.files&&i.files[0];if(!o){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await B(o),i.value=""}}function t(){let i=document.getElementById("adminFontDrop"),o=document.getElementById("adminFontFileInput");!i||!o||(i.addEventListener("click",n=>{n.target!==o&&o.click()}),i.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),o.click())}),["dragenter","dragover"].forEach(n=>{i.addEventListener(n,l=>{l.preventDefault(),l.stopPropagation(),i.classList.add("is-drag")})}),["dragleave","drop"].forEach(n=>{i.addEventListener(n,l=>{l.preventDefault(),l.stopPropagation(),i.classList.remove("is-drag")})}),i.addEventListener("drop",async n=>{let l=n.dataTransfer&&n.dataTransfer.files;l&&l[0]&&await B(l[0])}))}async function d(i){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",i),confirmLabel:ServerI18n.t("deleteBtn")}))try{var n=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(i),{method:"DELETE"}),l=await n.json();n.ok?(window.showToast(l.message||ServerI18n.t("fontDeleteFallback")),await b()):window.showToast(l.error||ServerI18n.t("deleteFailed"),!1)}catch(m){console.error("[admin-fonts] delete error:",m),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function e(){var i=document.getElementById("settings-grid");if(i){i.insertAdjacentHTML("beforeend",g());var o=document.getElementById("adminFontFileInput");o&&o.addEventListener("change",r),t();var n=document.getElementById("adminFontList");n&&n.addEventListener("click",function(l){var m=l.target.closest(".admin-font-delete-btn");if(m){l.stopPropagation(),d(m.dataset.name);return}var a=l.target.closest(".admin-font-default-btn");if(a){l.stopPropagation(),R(a.dataset.name);return}var s=l.target.closest(".admin-font-toggle-btn");if(s){l.stopPropagation();let v=s.dataset.enabled==="true";S(s.dataset.name,v);return}var u=l.target.closest(".admin-font-subset-btn");u&&(l.stopPropagation(),w(u.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(l=>l.ok?l.json():null).then(l=>{l&&Array.isArray(l.FontFamily)&&(f=l.FontFamily[3]||null)}).catch(()=>{}).finally(b)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var i=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&e()});i.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&e()}})})()});var Rt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k="sec-scheduler",g=5e3,f=null,C=null;function j(e,i,o,n){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${e}">
        <input type="text" placeholder="${p(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${p(i)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${p(o||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${n||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function F(e){var i=e==="active"?"is-success":e==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+i+'" title="'+p(e)+'"></span>'}function $(e){let i=e.state==="paused",o=e.repeat_count===void 0?"\u2014":e.repeat_count===-1?"\u221E":String(e.repeat_count),n=e.repeat_count>0&&typeof e.remaining=="number"?String(e.repeat_count-e.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${p(e.id)}">
        ${F(e.state)}
        <div>
          <div class="admin-scheduler-job-title">#${y(e.id)}</div>
          <div class="admin-scheduler-job-meta">${y(ServerI18n.t("schedulerMessages"))} ${e.messages?e.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${e.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${y(n)}</span>
        <span class="admin-scheduler-job-val">${y(o)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${i?"is-active":"is-warn"}"
            data-job-id="${p(e.id)}" data-action="${i?"resume":"pause"}">
            ${y(ServerI18n.t(i?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${p(e.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function p(e){return y(e)}function N(){let e=document.querySelectorAll("#schedulerMessages [data-msg-index]"),i=[];return e.forEach(function(o){let n=o.querySelector(".scheduler-msg-text").value.trim(),l=o.querySelector(".scheduler-msg-color").value,m=parseInt(o.querySelector(".scheduler-msg-size").value,10)||48;n&&i.push({text:n,color:l,size:m})}),i}function D(e,i,o){let n=document.getElementById("schedulerMessages");if(!n)return;let l=n.children.length;n.insertAdjacentHTML("beforeend",j(l,e||"",i||"#ffffff",o||48))}function w(e){let i=e.closest("[data-msg-index]");i&&i.remove();let o=document.getElementById("schedulerMessages");o&&o.querySelectorAll("[data-msg-index]").forEach(function(n,l){n.dataset.msgIndex=l})}async function x(){let e=N();if(e.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let i=parseInt(document.getElementById("schedulerInterval").value,10);if(!i||i<1||i>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let o=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(o)||o<-1||o>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let n=document.getElementById("schedulerCreateBtn");n&&(n.disabled=!0);try{let l=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:e,interval_sec:i,repeat_count:o})}),m=await l.json();l.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await h()):showToast(m.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(l){console.error("Scheduler create error:",l),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{n&&(n.disabled=!1)}}function R(e){return"msg"}function S(e){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[e]||"\u25C8"}function b(e){return e.next_run_at?new Date(e.next_run_at*1e3).getHours():new Date().getHours()}function I(e){if(e.next_run_at){let i=new Date(e.next_run_at*1e3);return String(i.getHours()).padStart(2,"0")+":"+String(i.getMinutes()).padStart(2,"0")}return"--:--"}function O(e){let i=e.id||"job",o=Array.isArray(e.messages)?e.messages.length:null;return"Job #"+i+(o!=null?" \xB7 "+o+" messages":"")}function A(e){let i=document.querySelector("[data-sch-timeline]");if(!i)return;let o=[],n=new Date().getHours();for(let m=0;m<24;m++){let a=m>=Math.max(0,n-1)&&m<=Math.min(23,n+2);o.push('<div class="admin-sch-timeline-hour'+(a?" is-peak":"")+'">'+String(m).padStart(2,"0")+"</div>")}let l=(e||[]).map(function(m){let a=R(m),s=S(a),u=m.state!=="paused";return'<div class="admin-sch-timeline-row'+(u?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+y(I(m))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+a+'">'+s+'</span><span class="admin-sch-evt-desc">'+y(O(m))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(u?" is-on":"")+'">'+ServerI18n.t(u?"uiOn":"uiOff")+"</span></div></div>"}).join("");i.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+o.join("")+"</div></div>"+(l||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+y(ServerI18n.t("noActiveJobs"))+"</div>"))}function B(e){let i=document.querySelector("[data-sch-calendar]");if(!i)return;let o=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],n=new Date,l=(n.getDay()+6)%7,m=new Date(n);m.setDate(n.getDate()-l);let a=o.map(function(u,v){let E=new Date(m);return E.setDate(m.getDate()+v),'<div class="admin-sch-calendar-day-head'+(v===l?" is-today":"")+'">'+y(u)+'<span class="date">'+E.getDate()+"</span></div>"}).join(""),s=[0,1,2,3,4,5,6].map(function(u){return'<div class="admin-sch-calendar-cell">'+(u===l?(e||[]).slice(0,5).map(function(E){let _=R(E),L=S(_);return'<span class="admin-sch-cal-chip is-'+_+'">'+y(I(E))+" "+L+"</span>"}).join(""):"")+"</div>"}).join("");i.innerHTML='<div class="admin-sch-calendar-head">'+a+'</div><div class="admin-sch-calendar-body">'+s+"</div>"}async function h(){let e=document.getElementById("schedulerJobsList"),i=document.getElementById("schedulerJobsCount");if(e)try{let o=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!o.ok){e.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",i&&(i.textContent="\u2014");return}let n=await o.json();if(!Array.isArray(n.jobs)){e.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",i&&(i.textContent="\u2014");return}i&&(i.textContent=ServerI18n.t("schItemCount",{n:n.jobs.length})),A(n.jobs),B(n.jobs);let l=document.querySelector("[data-sch-meta]");if(l){let m=new Date().toISOString().slice(0,10);l.textContent=ServerI18n.t("schTodayMeta",{date:m,n:n.jobs.length})}if(n.jobs.length===0){e.innerHTML="";let m=window.AdminEmpty.render("scheduler");m.dataset.emptyKind="scheduler",e.appendChild(m);return}e.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+y(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+y(ServerI18n.t("schColInterval"))+"</span><span>"+y(ServerI18n.t("schColSent"))+"</span><span>"+y(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+n.jobs.map($).join("")}catch(o){console.error("Scheduler fetch error:",o),e.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadJobsError"))+"</div>"}}async function c(e,i){try{let o=await csrfFetch("/admin/scheduler/"+encodeURIComponent(i),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:e})}),n=await o.json();o.ok?(showToast(i==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await h()):showToast(n.error||ServerI18n.t("actionFailed"),!1)}catch(o){console.error("Scheduler toggle error:",o),showToast(ServerI18n.t("actionFailed"),!1)}}async function r(e){try{let i=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:e})}),o=await i.json();i.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await h()):showToast(o.error||ServerI18n.t("cancelFailed"),!1)}catch(i){console.error("Scheduler cancel error:",i),showToast(ServerI18n.t("cancelFailed"),!1)}}function t(){let e=document.getElementById("advanced-grid")||document.getElementById("settings-grid");if(!e)return;e.insertAdjacentHTML("beforeend",`
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
    `);let i=document.querySelectorAll("[data-sch-view]");i.forEach(a=>{a.addEventListener("click",()=>{let s=a.dataset.schView;i.forEach(E=>{E.classList.toggle("is-active",E===a),E.setAttribute("aria-selected",E===a?"true":"false")});let u=document.querySelector("[data-sch-timeline]"),v=document.querySelector("[data-sch-calendar]");u&&(u.hidden=s!=="timeline"),v&&(v.hidden=s!=="calendar")})}),D("","#ffffff",48);let o=document.getElementById("schedulerMessages");o&&o.addEventListener("click",function(a){let s=a.target.closest(".scheduler-remove-msg");s&&w(s)});let n=document.getElementById("schedulerAddMsg");n&&n.addEventListener("click",function(){D("","#ffffff",48)});let l=document.getElementById("schedulerCreateBtn");l&&l.addEventListener("click",x);let m=document.getElementById("schedulerJobsList");m&&m.addEventListener("click",function(a){let s=a.target.closest(".scheduler-job-toggle");if(s){c(s.dataset.jobId,s.dataset.action);return}let u=a.target.closest(".scheduler-job-cancel");u&&r(u.dataset.jobId)}),f&&(clearInterval(f),f=null),C||(C=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(k)},intervalMs:g,tick:h}),window.addEventListener("beforeunload",function(){C&&(C(),C=null)}))}function d(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let e=!1;new MutationObserver(function(){if((document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(k)&&!e){e=!0;try{t()}finally{e=!1}}}).observe(document.body,{childList:!0,subtree:!0}),(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(k)&&t()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var Ot=ye(()=>{(function(){"use strict";let y="admin-security-v2-page";var k=window.AdminUtils.escapeHtml;let g=null,f=!1,C=!1,j=0;function F(){let a=s=>ServerI18n.t(s);return`
        <div id="${y}" class="admin-security-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${a("security2PageTitle")}</h2>
          <p class="admin-ui-page-note">${a("security2PageNote")}</p>
        </div>

        <div class="admin-ui-group-label">${a("security2CardPasswordTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2PwRowLabel")}
              <span class="sub">${a("security2PwDiscloseHint")}</span>
            </span>
            <span class="val">
              <button type="button" class="admin-ui-action" data-sec-disclose="sec2-pw-form">${a("security2SubmitChangePassword")}\u2026</button>
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
              <button type="submit" class="admin-ui-action is-primary admin-sec-action">${a("security2SubmitChangePassword")}</button>
            </form>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${a("security2CurrentSessionRowLabel")}</span>
            <span class="val" id="sec2-session-self-line">\u2014</span>
          </div>
        </div>

        <div class="admin-ui-group-label">${a("security2CardWsTokenTitle")}</div>
        <div class="admin-ui-group admin-security-ws">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2WsTokenToggleLabel")}
              <span class="sub" id="sec2-wsa-toggle-hint">${a("security2WsTokenToggleHint")}</span>
            </span>
            <span class="val">
              <span id="sec2-wsa-status" class="admin-ui-chip admin-sec-status-chip" role="status">${a("security2Loading")}</span>
              <input id="sec2-wsa-toggle" type="checkbox" class="admin-ui-checkbox" aria-label="${a("security2WsTokenToggleLabel")}" aria-describedby="sec2-wsa-toggle-hint sec2-wsa-connection-hint" disabled />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall admin-security-ws-token-row">
            <input id="sec2-wsa-token" type="password" class="admin-ui-input admin-ui-grow" aria-label="${a("security2CardWsTokenTitle")}" placeholder="${a("security2NotConfigured")}" autocomplete="off" spellcheck="false" disabled />
            <span class="val">
              <button type="button" id="sec2-wsa-reveal" class="admin-ui-action admin-sec-token-action" aria-label="${a("security2WsAuthRevealLabel")}" aria-pressed="false" disabled>${a("security2WsAuthRevealLabel")}</button>
              <button type="button" id="sec2-wsa-copy" class="admin-ui-action admin-sec-token-action" disabled>${a("security2CopyButton")}</button>
              <button type="button" id="sec2-wsa-rotate" class="admin-ui-danger-btn" disabled>${a("security2RegenerateButton")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${a("security2LastRotationLabel")}</span>
            <span class="val">
              <span id="sec2-wsa-lastrot" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-wsa-save" class="admin-ui-action is-primary" disabled>${a("security2SaveButton")}</button>
            </span>
          </div>
        </div>
        <p id="sec2-wsa-disabled-warning" class="admin-ui-notice is-warn" role="status" hidden>${a("security2WsAuthDisabledWarning")}</p>
        <p id="sec2-wsa-draft-hint" class="admin-ui-notice is-warn" role="status" hidden>${a("security2WsAuthDraftHint")}</p>
        <p id="sec2-wsa-saving-hint" class="admin-ui-notice" role="status" hidden>${a("security2WsAuthSavingHint")}</p>
        <p id="sec2-wsa-load-error" class="admin-ui-notice is-danger" role="alert" hidden>${a("security2WsAuthLoadFailed")}</p>
        <p id="sec2-wsa-connection-hint" class="admin-ui-page-note">${a("security2WsAuthConnectionHint")}</p>
        <details class="admin-security-ws-migration">
          <summary>${a("security2WsAuthMigrationTitle")}</summary>
          <ol>
            <li>${a("security2WsAuthMigrationPrepare")}</li>
            <li>${a("security2WsAuthMigrationDesktop")}</li>
            <li>${a("security2WsAuthMigrationEnable")}</li>
            <li>${a("security2WsAuthMigrationVerify")}</li>
          </ol>
        </details>

        <div class="admin-ui-group-label">${a("security2CardIpTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2IpToggleLabel")}
              <span class="sub" id="sec2-ip-status-line">\u2014</span>
            </span>
            <span class="val">
              <span id="sec2-ip-dot" class="admin-ui-dot is-amber"></span>
              <span id="sec2-ip-status-chip" class="admin-ui-chip admin-sec-status-chip">${a("security2Loading")}</span>
              <input id="sec2-ip-toggle" type="checkbox" class="admin-ui-checkbox" />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <textarea id="sec2-ip-entries" class="admin-ui-input admin-ui-grow" rows="3" spellcheck="false" placeholder="127.0.0.1/32"></textarea>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${a("security2CurrentIpLabel")}</span>
            <span class="val">
              <span id="sec2-ip-current" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-ip-save" class="admin-ui-action is-primary">${a("security2SaveButton")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${a("security2CardAuditTitle")}</span>
            <span class="val"><a href="#/audit" class="admin-ui-action">${a("security2ViewFullLogLink")}</a></span>
          </div>
        </div>

        <div class="admin-ui-group-label">${a("security2CardCorsTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2CorsOriginsRowLabel")}
              <span class="sub" id="sec2-cors-origins-line">\u2014</span>
            </span>
            <textarea id="sec2-cors-origins" class="admin-ui-input" rows="2" spellcheck="false" placeholder="*"></textarea>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2CorsCredentialsToggleLabel")}
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
              <button type="button" id="sec2-cors-save" class="admin-ui-action is-primary">${a("security2SaveButton")}</button>
            </span>
          </div>
        </div>

        <div class="admin-ui-group-label">HTTPS / TLS</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2StatusLabel")}
              <span class="sub">${a("security2TlsRecommendationNote")}</span>
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

        <div class="admin-ui-danger-label">${a("security2CardDangerTitle")}</div>
        <div class="admin-ui-group is-danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2RevokeApiTokensTitle")}
              <span class="sub">${a("security2RevokeApiTokensDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-tokens">${a("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2RevokeFireTokenTitle")}
              <span class="sub">${a("security2RevokeFireTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-firetoken">${a("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2ResetWsTokenTitle")}
              <span class="sub">${a("security2ResetWsTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="reset-ws">${a("security2RegenerateButton")}\u2026</button></span>
          </div>
        </div>
      </div>`}function $(a){if(!a)return 0;let s=0;a.length>=8&&s++,a.length>=12&&s++;let u=(/[a-z]/.test(a)?1:0)+(/[A-Z]/.test(a)?1:0)+(/\d/.test(a)?1:0)+(/[^\w]/.test(a)?1:0);return u>=2&&s++,u>=3&&s++,Math.min(4,s)}function p(a){let s=document.getElementById("sec2-pw-meter"),u=document.getElementById("sec2-pw-label");if(!s||!u)return;let v=$(a),E=[0,25,50,75,100],_=["","is-bad","is-warn","is-warn","is-good"],L=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];s.style.width=E[v]+"%",s.className=_[v],u.textContent=L[v]}async function N(a){a.preventDefault();let s=document.getElementById("sec2-pw-current").value,u=document.getElementById("sec2-pw-new").value,v=document.getElementById("sec2-pw-confirm").value;if(!s||!u||!v){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(u.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(u!==v){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let E=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:s,new_password:u,confirm_password:v})}),_=await E.json().catch(()=>({}));E.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),p(""),_.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(_.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(E){console.error("Password change error:",E),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function D(){let a=++j,s=document.getElementById("sec2-wsa-status");C=!0,w(!0),s.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let u=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!u.ok)throw new Error(u.status);let v=await u.json();if(a!==j)return!1;g={require_token:!!v.require_token,token:v.token||""},document.getElementById("sec2-wsa-toggle").checked=!!v.require_token,document.getElementById("sec2-wsa-token").value=v.token||"",s.textContent=v.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),s.className="admin-ui-chip admin-sec-status-chip "+(v.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,S();let E=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=E?new Date(parseInt(E,10)).toLocaleString():"\u2014",!0}catch{return a!==j||(g=null,w(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,s.textContent=ServerI18n.t("security2LoadFailed"),s.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{a===j&&(C=!1,w(f||!g),f||S())}}function w(a){["toggle","token","save","rotate","copy","reveal"].forEach(s=>{document.getElementById("sec2-wsa-"+s).disabled=a}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",a)}function x(){return f||C||!g?!1:(f=!0,++j,w(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function R(){if(f=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,w(C||!g),g&&!C){let a=document.getElementById("sec2-wsa-status");a.textContent=ServerI18n.t(g.require_token?"security2StatusEnabled":"security2StatusDisabled"),a.className="admin-ui-chip admin-sec-status-chip "+(g.require_token?"is-active":""),S()}}function S(){if(f||C||!g)return;document.getElementById("sec2-wsa-disabled-warning").hidden=g.require_token;let a=document.getElementById("sec2-wsa-toggle").checked!==g.require_token||document.getElementById("sec2-wsa-token").value.trim()!==g.token;document.getElementById("sec2-wsa-draft-hint").hidden=!a}function b(a){return String(a||"").split(/\n+/).map(s=>s.trim()).filter(Boolean)}function I(a){return String(a||"").split(",").map(s=>s.trim().toUpperCase()).filter(Boolean)}function O(a,s){let u=document.getElementById(a);u&&(u.textContent=s==null||s===""?"\u2014":String(s))}async function A(){try{let a=await fetch("/admin/security/settings",{credentials:"same-origin"}),s=await a.json().catch(()=>({}));if(!a.ok)throw new Error(s.error||a.status);let u=s.ip_allowlist||{},v=s.cors||{},E=s.tls||{},_=!!u.enabled,L=Array.isArray(u.entries)?u.entries:[],M=document.getElementById("sec2-ip-dot"),P=document.getElementById("sec2-ip-status-chip"),W=document.getElementById("sec2-ip-toggle"),T=document.getElementById("sec2-ip-entries");M&&(M.classList.toggle("is-lime",_),M.classList.toggle("is-amber",!_)),P&&(P.textContent=_?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),P.className="admin-ui-chip admin-sec-status-chip "+(_?"is-active":"is-warn")),W&&(W.checked=_),T&&(T.value=L.join(`
`)),O("sec2-ip-current",u.current_ip||"\u2014"),O("sec2-ip-status-line",_?ServerI18n.t("security2IpStatusEnabled",{n:L.length}):ServerI18n.t("security2IpStatusDisabled"));let q=Array.isArray(v.origins)?v.origins:["*"],U=Array.isArray(v.methods)?v.methods:[],J=document.getElementById("sec2-cors-origins"),K=document.getElementById("sec2-cors-credentials"),G=document.getElementById("sec2-cors-methods"),te=document.getElementById("sec2-cors-cred-dot");J&&(J.value=q.join(`
`)),K&&(K.checked=!!v.supports_credentials),G&&(G.value=U.join(", ")),te&&(te.classList.toggle("is-lime",!v.supports_credentials),te.classList.toggle("is-amber",!!v.supports_credentials)),O("sec2-cors-origins-line",q.join(", ")),O("sec2-cors-credentials-line",v.supports_credentials?"true":"false"),O("sec2-cors-methods-line",U.join(", "));let ne=E.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:E.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");O("sec2-hsts-status",ne)}catch(a){console.error("Security settings load error:",a);let s=document.getElementById("sec2-ip-status-chip");s&&(s.textContent=ServerI18n.t("security2LoadFailed"),s.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function B(a){let s={};if(a==="ip")s.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:b(document.getElementById("sec2-ip-entries")?.value||"")};else if(a==="cors"){let u=b(document.getElementById("sec2-cors-origins")?.value||"");s.cors={origins:u.length?u:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:I(document.getElementById("sec2-cors-methods")?.value||"")}}try{let u=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),v=await u.json().catch(()=>({}));if(!u.ok){window.showToast&&showToast(v.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await A()}catch(u){console.error("Security settings save error:",u),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function h(){if(f||C||!g)return;let a=document.getElementById("sec2-wsa-toggle").checked,s=document.getElementById("sec2-wsa-token").value.trim();if(a&&!s){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(x())try{let u=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:a,token:s})}),v=await u.json().catch(()=>({}));u.ok?await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(v.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{R()}}async function c(){if(!(f||C||!g||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&x())try{let s=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),u=await s.json().catch(()=>({}));if(s.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(u.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{R()}}function r(){let a=document.getElementById("sec2-wsa-token").value;if(!a){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(a).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function t(){let a=document.getElementById("sec2-wsa-token");a.type=a.type==="password"?"text":"password";let s=a.type==="text",u=document.getElementById("sec2-wsa-reveal");u.setAttribute("aria-pressed",String(s)),u.textContent=ServerI18n.t(s?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),u.setAttribute("aria-label",u.textContent)}async function d(a){if(a==="reset-ws"&&(f||C||!g))return;let s={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:v=>ServerI18n.t("security2ToastApiTokensRevoked",{n:v.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[a];if(!(!s||!await window.HudConfirm?.open({icon:"\u26A0",title:s.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:s.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:s.severity||"warn",body:s.confirm,confirmLabel:s.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(a==="reset-ws"&&!x()))try{let v=await window.csrfFetch(s.url,{method:"POST"}),E=await v.json().catch(()=>({}));if(!v.ok){window.showToast&&showToast(E.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(a==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await D())return}window.showToast&&showToast(s.ok(E),!0)}catch(v){console.error("Security danger action error:",v),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{a==="reset-ws"&&R()}}function e(){let a=document.getElementById("sec2-session-self-line");if(a){let v=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),E=navigator.platform||navigator.userAgentData?.platform||"",_=v?v[0].split("/")[0]:"Browser";a.textContent=ServerI18n.t("security2SessionSelfLine",{browser:_,platform:E})}let s=document.getElementById("sec2-tls-dot"),u=document.getElementById("sec2-tls-status");if(s&&u){let v=location.protocol==="https:";s.classList.add(v?"is-lime":"is-crimson"),u.textContent=v?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function i(){let a=document.getElementById("sec2-pw-form");a&&a.addEventListener("submit",N);let s=document.getElementById("sec2-pw-new");s&&s.addEventListener("input",u=>p(u.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",h),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",c),document.getElementById("sec2-wsa-copy")?.addEventListener("click",r),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",t),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",S),document.getElementById("sec2-wsa-token")?.addEventListener("input",S),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>B("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>B("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(u=>{u.addEventListener("click",()=>{let v=document.querySelector(`[data-sec-disclosure="${u.dataset.secDisclose}"]`);v&&(v.hidden=!v.hidden,u.setAttribute("aria-expanded",v.hidden?"false":"true"),v.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(u=>{u.dataset.secBound!=="1"&&(u.dataset.secBound="1",u.addEventListener("click",()=>d(u.dataset.secDanger)))}),e(),D(),A()}function o(){}function n(){let a=document.querySelector(".admin-dash-grid"),s=document.getElementById(y);if(!a||!s)return;let u=a.dataset.activeRoute||"live",v=a.dataset.activeLeaf||u;s.style.display=u==="security"||u==="system"&&v==="security"?"":"none"}function l(){let a=document.getElementById("settings-grid");!a||document.getElementById(y)||(a.insertAdjacentHTML("beforeend",F()),i(),n())}function m(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let a=null;function s(){let v=document.querySelector(".admin-dash-grid");!v||a||(a=new MutationObserver(n),a.observe(v,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?l():void 0,s(),n()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",n),document.addEventListener("admin-panel-rendered",()=>{l(),s(),n()}),s(),l()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m()})()});var qt=ye(()=>{(function(){"use strict";let y="admin-backup-v2-page";var k=window.AdminUtils.escapeHtml;function g(){let e=i=>ServerI18n.t(i);return`
      <div id="${y}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${e("backupPageTitle")}</h2>
          <p class="admin-ui-page-note">${e("backupPageNote")}</p>
          <!-- 2026-09-07\uFF1A\u642C\u56DE\u9801\u9996\u88E1\u3002\u9801\u9996\u88AB\u4F75\u9032 topbar \u6642\uFF0Cshell \u7684
               [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB\uFF08\u898B admin.js \u7684
               _dedupSectionTitles\uFF09\uFF0C\u4E0D\u6703\u518D\u8DDF\u8457\u6D88\u5931\u3002 -->
          <div class="admin-ui-inline-toolbar admin-ui-page-actions">
            <button type="button" id="bk2-pack-export" class="admin-ui-action is-primary">${e("backupPackExportBtn")}</button>
          </div>
        </div>

        <div class="admin-ui-group-label">${e("backupGroupDownload")}</div>
        <div class="admin-ui-group" data-zone="export">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("backupSecFullState")}
              <span class="sub" id="bk2-pack-summary">${e("backupCalculatingSize")}</span>
              <span class="sub" id="bk2-pack-detail">${e("backupPackContentList")}</span>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("backupSecSettingsSnap")}
              <span class="sub">${e("backupSettingsSnapshotDesc")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-settings-download" class="admin-ui-action is-primary">${e("backupDownloadBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("backupSecAssetPack")}
              <span class="sub" id="bk2-assets-summary">${e("backupCalculatingAssetSize")}</span>
              <span class="sub" id="bk2-assets-detail">${e("backupAssetContentList")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-assets-export" class="admin-ui-action is-primary">${e("backupAssetsExportBtn")}</button>
            </span>
          </div>

        </div>

        <div class="admin-ui-group-label">${e("backupGroupRestore")}</div>
        <div class="admin-ui-group" data-zone="restore">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("backupSecRestoreSettings")}
              <span class="sub">${e("backupSettingsRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-settings-upload" type="file" accept="application/json,.json" class="admin-ui-input" />
              <button type="button" id="bk2-settings-dryrun" class="admin-ui-action">${e("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-settings-apply" class="admin-ui-danger-btn" disabled title="${e("backupApplyDisabledTitle")}">${e("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-settings-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("backupSecRestoreFull")}
              <span class="sub">${e("backupFullPackRestoreNote")}</span>
              <span class="sub">${e("backupRestoreBeforeApplyHint")}</span>
            </span>
            <span class="val">
              <input id="bk2-pack-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-pack-dryrun" class="admin-ui-action">${e("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-pack-apply" class="admin-ui-danger-btn" disabled title="${e("backupApplyDisabledTitle")}">${e("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-pack-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("backupSecRestoreAssets")}
              <span class="sub">${e("backupAssetRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-assets-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-assets-dryrun" class="admin-ui-action">${e("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-assets-apply" class="admin-ui-danger-btn" disabled title="${e("backupApplyDisabledTitle")}">${e("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-assets-diff" class="admin-backup-diff" hidden></pre></div>
        </div>

        <div class="admin-ui-danger-label">${e("backupGroupDanger")}</div>
        <div class="admin-ui-group is-danger" data-zone="danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("backupSecClearHistory")}
              <span class="sub">${e("backupClearHistoryDesc")}</span>
            </span>
            <span class="val">
              <select id="bk2-clear-scope" class="admin-ui-select">
                <option value="all" selected>${e("backupClearScopeAll")}</option>
              </select>
              <button type="button" id="bk2-clear-history" class="admin-ui-danger-btn">${e("backupClearBtn")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("backupSecFactoryReset")}
              <span class="sub">${e("backupFactoryResetDesc")}</span>
            </span>
            <span class="val">
              <input id="bk2-factory-confirm" type="text" class="admin-ui-input" placeholder="reset" autocomplete="off" spellcheck="false" />
              <button type="button" id="bk2-factory-reset" class="admin-ui-danger-btn" disabled>${e("backupFactoryResetBtn")}\u2026</button>
            </span>
          </div>
        </div>
      </div>`}async function f(){try{let e=await fetch("/get_settings",{credentials:"same-origin"});if(!e.ok)throw new Error(e.status);let i=await e.json(),o=["password","token","secret","hash"],n={};Object.keys(i||{}).forEach(u=>{o.some(v=>u.toLowerCase().includes(v))||(n[u]=i[u])});let l=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:n},null,2)],{type:"application/json"}),m=URL.createObjectURL(l),a=new Date().toISOString().replace(/[:.]/g,"-"),s=document.createElement("a");s.href=m,s.download="danmu-settings-"+a+".json",document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(m),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(e){console.error("Settings snapshot error:",e),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let C=null;function j(){C=null;let e=document.getElementById("bk2-settings-apply");e&&(e.disabled=!0,e.title=ServerI18n.t("backupApplyDisabledTitle"))}async function F(){let e=document.getElementById("bk2-settings-upload"),i=document.getElementById("bk2-settings-diff"),o=document.getElementById("bk2-settings-apply"),n=e&&e.files&&e.files[0];if(!n){j(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let l=await n.text(),m=JSON.parse(l),a=m.settings||m;if(!a||typeof a!="object"||Array.isArray(a))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let s=await fetch("/get_settings",{credentials:"same-origin"}),u=s.ok?await s.json():{},v=[];new Set([...Object.keys(u),...Object.keys(a)]).forEach(_=>{let L=JSON.stringify(u[_]),M=JSON.stringify(a[_]);L!==M&&(L===void 0?v.push("+ "+_+": "+M):M===void 0?v.push("- "+_+": "+L):v.push("~ "+_+": "+L+" \u2192 "+M))}),i.textContent=v.length?v.join(`
`):ServerI18n.t("backupNoDiff"),i.hidden=!1,C=a,o&&(o.disabled=!1,o.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:v.length}),!0)}catch(l){console.error("Dry-run error:",l),j(),i.textContent=ServerI18n.t("backupParseFailedDetail",{msg:l&&l.message?l.message:String(l)}),i.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function $(){let e=document.getElementById("bk2-settings-diff"),i=document.getElementById("bk2-settings-apply");if(!C){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"danger",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let n=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:C})}),l=await n.json().catch(()=>({}));if(!n.ok){e&&(e.hidden=!1,e.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(l.details||l,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}e&&(e.hidden=!1,e.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(l.applied||[]).length+" settings"),C=null,i&&(i.disabled=!0,i.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(n){e&&(e.hidden=!1,e.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:n&&n.message?n.message:String(n)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function p(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function N(){let e=document.getElementById("bk2-factory-confirm"),i=document.getElementById("bk2-factory-reset");!e||!i||(e.addEventListener("input",()=>{let o=e.value.trim()==="reset";i.classList.toggle("is-ready",o),i.disabled=!o}),i.addEventListener("click",D))}async function D(){let e=document.getElementById("bk2-factory-confirm"),i=document.getElementById("bk2-factory-reset");if((e?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{i&&(i.disabled=!0);let n=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),l=await n.json().catch(()=>({}));if(!n.ok||!l.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),i&&(i.disabled=!1);return}e&&(e.value=""),i&&(i.classList.remove("is-ready"),i.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),S()}catch{i&&(i.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function w(){document.getElementById("bk2-settings-download")?.addEventListener("click",f),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",F),document.getElementById("bk2-settings-apply")?.addEventListener("click",$),document.getElementById("bk2-clear-history")?.addEventListener("click",p),document.getElementById("bk2-pack-export")?.addEventListener("click",b),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",A),document.getElementById("bk2-pack-apply")?.addEventListener("click",B),document.getElementById("bk2-assets-export")?.addEventListener("click",O),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",h),document.getElementById("bk2-assets-apply")?.addEventListener("click",c),N(),S(),I()}let x=null,R=null;async function S(){let e=document.getElementById("bk2-pack-summary");if(e)try{let i=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!i.ok){e.textContent=ServerI18n.t("backupPreviewUnavailable");return}let o=await i.json(),n=(o.total_bytes/(1024*1024)).toFixed(2);e.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:o.file_count||0,mb:n})}catch{e.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function b(){window.location.href="/admin/backup/export",window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function I(){let e=document.getElementById("bk2-assets-summary");if(e)try{let i=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!i.ok){e.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let o=await i.json(),n=(o.total_bytes/(1024*1024)).toFixed(2);e.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:o.file_count||0,mb:n})}catch{e.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function O(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}async function A(){let i=document.getElementById("bk2-pack-upload")?.files?.[0];if(!i){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(i.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let o=new FormData;o.append("file",i);let n=document.getElementById("bk2-pack-diff"),l=document.getElementById("bk2-pack-apply");try{let m=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:o}),a=await m.json().catch(()=>({}));if(!m.ok||!a.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(a.errors||a,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),l&&(l.disabled=!0),x=null;return}if(n){n.hidden=!1;let s=[],u=a.manifest||{};s.push("manifest version: "+(u.version||"?")),s.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),s.push(""),s.push("Will write "+(a.members?.length||0)+" files:"),(a.members||[]).forEach(v=>{s.push("  "+v.label+"/"+v.path.split("/").slice(1).join("/")+" ("+(v.size||0)+" B)")}),a.skipped?.length&&(s.push(""),s.push("Skipped "+a.skipped.length+" entries:"),a.skipped.forEach(v=>s.push("  "+v.path+" \u2014 "+v.reason))),n.textContent=s.join(`
`)}x=i,l&&(l.disabled=!1,l.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:a.members?.length||0}),!0)}catch(m){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:m.message||""}),!1)}}async function B(){if(!x){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let i=new FormData;i.append("file",x);try{let n=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:i})).json().catch(()=>({})),l=document.getElementById("bk2-pack-diff");if(l){l.hidden=!1;let m=[];n.ok?(m.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),m.push(""),m.push("Applied "+(n.applied||0)+" files"),n.skipped?.length&&m.push("Skipped "+n.skipped.length+" (see above)")):(m.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),m.push(JSON.stringify(n.errors||n,null,2))),l.textContent=m.join(`
`)}if(n.ok){window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint",{n:n.applied}),!0),x=null;let m=document.getElementById("bk2-pack-apply");m&&(m.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(o){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:o.message||""}),!1)}}async function h(){let i=document.getElementById("bk2-assets-upload")?.files?.[0];if(!i){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(i.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let o=new FormData;o.append("file",i);let n=document.getElementById("bk2-assets-diff"),l=document.getElementById("bk2-assets-apply");try{let m=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:o}),a=await m.json().catch(()=>({}));if(!m.ok||!a.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(a.errors||a,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),l&&(l.disabled=!0),R=null;return}if(n){n.hidden=!1;let s=[],u=a.manifest||{};s.push("manifest version: "+(u.version||"?")),s.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),s.push(""),s.push("Will write "+(a.members?.length||0)+" asset files:"),(a.members||[]).forEach(v=>{s.push("  "+v.path+" ("+(v.size||0)+" B)")}),a.skipped?.length&&(s.push(""),s.push("Skipped "+a.skipped.length+" entries:"),a.skipped.forEach(v=>s.push("  "+v.path+" \u2014 "+v.reason))),n.textContent=s.join(`
`)}R=i,l&&(l.disabled=!1,l.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:a.members?.length||0}),!0)}catch(m){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:m.message||""}),!1)}}async function c(){if(!R){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"danger",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let i=new FormData;i.append("file",R);try{let n=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:i})).json().catch(()=>({})),l=document.getElementById("bk2-assets-diff");if(l){l.hidden=!1;let m=[];n.ok?(m.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),m.push(""),m.push("Applied "+(n.applied||0)+" files"),n.skipped?.length&&m.push("Skipped "+n.skipped.length+" (see above)")):(m.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),m.push(JSON.stringify(n.errors||n,null,2))),l.textContent=m.join(`
`)}if(n.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:n.applied}),!0),R=null;let m=document.getElementById("bk2-assets-apply");m&&(m.disabled=!0),I()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(o){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:o.message||""}),!1)}}function r(){let e=document.querySelector(".admin-dash-grid"),i=document.getElementById(y);if(!e||!i)return;let o=e.dataset.activeLeaf||"dashboard";i.style.display=o==="backup"?"":"none"}function t(){let e=document.getElementById("settings-grid");!e||document.getElementById(y)||(e.insertAdjacentHTML("beforeend",g()),w(),r())}function d(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&t(),r()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",r),document.addEventListener("admin-panel-rendered",()=>{t(),r()}),t()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var Ht=ye(()=>{(function(){"use strict";let y="admin-broadcast-v2-page",k="/admin/broadcast/status",g="/admin/broadcast/toggle",f={mode:"live"},C=null,j=0,F=!1;async function $(){try{let e=await fetch(k,{credentials:"same-origin"});if(!e.ok)return;let i=await e.json();i&&(i.mode==="live"||i.mode==="standby")&&(C=i.session||null,f=i)}catch{}try{let e=await fetch("/overlay_status",{credentials:"same-origin"});e.ok&&(j=(await e.json()).overlay_count||0,F=!0)}catch{}p()}function p(){document.dispatchEvent(new CustomEvent("admin-overlay-state",{detail:{live:f.mode==="live",count:F?j:void 0}}))}async function N(e){try{let i=await window.csrfFetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:e})});if(!i.ok){let o=await i.json().catch(()=>({}));throw new Error(o&&o.error?o.error:`HTTP ${i.status}`)}return f=await i.json(),p(),!0}catch(i){return console.warn("[admin-broadcast] toggle failed:",i),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:i&&i.message||""}),!1),!1}}function D(e,i){return ServerI18n.t(e?"uiDisplayOn":"uiDisplayOff")+" \xB7 "+ServerI18n.t("setupWizardReadyDisplayOk",{n:i})}function w(e){return e?"broadcastBigPause":"broadcastBigResume"}async function x(e){let i=await N(e?"live":"standby");return i&&window.showToast&&window.showToast(ServerI18n.t(e?"broadcastToastResumed":"broadcastToastPaused"),!0),A(),i}async function R(){return await $(),x(f.mode!=="live")}async function S(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"danger",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearScreenBtn")}))try{let i=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});i.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:i.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}window.AdminOverlayControl={setDisplay:x,toggleDisplay:R,clearScreen:S,statusText:D,toggleKey:w};function b(){let e=i=>ServerI18n.t(i);return`
      <div id="${y}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-bc-v4__body">
          <div class="admin-bc-v5__status-row" role="status" aria-live="polite">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>\u2014</span>
          </div>

          <!-- \u9019\u9801\u552F\u4E00\u7684\u4E3B\u52D5\u4F5C\u3002\u6E05\u7A7A\u756B\u9762\u4E0D\u53EF\u5FA9\u539F\uFF0C\u9694\u8457\u5206\u9694\u7DDA\u653E\u5728\u4E0B\u9762\u3002 -->
          <button type="button" class="admin-ui-action is-primary admin-bc-v4__big" data-bc-big
                  data-i18n="${w(!1)}">${e(w(!1))}</button>
          <div class="admin-bc-v4__secondary">
            <button type="button" class="admin-ui-action is-danger" data-bc-clear
                    data-i18n="broadcastClearScreenBtn">${e("broadcastClearScreenBtn")}</button>
          </div>

          <div class="admin-bc-v5__session-ctx" data-bc-session-ctx hidden>
            <div class="admin-bc-v5__session-row">
              <span class="admin-bc-v5__session-id" data-bc-session-id>\u2014</span>
              <span class="admin-bc-v5__spacer"></span>
              <a class="admin-bc-v5__session-link" href="#/sessions"
                 data-i18n="broadcastManageSessionsLink">${e("broadcastManageSessionsLink")}</a>
            </div>
          </div>
        </div>
      </div>`}let I=0,O=0;function A(){let e=document.getElementById(y);if(!e)return;let i=f.mode==="live",o=i?"live":"standby",n=(E,_)=>{E&&E.textContent!==_&&(E.textContent=_)};e.dataset.bcState=o;let l=e.querySelector("[data-bc-statedot]");l&&(l.dataset.state=o);let m=e.querySelector("[data-bc-statelabel]");m&&(n(m,D(i,j)),m.dataset.state=o);let a=e.querySelector("[data-bc-big]");a&&(a.dataset.i18n=w(i),n(a,ServerI18n.t(a.dataset.i18n)));let s=C||{},u=!!(s.id||s.name),v=e.querySelector("[data-bc-session-ctx]");v&&(v.hidden=!u),u&&n(e.querySelector("[data-bc-session-id]"),String(s.name||s.id))}function B(){let e=document.getElementById(y);e&&(e.querySelector("[data-bc-big]")?.addEventListener("click",()=>x(f.mode!=="live")),e.querySelector("[data-bc-clear]")?.addEventListener("click",S))}function h(){I||($().then(A),A(),I=setInterval(()=>{$().then(A)},5e3),O=setInterval(A,1e3))}function c(){I&&(clearInterval(I),I=0),O&&(clearInterval(O),O=0)}function r(){let e=document.querySelector(".admin-dash-grid"),i=document.getElementById(y);if(!e||!i)return;let o=e.dataset.activeLeaf||"dashboard",n=o==="overlay"||o==="broadcast";i.style.display=n?"":"none",n?h():c()}function t(){let e=document.getElementById("settings-grid");!e||document.getElementById(y)||(e.insertAdjacentHTML("afterbegin",b()),B(),r())}function d(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&t(),r()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",r),document.addEventListener("admin-panel-rendered",()=>{t(),r()}),t()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var jt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,k=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;let f=["keyword","regex","replace","rate_limit"],C=["block","replace","allow","review"],j={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"};function F(T){var q=y();return q[T]!==void 0?q[T]:!1}function $(T,q){if(typeof ServerI18n<"u"&&ServerI18n.t){let U=ServerI18n.t(T);if(U&&U!==T)return U}return q||T}let p={keyword:"is-cyan",regex:"is-cyan",replace:"is-amber",rate_limit:"is-danger"},N={block:"var(--hud-crimson)",replace:"var(--hud-amber)",allow:"var(--hud-lime)",review:"var(--color-ink-accent)"};function D(){return`
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
                <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">${$("addFilterRule","Add Rule")}</span>

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
                  <input type="text" id="filterPattern" placeholder="${$("filterPatternPlaceholder","Enter pattern...")}"
                    class="admin-ui-input" />
                </div>
                <div id="filterReplacementRow" class="hidden">
                  <label for="filterReplacement" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("fltColReplacement")}</label>
                  <input type="text" id="filterReplacement" placeholder="${$("filterReplacementPlaceholder","Replacement text...")}"
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
                  + ${$("addRule","Add Rule")}
                </button>
              </div>
            </div>

            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">${$("testRule","Test Rule")}</span>
              </div>
              <div style="padding:14px;display:flex;flex-direction:column;gap:8px">
                <input id="filterTestText" type="text" placeholder="${$("sampleText","Sample text...")}"
                  class="admin-ui-input" />
                <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action" style="align-self:flex-start">${$("testBtn","Test")}</button>
                <div id="filterTestResult" style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);letter-spacing:0.02em"></div>
              </div>
            </div>
          </div>
        </div>
      </div>`}let w="all";function x(T){let q=p[T.type]||"is-default",U=N[T.action]||"var(--color-text-muted)",J={keyword:"ulWord",regex:"ulRegex",replace:"ulReplace",rate_limit:"ulRate"},K=ServerI18n.t(J[T.type]||"ulWord"),G=T.pattern;if(T.type==="replace"&&T.replacement!==void 0&&(G=`${T.pattern}  \u2192  ${T.replacement}`),T.type==="rate_limit"){let z=T.max_count||5,Q=T.window_sec||60;G=`${T.pattern}  \xB7  ${z}/${Q}s`}let te=T.enabled?"":"opacity:0.45;",ne=j[T.action]?ServerI18n.t(j[T.action]):T.action;return`
      <div class="hud-table-row hud-rule-row admin-flt-v4__grid" style="${te}" data-rule-id="${g(T.id)}" data-rule-type="${g(T.type)}">
        <span style="font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all">${g(G)}</span>
        <span class="hud-pill ${q}">${K}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;padding:2px 6px;border-radius:3px;background:${U};color:#000;font-weight:700;width:fit-content">${g(ne)}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">P${g(String(T.priority))}</span>
        <label class="relative inline-block" style="width:32px;align-self:center" title="${g(T.enabled?$("enabled","Enabled"):$("disabled","Disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${g(T.id)}" ${T.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${T.enabled?"is-on":"is-off"}" style="cursor:pointer"></span>
        </label>
        <button class="filter-delete-btn" type="button" data-rule-id="${g(T.id)}" title="${$("deleteRule","Delete")}" aria-label="${$("deleteRule","Delete")}">${window.AdminUtils.closeIcon}</button>
      </div>`}function R(T){let q={all:T.length,keyword:0,regex:0,replace:0,rate_limit:0};T.forEach(J=>{q[J.type]!=null&&q[J.type]++}),Object.keys(q).forEach(J=>{let K=document.querySelector(`[data-filter-count="${J}"]`);K&&(K.textContent=q[J])});let U=document.querySelector('[data-mod-stat="rules"]');U&&(U.textContent=q.all)}async function S(){let T=document.querySelector('[data-mod-stat="blacklist"]');if(T)try{let q=await fetch("/admin/blacklist/get",{credentials:"same-origin"});if(!q.ok)return;let U=await q.json(),J=Array.isArray(U)?U:U.keywords||[];T.textContent=String(J.length)}catch{}}async function b(){try{let T=await csrfFetch("/admin/filters/list");if(!T.ok)throw new Error("HTTP "+T.status);return(await T.json()).rules||[]}catch(T){return console.error("Failed to fetch filter rules:",T),showToast($("fetchFiltersFailed","Failed to load filter rules"),!1),[]}}async function I(){let T=document.getElementById("filterRulesList");if(!T)return;T.innerHTML=`<div style="padding:12px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${$("loading","Loading...")}</div>`;let q=await b();if(R(q),S(),q.length===0){if(window.AdminEmpty){let J=window.AdminEmpty.render("filters");J.setAttribute("data-empty-kind","filters"),T.innerHTML="",T.appendChild(J)}else T.innerHTML=`<div data-empty-kind="filters" style="padding:18px 14px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${$("noFilterRules","No filter rules configured.")}</div>`;return}let U=w==="all"?q:q.filter(J=>J.type===w);T.innerHTML=U.map(x).join("")}async function O(){let T=document.getElementById("filterType"),q=document.getElementById("filterAction"),U=document.getElementById("filterPattern"),J=document.getElementById("filterReplacement"),K=document.getElementById("filterPriority"),G=document.getElementById("filterMaxCount"),te=document.getElementById("filterWindowSec"),ne=T.value,z=(U.value||"").trim();if(!z){showToast($("patternRequired","Pattern is required"),!1),U.focus();return}let Q={type:ne,pattern:z,action:q.value,priority:parseInt(K.value,10)||0};ne==="replace"&&(Q.replacement=J.value||""),ne==="rate_limit"&&(Q.max_count=parseInt(G.value,10)||5,Q.window_sec=parseFloat(te.value)||60);try{let Z=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Q)}),se=await Z.json();if(!Z.ok){showToast(se.error||$("addRuleFailed","Failed to add rule"),!1);return}showToast($("ruleAdded","Rule added"),!0),U.value="",J.value="",await I()}catch(Z){console.error("Add filter rule error:",Z),showToast($("addRuleFailed","Failed to add rule"),!1)}}async function A(T){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("filtersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteFilterRule"),severity:"danger",body:$("confirmDeleteRule","Delete this filter rule?"),confirmLabel:ServerI18n.t("filtersDeleteConfirm")}))try{let U=await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:T})}),J=await U.json();if(!U.ok){showToast(J.error||$("deleteRuleFailed","Failed to delete rule"),!1);return}showToast($("ruleDeleted","Rule deleted"),!0),await I()}catch(U){console.error("Delete filter rule error:",U),showToast($("deleteRuleFailed","Failed to delete rule"),!1)}}async function B(T,q){try{let U=await csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:T,updates:{enabled:q}})}),J=await U.json();if(!U.ok){showToast(J.error||$("updateRuleFailed","Failed to update rule"),!1),await I();return}}catch(U){console.error("Toggle filter rule error:",U),showToast($("updateRuleFailed","Failed to update rule"),!1),await I()}}async function h(){let T=document.getElementById("filterTestText"),q=document.getElementById("filterTestResult"),U=document.getElementById("filterType"),J=document.getElementById("filterAction"),K=document.getElementById("filterPattern"),G=document.getElementById("filterReplacement"),te=document.getElementById("filterMaxCount"),ne=document.getElementById("filterWindowSec"),z=(T.value||"").trim();if(!z){showToast($("sampleTextRequired","Enter sample text to test"),!1),T.focus();return}let Q=(K.value||"").trim();if(!Q){showToast($("patternRequired","Pattern is required"),!1),K.focus();return}let Z=U.value,se={type:Z,pattern:Q,action:J.value};Z==="replace"&&(se.replacement=G.value||""),Z==="rate_limit"&&(se.max_count=parseInt(te.value,10)||5,se.window_sec=parseFloat(ne.value)||60),q.innerHTML=`<span style="color:var(--color-text-muted)">${$("testing","Testing...")}</span>`;try{let ie=await csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:se,text:z})}),de=await ie.json();if(!ie.ok){q.innerHTML=`<span style="color: var(--color-ink-error)">${g(de.error||"Test failed")}</span>`;return}let ce="";de.action==="block"?ce=`<span style="color: var(--color-ink-error);font-weight:600">${$("blocked","BLOCKED")}</span>`:de.action==="replace"?ce=`<span style="color: var(--color-ink-warning);font-weight:600">${$("replaced","REPLACED")}</span> <span style="color:var(--color-text-secondary)">\u2192 ${g(de.text)}</span>`:de.action==="allow"?ce=`<span style="color: var(--color-ink-success);font-weight:600">${$("allowed","ALLOWED")}</span>`:de.action==="review"?ce=`<span style="color: var(--color-ink-accent);font-weight:600">${ServerI18n.t("fltActReview")}</span>`:ce=`<span style="color:var(--color-text-muted)">${$("noMatch","No match (pass)")}</span>`,de.reason&&(ce+=`<br/><span style="font-size:11px;color:var(--color-text-muted)">${g(de.reason)}</span>`),q.innerHTML=ce}catch(ie){console.error("Test filter rule error:",ie),q.innerHTML=`<span style="color: var(--color-ink-error)">${$("testError","Test error")}</span>`}}function c(){let T=document.getElementById("filterType"),q=document.getElementById("filterReplacementRow"),U=document.getElementById("filterRateLimitRow");if(!T)return;let J=T.value;q&&(q.style.display=J==="replace"?"":"none"),U&&(U.style.display=J==="rate_limit"?"grid":"none")}function r(){let T=document.getElementById("filterTypeChips");T&&T.addEventListener("click",q=>{let U=q.target.closest(".hud-filter-chip");U&&(w=U.dataset.filterScope||"all",T.querySelectorAll(".hud-filter-chip").forEach(J=>{J.classList.toggle("is-active",J.dataset.filterScope===w)}),I())})}let t=6,d=[],e=!1,i=0,o=0;function n(T){let q=new Date(T*1e3),U=J=>String(J).padStart(2,"0");return`${U(q.getHours())}:${U(q.getMinutes())}:${U(q.getSeconds())}`}function l(T){let q=(T||"").toUpperCase();return q==="BLOCK"?"var(--hud-crimson)":q==="MASK"||q==="REPLACE"?"var(--hud-amber)":q==="REVIEW"?"var(--color-primary)":q==="ALLOW"?"var(--hud-lime)":"var(--color-text-muted)"}function m(){let T=document.getElementById("filterLiveLog");if(T){if(d.length===0){T.innerHTML=`<div style="color:var(--color-text-muted);text-align:center;padding:10px">${ServerI18n.t("fltNoEvents")}</div>`;return}T.innerHTML=d.map(q=>{let U=n(q.ts),J=(q.action||"").toUpperCase(),K=l(J),G=(q.text_excerpt||"").replace(/[<>&"]/g,Q=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[Q]),te=(q.pattern||"").replace(/[<>&"]/g,Q=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[Q]),ne=(q.source||"").slice(0,16),z=ne?`\xB7 ${ne}`:"";return`<div class="admin-filter-log-row" style="display:grid;grid-template-columns:64px 70px 1fr;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px dashed var(--hud-line)">
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${U}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${K}">${J}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\u300C${G}\u300D<span style="color:var(--color-text-muted)"> \u2014 \u898F\u5247 ${te} ${z}</span></span>
      </div>`}).join("")}}async function a(){try{let T=await fetch(`/admin/filters/events?since=${o}`,{credentials:"same-origin"});if(!T.ok)return;let q=await T.json();if(q.counts_24h){let U=(J,K)=>{let G=document.querySelector(`[data-mod-stat="${J}"]`);G&&(G.textContent=K!=null?String(K):"\u2014")};U("masked",q.counts_24h.MASK||0),U("blocked",q.counts_24h.BLOCK||0)}if(!Array.isArray(q.events)||q.events.length===0)return;for(d.unshift(...q.events);d.length>t;)d.pop();o=q.latest_seq||o,document.getElementById("filterLiveLog")&&m()}catch{}}function s(){e||(e=!0,a(),i=setInterval(a,4e3))}let u=Object.create(null),v="[QUICK]";function E(T,q){return T.find(U=>(U.name||"").startsWith(v+" "+q))}async function _(){let T=await b().catch(()=>[]);document.querySelectorAll(".admin-flt-v4__qchip").forEach(q=>{let U=q.dataset.fltLabel,J=E(T,U),K=!!J&&J.enabled!==!1;q.classList.toggle("is-active",K),J?u[q.dataset.fltQuickId]=J.id||J.rule_id:delete u[q.dataset.fltQuickId]})}async function L(T){let q=T.dataset.fltQuickId,U=T.dataset.fltPattern,J=T.dataset.fltAction,K=T.dataset.fltLabel,G=u[q];if(G)(await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:G})})).ok?(delete u[q],T.classList.remove("is-active"),showToast(ServerI18n.t("filtersToastDisabled",{label:K}),!0)):showToast(ServerI18n.t("filtersToastDisableFailed"),!1);else{let te=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",name:`${v} ${K}`,pattern:U,action:J,enabled:!0,priority:50})});if(te.ok){let ne=await te.json().catch(()=>({}));ne.rule_id&&(u[q]=ne.rule_id),T.classList.add("is-active"),showToast(ServerI18n.t("filtersToastEnabled",{label:K}),!0)}else{let ne=await te.json().catch(()=>({}));showToast(ServerI18n.t("filtersToastEnableFailed",{msg:ne.error||""}),!1)}}typeof renderRules=="function"&&renderRules()}function M(){let T=document.querySelector("[data-flt-quick]");T&&(T.addEventListener("click",q=>{let U=q.target.closest(".admin-flt-v4__qchip");U&&L(U)}),_())}function P(){let T=document.getElementById("settings-grid");if(!T)return;T.insertAdjacentHTML("beforeend",D()),r(),M();let q=document.getElementById("filterType");q&&q.addEventListener("change",c);let U=document.getElementById("filterAddBtn");U&&U.addEventListener("click",O);let J=document.getElementById("filterTestBtn");J&&J.addEventListener("click",h);let K=document.getElementById("filterTestText");K&&K.addEventListener("keydown",ne=>{ne.key==="Enter"&&(ne.preventDefault(),h())});let G=document.getElementById("filterPattern");G&&G.addEventListener("keydown",ne=>{ne.key==="Enter"&&(ne.preventDefault(),O())});let te=document.getElementById("filterRulesList");te&&(te.addEventListener("change",ne=>{let z=ne.target.closest(".filter-toggle-cb");if(!z)return;B(z.dataset.ruleId,z.checked);let Q=z.closest(".hud-rule-row"),Z=Q?.querySelector(".admin-filter-toggle-dot");Z&&(Z.classList.toggle("is-on",z.checked),Z.classList.toggle("is-off",!z.checked)),Q&&(Q.style.opacity=z.checked?"":"0.45")}),te.addEventListener("click",ne=>{let z=ne.target.closest(".filter-delete-btn");z&&A(z.dataset.ruleId)})),I(),s(),m()}function W(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&P()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&P()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",W):W()})()});var Ut=ye(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,k=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml,f=1e4,C=null;function j(b){var I=y();return I[b]!==void 0?I[b]:!1}function F(){return`
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
    `}function $(b){var I=ServerI18n.t("fingerprintState_"+b),O="";return b==="blocked"?O=" is-crimson":b==="flagged"?O=" is-amber":b==="active"?O=" is-cyan":O=" is-mute",'<span class="admin-fp-state'+O+'">'+g(I)+"</span>"}function p(b){if(!b)return"\u2014";try{var I=new Date(b*1e3);return I.toLocaleTimeString()}catch{return String(b)}}function N(b){var I=document.getElementById("adminFingerprintTableWrap");if(I){if(!b||b.length===0){I.innerHTML="";var O=window.AdminEmpty.render("audience");O.dataset.emptyKind="fingerprints",I.appendChild(O);return}var A='<div class="admin-fp-row admin-fp-row--head"><span>'+g(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",B=b.map(function(h){var c=h.blocked|0,r=h.hash||"",t=r.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+g(r)+'"><span class="admin-fp-hash admin-identity-fp" title="'+g(r)+'">fp:'+g(t)+'</span><span class="admin-fp-ip admin-identity-ip">'+g(h.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+g(h.ua||"")+'">'+g(h.ua||"\u2014")+'</span><span class="admin-fp-num">'+(h.msgs|0)+'</span><span class="admin-fp-num">'+(h.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(c>0?"is-crimson":"is-mute")+'">'+c+"</span><span>"+$(h.state||"active")+'</span><span class="admin-fp-ts">'+g(p(h.last_seen))+"</span></div>"}).join("");I.innerHTML=A+B}}async function D(){var b=document.getElementById("adminFingerprintCount");try{var I=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!I.ok)throw new Error("HTTP "+I.status);var O=await I.json(),A=O.records||[];if(N(A),b){var B=O.count||A.length,h=O.flagged!=null?O.flagged:A.filter(function(r){return r.state==="flagged"||r.state==="blocked"}).length;b.textContent=ServerI18n.t("fpCountSummary",{unique:B,flagged:h})}}catch(r){console.error("[admin-fingerprints] fetch failed:",r);var c=document.getElementById("adminFingerprintTableWrap");c&&(c.innerHTML='<span class="hud-pill is-danger">'+g(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function w(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var I=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(I.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await D();else{var O=await I.json().catch(function(){return{}});window.showToast(O.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(A){console.error("[admin-fingerprints] reset error:",A),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function x(){R(),C=setInterval(function(){var b=document.getElementById("sec-fingerprints");b&&b.offsetParent!==null&&D()},f)}function R(){C&&(clearInterval(C),C=null)}function S(){var b=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(b){b.insertAdjacentHTML("beforeend",F());var I=document.getElementById("adminFingerprintRefreshBtn");I&&I.addEventListener("click",D);var O=document.getElementById("adminFingerprintResetBtn");O&&O.addEventListener("click",w),D(),x()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var b=new MutationObserver(function(){var O=document.getElementById("moderation-grid")||document.getElementById("settings-grid");O&&!document.getElementById("sec-fingerprints")&&S()});b.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var I=document.getElementById("moderation-grid")||document.getElementById("settings-grid");I&&!document.getElementById("sec-fingerprints")&&S()}})})()});var Kt=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.escapeHtml;let k=(n,l)=>{let m=window.ServerI18n?.t?.(n);return m&&m!==n?m:l||n},g=!1;new MutationObserver(()=>{let n=document.getElementById("settings-grid");if(n&&!(document.getElementById("sec-widgets")||g)){g=!0;try{C(n)}finally{g=!1}}}).observe(document.body,{childList:!0,subtree:!0});function C(n){let l=document.createElement("div");l.id="sec-widgets",l.className="admin-widgets-page hud-page-stack lg:col-span-2";let m=location.origin+"/overlay";l.dataset.tpl="B",l.innerHTML=`
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
                <code class="admin-ow-url" data-ow-obs-url>${y(m)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${y(k("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${y(k("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,n.appendChild(l);let a=document.getElementById("widget-add"),s=l.querySelector("[data-ow-addmenu]");a.addEventListener("click",u=>{u.stopPropagation(),s.hidden=!s.hidden}),s.addEventListener("click",u=>{let v=u.target.closest("[data-ow-add]")?.dataset.owAdd;v&&(s.hidden=!0,$(v))}),document.addEventListener("click",u=>{!s.hidden&&!u.target.closest(".admin-ui-page-actions")&&(s.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",w),l.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let u=l.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(u).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),F()}async function j(n,l="GET",m=null){let a={method:l,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(m){let u=document.querySelector('meta[name="csrf-token"]');u&&(a.headers["X-CSRF-Token"]=u.content),a.body=JSON.stringify(m)}return(await fetch("/admin/widgets/"+n,a)).json()}async function F(){try{let n=await j("list");R(n.widgets||[])}catch(n){console.error("[admin-widgets] Load failed:",n)}}async function $(n){let l={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await j("create","POST",{type:n,config:l[n]||{}}),F()}catch(m){console.error("[admin-widgets] Create failed:",m)}}async function p(n){let l=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:l,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await j("delete","POST",{id:n}),F()}catch(a){console.error("[admin-widgets] Delete failed:",a)}}async function N(n,l){try{await j("update","POST",{id:n,config:l}),F()}catch(m){console.error("[admin-widgets] Update failed:",m)}}async function D(n,l,m){try{await j("score","POST",{id:n,team_index:l,delta:m}),F()}catch(a){console.error("[admin-widgets] Score update failed:",a)}}async function w(){let n=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:n,confirmLabel:ServerI18n.t("clearAll")}))try{await j("clear","POST",{}),F()}catch(m){console.error("[admin-widgets] Clear failed:",m)}}let x=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function R(n){let l=document.getElementById("widgets-list");if(l){if(l.innerHTML="",r(n),n.length===0){let m=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});m.dataset.emptyKind="widgets",l.appendChild(m);return}n.forEach(m=>{l.appendChild(A(m))})}}let S={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function b(n){return k("widgetPos_"+String(n||"top-left").replace("-","_"),n||"")}function I(n){let l=n.config||{},m="";n.type==="scoreboard"?m=(l.teams||[]).map(s=>`${s.name} ${s.score}`).join(" \xB7 "):n.type==="ticker"?(m=(l.messages||[])[0]||"",m&&(m=`\u300C${m}\u300D`)):n.type==="label"&&(m=l.text?`\u300C${l.text}\u300D`:"");let a=b(n.position);return m?`${m} \xB7 ${a}`:a}function O(n){return n==="scoreboard"?k("widgetScoreboard"):n==="ticker"?k("widgetTicker"):n==="label"?k("widgetLabel"):n}function A(n){let l=document.createElement("div");l.className="admin-widget-card",n.visible!==!1&&l.classList.add("is-on");let m=document.createElement("button");m.type="button",m.className="admin-widget-summary",m.setAttribute("aria-expanded","false"),m.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+y(S[n.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+y(O(n.type))+'</span><span class="admin-widget-summary-text">'+y(I(n))+"</span>"+(n.visible===!1?'<span class="admin-widget-summary-off">'+y(k("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',l.appendChild(m);let a=document.createElement("div");a.className="admin-widget-card-body",a.hidden=!0,m.addEventListener("click",()=>{a.hidden=!a.hidden,m.setAttribute("aria-expanded",a.hidden?"false":"true"),l.classList.toggle("is-open",!a.hidden)});let s=o(k("widgetPosition"),x,n.position,_=>N(n.id,{position:_}));a.appendChild(s),n.type==="scoreboard"?t(a,n):n.type==="ticker"?d(a,n):n.type==="label"&&e(a,n);let u=document.createElement("div");u.className="admin-widget-card-actions";let v=document.createElement("button");v.type="button",v.className="admin-ui-action admin-widget-card-action",v.textContent=n.visible?k("widgetHide"):k("widgetShow"),v.addEventListener("click",()=>N(n.id,{visible:!n.visible})),u.appendChild(v);let E=document.createElement("button");return E.type="button",E.className="admin-ui-action is-danger admin-widget-card-action",E.textContent=k("remove"),E.addEventListener("click",()=>p(n.id)),u.appendChild(E),a.appendChild(u),l.appendChild(a),l}let B={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function h(n,l){let m="top-left",a=1/0;for(let[s,[u,v]]of Object.entries(B)){let E=n-u/2,_=l-v/2,L=E*E+_*_;L<a&&(a=L,m=s)}return m}function c(n){let l=n.config||{};return n.type==="scoreboard"?(l.teams||[]).map(m=>`${m.name} ${m.score}`).join("  ")||k("widgetScoreboard"):n.type==="ticker"?(l.messages||[])[0]||k("widgetTicker"):n.type==="label"?l.text||k("widgetLabel"):n.type}function r(n){let l=document.querySelector("[data-ow-stage]");if(l){if(l.innerHTML="",!n.length){l.innerHTML='<span class="admin-ow-stage-empty">'+y(k("widgetsStageEmpty"))+"</span>";return}n.forEach(m=>{let a=document.createElement("div");a.className="admin-ow-box is-"+(m.position||"top-left"),m.visible===!1&&a.classList.add("is-off"),a.dataset.owBox=m.id,a.draggable=!0,a.textContent=c(m),a.title=O(m.type),a.addEventListener("dragend",s=>{let u=l.getBoundingClientRect();if(!u.width||!u.height)return;let v=(s.clientX-u.left)/u.width,E=(s.clientY-u.top)/u.height;if(v<0||v>1||E<0||E>1)return;let _=h(v,E);_!==m.position&&N(m.id,{position:_})}),l.appendChild(a)})}}function t(n,l){let m=l.config||{},a=i(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",m.title||"",s=>N(l.id,{title:s}));n.appendChild(a),(m.teams||[]).forEach((s,u)=>{let v=document.createElement("div");v.className="admin-widget-team";let E=document.createElement("input");E.type="color",E.value=s.color||"#38bdf8",E.className="admin-widget-team-color",E.addEventListener("change",()=>{let W=[...m.teams];W[u]={...W[u],color:E.value},N(l.id,{teams:W})}),v.appendChild(E);let _=document.createElement("input");_.type="text",_.value=s.name,_.className="admin-widget-input",_.addEventListener("change",()=>{let W=[...m.teams];W[u]={...W[u],name:_.value},N(l.id,{teams:W})}),v.appendChild(_);let L=document.createElement("span");L.className="admin-widget-team-score",L.textContent=s.score,v.appendChild(L);let M=document.createElement("button");M.type="button",M.className="admin-widget-step",M.textContent="\u2212",M.addEventListener("click",()=>D(l.id,u,-1)),v.appendChild(M);let P=document.createElement("button");P.type="button",P.className="admin-widget-step",P.textContent="+",P.addEventListener("click",()=>D(l.id,u,1)),v.appendChild(P),n.appendChild(v)})}function d(n,l){let m=l.config||{},a=document.createElement("div");a.className="admin-widget-row";let s=document.createElement("span");s.className="lbl",s.textContent=window.ServerI18n?.t?.("speed")||"SPEED",a.appendChild(s);let u=document.createElement("input");u.type="range",u.min="10",u.max="200",u.value=m.speed||60,u.style.flex="1",u.addEventListener("change",()=>{N(l.id,{speed:parseInt(u.value)})}),a.appendChild(u);let v=document.createElement("span");v.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",v.textContent=u.value,u.addEventListener("input",()=>{v.textContent=u.value}),a.appendChild(v),n.appendChild(a);let E=document.createElement("div");E.className="admin-widget-row",E.style.alignItems="flex-start";let _=document.createElement("span");_.className="lbl",_.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",E.appendChild(_);let L=document.createElement("textarea");L.className="admin-widget-textarea",L.value=(m.messages||[]).join(`
`),L.rows=3,L.placeholder=ServerI18n.t("widgetTickerPlaceholder"),L.addEventListener("change",()=>{let M=L.value.split(`
`).filter(P=>P.trim());N(l.id,{messages:M})}),E.appendChild(L),n.appendChild(E)}function e(n,l){let m=l.config||{};n.appendChild(i(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",m.text||"",a=>N(l.id,{text:a}))),n.appendChild(i(window.ServerI18n?.t?.("size")||"SIZE",String(m.fontSize||24),a=>N(l.id,{fontSize:parseInt(a)||24}),"number"))}function i(n,l,m,a="text"){let s=document.createElement("div");s.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=n,s.appendChild(u);let v=document.createElement("input");return v.type=a,v.value=l,v.className="admin-widget-input",v.addEventListener("change",()=>m(v.value)),s.appendChild(v),s}function o(n,l,m,a){let s=document.createElement("div");s.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=n,s.appendChild(u);let v=document.createElement("select");return v.className="admin-widget-select",l.forEach(E=>{let _=document.createElement("option");_.value=E,_.textContent=E,E===m&&(_.selected=!0),v.appendChild(_)}),v.addEventListener("change",()=>a(v.value)),s.appendChild(v),s}})})()});var Wt=ye(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let y=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","backup","integrations","plugins","webhooks","api-tokens","security","notifications","audience","firetoken","overlay","about"];function k(){let T=window.ADMIN_ROUTES||{},q={};return y.forEach(U=>{let J=T[U];J&&J.title&&(q[U]={title:J.title,kicker:J.kicker||U.toUpperCase()})}),q}let g=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation",section:"sec-blacklist"},{labelKey:"cmdkSettingFilters",route:"moderation",section:"sec-filters"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"security",tab:"security",section:"admin-security-v2-page"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{label:"Webhooks",route:"webhooks",section:"sec-webhooks"},{label:"Scheduler",route:"scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],f=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function C(){let T=document.querySelector('meta[name="csrf-token"]');return T&&T.content||""}function j(T,q){if(typeof window.csrfFetch=="function")return window.csrfFetch(T,q);let U=Object.assign({credentials:"same-origin"},q||{}),J=new Headers(q&&q.headers||{});return J.set("X-CSRF-Token",C()),U.headers=J,fetch(T,U)}function F(T,q){typeof window.showToast=="function"&&window.showToast(T,q!==!1)}let $=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>j("/effects/reload",{method:"POST"}).then(T=>F(T.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),T.ok)).catch(()=>F(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"broadcastBigPause",subKey:"adminNavOverlay",action:()=>window.AdminOverlayControl?.setDisplay(!1)},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>j("/admin/poll/reset",{method:"POST"}).then(T=>F(T.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),T.ok)).catch(()=>F(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return j("/admin/history/clear",{method:"POST"}).then(q=>F(q.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),q.ok)).catch(()=>F(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],p=null,N=null,D=null,w="",x=[],R=[],S=0,b=null,I=null,O=null,A=15e3;function B(T){return String(T??"").replace(/[&<>"']/g,q=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[q])}function h(T,q){if(!q)return 0;let U=String(T||"").toLowerCase(),J=q.toLowerCase(),K=0,G=0,te=0,ne=0;for(;K<U.length&&G<J.length;)U[K]===J[G]?(G++,ne++,te+=2+ne):ne=0,K++;return G<J.length?-1:(U.startsWith(J)&&(te+=10),te)}function c(){let T=document.createElement("div");T.className="admin-cmdk",T.setAttribute("hidden",""),T.setAttribute("aria-hidden","true"),T.innerHTML=`
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
    `,document.body.appendChild(T),p=T,N=T.querySelector(".admin-cmdk-input"),D=T.querySelector(".admin-cmdk-list"),T.addEventListener("click",q=>{q.target.matches("[data-cmdk-close]")&&P()}),N.addEventListener("input",q=>{w=q.target.value,E()}),N.addEventListener("keydown",r),D.addEventListener("click",q=>{let U=q.target.closest("[data-cmdk-idx]");U&&(S=parseInt(U.dataset.cmdkIdx,10)||0,d())})}function r(T){if(T.key==="Escape"){T.preventDefault(),P();return}if(T.key==="ArrowDown"){T.preventDefault(),t(1);return}if(T.key==="ArrowUp"){T.preventDefault(),t(-1);return}if(T.key==="Enter"){T.preventDefault(),d();return}}function t(T){if(!x.length)return;S=(S+T+x.length)%x.length,L();let q=D.querySelector(`[data-cmdk-idx="${S}"]`);q&&q.scrollIntoView({block:"nearest"})}function d(){let T=x[S];if(T){if(T.type==="route")window.location.hash="#/"+T.route,P();else if(T.type==="setting")T.tab&&(document.body.dataset.viewerConfigTab=T.tab),window.location.hash="#/"+T.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let q=document.getElementById(T.section);q&&(q.scrollIntoView({behavior:"smooth",block:"start"}),q.tagName==="DETAILS"&&!q.open&&(q.open=!0))},80),P();else if(T.type==="message")window.location.hash="#/messages",P();else if(T.type==="user")window.location.hash="#/system",setTimeout(()=>{let q=document.getElementById("sec-fingerprints");q&&q.scrollIntoView({behavior:"smooth",block:"start"})},80),P();else if(T.type==="theme")j("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:T.id})}).then(q=>{q.ok?(F(ServerI18n.t("cmdkThemeApplied",{name:T.label}),!0),O=null):F(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>F(ServerI18n.t("cmdkThemeApplyFailed"),!1)),P();else if(T.type==="action"){try{let q=T.action&&T.action();q&&typeof q.then=="function"&&q.catch(()=>{})}catch{}P()}}}let e={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",history:"adminNavGroupSystem",backup:"adminNavGroupSystem",security:"adminNavGroupSystem",integrations:"adminNavGroupSystem"};function i(T){return Object.entries(k()).map(([q,U])=>{let J=Math.max(h(U.title,T),h(q,T)),K=e[q];return{type:"route",route:q,label:U.title,sub:K?ServerI18n.t(K):"",icon:"\u25C7",score:J}}).filter(q=>q.score>=0)}function o(T){let q=k()[T];return q?q.title:""}function n(T){return g.map(q=>{let U=q.labelKey?ServerI18n.t(q.labelKey):q.label;return{type:"setting",route:q.route,tab:q.tab,section:q.section,label:o(q.route)?`${o(q.route)} \u203A ${U}`:U,sub:"",icon:"\u2699",score:h(U,T)}}).filter(q=>q.score>=0)}function l(T){return b?(b.records||[]).map(U=>{let J=U.text||U.message||"",K=U.nickname||U.user||"guest",G=(U.timestamp||"").slice(11,19)||"\u2014",te=(U.fingerprint||U.fp||"").slice(0,8);return{type:"message",label:`${J}  \xB7  @${K}`,sub:te?`${G} \xB7 fp:${te}`:G,icon:"\u{1F4AC}",score:Math.max(h(J,T),h(K,T))}}).filter(U=>U.score>=0):[]}function m(T){if(!O)return[];let q=O.records||[],U=O.active||"";return q.map(J=>{let K=J.label||J.display_name||J.name||"",G=J.description||ServerI18n.t("cmdkThemeDefaultDesc"),te=J.name===U;return{type:"theme",id:J.name,label:te?ServerI18n.t("cmdkThemeActive",{name:K}):K,sub:G,icon:"\u{1F3A8}",score:Math.max(h(K,T),h(J.name||"",T),h(G,T))}}).filter(J=>J.score>=0)}function a(T){return $.map(q=>{let U=ServerI18n.t(q.labelKey),J=q.subKey?ServerI18n.t(q.subKey):q.sub;return{type:"action",id:q.id,label:U,sub:J,icon:"\u26A1",action:q.action,score:Math.max(h(U,T),h(q.id,T),h(J,T))}}).filter(q=>q.score>=0)}function s(T){return I?(I.records||[]).map(U=>{let J=U.fingerprint||U.fp||U.id||"",K=U.ip||U.last_ip||"",G=U.nickname||"";return{type:"user",label:G?`@${G}  \xB7  ${J.slice(0,12)}\u2026`:`${J.slice(0,12)}\u2026`,sub:`user \xB7 ${K||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(h(J,T),h(K,T),h(G,T))}}).filter(U=>U.score>=0):[]}async function u(){let T=Date.now(),q=[];(!b||T-b.at>A)&&q.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{b={at:T,records:U&&U.records||[]}}).catch(()=>{b={at:T,records:[]}})),(!I||T-I.at>A)&&q.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{I={at:T,records:U&&U.records||[]}}).catch(()=>{I={at:T,records:[]}})),(!O||T-O.at>A)&&q.push(fetch("/admin/themes",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{O={at:T,records:U&&U.themes||[],active:U&&U.active||""}}).catch(()=>{O={at:T,records:[],active:""}})),q.length&&await Promise.all(q)}let v={actions:5,pages:5,messages:4};async function E(){await u();let T=w.trim(),q={action:a(T),route:i(T),setting:n(T),theme:m(T),message:l(T),user:s(T)};x=[],R=[],f.forEach(U=>{let J=U.types.reduce((K,G)=>K.concat(q[G]||[]),[]).sort((K,G)=>G.score-K.score).slice(0,v[U.id]||5);J.length&&(R.push({id:U.id,labelKey:U.labelKey,from:x.length,count:J.length}),x=x.concat(J))}),S=0,L()}function _(T){return T.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[T.type]||"\xB7"}function L(){if(!x.length){D.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let T=[];R.forEach(q=>{T.push(`<li class="admin-cmdk-group" role="presentation">${B(ServerI18n.t(q.labelKey))}</li>`);for(let U=q.from;U<q.from+q.count;U++){let J=x[U],K=U===S;T.push(`
        <li class="admin-cmdk-row ${K?"is-active":""}"
            data-cmdk-idx="${U}" role="option" aria-selected="${K}">
          <span class="admin-cmdk-icon" aria-hidden="true">${B(_(J))}</span>
          <span class="admin-cmdk-label">${B(J.label)}</span>
          <span class="admin-cmdk-sub">${B(J.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${K?"\u21B5":""}</span>
        </li>`)}}),D.innerHTML=T.join("")}function M(){p||c(),p.removeAttribute("hidden"),p.setAttribute("aria-hidden","false"),p.classList.add("is-open"),w="",N.value="",E(),setTimeout(()=>N.focus(),20)}function P(){p&&(p.setAttribute("hidden",""),p.setAttribute("aria-hidden","true"),p.classList.remove("is-open"))}function W(){return!!(p&&!p.hasAttribute("hidden"))}window.AdminCommandPalette={open:M,close:P,isOpen:W,toggle:()=>W()?P():M()}})()});var Gt=ye(()=>{(function(){"use strict";let y="sec-sessions-overview";var k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(c){return String(c).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},g={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function f(c){if(c=Number(c)||0,c<=0)return"\u2014";var r=Math.floor(c/3600),t=Math.floor(c%3600/60),d=c%60;return r>0?r+"h "+t+"m":t>0?t+"m":d+"s"}function C(c){if(!c)return"\u2014";try{var r=typeof c=="number"?new Date(c<1e12?c*1e3:c):new Date(c);return r.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(c)}}function j(){return'<div id="'+y+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function F(){return'<div class="admin-sessions-th"><span>'+k(ServerI18n.t("sessionsColSession"))+"</span><span>"+k(ServerI18n.t("sessionsColMessages"))+"</span><span>"+k(ServerI18n.t("sessionsColViewers"))+"</span><span>"+k(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function $(c){return c.name||ServerI18n.t("sessionsFallbackName",{id:(c.id||"").slice(0,12)})}function p(){var c=document.getElementById("admin-sessions-table-body");if(c){if(g.loading){window.AdminSkeletons?(c.innerHTML="",c.appendChild(window.AdminSkeletons.listRows({rows:5}))):c.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!g.sessions.length){c.innerHTML="";var r=window.AdminEmpty.render("sessions");r.dataset.emptyKind="sessions",c.appendChild(r);return}var t=g.sessions.map(function(d){var e=k(d.id||"");return'<div class="admin-sessions-tr'+(d.is_live?" is-live":"")+'" data-session-id="'+e+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(d.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+k($(d))+'<span class="admin-sessions-td-sub">'+k(C(d.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(d.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(d.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+k(f(d.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+e+'">'+k(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");c.innerHTML=F()+t}}var N=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function D(){var c=document.querySelector("[data-sessions-export]");if(c){if(!g.exportId){c.hidden=!0,c.innerHTML="";return}var r=g.sessions.find(function(d){return d.id===g.exportId});if(!r){g.exportId=null,c.hidden=!0,c.innerHTML="";return}var t=N.map(function(d){return'<button type="button" class="admin-sx-export__seg'+(d.id===g.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+d.id+'" aria-pressed="'+(d.id===g.exportFormat?"true":"false")+'">'+k(ServerI18n.t(d.labelKey))+"</button>"}).join("");c.hidden=!1,c.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+k(ServerI18n.t("sessionsExportTitle",{name:$(r)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+k(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+t+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(g.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+k(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+k(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+k(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+k(ServerI18n.t("sessionsDownloadBtn",{fmt:g.exportFormat.toUpperCase()}))+"</button></div>"}}function w(){if(g.exportId){var c="/admin/sessions/"+encodeURIComponent(g.exportId)+"/export?format="+encodeURIComponent(g.exportFormat)+"&include_pii="+(g.exportPii?"1":"0"),r=document.createElement("a");r.href=c,r.rel="noopener",document.body.appendChild(r),r.click(),r.remove()}}async function x(){var c=g.exportId;if(c)try{var r=await fetch("/admin/sessions/"+encodeURIComponent(c)+"/export?format=json",{credentials:"same-origin"});if(!r.ok)throw new Error("HTTP "+r.status);var t=await r.json(),d=(t.records||[]).slice(0,500);if(!d.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var e=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:d,speedMultiplier:1})});if(e.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!e.ok)throw new Error("HTTP "+e.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function R(){p(),D()}async function S(){g.loading=!0,p();try{var[c,r]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),t=[],d=[];if(c.ok){var e=await c.json();t=Array.isArray(e.sessions)?e.sessions:[],t.forEach(function(s){s._explicit=!0})}if(r.ok){var i=await r.json();d=Array.isArray(i.sessions)?i.sessions:[]}var o=t.slice(),n=new Set(t.map(function(s){return s.id}));d.forEach(function(s){n.has(s.id)||o.push(s)}),o.sort(function(s,u){var v=typeof s.started_at=="number"?s.started_at:Date.parse(s.started_at||0),E=typeof u.started_at=="number"?u.started_at:Date.parse(u.started_at||0);return E-v});try{var l=await fetch("/admin/session/current",{credentials:"same-origin"});if(l.ok){var m=await l.json();if(m.status==="live"){var a=Object.assign({},m,{id:m.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});o.unshift(a)}}}catch{}g.sessions=o,g.total=o.length}catch(s){console.error("[admin-sessions] fetch error:",s),g.sessions=[],g.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:s.message||""}),!1)}finally{g.loading=!1,R()}}function b(c){c&&(window.location.hash="#/session-detail?id="+encodeURIComponent(c))}function I(c){g.exportId=c,D();var r=document.querySelector("[data-sessions-export]");r&&r.scrollIntoView({block:"nearest"})}function O(){var c=document.getElementById(y);c&&(c.addEventListener("click",function(r){var t=r.target.closest("[data-sessions-export-open]");if(t){r.stopPropagation(),I(t.dataset.sessionsExportOpen);return}if(r.target.closest("[data-sessions-export-close]")){g.exportId=null,D();return}var d=r.target.closest("[data-sessions-export-fmt]");if(d){g.exportFormat=d.dataset.sessionsExportFmt,D();return}if(r.target.closest("[data-sessions-replay]")){x();return}if(r.target.closest("[data-sessions-download]")){w();return}var e=r.target.closest(".admin-sessions-tr");e&&b(e.dataset.sessionId||null)}),c.addEventListener("change",function(r){var t=r.target.closest("[data-sessions-export-pii]");t&&(g.exportPii=!!t.checked)}),c.addEventListener("keydown",function(r){if(!(r.key!=="Enter"&&r.key!==" ")){var t=r.target.closest(".admin-sessions-tr");t&&(r.preventDefault(),b(t.dataset.sessionId||null))}}))}function A(){var c=document.querySelector(".admin-dash-grid"),r=document.getElementById(y);if(!(!c||!r)){var t=c.dataset.activeLeaf||"dashboard";r.style.display=t==="sessions"?"":"none"}}function B(){var c=document.getElementById("settings-grid");!c||document.getElementById(y)||(c.insertAdjacentHTML("beforeend",j()),O(),S(),A())}function h(){if(window.DANMU_CONFIG?.session?.logged_in){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&B(),A()});c.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",A),document.addEventListener("admin-panel-rendered",function(){B(),A()}),B()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h()})()});var zt=ye(()=>{(function(){"use strict";let y="sec-session-detail-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(_){return String(_).replace(/[&<>"']/g,function(L){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[L]})},g={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},f=!1,C={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function j(){let _=window.location.hash||"",L=_.indexOf("?");if(L===-1)return null;let M=_.slice(L+1);return new URLSearchParams(M).get("id")||null}function F(_){if(!_)return"\u2014";try{let L=new Date(_);if(isNaN(L.getTime()))return String(_);let M=P=>String(P).padStart(2,"0");return`${L.getFullYear()}-${M(L.getMonth()+1)}-${M(L.getDate())} ${M(L.getHours())}:${M(L.getMinutes())}:${M(L.getSeconds())}`}catch{return String(_)}}function $(_){if(!_||_<0)return"\u2014";let L=Math.round(Number(_)),M=Math.floor(L/3600),P=Math.floor(L%3600/60),W=L%60;return M>0?`${M}h ${P}m ${W}s`:P>0?`${P}m ${W}s`:`${W}s`}function p(_,L){if(!_||!L)return"";try{let M=Math.max(0,Math.round((new Date(_)-new Date(L))/1e3)),P=Math.floor(M/60),W=M%60;return`+${String(P).padStart(2,"0")}:${String(W).padStart(2,"0")}`}catch{return""}}function N(_){let L=Number(_);return isNaN(L)?"\u2014":L.toLocaleString()}function D(_){if(!_)return"#64748b";let L=0;for(let P=0;P<_.length;P++)L=L*31+_.charCodeAt(P)>>>0;return`hsl(${L%360}, 60%, 60%)`}function w(){return`
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
    `}async function x(_){if(!_){A(ServerI18n.t("sessionDetailErrMissingId"));return}O(!0);try{let L=await fetch(`/admin/sessions/${encodeURIComponent(_)}`,{credentials:"same-origin"});if(L.status===404&&(L=await fetch(`/admin/session/archive/${encodeURIComponent(_)}`,{credentials:"same-origin"})),!L.ok)throw new Error(`HTTP ${L.status}`);let M=await L.json();g.session=M.session||null,g.records=M.records||[],g.density=M.density||[],O(!1),B(),R()}catch(L){O(!1),A(ServerI18n.t("sessionDetailErrLoadFailed",{msg:L.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function R(){if(g.sessionId)try{let _=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(g.sessionId)}`,{credentials:"same-origin"});if(!_.ok)return;let L=await _.json();g.annotations=Array.isArray(L.annotations)?L.annotations:[],e()}catch{}}function S(){let _=g.session;if(!_)return 0;if(_.duration_s)return Math.round(_.duration_s*1e3);if(_.duration)return Math.round(_.duration*1e3);let L=_.started_at||_.start_time,M=_.ended_at||_.end_time;if(L&&M)try{return Math.max(0,new Date(M)-new Date(L))}catch{return 0}return g.density&&g.density.length?g.density.length*60*1e3:0}function b(_){let L=Date.parse(_||0);if(Number.isNaN(L))return"\u2014";let M=new Date(L),P=W=>String(W).padStart(2,"0");return`${P(M.getHours())}:${P(M.getMinutes())}:${P(M.getSeconds())}`}function I(_){let L=Math.floor(_/1e3),M=Math.floor(L/3600),P=Math.floor(L%3600/60),W=L%60,T=q=>String(q).padStart(2,"0");return M>0?`${T(M)}:${T(P)}:${T(W)}`:`${T(P)}:${T(W)}`}function O(_){g.loading=_;let L=document.querySelector("[data-sd-loading]"),M=document.querySelector("[data-sd-error]");L&&(L.hidden=!_),M&&_&&(M.hidden=!0);let P=document.querySelector("[data-sd-timeline-wrap]");if(P&&window.AdminSkeletons){let W=P.querySelector("[data-sd-timeline-skel]");_?(P.hidden=!1,W||(W=window.AdminSkeletons.chart(),W.setAttribute("data-sd-timeline-skel","1"),P.appendChild(W))):W&&W.remove()}}function A(_){g.error=_;let L=document.querySelector("[data-sd-error]"),M=document.querySelector("[data-sd-error-msg]");L&&(L.hidden=!1),M&&(M.textContent=_),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(P){let W=document.querySelector(`[${P}]`);W&&(W.hidden=!0)})}function B(){h(),c(),r(),d(),e();let _=document.querySelector("[data-sd-error]");_&&(_.hidden=!0)}function h(){let _=g.session,L=document.querySelector("[data-sd-session-header]");if(!L)return;L.hidden=!1;let M=document.querySelector("[data-sd-session-id]"),P=document.querySelector("[data-sd-meta-start]"),W=document.querySelector("[data-sd-meta-duration]"),T=document.querySelector("[data-sd-title]"),q=_&&(_.session_id||_.id)||g.sessionId||"\u2014";M&&(M.textContent=q),P&&(P.textContent=F(_&&(_.started_at||_.start_time))),W&&(W.textContent=$(_&&(_.duration_s||_.duration))),T&&(T.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(q).slice(-8)}))}function c(){let _=g.session;if(!_)return;let L=document.querySelector("[data-sd-kpis]");L&&(L.hidden=!1);let M=function(q,U,J){let K=document.querySelector(`[data-sd-stat="${q}"]`);K&&(K.textContent=U);let G=document.querySelector(`[data-sd-stat-sub="${q}"]`);G&&(G.textContent=J||"")};M("msg_count",N(_.msg_count)),M("viewer_count",N(_.viewer_count));let P=Array.isArray(g.density)?g.density:[];if(P.length){let q=0,U=0;P.forEach(function(G,te){G>q&&(q=G,U=te)});let J=Date.parse(_.started_at||_.start_time||0),K="";if(!Number.isNaN(J)){let G=new Date(J+U*6e4),te=ne=>String(ne).padStart(2,"0");K=`${te(G.getHours())}:${te(G.getMinutes())}`}M("peak",N(q),K)}else M("peak","\u2014","");let W=Number(_.blocked_count)||0;M("blocked",N(W));let T=document.querySelector("[data-sd-blocked-btn]");T&&(T.textContent=ServerI18n.t("sessionDetailStatBlocked")+(W?" "+W:""),T.disabled=W===0)}function r(){let _=document.querySelector("[data-sd-timeline-wrap]"),L=document.querySelector("[data-sd-timeline]"),M=document.querySelector("[data-sd-timeline-axis]"),P=document.querySelector("[data-sd-peak-label]");if(!_||!L||!M)return;let W=g.density;if(!W||W.length===0){_.hidden=!0;return}_.hidden=!1;let T=Math.max(1,...W),q=0;W.forEach(function(ne,z){ne>W[q]&&(q=z)});let U=W.map(function(ne,z){let Q=Math.max(2,Math.round(ne/T*100));return`<div class="admin-sd-bar${z===q?" is-peak":""}" style="height:${Q}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:ne,minute:z+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:ne})}"></div>`}).join("");L.innerHTML=U;let J=g.session,K=F(J&&(J.started_at||J.start_time)).slice(11,16)||"00:00",G=F(J&&(J.ended_at||J.end_time)).slice(11,16)||"",te=W.length>2?`+${Math.round(W.length/2)}min`:"";M.innerHTML=`
      <span class="admin-sd-axis-label">${k(K)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${k(te)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${k(G)}</span>
    `,P&&(P.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:W[q],minute:q}))}function t(){let _=(g.msgQuery||"").trim().toLowerCase();return g.records.filter(function(L){let M=(L.status||"shown")==="blocked";return g.msgFilter==="blocked"&&!M?!1:_?String(L.text||"").toLowerCase().indexOf(_)!==-1||String(L.nickname||"").toLowerCase().indexOf(_)!==-1:!0})}function d(){let _=document.querySelector("[data-sd-msgs-wrap]"),L=document.querySelector("[data-sd-msgs-list]");if(!_||!L)return;if(!g.records.length){_.hidden=!0;return}_.hidden=!1;let M=t().slice(0,300);if(!M.length){L.innerHTML='<div class="admin-sd-msgs-empty">'+k(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}L.innerHTML=M.map(function(P){let W=(P.status||"shown")==="blocked",T=D(P.fingerprint||P.fp||""),q=b(P.timestamp||P.created_at),U=String(P.nickname||"").trim();return`
        <div class="admin-sd-msg-row${W?" is-blocked":""}">
          <span class="admin-sd-msg-time">${k(q)}</span>
          <span class="admin-sd-msg-dot" style="background:${T}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${k(P.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${k(ServerI18n.t("deliveryStatus_"+(P.status||"shown")))}
            ${P.delivery_reason?`<span class="admin-sd-msg-rule">${k(ServerI18n.t("deliveryReason_"+P.delivery_reason))}</span>`:""}
            ${W&&P.blockedBy?`<span class="admin-sd-msg-rule">${k(ServerI18n.t("sessionDetailBlockedBy",{rule:P.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${k(U||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function e(){let _=g.annotations||[],L=S(),M=document.querySelector("[data-sd-ann-count]");M&&(M.textContent=_.length?`${_.length} ANNOTATIONS`:"");let P=document.querySelector("[data-sd-ann-head]");P&&(P.textContent=_.length?`ANNOTATIONS \xB7 ${_.length}`:"ANNOTATIONS");let W=document.querySelector("[data-sd-ann-layer]");W&&(!L||_.length===0?W.innerHTML="":W.innerHTML=_.map(function(U){let J=C[U.label]||C.note,K=Math.min(100,Math.max(0,U.ts_ms/L*100)),G=U.id===g.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${J.shape}${G?" is-active":""}"
              data-sd-ann-marker="${k(U.id)}"
              style="left:${K.toFixed(2)}%;--ann-color:${J.color}"
              title="${k(J.label)} \xB7 ${I(U.ts_ms)}"
              aria-label="${k(J.label)} at ${I(U.ts_ms)}: ${k(U.note||"")}">
              ${J.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${G?`<span class="admin-sd-ann-tip"><span style="color:${J.color}">${J.icon}</span> ${k((U.note||"").slice(0,40))}${(U.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let T=document.querySelector("[data-sd-ann-legend]");T&&(T.innerHTML=Object.keys(C).map(function(U){let J=C[U],K=J.shape==="square"?"2px":J.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${J.color};border-radius:${K}"></span>
          <span class="admin-sd-ann-legend-label">${J.label}</span>
        </span>`}).join(""));let q=document.querySelector("[data-sd-ann-list]");if(q){if(_.length===0){q.innerHTML="";let U=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});U.dataset.emptyKind="session-annotations",q.appendChild(U);return}q.innerHTML=_.map(function(U){let J=C[U.label]||C.note,K=U.id===g.activeAnnId,te=(U.note||"").length>80?(U.note||"").slice(0,80)+"\u2026":U.note||"";return`
        <div class="admin-sd-ann-row${K?" is-active":""}" data-sd-ann-row="${k(U.id)}">
          <span class="admin-sd-ann-ts" style="color:${J.color}">${I(U.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${J.color}">${J.icon} ${J.label}</span>
          <span class="admin-sd-ann-note">${k(te)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${k(U.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function i(_){if(!g.sessionId)return;let L=window.HudConfirm;if(!L){let J=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:I(_)}),"");J!=null&&J.trim()&&o(_,"note",J.trim());return}let P="highlight",W="",T=document.createElement("div");T.className="admin-sd-ann-modal-body",T.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${I(_)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(C).map(function(J){let K=C[J];return`
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
      </div>`,T.addEventListener("click",function(J){let K=J.target.closest("[data-ann-label]");K&&(P=K.dataset.annLabel,T.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(G){G.classList.toggle("is-active",G===K)}))});let q=T.querySelector("[data-ann-modal-note]"),U=T.querySelector("[data-ann-modal-counter]");q.addEventListener("input",function(){W=q.value,U.textContent=`${W.length} / 280`}),setTimeout(function(){q&&q.focus()},50),L.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:T,width:460}).then(function(J){J&&o(_,P,q.value.trim())})}async function o(_,L,M){if(g.sessionId)try{let P=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:g.sessionId,ts_ms:Math.max(0,Math.round(_)),label:L||"note",note:M||""})});if(!P.ok)throw new Error(`HTTP ${P.status}`);let W=await P.json();W.annotation&&(g.annotations.push(W.annotation),g.annotations.sort(function(T,q){return T.ts_ms-q.ts_ms}),g.activeAnnId=W.annotation.id,e(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(P){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:P.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function n(_){if(_)try{let L=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(_)}`,{method:"DELETE",credentials:"same-origin"});if(!L.ok)throw new Error(`HTTP ${L.status}`);g.annotations=g.annotations.filter(function(M){return M.id!==_}),g.activeAnnId===_&&(g.activeAnnId=null),e(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(L){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:L.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function l(_){let L=document.querySelector("[data-sd-timeline-inner]"),M=document.querySelector("[data-sd-ann-hover]");if(!L||!M)return;let P=L.getBoundingClientRect();if(!P.width)return;let W=_.clientX-P.left,T=Math.min(1,Math.max(0,W/P.width)),q=S();if(!q){M.hidden=!0;return}let U=Math.round(T*q);g.hoverTsMs=U,M.hidden=!1,M.style.left=`${(T*100).toFixed(2)}%`,M.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:I(U)})}function m(){let _=document.querySelector("[data-sd-ann-hover]");_&&(_.hidden=!0),g.hoverTsMs=null}function a(_){if(_.target.closest("[data-sd-ann-marker]"))return;let L=document.querySelector("[data-sd-timeline-inner]");if(!L)return;let M=L.getBoundingClientRect();if(!M.width)return;let P=_.clientX-M.left,W=Math.min(1,Math.max(0,P/M.width)),T=S();T&&i(Math.round(W*T))}async function s(){if(g.sessionId)try{let _=g.records.slice(0,500);if(!_.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let L=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:_,speedMultiplier:1})});if(L.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!L.ok)throw new Error("HTTP "+L.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function u(_,L){if(_==="back")window.location.hash="#/history/sessions";else if(_==="retry")g.sessionId&&x(g.sessionId);else if(_==="export"){if(!g.sessionId)return;let M=document.createElement("a");M.href="/admin/sessions/"+encodeURIComponent(g.sessionId)+"/export?format=csv",M.rel="noopener",document.body.appendChild(M),M.click(),M.remove()}else if(_==="replay")s();else if(_==="add-annotation"){let M=S(),P=g.hoverTsMs!=null?g.hoverTsMs:Math.round(M/2);i(P)}}function v(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let L=j();if(!L){g.sessionId=null,A(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}g.sessionId=L,x(L)}function E(){let _=document.getElementById("settings-grid");if(!_)return;let L=document.getElementById(y);L||(_.insertAdjacentHTML("beforeend",w()),L=document.getElementById(y),e()),L&&L.dataset.sdBound!=="1"&&(L.dataset.sdBound="1",L.addEventListener("click",function(M){let P=M.target.closest("[data-sd-ann-del]");if(P){M.stopPropagation(),n(P.dataset.sdAnnDel);return}let W=M.target.closest("[data-sd-ann-marker]");if(W){M.stopPropagation(),g.activeAnnId=W.dataset.sdAnnMarker,e();let K=document.querySelector(`[data-sd-ann-row="${g.activeAnnId}"]`);K&&K.scrollIntoView&&K.scrollIntoView({block:"nearest",behavior:"smooth"});return}let T=M.target.closest("[data-sd-ann-row]");if(T){g.activeAnnId=T.dataset.sdAnnRow,e();return}if(M.target.closest("[data-sd-timeline-inner]")){a(M);return}let U=M.target.closest("[data-sd-action]");if(U){M.preventDefault(),u(U.dataset.sdAction,U);return}let J=M.target.closest("[data-sd-filter]");J&&(g.msgFilter=J.dataset.sdFilter,L.querySelectorAll("[data-sd-filter]").forEach(function(K){K.classList.toggle("is-active",K===J)}),d())}),L.addEventListener("input",function(M){let P=M.target.closest("[data-sd-search]");P&&(g.msgQuery=P.value||"",d())}),L.addEventListener("mousemove",function(M){M.target.closest("[data-sd-timeline-inner]")&&l(M)}),L.addEventListener("mouseleave",function(M){M.target.closest&&M.target.closest("[data-sd-timeline-inner]")&&m()},!0)),g.sessionId=j(),g.sessionId?x(g.sessionId):A(ServerI18n.t("sessionDetailErrNoSessionSelected")),f||(f=!0,window.addEventListener("hashchange",v))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&E()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let L=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(y)&&L.indexOf("/session-detail")!==-1&&E(),window.addEventListener("admin-route-changed",function(M){(M&&M.detail&&M.detail.route)==="session-detail"&&E()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&E()})})})()});var Vt=ye(()=>{(function(){"use strict";let y="sec-search-overview";var k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},g=20,f={query:"",scope:"session",blockedOnly:!1,who:"",shown:g,results:[],total:0,loading:!1,searched:!1},C=0;function j(){return'<div id="'+y+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+k(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+k(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+k(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+k(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+k(ServerI18n.t("searchWhoAria"))+'"><option value="">'+k(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+k(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+k(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function F(t){if(!t)return 200;for(var d=0,e=0;e<Math.min(t.length,6);e++)d=d*31+t.charCodeAt(e)&65535;return d%360}function $(t,d){if(!d||!t)return k(t||"");var e=k(t),i=k(d);try{var o=new RegExp("("+i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return e.replace(o,'<mark class="admin-search-hit">$1</mark>')}catch{return e}}function p(t){if(!t)return"\u2014";try{var d=new Date(t);return d.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return t}}function N(){var t=f.results;return f.blockedOnly&&(t=t.filter(function(d){return(d.status||"shown")==="blocked"})),f.who&&(t=t.filter(function(d){return(d.nickname||"")===f.who})),t}function D(){var t=document.getElementById("admin-search-count");if(t){if(!f.searched||!f.query.trim()){t.textContent="";return}t.textContent=ServerI18n.t("searchResultCount",{n:N().length})}}function w(){var t=document.querySelector("[data-search-who]");if(t){var d=[];f.results.forEach(function(i){var o=(i.nickname||"").trim();o&&d.indexOf(o)===-1&&d.push(o)}),d.sort();var e=f.who;t.innerHTML='<option value="">'+k(ServerI18n.t("searchWhoAnyone"))+"</option>"+d.map(function(i){return'<option value="'+k(i)+'"'+(i===e?" selected":"")+">"+k(i)+"</option>"}).join("")}}function x(){var t=document.getElementById("admin-search-results"),d=document.getElementById("admin-search-empty-state"),e=document.getElementById("admin-search-export-btn");if(t){t.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(a){a.remove()});var i=function(a){d&&(d.style.display="block",d.textContent=a),e&&(e.hidden=!0)};if(f.loading)return i(ServerI18n.t("searchSearching"));if(!f.searched)return i(ServerI18n.t("searchPromptStart"));var o=N();if(o.length===0)return i(ServerI18n.t("searchNoMatch"));d&&(d.style.display="none"),e&&(e.hidden=!1);var n=Math.min(o.length,f.shown),l=document.createDocumentFragment();if(o.slice(0,n).forEach(function(a){var s=document.createElement("div");s.className="admin-search-row",s.innerHTML='<span class="admin-search-row__ts">'+k(p(a.timestamp))+'</span><span class="admin-search-row__text">'+$(a.text||"",f.query)+'</span><span class="admin-search-row__nick">'+k((a.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+k(ServerI18n.t("deliveryStatus_"+(a.status||"shown")))+(a.delivery_reason?"<br>"+k(ServerI18n.t("deliveryReason_"+a.delivery_reason)):"")+"</span></span>",l.appendChild(s)}),t.appendChild(l),o.length>n){var m=document.createElement("button");m.type="button",m.className="admin-search-more",m.dataset.searchMore="1",m.textContent=ServerI18n.t("searchMoreLeft",{n:o.length-n}),t.appendChild(m)}}}function R(){D(),w(),x()}async function S(){var t=f.query.trim();if(!t){f.loading=!1,f.searched=!1,f.results=[],f.total=0,R();return}f.loading=!0,R();try{var d="/admin/search?q="+encodeURIComponent(t);if(f.scope==="session"){var e=await I();e&&(d+="&since="+encodeURIComponent(e))}var i=Date.now(),o=await fetch(d,{credentials:"same-origin"}),n=Date.now()-i;if(!o.ok)throw new Error("HTTP "+o.status);var l=await o.json();f.results=Array.isArray(l.results)?l.results:[],f.total=typeof l.total=="number"?l.total:f.results.length,f.shown=g}catch(m){console.error("[admin-search] fetch error:",m),f.results=[],f.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:m.message||""}),!1)}finally{f.loading=!1,f.searched=!0,R()}}var b=null;async function I(){if(b!==null)return b;try{var t=await fetch("/admin/session/current",{credentials:"same-origin"});if(t.ok){var d=await t.json();if(d.status==="live"&&d.started_at)return b=new Date(d.started_at*1e3).toISOString(),b}}catch{}return b="",""}function O(){clearTimeout(C),C=setTimeout(S,300)}function A(){if(f.results.length){var t=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];f.results.forEach(function(o){var n=[o.nickname||"",o.fingerprint||"",o.timestamp||"",o.status||"",o.text||"",o.delivery_reason||""].map(function(l){return'"'+String(l).replace(/"/g,'""')+'"'});t.push(n.join(","))});var d=new Blob(["\uFEFF"+t.join(`
`)],{type:"text/csv;charset=utf-8"}),e=URL.createObjectURL(d),i=document.createElement("a");i.href=e,i.download="danmu-search-"+(f.query||"export")+".csv",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(e)}}function B(){var t=document.getElementById(y);if(t){var d=document.getElementById("admin-search-input");d&&(d.addEventListener("input",function(){f.query=d.value,O()}),d.addEventListener("keydown",function(i){i.key==="Enter"&&(clearTimeout(C),f.query=d.value,S())})),t.addEventListener("click",function(i){var o=i.target.closest("[data-search-scope]");if(o){f.scope=o.dataset.searchScope,t.querySelectorAll("[data-search-scope]").forEach(function(l){l.classList.toggle("is-active",l===o)}),f.query.trim()&&O();return}var n=i.target.closest("[data-search-blocked]");if(n){f.blockedOnly=!f.blockedOnly,n.classList.toggle("is-active",f.blockedOnly),f.shown=g,R();return}if(i.target.closest("[data-search-more]")){f.shown+=g,x();return}}),t.addEventListener("change",function(i){var o=i.target.closest("[data-search-who]");o&&(f.who=o.value||"",f.shown=g,R())});var e=document.getElementById("admin-search-export-btn");e&&e.addEventListener("click",A)}}function h(){var t=document.querySelector(".admin-dash-grid"),d=document.getElementById(y);if(!(!t||!d)){var e=t.dataset.activeLeaf||"dashboard";d.style.display=e==="search"?"":"none"}}function c(){var t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("beforeend",j()),B(),h())}function r(){if(window.DANMU_CONFIG?.session?.logged_in){var t=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&c(),h()});t.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",h),document.addEventListener("admin-panel-rendered",function(){c(),h()}),c()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var Jt=ye(()=>{(function(){"use strict";let y="sec-api-tokens-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},g=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],f=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],C={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function j(a){if(!a)return"\u2014";try{let s=new Date(a);if(isNaN(s.getTime()))return String(a);let u=v=>String(v).padStart(2,"0");return`${s.getFullYear()}-${u(s.getMonth()+1)}-${u(s.getDate())}`}catch{return String(a)}}function F(a){if(!a)return null;try{let s=new Date(a);if(isNaN(s.getTime()))return null;let u=v=>String(v).padStart(2,"0");return`${s.getFullYear()}-${u(s.getMonth()+1)}-${u(s.getDate())} ${u(s.getHours())}:${u(s.getMinutes())}`}catch{return null}}function $(a){let s=Number(a);return isNaN(s)?"0":s.toLocaleString()}function p(a){if(!a||a.enabled===!1)return"inactive";if(!a.expires_at)return"active";try{let s=new Date(a.expires_at).getTime(),u=Date.now();if(s<u)return"expired";if(s-u<168*3600*1e3)return"expiring"}catch{}return"active"}function N(a){if(!a)return 1/0;try{return Math.floor((Date.now()-new Date(a).getTime())/864e5)}catch{return 1/0}}function D(a){return!a||!a.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':a.map(function(s){let u="admin-ui-pill admin-at-scope-badge";return s==="admin:*"?u+=" is-danger":s.startsWith("fire:")?u+=" is-warn":s.startsWith("read:stats")?u+=" is-cyan":u+=" is-success",`<span class="${u}">${k(s)}</span>`}).join(" ")}function w(a){let s="admin-ui-dot admin-at-dot";return a==="active"?s+=" is-success":a==="expiring"?s+=" is-warn":a==="expired"?s+=" is-danger":s+=" is-muted",`<span class="${s}" aria-hidden="true"></span>`}function x(){let a=g.map(function(u){let v=u.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",_=`admin-ui-pill admin-at-scope-badge is-${u.badge==="red"?"danger":u.badge==="amber"?"warn":u.badge==="green"?"success":u.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${k(u.id)}"
          >
          <span class="${_}">${k(u.badgeTxt)}</span>
          <span class="admin-at-scope-label">${k(ServerI18n.t(u.labelKey))}</span>
          ${v}
        </label>
      `}).join(""),s=f.map(function(u){let v=u.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${u.days!==null?String(u.days):"null"}" ${v} class="sr-only">
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
                    ${a}
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
    `}async function R(){O(!0);try{let a=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!a.ok)throw new Error(`HTTP ${a.status}`);let s=await a.json();C.tokens=s.tokens||s||[],B()}catch(a){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:a.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{O(!1)}}async function S(a){C.creating=!0,A(!0),d();try{let s=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!s.ok){let E=await s.json().catch(()=>({}));throw new Error(E.error||E.message||`HTTP ${s.status}`)}let u=await s.json(),v=u.token||u.raw_token||u.access_token||null;C.newTokenRaw=v,h(v),r(),await R(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(s){t(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:s.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:s.message||""}),!1)}finally{C.creating=!1,A(!1)}}async function b(a,s){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${k(s||a)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let v=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(a)}`,{method:"DELETE"});if(!v.ok){let E=await v.json().catch(()=>({}));throw new Error(E.error||E.message||`HTTP ${v.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await R()}catch(v){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:v.message||""}),!1)}}async function I(a,s){try{let u=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(a)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:s})});if(!u.ok){let v=await u.json().catch(()=>({}));throw new Error(v.error||v.message||`HTTP ${u.status}`)}window.showToast&&window.showToast(s?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await R()}catch(u){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:u.message||""}),!1)}}function O(a){let s=document.querySelector("[data-at-list-loading]");s&&(s.hidden=!a)}function A(a){let s=document.getElementById("adminAtSubmitBtn");s&&(s.disabled=a,s.textContent=a?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function B(){let a=C.tokens,s=document.querySelector("[data-at-empty]"),u=document.querySelector("[data-at-table-wrap]"),v=document.querySelector("[data-at-tbody]");if(!(!s||!u||!v)){if(!a||a.length===0){if(!s.firstElementChild&&window.AdminEmpty){let E=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});E.dataset.emptyKind="api-tokens",s.appendChild(E)}s.hidden=!1,u.hidden=!0;return}s.hidden=!0,u.hidden=!1,v.innerHTML=a.map(function(E){let _=p(E),L=w(_),M=E.scopes||E.scope||[],P=Array.isArray(M)?M:String(M).split(",").map(K=>K.trim()).filter(Boolean),T=N(E.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",q=_==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",U=_==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",J=E.last_used_at?`${F(E.last_used_at)||j(E.last_used_at)}<br><span class="admin-at-ip">${k(E.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${k(E.id||E.token_id||"")}">
          <td class="admin-at-td-label">
            ${L}
            <span class="admin-at-label-text">${k(E.label||E.name||"\u2014")}</span>
            ${T}${q}${U}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${k(E.prefix||E.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${D(P)}</div>
          </td>
          <td class="admin-at-td-used">${J}</td>
          <td class="admin-at-td-usage">${$(E.usage_count||E.use_count)}</td>
          <td class="admin-at-td-created">${j(E.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${k(E.id||E.token_id||"")}"
              data-token-enabled="${E.enabled===!1?"0":"1"}"
              title="${E.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${E.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${k(E.id||E.token_id||"")}"
              data-token-label="${k(E.label||E.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function h(a){let s=document.getElementById("adminAtSuccessBanner"),u=document.getElementById("adminAtTokenDisplay"),v=document.getElementById("adminAtCreateForm");s&&(s.hidden=!1),u&&a&&(u.value=a),v&&(v.style.opacity="0.5"),s&&s.scrollIntoView({behavior:"smooth",block:"nearest"})}function c(){let a=document.getElementById("adminAtSuccessBanner"),s=document.getElementById("adminAtCreateForm");a&&(a.hidden=!0),s&&(s.style.opacity=""),C.newTokenRaw=null}function r(){let a=document.getElementById("adminAtCreateForm");a&&a.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(v){v.classList.remove("is-active")});let s=document.querySelector("input[name='adminAtExpiry'][value='90']");if(s){s.checked=!0;let v=s.closest(".admin-at-expiry-btn");v&&v.classList.add("is-active")}let u=document.getElementById("adminAtAdminWarn");u&&(u.hidden=!0),d()}function t(a){let s=document.getElementById("adminAtFormError");s&&(s.hidden=!1,s.textContent=a)}function d(){let a=document.getElementById("adminAtFormError");a&&(a.hidden=!0,a.textContent="")}function e(){let a=document.getElementById("adminAtLabel"),s=a?a.value.trim():"",u=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(L){u.push(L.value)});let v=document.querySelector("input[name='adminAtExpiry']:checked"),E=v?v.value:"90",_=E==="null"?null:parseInt(E,10);return{label:s,scopes:u,expiry_days:_}}function i(a){return a.label?a.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!a.scopes||a.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function o(a){if(a.preventDefault(),C.creating)return;d();let s=e(),u=i(s);if(u){t(u);return}S(s)}function n(){let a=C.newTokenRaw;if(!a)return;let s=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(a).then(function(){s&&(s.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){s.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let u=document.getElementById("adminAtTokenDisplay");u&&(u.select(),document.execCommand("copy")),s&&(s.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){s.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function l(){let a=document.getElementById(y);if(!a)return;a.addEventListener("click",function(E){let _=E.target.closest("[data-at-action]");if(_){let M=_.dataset.atAction;if(M==="revoke"){let P=_.dataset.tokenId,W=_.dataset.tokenLabel;b(P,W)}else if(M==="toggle"){let P=_.dataset.tokenId,W=_.dataset.tokenEnabled==="1";I(P,!W)}else M==="copy-token"&&n();return}let L=E.target.closest(".admin-at-expiry-btn");L&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(M){M.classList.remove("is-active")}),L.classList.add("is-active"))});let s=document.getElementById("adminAtScope_admin__");s&&s.addEventListener("change",function(){let E=document.getElementById("adminAtAdminWarn");E&&(E.hidden=!s.checked)});let u=document.getElementById("adminAtCreateForm");u&&u.addEventListener("submit",o);let v=document.querySelector("input[name='adminAtExpiry'][value='90']");if(v){let E=v.closest(".admin-at-expiry-btn");E&&E.classList.add("is-active")}}function m(){let a=document.getElementById("settings-grid");!a||document.getElementById(y)||(a.insertAdjacentHTML("beforeend",x()),l(),R())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&m()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&m()})})()});var Yt=ye(()=>{(function(){"use strict";let y="sec-wcag-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(r){return String(r).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})};function g(r){let t=r.replace(/^#/,""),d=t.length===3?t.split("").map(function(e){return e+e}).join(""):t;return[parseInt(d.slice(0,2),16)/255,parseInt(d.slice(2,4),16)/255,parseInt(d.slice(4,6),16)/255]}function f(r){return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)}function C(r){let t=g(r);return .2126*f(t[0])+.7152*f(t[1])+.0722*f(t[2])}function j(r,t){let d=C(r),e=C(t),i=Math.max(d,e),o=Math.min(d,e);return(i+.05)/(o+.05)}function F(r){return r>=7?"AAA":r>=4.5?"AA":r>=3?"AA-large":"fail"}function $(r,t){let d=C(t),e=[],i=g(r);for(let o=.05;o<=.6&&e.length<3;o+=.05){let l="#"+i.map(function(a){return Math.min(1,a+o)}).map(function(a){return Math.round(a*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),m=j(l,t);m>=4.5&&e.push({hex:l,ratio:m})}return e}let p=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],N={fg:"#FB7185",bg:"#000000"},D="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",w={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function x(){let r=p.filter(function(e){return F(j(e.fg,e.bg))!=="fail"}).length,t=p.length-r,d=Math.round(r/p.length*100);return`
      <div id="${y}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${R("PASS AA+",r,ServerI18n.t("wcagStatPassLabel"))}
              ${R("BELOW AA",t,ServerI18n.t("wcagStatFailLabel"))}
              ${R("PAIRS",p.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${R("PASS RATE",d+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:d})}">
                <div class="admin-wcag-meter-fill" style="width:${d}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${D}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${p.map(function(e,i){return S(e,i)}).join("")}
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
      </div>`}function R(r,t,d){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${k(String(t))}</span>
        <span class="hud-stat-tile-label">${k(d)}</span>
      </div>`}function S(r,t){let d=j(r.fg,r.bg),e=F(d),i=w[e],o=ServerI18n.t(r.nameKey),n=i.labelKey?ServerI18n.t(i.labelKey):i.label,l=e==="fail"?ServerI18n.t("wcagWarnFail"):e==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${D}"
        data-wcag-pair-idx="${t}" role="button" tabindex="0"
        aria-label="${k(ServerI18n.t("wcagPairAriaLabel",{name:o,ratio:d.toFixed(2),level:n.slice(2)}))}">
        <span class="admin-wcag-pair-name">${k(o)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${k(r.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${k(r.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${k(r.fg)}">${k(r.fg)} / ${k(r.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${d.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${i.mod}">${n}</span>
        ${l?`<span class="admin-wcag-warn">\u26A0 ${l}</span>`:""}
      </div>`}function b(){let r=j(N.fg,N.bg),t=F(r),d=w[t],e=d.labelKey?ServerI18n.t(d.labelKey):d.label,i=$(N.fg,N.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${I(ServerI18n.t("wcagForegroundLabel"),N.fg,"fg")}
        ${I(ServerI18n.t("wcagBackgroundLabel"),N.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${k(N.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${k(N.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${k(N.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${k(N.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${r.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${d.mod}">${e}</span>
      </div>

      <div class="admin-wcag-levels">
        ${O(ServerI18n.t("wcagCheckAANormal"),r>=4.5)}
        ${O(ServerI18n.t("wcagCheckAALarge"),r>=3)}
        ${O(ServerI18n.t("wcagCheckAAANormal"),r>=7)}
        ${O(ServerI18n.t("wcagCheckAAALarge"),r>=4.5)}
      </div>

      ${i.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${i.map(function(o){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${k(o.hex)}"
                title="${k(ServerI18n.t("wcagSuggApplyTitle",{ratio:o.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${k(N.bg)};color:${k(o.hex)}">${k(o.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${o.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function I(r,t,d){let e="wcag-tester-"+d;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${e}">${k(r)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${k(t)}"></span>
          <input type="text" id="${e}" class="admin-ui-input" data-wcag-tester-${d}
            aria-label="${k(ServerI18n.t("wcagHexAria",{label:r}))}"
            value="${k(t)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function O(r,t){return`<div class="admin-wcag-level ${t?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${t?"\u2713":"\u2717"}</span>
      <span>${k(r)}</span>
    </div>`}function A(){let r=document.getElementById(y);r&&(r.addEventListener("click",function(t){let d=t.target.closest("[data-wcag-pair-idx]");if(d){B(d);return}let e=t.target.closest("[data-wcag-sugg]");e&&(N.fg=e.dataset.wcagSugg,h())}),r.addEventListener("keydown",function(t){if(t.key!=="Enter"&&t.key!==" "&&t.key!=="Spacebar")return;let d=t.target.closest("[data-wcag-pair-idx]");d&&(t.preventDefault(),B(d))}),r.addEventListener("input",function(t){let d=t.target.closest("[data-wcag-tester-fg]"),e=t.target.closest("[data-wcag-tester-bg]");d&&/^#[0-9A-Fa-f]{6}$/.test(d.value)&&(N.fg=d.value.toUpperCase(),h()),e&&/^#[0-9A-Fa-f]{6}$/.test(e.value)&&(N.bg=e.value.toUpperCase(),h())}))}function B(r){let t=p[parseInt(r.dataset.wcagPairIdx,10)];t&&(N.fg=t.fg,N.bg=t.bg,h())}function h(){let r=document.querySelector("[data-wcag-tester]");r&&(r.innerHTML=b())}function c(){let r=document.getElementById("settings-grid");!r||document.getElementById(y)||(r.insertAdjacentHTML("beforeend",x()),A())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&c()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&c()})})()});var Qt=ye(()=>{(function(){"use strict";let y="danmu.onboarding.done",k="admin-onboarding-root",j=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],F=0,$=!1;window.AdminOnboarding={start:x,isDone:function(){try{return!!localStorage.getItem(y)}catch{return!1}},reset:function(){try{localStorage.removeItem(y)}catch{}}};let p=new Set(["live","dashboard"]);function N(){if($||window.AdminOnboarding.isDone()||!p.has(D()))return;let r=()=>!!document.querySelector(".admin-session-banner-live");r()||setTimeout(()=>{$||window.AdminOnboarding.isDone()||r()||p.has(D())&&x()},1200)}function D(){let r=document.querySelector(".admin-dash-grid");return r&&r.dataset.activeRoute||"live"}function w(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&x()}function x(){$||($=!0,F=0,O())}function R(r){if(!$)return;$=!1,document.body.removeEventListener("click",b),document.removeEventListener("keydown",I),window.removeEventListener("resize",A);let t=document.getElementById(k);if(t&&t.remove(),r)try{localStorage.setItem(y,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function S(){F<j.length-1?(F++,A()):R(!0)}function b(r){let t=r.target.closest("[data-ob-action]");t&&(r.stopPropagation(),t.dataset.obAction==="next"?S():t.dataset.obAction==="skip"&&R(!1))}function I(r){$&&r.key==="Escape"&&(r.preventDefault(),R(!1))}function O(){let r=document.getElementById(k);r&&r.remove();let t=document.createElement("div");t.id=k,t.className="admin-ob-root",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","false"),t.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(t),document.body.addEventListener("click",b),document.addEventListener("keydown",I),window.addEventListener("resize",A),A()}function A(){let r=document.getElementById(k);if(!r)return;let t=j[F],d=j.length,e=h(t.target),i=window.innerWidth,o=window.innerHeight,n="";e?n='<div class="admin-ob-spot" style="left:'+(e.left-8)+"px;top:"+(e.top-8)+"px;width:"+(e.width+16)+"px;height:"+(e.height+16)+'px;"></div>':n='<div class="admin-ob-scrim"></div>';let l=(i-360)/2,m=o/2-110,a="none";if(e){let E=e.left+e.width/2;t.side==="top"?(l=E-360/2,m=e.top-16,a="bottom"):t.side==="right"?(l=e.right+16+8,m=e.top,a="left"):(l=E-360/2,m=e.bottom+16+8,a="top"),l=Math.max(16,Math.min(i-360-16,l))}let s=j.map(function(E,_){return'<span class="admin-ob-progress-item'+(_===F?" is-current":"")+'">'+(_+1)+" "+c(ServerI18n.t(E.labelKey))+"</span>"+(_<d-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");r.innerHTML=n+'<div class="admin-ob-bubble" data-arrow="'+a+'" style="left:'+l+"px;top:"+m+'px"><div class="admin-ob-count">'+(F+1)+" / "+d+'</div><div class="admin-ob-title">'+c(ServerI18n.t(t.titleKey))+'</div><div class="admin-ob-body">'+c(ServerI18n.t(t.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+c(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+c(ServerI18n.t(F===d-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+s+"</div></div>";let u=r.querySelector(".admin-ob-bubble");if(!u||!e)return;let v=u.offsetHeight;if(t.side==="top")u.style.top=Math.max(16,e.top-16-8-v)+"px";else if(m+v>o-16){let E=e.top-16-8-v;E>=16?(u.style.top=E+"px",u.setAttribute("data-arrow","bottom")):(u.style.top=Math.max(16,o-v-16)+"px",u.setAttribute("data-arrow","none"))}B(u,e)}function B(r,t){let d=r.getAttribute("data-arrow");if(d==="none")return;let e=r.getBoundingClientRect(),i=d==="top"||d==="bottom",o=i?t.left+t.width/2-e.left:t.top+t.height/2-e.top,n=i?e.width:e.height,l=Math.max(16,Math.min(n-32,o-8));r.style.setProperty("--ob-arrow",l+"px")}function h(r){if(!r)return null;let t=document.querySelector(r);if(!t)return null;let d=t.getBoundingClientRect();return d.width<8||d.height<8||d.bottom<0||d.top>window.innerHeight?null:d}function c(r){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(r):r==null?"":String(r).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",w),w(),window.addEventListener("hashchange",function(){p.has(D())&&setTimeout(N,600)}),setTimeout(N,800))})})()});var sn=ye(()=>{var Mi=we(Re()),Ni=we(Oe()),Pi=we(qe()),Ri=we(He()),Oi=we(je()),qi=we(Ue()),Hi=we(Ke()),ji=we(We()),Ui=we(Ge()),Ki=we(ze()),Wi=we(Ve()),Gi=we(Je()),zi=we(Ye()),Vi=we(Qe()),Ji=we(Xe()),Yi=we(Ze()),Qi=we(et()),Xi=we(tt()),Zi=we(nt()),es=we(at()),ts=we(it()),ns=we(st()),as=we(ot()),is=we(rt()),ss=we(dt()),os=we(lt()),rs=we(ct()),ds=we(ut()),ls=we(mt()),cs=we(pt()),us=we(vt()),ms=we(ft()),ps=we(ht()),vs=we(gt()),fs=we(yt()),hs=we(bt()),gs=we(wt()),ys=we(St()),bs=we(kt()),ws=we(It()),Ss=we(Tt()),ks=we(_t()),Is=we(Et()),Ts=we($t()),_s=we(xt()),Es=we(Lt()),$s=we(At()),xs=we(Ct()),Ls=we(Bt()),As=we(Ft()),Cs=we(Dt()),Bs=we(Mt()),Fs=we(Nt()),Ds=we(Pt()),Ms=we(Rt()),Ns=we(Ot()),Ps=we(qt()),Rs=we(Ht()),Os=we(jt()),qs=we(Ut()),Hs=we(Kt()),js=we(Wt()),Us=we(Gt()),Ks=we(zt()),Ws=we(Vt()),Gs=we(Jt()),zs=we(Yt()),Vs=we(Qt())});sn();})();
