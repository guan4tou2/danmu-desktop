/**
 * Admin Search — full-text danmu search with filter panel.
 *
 * Mirrors docs/designs/design-v2/components/admin-batch7.jsx
 * AdminSearchPage.
 *
 * Layout (260px filter | 1fr results):
 *   LEFT  — time-range buttons, status checkboxes, advanced syntax reference
 *   RIGHT — search bar + results list with highlight, time distribution chart,
 *            export CSV, empty/loading states
 *
 * API: GET /admin/search?q=<term>&hours=<N>
 *      → { results: [{id, nickname, fingerprint, timestamp, text, status}],
 *          total: N, query_ms: N }
 *
 * Loaded as <script defer> in admin.html.
 * Globals: csrfFetch (available but not needed for GET), showToast,
 *          ServerI18n, AdminUtils, DANMU_CONFIG.
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-search-overview";

  var _escHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  // ── state ────────────────────────────────────────────────────────────────

  var PAGE_SIZE = 20;

  var _state = {
    query: "",
    scope: "session",   // 設計稿 15 · SR1 的「這場 / 所有場次」
    blockedOnly: false, // 「只看被擋的」
    who: "",            // 「任何人」下拉——用暱稱過濾
    shown: PAGE_SIZE,
    results: [],
    total: 0,
    loading: false,
    searched: false,
  };

  var _debounceTimer = 0;

  // ── HTML template ────────────────────────────────────────────────────────

  // ── 版面（設計稿 15 · SR1）────────────────────────────────────────
  //
  // 稿上是單欄：搜尋框＋結果數、一排篩選 chip、右側「匯出結果 CSV」、結果列
  // （日期時間／內文命中詞高亮／暱稱／⋯）、底部「還有 N 則 · 載入更多」。
  //
  // 退場的是左邊那塊 260px 篩選面板：六顆時間範圍 chip（其中「自訂」按了
  // 沒有反應）、四個狀態勾選、以及一塊寫著 `fp:<fingerprint>` `nick:<nickname>`
  // `session:<id>` `after:YYYY-MM-DD` 的語法說明——那四個語法後端一個都沒有
  // 實作（/admin/search 只做 q 的子字串比對），等於教使用者一套不存在的語法。
  // 時間分布長條圖也一併退場：稿上沒有，而且它回答的是「什麼時候有人講話」，
  // 不是「我要找的那句在哪」。

  function buildSection() {
    return '<div id="' + PAGE_ID + '" class="admin-search-page hud-page-stack lg:col-span-2">'

      + '<div class="admin-ui-page-head">'
      +   '<h2 class="admin-ui-page-title">' + ServerI18n.t("searchPageTitle") + '</h2>'
      +   '<p class="admin-ui-page-note">' + ServerI18n.t("searchPageNote") + '</p>'
      + '</div>'

      + '<div class="admin-search-bar">'
      +   '<input id="admin-search-input" type="search" class="admin-ui-input admin-search-input"'
      +         ' placeholder="' + _escHtml(ServerI18n.t("searchInputPlaceholder")) + '"'
      +         ' autocomplete="off" spellcheck="false" />'
      +   '<span id="admin-search-count" class="admin-search-count"></span>'
      + '</div>'

      + '<div class="admin-search-filters">'
      +   '<button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'
      +     _escHtml(ServerI18n.t("searchScopeSession")) + '</button>'
      +   '<button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'
      +     _escHtml(ServerI18n.t("searchScopeAll")) + '</button>'
      +   '<button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'
      +     _escHtml(ServerI18n.t("searchOnlyBlocked")) + '</button>'
      +   '<select class="admin-ui-select admin-search-who" data-search-who'
      +           ' aria-label="' + _escHtml(ServerI18n.t("searchWhoAria")) + '">'
      +     '<option value="">' + _escHtml(ServerI18n.t("searchWhoAnyone")) + '</option>'
      +   '</select>'
      +   '<span class="admin-ui-spacer"></span>'
      +   '<button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'
      +     _escHtml(ServerI18n.t("searchExportCsv")) + '</button>'
      + '</div>'

      + '<div id="admin-search-results" class="admin-search-results">'
      +   '<div id="admin-search-empty-state" class="admin-search-empty">'
      +     _escHtml(ServerI18n.t("searchPromptStart"))
      +   '</div>'
      + '</div>'

      + '</div>';
  }

  // ── helpers ──────────────────────────────────────────────────────────────

  function _hue(fp) {
    // Derive a consistent hue (0–360) from the first chars of a fingerprint.
    if (!fp) return 200;
    var h = 0;
    for (var i = 0; i < Math.min(fp.length, 6); i++) {
      h = (h * 31 + fp.charCodeAt(i)) & 0xffff;
    }
    return h % 360;
  }

  function _highlight(text, query) {
    if (!query || !text) return _escHtml(text || "");
    // Escape text first, then find query occurrences (case-insensitive).
    var escaped = _escHtml(text);
    var escapedQuery = _escHtml(query);
    try {
      var re = new RegExp("(" + escapedQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
      return escaped.replace(re, '<mark class="admin-search-hit">$1</mark>');
    } catch (_) {
      return escaped;
    }
  }

  function _formatTs(isoStr) {
    if (!isoStr) return "—";
    try {
      var d = new Date(isoStr);
      return d.toLocaleString(ServerI18n.dateLocale(), { month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
    } catch (_) {
      return isoStr;
    }
  }

  // ── render functions ─────────────────────────────────────────────────────

  function _visibleResults() {
    var rows = _state.results;
    if (_state.blockedOnly) {
      rows = rows.filter(function (r) { return (r.status || "shown") === "blocked"; });
    }
    if (_state.who) {
      rows = rows.filter(function (r) { return (r.nickname || "") === _state.who; });
    }
    return rows;
  }

  function _renderCount() {
    var el = document.getElementById("admin-search-count");
    if (!el) return;
    if (!_state.searched || !_state.query.trim()) { el.textContent = ""; return; }
    el.textContent = ServerI18n.t("searchResultCount", { n: _visibleResults().length });
  }

  /** 「任何人」下拉的選項＝這批結果裡實際出現過的暱稱。 */
  function _renderWho() {
    var sel = document.querySelector("[data-search-who]");
    if (!sel) return;
    var names = [];
    _state.results.forEach(function (r) {
      var n = (r.nickname || "").trim();
      if (n && names.indexOf(n) === -1) names.push(n);
    });
    names.sort();
    var current = _state.who;
    sel.innerHTML =
      '<option value="">' + _escHtml(ServerI18n.t("searchWhoAnyone")) + "</option>" +
      names.map(function (n) {
        return '<option value="' + _escHtml(n) + '"' + (n === current ? " selected" : "") + ">" +
          _escHtml(n) + "</option>";
      }).join("");
  }

  function _renderResults() {
    var listEl = document.getElementById("admin-search-results");
    var emptyEl = document.getElementById("admin-search-empty-state");
    var exportBtn = document.getElementById("admin-search-export-btn");
    if (!listEl) return;

    listEl.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function (n) {
      n.remove();
    });

    var setEmpty = function (msg) {
      if (emptyEl) { emptyEl.style.display = "block"; emptyEl.textContent = msg; }
      if (exportBtn) exportBtn.hidden = true;
    };
    if (_state.loading) return setEmpty(ServerI18n.t("searchSearching"));
    if (!_state.searched) return setEmpty(ServerI18n.t("searchPromptStart"));

    var rows = _visibleResults();
    if (rows.length === 0) return setEmpty(ServerI18n.t("searchNoMatch"));

    if (emptyEl) emptyEl.style.display = "none";
    if (exportBtn) exportBtn.hidden = false;

    var shown = Math.min(rows.length, _state.shown);
    var frag = document.createDocumentFragment();
    rows.slice(0, shown).forEach(function (r) {
      var row = document.createElement("div");
      row.className = "admin-search-row";
      row.innerHTML =
        '<span class="admin-search-row__ts">' + _escHtml(_formatTs(r.timestamp)) + "</span>" +
        '<span class="admin-search-row__text">' + _highlight(r.text || "", _state.query) + "</span>" +
        '<span class="admin-search-row__nick">' +
          _escHtml((r.nickname || "").trim() || ServerI18n.t("audienceAnonymous")) + "</span>";
      frag.appendChild(row);
    });
    listEl.appendChild(frag);

    if (rows.length > shown) {
      var more = document.createElement("button");
      more.type = "button";
      more.className = "admin-search-more";
      more.dataset.searchMore = "1";
      more.textContent = ServerI18n.t("searchMoreLeft", { n: rows.length - shown });
      listEl.appendChild(more);
    }
  }

  function _renderAll() {
    _renderCount();
    _renderWho();
    _renderResults();
  }

  // ── search ───────────────────────────────────────────────────────────────

  async function _doSearch() {
    var q = _state.query.trim();
    if (!q) {
      _state.loading = false;
      _state.searched = false;
      _state.results = [];
      _state.total = 0;
      _renderAll();
      return;
    }
    _state.loading = true;
    _renderAll();

    try {
      // 「這場」＝目前這場開始之後；「所有場次」＝後端允許的最大回看窗。
      // scope 不是憑空造的維度：場次有真的開始時間（/admin/session/current）。
      var url = "/admin/search?q=" + encodeURIComponent(q);
      if (_state.scope === "session") {
        var since = await _sessionStartedAt();
        if (since) url += "&since=" + encodeURIComponent(since);
      }
      var t0 = Date.now();
      var r = await fetch(url, { credentials: "same-origin" });
      var elapsed = Date.now() - t0;
      if (!r.ok) throw new Error("HTTP " + r.status);
      var data = await r.json();
      _state.results = Array.isArray(data.results) ? data.results : [];
      _state.total = typeof data.total === "number" ? data.total : _state.results.length;
      _state.shown = PAGE_SIZE;
    } catch (e) {
      console.error("[admin-search] fetch error:", e);
      _state.results = [];
      _state.total = 0;
      window.showToast && window.showToast(ServerI18n.t("searchToastFailed", { msg: e.message || "" }), false);
    } finally {
      _state.loading = false;
      _state.searched = true;
      _renderAll();
    }
  }

  var _sessionStartCache = null;

  /** 目前這場的開始時間（ISO）。沒有進行中的場次就回 null＝不加時間下限。 */
  async function _sessionStartedAt() {
    if (_sessionStartCache !== null) return _sessionStartCache;
    try {
      var r = await fetch("/admin/session/current", { credentials: "same-origin" });
      if (r.ok) {
        var j = await r.json();
        if (j.status === "live" && j.started_at) {
          _sessionStartCache = new Date(j.started_at * 1000).toISOString();
          return _sessionStartCache;
        }
      }
    } catch (_) {}
    _sessionStartCache = "";
    return "";
  }

  function _scheduleSearch() {
    clearTimeout(_debounceTimer);
    _debounceTimer = setTimeout(_doSearch, 300);
  }

  // ── CSV export ───────────────────────────────────────────────────────────

  function _exportCsv() {
    if (!_state.results.length) return;
    var lines = [["nickname", "fingerprint", "timestamp", "status", "text"].join(",")];
    _state.results.forEach(function (r) {
      var row = [
        r.nickname || "",
        r.fingerprint || "",
        r.timestamp || "",
        r.status || "",
        r.text || "",
      ].map(function (v) { return '"' + String(v).replace(/"/g, '""') + '"'; });
      lines.push(row.join(","));
    });
    var blob = new Blob(["﻿" + lines.join("\n")], { type: "text/csv;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "danmu-search-" + (_state.query || "export") + ".csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ── event wiring ─────────────────────────────────────────────────────────

  function _bind() {
    var page = document.getElementById(PAGE_ID);
    if (!page) return;

    // Search input debounce
    var input = document.getElementById("admin-search-input");
    if (input) {
      input.addEventListener("input", function () {
        _state.query = input.value;
        _scheduleSearch();
      });
      // Immediate on Enter
      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          clearTimeout(_debounceTimer);
          _state.query = input.value;
          _doSearch();
        }
      });
    }

    // 設計稿 15 · SR1 的篩選 chip
    page.addEventListener("click", function (e) {
      var scope = e.target.closest("[data-search-scope]");
      if (scope) {
        _state.scope = scope.dataset.searchScope;
        page.querySelectorAll("[data-search-scope]").forEach(function (b) {
          b.classList.toggle("is-active", b === scope);
        });
        if (_state.query.trim()) _scheduleSearch();
        return;
      }
      var blocked = e.target.closest("[data-search-blocked]");
      if (blocked) {
        _state.blockedOnly = !_state.blockedOnly;
        blocked.classList.toggle("is-active", _state.blockedOnly);
        _state.shown = PAGE_SIZE;
        _renderAll();
        return;
      }
      if (e.target.closest("[data-search-more]")) {
        _state.shown += PAGE_SIZE;
        _renderResults();
        return;
      }
    });

    page.addEventListener("change", function (e) {
      var who = e.target.closest("[data-search-who]");
      if (!who) return;
      _state.who = who.value || "";
      _state.shown = PAGE_SIZE;
      _renderAll();
    });

    // Export button
    var exportBtn = document.getElementById("admin-search-export-btn");
    if (exportBtn) {
      exportBtn.addEventListener("click", _exportCsv);
    }
  }

  // ── inject ───────────────────────────────────────────────────────────────

  function syncVisibility() {
    var shell = document.querySelector(".admin-dash-grid");
    var page = document.getElementById(PAGE_ID);
    if (!shell || !page) return;
    var route = shell.dataset.activeLeaf || "dashboard";
    page.style.display = route === "search" ? "" : "none";
  }

  function inject() {
    var grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", buildSection());
    _bind();
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
