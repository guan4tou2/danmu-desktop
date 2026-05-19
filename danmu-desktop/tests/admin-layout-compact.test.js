const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

// Design v2 handoff alignment: the visible sidebar is 8 main areas and
// security lives under System rather than as a standalone top-level nav.
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
  // security still lives under System as an alias, not a standalone nav button.
  expect(adminSrc).not.toContain('data-route="security"');
  // Secondary surfaces remain reachable through tabs / aliases.
  expect(adminSrc).toContain('data-route="moderation"');
  expect(adminSrc).toContain('data-route="system"');
  // Alias entries route legacy hashes to the new IA.
  // 2026-05-18 v5: ratelimit promoted to first-class slug (no longer alias).
  expect(adminSrc).toMatch(/"viewer-config":\s*\{\s*nav:\s*"viewer"/);
  expect(adminSrc).toMatch(/dashboard:\s*"live"/);
  expect(adminSrc).toMatch(/security:\s*\{\s*nav:\s*"system",\s*tab:\s*"security"/);
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
  expect(ratelimitSrc).toContain('SECTION_ID = "sec-ratelimit"');
  expect(ratelimitSrc).toContain('admin-ratelimit-page');
  expect(displaySrc).toContain('route === "display"');
  expect(displaySrc).toContain('route === "viewer"');
  expect(displaySrc).toContain("Display 控制 overlay / client / 目標顯示器");
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
  expect(viewerThemeSrc).toContain("Overlay 排版 / 顯示器 / 連線狀態請到 <b>Display</b>");
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
  expect(paletteSrc).toContain('route: "viewer", tab: "defaults", section: "admin-display-v2-page"');
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
