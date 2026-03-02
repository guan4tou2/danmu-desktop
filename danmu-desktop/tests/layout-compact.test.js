const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

test("main control page uses compact two-column layout and sticky action bar", () => {
  const htmlPath = path.join(__dirname, "..", "index.html");
  const html = fs.readFileSync(htmlPath, "utf8");

  expect(html).toContain("max-w-6xl");
  expect(html).toContain("xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]");
  expect(html).toContain("sticky bottom-2");
  expect(html).toContain("xl:grid-cols-2");
});
