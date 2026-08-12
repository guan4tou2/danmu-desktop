/**
 * Admin · Notifications Inbox (P1, 2026-04-27).
 *
 * Mirrors docs/designs/design-v2/components/admin-batch7.jsx
 * AdminNotificationsPage. Current implementation is 3-column:
 * filters + list + detail pane.
 *
 * Aggregates from existing endpoints — NO new backend schema:
 *   ✓ /admin/integrations/fire-token/audit → token rotated/revoked/toggled
 *     → severity info (rotated/toggle), good (revoked)
 *   ✓ /admin/filters/events → moderation filter hits → severity warn
 *   ✓ /admin/audit?source=webhooks → webhook lifecycle/test events
 *   ✓ /admin/audit (auth/broadcast/system*) → system channel events
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

  // Severity palette — kept in lockstep with admin-events-log.js so System
  // Events 與通知中心 share visual language (design v4 2026-05-17).
  //   crit  → #ff4d4f (error tier, matches admin-ev-v4__row[data-sev=error])
  //   warn  → #fbbf24 (warn  tier, matches admin-ev-v4__row[data-sev=warn])
  //   info  → #38bdf8 (info  tier, matches admin-ev-v4__row[data-sev=info])
  //   good  → #86efac (success — no events-log equivalent yet)
  const SEVERITY = {
    crit: { label: "CRIT", color: "var(--hud-crimson)", bg: "rgba(255,77,79,0.10)", border: "rgba(255,77,79,0.40)", sevKey: "error" },
    warn: { label: "WARN", color: "var(--hud-amber)", bg: "rgba(251,191,36,0.10)", border: "rgba(251,191,36,0.40)", sevKey: "warn" },
    info: { label: "INFO", color: "var(--color-primary)", bg: "rgba(56,189,248,0.10)", border: "rgba(56,189,248,0.40)", sevKey: "info" },
    good: { label: "OK",   color: "var(--hud-lime)", bg: "rgba(134,239,172,0.10)", border: "rgba(134,239,172,0.40)", sevKey: "good" },
  };

  let _state = {
    items: [],         // aggregated [{id, sev, src, ts, title, desc}]
    filterTab: "unread", // all / unread / starred / archived
    filterSrc: "all",
    filterSev: "all",
    refreshTimer: 0,
    selectedId: null,  // detail pane
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

  function _sevClassFor(sev) {
    if (sev === "crit" || sev === "error") return "is-danger";
    if (sev === "warn") return "is-warn";
    if (sev === "good") return "is-success";
    return "is-cyan";
  }

  // ── data aggregation ─────────────────────────────────────────────

  async function _fetchAll() {
    const tasks = [
      _fetchTokenAudit().catch(function () { return []; }),
      _fetchFilterEvents().catch(function () { return []; }),
      _fetchWebhookAudit().catch(function () { return []; }),
      _fetchSystemAudit().catch(function () { return []; }),
    ];
    const results = await Promise.all(tasks);
    const merged = results.flat();
    merged.sort(function (a, b) { return (b.ts || 0) - (a.ts || 0); });
    _state.items = merged;
    _renderList();
    _renderSummary();
    _renderDetail();
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
      let title = ServerI18n.t("notifTitleFireTokenEvent");
      if (kind === "rotated") { sev = "info"; title = ServerI18n.t("notifTitleFireTokenRotated"); }
      else if (kind === "revoked") { sev = "warn"; title = ServerI18n.t("notifTitleFireTokenRevoked"); }
      else if (kind === "toggled") {
        const enabled = e.meta && e.meta.enabled;
        sev = enabled ? "good" : "warn";
        title = ServerI18n.t("notifTitleFireTokenToggled", {
          state: enabled ? ServerI18n.t("notifStateEnabled") : ServerI18n.t("notifStateDisabled"),
        });
      }
      return {
        id: id,
        sev: sev,
        src: "Fire Token",
        ts: ts,
        title: title,
        desc: ServerI18n.t("notifDescEventType", { kind: kind }) + (e.meta ? " · " + JSON.stringify(e.meta) : ""),
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
        title: ServerI18n.t("notifTitleFilterHit", { action: action }),
        desc: ServerI18n.t("notifDescFilterHit", { rule: e.rule_id || "?", text: (e.text || "").slice(0, 60) }),
        raw: e,
      };
    });
  }

  async function _fetchWebhookAudit() {
    const r = await fetch("/admin/audit?source=webhooks&limit=100", { credentials: "same-origin" });
    if (!r.ok) return [];
    const data = await r.json();
    const events = Array.isArray(data.events) ? data.events : [];
    return events.map(function (e, i) {
      const ts = (Number(e.ts) || 0) * 1000;
      const kind = String(e.kind || "?");
      const id = "wh-" + (e.ts || i) + "-" + kind + "-" + i;
      const sev = (kind === "unregister") ? "warn" : "info";
      return {
        id: id,
        sev: sev,
        src: "Webhooks",
        ts: ts,
        title: ServerI18n.t("notifTitleWebhookEvent", { kind: kind }),
        desc: ServerI18n.t("notifDescWebhookEvent", { actor: e.actor || "system" }) + (e.meta ? " · " + JSON.stringify(e.meta) : ""),
        raw: e,
      };
    });
  }

  async function _fetchSystemAudit() {
    const r = await fetch("/admin/audit?limit=120", { credentials: "same-origin" });
    if (!r.ok) return [];
    const data = await r.json();
    const events = Array.isArray(data.events) ? data.events : [];
    const allowed = new Set(["auth", "broadcast", "system", "session", "sessions"]);
    return events.filter(function (e) {
      return allowed.has(String(e.source || ""));
    }).map(function (e, i) {
      const ts = (Number(e.ts) || 0) * 1000;
      const kind = String(e.kind || "?");
      const id = "sys-" + (e.ts || i) + "-" + (e.source || "x") + "-" + kind + "-" + i;
      const sev = kind === "login_failed" ? "warn" : "info";
      return {
        id: id,
        sev: sev,
        src: "System",
        ts: ts,
        title: ServerI18n.t("notifTitleSystemEvent", { kind: kind }),
        desc: ServerI18n.t("notifDescSystemEvent", { source: e.source || "?", actor: e.actor || "system" }),
        raw: e,
      };
    });
  }

  // ── render ───────────────────────────────────────────────────────

  function buildSection() {
    // D-4 i18n: page title reuses adminRouteTitle_notifications (same label,
    // already 4-lang from the sidebar/router table — see admin.js currentRoute
    // lookup). "NOTIFICATIONS · 通知中心" kicker below is the sitewide deferred
    // EN·中文 bilingual monolabel pattern (see TODOS.md "「EN · 中文」雙語
    // monolabel 的 pattern 決策", precedent commit 4771242) — left untouched.
    const eventsLink = `<a href="#/events">${ServerI18n.t("adminRouteTitle_events")}</a>`;
    return `
      <div id="${PAGE_ID}" class="admin-notif-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">NOTIFICATIONS · ${ServerI18n.t("notifKickerTail")}</div>
          <div class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_notifications")}</div>
          <p class="admin-ui-page-note">${ServerI18n.t("notifPageNote")}</p>
        </div>

        <!-- vs events explainer — pairs with admin-events-log.js explainer. -->
        <div class="admin-ev-v4__explain admin-notif-explain">
          ${ServerI18n.t("notifExplainBody", { link: eventsLink })}
        </div>

        <div class="admin-notif-grid admin-notif-grid--3col" data-notif-outer>
          <aside class="admin-notif-filters">
            <!-- D-4 i18n: same deferred EN·中文 bilingual monolabel pattern
                 as the page kicker above — left untouched (3 more below). -->
            <div class="admin-ui-monolabel">${ServerI18n.t("notifSecGroup")} · GROUP</div>
            <div class="admin-ui-chip-group admin-notif-tabs" data-notif-tabs>
              <button type="button" class="admin-ui-chip admin-notif-tab is-active" data-notif-tab="unread">${ServerI18n.t("notifTabUnread")}<span class="admin-notif-count cnt" data-cnt-unread>—</span></button>
              <button type="button" class="admin-ui-chip admin-notif-tab" data-notif-tab="all">${ServerI18n.t("notifAll")}<span class="admin-notif-count cnt" data-cnt-all>—</span></button>
              <button type="button" class="admin-ui-chip admin-notif-tab" data-notif-tab="starred">${ServerI18n.t("notifStarred")}<span class="admin-notif-count cnt" data-cnt-starred>—</span></button>
              <button type="button" class="admin-ui-chip admin-notif-tab" data-notif-tab="archived">${ServerI18n.t("notifTabArchived")}<span class="admin-notif-count cnt" data-cnt-archived>—</span></button>
            </div>

            <div class="admin-ui-monolabel admin-notif-label-top">${ServerI18n.t("notifSecSource")} · SOURCE</div>
            <div class="admin-ui-chip-group admin-notif-sources" data-notif-sources>
              <button type="button" class="admin-ui-chip admin-notif-src is-active" data-notif-src="all">${ServerI18n.t("notifAll")}<span class="admin-notif-count cnt" data-cnt-src-all>—</span></button>
              <button type="button" class="admin-ui-chip admin-notif-src" data-notif-src="Fire Token">Fire Token<span class="admin-notif-count cnt" data-cnt-src-ft>—</span></button>
              <button type="button" class="admin-ui-chip admin-notif-src" data-notif-src="Webhooks">Webhooks<span class="admin-notif-count cnt" data-cnt-src-wh>—</span></button>
              <button type="button" class="admin-ui-chip admin-notif-src" data-notif-src="System">System<span class="admin-notif-count cnt" data-cnt-src-sys>—</span></button>
              <button type="button" class="admin-ui-chip admin-notif-src" data-notif-src="Moderation">Moderation<span class="admin-notif-count cnt" data-cnt-src-mod>—</span></button>
            </div>

            <div class="admin-ui-monolabel admin-notif-label-top">${ServerI18n.t("notifSecSeverity")} · SEVERITY</div>
            <div class="admin-ui-chip-group admin-notif-sources" data-notif-severity>
              <button type="button" class="admin-ui-chip admin-notif-src is-active" data-notif-sev="all">${ServerI18n.t("notifAll")}<span class="admin-notif-count cnt" data-cnt-sev-all>—</span></button>
              <button type="button" class="admin-ui-chip admin-notif-src" data-notif-sev="crit">CRIT<span class="admin-notif-count cnt" data-cnt-sev-crit>—</span></button>
              <button type="button" class="admin-ui-chip admin-notif-src" data-notif-sev="warn">WARN<span class="admin-notif-count cnt" data-cnt-sev-warn>—</span></button>
              <button type="button" class="admin-ui-chip admin-notif-src" data-notif-sev="info">INFO<span class="admin-notif-count cnt" data-cnt-sev-info>—</span></button>
              <button type="button" class="admin-ui-chip admin-notif-src" data-notif-sev="good">OK<span class="admin-notif-count cnt" data-cnt-sev-good>—</span></button>
            </div>

            <div class="admin-notif-tip">
              <span class="kicker">${ServerI18n.t("notifTipKicker")}</span>
              ${ServerI18n.t("notifTipBody")}
            </div>
          </aside>

          <main class="admin-notif-main">
            <div class="admin-ui-toolbar admin-notif-toolbar">
              <span class="admin-ui-summary admin-notif-summary" data-notif-summary>${ServerI18n.t("notifLoadingSummary")}</span>
              <span class="admin-ui-spacer"></span>
              <span class="admin-ui-chip-group admin-notif-actions">
                <button type="button" class="admin-ui-action admin-notif-action" data-notif-action="mark-all-read">${ServerI18n.t("notifMarkAllRead")}</button>
                <button type="button" class="admin-ui-action admin-notif-action" data-notif-action="archive-all">${ServerI18n.t("notifArchiveAll")}</button>
                <span class="admin-be-placeholder-control admin-be-placeholder-inline">[PLACEHOLDER] 通知偏好（待 Design）</span>
              </span>
            </div>
            <div class="admin-notif-list" data-notif-list>
              <div class="admin-notif-loading">${ServerI18n.t("notifListLoading")}</div>
            </div>
          </main>

          <aside class="admin-notif-detail" data-notif-detail hidden>
            <div class="admin-notif-detail-inner" data-notif-detail-inner></div>
          </aside>
        </div>
      </div>`;
  }

  function _filteredItems() {
    return _state.items.filter(function (it) {
      if (_state.filterSrc !== "all" && it.src !== _state.filterSrc) return false;
      if (_state.filterSev !== "all" && it.sev !== _state.filterSev) return false;
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
      // D-6 批次二 (2026-07-29): 自造 admin-notif-empty 換共用 AdminEmpty。
      list.innerHTML = "";
      const card = window.AdminEmpty.renderCustom({
        icon: "◌",
        title: ServerI18n.t("notifEmptyTitle"),
        desc: ServerI18n.t("notifEmptyDesc"),
      });
      card.dataset.emptyKind = "notifications";
      list.appendChild(card);
      return;
    }
    list.innerHTML = items.map(function (it) {
      const sev = SEVERITY[it.sev] || SEVERITY.info;
      const archived = _isArchived(it.id);
      const read = _isRead(it.id);
      const starred = _isStarred(it.id);
      const tsLabel = it.ts ? _humanDelta(it.ts) : "—";
      return `
        <article class="admin-notif-item ${archived ? "is-archived" : (read ? "is-read" : "is-unread")} ${starred ? "is-starred" : ""}" data-notif-id="${escapeHtml(it.id)}" data-sev="${sev.sevKey || it.sev}" style="border-left-color:${sev.color}">
          <div class="head">
            ${!read && !archived ? `<span class="dot" style="background:${sev.color};box-shadow:0 0 6px ${sev.color}"></span>` : ''}
            ${starred ? `<span class="star" aria-label="starred" title="${ServerI18n.t("notifStarred")}">★</span>` : ''}
            <span class="admin-ui-pill admin-notif-sev-pill ${_sevClassFor(it.sev)}">${sev.label}</span>
            <span class="src">${escapeHtml(it.src)}</span>
            <span class="ts">${escapeHtml(tsLabel)}</span>
          </div>
          <div class="title">${escapeHtml(it.title)}</div>
          <div class="desc">${escapeHtml(it.desc)}</div>
          <div class="actions">
            <button type="button" class="admin-ui-action admin-notif-row-action ${starred ? "is-warn is-on" : ""}" data-notif-row-action="star" data-notif-id="${escapeHtml(it.id)}" title="${starred ? ServerI18n.t("notifStarBtnTitleOn") : ServerI18n.t("notifStarBtnTitleOff")}">${starred ? ServerI18n.t("notifStarBtnLabelOn") : ServerI18n.t("notifStarBtnLabelOff")}</button>
            ${archived
              ? `<button type="button" class="admin-ui-action admin-notif-row-action" data-notif-row-action="unarchive" data-notif-id="${escapeHtml(it.id)}">${ServerI18n.t("notifUnarchive")}</button>`
              : `${read
                  ? `<button type="button" class="admin-ui-action admin-notif-row-action" data-notif-row-action="unread" data-notif-id="${escapeHtml(it.id)}">${ServerI18n.t("notifMarkUnread")}</button>`
                  : `<button type="button" class="admin-ui-action admin-notif-row-action" data-notif-row-action="read" data-notif-id="${escapeHtml(it.id)}">${ServerI18n.t("notifMarkRead")}</button>`}
                  <button type="button" class="admin-ui-action admin-notif-row-action" data-notif-row-action="archive" data-notif-id="${escapeHtml(it.id)}">${ServerI18n.t("notifArchive")}</button>`}
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
    const activeItems = items.filter(function (i) {
      return _state.filterSev === "all" || i.sev === _state.filterSev;
    });
    set("[data-cnt-src-all]", activeItems.length);
    set("[data-cnt-src-ft]", items.filter(function (i) { return i.src === "Fire Token"; }).length);
    set("[data-cnt-src-mod]", items.filter(function (i) { return i.src === "Moderation"; }).length);
    set("[data-cnt-src-wh]", items.filter(function (i) { return i.src === "Webhooks"; }).length);
    set("[data-cnt-src-sys]", items.filter(function (i) { return i.src === "System"; }).length);
    set("[data-cnt-sev-all]", items.length);
    set("[data-cnt-sev-crit]", items.filter(function (i) { return i.sev === "crit"; }).length);
    set("[data-cnt-sev-warn]", items.filter(function (i) { return i.sev === "warn"; }).length);
    set("[data-cnt-sev-info]", items.filter(function (i) { return i.sev === "info"; }).length);
    set("[data-cnt-sev-good]", items.filter(function (i) { return i.sev === "good"; }).length);

    const summary = document.querySelector("[data-notif-summary]");
    if (summary) {
      const filtered = _filteredItems().length;
      const tabName = {
        unread: ServerI18n.t("notifTabUnread"),
        all: ServerI18n.t("notifAll"),
        starred: ServerI18n.t("notifStarred"),
        archived: ServerI18n.t("notifTabArchived"),
      }[_state.filterTab] || "—";
      summary.textContent = ServerI18n.t("notifSummaryCount", { tab: tabName, n: filtered });
    }
  }

  function _renderDetail() {
    const detail = document.querySelector("[data-notif-detail]");
    const inner  = document.querySelector("[data-notif-detail-inner]");
    if (!detail || !inner) return;
    const it = _state.selectedId && _state.items.find(function (i) { return i.id === _state.selectedId; });
    if (!it) { detail.hidden = true; return; }
    detail.hidden = false;
    const sev = SEVERITY[it.sev] || SEVERITY.info;
    const tsLabel = it.ts ? new Date(it.ts).toLocaleString("zh-TW") : "—";
    const raw = it.raw ? JSON.stringify(it.raw, null, 2) : "—";
    inner.innerHTML = `
      <div class="admin-notif-detail-head">
        <span class="admin-ui-monolabel">DETAIL</span>
        <span class="admin-ui-spacer"></span>
        <button type="button" class="admin-ui-action admin-notif-detail-close" data-notif-action="close-detail" aria-label="${ServerI18n.t("notifDetailCloseAria")}">${window.AdminUtils.closeIcon}</button>
      </div>
      <div class="admin-ui-pill admin-notif-detail-sev ${_sevClassFor(it.sev)}">
        <span class="badge">${escapeHtml(sev.label)}</span>
        <span class="src">${escapeHtml(it.src)}</span>
      </div>
      <div class="admin-notif-detail-title">${escapeHtml(it.title)}</div>
      <div class="admin-notif-detail-ts">⏱ ${escapeHtml(tsLabel)}</div>
      <div class="admin-notif-detail-desc">${escapeHtml(it.desc)}</div>
      <div class="admin-notif-detail-raw-label">${ServerI18n.t("notifDetailRawLabel")}</div>
      <pre class="admin-notif-detail-raw">${escapeHtml(raw)}</pre>
      <div class="admin-notif-detail-actions">
        ${!_isRead(it.id) && !_isArchived(it.id)
          ? `<button type="button" class="admin-ui-action admin-notif-detail-action" data-notif-row-action="read" data-notif-id="${escapeHtml(it.id)}">${ServerI18n.t("notifMarkRead")}</button>`
          : ""}
        ${!_isArchived(it.id)
          ? `<button type="button" class="admin-ui-action admin-notif-detail-action" data-notif-row-action="archive" data-notif-id="${escapeHtml(it.id)}">${ServerI18n.t("notifArchive")}</button>`
          : `<button type="button" class="admin-ui-action admin-notif-detail-action" data-notif-row-action="unarchive" data-notif-id="${escapeHtml(it.id)}">${ServerI18n.t("notifUnarchive")}</button>`}
      </div>`;
  }

  function _humanDelta(t) {
    if (!t) return "—";
    const diffSec = (Date.now() - t) / 1000;
    if (diffSec < 60) return ServerI18n.t("notifTimeSecAgo", { n: Math.floor(diffSec) });
    if (diffSec < 3600) return ServerI18n.t("notifTimeMinAgo", { n: Math.floor(diffSec / 60) });
    if (diffSec < 86400) return ServerI18n.t("notifTimeHourAgo", { n: Math.floor(diffSec / 3600) });
    return ServerI18n.t("notifTimeDayAgo", { n: Math.floor(diffSec / 86400) });
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
        if (src.dataset.notifDisabled === "1") return;
        _state.filterSrc = src.dataset.notifSrc;
        page.querySelectorAll("[data-notif-src]").forEach(function (s) {
          if (s.dataset.notifSrc !== undefined) {
            s.classList.toggle("is-active", s.dataset.notifSrc === _state.filterSrc);
          }
        });
        _renderList();
        _renderSummary();
        return;
      }
      const sev = e.target.closest("[data-notif-sev]");
      if (sev) {
        _state.filterSev = sev.dataset.notifSev;
        page.querySelectorAll("[data-notif-sev]").forEach(function (s) {
          s.classList.toggle("is-active", s.dataset.notifSev === _state.filterSev);
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
          window.showToast && window.showToast(ServerI18n.t("notifToastAllRead"), true);
        } else if (action.dataset.notifAction === "archive-all") {
          _filteredItems().forEach(function (it) { _markArchived(it.id); });
          _renderList(); _renderSummary();
          window.showToast && window.showToast(ServerI18n.t("notifToastArchivedList"), true);
        } else if (action.dataset.notifAction === "refresh") {
          _fetchAll();
        } else if (action.dataset.notifAction === "close-detail") {
          _state.selectedId = null;
          _renderDetail();
        }
        return;
      }
      const rowAction = e.target.closest("[data-notif-row-action]");
      if (rowAction) {
        e.stopPropagation();
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
        _renderList(); _renderSummary(); _renderDetail();
        return;
      }
      // Click anywhere on item card → open detail pane + mark read
      const item = e.target.closest("[data-notif-id]");
      if (item) {
        const id = item.dataset.notifId;
        if (!id) return;
        _state.selectedId = id;
        if (!_isRead(id) && !_isArchived(id)) {
          _markRead(id);
          _renderList(); _renderSummary();
        }
        _renderDetail();
      }
    });
  }

  function _syncVisibility() {
    const route = document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf || "dashboard";
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
