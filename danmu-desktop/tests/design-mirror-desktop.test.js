const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

function readRepoFile(...parts) {
  const filePath = path.join(__dirname, "..", "..", ...parts);
  return fs.readFileSync(filePath, "utf8");
}

test("desktop design component mirror only models connection, overlay, and about as primary control-window sections", () => {
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");

  expect(src).toContain("const [section, setSection] = React.useState('conn');");
  expect(src).toContain("{ k: 'conn'");
  expect(src).toContain("{ k: 'overlay'");
  expect(src).toContain("{ k: 'about'");
  expect(src).not.toContain("{ k: 'keys'");
  expect(src).not.toContain("{ k: 'update'");
  expect(src).not.toContain("section === 'keys'");
  expect(src).not.toContain("section === 'update'");
  expect(src).not.toContain("scenario === 'firstrun'");
  expect(src).not.toContain("function FirstRunGate");
});

test("desktop HTML mirrors do not publish standalone first-run, tray popover, or window picker surfaces", () => {
  const v2Html = readRepoFile("docs", "designs", "design-v2", "Danmu Redesign.html");
  const legacyHtml = readRepoFile("docs", "designs", "Danmu Redesign.html");

  for (const html of [v2Html, legacyHtml]) {
    expect(html).toContain('label="Desktop · Control Window"');
    expect(html).toContain('label="Desktop · Overlay Live"');
    expect(html).toContain('label="Desktop · Overlay Disconnected"');
    expect(html).toContain('label="Desktop · Overlay Idle"');
    expect(html).toContain('label="Desktop · Overlay Reconnecting"');
    expect(html).toContain('label="Desktop · Tray · Connected"');
    expect(html).toContain('label="Desktop · Tray · Disconnected"');
    expect(html).not.toContain("Desktop · First-run Gate");
    expect(html).not.toContain("Desktop · Tray Popover");
    expect(html).not.toContain("Desktop · Window Picker");
  }
});
