/**
 * Admin · 場次（設計稿 08 · H1「紀錄與匯出」的第一個分段）
 *
 * 稿上這一頁很單薄，那是刻意的：一張表（場次／訊息／觀眾／時長／匯出 ›）
 * 加一個匯出面板，沒別的。之前這裡有 4 格 KPI、三顆篩選分頁、依日期收合
 * 的 bucket 清單、右側 320px 預覽欄——那些都在回答「這個活動辦得怎麼樣」，
 * 但主持人來這一頁只有一個目的：**把某一場的資料拿出去**。
 *
 * 匯出面板照 H1：格式分段（CSV 試算表／JSON 完整／SRT 字幕）、一個
 * 「包含觀眾 IP 與裝置識別」開關配警語、以及「重播這場」與「下載」兩顆鈕。
 * 個資開關預設關——匯出檔會被丟進群組、貼進簡報。
 *
 * API: GET /admin/sessions?hours=168 與 GET /admin/session/archive
 *      GET /admin/sessions/<id>/export?format=&include_pii=
 *      POST /admin/replay（重播這場）
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
    // 匯出面板：開著的場次 id、選的格式、個資開關（預設關）
    exportId: null,
    exportFormat: "csv",
    exportPii: false,
    // Start true so first paint shows AdminSkeletons preview instead
    // of a flash of empty container before the API responds.
    loading: true,
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
      return d.toLocaleString(ServerI18n.dateLocale(), {
        year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", hour12: false,
      });
    } catch (_) {
      return String(ts);
    }
  }

  function buildSection() {
    return '<div id="' + PAGE_ID + '" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B">'
      + '<div class="admin-ui-page-head">'
      +   '<h2 class="admin-ui-page-title">' + ServerI18n.t("adminRouteTitle_sessions") + '</h2>'
      +   '<p class="admin-ui-page-note">' + ServerI18n.t("sessionsPageNote") + '</p>'
      + '</div>'
      + '<div class="admin-sessions-table" id="admin-sessions-table-body"></div>'
      + '<div class="admin-sx-export" data-sessions-export hidden></div>'
      + '</div>';
  }

  function _buildTableHead() {
    return '<div class="admin-sessions-th">'
      + '<span>' + _escHtml(ServerI18n.t("sessionsColSession")) + '</span>'
      + '<span>' + _escHtml(ServerI18n.t("sessionsColMessages")) + '</span>'
      + '<span>' + _escHtml(ServerI18n.t("sessionsColViewers")) + '</span>'
      + '<span>' + _escHtml(ServerI18n.t("sessionsLabelDuration")) + '</span>'
      + '<span></span>'
      + '</div>';
  }

  // ── render ────────────────────────────────────────────────────────────────

  function _sessionName(s) {
    return s.name || ServerI18n.t("sessionsFallbackName", { id: (s.id || "").slice(0, 12) });
  }

  function _renderTable() {
    var bodyEl = document.getElementById("admin-sessions-table-body");
    if (!bodyEl) return;

    if (_state.loading) {
      if (window.AdminSkeletons) {
        bodyEl.innerHTML = "";
        bodyEl.appendChild(window.AdminSkeletons.listRows({ rows: 5 }));
      } else {
        bodyEl.innerHTML = '<div class="admin-sessions-loading">' + ServerI18n.t("sessionsLoadingText") + '</div>';
      }
      return;
    }

    if (!_state.sessions.length) {
      bodyEl.innerHTML = "";
      var card = window.AdminEmpty.render("sessions");
      card.dataset.emptyKind = "sessions";
      bodyEl.appendChild(card);
      return;
    }

    var rows = _state.sessions.map(function (s) {
      var sid = _escHtml(s.id || "");
      return ''
        + '<div class="admin-sessions-tr' + (s.is_live ? ' is-live' : '') + '" data-session-id="' + sid + '"'
        +      ' role="button" tabindex="0">'
        +   '<span class="admin-sessions-td-name">'
        +     (s.is_live ? '<span class="admin-sessions-livedot" aria-hidden="true"></span>' : '')
        +     _escHtml(_sessionName(s))
        +     '<span class="admin-sessions-td-sub">' + _escHtml(formatTs(s.started_at)) + '</span>'
        +   '</span>'
        +   '<span class="admin-sessions-td-num">' + (Number(s.msg_count) || 0).toLocaleString() + '</span>'
        +   '<span class="admin-sessions-td-num">' + (Number(s.viewer_count) || 0).toLocaleString() + '</span>'
        +   '<span class="admin-sessions-td-num">' + _escHtml(formatDuration(s.duration_s)) + '</span>'
        +   '<button type="button" class="admin-sessions-export-btn" data-sessions-export-open="' + sid + '">'
        +     _escHtml(ServerI18n.t("sessionsExportBtn")) + ' ›</button>'
        + '</div>';
    }).join("");

    bodyEl.innerHTML = _buildTableHead() + rows;
  }

  // ── 匯出面板（設計稿 08 · H1）────────────────────────────────────────────

  var _FORMATS = [
    { id: "csv",  labelKey: "sessionsExportFmtCsv" },
    { id: "json", labelKey: "sessionsExportFmtJson" },
    { id: "srt",  labelKey: "sessionsExportFmtSrt" },
  ];

  function _renderExport() {
    var el = document.querySelector("[data-sessions-export]");
    if (!el) return;
    if (!_state.exportId) {
      el.hidden = true;
      el.innerHTML = "";
      return;
    }
    var sess = _state.sessions.find(function (s) { return s.id === _state.exportId; });
    if (!sess) { _state.exportId = null; el.hidden = true; el.innerHTML = ""; return; }

    var segs = _FORMATS.map(function (f) {
      return '<button type="button" class="admin-sx-export__seg'
        + (f.id === _state.exportFormat ? ' is-active' : '') + '"'
        + ' data-sessions-export-fmt="' + f.id + '"'
        + ' aria-pressed="' + (f.id === _state.exportFormat ? 'true' : 'false') + '">'
        + _escHtml(ServerI18n.t(f.labelKey)) + '</button>';
    }).join("");

    el.hidden = false;
    el.innerHTML = ''
      + '<div class="admin-sx-export__head">'
      +   '<h3 class="admin-sx-export__title">'
      +     _escHtml(ServerI18n.t("sessionsExportTitle", { name: _sessionName(sess) })) + '</h3>'
      +   '<button type="button" class="admin-sx-export__close" data-sessions-export-close'
      +     ' aria-label="' + _escHtml(ServerI18n.t("closeBtn")) + '">×</button>'
      + '</div>'
      + '<div class="admin-sx-export__segs" role="group">' + segs + '</div>'
      + '<label class="admin-sx-export__pii">'
      +   '<input type="checkbox" data-sessions-export-pii' + (_state.exportPii ? ' checked' : '') + ' />'
      +   '<span>'
      +     '<span class="admin-sx-export__pii-label">' + _escHtml(ServerI18n.t("sessionsExportPii")) + '</span>'
      +     '<span class="admin-sx-export__pii-warn">' + _escHtml(ServerI18n.t("sessionsExportPiiWarn")) + '</span>'
      +   '</span>'
      + '</label>'
      + '<div class="admin-sx-export__actions">'
      +   '<button type="button" class="admin-sx-export__secondary" data-sessions-replay>'
      +     _escHtml(ServerI18n.t("sessionsReplayBtn")) + '</button>'
      +   '<button type="button" class="admin-sx-export__primary" data-sessions-download>'
      +     _escHtml(ServerI18n.t("sessionsDownloadBtn", { fmt: _state.exportFormat.toUpperCase() })) + '</button>'
      + '</div>';
  }

  function _download() {
    if (!_state.exportId) return;
    var url = "/admin/sessions/" + encodeURIComponent(_state.exportId) + "/export"
      + "?format=" + encodeURIComponent(_state.exportFormat)
      + "&include_pii=" + (_state.exportPii ? "1" : "0");
    // 走一次性的 <a download>，不用 fetch+blob：檔案可能上萬列，讓瀏覽器
    // 自己串流比在記憶體裡組一份再交出去省事。
    var a = document.createElement("a");
    a.href = url;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  async function _replay() {
    var id = _state.exportId;
    if (!id) return;
    try {
      // 用 JSON 匯出當來源，不要用 /admin/sessions/<id>：後者只認得從歷史
      // 切出來的場次，畫面上那些有名字的（來自 session archive）會 404。
      // 匯出端點兩種來源都認得，且回傳的欄位正是 replay 要的。
      var r = await fetch(
        "/admin/sessions/" + encodeURIComponent(id) + "/export?format=json",
        { credentials: "same-origin" }
      );
      if (!r.ok) throw new Error("HTTP " + r.status);
      var data = await r.json();
      var records = (data.records || []).slice(0, 500);
      if (!records.length) {
        window.showToast && window.showToast(ServerI18n.t("sessionsReplayEmpty"), false);
        return;
      }
      var res = await window.csrfFetch("/admin/replay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ records: records, speedMultiplier: 1.0 }),
      });
      if (res.status === 503) {
        // 沒有大螢幕接著的時候重播沒有觀眾——講清楚，不要只說「失敗」。
        window.showToast && window.showToast(ServerI18n.t("sessionsReplayNoOverlay"), false);
        return;
      }
      if (!res.ok) throw new Error("HTTP " + res.status);
      window.showToast && window.showToast(ServerI18n.t("sessionsReplayStarted"), true);
    } catch (e) {
      window.showToast && window.showToast(ServerI18n.t("sessionsReplayFailed"), false);
    }
  }

  function _renderAll() {
    _renderTable();
    _renderExport();
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

  function _goToDetail(id) {
    if (!id) return;
    window.location.hash = "#/session-detail?id=" + encodeURIComponent(id);
  }

  function _openExport(id) {
    _state.exportId = id;
    _renderExport();
    var panel = document.querySelector("[data-sessions-export]");
    if (panel) panel.scrollIntoView({ block: "nearest" });
  }

  function _bind() {
    var page = document.getElementById(PAGE_ID);
    if (!page) return;

    page.addEventListener("click", function (e) {
      var openBtn = e.target.closest("[data-sessions-export-open]");
      if (openBtn) {
        e.stopPropagation();
        _openExport(openBtn.dataset.sessionsExportOpen);
        return;
      }
      if (e.target.closest("[data-sessions-export-close]")) {
        _state.exportId = null;
        _renderExport();
        return;
      }
      var fmtBtn = e.target.closest("[data-sessions-export-fmt]");
      if (fmtBtn) {
        _state.exportFormat = fmtBtn.dataset.sessionsExportFmt;
        _renderExport();
        return;
      }
      if (e.target.closest("[data-sessions-replay]")) { _replay(); return; }
      if (e.target.closest("[data-sessions-download]")) { _download(); return; }

      var row = e.target.closest(".admin-sessions-tr");
      if (row) _goToDetail(row.dataset.sessionId || null);
    });

    page.addEventListener("change", function (e) {
      var pii = e.target.closest("[data-sessions-export-pii]");
      if (pii) _state.exportPii = !!pii.checked;
    });

    page.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var row = e.target.closest(".admin-sessions-tr");
      if (row) {
        e.preventDefault();
        _goToDetail(row.dataset.sessionId || null);
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
