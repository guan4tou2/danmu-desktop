document.addEventListener("DOMContentLoaded", () => {
  const csrfToken =
    document.querySelector('meta[name="csrf-token"]').content || "";

  // Apply persisted stream-mode class immediately (before render) to avoid
  // flash of low-freq sections on reload.
  try {
    if (localStorage.getItem("danmu-stream-mode") === "1") {
      document.body.classList.add("stream-mode");
    }
  } catch (e) {
    /* localStorage blocked — that is ok, session only */
  }

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
  let _adminWs = null;
  let _adminWsReconnectTimer = null;
  let _adminSectionObserver = null;
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
      // Only re-render the control panel when authenticated, otherwise
      // we dispatch "admin-panel-rendered" on the login screen and trigger
      // a wave of 401 fetches from admin-history.js etc.
      if (session.logged_in) {
        renderControlPanel();
      }
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
      return "#38bdf8"; // Default sky (matches --color-primary)
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

  const ADMIN_SECTION_GROUPS = {
    moderation: {
      containerId: "moderation-grid",
      orderedIds: [
        "sec-live-feed",
        "sec-blacklist",
        "sec-history",
        "sec-filters",
        "sec-polls",
        "sec-security",
        "sec-ws-auth",
      ],
    },
    assets: {
      containerId: "assets-grid",
      orderedIds: [
        "sec-emojis",
        "sec-stickers",
        "sec-sounds",
        "sec-themes",
        "sec-plugins",
        "sec-widgets",
      ],
    },
  };

  function syncAdminSectionLayout() {
    Object.values(ADMIN_SECTION_GROUPS).forEach((group) => {
      const target = document.getElementById(group.containerId);
      if (!target) return;
      group.orderedIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && section.parentElement !== target) {
          target.appendChild(section);
        }
      });
    });
  }

  function initAdminSectionLayout() {
    if (_adminSectionObserver) {
      _adminSectionObserver.disconnect();
      _adminSectionObserver = null;
    }

    syncAdminSectionLayout();

    _adminSectionObserver = new MutationObserver(() => {
      syncAdminSectionLayout();
    });
    _adminSectionObserver.observe(appContainer, {
      childList: true,
      subtree: true,
    });
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
        showToast(result.error || ServerI18n.t("updateFailed"), false);
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
      const totalMessages = dist.reduce((sum, d) => sum + (d.count || 0), 0);
      const activeSlots = dist.filter((d) => d.count > 0).length;

      let chartBars = dist.map((d) => {
        const pct = Math.round((d.count / maxCount) * 100);
        return `<div class="chart-bar" style="height: ${pct}%" title="${escapeHtml(d.hour)}: ${d.count}"><span class="chart-label">${escapeHtml(d.hour.slice(-5, -3))}</span></div>`;
      }).join("");

      let topTextRows = topTexts.map((t, i) =>
        `<tr class="border-t border-slate-700/50"><td class="py-1 pr-3 text-slate-400">${i + 1}</td><td class="py-1 pr-3 text-white text-sm">${escapeHtml(t.text)}</td><td class="py-1 text-sky-400 font-mono text-sm">${t.count}</td></tr>`
      ).join("");

      dashDiv.innerHTML = `
        <div class="history-dashboard-grid">
          <div class="history-dashboard-card">
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label">${ServerI18n.t("total")}</span>
              <strong class="history-dashboard-value">${totalMessages}</strong>
            </div>
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label" data-i18n="historyActiveSlots">${ServerI18n.t("historyActiveSlots")}</span>
              <strong class="history-dashboard-value">${activeSlots}</strong>
            </div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--chart">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("hourlyDistribution")}</h4>
              <span class="history-dashboard-caption">${hours}h window</span>
            </div>
            <div class="stats-chart">${chartBars || '<span class="text-xs text-slate-400">${ServerI18n.t("noData")}</span>'}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${topTexts.length ? `<table class="w-full text-xs"><tbody>${topTextRows}</tbody></table>` : '<span class="text-xs text-slate-400">${ServerI18n.t("noData")}</span>'}
          </div>
        </div>`;
    } catch (err) {
      console.error("Load stats error:", err);
    }
  }
  // Expose for admin-history.js
  window._loadStats = _loadStats;

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
          progressEl.textContent = ServerI18n.t("replayingProgress").replace("{sent}", data.sent).replace("{total}", data.total);
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
    const allRecords = (window.AdminHistory && window.AdminHistory.allHistoryRecords) || [];
    const displayedRecords = searchTerm
      ? allRecords.filter((r) => (r.text || "").toLowerCase().includes(searchTerm))
      : allRecords;

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
        showToast(ServerI18n.t("replayStarted"), true);
        _updateReplayUI("playing");
        _pollReplayStatus();
      } else {
        const err = await res.json();
        showToast(ServerI18n.t("replayError").replace("{error}", err.error || res.statusText), false);
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
    const allRecords = (window.AdminHistory && window.AdminHistory.allHistoryRecords) || [];
    const displayedRecords = searchTerm
      ? allRecords.filter((r) => (r.text || "").toLowerCase().includes(searchTerm))
      : allRecords;

    const selectedRecords = [];
    checkboxes.forEach((cb) => {
      const idx = parseInt(cb.dataset.recordIndex, 10);
      if (displayedRecords[idx]) selectedRecords.push(displayedRecords[idx]);
    });

    if (selectedRecords.length === 0) return;

    // Initialize recorder
    if (typeof ReplayRecorder === "undefined") {
      showToast(ServerI18n.t("replayRecorderNotLoaded"), false);
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
        showToast(ServerI18n.t("recordingReplay").replace("{count}", data.count).replace("{speed}", speed), true);
        _updateReplayUI("playing");

        // Poll replay status and feed danmu to recorder
        _pollReplayStatusForRecording();
      } else {
        const err = await res.json();
        showToast(ServerI18n.t("replayError").replace("{error}", err.error || res.statusText), false);
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
          progressEl.textContent = ServerI18n.t("recordingProgress").replace("{sent}", data.sent).replace("{total}", data.total);
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
      showToast(ServerI18n.t("recordingSaved"), true);
    }
  }

  async function _exportJsonTimeline() {
    const hours = document.getElementById("historyHours")?.value || "24";
    try {
      const res = await fetch(`/admin/history/export?hours=${hours}`, { credentials: "same-origin" });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        showToast(ServerI18n.t("exportFailed"), false);
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
      showToast(ServerI18n.t("jsonTimelineExported"), true);
    } catch (e) {
      showToast(ServerI18n.t("exportFailed"), false);
    }
  }

  // Expose csrfFetch globally for external admin modules (e.g. admin-scheduler.js)
  window.csrfFetch = csrfFetch;

  // showToast is provided by the shared toast.js utility (window.showToast)

  // Render Login Screen
  function renderLogin() {
    appContainer.innerHTML = `
                    <div class="glass-effect rounded-3xl shadow-2xl p-6 md:p-8 space-y-6 max-w-md mx-auto">
                        <h1 class="text-3xl md:text-4xl font-bold text-center text-sky-300 pb-2" data-i18n="adminLoginTitle">
                            ${ServerI18n.t("adminLoginTitle")}
                        </h1>
                        <form id="loginForm" class="space-y-6" action="/login" method="post">
                            <div>
                                <label for="password" class="text-sm font-medium text-slate-300" data-i18n="password">${ServerI18n.t("password")}</label>
                                <input type="password" id="password" name="password" class="mt-1 w-full p-3 bg-slate-800/80 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all duration-300" required>
                            </div>
                            <button type="submit" class="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-xl transition-colors" data-i18n="login">
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
    const enabledSettingCount = ["Color", "Opacity", "FontSize", "Speed", "FontFamily", "Layout", "Effects"]
      .filter((key) => Array.isArray(currentSettings[key]) && currentSettings[key][0] === true)
      .length;
    const overlayMode = currentSettings.Layout && currentSettings.Layout[3]
      ? escapeHtml(String(currentSettings.Layout[3]).replace(/_/g, " "))
      : "scroll";
    const fontLabel = currentSettings.FontFamily && currentSettings.FontFamily[3]
      ? escapeHtml(String(currentSettings.FontFamily[3]))
      : "NotoSansTC";
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
                    <div class="glass-effect admin-shell rounded-3xl shadow-2xl p-6 md:p-8 space-y-6">
                        <section class="admin-hero rounded-3xl p-5 md:p-6">
                            <div class="flex flex-col gap-5">
                                <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                                    <div class="min-w-0">
                                        <span class="admin-kicker" data-i18n="adminKicker">${ServerI18n.t("adminKicker")}</span>
                                        <h1 class="text-3xl md:text-4xl font-bold text-sky-300 mt-3" data-i18n="adminTitle">
                                            ${ServerI18n.t("adminTitle")}
                                        </h1>
                                        <p class="text-sm md:text-base text-slate-300 mt-2 max-w-2xl" data-i18n="adminSubtitle">
                                            ${ServerI18n.t("adminSubtitle")}
                                        </p>
                                    </div>
                                    <div class="flex items-center gap-2 w-full lg:w-auto">
                                        <label class="stream-mode-toggle" title="${ServerI18n.t("streamModeHelp")}">
                                          <input type="checkbox" id="streamModeToggle" ${document.body.classList.contains("stream-mode") ? "checked" : ""} />
                                          <span class="stream-mode-track" aria-hidden="true"></span>
                                          <span class="stream-mode-label" data-i18n="streamMode">${ServerI18n.t("streamMode")}</span>
                                        </label>
                                        <select id="server-lang-select"
                                          class="bg-slate-800/60 border border-slate-700 text-slate-300 text-xs rounded-lg px-2 py-2 focus:ring-sky-400 focus:border-sky-400">
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
                                <div class="admin-summary-grid">
                                    <div class="admin-summary-card">
                                        <span class="admin-summary-label" data-i18n="adminSummaryWorkspace">${ServerI18n.t("adminSummaryWorkspace")}</span>
                                        <span class="admin-summary-value">${enabledSettingCount} live controls enabled</span>
                                    </div>
                                    <div class="admin-summary-card">
                                        <span class="admin-summary-label" data-i18n="adminSummaryDefaultLayout">${ServerI18n.t("adminSummaryDefaultLayout")}</span>
                                        <span class="admin-summary-value">${overlayMode}</span>
                                    </div>
                                    <div class="admin-summary-card">
                                        <span class="admin-summary-label" data-i18n="adminSummaryActiveFont">${ServerI18n.t("adminSummaryActiveFont")}</span>
                                        <span class="admin-summary-value">${fontLabel}</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <nav class="admin-section rounded-2xl p-4 md:p-5" aria-label="Quick Navigation">
                            <div class="admin-section-heading">
                                <div>
                                    <span class="admin-section-kicker" data-i18n="quickNav">${ServerI18n.t("quickNav")}</span>
                                    <h2 class="text-lg font-bold text-white" data-i18n="navJumpTitle">${ServerI18n.t("navJumpTitle")}</h2>
                                    <p class="text-sm text-slate-300" data-i18n="navShortcutsHint">${ServerI18n.t("navShortcutsHint")}</p>
                                </div>
                            </div>
                            <div class="space-y-3">
                                <div>
                                    <div class="text-xs text-slate-400 uppercase tracking-wide mb-2" data-i18n="navGroupControl">${ServerI18n.t("navGroupControl")}</div>
                                    <div class="admin-chip-nav">
                                        <a href="#sec-color" class="admin-chip" data-i18n="navBasic">${ServerI18n.t("navBasic")}</a>
                                        <a href="#sec-effects" class="admin-chip" data-i18n="navEffects">${ServerI18n.t("navEffects")}</a>
                                        <a href="#sec-themes" class="admin-chip" data-i18n="navThemes">${ServerI18n.t("navThemes")}</a>
                                        <a href="#sec-live-feed" class="admin-chip" data-i18n="navLiveFeed">${ServerI18n.t("navLiveFeed")}</a>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-xs text-slate-400 uppercase tracking-wide mb-2" data-i18n="navGroupModeration">${ServerI18n.t("navGroupModeration")}</div>
                                    <div class="admin-chip-nav">
                                        <a href="#sec-blacklist" class="admin-chip" data-i18n="navBlacklist">${ServerI18n.t("navBlacklist")}</a>
                                        <a href="#sec-history" class="admin-chip" data-i18n="navHistory">${ServerI18n.t("navHistory")}</a>
                                        <a href="#sec-filters" class="admin-chip" data-i18n="navFilters">${ServerI18n.t("navFilters")}</a>
                                        <a href="#sec-security" class="admin-chip" data-i18n="navSecurity">${ServerI18n.t("navSecurity")}</a>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-xs text-slate-400 uppercase tracking-wide mb-2" data-i18n="navGroupAssets">${ServerI18n.t("navGroupAssets")}</div>
                                    <div class="admin-chip-nav">
                                        <a href="#sec-emojis" class="admin-chip" data-i18n="navEmojis">${ServerI18n.t("navEmojis")}</a>
                                        <a href="#sec-stickers" class="admin-chip" data-i18n="navStickers">${ServerI18n.t("navStickers")}</a>
                                        <a href="#sec-sounds" class="admin-chip" data-i18n="navSounds">${ServerI18n.t("navSounds")}</a>
                                        <a href="#sec-polls" class="admin-chip" data-i18n="navPolls">${ServerI18n.t("navPolls")}</a>
                                        <a href="#sec-advanced" class="admin-chip" data-i18n="navAdvanced">${ServerI18n.t("navAdvanced")}</a>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        <div class="admin-content-grid">
                            <div class="admin-primary-stack space-y-6">
                                <section class="admin-section rounded-2xl p-5 md:p-6">
                                    <div class="admin-section-heading">
                                        <div>
                                            <span class="admin-section-kicker" data-i18n="sectionLiveControl">${ServerI18n.t("sectionLiveControl")}</span>
                                            <h2 class="text-xl font-bold text-white" data-i18n="sectionLiveControlTitle">${ServerI18n.t("sectionLiveControlTitle")}</h2>
                                            <p class="text-sm text-slate-300" data-i18n="sectionLiveControlDesc">${ServerI18n.t("sectionLiveControlDesc")}</p>
                                        </div>
                                    </div>
                                    <div id="settings-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <!-- Settings cards will be inserted via insertAdjacentHTML -->
                                    </div>
                                </section>

                                <section class="admin-section rounded-2xl p-5 md:p-6">
                                    <div class="admin-section-heading">
                                        <div>
                                            <span class="admin-section-kicker" data-i18n="sectionModeration">${ServerI18n.t("sectionModeration")}</span>
                                            <h2 class="text-xl font-bold text-white" data-i18n="sectionModerationTitle">${ServerI18n.t("sectionModerationTitle")}</h2>
                                            <p class="text-sm text-slate-300" data-i18n="sectionModerationDesc">${ServerI18n.t("sectionModerationDesc")}</p>
                                        </div>
                                    </div>
                                    <div id="moderation-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <!-- Moderation sections are re-homed here -->
                                    </div>
                                </section>

                                <section class="admin-section rounded-2xl p-5 md:p-6">
                                    <div class="admin-section-heading">
                                        <div>
                                            <span class="admin-section-kicker" data-i18n="sectionAssets">${ServerI18n.t("sectionAssets")}</span>
                                            <h2 class="text-xl font-bold text-white" data-i18n="sectionAssetsTitle">${ServerI18n.t("sectionAssetsTitle")}</h2>
                                            <p class="text-sm text-slate-300" data-i18n="sectionAssetsDesc">${ServerI18n.t("sectionAssetsDesc")}</p>
                                        </div>
                                    </div>
                                    <div class="asset-dashboard-strip">
                                        <div class="asset-dashboard-card">
                                            <span class="asset-dashboard-label" data-i18n="assetMediaLibrary">${ServerI18n.t("assetMediaLibrary")}</span>
                                            <strong data-i18n="assetMediaLibraryTitle">${ServerI18n.t("assetMediaLibraryTitle")}</strong>
                                            <p data-i18n="assetMediaLibraryDesc">${ServerI18n.t("assetMediaLibraryDesc")}</p>
                                        </div>
                                        <div class="asset-dashboard-card">
                                            <span class="asset-dashboard-label" data-i18n="assetVisualSystem">${ServerI18n.t("assetVisualSystem")}</span>
                                            <strong data-i18n="assetVisualSystemTitle">${ServerI18n.t("assetVisualSystemTitle")}</strong>
                                            <p data-i18n="assetVisualSystemDesc">${ServerI18n.t("assetVisualSystemDesc")}</p>
                                        </div>
                                        <div class="asset-dashboard-card">
                                            <span class="asset-dashboard-label" data-i18n="assetExtensions">${ServerI18n.t("assetExtensions")}</span>
                                            <strong data-i18n="assetExtensionsTitle">${ServerI18n.t("assetExtensionsTitle")}</strong>
                                            <p data-i18n="assetExtensionsDesc">${ServerI18n.t("assetExtensionsDesc")}</p>
                                        </div>
                                    </div>
                                    <div id="assets-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <!-- Asset and extension sections are re-homed here -->
                                    </div>
                                </section>

                                <section class="admin-section rounded-2xl p-5 md:p-6">
                                    <details id="sec-advanced" class="group scroll-mt-24" ${isOpen("sec-advanced") ? "open" : ""}>
                                        <summary class="flex items-center justify-between cursor-pointer list-none">
                                            <div>
                                                <span class="admin-section-kicker" data-i18n="sectionAutomation">${ServerI18n.t("sectionAutomation")}</span>
                                                <h3 class="text-lg font-bold text-white" data-i18n="sectionAutomationTitle">${ServerI18n.t("sectionAutomationTitle")}</h3>
                                                <p class="text-sm text-slate-300" data-i18n="sectionAutomationDesc">${ServerI18n.t("sectionAutomationDesc")}</p>
                                            </div>
                                            <span class="text-slate-400 transition-transform group-open:rotate-180">&#8964;</span>
                                        </summary>
                                        <div id="advanced-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                                            <!-- Webhooks & Scheduler sections injected here -->
                                        </div>
                                    </details>
                                </section>
                            </div>

                            <aside class="admin-sidebar">
                                <div class="admin-sidebar-card">
                                    <div class="admin-sidebar-title" data-i18n="sidebarWorkflow">${ServerI18n.t("sidebarWorkflow")}</div>
                                    <p class="admin-sidebar-copy">Treat this page as a control tower: tune the stream on the left, then jump directly to moderation or asset sections from here.</p>
                                    <div class="admin-link-list">
                                        <a href="#sec-history"><span data-i18n="sidebarLinkReviewRecent">${ServerI18n.t("sidebarLinkReviewRecent")}</span><span class="text-slate-400">→</span></a>
                                        <a href="#sec-blacklist"><span data-i18n="sidebarLinkBlockKeywords">${ServerI18n.t("sidebarLinkBlockKeywords")}</span><span class="text-slate-400">→</span></a>
                                        <a href="#sec-effects"><span data-i18n="sidebarLinkRefreshEffects">${ServerI18n.t("sidebarLinkRefreshEffects")}</span><span class="text-slate-400">→</span></a>
                                    </div>
                                </div>

                                <div class="admin-sidebar-card">
                                    <div class="admin-sidebar-title" data-i18n="sidebarRecommendedOrder">${ServerI18n.t("sidebarRecommendedOrder")}</div>
                                    <p class="admin-sidebar-copy">For live tuning, adjust style, verify output in live feed, then move to history and filters only if moderation is needed.</p>
                                    <div class="admin-link-list">
                                        <a href="#sec-color"><span data-i18n="sidebarStep1">${ServerI18n.t("sidebarStep1")}</span><span class="text-slate-400" data-i18n="sidebarStep1Hint">${ServerI18n.t("sidebarStep1Hint")}</span></a>
                                        <a href="#sec-live-feed"><span data-i18n="sidebarStep2">${ServerI18n.t("sidebarStep2")}</span><span class="text-slate-400" data-i18n="sidebarStep2Hint">${ServerI18n.t("sidebarStep2Hint")}</span></a>
                                        <a href="#sec-filters"><span data-i18n="sidebarStep3">${ServerI18n.t("sidebarStep3")}</span><span class="text-slate-400" data-i18n="sidebarStep3Hint">${ServerI18n.t("sidebarStep3Hint")}</span></a>
                                    </div>
                                </div>
                            </aside>
                        </div>
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
                        <small class="text-slate-400 text-xs block mt-2">${ServerI18n.t("speedHint")}</small>
                    `,
      `
                        <label for="setting-speed-3" class="text-sm font-medium text-slate-300">${ServerI18n.t("specificSpeed")}</label>
                        <input id="setting-speed-3" type="number" class="setting-input mt-1 w-full p-2.5 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Speed" data-index="3" value="${escapeHtml(String(currentSettings.Speed[3]))}" min="${settingRanges.Speed.min}" max="${settingRanges.Speed.max}" step="1">
                        <small class="text-slate-400 text-xs block mt-2">${ServerI18n.t("speedHint")}</small>
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
                <input type="file" id="fontUploadInput" accept=".ttf" class="mt-1 w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-600 file:text-white hover:file:bg-sky-500"/>
                <button id="uploadFontBtn" class="mt-2 w-full bg-sky-600 hover:bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg">${ServerI18n.t("uploadFont")}</button>
            </div>
            <small class="text-slate-400 text-xs block mt-2">${ServerI18n.t("fontUploadHint")}</small>
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

    // Layout Setting Card
    const layoutEnabled = currentSettings.Layout ? currentSettings.Layout[0] !== false : true;
    const currentLayout = currentSettings.Layout ? currentSettings.Layout[3] : "scroll";
    const layoutOptions = ["scroll", "top_fixed", "bottom_fixed", "float", "rise"];
    const layoutLabels = {
      scroll: ServerI18n.t("layoutScroll"),
      top_fixed: ServerI18n.t("layoutTopFixed"),
      bottom_fixed: ServerI18n.t("layoutBottomFixed"),
      float: ServerI18n.t("layoutFloat"),
      rise: ServerI18n.t("layoutRise"),
    };
    const layoutCardContent = `
      <div>
        <label class="text-sm font-medium text-slate-300">${ServerI18n.t("defaultLayout")}</label>
        <div class="flex flex-wrap gap-2 mt-2">
          ${layoutOptions.map(mode => `
            <button type="button"
              class="layout-btn px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${mode === currentLayout ? "bg-sky-600 border-sky-500 text-white" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"}"
              data-mode="${mode}">${layoutLabels[mode] || mode}</button>
          `).join("")}
        </div>
        <input type="hidden" class="setting-input" data-key="Layout" data-index="3" id="layoutSelect" value="${escapeHtml(currentLayout)}">
      </div>`;
    settingsGrid.insertAdjacentHTML("beforeend", settingCard(
      "Layout",
      ServerI18n.t("layoutSetting"),
      layoutEnabled ? ServerI18n.t("layoutDescEnabled") : ServerI18n.t("layoutDescDisabled"),
      layoutEnabled,
      layoutCardContent,
      layoutCardContent
    ));
    // Layout button click handler
    setTimeout(() => {
      const layoutBtns = document.querySelectorAll(".layout-btn");
      layoutBtns.forEach(btn => {
        btn.addEventListener("click", async () => {
          const mode = btn.dataset.mode;
          document.getElementById("layoutSelect").value = mode;
          layoutBtns.forEach(b => {
            b.className = b.className.replace(/bg-sky-600 border-sky-500 text-white/, "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700");
          });
          btn.className = btn.className.replace(/bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700/, "bg-sky-600 border-sky-500 text-white");
          await updateSetting("Layout", mode, 3);
        });
      });
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
            <span class="text-xs text-slate-400 col-span-2">${ServerI18n.t("loadingEffectsAdmin")}</span>
          </div>
        </div>
      </div>
    `);

    // Theme Management Card
    settingsGrid.insertAdjacentHTML("beforeend", `
      <details id="sec-themes" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent scroll-mt-24" ${isOpen("sec-themes") ? "open" : ""}>
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <div>
            <h3 class="text-lg font-bold text-white" data-i18n="styleThemePacks">${ServerI18n.t("styleThemePacks")}</h3>
            <p class="text-sm text-slate-300" data-i18n="themesSectionDesc">${ServerI18n.t("themesSectionDesc")}</p>
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
            <span class="text-xs text-slate-400">Loading themes...</span>
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
                                <input type="text" id="newKeywordInput" placeholder="${ServerI18n.t("enterKeyword")}" class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all duration-300">
                                <button id="addKeywordBtn" class="mt-3 w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-xl transition-colors">${ServerI18n.t("addKeyword")}</button>
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
                        <div class="mt-4 pt-4 border-t border-slate-700/50 history-section-body">
                            <div id="statsDashboard"></div>
                            <div class="space-y-3">
                                <div class="history-command-bar">
                                    <label class="text-sm font-medium text-slate-300">${ServerI18n.t("timeRange")}</label>
                                    <select id="historyHours" class="px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-sky-400 focus:border-sky-400">
                                        <option value="1">${ServerI18n.t("last1Hour")}</option>
                                        <option value="6">${ServerI18n.t("last6Hours")}</option>
                                        <option value="24" selected>${ServerI18n.t("last24Hours")}</option>
                                        <option value="72">${ServerI18n.t("last3Days")}</option>
                                        <option value="168">${ServerI18n.t("last7Days")}</option>
                                    </select>
                                    <button id="refreshHistoryBtn" class="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-colors text-sm">${ServerI18n.t("refreshBtn")}</button>
                                    <button id="exportHistoryBtn" class="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors text-sm">${ServerI18n.t("exportCSV")}</button>
                                    <button id="clearHistoryBtn" class="px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white rounded-lg transition-colors text-sm">${ServerI18n.t("clearAll")}</button>
                                    <label class="flex items-center gap-2 text-xs text-slate-400 cursor-pointer select-none ml-auto">
                                        <input type="checkbox" id="historyAutoRefresh" class="accent-sky-500">
                                        ${ServerI18n.t("autoRefresh")}
                                    </label>
                                </div>
                                <input id="historySearch" type="search" placeholder="${ServerI18n.t("searchHistory")}"
                                    class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm
                                           placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400">
                                <div id="replayToolbar" class="history-replay-toolbar">
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
                                <div id="historyStats" class="history-stats-strip text-sm text-slate-400"></div>
                                <div class="history-list-shell">
                                <div class="flex items-center gap-2 mb-1">
                                    <label class="flex items-center gap-2 text-xs text-slate-400 cursor-pointer select-none">
                                        <input type="checkbox" id="historySelectAll" class="accent-sky-500">
                                        ${ServerI18n.t("selectAll")}
                                    </label>
                                </div>
                                <div id="danmuHistoryList" class="space-y-2 max-h-96 overflow-y-auto">
                                    <!-- History will be listed here -->
                                </div>
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
                                <p class="text-sm text-slate-300" data-i18n="pollSectionDesc">${ServerI18n.t("pollSectionDesc")}</p>
                            </div>
                            <span class="text-slate-400 transition-transform group-open:rotate-180">\u2304</span>
                        </summary>
                        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-4">
                            <div>
                                <label for="pollQuestion" class="text-sm font-medium text-slate-300" data-i18n="pollQuestion">${ServerI18n.t("pollQuestion")}</label>
                                <input type="text" id="pollQuestion" placeholder="What's your favorite...?" maxlength="200"
                                    class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all duration-300">
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
                                <button id="pollCreateBtn" class="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors text-sm font-semibold" data-i18n="pollCreate">${ServerI18n.t("pollCreate")}</button>
                                <button id="pollEndBtn" class="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg transition-colors text-sm font-semibold" data-i18n="pollEnd">${ServerI18n.t("pollEnd")}</button>
                                <button id="pollResetBtn" class="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors text-sm font-semibold" data-i18n="pollReset">${ServerI18n.t("pollReset")}</button>
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
                                    class="w-full px-3 py-2 pr-10 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400">
                                <button type="button" class="password-toggle" data-target="pwCurrent" aria-label="Toggle password visibility">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                </button>
                            </div>
                            <div class="password-wrapper">
                                <input id="pwNew" type="password" placeholder="${ServerI18n.t("newPassword")}"
                                    class="w-full px-3 py-2 pr-10 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400">
                                <button type="button" class="password-toggle" data-target="pwNew" aria-label="Toggle password visibility">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                </button>
                            </div>
                            <div class="password-wrapper">
                                <input id="pwConfirm" type="password" placeholder="${ServerI18n.t("confirmNewPassword")}"
                                    class="w-full px-3 py-2 pr-10 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400">
                                <button type="button" class="password-toggle" data-target="pwConfirm" aria-label="Toggle password visibility">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                </button>
                            </div>
                            <button id="changePasswordBtn"
                                class="w-full px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-colors text-sm font-semibold">
                                ${ServerI18n.t("changePasswordBtn")}
                            </button>
                        </div>
                    </details>

                    <details id="sec-ws-auth" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent scroll-mt-24" ${isOpen("sec-ws-auth") ? "open" : ""}>
                        <summary class="flex items-center justify-between cursor-pointer list-none">
                            <div>
                                <h3 class="text-lg font-bold text-white">${ServerI18n.t("wsAuthTitle")}</h3>
                                <p class="text-sm text-slate-300">${ServerI18n.t("wsAuthDesc")}</p>
                            </div>
                            <span class="text-slate-400 transition-transform group-open:rotate-180">⌄</span>
                        </summary>
                        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-4">
                            <label class="flex items-center gap-3 cursor-pointer">
                                <input id="wsAuthRequireToggle" type="checkbox" class="toggle-checkbox w-4 h-4 accent-sky-500" />
                                <span class="text-sm text-white">${ServerI18n.t("wsAuthRequireLabel")}</span>
                            </label>
                            <p class="text-xs text-slate-400">${ServerI18n.t("wsAuthRequireHint")}</p>
                            <div class="space-y-2">
                                <label for="wsAuthTokenInput" class="block text-sm text-slate-200">${ServerI18n.t("wsAuthTokenLabel")}</label>
                                <div class="password-wrapper">
                                    <input id="wsAuthTokenInput" type="password"
                                        class="w-full px-3 py-2 pr-10 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm font-mono placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                        placeholder="${ServerI18n.t("wsAuthTokenPlaceholder")}" autocomplete="off" spellcheck="false">
                                    <button type="button" class="password-toggle" data-target="wsAuthTokenInput" aria-label="Toggle token visibility">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                    </button>
                                </div>
                                <p class="text-xs text-slate-400">${ServerI18n.t("wsAuthTokenHint")}</p>
                            </div>
                            <div class="flex gap-2">
                                <button id="wsAuthSaveBtn"
                                    class="flex-1 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-colors text-sm font-semibold">
                                    ${ServerI18n.t("wsAuthSaveBtn")}
                                </button>
                                <button id="wsAuthRotateBtn"
                                    class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm font-semibold">
                                    ${ServerI18n.t("wsAuthRotateBtn")}
                                </button>
                                <button id="wsAuthCopyBtn"
                                    class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm font-semibold">
                                    ${ServerI18n.t("wsAuthCopyBtn")}
                                </button>
                            </div>
                        </div>
                    </details>
                `);

    addEventListeners();
    initAdminSectionLayout();
    scheduleIdleTask(initEffectsManagement);

    // Notify add-on scripts (admin-sounds.js, admin-webhooks.js, etc.)
    // that the control panel has been (re)built, so they can re-inject.
    document.dispatchEvent(new CustomEvent("admin-panel-rendered"));
  }

  // Attach Event Listeners
  function addEventListeners() {
    if (window.ServerI18n && typeof window.ServerI18n.bindLanguageSelector === "function") {
      window.ServerI18n.bindLanguageSelector();
    }

    // Stream mode toggle — hide low-frequency sections during live streaming.
    // Preference persisted in localStorage so it survives reloads.
    const streamToggle = document.getElementById("streamModeToggle");
    if (streamToggle) {
      // Apply initial state (set by DOMContentLoaded handler too, but safe to re-apply)
      document.body.classList.toggle("stream-mode", streamToggle.checked);
      streamToggle.addEventListener("change", function () {
        document.body.classList.toggle("stream-mode", this.checked);
        try {
          localStorage.setItem("danmu-stream-mode", this.checked ? "1" : "0");
        } catch (e) {
          /* localStorage can fail in private mode — toggle still works session-local */
        }
      });
    }

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

    // Toggle Checkbox (generic settings toggles — skip elements without a
    // `name` attribute so bespoke .toggle-checkbox widgets like wsAuthRequireToggle
    // don't accidentally POST to /admin/Set with an empty key).
    document.querySelectorAll(".toggle-checkbox").forEach((toggle) => {
      if (!toggle.name) return;
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

    // History/blacklist event listeners moved to admin-history.js

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

    // WS auth toggle/token — hydrate current state then wire save/rotate/copy
    (function initWsAuthPanel() {
      const toggle = document.getElementById("wsAuthRequireToggle");
      const tokenInput = document.getElementById("wsAuthTokenInput");
      const saveBtn = document.getElementById("wsAuthSaveBtn");
      const rotateBtn = document.getElementById("wsAuthRotateBtn");
      const copyBtn = document.getElementById("wsAuthCopyBtn");
      if (!toggle || !tokenInput || !saveBtn || !rotateBtn || !copyBtn) return;

      // The generic `.toggle-checkbox` handler (in addEventListeners above)
      // skips elements without a `name` attribute, so this widget is not
      // bound to the /admin/Set auto-POST path. Our Save button is the only
      // thing that writes to the server.

      function applyState(state) {
        toggle.checked = !!state.require_token;
        tokenInput.value = state.token || "";
      }

      fetch("/admin/ws-auth", { credentials: "same-origin" })
        .then((r) => (r.ok ? r.json() : Promise.reject(r)))
        .then(applyState)
        .catch(() => {
          /* silent — admin can still fill in fields manually */
        });

      saveBtn.addEventListener("click", async () => {
        const body = {
          require_token: toggle.checked,
          token: tokenInput.value.trim(),
        };
        if (body.require_token && !body.token) {
          showToast(ServerI18n.t("wsAuthTokenRequired"), false);
          return;
        }
        try {
          const res = await csrfFetch("/admin/ws-auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          const data = await res.json();
          if (res.ok) {
            applyState(data);
            showToast(ServerI18n.t("wsAuthSaved"), true);
          } else {
            showToast(data.error || ServerI18n.t("wsAuthSaveFailed"), false);
          }
        } catch (e) {
          showToast(ServerI18n.t("wsAuthSaveFailed"), false);
        }
      });

      rotateBtn.addEventListener("click", async () => {
        try {
          const res = await csrfFetch("/admin/ws-auth/rotate", { method: "POST" });
          const data = await res.json();
          if (res.ok) {
            applyState(data);
            showToast(ServerI18n.t("wsAuthRotated"), true);
          } else {
            showToast(data.error || ServerI18n.t("wsAuthSaveFailed"), false);
          }
        } catch (e) {
          showToast(ServerI18n.t("wsAuthSaveFailed"), false);
        }
      });

      copyBtn.addEventListener("click", async () => {
        const value = tokenInput.value;
        if (!value) {
          showToast(ServerI18n.t("wsAuthTokenEmpty"), false);
          return;
        }
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(value);
          } else {
            // Fallback for non-HTTPS dev — select + execCommand still ships
            // in Firefox/Safari.
            const originalType = tokenInput.type;
            tokenInput.type = "text";
            tokenInput.select();
            document.execCommand("copy");
            tokenInput.type = originalType;
          }
          showToast(ServerI18n.t("wsAuthCopied"), true);
        } catch (e) {
          showToast(ServerI18n.t("wsAuthCopyFailed"), false);
        }
      });
    })();

    // Font upload button event listeners
    const uploadFontBtn = document.getElementById("uploadFontBtn");
    if (uploadFontBtn) {
      uploadFontBtn.addEventListener("click", () =>
        handleFontUpload("fontUploadInput", "uploadFontBtn")
      );
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
              window.AdminHistory && window.AdminHistory.fetchBlacklist();
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
    if (_adminSectionObserver) {
      _adminSectionObserver.disconnect();
      _adminSectionObserver = null;
    }
    if (_replayPollTimer) {
      clearInterval(_replayPollTimer);
      _replayPollTimer = null;
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
