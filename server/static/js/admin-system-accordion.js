// AdminSystemAccordion — collapsible accordion for the system nav (P0-0).
//
// The system route hosts C-tier leaves (per docs/design-v2-backlog § P0-0
// + system-accordion.jsx visual reference). Each leaf is a section owned by
// its own admin-*.js module. We wrap them in an accordion shell:
//   - default-collapsed
//   - single-open (auto-collapse others when one opens)
//   - deep-link via #/system/<slug>
//   - sessionStorage memory of last-open section per visit
//
// Phase B (2026-05-06): the automation + history routes were collapsed into
// system. The accordion now hosts 4 grouped panels:
//   · settings    : system overview / backup / integrations / wcag / about
//   · access      : security / firetoken / api-tokens
//   · automation  : scheduler / webhooks / plugins
//   · history     : sessions / search / audit / replay / audience
// Sections are NOT moved in the DOM — the wrapper renders headers AND drives
// visibility. Section content stays where the owner module put it.

(function (window) {
  "use strict";

  // Sections per P0-0 system accordion. `sectionId` (or `sectionIds` for
  // multi-section leaves like history/replay) = the existing sec-* element
  // owned by an admin-*.js module. `slug` = the segment in
  // #/system/<slug>. Order = frequency × danger.
  // Dedicated mobile-admin was removed; the admin shell handles small screens
  // through its standard responsive layout.
  const SECTIONS = [
    // ── settings group ────────────────────────────────────────────────────
    { slug: "system",       group: "settings",   zh: "系統概覽",   en: "OVERVIEW",     sectionId: "sec-system-overview" },
    { slug: "backup",       group: "settings",   zh: "備份 & 匯出", en: "BACKUP",       sectionId: "sec-backup" },
    { slug: "integrations", group: "settings",   zh: "整合",       en: "INTEGRATIONS", sectionId: "sec-extensions-overview" },
    { slug: "wcag",         group: "settings",   zh: "無障礙",     en: "WCAG",         sectionId: "sec-wcag-overview" },
    { slug: "about",        group: "settings",   zh: "關於",       en: "ABOUT",        sectionId: "sec-about-overview" },
    // ── access group ──────────────────────────────────────────────────────
    { slug: "security",     group: "access",     zh: "安全",       en: "SECURITY",     sectionId: "admin-security-v2-page" },
    { slug: "firetoken",    group: "access",     zh: "API 金鑰",   en: "FIRETOKEN",    sectionId: "sec-firetoken-overview" },
    { slug: "api-tokens",   group: "access",     zh: "API Tokens", en: "API TOKENS",   sectionId: "sec-api-tokens-overview" },
    // ── automation group (Phase B) ────────────────────────────────────────
    { slug: "scheduler",    group: "automation", zh: "排程",       en: "SCHEDULER",    sectionId: "sec-scheduler" },
    { slug: "webhooks",     group: "automation", zh: "Webhook",    en: "WEBHOOKS",     sectionId: "sec-webhooks" },
    { slug: "plugins",      group: "automation", zh: "插件",       en: "PLUGINS",      sectionId: "sec-plugins" },
    // ── history group (Phase B) ───────────────────────────────────────────
    { slug: "sessions",     group: "history",    zh: "場次",       en: "SESSIONS",     sectionId: "sec-sessions-overview" },
    { slug: "search",       group: "history",    zh: "搜尋",       en: "SEARCH",       sectionId: "sec-search-overview" },
    { slug: "audit",        group: "history",    zh: "審計",       en: "AUDIT",        sectionId: "sec-audit-overview" },
    { slug: "replay",       group: "history",    zh: "重播",       en: "REPLAY",       sectionIds: ["sec-history-tabs", "history-v2-section", "sec-history"] },
    { slug: "audience",     group: "history",    zh: "觀眾",       en: "AUDIENCE",     sectionId: "sec-audience-overview" },
  ];

  const GROUPS = [
    { key: "settings",   zh: "設定",   en: "SETTINGS" },
    { key: "access",     zh: "存取",   en: "ACCESS" },
    { key: "automation", zh: "自動化", en: "AUTOMATION" },
    { key: "history",    zh: "歷史",   en: "HISTORY" },
  ];

  // Flat list of every sec-* ID owned by the accordion (across all leaves).
  // Single-section leaves contribute `sectionId`; multi-section leaves like
  // history/replay contribute every entry of `sectionIds`.
  function _idsFor(leaf) {
    if (Array.isArray(leaf.sectionIds)) return leaf.sectionIds.slice();
    if (leaf.sectionId) return [leaf.sectionId];
    return [];
  }
  const SECTION_IDS = SECTIONS.flatMap(_idsFor);

  function _memKey() { return "admin:system:last-open"; }
  function _getMem() {
    try { return sessionStorage.getItem(_memKey()) || null; } catch (_) { return null; }
  }
  function _setMem(slug) {
    try {
      if (slug) sessionStorage.setItem(_memKey(), slug);
      else sessionStorage.removeItem(_memKey());
    } catch (_) { /* ignore */ }
  }

  function resolveActiveSlug(hint) {
    if (hint && SECTIONS.some((s) => s.slug === hint)) return hint;
    const mem = _getMem();
    if (mem && SECTIONS.some((s) => s.slug === mem)) return mem;
    return SECTIONS[0].slug;  // first section as fallback
  }

  function applySectionVisibility(activeSlug, container) {
    if (!container) return;
    SECTIONS.forEach((leaf) => {
      const ids = _idsFor(leaf);
      const showThisLeaf = leaf.slug === activeSlug;
      ids.forEach((id) => {
        const el = container.querySelector("#" + id);
        if (el) el.style.display = showThisLeaf ? "" : "none";
      });
    });
  }

  // Render the accordion header strip (a vertical list of expandable rows).
  // Each row's body is the existing section element on the page; the strip
  // just controls visibility + click handling. Active row's section is
  // shown; all others hidden. Phase B: insert a divider+label before the
  // first row of each group so the 4 panels read as distinct blocks.
  function renderAccordion(activeSlug, opts) {
    const wrap = document.createElement("div");
    wrap.className = "admin-system-accordion";
    wrap.dataset.adminSystemAccordion = "";

    let lastGroup = null;
    SECTIONS.forEach((s) => {
      // Group header before the first leaf of each group.
      if (s.group && s.group !== lastGroup) {
        const groupCfg = GROUPS.find((g) => g.key === s.group);
        if (groupCfg) {
          const head = document.createElement("div");
          head.className = "admin-system-accordion-group";
          head.dataset.group = groupCfg.key;
          head.setAttribute("aria-hidden", "true");
          head.innerHTML =
            '<span class="admin-system-accordion-group-zh">' + groupCfg.zh + "</span>" +
            '<span class="admin-system-accordion-group-en">' + groupCfg.en + "</span>";
          wrap.appendChild(head);
        }
        lastGroup = s.group;
      }

      const row = document.createElement("button");
      row.type = "button";
      row.className = "admin-system-accordion-row" + (s.slug === activeSlug ? " is-open" : "");
      row.dataset.slug = s.slug;
      row.setAttribute("aria-expanded", s.slug === activeSlug ? "true" : "false");
      row.setAttribute("aria-controls", _idsFor(s)[0] || "");

      const label = document.createElement("span");
      label.className = "admin-system-accordion-label";
      label.textContent = s.zh;
      row.appendChild(label);

      const en = document.createElement("span");
      en.className = "admin-system-accordion-en";
      en.textContent = s.en;
      row.appendChild(en);

      const chev = document.createElement("span");
      chev.className = "admin-system-accordion-chev";
      chev.textContent = "▾";
      row.appendChild(chev);

      row.addEventListener("click", () => {
        if (typeof opts?.onSelect === "function") opts.onSelect(s.slug);
      });

      wrap.appendChild(row);
    });

    return wrap;
  }

  window.AdminSystemAccordion = {
    SECTIONS,
    SECTION_IDS,
    GROUPS,
    resolveActiveSlug,
    applySectionVisibility,
    renderAccordion,
    _setMem,
  };
})(window);
