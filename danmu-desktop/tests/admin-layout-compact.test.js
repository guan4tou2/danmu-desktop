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

test("admin About actions compose shared action controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const aboutSrc = fs.readFileSync(path.join(staticDir, "js", "admin-about.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(aboutSrc).toContain('class="admin-ui-action is-primary admin-about-btn"');
  expect(aboutSrc).toContain('class="admin-ui-action admin-about-btn"');
  expect(aboutSrc).not.toContain("admin-about-btn--accent");

  expect(hudSrc).toContain(".admin-ui-action {");
  expect(hudSrc).toContain(".admin-ui-action.is-primary {");
  expect(cssSrc).toContain(".admin-about-actions > .admin-ui-action {");
  expect(cssSrc).not.toContain(".admin-about-btn {");
  expect(cssSrc).not.toContain(".admin-about-btn:hover");
  expect(cssSrc).not.toContain(".admin-about-btn--accent");
});

test("admin Audience composes shared toolbar, chips, pills, and actions", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const audienceSrc = fs.readFileSync(path.join(staticDir, "js", "admin-audience.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(audienceSrc).toContain('class="admin-ui-toolbar admin-aud-toolbar"');
  expect(audienceSrc).toContain('class="admin-ui-summary admin-aud-summary"');
  expect(audienceSrc).toContain('class="admin-ui-chip-group admin-aud-filters"');
  expect(audienceSrc).toContain('class="admin-ui-action admin-aud-refresh"');
  expect(audienceSrc).toContain('class="admin-ui-chip admin-aud-filter ${_state.filter === "all" ? "is-active" : ""}"');
  expect(audienceSrc).toContain('class="admin-ui-chip admin-aud-filter ${_state.filter === "flagged" ? "is-active" : ""}"');
  expect(audienceSrc).toContain('class="admin-ui-pill admin-aud-state-pill ${_stateClassFor(stateKey)}"');
  expect(audienceSrc).toContain('class="admin-ui-action is-danger admin-aud-action"');
  expect(audienceSrc).toContain("admin-ui-pill admin-aud-risk-pill ' + _riskClassFor(risk.level) + '");
  expect(audienceSrc).toContain('class="admin-ui-action admin-aud-detail-close"');
  expect(audienceSrc).toContain('class="admin-ui-action is-danger is-block admin-aud-detail-action"');
  expect(audienceSrc).toContain('class="admin-ui-action is-warn is-block admin-aud-detail-action"');
  expect(audienceSrc).toContain('class="admin-ui-action is-block admin-aud-detail-action"');
  expect(audienceSrc).not.toContain('class="chip');
  expect(audienceSrc).not.toContain('class="primary"');
  expect(audienceSrc).not.toContain('class="warn"');
  expect(audienceSrc).not.toContain('class="close"');

  expect(hudSrc).toContain(".admin-ui-toolbar {");
  expect(hudSrc).toContain(".admin-ui-chip {");
  expect(hudSrc).toContain(".admin-ui-pill {");
  expect(hudSrc).toContain(".admin-ui-action.is-danger {");
  expect(hudSrc).toContain(".admin-ui-action.is-warn {");
  expect(hudSrc).toContain(".admin-ui-action.is-block {");

  expect(cssSrc).not.toContain(".admin-aud-filters .chip");
  expect(cssSrc).not.toContain(".admin-aud-refresh {");
  expect(cssSrc).not.toContain(".admin-aud-refresh:hover");
  expect(cssSrc).not.toContain(".admin-aud-row .col-status .chip");
  expect(cssSrc).not.toContain(".admin-aud-action {");
  expect(cssSrc).not.toContain(".admin-aud-action:hover");
  expect(cssSrc).not.toContain(".admin-aud-detail-head .risk");
  expect(cssSrc).not.toContain(".admin-aud-detail-head .close");
  expect(cssSrc).not.toContain(".admin-aud-detail-actions button {");
  expect(cssSrc).not.toContain(".admin-aud-detail-actions button.primary");
  expect(cssSrc).not.toContain(".admin-aud-detail-actions button.warn");
});

test("admin Notifications composes shared filters, toolbar, pills, and actions", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const notificationsSrc = fs.readFileSync(path.join(staticDir, "js", "admin-notifications.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(notificationsSrc).toContain('class="admin-ui-chip-group admin-notif-tabs"');
  expect(notificationsSrc).toContain('class="admin-ui-chip admin-notif-tab is-active"');
  expect(notificationsSrc).toContain('class="admin-ui-chip-group admin-notif-sources"');
  expect(notificationsSrc).toContain('class="admin-ui-chip admin-notif-src is-active"');
  expect(notificationsSrc).toContain('class="admin-ui-chip admin-notif-src admin-notif-src-placeholder admin-be-placeholder-control"');
  expect(notificationsSrc).toContain('class="admin-ui-toolbar admin-notif-toolbar"');
  expect(notificationsSrc).toContain('class="admin-ui-summary admin-notif-summary"');
  expect(notificationsSrc).toContain('class="admin-ui-chip-group admin-notif-actions"');
  expect(notificationsSrc).toContain('class="admin-ui-action admin-notif-action"');
  expect(notificationsSrc).toContain('class="admin-ui-pill admin-notif-sev-pill ${_sevClassFor(it.sev)}"');
  expect(notificationsSrc).toContain('class="admin-ui-action admin-notif-row-action ${starred ? "is-warn is-on" : ""}"');
  expect(notificationsSrc).toContain('class="admin-ui-action admin-notif-row-action"');
  expect(notificationsSrc).toContain('class="admin-ui-action admin-notif-detail-close"');
  expect(notificationsSrc).toContain('class="admin-ui-pill admin-notif-detail-sev ${_sevClassFor(it.sev)}"');
  expect(notificationsSrc).toContain('class="admin-ui-action admin-notif-detail-action"');

  expect(hudSrc).toContain(".admin-ui-toolbar {");
  expect(hudSrc).toContain(".admin-ui-chip-group {");
  expect(hudSrc).toContain(".admin-ui-chip {");
  expect(hudSrc).toContain(".admin-ui-pill {");
  expect(hudSrc).toContain(".admin-ui-action {");
  expect(hudSrc).toContain(".admin-ui-action.is-warn {");

  expect(cssSrc).not.toContain(".admin-notif-tab, .admin-notif-src {");
  expect(cssSrc).not.toContain(".admin-notif-tab .cnt, .admin-notif-src .cnt");
  expect(cssSrc).not.toContain(".admin-notif-tab:hover, .admin-notif-src:hover");
  expect(cssSrc).not.toContain(".admin-notif-tab.is-active, .admin-notif-src.is-active");
  expect(cssSrc).not.toContain(".admin-notif-action {");
  expect(cssSrc).not.toContain(".admin-notif-action:hover");
  expect(cssSrc).not.toContain(".admin-notif-item .sev {");
  expect(cssSrc).not.toContain(".admin-notif-item .actions button {");
  expect(cssSrc).not.toContain(".admin-notif-item .actions button:hover");
  expect(cssSrc).not.toContain(".admin-notif-detail-close {");
  expect(cssSrc).not.toContain(".admin-notif-detail-close:hover");
  expect(cssSrc).not.toContain(".admin-notif-detail-actions button {");
  expect(cssSrc).not.toContain(".admin-notif-detail-actions button:hover");
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
  expect(webhooksSrc).toContain('class="admin-ui-action is-primary admin-wh-form-action"');
  expect(webhooksSrc).toContain('class="admin-ui-action admin-wh-form-action"');
  expect(webhooksSrc).toContain('class="admin-ui-chip-group admin-wh-log-filters"');
  expect(webhooksSrc).toContain('class="admin-ui-chip admin-wh-log-filter is-active"');
  expect(webhooksSrc).toContain('class="admin-ui-list-stack admin-wh-list"');
  expect(webhooksSrc).toContain('class="admin-ui-list-stack is-tight admin-wh-log-list"');
  expect(webhooksSrc).toContain('class="admin-ui-pill admin-wh-evt-chip"');
  expect(webhooksSrc).toContain('class="admin-ui-pill admin-wh-status-pill ${statusClass}"');
  expect(webhooksSrc).toContain('class="admin-ui-action admin-wh-card-btn"');
  expect(webhooksSrc).toContain('class="admin-ui-action is-primary admin-wh-card-btn"');
  expect(webhooksSrc).toContain('class="admin-ui-action admin-wh-detail-close"');
  expect(webhooksSrc).toContain('class="admin-ui-chip admin-wh-detail-evt ');
  expect(webhooksSrc).toContain('class="admin-ui-action is-primary admin-wh-detail-action"');
  expect(webhooksSrc).toContain('class="admin-ui-action is-warn admin-wh-detail-action"');
  expect(webhooksSrc).toContain('class="admin-ui-action is-danger admin-wh-detail-action"');
  expect(webhooksSrc).not.toContain('class="chip');
  expect(webhooksSrc).not.toContain('class="admin-poll-btn');

  expect(hudSrc).toContain(".admin-ui-section-head {");
  expect(hudSrc).toContain(".admin-ui-action.is-primary {");
  expect(hudSrc).toContain(".admin-ui-action.is-warn {");
  expect(hudSrc).toContain(".admin-ui-action.is-danger {");
  expect(hudSrc).toContain(".admin-ui-chip {");
  expect(hudSrc).toContain(".admin-ui-pill {");
  expect(hudSrc).toContain(".admin-ui-list-stack {");
  expect(hudSrc).toContain(".admin-ui-list-stack.is-tight {");

  expect(cssSrc).not.toContain(".admin-wh-section-head {");
  expect(cssSrc).not.toContain(".admin-wh-add-btn {");
  expect(cssSrc).not.toContain(".admin-wh-log-filters .chip");
  expect(cssSrc).not.toContain(".admin-wh-list {");
  expect(cssSrc).not.toContain(".admin-wh-log-list {");
  expect(cssSrc).not.toContain(".admin-wh-card-head .status");
  expect(cssSrc).not.toContain(".admin-wh-evt-chip {");
  expect(cssSrc).not.toContain(".admin-wh-card-btn {");
  expect(cssSrc).not.toContain(".admin-wh-card-btn:hover");
  expect(cssSrc).not.toContain(".admin-wh-card-btn.is-primary");
  expect(cssSrc).not.toContain(".admin-wh-detail-head .close");
  expect(cssSrc).not.toContain(".admin-wh-detail-evt {");
  expect(cssSrc).not.toContain(".admin-wh-detail-evt.is-on {");
  expect(cssSrc).not.toContain(".admin-wh-detail-actions button");
  expect(cssSrc).not.toContain(".admin-wh-detail-actions button.primary");
  expect(cssSrc).not.toContain(".admin-wh-detail-actions button.warn");
  expect(cssSrc).not.toContain(".admin-wh-detail-actions button.danger");
});

test("admin Security actions compose shared admin-ui controls instead of page-local chrome", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const securitySrc = fs.readFileSync(path.join(staticDir, "js", "admin-security.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(securitySrc).toContain('class="admin-ui-action is-primary admin-sec-action"');
  expect(securitySrc).toContain('id="sec2-wsa-reveal" class="admin-ui-action admin-sec-token-action"');
  expect(securitySrc).toContain('id="sec2-wsa-copy" class="admin-ui-action admin-sec-token-action"');
  expect(securitySrc).toContain('id="sec2-wsa-rotate" class="admin-ui-action is-warn admin-sec-token-action"');
  expect(securitySrc).toContain('id="sec2-wsa-save" class="admin-ui-action is-primary admin-sec-action admin-sec-action--end"');
  expect(securitySrc).toContain('id="sec2-ip-save" class="admin-ui-action is-primary admin-sec-action admin-sec-action--end"');
  expect(securitySrc).toContain('id="sec2-cors-save" class="admin-ui-action is-primary admin-sec-action admin-sec-action--end"');
  expect(securitySrc).toContain('href="#/audit" class="admin-ui-action admin-sec-card__link"');
  expect(securitySrc).toContain('class="admin-ui-action is-danger admin-sec-danger" data-sec-danger="revoke-tokens"');
  expect(securitySrc).toContain('class="admin-ui-action is-danger admin-sec-danger" data-sec-danger="revoke-firetoken"');
  expect(securitySrc).toContain('class="admin-ui-action is-warn admin-sec-danger" data-sec-danger="reset-ws"');
  expect(securitySrc).not.toContain('class="admin-poll-btn');
  expect(securitySrc).not.toContain('id="sec2-wsa-reveal" class="admin-v2-chip"');
  expect(securitySrc).not.toContain('id="sec2-wsa-copy" class="admin-v2-chip"');
  expect(securitySrc).not.toContain('id="sec2-wsa-rotate" class="admin-v2-chip is-warn"');
  expect(securitySrc).not.toContain('class="admin-sec-danger is-amber"');

  expect(hudSrc).toContain(".admin-ui-action {");
  expect(hudSrc).toContain(".admin-ui-action.is-primary {");
  expect(hudSrc).toContain(".admin-ui-action.is-warn {");
  expect(hudSrc).toContain(".admin-ui-action.is-danger {");

  expect(cssSrc).toContain(".admin-sec-action--end {");
  expect(cssSrc).not.toContain(".admin-sec-card__link {");
  expect(cssSrc).not.toContain(".admin-sec-card__link:hover");
  expect(cssSrc).not.toContain(".admin-sec-danger {");
  expect(cssSrc).not.toContain(".admin-sec-danger.is-amber");
  expect(cssSrc).not.toContain(".admin-sec-danger:hover");
});

test("admin Rate Limits actions compose shared admin-ui controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const ratelimitSrc = fs.readFileSync(path.join(staticDir, "js", "admin-ratelimit.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");

  expect(ratelimitSrc).toContain('class="admin-ui-action is-primary admin-rl-action" data-rl-action="save"');
  expect(ratelimitSrc).toContain('class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest"');
  expect(ratelimitSrc).toContain('class="admin-ui-action admin-rl-footer-action" data-rl-action="reset"');
  expect(ratelimitSrc).toContain('class="admin-ui-action is-primary admin-rl-footer-action" data-rl-action="export"');
  expect(ratelimitSrc).not.toContain('class="admin-poll-btn');

  expect(hudSrc).toContain(".admin-ui-action {");
  expect(hudSrc).toContain(".admin-ui-action.is-primary {");
});

test("admin Backup actions compose shared admin-ui controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const backupSrc = fs.readFileSync(path.join(staticDir, "js", "admin-backup.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");

  expect(backupSrc).toContain('id="bk2-hist-download" class="admin-ui-action is-primary admin-bk-action"');
  expect(backupSrc).toContain('id="bk2-settings-download" class="admin-ui-action is-primary admin-bk-action"');
  expect(backupSrc).toContain('id="bk2-pack-export" class="admin-ui-action is-primary admin-bk-action"');
  expect(backupSrc).toContain('id="bk2-settings-dryrun" class="admin-ui-action admin-bk-action"');
  expect(backupSrc).toContain('class="admin-ui-action admin-bk-action" disabled title="即將支援 (需後端 endpoint)"');
  expect(backupSrc).toContain('id="bk2-pack-dryrun" class="admin-ui-action admin-bk-action"');
  expect(backupSrc).toContain('id="bk2-pack-apply" class="admin-ui-action is-danger admin-bk-action" disabled');
  expect(backupSrc).toContain('id="bk2-clear-history" class="admin-ui-action is-danger admin-bk-action"');
  expect(backupSrc).toContain('id="bk2-end-session" class="admin-ui-action is-danger admin-bk-action"');
  expect(backupSrc).toContain('id="bk2-factory-reset" class="admin-ui-action is-danger admin-bk-action" disabled');
  expect(backupSrc).not.toContain('class="admin-poll-btn');

  expect(hudSrc).toContain(".admin-ui-action {");
  expect(hudSrc).toContain(".admin-ui-action.is-primary {");
  expect(hudSrc).toContain(".admin-ui-action.is-danger {");
});

test("admin Viewer Theme actions compose shared admin-ui controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const viewerThemeSrc = fs.readFileSync(path.join(staticDir, "js", "admin-viewer-theme.js"), "utf8");

  expect(viewerThemeSrc).toContain('class="admin-ui-action admin-vt-reset" data-vt-action="reset"');
  expect(viewerThemeSrc).not.toContain('class="admin-poll-btn');
});

