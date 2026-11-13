/**
 * Admin · 顯示層頁 (#/overlay) 的上半部：暫停／繼續顯示、清空畫面、所屬場次。
 *
 * 模組檔名沿用 `admin-broadcast.js`（歷史名稱）；舊的 `#/broadcast` 書籤由
 * admin.js 的 _routeAliases 轉到 `#/overlay`。後端是真相來源
 * （services/broadcast.py · routes/admin/broadcast.py）：只有 live／standby
 * 兩態，standby 期間 /fire 一律排隊、回到 live 時排空——有沒有場次都一樣，
 * 所以前端也只有一顆「暫停顯示 ↔ 繼續顯示」。
 *
 * 「顯示開／暫停」與「有幾個顯示端連著」是兩件事：前者看 broadcast mode，
 * 後者看 /overlay_status。兩者一起寫在同一行狀態裡（statusText），控制台的
 * 顯示層卡用同一個函式，兩頁永遠說同一句話。
 *
 * 兩個場中動作 `setDisplay` / `clearScreen` 也掛在 window.AdminOverlayControl，
 * 控制台共用同一份：同一個動作全站一個名字、一種確認行為、一種可用條件。
 *
 * 場次數字（已進行／訊息／觀眾裝置）只在控制台出現——這裡不重複。
 *
 * 頁面 id 刻意不用 `sec-` 前綴，可見性由本模組依 activeLeaf 自己管。
 * 彈幕外觀（admin-display.js）排在本頁之後，預設收合。
 */
