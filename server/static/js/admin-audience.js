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
 * Right detail panel (prototype admin-batch7.jsx:723) — 2026-04-29 ship.
 * Click any row to open the inspection drawer:
 *   - HIGH RISK / FLAGGED / NORMAL chip + close (✕)
 *   - Avatar + nick + fp
 *   - ⚠ FLAG block: rule list synthesized from message_count + state
 *     (real BE flags require new schema; we derive heuristics from
 *     existing fields — message_count, state, ip frequency)
 *   - 近 5 分鐘訊息: fetched from /admin/history filtered by fingerprint
 *   - 建議動作: ban (real) / mask (real if filters API exposes) /
 *     kick (placeholder, no kick endpoint) / mark-safe (clears flag)
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

  // Pseudo-random color per fingerprint (stable across reloads)
  const AVATAR_COLORS = ["#38bdf8", "#fbbf24", "#86efac", "#f87171", "#94a3b8", "#64748b", "#334155", "#1e293b"];

  const PAGE_SIZE = 20;

  let _state = {
    records: [],
    filter: "all",
    shown: PAGE_SIZE,     // 設計稿 15 · AU1 底部的「顯示 N / M　載入更多」
    search: "",
    sort: "msgs",
    refreshTimer: 0,
    selectedFp: null,
    detailMessages: [],     // last-5-min messages for selectedFp
    detailLoading: false,
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

  function _riskClassFor(level) {
    if (level === "blocked" || level === "high") return "is-danger";
    if (level === "mid") return "is-warn";
    return "is-success";
  }

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-audience-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("audiencePageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("audiencePageNote")}</p>
        </div>

        <div class="admin-aud-grid">
          <div class="admin-aud-stats" data-aud-stats></div>

          <div class="admin-aud-main-row">
            <div class="admin-aud-table-wrap">
              <div class="admin-ui-toolbar admin-aud-toolbar">
                <!-- 設計稿 15 · AU1 的篩選列：搜尋框＋排序。稿上還有一個
                     「這場 · 37 人」的下拉，但這份名單是 in-memory 的即時
                     聚合、沒有場次維度——與其做一個只有一個選項的下拉，
                     不如不做。 -->
                <input type="search" class="admin-ui-input admin-aud-search" data-aud-search
                       placeholder="${ServerI18n.t("audienceSearchPlaceholder")}"
                       aria-label="${ServerI18n.t("audienceSearchPlaceholder")}" />
                <select class="admin-ui-select admin-aud-sort" data-aud-sort
                        aria-label="${ServerI18n.t("audienceSortAria")}">
                  <option value="msgs">${ServerI18n.t("audienceSortByMsgs")}</option>
                  <option value="last_seen">${ServerI18n.t("audienceSortByLastSeen")}</option>
                </select>
                <span class="admin-ui-summary admin-aud-summary" data-aud-summary>${ServerI18n.t("audienceLoading")}</span>
                <span class="admin-ui-spacer"></span>
                <span class="admin-ui-chip-group admin-aud-filters" data-aud-filters></span>
                <button type="button" class="admin-ui-action admin-aud-refresh" data-aud-action="refresh" aria-label="${ServerI18n.t("audienceRefreshAria")}">↻</button>
              </div>
              <div class="admin-aud-list" data-aud-list>
                <div class="admin-aud-loading">${ServerI18n.t("audienceListLoading")}</div>
              </div>
            </div>
            <aside class="admin-aud-detail" data-aud-detail hidden>
              <!-- populated by _renderDetail() on row click -->
            </aside>
          </div>
        </div>
      </div>`;
  }

  function _filteredRecords() {
    const q = _state.search.trim().toLowerCase();
    let records = _state.records.slice();
    if (q) {
      // 稿上寫「找暱稱或裝置識別」——就這兩個欄位，不要偷偷也搜 IP。
      records = records.filter(function (r) {
        return (
          String(r.nickname || "").toLowerCase().indexOf(q) !== -1 ||
          String(r.hash || "").toLowerCase().indexOf(q) !== -1
        );
      });
    }
    records.sort(function (a, b) {
      if (_state.sort === "last_seen") {
        return (Number(b.last_seen) || 0) - (Number(a.last_seen) || 0);
      }
      return (Number(b.msgs) || 0) - (Number(a.msgs) || 0);
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
    const totalMsgs = records.reduce(function (s, r) { return s + (Number(r.msgs) || 0); }, 0);
    const activeFiveMin = records.filter(function (r) {
      const t = r.last_seen;
      if (!t) return false;
      const ms = typeof t === "number" ? t * 1000 : new Date(t).getTime();
      return (Date.now() - ms) / 1000 < 300;
    }).length;
    stats.innerHTML = `
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${total}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${activeFiveMin}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${totalMsgs}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${flagged}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${blocked}</div></div>`;
  }

  function _renderFilters() {
    const filters = document.querySelector("[data-aud-filters]");
    if (!filters) return;
    const total = _state.records.length;
    const flagCount = _state.records.filter(function (r) { return r.state === "flagged" || r.state === "blocked"; }).length;
    filters.innerHTML = `
      <button type="button" class="admin-ui-chip admin-aud-filter ${_state.filter === "all" ? "is-active" : ""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll", { n: total })}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${_state.filter === "flagged" ? "is-active" : ""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged", { n: flagCount })}</button>`;
  }

  // ── 表格（設計稿 15 · AU1）────────────────────────────────────────
  //
  // 欄位照稿：頭像／觀眾／裝置識別／訊息／被擋／最後活動／⋯
  //
  // **IP 與 UA 兩欄退場**：頁面說明寫著「用裝置識別區分，不收個資」，旁邊
  // 卻擺著每個人的 IP，是自己打自己的臉。要查 IP 的場合是審核，那裡有。
  //
  // 「觀眾」與「訊息」兩欄之前**永遠是假的**：前端讀 `r.nickname` 與
  // `r.message_count`，但 /admin/audience/list 從來沒有回過這兩個欄位——
  // 所以每一列都顯示「匿名」和「0」，不管那個人送了幾則。nickname 這次補進
  // fingerprint_tracker，訊息數改讀 API 真的有的 `msgs`。

  const ANON_KEY = "__anon__";

  function _isAnon(r) {
    const n = (r.nickname || "").trim();
    // 「匿名」是後端契約值（mod_queue.py 的 nickname fallback）
    return !n || n === "匿名";
  }

  function _shortFp(r) {
    const h = r.hash || r.fingerprint || "";
    if (!h) return "—";
    return h.length > 9 ? h.slice(0, 4) + "…" + h.slice(-4) : h;
  }

  /** 匿名者合併成一列（設計稿 15 · AU1：「Anonymous 合併成一列並標『×12 位』」）。 */
  function _groupedRecords() {
    const rows = [];
    const anon = [];
    _filteredRecords().forEach(function (r) {
      if (_isAnon(r)) anon.push(r);
      else rows.push(r);
    });
    if (anon.length) {
      rows.push({
        _anonGroup: true,
        _count: anon.length,
        fingerprint: ANON_KEY,
        msgs: anon.reduce(function (n, r) { return n + (Number(r.msgs) || 0); }, 0),
        blocked: anon.reduce(function (n, r) { return n + (Number(r.blocked) || 0); }, 0),
        last_seen: Math.max.apply(null, anon.map(function (r) { return r.last_seen || 0; })),
        state: anon.some(function (r) { return r.state === "blocked"; }) ? "blocked" : "active",
      });
    }
    return rows;
  }

  function _renderList() {
    const list = document.querySelector("[data-aud-list]");
    const summary = document.querySelector("[data-aud-summary]");
    if (!list) return;
    const records = _groupedRecords();
    const shown = Math.min(records.length, _state.shown);
    if (summary) {
      summary.textContent = ServerI18n.t("audienceShownOfTotal", {
        n: shown,
        total: records.length,
      });
    }
    if (records.length === 0) {
      list.innerHTML = "";
      const card = window.AdminEmpty.render("audience");
      card.dataset.emptyKind = "audience";
      list.appendChild(card);
      return;
    }

    const headerHtml = `
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`;

    const rowsHtml = records.slice(0, shown).map(function (r) {
      const fp = r.fingerprint || "—";
      const isBlocked = r.state === "blocked";
      const nick = r._anonGroup
        ? ServerI18n.t("audienceAnonymous")
        : (r.nickname || "").trim();
      const initial = r._anonGroup ? "?" : nick.slice(0, 1);
      const color = _hashColor(fp);
      const selectedCls = _state.selectedFp === fp ? " is-selected" : "";
      return `
        <div class="admin-aud-row${selectedCls}" data-aud-row data-aud-fp="${escapeHtml(fp)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${color}">${escapeHtml(initial)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${escapeHtml(nick)}</span>
            ${r._anonGroup
              ? `<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount", { n: r._count })}</span>`
              : ""}
            ${isBlocked && !r._anonGroup
              ? `<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`
              : ""}
          </span>
          <span class="col col-fp">${r._anonGroup ? "—" : escapeHtml(_shortFp(r))}</span>
          <span class="col col-msgs">${Number(r.msgs) || 0}</span>
          <span class="col col-blocked">${Number(r.blocked) || 0}</span>
          <span class="col col-seen">${escapeHtml(_humanDelta(r.last_seen))}</span>
          <span class="col col-actions">
            ${r._anonGroup
              ? ""
              : `<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${escapeHtml(fp)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`;
    }).join("");

    const moreHtml = records.length > shown
      ? `<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`
      : "";

    list.innerHTML = headerHtml + rowsHtml + moreHtml;
  }

  // ── detail panel ─────────────────────────────────────────────────

  function _findRecord(fp) {
    if (!fp) return null;
    return _state.records.find(function (r) { return r.fingerprint === fp; }) || null;
  }

  // Synthesize a risk assessment from fields the BE already provides.
  // Real BE risk schema is in §H.2 — until that lands, we surface
  // observable heuristics so the panel isn't empty.
  function _assessRisk(rec) {
    if (!rec) return { level: "normal", color: "var(--hud-lime)", label: "NORMAL", rules: [] };
    const rules = [];
    const msgs = Number(rec.msgs) || 0;
    const fp = rec.fingerprint || "";
    if (rec.state === "blocked") rules.push(ServerI18n.t("audienceRuleBlocked"));
    if (rec.state === "flagged") rules.push(ServerI18n.t("audienceRuleFlagged"));
    if (msgs >= 25) rules.push(ServerI18n.t("audienceRuleMsgOver", { n: msgs }));
    else if (msgs >= 15) rules.push(ServerI18n.t("audienceRuleMsgNear", { n: msgs }));
    // Same-IP-multi-fp signal (if BE exposes it later we'll surface it)
    const sameIp = _state.records.filter(function (r) {
      return r.ip && rec.ip && r.ip === rec.ip;
    }).length;
    if (sameIp >= 3) rules.push(ServerI18n.t("audienceRuleSameIp", { n: sameIp }));
    if (fp.indexOf("slido") === 0 || fp.indexOf("ext_") === 0) {
      rules.push(ServerI18n.t("audienceRuleBridge"));
    }
    if (rec.nickname === "匿名" || !rec.nickname) {
      rules.push(ServerI18n.t("audienceRuleNoNick"));
    }
    let level = "normal";
    let color = "var(--hud-lime)";
    let label = "NORMAL";
    if (rec.state === "blocked") { level = "blocked"; color = "var(--hud-crimson)"; label = "BLOCKED"; }
    else if (rec.state === "flagged" || msgs >= 25) { level = "high"; color = "var(--hud-crimson)"; label = "HIGH RISK"; }
    else if (msgs >= 15 || sameIp >= 3) { level = "mid"; color = "var(--hud-amber)"; label = "MID"; }
    return { level: level, color: color, label: label, rules: rules };
  }

  async function _loadRecentMessages(fp) {
    _state.detailLoading = true;
    try {
      const r = await fetch("/admin/history?hours=1&limit=200", { credentials: "same-origin" });
      if (!r.ok) { _state.detailMessages = []; return; }
      const data = await r.json();
      const records = Array.isArray(data.records) ? data.records : [];
      const cutoff = Date.now() - 5 * 60 * 1000; // last 5 min
      _state.detailMessages = records
        .filter(function (m) {
          if ((m.fingerprint || "") !== fp) return false;
          const ts = m.timestamp ? new Date(m.timestamp).getTime() : 0;
          return ts >= cutoff;
        })
        .slice(0, 8); // cap render
    } catch (_) {
      _state.detailMessages = [];
    } finally {
      _state.detailLoading = false;
    }
  }

  function _renderDetail() {
    const detail = document.querySelector("[data-aud-detail]");
    if (!detail) return;
    const fp = _state.selectedFp;
    if (!fp) {
      detail.hidden = true;
      detail.innerHTML = "";
      return;
    }
    const rec = _findRecord(fp);
    if (!rec) {
      _state.selectedFp = null;
      detail.hidden = true;
      return;
    }
    detail.hidden = false;
    const risk = _assessRisk(rec);
    detail.dataset.riskLevel = risk.level;
    const color = _hashColor(fp);
    const isAnon = !rec.nickname || rec.nickname === "匿名";
    const nick = isAnon ? ServerI18n.t("audienceAnonymous") : rec.nickname;
    const initial = isAnon ? "?" : nick.slice(0, 1);
    const fpShort = "fp:" + (fp || "").slice(0, 8);
    const rulesHtml = risk.rules.length
      ? risk.rules.map(function (r) { return "<li>" + escapeHtml(r) + "</li>"; }).join("")
      : '<li class="ok">' + ServerI18n.t("audienceNoFlags") + '</li>';

    let messagesHtml = "";
    if (_state.detailLoading) {
      messagesHtml = '<div class="admin-aud-detail-loading">' + ServerI18n.t("audienceDetailLoadingMsgs") + '</div>';
    } else if (_state.detailMessages.length === 0) {
      messagesHtml = '<div class="admin-aud-detail-empty">' + ServerI18n.t("audienceDetailNoMsgs") + '</div>';
    } else {
      messagesHtml = _state.detailMessages.map(function (m) {
        const status = m.muted ? "MASKED" : (m.banned ? "BLOCKED" : "SHOWN");
        const statusColor = m.muted ? "var(--hud-amber)" : (m.banned ? "var(--hud-crimson)" : "var(--hud-lime)");
        const tsLabel = m.timestamp
          ? new Date(m.timestamp).toLocaleTimeString(ServerI18n.dateLocale(), { hour12: false })
          : "—";
        return (
          '<div class="admin-aud-detail-msg">' +
            '<span class="ts">' + escapeHtml(tsLabel) + '</span>' +
            '<span class="m">' + escapeHtml(m.text || "") + '</span>' +
            '<span class="s" style="color:' + statusColor + '">' + status + '</span>' +
          '</div>'
        );
      }).join("");
    }

    detail.innerHTML =
      '<div class="admin-aud-detail-head">' +
        '<span class="admin-ui-pill admin-aud-risk-pill ' + _riskClassFor(risk.level) + '">' + escapeHtml(risk.label) + '</span>' +
        '<button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="' + ServerI18n.t("audienceCloseAria") + '">' + window.AdminUtils.closeIcon + '</button>' +
      '</div>' +
      '<div class="admin-aud-detail-id">' +
        '<span class="avatar" style="background:' + color + '">' + escapeHtml(initial) + '</span>' +
        '<div>' +
          '<div class="nick">' + escapeHtml(nick) + '</div>' +
          '<div class="fp">' + escapeHtml(fpShort) + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="admin-aud-detail-flag" data-risk="' + risk.level + '">' +
        '<div class="hd">' + ServerI18n.t("audienceFlagHeader", { n: risk.rules.length }) + '</div>' +
        '<ul>' + rulesHtml + '</ul>' +
      '</div>' +
      '<div class="admin-ui-monolabel admin-aud-detail-label">' + ServerI18n.t("audienceDetailMsgsLabel") + '</div>' +
      '<div class="admin-aud-detail-messages">' + messagesHtml + '</div>' +
      '<div class="admin-ui-monolabel admin-aud-detail-label">' + ServerI18n.t("audienceDetailActionsLabel") + '</div>' +
      '<div class="admin-aud-detail-actions">' +
        // Primary ban (long-term moderation_bans entry) — still useful
        // even alongside kick because it scopes to all bans, not just
        // audience-overlay state.
        '<button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="' + escapeHtml(fp) + '">' + ServerI18n.t("audienceActionBanFp") + '</button>' +
        '<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="' + escapeHtml(fp) + '">' + ServerI18n.t("audienceActionMask") + '</button>' +
        // Kick (= audience kick endpoint, also adds permanent fp ban).
        // Toggle to unkick when the row is already kicked.
        (rec.is_kicked
          ? '<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="' + escapeHtml(fp) + '">' + ServerI18n.t("audienceActionUnkick") + '</button>'
          : '<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="' + escapeHtml(fp) + '">' + ServerI18n.t("audienceActionKick") + '</button>'
        ) +
        // Flag toggle — admin-set, overlays risk score.
        '<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="' + escapeHtml(fp) + '" data-aud-flagged="' + (rec.is_flagged ? "true" : "false") + '">' +
          (rec.is_flagged ? ServerI18n.t("audienceActionUnflag") : ServerI18n.t("audienceActionFlag")) +
        '</button>' +
        '<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="' + escapeHtml(fp) + '">' + ServerI18n.t("audienceActionSafe") + '</button>' +
      '</div>';
  }

  function _selectFp(fp) {
    _state.selectedFp = fp;
    _state.detailMessages = [];
    _renderDetail();
    _loadRecentMessages(fp).then(_renderDetail);
  }

  // ── data ─────────────────────────────────────────────────────────

  async function _fetch() {
    // 2026-05-19: switched from /admin/fingerprints to /admin/audience/list
    // (which wraps fingerprints + adds risk_score / risk_factors /
    // is_flagged / is_kicked / kick_reason). Older /admin/fingerprints
    // is still used by the moderation Fingerprints tab — separate surface.
    try {
      const r = await fetch("/admin/audience/list?limit=500", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      // Audience entries carry both the live record fields AND the new
      // overlay state — same row shape consumers expect, just richer.
      _state.records = Array.isArray(data.entries) ? data.entries : [];
      _state.serverStats = (data && data.stats) || null;
      _renderStats();
      _renderFilters();
      _renderList();
      if (_state.selectedFp) _renderDetail();
    } catch (_) { /* silent */ }
  }

  // ── New audience-layer actions ──────────────────────────────────

  // Flag (or unflag) a fingerprint. note is optional admin-side comment.
  async function _flagToggle(fp, flagged, note) {
    if (!fp) return;
    try {
      const r = await window.csrfFetch("/admin/audience/flag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fingerprint: fp, flagged: !!flagged, note: note || "" }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      window.showToast && window.showToast(
        flagged ? ServerI18n.t("audienceToastFlagged", { fp: fp.slice(0, 8) }) : ServerI18n.t("audienceToastUnflagged", { fp: fp.slice(0, 8) }),
        true
      );
      _fetch();
    } catch (e) {
      window.showToast && window.showToast(ServerI18n.t("audienceToastFlagFailed", { msg: e.message || "" }), false);
    }
  }

  // Kick (= permanent fp ban via moderation_bans). Confirm via native
  // dialog because it's destructive — promote to HudConfirm later if
  // the modal pattern is wired here.
  async function _kick(fp, reason) {
    if (!fp || fp === "—") return;
    const why = reason != null ? reason : (window.prompt(
      ServerI18n.t("audienceKickPrompt", { fp: fp.slice(0, 8) }),
      ""
    ) || "");
    if (why === null) return;  // user cancelled
    try {
      const r = await window.csrfFetch("/admin/audience/kick", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fingerprint: fp, reason: why }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      window.showToast && window.showToast(ServerI18n.t("audienceToastKicked", { fp: fp.slice(0, 8) }), true);
      _fetch();
    } catch (e) {
      window.showToast && window.showToast(ServerI18n.t("audienceToastKickFailed", { msg: e.message || "" }), false);
    }
  }

  async function _unkick(fp) {
    if (!fp) return;
    const ok = await window.HudConfirm?.open({
      icon: "↩",
      title: ServerI18n.t("audienceUnkickTitle"),
      subtitle: "UNKICK · FINGERPRINT CAN SEND AGAIN",
      severity: "warn",
      body: ServerI18n.t("audienceUnkickBody", { fpHtml: '<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:' + escapeHtml(fp.slice(0, 8)) + "</div>" }),
      confirmLabel: ServerI18n.t("audienceUnkickTitle"),
    });
    if (!ok) return;
    try {
      const r = await window.csrfFetch("/admin/audience/unkick", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fingerprint: fp }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      window.showToast && window.showToast(ServerI18n.t("audienceToastUnkicked"), true);
      _fetch();
    } catch (e) {
      window.showToast && window.showToast(ServerI18n.t("audienceToastUnkickFailed", { msg: e.message || "" }), false);
    }
  }

  async function _maskFingerprint(fp) {
    if (!fp || fp === "—") return;
    try {
      const r = await window.csrfFetch("/admin/filters/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "fingerprint",
          pattern: fp,
          action: "mask",
          priority: 0,
          enabled: true,
        }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      window.showToast && window.showToast(ServerI18n.t("audienceToastMasked", { fp: fp.slice(0, 8) }), true);
      _fetch();
    } catch (e) {
      window.showToast && window.showToast(ServerI18n.t("audienceToastMaskFailed", { msg: e.message || "" }), false);
    }
  }

  // Mark safe = remove every fingerprint filter rule pointing at this fp.
  // Uses /admin/filters/list + cascading /admin/filters/remove. Best-effort
  // — UI shows count of rules cleared.
  async function _markSafe(fp) {
    if (!fp || fp === "—") return;
    try {
      const r = await fetch("/admin/filters/list", { credentials: "same-origin" });
      if (!r.ok) throw new Error("HTTP " + r.status);
      const data = await r.json();
      const rules = Array.isArray(data.rules) ? data.rules : [];
      const matches = rules.filter(function (rule) {
        return rule && rule.type === "fingerprint" && rule.pattern === fp;
      });
      if (matches.length === 0) {
        window.showToast && window.showToast(ServerI18n.t("audienceToastNoRules"), true);
        return;
      }
      let removed = 0;
      for (const m of matches) {
        const rr = await window.csrfFetch("/admin/filters/remove", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ rule_id: m.rule_id || m.id }),
        }).catch(function () { return { ok: false }; });
        if (rr.ok) removed += 1;
      }
      window.showToast && window.showToast(ServerI18n.t("audienceToastRulesCleared", { n: removed, fp: fp.slice(0, 8) }), true);
      _fetch();
    } catch (e) {
      window.showToast && window.showToast(ServerI18n.t("audienceToastClearFailed", { msg: e.message || "" }), false);
    }
  }

  async function _ban(fp) {
    if (!fp || fp === "—") return;
    const ok = await window.HudConfirm?.open({
      icon: "⊘",
      title: ServerI18n.t("audienceBanTitle"),
      subtitle: "BAN FINGERPRINT · FUTURE MESSAGES AUTO-MASKED",
      severity: "danger",
      body: ServerI18n.t("audienceBanBody", { fpHtml: '<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:' + escapeHtml(fp.slice(0, 8)) + "</div>" }),
      confirmLabel: ServerI18n.t("audienceBanConfirm"),
    });
    if (!ok) return;
    try {
      const r = await window.csrfFetch("/admin/live/block", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "fingerprint", value: fp }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      window.showToast && window.showToast(ServerI18n.t("audienceToastBanned", { fp: fp.slice(0, 8) }), true);
      _fetch();
    } catch (e) {
      window.showToast && window.showToast(ServerI18n.t("audienceToastBanFailed", { msg: e.message || "" }), false);
    }
  }

  // ── handlers ─────────────────────────────────────────────────────

  function _bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;

    page.addEventListener("input", function (e) {
      const box = e.target.closest("[data-aud-search]");
      if (!box) return;
      _state.search = box.value || "";
      _state.shown = PAGE_SIZE;
      _renderList();
    });
    page.addEventListener("change", function (e) {
      const sel = e.target.closest("[data-aud-sort]");
      if (!sel) return;
      _state.sort = sel.value;
      _renderList();
    });

    page.addEventListener("click", function (e) {
      const filter = e.target.closest("[data-aud-filter]");
      if (filter) {
        _state.filter = filter.dataset.audFilter;
        _state.shown = PAGE_SIZE;
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
      // 設計稿 15 · AU1 底部的「載入更多」
      const more = e.target.closest("[data-aud-action='more']");
      if (more) {
        _state.shown += PAGE_SIZE;
        _renderList();
        return;
      }
      // Detail panel actions
      const closeDetail = e.target.closest("[data-aud-action='close-detail']");
      if (closeDetail) {
        _state.selectedFp = null;
        _renderDetail();
        return;
      }
      const detailBan = e.target.closest("[data-aud-action='detail-ban']");
      if (detailBan) { _ban(detailBan.dataset.audFp); return; }
      const detailMask = e.target.closest("[data-aud-action='detail-mask']");
      if (detailMask) { _maskFingerprint(detailMask.dataset.audFp); return; }
      const detailSafe = e.target.closest("[data-aud-action='detail-safe']");
      if (detailSafe) { _markSafe(detailSafe.dataset.audFp); return; }
      // New audience-layer actions (2026-05-19)
      const flag = e.target.closest("[data-aud-action='flag']");
      if (flag) {
        e.stopPropagation();
        _flagToggle(flag.dataset.audFp, flag.dataset.audFlagged !== "true");
        return;
      }
      const kick = e.target.closest("[data-aud-action='kick']");
      if (kick) { e.stopPropagation(); _kick(kick.dataset.audFp); return; }
      const unkick = e.target.closest("[data-aud-action='unkick']");
      if (unkick) { e.stopPropagation(); _unkick(unkick.dataset.audFp); return; }
      // Row click → open detail (only if click wasn't on action / filter button)
      const row = e.target.closest("[data-aud-row]");
      // 匿名那一列是好幾個人合起來的，沒有「這一個人」的明細可以看
      if (row && row.dataset.audFp === ANON_KEY) return;
      if (row && !e.target.closest("button")) {
        _selectFp(row.dataset.audFp);
        return;
      }
    });
  }

  function _syncVisibility() {
    const route = document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf || "dashboard";
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
