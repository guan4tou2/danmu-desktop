document.addEventListener("DOMContentLoaded", () => {
  // 每次取用都重讀 meta，不要快取成 const。設計稿 15 · EX1 的「登入過期
  // 對話框」會就地重新登入，而 /login 成功時 server 會 session.clear() 並
  // 發一顆新的 CSRF token；舊寫法把 token 凍在 DOMContentLoaded，重新登入
  // 之後每個 csrfFetch 都會 403。
  function csrfToken() {
    const meta = document.querySelector('meta[name="csrf-token"]');
    return (meta && meta.content) || "";
  }

  // Access configuration injected from HTML
  const config = window.DANMU_CONFIG || {};
  let session = config.session || { logged_in: false };
  const settingRanges = config.settingRanges || {};

  function csrfFetch(url, options = {}) {
    const opts = { credentials: "same-origin", ...options };
    const headers = new Headers(options.headers || {});
    headers.set("X-CSRF-Token", csrfToken());
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
    // 2026-07-28 v7 IA: 訊息紀錄 was the same sec-live-feed with a different
    // title — the sidebar row is gone, old bookmarks land on the console.
    messages:  "live",
    // 2026-05-18 v5: widgets / messages / history / themes / fonts / plugins /
    // audit / webhooks / api-tokens / backup / ratelimit / extensions promoted
    // to first-class sidebar slugs via _routeAliases entries below — no
    // bare redirect needed; applyRoute() resolves them at click time.
    // 2026-05-19 v5 IA: ◐ 顯示設定 sidebar item retired; its content
    // (overlay/viewer defaults) was already absorbed by viewer's 4-tab
    // layout. Bare redirect (not alias) so #/display bookmarks resolve
    // BEFORE ADMIN_ROUTES lookup — otherwise the legacy display entry
    // would intercept.
    display:    { nav: "viewer", tab: "defaults" },
    // 2026-07-28 v7 IA: ratelimit demoted from first-class sidebar row back
    // to its moderation tab — one feature had two doors. audit folds into
    // the history tabbed nav (retitled 紀錄 & 匯出); fonts folds into the
    // assets tabbed nav. Bookmarks land on the right tab via object form.
    ratelimit:  { nav: "moderation", tab: "ratelimit" },
    audit:      { nav: "history", tab: "audit" },
    fonts:      { nav: "assets", tab: "fonts" },
    // 2026-09-07 設計稿 08 · X1：擴充四合一，四條舊路由的書籤落到對應分頁。
    webhooks:    { nav: "integrations", tab: "webhooks" },
    plugins:     { nav: "integrations", tab: "plugins" },
    "api-tokens": { nav: "integrations", tab: "api-tokens" },
    scheduler:   { nav: "integrations", tab: "scheduler" },
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
    // user-facing "Desktop 控制" title. Old #/broadcast bookmarks resolve
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
    // v7 S4 (2026-07-28): `automation` moved from _bareLegacyRedirects to an
    // alias so explicit-tab deep links (#/automation/webhooks) also translate
    // into the system accordion; its dead ADMIN_ROUTES entry is gone.
    automation: { nav: "integrations", tab: "scheduler" },
    // v7 S4: `appearance` retired — themes/fonts/viewer-config all have
    // first-class homes; old bookmarks land on the themes page. Alias (not
    // bare) so #/appearance/<anything> still resolves.
    appearance: { nav: "themes" },
    scheduler: { nav: "integrations", tab: "scheduler" },
    // 2026-05-19: webhooks/search/audience/about/security promoted to
    // first-class routes with their own ADMIN_ROUTES entries. Aliases
    // removed so _parseHashRoute returns the leaf slug directly.

    // === History tabs (Phase B 2026-05-06: now under system accordion) ===
    // 2026-05-18 v5: audit promoted to first-class sidebar slug.
    // Note: session-detail is intentionally NOT aliased — its hash carries
    // a `?id=xxx` query that the parser would strip. session-detail keeps
    // its own route; admin-session-detail.js owns navigation back via UI.
    // v7 S3 (2026-07-28): accordion retired — replay's home is the history
    // tabbed nav (紀錄 & 匯出), same as audit.
    replay:          { nav: "history", tab: "replay" },

    // === System accordion (Slice 6) — alias old C-tier routes to system/<slug> ===
    // 2026-05-18 v5: api-tokens / backup / integrations promoted to
    // first-class sidebar slugs.
    // 2026-05-18 v5: sidebar "Extensions" → integrations route。
    // 2026-09-07 設計稿 08 · X1：擴充變成四個分段，而目錄卡片（Slido／Discord／
    // OBS／Bookmarklet，含 Fire Token 設定）歸在「插件」那一段——所以要明確
    // 指定分頁，不然 #/extensions 會落在預設的 Webhook 段，目錄根本不在畫面上。
    extensions:   { nav: "integrations", tab: "plugins" },
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
    // v7 S4: surface legacy-slug hits (once per slug per session) so stale
    // bookmarks/docs get noticed before the redirect tables are removed.
    if (m[1] !== nav) {
      if (!_parseHashRoute._warned) _parseHashRoute._warned = new Set();
      if (!_parseHashRoute._warned.has(m[1])) {
        _parseHashRoute._warned.add(m[1]);
        try {
          console.info(
            "[admin] legacy route #/" + m[1] + " → #/" + nav +
            (explicitTab || aliasTab || bareTab ? "/" + (explicitTab || aliasTab || bareTab) : "") +
            " — update your bookmark; redirects are scheduled for removal."
          );
        } catch (_) {}
      }
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
          ServerI18n.t("settingRangeError", {
            key: key,
            min: settingRanges[key].min,
            max: settingRanges[key].max,
          }),
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
        `<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${i + 1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${escapeHtml(t.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${t.count}</td></tr>`
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
            <div class="stats-chart">${chartBars || `<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${topTexts.length ? `<table class="w-full text-xs"><tbody>${topTextRows}</tbody></table>` : `<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
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
    // settingCard 工廠已於 2026-07-30 退役（Effects 開關列改為就地模板）

    // 2026-09-06 設計稿 06：KPI sparkline 移除（20 個資料點畫不出趨勢，
    // 只讓每張卡長高 60px），連帶這個假資料產生器一起刪。
    const telemBars = (pattern) =>
      pattern.map((b) => `<span style="height:${b * 10}%;opacity:${0.3 + b * 0.08}"></span>`).join("");
    const broadcasting = overlayMode && overlayMode !== "off";
    const httpPort = window.location.port || (window.location.protocol === "https:" ? "443" : "80");

    appContainer.innerHTML = `
                    <div class="admin-dash-grid" data-active-route="dashboard">
                        <aside class="admin-dash-sidebar" aria-label="Admin navigation">
                            <!-- 2026-09-06 設計稿 06：側欄頂端＝ app icon 28px ＋
                                 「Danmu Fire」15px 700。原本是 28px 的 Bebas 全大寫
                                 青色大標＋等寬「ADMIN · v5.4.0」副標，兩行加起來佔掉
                                 側欄最上面 70px，卻只在說一件所有人都已經知道的事。
                                 版本號移到「系統」頁（設計稿 08 · S1）。 -->
                            <div class="admin-dash-brand">
                                <img class="admin-dash-brand-icon" src="/static/icon.png" alt="" width="28" height="28" />
                                <span class="admin-dash-brand-name">Danmu Fire</span>
                            </div>
                            <nav class="admin-dash-nav" role="tablist" aria-label="Admin pages">
                                <!-- IA v6 grouped nav (2026-07-28): 4-section structure
                                     organised on a frequency + object axis — 場中 (what you
                                     touch while a session runs) / 場前 (the one sit-down
                                     before it) / 維運 (non-realtime upkeep) / 擴充
                                     (extensibility surfaces). Supersedes the v4 5-section
                                     abstract grouping (總覽/互動/審核/設定/整合), whose
                                     "設定" had become a grab bag and whose "整合" held
                                     backup. No route slugs changed — this is grouping and
                                     labels only.

                                     Items that resolve to alias targets (themes/widgets/
                                     plugins/fonts/audit/extensions/webhooks/api-tokens/
                                     backup/ratelimit) navigate via _routeAliases;
                                     applyRoute() resolves them. The active button matches
                                     the URL's raw slug so the clicked item stays
                                     highlighted even after alias redirect. -->

                                                                <!-- IA v8 grouped nav（2026-08-19，設計稿 07「Admin 各頁套用」）：
                                     3 區 12 列，取代 v7 的 4 區 15 列。分組軸線從「頻率×對象」改成
                                     「活動當下 / 活動之前 / 與活動無關」——主持人問的是「現在要用還是
                                     先設好」，不是「這功能屬於哪一類」。

                                     兩個提升：overlay（顯示層）與 security（安全）本來就是 first-class
                                     route，只是不在側欄；設計稿把它們放回來。

                                     五個降級：widgets / system / plugins / webhooks / api-tokens 離開側欄
                                     但**路由全部保留**——深連結、⌘K、既有書籤都照常，只是不再各佔一列。
                                     它們的入口收在「擴充」這個 hub 頁。

                                     命名去術語化：效果庫 .dme → 動畫效果（副檔名只在匯入時才需要出現）、
                                     風格主題包 → 主題、素材庫 → 素材、Desktop 控制 → 顯示層。 -->
                                <div class="admin-dash-nav-label" data-i18n="adminNavGroupLive">活動中</div>
                                <button type="button" class="admin-dash-nav-row is-active" data-route="live" role="tab" aria-selected="true">
                                    <span class="admin-dash-nav-icon">◉</span>
                                    <span data-i18n="adminNavLive">控制台</span>
                                    <span class="admin-dash-nav-badge" data-count-messages hidden>—</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="overlay" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">▣</span>
                                    <span data-i18n="adminNavOverlay">顯示層</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="polls" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◈</span>
                                    <span data-i18n="adminNavPolls">投票</span>
                                    <span class="admin-dash-nav-live"></span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="moderation" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⊘</span>
                                    <span data-i18n="adminNavModeration">審核</span>
                                    <span class="admin-dash-nav-badge" data-count-blacklist hidden>—</span>
                                </button>

                                <!-- 外觀與素材：先是觀眾看到的表面，再是可上傳的素材庫。 -->
                                <div class="admin-dash-nav-label" data-i18n="adminNavGroupAppearance">外觀與素材</div>
                                <button type="button" class="admin-dash-nav-row" data-route="viewer" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◐</span>
                                    <span data-i18n="adminNavViewer">觀眾頁</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="effects" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">✦</span>
                                    <span data-i18n="adminNavEffects">動畫效果</span>
                                    <span class="admin-dash-nav-badge" data-count-effects>—</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="themes" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">❖</span>
                                    <span data-i18n="adminNavThemes">主題</span>
                                    <span class="admin-dash-nav-badge" data-count-themes hidden>—</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="assets" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">▦</span>
                                    <span data-i18n="adminNavAssets">素材</span>
                                </button>
                                <!-- 2026-09-06 設計稿 08/14：小工具（計分板／跑馬燈／文字標籤）
                                     回到側欄。v8 把它降級收進「擴充」hub，但那是給 IT 人員的
                                     區域——小工具是主持人在活動前會擺一次的東西，跟主題、素材
                                     同一類，不該跟 Webhook 混在一起。 -->
                                <button type="button" class="admin-dash-nav-row" data-route="widgets" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">▥</span>
                                    <span data-i18n="adminNavWidgets">小工具</span>
                                </button>

                                <!-- 系統：與活動當下無關的維運。危險操作集中在備份與還原頁最底。 -->
                                <div class="admin-dash-nav-label" data-i18n="adminNavGroupSystem">系統</div>
                                <button type="button" class="admin-dash-nav-row" data-route="history" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">◷</span>
                                    <span data-i18n="adminNavHistory">紀錄與匯出</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="backup" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⇪</span>
                                    <span data-i18n="adminNavBackup">備份與還原</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="security" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⚿</span>
                                    <span data-i18n="adminNavSecurity">安全</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="integrations" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">⌬</span>
                                    <span data-i18n="adminNavIntegrations">擴充</span>
                                </button>
</nav>
                            <!-- 2026-08-19 設計稿 03：側欄 TELEMETRY 區移除
                                 （CPU/MEM/WS/RATE 四條即時長條是給維運看的儀表，
                                 主持人在活動中不會看，卻永久佔著側欄底部）。
                                 系統健康度改在「系統」頁看。這裡換成帳號列，
                                 登出從頂欄搬下來——它是低頻且不可逆的動作，
                                 不該和高頻控制項並排在右上。 -->
                            <div class="admin-dash-account">
                                <span class="admin-dash-account-avatar" aria-hidden="true">管</span>
                                <span class="admin-dash-account-name">${ServerI18n.t("adminAccountLabel")}</span>
                                <button type="button" id="logoutButton" class="admin-dash-account-logout">${ServerI18n.t("logout")}</button>
                            </div>
                        </aside>

                        <div class="admin-dash-main">
                            <header class="admin-dash-topbar">
                                <!-- 2026-08-19 設計稿 07：頁首收斂成「標題 + 一行說明 +
                                     右側最多 1 主 1 次動作」。麵包屑與 kicker 一併移除——
                                     位置由側欄高亮表達，kicker 的英文代號對主持人沒有資訊量。
                                     _renderBreadcrumb / kicker 的寫入端都有 null 防護，
                                     移掉節點不會炸。 -->
                                <div class="admin-dash-topbar-title">
                                    <h1 data-route-title>控制台</h1>
                                </div>
                                <div class="admin-dash-topbar-actions">
                                    <!-- 2026-09-07 設計稿 07/08：每一頁的主要動作都在頁首右側
                                         （主題「新主題」、素材「上傳」、小工具「新增小工具」、
                                         擴充「新增 Webhook」）。但區塊頁首在標題與路由同名時
                                         會整塊併進 topbar，動作放在裡面就跟著消失了。這個插槽
                                         接住它們：_dedupSectionTitles 會把被併掉的頁首裡的
                                         .admin-ui-page-actions 搬過來，換路由時再搬回去。 -->
                                    <div class="admin-dash-topbar-action" data-route-action></div>
                                    <!-- 2026-08-19 設計稿 03：頂欄收斂成「狀態 + 搜尋圖示」。
                                         · ⌘K 提示文字移除、只留圖示——提示文字對用過一次的人
                                           是永久噪音，圖示本身已足夠。
                                         · 語言選單移至「系統」頁（低頻設定，不該常駐頂欄）。
                                         · 登出移至側欄左下帳號列（低頻且不可逆，不該與高頻
                                           控制項並排在右上）。 -->
                                    <button class="admin-dash-search is-icon-only" type="button" data-open-palette
                                         aria-label="${escapeHtml(ServerI18n.t("adminSearchHint"))}"
                                         title="${escapeHtml(ServerI18n.t("adminSearchHint"))} ⌘K">
                                        <span aria-hidden="true">⌕</span>
                                    </button>
                                    <!-- 設計稿 15 · HD1：說明抽屜由「?」按鈕開。
                                         在這之前抽屜只有鍵盤（F1）能開，等於對滑鼠使用者
                                         不存在。鍵盤的 ? 已改成叫「快速鍵一覽」（KS1）。 -->
                                    <button class="admin-dash-search is-icon-only" type="button" data-open-help
                                         aria-label="${escapeHtml(ServerI18n.t("helpDrawerTitle"))}"
                                         title="${escapeHtml(ServerI18n.t("helpDrawerTitle"))} F1">
                                        <span aria-hidden="true">?</span>
                                    </button>
                                    <!-- 誠實的狀態燈＋捷徑：它是導航（前往顯示層頁），
                                         不是開關。 -->
                                    <button class="admin-dash-broadcast ${broadcasting ? "is-on" : "is-off"}" type="button" aria-live="polite"
                                        title="${escapeHtml(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${escapeHtml(ServerI18n.t("adminRouteTitle_overlay"))} · ${broadcasting ? escapeHtml(ServerI18n.t("statusOn")) : escapeHtml(ServerI18n.t("statusOff"))}
                                        <span class="admin-dash-broadcast-go" aria-hidden="true">→</span>
                                    </button>
                                </div>
                                <!-- 2026-07-30：note 從標題塊移出來、放成 topbar 的
                                     滿寬第二列（flex-basis:100% 強制換行）。留在標題塊裡
                                     會把塊撐寬、把右側控制項擠到下一行。 -->
                                <p class="admin-dash-topbar-note" data-route-note hidden></p>
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
                            <!-- 2026-09-06 設計稿 06 · K1/K2：控制台首屏＝三塊，一屏看完。
                                 ① 顯示層開關卡（左半）② 一行數字（右半）③ 即時訊息流。

                                 原本是四張 KPI 卡，每張帶 Bebas 大數字 ＋ 20 條 sparkline
                                 ＋一行 delta。sparkline 在 20 個資料點上畫不出趨勢，只是
                                 讓每張卡長高到 154px——四張加起來就把訊息流推到摺線下面，
                                 而主持人盤中要看的就是訊息流。數字縮成一行、去掉 sparkline
                                 之後，開關卡＋數字＋訊息流剛好一屏。 -->
                            <section class="admin-cockpit" data-route-view="dashboard">
                                <!-- ① 顯示層：全頁唯一的狀態顯示與主要動作 -->
                                <div class="admin-cockpit-card admin-cockpit-overlay" data-cockpit-overlay>
                                    <span class="admin-cockpit-overlay-icon" aria-hidden="true">▣</span>
                                    <div class="admin-cockpit-overlay-body">
                                        <div class="admin-cockpit-overlay-title" data-i18n="adminNavOverlay">顯示層</div>
                                        <div class="admin-cockpit-overlay-status" role="status" aria-live="polite">
                                            <span class="admin-cockpit-dot" data-cockpit-dot></span>
                                            <span data-cockpit-status>—</span>
                                        </div>
                                    </div>
                                    <div class="admin-cockpit-overlay-actions">
                                        <button type="button" class="admin-ui-action" data-cockpit-action="clear"
                                                data-i18n="adminCockpitClear">清空畫面</button>
                                        <button type="button" class="admin-ui-action is-danger" data-cockpit-action="toggle"
                                                data-i18n="adminCockpitTurnOff">關閉</button>
                                    </div>
                                </div>

                                <!-- ② 一行數字（tabular-nums）＋兩顆次要動作 -->
                                <div class="admin-cockpit-card admin-cockpit-stats">
                                    <div class="admin-cockpit-stat" data-kpi="messages">
                                        <div class="admin-cockpit-stat-label">${ServerI18n.t("dashKpiMsgTotal")}</div>
                                        <div class="admin-cockpit-stat-value" data-kpi-value>—</div>
                                    </div>
                                    <div class="admin-cockpit-stat" data-kpi="peak">
                                        <div class="admin-cockpit-stat-label">${ServerI18n.t("dashKpiPeakPerMin")}</div>
                                        <div class="admin-cockpit-stat-value" data-kpi-value>—</div>
                                    </div>
                                    <div class="admin-cockpit-stat" data-kpi="unique-fp">
                                        <div class="admin-cockpit-stat-label">${ServerI18n.t("dashKpiUniqueFp")}</div>
                                        <div class="admin-cockpit-stat-value" data-kpi-value>—</div>
                                    </div>
                                    <div class="admin-cockpit-stat" data-kpi="session">
                                        <div class="admin-cockpit-stat-label">${ServerI18n.t("dashKpiSessionDuration")}</div>
                                        <div class="admin-cockpit-stat-value" data-kpi-value>—</div>
                                    </div>
                                    <div class="admin-cockpit-stats-actions">
                                        <button type="button" class="admin-ui-action" data-cockpit-action="idle-qr"
                                                data-i18n="adminCockpitShowQr">顯示入場 QR</button>
                                        <button type="button" class="admin-ui-action" data-cockpit-action="poll"
                                                data-i18n="adminCockpitStartPoll">開始投票…</button>
                                    </div>
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

                            <!-- 2026-09-06 設計稿 06：Quick Actions F1–F4 與 My Actions 整區移除。
                                 控制台首屏應該只有三塊——顯示層開關、一行數字、即時訊息流。
                                 F1–F4 那四張常駐面板（效果／投票／黑名單／廣播）是「四個入口的
                                 捷徑」，但主持人真正要用時是有明確目標的，⌘K 命令面板一次
                                 就到（設計稿 15 · CK1 明講「取代 F1–F4」）；My Actions 是稽核
                                 用的回顧，家在「紀錄與匯出 › 操作紀錄」。 -->
                        </div>
                    </div>
                `;

    const settingsGrid = document.getElementById("settings-grid");

    // Effects master switch — TPL-B 細開關列（2026-07-30 版型樣板頁 1）。
    // 舊 settingCard 是半寬浮卡；TPL-B 規格：總開關是頁面第一列的全寬細列，
    // 開關狀態文字就地顯示。toggle-Effects input 契約原樣保留。
    const effectsEnabled = currentSettings.Effects ? currentSettings.Effects[0] !== false : true;
    settingsGrid.insertAdjacentHTML("beforeend", `
      <div id="sec-effects" class="admin-ui-group admin-master-toggle admin-master-toggle--slim lg:col-span-2">
        <div class="admin-ui-group-row is-tall admin-master-toggle__row">
          <span class="lbl">${ServerI18n.t("effectsSetting")}
            <span class="sub admin-master-toggle__state" data-on="${effectsEnabled}">${effectsEnabled ? ServerI18n.t("effectsEnabledMsg") : ServerI18n.t("effectsDisabledMsg")}</span>
          </span>
          <span class="admin-master-toggle__spacer"></span>
          <div class="relative inline-block w-12 align-middle select-none transition duration-200 ease-in flex-shrink-0">
            <input type="checkbox" name="Effects" id="toggle-Effects" role="switch" aria-checked="${effectsEnabled}" aria-label="Toggle ${ServerI18n.t("effectsSetting")}" class="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer" ${effectsEnabled ? "checked" : ""} />
            <label for="toggle-Effects" class="toggle-label block overflow-hidden h-7 rounded-full cursor-pointer" style="background:var(--color-bg-elevated)"></label>
          </div>
        </div>
      </div>`);

    // Effects Management — AdminEffectsPage layout (1fr + 340px YAML inspector)
    settingsGrid.insertAdjacentHTML("beforeend", `
      <div id="sec-effects-mgmt" class="hud-page-stack lg:col-span-2" data-tpl="B">
        <!-- v8（設計稿 07 · R5）：四格 KPI 條撤掉。稿上頁首只用一句
             「N / M 開放給觀眾」講清楚同一件事——TOTAL/CATEGORIES 對主持人
             不構成決策資訊。data-eflib-* 契約保留在頁首那一句裡，
             admin-effects-mgmt.js 的更新端不必改。 -->
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_effects")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("fxPageNote")}</p>
          <div class="admin-ui-page-actions">
            <span class="admin-ui-summary"><span data-eflib-active>—</span> / <span data-eflib-total>—</span> ${ServerI18n.t("fxOpenToAudience")}</span>
            <span hidden data-eflib-cats>—</span><span hidden data-eflib-user>—</span>
          </div>
        </div>
        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:16px">

            <!-- TPL-B 工具列：濾鏡 chips ＋ 動作靠右，一條解決 -->
            <!-- 流程排序（2026-07-30 使用者原則：要先做的放上面）——
                 高頻的「管理現有效果」緊跟工具列；低頻的「上傳」降級為
                 工具列動作（label 觸發同一個 #effectUploadInput），
                 拖放目標升級為整個 main 區（handler 在 effects-mgmt）。 -->
            <div class="hud-filter-row admin-effects-toolbar" id="effectsFilterRow">
              <span class="hud-filter-chip is-active" data-effect-filter="ALL">${ServerI18n.t("fxChipAll")} —</span>
              <span class="admin-effects-toolbar__spacer" data-toolbar-spacer></span>
              <label for="effectUploadInput" class="admin-ui-action is-primary admin-effects-action admin-effects-upload-btn" title="${ServerI18n.t("fxUploadTitle")}">${ServerI18n.t("fxUploadBtn")}</label>
              <input type="file" id="effectUploadInput" accept=".dme" class="hidden">
              <button id="effectReloadBtn" class="admin-ui-action admin-effects-action" type="button">\u21bb ${ServerI18n.t("reload")}</button>
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
              </div>
              <pre class="hud-inspector-body" id="effectsInspectorBody"># ${ServerI18n.t("fxYamlIdle")}</pre>
              <div class="hud-inspector-foot">
                <button type="button" class="admin-ui-action admin-effects-inspector-action" id="effectsInspectorReload" style="flex:1" disabled>\u21bb RELOAD</button>
                <button type="button" class="admin-ui-action is-primary admin-effects-inspector-action" id="effectsInspectorEdit" style="flex:1" disabled>${ServerI18n.t("lbEdit")}</button>
              </div>
            </div>

            <!-- LIBRARY STATS 已升格為頁頂 KPI 條（TPL-B），此處不再重複 -->

            <!-- v5 Batch 12-5: Stacking rules info card -->
            <div class="admin-ui-group admin-eflib-card">
              <div class="admin-eflib-label">${ServerI18n.t("fxStackingRulesLabel")}</div>
              <ul class="admin-eflib-rules">
                <li>· ${ServerI18n.t("fxStackSameType")}</li>
                <li>· ${ServerI18n.t("fxStackCrossType")}</li>
                <li>· ${ServerI18n.t("fxStackViewerPick")}</li>
                <li>· ${ServerI18n.t("fxStackPriority")}</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    `);

    // Theme Management Card
    settingsGrid.insertAdjacentHTML("beforeend", `
      <div id="sec-themes" class="hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title" data-i18n="styleThemePacks">${ServerI18n.t("styleThemePacks")}</h2>
          <p class="admin-ui-page-note" data-i18n="themesSectionDesc">${ServerI18n.t("themesSectionDesc")}</p>
        </div>
        <div class="admin-ui-card" style="padding:14px;margin-top:12px">
          <!-- 2026-09-07 設計稿 08 · T1：toolbar 只剩重新載入。
               「4 個主題（4 內建）」那行字數量資訊卡片自己就看得到，
               「ACTIONS」那個欄位標題則是在標一欄根本不存在的表格。 -->
          <div class="theme-pack-toolbar">
            <button id="themeReloadBtn" class="admin-ui-action admin-theme-reload-action">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
              ${ServerI18n.t("themesReloadBtn")}
            </button>
          </div>
          <div id="themesList">
            <span class="theme-pack-muted" style="padding:14px">${ServerI18n.t("themesLoading")}</span>
          </div>
        </div>
      </div>
    `);
    scheduleIdleTask(initThemesManagement);

    // Moderation Overview (AdminModerationPage layout): stats strip + banned/blacklist panel
    settingsGrid.insertAdjacentHTML("beforeend", `
      <div id="sec-blacklist" class="hud-page-stack lg:col-span-2">
        <!-- v8（2026-08-19 設計稿 07 · R3）：五格 KPI 條撤掉。稿上這頁只有
             「輸入列 → 命中時怎麼處理 → 封鎖字清單」三件事；RULES/BANNED/
             MASKED/BLOCKED/REVIEW 五個數字是儀表板語言，不是這頁的工作。
             data-mod-stat 契約保留在清單標題的計數裡。 -->
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("modBlockedWordsTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("modBlockedWordsNote")}</p>
        </div>

        <div class="admin-mod-addrow">
          <input type="text" id="newKeywordInput" placeholder="${ServerI18n.t("modAddWordPlaceholder")}"
            class="admin-ui-input admin-ui-grow">
          <button id="addKeywordBtn" type="button" class="admin-ui-action is-primary">${ServerI18n.t("modAddWordBtn")}</button>
        </div>

        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${ServerI18n.t("modOnHitLabel")}</span>
            <span class="val">
              <span class="admin-ui-seg" role="tablist" data-mod-onhit>
                <button type="button" class="seg-item is-active" data-onhit="hide">${ServerI18n.t("modOnHitHide")}</button>
                <button type="button" class="seg-item" data-onhit="mask">${ServerI18n.t("modOnHitMask")}</button>
                <button type="button" class="seg-item" data-onhit="review">${ServerI18n.t("modOnHitReview")}</button>
              </span>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${ServerI18n.t("modSkipRepeatsLabel")}</span>
            <span class="val"><input type="checkbox" class="admin-ui-checkbox" data-mod-skip-repeats /></span>
          </div>
        </div>

        <div class="admin-ui-group-label">${ServerI18n.t("modBlockedWordsTitle")} · <span id="modBlacklistCount" data-mod-stat="banned">—</span></div>
        <div class="admin-ui-group">
          <div id="blacklistKeywords" class="admin-mod-wordlist">
            <!-- Keywords will be listed here -->
          </div>
        </div>

        <!-- 統計契約保留（admin-moderation.js 會寫入），不再佔版面 -->
        <span hidden data-mod-stat="rules">—</span><span hidden data-mod-stat="masked">—</span>
        <span hidden data-mod-stat="blocked">—</span><span hidden data-mod-stat="review">—</span>
      </div>
    `);

    // Danmu History Card
    settingsGrid.insertAdjacentHTML("beforeend", `
                    <div id="sec-history" class="admin-ui-card lg:col-span-2">
                        <div>
                            <h3 class="text-lg font-bold" style="color:var(--admin-text)">${ServerI18n.t("danmuHistory")}</h3>
                            <p class="text-sm" style="color:var(--admin-text-dim)">${ServerI18n.t("danmuHistoryDesc")}</p>
                        </div>
                        <div class="mt-4 pt-4 history-section-body" style="border-top:1px solid var(--admin-line)">
                            <div id="statsDashboard"></div>
                            <div class="space-y-3">
                                <div class="history-command-bar">
                                    <label class="text-sm font-medium" style="color:var(--admin-text-dim)">${ServerI18n.t("timeRange")}</label>
                                    <select id="historyHours" class="admin-ui-select">
                                        <option value="1">${ServerI18n.t("last1Hour")}</option>
                                        <option value="6">${ServerI18n.t("last6Hours")}</option>
                                        <option value="24" selected>${ServerI18n.t("last24Hours")}</option>
                                        <option value="72">${ServerI18n.t("last3Days")}</option>
                                        <option value="168">${ServerI18n.t("last7Days")}</option>
                                    </select>
                                    <button id="refreshHistoryBtn" class="admin-ui-action is-primary admin-history-action">${ServerI18n.t("refreshBtn")}</button>
                                    <button id="exportHistoryBtn" class="admin-ui-action admin-history-action">${ServerI18n.t("exportCSV")}</button>
                                    <button id="clearHistoryBtn" class="admin-ui-action is-danger admin-history-action">${ServerI18n.t("clearAll")}</button>
                                    <label class="flex items-center gap-2 text-xs cursor-pointer select-none ml-auto" style="color:var(--admin-text-dim)">
                                        <input type="checkbox" id="historyAutoRefresh" style="accent-color:var(--color-primary)">
                                        ${ServerI18n.t("autoRefresh")}
                                    </label>
                                </div>
                                <input id="historySearch" type="search" placeholder="${ServerI18n.t("searchHistory")}"
                                    class="admin-ui-input w-full">
                                <div id="replayToolbar" class="history-replay-toolbar">
                                    <button id="replayStartBtn" class="admin-ui-action is-primary admin-replay-control-action">▶ ${ServerI18n.t("replaySelected")}</button>
                                    <button id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">⏸ ${ServerI18n.t("pause")}</button>
                                    <button id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">▶ ${ServerI18n.t("resume")}</button>
                                    <button id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">⏹ ${ServerI18n.t("stop")}</button>
                                    <select id="replaySpeed" class="admin-ui-select">
                                        <option value="1">1x</option>
                                        <option value="2">2x</option>
                                        <option value="5">5x</option>
                                        <option value="10">10x</option>
                                    </select>
                                    <button id="replayRecordBtn" class="admin-ui-action is-danger admin-replay-control-action">⏺ ${ServerI18n.t("recordReplay") || "Record Replay"}</button>
                                    <span id="replayRecordingIndicator" class="text-sm hidden" style="color:var(--color-danger)">⏺ <span id="replayRecordingTimer">00:00</span></span>
                                    <button id="exportJsonBtn" class="admin-ui-action admin-replay-control-action">${ServerI18n.t("exportJSON") || "Export JSON"}</button>
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
    live:      { title: "控制台", kicker: "LIVE · 操作艙 · 即時狀態", sections: ["sec-live-feed"], showKpi: true },
    // 2026-05-19 v5 IA: `display` route retired. The bare-legacy
    // redirect (`#/display` → `#/viewer/defaults`) intercepts before
    // this lookup, so dropping the ADMIN_ROUTES entry is safe and
    // signals "this slug is no longer canonical".
    // D-6 階段 4 (2026-07-29): `sec-viewer-config-tabs`（admin-display.js
    // 自製的 .admin-tabstrip）退場，viewer 改用 AdminTabs 的 TabConfig，
    // strip 由 shell 掛在標題列下方。剩下的 info banner 不屬於任何 tab，
    // 所以留在 route-level sections 裡（四個 tab 都看得到）。
    viewer:    { title: "觀眾頁", kicker: "VIEWER · 觀眾端設定", sections: ["sec-viewer-config-info", "sec-viewer-theme", "sec-viewer-config-fields", "sec-viewer-config-defaults", "sec-viewer-config-limits"] },
    // Legacy aliases — same config as their canonical home. Kept so
    // existing `=== "dashboard"` checks + URL bookmarks keep working
    // until Phase B/D collapses them.
    dashboard: { title: "控制台", kicker: "DASHBOARD · 活動進行中", sections: [], showKpi: true },
    // v7 IA (2026-07-28): `messages` demoted to _bareLegacyRedirects → live
    // (it was the same sec-live-feed under a second name).
    // Slice 4 (P0-0): history is now the merged tabbed nav (sessions /
    // search / audit / replay / audience). Each tab's section is hidden
    // when not active by AdminTabs.applyTabSectionVisibility. Replay tab
    // owns sec-history-tabs + history-v2-section + sec-history-list + sec-history.
    history:   { title: "紀錄與匯出",       kicker: "RECORDS · 場次資料切片", sections: ["sec-sessions-overview", "sec-search-overview", "sec-audit-overview", "sec-history-tabs", "history-v2-section", "sec-history-list", "sec-history", "sec-audience-overview"] },
    polls:     { title: "投票",             kicker: "POLLS · 2–6 選項",         sections: ["sec-polls"] },
    // 2026-09-06 設計稿 08/14：名稱去術語化 Desktop Widgets → 小工具。
    widgets:   { title: "小工具",  kicker: "OBS 小工具 · 分數板 · 跑馬燈", sections: ["sec-widgets"] },
    themes:    { title: "主題",       kicker: "THEME PACKS · 彈幕樣式預設",       sections: ["sec-themes"] },
    // Viewer owns the page/fields/defaults/limits surface. Legacy
    // `#/viewer-config` deep-links still resolve here for backward compat.
    // v7 S4: `viewer-config` entry removed — the alias (→ viewer) always
    // intercepted it, so the config object was dead code.

    // v7 S4 (2026-07-28): legacy `appearance` and `automation` shells
    // removed — both are pure aliases now (appearance → themes,
    // automation → system/scheduler with explicit tabs passing through).
    // v5.1 (2026-04-27 redesign): unified Assets Library overview on top
    // (sec-assets-overview from admin-assets.js) → existing emoji / stickers
    // / sounds sub-sections kept below for editing per-type.
    // v7 IA (2026-07-28): assets gains the fonts tab (sec-fonts) — fonts are
    // the fourth uploadable asset type; tab strip defined in admin-tabs.js.
    // 2026-09-06 設計稿 08：sec-widgets 移出——小工具回到側欄自己一列。
    assets:    { title: "素材",           kicker: "ASSETS LIBRARY · 統一素材總覽", sections: ["sec-assets-overview", "sec-emojis", "sec-stickers", "sec-sounds", "sec-fonts"] },
    // v5.2 Sprint 1 (2026-04-27): Extensions catalog page — Slido / Discord
    // / OBS / Bookmarklet cards + shared Fire Token UI inline.
    // 2026-09-07 設計稿 08 · X1：擴充四合一。原本 Webhook／插件／API 金鑰／
    // 定時發送各自是一條路由（前三者沒有側欄入口、只能靠深連結或別的頁面
    // 帶過去；定時發送藏在系統的分頁裡）。它們是同一群人在同一個場合會碰的
    // 東西，收成一頁四個分段。
    integrations: { title: "擴充", sections: ["sec-extensions-overview", "sec-webhooks", "sec-plugins", "sec-api-tokens-overview", "sec-scheduler"] },
    // v5.2 Sprint 2 deeplink-only (2026-04-27 audit §A.3): Fire Token sub-row
    // removed from sidebar. Route stays reachable via integrations → 詳細統計.
    firetoken:    { title: "Fire Token",     kicker: "ADMIN LANE · FIRE TOKEN · 用量 / IP / AUDIT",  sections: ["sec-firetoken-overview"] },
    // Slice 4: moderation extended to host 4 tabs (blacklist / filters /
    // ratelimit / fingerprints). Each tab's section gets hidden by
    // AdminTabs.applyTabSectionVisibility when not active.
    // brief 0518-v3 #2: moderation gained queue + bans tabs (was deep-link only).
    moderation:{ title: "審核",  kicker: "MODERATION · 審核與防護", sections: ["sec-modqueue", "sec-modbans-overview", "sec-blacklist", "sec-filters", "sec-ratelimit", "sec-fingerprints"] },
    // v7 IA (2026-07-28): `ratelimit` demoted to _bareLegacyRedirects →
    // moderation/ratelimit (the tab owns sec-ratelimit).
    effects:   { title: "動畫效果",      kicker: "EFFECTS LIBRARY · 熱重載",  sections: ["sec-effects", "sec-effects-mgmt"] },
    // v7 IA (2026-07-28): `fonts` demoted to _bareLegacyRedirects →
    // assets/fonts (fonts joined the assets tab strip).
    // v7 S3 (2026-07-28): the system accordion retired. System owns only
    // what has no other home: overview / scheduler / security / fire token
    // / wcag / about, as an AdminTabs strip (TabConfig.system). Old
    // #/system/<leaf> deep links to rehomed leaves translate via the
    // legacy leaf map in applyRoute.
    system:    { title: "系統",  kicker: "SYSTEM · 健康度與組態", sections: ["sec-system-overview", "admin-security-v2-page", "sec-firetoken-overview", "sec-wcag-overview", "sec-about-overview"] },
    // Legacy alias target only. Security now resolves under system/security;
    // the v2 page handles its own visibility from activeRoute + activeLeaf.
    security:  { title: "安全",             kicker: "SECURITY · 密碼 · WS TOKEN · 審計",  sections: ["admin-security-v2-page"] },
    backup:    { title: "備份與還原",       kicker: "BACKUP · EXPORT · DANGER",          sections: ["admin-backup-v2-page"] },
    // P1 (2026-04-27 V1Z4 batch7): aggregated alerts inbox.
    notifications: { title: "通知",          kicker: "NOTIFICATIONS · 警示中心 · 多來源",  sections: ["sec-notifications-overview"] },
    // P3 Group B (2026-04-27 V1Z4 batch7): fingerprint aggregation list.
    audience:  { title: "觀眾",               kicker: "AUDIENCE · 即時指紋聚合",           sections: ["sec-audience-overview"] },
    // v7 IA (2026-07-28): `audit` demoted to _bareLegacyRedirects →
    // history/audit (the history tabbed nav already owned sec-audit-overview).
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
    // sections 必須列出 admin-broadcast.js 掛進 settings-grid 的頁面 ID——
    // 空陣列會讓 syncRouteContainerVisibility() 算出空 owner set 並藏掉
    // 整個容器，模組再怎麼把自己設成 display:"" 都沒用（#/security 也曾
    // 這樣壞過）。
    overlay:   { title: "顯示層",        kicker: "DESKTOP · ON / OFF / PAUSED",       sections: ["admin-broadcast-v2-page", "sec-viewer-config-defaults"] },
    // Missing prototype pages — implemented 2026-04-29
    sessions:     { title: "場次",            kicker: "SESSIONS · 場次列表 · 即時 / 歷史",  sections: ["sec-sessions-overview"] },
    "session-detail": { title: "場次詳情",    kicker: "SESSION DETAIL · 密度時間軸 · 訊息回顧", sections: ["sec-session-detail-overview"] },
    search:       { title: "搜尋",            kicker: "SEARCH · 全文搜尋 · 跨場次",          sections: ["sec-search-overview"] },
    // A11y + i18n tools (2026-04-29)
    wcag:         { title: "WCAG 對比度",      kicker: "A11Y · WCAG 2.1 CONTRAST CHECKER",    sections: ["sec-wcag-overview"] },
    // Onboarding route — overlay only, no section
    "onboarding-tour": { title: "新手導覽",    kicker: "ONBOARDING · 5 步驟快速上手",          sections: [] },
  };

  // Single source of truth for route titles/kickers — the ⌘K palette reads
  // this at open time instead of keeping its own drift-prone copy.
  window.ADMIN_ROUTES = ADMIN_ROUTES;

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

    // 單一 section 的路由常出現「頂欄路由標題」與「區塊標題」逐字相同
    // （素材庫/風格主題包/備份…共 8 條）。2026-07-30 升級（使用者指出兩張
    // bar 內容重複佔空間）：標題相同時**整張區塊頁首上收**——kicker 與
    // 路由 kicker 重複、直接藏；note 是有效資訊、上移到頂欄標題下的
    // [data-route-note] 插槽。標題不同的（審核 vs 審核佇列）原樣保留。
    function _dedupSectionTitles() {
      const routeTitle = shell.querySelector("[data-route-title]")
        ?.textContent?.trim().replace(/\s+/g, " ");
      const noteSlot = shell.querySelector("[data-route-note]");
      const actionSlot = shell.querySelector("[data-route-action]");
      // 先把上一條路由借走的動作還回去。搬 DOM 節點不會弄丟 listener，
      // 所以來回搬是安全的；用 clone 反而會讓按鈕變成死的。
      if (actionSlot) {
        Array.prototype.slice.call(actionSlot.children).forEach((node) => {
          if (node._adminHomeHead) node._adminHomeHead.appendChild(node);
          else node.remove();
        });
      }
      if (!routeTitle) return;
      // 2026-07-30（全掃後定案）：分頁式路由（審核/素材庫/觀眾頁/系統/紀錄）
      // 的 section page-head 一律是多餘——分頁列本身就是 section 的標題，
      // 麵包屑也已寫出位置。實測 30 個 tab section 的標題全部是 tab 標籤的
      // 重複（相同/前綴/同義），無一例外。所以不逐條比對，直接：分頁路由
      // 的 section page-head 全隱藏、note 上移頂欄。非分頁路由維持「標題等於
      // 路由標題才隱藏」。page-head 只含 kicker/title/note（互動元素都在其後
      // 的工具列或 note 內的 inline 連結，隱藏無損）。
      const isTabbed = !!(window.AdminTabs && window.AdminTabs.hasTabsFor
        && window.AdminTabs.hasTabsFor(currentRoute));
      const heads = Array.prototype.slice.call(
        shell.querySelectorAll(".admin-ui-page-head"));
      // 先清掉舊的隱藏標記——才能用 offsetParent 量到「這一屏真正可見」的
      // 那個 page-head。offsetParent === null 代表自己或任一祖先 display:none，
      // 比 getComputedStyle(自己).display 可靠（共用容器會讓後者謊報可見，
      // 正是先前 queue 抓到 replay note 的成因）。
      heads.forEach((h) => h.classList.remove("is-merged-into-topbar"));
      // F-103（design audit 2026-08-02）：頂欄標題吃 i18n（en 下是
      // "Backup & Export"），section 頁首卻是硬編中文（"備份 & 匯出"），
      // 只比渲染文字會在非中文 locale 下比不中 → 雙標題復活。section
      // 頁首在 D-4 解掉前永遠是 zh，所以再拿 ROUTE_META 的 zh title
      // 比一次，四語都成立。
      const cfgTitle = (ADMIN_ROUTES[currentRoute]?.title || "")
        .trim().replace(/\s+/g, " ");
      let mergedNote = null;
      heads.forEach((head) => {
        const titleEl = head.querySelector(".admin-ui-page-title");
        const t = titleEl && titleEl.textContent.trim().replace(/\s+/g, " ");
        const dup = !!t && (isTabbed || t === routeTitle || t === cfgTitle);
        if (!dup) return;
        // 這一步在 add class 之前量：唯一 offsetParent 非 null 的重複頁首，
        // 就是當前分頁真正顯示的那個 —— 只取它的 note。
        if (head.offsetParent !== null) {
          if (mergedNote === null) {
            mergedNote = head.querySelector(".admin-ui-page-note")?.innerHTML || "";
          }
          // 動作與 note 分開找：分頁式路由上，同時可見的頁首可能有好幾個
          // （擴充頁的目錄卡片頁首排在 Webhook 分頁的頁首前面），而帶著
          // 主要動作的通常不是第一個。綁在一起找會讓動作永遠取不到。
          const actions = head.querySelector(".admin-ui-page-actions");
          if (actions && actionSlot && !actionSlot.children.length) {
            actions._adminHomeHead = head;
            actionSlot.appendChild(actions);
          }
        }
        head.classList.add("is-merged-into-topbar");
      });
      if (noteSlot) {
        noteSlot.innerHTML = mergedNote || "";
        noteSlot.hidden = !mergedNote;
      }
    }

    function syncRouteContainerVisibility() {
      const cfg = ADMIN_ROUTES[currentRoute];
      const wantedOwners = new Set((cfg.sections || []).map(routeSectionOwner));
      // 「配置擁有」只回答「這條路由可能用到這個容器」；section 本身是按
      // 當前分頁顯示的。只看配置會留下 0 高的幽靈容器（例如審核路由的
      // settings-grid 只裝速率限制分頁的 section），它在 flex 欄裡白吃
      // 兩個 24px gap —— 分頁列下面那個 48px 的洞就是這樣來的。
      // 所以再加一個條件：容器目前真的有可見內容才顯示。
      const hasVisiblePayload = (container) => {
        if (container.id === "sec-advanced") {
          return Array.from(container.querySelectorAll('[id^="sec-"]'))
            .some((c) => getComputedStyle(c).display !== "none");
        }
        return Array.from(container.children)
          .some((k) => getComputedStyle(k).display !== "none");
      };
      shell.querySelectorAll(".admin-route-sections").forEach((container) => {
        const hasWanted = container.id === "sec-advanced"
          ? wantedOwners.has("sec-advanced")
          : wantedOwners.has(container.id);
        if (!hasWanted) { container.style.display = "none"; return; }
        // 先還原再量：display:none 底下量不到子元素的真實狀態
        container.style.display = "";
        container.style.display = hasVisiblePayload(container) ? "" : "none";
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
      syncRouteContainerVisibility();
      // 晚到的 section（fetch 完才 insertAdjacentHTML 的模組）走
      // MutationObserver 重跑到這裡——標題去重要在這條路徑也跑，
      // 否則素材庫/整合等五條路由的重複標題會漏網。
      _dedupSectionTitles();
    };

    // v7 S3 (2026-07-28): the retired system accordion carried leaves that
    // now live elsewhere — old #/system/<leaf> deep links translate here.
    // (security/firetoken/scheduler/wcag/about survive as system tabs and
    // need no entry; `system` was the overview leaf's own slug.)
    const SYSTEM_LEGACY_LEAF_HOMES = {
      system: { nav: "system", tab: "overview" },
      backup: { nav: "backup" },
      integrations: { nav: "integrations" },
      "api-tokens": { nav: "integrations", tab: "api-tokens" },
      webhooks: { nav: "integrations", tab: "webhooks" },
      plugins: { nav: "integrations", tab: "plugins" },
      scheduler: { nav: "integrations", tab: "scheduler" },
      sessions: { nav: "history", tab: "sessions" },
      search: { nav: "history", tab: "search" },
      audit: { nav: "history", tab: "audit" },
      replay: { nav: "history", tab: "replay" },
      audience: { nav: "history", tab: "audience" },
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
      // Translate retired system-accordion leaves to their new homes.
      if (name === "system" && requestedTab && SYSTEM_LEGACY_LEAF_HOMES[requestedTab]) {
        const home = SYSTEM_LEGACY_LEAF_HOMES[requestedTab];
        name = home.nav;
        requestedTab = home.tab || null;
        rawName = name;
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
      // for nav routes that don't opt into tabs. (v7 S3: system is a normal
      // AdminTabs route now — the accordion special case is gone.)
      let activeTab;
      if (window.AdminTabs?.hasTabsFor?.(currentRoute)) {
        activeTab = window.AdminTabs.resolveActiveTab(currentRoute, requestedTab);
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
      // 只掃側欄的 nav row。頂欄的顯示層狀態鈕也帶 data-route="overlay"
      // （它是導航捷徑），用寬的 [data-route] 選擇器會讓 #/overlay 同時點亮
      // 兩顆，違反「該 slug 的按鈕唯一亮起」這條契約。
      const _allBtns = Array.from(shell.querySelectorAll(".admin-dash-nav-row[data-route]"));
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
        window.AdminRouter?.tabMemory?.set?.(currentRoute, activeTab);
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

      // dispatchEvent 是同步的：跑到這裡，各分頁模組已經把自己的 section
      // 調整完了。容器同步要在這之後再跑一次，否則模組剛顯示的 section
      // 會被困在一個剛被判定為空、display:none 的容器裡。
      syncRouteContainerVisibility();
      _dedupSectionTitles();

      _renderTabStripFor(currentRoute, activeTab);
      _renderBreadcrumb(rawName, currentRoute, activeTab);

      try { history.replaceState(null, "", wantedHash); } catch (e) { /* ignore */ }
    };

    // Renders "分區 › 頁面（› 分頁）" into the topbar breadcrumb slot. Data
    // comes from the grouped sidebar DOM: the active nav button's page label
    // + its preceding `.admin-dash-nav-label` section header. The active tab
    // label (if any) is read from the mounted tab strip. Display-only — no
    // clickable links in this first pass.
    function _renderBreadcrumb(rawName, route, activeTab) {
      const host = shell.querySelector("[data-route-breadcrumb]");
      if (!host) return;
      // Prefer the alias/raw button (what the user clicked) so the crumb
      // matches the highlighted sidebar item; fall back to resolved route.
      const btns = Array.from(shell.querySelectorAll(".admin-dash-nav-row[data-route]"));
      let btn = btns.find((b) => b.dataset.route === rawName);
      if (!btn) btn = btns.find((b) => b.dataset.route === route);
      if (!btn) { host.textContent = ""; host.hidden = true; return; }

      // Section = nearest preceding `.admin-dash-nav-label` sibling.
      let section = "";
      let prev = btn.previousElementSibling;
      while (prev) {
        if (prev.classList && prev.classList.contains("admin-dash-nav-label")) {
          // Group toggles carry a caret span — read the label span only.
          const labelEl = prev.querySelector("[data-i18n]") || prev;
          section = (labelEl.textContent || "").trim();
          break;
        }
        prev = prev.previousElementSibling;
      }
      // Page = the button's label span text (drops badges/icons).
      const labelEl = btn.querySelector("[data-i18n]") || btn.querySelector("span:nth-child(2)");
      const page = (labelEl ? labelEl.textContent : btn.textContent || "").trim();

      // Tab = active tab label from the mounted strip, if present.
      let tab = "";
      if (activeTab) {
        const tabHost = shell.querySelector("[data-admin-tabs-host]");
        const activeTabEl = tabHost
          ? tabHost.querySelector(".is-active, [aria-selected='true']")
          : null;
        if (activeTabEl) {
          // Tab buttons carry a zh label span + an EN sub-label span;
          // textContent would glue them ("審核佇列QUEUE"), so prefer the label.
          const labelChild = activeTabEl.querySelector(".admin-tabs-btn-label");
          tab = ((labelChild || activeTabEl).textContent || "").trim();
        }
      }

      const crumbs = [section, page].filter(Boolean);
      if (tab) crumbs.push(tab);
      host.hidden = crumbs.length === 0;
      host.innerHTML = crumbs
        .map((c, i) => {
          const sep = i > 0
            ? '<span class="admin-dash-breadcrumb-sep" aria-hidden="true">›</span>'
            : "";
          const cls = i === crumbs.length - 1
            ? "admin-dash-breadcrumb-item is-current"
            : "admin-dash-breadcrumb-item";
          return sep + '<span class="' + cls + '">' + escapeHtml(c) + "</span>";
        })
        .join("");
    }

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

      // v7 S3 (2026-07-28): the system accordion branch is gone — system
      // mounts a normal AdminTabs strip like every other tabbed route.
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

    let routeVisibilitySyncScheduled = false;
    function scheduleRouteVisibilitySync() {
      if (routeVisibilitySyncScheduled) return;
      routeVisibilitySyncScheduled = true;
      const run = () => {
        routeVisibilitySyncScheduled = false;
        applySectionVisibility();
        // Same contract as applyRoute(): the route-level pass above writes
        // inline display="" on every wanted sec-*, clobbering the per-tab
        // display:"none" that tab-aware modules (admin-display.js viewer
        // tabs) set. applyRoute re-dispatches so they can re-apply; this
        // path must too. Without it the two MutationObservers fight — every
        // late DOM mutation flips sec-viewer-theme / -fields / -limits back
        // to visible, admin-display.js hides them again, and the viewer page
        // visibly flickers for as long as anything keeps mutating the DOM.
        // Dispatching synchronously here means both passes land in the same
        // task, so no intermediate state is ever painted.
        document.dispatchEvent(new CustomEvent("admin-route-applied", {
          detail: { route: currentRoute, leaf: _activeTab },
        }));
      };
      if (typeof requestAnimationFrame === "function" && document.visibilityState !== "hidden") {
        requestAnimationFrame(run);
      } else {
        setTimeout(run, 0);
      }
    }

    // Late-injected sections (admin-sounds.js, admin-emojis.js, etc. inject
    // after scheduleIdleTask). Watch the main area for new [id^="sec-"]
    // elements and re-apply visibility when they arrive.
    const main = shell.querySelector(".admin-dash-main");
    if (main && typeof MutationObserver === "function") {
      const mo = new MutationObserver(() => {
        scheduleRouteVisibilitySync();
      });
      mo.observe(main, { childList: true, subtree: true });
      scheduleRouteVisibilitySync();
    }
  }

  // Attach Event Listeners
  // v8 IA (2026-08-19)：開發擴充可收合群組隨側欄改版一併退場——五個開發列
  // 收進「擴充」hub 頁後，側欄不再有需要收合的群組，收合函式與它的
  // localStorage key 都沒有消費者了，一併刪除。

  function addEventListeners() {
    if (window.ServerI18n && typeof window.ServerI18n.bindLanguageSelector === "function") {
      window.ServerI18n.bindLanguageSelector();
    }

    // Topbar search chip opens the ⌘K palette — it must behave like the
    // shortcut it advertises, or it reads as a dead control.
    const helpBtn = document.querySelector("[data-open-help]");
    if (helpBtn) {
      helpBtn.addEventListener("click", () => {
        if (window.AdminHelp) window.AdminHelp.toggle();
      });
    }

    const searchChip = document.querySelector("[data-open-palette]");
    if (searchChip) {
      const openPalette = () => {
        if (window.AdminCommandPalette) window.AdminCommandPalette.open();
      };
      searchChip.addEventListener("click", openPalette);
      searchChip.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openPalette();
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
    // D-4：i18n 的 data-i18n 掃描在本 shell 注入前就跑完了——側欄 25 個
    // adminNav* 節點是之後才生出來的，永遠停在 zh fallback（en/ja/ko 下
    // 側欄是整個 admin 最後一塊拼布）。shell 就緒後補掃一次（updateUI
    // 冪等，掃全文件的 [data-i18n]/[data-i18n-*]）。
    if (window.ServerI18n && typeof ServerI18n.updateUI === "function") {
      ServerI18n.updateUI();
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
