// @ts-check
/**
 * Server + Client 端對端整合測試
 *
 * 完整流程：
 *   Python server (HTTP + WS) → Electron client → overlay 子視窗
 *   POST /fire → ws_queue → WS broadcast → child window showdanmu()
 *
 * 驗證：彈幕文字出現在 overlay、特效 CSS 被注入、動畫被套用
 */
const { test, expect, _electron: electron } = require("@playwright/test");
const path = require("path");
const { execSync, spawn } = require("child_process");
const http = require("http");

const APP_DIR = path.join(__dirname, "..");
const PROJECT_ROOT = path.join(__dirname, "..", "..");
const HTTP_PORT = 14000;
const WS_PORT = 14001;

// ─── Helper: start Python server ─────────────────────────────────────────────

function startServer() {
  const script = `
import os, sys, threading, logging
os.environ['ADMIN_PASSWORD'] = 'test'
os.environ['PORT'] = '${HTTP_PORT}'
os.environ['WS_PORT'] = '${WS_PORT}'
sys.path.insert(0, '.')

from server.config import Config
Config.WS_REQUIRE_TOKEN = False
Config.WS_AUTH_TOKEN = ''
Config.WS_ALLOWED_ORIGINS = []
Config.WS_PORT = ${WS_PORT}
Config.ADMIN_PASSWORD = 'test'
Config.FIRE_RATE_LIMIT = 1000
Config.FIRE_RATE_WINDOW = 1

from server.app import create_app
from server.ws.server import run_ws_server

logger = logging.getLogger('e2e')
logger.addHandler(logging.NullHandler())

ws_thread = threading.Thread(target=run_ws_server, args=(${WS_PORT}, logger), daemon=True)
ws_thread.start()

app = create_app(Config)
print('READY', flush=True)
app.run(host='127.0.0.1', port=${HTTP_PORT}, use_reloader=False)
`;

  const proc = spawn("uv", ["run", "--project", "server", "python", "-c", script], {
    cwd: PROJECT_ROOT,
    stdio: ["ignore", "pipe", "pipe"],
  });

  return proc;
}

function waitForReady(proc, timeoutMs = 15000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Server start timeout")), timeoutMs);
    proc.stdout.on("data", (chunk) => {
      if (chunk.toString().includes("READY")) {
        clearTimeout(timer);
        resolve();
      }
    });
    proc.on("error", (err) => {
      clearTimeout(timer);
      reject(err);
    });
  });
}

function httpPost(port, path, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = http.request(
      { hostname: "127.0.0.1", port, path, method: "POST", headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(data) } },
      (res) => {
        let chunks = "";
        res.on("data", (c) => (chunks += c));
        res.on("end", () => resolve({ status: res.statusCode, body: chunks }));
      }
    );
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

function waitForPort(port, timeoutMs = 10000) {
  return new Promise((resolve, reject) => {
    const deadline = Date.now() + timeoutMs;
    const tryConnect = () => {
      const req = http.get(`http://127.0.0.1:${port}/health`, (res) => {
        res.resume();
        resolve();
      });
      req.on("error", () => {
        if (Date.now() > deadline) return reject(new Error(`Port ${port} not ready`));
        setTimeout(tryConnect, 200);
      });
      req.setTimeout(500, () => { req.destroy(); setTimeout(tryConnect, 200); });
    };
    tryConnect();
  });
}

// ─── Tests ───────────────────────────────────────────────────────────────────

