/**
 * Admin · 通知（設計稿 08 · N1，2026-09-07）。
 *
 * 頂欄鈴鐺（帶數字 badge）開啟的右上彈出面板，不是一條路由。前一版是整頁
 * 三欄式收件匣（篩選欄＋清單＋詳情窗）＋四個分頁＋嚴重度篩選——通知的用途
 * 是「有件事你可能要處理」，為它蓋一座收件匣等於把一個瞄一眼的東西做成一份
 * 要經營的工作。
 *
 * Aggregates from existing endpoints — NO new backend schema:
 *   ✓ /admin/integrations/fire-token/audit → token rotated/revoked/toggled
 *     → severity info (rotated/toggle), good (revoked)
 *   ✓ /admin/filters/events → moderation filter hits → severity warn
 *   ✓ /admin/audit?source=webhooks → webhook lifecycle/test events
 *   ✓ /admin/audit (auth/broadcast/system*) → system channel events
 *
 * 已讀／封存狀態存在 localStorage（per-event id）：
 *   danmu.notifications.read     = JSON [id1, id2, ...]
 *   danmu.notifications.archived = JSON [id1, id2, ...]
 * （加星隨三欄收件匣一起退場——面板只列未讀。）
 *
 * Loaded as <script defer> in admin.html.
 */
