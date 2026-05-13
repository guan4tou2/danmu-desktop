const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

// Post design-v2 retrofit: Electron client uses a sidebar + section shell
// (client-shell + client-main + client-section) — not the old max-w-6xl
// glass-effect single card. Verify the new structure.
test("main control page uses design-v2 sidebar shell with client sections", () => {
  const htmlPath = path.join(__dirname, "..", "index.html");
  const html = fs.readFileSync(htmlPath, "utf8");

  expect(html).toContain("client-titlebar");
  expect(html).toContain("client-shell");
  expect(html).toContain("client-sidebar");
  expect(html).toContain("client-main");
  expect(html).toContain('data-section="overlay"');
  expect(html).toContain('data-section="conn"');
});
