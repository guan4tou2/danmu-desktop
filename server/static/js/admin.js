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
            <div class="stats-chart">${chartBars || `<span class="text-xs text-slate-400">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${topTexts.length ? `<table class="w-full text-xs"><tbody>${topTextRows}</tbody></table>` : `<span class="text-xs text-slate-400">${ServerI18n.t("noData")}</span>`}
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

  // Render Login Screen — mirrors prototype AdminLogin (hero-scenes.jsx):
  // brand lockup, mono labels, cyan sign-in, status chip row.
  function renderLogin() {
    const version = (window.DANMU_CONFIG && window.DANMU_CONFIG.appVersion) || "";
    appContainer.innerHTML = `
      <div class="admin-login-shell">
        <div class="admin-login-card">
          <div class="admin-login-hero">
            <h1 class="hud-hero-title is-large">Danmu Fire</h1>
            <p class="admin-login-subtitle" data-i18n="adminLoginSubtitle">${ServerI18n.t("adminLoginSubtitle")}</p>
          </div>
          <form id="loginForm" class="admin-login-form" action="/login" method="post" autocomplete="off">
            <div class="admin-login-field">
              <label class="admin-login-label" for="username" data-i18n="adminLoginUsernameLabel">${ServerI18n.t("adminLoginUsernameLabel")}</label>
              <input class="admin-login-input" type="text" id="username" name="username" value="admin" autocomplete="username" />
            </div>
            <div class="admin-login-field">
              <label class="admin-login-label" for="password" data-i18n="adminLoginPasswordLabel">${ServerI18n.t("adminLoginPasswordLabel")}</label>
              <input class="admin-login-input" type="password" id="password" name="password" autocomplete="current-password" required />
            </div>
            <button class="admin-login-submit" type="submit" data-i18n="adminLoginSignIn">${ServerI18n.t("adminLoginSignIn")}</button>
          </form>
          <div class="admin-login-chiprow">
            <span class="admin-login-chip is-accent">
              <span class="hud-dot is-success" aria-hidden="true"></span>
              <span data-i18n="adminLoginServerOnline">${ServerI18n.t("adminLoginServerOnline")}</span>
            </span>
            ${version ? `<span class="admin-login-chip">v${version}</span>` : ""}
          </div>
        </div>
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
                    <div id="sec-${id.toLowerCase()}" class="admin-v3-card">
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

    const kpiBars = (seed, len = 12) => {
      const out = [];
      for (let i = 0; i < len; i++) {
        const v = 3 + ((seed * 7 + i * 13) % 8) + Math.floor(i / 3);
        out.push(`<span style="height:${Math.min(16, v * 1.1)}px;opacity:${0.3 + (v / 11) * 0.6}"></span>`);
      }
      return out.join("");
    };
    const telemBars = (pattern) =>
      pattern.map((b) => `<span style="height:${b * 10}%;opacity:${0.3 + b * 0.08}"></span>`).join("");
    const broadcasting = overlayMode && overlayMode !== "off";
    const httpPort = window.location.port || (window.location.protocol === "https:" ? "443" : "80");

    appContainer.innerHTML = `
                    <div class="admin-dash-grid" data-active-route="dashboard">
                        <aside class="admin-dash-sidebar" aria-label="Admin navigation">
                            <div class="admin-dash-brand">
                                <span class="admin-dash-brand-hero">Danmu Fire</span>
                                <span class="admin-dash-brand-suffix">ADMIN · v${window.APP_VERSION || "4.8.7"}</span>
                            </div>
                            <nav class="admin-dash-nav" role="tablist" aria-label="Admin pages">
                                <div class="admin-dash-nav-label">總覽</div>
                                <button type="button" class="admin-dash-nav-row is-active" data-route="dashboard" role="tab" aria-selected="true">
                                    <span class="admin-dash-nav-icon">◉</span>
                                    <span>控制台</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="messages" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">≡</span>
                                    <span>訊息紀錄</span>
                                    <span class="admin-dash-nav-live"></span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="history" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">↳</span>
                                    <span>時間軸匯出</span>
                                </button>

                                <div class="admin-dash-nav-label" style="margin-top:16px">互動</div>
                                <button type="button" class="admin-dash-nav-row" data-route="polls" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◈</span>
                                    <span>投票</span>
                                    <span class="admin-dash-nav-live"></span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="widgets" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⬚</span>
                                    <span>Overlay Widgets</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="themes" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">❖</span>
                                    <span>風格主題包</span>
                                    <span class="admin-dash-nav-badge" data-count-themes>—</span>
                                </button>

                                <div class="admin-dash-nav-label" style="margin-top:16px">審核</div>
                                <button type="button" class="admin-dash-nav-row" data-route="moderation" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⊘</span>
                                    <span>敏感字 & 黑名單</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="ratelimit" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◑</span>
                                    <span>速率限制</span>
                                </button>

                                <div class="admin-dash-nav-label" style="margin-top:16px">設定</div>
                                <button type="button" class="admin-dash-nav-row" data-route="effects" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">✦</span>
                                    <span>效果庫 .dme</span>
                                    <span class="admin-dash-nav-badge" data-count-effects>—</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="plugins" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⬢</span>
                                    <span>伺服器插件</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="fonts" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⌂</span>
                                    <span>字型管理</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="system" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⚙</span>
                                    <span>系統 & 指紋</span>
                                </button>
                            </nav>
                            <div class="admin-dash-telem">
                                <div class="admin-dash-telem-head">
                                    <span>TELEMETRY</span>
                                    <span class="status">● HEALTHY</span>
                                </div>
                                <div class="admin-dash-telem-grid">
                                    <div>CPU <span>12%</span></div>
                                    <div>WS <span>${enabledSettingCount}</span></div>
                                    <div>MEM <span>218 MB</span></div>
                                    <div>RATE <span>4.2/s</span></div>
                                </div>
                            </div>
                        </aside>

                        <div class="admin-dash-main">
                            <header class="admin-dash-topbar">
                                <div class="admin-dash-topbar-title">
                                    <span class="hud-label is-accent" data-route-kicker>DASHBOARD · 控制台</span>
                                    <h1 data-route-title>
                                        <span>哈囉</span>
                                        <span class="accent">admin</span><span>,</span>
                                        <span>活動進行中</span>
                                    </h1>
                                </div>
                                <div class="admin-dash-topbar-actions">
                                    <div class="admin-dash-search" aria-hidden="true">
                                        <span>⌕</span>
                                        <span data-i18n="adminSearchHint">${ServerI18n.t("adminSearchHint") || "搜尋"}</span>
                                        <span class="sep">⌘K</span>
                                    </div>
                                    <label class="stream-mode-toggle" title="${ServerI18n.t("streamModeHelp")}">
                                      <input type="checkbox" id="streamModeToggle" ${document.body.classList.contains("stream-mode") ? "checked" : ""} />
                                      <span class="stream-mode-track" aria-hidden="true"></span>
                                      <span class="stream-mode-label" data-i18n="streamMode">${ServerI18n.t("streamMode")}</span>
                                    </label>
                                    <select id="server-lang-select" aria-label="Language"
                                      class="bg-slate-800/60 border border-slate-700 text-slate-300 text-xs rounded-lg px-2 py-2 focus:ring-sky-400 focus:border-sky-400">
                                      <option value="en" ${ServerI18n.currentLang === "en" ? "selected" : ""}>EN</option>
                                      <option value="zh" ${ServerI18n.currentLang === "zh" ? "selected" : ""}>ZH</option>
                                      <option value="ja" ${ServerI18n.currentLang === "ja" ? "selected" : ""}>JA</option>
                                      <option value="ko" ${ServerI18n.currentLang === "ko" ? "selected" : ""}>KO</option>
                                    </select>
                                    <button class="admin-dash-broadcast" type="button" aria-live="polite">
                                        <span class="dot"></span>
                                        ${broadcasting ? "BROADCASTING" : "STANDBY"}
                                    </button>
                                    <button id="logoutButton" class="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                                        <span data-i18n="logout">${ServerI18n.t("logout")}</span>
                                    </button>
                                </div>
                            </header>

                            <section class="admin-kpi-strip" data-route-view="dashboard">
                                <div class="admin-kpi-tile">
                                    <div class="admin-kpi-tile-head">
                                        <span class="label">即時控制</span>
                                        <span class="en">LIVE CONTROLS</span>
                                    </div>
                                    <div class="admin-kpi-tile-value">${enabledSettingCount}</div>
                                    <div class="admin-kpi-tile-bars">${kpiBars(enabledSettingCount + 3)}</div>
                                    <div class="admin-kpi-tile-delta is-success">+${enabledSettingCount} / 7 enabled</div>
                                </div>
                                <div class="admin-kpi-tile">
                                    <div class="admin-kpi-tile-head">
                                        <span class="label">預設模式</span>
                                        <span class="en">OVERLAY MODE</span>
                                    </div>
                                    <div class="admin-kpi-tile-value">${overlayMode}</div>
                                    <div class="admin-kpi-tile-bars">${kpiBars((overlayMode || "x").length + 5)}</div>
                                    <div class="admin-kpi-tile-delta is-muted">FONT · ${fontLabel}</div>
                                </div>
                            </section>

                            <div id="settings-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6 admin-route-sections">
                                <!-- display setting cards -->
                            </div>
                            <div id="moderation-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6 admin-route-sections">
                                <!-- moderation sections -->
                            </div>
                            <div id="assets-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6 admin-route-sections">
                                <!-- assets sections -->
                            </div>
                            <details id="sec-advanced" class="admin-route-sections" open>
                                <summary class="sr-only">${ServerI18n.t("sectionAutomationTitle") || "Advanced"}</summary>
                                <div id="advanced-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <!-- webhooks & scheduler -->
                                </div>
                            </details>
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

    // Effects Management — AdminEffectsPage layout (1fr + 340px YAML inspector)
    settingsGrid.insertAdjacentHTML("beforeend", `
      <div id="sec-effects-mgmt" class="hud-page-stack lg:col-span-2">
        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:16px">
            <div class="hud-filter-row" id="effectsFilterRow">
              <span class="hud-filter-chip is-active" data-effect-filter="ALL">\u5168\u90e8 \u2014</span>
            </div>
            <div class="flex items-center justify-between" style="gap:8px">
              <p class="text-xs text-slate-400 m-0">${ServerI18n.t("effectsManagementDesc")}</p>
              <div class="flex items-center" style="gap:6px">
                <button id="effectReloadBtn" class="hud-toolbar-action" type="button">
                  \u21bb ${ServerI18n.t("reload")}
                </button>
                <label for="effectUploadInput" class="hud-toolbar-action" style="cursor:pointer">
                  + ${ServerI18n.t("uploadDme")}
                </label>
                <input type="file" id="effectUploadInput" accept=".dme" class="hidden">
              </div>
            </div>
            <div id="effectsList" class="hud-effects-grid">
              <span class="text-xs text-slate-400" style="grid-column:1 / -1">${ServerI18n.t("loadingEffectsAdmin")}</span>
            </div>
          </div>

          <aside class="hud-inspector" id="effectsInspector">
            <div class="hud-inspector-head">
              <span class="hud-status-dot is-paused" id="effectsInspectorDot"></span>
              <span id="effectsInspectorTitle" style="font-size:13px;font-weight:600;color:var(--color-text-strong)">\u2014</span>
              <span class="admin-v3-card-kicker" id="effectsInspectorKicker" style="margin:0">IDLE</span>
            </div>
            <pre class="hud-inspector-body" id="effectsInspectorBody"># \u9ede\u9078\u4e00\u500b\u6548\u679c\u4ee5\u986f\u793a YAML \u5167\u5bb9</pre>
            <div class="hud-inspector-foot">
              <button type="button" class="hud-toolbar-action" id="effectsInspectorReload" style="flex:1">\u21bb RELOAD</button>
              <button type="button" class="hud-toolbar-action is-primary" id="effectsInspectorEdit" style="flex:1">EDIT</button>
            </div>
          </aside>
        </div>
      </div>
    `);

    // Theme Management Card
    settingsGrid.insertAdjacentHTML("beforeend", `
      <details id="sec-themes" class="group admin-v3-card" ${isOpen("sec-themes") ? "open" : ""}>
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

    // Moderation Overview (AdminModerationPage layout): stats strip + banned/blacklist panel
    settingsGrid.insertAdjacentHTML("beforeend", `
      <div id="sec-blacklist" class="hud-page-stack lg:col-span-2">
        <div class="hud-stats-strip" id="modStatsStrip" style="grid-template-columns:repeat(5, minmax(0, 1fr))">
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-en">RULES</span>
            <span class="hud-stat-tile-value" data-mod-stat="rules">\u2014</span>
            <span class="hud-stat-tile-label">\u898f\u5247\u6578</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-en">BANNED</span>
            <span class="hud-stat-tile-value is-danger" data-mod-stat="banned">\u2014</span>
            <span class="hud-stat-tile-label">\u9ed1\u540d\u55ae</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-en">MASKED \u00b7 24H</span>
            <span class="hud-stat-tile-value is-amber" data-mod-stat="masked">\u2014</span>
            <span class="hud-stat-tile-label">\u4eca\u65e5\u906e\u7f69</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-en">BLOCKED \u00b7 24H</span>
            <span class="hud-stat-tile-value is-danger" data-mod-stat="blocked">\u2014</span>
            <span class="hud-stat-tile-label">\u4eca\u65e5\u5c01\u9396</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-en">REVIEW QUEUE</span>
            <span class="hud-stat-tile-value is-cyan" data-mod-stat="review">\u2014</span>
            <span class="hud-stat-tile-label">\u5f85\u5be9\u6838</span>
          </div>
        </div>

        <div class="hud-inspector hud-blacklist-panel" style="min-height:auto">
          <div class="hud-inspector-head">
            <span class="hud-status-dot is-danger"></span>
            <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">${ServerI18n.t("blacklistManagement")}</span>
            <span class="admin-v3-card-kicker" style="margin:0">KEYWORD \u00b7 BANNED</span>
            <span style="margin-left:auto;font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted);letter-spacing:0.1em" id="modBlacklistCount">\u2014 words</span>
          </div>
          <div style="padding:14px;display:grid;grid-template-columns:1fr auto;gap:8px;border-bottom:1px solid var(--hud-line-strong)">
            <input type="text" id="newKeywordInput" placeholder="${ServerI18n.t("enterKeyword")}"
              class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-sky-400 focus:border-sky-400">
            <button id="addKeywordBtn" type="button" class="hud-toolbar-action is-primary">+ ${ServerI18n.t("addKeyword")}</button>
          </div>
          <div id="blacklistKeywords" class="max-h-72 overflow-y-auto" style="padding:8px 14px">
            <!-- Keywords will be listed here -->
          </div>
        </div>
      </div>
    `);

    // Danmu History Card
    settingsGrid.insertAdjacentHTML("beforeend", `
                    <details id="sec-history" class="group admin-v3-card lg:col-span-2" ${isOpen("sec-history") ? "open" : ""}>
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
                    <details id="sec-polls" class="group admin-v3-card" ${isOpen("sec-polls") ? "open" : ""}>
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

    // System Overview (AdminSystemPage layout): Server block + Rate Limits + Backup/Danger
    settingsGrid.insertAdjacentHTML("beforeend", `
      <div id="sec-system-overview" class="hud-page-stack lg:col-span-2">
        <div class="hud-system-grid">
          <div class="hud-inspector hud-system-server" style="min-height:auto">
            <div class="hud-inspector-head">
              <span class="hud-status-dot is-live"></span>
              <span style="font-size:14px;font-weight:600;color:var(--color-text-strong)">Danmu Server</span>
              <span class="admin-v3-card-kicker" id="sysoVersion" style="margin:0">v\u2014</span>
              <span style="margin-left:auto;font-family:var(--font-mono);font-size:10px;color:#86efac;letter-spacing:0.12em" id="sysoUptime">UPTIME \u2014</span>
            </div>
            <div style="padding:16px;display:grid;grid-template-columns:repeat(3, 1fr);gap:12px">
              <div class="hud-kv"><span class="hud-kv-k">HTTP</span><span class="hud-kv-v" id="sysoHttpPort">:\u2014</span></div>
              <div class="hud-kv"><span class="hud-kv-k">WS</span><span class="hud-kv-v" id="sysoWsPort">:\u2014</span></div>
              <div class="hud-kv"><span class="hud-kv-k">BIND</span><span class="hud-kv-v" id="sysoBind">\u2014</span></div>
              <div class="hud-kv"><span class="hud-kv-k">WS CLIENTS</span><span class="hud-kv-v" id="sysoWsClients">\u2014</span></div>
              <div class="hud-kv"><span class="hud-kv-k">QUEUE</span><span class="hud-kv-v" id="sysoQueue">\u2014</span></div>
              <div class="hud-kv"><span class="hud-kv-k">WIDGETS</span><span class="hud-kv-v" id="sysoWidgets">\u2014</span></div>
            </div>
            <div style="padding:0 16px 16px 16px">
              <div style="padding:12px;background:color-mix(in srgb, var(--color-bg-deep) 65%, transparent);border-radius:4px;font-family:var(--font-mono);font-size:11px">
                <div class="admin-v3-card-kicker" style="margin:0 0 6px 0">PUBLIC URL</div>
                <div id="sysoPublicUrl" style="color:var(--color-primary);word-break:break-all">${location.origin}</div>
                <div style="margin-top:4px;color:var(--color-text-muted);font-size:10px">\u89c0\u773e\u6383\u78bc\u5373\u53ef\u52a0\u5165</div>
              </div>
            </div>
          </div>

          <div class="hud-inspector hud-system-rates" style="min-height:auto">
            <div class="hud-inspector-head">
              <span class="admin-v3-card-kicker" style="margin:0">RATE LIMITS \u00b7 \u53cd\u5237\u5c4f</span>
            </div>
            <div style="padding:16px;display:flex;flex-direction:column;gap:14px" id="sysoRatesBody">
              <div class="hud-rate-item" data-rate="fire">
                <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                  <span style="color:var(--color-text-strong)">\u6bcf\u7528\u6236 \u00b7 FIRE</span>
                  <span style="margin-left:auto;font-family:var(--font-mono);color:var(--color-primary);font-weight:600" data-rate-val>\u2014</span>
                </div>
                <div style="margin-top:6px;height:4px;border-radius:2px;background:color-mix(in srgb, var(--color-bg-deep) 60%, transparent);overflow:hidden">
                  <div style="width:40%;height:100%;background:var(--color-primary);opacity:0.7" data-rate-bar></div>
                </div>
                <div style="margin-top:2px;font-family:var(--font-mono);font-size:9px;color:var(--color-text-muted);letter-spacing:0.1em" data-rate-cap>\u2014</div>
              </div>
              <div class="hud-rate-item" data-rate="api">
                <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                  <span style="color:var(--color-text-strong)">\u6bcf\u7528\u6236 \u00b7 API</span>
                  <span style="margin-left:auto;font-family:var(--font-mono);color:var(--color-primary);font-weight:600" data-rate-val>\u2014</span>
                </div>
                <div style="margin-top:6px;height:4px;border-radius:2px;background:color-mix(in srgb, var(--color-bg-deep) 60%, transparent);overflow:hidden">
                  <div style="width:40%;height:100%;background:var(--color-primary);opacity:0.7" data-rate-bar></div>
                </div>
                <div style="margin-top:2px;font-family:var(--font-mono);font-size:9px;color:var(--color-text-muted);letter-spacing:0.1em" data-rate-cap>\u2014</div>
              </div>
              <div class="hud-rate-item" data-rate="admin">
                <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                  <span style="color:var(--color-text-strong)">ADMIN \u00b7 \u4fdd\u8b77</span>
                  <span style="margin-left:auto;font-family:var(--font-mono);color:var(--color-primary);font-weight:600" data-rate-val>\u2014</span>
                </div>
                <div style="margin-top:6px;height:4px;border-radius:2px;background:color-mix(in srgb, var(--color-bg-deep) 60%, transparent);overflow:hidden">
                  <div style="width:40%;height:100%;background:var(--color-primary);opacity:0.7" data-rate-bar></div>
                </div>
                <div style="margin-top:2px;font-family:var(--font-mono);font-size:9px;color:var(--color-text-muted);letter-spacing:0.1em" data-rate-cap>\u2014</div>
              </div>
              <div class="hud-rate-item" data-rate="login">
                <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                  <span style="color:var(--color-text-strong)">LOGIN \u00b7 \u767b\u5165</span>
                  <span style="margin-left:auto;font-family:var(--font-mono);color:var(--color-primary);font-weight:600" data-rate-val>\u2014</span>
                </div>
                <div style="margin-top:6px;height:4px;border-radius:2px;background:color-mix(in srgb, var(--color-bg-deep) 60%, transparent);overflow:hidden">
                  <div style="width:20%;height:100%;background:var(--color-primary);opacity:0.7" data-rate-bar></div>
                </div>
                <div style="margin-top:2px;font-family:var(--font-mono);font-size:9px;color:var(--color-text-muted);letter-spacing:0.1em" data-rate-cap>\u2014</div>
              </div>
            </div>
          </div>

          <div class="hud-inspector hud-system-backup" style="min-height:auto">
            <div class="hud-inspector-head">
              <span class="admin-v3-card-kicker" style="margin:0">BACKUP \u00b7 EXPORT</span>
            </div>
            <div style="padding:16px;display:flex;flex-direction:column;gap:14px">
              <div style="padding:12px;background:color-mix(in srgb, var(--color-bg-deep) 65%, transparent);border-radius:4px">
                <div style="display:flex;align-items:center;gap:10px">
                  <span class="hud-status-dot is-live"></span>
                  <span style="font-size:12px;font-weight:600;color:var(--color-text-strong)">\u81ea\u52d5\u8a0a\u606f\u65e5\u8a8c</span>
                  <span style="margin-left:auto;font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted);letter-spacing:0.12em" id="sysoBackupStatus">SQLite \u00b7 active</span>
                </div>
                <div style="margin-top:8px;font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted);letter-spacing:0.05em">
                  \u5132\u5b58\u65bc <code style="color:var(--color-primary)">server/runtime/</code>
                </div>
              </div>
              <div>
                <div class="admin-v3-card-kicker" style="margin:0">\u532f\u51fa\u683c\u5f0f</div>
                <div style="margin-top:8px;display:grid;grid-template-columns:1fr 1fr;gap:6px">
                  <a href="/admin/history/export?format=json" class="hud-toolbar-action is-primary" style="text-align:center;text-decoration:none">JSON \u00b7 \u5b8c\u6574</a>
                  <a href="/admin/history/export?format=csv" class="hud-toolbar-action" style="text-align:center;text-decoration:none">CSV \u00b7 \u8a0a\u606f</a>
                </div>
              </div>
              <div style="margin-top:auto;padding:12px;border:1px dashed #f87171;border-radius:4px">
                <div class="admin-v3-card-kicker" style="margin:0;color:#f87171">DANGER ZONE</div>
                <div style="font-size:11px;color:var(--color-text-muted);margin-top:4px">\u6e05\u9664\u6b77\u53f2\u8a0a\u606f\uff0c\u65e5\u8a8c\u4fdd\u7559</div>
                <button id="sysoEndSessionBtn" type="button" style="margin-top:10px;width:100%;padding:8px;border-radius:4px;border:1px solid #f87171;background:transparent;color:#f87171;font-family:var(--font-mono);font-size:11px;letter-spacing:0.15em;font-weight:700;cursor:pointer">END SESSION</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);

    // Wire system overview live data
    (function wireSystemOverview() {
      const verEl = document.getElementById("sysoVersion");
      if (verEl && window.DANMU_CONFIG?.appVersion) verEl.textContent = "v" + window.DANMU_CONFIG.appVersion;
      const portEl = document.getElementById("sysoHttpPort");
      if (portEl) portEl.textContent = ":" + (location.port || "80");
      const wsPortEl = document.getElementById("sysoWsPort");
      if (wsPortEl) wsPortEl.textContent = ":" + (location.port || "80") + "/ws";
      const bindEl = document.getElementById("sysoBind");
      if (bindEl) bindEl.textContent = location.hostname;

      // Rate limit caps: hardcoded defaults per config.py (not exposed via API yet)
      const rateCaps = {
        fire: { max: 60, label: "FIRE_RATE_LIMIT" },
        api: { max: 60, label: "API_RATE_LIMIT" },
        admin: { max: 120, label: "ADMIN_RATE_LIMIT" },
        login: { max: 30, label: "LOGIN_RATE_LIMIT" },
      };
      const rateDefaults = { fire: 20, api: 30, admin: 60, login: 5 };
      const rateWindows = { fire: 60, api: 60, admin: 60, login: 300 };
      Object.keys(rateDefaults).forEach((k) => {
        const row = document.querySelector(`.hud-rate-item[data-rate="${k}"]`);
        if (!row) return;
        const val = rateDefaults[k];
        const win = rateWindows[k];
        const max = rateCaps[k].max;
        row.querySelector("[data-rate-val]").textContent = `${val} \u5247 / ${win}s`;
        row.querySelector("[data-rate-cap]").textContent = `UP TO ${max} \u00b7 ${rateCaps[k].label}`;
        const bar = row.querySelector("[data-rate-bar]");
        if (bar) bar.style.width = Math.min(100, (val / max) * 100) + "%";
      });

      // Fetch metrics to fill live fields
      (async () => {
        try {
          const res = await window.csrfFetch("/admin/metrics");
          if (!res.ok) return;
          const data = await res.json();
          const clientsEl = document.getElementById("sysoWsClients");
          if (clientsEl) clientsEl.textContent = String(data.ws_clients ?? 0);
          const qEl = document.getElementById("sysoQueue");
          if (qEl) qEl.textContent = `${data.queue_size ?? 0} / ${data.queue_capacity ?? "\u2014"}`;
          const widgEl = document.getElementById("sysoWidgets");
          if (widgEl) widgEl.textContent = String(data.active_widgets ?? 0);
        } catch (_) { /* ignore */ }
      })();

      const endBtn = document.getElementById("sysoEndSessionBtn");
      if (endBtn) {
        endBtn.addEventListener("click", () => {
          if (!confirm("\u78ba\u5b9a\u8981\u6e05\u9664\u6b77\u53f2\u8a0a\u606f\u55ce\uff1f\u6b64\u52d5\u4f5c\u7121\u6cd5\u5fa9\u539f\u3002")) return;
          window.csrfFetch("/admin/history/clear", { method: "POST" })
            .then((r) => r.ok ? r.json() : Promise.reject(r))
            .then(() => {
              if (typeof showToast === "function") showToast("\u6b77\u53f2\u5df2\u6e05\u9664", true);
            })
            .catch(() => {
              if (typeof showToast === "function") showToast("\u6e05\u9664\u5931\u6557\uff08\u7aef\u9ede\u53ef\u80fd\u5c1a\u672a\u5be6\u4f5c\uff09", false);
            });
        });
      }
    })();

    // Password Change Card (with show/hide toggles)
    settingsGrid.insertAdjacentHTML("beforeend", `
                    <details id="sec-security" class="group admin-v3-card" ${isOpen("sec-security") ? "open" : ""}>
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

                    <details id="sec-ws-auth" class="group admin-v3-card" ${isOpen("sec-ws-auth") ? "open" : ""}>
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

    // AdminV3 multi-page router: each sidebar tab maps to a set of inner
    // sections. Sections not matching the active route are hidden via
    // [data-active-route] CSS on the shell.
    initAdminRouter();
  }

  const ADMIN_ROUTES = {
    dashboard: { title: "哈囉 <span class=\"accent\">admin</span>, 活動進行中", kicker: "DASHBOARD · 控制台", sections: [], showKpi: true },
    messages:  { title: "訊息紀錄",         kicker: "MESSAGES · 即時訊息串",    sections: ["sec-live-feed"] },
    history:   { title: "時間軸匯出",       kicker: "HISTORY · 時間軸 / 匯出",   sections: ["sec-history"] },
    polls:     { title: "投票",             kicker: "POLLS · 2–6 選項",         sections: ["sec-polls"] },
    widgets:   { title: "Overlay Widgets",  kicker: "OBS 小工具 · 分數板 · 跑馬燈", sections: ["sec-widgets"] },
    themes:    { title: "風格主題包",       kicker: "THEME PACKS · 顏色 / 字體 / 速度 / 版面", sections: ["sec-color", "sec-opacity", "sec-fontsize", "sec-speed", "sec-fontfamily", "sec-layout", "sec-themes", "sec-emojis", "sec-stickers", "sec-sounds"] },
    moderation:{ title: "敏感字 & 黑名單",  kicker: "MODERATION · 內建功能 · 非插件", sections: ["sec-blacklist", "sec-filters"] },
    ratelimit: { title: "速率限制",         kicker: "RATE LIMITS · 反刷屏",          sections: ["sec-filters"] },
    effects:   { title: "效果庫 .dme",      kicker: "EFFECTS LIBRARY · 熱重載",  sections: ["sec-effects", "sec-effects-mgmt"] },
    plugins:   { title: "伺服器插件",       kicker: "PLUGIN SDK · 熱重載 · SANDBOX", sections: ["sec-plugins"] },
    fonts:     { title: "字型管理",         kicker: "FONT LIBRARY · 觀眾可選",   sections: ["sec-fonts"] },
    system:    { title: "系統 & 指紋",      kicker: "SYSTEM · FINGERPRINT · RATE LIMITS", sections: ["sec-system-overview", "sec-security", "sec-ws-auth", "sec-scheduler", "sec-webhooks", "sec-fingerprints"] },
  };

  function initAdminRouter() {
    const shell = document.querySelector(".admin-dash-grid");
    if (!shell) return;

    let currentRoute = "dashboard";

    const applySectionVisibility = () => {
      const cfg = ADMIN_ROUTES[currentRoute];
      const wanted = new Set(cfg.sections);
      shell.querySelectorAll("[id^=\"sec-\"]").forEach((el) => {
        if (!el.id) return;
        if (el.id === "sec-advanced") {
          // Advanced wrapper: visible only if it contains any wanted section
          const hasAny = Array.from(el.querySelectorAll("[id^=\"sec-\"]")).some((c) => wanted.has(c.id));
          el.style.display = hasAny ? "" : "none";
          return;
        }
        el.style.display = wanted.has(el.id) ? "" : "none";
      });
    };

    const applyRoute = (name) => {
      currentRoute = ADMIN_ROUTES[name] ? name : "dashboard";
      shell.dataset.activeRoute = currentRoute;
      const cfg = ADMIN_ROUTES[currentRoute];

      shell.querySelectorAll("[data-route]").forEach((btn) => {
        const on = btn.dataset.route === currentRoute;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-selected", on ? "true" : "false");
      });

      const kicker = shell.querySelector("[data-route-kicker]");
      const title = shell.querySelector("[data-route-title]");
      if (kicker) kicker.textContent = cfg.kicker;
      if (title) title.innerHTML = cfg.title;

      shell.querySelectorAll("[data-route-view=\"dashboard\"]").forEach((el) => {
        el.style.display = currentRoute === "dashboard" ? "" : "none";
      });

      applySectionVisibility();

      try { history.replaceState(null, "", "#/" + currentRoute); } catch (e) { /* ignore */ }
    };

    shell.querySelectorAll("[data-route]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        applyRoute(btn.dataset.route);
      });
    });

    const fromHash = (window.location.hash.match(/^#\/(\w+)/) || [])[1];
    applyRoute(fromHash || "dashboard");

    window.addEventListener("hashchange", () => {
      const h = (window.location.hash.match(/^#\/(\w+)/) || [])[1];
      if (h) applyRoute(h);
    });

    // Late-injected sections (admin-sounds.js, admin-emojis.js, etc. inject
    // after scheduleIdleTask). Watch the main area for new [id^="sec-"]
    // elements and re-apply visibility when they arrive.
    const main = shell.querySelector(".admin-dash-main");
    if (main && typeof MutationObserver === "function") {
      let scheduled = false;
      const mo = new MutationObserver(() => {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(() => {
          scheduled = false;
          applySectionVisibility();
        });
      });
      mo.observe(main, { childList: true, subtree: true });
    }
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
