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

// 設計稿 04：分頁（<section data-section>）整組退休。連線設定與關於搬進
// ⚙ 面板，顯示層控制留在主畫面，所以斷言只分「⚙ 面板內」與「主畫面」。
function settingsPanel(html) {
  const i = html.indexOf('id="client-settings"');
  if (i === -1) return "";
  return html.slice(i);
}

function mainArea(html) {
  const i = html.indexOf('class="client-main"');
  const j = html.indexOf("</main>", i);
  return i === -1 || j === -1 ? "" : html.slice(i, j);
}

test("design-04 single page: no nav tabs, one settings panel", () => {
  const html = readClientHtml();

  // 側欄與分頁整組退休
  expect(html).not.toContain("data-nav=");
  expect(html).not.toContain("data-section=");
  // ⚙ 面板是連線與關於的唯一入口
  expect(html).toContain('id="client-settings-btn"');
  expect(html).toContain('id="client-settings"');
});

test("connection config keeps its compat inputs and stays out of the main card", () => {
  const html = readClientHtml();
  const conn = html;

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
  // 螢幕選擇屬於主畫面（設計稿 04 · S5），不在 ⚙ 面板裡
  expect(settingsPanel(html)).not.toContain('id="screen-select"');
  expect(settingsPanel(html)).not.toContain('id="sync-multi-display-checkbox"');
  expect(mainArea(html)).toContain('id="screen-select"');
});

