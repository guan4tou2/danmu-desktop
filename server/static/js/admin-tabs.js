// AdminTabs — shared tab strip for tabbed admin pages (P0-0a)
//
// Config per nav: tab list + default tab + which DOM section each tab owns.
// Slice 3 ships moderation only (POC). Slice 4 adds appearance / automation /
// history once their content is consolidated.
//
// Visual reference: docs/designs/design-v2/components/tab-chrome.jsx
// Decisions: design-v2-backlog § P0-0a (default tab = mid-event likely).
//
// Public API on window.AdminTabs:
//   hasTabsFor(nav)              → bool
//   getConfig(nav)               → {defaultTab, tabs} | null
//   resolveActiveTab(nav, hint)  → slug — applies hint > sessionStorage > default
//   renderTabStrip(nav, active, {onSelect}) → <div class="admin-tabs-strip">
//   applyTabSectionVisibility(nav, activeTab, container)
//
// Tab clicks call onSelect(slug). Caller is responsible for: writing hash
// (window.AdminRouter.buildHash) + invoking applyRoute and persisting via
// AdminRouter.tabMemory.

(function (window) {
  "use strict";

  // 4 tabbed nav per P0-0a, defaults = "most likely needed mid-event".
  // Each tab maps to a single DOM section ID (route-level visibility shows
  // them all; tab visibility hides inactive ones). For tabs whose content
  // spans multiple sections (e.g. history/replay = 3 sections), use
  // `sections: [...]` array instead of `section: "..."`.
  const TabConfig = {
    moderation: {
      // v8（2026-08-19 設計稿 07 · R3）：6 個分頁併成 3 個，依「你在管什麼」
      // 而不是「後端有幾張表」分：
      //   封鎖字     ← blacklist（字串黑名單）+ filters（規則）
      //   被封鎖的觀眾 ← bans（人）+ fingerprints（同一個人的裝置指紋）
      //   發送上限   ← ratelimit
      // queue（待審佇列）保留為第四個分頁，未併入——設計稿的「命中時 →
      // 先保留待審」這個選項會產生待審訊息，沒有佇列就沒地方看，
      // 稿上三格是示意，不是要把佇列刪掉。
      // 舊的 6 個 slug 全部保留為 deep-link 別名（_tabAliases）。
      defaultTab: "queue",
      tabs: [
        { slug: "queue",        labelKey: "tabModQueue",       en: "QUEUE",   section: "sec-modqueue" },
        { slug: "blacklist",    labelKey: "tabModBlockedWords", en: "WORDS",
          sections: ["sec-blacklist", "sec-filters"] },
        { slug: "bans",         labelKey: "tabModBlockedViewers", en: "VIEWERS",
          sections: ["sec-modbans-overview", "sec-fingerprints"] },
        { slug: "ratelimit",    labelKey: "tabModSendLimits",  en: "LIMITS",  section: "sec-ratelimit" },
      ],
    },
    // v7 S4 (2026-07-28): dead `appearance` group removed — the route is a
    // pure alias (→ themes) now, so this strip could never mount.
    // v7 IA (2026-07-28): assets absorbed fonts as its fifth tab — fonts
    // are the fourth uploadable asset type. Overview stays the landing tab.
    assets: {
      defaultTab: "overview",
      tabs: [
        { slug: "overview", labelKey: "tabAssetsOverview", en: "OVERVIEW", section: "sec-assets-overview" },
        { slug: "emojis",   labelKey: "tabAssetsEmojis", en: "EMOJIS",   section: "sec-emojis"   },
        { slug: "stickers", labelKey: "tabAssetsStickers", en: "STICKERS", section: "sec-stickers" },
        { slug: "sounds",   labelKey: "tabAssetsSounds", en: "SOUNDS",   section: "sec-sounds"   },
        { slug: "fonts",    labelKey: "tabAssetsFonts", en: "FONTS",    section: "sec-fonts"    },
      ],
    },
    // D-6 階段 4 (2026-07-29): viewer 從 admin-display.js 自製的
    // `.admin-tabstrip` 併進來。舊的那條不只長得不一樣，位置也不一樣——
    // 它渲染在 settings-grid 裡（頁面最底部 y≈1214），其他四個分頁 nav
    // 的 strip 都在標題列正下方（y≈197）。同一層級的控制不該長在兩個地方。
    // slug 沿用 body.dataset.viewerConfigTab 的既有值（page/fields/
    // defaults/limits），deep link 與 ⌘K 才不用改。
    viewer: {
      defaultTab: "defaults",
      tabs: [
        { slug: "page",     labelKey: "tabViewerPage", en: "PAGE",     section: "sec-viewer-theme" },
        { slug: "fields",   labelKey: "tabViewerFields", en: "FIELDS",   section: "sec-viewer-config-fields" },
        { slug: "defaults", labelKey: "tabViewerDefaults", en: "DEFAULTS", section: "sec-viewer-config-defaults" },
        { slug: "limits",   labelKey: "tabViewerLimits", en: "LIMITS",   section: "sec-viewer-config-limits" },
      ],
    },
    // v7 S3 (2026-07-28): the system accordion retired — 16 leaves were
    // mostly duplicate doors to first-class routes. What genuinely lives
    // here is now a 6-tab strip; everything else rehomed (see the legacy
    // leaf map in admin.js applyRoute).
    system: {
      defaultTab: "overview",
      tabs: [
        { slug: "overview",  labelKey: "tabSystemOverview", en: "OVERVIEW",  section: "sec-system-overview" },
        { slug: "scheduler", labelKey: "tabSystemScheduler", en: "SCHEDULER", section: "sec-scheduler" },
        { slug: "security",  labelKey: "tabSystemSecurity", en: "SECURITY",  section: "admin-security-v2-page" },
        { slug: "firetoken", label: "Fire Token", en: "FIRETOKEN", section: "sec-firetoken-overview" },
        { slug: "wcag",      labelKey: "tabSystemWcag", en: "WCAG",      section: "sec-wcag-overview" },
        { slug: "about",     labelKey: "tabSystemAbout", en: "ABOUT",     section: "sec-about-overview" },
      ],
    },
    history: {
      defaultTab: "sessions",
      tabs: [
        { slug: "sessions", labelKey: "tabHistorySessions", en: "SESSIONS", section: "sec-sessions-overview" },
        { slug: "search",   labelKey: "tabHistorySearch", en: "SEARCH",   section: "sec-search-overview"   },
        { slug: "audit",    labelKey: "tabHistoryAudit", en: "AUDIT",    section: "sec-audit-overview"    },
        { slug: "replay",   labelKey: "tabHistoryReplay", en: "REPLAY",   sections: ["sec-history-tabs", "history-v2-section", "sec-history-list", "sec-history"] },
        { slug: "audience", labelKey: "tabHistoryAudience", en: "AUDIENCE", section: "sec-audience-overview" },
      ],
    },
  };

  // Resolve a tab's section ID(s) to an array regardless of which key is used.
  function _tabSections(tab) {
    if (Array.isArray(tab.sections)) return tab.sections;
    if (tab.section) return [tab.section];
    return [];
  }

  function hasTabsFor(nav) {
    return !!TabConfig[nav];
  }

  function getConfig(nav) {
    return TabConfig[nav] || null;
  }

  // v8（2026-08-19）：審核 6 分頁併成 4 之後，被併掉的 slug 仍是有效書籤
  // （#/moderation/filters 這種）。沒有這張表的話 resolveActiveTab 會退回
  // defaultTab，使用者點舊連結會落到佇列而不是他要看的內容。
  const _tabAliases = {
    moderation: {
      filters: "blacklist",        // 規則併入「封鎖字」
      fingerprints: "bans",        // 指紋併入「被封鎖的觀眾」
    },
  };

  function resolveActiveTab(nav, requestedTab) {
    const cfg = TabConfig[nav];
    if (!cfg) return null;
    const has = (slug) => cfg.tabs.some((t) => t.slug === slug);
    const aliased = _tabAliases[nav]?.[requestedTab];
    if (aliased && has(aliased)) return aliased;
    if (requestedTab && has(requestedTab)) return requestedTab;
    const mem = window.AdminRouter?.tabMemory?.get?.(nav);
    if (mem && has(mem)) return mem;
    return cfg.defaultTab;
  }

  function renderTabStrip(nav, activeTab, opts) {
    const cfg = TabConfig[nav];
    if (!cfg) return null;
    const strip = document.createElement("div");
    strip.className = "admin-tabs-strip";
    strip.dataset.nav = nav;
    strip.setAttribute("role", "tablist");
    strip.setAttribute("aria-label", nav + " tabs");

    cfg.tabs.forEach((tab) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "admin-tabs-btn" + (tab.slug === activeTab ? " is-active" : "");
      btn.dataset.nav = nav;
      btn.dataset.tab = tab.slug;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", tab.slug === activeTab ? "true" : "false");

      const label = document.createElement("span");
      label.className = "admin-tabs-btn-label";
      label.textContent = tab.labelKey ? ServerI18n.t(tab.labelKey) : tab.label;
      btn.appendChild(label);

      // v8（2026-08-19 設計稿 07）：分頁不再印英文對照。稿上的分頁列就是
      // 「封鎖字 / 被封鎖的觀眾 / 發送上限」三個中文詞——中文已經是標籤，
      // 再疊一行大寫英文只是把同一件事說兩次，還讓分頁列高多一截。
      // tab.en 欄位保留在 TabConfig（其他地方可能引用），只是不再渲染。

      btn.addEventListener("click", () => {
        if (typeof opts?.onSelect === "function") opts.onSelect(tab.slug);
      });

      strip.appendChild(btn);
    });

    return strip;
  }

  function applyTabSectionVisibility(nav, activeTab, container) {
    const cfg = TabConfig[nav];
    if (!cfg || !container) return;
    cfg.tabs.forEach((tab) => {
      const isActive = tab.slug === activeTab;
      _tabSections(tab).forEach((id) => {
        const sec = container.querySelector("#" + id);
        if (sec) sec.style.display = isActive ? "" : "none";
      });
    });
  }

  window.AdminTabs = {
    hasTabsFor,
    getConfig,
    resolveActiveTab,
    renderTabStrip,
    applyTabSectionVisibility,
  };
})(window);
