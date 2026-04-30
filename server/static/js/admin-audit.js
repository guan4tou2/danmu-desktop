/**
 * Admin · Audit Log (P1, 2026-04-27).
 *
 * Persistent cross-restart event trail. Backed by services/audit_log.py
 * (append-only JSON-lines at runtime/audit.log, 2 MiB rotation cap).
 *
 * Sources currently emitted (from server side):
 *   - fire_token: rotated / revoked / toggled
 *   - auth:       login / login_failed / logout / password_changed
 *   - broadcast:  mode_changed
 *   (more sources can be added by importing services.audit_log and
 *    calling audit_log.append(source, kind, actor=, meta=) — no FE changes.)
 *
 * Differences vs Notifications Inbox:
 *   - Audit Log is read-only history, persisted on disk, no read/archive
 *     state — it's the durable record.
 *   - Notifications is the "things that need your attention right now",
 *     localStorage-backed, can be marked read / archived.
 *
 * Loaded as <script defer> in admin.html.
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-audit-overview";
  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  const SOURCE_META = {
    auth:       { label: "Auth",       color: "var(--color-primary, #38bdf8)" },
    fire_token: { label: "Fire Token", color: "#86efac" },
    broadcast:  { label: "Broadcast",  color: "var(--color-warning, #fbbf24)" },
  };

  let _state = {
    events: [],
    actions: [],
    actors: [],
    filterAction: "all",
    filterActor: "all",
    filterTime: "24h",
    refreshTimer: 0,
  };

  // ── render ───────────────────────────────────────────────────────

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-audit-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">AUDIT LOG · 持久事件紀錄</div>
          <div class="admin-v2-title">審計日誌</div>
          <p class="admin-v2-note">跨重啟保留的事件紀錄，存在 <code>server/runtime/audit.log</code>（append-only JSON-lines，2 MiB 自動 rotate 到 <code>.1</code>）。</p>
        </div>

        <div class="admin-audit-grid">
          <aside class="admin-audit-filters">
            <div class="admin-v2-monolabel admin-audit-label-top">動作 · ACTION</div>
            <div class="admin-audit-source-list" data-audit-actions>
              <button type="button" class="admin-audit-src is-active" data-audit-action-filter="all">全部<span class="cnt">—</span></button>
            </div>

            <div class="admin-v2-monolabel admin-audit-label-top">執行者 · ACTOR</div>
            <div class="admin-audit-source-list" data-audit-actors>
              <button type="button" class="admin-audit-src is-active" data-audit-actor-filter="all">全部<span class="cnt">—</span></button>
            </div>

            <div class="admin-v2-monolabel admin-audit-label-top">時段 · RANGE</div>
            <div class="admin-audit-source-list" data-audit-time>
              <button type="button" class="admin-audit-src is-active" data-audit-time-filter="24h">近 24 小時<span class="cnt">●</span></button>
              <button type="button" class="admin-audit-src" data-audit-time-filter="7d">近 7 天<span class="cnt">○</span></button>
              <button type="button" class="admin-audit-src" data-audit-time-filter="30d">近 30 天<span class="cnt">○</span></button>
              <button type="button" class="admin-audit-src" data-audit-time-filter="custom">自訂…<span class="cnt">□</span></button>
            </div>

            <div class="admin-audit-tip">
              <span class="kicker">提示</span>
              審計紀錄為 read-only 歷史；要操作 / 標記請看 <a href="#/notifications">通知</a> 頁。<br/>
              <br/>
              超過 2 MiB 會 rotate 一次到 <code>audit.log.1</code>；要長期保留建議用 cron 同步到 S3 / SIEM。
            </div>
          </aside>

          <main class="admin-audit-main">
            <div class="admin-audit-toolbar">
              <span class="admin-audit-summary" data-audit-summary>讀取中…</span>
              <span class="admin-audit-actions">
                <button type="button" class="admin-audit-action" data-audit-action="export">↓ 匯出 JSON</button>
                <button type="button" class="admin-audit-action" data-audit-action="refresh">↻ 重新整理</button>
              </span>
            </div>
            <div class="admin-audit-table-wrap">
              <table class="admin-audit-table">
                <thead>
                  <tr>
                    <th class="col-ts">時間</th>
                    <th class="col-src">來源</th>
                    <th class="col-kind">事件</th>
                    <th class="col-actor">執行者</th>
                    <th class="col-meta">META</th>
                  </tr>
                </thead>
                <tbody data-audit-rows>
                  <tr><td colspan="5" class="admin-audit-loading">載入中…</td></tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>`;
  }

  function _formatTs(ts) {
    if (!ts) return "—";
    try {
      const d = new Date(ts * 1000);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      return `${y}-${m}-${dd} ${hh}:${mm}:${ss}`;
    } catch (_) { return "—"; }
  }

  function _matchesAction(event, action) {
    return action === "all" || String(event.action || event.kind || "").toLowerCase() === String(action || "").toLowerCase();
  }

  function _matchesActor(event, actor) {
    return actor === "all" || String(event.actor || "") === actor;
  }

  function _matchesTime(event, spanKey) {
    if (!event || !event.ts) return false;
    if (spanKey === "custom") return true;
    const nowSec = Date.now() / 1000;
    const delta = nowSec - Number(event.ts);
    if (spanKey === "24h") return delta <= 24 * 3600;
    if (spanKey === "7d") return delta <= 7 * 24 * 3600;
    if (spanKey === "30d") return delta <= 30 * 24 * 3600;
    return true;
  }

  function _filteredEvents() {
    return _state.events.filter(function (e) {
      return _matchesAction(e, _state.filterAction)
        && _matchesActor(e, _state.filterActor)
        && _matchesTime(e, _state.filterTime);
    });
  }

  function _renderRows() {
    const tbody = document.querySelector("[data-audit-rows]");
    if (!tbody) return;
    const events = _filteredEvents();
    if (events.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" class="admin-audit-empty">沒有符合條件的紀錄。</td></tr>`;
      return;
    }
    tbody.innerHTML = events.map(function (e) {
      const meta = SOURCE_META[e.source] || { label: e.source, color: "var(--color-text-muted)" };
      const metaJson = JSON.stringify(e.meta || {});
      const beforeAfter = (e.before !== null && e.before !== undefined) || (e.after !== null && e.after !== undefined)
        ? `before: ${JSON.stringify(e.before)} -> after: ${JSON.stringify(e.after)}`
        : "";
      const metaText = metaJson === "{}" ? (beforeAfter || "—") : [beforeAfter, metaJson].filter(Boolean).join(" · ");
      return `
        <tr class="admin-audit-row">
          <td class="col-ts">${escapeHtml(_formatTs(e.ts))}</td>
          <td class="col-src">
            <span class="admin-audit-src-chip" style="color:${meta.color};border-color:${meta.color}55;background:${meta.color}1c;">${escapeHtml(meta.label)}</span>
          </td>
          <td class="col-kind">${escapeHtml(e.kind || "—")}</td>
          <td class="col-actor">${escapeHtml(e.actor || "—")}</td>
          <td class="col-meta"><code>${escapeHtml(metaText)}</code></td>
        </tr>`;
    }).join("");
  }

  function _renderActions() {
    const list = document.querySelector("[data-audit-actions]");
    if (!list) return;
    const countScope = _state.events.filter(function (e) {
      return _matchesActor(e, _state.filterActor) && _matchesTime(e, _state.filterTime);
    });
    const allBtn = `<button type="button" class="admin-audit-src ${_state.filterAction === "all" ? "is-active" : ""}" data-audit-action-filter="all">全部<span class="cnt">${countScope.length}</span></button>`;
    const actionButtons = (_state.actions || []).map(function (actionKey) {
      const normalized = String(actionKey || "").toLowerCase();
      const cnt = countScope.filter(function (e) {
        return String(e.action || e.kind || "").toLowerCase() === normalized;
      }).length;
      const active = _state.filterAction === normalized;
      return `<button type="button" class="admin-audit-src ${active ? "is-active" : ""}" data-audit-action-filter="${escapeHtml(normalized)}">${escapeHtml(normalized.toUpperCase())}<span class="cnt">${cnt}</span></button>`;
    }).join("");
    list.innerHTML = allBtn + actionButtons;
  }

  function _renderActors() {
    const list = document.querySelector("[data-audit-actors]");
    if (!list) return;
    const countScope = _state.events.filter(function (e) {
      return _matchesAction(e, _state.filterAction) && _matchesTime(e, _state.filterTime);
    });
    const allBtn = `<button type="button" class="admin-audit-src ${_state.filterActor === "all" ? "is-active" : ""}" data-audit-actor-filter="all">全部<span class="cnt">${countScope.length}</span></button>`;
    const actorButtons = (_state.actors || []).map(function (actor) {
      const cnt = countScope.filter(function (e) { return String(e.actor || "") === actor; }).length;
      const active = _state.filterActor === actor;
      return `<button type="button" class="admin-audit-src ${active ? "is-active" : ""}" data-audit-actor-filter="${escapeHtml(actor)}">${escapeHtml(actor)}<span class="cnt">${cnt}</span></button>`;
    }).join("");
    list.innerHTML = allBtn + actorButtons;
  }

  function _renderTime() {
    const root = document.querySelector("[data-audit-time]");
    if (!root) return;
    root.querySelectorAll("[data-audit-time-filter]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.auditTimeFilter === _state.filterTime);
    });
  }

  function _renderSummary() {
    const summary = document.querySelector("[data-audit-summary]");
    if (!summary) return;
    const filtered = _filteredEvents().length;
    const actionLabel = _state.filterAction === "all" ? "全部動作" : _state.filterAction.toUpperCase();
    const actorLabel = _state.filterActor === "all" ? "全部執行者" : _state.filterActor;
    const rangeLabel = _state.filterTime === "24h" ? "24h"
      : (_state.filterTime === "7d" ? "7d" : (_state.filterTime === "30d" ? "30d" : "custom"));
    summary.textContent = "範圍 " + rangeLabel + " · " + actionLabel + " · " + actorLabel + " · " + filtered + " 筆";
  }

  // ── data ─────────────────────────────────────────────────────────

  async function _fetch() {
    try {
      const r = await fetch("/admin/audit?limit=200", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      _state.events = Array.isArray(data.events) ? data.events : [];
      _state.actions = Array.isArray(data.contract && data.contract.actions)
        ? data.contract.actions.map(function (a) { return String(a || "").toLowerCase(); }).filter(Boolean)
        : [];
      _state.actors = Array.isArray(data.contract && data.contract.actors)
        ? data.contract.actors.map(function (a) { return String(a || ""); }).filter(Boolean)
        : [];
      _renderActions();
      _renderActors();
      _renderTime();
      _renderRows();
      _renderSummary();
    } catch (_) { /* silent */ }
  }

  function _exportJson() {
    const events = _filteredEvents();
    if (!events.length) {
      window.showToast && window.showToast("沒有可匯出的紀錄", false);
      return;
    }
    const blob = new Blob([JSON.stringify(events, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "audit-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    window.showToast && window.showToast("已匯出 " + events.length + " 筆紀錄", true);
  }

  // ── handlers ─────────────────────────────────────────────────────

  function _bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    page.addEventListener("click", function (e) {
      const actionFilter = e.target.closest("[data-audit-action-filter]");
      if (actionFilter) {
        _state.filterAction = actionFilter.dataset.auditActionFilter;
        _renderActions();
        _renderActors();
        _renderTime();
        _renderRows();
        _renderSummary();
        return;
      }
      const actorFilter = e.target.closest("[data-audit-actor-filter]");
      if (actorFilter) {
        _state.filterActor = actorFilter.dataset.auditActorFilter;
        _renderActions();
        _renderActors();
        _renderTime();
        _renderRows();
        _renderSummary();
        return;
      }
      const timeFilter = e.target.closest("[data-audit-time-filter]");
      if (timeFilter) {
        _state.filterTime = timeFilter.dataset.auditTimeFilter || "24h";
        _renderActions();
        _renderActors();
        _renderTime();
        _renderRows();
        _renderSummary();
        return;
      }
      const action = e.target.closest("[data-audit-action]");
      if (action) {
        if (action.dataset.auditAction === "refresh") _fetch();
        else if (action.dataset.auditAction === "export") _exportJson();
      }
    });
  }

  function _syncVisibility() {
    const route = document.querySelector(".admin-dash-grid")?.dataset?.activeRoute || "dashboard";
    const onPage = route === "audit";
    if (onPage) {
      _fetch();
      if (!_state.refreshTimer) _state.refreshTimer = setInterval(_fetch, 30000);
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