test("connection config keeps the conn-section-wire contract intact", () => {
  // 2026-05-16 v3-r5 alignment: three always-visible cards on the conn page:
  //   1. Server card — TestChip, host display, canonical preview, ⚐ 測試,
  //      in-place edit via ✎ pencil
  //   2. WebSocket Token card — collapsible <details> AUTH panel, never
  //      gated behind ⚙ 更改
  //   3. LAST USED SERVER card — single most-recent entry from localStorage
  // Live `重連 X 次 / 上線 Y` meta is removed (impl source of truth: design
  // v3-r5 ConnSection).
  const html = readClientHtml();
  const conn = html;

  // 顯示 ↔ 編輯兩態、測試 chip、canonical preview 的契約不變
  expect(conn).toMatch(/id="conn-server-input"/);
  expect(conn).toMatch(/data-conn-canonical-preview/);
  expect(conn).toMatch(/data-conn-test-btn/);
  expect(conn).toMatch(/data-conn-test-chip/);
  expect(conn).toMatch(/data-conn-display/);
  expect(conn).toMatch(/data-conn-edit\b/);
  expect(conn).toMatch(/data-conn-edit-save/);
  expect(conn).toMatch(/data-conn-edit-cancel/);

  // 連線密碼是自己的 <details>，不是塞在編輯表單裡（設計稿 04 · P1）
  expect(settingsPanel(html)).toMatch(/<details[^>]*data-conn-auth-panel/);

  // 上次使用的位址搬進 ⚙ 面板的「伺服器 › 位址」
  expect(settingsPanel(html)).toMatch(/data-conn-last-addr/);
  expect(settingsPanel(html)).toMatch(/data-conn-last-when/);

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

test("first run asks exactly one question (design 04 · S1)", () => {
  // 設計稿 04 把首次啟動精靈收成「一個欄位＋兩顆按鈕」：問伺服器位址，
  // 或直接略過。舊的多步 firstRunGate 不回來。
  const html = readClientHtml();
  const renderer = readRendererEntry();

  expect(html).toContain('id="client-onboarding"');
  expect(html).toContain('id="client-onboarding-input"');
  expect(html).toContain("data-onboarding-continue");
  expect(html).toContain("data-onboarding-skip");
  // 只有一個輸入欄位
  const panel = html.slice(html.indexOf('id="client-onboarding"'));
  const onboarding = panel.slice(0, panel.indexOf("</div>\n    </div>"));
  expect((onboarding.match(/<input/g) || []).length).toBe(1);

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

test("main card owns the one visible runtime control and the only status readout", () => {
  const html = readClientHtml();
  const overlay = mainArea(html);

  // 設計稿 04：狀態只出現在主卡一處（原本標題列／側欄／卡片三處）
  expect(overlay).toContain("data-client-main-card");
  expect(overlay).toContain("data-client-overlay-status");
  expect(overlay).toContain("data-client-overlay-dot");

  expect(overlay).toContain('data-client-overlay-button');
  expect(overlay).toContain('data-client-overlay-state');
  expect(overlay).not.toContain('data-client-overlay-toggle');
  expect(overlay).not.toContain('class="client-toggle"');
  expect(overlay).toContain('id="screen-select"');
  expect(overlay).toContain('id="sync-multi-display-checkbox"');
  expect(overlay).toContain('data-client-overlay-action="clear"');
  // 2026-07-29 pre-show checks: fixed-style test shot + idle-QR toggle live
  // in the same secondary action bar (still no style controls — v5 boundary).
  expect(overlay).toContain('data-client-overlay-action="test-danmu"');
  expect(overlay).toContain('data-client-overlay-action="idle-qr"');
  expect(overlay).not.toContain('data-client-overlay-action="start"');
  expect(overlay).not.toContain('data-client-overlay-action="stop"');
  // L3 2026-07-29: the hidden #start-button/#stop-button proxy pair is gone
  // — the visible Overlay button calls window.OverlayControl directly.
  expect(overlay).not.toContain('id="start-button"');
  expect(overlay).not.toContain('id="stop-button"');
});

test("client nav drives the overlay through OverlayControl, not hidden proxy buttons", () => {
  const nav = readClientNav();

  expect(nav).toContain("window.OverlayControl");
  // No DOM proxying left: neither the button ids nor the disabled-attribute
  // MutationObserver bridge. (client-nav still uses MutationObserver for the
  // screen-select list, so only the start-button strings are pinned.)
  expect(nav).not.toContain("start-button");
  expect(nav).not.toContain("stop-button");
});

test("idle-QR button state flows through main's overlay-idle-state broadcast", () => {
  // Single source of truth for idle state is main.js `idleActive`; renderer
  // never flips local state — it sends toggleOverlayIdle and re-renders off
  // the overlay-idle-state broadcast (keeps tray checkbox and button synced).
  const main = readMainProcess();
  const preload = readPreload();
  const nav = readClientNav();

  expect(main).toContain('"overlay-idle-state"');
  expect(preload).toContain("onOverlayIdleState");
  expect(nav).toContain("onOverlayIdleState");
  expect(nav).toContain('toggleOverlayIdle("toggle")');
});

test("client shell metadata fallbacks are release-neutral", () => {
  const html = readClientHtml();
  const version = readClientPackageVersion();
  const electronVersion = readClientElectronVersion();

  expect(html).toContain(`<span data-client-version>v—</span>`);
  // 設計稿 04 的單頁只顯示一次版本與平台，另一份留在 DOM 但 hidden。
  expect(html).toContain(`<span data-client-about-version hidden>v—</span>`);
  expect(html).toContain(`<span data-client-about-electron-version>Electron —</span>`);
  expect(html).toContain(`<span data-client-platform hidden>Desktop</span>`);
  expect(html).toContain(`<span data-client-about-platform>Desktop</span>`);
  expect(html).not.toContain(`>v${version}<`);
  expect(html).not.toContain(`>Electron ${electronVersion}<`);
  expect(html).not.toContain(`<span data-client-platform>macOS</span>`);
  expect(html).not.toContain(`<span data-client-about-platform>macOS</span>`);
});

test("about links to GitHub through the hardened open-external IPC", () => {
  // about.html modal retired 2026-07-29；設計稿 04 之後「關於」在 ⚙ 面板裡，
  // 仍是唯一的 About 介面，所以 repo 連結必須在那裡。
  const html = readClientHtml();
  const nav = readClientNav();

  expect(settingsPanel(html)).toContain('id="about-github-link"');
  expect(nav).toContain('openExternal("https://github.com/guan4tou2/danmu-desktop")');
});

test("tray About opens the settings panel (no standalone about window)", () => {
  const main = readMainProcess();
  const preload = readPreload();
  const nav = readClientNav();
  const shell = fs.readFileSync(path.join(__dirname, "..", "client-shell.js"), "utf8");

  expect(main).toContain('"client-nav:activate"');
  expect(main).not.toContain("createAboutWindow");
  expect(preload).toContain("onNavigateSection");
  expect(nav).toContain("onNavigateSection");
  // 分頁沒了之後，導覽事件由 client-shell.js 轉成開 ⚙ 面板
  expect(nav).toContain("client:navigate-section");
  expect(shell).toContain("client:navigate-section");
});

test("tray menu is the design-09 six-item schema", () => {
  const main = readMainProcess();

  // native tray menu, not a popover
  expect(main).not.toContain('require("./main-modules/tray-popover")');
  expect(main).not.toContain("buildTrayPopoverSections");

  // 設計稿 09：9 項 → 6 項。狀態合併成一行；主要動作永遠第一項並帶快速鍵；
  // 「更改連線」「關於」收進「設定…」。
  expect(main).toContain('"開啟顯示層"');
  expect(main).toContain('"關閉顯示層"');
  expect(main).toContain('"顯示入場 QR"');   // 與控制視窗按鈕、QR 場景關閉鈕同詞
  expect(main).toContain('"清空畫面"');
  expect(main).toContain('"開啟控制視窗…"');
  expect(main).toContain('label: "設定…"');
  expect(main).toContain('accelerator: "CommandOrControl+Shift+D"');

  // 退休的唯讀資訊列與獨立項目
  expect(main).not.toContain('"顯示 Desktop"');
  expect(main).not.toContain("Desktop 視窗：");
  expect(main).not.toContain('"偏好設定…"');
  expect(main).not.toContain("更改連線…");
  expect(main).not.toMatch(/label:\s*`關於 \$\{pkgName\}…`/);

  // No dead dispatcher-style runtime controls in tray
  expect(main).not.toContain('dispatchToRenderer("pause")');
  expect(main).not.toContain('dispatchToRenderer("clear")');
  expect(main).not.toContain('dispatchToRenderer("display:primary")');
  expect(main).not.toContain('dispatchToRenderer("display:secondary")');
  expect(main).not.toContain('dispatchToRenderer("reconnect")');
});
