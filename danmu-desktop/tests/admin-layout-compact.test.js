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
  expect(adminSrc).toContain('data-route="display"');
  expect(adminSrc).toContain('data-route="viewer"');
  expect(adminSrc).not.toContain('data-route="dashboard"');
  expect(adminSrc).not.toContain('data-route="messages"');
  expect(adminSrc).not.toContain('data-route="widgets"');
  expect(adminSrc).not.toContain('data-route="security"');
  // Secondary surfaces remain reachable through tabs / aliases.
  expect(adminSrc).toContain('data-route="moderation"');
  expect(adminSrc).toContain('data-route="system"');
  // Alias entries route legacy hashes to the new IA.
  expect(adminSrc).toMatch(/ratelimit:\s*\{\s*nav:\s*"moderation"/);
  expect(adminSrc).toMatch(/"viewer-config":\s*\{\s*nav:\s*"viewer"/);
  expect(adminSrc).toMatch(/dashboard:\s*"live"/);
  expect(adminSrc).toMatch(/widgets:\s*"display"/);
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
  expect(securitySrc).toContain('route === "system"');
  expect(securitySrc).toContain('leaf === "security"');
  expect(systemSrc).toContain("slug: \"security\"");
  expect(systemSrc).toContain("sectionId: \"admin-security-v2-page\"");
  expect(viewerThemeSrc).toContain('SECTION_ID = "sec-viewer-theme"');
  expect(viewerThemeSrc).toContain('admin-vt-page');
  expect(viewerThemeSrc).toContain('data-vt-jump="display"');
});