test("admin Effects modal actions compose shared admin-ui controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const effectsSrc = fs.readFileSync(path.join(staticDir, "js", "admin-effects-mgmt.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");

  expect(effectsSrc).toContain('id="effectPreviewRefreshBtn" class="admin-ui-action admin-fx-preview-refresh"');
  expect(effectsSrc).toContain('id="effectEditModalCancel" class="admin-ui-action admin-fx-modal-action"');
  expect(effectsSrc).toContain('id="effectEditModalSave" class="admin-ui-action is-primary admin-fx-modal-action"');
  expect(effectsSrc).not.toContain('class="admin-poll-btn');

  expect(hudSrc).toContain(".admin-ui-action {");
  expect(hudSrc).toContain(".admin-ui-action.is-primary {");
});

test("admin Fire Token and Extensions token actions compose shared controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const firetokenSrc = fs.readFileSync(path.join(staticDir, "js", "admin-firetoken.js"), "utf8");
  const extensionsSrc = fs.readFileSync(path.join(staticDir, "js", "admin-extensions.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(firetokenSrc).toContain('class="admin-ui-action admin-ft-action" data-ft-action="copy" disabled');
  expect(firetokenSrc).toContain('class="admin-ui-action is-warn admin-ft-action" data-ft-action="regen"');
  expect(firetokenSrc).toContain('class="admin-ui-action is-danger admin-ft-action" data-ft-action="revoke" disabled');
  expect(firetokenSrc).not.toContain("admin-ft-action-btn");

  expect(extensionsSrc).toContain('class="admin-ui-action admin-ext-token-action" data-fire-token-action="copy" disabled');
  expect(extensionsSrc).toContain('class="admin-ui-action admin-ext-token-action" data-fire-token-action="regen"');
  expect(extensionsSrc).toContain('class="admin-ui-action is-danger admin-ext-token-action" data-fire-token-action="revoke" disabled');
  expect(extensionsSrc).not.toContain("admin-ext-token-btn");

  expect(hudSrc).toContain(".admin-ui-action.is-warn {");
  expect(hudSrc).toContain(".admin-ui-action.is-danger {");
  expect(cssSrc).toContain(".admin-ft-token-display > .admin-ui-action,");
  expect(cssSrc).not.toContain(".admin-ft-action-btn {");
  expect(cssSrc).not.toContain(".admin-ft-action-btn:hover");
  expect(cssSrc).not.toContain(".admin-ft-action-btn--warn");
  expect(cssSrc).not.toContain(".admin-ft-action-btn--danger");
  expect(cssSrc).not.toContain(".admin-ext-token-btn {");
  expect(cssSrc).not.toContain(".admin-ext-token-btn:hover");
  expect(cssSrc).not.toContain(".admin-ext-token-btn--danger");
});

test("admin Fingerprints toolbar composes shared actions", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const fingerprintsSrc = fs.readFileSync(path.join(staticDir, "js", "admin-fingerprints.js"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(fingerprintsSrc).toContain('id="adminFingerprintRefreshBtn" class="admin-ui-action admin-fp-toolbar-action"');
  expect(fingerprintsSrc).toContain('id="adminFingerprintResetBtn" class="admin-ui-action is-danger admin-fp-toolbar-action"');
  expect(fingerprintsSrc).not.toContain("admin-fp-toolbar-btn");
  expect(cssSrc).not.toContain(".admin-fp-toolbar-btn");
});

test("admin Search range selector composes shared chips", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const searchSrc = fs.readFileSync(path.join(staticDir, "js", "admin-search.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");

  expect(searchSrc).toContain('class="admin-ui-chip admin-search-range-chip');
  expect(searchSrc).toContain('btn.classList.contains("admin-search-range-chip")');
  expect(searchSrc).toContain('page.querySelectorAll(".admin-search-range-chip")');
  expect(searchSrc).not.toContain("admin-search-range-btn");
  expect(hudSrc).toContain(".admin-ui-chip {");
});

test("admin Sessions detail links compose shared actions", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const sessionsSrc = fs.readFileSync(path.join(staticDir, "js", "admin-sessions.js"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(sessionsSrc).toContain('class="admin-ui-action admin-sessions-detail-action" data-session-id="');
  expect(sessionsSrc).toContain('e.target.closest(".admin-sessions-detail-action")');
  expect(sessionsSrc).not.toContain("admin-sessions-detail-btn");
  expect(cssSrc).not.toContain(".admin-sessions-detail-btn");
});

test("admin Setup Wizard footer composes shared actions", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const setupSrc = fs.readFileSync(path.join(staticDir, "js", "admin-setup-wizard.js"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(setupSrc).toContain('class="admin-ui-action admin-setup-foot-action" data-setup-action="close"');
  expect(setupSrc).toContain('class="admin-ui-action admin-setup-foot-action" data-setup-action="prev"');
  expect(setupSrc).toContain('class="admin-ui-action is-primary admin-setup-foot-action" data-setup-action="next"');
  expect(setupSrc).not.toContain("admin-setup-foot-btn");
  expect(cssSrc).not.toContain(".admin-setup-foot-btn");
});

test("admin Theme pack actions compose shared controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const themesSrc = fs.readFileSync(path.join(staticDir, "js", "admin-themes.js"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(themesSrc).toContain('class="admin-ui-chip admin-theme-pack-status is-active"');
  expect(themesSrc).toContain('class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn"');
  expect(themesSrc).not.toContain("theme-pack-btn");
  expect(cssSrc).not.toContain(".theme-pack-btn");
});

test("admin Session Detail controls compose shared primitives", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const detailSrc = fs.readFileSync(path.join(staticDir, "js", "admin-session-detail.js"), "utf8");

  expect(detailSrc).toContain('class="admin-ui-action admin-sd-retry-action" data-sd-action="retry"');
  expect(detailSrc).toContain('class="admin-ui-chip-group admin-sd-speed-group"');
  expect(detailSrc).toContain('class="admin-ui-chip admin-sd-speed-chip" data-speed="0.5"');
  expect(detailSrc).toContain('class="admin-ui-chip admin-sd-speed-chip is-active" data-speed="1"');
  expect(detailSrc).toContain('class="admin-ui-action is-primary admin-sd-action" data-sd-action="export-json"');
  expect(detailSrc).toContain('class="admin-ui-action admin-sd-action" data-sd-action="go-history"');
  expect(detailSrc).toContain('document.querySelectorAll(".admin-sd-speed-chip")');
  expect(detailSrc).toContain('e.target.closest(".admin-sd-speed-chip")');
  expect(detailSrc).not.toContain("admin-sd-btn");
  expect(detailSrc).not.toContain("admin-sd-speed-btn");
  expect(detailSrc).not.toContain("admin-sd-action-btn");
});

test("admin Dashboard widget actions compose shared chips", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const dashboardSrc = fs.readFileSync(path.join(staticDir, "js", "admin-dashboard.js"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(dashboardSrc).toContain('class="admin-ui-chip admin-dash-widget-action${running ? " is-active" : ""}" data-widget-action="toggle"');
  expect(dashboardSrc).toContain('class="admin-ui-chip admin-dash-widget-action" data-widget-action="config"');
  expect(dashboardSrc).not.toContain('class="chip" data-widget-action');
  expect(dashboardSrc).not.toContain('class="chip is-muted"');
  expect(cssSrc).not.toContain(".admin-dash-widget-tile .actions .chip");
});

test("admin Widgets page actions compose shared controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const widgetsSrc = fs.readFileSync(path.join(staticDir, "js", "admin-widgets.js"), "utf8");

  expect(widgetsSrc).toContain('id="widget-add-scoreboard" type="button" class="admin-ui-action is-primary admin-widget-toolbar-action"');
  expect(widgetsSrc).toContain('id="widget-add-ticker" type="button" class="admin-ui-action is-primary admin-widget-toolbar-action"');
  expect(widgetsSrc).toContain('id="widget-add-label" type="button" class="admin-ui-action is-primary admin-widget-toolbar-action"');
  expect(widgetsSrc).toContain('id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action"');
  expect(widgetsSrc).toContain('class="admin-ui-action admin-widget-toolbar-action" data-ow-copy');
  expect(widgetsSrc).toContain('toggleBtn.className = "admin-ui-action admin-widget-card-action";');
  expect(widgetsSrc).toContain('delBtn.className = "admin-ui-action is-danger admin-widget-card-action";');
  expect(widgetsSrc).not.toContain("admin-poll-btn");
});

test("admin Sounds page actions compose shared controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const soundsSrc = fs.readFileSync(path.join(staticDir, "js", "admin-sounds.js"), "utf8");

  expect(soundsSrc).toContain('class="admin-ui-chip is-active sound-play-btn"');
  expect(soundsSrc).toContain('class="admin-ui-chip is-danger sound-delete-btn"');
  expect(soundsSrc).toContain('class="admin-ui-chip is-danger sound-rule-del-btn"');
  expect(soundsSrc).toContain('id="soundUploadBtn" type="button" class="admin-ui-action is-primary admin-sound-action"');
  expect(soundsSrc).toContain('id="addRuleBtn" type="button" class="admin-ui-action is-primary admin-sound-action"');
  expect(soundsSrc).not.toContain("admin-poll-btn");
  expect(soundsSrc).not.toContain("admin-v2-chip");
});

test("admin Stickers page actions compose shared controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const stickersSrc = fs.readFileSync(path.join(staticDir, "js", "admin-stickers.js"), "utf8");

  expect(stickersSrc).toContain('id="stickerUploadBtn" type="button" class="admin-ui-action is-primary admin-sticker-action"');
  expect(stickersSrc).toContain('class="admin-ui-action is-primary admin-sticker-pack-add"');
  expect(stickersSrc).toContain('class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename"');
  expect(stickersSrc).toContain('class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete"');
  expect(stickersSrc).toContain('class="admin-ui-chip sticker-copy-btn"');
  expect(stickersSrc).toContain('class="admin-ui-chip is-danger sticker-delete-btn"');
  expect(stickersSrc).not.toContain("admin-poll-btn");
  expect(stickersSrc).not.toContain("admin-v2-chip");
});

