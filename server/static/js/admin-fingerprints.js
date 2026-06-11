/**
 * Admin Fingerprint Observatory Section
 *
 * Loaded as <script defer> in admin.html.
 * Globals: csrfFetch, showToast, ServerI18n, AdminUtils, DANMU_CONFIG
 */
(function () {
  "use strict";

  var loadDetailsState = window.AdminUtils.loadDetailsState;
  var saveDetailsState = window.AdminUtils.saveDetailsState;
  var escapeHtml = window.AdminUtils.escapeHtml;

  var REFRESH_INTERVAL_MS = 10000;
  var _refreshTimer = null;

  function isOpen(id) {
    var s = loadDetailsState();
    return s[id] !== undefined ? s[id] : false;
  }

  function buildSection() {
    // v5 batch10-audience.jsx FingerprintsPage retrofit (2026-05-19).
    // Was a legacy <details> collapse card; now a full v4 page with
    // admin-ui-page-head, toolbar (count + refresh + reset), and 8-col table.
    return `
      <div id="sec-fingerprints" class="admin-fp-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">FINGERPRINTS · 觀測 · 技術檢視</div>
          <div class="admin-ui-page-title">${escapeHtml(ServerI18n.t("fingerprintsTitle"))}</div>
          <p class="admin-ui-page-note">${escapeHtml(ServerI18n.t("fingerprintsDesc"))}</p>
        </div>

        <div class="admin-fp-toolbar">
          <span id="adminFingerprintCount" class="admin-fp-count">—</span>
          <span style="flex:1"></span>
          <button id="adminFingerprintRefreshBtn" class="admin-ui-action admin-fp-toolbar-action" type="button">↻ ${escapeHtml(ServerI18n.t("refreshBtn"))}</button>
          <button id="adminFingerprintResetBtn" class="admin-ui-action is-danger admin-fp-toolbar-action" type="button">${escapeHtml(ServerI18n.t("fingerprintResetBtn"))}</button>
        </div>

        <div class="admin-fp-card" id="adminFingerprintTableWrap">
          <div class="admin-fp-loading">${escapeHtml(ServerI18n.t("loadingFingerprints"))}</div>
        </div>
      </div>
    `;
  }

  function stateBadge(state) {
    var label = ServerI18n.t("fingerprintState_" + state);
    var variant = "";
    if (state === "blocked") variant = " is-crimson";
    else if (state === "flagged") variant = " is-amber";
    else if (state === "active") variant = " is-cyan";
    else variant = " is-mute";
    return '<span class="admin-fp-state' + variant + '">' + escapeHtml(label) + "</span>";
  }

  function formatTs(sec) {
    if (!sec) return "—";
    try {
      var d = new Date(sec * 1000);
      return d.toLocaleTimeString();
    } catch (e) {
      return String(sec);
    }
  }

  function renderTable(records) {
    var wrap = document.getElementById("adminFingerprintTableWrap");
    if (!wrap) return;

    if (!records || records.length === 0) {
      wrap.innerHTML =
        '<div class="admin-fp-empty">' +
        escapeHtml(ServerI18n.t("noFingerprints")) +
        "</div>";
      return;
    }

    // v5 batch10-audience.jsx FingerprintsPage: 8-col table
    // HASH / IP / UA / MSGS / RATE / BLOCKED / STATE / LAST SEEN
    var header =
      '<div class="admin-fp-row admin-fp-row--head">' +
        '<span>' + escapeHtml(ServerI18n.t("fingerprintCol_hash")) + '</span>' +
        '<span>' + escapeHtml(ServerI18n.t("fingerprintCol_ip")) + '</span>' +
        '<span>' + escapeHtml(ServerI18n.t("fingerprintCol_ua")) + '</span>' +
        '<span class="num">' + escapeHtml(ServerI18n.t("fingerprintCol_msgs")) + '</span>' +
        '<span class="num">' + escapeHtml(ServerI18n.t("fingerprintCol_rate")) + '</span>' +
        '<span class="num">' + escapeHtml(ServerI18n.t("fingerprintCol_blocked")) + '</span>' +
        '<span>' + escapeHtml(ServerI18n.t("fingerprintCol_state")) + '</span>' +
        '<span>' + escapeHtml(ServerI18n.t("fingerprintCol_lastSeen")) + '</span>' +
      '</div>';

    var rows = records
      .map(function (r) {
        var blockedVal = r.blocked | 0;
        var hash = r.hash || "";
        // P3-1: AdminIdentity.focusFingerprint() locates rows by data-fp-hash.
        // Server sends the 12-char SHA-256 prefix; first 8 are shown as
        // `fp:xxxxxxxx` to match the AdminIdentity short-form.
        var fpShort = hash.slice(0, 8);
        return (
          '<div class="admin-fp-row admin-fp-data" data-fp-hash="' + escapeHtml(hash) + '">' +
            '<span class="admin-fp-hash admin-identity-fp" title="' + escapeHtml(hash) + '">fp:' + escapeHtml(fpShort) + '</span>' +
            '<span class="admin-fp-ip admin-identity-ip">' + escapeHtml(r.ip || "—") + '</span>' +
            '<span class="admin-fp-ua" title="' + escapeHtml(r.ua || "") + '">' + escapeHtml(r.ua || "—") + '</span>' +
            '<span class="admin-fp-num">' + (r.msgs | 0) + '</span>' +
            '<span class="admin-fp-num">' + (r.rate_per_min | 0) + '/m</span>' +
            '<span class="admin-fp-num ' + (blockedVal > 0 ? "is-crimson" : "is-mute") + '">' + blockedVal + '</span>' +
            '<span>' + stateBadge(r.state || "active") + '</span>' +
            '<span class="admin-fp-ts">' + escapeHtml(formatTs(r.last_seen)) + '</span>' +
          '</div>'
        );
      })
      .join("");

    wrap.innerHTML = header + rows;
  }

  async function fetchAndRender() {
    var countEl = document.getElementById("adminFingerprintCount");
    try {
      var resp = await fetch("/admin/fingerprints?limit=100", {
        method: "GET",
        credentials: "same-origin",
      });
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      var data = await resp.json();
      var records = data.records || [];
      renderTable(records);
      if (countEl) {
        // Prototype admin-pages.jsx:556: "247 UNIQUE · 2 FLAGGED"
        var unique = data.count || records.length;
        var flagged = data.flagged != null
          ? data.flagged
          : records.filter(function (r) { return r.state === "flagged" || r.state === "blocked"; }).length;
        countEl.textContent = unique + " UNIQUE · " + flagged + " FLAGGED";
      }
    } catch (err) {
      console.error("[admin-fingerprints] fetch failed:", err);
      var wrap = document.getElementById("adminFingerprintTableWrap");
      if (wrap) {
        wrap.innerHTML =
          '<span class="hud-pill is-danger">' +
          escapeHtml(ServerI18n.t("loadFingerprintsFailed")) +
          "</span>";
      }
    }
  }

  async function handleReset() {
    if (!confirm(ServerI18n.t("fingerprintResetConfirm"))) return;
    try {
      var resp = await window.csrfFetch("/admin/fingerprints/reset", {
        method: "POST",
      });
      if (resp.ok) {
        window.showToast(ServerI18n.t("fingerprintResetOk"));
        await fetchAndRender();
      } else {
        var data = await resp.json().catch(function () {
          return {};
        });
        window.showToast(data.error || ServerI18n.t("fingerprintResetFailed"), false);
      }
    } catch (err) {
      console.error("[admin-fingerprints] reset error:", err);
      window.showToast(ServerI18n.t("fingerprintResetFailed"), false);
    }
  }

  function startAutoRefresh() {
    stopAutoRefresh();
    _refreshTimer = setInterval(function () {
      var sec = document.getElementById("sec-fingerprints");
      // 2026-05-19: section is now a full v4 page (not <details>), so
      // refresh whenever the page is visible (display ≠ none).
      if (sec && sec.offsetParent !== null) {
        fetchAndRender();
      }
    }, REFRESH_INTERVAL_MS);
  }

  function stopAutoRefresh() {
    if (_refreshTimer) {
      clearInterval(_refreshTimer);
      _refreshTimer = null;
    }
  }

  function init() {
    // 2026-05-19: prefer moderation-grid (sec-fingerprints is the
    // moderation/fingerprints tab leaf) — falls back to settings-grid
    // during bootstrap before moderation-grid is mounted.
    var grid = document.getElementById("moderation-grid")
      || document.getElementById("settings-grid");
    if (!grid) return;

    grid.insertAdjacentHTML("beforeend", buildSection());

    var refreshBtn = document.getElementById("adminFingerprintRefreshBtn");
    if (refreshBtn) refreshBtn.addEventListener("click", fetchAndRender);

    var resetBtn = document.getElementById("adminFingerprintResetBtn");
    if (resetBtn) resetBtn.addEventListener("click", handleReset);

    fetchAndRender();
    startAutoRefresh();
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.DANMU_CONFIG || !window.DANMU_CONFIG.session || !window.DANMU_CONFIG.session.logged_in) return;
    var observer = new MutationObserver(function () {
      var grid = document.getElementById("moderation-grid")
        || document.getElementById("settings-grid");
      if (grid && !document.getElementById("sec-fingerprints")) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true,
      subtree: true,
    });

    var grid0 = document.getElementById("moderation-grid")
      || document.getElementById("settings-grid");
    if (grid0 && !document.getElementById("sec-fingerprints")) {
      init();
    }
  });
})();
