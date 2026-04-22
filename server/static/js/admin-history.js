// admin-history.js — Danmu history and blacklist management
// Depends on: window.csrfFetch (set by admin.js), window.showToast (toast.js), window.ServerI18n
(function () {
  "use strict";

  var _allHistoryRecords = [];
  var _autoRefreshTimer = null;

  async function fetchBlacklist() {
    try {
      const response = await fetch("/admin/blacklist/get", {
        method: "GET",
        credentials: "same-origin",
      });
      if (!response.ok) {
        const errorData = await response.json();
        showToast(
          ServerI18n.t("errorFetchingBlacklist").replace("{error}", errorData.error || response.statusText),
          false
        );
        return;
      }
      const blacklist = await response.json();
      const blacklistKeywordsDiv = document.getElementById("blacklistKeywords");
      blacklistKeywordsDiv.innerHTML = ""; // Clear current list

      const countEl = document.getElementById("modBlacklistCount");
      if (countEl) countEl.textContent = `${blacklist.length} words`;
      const bannedStatEl = document.querySelector('[data-mod-stat="banned"]');
      if (bannedStatEl) bannedStatEl.textContent = blacklist.length;

      if (blacklist.length === 0) {
        blacklistKeywordsDiv.innerHTML =
          `<div style="padding:12px 0;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${ServerI18n.t("noKeywordsYet")}</div>`;
      } else {
        blacklist.forEach((keyword) => {
          const keywordEl = document.createElement("div");
          keywordEl.className = "hud-banned-row";

          const iconSpan = document.createElement("span");
          iconSpan.style.cssText = "color:#f87171;font-family:var(--font-mono);font-size:13px";
          iconSpan.textContent = "\u2298";

          const keywordSpan = document.createElement("span");
          keywordSpan.style.cssText = "flex:1;min-width:0;font-family:var(--font-mono);font-size:12px;color:var(--color-text-strong);word-break:break-all";
          keywordSpan.textContent = keyword;

          const removeButton = document.createElement("button");
          removeButton.className = "removeKeywordBtn";
          removeButton.type = "button";
          removeButton.style.cssText = "background:transparent;border:none;color:var(--color-primary);font-family:var(--font-mono);font-size:10px;letter-spacing:0.1em;cursor:pointer;padding:2px 4px";
          removeButton.textContent = "UNBAN";
          removeButton.setAttribute("data-keyword", keyword);

          keywordEl.appendChild(iconSpan);
          keywordEl.appendChild(keywordSpan);
          keywordEl.appendChild(removeButton);
          blacklistKeywordsDiv.appendChild(keywordEl);
        });
      }
      // Event listeners for remove buttons are now handled by delegation in _initHistoryEventListeners
    } catch (error) {
      console.error("Fetch blacklist error:", error);
      showToast(ServerI18n.t("fetchBlacklistError"), false);
    }
  }

  async function addKeyword() {
    const keywordInput = document.getElementById("newKeywordInput");
    const keyword = keywordInput.value.trim();
    if (!keyword) {
      showToast(ServerI18n.t("keywordEmpty"), false);
      return;
    }
    try {
      const response = await window.csrfFetch("/admin/blacklist/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword: keyword }),
      });
      const data = await response.json();
      if (response.ok) {
        showToast(data.message || "Keyword added.", true);
        keywordInput.value = ""; // Clear input
        fetchBlacklist(); // Refresh list
      } else {
        showToast(data.error || "Failed to add keyword.", false);
      }
    } catch (error) {
      console.error("Add keyword error:", error);
      showToast(ServerI18n.t("addKeywordError"), false);
    }
  }

  async function removeKeyword(keyword) {
    if (!confirm(ServerI18n.t("confirmRemoveKeyword").replace("{keyword}", keyword))) return;
    try {
      const response = await window.csrfFetch("/admin/blacklist/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword: keyword }),
      });
      const data = await response.json();
      if (response.ok) {
        showToast(data.message || "Keyword removed.", true);
        fetchBlacklist(); // Refresh list
      } else {
        showToast(data.error || "Failed to remove keyword.", false);
      }
    } catch (error) {
      console.error("Remove keyword error:", error);
      showToast(ServerI18n.t("removeKeywordError"), false);
    }
  }

  function formatTimestamp(timestamp) {
    try {
      const date = new Date(timestamp);
      const now = new Date();
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);

      if (diffMins < 1) return ServerI18n.t("justNow");
      if (diffMins < 60) return `${diffMins}m ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      if (diffDays < 7) return `${diffDays}d ago`;

      return date.toLocaleString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (e) {
      return timestamp;
    }
  }

  function renderHistoryRecords(records) {
    const historyListDiv = document.getElementById("danmuHistoryList");
    if (!historyListDiv) return;

    historyListDiv.innerHTML = "";
    if (records.length === 0) {
      historyListDiv.innerHTML =
        `<p class="text-slate-400 text-sm text-center py-4">${ServerI18n.t("noDanmuFound")}</p>`;
      return;
    }

    records.forEach((record, idx) => {
      const recordEl = document.createElement("div");
      recordEl.className = "bg-slate-700/50 p-3 rounded-lg space-y-1 flex gap-2 items-start";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "accent-sky-500 mt-1 shrink-0 replay-record-cb";
      checkbox.dataset.recordIndex = idx;
      recordEl.appendChild(checkbox);

      const contentWrap = document.createElement("div");
      contentWrap.className = "flex-1 space-y-1";

      const headerEl = document.createElement("div");
      headerEl.className = "flex items-start justify-between gap-2";

      const timeEl = document.createElement("div");
      timeEl.className = "text-xs text-slate-400 shrink-0";
      timeEl.textContent = formatTimestamp(record.timestamp);

      // "Block" quick-action button (text only, non-image danmu)
      if (record.text && !record.isImage) {
        const blockBtn = document.createElement("button");
        blockBtn.className =
          "text-xs px-2 py-0.5 rounded bg-red-700/60 hover:bg-red-700 text-slate-200 transition-colors shrink-0";
        blockBtn.textContent = ServerI18n.t("block");
        blockBtn.title = ServerI18n.t("blockTitle");
        blockBtn.addEventListener("click", async () => {
          try {
            await window.csrfFetch("/admin/blacklist/add", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ keyword: record.text }),
            });
            showToast(`"${record.text.slice(0, 30)}" ${ServerI18n.t("addedToBlacklist")}`, true);
            fetchBlacklist();
          } catch (e) {
            showToast(ServerI18n.t("failedToAddBlacklist"), false);
          }
        });
        headerEl.appendChild(blockBtn);
      }

      headerEl.prepend(timeEl);

      const textEl = document.createElement("div");
      textEl.className = "text-white text-sm break-words";
      textEl.textContent = record.text || "(empty)";

      const metaEl = document.createElement("div");
      metaEl.className = "text-xs text-slate-400 flex flex-wrap gap-x-3 gap-y-1";
      const metaParts = [];
      if (record.color) metaParts.push(`Color: #${record.color}`);
      if (record.size) metaParts.push(`Size: ${record.size}`);
      if (record.speed) metaParts.push(`Speed: ${record.speed}`);
      if (record.opacity) metaParts.push(`Opacity: ${record.opacity}`);
      if (record.isImage) metaParts.push("Type: Image");
      if (record.fontInfo?.name) metaParts.push(`Font: ${record.fontInfo.name}`);
      if (record.clientIp) metaParts.push(`IP: ${record.clientIp}`);
      if (record.fingerprint) metaParts.push(`FP: ${record.fingerprint.slice(0, 8)}…`);
      metaEl.textContent = metaParts.join(" • ") || ServerI18n.t("noMetadata");

      contentWrap.appendChild(headerEl);
      contentWrap.appendChild(textEl);
      contentWrap.appendChild(metaEl);
      recordEl.appendChild(contentWrap);
      historyListDiv.appendChild(recordEl);
    });

    // 同步 Select All checkbox 狀態
    const selectAllCb = document.getElementById("historySelectAll");
    if (selectAllCb) selectAllCb.checked = false;
  }

  async function fetchDanmuHistory() {
    try {
      const hours = parseInt(document.getElementById("historyHours")?.value || "24");
      const response = await fetch(`/admin/history?hours=${hours}&limit=1000`, {
        method: "GET",
        credentials: "same-origin",
      });
      if (!response.ok) {
        const errorData = await response.json();
        showToast(ServerI18n.t("errorFetchingHistory").replace("{error}", errorData.error || response.statusText), false);
        return;
      }
      const data = await response.json();
      const { records, stats } = data;
      _allHistoryRecords = records;

      const statsDiv = document.getElementById("historyStats");
      if (statsDiv) {
        statsDiv.innerHTML = `
          <div class="flex gap-4 text-xs">
            <span>${ServerI18n.t("total")} <span class="text-white font-semibold">${stats.total}</span></span>
            <span>${ServerI18n.t("last24h")} <span class="text-white font-semibold">${stats.last_24h}</span></span>
            <span>${ServerI18n.t("showing")} <span class="text-white font-semibold">${records.length}</span></span>
          </div>`;
      }

      // Apply current search filter
      const searchTerm = document.getElementById("historySearch")?.value?.toLowerCase() || "";
      const filtered = searchTerm
        ? records.filter((r) => (r.text || "").toLowerCase().includes(searchTerm))
        : records;

      renderHistoryRecords(filtered);

      // Also refresh stats dashboard
      if (typeof window._loadStats === "function") {
        window._loadStats();
      }
    } catch (error) {
      console.error("Fetch danmu history error:", error);
      showToast(ServerI18n.t("fetchHistoryError"), false);
    }
  }

  async function clearDanmuHistory() {
    if (
      !confirm(ServerI18n.t("confirmClearHistory"))
    ) {
      return;
    }

    try {
      const response = await window.csrfFetch("/admin/history/clear", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        showToast(ServerI18n.t("historyClearedSuccess"), true);
        fetchDanmuHistory();
      } else {
        const errorData = await response.json();
        showToast(
          ServerI18n.t("errorClearingHistory").replace("{error}", errorData.error || response.statusText),
          false
        );
      }
    } catch (error) {
      console.error("Clear history error:", error);
      showToast(ServerI18n.t("clearHistoryError"), false);
    }
  }

  function _initHistoryEventListeners() {
    // Add Keyword button event listener
    const addKeywordBtn = document.getElementById("addKeywordBtn");
    if (addKeywordBtn) {
      addKeywordBtn.addEventListener("click", addKeyword);
    }

    const newKeywordInput = document.getElementById("newKeywordInput");
    if (newKeywordInput) {
      newKeywordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter" || event.keyCode === 13) {
          event.preventDefault();
          addKeyword();
        }
      });
    }

    // Event delegation for remove keyword buttons
    const blacklistKeywordsDiv = document.getElementById("blacklistKeywords");
    if (blacklistKeywordsDiv) {
      blacklistKeywordsDiv.addEventListener("click", function (event) {
        const removeButton = event.target.closest(".removeKeywordBtn");
        if (removeButton) {
          const keyword = removeButton.dataset.keyword;
          if (keyword) {
            removeKeyword(keyword);
          }
        }
      });
    }

    // Danmu history event listeners
    const refreshHistoryBtn = document.getElementById("refreshHistoryBtn");
    if (refreshHistoryBtn) {
      refreshHistoryBtn.addEventListener("click", fetchDanmuHistory);
    }

    const exportHistoryBtn = document.getElementById("exportHistoryBtn");
    if (exportHistoryBtn) {
      exportHistoryBtn.addEventListener("click", () => {
        if (_allHistoryRecords.length === 0) {
          showToast(ServerI18n.t("noRecordsToExport"), false);
          return;
        }

        const headers = ["timestamp", "text", "color", "size", "speed", "opacity", "isImage", "fontName", "clientIp", "fingerprint"];
        const escape = (v) => {
          const s = v == null ? "" : String(v);
          return s.includes(",") || s.includes('"') || s.includes("\n")
            ? `"${s.replace(/"/g, '""')}"`
            : s;
        };

        const rows = _allHistoryRecords.map((r) => [
          escape(r.timestamp || ""),
          escape(r.text || ""),
          escape(r.color ? `#${r.color}` : ""),
          escape(r.size ?? ""),
          escape(r.speed ?? ""),
          escape(r.opacity ?? ""),
          escape(r.isImage ? "true" : "false"),
          escape(r.fontInfo?.name || ""),
          escape(r.clientIp || ""),
          escape(r.fingerprint || ""),
        ].join(","));

        const csv = [headers.join(","), ...rows].join("\r\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        const ts = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
        a.href = url;
        a.download = `danmu-history-${ts}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        showToast(`Exported ${_allHistoryRecords.length} records.`, true);
      });
    }

    const clearHistoryBtn = document.getElementById("clearHistoryBtn");
    if (clearHistoryBtn) {
      clearHistoryBtn.addEventListener("click", clearDanmuHistory);
    }

    const historyHoursSelect = document.getElementById("historyHours");
    if (historyHoursSelect) {
      historyHoursSelect.addEventListener("change", fetchDanmuHistory);
    }

    // Client-side history search
    const historySearch = document.getElementById("historySearch");
    if (historySearch) {
      historySearch.addEventListener("input", () => {
        const term = historySearch.value.toLowerCase();
        const filtered = term
          ? _allHistoryRecords.filter((r) => (r.text || "").toLowerCase().includes(term))
          : _allHistoryRecords;
        renderHistoryRecords(filtered);
      });
    }

    // Auto-refresh toggle — timer stored at module scope for beforeunload cleanup
    const autoRefreshCheckbox = document.getElementById("historyAutoRefresh");
    if (autoRefreshCheckbox) {
      autoRefreshCheckbox.addEventListener("change", () => {
        if (_autoRefreshTimer) {
          clearInterval(_autoRefreshTimer);
          _autoRefreshTimer = null;
        }
        if (autoRefreshCheckbox.checked) {
          _autoRefreshTimer = setInterval(fetchDanmuHistory, 30000);
        }
      });
    }

    const historySelectAll = document.getElementById("historySelectAll");
    if (historySelectAll) {
      historySelectAll.addEventListener("change", () => {
        document.querySelectorAll(".replay-record-cb").forEach((cb) => {
          cb.checked = historySelectAll.checked;
        });
      });
    }

    window.addEventListener("beforeunload", function () {
      if (_autoRefreshTimer) { clearInterval(_autoRefreshTimer); _autoRefreshTimer = null; }
    });
  }

  // admin.js renders the control panel HTML asynchronously (after an HTTP fetch),
  // so DOMContentLoaded fires before #addKeywordBtn and friends exist.
  // admin.js dispatches "admin-panel-rendered" once the DOM is ready.
  document.addEventListener("admin-panel-rendered", function () {
    fetchBlacklist();
    fetchDanmuHistory();
    _initHistoryEventListeners();
  });

  // Expose for use by admin.js WebSocket handler (blacklist_update event)
  // and replay functions that need _allHistoryRecords
  window.AdminHistory = {
    fetchDanmuHistory: fetchDanmuHistory,
    fetchBlacklist: fetchBlacklist,
    get allHistoryRecords() { return _allHistoryRecords; },
  };
})();