test("admin Filters and Fonts toolbar actions compose shared controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const filtersSrc = fs.readFileSync(path.join(staticDir, "js", "admin-filters.js"), "utf8");
  const fontsSrc = fs.readFileSync(path.join(staticDir, "js", "admin-fonts.js"), "utf8");

  expect(filtersSrc).toContain('id="filterAddBtn" type="button" class="admin-ui-action is-primary admin-filter-action"');
  expect(filtersSrc).toContain('id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action"');
  expect(fontsSrc).toContain('for="adminFontFileInput" class="admin-ui-action admin-font-upload-action"');
  expect(filtersSrc).not.toContain("hud-toolbar-action");
  expect(fontsSrc).not.toContain("hud-toolbar-action");
});

test("admin Live Feed row and bulk actions compose shared controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const liveFeedSrc = fs.readFileSync(path.join(rootDir, "server", "static", "js", "admin-live-feed.js"), "utf8");

  expect(liveFeedSrc).toContain('badge.className = "admin-ui-chip admin-live-feed-tag";');
  expect(liveFeedSrc).toContain('blockKwBtn.className = "admin-ui-chip is-danger admin-live-feed-action";');
  expect(liveFeedSrc).toContain('blockFpBtn.className = "admin-ui-chip is-warn admin-live-feed-action";');
  expect(liveFeedSrc).toContain('id="liveFeedBulkBlock" class="admin-ui-action is-primary admin-live-feed-bulk-action"');
  expect(liveFeedSrc).toContain('id="liveFeedBulkClear" class="admin-ui-action admin-live-feed-bulk-action"');
  expect(liveFeedSrc).not.toContain("admin-v2-chip");
  expect(liveFeedSrc).not.toContain("admin-poll-btn");
});

