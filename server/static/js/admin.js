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

  let currentSettings = {};

  // Module-level handles for beforeunload cleanup
  // (admin no longer connects to /ws since v5.0.0+ Phase 1 — live feed
  // polls /admin/live-feed/recent; settings_changed and blacklist_update
  // pushes were dropped along with the WS bootstrap.)
  let _adminSectionObserver = null;
  let _routeHashHandler = null;

  // ────────────────────────────────────────────────────────────────────
  // Slice 2 — Hash route compat layer (P0-0a + design-v2-backlog § P0-0)
  //
  // Adds infrastructure for `#/<nav>/<tab>` deep links + per-nav last-tab
  // memory + alias map for legacy → P0-0 route migration. NO behavioral
  // change in Slice 2: `_parseHashRoute` returns `{nav, tab}` but only
  // `nav` is consumed today (tab is captured for forward compatibility).
  // Slice 3 wires tab into applyRoute; Slice 4 populates _routeAliases.
  // ────────────────────────────────────────────────────────────────────

  // Phase A IA reorg (2026-05-06) — bare retired top-level slugs.
  //
  // ONLY the 3 slugs whose new home actually owns the original sections
  // belong here. Phase A is a no-DOM-move PR; if the target route doesn't
  // already render the same sec-* IDs, redirecting would silently lose
  // content (cf. P1 review of d405943 where redirecting `history → system`
  // broke `#/audit` because the System accordion has no audit slug).
  //
  // Crucially: this map is consulted on the RAW URL slug, BEFORE
  // `_parseHashRoute` runs the alias map below. That ordering prevents
  // collisions like `#/audit` (alias-resolved to nav="history") getting
  // double-translated to "system". Phase B/D collapses the rest of the
  // legacy navs once their sections move into the new owners.
  // Each entry is either a plain string (just nav rename, tab inherited
  // from the URL or alias) or `{nav, tab}` (Phase B 2026-05-06: redirect
  // a retired top-level slug to a specific leaf inside the new home so
  // bookmarks like `#/automation` land on a meaningful section instead
  // of the system overview).
  const _bareLegacyRedirects = Object.create(null);
  Object.assign(_bareLegacyRedirects, {
    dashboard: "live",   // dashboard.sections=[]; live owns sec-live-feed → both render KPI strip via data-route-view="dashboard" alias
    // 2026-05-18 v5: widgets / messages / history / themes / fonts / plugins /
    // audit / webhooks / api-tokens / backup / ratelimit / extensions promoted
    // to first-class sidebar slugs via _routeAliases entries below — no
    // bare redirect needed; applyRoute() resolves them at click time.
    automation: { nav: "system", tab: "scheduler" },
    // 2026-05-19 v5 IA: ◐ 顯示設定 sidebar item retired; its content
    // (overlay/viewer defaults) was already absorbed by viewer's 4-tab
    // layout. Bare redirect (not alias) so #/display bookmarks resolve
    // BEFORE ADMIN_ROUTES lookup — otherwise the legacy display entry
    // would intercept.
    display:    { nav: "viewer", tab: "defaults" },
  });

  // Maps deprecated single-segment routes → P0-0 nav homes.
  // Slice 4: each entry is either a string (just nav redirect) or a
  // {nav, tab} object (redirect to specific tab inside the new nav).
  // Slice 8 will remove the alias map once all callers use new routes.
  const _routeAliases = Object.create(null);
  Object.assign(_routeAliases, {
    // === Moderation tabs ===
    // 2026-05-18 v5: ratelimit promoted to first-class sidebar slug (has its
    // own ADMIN_ROUTES entry). Alias removed so #/ratelimit resolves directly.
    fingerprints: { nav: "moderation", tab: "fingerprints" },
    // brief 0518-v3 #2 (2026-05-18): queue + bans now moderation tabs.
    // Keep deep-link aliases so old bookmarks (#/modqueue, #/modbans) still
    // route correctly into the new tabbed shell.
    modqueue:     { nav: "moderation", tab: "queue" },
    modbans:      { nav: "moderation", tab: "bans" },
    // 2026-05-18 P2-6 polestar rename: `broadcast` slug aligned with the
    // user-facing "Overlay 控制" title. Old #/broadcast bookmarks resolve
    // to the same route via this alias.
    broadcast:    { nav: "overlay" },
    // (note: `moderation` is its own nav, blacklist+filters are tabs there)

    // === Appearance / viewer aliases ===
    // 2026-05-18 v5: themes / fonts promoted to first-class sidebar slugs.
    // Aliases removed so #/themes and #/fonts resolve directly to their
    // own ADMIN_ROUTES entries (no longer detour through appearance).
    "viewer-config": { nav: "viewer" },

    // === Automation tabs (Phase B 2026-05-06: now under system accordion) ===
    // 2026-05-18 v5: plugins promoted to first-class sidebar slug.
    scheduler: { nav: "system", tab: "scheduler" },
    // 2026-05-19: webhooks/search/audience/about/security promoted to
    // first-class routes with their own ADMIN_ROUTES entries. Aliases
    // removed so _parseHashRoute returns the leaf slug directly.

    // === History tabs (Phase B 2026-05-06: now under system accordion) ===
    // 2026-05-18 v5: audit promoted to first-class sidebar slug.
    // Note: session-detail is intentionally NOT aliased — its hash carries
    // a `?id=xxx` query that the parser would strip. session-detail keeps
    // its own route; admin-session-detail.js owns navigation back via UI.
    replay:          { nav: "system", tab: "replay" },

    // === System accordion (Slice 6) — alias old C-tier routes to system/<slug> ===
    // 2026-05-18 v5: api-tokens / backup / integrations promoted to
    // first-class sidebar slugs.
    extensions:   { nav: "integrations" },  // 2026-05-18 v5: sidebar "Extensions" → integrations route
    // Dedicated mobile-admin was removed; admin relies on the normal RWD shell.
    mobile:       { nav: "system", tab: "system" },
  });

  // Per-nav last-active-tab memory (sessionStorage). Cleared on logout.
  const _routeTabMemory = {
    _key: (nav) => "admin:tab:" + nav,
    get(nav) {
      try { return sessionStorage.getItem(this._key(nav)) || null; } catch (_) { return null; }
    },
    set(nav, tab) {
      try {
        if (tab) sessionStorage.setItem(this._key(nav), tab);
        else sessionStorage.removeItem(this._key(nav));
      } catch (_) { /* ignore quota / private mode */ }
    },
  };

  // Parse `#/<nav>` or `#/<nav>/<tab>`. Returns `{nav, tab}` or `null`.
  // Aliases can be either a plain string (nav rename) or an object
  // `{nav, tab}` (Slice 4: redirect deprecated route to specific tab inside
  // a new tabbed nav). Explicit URL tab segment wins over alias-supplied tab.
  //
  // Phase A IA reorg: bare retired slugs (`#/dashboard`, `#/messages`,
  // `#/widgets`) get rewritten to their new home FIRST — before any tab
  // alias resolution. That prevents a deep-link alias such as `#/audit`
  // (which resolves to `nav: "history"`) from being incorrectly redirected
  // a second time. A bare URL has no tab segment, so deep-links pass
  // through untouched.
  function _parseHashRoute(hash) {
    const m = (hash || "").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);
    if (!m) return null;
    let rawNav = m[1];
    const explicitTab = m[2] || null;
    let bareTab = null;
    if (!explicitTab) {
      const bare = _bareLegacyRedirects[rawNav];
      if (typeof bare === "string") {
        rawNav = bare;
      } else if (bare && typeof bare === "object") {
        rawNav = bare.nav || rawNav;
        bareTab = bare.tab || null;
      }
    }
    const alias = _routeAliases[rawNav];
    let nav = rawNav, aliasTab = null;
    if (typeof alias === "string") {
      nav = alias;
    } else if (alias && typeof alias === "object") {
      nav = alias.nav || rawNav;
      aliasTab = alias.tab || null;
    }
    return { nav, tab: explicitTab || aliasTab || bareTab, raw: rawNav };
  }

  // Build a hash route. Used by Slice 3 tab clicks.
  function _buildHashRoute(nav, tab) {
    return tab ? "#/" + nav + "/" + tab : "#/" + nav;
  }

  // Expose so admin-* modules (tab container in Slice 3) can read/write.
  window.AdminRouter = window.AdminRouter || {};
  Object.assign(window.AdminRouter, {
    aliases: _routeAliases,
    tabMemory: _routeTabMemory,
    parseHash: _parseHashRoute,
    buildHash: _buildHashRoute,
  });
  // _effectModalRestoreFocusEl moved to admin-effects-mgmt.js
  var loadDetailsState = window.AdminUtils.loadDetailsState;
  var saveDetailsState = window.AdminUtils.saveDetailsState;
  var escapeHtml = window.AdminUtils.escapeHtml;


  // Expose bootstrap-cache helpers for extracted admin-* modules so they can
  // re-use the /admin/bootstrap fan-out cache. Set after primeBootstrap +
  // bootstrapSection are defined above.
  window.AdminBootstrap = { primeBootstrap, bootstrapSection };


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
        // brief 0518-v3 #2 (2026-05-18): moderation queue + bans now live
        // here as tabs (defined in admin-tabs.js TabConfig.moderation).
        "sec-modqueue",
        "sec-modbans-overview",
        "sec-blacklist",
        "sec-history",
        "sec-filters",
        "sec-polls",
        "sec-security",
        "sec-ws-auth",
        "sec-onscreen-limits",
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
        `<tr style="border-top:1px solid var(--admin-line)"><td class="py-1 pr-3" style="color:var(--admin-text-dim)">${i + 1}</td><td class="py-1 pr-3 text-sm" style="color:var(--admin-text)">${escapeHtml(t.text)}</td><td class="py-1 font-mono text-sm" style="color:var(--color-primary)">${t.count}</td></tr>`
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
            <div class="stats-chart">${chartBars || `<span class="text-xs" style="color:var(--admin-text-dim)">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${topTexts.length ? `<table class="w-full text-xs"><tbody>${topTextRows}</tbody></table>` : `<span class="text-xs" style="color:var(--admin-text-dim)">${ServerI18n.t("noData")}</span>`}
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
                                <h3 class="text-lg font-bold" style="color:var(--admin-text)">${title}</h3>
                                <p class="text-sm" style="color:var(--admin-text-dim)">${description}</p>
                            </div>
                            <div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in flex-shrink-0">
                                <input type="checkbox" name="${id}" id="toggle-${id}" role="switch" aria-checked="${isEnabled}" aria-label="Toggle ${title}" class="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer" ${isEnabled ? "checked" : ""
      } />
                                <label for="toggle-${id}" class="toggle-label block overflow-hidden h-7 rounded-full cursor-pointer" style="background:var(--color-bg-elevated)"></label>
                            </div>
                        </div>
                        <div class="mt-4 pt-4" style="border-top:1px solid var(--admin-line)">
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
                                <span class="admin-dash-brand-suffix">ADMIN · v${config.appVersion || config.app_version || (window.APP_VERSION || "")}</span>
                            </div>
                            <nav class="admin-dash-nav" role="tablist" aria-label="Admin pages">
                                <!-- Design v4 grouped nav (2026-05-18): 5-section structure
                                     per Danmu Redesign v4 admin-pages.jsx. Items that resolve
                                     to alias targets (themes/widgets/plugins/fonts/audit/
                                     extensions/webhooks/api-tokens/backup/ratelimit) navigate
                                     via _routeAliases; applyRoute() resolves them. The active
                                     button matches the URL's raw slug so the clicked item
                                     stays highlighted even after alias redirect. -->

                                <div class="admin-dash-nav-label">總覽</div>
                                <button type="button" class="admin-dash-nav-row is-active" data-route="live" role="tab" aria-selected="true">
                                    <span class="admin-dash-nav-icon">◉</span>
                                    <span data-i18n="adminNavLive">控制台</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="messages" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">≡</span>
                                    <span data-i18n="adminNavMessages">訊息紀錄</span>
                                    <span class="admin-dash-nav-badge" data-count-messages hidden>—</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="history" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">↳</span>
                                    <span data-i18n="adminNavHistory">時間軸匯出</span>
                                </button>

                                <div class="admin-dash-nav-label">互動</div>
                                <button type="button" class="admin-dash-nav-row" data-route="polls" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◈</span>
                                    <span data-i18n="adminNavPolls">投票</span>
                                    <span class="admin-dash-nav-live"></span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="widgets" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⬚</span>
                                    <span data-i18n="adminNavWidgets">Desktop Widgets</span>
                                    <span class="admin-dash-nav-badge" data-count-widgets hidden>—</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="themes" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">❖</span>
                                    <span data-i18n="adminNavThemes">風格主題包</span>
                                    <span class="admin-dash-nav-badge" data-count-themes hidden>—</span>
                                </button>
                                <!-- v5 IA (2026-05-19): the ◐ 顯示設定 sidebar
                                     item was removed; its content (overlay /
                                     viewer defaults) was already absorbed by
                                     the viewer route's 4-tab layout
                                     (page/fields/defaults/limits). Legacy
                                     #/display bookmarks redirect to
                                     #/viewer/defaults via _bareLegacyRedirects. -->
                                <button type="button" class="admin-dash-nav-row" data-route="assets" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">▦</span>
                                    <span data-i18n="adminNavAssets">素材庫</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="viewer" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◑</span>
                                    <span data-i18n="adminNavViewer">觀眾頁</span>
                                </button>

                                <div class="admin-dash-nav-label">審核</div>
                                <button type="button" class="admin-dash-nav-row" data-route="moderation" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⊘</span>
                                    <span data-i18n="adminNavModeration">敏感字 &amp; 黑名單</span>
                                    <span class="admin-dash-nav-badge" data-count-blacklist hidden>—</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="ratelimit" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◔</span>
                                    <span data-i18n="adminNavRatelimit">速率限制</span>
                                </button>

                                <div class="admin-dash-nav-label">設定</div>
                                <button type="button" class="admin-dash-nav-row" data-route="effects" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">✦</span>
                                    <span data-i18n="adminNavEffects">效果庫 .dme</span>
                                    <span class="admin-dash-nav-badge" data-count-effects>—</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="plugins" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⬢</span>
                                    <span data-i18n="adminNavPlugins">伺服器插件</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="fonts" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⌂</span>
                                    <span data-i18n="adminNavFonts">字型管理</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="system" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⚙</span>
                                    <span data-i18n="adminNavSystem">系統 &amp; 指紋</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="audit" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◷</span>
                                    <span data-i18n="adminNavAudit">操作日誌</span>
                                </button>

                                <div class="admin-dash-nav-label">整合</div>
                                <button type="button" class="admin-dash-nav-row" data-route="extensions" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⌬</span>
                                    <span data-i18n="adminNavExtensions">Extensions</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="webhooks" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⇌</span>
                                    <span data-i18n="adminNavWebhooks">Webhooks</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="api-tokens" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⚿</span>
                                    <span data-i18n="adminNavApiTokens">API Tokens</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="backup" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⇪</span>
                                    <span data-i18n="adminNavBackup">備份 &amp; 還原</span>
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
                                      class="admin-v2-select" style="font-size:var(--text-xs);padding:8px">
                                      <option value="en" ${ServerI18n.currentLang === "en" ? "selected" : ""}>English</option>
                                      <option value="zh" ${ServerI18n.currentLang === "zh" ? "selected" : ""}>中文</option>
                                      <option value="ja" ${ServerI18n.currentLang === "ja" ? "selected" : ""}>日本語</option>
                                      <option value="ko" ${ServerI18n.currentLang === "ko" ? "selected" : ""}>한국어</option>
                                    </select>
                                    <button class="admin-dash-broadcast" type="button" aria-live="polite"
                                        title="切換 Desktop 狀態" data-route="overlay">
                                        <span class="dot"></span>
                                        ${broadcasting ? "DESKTOP · ON" : "DESKTOP · OFF"}
                                    </button>
                                    <button id="logoutButton" class="admin-poll-btn is-ghost" style="color:var(--color-danger);border-color:var(--color-danger);display:flex;align-items:center;gap:6px">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                                        <span data-i18n="logout">${ServerI18n.t("logout")}</span>
                                    </button>
                                </div>
                            </header>

                            <!-- Session banner — hidden until JS populates -->
                            <div id="admin-session-banner" class="admin-session-banner" data-route-view="dashboard" hidden></div>

                            <!-- KPI strip — design v4 live-console.jsx:85 spec.
                                 4 tiles: MESSAGES (cyan) / PEAK (amber) / UNIQUE FP
                                 (lime) / SESSION (text). Each tile has a 20-bar
                                 sparkline; the last bar is the current bucket
                                 rendered at full opacity, prior bars fade. Color
                                 modifier classes (is-cyan/is-amber/is-lime/is-text)
                                 colorize the value + sparkline so the strip reads
                                 as a HUD telemetry row. Sparkline contents are
                                 hydrated by admin-dashboard.js refreshKpi(). -->
                            <section class="admin-kpi-strip is-4col" data-route-view="dashboard">
                                <div class="admin-kpi-tile is-cyan" data-kpi="messages">
                                    <div class="admin-kpi-tile-head">
                                        <span class="label">訊息總數</span>
                                        <span class="en">MESSAGES</span>
                                    </div>
                                    <div class="admin-kpi-tile-value" data-kpi-value>—</div>
                                    <div class="admin-kpi-tile-bars" data-kpi-bars>${kpiBars(6)}</div>
                                    <div class="admin-kpi-tile-delta is-success" data-kpi-delta>載入中…</div>
                                </div>
                                <div class="admin-kpi-tile is-amber" data-kpi="peak">
                                    <div class="admin-kpi-tile-head">
                                        <span class="label">高峰/分鐘</span>
                                        <span class="en">PEAK</span>
                                    </div>
                                    <div class="admin-kpi-tile-value" data-kpi-value>—</div>
                                    <div class="admin-kpi-tile-bars" data-kpi-bars>${kpiBars(6)}</div>
                                    <div class="admin-kpi-tile-delta is-muted" data-kpi-delta>計算中…</div>
                                </div>
                                <div class="admin-kpi-tile is-lime" data-kpi="unique-fp">
                                    <div class="admin-kpi-tile-head">
                                        <span class="label">獨立指紋</span>
                                        <span class="en">UNIQUE FP</span>
                                    </div>
                                    <div class="admin-kpi-tile-value" data-kpi-value>—</div>
                                    <div class="admin-kpi-tile-bars" data-kpi-bars>${kpiBars(7)}</div>
                                    <div class="admin-kpi-tile-delta is-muted" data-kpi-delta>近 24h</div>
                                </div>
                                <div class="admin-kpi-tile is-text" data-kpi="session">
                                    <div class="admin-kpi-tile-head">
                                        <span class="label">本場時長</span>
                                        <span class="en">SESSION</span>
                                    </div>
                                    <div class="admin-kpi-tile-value" data-kpi-value>—</div>
                                    <div class="admin-kpi-tile-bars" data-kpi-bars>${kpiBars(3)}</div>
                                    <div class="admin-kpi-tile-delta is-muted" data-kpi-delta>等待場次…</div>
                                </div>
                            </section>

                            <!-- Dashboard summary grid — design v4 live-console.jsx:80
                                 12-col grid: LIVE FEED (7) + QUICK ACTIONS (3) +
                                 MY ACTIONS (2). The QUICK ACTIONS panel stacks
                                 4 sub-panels (Effects/Poll/Blacklist/Broadcast)
                                 mapped to F1–F4 shortcuts in the prototype. Active
                                 poll status and quick-poll launch live INSIDE the
                                 ② POLL sub-panel so polls are not a top-level card
                                 anymore — full poll editing lives on /polls.
                                 Widgets card was removed from dashboard; widget
                                 management is on /widgets. -->
                            <section class="admin-dash-summary" data-route-view="dashboard">
                              <div class="admin-dash-summary-grid">
                                <div class="admin-dash-card is-span-7" data-dash-card="messages">
                                  <div class="admin-dash-card-head">
                                    <span class="title">即時訊息</span>
                                    <span class="kicker">LIVE FEED · 可封鎖 / 標記</span>
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

                                <!-- QUICK ACTIONS (span 3) — 4 stacked sub-panels.
                                     Effects/Blacklist/Broadcast link out to their
                                     dedicated pages for full edit; Poll sub-panel
                                     can launch a quick poll inline (existing
                                     data-qp bindings still wire up to /admin/poll/create). -->
                                <div class="admin-dash-card is-span-3 admin-dash-quickactions" data-dash-card="quickactions">
                                  <div class="admin-dash-card-head">
                                    <span class="title">Quick Actions</span>
                                    <span class="kicker">F1–F4</span>
                                  </div>
                                  <div class="admin-dash-qa-stack">
                                    <!-- ① EFFECTS -->
                                    <div class="admin-dash-qa-panel is-cyan" data-qa-panel="effects">
                                      <div class="admin-dash-qa-head">
                                        <span class="key">① EFFECTS · F1</span>
                                        <span class="count" data-qa-effects-count>—</span>
                                      </div>
                                      <div class="admin-dash-qa-chips" data-qa-effects-chips>
                                        <span class="admin-dash-qa-chip is-loading">載入中…</span>
                                      </div>
                                      <a class="admin-dash-qa-link" href="#" data-route-link="effects">編輯 →</a>
                                    </div>

                                    <!-- POLL panel (F2) - active poll status + quick launch.
                                         data-dash-card poll-builder lives on the panel
                                         itself so bindQuickPoll() can query the options
                                         and foot from a single scope. populateDashboardPoll
                                         finds the body and timer via direct attribute
                                         selectors so no separate marker is needed. -->
                                    <div class="admin-dash-qa-panel is-amber" data-qa-panel="poll" data-dash-card="poll-builder">
                                      <div class="admin-dash-qa-head">
                                        <span class="key">② POLL · F2</span>
                                        <span class="count" data-dash-poll-timer></span>
                                      </div>
                                      <div class="admin-dash-qa-body" data-dash-poll-body>
                                        <div class="admin-dash-qa-empty">尚無進行中投票</div>
                                      </div>
                                      <div class="admin-dash-qa-row">
                                        <input
                                          type="text"
                                          class="admin-dash-qa-input"
                                          placeholder="新投票問題…"
                                          maxlength="120"
                                          data-qp="question"
                                          aria-label="新投票問題"
                                        />
                                        <button type="button" class="admin-dash-qa-cta is-amber" data-qa-poll-expand>新建 ▶</button>
                                      </div>
                                      <div class="admin-dash-qp-options admin-dash-qa-options" data-qp="options" hidden>
                                        <div class="admin-dash-qp-row"><span class="key">A</span><input type="text" placeholder="選項 A" maxlength="60" /><button type="button" class="rm" data-qp-rm hidden>✕</button></div>
                                        <div class="admin-dash-qp-row"><span class="key">B</span><input type="text" placeholder="選項 B" maxlength="60" /><button type="button" class="rm" data-qp-rm hidden>✕</button></div>
                                      </div>
                                      <div class="admin-dash-qp-foot" data-qa-poll-foot hidden>
                                        <a href="#" class="admin-dash-qp-add" data-qp-add>+ 新增選項</a>
                                        <button type="button" class="admin-dash-qp-start" data-qp-start>START ▶</button>
                                      </div>
                                      <a class="admin-dash-qa-link" href="#" data-route-link="polls">多題 builder →</a>
                                    </div>

                                    <!-- ③ BLACKLIST -->
                                    <div class="admin-dash-qa-panel is-crimson" data-qa-panel="blacklist">
                                      <div class="admin-dash-qa-head">
                                        <span class="key">③ BLACKLIST · F3</span>
                                        <span class="count" data-qa-blacklist-count>—</span>
                                      </div>
                                      <div class="admin-dash-qa-row">
                                        <input
                                          type="text"
                                          class="admin-dash-qa-input"
                                          placeholder="fp_ 或 @暱稱…"
                                          maxlength="120"
                                          data-qa-blacklist-input
                                          aria-label="新增黑名單關鍵字"
                                        />
                                        <button type="button" class="admin-dash-qa-cta is-crimson" data-qa-blacklist-add>+ 加入</button>
                                      </div>
                                      <div class="admin-dash-qa-chips" data-qa-blacklist-chips></div>
                                    </div>

                                    <!-- ④ BROADCAST — links to broadcast subsystem -->
                                    <div class="admin-dash-qa-panel is-cyan" data-qa-panel="broadcast">
                                      <div class="admin-dash-qa-head">
                                        <span class="key">④ BROADCAST · F4</span>
                                        <span class="count" data-qa-broadcast-status>—</span>
                                      </div>
                                      <a class="admin-dash-qa-link" href="#" data-route-link="overlay">Desktop 控制 →</a>
                                    </div>
                                  </div>
                                </div>

                                <!-- MY ACTIONS (span 2) — recent admin audit log,
                                     mirrors v4 live-console.jsx MY ACTIONS sidebar.
                                     Each row: action chip + target + timestamp.
                                     Data: /admin/audit?limit=8&actor=admin (see
                                     server/routes/admin/audit.py). -->
                                <div class="admin-dash-card is-span-2 admin-dash-myactions" data-dash-card="myactions">
                                  <div class="admin-dash-card-head">
                                    <span class="title">My Actions</span>
                                    <span class="kicker" data-dash-myactions-count>0</span>
                                  </div>
                                  <div class="admin-dash-myactions-body" data-dash-myactions-body>
                                    <div class="admin-dash-empty">尚無動作紀錄</div>
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

    // Effects Enable/Disable Card
    const effectsEnabled = currentSettings.Effects ? currentSettings.Effects[0] !== false : true;
    settingsGrid.insertAdjacentHTML("beforeend", settingCard(
      "Effects",
      ServerI18n.t("effectsSetting"),
      ServerI18n.t("effectsSettingDesc"),
      effectsEnabled,
      `<p class="text-sm" style="color:var(--admin-text-dim)">${ServerI18n.t("effectsEnabledMsg")}</p>`,
      `<p class="text-sm" style="color:var(--admin-text-dim)">${ServerI18n.t("effectsDisabledMsg")}</p>`
    ));

    // Effects Management — AdminEffectsPage layout (1fr + 340px YAML inspector)
    settingsGrid.insertAdjacentHTML("beforeend", `
      <div id="sec-effects-mgmt" class="hud-page-stack lg:col-span-2">
        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:16px">
            <!-- v5 Batch 12 polish: dashed-cyan drop zone per
                 batch12-effects.jsx EffectsLibraryPage. Replaces the
                 inline upload button; clicking the zone triggers the
                 same #effectUploadInput. Drag-and-drop wired below. -->
            <label for="effectUploadInput" class="admin-effects-dropzone" id="effectsDropzone">
              <span class="admin-effects-dropzone__icon">\u2726</span>
              <div class="admin-effects-dropzone__copy">
                <div class="admin-effects-dropzone__title">\u62d6\u5165 .dme \u6a94\u4e0a\u50b3\u65b0\u6548\u679c \u00b7 \u6216\u9ede\u6b64\u700f\u89bd</div>
                <div class="admin-effects-dropzone__hint">\u652f\u63f4 .dme \u00b7 .dme.zip \u00b7 \u6700\u5927 4 MB \u00b7 \u4e0a\u50b3\u5f8c\u81ea\u52d5\u71b1\u91cd\u8f09</div>
              </div>
              <span class="admin-effects-dropzone__cta">+ \u700f\u89bd\u6a94\u6848</span>
              <input type="file" id="effectUploadInput" accept=".dme" class="hidden">
            </label>

            <div class="hud-filter-row" id="effectsFilterRow">
              <span class="hud-filter-chip is-active" data-effect-filter="ALL">\u5168\u90e8 \u2014</span>
            </div>
            <div class="flex items-center justify-between" style="gap:8px">
              <p class="text-xs m-0" style="color:var(--admin-text-dim)">${ServerI18n.t("effectsManagementDesc")}</p>
              <div class="flex items-center" style="gap:6px">
                <button id="effectReloadBtn" class="hud-toolbar-action" type="button">
                  \u21bb ${ServerI18n.t("reload")}
                </button>
              </div>
            </div>
            <div id="effectsList" class="hud-effects-grid">
              <span class="text-xs" style="color:var(--admin-text-dim);grid-column:1 / -1">${ServerI18n.t("loadingEffectsAdmin")}</span>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:14px;position:sticky;top:0">
            <div class="hud-inspector" id="effectsInspector">
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
            </div>

            <!-- v5 Batch 12-5: Library stats card per batch12-effects.jsx -->
            <div class="admin-eflib-card">
              <div class="admin-eflib-label">LIBRARY STATS</div>
              <div class="admin-eflib-statgrid">
                <div><div class="admin-eflib-stat-en">TOTAL</div><div class="admin-eflib-stat-v" data-eflib-total>\u2014</div></div>
                <div><div class="admin-eflib-stat-en">ACTIVE</div><div class="admin-eflib-stat-v is-lime" data-eflib-active>\u2014</div></div>
                <div><div class="admin-eflib-stat-en">CATEGORIES</div><div class="admin-eflib-stat-v" data-eflib-cats>\u2014</div></div>
                <div><div class="admin-eflib-stat-en">USER UPLOADS</div><div class="admin-eflib-stat-v is-cyan" data-eflib-user>\u2014</div></div>
              </div>
            </div>

            <!-- v5 Batch 12-5: Stacking rules info card -->
            <div class="admin-eflib-card">
              <div class="admin-eflib-label">STACKING RULES</div>
              <ul class="admin-eflib-rules">
                <li>\u00b7 \u540c\u985e\u6548\u679c\u4e92\u65a5\uff08\u6700\u5f8c\u4e00\u500b\u751f\u6548\uff09</li>
                <li>\u00b7 \u8de8\u985e\u53ef\u758a\u52a0\uff08\u6700\u591a 3 \u5c64\uff09</li>
                <li>\u00b7 \u89c0\u773e\u53ef\u9078 1\u20133 \u500b\u6548\u679c</li>
                <li>\u00b7 priority \u4f4e\u7684\u5148\u7b97</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    `);

    // Theme Management Card
    settingsGrid.insertAdjacentHTML("beforeend", `
      <div id="sec-themes" class="hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">THEME PACKS \u00b7 \u5f48\u5e55\u6a23\u5f0f\u9810\u8a2d</div>
          <div class="admin-v2-title" data-i18n="styleThemePacks">${ServerI18n.t("styleThemePacks")}</div>
          <p class="admin-v2-note" data-i18n="themesSectionDesc">${ServerI18n.t("themesSectionDesc")}</p>
        </div>
        <div class="admin-v2-card" style="padding:14px;margin-top:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
            <button id="themeReloadBtn" class="admin-poll-btn is-ghost">
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
      </div>
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
              class="admin-v2-input w-full">
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
                    <div id="sec-history" class="admin-v3-card lg:col-span-2">
                        <div>
                            <h3 class="text-lg font-bold" style="color:var(--admin-text)">${ServerI18n.t("danmuHistory")}</h3>
                            <p class="text-sm" style="color:var(--admin-text-dim)">${ServerI18n.t("danmuHistoryDesc")}</p>
                        </div>
                        <div class="mt-4 pt-4 history-section-body" style="border-top:1px solid var(--admin-line)">
                            <div id="statsDashboard"></div>
                            <div class="space-y-3">
                                <div class="history-command-bar">
                                    <label class="text-sm font-medium" style="color:var(--admin-text-dim)">${ServerI18n.t("timeRange")}</label>
                                    <select id="historyHours" class="admin-v2-select">
                                        <option value="1">${ServerI18n.t("last1Hour")}</option>
                                        <option value="6">${ServerI18n.t("last6Hours")}</option>
                                        <option value="24" selected>${ServerI18n.t("last24Hours")}</option>
                                        <option value="72">${ServerI18n.t("last3Days")}</option>
                                        <option value="168">${ServerI18n.t("last7Days")}</option>
                                    </select>
                                    <button id="refreshHistoryBtn" class="admin-poll-btn is-primary">${ServerI18n.t("refreshBtn")}</button>
                                    <button id="exportHistoryBtn" class="admin-poll-btn is-ghost">${ServerI18n.t("exportCSV")}</button>
                                    <button id="clearHistoryBtn" class="admin-poll-btn is-ghost" style="color:var(--color-danger);border-color:var(--color-danger)">${ServerI18n.t("clearAll")}</button>
                                    <label class="flex items-center gap-2 text-xs cursor-pointer select-none ml-auto" style="color:var(--admin-text-dim)">
                                        <input type="checkbox" id="historyAutoRefresh" style="accent-color:var(--color-primary)">
                                        ${ServerI18n.t("autoRefresh")}
                                    </label>
                                </div>
                                <input id="historySearch" type="search" placeholder="${ServerI18n.t("searchHistory")}"
                                    class="admin-v2-input w-full">
                                <div id="replayToolbar" class="history-replay-toolbar">
                                    <button id="replayStartBtn" class="admin-poll-btn is-primary" style="--btn-bg:var(--color-success)">▶ ${ServerI18n.t("replaySelected")}</button>
                                    <button id="replayPauseBtn" class="admin-poll-btn is-ghost hidden">⏸ ${ServerI18n.t("pause")}</button>
                                    <button id="replayResumeBtn" class="admin-poll-btn is-primary hidden" style="--btn-bg:var(--color-success)">▶ ${ServerI18n.t("resume")}</button>
                                    <button id="replayStopBtn" class="admin-poll-btn is-ghost hidden" style="color:var(--color-danger);border-color:var(--color-danger)">⏹ ${ServerI18n.t("stop")}</button>
                                    <select id="replaySpeed" class="admin-v2-select">
                                        <option value="1">1x</option>
                                        <option value="2">2x</option>
                                        <option value="5">5x</option>
                                        <option value="10">10x</option>
                                    </select>
                                    <button id="replayRecordBtn" class="admin-poll-btn is-ghost" style="color:var(--color-danger);border-color:var(--color-danger)">⏺ ${ServerI18n.t("recordReplay") || "Record Replay"}</button>
                                    <span id="replayRecordingIndicator" class="text-sm hidden" style="color:var(--color-danger)">⏺ <span id="replayRecordingTimer">00:00</span></span>
                                    <button id="exportJsonBtn" class="admin-poll-btn is-ghost">${ServerI18n.t("exportJSON") || "Export JSON"}</button>
                                    <span id="replayProgress" class="text-sm hidden" style="color:var(--admin-text-dim)"></span>
                                </div>
                                <div id="historyStats" class="history-stats-strip text-sm" style="color:var(--admin-text-dim)"></div>
                                <div class="history-list-shell">
                                <div class="flex items-center gap-2 mb-1">
                                    <label class="flex items-center gap-2 text-xs cursor-pointer select-none" style="color:var(--admin-text-dim)">
                                        <input type="checkbox" id="historySelectAll" style="accent-color:var(--color-primary)">
                                        ${ServerI18n.t("selectAll")}
                                    </label>
                                </div>
                                <div id="danmuHistoryList" class="space-y-2 max-h-96 overflow-y-auto">
                                    <!-- History will be listed here -->
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

    // Password Change + WS Auth — fully owned by admin-security.js v2 page
    // (admin-security-v2-page). Legacy sec-security / sec-ws-auth <details>
    // cards + their inline handlers (changePasswordBtn / wsAuth* / password
    // -toggle) were removed 2026-04-28 Group D-3 R6 since the v2 page covers
    // identical functionality with sec2-pw-* IDs.

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
    setTimeout(() => { window.AdminDashboard?.startSessionPolling?.(); }, 800);

    // Sidebar TELEMETRY · 4-bar refresh — proto admin-pages.jsx 4 TelemBar rows.
    // Pulls latest CPU% / MEM% / WS clients / msg-rate from /admin/metrics
    // every 5 s. Bar fill: CPU + MEM use the real % (vm.percent / cpu_percent);
    // WS + RATE clamp against operator-meaningful thresholds (100 conns, 50 req/s).
    // MEM display: "80%" to align with CPU. Tooltip carries the absolute
    // "used / total GB" so the operator can dig in if pressure is suspicious.
    (function setupTelemetryBars() {
      const el = document.querySelector("[data-telem-bars]");
      if (!el) return;
      const status = document.querySelector("[data-telem-status]");
      const THRESHOLDS = { cpu: 100, mem: 100, ws: 100, rate: 50 };

      function _set(metric, pct, valueText, healthy, tooltip) {
        const fill = el.querySelector(`[data-telem-fill="${metric}"]`);
        const value = el.querySelector(`[data-telem-value="${metric}"]`);
        if (fill) {
          fill.style.width = Math.max(0, Math.min(100, pct)) + "%";
          fill.classList.toggle("is-warn", !healthy);
        }
        if (value) value.textContent = valueText;
        const row = el.querySelector(`[data-telem-row="${metric}"]`);
        if (row && tooltip) row.setAttribute("title", tooltip);
      }

      // Build "5.9 / 16.0 GB" tooltip for MEM (or "MB" form when total < 1024).
      function _memTooltip(usedMb, totalMb) {
        if (!totalMb || totalMb <= 0) return Math.round(usedMb) + " MB used";
        if (totalMb >= 1024) {
          const u = (usedMb / 1024).toFixed(1);
          const t = (totalMb / 1024).toFixed(1);
          return `${u} / ${t} GB used`;
        }
        return `${Math.round(usedMb)} / ${Math.round(totalMb)} MB used`;
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
          const cpuPct   = Number(last(cpuArr) || 0);
          const memPct   = Number(last(memArr) || 0);
          const memMb    = Number(last(memMbArr) || 0);
          const memTotal = Number(m.mem_total_mb || 0);
          const wsCount  = Number(last(wsArr)  || (m.ws_clients || 0));
          // rate_series accumulates per-minute; convert to per-second for the
          // sidebar so the threshold bar matches the user mental model.
          const ratePerSec = Number(last(rateArr) || 0) / 60;

          _set("cpu",  cpuPct,                              `${cpuPct.toFixed(0)}%`, cpuPct < 90);
          _set("mem",  memPct,                              `${memPct.toFixed(0)}%`, memPct < 90, _memTooltip(memMb, memTotal));
          _set("ws",   (wsCount / THRESHOLDS.ws)   * 100,   String(wsCount),         wsCount < 100);
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
    // Phase A IA reorg (2026-05-06): primary nav slugs are
    //   live / display / effects / assets / viewer / polls / moderation / system.
    // The legacy slugs below
    // (dashboard / messages / widgets / appearance / automation / history)
    // remain in this table as aliases so deeplinks + `|| "dashboard"`
    // fallbacks in admin-*.js stay resolvable; HASH_REDIRECTS in the
    // router rewrites them to the new canonical hash on landing.
    // Phase B/D will move sec-* DOM under the new owners and then we can
    // strip aliases. Until then this is pure routing — no HTML moves.
    live:      { title: "即時", kicker: "LIVE · 操作艙 · 即時狀態", sections: ["sec-live-feed"], showKpi: true },
    // 2026-05-19 v5 IA: `display` route retired. The bare-legacy
    // redirect (`#/display` → `#/viewer/defaults`) intercepts before
    // this lookup, so dropping the ADMIN_ROUTES entry is safe and
    // signals "this slug is no longer canonical".
    viewer:    { title: "觀眾頁", kicker: "VIEWER · 頁面預設 · 欄位設定 · 文案 / 限制", sections: ["sec-viewer-config-tabs", "sec-viewer-config-info", "sec-viewer-theme", "sec-viewer-config-fields", "sec-viewer-config-defaults", "sec-viewer-config-limits"] },
    // Legacy aliases — same config as their canonical home. Kept so
    // existing `=== "dashboard"` checks + URL bookmarks keep working
    // until Phase B/D collapses them.
    dashboard: { title: "控制台", kicker: "DASHBOARD · 活動進行中", sections: [], showKpi: true },
    messages:  { title: "訊息紀錄",         kicker: "MESSAGES · 即時訊息串",    sections: ["sec-live-feed"] },
    // Slice 4 (P0-0): history is now the merged tabbed nav (sessions /
    // search / audit / replay / audience). Each tab's section is hidden
    // when not active by AdminTabs.applyTabSectionVisibility. Replay tab
    // owns sec-history-tabs + history-v2-section + sec-history-list + sec-history.
    history:   { title: "歷史",             kicker: "HISTORY · 場次 / 搜尋 / 審計 / 重播 / 觀眾", sections: ["sec-sessions-overview", "sec-search-overview", "sec-audit-overview", "sec-history-tabs", "history-v2-section", "sec-history-list", "sec-history", "sec-audience-overview"] },
    polls:     { title: "投票",             kicker: "POLLS · 2–6 選項",         sections: ["sec-polls"] },
    widgets:   { title: "Desktop Widgets",  kicker: "OBS 小工具 · 分數板 · 跑馬燈", sections: ["sec-widgets"] },
    themes:    { title: "風格主題包",       kicker: "THEME PACKS · 彈幕樣式預設",       sections: ["sec-themes"] },
    // Viewer owns the page/fields/defaults/limits surface. Legacy
    // `#/viewer-config` deep-links still resolve here for backward compat.
    "viewer-config": { title: "Viewer 設定", kicker: "VIEWER CONFIG · 整頁主題 / 表單欄位 / 文案 / 限制", sections: ["sec-viewer-config-tabs", "sec-viewer-config-info", "sec-viewer-theme", "sec-viewer-config-fields", "sec-viewer-config-defaults", "sec-viewer-config-limits"] },

    // Hidden legacy shell retained for bookmarks / compat. The viewer tab here
    // mirrors the canonical Viewer surface instead of the retired sec-color/*
    // cards so alias routes don't regress to the old model.
    appearance: { title: "外觀", kicker: "APPEARANCE · 主題 / Viewer / 字型", sections: ["sec-themes", "sec-viewer-config-tabs", "sec-viewer-config-info", "sec-viewer-theme", "sec-viewer-config-fields", "sec-viewer-config-defaults", "sec-viewer-config-limits", "sec-fonts"] },

    // Slice 4: automation is the tabbed nav for scheduler + webhooks + plugins.
    // sec-scheduler + sec-webhooks currently live inside the system route's
    // sections; they get pulled into automation here so the route owns visibility.
    automation: { title: "自動化", kicker: "AUTOMATION · 排程 / Webhook / 插件", sections: ["sec-scheduler", "sec-webhooks", "sec-plugins"] },
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
    // Slice 4: moderation extended to host 4 tabs (blacklist / filters /
    // ratelimit / fingerprints). Each tab's section gets hidden by
    // AdminTabs.applyTabSectionVisibility when not active.
    // brief 0518-v3 #2: moderation gained queue + bans tabs (was deep-link only).
    moderation:{ title: "審核",  kicker: "MODERATION · 佇列 / 封禁 / 黑名單 / 敏感字 / 速率 / 指紋", sections: ["sec-modqueue", "sec-modbans-overview", "sec-blacklist", "sec-filters", "sec-ratelimit", "sec-fingerprints"] },
    ratelimit: { title: "速率限制",         kicker: "RATE LIMITS · 反刷屏",          sections: ["sec-ratelimit"] },
    effects:   { title: "效果庫 .dme",      kicker: "EFFECTS LIBRARY · 熱重載",  sections: ["sec-effects", "sec-effects-mgmt"] },
    plugins:   { title: "伺服器插件",       kicker: "PLUGIN SDK · 熱重載 · SANDBOX", sections: ["sec-plugins"] },
    webhooks:  { title: "Webhooks",          kicker: "WEBHOOKS · 端點 · 投遞紀錄 · 重送", sections: ["sec-webhooks"] },
    fonts:     { title: "字型管理",         kicker: "FONT LIBRARY · 觀眾可選",   sections: ["sec-fonts"] },
    // Slice 6: system hosts the C-tier accordion. scheduler /
    // webhooks moved to automation; fingerprints moved to moderation. The
    // accordion shell is rendered by admin-system-accordion.js.
    // Phase B (2026-05-06): system absorbs automation + history. The
    // accordion now hosts the back-office leaves (settings / access / automation /
    // history). Sections list includes every leaf the accordion can open:
    // settings + access (existing) + automation (sec-scheduler/webhooks/
    // plugins) + history (sec-sessions-overview/search-overview/audit-
    // overview/history-tabs/history-v2-section/sec-history-list/sec-history/audience-
    // overview). admin-system-accordion.js drives per-leaf visibility.
    system:    { title: "系統",  kicker: "SYSTEM · 設定 / 金鑰 / 自動化 / 歷史", sections: ["sec-system-overview", "sec-firetoken-overview", "sec-api-tokens-overview", "sec-backup", "sec-extensions-overview", "sec-wcag-overview", "sec-about-overview", "sec-scheduler", "sec-webhooks", "sec-plugins", "sec-sessions-overview", "sec-search-overview", "sec-audit-overview", "sec-history-tabs", "history-v2-section", "sec-history-list", "sec-history", "sec-audience-overview"] },
    // Legacy alias target only. Security now resolves under system/security;
    // the v2 page handles its own visibility from activeRoute + activeLeaf.
    security:  { title: "安全",             kicker: "SECURITY · 密碼 · WS TOKEN · 審計",  sections: [] },
    backup:    { title: "備份 & 匯出",       kicker: "BACKUP · EXPORT · DANGER",          sections: ["sec-backup"] },
    // P1 (2026-04-27 V1Z4 batch7): aggregated alerts inbox.
    notifications: { title: "通知",          kicker: "NOTIFICATIONS · 警示中心 · 多來源",  sections: ["sec-notifications-overview"] },
    // P3 Group B (2026-04-27 V1Z4 batch7): fingerprint aggregation list.
    audience:  { title: "觀眾",               kicker: "AUDIENCE · 即時指紋聚合",           sections: ["sec-audience-overview"] },
    // P1 (2026-04-27 batch1): persistent audit trail (read-only history).
    audit:     { title: "審計日誌",           kicker: "AUDIT LOG · 持久事件紀錄 · DISK-BACKED", sections: ["sec-audit-overview"] },
    // P2-3 (2026-05-17 design v4): system event stream — aliases /admin/audit
    // backend with a v4 visual treatment (severity dot/chip + simpler row).
    events:    { title: "系統事件",           kicker: "SYSTEM · EVENTS · AUTO-EMITTED",    sections: ["sec-events"] },
    // 2026-05-18 brief 0518-v3 #2: modqueue + modbans live as moderation
    // sub-tabs (see TabConfig in admin-tabs.js). Deep-link entries
    // `#/modqueue` / `#/modbans` are alias-redirected to the moderation
    // route before ADMIN_ROUTES lookup, so no standalone entries needed.
    // Phase 2 P0-1 (2026-04-27 V1Z4 batch9): version + license + changelog.
    about:     { title: "關於",               kicker: "ABOUT · 版本 · CHANGELOG · 開源資訊", sections: ["sec-about-overview"] },
    // Phase 2 P0-2 (2026-04-27 batch3): #/setup opens the Setup Wizard
    // overlay (not a sidebar nav). Route exists so admin.js doesn't bounce
    // the hash back to /dashboard.
    setup:     { title: "設定精靈",           kicker: "SETUP WIZARD · 初次設定 · 可重跑",   sections: [] },
    // Phase 2 P0-3 (2026-04-27 batch8): #/poll-deepdive opens analytics
    // for current/last poll. Entry point = 📊 button on polls page.
    "poll-deepdive": { title: "投票深度分析",  kicker: "POLL ANALYTICS · 選項分佈 · 誠信檢查", sections: ["sec-poll-deepdive-overview"] },
    // 2026-05-18 P2-6 rename: route slug now matches the page title.
    // `broadcast` is alias-only (see _routeAliases above) — alias rewrites
    // the nav before this lookup so a standalone entry is dead code.
    overlay:   { title: "Desktop 控制",        kicker: "DESKTOP · ON / OFF / PAUSED",       sections: [] },
    // Missing prototype pages — implemented 2026-04-29
    sessions:     { title: "場次",            kicker: "SESSIONS · 場次列表 · 即時 / 歷史",  sections: ["sec-sessions-overview"] },
    "session-detail": { title: "場次詳情",    kicker: "SESSION DETAIL · 密度時間軸 · 訊息回顧", sections: ["sec-session-detail-overview"] },
    search:       { title: "搜尋",            kicker: "SEARCH · 全文搜尋 · 跨場次",          sections: ["sec-search-overview"] },
    "api-tokens": { title: "API Tokens",      kicker: "API TOKENS · 開發者存取 · 權限管理",  sections: ["sec-api-tokens-overview"] },
    // A11y + i18n tools (2026-04-29)
    wcag:         { title: "WCAG 對比度",      kicker: "A11Y · WCAG 2.1 CONTRAST CHECKER",    sections: ["sec-wcag-overview"] },
    // Onboarding route — overlay only, no section
    "onboarding-tour": { title: "新手導覽",    kicker: "ONBOARDING · 5 步驟快速上手",          sections: [] },
  };

  function initAdminRouter() {
    const shell = document.querySelector(".admin-dash-grid");
    if (!shell) return;

    let currentRoute = "dashboard";

    let _activeTab = null;  // last-applied tab for currentRoute (Slice 3 + 6)

    function routeSectionOwner(sectionId) {
      if (ADMIN_SECTION_GROUPS.moderation.orderedIds.indexOf(sectionId) !== -1) return "moderation-grid";
      if (ADMIN_SECTION_GROUPS.assets.orderedIds.indexOf(sectionId) !== -1) return "assets-grid";
      if (sectionId === "sec-scheduler" || sectionId === "sec-webhooks") return "sec-advanced";
      return "settings-grid";
    }

    function syncRouteContainerVisibility() {
      const cfg = ADMIN_ROUTES[currentRoute];
      const wantedOwners = new Set((cfg.sections || []).map(routeSectionOwner));
      shell.querySelectorAll(".admin-route-sections").forEach((container) => {
        if (container.id === "sec-advanced") {
          const hasWanted = wantedOwners.has("sec-advanced");
          container.style.display = hasWanted ? "" : "none";
          return;
        }
        const hasWanted = wantedOwners.has(container.id);
        container.style.display = hasWanted ? "" : "none";
      });
    }

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
      // Slice 3: tab-aware visibility wins over route-level visibility for
      // tabbed nav routes.
      if (_activeTab && window.AdminTabs?.hasTabsFor?.(currentRoute)) {
        window.AdminTabs.applyTabSectionVisibility(currentRoute, _activeTab, shell);
      }
      // Slice 6: system accordion treats `_activeTab` as the open accordion
      // slug. Hides all other system sections so only one shows at a time.
      if (currentRoute === "system" && window.AdminSystemAccordion) {
        window.AdminSystemAccordion.applySectionVisibility(_activeTab, shell);
      }
      syncRouteContainerVisibility();
    };

    const applyRoute = (name, requestedTab, rawName) => {
      // Track original/raw nav slug so the clicked alias button keeps
      // is-active after redirect (design v4 grouped sidebar 2026-05-18).
      rawName = rawName || name;
      // If called with an alias slug (e.g. "themes"), resolve to its real
      // route via _bareLegacyRedirects / _routeAliases. Hash-driven calls
      // already pre-resolve in _parseHashRoute; this branch handles direct
      // click → applyRoute(slug) where slug isn't in ADMIN_ROUTES.
      if (!ADMIN_ROUTES[name]) {
        const bare = _bareLegacyRedirects[name];
        if (typeof bare === "string") {
          name = bare;
        } else if (bare && typeof bare === "object") {
          if (bare.nav) name = bare.nav;
          if (!requestedTab && bare.tab) requestedTab = bare.tab;
        } else {
          const alias = _routeAliases[name];
          if (typeof alias === "string") {
            name = alias;
          } else if (alias && typeof alias === "object") {
            if (alias.nav) name = alias.nav;
            if (!requestedTab && alias.tab) requestedTab = alias.tab;
          }
        }
      }
      currentRoute = ADMIN_ROUTES[name] ? name : "live";
      shell.dataset.activeRoute = currentRoute;
      // Slice 8: legacy modules (admin-backup / admin-audit / admin-audience /
      // admin-search / admin-sessions / admin-session-detail /
      // admin-notifications / admin-broadcast / admin-poll-deepdive) check the
      // shell's active route to decide their own visibility. After Slice 4/6
      // alias redirect, `dataset.activeRoute` is the P0-0 top nav (history,
      // system, etc.) — not the leaf those modules expect. `activeLeaf` carries
      // the canonical leaf slug: tab slug if tabbed/accordion, else top route.
      // Legacy modules read this instead so they keep working under aliases.

      // Resolve tab (Slice 3): hint > sessionStorage > default. Returns null
      // for nav routes that don't opt into tabs.
      // Slice 6: system route uses AdminSystemAccordion — same shape but
      // resolves to a system accordion slug instead of a tab slug.
      let activeTab;
      if (window.AdminTabs?.hasTabsFor?.(currentRoute)) {
        activeTab = window.AdminTabs.resolveActiveTab(currentRoute, requestedTab);
      } else if (currentRoute === "system" && window.AdminSystemAccordion) {
        activeTab = window.AdminSystemAccordion.resolveActiveSlug(requestedTab);
      } else {
        activeTab = null;
      }

      // Sync URL hash. When applyRoute was called with an alias slug
      // (rawName differs from resolved currentRoute), keep rawName in
      // the URL so the matching sidebar button stays highlighted on
      // re-entry via hashchange. Otherwise use canonical `#/<nav>(/<tab>)`.
      const wantedHash = (rawName && rawName !== currentRoute)
        ? "#/" + rawName
        : (window.AdminRouter?.buildHash
            ? window.AdminRouter.buildHash(currentRoute, activeTab)
            : "#/" + currentRoute);
      if (window.location.hash !== wantedHash) {
        try { history.replaceState(null, "", wantedHash); } catch (_) {}
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
      const cfg = ADMIN_ROUTES[currentRoute];

      // Active state — prefer the alias button (matching rawName) over the
      // resolved-nav button so the user's clicked sidebar item stays lit
      // after alias redirect. Falls back to currentRoute match otherwise.
      const _allBtns = Array.from(shell.querySelectorAll("[data-route]"));
      const _aliasBtn = (rawName !== currentRoute)
        ? _allBtns.find((b) => b.dataset.route === rawName)
        : null;
      _allBtns.forEach((btn) => {
        const on = _aliasBtn ? (btn === _aliasBtn) : (btn.dataset.route === currentRoute);
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-selected", on ? "true" : "false");
      });

      const kicker = shell.querySelector("[data-route-kicker]");
      const title = shell.querySelector("[data-route-title]");
      var _t = window.ServerI18n ? window.ServerI18n.t.bind(window.ServerI18n) : function (k) { return k; };
      var _titleKey = "adminRouteTitle_" + currentRoute;
      var _kickerKey = "adminRouteKicker_" + currentRoute;
      var _titleText = _t(_titleKey);
      var _kickerText = _t(_kickerKey);
      if (kicker) kicker.textContent = (_kickerText !== _kickerKey) ? _kickerText : cfg.kicker;
      if (title) title.innerHTML = (_titleText !== _titleKey) ? _titleText : cfg.title;

      // Phase A IA reorg: `live` is the cockpit successor to `dashboard`;
      // until Phase C reframes the dashboard view, `data-route-view=
      // "dashboard"` content (KPI strip + session banner + summary) renders
      // on both slugs so the live cockpit isn't blank.
      const _isCockpit = currentRoute === "dashboard" || currentRoute === "live";
      shell.querySelectorAll("[data-route-view=\"dashboard\"]").forEach((el) => {
        el.style.display = _isCockpit ? "" : "none";
      });

      // Session banner polling — start on cockpit, stop otherwise
      if (_isCockpit) {
        window.AdminDashboard?.startSessionPolling?.();
      } else {
        window.AdminDashboard?.stopSessionPolling?.();
      }

      // Slice 3 + 6: stash tab/slug so applySectionVisibility (and the
      // MutationObserver re-fire path) respects per-tab visibility. Cleared
      // for non-tabbed/non-accordion routes.
      _activeTab = activeTab;
      if (activeTab) {
        if (currentRoute === "system" && window.AdminSystemAccordion) {
          window.AdminSystemAccordion._setMem(activeTab);
        } else {
          window.AdminRouter?.tabMemory?.set?.(currentRoute, activeTab);
        }
      }
      // Slice 8: expose canonical leaf slug for legacy modules.
      shell.dataset.activeLeaf = activeTab || currentRoute;

      applySectionVisibility();

      // Tab-aware modules (admin-display.js viewer tabs, etc.) need to
      // re-apply per-tab visibility AFTER applySectionVisibility — that
      // pass writes inline display="" on every wanted sec-* and clobbers
      // anything syncVisibility set on the earlier hashchange. Dispatching
      // here gives those modules a stable hook that runs last.
      document.dispatchEvent(new CustomEvent("admin-route-applied", {
        detail: { route: currentRoute, leaf: activeTab },
      }));

      _renderTabStripFor(currentRoute, activeTab);

      try { history.replaceState(null, "", wantedHash); } catch (e) { /* ignore */ }
    };

    // Mounts (or removes) the tab strip / system accordion in the topbar host.
    // Strip lives between `.admin-dash-topbar` and the route-view sections.
    function _renderTabStripFor(nav, activeTab) {
      let host = shell.querySelector("[data-admin-tabs-host]");
      if (!host) {
        const topbar = shell.querySelector(".admin-dash-topbar");
        if (!topbar) return;
        host = document.createElement("div");
        host.dataset.adminTabsHost = "";
        topbar.insertAdjacentElement("afterend", host);
      }
      host.innerHTML = "";

      // Slice 3: tabbed nav routes
      if (window.AdminTabs?.hasTabsFor?.(nav) && activeTab) {
        host.hidden = false;
        const strip = window.AdminTabs.renderTabStrip(nav, activeTab, {
          onSelect: (tab) => applyRoute(nav, tab),
        });
        if (strip) host.appendChild(strip);
        host.classList.remove("admin-tabs-host--accordion");
        return;
      }

      // Slice 6: system accordion (vertical accordion replaces horizontal strip)
      if (nav === "system" && window.AdminSystemAccordion && activeTab) {
        host.hidden = false;
        host.classList.add("admin-tabs-host--accordion");
        const acc = window.AdminSystemAccordion.renderAccordion(activeTab, {
          onSelect: (slug) => applyRoute("system", slug),
        });
        if (acc) host.appendChild(acc);
        return;
      }

      host.classList.remove("admin-tabs-host--accordion");
      host.hidden = true;
    }

    // Slice 8: backstage toggle + collapsible panel removed (Slice 4 collapsed
    // the sidebar to 10 P0-0 buttons, the panel had nothing to host). The
    // _backstageHandlerBound guard above is now also dead — kept as no-op
    // until next code-quality pass.

    // Rebind hash listener on every router init so hash changes always target
    // the latest shell/applyRoute closure after panel re-render.
    if (_routeHashHandler) {
      window.removeEventListener("hashchange", _routeHashHandler);
    }
    _routeHashHandler = () => {
      const parsed = _parseHashRoute(window.location.hash);
      // Capture user-typed slug (before alias resolution) so the matching
      // sidebar button stays highlighted under the 5-section grouped nav.
      const m = (window.location.hash || "").match(/^#\/([\w-]+)/);
      const urlRaw = m ? m[1] : null;
      if (parsed) applyRoute(parsed.nav, parsed.tab, urlRaw || parsed.raw);
    };
    window.addEventListener("hashchange", _routeHashHandler);

    shell.querySelectorAll("[data-route]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        applyRoute(btn.dataset.route);
      });
    });

    const fromHash = _parseHashRoute(window.location.hash);
    const _initMatch = (window.location.hash || "").match(/^#\/([\w-]+)/);
    const _initRaw = _initMatch ? _initMatch[1] : (fromHash?.raw || fromHash?.nav || "live");
    applyRoute(fromHash?.nav || "live", fromHash?.tab || null, _initRaw);

    // Expose for i18n: re-apply route title/kicker on language change
    window._adminNavigateTo = () => applyRoute(currentRoute, _activeTab);

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



  // Themes management extracted to admin-themes.js (window.AdminThemes)
  function initThemesManagement() {
    if (window.AdminThemes) window.AdminThemes.init();
  }

  // Effects management extracted to admin-effects-mgmt.js (window.AdminEffects)
  function initEffectsManagement() {
    if (window.AdminEffects) window.AdminEffects.init();
  }

  // v5.0.0+ Phase 1: admin no longer opens a WebSocket. Real-time live
  // feed migrated to polling (admin-live-feed.js polls
  // /admin/live-feed/recent every 1.5 s). The legacy push types
  // `blacklist_update` and `settings_changed` were multi-admin-sync
  // niceties; they're now accepted as "manual reload to see other
  // admin's edits" until / unless polling is added for those too.
  // Eliminated whole class of mis-routing bugs (see commit 3e9cfef
  // for the production reconnect-storm root cause).

  // Cleanup all background resources on page unload (prevents memory leaks)
  window.addEventListener("beforeunload", () => {
    if (_adminSectionObserver) {
      _adminSectionObserver.disconnect();
      _adminSectionObserver = null;
    }
  });

  init();
});