(function () {
  "use strict";

  const PAGE_ID = "admin-broadcast-v2-page";
  const STATUS_URL = "/admin/broadcast/status";
  const TOGGLE_URL = "/admin/broadcast/toggle";

  // Local cache of last server state — updated via poll every 5 s.
  let _serverState = { mode: "live" };
  // Session state (broadcast/status embeds the session field)
  let _sessionState = null;
  let _overlayCount = 0;

  async function fetchStatus() {
    try {
      const r = await fetch(STATUS_URL, { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      if (data && (data.mode === "live" || data.mode === "standby")) {
        _sessionState = data.session || null;
        _serverState = data;
      }
    } catch (_) {}
    try {
      const r = await fetch("/overlay_status", { credentials: "same-origin" });
      if (r.ok) _overlayCount = (await r.json()).overlay_count || 0;
    } catch (_) {}
  }

  async function postToggle(nextMode) {
    try {
      const r = await window.csrfFetch(TOGGLE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: nextMode }),
      });
      if (!r.ok) {
        const body = await r.json().catch(() => ({}));
        throw new Error(body && body.error ? body.error : `HTTP ${r.status}`);
      }
      _serverState = await r.json();
      return true;
    } catch (e) {
      console.warn("[admin-broadcast] toggle failed:", e);
      window.showToast && window.showToast(ServerI18n.t("broadcastToastToggleFailed", { msg: (e && e.message) || "" }), false);
      return false;
    }
  }

  // ---- 本頁與控制台共用 -------------------------------------------------

  // 「顯示中 · 已連接 2 個顯示端」：顯示開關與連線數各說各的，0 台時照樣
  // 看得到 0，而不是把它說成「未開啟」。
  function statusText(live, count) {
    return ServerI18n.t(live ? "uiDisplayOn" : "uiDisplayOff")
      + " · " + ServerI18n.t("setupWizardReadyDisplayOk", { n: count });
  }

  // 主動作的字樣只有這一處決定。
  function toggleKey(live) {
    return live ? "broadcastBigPause" : "broadcastBigResume";
  }

  // 暫停是可逆的（訊息排隊、繼續時播出），所以不彈確認。
  async function setDisplay(live) {
    const ok = await postToggle(live ? "live" : "standby");
    if (ok && window.showToast) {
      window.showToast(ServerI18n.t(live ? "broadcastToastResumed" : "broadcastToastPaused"), true);
    }
    renderTick();
    return ok;
  }

  // 清空不可復原：danger 確認框，預設焦點在「取消」。永遠可按——
  // 「先暫停再清空」是緊急流程，停用只會讓主持人不知道為什麼按不下去。
  async function clearScreen() {
    const ok = await window.HudConfirm?.open({
      icon: "⌫",
      title: ServerI18n.t("broadcastClearModalTitle"),
      subtitle: ServerI18n.t("cfmSubClearScreen"),
      severity: "danger",
      body: ServerI18n.t("broadcastClearModalBody"),
      confirmLabel: ServerI18n.t("broadcastClearScreenBtn"),
    });
    if (!ok) return;
    try {
      const r = await window.csrfFetch("/admin/overlay/clear", { method: "POST" });
      if (r.ok) window.showToast && showToast(ServerI18n.t("broadcastToastCleared"), true);
      else window.showToast && showToast(ServerI18n.t("broadcastToastClearFailedHttp", { status: r.status }), false);
    } catch (_) {
      window.showToast && showToast(ServerI18n.t("broadcastToastClearFailed"), false);
    }
  }

  window.AdminOverlayControl = { setDisplay, clearScreen, statusText, toggleKey };

  // ---- page --------------------------------------------------------------

  function pageTemplate() {
    const t = (k) => ServerI18n.t(k);
    return `
      <div id="${PAGE_ID}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-bc-v4__body">
          <div class="admin-bc-v5__status-row" role="status" aria-live="polite">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>—</span>
          </div>

          <!-- 這頁唯一的主動作。清空畫面不可復原，隔著分隔線放在下面。 -->
          <button type="button" class="admin-ui-action is-primary admin-bc-v4__big" data-bc-big
                  data-i18n="${toggleKey(false)}">${t(toggleKey(false))}</button>
          <div class="admin-bc-v4__secondary">
            <button type="button" class="admin-ui-action is-danger" data-bc-clear
                    data-i18n="broadcastClearScreenBtn">${t("broadcastClearScreenBtn")}</button>
          </div>

          <div class="admin-bc-v5__session-ctx" data-bc-session-ctx hidden>
            <div class="admin-bc-v5__session-row">
              <span class="admin-bc-v5__session-id" data-bc-session-id>—</span>
              <span class="admin-bc-v5__spacer"></span>
              <a class="admin-bc-v5__session-link" href="#/sessions"
                 data-i18n="broadcastManageSessionsLink">${t("broadcastManageSessionsLink")}</a>
            </div>
          </div>
        </div>
      </div>`;
  }

  let _statusTimer = 0;
  let _tickTimer = 0;

  // 每秒重畫一次（不是只在輪詢後）：切換語言不重新載入時，狀態列與主按鈕
  // 一秒內就換成新語言。
  function renderTick() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    const isLive = _serverState.mode === "live";
    const state = isLive ? "live" : "standby";
    const setText = (el, v) => { if (el && el.textContent !== v) el.textContent = v; };

    page.dataset.bcState = state;
    const stateDot = page.querySelector("[data-bc-statedot]");
    if (stateDot) stateDot.dataset.state = state;
    const stateLabel = page.querySelector("[data-bc-statelabel]");
    if (stateLabel) {
      setText(stateLabel, statusText(isLive, _overlayCount));
      stateLabel.dataset.state = state;
    }

    const big = page.querySelector("[data-bc-big]");
    if (big) {
      big.dataset.i18n = toggleKey(isLive);
      setText(big, ServerI18n.t(big.dataset.i18n));
    }

    // Session the display belongs to — hidden when no session exists.
    const sess = _sessionState || {};
    const hasSession = !!(sess.id || sess.name);
    const sessCtx = page.querySelector("[data-bc-session-ctx]");
    if (sessCtx) sessCtx.hidden = !hasSession;
    if (hasSession) setText(page.querySelector("[data-bc-session-id]"), String(sess.name || sess.id));
  }

  function bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    page.querySelector("[data-bc-big]")?.addEventListener("click", () => setDisplay(_serverState.mode !== "live"));
    page.querySelector("[data-bc-clear]")?.addEventListener("click", clearScreen);
  }

  function startTimers() {
    if (_statusTimer) return;
    fetchStatus().then(renderTick);
    renderTick();
    _statusTimer = setInterval(() => { fetchStatus().then(renderTick); }, 5000);
    _tickTimer = setInterval(renderTick, 1000);
  }

  function stopTimers() {
    if (_statusTimer) { clearInterval(_statusTimer); _statusTimer = 0; }
    if (_tickTimer) { clearInterval(_tickTimer); _tickTimer = 0; }
  }

  function syncVisibility() {
    const shell = document.querySelector(".admin-dash-grid");
    const page = document.getElementById(PAGE_ID);
    if (!shell || !page) return;
    const route = shell.dataset.activeLeaf || "dashboard";
    // `overlay` is the canonical slug, `broadcast` kept for old bookmarks.
    const visible = route === "overlay" || route === "broadcast";
    page.style.display = visible ? "" : "none";
    if (visible) startTimers();
    else stopTimers();
  }

  function inject() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    // afterbegin：主動作要在首屏頂端，排在同一條路由的彈幕外觀之前。
    grid.insertAdjacentHTML("afterbegin", pageTemplate());
    bind();
    syncVisibility();
  }

  function boot() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    const observer = new MutationObserver(() => {
      if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
        inject();
      }
      syncVisibility();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("hashchange", syncVisibility);
    document.addEventListener("admin-panel-rendered", () => {
      inject();
      syncVisibility();
    });
    inject();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