test("admin Scheduler, Replay, and Sessions chips compose shared controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static", "js");
  const schedulerSrc = fs.readFileSync(path.join(staticDir, "admin-scheduler.js"), "utf8");
  const replaySrc = fs.readFileSync(path.join(staticDir, "admin-replay.js"), "utf8");
  const sessionsSrc = fs.readFileSync(path.join(staticDir, "admin-sessions.js"), "utf8");

  expect(schedulerSrc).toContain('class="admin-ui-chip is-danger scheduler-remove-msg"');
  expect(schedulerSrc).toContain('class="admin-ui-chip scheduler-job-toggle ${isPaused ? "is-active" : "is-warn"}"');
  expect(schedulerSrc).toContain('class="admin-ui-chip is-danger scheduler-job-cancel"');
  expect(replaySrc).toContain('id="replayV2Refresh" class="admin-ui-action admin-replay-toolbar-action"');
  expect(replaySrc).toContain('id="replayV2ExportJson" class="admin-ui-action admin-replay-toolbar-action"');
  expect(replaySrc).toContain('class="admin-ui-chip is-active admin-replay-refire-action"');
  expect(sessionsSrc).toContain('class="admin-ui-chip is-active admin-sessions-live-badge"');
  expect(schedulerSrc).not.toContain("admin-v2-chip");
  expect(replaySrc).not.toContain("admin-v2-chip");
  expect(sessionsSrc).not.toContain("admin-v2-chip");
});

