/**
 * Admin · 顯示層頁 (#/overlay) 的上半部：暫停／繼續顯示、清空畫面、現況數字。
 *
 * 模組檔名沿用 `admin-broadcast.js`（歷史名稱）；舊的 `#/broadcast` 書籤由
 * admin.js 的 _routeAliases 轉到 `#/overlay`。後端是真相來源
 * （services/broadcast.py · routes/admin/broadcast.py）：只有 live／standby
 * 兩態，standby 期間 /fire 一律排隊、回到 live 時排空——有沒有場次都一樣，
 * 所以前端也只有一顆「暫停顯示 ↔ 繼續顯示」。
 *
 * 兩個場中動作 `setDisplay` / `clearScreen` 掛在 window.AdminOverlayControl，
 * 控制台的顯示層卡共用同一份：同一個動作全站一個名字、一種確認行為。
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
  let _serverState = { mode: "live", started_at: null, total_messages: 0, queue_size: 0 };
  // Session state (broadcast/status embeds the session field)
  let _sessionState = null;

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

  function fmtDuration(ms) {
    if (!Number.isFinite(ms) || ms < 0) ms = 0;
    const s = Math.floor(ms / 1000);
    const hh = String(Math.floor(s / 3600)).padStart(2, "0");
    const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  }

  // ---- 兩個場中動作（本頁與控制台共用） -----------------------------

  // 暫停是可逆的（訊息排隊、繼續時播出），所以不彈確認。
  async function setDisplay(live) {
    const ok = await postToggle(live ? "live" : "standby");
    if (ok && window.showToast) {
      window.showToast(ServerI18n.t(live ? "broadcastToastResumed" : "broadcastToastPaused"), true);
    }
    renderTick();
    return ok;
  }

  // 清空不可復原：danger 確認框，預設焦點在「取消」。
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

  window.AdminOverlayControl = { setDisplay, clearScreen };

  // ---- page --------------------------------------------------------------

  function pageTemplate() {
    const t = (k) => ServerI18n.t(k);
    return `
      <div id="${PAGE_ID}" class="admin-broadcast-page admin-bc-v4 admin-bc-v5 hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-bc-v4__body">
          <div class="admin-bc-v5__status-row">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>${t("uiDisplayOff")}</span>
          </div>

          <!-- 這頁唯一的主動作。清空畫面不可復原，隔著分隔線放在下面。 -->
          <div class="admin-bc-v4__big-wrap">
            <button type="button" class="admin-bc-v4__big admin-bc-v5__big is-off" data-bc-big>${t("broadcastBigResume")}</button>
          </div>
          <div class="admin-bc-v4__secondary">
            <button type="button" class="admin-ui-action is-danger" data-bc-clear>${t("broadcastClearScreenBtn")}</button>
          </div>

          <div class="admin-bc-v4__stats">
            <div class="admin-bc-v4__stat"><div class="admin-cockpit-stat-label">${t("dashKpiSessionDuration")}</div><div class="admin-bc-v4__stat-v" data-bc-stat-elapsed>—</div></div>
            <div class="admin-bc-v4__stat"><div class="admin-cockpit-stat-label">${t("dashKpiMsgTotal")}</div><div class="admin-bc-v4__stat-v" data-bc-stat-msgs>0</div></div>
            <div class="admin-bc-v4__stat"><div class="admin-cockpit-stat-label">${t("dashKpiUniqueFp")}</div><div class="admin-bc-v4__stat-v" data-bc-stat-fp>0</div></div>
          </div>

          <div class="admin-bc-v5__session-ctx" data-bc-session-ctx hidden>
            <div class="admin-bc-v5__session-row">
              <span class="admin-bc-v5__session-id" data-bc-session-id>—</span>
              <span class="admin-bc-v5__session-meta" data-bc-session-started>—</span>
              <span class="admin-bc-v5__session-meta" data-bc-session-window>—</span>
              <span class="admin-bc-v5__spacer"></span>
              <a class="admin-bc-v5__session-link" href="#/sessions">${t("broadcastManageSessionsLink")}</a>
            </div>
          </div>
        </div>
      </div>`;
  }

  // ---- live numbers (unique fp) ------------------------------------------

  let _uniqueFp = 0;
  let _metricsTimer = 0;
  let _statusTimer = 0;
  let _tickTimer = 0;

  async function refreshMetrics() {
    // Best-effort, cheap when admin-fingerprints in-memory tracker is warm.
    try {
      const r = await fetch("/admin/fingerprints?limit=1", { credentials: "same-origin" });
      if (r.ok) {
        const j = await r.json();
        if (typeof j.total === "number") _uniqueFp = j.total;
      }
    } catch (_) {}
  }

  function renderTick() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    const isLive = _serverState.mode === "live";
    const state = isLive ? "live" : "standby";
    const setText = (sel, v) => { const el = page.querySelector(sel); if (el) el.textContent = v; };

    page.dataset.bcState = state;
    const stateDot = page.querySelector("[data-bc-statedot]");
    if (stateDot) stateDot.dataset.state = state;
    const stateLabel = page.querySelector("[data-bc-statelabel]");
    if (stateLabel) {
      stateLabel.textContent = ServerI18n.t(isLive ? "uiDisplayOn" : "uiDisplayOff");
      stateLabel.dataset.state = state;
    }

    const big = page.querySelector("[data-bc-big]");
    if (big) {
      big.className = `admin-bc-v4__big admin-bc-v5__big ${isLive ? "is-on" : "is-off"}`;
      big.textContent = ServerI18n.t(isLive ? "broadcastBigPause" : "broadcastBigResume");
    }

    // Stats strip — elapsed counts from the moment the display went live.
    const elapsedMs = (isLive && _serverState.started_at) ? Date.now() - _serverState.started_at * 1000 : 0;
    setText("[data-bc-stat-elapsed]", isLive ? fmtDuration(elapsedMs).slice(3) : "—"); // mm:ss
    setText("[data-bc-stat-msgs]", (_serverState.total_messages || 0).toLocaleString());
    setText("[data-bc-stat-fp]", _uniqueFp.toLocaleString());

    // Session the display belongs to — hidden when no session exists.
    const sess = _sessionState || {};
    const hasSession = !!(sess.id || sess.name);
    const sessCtx = page.querySelector("[data-bc-session-ctx]");
    if (sessCtx) sessCtx.hidden = !hasSession;
    if (hasSession) {
      const startedAt = typeof sess.started_at === "number" ? sess.started_at : null;
      const pad = (n) => String(n).padStart(2, "0");
      const d = startedAt ? new Date(startedAt * 1000) : null;
      setText("[data-bc-session-id]", sess.name || sess.id);
      setText("[data-bc-session-started]", ServerI18n.t("sessionDetailStatStarted") + " · "
        + (d ? `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}` : "—"));
      setText("[data-bc-session-window]", ServerI18n.t("sessionDetailStatDuration") + " · "
        + (startedAt ? fmtDuration(Date.now() - startedAt * 1000).slice(3) : "—"));
    }
  }

  function bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    page.querySelector("[data-bc-big]")?.addEventListener("click", () => setDisplay(_serverState.mode !== "live"));
    page.querySelector("[data-bc-clear]")?.addEventListener("click", clearScreen);
  }

  function startTimers() {
    if (_metricsTimer) return;
    fetchStatus();
    refreshMetrics();
    renderTick();
    _statusTimer = setInterval(fetchStatus, 5000);
    _metricsTimer = setInterval(() => { refreshMetrics().then(renderTick); }, 10000);
    _tickTimer = setInterval(renderTick, 1000);
  }

  function stopTimers() {
    if (_statusTimer) { clearInterval(_statusTimer); _statusTimer = 0; }
    if (_metricsTimer) { clearInterval(_metricsTimer); _metricsTimer = 0; }
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
