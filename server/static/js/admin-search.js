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

  var _state = {
    query: "",
    hours: 168,   // default "全部" maps to 168h (7 days); 0 = all time
    results: [],
    total: 0,
    queryMs: 0,
    loading: false,
    searched: false,
  };

  var _debounceTimer = 0;

  // ── range definitions ────────────────────────────────────────────────────

  var RANGES = [
    { label: "今天",  hours: 24 },
    { label: "7天",   hours: 168 },
    { label: "30天",  hours: 720 },
    { label: "90天",  hours: 2160 },
    { label: "全部",  hours: 0 },
    { label: "自訂",  hours: -1 },   // -1 = custom (UI only, not yet wired to a date-picker)
  ];

  // ── HTML template ────────────────────────────────────────────────────────

  function buildSection() {
    var rangeButtons = RANGES.map(function (r) {
      var active = r.hours === _state.hours ? " is-active" : "";
      return '<button type="button" class="admin-search-range-btn' + active + '" data-hours="' + r.hours + '">'
        + _escHtml(r.label) + '</button>';
    }).join("");

    return '<div id="' + PAGE_ID + '" class="admin-search-page hud-page-stack lg:col-span-2">'

      // ── page header
      + '<div class="admin-v2-head">'
      +   '<div class="admin-v2-kicker">SEARCH · 彈幕全文搜尋</div>'
      +   '<div class="admin-v2-title">搜尋彈幕</div>'
      +   '<p class="admin-v2-note">全文搜尋歷史彈幕。支援進階語法：fp: / nick: / session: / after:。</p>'
      + '</div>'

      // ── two-column layout
      + '<div class="admin-search-layout" style="display:grid;grid-template-columns:260px 1fr;gap:16px;align-items:start">'

      // LEFT: filter panel
      + '<div class="admin-v2-card hud-page-stack" style="gap:14px">'
      +   '<div class="admin-v2-monolabel">篩選條件</div>'

      // Time range
      +   '<div>'
      +     '<div class="admin-v2-monolabel" style="margin-bottom:6px">時間範圍</div>'
      +     '<div class="admin-search-range-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px">'
      +       rangeButtons
      +     '</div>'
      +   '</div>'

      // Session note
      +   '<div>'
      +     '<div class="admin-v2-monolabel" style="margin-bottom:4px">場次</div>'
      +     '<p style="font-size:11px;color:var(--admin-text-dim);margin:0">（根據歷史紀錄自動分組）</p>'
      +   '</div>'

      // Status checkboxes
      +   '<div>'
      +     '<div class="admin-v2-monolabel" style="margin-bottom:6px">狀態</div>'
      +     '<div class="admin-search-status-checks" style="display:flex;flex-direction:column;gap:6px">'
      +       '<label class="admin-search-check-label" style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--admin-text)">'
      +         '<input type="checkbox" class="admin-search-status-cb" value="shown" checked /> 顯示</label>'
      +       '<label class="admin-search-check-label" style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--admin-text)">'
      +         '<input type="checkbox" class="admin-search-status-cb" value="pinned" /> 已釘選</label>'
      +       '<label class="admin-search-check-label" style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--admin-text)">'
      +         '<input type="checkbox" class="admin-search-status-cb" value="masked" /> 已遮罩</label>'
      +       '<label class="admin-search-check-label" style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--admin-text)">'
      +         '<input type="checkbox" class="admin-search-status-cb" value="blocked" /> 已封鎖</label>'
      +     '</div>'
      +   '</div>'

      // Advanced syntax
      +   '<div>'
      +     '<div class="admin-v2-monolabel" style="margin-bottom:6px">進階語法</div>'
      +     '<pre class="admin-search-syntax-block" style="'
      +         'background:var(--admin-raised);border:1px solid var(--admin-line);'
      +         'border-radius:4px;padding:8px 10px;margin:0;'
      +         'font-family:var(--font-mono);font-size:10px;'
      +         'color:var(--admin-text-dim);line-height:1.8;overflow-x:auto">'
      +       'fp:&lt;fingerprint&gt;\nnick:&lt;nickname&gt;\nsession:&lt;id&gt;\nafter:YYYY-MM-DD'
      +     '</pre>'
      +   '</div>'
      + '</div>'

      // RIGHT: results panel
      + '<div class="hud-page-stack" style="gap:14px">'

      // Search bar
      +   '<div style="position:relative">'
      +     '<span style="position:absolute;left:11px;top:50%;transform:translateY(-50%);'
      +           'font-size:14px;color:var(--admin-text-dim);pointer-events:none;user-select:none">⌕</span>'
      +     '<input id="admin-search-input" type="search" class="admin-v2-input"'
      +           ' placeholder="搜尋彈幕內容…"'
      +           ' autocomplete="off" spellcheck="false"'
      +           ' style="padding-left:30px;font-family:inherit;font-size:13px" />'
      +   '</div>'

      // Results header
      +   '<div id="admin-search-results-head"'
      +        ' style="display:flex;align-items:center;justify-content:space-between;min-height:22px">'
      +     '<span id="admin-search-count" style="font-family:var(--font-mono);font-size:11px;color:var(--admin-text-dim)"></span>'
      +     '<button type="button" id="admin-search-export-btn"'
      +             ' class="admin-v2-chip" hidden'
      +             ' style="cursor:pointer">↓ 匯出 CSV</button>'
      +   '</div>'

      // Time distribution chart
      +   '<div id="admin-search-chart" hidden'
      +        ' style="display:flex;align-items:flex-end;gap:2px;height:32px;'
      +               'background:var(--admin-raised);border:1px solid var(--admin-line);'
      +               'border-radius:4px;padding:4px 8px;overflow:hidden">'
      +   '</div>'

      // Results list
      +   '<div id="admin-search-results"'
      +        ' style="display:flex;flex-direction:column;gap:6px">'
      +     '<div id="admin-search-empty-state"'
      +          ' style="padding:32px;text-align:center;color:var(--admin-text-dim);font-size:13px">'
      +       '輸入關鍵字開始搜尋'
      +     '</div>'
      +   '</div>'

      + '</div>' // end right panel
      + '</div>' // end layout grid
      + '</div>'; // end page
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
      return escaped.replace(re, "<mark style=\"background:rgba(56,189,248,0.28);color:inherit;border-radius:2px\">$1</mark>");
    } catch (_) {
      return escaped;
    }
  }

  function _formatTs(isoStr) {
    if (!isoStr) return "—";
    try {
      var d = new Date(isoStr);
      return d.toLocaleString("zh-TW", { month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
    } catch (_) {
      return isoStr;
    }
  }

  // ── render functions ─────────────────────────────────────────────────────

  function _renderCount() {
    var countEl = document.getElementById("admin-search-count");
    if (!countEl) return;
    if (_state.loading) {
      countEl.textContent = "搜尋中…";
      return;
    }
    if (!_state.searched) {
      countEl.textContent = "";
      return;
    }
    countEl.textContent = _state.total + " 筆結果 · " + _state.queryMs + "ms";
  }

  function _renderChart() {
    var chartEl = document.getElementById("admin-search-chart");
    if (!chartEl) return;
    if (!_state.searched || _state.results.length === 0) {
      chartEl.hidden = true;
      return;
    }
    // Build 24 time buckets based on result timestamps.
    var BAR_COUNT = 24;
    var buckets = new Array(BAR_COUNT).fill(0);
    var now = Date.now();
    var windowMs = (_state.hours > 0 ? _state.hours : 168) * 3600 * 1000;
    _state.results.forEach(function (r) {
      if (!r.timestamp) return;
      var ts = new Date(r.timestamp).getTime();
      var idx = Math.floor(((ts - (now - windowMs)) / windowMs) * BAR_COUNT);
      if (idx >= 0 && idx < BAR_COUNT) buckets[idx]++;
    });
    var maxV = Math.max(1, Math.max.apply(null, buckets));
    chartEl.innerHTML = buckets.map(function (v) {
      var pct = Math.max(8, Math.round((v / maxV) * 100));
      return '<span style="flex:1;height:' + pct + '%;min-height:2px;'
        + 'background:var(--color-primary);opacity:' + (v > 0 ? 0.7 + (v / maxV) * 0.3 : 0.15)
        + ';border-radius:1px 1px 0 0;transition:height 200ms"></span>';
    }).join("");
    chartEl.hidden = false;
  }

  function _renderResults() {
    var listEl = document.getElementById("admin-search-results");
    var emptyEl = document.getElementById("admin-search-empty-state");
    var exportBtn = document.getElementById("admin-search-export-btn");
    if (!listEl) return;

    // Remove all existing result cards (keep the empty-state placeholder).
    var cards = listEl.querySelectorAll(".admin-search-result-card");
    cards.forEach(function (c) { c.remove(); });

    if (_state.loading) {
      if (emptyEl) { emptyEl.style.display = "block"; emptyEl.textContent = "搜尋中…"; }
      if (exportBtn) exportBtn.hidden = true;
      return;
    }
    if (!_state.searched) {
      if (emptyEl) { emptyEl.style.display = "block"; emptyEl.textContent = "輸入關鍵字開始搜尋"; }
      if (exportBtn) exportBtn.hidden = true;
      return;
    }
    if (_state.results.length === 0) {
      if (emptyEl) { emptyEl.style.display = "block"; emptyEl.textContent = "找不到符合的彈幕"; }
      if (exportBtn) exportBtn.hidden = true;
      return;
    }

    if (emptyEl) emptyEl.style.display = "none";
    if (exportBtn) exportBtn.hidden = false;

    var frag = document.createDocumentFragment();
    _state.results.forEach(function (r) {
      var hue = _hue(r.fingerprint || "");
      var nick = _escHtml(r.nickname || "匿名");
      var fp = _escHtml((r.fingerprint || "").slice(0, 10));
      var ts = _formatTs(r.timestamp);
      var textHtml = _highlight(r.text || "", _state.query);

      var card = document.createElement("div");
      card.className = "admin-search-result-card";
      card.style.cssText = "background:var(--admin-raised);border:1px solid var(--admin-line);"
        + "border-radius:5px;padding:10px 12px;display:flex;flex-direction:column;gap:6px";
      card.innerHTML =
        '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">'
        +   '<span style="width:8px;height:8px;border-radius:50%;flex-shrink:0;'
        +         'background:hsl(' + hue + ',70%,60%)"></span>'
        +   '<span style="font-size:12px;font-weight:600;color:var(--admin-text)">' + nick + '</span>'
        +   '<span style="font-family:var(--font-mono);font-size:10px;color:var(--admin-text-dim)">' + fp + '</span>'
        +   '<span style="margin-left:auto;font-family:var(--font-mono);font-size:10px;color:var(--admin-text-dim)">' + _escHtml(ts) + '</span>'
        + '</div>'
        + '<div style="font-size:13px;color:var(--admin-text);line-height:1.5;word-break:break-all">'
        +   textHtml
        + '</div>';
      frag.appendChild(card);
    });
    listEl.appendChild(frag);
  }

  function _renderAll() {
    _renderCount();
    _renderChart();
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
      _state.queryMs = 0;
      _renderAll();
      return;
    }
    _state.loading = true;
    _renderAll();

    try {
      var url = "/admin/search?q=" + encodeURIComponent(q);
      if (_state.hours > 0) url += "&hours=" + _state.hours;
      var t0 = Date.now();
      var r = await fetch(url, { credentials: "same-origin" });
      var elapsed = Date.now() - t0;
      if (!r.ok) throw new Error("HTTP " + r.status);
      var data = await r.json();
      _state.results = Array.isArray(data.results) ? data.results : [];
      _state.total = typeof data.total === "number" ? data.total : _state.results.length;
      _state.queryMs = typeof data.query_ms === "number" ? data.query_ms : elapsed;
    } catch (e) {
      console.error("[admin-search] fetch error:", e);
      _state.results = [];
      _state.total = 0;
      _state.queryMs = 0;
      window.showToast && window.showToast("搜尋失敗：" + (e.message || ""), false);
    } finally {
      _state.loading = false;
      _state.searched = true;
      _renderAll();
    }
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

    // Range buttons
    page.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-hours]");
      if (btn && btn.classList.contains("admin-search-range-btn")) {
        var hours = parseInt(btn.dataset.hours, 10);
        if (hours === -1) return; // "自訂" – not yet wired
        _state.hours = hours;
        // Update active state
        page.querySelectorAll(".admin-search-range-btn").forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });
        if (_state.query.trim()) _scheduleSearch();
      }
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