test("admin Security and Search status controls compose shared primitives", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static", "js");
  const securitySrc = fs.readFileSync(path.join(staticDir, "admin-security.js"), "utf8");
  const searchSrc = fs.readFileSync(path.join(staticDir, "admin-search.js"), "utf8");

  expect(securitySrc).toContain('id="sec2-wsa-status" class="admin-ui-chip admin-sec-status-chip"');
  expect(securitySrc).toContain('id="sec2-ip-status-chip" class="admin-ui-chip admin-sec-status-chip"');
  expect(securitySrc).toContain('statusEl.className = "admin-ui-chip admin-sec-status-chip " + (data.require_token ? "is-active" : "");');
  expect(securitySrc).toContain('statusEl.className = "admin-ui-chip is-danger admin-sec-status-chip";');
  expect(securitySrc).toContain('ipChip.className = "admin-ui-chip admin-sec-status-chip " + (ipEnabled ? "is-active" : "is-warn");');
  expect(searchSrc).toContain('class="admin-ui-action admin-search-export-btn" hidden');
  expect(securitySrc).not.toContain("admin-v2-chip");
  expect(searchSrc).not.toContain("admin-v2-chip");
});

test("admin Poll Builder session and editor actions compose shared controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const pollBuilderSrc = fs.readFileSync(path.join(rootDir, "server", "static", "js", "admin-poll-builder.js"), "utf8");

  expect(pollBuilderSrc).toContain('class="admin-ui-action is-primary admin-poll-session-action" data-poll-session-action="start"');
  expect(pollBuilderSrc).toContain('class="admin-ui-action admin-poll-session-action" data-poll-session-action="advance"');
  expect(pollBuilderSrc).toContain('class="admin-ui-action is-danger admin-poll-session-action" data-poll-session-action="end"');
  expect(pollBuilderSrc).toContain('class="admin-ui-action is-danger admin-poll-editor-action" data-ed-action="remove-q-image"');
  expect(pollBuilderSrc).toContain('class="admin-ui-action admin-poll-editor-action" data-ed-action="upload-q-image"');
  expect(pollBuilderSrc).toContain('class="admin-ui-action is-danger admin-poll-editor-action" data-ed-action="remove-q"');
  expect(pollBuilderSrc).toContain('class="admin-ui-action is-primary admin-poll-editor-action" data-ed-action="start-this"');
  expect(pollBuilderSrc).toContain('class="admin-ui-chip admin-poll-result-state"');
  expect(pollBuilderSrc).not.toContain("admin-poll-btn");
  expect(pollBuilderSrc).not.toContain('class="chip"');
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
  expect(auditSrc).toContain('class="admin-ui-action admin-audit-action"');
  expect(auditSrc).toContain('class="admin-ui-summary admin-audit-summary"');
  expect(auditSrc).toContain('"admin-ui-pill admin-audit-row-pill is-admin"');
  expect(auditSrc).toContain('"admin-ui-pill admin-audit-row-pill"');
  expect(auditSrc).toContain('class="admin-ui-code admin-audit-meta-extra"');
  expect(auditSrc).not.toContain("admin-audit-src");
  expect(auditSrc).not.toContain("admin-audit-table");
  expect(auditSrc).not.toContain("admin-audit-src-chip");
  expect(auditSrc).not.toContain("admin-audit-hash-chip");
  expect(auditSrc).not.toContain("admin-audit-actor-chip");

  expect(hudSrc).toContain(".admin-ui-toolbar {");
  expect(hudSrc).toContain(".admin-ui-chip {");
  expect(hudSrc).toContain(".admin-ui-summary {");
  expect(hudSrc).toContain(".admin-ui-action {");
  expect(hudSrc).toContain(".admin-ui-pill {");
  expect(hudSrc).toContain(".admin-ui-code {");
  expect(hudSrc).toContain(".admin-ui-scroll-list {");
  expect(hudSrc).toContain(".admin-ui-timeline-row {");
  expect(hudSrc).toContain("overflow-y: auto;");

  expect(cssSrc).not.toContain(".admin-audit-grid {");
  expect(cssSrc).not.toContain(".admin-audit-filters {");
  expect(cssSrc).not.toContain(".admin-audit-source-list {");
  expect(cssSrc).not.toContain(".admin-audit-src {");
  expect(cssSrc).not.toContain(".admin-audit-src .cnt");
  expect(cssSrc).not.toContain(".admin-audit-src:hover");
  expect(cssSrc).not.toContain(".admin-audit-src.is-active");
  expect(cssSrc).not.toContain(".admin-audit-tip {");
  expect(cssSrc).not.toContain(".admin-audit-main {");
  expect(cssSrc).not.toContain(".admin-audit-toolbar {");
  expect(cssSrc).not.toContain(".admin-audit-toolbar-v5 {");
  expect(cssSrc).not.toContain(".admin-audit-summary {");
  expect(cssSrc).not.toContain(".admin-audit-actions {");
  expect(cssSrc).not.toContain(".admin-audit-action {");
  expect(cssSrc).not.toContain(".admin-audit-action:hover");
  expect(cssSrc).not.toContain(".admin-audit-filter-chip {");
  expect(cssSrc).not.toContain(".admin-audit-timeline {");
  expect(cssSrc).not.toContain(".admin-audit-timeline-row {");
  expect(cssSrc).not.toContain(".admin-audit-table-wrap {");
  expect(cssSrc).not.toContain(".admin-audit-table {");
  expect(cssSrc).not.toContain(".admin-audit-row:hover");
  expect(cssSrc).not.toContain(".admin-audit-src-chip {");
  expect(cssSrc).not.toContain(".admin-audit-loading,");
  expect(cssSrc).not.toContain(".admin-audit-hash-chip {");
  expect(cssSrc).not.toContain(".admin-audit-retain {");
  expect(cssSrc).not.toContain(".admin-audit-actor-chip {");
  expect(cssSrc).not.toContain(".admin-audit-actor-av {");
});

