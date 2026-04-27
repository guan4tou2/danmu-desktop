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
    sources: [],
    filterSource: "all",
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
            <div class="admin-v2-monolabel">來源 · SOURCE</div>
            <div class="admin-audit-source-list" data-audit-sources>
              <button type="button" class="admin-audit-src is-active" data-audit-src="all">全部<span class="cnt" data-audit-cnt-all>—</span></button>
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

  function _renderRows() {
    const tbody = document.querySelector("[data-audit-rows]");
    if (!tbody) return;
    const events = _state.filterSource === "all"
      ? _state.events
      : _state.events.filter(function (e) { return e.source === _state.filterSource; });
    if (events.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" class="admin-audit-empty">沒有符合條件的紀錄。</td></tr>`;
      return;
    }
    tbody.innerHTML = events.map(function (e) {
      const meta = SOURCE_META[e.source] || { label: e.source, color: "var(--color-text-muted)" };
      const metaJson = JSON.stringify(e.meta || {});
      const metaText = metaJson === "{}" ? "—" : metaJson;
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

  function _renderSources() {
    const list = document.querySelector("[data-audit-sources]");
    if (!list) return;
    const allBtn = `<button type="button" class="admin-audit-src ${_state.filterSource === "all" ? "is-active" : ""}" data-audit-src="all">全部<span class="cnt">${_state.events.length}</span></button>`;
    const srcButtons = (_state.sources || []).map(function (s) {
      const cnt = _state.events.filter(function (e) { return e.source === s; }).length;
      const active = _state.filterSource === s;
      const meta = SOURCE_META[s] || { label: s };
      return `<button type="button" class="admin-audit-src ${active ? "is-active" : ""}" data-audit-src="${escapeHtml(s)}">${escapeHtml(meta.label)}<span class="cnt">${cnt}</span></button>`;
    }).join("");
    list.innerHTML = allBtn + srcButtons;
  }

  function _renderSummary() {
    const summary = document.querySelector("[data-audit-summary]");
    if (!summary) return;
    const filtered = _state.filterSource === "all"
      ? _state.events.length
      : _state.events.filter(function (e) { return e.source === _state.filterSource; }).length;
    summary.textContent = (_state.filterSource === "all" ? "全部" : SOURCE_META[_state.filterSource]?.label || _state.filterSource) + " · " + filtered + " 筆";
  }

  // ── data ─────────────────────────────────────────────────────────

  async function _fetch() {
    try {
      const r = await fetch("/admin/audit?limit=200", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      _state.events = Array.isArray(data.events) ? data.events : [];
      _state.sources = Array.isArray(data.sources) ? data.sources : [];
      _renderSources();
      _renderRows();
      _renderSummary();
    } catch (_) { /* silent */ }
  }

  function _exportJson() {
    const events = _state.filterSource === "all"
      ? _state.events
      : _state.events.filter(function (e) { return e.source === _state.filterSource; });
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
      const src = e.target.closest("[data-audit-src]");
      if (src) {
        _state.filterSource = src.dataset.auditSrc;
        _renderSources();
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
