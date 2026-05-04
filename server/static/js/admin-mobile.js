/**
 * Admin · Mobile Page (P3 Group B, 2026-04-27).
 *
 * Mirrors docs/designs/design-v2/components/admin-batch8.jsx
 * AdminMobilePage. Designed for a host using their phone on stage —
 * dedicated phone-form layout instead of squashing the 17-row sidebar.
 *
 * Route: #/mobile  (sidebar 20 → 21 row, under "更多" / 設定 group)
 *
 * Sections (top → bottom):
 *   1. App header — event title + LIVE viewer count + 結束 button
 *   2. Live ticker — last 3 messages from in-mem live-feed entries
 *   3. Big actions — 4 cards: 啟動投票 / 釘選一則 / 暫停接收 / 清空螢幕
 *   4. Live stats — 3 KPI tiles (連線 / 訊息/min / 已遮罩)
 *   5. Quick toggles — 4 switches (allow new msgs / polls / reactions / NSFW)
 *   6. Bottom tab bar — 5 nav targets (控制台 / 投票 / 訊息 / 通知 / 更多)
 *
 * RWD: on viewport ≥720 the page renders centered in a 375px column
 * (preview from desktop). On <720 it fills the viewport.
 *
 * Loaded as <script defer> in admin.html.
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-mobile-admin-overview";
  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  let _state = {
    metrics: null,
    refreshTimer: 0,
    eventTitle: "Danmu Fire",
    broadcasting: true,
  };

  const TOGGLES = [
    { id: "allow-fire",       label: "允許新訊息",      on: true },
    { id: "allow-polls",      label: "允許 Polls",     on: true },
    { id: "allow-reactions",  label: "允許表情快速反應", on: false },
    { id: "hide-nsfw",        label: "隱藏 NSFW（自動）", on: true },
  ];

  function _shortTime(ts) {
    if (!ts) return "—";
    const sec = Math.max(0, (Date.now() - ts) / 1000);
    if (sec < 60) return Math.floor(sec) + "s";
    return Math.floor(sec / 60) + "m";
  }

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-mobile-page lg:col-span-2">
        <div class="admin-mobile-frame" data-mobile-frame>
          <!-- iOS-ish status bar -->
          <div class="admin-mobile-statusbar">
            <span data-mobile-time>—</span>
            <span class="live"><span class="dot"></span>LIVE</span>
            <span class="signal" aria-hidden="true">📶</span>
          </div>

          <!-- App header -->
          <header class="admin-mobile-appbar">
            <span class="logo" aria-hidden="true">▲</span>
            <div class="meta">
              <div class="title" data-mobile-event-title>${escapeHtml(_state.eventTitle)}</div>
              <div class="sub" data-mobile-event-sub>● — viewers · — elapsed</div>
            </div>
            <span class="end-btn admin-be-placeholder-control admin-mobile-end-placeholder" role="note">結束</span>
          </header>

          <div class="admin-mobile-body">
            <!-- Live ticker -->
            <section class="admin-mobile-ticker">
              <div class="head">
                <span class="kicker">NOW · 訊息流</span>
                <span class="rate" data-mobile-rate>● —/min</span>
              </div>
              <div class="rows" data-mobile-ticker-rows>
                <div class="empty">尚無訊息</div>
              </div>
              <a href="#/messages" class="more">查看全部 →</a>
            </section>

            <!-- Big actions -->
            <section class="admin-mobile-actions">
              <button type="button" class="card is-primary" data-mobile-action="poll-start">
                <div class="icon">📊</div>
                <div class="lbl">啟動投票</div>
                <div class="sub">前往投票管理</div>
              </button>
              <div class="card is-amber is-placeholder" role="note">
                <div class="icon">★</div>
                <div class="lbl">釘選一則</div>
                <div class="sub">[PLACEHOLDER] 待 BE</div>
              </div>
              <button type="button" class="card" data-mobile-action="pause">
                <div class="icon">⏸</div>
                <div class="lbl" data-mobile-pause-label>暫停接收</div>
                <div class="sub">慢動作模式</div>
              </button>
              <div class="card is-placeholder" role="note">
                <div class="icon">🚫</div>
                <div class="lbl">清空螢幕</div>
                <div class="sub">[PLACEHOLDER] 待 BE</div>
              </div>
            </section>

            <!-- Live stats -->
            <section class="admin-mobile-stats">
              <div class="kicker">即時數據</div>
              <div class="grid">
                <div class="kpi"><div class="k">連線</div><div class="v" data-mobile-stat-conn>—</div></div>
                <div class="kpi"><div class="k">訊息/min</div><div class="v is-good" data-mobile-stat-rate>—</div></div>
                <div class="kpi"><div class="k">已遮罩</div><div class="v is-warn" data-mobile-stat-masked>—</div></div>
              </div>
            </section>

            <!-- Quick toggles -->
            <section class="admin-mobile-toggles">
              <div class="kicker">快速開關</div>
              ${TOGGLES.map(function (t) {
                return `
                  <div class="toggle-row is-placeholder" data-mobile-toggle="${escapeHtml(t.id)}">
                    <span class="lbl">${escapeHtml(t.label)}</span>
                    <span class="switch ${t.on ? "is-on" : ""}" aria-pressed="${t.on}"></span>
                  </div>`;
              }).join("")}
            </section>
          </div>

          <!-- Bottom tab bar -->
          <nav class="admin-mobile-tabbar">
            <a href="#/dashboard" class="tab is-active"><span class="ic">⌂</span><span class="lb">控制台</span></a>
            <a href="#/polls" class="tab"><span class="ic">✦</span><span class="lb">投票</span></a>
            <a href="#/messages" class="tab"><span class="ic">≡</span><span class="lb">訊息</span></a>
            <a href="#/notifications" class="tab"><span class="ic">⚑</span><span class="lb">通知</span></a>
            <a href="#/about" class="tab"><span class="ic">⋯</span><span class="lb">更多</span></a>
          </nav>

          <!-- Home indicator -->
          <div class="admin-mobile-home"></div>
        </div>
      </div>`;
  }

  // ── data ─────────────────────────────────────────────────────────

  async function _fetchMetrics() {
    try {
      const r = await fetch("/admin/metrics", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      _state.metrics = data;
      _renderMetrics();
    } catch (_) { /* silent */ }
  }

  function _renderMetrics() {
    const m = _state.metrics || {};
    const conn = Number(m.ws_clients) || 0;
    const set = function (sel, v) { const el = document.querySelector(sel); if (el) el.textContent = String(v); };
    set("[data-mobile-stat-conn]", conn);
    // msgs/min from telemetry series if present
    let rate = "—";
    if (m.msg_rate_per_minute != null) rate = String(Math.round(Number(m.msg_rate_per_minute)));
    else if (Array.isArray(m.msg_rate_history) && m.msg_rate_history.length) rate = String(m.msg_rate_history[m.msg_rate_history.length - 1]);
    set("[data-mobile-stat-rate]", rate);
    set("[data-mobile-rate]", "● " + rate + "/min");

    const masked = Number(m.recent_violations && m.recent_violations.length) || 0;
    set("[data-mobile-stat-masked]", masked);

    const startedAt = Number(m.server_started_at) || 0;
    const elapsed = startedAt ? _shortDuration(Date.now() / 1000 - startedAt) : "—";
    const subEl = document.querySelector("[data-mobile-event-sub]");
    if (subEl) subEl.textContent = "● " + conn + " viewers · " + elapsed + " elapsed";
  }

  function _shortDuration(sec) {
    if (!sec || sec < 0) return "—";
    const m = Math.floor(sec / 60);
    const h = Math.floor(m / 60);
    if (h > 0) return h + "h " + (m % 60) + "m";
    return m + "m";
  }

  function _renderTicker() {
    const rows = document.querySelector("[data-mobile-ticker-rows]");
    if (!rows) return;
    let entries = [];
    if (window.AdminLiveFeed && typeof window.AdminLiveFeed.getEntries === "function") {
      entries = window.AdminLiveFeed.getEntries();
    }
    // Newest 3 (entries are oldest-first → take from end)
    const latest = entries.slice(-3).reverse();
    if (latest.length === 0) {
      rows.innerHTML = '<div class="empty">尚無訊息</div>';
      return;
    }
    rows.innerHTML = latest.map(function (e, i) {
      const d = e.data || {};
      const nick = d.nickname || "匿名";
      const text = (d.text || "").slice(0, 40);
      const t = _shortTime(e.ts);
      const color = d.color || "#94a3b8";
      return `
        <div class="row${i > 0 ? " has-sep" : ""}">
          <span class="dot" style="background:${escapeHtml(color)}"></span>
          <span class="nick">${escapeHtml(nick)}</span>
          <span class="msg">${escapeHtml(text)}</span>
          <span class="t">${escapeHtml(t)}</span>
        </div>`;
    }).join("");
  }

  function _setTime() {
    const el = document.querySelector("[data-mobile-time]");
    if (!el) return;
    const d = new Date();
    el.textContent = String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  }

  // ── handlers ─────────────────────────────────────────────────────

  function _bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    page.addEventListener("click", function (e) {
      const action = e.target.closest("[data-mobile-action]");
      if (action) {
        const a = action.dataset.mobileAction;
        if (a === "poll-start") { location.hash = "#/polls"; }
        else if (a === "pause") { _toggleBroadcast(); }
        return;
      }
    });
  }

  async function _toggleBroadcast() {
    try {
      // Read current state from admin.js global if available
      const isLive = !!window.AdminDashboard?._broadcasting || !!_state.broadcasting;
      const target = isLive ? "standby" : "live";
      const r = await window.csrfFetch("/admin/broadcast/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: target }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      _state.broadcasting = target === "live";
      const lblEl = document.querySelector("[data-mobile-pause-label]");
      if (lblEl) lblEl.textContent = _state.broadcasting ? "暫停接收" : "恢復接收";
      window.showToast && window.showToast("廣播已切到 " + target.toUpperCase(), true);
    } catch (e) {
      window.showToast && window.showToast("切換失敗：" + (e.message || ""), false);
    }
  }

  function _syncVisibility() {
    const route = document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf || "dashboard";
    const onPage = route === "mobile";
    if (onPage) {
      _setTime();
      _fetchMetrics();
      _renderTicker();
      if (!_state.refreshTimer) {
        _state.refreshTimer = setInterval(function () {
          _setTime();
          _fetchMetrics();
          _renderTicker();
        }, 5000);
      }
    } else if (_state.refreshTimer) {
      clearInterval(_state.refreshTimer);
      _state.refreshTimer = 0;
    }
  }

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", buildSection());
    _bind();
    _setTime();
    _fetchMetrics();
    _renderTicker();
    _syncVisibility();
    window.addEventListener("hashchange", _syncVisibility);
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!(window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in)) return;
    const observer = new MutationObserver(function () {
      if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true, subtree: true,
    });
    if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
      init();
    }
  });
})();
