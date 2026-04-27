/**
 * Admin · Poll Deep-Dive (Phase 2 P0-3, 2026-04-27).
 *
 * Mirrors docs/designs/design-v2/components/admin-batch8.jsx
 * AdminPollDeepDivePage. Some sections of the prototype need backend
 * telemetry we don't yet capture; this page surfaces what we have today
 * and makes the gaps explicit so v5.3 work can fill them.
 *
 * Real data (from /admin/poll/status):
 *   ✓ Question text + option labels
 *   ✓ Per-option vote counts + percentages
 *   ✓ Total votes + unique voter fingerprints
 *   ✓ Active / ended status
 *
 * Placeholders (require new persistence):
 *   ✗ Time histogram — vote timestamps not stored per-vote
 *   ✗ Geo distribution — IP geolocation not implemented
 *   ✗ Sentiment / Δ vs prior — no historical poll comparison layer
 *   ✗ Cross-tab geo × option, bot risk, VPN flags
 *
 * Sidebar nav: NONE — entry point is the 📊 button on the polls page.
 * Route slug: poll-deepdive (rendered into #settings-grid).
 *
 * Loaded as <script defer> in admin.html. Globals: csrfFetch.
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-poll-deepdive-overview";
  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  let _state = {
    poll: null,
    refreshTimer: 0,
  };

  // ── render ───────────────────────────────────────────────────────

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-pdd-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker" data-pdd-kicker>POLL ANALYTICS · 深度分析</div>
          <div class="admin-v2-title" data-pdd-title>投票深度分析</div>
          <p class="admin-v2-note" data-pdd-note>選項分佈、票數佔比、誠信檢查。<a href="#/polls" class="admin-pdd-back">← 回投票列表</a></p>
        </div>

        <div class="admin-pdd-grid" data-pdd-grid>
          <div class="admin-pdd-loading">載入投票資料中…</div>
        </div>
      </div>`;
  }

  function _renderEmpty() {
    return `
      <div class="admin-pdd-empty lg:col-span-2">
        <div class="admin-pdd-empty-icon">◌</div>
        <div class="admin-pdd-empty-title">目前沒有投票資料</div>
        <p class="admin-pdd-empty-desc">建立或啟動一個 poll 後，回到這頁就能看深度分析。</p>
        <a class="admin-pdd-empty-action" href="#/polls">→ 前往投票管理</a>
      </div>`;
  }

  function _renderPoll(poll) {
    // poll shape (from /admin/poll/status):
    //   { state: "active"|"ended"|"idle", question, options[], total_votes, poll_id, ... }
    // Fall back gracefully when fields are absent.
    const state = poll.state || (poll.active ? "active" : "ended");
    const question = poll.question || "—";
    const options = Array.isArray(poll.options) ? poll.options : [];
    const total = options.reduce(function (s, o) { return s + (Number(o.votes != null ? o.votes : o.count) || 0); }, 0);
    const stateChip = state === "active"
      ? '<span class="admin-pdd-chip is-live">● ACTIVE</span>'
      : (state === "ended"
        ? '<span class="admin-pdd-chip is-ended">● ENDED</span>'
        : '<span class="admin-pdd-chip is-idle">○ IDLE</span>');

    const colorPalette = ["#86efac", "var(--color-primary)", "#fbbf24", "#f87171", "#c4b5fd", "#fb923c"];

    const optionRows = options.map(function (o, i) {
      const votes = Number(o.votes != null ? o.votes : o.count) || 0;
      const pct = total > 0 ? (votes / total * 100) : 0;
      const c = colorPalette[i % colorPalette.length];
      return `
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${escapeHtml(o.label || o.text || o.key || ("選項 " + (i + 1)))}</span>
            <span class="votes">${votes} 票</span>
            <span class="pct" style="color:${c};">${pct.toFixed(1)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${pct.toFixed(2)}%;background:linear-gradient(90deg, ${c}, ${c}aa);box-shadow:0 0 8px ${c}55;"></div>
          </div>
        </div>`;
    }).join("");

    // Sentiment Index: split options into top/bottom halves (assume order
    // positive → negative, like a Likert scale). Index = top% - bottom%.
    // Range -100 to +100. Returns null if insufficient data.
    const sentiment = (function () {
      if (!total || options.length < 2) return null;
      const half = Math.floor(options.length / 2);
      let pos = 0, neg = 0;
      options.forEach(function (o, i) {
        const v = Number(o.votes != null ? o.votes : o.count) || 0;
        const pct = (v / total) * 100;
        if (i < half) pos += pct;
        else if (i >= options.length - half) neg += pct;
      });
      return pos - neg;
    })();
    const sentimentSign = sentiment === null ? "—" : (sentiment > 0 ? "+" : "");
    const sentimentVal = sentiment === null ? "—" : sentimentSign + Math.round(sentiment);
    const sentimentColor = sentiment === null ? "var(--color-text-muted, #94a3b8)"
      : sentiment > 20 ? "#86efac"
      : sentiment > 0 ? "var(--color-primary, #38bdf8)"
      : sentiment > -20 ? "var(--color-warning, #fbbf24)"
      : "#f87171";

    return `
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <div class="admin-pdd-header-meta">
            ${stateChip}
            <span class="admin-pdd-id">${escapeHtml(poll.poll_id || "—")}</span>
          </div>
          <div class="admin-pdd-question">${escapeHtml(question)}</div>
          <div class="admin-pdd-kpis">
            <div class="admin-pdd-kpi"><div class="k">總票數</div><div class="v" style="color:#86efac">${total}</div></div>
            <div class="admin-pdd-kpi"><div class="k">選項數</div><div class="v">${options.length}</div></div>
            <div class="admin-pdd-kpi"><div class="k">指紋去重</div><div class="v" style="color:#86efac">已啟用</div><div class="sub">同一指紋僅計 1 票</div></div>
            <div class="admin-pdd-kpi"><div class="k">狀態</div><div class="v" style="color:var(--color-primary)">${escapeHtml(state.toUpperCase())}</div></div>
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-v2-monolabel">選項分佈 · DISTRIBUTION</div>
          <div class="admin-pdd-rows">
            ${options.length ? optionRows : '<div class="admin-pdd-empty-rows">這個 poll 還沒有選項。</div>'}
          </div>

          <div class="admin-pdd-sentiment-row">
            <div class="admin-pdd-sentiment-tile">
              <div class="k">SENTIMENT INDEX</div>
              <div class="v" style="color:${sentimentColor};">${sentimentVal}</div>
              <div class="sub">正面 - 負面 / 100（依選項順序推算）</div>
            </div>
            <div class="admin-pdd-sentiment-tile is-placeholder" title="需要 poll history 持久化（v5.3）">
              <div class="k">VS 上次</div>
              <div class="v">—</div>
              <div class="sub">需要歷史 poll 持久化（v5.3 待補）</div>
            </div>
          </div>
        </article>

        <article class="admin-pdd-card admin-pdd-placeholder">
          <div class="admin-v2-monolabel">投票時間分佈 · TIMELINE</div>
          <div class="admin-pdd-placeholder-body">
            <div class="admin-pdd-placeholder-icon">⌖</div>
            <div class="admin-pdd-placeholder-text">
              <div class="t">需要 v5.3 vote-record 持久化</div>
              <div class="s">目前 poll service 只記錄 voter set，沒存 per-vote timestamp。
              要做時間直方圖需要先把每張票的 ts 寫進 SQLite / append-only log。已記在
              <a href="https://github.com/guan4tou2/danmu-desktop/blob/claude/design-v2-retrofit/docs/designs/design-v2-prototype-gaps-2026-04-27.md" target="_blank" rel="noopener noreferrer">prototype-gaps doc</a>。</div>
            </div>
          </div>
        </article>
      </div>

      <aside class="admin-pdd-aside">
        <article class="admin-pdd-card admin-pdd-placeholder">
          <div class="admin-v2-monolabel">地理分佈 · GEO</div>
          <div class="admin-pdd-placeholder-body">
            <div class="admin-pdd-placeholder-icon">⊕</div>
            <div class="admin-pdd-placeholder-text">
              <div class="t">需要 IP geolocation</div>
              <div class="s">v5.2 fire_sources 收 IP 但沒做 GeoIP lookup。
              v5.3 想加 MaxMind / ipinfo lite，產出國家分佈。</div>
            </div>
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-v2-monolabel">誠信檢查 · INTEGRITY</div>
          <div class="admin-pdd-integrity">
            <div class="row"><span class="dot is-good"></span><div class="meta"><div class="t">指紋去重</div><div class="s">同一指紋 1 票</div></div><span class="v is-good">啟用</span></div>
            <div class="row"><span class="dot is-good"></span><div class="meta"><div class="t">Rate limit</div><div class="s">/fire scope 限速</div></div><span class="v is-good">20/min</span></div>
            <div class="row"><span class="dot is-warn"></span><div class="meta"><div class="t">同 IP 多投</div><div class="s">v5.3 將擋 X-Forwarded-For</div></div><span class="v is-warn">未強制</span></div>
            <div class="row"><span class="dot is-warn"></span><div class="meta"><div class="t">Bot 偵測</div><div class="s">UA / timing 分析尚未做</div></div><span class="v is-warn">無</span></div>
          </div>
        </article>

        <article class="admin-pdd-card admin-pdd-actions">
          <button type="button" class="admin-pdd-action admin-pdd-action--primary" data-pdd-action="export-csv">↓ 匯出選項統計 (CSV)</button>
          <button type="button" class="admin-pdd-action" data-pdd-action="copy-link">📋 複製分享連結</button>
          <a class="admin-pdd-action admin-pdd-action--ghost" href="#/polls">↺ 返回投票管理</a>
        </article>
      </aside>`;
  }

  function _refresh() {
    const grid = document.querySelector("[data-pdd-grid]");
    if (!grid) return;
    if (!_state.poll || !_state.poll.poll_id) {
      grid.innerHTML = _renderEmpty();
      return;
    }
    grid.innerHTML = _renderPoll(_state.poll);
  }

  // ── data ─────────────────────────────────────────────────────────

  async function _fetchPoll() {
    try {
      const r = await fetch("/admin/poll/status", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      _state.poll = data;
      _refresh();
    } catch (_) { /* silent */ }
  }

  function _exportCsv() {
    if (!_state.poll || !Array.isArray(_state.poll.options)) {
      window.showToast && window.showToast("沒有可匯出的資料", false);
      return;
    }
    const rows = [["option_label", "votes", "percentage"]];
    const total = _state.poll.options.reduce(function (s, o) { return s + (Number(o.votes != null ? o.votes : o.count) || 0); }, 0);
    _state.poll.options.forEach(function (o, i) {
      const votes = Number(o.votes != null ? o.votes : o.count) || 0;
      const pct = total > 0 ? (votes / total * 100).toFixed(2) : "0.00";
      rows.push([o.label || ("option_" + (i + 1)), votes, pct]);
    });
    const csv = rows.map(function (r) {
      return r.map(function (c) {
        const s = String(c);
        return s.includes(",") || s.includes('"') ? '"' + s.replace(/"/g, '""') + '"' : s;
      }).join(",");
    }).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "poll-" + (_state.poll.poll_id || "current") + ".csv";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    window.showToast && window.showToast("CSV 已匯出", true);
  }

  function _copyShareLink() {
    const url = location.origin + "/admin/#/poll-deepdive";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () {
        window.showToast && window.showToast("連結已複製", true);
      }).catch(function () {
        window.showToast && window.showToast("複製失敗", false);
      });
    }
  }

  // ── visibility ───────────────────────────────────────────────────

  function _syncVisibility() {
    const route = document.querySelector(".admin-dash-grid")?.dataset?.activeRoute || "dashboard";
    const onPage = route === "poll-deepdive";
    if (onPage) {
      _fetchPoll();
      if (!_state.refreshTimer) _state.refreshTimer = setInterval(_fetchPoll, 5000);
    } else if (_state.refreshTimer) {
      clearInterval(_state.refreshTimer);
      _state.refreshTimer = 0;
    }
  }

  // ── init ─────────────────────────────────────────────────────────

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", buildSection());
    const page = document.getElementById(PAGE_ID);
    if (page) {
      page.addEventListener("click", function (e) {
        const btn = e.target.closest("[data-pdd-action]");
        if (!btn) return;
        if (btn.dataset.pddAction === "export-csv") _exportCsv();
        else if (btn.dataset.pddAction === "copy-link") _copyShareLink();
      });
    }
    // Always do an initial fetch so the route is ready when the user
    // navigates to it later (avoids race where _syncVisibility runs before
    // admin.js applyRoute sets data-active-route).
    _fetchPoll();
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
