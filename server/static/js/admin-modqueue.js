/**
 * Admin · Moderation Queue (P0-4, design v4-r3 2026-05-18 admin-modqueue.jsx).
 *
 * 3-column swimlane Kanban (Pending / Approved / Rejected) for messages
 * flagged with a "review" action. Cards show fp-derived avatar + nick +
 * flagged content + matched rule + severity + auto-reject countdown.
 *
 * Backend contract (server-side WIP):
 *   GET  /admin/modqueue/list    → { pending:[…], approved:[…], rejected:[…], stats:{…} }
 *   POST /admin/modqueue/approve { id }
 *   POST /admin/modqueue/reject  { id, reason? }
 *   POST /admin/modqueue/bulk    { action:"approve"|"reject", severity?, ids? }
 *
 * Until the backend ships a `review` action in filter_engine the list is
 * always empty — page shows the AdminEmpty "modqueue" state ("All Clear").
 */
(function () {
  "use strict";

  const SECTION_ID = "sec-modqueue";
  const LIST_URL = "/admin/modqueue/list";
  const REFRESH_MS = 4000;
  const AUTO_REJECT_DEFAULT_SEC = 30;

  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  // ── State ──────────────────────────────────────────────────────────

  const _state = {
    pending: [],
    approved: [],
    rejected: [],
    stats: { throughput: 0, avg_review_sec: 0, auto_reject_pct: 0 },
    timer: 0,
    countdownTimer: 0,
    autoRejectSec: AUTO_REJECT_DEFAULT_SEC,
  };

  // Severity → accent token
  const SEV_COLOR = {
    high:   "var(--color-danger, #ff4d4f)",
    medium: "var(--color-warning, #fbbf24)",
    low:    "var(--color-text-muted, #94a3b8)",
  };

  function _fpHue(fp) {
    let h = 0;
    const s = String(fp || "");
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) & 0xffff;
    return h % 360;
  }

  function _countdown(msg) {
    if (!msg.created_at_ms) return null;
    const elapsed = (Date.now() - msg.created_at_ms) / 1000;
    const left = Math.max(0, _state.autoRejectSec - elapsed);
    return Math.ceil(left);
  }

  // ── Render ─────────────────────────────────────────────────────────

  function _renderCard(msg, col) {
    const sev = (msg.severity || "low").toLowerCase();
    const sevCol = SEV_COLOR[sev] || SEV_COLOR.low;
    const hue = _fpHue(msg.fp);
    const fpShort = String(msg.fp || "—").slice(0, 8);
    const nick = msg.nick || msg.nickname || "匿名";
    const initial = (nick || "?").slice(0, 2).toUpperCase();
    const left = (col === "pending") ? _countdown(msg) : null;

    const actionBlock = (col === "pending") ? `
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${escapeHtml(msg.id || "")}">✓ APPROVE</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${escapeHtml(msg.id || "")}">✕ REJECT</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${escapeHtml(msg.id || "")}" aria-label="More">⋯</button>
      </div>` : "";

    const resolvedStamp = (() => {
      if (col === "approved") {
        return `<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          APPROVED · ${escapeHtml(msg.resolved_by || "admin")} · ${escapeHtml(msg.resolved_ago || "")}
        </div>`;
      }
      if (col === "rejected") {
        const tail = msg.auto_rejected
          ? `AUTO-REJECTED · ${escapeHtml(String(_state.autoRejectSec))}s timeout`
          : `REJECTED · ${escapeHtml(msg.resolved_by || "admin")} · ${escapeHtml(msg.resolved_ago || "")}`;
        return `<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${tail}
        </div>`;
      }
      return "";
    })();

    const countdownChip = (col === "pending" && left != null) ? `
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${left}s
      </span>` : "";

    return `
      <div class="admin-mq-card" data-mq-id="${escapeHtml(msg.id || "")}" data-mq-sev="${escapeHtml(sev)}" style="--mq-sev:${sevCol}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${hue})">${escapeHtml(initial)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${escapeHtml(nick)}</div>
            <div class="admin-mq-card__fp">fp:${escapeHtml(fpShort)}</div>
          </div>
          <div class="admin-mq-card__time">${escapeHtml(msg.time || "")}</div>
        </div>
        <div class="admin-mq-card__body">${escapeHtml(msg.content || msg.text || "")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${sevCol}">${escapeHtml(sev.toUpperCase())}</span>
          <span class="admin-mq-card__rule">RULE: ${escapeHtml(msg.rule || msg.matched_rule || "?")}</span>
          ${countdownChip}
        </div>
        ${actionBlock}
        ${resolvedStamp}
      </div>`;
  }

  function _renderColumn(host, msgs, col) {
    if (!host) return;
    host.innerHTML = msgs.map((m) => _renderCard(m, col)).join("");
  }

  function _renderEmpty() {
    const root = document.getElementById(SECTION_ID);
    if (!root) return;
    // Hide swimlane, show the All-Clear empty state.
    root.querySelector(".admin-mq__body").hidden = true;
    const emptyHost = root.querySelector("[data-mq-empty]");
    if (emptyHost && window.AdminEmpty) {
      emptyHost.hidden = false;
      emptyHost.innerHTML = "";
      emptyHost.appendChild(window.AdminEmpty.renderCustom({
        icon: "✓",
        title: "佇列已清空",
        desc: "所有待審訊息已處理完畢。當新的敏感訊息被過濾時，會自動出現在這裡。",
        accent: "#86efac",
        actionLabel: "← 回到 Live Feed",
        action: function () { location.hash = "#/live"; },
        extra: '<a href="#/audit" style="color:var(--color-primary, #38bdf8); text-decoration:underline">查看審核紀錄 →</a>',
      }));
    }
  }

  function _render() {
    const root = document.getElementById(SECTION_ID);
    if (!root) return;
    const total = _state.pending.length + _state.approved.length + _state.rejected.length;
    if (total === 0) { _renderEmpty(); return; }

    root.querySelector(".admin-mq__body").hidden = false;
    const emptyHost = root.querySelector("[data-mq-empty]");
    if (emptyHost) emptyHost.hidden = true;

    _renderColumn(root.querySelector("[data-mq-col-pending]"),  _state.pending,  "pending");
    _renderColumn(root.querySelector("[data-mq-col-approved]"), _state.approved, "approved");
    _renderColumn(root.querySelector("[data-mq-col-rejected]"), _state.rejected, "rejected");

    const setCnt = (sel, n) => { const el = root.querySelector(sel); if (el) el.textContent = String(n); };
    setCnt("[data-mq-cnt-pending]",  _state.pending.length);
    setCnt("[data-mq-cnt-approved]", _state.approved.length);
    setCnt("[data-mq-cnt-rejected]", _state.rejected.length);

    const oldest = _state.pending[_state.pending.length - 1];
    const oldestEl = root.querySelector("[data-mq-oldest]");
    if (oldestEl) {
      const left = oldest ? _countdown(oldest) : null;
      oldestEl.textContent = (left != null) ? `oldest: ${left}s` : "";
    }

    // Throughput stats
    setCnt("[data-mq-throughput]", _state.stats.throughput.toFixed
      ? _state.stats.throughput.toFixed(1) : _state.stats.throughput);
    setCnt("[data-mq-avg-review]", _state.stats.avg_review_sec.toFixed
      ? _state.stats.avg_review_sec.toFixed(1) : _state.stats.avg_review_sec);
    setCnt("[data-mq-auto-rate]",  Math.round((_state.stats.auto_reject_pct || 0)) + "%");
  }

  // ── Network ────────────────────────────────────────────────────────

  async function _fetch() {
    try {
      const r = await fetch(LIST_URL, { credentials: "same-origin" });
      if (!r.ok) {
        // Backend not yet shipped → treat as empty queue.
        _state.pending = []; _state.approved = []; _state.rejected = [];
        _render();
        return;
      }
      const j = await r.json();
      _state.pending  = Array.isArray(j.pending)  ? j.pending  : [];
      _state.approved = Array.isArray(j.approved) ? j.approved : [];
      _state.rejected = Array.isArray(j.rejected) ? j.rejected : [];
      _state.stats    = j.stats || _state.stats;
      if (typeof j.auto_reject_sec === "number") _state.autoRejectSec = j.auto_reject_sec;
      _render();
    } catch (_) { /* silent retry next tick */ }
  }

  async function _act(id, action, body) {
    if (!window.csrfFetch) return;
    try {
      const r = await window.csrfFetch("/admin/modqueue/" + action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...(body || {}) }),
      });
      if (r.ok) {
        window.showToast && window.showToast(
          action === "approve" ? "已通過" : "已拒絕", true);
        _fetch();
      } else {
        const j = await r.json().catch(() => ({}));
        window.showToast && window.showToast("動作失敗 · " + (j.error || ""), false);
      }
    } catch (_) {
      window.showToast && window.showToast("網路錯誤", false);
    }
  }

  // ── Template / wiring ──────────────────────────────────────────────

  function _template() {
    return `
      <div id="${SECTION_ID}" class="admin-mq hud-page-stack lg:col-span-2" style="display:none">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">MODERATION · QUEUE · SWIMLANE · REAL-TIME</div>
          <div class="admin-v2-title">審核佇列</div>
        </div>

        <!-- Toolbar: stats chips + bulk + auto-reject config -->
        <div class="admin-mq__toolbar">
          <span class="admin-mq__chip admin-mq__chip--pending">
            <span class="admin-mq__dot admin-mq__dot--amber"></span>
            PENDING · <span data-mq-cnt-pending>0</span>
          </span>
          <span class="admin-mq__counter admin-mq__counter--ok">
            ✓ <span data-mq-cnt-approved>0</span> APPROVED
          </span>
          <span class="admin-mq__counter admin-mq__counter--rej">
            ✕ <span data-mq-cnt-rejected>0</span> REJECTED
          </span>
          <span class="admin-mq__spacer"></span>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--ok" data-mq-bulk="approve-low">✓ APPROVE ALL LOW</button>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--rej" data-mq-bulk="reject-high">✕ REJECT ALL HIGH</button>
          <div class="admin-mq__autoreject">
            <span class="admin-mq__autoreject-label">AUTO-REJECT</span>
            <span class="admin-mq__autoreject-val" data-mq-autoreject>${AUTO_REJECT_DEFAULT_SEC}s</span>
          </div>
        </div>

        <!-- Integration hint -->
        <div class="admin-mq__hint">
          ℹ Live Feed 中標記為「待審」的訊息會自動進入此佇列 · 點 Live Feed 中的 FLAG 行可跳轉到這裡
        </div>

        <!-- Swimlane body -->
        <div class="admin-mq__body">
          <div class="admin-mq__col">
            <div class="admin-mq__col-head admin-mq__col-head--pending">
              <span class="admin-mq__col-dot" style="background:var(--color-warning, #fbbf24)"></span>
              <span class="admin-mq__col-title">PENDING</span>
              <span class="admin-mq__col-count" data-mq-cnt-pending>0</span>
              <span class="admin-mq__col-badge" data-mq-oldest></span>
            </div>
            <div class="admin-mq__col-cards" data-mq-col-pending></div>
          </div>
          <div class="admin-mq__col">
            <div class="admin-mq__col-head admin-mq__col-head--approved">
              <span class="admin-mq__col-dot" style="background:var(--color-success, #86efac)"></span>
              <span class="admin-mq__col-title">APPROVED</span>
              <span class="admin-mq__col-count" data-mq-cnt-approved>0</span>
            </div>
            <div class="admin-mq__col-cards" data-mq-col-approved></div>
          </div>
          <div class="admin-mq__col">
            <div class="admin-mq__col-head admin-mq__col-head--rejected">
              <span class="admin-mq__col-dot" style="background:var(--color-danger, #ff4d4f)"></span>
              <span class="admin-mq__col-title">REJECTED</span>
              <span class="admin-mq__col-count" data-mq-cnt-rejected>0</span>
            </div>
            <div class="admin-mq__col-cards" data-mq-col-rejected></div>
          </div>
        </div>

        <!-- Empty state mount (toggled when total === 0) -->
        <div class="admin-mq__empty" data-mq-empty hidden></div>

        <!-- Footer: throughput stats -->
        <div class="admin-mq__footer">
          <span>THROUGHPUT · <span data-mq-throughput>0</span> decisions/min</span>
          <span>AVG REVIEW · <span data-mq-avg-review>0</span>s</span>
          <span>AUTO-REJECT RATE · <span data-mq-auto-rate>0%</span></span>
          <span class="admin-mq__spacer"></span>
          <span class="admin-mq__health">● QUEUE HEALTHY</span>
        </div>
      </div>`;
  }

  function _bind() {
    const root = document.getElementById(SECTION_ID);
    if (!root) return;
    root.addEventListener("click", (e) => {
      const a = e.target.closest("[data-mq-action]");
      if (a) {
        const id = a.dataset.mqId;
        const action = a.dataset.mqAction;
        if (action === "approve" || action === "reject") _act(id, action);
        return;
      }
      const b = e.target.closest("[data-mq-bulk]");
      if (b) {
        const kind = b.dataset.mqBulk;
        const ok = confirm(kind === "approve-low" ? "通過所有 LOW 嚴重度的訊息？" : "拒絕所有 HIGH 嚴重度的訊息？");
        if (!ok) return;
        const action = kind.startsWith("approve") ? "approve" : "reject";
        const severity = kind.endsWith("low") ? "low" : "high";
        _act(null, "bulk", { action, severity });
      }
    });
  }

  function _syncVisibility() {
    const shell = document.querySelector(".admin-dash-grid");
    const page = document.getElementById(SECTION_ID);
    if (!page) return;
    // IA v5: admin.js router writes the resolved route to
    // `shell.dataset.activeRoute` and the active tab leaf to
    // `shell.dataset.activeLeaf`. `#/modqueue` aliases to
    // moderation/queue, so prefer those dataset fields. Fall back to
    // parsing the raw hash for early-paint and legacy paths.
    const parts = (location.hash || "").replace("#/", "").split("/");
    const route = shell?.dataset.activeRoute || parts[0] || "";
    const tab = shell?.dataset.activeLeaf || parts[1] || "";
    const visible = route === "modqueue"
      || (route === "moderation" && (tab === "queue" || tab === "" || tab === "moderation"));
    page.style.display = visible ? "" : "none";
    if (visible) {
      _fetch();
      if (!_state.timer) _state.timer = setInterval(_fetch, REFRESH_MS);
      if (!_state.countdownTimer) _state.countdownTimer = setInterval(_render, 1000);
    } else {
      if (_state.timer) { clearInterval(_state.timer); _state.timer = 0; }
      if (_state.countdownTimer) { clearInterval(_state.countdownTimer); _state.countdownTimer = 0; }
    }
  }

  function init() {
    // brief 0518-v3 #2 (2026-05-18): modqueue lives under the moderation
    // group as a tab, so the section belongs in moderation-grid, not the
    // legacy settings-grid. Falls back to settings-grid for the bootstrap
    // window where moderation-grid isn't mounted yet.
    const grid = document.getElementById("moderation-grid")
      || document.getElementById("settings-grid");
    if (!grid || document.getElementById(SECTION_ID)) return;
    grid.insertAdjacentHTML("beforeend", _template());
    _bind();
    _syncVisibility();
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    const observer = new MutationObserver(function () {
      const grid = document.getElementById("moderation-grid")
        || document.getElementById("settings-grid");
      if (grid && !document.getElementById(SECTION_ID)) {
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
