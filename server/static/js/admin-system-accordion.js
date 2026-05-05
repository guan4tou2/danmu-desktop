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
// We do NOT move sections in the DOM — the wrapper renders headers AND
// drives visibility. Section content stays where the owner module put it.

(function (window) {
  "use strict";

  // Sections per P0-0 system accordion. `sectionId` = the existing
  // sec-X element owned by an admin-*.js module. `slug` = the segment in
  // #/system/<slug>. Order = frequency × danger from system-accordion.jsx.
  // Note: `security` is intentionally NOT in here — admin-security.js owns
  // its own visibility via data-active-route="security" and the security
  // route stays standalone. Dedicated mobile-admin was removed; the admin
  // shell handles small screens through its standard responsive layout.
  const SECTIONS = [
    { slug: "system",       zh: "系統概覽",   en: "OVERVIEW",     sectionId: "sec-system-overview" },
    { slug: "firetoken",    zh: "API 金鑰",   en: "FIRETOKEN",    sectionId: "sec-firetoken-overview" },
    { slug: "api-tokens",   zh: "API Tokens", en: "API TOKENS",   sectionId: "sec-api-tokens-overview" },
    { slug: "backup",       zh: "備份 & 匯出", en: "BACKUP",       sectionId: "sec-backup" },
    { slug: "integrations", zh: "整合",       en: "INTEGRATIONS", sectionId: "sec-extensions-overview" },
    { slug: "wcag",         zh: "無障礙",     en: "WCAG",         sectionId: "sec-wcag-overview" },
    { slug: "about",        zh: "關於",       en: "ABOUT",        sectionId: "sec-about-overview" },
  ];

  const SECTION_IDS = SECTIONS.map((s) => s.sectionId);

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
    SECTIONS.forEach((s) => {
      const el = container.querySelector("#" + s.sectionId);
      if (el) el.style.display = (s.slug === activeSlug) ? "" : "none";
    });
  }

  // Render the accordion header strip (a vertical list of expandable rows).
  // Each row's body is the existing section element on the page; the strip
  // just controls visibility + click handling. Active row's section is
  // shown; all others hidden.
  function renderAccordion(activeSlug, opts) {
    const wrap = document.createElement("div");
    wrap.className = "admin-system-accordion";
    wrap.dataset.adminSystemAccordion = "";

    SECTIONS.forEach((s) => {
      const row = document.createElement("button");
      row.type = "button";
      row.className = "admin-system-accordion-row" + (s.slug === activeSlug ? " is-open" : "");
      row.dataset.slug = s.slug;
      row.setAttribute("aria-expanded", s.slug === activeSlug ? "true" : "false");
      row.setAttribute("aria-controls", s.sectionId);

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
    resolveActiveSlug,
    applySectionVisibility,
    renderAccordion,
    _setMem,
  };
})(window);
