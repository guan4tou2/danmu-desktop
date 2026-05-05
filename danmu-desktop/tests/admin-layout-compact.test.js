const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

// Post v5.0.0 P0-0 IA migration: sidebar collapsed to 10 nav buttons.
// `ratelimit` and `viewer-theme` are no longer top-level nav rows — they
// route through alias entries onto the `moderation` and `appearance` tabs
// respectively (see _routeAliases in admin.js).
test("admin panel uses design-v2 dash grid + P0-0 IA sections", () => {
  const staticDir = path.join(__dirname, "..", "..", "server", "static", "js");
  const adminSrc  = fs.readFileSync(path.join(staticDir, "admin.js"), "utf8");

  // Shell + router anchors — these stay in admin.js.
  expect(adminSrc).toContain("admin-dash-grid");
  expect(adminSrc).toContain("ADMIN_ROUTES");
  expect(adminSrc).toContain('data-route="dashboard"');
  // P0-0 IA: 10 top-level nav buttons; ratelimit + viewer-theme moved to tabs.
  expect(adminSrc).toContain('data-route="moderation"');
  expect(adminSrc).toContain('data-route="appearance"');
  // Alias entries route legacy hashes to the new IA.
  expect(adminSrc).toMatch(/ratelimit:\s*\{\s*nav:\s*"moderation"/);
  // Sections still rendered inline by admin.js renderControlPanel():
  expect(adminSrc).toContain('id="sec-blacklist"');
  expect(adminSrc).toContain('id="sec-history"');
  // sec-security / sec-ws-auth removed 2026-04-28 (Group D-3 R6) — fully
  // owned by admin-security-v2-page (sec2-pw-* IDs) in admin-security.js.

  // Sections extracted to dedicated modules (Group D-3 split). The HTML
  // uses template literals with SECTION_ID, so we assert the const + the
  // class hook on the rendered root div.
  const ratelimitSrc   = fs.readFileSync(path.join(staticDir, "admin-ratelimit.js"), "utf8");
  const viewerThemeSrc = fs.readFileSync(path.join(staticDir, "admin-viewer-theme.js"), "utf8");
  expect(ratelimitSrc).toContain('SECTION_ID = "sec-ratelimit"');
  expect(ratelimitSrc).toContain('admin-ratelimit-page');
  expect(viewerThemeSrc).toContain('SECTION_ID = "sec-viewer-theme"');
  expect(viewerThemeSrc).toContain('admin-vt-page');
});
