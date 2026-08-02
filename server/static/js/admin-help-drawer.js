/**
 * Admin · Help Drawer (Batch 12-1, 2026-05-19 v5).
 *
 * Slide-in right drawer with contextual help for the active route.
 * Triggered by F1 / ? / ⌘/ when no input is focused, or via
 * `window.AdminHelp.open()`. Closes on Esc / backdrop / ✕.
 *
 * v5 layout per batch12-help.jsx:
 *   ┌─ 360px ────────────────────────────┐
 *   │ Help · ⌘/                       ✕ │  ← header
 *   ├────────────────────────────────────┤
 *   │ ● <route-title>     目前頁面      │  ← route-specific block
 *   │   → tip 1                          │
 *   │   → tip 2                          │
 *   │                                    │
 *   │ 鍵盤快捷鍵 · SHORTCUTS             │  ← global section
 *   │   ⌘ K     全域搜尋                 │
   *   │   ⌘ ⇧ O  Desktop 開關              │
 *   │   ...                              │
 *   │                                    │
 *   │ 術語 · GLOSSARY                    │  ← global section
   *   │   Desktop  Electron/OBS 上的彈幕… │
 *   │   ...                              │
 *   │                                    │
 *   │ 資源 · RESOURCES                   │  ← global section
 *   │   API 文件   docs.danmufire.dev ↗ │
 *   │   ...                              │
 *   ├────────────────────────────────────┤
 *   │ Danmu Fire vX.X · ⌘/ 開啟 Help    │  ← footer
 *   └────────────────────────────────────┘
 *
 * The drawer reuses the cyan-left-border HUD chrome. Width tightened
 * from the legacy 460px to the design's 360px. SHORTCUTS / GLOSSARY /
 * RESOURCES are constant across routes; only the top route block
 * changes based on the active hash.
 */
