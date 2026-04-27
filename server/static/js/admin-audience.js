/**
 * Admin · Audience List (P3 Group B, 2026-04-27).
 *
 * Mirrors docs/designs/design-v2/components/admin-batch7.jsx
 * AdminAudiencePage. Adapted to our data model — drops 3 prototype
 * columns that don't fit (per scope-out doc):
 *
 *   ❌ GEO / "TW · Taipei"        — no GeoIP service (scope-out §D)
 *   ❌ 出席場次數                  — sessions entity scope-out (§A)
 *   ❌ SCORE 0-100                 — no scoring model
 *
 * Real data from GET /admin/fingerprints (existing endpoint):
 *   ✓ Avatar (derived from nickname + fp hash)
 *   ✓ Nickname + FP short
 *   ✓ IP (last seen)
 *   ✓ UA (last seen)
 *   ✓ JOINED (first_seen relative)
 *   ✓ MSGS (message_count)
 *   ✓ STATUS (active / flagged / blocked + extension chip if Slido fp)
 *   ✓ ACTIONS (ban via existing /admin/live/block)
 *
 * The prototype's right detail panel (high-risk inspection with action
 * buttons) is deferred — for v1 the row-click action is direct ban.
 *
 * Loaded as <script defer> in admin.html.
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-audience-overview";
  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  const STATE_META = {
    active:    { color: "#86efac", label: "ACTIVE" },
    flagged:   { color: "#fbbf24", label: "FLAGGED" },
    blocked:   { color: "#f87171", label: "BLOCKED" },
    duplicate: { color: "#fbbf24", label: "DUPLICATE" },
    extension: { color: "var(--color-primary, #38bdf8)", label: "EXTENSION" },
    idle:      { color: "var(--color-text-muted, #94a3b8)", label: "IDLE" },
  };

  // Pseudo-random color per fingerprint (stable across reloads)
  const AVATAR_COLORS = ["#7c3aed", "#06b6d4", "#84cc16", "#f97316", "#ef4444", "#fbbf24", "#22d3ee", "#a78bfa", "#fb7185"];

  let _state = {
    records: [],
    filter: "all",
    refreshTimer: 0,
  };

  function _hashColor(fp) {
    if (!fp) return AVATAR_COLORS[0];
    let h = 0;
    for (let i = 0; i < fp.length; i++) h = (h * 31 + fp.charCodeAt(i)) >>> 0;
    return AVATAR_COLORS[h % AVATAR_COLORS.length];
  }

  function _humanDelta(ts) {
    if (!ts) return "—";
    const t = typeof ts === "number" ? ts * 1000 : new Date(ts).getTime();
    if (!t) return "—";
    const sec = Math.max(0, (Date.now() - t) / 1000);
    if (sec < 60) return Math.floor(sec) + "s";
    if (sec < 3600) return Math.floor(sec / 60) + "m";
    if (sec < 86400) return Math.floor(sec / 3600) + "h";
    return Math.floor(sec / 86400) + "d";
  }

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-audience-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">AUDIENCE · 觀眾列表</div>
          <div class="admin-v2-title">觀眾</div>
          <p class="admin-v2-note">即時連線觀眾的指紋聚合，按 message_count 排序。資料來源：fingerprint_tracker（in-memory）。</p>
        </div>

        <div class="admin-aud-grid">
          <div class="admin-aud-stats" data-aud-stats></div>

          <div class="admin-aud-table-wrap">
            <div class="admin-aud-toolbar">
              <span class="admin-aud-summary" data-aud-summary>讀取中…</span>
              <span class="admin-aud-filters" data-aud-filters></span>
              <button type="button" class="admin-aud-refresh" data-aud-action="refresh">↻</button>
            </div>
            <div class="admin-aud-list" data-aud-list>
              <div class="admin-aud-loading">載入觀眾列表中…</div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function _filteredRecords() {
    const records = _state.records.slice().sort(function (a, b) {
      return (Number(b.message_count) || 0) - (Number(a.message_count) || 0);
    });
    if (_state.filter === "all") return records;
    if (_state.filter === "flagged") return records.filter(function (r) { return r.state === "flagged" || r.state === "blocked"; });
    if (_state.filter === "extension") return records.filter(function (r) {
      return r.fingerprint && (r.fingerprint.indexOf("slido") === 0 || r.fingerprint.indexOf("ext_") === 0);
    });
    return records;
  }

  function _renderStats() {
    const stats = document.querySelector("[data-aud-stats]");
    if (!stats) return;
    const records = _state.records;
    const total = records.length;
    const flagged = records.filter(function (r) { return r.state === "flagged"; }).length;
    const blocked = records.filter(function (r) { return r.state === "blocked"; }).length;
    const totalMsgs = records.reduce(function (s, r) { return s + (Number(r.message_count) || 0); }, 0);
    const activeFiveMin = records.filter(function (r) {
      const t = r.last_seen;
      if (!t) return false;
      const ms = typeof t === "number" ? t * 1000 : new Date(t).getTime();
      return (Date.now() - ms) / 1000 < 300;
    }).length;
    stats.innerHTML = `
      <div class="admin-aud-stat"><div class="k">當前指紋</div><div class="v">${total}</div></div>
      <div class="admin-aud-stat"><div class="k">5min 活躍</div><div class="v" style="color:#86efac">${activeFiveMin}</div></div>
      <div class="admin-aud-stat"><div class="k">總訊息</div><div class="v" style="color:var(--color-primary, #38bdf8)">${totalMsgs}</div></div>
      <div class="admin-aud-stat"><div class="k">已標記</div><div class="v" style="color:#fbbf24">${flagged}</div></div>
      <div class="admin-aud-stat"><div class="k">已封禁</div><div class="v" style="color:#f87171">${blocked}</div></div>`;
  }

  function _renderFilters() {
    const filters = document.querySelector("[data-aud-filters]");
    if (!filters) return;
    const total = _state.records.length;
    const flagCount = _state.records.filter(function (r) { return r.state === "flagged" || r.state === "blocked"; }).length;
    filters.innerHTML = `
      <button type="button" class="chip ${_state.filter === "all" ? "is-active" : ""}" data-aud-filter="all">全部 ${total}</button>
      <button type="button" class="chip ${_state.filter === "flagged" ? "is-active" : ""}" data-aud-filter="flagged">標記 ${flagCount}</button>`;
  }

  function _renderList() {
    const list = document.querySelector("[data-aud-list]");
    const summary = document.querySelector("[data-aud-summary]");
    if (!list) return;
    const records = _filteredRecords();
    if (summary) summary.textContent = "顯示 " + records.length + " 筆";
    if (records.length === 0) {
      list.innerHTML = `
        <div class="admin-aud-empty">
          <div class="t">沒有觀眾資料</div>
          <div class="s">當有觀眾發送訊息或連線時會在這裡聚合。</div>
        </div>`;
      return;
    }
    const headerHtml = `
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">NICK · FP</span>
        <span class="col col-ip">IP · UA</span>
        <span class="col col-joined">JOINED</span>
        <span class="col col-msgs">MSGS</span>
        <span class="col col-status">STATUS</span>
        <span class="col col-actions">ACTIONS</span>
      </div>`;
    const rowsHtml = records.map(function (r) {
      const fp = r.fingerprint || "—";
      const fpShort = fp === "—" ? "—" : "fp:" + fp.slice(0, 8);
      const nick = r.nickname || "匿名";
      const initial = nick === "匿名" ? "?" : nick.slice(0, 1);
      const color = _hashColor(fp);
      const ip = r.ip || "—";
      const ua = (r.ua || "").slice(0, 30) || "—";
      const joined = _humanDelta(r.first_seen);
      const msgs = Number(r.message_count) || 0;
      const stateKey = r.state || "active";
      const stateMeta = STATE_META[stateKey] || STATE_META.active;
      return `
        <div class="admin-aud-row" data-aud-row data-aud-fp="${escapeHtml(fp)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${color}">${escapeHtml(initial)}</span>
          </span>
          <span class="col col-nick">
            <div class="nick">${escapeHtml(nick)}</div>
            <div class="fp">${escapeHtml(fpShort)}</div>
          </span>
          <span class="col col-ip">
            <div class="ip">${escapeHtml(ip)}</div>
            <div class="ua">${escapeHtml(ua)}</div>
          </span>
          <span class="col col-joined">${escapeHtml(joined)}</span>
          <span class="col col-msgs">${msgs}</span>
          <span class="col col-status">
            <span class="chip" style="color:${stateMeta.color};border-color:${stateMeta.color}55;background:${stateMeta.color}1c;">${escapeHtml(stateMeta.label)}</span>
          </span>
          <span class="col col-actions">
            <button type="button" class="admin-aud-action" data-aud-action="ban" data-aud-fp="${escapeHtml(fp)}">ban</button>
          </span>
        </div>`;
    }).join("");
    list.innerHTML = headerHtml + rowsHtml;
  }

  // ── data ─────────────────────────────────────────────────────────

  async function _fetch() {
    try {
      const r = await fetch("/admin/fingerprints?limit=500", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      _state.records = Array.isArray(data.records) ? data.records : [];
      _renderStats();
      _renderFilters();
      _renderList();
    } catch (_) { /* silent */ }
  }

  async function _ban(fp) {
    if (!fp || fp === "—") return;
    if (!confirm("確定封禁指紋 fp:" + fp.slice(0, 8) + "？該指紋之後在本場發出的訊息會自動遮罩。")) return;
    try {
      const r = await window.csrfFetch("/admin/live/block", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "fingerprint", value: fp }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      window.showToast && window.showToast("已封禁 fp:" + fp.slice(0, 8), true);
      _fetch();
    } catch (e) {
      window.showToast && window.showToast("封禁失敗：" + (e.message || ""), false);
    }
  }

  // ── handlers ─────────────────────────────────────────────────────

  function _bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    page.addEventListener("click", function (e) {
      const filter = e.target.closest("[data-aud-filter]");
      if (filter) {
        _state.filter = filter.dataset.audFilter;
        _renderFilters();
        _renderList();
        return;
      }
      const ban = e.target.closest("[data-aud-action='ban']");
      if (ban) {
        e.stopPropagation();
        _ban(ban.dataset.audFp);
        return;
      }
      const refresh = e.target.closest("[data-aud-action='refresh']");
      if (refresh) {
        _fetch();
        return;
      }
    });
  }

  function _syncVisibility() {
    const route = document.querySelector(".admin-dash-grid")?.dataset?.activeRoute || "dashboard";
    const onPage = route === "audience";
    if (onPage) {
      _fetch();
      if (!_state.refreshTimer) _state.refreshTimer = setInterval(_fetch, 15000);
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
    _fetch();
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
