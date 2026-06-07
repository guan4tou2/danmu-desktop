const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

// Design v2 handoff alignment: the visible sidebar keeps security out of
// the top-level nav while the router still exposes a direct security route.
test("admin panel uses design-v2 dash grid + Phase A IA sections", () => {
  const staticDir = path.join(__dirname, "..", "..", "server", "static", "js");
  const adminSrc = fs.readFileSync(path.join(staticDir, "admin.js"), "utf8");

  // Shell + router anchors — these stay in admin.js.
  expect(adminSrc).toContain("admin-dash-grid");
  expect(adminSrc).toContain("ADMIN_ROUTES");
  expect(adminSrc).toContain('data-route="live"');
  // 2026-05-19 v5 IA: `display` sidebar item retired. Its content
  // (overlay / viewer defaults) was already absorbed by viewer's
  // 4-tab layout. Legacy `#/display` bookmarks alias-redirect to
  // `#/viewer/defaults` via _bareLegacyRedirects.
  expect(adminSrc).not.toContain('data-route="display"');
  expect(adminSrc).toMatch(/display:\s*\{\s*nav:\s*"viewer",\s*tab:\s*"defaults"/);
  expect(adminSrc).toContain('data-route="viewer"');
  expect(adminSrc).not.toContain('data-route="dashboard"');
  // 2026-05-18 v5: messages + widgets promoted to first-class sidebar slugs.
  expect(adminSrc).toContain('data-route="messages"');
  expect(adminSrc).toContain('data-route="widgets"');
  // security is not a standalone nav button.
  expect(adminSrc).not.toContain('data-route="security"');
  // Secondary surfaces remain reachable through tabs / aliases.
  expect(adminSrc).toContain('data-route="moderation"');
  expect(adminSrc).toContain('data-route="system"');
  // Alias entries route legacy hashes to the new IA.
  // 2026-05-18 v5: ratelimit promoted to first-class slug (no longer alias).
  expect(adminSrc).toMatch(/"viewer-config":\s*\{\s*nav:\s*"viewer"/);
  expect(adminSrc).toMatch(/dashboard:\s*"live"/);
  expect(adminSrc).toMatch(/security:\s*\{\s*title:\s*"安全"/);
  // Sections still rendered inline by admin.js renderControlPanel():
  expect(adminSrc).toContain('id="sec-blacklist"');
  expect(adminSrc).toContain('id="sec-history"');
  // sec-security / sec-ws-auth removed 2026-04-28 (Group D-3 R6) — fully
  // owned by admin-security-v2-page (sec2-pw-* IDs) in admin-security.js.

  // Sections extracted to dedicated modules (Group D-3 split). The HTML
  // uses template literals with SECTION_ID, so we assert the const + the
  // class hook on the rendered root div.
  const ratelimitSrc   = fs.readFileSync(path.join(staticDir, "admin-ratelimit.js"), "utf8");
  const displaySrc     = fs.readFileSync(path.join(staticDir, "admin-display.js"), "utf8");
  const securitySrc    = fs.readFileSync(path.join(staticDir, "admin-security.js"), "utf8");
  const systemSrc      = fs.readFileSync(path.join(staticDir, "admin-system-accordion.js"), "utf8");
  const viewerThemeSrc = fs.readFileSync(path.join(staticDir, "admin-viewer-theme.js"), "utf8");
  const themeSwitcherSrc = fs.readFileSync(path.join(staticDir, "admin-theme-switcher.js"), "utf8");
  expect(ratelimitSrc).toContain('SECTION_ID = "sec-ratelimit"');
  expect(ratelimitSrc).toContain('admin-ratelimit-page');
  expect(displaySrc).toContain('route === "display"');
  expect(displaySrc).toContain('route === "viewer"');
  expect(displaySrc).toContain("Display 控制 Desktop / client / 目標顯示器");
  expect(securitySrc).toContain('route === "system"');
  expect(securitySrc).toContain('leaf === "security"');
  // 2026-05-19 v5 Batch 12-3: security page title shortened from
  // "System › Security" to just "安全性" per batch12-system.jsx.
  expect(securitySrc).toContain("安全性");
  expect(securitySrc).toContain("SECURITY · AUTH · ACCESS · TOKENS");
  expect(systemSrc).toContain("slug: \"security\"");
  expect(systemSrc).toContain("sectionId: \"admin-security-v2-page\"");
  expect(viewerThemeSrc).toContain('SECTION_ID = "sec-viewer-theme"');
  expect(viewerThemeSrc).toContain('admin-vt-page');
  expect(viewerThemeSrc).toContain('data-vt-jump="display"');
  expect(viewerThemeSrc).toContain("Desktop 排版 / 顯示器 / 連線狀態請到 <b>Display</b>");
  expect(themeSwitcherSrc).toContain("SHOW_TOPBAR_TOGGLE = false");
  expect(themeSwitcherSrc).toMatch(/document\.getElementById\(BTN_ID\)\?\.remove\(\);/);
});

test("admin Viewer field inventory matches the canonical viewer spec", () => {
  const staticDir = path.join(__dirname, "..", "..", "server", "static", "js");
  const displaySrc = fs.readFileSync(path.join(staticDir, "admin-display.js"), "utf8");

  expect(displaySrc).toContain("Viewer 管理 <b>觀眾頁</b>");
  expect(displaySrc).toContain("主題樣式由 Theme Packs");
  expect(displaySrc).toContain("速度 / Speed");
  expect(displaySrc).toContain("排版 / Layout");
  expect(displaySrc).toContain("效果 / Effect");
  expect(displaySrc).not.toContain("描邊 / Stroke");
  expect(displaySrc).not.toContain("陰影 / Shadow");
  expect(displaySrc).not.toContain("匿名送出");
  expect(displaySrc).not.toContain("附加圖片");
});

test("admin Viewer surface exposes language/copy and defaults/limits guidance", () => {
  const staticDir = path.join(__dirname, "..", "..", "server", "static", "js");
  const adminSrc = fs.readFileSync(path.join(staticDir, "admin.js"), "utf8");
  const displaySrc = fs.readFileSync(path.join(staticDir, "admin-display.js"), "utf8");

  expect(adminSrc).toContain("VIEWER · 頁面預設 · 欄位設定 · 文案 / 限制");
  // 2026-05-16: viewer language is system-driven — admin-controlled
  // override lives in Viewer › Page Theme. Fields panel labels this
  // section ADMIN CONTROLLED (no in-viewer toggle) instead of the
  // earlier LANGUAGE / COPY heading.
  expect(displaySrc).toContain("ADMIN CONTROLLED");
  expect(displaySrc).not.toContain("LANGUAGE / COPY");
  expect(displaySrc).toContain("UI language");
  expect(displaySrc).toContain("Auto (follow browser)");
  expect(displaySrc).toContain("Placeholder");
  expect(displaySrc).toContain("Submit button");
  expect(displaySrc).toContain("觀眾端不提供語言切換");
  // 2026-05-19 v5: Limits tab rewritten per batch11-viewer-4tab.jsx.
  // Old static "DEFAULTS / LIMITS" text panel replaced with 2 cards
  // (RATE LIMITS + CONTENT LIMITS) + CURRENT SESSION strip, populated
  // live from /admin/metrics.rate_limit_config.
  expect(displaySrc).toContain("RATE LIMITS");
  expect(displaySrc).toContain("CONTENT LIMITS");
  expect(displaySrc).toContain("速率限制");
  expect(displaySrc).toContain("內容限制");
  expect(displaySrc).toContain('admin-vc-limits-grid');
  expect(displaySrc).toContain('data-vc-rate-fp');
  expect(displaySrc).toContain('data-vc-msg-len');
  expect(adminSrc).toContain('sec-viewer-config-defaults');
  expect(adminSrc).toContain('sec-viewer-config-limits');
  expect(displaySrc).toContain('_makeTabBtn("defaults"');
  expect(displaySrc).toContain('_makeTabBtn("limits"');
  expect(displaySrc).toContain('sec-viewer-config-defaults');
  expect(displaySrc).toContain('sec-viewer-config-limits');
});

test("editable viewer defaults now live under Viewer > Defaults, not Display", () => {
  const staticDir = path.join(__dirname, "..", "..", "server", "static", "js");
  const displaySrc = fs.readFileSync(path.join(staticDir, "admin-display.js"), "utf8");

  expect(displaySrc).toContain('const tab = (document.body.dataset.viewerConfigTab) || "defaults";');
  expect(displaySrc).toContain('page.style.display = (isViewerOwner && tab === "defaults") ? "" : "none";');
  expect(displaySrc).toContain('document.body.dataset.viewerConfigTab = "defaults"');
});

test("viewer theme and language overrides respect admin force mode", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const mainSrc = fs.readFileSync(path.join(rootDir, "server", "static", "js", "main.js"), "utf8");
  const templateSrc = fs.readFileSync(path.join(rootDir, "server", "templates", "index.html"), "utf8");

  expect(mainSrc).toContain('const _isViewerThemeForced = () =>');
  expect(mainSrc).toContain('if (adminMode === "force-dark") return "dark";');
  expect(mainSrc).toContain('if (adminMode === "force-light") return "light";');
  expect(mainSrc.indexOf('if (adminMode === "force-light") return "light";'))
    .toBeLessThan(mainSrc.indexOf('const operator = _readUnifiedMode();'));
  expect(mainSrc).toContain('chip.hidden = forced;');
  expect(mainSrc).toContain('themeRow.hidden = themeForced;');
  expect(mainSrc).toContain('langRow.hidden = langForced;');
  expect(mainSrc).toContain('if (isLangForced()) return;');
  expect(mainSrc).toContain('window.syncViewerOverrideControlVisibility = syncOverrideControlVisibility;');

  expect(templateSrc).toContain('data-viewer-theme-control');
  expect(templateSrc).toContain('data-viewer-mobile-theme-row');
  expect(templateSrc).toContain('data-viewer-mobile-lang-row');
});

test("Viewer entry points use the canonical viewer route instead of legacy viewer-config", () => {
  const staticDir = path.join(__dirname, "..", "..", "server", "static", "js");
  const paletteSrc = fs.readFileSync(path.join(staticDir, "admin-command-palette.js"), "utf8");
  const assetsSrc = fs.readFileSync(path.join(staticDir, "admin-assets.js"), "utf8");
  const tabsSrc = fs.readFileSync(path.join(staticDir, "admin-tabs.js"), "utf8");
  const adminSrc = fs.readFileSync(path.join(staticDir, "admin.js"), "utf8");

  expect(paletteSrc).toContain('viewer:         { title: "觀眾頁"');
  expect(paletteSrc).toContain('label: "觀眾頁主題"');
  expect(paletteSrc).toContain('route: "viewer", tab: "page", section: "sec-viewer-theme"');
  expect(paletteSrc).toContain('label: "表單欄位 Viewer fields"');
  expect(paletteSrc).toContain('route: "viewer", tab: "fields", section: "sec-viewer-config-fields"');
  expect(paletteSrc).toContain('label: "送出預設 Viewer defaults"');
  expect(paletteSrc).toContain('route: "viewer", tab: "defaults", section: "sec-viewer-config-defaults"');
  expect(paletteSrc).toContain('label: "限制 / 文案 Viewer limits"');
  expect(paletteSrc).toContain('route: "viewer", tab: "limits", section: "sec-viewer-config-limits"');
  expect(paletteSrc).toContain('if (item.tab) document.body.dataset.viewerConfigTab = item.tab;');
  expect(paletteSrc).not.toContain('route: "viewer-config"');

  expect(assetsSrc).toContain('route: "viewer"');
  expect(assetsSrc).not.toContain('route: "viewer-config"');

  expect(tabsSrc).toContain('{ slug: "viewer-config", label: "Viewer 設定", en: "VIEWER",     sections: ["sec-viewer-config-tabs", "sec-viewer-config-info", "sec-viewer-theme", "sec-viewer-config-fields", "sec-viewer-config-defaults", "sec-viewer-config-limits"] }');
  expect(tabsSrc).not.toContain('sec-color');
  expect(tabsSrc).not.toContain('sec-opacity');
  expect(tabsSrc).not.toContain('sec-fontsize');
  expect(tabsSrc).not.toContain('sec-speed');
  expect(tabsSrc).not.toContain('sec-fontfamily');
  expect(tabsSrc).not.toContain('sec-layout');

  expect(adminSrc).toContain('appearance: { title: "外觀", kicker: "APPEARANCE · 主題 / Viewer / 字型", sections: ["sec-themes", "sec-viewer-config-tabs", "sec-viewer-config-info", "sec-viewer-theme", "sec-viewer-config-fields", "sec-viewer-config-defaults", "sec-viewer-config-limits", "sec-fonts"] }');
});

test("admin shell cleanup does not reach into replay-controls private timers", () => {
  const staticDir = path.join(__dirname, "..", "..", "server", "static", "js");
  const adminSrc = fs.readFileSync(path.join(staticDir, "admin.js"), "utf8");
  const replaySrc = fs.readFileSync(path.join(staticDir, "admin-replay-controls.js"), "utf8");

  expect(replaySrc).toContain("let _replayPollTimer = null");
  expect(adminSrc).not.toContain("_replayPollTimer");
});

test("admin About server-info values wrap long URLs inside their grid cells", () => {
  const cssPath = path.join(__dirname, "..", "..", "server", "static", "css", "style.css");
  const cssSrc = fs.readFileSync(cssPath, "utf8");

  expect(cssSrc).toContain(".admin-about-oss-list { margin-top: 10px; font-family: var(--font-mono); font-size: 11px; line-height: 1.7; min-width: 0; }");
  expect(cssSrc).toMatch(/\.admin-about-oss-row \.v,\s*\.admin-about-oss-row \.l \{[\s\S]*?overflow-wrap:\s*anywhere;/);
});

test("admin Webhooks uses the implemented toggle endpoint instead of BE placeholder copy", () => {
  const staticDir = path.join(__dirname, "..", "..", "server", "static", "js");
  const webhooksSrc = fs.readFileSync(path.join(staticDir, "admin-webhooks.js"), "utf8");

  expect(webhooksSrc).toContain('csrfFetch("/admin/webhooks/toggle"');
  expect(webhooksSrc).toContain('fetch("/admin/webhooks/events"');
  expect(webhooksSrc).not.toContain("[PLACEHOLDER]");
  expect(webhooksSrc).not.toContain("待 BE：/admin/webhooks/toggle");
  expect(webhooksSrc).not.toContain('const BE_EVENT_KEYS = ["on_danmu", "on_poll_create", "on_poll_end"]');
  expect(webhooksSrc).not.toContain("BE 尚未支援此 event");
});

test("admin Webhooks composes shared admin-ui controls instead of page-local chrome", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const webhooksSrc = fs.readFileSync(path.join(staticDir, "js", "admin-webhooks.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(webhooksSrc).toContain('class="admin-ui-section-head admin-wh-section-head"');
  expect(webhooksSrc).toContain('class="admin-ui-action is-primary admin-wh-add-btn"');
  expect(webhooksSrc).toContain('class="admin-ui-chip-group admin-wh-log-filters"');
  expect(webhooksSrc).toContain('class="admin-ui-chip admin-wh-log-filter is-active"');
  expect(webhooksSrc).toContain('class="admin-ui-list-stack admin-wh-list"');
  expect(webhooksSrc).toContain('class="admin-ui-list-stack is-tight admin-wh-log-list"');
  expect(webhooksSrc).not.toContain('class="chip');

  expect(hudSrc).toContain(".admin-ui-section-head {");
  expect(hudSrc).toContain(".admin-ui-action.is-primary {");
  expect(hudSrc).toContain(".admin-ui-list-stack {");
  expect(hudSrc).toContain(".admin-ui-list-stack.is-tight {");

  expect(cssSrc).not.toContain(".admin-wh-section-head {");
  expect(cssSrc).not.toContain(".admin-wh-add-btn {");
  expect(cssSrc).not.toContain(".admin-wh-log-filters .chip");
  expect(cssSrc).not.toContain(".admin-wh-list {");
  expect(cssSrc).not.toContain(".admin-wh-log-list {");
});

test("admin router hides empty route containers so leaf pages do not keep vertical gaps", () => {
  const staticDir = path.join(__dirname, "..", "..", "server", "static", "js");
  const adminSrc = fs.readFileSync(path.join(staticDir, "admin.js"), "utf8");

  expect(adminSrc).toContain("function syncRouteContainerVisibility()");
  expect(adminSrc).toContain('shell.querySelectorAll(".admin-route-sections").forEach');
  expect(adminSrc).toContain('container.id === "sec-advanced"');
  expect(adminSrc).toContain('container.style.display = hasWanted ? "" : "none";');
  expect(adminSrc).toContain("syncRouteContainerVisibility();");
});

test("admin router re-applies route visibility for late-injected sections without rAF only", () => {
  const staticDir = path.join(__dirname, "..", "..", "server", "static", "js");
  const adminSrc = fs.readFileSync(path.join(staticDir, "admin.js"), "utf8");

  expect(adminSrc).toContain("function scheduleRouteVisibilitySync()");
  expect(adminSrc).toContain('typeof requestAnimationFrame === "function"');
  expect(adminSrc).toContain('document.visibilityState !== "hidden"');
  expect(adminSrc).toContain("setTimeout(run, 0);");
  expect(adminSrc).toContain("scheduleRouteVisibilitySync();");
  expect(adminSrc).toContain("mo.observe(main, { childList: true, subtree: true });\n      scheduleRouteVisibilitySync();");
  expect(adminSrc).not.toContain("requestAnimationFrame(() => {\n          scheduled = false;\n          applySectionVisibility();\n        });");
});

test("admin Audit uses shared admin-ui primitives for the v5 compact surface", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const auditSrc = fs.readFileSync(path.join(staticDir, "js", "admin-audit.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(auditSrc).toContain('class="admin-ui-toolbar admin-audit-toolbar-v5"');
  expect(auditSrc).toContain('class="admin-ui-chip-group admin-audit-chip-group"');
  expect(auditSrc).toContain('class="admin-ui-chip admin-audit-filter-chip');
  expect(auditSrc).toContain('class="admin-ui-scroll-list admin-ui-timeline admin-audit-timeline"');
  expect(auditSrc).toContain('class="admin-ui-timeline-row admin-audit-timeline-row');

  expect(hudSrc).toContain(".admin-ui-toolbar {");
  expect(hudSrc).toContain(".admin-ui-chip {");
  expect(hudSrc).toContain(".admin-ui-scroll-list {");
  expect(hudSrc).toContain(".admin-ui-timeline-row {");
  expect(hudSrc).toContain("overflow-y: auto;");

  expect(cssSrc).not.toContain(".admin-audit-toolbar-v5 {");
  expect(cssSrc).not.toContain(".admin-audit-filter-chip {");
  expect(cssSrc).not.toContain(".admin-audit-timeline {");
  expect(cssSrc).not.toContain(".admin-audit-timeline-row {");
});

test("admin API Tokens composes shared controls instead of page-local widgets", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const tokensSrc = fs.readFileSync(path.join(staticDir, "js", "admin-api-tokens.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(tokensSrc).toContain('class="admin-v2-input admin-at-input"');
  expect(tokensSrc).toContain('class="admin-v2-input admin-at-token-raw"');
  expect(tokensSrc).toContain('class="admin-ui-action admin-at-copy-btn"');
  expect(tokensSrc).toContain('class="admin-ui-action is-primary is-block admin-at-submit-btn"');
  expect(tokensSrc).toContain('class="admin-ui-action admin-at-row-btn"');
  expect(tokensSrc).toContain('class="admin-ui-action is-danger admin-at-row-btn"');
  expect(tokensSrc).toContain('class="admin-ui-option-row admin-at-scope-row"');
  expect(tokensSrc).toContain('class="admin-ui-checkbox admin-at-scope-cb"');
  expect(tokensSrc).toContain('class="admin-ui-choice admin-at-expiry-btn"');
  expect(tokensSrc).toContain('class="admin-ui-notice is-warn admin-at-once-note"');
  expect(tokensSrc).toContain('class="admin-ui-notice is-danger admin-at-form-error"');
  expect(tokensSrc).toContain("admin-ui-pill admin-at-scope-badge");
  expect(tokensSrc).toContain("admin-ui-pill admin-at-badge");

  expect(hudSrc).toContain(".admin-ui-action.is-danger {");
  expect(hudSrc).toContain(".admin-ui-action.is-block {");
  expect(hudSrc).toContain(".admin-ui-option-row {");
  expect(hudSrc).toContain(".admin-ui-choice > span {");
  expect(hudSrc).toContain(".admin-ui-notice {");
  expect(hudSrc).toContain(".admin-ui-pill.is-success");
  expect(hudSrc).toContain(".admin-ui-toolbar > .admin-ui-action");
  expect(hudSrc).not.toContain("  .admin-ui-chip-group,\n  .admin-ui-action {\n    width: 100%;");

  expect(cssSrc).not.toContain(".admin-at-row-btn {");
  expect(cssSrc).not.toContain(".admin-at-copy-btn {");
  expect(cssSrc).not.toContain(".admin-at-submit-btn {");
  expect(cssSrc).not.toContain(".admin-at-input,");
  expect(cssSrc).not.toContain(".admin-at-scope-badge,");
  expect(cssSrc).not.toContain(".admin-at-scope-row {");
  expect(cssSrc).not.toContain(".admin-at-scope-cb {");
  expect(cssSrc).not.toContain(".admin-at-expiry-btn > span");
  expect(cssSrc).not.toContain(".admin-at-once-note,");
});

test("admin Backup exposes implemented history export formats", () => {
  const staticDir = path.join(__dirname, "..", "..", "server", "static", "js");
  const backupSrc = fs.readFileSync(path.join(staticDir, "admin-backup.js"), "utf8");

  expect(backupSrc).toContain('format=" + encodeURIComponent(format)');
  expect(backupSrc).toContain('<option value="csv">CSV');
  expect(backupSrc).toContain('<option value="srt">SRT');
  expect(backupSrc).not.toContain('value="csv" disabled');
  expect(backupSrc).not.toContain('value="srt" disabled');
  expect(backupSrc).not.toContain("CSV / SRT history export formats  (backend returns JSON only)");
});
