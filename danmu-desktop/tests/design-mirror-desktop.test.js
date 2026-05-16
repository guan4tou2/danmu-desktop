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

test("ConnSection AUTH panel labels the field as WebSocket Token, not admin password", () => {
  // 2026-05-16 alignment: desktop client never authenticates as admin.
  // The `pw` field gates the WSS handshake when WS_REQUIRE_TOKEN=true.
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");

  expect(src).toContain("WebSocket Token");
  expect(src).toContain("OPTIONAL · WSS HANDSHAKE");
  expect(src).not.toContain("管理密碼");
  expect(src).not.toContain("OPTIONAL · ADMIN ACCESS");
  expect(src).not.toContain("macOS Keychain");
  expect(src).not.toContain("admin 後台");
  // Don't redirect users to Fire Token — that's a different surface.
  expect(src).not.toMatch(/Admin → System → Fire Token/);
});

test("ConnSection does not show a persistent deployment-docs link", () => {
  // The first-run gate may keep a docs hint; ConnSection itself must not.
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");

  expect(src).not.toContain("github.com/.../docs/server-setup");
  expect(src).not.toMatch(/部署文件 →[\s\S]{0,80}server-setup/);
});

test("ConnSection is configure-only — no live-connection chrome, no overlay trigger", () => {
  // 2026-05-16 alignment: WS connection ≡ overlay child window. The conn
  // page has no independent connection lifecycle; it only configures
  // server URL + token. Therefore no SERVER · CONNECTED status, no
  // latency/reconnect-count meta, no message-flow sparkline, and no
  // ↻ 重連 button (reconnecting from conn page would mean spawning a new
  // overlay — that's the overlay tab's job).
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");

  expect(src).not.toMatch(/SERVER · CONNECTED · \d/);
  expect(src).not.toMatch(/延遲 \d+ms · 重連 \d+ 次/);
  expect(src).not.toMatch(/MESSAGE FLOW · LAST 30s/);
  expect(src).not.toContain("RATE · 4.2/s");
  expect(src).not.toContain("↻ 重連");
  // ConnSection kicker now reads "configure-only," not the old
  // "SERVER · AUTH · STARTUP" trio that implied a live surface.
  expect(src).toContain("SERVER · CONFIGURE");
  expect(src).not.toContain("SERVER · AUTH · STARTUP");
});

test("ConnSection uses single host field + canonical URL preview + test button", () => {
  // 2026-05-16: replaced `ws://danmu.local:4001` split-field model with a
  // single host input (port 443 default, hidden), auto-stripped of scheme
  // + /ws path. Live preview shows the canonical wss://HOST/ws derived URL.
  // ⚐ 測試 (silent one-shot handshake) replaces the destructive ↻ 重連.
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");

  // No legacy ws:// (v5.0.0+ is WSS-only).
  expect(src).not.toMatch(/ws:\/\/danmu\.local:4001/);
  // Canonical URL builder + scheme/path auto-strip.
  expect(src).toMatch(/wss:\/\/\$\{parsed\}\/ws/);
  expect(src).toMatch(/\.replace\(\/\^wss\?:/);
  expect(src).toMatch(/\.replace\(\/\\\/ws\\\/\?\$/);
  // 4-state TestChip (idle / testing / ok / fail).
  expect(src).toContain("'LAST TEST · —'");
  expect(src).toContain("'測試中…'");
  expect(src).toMatch(/icon: '✓'/);
  expect(src).toMatch(/icon: '✗'/);
  // ⚐ 測試 button replaces ↻ 重連.
  expect(src).toContain("⚐ 測試");
  expect(src).toMatch(/one-shot WSS handshake/);
  // Recent connections are host-only, no legacy ws://.../:4001 format.
  expect(src).not.toMatch(/addr="ws:\/\//);
  expect(src).toMatch(/addr="danmu\.local"/);
});

test("DesktopClient + ControlWindow forward testState through to ConnSection", () => {
  // The 4 conn test-state artboards (idle/testing/ok/fail) need the
  // prop chain DesktopClient(testState) → ControlWindow(defaultTestState)
  // → ConnSection(testState) to render distinct states from the canvas.
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");

  expect(src).toMatch(/function DesktopClient\(\{[^}]*testState[^}]*\}/);
  expect(src).toMatch(/function ControlWindow\(\{[^}]*defaultTestState[^}]*\}/);
  expect(src).toMatch(/function ConnSection\(\{[^}]*testState[^}]*\}/);
  expect(src).toMatch(/<ControlWindow\s+theme=\{theme\}\s+defaultTestState=\{testState\}/);
  expect(src).toMatch(/<ConnSection[\s\S]*?testState=\{defaultTestState\}/);
});

test("ConnSection has no STARTUP toggle block (unimplemented in Electron app)", () => {
  // 2026-05-16: removed three toggles (autostart / auto-show overlay /
  // background keep-alive) — none are wired in main.js / renderer-modules.
  // Keeping mockup-only toggles in the mirror leads engineers to chase
  // ghost features.
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");

  expect(src).not.toContain("function StartupRow");
  expect(src).not.toContain("<StartupRow");
  expect(src).not.toContain("開機啟動 & 自動連線");
  expect(src).not.toContain("背景時保持連線");
});

test("TrayMenu uses a single canonical schema, status-only state difference", () => {
  // 2026-05-13/16 engineering update: tray is status-only, not a popover
  // controller. Connected vs Disconnected must show the same item list,
  // with status text + accent color reflecting state.
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");

  // Items shared across both states
  expect(src).toMatch(/<TrayRow label="Overlay 視窗"/);
  expect(src).toMatch(/<TrayToggleRow label="待機畫面" sc="⌘⇧D"/);
  expect(src).toMatch(/<TrayRow label="伺服器"/);
  expect(src).toMatch(/<TrayRow label="開啟控制視窗…" sc="⌘⇧C"/);
  expect(src).toMatch(/<TrayRow label="偏好設定…"/);
  expect(src).toMatch(/<TrayRow label="結束 Danmu"/);
  // Schema must not branch — no separate Disconnected-only `連線設定` row
  // or Connected-only `Overlay 狀態 顯示中` etc.
  expect(src).not.toMatch(/label="Overlay 狀態" meta="顯示中"/);
  expect(src).not.toMatch(/label="連線設定…"/);
  // Don't reintroduce a second overlay toggle alongside 待機畫面.
  expect(src).not.toMatch(/label="顯示 overlay" sc="⌘⇧D"/);
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
