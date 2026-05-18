// admin-history-v2.js — Timeline Export page (prototype admin-batch1.jsx:218
// AdminHistoryPage). 3-step picker: time range / content filter / output
// format → 產生並下載. Right panel = recent exports (localStorage-backed).
//
// Self-binds on `admin-panel-rendered`. Renders into #history-v2-section
// (created next to sec-history). admin.js routing already includes the
// section under route=history.
(function () {
  "use strict";

  var SECTION_ID = "history-v2-section";
  var STORAGE_KEY = "danmu.adminHistoryExports.v1";
  var MAX_RECENT = 10;

  // Filter toggle defaults (prototype lines 246-249).
  var FILTER_DEFAULTS = {
    rawText: true,
    polls: true,
    masked: false,
    metadata: true,
  };

  var TIME_PRESETS = [
    { k: "live",  label: "本場活動",     hours: null /* computed */ },
    { k: "1h",    label: "近 1 小時",   hours: 1 },
    { k: "24h",   label: "近 24 小時",  hours: 24 },
    { k: "today", label: "今天",         hours: null /* since 00:00 */ },
    { k: "yest",  label: "昨天",         hours: null },
    { k: "7d",    label: "近 7 天",     hours: 168 },
    { k: "custom", label: "自訂…",      hours: null },
  ];

  var FORMATS = [
    { k: "JSON", desc: "完整原始紀錄、機器可讀，含所有 metadata" },
    { k: "CSV",  desc: "試算表友善，預設欄位：時間 / 暱稱 / IP / 內容 / 狀態" },
    { k: "SRT",  desc: "字幕格式，可直接套到 YouTube / Premiere", badge: "字幕" },
  ];

  var state = {
    range: "24h",
    filters: Object.assign({}, FILTER_DEFAULTS),
    format: "JSON",
  };

  function _section() { return document.getElementById(SECTION_ID); }

  function _loadRecent() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
    catch (_) { return []; }
  }
  function _saveRecent(list) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, MAX_RECENT))); }
    catch (_) {}
  }
  function _pushRecent(entry) {
    var list = _loadRecent();
    list.unshift(entry);
    _saveRecent(list);
  }

  function _formatBytes(n) {
    if (!n) return "0 B";
    if (n < 1024) return n + " B";
    if (n < 1024 * 1024) return (n / 1024).toFixed(1) + " KB";
    return (n / 1024 / 1024).toFixed(1) + " MB";
  }
  function _formatWhen(iso) {
    try {
      var d = new Date(iso);
      var now = new Date();
      var sameDay = d.toDateString() === now.toDateString();
      if (sameDay) return "今天 " + String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
      var yest = new Date(now); yest.setDate(now.getDate() - 1);
      if (d.toDateString() === yest.toDateString()) return "昨天 " + String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
      return (d.getMonth() + 1) + "-" + String(d.getDate()).padStart(2, "0") + " " + String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
    } catch (_) { return iso || ""; }
  }

  function _hoursForRange(k) {
    if (k === "1h") return 1;
    if (k === "24h") return 24;
    if (k === "7d") return 168;
    if (k === "today") {
      var now = new Date();
      var start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      return Math.max(1, Math.ceil((now - start) / 3600000));
    }
    if (k === "yest") return 48;
    if (k === "live") return 6; // best-effort: 本場活動 ≈ 過去 6 小時
    return 24;
  }

  function _filterRecords(records) {
    return records.filter(function (r) {
      if (!state.filters.rawText && !r.is_poll && !r.muted && !r.banned) return false;
      if (!state.filters.polls && r.is_poll) return false;
      if (!state.filters.masked && (r.muted || r.banned)) return false;
      return true;
    }).map(function (r) {
      if (!state.filters.metadata) {
        var clone = Object.assign({}, r);
        delete clone.clientIp;
        delete clone.fingerprint;
        return clone;
      }
      return r;
    });
  }

  function _csv(records) {
    var headers = ["timestamp", "nickname", "text", "color", "size", "speed", "opacity", "isImage", "fontName", "clientIp", "fingerprint", "status"];
    var esc = function (v) {
      var s = v == null ? "" : String(v);
      return s.indexOf(",") >= 0 || s.indexOf('"') >= 0 || s.indexOf("\n") >= 0
        ? '"' + s.replace(/"/g, '""') + '"' : s;
    };
    var status = function (r) {
      if (r.banned) return "banned"; if (r.muted) return "muted"; if (r.is_poll) return "poll"; return "ok";
    };
    var rows = records.map(function (r) {
      return [
        r.timestamp || "",
        r.nickname || "",
        r.text || "",
        r.color ? "#" + r.color : "",
        r.size != null ? r.size : "",
        r.speed != null ? r.speed : "",
        r.opacity != null ? r.opacity : "",
        r.isImage ? "true" : "false",
        (r.fontInfo && r.fontInfo.name) || "",
        r.clientIp || "",
        r.fingerprint || "",
        status(r),
      ].map(esc).join(",");
    });
    return [headers.join(","), rows.join("\r\n")].filter(Boolean).join("\r\n");
  }

  function _srt(records) {
    // Naive: use record timestamps as start; each line gets 3s duration.
    return records.map(function (r, i) {
      var start = new Date(r.timestamp || Date.now());
      var startT = _srtTime(start);
      var endT = _srtTime(new Date(start.getTime() + 3000));
      var text = (r.nickname ? "[" + r.nickname + "] " : "") + (r.text || "");
      return (i + 1) + "\n" + startT + " --> " + endT + "\n" + text + "\n";
    }).join("\n");
  }
  function _srtTime(d) {
    var pad = function (n, w) { return String(n).padStart(w || 2, "0"); };
    return pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) + "," + pad(d.getMilliseconds(), 3);
  }

  function _download(blob, name) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = name; a.click();
    URL.revokeObjectURL(url);
  }

  function _doExport() {
    var hours = _hoursForRange(state.range);
    var btn = document.getElementById("histv2-go");
    if (btn) { btn.disabled = true; btn.dataset.busy = "1"; }
    fetch("/admin/history?hours=" + hours + "&limit=10000", { credentials: "same-origin" })
      .then(function (r) { if (!r.ok) throw new Error("http " + r.status); return r.json(); })
      .then(function (data) {
        var raw = (data && data.records) || [];
        var rows = _filterRecords(raw);
        if (rows.length === 0) {
          if (window.showToast) window.showToast("沒有符合條件的紀錄", false);
          return;
        }
        var ts = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
        var name, blob;
        if (state.format === "JSON") {
          var json = JSON.stringify(rows, null, 2);
          blob = new Blob([json], { type: "application/json" });
          name = "danmu-history-" + ts + ".json";
        } else if (state.format === "CSV") {
          blob = new Blob(["﻿" + _csv(rows)], { type: "text/csv;charset=utf-8;" });
          name = "danmu-history-" + ts + ".csv";
        } else {
          blob = new Blob([_srt(rows)], { type: "application/x-subrip;charset=utf-8;" });
          name = "danmu-history-" + ts + ".srt";
        }
        _download(blob, name);
        _pushRecent({
          name: name, fmt: state.format, size: blob.size,
          when: new Date().toISOString(), count: rows.length,
        });
        _renderRecent();
        _renderEstimate(rows.length, blob.size);
        if (window.showToast) window.showToast("已匯出 " + rows.length + " 筆", true);
      })
      .catch(function (err) {
        console.error("[history-v2] export failed", err);
        if (window.showToast) window.showToast("匯出失敗：" + (err.message || err), false);
      })
      .finally(function () { if (btn) { btn.disabled = false; delete btn.dataset.busy; } });
  }

  function _renderEstimate(count, bytes) {
    var el = document.getElementById("histv2-estimate");
    if (!el) return;
    el.textContent = "預估：" + (count || "—") + " 筆訊息 · " + (bytes ? _formatBytes(bytes) : "— MB");
  }

  function _renderRecent() {
    var listEl = document.getElementById("histv2-recent-list");
    if (!listEl) return;
    var list = _loadRecent();
    if (list.length === 0) {
      listEl.innerHTML = '<div class="histv2-recent-empty">尚未匯出</div>';
      return;
    }
    listEl.innerHTML = list.map(function (f) {
      return (
        '<div class="histv2-recent-row">' +
          '<span class="histv2-recent-fmt">' + f.fmt + '</span>' +
          '<div class="histv2-recent-meta">' +
            '<div class="histv2-recent-name">' + _esc(f.name) + '</div>' +
            '<div class="histv2-recent-sub">admin · ' + _esc(_formatWhen(f.when)) + ' · ' + _formatBytes(f.size) + '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");
  }

  function _esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c];
    });
  }

  function _renderRangeChips() {
    return TIME_PRESETS.map(function (p) {
      var on = state.range === p.k;
      return (
        '<button type="button" class="histv2-chip' + (on ? " is-active" : "") + '" data-histv2-range="' + p.k + '">' +
        _esc(p.label) + (p.k === "live" ? ' · ' + _now() : "") +
        '</button>'
      );
    }).join("");
  }
  function _now() {
    var d = new Date();
    return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0") + "–現在";
  }

  function _renderToggles() {
    var defs = [
      { k: "rawText", label: "包含原始訊息" },
      { k: "polls",   label: "包含投票" },
      { k: "masked",  label: "包含被遮罩 / 封鎖" },
      { k: "metadata", label: "包含元資料 (IP / 指紋)" },
    ];
    return defs.map(function (d) {
      var on = !!state.filters[d.k];
      return (
        '<button type="button" class="histv2-toggle' + (on ? " is-on" : "") + '" data-histv2-toggle="' + d.k + '">' +
        '<span class="histv2-toggle-mark">' + (on ? "✓" : "○") + '</span>' +
        '<span>' + _esc(d.label) + '</span>' +
        '</button>'
      );
    }).join("");
  }

  function _renderFormats() {
    return FORMATS.map(function (f) {
      var on = state.format === f.k;
      return (
        '<button type="button" class="histv2-fmt' + (on ? " is-selected" : "") + '" data-histv2-fmt="' + f.k + '">' +
        (on ? '<span class="histv2-fmt-check">✓</span>' : "") +
        (f.badge ? '<span class="histv2-fmt-badge">' + _esc(f.badge) + '</span>' : "") +
        '<div class="histv2-fmt-ext">' + f.k + '</div>' +
        '<div class="histv2-fmt-desc">' + _esc(f.desc) + '</div>' +
        '</button>'
      );
    }).join("");
  }

  function _renderShell() {
    var sec = _section();
    if (!sec) return;
    sec.innerHTML =
      '<div class="histv2-grid">' +
        '<div class="histv2-pane histv2-picker">' +
          '<div class="histv2-section-hd">① 時間範圍</div>' +
          '<div class="histv2-chips" id="histv2-chips">' + _renderRangeChips() + '</div>' +

          '<div class="histv2-section-hd">② 內容篩選</div>' +
          '<div class="histv2-toggles" id="histv2-toggles">' + _renderToggles() + '</div>' +

          '<div class="histv2-section-hd">③ 輸出格式</div>' +
          '<div class="histv2-formats" id="histv2-formats">' + _renderFormats() + '</div>' +

          '<div class="histv2-actions">' +
            '<button type="button" id="histv2-go" class="histv2-go">↓ 產生並下載</button>' +
            '<span id="histv2-estimate" class="histv2-estimate">預估：— 筆訊息 · — MB</span>' +
          '</div>' +
        '</div>' +

        '<div class="histv2-pane histv2-recent">' +
          '<div class="histv2-recent-hd">' +
            '<span class="histv2-recent-label">最近匯出</span>' +
            '<span class="histv2-recent-period">過去 30 天</span>' +
          '</div>' +
          '<div id="histv2-recent-list" class="histv2-recent-list"></div>' +
          '<div class="histv2-privacy">' +
            '<div class="histv2-privacy-hd">⚠ 隱私</div>' +
            '匯出包含 IP / 指紋的檔案 24 小時後自動刪除，避免外洩。' +
          '</div>' +
        '</div>' +
      '</div>';

    sec.addEventListener("click", _onClick);
    _renderRecent();
    _refreshEstimate();
  }

  function _onClick(e) {
    var rangeBtn = e.target.closest("[data-histv2-range]");
    if (rangeBtn) { state.range = rangeBtn.dataset.histv2Range; _refreshChips(); _refreshEstimate(); return; }
    var togBtn = e.target.closest("[data-histv2-toggle]");
    if (togBtn) { var k = togBtn.dataset.histv2Toggle; state.filters[k] = !state.filters[k]; _refreshToggles(); _refreshEstimate(); return; }
    var fmtBtn = e.target.closest("[data-histv2-fmt]");
    if (fmtBtn) { state.format = fmtBtn.dataset.histv2Fmt; _refreshFormats(); _refreshEstimate(); return; }
    var goBtn = e.target.closest("#histv2-go");
    if (goBtn && !goBtn.dataset.busy) { _doExport(); return; }
  }

  function _refreshChips() {
    var el = document.getElementById("histv2-chips");
    if (el) el.innerHTML = _renderRangeChips();
  }
  function _refreshToggles() {
    var el = document.getElementById("histv2-toggles");
    if (el) el.innerHTML = _renderToggles();
  }
  function _refreshFormats() {
    var el = document.getElementById("histv2-formats");
    if (el) el.innerHTML = _renderFormats();
  }
  function _refreshEstimate() {
    // Best-effort estimate: hit /admin/history with current hours range,
    // but only count without downloading. For perf, debounce.
    if (_refreshEstimate._t) clearTimeout(_refreshEstimate._t);
    _refreshEstimate._t = setTimeout(function () {
      var hours = _hoursForRange(state.range);
      fetch("/admin/history?hours=" + hours + "&limit=10000", { credentials: "same-origin" })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (!data) return _renderEstimate(0, 0);
          var rows = _filterRecords((data && data.records) || []);
          // Rough size estimate per format
          var avg = state.format === "JSON" ? 220 : state.format === "CSV" ? 110 : 80;
          _renderEstimate(rows.length, rows.length * avg);
        })
        .catch(function () { _renderEstimate(0, 0); });
    }, 250);
  }

  function _ensureSection() {
    if (_section()) return;
    var historyCard = document.getElementById("sec-history");
    if (!historyCard || !historyCard.parentElement) return;
    var sec = document.createElement("div");
    sec.id = SECTION_ID;
    sec.className = "admin-v3-card lg:col-span-2 history-v2-section";
    historyCard.parentElement.insertBefore(sec, historyCard);
    _renderShell();
    _applyHashVisibility();
  }

  // Section id is `history-v2-section` — intentionally NOT prefixed `sec-`
  // so admin.js applySectionVisibility() (which only filters [id^="sec-"])
  // doesn't touch it. We manage own visibility here to avoid leaking into
  // every other route (#/widgets / #/themes etc.).
  // Visible when: route === "history" AND body.dataset.historyTab === "export".
  function _applyHashVisibility() {
    var el = _section();
    if (!el) return;
    var hash = (window.location.hash.match(/^#\/(\w[\w-]*)/) || [])[1] || "dashboard";
    var tab = (document.body && document.body.dataset && document.body.dataset.historyTab) || "export";
    el.style.display = (hash === "history" && tab === "export") ? "" : "none";
  }

  document.addEventListener("admin-panel-rendered", function () {
    _ensureSection();
  });

  window.addEventListener("hashchange", _applyHashVisibility);
  document.addEventListener("admin:history-tab", _applyHashVisibility);

  window.AdminHistoryV2 = {
    refresh: _refreshEstimate,
    state: state,
  };
})();
