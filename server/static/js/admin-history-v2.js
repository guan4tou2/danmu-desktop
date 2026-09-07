// admin-history-v2.js — Timeline Export page (prototype admin-batch1.jsx:218
// AdminHistoryPage). 3-step picker: time range / content filter / output
// format → 產生並下載. Right panel = recent exports (localStorage-backed).
//
// Self-binds on `admin-panel-rendered`. Renders into #sec-timeline-export.
//
// 2026-09-07（設計稿 08 · H1）：從「紀錄與匯出 › 重播」搬到「備份與還原」。
// 稿上說依小時的整批匯出「收進場次的匯出面板」，但那在功能上不成立——場次
// 面板是**單一場次**的 CSV/JSON/SRT，給不了「近 7 天、跨場次、只要投票」這種
// 匯出。而「把我的資料整批倒出來」本來就是備份的事，不是紀錄瀏覽的事；
// 「全部清除」也早就住在那一頁。
//
// id 改成 sec- 前綴之後，可見性由 admin.js 的 applySectionVisibility 統一管
// （它只掃 [id^="sec-"]），本模組不再自己算一份 route guard。
(function () {
  "use strict";

  var SECTION_ID = "sec-timeline-export";
  var STORAGE_KEY = "danmu.adminHistoryExports.v1";
  var MAX_RECENT = 10;

  // Filter toggle defaults (prototype lines 246-249).
  var FILTER_DEFAULTS = {
    rawText: true,
    polls: true,
    masked: false,
    metadata: true,
  };

  // D-4：常數層在模組 parse 時求值（ServerI18n 尚未 init），故存 labelKey /
  // descKey / badgeKey，實際文字延後到各自的單一渲染點（_renderRangeChips /
  // _renderFormats）才 t()。today/yest 語意與 sessions bucket 列相同，重用
  // sessionsBucketToday / sessionsBucketYesterday，不開新 key。
  var TIME_PRESETS = [
    { k: "live",  labelKey: "historyV2RangeLive",  hours: null /* computed */ },
    { k: "1h",    labelKey: "historyV2Range1h",    hours: 1 },
    { k: "24h",   labelKey: "historyV2Range24h",   hours: 24 },
    { k: "today", labelKey: "sessionsBucketToday", hours: null /* since 00:00 */ },
    { k: "yest",  labelKey: "sessionsBucketYesterday", hours: null },
    { k: "7d",    labelKey: "historyV2Range7d",    hours: 168 },
    { k: "custom", labelKey: "historyV2RangeCustom", hours: null },
  ];

  var FORMATS = [
    { k: "JSON", descKey: "historyV2FormatJsonDesc" },
    { k: "CSV",  descKey: "historyV2FormatCsvDesc" },
    { k: "SRT",  descKey: "historyV2FormatSrtDesc", badgeKey: "historyV2FormatSrtBadge" },
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
      if (sameDay) return ServerI18n.t("historyV2TodayAt", { time: String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0") });
      var yest = new Date(now); yest.setDate(now.getDate() - 1);
      if (d.toDateString() === yest.toDateString()) return ServerI18n.t("historyV2YesterdayAt", { time: String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0") });
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
          if (window.showToast) window.showToast(ServerI18n.t("historyV2NoMatchingRecords"), false);
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
        if (window.showToast) window.showToast(ServerI18n.t("historyV2ToastExported", { n: rows.length }), true);
      })
      .catch(function (err) {
        console.error("[history-v2] export failed", err);
        if (window.showToast) window.showToast(ServerI18n.t("historyV2ToastExportFailed", { msg: err.message || err }), false);
      })
      .finally(function () { if (btn) { btn.disabled = false; delete btn.dataset.busy; } });
  }

  function _renderEstimate(count, bytes) {
    var el = document.getElementById("histv2-estimate");
    if (!el) return;
    el.textContent = ServerI18n.t("historyV2Estimate", { count: count || "—", size: bytes ? _formatBytes(bytes) : "— MB" });
  }

  function _renderRecent() {
    var listEl = document.getElementById("histv2-recent-list");
    if (!listEl) return;
    var list = _loadRecent();
    if (list.length === 0) {
      listEl.innerHTML = '<div class="histv2-recent-empty">' + ServerI18n.t("historyV2RecentEmpty") + '</div>';
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
        _esc(ServerI18n.t(p.labelKey)) + (p.k === "live" ? ' · ' + _now() : "") +
        '</button>'
      );
    }).join("");
  }
  function _now() {
    var d = new Date();
    return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0") + "–" + ServerI18n.t("historyV2Now");
  }

  function _renderToggles() {
    var defs = [
      { k: "rawText", labelKey: "historyV2ToggleRawText" },
      { k: "polls",   labelKey: "historyV2TogglePolls" },
      { k: "masked",  labelKey: "historyV2ToggleMasked" },
      { k: "metadata", labelKey: "historyV2ToggleMetadata" },
    ];
    return defs.map(function (d) {
      var on = !!state.filters[d.k];
      return (
        '<button type="button" class="histv2-toggle' + (on ? " is-on" : "") + '" data-histv2-toggle="' + d.k + '">' +
        '<span class="histv2-toggle-mark">' + (on ? "✓" : "○") + '</span>' +
        '<span>' + _esc(ServerI18n.t(d.labelKey)) + '</span>' +
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
          '<div class="histv2-section-hd">' + ServerI18n.t("historyV2StepTime") + '</div>' +
          '<div class="histv2-chips" id="histv2-chips">' + _renderRangeChips() + '</div>' +

          '<div class="histv2-section-hd">' + ServerI18n.t("historyV2StepFilter") + '</div>' +
          '<div class="histv2-toggles" id="histv2-toggles">' + _renderToggles() + '</div>' +

          '<div class="histv2-section-hd">' + ServerI18n.t("historyV2StepFormat") + '</div>' +
          '<div class="histv2-formats" id="histv2-formats">' + _renderFormats() + '</div>' +

          '<div class="histv2-actions">' +
            '<button type="button" id="histv2-go" class="histv2-go">' + ServerI18n.t("historyV2GoButton") + '</button>' +
            '<span id="histv2-estimate" class="histv2-estimate">' + ServerI18n.t("historyV2Estimate", { count: "—", size: "— MB" }) + '</span>' +
          '</div>' +
        '</div>' +

        '<div class="histv2-pane histv2-recent">' +
          '<div class="histv2-recent-hd">' +
            '<span class="histv2-recent-label">' + ServerI18n.t("historyV2RecentLabel") + '</span>' +
            '<span class="histv2-recent-period">' + ServerI18n.t("historyV2RecentPeriod") + '</span>' +
          '</div>' +
          '<div id="histv2-recent-list" class="histv2-recent-list"></div>' +
          '<div class="histv2-privacy">' +
            '<div class="histv2-privacy-hd">' + ServerI18n.t("historyV2PrivacyTitle") + '</div>' +
            ServerI18n.t("historyV2PrivacyBody") +
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

  // 備份頁（admin-backup-v2-page）是**延遲注入**的：admin-backup.js 用
  // MutationObserver 等 #settings-grid 出現才塞。所以 admin-panel-rendered
  // 當下錨點常常還不存在——第一版直接 return，結果整塊匯出精靈永遠沒被建出來。
  // 錨點還沒到就先掛在 grid 尾端，之後備份頁到齊時再挪到它後面。
  function _ensureSection() {
    var sec = _section();
    var anchor = document.getElementById("admin-backup-v2-page");
    if (!sec) {
      var grid = document.getElementById("settings-grid");
      if (!grid) return;
      sec = document.createElement("div");
      sec.id = SECTION_ID;
      sec.className = "admin-ui-card lg:col-span-2 history-v2-section";
      grid.appendChild(sec);
      _renderShell();
    }
    // 排到備份頁後面：稿上的順序是「備份／還原在上，整批匯出在下」
    if (anchor && anchor.parentElement && sec.previousElementSibling !== anchor) {
      anchor.parentElement.insertBefore(sec, anchor.nextSibling);
    }
  }

  document.addEventListener("admin-panel-rendered", _ensureSection);
  // 備份頁比我們晚到，route-applied 是它一定已經在的那一棒。
  document.addEventListener("admin-route-applied", _ensureSection);

  window.AdminHistoryV2 = {
    refresh: _refreshEstimate,
    state: state,
  };
})();
