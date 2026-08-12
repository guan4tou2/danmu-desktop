/**
 * Admin Sessions — session list with KPI strip, filter tabs, right-panel preview.
 *
 * Mirrors docs/designs/design-v2/components/admin-batch7.jsx
 * AdminSessionsPage.
 *
 * Layout (1fr 320px grid):
 *   TOP    — 4-tile KPI strip (場次數量 / 觀眾總人次 / 訊息總數 / 最近場次)
 *   LEFT   — filter tabs + sessions table with mini sparklines
 *   RIGHT  — quick preview panel for selected session
 *
 * API: GET /admin/sessions?hours=168
 *      → { sessions: [{id, started_at, ended_at, duration_s, msg_count,
 *                       viewer_count, sparkline, is_live}], total: N }
 *
 * Clicking "詳細 →" or a row navigates to #/session-detail?id=<id>.
 *
 * Loaded as <script defer> in admin.html.
 * Globals: csrfFetch, showToast, ServerI18n, AdminUtils, DANMU_CONFIG.
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-sessions-overview";

  var _escHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  // ── state ────────────────────────────────────────────────────────────────

  var _state = {
    sessions: [],
    total: 0,
    filter: "all",     // "all" | "live" | "ended"
    selectedId: null,
    // Start true so first paint shows AdminSkeletons preview instead
    // of a flash of empty container before the API responds.
    loading: true,
    // Bucket-list reframe (design v4 brief 0518-3, 2026-05-18). Each bucket
    // is keyed by its label ('今天', '昨天', '本週', '更早'). Default-closed
    // for older buckets; today + yesterday open by default.
    // D-4 (2026-08-03): keyed by the stable `range` id (THIS WEEK / EARLIER),
    // not the translated `label` — label text now depends on ServerI18n's
    // active language, so it can't double as a lookup key across locales.
    bucketsCollapsed: { "THIS WEEK": true, "EARLIER": true },
  };

  // ── helpers ──────────────────────────────────────────────────────────────

  function formatDuration(secs) {
    secs = Number(secs) || 0;
    if (secs <= 0) return "—";
    var h = Math.floor(secs / 3600);
    var m = Math.floor((secs % 3600) / 60);
    var s = secs % 60;
    if (h > 0) return h + "h " + m + "m";
    if (m > 0) return m + "m";
    return s + "s";
  }

  function formatTs(ts) {
    if (!ts) return "—";
    try {
      // API 的 started_at 是「秒級」epoch 數字；直接餵 Date 會變 1970/01/21
      //（KPI「最近場次」實際踩過）。ISO 字串路徑保留。
      var d = typeof ts === "number" ? new Date(ts < 1e12 ? ts * 1000 : ts) : new Date(ts);
      return d.toLocaleString("zh-TW", {
        year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", hour12: false,
      });
    } catch (_) {
      return isoStr;
    }
  }

  function buildSparkline(data, height) {
    // Render 20 inline <span> bars. data is an array of numbers (or undefined).
    var H = height || 20;
    var bars = Array.isArray(data) ? data.slice(0, 20) : [];
    while (bars.length < 20) bars.push(0);
    var maxV = Math.max(1, Math.max.apply(null, bars));
    return bars.map(function (v) {
      var pct = Math.max(10, Math.round((v / maxV) * 100));
      return '<span style="display:inline-block;width:2px;height:' + Math.round(H * pct / 100)
        + 'px;background:var(--color-primary);opacity:' + (v > 0 ? 0.6 + (v / maxV) * 0.4 : 0.18)
        + ';border-radius:1px 1px 0 0;margin-right:1px;vertical-align:bottom"></span>';
    }).join("");
  }

  function _filteredSessions() {
    if (_state.filter === "live") {
      return _state.sessions.filter(function (s) { return s.is_live; });
    }
    if (_state.filter === "ended") {
      return _state.sessions.filter(function (s) { return !s.is_live; });
    }
    return _state.sessions;
  }

  // Bucket grouping (design v4 brief 0518-3, 2026-05-18).
  // Sessions → today / yesterday / this-week / earlier. Day boundary in
  // local time (server returns ISO; new Date parses to local).
  function _groupIntoBuckets(sessions) {
    var now = new Date();
    var todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var yesterdayStart = new Date(todayStart.getTime() - 86400 * 1000);
    var weekStart = new Date(todayStart.getTime() - 7 * 86400 * 1000);
    // D-4: label built here (function-internal, runs post-init — safe to
    // call t() directly, unlike a top-level constant). range stays the
    // language-neutral lookup id (see bucketsCollapsed + _fmtDateRange).
    var buckets = [
      { label: ServerI18n.t("sessionsBucketToday"),     range: "TODAY",     sessions: [], from: todayStart },
      { label: ServerI18n.t("sessionsBucketYesterday"), range: "YESTERDAY", sessions: [], from: yesterdayStart, to: todayStart },
      { label: ServerI18n.t("sessionsBucketThisWeek"),  range: "THIS WEEK", sessions: [], from: weekStart, to: yesterdayStart },
      { label: ServerI18n.t("sessionsBucketEarlier"),   range: "EARLIER",   sessions: [], to: weekStart },
    ];
    sessions.forEach(function (s) {
      var ts = s.started_at ? new Date(s.started_at) : null;
      if (!ts || isNaN(ts.getTime())) { buckets[3].sessions.push(s); return; }
      if (ts >= todayStart)        buckets[0].sessions.push(s);
      else if (ts >= yesterdayStart) buckets[1].sessions.push(s);
      else if (ts >= weekStart)      buckets[2].sessions.push(s);
      else                           buckets[3].sessions.push(s);
    });
    // Compute aggregates per bucket
    buckets.forEach(function (b) {
      b.count = b.sessions.length;
      b.totalMsgs = b.sessions.reduce(function (a, s) { return a + (Number(s.msg_count) || 0); }, 0);
      b.totalViewers = b.sessions.reduce(function (a, s) { return a + (Number(s.viewer_count) || 0); }, 0);
    });
    return buckets;
  }

  function _fmtDateRange(b) {
    // D-4: compare against the stable range id, not the (now translated)
    // label — label text no longer equals "今天"/"昨天"/"本週" outside zh.
    if (b.range === "TODAY") {
      return _fmtYMD(new Date());
    }
    if (b.range === "YESTERDAY") {
      var y = new Date(Date.now() - 86400 * 1000);
      return _fmtYMD(y);
    }
    if (b.range === "THIS WEEK") {
      var s = new Date(Date.now() - 7 * 86400 * 1000);
      var e = new Date(Date.now() - 2 * 86400 * 1000);
      return _fmtMD(s) + " – " + _fmtMD(e);
    }
    var weekStart = new Date(Date.now() - 7 * 86400 * 1000);
    return "< " + _fmtYMD(weekStart);
  }

  function _fmtYMD(d) {
    var pad = function (n) { return String(n).padStart(2, "0"); };
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function _fmtMD(d) {
    var pad = function (n) { return String(n).padStart(2, "0"); };
    return pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function _fmtHM(isoStr) {
    if (!isoStr) return "—";
    try {
      var d = new Date(isoStr);
      var pad = function (n) { return String(n).padStart(2, "0"); };
      return pad(d.getHours()) + ":" + pad(d.getMinutes());
    } catch (_) { return ""; }
  }

  function _selectedSession() {
    if (!_state.selectedId) return null;
    for (var i = 0; i < _state.sessions.length; i++) {
      if (_state.sessions[i].id === _state.selectedId) return _state.sessions[i];
    }
    return null;
  }

  // ── HTML template ─────────────────────────────────────────────────────────

  function buildSection() {
    return '<div id="' + PAGE_ID + '" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B">'

      // ── page header (polestar 2026-05-18 reframe: session = data slice /
      //    time window, not "broadcast show". 內容仍是訊息 / 投票 / 統計 的
      //    時間切片 — overlay 的開關只是切片的起點 trigger，不是切片本身。)
      + '<div class="admin-ui-page-head">'
      // D-4: kicker EN bookends stay literal (4771242 convention); mid
      // segment reuses broadcastDataSliceLabel — verbatim same zh text.
      +   '<div class="admin-ui-page-kicker">SESSIONS · ' + ServerI18n.t("broadcastDataSliceLabel") + ' · TIME WINDOWS</div>'
      +   '<h2 class="admin-ui-page-title">' + ServerI18n.t("adminRouteTitle_sessions") + '</h2>'
      +   '<p class="admin-ui-page-note">' + ServerI18n.t("sessionsPageNote") + '</p>'
      + '</div>'

      // ── KPI strip (full width, 4 tiles)
      // en sub-labels (SESSIONS/VIEWERS/MESSAGES/LATEST) are all-caps EN
      // tile markers — stay literal per D-4 convention, not translated.
      + '<div class="admin-kpi-strip" style="grid-template-columns:repeat(4,1fr)" data-sessions-kpi>'
      +   _buildKpiTile(ServerI18n.t("sessionsKpiSessionCount"), "SESSIONS", "—", "data-kpi-sessions")
      +   _buildKpiTile(ServerI18n.t("sessionsKpiTotalViewers"), "VIEWERS", "—", "data-kpi-viewers")
      +   _buildKpiTile(ServerI18n.t("sessionsKpiTotalMessages"), "MESSAGES", "—", "data-kpi-messages")
      +   _buildKpiTile(ServerI18n.t("sessionsKpiLatestSession"), "LATEST", "—", "data-kpi-latest")
      + '</div>'

      // ── two-column body
      + '<div class="admin-sessions-layout" style="display:grid;grid-template-columns:1fr 320px;gap:16px;align-items:start">'

      // LEFT: filter tabs + table
      + '<div class="hud-page-stack" style="gap:12px">'

      +   '<div class="admin-ui-tabbar" style="display:flex;gap:0">'
      +     '<button type="button" class="admin-ui-tab is-active" data-sessions-filter="all">' + ServerI18n.t("sessionsTabAll") + '</button>'
      +     '<button type="button" class="admin-ui-tab" data-sessions-filter="live">' + ServerI18n.t("sessionsTabLive") + '</button>'
      +     '<button type="button" class="admin-ui-tab" data-sessions-filter="ended">' + ServerI18n.t("sessionsTabEnded") + '</button>'
      +   '</div>'

      // Bucket list container — replaces the legacy 8-col table
      // (design v4 brief 0518-3, 2026-05-18). Each bucket has its own
      // header + collapsible session rows; no shared table head. First
      // paint is empty; _renderTable() injects the skeleton on first
      // call when _state.loading=true.
      +   '<div id="admin-sessions-table-body" class="admin-sessions-buckets" style="min-height:60px"></div>'

      + '</div>'

      // RIGHT: quick preview panel
      + '<aside class="admin-ui-card hud-page-stack" style="gap:12px;position:sticky;top:16px">'
      +   '<div class="admin-ui-monolabel">' + ServerI18n.t("sessionsPreviewLabel") + '</div>'
      +   '<div id="admin-sessions-preview">'
      +     '<p style="font-size:13px;color:var(--admin-text-dim);margin:0">' + ServerI18n.t("sessionsPreviewPlaceholder") + '</p>'
      +   '</div>'
      + '</aside>'

      + '</div>' // end layout grid
      + '</div>'; // end page
  }

  function _buildKpiTile(label, en, value, attr) {
    return '<div class="admin-kpi-tile">'
      + '<div class="admin-kpi-tile-head">'
      +   '<span class="label">' + _escHtml(label) + '</span>'
      +   '<span class="en">' + _escHtml(en) + '</span>'
      + '</div>'
      + '<div class="admin-kpi-tile-value" ' + attr + '>' + _escHtml(value) + '</div>'
      + '</div>';
  }

  function _buildTableHead() {
    return '<div class="admin-sessions-table-head" style="'
      + 'display:grid;grid-template-columns:28px 1fr 140px 80px 70px 60px 60px 80px;'
      + 'gap:0 8px;padding:8px 12px;'
      + 'font-family:var(--font-mono);font-size:10px;letter-spacing:1px;'
      + 'color:var(--admin-text-dim);text-transform:uppercase;'
      + 'border-bottom:1px solid var(--admin-line)">'
      + '<span></span>'
      + '<span>' + ServerI18n.t("sessionsColSession") + '</span>'
      + '<span>' + ServerI18n.t("sessionsLabelStarted") + '</span>'
      + '<span>' + ServerI18n.t("sessionsLabelDuration") + '</span>'
      + '<span>' + ServerI18n.t("sessionsColMessages") + '</span>'
      + '<span>' + ServerI18n.t("sessionsColViewers") + '</span>'
      + '<span>' + ServerI18n.t("sessionsLabelActivity") + '</span>'
      + '<span style="text-align:right">' + ServerI18n.t("sessionsColActions") + '</span>'
      + '</div>';
  }

  // ── render ────────────────────────────────────────────────────────────────

  function _renderKpi() {
    var sessions = _state.sessions;
    var total = sessions.length;
    var totalViewers = sessions.reduce(function (a, s) { return a + (Number(s.viewer_count) || 0); }, 0);
    var totalMsgs = sessions.reduce(function (a, s) { return a + (Number(s.msg_count) || 0); }, 0);
    var latestStart = sessions.length ? formatTs(sessions[0].started_at) : "—";

    var sessEl = document.querySelector("[data-kpi-sessions]");
    var viewEl = document.querySelector("[data-kpi-viewers]");
    var msgEl  = document.querySelector("[data-kpi-messages]");
    var latEl  = document.querySelector("[data-kpi-latest]");
    if (sessEl) sessEl.textContent = total;
    if (viewEl) viewEl.textContent = totalViewers.toLocaleString();
    if (msgEl)  msgEl.textContent  = totalMsgs.toLocaleString();
    if (latEl)  latEl.textContent  = latestStart;
  }

  function _renderTable() {
    var bodyEl = document.getElementById("admin-sessions-table-body");
    if (!bodyEl) return;

    if (_state.loading) {
      // Use AdminSkeletons.listRows when available — gives users a
      // structural preview of the bucket-list instead of a flat spinner.
      // (2026-05-18 polestar polish: skeleton consistency.)
      if (window.AdminSkeletons) {
        bodyEl.innerHTML = "";
        bodyEl.appendChild(window.AdminSkeletons.listRows({ rows: 5 }));
      } else {
        bodyEl.innerHTML = '<div style="padding:24px;text-align:center;color:var(--admin-text-dim);font-size:13px">' + ServerI18n.t("sessionsLoadingText") + '</div>';
      }
      return;
    }

    var list = _filteredSessions();
    if (!list.length) {
      // D-6 (2026-07-28): inline-style 佔位換共用 AdminEmpty preset。
      bodyEl.innerHTML = "";
      var card = window.AdminEmpty.render("sessions");
      card.dataset.emptyKind = "sessions";
      bodyEl.appendChild(card);
      return;
    }

    // ── Bucket-grouped view (design v4 brief 0518-3, Option C) ──────
    var buckets = _groupIntoBuckets(list);
    var html = buckets.map(function (b) {
      // D-4: keyed by b.range (stable id), not b.label — see bucketsCollapsed.
      var collapsed = !!_state.bucketsCollapsed[b.range];
      var hasSessions = b.sessions.length > 0;
      // Empty buckets still render header (zero state) so users see structure.
      var dateRange = _fmtDateRange(b);

      var header = ''
        // D-4: dataset key is the stable range id (see bucketsCollapsed) —
        // the visible label span still shows the translated b.label.
        + '<div class="admin-sessions-bucket-head" data-sessions-bucket="' + _escHtml(b.range) + '" role="button" tabindex="0">'
        +   '<span class="admin-sessions-bucket-chev" aria-hidden="true">' + (collapsed ? '▸' : '▾') + '</span>'
        +   '<span class="admin-sessions-bucket-label">' + _escHtml(b.label) + '</span>'
        +   '<span class="admin-sessions-bucket-en">' + _escHtml(b.range) + '</span>'
        +   '<span class="admin-sessions-bucket-date">' + _escHtml(dateRange) + '</span>'
        +   '<span class="admin-sessions-bucket-spacer"></span>'
        +   '<span class="admin-sessions-bucket-stat">' + b.count + ' sessions</span>'
        +   '<span class="admin-sessions-bucket-sep">·</span>'
        +   '<span class="admin-sessions-bucket-stat is-accent">' + b.totalMsgs.toLocaleString() + ' msgs</span>'
        +   '<span class="admin-sessions-bucket-sep">·</span>'
        +   '<span class="admin-sessions-bucket-stat is-lime">' + b.totalViewers.toLocaleString() + ' viewers</span>'
        + '</div>';

      var rows = "";
      if (!collapsed && hasSessions) {
        rows = b.sessions.map(function (s) {
          var live    = !!s.is_live;
          var sid     = _escHtml(s.id || "");
          var idShort = _escHtml((s.id || "").slice(0, 12));
          var startHM = _fmtHM(s.started_at);
          var dur     = formatDuration(s.duration_s);
          var msgs    = Number(s.msg_count) || 0;
          var viewers = Number(s.viewer_count) || 0;
          var spark   = buildSparkline(s.sparkline, 18);
          var isSelected = _state.selectedId === s.id;
          var name    = _escHtml(s.name || ServerI18n.t("sessionsFallbackName", { id: idShort }));
          return ''
            + '<div class="admin-sessions-bucket-row' + (isSelected ? ' is-selected' : '') + '"'
            +      ' data-session-id="' + sid + '" role="button" tabindex="0">'
            +   '<span class="admin-sessions-bucket-dot' + (live ? ' is-live' : '') + '"></span>'
            +   '<div class="admin-sessions-bucket-row-main">'
            +     '<div class="admin-sessions-bucket-row-title">'
            +       '<span class="admin-sessions-bucket-row-name">' + name + '</span>'
            +       (live ? '<span class="admin-sessions-bucket-row-live">LIVE</span>' : '')
            +     '</div>'
            +     '<div class="admin-sessions-bucket-row-meta">'
            +       _escHtml(startHM) + ' · ' + _escHtml(dur) + ' · ' + idShort
            +     '</div>'
            +   '</div>'
            +   '<div class="admin-sessions-bucket-row-stats">'
            +     '<div class="admin-sessions-bucket-row-stat">'
            +       '<div class="admin-sessions-bucket-row-stat-en">MSGS</div>'
            +       '<div class="admin-sessions-bucket-row-stat-v is-accent">' + msgs.toLocaleString() + '</div>'
            +     '</div>'
            +     '<div class="admin-sessions-bucket-row-stat">'
            +       '<div class="admin-sessions-bucket-row-stat-en">FP</div>'
            +       '<div class="admin-sessions-bucket-row-stat-v is-lime">' + viewers + '</div>'
            +     '</div>'
            +     '<span class="admin-sessions-bucket-row-spark">' + spark + '</span>'
            +   '</div>'
            +   '<button type="button" class="admin-ui-action admin-sessions-detail-action" data-session-id="' + sid + '">→</button>'
            + '</div>';
        }).join("");
      } else if (!collapsed && !hasSessions) {
        rows = '<div class="admin-sessions-bucket-empty">' + ServerI18n.t("sessionsBucketEmptyPeriod") + '</div>';
      }

      return '<div class="admin-sessions-bucket' + (collapsed ? ' is-collapsed' : '') + '">' + header + rows + '</div>';
    }).join("");

    bodyEl.innerHTML = html;
  }

  function _renderPreview() {
    var previewEl = document.getElementById("admin-sessions-preview");
    if (!previewEl) return;

    var s = _selectedSession();
    if (!s) {
      previewEl.innerHTML = '<p style="font-size:13px;color:var(--admin-text-dim);margin:0">' + ServerI18n.t("sessionsPreviewPlaceholder") + '</p>';
      return;
    }

    var dur  = formatDuration(s.duration_s);
    var ts   = formatTs(s.started_at);
    var msgs = Number(s.msg_count) || 0;
    var views = Number(s.viewer_count) || 0;
    var spark = buildSparkline(s.sparkline, 28);
    var live = !!s.is_live;
    var idFull = _escHtml(s.id || "");

    previewEl.innerHTML =
      '<div style="display:flex;flex-direction:column;gap:10px">'
      + '<div style="font-family:var(--font-mono);font-size:10px;color:var(--admin-text-dim);word-break:break-all">'
      +   idFull
      + '</div>'
      + (live ? '<span class="admin-ui-chip is-active admin-sessions-live-badge" style="align-self:flex-start">● LIVE</span>' : '')
      + _previewKv(ServerI18n.t("sessionsLabelStarted"), ts)
      + _previewKv(ServerI18n.t("sessionsLabelDuration"), dur)
      + _previewKv(ServerI18n.t("sessionsPreviewMsgCount"), msgs.toLocaleString())
      + _previewKv(ServerI18n.t("sessionsPreviewViewerCount"), views.toLocaleString())
      + '<div>'
      +   '<div style="font-family:var(--font-mono);font-size:10px;color:var(--admin-text-dim);'
      +               'text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">' + ServerI18n.t("sessionsLabelActivity") + '</div>'
      +   '<div style="display:flex;align-items:flex-end;height:28px;gap:1px">' + spark + '</div>'
      + '</div>'
      + '<button type="button"'
      +         ' data-sessions-go-detail="' + _escHtml(s.id || "") + '"'
      +         ' style="'
      +           'margin-top:4px;padding:7px 0;width:100%;'
      +           'background:transparent;border:1px solid var(--color-primary);'
      +           'color: var(--color-ink-accent);border-radius:4px;'
      +           'font-family:var(--font-mono);font-size:11px;letter-spacing:0.5px;'
      +           'cursor:pointer">' + ServerI18n.t("sessionsDetailArrowBtn") + '</button>'
      + '</div>';
  }

  function _previewKv(label, value) {
    return '<div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px">'
      + '<span style="font-family:var(--font-mono);font-size:10px;color:var(--admin-text-dim);'
      +               'text-transform:uppercase;letter-spacing:1px">' + _escHtml(label) + '</span>'
      + '<span style="font-size:13px;color:var(--admin-text)">' + _escHtml(value) + '</span>'
      + '</div>';
  }

  function _renderAll() {
    _renderKpi();
    _renderTable();
    _renderPreview();
  }

  // ── data fetching ─────────────────────────────────────────────────────────

  async function _fetchSessions() {
    _state.loading = true;
    _renderTable();
    try {
      // Fetch both the explicit archive (managed lifecycle) and the
      // history-derived sessions (fallback for older data before lifecycle was added).
      var [archiveRes, derivedRes] = await Promise.all([
        fetch("/admin/session/archive?limit=100", { credentials: "same-origin" }),
        fetch("/admin/sessions?hours=168", { credentials: "same-origin" }),
      ]);

      var archiveSessions = [];
      var derivedSessions = [];

      if (archiveRes.ok) {
        var archiveData = await archiveRes.json();
        archiveSessions = Array.isArray(archiveData.sessions) ? archiveData.sessions : [];
        // Mark archive sessions as explicitly managed
        archiveSessions.forEach(function (s) { s._explicit = true; });
      }

      if (derivedRes.ok) {
        var derivedData = await derivedRes.json();
        derivedSessions = Array.isArray(derivedData.sessions) ? derivedData.sessions : [];
      }

      // Merge: prefer archive records; deduplicate by id
      var merged = archiveSessions.slice();
      var archiveIds = new Set(archiveSessions.map(function (s) { return s.id; }));
      derivedSessions.forEach(function (s) {
        if (!archiveIds.has(s.id)) merged.push(s);
      });
      // Sort newest-first by started_at (numeric or ISO string)
      merged.sort(function (a, b) {
        var ta = typeof a.started_at === "number" ? a.started_at : Date.parse(a.started_at || 0);
        var tb = typeof b.started_at === "number" ? b.started_at : Date.parse(b.started_at || 0);
        return tb - ta;
      });

      // Also prepend currently live session if any
      try {
        var liveRes = await fetch("/admin/session/current", { credentials: "same-origin" });
        if (liveRes.ok) {
          var liveData = await liveRes.json();
          if (liveData.status === "live") {
            var liveSession = Object.assign({}, liveData, {
              id: liveData.id,
              ended_at: null,
              is_live: true,
              msg_count: 0,
              viewer_count: 0,
              _explicit: true,
            });
            merged.unshift(liveSession);
          }
        }
      } catch (_) { /* silent */ }

      _state.sessions = merged;
      _state.total = merged.length;
    } catch (e) {
      console.error("[admin-sessions] fetch error:", e);
      _state.sessions = [];
      _state.total = 0;
      window.showToast && window.showToast(ServerI18n.t("sessionsToastLoadFailed", { msg: e.message || "" }), false);
    } finally {
      _state.loading = false;
      _renderAll();
    }
  }

  // ── event wiring ─────────────────────────────────────────────────────────

  function _selectSession(id) {
    _state.selectedId = id;
    _renderTable();
    _renderPreview();
  }

  function _goToDetail(id) {
    if (!id) return;
    window.location.hash = "#/session-detail?id=" + encodeURIComponent(id);
  }

  function _bind() {
    var page = document.getElementById(PAGE_ID);
    if (!page) return;

    // Filter tabs
    page.addEventListener("click", function (e) {
      // Filter tab buttons
      var tab = e.target.closest("[data-sessions-filter]");
      if (tab) {
        _state.filter = tab.dataset.sessionsFilter || "all";
        page.querySelectorAll("[data-sessions-filter]").forEach(function (t) {
          t.classList.toggle("is-active", t === tab);
        });
        _renderTable();
        return;
      }

      // "詳細 →" button — detail navigation (highest priority, stop propagation)
      var detailBtn = e.target.closest("[data-sessions-go-detail]");
      if (detailBtn) {
        e.stopPropagation();
        _goToDetail(detailBtn.dataset.sessionsGoDetail);
        return;
      }

      // "詳細 →" button inside table row
      var detailRowBtn = e.target.closest(".admin-sessions-detail-action");
      if (detailRowBtn) {
        e.stopPropagation();
        _goToDetail(detailRowBtn.dataset.sessionId);
        return;
      }

      // Bucket header toggle (design v4 brief 0518-3)
      var bucketHead = e.target.closest("[data-sessions-bucket]");
      if (bucketHead) {
        var key = bucketHead.dataset.sessionsBucket;
        _state.bucketsCollapsed[key] = !_state.bucketsCollapsed[key];
        _renderTable();
        return;
      }

      // Bucket row click → select for right-rail preview
      var bucketRow = e.target.closest(".admin-sessions-bucket-row");
      if (bucketRow) {
        _selectSession(bucketRow.dataset.sessionId || null);
        return;
      }

      // Legacy row click (kept defensively if any consumer still produces it)
      var row = e.target.closest(".admin-sessions-row");
      if (row) {
        _selectSession(row.dataset.sessionId || null);
        return;
      }
    });

    // Keyboard navigation on rows + bucket headers
    page.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var bucketHead = e.target.closest("[data-sessions-bucket]");
      if (bucketHead) {
        e.preventDefault();
        var key = bucketHead.dataset.sessionsBucket;
        _state.bucketsCollapsed[key] = !_state.bucketsCollapsed[key];
        _renderTable();
        return;
      }
      var row = e.target.closest(".admin-sessions-bucket-row, .admin-sessions-row");
      if (row) {
        e.preventDefault();
        _selectSession(row.dataset.sessionId || null);
      }
    });
  }

  // ── visibility management ─────────────────────────────────────────────────

  function syncVisibility() {
    var shell = document.querySelector(".admin-dash-grid");
    var page = document.getElementById(PAGE_ID);
    if (!shell || !page) return;
    var route = shell.dataset.activeLeaf || "dashboard";
    page.style.display = route === "sessions" ? "" : "none";
  }

  function inject() {
    var grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", buildSection());
    _bind();
    _fetchSessions();
    syncVisibility();
  }

  function boot() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    var observer = new MutationObserver(function () {
      if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
        inject();
      }
      syncVisibility();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("hashchange", syncVisibility);
    document.addEventListener("admin-panel-rendered", function () {
      inject();
      syncVisibility();
    });
    inject();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
