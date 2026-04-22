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
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <div>
            <h3 class="text-lg font-bold text-white">${ServerI18n.t("fingerprintsTitle")}</h3>
            <p class="text-sm text-slate-300">${ServerI18n.t("fingerprintsDesc")}</p>
          </div>
          <span class="text-slate-400 transition-transform group-open:rotate-180">⌄</span>
        </summary>
        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-4">
          <div class="flex items-center justify-between gap-3">
            <span id="adminFingerprintCount" class="text-xs text-slate-400 font-mono">—</span>
            <div class="flex items-center gap-2">
              <button
                id="adminFingerprintRefreshBtn"
                class="text-xs px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >${ServerI18n.t("refreshBtn")}</button>
              <button
                id="adminFingerprintResetBtn"
                class="text-xs px-3 py-1.5 rounded-lg bg-red-900/60 hover:bg-red-700 text-red-200 border border-red-800 transition-colors"
              >${ServerI18n.t("fingerprintResetBtn")}</button>
            </div>
          </div>
          <div id="adminFingerprintTableWrap" class="overflow-x-auto">
            <span class="text-xs text-slate-400">${ServerI18n.t("loadingFingerprints")}</span>
          </div>
        </div>
      </details>
    `;
  }

  function stateBadge(state) {
    var label = ServerI18n.t("fingerprintState_" + state);
    var cls = "bg-slate-700/60 text-slate-300 border-slate-600";
    if (state === "blocked") cls = "bg-red-900/60 text-red-200 border-red-700";
    else if (state === "flagged") cls = "bg-amber-900/60 text-amber-200 border-amber-700";
    else if (state === "active") cls = "bg-sky-900/40 text-sky-200 border-sky-800";
    return (
      '<span class="inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ' +
      cls +
      '">' +
      escapeHtml(label) +
      "</span>"
    );
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
        '<span class="text-xs text-slate-400">' +
        escapeHtml(ServerI18n.t("noFingerprints")) +
        "</span>";
      return;
    }

    var header =
      '<thead class="text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-700/50">' +
        "<tr>" +
          '<th class="text-left py-2 pr-3">' + escapeHtml(ServerI18n.t("fingerprintCol_hash")) + "</th>" +
          '<th class="text-left py-2 pr-3">' + escapeHtml(ServerI18n.t("fingerprintCol_ip")) + "</th>" +
          '<th class="text-left py-2 pr-3 hidden md:table-cell">' + escapeHtml(ServerI18n.t("fingerprintCol_ua")) + "</th>" +
          '<th class="text-right py-2 pr-3">' + escapeHtml(ServerI18n.t("fingerprintCol_msgs")) + "</th>" +
          '<th class="text-right py-2 pr-3">' + escapeHtml(ServerI18n.t("fingerprintCol_rate")) + "</th>" +
          '<th class="text-right py-2 pr-3">' + escapeHtml(ServerI18n.t("fingerprintCol_blocked")) + "</th>" +
          '<th class="text-left py-2 pr-3">' + escapeHtml(ServerI18n.t("fingerprintCol_state")) + "</th>" +
          '<th class="text-left py-2">' + escapeHtml(ServerI18n.t("fingerprintCol_lastSeen")) + "</th>" +
        "</tr>" +
      "</thead>";

    var rows = records
      .map(function (r) {
        return (
          '<tr class="border-b border-slate-800/60 text-sm text-slate-200 hover:bg-slate-800/30">' +
            '<td class="py-2 pr-3 font-mono text-xs text-slate-300">' + escapeHtml(r.hash || "") + "</td>" +
            '<td class="py-2 pr-3 font-mono text-xs">' + escapeHtml(r.ip || "—") + "</td>" +
            '<td class="py-2 pr-3 text-xs text-slate-400 hidden md:table-cell max-w-xs truncate" title="' + escapeHtml(r.ua || "") + '">' + escapeHtml(r.ua || "—") + "</td>" +
            '<td class="py-2 pr-3 text-right font-mono">' + (r.msgs | 0) + "</td>" +
            '<td class="py-2 pr-3 text-right font-mono">' + (r.rate_per_min | 0) + "</td>" +
            '<td class="py-2 pr-3 text-right font-mono ' + ((r.blocked | 0) > 0 ? "text-red-300" : "text-slate-400") + '">' + (r.blocked | 0) + "</td>" +
            '<td class="py-2 pr-3">' + stateBadge(r.state || "active") + "</td>" +
            '<td class="py-2 text-xs text-slate-400 font-mono">' + escapeHtml(formatTs(r.last_seen)) + "</td>" +
          "</tr>"
        );
      })
      .join("");

    wrap.innerHTML =
      '<table class="min-w-full text-sm">' + header + "<tbody>" + rows + "</tbody></table>";
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
          '<span class="text-xs text-red-400">' +
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
