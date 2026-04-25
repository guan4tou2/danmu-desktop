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

  // ── Bulk bootstrap cache ──────────────────────────────────────────────
  // Single GET /admin/bootstrap feeds first-paint data for ~16 sections so
  // the admin page does not fan-out 16 concurrent requests on load (which
  // previously tripped nginx's public `limit_req` burst window — now mitigated
  // with a per-path bypass in commit b65abc5, but this endpoint is the real
  // fix). Cache is considered fresh for 5 s; after that sections refetch.
  // Mutations (POSTs) bypass the cache, as do explicit refresh buttons.
  const BOOTSTRAP_TTL_MS = 5000;
  const _bootstrapCache = { at: 0, data: null, promise: null };
  function _bootstrapIsFresh() {
    return _bootstrapCache.data && (Date.now() - _bootstrapCache.at) < BOOTSTRAP_TTL_MS;
  }
  function primeBootstrap() {
    if (_bootstrapIsFresh()) return Promise.resolve(_bootstrapCache.data);
    if (_bootstrapCache.promise) return _bootstrapCache.promise;
    _bootstrapCache.promise = fetch("/admin/bootstrap", { credentials: "same-origin" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data) { _bootstrapCache.data = data; _bootstrapCache.at = Date.now(); }
        _bootstrapCache.promise = null;
        return data;
      })
      .catch(() => { _bootstrapCache.promise = null; return null; });
    return _bootstrapCache.promise;
  }
  // Read a section. Returns the cached value if fresh, else null. Sync.
  function bootstrapSection(name) {
    if (!_bootstrapIsFresh()) return null;
    const v = _bootstrapCache.data[name];
    // Sections that errored on the server come back as {_error: "..."} —
    // treat those as cache-miss so we still hit the real endpoint.
    if (v && typeof v === "object" && "_error" in v) return null;
    return v;
  }
  window.__danmuAdminBootstrap = { prime: primeBootstrap, get: bootstrapSection };
  // Kick off as early as possible — parallel with HTML parse.
  primeBootstrap();

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
  //
  // v5 retrofit: intercepts the submit via fetch so we can surface
  //   - 401 → remaining-attempt hint (5-attempt window, LOGIN_RATE_LIMIT)
  //   - 429 → full lockout screen with countdown (Retry-After if present,
  //           else hardcoded 300s matching LOGIN_RATE_WINDOW default)
  // See docs/design-v2-backlog.md P2-4.
  const LOGIN_MAX_ATTEMPTS = 5;           // matches LOGIN_RATE_LIMIT default
  const LOGIN_LOCKOUT_DEFAULT = 300;       // matches LOGIN_RATE_WINDOW default
  let _loginAttemptsUsed = 0;

  function _getLoginOpsContact() {
    // Optional admin contact surfaced on the lockout screen. Reads from
    // currentSettings.OpsContact (populated by fetchLatestSettings() before
    // renderLogin runs).
    if (currentSettings && typeof currentSettings.OpsContact !== "undefined") {
      const oc = currentSettings.OpsContact;
      if (Array.isArray(oc)) return oc[3] || oc[0] || null;
      if (typeof oc === "string") return oc;
    }
    return null;
  }

  function renderLogin() {
    const version = (window.DANMU_CONFIG && window.DANMU_CONFIG.appVersion) || "";
    appContainer.innerHTML = `
      <div class="admin-login-shell">
        <div class="admin-login-card" id="adminLoginCard">
          <div class="admin-login-hero">
            <h1 class="hud-hero-title is-large">Danmu Fire</h1>
            <p class="admin-login-subtitle" data-i18n="adminLoginSubtitle">${ServerI18n.t("adminLoginSubtitle")}</p>
          </div>
          <form id="loginForm" class="admin-login-form" action="/login" method="post" autocomplete="off">
            <div class="admin-login-field">
              <label class="admin-login-label" for="password" data-i18n="adminLoginPasswordLabel">${ServerI18n.t("adminLoginPasswordLabel")}</label>
              <input class="admin-login-input" type="password" id="password" name="password" autocomplete="current-password" required />
            </div>
            <button class="admin-login-submit" type="submit" data-i18n="adminLoginSignIn">${ServerI18n.t("adminLoginSignIn")}</button>
            <div class="admin-login-attempts" id="loginAttemptsHint" hidden></div>
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

    const form = document.getElementById("loginForm");
    const pwInput = document.getElementById("password");
    const hint = document.getElementById("loginAttemptsHint");
    if (!form) return;

    // Load previously-used attempts from session storage so a full reload
    // between failed attempts (server flashes + 302) keeps the counter.
    try {
      const stored = parseInt(sessionStorage.getItem("admin_login_attempts") || "0", 10);
      if (Number.isFinite(stored) && stored > 0) {
        _loginAttemptsUsed = stored;
        const remaining = Math.max(0, LOGIN_MAX_ATTEMPTS - _loginAttemptsUsed);
        if (hint && _loginAttemptsUsed > 0 && remaining > 0) {
          hint.hidden = false;
          hint.classList.toggle("is-warn", remaining > 1);
          hint.textContent = ServerI18n.t("loginAttemptsRemaining", { n: remaining });
        }
      }
    } catch (_) {}

    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      if (!pwInput) return;
      const body = new URLSearchParams();
      body.set("password", pwInput.value);
      try {
        // Probe /login first so we can trap 429 before the browser navigates.
        // On success/failure the server 302s — fetch with redirect:"manual"
        // returns an opaqueredirect (status 0) which we treat as "completed,
        // let the native form follow through".
        const res = await fetch("/login", {
          method: "POST",
          credentials: "same-origin",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: body.toString(),
          redirect: "manual",
        });

        if (res.status === 429) {
          const retryAfterRaw = res.headers.get("Retry-After");
          const retryAfter = parseInt(retryAfterRaw, 10);
          const seconds = Number.isFinite(retryAfter) && retryAfter > 0
            ? retryAfter
            : LOGIN_LOCKOUT_DEFAULT;
          renderLockout(seconds);
          return;
        }

        // Redirect response — attempt succeeded OR credentials were wrong
        // (server flashes "wrong password!" and 302s back here). We can't
        // distinguish without checking session state, so bump the local
        // attempts counter and reload to let render() route.
        _loginAttemptsUsed += 1;
        try { sessionStorage.setItem("admin_login_attempts", String(_loginAttemptsUsed)); } catch (_) {}
        window.location.reload();
      } catch (err) {
        console.error("Login submit failed:", err);
        if (hint) {
          hint.hidden = false;
          hint.textContent = ServerI18n.t("networkError");
        }
      }
    });
  }

  function renderLockout(seconds) {
    const card = document.getElementById("adminLoginCard");
    if (!card) return;
    const opsContact = _getLoginOpsContact();
    const contactHtml = opsContact
      ? `<a class="admin-lockout-contact" href="${opsContact}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`
      : "";

    card.classList.add("admin-lockout-card");
    card.innerHTML = `
      <div class="admin-login-hero">
        <h1 class="hud-hero-title is-large">Danmu Fire</h1>
        <p class="admin-lockout-title">${ServerI18n.t("lockoutTitle")}</p>
      </div>
      <div class="admin-lockout-body" role="alert" aria-live="assertive">
        <div class="admin-lockout-countdown" aria-live="polite">
          <span class="admin-lockout-countdown-value" id="lockoutCountdown">--:--</span>
          <span class="admin-lockout-countdown-unit">${ServerI18n.t("lockoutRemaining")}</span>
        </div>
        <div class="admin-lockout-meta">${ServerI18n.t("lockoutReason")}</div>
        ${contactHtml}
      </div>
    `;

    const valueEl = document.getElementById("lockoutCountdown");
    let remaining = seconds;
    const fmt = (s) => {
      const m = Math.floor(s / 60);
      const r = s % 60;
      return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
    };
    if (valueEl) valueEl.textContent = fmt(remaining);
    const timer = setInterval(() => {
      remaining -= 1;
      if (valueEl) valueEl.textContent = fmt(Math.max(0, remaining));
      if (remaining <= 0) {
        clearInterval(timer);
        // Reset attempt counter and re-render the login form.
        _loginAttemptsUsed = 0;
        renderLogin();
        ServerI18n.updateUI();
      }
    }, 1000);
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
                                <button type="button" class="admin-dash-nav-row" data-route="display" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◐</span>
                                    <span>顯示設定</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="viewer-theme" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◍</span>
                                    <span>觀眾頁主題</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="assets" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◰</span>
                                    <span>素材庫</span>
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
                                    <span class="hud-label is-accent" data-route-kicker>DASHBOARD · 活動進行中</span>
                                    <h1 data-route-title>控制台</h1>
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
                                <div class="admin-kpi-tile" data-kpi="messages">
                                    <div class="admin-kpi-tile-head">
                                        <span class="label">訊息總數</span>
                                        <span class="en">MESSAGES</span>
                                    </div>
                                    <div class="admin-kpi-tile-value" data-kpi-value>—</div>
                                    <div class="admin-kpi-tile-bars" data-kpi-bars>${kpiBars(6)}</div>
                                    <div class="admin-kpi-tile-delta is-success" data-kpi-delta>載入中…</div>
                                </div>
                                <div class="admin-kpi-tile" data-kpi="peak">
                                    <div class="admin-kpi-tile-head">
                                        <span class="label">高峰/分鐘</span>
                                        <span class="en">PEAK</span>
                                    </div>
                                    <div class="admin-kpi-tile-value" data-kpi-value>—</div>
                                    <div class="admin-kpi-tile-bars" data-kpi-bars>${kpiBars(6)}</div>
                                    <div class="admin-kpi-tile-delta is-muted" data-kpi-delta>計算中…</div>
                                </div>
                            </section>

                            <!-- Dashboard summary grid — prototype admin-v3.jsx:100+
                                 12-col grid: active poll (7) + poll builder (5),
                                 messages stream (7) + widgets & plugins (5). -->
                            <section class="admin-dash-summary" data-route-view="dashboard">
                              <div class="admin-dash-summary-grid">
                                <div class="admin-dash-card is-span-7" data-dash-card="active-poll">
                                  <div class="admin-dash-card-head">
                                    <span class="title">進行中投票</span>
                                    <span class="kicker">POLL · 觀眾已同步</span>
                                    <span class="timer" data-dash-poll-timer></span>
                                  </div>
                                  <div class="admin-dash-card-body" data-dash-poll-body>
                                    <div class="admin-dash-empty">尚無進行中投票 · 切換至「投票」頁建立</div>
                                  </div>
                                </div>
                                <div class="admin-dash-card is-span-5" data-dash-card="poll-builder">
                                  <div class="admin-dash-card-head">
                                    <span class="title">新增投票</span>
                                    <span class="kicker">POLL BUILDER · 2–6 選項</span>
                                  </div>
                                  <div class="admin-dash-card-body">
                                    <a class="admin-dash-cta" href="#" data-route-link="polls">+ 前往投票頁建立 ▶</a>
                                  </div>
                                </div>
                                <div class="admin-dash-card is-span-7" data-dash-card="messages">
                                  <div class="admin-dash-card-head">
                                    <span class="title">即時訊息</span>
                                    <span class="kicker">STREAM · 可封鎖 / 標記</span>
                                    <span class="auto">▶ AUTO</span>
                                  </div>
                                  <div class="admin-dash-card-body admin-dash-messages" data-dash-messages>
                                    <div class="admin-dash-empty">等待訊息…</div>
                                  </div>
                                </div>
                                <div class="admin-dash-card is-span-5" data-dash-card="widgets">
                                  <div class="admin-dash-card-head">
                                    <span class="title">Widgets &amp; Plugins</span>
                                    <span class="kicker">OBS · 熱重載</span>
                                  </div>
                                  <div class="admin-dash-card-body" data-dash-widgets>
                                    <div class="admin-dash-empty">載入中…</div>
                                  </div>
                                </div>
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
          <div class="theme-pack-toolbar">
            <span class="theme-pack-count" data-theme-pack-count>—</span>
            <span class="theme-pack-actions-head">+ 新增主題包 · ⤓ 匯入 .dmtheme · ⤒ 匯出</span>
          </div>
          <div id="themesList">
            <span class="theme-pack-muted" style="padding:14px">載入主題包…</span>
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

    // Polls Builder — master-detail v5 layout (admin-polls.jsx)
    // Left 380px queue with HTML5 drag-reorder + play mode · right active
    // question editor with crop ratio picker + per-question timer/multi +
    // option rows with drag handle + image toggle. Client-side queue, fires
    // each question through `/admin/poll/create` in sequence.
    settingsGrid.insertAdjacentHTML("beforeend", `
      <div id="sec-polls" class="admin-poll-page-v5 hud-page-stack lg:col-span-2">
        <div class="admin-poll-head">
          <div class="admin-poll-kicker">POLL · 多題目 · 拖曳排序 · 每題可上傳圖片</div>
          <div class="admin-poll-title">投票</div>
        </div>

        <div class="admin-poll-master-detail">
          <!-- LEFT · queue with real DnD -->
          <aside class="admin-poll-queue-panel">
            <div class="admin-poll-card-head">
              <span class="title">題目佇列</span>
              <span class="kicker">QUEUE · 按住 ⋮⋮ 拖曳排序</span>
            </div>
            <div class="admin-poll-queue" data-poll-queue></div>
            <button type="button" class="admin-poll-add-btn" data-poll-action="add">＋ 新增題目</button>

            <div class="admin-poll-mode">
              <div class="mode-label">播放模式</div>
              <div class="mode-row">
                <button type="button" class="is-active" data-poll-mode="manual">
                  <span class="lbl">手動</span>
                  <span class="sub">每題按 Next</span>
                </button>
                <button type="button" data-poll-mode="auto">
                  <span class="lbl">自動</span>
                  <span class="sub">時限到自動下一題</span>
                </button>
              </div>
            </div>
          </aside>

          <!-- RIGHT · active question editor -->
          <main class="admin-poll-editor" data-poll-editor></main>
        </div>

        <!-- Legacy single-question inputs retained for admin-poll.js compatibility -->
        <div class="admin-poll-legacy" hidden>
          <input type="text" id="pollQuestion" />
          <div id="pollOptionsContainer">
            <input type="text" class="poll-option-input" />
            <input type="text" class="poll-option-input" />
          </div>
          <button id="pollAddOptionBtn"></button>
          <button id="pollRemoveOptionBtn"></button>
          <button id="pollCreateBtn"></button>
          <button id="pollEndBtn"></button>
          <button id="pollResetBtn"></button>
        </div>

        <div id="pollStatusDisplay" class="admin-poll-status"></div>
      </div>
    `);

    // Multi-question poll builder controller — v5 master-detail
    (function initMultiPoll() {
      const sec = document.getElementById("sec-polls");
      if (!sec) return;
      const queueEl = sec.querySelector("[data-poll-queue]");
      const editorEl = sec.querySelector("[data-poll-editor]");

      const STORAGE_KEY = "danmu.adminPollQueue.v2";
      function qid() { return "q_" + Math.random().toString(36).slice(2, 8); }
      function oid() { return "o_" + Math.random().toString(36).slice(2, 6); }
      function newOpt(letter) {
        return { id: oid(), label: "", img: "" };
      }
      function newQuestion() {
        return {
          id: qid(), text: "", timer: 90, multi: false, crop: "16:9",
          options: [newOpt("A"), newOpt("B")],
        };
      }

      let queue = [];
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) queue = JSON.parse(raw);
      } catch (_) {}
      if (!Array.isArray(queue) || queue.length === 0) queue = [newQuestion()];
      let activeId = queue[0].id;
      let mode = "manual";
      let runningIdx = -1;
      let dragQId = null;
      let dragOptId = null;
      function persist() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ queue, activeId, mode })); } catch (_) {} }
      function findQ(id) { return queue.find(q => q.id === id); }
      function patchQ(id, v) { const q = findQ(id); if (q) Object.assign(q, v); }
      function reorder(arr, from, to) { const next = arr.slice(); const [m] = next.splice(from, 1); next.splice(to, 0, m); return next; }

      function renderQueue() {
        queueEl.innerHTML = "";
        queue.forEach((q, i) => {
          const row = document.createElement("div");
          row.className = "admin-poll-qrow";
          if (q.id === activeId) row.classList.add("is-active");
          if (i === runningIdx) row.classList.add("is-running");
          row.dataset.qid = q.id;
          row.draggable = true;
          const hasImg = q.options.some(o => o.img);
          row.innerHTML = `
            <span class="drag-handle" title="拖曳排序">⋮⋮</span>
            <span class="idx">${i + 1}</span>
            <div class="info">
              <div class="text">${escapeHtml(q.text || "(空題目)")}</div>
              <div class="meta">${q.options.length} 選項 · ${q.timer === 0 ? "無時限" : q.timer + "s"} · ${hasImg ? "含圖 " + q.crop : "純文字"}</div>
            </div>
            ${q.id === activeId ? '<span class="editing-chip">● 編輯中</span>' : ""}
          `;
          queueEl.appendChild(row);
        });
      }

      function renderEditor() {
        const q = findQ(activeId) || queue[0];
        if (!q) { editorEl.innerHTML = ""; return; }
        const idx = queue.indexOf(q);
        editorEl.innerHTML = `
          <div class="admin-poll-edit-head">
            <span class="idx">${idx + 1}</span>
            <div class="head-info">
              <span class="title">編輯題目 ${idx + 1}</span>
              <span class="kicker">EDITING · 變更即時同步</span>
            </div>
            <span class="progress">Q${idx + 1} / ${queue.length}</span>
          </div>

          <div class="admin-poll-field-label">問題</div>
          <input type="text" class="admin-poll-q-text" data-ed-text value="${escapeHtml(q.text || "")}" placeholder="輸入題目文字…" maxlength="200" />

          <div class="admin-poll-crop" data-ed-crop-row>
            <span class="crop-label">圖片裁切比例 · CROP</span>
            ${["16:9", "1:1", "4:3"].map(r => `
              <button type="button" data-ed-crop="${r}" class="${q.crop === r ? "is-active" : ""}">${r}</button>
            `).join("")}
            <span class="crop-note">套用到此題所有選項圖片</span>
          </div>

          <div class="admin-poll-field-label">選項 · 2–6 · 拖曳 ⋮⋮ 排序 · 可切換顯示圖片</div>
          <div class="admin-poll-opts" data-ed-opts>
            ${q.options.map((opt, oi) => `
              <div class="admin-poll-opt" data-oid="${opt.id}" draggable="true">
                <span class="drag-handle">⋮⋮</span>
                <span class="opt-tag">${String.fromCharCode(65 + oi)}</span>
                <button type="button" class="opt-img-toggle ${opt.img ? "is-on" : ""}" data-ed-opt-img="${opt.id}" title="切換圖片">
                  ${opt.img ? '<span class="img-on">🖼</span>' : '<span class="img-off">+ 圖</span>'}
                </button>
                <input type="text" data-ed-opt-text="${opt.id}" value="${escapeHtml(opt.label || "")}" placeholder="選項 ${String.fromCharCode(65 + oi)}" maxlength="100" />
                ${q.options.length > 2 ? `<button type="button" class="opt-remove" data-ed-opt-remove="${opt.id}" title="刪除">×</button>` : ""}
              </div>
            `).join("")}
            ${q.options.length < 6 ? `<button type="button" class="admin-poll-opt-add" data-ed-opt-add>＋ 新增選項 (${q.options.length}/6)</button>` : ""}
          </div>

          <div class="admin-poll-edit-foot">
            <label class="foot-field">
              <span>時限</span>
              <select data-ed-timer>
                <option value="30"${q.timer === 30 ? " selected" : ""}>30s</option>
                <option value="90"${q.timer === 90 ? " selected" : ""}>90s</option>
                <option value="180"${q.timer === 180 ? " selected" : ""}>3 分</option>
                <option value="300"${q.timer === 300 ? " selected" : ""}>5 分</option>
                <option value="0"${q.timer === 0 ? " selected" : ""}>無時限</option>
              </select>
            </label>
            <label class="foot-field foot-check">
              <input type="checkbox" data-ed-multi ${q.multi ? "checked" : ""} />
              <span>允許複選</span>
            </label>
            <div class="foot-spacer"></div>
            <button type="button" class="admin-poll-btn is-ghost" data-ed-action="remove-q">刪除此題</button>
            <button type="button" class="admin-poll-btn is-primary" data-ed-action="start-this">START Q${idx + 1} ▶</button>
          </div>
        `;
      }

      function render() { renderQueue(); renderEditor(); }

      // Queue drag-reorder
      queueEl.addEventListener("dragstart", (e) => {
        const row = e.target.closest(".admin-poll-qrow");
        if (!row) return;
        dragQId = row.dataset.qid;
        row.classList.add("is-dragging");
      });
      queueEl.addEventListener("dragend", (e) => {
        const row = e.target.closest(".admin-poll-qrow");
        if (row) row.classList.remove("is-dragging");
        dragQId = null;
        queueEl.querySelectorAll(".is-drag-over").forEach(r => r.classList.remove("is-drag-over"));
      });
      queueEl.addEventListener("dragover", (e) => {
        e.preventDefault();
        const row = e.target.closest(".admin-poll-qrow");
        if (!row || !dragQId || row.dataset.qid === dragQId) return;
        queueEl.querySelectorAll(".is-drag-over").forEach(r => r.classList.remove("is-drag-over"));
        row.classList.add("is-drag-over");
      });
      queueEl.addEventListener("drop", (e) => {
        e.preventDefault();
        const row = e.target.closest(".admin-poll-qrow");
        if (!row || !dragQId) return;
        const from = queue.findIndex(q => q.id === dragQId);
        const to = queue.findIndex(q => q.id === row.dataset.qid);
        if (from < 0 || to < 0 || from === to) return;
        queue = reorder(queue, from, to);
        persist(); render();
      });
      queueEl.addEventListener("click", (e) => {
        const row = e.target.closest(".admin-poll-qrow");
        if (!row) return;
        activeId = row.dataset.qid;
        persist(); render();
      });

      // Editor inputs
      editorEl.addEventListener("input", (e) => {
        const q = findQ(activeId);
        if (!q) return;
        if (e.target.matches("[data-ed-text]")) {
          q.text = e.target.value;
          persist(); renderQueue();
          return;
        }
        if (e.target.matches("[data-ed-opt-text]")) {
          const oid = e.target.dataset.edOptText;
          const opt = q.options.find(o => o.id === oid);
          if (opt) { opt.label = e.target.value; persist(); renderQueue(); }
        }
      });
      editorEl.addEventListener("change", (e) => {
        const q = findQ(activeId);
        if (!q) return;
        if (e.target.matches("[data-ed-timer]")) { q.timer = +e.target.value; persist(); renderQueue(); }
        else if (e.target.matches("[data-ed-multi]")) { q.multi = e.target.checked; persist(); }
      });
      editorEl.addEventListener("click", (e) => {
        const q = findQ(activeId);
        if (!q) return;
        const cropBtn = e.target.closest("[data-ed-crop]");
        if (cropBtn) { q.crop = cropBtn.dataset.edCrop; persist(); renderEditor(); return; }
        const imgToggle = e.target.closest("[data-ed-opt-img]");
        if (imgToggle) {
          const opt = q.options.find(o => o.id === imgToggle.dataset.edOptImg);
          if (opt) { opt.img = opt.img ? "" : "placeholder"; persist(); renderEditor(); }
          return;
        }
        const rem = e.target.closest("[data-ed-opt-remove]");
        if (rem) {
          const oid = rem.dataset.edOptRemove;
          if (q.options.length > 2) { q.options = q.options.filter(o => o.id !== oid); persist(); renderEditor(); renderQueue(); }
          return;
        }
        if (e.target.closest("[data-ed-opt-add]")) {
          if (q.options.length < 6) { q.options.push(newOpt()); persist(); renderEditor(); renderQueue(); }
          return;
        }
        const act = e.target.closest("[data-ed-action]");
        if (act) {
          if (act.dataset.edAction === "remove-q") {
            if (queue.length > 1 && confirm("刪除此題目?")) {
              const idx = queue.findIndex(q2 => q2.id === activeId);
              queue = queue.filter(q2 => q2.id !== activeId);
              activeId = queue[Math.min(idx, queue.length - 1)].id;
              persist(); render();
            }
          } else if (act.dataset.edAction === "start-this") {
            startAt(queue.findIndex(q2 => q2.id === activeId));
          }
        }
      });

      // Options drag-reorder (within active question)
      editorEl.addEventListener("dragstart", (e) => {
        const row = e.target.closest(".admin-poll-opt");
        if (!row) return;
        dragOptId = row.dataset.oid;
        row.classList.add("is-dragging");
      });
      editorEl.addEventListener("dragend", (e) => {
        editorEl.querySelectorAll(".is-dragging, .is-drag-over").forEach(r => r.classList.remove("is-dragging", "is-drag-over"));
        dragOptId = null;
      });
      editorEl.addEventListener("dragover", (e) => {
        const row = e.target.closest(".admin-poll-opt");
        if (!row || !dragOptId || row.dataset.oid === dragOptId) return;
        e.preventDefault();
        editorEl.querySelectorAll(".is-drag-over").forEach(r => r.classList.remove("is-drag-over"));
        row.classList.add("is-drag-over");
      });
      editorEl.addEventListener("drop", (e) => {
        e.preventDefault();
        const row = e.target.closest(".admin-poll-opt");
        const q = findQ(activeId);
        if (!row || !dragOptId || !q) return;
        const from = q.options.findIndex(o => o.id === dragOptId);
        const to = q.options.findIndex(o => o.id === row.dataset.oid);
        if (from < 0 || to < 0 || from === to) return;
        q.options = reorder(q.options, from, to);
        persist(); renderEditor();
      });

      // Sidebar actions
      sec.addEventListener("click", (e) => {
        const add = e.target.closest("[data-poll-action='add']");
        if (add) { const q = newQuestion(); queue.push(q); activeId = q.id; persist(); render(); return; }
        const mb = e.target.closest("[data-poll-mode]");
        if (mb) {
          mode = mb.dataset.pollMode;
          sec.querySelectorAll("[data-poll-mode]").forEach(b => b.classList.toggle("is-active", b === mb));
          persist();
        }
      });

      // Start engine
      async function startAt(idx) {
        if (idx < 0 || idx >= queue.length) return;
        const q = queue[idx];
        const cleanOpts = q.options.map(o => (o.label || "").trim()).filter(Boolean);
        if (!(q.text || "").trim()) { showToast && showToast(`第 ${idx + 1} 題缺少題目文字`, false); return; }
        if (cleanOpts.length < 2) { showToast && showToast(`第 ${idx + 1} 題選項不足 2 個`, false); return; }
        runningIdx = idx;
        renderQueue();
        try {
          const res = await csrfFetch("/admin/poll/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: q.text, options: cleanOpts }),
          });
          if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error(err.error || "poll create failed"); }
          showToast && showToast(`第 ${idx + 1} 題已開始`, true);
          if (mode === "auto") watchAndAdvance(idx);
        } catch (err) {
          runningIdx = -1; renderQueue();
          showToast && showToast(String(err.message || err), false);
        }
      }
      async function watchAndAdvance(idx) {
        const loop = async () => {
          if (runningIdx !== idx) return;
          try {
            const res = await fetch("/admin/poll/status", { credentials: "same-origin" });
            if (res.ok) {
              const data = await res.json();
              if (data.state !== "active") {
                setTimeout(() => { if (idx + 1 < queue.length) startAt(idx + 1); else { runningIdx = -1; renderQueue(); showToast && showToast("全部題目已結束", true); } }, 800);
                return;
              }
            }
          } catch (_) {}
          setTimeout(loop, 2000);
        };
        setTimeout(loop, 2000);
      }

      render();
    })();

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

    // Viewer Theme — /fire page chrome (v5 handoff admin-viewer-theme.jsx).
    // Entirely independent from Theme Packs. Controls bg / primary / hero /
    // mode / logo / UI font. Client-side state for now; backend persistence
    // tracked in backlog P0-2.
    settingsGrid.insertAdjacentHTML("beforeend", `
      <div id="sec-viewer-theme" class="admin-vt-page hud-page-stack lg:col-span-2">
        <div class="admin-vt-scope">
          <span class="icon">◉</span>
          <div>
            <div class="kicker">SCOPE</div>
            <p>僅影響觀眾進入 <code>/fire</code> 時看到的頁面外觀;彈幕本身的顏色 / 描邊 / 陰影由 <b>Theme Packs</b> 管理。</p>
          </div>
        </div>

        <div class="admin-vt-grid">
          <div class="admin-vt-controls">
            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">主題預設</span><span class="kicker">PRESETS</span></div>
              <div class="admin-vt-presets" data-vt-presets></div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">明暗模式</span><span class="kicker">MODE</span></div>
              <div class="admin-vt-mode" data-vt-mode>
                <button type="button" data-vt-mode-btn="dark"><span class="icon">◐</span><span class="lbl">深色</span><span class="sub">DARK</span></button>
                <button type="button" data-vt-mode-btn="light"><span class="icon">☼</span><span class="lbl">淺色</span><span class="sub">LIGHT</span></button>
                <button type="button" data-vt-mode-btn="auto"><span class="icon">◑</span><span class="lbl">跟隨系統</span><span class="sub">AUTO</span></button>
              </div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">顏色</span><span class="kicker">COLORS · BG / PRIMARY / HERO</span></div>
              <div class="admin-vt-color-rows" data-vt-colors></div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">LOGO</span><span class="kicker">LOGO · PNG 200×80 建議透明底</span></div>
              <label class="admin-vt-logo-drop" data-vt-logo-drop>
                <span class="hint-empty">拖放 PNG · 或點擊選擇<br><small>建議尺寸 200×80 · 透明底</small></span>
                <img class="hint-preview" hidden data-vt-logo-preview alt="logo" />
                <input type="file" accept="image/png,image/jpeg" hidden data-vt-logo-input />
              </label>
              <div class="admin-vt-logo-actions" hidden data-vt-logo-actions>
                <button type="button" data-vt-logo-remove>移除</button>
              </div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">介面字型</span><span class="kicker">UI FONT · /fire 頁面用</span></div>
              <select data-vt-font>
                <option value="Zen Kaku Gothic New">Zen Kaku · 預設現代</option>
                <option value="Noto Sans TC">Noto Sans TC · 全字型</option>
                <option value="Chakra Petch">Chakra Petch · 科幻 HUD</option>
                <option value="Bebas Neue">Bebas Neue · 海報粗體</option>
                <option value="IBM Plex Mono">IBM Plex Mono · 等寬</option>
                <option value="system-ui">System UI · 系統預設</option>
              </select>
              <div class="admin-vt-font-specimen" data-vt-font-specimen>發送彈幕 · 2026 現場</div>
            </div>

            <div class="admin-vt-persist">
              <button type="button" class="admin-poll-btn is-primary" data-vt-action="apply">▶ 立即套用</button>
              <button type="button" class="admin-poll-btn is-ghost" data-vt-action="reset">恢復預設</button>
            </div>
          </div>

          <div class="admin-vt-preview">
            <div class="admin-vt-preview-head">
              <span class="kicker">LIVE PREVIEW · /fire</span>
              <div class="admin-vt-device" data-vt-device>
                <button type="button" data-vt-device-btn="desktop" class="is-active">桌面</button>
                <button type="button" data-vt-device-btn="tablet">平板</button>
                <button type="button" data-vt-device-btn="mobile">手機</button>
              </div>
            </div>
            <div class="admin-vt-contrast" data-vt-contrast></div>
            <div class="admin-vt-preview-frame" data-vt-frame>
              <div class="admin-vt-preview-stage" data-vt-stage>
                <div class="hero">
                  <div class="logo" data-vt-preview-logo>DANMU FIRE</div>
                  <p class="subtitle">把你的訊息送上螢幕！</p>
                  <span class="chip"><span class="dot"></span>CONNECTED · LIVE</span>
                </div>
                <div class="stream">
                  <span class="row"><b>@guest</b><span>大家好 👋</span></span>
                  <span class="row"><b>@alice</b><span>這場很讚 🔥</span></span>
                  <span class="row self"><b>@你</b><span>好看</span></span>
                </div>
                <div class="composer">
                  <input type="text" placeholder="想對現場說點什麼?" disabled />
                  <button type="button">FIRE ▶</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);

    // Viewer Theme controller
    (function initViewerTheme() {
      const root = document.getElementById("sec-viewer-theme");
      if (!root) return;
      const STORAGE = "danmu.viewerTheme.v1";
      const PRESETS = [
        { id: "default",  name: "預設 · Midnight", bg: "#050910", primary: "#7DD3FC", hero: "#FCD34D", mode: "dark",  font: "Zen Kaku Gothic New" },
        { id: "daylight", name: "日光 · Daylight", bg: "#F8FAFC", primary: "#0284C7", hero: "#D97706", mode: "light", font: "Zen Kaku Gothic New" },
        { id: "cinema",   name: "劇院 · Cinema",   bg: "#0A0A0F", primary: "#F472B6", hero: "#FCD34D", mode: "dark",  font: "Chakra Petch" },
        { id: "retro",    name: "復古 · Retro",    bg: "#1A1511", primary: "#FB923C", hero: "#FDE68A", mode: "dark",  font: "Bebas Neue" },
      ];
      let state = { ...PRESETS[0], logo: null };
      try {
        const raw = localStorage.getItem(STORAGE);
        if (raw) state = { ...state, ...JSON.parse(raw) };
      } catch (_) {}
      let presetId = "default";

      function persist() { try { localStorage.setItem(STORAGE, JSON.stringify(state)); } catch (_) {} }

      // WCAG helpers
      function hex2rgb(h) {
        const m = /^#?([0-9a-f]{6})$/i.exec(h);
        if (!m) return [0, 0, 0];
        const n = parseInt(m[1], 16);
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
      }
      function relLum([r, g, b]) {
        const c = [r, g, b].map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
        return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
      }
      function contrast(a, b) {
        const la = relLum(hex2rgb(a)); const lb = relLum(hex2rgb(b));
        const [hi, lo] = la > lb ? [la, lb] : [lb, la];
        return (hi + 0.05) / (lo + 0.05);
      }
      function cGrade(ratio) {
        if (ratio >= 7) return { label: "AAA", cls: "is-good" };
        if (ratio >= 4.5) return { label: "AA",  cls: "is-ok" };
        if (ratio >= 3)   return { label: "AA/LG", cls: "is-meh" };
        return { label: "FAIL", cls: "is-fail" };
      }

      function renderPresets() {
        const box = root.querySelector("[data-vt-presets]");
        box.innerHTML = "";
        PRESETS.forEach(p => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "admin-vt-preset" + (presetId === p.id ? " is-active" : "");
          btn.innerHTML = `
            <div class="swatch" style="background:${p.bg}">
              <span style="background:${p.primary}"></span>
              <span style="background:${p.hero}"></span>
            </div>
            <div class="name">${p.name}</div>
            <div class="mode">${p.mode.toUpperCase()}</div>
          `;
          btn.addEventListener("click", () => { state = { ...state, ...p }; presetId = p.id; persist(); render(); });
          box.appendChild(btn);
        });
      }

      function renderMode() {
        root.querySelectorAll("[data-vt-mode-btn]").forEach(b => {
          b.classList.toggle("is-active", state.mode === b.dataset.vtModeBtn);
        });
      }

      function renderColors() {
        const box = root.querySelector("[data-vt-colors]");
        const fg = state.mode === "dark" ? "#F8FAFC" : "#0F172A";
        const rows = [
          { key: "bg",      label: "背景", en: "BG",      vs: fg,          vsLbl: "文字" },
          { key: "primary", label: "主色", en: "PRIMARY", vs: state.bg,    vsLbl: "背景" },
          { key: "hero",    label: "強調色", en: "HERO",  vs: state.bg,    vsLbl: "背景" },
        ];
        box.innerHTML = rows.map(r => {
          const ratio = contrast(state[r.key], r.vs);
          const g = cGrade(ratio);
          return `
            <div class="admin-vt-color-row">
              <div class="swatch" style="background:${state[r.key]}"></div>
              <div class="meta">
                <div class="top">
                  <span class="label">${r.label}</span>
                  <span class="kicker">${r.en}</span>
                  <span class="grade ${g.cls}">${g.label} · ${ratio.toFixed(1)}</span>
                </div>
                <div class="bottom">
                  <input type="color" value="${state[r.key]}" data-vt-color="${r.key}" />
                  <input type="text" value="${state[r.key]}" data-vt-hex="${r.key}" spellcheck="false" />
                  <span class="vs">vs ${r.vsLbl}</span>
                </div>
              </div>
            </div>`;
        }).join("");
      }

      function renderLogo() {
        const preview = root.querySelector("[data-vt-logo-preview]");
        const hint = root.querySelector(".hint-empty");
        const actions = root.querySelector("[data-vt-logo-actions]");
        if (state.logo) {
          preview.src = state.logo;
          preview.hidden = false;
          hint.style.display = "none";
          actions.hidden = false;
        } else {
          preview.hidden = true;
          hint.style.display = "";
          actions.hidden = true;
        }
      }

      function renderFont() {
        const sel = root.querySelector("[data-vt-font]");
        sel.value = state.font;
        const spec = root.querySelector("[data-vt-font-specimen]");
        spec.style.fontFamily = state.font;
      }

      function renderContrast() {
        const fg = state.mode === "dark" ? "#F8FAFC" : "#0F172A";
        const rows = [
          { lbl: "文字 vs 背景",   ratio: contrast(fg, state.bg) },
          { lbl: "主色 vs 背景",   ratio: contrast(state.primary, state.bg) },
          { lbl: "強調色 vs 背景", ratio: contrast(state.hero, state.bg) },
        ];
        root.querySelector("[data-vt-contrast]").innerHTML = rows.map(r => {
          const g = cGrade(r.ratio);
          return `<span class="vt-contrast-chip ${g.cls}">${r.lbl} · ${g.label} ${r.ratio.toFixed(1)}</span>`;
        }).join("");
      }

      function renderPreview() {
        const stage = root.querySelector("[data-vt-stage]");
        const fg = state.mode === "dark" ? "#F8FAFC" : "#0F172A";
        stage.style.setProperty("--vt-bg", state.bg);
        stage.style.setProperty("--vt-primary", state.primary);
        stage.style.setProperty("--vt-hero", state.hero);
        stage.style.setProperty("--vt-fg", fg);
        stage.style.fontFamily = state.font;
        const logoEl = root.querySelector("[data-vt-preview-logo]");
        if (state.logo) {
          logoEl.innerHTML = `<img src="${state.logo}" style="max-height:40px" />`;
        } else {
          logoEl.textContent = "DANMU FIRE";
        }
      }

      function render() {
        renderPresets();
        renderMode();
        renderColors();
        renderLogo();
        renderFont();
        renderContrast();
        renderPreview();
      }

      // Event wiring
      root.addEventListener("input", (e) => {
        if (e.target.matches("[data-vt-color]")) {
          const k = e.target.dataset.vtColor;
          state[k] = e.target.value;
          presetId = "custom";
          persist(); render();
        } else if (e.target.matches("[data-vt-hex]")) {
          const k = e.target.dataset.vtHex;
          if (/^#[0-9a-f]{6}$/i.test(e.target.value)) {
            state[k] = e.target.value;
            presetId = "custom";
            persist(); render();
          }
        } else if (e.target.matches("[data-vt-font]")) {
          state.font = e.target.value;
          persist(); render();
        }
      });

      root.addEventListener("change", (e) => {
        if (e.target.matches("[data-vt-logo-input]")) {
          const f = e.target.files && e.target.files[0];
          if (!f) return;
          if (f.size > 500 * 1024) {
            if (typeof showToast === "function") showToast("Logo ≤ 500 KB", false);
            return;
          }
          const reader = new FileReader();
          reader.onload = () => {
            state.logo = String(reader.result || "");
            persist(); render();
          };
          reader.readAsDataURL(f);
        }
      });

      root.addEventListener("click", (e) => {
        const modeBtn = e.target.closest("[data-vt-mode-btn]");
        if (modeBtn) {
          state.mode = modeBtn.dataset.vtModeBtn;
          presetId = "custom";
          persist(); render();
          return;
        }
        const logoRem = e.target.closest("[data-vt-logo-remove]");
        if (logoRem) {
          state.logo = null;
          persist(); render();
          return;
        }
        const dev = e.target.closest("[data-vt-device-btn]");
        if (dev) {
          root.querySelectorAll("[data-vt-device-btn]").forEach(b => b.classList.toggle("is-active", b === dev));
          root.querySelector("[data-vt-frame]").dataset.device = dev.dataset.vtDeviceBtn;
          return;
        }
        const act = e.target.closest("[data-vt-action]");
        if (act) {
          if (act.dataset.vtAction === "reset") {
            state = { ...PRESETS[0], logo: null };
            presetId = "default";
            persist(); render();
          } else if (act.dataset.vtAction === "apply") {
            if (typeof showToast === "function") showToast("已套用 · 變更將廣播給所有 viewer (backend pending)", true);
          }
        }
      });

      render();
    })();

    // Rate Limits editable card — /admin ratelimit nav points here.
    // Values come from env vars (FIRE_RATE_LIMIT / _WINDOW etc.) read at
    // startup. Editing here lets the admin prepare a .env patch; applying
    // takes effect on next server restart (no live rewrite yet — tracked
    // in design-v2-backlog #8).
    settingsGrid.insertAdjacentHTML("beforeend", `
      <div id="sec-ratelimit" class="admin-ratelimit-page hud-page-stack lg:col-span-2">
        <div class="admin-ratelimit-head">
          <div class="admin-ratelimit-kicker">RATE LIMITS · 4 SCOPES · .env</div>
          <div class="admin-ratelimit-title">請求速率上限</div>
          <p class="admin-ratelimit-note">
            每個來源 IP(或 fingerprint)在時間窗內可發送的請求數上限。
            變更後請 export .env 並 restart server 生效。
          </p>
        </div>

        <!-- Summary strip — 24h telemetry (data wiring TODO in backend audit) -->
        <div class="admin-ratelimit-summary">
          <div class="tile">
            <span class="lbl">24h 請求</span>
            <span class="val" data-rl-sum-hits>—</span>
            <span class="delta is-muted" data-rl-sum-hits-delta>計算中…</span>
          </div>
          <div class="tile">
            <span class="lbl">24h 違規</span>
            <span class="val" data-rl-sum-viol>—</span>
            <span class="delta is-good" data-rl-sum-viol-rate>命中率 —</span>
          </div>
          <div class="tile">
            <span class="lbl">現正鎖定</span>
            <span class="val" data-rl-sum-locked>—</span>
            <span class="delta is-warn">LOGIN · 滑動視窗自動解除</span>
          </div>
          <div class="tile">
            <span class="lbl">黑名單</span>
            <span class="val" data-rl-sum-black>—</span>
            <span class="delta is-danger">手動加入 · 永久</span>
          </div>
        </div>
        <div class="admin-ratelimit-rows">
          ${[
            { key: "fire",  label: "FIRE · 觀眾彈幕",   envLimit: "FIRE_RATE_LIMIT",  envWindow: "FIRE_RATE_WINDOW",  defLimit: 20, defWindow: 60 },
            { key: "api",   label: "API · 一般請求",    envLimit: "API_RATE_LIMIT",   envWindow: "API_RATE_WINDOW",   defLimit: 30, defWindow: 60 },
            { key: "admin", label: "ADMIN · 後台動作",  envLimit: "ADMIN_RATE_LIMIT", envWindow: "ADMIN_RATE_WINDOW", defLimit: 60, defWindow: 60 },
            { key: "login", label: "LOGIN · 登入嘗試",  envLimit: "LOGIN_RATE_LIMIT", envWindow: "LOGIN_RATE_WINDOW", defLimit: 5,  defWindow: 300 },
          ].map((r) => `
            <div class="admin-ratelimit-row" data-rl-key="${r.key}">
              <div class="admin-ratelimit-row-head">
                <span class="admin-ratelimit-row-label">${escapeHtml(r.label)}</span>
                <span class="admin-ratelimit-row-env">${r.envLimit}</span>
              </div>
              <div class="admin-ratelimit-row-body">
                <label class="admin-ratelimit-field">
                  <span>限制 · count</span>
                  <input type="number" min="1" max="1000" value="${r.defLimit}" data-rl-limit="${r.key}" />
                </label>
                <label class="admin-ratelimit-field">
                  <span>窗口 · window</span>
                  <select data-rl-window="${r.key}">
                    <option value="10"${r.defWindow === 10 ? " selected" : ""}>10s</option>
                    <option value="30"${r.defWindow === 30 ? " selected" : ""}>30s</option>
                    <option value="60"${r.defWindow === 60 ? " selected" : ""}>60s</option>
                    <option value="300"${r.defWindow === 300 ? " selected" : ""}>5 min</option>
                    <option value="3600"${r.defWindow === 3600 ? " selected" : ""}>1 hr</option>
                  </select>
                </label>
                <div class="admin-ratelimit-field admin-ratelimit-bar-field">
                  <span>目前使用</span>
                  <div class="admin-ratelimit-bar">
                    <div class="admin-ratelimit-bar-fill" data-rl-bar="${r.key}" style="width:18%"></div>
                  </div>
                  <span class="admin-ratelimit-bar-text" data-rl-current="${r.key}">—</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="admin-ratelimit-footer">
          <button type="button" class="admin-poll-btn is-ghost" data-rl-action="reset">重設預設</button>
          <button type="button" class="admin-poll-btn is-primary" data-rl-action="export">匯出 .env 片段</button>
        </div>

        <pre id="rlEnvExport" class="admin-ratelimit-export" hidden></pre>
      </div>
    `);

    // Wire up export button + fetch summary tiles.
    (function () {
      const section = document.getElementById("sec-ratelimit");
      if (!section) return;
      const exportPre = section.querySelector("#rlEnvExport");

      // Fetch summary tiles — prefers bulk /admin/bootstrap cache primed
      // on page load (avoids the 3-way fan-out for history/blacklist/metrics).
      // Falls back to per-endpoint fetches if cache is stale/absent.
      // Deferred 4.5s to stay clear of nginx's rate=10r/s burst=30 window
      // that admin's init wave already saturates.
      setTimeout(async () => {
        try {
          await primeBootstrap();
          const cachedHist = bootstrapSection("history_stats");
          const cachedBl   = bootstrapSection("blacklist");
          const cachedMet  = bootstrapSection("metrics");
          const need = [];
          if (!cachedHist) need.push(fetch("/admin/history?hours=24&limit=1", { credentials: "same-origin" }));
          else need.push(null);
          if (!cachedBl) need.push(fetch("/admin/blacklist/get", { credentials: "same-origin" }));
          else need.push(null);
          if (!cachedMet) need.push(fetch("/admin/metrics", { credentials: "same-origin" }));
          else need.push(null);
          const [histR, blR, metR] = await Promise.all(need);
          const h = cachedHist || (histR && histR.ok ? await histR.json() : null);
          if (h) {
            const n24 = (h.stats && h.stats.last_24h) || 0;
            const tot = (h.stats && h.stats.total) || 0;
            const hits = section.querySelector("[data-rl-sum-hits]");
            const delta = section.querySelector("[data-rl-sum-hits-delta]");
            if (hits) hits.textContent = n24.toLocaleString();
            if (delta) delta.textContent = `總計 ${tot.toLocaleString()}`;
          }
          const b = cachedBl || (blR && blR.ok ? await blR.json() : null);
          if (b) {
            const arr = Array.isArray(b) ? b : (b.entries || b.keywords || []);
            const bl = section.querySelector("[data-rl-sum-black]");
            if (bl) bl.textContent = arr.length ? arr.length + " 項" : "0";
          }
          // Rate-limit counters from /admin/metrics. If the server is older
          // and `rate_limits` is missing, fall through and leave "—".
          const viol = section.querySelector("[data-rl-sum-viol]");
          const violRate = section.querySelector("[data-rl-sum-viol-rate]");
          const locked = section.querySelector("[data-rl-sum-locked]");
          const m = cachedMet || (metR && metR.ok ? await metR.json() : null);
          if (m) {
            const rl = m && m.rate_limits;
            if (rl && rl.totals) {
              const tHits = rl.totals.hits || 0;
              const tViol = rl.totals.violations || 0;
              const tLock = rl.totals.locked_sources || 0;
              if (viol) viol.textContent = tViol.toLocaleString();
              if (violRate) {
                const denom = tHits + tViol;
                violRate.textContent = denom > 0
                  ? `阻擋率 ${((tViol / denom) * 100).toFixed(1)}%`
                  : "—";
              }
              if (locked) locked.textContent = `${tLock.toLocaleString()} 來源`;
              // Per-row "H 次 · V 違規" text under each limit bar.
              ["fire", "api", "admin", "login"].forEach((k) => {
                const row = rl[k];
                const el = section.querySelector(`[data-rl-current="${k}"]`);
                if (el && row) {
                  const rh = (row.hits || 0).toLocaleString();
                  const rv = (row.violations || 0).toLocaleString();
                  el.textContent = `${rh} 次 · ${rv} 違規`;
                }
              });
            } else {
              if (viol) viol.textContent = "—";
              if (violRate) violRate.textContent = "計數待 backend";
              if (locked) locked.textContent = "—";
            }
          } else {
            if (viol) viol.textContent = "—";
            if (violRate) violRate.textContent = "計數待 backend";
            if (locked) locked.textContent = "—";
          }
        } catch (_) {}
      }, 4500);

      section.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-rl-action]");
        if (!btn) return;
        const action = btn.dataset.rlAction;
        if (action === "export") {
          const lines = [];
          section.querySelectorAll("[data-rl-limit]").forEach((el) => {
            const k = el.dataset.rlLimit.toUpperCase();
            lines.push(`${k}_RATE_LIMIT=${el.value}`);
          });
          section.querySelectorAll("[data-rl-window]").forEach((el) => {
            const k = el.dataset.rlWindow.toUpperCase();
            lines.push(`${k}_RATE_WINDOW=${el.value}`);
          });
          exportPre.textContent = lines.join("\n");
          exportPre.hidden = false;
          try {
            navigator.clipboard?.writeText(lines.join("\n"));
            if (typeof showToast === "function") showToast("已複製 .env 片段到剪貼簿", true);
          } catch (_) {}
        } else if (action === "reset") {
          const defs = { fire: [20, 60], api: [30, 60], admin: [60, 60], login: [5, 300] };
          Object.entries(defs).forEach(([k, [lim, win]]) => {
            const l = section.querySelector(`[data-rl-limit="${k}"]`);
            const w = section.querySelector(`[data-rl-window="${k}"]`);
            if (l) l.value = lim;
            if (w) w.value = win;
          });
          exportPre.hidden = true;
        }
      });
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

    // Dashboard KPI + summary fetches — defer so they don't join the
    // init burst that already hits nginx `rate=10r/s burst=30`. We've
    // seen 429 cascade across admin-history / admin-effects / etc when
    // these fire concurrently. Stagger 1.5s + 3s after init.
    setTimeout(() => { refreshDashboardKpi(); }, 1500);
    setTimeout(() => { refreshDashboardSummary(); }, 3000);
  }

  async function refreshDashboardKpi() {
    try {
      await primeBootstrap();
      const cachedHist = bootstrapSection("history_stats");
      // /admin/stats/hourly is not bundled — always fetch. /admin/history IS
      // bundled as history_stats (same shape), so consult cache first.
      const [histRes, hourlyRes] = await Promise.all([
        cachedHist ? null : fetch("/admin/history?hours=24&limit=1", { credentials: "same-origin" }),
        fetch("/admin/stats/hourly?hours=24", { credentials: "same-origin" }),
      ]);
      if (!hourlyRes.ok) return;
      const hist = cachedHist || (histRes && histRes.ok ? await histRes.json() : null);
      if (!hist) return;
      const dist = (await hourlyRes.json()).distribution || [];
      const total = (hist.stats && hist.stats.total) || 0;
      const last24h = (hist.stats && hist.stats.last_24h) || 0;
      const peakEntry = dist.reduce((m, e) => (e.count > (m?.count || -1) ? e : m), null);
      const peakVal = peakEntry ? peakEntry.count : 0;
      const peakHour = peakEntry ? (peakEntry.hour || "").slice(-5) : "—";

      const tileMsg = document.querySelector('[data-kpi="messages"]');
      if (tileMsg) {
        tileMsg.querySelector("[data-kpi-value]").textContent = total.toLocaleString();
        tileMsg.querySelector("[data-kpi-delta]").textContent = `+${last24h.toLocaleString()} / 24h`;
      }
      const tilePeak = document.querySelector('[data-kpi="peak"]');
      if (tilePeak) {
        tilePeak.querySelector("[data-kpi-value]").textContent = peakVal.toLocaleString();
        tilePeak.querySelector("[data-kpi-delta]").textContent = peakEntry ? `於 ${peakHour}` : "無資料";
        if (dist.length) {
          const bars = dist.slice(-12).map(e => Math.max(2, Math.round((e.count / Math.max(1, peakVal)) * 12)));
          tilePeak.querySelector("[data-kpi-bars]").innerHTML = bars.map(h =>
            `<span style="height:${h}px;opacity:${0.3 + h/20}"></span>`
          ).join("");
        }
      }
    } catch (e) {
      // Silent — dashboard falls back to placeholders.
    }
  }

  // Dashboard summary cards — prototype admin-v3.jsx active-poll + messages + widgets.
  async function refreshDashboardSummary() {
    populateDashboardPoll();
    populateDashboardMessages();
    populateDashboardWidgets();
  }

  async function populateDashboardPoll() {
    const body = document.querySelector("[data-dash-poll-body]");
    const timer = document.querySelector("[data-dash-poll-timer]");
    if (!body) return;
    try {
      await primeBootstrap();
      const cachedMet = bootstrapSection("metrics");
      let m = cachedMet;
      if (!m) {
        const r = await fetch("/admin/metrics", { credentials: "same-origin" });
        if (!r.ok) return;
        m = await r.json();
      }
      const ps = m.poll_state;
      if (!ps || !ps.active || !Array.isArray(ps.options) || ps.options.length === 0) {
        body.innerHTML = `<div class="admin-dash-empty">尚無進行中投票 · 切換至「投票」頁建立</div>`;
        if (timer) timer.textContent = "";
        return;
      }
      const totalVotes = ps.options.reduce((s, o) => s + (o.votes || 0), 0);
      const keys = ["A", "B", "C", "D", "E", "F"];
      let winnerIdx = 0;
      ps.options.forEach((o, i) => { if ((o.votes || 0) > (ps.options[winnerIdx].votes || 0)) winnerIdx = i; });
      body.innerHTML =
        `<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${escapeHtml(ps.question || "投票進行中")}</div>` +
        ps.options.map((o, i) => {
          const pct = totalVotes ? Math.round((o.votes / totalVotes) * 100) : 0;
          const win = i === winnerIdx && totalVotes > 0;
          return `
            <div class="admin-dash-poll-opt ${win ? "is-winner" : ""}">
              <div class="row">
                <span class="tag">${keys[i] || String(i + 1)}</span>
                <span class="label">${escapeHtml(o.label || "")}</span>
                <span class="pct">${pct}%</span>
                <span class="votes">${(o.votes || 0)} 票</span>
              </div>
              <div class="bar"><span style="width:${pct}%"></span></div>
            </div>`;
        }).join("") +
        `<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:10px">TOTAL · ${totalVotes} 票 · 觀眾輸入 A B C D 即可投票</div>`;
      if (timer) {
        const remain = ps.remaining_seconds;
        timer.textContent = typeof remain === "number" && remain > 0
          ? `● ${Math.floor(remain / 60)}:${String(remain % 60).padStart(2, "0")} 剩餘`
          : "● LIVE";
      }
    } catch (e) {
      // Silent.
    }
  }

  async function populateDashboardMessages() {
    const body = document.querySelector("[data-dash-messages]");
    if (!body) return;
    try {
      const r = await fetch("/admin/history?hours=24&limit=7", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      const records = (data.records || []).slice(0, 7);
      if (records.length === 0) {
        body.innerHTML = `<div class="admin-dash-empty">等待訊息…</div>`;
        return;
      }
      body.innerHTML = records.map(rec => {
        const ts = (rec.timestamp || "").slice(11, 19);
        const txt = escapeHtml(rec.text || rec.message || "");
        const user = escapeHtml(rec.nickname || rec.user || "guest");
        const tag = "MSG";
        const tagStyle = `color:var(--admin-text-dim)`;
        return `
          <div class="admin-dash-msg-row">
            <span class="time">${ts}</span>
            <span class="tag" style="${tagStyle}">${tag}</span>
            <div>
              <div class="text">${txt}</div>
              <div class="meta">@${user}</div>
            </div>
            <span class="more">⋯</span>
          </div>`;
      }).join("");
    } catch (e) {
      // Silent.
    }
  }

  async function populateDashboardWidgets() {
    const body = document.querySelector("[data-dash-widgets]");
    if (!body) return;
    try {
      await primeBootstrap();
      let data = bootstrapSection("widgets");
      if (!data) {
        const r = await fetch("/admin/widgets/list", { credentials: "same-origin" });
        if (!r.ok) {
          body.innerHTML = `<div class="admin-dash-empty">無可用 widgets</div>`;
          return;
        }
        data = await r.json();
      }
      const widgets = (data.widgets || data.items || []).slice(0, 4);
      if (widgets.length === 0) {
        body.innerHTML = `<div class="admin-dash-empty">尚未啟用任何 widget</div>`;
        return;
      }
      body.innerHTML = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">` +
        widgets.map(w => {
          const running = w.enabled || w.running;
          const dotColor = running ? "var(--color-success, #22c55e)" : "var(--admin-text-dim)";
          return `
            <div class="admin-dash-widget-tile">
              <div style="display:flex;align-items:center;gap:6px">
                <span style="width:6px;height:6px;border-radius:50%;background:${dotColor}"></span>
                <span class="kind">${escapeHtml(w.kind || "WIDGET")}</span>
              </div>
              <div class="title">${escapeHtml(w.name || w.title || w.id || "widget")}</div>
              <div class="uptime">${running ? "● RUNNING" : "○ PAUSED"}</div>
            </div>`;
        }).join("") +
        `</div>`;
    } catch (e) {
      body.innerHTML = `<div class="admin-dash-empty">無可用 widgets</div>`;
    }
  }

  const ADMIN_ROUTES = {
    dashboard: { title: "控制台", kicker: "DASHBOARD · 活動進行中", sections: [], showKpi: true },
    messages:  { title: "訊息紀錄",         kicker: "MESSAGES · 即時訊息串",    sections: ["sec-live-feed"] },
    history:   { title: "時間軸匯出",       kicker: "HISTORY · 時間軸 / 匯出",   sections: ["sec-history"] },
    polls:     { title: "投票",             kicker: "POLLS · 2–6 選項",         sections: ["sec-polls"] },
    widgets:   { title: "Overlay Widgets",  kicker: "OBS 小工具 · 分數板 · 跑馬燈", sections: ["sec-widgets"] },
    themes:    { title: "風格主題包",       kicker: "THEME PACKS · 彈幕樣式預設",       sections: ["sec-themes"] },
    display:   { title: "顯示設定",         kicker: "DISPLAY · 觀眾可自訂欄位",        sections: ["sec-color", "sec-opacity", "sec-fontsize", "sec-speed", "sec-fontfamily", "sec-layout"] },
    "viewer-theme": { title: "觀眾頁主題",  kicker: "VIEWER THEME · /fire 頁面外觀",   sections: ["sec-viewer-theme"] },
    assets:    { title: "素材庫",           kicker: "ASSETS · EMOJI / STICKERS / SOUNDS", sections: ["sec-emojis", "sec-stickers", "sec-sounds"] },
    moderation:{ title: "敏感字 & 黑名單",  kicker: "MODERATION · 內建功能 · 非插件", sections: ["sec-blacklist", "sec-filters"] },
    ratelimit: { title: "速率限制",         kicker: "RATE LIMITS · 反刷屏",          sections: ["sec-ratelimit"] },
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
      // Clear any stale login-attempts counter from a previous failed run.
      try { sessionStorage.removeItem("admin_login_attempts"); } catch (_) {}
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
