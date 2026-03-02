const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

test("admin panel includes quick navigation and collapsible secondary sections", () => {
  const filePath = path.join(__dirname, "..", "..", "server", "static", "js", "admin.js");
  const src = fs.readFileSync(filePath, "utf8");

  expect(src).toContain("Quick Navigation");
  expect(src).toContain("href=\"#sec-history\"");
  expect(src).toContain("id=\"sec-blacklist\"");
  expect(src).toContain("id=\"sec-history\"");
  expect(src).toContain("id=\"sec-security\"");
  expect(src).toContain("class=\"group glass-effect");
});
