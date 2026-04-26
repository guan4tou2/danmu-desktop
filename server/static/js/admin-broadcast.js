/**
 * Admin Broadcast (P2) — dedicated Soft Holo HUD page.
 *
 * Per docs/designs/design-v2/components/priority-2-pieces.jsx (lines 367-498),
 * the broadcast page has two cards:
 *   1) LIVE state (left): big circular dot, LIVE/STANDBY heading, runtime meta
 *      (uptime · ws clients · message count), magenta "切到 STANDBY" button.
 *   2) END BROADCAST (right): confirmation-code input + crimson primary button
 *      (disabled until code matches), then a 2-column LIVE vs STANDBY legend.
 *
 * v5.0.0+: backend is now source of truth (server/services/broadcast.py +
 * server/routes/admin/broadcast.py). Toggle posts to /admin/broadcast/toggle;
 * UI polls /admin/broadcast/status every 2s and reflects the server state.
 * "ENDED" is still a UI-only mode (we just shove it into local state and tell
 * the user to refresh) — the server only knows live/standby right now.
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

  // Local cache of last server state — updated via poll.
  let _serverState = { mode: "live", started_at: null, total_messages: 0, queue_size: 0 };
  // UI-only "ended" overlay. Cleared on next status fetch that returns live/standby.
  let _endedLocally = false;

  function dispatchBroadcastChanged(s) {
    try {
      window.dispatchEvent(new CustomEvent("danmu-broadcast-changed", { detail: s }));
    } catch (_) {}
  }

  function readState() {
    if (_endedLocally) {
      return { mode: "ended", started_at: _serverState.started_at };
    }
    return {
      mode: _serverState.mode,
      // Server ships unix-seconds; convert to ms for fmtDuration math.
      started_at: typeof _serverState.started_at === "number"
        ? _serverState.started_at * 1000
        : null,
    };
  }

  async function fetchStatus() {
    try {
      const r = await fetch(STATUS_URL, { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      if (data && (data.mode === "live" || data.mode === "standby")) {
        _serverState = data;
        // If server said live/standby, any client-only "ended" overlay is stale.
        if (_endedLocally && data.mode !== "ended") _endedLocally = false;
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

  function randomCode() {
    return String(Math.floor(1000 + Math.random() * 9000));
  }

  function pageTemplate() {
    const code = randomCode();
    return `
      <div id="${PAGE_ID}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-confirm-code="${code}">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">BROADCAST · LIVE / STANDBY · 控制觀眾是否看到訊息</div>
          <div class="admin-v2-title">廣播狀態</div>
          <p class="admin-v2-note">
            LIVE · 推送、queue、投票、Widgets、時間軸全部運作 ·
            STANDBY · 訊息進 queue 但不推送、投票暫停、Widgets 隱藏 · 時間軸停止寫入。
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
              切換為立即生效 · WebSocket 仍保持連線 · 觀眾側看到「主持人暫停」而非斷線。
              <br><span style="opacity:.7">即將支援 · 後端 /admin/broadcast/toggle endpoint pending。目前僅前端 UI 狀態切換。</span>
            </div>
          </div>

          <!-- RIGHT: END BROADCAST confirmation card -->
          <div class="admin-v2-card admin-broadcast-card admin-broadcast-end">
            <div class="admin-v2-monolabel" style="margin-bottom:12px;color:#FB7185">END BROADCAST · 確認結束直播</div>
            <p class="admin-broadcast-warn">
              ⚠ 結束後將斷開所有 WebSocket 連線 · 觀眾頁顯示「已結束 · 感謝參加」 ·
              Overlay 關閉。時間軸仍可在 <b>歷史 → 匯出</b> 重新下載。
            </p>

            <label class="admin-broadcast-confirm-row">
              <span class="admin-v2-monolabel">CONFIRM CODE · 輸入 <code data-bc-code-show>${code}</code> 確認</span>
              <input id="bc2-confirm-input" type="text" class="admin-v2-input"
                placeholder="輸入上方確認碼" autocomplete="off" spellcheck="false" />
            </label>

            <div class="admin-broadcast-end-actions">
              <button type="button" id="bc2-end-btn" class="admin-broadcast-end-btn" disabled>■ 結束廣播</button>
              <button type="button" id="bc2-cancel-btn" class="admin-poll-btn is-ghost">取消</button>
            </div>

            <div style="margin-top:18px">
              <div class="admin-v2-monolabel" style="margin-bottom:8px">TRANSITION RULES · 切換行為</div>
              <div class="admin-broadcast-rules">
                <div class="admin-broadcast-rule"><span>STANDBY</span><span>→</span><span class="is-live">LIVE</span><span class="tag is-instant">● 即時切換</span></div>
                <div class="admin-broadcast-rule"><span class="is-live">LIVE</span><span>→</span><span class="is-standby">STANDBY</span><span class="tag is-instant">● 即時切換</span></div>
                <div class="admin-broadcast-rule"><span>任意</span><span>→</span><span class="is-end">ENDED</span><span class="tag is-confirm">● 需確認碼</span></div>
              </div>
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

    const isLive = state.mode === "live";
    const elapsed = isLive && state.started_at ? Date.now() - state.started_at : 0;
    title.textContent = isLive ? "LIVE · 廣播中" : (state.mode === "standby" ? "STANDBY · 已暫停" : "ENDED · 已結束");
    const totalMsgs = (_serverState && _serverState.total_messages) || 0;
    const queued = (_serverState && _serverState.queue_size) || 0;
    const tail = state.mode === "standby" && queued > 0
      ? ` · queue ${queued.toLocaleString()}`
      : "";
    meta.textContent = `${fmtDuration(elapsed)} ${isLive ? "進行中" : (state.mode === "standby" ? "暫停中" : "已結束")} · ${_wsClients.toLocaleString()} 連線 · ${totalMsgs.toLocaleString()} 則訊息${tail}`;
    strip.dataset.mode = state.mode;
    dot.dataset.mode = state.mode;
    toggle.textContent = isLive ? "⏸ 切到 STANDBY" : "▶ 切回 LIVE";
    toggle.dataset.bcMode = state.mode;
  }

  async function onToggleClick() {
    const state = readState();
    if (state.mode === "ended") {
      window.showToast && showToast("廣播已結束 · 請重新整理頁面", false);
      return;
    }
    const next = state.mode === "live" ? "standby" : "live";
    const ok = await postToggle(next);
    if (ok) {
      window.showToast && showToast(next === "live" ? "已切回 LIVE · queue 將排空" : "已切到 STANDBY", true);
      renderTick();
    }
  }

  function onConfirmInput(e) {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    const code = page.dataset.confirmCode || "";
    const btn = document.getElementById("bc2-end-btn");
    if (!btn) return;
    btn.disabled = (e.target.value || "").trim() !== code;
  }

  function onEndClick() {
    if (!confirm("確定結束廣播?所有 WebSocket 連線將斷開,觀眾看到「已結束」。")) return;
    writeState({ mode: "ended", started_at: Date.now() });
    window.showToast && showToast("廣播已結束 · 即將支援後端持久化", true);
    // Reset confirm input
    const input = document.getElementById("bc2-confirm-input");
    if (input) input.value = "";
    const btn = document.getElementById("bc2-end-btn");
    if (btn) btn.disabled = true;
    renderTick();
  }

  function onCancelClick() {
    const input = document.getElementById("bc2-confirm-input");
    if (input) input.value = "";
    const btn = document.getElementById("bc2-end-btn");
    if (btn) btn.disabled = true;
  }

  function bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    page.querySelector("[data-bc-toggle]")?.addEventListener("click", onToggleClick);
    document.getElementById("bc2-confirm-input")?.addEventListener("input", onConfirmInput);
    document.getElementById("bc2-end-btn")?.addEventListener("click", onEndClick);
    document.getElementById("bc2-cancel-btn")?.addEventListener("click", onCancelClick);
  }

  function startTimers() {
    if (_metricsTimer) return;
    refreshMetrics();
    renderTick();
    _metricsTimer = setInterval(() => { refreshMetrics().then(renderTick); }, 10000);
    _tickTimer = setInterval(renderTick, 1000);
  }

  function stopTimers() {
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
