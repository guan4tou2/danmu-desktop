const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

function readRepoFile(...parts) {
  const filePath = path.join(__dirname, "..", "..", ...parts);
  return fs.readFileSync(filePath, "utf8");
}

test("desktop design component mirror only models connection, overlay, and about as primary control-window sections", () => {
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");

  // Default section is 'conn'; forceSection prop overrides for canvas
  // per-section artboards.
  expect(src).toMatch(/const \[section, setSection\] = React\.useState\(forceSection \|\| ['"]conn['"]\)/);
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

test("OverlaySection primary control is a button (with state text), not a Toggle switch", () => {
  // 2026-05-16: impl uses `<button data-client-overlay-button>` with copy
  // that flips between "▶ 開啟 Overlay" / "◼ 關閉 Overlay" — a deliberate
  // affordance for an action (spawn/destroy overlay window), not a status
  // sync. The design must match that pattern, not show a Toggle switch.
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");

  // The OverlaySection-scoped slice — read from the function start to the
  // next `function ` declaration so we don't catch ConnSection's pattern.
  const slice = src.split(/function OverlaySection/)[1].split(/\nfunction /)[0];

  expect(slice).toMatch(/▶ 開啟 Overlay/);
  expect(slice).toMatch(/◼ 關閉 Overlay/);
  expect(slice).toMatch(/aria-pressed=\{open\}/);
  // No Toggle switch inside OverlaySection.
  expect(slice).not.toMatch(/<Toggle\b/);
});

test("OverlaySection has no redundant start/pause action buttons", () => {
  // 2026-05-16: impl `index.html:319-323` shows only `⌫ 清空畫面` in the
  // actions row. The primary button above owns start/stop. Reintroducing
  // `▶ 開始接收` or `⏸ 暫停` here duplicates that control.
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");
  const slice = src.split(/function OverlaySection/)[1].split(/\nfunction /)[0];

  expect(slice).toMatch(/⌫ 清空畫面/);
  expect(slice).not.toMatch(/▶ 開始接收/);
  expect(slice).not.toMatch(/⏸ 暫停/);
});

test("OverlaySection exposes the sync multi-display checkbox", () => {
  // 2026-05-16: impl has `#sync-multi-display-checkbox`. Without this in
  // the design mirror, multi-monitor operators have no UI affordance for
  // mirrored overlay placement.
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");
  const slice = src.split(/function OverlaySection/)[1].split(/\nfunction /)[0];

  expect(slice).toMatch(/Enable synchronous multi-display/);
  expect(slice).toMatch(/所有螢幕同步顯示 overlay/);
});

test("AboutSection changelog demo does not reference removed concepts", () => {
  // 2026-05-16: the fake changelog rows previously mentioned `密碼存入
  // macOS Keychain` (wrong-concept admin password) and `Sparkline 改為
  // 30s 滾動` (sparkline since removed from ConnSection). Even as demo
  // copy, these mislead new readers into thinking the features exist.
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");
  const slice = src.split(/function AboutSection/)[1].split(/\nfunction /)[0];

  expect(slice).not.toMatch(/密碼存入 macOS Keychain/);
  expect(slice).not.toMatch(/Sparkline 改為/);
});

test("ConnSection shows a single LAST USED SERVER entry, not a multi-server list", () => {
  // 2026-05-16: impl stores ONE server in localStorage (host/port/wsToken/
  // displayIndex single key). The design mirror was previously showing 3
  // demo entries — design fiction. Decision: align mirror to impl truth.
  // If multi-server history is added later, the section can grow back.
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");
  const slice = src.split(/function ConnSection/)[1].split(/\nfunction /)[0];

  // Section is labeled LAST USED SERVER (singular), not RECENT CONNECTIONS.
  expect(slice).toContain("LAST USED SERVER");
  expect(slice).not.toContain("RECENT CONNECTIONS");
  // Exactly one RecentRow inside ConnSection.
  const recentRowCount = (slice.match(/<RecentRow\b/g) || []).length;
  expect(recentRowCount).toBe(1);
  // The retired demo entries must not come back.
  expect(slice).not.toContain('addr="danmu.acme.co"');
  expect(slice).not.toContain('addr="192.168.1.50:8443"');
});

test("ControlWindow titlebar reserves space for native traffic lights — no fake macOS chrome", () => {
  // 2026-05-16: per user direction "你不應該自己實作視窗控制按鈕". Don't
  // draw red/yellow/green dots in HTML — Electron with
  // titleBarStyle:'hidden' lets the OS render the real traffic lights.
  // The titlebar should leave a 68px spacer on the left for them.
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");
  const slice = src.split(/function ControlWindow/)[1].split(/\nfunction /)[0];

  expect(slice).not.toMatch(/background:\s*['"]#ff5f57['"]/); // red traffic light
  expect(slice).not.toMatch(/background:\s*['"]#febc2e['"]/); // yellow
  expect(slice).not.toMatch(/background:\s*['"]#28c840['"]/); // green
  // Left + right 68px spacers for native traffic light area.
  expect(slice).toMatch(/width:\s*68/);
  // Window-drag region declared.
  expect(slice).toMatch(/WebkitAppRegion:\s*['"]drag['"]/);
});

test("ControlWindow + DesktopClient forward forceSection for per-section artboards", () => {
  // 2026-05-16 v3-r6: the design canvas renders each ControlWindow section
  // (conn / overlay / about) as its own artboard via the `forceSection`
  // prop chain. Lock the signature so future edits don't break the canvas.
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");

  expect(src).toMatch(/function DesktopClient\(\{[^}]*forceSection[^}]*\}/);
  expect(src).toMatch(/function ControlWindow\(\{[^}]*forceSection[^}]*\}/);
  expect(src).toMatch(/forceSection\s*\|\|\s*['"]conn['"]/);
});

test("Desktop mirror uses `Danmu Desktop` for desktop shell identity", () => {
  // v3 desktop design uses `Danmu Desktop` for the shell identity:
  // titlebar, About card, tray header, and disconnected desktop toast.
  const src = readRepoFile("docs", "designs", "design-v2", "components", "desktop.jsx");

  // Strip line/block comments so the polestar explanation doesn't
  // false-trigger the negative assertions below.
  const stripComments = (s) =>
    s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");

  // Hero in AboutSection must be "Danmu Desktop".
  const aboutSlice = stripComments(
    src.split(/function AboutSection/)[1].split(/\nfunction /)[0]
  );
  expect(aboutSlice).toMatch(/Danmu Desktop/);
  expect(aboutSlice).not.toMatch(/Danmu Fire/);

  // TrayMenu header and About row must be "Danmu Desktop".
  const traySlice = stripComments(
    src.split(/function TrayMenu/)[1].split(/\nfunction /)[0]
  );
  expect(traySlice).toMatch(/Danmu Desktop/);
  expect(traySlice).not.toMatch(/Danmu Fire/);

  // OverlayOnDesktop disconnected toast must be "Danmu Desktop".
  const overlaySlice = stripComments(
    src.split(/function OverlayOnDesktop/)[1].split(/\nfunction /)[0]
  );
  expect(overlaySlice).toMatch(/Danmu Desktop/);
  expect(overlaySlice).not.toMatch(/Danmu Fire/);
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
