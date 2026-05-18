/**
 * Admin Overlay 控制 (P2, polestar 2026-05-18) — dedicated Soft Holo HUD page.
 *
 * One state card: big circular dot, OVERLAY ON / OFF title, runtime meta
 * (uptime · ws clients · message count), toggle button disabled when no
 * active session.
 *
 * v5.0.0+: backend is source of truth (server/services/broadcast.py +
 * server/routes/admin/broadcast.py). Toggle posts to /admin/broadcast/toggle;
 * status is polled every 5 s. Session state is included in the status response.
 * Session lifecycle (start/end/archive) lives in admin-sessions.js.
 *
 * 2026-05-18 P2-6 rename: module file still named `admin-broadcast.js` for
 * historical reasons but the user-facing slug is `#/overlay` and the
 * vocabulary is "Overlay" (legacy `#/broadcast` deep links alias-redirect
 * via _routeAliases in admin.js). Backend storage keeps `live`/`standby`
 * for runtime/broadcast.json compatibility; backend service accepts the
 * polestar aliases `overlay_on`/`overlay_off` (see services/broadcast.py).
 *
 * Section id is intentionally NOT prefixed `sec-` so admin.js router's
 * [id^="sec-"] visibility sweep leaves it alone — this module manages its
 * own show/hide via shell.dataset.activeLeaf check ("overlay" or
 * "broadcast" for old bookmarks).
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

  // 2026-05-17 design v4: 4-state (standby/live/paused/ended) — derived
  // from backend `mode` + session state. Backend still has only 2 modes,
  // so the 4-state is a frontend projection:
  //   standby  ← mode=standby AND session idle/none → pre-broadcast
  //   live     ← mode=live
  //   paused   ← mode=standby AND session active   → was live, paused
  //   ended    ← session ended
  function _derive4State() {
    const m = _serverState.mode || "standby";
    const sess = _sessionState || {};
    const sessState = sess.state || "idle";
    if (sessState === "ended") return "ended";
    if (m === "live") return "live";
    if (sessState === "active") return "paused";
    return "standby";
  }

  function pageTemplate() {
    return `
      <div id="${PAGE_ID}" class="admin-broadcast-page admin-bc-v4 admin-bc-v5 hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker" data-bc-en>OVERLAY · OFF</div>
          <div class="admin-v2-title" data-bc-title>Overlay 控制</div>
        </div>

        <!-- Body slot — content swaps by state (ended uses a centered card) -->
        <div class="admin-bc-v4__body" data-bc-body>
          <!-- Status indicator (centered, calm) -->
          <div class="admin-bc-v5__status-row">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>OVERLAY OFF</span>
          </div>

          <!-- Stats strip — 4 tiles (SESSION ACTIVITY framing) -->
          <div class="admin-bc-v4__stats" data-bc-stats>
            <div class="admin-bc-v4__stat"><div class="admin-bc-v4__stat-en">SESSION TIME</div><div class="admin-bc-v4__stat-v" data-bc-stat-elapsed>—</div></div>
            <div class="admin-bc-v4__stat"><div class="admin-bc-v4__stat-en">MESSAGES</div><div class="admin-bc-v4__stat-v" data-bc-stat-msgs>0</div></div>
            <div class="admin-bc-v4__stat"><div class="admin-bc-v4__stat-en">UNIQUE FP</div><div class="admin-bc-v4__stat-v" data-bc-stat-fp>0</div></div>
            <div class="admin-bc-v4__stat"><div class="admin-bc-v4__stat-en">FIRE COUNT</div><div class="admin-bc-v4__stat-v" data-bc-stat-fire>0</div></div>
          </div>

          <!-- Primary toggle (2-state + paused sub-state) -->
          <div class="admin-bc-v4__big-wrap">
            <button type="button" class="admin-bc-v4__big" data-bc-big>▶ 開始顯示</button>
          </div>

          <!-- Confirm hint when ON -->
          <div class="admin-bc-v4__confirm-hint admin-bc-v5__confirm-hint" data-bc-confirm-hint hidden>
            停止顯示前會彈出確認 · Overlay 停止後訊息繼續接收但不渲染
          </div>

          <!-- Secondary controls — only PAUSE + CLEAR (session lifecycle lives elsewhere) -->
          <div class="admin-bc-v4__secondary admin-bc-v5__secondary" data-bc-secondary>
            <button type="button" class="admin-bc-v4__sec is-pause" data-bc-pause>
              <span class="admin-bc-v4__sec-label">◐ 暫停顯示</span>
              <span class="admin-bc-v4__sec-hint">PAUSE RENDERING</span>
            </button>
            <button type="button" class="admin-bc-v4__sec is-clear" data-bc-clear>
              <span class="admin-bc-v4__sec-label">⊗ 清空螢幕</span>
              <span class="admin-bc-v4__sec-hint">CLEAR ONSCREEN</span>
            </button>
          </div>

          <!-- Session context card — overlay is the toggle, session is the data slice -->
          <div class="admin-bc-v5__session-ctx" data-bc-session-ctx>
            <div class="admin-bc-v5__session-label">SESSION CONTEXT · 資料切片</div>
            <div class="admin-bc-v5__session-row">
              <span class="admin-bc-v5__session-id" data-bc-session-id>—</span>
              <span class="admin-bc-v5__session-meta" data-bc-session-started>Started · —</span>
              <span class="admin-bc-v5__session-meta" data-bc-session-window>Window · —</span>
              <span class="admin-bc-v5__spacer"></span>
              <a class="admin-bc-v5__session-link" href="#/sessions">管理 Sessions →</a>
            </div>
          </div>
        </div>

        <!-- Ended state card (rendered only when session has been formally ended) -->
        <div class="admin-bc-v4__ended" data-bc-ended hidden>
          <div class="admin-bc-v4__ended-icon">■</div>
          <div class="admin-bc-v4__ended-title">場次已結束</div>
          <div class="admin-bc-v4__ended-en" data-bc-ended-en>SESSION ENDED</div>
          <div class="admin-bc-v4__ended-stats">
            <div><div class="admin-bc-v4__stat-en">DURATION</div><div data-bc-end-dur>—</div></div>
            <div><div class="admin-bc-v4__stat-en">MESSAGES</div><div data-bc-end-msgs>—</div></div>
            <div><div class="admin-bc-v4__stat-en">UNIQUE FP</div><div data-bc-end-fp>—</div></div>
            <div><div class="admin-bc-v4__stat-en">FIRE COUNT</div><div data-bc-end-fire>—</div></div>
          </div>
          <a class="admin-bc-v4__ended-link" data-bc-go-sessions href="#/sessions">查看 Sessions →</a>
        </div>
      </div>`;
  }

  // ---- live numbers (ws_clients + unique fp + fire counts) --------------

  let _wsClients = 0;
  let _uniqueFp = 0;
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
    // Unique fp count comes from a separate endpoint — best-effort, cheap
    // when admin-fingerprints in-memory tracker is warm.
    try {
      const r = await fetch("/admin/fingerprints?limit=1", { credentials: "same-origin" });
      if (r.ok) {
        const j = await r.json();
        if (typeof j.total === "number") _uniqueFp = j.total;
      }
    } catch (_) {}
  }

  // 2026-05-18 polestar pivot: 2-state primary (off/on) + paused sub-state
  // + ended (rare, only when session is formally closed). Names softened
  // from "broadcast" framing.
  const _titleMap = {
    standby: { zh: "Overlay 控制",      en: "OVERLAY · OFF" },
    live:    { zh: "Overlay 控制",      en: "OVERLAY · ON" },
    paused:  { zh: "Overlay 控制",      en: "OVERLAY · PAUSED" },
    ended:   { zh: "場次已結束",         en: "SESSION ENDED" },
  };
  const _statusLabels = {
    standby: "OVERLAY OFF",
    live:    "OVERLAY ON",
    paused:  "OVERLAY PAUSED",
    ended:   "SESSION ENDED",
  };

  function renderTick() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    const state = _derive4State();
    const isLive = state === "live", isPaused = state === "paused",
          isEnded = state === "ended", isStandby = state === "standby";

    page.dataset.bcState = state;
    const titleEl = page.querySelector("[data-bc-title]");
    const enEl    = page.querySelector("[data-bc-en]");
    if (titleEl) titleEl.textContent = _titleMap[state].zh;
    if (enEl) {
      const elapsedSecs = (isLive && _serverState.started_at)
        ? Date.now() / 1000 - _serverState.started_at : 0;
      enEl.textContent = isLive
        ? `OVERLAY · ON · ${fmtDuration(elapsedSecs * 1000)}`
        : isEnded && _sessionState?.ended_at
          ? `SESSION ENDED · ${new Date(_sessionState.ended_at * 1000).toISOString().slice(0,10)}`
          : _titleMap[state].en;
    }

    const body = page.querySelector("[data-bc-body]");
    const ended = page.querySelector("[data-bc-ended]");
    if (body && ended) {
      body.hidden = isEnded;
      ended.hidden = !isEnded;
    }

    // Status banner
    const stateDot   = page.querySelector("[data-bc-statedot]");
    const stateLabel = page.querySelector("[data-bc-statelabel]");
    const elapsedEl  = page.querySelector("[data-bc-elapsed]");
    const schedEl    = page.querySelector("[data-bc-sched]");
    if (stateDot) stateDot.dataset.state = state;
    if (stateLabel) {
      stateLabel.textContent = _statusLabels[state] || _statusLabels.standby;
      stateLabel.dataset.state = state;
    }
    if (elapsedEl) {
      const elapsedMs = (isLive && _serverState.started_at)
        ? Date.now() - _serverState.started_at * 1000 : 0;
      elapsedEl.textContent = fmtDuration(elapsedMs);
      elapsedEl.hidden = !isLive;
    }
    // Scheduled-start countdown: surfaces when session has scheduled_at in future
    if (schedEl) {
      const startsAt = _sessionState?.scheduled_at;
      if (isStandby && typeof startsAt === "number" && startsAt > Date.now() / 1000) {
        const left = Math.max(0, startsAt - Date.now() / 1000);
        const mm = String(Math.floor(left / 60)).padStart(2, "0");
        const ss = String(Math.floor(left % 60)).padStart(2, "0");
        const start = new Date(startsAt * 1000);
        const hhmm = `${String(start.getHours()).padStart(2,"0")}:${String(start.getMinutes()).padStart(2,"0")}`;
        schedEl.textContent = `⏰ 預定 ${hhmm} · 倒數 ${mm}:${ss}`;
        schedEl.hidden = false;
      } else {
        schedEl.hidden = true;
      }
    }

    // Stats strip
    const totalMsgs = _serverState.total_messages || 0;
    const fireCount = _serverState.fire_count || totalMsgs;
    const elapsedSecs = (_serverState.started_at && (isLive || isPaused))
      ? Date.now() / 1000 - _serverState.started_at : 0;
    const elapsedStr = isStandby ? "—" : fmtDuration(elapsedSecs * 1000).slice(3); // mm:ss
    const setText = (sel, v) => { const el = page.querySelector(sel); if (el) el.textContent = v; };
    setText("[data-bc-stat-elapsed]", isStandby ? "—" : elapsedStr);
    setText("[data-bc-stat-msgs]",    isStandby ? "0" : totalMsgs.toLocaleString());
    setText("[data-bc-stat-fp]",      isStandby ? "0" : _uniqueFp.toLocaleString());
    setText("[data-bc-stat-fire]",    isStandby ? "0" : fireCount.toLocaleString());

    // Session context card — shows the time-slice the overlay belongs to.
    // Hidden when no session exists. (Session is the data slice, overlay
    // is just the on/off toggle for that slice's rendering surface.)
    const sessCtx = page.querySelector("[data-bc-session-ctx]");
    if (sessCtx) {
      const sess = _sessionState || {};
      const hasSession = !!(sess.id || sess.name);
      sessCtx.hidden = !hasSession;
      if (hasSession) {
        const idEl = page.querySelector("[data-bc-session-id]");
        const startedEl = page.querySelector("[data-bc-session-started]");
        const windowEl = page.querySelector("[data-bc-session-window]");
        if (idEl) idEl.textContent = sess.name || sess.id || "—";
        if (startedEl) {
          const startedAt = sess.started_at;
          if (typeof startedAt === "number") {
            const d = new Date(startedAt * 1000);
            const pad = (n) => String(n).padStart(2, "0");
            startedEl.textContent = `Started · ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
          } else {
            startedEl.textContent = "Started · —";
          }
        }
        if (windowEl) {
          const startedAt = sess.started_at;
          if (typeof startedAt === "number") {
            const winMs = Date.now() - startedAt * 1000;
            windowEl.textContent = `Window · ${fmtDuration(winMs).slice(3)}`;
          } else {
            windowEl.textContent = "Window · —";
          }
        }
      }
    }

    // Primary toggle — calmer 2-state framing per polestar pivot.
    //   off    → cyan-filled "▶ 開始顯示" (primary CTA)
    //   on     → soft outline "■ 停止顯示" (less dramatic than v4-r6)
    //   paused → amber-filled "▶ 繼續顯示" (resume highlight)
    const big = page.querySelector("[data-bc-big]");
    if (big) {
      if (isLive) {
        big.className = "admin-bc-v4__big admin-bc-v5__big is-on";
        big.textContent = "■ 停止顯示";
      } else if (isPaused) {
        big.className = "admin-bc-v4__big admin-bc-v5__big is-resume";
        big.textContent = "▶ 繼續顯示";
      } else {
        big.className = "admin-bc-v4__big admin-bc-v5__big is-off";
        big.textContent = "▶ 開始顯示";
      }
    }

    // Confirm hint visibility
    const confirmHint = page.querySelector("[data-bc-confirm-hint]");
    if (confirmHint) confirmHint.hidden = !isLive;

    // Secondary controls — disabled in standby/ended. Archive button
    // was removed in the polestar pivot (session end belongs to Sessions
    // page, not Overlay control).
    page.querySelectorAll("[data-bc-pause], [data-bc-clear]")
      .forEach((b) => {
        b.disabled = isStandby || isEnded;
        if (b.matches("[data-bc-pause]")) {
          b.classList.toggle("is-active", isPaused);
        }
      });

    // Ended-state stats fill
    if (isEnded) {
      const sess = _sessionState || {};
      const dur = sess.duration_sec ? fmtDuration(sess.duration_sec * 1000).slice(3) : "—";
      setText("[data-bc-end-dur]", dur);
      setText("[data-bc-end-msgs]", String(sess.total_messages || totalMsgs || "—"));
      setText("[data-bc-end-fp]",   String(sess.unique_fp || _uniqueFp || "—"));
      setText("[data-bc-end-fire]", String(sess.fire_count || fireCount || "—"));
    }
  }

  async function onBigClick() {
    const state = _derive4State();
    if (state === "standby") {
      const ok = await postToggle("live");
      if (ok) window.showToast && showToast("已切換到 LIVE", true);
    } else if (state === "paused") {
      const ok = await postToggle("live");
      if (ok) window.showToast && showToast("已 RESUME · queue 將排空", true);
    } else if (state === "live") {
      // 2026-05-18 design v4-r2: HudConfirm with elapsed-stats body.
      // Falls back to native confirm() if helper hasn't loaded yet.
      const elapsedMs = (_serverState.started_at ? Date.now() - _serverState.started_at * 1000 : 0);
      const elapsedStr = fmtDuration(elapsedMs);
      const msgs = _serverState.total_messages || 0;
      const fp = _uniqueFp.toLocaleString();
      const ok = window.HudConfirm
        ? await window.HudConfirm.open({
            icon: "■",
            title: "停止顯示",
            subtitle: "STOP OVERLAY · MESSAGES CONTINUE TO BE RECEIVED",
            severity: "warn",
            body: `
              <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                Overlay 將停止渲染彈幕。訊息仍會繼續接收並記錄到 session 中。
              </div>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:10px 12px;margin-top:12px;background:var(--hud-bg2, #182239);border-radius:6px;border:1px solid var(--hud-line, rgba(148,163,184,0.18));text-align:center;">
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:9px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">MSGS</div><div style="font-size:14px;font-weight:600;margin-top:2px;">${msgs.toLocaleString()}</div></div>
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:9px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">FP</div><div style="font-size:14px;font-weight:600;margin-top:2px;">${fp}</div></div>
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:9px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">TIME</div><div style="font-size:14px;font-weight:600;margin-top:2px;">${elapsedStr}</div></div>
              </div>
              <div style="margin-top:12px;font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:10px;letter-spacing:0.3px;color:var(--hud-amber, #fbbf24);">
                ⚠ Session 資料不受影響 · 可隨時重新開始顯示
              </div>`,
            confirmLabel: "停止顯示",
            cancelLabel: "取消",
            width: 440,
          })
        : confirm("確定要停止顯示嗎？訊息會繼續接收，但 overlay 不再渲染。");
      if (!ok) return;
      // Stop overlay rendering; session lifecycle stays separate.
      const success = await postToggle("standby");
      if (success) window.showToast && showToast("已停止顯示 · OVERLAY OFF", true);
    }
    renderTick();
  }

  async function onPauseClick() {
    const state = _derive4State();
    const next = state === "paused" ? "live" : "standby";
    const ok = await postToggle(next);
    if (ok) {
      window.showToast && showToast(
        next === "live" ? "已恢復接收" : "已暫停接收 · 訊息會排入 queue", true);
      renderTick();
    }
  }

  async function onClearClick() {
    if (!confirm("清空 overlay 螢幕上目前顯示的所有彈幕？")) return;
    try {
      const r = await window.csrfFetch("/admin/overlay/clear", { method: "POST" });
      if (r.ok) window.showToast && showToast("已清空 overlay", true);
      else window.showToast && showToast("清空失敗 · 後端尚未實作此端點", false);
    } catch (_) {
      window.showToast && showToast("清空失敗", false);
    }
  }

  async function onArchiveClick() {
    if (!confirm("結束並存檔此場次？此操作無法復原。")) return;
    try {
      const r = await window.csrfFetch("/admin/session/close", { method: "POST" });
      if (r.ok) {
        window.showToast && showToast("場次已結束並存檔", true);
        fetchStatus();
      } else {
        const body = await r.json().catch(() => ({}));
        window.showToast && showToast("結束場次失敗 · " + (body.error || `HTTP ${r.status}`), false);
      }
    } catch (_) {
      window.showToast && showToast("結束場次失敗 · 網路錯誤", false);
    }
  }

  function bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    page.querySelector("[data-bc-big]")?.addEventListener("click", onBigClick);
    page.querySelector("[data-bc-pause]")?.addEventListener("click", onPauseClick);
    page.querySelector("[data-bc-clear]")?.addEventListener("click", onClearClick);
    // [data-bc-archive] button removed in v5 polestar pivot — session
    // end-and-archive lives on the Sessions page now. onArchiveClick()
    // function is kept (dead code) only because the Sessions page may
    // later import it; safe to delete in a follow-up.
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
    // 2026-05-18 P2-6 polestar rename: `overlay` is the canonical slug,
    // `broadcast` kept as alias for old bookmarks.
    const visible = route === "overlay" || route === "broadcast";
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
