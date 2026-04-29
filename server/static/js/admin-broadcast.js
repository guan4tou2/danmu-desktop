/**
 * Admin Broadcast (P2) — dedicated Soft Holo HUD page.
 *
 * One state card: big circular dot, LIVE/STANDBY title, runtime meta
 * (uptime · ws clients · message count), toggle button disabled when no
 * active session.
 *
 * v5.0.0+: backend is source of truth (server/services/broadcast.py +
 * server/routes/admin/broadcast.py). Toggle posts to /admin/broadcast/toggle;
 * status is polled every 5 s. Session state is included in the status response.
 * ENDED is managed via session lifecycle — use 「結束場次」 in the dashboard.
 *
 * Section id is intentionally NOT prefixed `sec-` so admin.js router's
 * [id^="sec-"] visibility sweep leaves it alone — this module manages its
 * own show/hide via shell.dataset.activeRoute === "broadcast".
 */
(function () {
  "use strict";

  const PAGE_ID = "admin-broadcast-v2-page";
  const STATUS_URL = "/admin/broadcast/status";
  const TOGGLE_URL = "/admin/broadcast/toggle";

  // Local cache of last server state — updated via poll every 5 s.
  let _serverState = { mode: "live", started_at: null, total_messages: 0, queue_size: 0 };

  function dispatchBroadcastChanged(s) {
    try {
      window.dispatchEvent(new CustomEvent("danmu-broadcast-changed", { detail: s }));
    } catch (_) {}
  }

  function readState() {
    return {
      mode: _serverState.mode,
      // Server ships unix-seconds; convert to ms for fmtDuration math.
      started_at: typeof _serverState.started_at === "number"
        ? _serverState.started_at * 1000
        : null,
    };
  }

  // Session state (populated from broadcast/status which now includes session field)
  let _sessionState = null;

  async function fetchStatus() {
    try {
      const r = await fetch(STATUS_URL, { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      if (data && (data.mode === "live" || data.mode === "standby")) {
        _sessionState = data.session || null;
        _serverState = data;
        dispatchBroadcastChanged(readState());
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
      const data = await r.json();
      _serverState = data;
      dispatchBroadcastChanged(readState());
      return true;
    } catch (e) {
      console.warn("[admin-broadcast] toggle failed:", e);
      window.showToast && window.showToast("切換失敗 · " + (e && e.message || ""), false);
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

  function pageTemplate() {
    return `
      <div id="${PAGE_ID}" class="admin-broadcast-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">BROADCAST · 顯示控制 · 場次進行中才可切換</div>
          <div class="admin-v2-title">廣播 / 顯示控制</div>
          <p class="admin-v2-note">
            場次開啟後可在此暫停 / 恢復 overlay 顯示。
            LIVE · 訊息即時推送給 overlay ·
            STANDBY · 訊息暫停顯示（仍歸檔到場次）。
          </p>
        </div>

        <div class="admin-broadcast-grid">
          <!-- LEFT: current LIVE / STANDBY card -->
          <div class="admin-v2-card admin-broadcast-card">
            <div class="admin-v2-monolabel" style="margin-bottom:12px">CURRENT STATE · 當前狀態</div>
            <div class="admin-broadcast-state-strip" data-bc-strip>
              <div class="admin-broadcast-bigdot" data-bc-bigdot>
                <span class="dot"></span>
              </div>
              <div class="admin-broadcast-state-meta">
                <div class="admin-broadcast-state-title" data-bc-title>LIVE · 廣播中</div>
                <div class="admin-broadcast-state-line" data-bc-meta>00:00:00 進行中 · — 連線 · — 則訊息</div>
              </div>
              <button type="button" class="admin-broadcast-toggle" data-bc-toggle>⏸ 切到 STANDBY</button>
            </div>

            <div style="margin-top:18px">
              <div class="admin-v2-monolabel" style="margin-bottom:10px">LIVE vs STANDBY · 行為差異</div>
              <div class="admin-broadcast-cmp">
                <div class="admin-broadcast-cmp-col is-live">
                  <div class="admin-broadcast-cmp-label">LIVE</div>
                  <ul>
                    <li>觀眾訊息推送到 Overlay</li>
                    <li>queue 啟用</li>
                    <li>投票運作</li>
                    <li>OBS Widgets 顯示</li>
                    <li>時間軸記錄</li>
                  </ul>
                </div>
                <div class="admin-broadcast-cmp-col is-standby">
                  <div class="admin-broadcast-cmp-label">STANDBY</div>
                  <ul>
                    <li>訊息暫存(不推送)</li>
                    <li>queue 凍結</li>
                    <li>投票暫停</li>
                    <li>OBS Widgets 隱藏</li>
                    <li>時間軸停止</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="admin-broadcast-hint">
              切換為立即生效 · WebSocket 仍保持連線 · 觀眾側看到「暫停接收」而非斷線。
            </div>
          </div>

          <!-- RIGHT: transition rules + close-session redirect -->
          <div class="admin-v2-card admin-broadcast-card">
            <div class="admin-v2-monolabel" style="margin-bottom:8px">TRANSITION RULES · 切換行為</div>
            <div class="admin-broadcast-rules">
              <div class="admin-broadcast-rule"><span>STANDBY</span><span>→</span><span class="is-live">LIVE</span><span class="tag is-instant">● 即時切換</span></div>
              <div class="admin-broadcast-rule"><span class="is-live">LIVE</span><span>→</span><span class="is-standby">STANDBY</span><span class="tag is-instant">● 即時切換</span></div>
            </div>
            <div style="margin-top:20px">
              <div class="admin-v2-monolabel" style="margin-bottom:8px;color:#FB7185">結束場次</div>
              <p style="font-size:0.85rem;opacity:.75;margin:0 0 14px">
                結束直播請至「控制台」點「結束場次」。場次結束後廣播自動切回 STANDBY，
                觀眾頁依設定顯示結束畫面或自動重載。
              </p>
              <button type="button" class="admin-broadcast-toggle"
                style="font-size:0.82rem;padding:6px 14px" data-bc-go-dashboard>
                ↩ 前往控制台
              </button>
            </div>
          </div>
        </div>
      </div>`;
  }

  // ---- live numbers (ws_clients + total messages) -----------------------

  let _wsClients = 0;
  let _metricsTimer = 0;
  let _statusTimer = 0;
  let _tickTimer = 0;

  async function refreshMetrics() {
    try {
      const r = await fetch("/admin/metrics", { credentials: "same-origin" });
      if (!r.ok) return;
      const m = await r.json();
      _wsClients = m.ws_clients || 0;
    } catch (_) {}
  }

  function renderTick() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    const state = readState();
    const meta = page.querySelector("[data-bc-meta]");
    const title = page.querySelector("[data-bc-title]");
    const strip = page.querySelector("[data-bc-strip]");
    const dot = page.querySelector("[data-bc-bigdot]");
    const toggle = page.querySelector("[data-bc-toggle]");
    if (!meta || !title || !strip || !dot || !toggle) return;

    const sessionIdle = !_sessionState || _sessionState.status !== "live";
    const isLive = state.mode === "live";
    const elapsed = isLive && state.started_at ? Date.now() - state.started_at : 0;

    // Session-aware titles
    if (sessionIdle) {
      title.textContent = "待機 · 尚無進行中場次";
    } else {
      title.textContent = isLive ? "LIVE · 顯示中" : "STANDBY · 顯示已暫停";
    }

    const totalMsgs = (_serverState && _serverState.total_messages) || 0;
    const queued = (_serverState && _serverState.queue_size) || 0;
    const tail = state.mode === "standby" && queued > 0
      ? ` · queue ${queued.toLocaleString()}`
      : "";
    const sessionLabel = _sessionState && _sessionState.name ? ` · 場次: ${_sessionState.name}` : "";
    meta.textContent = `${fmtDuration(elapsed)} ${isLive ? "進行中" : "暫停中"} · ${_wsClients.toLocaleString()} 連線 · ${totalMsgs.toLocaleString()} 則訊息${tail}${sessionLabel}`;
    strip.dataset.mode = state.mode;
    dot.dataset.mode = state.mode;

    // Toggle button: disabled when no session (can't go live without session)
    if (sessionIdle) {
      toggle.textContent = "請先開啟場次";
      toggle.disabled = true;
      toggle.title = "在控制台開啟場次後，此處才能切換廣播顯示";
    } else {
      toggle.disabled = false;
      toggle.title = "";
      toggle.textContent = isLive ? "⏸ 暫停顯示" : "▶ 恢復顯示";
    }
    toggle.dataset.bcMode = state.mode;
  }

  async function onToggleClick() {
    const state = readState();
    const next = state.mode === "live" ? "standby" : "live";
    const ok = await postToggle(next);
    if (ok) {
      window.showToast && showToast(next === "live" ? "已切回 LIVE · queue 將排空" : "已切到 STANDBY", true);
      renderTick();
    }
  }

  function bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    page.querySelector("[data-bc-toggle]")?.addEventListener("click", onToggleClick);
    page.querySelector("[data-bc-go-dashboard]")?.addEventListener("click", () => {
      location.hash = "#/dashboard";
    });
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
    const route = shell.dataset.activeRoute || "dashboard";
    const visible = route === "broadcast";
    page.style.display = visible ? "" : "none";
    if (visible) startTimers();
    else stopTimers();
  }

  function inject() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", pageTemplate());
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