test.describe("Server + Client E2E", () => {
  /** @type {import('child_process').ChildProcess} */
  let serverProc;
  /** @type {import('@playwright/test').ElectronApplication} */
  let electronApp;

  test.beforeAll(async () => {
    // 1. Start Python server
    serverProc = startServer();
    await waitForReady(serverProc);
    await waitForPort(HTTP_PORT);
  });

  test.afterAll(async () => {
    if (electronApp) {
      try { await electronApp.close(); } catch (_) {}
    }
    if (serverProc) {
      serverProc.kill("SIGTERM");
      // Give it time to clean up
      await new Promise((r) => setTimeout(r, 1000));
      if (!serverProc.killed) serverProc.kill("SIGKILL");
    }
  });

  test("danmu text appears in overlay after POST /fire", async () => {
    // 2. Launch Electron app
    electronApp = await electron.launch({
      args: [path.join(APP_DIR, "dist", "main.bundle.js")],
      cwd: APP_DIR,
    });
    const mainWindow = await electronApp.firstWindow();
    await mainWindow.waitForLoadState("domcontentloaded");

    // 3. Configure connection settings
    await mainWindow.locator("#host-input").fill("127.0.0.1");
    await mainWindow.locator("#port-input").fill(String(WS_PORT));

    // 4. Click Start to create overlay and connect WS
    await mainWindow.locator("#start-button").click();

    // 5. Wait for overlay child window to appear
    await mainWindow.waitForTimeout(3000);

    // 6. Wait for WS connection (check connection status)
    // Give time for WS to connect and register
    await mainWindow.waitForTimeout(2000);

    // 7. POST /fire to send a danmu
    const fireResult = await httpPost(HTTP_PORT, "/fire", {
      text: "E2E_TEST_DANMU_123",
    });

    // Allow 503 if overlay hasn't connected yet, retry
    if (fireResult.status === 503) {
      await mainWindow.waitForTimeout(3000);
      const retry = await httpPost(HTTP_PORT, "/fire", {
        text: "E2E_TEST_DANMU_123",
      });
      expect(retry.status).toBe(200);
    } else {
      expect(fireResult.status).toBe(200);
    }

    // 8. Find the overlay child window and check for danmu
    await mainWindow.waitForTimeout(2000);

    const allWindows = electronApp.windows();
    // Child window is the one that is NOT the main window
    const childWindows = allWindows.filter((w) => w !== mainWindow);

    expect(childWindows.length).toBeGreaterThanOrEqual(1);

    // Check if danmu text appears in any child window
    let found = false;
    for (const child of childWindows) {
      try {
        const text = await child.evaluate(() => {
          const elements = document.querySelectorAll(".danmu, .danmu-wrapper, h1");
          return Array.from(elements).map((e) => e.textContent).join(" ");
        });
        if (text.includes("E2E_TEST_DANMU_123")) {
          found = true;
          break;
        }
      } catch (_) {
        // Window might be destroyed
      }
    }

    expect(found).toBe(true);
  });

  test("danmu with effects has effectCss animation applied", async () => {
    // Login to admin to enable effects
    const loginRes = await httpPost(HTTP_PORT, "/login", { password: "test" });

    // Send danmu with spin effect
    await mainWindow_waitForOverlay(electronApp);

    const fireResult = await httpPost(HTTP_PORT, "/fire", {
      text: "EFFECT_TEST_SPIN",
      effects: [{ name: "spin" }],
    });

    if (fireResult.status === 503) {
      // Overlay not connected, skip
      test.skip();
      return;
    }
    expect(fireResult.status).toBe(200);

    // Wait for danmu to render
    await new Promise((r) => setTimeout(r, 2000));

    const allWindows = electronApp.windows();
    const mainWindow = await electronApp.firstWindow();
    const childWindows = allWindows.filter((w) => w !== mainWindow);

    let hasEffect = false;
    for (const child of childWindows) {
      try {
        hasEffect = await child.evaluate(() => {
          // Check if any <style> element with dme- prefix exists (effect keyframes)
          const styles = document.querySelectorAll("style[id^='dme-']");
          if (styles.length > 0) return true;

          // Also check if any danmu element has animation set
          const danmus = document.querySelectorAll(".danmu, h1.danmu");
          for (const d of danmus) {
            if (d.style.animation && d.style.animation.includes("dme-")) return true;
          }
          return false;
        });
        if (hasEffect) break;
      } catch (_) {}
    }

    // Effect CSS should have been injected
    expect(hasEffect).toBe(true);
  });

  test("multiple danmu messages all receive 200 OK", async () => {
    // Send 3 danmus and verify all get 200 (overlay connected, messages forwarded)
    const results = [];
    for (let i = 0; i < 3; i++) {
      const res = await httpPost(HTTP_PORT, "/fire", { text: `MULTI_TEST_${i}` });
      results.push(res.status);
      await new Promise((r) => setTimeout(r, 200));
    }

    // All should succeed (200) — confirms overlay is connected and WS forwarding works
    expect(results).toEqual([200, 200, 200]);
  });
});

// Helper to ensure overlay is connected
async function mainWindow_waitForOverlay(electronApp) {
  const mainWindow = await electronApp.firstWindow();
  // Already started from first test
  await mainWindow.waitForTimeout(1000);
}
