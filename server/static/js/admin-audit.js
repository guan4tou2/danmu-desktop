/**
 * Admin · Audit Log (v5 Yellow alignment, 2026-05-19).
 *
 * Refreshed to match Danmu Redesign v5 Batch 10 Yellow:
 *   - compact toolbar
 *   - fixed actor filters (全部 / admin / system)
 *   - fixed severity filters (INFO / WARN / DANGER)
 *   - timeline rows instead of a tabular grid
 *
 * Data source remains GET /admin/audit?limit=200.
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
    auth:       { label: "Auth" },
    fire_token: { label: "Fire Token" },
    broadcast:  { label: "Desktop" },
    moderation: { label: "Moderation" },
    session:    { label: "Session" },
  };

  let _state = {
    events: [],
    filterActor: "all",
    filterSeverity: "all",
    refreshTimer: 0,
  };

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-audit-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">AUDIT LOG · 管理員 + 系統事件</div>
          <div class="admin-ui-page-title">操作日誌</div>
          <p class="admin-ui-page-note">跨重啟保留的事件紀錄，存在 <code>server/runtime/audit.log</code>。v5 Yellow 以 timeline 呈現最近管理與系統動作。</p>
        </div>

        <div class="admin-ui-toolbar admin-audit-toolbar-v5">
          <div class="admin-ui-chip-group admin-audit-chip-group" data-audit-actor-group>
            <button type="button" class="admin-ui-chip admin-audit-filter-chip is-active" data-audit-actor-filter="all">全部</button>
            <button type="button" class="admin-ui-chip admin-audit-filter-chip" data-audit-actor-filter="admin">admin</button>
            <button type="button" class="admin-ui-chip admin-audit-filter-chip" data-audit-actor-filter="system">system</button>
          </div>
          <div class="admin-ui-chip-group admin-audit-chip-group" data-audit-severity-group>
            <button type="button" class="admin-ui-chip admin-audit-filter-chip" data-severity="info" data-audit-severity-filter="info">INFO</button>
            <button type="button" class="admin-ui-chip admin-audit-filter-chip" data-severity="warn" data-audit-severity-filter="warn">WARN</button>
            <button type="button" class="admin-ui-chip admin-audit-filter-chip" data-severity="danger" data-audit-severity-filter="danger">DANGER</button>
          </div>
          <span class="admin-ui-spacer admin-audit-toolbar-spacer"></span>
          <span class="admin-ui-summary admin-audit-summary" data-audit-summary>讀取中…</span>
          <button type="button" class="admin-ui-action admin-audit-action" data-audit-export>↓ 匯出</button>
          <button type="button" class="admin-ui-action admin-audit-action" data-audit-refresh>↻ 重新整理</button>
        </div>

        <div class="admin-ui-scroll-list admin-ui-timeline admin-audit-timeline" data-audit-rows>
          ${Array.from({ length: 5 }).map(function () {
            return `
              <div class="admin-ui-timeline-row admin-audit-timeline-row admin-audit-timeline-row--skeleton is-skeleton" aria-hidden="true">
                <div class="admin-ui-stamp admin-audit-cell-stamp">
                  <span class="admin-skel admin-skel-bar" style="width:42px;height:9px"></span>
                  <span class="admin-skel admin-skel-bar" style="width:7px;height:7px;border-radius:50%"></span>
                </div>
                <div class="admin-ui-row-body admin-audit-cell-body">
                  <div class="admin-ui-row-head admin-audit-row-head">
                    <span class="admin-skel admin-skel-bar" style="width:46px;height:10px"></span>
                    <span class="admin-skel admin-skel-bar" style="width:120px;height:10px"></span>
                    <span class="admin-skel admin-skel-bar" style="width:90px;height:10px"></span>
                  </div>
                  <span class="admin-skel admin-skel-bar" style="width:220px;height:10px"></span>
                </div>
              </div>`;
          }).join("")}
        </div>
      </div>`;
  }

  function _formatTs(ts) {
    if (!ts) return "—";
    try {
      const d = new Date(Number(ts) * 1000);
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      return `${hh}:${mm}:${ss}`;
    } catch (_) {
      return "—";
    }
  }

  function _severityOf(event) {
    const action = String(event.action || event.kind || "").toLowerCase();
    if (/(block|ban|revoke|delete|kick|reject|drop)/.test(action)) return "danger";
    if (/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(action)) return "warn";
    return "info";
  }

  function _severityColor(severity) {
    return severity === "danger"
      ? "var(--hud-crimson, #f87171)"
      : severity === "warn"
        ? "var(--hud-amber, #fbbf24)"
        : "var(--color-text-muted, #94a3b8)";
  }

  function _matchesActor(event) {
    return _state.filterActor === "all" || String(event.actor || "").toLowerCase() === _state.filterActor;
  }

  function _matchesSeverity(event) {
    return _state.filterSeverity === "all" || _severityOf(event) === _state.filterSeverity;
  }

  function _filteredEvents() {
    return _state.events.filter(function (event) {
      return _matchesActor(event) && _matchesSeverity(event);
    });
  }

  function _targetOf(event) {
    const meta = event && event.meta && typeof event.meta === "object" ? event.meta : {};
    return meta.target || meta.keyword || meta.fp || meta.fingerprint || meta.name || meta.mode || meta.session
      || meta.hook_id || event.target || "";
  }

  function _diffPairHtml(before, after) {
    const hasBefore = before !== null && before !== undefined;
    const hasAfter = after !== null && after !== undefined;
    if (!hasBefore && !hasAfter) return "";
    const beforeText = hasBefore ? escapeHtml(JSON.stringify(before)) : "";
    const afterText = hasAfter ? escapeHtml(JSON.stringify(after)) : "";
    if (!hasBefore) return `<span class="admin-audit-diff"><span class="admin-audit-diff-a">${afterText}</span></span>`;
    return `<span class="admin-audit-diff"><span class="admin-audit-diff-b">${beforeText}</span> → <span class="admin-audit-diff-a">${afterText}</span></span>`;
  }

  function _detailHtml(event) {
    const meta = event && event.meta && typeof event.meta === "object" ? event.meta : {};
    const detailParts = [];
    if (event.detail) detailParts.push(`<span>${escapeHtml(String(event.detail))}</span>`);
    const diffHtml = _diffPairHtml(event.before, event.after);
    if (diffHtml) detailParts.push(diffHtml);

    const compactMeta = Object.assign({}, meta);
    ["target", "keyword", "fp", "fingerprint", "name", "mode", "session", "hook_id"].forEach(function (key) {
      delete compactMeta[key];
    });
    const metaKeys = Object.keys(compactMeta);
    if (metaKeys.length) {
      detailParts.push(`<code class="admin-ui-code admin-audit-meta-extra">${escapeHtml(JSON.stringify(compactMeta))}</code>`);
    }

    if (!detailParts.length) {
      const sourceLabel = (SOURCE_META[event.source] && SOURCE_META[event.source].label) || event.source || "system";
      detailParts.push(`<span>${escapeHtml(String(sourceLabel))}</span>`);
    }
    return detailParts.join(" ");
  }

  function _actorPillClass(actor) {
    return actor === "admin" ? "admin-ui-pill admin-audit-row-pill is-admin"
      : actor === "system" ? "admin-ui-pill admin-audit-row-pill"
        : "admin-ui-pill admin-audit-row-pill is-generic";
  }

  function _renderRows() {
    const container = document.querySelector("[data-audit-rows]");
    if (!container) return;
    const events = _filteredEvents();
    if (!events.length) {
      container.innerHTML = `<div class="admin-audit-empty">沒有符合條件的紀錄。</div>`;
      return;
    }

    container.innerHTML = events.map(function (event) {
      const severity = _severityOf(event);
      const severityColor = _severityColor(severity);
      const actor = String(event.actor || "system");
      const target = _targetOf(event);
      return `
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${severity}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${escapeHtml(_formatTs(event.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${severityColor};box-shadow:0 0 6px ${severityColor}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${_actorPillClass(actor)}">${escapeHtml(actor)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${escapeHtml(String(event.action || event.kind || "—"))}</span>
              ${target ? `<span class="admin-ui-target admin-audit-target">→ ${escapeHtml(String(target))}</span>` : ""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${_detailHtml(event)}</div>
          </div>
        </div>`;
    }).join("");
  }

  function _renderSummary() {
    const summary = document.querySelector("[data-audit-summary]");
    if (!summary) return;
    const count = _filteredEvents().length;
    const actor = _state.filterActor === "all" ? "全部角色" : _state.filterActor;
    const severity = _state.filterSeverity === "all" ? "全部層級" : _state.filterSeverity.toUpperCase();
    summary.textContent = `${count} 筆 · ${actor} · ${severity}`;
  }

  function _renderFilters() {
    document.querySelectorAll("[data-audit-actor-filter]").forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.auditActorFilter === _state.filterActor);
    });
    document.querySelectorAll("[data-audit-severity-filter]").forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.auditSeverityFilter === _state.filterSeverity);
    });
  }

  async function _fetch() {
    try {
      const response = await fetch("/admin/audit?limit=200", { credentials: "same-origin" });
      if (!response.ok) return;
      const data = await response.json();
      const records = Array.isArray(data.events) ? data.events.slice() : [];
      records.sort(function (a, b) {
        return Number(b.ts || 0) - Number(a.ts || 0);
      });
      _state.events = records;
      _renderFilters();
      _renderRows();
      _renderSummary();
    } catch (_) {
      /* silent */
    }
  }

  function _exportJson() {
    const events = _filteredEvents();
    if (!events.length) {
      window.showToast && window.showToast("沒有可匯出的紀錄", false);
      return;
    }
    const blob = new Blob([JSON.stringify(events, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "audit-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    window.showToast && window.showToast("已匯出 " + events.length + " 筆紀錄", true);
  }

  function _bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    page.addEventListener("click", function (event) {
      const actorFilter = event.target.closest("[data-audit-actor-filter]");
      if (actorFilter) {
        _state.filterActor = actorFilter.dataset.auditActorFilter || "all";
        _renderFilters();
        _renderRows();
        _renderSummary();
        return;
      }

      const severityFilter = event.target.closest("[data-audit-severity-filter]");
      if (severityFilter) {
        const nextSeverity = severityFilter.dataset.auditSeverityFilter || "all";
        _state.filterSeverity = _state.filterSeverity === nextSeverity ? "all" : nextSeverity;
        _renderFilters();
        _renderRows();
        _renderSummary();
        return;
      }

      if (event.target.closest("[data-audit-export]")) {
        _exportJson();
        return;
      }

      if (event.target.closest("[data-audit-refresh]")) {
        _fetch();
      }
    });
  }

  function _syncVisibility() {
    const route = document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf || "dashboard";
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
      childList: true,
      subtree: true,
    });
    if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
      init();
    }
  });
})();
