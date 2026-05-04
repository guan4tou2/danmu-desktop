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

  // 4 nav per P0-0a — but Slice 3 only ships moderation as proof of concept.
  // appearance / automation / history are stubbed (commented) for Slice 4.
  const TabConfig = {
    moderation: {
      defaultTab: "blacklist",
      tabs: [
        { slug: "blacklist",    label: "黑名單", en: "BLACKLIST", section: "sec-blacklist" },
        { slug: "filters",      label: "敏感字", en: "FILTERS",   section: "sec-filters"   },
      ],
    },
    // appearance: { defaultTab: "themes",     tabs: [...] },  // Slice 4
    // automation: { defaultTab: "scheduler",  tabs: [...] },  // Slice 4
    // history:    { defaultTab: "sessions",   tabs: [...] },  // Slice 4
  };

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
      const sec = container.querySelector("#" + tab.section);
      if (!sec) return;
      sec.style.display = (tab.slug === activeTab) ? "" : "none";
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