test("admin Events toolbar composes shared chips, status, and actions", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const eventsSrc = fs.readFileSync(path.join(staticDir, "js", "admin-events-log.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(eventsSrc).toContain('class="admin-ui-toolbar admin-ev-v4__filterbar"');
  expect(eventsSrc).toContain('class="admin-ui-chip-group admin-ev-v4__sev-chips"');
  expect(eventsSrc).toContain('class="admin-ui-chip admin-ev-v4__sev-chip is-active"');
  expect(eventsSrc).toContain('class="admin-ui-chip admin-ev-v4__sev-chip" data-severity="warn"');
  expect(eventsSrc).toContain('class="admin-ui-chip admin-ev-v4__sev-chip" data-severity="danger"');
  expect(eventsSrc).toContain('class="admin-ui-chip-group admin-ev-v4__cat-chips"');
  expect(eventsSrc).toContain('class="admin-ui-chip admin-ev-v4__cat-chip is-active"');
  expect(eventsSrc).toContain('class="admin-ui-spacer admin-ev-v4__spacer"');
  expect(eventsSrc).toContain('class="admin-ui-dot is-success admin-ev-v4__live-dot"');
  expect(eventsSrc).toContain('class="admin-ui-summary admin-ev-v4__live-label"');
  expect(eventsSrc).toContain('class="admin-ui-summary admin-ev-v4__count"');
  expect(eventsSrc).toContain('class="admin-ui-action admin-ev-v4__refresh"');

  expect(hudSrc).toContain(".admin-ui-toolbar {");
  expect(hudSrc).toContain(".admin-ui-chip-group {");
  expect(hudSrc).toContain(".admin-ui-chip {");
  expect(hudSrc).toContain(".admin-ui-spacer {");
  expect(hudSrc).toContain(".admin-ui-dot.is-success {");
  expect(hudSrc).toContain(".admin-ui-summary {");
  expect(hudSrc).toContain(".admin-ui-action {");

  expect(cssSrc).not.toContain(".admin-ev-v4__filterbar {");
  expect(cssSrc).not.toContain(".admin-ev-v4__sev-chips {");
  expect(cssSrc).not.toContain(".admin-ev-v4__sev-chip {");
  expect(cssSrc).not.toContain(".admin-ev-v4__sev-chip.is-active");
  expect(cssSrc).not.toContain(".admin-ev-v4__sev-chip.is-info");
  expect(cssSrc).not.toContain(".admin-ev-v4__sev-chip.is-warn");
  expect(cssSrc).not.toContain(".admin-ev-v4__sev-chip.is-error");
  expect(cssSrc).not.toContain(".admin-ev-v4__spacer {");
  expect(cssSrc).not.toContain(".admin-ev-v4__count {");
  expect(cssSrc).not.toContain(".admin-ev-v4__refresh {");
  expect(cssSrc).not.toContain(".admin-ev-v4__refresh:hover");
  expect(cssSrc).not.toContain(".admin-ev-v4__cat-chips {");
  expect(cssSrc).not.toContain(".admin-ev-v4__cat-chip {");
  expect(cssSrc).not.toContain(".admin-ev-v4__cat-chip.is-active");
  expect(cssSrc).not.toContain(".admin-ev-v4__cat-chip:hover");
  expect(cssSrc).not.toContain(".admin-ev-v4__live-dot {");
  expect(cssSrc).not.toContain(".admin-ev-v4__live-label {");
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

test("admin Live session banner composes shared controls instead of page-local widgets", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const dashboardSrc = fs.readFileSync(path.join(staticDir, "js", "admin-dashboard.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(dashboardSrc).toContain('class="admin-v2-input admin-ui-grow admin-session-name-input"');
  expect(dashboardSrc).toContain('class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn"');
  expect(dashboardSrc).toContain('class="admin-ui-dot is-success admin-session-live-dot"');
  expect(dashboardSrc).toContain('class="admin-ui-action admin-session-pause-btn"');
  expect(dashboardSrc).toContain('class="admin-ui-action is-danger admin-session-end-btn"');
  expect(dashboardSrc).toContain('class="admin-v2-select admin-session-behavior-select"');

  expect(hudSrc).toContain(".admin-ui-grow {");
  expect(hudSrc).toContain(".admin-ui-nowrap {");

  expect(cssSrc).not.toContain(".admin-session-name-input {");
  expect(cssSrc).not.toContain(".admin-session-name-input:focus");
  expect(cssSrc).not.toContain(".admin-session-open-btn {");
  expect(cssSrc).not.toContain(".admin-session-pause-btn,");
  expect(cssSrc).not.toContain(".admin-session-pause-btn {");
  expect(cssSrc).not.toContain(".admin-session-end-btn {");
  expect(cssSrc).not.toContain(".admin-session-behavior-select {");
});

test("admin Scheduler toolbar and actions compose shared controls", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const schedulerSrc = fs.readFileSync(path.join(staticDir, "js", "admin-scheduler.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(schedulerSrc).toContain('class="admin-ui-toolbar admin-sch-toolbar"');
  expect(schedulerSrc).toContain('class="admin-ui-chip-group admin-sch-view-toggle"');
  expect(schedulerSrc).toContain('class="admin-ui-chip admin-sch-view-btn is-active"');
  expect(schedulerSrc).toContain('class="admin-ui-chip admin-sch-view-btn"');
  expect(schedulerSrc).toContain('class="admin-ui-action admin-sch-add-msg"');
  expect(schedulerSrc).toContain('class="admin-ui-action is-primary admin-sch-create-btn"');
  expect(schedulerSrc).not.toContain('style="margin-top:8px;cursor:pointer"');
  expect(schedulerSrc).not.toContain('class="admin-poll-btn is-primary">${escapeHTML(ServerI18n.t("createBtn"))}</button>');

  expect(hudSrc).toContain(".admin-ui-toolbar {");
  expect(hudSrc).toContain(".admin-ui-chip-group {");
  expect(hudSrc).toContain(".admin-ui-action.is-primary {");

  expect(cssSrc).not.toContain(".admin-sch-toolbar {");
  expect(cssSrc).not.toContain(".admin-sch-view-toggle {");
  expect(cssSrc).not.toContain(".admin-sch-view-btn {");
  expect(cssSrc).not.toContain(".admin-sch-view-btn:hover");
  expect(cssSrc).not.toContain(".admin-sch-view-btn.is-active");
  expect(cssSrc).not.toContain(".admin-sch-add-btn {");
});

test("admin Plugins composes shared toolbar, chips, and pills", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const pluginsSrc = fs.readFileSync(path.join(staticDir, "js", "admin-plugins.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(pluginsSrc).toContain('class="admin-ui-toolbar admin-plugins-toolbar"');
  expect(pluginsSrc).toContain('class="admin-ui-action is-primary admin-plugins-toolbar-btn"');
  expect(pluginsSrc).toContain('class="admin-ui-action admin-plugins-toolbar-btn"');
  expect(pluginsSrc).toContain('class="admin-ui-chip-group admin-plugins-console-filters"');
  expect(pluginsSrc).toContain('class="admin-ui-chip admin-plugins-console-chip is-active"');
  expect(pluginsSrc).toContain('class="admin-ui-pill admin-plugins-pill ${priorityCls}"');
  expect(pluginsSrc).toContain('class="admin-ui-pill admin-plugins-pill is-lang ${langPillClass(lang)}"');

  expect(hudSrc).toContain(".admin-ui-toolbar {");
  expect(hudSrc).toContain(".admin-ui-action {");
  expect(hudSrc).toContain(".admin-ui-chip {");
  expect(hudSrc).toContain(".admin-ui-pill {");

  expect(cssSrc).not.toContain(".admin-plugins-toolbar {");
  expect(cssSrc).not.toContain(".admin-plugins-toolbar-btn {");
  expect(cssSrc).not.toContain(".admin-plugins-toolbar-btn:hover");
  expect(cssSrc).not.toContain(".admin-plugins-toolbar-btn.is-primary");
  expect(cssSrc).not.toContain(".admin-plugins-pill {");
  expect(cssSrc).not.toContain(".admin-plugins-pill.is-crimson");
  expect(cssSrc).not.toContain(".admin-plugins-pill.is-amber");
  expect(cssSrc).not.toContain(".admin-plugins-pill.is-cyan");
  expect(cssSrc).not.toContain(".admin-plugins-pill.is-lang");
  expect(cssSrc).not.toContain(".admin-plugins-console-filters {");
  expect(cssSrc).not.toContain(".admin-plugins-console-chip {");
  expect(cssSrc).not.toContain(".admin-plugins-console-chip:hover");
  expect(cssSrc).not.toContain(".admin-plugins-console-chip.is-active");
});

test("admin Plugins upload modal composes shared action and pill primitives", () => {
  const rootDir = path.join(__dirname, "..", "..");
  const staticDir = path.join(rootDir, "server", "static");
  const uploadSrc = fs.readFileSync(path.join(staticDir, "js", "admin-plugins-upload.js"), "utf8");
  const hudSrc = fs.readFileSync(path.join(staticDir, "css", "hud.css"), "utf8");
  const cssSrc = fs.readFileSync(path.join(staticDir, "css", "style.css"), "utf8");

  expect(uploadSrc).toContain('class="admin-ui-action admin-pu-btn"');
  expect(uploadSrc).toContain('class="admin-ui-action is-primary admin-pu-btn"');
  expect(uploadSrc).toContain('class="admin-ui-action is-warn admin-pu-btn"');
  expect(uploadSrc).toContain("admin-ui-pill admin-pu-pill");
  expect(uploadSrc).toContain('return "is-danger";');
  expect(uploadSrc).toContain('return "is-warn";');
  expect(uploadSrc).not.toContain("is-crimson");
  expect(uploadSrc).not.toContain("is-amber");
  expect(uploadSrc).not.toContain("is-disabled");

  expect(hudSrc).toContain(".admin-ui-action.is-warn {");
  expect(hudSrc).toContain(".admin-ui-pill.is-warn");
  expect(hudSrc).toContain(".admin-ui-pill.is-danger");

  expect(cssSrc).not.toContain(".admin-pu-btn {");
  expect(cssSrc).not.toContain(".admin-pu-btn:hover");
  expect(cssSrc).not.toContain(".admin-pu-btn.is-primary");
  expect(cssSrc).not.toContain(".admin-pu-btn.is-warn");
  expect(cssSrc).not.toContain(".admin-pu-btn.is-disabled");
  expect(cssSrc).not.toContain(".admin-pu-pill {");
  expect(cssSrc).not.toContain(".admin-pu-pill.is-cyan");
  expect(cssSrc).not.toContain(".admin-pu-pill.is-amber");
  expect(cssSrc).not.toContain(".admin-pu-pill.is-crimson");
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
