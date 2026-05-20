const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

function readClientHtml() {
  const htmlPath = path.join(__dirname, "..", "index.html");
  return fs.readFileSync(htmlPath, "utf8");
}

function readMainProcess() {
  const mainPath = path.join(__dirname, "..", "main.js");
  return fs.readFileSync(mainPath, "utf8");
}

function readRendererEntry() {
  const rendererPath = path.join(__dirname, "..", "renderer.js");
  return fs.readFileSync(rendererPath, "utf8");
}

function readClientNav() {
  const navPath = path.join(__dirname, "..", "client-nav.js");
  return fs.readFileSync(navPath, "utf8");
}

function readPreload() {
  const preloadPath = path.join(__dirname, "..", "preload.js");
  return fs.readFileSync(preloadPath, "utf8");
}

function readClientPackageVersion() {
  const pkgPath = path.join(__dirname, "..", "package.json");
  return JSON.parse(fs.readFileSync(pkgPath, "utf8")).version;
}

function readClientElectronVersion() {
  const pkgPath = path.join(__dirname, "..", "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  return String(pkg.devDependencies.electron || "").replace(/^[^\d]*/, "");
}

function section(html, key) {
  const match = html.match(
    new RegExp(`<section class="client-section" data-section="${key}"[\\s\\S]*?</section>`)
  );
  return match ? match[0] : "";
}

test("client nav only exposes display, connection, and about/update primary areas", () => {
  const html = readClientHtml();

  expect(html).toContain('data-nav="overlay"');
  expect(html).toContain('data-nav="conn"');
  expect(html).toContain('data-nav="about"');
  expect(html).not.toContain('data-nav="keys"');
  expect(html).not.toContain('data-nav="update"');
  expect(html).not.toContain('data-section="keys"');
  expect(html).not.toContain('data-section="update"');
});

test("connection section only owns server configuration, not display runtime controls", () => {
  const html = readClientHtml();
  const conn = section(html, "conn");

  // 2026-05-16 conn-section impl alignment: split host/port fields kept
  // as HIDDEN compat inputs so ws-manager continues to read from
  // `#host-input` / `#port-input` / `#ws-token-input`. The user-facing
  // surface is a single Server field — see the conn-section structure test
  // below.
  expect(conn).toContain('id="host-input"');
  expect(conn).toContain('id="port-input"');
  expect(conn).toContain('id="ws-token-input"');
  expect(conn).not.toContain("CERTIFICATE");
  expect(conn).not.toContain("data-client-tls-title");
  expect(conn).not.toContain("data-client-tls-note");
  expect(conn).not.toContain('data-client-action="reconnect"');
  expect(conn).not.toContain('id="screen-select"');
  expect(conn).not.toContain('id="sync-multi-display-checkbox"');
});

test("connection section follows the configure-only design with three always-visible cards", () => {
  // 2026-05-16 v3-r5 alignment: three always-visible cards on the conn page:
  //   1. Server card — TestChip, host display, canonical preview, ⚐ 測試,
  //      in-place edit via ✎ pencil
  //   2. WebSocket Token card — collapsible <details> AUTH panel, never
  //      gated behind ⚙ 更改
  //   3. LAST USED SERVER card — single most-recent entry from localStorage
  // Live `重連 X 次 / 上線 Y` meta is removed (impl source of truth: design
  // v3-r5 ConnSection).
  const html = readClientHtml();
  const conn = section(html, "conn");

  // Server card: in-place edit + test chip + canonical preview
  expect(conn).toMatch(/id="conn-server-input"/);
  expect(conn).toMatch(/data-conn-canonical-preview/);
  expect(conn).toMatch(/data-conn-test-btn/);
  expect(conn).toMatch(/data-conn-test-chip/);
  expect(conn).toMatch(/data-conn-display/);
  expect(conn).toMatch(/data-conn-edit\b/);
  expect(conn).toMatch(/data-conn-edit-save/);
  expect(conn).toMatch(/data-conn-edit-cancel/);

  // AUTH card is its own <details> panel, NOT nested inside the edit form
  expect(conn).toMatch(/<details[^>]+class="client-conn-card client-conn-auth-panel"[^>]+data-conn-auth-panel/);

  // LAST USED SERVER card
  expect(conn).toMatch(/data-conn-last-server/);
  expect(conn).toMatch(/data-conn-last-addr/);
  expect(conn).toMatch(/data-i18n="connLastKicker"/);

  // Removed live-status chrome + retired edit-panel container — must not regress.
  expect(conn).not.toMatch(/data-client-reconnect/);
  expect(conn).not.toMatch(/data-client-uptime/);
  expect(conn).not.toMatch(/連線狀態/);
  expect(conn).not.toMatch(/data-client-conn-edit/);

  // Hidden compat fields stay so ws-manager start/stop keeps working
  // unchanged. They must be `hidden` attribute.
  expect(conn).toMatch(/<input[^>]+id="host-input"[^>]+hidden/);
  expect(conn).toMatch(/<input[^>]+id="port-input"[^>]+hidden/);
});

test("desktop client does not ship or auto-init a first-run setup wizard", () => {
  const html = readClientHtml();
  const renderer = readRendererEntry();

  expect(html).not.toContain('id="firstRunGate"');
  expect(html).not.toContain("data-firstrun-action");
  expect(html).not.toContain("client-firstrun-");
  expect(renderer).not.toContain("first-run-gate");
  expect(renderer).not.toContain("initFirstRunGate");
});

test("desktop client nav does not run retired connection live-status bridge", () => {
  const nav = readClientNav();

  expect(nav).not.toContain("function initConnCard");
  expect(nav).not.toContain("data-client-server-url");
  expect(nav).not.toContain("data-client-uptime");
  expect(nav).not.toContain("data-client-reconnect");
  expect(nav).not.toContain("tickUptime");
});

test("desktop preload does not emit debug console logs", () => {
  const preload = readPreload();

  expect(preload).not.toMatch(/\bconsole\.log\b/);
  expect(preload).not.toContain(" V2");
});

test("overlay section owns display selection and has one visible runtime control model", () => {
  const html = readClientHtml();
  const overlay = section(html, "overlay");

  expect(overlay).toContain('data-client-overlay-button');
  expect(overlay).toContain('data-client-overlay-state');
  expect(overlay).not.toContain('data-client-overlay-toggle');
  expect(overlay).not.toContain('class="client-toggle"');
  expect(overlay).toContain('id="screen-select"');
  expect(overlay).toContain('id="sync-multi-display-checkbox"');
  expect(overlay).toContain('data-client-overlay-action="clear"');
  expect(overlay).not.toContain('data-client-overlay-action="start"');
  expect(overlay).not.toContain('data-client-overlay-action="stop"');
});

test("client shell metadata fallbacks are release-neutral", () => {
  const html = readClientHtml();
  const version = readClientPackageVersion();
  const electronVersion = readClientElectronVersion();

  expect(html).toContain(`<span data-client-version>v—</span>`);
  expect(html).toContain(`<span data-client-about-version>v—</span>`);
  expect(html).toContain(`<span data-client-about-electron-version>Electron —</span>`);
  expect(html).toContain(`<span data-client-platform>Desktop</span>`);
  expect(html).toContain(`<span data-client-about-platform>Desktop</span>`);
  expect(html).not.toContain(`>v${version}<`);
  expect(html).not.toContain(`>Electron ${electronVersion}<`);
  expect(html).not.toContain(`<span data-client-platform>macOS</span>`);
  expect(html).not.toContain(`<span data-client-about-platform>macOS</span>`);
});

test("tray menu exposes v3 canonical schema: overlay toggle + idle + no dead controls", () => {
  const main = readMainProcess();

  // v3 design: native tray menu, not a popover
  expect(main).not.toContain('require("./main-modules/tray-popover")');
  expect(main).not.toContain("buildTrayPopoverSections");

  // v3 canonical items: "顯示 overlay" (⌘⇧D) + "待機畫面" (sub-item)
  expect(main).toContain('"顯示 overlay"');
  expect(main).toContain("待機畫面");
  expect(main).toContain('"偏好設定…"');
  expect(main).toMatch(/label:\s*"偏好設定…",\s*click:\s*showMainWindow/s);

  // No dead dispatcher-style runtime controls in tray
  expect(main).not.toContain('dispatchToRenderer("pause")');
  expect(main).not.toContain('dispatchToRenderer("clear")');
  expect(main).not.toContain('dispatchToRenderer("display:primary")');
  expect(main).not.toContain('dispatchToRenderer("display:secondary")');
  expect(main).not.toContain('dispatchToRenderer("reconnect")');
});