(function () {
  "use strict";

  const READ_KEY = "danmu.notifications.read";
  const ARCHIVE_KEY = "danmu.notifications.archived";

  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  let _state = {
    items: [],         // aggregated [{id, sev, src, ts, title, desc}]
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
  function _markRead(id) {
    const s = _readSet(READ_KEY); s.add(id); _writeSet(READ_KEY, s);
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
    _renderBadge();
    if (_isOpen()) _renderPanel();
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

  // ── 右上彈出面板（設計稿 08 · N1）─────────────────────────────────
  //
  // 稿上這不是一條路由，是「頂欄鈴鐺（帶數字 badge）開啟的面板」。之前它是
  // 一整頁三欄式收件匣（篩選欄＋清單＋詳情窗），還帶著 全部／未讀／已加星／
  // 已封存 四個分頁與嚴重度篩選。通知的用途是「有件事你可能要處理」——為它
  // 蓋一座三欄的收件匣，等於把一個瞄一眼的東西做成一份要經營的工作。
  //
  // 四個來源的聚合邏輯原封不動保留，那是這個模組真正的價值。

  const PANEL_ID = "admin-notif-panel";

  // src 是聚合時寫死的英文內部名，不該直接給使用者看；順便決定「查看」去哪。
  const SRC_MAP = {
    Moderation:   { key: "adminNavModeration",   hash: "#/moderation" },
    Webhooks:     { key: "adminNavIntegrations", hash: "#/integrations/webhooks" },
    "Fire Token": { key: "adminNavIntegrations", hash: "#/integrations/plugins" },
    System:       { key: "adminNavSystem",       hash: "#/events" },
  };

  function _srcLabel(src) {
    const m = SRC_MAP[src];
    return m ? ServerI18n.t(m.key) : src;
  }

  function _unreadItems() {
    const read = _readSet(READ_KEY);
    const archived = _readSet(ARCHIVE_KEY);
    return _state.items.filter((it) => !read.has(it.id) && !archived.has(it.id));
  }

  function _renderBadge() {
    const badge = document.querySelector("[data-notif-badge]");
    if (!badge) return;
    const n = _unreadItems().length;
    badge.textContent = n > 99 ? "99+" : String(n);
    badge.hidden = n === 0;
  }

  function _renderPanel() {
    const panel = document.getElementById(PANEL_ID);
    if (!panel) return;
    const items = _unreadItems().slice(0, 20);
    const list = items.length
      ? items.map((it) => {
          const m = SRC_MAP[it.src];
          return (
            '<li class="admin-notif__item" data-sev="' + escapeHtml(it.sev) + '">' +
            '<div class="admin-notif__text">' + escapeHtml(it.title) + "</div>" +
            '<div class="admin-notif__meta">' +
              escapeHtml(_srcLabel(it.src)) + " · " + escapeHtml(_humanDelta(it.ts)) +
            "</div>" +
            (m
              ? '<button type="button" class="admin-notif__action" data-notif-go="' +
                escapeHtml(m.hash) + '" data-notif-id="' + escapeHtml(it.id) + '">' +
                escapeHtml(ServerI18n.t("notifViewBtn")) + "</button>"
              : "") +
            "</li>"
          );
        }).join("")
      : '<li class="admin-notif__empty">' + escapeHtml(ServerI18n.t("notifEmpty")) + "</li>";

    panel.innerHTML =
      '<div class="admin-notif__head">' +
        '<span class="admin-notif__title">' + escapeHtml(ServerI18n.t("adminRouteTitle_notifications")) + "</span>" +
        '<button type="button" class="admin-notif__readall" data-notif-readall>' +
          escapeHtml(ServerI18n.t("notifMarkAllRead")) + "</button>" +
      "</div>" +
      '<ul class="admin-notif__list">' + list + "</ul>";
  }

  function _humanDelta(t) {
    if (!t) return "—";
    const diffSec = (Date.now() - t) / 1000;
    if (diffSec < 60) return ServerI18n.t("notifTimeSecAgo", { n: Math.floor(diffSec) });
    if (diffSec < 3600) return ServerI18n.t("notifTimeMinAgo", { n: Math.floor(diffSec / 60) });
    if (diffSec < 86400) return ServerI18n.t("notifTimeHourAgo", { n: Math.floor(diffSec / 3600) });
    return ServerI18n.t("notifTimeDayAgo", { n: Math.floor(diffSec / 86400) });
  }

  function _isOpen() {
    const panel = document.getElementById(PANEL_ID);
    return !!panel && !panel.hidden;
  }

  function openPanel() {
    const panel = document.getElementById(PANEL_ID);
    if (!panel) return;
    _renderPanel();
    panel.hidden = false;
    if (!_state.refreshTimer) _state.refreshTimer = setInterval(_fetchAll, 30000);
  }

  function _openIfHashRequests() {
    if ((location.hash || "").replace(/^#\/?/, "").split("/")[0] === "notifications") openPanel();
  }

  function closePanel() {
    const panel = document.getElementById(PANEL_ID);
    if (panel) panel.hidden = true;
    if (_state.refreshTimer) {
      clearInterval(_state.refreshTimer);
      _state.refreshTimer = 0;
    }
  }

  function togglePanel() {
    if (_isOpen()) closePanel();
    else openPanel();
  }

  // 鈴鐺掛在頂欄。admin shell 會重繪 topbar，所以每次都補一次。
  function _mountBell() {
    const actions = document.querySelector(".admin-dash-topbar-actions");
    if (!actions || document.getElementById("admin-notif-bell")) return;
    const btn = document.createElement("button");
    btn.id = "admin-notif-bell";
    btn.type = "button";
    btn.className = "admin-dash-search is-icon-only admin-notif-bell";
    btn.setAttribute("aria-label", ServerI18n.t("adminRouteTitle_notifications"));
    btn.title = ServerI18n.t("adminRouteTitle_notifications");
    btn.innerHTML =
      '<span aria-hidden="true">◍</span>' +
      '<span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>';
    actions.insertBefore(btn, actions.firstChild);

    if (!document.getElementById(PANEL_ID)) {
      const panel = document.createElement("div");
      panel.id = PANEL_ID;
      panel.className = "admin-notif";
      panel.setAttribute("role", "dialog");
      panel.setAttribute("aria-label", ServerI18n.t("adminRouteTitle_notifications"));
      panel.hidden = true;
      document.body.appendChild(panel);
    }
    _renderBadge();
    // 面板剛剛才存在——如果網址就是要開它，現在補開。
    // 舊書籤 `#/notifications` 走的正是這條路：`_bind()` 在載入時就檢查過一次
    // hash，但那時 shell 還沒畫出 topbar，`_mountBell()` 直接 early-return，
    // `openPanel()` 因為 `if (!panel) return` 而**靜默**什麼都沒做。
    // 所以直接開 `/admin#/notifications` 只會看到一個空頁面；載入後再切 hash
    // 反而正常——這種「只有冷啟動壞掉」的差異最容易被漏掉。
    _openIfHashRequests();
  }

  function _bind() {
    document.addEventListener("click", (e) => {
      if (e.target.closest("#admin-notif-bell")) {
        e.preventDefault();
        togglePanel();
        return;
      }
      const go = e.target.closest("[data-notif-go]");
      if (go) {
        _markRead(go.dataset.notifId);
        closePanel();
        location.hash = go.dataset.notifGo;
        _renderBadge();
        return;
      }
      if (e.target.closest("[data-notif-readall]")) {
        _unreadItems().forEach((it) => _markRead(it.id));
        _renderPanel();
        _renderBadge();
        return;
      }
      if (_isOpen() && !e.target.closest("#" + PANEL_ID)) closePanel();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && _isOpen()) closePanel();
    });

    // 舊書籤 #/notifications 沒有頁面了，改成把面板打開。
    window.addEventListener("hashchange", _openIfHashRequests);
    _openIfHashRequests();
  }

  function init() {
    _mountBell();
    _fetchAll();
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!(window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in)) return;
    // shell 會重繪 topbar，鈴鐺每次都要補回去。
    const observer = new MutationObserver(_mountBell);
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true, subtree: true,
    });
    _bind();
    init();
  });
})();
