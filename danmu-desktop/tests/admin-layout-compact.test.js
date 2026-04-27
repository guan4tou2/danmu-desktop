const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

// Post design-v2 retrofit + Group D-3 split: admin uses `admin-dash-grid`
// shell with ADMIN_ROUTES router. Some sections live in admin.js, others
// were extracted to admin-*.js modules (Phase 1 consolidation moved
// viewer-theme into the viewer-config tab).
test("admin panel uses design-v2 dash grid + route-based sections", () => {
  const staticDir = path.join(__dirname, "..", "..", "server", "static", "js");
  const adminSrc  = fs.readFileSync(path.join(staticDir, "admin.js"), "utf8");

  // Shell + router anchors — these stay in admin.js.
  expect(adminSrc).toContain("admin-dash-grid");
  expect(adminSrc).toContain("ADMIN_ROUTES");
  expect(adminSrc).toContain('data-route="dashboard"');
  expect(adminSrc).toContain('data-route="ratelimit"');
  expect(adminSrc).toContain('data-route="viewer-config"');
  // Sections still rendered inline by admin.js renderControlPanel():
  expect(adminSrc).toContain('id="sec-blacklist"');
  expect(adminSrc).toContain('id="sec-history"');
  expect(adminSrc).toContain('id="sec-security"');

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
