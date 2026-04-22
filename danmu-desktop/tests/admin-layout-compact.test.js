const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

test("admin panel includes sidebar navigation and collapsible sections", () => {
  const filePath = path.join(__dirname, "..", "..", "server", "static", "js", "admin.js");
  const src = fs.readFileSync(filePath, "utf8");

  // AdminV3 Soft Holo shell uses a sidebar instead of top-of-page Quick Navigation
  expect(src).toContain("admin-dash-sidebar");
  expect(src).toContain("aria-label=\"Admin navigation\"");
  expect(src).toContain("id=\"sec-blacklist\"");
  expect(src).toContain("id=\"sec-history\"");
  expect(src).toContain("id=\"sec-security\"");
  expect(src).toContain("class=\"group admin-v3-card");
});
