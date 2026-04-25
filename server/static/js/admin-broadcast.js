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
 * No backend `/admin/broadcast/toggle` exists, so v1 ships client-side only:
 *   - Toggle flips a localStorage flag (`danmu.broadcast.v1`) and dispatches a
 *     `danmu-broadcast-changed` window event so the topbar chip can listen.
 *   - Uptime is counted from a `started_at` ms timestamp persisted on first
 *     LIVE entry; reset to now when transitioning STANDBY → LIVE.
 *   - Connection count comes from /admin/metrics.ws_clients (poll every 10s).
 *   - Message count comes from /admin/history?hours=24&limit=1 stats.total
 *     (poll every 30s).
 *   - Confirmation code is a random 4-digit token regenerated each time the
 *     END BROADCAST card is shown; user must type it exactly to enable the
 *     END button. Action just flips localStorage + reloads (no backend).
 *
 * Section id is intentionally NOT prefixed `sec-` so admin.js router's
 * [id^="sec-"] visibility sweep leaves it alone — this module manages its
 * own show/hide via shell.dataset.activeRoute === "broadcast".
 */
(function () {
  "use strict";

  const PAGE_ID = "admin-broadcast-v2-page";
  const STATE_KEY = "danmu.broadcast.v1";

  function readState() {
    try {
      const raw = localStorage.getItem(STATE_KEY);
      if (!raw) return { mode: "live", started_at: Date.now() };
      const parsed = JSON.parse(raw);
      if (parsed && (parsed.mode === "live" || parsed.mode === "standby" || parsed.mode === "ended")) {
        if (typeof parsed.started_at !== "number") parsed.started_at = Date.now();
        return parsed;
      }
    } catch (_) {}
    return { mode: "live", started_at: Date.now() };
  }

  function writeState(s) {
    try { localStorage.setItem(STATE_KEY, JSON.stringify(s)); } catch (_) {}
    try {
      window.dispatchEvent(new CustomEvent("danmu-broadcast-changed", { detail: s }));
    } catch (_) {}
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
  let _totalMessages = 0;
  let _metricsTimer = 0;
  let _historyTimer = 0;
  let _tickTimer = 0;

  async function refreshMetrics() {
    try {
      const r = await fetch("/admin/metrics", { credentials: "same-origin" });
      if (!r.ok) return;
      const m = await r.json();
      _wsClients = m.ws_clients || 0;
    } catch (_) {}
  }

  async function refreshHistory() {
    try {
      const r = await fetch("/admin/history?hours=24&limit=1", { credentials: "same-origin" });
      if (!r.ok) return;
      const h = await r.json();
      _totalMessages = (h && h.stats && (h.stats.total || h.stats.last_24h)) || 0;
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
    const elapsed = isLive ? Date.now() - (state.started_at || Date.now()) : 0;
    title.textContent = isLive ? "LIVE · 廣播中" : (state.mode === "standby" ? "STANDBY · 已暫停" : "ENDED · 已結束");
    meta.textContent = `${fmtDuration(elapsed)} ${isLive ? "進行中" : (state.mode === "standby" ? "暫停中" : "已結束")} · ${_wsClients.toLocaleString()} 連線 · ${_totalMessages.toLocaleString()} 則訊息`;
    strip.dataset.mode = state.mode;
    dot.dataset.mode = state.mode;
    toggle.textContent = isLive ? "⏸ 切到 STANDBY" : "▶ 切回 LIVE";
    toggle.dataset.bcMode = state.mode;
  }

  function onToggleClick() {
    const state = readState();
    if (state.mode === "ended") {
      window.showToast && showToast("廣播已結束 · 請重新整理頁面", false);
      return;
    }
    const next = state.mode === "live" ? "standby" : "live";
    const newState = {
      mode: next,
      started_at: next === "live" ? Date.now() : state.started_at,
    };
    writeState(newState);
    window.showToast && showToast(next === "live" ? "已切回 LIVE" : "已切到 STANDBY", true);
    renderTick();
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
    refreshHistory();
    renderTick();
    _metricsTimer = setInterval(() => { refreshMetrics().then(renderTick); }, 10000);
    _historyTimer = setInterval(() => { refreshHistory().then(renderTick); }, 30000);
    _tickTimer = setInterval(renderTick, 1000);
  }

  function stopTimers() {
    if (_metricsTimer) { clearInterval(_metricsTimer); _metricsTimer = 0; }
    if (_historyTimer) { clearInterval(_historyTimer); _historyTimer = 0; }
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
