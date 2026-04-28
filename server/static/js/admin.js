document.addEventListener("DOMContentLoaded", () => {
  const csrfToken =
    document.querySelector('meta[name="csrf-token"]').content || "";

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


  // Expose bootstrap-cache helpers for extracted admin-* modules so they can
  // re-use the /admin/bootstrap fan-out cache. Set after primeBootstrap +
  // bootstrapSection are defined above.
  window.AdminBootstrap = { primeBootstrap, bootstrapSection };

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
  // 2026-04-28: extracted to admin-replay-controls.js (Group D-3 split).
  // The module self-binds to replayStartBtn / replayPauseBtn / replayResumeBtn /
  // replayStopBtn / replayRecordBtn / exportJsonBtn on `admin-panel-rendered`.

  // Expose csrfFetch globally for external admin modules (e.g. admin-scheduler.js)
  window.csrfFetch = csrfFetch;

  // showToast is provided by the shared toast.js utility (window.showToast)

  // Render Login Screen — extracted to admin-login.js (P6-2).
  // Shared closures (appContainer, currentSettings) bridged via window.__adminCtx.
  // Keeps a tiny in-file fallback so the admin page still loads if the
  // admin-login.js module fails to fetch.
  window.__adminCtx = window.__adminCtx || {};
  window.__adminCtx.appContainer = appContainer;
  window.__adminCtx.getSettings = () => currentSettings;

  function _legacyRenderLogin() {
    // Minimal fallback if admin-login.js is missing — login still works.
    if (!appContainer) return;
    appContainer.innerHTML = `
      <div class="admin-login-shell"><div class="admin-login-card">
        <h1 class="hud-hero-title is-large">Danmu Fire</h1>
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`;
  }

  function renderLogin() {
    if (window.AdminLogin && typeof window.AdminLogin.render === "function") {
      window.AdminLogin.render();
    } else {
      _legacyRenderLogin();
    }
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
                                    <span class="admin-dash-nav-badge" data-count-messages hidden>—</span>
                                    <span class="admin-dash-nav-live"></span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="history" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">↳</span>
                                    <span>歷史</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="notifications" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⚑</span>
                                    <span>通知</span>
                                    <span class="admin-dash-nav-badge" data-count-notif hidden>—</span>
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
                                    <span class="admin-dash-nav-badge" data-count-widgets hidden>—</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="themes" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">❖</span>
                                    <span>風格主題包</span>
                                    <span class="admin-dash-nav-badge" data-count-themes>—</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="viewer-config" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◍</span>
                                    <span>Viewer 設定</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="assets" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◰</span>
                                    <span>素材庫</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="integrations" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⌨</span>
                                    <span>整合</span>
                                </button>

                                <div class="admin-dash-nav-label" style="margin-top:16px">審核</div>
                                <button type="button" class="admin-dash-nav-row" data-route="moderation" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⊘</span>
                                    <span>敏感字 & 黑名單</span>
                                    <span class="admin-dash-nav-badge" data-count-blacklist hidden>—</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="ratelimit" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◑</span>
                                    <span>速率限制</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="audience" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⌂</span>
                                    <span>觀眾</span>
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
                                    <span class="admin-dash-nav-badge" data-count-plugins hidden>—</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="fonts" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⌂</span>
                                    <span>字型管理</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="system" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⚙</span>
                                    <span>系統 & 指紋</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="security" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⛨</span>
                                    <span>安全</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="audit" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⊜</span>
                                    <span>審計日誌</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="mobile" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">▤</span>
                                    <span>Mobile</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="backup" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⤓</span>
                                    <span>備份 & 匯出</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="about" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">ⓘ</span>
                                    <span>關於</span>
                                </button>
                            </nav>
                            <div class="admin-dash-telem">
                                <div class="admin-dash-telem-head">
                                    <span>TELEMETRY</span>
                                    <span class="status" data-telem-status>● HEALTHY</span>
                                </div>
                                <div class="admin-dash-telem-bars" data-telem-bars>
                                    <div class="admin-dash-telem-bar-row" data-telem-row="cpu">
                                        <span class="admin-dash-telem-bar-label">CPU</span>
                                        <span class="admin-dash-telem-bar-track"><span class="admin-dash-telem-bar-fill" data-telem-fill="cpu" style="width:0%"></span></span>
                                        <span class="admin-dash-telem-bar-value" data-telem-value="cpu">—</span>
                                    </div>
                                    <div class="admin-dash-telem-bar-row" data-telem-row="mem">
                                        <span class="admin-dash-telem-bar-label">MEM</span>
                                        <span class="admin-dash-telem-bar-track"><span class="admin-dash-telem-bar-fill" data-telem-fill="mem" style="width:0%"></span></span>
                                        <span class="admin-dash-telem-bar-value" data-telem-value="mem">—</span>
                                    </div>
                                    <div class="admin-dash-telem-bar-row" data-telem-row="ws">
                                        <span class="admin-dash-telem-bar-label">WS</span>
                                        <span class="admin-dash-telem-bar-track"><span class="admin-dash-telem-bar-fill" data-telem-fill="ws" style="width:0%"></span></span>
                                        <span class="admin-dash-telem-bar-value" data-telem-value="ws">—</span>
                                    </div>
                                    <div class="admin-dash-telem-bar-row" data-telem-row="rate">
                                        <span class="admin-dash-telem-bar-label">RATE</span>
                                        <span class="admin-dash-telem-bar-track"><span class="admin-dash-telem-bar-fill" data-telem-fill="rate" style="width:0%"></span></span>
                                        <span class="admin-dash-telem-bar-value" data-telem-value="rate">—</span>
                                    </div>
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
                                    <select id="server-lang-select" aria-label="Language"
                                      class="bg-slate-800/60 border border-slate-700 text-slate-300 text-xs rounded-lg px-2 py-2 focus:ring-sky-400 focus:border-sky-400">
                                      <option value="en" ${ServerI18n.currentLang === "en" ? "selected" : ""}>English</option>
                                      <option value="zh" ${ServerI18n.currentLang === "zh" ? "selected" : ""}>中文</option>
                                      <option value="ja" ${ServerI18n.currentLang === "ja" ? "selected" : ""}>日本語</option>
                                      <option value="ko" ${ServerI18n.currentLang === "ko" ? "selected" : ""}>한국어</option>
                                    </select>
                                    <button class="admin-dash-broadcast" type="button" aria-live="polite"
                                        title="切換廣播狀態" data-route="broadcast">
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
                                    <span class="title">快速投票</span>
                                    <span class="kicker">QUICK POLL · 單題 · 2–6 選項</span>
                                    <a class="admin-dash-card-head-link" href="#" data-route-link="polls">多題 builder →</a>
                                  </div>
                                  <div class="admin-dash-card-body admin-dash-quickpoll">
                                    <input
                                      type="text"
                                      class="admin-dash-qp-question"
                                      placeholder="問題文字…"
                                      maxlength="120"
                                      data-qp="question"
                                    />
                                    <div class="admin-dash-qp-options" data-qp="options">
                                      <div class="admin-dash-qp-row"><span class="key">A</span><input type="text" placeholder="選項 A" maxlength="60" /><button type="button" class="rm" data-qp-rm hidden>✕</button></div>
                                      <div class="admin-dash-qp-row"><span class="key">B</span><input type="text" placeholder="選項 B" maxlength="60" /><button type="button" class="rm" data-qp-rm hidden>✕</button></div>
                                      <div class="admin-dash-qp-row"><span class="key">C</span><input type="text" placeholder="選項 C" maxlength="60" /><button type="button" class="rm" data-qp-rm>✕</button></div>
                                      <div class="admin-dash-qp-row"><span class="key">D</span><input type="text" placeholder="選項 D" maxlength="60" /><button type="button" class="rm" data-qp-rm>✕</button></div>
                                    </div>
                                    <a href="#" class="admin-dash-qp-add" data-qp-add>+ 新增選項</a>
                                    <div class="admin-dash-qp-foot">
                                      <button type="button" class="admin-dash-qp-start" data-qp-start>START ▶</button>
                                    </div>
                                  </div>
                                </div>
                                <div class="admin-dash-card is-span-7" data-dash-card="messages">
                                  <div class="admin-dash-card-head">
                                    <span class="title">即時訊息</span>
                                    <span class="kicker">STREAM · 可封鎖 / 標記</span>
                                    <span class="auto">▶ AUTO</span>
                                  </div>
                                  <div class="admin-dash-msg-filters" role="tablist" aria-label="Message filter">
                                    <button type="button" class="admin-dash-msg-filter is-active" data-msg-filter="all">全部</button>
                                    <button type="button" class="admin-dash-msg-filter" data-msg-filter="qna">Q&amp;A</button>
                                    <button type="button" class="admin-dash-msg-filter" data-msg-filter="poll">Poll 投票</button>
                                    <button type="button" class="admin-dash-msg-filter" data-msg-filter="masked">已遮罩</button>
                                    <button type="button" class="admin-dash-msg-filter" data-msg-filter="replied">已回覆</button>
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
                                <input id="setting-speed-1" type="number" class="setting-input mt-1 w-full p-2.5 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Speed" data-index="1" value="${escapeHtml(String(currentSettings.Speed[1]))}" min="${settingRanges.Speed.min}" max="${settingRanges.Speed.max}" step="0.1">
                            </div>
                            <div>
                                <label for="setting-speed-2" class="text-sm font-medium text-slate-300">${ServerI18n.t("fastest")}</label>
                                <input id="setting-speed-2" type="number" class="setting-input mt-1 w-full p-2.5 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Speed" data-index="2" value="${escapeHtml(String(currentSettings.Speed[2]))}" min="${settingRanges.Speed.min}" max="${settingRanges.Speed.max}" step="0.1">
                            </div>
                        </div>
                        <small class="text-slate-400 text-xs block mt-2">${ServerI18n.t("speedHint")}</small>
                    `,
      `
                        <label for="setting-speed-3" class="text-sm font-medium text-slate-300">${ServerI18n.t("specificSpeed")}</label>
                        <input id="setting-speed-3" type="number" class="setting-input mt-1 w-full p-2.5 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Speed" data-index="3" value="${escapeHtml(String(currentSettings.Speed[3]))}" min="${settingRanges.Speed.min}" max="${settingRanges.Speed.max}" step="0.1">
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

    // Polls Builder (multi-question master-detail) — extracted to
    // admin-poll-builder.js (Group D-3 split, 2026-04-28). Self-binds
    // on admin-panel-rendered. Legacy single-question flow remains in
    // admin-poll.js (binds to hidden #pollQuestion compat shim there).

    // System Overview — extracted to admin-system-overview.js
    // (Group D-3 split, 2026-04-28). Self-binds on admin-panel-rendered.

    // Viewer Theme — extracted to admin-viewer-theme.js
    // (Group D-3 split, 2026-04-28). Self-binds on admin-panel-rendered.

    // Rate Limits editable card — extracted to admin-ratelimit.js
    // (Group D-3 split, 2026-04-28). Self-binds on admin-panel-rendered.

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
    setTimeout(() => { window.AdminDashboard?.refreshKpi?.(); }, 1500);
    setTimeout(() => { window.AdminDashboard?.refreshSummary?.(); }, 3000);

    // Sidebar TELEMETRY · 4-bar refresh — proto admin-pages.jsx 4 TelemBar rows.
    // Pulls latest CPU% / MEM% / WS clients / msg-rate from /admin/metrics
    // every 5 s. Bar fill is metric_value / threshold (CPU 100%, MEM 100%,
    // WS 100 conns, RATE 50 req/s) clamped to [0, 100].
    (function setupTelemetryBars() {
      const el = document.querySelector("[data-telem-bars]");
      if (!el) return;
      const status = document.querySelector("[data-telem-status]");
      // MEM threshold is in MB (sidebar shows e.g. "MEM 218 MB"); 1 GB used
      // marks the warn line. CPU is percent, WS is connections, RATE is req/s.
      const THRESHOLDS = { cpu: 100, mem: 1024, ws: 100, rate: 50 };

      function _set(metric, pct, valueText, healthy) {
        const fill = el.querySelector(`[data-telem-fill="${metric}"]`);
        const value = el.querySelector(`[data-telem-value="${metric}"]`);
        if (fill) {
          fill.style.width = Math.max(0, Math.min(100, pct)) + "%";
          fill.classList.toggle("is-warn", !healthy);
        }
        if (value) value.textContent = valueText;
      }

      async function tick() {
        try {
          const r = await fetch("/admin/metrics", { credentials: "same-origin" });
          if (!r.ok) return;
          const m = await r.json();
          const cpuArr   = m.cpu_series    || [];
          const memArr   = m.mem_series    || [];
          const memMbArr = m.mem_mb_series || [];
          const wsArr    = m.ws_series     || [];
          const rateArr  = m.rate_series   || [];
          const last = (a) => a.length ? a[a.length - 1] : 0;
          const cpuPct  = Number(last(cpuArr) || 0);
          // Sidebar MEM shows used MB (matches admin-pages.jsx prototype "MEM 218 MB").
          // Fall back to 0 when telemetry hasn't sampled yet; warn at >=1 GB used.
          const memMb   = Number(last(memMbArr) || 0);
          const memPct  = Number(last(memArr) || 0);
          const wsCount = Number(last(wsArr)  || (m.ws_clients || 0));
          // rate_series accumulates per-minute; convert to per-second for the
          // sidebar so the threshold bar matches the user mental model.
          const ratePerSec = Number(last(rateArr) || 0) / 60;

          _set("cpu",  (cpuPct / THRESHOLDS.cpu) * 100, `${cpuPct.toFixed(0)}%`,    cpuPct  < 90);
          _set("mem",  (memMb  / THRESHOLDS.mem) * 100, `${Math.round(memMb)} MB`,  memMb < THRESHOLDS.mem);
          _set("ws",   (wsCount / THRESHOLDS.ws)   * 100, String(wsCount),            wsCount < 100);
          _set("rate", (ratePerSec / THRESHOLDS.rate) * 100, `${ratePerSec.toFixed(1)}/s`, ratePerSec < 40);

          if (status) {
            const anyWarn = cpuPct >= 90 || memPct >= 90 || ratePerSec >= 40;
            status.textContent = anyWarn ? "● BUSY" : "● HEALTHY";
            status.classList.toggle("is-warn", anyWarn);
          }
        } catch (_) { /* silent — keep last values */ }
      }

      // First fetch deferred to avoid joining init burst (matches KPI/summary
      // polling cadence at +4s, then 5s interval).
      setTimeout(tick, 4000);
      setInterval(tick, 5000);
    })();
  }
  // Dashboard KPI + summary helpers extracted to admin-dashboard.js (P6-2).
  // Reachable via window.AdminDashboard.{refreshKpi, refreshSummary, ...}.

  const ADMIN_ROUTES = {
    dashboard: { title: "控制台", kicker: "DASHBOARD · 活動進行中", sections: [], showKpi: true },
    messages:  { title: "訊息紀錄",         kicker: "MESSAGES · 即時訊息串",    sections: ["sec-live-feed"] },
    // v5.2 consolidation (2026-04-27 audit §A): merged 歷史重播 → tab inside
    // history page. sec-history holds export, replay-v2-section holds the
    // replay UI; admin-history.js renders a tab strip that toggles them.
    history:   { title: "歷史",             kicker: "HISTORY · 匯出 / 重播",     sections: ["sec-history-tabs", "sec-history"] },
    polls:     { title: "投票",             kicker: "POLLS · 2–6 選項",         sections: ["sec-polls"] },
    widgets:   { title: "Overlay Widgets",  kicker: "OBS 小工具 · 分數板 · 跑馬燈", sections: ["sec-widgets"] },
    themes:    { title: "風格主題包",       kicker: "THEME PACKS · 彈幕樣式預設",       sections: ["sec-themes"] },
    // v5.2 consolidation (2026-04-27 audit §A): viewer-theme + display merged
    // into one route with tab strip. Default tab = page (sec-viewer-theme),
    // alt tab = fields (sec-color/opacity/fontsize/speed/fontfamily/layout).
    "viewer-config": { title: "Viewer 設定", kicker: "VIEWER CONFIG · 整頁主題 / 表單欄位", sections: ["sec-viewer-config-tabs", "sec-viewer-theme", "sec-color", "sec-opacity", "sec-fontsize", "sec-speed", "sec-fontfamily", "sec-layout"] },
    // v5.1 (2026-04-27 redesign): unified Assets Library overview on top
    // (sec-assets-overview from admin-assets.js) → existing emoji / stickers
    // / sounds sub-sections kept below for editing per-type.
    assets:    { title: "素材庫",           kicker: "ASSETS LIBRARY · 統一上傳入口 + 細部編輯", sections: ["sec-assets-overview", "sec-emojis", "sec-stickers", "sec-sounds"] },
    // v5.2 Sprint 1 (2026-04-27): Extensions catalog page — Slido / Discord
    // / OBS / Bookmarklet cards + shared Fire Token UI inline.
    integrations: { title: "整合",          kicker: "INTEGRATIONS · 第三方接入 · 共用 FIRE TOKEN", sections: ["sec-extensions-overview"] },
    // v5.2 Sprint 2 deeplink-only (2026-04-27 audit §A.3): Fire Token sub-row
    // removed from sidebar. Route stays reachable via integrations → 詳細統計.
    firetoken:    { title: "Fire Token",     kicker: "ADMIN LANE · FIRE TOKEN · 用量 / IP / AUDIT",  sections: ["sec-firetoken-overview"] },
    moderation:{ title: "敏感字 & 黑名單",  kicker: "MODERATION · 內建功能 · 非插件", sections: ["sec-blacklist", "sec-filters"] },
    ratelimit: { title: "速率限制",         kicker: "RATE LIMITS · 反刷屏",          sections: ["sec-ratelimit"] },
    effects:   { title: "效果庫 .dme",      kicker: "EFFECTS LIBRARY · 熱重載",  sections: ["sec-effects", "sec-effects-mgmt"] },
    plugins:   { title: "伺服器插件",       kicker: "PLUGIN SDK · 熱重載 · SANDBOX", sections: ["sec-plugins"] },
    fonts:     { title: "字型管理",         kicker: "FONT LIBRARY · 觀眾可選",   sections: ["sec-fonts"] },
    system:    { title: "系統 & 指紋",      kicker: "SYSTEM · FINGERPRINT · RATE LIMITS", sections: ["sec-system-overview", "sec-scheduler", "sec-webhooks", "sec-fingerprints"] },
    security:  { title: "安全",             kicker: "SECURITY · 密碼 · WS TOKEN · 審計",  sections: ["sec-security", "sec-ws-auth"] },
    backup:    { title: "備份 & 匯出",       kicker: "BACKUP · EXPORT · DANGER",          sections: ["sec-backup"] },
    // P1 (2026-04-27 V1Z4 batch7): aggregated alerts inbox.
    notifications: { title: "通知",          kicker: "NOTIFICATIONS · 警示中心 · 多來源",  sections: ["sec-notifications-overview"] },
    // P3 Group B (2026-04-27 V1Z4 batch7): fingerprint aggregation list.
    audience:  { title: "觀眾",               kicker: "AUDIENCE · 即時指紋聚合",           sections: ["sec-audience-overview"] },
    // P1 (2026-04-27 batch1): persistent audit trail (read-only history).
    audit:     { title: "審計日誌",           kicker: "AUDIT LOG · 持久事件紀錄 · DISK-BACKED", sections: ["sec-audit-overview"] },
    // P3 Group B (2026-04-27 V1Z4 batch8 #3): host-on-phone admin layout.
    mobile:    { title: "Mobile",             kicker: "MOBILE ADMIN · 主持人手機後台",      sections: ["sec-mobile-admin-overview"] },
    // Phase 2 P0-1 (2026-04-27 V1Z4 batch9): version + license + changelog.
    about:     { title: "關於",               kicker: "ABOUT · 版本 · CHANGELOG · 開源資訊", sections: ["sec-about-overview"] },
    // Phase 2 P0-2 (2026-04-27 batch3): #/setup opens the Setup Wizard
    // overlay (not a sidebar nav). Route exists so admin.js doesn't bounce
    // the hash back to /dashboard.
    setup:     { title: "設定精靈",           kicker: "SETUP WIZARD · 初次設定 · 可重跑",   sections: [] },
    // Phase 2 P0-3 (2026-04-27 batch8): #/poll-deepdive opens analytics
    // for current/last poll. Entry point = 📊 button on polls page.
    "poll-deepdive": { title: "投票深度分析",  kicker: "POLL ANALYTICS · 選項分佈 · 誠信檢查", sections: ["sec-poll-deepdive-overview"] },
    broadcast: { title: "廣播",              kicker: "BROADCAST · LIVE / STANDBY",         sections: [] },
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
      // Sync URL hash so external pages (admin-replay/security/backup) that
      // listen for `hashchange` re-evaluate their visibility. No-op if hash
      // already matches (prevents the click → setHash → hashchange → applyRoute
      // recursion from looping). Replace, not push, to keep history clean.
      const wantedHash = "#/" + currentRoute;
      if (window.location.hash !== wantedHash) {
        try { history.replaceState(null, "", wantedHash); } catch (_) {}
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
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

    const fromHash = (window.location.hash.match(/^#\/([\w-]+)/) || [])[1];
    applyRoute(fromHash || "dashboard");

    window.addEventListener("hashchange", () => {
      const h = (window.location.hash.match(/^#\/([\w-]+)/) || [])[1];
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

    // Replay controls — wired by admin-replay-controls.js (extracted module).

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
