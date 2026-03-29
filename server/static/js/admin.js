document.addEventListener("DOMContentLoaded", () => {
  const csrfToken =
    document.querySelector('meta[name="csrf-token"]').content || "";

  // --- VANTA.js Background Initialization ---
  try {
    VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x7c3aed, // Violet-600 (matches UI accent)
      backgroundColor: 0x000000, // Black background
      points: 12.0,
      maxDistance: 25.0,
      spacing: 18.0,
    });
  } catch (e) {
    console.warn("Vanta.js failed to initialize", e);
  }

  // Access configuration injected from HTML
  const config = window.DANMU_CONFIG || {};
  let session = config.session || { logged_in: false };
  const settingRanges = config.settingRanges || {};

  function csrfFetch(url, options = {}) {
    const opts = { credentials: "same-origin", ...options };
    const headers = new Headers(options.headers || {});
    headers.set("X-CSRF-Token", csrfToken);
    opts.headers = headers;
    return fetch(url, opts);
  }
  window.csrfFetch = csrfFetch;

  const FONT_REFRESH_BUFFER_SECONDS = 60;
  let adminFontRefreshTimer = null;
  let adminFontCache = [];
  let currentSettings = {};

  // Module-level handles for beforeunload cleanup
  let _autoRefreshTimer = null;
  let _adminWs = null;
  let _adminWsReconnectTimer = null;
  // _effectModalRestoreFocusEl moved to admin-effects-mgmt.js
  var loadDetailsState = window.AdminUtils.loadDetailsState;
  var saveDetailsState = window.AdminUtils.saveDetailsState;
  var escapeHtml = window.AdminUtils.escapeHtml;


  function scheduleAdminFontRefresh(ttlSeconds) {
    if (adminFontRefreshTimer) {
      clearTimeout(adminFontRefreshTimer);
    }
    if (!ttlSeconds || Number.isNaN(ttlSeconds)) {
      return;
    }
    const delay = Math.max(
      (ttlSeconds - FONT_REFRESH_BUFFER_SECONDS) * 1000,
      60 * 1000
    );
    adminFontRefreshTimer = setTimeout(() => {
      populateFontFamilyDropdowns();
    }, delay);
  }

  // Get latest settings from backend
  async function fetchLatestSettings() {
    try {
      const response = await fetch("/get_settings", {
        method: "GET",
        credentials: "same-origin",
      });
      const data = await response.json();
      // Update current settings
      currentSettings = data;
      // Re-render control panel
      renderControlPanel();
    } catch (error) {
      console.error("Get settings failed:", error);
      showToast(ServerI18n.t("getSettingsFailed"), false);
    }
  }

  // Validate color value format
  function isValidColor(color) {
    return /^#[0-9A-Fa-f]{6}$/.test(color);
  }

  // Format color value
  function formatColor(color) {
    // If already correct format, return directly
    if (isValidColor(color)) {
      return color;
    }

    // If 6-digit hex without #
    if (/^[0-9A-Fa-f]{6}$/.test(color)) {
      return "#" + color;
    }

    // If no #, add it
    if (!color.startsWith("#")) {
      color = "#" + color;
    }

    // If length incorrect, return default color
    if (!isValidColor(color)) {
      return "#8b5cf6"; // Default purple
    }

    return color;
  }

  // Validate number range
  function validateNumberRange(key, value) {
    if (settingRanges[key]) {
      const numValue = parseInt(value);
      if (
        isNaN(numValue) ||
        numValue < settingRanges[key].min ||
        numValue > settingRanges[key].max
      ) {
        showToast(
          `${key} must be between ${settingRanges[key].min} and ${settingRanges[key].max}`,
          false
        );
        return false;
      }
    }
    return true;
  }

  function restoreSettingInputValue(key, index, inputEl) {
    if (!inputEl || !Array.isArray(currentSettings[key])) return;
    let restoreVal = currentSettings[key][index];
    if (key === "Color" && typeof restoreVal === "string") {
      restoreVal = formatColor(`#${restoreVal}`);
    }
    if (restoreVal !== undefined && restoreVal !== null) {
      inputEl.value = String(restoreVal);
    }
  }

  // Update setting to backend
  async function updateSetting(key, value, index, sourceEl = null) {
    try {
      // If it's a color value, validate and format
      if (key === "Color") {
        if (!isValidColor(value)) {
          showToast(ServerI18n.t("colorFormatError"), false);
          restoreSettingInputValue(key, index, sourceEl);
          return;
        }
        // Remove # before sending to server
        value = value.replace("#", "");
      } else if (key === "Speed" || key === "Opacity" || key === "FontSize") {
        // Validate number range
        if (!validateNumberRange(key, value)) {
          restoreSettingInputValue(key, index, sourceEl);
          return;
        }
      }

      // Build data object
      const dataToSend = {
        type: key,
        value: value,
        index: index,
      };

      // Send to backend
      const response = await csrfFetch("/admin/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        // Update local settings
        if (!Array.isArray(currentSettings[key])) {
          currentSettings[key] = [false, "", "", ""];
        }
        currentSettings[key][index] = value;

        showToast(`${key} ${ServerI18n.t("settingsUpdated")}`, true);
      } else {
        showToast(ServerI18n.t("updateFailed"), false);
        // If update failed, re-fetch settings
        await fetchLatestSettings();
      }
    } catch (error) {
      console.error("Error:", error);
      showToast(`Update Error: ${error.message}`, false);
      // Re-fetch settings on error
      await fetchLatestSettings();
    }
  }

  // Toggle setting switch
  async function toggleSetting(key, isChecked) {
    try {
      const response = await csrfFetch("/admin/Set", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key, enabled: isChecked }),
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        if (!Array.isArray(currentSettings[key])) {
          currentSettings[key] = [false, "", "", ""];
        }
        currentSettings[key][0] = isChecked;
        showToast(`${key} ${ServerI18n.t("settingsUpdated")}`);
        renderControlPanel();
      } else {
        const toggleElement = document.getElementById(`toggle-${key}`);
        if (toggleElement) {
          toggleElement.checked = !isChecked;
        }
        showToast(result.error || "Update Failed", false);
      }
    } catch (error) {
      console.error("Error:", error);
      const toggleElement = document.getElementById(`toggle-${key}`);
      if (toggleElement) {
        toggleElement.checked = !isChecked;
      }
      showToast(`Update Error: ${error.message}`, false);
    }
  }

  // --- Element Selectors ---
  const appContainer = document.getElementById("app-container");
  const toastContainer = document.getElementById("toast-container");
  const scheduleIdleTask = (cb, timeout = 500) => {
    if ("requestIdleCallback" in window) {
      return window.requestIdleCallback(cb, { timeout });
    }
    return setTimeout(cb, timeout);
  };

  // --- Functions ---

  async function fetchBlacklist() {
    try {
      const response = await fetch("/admin/blacklist/get", {
        method: "GET",
        credentials: "same-origin",
      });
      if (!response.ok) {
        const errorData = await response.json();
        showToast(
          `Error fetching blacklist: ${errorData.error || response.statusText}`,
          false
        );
        return;
      }
      const blacklist = await response.json();
      const blacklistKeywordsDiv = document.getElementById("blacklistKeywords");
      blacklistKeywordsDiv.innerHTML = ""; // Clear current list
      if (blacklist.length === 0) {
        blacklistKeywordsDiv.innerHTML =
          `<p class="text-slate-400 text-sm">${ServerI18n.t("noKeywordsYet")}</p>`;
      } else {
        blacklist.forEach((keyword) => {
          const keywordEl = document.createElement("div");
          keywordEl.className =
            "flex items-center justify-between bg-slate-700/50 p-2 rounded-lg";

          // Create a span for the keyword text
          const keywordSpan = document.createElement("span");
          keywordSpan.className = "text-slate-200";
          keywordSpan.textContent = keyword; // Use textContent to sanitize

          // Create the remove button
          const removeButton = document.createElement("button");
          removeButton.className =
            "removeKeywordBtn text-red-400 hover:text-red-600 font-semibold";
          removeButton.textContent = ServerI18n.t("remove"); // Set button text
          // Set data-keyword attribute safely
          removeButton.setAttribute("data-keyword", keyword); // Add this line

          keywordEl.appendChild(keywordSpan);
          keywordEl.appendChild(removeButton);
          blacklistKeywordsDiv.appendChild(keywordEl);
        });
      }
      // Event listeners for remove buttons are now handled by delegation in addEventListeners
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
      const response = await csrfFetch("/admin/blacklist/add", {
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
      const response = await csrfFetch("/admin/blacklist/remove", {
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

  // Cache all fetched records for client-side search
  let _allHistoryRecords = [];

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
      checkbox.className = "accent-purple-500 mt-1 shrink-0 replay-record-cb";
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
            await csrfFetch("/admin/blacklist/add", {
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

  async function _loadStats() {
    const hours = parseInt(document.getElementById("historyHours")?.value || "24");
    try {
      const [hourlyRes, topTextRes] = await Promise.all([
        fetch(`/admin/stats/hourly?hours=${hours}`, { credentials: "same-origin" }),
        fetch(`/admin/stats/top-text?hours=${hours}&limit=10`, { credentials: "same-origin" }),
      ]);
      if (!hourlyRes.ok || !topTextRes.ok) return;
      const hourlyData = await hourlyRes.json();
      const topTextData = await topTextRes.json();

      const dashDiv = document.getElementById("statsDashboard");
      if (!dashDiv) return;

      const dist = hourlyData.distribution || [];
      const topTexts = topTextData.topTexts || [];
      const maxCount = Math.max(1, ...dist.map((d) => d.count));

      let chartBars = dist.map((d) => {
        const pct = Math.round((d.count / maxCount) * 100);
        return `<div class="chart-bar" style="height: ${pct}%" title="${escapeHtml(d.hour)}: ${d.count}"><span class="chart-label">${escapeHtml(d.hour.slice(-5, -3))}</span></div>`;
      }).join("");

      let topTextRows = topTexts.map((t, i) =>
        `<tr class="border-t border-slate-700/50"><td class="py-1 pr-3 text-slate-400">${i + 1}</td><td class="py-1 pr-3 text-white text-sm">${escapeHtml(t.text)}</td><td class="py-1 text-sky-400 font-mono text-sm">${t.count}</td></tr>`
      ).join("");

      dashDiv.innerHTML = `
        <div class="grid gap-4 md:grid-cols-2 mb-4">
          <div class="bg-slate-800/60 rounded-lg p-3">
            <h4 class="text-xs font-semibold text-slate-300 mb-2">${ServerI18n.t("hourlyDistribution")}</h4>
            <div class="stats-chart">${chartBars || '<span class="text-xs text-slate-500">No data</span>'}</div>
          </div>
          <div class="bg-slate-800/60 rounded-lg p-3">
            <h4 class="text-xs font-semibold text-slate-300 mb-2">${ServerI18n.t("topTexts")}</h4>
            ${topTexts.length ? `<table class="w-full text-xs"><tbody>${topTextRows}</tbody></table>` : '<span class="text-xs text-slate-500">No data</span>'}
          </div>
        </div>`;
    } catch (err) {
      console.error("Load stats error:", err);
    }
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
        showToast(`Error fetching history: ${errorData.error || response.statusText}`, false);
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
      _loadStats();
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
      const response = await csrfFetch("/admin/history/clear", {
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
          `Error clearing history: ${errorData.error || response.statusText}`,
          false
        );
      }
    } catch (error) {
      console.error("Clear history error:", error);
      showToast("Error clearing history.", false);
    }
  }

  // ─── Replay Controls ──────────────────────────────────────────────────────

  let _replayPollTimer = null;

  function _updateReplayUI(state) {
    const startBtn = document.getElementById("replayStartBtn");
    const pauseBtn = document.getElementById("replayPauseBtn");
    const resumeBtn = document.getElementById("replayResumeBtn");
    const stopBtn = document.getElementById("replayStopBtn");
    const progressEl = document.getElementById("replayProgress");
    if (!startBtn) return;

    if (state === "playing") {
      startBtn.classList.add("hidden");
      pauseBtn.classList.remove("hidden");
      resumeBtn.classList.add("hidden");
      stopBtn.classList.remove("hidden");
      if (progressEl) progressEl.classList.remove("hidden");
    } else if (state === "paused") {
      startBtn.classList.add("hidden");
      pauseBtn.classList.add("hidden");
      resumeBtn.classList.remove("hidden");
      stopBtn.classList.remove("hidden");
      if (progressEl) progressEl.classList.remove("hidden");
    } else {
      // stopped
      startBtn.classList.remove("hidden");
      pauseBtn.classList.add("hidden");
      resumeBtn.classList.add("hidden");
      stopBtn.classList.add("hidden");
      if (progressEl) {
        progressEl.classList.add("hidden");
        progressEl.textContent = "";
      }
    }
  }

  function _pollReplayStatus() {
    if (_replayPollTimer) clearInterval(_replayPollTimer);
    _replayPollTimer = setInterval(async () => {
      try {
        const res = await fetch("/admin/replay/status", { credentials: "same-origin" });
        if (!res.ok) return;
        const data = await res.json();
        const progressEl = document.getElementById("replayProgress");
        if (progressEl) {
          progressEl.textContent = `Replaying: ${data.sent}/${data.total}`;
        }
        _updateReplayUI(data.state);
        if (data.state === "stopped") {
          clearInterval(_replayPollTimer);
          _replayPollTimer = null;
        }
      } catch (e) {
        // ignore polling errors
      }
    }, 500);
  }

  async function _startReplay() {
    const checkboxes = document.querySelectorAll(".replay-record-cb:checked");
    if (checkboxes.length === 0) {
      showToast(ServerI18n.t("noRecordsSelected"), false);
      return;
    }

    // 取得目前顯示的記錄
    const searchTerm = document.getElementById("historySearch")?.value?.toLowerCase() || "";
    const displayedRecords = searchTerm
      ? _allHistoryRecords.filter((r) => (r.text || "").toLowerCase().includes(searchTerm))
      : _allHistoryRecords;

    const selectedRecords = [];
    checkboxes.forEach((cb) => {
      const idx = parseInt(cb.dataset.recordIndex, 10);
      if (displayedRecords[idx]) selectedRecords.push(displayedRecords[idx]);
    });

    if (selectedRecords.length === 0) return;

    const speed = parseFloat(document.getElementById("replaySpeed")?.value || "1");

    try {
      const res = await csrfFetch("/admin/replay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ records: selectedRecords, speedMultiplier: speed }),
      });
      if (res.ok) {
        const data = await res.json();
        showToast(`${ServerI18n.t("replayStarted")}: ${data.count} records at ${speed}x`, true);
        _updateReplayUI("playing");
        _pollReplayStatus();
      } else {
        const err = await res.json();
        showToast(`Replay error: ${err.error || res.statusText}`, false);
      }
    } catch (e) {
      showToast(ServerI18n.t("replayFailed"), false);
    }
  }

  async function _pauseReplay() {
    try {
      await csrfFetch("/admin/replay/pause", { method: "POST" });
      _updateReplayUI("paused");
    } catch (e) {
      showToast(ServerI18n.t("replayPauseFailed"), false);
    }
  }

  async function _resumeReplay() {
    try {
      await csrfFetch("/admin/replay/resume", { method: "POST" });
      _updateReplayUI("playing");
    } catch (e) {
      showToast(ServerI18n.t("replayResumeFailed"), false);
    }
  }

  async function _stopReplay() {
    try {
      await csrfFetch("/admin/replay/stop", { method: "POST" });
      _updateReplayUI("stopped");
      if (_replayPollTimer) {
        clearInterval(_replayPollTimer);
        _replayPollTimer = null;
      }
    } catch (e) {
      showToast(ServerI18n.t("replayStopFailed"), false);
    }
  }

  // ─── Record Replay ────────────────────────────────────────────────────────

  let _replayRecorder = null;
  let _recordingTimerInterval = null;
  let _recordingStartTime = 0;
  let _recordingReplayPollTimer = null;

  function _updateRecordingTimer() {
    const timerEl = document.getElementById("replayRecordingTimer");
    if (!timerEl) return;
    const elapsed = Math.floor((Date.now() - _recordingStartTime) / 1000);
    const min = String(Math.floor(elapsed / 60)).padStart(2, "0");
    const sec = String(elapsed % 60).padStart(2, "0");
    timerEl.textContent = `${min}:${sec}`;
  }

  function _showRecordingIndicator(show) {
    const indicator = document.getElementById("replayRecordingIndicator");
    const recordBtn = document.getElementById("replayRecordBtn");
    if (indicator) indicator.classList.toggle("hidden", !show);
    if (recordBtn) recordBtn.classList.toggle("hidden", show);
  }

  async function _startRecordReplay() {
    const checkboxes = document.querySelectorAll(".replay-record-cb:checked");
    if (checkboxes.length === 0) {
      showToast(ServerI18n.t("noRecordsSelected"), false);
      return;
    }

    const searchTerm = document.getElementById("historySearch")?.value?.toLowerCase() || "";
    const displayedRecords = searchTerm
      ? _allHistoryRecords.filter((r) => (r.text || "").toLowerCase().includes(searchTerm))
      : _allHistoryRecords;

    const selectedRecords = [];
    checkboxes.forEach((cb) => {
      const idx = parseInt(cb.dataset.recordIndex, 10);
      if (displayedRecords[idx]) selectedRecords.push(displayedRecords[idx]);
    });

    if (selectedRecords.length === 0) return;

    // Initialize recorder
    if (typeof ReplayRecorder === "undefined") {
      showToast("ReplayRecorder not loaded", false);
      return;
    }

    _replayRecorder = new ReplayRecorder();
    _replayRecorder.init(1280, 720);
    _replayRecorder.startRecording();

    _recordingStartTime = Date.now();
    _recordingTimerInterval = setInterval(_updateRecordingTimer, 1000);
    _showRecordingIndicator(true);

    // Start the actual replay
    const speed = parseFloat(document.getElementById("replaySpeed")?.value || "1");

    try {
      const res = await csrfFetch("/admin/replay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ records: selectedRecords, speedMultiplier: speed }),
      });
      if (res.ok) {
        const data = await res.json();
        showToast(`Recording replay: ${data.count} records at ${speed}x`, true);
        _updateReplayUI("playing");

        // Poll replay status and feed danmu to recorder
        _pollReplayStatusForRecording();
      } else {
        const err = await res.json();
        showToast(`Replay error: ${err.error || res.statusText}`, false);
        _stopRecordReplay();
      }
    } catch (e) {
      showToast(ServerI18n.t("replayFailed"), false);
      _stopRecordReplay();
    }
  }

  function _pollReplayStatusForRecording() {
    if (_recordingReplayPollTimer) clearInterval(_recordingReplayPollTimer);
    let _lastSentCount = 0;

    _recordingReplayPollTimer = setInterval(async () => {
      try {
        const res = await fetch("/admin/replay/status", { credentials: "same-origin" });
        if (!res.ok) return;
        const data = await res.json();
        const progressEl = document.getElementById("replayProgress");
        if (progressEl) {
          progressEl.textContent = `Recording: ${data.sent}/${data.total}`;
          progressEl.classList.remove("hidden");
        }
        _updateReplayUI(data.state);

        // Feed new danmu to recorder from the sent records
        if (data.sent > _lastSentCount && data.sentRecords) {
          const newRecords = data.sentRecords.slice(_lastSentCount);
          for (const r of newRecords) {
            if (_replayRecorder) _replayRecorder.addDanmu(r);
          }
        }
        _lastSentCount = data.sent || 0;

        if (data.state === "stopped") {
          clearInterval(_recordingReplayPollTimer);
          _recordingReplayPollTimer = null;
          // Wait a bit for last danmu to animate, then stop recording
          setTimeout(() => _stopRecordReplay(), 3000);
        }
      } catch (e) {
        // ignore polling errors
      }
    }, 500);
  }

  async function _stopRecordReplay() {
    if (_recordingTimerInterval) {
      clearInterval(_recordingTimerInterval);
      _recordingTimerInterval = null;
    }
    if (_recordingReplayPollTimer) {
      clearInterval(_recordingReplayPollTimer);
      _recordingReplayPollTimer = null;
    }
    _showRecordingIndicator(false);
    _updateReplayUI("stopped");

    if (_replayRecorder) {
      await _replayRecorder.downloadRecording();
      _replayRecorder = null;
      showToast("Recording saved!", true);
    }
  }

  async function _exportJsonTimeline() {
    const hours = document.getElementById("historyHours")?.value || "24";
    try {
      const res = await fetch(`/admin/history/export?hours=${hours}`, { credentials: "same-origin" });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        showToast(`Export error: ${err.error || res.statusText}`, false);
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `danmu-timeline-${hours}h.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("JSON timeline exported!", true);
    } catch (e) {
      showToast("Export failed", false);
    }
  }

  // --- Poll Management ---
  let _pollStatusTimer = null;

  async function _createPoll() {
    const question = (document.getElementById("pollQuestion")?.value || "").trim();
    const optionInputs = document.querySelectorAll(".poll-option-input");
    const options = Array.from(optionInputs).map((el) => el.value.trim()).filter(Boolean);

    if (!question) { showToast(ServerI18n.t("pollEnterQuestion"), false); return; }
    if (options.length < 2) { showToast(ServerI18n.t("pollMinOptions"), false); return; }

    try {
      const res = await csrfFetch("/admin/poll/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, options }),
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || ServerI18n.t("pollCreateFailed"), false);
        return;
      }
      showToast(ServerI18n.t("pollCreated"), true);
      _renderPollStatus(data);
      _pollPollStatus();
    } catch (e) {
      showToast(ServerI18n.t("pollCreateFailed"), false);
    }
  }

  async function _endPoll() {
    try {
      const res = await csrfFetch("/admin/poll/end", { method: "POST" });
      const data = await res.json();
      if (!res.ok) { showToast(data.error || ServerI18n.t("pollEndFailed"), false); return; }
      showToast(ServerI18n.t("pollEnded"), true);
      _renderPollStatus(data);
      if (_pollStatusTimer) { clearInterval(_pollStatusTimer); _pollStatusTimer = null; }
    } catch (e) {
      showToast(ServerI18n.t("pollEndFailed"), false);
    }
  }

  async function _resetPoll() {
    try {
      const res = await csrfFetch("/admin/poll/reset", { method: "POST" });
      const data = await res.json();
      if (!res.ok) { showToast(data.error || ServerI18n.t("pollResetFailed"), false); return; }
      showToast(ServerI18n.t("pollResetDone"), true);
      _renderPollStatus(data);
      if (_pollStatusTimer) { clearInterval(_pollStatusTimer); _pollStatusTimer = null; }
    } catch (e) {
      showToast(ServerI18n.t("pollResetFailed"), false);
    }
  }

  function _pollPollStatus() {
    if (_pollStatusTimer) { clearInterval(_pollStatusTimer); _pollStatusTimer = null; }
    const fetchStatus = async () => {
      try {
        const res = await fetch("/admin/poll/status", { credentials: "same-origin" });
        if (res.ok) {
          const data = await res.json();
          _renderPollStatus(data);
          if (data.state !== "active") {
            if (_pollStatusTimer) { clearInterval(_pollStatusTimer); _pollStatusTimer = null; }
          }
        }
      } catch (_) { /* ignore */ }
    };
    fetchStatus();
    _pollStatusTimer = setInterval(fetchStatus, 2000);
  }

  function _renderPollStatus(data) {
    const display = document.getElementById("pollStatusDisplay");
    if (!display) return;
    display.textContent = "";

    if (!data || data.state === "idle") {
      const noActive = document.createElement("span");
      noActive.className = "text-slate-500";
      noActive.textContent = ServerI18n.t("pollNoActive");
      display.appendChild(noActive);
      return;
    }
    const total = data.total_votes || 0;
    const maxCount = Math.max(1, ...data.options.map((o) => o.count));

    const card = document.createElement("div");
    card.className = "mt-2 p-3 bg-slate-800/60 rounded-lg border border-slate-700/50";

    // Header row
    const headerRow = document.createElement("div");
    headerRow.className = "flex items-center gap-2 mb-2";

    const dot = document.createElement("span");
    dot.className = "inline-block w-2 h-2 rounded-full " + (data.state === "active" ? "bg-green-400 animate-pulse" : "bg-yellow-400");
    headerRow.appendChild(dot);

    const questionEl = document.createElement("span");
    questionEl.className = "text-white font-semibold text-sm";
    questionEl.textContent = data.question || "";
    headerRow.appendChild(questionEl);

    const stateEl = document.createElement("span");
    stateEl.className = "text-xs text-slate-400 ml-auto";
    stateEl.textContent = data.state;
    headerRow.appendChild(stateEl);

    card.appendChild(headerRow);

    // Option rows
    data.options.forEach((o) => {
      const row = document.createElement("div");
      row.className = "mb-1.5";

      const labelRow = document.createElement("div");
      labelRow.className = "flex justify-between text-xs text-slate-300 mb-0.5";

      const labelLeft = document.createElement("span");
      const keyBold = document.createElement("b");
      keyBold.textContent = o.key + ".";
      labelLeft.appendChild(keyBold);
      labelLeft.appendChild(document.createTextNode(" " + o.text));

      const labelRight = document.createElement("span");
      labelRight.textContent = o.count + " (" + o.percentage + "%)";

      labelRow.appendChild(labelLeft);
      labelRow.appendChild(labelRight);

      const barBg = document.createElement("div");
      barBg.className = "bg-slate-700/50 rounded h-2 overflow-hidden";

      const barFill = document.createElement("div");
      barFill.className = "h-full rounded bg-gradient-to-r from-cyan-600 to-cyan-400 transition-all duration-300";
      barFill.style.width = (o.count / maxCount * 100) + "%";

      barBg.appendChild(barFill);
      row.appendChild(labelRow);
      row.appendChild(barBg);
      card.appendChild(row);
    });

    // Footer
    const footer = document.createElement("div");
    footer.className = "text-xs text-slate-500 mt-1";
    footer.textContent = ServerI18n.t("pollTotalVotes").replace("{0}", total);
    card.appendChild(footer);

    display.appendChild(card);
  }

  // Expose csrfFetch globally for external admin modules (e.g. admin-scheduler.js)
  window.csrfFetch = csrfFetch;

  // showToast is provided by the shared toast.js utility (window.showToast)

  // Render Login Screen
  function renderLogin() {
    appContainer.innerHTML = `
                    <div class="glass-effect rounded-3xl shadow-2xl p-6 md:p-8 space-y-6 max-w-md mx-auto">
                        <h1 class="text-3xl md:text-4xl font-bold text-center text-violet-300 pb-2" data-i18n="adminLoginTitle">
                            ${ServerI18n.t("adminLoginTitle")}
                        </h1>
                        <form id="loginForm" class="space-y-6" action="/login" method="post">
                            <div>
                                <label for="password" class="text-sm font-medium text-slate-300" data-i18n="password">${ServerI18n.t("password")}</label>
                                <input type="password" id="password" name="password" class="mt-1 w-full p-3 bg-slate-800/80 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-300" required>
                            </div>
                            <button type="submit" class="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-6 rounded-xl transition-colors" data-i18n="login">
                                ${ServerI18n.t("login")}
                            </button>
                        </form>
                    </div>
                `;
  }

  // Render Control Panel Screen
  function renderControlPanel() {
    const detailsState = loadDetailsState();
    const isOpen = (id, defaultOpen = false) =>
      detailsState[id] !== undefined ? detailsState[id] : defaultOpen;
    const settingCard = (
      id,
      title,
      description,
      isEnabled,
      enabledContent,
      disabledContent
    ) => `
                    <div id="sec-${id.toLowerCase()}" class="glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent scroll-mt-24">
                        <div class="flex items-center justify-between">
                            <div class="flex-grow pr-4">
                                <h3 class="text-lg font-bold text-white">${title}</h3>
                                <p class="text-sm text-slate-300">${description}</p>
                            </div>
                            <div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in flex-shrink-0">
                                <input type="checkbox" name="${id}" id="toggle-${id}" role="switch" aria-checked="${isEnabled}" aria-label="Toggle ${title}" class="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer" ${isEnabled ? "checked" : ""
      } />
                                <label for="toggle-${id}" class="toggle-label block overflow-hidden h-7 rounded-full bg-slate-700 cursor-pointer"></label>
                            </div>
                        </div>
                        <div class="mt-4 pt-4 border-t border-slate-700/50">
                            ${isEnabled ? enabledContent : disabledContent}
                        </div>
                    </div>
                `;

    appContainer.innerHTML = `
                    <div class="glass-effect rounded-3xl shadow-2xl p-6 md:p-8 space-y-8">
                        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                             <h1 class="text-3xl md:text-4xl font-bold text-center text-violet-300 pb-2" data-i18n="adminTitle">
                                ${ServerI18n.t("adminTitle")}
                            </h1>
                            <div class="flex items-center gap-2 w-full md:w-auto">
                                <select id="server-lang-select" onchange="ServerI18n.setLanguage(this.value)"
                                  class="bg-slate-800/60 border border-slate-700 text-slate-300 text-xs rounded-lg px-2 py-2 focus:ring-violet-400 focus:border-violet-400">
                                  <option value="en" ${ServerI18n.currentLang === "en" ? "selected" : ""}>EN</option>
                                  <option value="zh" ${ServerI18n.currentLang === "zh" ? "selected" : ""}>ZH</option>
                                  <option value="ja" ${ServerI18n.currentLang === "ja" ? "selected" : ""}>JA</option>
                                  <option value="ko" ${ServerI18n.currentLang === "ko" ? "selected" : ""}>KO</option>
                                </select>
                                <button id="logoutButton" class="flex-1 md:flex-none flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-5 rounded-lg transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                                    <span data-i18n="logout">${ServerI18n.t("logout")}</span>
                                </button>
                            </div>
                        </div>

                        <nav class="sticky top-2 z-10 rounded-xl border border-slate-700/60 bg-slate-900/70 backdrop-blur px-3 py-2 overflow-x-auto" aria-label="Quick Navigation">
                            <div class="flex items-center gap-2 text-xs whitespace-nowrap">
                                <span class="text-slate-400 mr-1" data-i18n="quickNav">${ServerI18n.t("quickNav")}</span>
                                <a href="#sec-color" class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors" data-i18n="navBasic">${ServerI18n.t("navBasic")}</a>
                                <a href="#sec-effects" class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors" data-i18n="navEffects">${ServerI18n.t("navEffects")}</a>
                                <a href="#sec-blacklist" class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors" data-i18n="navBlacklist">${ServerI18n.t("navBlacklist")}</a>
                                <a href="#sec-history" class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors" data-i18n="navHistory">${ServerI18n.t("navHistory")}</a>
                                <a href="#sec-polls" class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors">Polls</a>
                                <a href="#sec-security" class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors" data-i18n="navSecurity">${ServerI18n.t("navSecurity")}</a>
                                <a href="#sec-live-feed" class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors">Live Feed</a>
                                <a href="#sec-advanced" class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors">Advanced</a>
                            </div>
                        </nav>

                        <div id="settings-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- Settings cards will be inserted via insertAdjacentHTML -->
                        </div>

                        <details id="sec-advanced" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent mt-6 scroll-mt-24" ${isOpen("sec-advanced") ? "open" : ""}
                            <summary class="flex items-center justify-between cursor-pointer list-none">
                                <div>
                                    <h3 class="text-lg font-bold text-white">Advanced</h3>
                                    <p class="text-sm text-slate-300">Webhooks, scheduled broadcasts, and other advanced features</p>
                                </div>
                                <span class="text-slate-400 transition-transform group-open:rotate-180">&#8964;</span>
                            </summary>
                            <div id="advanced-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                                <!-- Webhooks & Scheduler sections injected here -->
                            </div>
                        </details>
                    </div>
                `;

    const settingsGrid = document.getElementById("settings-grid");

    // Color Settings
    settingsGrid.insertAdjacentHTML("beforeend", settingCard(
      "Color",
      ServerI18n.t("colorSetting"),
      ServerI18n.t("colorSettingDesc"),
      currentSettings.Color[0],
      `
                        <label for="setting-color-3" class="text-sm font-medium text-slate-300">${ServerI18n.t("specificColor")}</label>
                        <input id="setting-color-3" type="color" class="setting-input mt-1 w-full h-10 p-1 bg-slate-800 border-slate-700 rounded-lg cursor-pointer" data-key="Color" data-index="3" value="${formatColor(
        "#" + currentSettings.Color[3]
      )}" disabled>
                    `,
      `
                        <label for="setting-color-3" class="text-sm font-medium text-slate-300">${ServerI18n.t("specificColor")}</label>
                        <input id="setting-color-3" type="color" class="setting-input mt-1 w-full h-10 p-1 bg-slate-800 border-slate-700 rounded-lg cursor-pointer" data-key="Color" data-index="3" value="${formatColor(
        "#" + currentSettings.Color[3]
      )}">
                    `
    ));

    // Opacity Settings
    settingsGrid.insertAdjacentHTML("beforeend", settingCard(
      "Opacity",
      ServerI18n.t("opacitySetting"),
      ServerI18n.t("opacitySettingDesc"),
      currentSettings.Opacity[0],
      `
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="setting-opacity-1" class="text-sm font-medium text-slate-300">${ServerI18n.t("minPercent")}</label>
                                <input id="setting-opacity-1" type="number" class="setting-input mt-1 w-full p-2.5 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Opacity" data-index="1" value="${escapeHtml(String(currentSettings.Opacity[1]))}" min="${settingRanges.Opacity.min}" max="${settingRanges.Opacity.max}" step="1">
                            </div>
                            <div>
                                <label for="setting-opacity-2" class="text-sm font-medium text-slate-300">${ServerI18n.t("maxPercent")}</label>
                                <input id="setting-opacity-2" type="number" class="setting-input mt-1 w-full p-2.5 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Opacity" data-index="2" value="${escapeHtml(String(currentSettings.Opacity[2]))}" min="${settingRanges.Opacity.min}" max="${settingRanges.Opacity.max}" step="1">
                            </div>
                        </div>
                    `,
      `
                        <label for="setting-opacity-3" class="text-sm font-medium text-slate-300">${ServerI18n.t("specificOpacity")}</label>
                        <input id="setting-opacity-3" type="number" class="setting-input mt-1 w-full p-2.5 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Opacity" data-index="3" value="${escapeHtml(String(currentSettings.Opacity[3]))}" min="${settingRanges.Opacity.min}" max="${settingRanges.Opacity.max}" step="1">
                    `
    ));

    // Font Size Settings
    settingsGrid.insertAdjacentHTML("beforeend", settingCard(
      "FontSize",
      ServerI18n.t("fontSizeSetting"),
      ServerI18n.t("fontSizeSettingDesc"),
      currentSettings.FontSize[0],
      `
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="setting-fontsize-1" class="text-sm font-medium text-slate-300">${ServerI18n.t("minPx")}</label>
                                <input id="setting-fontsize-1" type="number" class="setting-input mt-1 w-full p-2.5 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="FontSize" data-index="1" value="${escapeHtml(String(currentSettings.FontSize[1]))}" min="${settingRanges.FontSize.min}" max="${settingRanges.FontSize.max}" step="1">
                            </div>
                            <div>
                                <label for="setting-fontsize-2" class="text-sm font-medium text-slate-300">${ServerI18n.t("maxPx")}</label>
                                <input id="setting-fontsize-2" type="number" class="setting-input mt-1 w-full p-2.5 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="FontSize" data-index="2" value="${escapeHtml(String(currentSettings.FontSize[2]))}" min="${settingRanges.FontSize.min}" max="${settingRanges.FontSize.max}" step="1">
                            </div>
                        </div>
                    `,
      `
                        <label for="setting-fontsize-3" class="text-sm font-medium text-slate-300">${ServerI18n.t("specificSizePx")}</label>
                        <input id="setting-fontsize-3" type="number" class="setting-input mt-1 w-full p-2.5 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="FontSize" data-index="3" value="${escapeHtml(String(currentSettings.FontSize[3]))}" min="${settingRanges.FontSize.min}" max="${settingRanges.FontSize.max}" step="1">
                    `
    ));

    // Speed Settings
    settingsGrid.insertAdjacentHTML("beforeend", settingCard(
      "Speed",
      ServerI18n.t("speedSetting"),
      ServerI18n.t("speedSettingDesc"),
      currentSettings.Speed[0],
      `
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="setting-speed-1" class="text-sm font-medium text-slate-300">${ServerI18n.t("slowest")}</label>
                                <input id="setting-speed-1" type="number" class="setting-input mt-1 w-full p-2.5 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Speed" data-index="1" value="${escapeHtml(String(currentSettings.Speed[1]))}" min="${settingRanges.Speed.min}" max="${settingRanges.Speed.max}" step="1">
                            </div>
                            <div>
                                <label for="setting-speed-2" class="text-sm font-medium text-slate-300">${ServerI18n.t("fastest")}</label>
                                <input id="setting-speed-2" type="number" class="setting-input mt-1 w-full p-2.5 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Speed" data-index="2" value="${escapeHtml(String(currentSettings.Speed[2]))}" min="${settingRanges.Speed.min}" max="${settingRanges.Speed.max}" step="1">
                            </div>
                        </div>
                        <small class="text-slate-500 text-xs block mt-2">${ServerI18n.t("speedHint")}</small>
                    `,
      `
                        <label for="setting-speed-3" class="text-sm font-medium text-slate-300">${ServerI18n.t("specificSpeed")}</label>
                        <input id="setting-speed-3" type="number" class="setting-input mt-1 w-full p-2.5 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Speed" data-index="3" value="${escapeHtml(String(currentSettings.Speed[3]))}" min="${settingRanges.Speed.min}" max="${settingRanges.Speed.max}" step="1">
                        <small class="text-slate-500 text-xs block mt-2">${ServerI18n.t("speedHint")}</small>
                    `
    ));

    // Font Family Setting (moved below speed)
    const fontFamilyEnabled =
      currentSettings.FontFamily && currentSettings.FontFamily[0] === true;
    const fontFamilyDescription = fontFamilyEnabled
      ? ServerI18n.t("fontFamilyDescEnabled")
      : ServerI18n.t("fontFamilyDescDisabled");

    const fontFamilyCardContent = `
            <div>
                <label class="text-sm font-medium text-slate-300">${ServerI18n.t("fontForDanmus")}</label>
                <select class="setting-input mt-1 w-full p-2 bg-slate-800 border-2 border-slate-700 rounded-lg" data-key="FontFamily" data-index="3" id="fontFamilySelect">
                    <!-- Options will be populated by JS -->
                </select>
            </div>
            <div class="mt-4">
                <label class="text-sm font-medium text-slate-300">${ServerI18n.t("uploadNewFont")}</label>
                <input type="file" id="fontUploadInput" accept=".ttf" class="mt-1 w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-violet-600 file:text-white hover:file:bg-violet-500"/>
                <button id="uploadFontBtn" class="mt-2 w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2 px-4 rounded-lg">${ServerI18n.t("uploadFont")}</button>
            </div>
            <small class="text-slate-500 text-xs block mt-2">${ServerI18n.t("fontUploadHint")}</small>
            `;

    settingsGrid.insertAdjacentHTML("beforeend", settingCard(
      "FontFamily",
      ServerI18n.t("fontFamilyConfig"),
      fontFamilyDescription, // Dynamic description
      fontFamilyEnabled, // isEnabled (this now means "allow user choice")
      fontFamilyCardContent, // Content is the same regardless of toggle for admin
      fontFamilyCardContent // Content is the same
    ));
    // Use setTimeout to ensure DOM is ready before populating dropdowns
    setTimeout(() => {
      populateFontFamilyDropdowns();
    }, 0);

    // Effects Enable/Disable Card
    const effectsEnabled = currentSettings.Effects ? currentSettings.Effects[0] !== false : true;
    settingsGrid.insertAdjacentHTML("beforeend", settingCard(
      "Effects",
      ServerI18n.t("effectsSetting"),
      ServerI18n.t("effectsSettingDesc"),
      effectsEnabled,
      `<p class="text-sm text-slate-300">${ServerI18n.t("effectsEnabledMsg")}</p>`,
      `<p class="text-sm text-slate-300">${ServerI18n.t("effectsDisabledMsg")}</p>`
    ));

    // Effects Management Card (full width)
    settingsGrid.insertAdjacentHTML("beforeend", `
      <div id="sec-effects" class="glass-effect rounded-2xl p-6 border border-transparent hover:border-slate-500 transition-all duration-300 lg:col-span-2 scroll-mt-24">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-lg font-bold text-white">${ServerI18n.t("effectsManagement")}</h3>
            <p class="text-sm text-slate-300">${ServerI18n.t("effectsManagementDesc")}</p>
          </div>
          <div class="flex items-center gap-2">
            <button id="effectReloadBtn"
              class="px-3 py-1.5 text-xs font-medium bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
              ${ServerI18n.t("reload")}
            </button>
            <label for="effectUploadInput"
              class="px-3 py-1.5 text-xs font-medium bg-sky-700 hover:bg-sky-600 text-white rounded-lg cursor-pointer transition-colors flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
              ${ServerI18n.t("uploadDme")}
            </label>
            <input type="file" id="effectUploadInput" accept=".dme" class="hidden">
          </div>
        </div>
        <div class="border-t border-slate-700/50 pt-4">
          <div id="effectsList" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 min-h-12">
            <span class="text-xs text-slate-500 col-span-2">${ServerI18n.t("loadingEffectsAdmin")}</span>
          </div>
        </div>
      </div>
    `);

    // Theme Management Card
    settingsGrid.insertAdjacentHTML("beforeend", `
      <details id="sec-themes" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent scroll-mt-24" ${isOpen("sec-themes") ? "open" : ""}>
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <div>
            <h3 class="text-lg font-bold text-white">Style Theme Packs</h3>
            <p class="text-sm text-slate-300">Predefined visual themes for danmu styles and effects</p>
          </div>
          <span class="text-slate-400 transition-transform group-open:rotate-180">\u2304</span>
        </summary>
        <div class="mt-4 pt-4 border-t border-slate-700/50">
          <div class="flex items-center gap-2 mb-4">
            <button id="themeReloadBtn"
              class="px-3 py-1.5 text-xs font-medium bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
              Reload
            </button>
          </div>
          <div id="themesList" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <span class="text-xs text-slate-500">Loading themes...</span>
          </div>
        </div>
      </details>
    `);
    scheduleIdleTask(initThemesManagement);

    // Blacklist Management Card
    settingsGrid.insertAdjacentHTML("beforeend", `
                    <details id="sec-blacklist" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent scroll-mt-24" ${isOpen("sec-blacklist") ? "open" : ""}>
                        <summary class="flex items-center justify-between cursor-pointer list-none">
                            <div>
                                <h3 class="text-lg font-bold text-white">${ServerI18n.t("blacklistManagement")}</h3>
                                <p class="text-sm text-slate-300">${ServerI18n.t("blacklistManagementDesc")}</p>
                            </div>
                            <span class="text-slate-400 transition-transform group-open:rotate-180">⌄</span>
                        </summary>
                        <div class="mt-4 pt-4 border-t border-slate-700/50">
                            <div>
                                <label for="newKeywordInput" class="text-sm font-medium text-slate-300">${ServerI18n.t("newKeyword")}</label>
                                <input type="text" id="newKeywordInput" placeholder="${ServerI18n.t("enterKeyword")}" class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-300">
                                <button id="addKeywordBtn" class="mt-3 w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-6 rounded-xl transition-colors">${ServerI18n.t("addKeyword")}</button>
                            </div>
                            <div class="mt-6">
                                <h4 class="text-md font-semibold text-white mb-2">${ServerI18n.t("currentBlacklist")}</h4>
                                <div id="blacklistKeywords" class="space-y-2 max-h-48 overflow-y-auto">
                                    <!-- Keywords will be listed here -->
                                </div>
                            </div>
                        </div>
                    </details>
                `);

    // Danmu History Card
    settingsGrid.insertAdjacentHTML("beforeend", `
                    <details id="sec-history" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent lg:col-span-2 scroll-mt-24" ${isOpen("sec-history") ? "open" : ""}>
                        <summary class="flex items-center justify-between cursor-pointer list-none">
                            <div>
                                <h3 class="text-lg font-bold text-white">${ServerI18n.t("danmuHistory")}</h3>
                                <p class="text-sm text-slate-300">${ServerI18n.t("danmuHistoryDesc")}</p>
                            </div>
                            <span class="text-slate-400 transition-transform group-open:rotate-180">⌄</span>
                        </summary>
                        <div class="mt-4 pt-4 border-t border-slate-700/50">
                            <style>
                                .stats-chart { display: flex; align-items: flex-end; gap: 2px; height: 80px; }
                                .chart-bar { background: #06b6d4; min-width: 12px; border-radius: 2px 2px 0 0; position: relative; transition: height 0.3s; }
                                .chart-bar:hover { background: #22d3ee; }
                                .chart-label { position: absolute; bottom: -18px; left: 50%; transform: translateX(-50%); font-size: 10px; color: #94a3b8; }
                            </style>
                            <div id="statsDashboard"></div>
                            <div class="space-y-3">
                                <div class="flex gap-2 items-center flex-wrap">
                                    <label class="text-sm font-medium text-slate-300">${ServerI18n.t("timeRange")}</label>
                                    <select id="historyHours" class="px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-400 focus:border-violet-400">
                                        <option value="1">${ServerI18n.t("last1Hour")}</option>
                                        <option value="6">${ServerI18n.t("last6Hours")}</option>
                                        <option value="24" selected>${ServerI18n.t("last24Hours")}</option>
                                        <option value="72">${ServerI18n.t("last3Days")}</option>
                                        <option value="168">${ServerI18n.t("last7Days")}</option>
                                    </select>
                                    <button id="refreshHistoryBtn" class="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors text-sm">${ServerI18n.t("refreshBtn")}</button>
                                    <button id="exportHistoryBtn" class="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors text-sm">${ServerI18n.t("exportCSV")}</button>
                                    <button id="clearHistoryBtn" class="px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white rounded-lg transition-colors text-sm">${ServerI18n.t("clearAll")}</button>
                                    <label class="flex items-center gap-2 text-xs text-slate-400 cursor-pointer select-none ml-auto">
                                        <input type="checkbox" id="historyAutoRefresh" class="accent-purple-500">
                                        ${ServerI18n.t("autoRefresh")}
                                    </label>
                                </div>
                                <input id="historySearch" type="search" placeholder="${ServerI18n.t("searchHistory")}"
                                    class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm
                                           placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400">
                                <div id="replayToolbar" class="flex gap-2 items-center flex-wrap">
                                    <button id="replayStartBtn" class="px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors text-sm">▶ ${ServerI18n.t("replaySelected")}</button>
                                    <button id="replayPauseBtn" class="px-3 py-1.5 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg transition-colors text-sm hidden">⏸ ${ServerI18n.t("pause")}</button>
                                    <button id="replayResumeBtn" class="px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors text-sm hidden">▶ ${ServerI18n.t("resume")}</button>
                                    <button id="replayStopBtn" class="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors text-sm hidden">⏹ ${ServerI18n.t("stop")}</button>
                                    <select id="replaySpeed" class="px-2 py-1.5 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm">
                                        <option value="1">1x</option>
                                        <option value="2">2x</option>
                                        <option value="5">5x</option>
                                        <option value="10">10x</option>
                                    </select>
                                    <button id="replayRecordBtn" class="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg transition-colors text-sm">⏺ ${ServerI18n.t("recordReplay") || "Record Replay"}</button>
                                    <span id="replayRecordingIndicator" class="text-sm text-red-400 hidden">⏺ <span id="replayRecordingTimer">00:00</span></span>
                                    <button id="exportJsonBtn" class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors text-sm">${ServerI18n.t("exportJSON") || "Export JSON"}</button>
                                    <span id="replayProgress" class="text-sm text-slate-400 hidden"></span>
                                </div>
                                <div id="historyStats" class="text-sm text-slate-400"></div>
                                <div class="flex items-center gap-2 mb-1">
                                    <label class="flex items-center gap-2 text-xs text-slate-400 cursor-pointer select-none">
                                        <input type="checkbox" id="historySelectAll" class="accent-purple-500">
                                        ${ServerI18n.t("selectAll")}
                                    </label>
                                </div>
                                <div id="danmuHistoryList" class="space-y-2 max-h-96 overflow-y-auto">
                                    <!-- History will be listed here -->
                                </div>
                            </div>
                        </div>
                    </details>
                `);

    // Polls Management Card
    settingsGrid.insertAdjacentHTML("beforeend", `
                    <details id="sec-polls" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent scroll-mt-24" ${isOpen("sec-polls") ? "open" : ""}>
                        <summary class="flex items-center justify-between cursor-pointer list-none">
                            <div>
                                <h3 class="text-lg font-bold text-white">Poll / Vote</h3>
                                <p class="text-sm text-slate-300">Create interactive polls for viewers to vote via danmu</p>
                            </div>
                            <span class="text-slate-400 transition-transform group-open:rotate-180">\u2304</span>
                        </summary>
                        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-4">
                            <div>
                                <label for="pollQuestion" class="text-sm font-medium text-slate-300">Question</label>
                                <input type="text" id="pollQuestion" placeholder="What's your favorite...?" maxlength="200"
                                    class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-300">
                            </div>
                            <div>
                                <label class="text-sm font-medium text-slate-300">Options (2-6)</label>
                                <div id="pollOptionsContainer" class="space-y-2 mt-1">
                                    <input type="text" class="poll-option-input w-full p-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm" placeholder="A. Option 1" maxlength="100">
                                    <input type="text" class="poll-option-input w-full p-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm" placeholder="B. Option 2" maxlength="100">
                                </div>
                                <div class="flex gap-2 mt-2">
                                    <button id="pollAddOptionBtn" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm">+ Add Option</button>
                                    <button id="pollRemoveOptionBtn" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm">- Remove</button>
                                </div>
                            </div>
                            <div class="flex gap-2 flex-wrap">
                                <button id="pollCreateBtn" class="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors text-sm font-semibold">Create Poll</button>
                                <button id="pollEndBtn" class="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg transition-colors text-sm font-semibold">End Poll</button>
                                <button id="pollResetBtn" class="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors text-sm font-semibold">Reset</button>
                            </div>
                            <div id="pollStatusDisplay" class="text-sm text-slate-400"></div>
                        </div>
                    </details>
                `);

    // Password Change Card (with show/hide toggles)
    settingsGrid.insertAdjacentHTML("beforeend", `
                    <details id="sec-security" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent scroll-mt-24" ${isOpen("sec-security") ? "open" : ""}>
                        <summary class="flex items-center justify-between cursor-pointer list-none">
                            <div>
                                <h3 class="text-lg font-bold text-white">${ServerI18n.t("changePassword")}</h3>
                                <p class="text-sm text-slate-300">${ServerI18n.t("changePasswordDesc")}</p>
                            </div>
                            <span class="text-slate-400 transition-transform group-open:rotate-180">⌄</span>
                        </summary>
                        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-3">
                            <div class="password-wrapper">
                                <input id="pwCurrent" type="password" placeholder="${ServerI18n.t("currentPassword")}"
                                    class="w-full px-3 py-2 pr-10 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-400">
                                <button type="button" class="password-toggle" data-target="pwCurrent" aria-label="Toggle password visibility">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                </button>
                            </div>
                            <div class="password-wrapper">
                                <input id="pwNew" type="password" placeholder="${ServerI18n.t("newPassword")}"
                                    class="w-full px-3 py-2 pr-10 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-400">
                                <button type="button" class="password-toggle" data-target="pwNew" aria-label="Toggle password visibility">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                </button>
                            </div>
                            <div class="password-wrapper">
                                <input id="pwConfirm" type="password" placeholder="${ServerI18n.t("confirmNewPassword")}"
                                    class="w-full px-3 py-2 pr-10 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-400">
                                <button type="button" class="password-toggle" data-target="pwConfirm" aria-label="Toggle password visibility">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                </button>
                            </div>
                            <button id="changePasswordBtn"
                                class="w-full px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors text-sm font-semibold">
                                ${ServerI18n.t("changePasswordBtn")}
                            </button>
                        </div>
                    </details>
                `);

    // Fetch blacklist/history after render without blocking first paint
    if (document.getElementById("blacklistKeywords")) {
      scheduleIdleTask(fetchBlacklist);
    }

    if (document.getElementById("danmuHistoryList")) {
      scheduleIdleTask(fetchDanmuHistory);
    }

    addEventListeners();
    scheduleIdleTask(initEffectsManagement);

    // Notify add-on scripts (admin-sounds.js, admin-webhooks.js, etc.)
    // that the control panel has been (re)built, so they can re-inject.
    document.dispatchEvent(new CustomEvent("admin-panel-rendered"));
  }

  // Attach Event Listeners
  function addEventListeners() {
    // Logout Button
    const logoutBtn = document.getElementById("logoutButton");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", async () => {
        try {
          const response = await csrfFetch("/logout", {
            method: "POST",
          });

          if (response.redirected) {
            window.location.href = response.url;
          }
          showToast(ServerI18n.t("logoutSuccess"));
        } catch (error) {
          console.error("Logout Failed:", error);
          showToast(ServerI18n.t("logoutFailed"), false);
        }
      });
    }

    // Toggle Checkbox
    document.querySelectorAll(".toggle-checkbox").forEach((toggle) => {
      toggle.addEventListener("change", async function () {
        const key = this.name;
        const isChecked = this.checked;
        await toggleSetting(key, isChecked);
      });
    });

    document.querySelectorAll("details[id^='sec-']").forEach((detailsEl) => {
      detailsEl.addEventListener("toggle", () => {
        const current = loadDetailsState();
        current[detailsEl.id] = detailsEl.open;
        saveDetailsState(current);
      });
    });

    // Setting Input Change
    document.querySelectorAll(".setting-input").forEach((input) => {
      input.addEventListener("change", async function () {
        const key = this.dataset.key;
        const index = parseInt(this.dataset.index);
        let value = this.value;
        if (this.type === "number") {
          value = parseInt(value);
        }

        await updateSetting(key, value, index, this);
      });
    });

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

    // Replay controls
    const replayStartBtn = document.getElementById("replayStartBtn");
    if (replayStartBtn) replayStartBtn.addEventListener("click", _startReplay);
    const replayPauseBtn = document.getElementById("replayPauseBtn");
    if (replayPauseBtn) replayPauseBtn.addEventListener("click", _pauseReplay);
    const replayResumeBtn = document.getElementById("replayResumeBtn");
    if (replayResumeBtn) replayResumeBtn.addEventListener("click", _resumeReplay);
    const replayStopBtn = document.getElementById("replayStopBtn");
    if (replayStopBtn) replayStopBtn.addEventListener("click", _stopReplay);

    const replayRecordBtn = document.getElementById("replayRecordBtn");
    if (replayRecordBtn) replayRecordBtn.addEventListener("click", _startRecordReplay);

    const exportJsonBtn = document.getElementById("exportJsonBtn");
    if (exportJsonBtn) exportJsonBtn.addEventListener("click", _exportJsonTimeline);

    const historySelectAll = document.getElementById("historySelectAll");
    if (historySelectAll) {
      historySelectAll.addEventListener("change", () => {
        document.querySelectorAll(".replay-record-cb").forEach((cb) => {
          cb.checked = historySelectAll.checked;
        });
      });
    }

    // Password change button
    const changePasswordBtn = document.getElementById("changePasswordBtn");
    if (changePasswordBtn) {
      changePasswordBtn.addEventListener("click", async () => {
        const current = document.getElementById("pwCurrent")?.value || "";
        const newPw = document.getElementById("pwNew")?.value || "";
        const confirm = document.getElementById("pwConfirm")?.value || "";

        if (!current || !newPw || !confirm) {
          showToast(ServerI18n.t("allFieldsRequired"), false);
          return;
        }

        try {
          const res = await csrfFetch("/admin/change_password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              current_password: current,
              new_password: newPw,
              confirm_password: confirm,
            }),
          });
          const data = await res.json();
          if (res.ok) {
            showToast(data.message || "Password changed!", true);
            // Clear the fields
            ["pwCurrent", "pwNew", "pwConfirm"].forEach((id) => {
              const el = document.getElementById(id);
              if (el) el.value = "";
            });
          } else {
            showToast(data.error || "Failed to change password.", false);
          }
        } catch (e) {
          showToast(ServerI18n.t("passwordChangeError"), false);
        }
      });
    }

    // Font upload button event listeners
    const uploadFontBtn = document.getElementById("uploadFontBtn");
    if (uploadFontBtn) {
      uploadFontBtn.addEventListener("click", () =>
        handleFontUpload("fontUploadInput", "uploadFontBtn")
      );
    }

    // Poll management buttons
    const pollCreateBtn = document.getElementById("pollCreateBtn");
    if (pollCreateBtn) pollCreateBtn.addEventListener("click", _createPoll);
    const pollEndBtn = document.getElementById("pollEndBtn");
    if (pollEndBtn) pollEndBtn.addEventListener("click", _endPoll);
    const pollResetBtn = document.getElementById("pollResetBtn");
    if (pollResetBtn) pollResetBtn.addEventListener("click", _resetPoll);

    const pollAddOptionBtn = document.getElementById("pollAddOptionBtn");
    if (pollAddOptionBtn) {
      pollAddOptionBtn.addEventListener("click", () => {
        const container = document.getElementById("pollOptionsContainer");
        if (!container) return;
        const count = container.querySelectorAll(".poll-option-input").length;
        if (count >= 6) { showToast("Maximum 6 options", false); return; }
        const input = document.createElement("input");
        input.type = "text";
        input.className = "poll-option-input w-full p-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm";
        input.placeholder = String.fromCharCode(65 + count) + ". Option " + (count + 1);
        input.maxLength = 100;
        container.appendChild(input);
      });
    }

    const pollRemoveOptionBtn = document.getElementById("pollRemoveOptionBtn");
    if (pollRemoveOptionBtn) {
      pollRemoveOptionBtn.addEventListener("click", () => {
        const container = document.getElementById("pollOptionsContainer");
        if (!container) return;
        const inputs = container.querySelectorAll(".poll-option-input");
        if (inputs.length <= 2) { showToast("Minimum 2 options", false); return; }
        inputs[inputs.length - 1].remove();
      });
    }

    // Start polling for poll status if section is open
    const pollDetails = document.getElementById("sec-polls");
    if (pollDetails) {
      pollDetails.addEventListener("toggle", () => {
        if (pollDetails.open) _pollPollStatus();
      });
      if (pollDetails.open) _pollPollStatus();
    }

    // Password show/hide toggles
    document.querySelectorAll(".password-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.dataset.target;
        const input = document.getElementById(targetId);
        if (!input) return;
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        // Swap icon: eye ↔ eye-off
        btn.innerHTML = isPassword
          ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"/></svg>'
          : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>';
      });
    });
  }

  // Main Render Function
  function render() {
    if (session.logged_in) {
      renderControlPanel();
    } else {
      renderLogin();
    }
  }

  // --- Initialization ---
  async function init() {
    await fetchLatestSettings(); // This will call renderControlPanel which now calls populateFontFamilyDropdowns
    render();
  }

  async function populateFontFamilyDropdowns() {
    try {
      const response = await csrfFetch("/admin/get_fonts");
      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        showToast(err.error || "Failed to fetch font list.", false);
        return;
      }
      const payload = await response.json();
      const fonts = payload.fonts || [];
      adminFontCache = fonts;
      scheduleAdminFontRefresh(payload.tokenTTL || 0);

      const selectElement = document.getElementById("fontFamilySelect");
      const currentFontName = currentSettings.FontFamily[3];

      if (!selectElement) return;
      selectElement.innerHTML = "";

      let foundCurrentFont = false;
      fonts.forEach((font) => {
        const option = document.createElement("option");
        option.value = font.name;
        option.textContent = `${font.name} (${font.type === "default"
          ? ServerI18n.t("fontTypeDefault")
          : font.type === "system"
            ? ServerI18n.t("fontTypeSystem")
            : ServerI18n.t("fontTypeUploaded")
          })`;
        option.dataset.fontUrl = font.url || "";
        option.dataset.expiresAt = font.expiresAt || "";
        if (font.name === currentFontName) {
          option.selected = true;
          foundCurrentFont = true;
        }
        selectElement.appendChild(option);
      });

      if (!foundCurrentFont) {
        const notoOption = Array.from(selectElement.options).find(
          (opt) => opt.value === "NotoSansTC"
        );
        if (notoOption) {
          notoOption.selected = true;
        } else if (selectElement.options.length > 0) {
          selectElement.options[0].selected = true;
        }
      }
    } catch (error) {
      console.error("Error populating font dropdowns:", error);
      showToast(ServerI18n.t("errorLoadingFonts"), false);
    }
  }

  async function handleFontUpload(inputId, buttonId) {
    const fileInput = document.getElementById(inputId);
    const file = fileInput ? fileInput.files[0] : null;

    if (!file) {
      showToast(ServerI18n.t("selectTTFFile"), false);
      return;
    }

    if (!file.name.toLowerCase().endsWith(".ttf")) {
      showToast(ServerI18n.t("invalidFileType"), false);
      fileInput.value = ""; // Clear the input
      return;
    }

    const formData = new FormData();
    formData.append("fontfile", file);
    formData.append("csrf_token", csrfToken);

    try {
      const response = await csrfFetch("/admin/upload_font", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (response.ok) {
        showToast(result.message || "Font uploaded successfully!", true);
        fileInput.value = ""; // Clear the input
        await populateFontFamilyDropdowns(); // Refresh font list
        // Optionally, select the newly uploaded font
        const newFontName = file.name.substring(0, file.name.lastIndexOf(".")); // Get name without .ttf
        const selectElement = document.getElementById("fontFamilySelect");
        if (selectElement) {
          // Check if this font is already an option, if not, populate might add it
          // For now, just set value and update setting. populateFontFamilyDropdowns will fix selection if needed.
          selectElement.value = newFontName;
        }
        await updateSetting("FontFamily", newFontName, 3); // Update setting and this will trigger re-render and repopulate
      } else {
        showToast(result.error || "Font upload failed.", false);
      }
    } catch (error) {
      console.error("Font upload error:", error);
      showToast(ServerI18n.t("fontUploadError"), false);
    }
  }

  // Themes management extracted to admin-themes.js (window.AdminThemes)
  function initThemesManagement() {
    if (window.AdminThemes) window.AdminThemes.init();
  }

  // Effects management extracted to admin-effects-mgmt.js (window.AdminEffects)
  function initEffectsManagement() {
    if (window.AdminEffects) window.AdminEffects.init();
  }

  // --- Real-time WebSocket Listener ---
  // Receives push notifications from the server (e.g. blacklist_update).
  function initAdminWebSocket() {
    const wsUrl = (window.DANMU_CONFIG || {}).wsUrl;
    if (!wsUrl) return;
    let _wsReconnectAttempts = 0;
    const _wsMaxReconnectDelay = 60000;

    function connect() {
      try {
        _adminWs = new WebSocket(wsUrl);

        _adminWs.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data.type === "blacklist_update") {
              fetchBlacklist();
            } else if (data.type === "settings_changed") {
              fetchLatestSettings();
            }
            // Dispatch to external scripts (e.g. live feed)
            document.dispatchEvent(new CustomEvent("admin-ws-message", { detail: data }));
          } catch (_) {
            // ignore non-JSON messages (heartbeat strings)
          }
        };

        _adminWs.onopen = () => {
          _wsReconnectAttempts = 0;
        };

        _adminWs.onclose = () => {
          if (!_adminWsReconnectTimer) {
            const delay = Math.min(5000 * Math.pow(2, _wsReconnectAttempts), _wsMaxReconnectDelay);
            _wsReconnectAttempts++;
            _adminWsReconnectTimer = setTimeout(() => {
              _adminWsReconnectTimer = null;
              connect();
            }, delay);
          }
        };

        _adminWs.onerror = () => {
          _adminWs.close();
        };
      } catch (e) {
        console.warn("[AdminWS] Failed to connect:", e);
      }
    }

    connect();
  }

  // Cleanup all background resources on page unload (prevents memory leaks)
  window.addEventListener("beforeunload", () => {
    if (_replayPollTimer) {
      clearInterval(_replayPollTimer);
      _replayPollTimer = null;
    }
    if (_autoRefreshTimer) {
      clearInterval(_autoRefreshTimer);
      _autoRefreshTimer = null;
    }
    if (_adminWsReconnectTimer) {
      clearTimeout(_adminWsReconnectTimer);
      _adminWsReconnectTimer = null;
    }
    if (_adminWs) {
      _adminWs.onclose = null; // prevent reconnect attempt after explicit close
      _adminWs.close();
      _adminWs = null;
    }
  });

  initAdminWebSocket();
  init();
});
