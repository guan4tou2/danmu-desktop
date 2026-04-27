/**
 * Admin Replay Section (P1-7) — v2 retrofit.
 *
 * Dedicated Replay UI per docs/design-v2-backlog.md §P1-7:
 *   - Session picker (derived from /admin/history day-grouping)
 *   - Density histogram (simple per-minute bar chart)
 *   - Message list for selected session
 *   - Per-message "Re-fire" button (POSTs single record to /admin/replay)
 *   - Speed multiplier (0.5× / 1× / 2× / 4×) for batch fire
 *   - JSON export (reuses /admin/history/export)
 *
 * Section id is `replay-v2-section` — intentionally NOT prefixed `sec-` so the
 * shell's route-based visibility filter (admin.js applySectionVisibility) does
 * not touch it. Visibility is now managed by the History page's tab strip
 * (admin-history.js): shown on #/history when tab=replay, otherwise hidden.
 * The replay route was retired in 2026-04-27 sidebar consolidation.
 *
 * Loaded as <script defer> in admin.html after admin-history.js.
 * Globals: csrfFetch, showToast, ServerI18n, AdminUtils.
 */
(function () {
  "use strict";

  var esc = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  const SECTION_ID = "replay-v2-section";
  const t = function (k, fallback) {
    try { var v = window.ServerI18n && ServerI18n.t(k); return v && v !== k ? v : fallback || k; }
    catch (_e) { return fallback || k; }
  };

  var _allRecords = [];   // flat array newest-first
  var _sessions = [];     // [{key, label, records[]}] newest-first
  var _activeSessionKey = null;
  var _filtered = [];     // message list currently displayed

  function _dayKey(ts) {
    var d = new Date(ts);
    if (isNaN(d.getTime())) return "unknown";
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + day;
  }

  function _groupSessions(records) {
    // records arrive newest-first from /admin/history. Group by local day.
    var map = Object.create(null);
    for (var i = 0; i < records.length; i++) {
      var r = records[i];
      var k = _dayKey(r.timestamp);
      if (!map[k]) map[k] = [];
      map[k].push(r);
    }
    // Build array sorted newest-first by day key.
    var keys = Object.keys(map).sort().reverse();
    return keys.map(function (k) {
      return { key: k, label: k + "  ·  " + map[k].length + " msg", records: map[k] };
    });
  }

  function _histogram(records, bins) {
    if (!records.length) return { bars: [], max: 0, span: 0 };
    // records are newest-first; extract times ascending.
    var times = records.map(function (r) { return new Date(r.timestamp).getTime(); }).filter(function (n) { return !isNaN(n); });
    if (!times.length) return { bars: [], max: 0, span: 0 };
    var lo = Math.min.apply(null, times), hi = Math.max.apply(null, times);
    var span = Math.max(hi - lo, 1000);
    var n = bins || 40;
    var step = span / n;
    var bars = new Array(n).fill(0);
    for (var i = 0; i < times.length; i++) {
      var idx = Math.min(n - 1, Math.floor((times[i] - lo) / step));
      bars[idx]++;
    }
    return { bars: bars, max: Math.max.apply(null, bars) || 1, span: span };
  }

  function _renderShell() {
    return (
      '<div id="' + SECTION_ID + '" class="admin-replay-page hud-page-stack lg:col-span-2" style="display:none">' +
        '<div class="admin-v2-head">' +
          '<div class="admin-v2-kicker">REPLAY · ' + esc(t("replayKicker", "歷史彈幕重播")) + '</div>' +
          '<div class="admin-v2-title">' + esc(t("replayTitle", "Replay")) + '</div>' +
          '<p class="admin-v2-note">' + esc(t("replayNote", "Re-fire historical messages. Pick a day, scrub the timeline, fire single or batch.")) + '</p>' +
        '</div>' +
        '<div class="admin-v2-card admin-replay-picker">' +
          '<div class="admin-v2-toolbar">' +
            '<span class="admin-v2-monolabel">SESSION</span>' +
            '<select id="replayV2Session" class="admin-v2-select" style="max-width:280px"></select>' +
            '<span class="admin-v2-monolabel">SPEED</span>' +
            '<select id="replayV2Speed" class="admin-v2-select" style="max-width:110px">' +
              '<option value="0.5">0.5×</option>' +
              '<option value="1" selected>1×</option>' +
              '<option value="2">2×</option>' +
              '<option value="4">4×</option>' +
            '</select>' +
            '<button type="button" id="replayV2Refresh" class="admin-v2-chip">↻ ' + esc(t("refreshBtn", "Refresh")) + '</button>' +
            '<button type="button" id="replayV2ExportJson" class="admin-v2-chip" style="margin-left:auto">⇩ JSON</button>' +
          '</div>' +
          '<div class="admin-replay-histogram" id="replayV2Histogram" aria-hidden="true"></div>' +
          '<div class="admin-replay-meta" id="replayV2Meta">—</div>' +
        '</div>' +
        '<div class="admin-v2-card admin-replay-list-card">' +
          '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">' +
            '<span class="admin-v2-monolabel">MESSAGES</span>' +
            '<span class="admin-v2-monolabel" id="replayV2Count" style="margin-left:auto">—</span>' +
          '</div>' +
          '<div id="replayV2List" class="admin-replay-list">' +
            '<div class="admin-replay-empty">' + esc(t("loading", "Loading…")) + '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function _inject() {
    if (document.getElementById(SECTION_ID)) return;
    // 2026-04-27 sidebar consolidation: place replay UI alongside the
    // history card (sibling of sec-history) so the tab strip sits above
    // both — sec-history's parent is the admin-route-sections grid, not
    // #settings-grid. Fall back to settings-grid if history not yet rendered.
    var historyCard = document.getElementById("sec-history");
    var host = (historyCard && historyCard.parentElement) || document.getElementById("settings-grid");
    if (!host) return;
    host.insertAdjacentHTML("beforeend", _renderShell());
    _bind();
    _applyHashVisibility();
    _load();
  }

  function _bind() {
    var sel = document.getElementById("replayV2Session");
    if (sel) sel.addEventListener("change", function () {
      _activeSessionKey = sel.value;
      _renderSelected();
    });
    var refresh = document.getElementById("replayV2Refresh");
    if (refresh) refresh.addEventListener("click", _load);
    var exportBtn = document.getElementById("replayV2ExportJson");
    if (exportBtn) exportBtn.addEventListener("click", function () {
      // Reuse existing /admin/history/export — scope to visible hours (168h).
      window.open("/admin/history/export?hours=168", "_blank", "noopener");
    });
    var list = document.getElementById("replayV2List");
    if (list) list.addEventListener("click", function (ev) {
      var btn = ev.target.closest("button[data-replay-refire]");
      if (btn) {
        var idx = parseInt(btn.dataset.replayRefire, 10);
        if (!isNaN(idx)) _refire(idx, btn);
      }
    });
  }

  async function _load() {
    var list = document.getElementById("replayV2List");
    if (list) list.innerHTML = '<div class="admin-replay-empty">' + esc(t("loading", "Loading…")) + '</div>';
    try {
      var res = await fetch("/admin/history?hours=168&limit=5000", { credentials: "same-origin" });
      if (!res.ok) throw new Error("fetch failed");
      var data = await res.json();
      _allRecords = Array.isArray(data.records) ? data.records : [];
      _sessions = _groupSessions(_allRecords);
      _populateSessionPicker();
      if (_sessions.length) {
        _activeSessionKey = _sessions[0].key;
        var sel = document.getElementById("replayV2Session");
        if (sel) sel.value = _activeSessionKey;
        _renderSelected();
      } else {
        _renderEmpty();
      }
    } catch (err) {
      if (list) list.innerHTML = '<div class="admin-replay-empty is-bad">' + esc(t("replayFailed", "Failed to load")) + '</div>';
    }
  }

  function _populateSessionPicker() {
    var sel = document.getElementById("replayV2Session");
    if (!sel) return;
    if (!_sessions.length) {
      sel.innerHTML = '<option value="">—</option>';
      return;
    }
    sel.innerHTML = _sessions.map(function (s) {
      return '<option value="' + esc(s.key) + '">' + esc(s.label) + '</option>';
    }).join("");
  }

  function _renderEmpty() {
    var list = document.getElementById("replayV2List");
    var count = document.getElementById("replayV2Count");
    var meta = document.getElementById("replayV2Meta");
    var hist = document.getElementById("replayV2Histogram");
    if (list) list.innerHTML = '<div class="admin-replay-empty">' + esc(t("noHistoryYet", "No history recorded yet.")) + '</div>';
    if (count) count.textContent = "0";
    if (meta) meta.textContent = "—";
    if (hist) hist.innerHTML = "";
    _filtered = [];
  }

  function _renderSelected() {
    var session = _sessions.find(function (s) { return s.key === _activeSessionKey; });
    if (!session) { _renderEmpty(); return; }
    _filtered = session.records;

    var count = document.getElementById("replayV2Count");
    if (count) count.textContent = String(_filtered.length);
    var meta = document.getElementById("replayV2Meta");
    if (meta) {
      var first = _filtered[_filtered.length - 1];
      var last = _filtered[0];
      meta.textContent =
        esc(t("day", "Day")) + " " + session.key + "  ·  " +
        (first && first.timestamp ? new Date(first.timestamp).toLocaleTimeString() : "—") + " → " +
        (last && last.timestamp ? new Date(last.timestamp).toLocaleTimeString() : "—");
    }

    // Histogram (40 bins across session span).
    var h = _histogram(_filtered, 40);
    var hist = document.getElementById("replayV2Histogram");
    if (hist) {
      if (!h.bars.length) {
        hist.innerHTML = "";
      } else {
        hist.innerHTML = h.bars.map(function (v) {
          var pct = Math.round((v / h.max) * 100);
          return '<span class="admin-replay-bar" style="height:' + Math.max(2, pct) + '%" title="' + v + '"></span>';
        }).join("");
      }
    }

    _renderList();
  }

  function _renderList() {
    var list = document.getElementById("replayV2List");
    if (!list) return;
    if (!_filtered.length) {
      list.innerHTML = '<div class="admin-replay-empty">' + esc(t("noHistoryYet", "No records.")) + '</div>';
      return;
    }
    // Cap render to 300 to avoid DOM bloat. _filtered is newest-first;
    // take top-300 and reverse for oldest→newest reading order.
    var cap = Math.min(300, _filtered.length);
    var slice = _filtered.slice(0, cap).slice().reverse();
    list.innerHTML = slice.map(function (r, i) {
      // Display position i maps back to _filtered index (cap - 1 - i).
      var absIdx = cap - 1 - i;
      var ts = r.timestamp ? new Date(r.timestamp).toLocaleTimeString() : "—";
      var preview = r.isImage ? "[image]" : String(r.text || "").slice(0, 80);
      var colorDot = r.color ? ('<span class="admin-replay-color" style="background:' + esc(String(r.color).startsWith("#") ? r.color : "#" + r.color) + '"></span>') : "";
      return (
        '<div class="admin-replay-row">' +
          '<span class="admin-replay-time">' + esc(ts) + '</span>' +
          colorDot +
          '<span class="admin-replay-text">' + esc(preview) + '</span>' +
          '<button type="button" class="admin-v2-chip is-on" data-replay-refire="' + absIdx + '" title="' + esc(t("refireNow", "Re-fire now")) + '">▶ ' + esc(t("refireNow", "Re-fire")) + '</button>' +
        '</div>'
      );
    }).join("");
    if (_filtered.length > 300) {
      list.insertAdjacentHTML("beforeend",
        '<div class="admin-replay-empty">' + esc(t("replayTruncated", "Showing latest 300 of ") + _filtered.length) + '</div>');
    }
  }

  async function _refire(idx, btn) {
    var rec = _filtered[idx];
    if (!rec) return;
    var speedSel = document.getElementById("replayV2Speed");
    var speed = parseFloat((speedSel && speedSel.value) || "1") || 1;
    try {
      btn.disabled = true;
      var originalText = btn.textContent;
      btn.textContent = "…";
      var res = await csrfFetch("/admin/replay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ records: [rec], speedMultiplier: Math.max(0.1, speed) }),
      });
      if (res.ok) {
        showToast(t("replayStarted", "Replay started"), true);
        btn.textContent = "✓";
        setTimeout(function () { btn.textContent = originalText; btn.disabled = false; }, 900);
      } else {
        var err = null;
        try { err = await res.json(); } catch (_e) { /* noop */ }
        showToast(t("replayError", "Replay error").replace("{error}", (err && err.error) || res.statusText), false);
        btn.textContent = originalText;
        btn.disabled = false;
      }
    } catch (_e) {
      showToast(t("replayFailed", "Replay failed"), false);
      btn.textContent = "▶";
      btn.disabled = false;
    }
  }

  // Visibility: post 2026-04-27 sidebar consolidation, replay UI is a tab
  // inside the History page. Driven by:
  //   route === "history" AND body.dataset.historyTab === "replay"
  // The tab strip (admin-history.js) toggles the body dataset.
  function _applyHashVisibility() {
    var el = document.getElementById(SECTION_ID);
    if (!el) return;
    var hash = (window.location.hash.match(/^#\/(\w[\w-]*)/) || [])[1] || "dashboard";
    var tab = (document.body && document.body.dataset && document.body.dataset.historyTab) || "export";
    el.style.display = (hash === "history" && tab === "replay") ? "" : "none";
  }

  window.addEventListener("hashchange", _applyHashVisibility);
  // History page also dispatches this when its tab strip changes.
  document.addEventListener("admin:history-tab", _applyHashVisibility);

  // Relocate replay-v2-section to sit next to sec-history once the history
  // card exists. Race-safe: if _inject injected into #settings-grid before
  // sec-history was rendered, this moves it to the right parent so the
  // history tab strip sits above both.
  function _relocate() {
    var el = document.getElementById(SECTION_ID);
    var historyCard = document.getElementById("sec-history");
    if (!el || !historyCard) return;
    var rightParent = historyCard.parentElement;
    if (!rightParent || el.parentElement === rightParent) return;
    rightParent.appendChild(el);
  }
  document.addEventListener("admin-panel-rendered", _relocate);

  document.addEventListener("DOMContentLoaded", function () {
    if (!(window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in)) return;
    // Wait for settings-grid to exist — admin.js creates it lazily.
    var tryInject = function () {
      if (document.getElementById("settings-grid") && !document.getElementById(SECTION_ID)) {
        _inject();
      }
    };
    tryInject();
    var mo = new MutationObserver(tryInject);
    mo.observe(document.getElementById("app-container") || document.body, { childList: true, subtree: true });
  });
})();