(function () {
  "use strict";

  const ROOT_ID = "admin-help-drawer-root";

  // Per-route tips. Key = first hash segment (or alias) → array of
  // strings. `_default` is the fallback when no route key matches.
  // HTML-escaped at render time so descriptions are plain text.
  //
  // D-4 i18n: entries store *Key fields (not literal zh text) because this
  // object is parsed at module load, before ServerI18n has necessarily
  // init'd — ServerI18n.t() is only called lazily inside _renderBody().
  // `_default.title` stays a literal string (brand name "Danmu Fire",
  // not Chinese, out of scope for this migration).
  const ROUTE_TIPS = {
    _default: {
      title: "Danmu Fire",
      tipKeys: [
        "helpDrawerDefaultTip1",
        "helpDrawerDefaultTip2",
        "helpDrawerDefaultTip3",
      ],
    },

    live: {
      titleKey: "helpDrawerLiveTitle",
      tipKeys: [
        "helpDrawerLiveTip1",
        "helpDrawerLiveTip2",
        "helpDrawerLiveTip3",
      ],
    },

    polls: {
      titleKey: "helpDrawerPollsTitle",
      tipKeys: [
        "helpDrawerPollsTip1",
        "helpDrawerPollsTip2",
        "helpDrawerPollsTip3",
        "helpDrawerPollsTip4",
      ],
    },

    widgets: {
      title: "Desktop Widgets",
      tipKeys: [
        "helpDrawerWidgetsTip1",
        "helpDrawerWidgetsTip2",
        "helpDrawerWidgetsTip3",
      ],
    },

    moderation: {
      titleKey: "helpDrawerModerationTitle",
      tipKeys: [
        "helpDrawerModerationTip1",
        "helpDrawerModerationTip2",
        // Latin-only (no Chinese) — kept literal, resolved in the tips
        // map step below via the `literal` escape hatch.
        { literal: "filter action：block / replace / review / allow" },
        "helpDrawerModerationTip4",
      ],
    },

    webhooks: {
      title: "Webhooks",
      tipKeys: [
        "helpDrawerWebhooksTip1",
        "helpDrawerWebhooksTip2",
        "helpDrawerWebhooksTip3",
      ],
    },

    "api-tokens": {
      title: "API Tokens",
      tipKeys: [
        "helpDrawerApiTokensTip1",
        "helpDrawerApiTokensTip2",
        "helpDrawerApiTokensTip3",
      ],
    },

    plugins: {
      titleKey: "helpDrawerPluginsTitle",
      tipKeys: [
        "helpDrawerPluginsTip1",
        "helpDrawerPluginsTip2",
        "helpDrawerPluginsTip3",
      ],
    },

    overlay: {
      titleKey: "helpDrawerOverlayTitle",
      tipKeys: [
        "helpDrawerOverlayTip1",
        "helpDrawerOverlayTip2",
        "helpDrawerOverlayTip3",
      ],
    },

    broadcast: {
      // Alias for overlay — same content, so it reuses overlay's keys
      // rather than duplicating four more translation entries.
      titleKey: "helpDrawerOverlayTitle",
      tipKeys: [
        "helpDrawerOverlayTip1",
        "helpDrawerOverlayTip2",
        "helpDrawerOverlayTip3",
      ],
    },

    viewer: {
      titleKey: "helpDrawerViewerTitle",
      tipKeys: [
        "helpDrawerViewerTip1",
        "helpDrawerViewerTip2",
        "helpDrawerViewerTip3",
      ],
    },

    modqueue: {
      titleKey: "helpDrawerModqueueTitle",
      tipKeys: [
        "helpDrawerModqueueTip1",
        "helpDrawerModqueueTip2",
        "helpDrawerModqueueTip3",
        "helpDrawerModqueueTip4",
      ],
    },

    sessions: {
      titleKey: "helpDrawerSessionsTitle",
      tipKeys: [
        "helpDrawerSessionsTip1",
        "helpDrawerSessionsTip2",
        "helpDrawerSessionsTip3",
      ],
    },

    system: {
      titleKey: "helpDrawerSystemTitle",
      tipKeys: [
        "helpDrawerSystemTip1",
        "helpDrawerSystemTip2",
        "helpDrawerSystemTip3",
        "helpDrawerSystemTip4",
      ],
    },
  };

  // Global shortcuts — constant across all routes per the v5 spec.
  // `keys` are literal key-cap glyphs (language-neutral, not moved).
  const SHORTCUTS = [
    { keys: ["⌘", "K"],        descKey: "helpDrawerShortcutGlobalSearch" },
    { keys: ["F1"],            descKey: "helpDrawerShortcutOpenHelp" },
    { keys: ["⌘", "/"],        descKey: "helpDrawerShortcutOpenHelpAlt" },
    { keys: ["⌘", "⇧", "L"],  descKey: "helpDrawerShortcutLiveFeed" },
    { keys: ["⌘", "⇧", "S"],  descKey: "helpDrawerShortcutDesktopOff" },
    { keys: ["⌘", "⇧", "C"],  descKey: "helpDrawerShortcutClearDesktop" },
    { keys: ["Esc"],           descKey: "helpDrawerShortcutCloseDrawer" },
  ];

  // Terminology cheat-sheet — clarifies post-pivot vocabulary that
  // operators commonly confuse with adjacent web concepts. `term` is the
  // jargon itself (kept in Latin across all locales, like a dictionary
  // headword); only `defKey` (the definition) is translated.
  const GLOSSARY = [
    { term: "Desktop",          defKey: "helpDrawerGlossaryDesktopDef" },
    { term: "Session",          defKey: "helpDrawerGlossarySessionDef" },
    { term: "Fire Token",       defKey: "helpDrawerGlossaryFireTokenDef" },
    { term: "Fingerprint (fp)", defKey: "helpDrawerGlossaryFingerprintDef" },
    { term: ".dme",             defKey: "helpDrawerGlossaryDmeDef" },
  ];

  // External resource links — opens in a new tab.
  const RESOURCES = [
    { label: "GitHub Repo",    url: "https://github.com/guan4tou2/danmu-desktop" },
    { label: "Issues",         url: "https://github.com/guan4tou2/danmu-desktop/issues" },
    { label: "CHANGELOG",      url: "https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md" },
    { label: "Plugin SDK",     url: "https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins" },
  ];

  function _esc(s) {
    if (s == null) return "";
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[c];
    });
  }

  function _routeKey() {
    const slug = (location.hash || "").replace("#/", "").split("/")[0] || "";
    if (ROUTE_TIPS[slug]) return slug;
    return "_default";
  }

  function _renderShell() {
    return `
      <div id="${ROOT_ID}" class="admin-help" role="dialog" aria-modal="true" aria-labelledby="admin-help-title">
        <div class="admin-help__backdrop" data-help-close></div>
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`;
  }

  function _renderBody() {
    const entry = ROUTE_TIPS[_routeKey()];
    const version = (window.DANMU_CONFIG && window.DANMU_CONFIG.appVersion) || "";
    // _default is the only entry without a titleKey (its title is the
    // "Danmu Fire" brand name — not Chinese, so out of scope for D-4).
    const titleText = entry.titleKey ? ServerI18n.t(entry.titleKey) : entry.title;

    const tipsHtml = entry.tipKeys.map((tipKey) => `
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">→</span>
        <span>${_esc(typeof tipKey === "string" ? ServerI18n.t(tipKey) : tipKey.literal)}</span>
      </div>`).join("");

    const shortcutsHtml = SHORTCUTS.map((s) => `
      <div class="admin-help__shortcut">
        <div class="admin-help__keys">
          ${s.keys.map((k) => `<kbd class="admin-help__kbd">${_esc(k)}</kbd>`).join("")}
        </div>
        <span class="admin-help__shortcut-desc">${_esc(ServerI18n.t(s.descKey))}</span>
      </div>`).join("");

    const glossaryHtml = GLOSSARY.map((g) => `
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${_esc(g.term)}</div>
        <div class="admin-help__glossary-def">${_esc(ServerI18n.t(g.defKey))}</div>
      </div>`).join("");

    const resourcesHtml = RESOURCES.map((r) => `
      <a class="admin-help__resource" href="${_esc(r.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${_esc(r.label)}</span>
        <span class="admin-help__resource-url">${_esc(r.url.replace(/^https?:\/\//, ""))}</span>
        <span class="admin-help__resource-arrow">↗</span>
      </a>`).join("");

    return `
      <header class="admin-help__head">
        <span class="admin-help__title" id="admin-help-title">Help</span>
        <kbd class="admin-help__kbd admin-help__head-kbd">⌘ /</kbd>
        <span class="admin-help__spacer"></span>
        <button type="button" class="admin-help__close" data-help-close aria-label="Close">${window.AdminUtils.closeIcon}</button>
      </header>
      <div class="admin-help__body">

        <section class="admin-help__section">
          <div class="admin-help__route-head">
            <span class="admin-help__route-dot"></span>
            <span class="admin-help__route-title">${_esc(titleText)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${tipsHtml}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerShortcutsLabel")} · SHORTCUTS</div>
          <div class="admin-help__shortcuts">${shortcutsHtml}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerGlossaryLabel")} · GLOSSARY</div>
          <div class="admin-help__glossary">${glossaryHtml}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")} · RESOURCES</div>
          <div class="admin-help__resources">${resourcesHtml}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${version ? "v" + _esc(version) : ""} · ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`;
  }

  function open() {
    let root = document.getElementById(ROOT_ID);
    if (!root) {
      document.body.insertAdjacentHTML("beforeend", _renderShell());
      root = document.getElementById(ROOT_ID);
      root.addEventListener("click", (e) => {
        if (e.target.closest("[data-help-close]")) close();
      });
    }
    root.querySelector("[data-help-body]").innerHTML = _renderBody();
    document.addEventListener("keydown", _onKey);
  }

  function close() {
    const root = document.getElementById(ROOT_ID);
    if (root) root.remove();
    document.removeEventListener("keydown", _onKey);
  }

  function toggle() {
    document.getElementById(ROOT_ID) ? close() : open();
  }

  function _onKey(e) {
    if (e.key === "Escape") { e.preventDefault(); close(); }
  }

  function _onGlobalKey(e) {
    // Don't intercept when user is typing.
    const t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
    // F1 / ? toggle (legacy) + ⌘/ (v5 spec).
    const isSlash = e.key === "/" && (e.metaKey || e.ctrlKey);
    if (e.key === "F1" || (e.key === "?" && !e.ctrlKey && !e.metaKey) || isSlash) {
      e.preventDefault();
      toggle();
    }
  }

  function init() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    if (!document.body.classList.contains("admin-body")) return;
    document.addEventListener("keydown", _onGlobalKey);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.AdminHelp = { open, close, toggle };
})();
