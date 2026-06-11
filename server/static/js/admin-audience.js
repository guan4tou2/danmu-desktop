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

  const STATE_META = {
    active:    { color: "var(--hud-lime)", label: "ACTIVE" },
    flagged:   { color: "var(--hud-amber)", label: "FLAGGED" },
    blocked:   { color: "var(--hud-crimson)", label: "BLOCKED" },
    duplicate: { color: "var(--hud-amber)", label: "DUPLICATE" },
    extension: { color: "var(--color-primary, #38bdf8)", label: "EXTENSION" },
    idle:      { color: "var(--color-text-muted, #94a3b8)", label: "IDLE" },
  };

  // Pseudo-random color per fingerprint (stable across reloads)
  const AVATAR_COLORS = ["#38bdf8", "#fbbf24", "#86efac", "#f87171", "#94a3b8", "#64748b", "#334155", "#1e293b"];

  let _state = {
    records: [],
    filter: "all",
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

  function _stateClassFor(stateKey) {
    if (stateKey === "blocked") return "is-danger";
    if (stateKey === "flagged" || stateKey === "duplicate") return "is-warn";
    if (stateKey === "extension") return "is-cyan";
    if (stateKey === "idle") return "is-muted";
    return "is-success";
  }

  function _riskClassFor(level) {
    if (level === "blocked" || level === "high") return "is-danger";
    if (level === "mid") return "is-warn";
    return "is-success";
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

          <div class="admin-aud-main-row">
            <div class="admin-aud-table-wrap">
              <div class="admin-ui-toolbar admin-aud-toolbar">
                <span class="admin-ui-summary admin-aud-summary" data-aud-summary>讀取中…</span>
                <span class="admin-ui-spacer"></span>
                <span class="admin-ui-chip-group admin-aud-filters" data-aud-filters></span>
                <button type="button" class="admin-ui-action admin-aud-refresh" data-aud-action="refresh" aria-label="重新整理觀眾">↻</button>
              </div>
              <div class="admin-aud-list" data-aud-list>
                <div class="admin-aud-loading">載入觀眾列表中…</div>
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
      <div class="admin-aud-stat"><div class="k">5min 活躍</div><div class="v" style="color:var(--hud-lime)">${activeFiveMin}</div></div>
      <div class="admin-aud-stat"><div class="k">總訊息</div><div class="v" style="color:var(--color-primary)">${totalMsgs}</div></div>
      <div class="admin-aud-stat"><div class="k">已標記</div><div class="v" style="color:var(--hud-amber)">${flagged}</div></div>
      <div class="admin-aud-stat"><div class="k">已封禁</div><div class="v" style="color:var(--hud-crimson)">${blocked}</div></div>`;
  }

  function _renderFilters() {
    const filters = document.querySelector("[data-aud-filters]");
    if (!filters) return;
    const total = _state.records.length;
    const flagCount = _state.records.filter(function (r) { return r.state === "flagged" || r.state === "blocked"; }).length;
    filters.innerHTML = `
      <button type="button" class="admin-ui-chip admin-aud-filter ${_state.filter === "all" ? "is-active" : ""}" data-aud-filter="all">全部 ${total}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${_state.filter === "flagged" ? "is-active" : ""}" data-aud-filter="flagged">標記 ${flagCount}</button>`;
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
      const selectedCls = _state.selectedFp === fp ? " is-selected" : "";
      return `
        <div class="admin-aud-row${selectedCls}" data-aud-row data-aud-fp="${escapeHtml(fp)}">
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
            <span class="admin-ui-pill admin-aud-state-pill ${_stateClassFor(stateKey)}">${escapeHtml(stateMeta.label)}</span>
          </span>
          <span class="col col-actions">
            <button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${escapeHtml(fp)}">ban</button>
          </span>
        </div>`;
    }).join("");
    list.innerHTML = headerHtml + rowsHtml;
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
    const msgs = Number(rec.message_count) || 0;
    const fp = rec.fingerprint || "";
    if (rec.state === "blocked") rules.push("已被封禁 · 訊息自動遮罩中");
    if (rec.state === "flagged") rules.push("已被標記 · 等待人工確認");
    if (msgs >= 25) rules.push("訊息量 " + msgs + " 則 · 超過 spam threshold(25)");
    else if (msgs >= 15) rules.push("訊息量 " + msgs + " 則 · 接近 spam threshold(25)");
    // Same-IP-multi-fp signal (if BE exposes it later we'll surface it)
    const sameIp = _state.records.filter(function (r) {
      return r.ip && rec.ip && r.ip === rec.ip;
    }).length;
    if (sameIp >= 3) rules.push("同 IP " + sameIp + " 個指紋 · 可能換裝置 / VPN");
    if (fp.indexOf("slido") === 0 || fp.indexOf("ext_") === 0) {
      rules.push("Slido / extension 橋接 · 訊息來自 fire token");
    }
    if (rec.nickname === "匿名" || !rec.nickname) {
      rules.push("使用者未設暱稱（首次出現）");
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
    const nick = rec.nickname || "匿名";
    const initial = nick === "匿名" ? "?" : nick.slice(0, 1);
    const fpShort = "fp:" + (fp || "").slice(0, 8);
    const rulesHtml = risk.rules.length
      ? risk.rules.map(function (r) { return "<li>" + escapeHtml(r) + "</li>"; }).join("")
      : '<li class="ok">未觸發任何 flag · 行為正常</li>';

    let messagesHtml = "";
    if (_state.detailLoading) {
      messagesHtml = '<div class="admin-aud-detail-loading">載入訊息中…</div>';
    } else if (_state.detailMessages.length === 0) {
      messagesHtml = '<div class="admin-aud-detail-empty">近 5 分鐘無訊息</div>';
    } else {
      messagesHtml = _state.detailMessages.map(function (m) {
        const status = m.muted ? "MASKED" : (m.banned ? "BLOCKED" : "SHOWN");
        const statusColor = m.muted ? "var(--hud-amber)" : (m.banned ? "var(--hud-crimson)" : "var(--hud-lime)");
        const tsLabel = m.timestamp
          ? new Date(m.timestamp).toLocaleTimeString("zh-TW", { hour12: false })
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
        '<button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="關閉">✕</button>' +
      '</div>' +
      '<div class="admin-aud-detail-id">' +
        '<span class="avatar" style="background:' + color + '">' + escapeHtml(initial) + '</span>' +
        '<div>' +
          '<div class="nick">' + escapeHtml(nick) + '</div>' +
          '<div class="fp">' + escapeHtml(fpShort) + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="admin-aud-detail-flag" data-risk="' + risk.level + '">' +
        '<div class="hd">⚠ FLAG · 觸發 ' + risk.rules.length + ' 條規則</div>' +
        '<ul>' + rulesHtml + '</ul>' +
      '</div>' +
      '<div class="admin-v2-monolabel admin-aud-detail-label">近 5 分鐘訊息</div>' +
      '<div class="admin-aud-detail-messages">' + messagesHtml + '</div>' +
      '<div class="admin-v2-monolabel admin-aud-detail-label">建議動作</div>' +
      '<div class="admin-aud-detail-actions">' +
        // Primary ban (long-term moderation_bans entry) — still useful
        // even alongside kick because it scopes to all bans, not just
        // audience-overlay state.
        '<button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="' + escapeHtml(fp) + '">⊗ 立即封禁指紋 · 7 天</button>' +
        '<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="' + escapeHtml(fp) + '">◐ 改為遮罩模式</button>' +
        // Kick (= audience kick endpoint, also adds permanent fp ban).
        // Toggle to unkick when the row is already kicked.
        (rec.is_kicked
          ? '<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="' + escapeHtml(fp) + '">↺ 撤銷踢出</button>'
          : '<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="' + escapeHtml(fp) + '">👢 踢出此場</button>'
        ) +
        // Flag toggle — admin-set, overlays risk score.
        '<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="' + escapeHtml(fp) + '" data-aud-flagged="' + (rec.is_flagged ? "true" : "false") + '">' +
          (rec.is_flagged ? "★ 取消標記" : "☆ 標記為可疑") +
        '</button>' +
        '<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="' + escapeHtml(fp) + '">✓ 標記安全 · 解除 filter rules</button>' +
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
        flagged ? ("已標記 fp:" + fp.slice(0, 8)) : ("已取消標記 fp:" + fp.slice(0, 8)),
        true
      );
      _fetch();
    } catch (e) {
      window.showToast && window.showToast("標記操作失敗：" + (e.message || ""), false);
    }
  }

  // Kick (= permanent fp ban via moderation_bans). Confirm via native
  // dialog because it's destructive — promote to HudConfirm later if
  // the modal pattern is wired here.
  async function _kick(fp, reason) {
    if (!fp || fp === "—") return;
    const why = reason != null ? reason : (window.prompt(
      "踢出指紋 fp:" + fp.slice(0, 8) + " — 輸入原因（可空）",
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
      window.showToast && window.showToast("已踢出 fp:" + fp.slice(0, 8), true);
      _fetch();
    } catch (e) {
      window.showToast && window.showToast("踢出失敗：" + (e.message || ""), false);
    }
  }

  async function _unkick(fp) {
    if (!fp) return;
    if (!confirm("撤銷對 fp:" + fp.slice(0, 8) + " 的踢出？該指紋之後又可送出彈幕。")) return;
    try {
      const r = await window.csrfFetch("/admin/audience/unkick", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fingerprint: fp }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      window.showToast && window.showToast("已撤銷踢出", true);
      _fetch();
    } catch (e) {
      window.showToast && window.showToast("撤銷失敗：" + (e.message || ""), false);
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
      window.showToast && window.showToast("已加入遮罩 fp:" + fp.slice(0, 8), true);
      _fetch();
    } catch (e) {
      window.showToast && window.showToast("遮罩失敗：" + (e.message || ""), false);
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
        window.showToast && window.showToast("該指紋目前沒有過濾規則", true);
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
      window.showToast && window.showToast("已清除 " + removed + " 條規則 fp:" + fp.slice(0, 8), true);
      _fetch();
    } catch (e) {
      window.showToast && window.showToast("解除失敗：" + (e.message || ""), false);
    }
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
