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
      defaultTab: "blacklist",
      tabs: [
        { slug: "blacklist",    label: "黑名單", en: "BLACKLIST",    section: "sec-blacklist"    },
        { slug: "filters",      label: "敏感字", en: "FILTERS",      section: "sec-filters"      },
        { slug: "ratelimit",    label: "速率限制", en: "RATE LIMIT",  section: "sec-ratelimit"    },
        { slug: "fingerprints", label: "指紋",  en: "FINGERPRINTS", section: "sec-fingerprints" },
      ],
    },
    appearance: {
      defaultTab: "themes",
      tabs: [
        { slug: "themes",        label: "主題包",    en: "THEMES",       section: "sec-themes" },
        { slug: "viewer-config", label: "Viewer 設定", en: "VIEWER",     sections: ["sec-viewer-config-tabs", "sec-viewer-theme", "sec-color", "sec-opacity", "sec-fontsize", "sec-speed", "sec-fontfamily", "sec-layout"] },
        { slug: "fonts",         label: "字型",      en: "FONTS",        section: "sec-fonts" },
      ],
    },
    automation: {
      defaultTab: "scheduler",
      tabs: [
        { slug: "scheduler", label: "排程",   en: "SCHEDULER", section: "sec-scheduler" },
        { slug: "webhooks",  label: "Webhook", en: "WEBHOOKS", section: "sec-webhooks"  },
        { slug: "plugins",   label: "插件",   en: "PLUGINS",   section: "sec-plugins"   },
      ],
    },
    history: {
      defaultTab: "sessions",
      tabs: [
        { slug: "sessions", label: "場次",    en: "SESSIONS", section: "sec-sessions-overview" },
        { slug: "search",   label: "搜尋",    en: "SEARCH",   section: "sec-search-overview"   },
        { slug: "audit",    label: "審計",    en: "AUDIT",    section: "sec-audit-overview"    },
        { slug: "replay",   label: "重播",    en: "REPLAY",   sections: ["sec-history-tabs", "history-v2-section", "sec-history"] },
        { slug: "audience", label: "觀眾",    en: "AUDIENCE", section: "sec-audience-overview" },
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

  function resolveActiveTab(nav, requestedTab) {
    const cfg = TabConfig[nav];
    if (!cfg) return null;
    const has = (slug) => cfg.tabs.some((t) => t.slug === slug);
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
      label.textContent = tab.label;
      btn.appendChild(label);

      const en = document.createElement("span");
      en.className = "admin-tabs-btn-en";
      en.textContent = tab.en;
      btn.appendChild(en);

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
