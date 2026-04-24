const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

// Post design-v2 retrofit: admin uses `admin-dash-grid` shell with sidebar
// nav (data-route) and ADMIN_ROUTES router — not the old Quick Navigation
// glass-effect block. Verify the new sections + router anchors exist.
test("admin panel uses design-v2 dash grid + route-based sections", () => {
  const filePath = path.join(__dirname, "..", "..", "server", "static", "js", "admin.js");
  const src = fs.readFileSync(filePath, "utf8");

  expect(src).toContain("admin-dash-grid");
  expect(src).toContain("ADMIN_ROUTES");
  expect(src).toContain('data-route="dashboard"');
  expect(src).toContain('data-route="ratelimit"');
  expect(src).toContain('data-route="viewer-theme"');
  expect(src).toContain('id="sec-blacklist"');
  expect(src).toContain('id="sec-history"');
  expect(src).toContain('id="sec-security"');
  expect(src).toContain('id="sec-viewer-theme"');
  expect(src).toContain('id="sec-ratelimit"');
});
