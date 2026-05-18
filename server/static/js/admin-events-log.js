/**
 * Admin · System Events Log (P2-3, design v4 2026-05-17).
 *
 * Renders the design v4 "Events" page — a system-side event stream
 * distinct from the human-action Audit Log (admin-audit.js). For now it
 * aliases the same backend endpoint (/admin/audit) and applies a
 * severity heuristic + the v4 visual treatment:
 *
 *   TIME · SEV · TYPE · ACTOR · MESSAGE · (→ link)
 *
 * When the backend gains a dedicated /admin/events endpoint with native
 * severity / type fields, swap EVENTS_URL.
 */
(function () {
  "use strict";

  const SECTION_ID = "sec-events";
  const EVENTS_URL = "/admin/audit?limit=200";
  const REFRESH_MS = 15000;

  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  let _state = {
    events: [],
    filterSev: "all",  // all | info | warn | error
    filterType: "all", // all | specific source
    timer: 0,
  };

  // ── Severity heuristic ──────────────────────────────────────────────
  // Audit log entries don't carry an explicit severity. We derive it from
  // the action keyword: anything containing "fail"/"error"/"revoke"/"ban"
  // is error-tier; "warn"/"timeout"/"degraded" is warn-tier; rest = info.
  const ERROR_RX = /(fail|error|revoke|ban|kill|denied|reject|oom)/i;
  const WARN_RX  = /(warn|timeout|degraded|retry|slow|throttle|standby)/i;
  function _severity(ev) {
    const key = (ev.action || ev.kind || "").toLowerCase();
    if (ev.severity) return ev.severity;
    if (ERROR_RX.test(key)) return "error";
    if (WARN_RX.test(key))  return "warn";
    return "info";
  }

  function _typeName(ev) {
    const src = ev.source || "system";
    const action = ev.action || ev.kind || "";
    return action ? `${src.toUpperCase()}_${action.toUpperCase()}` : src.toUpperCase();
  }

  function _formatTime(ts) {
    if (!ts) return "—";
    const d = new Date(ts * 1000);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  function _formatMessage(ev) {
    if (ev.message) return ev.message;
    const meta = ev.meta || {};
    const parts = [];
    if (meta.from && meta.to) parts.push(`${meta.from} → ${meta.to}`);
    else if (meta.text_preview) parts.push(`"${meta.text_preview.slice(0, 60)}"`);
    else if (Object.keys(meta).length) {
      const keys = Object.keys(meta).slice(0, 3);
      for (const k of keys) parts.push(`${k}=${JSON.stringify(meta[k]).slice(0, 30)}`);
    }
    return parts.length ? parts.join(" · ") : `${ev.source || "system"}.${ev.action || ev.kind || "?"}`;
  }

  // ── HTML / render ───────────────────────────────────────────────────

  function buildSection() {
    return `
      <div id="${SECTION_ID}" class="admin-ev-v4 hud-page-stack lg:col-span-2" style="display:none">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">SYSTEM · EVENTS · AUTO-EMITTED</div>
          <div class="admin-v2-title">系統事件</div>
        </div>

        <!-- vs audit explainer -->
        <div class="admin-ev-v4__explain">
          ℹ 系統事件 ≠ 操作日誌。事件 = 系統自動產生；
          <a href="#/audit">操作日誌</a> = 人為動作（誰改了什麼設定）。
        </div>

        <!-- Filter bar -->
        <div class="admin-ev-v4__filterbar">
          <div class="admin-ev-v4__sev-chips" role="tablist">
            <button type="button" class="admin-ev-v4__sev-chip is-active" data-ev-sev="all">全部 <span class="admin-ev-v4__sev-count" data-ev-cnt="all">0</span></button>
            <button type="button" class="admin-ev-v4__sev-chip is-info"  data-ev-sev="info">INFO <span class="admin-ev-v4__sev-count" data-ev-cnt="info">0</span></button>
            <button type="button" class="admin-ev-v4__sev-chip is-warn"  data-ev-sev="warn">WARN <span class="admin-ev-v4__sev-count" data-ev-cnt="warn">0</span></button>
            <button type="button" class="admin-ev-v4__sev-chip is-error" data-ev-sev="error">ERROR <span class="admin-ev-v4__sev-count" data-ev-cnt="error">0</span></button>
          </div>
          <span class="admin-ev-v4__spacer"></span>
          <span class="admin-ev-v4__count" data-ev-total>0</span>
          <button type="button" class="admin-ev-v4__refresh" data-ev-action="refresh">↻ 重新整理</button>
        </div>

        <!-- Events table -->
        <div class="admin-ev-v4__card">
          <div class="admin-ev-v4__row admin-ev-v4__row--head">
            <span>TIME</span>
            <span>SEV</span>
            <span>TYPE</span>
            <span>ACTOR</span>
            <span>MESSAGE</span>
            <span></span>
          </div>
          <div class="admin-ev-v4__rows" data-ev-rows>
            <div class="admin-ev-v4__empty">讀取中…</div>
          </div>
        </div>
      </div>`;
  }

  function _render() {
    const host = document.querySelector("[data-ev-rows]");
    if (!host) return;
    const all = _state.events;
    const visible = all.filter((e) => {
      if (_state.filterSev !== "all" && _severity(e) !== _state.filterSev) return false;
      return true;
    });
    if (visible.length === 0) {
      // 2026-05-18 design v4-r2: AdminEmpty card replaces the plain string.
      host.innerHTML = "";
      if (window.AdminEmpty) {
        host.appendChild(window.AdminEmpty.render("events"));
      } else {
        host.innerHTML = '<div class="admin-ev-v4__empty">沒有事件</div>';
      }
    } else {
      host.innerHTML = visible.map((e) => {
        const sev = _severity(e);
        return `
          <div class="admin-ev-v4__row" data-sev="${sev}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${escapeHtml(_formatTime(e.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${sev}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${sev}">${escapeHtml(_typeName(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${escapeHtml(e.actor || "system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${escapeHtml(_formatMessage(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`;
      }).join("");
    }
    // Update counts
    const counts = { all: all.length, info: 0, warn: 0, error: 0 };
    for (const e of all) counts[_severity(e)] += 1;
    Object.keys(counts).forEach((k) => {
      const el = document.querySelector(`[data-ev-cnt="${k}"]`);
      if (el) el.textContent = String(counts[k]);
    });
    const total = document.querySelector("[data-ev-total]");
    if (total) total.textContent = `${visible.length} / ${all.length}`;
  }

  async function _fetch() {
    try {
      const r = await fetch(EVENTS_URL, { credentials: "same-origin" });
      if (!r.ok) return;
      const j = await r.json();
      _state.events = Array.isArray(j.events) ? j.events : [];
      _render();
    } catch (_) { /* network blip — next refresh */ }
  }

  function _bind() {
    const root = document.getElementById(SECTION_ID);
    if (!root) return;
    root.addEventListener("click", (e) => {
      const sev = e.target.closest("[data-ev-sev]");
      if (sev) {
        root.querySelectorAll("[data-ev-sev]").forEach((b) => b.classList.toggle("is-active", b === sev));
        _state.filterSev = sev.dataset.evSev;
        _render();
        return;
      }
      const act = e.target.closest("[data-ev-action]");
      if (act && act.dataset.evAction === "refresh") _fetch();
    });
  }

  function _syncVisibility() {
    const shell = document.querySelector(".admin-dash-grid");
    const page = document.getElementById(SECTION_ID);
    if (!page) return;
    const route = shell?.dataset.activeLeaf || (location.hash || "").replace("#/", "") || "";
    const visible = route === "events";
    page.style.display = visible ? "" : "none";
    if (visible) {
      _fetch();
      if (!_state.timer) _state.timer = setInterval(_fetch, REFRESH_MS);
    } else if (_state.timer) {
      clearInterval(_state.timer); _state.timer = 0;
    }
  }

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(SECTION_ID)) return;
    grid.insertAdjacentHTML("beforeend", buildSection());
    _bind();
    _syncVisibility();
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    const observer = new MutationObserver(function () {
      if (document.getElementById("settings-grid") && !document.getElementById(SECTION_ID)) {
        init();
      }
      _syncVisibility();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("hashchange", _syncVisibility);
    document.addEventListener("admin-panel-rendered", () => {
      init();
      _syncVisibility();
    });
    init();
  });
})();
