const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

test("admin-utils.js defines shared details state utilities", () => {
  const filePath = path.join(__dirname, "..", "..", "server", "static", "js", "admin-utils.js");
  const src = fs.readFileSync(filePath, "utf8");

  expect(src).toContain("DETAILS_STATE_KEY");
  expect(src).toContain("loadDetailsState");
  expect(src).toContain("saveDetailsState");
  expect(src).toContain("escapeHtml");
});

test("admin.js uses shared utilities from AdminUtils", () => {
  const filePath = path.join(__dirname, "..", "..", "server", "static", "js", "admin.js");
  const src = fs.readFileSync(filePath, "utf8");

  expect(src).toContain("AdminUtils.loadDetailsState");
  expect(src).toContain("AdminUtils.saveDetailsState");
  expect(src).toContain("details[id^='sec-']");
});
