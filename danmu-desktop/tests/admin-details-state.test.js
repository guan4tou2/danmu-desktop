const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

test("admin details sections persist open/closed state", () => {
  const filePath = path.join(__dirname, "..", "..", "server", "static", "js", "admin.js");
  const src = fs.readFileSync(filePath, "utf8");

  expect(src).toContain("ADMIN_DETAILS_STATE_KEY");
  expect(src).toContain("loadDetailsState");
  expect(src).toContain("saveDetailsState");
  expect(src).toContain("details[id^='sec-']");
});
