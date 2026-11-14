/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var Xt=Object.create;var Pe=Object.defineProperty;var Zt=Object.getOwnPropertyDescriptor;var en=Object.getOwnPropertyNames;var tn=Object.getPrototypeOf,nn=Object.prototype.hasOwnProperty;var ye=(y,I)=>()=>{try{return I||y((I={exports:{}}).exports,I),I.exports}catch(h){throw I=0,h}};var an=(y,I,h,v)=>{if(I&&typeof I=="object"||typeof I=="function")for(let B of en(I))!nn.call(y,B)&&B!==h&&Pe(y,B,{get:()=>I[B],enumerable:!(v=Zt(I,B))||v.enumerable});return y};var we=(y,I,h)=>(h=y!=null?Xt(tn(y)):{},an(I||!y||!y.__esModule?Pe(h,"default",{value:y,enumerable:!0}):h,y));var Re=ye(()=>{(function(){"use strict";var y=4,I=2500,h=3e3,v=Object.create(null);function B(){return Date.now()}function j(w,b){return(b?"ok:":"err:")+w}function F(w,b){return"var("+w+", "+b+")"}function x(w){return w?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function m(w){for(var b=Array.prototype.slice.call(w.children);b.length>y;){var E=b.shift();E&&E.parentNode&&E.parentNode.removeChild(E)}}function N(w,b){w.remaining=b,w.startedAt=B(),w.timer=setTimeout(function(){L(w)},b)}function D(w){w.timer&&(clearTimeout(w.timer),w.timer=null,w.remaining=Math.max(600,w.remaining-(B()-w.startedAt)))}function S(w){w.timer||!w.el.parentNode||N(w,w.remaining)}function L(w){clearTimeout(w.timer),w.timer=null,w.key&&v[w.key]===w&&delete v[w.key];var b=w.el;!b||!b.parentNode||(b.style.opacity="0",b.style.transform="translateX(8px)",setTimeout(function(){b.parentNode&&b.parentNode.removeChild(b)},180))}function P(w,b){var E=document.getElementById("toast-container");if(E){b=b!==!1;var q=j(String(w),b),A=v[q];if(A&&A.el.parentNode&&B()-A.startedAt<I){A.count+=1,A.countEl&&(A.countEl.textContent="\xD7"+A.count,A.countEl.hidden=!1),D(A),S(A);return}var C=b?F("--color-ink-success","#639922"):F("--color-ink-error","#e24b4a"),f=F("--color-surface","#ffffff"),u=F("--color-text-primary","#1a1a1a"),d=F("--color-border-soft","rgba(0,0,0,.12)"),t=document.createElement("div");t.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+f,"color:"+u,"border:1px solid "+d,"border-left:3px solid "+C,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var r=document.createElement("span");r.style.cssText="display:inline-flex;color:"+C+";flex:0 0 auto",r.innerHTML=x(b);var n=document.createElement("span");n.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",n.textContent=w;var o=document.createElement("span");o.hidden=!0,o.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",t.appendChild(r),t.appendChild(n),t.appendChild(o),E.appendChild(t),m(E),requestAnimationFrame(function(){t.style.opacity="1",t.style.transform="translateX(0)"});var s={key:q,el:t,countEl:o,count:1,timer:null,remaining:h,startedAt:B()};v[q]=s,N(s,h),t.addEventListener("mouseenter",function(){D(s)}),t.addEventListener("mouseleave",function(){S(s)}),t.addEventListener("focusin",function(){D(s)}),t.addEventListener("focusout",function(){S(s)})}}window.showToast=P})()});var Oe=ye(()=>{(function(){"use strict";var y="admin-details-open-state";function I(){try{return JSON.parse(localStorage.getItem(y))||{}}catch{return{}}}function h(b){try{localStorage.setItem(y,JSON.stringify(b))}catch{}}var v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function B(b){return b==null?"":String(b).replace(/[&<>"']/g,function(E){return v[E]})}function j(){var b=document.querySelector("script[nonce]");return b&&b.nonce||""}function F(b,E){var q=j();return"<style"+(b?' id="'+B(b)+'"':"")+(q?' nonce="'+B(q)+'"':"")+">"+(E||"")+"</style>"}var x='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',m=[],N=null;function D(b){if(!b)return!1;for(var E=b;E&&E!==document.documentElement;E=E.parentElement)if(E.style&&E.style.display==="none")return!1;return!!(b.offsetParent||b.getClientRects().length)}function S(){var b=document.hidden;m.forEach(function(E){var q=typeof E.el=="function"?E.el():E.el,A=!b&&D(q);if(A&&!E.timer){if(E.immediate!==!1)try{E.tick()}catch{}E.timer=setInterval(E.tick,E.intervalMs)}else!A&&E.timer&&(clearInterval(E.timer),E.timer=0)})}function L(b){var E={el:b.el,intervalMs:b.intervalMs,tick:b.tick,immediate:b.immediate,timer:0};return m.push(E),N||(N=new MutationObserver(function(){S()}),N.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden"]}),window.addEventListener("hashchange",S),document.addEventListener("visibilitychange",S),document.addEventListener("admin-panel-rendered",S)),S(),function(){E.timer&&clearInterval(E.timer);var A=m.indexOf(E);A!==-1&&m.splice(A,1)}}function P(b){let E=document.createElement("textarea");E.value=b,E.setAttribute("readonly",""),E.style.position="fixed",E.style.opacity="0",document.body.appendChild(E),E.select();let q=!1;try{q=!!document.execCommand("copy")}catch{q=!1}return document.body.removeChild(E),q}function w(b,E){let q=f=>window.ServerI18n?window.ServerI18n.t(f):f,A=f=>(window.showToast&&window.showToast(f?E||q("sohCopied"):q("sohCopyFailed"),f),f);if(!b)return Promise.resolve(A(!1));let C=navigator.clipboard;return C&&typeof C.writeText=="function"?C.writeText(b).then(()=>A(!0),()=>A(P(b))):Promise.resolve(A(P(b)))}window.AdminUtils={copyText:w,DETAILS_STATE_KEY:y,loadDetailsState:I,saveDetailsState:h,escapeHtml:B,cspNonce:j,styleTag:F,closeIcon:x,pollWhileVisible:L}})()});var qe=ye(()=>{(function(){"use strict";function y(I,h,v,B){let j=I.querySelector("[data-route-breadcrumb]");if(!j)return;let F=Array.from(I.querySelectorAll(".admin-dash-nav-row[data-route]")),x=F.find(E=>E.dataset.route===h)||F.find(E=>E.dataset.route===v);if(!x){j.replaceChildren(),j.hidden=!0;return}let m="",N=x.previousElementSibling;for(;N;){if(N.classList.contains("admin-dash-nav-label")){m=(N.querySelector("[data-i18n]")||N).textContent.trim();break}N=N.previousElementSibling}let S=(x.querySelector("[data-i18n]")||x.querySelector("span:nth-child(2)")||x).textContent.trim(),L=B?I.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,P=L?(L.querySelector(".admin-tabs-btn-label")||L).textContent.trim():"",w=[m,S,P].filter(Boolean),b=document.createDocumentFragment();w.forEach((E,q)=>{if(q){let f=document.createElement("span");f.className="admin-dash-breadcrumb-sep",f.setAttribute("aria-hidden","true"),f.textContent="\u203A",b.appendChild(f)}let A=document.createElement("span"),C=q===w.length-1;A.className="admin-dash-breadcrumb-item"+(C?" is-current":""),C&&A.setAttribute("aria-current","page"),A.textContent=E,b.appendChild(A)}),j.replaceChildren(b),j.hidden=w.length===0}window.AdminBreadcrumb={render:y}})()});var He=ye(()=>{(function(y){"use strict";let I={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",sections:["sec-blacklist","sec-filters"]},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},integrations:{defaultTab:"webhooks",tabs:[{slug:"webhooks",labelKey:"tabExtWebhooks",en:"WEBHOOKS",section:"sec-webhooks"},{slug:"plugins",labelKey:"tabExtPlugins",en:"PLUGINS",sections:["sec-plugins","sec-extensions-overview"]},{slug:"api-tokens",labelKey:"tabExtApiKeys",en:"API KEYS",section:"sec-api-tokens-overview"},{slug:"scheduler",labelKey:"tabExtScheduler",en:"SCHEDULER",section:"sec-scheduler"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function h(S){return Array.isArray(S.sections)?S.sections:S.section?[S.section]:[]}function v(S){return!!I[S]}function B(S){return I[S]||null}let j={moderation:{filters:"blacklist",fingerprints:"bans"}};function F(S,L){let P=I[S];if(!P)return null;let w=q=>P.tabs.some(A=>A.slug===q),b=j[S]?.[L];if(b&&w(b))return b;if(L&&w(L))return L;let E=y.AdminRouter?.tabMemory?.get?.(S);return E&&w(E)?E:P.defaultTab}function x(S,L,P){let w=I[S];if(!w)return null;let b=document.createElement("div");return b.className="admin-tabs-strip",b.dataset.nav=S,b.setAttribute("role","tablist"),b.setAttribute("aria-label",S+" tabs"),w.tabs.forEach(E=>{let q=document.createElement("button");q.type="button",q.className="admin-tabs-btn"+(E.slug===L?" is-active":""),q.dataset.nav=S,q.dataset.tab=E.slug,q.setAttribute("role","tab"),q.setAttribute("aria-selected",E.slug===L?"true":"false");let A=document.createElement("span");A.className="admin-tabs-btn-label",A.textContent=E.labelKey?ServerI18n.t(E.labelKey):E.label,q.appendChild(A);let C=document.createElement("span");C.className="admin-tabs-btn-count",C.dataset.tabCount=E.slug,C.textContent=m[S]&&m[S][E.slug]?m[S][E.slug]:"",q.appendChild(C),q.addEventListener("click",()=>{typeof P?.onSelect=="function"&&P.onSelect(E.slug)}),b.appendChild(q)}),b}let m={};function N(S,L,P){if(!I[S])return;m[S]=m[S]||{},m[S][L]=P==null?"":String(P);let w=document.querySelector('.admin-tabs-strip[data-nav="'+S+'"] [data-tab-count="'+L+'"]');w&&(w.textContent=m[S][L])}function D(S,L,P){let w=I[S];!w||!P||w.tabs.forEach(b=>{let E=b.slug===L;h(b).forEach(q=>{let A=P.querySelector("#"+q);A&&(A.style.display=E?"":"none")})})}y.AdminTabs={hasTabsFor:v,getConfig:B,resolveActiveTab:F,renderTabStrip:x,applyTabSectionVisibility:D,setTabCount:N}})(window)});var je=ye(()=>{(function(y,I){"use strict";let h="data-quick-action-host",v="admin-quick-action-bar";function B(N){if(N?.host instanceof HTMLElement)return N.host;let D=I.querySelector(".admin-dash-main");if(!D)return I.body;let S=D.querySelector(`[${h}]`);if(!S){S=I.createElement("div"),S.setAttribute(h,"");let L=D.querySelector(".admin-dash-topbar"),w=D.querySelector("[data-admin-tabs-host]")||L;w&&w.parentNode?w.insertAdjacentElement("afterend",S):D.prepend(S)}return S}function j(N,D){typeof y.showToast=="function"&&y.showToast(N,D!==!1)}function F({label:N,undoLabel:D,onUndo:S,windowMs:L}){let P=B(),w=P.querySelector("."+v);w&&w.remove();let b=I.createElement("div");b.className=v,b.setAttribute("role","status"),b.setAttribute("aria-live","polite");let E=I.createElement("span");E.className=v+"-text",E.textContent="\u2713 "+N,b.appendChild(E);let q=I.createElement("button");q.type="button",q.className=v+"-undo",q.textContent="\u21B6 "+(D||ServerI18n.t("qaUndoLabel")),b.appendChild(q);let A=()=>{b.classList.add("is-leaving"),setTimeout(()=>b.remove(),200)},C=setTimeout(A,L||5e3);return q.addEventListener("click",async()=>{clearTimeout(C),q.disabled=!0,q.textContent=ServerI18n.t("qaUndoing");try{await S(),j(ServerI18n.t("qaUndone"),!0)}catch(f){j(ServerI18n.t("qaUndoFailed",{msg:f?.message||String(f)}),!1)}finally{A()}}),P.appendChild(b),requestAnimationFrame(()=>b.classList.add("is-entering")),b}function x(N){if(!N||typeof N!="object")return;let D=N.label||ServerI18n.t("qaDone");N.toast!==!1&&j(D,!0),N.undo&&typeof N.undo.run=="function"&&F({label:D,undoLabel:N.undo.label,onUndo:N.undo.run,windowMs:N.undo.window})}function m(){I.querySelectorAll("."+v).forEach(N=>N.remove())}y.AdminQuickAction={fire:x,dismissAll:m}})(window,document)});var Ue=ye(()=>{(function(){"use strict";let y="admin-hud-modal-root",I=null,h=null,v='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function B(){let m=document.getElementById(y);return m?Array.prototype.slice.call(m.querySelectorAll(v)).filter(N=>N.offsetParent!==null||N===document.activeElement):[]}function j(m){let N=document.getElementById(y);if(N&&N.remove(),I&&(I(m),I=null),document.removeEventListener("keydown",F),h&&typeof h.focus=="function")try{h.focus()}catch{}h=null}function F(m){if(m.key==="Escape"){m.preventDefault(),j(!1);return}if(m.key==="Tab"){let N=B();if(!N.length){m.preventDefault();return}let D=N[0],S=N[N.length-1],L=document.activeElement;m.shiftKey?(L===D||!N.includes(L))&&(m.preventDefault(),S.focus()):(L===S||!N.includes(L))&&(m.preventDefault(),D.focus())}}function x(m){return new Promise(N=>{I&&j(!1),I=N,h=document.activeElement;let{icon:D="\u26A0",title:S=ServerI18n.t("hudConfirmTitle"),subtitle:L="",severity:P="warn",body:w="",titleText:b,bodyText:E,confirmLabel:q=ServerI18n.t("hudConfirmLabel"),cancelLabel:A=ServerI18n.t("cancel"),width:C=480}=m||{},f=document.createElement("div");f.id=y,f.className=`admin-hud-modal admin-hud-modal--${P}`,f.setAttribute("role","dialog"),f.setAttribute("aria-modal","true"),f.setAttribute("aria-labelledby","admin-hud-modal-title");let u=L?`<div class="admin-hud-modal__subtitle">${L}</div>`:"",d=typeof w=="string"?w:"",t=typeof w!="string"&&w&&w.nodeType;if(f.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${C}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${D}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${S}</div>
              ${u}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${d}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${A}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${q}</button>
          </div>
        </div>`,b!=null){let n=f.querySelector(".admin-hud-modal__title");n&&(n.textContent=String(b))}if(E!=null){let n=f.querySelector("[data-modal-body]");n&&(n.textContent=String(E))}if(t){let n=f.querySelector("[data-modal-body]");n.innerHTML="",n.appendChild(w)}f.addEventListener("click",function(n){let o=n.target.closest("[data-modal-action]");o&&(n.stopPropagation(),j(o.dataset.modalAction==="confirm"))}),document.body.appendChild(f),document.addEventListener("keydown",F);let r=P==="danger"?"cancel":"confirm";requestAnimationFrame(()=>{f.querySelector(`.admin-hud-modal__btn--${r}`)?.focus({focusVisible:!0})})})}window.HudConfirm={open:x}})()});var Ke=ye(()=>{(function(){"use strict";var y=8,I=30;function h(P,w){return window.ServerI18n?window.ServerI18n.t(P,w):P}function v(P,w){return P?P.length>w?P.slice(0,w)+"\u2026":P:""}function B(P){return h(P==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function j(P,w){return P==="keyword"?v(w,I):w.slice(0,y)}async function F(P,w,b){if(!w)return{ok:!1,error:"empty-value"};try{var E={type:P==="keyword"?"keyword":"fingerprint",value:w};b&&(E.reason=b);var q=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)});return q.ok?{ok:!0}:{ok:!1,error:"HTTP "+q.status}}catch(A){return{ok:!1,error:A&&A.message||"network"}}}async function x(P,w,b){if(!P)return{ok:!1,error:"empty-fingerprint"};var E=parseInt(w||0,10)||0;try{var q=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:P,duration_s:E,reason:b||"",kind:"ban"})});return q.ok?{ok:!0}:{ok:!1,error:"HTTP "+q.status}}catch(A){return{ok:!1,error:A&&A.message||"network"}}}async function m(P){if(!P)return{ok:!1,error:"empty-message-id"};try{var w=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:P})});return w.ok?{ok:!0}:{ok:!1,error:"HTTP "+w.status}}catch(b){return{ok:!1,error:b&&b.message||"network"}}}function N(P,w){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:h("lfBlockTitle"),subtitle:h("cfmSubBlockFuture"),severity:"danger",bodyText:h("blockConfirm").replace("{label}",B(P)).replace("{display}",j(P,w)),confirmLabel:h("lfBlockTitle")}):(window.showToast&&window.showToast(h("blockFailed"),!1),Promise.resolve(!1))}function D(P,w,b){window.showToast&&window.showToast(P?h(w,b||{}):h("blockFailed"),!!P)}async function S(P,w){if(!P||(w=w||{},!w.skipConfirm&&!await N("keyword",P)))return!1;var b=await F("keyword",P);return D(b.ok,"blockFallback",{label:B("keyword"),display:j("keyword",P)}),b.ok}async function L(P,w){if(!P||(w=w||{},!w.skipConfirm&&!await N("fingerprint",P)))return!1;var b=await F("fingerprint",P,w.reason);return D(b.ok,"blockFallback",{label:B("fingerprint"),display:j("fingerprint",P)}),b.ok}window.AdminModeration={callBlock:F,banFingerprint:x,recall:m,blockKeyword:S,blockFingerprint:L}})()});var We=ye(()=>{(function(){"use strict";function I(x){let m=document.createElement("div");return m.className="admin-skel-slow",m.hidden=!0,m.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",x.appendChild(m),setTimeout(function(){m.isConnected&&(m.hidden=!1)},3e3),x}function h(x,m){let N=document.createElement("div");if(N.className="admin-skel "+(x||""),m)for(let D in m)N.style[D]=m[D];return N}function v({rows:x=8}={}){let m=document.createElement("div");m.className="admin-skel-card admin-skel-list";let N=document.createElement("div");N.className="admin-skel-list__head",[60,80,140,200,80].forEach(D=>{N.appendChild(h("admin-skel-bar",{width:D+"px",height:"10px"}))}),m.appendChild(N);for(let D=0;D<x;D++){let S=document.createElement("div");S.className="admin-skel-list__row",S.appendChild(h("admin-skel-circle",{width:"24px",height:"24px"}));let L=document.createElement("div");L.className="admin-skel-list__col",L.appendChild(h("admin-skel-bar",{width:50+D*13%40+"%",height:"10px"})),L.appendChild(h("admin-skel-bar",{width:30+D*7%30+"%",height:"8px"})),S.appendChild(L),S.appendChild(h("admin-skel-bar",{width:"60px",height:"10px"})),m.appendChild(S)}return I(m)}function B({cols:x=4}={}){let m=document.createElement("div");m.className="admin-skel-stats",m.style.gridTemplateColumns=`repeat(${x}, 1fr)`;for(let N=0;N<x;N++){let D=document.createElement("div");D.className="admin-skel-card admin-skel-tile",D.appendChild(h("admin-skel-bar",{width:"60px",height:"8px"})),D.appendChild(h("admin-skel-bar",{width:"80px",height:"28px"})),D.appendChild(h("admin-skel-bar",{width:"100%",height:"18px"})),D.appendChild(h("admin-skel-bar",{width:"90px",height:"8px"})),m.appendChild(D)}return I(m)}function j(){let x=document.createElement("div");x.className="admin-skel-card admin-skel-chart";let m=document.createElement("div");m.className="admin-skel-chart__head",m.appendChild(h("admin-skel-bar",{width:"120px",height:"10px"}));let N=document.createElement("span");N.style.flex="1",m.appendChild(N),m.appendChild(h("admin-skel-bar",{width:"80px",height:"10px"})),x.appendChild(m);let D=document.createElement("div");D.className="admin-skel-chart__body";let S=document.createElement("div");S.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>S.appendChild(h("admin-skel-bar",{width:"24px",height:"6px"}))),D.appendChild(S);let L=document.createElement("div");return L.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(w=>L.appendChild(h("admin-skel-bar admin-skel-chart__bar",{height:w+"%"}))),D.appendChild(L),x.appendChild(D),I(x)}function F(x,m){let N={listRows:v,statsTiles:B,chart:j}[x];return N?N(m||{}).outerHTML:""}window.AdminSkeletons={listRows:v,statsTiles:B,chart:j,html:F}})()});var Ge=ye(()=>{(function(){"use strict";let y={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},I={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:y.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:y.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:y.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:y.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:y.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:y.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:y.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:y.cyan}};function h(B){let{icon:j="\xB7",title:F="",desc:x="",accent:m=y.cyan,ctaAccent:N,actionLabel:D,action:S,extra:L}=B||{},P=document.createElement("div");P.className="admin-empty",P.dataset.empty="1",P.style.setProperty("--admin-empty-accent",m),N&&P.style.setProperty("--admin-empty-cta",N);let w=document.createElement("div");if(w.className="admin-empty__icon",w.textContent=j,P.appendChild(w),F){let b=document.createElement("div");b.className="admin-empty__title",b.textContent=F,P.appendChild(b)}if(x){let b=document.createElement("div");b.className="admin-empty__desc",b.textContent=x,P.appendChild(b)}if(D){let b=document.createElement("button");b.type="button",b.className="admin-empty__btn",b.textContent=D,typeof S=="function"&&b.addEventListener("click",S),P.appendChild(b)}if(L){let b=document.createElement("div");b.className="admin-empty__extra",typeof L=="string"?b.innerHTML=L:b.appendChild(L),P.appendChild(b)}return P}function v(B){let j=I[B];if(!j)return h({title:ServerI18n.t("emptyNoData"),desc:""});let F=Object.assign({},j,{title:j.titleKey?ServerI18n.t(j.titleKey):j.title,desc:j.descKey?ServerI18n.t(j.descKey):j.desc,actionLabel:j.actionLabelKey?ServerI18n.t(j.actionLabelKey):j.actionLabel});return h(F)}window.AdminEmpty={render:v,renderCustom:h,PRESETS:I}})()});var ze=ye(()=>{(function(){"use strict";var y=8;function I(F){return F?String(F).slice(0,y):""}function h(F){if(!F||typeof F!="object")return{nickname:"",fp:"",ip:""};var x=F.fingerprint||F.fp||F.hash||"",m=F.clientIp||F.client_ip||F.ip||"",N=F.nickname||F.nick||"";return{nickname:String(N||""),fp:String(x||""),ip:String(m||"")}}function v(F){if(!F||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var x=new TextEncoder().encode(String(F));return window.crypto.subtle.digest("SHA-256",x).then(function(m){var N=Array.from(new Uint8Array(m));return N.map(function(D){return D.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function B(F){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var x=document.getElementById("sec-fingerprints");if(x&&!x.open&&(x.open=!0),x)try{x.scrollIntoView({behavior:"smooth",block:"start"})}catch{}v(F).then(function(m){if(m)var N=0,D=setInterval(function(){N+=1;var S=document.querySelector('[data-fp-hash="'+m+'"]');if(S){clearInterval(D),S.classList.add("admin-identity-flash"),setTimeout(function(){S.classList.remove("admin-identity-flash")},2e3);try{S.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else N>12&&clearInterval(D)},250)})}function j(F){F=F||{};var x=F.nickname||"",m=F.fp||"",N=F.ip||"",D=!!F.compact,S=typeof F.onNicknameClick=="function"?F.onNicknameClick:null,L=typeof F.onFpClick=="function"?F.onFpClick:B,P=document.createElement("span");P.className="admin-identity-row";var w;if(S?(w=document.createElement("button"),w.type="button",w.className="admin-identity-nick is-clickable",w.addEventListener("click",function(f){f.stopPropagation(),S(x)})):(w=document.createElement("span"),w.className="admin-identity-nick"),x)w.textContent="@"+x;else{var b="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var E=ServerI18n.t("anonymousPlaceholder");E&&E!=="anonymousPlaceholder"&&(b=E)}}catch{}w.textContent="@"+b,w.classList.add("is-guest")}if(x&&(w.title=x),P.appendChild(w),m){var q;if(L?(q=document.createElement("button"),q.type="button",q.className="admin-identity-fp is-clickable",q.addEventListener("click",function(f){f.stopPropagation(),L(m)})):(q=document.createElement("span"),q.className="admin-identity-fp"),m==="new"){var A=document.createElement("span");A.className="admin-identity-dot",q.appendChild(A),q.appendChild(document.createTextNode("fp:new"))}else q.textContent="fp:"+I(m);q.title=m,P.appendChild(q)}if(N&&!D){var C=document.createElement("span");C.className="admin-identity-ip",C.textContent=N,C.title=N,P.appendChild(C)}return P}window.AdminIdentity={render:j,parse:h,focusFingerprint:B,hashFp:v,FP_DISPLAY_LEN:y}})()});var Ve=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function I(r,n){return window.csrfFetch(r,n)}function h(r,n){return window.showToast(r,n)}let v="default",B=[],j={};function F(){let r=document.getElementById("themesList");r&&window.AdminSkeletons&&(r.innerHTML="",r.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function x(){F();try{let r=await I("/admin/themes");if(!r.ok)return;let n=await r.json();v=n.active||"default",B=n.themes||[],j=n.overrides||{},P(B,v),E()}catch(r){console.warn("[Themes] Failed to fetch themes:",r)}}var m="\u5C0F\u660E",N="\u8B1B\u5F97\u597D\uFF01+1";function D(r,n){var o=String(r||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(o)?o:n}function S(r){var n=r.styles||{},o=["color:"+D(n.color,"#ffffff")];if(n.textStroke){var s=Math.max(0,Math.min(6,Number(n.strokeWidth)||0));o.push("-webkit-text-stroke:"+s+"px "+D(n.strokeColor,"#000000")),o.push("paint-order:stroke fill")}if(n.textShadow){var e=Math.max(0,Math.min(40,Number(n.shadowBlur)||0));o.push("text-shadow:0 0 "+e+"px "+D(n.color,"#ffffff"))}var l=r.font&&r.font.family;return l&&/^[\w\s-]{1,40}$/.test(l)&&o.push("font-family:'"+l+"', var(--font-sans)"),r.font&&Number(r.font.weight)&&o.push("font-weight:"+Math.max(100,Math.min(900,Number(r.font.weight)))),o.join(";")}function L(r){var n=r.bg&&r.bg.gradient;return n&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(n).trim())?"background:"+String(n).trim():""}function P(r,n){let o=document.getElementById("themesList");if(o){if(o.innerHTML="",r.length===0){o.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}r.forEach(s=>{let e=s.name===n,l=y(ServerI18n.t("theme_"+s.name)!=="theme_"+s.name?ServerI18n.t("theme_"+s.name):s.label||s.name),g=document.createElement("div");g.className=`theme-pack-card${e?" is-active":""}`,g.innerHTML=`
        <div class="theme-pack-name">${l}</div>
        <div class="theme-pack-sample" style="${y(L(s))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${y(S(s))}">
            <span class="theme-pack-sample-nick">${y(m)}</span>
            ${y(N)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${s.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${y(s.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${e?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${y(s.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,o.appendChild(g)}),o.querySelectorAll(".theme-delete-btn").forEach(s=>{s.addEventListener("click",async()=>{let e=s.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let g=await I("/admin/themes/"+encodeURIComponent(e),{method:"DELETE"});if(!g.ok)throw new Error("HTTP "+g.status);h(ServerI18n.t("themeDeleted"),!0),x()}catch{h(ServerI18n.t("themesDeleteFailed"),!1)}})}),o.querySelectorAll(".theme-activate-btn").forEach(s=>{s.addEventListener("click",async()=>{let e=s.dataset.theme;try{let l=await I("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e})});if(l.ok)h(ServerI18n.t("themeActivated"),!0),v=e,P(r,e),E();else{let g=await l.json().catch(()=>({}));h(g.error||ServerI18n.t("setThemeFailed"),!1)}}catch{h(ServerI18n.t("setThemeFailed"),!1)}})})}}function w(){return B.find(r=>r.name===v)||null}function b(r,n){let o=j[v]||{};if(o[r])return o[r];let s=n&&n.styles||{};return r==="stroke"?s.textStroke?Number(s.strokeWidth)>=3?"thick":"thin":"none":s.textShadow?Number(s.shadowBlur)>=10?"strong":"soft":"none"}function E(){let r=document.getElementById("themeDetail"),n=document.getElementById("themeDetailLabel");if(!r||!n)return;let o=w();if(!o)return;let s=ServerI18n.t("theme_"+o.name)!=="theme_"+o.name?ServerI18n.t("theme_"+o.name):o.label||o.name;n.textContent=ServerI18n.t("themeDetailGroup",{name:s}),["stroke","shadow"].forEach(l=>{let g=b(l,o);r.querySelectorAll(`[data-theme-seg="${l}"] [data-theme-opt]`).forEach(a=>{let i=a.getAttribute("data-theme-opt")===g;a.classList.toggle("is-active",i),a.setAttribute("aria-pressed",i?"true":"false")})});let e=r.querySelector('[data-theme-ov="color"]');if(e){let l=D((o.styles||{}).color,"#ffffff");e.value=/^#[0-9a-fA-F]{6}$/.test(l)?l:"#ffffff"}A(o),C(o)}var q=null;async function A(r){let n=document.getElementById("themeOvFont");if(!n)return;if(!q)try{let e=await fetch("/fonts",{credentials:"same-origin"});q=e.ok?(await e.json()).fonts||[]:[]}catch{q=[]}let s=(j[v]||{}).font_family||"";n.innerHTML=`<option value="">${y(ServerI18n.t("themeDetailFontInherit"))}</option>`+q.map(e=>{let l=String(e.name||e);return`<option value="${y(l)}"${l===s?" selected":""}>${y(l)}</option>`}).join("")}function C(r){let n=document.querySelector("[data-theme-preview-line]");n&&n.setAttribute("style",S(r))}async function f(r){try{let n=await I("/admin/themes/"+encodeURIComponent(v)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!n.ok)throw new Error("HTTP "+n.status);h(ServerI18n.t("themeDetailSaved"),!0),await x()}catch{h(ServerI18n.t("themeDetailSaveFailed"),!1)}}function u(){let r=document.getElementById("themeDetail");r&&(r.addEventListener("click",n=>{let o=n.target.closest("[data-theme-opt]");if(!o)return;let s=o.closest("[data-theme-seg]");s&&f({[s.getAttribute("data-theme-seg")]:o.getAttribute("data-theme-opt")})}),r.addEventListener("change",n=>{let o=n.target.closest("[data-theme-ov]");o&&f({[o.getAttribute("data-theme-ov")]:o.value})}))}function d(){let r=document.getElementById("themeNewBtn");r&&r.addEventListener("click",async()=>{let n=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!n||!n.trim()))try{let o=await I("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:n.trim(),base:v})});if(!o.ok)throw new Error("HTTP "+o.status);h(ServerI18n.t("themeCreated"),!0),x()}catch{h(ServerI18n.t("themesNewFailed"),!1)}})}function t(){x(),u(),d();let r=document.getElementById("themeReloadBtn");r&&r.addEventListener("click",async()=>{try{(await I("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(h(ServerI18n.t("themesReloaded")),x()):h(ServerI18n.t("themesReloadFailed"),!1)}catch{h(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:t}})()});var Je=ye(()=>{(function(){"use strict";function y(_,M){return window.csrfFetch(_,M)}function I(_,M){return window.showToast(_,M)}var h=window.ServerI18n;function v(_,M){return window.AdminUtils.styleTag(_,M)}let B=null;function j(){let _=document.getElementById("effectEditModal");return _?Array.from(_.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(M=>!M.hasAttribute("disabled")&&M.getAttribute("aria-hidden")!=="true"):[]}function F(_){let M=document.getElementById("effectEditModal");if(!M||M.classList.contains("hidden"))return;if(_.key==="Escape"){_.preventDefault(),x();return}if(_.key!=="Tab")return;let R=j();if(R.length===0){_.preventDefault();return}let K=R[0],$=R[R.length-1],O=document.activeElement;_.shiftKey&&O===K?(_.preventDefault(),$.focus()):!_.shiftKey&&O===$&&(_.preventDefault(),K.focus())}function x(){let _=document.getElementById("effectEditModal");_&&(_.classList.add("hidden"),_.classList.remove("flex"),_.removeEventListener("keydown",F),B&&(B.focus(),B=null))}let m={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(_){return!!m[_]}};let N=new Map,D=new Map;function S(_){if(!_||!_.styleId||!_.keyframes)return;let M="dme-user-"+_.styleId;if(document.getElementById(M))return;let R=document.createElement("style");R.id=M,R.textContent=_.keyframes,document.head.appendChild(R)}async function L(_){if(N.has(_))return N.get(_);if(D.has(_))return D.get(_);let M=(async()=>{try{let R=await y(`/admin/effects/${encodeURIComponent(_)}/content`);if(!R.ok)throw new Error("content fetch failed");let K=await R.json(),$=K&&K.content||"";if(!$)throw new Error("empty content");let O=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:$,params:{}})});if(!O.ok)throw new Error("preview failed");let U=await O.json();if(!U||!U.animation)throw new Error("no animation");return S(U),N.set(_,U),U}catch{return N.set(_,"failed"),null}finally{D.delete(_)}})();return D.set(_,M),M}function P(_,M){let R=_.querySelector(".effect-demo-text");if(!R)return;R.style.animation=M.animation||"",M.animationComposition&&(R.style.animationComposition=M.animationComposition),R.style.animationPlayState="paused";let K=b();K&&K.observe(_)}let w=null;function b(){return w||(typeof IntersectionObserver>"u"?null:(w=new IntersectionObserver(_=>{_.forEach(M=>{let R=M.target.querySelector(".effect-demo-text");R&&(R.style.animationPlayState=M.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),w))}let E=null;function q(_){let M=document.getElementById("effectPreviewParams");if(!M)return{};let R;try{let $=_.split(`
`),O=!1,U=0,J=null,W=0,G={};for(let te of $){let ne=te.trimStart(),z=te.length-ne.length;if(ne.startsWith("params:")){O=!0,U=z;continue}if(!O||ne===""||ne.startsWith("#"))continue;if(z<=U&&!ne.startsWith("params:")){O=!1;continue}let Q=ne.match(/^([a-zA-Z0-9_]+):\s*$/);if(Q&&z===U+2){J=Q[1],W=z,G[J]={};continue}if(J&&z>W){let Z=ne.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(Z){let se=Z[1],ie=Z[2].trim();if((ie.startsWith('"')&&ie.endsWith('"')||ie.startsWith("'")&&ie.endsWith("'"))&&(ie=ie.slice(1,-1)),se!=="options"){let de=Number(ie);G[J][se]=isNaN(de)?ie:de}}if(ne.startsWith("- value:")){G[J].options||(G[J].options=[]);let se=ne.match(/^- value:\s*(.+)$/);if(se){let ie=se[1].trim();(ie.startsWith('"')&&ie.endsWith('"')||ie.startsWith("'")&&ie.endsWith("'"))&&(ie=ie.slice(1,-1)),G[J].options.push({value:ie,label:ie})}}if(ne.startsWith("label:")&&G[J].options&&G[J].options.length>0){let se=ne.match(/^label:\s*(.+)$/);if(se){let ie=se[1].trim();(ie.startsWith('"')&&ie.endsWith('"')||ie.startsWith("'")&&ie.endsWith("'"))&&(ie=ie.slice(1,-1)),G[J].options[G[J].options.length-1].label=ie}}}}R=G}catch{R={}}M.innerHTML="";let K={};for(let[$,O]of Object.entries(R||{})){let U=O.type||"float",J=document.createElement("div");J.className="flex flex-col gap-0.5";let W=document.createElement("label");if(W.className="font-mono",W.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",W.textContent=`${$} (${U})`,J.appendChild(W),U==="select"&&Array.isArray(O.options)){let G=document.createElement("select");G.className="admin-ui-select",G.style.cssText="font-size:13px;padding:4px 8px",G.dataset.paramKey=$;for(let te of O.options){let ne=document.createElement("option");ne.value=te.value,ne.textContent=te.label||te.value,te.value===String(O.default)&&(ne.selected=!0),G.appendChild(ne)}K[$]=String(O.default||O.options[0]&&O.options[0].value||""),G.addEventListener("change",()=>{f()}),J.appendChild(G)}else{let G=O.min!=null?O.min:0,te=O.max!=null?O.max:10,ne=O.step!=null?O.step:U==="int"?1:.1,z=O.default!=null?O.default:G,Q=document.createElement("div");Q.className="flex items-center gap-2";let Z=document.createElement("input");Z.type="range",Z.min=G,Z.max=te,Z.step=ne,Z.value=z,Z.dataset.paramKey=$,Z.className="flex-1",Z.style.accentColor="var(--color-primary)";let se=document.createElement("span");se.className="font-mono",se.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",se.textContent=String(z),Z.addEventListener("input",()=>{se.textContent=Z.value,f()}),Q.appendChild(Z),Q.appendChild(se),J.appendChild(Q),K[$]=z}M.appendChild(J)}return K}function A(){let _=document.getElementById("effectPreviewParams");if(!_)return{};let M={};return _.querySelectorAll("[data-param-key]").forEach(R=>{M[R.dataset.paramKey]=R.type==="range"?Number(R.value):R.value}),M}async function C(){let _=document.getElementById("effectEditModalTextarea"),M=document.getElementById("effectPreviewText"),R=document.getElementById("effectPreviewStyle"),K=document.getElementById("effectPreviewError");if(!_||!M||!R)return;let $=_.value;if(!$||$===h.t("effectLoadContent")||$===h.t("effectsNetworkError"))return;let O=A();K?.classList.add("hidden");try{let U=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:$,params:O})}),J=await U.json().catch(()=>({}));U.ok?(R.textContent=J.keyframes||"",M.style.animation=J.animation||"none",M.style.animationComposition=J.animationComposition||""):(M.style.animation="none",R.textContent="",K&&(K.textContent=J.error||h.t("previewFailed"),K.classList.remove("hidden")))}catch{M.style.animation="none",R.textContent="",K&&(K.textContent=h.t("effectsNetworkError"),K.classList.remove("hidden"))}}function f(){clearTimeout(E),E=setTimeout(()=>C(),500)}async function u(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
                ${v("effectPreviewStyle","")}
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
      `),document.getElementById("effectEditModalClose").addEventListener("click",x),document.getElementById("effectEditModalCancel").addEventListener("click",x),document.getElementById("effectEditModal").addEventListener("click",$=>{$.target===$.currentTarget&&x()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let $=document.getElementById("effectEditModalTextarea");$&&(q($.value),f())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{C()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let $=document.getElementById("effectEditModal"),O=document.getElementById("effectEditModalTextarea"),U=document.getElementById("effectEditModalSave"),J=$?.dataset.effectName;if(!(!J||!O)){U.disabled=!0;try{let W=await y("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:J,content:O.value})}),G=await W.json().catch(()=>({}));W.ok?(I(G.message||h.t("effectSaveFallback"),!0),x(),await r()):I(G.error||h.t("saveFailed"),!1)}catch{I(h.t("effectsNetworkError"),!1)}finally{U.disabled=!1}}})),await r(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let $=document.getElementById("effectReloadBtn");$&&($.disabled=!0);try{let O=await y("/admin/effects/reload",{method:"POST"}),U=await O.json().catch(()=>({}));O.ok?(I(U.message||h.t("effectsReloadFallback")),await r()):I(U.error||h.t("reloadFailed"),!1)}catch{I(h.t("effectsNetworkError"),!1)}finally{$&&($.disabled=!1)}});async function _($){if(!$)return;let O=new FormData;O.append("effectfile",$);try{let U=await y("/admin/effects/upload",{method:"POST",body:O}),J=await U.json().catch(()=>({}));U.ok?(I(J.message||h.t("effectUploadFallback")),await r()):I(J.error||h.t("uploadFailed"),!1)}catch{I(h.t("effectsNetworkError"),!1)}}let M=document.getElementById("effectUploadInput"),R=M&&!M.dataset.uploadWired;R&&(M.dataset.uploadWired="1"),(R?M:null)?.addEventListener("change",async $=>{await _($.target.files?.[0]),$.target.value=""});let K=document.getElementById("sec-effects-mgmt");if(K){let $=0,O=G=>{G.preventDefault(),$++,K.classList.add("is-drag")},U=G=>{G.preventDefault()},J=G=>{G.preventDefault(),$=Math.max(0,$-1),$===0&&K.classList.remove("is-drag")},W=async G=>{G.preventDefault(),$=0,K.classList.remove("is-drag");let te=G.dataTransfer?.files?.[0];if(te){if(!/\.(dme|dme\.zip)$/i.test(te.name)){I(h.t("fxToastBadExt"),!1);return}await _(te)}};K.addEventListener("dragenter",O),K.addEventListener("dragover",U),K.addEventListener("dragleave",J),K.addEventListener("drop",W)}}function d(_){let M=(_||"").toLowerCase();return M.startsWith("glow")||M.includes("neon")?"GLOW":M.startsWith("shake")?"SHAKE":M.startsWith("wave")||M.startsWith("spin")||M.startsWith("bounce")||M.startsWith("zoom")||M.startsWith("fire")||M.includes("motion")?"MOTION":M.startsWith("rainbow")||M.startsWith("blink")||M.includes("color")?"COLOR":M.startsWith("type")||M.includes("text")?"TEXT":"MISC"}let t={all:[],filter:"ALL",selected:null};async function r(){let _=document.getElementById("effectsList");if(_)try{let M=await y("/admin/effects");if(!M.ok){_.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+h.t("effectsLoadFailed")+"</span>";return}let R=await M.json();t.all=R.effects||[],n(),s()}catch{_.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+h.t("effectsNetworkError")+"</span>"}}function n(){let _=document.getElementById("effectsFilterRow");if(!_)return;let M={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};t.all.forEach(U=>{M[d(U.name)]+=1});let R=t.all.length,K=[["ALL",h.t("fxChipAll"),R],["GLOW",h.t("fxCatGlow"),M.GLOW],["MOTION",h.t("fxCatMotion"),M.MOTION],["COLOR",h.t("fxCatColor"),M.COLOR],["SHAKE",h.t("fxCatShake"),M.SHAKE],["TEXT",h.t("fxCatText"),M.TEXT]];M.MISC>0&&K.push(["MISC",h.t("fxCatMisc"),M.MISC]);let $=K.map(([U,J,W])=>`<span class="hud-filter-chip ${t.filter===U?"is-active":""}" data-effect-filter="${U}">${J} ${W}</span>`).join(""),O=_.querySelector("[data-toolbar-spacer]");O?(_.querySelectorAll("[data-effect-filter]").forEach(U=>U.remove()),O.insertAdjacentHTML("beforebegin",$)):_.innerHTML=$,_.querySelectorAll("[data-effect-filter]").forEach(U=>{U.addEventListener("click",()=>{t.filter=U.dataset.effectFilter,n(),s()})})}function o(_){let M=(U,J)=>{let W=document.querySelector(U);W&&(W.textContent=J==null?"\u2014":String(J))},R=_.length,K=_.filter(U=>U.enabled!==!1).length,$=new Set(_.map(U=>d(U.name))),O=_.filter(U=>!m[U.name]).length;M("[data-eflib-total]",R),M("[data-eflib-active]",K),M("[data-eflib-cats]",$.size),M("[data-eflib-user]",O)}function s(){let _=document.getElementById("effectsList");if(!_)return;let M=t.all;o(M);let R=t.filter==="ALL"?M:M.filter(K=>d(K.name)===t.filter);if(!R.length){_.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(M.length?h.t("fxNoFilterMatch"):h.t("noEffectsLoaded"))+"</span>";return}w&&w.disconnect(),_.innerHTML="",R.forEach(K=>{let $=d(K.name),O=$==="GLOW"?"is-glow":$==="COLOR"?"is-color":$==="TEXT"?"is-text":"",U=m[K.name]||"",J=!!U,W=document.createElement("div");W.className="hud-effect-card"+(t.selected===K.name?" is-selected":""),W.dataset.effectName=K.name,W.title=[K.description,`file: ${K.filename}`].filter(Boolean).join(`
`);var G="effect_"+K.name;let te=h.t(G)!==G?h.t(G):K.label||K.name,ne=J?"built-in":"user",z=U?`animation:${U};animation-play-state:paused;`:"";if(W.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${e(h.t("fxCat"+$.charAt(0)+$.slice(1).toLowerCase())||$)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${O}"><span class="effect-demo-text" style="${z}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${e(te)}</div>
          <div class="hud-effect-card-meta">${e(ne)} \xB7 ${e(K.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${h.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${h.t("lbDelete")}</button>
        </div>
      `,_.appendChild(W),U){let se=b();se&&se.observe(W)}else{let se=N.get(K.name);se&&se!=="failed"?(S(se),P(W,se)):se!=="failed"&&L(K.name).then(ie=>{if(!ie)return;let de=_.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(K.name)}"]`);de&&P(de,ie)})}W.addEventListener("click",se=>{se.target.closest("[data-role]")||p(K)});let Q=W.querySelector('[data-role="edit"]'),Z=W.querySelector('[data-role="delete"]');Q.addEventListener("click",async()=>{let se=document.getElementById("effectEditModal"),ie=document.getElementById("effectEditModalTitle"),de=document.getElementById("effectEditModalFile"),ce=document.getElementById("effectEditModalTextarea"),ke=document.getElementById("effectEditModalSave");if(!se)return;B=document.activeElement instanceof HTMLElement?document.activeElement:null,ie.textContent=K.label||K.name,de.textContent=K.filename,ce.value=h.t("effectLoadContent"),ce.disabled=!0,ke.disabled=!0,se.dataset.effectName=K.name,se.classList.remove("hidden"),se.classList.add("flex"),se.addEventListener("keydown",F),ce.focus();let Ee=document.getElementById("effectPreviewText"),ee=document.getElementById("effectPreviewStyle"),ae=document.getElementById("effectPreviewError"),oe=document.getElementById("effectPreviewParams");Ee&&(Ee.style.animation="none"),ee&&(ee.textContent=""),ae&&ae.classList.add("hidden"),oe&&(oe.innerHTML="");try{let me=await y(`/admin/effects/${encodeURIComponent(K.name)}/content`),re=await me.json().catch(()=>({}));me.ok?(ce.value=re.content||"",ce.disabled=!1,ke.disabled=!1,ce.focus(),q(ce.value),C()):(ce.value=re.error||h.t("effectLoadContentFailed"),I(re.error||h.t("effectLoadContentFailed"),!1))}catch{ce.value=h.t("effectsNetworkError"),I(h.t("effectsNetworkError"),!1)}}),Z.addEventListener("click",async()=>{let se=K.label||K.name;if(await window.HudConfirm?.open({icon:"\u2297",title:h.t("fxDeleteTitle"),subtitle:h.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${h.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${se}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${h.t("fxDeleteWarn")}
                </div>`,confirmLabel:h.t("fxDeleteConfirm"),cancelLabel:h.t("cancel"),width:400}))try{let de=await y("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:K.name})}),ce=await de.json().catch(()=>({}));de.ok?(I(ce.message||h.t("effectDeleteFallback"),!0),await r()):I(ce.error||h.t("deleteFailed"),!1)}catch{I(h.t("effectsNetworkError"),!1)}})})}function e(_){return String(_??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(_){let M={name:"",label:"",description:"",params:[]};if(!_)return M;let R=_.split(`
`),K="top",$=null;for(let O of R){let U=O.replace(/\r$/,""),J=U.trimStart();if(!J||J.startsWith("#"))continue;let W=U.length-J.length;if(W===0){if(K="top",$&&(M.params.push($),$=null),J==="params:"){K="params";continue}let G=J.match(/^([a-z_]+):\s*(.+)$/);G&&(G[1]==="name"?M.name=G[2].trim():G[1]==="label"?M.label=G[2].trim():G[1]==="description"&&(M.description=G[2].trim()));continue}if(!(K!=="params"&&K!=="param-fields"&&K!=="options")){if(W===2&&(K==="params"||K==="param-fields"||K==="options")){$&&(M.params.push($),$=null);let G=J.match(/^(\w+):$/);G&&($={key:G[1]},K="param-fields");continue}if(W===4&&K==="param-fields"&&$){let G=J.match(/^(\w+):\s*(.*)$/);if(G){let te=G[1],ne=G[2].trim();te==="label"?$.label=ne:te==="type"?$.type=ne:te==="default"?$.default=ne:te==="min"?$.min=parseFloat(ne):te==="max"?$.max=parseFloat(ne):te==="step"?$.step=parseFloat(ne):te==="options"&&($.options=[],K="options")}continue}if(K==="options"&&$&&W>=6){let G=J.match(/^-\s*value:\s*(.+)$/);G&&($.options||($.options=[]),$.options.push({value:G[1].trim(),label:G[1].trim()}));let te=J.match(/^label:\s*(.+)$/);te&&$.options&&$.options.length>0&&($.options[$.options.length-1].label=te[1].trim())}}}return $&&M.params.push($),M}function g(_,M){let R=_.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),K=R?R[1]:"",$=_.match(/^animation:\s*["']?(.+?)["']?\s*$/m),O=$?$[1].trim():"";for(let U of M.params){let J=U.default!==void 0?U.default:"",W=new RegExp(`\\{${U.key}\\}`,"g");K=K.replace(W,J),O=O.replace(W,J)}return{keyframes:K,animation:O}}function a(_,M){if(_==="COLOR"){let R=M.find(K=>K.key==="duration");if(R&&R.default){let K=parseFloat(R.default);if(K<.25)return"crimson";if(K<.33)return"amber"}}if(_==="MOTION"){let R=M.find(K=>K.key==="height");if(R&&R.default){let K=parseFloat(R.default);if(K>30)return"crimson";if(K>24)return"amber"}}return"lime"}function i(_,M){return _==="COLOR"?M==="crimson"?h.t("fxHintFlashBlock"):M==="amber"?h.t("fxHintFlashWarn"):h.t("fxHintFlashOk"):M==="crimson"?h.t("fxHintAmpBlock"):M==="amber"?h.t("fxHintAmpWarn"):h.t("fxHintAmpOk")}function c(_,M){let R=l(M),{keyframes:K,animation:$}=g(M,R),O=d(_.name),U=R.params.filter(ce=>ce.type!=="select"),J=R.params.filter(ce=>ce.type==="select"),W=a(O,R.params),G=W==="crimson"?"BLOCK":W==="amber"?"WARN":"OK",te=i(O,W),ne="fx-anim-"+_.name.replace(/[^a-z0-9]/gi,"-"),z=K&&$?v(ne,K):"",Q=$?`animation:${$};animation-play-state:running;`:"",Z=U.map(ce=>{let ke=parseFloat(ce.default)||0,Ee=ce.min??0,ee=ce.max??100,ae=Math.max(0,Math.min(100,(ke-Ee)/(ee-Ee)*100)),oe=(ce.label||"").match(/\(([^)]+)\)$/),me=oe?oe[1]:"",re=ce.label||ce.key;return`<div style="display:flex;flex-direction:column;gap:2px">
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
          <span>${Ee}${e(me)}</span><span>${ee}${e(me)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${h.t("fxNoNumericParams")}</span>`,se=J.map(ce=>{let ke=ce.options||[],Ee=String(ce.default||""),ee=ke.map(ae=>`<span class="fx-radio-btn${ae.value===Ee||ae.label===Ee?" is-active":""}">${e(ae.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${e(ce.label||ce.key)}</div>
        <div class="fx-radio-group">${ee||"<span>\u2014</span>"}</div>
      </div>`}).join(""),ie=["dark","light","photo"].map(ce=>{let ke=ce==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${ce}">
        <span class="fx-preview-bg-label">${ce.toUpperCase()}</span>
        <span class="fx-preview-text" style="${Q}color:${ke}">ABC</span>
      </div>`}).join(""),de=`${z}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${h.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${Z}</div>
      </div>`;return se&&(de+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${h.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${se}</div>
      </div>`),de+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${h.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${ie}</div>
      </div>
      <div class="fx-warn-box${W!=="lime"?" is-"+W:""}">
        <span class="fx-warn-chip${W!=="lime"?" is-"+W:""}">${G}</span>
        <span class="fx-warn-text">${e(te)}</span>
      </div>
    </div>`,de}async function p(_){t.selected=_.name;let M=document.getElementById("effectsInspector"),R=document.getElementById("effectsInspectorTitle"),K=document.getElementById("effectsInspectorKicker"),$=document.getElementById("effectsInspectorBody");if(M){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),R&&(R.textContent=_.label||_.name),K&&(K.textContent="LOADING"),$&&($.className="hud-inspector-body",$.textContent="# "+h.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(O=>{O.classList.toggle("is-selected",O.dataset.effectName===_.name)});try{let O=await y(`/admin/effects/${encodeURIComponent(_.name)}/content`),U=await O.json().catch(()=>({}));if(O.ok){let J=U.content||"";$&&($.className="hud-inspector-body has-param-panel",$.innerHTML=c(_,J)),K&&(K.textContent=d(_.name))}else $&&($.className="hud-inspector-body",$.textContent="# "+(U.error||h.t("effectLoadContentFailed"))),K&&(K.textContent="ERROR")}catch{$&&($.className="hud-inspector-body",$.textContent="# "+h.t("effectsNetworkError")),K&&(K.textContent="NETWORK")}}}function T(){let _=document.getElementById("effectsInspectorReload"),M=document.getElementById("effectsInspectorEdit");_?.addEventListener("click",async()=>{if(!t.selected){I(h.t("fxSelectFirst"),!1);return}let R=t.all.find(K=>K.name===t.selected);R&&await p(R)}),M?.addEventListener("click",()=>{if(!t.selected){I(h.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(t.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",T())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:u}})()});var Ye=ye(()=>{(function(){"use strict";var y={};window.DanmuEvents={on:function(I,h){y[I]||(y[I]=[]),y[I].push(h)},off:function(I,h){y[I]=(y[I]||[]).filter(function(v){return v!==h})},emit:function(I,h){(y[I]||[]).forEach(function(v){v(h)})}}})()});var Qe=ye(()=>{(function(){"use strict";let y="sec-events",I="/admin/audit?limit=200",v=window.AdminUtils&&window.AdminUtils.escapeHtml||function(A){return String(A).replace(/[&<>"']/g,function(C){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[C]})},B={events:[],filterSev:"all",filterCat:"all",timer:0};function j(A){let C=(A.source||A.kind||"").toLowerCase(),f=(A.action||"").toLowerCase();return C.includes("plugin")||f.includes("plugin")?"plugin":C.includes("webhook")||f.includes("webhook")?"webhook":C.includes("rate")||f.includes("rate")||f.includes("limit")?"rate":C.includes("filter")||f.includes("filter")?"filter":C.includes("overlay")||f.includes("overlay")||C==="broadcast"?"overlay":C.includes("backup")||f.includes("backup")?"backup":C.includes("msg")||C==="messaging"?"msg":C.includes("ws")||C==="websocket"?"ws":"system"}let F=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,x=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function m(A){let C=(A.action||A.kind||"").toLowerCase();return A.severity?A.severity:F.test(C)?"error":x.test(C)?"warn":"info"}function N(A){let C=A.source||"system",f=A.action||A.kind||"";return f?`${C.toUpperCase()}_${f.toUpperCase()}`:C.toUpperCase()}function D(A){if(!A)return"\u2014";let C=new Date(A*1e3),f=u=>String(u).padStart(2,"0");return`${f(C.getHours())}:${f(C.getMinutes())}:${f(C.getSeconds())}`}function S(A){if(A.message)return A.message;let C=A.meta||{},f=[];if(C.from&&C.to)f.push(`${C.from} \u2192 ${C.to}`);else if(C.text_preview)f.push(`"${C.text_preview.slice(0,60)}"`);else if(Object.keys(C).length){let u=Object.keys(C).slice(0,3);for(let d of u)f.push(`${d}=${JSON.stringify(C[d]).slice(0,30)}`)}return f.length?f.join(" \xB7 "):`${A.source||"system"}.${A.action||A.kind||"?"}`}function L(){return`
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
      </div>`}function P(){let A=document.querySelector("[data-ev-rows]");if(!A)return;let C=B.events,f=C.filter(t=>!(B.filterSev!=="all"&&m(t)!==B.filterSev||B.filterCat!=="all"&&j(t)!==B.filterCat));f.length===0?(A.innerHTML="",window.AdminEmpty?A.appendChild(window.AdminEmpty.render("events")):A.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):A.innerHTML=f.map(t=>{let r=m(t);return`
          <div class="admin-ev-v4__row" data-sev="${r}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${v(D(t.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${r}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${r}">${v(N(t))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${v(t.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${v(S(t))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let u={all:C.length,info:0,warn:0,error:0};for(let t of C)u[m(t)]+=1;Object.keys(u).forEach(t=>{let r=document.querySelector(`[data-ev-cnt="${t}"]`);r&&(r.textContent=String(u[t]))});let d=document.querySelector("[data-ev-total]");d&&(d.textContent=`${f.length} / ${C.length}`)}async function w(){try{let A=await fetch(I,{credentials:"same-origin"});if(!A.ok)return;let C=await A.json();B.events=Array.isArray(C.events)?C.events:[],P()}catch{}}function b(){let A=document.getElementById(y);A&&A.addEventListener("click",C=>{let f=C.target.closest("[data-ev-sev]");if(f){A.querySelectorAll("[data-ev-sev]").forEach(t=>t.classList.toggle("is-active",t===f)),B.filterSev=f.dataset.evSev,P();return}let u=C.target.closest("[data-ev-cat]");if(u){A.querySelectorAll("[data-ev-cat]").forEach(t=>t.classList.toggle("is-active",t===u)),B.filterCat=u.dataset.evCat,P();return}let d=C.target.closest("[data-ev-action]");if(d){if(d.dataset.evAction==="refresh")w();else if(d.dataset.evAction==="export"){let t=new Blob([JSON.stringify(B.events,null,2)],{type:"application/json"}),r=URL.createObjectURL(t),n=document.createElement("a");n.href=r,n.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(r),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function E(){let A=document.querySelector(".admin-dash-grid"),C=document.getElementById(y);if(!C)return;let u=(A?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";C.style.display=u?"":"none",u?(w(),B.timer||(B.timer=setInterval(w,15e3))):B.timer&&(clearInterval(B.timer),B.timer=0)}function q(){let A=document.getElementById("settings-grid");!A||document.getElementById(y)||(A.insertAdjacentHTML("beforeend",L()),b(),E())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&q(),E()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",E),document.addEventListener("admin-panel-rendered",()=>{q(),E()}),q()})})()});var Xe=ye(()=>{(function(){"use strict";let y="sec-modqueue",I="/admin/modqueue/list",B=window.AdminUtils&&window.AdminUtils.escapeHtml||function(f){return String(f).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},j={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},F={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},x={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function m(f){let u=0,d=String(f||"");for(let t=0;t<d.length;t++)u=u*31+d.charCodeAt(t)&65535;return u%360}function N(f){if(!f.created_at_ms)return null;let u=(Date.now()-f.created_at_ms)/1e3,d=Math.max(0,j.autoRejectSec-u);return Math.ceil(d)}function D(f,u){let d=(f.severity||"low").toLowerCase(),t=F[d]||F.low,r=m(f.fp),n=String(f.fp||"\u2014").slice(0,8),o=f.nick||f.nickname||ServerI18n.t("audienceAnonymous"),s=(o||"?").slice(0,2).toUpperCase(),e=u==="pending"?N(f):null,l=u==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${B(f.id||"")}">${B(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${B(f.id||"")}">${B(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${B(f.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",g=u==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${B(ServerI18n.t("modqueueStampApproved"))} \xB7 ${B(f.resolved_by||"admin")} \xB7 ${B(f.resolved_ago||"")}
        </div>`:u==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${f.auto_rejected?`${B(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${B(ServerI18n.t("modqueueAutoRejectTimeout",{n:j.autoRejectSec}))}`:`${B(ServerI18n.t("modqueueStampRejected"))} \xB7 ${B(f.resolved_by||"admin")} \xB7 ${B(f.resolved_ago||"")}`}
        </div>`:"",a=u==="pending"&&e!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${e}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${B(f.id||"")}" data-mq-sev="${B(d)}" style="--mq-sev:${t}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${r})">${B(s)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${B(o)}</div>
            <div class="admin-mq-card__fp">fp:${B(n)}</div>
          </div>
          <div class="admin-mq-card__time">${B(f.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${B(f.content||f.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${t}">${B(ServerI18n.t(x[d]||x.low))}</span>
          <span class="admin-mq-card__rule">${B(ServerI18n.t("modqueueRuleLabel"))}: ${B(f.rule||f.matched_rule||"?")}</span>
          ${a}
        </div>
        ${l}
        ${g}
      </div>`}function S(f,u,d){f&&(f.innerHTML=u.map(t=>D(t,d)).join(""))}function L(){let f=document.getElementById(y);if(!f)return;f.querySelectorAll("[data-mq-bulk]").forEach(d=>{d.disabled=!0}),f.querySelector(".admin-mq__body").hidden=!0;let u=f.querySelector("[data-mq-empty]");u&&window.AdminEmpty&&(u.hidden=!1,u.innerHTML="",u.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function P(){let f=document.getElementById(y);if(!f)return;if(j.pending.length+j.approved.length+j.rejected.length===0){L();return}f.querySelector(".admin-mq__body").hidden=!1;let d=f.querySelector("[data-mq-empty]");d&&(d.hidden=!0),S(f.querySelector("[data-mq-col-pending]"),j.pending,"pending"),S(f.querySelector("[data-mq-col-approved]"),j.approved,"approved"),S(f.querySelector("[data-mq-col-rejected]"),j.rejected,"rejected");let t=(s,e)=>{f.querySelectorAll(s).forEach(l=>{l.textContent=String(e)})};t("[data-mq-cnt-pending]",j.pending.length),t("[data-mq-cnt-approved]",j.approved.length),t("[data-mq-cnt-rejected]",j.rejected.length);let r=j.pending.length===0;f.querySelectorAll("[data-mq-bulk]").forEach(s=>{s.disabled=r});let n=j.pending[j.pending.length-1],o=f.querySelector("[data-mq-oldest]");if(o){let s=n?N(n):null;o.textContent=s!=null?`oldest: ${s}s`:""}t("[data-mq-throughput]",j.stats.throughput.toFixed?j.stats.throughput.toFixed(1):j.stats.throughput),t("[data-mq-avg-review]",j.stats.avg_review_sec.toFixed?j.stats.avg_review_sec.toFixed(1):j.stats.avg_review_sec),t("[data-mq-auto-rate]",Math.round(j.stats.auto_reject_pct||0)+"%")}async function w(){try{let f=await fetch(I,{credentials:"same-origin"});if(!f.ok){j.pending=[],j.approved=[],j.rejected=[],P();return}let u=await f.json();j.pending=Array.isArray(u.pending)?u.pending:[],j.approved=Array.isArray(u.approved)?u.approved:[],j.rejected=Array.isArray(u.rejected)?u.rejected:[],j.stats=u.stats||j.stats,typeof u.auto_reject_sec=="number"&&(j.autoRejectSec=u.auto_reject_sec),P()}catch{}}async function b(f,u,d){if(window.csrfFetch)try{let t=await window.csrfFetch("/admin/modqueue/"+u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:f,...d||{}})});if(t.ok)window.showToast&&window.showToast(u==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),w();else{let r=await t.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:r.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function E(){return`
      <div id="${y}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
        <!-- 2026-07-30 \u4F7F\u7528\u8005\u6307\u793A\uFF1A\u79FB\u9664\u5340\u584A page-head\u2014\u2014\u5206\u9801\u5217\u5DF2\u9078\u4E2D\u300C\u5BE9\u6838
             \u4F47\u5217\u300D\u3001\u9EB5\u5305\u5C51\u4E5F\u5BEB\u4E86\uFF0C\u9019\u689D\u6A19\u984C\u7D14\u91CD\u8907\u3002\u8AAA\u660E\u7531\u4E0B\u65B9 admin-mq__hint
             \u627F\u63A5\u3002\u540C\u7406\u9069\u7528\u5176\u4ED6\u5BE9\u6838\u5206\u9801\uFF08BANS/BLACKLIST\u2026\uFF09\uFF0C\u672C\u6B21\u5148\u52D5\u4F47\u5217\u3002 -->

        <!-- Toolbar: stats chips + bulk + auto-reject config -->
        <div class="admin-mq__toolbar">
          <span class="admin-mq__chip admin-mq__chip--pending">
            <span class="admin-mq__dot admin-mq__dot--amber"></span>
            ${B(ServerI18n.t("mqStatePending"))} \xB7 <span data-mq-cnt-pending>0</span>
          </span>
          <span class="admin-mq__counter admin-mq__counter--ok">
            <span data-mq-cnt-approved>0</span> ${B(ServerI18n.t("mqStateApproved"))}
          </span>
          <span class="admin-mq__counter admin-mq__counter--rej">
            <span data-mq-cnt-rejected>0</span> ${B(ServerI18n.t("mqStateRejected"))}
          </span>
          <span class="admin-mq__spacer"></span>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--ok" data-mq-bulk="approve-low">${B(ServerI18n.t("modqueueBulkApproveConfirm"))}</button>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--rej" data-mq-bulk="reject-high">${B(ServerI18n.t("modqueueBulkRejectConfirm"))}</button>
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
      </div>`}function q(){let f=document.getElementById(y);f&&f.addEventListener("click",async u=>{let d=u.target.closest("[data-mq-action]");if(d){let r=d.dataset.mqId,n=d.dataset.mqAction;(n==="approve"||n==="reject")&&b(r,n);return}let t=u.target.closest("[data-mq-bulk]");if(t){let r=t.dataset.mqBulk,n=r==="approve-low";if(!await window.HudConfirm?.open({icon:n?"\u2713":"\u2298",title:n?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:n?"warn":"danger",body:n?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:n?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let s=r.startsWith("approve")?"approve":"reject",e=r.endsWith("low")?"low":"high";b(null,"bulk",{action:s,severity:e})}})}function A(){let f=document.querySelector(".admin-dash-grid"),u=document.getElementById(y);if(!u)return;let d=(location.hash||"").replace("#/","").split("/"),t=f?.dataset.activeRoute||d[0]||"",r=f?.dataset.activeLeaf||d[1]||"",n=t==="modqueue"||t==="moderation"&&(r==="queue"||r===""||r==="moderation");u.style.display=n?"":"none",n?(j.timer||(w(),j.timer=setInterval(w,4e3)),j.countdownTimer||(j.countdownTimer=setInterval(P,1e3))):(j.timer&&(clearInterval(j.timer),j.timer=0),j.countdownTimer&&(clearInterval(j.countdownTimer),j.countdownTimer=0))}function C(){let f=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!f||document.getElementById(y)||(f.insertAdjacentHTML("beforeend",E()),q(),A())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(y)&&C(),A()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",A),document.addEventListener("admin-panel-rendered",()=>{C(),A()}),C()})})()});var Ze=ye(()=>{(function(){"use strict";let y="sec-modbans-overview",I=window.AdminUtils&&window.AdminUtils.escapeHtml||function(E){return String(E).replace(/[&<>"']/g,function(q){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[q]})},h=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],v={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},B={fingerprint:"FP",ip:"IP",nick:"NICK"},j={rows:[],refreshTimer:0};async function F(){try{let E=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!E.ok)return;let q=await E.json();j.rows=Array.isArray(q.bans)?q.bans:[],N()}catch{}}function x(E){if(!E||E<=0)return"\u2014";let q=Math.floor(E/86400),A=Math.floor(E%86400/3600),C=Math.floor(E%3600/60);return q>0?`${q}d ${A}h`:A>0?`${A}h ${C}m`:`${C}m`}function m(E){let q=E.target_kind;return q==="fingerprint"?`fp:${(E.target||"").slice(0,8)}`:q==="nick"?`@${E.target}`:E.target||"\u2014"}function N(){let E=document.querySelector("[data-modbans-list]");if(!E)return;let q=j.rows||[],A=document.querySelector("[data-modbans-count]");if(A&&(A.textContent=String(q.length)),q.length===0){E.innerHTML="";let C=window.AdminEmpty.render("blacklist");C.dataset.emptyKind="modbans",E.appendChild(C);return}E.innerHTML=q.map(function(C){let f=C.status==="expired",u=C.status==="permanent",d="admin-modbans-chip is-"+C.status,t=u?ServerI18n.t("modbansPermanent"):f?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:x(C.remaining_s)}),r=encodeURIComponent(C.target_kind)+"|"+encodeURIComponent(C.target);return`
        <div class="admin-modbans-row ${f?"is-expired":""}">
          <span class="admin-modbans-target">${I(m(C))}</span>
          <span class="admin-modbans-kind">${I(B[C.target_kind]||C.target_kind)}</span>
          <span class="admin-modbans-reason">${I(C.reason||"\u2014")}</span>
          <span class="${d}">
            ${C.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${I(t)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${r}"
            ${f?"disabled":""}
            title="${f?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${f?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function D(E){let q=E||{},A=q.kind||"ban",C=window.HudConfirm,f=!q.target,u=q.target_kind||"fingerprint",d=q.target||"";return new Promise(function(t){if(!C){t(!1);return}let r=86400,n=!1,o=12,s="hour",e=document.createElement("div");e.className="admin-modbans-modal-body",e.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${I(v[u]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${I(B[u]||"?")} ${I((A||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${I(d?m({target_kind:u,target:d}):"\u2014")}</div>
          </div>
        </div>
        ${f?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(G){return`<button type="button" class="admin-modbans-modal-preset${G===u?" is-active":""}"
                data-modbans-target-kind="${G}">${I(v[G])} ${I(B[G])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${h.map(function(G){return`<button type="button" class="${"admin-modbans-modal-preset"+(G.defaultPick?" is-active":"")+(G.permanent?" is-permanent":"")}" data-modbans-duration="${G.val}">${G.labelKey?ServerI18n.t(G.labelKey):G.label}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let l=e.querySelector("[data-modbans-custom-row]"),g=e.querySelector("[data-modbans-custom-input]"),a=e.querySelector("[data-modbans-custom-seconds]"),i=e.querySelector("[data-modbans-when]"),c=e.querySelector("[data-modbans-custom]"),p=e.querySelector("[data-modbans-target]"),T=e.querySelector("[data-modbans-target-icon]"),k=e.querySelector("[data-modbans-target-label]"),_=e.querySelector("[data-modbans-target-val]"),M=function(){T.textContent=v[u]||"?",k.textContent=`${B[u]||"?"} ${(A||"ban").toUpperCase()}`,_.textContent=d?m({target_kind:u,target:d}):"\u2014"},R=function(){return Math.max(1,parseInt(g.value,10)||1)*(s==="day"?86400:3600)},K=function(){if(r===0){i.textContent=ServerI18n.t("modbansWhenPermanent"),i.classList.remove("is-custom");return}let G=new Date(Date.now()+r*1e3),te=z=>String(z).padStart(2,"0"),ne=`${G.getFullYear()}-${te(G.getMonth()+1)}-${te(G.getDate())} ${te(G.getHours())}:${te(G.getMinutes())}`;n?(i.textContent=ServerI18n.t("modbansWhenCustom",{n:o,unit:ServerI18n.t(s==="day"?"modbansDay":"modbansHour"),stamp:ne}),i.classList.add("is-custom")):(i.textContent=ServerI18n.t("modbansWhenPreset",{dur:x(r),stamp:ne}),i.classList.remove("is-custom"))},$=function(){let G=R();a.textContent=`= ${G.toLocaleString()}s`,n&&(o=Math.max(1,parseInt(g.value,10)||1),r=G,K())},O=e.querySelector("[data-modbans-presets]"),U=function(){n=!0,l.hidden=!1,O.querySelectorAll(".admin-modbans-modal-preset").forEach(function(G){G.classList.toggle("is-active",G===c)}),$()},J=function(G){n=!1,l.hidden=!0,O.querySelectorAll(".admin-modbans-modal-preset").forEach(function(te){te.classList.toggle("is-active",te===G)})};M(),K(),$(),e.addEventListener("click",function(G){let te=G.target.closest("[data-modbans-target-kind]");if(te){u=te.dataset.modbansTargetKind,te.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(Q){Q.classList.toggle("is-active",Q===te)}),M();return}if(G.target.closest("[data-modbans-custom]")){U();return}let ne=G.target.closest("[data-modbans-custom-unit]");if(ne){s=ne.dataset.modbansCustomUnit||"hour",e.querySelectorAll("[data-modbans-custom-unit]").forEach(function(Q){Q.classList.toggle("is-active",Q===ne)}),$();return}let z=G.target.closest("[data-modbans-duration]");z&&(r=parseInt(z.dataset.modbansDuration,10)||0,J(z),K())}),g.addEventListener("input",$),p&&p.addEventListener("input",function(){d=p.value.trim(),M()});let W=e.querySelector("[data-modbans-reason]");C.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:e,width:480}).then(function(G){if(!G){t(!1);return}if(!d){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),t(!1);return}r===0?C.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${I(m({target_kind:u,target:d}))}</b>`})}).then(function(te){if(!te){t(!1);return}S(u,d,r,W.value.trim(),A).then(t)}):S(u,d,r,W.value.trim(),A).then(t)})})}async function S(E,q,A,C,f){try{let u=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:E,target:q,duration_s:A,reason:C||"",kind:f||"ban"})});if(!u.ok)throw new Error(`HTTP ${u.status}`);return window.showToast&&window.showToast(A===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:x(A)}),!0),F(),!0}catch(u){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:u.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function L(E){let q=(E||"").split("|");if(q.length!==2)return;let A=decodeURIComponent(q[0]),C=decodeURIComponent(q[1]);try{let f=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:A,target:C})});if(!f.ok)throw new Error(`HTTP ${f.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),F()}catch(f){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:f.message||ServerI18n.t("modbansUnknownError")}),!1)}}function P(){return`
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
      </div>`}function w(){let E=document.getElementById(y);if(!E||E.dataset.modbansBound==="1")return;E.dataset.modbansBound="1",E.addEventListener("click",function(A){if(A.target.closest("[data-modbans-add]")){D({kind:"ban"});return}let C=A.target.closest("[data-modbans-unban]");C&&!C.disabled&&L(C.dataset.modbansUnban)});let q=E.querySelector("[data-modbans-list]");q&&window.AdminSkeletons&&!q.children.length&&q.appendChild(window.AdminSkeletons.listRows({rows:4}))}function b(){let E=document.getElementById("settings-grid");!E||document.getElementById(y)||(E.insertAdjacentHTML("beforeend",P()),w(),F(),j.refreshTimer||(j.refreshTimer=setInterval(F,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&b()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&b()}),window.ModBans={openPicker:D,refreshList:F,formatTarget:m,formatRemaining:x}})()});var et=ye(()=>{(function(){"use strict";let y="admin-mobile-nav-root",I=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],h=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"backup",icon:"\u21EA",labelKey:"mnavBackup",descKey:"mnavDescBackup"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"},{route:"integrations",icon:"\u232C",labelKey:"adminNavIntegrations",desc:"Slido \xB7 Discord \xB7 OBS"}],v={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",security:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets",webhooks:"integrations",plugins:"integrations","api-tokens":"integrations",scheduler:"integrations"},B=!1,j=0;function F(){return`
      <nav id="${y}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow id="admin-mobile-more-menu" hidden>
          ${h.map(w=>`
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
          ${I.map(w=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${w.id}" data-mn-route="${w.route||""}" ${w.id==="more"?'aria-expanded="false" aria-controls="admin-mobile-more-menu"':'aria-current="false"'}>
              <span class="admin-mobile-nav__icon">${w.icon}</span>
              <span class="admin-mobile-nav__label">${w.labelKey?ServerI18n.t(w.labelKey):w.label}</span>
              ${w.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${w.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </nav>`}function x(){let w=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",b=v[w]||w;return I.some(E=>E.id===b)?b:h.some(E=>E.route===b)?"more":""}function m(){let w=document.getElementById(y);if(!w)return;let b=x();w.querySelectorAll("[data-mn-tab]").forEach(E=>{E.classList.toggle("is-active",E.dataset.mnTab===b),E.dataset.mnTab!=="more"&&E.setAttribute("aria-current",E.dataset.mnTab===b?"page":"false")})}function N(w){let b=document.getElementById(y);if(!b)return;B=w,b.dataset.overflow=w?"open":"closed",b.querySelector("[data-mn-overflow]").hidden=!w,b.querySelector("[data-mn-backdrop]").hidden=!w;let E=b.querySelector("[data-mn-tab='more']");E?.classList.toggle("is-active",w),E?.setAttribute("aria-expanded",w?"true":"false")}function D(w){if(w.target.closest("[data-mn-backdrop]")){N(!1);return}if(w.target.closest("[data-mn-logout]")){N(!1);let q=document.getElementById("logoutButton");q&&q.click();return}let b=w.target.closest("[data-mn-tab]");if(b){if(b.dataset.mnTab==="more"){N(!B);return}N(!1),b.dataset.mnRoute&&(location.hash="#/"+b.dataset.mnRoute);return}let E=w.target.closest("[data-mn-route]");E&&E.classList.contains("admin-mobile-nav__o-row")&&(N(!1),location.hash="#/"+E.dataset.mnRoute)}async function S(){try{let w=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!w.ok)return;let b=await w.json(),E=Array.isArray(b.pending)?b.pending.length:0;j=E;let q=document.querySelector("[data-mn-badge='pending']");if(!q)return;q.textContent=String(E),q.hidden=!(E>0)}catch{}}function L(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let w=0;function b(){let E=document.activeElement,q=E&&(E.tagName==="INPUT"||E.tagName==="TEXTAREA"||E.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!q)}document.addEventListener("focusin",()=>{cancelAnimationFrame(w),w=requestAnimationFrame(b)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(w),w=requestAnimationFrame(()=>setTimeout(b,50))})}function P(){document.getElementById(y)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",F()),document.addEventListener("click",D),window.addEventListener("hashchange",()=>{N(!1),m()}),m(),S(),setInterval(S,8e3),L())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P()})()});var tt=ye(()=>{(function(){"use strict";var y="admin-session-expired-root",I=!1,h=null;function v(m,N){try{var D=window.ServerI18n&&ServerI18n.t(m);return D&&D!==m?D:N}catch{return N}}function B(){var m=document.getElementById(y);if(m&&m.remove(),document.body.classList.remove("is-session-expired"),I=!1,h&&h.focus)try{h.focus()}catch{}h=null}function j(m){if(m.key==="Tab"){var N=document.getElementById(y);if(N){var D=N.querySelectorAll("input, button");if(D.length){var S=D[0],L=D[D.length-1];m.shiftKey&&document.activeElement===S?(m.preventDefault(),L.focus()):!m.shiftKey&&document.activeElement===L&&(m.preventDefault(),S.focus())}}}}function F(){if(!(I||document.getElementById(y))){I=!0,h=document.activeElement,document.body.classList.add("is-session-expired");var m=document.createElement("div");m.id=y,m.className="admin-sx",m.setAttribute("role","alertdialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","admin-sx-title"),m.setAttribute("aria-describedby","admin-sx-body"),m.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+v("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+v("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+v("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+v("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+v("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+v("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(m),document.addEventListener("keydown",j,!0);var N=m.querySelector("#admin-sx-password");setTimeout(function(){try{N.focus()}catch{}},30),m.querySelector("[data-sx-form]").addEventListener("submit",function(D){D.preventDefault(),x(m,N)})}}function x(m,N){var D=m.querySelector("[data-sx-error]"),S=m.querySelector(".admin-sx__submit");D.hidden=!0,S.disabled=!0;var L=new URLSearchParams;L.set("password",N.value),m.querySelector("#admin-sx-remember").checked&&L.set("remember","1");var P=window.__adminRawFetch||window.fetch;P.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:L.toString()}).then(function(w){return w.json().then(function(b){return{status:w.status,data:b}},function(){return{status:w.status,data:{}}})}).then(function(w){if(S.disabled=!1,w.status===200&&w.data&&w.data.ok){var b=document.querySelector('meta[name="csrf-token"]');b&&w.data.csrf_token&&(b.content=w.data.csrf_token),document.removeEventListener("keydown",j,!0),B(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(v("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}w.status===429?D.textContent=v("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):D.textContent=v("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),D.hidden=!1,N.select()}).catch(function(){S.disabled=!1,D.textContent=v("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),D.hidden=!1})}window.AdminSessionExpired={open:F,close:B,isOpen:function(){return I}}})()});var nt=ye(()=>{(function(){"use strict";let y="admin-reconnect-banner",B=0,j=0,F="ok",x=0,m=5e3,N=!1,D=0;function S(d){if(F!==d){if(F=d,d==="ok"||d==="dismissed"){P(),d==="ok"&&(B=0,j=0,m=5e3);return}L()}}function L(){let d=document.getElementById(y);d||(d=document.createElement("div"),d.id=y,d.className="admin-rcb",d.setAttribute("role","status"),d.setAttribute("aria-live","polite"),document.body.insertBefore(d,document.body.firstChild)),d.dataset.state=F;let t=F==="exhausted",r=t?"admin-rcb--crimson":"admin-rcb--amber";d.className=`admin-rcb ${r}`,d.innerHTML=t?b():w(),d.querySelector("[data-rcb-action='retry']")?.addEventListener("click",q),d.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>S("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",t),D||(D=setInterval(E,250))}function P(){let d=document.getElementById(y);d&&d.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),D&&(clearInterval(D),D=0)}function w(){let d=Math.max(0,(x-Date.now())/1e3),t=m/1e3,r=Math.min(100,(t-d)/t*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:j})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${r}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function b(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function E(){if(F!=="reconnecting")return;let d=document.getElementById(y);if(!d)return;let t=Math.max(0,(x-Date.now())/1e3),r=m/1e3,n=Math.min(100,(r-t)/r*100),o=d.querySelector(".admin-rcb__progress-fill");o&&(o.style.width=n+"%")}function q(){j=0,B=0,m=5e3,S("reconnecting"),A()}async function A(){try{let d=await fetch("/admin/bootstrap",{credentials:"same-origin"});d.ok?C():d.status===401||d.status===403?S("ok"):f()}catch{f()}}function C(){S("ok")}function f(){if(B+=1,j+=1,j>=10){S("exhausted");return}B>=3&&(m=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,j-1))),x=Date.now()+m,S("reconnecting"),setTimeout(A,m))}function u(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let d=window.csrfFetch,t=window.fetch;window.__adminRawFetch=t,document.addEventListener("admin:session-restored",()=>{N=!1,C()});async function r(n){try{let o=await n;return o&&o.ok?F!=="ok"&&F!=="dismissed"&&C():o&&o.status===401&&!N?(N=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):o&&o.status>=500&&f(),o}catch(o){throw f(),o}}typeof d=="function"&&(window.csrfFetch=function(){return r(d.apply(this,arguments))}),window.fetch=function(n,o){let s=typeof n=="string"?n:n&&n.url||"",e=t.call(this,n,o);return s.startsWith("/admin/")||s.indexOf("//")===-1&&s.startsWith("admin/")?r(e):e}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u()})()});var at=ye(()=>{(function(){"use strict";let y="admin-help-drawer-root",I={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},h=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],v=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function B(w){return w==null?"":String(w).replace(/[&<>"']/g,function(b){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[b]})}function j(){let w=(location.hash||"").replace("#/","").split("/")[0]||"";return I[w]?w:"_default"}function F(){return`
      <div id="${y}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function x(){let w=I[j()],b=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",E=w.titleKey?ServerI18n.t(w.titleKey):w.title,q=w.tipKeys.map(u=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${B(typeof u=="string"?ServerI18n.t(u):u.literal)}</span>
      </div>`).join(""),A=w.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${B(ServerI18n.t(w.fieldTipKey))}</span>
      </div>`:"",C=h.map(u=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${B(u.term)}</div>
        <div class="admin-help__glossary-def">${B(ServerI18n.t(u.defKey))}</div>
      </div>`).join(""),f=v.map(u=>`
      <a class="admin-help__resource" href="${B(u.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${B(u.label)}</span>
        <span class="admin-help__resource-url">${B(u.url.replace(/^https?:\/\//,""))}</span>
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
            <span class="admin-help__route-title">${B(E)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${q}</div>
          ${A}
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerShortcutsLabel")}</div>
          <button type="button" class="admin-help__shortcut" data-help-shortcuts>
            <div class="admin-help__keys"><kbd class="admin-help__kbd">?</kbd></div>
            <span class="admin-help__shortcut-desc">${B(ServerI18n.t("ksTitle"))}</span>
          </button>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerGlossaryLabel")}</div>
          <div class="admin-help__glossary">${C}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${f}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${b?"v"+B(b):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function m(){let w=document.getElementById(y);w||(document.body.insertAdjacentHTML("beforeend",F()),w=document.getElementById(y),w.addEventListener("click",b=>{if(b.target.closest("[data-help-close]")){N();return}b.target.closest("[data-help-shortcuts]")&&(N(),window.AdminShortcuts&&window.AdminShortcuts.open())})),w.querySelector("[data-help-body]").innerHTML=x(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",S)}function N(){let w=document.getElementById(y);w&&w.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",S)}function D(){document.getElementById(y)?N():m()}function S(w){w.key==="Escape"&&(w.preventDefault(),N())}function L(w){let b=w.target;b&&(b.tagName==="INPUT"||b.tagName==="TEXTAREA"||b.isContentEditable)||w.key==="F1"&&(w.preventDefault(),D())}function P(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",L)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P(),window.AdminHelp={open:m,close:N,toggle:D}})()});var it=ye(()=>{(function(){"use strict";var y="admin-shortcuts-root",I=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function h(f,u){try{var d=window.ServerI18n&&ServerI18n.t(f);return d&&d!==f?d:u}catch{return u}}function v(f,u){window.showToast&&window.showToast(f,u!==!1)}function B(f,u){return(window.csrfFetch||window.fetch)(f,u||{})}function j(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}function F(){window.AdminOverlayControl&&window.AdminOverlayControl.toggleDisplay()}function x(){window.AdminOverlayControl&&window.AdminOverlayControl.clearScreen()}async function m(){var f="idle";try{var u=await fetch("/admin/poll/status",{credentials:"same-origin"});u.ok&&(f=(await u.json()).state||"idle")}catch{}if(f==="idle"){location.hash="#/polls",v(h("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var d=f==="active";try{var t=await B(d?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!t.ok)throw new Error("HTTP "+t.status);v(h(d?"ksToastPollEnded":"ksToastPollStarted",d?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{v(h("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function N(f){return I?f.metaKey:f.ctrlKey}var D=I?"\u2318":"Ctrl",S=[{group:"global",keys:[D,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(f){return N(f)&&(f.key==="k"||f.key==="K")},run:j},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(f){return f.key==="?"&&!N(f)&&!f.altKey||f.key==="/"&&N(f)},run:function(){q()}},{group:"global",keys:[D,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u66AB\u505C\u986F\u793A\uFF0F\u7E7C\u7E8C\u986F\u793A",match:function(f){return N(f)&&f.shiftKey&&(f.key==="d"||f.key==="D")},run:F},{group:"global",keys:[D,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u756B\u9762",match:function(f){return N(f)&&f.shiftKey&&f.key==="Backspace"},run:x},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(f){return!N(f)&&"jkJK".indexOf(f.key)>=0},run:function(f){window.AdminLiveFeed.moveFocus(f.key==="j"||f.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(f){return!N(f)&&(f.key==="b"||f.key==="B")},run:function(f){window.AdminLiveFeed.blockFocused(f.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(f){return!N(f)&&f.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(f){return!N(f)&&(f.key==="p"||f.key==="P")},run:m}];function L(f){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(f):f==null?"":String(f).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})}function P(f){return S.filter(function(u){return u.group===f}).map(function(u){var d=u.keys.map(function(t){return t==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+L(t)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+L(h(u.labelKey,u.fallback))+'</span><span class="admin-ks__keys">'+d+"</span></div>"}).join("")}function w(){var f=document.getElementById(y);f&&f.remove(),document.removeEventListener("keydown",b,!0)}function b(f){(f.key==="Escape"||f.key==="?")&&(f.preventDefault(),w())}function E(){if(!document.getElementById(y)){var f=document.createElement("div");f.id=y,f.className="admin-ks",f.setAttribute("role","dialog"),f.setAttribute("aria-modal","true"),f.setAttribute("aria-labelledby","admin-ks-title"),f.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+L(h("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+L(h("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+P("global")+'</div><div class="admin-ks__group-label">'+L(h("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+P("feed")+'</div><p class="admin-ks__note">'+L(h("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+L(h("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(f),f.addEventListener("click",function(d){d.target.closest("[data-ks-close]")&&w()}),document.addEventListener("keydown",b,!0);var u=f.querySelector(".admin-ks__close");u&&setTimeout(function(){try{u.focus()}catch{}},30)}}function q(){document.getElementById(y)?w():E()}function A(f){if(!f)return!1;if(f.isContentEditable)return!0;var u=(f.tagName||"").toLowerCase();return u==="input"||u==="textarea"||u==="select"}function C(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(f){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var u=A(document.activeElement),d=0;d<S.length;d++){var t=S[d];if(t.group==="feed"){if(u||!C())continue}else if(u&&!N(f))continue;if(t.match(f)){f.preventDefault(),t.run(f);return}}}),window.AdminShortcuts={open:E,close:w,toggle:q,list:function(){return S.slice()}}})()});var st=ye(()=>{(function(){"use strict";let y="theme-mode",I="admin-theme-mode",h="admin-theme-toggle";(function(){try{if(localStorage.getItem(y)!=null)return;let L=localStorage.getItem(I);(L==="light"||L==="dark"||L==="auto")&&(localStorage.setItem(y,L),localStorage.removeItem(I))}catch{}})();function B(){try{let S=localStorage.getItem(y);if(S==="light"||S==="dark"||S==="auto")return S}catch{}return"auto"}function j(S){try{localStorage.setItem(y,S)}catch{}}function F(S){let L=document.documentElement;S==="auto"?L.removeAttribute("data-theme"):L.setAttribute("data-theme",S),m(S)}function x(S){return S==="light"||S==="dark"?S:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function m(S){let L=document.getElementById(h);if(!L)return;let P=x(S);L.dataset.mode=S,L.dataset.effective=P,L.textContent=S==="auto"?"\u25D0":P==="light"?"\u2600":"\u263E",L.title=S==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:P==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):S==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function N(){let S=B(),L=S==="auto"?"light":S==="light"?"dark":"auto";j(L),F(L)}function D(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let S=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,L=document.getElementById(h);if(L){S&&L.classList.contains("admin-theme-toggle--floating")&&S.parentNode&&!S.parentNode.contains(L)&&(L.classList.remove("admin-theme-toggle--floating"),S.parentNode.insertBefore(L,S));return}let P=document.createElement("button");P.id=h,P.type="button",P.className="admin-theme-toggle",P.addEventListener("click",N),S&&S.parentNode?S.parentNode.insertBefore(P,S):(P.classList.add("admin-theme-toggle--floating"),document.body.appendChild(P)),m(B())}if(F(B()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{B()==="auto"&&m("auto")})}catch{}window.addEventListener("storage",S=>{S.key===y&&F(B())}),window.AdminThemeSwitcher={getMode:B,setMode:function(S){S!=="auto"&&S!=="light"&&S!=="dark"||(j(S),F(S),m(S),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:S}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0})}):(D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0}))})()});var ot=ye(()=>{(function(){"use strict";var y={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},I=[];window.DanmuStore={get:function(h){return y[h]},set:function(h,v){y[h]=v,I.forEach(function(B){B(h,v)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+h,v)},subscribe:function(h){I.push(h)},getAll:function(){return Object.assign({},y)}}})()});var rt=ye(()=>{(function(){"use strict";let h=0;function v(){return window.__adminCtx||{}}function B(){let m=v();return typeof m.getSettings=="function"?m.getSettings()||{}:{}}function j(){let m=B();if(m&&typeof m.OpsContact<"u"){let N=m.OpsContact;if(Array.isArray(N))return N[3]||N[0]||null;if(typeof N=="string")return N}return null}function F(){let m=v().appContainer||document.getElementById("app-container");if(!m)return;let N=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";m.innerHTML=`
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
    `;let D=m.querySelector("[data-login-reveal]");D&&D.addEventListener("click",()=>{let w=document.getElementById("password");if(!w)return;let b=w.type==="text";w.type=b?"password":"text",D.textContent=ServerI18n.t(b?"adminLoginReveal":"adminLoginHide");try{w.focus()}catch{}});let S=document.getElementById("loginForm"),L=document.getElementById("password"),P=document.getElementById("loginAttemptsHint");if(S){try{let w=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(w)&&w>0){h=w;let b=Math.max(0,5-h);if(P&&h>0&&b>0){P.hidden=!1;let E=document.getElementById("password");E&&E.classList.add("is-error"),P.textContent=ServerI18n.t("loginAttemptsRemaining",{n:b})}}}catch{}S.addEventListener("submit",async w=>{if(w.preventDefault(),!L)return;let b=new URLSearchParams;b.set("password",L.value),document.getElementById("admin-login-remember")?.checked&&b.set("remember","1");try{let E=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b.toString(),redirect:"manual"});if(E.status===429){let q=E.headers.get("Retry-After"),A=parseInt(q,10),C=Number.isFinite(A)&&A>0?A:300;x(C);return}h+=1;try{sessionStorage.setItem("admin_login_attempts",String(h))}catch{}window.location.reload()}catch(E){console.error("Login submit failed:",E),P&&(P.hidden=!1,P.textContent=ServerI18n.t("networkError"))}})}}function x(m){let N=document.getElementById("adminLoginCard");if(!N)return;let D=j(),S=D?`<a class="admin-lockout-contact" href="${D}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";N.classList.add("admin-lockout-card"),N.innerHTML=`
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
    `;let L=document.getElementById("lockoutCountdown"),P=m,w=E=>{let q=Math.floor(E/60),A=E%60;return`${String(q).padStart(2,"0")}:${String(A).padStart(2,"0")}`};L&&(L.textContent=w(P));let b=setInterval(()=>{P-=1,L&&(L.textContent=w(Math.max(0,P))),P<=0&&(clearInterval(b),h=0,F(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:F,renderLockout:x}})()});var dt=ye(()=>{(function(){"use strict";function y(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function I(a){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(a):String(a??"").replace(/[&<>"']/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[i])}async function h(){try{let a=y();await a.prime();let i=a.get("history_stats"),[c,p,T]=await Promise.all([i?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!p.ok)return;let k=i||(c&&c.ok?await c.json():null);if(!k)return;let _=(await p.json()).distribution||[],M=k.stats&&k.stats.total||0,R=_.reduce((G,te)=>te.count>(G?.count||-1)?te:G,null),K=R?R.count:0,$=R?(R.hour||"").slice(-5):"\u2014",O=document.querySelector('[data-kpi="messages"]');O&&(O.querySelector("[data-kpi-value]").textContent=M.toLocaleString());let U=document.querySelector('[data-kpi="peak"]');U&&(U.querySelector("[data-kpi-value]").textContent=K.toLocaleString());let J=document.querySelector('[data-kpi="unique-fp"]');if(J){let G=new Set;(k.records||[]).forEach(te=>{let ne=te.fingerprint||te.fp||te.user_fingerprint;ne&&G.add(ne)}),J.querySelector("[data-kpi-value]").textContent=G.size.toLocaleString()}let W=document.querySelector('[data-kpi="session"]');if(W){let G=T&&T.ok?await T.json():null,te=G&&G.status==="live",ne=W.querySelector("[data-kpi-value]");if(te&&G.started_at){let z=Math.max(0,Math.floor(Date.now()/1e3-G.started_at)),Q=Math.floor(z/3600),Z=Math.floor(z%3600/60);ne.textContent=Q>0?`${Q}:${String(Z).padStart(2,"0")}:${String(z%60).padStart(2,"0")}`:`${Z}:${String(z%60).padStart(2,"0")}`}else ne.textContent="\u2014"}}catch{}}function v(a,i){let c=document.querySelector(a);if(c){if(typeof i!="number"||i<=0){c.hidden=!0;return}c.hidden=!1,c.textContent=i>999?"999+":String(i)}}async function B(){try{let a=y();await a.prime();let i=a.get("blacklist"),c=a.get("widgets"),p=a.get("history_stats"),T=a.get("effects"),k=a.get("themes");v("[data-count-blacklist]",Array.isArray(i)?i.length:0),v("[data-count-widgets]",Array.isArray(c?.widgets)?c.widgets.length:0),v("[data-count-messages]",p?.stats?.last_24h||0),v("[data-count-effects]",Array.isArray(T?.effects)?T.effects.length:0),v("[data-count-themes]",Array.isArray(k?.themes)?k.themes.length:0);try{let _=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(_.ok){let M=await _.json();v("[data-count-plugins]",Array.isArray(M?.plugins)?M.plugins.length:0)}}catch{}}catch{}}async function j(){B(),F(),l()}async function F(){let a=document.querySelector("[data-dash-poll-body]"),i=document.querySelector("[data-dash-poll-timer]");if(a)try{let c=y();await c.prime();let T=c.get("metrics");if(!T){let K=await fetch("/admin/metrics",{credentials:"same-origin"});if(!K.ok)return;T=await K.json()}let k=T.poll_state;if(!k||!k.active||!Array.isArray(k.options)||k.options.length===0){a.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,i&&(i.textContent="");return}let _=k.options.reduce((K,$)=>K+($.votes||0),0),M=["A","B","C","D","E","F"],R=0;if(k.options.forEach((K,$)=>{(K.votes||0)>(k.options[R].votes||0)&&(R=$)}),a.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${I(k.question||ServerI18n.t("dashPollRunning"))}</div>`+k.options.map((K,$)=>{let O=_?Math.round(K.votes/_*100):0;return`
            <div class="admin-dash-poll-opt ${$===R&&_>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${M[$]||String($+1)}</span>
                <span class="label">${I(K.label||"")}</span>
                <span class="pct">${O}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:K.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${O}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:_})}</div>`,i){let K=k.remaining_seconds;i.textContent=typeof K=="number"&&K>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(K/60),ss:String(K%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function x(a){let i=a.visible!==!1,c=a.config&&a.config.title||a.type||"widget",p=(a.type||"widget").toUpperCase(),T=(a.position||"\u2014").toUpperCase(),k=i?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",_=a.created_at&&i?Math.max(0,Math.floor(Date.now()/1e3-a.created_at)):null,M=_!=null?(()=>{let R=Math.floor(_/86400),K=Math.floor(_%86400/3600),$=Math.floor(_%3600/60),O=_%60;return R>0?`UPTIME \xB7 ${R}d ${String(K).padStart(2,"0")}h`:K>0?`UPTIME \xB7 ${K}:${String($).padStart(2,"0")}:${String(O).padStart(2,"0")}`:`UPTIME \xB7 ${$}:${String(O).padStart(2,"0")}`})():`STATUS \xB7 ${i?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${I(a.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${k}"></span>
          <span class="kind">${I(p)}</span>
          <span class="cat">${I(T)}</span>
        </div>
        <div class="title">${I(c)}</div>
        <div class="uptime">${M}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${i?" is-active":""}" data-widget-action="toggle" data-running="${i?"1":"0"}">${i?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function m(a,i){try{let c=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:a,config:{visible:!i}})});if(!c.ok)throw new Error("HTTP "+c.status);D()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function N(a){a.dataset.bound!=="1"&&(a.dataset.bound="1",a.addEventListener("click",i=>{let c=i.target.closest(".admin-dash-widget-tile");if(!c)return;let p=i.target.dataset.widgetAction,T=c.dataset.widgetId;if(!(!p||!T)){if(p==="toggle")m(T,i.target.dataset.running==="1");else if(p==="config"){let k=document.querySelector('[data-route="widgets"]');k&&k.click()}}}))}async function D(){let a=document.querySelector("[data-dash-widgets]");if(a)try{let i=y();await i.prime();let c=i.get("widgets");if(!c){let T=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!T.ok){a.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}c=await T.json()}let p=(c.widgets||c.items||[]).slice(0,4);if(p.length===0){a.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}a.innerHTML='<div class="admin-dash-widget-grid">'+p.map(x).join("")+"</div>",N(a)}catch{a.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let S=null,L=null,P=null;function w(a){let i=Math.max(0,Math.floor(Date.now()/1e3-a)),c=Math.floor(i/3600),p=Math.floor(i%3600/60),T=i%60;return c>0?`${c}:${String(p).padStart(2,"0")}:${String(T).padStart(2,"0")}`:`${String(p).padStart(2,"0")}:${String(T).padStart(2,"0")}`}function b(a){let i=document.getElementById("admin-session-banner"),c=document.getElementById("sec-live-feed");if(c&&c.classList.toggle("is-idle-collapsed",!(a&&a.status==="live")),i&&i.classList.toggle("is-hero",!(a&&a.status==="live")),!i)return;if(S=a,!(a&&a.status==="live"))i.hidden=!1,i.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let T=a.started_at||Date.now()/1e3;i.hidden=!1,i.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${I(a.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
        </div>`,E(T)}i.dataset.bound||(i.dataset.bound="1",i.addEventListener("click",A))}function E(a){P&&clearInterval(P);let i=()=>{let c=document.querySelector("[data-sess-timer]");c&&(c.textContent=w(a))};i(),P=setInterval(i,1e3)}function q(){P&&(clearInterval(P),P=null)}async function A(a){let i=a.target.closest("[data-sess-action]");if(!i)return;let c=i.dataset.sessAction;if(c==="open"){let p=document.querySelector("[data-sess-name]"),T=(p?p.value:"").trim();if(!T){p&&p.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}i.disabled=!0;try{let k=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:T})}),_=await k.json();if(!k.ok){window.showToast&&window.showToast(_.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:T}),!0),b(_.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{i.disabled=!1}}else if(c==="close"){let p=i.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",T=(M,R)=>`<option value="${M}"${M===p?" selected":""}>${R}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${T("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${T("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${T("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;i.disabled=!0;let _=document.getElementById("sessCloseBehavior")?.value;if(_&&_!==p)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:_})})}catch{}try{let M=await window.csrfFetch("/admin/session/close",{method:"POST"}),R=await M.json();if(!M.ok){window.showToast&&window.showToast(R.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),q(),b({status:"idle",viewer_end_behavior:R.archived&&R.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{i.disabled=!1}}}async function C(){try{let a=await fetch("/admin/session/current",{credentials:"same-origin"});if(!a.ok)return;let i=await a.json();b(i)}catch{}}function f(){C(),L&&clearInterval(L),L=setInterval(C,1e4)}function u(){L&&(clearInterval(L),L=null),q()}let d=null,t=null,r=0;function n(){let a=document.querySelector("[data-cockpit-overlay]"),i=window.AdminOverlayControl,c=t;if(!a||!i||!c)return;a.classList.toggle("is-on",c.live);let p=(_,M)=>{_.textContent!==M&&(_.textContent=M)},T=a.querySelector("[data-cockpit-status]");T&&p(T,i.statusText(c.live,c.count));let k=a.querySelector('[data-cockpit-action="toggle"]');k&&(k.dataset.i18n=i.toggleKey(c.live),p(k,ServerI18n.t(k.dataset.i18n)),k.dataset.next=c.live?"standby":"live")}async function o(){let a=document.querySelector("[data-cockpit-overlay]");if(!a||a.offsetParent===null)return;let i=r,c=null,p=null;try{let _=await fetch("/overlay_status",{credentials:"same-origin"});_.ok&&(c=(await _.json()).overlay_count||0)}catch{}try{let _=await fetch("/admin/broadcast/status",{credentials:"same-origin"});_.ok&&(p=(await _.json()).mode==="live")}catch{}let T=t;if(!T&&p===null)return;t={live:p!==null&&i===r?p:T?T.live:p,count:c!==null?c:T?T.count:0},n()}document.addEventListener("admin-overlay-state",a=>{let i=a&&a.detail||{};r+=1,t={live:!!i.live,count:typeof i.count=="number"?i.count:t?t.count:0},n()}),document.addEventListener("admin-route-applied",a=>{let i=a&&a.detail&&a.detail.route;i!=="live"&&i!=="dashboard"||(n(),o())});function s(){let a=document.querySelector("[data-cockpit-overlay]");if(!a||a.dataset.bound)return;a.dataset.bound="1",a.addEventListener("click",async p=>{let T=p.target.closest("[data-cockpit-action]");if(!T)return;let k=T.dataset.cockpitAction;if(k==="clear"){window.AdminOverlayControl?.clearScreen();return}k==="toggle"&&(await window.AdminOverlayControl?.setDisplay(T.dataset.next==="live"),o())});let i=a.parentElement&&a.parentElement.querySelector('[data-cockpit-action="idle-qr"]');i&&i.addEventListener("click",e);let c=a.parentElement&&a.parentElement.querySelector('[data-cockpit-action="poll"]');c&&c.addEventListener("click",()=>{location.hash="#/polls"})}async function e(){let a;try{let p=await fetch("/admin/qr/public",{credentials:"same-origin"});if(!p.ok)throw new Error("HTTP "+p.status);a=await p.json()}catch{window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1);return}let i=document.createElement("div");i.className="admin-soh-qr",i.innerHTML=a.svg,await window.HudConfirm?.open({icon:"\u25A6",titleText:a.url,body:i,severity:"info",confirmLabel:ServerI18n.t("copyBtn"),cancelLabel:ServerI18n.t("close"),width:360})&&window.AdminUtils.copyText(a.url)}function l(){s(),o(),d&&clearInterval(d),d=setInterval(o,5e3)}function g(){d&&(clearInterval(d),d=null)}window.AdminDashboard={refreshKpi:h,refreshSummary:j,refreshSidebarBadges:B,populatePoll:F,populateWidgets:D,refreshSessionBanner:C,startSessionPolling:f,stopSessionPolling:u,refreshCockpitOverlay:o,renderCockpitOverlay:n,startCockpitPolling:l,stopCockpitPolling:g}})()});var lt=ye(()=>{(function(){"use strict";let y="sec-viewer-config-defaults",I=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],v=window.AdminUtils&&window.AdminUtils.escapeHtml||function(H){return String(H).replace(/[&<>"']/g,function(V){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[V]})},B={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}},j=[14,20,32,44,64],F=window.DANMU_CONFIG?.defaultColorPalette||[],x=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function m(H,V){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let Y=window.ServerI18n.t(H,V);if(Y&&Y!==H)return Y}return H}let N={};function D(H){if(N[H]!=null)return N[H];let V=B[H];return V?V.step:1}function S(H,V){N[H]=Number(V)||D(H)}let L={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",paletteInvalid:!1,palettePreview:null,paletteNotice:null},P=["Color","FontFamily","Layout"];function w(H){return P.indexOf(H)!==-1}function b(H){let V=L.options&&L.options[H],Y=V&&V[1];return Array.isArray(Y)?Y.slice():[]}function E(H){return H==="Color"?F.map(V=>V.replace(/^#/,"").toUpperCase()):H==="Layout"?x.map(V=>V.value):H==="FontFamily"?(L.fonts&&L.fonts.length?L.fonts:["NotoSansTC","Inter"]).map(Y=>typeof Y=="string"?Y:Y.name||Y.family||"").filter(Boolean):[]}function q(H,V){return H==="Color"?String(V||"").replace(/^#/,"").toUpperCase():String(V||"")}function A(){return`
      <div id="${y}" class="lg:col-span-2" data-tpl="C">
        <!-- \u540C\u4E00\u4EFD\u9762\u677F\u670D\u52D9\u5169\u689D\u8DEF\u7531\u3002\u986F\u793A\u5C64 (values) \u4E0A\u5B83\u662F\u6B21\u8981\u8A2D\u5B9A\uFF0C\u6536\u9032\u9810\u8A2D
             \u6536\u5408\u7684 details\uFF0Csummary \u5C31\u662F\u6A19\u984C\uFF1B\u89C0\u773E\u9801 (audience) \u4E0A\u5B83\u662F\u4E3B\u9AD4\uFF0C
             syncVisibility \u628A\u5B83\u5C55\u958B\u3001summary \u85CF\u8D77\u4F86\u3002 -->
        <details class="admin-dsp2-fold" data-dsp-fold>
        <summary class="admin-ui-page-title" data-dsp-only="values" data-i18n="displayValuesTitle">${v(m("displayValuesTitle"))}</summary>
        <div class="admin-dsp2-page hud-page-stack">
        <div class="admin-ui-page-head" data-dsp-only="audience">
          <h2 class="admin-ui-page-title" data-i18n="viewerGroupAudience">${v(m("viewerGroupAudience"))}</h2>
          <p class="admin-ui-page-note">${m("displayViewerDefaultsNote")}</p>
        </div>

        <!-- \u986F\u793A\u5C64\u5C08\u5C6C\uFF1A\u5927\u87A2\u5E55\u600E\u9EBC\u6392\uFF082026-08-19 \u8A2D\u8A08\u7A3F 07 \xB7 R1\uFF09\u3002
             \u9019\u56DB\u500B\u548C\u4E0A\u9762\u90A3\u7D44\u4E0D\u540C\u7A2E\u985E\u2014\u2014\u4E0A\u9762\u662F\u300C\u89C0\u773E\u7AEF\u7684\u503C\u300D\uFF0C\u9019\u88E1\u662F
             \u300C\u5927\u87A2\u5E55\u672C\u8EAB\u7684\u6392\u7248\u300D\uFF0C\u89C0\u773E\u6C38\u9060\u78B0\u4E0D\u5230\uFF0C\u6240\u4EE5\u4E0D\u9032 ROWS \u90A3\u5F35\u8868\u3002 -->
        <div data-dsp-only="values">
          <div class="admin-ui-group-label">${v(m("dlGroupLayout"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${v(m("dlMaxTracks"))}
                <span class="sub">${v(m("dlMaxTracksHint"))}</span>
              </span>
              <span class="val admin-ui-stepper" data-dl-stepper="max_tracks">
                <button type="button" data-dl-step="-1">\u2212</button>
                <span class="stepper-val" data-dl-value="max_tracks">\u2014</span>
                <button type="button" data-dl-step="1">+</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${v(m("dlAvoidOverlap"))}
                <span class="sub">${v(m("dlAvoidOverlapHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="avoid_overlap" />
              </span>
            </div>
          </div>

          <div class="admin-ui-group-label">${v(m("dlGroupArea"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${v(m("dlAreaTop"))}</span>
              <span class="val">
                <input type="range" min="0" max="90" step="5" data-dl-range="area_top" />
                <span class="stepper-val" data-dl-value="area_top">\u2014</span>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${v(m("dlAreaHeight"))}</span>
              <span class="val">
                <input type="range" min="10" max="100" step="5" data-dl-range="area_height" />
                <span class="stepper-val" data-dl-value="area_height">\u2014</span>
              </span>
            </div>
          </div>

          <!-- \u6295\u5F71\u5B89\u5168\u5340\u8207\u6DFA\u5E95\u63CF\u908A\uFF08\u8A2D\u8A08\u7A3F 16 \xB7 OS1\uFF0FOS2\uFF09\u3002\u986F\u793A\u5C64\u90A3\u534A\u65E9\u5C31
               \u5BEB\u597D\u4E86\uFF08child.css \u7684 --overlay-safe\u3001stage-luminance \u7684 setForced\uFF09\uFF0C
               \u7F3A\u7684\u4E00\u76F4\u662F\u9019\u5169\u5217\u2014\u2014\u5B89\u5168\u5340\u6C38\u9060\u505C\u5728\u5BEB\u6B7B\u7684 5%\uFF0C\u63CF\u908A\u6A21\u5F0F\u6C92\u6709\u5165\u53E3\u3002 -->
          <div class="admin-ui-group-label">${v(m("dlGroupStage"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${v(m("dlSafeArea"))}
                <span class="sub">${v(m("dlSafeAreaHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="safe_area">
                <button type="button" data-dl-opt="0">0%</button>
                <button type="button" data-dl-opt="5">5%</button>
                <button type="button" data-dl-opt="8">8%</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${v(m("dlStrokeMode"))}
                <span class="sub">${v(m("dlStrokeModeHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="stroke_mode">
                <button type="button" data-dl-opt="auto">${v(m("dlStrokeAuto"))}</button>
                <button type="button" data-dl-opt="always">${v(m("dlStrokeAlways"))}</button>
                <button type="button" data-dl-opt="never">${v(m("dlStrokeNever"))}</button>
              </span>
            </div>

            <!-- 2026-09-08\uFF1A\u6295\u7968\u662F\u7528\u300C\u9001\u51FA\u9078\u9805\u4EE3\u865F\u7576\u5F48\u5E55\u300D\u5BE6\u4F5C\u7684\uFF0C\u6240\u4EE5\u6253\u5B57\u6295\u7968
                 \u7684\u4EBA\u6703\u8B93\u5927\u87A2\u5E55\u51FA\u73FE\u4E00\u6574\u7247 A / B / C / D\u3002\u4E0D\u85CF\u8D77\u4F86\u2014\u2014\u770B\u5F97\u5230\u5927\u5BB6\u5728
                 \u6295\u7968\u672C\u8EAB\u5C31\u662F\u6C23\u6C1B\u2014\u2014\u800C\u662F\u8ABF\u6697\uFF0C\u8B93\u771F\u6B63\u7684\u7559\u8A00\u4ECD\u7136\u8B80\u5F97\u5230\u3002
                 \u4E00\u6B21\u6309\u4E0B\u5373\u6295\u7968\uFF08POST /poll/vote\uFF09\u6839\u672C\u4E0D\u7522\u751F\u5F48\u5E55\uFF0C\u4E0D\u53D7\u9019\u88E1\u5F71\u97FF\u3002 -->
            <div class="admin-ui-group-row">
              <span class="lbl">${v(m("dlDimPollVotes"))}
                <span class="sub">${v(m("dlDimPollVotesHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="dim_poll_votes" />
              </span>
            </div>
            <div class="admin-ui-group-row is-tall" data-dl-row="poll_vote_opacity">
              <span class="lbl">${v(m("dlPollVoteOpacity"))}
                <span class="sub">${v(m("dlPollVoteOpacityHint"))}</span>
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
              <span>${v(m("displayColParam"))}</span>
              <span data-dsp-only="values">${v(m("displayColValue"))}</span>
              <span class="admin-dsp2-list-head-right" data-dsp-only="audience">${v(m("displayColAudience"))}</span>
            </div>
            <div id="dsp2-rows">
              ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):v(m("loading"))}
            </div>
          </div>

          <!-- Right rail -->
          <div class="admin-dsp2-rail">
            <div class="admin-dsp2-card admin-dsp2-preview" id="dsp2-preview">
              <div class="admin-dsp2-preview-head">
                <span class="admin-ui-monolabel">${ServerI18n.t("mlLivePreview")}</span>
                <span class="admin-dsp2-preview-sync">
                  <span class="admin-dsp2-dot"></span>
                  ${v(m("displayPreviewSync"))}
                </span>
              </div>
              <div class="admin-dsp2-preview-stage" data-preview-stage>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-1" data-preview-pill="1">
                  <span class="admin-dsp2-preview-tag">@guest#1284</span>
                  <span data-preview-text>${v(m("displayPreviewSample1"))}</span>
                </div>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-2" data-preview-pill="2">
                  <span class="admin-dsp2-preview-tag">@annie</span>
                  <span>${v(m("displayPreviewSample2"))}</span>
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
                <span>${v(m("displayAutoSyncTitle"))}</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:4px;background:var(--hud-cyan-soft);border:1px solid var(--color-primary)">
                <span aria-hidden="true" style="width:7px;height:7px;border-radius:50%;background:var(--color-primary);box-shadow:0 0 6px var(--color-primary);animation:hud-pulse 2s ease-in-out infinite"></span>
                <div style="flex:1;min-width:0">
                  <div style="font-family:var(--font-mono);font-size:11px;color: var(--color-ink-accent);letter-spacing:0.1em;font-weight:700">${v(m("displayAutoSyncLive"))}</div>
                  <div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);margin-top:2px;letter-spacing:0.04em">${v(m("displayAutoSyncNote"))}</div>
                </div>
              </div>
              <div style="display:flex;gap:8px">
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-revert" style="flex:1">
                  \u21BA ${v(m("displayDeployRevert"))}
                </button>
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-export" style="flex:1">
                  \u2197 ${v(m("displayExportJson"))}
                </button>
              </div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-admin-controlled" style="padding:14px;background:var(--admin-panel,var(--color-bg-base));border:1px solid var(--hud-line);border-radius:6px;display:flex;flex-direction:column;gap:10px">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span data-i18n="displayAdminControlledTitle">${v(m("displayAdminControlledTitle"))}</span>
              </div>
              <div style="display:grid;grid-template-columns:auto 1fr;gap:7px 12px;align-items:start;font-size:11px;line-height:1.45">
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="language">${v(m("language"))}</span><span data-i18n="viewerThemeFollowBrowser">${v(m("viewerThemeFollowBrowser"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlPlaceholder">${v(m("displayAdminCtlPlaceholder"))}</span><span data-i18n="displayPlaceholderExample">${v(m("displayPlaceholderExample"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlSubmit">${v(m("displayAdminCtlSubmit"))}</span><span data-i18n="fireDanmu">${v(m("fireDanmu"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlPollPrompt">${v(m("displayAdminCtlPollPrompt"))}</span><span data-i18n="displayPollPromptExample">${v(m("displayPollPromptExample"))}</span>
              </div>
              <div style="padding-top:8px;border-top:1px solid var(--hud-line);font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);line-height:1.6"
                   data-i18n="displayAdminControlledNote">${v(m("displayAdminControlledNote"))}</div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-summary" id="dsp2-summary">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span>${v(m("displaySummaryTitle"))}</span>
              </div>
              <div class="admin-dsp2-summary-list" data-summary-list></div>
            </div>
          </div>
        </div>
        </div>
        </details>
      </div>`}let C=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:H=>`${Math.round(H)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:H=>`${H}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:H=>`${(+H).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:H=>`#${String(H||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:H=>H||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:H=>f(H),noRange:!0}];function f(H){let V=x.find(Y=>Y.value===H);return V?m(V.labelKey):H||"\u2014"}function u(H,V){let Y=V[0]!==!1,X=V[3],le=B[H.key];if(H.key==="Opacity"||H.key==="Speed"){let ue=le,pe=X!=null?Number(X):ue.min,ge=isFinite(pe)?pe:ue.min,be=(ge-ue.min)/Math.max(1e-6,ue.max-ue.min)*100;return`
        <div class="admin-dsp2-track" data-track="${H.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${H.key}" data-num-index="3"
            min="${ue.min}" max="${ue.max}" step="${D(H.key)}" value="${v(String(ge))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${be.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${be.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${H.key}"
              min="${ue.min}" max="${ue.max}" step="${D(H.key)}" value="${v(String(ge))}" />
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
          ${s().map(pe=>{let ge=pe.slice(1),be=pe.toUpperCase()===ue;return`<button type="button" class="admin-dsp2-swatch ${be?"is-active":""}"
              data-chip-key="Color" data-chip-value="${ge}"
              style="background:${pe}" aria-label="${pe}" aria-pressed="${be}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${v(m("specificColor"))}">
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${v(ue)}" />
          </label>
        </div>
      `}if(H.key==="FontFamily"){let ue=(L.fonts&&L.fonts.length?L.fonts:["NotoSansTC","Inter"]).map(Ie=>{let Te=typeof Ie=="string"?Ie:Ie.name||Ie.family||"",$e=typeof Ie=="string"?Ie:Ie.label||Ie.name||Ie.family||"";return{value:Te,label:$e}}).filter(Ie=>Ie.value),pe=String(X||""),ge=!!L.allowlistEdit.FontFamily,be=ge?L.allowlistEdit.FontFamily:new Set(b("FontFamily").map(Ie=>q("FontFamily",Ie))),he=!ge&&be.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ue.map(Ie=>{let Te=Ie.value===pe,$e=ge?be.has(Ie.value):he||be.has(Ie.value),Le=["admin-dsp2-tchip",Te?"is-active":"",ge?"is-editing":"",$e?"":"is-blocked"].filter(Boolean).join(" "),Ce=ge?`data-allow-key="FontFamily" data-allow-value="${v(Ie.value)}"`:`data-chip-key="FontFamily" data-chip-value="${v(Ie.value)}"`;return`<button type="button" class="${Le}" ${Ce}
              aria-pressed="${$e?"true":"false"}">
              ${ge?`<span class="admin-dsp2-allow-mark">${$e?"\u2713 ":""}</span>`:""}${v(Ie.label)}
            </button>`}).join("")}
        </div>
        ${d(H)}
      `}if(H.key==="Layout"){let ue=String(X||"scroll"),pe=!!L.allowlistEdit.Layout,ge=pe?L.allowlistEdit.Layout:new Set(b("Layout").map(he=>q("Layout",he))),be=!pe&&ge.size===0;return`
        <div class="admin-dsp2-tiles">
          ${x.map(he=>{let Ie=he.value===ue,Te=pe?ge.has(he.value):be||ge.has(he.value),$e=["admin-dsp2-tile",Ie?"is-active":"",pe?"is-editing":"",Te?"":"is-blocked"].filter(Boolean).join(" "),Le=pe?`data-allow-key="Layout" data-allow-value="${he.value}"`:`data-chip-key="Layout" data-chip-value="${he.value}"`;return`<button type="button" class="${$e}" ${Le}
              aria-pressed="${Te?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${he.icon}</span>
              <span class="admin-dsp2-tile-label">${m(he.labelKey)}</span>
              ${pe?`<span class="admin-dsp2-allow-mark">${Te?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${d(H)}
      `}return""}function d(H){if(!w(H.key))return"";let V=!!L.allowlistEdit[H.key],Y=b(H.key),X=E(H.key).length||0,le=Y.length>0?m("displayAllowSummaryPartial",{n:Y.length,total:X,label:t(H.key)}):m("displayAllowSummaryAll",{total:X});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${H.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${H.key}">${v(le)}</span>
        ${V?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${H.key}">${v(m("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${H.key}">${v(m("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${H.key}">${v(m("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${H.key}" title="${v(m("displayEditAllowlistTitle"))}">[${v(m("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function t(H){return m(H==="Color"?"displayLabelColor":H==="FontFamily"?"displayLabelFontFamily":H==="Layout"?"displayLabelLayout":"displayLabelOption")}function r(H,V){if(H.noRange||!(V[0]!==!1))return"";let X=B[H.key],le=V[1]!=null?V[1]:X.min,ue=V[2]!=null?V[2]:X.max,pe=D(H.key);return`
      <div class="admin-dsp2-band">
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${v(m("displayMinAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${H.key}" data-num-index="1"
              min="${X.min}" max="${X.max}" step="${pe}" value="${v(String(le))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${v(m("displayMaxAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${H.key}" data-num-index="2"
              min="${X.min}" max="${X.max}" step="${pe}" value="${v(String(ue))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlStep")}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${H.key}" data-num-index="step"
              min="0.1" step="0.1" value="${v(String(pe))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
      </div>`}function n(H,V){let Y=V[0]!==!1,X=V[3],le=H.fmt?H.fmt(X):X!=null?String(X):"\u2014",ue=H.key==="Layout";return`
      <div class="admin-dsp2-row ${Y?"is-on":"is-off"} ${ue?"is-last":""}" data-row-key="${H.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${v(m(H.labelKey))}</div>
          <div class="admin-dsp2-value-badge ${Y?"is-on":""}" data-value-badge>${v(le)}</div>
        </div>
        <div class="admin-dsp2-cell-center">
          <!-- \u63D0\u793A\u5169\u5957\u4E26\u5B58\uFF0CCSS \u4F9D data-dsp-mode \u64C7\u4E00\u3002\u986F\u793A\u5C64\u8B1B\u7684\u662F\u300C\u5927\u87A2\u5E55
               \u4E0A\u5C31\u662F\u9019\u500B\u503C\u300D\uFF1B\u89C0\u773E\u9801\u8B1B\u7684\u662F\u300C\u89C0\u773E\u62D6\u6ED1\u687F\u6642\u5F9E\u54EA\u88E1\u958B\u59CB\u300D\u3002 -->
          <div class="admin-dsp2-cell-hint" data-dsp-only="values">
            <span class="admin-dsp2-cell-hint-arrow">\u25B8</span>
            ${v(m("displayHintBigScreen"))}
          </div>
          <div class="admin-dsp2-cell-hint" data-dsp-only="audience">
            <span class="admin-dsp2-cell-hint-arrow">\u25B8</span>
            ${v(m(Y?"displayHintAudienceOn":"displayHintAudienceOff"))}
          </div>
          <div class="admin-dsp2-picker" data-picker-host>${u(H,V)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${r(H,V)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">
          <button type="button" class="admin-dsp2-pill ${Y?"is-on":""}"
            data-toggle-key="${H.key}" aria-pressed="${Y?"true":"false"}">
            <span class="admin-dsp2-pill-track"><span class="admin-dsp2-pill-thumb"></span></span>
            <span class="admin-dsp2-pill-label">${v(m(Y?"displayCustomizable":"displayLocked"))}</span>
          </button>
          <div class="admin-dsp2-toggle-hint">
            ${v(Y?m("displayToggleHintOn"):H.noRange?m("displayToggleHintOffPick"):m("displayToggleHintOffSlider"))}
          </div>
        </div>
      </div>`}function o(){let H=document.getElementById("dsp2-rows");if(H){if(!L.options){H.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):v(m("loading"))}`;return}H.innerHTML=C.map(V=>n(V,L.options[V.key]||[!1,"","",""])).join(""),a(),p(),T()}}function s(){let H=b("Color");return[...new Set((H.length?H:F).map(V=>"#"+String(V).replace(/^#/,"").toUpperCase()).filter(V=>/^#[0-9A-F]{6}$/.test(V)))]}function e(H){let V=H.slice(1).match(/.{2}/g).map(Y=>{let X=parseInt(Y,16)/255;return X<=.04045?X/12.92:((X+.055)/1.055)**2.4});return V[0]*.2126+V[1]*.7152+V[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function l(H,V="error"){L.paletteNotice={message:H,type:V};let Y=document.querySelector("[data-palette-feedback]");Y&&(Y.textContent=H,Y.classList.toggle("is-error",V==="error"))}function g(H,V=!0){let Y=document.querySelector("[data-admin-color-palette]"),X=Y?.querySelector("[data-palette-preview-text]");!X||!/^#[0-9A-F]{6}$/i.test(H)||(L.palettePreview=H.toUpperCase(),X.style.color=H,Y.querySelector("[data-palette-preview-code]").textContent=H.toUpperCase(),Y.querySelectorAll("[data-palette-preview]").forEach(le=>{let ue=le.dataset.palettePreview===H.toUpperCase();le.setAttribute("aria-pressed",String(ue)),le.closest(".admin-color-palette-chip").classList.toggle("is-previewing",ue)}),V&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(X.getAnimations().forEach(le=>le.cancel()),X.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function a(){let H=document.querySelector("[data-admin-color-palette]");if(!H||!L.options)return;let V=s(),Y=(L.options.ViewerColorPicker||[!0])[0]!==!1,X=L.paletteBusy?"disabled":"",le=L.palettePreview||V[0],ue=v(L.paletteDraft),pe=L.paletteNotice;H.setAttribute("aria-busy",String(L.paletteBusy)),H.innerHTML=`
      <div class="admin-color-palette-head">
        <div>
          <!-- 2026-10-29\uFF1Akey \u5F9E viewerPaletteEyebrow \u6539\u540D\u70BA viewerPaletteLabel\u3002
               \u6587\u6848\u6C92\u8B8A\uFF1B\u8A2D\u8A08\u5951\u7D04\u7981\u7684\u662F *Eyebrow / *Kicker \u9019\u7A2E\u547D\u540D\uFF08\u90A3\u4EE3\u8868
               \u300C\u4E2D\u6587\u6A19\u7C64\u65C1\u908A\u518D\u64FA\u4E00\u884C\u5927\u5BEB\u82F1\u6587\u300D\u7684\u820A\u7248\u578B\uFF09\u3002\u9019\u88E1\u7684 eyebrow \u662F
               \u4F7F\u7528\u8005\u8A9E\u8A00\u7684\u5C0F\u6A19\uFF0C\u8207\u4E0B\u65B9\u6A19\u984C\u4E0D\u91CD\u8907\u3002 -->
          <span class="admin-color-palette-eyebrow">${v(m("viewerPaletteLabel"))}</span>
          <h3 class="admin-color-palette-title">${v(m("viewerPaletteTitle"))}</h3>
          <p class="admin-color-palette-note">${v(m("viewerPaletteHint"))}</p>
        </div>
        <span class="admin-color-palette-count"><strong data-palette-count>${V.length}</strong><span>${v(m("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${V.map((ge,be)=>`<div class="admin-color-palette-chip" style="--palette-color:${ge};--palette-ink:${e(ge)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${ge}"
                aria-label="${v(m("viewerPalettePreviewColor",{color:ge}))}" aria-pressed="${ge===le}" ${X}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(be+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${ge}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${ge}" ${V.length<=1?"disabled":X}
                aria-label="${v(m("viewerPaletteRemove",{color:ge}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${v(m("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${v(m("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(L.paletteDraft)?ue:"#38bdf8"}" data-palette-picker ${X} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${ue}"
                ${L.paletteInvalid?'aria-invalid="true"':""}
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${X} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${V.length>=64?"disabled":X}>
                <span aria-hidden="true">\uFF0B</span> ${v(m("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${v(m(V.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${pe?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${pe?v(pe.message):""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${v(m("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${v(m("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${le}</span><span aria-hidden="true">\u2192</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${v(m("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${v(m("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${v(m("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${Y?"checked":""} ${X} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${v(m("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,g(le,!1)}async function i(H,V){if(L.paletteBusy)return;let Y=document.querySelector("[data-admin-color-palette]");L.paletteBusy=!0,Y.setAttribute("aria-busy","true"),Y.querySelector("[data-palette-sync-status]").textContent=m("viewerPaletteSaving"),Y.querySelectorAll("input, button").forEach(ue=>{ue.disabled=!0});let X=await M("Color",H);L.paletteBusy=!1,L.paletteNotice={type:X?"success":"error",message:m(X?"viewerPaletteSaved":"updateFailed")},X&&V&&(L.palettePreview=V),a(),(V&&X?Y.querySelector(`[data-palette-preview="${V}"]`):Y.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function c(H,V){let Y=L.options&&L.options[H];return Y&&Y[3]!=null?Y[3]:V}function p(){let H=document.querySelector("[data-preview-stage]"),V=document.querySelector("[data-preview-pill='1']"),Y=document.querySelector("[data-preview-pill='2']"),X=document.querySelector("[data-preview-foot-l]"),le=document.querySelector("[data-preview-foot-r]");if(!H||!V||!Y||!L.options)return;let ue=Number(c("FontSize",32)),pe=Number(c("Opacity",92)),ge=Number(c("Speed",1)),be="#"+String(c("Color","7DD3FC")).replace(/^#/,""),he=String(c("FontFamily","NotoSansTC")),Ie=String(c("Layout","scroll")),Te=Math.min(ue,36),$e=Math.max(0,Math.min(100,pe))/100;V.style.fontSize=Te+"px",V.style.color=be,V.style.opacity=$e.toFixed(2),V.style.fontFamily=he+", system-ui, sans-serif",V.style.textShadow=`0 0 14px ${be}66`,Y.style.fontSize=(Te*.78).toFixed(0)+"px",Y.style.opacity=($e*.9).toFixed(2),Y.style.fontFamily=he+", system-ui, sans-serif",H.dataset.layout=Ie,X&&(X.textContent=`${f(Ie)} \xB7 ${ue}px \xB7 ${(+ge).toFixed(1)}\xD7`),le&&(le.textContent=m("displayOpacitySuffix",{n:Math.round(pe)}))}function T(){let H=document.querySelector("[data-summary-list]"),V=document.querySelector("[data-summary-count]");if(!H||!L.options)return;let Y=C.filter(X=>(L.options[X.key]||[])[0]).length;V&&(V.textContent=`AUDIENCE \xB7 ${Y}/6 OPEN`),H.innerHTML=C.map(X=>{let le=!!(L.options[X.key]||[])[0];return`<div class="admin-dsp2-srow ${le?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${v(m(X.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${v(m(le?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function k(H,V){try{let Y=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:H,enabled:!!V})});if(!Y.ok)throw new Error("toggle "+Y.status);Array.isArray(L.options[H])||(L.options[H]=[!1,"","",""]),L.options[H][0]=!!V,o(),H==="ViewerColorPicker"&&document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0});let X=H==="ViewerColorPicker"?m("viewerPaletteAllowPicker"):H;window.showToast&&window.showToast(`${X} ${m("settingsUpdated")}`,!0)}catch(Y){console.warn("[admin-display] toggle failed:",Y),window.showToast&&window.showToast(m("updateFailed"),!1),await K(),o()}}async function _(H,V,Y){try{let X=Y;if(H==="Color"){let ue=String(X).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ue)){window.showToast&&window.showToast(m("colorFormatError"),!1);return}X=ue.toUpperCase()}else if(H==="Opacity"||H==="FontSize"||H==="Speed"){X=H==="Speed"?parseFloat(X):parseInt(X,10);let ue=B[H];if(Number.isNaN(X)||ue&&(X<ue.min||X>ue.max)){window.showToast&&window.showToast(`${H} ${ue.min}\u2013${ue.max}`,!1);return}}let le=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:H,value:X,index:V})});if(!le.ok)throw new Error("update "+le.status);Array.isArray(L.options[H])||(L.options[H]=[!1,"","",""]),L.options[H][V]=X,R(H),p(),T()}catch(X){console.warn("[admin-display] update failed:",X),window.showToast&&window.showToast(m("updateFailed"),!1)}}async function M(H,V){try{let Y=await window.csrfFetch(`/admin/options/${encodeURIComponent(H)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:V})});if(!Y.ok)throw new Error("allowlist "+Y.status);let X=await Y.json().catch(()=>({}));X&&Array.isArray(X.option)?L.options[H]=X.option:Array.isArray(L.options[H])&&(L.options[H][1]=V.slice()),R(H),p(),T();let le=E(H).length||0,ue=H==="Color"?m("settingsUpdated"):V.length>0?m("displayAllowlistToastPartial",{key:H,n:V.length,total:le}):m("displayAllowlistToastAll",{key:H});return H!=="Color"&&window.showToast&&window.showToast(ue,!0),!0}catch(Y){return console.warn("[admin-display] allowlist failed:",Y),H!=="Color"&&window.showToast&&window.showToast(m("updateFailed"),!1),!1}}function R(H){let V=document.querySelector(`[data-row-key="${H}"]`);if(!V||!L.options)return;let Y=C.find(pe=>pe.key===H);if(!Y)return;let X=L.options[H]||[!1,"","",""],le=X[3],ue=V.querySelector("[data-value-badge]");if(ue&&(ue.textContent=Y.fmt?Y.fmt(le):le!=null?String(le):"\u2014"),w(H)){let pe=V.querySelector("[data-picker-host]");pe&&(pe.innerHTML=u(Y,X));return}if((H==="FontSize"||H==="Color"||H==="FontFamily"||H==="Layout")&&V.querySelectorAll(`[data-chip-key="${H}"]`).forEach(pe=>{let ge=pe.getAttribute("data-chip-value"),be=H==="Color"?String(le||"").replace(/^#/,"").toUpperCase():String(le??"");pe.classList.toggle("is-active",String(ge)===be)}),H==="Opacity"||H==="Speed"){let pe=B[H],ge=Number(le??pe.min),be=(ge-pe.min)/Math.max(1e-6,pe.max-pe.min)*100,he=V.querySelector(".admin-dsp2-slider-fill"),Ie=V.querySelector(".admin-dsp2-slider-thumb");he&&(he.style.width=be.toFixed(2)+"%"),Ie&&(Ie.style.left=`calc(${be.toFixed(2)}% - 8px)`);let Te=V.querySelector(".admin-dsp2-range");Te&&document.activeElement!==Te&&(Te.value=String(ge));let $e=V.querySelector(".admin-dsp2-num");$e&&document.activeElement!==$e&&($e.value=String(ge))}}async function K(){try{let H=await fetch("/get_settings",{credentials:"same-origin"});if(!H.ok)throw new Error(H.status);L.options=await H.json()}catch(H){console.warn("[admin-display] /get_settings failed:",H),L.options=L.options||{}}}async function $(){try{let H=await fetch("/fonts",{credentials:"same-origin"});if(!H.ok)throw new Error(H.status);let V=await H.json();L.fonts=Array.isArray(V)?V:V.fonts||[]}catch{L.fonts=["NotoSansTC","Inter"]}}async function O(){try{let H=await fetch("/admin/metrics",{credentials:"same-origin"});if(!H.ok)return;let V=await H.json();L.viewerCount=V.ws_clients??0}catch{}}function U(){J(),O(),L.metricsTimer=setInterval(O,5e3)}function J(){L.metricsTimer&&(clearInterval(L.metricsTimer),L.metricsTimer=null)}function W(){if(!L.options){window.showToast&&window.showToast(m("loading"),!1);return}let H={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:L.options},V=new Blob([JSON.stringify(H,null,2)],{type:"application/json"}),Y=URL.createObjectURL(V),X=document.createElement("a");X.href=Y,X.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(Y),window.showToast&&window.showToast(m("displayExportDone"),!0)}async function G(){if(!L.options)return;let H=document.getElementById("dsp2-deploy");H&&(H.disabled=!0,H.classList.add("is-pending"));try{for(let V of C){let Y=L.options[V.key];Array.isArray(Y)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:V.key,enabled:!!Y[0]})})}await O(),window.showToast&&window.showToast(m("displayBroadcastDone")+` ${L.viewerCount} ${m("displayViewersReceivedSuffix")}`,!0)}catch(V){console.warn("[admin-display] deploy failed:",V),window.showToast&&window.showToast(m("updateFailed"),!1)}finally{H&&(H.disabled=!1,H.classList.remove("is-pending"))}}async function te(){let H={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,.5,3,1],Color:[!0,0,0,"FFFFFF"],FontFamily:[!0,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:m("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"danger",body:m("displayRevertConfirm"),confirmLabel:m("displayDeployRevert")}))try{for(let[Y,X]of Object.entries(H)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:Y,enabled:!!X[0]})});for(let le=1;le<=3;le++)le<3&&(Y==="Color"||Y==="FontFamily"||Y==="Layout")||X[le]===""||X[le]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:Y,value:X[le],index:le})})}await K(),o(),window.showToast&&window.showToast(m("displayRevertDone"),!0)}catch(Y){console.warn("[admin-display] revert failed:",Y),window.showToast&&window.showToast(m("updateFailed"),!1)}}function ne(){let H=document.getElementById(y);H&&(H.addEventListener("click",V=>{let Y=V.target.closest("[data-palette-preview]");if(Y){g(Y.dataset.palettePreview);return}let X=V.target.closest("[data-palette-remove]");if(X){let be=s();if(be.length>1){let he=be.filter(Ie=>Ie!==X.dataset.paletteRemove);i(he,he.includes(L.palettePreview)?L.palettePreview:he[0])}return}if(V.target.closest("[data-palette-add]")){let be=H.querySelector("[data-palette-hex]"),he=String(be.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(he)){L.paletteInvalid=!0,be.setAttribute("aria-invalid","true"),l(m("colorFormatError"));return}let Ie=s();if(Ie.includes("#"+he)){l(m("viewerPaletteDuplicate"));return}Ie.length<64&&i([...Ie,"#"+he],"#"+he);return}let le=V.target.closest("[data-toggle-key]");if(le){let be=le.getAttribute("data-toggle-key"),he=!!(L.options[be]||[])[0];k(be,!he);return}let ue=V.target.closest("[data-allow-action]");if(ue){let be=ue.getAttribute("data-allow-action"),he=ue.getAttribute("data-allow-key");if(!he)return;if(be==="edit"){let Ie=b(he).map(Te=>q(he,Te));Ie.length?L.allowlistEdit[he]=new Set(Ie):L.allowlistEdit[he]=new Set(E(he)),R(he);return}if(be==="cancel"){delete L.allowlistEdit[he],R(he);return}if(be==="clear"){L.allowlistEdit[he]=new Set,M(he,[]),delete L.allowlistEdit[he];return}if(be==="apply"){let Ie=L.allowlistEdit[he]||new Set,Te=E(he),$e=Array.from(Ie),Le=Te.length>0&&$e.length===Te.length&&Te.every(Ce=>Ie.has(Ce));M(he,Le?[]:$e),delete L.allowlistEdit[he];return}}let pe=V.target.closest("[data-allow-key][data-allow-value]");if(pe){let be=pe.getAttribute("data-allow-key"),he=pe.getAttribute("data-allow-value"),Ie=L.allowlistEdit[be];if(Ie){let Te=q(be,he);Ie.has(Te)?Ie.delete(Te):Ie.add(Te),R(be)}return}let ge=V.target.closest("[data-chip-key]");if(ge){let be=ge.getAttribute("data-chip-key"),he=ge.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${be}"]`).forEach(Ie=>Ie.classList.remove("is-active")),ge.classList.add("is-active"),_(be,3,he);return}if(V.target&&V.target.id==="dsp2-revert"){te();return}if(V.target&&V.target.id==="dsp2-export"){W();return}}),H.addEventListener("keydown",V=>{V.key==="Enter"&&V.target.matches("[data-palette-hex]")&&!V.isComposing&&(V.preventDefault(),H.querySelector("[data-palette-add]")?.click())}),H.addEventListener("change",V=>{let Y=V.target;if(!Y)return;if(Y.matches("[data-viewer-color-picker]")){Y.disabled=!0,k("ViewerColorPicker",Y.checked);return}let X=Y.getAttribute("data-num-key");if(!X)return;let le=Y.getAttribute("data-num-index");if(le==="step"){S(X,Y.value),R(X);return}let ue=parseInt(le,10);if(Number.isNaN(ue))return;let pe=Y.value;X==="Color"&&(pe=String(pe).replace(/^#/,"").toUpperCase()),_(X,ue,pe)}),H.addEventListener("input",V=>{let Y=V.target;if(Y){if(Y.matches("[data-palette-picker]")){L.paletteDraft=Y.value.toUpperCase(),L.paletteInvalid=!1;let X=H.querySelector("[data-palette-hex]");X.value=L.paletteDraft,X.removeAttribute("aria-invalid"),l("","success"),g(L.paletteDraft);return}if(Y.matches("[data-palette-hex]")){L.paletteDraft=Y.value,L.paletteInvalid=!1;let X=Y.value.replace(/^#/,"");Y.removeAttribute("aria-invalid"),l("","success"),/^[0-9a-fA-F]{6}$/.test(X)&&(H.querySelector("[data-palette-picker]").value="#"+X,g("#"+X));return}if(Y.classList&&Y.classList.contains("admin-dsp2-range")){let X=Y.getAttribute("data-range-key"),le=B[X],ue=Number(Y.value),pe=(ue-le.min)/Math.max(1e-6,le.max-le.min)*100,ge=Y.closest("[data-row-key]");if(ge){let be=ge.querySelector(".admin-dsp2-slider-fill"),he=ge.querySelector(".admin-dsp2-slider-thumb");be&&(be.style.width=pe.toFixed(2)+"%"),he&&(he.style.left=`calc(${pe.toFixed(2)}% - 8px)`);let Ie=ge.querySelector(".admin-dsp2-num");Ie&&(Ie.value=String(ue))}Array.isArray(L.options[X])&&(L.options[X][3]=ue),p();return}if(Y.classList&&Y.classList.contains("admin-dsp2-num")){let X=Y.getAttribute("data-num-key"),le=parseInt(Y.getAttribute("data-num-index"),10);if(Number.isNaN(le)||!Array.isArray(L.options[X]))return;let ue=Y.value;Y.type==="number"&&(ue=Number(ue)),L.options[X][le]=ue,p()}}}),H.addEventListener("change",V=>{let Y=V.target;if(Y&&Y.classList&&Y.classList.contains("admin-dsp2-range")){let X=Y.getAttribute("data-range-key");_(X,3,Y.value)}}),H.addEventListener("click",V=>{let Y=V.target.closest("[data-dl-step]");if(Y){let le=Y.closest("[data-dl-stepper]");if(!le)return;let ue=le.getAttribute("data-dl-stepper"),ge=Number(z[ue]??0)+Number(Y.getAttribute("data-dl-step"));se(ue,ge);return}let X=V.target.closest("[data-dl-opt]");if(X){let le=X.closest("[data-dl-seg]");if(!le)return;let ue=le.getAttribute("data-dl-seg"),pe=X.getAttribute("data-dl-opt");se(ue,["safe_area","poll_vote_opacity"].indexOf(ue)!==-1?Number(pe):pe)}}),H.addEventListener("change",V=>{let Y=V.target.closest("[data-dl-toggle]");if(Y){se(Y.getAttribute("data-dl-toggle"),Y.checked);return}let X=V.target.closest("[data-dl-range]");X&&se(X.getAttribute("data-dl-range"),Number(X.value))}),H.addEventListener("input",V=>{let Y=V.target.closest("[data-dl-range]");if(!Y)return;let X=Y.getAttribute("data-dl-range"),le=H.querySelector(`[data-dl-value="${X}"]`);le&&(le.textContent=Y.value+"%")}))}let z={};function Q(){let H=document.getElementById(y);H&&Object.entries(z).forEach(([V,Y])=>{let X=H.querySelector(`[data-dl-value="${V}"]`);X&&(X.textContent=V==="max_tracks"?Number(Y)===0?m("dlMaxTracksAuto"):String(Y):String(Y)+"%");let le=H.querySelector(`[data-dl-range="${V}"]`);le&&document.activeElement!==le&&(le.value=String(Y));let ue=H.querySelector(`[data-dl-toggle="${V}"]`);ue&&(ue.checked=!!Y);let pe=H.querySelector(`[data-dl-seg="${V}"]`);pe&&pe.querySelectorAll("[data-dl-opt]").forEach(ge=>{let be=ge.getAttribute("data-dl-opt")===String(Y);ge.classList.toggle("is-active",be),ge.setAttribute("aria-pressed",be?"true":"false")})})}async function Z(){try{let H=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!H.ok)return;z=await H.json(),Q()}catch(H){console.warn("[admin-display] display-layer fetch failed:",H)}}async function se(H,V){let Y=z[H];z[H]=V,Q();try{let X=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[H]:V})});if(!X.ok)throw new Error("display-layer "+X.status);z=await X.json(),Q()}catch(X){z[H]=Y,Q(),console.warn("[admin-display] display-layer update failed:",X),window.showToast&&window.showToast(m("updateFailed"),!1)}}function ie(){I.forEach(H=>{let V=document.getElementById(H);V&&V.setAttribute("data-admin-ui-replaced","1")})}let de=null;function ce(H,V){return H==="overlay"||V==="overlay"||H==="display"||V==="display"}function ke(H,V){return H==="viewer-config"||H==="viewer"||V==="viewer-config"||V==="viewer"}function Ee(H,V){if(!ke(H,V))return;let Y=window.AdminTabs?.getConfig?.("viewer");if(!Y)return;let X=ue=>Y.tabs.some(pe=>pe.slug===ue),le=X(V)?V:null;if(!le&&window.AdminTabs.resolveActiveTab){let ue=window.AdminTabs.resolveActiveTab("viewer",null);X(ue)&&(le=ue)}le&&(document.body.dataset.viewerConfigTab=le)}let ee=!1,ae=!1;async function oe(){let H=document.getElementById("sec-viewer-config-limits");if(!H||ee)return;ee=!0;let V=(Y,X)=>{let le=H.querySelector(Y);le&&(le.textContent=X==null?"\u2014":String(X))};try{let Y=await fetch("/admin/metrics",{credentials:"same-origin"});if(!Y.ok)return;let X=await Y.json(),le=X.rate_limits&&X.rate_limits.fire||{},ue=X.rate_limits&&X.rate_limits.totals||{},pe=X.rate_limit_config&&X.rate_limit_config.fire||{},ge=Math.max(1,(X.server_time||0)-(X.server_started_at||0));V("[data-vc-rate-fp]",pe.limit||"\u2014"),V("[data-vc-rate-global]","\u2014"),V("[data-vc-rate-burst]","\u2014"),V("[data-vc-rate-cooldown]",pe.window||"\u2014"),V("[data-vc-msg-len]",100),V("[data-vc-nick-len]","\u2014"),V("[data-vc-dedup]","\u2014");let be=(le.hits||0)/ge;V("[data-vc-avg-rate]",be.toFixed(2)+"/s"),V("[data-vc-throttled]",le.violations||0),V("[data-vc-blocked]",ue.locked_sources||0),V("[data-vc-deduped]",0)}catch{}finally{ee=!1}}let me=null;function re(H){let V=window.ServerI18n&&window.ServerI18n.currentLang;if(!V||V===me)return;let Y=me===null;if(me=V,Y)return;let X=H.querySelector("[data-dsp-fold]"),le=!!(X&&X.open),ue=document.createElement("div");ue.innerHTML=A(),H.replaceChildren(...ue.firstElementChild.childNodes);let pe=H.querySelector("[data-dsp-fold]");pe&&(pe.open=le),o(),Q()}function ve(){let H=document.querySelector(".admin-dash-grid"),V=document.getElementById(y);if(!H||!V)return;re(V);let Y=H.dataset.activeRoute||"live",X=H.dataset.activeLeaf||Y;Ee(Y,X);let le=document.body.dataset.viewerConfigTab||"defaults",ue=ke(Y,X),pe=ce(Y,X),ge=ue||pe,be=V.querySelector("[data-dsp-fold]");be&&V.dataset.dspMode!==(pe?"values":"audience")&&(be.open=!pe),V.dataset.dspMode=pe?"values":"audience",V.style.display=ge?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach(Ie=>{let Te=document.getElementById(Ie);Te&&(Te.style.display=ue?"":"none")});let he=document.getElementById("sec-viewer-config-info");he&&(he.style.display=ue?"":"none"),ue?ae||(ae=!0,oe()):ae=!1,ce(Y,X)?L.metricsTimer||U():J(),de=Y}function fe(){if(document.getElementById("sec-viewer-config-info"))return;let H=document.getElementById("settings-grid");if(!H)return;let V=document.createElement("div");V.id="sec-viewer-config-info",V.className="lg:col-span-2",V.innerHTML='<div class="admin-vc-info-banner">'+m("displayViewerConfigInfoBanner")+"</div>";let Y=[{k:m("displayFieldNicknameLabel"),desc:m("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:m("displayFieldMessageLabel"),desc:m("displayFieldMessageDesc"),on:!0,pinned:!0},{k:m("displayFieldColorLabel"),desc:m("displayFieldColorDesc"),on:!0},{k:m("displayFieldFontLabel"),desc:m("displayFieldFontDesc"),on:!0},{k:m("displayFieldSizeLabel"),desc:m("displayFieldSizeDesc"),on:!0},{k:m("displayFieldOpacityLabel"),desc:m("displayFieldOpacityDesc"),on:!0},{k:m("displayFieldSpeedLabel"),desc:m("displayFieldSpeedDesc"),on:!0},{k:m("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:m("displayFieldEffectLabel"),desc:m("displayFieldEffectDesc"),on:!1}],X=document.createElement("div");X.id="sec-viewer-config-fields",X.className="admin-vc-fields-grid lg:col-span-2";let le=document.createElement("div");le.className="admin-vc-col-panel";let ue=document.createElement("div");ue.className="admin-vc-fields-head";let pe=Y.filter(function(xe){return xe.on}).length,ge=Y.length-pe;ue.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+v(m("displayFieldsCountLabel",{count:Y.length}))+'</span><span class="admin-vc-fields-count">'+v(m("displayFieldsShownHidden",{shown:pe,hidden:ge}))+"</span>",le.appendChild(ue);let be=document.createElement("div");be.className="admin-vc-fields-list",Y.forEach(function(xe){let Be=document.createElement("div");Be.className="admin-vc-field-row"+(xe.blocked?" is-blocked":"");let Me=document.createElement("span");Me.className="admin-vc-field-dot"+(xe.on?" is-on":""),Be.appendChild(Me);let Ne=document.createElement("div");var De="";xe.pinned&&(De='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+v(m("displayFieldBadgeRequired"))+"</span>"),xe.blocked&&(De='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+v(m("displayFieldBadgeBlocked"))+"</span>"),Ne.innerHTML='<div class="admin-vc-field-label">'+v(xe.k)+De+'</div><div class="admin-vc-field-desc">'+v(xe.desc)+"</div>",Be.appendChild(Ne);let Ae=document.createElement("button");if(Ae.type="button",Ae.className="admin-vc-toggle "+(xe.on?"is-on":"is-off"),Ae.textContent=xe.on?m("displayToggleShow"):m("displayToggleHide"),xe.blocked||xe.pinned)Ae.disabled=!0,Ae.className+=" disabled";else{var Fe=xe.on;Ae.addEventListener("click",function(){Fe=!Fe,Ae.className="admin-vc-toggle "+(Fe?"is-on":"is-off"),Ae.textContent=m(Fe?"displayToggleShow":"displayToggleHide"),Me.className="admin-vc-field-dot"+(Fe?" is-on":"")})}Be.appendChild(Ae),be.appendChild(Be)}),le.appendChild(be);let he=document.createElement("div");he.className="admin-vc-col-panel";var Te=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(xe,Be){return'<span class="admin-vc-swatch-dot" style="background:'+xe+";border:"+(Be===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");he.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+v(m("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+v(m("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+v(m("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+v(m("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+v(m("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+v(m("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+Te+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+v(m("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+v(m("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+v(m("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+v(m("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+v(m("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+v(m("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+v(m("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+v(m("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+v(m("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+v(m("displayFieldsTip"))+"</div>",X.appendChild(le),X.appendChild(he);function $e(xe,Be,Me,Ne,De,Ae){let Fe=Ae?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+xe+'</div></div><div class="admin-vc-limit-row__value" style="color:'+Fe+'">'+Me+'<span class="admin-vc-limit-row__unit">'+(Ne||"")+"</span></div>"+(De?'<div class="admin-vc-limit-row__hint">'+De+"</div>":"")+"</div>"}let Le=document.createElement("div");Le.id="sec-viewer-config-limits",Le.className="admin-vc-limits-grid lg:col-span-2",Le.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+v(m("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+v(m("displayEditLink"))+"</a></div>"+$e(v(m("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",v(m("displayRateFpUnit")),v(m("displayRateFpHint")))+$e(v(m("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",v(m("displayRateGlobalHint")))+$e(v(m("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",v(m("displayRateBurstUnit")),v(m("displayRateBurstHint")))+$e(v(m("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",v(m("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+v(m("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+v(m("displayContentLimitsTitle"))+"</span></div>"+$e(v(m("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",v(m("displayMsgLenUnit")),v(m("displayMsgLenHint")))+$e(v(m("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",v(m("displayNickLenUnit")),v(m("displayNickLenHint")))+$e(v(m("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",v(m("displayDedupHint")))+$e(v(m("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+v(m("displayProfanityDefaultValue"))+"</span>","",v(m("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+v(m("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+v(m("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+v(m("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+v(m("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+v(m("displayAuditLogLink"))+"</a></div>";let Ce=document.getElementById("sec-viewer-theme");Ce&&Ce.parentNode===H?(H.insertBefore(V,Ce),H.insertBefore(Le,Ce),H.insertBefore(X,Ce)):(H.appendChild(V),H.appendChild(Le),H.appendChild(X)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),ve()}async function Se(){let H=document.getElementById("settings-grid");if(!H||document.getElementById(y)){ie();return}H.insertAdjacentHTML("beforeend",A()),ne(),ie(),ve(),L.options||await Promise.all([K(),$()]),Z(),o()}function _e(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?Se():ie(),ve()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",ve),document.addEventListener("admin-route-applied",ve),document.addEventListener("admin-panel-rendered",()=>{Se(),ie(),fe(),ve()}),Se(),fe()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_e):_e()})()});var ct=ye(()=>{document.addEventListener("DOMContentLoaded",()=>{function y(){let W=document.querySelector('meta[name="csrf-token"]');return W&&W.content||""}let I=window.DANMU_CONFIG||{},h=I.session||{logged_in:!1},v=I.settingRanges||{};function B(W,G={}){let te={credentials:"same-origin",...G},ne=new Headers(G.headers||{});return ne.set("X-CSRF-Token",y()),te.headers=ne,fetch(W,te)}window.csrfFetch=B;let j=5e3,F={at:0,data:null,promise:null};function x(){return F.data&&Date.now()-F.at<j}function m(){return x()?Promise.resolve(F.data):(F.promise||(F.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(W=>W.ok?W.json():null).then(W=>(W&&(F.data=W,F.at=Date.now()),F.promise=null,W)).catch(()=>(F.promise=null,null))),F.promise)}function N(W){if(!x())return null;let G=F.data[W];return G&&typeof G=="object"&&"_error"in G?null:G}window.__danmuAdminBootstrap={prime:m,get:N},m();let D={},S=null,L=null,P=Object.create(null);Object.assign(P,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},"api-tokens":{nav:"integrations",tab:"api-tokens"},scheduler:{nav:"integrations",tab:"scheduler"},security:{nav:"system",tab:"security"}});let w=Object.create(null);Object.assign(w,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"integrations",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"integrations",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"integrations",tab:"plugins"},mobile:{nav:"system",tab:"system"}});let b={_key:W=>"admin:tab:"+W,get(W){try{return sessionStorage.getItem(this._key(W))||null}catch{return null}},set(W,G){try{G?sessionStorage.setItem(this._key(W),G):sessionStorage.removeItem(this._key(W))}catch{}}};function E(W){let G=(W||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!G)return null;let te=G[1],ne=G[2]||null,z=null;if(!ne){let ie=P[te];typeof ie=="string"?te=ie:ie&&typeof ie=="object"&&(te=ie.nav||te,z=ie.tab||null)}let Q=w[te],Z=te,se=null;if(typeof Q=="string"?Z=Q:Q&&typeof Q=="object"&&(Z=Q.nav||te,se=Q.tab||null),G[1]!==Z&&(E._warned||(E._warned=new Set),!E._warned.has(G[1]))){E._warned.add(G[1]);try{console.info("[admin] legacy route #/"+G[1]+" \u2192 #/"+Z+(ne||se||z?"/"+(ne||se||z):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:Z,tab:ne||se||z,raw:te}}function q(W,G){return G?"#/"+W+"/"+G:"#/"+W}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:w,tabMemory:b,parseHash:E,buildHash:q});var A=window.AdminUtils.loadDetailsState,C=window.AdminUtils.saveDetailsState,f=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:m,bootstrapSection:N};async function u(){try{D=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),h.logged_in&&_()}catch(W){console.error("Get settings failed:",W),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function d(W){return/^#[0-9A-Fa-f]{6}$/.test(W)}function t(W){return d(W)?W:/^[0-9A-Fa-f]{6}$/.test(W)?"#"+W:(W.startsWith("#")||(W="#"+W),d(W)?W:"#38bdf8")}function r(W,G){if(v[W]){let te=parseInt(G);if(isNaN(te)||te<v[W].min||te>v[W].max)return showToast(ServerI18n.t("settingRangeError",{key:W,min:v[W].min,max:v[W].max}),!1),!1}return!0}function n(W,G,te){if(!te||!Array.isArray(D[W]))return;let ne=D[W][G];W==="Color"&&typeof ne=="string"&&(ne=t(`#${ne}`)),ne!=null&&(te.value=String(ne))}let o={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-plugins","sec-widgets"]}};function s(){Object.values(o).forEach(W=>{let G=document.getElementById(W.containerId);G&&W.orderedIds.forEach(te=>{let ne=document.getElementById(te);ne&&ne.parentElement!==G&&G.appendChild(ne)})})}function e(){S&&(S.disconnect(),S=null),s(),S=new MutationObserver(()=>{s()}),S.observe(a,{childList:!0,subtree:!0})}async function l(W,G,te,ne=null){try{if(W==="Color"){if(!d(G)){showToast(ServerI18n.t("colorFormatError"),!1),n(W,te,ne);return}G=G.replace("#","")}else if((W==="Speed"||W==="Opacity"||W==="FontSize")&&!r(W,G)){n(W,te,ne);return}(await B("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:W,value:G,index:te})})).ok?(Array.isArray(D[W])||(D[W]=[!1,"","",""]),D[W][te]=G,showToast(`${W} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await u())}catch(z){console.error("Error:",z),showToast(`Update Error: ${z.message}`,!1),await u()}}async function g(W,G){try{let te=await B("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:W,enabled:G})}),ne=await te.json().catch(()=>({}));if(te.ok)Array.isArray(D[W])||(D[W]=[!1,"","",""]),D[W][0]=G,showToast(`${W} ${ServerI18n.t("settingsUpdated")}`),_();else{let z=document.getElementById(`toggle-${W}`);z&&(z.checked=!G),showToast(ne.error||ServerI18n.t("updateFailed"),!1)}}catch(te){console.error("Error:",te);let ne=document.getElementById(`toggle-${W}`);ne&&(ne.checked=!G),showToast(`Update Error: ${te.message}`,!1)}}let a=document.getElementById("app-container"),i=document.getElementById("toast-container"),c=(W,G=500)=>"requestIdleCallback"in window?window.requestIdleCallback(W,{timeout:G}):setTimeout(W,G);async function p(){let W=parseInt(document.getElementById("historyHours")?.value||"24");try{let[G,te]=await Promise.all([fetch(`/admin/stats/hourly?hours=${W}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${W}&limit=10`,{credentials:"same-origin"})]);if(!G.ok||!te.ok)return;let ne=await G.json(),z=await te.json(),Q=document.getElementById("statsDashboard");if(!Q)return;let Z=ne.distribution||[],se=z.topTexts||[],ie=Math.max(1,...Z.map(ee=>ee.count)),de=Z.reduce((ee,ae)=>ee+(ae.count||0),0),ce=Z.filter(ee=>ee.count>0).length,ke=Z.map(ee=>`<div class="chart-bar" style="height: ${Math.round(ee.count/ie*100)}%" title="${f(ee.hour)}: ${ee.count}"><span class="chart-label">${f(ee.hour.slice(-5,-3))}</span></div>`).join(""),Ee=se.map((ee,ae)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${ae+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${f(ee.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${ee.count}</td></tr>`).join("");Q.innerHTML=`
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
              <span class="history-dashboard-caption">${W}h window</span>
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
        </div>`}catch(G){console.error("Load stats error:",G)}}window._loadStats=p,window.csrfFetch=B,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=a,window.__adminCtx.getSettings=()=>D;function T(){a&&(a.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function k(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():T()}function _(){let W=A(),G=(ce,ke=!1)=>W[ce]!==void 0?W[ce]:ke,te=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(ce=>Array.isArray(D[ce])&&D[ce][0]===!0).length,ne=D.Layout&&D.Layout[3]?f(String(D.Layout[3]).replace(/_/g," ")):"scroll",z=D.FontFamily&&D.FontFamily[3]?f(String(D.FontFamily[3])):"NotoSansTC",Q=ce=>ce.map(ke=>`<span style="height:${ke*10}%;opacity:${.3+ke*.08}"></span>`).join(""),Z=ne&&ne!=="off",se=window.location.port||(window.location.protocol==="https:"?"443":"80");a.innerHTML=`
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
    `),c(U),ie.insertAdjacentHTML("beforeend",`
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
    `),K(),e(),c(J),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),R(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let ke=document.querySelector("[data-telem-bars]");if(!ke)return;let Ee=document.querySelector("[data-telem-status]"),ee={cpu:100,mem:100,ws:100,rate:50};function ae(re,ve,fe,Se,_e){let H=ke.querySelector(`[data-telem-fill="${re}"]`),V=ke.querySelector(`[data-telem-value="${re}"]`);H&&(H.style.width=Math.max(0,Math.min(100,ve))+"%",H.classList.toggle("is-warn",!Se)),V&&(V.textContent=fe);let Y=ke.querySelector(`[data-telem-row="${re}"]`);Y&&_e&&Y.setAttribute("title",_e)}function oe(re,ve){if(!ve||ve<=0)return Math.round(re)+" MB used";if(ve>=1024){let fe=(re/1024).toFixed(1),Se=(ve/1024).toFixed(1);return`${fe} / ${Se} GB used`}return`${Math.round(re)} / ${Math.round(ve)} MB used`}async function me(){try{let re=await fetch("/admin/metrics",{credentials:"same-origin"});if(!re.ok)return;let ve=await re.json(),fe=ve.cpu_series||[],Se=ve.mem_series||[],_e=ve.mem_mb_series||[],H=ve.ws_series||[],V=ve.rate_series||[],Y=he=>he.length?he[he.length-1]:0,X=Number(Y(fe)||0),le=Number(Y(Se)||0),ue=Number(Y(_e)||0),pe=Number(ve.mem_total_mb||0),ge=Number(Y(H)||ve.ws_clients||0),be=Number(Y(V)||0)/60;if(ae("cpu",X,`${X.toFixed(0)}%`,X<90),ae("mem",le,`${le.toFixed(0)}%`,le<90,oe(ue,pe)),ae("ws",ge/ee.ws*100,String(ge),ge<100),ae("rate",be/ee.rate*100,`${be.toFixed(1)}/s`,be<40),Ee){let he=X>=90||le>=90||be>=40;Ee.textContent=he?"\u25CF BUSY":"\u25CF HEALTHY",Ee.classList.toggle("is-warn",he)}}catch{}}setTimeout(me,4e3),setInterval(me,5e3)})()}let M={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},integrations:{title:"\u64F4\u5145",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"]},firetoken:{title:"Fire Token",kicker:"ADMIN LANE \xB7 FIRE TOKEN \xB7 \u7528\u91CF / IP / AUDIT",sections:["sec-firetoken-overview"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},backup:{title:"\u5099\u4EFD\u8207\u9084\u539F",kicker:"BACKUP \xB7 EXPORT \xB7 DANGER",sections:["admin-backup-v2-page","sec-timeline-export"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=M;function R(){let W=document.querySelector(".admin-dash-grid");if(!W)return;let G="dashboard",te=null;function ne(re){return o.moderation.orderedIds.indexOf(re)!==-1?"moderation-grid":o.assets.orderedIds.indexOf(re)!==-1?"assets-grid":re==="sec-scheduler"||re==="sec-webhooks"?"sec-advanced":"settings-grid"}function z(){let re=W.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),ve=W.querySelector("[data-route-note]"),fe=W.querySelector("[data-route-action]");if(fe&&Array.prototype.slice.call(fe.children).forEach(Y=>{Y._adminHomeHead?Y._adminHomeHead.appendChild(Y):Y.remove()}),!re)return;let Se=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(G)),_e=Array.prototype.slice.call(W.querySelectorAll(".admin-ui-page-head"));_e.forEach(Y=>Y.classList.remove("is-merged-into-topbar"));let H=(M[G]?.title||"").trim().replace(/\s+/g," "),V=null;_e.forEach(Y=>{let X=Y.querySelector(".admin-ui-page-title"),le=X&&X.textContent.trim().replace(/\s+/g," ");if(le&&(Se||le===re||le===H)){if(Y.offsetParent!==null){V===null&&(V=Y.querySelector(".admin-ui-page-note")?.innerHTML||"");let pe=Y.querySelector(".admin-ui-page-actions");pe&&fe&&!fe.children.length&&(pe._adminHomeHead=Y,fe.appendChild(pe))}Y.classList.add("is-merged-into-topbar")}}),ve&&(ve.innerHTML=V||"",ve.hidden=!V)}function Q(){let re=M[G],ve=new Set((re.sections||[]).map(ne)),fe=Se=>Se.id==="sec-advanced"?Array.from(Se.querySelectorAll('[id^="sec-"]')).some(_e=>getComputedStyle(_e).display!=="none"):Array.from(Se.children).some(_e=>getComputedStyle(_e).display!=="none");W.querySelectorAll(".admin-route-sections").forEach(Se=>{if(!(Se.id==="sec-advanced"?ve.has("sec-advanced"):ve.has(Se.id))){Se.style.display="none";return}Se.style.display="",Se.style.display=fe(Se)?"":"none"})}let Z=()=>{let re=M[G],ve=new Set(re.sections);W.querySelectorAll('[id^="sec-"]').forEach(fe=>{if(fe.id){if(fe.id==="sec-advanced"){let Se=Array.from(fe.querySelectorAll('[id^="sec-"]')).some(_e=>ve.has(_e.id));fe.style.display=Se?"":"none";return}fe.style.display=ve.has(fe.id)?"":"none"}}),te&&window.AdminTabs?.hasTabsFor?.(G)&&window.AdminTabs.applyTabSectionVisibility(G,te,W),Q(),z()},se={system:{nav:"system",tab:"overview"},backup:{nav:"backup"},integrations:{nav:"integrations"},"api-tokens":{nav:"integrations",tab:"api-tokens"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},scheduler:{nav:"integrations",tab:"scheduler"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}},ie=(re,ve,fe)=>{if(fe=fe||re,!M[re]){let Te=P[re];if(typeof Te=="string")re=Te;else if(Te&&typeof Te=="object")Te.nav&&(re=Te.nav),!ve&&Te.tab&&(ve=Te.tab);else{let $e=w[re];typeof $e=="string"?re=$e:$e&&typeof $e=="object"&&($e.nav&&(re=$e.nav),!ve&&$e.tab&&(ve=$e.tab))}}if(re==="system"&&ve&&se[ve]){let Te=se[ve];re=Te.nav,ve=Te.tab||null,fe=re}G=M[re]?re:"live",W.dataset.activeRoute=G;let Se;window.AdminTabs?.hasTabsFor?.(G)?Se=window.AdminTabs.resolveActiveTab(G,ve):Se=null;let _e=fe&&fe!==G?"#/"+fe:window.AdminRouter?.buildHash?window.AdminRouter.buildHash(G,Se):"#/"+G;if(window.location.hash!==_e){try{history.replaceState(null,"",_e)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let H=M[G],V=Array.from(W.querySelectorAll(".admin-dash-nav-row[data-route]")),Y=fe!==G?V.find(Te=>Te.dataset.route===fe):null;V.forEach(Te=>{let $e=Y?Te===Y:Te.dataset.route===G;Te.classList.toggle("is-active",$e),Te.setAttribute("aria-selected",$e?"true":"false")});let X=W.querySelector("[data-route-kicker]"),le=W.querySelector("[data-route-title]");var ue=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(Te){return Te},pe="adminRouteTitle_"+G,ge="adminRouteKicker_"+G,be=ue(pe),he=ue(ge);X&&(X.textContent=he!==ge?he:H.kicker),le&&(le.textContent=be!==pe?be:H.title);let Ie=G==="dashboard"||G==="live";W.querySelectorAll('[data-route-view="dashboard"]').forEach(Te=>{Te.style.display=Ie?"":"none"}),Ie?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),te=Se,Se&&window.AdminRouter?.tabMemory?.set?.(G,Se),W.dataset.activeLeaf=Se||G,Z(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:G,leaf:Se}})),Q(),z(),ce(G,Se),de(fe,G,Se);try{history.replaceState(null,"",_e)}catch{}};function de(re,ve,fe){window.AdminBreadcrumb?.render(W,re,ve,fe)}function ce(re,ve){let fe=W.querySelector("[data-admin-tabs-host]");if(!fe){let Se=W.querySelector(".admin-dash-topbar");if(!Se)return;fe=document.createElement("div"),fe.dataset.adminTabsHost="",Se.insertAdjacentElement("afterend",fe)}if(fe.innerHTML="",window.AdminTabs?.hasTabsFor?.(re)&&ve){fe.hidden=!1;let Se=window.AdminTabs.renderTabStrip(re,ve,{onSelect:_e=>ie(re,_e)});Se&&fe.appendChild(Se),fe.classList.remove("admin-tabs-host--accordion");return}fe.classList.remove("admin-tabs-host--accordion"),fe.hidden=!0}L&&window.removeEventListener("hashchange",L),L=()=>{let re=E(window.location.hash),ve=(window.location.hash||"").match(/^#\/([\w-]+)/),fe=ve?ve[1]:null;re&&ie(re.nav,re.tab,fe||re.raw)},window.addEventListener("hashchange",L),W.querySelectorAll("[data-route]").forEach(re=>{re.addEventListener("click",ve=>{ve.preventDefault(),ie(re.dataset.route)})});let ke=E(window.location.hash),Ee=(window.location.hash||"").match(/^#\/([\w-]+)/),ee=Ee?Ee[1]:ke?.raw||ke?.nav||"live";ie(ke?.nav||"live",ke?.tab||null,ee),window._adminNavigateTo=()=>ie(G,te);let ae=!1;function oe(){if(ae)return;ae=!0;let re=()=>{ae=!1,Z(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:G,leaf:te}}))};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?requestAnimationFrame(re):setTimeout(re,0)}let me=W.querySelector(".admin-dash-main");me&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{oe()}).observe(me,{childList:!0,subtree:!0}),oe())}function K(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let W=document.querySelector("[data-open-help]");W&&W.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let G=document.querySelector("[data-open-palette]");if(G){let ne=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};G.addEventListener("click",ne),G.addEventListener("keydown",z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),ne())})}let te=document.getElementById("logoutButton");te&&te.addEventListener("click",async()=>{try{let ne=await B("/logout",{method:"POST"});ne.redirected&&(window.location.href=ne.url),showToast(ServerI18n.t("logoutSuccess"))}catch(ne){console.error("Logout Failed:",ne),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(ne=>{ne.name&&ne.addEventListener("change",async function(){let z=this.name,Q=this.checked;await g(z,Q)})}),document.querySelectorAll("details[id^='sec-']").forEach(ne=>{ne.addEventListener("toggle",()=>{let z=A();z[ne.id]=ne.open,C(z)})}),document.querySelectorAll(".setting-input").forEach(ne=>{ne.addEventListener("change",async function(){let z=this.dataset.key,Q=parseInt(this.dataset.index),Z=this.value;this.type==="number"&&(Z=parseInt(Z)),await l(z,Z,Q,this)})})}function $(){if(h.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}_()}else k()}async function O(){await u(),$(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function U(){window.AdminThemes&&window.AdminThemes.init()}function J(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{S&&(S.disconnect(),S=null)}),O()})});var ut=ye(()=>{(function(){"use strict";var y=null;async function I(){var m=(document.getElementById("pollQuestion")?.value||"").trim(),N=document.querySelectorAll(".poll-option-input"),D=Array.from(N).map(function(P){return P.value.trim()}).filter(Boolean);if(!m){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(D.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var S=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:m,options:D})}),L=await S.json();if(!S.ok){window.showToast(L.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),F(L),B()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function h(){try{var m=await window.csrfFetch("/admin/poll/end",{method:"POST"}),N=await m.json();if(!m.ok){window.showToast(N.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),F(N),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function v(){try{var m=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),N=await m.json();if(!m.ok){window.showToast(N.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),F(N),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function B(){y&&(clearInterval(y),y=null);var m=async function(){try{var N=await fetch("/admin/poll/status",{credentials:"same-origin"});if(N.ok){var D=await N.json();F(D),D.state!=="active"&&y&&(clearInterval(y),y=null)}}catch{}};m(),y=setInterval(m,2e3)}function j(){var m=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var N=document.querySelector('#sec-polls [data-poll-action="add"]');N&&N.click()},extra:`
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
      </div>`});return m.dataset.emptyKind="poll",m}function F(m){var N=document.getElementById("pollStatusDisplay");if(N){if(N.textContent="",!m||m.state==="idle"){N.appendChild(j());return}var D=m.total_votes||0,S=Math.max(1,...m.options.map(function(A){return A.count})),L=document.createElement("div");L.className="admin-poll-status-card";var P=document.createElement("div");P.className="admin-poll-status-header";var w=document.createElement("span");w.className="admin-poll-status-dot"+(m.state==="active"?" is-active":" is-ended"),P.appendChild(w);var b=document.createElement("span");b.className="admin-poll-status-question",b.textContent=m.question||"",P.appendChild(b);var E=document.createElement("span");E.className="admin-poll-status-state",E.textContent=m.state,P.appendChild(E),L.appendChild(P),m.options.forEach(function(A){var C=document.createElement("div");C.className="admin-poll-status-row";var f=document.createElement("div");f.className="admin-poll-status-label";var u=document.createElement("span"),d=document.createElement("b");d.textContent=A.key+".",u.appendChild(d),u.appendChild(document.createTextNode(" "+A.text));var t=document.createElement("span");t.textContent=A.count+" ("+A.percentage+"%)",f.appendChild(u),f.appendChild(t);var r=document.createElement("div");r.className="admin-poll-status-bar";var n=document.createElement("div");n.className="admin-poll-status-bar-fill",n.style.width=A.count/S*100+"%",r.appendChild(n),C.appendChild(f),C.appendChild(r),L.appendChild(C)});var q=document.createElement("div");q.className="admin-poll-status-footer",q.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",D),L.appendChild(q),N.appendChild(L)}}function x(){var m=document.getElementById("sec-polls");if(m&&m.dataset.pollLegacyBound!=="1"){m.dataset.pollLegacyBound="1";var N=document.getElementById("pollCreateBtn");N&&N.addEventListener("click",I);var D=document.getElementById("pollEndBtn");D&&D.addEventListener("click",h);var S=document.getElementById("pollResetBtn");S&&S.addEventListener("click",v);var L=document.getElementById("pollAddOptionBtn");L&&L.addEventListener("click",function(){var b=document.getElementById("pollOptionsContainer");if(b){var E=b.querySelectorAll(".poll-option-input").length;if(E>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var q=document.createElement("input");q.type="text",q.className="poll-option-input admin-ui-input",q.placeholder=String.fromCharCode(65+E)+". Option "+(E+1),q.maxLength=100,b.appendChild(q)}});var P=document.getElementById("pollRemoveOptionBtn");P&&P.addEventListener("click",function(){var b=document.getElementById("pollOptionsContainer");if(b){var E=b.querySelectorAll(".poll-option-input");if(E.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}E[E.length-1].remove()}});var w=m;w&&(w.addEventListener("toggle",function(){w.open&&B()}),B()),window.addEventListener("beforeunload",function(){y&&(clearInterval(y),y=null)})}}document.addEventListener("admin-panel-rendered",function(){x()}),document.addEventListener("DOMContentLoaded",function(){x()}),window.addEventListener("hashchange",function(){var m=window.location.hash||"";m.indexOf("/polls")!==-1&&x()})})()});var mt=ye(()=>{(function(){"use strict";async function y(){try{let B=await fetch("/admin/blacklist/get",{method:"GET",credentials:"same-origin"});if(!B.ok){let N=await B.json();showToast(ServerI18n.t("errorFetchingBlacklist").replace("{error}",N.error||B.statusText),!1);return}let j=await B.json(),F=document.getElementById("blacklistKeywords");F.innerHTML="";let x=document.getElementById("modBlacklistCount");x&&(x.textContent=`${j.length} words`);let m=document.querySelector('[data-mod-stat="banned"]');m&&(m.textContent=j.length),j.length===0?F.innerHTML=`<div style="padding:12px 0;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${ServerI18n.t("noKeywordsYet")}</div>`:j.forEach(N=>{let D=document.createElement("div");D.className="hud-banned-row";let S=document.createElement("span");S.style.cssText="color: var(--color-ink-error);font-family:var(--font-mono);font-size:13px",S.textContent="\u2298";let L=document.createElement("span");L.style.cssText="flex:1;min-width:0;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all",L.textContent=N;let P=document.createElement("button");P.className="removeKeywordBtn",P.type="button",P.style.cssText="background:transparent;border:none;color: var(--color-ink-accent);font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;cursor:pointer;padding:2px 4px",P.textContent="UNBAN",P.setAttribute("data-keyword",N),D.appendChild(S),D.appendChild(L),D.appendChild(P),F.appendChild(D)})}catch(B){console.error("Fetch blacklist error:",B),showToast(ServerI18n.t("fetchBlacklistError"),!1)}}async function I(){let B=document.getElementById("newKeywordInput"),j=B.value.trim();if(!j){showToast(ServerI18n.t("keywordEmpty"),!1);return}try{let F=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:j})}),x=await F.json();F.ok?(B.value="",y(),window.AdminQuickAction?window.AdminQuickAction.fire({label:x.message||ServerI18n.t("histToastBlacklisted",{keyword:j}),undo:{label:ServerI18n.t("histUndo"),run:async()=>{if(!(await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:j})})).ok)throw new Error("remove failed");y()}}}):showToast(x.message||"Keyword added.",!0)):showToast(x.error||"Failed to add keyword.",!1)}catch(F){console.error("Add keyword error:",F),showToast(ServerI18n.t("addKeywordError"),!1)}}async function h(B){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("histRemoveKwTitle"),subtitle:ServerI18n.t("cfmSubRemoveKeyword"),severity:"warn",bodyText:ServerI18n.t("confirmRemoveKeyword").replace("{keyword}",B),confirmLabel:ServerI18n.t("histRemoveKwConfirm")}))try{let F=await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:B})}),x=await F.json();F.ok?(showToast(x.message||"Keyword removed.",!0),y()):showToast(x.error||"Failed to remove keyword.",!1)}catch(F){console.error("Remove keyword error:",F),showToast(ServerI18n.t("removeKeywordError"),!1)}}function v(){let B=document.getElementById("addKeywordBtn");B&&B.addEventListener("click",I);let j=document.getElementById("newKeywordInput");j&&j.addEventListener("keypress",function(x){(x.key==="Enter"||x.keyCode===13)&&(x.preventDefault(),I())});let F=document.getElementById("blacklistKeywords");F&&F.addEventListener("click",function(x){let m=x.target.closest(".removeKeywordBtn");if(m){let N=m.dataset.keyword;N&&h(N)}})}document.addEventListener("admin-panel-rendered",function(){y(),v()}),window.AdminHistory={fetchBlacklist:y}})()});var pt=ye(()=>{(function(){"use strict";var y="sec-timeline-export",I="danmu.adminHistoryExports.v1",h=10,v={rawText:!0,polls:!0,masked:!1,metadata:!0},B=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],j=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],F={range:"24h",filters:Object.assign({},v),format:"JSON"};function x(){return document.getElementById(y)}function m(){try{return JSON.parse(localStorage.getItem(I)||"[]")}catch{return[]}}function N(p){try{localStorage.setItem(I,JSON.stringify(p.slice(0,h)))}catch{}}function D(p){var T=m();T.unshift(p),N(T)}function S(p){return p?p<1024?p+" B":p<1024*1024?(p/1024).toFixed(1)+" KB":(p/1024/1024).toFixed(1)+" MB":"0 B"}function L(p){try{var T=new Date(p),k=new Date,_=T.toDateString()===k.toDateString();if(_)return ServerI18n.t("historyV2TodayAt",{time:String(T.getHours()).padStart(2,"0")+":"+String(T.getMinutes()).padStart(2,"0")});var M=new Date(k);return M.setDate(k.getDate()-1),T.toDateString()===M.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(T.getHours()).padStart(2,"0")+":"+String(T.getMinutes()).padStart(2,"0")}):T.getMonth()+1+"-"+String(T.getDate()).padStart(2,"0")+" "+String(T.getHours()).padStart(2,"0")+":"+String(T.getMinutes()).padStart(2,"0")}catch{return p||""}}function P(p){if(p==="1h")return 1;if(p==="24h")return 24;if(p==="7d")return 168;if(p==="today"){var T=new Date,k=new Date(T.getFullYear(),T.getMonth(),T.getDate());return Math.max(1,Math.ceil((T-k)/36e5))}return p==="yest"?48:p==="live"?6:24}function w(p){return p.filter(function(T){return!(!F.filters.rawText&&!T.is_poll&&!T.muted&&!T.banned||!F.filters.polls&&T.is_poll||!F.filters.masked&&(T.muted||T.banned))}).map(function(T){if(!F.filters.metadata){var k=Object.assign({},T);return delete k.clientIp,delete k.fingerprint,k}return T})}function b(p){var T=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],k=function(R){var K=R==null?"":String(R);return K.indexOf(",")>=0||K.indexOf('"')>=0||K.indexOf(`
`)>=0?'"'+K.replace(/"/g,'""')+'"':K},_=function(R){return R.status?R.status:R.banned?"banned":R.muted?"muted":R.is_poll?"poll":"ok"},M=p.map(function(R){return[R.timestamp||"",R.nickname||"",R.text||"",R.color?"#"+R.color:"",R.size!=null?R.size:"",R.speed!=null?R.speed:"",R.opacity!=null?R.opacity:"",R.isImage?"true":"false",R.fontInfo&&R.fontInfo.name||"",R.clientIp||"",R.fingerprint||"",_(R),R.delivery_reason||""].map(k).join(",")});return[T.join(","),M.join(`\r
`)].filter(Boolean).join(`\r
`)}function E(p){return p.map(function(T,k){var _=new Date(T.timestamp||Date.now()),M=q(_),R=q(new Date(_.getTime()+3e3)),K=(T.nickname?"["+T.nickname+"] ":"")+(T.text||"");return k+1+`
`+M+" --> "+R+`
`+K+`
`}).join(`
`)}function q(p){var T=function(k,_){return String(k).padStart(_||2,"0")};return T(p.getHours())+":"+T(p.getMinutes())+":"+T(p.getSeconds())+","+T(p.getMilliseconds(),3)}function A(p,T){var k=URL.createObjectURL(p),_=document.createElement("a");_.href=k,_.download=T,_.click(),URL.revokeObjectURL(k)}function C(){var p=P(F.range),T=document.getElementById("histv2-go");T&&(T.disabled=!0,T.dataset.busy="1"),fetch("/admin/history?hours="+p+"&limit=10000",{credentials:"same-origin"}).then(function(k){if(!k.ok)throw new Error("http "+k.status);return k.json()}).then(function(k){var _=k&&k.records||[],M=w(_);if(M.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var R=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),K,$;if(F.format==="JSON"){var O=JSON.stringify(M,null,2);$=new Blob([O],{type:"application/json"}),K="danmu-history-"+R+".json"}else F.format==="CSV"?($=new Blob(["\uFEFF"+b(M)],{type:"text/csv;charset=utf-8;"}),K="danmu-history-"+R+".csv"):($=new Blob([E(M)],{type:"application/x-subrip;charset=utf-8;"}),K="danmu-history-"+R+".srt");A($,K),D({name:K,fmt:F.format,size:$.size,when:new Date().toISOString(),count:M.length}),u(),f(M.length,$.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:M.length}),!0)}).catch(function(k){console.error("[history-v2] export failed",k),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:k.message||k}),!1)}).finally(function(){T&&(T.disabled=!1,delete T.dataset.busy)})}function f(p,T){var k=document.getElementById("histv2-estimate");k&&(k.textContent=ServerI18n.t("historyV2Estimate",{count:p||"\u2014",size:T?S(T):"\u2014 MB"}))}function u(){var p=document.getElementById("histv2-recent-list");if(p){var T=m();if(T.length===0){p.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}p.innerHTML=T.map(function(k){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+k.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+d(k.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+d(L(k.when))+" \xB7 "+S(k.size)+"</div></div></div>"}).join("")}}function d(p){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(p):p==null?"":String(p).replace(/[&<>"']/g,function(T){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[T]})}function t(){return B.map(function(p){var T=F.range===p.k;return'<button type="button" class="histv2-chip'+(T?" is-active":"")+'" data-histv2-range="'+p.k+'">'+d(ServerI18n.t(p.labelKey))+(p.k==="live"?" \xB7 "+r():"")+"</button>"}).join("")}function r(){var p=new Date;return String(p.getHours()).padStart(2,"0")+":"+String(p.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function n(){var p=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return p.map(function(T){var k=!!F.filters[T.k];return'<button type="button" class="histv2-toggle'+(k?" is-on":"")+'" data-histv2-toggle="'+T.k+'"><span class="histv2-toggle-mark">'+(k?"\u2713":"\u25CB")+"</span><span>"+d(ServerI18n.t(T.labelKey))+"</span></button>"}).join("")}function o(){return j.map(function(p){var T=F.format===p.k;return'<button type="button" class="histv2-fmt'+(T?" is-selected":"")+'" data-histv2-fmt="'+p.k+'">'+(T?'<span class="histv2-fmt-check">\u2713</span>':"")+(p.badge?'<span class="histv2-fmt-badge">'+d(p.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+p.k+'</div><div class="histv2-fmt-desc">'+d(p.desc)+"</div></button>"}).join("")}function s(){var p=x();p&&(p.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+t()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+n()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+o()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",p.addEventListener("click",e),u(),i())}function e(p){var T=p.target.closest("[data-histv2-range]");if(T){F.range=T.dataset.histv2Range,l(),i();return}var k=p.target.closest("[data-histv2-toggle]");if(k){var _=k.dataset.histv2Toggle;F.filters[_]=!F.filters[_],g(),i();return}var M=p.target.closest("[data-histv2-fmt]");if(M){F.format=M.dataset.histv2Fmt,a(),i();return}var R=p.target.closest("#histv2-go");if(R&&!R.dataset.busy){C();return}}function l(){var p=document.getElementById("histv2-chips");p&&(p.innerHTML=t())}function g(){var p=document.getElementById("histv2-toggles");p&&(p.innerHTML=n())}function a(){var p=document.getElementById("histv2-formats");p&&(p.innerHTML=o())}function i(){i._t&&clearTimeout(i._t),i._t=setTimeout(function(){var p=P(F.range);fetch("/admin/history?hours="+p+"&limit=10000",{credentials:"same-origin"}).then(function(T){return T.ok?T.json():null}).then(function(T){if(!T)return f(0,0);var k=w(T&&T.records||[]),_=F.format==="JSON"?220:F.format==="CSV"?110:80;f(k.length,k.length*_)}).catch(function(){f(0,0)})},250)}function c(){var p=x(),T=document.getElementById("admin-backup-v2-page");if(!p){var k=document.getElementById("settings-grid");if(!k)return;p=document.createElement("div"),p.id=y,p.className="admin-ui-card lg:col-span-2 history-v2-section",k.appendChild(p),s()}T&&T.parentElement&&p.previousElementSibling!==T&&T.parentElement.insertBefore(p,T.nextSibling)}document.addEventListener("admin-panel-rendered",c),document.addEventListener("admin-route-applied",c),window.AdminHistoryV2={refresh:i,state:F}})()});var vt=ye(()=>{(function(){"use strict";let y="admin-replay-bar";function I(){let v=document.getElementById(y);return v||(document.body?(v=document.createElement("div"),v.id=y,v.className="admin-replay-bar",v.hidden=!0,v.setAttribute("role","status"),v.setAttribute("aria-live","polite"),v.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(v,document.body.firstChild),v):null)}function h(v){let B=I();B&&(B.hidden=!v)}window.AdminReplayBar={ensure:I,setActive:h},document.addEventListener("admin-panel-rendered",I)})()});var ft=ye(()=>{(function(){"use strict";let y=null;function I(L){window.AdminReplayBar&&window.AdminReplayBar.ensure();let P=document.getElementById("replayPauseBtn"),w=document.getElementById("replayResumeBtn"),b=document.getElementById("replayStopBtn"),E=document.getElementById("replayProgress"),q=(f,u)=>{f&&f.classList.toggle("hidden",!u)},A=L==="playing",C=L==="paused";q(P,A),q(w,C),q(b,A||C),q(E,A||C),!A&&!C&&E&&(E.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(A||C)}function h(){y&&clearInterval(y),y=setInterval(async()=>{try{let L=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!L.ok)return;let P=await L.json(),w=document.getElementById("replayProgress");w&&(w.textContent=ServerI18n.t("replayingProgress").replace("{sent}",P.sent).replace("{total}",P.total)),I(P.state),P.state==="stopped"&&(clearInterval(y),y=null)}catch{}},500)}async function v(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),I("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function B(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),I("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function j(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),I("stopped"),y&&(clearInterval(y),y=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let F=null,x=null,m=0,N=null;function D(){[["replayPauseBtn",v],["replayResumeBtn",B],["replayStopBtn",j]].forEach(function([P,w]){let b=document.getElementById(P);b&&!b.dataset.replayCtrlsBound&&(b.addEventListener("click",w),b.dataset.replayCtrlsBound="1")})}async function S(){try{let L=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!L.ok)return;let P=await L.json();(P.state==="playing"||P.state==="paused")&&(I(P.state),h())}catch{}}window.AdminReplayControls={notifyStarted:function(){I("playing"),h()}},document.addEventListener("admin-panel-rendered",function(){D(),S()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(D,800)})})()});var ht=ye(()=>{(function(){"use strict";let y="sec-ratelimit",I=window.AdminUtils&&window.AdminUtils.escapeHtml||function(F){return String(F).replace(/[&<>"']/g,function(x){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]})},h=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function v(){return`
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
          ${h.map(F=>`
            <div class="admin-ratelimit-row" data-rl-key="${F.key}">
              <div class="admin-ratelimit-row-head">
                <span class="admin-ratelimit-row-label">${I(ServerI18n.t(F.labelKey))}</span>
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
      </div>`}function B(F){let x=F.querySelector("#rlEnvExport");setTimeout(async()=>{try{let u=window.AdminBootstrap;u&&typeof u.primeBootstrap=="function"&&await u.primeBootstrap();let d=u&&u.bootstrapSection?u.bootstrapSection("history_stats"):null,t=u&&u.bootstrapSection?u.bootstrapSection("blacklist"):null,r=u&&u.bootstrapSection?u.bootstrapSection("metrics"):null,n=[];n.push(d?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),n.push(t?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),n.push(r?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[o,s,e]=await Promise.all(n),l=d||(o&&o.ok?await o.json():null);if(l){let T=l.stats&&l.stats.last_24h||0,k=l.stats&&l.stats.total||0,_=F.querySelector("[data-rl-sum-hits]"),M=F.querySelector("[data-rl-sum-hits-delta]");_&&(_.textContent=T.toLocaleString()),M&&(M.textContent=ServerI18n.t("ratelimitSumTotal",{n:k.toLocaleString()}))}let g=t||(s&&s.ok?await s.json():null);if(g){let T=Array.isArray(g)?g:g.entries||g.keywords||[],k=F.querySelector("[data-rl-sum-black]");k&&(k.textContent=T.length?ServerI18n.t("ratelimitCountUnit",{n:T.length}):"0")}let a=F.querySelector("[data-rl-sum-viol]"),i=F.querySelector("[data-rl-sum-viol-rate]"),c=F.querySelector("[data-rl-sum-locked]"),p=r||(e&&e.ok?await e.json():null);if(p){let T=p&&p.rate_limits;if(T&&T.totals){let k=T.totals.hits||0,_=T.totals.violations||0,M=T.totals.locked_sources||0;if(a&&(a.textContent=_.toLocaleString()),i){let R=k+_;i.textContent=R>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(_/R*100).toFixed(1)}):"\u2014"}c&&(c.textContent=ServerI18n.t("ratelimitLockedSources",{n:M.toLocaleString()})),h.forEach(({key:R})=>{let K=T[R],$=F.querySelector(`[data-rl-current="${R}"]`);if($&&K){let O=(K.hits||0).toLocaleString(),U=(K.violations||0).toLocaleString();$.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:O,viol:U})}}),N(T)}else a&&(a.textContent="\u2014"),i&&(i.textContent=ServerI18n.t("ratelimitCountPendingBackend")),c&&(c.textContent="\u2014")}else a&&(a.textContent="\u2014"),i&&(i.textContent=ServerI18n.t("ratelimitCountPendingBackend")),c&&(c.textContent="\u2014");m(p&&p.recent_violations)}catch{}},4500);function m(u){let d=F.querySelector("[data-rl-vbody]"),t=F.querySelector("[data-rl-vcount]");if(!d)return;let r=Array.isArray(u)?u:[];if(t&&(t.textContent=ServerI18n.t("ratelimitViolationsCount",{n:r.length})),r.length===0){d.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let n=s=>{let e=new Date(s*1e3),l=g=>String(g).padStart(2,"0");return`${l(e.getHours())}:${l(e.getMinutes())}:${l(e.getSeconds())}`},o=s=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[s]||"var(--color-text-muted)";d.innerHTML=r.slice(0,30).map(s=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${n(s.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${o(s.scope)}">${(s.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${I(s.ip||"")}</span>
        </div>
      `).join("")}function N(u){u&&h.forEach(({key:d})=>{let t=u[d],r=F.querySelector(`[data-rl-suggest="${d}"]`);if(!r)return;let n=t&&t.suggestion;if(!n){r.hidden=!0;return}let o=r.querySelector("[data-rl-suggest-detail]");o&&(o.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(n.p95_per_second||0).toFixed(2),limit:t.limit||"\u2014",window:t.window||"\u2014",suggLimit:n.suggested_limit,suggWindow:n.suggested_window}));let s=r.querySelector("[data-rl-apply]");s&&(s.dataset.rlSuggestLimit=String(n.suggested_limit),s.dataset.rlSuggestWindow=String(n.suggested_window)),r.hidden=!1})}async function D(){try{let u=await fetch("/admin/metrics",{credentials:"same-origin"});if(!u.ok)return;let d=await u.json(),t=d&&d.rate_limits;if(!t)return;h.forEach(({key:r})=>{let n=t[r],o=F.querySelector(`[data-rl-current="${r}"]`);if(o&&n){let s=(n.hits||0).toLocaleString(),e=(n.violations||0).toLocaleString();o.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:s,viol:e})}}),N(t)}catch{}}F.addEventListener("click",async u=>{let d=u.target.closest("[data-rl-action]");if(!d)return;let t=d.dataset.rlAction;if(t==="save"){let r=d.dataset.rlSave,n=F.querySelector(`[data-rl-limit="${r}"]`),o=F.querySelector(`[data-rl-window="${r}"]`);if(!n||!o)return;let s=parseInt(n.value,10),e=parseInt(o.value,10);if(!Number.isFinite(s)||!Number.isFinite(e)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let l=d.textContent;d.disabled=!0,d.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let g=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:r,limit:s,window:e})});if(g.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:r.toUpperCase(),limit:s,window:e}),!0),D();else{let a=await g.json().catch(()=>({})),i=a&&a.error||`HTTP ${g.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:i}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{d.disabled=!1,d.textContent=l}return}if(t==="apply-suggest"){let r=d.dataset.rlApply,n=parseInt(d.dataset.rlSuggestLimit,10),o=parseInt(d.dataset.rlSuggestWindow,10);if(!r||!Number.isFinite(n)||!Number.isFinite(o))return;let s=d.textContent;d.disabled=!0,d.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let e=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:r,limit:n,window:o})});if(e.ok){let l=F.querySelector(`[data-rl-limit="${r}"]`),g=F.querySelector(`[data-rl-window="${r}"]`);l&&(l.value=n),g&&(g.value=o),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:r.toUpperCase(),limit:n,window:o}),!0),D(),S()}else{let l=await e.json().catch(()=>({})),g=l&&l.error||`HTTP ${e.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:g}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{d.disabled=!1,d.textContent=s}return}if(t==="export"){let r=[];F.querySelectorAll("[data-rl-limit]").forEach(n=>{let o=n.dataset.rlLimit.toUpperCase();r.push(`${o}_RATE_LIMIT=${n.value}`)}),F.querySelectorAll("[data-rl-window]").forEach(n=>{let o=n.dataset.rlWindow.toUpperCase();r.push(`${o}_RATE_WINDOW=${n.value}`)}),x.textContent=r.join(`
`),x.hidden=!1;try{navigator.clipboard?.writeText(r.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else t==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([n,[o,s]])=>{let e=F.querySelector(`[data-rl-limit="${n}"]`),l=F.querySelector(`[data-rl-window="${n}"]`);e&&(e.value=o),l&&(l.value=s)}),x.hidden=!0,S())});function S(){h.forEach(({key:u})=>{let d=F.querySelector(`[data-rl-limit="${u}"]`),t=F.querySelector(`[data-rl-window="${u}"]`),r=F.querySelector(`[data-rl-lockout="${u}"]`),n=F.querySelector(`[data-rl-effective="${u}"]`);if(!d||!t||!n)return;let o=parseInt(d.value,10)||0,s=parseInt(t.value,10)||1,e=(o/s).toFixed(2),l=Math.round(o*1.5),g=`effective_rate = ${o} / ${s}s = ${e} req/s \xB7 burst = ${l}`;if(u==="login"&&r){let a=parseInt(r.value,10)||0;g+=` \xB7 lock = ${a}s`}n.textContent=g})}F.addEventListener("input",u=>{let d=u.target;!d||!d.dataset.rlLimit&&!d.dataset.rlLockout||S()}),F.addEventListener("change",u=>{let d=u.target;!d||!d.dataset.rlWindow||S()}),S();function L(u,d){if(!u||!Array.isArray(d))return;let t=96,r=24,n=d.length?d:new Array(24).fill(0),o=Math.max(1,...n),s=t/Math.max(1,n.length-1),e=n.map((g,a)=>`${(a*s).toFixed(1)},${(r-2-g/o*(r-4)).toFixed(1)}`).join(" "),l=u.querySelector("polyline");l&&l.setAttribute("points",e)}h.forEach(({key:u})=>{let d=F.querySelector(`[data-rl-spark="${u}"]`);d&&L(d,new Array(24).fill(0))});let P=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,w={allowlist:[],denylist:[]},b={input:F.querySelector("[data-rl-ip-input]"),select:F.querySelector("[data-rl-ip-select]"),addBtn:F.querySelector("[data-rl-ip-add]"),summary:F.querySelector("[data-rl-ip-summary]"),error:F.querySelector("[data-rl-ip-error]"),allowCount:F.querySelector("[data-rl-ip-allow-count]"),denyCount:F.querySelector("[data-rl-ip-deny-count]"),allowBody:F.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:F.querySelector('[data-rl-ip-body="denylist"]')};function E(u){if(b.error){if(!u){b.error.hidden=!0,b.error.textContent="";return}b.error.hidden=!1,b.error.textContent=u}}function q(u){let d=u==="allowlist"?b.allowBody:b.denyBody,t=u==="allowlist"?b.allowCount:b.denyCount;if(!d||!t)return;let r=Array.isArray(w[u])?w[u]:[];if(t.textContent=String(r.length),r.length===0){let n=ServerI18n.t(u==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");d.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:n})}</div>`;return}d.innerHTML=r.map(n=>{let o=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:I(n)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${I(n)}">
          <span class="admin-ratelimit-ip-chip-cidr">${I(n)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${I(n)}" data-rl-ip-remove-kind="${u}" title="${o}" aria-label="${o}">\xD7</button>
        </div>
      `}).join("")}function A(){if(q("allowlist"),q("denylist"),b.summary){let u=(w.allowlist||[]).length,d=(w.denylist||[]).length;b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:u,deny:d})}}async function C(){try{let u=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!u.ok){b.summary&&(b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:u.status}));return}let d=await u.json();d&&typeof d=="object"&&(w={allowlist:Array.isArray(d.allowlist)?d.allowlist:[],denylist:Array.isArray(d.denylist)?d.denylist:[]},A())}catch{b.summary&&(b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function f(u,{toastLabel:d}={}){try{let t=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(t.ok){let o=await t.json();return w={allowlist:Array.isArray(o.allowlist)?o.allowlist:[],denylist:Array.isArray(o.denylist)?o.denylist:[]},A(),E(""),d&&typeof showToast=="function"&&showToast(d,!0),!0}let r=await t.json().catch(()=>({})),n=r&&r.error||`HTTP ${t.status}`;return E(n),!1}catch{return E(ServerI18n.t("ratelimitNetworkError")),!1}}b.addBtn&&b.addBtn.addEventListener("click",async()=>{if(!b.input||!b.select)return;let u=(b.input.value||"").trim();if(!u){E(ServerI18n.t("ratelimitIpRequiredError"));return}if(!P.test(u)){E(ServerI18n.t("ratelimitIpFormatError"));return}let d=b.select.value==="denylist"?"denylist":"allowlist",t=Array.from(new Set([...w[d]||[],u]));await f({[d]:t},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(d==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:u})})&&(b.input.value="")}),b.input&&(b.input.addEventListener("keydown",u=>{u.key==="Enter"&&(u.preventDefault(),b.addBtn&&b.addBtn.click())}),b.input.addEventListener("input",()=>{b.error&&!b.error.hidden&&E("")})),F.addEventListener("click",async u=>{let d=u.target.closest("[data-rl-ip-remove]");if(!d)return;let t=d.dataset.rlIpRemove,r=d.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",n=(w[r]||[]).filter(o=>o!==t);await f({[r]:n},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(r==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:t})})}),C(),setTimeout(async()=>{try{let u=await fetch("/admin/metrics",{credentials:"same-origin"});if(!u.ok)return;let d=await u.json(),t=d&&d.rate_limits;if(!t)return;h.forEach(({key:r})=>{let n=t[r]&&(t[r].bucket_history||t[r].history);if(Array.isArray(n)&&n.length){let o=F.querySelector(`[data-rl-spark="${r}"]`);o&&L(o,n.slice(-24))}})}catch{}},5500)}function j(){let F=document.getElementById("settings-grid");if(!F||document.getElementById(y))return;F.insertAdjacentHTML("beforeend",v());let x=document.getElementById(y);x&&B(x)}document.addEventListener("admin-panel-rendered",j),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&j()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),j()})})()});var gt=ye(()=>{(function(){"use strict";let y="sec-viewer-theme",I="danmu.viewerTheme.v1",h=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function v(){return`
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
      </div>`}let B=/^#[0-9a-f]{6}$/i,j=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function F(D){return String(D??"").replace(/[&<>"']/g,S=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[S])}function x(D){let S={};return!D||typeof D!="object"||(["bg","primary","hero"].forEach(L=>{typeof D[L]=="string"&&B.test(D[L])&&(S[L]=D[L])}),(D.mode==="dark"||D.mode==="light")&&(S.mode=D.mode),typeof D.font=="string"&&/^[\w .-]{1,64}$/.test(D.font)&&(S.font=D.font),(D.logo===null||typeof D.logo=="string"&&j.test(D.logo))&&(S.logo=D.logo)),S}function m(D){let S={...h[0],logo:null};try{let a=localStorage.getItem(I);a&&(S={...S,...x(JSON.parse(a))})}catch{}let L="default";function P(){try{localStorage.setItem(I,JSON.stringify(S))}catch{}}function w(a){let i=/^#?([0-9a-f]{6})$/i.exec(a);if(!i)return[0,0,0];let c=parseInt(i[1],16);return[c>>16&255,c>>8&255,c&255]}function b([a,i,c]){let p=[a,i,c].map(T=>(T/=255,T<=.03928?T/12.92:Math.pow((T+.055)/1.055,2.4)));return .2126*p[0]+.7152*p[1]+.0722*p[2]}function E(a,i){let c=b(w(a)),p=b(w(i)),[T,k]=c>p?[c,p]:[p,c];return(T+.05)/(k+.05)}function q(a){return a>=7?{label:"AAA",cls:"is-good"}:a>=4.5?{label:"AA",cls:"is-ok"}:a>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function A(){let a=D.querySelector("[data-vt-presets]");a.innerHTML="",h.forEach(i=>{let c=document.createElement("button");c.type="button",c.className="admin-vt-preset"+(L===i.id?" is-active":""),c.innerHTML=`
          <div class="swatch" style="background:${i.bg}">
            <span style="background:${i.primary}"></span>
            <span style="background:${i.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(i.nameKey)}</div>
          <div class="mode">${ServerI18n.t(i.mode==="dark"?"lbDark":"lbLight")}</div>
        `,c.addEventListener("click",()=>{S={...S,...i},L=i.id,P(),g()}),a.appendChild(c)})}function C(){D.querySelectorAll("[data-vt-mode-btn]").forEach(a=>{a.classList.toggle("is-active",S.mode===a.dataset.vtModeBtn)})}function f(){let a=D.querySelector("[data-vt-colors]"),i=S.mode==="dark"?"#F8FAFC":"#0F172A",c=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:i,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:S.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:S.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];a.innerHTML=c.map(p=>{let T=E(S[p.key],p.vs),k=q(T),_=F(S[p.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${_}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${p.label}</span>
                <span class="grade ${k.cls}">${k.label} \xB7 ${T.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${_}" data-vt-color="${p.key}" />
                <input type="text" value="${_}" data-vt-hex="${p.key}" spellcheck="false" />
                <span class="vs">vs ${p.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function u(){let a=D.querySelector("[data-vt-logo-preview]"),i=D.querySelector(".hint-empty"),c=D.querySelector("[data-vt-logo-actions]");S.logo?(a.src=S.logo,a.hidden=!1,i.style.display="none",c.hidden=!1):(a.hidden=!0,i.style.display="",c.hidden=!0)}function d(){let a=D.querySelector("[data-vt-font]");a.value=S.font;let i=D.querySelector("[data-vt-font-specimen]");i.style.fontFamily=S.font}function t(){let a=S.mode==="dark"?"#F8FAFC":"#0F172A",i=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:E(a,S.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:E(S.primary,S.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:E(S.hero,S.bg)}];D.querySelector("[data-vt-contrast]").innerHTML=i.map(c=>{let p=q(c.ratio);return`<span class="vt-contrast-chip ${p.cls}">${c.lbl} \xB7 ${p.label} ${c.ratio.toFixed(1)}</span>`}).join("")}function r(){let a=D.querySelector("[data-vt-stage]"),i=S.mode==="dark"?"#F8FAFC":"#0F172A";a.style.setProperty("--vt-bg",S.bg),a.style.setProperty("--vt-primary",S.primary),a.style.setProperty("--vt-hero",S.hero),a.style.setProperty("--vt-fg",i),a.style.fontFamily=S.font;let c=D.querySelector("[data-vt-preview-logo]");if(S.logo){let p=document.createElement("img");p.src=S.logo,p.style.maxHeight="40px",c.replaceChildren(p)}else c.textContent="Danmu Fire"}let n="auto",o="auto";function s(){D.querySelectorAll("[data-vt-theme-btn]").forEach(a=>{a.classList.toggle("is-active",a.dataset.vtThemeBtn===n)}),D.querySelectorAll("[data-vt-lang-btn]").forEach(a=>{a.classList.toggle("is-active",a.dataset.vtLangBtn===o)})}async function e(){try{let a=await fetch("/get_settings",{credentials:"same-origin"});if(!a.ok)return;let i=await a.json(),c=i&&i.ViewerThemeMode&&i.ViewerThemeMode[1],p=i&&i.ViewerLangMode&&i.ViewerLangMode[1];typeof c=="string"&&(n=c),typeof p=="string"&&(o=p),s()}catch{}}async function l(a,i){if(window.csrfFetch)try{let c=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:a,value:i,index:1})});if(!c.ok)throw new Error(c.status);window.showToast&&window.showToast(`${a} = ${i}`,!0)}catch(c){console.warn("[admin-viewer-theme] force-mode update failed:",c),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:a}),!1)}}function g(){A(),C(),f(),u(),d(),t(),r(),s()}D.addEventListener("input",a=>{if(a.target.matches("[data-vt-color]")){let i=a.target.dataset.vtColor;B.test(a.target.value)&&(S[i]=a.target.value,L="custom",P(),g())}else if(a.target.matches("[data-vt-hex]")){let i=a.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(a.target.value)&&(S[i]=a.target.value,L="custom",P(),g())}else a.target.matches("[data-vt-font]")&&(S.font=a.target.value,P(),g())}),D.addEventListener("change",a=>{if(a.target.matches("[data-vt-logo-input]")){let i=a.target.files&&a.target.files[0];if(!i)return;if(i.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let c=new FileReader;c.onload=()=>{S.logo=String(c.result||""),P(),g()},c.readAsDataURL(i)}}),D.addEventListener("click",a=>{let i=a.target.closest("[data-vt-mode-btn]");if(i){S.mode=i.dataset.vtModeBtn,L="custom",P(),g();return}let c=a.target.closest("[data-vt-theme-btn]");if(c){n=c.dataset.vtThemeBtn,s(),l("ViewerThemeMode",n);return}let p=a.target.closest("[data-vt-lang-btn]");if(p){o=p.dataset.vtLangBtn,s(),l("ViewerLangMode",o);return}if(a.target.closest("[data-vt-logo-remove]")){S.logo=null,P(),g();return}let k=a.target.closest("[data-vt-device-btn]");if(k){D.querySelectorAll("[data-vt-device-btn]").forEach(M=>M.classList.toggle("is-active",M===k)),D.querySelector("[data-vt-frame]").dataset.device=k.dataset.vtDeviceBtn;return}let _=a.target.closest("[data-vt-action]");_&&_.dataset.vtAction==="reset"&&(S={...h[0],logo:null},L="default",P(),g())}),g(),e()}document.addEventListener("click",function(D){let S=D.target.closest("[data-vt-jump]");if(!S)return;let L=S.dataset.vtJump;if(L){D.preventDefault();try{location.hash="#/"+L}catch{}}});function N(){let D=document.getElementById("settings-grid");if(!D||document.getElementById(y))return;D.insertAdjacentHTML("beforeend",v());let S=document.getElementById(y);S&&m(S)}document.addEventListener("admin-panel-rendered",N),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),N()})})()});var yt=ye(()=>{(function(){"use strict";let y="sec-system-overview";function I(){return`
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
          ${[{id:"uptime",label:ServerI18n.t("sohMetricUptime")},{id:"conn",label:ServerI18n.t("sohMetricConnected")},{id:"ram",label:ServerI18n.t("sohMetricMemory")},{id:"ver",label:ServerI18n.t("sohMetricVersion")}].map(x=>`
            <div class="admin-soh-kpi" data-m="${x.id}">
              <div class="admin-soh-kpi__label">${x.label}</div>
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
          ${[{hash:"#/backup",label:ServerI18n.t("adminNavBackup"),sub:ServerI18n.t("sohLinkBackupSub"),attr:""},{hash:"#/security",label:ServerI18n.t("adminNavSecurity"),sub:ServerI18n.t("sohLinkSecuritySub"),attr:'data-soh-sub="security"'},{hash:"#/integrations",label:ServerI18n.t("adminNavIntegrations"),sub:"\u2014",attr:'data-soh-sub="integrations"'},{hash:"#/about",label:ServerI18n.t("sohLinkAbout"),sub:ServerI18n.t("sohLinkAboutSub"),attr:""}].map(x=>`
            <a class="admin-ui-group-row admin-soh-link" href="${x.hash}">
              <span class="lbl">${x.label}</span>
              <span class="val admin-soh-link__sub" ${x.attr}>${x.sub}</span>
              <span class="admin-soh-link__chev" aria-hidden="true">\u203A</span>
            </a>`).join("")}
        </div>
      </div>`}function h(x){let m=Math.floor(x/86400),N=Math.floor(x%86400/3600),D=Math.floor(x%3600/60);return m>0?`${m}d ${String(N).padStart(2,"0")}h ${String(D).padStart(2,"0")}m`:N>0?`${N}h ${String(D).padStart(2,"0")}m`:`${D}m ${String(x%60).padStart(2,"0")}s`}function v(x,m,N){let D=document.querySelector(`[data-m="${x}"]`);if(!D)return;let S=D.querySelector("[data-m-v]");S&&(S.textContent=m);let L=D.querySelector("[data-m-sub]");L&&(L.textContent=N||"")}function B(x){let m=document.querySelector("[data-soh-banner-dot]"),N=document.querySelector("[data-soh-banner-title]"),D=document.querySelector("[data-soh-chip]"),L=!(x.queue_size!=null&&x.queue_capacity!=null&&x.queue_size>=x.queue_capacity);D&&D.classList.toggle("is-warn",!L),m&&m.classList.toggle("is-warn",!L),N&&(N.textContent=L?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function j(){(async()=>{try{let N=await window.csrfFetch("/admin/metrics");if(!N.ok)return;let D=await N.json(),S=C=>Array.isArray(C)&&C.length?C[C.length-1]:null,L=D.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-D.server_started_at)):0;v("uptime",L>0?h(L):"\u2014","");let P=null;try{let C=await fetch("/admin/audience/stats",{credentials:"same-origin"});C.ok&&(P=(await C.json()).total_live)}catch{}let w=D.ws_clients??0;v("conn",String(w+(P||0)),P==null?ServerI18n.t("sohConnOverlaysOnly",{n:w}):ServerI18n.t("sohConnBreakdown",{overlays:w,viewers:P}));let b=S(D.mem_series||[]),E=D.mem_total_mb?(D.mem_total_mb/1024).toFixed(0):null;v("ram",b!=null?`${Number(b).toFixed(0)}%`:"\u2014",E?ServerI18n.t("sohMemorySub",{total:E}):"");let q=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";v("ver",`v${q}`,ServerI18n.t("sohVersionSub")),B(D);let A=document.querySelector('[data-soh-sub="integrations"]');A&&(A.textContent=ServerI18n.t("sohLinkExtSub",{webhooks:D.webhooks_count??0,plugins:D.plugins_loaded??0}));try{let C=await window.csrfFetch("/admin/ws-auth");if(C.ok){let f=await C.json(),u=document.querySelector('[data-soh-sub="security"]');u&&(u.textContent=f.require_token?ServerI18n.t("sohLinkSecurityOn"):ServerI18n.t("sohLinkSecurityOff"))}}catch{}}catch{}})();let x=document.getElementById(y);if(!x)return;let m=()=>{let N=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";x.querySelectorAll("[data-soh-mode]").forEach(D=>{let S=D.dataset.sohMode===N;D.classList.toggle("is-active",S),D.setAttribute("aria-pressed",S?"true":"false")})};m(),document.addEventListener("admin:theme-mode",m),x.addEventListener("click",function(N){let D=N.target.closest("[data-soh-mode]");if(D){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(D.dataset.sohMode),m();return}let S=N.target.closest("[data-soh-action]");if(!(!S||S.disabled)){if(S.dataset.sohAction==="copy-url"){let L=document.getElementById("sysoPublicUrl")?.textContent||"";window.AdminUtils.copyText(L);return}if(S.dataset.sohAction==="show-qr"){let L=x.querySelector("[data-soh-qr]");if(!L)return;if(!L.hidden){L.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(P=>P.ok?P.json():Promise.reject(P)).then(P=>{L.innerHTML=P.svg,L.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function F(){let x=document.getElementById("settings-grid");!x||document.getElementById(y)||(x.insertAdjacentHTML("beforeend",I()),document.getElementById(y)&&j())}document.addEventListener("admin-panel-rendered",F),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&F()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),F()})})()});var bt=ye(()=>{(function(){"use strict";let y="sec-polls",I=window.AdminUtils&&window.AdminUtils.escapeHtml||function(j){return String(j).replace(/[&<>"']/g,function(F){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[F]})};function h(){return`
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
  `}function v(){let j=document.getElementById("sec-polls");if(!j)return;let F=j.querySelector("[data-poll-queue]"),x=j.querySelector("[data-poll-editor]"),m=j.querySelector("[data-poll-view-builder]"),N=j.querySelector("[data-poll-view-live]"),D=j.querySelector("[data-poll-view-results]"),S="danmu.adminPollQueue.v2";function L(){return"q_"+Math.random().toString(36).slice(2,8)}function P(){return"o_"+Math.random().toString(36).slice(2,6)}function w(z){return{id:P(),label:""}}function b(){return{id:L(),text:"",timer:90,image_url:"",server_q_id:"",options:[w("A"),w("B")]}}let E=null,q="builder",A=null,C=0,f={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},u=null,d=[];try{let z=localStorage.getItem(S);if(z){let Q=JSON.parse(z);Array.isArray(Q)?d=Q:Q&&Array.isArray(Q.queue)&&(d=Q.queue)}}catch{}(!Array.isArray(d)||d.length===0)&&(d=[b()]),d.forEach(z=>{typeof z.image_url!="string"&&(z.image_url=""),typeof z.server_q_id!="string"&&(z.server_q_id="")});let t=d[0].id,r="manual",n=null,o=null,s={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function e(){try{localStorage.setItem(S,JSON.stringify({queue:d,activeId:t,mode:r}))}catch{}}function l(z){return d.find(Q=>Q.id===z)}function g(z,Q){let Z=l(z);Z&&Object.assign(Z,Q)}function a(z,Q,Z){let se=z.slice(),[ie]=se.splice(Q,1);return se.splice(Z,0,ie),se}function i(){F.innerHTML="",d.forEach((z,Q)=>{let Z=document.createElement("div");Z.className="admin-poll-qrow",z.id===t&&Z.classList.add("is-active");let se=s.active&&s.currentIndex===Q;se&&Z.classList.add("is-running"),Z.dataset.qid=z.id,Z.draggable=!0;let ie=!!z.image_url;Z.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${Q+1}</span>
            <div class="info">
              <div class="text">${I(z.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:z.options.length})} \xB7 ${z.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):z.timer+"s"} \xB7 ${ie?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${se?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":z.id===t?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,F.appendChild(Z)})}function c(){let z=l(t)||d[0];if(!z){x.innerHTML="";return}let Q=d.indexOf(z);x.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${Q+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:Q+1})}</span>
            </div>
            <span class="progress">Q${Q+1} / ${d.length}</span>
          </div>

          <div class="admin-poll-field-label">${ServerI18n.t("pollQuestion")}</div>
          <input type="text" class="admin-poll-q-text" data-ed-text value="${I(z.text||"")}" placeholder="${ServerI18n.t("pollBuilderQuestionPlaceholder")}" maxlength="200" />

          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderFieldQuestionImage")}</div>
          <div class="admin-poll-q-image">
            ${z.image_url?`
              <img class="admin-poll-q-image-thumb" src="${I(z.image_url)}" alt="" />
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
                <input type="text" data-ed-opt-text="${Z.id}" value="${I(Z.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+se)})}" maxlength="100" />
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
        `}function p(){E&&E.active?q="live":A?q="results":q="builder",j.dataset.pollView=q,m.hidden=q!=="builder",N.hidden=q!=="live",D.hidden=q!=="results",i(),c(),J(),q==="live"?R():q==="results"&&$(),q==="live"?T():k()}function T(){u||(u=setInterval(()=>{q!=="live"||!E||!E.active||K()},1e3))}function k(){u&&(clearInterval(u),u=null)}function _(z,Q){if(!z||!z.time_limit_seconds)return null;if(!Q)return z.time_limit_seconds;let Z=Date.now()/1e3-Q;return Math.max(0,Math.round(z.time_limit_seconds-Z))}function M(z){if(z==null)return"\u221E";let Q=String(Math.floor(z/60)).padStart(2,"0"),Z=String(z%60).padStart(2,"0");return`${Q}:${Z}`}function R(){if(!E||!E.questions||E.questions.length===0){N.innerHTML="";return}let z=E.current_index>=0?E.current_index:0,Q=E.questions.length,Z=E.questions[z],se=_(Z,E.started_at),ie=Z.time_limit_seconds||0,de=ie>0&&se!=null?Math.max(0,Math.min(1,se/ie)):1,ce=ie>0&&se!=null&&se<=Math.max(5,ie*.15),ke=Z.options.reduce((fe,Se)=>fe+(Se.count||0),0),Ee=[...Z.options].sort((fe,Se)=>(Se.count||0)-(fe.count||0)),ee=Ee[0]?Ee[0].count:0,ae=E.questions[z+1],oe=110,me=oe/2-6,re=2*Math.PI*me,ve=re*de;N.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${I((E.poll_id||"").slice(-6))}
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
                <div class="text">${I(Z.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${Ee.map(fe=>{let Se=ke>0?fe.count/ke*100:0,_e=(fe.count||0)>0&&fe.count===ee;return`
                    <div class="admin-polls-live-bar ${_e?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${I(fe.key)}</span>
                        <span class="lbl">${I(fe.text||"")}</span>
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
                ${ae?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${I(ae.text||"")}</em>`})}</span>`:""}
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
                  ${E.questions.map((fe,Se)=>{let _e=Se<z?"done":Se===z?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${_e}">
                        <span class="idx">${_e==="done"?"\u2713":Se+1}</span>
                        <span class="t">${I(fe.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
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
                    <label class="admin-polls-live-toggle ${f[fe.k]?"is-on":""}" data-live-toggle="${fe.k}">
                      <span class="lbl">${fe.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function K(){if(!E||!E.active)return;let z=E.current_index>=0?E.current_index:0,Q=E.questions[z];if(!Q)return;let Z=_(Q,E.started_at),se=Q.time_limit_seconds||0,ie=N.querySelector("[data-live-mmss]"),de=N.querySelector("[data-live-ring]");if(ie&&(ie.textContent=Z==null?ServerI18n.t("pollBuilderNoTimeLimit"):M(Z),ie.classList.toggle("is-low",se>0&&Z!=null&&Z<=Math.max(5,se*.15))),de&&se>0&&Z!=null){let ce=+de.getAttribute("r"),ke=2*Math.PI*ce,Ee=Math.max(0,Math.min(1,Z/se));de.setAttribute("stroke-dasharray",`${ke*Ee} ${ke}`);let ee=Z<=Math.max(5,se*.15);de.setAttribute("stroke",ee?"var(--hud-crimson)":"var(--color-primary)"),de.style.filter=`drop-shadow(0 0 4px ${ee?"var(--hud-crimson)":"var(--color-primary)"})`}f.autoAdvance&&se>0&&Z===0&&(z>=E.questions.length-1?te():G())}function $(){let z=A;if(!z||!z.questions||z.questions.length===0){D.innerHTML="";return}let Q=z.questions.length,Z=Math.max(0,Math.min(C,Q-1)),se=z.questions[Z],ie=se.options.reduce((re,ve)=>re+(ve.count||0),0),de=[...se.options].sort((re,ve)=>(ve.count||0)-(re.count||0)),ce=de[0]||{key:"-",text:"\u2014",count:0},ke=de[1],Ee=ie>0?ce.count/ie*100:0,ee=ke?Math.max(0,ce.count-ke.count):ce.count,ae=z.started_at||0,oe=z.ended_at||Date.now()/1e3,me=Math.max(0,Math.round(oe-ae));D.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${Q>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${z.questions.map((re,ve)=>`
                    <button type="button" role="tab" class="${ve===Z?"is-active":""}" data-results-tab="${ve}">
                      Q${ve+1}<span class="t">${I((re.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${Z+1}/${Q} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:M(me),n:ie})}</span>
                </div>
                <div class="text">${I(se.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${I(ce.key)}</div>
                <div class="info">
                  <div class="lbl">${I(ce.text||"\u2014")}</div>
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
                        <span class="tag">${I(re.key)}</span>
                        <span class="lbl">${I(re.text||"")}</span>
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
        `}function O(z){let Q=[["question_index","question","option_key","option_text","count","percentage"]];return z.questions.forEach((Z,se)=>{let ie=Z.options.reduce((de,ce)=>de+(ce.count||0),0);Z.options.forEach(de=>{let ce=ie>0?(de.count/ie*100).toFixed(1):"0";Q.push([se+1,Z.text,de.key,de.text,de.count,ce])})}),Q.map(Z=>Z.map(se=>{let ie=String(se??"");return/[",\n]/.test(ie)?`"${ie.replace(/"/g,'""')}"`:ie}).join(",")).join(`
`)}function U(z,Q,Z){let se=new Blob([Z],{type:Q}),ie=document.createElement("a");ie.href=URL.createObjectURL(se),ie.download=z,document.body.appendChild(ie),ie.click(),setTimeout(()=>{URL.revokeObjectURL(ie.href),ie.remove()},0)}j.addEventListener("click",z=>{let Q=z.target.closest("[data-live-action]");if(Q){let de=Q.dataset.liveAction;de==="advance"?G():de==="end"?te():de==="pause"&&(f.autoAdvance=!1,R());return}let Z=z.target.closest("[data-live-toggle]");if(Z){let de=Z.dataset.liveToggle;de in f&&(f[de]=!f[de],Z.classList.toggle("is-on",f[de]));return}let se=z.target.closest("[data-results-tab]");if(se){C=+se.dataset.resultsTab||0,$();return}let ie=z.target.closest("[data-results-action]");if(ie){let de=ie.dataset.resultsAction,ce=A;if(!ce)return;if(de==="copy"){let ke=ce.questions.map((Ee,ee)=>{let ae=Ee.options.reduce((me,re)=>me+(re.count||0),0),oe=Ee.options.map(me=>{let re=ae>0?(me.count/ae*100).toFixed(1):"0.0";return`  ${me.key}. ${me.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:me.count})} (${re}%)`});return`Q${ee+1}: ${Ee.text}
${oe.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(ke)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else de==="csv"?U(`poll_${(ce.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",O(ce)):de==="json"?U(`poll_${(ce.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(ce,null,2)):de==="reset"&&(A=null,C=0,p());return}}),F.addEventListener("dragstart",z=>{let Q=z.target.closest(".admin-poll-qrow");Q&&(n=Q.dataset.qid,Q.classList.add("is-dragging"))}),F.addEventListener("dragend",z=>{let Q=z.target.closest(".admin-poll-qrow");Q&&Q.classList.remove("is-dragging"),n=null,F.querySelectorAll(".is-drag-over").forEach(Z=>Z.classList.remove("is-drag-over"))}),F.addEventListener("dragover",z=>{z.preventDefault();let Q=z.target.closest(".admin-poll-qrow");!Q||!n||Q.dataset.qid===n||(F.querySelectorAll(".is-drag-over").forEach(Z=>Z.classList.remove("is-drag-over")),Q.classList.add("is-drag-over"))}),F.addEventListener("drop",z=>{z.preventDefault();let Q=z.target.closest(".admin-poll-qrow");if(!Q||!n)return;let Z=d.findIndex(ie=>ie.id===n),se=d.findIndex(ie=>ie.id===Q.dataset.qid);Z<0||se<0||Z===se||(d=a(d,Z,se),e(),p())}),F.addEventListener("click",z=>{let Q=z.target.closest(".admin-poll-qrow");Q&&(t=Q.dataset.qid,e(),p())}),x.addEventListener("input",z=>{let Q=l(t);if(Q){if(z.target.matches("[data-ed-text]")){Q.text=z.target.value,e(),i();return}if(z.target.matches("[data-ed-opt-text]")){let Z=z.target.dataset.edOptText,se=Q.options.find(ie=>ie.id===Z);se&&(se.label=z.target.value,e(),i())}}}),x.addEventListener("change",z=>{let Q=l(t);Q&&z.target.matches("[data-ed-timer]")&&(Q.timer=+z.target.value,e(),i())}),x.addEventListener("click",async z=>{let Q=l(t);if(!Q)return;let Z=z.target.closest("[data-ed-opt-remove]");if(Z){let ie=Z.dataset.edOptRemove;Q.options.length>2&&(Q.options=Q.options.filter(de=>de.id!==ie),e(),c(),i());return}if(z.target.closest("[data-ed-opt-add]")){Q.options.length<6&&(Q.options.push(w()),e(),c(),i());return}let se=z.target.closest("[data-ed-action]");if(se)if(se.dataset.edAction==="remove-q"){if(d.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let de=d.findIndex(ce=>ce.id===t);d=d.filter(ce=>ce.id!==t),t=d[Math.min(de,d.length-1)].id,e(),p()}}else if(se.dataset.edAction==="upload-q-image"){let ie=x.querySelector("[data-ed-q-image-input]");ie&&ie.click()}else se.dataset.edAction==="remove-q-image"&&(Q.image_url="",e(),c(),i())}),x.addEventListener("change",async z=>{if(!z.target.matches("[data-ed-q-image-input]"))return;let Q=z.target.files&&z.target.files[0];if(!Q)return;let Z=l(t);if(!Z)return;if(!s.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),z.target.value="";return}if(!Z.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),z.target.value="";return}if(Q.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),z.target.value="";return}let se=new FormData;se.append("file",Q);try{let ie=await csrfFetch(`/admin/poll/${encodeURIComponent(s.pollId)}/upload-image/${encodeURIComponent(Z.server_q_id)}`,{method:"POST",body:se}),de=await ie.json().catch(()=>({}));if(!ie.ok)throw new Error(de.error||"upload failed");Z.image_url=de.image_url,e(),c(),i(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(ie){showToast&&showToast(String(ie.message||ie),!1)}finally{z.target.value=""}}),x.addEventListener("dragstart",z=>{let Q=z.target.closest(".admin-poll-opt");Q&&(o=Q.dataset.oid,Q.classList.add("is-dragging"))}),x.addEventListener("dragend",z=>{x.querySelectorAll(".is-dragging, .is-drag-over").forEach(Q=>Q.classList.remove("is-dragging","is-drag-over")),o=null}),x.addEventListener("dragover",z=>{let Q=z.target.closest(".admin-poll-opt");!Q||!o||Q.dataset.oid===o||(z.preventDefault(),x.querySelectorAll(".is-drag-over").forEach(Z=>Z.classList.remove("is-drag-over")),Q.classList.add("is-drag-over"))}),x.addEventListener("drop",z=>{z.preventDefault();let Q=z.target.closest(".admin-poll-opt"),Z=l(t);if(!Q||!o||!Z)return;let se=Z.options.findIndex(de=>de.id===o),ie=Z.options.findIndex(de=>de.id===Q.dataset.oid);se<0||ie<0||se===ie||(Z.options=a(Z.options,se,ie),e(),c())}),j.addEventListener("click",z=>{if(z.target.closest("[data-poll-action='add']")){let de=b();d.push(de),t=de.id,e(),p();return}let Z=z.target.closest("[data-poll-template]");if(Z){let de=b(),ce=Z.dataset.pollTemplate,ke=["A","B","C","D","E"],Ee=ee=>ee.map((ae,oe)=>{let me=w(ke[oe]);return me.text=ae,me});ce==="yesno"?(de.text="",de.options=Ee([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):ce==="stars"?(de.timer=60,de.options=Ee(["1","2","3","4","5"])):ce==="four"&&(de.options=Ee(["","","",""])),d.push(de),t=de.id,e(),p();return}let se=z.target.closest("[data-poll-mode]");se&&(r=se.dataset.pollMode,j.querySelectorAll("[data-poll-mode]").forEach(de=>de.classList.toggle("is-active",de===se)),e());let ie=z.target.closest("[data-poll-session-action]");if(ie){let de=ie.dataset.pollSessionAction;de==="start"?W():de==="advance"?G():de==="end"&&te()}});function J(){let z=j.querySelector("[data-poll-session]");if(!z)return;let Q=z.querySelector("[data-poll-session-status]"),Z=z.querySelector("[data-poll-session-action='start']"),se=z.querySelector("[data-poll-session-action='advance']"),ie=z.querySelector("[data-poll-session-action='end']");if(!s.pollId||!s.active){Q.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,Z.hidden=!1,se.hidden=!0,ie.hidden=!0;return}let de=d.length,ce=s.currentIndex+1,ke=s.currentIndex>=de-1;Q.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${ce} / ${de}</span>`,Z.hidden=!0,se.hidden=ke,ie.hidden=!1}async function W(){try{let z=d.map((ce,ke)=>{let Ee=(ce.text||"").trim(),ee=ce.options.map(ae=>(ae.label||"").trim()).filter(Boolean);if(!Ee)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:ke+1}));if(ee.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:ke+1}));return{text:Ee,options:ee,time_limit_seconds:ce.timer&&ce.timer>0?ce.timer:null}});if(!z.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let Q=(()=>{let ce=d.map(ke=>Number(ke.timer)||0).filter(ke=>ke>0);return ce.length?Math.round(ce.reduce((ke,Ee)=>ke+Ee,0)/ce.length):null})(),Z=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:z,mode:r||"manual",default_duration_s:Q})}),se=await Z.json().catch(()=>({}));if(!Z.ok)throw new Error(se.error||ServerI18n.t("pollBuilderErrCreateFailed"));s.pollId=se.poll_id,(se.questions||[]).forEach((ce,ke)=>{d[ke]&&(d[ke].server_q_id=ce.id)}),e();let ie=await csrfFetch("/admin/poll/start",{method:"POST"}),de=await ie.json().catch(()=>({}));if(!ie.ok)throw new Error(de.error||ServerI18n.t("pollBuilderErrStartFailed"));s.active=!0,s.currentIndex=de.current_index??0,E=de,A=null,p(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),ne()}catch(z){showToast&&showToast(String(z.message||z),!1)}}async function G(){try{let z=await csrfFetch("/admin/poll/advance",{method:"POST"}),Q=await z.json().catch(()=>({}));if(!z.ok)throw new Error(Q.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));s.currentIndex=Q.current_index,s.active=!!Q.active,E=Q,p(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:s.currentIndex+1}),!0)}catch(z){showToast&&showToast(String(z.message||z),!1)}}async function te(){try{let z=E,Q=await csrfFetch("/admin/poll/end",{method:"POST"});if(!Q.ok){let Z=await Q.json().catch(()=>({}));throw new Error(Z.error||ServerI18n.t("pollBuilderErrEndFailed"))}z&&z.questions&&(A={...z,ended_at:Date.now()/1e3},C=z.current_index>=0?z.current_index:0),s.active=!1,s.pollId="",s.currentIndex=-1,E=null,s.statusTimer&&(clearInterval(s.statusTimer),s.statusTimer=null),p(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(z){showToast&&showToast(String(z.message||z),!1)}}function ne(){s.statusTimer&&clearInterval(s.statusTimer),s.statusTimer=setInterval(async()=>{if(s.pollId)try{let z=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!z.ok)return;let Q=await z.json();if(Q.poll_id!==s.pollId)return;s.active=!!Q.active,s.currentIndex=Q.current_index??-1;let Z=!!(E&&E.active);E=Q,Q.active||(clearInterval(s.statusTimer),s.statusTimer=null,Z&&Q.questions&&!A&&(A={...Q,ended_at:Date.now()/1e3},C=Q.current_index>=0?Q.current_index:0),E=null),q==="live"?R():p()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{s.statusTimer&&(clearInterval(s.statusTimer),s.statusTimer=null),k()}),p()}function B(){let j=document.getElementById("settings-grid");!j||document.getElementById(y)||(j.insertAdjacentHTML("beforeend",h()),document.getElementById(y)&&v())}document.addEventListener("admin-panel-rendered",B),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&B()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),B()})})()});var wt=ye(()=>{(function(){"use strict";let v="sec-live-feed",B=[],j=[],F=!1,x="",m="all",N=0,D=0,S=null,L=null,P=null;function w(ee){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(ee):String(ee??"").replace(/[&<>"']/g,function(ae){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ae]})}function b(ee,ae){return ee?ee.length>ae?ee.slice(0,ae)+"\u2026":ee:""}function E(ee){let ae=new Date(ee),oe=me=>String(me).padStart(2,"0");return`${oe(ae.getHours())}:${oe(ae.getMinutes())}:${oe(ae.getSeconds())}`}function q(ee){if(!x)return!0;let ae=x.toLowerCase(),oe=ee.data;return oe.text&&oe.text.toLowerCase().includes(ae)||oe.nickname&&oe.nickname.toLowerCase().includes(ae)||oe.fingerprint&&oe.fingerprint.toLowerCase().includes(ae)||oe.layout&&oe.layout.toLowerCase().includes(ae)}function A(ee){return m==="muted"?!!ee.muted:!0}function C(){m="all",document.querySelectorAll(".admin-live-feed-tab").forEach(ee=>ee.classList.toggle("is-active",ee.dataset.tab==="all"))}function f(){x="",P&&(P.value=""),C()}function u(ee,ae){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let me;return ee==="paused"?me=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:ae||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):ee==="no-result"?me=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:ae||ServerI18n.t("lfNoMatchDesc")}):me=window.AdminEmpty.render("messages"),me.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),me.setAttribute("data-empty-kind","live-feed"),me}let oe=document.createElement("div");return oe.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",oe.setAttribute("data-empty-kind","live-feed"),oe.innerHTML=`<div class="admin-proto-placeholder-title">${w(ee)}</div><div class="admin-proto-placeholder-body">${w(ae||"")}</div>`,oe}function d(ee){let ae=ee.data,oe=document.createElement("div");oe.className="admin-live-feed-row"+(ee.muted?" is-muted":""),oe.dataset.id=ee.id,oe.tabIndex=-1;let me=document.createElement("span");if(me.className="admin-live-feed-time",me.textContent=E(ee.ts),oe.appendChild(me),(ae.layout||"scroll").toLowerCase()!=="scroll"){let H=document.createElement("span");H.className="admin-ui-chip admin-live-feed-tag",H.textContent=ae.layout,oe.appendChild(H)}let ve=document.createElement("span");ve.className="admin-live-feed-text",ve.textContent=b(ae.text||"",80),ve.title=ae.text||"",oe.appendChild(ve);let fe=document.createElement("span");fe.className="admin-live-feed-identity",window.AdminIdentity&&fe.appendChild(AdminIdentity.render({nickname:ae.nickname||"",fp:"",onNicknameClick:function(H){!H||!P||(P.value=H,P.dispatchEvent(new Event("input",{bubbles:!0})),P.focus())}})),oe.appendChild(fe);let Se=document.createElement("span");if(Se.className="admin-live-feed-actions is-hover-reveal",ae.message_id){let H=document.createElement("button");H.type="button",H.className="admin-ui-chip admin-live-feed-action",H.textContent=ServerI18n.t("lfRecallBtn"),H.title=ServerI18n.t("lfRecallTitle"),H.addEventListener("click",V=>{V.stopPropagation(),r(ee)}),Se.appendChild(H)}let _e=document.createElement("button");if(_e.type="button",_e.className="admin-ui-chip is-danger admin-live-feed-action",_e.textContent=ServerI18n.t("blockKeywordBtn"),_e.title=ServerI18n.t("blockKeywordTitle"),_e.addEventListener("click",H=>{H.stopPropagation(),n("keyword",ae.text,ee.id)}),Se.appendChild(_e),ae.fingerprint){let H=document.createElement("button");H.type="button",H.className="admin-ui-chip is-warn admin-live-feed-action",H.textContent=ServerI18n.t("blockFpBtn"),H.title=ServerI18n.t("blockFpTitle").replace("{fp}",ae.fingerprint),H.addEventListener("click",V=>{V.stopPropagation(),n("fingerprint",ae.fingerprint,ee.id)}),Se.appendChild(H)}return oe.appendChild(Se),oe.classList.add("is-clickable"),oe.addEventListener("click",H=>{H.target.closest(".admin-live-feed-actions")||t(ee)}),oe.addEventListener("keydown",H=>{H.key!=="Enter"||H.target.closest("button")||(H.preventDefault(),t(ee))}),oe}function t(ee){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(ee)}async function r(ee){let ae=ee&&ee.data&&ee.data.message_id;if(!ae)return;let oe=await window.AdminModeration.recall(ae);if(!oe.ok){console.error("[LiveFeed] Recall failed:",oe.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}ee.recalled=!0;let me=o(ee.id);me&&me.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function n(ee,ae,oe){if(!(!ae||!await(ee==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,ae))){if(oe){let ve=B.find(fe=>fe.id===oe);ve&&(ve.muted=!0)}else B.forEach(ve=>{ee==="keyword"&&ve.data.text===ae&&(ve.muted=!0),ee==="fingerprint"&&ve.data.fingerprint===ae&&(ve.muted=!0)});l()}}function o(ee){if(!S||!ee)return null;let ae=S.children;for(let oe=0;oe<ae.length;oe++)if(ae[oe].dataset&&ae[oe].dataset.id===ee)return ae[oe];return null}function s(){let ee=document.activeElement,ae=ee&&ee.closest?ee.closest(".admin-live-feed-row"):null;return ae?ae.dataset.id:null}function e(ee){if(!ee)return;let ae=o(ee);ae&&document.activeElement!==ae&&ae.focus({preventScroll:!0})}function l(){if(!S)return;let ee=s(),ae=document.createDocumentFragment(),oe=B.filter(me=>q(me)&&A(me));for(let me=oe.length-1;me>=0;me--)ae.appendChild(d(oe[me]));if(S.textContent="",ae.childNodes.length===0){let me=F?u("paused"):B.length===0?u("empty"):u("no-result");S.appendChild(me)}else S.appendChild(ae);i(),e(ee)}function g(ee){if(!S||!q(ee)||!A(ee))return null;let ae=S.querySelector("[data-empty-kind='live-feed']");ae&&ae.remove();let oe=S.scrollTop<=8,me=d(ee);if(oe)S.insertBefore(me,S.firstChild);else{let re=S.scrollHeight;S.insertBefore(me,S.firstChild),S.scrollTop+=S.scrollHeight-re,D+=1}return me}function a(){let ee=B.length-200;if(ee<=0)return;B.splice(0,ee).forEach(oe=>{let me=o(oe.id);me&&me.remove()})}function i(){k(),_(),p()}function c(ee){let ae={ts:Date.now(),data:ee,id:ee&&ee.message_id?"m"+ee.message_id:"e"+ ++N};if(ee&&ee.status==="blocked"&&(ae.muted=!0),F){j.push(ae),_(),p();return}B.push(ae),g(ae),a(),i()}function p(){let ee=document.querySelector("[data-lf-jump]"),ae=document.querySelector("[data-lf-jump-n]");if(!ee||!ae)return;let oe=j.length,me=oe>0?oe:D;me>0?(ee.hidden=!1,ae.textContent=String(me)):ee.hidden=!0}function T(){F&&M(),D=0,S&&(S.scrollTop=0),p()}function k(){let ee=document.querySelector("[data-lf-state]");ee&&(ee.className=F?"ui-status is-warning":"ui-status is-success",ee.textContent=F?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function _(){let ee=document.getElementById(v)||document,ae=(oe,me)=>{let re=ee.querySelector(oe);re&&(re.textContent=String(me))};ae("[data-cnt-all]",B.length),ae("[data-cnt-mut]",B.filter(oe=>oe.muted).length)}function M(){if(F=!F,S&&S.setAttribute("aria-live",F?"off":"polite"),L&&(L.textContent=F?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),L.classList.toggle("is-primary",F),L.classList.toggle("is-ghost",!F)),F)_(),p();else{for(let ee of j)B.push(ee);j=[],B.length>200&&B.splice(0,B.length-200),D=0,l()}}function R(){let ee=document.getElementById("settings-grid");if(!ee)return!1;let ae=`
      <div id="${v}" class="admin-live-feed-page admin-lf-v4 hud-page-stack lg:col-span-2" data-tpl="A">
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
      </div>`;return ee.insertAdjacentHTML("beforeend",ae),!0}let K=!1,$=null,O=0,U=1500,J=!1;async function W(){if(!J){J=!0;try{let ee=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(O),{credentials:"same-origin"});if(!ee.ok)return;let ae=await ee.json();if(Array.isArray(ae.entries)){for(let oe of ae.entries)if(!(!oe||!oe.data)){if(typeof oe.seq=="number"){if(oe.seq<=O)continue;O=oe.seq}c(oe.data)}}typeof ae.next_since=="number"&&ae.next_since>O&&(O=ae.next_since)}catch{}finally{J=!1}}}let G=5e3,te=null,ne=!1;async function z(){if(!(ne||document.hidden)){ne=!0;try{let ee=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!ee.ok)return;let ae=await ee.json(),oe=Array.isArray(ae.pending)?ae.pending.length:0,me=document.getElementById(v);if(!me)return;let re=me.querySelector("[data-cnt-q]");re&&(re.textContent=String(oe));let ve=me.querySelector("[data-lf-pending-link]");ve&&ve.classList.toggle("has-pending",oe>0)}catch{}finally{ne=!1}}}function Q(){K||(K=!0,W(),$=setInterval(W,U),z(),te=setInterval(z,G),window.addEventListener("beforeunload",()=>{te&&(clearInterval(te),te=null),$&&(clearInterval($),$=null)}))}function Z(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById(v)&&R()&&(se(),l())}function se(){S=document.getElementById("liveFeedList"),L=document.getElementById("liveFeedPauseBtn"),P=document.getElementById("liveFeedSearch");let ee=document.getElementById("liveFeedClearBtn"),ae=document.querySelectorAll(".admin-live-feed-tab");L&&L.addEventListener("click",M),ee&&ee.addEventListener("click",()=>{B=[],j=[],D=0,l()});let oe=document.querySelector("[data-lf-jump-btn]");if(oe&&oe.addEventListener("click",T),S&&S.addEventListener("scroll",()=>{S.scrollTop<=8&&D>0&&(D=0,p())},{passive:!0}),ae.forEach(me=>{me.addEventListener("click",()=>{ae.forEach(re=>re.classList.remove("is-active")),me.classList.add("is-active"),m=me.dataset.tab||"all",l()})}),P){let me=null;P.addEventListener("input",()=>{clearTimeout(me),me=setTimeout(()=>{x=P.value.trim(),l()},200)})}Q()}function ie(ee){if(!("ontouchstart"in window))return;let ae=0,oe=0,me=0,re=null,ve=null,fe=!1;function Se(_e){if(_e.querySelector(".admin-live-feed-row__swipe-actions"))return;let H=_e.dataset.id,V=B.find(le=>le.id===H),Y=!!(V&&V.data&&V.data.message_id),X=document.createElement("div");X.className="admin-live-feed-row__swipe-actions",X.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${Y?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,X.addEventListener("click",function(le){let ue=le.target.closest("[data-swipe-act]");if(!ue||ue.disabled)return;let pe=_e.dataset.id,ge=B.find(he=>he.id===pe);if(!ge||!ge.data)return;let be=ue.dataset.swipeAct;be==="ban"?ge.data.fingerprint&&n("fingerprint",ge.data.fingerprint,pe):be==="recall"&&r(ge),_e.classList.remove("is-swiped")}),_e.appendChild(X)}ee.addEventListener("touchstart",function(_e){let H=_e.target.closest(".admin-live-feed-row");H&&(_e.target.closest(".admin-live-feed-row__swipe-actions")||(re=H,fe=!1,ae=_e.touches[0].clientX,oe=_e.touches[0].clientY,me=0))},{passive:!0}),ee.addEventListener("touchmove",function(_e){if(!re||fe)return;let H=_e.touches[0],V=H.clientX-ae,Y=H.clientY-oe;if(Math.abs(Y)>Math.abs(V)&&Math.abs(Y)>12){fe=!0;return}if(me=V,V<-10){Se(re),ve=re,re.classList.add("is-swiping");let X=Math.max(-180,V);re.style.transform=`translateX(${X}px)`}else V>10&&re.classList.contains("is-swiped")&&(re.style.transform="")},{passive:!0}),ee.addEventListener("touchend",function(){re&&(re.classList.remove("is-swiping"),re.style.transform="",me<=-60?re.classList.add("is-swiped"):re.classList.remove("is-swiped"),re=null,ve=null,me=0)},{passive:!0})}function de(){return S?Array.from(S.querySelectorAll(".admin-live-feed-row")):[]}function ce(){let ee=de(),ae=document.activeElement;for(let oe of ee)if(oe===ae||oe.contains(ae))return oe;return null}function ke(ee){let ae=de();if(!ae.length)return!1;let oe=ce(),me=oe?ae.indexOf(oe)+ee:ee>0?0:ae.length-1;return me=Math.max(0,Math.min(ae.length-1,me)),ae[me].focus(),ae[me].scrollIntoView({block:"nearest"}),!0}function Ee(ee){let ae=ce();if(!ae)return!1;let oe=B.find(re=>re.id===ae.dataset.id);if(!oe)return!1;let me=ee==="keyword"?oe.data.text:oe.data.fingerprint;return me?(n(ee,me,oe.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return B.slice()},isVisible:function(){return!!(S&&S.offsetParent!==null)},isPaused:function(){return F},moveFocus:ke,blockFocused:Ee,togglePause:function(){M()}},document.addEventListener("admin-panel-rendered",Z),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Z):Z()})()});var St=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.loadDetailsState,I=window.AdminUtils.saveDetailsState,h=window.AdminUtils.escapeHtml;function v(l,g=!1){var a=y();return a[l]!==void 0?a[l]:g}function B(l){var g=y();g[l.id]=l.open,I(g)}let j=!1;new MutationObserver(()=>{let l=document.getElementById("settings-grid");if(l&&!(document.getElementById("sec-plugins")||j)){j=!0;try{x(l)}finally{j=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function x(l){let g=`
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
      `;l.insertAdjacentHTML("beforeend",g);let a=document.querySelector("[data-console-filters]");a&&a.addEventListener("click",i=>{let c=i.target.closest("[data-console-filter]");c&&(a.querySelectorAll("[data-console-filter]").forEach(p=>p.classList.toggle("is-active",p===c)),D=c.dataset.consoleFilter,b())}),document.getElementById("pluginsReloadBtn").addEventListener("click",e),A(),q()}let m=0,N=0,D="all",S=[],L=80;function P(l){let g=(l||"INFO").toUpperCase();return g==="ERROR"?"is-error":g==="WARN"?"is-warn":g==="DEBUG"?"is-debug":"is-info"}function w(l){let g=new Date(l*1e3),a=i=>String(i).padStart(2,"0");return`${a(g.getHours())}:${a(g.getMinutes())}:${a(g.getSeconds())}`}function b(){let l=document.getElementById("pluginsConsoleBody");if(!l)return;let g=D==="all"?S:S.filter(a=>(a.level||"INFO").toUpperCase()===D);if(g.length===0){let a=D==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${D} lines yet \xB7 waiting\u2026`;l.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${a}</span>
          </div>`;return}l.innerHTML=g.map(a=>{let i=w(a.ts),c=(a.msg||"").replace(/[<>&"]/g,k=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[k]),p=(a.plugin||"\u2014").replace(/[<>&"]/g,k=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[k]),T=(a.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${i}</span>
          <span class="lv ${P(a.level)}">${T}</span>
          <span class="plg">${p}</span>
          <span class="msg">${c}</span>
        </div>`}).join("")}async function E(){try{let l=await fetch(`/admin/plugins/console?since=${m}`,{credentials:"same-origin"});if(!l.ok)return;let g=await l.json();if(!Array.isArray(g.events)||g.events.length===0)return;for(S.unshift(...g.events);S.length>L;)S.pop();m=g.latest_seq||m,b()}catch{}}function q(){N||(N=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:E}))}async function A(){let l=document.getElementById("pluginsList");if(l)try{let g=await csrfFetch("/admin/plugins/list");if(!g.ok)throw new Error(`HTTP ${g.status}`);let i=(await g.json()).plugins||[];if(i.length===0){l.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",C([]);return}l.innerHTML=i.map(f).join(""),o(l),C(i)}catch(g){console.error("Failed to load plugins:",g),l.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function C(l){let g=l.length,a=l.filter(k=>k.enabled).length,i=g-a,c=l.map(k=>k.priority).filter(k=>typeof k=="number"),p=c.length?Math.round(c.reduce((k,_)=>k+_,0)/c.length):null,T=(k,_)=>{document.querySelectorAll(`[data-plugins-stat="${k}"]`).forEach(M=>{M.textContent=_})};T("loaded",g),T("running",a),T("paused",i),T("priority",p??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(k=>{k.textContent=g})}function f(l){let{name:g,version:a,description:i,priority:c,enabled:p,is_user:T,file:k}=l,_=`plugin-toggle-${g}`,M=t(c),R=n(c),K=d(l),$=T&&k?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${h(k)}"
            data-plugin-name="${h(g)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${h(g)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${h(g)}">
          <span class="admin-plugins-dot ${p?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${h(g)}</div>
            ${i?`<div class="desc">${h(i)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${a?"v"+h(a):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${M}">${c??"\u2014"}${R?" \xB7 "+R:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${r(K)}">${K}</span>
          <div class="admin-plugins-toggle-cell">
            ${$}
            <label class="admin-plugins-switch" for="${_}">
              <input type="checkbox" id="${_}" role="switch"
                aria-checked="${!!p}" aria-label="Toggle plugin ${h(g)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${h(g)}"
                ${p?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function u(l,g){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:l}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:g}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let i=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:g})}),c=await i.json().catch(()=>({}));if(!i.ok){showToast(c.error||ServerI18n.t("pluginsToastRemoveFailed",{status:i.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:l}),!0),await A()}catch(i){showToast(ServerI18n.t("pluginsToastNetError",{msg:i.message||""}),!1)}}function d(l){let g=l.file||l.path||l.source||"";if(typeof g=="string"){if(g.endsWith(".py"))return"PY";if(g.endsWith(".js"))return"JS"}return(l.language||"PY").toUpperCase()}function t(l){return l==null?"is-muted":l<=10?"is-danger":l<=50?"is-warn":"is-cyan"}function r(l){return l==="JS"?"is-cyan":l==="PY"?"is-warn":"is-muted"}function n(l){return l==null?"":l<=10?"CRITICAL":l<=50?"HIGH":"NORMAL"}function o(l){l.querySelectorAll(".plugin-toggle").forEach(g=>{g.addEventListener("change",async function(){let a=this.dataset.pluginName,i=this.checked;await s(a,i,this)})}),l.querySelectorAll(".plugin-uninstall").forEach(g=>{g.addEventListener("click",function(){u(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function s(l,g,a){let i=g?"/admin/plugins/enable":"/admin/plugins/disable";try{let c=await csrfFetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})});if(!c.ok){let p=await c.json().catch(()=>({}));throw new Error(p.error||`HTTP ${c.status}`)}showToast(g?ServerI18n.t("pluginEnabled").replace("{name}",l):ServerI18n.t("pluginDisabled").replace("{name}",l),!0)}catch(c){console.error(`Failed to ${g?"enable":"disable"} plugin:`,c),showToast(c.message||ServerI18n.t("operationFailed"),!1),a&&(a.checked=!g)}}async function e(){let l=document.getElementById("pluginsReloadBtn");l&&(l.disabled=!0);try{let g=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!g.ok){let a=await g.json().catch(()=>({}));throw new Error(a.error||`HTTP ${g.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await A()}catch(g){console.error("Failed to reload plugins:",g),showToast(g.message||ServerI18n.t("reloadFailed"),!1)}finally{l&&(l.disabled=!1)}}})})()});var kt=ye(()=>{(function(){"use strict";let y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},I={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},h=null,v=null;function B(){return h||(h=document.createElement("div"),h.className="admin-pu-backdrop",h.hidden=!0,h.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(h),h.addEventListener("click",t=>{(t.target.matches("[data-pu-close]")||t.target===h)&&d()}),h)}function j(t){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((n,o)=>{let s=o+1,e=s<t,g=e?"is-done":s===t?"is-active":"";return(o>0?`<span class="admin-pu-step-line ${e?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${g}">
          <span class="circle">${e?"\u2713":s}</span>
          <span class="label">${n}</span>
        </div>`}).join("")}function F(t,r){v.step=t;let n=h.querySelector("[data-pu-steps]");n&&(n.innerHTML=j(t));let o=h.querySelector("[data-pu-body]");o&&(o.innerHTML=r)}function x(t){let r=t==="error-type"?ServerI18n.t("pluginsUploadErrorType"):t==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):t==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):t==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),n=(t||"").startsWith("error")?"\u2715":t==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(t||"").startsWith("error")?"is-error":t==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${n}</div>
          <div class="admin-pu-dropzone-msg">${y(r)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function m(){let t=h.querySelector("[data-pu-dropzone]"),r=h.querySelector("[data-pu-file]"),n=h.querySelector("[data-pu-browse]");n&&n.addEventListener("click",()=>r&&r.click()),r&&r.addEventListener("change",()=>{r.files&&r.files[0]&&N(r.files[0])}),t&&(t.addEventListener("click",()=>r&&r.click()),t.addEventListener("dragover",o=>{o.preventDefault(),t.classList.add("is-over")}),t.addEventListener("dragleave",()=>t.classList.remove("is-over")),t.addEventListener("drop",o=>{o.preventDefault(),t.classList.remove("is-over");let s=o.dataTransfer&&o.dataTransfer.files;if(!(!s||s.length===0)){if(s.length>1){F(1,x("error-multi")),m();return}N(s[0])}}))}function N(t){if(!t.name.match(/\.py$/i)){F(1,x("error-type")),m();return}if(t.size>256*1024){F(1,x("error-size")),m();return}v.file=t,F(2,D(t.name)),S(t)}function D(t){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${y(t)}</div>
      </div>`}async function S(t){try{let r=new FormData;r.append("file",t);let n=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:r}),o=await n.json().catch(()=>({}));if(!n.ok&&!o.validation){window.showToast?.(o.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:n.status}),!1),F(1,x()),m();return}v.manifest=o.manifest||{},v.validation=o.validation||{},v.filename=o.filename||t.name,L(v)}catch(r){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:r.message||""}),!1),F(1,x()),m()}}function L(t){let r=t.manifest||{},n=t.validation||{},o="";if(!n.syntax_ok)o=P(n.syntax_err,t);else if(Object.keys(r).length===0)o=w(t);else{let s=(n.deps||[]).some(e=>e.status==="missing");o=q(r,n,t,s)}F(2,`<div class="admin-pu-step2">${o}</div>`),A()}function P(t,r){let n=t&&t.line?t.line:"?",o=t&&t.msg?t.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${n}</span>
        </div>
        <pre class="admin-pu-syntax-body">${y(`>>> ${r.filename}
${o}`)}</pre>
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
      </footer>`}function b(t){return t==null?"is-muted":t<=10?"is-danger":t<=50?"is-warn":"is-cyan"}function E(t){if(t==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let r=b(t),n=t<=10?"CRITICAL":t<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${r}">${t} \xB7 ${n}</span>`}function q(t,r,n,o){let s=t.name||n.filename.replace(/\.(py|js)$/i,""),e=t.version?`v${y(t.version)}`:"\u2014",l=t.author?`@${y(t.author.replace(/^@/,""))}`:"\u2014",g=t.description||ServerI18n.t("pluginsUploadNoDescription"),a="PY",i="is-warn",c=Array.isArray(t.permissions)?t.permissions:[],p=Object.keys(I).map(R=>{let K=c.includes(R);return`
        <div class="admin-pu-perm-row ${K?"is-req":"is-not"}">
          <span class="dot">${K?"\u25CF":"\u25CB"}</span>
          <span class="key">${y(R)}</span>
          <span class="label">${y(ServerI18n.t(I[R]))}</span>
        </div>`}).join(""),T=r.deps||[],k=T.map(R=>{let K=R.status==="ok"?"is-ok":R.status==="warn"?"is-warn":"is-err",$=R.status==="ok"?"\u2713":R.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${K}">
          <span class="dot">${$}</span>
          <span class="name">${y(R.name)}</span>
          <span class="note">${y(R.note||"")}</span>
        </div>`}).join(""),_=r.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${y(s)}</span>`})}
      </div>`:"",M=T.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${k}</div>
      </section>`;return`
      ${_}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${y(s)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${e}</span>
          <span class="author">${l}</span>
          <span class="admin-ui-pill admin-pu-pill ${i}" style="margin-left:auto">${a}</span>
        </div>
        <div class="admin-pu-manifest-desc">${y(g)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${E(t.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${p}</div>
        </section>
        ${M}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${o?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${o?"disabled":""} data-pu-confirm>${o?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function A(){let t=h.querySelector("[data-pu-back]");t&&t.addEventListener("click",()=>{v.file=null,v.manifest=null,v.validation=null,F(1,x()),m()});let r=h.querySelector("[data-pu-confirm]");r&&r.addEventListener("click",()=>C());let n=h.querySelector("[data-pu-no-manifest-ack]");n&&r&&n.addEventListener("change",()=>{r.disabled=!n.checked})}function C(){let t=v.manifest||{},r=t.name||(v.filename||"").replace(/\.(py|js)$/i,""),n=t.version?`v${y(t.version)}`:"\u2014",o=Array.isArray(t.permissions)?t.permissions:[],s=o.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:o.map(g=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${y(g)}</span></div>`).join("");F(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${y(r)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${n}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${s}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${y(v.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:t.priority!=null?t.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let e=h.querySelector("[data-pu-install]");e&&e.addEventListener("click",f);let l=h.querySelector("[data-pu-back]");l&&l.addEventListener("click",()=>L(v))}async function f(){F(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let t=new FormData;t.append("file",v.file);let r=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:t}),n=await r.json().catch(()=>({}));if(!r.ok){window.showToast?.(n.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:r.status}),!1),L(v);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:n.name||v.filename}),!0),d();let o=document.getElementById("pluginsReloadBtn");o&&o.click()}catch(t){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:t.message||""}),!1),L(v)}}function u(){B(),v={step:1,file:null,manifest:null,validation:null,filename:null},F(1,x()),m(),h.hidden=!1,document.body.classList.add("admin-pu-open")}function d(){h&&(h.hidden=!0,document.body.classList.remove("admin-pu-open"),v=null)}window.AdminPluginUpload={open:u,close:d},document.addEventListener("click",t=>{t.target.closest("#pluginsUploadBtn")&&(t.preventDefault(),u())})})()});var It=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let I="sec-webhooks",h=12e3,v=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function B(s,e){return s?s.length>e?s.slice(0,e)+"\u2026":s:""}function j(s){if(!s)return"\u2014";try{let e=new Date(s),l=Math.max(0,(Date.now()-e.getTime())/1e3);return l<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(l)}):l<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(l/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(l/86400)})}catch{return"\u2014"}}function F(s){if(!s)return"\u2014";try{return new URL(s).hostname}catch{return B(s,30)}}function x(s){return s==="active"?"is-success":s==="degraded"?"is-warn":"is-muted"}let m={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:v,eventCatalogLoaded:!1};function N(){let s=document.getElementById("advanced-grid")||document.getElementById("settings-grid");!s||document.getElementById(I)||(s.insertAdjacentHTML("beforeend",`
      <div id="${I}" class="admin-webhooks-page hud-page-stack lg:col-span-2" data-tpl="B">
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
    `),D())}function D(){let s=document.getElementById(I);if(!s)return;let e=document.getElementById("wh-register-form");e&&e.addEventListener("submit",async l=>{l.preventDefault();let g=document.getElementById("wh-url").value.trim();if(!g)return;let a=Array.from(e.querySelectorAll('input[name="wh-event"]:checked')).map(T=>T.value);if(a.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let i=document.getElementById("wh-format").value,c=document.getElementById("wh-secret").value.trim(),p={url:g,events:a,format:i};c&&(p.secret=c);try{let T=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),k=await T.json();T.ok&&k.hook_id?(showToast(ServerI18n.t("webhookRegistered")),e.reset(),E(),e.hidden=!0,await S()):showToast(k.error||ServerI18n.t("registrationFailed"),!1)}catch(T){console.error("Webhook register error:",T),showToast(ServerI18n.t("registrationFailed"),!1)}}),s.querySelectorAll(".admin-ui-page-actions [data-wh-action='show-add']").forEach(l=>l.addEventListener("click",()=>{e&&(e.hidden=!1)})),s.addEventListener("click",l=>{if(l.target.closest("[data-wh-action='show-add']")){e&&(e.hidden=!1);return}if(l.target.closest("[data-wh-action='hide-add']")){e&&(e.hidden=!0);return}let i=l.target.closest("[data-wh-log-filter]");if(i){m.deliveryFilter=i.dataset.whLogFilter,s.querySelectorAll("[data-wh-log-filter]").forEach(K=>{K.classList.toggle("is-active",K.dataset.whLogFilter===m.deliveryFilter)}),u();return}let c=l.target.closest("[data-wh-action='test']");if(c){l.stopPropagation(),r(c.dataset.whHookId);return}let p=l.target.closest("[data-wh-action='settings']");if(p){l.stopPropagation(),d(p.dataset.whHookId);return}if(l.target.closest("[data-wh-action='close-detail']")){m.selectedHookId=null,t(),C();return}let k=l.target.closest("[data-wh-action='detail-ping']");if(k){r(k.dataset.whHookId);return}let _=l.target.closest("[data-wh-action='detail-toggle']");if(_){n(_.dataset.whHookId,_.dataset.whNextEnabled==="1");return}let M=l.target.closest("[data-wh-action='detail-delete']");if(M){o(M.dataset.whHookId);return}let R=l.target.closest("[data-wh-hook-row]");if(R&&!l.target.closest("button")){d(R.dataset.whHookId);return}}),m.stopPoll||(m.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(I)},intervalMs:h,tick:S}))}async function S(){await w(),await Promise.all([L(),P()]),q(),C(),u(),t()}async function L(){try{let e=await(await csrfFetch("/admin/webhooks/list")).json();m.hooks=Array.isArray(e.webhooks)?e.webhooks:[]}catch{m.hooks=[]}}async function P(){try{let s=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!s.ok)return;let e=await s.json();m.deliveries=Array.isArray(e.deliveries)?e.deliveries:[],m.stats=e.stats||null}catch{}}async function w(){if(!m.eventCatalogLoaded)try{let s=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(s.ok){let e=await s.json(),l=Array.isArray(e.events)?e.events:[];l.length&&(m.eventCatalog=l)}}catch{}finally{m.eventCatalogLoaded=!0,E()}}function b(s){let e=s&&s.slug?String(s.slug):"";if(s&&s.labelKey){let c=ServerI18n.t(s.labelKey);return{slug:e,label:c?c+" \xB7 "+e:e,title:c}}let l=s&&s.zh?String(s.zh):"",g=s&&s.en?String(s.en):"",a=window.ServerI18n&&ServerI18n.currentLang||"zh",i=(s&&s[a]?String(s[a]):"")||g||l;return{slug:e,label:i?i+" \xB7 "+e:e,title:l&&g?l+" \xB7 "+g:l||g}}function E(){let s=document.querySelector("[data-wh-register-events]");s&&(s.innerHTML=m.eventCatalog.map(function(e){let l=b(e);if(!l.slug)return"";let g=l.slug==="on_danmu"?" checked":"";return'<label title="'+y(l.title)+'"><input type="checkbox" name="wh-event" value="'+y(l.slug)+'"'+g+" /> "+y(l.label)+"</label>"}).join(""))}function q(){let s=document.querySelector("[data-wh-stats]");if(!s)return;let e=m.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};s.innerHTML=`
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
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel",{n:A()})}</div>
        <div class="v" style="color:${e.dropped_24h>0?"var(--hud-crimson)":"var(--color-text-secondary)"}">${e.dropped_24h}</div>
      </div>`}function A(){return m.hooks.length&&m.hooks[0].retry_count||3}function C(){let s=document.getElementById("wh-list"),e=document.querySelector("[data-wh-count]");if(s){if(e&&(e.textContent=String(m.hooks.length)),m.hooks.length===0){s.innerHTML="";let l=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let g=document.getElementById("wh-register-form");g&&(g.hidden=!1),document.getElementById("wh-url")?.focus()}});l.dataset.emptyKind="webhooks",s.appendChild(l);return}s.innerHTML=m.hooks.map(f).join("")}}function f(s){let e=y(s.id||""),l=Number(s.success_count)||0,g=Number(s.fail_count)||0,a=l+g,i=a>0?Math.round(l/a*1e3)/10:100,c=s.enabled!==!1,p=Number(s.last_status)||null,T=c?p&&p>=400||s.last_error?"degraded":"active":"paused",k=T==="active"?"var(--hud-lime)":T==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",_=T==="active"?"ACTIVE":T==="degraded"?"DEGRADED":"PAUSED",M=m.selectedHookId===s.id?" is-selected":"",R=x(T),K=(s.events||[]).map(function(O){return'<span class="admin-ui-pill admin-wh-evt-chip">'+y(O)+"</span>"}).join(""),$=s.last_error?'<div class="admin-wh-card-warn">\u26A0 '+y(B(s.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${M}" data-wh-hook-row data-wh-hook-id="${e}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${k};box-shadow:${c?"0 0 6px "+k:"none"}"></span>
          <span class="name">${y(F(s.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${R}">${_}</span>
          <span class="last">last \xB7 ${y(j(s.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${y(s.url)}</div>
        <div class="admin-wh-card-events">${K}</div>
        ${$}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${i}%;background:${k}"></div></div>
            <span class="pct" style="color:${k}">${i}%</span>
          </div>
          <span class="counter ok">\u2713 ${l.toLocaleString()}</span>
          <span class="counter ${g>0?"fail":"fail-zero"}">\u2717 ${g}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${e}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${e}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function u(){let s=document.getElementById("wh-log-list");if(!s)return;let e=m.deliveries.filter(function(l){return m.deliveryFilter==="all"?!0:m.deliveryFilter==="failed"?!l.ok:m.deliveryFilter==="2xx"?l.code&&l.code>=200&&l.code<300:m.deliveryFilter==="5xx"?l.code&&l.code>=500:!0});if(e.length===0){s.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}s.innerHTML=e.map(function(l){let g=l.ts?new Date(l.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",a=l.code?String(l.code):"\u2014",i=l.ok?"var(--hud-lime)":"var(--hud-crimson)",c=l.duration_ms?l.duration_ms>=1e3?(l.duration_ms/1e3).toFixed(1)+"s":l.duration_ms+"ms":"\u2014",p=l.ok?"var(--color-text-strong)":"var(--hud-amber)",T=y(F(l.hook_url||"")),k=(l.retries||0)===0?"\u2014":"\xD7"+l.retries,_=(l.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${l.dropped?" is-dropped":""}">
          <span class="time">${y(g)}</span>
          <span class="code" style="color:${i};border-color:${i}55;background:${i}15;">${a}</span>
          <span class="dur" style="color:${p}">${y(c)}</span>
          <span class="ep">${T}</span>
          <span class="evt">${y(l.event||"")}</span>
          <span class="retry" style="color:${_}">${k}</span>
        </div>`}).join("")}function d(s){m.selectedHookId=s,C(),t()}function t(){let s=document.querySelector("[data-wh-detail]");if(!s)return;let e=m.hooks.find(function(T){return T.id===m.selectedHookId});if(!e){s.hidden=!0,s.innerHTML="";return}s.hidden=!1;let l=e.enabled!==!1,g=Number(e.last_status)||null,a=l?g&&g>=400||e.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",i=new Set(e.events||[]),c=m.eventCatalog.map(function(T){let k=b(T),_=i.has(k.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(_?"is-active is-on":"")+'" title="'+y(k.title)+'"><span aria-hidden="true">'+(_?"\u2713":"\u25CB")+"</span><span>"+y(k.label)+"</span></label>"}).join(""),p={event:e.events&&e.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:e.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};s.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+a+";box-shadow:0 0 6px "+a+'"></span><span class="name">'+y(F(e.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+c+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(e.retry_count!=null?e.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(e.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+y(JSON.stringify(p,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+y(e.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+y(e.id)+'" data-wh-next-enabled="'+(l?"0":"1")+'">'+(l?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+y(e.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function r(s){if(s)try{let e=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:s})}),l=await e.json();e.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(l.error||ServerI18n.t("testFailed"),!1),setTimeout(S,1500)}catch(e){console.error("Webhook test error:",e),showToast(ServerI18n.t("testFailed"),!1)}}async function n(s,e){if(s)try{let l=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:s,enabled:e})}),g=await l.json();if(!l.ok){showToast(g.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let a=m.hooks.find(function(i){return i.id===s});a&&(a.enabled=g.enabled),showToast(g.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),q(),C(),t()}catch(l){console.error("Webhook toggle error:",l),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function o(s){if(!(!s||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let l=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:s})}),g=await l.json();l.ok?(showToast(ServerI18n.t("webhookDeleted")),m.selectedHookId===s&&(m.selectedHookId=null),S()):showToast(g.error||ServerI18n.t("deleteFailed"),!1)}catch(l){console.error("Webhook delete error:",l),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(I)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),N()})})()});var Tt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let I="sec-sounds",h=null,v=[],B=[];async function j(){try{let u=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!u.ok)throw new Error(await u.text());let d=await u.json();v=d.sounds||[],B=d.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",v.length||"")}catch(u){console.error("Failed to fetch sounds:",u),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),v=[],B=[]}}async function F(){return j()}async function x(u,d){let t=new FormData;t.append("file",u),t.append("name",d);let r=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:t}),n=await r.json();if(!r.ok)throw new Error(n.error||"Upload failed");return n}async function m(u){let d=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:u})}),t=await d.json();if(!d.ok)throw new Error(t.error||"Delete failed");return t}async function N(u){let d=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}),t=await d.json();if(!d.ok)throw new Error(t.error||"Failed to add rule");return t}async function D(u){let d=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:u})}),t=await d.json();if(!d.ok)throw new Error(t.error||"Failed to delete rule");return t}function S(){let u=document.getElementById("soundsList");if(u){if(v.length===0){u.innerHTML="";var d=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});d.dataset.emptyKind="sounds",d.style.gridColumn="1 / -1",u.appendChild(d);return}u.innerHTML=v.map(function(r){var n=y(r.name),o=Math.round((r.volume!=null?r.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+y(r.name)+'"><div class="name" title="'+n+'">'+n+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+y(r.name)+'" min="0" max="100" step="1" value="'+o+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+y(r.name)+'" style="min-width:32px;text-align:right">'+o+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+y(r.name)+'">'+y(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+y(r.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),u.querySelectorAll(".sound-play-btn").forEach(function(r){r.addEventListener("click",function(){var n=r.dataset.name,o=v.find(function(s){return s.name===n});o&&(h&&(h.pause(),h=null),h=new Audio(o.url),h.volume=.5,h.play().catch(function(s){console.warn("Audio preview failed:",s)}))})}),u.querySelectorAll(".sound-delete-btn").forEach(function(r){r.addEventListener("click",async function(){var n=r.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",n),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await m(n),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",n),!0),await j(),S(),P()}catch(s){window.showToast(s.message,!1)}})});var t={};u.querySelectorAll(".sound-volume-slider").forEach(function(r){var n=r.dataset.name,o=u.querySelector('.sound-volume-label[data-name="'+CSS.escape(n)+'"]');r.addEventListener("input",function(){o&&(o.textContent=r.value+"%"),clearTimeout(t[n]),t[n]=setTimeout(function(){L(n,Number(r.value)/100)},300)}),r.addEventListener("change",function(){clearTimeout(t[n]),L(n,Number(r.value)/100)})})}}async function L(u,d){try{var t=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(u)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:d})}),r=await t.json();if(!t.ok){window.showToast(r.error||"Volume update failed",!1);return}var n=v.find(function(o){return o.name===u});n&&(n.volume=d),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(d*100)}),!0)}catch(o){console.warn("[admin-sounds] volume save failed:",o),window.showToast("Network error",!1)}}function P(){let u=document.getElementById("ruleSoundName");if(!u)return;let d=u.value;if(u.innerHTML="",v.length===0){let t=document.createElement("option");t.value="",t.textContent=ServerI18n.t("noSoundsAvailable"),t.disabled=!0,u.appendChild(t);return}v.forEach(t=>{let r=document.createElement("option");r.value=t.name,r.textContent=t.name,u.appendChild(r)}),d&&[...u.options].some(t=>t.value===d)&&(u.value=d)}function w(){let u=document.getElementById("rulesList");if(u){if(B.length===0){u.innerHTML="";var d=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});d.dataset.emptyKind="sound-rules",u.appendChild(d);return}u.innerHTML=B.map(function(t){var r=t.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):t.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",t.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",t.trigger_value),n=Math.round((t.volume!=null?t.volume:1)*100),o=ServerI18n.t("soundDetailLine").replace("{sound}",t.sound_name).replace("{vol}",n).replace("{cd}",t.cooldown!=null?t.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+y(String(t.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+y(r)+'</div><div class="admin-sounds-rule-detail">'+y(o)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+y(String(t.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),u.querySelectorAll(".sound-rule-del-btn").forEach(function(t){t.addEventListener("click",async function(){try{await D(t.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await F(),w()}catch(r){window.showToast(r.message,!1)}})})}}function b(){let u=document.getElementById("soundUploadBtn");u&&u.addEventListener("click",async()=>{let d=document.getElementById("soundFileInput"),t=document.getElementById("soundNameInput"),r=d.files[0];if(!r){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let n=t.value.trim();if(!n){window.showToast(ServerI18n.t("enterSoundName"),!1);return}u.disabled=!0,u.textContent=ServerI18n.t("uploadingStatus");try{await x(r,n),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",n),!0),d.value="",t.value="",await j(),S(),P()}catch(o){window.showToast(o.message,!1)}finally{u.disabled=!1,u.textContent=ServerI18n.t("soundsUploadIdle")}})}function E(){let u=document.getElementById("addRuleBtn");u&&u.addEventListener("click",async()=>{let d=document.getElementById("ruleTriggerType").value,t=document.getElementById("ruleTriggerValue").value.trim(),r=document.getElementById("ruleSoundName").value,n=document.getElementById("ruleVolume"),o=document.getElementById("ruleCooldown");if(d!=="all"&&!t){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!r){window.showToast(ServerI18n.t("selectSound"),!1);return}let s=parseInt(n.value,10)/100,e=parseInt(o.value,10)||0,l={trigger_type:d,trigger_value:d==="all"?"":t,sound_name:r,volume:Math.max(0,Math.min(1,s)),cooldown:Math.max(0,e)};u.disabled=!0;try{await N(l),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await F(),w()}catch(g){window.showToast(g.message,!1)}finally{u.disabled=!1}})}function q(){let u=document.getElementById("ruleTriggerType"),d=document.getElementById("ruleTriggerValue");if(!u||!d)return;function t(){u.value==="all"?(d.disabled=!0,d.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),d.value=""):u.value==="keyword"?(d.disabled=!1,d.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):u.value==="effect"&&(d.disabled=!1,d.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}u.addEventListener("change",t),t()}function A(){let u=document.getElementById("ruleVolume"),d=document.getElementById("ruleVolumeLabel");!u||!d||u.addEventListener("input",()=>{d.textContent=u.value+"%"})}function C(){return`
      <div id="${I}" class="admin-sounds-page hud-page-stack lg:col-span-2" data-tpl="B">
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
    `}async function f(){let u=document.getElementById("settings-grid");if(u){if(u.insertAdjacentHTML("beforeend",C()),window.AdminSkeletons){let d=document.getElementById("soundsList");d&&(d.innerHTML="",d.appendChild(window.AdminSkeletons.listRows({rows:3})));let t=document.getElementById("rulesList");t&&(t.innerHTML="",t.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([j(),F()]),S(),P(),w(),b(),E(),q(),A()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let u=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(I)&&!u&&(u=!0,f().finally(()=>{u=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(I)&&(u=!0,f().finally(()=>{u=!1}))})})()});var _t=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let I=/^[a-zA-Z0-9_]{1,32}$/,h=".png,.gif,.webp",v="sec-emojis",B=[];function j(){return`
      <div id="${v}" class="admin-emojis-page admin-em-v4 hud-page-stack lg:col-span-2" data-tpl="B">
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
    `}function F(A){let C=":"+A.name+":",f=Number(A.used)||0,u=f>0?ServerI18n.t("emojisUsedCount",{n:f}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+N(A.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+N(A.url)+'" alt="'+N(C)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+y(C)+'</div><div class="admin-em-v4__tile-meta">'+y(u)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+N(C)+'" title="'+N(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+N(A.name)+'" title="'+N(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function x(A){let C=document.querySelector("[data-em-quota-label]"),f=document.querySelector("[data-em-quota-fill]");if(!C||!f)return;let u=A.length,d=100;C.textContent=ServerI18n.t("emojisQuotaUsed",{n:u,max:d}),f.style.width=Math.min(100,u/d*100)+"%"}function m(A){let C=document.querySelector("[data-em-preview-body]");if(!C)return;if(!A||A.length===0){C.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let u=A.slice(0,3).map(d=>`<span class="admin-em-v4__preview-pair"><code>:${y(d.name)}:</code> \u2192 <img src="${N(d.url)}" alt=":${N(d.name)}:" /></span>`);C.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:u.join(" \xB7 ")})}function N(A){return y(A)}function D(A){var C=document.getElementById("emojiGrid"),f=document.getElementById("emojiCount");C&&(!A||A.length===0?(window.AdminEmpty?(C.innerHTML="",C.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var u=document.getElementById("emojiFileInput");u&&u.click()}}))):C.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("noEmojisUploaded"))+"</div>",f&&(f.textContent="0")):(C.innerHTML=A.map(F).join(""),f&&(f.textContent=String(A.length))),x(B),m(B))}function S(){var A=document.getElementById("emojiGrid");if(A)if(window.AdminSkeletons){A.innerHTML="";for(var C=0;C<8;C++){var f=document.createElement("div");f.className="admin-em-v4__tile admin-em-v4__tile--skel";var u=document.createElement("div");u.className="admin-em-v4__tile-thumb";var d=document.createElement("div");d.className="admin-skel",d.style.width="100%",d.style.height="100%",u.appendChild(d),f.appendChild(u);var t=document.createElement("div");t.className="admin-skel admin-skel-bar",t.style.width="60%",t.style.height="8px",t.style.margin="6px auto",f.appendChild(t),A.appendChild(f)}}else A.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadingEmojis"))+"</div>"}async function L(){try{var A=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!A.ok)throw new Error("HTTP "+A.status);var C=await A.json();B=C.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",B.length||""),P()}catch(u){console.error("[admin-emojis] fetch failed:",u);var f=document.getElementById("emojiGrid");f&&(f.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function P(){var A=document.getElementById("emojiSearchInput"),C=(A&&A.value||"").trim().toLowerCase(),f=C?B.filter(function(u){return(u.name||"").toLowerCase().includes(C)}):B;D(f)}async function w(){var A=document.getElementById("emojiNameInput"),C=document.getElementById("emojiFileInput"),f=document.getElementById("emojiUploadBtn");if(!(!A||!C||!f)){var u=A.value.trim(),d=C.files&&C.files[0];if(!u){showToast(ServerI18n.t("emojiNameRequired"),!1),A.focus();return}if(!I.test(u)){showToast(ServerI18n.t("emojiNameInvalid"),!1),A.focus();return}if(!d){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var t=d.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(t)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}f.disabled=!0,f.textContent=ServerI18n.t("uploadingStatus");try{var r=new FormData;r.append("name",u),r.append("emojifile",d);var n=await csrfFetch("/admin/emojis/upload",{method:"POST",body:r}),o=await n.json();n.ok?(showToast(o.message||ServerI18n.t("emojiUploadFallback")),A.value="",C.value="",await L()):showToast(o.error||ServerI18n.t("uploadFailed"),!1)}catch(s){console.error("[admin-emojis] upload error:",s),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{f.disabled=!1,f.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function b(A){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",A),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var f=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A})}),u=await f.json();f.ok?(showToast(u.message||ServerI18n.t("emojiDeleteFallback")),await L()):showToast(u.error||ServerI18n.t("deleteFailed"),!1)}catch(d){console.error("[admin-emojis] delete error:",d),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function E(A){try{await navigator.clipboard.writeText(A),showToast(ServerI18n.t("copiedLabel").replace("{label}",A))}catch{var C=document.createElement("textarea");C.value=A,C.style.position="fixed",C.style.opacity="0",document.body.appendChild(C),C.select(),document.execCommand("copy"),document.body.removeChild(C),showToast(ServerI18n.t("copiedLabel").replace("{label}",A))}}function q(){var A=document.getElementById("settings-grid");if(A){A.insertAdjacentHTML("beforeend",j());var C=document.getElementById("emojiUploadBtn");C&&C.addEventListener("click",w);var f=document.getElementById("emojiNameInput");f&&f.addEventListener("keydown",function(n){n.key==="Enter"&&(n.preventDefault(),w())});var u=document.getElementById("emojiSearchInput");u&&u.addEventListener("input",P);var d=document.getElementById("emojiGrid");d&&d.addEventListener("click",function(n){var o=n.target.closest(".emoji-copy-btn");if(o){E(o.dataset.label);return}var s=n.target.closest(".emoji-delete-btn");s&&b(s.dataset.name)});var t=document.querySelector("[data-em-dropzone]"),r=document.getElementById("emojiFileInput");t&&r&&(["dragenter","dragover"].forEach(function(n){t.addEventListener(n,function(o){o.preventDefault(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(n){t.addEventListener(n,function(o){o.preventDefault(),t.classList.remove("is-dragover")})}),t.addEventListener("drop",function(n){var o=n.dataTransfer&&n.dataTransfer.files&&n.dataTransfer.files[0];if(o){var s=new DataTransfer;s.items.add(o),r.files=s.files;var e=document.getElementById("emojiNameInput");if(e&&!e.value){var l=o.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");e.value=l.slice(0,32),e.focus()}t.classList.add("is-dropping"),setTimeout(function(){t.classList.remove("is-dropping")},1200)}})),S(),L()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var A=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(v)&&q()});A.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(v)&&q()}})})()});var Et=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml,I="sec-stickers",h=["png","gif","webp"],v=".gif,.png,.webp",B="__all__",j=[],F=[],x=B;function m(u){return y(u)}function N(){var u=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,d=u?`
          <div class="admin-ui-monolabel" style="margin-bottom:10px">${ServerI18n.t("stickersAddLabel")}</div>
          <div class="admin-stickers-upload">
            <label class="admin-stickers-field">
              <span class="admin-ui-monolabel">${ServerI18n.t("stickersFileHint")}</span>
              <input
                type="file"
                id="stickerFileInput"
                accept="${v}"
                class="admin-ui-input"
              />
            </label>
            <button id="stickerUploadBtn" type="button" class="admin-ui-action is-primary admin-sticker-action">${ServerI18n.t("stickersUploadBtn")}</button>
          </div>`:"";return`
      <div id="${I}" class="admin-stickers-page hud-page-stack lg:col-span-2" data-tpl="B">
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
            ${u?`<div class="admin-ui-card">${d}</div>`:""}

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
    `}function D(u){return u===B?j.length:j.filter(function(d){return d.pack_id===u}).length}function S(){var u=document.getElementById("stickerPackList");if(u){var d='<button type="button" class="admin-stickers-pack'+(x===B?" is-active":"")+'" data-pack="'+B+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+D(B)+"</span></button>";F.forEach(function(t){var r=t.enabled?"is-success":"is-muted",n="admin-stickers-pack"+(t.id===x?" is-active":""),o=t.id==="default",s=o?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+m(t.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+m(t.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+m(t.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+m(t.id)+'" title="'+(t.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(t.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+m(t.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";d+='<div class="'+n+'" data-pack="'+m(t.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+m(t.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+r+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+y(t.name)+'</span><span class="admin-stickers-pack-count">'+D(t.id)+"</span></button>"+s+"</div>"}),u.innerHTML=d}}function L(u){var d=":"+u.name+":";return'<div class="admin-stickers-tile"><img src="'+m(u.url)+'" alt="'+m(d)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+m(d)+'">'+y(d)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+m(d)+'" title="'+m(ServerI18n.t("copyToClipboard"))+'">'+y(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+m(u.name)+'" title="'+m(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function P(){var u=document.getElementById("stickerGrid"),d=document.getElementById("stickerCount");if(u){var t=document.getElementById("stickerSearchInput"),r=(t&&t.value||"").trim().toLowerCase(),n=j.filter(function(s){return!(x!==B&&s.pack_id!==x||r&&!(s.name||"").toLowerCase().includes(r))});if(n.length===0){u.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});o.dataset.emptyKind="stickers",o.style.gridColumn="1 / -1",u.appendChild(o),d&&(d.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}u.innerHTML=n.map(L).join(""),d&&(d.textContent=ServerI18n.t("stickersItemCount",{n:n.length}))}}async function w(){var u=document.getElementById("stickerGrid");if(u)try{var[d,t]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!d.ok)throw new Error("HTTP "+d.status);j=(await d.json()).stickers||[],F=t.ok?(await t.json()).packs||[]:[],x!==B&&!F.some(function(r){return r.id===x})&&(x=B),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",F.length?ServerI18n.t("tabCountPacks",{n:F.length}):""),S(),P()}catch(r){console.error("[admin-stickers] fetch failed:",r),u.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function b(u,d){if(u==="select"){x=d,S(),P();return}if(u==="rename"){var t=F.find(function(T){return T.id===d}),r=prompt(ServerI18n.t("stickersPackNamePrompt"),t?t.name:"");if(!r)return;try{var n=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(d)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r})}),o=await n.json();n.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await w()):window.showToast(o.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(u==="toggle"){try{var s=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(d)+"/toggle",{method:"POST"});s.ok&&await w()}catch{}return}if(u==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var e=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(d),{method:"DELETE"}),l=await e.json();e.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),x===d&&(x=B),await w()):window.showToast(l.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(u==="up"||u==="down"){var g=F.slice().sort(function(T,k){return(T.order||0)-(k.order||0)}),a=g.findIndex(function(T){return T.id===d});if(a<0)return;var i=u==="up"?a-1:a+1;if(i<0||i>=g.length)return;var c=g[a],p=g[i];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(c.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:p.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(p.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:c.order||0})})]),await w()}catch{}}}async function E(){var u=prompt(ServerI18n.t("stickersNewPackPrompt"));if(u)try{var d=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:u})}),t=await d.json();d.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),x=t.pack&&t.pack.id?t.pack.id:x,await w()):window.showToast(t.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function q(){var u=document.getElementById("stickerFileInput"),d=document.getElementById("stickerUploadBtn");if(!(!u||!d)){var t=u.files&&u.files[0];if(!t){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var r=t.name.split(".").pop().toLowerCase();if(h.indexOf(r)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}d.disabled=!0;var n=d.textContent;d.textContent=ServerI18n.t("uploadingStatus");try{var o=new FormData;o.append("file",t),x&&x!==B&&o.append("pack_id",x);var s=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:o}),e=await s.json();s.ok?(window.showToast(e.message||ServerI18n.t("stickerUploadFallback")),u.value="",await w()):window.showToast(e.error||ServerI18n.t("uploadFailed"),!1)}catch(l){console.error("[admin-stickers] upload error:",l),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{d.disabled=!1,d.textContent=n}}}async function A(u){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",u),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var t=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(u),{method:"DELETE"}),r=await t.json();t.ok?(window.showToast(r.message||ServerI18n.t("stickerDeleteFallback")),await w()):window.showToast(r.error||ServerI18n.t("deleteFailed"),!1)}catch(n){console.error("[admin-stickers] delete error:",n),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function C(u){try{await navigator.clipboard.writeText(u),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",u))}catch{var d=document.createElement("textarea");d.value=u,d.style.position="fixed",d.style.opacity="0",document.body.appendChild(d),d.select(),document.execCommand("copy"),document.body.removeChild(d),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",u))}}function f(){var u=document.getElementById("settings-grid");if(u){u.insertAdjacentHTML("beforeend",N());var d=document.getElementById("stickerUploadBtn");d&&d.addEventListener("click",q);var t=document.getElementById("stickerPackAddBtn");t&&t.addEventListener("click",E);var r=document.getElementById("stickerSearchInput");r&&r.addEventListener("input",P);var n=document.getElementById("stickerPackList");n&&n.addEventListener("click",function(s){var e=s.target.closest("[data-pack-action]");if(!e){var l=s.target.closest("[data-pack]");l&&b("select",l.dataset.pack);return}var g=e.dataset.packAction,a=e.dataset.packId;g==="select"&&!a&&(a=e.closest("[data-pack]")&&e.closest("[data-pack]").dataset.pack),b(g,a)});var o=document.getElementById("stickerGrid");o&&o.addEventListener("click",function(s){var e=s.target.closest(".sticker-copy-btn");if(e){C(e.dataset.label);return}var l=s.target.closest(".sticker-delete-btn");l&&A(l.dataset.name)}),w()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var u=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(I)&&f()});u.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(I)&&f()}})})()});var $t=ye(()=>{(function(){"use strict";let y="sec-extensions-overview",I=window.AdminUtils.escapeHtml,h=15e3,v=[{id:"slido",name:"Slido Extension",version:"v0.2.0",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload",href:"/static/extensions/danmu-slido-extension-0.2.0.zip"},{kind:"config",labelKey:"extSlidoStepConfig"}]},hasFireTokenUI:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],B={fireToken:null,plainToken:null,sources:[],sourcesTimer:0};function j(){return`
      <div id="${y}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${v.map(F).join("")}
        </div>
      </div>`}function F(w){let b=w.status==="ready",E="is-cold",q=b?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,A=b&&w.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${w.install.steps.map(f=>f.kind==="download"?`<li><a class="admin-ext-step-link" href="${f.href}" target="_blank" rel="noopener noreferrer">${I(ServerI18n.t(f.labelKey))} \u2193</a></li>`:`<li>${I(ServerI18n.t(f.labelKey))}</li>`).join("")}
          </ol>
        </div>`:"",C=w.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
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
      <article class="admin-ext-card" data-ext="${w.id}">
        <div class="admin-ext-head">
          <span class="admin-ext-status-dot ${E}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${w.color}">${w.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${I(w.name)}</div>
            <div class="meta"><span class="ver">${I(w.version)}</span></div>
          </div>
          ${q}
        </div>
        <p class="admin-ext-desc">${I(ServerI18n.t(w.descKey))}</p>
        ${A}
        ${C}
      </article>`}async function x(){try{let w=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!w.ok)return;B.fireToken=await w.json(),S()}catch{}}async function m(){try{let w=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!w.ok)return;let b=await w.json();B.sources=Array.isArray(b.sources)?b.sources:[],L()}catch{}}async function N(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let b=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!b.ok)throw new Error("HTTP "+b.status);let E=await b.json();B.fireToken={enabled:E.enabled,prefix:E.prefix,has_token:!0,rotated_at:E.rotated_at},B.plainToken=E.token,S(),window.AdminUtils.copyText(E.token,ServerI18n.t("extToastTokenGenerated"))}catch(b){console.warn("[ext] regen failed:",b),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function D(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let b=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!b.ok)throw new Error("HTTP "+b.status);B.fireToken=await b.json(),B.plainToken=null,S(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(b){console.warn("[ext] revoke failed:",b),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function S(){let w=document.querySelector("[data-fire-token-display]"),b=document.querySelector('[data-fire-token-action="copy"]'),E=document.querySelector('[data-fire-token-action="regen"]'),q=document.querySelector('[data-fire-token-action="revoke"]');if(!w)return;let A=B.fireToken;B.plainToken?(w.textContent=B.plainToken,w.classList.add("is-plain")):A&&A.has_token?(w.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:A.prefix||""}),w.classList.remove("is-plain")):(w.textContent=ServerI18n.t("extTokenNotSetHint"),w.classList.remove("is-plain")),b&&(b.disabled=!B.plainToken),E&&(E.textContent=A&&A.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),q&&(q.disabled=!(A&&A.has_token))}function L(){let w=new Set(B.sources.map(b=>b.source));document.querySelectorAll(".admin-ext-card").forEach(b=>{let E=v.find(C=>C.id===b.dataset.ext);if(!E)return;let q=b.querySelector("[data-ext-dot]");if(!q)return;let A=E.sourceMatch&&w.has(E.sourceMatch);q.classList.toggle("is-live",!!A),q.classList.toggle("is-cold",!A)})}function P(){let w=document.getElementById("settings-grid");if(!w||document.getElementById(y))return;w.insertAdjacentHTML("beforeend",j());let b=document.getElementById(y);b&&b.addEventListener("click",E=>{let q=E.target.closest("[data-fire-token-action]");if(!q)return;let A=q.dataset.fireTokenAction;A==="regen"?N():A==="revoke"?D():A==="copy"&&B.plainToken&&window.AdminUtils.copyText(B.plainToken,ServerI18n.t("firetokenToastCopied"))}),x(),B.stopPoll||(B.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(y)},intervalMs:h,tick:m}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&P()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&P()})})()});var xt=ye(()=>{(function(){"use strict";let y="sec-firetoken-overview",I=window.AdminUtils.escapeHtml,h=15e3,v={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function B(){return`
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
    `}async function j(){await Promise.all([F(),x(),m()])}async function F(){try{let C=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!C.ok)return;v.token=await C.json(),P()}catch{}}async function x(){try{let C=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!C.ok)return;let f=await C.json();v.usage24h=Array.isArray(f.usage_24h)?f.usage_24h:[],v.ips=Array.isArray(f.ips)?f.ips:[],b(),E(),w()}catch{}}async function m(){try{let C=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!C.ok)return;let f=await C.json();v.audit=Array.isArray(f.events)?f.events:[],q()}catch{}}async function N(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let f=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!f.ok)throw new Error("HTTP "+f.status);let u=await f.json();v.token={enabled:u.enabled,prefix:u.prefix,has_token:!0,rotated_at:u.rotated_at,created_at:u.created_at||u.rotated_at},v.plainToken=u.token,P(),window.AdminUtils.copyText(u.token,ServerI18n.t("firetokenToastGenerated")),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function D(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let f=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!f.ok)throw new Error("HTTP "+f.status);v.token=await f.json(),v.plainToken=null,P(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function S(C){if(!C)return"\u2014";let f=Date.now()/1e3-C;return f<60?ServerI18n.t("firetokenJustNow"):f<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(f/60)}):f<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(f/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(f/86400)})}function L(C){if(!C)return"\u2014";try{return new Date(C*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function P(){let C=v.token,f=document.querySelector("[data-ft-token-display]"),u=document.querySelector("[data-ft-status]"),d=document.querySelector('[data-ft-action="copy"]'),t=document.querySelector('[data-ft-action="regen"]'),r=document.querySelector('[data-ft-action="revoke"]'),n=document.querySelector('[data-ft-stat="created"]'),o=document.querySelector('[data-ft-stat="rotated"]'),s=document.getElementById("adminFtCurl");if(f&&(v.plainToken?(f.textContent=v.plainToken,f.classList.add("is-plain")):C&&C.has_token?(f.textContent=(C.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",f.classList.remove("is-plain")):(f.textContent=ServerI18n.t("firetokenNotSetHint"),f.classList.remove("is-plain")),u&&(C&&C.enabled&&C.has_token?(u.textContent=ServerI18n.t("firetokenStatusHealthy"),u.className="admin-ft-status is-good"):C&&C.has_token?(u.textContent=ServerI18n.t("firetokenStatusDisabled"),u.className="admin-ft-status is-warn"):(u.textContent=ServerI18n.t("firetokenStatusUnset"),u.className="admin-ft-status is-muted")),d&&(d.disabled=!v.plainToken),r&&(r.disabled=!(C&&C.has_token)),t&&(t.textContent=C&&C.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),n&&(n.textContent=C?L(C.created_at):"\u2014"),o&&(o.textContent=C?S(C.rotated_at):"\u2014"),s)){let e=v.plainToken?v.plainToken:C&&C.prefix?C.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";s.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${e}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function w(){let C=v.usage24h.map(n=>Number(n)||0),f=C.reduce((n,o)=>n+o,0),u=C.length?Math.max(...C):0,d=document.querySelector('[data-ft-stat="hits"]'),t=document.querySelector('[data-ft-stat="peak"]'),r=document.querySelector("[data-ft-peak-meta]");d&&(d.textContent=f.toLocaleString()),t&&(t.textContent=u.toLocaleString()),r&&(r.textContent=ServerI18n.t("firetokenPeakMeta",{peak:u.toLocaleString()}))}function b(){let C=document.getElementById("adminFtChart24h");if(!C)return;let f=v.usage24h.map(r=>Number(r)||0);if(!f.length){C.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let u=Math.max(...f),d=12e3,t=u>0?Math.min(100,d/Math.max(u,d)*100):100;C.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${f.map((r,n)=>{let o=u>0?Math.max(2,r/u*100):2;return`<div class="bar ${u>0&&r===u?"is-peak":""}" style="height:${o}%" title="${n.toString().padStart(2,"0")}:00 \u2014 ${r}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(r=>`<span>${String(r).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function E(){let C=document.getElementById("adminFtIps"),f=document.querySelector("[data-ft-ip-count]");if(!C)return;let u=v.ips||[];if(f&&(f.textContent=u.length?`${u.length} IP`:"\u2014"),!u.length){C.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let d=u[0]?.ip;C.innerHTML=u.map((t,r)=>{let n=r===0,o=t.source==="web"&&(t.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${n?"is-top":""}">
          <span class="ip">${I(t.ip||"?")}</span>
          ${n?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${o?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${I(t.source||"\u2014")}</span>
          <span class="cnt">${t.count||0} hits</span>
          <span class="when">${S(t.last_seen)}</span>
        </div>`}).join("")}function q(){let C=document.getElementById("adminFtAudit");if(!C)return;let f=v.audit||[];if(!f.length){C.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let u={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},d={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};C.innerHTML=f.map(t=>{let r=d[t.kind]||"is-info",n=u[t.kind]||t.kind,o=t.meta||{},s=o.prefix?` \xB7 prefix=${I(o.prefix)}`:o.enabled!=null?` \xB7 enabled=${o.enabled}`:"";return`
        <div class="admin-ft-audit-row ${r}">
          <span class="ts">${L(t.ts)}</span>
          <span class="kind">${I(n)}</span>
          <span class="detail">${s}</span>
        </div>`}).join("")}function A(){let C=document.getElementById("settings-grid");if(!C||document.getElementById(y))return;C.insertAdjacentHTML("beforeend",B());let f=document.getElementById(y);f&&f.addEventListener("click",u=>{let d=u.target.closest("[data-ft-action]");if(!d)return;let t=d.dataset.ftAction;t==="regen"?N():t==="revoke"?D():t==="copy"&&v.plainToken&&window.AdminUtils.copyText(v.plainToken,ServerI18n.t("firetokenToastCopied"))}),v.stopPoll||(v.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(y),intervalMs:h,tick:j}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&A()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&A()})})()});var Lt=ye(()=>{(function(){"use strict";let y="sec-about-overview",I=window.AdminUtils&&window.AdminUtils.escapeHtml||function(A){return String(A).replace(/[&<>"']/g,function(C){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[C]})},h="Danmu Fire",v="https://github.com/guan4tou2/danmu-desktop",B=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],j=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],F="danmu.about.lastUpdateCheck",x={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function m(){return`
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
                <span class="v" style="grid-column: span 2" data-about-admin-url>${I(location.origin+"/admin/")}</span>
              </div>
            </div>
          </article>

          <article class="admin-about-changelog">
            <div class="admin-about-changelog-head">
              <span class="admin-ui-monolabel">${ServerI18n.t("uiSectionChangelog")}</span>
              <a class="admin-about-changelog-more" href="${v}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${B.slice(0,4).map(A=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${I(A.v)}</span>
                  ${A.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${I(A.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${A.notes.slice(0,3).map(C=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${I(C.t)}">${I(C.t.toUpperCase())}</span>
                      <span class="msg">${I(C.l)}</span>
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
                  <span class="n">${I(A.n)}</span>
                  <span class="v">${I(A.v)}</span>
                  <span class="l">${I(A.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function N(A){if(!A||A<0)return"\u2014";let C=Math.floor(A/86400),f=Math.floor(A%86400/3600),u=Math.floor(A%3600/60);return C>0?`${C}d ${f}h`:f>0?`${f}h ${u}m`:`${u}m`}function D(){let A=document.querySelector("[data-about-tag]"),C=document.querySelector("[data-about-build]"),f=document.querySelector("[data-about-uptime]"),u=document.querySelector("[data-about-update]"),d=document.querySelector("[data-about-checked]"),t=document.querySelector("[data-about-env]"),r=document.querySelector("[data-about-ws-path]");if(A&&(A.textContent=`v${x.appVersion}`),C){let n=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";C.textContent=`BUILD \xB7 ${n} \xB7 stable channel`,t&&(t.textContent=n)}if(f){let n=x.serverStartedAt?x.serverTime-x.serverStartedAt:0;f.textContent=N(n)}if(u&&(x.isLatest===!0?u.textContent=ServerI18n.t("aboutIsLatestYes"):x.isLatest===!1?u.textContent=ServerI18n.t("aboutHasNewVersion",{v:x.latestVersion||""}):u.textContent="\u2014",u.style.color=x.isLatest===!0?"var(--hud-lime)":x.isLatest===!1?"var(--hud-amber)":""),d&&(d.textContent=x.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:S(x.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),r){let n=window.DANMU_CONFIG||{};r.textContent=n.wsPath||"/ws"}}function S(A){let C=Number(A)||0;if(!C)return"\u2014";let f=String(C).length>12?C:C*1e3,u=(Date.now()-f)/1e3;return u<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(u)}):u<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(u/60)}):u<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(u/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(u/86400)})}function L(A,C){let f=r=>String(r||"").replace(/^v/i,"").split("-")[0].split(".").map(function(n){return parseInt(n,10)||0}),u=f(A),d=f(C),t=Math.max(u.length,d.length);for(let r=0;r<t;r++){let n=u[r]||0,o=d[r]||0;if(n>o)return!0;if(n<o)return!1}return!1}async function P({silent:A}={}){A||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let C=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!C.ok)throw new Error("HTTP "+C.status);let u=((await C.json()).tag_name||"").replace(/^v/i,"");x.latestVersion=u,x.lastCheckedAt=Date.now(),x.isLatest=!L(u,x.appVersion);try{localStorage.setItem(F,JSON.stringify({ts:x.lastCheckedAt,latest:u,isLatest:x.isLatest}))}catch{}D(),A||window.showToast&&window.showToast(x.isLatest?ServerI18n.t("aboutToastLatest",{v:x.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:u}),!0)}catch(C){A||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:C.message||""}),!1)}}function w(){try{let A=localStorage.getItem(F);if(!A)return;let C=JSON.parse(A);x.latestVersion=C.latest,x.lastCheckedAt=Number(C.ts)||0,x.isLatest=!!C.isLatest}catch{}}async function b(){try{let A=await fetch("/admin/metrics",{credentials:"same-origin"});if(!A.ok)return;let C=await A.json();x.serverStartedAt=Number(C.server_started_at)||0,x.serverTime=Number(C.server_time)||Date.now()/1e3,D()}catch{}}function E(){let A=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",C=x.serverStartedAt?x.serverTime-x.serverStartedAt:0,f=(navigator.userAgent||"").slice(0,200),u=[`${h} v${x.appVersion}`,`Channel: ${A}`,`Uptime: ${N(C)}`,`User-Agent: ${f}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(u).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function q(){let A=document.getElementById("settings-grid");if(!A||document.getElementById(y))return;A.insertAdjacentHTML("beforeend",m()),x.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",w(),D();let C=document.getElementById(y);C&&C.addEventListener("click",function(f){let u=f.target.closest("[data-about-action]");if(!u)return;let d=u.dataset.aboutAction;d==="copy"?E():d==="check-update"?P({silent:!1}):d==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():d==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),b(),setInterval(b,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&q()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&q()})})()});var At=ye(()=>{(function(){"use strict";let y="admin-setup-wizard-root",I="danmu.setupWizard.completed",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},v=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],B=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function j(e){return e?e.label?e.label:e.labelKey?ServerI18n.t(e.labelKey):e.name||e.id||"\u2014":"\u2014"}function F(e){return e?e.descriptionKey?ServerI18n.t(e.descriptionKey):e.description||"":""}let x={open:!1,step:0,themes:B.slice(),activeTheme:B[0].name,selectedTheme:B[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function m(){x.publicUrl=window.location.origin+"/"}function N(){let e=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";e==="setup"&&!x.open?D():e!=="setup"&&x.open&&S({silent:!0})}function D(){x.open=!0,x.step=0,m(),document.body.dataset.setupWizardOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",L()),u()),t(),b(),P()}function S(e){let l=e&&e.silent;x.open=!1,document.body.dataset.setupWizardOpen="";let g=document.getElementById(y);if(g&&g.remove(),!l&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function L(){return`
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
            ${v.map(function(e,l){return`
                <div class="admin-setup-step" data-step-index="${l}">
                  <span class="bullet">${l+1}</span>
                  <span class="lbl">${h(ServerI18n.t(e.labelKey))}</span>
                </div>
                ${l<v.length-1?'<span class="admin-setup-step-sep"></span>':""}
              `}).join("")}
          </div>

          <div class="admin-setup-content" data-setup-content></div>

          <footer class="admin-setup-foot" data-setup-foot>
            <button type="button" class="admin-ui-action admin-setup-foot-action" data-setup-action="close">${ServerI18n.t("setupWizardSkip")}</button>
            <span class="admin-setup-foot-meta" data-setup-meta>${ServerI18n.t("setupWizardStepMeta",{current:1,total:v.length})}</span>
            <span class="admin-setup-foot-spacer"></span>
            <button type="button" class="admin-ui-action admin-setup-foot-action" data-setup-action="prev" disabled>${ServerI18n.t("setupWizardBack")}</button>
            <button type="button" class="admin-ui-action is-primary admin-setup-foot-action" data-setup-action="next">${ServerI18n.t("setupWizardNext")}</button>
          </footer>
        </div>
      </div>`}function P(){let e=document.getElementById(y);if(!e)return;e.querySelectorAll(".admin-setup-step").forEach(function(T,k){T.classList.toggle("is-done",k<x.step),T.classList.toggle("is-active",k===x.step)}),e.querySelectorAll(".admin-setup-step-sep").forEach(function(T,k){T.classList.toggle("is-done",k<x.step)});let l=e.querySelector("[data-setup-meta]");l&&(l.textContent=ServerI18n.t("setupWizardStepMeta",{current:x.step+1,total:v.length}));let g=e.querySelector('[data-setup-action="prev"]');g&&(g.disabled=x.step===0);let a=e.querySelector('[data-setup-action="next"]');if(a){let T=v[x.step].id;a.textContent=ServerI18n.t("setupWizardNext")}let i=e.querySelector("[data-setup-foot]");i&&(i.hidden=v[x.step].id==="done");let c=e.querySelector("[data-setup-content]");if(!c)return;let p=v[x.step].id;p==="server"?c.innerHTML=w():p==="moderation"?c.innerHTML=E():p==="theme"?c.innerHTML=C():c.innerHTML=f(),d(p)}function w(){let e=x.readiness,l=e?Number(e.overlay_count)||0:null,g=l!==null&&l>0,i=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:x.publicUrl},{ok:g,unknown:l===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:g?ServerI18n.t("setupWizardReadyDisplayOk",{n:l}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!(x.activeTheme||x.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:j(x.themes.filter(function(c){return(c.name||c.id)===(x.selectedTheme||x.activeTheme)})[0]||x.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(c){let p=c.unknown?"is-unknown":c.ok?"is-done":"is-pending",T=c.unknown?"?":c.ok?"\u2713":"!",k='<span class="admin-setup-ready-title">'+h(c.title)+'</span><span class="admin-setup-ready-value">'+h(c.value||"")+"</span>",_=c.goto?'<a class="admin-setup-ready-go" href="'+c.goto+'" data-setup-goto="'+c.goto+'">'+h(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+p+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+T+"</span>"+k+_+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${h(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${h(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${i}</div>
      </div>`}async function b(){try{let e=await fetch("/overlay_status",{credentials:"same-origin"});if(!e.ok)throw new Error("HTTP "+e.status);let l=await e.json();x.readiness={overlay_count:Number(l.overlay_count)||0,mode:l.mode||""}}catch{x.readiness=null}x.open&&v[x.step].id==="server"&&P()}function E(){let e=x.moderationRules.map(function(l){return`
        <a class="admin-setup-mod-row" href="#/${l.route}" data-setup-goto="#/${l.route}">
          <span class="admin-setup-mod-body">
            <span class="admin-setup-mod-title">${h(ServerI18n.t(l.labelKey))}</span>
            <span class="admin-setup-mod-desc">${h(ServerI18n.t(l.descKey))}</span>
          </span>
          <span class="admin-setup-mod-go">${h(ServerI18n.t("setupWizardModGo"))}<span aria-hidden="true">\u203A</span></span>
        </a>`}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${h(ServerI18n.t("setupWizardStepModeration"))}</h2>
        <p class="admin-setup-step-desc">${h(ServerI18n.t("setupWizardModerationDesc"))}</p>
        <div class="admin-setup-mod-list">${e}</div>
      </div>`}let q=["default","neon","retro","cinema"];function A(){let e={};return(x.themes||[]).forEach(function(l){e[l.name||l.id]=l}),q.map(function(l){let g=B.filter(function(i){return i.name===l})[0],a=e[l];return g?{name:l,label:a&&a.label,labelKey:g.labelKey,descriptionKey:g.descriptionKey,colors:g.colors}:a}).filter(Boolean)}function C(){let e=A();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${e.map(function(l){let g=l.name||l.id||"",a=(x.selectedTheme||x.activeTheme)===g,i=(l.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${a?" is-selected":""}" data-setup-theme="${h(g)}">
                ${a?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${i.map(function(c,p){let T=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${h(c)};font-size:${10+p*2}px;text-shadow:0 0 6px ${h(c)}66;">${T[p]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${h(j(l))}</div>
                <div class="admin-setup-theme-sub">${h(F(l))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function f(){let e=(function(){for(let l=0;l<x.themes.length;l+=1){let g=x.themes[l];if((g.name||g.id)===(x.selectedTheme||x.activeTheme))return j(g)}return x.selectedTheme||x.activeTheme||"\u2014"})();return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${h(x.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${h(e)}</span></div>
        </div>
        <div class="admin-setup-done-next">
          <a class="admin-setup-done-link" href="#/moderation" data-setup-goto="#/moderation">${h(ServerI18n.t("setupWizardStepModeration"))}<span aria-hidden="true">\u203A</span></a>
          <a class="admin-setup-done-link" href="#/overlay" data-setup-goto="#/overlay">${h(ServerI18n.t("adminRouteTitle_overlay"))}<span aria-hidden="true">\u203A</span></a>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function u(){let e=document.getElementById(y);e&&e.addEventListener("click",function(l){if(l.target===e){S();return}let g=l.target.closest("[data-setup-action]");if(g){if(g.dataset.setupAction==="close"){S();return}if(g.dataset.setupAction==="prev"&&x.step>0){x.step-=1,P();return}g.dataset.setupAction==="next"&&n()}})}function d(e){let l=document.getElementById(y);if(l){if(e==="moderation"||e==="done"||e==="server"){if(l.querySelectorAll("[data-setup-goto]").forEach(function(g){g.addEventListener("click",function(){S();let a=g.dataset.setupGoto;a&&(window.location.hash=a)})}),e==="done"){let g=l.querySelector("[data-setup-complete-cta]");g&&g.addEventListener("click",o)}return}if(e==="theme"){l.querySelectorAll("[data-setup-theme]").forEach(function(g){g.addEventListener("click",function(){x.selectedTheme=g.dataset.setupTheme||x.selectedTheme,P()})});return}}}async function t(){try{let e=await fetch("/admin/themes",{credentials:"same-origin"});if(!e.ok)return;let l=await e.json(),g=Array.isArray(l.themes)?l.themes:[];if(!g.length)return;x.themes=g.map(function(a){return{name:a.name||a.id||"",label:a.label||a.display_name||a.name||"",description:a.description||"",colors:a.preview_colors||a.colors||a.palette||B[0].colors}}),x.activeTheme=l.active||x.themes[0]&&x.themes[0].name||x.activeTheme,x.selectedTheme||(x.selectedTheme=x.activeTheme),x.open&&v[x.step].id==="theme"&&P()}catch{}}async function r(){if(!x.selectedTheme||x.selectedTheme===x.activeTheme)return!0;try{let e=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:x.selectedTheme})});if(!e.ok)throw new Error("HTTP "+e.status);return x.activeTheme=x.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function n(){if(!(v[x.step].id==="theme"&&!await r())){if(x.step<v.length-1){x.step+=1,P();return}o()}}function o(){try{localStorage.setItem(I,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),S()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}D()},close:function(){S()},isCompleted:function(){try{return!!localStorage.getItem(I)}catch{return!1}},__setCapabilityForTest:function(){}};function s(){window.addEventListener("hashchange",N),N()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&s()})})()});var Ct=ye(()=>{(function(){"use strict";let y="sec-poll-deepdive-overview",I=window.AdminUtils&&window.AdminUtils.escapeHtml||function(b){return String(b).replace(/[&<>"']/g,function(E){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[E]})},h={poll:null,refreshTimer:0};function v(){return`
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
      </div>`}function B(b){if(b.innerHTML="",!window.AdminEmpty){b.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let E=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});E.classList.add("lg:col-span-2"),E.dataset.emptyKind="poll-deepdive",b.appendChild(E)}let j=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function F(b){return b?new Date(b*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function x(b){if(!b||b.length<2)return"";let E=Math.max.apply(null,b.map(function(u){return u.n}).concat([1])),q=100,A=32,C=q/(b.length-1),f=b.map(function(u,d){let t=(d*C).toFixed(2),r=(A-u.n/E*(A-2)-1).toFixed(2);return t+","+r});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+q+" "+A+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+f.join(" ")+'" /></svg>'}function m(b){let E=b.state||(b.active?"active":"ended"),q=b.question||"\u2014",A=Array.isArray(b.options)?b.options:[],C=function(g){return Number(g.votes!=null?g.votes:g.count)||0},f=A.reduce(function(g,a){return g+C(a)},0),u=E==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:F(b.ended_at)}),d=(function(){let g=Number(b.started_at)||0;if(!g)return"\u2014";let a=E==="active"?Date.now()/1e3:Number(b.ended_at)||g,i=Math.max(0,Math.floor(a-g));return Math.floor(i/60)+":"+String(i%60).padStart(2,"0")})(),t=Number(window._lastOverlayCount)||0,r=t>0?Math.round(f/t*100)+"%":"\u2014",n=t>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:f,audience:t}):ServerI18n.t("pollDeepdiveParticipationUnknown"),o=(function(){let g=Array.isArray(b.questions)?b.questions:[],a=0;for(let i of g)a+=Number(i.duplicate_attempts)||0;return g.length||(a=Number(b.duplicate_attempts)||0),a})(),s=A.map(function(g,a){let i=C(g),c=f>0?i/f*100:0,p=j[a%j.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${I(g.label||g.text||g.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:a+1}))}</span>
            <span class="votes">${i} \xB7 ${c.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${c.toFixed(2)}%;background:${p}"></div>
          </div>
        </div>`}).join(""),e=Array.isArray(b.vote_timeline)?b.vote_timeline:[],l=e.length>=2?x(e):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${I(q)}</div>
          <div class="admin-pdd-state">${I(u)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${f}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${r}</div><div class="sub">${I(n)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${I(d)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${o}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${A.length?s:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${l}</div>
        </article>
      </div>`}function N(){let b=document.querySelector("[data-pdd-grid]");if(b){if(!h.poll||!h.poll.poll_id){B(b);return}b.innerHTML=m(h.poll)}}async function D(){try{let b=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!b.ok)return;let E=await b.json();h.poll=E,N()}catch{}}function S(){if(!h.poll||!Array.isArray(h.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let b=[["option_label","votes","percentage"]],E=h.poll.options.reduce(function(u,d){return u+(Number(d.votes!=null?d.votes:d.count)||0)},0);h.poll.options.forEach(function(u,d){let t=Number(u.votes!=null?u.votes:u.count)||0,r=E>0?(t/E*100).toFixed(2):"0.00";b.push([u.label||"option_"+(d+1),t,r])});let q=b.map(function(u){return u.map(function(d){let t=String(d);return t.includes(",")||t.includes('"')?'"'+t.replace(/"/g,'""')+'"':t}).join(",")}).join(`
`),A=new Blob([q],{type:"text/csv;charset=utf-8"}),C=URL.createObjectURL(A),f=document.createElement("a");f.href=C,f.download="poll-"+(h.poll.poll_id||"current")+".csv",document.body.appendChild(f),f.click(),document.body.removeChild(f),setTimeout(function(){URL.revokeObjectURL(C)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function L(){try{let b=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!b.ok)throw new Error("HTTP "+b.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function P(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(D(),h.refreshTimer||(h.refreshTimer=setInterval(D,5e3))):h.refreshTimer&&(clearInterval(h.refreshTimer),h.refreshTimer=0)}function w(){let b=document.getElementById("settings-grid");if(!b||document.getElementById(y))return;b.insertAdjacentHTML("beforeend",v());let E=document.getElementById(y);E&&E.addEventListener("click",function(q){let A=q.target.closest("[data-pdd-action]");A&&(A.dataset.pddAction==="export-csv"?S():A.dataset.pddAction==="push"&&L())}),D(),P(),window.addEventListener("hashchange",P)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&w()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&w()})})()});var Bt=ye(()=>{(function(){"use strict";let y="admin-message-drawer-root",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(r){return String(r).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})},v={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},B=null;function j(r){let n=r.detail&&r.detail.entry;n&&(v.open||(B=document.activeElement),v.entry=n,F(),n.data&&n.data.fingerprint&&D(n.data.fingerprint),S(n))}function F(){v.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",L()),P()),w();let r=document.querySelector("#"+y+" .admin-msgd-v4__close")||document.querySelector("#"+y+" button");if(r)try{r.focus({preventScroll:!0})}catch{}}function x(){v.open=!1,document.body.dataset.messageDrawerOpen="";let r=document.getElementById(y);if(r&&r.remove(),B&&typeof B.focus=="function"&&document.contains(B))try{B.focus({preventScroll:!0})}catch{}B=null}function m(r){if(!v.open)return;if(r.key==="Escape"){x();return}let n=document.activeElement,o=n?(n.tagName||"").toLowerCase():"";if(!(n&&(n.isContentEditable||o==="input"||o==="textarea"||o==="select"))){if(r.key==="ArrowLeft"||r.key==="k"){N(-1),r.preventDefault();return}if(r.key==="ArrowRight"||r.key==="j"){N(1),r.preventDefault();return}}}function N(r){if(!v.entry)return;let n=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(n=window.AdminLiveFeed.getEntries()),!n.length)return;let o=n.findIndex(function(l){return l.id===v.entry.id});if(o<0)return;let s=o+-r;if(s<0||s>=n.length){window.showToast&&window.showToast(r<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let e=n[s];v.entry=e,v.fingerprintRecord=null,S(e),w(),e.data&&e.data.fingerprint&&D(e.data.fingerprint)}async function D(r){try{let n=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!n.ok)return;let o=await n.json(),e=(Array.isArray(o.records)?o.records:[]).find(function(l){return(l.fingerprint||"").startsWith(r.slice(0,8))});v.fingerprintRecord=e||null,w()}catch{}}function S(r){let n=r.data&&r.data.fingerprint;if(!n){v.sameFpEntries=[];return}let o=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(o=window.AdminLiveFeed.getEntries()),v.sameFpEntries=o.filter(function(s){let e=s.data&&s.data.fingerprint||s.fingerprint||"";return e&&e.startsWith(n.slice(0,8))}).slice(0,8)}function L(){return`
      <div id="${y}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function P(){let r=document.getElementById(y);r&&r.addEventListener("click",function(n){let o=n.target.closest("[data-msgd-action]");if(!o)return;n.stopPropagation();let s=o.dataset.msgdAction;s==="close"?x():s==="ban-fp"?C():s==="ban-fp-quick"?A():s==="recall-msg"?u():s==="blacklist-kw"?d():s==="reply"?t():s==="prev"?N(-1):s==="next"&&N(1)})}function w(){let r=document.getElementById(y);if(!r)return;let n=r.querySelector("[data-msgd-body]");n&&(n.innerHTML=b())}function b(){let r=v.entry;if(!r)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let n=r.data||{},o=n.fingerprint||"\u2014",s=o==="\u2014"?"\u2014":o.slice(0,8),e=o==="\u2014"?"\u2014":o.slice(0,12),l=r.ts?E(r.ts):"\u2014",g=n.nickname||ServerI18n.t("msgDrawerAnonymous"),a=v.fingerprintRecord||{},i=Number(a.message_count)||0,c=Number(a.violation_count)||0,p=v.sameFpEntries||[],T=p.length?Math.round(p.reduce((_,M)=>_+((M.data||M).text||"").length,0)/p.length):(n.text||"").length,k=0;for(let _=0;_<o.length;_++)k=k*31+o.charCodeAt(_)&65535;return k=k%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${k})">${h((g||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${h(g)}</div>
          <div class="admin-msgd-v4__fp">fp:${h(e)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${h(l)}</span>
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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${i||p.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${T}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${c>0?"warn":"good"}">${c}</div></div>
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
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${o==="\u2014"?"disabled":""}>${h(ServerI18n.t("msgdBanFpBtn"))}</button>
          <!-- 2026-10-29\uFF1A\u539F\u672C\u9019\u88E1\u662F\u300C\u975C\u97F3\u6307\u7D0B\u300D\uFF0B\u300C\u25D1 Mask\u300D\u5169\u9846\u3002
               \u975C\u97F3\u8207\u5C01\u7981\u6253\u7684\u662F\u540C\u4E00\u652F API\uFF08\u540C\u4E00\u500B\u6C38\u4E45\u6548\u679C\uFF09\uFF0C\u800C Mask \u5176\u5BE6\u662F
               \u628A\u6574\u53E5\u6587\u672C\u52A0\u9032\u9ED1\u540D\u55AE\u2014\u2014\u5169\u9846\u90FD\u5728\u627F\u8AFE\u4E00\u500B\u4E0D\u5B58\u5728\u7684\u9078\u9805\u3002
               \u63DB\u6210\u771F\u7684\u505A\u5F97\u5230\u7684\u4E8B\uFF1A\u628A\u9019\u4E00\u5247\u5F9E\u5927\u87A2\u5E55\u64A4\u4E0B\u3002 -->
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="recall-msg" ${n.message_id?"":"disabled"}>${h(ServerI18n.t("lfRecallBtn"))}</button>
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
    `}function E(r){try{let n=new Date(r),o=String(n.getHours()).padStart(2,"0"),s=String(n.getMinutes()).padStart(2,"0"),e=String(n.getSeconds()).padStart(2,"0");return o+":"+s+":"+e}catch{return"\u2014"}}function q(r){let n;if(typeof r=="number")n=r*1e3;else if(typeof r=="string")n=new Date(r).getTime();else return"\u2014";if(!n)return"\u2014";let o=(Date.now()-n)/1e3;return o<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(o)}):o<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(o/60)}):o<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(o/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(o/86400)})}async function A(r,n,o){let s=v.entry&&v.entry.data&&v.entry.data.fingerprint;if(!s)return;let e=parseInt(n||0,10)||0,l=e>0?await window.AdminModeration.banFingerprint(s,e,r):await window.AdminModeration.callBlock("fingerprint",s,r);if(!l.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:l.error||""}),!1);return}let g=o||(e>0?ServerI18n.t("msgDrawerSecondsLabel",{n:e}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:s.slice(0,8),label:g}),!0),x()}async function C(){let r=v.entry&&v.entry.data||{},n=r.fingerprint||"\u2014";if(n==="\u2014")return;let o=n.slice(0,12),s=r.nickname||ServerI18n.t("msgDrawerAnonymous"),e=0;for(let k=0;k<n.length;k++)e=e*31+n.charCodeAt(k)&65535;e=e%360;let l=document.createElement("div");l.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${e})">${h((s||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${h(s)}</div>
          <div class="fp">fp:${h(o)}</div>
          <div class="ip">IP \xB7 ${h(r.ip||"\u2014")} \xB7 ${h(r.user_agent||r.ua||"\u2014")}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let g=k=>{l.querySelectorAll(".admin-bancfm-dchip").forEach(_=>_.classList.remove("is-active")),k.classList.add("is-active")};if(l.addEventListener("click",k=>{let _=k.target.closest("[data-ban-duration]");_&&g(_)}),l.addEventListener("keydown",k=>{if(k.key!=="Enter"&&k.key!==" ")return;let _=k.target.closest("[data-ban-duration]");_&&(k.preventDefault(),g(_))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:l,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let i=(l.querySelector("[data-ban-reason]")||{}).value||"",c=l.querySelector(".admin-bancfm-dchip.is-active"),p=c&&parseInt(c.dataset.banDuration||"0",10)||0,T=c?c.textContent.trim():ServerI18n.t("msgDrawerPermanent");return A(i.trim(),p,T)}function f(){}async function u(){let r=v.entry,n=r&&r.data&&r.data.message_id;if(!n)return;if(!(await window.AdminModeration.recall(n)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),x()}async function d(){let r=v.entry&&v.entry.data&&v.entry.data.text;if(!r)return;await window.AdminModeration.blockKeyword(r)&&x()}async function t(){let r=document.querySelector("[data-msgd-reply]"),n=r?r.value.trim():"";if(n)try{let o=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:n})});if(!o.ok)throw new Error("HTTP "+o.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),r&&(r.value="")}catch(o){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:o.message||""}),!1)}}window.AdminMessageDrawer={open:function(r){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:r}}))},close:x},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",j),document.addEventListener("keydown",m))})})()});var Ft=ye(()=>{(function(){"use strict";let y="danmu.notifications.read",I="danmu.notifications.archived",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})},v={items:[],refreshTimer:0};function B(s){try{let e=localStorage.getItem(s);if(!e)return new Set;let l=JSON.parse(e);return new Set(Array.isArray(l)?l:[])}catch{return new Set}}function j(s,e){try{localStorage.setItem(s,JSON.stringify(Array.from(e)))}catch{}}function F(s){let e=B(y);e.add(s),j(y,e)}async function x(){let s=[m().catch(function(){return[]}),N().catch(function(){return[]}),D().catch(function(){return[]}),S().catch(function(){return[]})],l=(await Promise.all(s)).flat();l.sort(function(g,a){return(a.ts||0)-(g.ts||0)}),v.items=l,E(),C()&&q()}async function m(){let s=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!s.ok)return[];let e=await s.json();return(Array.isArray(e.events)?e.events:[]).map(function(g,a){let i=(Number(g.ts)||0)*1e3,c="tok-"+(g.ts||a)+"-"+(g.kind||"x"),p=g.kind||"?",T="info",k=ServerI18n.t("notifTitleFireTokenEvent");if(p==="rotated")T="info",k=ServerI18n.t("notifTitleFireTokenRotated");else if(p==="revoked")T="warn",k=ServerI18n.t("notifTitleFireTokenRevoked");else if(p==="toggled"){let _=g.meta&&g.meta.enabled;T=_?"good":"warn",k=ServerI18n.t("notifTitleFireTokenToggled",{state:_?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:c,sev:T,src:"Fire Token",ts:i,title:k,desc:ServerI18n.t("notifDescEventType",{kind:p})+(g.meta?" \xB7 "+JSON.stringify(g.meta):""),raw:g}})}async function N(){let s=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!s.ok)return[];let e=await s.json();return(Array.isArray(e.events)?e.events:[]).map(function(g,a){let i=(Number(g.ts)||0)*1e3,c="flt-"+(g.ts||a)+"-"+(g.action||"x")+"-"+a,p=g.action||"match";return{id:c,sev:p==="drop"?"warn":"info",src:"Moderation",ts:i,title:ServerI18n.t("notifTitleFilterHit",{action:p}),desc:ServerI18n.t("notifDescFilterHit",{rule:g.rule_id||"?",text:(g.text||"").slice(0,60)}),raw:g}})}async function D(){let s=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!s.ok)return[];let e=await s.json();return(Array.isArray(e.events)?e.events:[]).map(function(g,a){let i=(Number(g.ts)||0)*1e3,c=String(g.kind||"?");return{id:"wh-"+(g.ts||a)+"-"+c+"-"+a,sev:c==="unregister"?"warn":"info",src:"Webhooks",ts:i,title:ServerI18n.t("notifTitleWebhookEvent",{kind:c}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:g.actor||"system"})+(g.meta?" \xB7 "+JSON.stringify(g.meta):""),raw:g}})}async function S(){let s=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!s.ok)return[];let e=await s.json(),l=Array.isArray(e.events)?e.events:[],g=new Set(["auth","broadcast","system","session","sessions"]);return l.filter(function(a){return g.has(String(a.source||""))}).map(function(a,i){let c=(Number(a.ts)||0)*1e3,p=String(a.kind||"?");return{id:"sys-"+(a.ts||i)+"-"+(a.source||"x")+"-"+p+"-"+i,sev:p==="login_failed"?"warn":"info",src:"System",ts:c,title:ServerI18n.t("notifTitleSystemEvent",{kind:p}),desc:ServerI18n.t("notifDescSystemEvent",{source:a.source||"?",actor:a.actor||"system"}),raw:a}})}let L="admin-notif-panel",P={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/integrations/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/integrations/plugins"},System:{key:"adminNavSystem",hash:"#/events"}};function w(s){let e=P[s];return e?ServerI18n.t(e.key):s}function b(){let s=B(y),e=B(I);return v.items.filter(l=>!s.has(l.id)&&!e.has(l.id))}function E(){let s=document.querySelector("[data-notif-badge]");if(!s)return;let e=b().length;s.textContent=e>99?"99+":String(e),s.hidden=e===0}function q(){let s=document.getElementById(L);if(!s)return;let e=b().slice(0,20),l=e.length?e.map(g=>{let a=P[g.src];return'<li class="admin-notif__item" data-sev="'+h(g.sev)+'"><div class="admin-notif__text">'+h(g.title)+'</div><div class="admin-notif__meta">'+h(w(g.src))+" \xB7 "+h(A(g.ts))+"</div>"+(a?'<button type="button" class="admin-notif__action" data-notif-go="'+h(a.hash)+'" data-notif-id="'+h(g.id)+'">'+h(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+h(ServerI18n.t("notifEmpty"))+"</li>";s.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+h(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+h(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+l+"</ul>"}function A(s){if(!s)return"\u2014";let e=(Date.now()-s)/1e3;return e<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(e)}):e<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(e/60)}):e<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(e/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(e/86400)})}function C(){let s=document.getElementById(L);return!!s&&!s.hidden}function f(){let s=document.getElementById(L);s&&(q(),s.hidden=!1,v.refreshTimer||(v.refreshTimer=setInterval(x,3e4)))}function u(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&f()}function d(){let s=document.getElementById(L);s&&(s.hidden=!0),v.refreshTimer&&(clearInterval(v.refreshTimer),v.refreshTimer=0)}function t(){C()?d():f()}function r(){let s=document.querySelector(".admin-dash-topbar-actions");if(!s||document.getElementById("admin-notif-bell"))return;let e=document.createElement("button");if(e.id="admin-notif-bell",e.type="button",e.className="admin-dash-search is-icon-only admin-notif-bell",e.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),e.title=ServerI18n.t("adminRouteTitle_notifications"),e.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',s.insertBefore(e,s.firstChild),!document.getElementById(L)){let l=document.createElement("div");l.id=L,l.className="admin-notif",l.setAttribute("role","dialog"),l.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),l.hidden=!0,document.body.appendChild(l)}E(),u()}function n(){document.addEventListener("click",s=>{if(s.target.closest("#admin-notif-bell")){s.preventDefault(),t();return}let e=s.target.closest("[data-notif-go]");if(e){F(e.dataset.notifId),d(),location.hash=e.dataset.notifGo,E();return}if(s.target.closest("[data-notif-readall]")){b().forEach(l=>F(l.id)),q(),E();return}C()&&!s.target.closest("#"+L)&&d()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&C()&&d()}),window.addEventListener("hashchange",u),u()}function o(){r(),x()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(r).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),n(),o()})})()});var Dt=ye(()=>{(function(){"use strict";let y="sec-audit-overview",I=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},h={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},v={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function B(){return`
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
      </div>`}function j(t){if(!t)return"\u2014";try{let r=new Date(Number(t)*1e3),n=String(r.getHours()).padStart(2,"0"),o=String(r.getMinutes()).padStart(2,"0"),s=String(r.getSeconds()).padStart(2,"0");return`${n}:${o}:${s}`}catch{return"\u2014"}}function F(t){let r=String(t.action||t.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(r)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(r)?"warn":"info"}function x(t){return t==="danger"?"var(--hud-crimson, #f87171)":t==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function m(t){return v.filterActor==="all"||String(t.actor||"").toLowerCase()===v.filterActor}function N(t){return v.filterSeverity==="all"||F(t)===v.filterSeverity}function D(){return v.events.filter(function(t){return m(t)&&N(t)})}function S(t){let r=t&&t.meta&&typeof t.meta=="object"?t.meta:{};return r.target||r.keyword||r.fp||r.fingerprint||r.name||r.mode||r.session||r.hook_id||t.target||""}function L(t,r){let n=t!=null,o=r!=null;if(!n&&!o)return"";let s=n?I(JSON.stringify(t)):"",e=o?I(JSON.stringify(r)):"";return n?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${s}</span> \u2192 <span class="admin-audit-diff-a">${e}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${e}</span></span>`}function P(t){let r=t&&t.meta&&typeof t.meta=="object"?t.meta:{},n=[];t.detail&&n.push(`<span>${I(String(t.detail))}</span>`);let o=L(t.before,t.after);o&&n.push(o);let s=Object.assign({},r);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(l){delete s[l]}),Object.keys(s).length&&n.push(`<code class="admin-ui-code admin-audit-meta-extra">${I(JSON.stringify(s))}</code>`),!n.length){let l=h[t.source]&&h[t.source].label||t.source||"system";n.push(`<span>${I(String(l))}</span>`)}return n.join(" ")}function w(t){return t==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":t==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function b(){let t=document.querySelector("[data-audit-rows]");if(!t)return;let r=D();if(!r.length){t.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}t.innerHTML=r.map(function(n){let o=F(n),s=x(o),e=String(n.actor||"system"),l=S(n);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${o}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${I(j(n.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${s};box-shadow:0 0 6px ${s}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${w(e)}">${I(e)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${I(String(n.action||n.kind||"\u2014"))}</span>
              ${l?`<span class="admin-ui-target admin-audit-target">\u2192 ${I(String(l))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${P(n)}</div>
          </div>
        </div>`}).join("")}function E(){let t=document.querySelector("[data-audit-summary]");if(!t)return;let r=D().length,n=v.filterActor==="all"?ServerI18n.t("auditAllRoles"):v.filterActor,o=v.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):v.filterSeverity.toUpperCase();t.textContent=ServerI18n.t("auditSummaryLine",{n:r,actor:n,sev:o})}function q(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(t){t.classList.toggle("is-active",t.dataset.auditActorFilter===v.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(t){t.classList.toggle("is-active",t.dataset.auditSeverityFilter===v.filterSeverity)})}async function A(){try{let t=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!t.ok)return;let r=await t.json(),n=Array.isArray(r.events)?r.events.slice():[];n.sort(function(o,s){return Number(s.ts||0)-Number(o.ts||0)}),v.events=n,q(),b(),E()}catch{}}function C(){let t=D();if(!t.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let r=new Blob([JSON.stringify(t,null,2)],{type:"application/json;charset=utf-8"}),n=URL.createObjectURL(r),o=document.createElement("a");o.href=n,o.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(function(){URL.revokeObjectURL(n)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:t.length}),!0)}function f(){let t=document.getElementById(y);t&&t.addEventListener("click",function(r){let n=r.target.closest("[data-audit-actor-filter]");if(n){v.filterActor=n.dataset.auditActorFilter||"all",q(),b(),E();return}let o=r.target.closest("[data-audit-severity-filter]");if(o){let s=o.dataset.auditSeverityFilter||"all";v.filterSeverity=v.filterSeverity===s?"all":s,q(),b(),E();return}if(r.target.closest("[data-audit-export]")){C();return}r.target.closest("[data-audit-refresh]")&&A()})}function u(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(A(),v.refreshTimer||(v.refreshTimer=setInterval(A,3e4))):v.refreshTimer&&(clearInterval(v.refreshTimer),v.refreshTimer=0)}function d(){let t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("beforeend",B()),f(),A(),u(),window.addEventListener("hashchange",u))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&d()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&d()})})()});var Mt=ye(()=>{(function(){"use strict";let y="sec-audience-overview",I=window.AdminUtils&&window.AdminUtils.escapeHtml||function(i){return String(i).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})},h=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],v=20,B={records:[],filter:"all",shown:v,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function j(i){if(!i)return h[0];let c=0;for(let p=0;p<i.length;p++)c=c*31+i.charCodeAt(p)>>>0;return h[c%h.length]}function F(i){if(!i)return"\u2014";let c=typeof i=="number"?i*1e3:new Date(i).getTime();if(!c)return"\u2014";let p=Math.max(0,(Date.now()-c)/1e3);return p<60?Math.floor(p)+"s":p<3600?Math.floor(p/60)+"m":p<86400?Math.floor(p/3600)+"h":Math.floor(p/86400)+"d"}function x(i){return i==="blocked"||i==="high"?"is-danger":i==="mid"?"is-warn":"is-success"}function m(){return`
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
      </div>`}function N(){let i=B.search.trim().toLowerCase(),c=B.records.slice();return i&&(c=c.filter(function(p){return String(p.nickname||"").toLowerCase().indexOf(i)!==-1||String(p.hash||"").toLowerCase().indexOf(i)!==-1})),c.sort(function(p,T){return B.sort==="last_seen"?(Number(T.last_seen)||0)-(Number(p.last_seen)||0):(Number(T.msgs)||0)-(Number(p.msgs)||0)}),B.filter==="all"?c:B.filter==="flagged"?c.filter(function(p){return p.state==="flagged"||p.state==="blocked"}):B.filter==="extension"?c.filter(function(p){return p.fingerprint&&(p.fingerprint.indexOf("slido")===0||p.fingerprint.indexOf("ext_")===0)}):c}function D(){let i=document.querySelector("[data-aud-stats]");if(!i)return;let c=B.records,p=c.length,T=c.filter(function(R){return R.state==="flagged"}).length,k=c.filter(function(R){return R.state==="blocked"}).length,_=c.reduce(function(R,K){return R+(Number(K.msgs)||0)},0),M=c.filter(function(R){let K=R.last_seen;if(!K)return!1;let $=typeof K=="number"?K*1e3:new Date(K).getTime();return(Date.now()-$)/1e3<300}).length;i.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${p}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${M}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${_}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${T}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${k}</div></div>`}function S(){let i=document.querySelector("[data-aud-filters]");if(!i)return;let c=B.records.length,p=B.records.filter(function(T){return T.state==="flagged"||T.state==="blocked"}).length;i.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${B.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:c})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${B.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:p})}</button>`}let L="__anon__";function P(i){let c=(i.nickname||"").trim();return!c||c==="\u533F\u540D"}function w(i){let c=i.hash||i.fingerprint||"";return c?c.length>9?c.slice(0,4)+"\u2026"+c.slice(-4):c:"\u2014"}function b(){let i=[],c=[];return N().forEach(function(p){P(p)?c.push(p):i.push(p)}),c.length&&i.push({_anonGroup:!0,_count:c.length,fingerprint:L,msgs:c.reduce(function(p,T){return p+(Number(T.msgs)||0)},0),blocked:c.reduce(function(p,T){return p+(Number(T.blocked)||0)},0),last_seen:Math.max.apply(null,c.map(function(p){return p.last_seen||0})),state:c.some(function(p){return p.state==="blocked"})?"blocked":"active"}),i}function E(){let i=document.querySelector("[data-aud-list]"),c=document.querySelector("[data-aud-summary]");if(!i)return;let p=b(),T=Math.min(p.length,B.shown);if(c&&(c.textContent=ServerI18n.t("audienceShownOfTotal",{n:T,total:p.length})),p.length===0){i.innerHTML="";let R=window.AdminEmpty.render("audience");R.dataset.emptyKind="audience",i.appendChild(R);return}let k=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,_=p.slice(0,T).map(function(R){let K=R.fingerprint||"\u2014",$=R.state==="blocked",O=R._anonGroup?ServerI18n.t("audienceAnonymous"):(R.nickname||"").trim(),U=R._anonGroup?"?":O.slice(0,1),J=j(K);return`
        <div class="admin-aud-row${B.selectedFp===K?" is-selected":""}" data-aud-row data-aud-fp="${I(K)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${J}">${I(U)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${I(O)}</span>
            ${R._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:R._count})}</span>`:""}
            ${$&&!R._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${R._anonGroup?"\u2014":I(w(R))}</span>
          <span class="col col-msgs">${Number(R.msgs)||0}</span>
          <span class="col col-blocked">${Number(R.blocked)||0}</span>
          <span class="col col-seen">${I(F(R.last_seen))}</span>
          <span class="col col-actions">
            ${R._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${I(K)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),M=p.length>T?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";i.innerHTML=k+_+M}function q(i){return i&&B.records.find(function(c){return c.fingerprint===i})||null}function A(i){if(!i)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let c=[],p=Number(i.msgs)||0,T=i.fingerprint||"";i.state==="blocked"&&c.push(ServerI18n.t("audienceRuleBlocked")),i.state==="flagged"&&c.push(ServerI18n.t("audienceRuleFlagged")),p>=25?c.push(ServerI18n.t("audienceRuleMsgOver",{n:p})):p>=15&&c.push(ServerI18n.t("audienceRuleMsgNear",{n:p}));let k=B.records.filter(function(K){return K.ip&&i.ip&&K.ip===i.ip}).length;k>=3&&c.push(ServerI18n.t("audienceRuleSameIp",{n:k})),(T.indexOf("slido")===0||T.indexOf("ext_")===0)&&c.push(ServerI18n.t("audienceRuleBridge")),(i.nickname==="\u533F\u540D"||!i.nickname)&&c.push(ServerI18n.t("audienceRuleNoNick"));let _="normal",M="var(--hud-lime)",R="NORMAL";return i.state==="blocked"?(_="blocked",M="var(--hud-crimson)",R="BLOCKED"):i.state==="flagged"||p>=25?(_="high",M="var(--hud-crimson)",R="HIGH RISK"):(p>=15||k>=3)&&(_="mid",M="var(--hud-amber)",R="MID"),{level:_,color:M,label:R,rules:c}}async function C(i){B.detailLoading=!0;try{let c=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!c.ok){B.detailMessages=[];return}let p=await c.json(),T=Array.isArray(p.records)?p.records:[],k=Date.now()-300*1e3;B.detailMessages=T.filter(function(_){return(_.fingerprint||"")!==i?!1:(_.timestamp?new Date(_.timestamp).getTime():0)>=k}).slice(0,8)}catch{B.detailMessages=[]}finally{B.detailLoading=!1}}function f(){let i=document.querySelector("[data-aud-detail]");if(!i)return;let c=B.selectedFp;if(!c){i.hidden=!0,i.innerHTML="";return}let p=q(c);if(!p){B.selectedFp=null,i.hidden=!0;return}i.hidden=!1;let T=A(p);i.dataset.riskLevel=T.level;let k=j(c),_=!p.nickname||p.nickname==="\u533F\u540D",M=_?ServerI18n.t("audienceAnonymous"):p.nickname,R=_?"?":M.slice(0,1),K="fp:"+(c||"").slice(0,8),$=T.rules.length?T.rules.map(function(U){return"<li>"+I(U)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",O="";B.detailLoading?O='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":B.detailMessages.length===0?O='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":O=B.detailMessages.map(function(U){let J=U.muted?"MASKED":U.banned?"BLOCKED":"SHOWN",W=U.muted?"var(--hud-amber)":U.banned?"var(--hud-crimson)":"var(--hud-lime)",G=U.timestamp?new Date(U.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+I(G)+'</span><span class="m">'+I(U.text||"")+'</span><span class="s" style="color:'+W+'">'+J+"</span></div>"}).join(""),i.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+x(T.level)+'">'+I(T.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+k+'">'+I(R)+'</span><div><div class="nick">'+I(M)+'</div><div class="fp">'+I(K)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+T.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:T.rules.length})+"</div><ul>"+$+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+O+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+I(c)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+I(c)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(p.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+I(c)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+I(c)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+I(c)+'" data-aud-flagged="'+(p.is_flagged?"true":"false")+'">'+(p.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+I(c)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function u(i){B.selectedFp=i,B.detailMessages=[],f(),C(i).then(f)}async function d(){try{let i=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!i.ok)return;let c=await i.json();B.records=Array.isArray(c.entries)?c.entries:[],B.serverStats=c&&c.stats||null,D(),S(),E(),B.selectedFp&&f()}catch{}}async function t(i,c,p){if(i)try{let T=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i,flagged:!!c,note:p||""})});if(!T.ok)throw new Error("HTTP "+T.status);window.showToast&&window.showToast(c?ServerI18n.t("audienceToastFlagged",{fp:i.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:i.slice(0,8)}),!0),d()}catch(T){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:T.message||""}),!1)}}async function r(i,c){if(!i||i==="\u2014")return;let p=c??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:i.slice(0,8)}),"")||"");if(p!==null)try{let T=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i,reason:p})});if(!T.ok)throw new Error("HTTP "+T.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:i.slice(0,8)}),!0),d()}catch(T){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:T.message||""}),!1)}}async function n(i){if(!(!i||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+I(i.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let p=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i})});if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),d()}catch(p){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:p.message||""}),!1)}}async function o(i){if(!(!i||i==="\u2014"))try{let c=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:i,action:"mask",priority:0,enabled:!0})});if(!c.ok)throw new Error("HTTP "+c.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:i.slice(0,8)}),!0),d()}catch(c){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:c.message||""}),!1)}}async function s(i){if(!(!i||i==="\u2014"))try{let c=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!c.ok)throw new Error("HTTP "+c.status);let p=await c.json(),k=(Array.isArray(p.rules)?p.rules:[]).filter(function(M){return M&&M.type==="fingerprint"&&M.pattern===i});if(k.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let _=0;for(let M of k)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:M.rule_id||M.id})}).catch(function(){return{ok:!1}})).ok&&(_+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:_,fp:i.slice(0,8)}),!0),d()}catch(c){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:c.message||""}),!1)}}async function e(i){if(!(!i||i==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+I(i.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let p=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:i})});if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:i.slice(0,8)}),!0),d()}catch(p){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:p.message||""}),!1)}}function l(){let i=document.getElementById(y);i&&(i.addEventListener("input",function(c){let p=c.target.closest("[data-aud-search]");p&&(B.search=p.value||"",B.shown=v,E())}),i.addEventListener("change",function(c){let p=c.target.closest("[data-aud-sort]");p&&(B.sort=p.value,E())}),i.addEventListener("click",function(c){let p=c.target.closest("[data-aud-filter]");if(p){B.filter=p.dataset.audFilter,B.shown=v,S(),E();return}let T=c.target.closest("[data-aud-action='ban']");if(T){c.stopPropagation(),e(T.dataset.audFp);return}if(c.target.closest("[data-aud-action='refresh']")){d();return}if(c.target.closest("[data-aud-action='more']")){B.shown+=v,E();return}if(c.target.closest("[data-aud-action='close-detail']")){B.selectedFp=null,f();return}let R=c.target.closest("[data-aud-action='detail-ban']");if(R){e(R.dataset.audFp);return}let K=c.target.closest("[data-aud-action='detail-mask']");if(K){o(K.dataset.audFp);return}let $=c.target.closest("[data-aud-action='detail-safe']");if($){s($.dataset.audFp);return}let O=c.target.closest("[data-aud-action='flag']");if(O){c.stopPropagation(),t(O.dataset.audFp,O.dataset.audFlagged!=="true");return}let U=c.target.closest("[data-aud-action='kick']");if(U){c.stopPropagation(),r(U.dataset.audFp);return}let J=c.target.closest("[data-aud-action='unkick']");if(J){c.stopPropagation(),n(J.dataset.audFp);return}let W=c.target.closest("[data-aud-row]");if(!(W&&W.dataset.audFp===L)&&W&&!c.target.closest("button")){u(W.dataset.audFp);return}}))}function g(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(d(),B.refreshTimer||(B.refreshTimer=setInterval(d,15e3))):B.refreshTimer&&(clearInterval(B.refreshTimer),B.refreshTimer=0)}function a(){let i=document.getElementById("settings-grid");!i||document.getElementById(y)||(i.insertAdjacentHTML("beforeend",m()),l(),d(),g(),window.addEventListener("hashchange",g))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&a()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&a()})})()});var Nt=ye(()=>{(function(){"use strict";let y=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],I={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},h=2500,v=0,B=0,j=null;function F(){if(j)return j;let S=document.createElement("div");return S.className="admin-konami-hud",S.setAttribute("aria-hidden","true"),S.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(S),j=S,S}function x(){if(v===0){j&&j.classList.remove("is-on");return}let S=F();S.classList.add("is-on");let L=S.querySelector(".admin-konami-hud-keys");L&&(L.innerHTML=y.map((w,b)=>`<span class="admin-konami-hud-key ${b<v?"is-filled":""}">${I[w]}</span>`).join(""));let P=S.querySelector(".admin-konami-hud-progress");if(P){let w=Math.round(v/y.length*100);P.style.width=w+"%"}}function m(S){v=0,B&&(clearTimeout(B),B=0),S||x()}function N(){B&&clearTimeout(B),B=setTimeout(()=>m(),h)}async function D(){try{let S=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!S.ok)throw new Error("HTTP "+S.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(S){console.warn("[konami] trigger failed:",S&&S.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",S=>{let L=S.target;if(L&&(L.tagName==="INPUT"||L.tagName==="TEXTAREA"||L.isContentEditable))return;let P=y[v];if(!(S.key===P||P==="b"&&S.key.toLowerCase()==="b"||P==="a"&&S.key.toLowerCase()==="a")){v=S.key===y[0]?1:0,x(),v>0?N():B&&(clearTimeout(B),B=0);return}if(v++,x(),v>=y.length){m(!0),D();return}N()}),window.AdminKonami={trigger:D}})()});var Pt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function I(o){return o==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:o==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:o==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function h(){let o=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,s=o?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${o?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${y(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${s}`:""}
                <span id="fontsTotalSize" style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.12em">${ServerI18n.t("fontsTotalPlaceholder")}</span>
              </div>
            </div>
            <div id="adminFontEmptyStateHost"></div>
            ${o?`
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
    `}var v=null,B=[];function j(o,s){var e=document.getElementById("adminFontEmptyStateHost");if(!e)return;if((o||[]).some(a=>a.type==="uploaded")){e.innerHTML="";return}e.innerHTML="";var g=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:s?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var a=document.getElementById("adminFontFileInput");a&&a.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});g.dataset.emptyKind="fonts",e.appendChild(g)}function F(o,s){let e=o.weight||"\u2014",l=o.sizeLabel||"\u2014",g=o.foundry||(o.type==="system"?"System":o.type==="default"?"Google / Noto":"Uploaded"),a=o.format||"\u2014",i=o.status||o.type,c=`font-family: "${y(o.name)}", sans-serif;`,p=I(i),T=[];if(s){if(i!=="default"&&T.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${y(o.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),i!=="default"){let k=i==="enabled"||i==="system",_=k?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");T.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${y(o.name)}" data-enabled="${k?"true":"false"}">${_}</button>`)}o.type==="uploaded"&&(T.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${y(o.name)}" title="${y(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),T.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${y(o.name)}">${y(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${y(o.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${c}" class="truncate">${y(o.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(T.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${T.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${y(g)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${y(e)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${y(l)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${y(a)}</span><div style="text-align:right">${p}</div></div>`}let x=null,m={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function N(){if(x)return x;try{let o=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return o.ok?(x=(await o.json()).presets||{},x):{}}catch{return{}}}function D(o){return!o||!Number.isFinite(o)?"\u2014":o<1024?o+" B":o<1024*1024?(o/1024).toFixed(1)+" KB":(o/(1024*1024)).toFixed(2)+" MB"}async function S(o){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let s=await N();if(!Object.keys(s).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let e=new Set(["cjk_common","latin"]),l="",g=document.createElement("div");g.className="admin-font-subset-modal-body";let a=()=>{let p=Object.keys(s).map(k=>{let _=m[k]||{label:k,glyphs:"\u2014",estSize:"\u2014"},M=_.labelKey?ServerI18n.t(_.labelKey):_.label,R=e.has(k);return`
          <label class="admin-font-subset-chip${R?" is-active":""}" data-subset-preset="${k}">
            <span class="admin-font-subset-chip-check">${R?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${y(M)}</span>
            <span class="admin-font-subset-chip-range">${y(s[k])}</span>
            <span class="admin-font-subset-chip-meta">${_.glyphs} glyphs \xB7 ${_.estSize}</span>
          </label>`}).join("");g.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${y(o)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${p}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${y(l)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,g.querySelectorAll("[data-subset-preset]").forEach(k=>{k.addEventListener("click",_=>{_.preventDefault();let M=k.dataset.subsetPreset;e.has(M)?e.delete(M):e.add(M),a()})});let T=g.querySelector("[data-subset-custom]");T&&T.addEventListener("input",()=>{l=T.value})};if(a(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:g,width:540}))return;let c=[];if(e.forEach(p=>{s[p]&&c.push(s[p])}),l.trim()&&c.push(l.trim()),!c.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await L(o,c.join(","))}async function L(o,s){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:o}),!0);let e=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(o)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:s})}),l=await e.json().catch(()=>({}));if(e.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!e.ok){window.showToast?.(l.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:e.status}),!1);return}let g=l.saved_bytes||0,a=Math.round((l.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:o,before:D(l.original_size),after:D(l.new_size),pct:a}),!0),b()}catch(e){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:e.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function P(o){try{let s=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:o})});if(!s.ok)throw new Error("HTTP "+s.status);v=o,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:o}),!0),b()}catch(s){console.error("[admin-fonts] set default failed:",s),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function w(o,s){try{let e=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(o)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!s})});if(!e.ok)throw new Error("HTTP "+e.status);window.showToast(ServerI18n.t(s?"fontsToggleOffToast":"fontsToggleOnToast",{name:o}),!0),b()}catch(e){console.error("[admin-fonts] toggle failed:",e),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function b(){var o=document.getElementById("adminFontList");if(!o)return;let s=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var e=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!e.ok)throw new Error("HTTP "+e.status);var l=await e.json(),g=l.fonts||[];if(B=g,window.AdminTabs?.setTabCount?.("assets","fonts",g.length||""),j(g,s),g.length===0){o.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,f(g);return}o.innerHTML=g.map(a=>F(a,s)).join(""),f(g),u()}catch(a){console.error("[admin-fonts] fetch failed:",a),o.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,j([],s)}}async function E(o){try{let s=await o.slice(0,4).arrayBuffer(),e=new Uint8Array(s);return e[0]===0&&e[1]===1&&e[2]===0&&e[3]===0?"TTF":e[0]===79&&e[1]===84&&e[2]===84&&e[3]===79?"OTF":e[0]===119&&e[1]===79&&e[2]===70&&e[3]===50?"WOFF2":e[0]===116&&e[1]===114&&e[2]===117&&e[3]===101?"TTF":e[0]===116&&e[1]===116&&e[2]===99&&e[3]===102?"TTC":null}catch{return null}}function q(o,s){let e=document.getElementById("adminFontDropStatus");if(e){if(!o){e.textContent="",e.hidden=!0,e.classList.remove("is-good","is-bad");return}e.hidden=!1,e.textContent=o,e.classList.toggle("is-good",s==="good"),e.classList.toggle("is-bad",s==="bad")}}function A(o){let s=document.getElementById("adminFontUploadError");if(!s)return;if(!o){s.hidden=!0,s.innerHTML="";return}s.hidden=!1,s.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${y(o)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let e=s.querySelector("[data-font-error-retry]");e&&e.addEventListener("click",function(){let l=document.getElementById("adminFontFileInput");l&&l.click()})}async function C(o){if(!o)return;A("");let s=o.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(s)){window.showToast(ServerI18n.t("invalidFileType"),!1),q(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),A(ServerI18n.t("fontsExtNotSupportedFull"));return}if(o.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),q(ServerI18n.t("fontsFileTooLarge"),"bad"),A(ServerI18n.t("fontsFileTooLargeFull"));return}let e=await E(o);if(!e){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),q(ServerI18n.t("fontsMagicInvalid"),"bad"),A(ServerI18n.t("fontsMagicValidationFailed"));return}q(ServerI18n.t("fontsUploadValidated",{magic:e,size:(o.size/1024).toFixed(1)}),"good");try{var l=new FormData;l.append("fontfile",o);var g=await window.csrfFetch("/admin/upload_font",{method:"POST",body:l}),a=await g.json();g.ok?(window.showToast(a.message||ServerI18n.t("fontUploadFallback")),q(ServerI18n.t("fontsUploadedStatus",{filename:o.name}),"good"),A(""),await b()):(window.showToast(a.error||ServerI18n.t("uploadFailed"),!1),q(a.error||ServerI18n.t("uploadFailed"),"bad"),A(a.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(i){console.error("[admin-fonts] upload error:",i),window.showToast(ServerI18n.t("uploadNetworkError"),!1),q(ServerI18n.t("fontsNetworkErrorShort"),"bad"),A(ServerI18n.t("fontsNetworkDisconnected"))}}function f(o){let s=document.getElementById("fontsTotalSize");s&&(s.textContent=ServerI18n.t("fontsTotalCount",{n:o.length}))}function u(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(o=>{o.addEventListener("click",s=>{if(s.target.closest(".admin-font-delete-btn"))return;let e=o.dataset.font,l=document.getElementById("fontsPreviewFamily"),g=document.getElementById("fontsPreviewHeadline"),a=document.getElementById("fontsPreviewLatin"),i=document.getElementById("fontsPreviewCJK");l&&(l.textContent=e);let c=`"${e}", sans-serif`;g&&(g.style.fontFamily=c),a&&(a.style.fontFamily=c),i&&(i.style.fontFamily=c)})})}async function d(){var o=document.getElementById("adminFontFileInput");if(o){var s=o.files&&o.files[0];if(!s){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await C(s),o.value=""}}function t(){let o=document.getElementById("adminFontDrop"),s=document.getElementById("adminFontFileInput");!o||!s||(o.addEventListener("click",e=>{e.target!==s&&s.click()}),o.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),s.click())}),["dragenter","dragover"].forEach(e=>{o.addEventListener(e,l=>{l.preventDefault(),l.stopPropagation(),o.classList.add("is-drag")})}),["dragleave","drop"].forEach(e=>{o.addEventListener(e,l=>{l.preventDefault(),l.stopPropagation(),o.classList.remove("is-drag")})}),o.addEventListener("drop",async e=>{let l=e.dataTransfer&&e.dataTransfer.files;l&&l[0]&&await C(l[0])}))}async function r(o){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",o),confirmLabel:ServerI18n.t("deleteBtn")}))try{var e=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(o),{method:"DELETE"}),l=await e.json();e.ok?(window.showToast(l.message||ServerI18n.t("fontDeleteFallback")),await b()):window.showToast(l.error||ServerI18n.t("deleteFailed"),!1)}catch(g){console.error("[admin-fonts] delete error:",g),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function n(){var o=document.getElementById("settings-grid");if(o){o.insertAdjacentHTML("beforeend",h());var s=document.getElementById("adminFontFileInput");s&&s.addEventListener("change",d),t();var e=document.getElementById("adminFontList");e&&e.addEventListener("click",function(l){var g=l.target.closest(".admin-font-delete-btn");if(g){l.stopPropagation(),r(g.dataset.name);return}var a=l.target.closest(".admin-font-default-btn");if(a){l.stopPropagation(),P(a.dataset.name);return}var i=l.target.closest(".admin-font-toggle-btn");if(i){l.stopPropagation();let p=i.dataset.enabled==="true";w(i.dataset.name,p);return}var c=l.target.closest(".admin-font-subset-btn");c&&(l.stopPropagation(),S(c.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(l=>l.ok?l.json():null).then(l=>{l&&Array.isArray(l.FontFamily)&&(v=l.FontFamily[3]||null)}).catch(()=>{}).finally(b)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var o=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&n()});o.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&n()}})})()});var Rt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let I="sec-scheduler",h=5e3,v=null,B=null;function j(n,o,s,e){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${n}">
        <input type="text" placeholder="${m(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${m(o)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${m(s||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${e||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function F(n){var o=n==="active"?"is-success":n==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+o+'" title="'+m(n)+'"></span>'}function x(n){let o=n.state==="paused",s=n.repeat_count===void 0?"\u2014":n.repeat_count===-1?"\u221E":String(n.repeat_count),e=n.repeat_count>0&&typeof n.remaining=="number"?String(n.repeat_count-n.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${m(n.id)}">
        ${F(n.state)}
        <div>
          <div class="admin-scheduler-job-title">#${y(n.id)}</div>
          <div class="admin-scheduler-job-meta">${y(ServerI18n.t("schedulerMessages"))} ${n.messages?n.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${n.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${y(e)}</span>
        <span class="admin-scheduler-job-val">${y(s)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${o?"is-active":"is-warn"}"
            data-job-id="${m(n.id)}" data-action="${o?"resume":"pause"}">
            ${y(ServerI18n.t(o?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${m(n.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function m(n){return y(n)}function N(){let n=document.querySelectorAll("#schedulerMessages [data-msg-index]"),o=[];return n.forEach(function(s){let e=s.querySelector(".scheduler-msg-text").value.trim(),l=s.querySelector(".scheduler-msg-color").value,g=parseInt(s.querySelector(".scheduler-msg-size").value,10)||48;e&&o.push({text:e,color:l,size:g})}),o}function D(n,o,s){let e=document.getElementById("schedulerMessages");if(!e)return;let l=e.children.length;e.insertAdjacentHTML("beforeend",j(l,n||"",o||"#ffffff",s||48))}function S(n){let o=n.closest("[data-msg-index]");o&&o.remove();let s=document.getElementById("schedulerMessages");s&&s.querySelectorAll("[data-msg-index]").forEach(function(e,l){e.dataset.msgIndex=l})}async function L(){let n=N();if(n.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let o=parseInt(document.getElementById("schedulerInterval").value,10);if(!o||o<1||o>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let s=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(s)||s<-1||s>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let e=document.getElementById("schedulerCreateBtn");e&&(e.disabled=!0);try{let l=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:n,interval_sec:o,repeat_count:s})}),g=await l.json();l.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await f()):showToast(g.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(l){console.error("Scheduler create error:",l),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{e&&(e.disabled=!1)}}function P(n){return"msg"}function w(n){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[n]||"\u25C8"}function b(n){return n.next_run_at?new Date(n.next_run_at*1e3).getHours():new Date().getHours()}function E(n){if(n.next_run_at){let o=new Date(n.next_run_at*1e3);return String(o.getHours()).padStart(2,"0")+":"+String(o.getMinutes()).padStart(2,"0")}return"--:--"}function q(n){let o=n.id||"job",s=Array.isArray(n.messages)?n.messages.length:null;return"Job #"+o+(s!=null?" \xB7 "+s+" messages":"")}function A(n){let o=document.querySelector("[data-sch-timeline]");if(!o)return;let s=[],e=new Date().getHours();for(let g=0;g<24;g++){let a=g>=Math.max(0,e-1)&&g<=Math.min(23,e+2);s.push('<div class="admin-sch-timeline-hour'+(a?" is-peak":"")+'">'+String(g).padStart(2,"0")+"</div>")}let l=(n||[]).map(function(g){let a=P(g),i=w(a),c=g.state!=="paused";return'<div class="admin-sch-timeline-row'+(c?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+y(E(g))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+a+'">'+i+'</span><span class="admin-sch-evt-desc">'+y(q(g))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(c?" is-on":"")+'">'+ServerI18n.t(c?"uiOn":"uiOff")+"</span></div></div>"}).join("");o.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+s.join("")+"</div></div>"+(l||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+y(ServerI18n.t("noActiveJobs"))+"</div>"))}function C(n){let o=document.querySelector("[data-sch-calendar]");if(!o)return;let s=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],e=new Date,l=(e.getDay()+6)%7,g=new Date(e);g.setDate(e.getDate()-l);let a=s.map(function(c,p){let T=new Date(g);return T.setDate(g.getDate()+p),'<div class="admin-sch-calendar-day-head'+(p===l?" is-today":"")+'">'+y(c)+'<span class="date">'+T.getDate()+"</span></div>"}).join(""),i=[0,1,2,3,4,5,6].map(function(c){return'<div class="admin-sch-calendar-cell">'+(c===l?(n||[]).slice(0,5).map(function(T){let k=P(T),_=w(k);return'<span class="admin-sch-cal-chip is-'+k+'">'+y(E(T))+" "+_+"</span>"}).join(""):"")+"</div>"}).join("");o.innerHTML='<div class="admin-sch-calendar-head">'+a+'</div><div class="admin-sch-calendar-body">'+i+"</div>"}async function f(){let n=document.getElementById("schedulerJobsList"),o=document.getElementById("schedulerJobsCount");if(n)try{let s=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!s.ok){n.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",o&&(o.textContent="\u2014");return}let e=await s.json();if(!Array.isArray(e.jobs)){n.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",o&&(o.textContent="\u2014");return}o&&(o.textContent=ServerI18n.t("schItemCount",{n:e.jobs.length})),A(e.jobs),C(e.jobs);let l=document.querySelector("[data-sch-meta]");if(l){let g=new Date().toISOString().slice(0,10);l.textContent=ServerI18n.t("schTodayMeta",{date:g,n:e.jobs.length})}if(e.jobs.length===0){n.innerHTML="";let g=window.AdminEmpty.render("scheduler");g.dataset.emptyKind="scheduler",n.appendChild(g);return}n.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+y(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+y(ServerI18n.t("schColInterval"))+"</span><span>"+y(ServerI18n.t("schColSent"))+"</span><span>"+y(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+e.jobs.map(x).join("")}catch(s){console.error("Scheduler fetch error:",s),n.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadJobsError"))+"</div>"}}async function u(n,o){try{let s=await csrfFetch("/admin/scheduler/"+encodeURIComponent(o),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:n})}),e=await s.json();s.ok?(showToast(o==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await f()):showToast(e.error||ServerI18n.t("actionFailed"),!1)}catch(s){console.error("Scheduler toggle error:",s),showToast(ServerI18n.t("actionFailed"),!1)}}async function d(n){try{let o=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:n})}),s=await o.json();o.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await f()):showToast(s.error||ServerI18n.t("cancelFailed"),!1)}catch(o){console.error("Scheduler cancel error:",o),showToast(ServerI18n.t("cancelFailed"),!1)}}function t(){let n=document.getElementById("advanced-grid")||document.getElementById("settings-grid");if(!n)return;n.insertAdjacentHTML("beforeend",`
      <div id="${I}" class="admin-scheduler-page hud-page-stack lg:col-span-2">
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
    `);let o=document.querySelectorAll("[data-sch-view]");o.forEach(a=>{a.addEventListener("click",()=>{let i=a.dataset.schView;o.forEach(T=>{T.classList.toggle("is-active",T===a),T.setAttribute("aria-selected",T===a?"true":"false")});let c=document.querySelector("[data-sch-timeline]"),p=document.querySelector("[data-sch-calendar]");c&&(c.hidden=i!=="timeline"),p&&(p.hidden=i!=="calendar")})}),D("","#ffffff",48);let s=document.getElementById("schedulerMessages");s&&s.addEventListener("click",function(a){let i=a.target.closest(".scheduler-remove-msg");i&&S(i)});let e=document.getElementById("schedulerAddMsg");e&&e.addEventListener("click",function(){D("","#ffffff",48)});let l=document.getElementById("schedulerCreateBtn");l&&l.addEventListener("click",L);let g=document.getElementById("schedulerJobsList");g&&g.addEventListener("click",function(a){let i=a.target.closest(".scheduler-job-toggle");if(i){u(i.dataset.jobId,i.dataset.action);return}let c=a.target.closest(".scheduler-job-cancel");c&&d(c.dataset.jobId)}),v&&(clearInterval(v),v=null),B||(B=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(I)},intervalMs:h,tick:f}),window.addEventListener("beforeunload",function(){B&&(B(),B=null)}))}function r(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let n=!1;new MutationObserver(function(){if((document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(I)&&!n){n=!0;try{t()}finally{n=!1}}}).observe(document.body,{childList:!0,subtree:!0}),(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(I)&&t()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var Ot=ye(()=>{(function(){"use strict";let y="admin-security-v2-page";var I=window.AdminUtils.escapeHtml;let h=null,v=!1,B=!1,j=0;function F(){let a=i=>ServerI18n.t(i);return`
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
      </div>`}function x(a){if(!a)return 0;let i=0;a.length>=8&&i++,a.length>=12&&i++;let c=(/[a-z]/.test(a)?1:0)+(/[A-Z]/.test(a)?1:0)+(/\d/.test(a)?1:0)+(/[^\w]/.test(a)?1:0);return c>=2&&i++,c>=3&&i++,Math.min(4,i)}function m(a){let i=document.getElementById("sec2-pw-meter"),c=document.getElementById("sec2-pw-label");if(!i||!c)return;let p=x(a),T=[0,25,50,75,100],k=["","is-bad","is-warn","is-warn","is-good"],_=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];i.style.width=T[p]+"%",i.className=k[p],c.textContent=_[p]}async function N(a){a.preventDefault();let i=document.getElementById("sec2-pw-current").value,c=document.getElementById("sec2-pw-new").value,p=document.getElementById("sec2-pw-confirm").value;if(!i||!c||!p){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(c.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(c!==p){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let T=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:i,new_password:c,confirm_password:p})}),k=await T.json().catch(()=>({}));T.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),m(""),k.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(k.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(T){console.error("Password change error:",T),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function D(){let a=++j,i=document.getElementById("sec2-wsa-status");B=!0,S(!0),i.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let c=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!c.ok)throw new Error(c.status);let p=await c.json();if(a!==j)return!1;h={require_token:!!p.require_token,token:p.token||""},document.getElementById("sec2-wsa-toggle").checked=!!p.require_token,document.getElementById("sec2-wsa-token").value=p.token||"",i.textContent=p.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),i.className="admin-ui-chip admin-sec-status-chip "+(p.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,w();let T=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=T?new Date(parseInt(T,10)).toLocaleString():"\u2014",!0}catch{return a!==j||(h=null,S(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,i.textContent=ServerI18n.t("security2LoadFailed"),i.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{a===j&&(B=!1,S(v||!h),v||w())}}function S(a){["toggle","token","save","rotate","copy","reveal"].forEach(i=>{document.getElementById("sec2-wsa-"+i).disabled=a}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",a)}function L(){return v||B||!h?!1:(v=!0,++j,S(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function P(){if(v=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,S(B||!h),h&&!B){let a=document.getElementById("sec2-wsa-status");a.textContent=ServerI18n.t(h.require_token?"security2StatusEnabled":"security2StatusDisabled"),a.className="admin-ui-chip admin-sec-status-chip "+(h.require_token?"is-active":""),w()}}function w(){if(v||B||!h)return;document.getElementById("sec2-wsa-disabled-warning").hidden=h.require_token;let a=document.getElementById("sec2-wsa-toggle").checked!==h.require_token||document.getElementById("sec2-wsa-token").value.trim()!==h.token;document.getElementById("sec2-wsa-draft-hint").hidden=!a}function b(a){return String(a||"").split(/\n+/).map(i=>i.trim()).filter(Boolean)}function E(a){return String(a||"").split(",").map(i=>i.trim().toUpperCase()).filter(Boolean)}function q(a,i){let c=document.getElementById(a);c&&(c.textContent=i==null||i===""?"\u2014":String(i))}async function A(){try{let a=await fetch("/admin/security/settings",{credentials:"same-origin"}),i=await a.json().catch(()=>({}));if(!a.ok)throw new Error(i.error||a.status);let c=i.ip_allowlist||{},p=i.cors||{},T=i.tls||{},k=!!c.enabled,_=Array.isArray(c.entries)?c.entries:[],M=document.getElementById("sec2-ip-dot"),R=document.getElementById("sec2-ip-status-chip"),K=document.getElementById("sec2-ip-toggle"),$=document.getElementById("sec2-ip-entries");M&&(M.classList.toggle("is-lime",k),M.classList.toggle("is-amber",!k)),R&&(R.textContent=k?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),R.className="admin-ui-chip admin-sec-status-chip "+(k?"is-active":"is-warn")),K&&(K.checked=k),$&&($.value=_.join(`
`)),q("sec2-ip-current",c.current_ip||"\u2014"),q("sec2-ip-status-line",k?ServerI18n.t("security2IpStatusEnabled",{n:_.length}):ServerI18n.t("security2IpStatusDisabled"));let O=Array.isArray(p.origins)?p.origins:["*"],U=Array.isArray(p.methods)?p.methods:[],J=document.getElementById("sec2-cors-origins"),W=document.getElementById("sec2-cors-credentials"),G=document.getElementById("sec2-cors-methods"),te=document.getElementById("sec2-cors-cred-dot");J&&(J.value=O.join(`
`)),W&&(W.checked=!!p.supports_credentials),G&&(G.value=U.join(", ")),te&&(te.classList.toggle("is-lime",!p.supports_credentials),te.classList.toggle("is-amber",!!p.supports_credentials)),q("sec2-cors-origins-line",O.join(", ")),q("sec2-cors-credentials-line",p.supports_credentials?"true":"false"),q("sec2-cors-methods-line",U.join(", "));let ne=T.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:T.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");q("sec2-hsts-status",ne)}catch(a){console.error("Security settings load error:",a);let i=document.getElementById("sec2-ip-status-chip");i&&(i.textContent=ServerI18n.t("security2LoadFailed"),i.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function C(a){let i={};if(a==="ip")i.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:b(document.getElementById("sec2-ip-entries")?.value||"")};else if(a==="cors"){let c=b(document.getElementById("sec2-cors-origins")?.value||"");i.cors={origins:c.length?c:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:E(document.getElementById("sec2-cors-methods")?.value||"")}}try{let c=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),p=await c.json().catch(()=>({}));if(!c.ok){window.showToast&&showToast(p.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await A()}catch(c){console.error("Security settings save error:",c),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function f(){if(v||B||!h)return;let a=document.getElementById("sec2-wsa-toggle").checked,i=document.getElementById("sec2-wsa-token").value.trim();if(a&&!i){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(L())try{let c=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:a,token:i})}),p=await c.json().catch(()=>({}));c.ok?await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(p.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}async function u(){if(!(v||B||!h||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&L())try{let i=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),c=await i.json().catch(()=>({}));if(i.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(c.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}function d(){let a=document.getElementById("sec2-wsa-token").value;if(!a){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(a).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function t(){let a=document.getElementById("sec2-wsa-token");a.type=a.type==="password"?"text":"password";let i=a.type==="text",c=document.getElementById("sec2-wsa-reveal");c.setAttribute("aria-pressed",String(i)),c.textContent=ServerI18n.t(i?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),c.setAttribute("aria-label",c.textContent)}async function r(a){if(a==="reset-ws"&&(v||B||!h))return;let i={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:p=>ServerI18n.t("security2ToastApiTokensRevoked",{n:p.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[a];if(!(!i||!await window.HudConfirm?.open({icon:"\u26A0",title:i.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:i.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:i.severity||"warn",body:i.confirm,confirmLabel:i.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(a==="reset-ws"&&!L()))try{let p=await window.csrfFetch(i.url,{method:"POST"}),T=await p.json().catch(()=>({}));if(!p.ok){window.showToast&&showToast(T.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(a==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await D())return}window.showToast&&showToast(i.ok(T),!0)}catch(p){console.error("Security danger action error:",p),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{a==="reset-ws"&&P()}}function n(){let a=document.getElementById("sec2-session-self-line");if(a){let p=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),T=navigator.platform||navigator.userAgentData?.platform||"",k=p?p[0].split("/")[0]:"Browser";a.textContent=ServerI18n.t("security2SessionSelfLine",{browser:k,platform:T})}let i=document.getElementById("sec2-tls-dot"),c=document.getElementById("sec2-tls-status");if(i&&c){let p=location.protocol==="https:";i.classList.add(p?"is-lime":"is-crimson"),c.textContent=p?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function o(){let a=document.getElementById("sec2-pw-form");a&&a.addEventListener("submit",N);let i=document.getElementById("sec2-pw-new");i&&i.addEventListener("input",c=>m(c.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",f),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",u),document.getElementById("sec2-wsa-copy")?.addEventListener("click",d),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",t),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",w),document.getElementById("sec2-wsa-token")?.addEventListener("input",w),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>C("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>C("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(c=>{c.addEventListener("click",()=>{let p=document.querySelector(`[data-sec-disclosure="${c.dataset.secDisclose}"]`);p&&(p.hidden=!p.hidden,c.setAttribute("aria-expanded",p.hidden?"false":"true"),p.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(c=>{c.dataset.secBound!=="1"&&(c.dataset.secBound="1",c.addEventListener("click",()=>r(c.dataset.secDanger)))}),n(),D(),A()}function s(){}function e(){let a=document.querySelector(".admin-dash-grid"),i=document.getElementById(y);if(!a||!i)return;let c=a.dataset.activeRoute||"live",p=a.dataset.activeLeaf||c;i.style.display=c==="security"||c==="system"&&p==="security"?"":"none"}function l(){let a=document.getElementById("settings-grid");!a||document.getElementById(y)||(a.insertAdjacentHTML("beforeend",F()),o(),e())}function g(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let a=null;function i(){let p=document.querySelector(".admin-dash-grid");!p||a||(a=new MutationObserver(e),a.observe(p,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?l():void 0,i(),e()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",e),document.addEventListener("admin-panel-rendered",()=>{l(),i(),e()}),i(),l()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g()})()});var qt=ye(()=>{(function(){"use strict";let y="admin-backup-v2-page";var I=window.AdminUtils.escapeHtml;function h(){let n=o=>ServerI18n.t(o);return`
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
      </div>`}async function v(){try{let n=await fetch("/get_settings",{credentials:"same-origin"});if(!n.ok)throw new Error(n.status);let o=await n.json(),s=["password","token","secret","hash"],e={};Object.keys(o||{}).forEach(c=>{s.some(p=>c.toLowerCase().includes(p))||(e[c]=o[c])});let l=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:e},null,2)],{type:"application/json"}),g=URL.createObjectURL(l),a=new Date().toISOString().replace(/[:.]/g,"-"),i=document.createElement("a");i.href=g,i.download="danmu-settings-"+a+".json",document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(g),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(n){console.error("Settings snapshot error:",n),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let B=null;function j(){B=null;let n=document.getElementById("bk2-settings-apply");n&&(n.disabled=!0,n.title=ServerI18n.t("backupApplyDisabledTitle"))}async function F(){let n=document.getElementById("bk2-settings-upload"),o=document.getElementById("bk2-settings-diff"),s=document.getElementById("bk2-settings-apply"),e=n&&n.files&&n.files[0];if(!e){j(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let l=await e.text(),g=JSON.parse(l),a=g.settings||g;if(!a||typeof a!="object"||Array.isArray(a))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let i=await fetch("/get_settings",{credentials:"same-origin"}),c=i.ok?await i.json():{},p=[];new Set([...Object.keys(c),...Object.keys(a)]).forEach(k=>{let _=JSON.stringify(c[k]),M=JSON.stringify(a[k]);_!==M&&(_===void 0?p.push("+ "+k+": "+M):M===void 0?p.push("- "+k+": "+_):p.push("~ "+k+": "+_+" \u2192 "+M))}),o.textContent=p.length?p.join(`
`):ServerI18n.t("backupNoDiff"),o.hidden=!1,B=a,s&&(s.disabled=!1,s.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:p.length}),!0)}catch(l){console.error("Dry-run error:",l),j(),o.textContent=ServerI18n.t("backupParseFailedDetail",{msg:l&&l.message?l.message:String(l)}),o.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function x(){let n=document.getElementById("bk2-settings-diff"),o=document.getElementById("bk2-settings-apply");if(!B){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"danger",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let e=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:B})}),l=await e.json().catch(()=>({}));if(!e.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(l.details||l,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(l.applied||[]).length+" settings"),B=null,o&&(o.disabled=!0,o.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(e){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:e&&e.message?e.message:String(e)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function m(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function N(){let n=document.getElementById("bk2-factory-confirm"),o=document.getElementById("bk2-factory-reset");!n||!o||(n.addEventListener("input",()=>{let s=n.value.trim()==="reset";o.classList.toggle("is-ready",s),o.disabled=!s}),o.addEventListener("click",D))}async function D(){let n=document.getElementById("bk2-factory-confirm"),o=document.getElementById("bk2-factory-reset");if((n?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{o&&(o.disabled=!0);let e=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),l=await e.json().catch(()=>({}));if(!e.ok||!l.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),o&&(o.disabled=!1);return}n&&(n.value=""),o&&(o.classList.remove("is-ready"),o.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),w()}catch{o&&(o.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function S(){document.getElementById("bk2-settings-download")?.addEventListener("click",v),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",F),document.getElementById("bk2-settings-apply")?.addEventListener("click",x),document.getElementById("bk2-clear-history")?.addEventListener("click",m),document.getElementById("bk2-pack-export")?.addEventListener("click",b),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",A),document.getElementById("bk2-pack-apply")?.addEventListener("click",C),document.getElementById("bk2-assets-export")?.addEventListener("click",q),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",f),document.getElementById("bk2-assets-apply")?.addEventListener("click",u),N(),w(),E()}let L=null,P=null;async function w(){let n=document.getElementById("bk2-pack-summary");if(n)try{let o=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!o.ok){n.textContent=ServerI18n.t("backupPreviewUnavailable");return}let s=await o.json(),e=(s.total_bytes/(1024*1024)).toFixed(2);n.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:s.file_count||0,mb:e})}catch{n.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function b(){window.location.href="/admin/backup/export",window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function E(){let n=document.getElementById("bk2-assets-summary");if(n)try{let o=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!o.ok){n.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let s=await o.json(),e=(s.total_bytes/(1024*1024)).toFixed(2);n.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:s.file_count||0,mb:e})}catch{n.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function q(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}async function A(){let o=document.getElementById("bk2-pack-upload")?.files?.[0];if(!o){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(o.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let s=new FormData;s.append("file",o);let e=document.getElementById("bk2-pack-diff"),l=document.getElementById("bk2-pack-apply");try{let g=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:s}),a=await g.json().catch(()=>({}));if(!g.ok||!a.ok){e&&(e.hidden=!1,e.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(a.errors||a,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),l&&(l.disabled=!0),L=null;return}if(e){e.hidden=!1;let i=[],c=a.manifest||{};i.push("manifest version: "+(c.version||"?")),i.push("generated_at: "+(c.generated_at?new Date(c.generated_at*1e3).toISOString():"\u2014")),i.push(""),i.push("Will write "+(a.members?.length||0)+" files:"),(a.members||[]).forEach(p=>{i.push("  "+p.label+"/"+p.path.split("/").slice(1).join("/")+" ("+(p.size||0)+" B)")}),a.skipped?.length&&(i.push(""),i.push("Skipped "+a.skipped.length+" entries:"),a.skipped.forEach(p=>i.push("  "+p.path+" \u2014 "+p.reason))),e.textContent=i.join(`
`)}L=o,l&&(l.disabled=!1,l.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:a.members?.length||0}),!0)}catch(g){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:g.message||""}),!1)}}async function C(){if(!L){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let o=new FormData;o.append("file",L);try{let e=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:o})).json().catch(()=>({})),l=document.getElementById("bk2-pack-diff");if(l){l.hidden=!1;let g=[];e.ok?(g.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),g.push(""),g.push("Applied "+(e.applied||0)+" files"),e.skipped?.length&&g.push("Skipped "+e.skipped.length+" (see above)")):(g.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),g.push(JSON.stringify(e.errors||e,null,2))),l.textContent=g.join(`
`)}if(e.ok){window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint",{n:e.applied}),!0),L=null;let g=document.getElementById("bk2-pack-apply");g&&(g.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(s){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:s.message||""}),!1)}}async function f(){let o=document.getElementById("bk2-assets-upload")?.files?.[0];if(!o){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(o.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let s=new FormData;s.append("file",o);let e=document.getElementById("bk2-assets-diff"),l=document.getElementById("bk2-assets-apply");try{let g=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:s}),a=await g.json().catch(()=>({}));if(!g.ok||!a.ok){e&&(e.hidden=!1,e.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(a.errors||a,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),l&&(l.disabled=!0),P=null;return}if(e){e.hidden=!1;let i=[],c=a.manifest||{};i.push("manifest version: "+(c.version||"?")),i.push("generated_at: "+(c.generated_at?new Date(c.generated_at*1e3).toISOString():"\u2014")),i.push(""),i.push("Will write "+(a.members?.length||0)+" asset files:"),(a.members||[]).forEach(p=>{i.push("  "+p.path+" ("+(p.size||0)+" B)")}),a.skipped?.length&&(i.push(""),i.push("Skipped "+a.skipped.length+" entries:"),a.skipped.forEach(p=>i.push("  "+p.path+" \u2014 "+p.reason))),e.textContent=i.join(`
`)}P=o,l&&(l.disabled=!1,l.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:a.members?.length||0}),!0)}catch(g){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:g.message||""}),!1)}}async function u(){if(!P){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"danger",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let o=new FormData;o.append("file",P);try{let e=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:o})).json().catch(()=>({})),l=document.getElementById("bk2-assets-diff");if(l){l.hidden=!1;let g=[];e.ok?(g.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),g.push(""),g.push("Applied "+(e.applied||0)+" files"),e.skipped?.length&&g.push("Skipped "+e.skipped.length+" (see above)")):(g.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),g.push(JSON.stringify(e.errors||e,null,2))),l.textContent=g.join(`
`)}if(e.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:e.applied}),!0),P=null;let g=document.getElementById("bk2-assets-apply");g&&(g.disabled=!0),E()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(s){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:s.message||""}),!1)}}function d(){let n=document.querySelector(".admin-dash-grid"),o=document.getElementById(y);if(!n||!o)return;let s=n.dataset.activeLeaf||"dashboard";o.style.display=s==="backup"?"":"none"}function t(){let n=document.getElementById("settings-grid");!n||document.getElementById(y)||(n.insertAdjacentHTML("beforeend",h()),S(),d())}function r(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&t(),d()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",d),document.addEventListener("admin-panel-rendered",()=>{t(),d()}),t()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var Ht=ye(()=>{(function(){"use strict";let y="admin-broadcast-v2-page",I="/admin/broadcast/status",h="/admin/broadcast/toggle",v={mode:"live"},B=null,j=0,F=!1;async function x(){try{let s=await fetch(I,{credentials:"same-origin"});if(!s.ok)return!1;let e=await s.json();if(e&&(e.mode==="live"||e.mode==="standby"))return B=e.session||null,v=e,!0}catch{}return!1}async function m(){try{let s=await fetch("/overlay_status",{credentials:"same-origin"});s.ok&&(j=(await s.json()).overlay_count||0,F=!0)}catch{}}async function N(){await Promise.all([x(),m()]),D()}function D(){document.dispatchEvent(new CustomEvent("admin-overlay-state",{detail:{live:v.mode==="live",count:F?j:void 0}}))}async function S(s){try{let e=await window.csrfFetch(h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:s})});if(!e.ok){let l=await e.json().catch(()=>({}));throw new Error(l&&l.error?l.error:`HTTP ${e.status}`)}return v=await e.json(),D(),!0}catch(e){return console.warn("[admin-broadcast] toggle failed:",e),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:e&&e.message||""}),!1),!1}}function L(s,e){return ServerI18n.t(s?"uiDisplayOn":"uiDisplayOff")+" \xB7 "+ServerI18n.t("setupWizardReadyDisplayOk",{n:e})}function P(s){return s?"broadcastBigPause":"broadcastBigResume"}async function w(s){let e=await S(s?"live":"standby");return e&&window.showToast&&window.showToast(ServerI18n.t(s?"broadcastToastResumed":"broadcastToastPaused"),!0),f(),e}async function b(){return await x(),m().then(D),w(v.mode!=="live")}async function E(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"danger",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearScreenBtn")}))try{let e=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});e.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:e.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}window.AdminOverlayControl={setDisplay:w,toggleDisplay:b,clearScreen:E,statusText:L,toggleKey:P};function q(){let s=e=>ServerI18n.t(e);return`
      <div id="${y}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-bc-v4__body">
          <div class="admin-bc-v5__status-row" role="status" aria-live="polite">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>\u2014</span>
          </div>

          <!-- \u9019\u9801\u552F\u4E00\u7684\u4E3B\u52D5\u4F5C\u3002\u6E05\u7A7A\u756B\u9762\u4E0D\u53EF\u5FA9\u539F\uFF0C\u9694\u8457\u5206\u9694\u7DDA\u653E\u5728\u4E0B\u9762\u3002 -->
          <button type="button" class="admin-ui-action is-primary admin-bc-v4__big" data-bc-big
                  data-i18n="${P(!1)}">${s(P(!1))}</button>
          <div class="admin-bc-v4__secondary">
            <button type="button" class="admin-ui-action is-danger" data-bc-clear
                    data-i18n="broadcastClearScreenBtn">${s("broadcastClearScreenBtn")}</button>
          </div>

          <div class="admin-bc-v5__session-ctx" data-bc-session-ctx hidden>
            <div class="admin-bc-v5__session-row">
              <span class="admin-bc-v5__session-id" data-bc-session-id>\u2014</span>
              <span class="admin-bc-v5__spacer"></span>
              <a class="admin-bc-v5__session-link" href="#/sessions"
                 data-i18n="broadcastManageSessionsLink">${s("broadcastManageSessionsLink")}</a>
            </div>
          </div>
        </div>
      </div>`}let A=0,C=0;function f(){let s=document.getElementById(y);if(!s)return;let e=v.mode==="live",l=e?"live":"standby",g=(_,M)=>{_&&_.textContent!==M&&(_.textContent=M)};s.dataset.bcState=l;let a=s.querySelector("[data-bc-statedot]");a&&(a.dataset.state=l);let i=s.querySelector("[data-bc-statelabel]");i&&(g(i,L(e,j)),i.dataset.state=l);let c=s.querySelector("[data-bc-big]");c&&(c.dataset.i18n=P(e),g(c,ServerI18n.t(c.dataset.i18n)));let p=B||{},T=!!(p.id||p.name),k=s.querySelector("[data-bc-session-ctx]");k&&(k.hidden=!T),T&&g(s.querySelector("[data-bc-session-id]"),String(p.name||p.id))}function u(){let s=document.getElementById(y);s&&(s.querySelector("[data-bc-big]")?.addEventListener("click",()=>w(v.mode!=="live")),s.querySelector("[data-bc-clear]")?.addEventListener("click",E))}function d(){A||(N().then(f),f(),A=setInterval(()=>{N().then(f)},5e3),C=setInterval(f,1e3))}function t(){A&&(clearInterval(A),A=0),C&&(clearInterval(C),C=0)}function r(){let s=document.querySelector(".admin-dash-grid"),e=document.getElementById(y);if(!s||!e)return;let l=s.dataset.activeLeaf||"dashboard",g=l==="overlay"||l==="broadcast";e.style.display=g?"":"none",g?d():t()}function n(){let s=document.getElementById("settings-grid");!s||document.getElementById(y)||(s.insertAdjacentHTML("afterbegin",q()),u(),r())}function o(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&n(),r()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",r),document.addEventListener("admin-panel-rendered",()=>{n(),r()}),n()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var jt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,I=window.AdminUtils.saveDetailsState,h=window.AdminUtils.escapeHtml;let v=["keyword","regex","replace","rate_limit"],B=["block","replace","allow","review"],j={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"};function F($){var O=y();return O[$]!==void 0?O[$]:!1}function x($,O){if(typeof ServerI18n<"u"&&ServerI18n.t){let U=ServerI18n.t($);if(U&&U!==$)return U}return O||$}let m={keyword:"is-cyan",regex:"is-cyan",replace:"is-amber",rate_limit:"is-danger"},N={block:"var(--hud-crimson)",replace:"var(--hud-amber)",allow:"var(--hud-lime)",review:"var(--color-ink-accent)"};function D(){return`
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
            ${[{id:"url",label:ServerI18n.t("fltPresetUrl"),pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",label:ServerI18n.t("fltPresetAllcaps"),pattern:"^[A-Z\\W\\s]{8,}$",action:"review"},{id:"repeat",label:ServerI18n.t("fltPresetRepeat"),pattern:"(.)\\1{6,}",action:"review"},{id:"emojionly",label:"Emoji-only",pattern:"^[\\p{Emoji}\\s]+$",action:"block"}].map($=>`
              <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${$.id}" data-flt-pattern="${$.pattern}" data-flt-action="${$.action}" data-flt-label="${$.label}">
                <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
                <span class="admin-flt-v4__qchip-label">${$.label}</span>
                <span class="admin-flt-v4__qchip-hits" data-flt-quick-hits="${$.id}">\u2014</span>
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
                <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">${x("addFilterRule","Add Rule")}</span>

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
                  <input type="text" id="filterPattern" placeholder="${x("filterPatternPlaceholder","Enter pattern...")}"
                    class="admin-ui-input" />
                </div>
                <div id="filterReplacementRow" class="hidden">
                  <label for="filterReplacement" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("fltColReplacement")}</label>
                  <input type="text" id="filterReplacement" placeholder="${x("filterReplacementPlaceholder","Replacement text...")}"
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
                  + ${x("addRule","Add Rule")}
                </button>
              </div>
            </div>

            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">${x("testRule","Test Rule")}</span>
              </div>
              <div style="padding:14px;display:flex;flex-direction:column;gap:8px">
                <input id="filterTestText" type="text" placeholder="${x("sampleText","Sample text...")}"
                  class="admin-ui-input" />
                <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action" style="align-self:flex-start">${x("testBtn","Test")}</button>
                <div id="filterTestResult" style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);letter-spacing:0.02em"></div>
              </div>
            </div>
          </div>
        </div>
      </div>`}let S="all";function L($){let O=m[$.type]||"is-default",U=N[$.action]||"var(--color-text-muted)",J={keyword:"ulWord",regex:"ulRegex",replace:"ulReplace",rate_limit:"ulRate"},W=ServerI18n.t(J[$.type]||"ulWord"),G=$.pattern;if($.type==="replace"&&$.replacement!==void 0&&(G=`${$.pattern}  \u2192  ${$.replacement}`),$.type==="rate_limit"){let z=$.max_count||5,Q=$.window_sec||60;G=`${$.pattern}  \xB7  ${z}/${Q}s`}let te=$.enabled?"":"opacity:0.45;",ne=j[$.action]?ServerI18n.t(j[$.action]):$.action;return`
      <div class="hud-table-row hud-rule-row admin-flt-v4__grid" style="${te}" data-rule-id="${h($.id)}" data-rule-type="${h($.type)}">
        <span style="font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all">${h(G)}</span>
        <span class="hud-pill ${O}">${W}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;padding:2px 6px;border-radius:3px;background:${U};color:#000;font-weight:700;width:fit-content">${h(ne)}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">P${h(String($.priority))}</span>
        <label class="relative inline-block" style="width:32px;align-self:center" title="${h($.enabled?x("enabled","Enabled"):x("disabled","Disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${h($.id)}" ${$.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${$.enabled?"is-on":"is-off"}" style="cursor:pointer"></span>
        </label>
        <button class="filter-delete-btn" type="button" data-rule-id="${h($.id)}" title="${x("deleteRule","Delete")}" aria-label="${x("deleteRule","Delete")}">${window.AdminUtils.closeIcon}</button>
      </div>`}function P($){let O={all:$.length,keyword:0,regex:0,replace:0,rate_limit:0};$.forEach(J=>{O[J.type]!=null&&O[J.type]++}),Object.keys(O).forEach(J=>{let W=document.querySelector(`[data-filter-count="${J}"]`);W&&(W.textContent=O[J])});let U=document.querySelector('[data-mod-stat="rules"]');U&&(U.textContent=O.all)}async function w(){let $=document.querySelector('[data-mod-stat="blacklist"]');if($)try{let O=await fetch("/admin/blacklist/get",{credentials:"same-origin"});if(!O.ok)return;let U=await O.json(),J=Array.isArray(U)?U:U.keywords||[];$.textContent=String(J.length)}catch{}}async function b(){try{let $=await csrfFetch("/admin/filters/list");if(!$.ok)throw new Error("HTTP "+$.status);return(await $.json()).rules||[]}catch($){return console.error("Failed to fetch filter rules:",$),showToast(x("fetchFiltersFailed","Failed to load filter rules"),!1),[]}}async function E(){let $=document.getElementById("filterRulesList");if(!$)return;$.innerHTML=`<div style="padding:12px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${x("loading","Loading...")}</div>`;let O=await b();if(P(O),w(),O.length===0){if(window.AdminEmpty){let J=window.AdminEmpty.render("filters");J.setAttribute("data-empty-kind","filters"),$.innerHTML="",$.appendChild(J)}else $.innerHTML=`<div data-empty-kind="filters" style="padding:18px 14px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${x("noFilterRules","No filter rules configured.")}</div>`;return}let U=S==="all"?O:O.filter(J=>J.type===S);$.innerHTML=U.map(L).join("")}async function q(){let $=document.getElementById("filterType"),O=document.getElementById("filterAction"),U=document.getElementById("filterPattern"),J=document.getElementById("filterReplacement"),W=document.getElementById("filterPriority"),G=document.getElementById("filterMaxCount"),te=document.getElementById("filterWindowSec"),ne=$.value,z=(U.value||"").trim();if(!z){showToast(x("patternRequired","Pattern is required"),!1),U.focus();return}let Q={type:ne,pattern:z,action:O.value,priority:parseInt(W.value,10)||0};ne==="replace"&&(Q.replacement=J.value||""),ne==="rate_limit"&&(Q.max_count=parseInt(G.value,10)||5,Q.window_sec=parseFloat(te.value)||60);try{let Z=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Q)}),se=await Z.json();if(!Z.ok){showToast(se.error||x("addRuleFailed","Failed to add rule"),!1);return}showToast(x("ruleAdded","Rule added"),!0),U.value="",J.value="",await E()}catch(Z){console.error("Add filter rule error:",Z),showToast(x("addRuleFailed","Failed to add rule"),!1)}}async function A($){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("filtersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteFilterRule"),severity:"danger",body:x("confirmDeleteRule","Delete this filter rule?"),confirmLabel:ServerI18n.t("filtersDeleteConfirm")}))try{let U=await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:$})}),J=await U.json();if(!U.ok){showToast(J.error||x("deleteRuleFailed","Failed to delete rule"),!1);return}showToast(x("ruleDeleted","Rule deleted"),!0),await E()}catch(U){console.error("Delete filter rule error:",U),showToast(x("deleteRuleFailed","Failed to delete rule"),!1)}}async function C($,O){try{let U=await csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:$,updates:{enabled:O}})}),J=await U.json();if(!U.ok){showToast(J.error||x("updateRuleFailed","Failed to update rule"),!1),await E();return}}catch(U){console.error("Toggle filter rule error:",U),showToast(x("updateRuleFailed","Failed to update rule"),!1),await E()}}async function f(){let $=document.getElementById("filterTestText"),O=document.getElementById("filterTestResult"),U=document.getElementById("filterType"),J=document.getElementById("filterAction"),W=document.getElementById("filterPattern"),G=document.getElementById("filterReplacement"),te=document.getElementById("filterMaxCount"),ne=document.getElementById("filterWindowSec"),z=($.value||"").trim();if(!z){showToast(x("sampleTextRequired","Enter sample text to test"),!1),$.focus();return}let Q=(W.value||"").trim();if(!Q){showToast(x("patternRequired","Pattern is required"),!1),W.focus();return}let Z=U.value,se={type:Z,pattern:Q,action:J.value};Z==="replace"&&(se.replacement=G.value||""),Z==="rate_limit"&&(se.max_count=parseInt(te.value,10)||5,se.window_sec=parseFloat(ne.value)||60),O.innerHTML=`<span style="color:var(--color-text-muted)">${x("testing","Testing...")}</span>`;try{let ie=await csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:se,text:z})}),de=await ie.json();if(!ie.ok){O.innerHTML=`<span style="color: var(--color-ink-error)">${h(de.error||"Test failed")}</span>`;return}let ce="";de.action==="block"?ce=`<span style="color: var(--color-ink-error);font-weight:600">${x("blocked","BLOCKED")}</span>`:de.action==="replace"?ce=`<span style="color: var(--color-ink-warning);font-weight:600">${x("replaced","REPLACED")}</span> <span style="color:var(--color-text-secondary)">\u2192 ${h(de.text)}</span>`:de.action==="allow"?ce=`<span style="color: var(--color-ink-success);font-weight:600">${x("allowed","ALLOWED")}</span>`:de.action==="review"?ce=`<span style="color: var(--color-ink-accent);font-weight:600">${ServerI18n.t("fltActReview")}</span>`:ce=`<span style="color:var(--color-text-muted)">${x("noMatch","No match (pass)")}</span>`,de.reason&&(ce+=`<br/><span style="font-size:11px;color:var(--color-text-muted)">${h(de.reason)}</span>`),O.innerHTML=ce}catch(ie){console.error("Test filter rule error:",ie),O.innerHTML=`<span style="color: var(--color-ink-error)">${x("testError","Test error")}</span>`}}function u(){let $=document.getElementById("filterType"),O=document.getElementById("filterReplacementRow"),U=document.getElementById("filterRateLimitRow");if(!$)return;let J=$.value;O&&(O.style.display=J==="replace"?"":"none"),U&&(U.style.display=J==="rate_limit"?"grid":"none")}function d(){let $=document.getElementById("filterTypeChips");$&&$.addEventListener("click",O=>{let U=O.target.closest(".hud-filter-chip");U&&(S=U.dataset.filterScope||"all",$.querySelectorAll(".hud-filter-chip").forEach(J=>{J.classList.toggle("is-active",J.dataset.filterScope===S)}),E())})}let t=6,r=[],n=!1,o=0,s=0;function e($){let O=new Date($*1e3),U=J=>String(J).padStart(2,"0");return`${U(O.getHours())}:${U(O.getMinutes())}:${U(O.getSeconds())}`}function l($){let O=($||"").toUpperCase();return O==="BLOCK"?"var(--hud-crimson)":O==="MASK"||O==="REPLACE"?"var(--hud-amber)":O==="REVIEW"?"var(--color-primary)":O==="ALLOW"?"var(--hud-lime)":"var(--color-text-muted)"}function g(){let $=document.getElementById("filterLiveLog");if($){if(r.length===0){$.innerHTML=`<div style="color:var(--color-text-muted);text-align:center;padding:10px">${ServerI18n.t("fltNoEvents")}</div>`;return}$.innerHTML=r.map(O=>{let U=e(O.ts),J=(O.action||"").toUpperCase(),W=l(J),G=(O.text_excerpt||"").replace(/[<>&"]/g,Q=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[Q]),te=(O.pattern||"").replace(/[<>&"]/g,Q=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[Q]),ne=(O.source||"").slice(0,16),z=ne?`\xB7 ${ne}`:"";return`<div class="admin-filter-log-row" style="display:grid;grid-template-columns:64px 70px 1fr;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px dashed var(--hud-line)">
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${U}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${W}">${J}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\u300C${G}\u300D<span style="color:var(--color-text-muted)"> \u2014 \u898F\u5247 ${te} ${z}</span></span>
      </div>`}).join("")}}async function a(){try{let $=await fetch(`/admin/filters/events?since=${s}`,{credentials:"same-origin"});if(!$.ok)return;let O=await $.json();if(O.counts_24h){let U=(J,W)=>{let G=document.querySelector(`[data-mod-stat="${J}"]`);G&&(G.textContent=W!=null?String(W):"\u2014")};U("masked",O.counts_24h.MASK||0),U("blocked",O.counts_24h.BLOCK||0)}if(!Array.isArray(O.events)||O.events.length===0)return;for(r.unshift(...O.events);r.length>t;)r.pop();s=O.latest_seq||s,document.getElementById("filterLiveLog")&&g()}catch{}}function i(){n||(n=!0,a(),o=setInterval(a,4e3))}let c=Object.create(null),p="[QUICK]";function T($,O){return $.find(U=>(U.name||"").startsWith(p+" "+O))}async function k(){let $=await b().catch(()=>[]);document.querySelectorAll(".admin-flt-v4__qchip").forEach(O=>{let U=O.dataset.fltLabel,J=T($,U),W=!!J&&J.enabled!==!1;O.classList.toggle("is-active",W),J?c[O.dataset.fltQuickId]=J.id||J.rule_id:delete c[O.dataset.fltQuickId]})}async function _($){let O=$.dataset.fltQuickId,U=$.dataset.fltPattern,J=$.dataset.fltAction,W=$.dataset.fltLabel,G=c[O];if(G)(await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:G})})).ok?(delete c[O],$.classList.remove("is-active"),showToast(ServerI18n.t("filtersToastDisabled",{label:W}),!0)):showToast(ServerI18n.t("filtersToastDisableFailed"),!1);else{let te=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",name:`${p} ${W}`,pattern:U,action:J,enabled:!0,priority:50})});if(te.ok){let ne=await te.json().catch(()=>({}));ne.rule_id&&(c[O]=ne.rule_id),$.classList.add("is-active"),showToast(ServerI18n.t("filtersToastEnabled",{label:W}),!0)}else{let ne=await te.json().catch(()=>({}));showToast(ServerI18n.t("filtersToastEnableFailed",{msg:ne.error||""}),!1)}}typeof renderRules=="function"&&renderRules()}function M(){let $=document.querySelector("[data-flt-quick]");$&&($.addEventListener("click",O=>{let U=O.target.closest(".admin-flt-v4__qchip");U&&_(U)}),k())}function R(){let $=document.getElementById("settings-grid");if(!$)return;$.insertAdjacentHTML("beforeend",D()),d(),M();let O=document.getElementById("filterType");O&&O.addEventListener("change",u);let U=document.getElementById("filterAddBtn");U&&U.addEventListener("click",q);let J=document.getElementById("filterTestBtn");J&&J.addEventListener("click",f);let W=document.getElementById("filterTestText");W&&W.addEventListener("keydown",ne=>{ne.key==="Enter"&&(ne.preventDefault(),f())});let G=document.getElementById("filterPattern");G&&G.addEventListener("keydown",ne=>{ne.key==="Enter"&&(ne.preventDefault(),q())});let te=document.getElementById("filterRulesList");te&&(te.addEventListener("change",ne=>{let z=ne.target.closest(".filter-toggle-cb");if(!z)return;C(z.dataset.ruleId,z.checked);let Q=z.closest(".hud-rule-row"),Z=Q?.querySelector(".admin-filter-toggle-dot");Z&&(Z.classList.toggle("is-on",z.checked),Z.classList.toggle("is-off",!z.checked)),Q&&(Q.style.opacity=z.checked?"":"0.45")}),te.addEventListener("click",ne=>{let z=ne.target.closest(".filter-delete-btn");z&&A(z.dataset.ruleId)})),E(),i(),g()}function K(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&R()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&R()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",K):K()})()});var Ut=ye(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,I=window.AdminUtils.saveDetailsState,h=window.AdminUtils.escapeHtml,v=1e4,B=null;function j(b){var E=y();return E[b]!==void 0?E[b]:!1}function F(){return`
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
    `}function x(b){var E=ServerI18n.t("fingerprintState_"+b),q="";return b==="blocked"?q=" is-crimson":b==="flagged"?q=" is-amber":b==="active"?q=" is-cyan":q=" is-mute",'<span class="admin-fp-state'+q+'">'+h(E)+"</span>"}function m(b){if(!b)return"\u2014";try{var E=new Date(b*1e3);return E.toLocaleTimeString()}catch{return String(b)}}function N(b){var E=document.getElementById("adminFingerprintTableWrap");if(E){if(!b||b.length===0){E.innerHTML="";var q=window.AdminEmpty.render("audience");q.dataset.emptyKind="fingerprints",E.appendChild(q);return}var A='<div class="admin-fp-row admin-fp-row--head"><span>'+h(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+h(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+h(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+h(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+h(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+h(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+h(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+h(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",C=b.map(function(f){var u=f.blocked|0,d=f.hash||"",t=d.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+h(d)+'"><span class="admin-fp-hash admin-identity-fp" title="'+h(d)+'">fp:'+h(t)+'</span><span class="admin-fp-ip admin-identity-ip">'+h(f.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+h(f.ua||"")+'">'+h(f.ua||"\u2014")+'</span><span class="admin-fp-num">'+(f.msgs|0)+'</span><span class="admin-fp-num">'+(f.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(u>0?"is-crimson":"is-mute")+'">'+u+"</span><span>"+x(f.state||"active")+'</span><span class="admin-fp-ts">'+h(m(f.last_seen))+"</span></div>"}).join("");E.innerHTML=A+C}}async function D(){var b=document.getElementById("adminFingerprintCount");try{var E=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!E.ok)throw new Error("HTTP "+E.status);var q=await E.json(),A=q.records||[];if(N(A),b){var C=q.count||A.length,f=q.flagged!=null?q.flagged:A.filter(function(d){return d.state==="flagged"||d.state==="blocked"}).length;b.textContent=ServerI18n.t("fpCountSummary",{unique:C,flagged:f})}}catch(d){console.error("[admin-fingerprints] fetch failed:",d);var u=document.getElementById("adminFingerprintTableWrap");u&&(u.innerHTML='<span class="hud-pill is-danger">'+h(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function S(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var E=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(E.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await D();else{var q=await E.json().catch(function(){return{}});window.showToast(q.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(A){console.error("[admin-fingerprints] reset error:",A),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function L(){P(),B=setInterval(function(){var b=document.getElementById("sec-fingerprints");b&&b.offsetParent!==null&&D()},v)}function P(){B&&(clearInterval(B),B=null)}function w(){var b=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(b){b.insertAdjacentHTML("beforeend",F());var E=document.getElementById("adminFingerprintRefreshBtn");E&&E.addEventListener("click",D);var q=document.getElementById("adminFingerprintResetBtn");q&&q.addEventListener("click",S),D(),L()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var b=new MutationObserver(function(){var q=document.getElementById("moderation-grid")||document.getElementById("settings-grid");q&&!document.getElementById("sec-fingerprints")&&w()});b.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var E=document.getElementById("moderation-grid")||document.getElementById("settings-grid");E&&!document.getElementById("sec-fingerprints")&&w()}})})()});var Kt=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.escapeHtml;let I=(e,l)=>{let g=window.ServerI18n?.t?.(e);return g&&g!==e?g:l||e},h=!1;new MutationObserver(()=>{let e=document.getElementById("settings-grid");if(e&&!(document.getElementById("sec-widgets")||h)){h=!0;try{B(e)}finally{h=!1}}}).observe(document.body,{childList:!0,subtree:!0});function B(e){let l=document.createElement("div");l.id="sec-widgets",l.className="admin-widgets-page hud-page-stack lg:col-span-2";let g=location.origin+"/overlay";l.dataset.tpl="B",l.innerHTML=`
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${y(I("widgetsTitle"))}</h2>
          <p class="admin-ui-page-note">${y(I("widgetsDesc"))}</p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 W1\uFF1A\u4E3B\u8981\u52D5\u4F5C\u5728\u9801\u9996\u53F3\u5074\u3002\u9801\u9996\u5728\u6A19\u984C\u8207\u8DEF\u7531\u540C\u540D\u6642\u6703\u88AB
               \u4F75\u9032 topbar\uFF0Cshell \u7684 [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB
               \uFF08\u898B admin.js \u7684 _dedupSectionTitles\uFF09\u3002 -->
          <div class="admin-ui-page-actions admin-ow-addrow">
            <button id="widget-add" type="button" class="admin-ui-action is-primary">
              ${y(I("widgetsAddBtn"))}
            </button>
            <div class="admin-ow-addmenu" data-ow-addmenu hidden>
              <button type="button" data-ow-add="scoreboard">${y(I("widgetScoreboard"))}</button>
              <button type="button" data-ow-add="ticker">${y(I("widgetTicker"))}</button>
              <button type="button" data-ow-add="label">${y(I("widgetLabel"))}</button>
            </div>
          </div>
        </div>

        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:12px">
            <div id="widgets-list" class="admin-widgets-list"></div>
            <div class="admin-widgets-actions">
              <button id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action">
                ${y(I("clearAll"))}
              </button>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:12px;position:sticky;top:0">
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${y(I("widgetsPreviewLabel"))}</div>
              <div class="admin-ow-stage" data-ow-stage></div>
              <p class="admin-ow-card-note">${y(I("widgetsDragHint"))}</p>
            </div>
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${y(I("widgetsObsLabel"))}</div>
              <p class="admin-ow-card-note">
                ${y(I("widgetsObsNote"))}
              </p>
              <div class="admin-ow-urlrow">
                <code class="admin-ow-url" data-ow-obs-url>${y(g)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${y(I("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${y(I("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,e.appendChild(l);let a=document.getElementById("widget-add"),i=l.querySelector("[data-ow-addmenu]");a.addEventListener("click",c=>{c.stopPropagation(),i.hidden=!i.hidden}),i.addEventListener("click",c=>{let p=c.target.closest("[data-ow-add]")?.dataset.owAdd;p&&(i.hidden=!0,x(p))}),document.addEventListener("click",c=>{!i.hidden&&!c.target.closest(".admin-ui-page-actions")&&(i.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",S),l.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let c=l.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(c).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),F()}async function j(e,l="GET",g=null){let a={method:l,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(g){let c=document.querySelector('meta[name="csrf-token"]');c&&(a.headers["X-CSRF-Token"]=c.content),a.body=JSON.stringify(g)}return(await fetch("/admin/widgets/"+e,a)).json()}async function F(){try{let e=await j("list");P(e.widgets||[])}catch(e){console.error("[admin-widgets] Load failed:",e)}}async function x(e){let l={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await j("create","POST",{type:e,config:l[e]||{}}),F()}catch(g){console.error("[admin-widgets] Create failed:",g)}}async function m(e){let l=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:l,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await j("delete","POST",{id:e}),F()}catch(a){console.error("[admin-widgets] Delete failed:",a)}}async function N(e,l){try{await j("update","POST",{id:e,config:l}),F()}catch(g){console.error("[admin-widgets] Update failed:",g)}}async function D(e,l,g){try{await j("score","POST",{id:e,team_index:l,delta:g}),F()}catch(a){console.error("[admin-widgets] Score update failed:",a)}}async function S(){let e=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:e,confirmLabel:ServerI18n.t("clearAll")}))try{await j("clear","POST",{}),F()}catch(g){console.error("[admin-widgets] Clear failed:",g)}}let L=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function P(e){let l=document.getElementById("widgets-list");if(l){if(l.innerHTML="",d(e),e.length===0){let g=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});g.dataset.emptyKind="widgets",l.appendChild(g);return}e.forEach(g=>{l.appendChild(A(g))})}}let w={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function b(e){return I("widgetPos_"+String(e||"top-left").replace("-","_"),e||"")}function E(e){let l=e.config||{},g="";e.type==="scoreboard"?g=(l.teams||[]).map(i=>`${i.name} ${i.score}`).join(" \xB7 "):e.type==="ticker"?(g=(l.messages||[])[0]||"",g&&(g=`\u300C${g}\u300D`)):e.type==="label"&&(g=l.text?`\u300C${l.text}\u300D`:"");let a=b(e.position);return g?`${g} \xB7 ${a}`:a}function q(e){return e==="scoreboard"?I("widgetScoreboard"):e==="ticker"?I("widgetTicker"):e==="label"?I("widgetLabel"):e}function A(e){let l=document.createElement("div");l.className="admin-widget-card",e.visible!==!1&&l.classList.add("is-on");let g=document.createElement("button");g.type="button",g.className="admin-widget-summary",g.setAttribute("aria-expanded","false"),g.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+y(w[e.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+y(q(e.type))+'</span><span class="admin-widget-summary-text">'+y(E(e))+"</span>"+(e.visible===!1?'<span class="admin-widget-summary-off">'+y(I("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',l.appendChild(g);let a=document.createElement("div");a.className="admin-widget-card-body",a.hidden=!0,g.addEventListener("click",()=>{a.hidden=!a.hidden,g.setAttribute("aria-expanded",a.hidden?"false":"true"),l.classList.toggle("is-open",!a.hidden)});let i=s(I("widgetPosition"),L,e.position,k=>N(e.id,{position:k}));a.appendChild(i),e.type==="scoreboard"?t(a,e):e.type==="ticker"?r(a,e):e.type==="label"&&n(a,e);let c=document.createElement("div");c.className="admin-widget-card-actions";let p=document.createElement("button");p.type="button",p.className="admin-ui-action admin-widget-card-action",p.textContent=e.visible?I("widgetHide"):I("widgetShow"),p.addEventListener("click",()=>N(e.id,{visible:!e.visible})),c.appendChild(p);let T=document.createElement("button");return T.type="button",T.className="admin-ui-action is-danger admin-widget-card-action",T.textContent=I("remove"),T.addEventListener("click",()=>m(e.id)),c.appendChild(T),a.appendChild(c),l.appendChild(a),l}let C={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function f(e,l){let g="top-left",a=1/0;for(let[i,[c,p]]of Object.entries(C)){let T=e-c/2,k=l-p/2,_=T*T+k*k;_<a&&(a=_,g=i)}return g}function u(e){let l=e.config||{};return e.type==="scoreboard"?(l.teams||[]).map(g=>`${g.name} ${g.score}`).join("  ")||I("widgetScoreboard"):e.type==="ticker"?(l.messages||[])[0]||I("widgetTicker"):e.type==="label"?l.text||I("widgetLabel"):e.type}function d(e){let l=document.querySelector("[data-ow-stage]");if(l){if(l.innerHTML="",!e.length){l.innerHTML='<span class="admin-ow-stage-empty">'+y(I("widgetsStageEmpty"))+"</span>";return}e.forEach(g=>{let a=document.createElement("div");a.className="admin-ow-box is-"+(g.position||"top-left"),g.visible===!1&&a.classList.add("is-off"),a.dataset.owBox=g.id,a.draggable=!0,a.textContent=u(g),a.title=q(g.type),a.addEventListener("dragend",i=>{let c=l.getBoundingClientRect();if(!c.width||!c.height)return;let p=(i.clientX-c.left)/c.width,T=(i.clientY-c.top)/c.height;if(p<0||p>1||T<0||T>1)return;let k=f(p,T);k!==g.position&&N(g.id,{position:k})}),l.appendChild(a)})}}function t(e,l){let g=l.config||{},a=o(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",g.title||"",i=>N(l.id,{title:i}));e.appendChild(a),(g.teams||[]).forEach((i,c)=>{let p=document.createElement("div");p.className="admin-widget-team";let T=document.createElement("input");T.type="color",T.value=i.color||"#38bdf8",T.className="admin-widget-team-color",T.addEventListener("change",()=>{let K=[...g.teams];K[c]={...K[c],color:T.value},N(l.id,{teams:K})}),p.appendChild(T);let k=document.createElement("input");k.type="text",k.value=i.name,k.className="admin-widget-input",k.addEventListener("change",()=>{let K=[...g.teams];K[c]={...K[c],name:k.value},N(l.id,{teams:K})}),p.appendChild(k);let _=document.createElement("span");_.className="admin-widget-team-score",_.textContent=i.score,p.appendChild(_);let M=document.createElement("button");M.type="button",M.className="admin-widget-step",M.textContent="\u2212",M.addEventListener("click",()=>D(l.id,c,-1)),p.appendChild(M);let R=document.createElement("button");R.type="button",R.className="admin-widget-step",R.textContent="+",R.addEventListener("click",()=>D(l.id,c,1)),p.appendChild(R),e.appendChild(p)})}function r(e,l){let g=l.config||{},a=document.createElement("div");a.className="admin-widget-row";let i=document.createElement("span");i.className="lbl",i.textContent=window.ServerI18n?.t?.("speed")||"SPEED",a.appendChild(i);let c=document.createElement("input");c.type="range",c.min="10",c.max="200",c.value=g.speed||60,c.style.flex="1",c.addEventListener("change",()=>{N(l.id,{speed:parseInt(c.value)})}),a.appendChild(c);let p=document.createElement("span");p.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",p.textContent=c.value,c.addEventListener("input",()=>{p.textContent=c.value}),a.appendChild(p),e.appendChild(a);let T=document.createElement("div");T.className="admin-widget-row",T.style.alignItems="flex-start";let k=document.createElement("span");k.className="lbl",k.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",T.appendChild(k);let _=document.createElement("textarea");_.className="admin-widget-textarea",_.value=(g.messages||[]).join(`
`),_.rows=3,_.placeholder=ServerI18n.t("widgetTickerPlaceholder"),_.addEventListener("change",()=>{let M=_.value.split(`
`).filter(R=>R.trim());N(l.id,{messages:M})}),T.appendChild(_),e.appendChild(T)}function n(e,l){let g=l.config||{};e.appendChild(o(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",g.text||"",a=>N(l.id,{text:a}))),e.appendChild(o(window.ServerI18n?.t?.("size")||"SIZE",String(g.fontSize||24),a=>N(l.id,{fontSize:parseInt(a)||24}),"number"))}function o(e,l,g,a="text"){let i=document.createElement("div");i.className="admin-widget-row";let c=document.createElement("span");c.className="lbl",c.textContent=e,i.appendChild(c);let p=document.createElement("input");return p.type=a,p.value=l,p.className="admin-widget-input",p.addEventListener("change",()=>g(p.value)),i.appendChild(p),i}function s(e,l,g,a){let i=document.createElement("div");i.className="admin-widget-row";let c=document.createElement("span");c.className="lbl",c.textContent=e,i.appendChild(c);let p=document.createElement("select");return p.className="admin-widget-select",l.forEach(T=>{let k=document.createElement("option");k.value=T,k.textContent=T,T===g&&(k.selected=!0),p.appendChild(k)}),p.addEventListener("change",()=>a(p.value)),i.appendChild(p),i}})})()});var Wt=ye(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let y=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","backup","integrations","plugins","webhooks","api-tokens","security","notifications","audience","firetoken","overlay","about"];function I(){let $=window.ADMIN_ROUTES||{},O={};return y.forEach(U=>{let J=$[U];J&&J.title&&(O[U]={title:J.title,kicker:J.kicker||U.toUpperCase()})}),O}let h=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation",section:"sec-blacklist"},{labelKey:"cmdkSettingFilters",route:"moderation",section:"sec-filters"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"security",tab:"security",section:"admin-security-v2-page"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{label:"Webhooks",route:"webhooks",section:"sec-webhooks"},{label:"Scheduler",route:"scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],v=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function B(){let $=document.querySelector('meta[name="csrf-token"]');return $&&$.content||""}function j($,O){if(typeof window.csrfFetch=="function")return window.csrfFetch($,O);let U=Object.assign({credentials:"same-origin"},O||{}),J=new Headers(O&&O.headers||{});return J.set("X-CSRF-Token",B()),U.headers=J,fetch($,U)}function F($,O){typeof window.showToast=="function"&&window.showToast($,O!==!1)}let x=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>j("/effects/reload",{method:"POST"}).then($=>F($.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),$.ok)).catch(()=>F(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"broadcastBigPause",subKey:"adminNavOverlay",action:()=>window.AdminOverlayControl?.setDisplay(!1)},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>j("/admin/poll/reset",{method:"POST"}).then($=>F($.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),$.ok)).catch(()=>F(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return j("/admin/history/clear",{method:"POST"}).then(O=>F(O.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),O.ok)).catch(()=>F(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],m=null,N=null,D=null,S="",L=[],P=[],w=0,b=null,E=null,q=null,A=15e3;function C($){return String($??"").replace(/[&<>"']/g,O=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[O])}function f($,O){if(!O)return 0;let U=String($||"").toLowerCase(),J=O.toLowerCase(),W=0,G=0,te=0,ne=0;for(;W<U.length&&G<J.length;)U[W]===J[G]?(G++,ne++,te+=2+ne):ne=0,W++;return G<J.length?-1:(U.startsWith(J)&&(te+=10),te)}function u(){let $=document.createElement("div");$.className="admin-cmdk",$.setAttribute("hidden",""),$.setAttribute("aria-hidden","true"),$.innerHTML=`
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
    `,document.body.appendChild($),m=$,N=$.querySelector(".admin-cmdk-input"),D=$.querySelector(".admin-cmdk-list"),$.addEventListener("click",O=>{O.target.matches("[data-cmdk-close]")&&R()}),N.addEventListener("input",O=>{S=O.target.value,T()}),N.addEventListener("keydown",d),D.addEventListener("click",O=>{let U=O.target.closest("[data-cmdk-idx]");U&&(w=parseInt(U.dataset.cmdkIdx,10)||0,r())})}function d($){if($.key==="Escape"){$.preventDefault(),R();return}if($.key==="ArrowDown"){$.preventDefault(),t(1);return}if($.key==="ArrowUp"){$.preventDefault(),t(-1);return}if($.key==="Enter"){$.preventDefault(),r();return}}function t($){if(!L.length)return;w=(w+$+L.length)%L.length,_();let O=D.querySelector(`[data-cmdk-idx="${w}"]`);O&&O.scrollIntoView({block:"nearest"})}function r(){let $=L[w];if($){if($.type==="route")window.location.hash="#/"+$.route,R();else if($.type==="setting")$.tab&&(document.body.dataset.viewerConfigTab=$.tab),window.location.hash="#/"+$.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let O=document.getElementById($.section);O&&(O.scrollIntoView({behavior:"smooth",block:"start"}),O.tagName==="DETAILS"&&!O.open&&(O.open=!0))},80),R();else if($.type==="message")window.location.hash="#/messages",R();else if($.type==="user")window.location.hash="#/system",setTimeout(()=>{let O=document.getElementById("sec-fingerprints");O&&O.scrollIntoView({behavior:"smooth",block:"start"})},80),R();else if($.type==="theme")j("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:$.id})}).then(O=>{O.ok?(F(ServerI18n.t("cmdkThemeApplied",{name:$.label}),!0),q=null):F(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>F(ServerI18n.t("cmdkThemeApplyFailed"),!1)),R();else if($.type==="action"){try{let O=$.action&&$.action();O&&typeof O.then=="function"&&O.catch(()=>{})}catch{}R()}}}let n={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",history:"adminNavGroupSystem",backup:"adminNavGroupSystem",security:"adminNavGroupSystem",integrations:"adminNavGroupSystem"};function o($){return Object.entries(I()).map(([O,U])=>{let J=Math.max(f(U.title,$),f(O,$)),W=n[O];return{type:"route",route:O,label:U.title,sub:W?ServerI18n.t(W):"",icon:"\u25C7",score:J}}).filter(O=>O.score>=0)}function s($){let O=I()[$];return O?O.title:""}function e($){return h.map(O=>{let U=O.labelKey?ServerI18n.t(O.labelKey):O.label;return{type:"setting",route:O.route,tab:O.tab,section:O.section,label:s(O.route)?`${s(O.route)} \u203A ${U}`:U,sub:"",icon:"\u2699",score:f(U,$)}}).filter(O=>O.score>=0)}function l($){return b?(b.records||[]).map(U=>{let J=U.text||U.message||"",W=U.nickname||U.user||"guest",G=(U.timestamp||"").slice(11,19)||"\u2014",te=(U.fingerprint||U.fp||"").slice(0,8);return{type:"message",label:`${J}  \xB7  @${W}`,sub:te?`${G} \xB7 fp:${te}`:G,icon:"\u{1F4AC}",score:Math.max(f(J,$),f(W,$))}}).filter(U=>U.score>=0):[]}function g($){if(!q)return[];let O=q.records||[],U=q.active||"";return O.map(J=>{let W=J.label||J.display_name||J.name||"",G=J.description||ServerI18n.t("cmdkThemeDefaultDesc"),te=J.name===U;return{type:"theme",id:J.name,label:te?ServerI18n.t("cmdkThemeActive",{name:W}):W,sub:G,icon:"\u{1F3A8}",score:Math.max(f(W,$),f(J.name||"",$),f(G,$))}}).filter(J=>J.score>=0)}function a($){return x.map(O=>{let U=ServerI18n.t(O.labelKey),J=O.subKey?ServerI18n.t(O.subKey):O.sub;return{type:"action",id:O.id,label:U,sub:J,icon:"\u26A1",action:O.action,score:Math.max(f(U,$),f(O.id,$),f(J,$))}}).filter(O=>O.score>=0)}function i($){return E?(E.records||[]).map(U=>{let J=U.fingerprint||U.fp||U.id||"",W=U.ip||U.last_ip||"",G=U.nickname||"";return{type:"user",label:G?`@${G}  \xB7  ${J.slice(0,12)}\u2026`:`${J.slice(0,12)}\u2026`,sub:`user \xB7 ${W||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(f(J,$),f(W,$),f(G,$))}}).filter(U=>U.score>=0):[]}async function c(){let $=Date.now(),O=[];(!b||$-b.at>A)&&O.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{b={at:$,records:U&&U.records||[]}}).catch(()=>{b={at:$,records:[]}})),(!E||$-E.at>A)&&O.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{E={at:$,records:U&&U.records||[]}}).catch(()=>{E={at:$,records:[]}})),(!q||$-q.at>A)&&O.push(fetch("/admin/themes",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{q={at:$,records:U&&U.themes||[],active:U&&U.active||""}}).catch(()=>{q={at:$,records:[],active:""}})),O.length&&await Promise.all(O)}let p={actions:5,pages:5,messages:4};async function T(){await c();let $=S.trim(),O={action:a($),route:o($),setting:e($),theme:g($),message:l($),user:i($)};L=[],P=[],v.forEach(U=>{let J=U.types.reduce((W,G)=>W.concat(O[G]||[]),[]).sort((W,G)=>G.score-W.score).slice(0,p[U.id]||5);J.length&&(P.push({id:U.id,labelKey:U.labelKey,from:L.length,count:J.length}),L=L.concat(J))}),w=0,_()}function k($){return $.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[$.type]||"\xB7"}function _(){if(!L.length){D.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let $=[];P.forEach(O=>{$.push(`<li class="admin-cmdk-group" role="presentation">${C(ServerI18n.t(O.labelKey))}</li>`);for(let U=O.from;U<O.from+O.count;U++){let J=L[U],W=U===w;$.push(`
        <li class="admin-cmdk-row ${W?"is-active":""}"
            data-cmdk-idx="${U}" role="option" aria-selected="${W}">
          <span class="admin-cmdk-icon" aria-hidden="true">${C(k(J))}</span>
          <span class="admin-cmdk-label">${C(J.label)}</span>
          <span class="admin-cmdk-sub">${C(J.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${W?"\u21B5":""}</span>
        </li>`)}}),D.innerHTML=$.join("")}function M(){m||u(),m.removeAttribute("hidden"),m.setAttribute("aria-hidden","false"),m.classList.add("is-open"),S="",N.value="",T(),setTimeout(()=>N.focus(),20)}function R(){m&&(m.setAttribute("hidden",""),m.setAttribute("aria-hidden","true"),m.classList.remove("is-open"))}function K(){return!!(m&&!m.hasAttribute("hidden"))}window.AdminCommandPalette={open:M,close:R,isOpen:K,toggle:()=>K()?R():M()}})()});var Gt=ye(()=>{(function(){"use strict";let y="sec-sessions-overview";var I=window.AdminUtils&&window.AdminUtils.escapeHtml||function(u){return String(u).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},h={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function v(u){if(u=Number(u)||0,u<=0)return"\u2014";var d=Math.floor(u/3600),t=Math.floor(u%3600/60),r=u%60;return d>0?d+"h "+t+"m":t>0?t+"m":r+"s"}function B(u){if(!u)return"\u2014";try{var d=typeof u=="number"?new Date(u<1e12?u*1e3:u):new Date(u);return d.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(u)}}function j(){return'<div id="'+y+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function F(){return'<div class="admin-sessions-th"><span>'+I(ServerI18n.t("sessionsColSession"))+"</span><span>"+I(ServerI18n.t("sessionsColMessages"))+"</span><span>"+I(ServerI18n.t("sessionsColViewers"))+"</span><span>"+I(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function x(u){return u.name||ServerI18n.t("sessionsFallbackName",{id:(u.id||"").slice(0,12)})}function m(){var u=document.getElementById("admin-sessions-table-body");if(u){if(h.loading){window.AdminSkeletons?(u.innerHTML="",u.appendChild(window.AdminSkeletons.listRows({rows:5}))):u.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!h.sessions.length){u.innerHTML="";var d=window.AdminEmpty.render("sessions");d.dataset.emptyKind="sessions",u.appendChild(d);return}var t=h.sessions.map(function(r){var n=I(r.id||"");return'<div class="admin-sessions-tr'+(r.is_live?" is-live":"")+'" data-session-id="'+n+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(r.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+I(x(r))+'<span class="admin-sessions-td-sub">'+I(B(r.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(r.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(r.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+I(v(r.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+n+'">'+I(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");u.innerHTML=F()+t}}var N=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function D(){var u=document.querySelector("[data-sessions-export]");if(u){if(!h.exportId){u.hidden=!0,u.innerHTML="";return}var d=h.sessions.find(function(r){return r.id===h.exportId});if(!d){h.exportId=null,u.hidden=!0,u.innerHTML="";return}var t=N.map(function(r){return'<button type="button" class="admin-sx-export__seg'+(r.id===h.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+r.id+'" aria-pressed="'+(r.id===h.exportFormat?"true":"false")+'">'+I(ServerI18n.t(r.labelKey))+"</button>"}).join("");u.hidden=!1,u.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+I(ServerI18n.t("sessionsExportTitle",{name:x(d)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+I(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+t+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(h.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+I(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+I(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+I(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+I(ServerI18n.t("sessionsDownloadBtn",{fmt:h.exportFormat.toUpperCase()}))+"</button></div>"}}function S(){if(h.exportId){var u="/admin/sessions/"+encodeURIComponent(h.exportId)+"/export?format="+encodeURIComponent(h.exportFormat)+"&include_pii="+(h.exportPii?"1":"0"),d=document.createElement("a");d.href=u,d.rel="noopener",document.body.appendChild(d),d.click(),d.remove()}}async function L(){var u=h.exportId;if(u)try{var d=await fetch("/admin/sessions/"+encodeURIComponent(u)+"/export?format=json",{credentials:"same-origin"});if(!d.ok)throw new Error("HTTP "+d.status);var t=await d.json(),r=(t.records||[]).slice(0,500);if(!r.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var n=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:r,speedMultiplier:1})});if(n.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!n.ok)throw new Error("HTTP "+n.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function P(){m(),D()}async function w(){h.loading=!0,m();try{var[u,d]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),t=[],r=[];if(u.ok){var n=await u.json();t=Array.isArray(n.sessions)?n.sessions:[],t.forEach(function(i){i._explicit=!0})}if(d.ok){var o=await d.json();r=Array.isArray(o.sessions)?o.sessions:[]}var s=t.slice(),e=new Set(t.map(function(i){return i.id}));r.forEach(function(i){e.has(i.id)||s.push(i)}),s.sort(function(i,c){var p=typeof i.started_at=="number"?i.started_at:Date.parse(i.started_at||0),T=typeof c.started_at=="number"?c.started_at:Date.parse(c.started_at||0);return T-p});try{var l=await fetch("/admin/session/current",{credentials:"same-origin"});if(l.ok){var g=await l.json();if(g.status==="live"){var a=Object.assign({},g,{id:g.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});s.unshift(a)}}}catch{}h.sessions=s,h.total=s.length}catch(i){console.error("[admin-sessions] fetch error:",i),h.sessions=[],h.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:i.message||""}),!1)}finally{h.loading=!1,P()}}function b(u){u&&(window.location.hash="#/session-detail?id="+encodeURIComponent(u))}function E(u){h.exportId=u,D();var d=document.querySelector("[data-sessions-export]");d&&d.scrollIntoView({block:"nearest"})}function q(){var u=document.getElementById(y);u&&(u.addEventListener("click",function(d){var t=d.target.closest("[data-sessions-export-open]");if(t){d.stopPropagation(),E(t.dataset.sessionsExportOpen);return}if(d.target.closest("[data-sessions-export-close]")){h.exportId=null,D();return}var r=d.target.closest("[data-sessions-export-fmt]");if(r){h.exportFormat=r.dataset.sessionsExportFmt,D();return}if(d.target.closest("[data-sessions-replay]")){L();return}if(d.target.closest("[data-sessions-download]")){S();return}var n=d.target.closest(".admin-sessions-tr");n&&b(n.dataset.sessionId||null)}),u.addEventListener("change",function(d){var t=d.target.closest("[data-sessions-export-pii]");t&&(h.exportPii=!!t.checked)}),u.addEventListener("keydown",function(d){if(!(d.key!=="Enter"&&d.key!==" ")){var t=d.target.closest(".admin-sessions-tr");t&&(d.preventDefault(),b(t.dataset.sessionId||null))}}))}function A(){var u=document.querySelector(".admin-dash-grid"),d=document.getElementById(y);if(!(!u||!d)){var t=u.dataset.activeLeaf||"dashboard";d.style.display=t==="sessions"?"":"none"}}function C(){var u=document.getElementById("settings-grid");!u||document.getElementById(y)||(u.insertAdjacentHTML("beforeend",j()),q(),w(),A())}function f(){if(window.DANMU_CONFIG?.session?.logged_in){var u=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&C(),A()});u.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",A),document.addEventListener("admin-panel-rendered",function(){C(),A()}),C()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f()})()});var zt=ye(()=>{(function(){"use strict";let y="sec-session-detail-overview",I=window.AdminUtils&&window.AdminUtils.escapeHtml||function(k){return String(k).replace(/[&<>"']/g,function(_){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[_]})},h={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},v=!1,B={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function j(){let k=window.location.hash||"",_=k.indexOf("?");if(_===-1)return null;let M=k.slice(_+1);return new URLSearchParams(M).get("id")||null}function F(k){if(!k)return"\u2014";try{let _=new Date(k);if(isNaN(_.getTime()))return String(k);let M=R=>String(R).padStart(2,"0");return`${_.getFullYear()}-${M(_.getMonth()+1)}-${M(_.getDate())} ${M(_.getHours())}:${M(_.getMinutes())}:${M(_.getSeconds())}`}catch{return String(k)}}function x(k){if(!k||k<0)return"\u2014";let _=Math.round(Number(k)),M=Math.floor(_/3600),R=Math.floor(_%3600/60),K=_%60;return M>0?`${M}h ${R}m ${K}s`:R>0?`${R}m ${K}s`:`${K}s`}function m(k,_){if(!k||!_)return"";try{let M=Math.max(0,Math.round((new Date(k)-new Date(_))/1e3)),R=Math.floor(M/60),K=M%60;return`+${String(R).padStart(2,"0")}:${String(K).padStart(2,"0")}`}catch{return""}}function N(k){let _=Number(k);return isNaN(_)?"\u2014":_.toLocaleString()}function D(k){if(!k)return"#64748b";let _=0;for(let R=0;R<k.length;R++)_=_*31+k.charCodeAt(R)>>>0;return`hsl(${_%360}, 60%, 60%)`}function S(){return`
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
    `}async function L(k){if(!k){A(ServerI18n.t("sessionDetailErrMissingId"));return}q(!0);try{let _=await fetch(`/admin/sessions/${encodeURIComponent(k)}`,{credentials:"same-origin"});if(_.status===404&&(_=await fetch(`/admin/session/archive/${encodeURIComponent(k)}`,{credentials:"same-origin"})),!_.ok)throw new Error(`HTTP ${_.status}`);let M=await _.json();h.session=M.session||null,h.records=M.records||[],h.density=M.density||[],q(!1),C(),P()}catch(_){q(!1),A(ServerI18n.t("sessionDetailErrLoadFailed",{msg:_.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function P(){if(h.sessionId)try{let k=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(h.sessionId)}`,{credentials:"same-origin"});if(!k.ok)return;let _=await k.json();h.annotations=Array.isArray(_.annotations)?_.annotations:[],n()}catch{}}function w(){let k=h.session;if(!k)return 0;if(k.duration_s)return Math.round(k.duration_s*1e3);if(k.duration)return Math.round(k.duration*1e3);let _=k.started_at||k.start_time,M=k.ended_at||k.end_time;if(_&&M)try{return Math.max(0,new Date(M)-new Date(_))}catch{return 0}return h.density&&h.density.length?h.density.length*60*1e3:0}function b(k){let _=Date.parse(k||0);if(Number.isNaN(_))return"\u2014";let M=new Date(_),R=K=>String(K).padStart(2,"0");return`${R(M.getHours())}:${R(M.getMinutes())}:${R(M.getSeconds())}`}function E(k){let _=Math.floor(k/1e3),M=Math.floor(_/3600),R=Math.floor(_%3600/60),K=_%60,$=O=>String(O).padStart(2,"0");return M>0?`${$(M)}:${$(R)}:${$(K)}`:`${$(R)}:${$(K)}`}function q(k){h.loading=k;let _=document.querySelector("[data-sd-loading]"),M=document.querySelector("[data-sd-error]");_&&(_.hidden=!k),M&&k&&(M.hidden=!0);let R=document.querySelector("[data-sd-timeline-wrap]");if(R&&window.AdminSkeletons){let K=R.querySelector("[data-sd-timeline-skel]");k?(R.hidden=!1,K||(K=window.AdminSkeletons.chart(),K.setAttribute("data-sd-timeline-skel","1"),R.appendChild(K))):K&&K.remove()}}function A(k){h.error=k;let _=document.querySelector("[data-sd-error]"),M=document.querySelector("[data-sd-error-msg]");_&&(_.hidden=!1),M&&(M.textContent=k),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(R){let K=document.querySelector(`[${R}]`);K&&(K.hidden=!0)})}function C(){f(),u(),d(),r(),n();let k=document.querySelector("[data-sd-error]");k&&(k.hidden=!0)}function f(){let k=h.session,_=document.querySelector("[data-sd-session-header]");if(!_)return;_.hidden=!1;let M=document.querySelector("[data-sd-session-id]"),R=document.querySelector("[data-sd-meta-start]"),K=document.querySelector("[data-sd-meta-duration]"),$=document.querySelector("[data-sd-title]"),O=k&&(k.session_id||k.id)||h.sessionId||"\u2014";M&&(M.textContent=O),R&&(R.textContent=F(k&&(k.started_at||k.start_time))),K&&(K.textContent=x(k&&(k.duration_s||k.duration))),$&&($.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(O).slice(-8)}))}function u(){let k=h.session;if(!k)return;let _=document.querySelector("[data-sd-kpis]");_&&(_.hidden=!1);let M=function(O,U,J){let W=document.querySelector(`[data-sd-stat="${O}"]`);W&&(W.textContent=U);let G=document.querySelector(`[data-sd-stat-sub="${O}"]`);G&&(G.textContent=J||"")};M("msg_count",N(k.msg_count)),M("viewer_count",N(k.viewer_count));let R=Array.isArray(h.density)?h.density:[];if(R.length){let O=0,U=0;R.forEach(function(G,te){G>O&&(O=G,U=te)});let J=Date.parse(k.started_at||k.start_time||0),W="";if(!Number.isNaN(J)){let G=new Date(J+U*6e4),te=ne=>String(ne).padStart(2,"0");W=`${te(G.getHours())}:${te(G.getMinutes())}`}M("peak",N(O),W)}else M("peak","\u2014","");let K=Number(k.blocked_count)||0;M("blocked",N(K));let $=document.querySelector("[data-sd-blocked-btn]");$&&($.textContent=ServerI18n.t("sessionDetailStatBlocked")+(K?" "+K:""),$.disabled=K===0)}function d(){let k=document.querySelector("[data-sd-timeline-wrap]"),_=document.querySelector("[data-sd-timeline]"),M=document.querySelector("[data-sd-timeline-axis]"),R=document.querySelector("[data-sd-peak-label]");if(!k||!_||!M)return;let K=h.density;if(!K||K.length===0){k.hidden=!0;return}k.hidden=!1;let $=Math.max(1,...K),O=0;K.forEach(function(ne,z){ne>K[O]&&(O=z)});let U=K.map(function(ne,z){let Q=Math.max(2,Math.round(ne/$*100));return`<div class="admin-sd-bar${z===O?" is-peak":""}" style="height:${Q}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:ne,minute:z+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:ne})}"></div>`}).join("");_.innerHTML=U;let J=h.session,W=F(J&&(J.started_at||J.start_time)).slice(11,16)||"00:00",G=F(J&&(J.ended_at||J.end_time)).slice(11,16)||"",te=K.length>2?`+${Math.round(K.length/2)}min`:"";M.innerHTML=`
      <span class="admin-sd-axis-label">${I(W)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${I(te)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${I(G)}</span>
    `,R&&(R.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:K[O],minute:O}))}function t(){let k=(h.msgQuery||"").trim().toLowerCase();return h.records.filter(function(_){let M=(_.status||"shown")==="blocked";return h.msgFilter==="blocked"&&!M?!1:k?String(_.text||"").toLowerCase().indexOf(k)!==-1||String(_.nickname||"").toLowerCase().indexOf(k)!==-1:!0})}function r(){let k=document.querySelector("[data-sd-msgs-wrap]"),_=document.querySelector("[data-sd-msgs-list]");if(!k||!_)return;if(!h.records.length){k.hidden=!0;return}k.hidden=!1;let M=t().slice(0,300);if(!M.length){_.innerHTML='<div class="admin-sd-msgs-empty">'+I(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}_.innerHTML=M.map(function(R){let K=(R.status||"shown")==="blocked",$=D(R.fingerprint||R.fp||""),O=b(R.timestamp||R.created_at),U=String(R.nickname||"").trim();return`
        <div class="admin-sd-msg-row${K?" is-blocked":""}">
          <span class="admin-sd-msg-time">${I(O)}</span>
          <span class="admin-sd-msg-dot" style="background:${$}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${I(R.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${I(ServerI18n.t("deliveryStatus_"+(R.status||"shown")))}
            ${R.delivery_reason?`<span class="admin-sd-msg-rule">${I(ServerI18n.t("deliveryReason_"+R.delivery_reason))}</span>`:""}
            ${K&&R.blockedBy?`<span class="admin-sd-msg-rule">${I(ServerI18n.t("sessionDetailBlockedBy",{rule:R.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${I(U||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function n(){let k=h.annotations||[],_=w(),M=document.querySelector("[data-sd-ann-count]");M&&(M.textContent=k.length?`${k.length} ANNOTATIONS`:"");let R=document.querySelector("[data-sd-ann-head]");R&&(R.textContent=k.length?`ANNOTATIONS \xB7 ${k.length}`:"ANNOTATIONS");let K=document.querySelector("[data-sd-ann-layer]");K&&(!_||k.length===0?K.innerHTML="":K.innerHTML=k.map(function(U){let J=B[U.label]||B.note,W=Math.min(100,Math.max(0,U.ts_ms/_*100)),G=U.id===h.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${J.shape}${G?" is-active":""}"
              data-sd-ann-marker="${I(U.id)}"
              style="left:${W.toFixed(2)}%;--ann-color:${J.color}"
              title="${I(J.label)} \xB7 ${E(U.ts_ms)}"
              aria-label="${I(J.label)} at ${E(U.ts_ms)}: ${I(U.note||"")}">
              ${J.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${G?`<span class="admin-sd-ann-tip"><span style="color:${J.color}">${J.icon}</span> ${I((U.note||"").slice(0,40))}${(U.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let $=document.querySelector("[data-sd-ann-legend]");$&&($.innerHTML=Object.keys(B).map(function(U){let J=B[U],W=J.shape==="square"?"2px":J.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${J.color};border-radius:${W}"></span>
          <span class="admin-sd-ann-legend-label">${J.label}</span>
        </span>`}).join(""));let O=document.querySelector("[data-sd-ann-list]");if(O){if(k.length===0){O.innerHTML="";let U=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});U.dataset.emptyKind="session-annotations",O.appendChild(U);return}O.innerHTML=k.map(function(U){let J=B[U.label]||B.note,W=U.id===h.activeAnnId,te=(U.note||"").length>80?(U.note||"").slice(0,80)+"\u2026":U.note||"";return`
        <div class="admin-sd-ann-row${W?" is-active":""}" data-sd-ann-row="${I(U.id)}">
          <span class="admin-sd-ann-ts" style="color:${J.color}">${E(U.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${J.color}">${J.icon} ${J.label}</span>
          <span class="admin-sd-ann-note">${I(te)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${I(U.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function o(k){if(!h.sessionId)return;let _=window.HudConfirm;if(!_){let J=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:E(k)}),"");J!=null&&J.trim()&&s(k,"note",J.trim());return}let R="highlight",K="",$=document.createElement("div");$.className="admin-sd-ann-modal-body",$.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${E(k)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(B).map(function(J){let W=B[J];return`
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
      </div>`,$.addEventListener("click",function(J){let W=J.target.closest("[data-ann-label]");W&&(R=W.dataset.annLabel,$.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(G){G.classList.toggle("is-active",G===W)}))});let O=$.querySelector("[data-ann-modal-note]"),U=$.querySelector("[data-ann-modal-counter]");O.addEventListener("input",function(){K=O.value,U.textContent=`${K.length} / 280`}),setTimeout(function(){O&&O.focus()},50),_.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:$,width:460}).then(function(J){J&&s(k,R,O.value.trim())})}async function s(k,_,M){if(h.sessionId)try{let R=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:h.sessionId,ts_ms:Math.max(0,Math.round(k)),label:_||"note",note:M||""})});if(!R.ok)throw new Error(`HTTP ${R.status}`);let K=await R.json();K.annotation&&(h.annotations.push(K.annotation),h.annotations.sort(function($,O){return $.ts_ms-O.ts_ms}),h.activeAnnId=K.annotation.id,n(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(R){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:R.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function e(k){if(k)try{let _=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(k)}`,{method:"DELETE",credentials:"same-origin"});if(!_.ok)throw new Error(`HTTP ${_.status}`);h.annotations=h.annotations.filter(function(M){return M.id!==k}),h.activeAnnId===k&&(h.activeAnnId=null),n(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(_){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:_.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function l(k){let _=document.querySelector("[data-sd-timeline-inner]"),M=document.querySelector("[data-sd-ann-hover]");if(!_||!M)return;let R=_.getBoundingClientRect();if(!R.width)return;let K=k.clientX-R.left,$=Math.min(1,Math.max(0,K/R.width)),O=w();if(!O){M.hidden=!0;return}let U=Math.round($*O);h.hoverTsMs=U,M.hidden=!1,M.style.left=`${($*100).toFixed(2)}%`,M.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:E(U)})}function g(){let k=document.querySelector("[data-sd-ann-hover]");k&&(k.hidden=!0),h.hoverTsMs=null}function a(k){if(k.target.closest("[data-sd-ann-marker]"))return;let _=document.querySelector("[data-sd-timeline-inner]");if(!_)return;let M=_.getBoundingClientRect();if(!M.width)return;let R=k.clientX-M.left,K=Math.min(1,Math.max(0,R/M.width)),$=w();$&&o(Math.round(K*$))}async function i(){if(h.sessionId)try{let k=h.records.slice(0,500);if(!k.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let _=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:k,speedMultiplier:1})});if(_.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!_.ok)throw new Error("HTTP "+_.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function c(k,_){if(k==="back")window.location.hash="#/history/sessions";else if(k==="retry")h.sessionId&&L(h.sessionId);else if(k==="export"){if(!h.sessionId)return;let M=document.createElement("a");M.href="/admin/sessions/"+encodeURIComponent(h.sessionId)+"/export?format=csv",M.rel="noopener",document.body.appendChild(M),M.click(),M.remove()}else if(k==="replay")i();else if(k==="add-annotation"){let M=w(),R=h.hoverTsMs!=null?h.hoverTsMs:Math.round(M/2);o(R)}}function p(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let _=j();if(!_){h.sessionId=null,A(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}h.sessionId=_,L(_)}function T(){let k=document.getElementById("settings-grid");if(!k)return;let _=document.getElementById(y);_||(k.insertAdjacentHTML("beforeend",S()),_=document.getElementById(y),n()),_&&_.dataset.sdBound!=="1"&&(_.dataset.sdBound="1",_.addEventListener("click",function(M){let R=M.target.closest("[data-sd-ann-del]");if(R){M.stopPropagation(),e(R.dataset.sdAnnDel);return}let K=M.target.closest("[data-sd-ann-marker]");if(K){M.stopPropagation(),h.activeAnnId=K.dataset.sdAnnMarker,n();let W=document.querySelector(`[data-sd-ann-row="${h.activeAnnId}"]`);W&&W.scrollIntoView&&W.scrollIntoView({block:"nearest",behavior:"smooth"});return}let $=M.target.closest("[data-sd-ann-row]");if($){h.activeAnnId=$.dataset.sdAnnRow,n();return}if(M.target.closest("[data-sd-timeline-inner]")){a(M);return}let U=M.target.closest("[data-sd-action]");if(U){M.preventDefault(),c(U.dataset.sdAction,U);return}let J=M.target.closest("[data-sd-filter]");J&&(h.msgFilter=J.dataset.sdFilter,_.querySelectorAll("[data-sd-filter]").forEach(function(W){W.classList.toggle("is-active",W===J)}),r())}),_.addEventListener("input",function(M){let R=M.target.closest("[data-sd-search]");R&&(h.msgQuery=R.value||"",r())}),_.addEventListener("mousemove",function(M){M.target.closest("[data-sd-timeline-inner]")&&l(M)}),_.addEventListener("mouseleave",function(M){M.target.closest&&M.target.closest("[data-sd-timeline-inner]")&&g()},!0)),h.sessionId=j(),h.sessionId?L(h.sessionId):A(ServerI18n.t("sessionDetailErrNoSessionSelected")),v||(v=!0,window.addEventListener("hashchange",p))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&T()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let _=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(y)&&_.indexOf("/session-detail")!==-1&&T(),window.addEventListener("admin-route-changed",function(M){(M&&M.detail&&M.detail.route)==="session-detail"&&T()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&T()})})})()});var Vt=ye(()=>{(function(){"use strict";let y="sec-search-overview";var I=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},h=20,v={query:"",scope:"session",blockedOnly:!1,who:"",shown:h,results:[],total:0,loading:!1,searched:!1},B=0;function j(){return'<div id="'+y+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+I(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+I(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+I(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+I(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+I(ServerI18n.t("searchWhoAria"))+'"><option value="">'+I(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+I(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+I(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function F(t){if(!t)return 200;for(var r=0,n=0;n<Math.min(t.length,6);n++)r=r*31+t.charCodeAt(n)&65535;return r%360}function x(t,r){if(!r||!t)return I(t||"");var n=I(t),o=I(r);try{var s=new RegExp("("+o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return n.replace(s,'<mark class="admin-search-hit">$1</mark>')}catch{return n}}function m(t){if(!t)return"\u2014";try{var r=new Date(t);return r.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return t}}function N(){var t=v.results;return v.blockedOnly&&(t=t.filter(function(r){return(r.status||"shown")==="blocked"})),v.who&&(t=t.filter(function(r){return(r.nickname||"")===v.who})),t}function D(){var t=document.getElementById("admin-search-count");if(t){if(!v.searched||!v.query.trim()){t.textContent="";return}t.textContent=ServerI18n.t("searchResultCount",{n:N().length})}}function S(){var t=document.querySelector("[data-search-who]");if(t){var r=[];v.results.forEach(function(o){var s=(o.nickname||"").trim();s&&r.indexOf(s)===-1&&r.push(s)}),r.sort();var n=v.who;t.innerHTML='<option value="">'+I(ServerI18n.t("searchWhoAnyone"))+"</option>"+r.map(function(o){return'<option value="'+I(o)+'"'+(o===n?" selected":"")+">"+I(o)+"</option>"}).join("")}}function L(){var t=document.getElementById("admin-search-results"),r=document.getElementById("admin-search-empty-state"),n=document.getElementById("admin-search-export-btn");if(t){t.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(a){a.remove()});var o=function(a){r&&(r.style.display="block",r.textContent=a),n&&(n.hidden=!0)};if(v.loading)return o(ServerI18n.t("searchSearching"));if(!v.searched)return o(ServerI18n.t("searchPromptStart"));var s=N();if(s.length===0)return o(ServerI18n.t("searchNoMatch"));r&&(r.style.display="none"),n&&(n.hidden=!1);var e=Math.min(s.length,v.shown),l=document.createDocumentFragment();if(s.slice(0,e).forEach(function(a){var i=document.createElement("div");i.className="admin-search-row",i.innerHTML='<span class="admin-search-row__ts">'+I(m(a.timestamp))+'</span><span class="admin-search-row__text">'+x(a.text||"",v.query)+'</span><span class="admin-search-row__nick">'+I((a.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+I(ServerI18n.t("deliveryStatus_"+(a.status||"shown")))+(a.delivery_reason?"<br>"+I(ServerI18n.t("deliveryReason_"+a.delivery_reason)):"")+"</span></span>",l.appendChild(i)}),t.appendChild(l),s.length>e){var g=document.createElement("button");g.type="button",g.className="admin-search-more",g.dataset.searchMore="1",g.textContent=ServerI18n.t("searchMoreLeft",{n:s.length-e}),t.appendChild(g)}}}function P(){D(),S(),L()}async function w(){var t=v.query.trim();if(!t){v.loading=!1,v.searched=!1,v.results=[],v.total=0,P();return}v.loading=!0,P();try{var r="/admin/search?q="+encodeURIComponent(t);if(v.scope==="session"){var n=await E();n&&(r+="&since="+encodeURIComponent(n))}var o=Date.now(),s=await fetch(r,{credentials:"same-origin"}),e=Date.now()-o;if(!s.ok)throw new Error("HTTP "+s.status);var l=await s.json();v.results=Array.isArray(l.results)?l.results:[],v.total=typeof l.total=="number"?l.total:v.results.length,v.shown=h}catch(g){console.error("[admin-search] fetch error:",g),v.results=[],v.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:g.message||""}),!1)}finally{v.loading=!1,v.searched=!0,P()}}var b=null;async function E(){if(b!==null)return b;try{var t=await fetch("/admin/session/current",{credentials:"same-origin"});if(t.ok){var r=await t.json();if(r.status==="live"&&r.started_at)return b=new Date(r.started_at*1e3).toISOString(),b}}catch{}return b="",""}function q(){clearTimeout(B),B=setTimeout(w,300)}function A(){if(v.results.length){var t=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];v.results.forEach(function(s){var e=[s.nickname||"",s.fingerprint||"",s.timestamp||"",s.status||"",s.text||"",s.delivery_reason||""].map(function(l){return'"'+String(l).replace(/"/g,'""')+'"'});t.push(e.join(","))});var r=new Blob(["\uFEFF"+t.join(`
`)],{type:"text/csv;charset=utf-8"}),n=URL.createObjectURL(r),o=document.createElement("a");o.href=n,o.download="danmu-search-"+(v.query||"export")+".csv",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(n)}}function C(){var t=document.getElementById(y);if(t){var r=document.getElementById("admin-search-input");r&&(r.addEventListener("input",function(){v.query=r.value,q()}),r.addEventListener("keydown",function(o){o.key==="Enter"&&(clearTimeout(B),v.query=r.value,w())})),t.addEventListener("click",function(o){var s=o.target.closest("[data-search-scope]");if(s){v.scope=s.dataset.searchScope,t.querySelectorAll("[data-search-scope]").forEach(function(l){l.classList.toggle("is-active",l===s)}),v.query.trim()&&q();return}var e=o.target.closest("[data-search-blocked]");if(e){v.blockedOnly=!v.blockedOnly,e.classList.toggle("is-active",v.blockedOnly),v.shown=h,P();return}if(o.target.closest("[data-search-more]")){v.shown+=h,L();return}}),t.addEventListener("change",function(o){var s=o.target.closest("[data-search-who]");s&&(v.who=s.value||"",v.shown=h,P())});var n=document.getElementById("admin-search-export-btn");n&&n.addEventListener("click",A)}}function f(){var t=document.querySelector(".admin-dash-grid"),r=document.getElementById(y);if(!(!t||!r)){var n=t.dataset.activeLeaf||"dashboard";r.style.display=n==="search"?"":"none"}}function u(){var t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("beforeend",j()),C(),f())}function d(){if(window.DANMU_CONFIG?.session?.logged_in){var t=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&u(),f()});t.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",f),document.addEventListener("admin-panel-rendered",function(){u(),f()}),u()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var Jt=ye(()=>{(function(){"use strict";let y="sec-api-tokens-overview",I=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(i){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[i]})},h=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],v=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],B={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function j(a){if(!a)return"\u2014";try{let i=new Date(a);if(isNaN(i.getTime()))return String(a);let c=p=>String(p).padStart(2,"0");return`${i.getFullYear()}-${c(i.getMonth()+1)}-${c(i.getDate())}`}catch{return String(a)}}function F(a){if(!a)return null;try{let i=new Date(a);if(isNaN(i.getTime()))return null;let c=p=>String(p).padStart(2,"0");return`${i.getFullYear()}-${c(i.getMonth()+1)}-${c(i.getDate())} ${c(i.getHours())}:${c(i.getMinutes())}`}catch{return null}}function x(a){let i=Number(a);return isNaN(i)?"0":i.toLocaleString()}function m(a){if(!a||a.enabled===!1)return"inactive";if(!a.expires_at)return"active";try{let i=new Date(a.expires_at).getTime(),c=Date.now();if(i<c)return"expired";if(i-c<168*3600*1e3)return"expiring"}catch{}return"active"}function N(a){if(!a)return 1/0;try{return Math.floor((Date.now()-new Date(a).getTime())/864e5)}catch{return 1/0}}function D(a){return!a||!a.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':a.map(function(i){let c="admin-ui-pill admin-at-scope-badge";return i==="admin:*"?c+=" is-danger":i.startsWith("fire:")?c+=" is-warn":i.startsWith("read:stats")?c+=" is-cyan":c+=" is-success",`<span class="${c}">${I(i)}</span>`}).join(" ")}function S(a){let i="admin-ui-dot admin-at-dot";return a==="active"?i+=" is-success":a==="expiring"?i+=" is-warn":a==="expired"?i+=" is-danger":i+=" is-muted",`<span class="${i}" aria-hidden="true"></span>`}function L(){let a=h.map(function(c){let p=c.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",k=`admin-ui-pill admin-at-scope-badge is-${c.badge==="red"?"danger":c.badge==="amber"?"warn":c.badge==="green"?"success":c.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${c.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${c.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${I(c.id)}"
          >
          <span class="${k}">${I(c.badgeTxt)}</span>
          <span class="admin-at-scope-label">${I(ServerI18n.t(c.labelKey))}</span>
          ${p}
        </label>
      `}).join(""),i=v.map(function(c){let p=c.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${c.days!==null?String(c.days):"null"}" ${p} class="sr-only">
          <span>${I(ServerI18n.t(c.labelKey))}</span>
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
    `}async function P(){q(!0);try{let a=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!a.ok)throw new Error(`HTTP ${a.status}`);let i=await a.json();B.tokens=i.tokens||i||[],C()}catch(a){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:a.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{q(!1)}}async function w(a){B.creating=!0,A(!0),r();try{let i=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!i.ok){let T=await i.json().catch(()=>({}));throw new Error(T.error||T.message||`HTTP ${i.status}`)}let c=await i.json(),p=c.token||c.raw_token||c.access_token||null;B.newTokenRaw=p,f(p),d(),await P(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(i){t(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:i.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:i.message||""}),!1)}finally{B.creating=!1,A(!1)}}async function b(a,i){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${I(i||a)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let p=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(a)}`,{method:"DELETE"});if(!p.ok){let T=await p.json().catch(()=>({}));throw new Error(T.error||T.message||`HTTP ${p.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await P()}catch(p){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:p.message||""}),!1)}}async function E(a,i){try{let c=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(a)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:i})});if(!c.ok){let p=await c.json().catch(()=>({}));throw new Error(p.error||p.message||`HTTP ${c.status}`)}window.showToast&&window.showToast(i?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await P()}catch(c){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:c.message||""}),!1)}}function q(a){let i=document.querySelector("[data-at-list-loading]");i&&(i.hidden=!a)}function A(a){let i=document.getElementById("adminAtSubmitBtn");i&&(i.disabled=a,i.textContent=a?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function C(){let a=B.tokens,i=document.querySelector("[data-at-empty]"),c=document.querySelector("[data-at-table-wrap]"),p=document.querySelector("[data-at-tbody]");if(!(!i||!c||!p)){if(!a||a.length===0){if(!i.firstElementChild&&window.AdminEmpty){let T=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});T.dataset.emptyKind="api-tokens",i.appendChild(T)}i.hidden=!1,c.hidden=!0;return}i.hidden=!0,c.hidden=!1,p.innerHTML=a.map(function(T){let k=m(T),_=S(k),M=T.scopes||T.scope||[],R=Array.isArray(M)?M:String(M).split(",").map(W=>W.trim()).filter(Boolean),$=N(T.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",O=k==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",U=k==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",J=T.last_used_at?`${F(T.last_used_at)||j(T.last_used_at)}<br><span class="admin-at-ip">${I(T.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${I(T.id||T.token_id||"")}">
          <td class="admin-at-td-label">
            ${_}
            <span class="admin-at-label-text">${I(T.label||T.name||"\u2014")}</span>
            ${$}${O}${U}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${I(T.prefix||T.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${D(R)}</div>
          </td>
          <td class="admin-at-td-used">${J}</td>
          <td class="admin-at-td-usage">${x(T.usage_count||T.use_count)}</td>
          <td class="admin-at-td-created">${j(T.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${I(T.id||T.token_id||"")}"
              data-token-enabled="${T.enabled===!1?"0":"1"}"
              title="${T.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${T.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${I(T.id||T.token_id||"")}"
              data-token-label="${I(T.label||T.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function f(a){let i=document.getElementById("adminAtSuccessBanner"),c=document.getElementById("adminAtTokenDisplay"),p=document.getElementById("adminAtCreateForm");i&&(i.hidden=!1),c&&a&&(c.value=a),p&&(p.style.opacity="0.5"),i&&i.scrollIntoView({behavior:"smooth",block:"nearest"})}function u(){let a=document.getElementById("adminAtSuccessBanner"),i=document.getElementById("adminAtCreateForm");a&&(a.hidden=!0),i&&(i.style.opacity=""),B.newTokenRaw=null}function d(){let a=document.getElementById("adminAtCreateForm");a&&a.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(p){p.classList.remove("is-active")});let i=document.querySelector("input[name='adminAtExpiry'][value='90']");if(i){i.checked=!0;let p=i.closest(".admin-at-expiry-btn");p&&p.classList.add("is-active")}let c=document.getElementById("adminAtAdminWarn");c&&(c.hidden=!0),r()}function t(a){let i=document.getElementById("adminAtFormError");i&&(i.hidden=!1,i.textContent=a)}function r(){let a=document.getElementById("adminAtFormError");a&&(a.hidden=!0,a.textContent="")}function n(){let a=document.getElementById("adminAtLabel"),i=a?a.value.trim():"",c=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(_){c.push(_.value)});let p=document.querySelector("input[name='adminAtExpiry']:checked"),T=p?p.value:"90",k=T==="null"?null:parseInt(T,10);return{label:i,scopes:c,expiry_days:k}}function o(a){return a.label?a.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!a.scopes||a.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function s(a){if(a.preventDefault(),B.creating)return;r();let i=n(),c=o(i);if(c){t(c);return}w(i)}function e(){let a=B.newTokenRaw;if(!a)return;let i=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(a).then(function(){i&&(i.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){i.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let c=document.getElementById("adminAtTokenDisplay");c&&(c.select(),document.execCommand("copy")),i&&(i.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){i.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function l(){let a=document.getElementById(y);if(!a)return;a.addEventListener("click",function(T){let k=T.target.closest("[data-at-action]");if(k){let M=k.dataset.atAction;if(M==="revoke"){let R=k.dataset.tokenId,K=k.dataset.tokenLabel;b(R,K)}else if(M==="toggle"){let R=k.dataset.tokenId,K=k.dataset.tokenEnabled==="1";E(R,!K)}else M==="copy-token"&&e();return}let _=T.target.closest(".admin-at-expiry-btn");_&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(M){M.classList.remove("is-active")}),_.classList.add("is-active"))});let i=document.getElementById("adminAtScope_admin__");i&&i.addEventListener("change",function(){let T=document.getElementById("adminAtAdminWarn");T&&(T.hidden=!i.checked)});let c=document.getElementById("adminAtCreateForm");c&&c.addEventListener("submit",s);let p=document.querySelector("input[name='adminAtExpiry'][value='90']");if(p){let T=p.closest(".admin-at-expiry-btn");T&&T.classList.add("is-active")}}function g(){let a=document.getElementById("settings-grid");!a||document.getElementById(y)||(a.insertAdjacentHTML("beforeend",L()),l(),P())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&g()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&g()})})()});var Yt=ye(()=>{(function(){"use strict";let y="sec-wcag-overview",I=window.AdminUtils&&window.AdminUtils.escapeHtml||function(d){return String(d).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})};function h(d){let t=d.replace(/^#/,""),r=t.length===3?t.split("").map(function(n){return n+n}).join(""):t;return[parseInt(r.slice(0,2),16)/255,parseInt(r.slice(2,4),16)/255,parseInt(r.slice(4,6),16)/255]}function v(d){return d<=.04045?d/12.92:Math.pow((d+.055)/1.055,2.4)}function B(d){let t=h(d);return .2126*v(t[0])+.7152*v(t[1])+.0722*v(t[2])}function j(d,t){let r=B(d),n=B(t),o=Math.max(r,n),s=Math.min(r,n);return(o+.05)/(s+.05)}function F(d){return d>=7?"AAA":d>=4.5?"AA":d>=3?"AA-large":"fail"}function x(d,t){let r=B(t),n=[],o=h(d);for(let s=.05;s<=.6&&n.length<3;s+=.05){let l="#"+o.map(function(a){return Math.min(1,a+s)}).map(function(a){return Math.round(a*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),g=j(l,t);g>=4.5&&n.push({hex:l,ratio:g})}return n}let m=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],N={fg:"#FB7185",bg:"#000000"},D="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",S={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function L(){let d=m.filter(function(n){return F(j(n.fg,n.bg))!=="fail"}).length,t=m.length-d,r=Math.round(d/m.length*100);return`
      <div id="${y}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${P("PASS AA+",d,ServerI18n.t("wcagStatPassLabel"))}
              ${P("BELOW AA",t,ServerI18n.t("wcagStatFailLabel"))}
              ${P("PAIRS",m.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${P("PASS RATE",r+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:r})}">
                <div class="admin-wcag-meter-fill" style="width:${r}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${D}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${m.map(function(n,o){return w(n,o)}).join("")}
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
      </div>`}function P(d,t,r){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${I(String(t))}</span>
        <span class="hud-stat-tile-label">${I(r)}</span>
      </div>`}function w(d,t){let r=j(d.fg,d.bg),n=F(r),o=S[n],s=ServerI18n.t(d.nameKey),e=o.labelKey?ServerI18n.t(o.labelKey):o.label,l=n==="fail"?ServerI18n.t("wcagWarnFail"):n==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${D}"
        data-wcag-pair-idx="${t}" role="button" tabindex="0"
        aria-label="${I(ServerI18n.t("wcagPairAriaLabel",{name:s,ratio:r.toFixed(2),level:e.slice(2)}))}">
        <span class="admin-wcag-pair-name">${I(s)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${I(d.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${I(d.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${I(d.fg)}">${I(d.fg)} / ${I(d.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${r.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${o.mod}">${e}</span>
        ${l?`<span class="admin-wcag-warn">\u26A0 ${l}</span>`:""}
      </div>`}function b(){let d=j(N.fg,N.bg),t=F(d),r=S[t],n=r.labelKey?ServerI18n.t(r.labelKey):r.label,o=x(N.fg,N.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${E(ServerI18n.t("wcagForegroundLabel"),N.fg,"fg")}
        ${E(ServerI18n.t("wcagBackgroundLabel"),N.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${I(N.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${I(N.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${I(N.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${I(N.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${d.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${r.mod}">${n}</span>
      </div>

      <div class="admin-wcag-levels">
        ${q(ServerI18n.t("wcagCheckAANormal"),d>=4.5)}
        ${q(ServerI18n.t("wcagCheckAALarge"),d>=3)}
        ${q(ServerI18n.t("wcagCheckAAANormal"),d>=7)}
        ${q(ServerI18n.t("wcagCheckAAALarge"),d>=4.5)}
      </div>

      ${o.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${o.map(function(s){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${I(s.hex)}"
                title="${I(ServerI18n.t("wcagSuggApplyTitle",{ratio:s.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${I(N.bg)};color:${I(s.hex)}">${I(s.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${s.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function E(d,t,r){let n="wcag-tester-"+r;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${n}">${I(d)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${I(t)}"></span>
          <input type="text" id="${n}" class="admin-ui-input" data-wcag-tester-${r}
            aria-label="${I(ServerI18n.t("wcagHexAria",{label:d}))}"
            value="${I(t)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function q(d,t){return`<div class="admin-wcag-level ${t?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${t?"\u2713":"\u2717"}</span>
      <span>${I(d)}</span>
    </div>`}function A(){let d=document.getElementById(y);d&&(d.addEventListener("click",function(t){let r=t.target.closest("[data-wcag-pair-idx]");if(r){C(r);return}let n=t.target.closest("[data-wcag-sugg]");n&&(N.fg=n.dataset.wcagSugg,f())}),d.addEventListener("keydown",function(t){if(t.key!=="Enter"&&t.key!==" "&&t.key!=="Spacebar")return;let r=t.target.closest("[data-wcag-pair-idx]");r&&(t.preventDefault(),C(r))}),d.addEventListener("input",function(t){let r=t.target.closest("[data-wcag-tester-fg]"),n=t.target.closest("[data-wcag-tester-bg]");r&&/^#[0-9A-Fa-f]{6}$/.test(r.value)&&(N.fg=r.value.toUpperCase(),f()),n&&/^#[0-9A-Fa-f]{6}$/.test(n.value)&&(N.bg=n.value.toUpperCase(),f())}))}function C(d){let t=m[parseInt(d.dataset.wcagPairIdx,10)];t&&(N.fg=t.fg,N.bg=t.bg,f())}function f(){let d=document.querySelector("[data-wcag-tester]");d&&(d.innerHTML=b())}function u(){let d=document.getElementById("settings-grid");!d||document.getElementById(y)||(d.insertAdjacentHTML("beforeend",L()),A())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&u()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&u()})})()});var Qt=ye(()=>{(function(){"use strict";let y="danmu.onboarding.done",I="admin-onboarding-root",j=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],F=0,x=!1;window.AdminOnboarding={start:L,isDone:function(){try{return!!localStorage.getItem(y)}catch{return!1}},reset:function(){try{localStorage.removeItem(y)}catch{}}};let m=new Set(["live","dashboard"]);function N(){if(x||window.AdminOnboarding.isDone()||!m.has(D()))return;let d=()=>!!document.querySelector(".admin-session-banner-live");d()||setTimeout(()=>{x||window.AdminOnboarding.isDone()||d()||m.has(D())&&L()},1200)}function D(){let d=document.querySelector(".admin-dash-grid");return d&&d.dataset.activeRoute||"live"}function S(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&L()}function L(){x||(x=!0,F=0,q())}function P(d){if(!x)return;x=!1,document.body.removeEventListener("click",b),document.removeEventListener("keydown",E),window.removeEventListener("resize",A);let t=document.getElementById(I);if(t&&t.remove(),d)try{localStorage.setItem(y,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function w(){F<j.length-1?(F++,A()):P(!0)}function b(d){let t=d.target.closest("[data-ob-action]");t&&(d.stopPropagation(),t.dataset.obAction==="next"?w():t.dataset.obAction==="skip"&&P(!1))}function E(d){x&&d.key==="Escape"&&(d.preventDefault(),P(!1))}function q(){let d=document.getElementById(I);d&&d.remove();let t=document.createElement("div");t.id=I,t.className="admin-ob-root",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","false"),t.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(t),document.body.addEventListener("click",b),document.addEventListener("keydown",E),window.addEventListener("resize",A),A()}function A(){let d=document.getElementById(I);if(!d)return;let t=j[F],r=j.length,n=f(t.target),o=window.innerWidth,s=window.innerHeight,e="";n?e='<div class="admin-ob-spot" style="left:'+(n.left-8)+"px;top:"+(n.top-8)+"px;width:"+(n.width+16)+"px;height:"+(n.height+16)+'px;"></div>':e='<div class="admin-ob-scrim"></div>';let l=(o-360)/2,g=s/2-110,a="none";if(n){let T=n.left+n.width/2;t.side==="top"?(l=T-360/2,g=n.top-16,a="bottom"):t.side==="right"?(l=n.right+16+8,g=n.top,a="left"):(l=T-360/2,g=n.bottom+16+8,a="top"),l=Math.max(16,Math.min(o-360-16,l))}let i=j.map(function(T,k){return'<span class="admin-ob-progress-item'+(k===F?" is-current":"")+'">'+(k+1)+" "+u(ServerI18n.t(T.labelKey))+"</span>"+(k<r-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");d.innerHTML=e+'<div class="admin-ob-bubble" data-arrow="'+a+'" style="left:'+l+"px;top:"+g+'px"><div class="admin-ob-count">'+(F+1)+" / "+r+'</div><div class="admin-ob-title">'+u(ServerI18n.t(t.titleKey))+'</div><div class="admin-ob-body">'+u(ServerI18n.t(t.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+u(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+u(ServerI18n.t(F===r-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+i+"</div></div>";let c=d.querySelector(".admin-ob-bubble");if(!c||!n)return;let p=c.offsetHeight;if(t.side==="top")c.style.top=Math.max(16,n.top-16-8-p)+"px";else if(g+p>s-16){let T=n.top-16-8-p;T>=16?(c.style.top=T+"px",c.setAttribute("data-arrow","bottom")):(c.style.top=Math.max(16,s-p-16)+"px",c.setAttribute("data-arrow","none"))}C(c,n)}function C(d,t){let r=d.getAttribute("data-arrow");if(r==="none")return;let n=d.getBoundingClientRect(),o=r==="top"||r==="bottom",s=o?t.left+t.width/2-n.left:t.top+t.height/2-n.top,e=o?n.width:n.height,l=Math.max(16,Math.min(e-32,s-8));d.style.setProperty("--ob-arrow",l+"px")}function f(d){if(!d)return null;let t=document.querySelector(d);if(!t)return null;let r=t.getBoundingClientRect();return r.width<8||r.height<8||r.bottom<0||r.top>window.innerHeight?null:r}function u(d){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(d):d==null?"":String(d).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",S),S(),window.addEventListener("hashchange",function(){m.has(D())&&setTimeout(N,600)}),setTimeout(N,800))})})()});var sn=ye(()=>{var Mi=we(Re()),Ni=we(Oe()),Pi=we(qe()),Ri=we(He()),Oi=we(je()),qi=we(Ue()),Hi=we(Ke()),ji=we(We()),Ui=we(Ge()),Ki=we(ze()),Wi=we(Ve()),Gi=we(Je()),zi=we(Ye()),Vi=we(Qe()),Ji=we(Xe()),Yi=we(Ze()),Qi=we(et()),Xi=we(tt()),Zi=we(nt()),es=we(at()),ts=we(it()),ns=we(st()),as=we(ot()),is=we(rt()),ss=we(dt()),os=we(lt()),rs=we(ct()),ds=we(ut()),ls=we(mt()),cs=we(pt()),us=we(vt()),ms=we(ft()),ps=we(ht()),vs=we(gt()),fs=we(yt()),hs=we(bt()),gs=we(wt()),ys=we(St()),bs=we(kt()),ws=we(It()),Ss=we(Tt()),ks=we(_t()),Is=we(Et()),Ts=we($t()),_s=we(xt()),Es=we(Lt()),$s=we(At()),xs=we(Ct()),Ls=we(Bt()),As=we(Ft()),Cs=we(Dt()),Bs=we(Mt()),Fs=we(Nt()),Ds=we(Pt()),Ms=we(Rt()),Ns=we(Ot()),Ps=we(qt()),Rs=we(Ht()),Os=we(jt()),qs=we(Ut()),Hs=we(Kt()),js=we(Wt()),Us=we(Gt()),Ks=we(zt()),Ws=we(Vt()),Gs=we(Jt()),zs=we(Yt()),Vs=we(Qt())});sn();})();
