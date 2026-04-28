/**
 * Admin · Notifications Inbox (P1, 2026-04-27).
 *
 * Mirrors docs/designs/design-v2/components/admin-batch7.jsx
 * AdminNotificationsPage. v1 is a 2-column layout (filters left, list
 * right); the prototype's third "selected detail" pane is folded into
 * an inline expansion in v1 to keep scope manageable.
 *
 * Aggregates from existing endpoints — NO new backend schema:
 *   ✓ /admin/metrics → recent_violations (rate limit hits) → severity warn
 *   ✓ /admin/integrations/fire-token/audit → token rotated/revoked/toggled
 *     → severity info (rotated/toggle), good (revoked)
 *   ✓ /admin/filters/events → moderation filter hits → severity warn
 *
 * Read/archive/starred state lives in localStorage (per-event id):
 *   danmu.notifications.read     = JSON [id1, id2, ...]
 *   danmu.notifications.archived = JSON [id1, id2, ...]
 *   danmu.notifications.starred  = JSON [id1, id2, ...]  (added 2026-04-28)
 *
 * Sidebar nav: 通知 (under 總覽 group)
 *
 * Loaded as <script defer> in admin.html.
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-notifications-overview";
  const READ_KEY = "danmu.notifications.read";
  const ARCHIVE_KEY = "danmu.notifications.archived";
  const STAR_KEY = "danmu.notifications.starred";

  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  const SEVERITY = {
    crit: { label: "CRIT", color: "#f87171", bg: "rgba(248,113,113,0.10)", border: "rgba(248,113,113,0.40)" },
    warn: { label: "WARN", color: "var(--color-warning, #fbbf24)", bg: "rgba(251,191,36,0.10)", border: "rgba(251,191,36,0.40)" },
    info: { label: "INFO", color: "var(--color-primary, #38bdf8)", bg: "rgba(56,189,248,0.10)", border: "rgba(56,189,248,0.40)" },
    good: { label: "GOOD", color: "#86efac", bg: "rgba(134,239,172,0.10)", border: "rgba(134,239,172,0.40)" },
  };

  let _state = {
    items: [],         // aggregated [{id, sev, src, ts, title, desc}]
    filterTab: "unread", // all / unread / starred / archived
    filterSrc: "all",
    refreshTimer: 0,
  };

  // ── localStorage helpers ────────────────────────────────────────

  function _readSet(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return new Set();
      const arr = JSON.parse(raw);
      return new Set(Array.isArray(arr) ? arr : []);
    } catch (_) { return new Set(); }
  }
  function _writeSet(key, set) {
    try { localStorage.setItem(key, JSON.stringify(Array.from(set))); } catch (_) {}
  }
  const _isRead = (id) => _readSet(READ_KEY).has(id);
  const _isArchived = (id) => _readSet(ARCHIVE_KEY).has(id);
  const _isStarred = (id) => _readSet(STAR_KEY).has(id);
  function _markRead(id) {
    const s = _readSet(READ_KEY); s.add(id); _writeSet(READ_KEY, s);
  }
  function _markUnread(id) {
    const s = _readSet(READ_KEY); s.delete(id); _writeSet(READ_KEY, s);
  }
  function _markArchived(id) {
    const s = _readSet(ARCHIVE_KEY); s.add(id); _writeSet(ARCHIVE_KEY, s);
  }
  function _toggleStar(id) {
    const s = _readSet(STAR_KEY);
    if (s.has(id)) s.delete(id); else s.add(id);
    _writeSet(STAR_KEY, s);
  }

  // ── data aggregation ─────────────────────────────────────────────

  async function _fetchAll() {
    const tasks = [
      _fetchMetrics().catch(function () { return []; }),
      _fetchTokenAudit().catch(function () { return []; }),
      _fetchFilterEvents().catch(function () { return []; }),
    ];
    const results = await Promise.all(tasks);
    const merged = results.flat();
    merged.sort(function (a, b) { return (b.ts || 0) - (a.ts || 0); });
    _state.items = merged;
    _renderList();
    _renderSummary();
  }

  async function _fetchMetrics() {
    const r = await fetch("/admin/metrics", { credentials: "same-origin" });
    if (!r.ok) return [];
    const data = await r.json();
    const violations = Array.isArray(data.recent_violations) ? data.recent_violations : [];
    return violations.map(function (v, i) {
      const ts = (Number(v.ts) || 0) * 1000;
      const id = "vlt-" + (v.ts || i) + "-" + (v.scope || "x");
      return {
        id: id,
        sev: v.scope === "fire" ? "warn" : "info",
        src: "Rate Limit",
        ts: ts,
        title: "速率限制觸發 · scope=" + (v.scope || "?"),
        desc: "IP " + (v.ip || "?") + " 在 " + (v.scope || "?") + " 速率限制下被擋。" +
              (v.violations ? "今日累計 " + v.violations + " 次。" : ""),
        raw: v,
      };
    });
  }

  async function _fetchTokenAudit() {
    const r = await fetch("/admin/integrations/fire-token/audit", { credentials: "same-origin" });
    if (!r.ok) return [];
    const data = await r.json();
    const events = Array.isArray(data.events) ? data.events : [];
    return events.map(function (e, i) {
      const ts = (Number(e.ts) || 0) * 1000;
      const id = "tok-" + (e.ts || i) + "-" + (e.kind || "x");
      const kind = e.kind || "?";
      let sev = "info";
      let title = "Fire Token 事件";
      if (kind === "rotated") { sev = "info"; title = "Fire Token 已重新產生"; }
      else if (kind === "revoked") { sev = "warn"; title = "Fire Token 已撤銷"; }
      else if (kind === "toggled") {
        const enabled = e.meta && e.meta.enabled;
        sev = enabled ? "good" : "warn";
        title = "Fire Token 已" + (enabled ? "啟用" : "停用");
      }
      return {
        id: id,
        sev: sev,
        src: "Fire Token",
        ts: ts,
        title: title,
        desc: "事件類型：" + kind + (e.meta ? " · " + JSON.stringify(e.meta) : ""),
        raw: e,
      };
    });
  }

  async function _fetchFilterEvents() {
    const r = await fetch("/admin/filters/events", { credentials: "same-origin" });
    if (!r.ok) return [];
    const data = await r.json();
    const events = Array.isArray(data.events) ? data.events : [];
    return events.map(function (e, i) {
      const ts = (Number(e.ts) || 0) * 1000;
      const id = "flt-" + (e.ts || i) + "-" + (e.action || "x") + "-" + i;
      const action = e.action || "match";
      const sev = action === "drop" ? "warn" : "info";
      return {
        id: id,
        sev: sev,
        src: "Moderation",
        ts: ts,
        title: "敏感字過濾 · " + action,
        desc: "規則 " + (e.rule_id || "?") + " 命中：「" + (e.text || "").slice(0, 60) + "」",
        raw: e,
      };
    });
  }

  // ── render ───────────────────────────────────────────────────────

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-notif-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">NOTIFICATIONS · 通知中心</div>
          <div class="admin-v2-title">通知</div>
          <p class="admin-v2-note">集中所有警示來源（速率限制 / Fire Token 事件 / 敏感字觸發）。讀取 / 封存狀態存在瀏覽器 localStorage。</p>
        </div>

        <div class="admin-notif-grid">
          <aside class="admin-notif-filters">
            <div class="admin-v2-monolabel">分組 · GROUP</div>
            <div class="admin-notif-tabs" data-notif-tabs>
              <button type="button" class="admin-notif-tab is-active" data-notif-tab="unread">未讀<span class="cnt" data-cnt-unread>—</span></button>
              <button type="button" class="admin-notif-tab" data-notif-tab="all">全部<span class="cnt" data-cnt-all>—</span></button>
              <button type="button" class="admin-notif-tab" data-notif-tab="starred">已標記<span class="cnt" data-cnt-starred>—</span></button>
              <button type="button" class="admin-notif-tab" data-notif-tab="archived">已封存<span class="cnt" data-cnt-archived>—</span></button>
            </div>

            <div class="admin-v2-monolabel admin-notif-label-top">來源 · SOURCE</div>
            <div class="admin-notif-sources" data-notif-sources>
              <button type="button" class="admin-notif-src is-active" data-notif-src="all">全部<span class="cnt" data-cnt-src-all>—</span></button>
              <button type="button" class="admin-notif-src" data-notif-src="Rate Limit">Rate Limit<span class="cnt" data-cnt-src-rl>—</span></button>
              <button type="button" class="admin-notif-src" data-notif-src="Fire Token">Fire Token<span class="cnt" data-cnt-src-ft>—</span></button>
              <button type="button" class="admin-notif-src" data-notif-src="Moderation">Moderation<span class="cnt" data-cnt-src-mod>—</span></button>
            </div>

            <div class="admin-notif-tip">
              <span class="kicker">提示</span>
              通知保留條件由各 backend service 決定（rate limits 30 筆、fire token audit 100 筆、filters log 即時 fetch）。讀取 / 封存狀態為瀏覽器本地。
            </div>
          </aside>

          <main class="admin-notif-main">
            <div class="admin-notif-toolbar">
              <span class="admin-notif-summary" data-notif-summary>讀取中…</span>
              <span class="admin-notif-actions">
                <button type="button" class="admin-notif-action" data-notif-action="mark-all-read">✓ 全部已讀</button>
                <button type="button" class="admin-notif-action" data-notif-action="archive-all">↓ 封存目前清單</button>
                <button type="button" class="admin-notif-action" data-notif-action="refresh">↻ 重新整理</button>
              </span>
            </div>
            <div class="admin-notif-list" data-notif-list>
              <div class="admin-notif-loading">載入通知中…</div>
            </div>
          </main>
        </div>
      </div>`;
  }

  function _filteredItems() {
    return _state.items.filter(function (it) {
      if (_state.filterSrc !== "all" && it.src !== _state.filterSrc) return false;
      const archived = _isArchived(it.id);
      const read = _isRead(it.id);
      const starred = _isStarred(it.id);
      if (_state.filterTab === "unread") return !archived && !read;
      if (_state.filterTab === "archived") return archived;
      if (_state.filterTab === "starred") return !archived && starred;
      // all = include both read + unread, exclude archived
      return !archived;
    });
  }

  function _renderList() {
    const list = document.querySelector("[data-notif-list]");
    if (!list) return;
    const items = _filteredItems();
    if (items.length === 0) {
      list.innerHTML = `
        <div class="admin-notif-empty">
          <div class="icon">◌</div>
          <div class="t">沒有符合條件的通知</div>
          <div class="s">當有新事件（速率限制觸發 / token 事件 / 敏感字命中）時會自動出現在這裡。</div>
        </div>`;
      return;
    }
    list.innerHTML = items.map(function (it) {
      const sev = SEVERITY[it.sev] || SEVERITY.info;
      const archived = _isArchived(it.id);
      const read = _isRead(it.id);
      const starred = _isStarred(it.id);
      const tsLabel = it.ts ? _humanDelta(it.ts) : "—";
      return `
        <article class="admin-notif-item ${archived ? "is-archived" : (read ? "is-read" : "is-unread")} ${starred ? "is-starred" : ""}" data-notif-id="${escapeHtml(it.id)}" style="border-left-color:${sev.color}">
          <div class="head">
            ${!read && !archived ? `<span class="dot" style="background:${sev.color};box-shadow:0 0 6px ${sev.color}"></span>` : ''}
            ${starred ? `<span class="star" aria-label="starred" title="已標記">★</span>` : ''}
            <span class="sev" style="color:${sev.color};background:${sev.bg};border-color:${sev.border};">${sev.label}</span>
            <span class="src">${escapeHtml(it.src)}</span>
            <span class="ts">${escapeHtml(tsLabel)}</span>
          </div>
          <div class="title">${escapeHtml(it.title)}</div>
          <div class="desc">${escapeHtml(it.desc)}</div>
          <div class="actions">
            <button type="button" class="${starred ? "is-on" : ""}" data-notif-row-action="star" data-notif-id="${escapeHtml(it.id)}" title="${starred ? "取消標記" : "標記重要"}">${starred ? "★ 已標記" : "☆ 標記"}</button>
            ${archived
              ? `<button type="button" data-notif-row-action="unarchive" data-notif-id="${escapeHtml(it.id)}">↺ 取消封存</button>`
              : `${read
                  ? `<button type="button" data-notif-row-action="unread" data-notif-id="${escapeHtml(it.id)}">○ 標記未讀</button>`
                  : `<button type="button" data-notif-row-action="read" data-notif-id="${escapeHtml(it.id)}">✓ 標記已讀</button>`}
                  <button type="button" data-notif-row-action="archive" data-notif-id="${escapeHtml(it.id)}">↓ 封存</button>`}
          </div>
        </article>`;
    }).join("");
  }

  function _renderSummary() {
    const items = _state.items;
    const unread = items.filter(function (it) { return !_isRead(it.id) && !_isArchived(it.id); }).length;
    const total = items.filter(function (it) { return !_isArchived(it.id); }).length;
    const archived = items.filter(function (it) { return _isArchived(it.id); }).length;
    const starred = items.filter(function (it) { return _isStarred(it.id) && !_isArchived(it.id); }).length;

    const set = function (sel, v) { const el = document.querySelector(sel); if (el) el.textContent = String(v); };
    set("[data-cnt-unread]", unread);
    set("[data-cnt-all]", total);
    set("[data-cnt-starred]", starred);
    set("[data-cnt-archived]", archived);
    set("[data-cnt-src-all]", items.length);
    set("[data-cnt-src-rl]", items.filter(function (i) { return i.src === "Rate Limit"; }).length);
    set("[data-cnt-src-ft]", items.filter(function (i) { return i.src === "Fire Token"; }).length);
    set("[data-cnt-src-mod]", items.filter(function (i) { return i.src === "Moderation"; }).length);

    const summary = document.querySelector("[data-notif-summary]");
    if (summary) {
      const filtered = _filteredItems().length;
      const tabName = { unread: "未讀", all: "全部", starred: "已標記", archived: "已封存" }[_state.filterTab] || "—";
      summary.textContent = tabName + " · " + filtered + " 筆";
    }
  }

  function _humanDelta(t) {
    if (!t) return "—";
    const diffSec = (Date.now() - t) / 1000;
    if (diffSec < 60) return Math.floor(diffSec) + " 秒前";
    if (diffSec < 3600) return Math.floor(diffSec / 60) + " 分鐘前";
    if (diffSec < 86400) return Math.floor(diffSec / 3600) + " 小時前";
    return Math.floor(diffSec / 86400) + " 天前";
  }

  // ── handlers ─────────────────────────────────────────────────────

  function _bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;
    page.addEventListener("click", function (e) {
      const tab = e.target.closest("[data-notif-tab]");
      if (tab) {
        _state.filterTab = tab.dataset.notifTab;
        page.querySelectorAll("[data-notif-tab]").forEach(function (t) {
          t.classList.toggle("is-active", t.dataset.notifTab === _state.filterTab);
        });
        _renderList();
        _renderSummary();
        return;
      }
      const src = e.target.closest("[data-notif-src]");
      if (src) {
        _state.filterSrc = src.dataset.notifSrc;
        page.querySelectorAll("[data-notif-src]").forEach(function (s) {
          s.classList.toggle("is-active", s.dataset.notifSrc === _state.filterSrc);
        });
        _renderList();
        _renderSummary();
        return;
      }
      const action = e.target.closest("[data-notif-action]");
      if (action) {
        if (action.dataset.notifAction === "mark-all-read") {
          _filteredItems().forEach(function (it) { _markRead(it.id); });
          _renderList(); _renderSummary();
          window.showToast && window.showToast("已全部標為已讀", true);
        } else if (action.dataset.notifAction === "archive-all") {
          _filteredItems().forEach(function (it) { _markArchived(it.id); });
          _renderList(); _renderSummary();
          window.showToast && window.showToast("已封存目前清單", true);
        } else if (action.dataset.notifAction === "refresh") {
          _fetchAll();
        }
        return;
      }
      const rowAction = e.target.closest("[data-notif-row-action]");
      if (rowAction) {
        e.stopPropagation(); // prevent the parent-card "click → mark read" handler
        const id = rowAction.dataset.notifId;
        const a = rowAction.dataset.notifRowAction;
        if (a === "read") _markRead(id);
        else if (a === "unread") _markUnread(id);
        else if (a === "archive") _markArchived(id);
        else if (a === "unarchive") {
          const s = _readSet(ARCHIVE_KEY); s.delete(id); _writeSet(ARCHIVE_KEY, s);
        } else if (a === "star") {
          _toggleStar(id);
        }
        _renderList(); _renderSummary();
        return;
      }
      // Click anywhere on item card → mark read (if unread)
      const item = e.target.closest("[data-notif-id]");
      if (item) {
        const id = item.dataset.notifId;
        if (id && !_isRead(id) && !_isArchived(id)) {
          _markRead(id);
          _renderList(); _renderSummary();
        }
      }
    });
  }

  function _syncVisibility() {
    const route = document.querySelector(".admin-dash-grid")?.dataset?.activeRoute || "dashboard";
    const onPage = route === "notifications";
    if (onPage) {
      _fetchAll();
      if (!_state.refreshTimer) _state.refreshTimer = setInterval(_fetchAll, 30000);
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
    _fetchAll();
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
