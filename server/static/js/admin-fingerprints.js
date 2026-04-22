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
    return `
      <details id="sec-fingerprints" class="group admin-v3-card lg:col-span-2" ${isOpen("sec-fingerprints") ? "open" : ""}>
        <summary class="flex items-center justify-between">
          <div>
            <span class="admin-v3-card-kicker is-accent">FINGERPRINTS &middot; 觀測</span>
            <h3 style="font-size:18px;font-weight:600;color:var(--color-text-strong);margin:0">${escapeHtml(ServerI18n.t("fingerprintsTitle"))}</h3>
            <p style="font-size:13px;color:var(--color-text-muted);margin:4px 0 0">${escapeHtml(ServerI18n.t("fingerprintsDesc"))}</p>
          </div>
          <span style="color:var(--color-text-muted);transition:transform 180ms ease" class="group-open:rotate-180">⌄</span>
        </summary>
        <div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--admin-line);display:flex;flex-direction:column;gap:14px">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
            <span id="adminFingerprintCount" style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.12em;color:var(--color-text-muted);text-transform:uppercase">—</span>
            <div style="display:flex;align-items:center;gap:8px">
              <button id="adminFingerprintRefreshBtn" class="hud-toolbar-action" type="button">${escapeHtml(ServerI18n.t("refreshBtn"))}</button>
              <button id="adminFingerprintResetBtn" class="hud-toolbar-action" type="button" style="color:#f87171">${escapeHtml(ServerI18n.t("fingerprintResetBtn"))}</button>
            </div>
          </div>
          <div id="adminFingerprintTableWrap">
            <span style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.12em;color:var(--color-text-muted);text-transform:uppercase">${escapeHtml(ServerI18n.t("loadingFingerprints"))}</span>
          </div>
        </div>
      </details>
    `;
  }

  function stateBadge(state) {
    var label = ServerI18n.t("fingerprintState_" + state);
    var variant = "";
    if (state === "blocked") variant = " is-danger";
    else if (state === "flagged") variant = " is-amber";
    else if (state === "active") variant = " is-cyan";
    return '<span class="hud-pill' + variant + '">' + escapeHtml(label) + "</span>";
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
        '<div class="hud-table"><div class="hud-table-row" style="grid-template-columns:1fr">' +
        '<span style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.12em;color:var(--color-text-muted);text-transform:uppercase">' +
        escapeHtml(ServerI18n.t("noFingerprints")) +
        "</span></div></div>";
      return;
    }

    var cols = "minmax(110px, 1.1fr) minmax(110px, 1fr) minmax(0, 1.6fr) 70px 70px 70px 90px 90px";

    var header =
      '<div class="hud-table-head" style="grid-template-columns:' + cols + '">' +
        "<span>" + escapeHtml(ServerI18n.t("fingerprintCol_hash")) + "</span>" +
        "<span>" + escapeHtml(ServerI18n.t("fingerprintCol_ip")) + "</span>" +
        "<span>" + escapeHtml(ServerI18n.t("fingerprintCol_ua")) + "</span>" +
        '<span style="text-align:right">' + escapeHtml(ServerI18n.t("fingerprintCol_msgs")) + "</span>" +
        '<span style="text-align:right">' + escapeHtml(ServerI18n.t("fingerprintCol_rate")) + "</span>" +
        '<span style="text-align:right">' + escapeHtml(ServerI18n.t("fingerprintCol_blocked")) + "</span>" +
        "<span>" + escapeHtml(ServerI18n.t("fingerprintCol_state")) + "</span>" +
        "<span>" + escapeHtml(ServerI18n.t("fingerprintCol_lastSeen")) + "</span>" +
      "</div>";

    var rows = records
      .map(function (r) {
        var blockedVal = r.blocked | 0;
        var blockedColor = blockedVal > 0 ? "#f87171" : "var(--color-text-muted)";
        return (
          '<div class="hud-table-row" style="grid-template-columns:' + cols + '">' +
            '<span style="font-family:var(--font-mono);font-size:12px;color:var(--color-text-strong);overflow:hidden;text-overflow:ellipsis">' + escapeHtml(r.hash || "") + "</span>" +
            '<span style="font-family:var(--font-mono);font-size:12px;color:var(--color-text-strong)">' + escapeHtml(r.ip || "—") + "</span>" +
            '<span style="font-size:12px;color:var(--color-text-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="' + escapeHtml(r.ua || "") + '">' + escapeHtml(r.ua || "—") + "</span>" +
            '<span style="text-align:right;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong)">' + (r.msgs | 0) + "</span>" +
            '<span style="text-align:right;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong)">' + (r.rate_per_min | 0) + "</span>" +
            '<span style="text-align:right;font-family:var(--font-mono);font-size:13px;color:' + blockedColor + '">' + blockedVal + "</span>" +
            "<span>" + stateBadge(r.state || "active") + "</span>" +
            '<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">' + escapeHtml(formatTs(r.last_seen)) + "</span>" +
          "</div>"
        );
      })
      .join("");

    wrap.innerHTML = '<div class="hud-table">' + header + rows + "</div>";
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
        countEl.textContent = ServerI18n.t("fingerprintCountLabel").replace(
          "{count}",
          String(data.count || records.length)
        );
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
      var detailsEl = document.getElementById("sec-fingerprints");
      if (detailsEl && detailsEl.open) {
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
    var settingsGrid = document.getElementById("settings-grid");
    if (!settingsGrid) return;

    settingsGrid.insertAdjacentHTML("beforeend", buildSection());

    var detailsEl = document.getElementById("sec-fingerprints");
    if (detailsEl) {
      detailsEl.addEventListener("toggle", function () {
        var current = loadDetailsState();
        current["sec-fingerprints"] = detailsEl.open;
        saveDetailsState(current);
        if (detailsEl.open) fetchAndRender();
      });
    }

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
      if (
        document.getElementById("settings-grid") &&
        !document.getElementById("sec-fingerprints")
      ) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true,
      subtree: true,
    });

    if (
      document.getElementById("settings-grid") &&
      !document.getElementById("sec-fingerprints")
    ) {
      init();
    }
  });
})();
