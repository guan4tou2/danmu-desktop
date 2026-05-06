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
const fs = require("fs");
const os = require("os");
const { execFileSync, spawn } = require("child_process");
const http = require("http");

const APP_DIR = path.join(__dirname, "..");
const PROJECT_ROOT = path.join(__dirname, "..", "..");
const HTTP_PORT = 14000;
const WS_PORT = 14001;

// ─── Helper: start Python server ─────────────────────────────────────────────

function createSelfSignedCert(runtimeDir) {
  const certPath = path.join(runtimeDir, "fullchain.pem");
  const keyPath = path.join(runtimeDir, "privkey.pem");
  const sanPath = path.join(runtimeDir, "san.cnf");
  fs.writeFileSync(
    sanPath,
    "[req]\ndistinguished_name=req\n[SAN]\nsubjectAltName=DNS:localhost,IP:127.0.0.1\n"
  );
  execFileSync(
    "openssl",
    [
      "req",
      "-x509",
      "-nodes",
      "-newkey",
      "rsa:2048",
      "-keyout",
      keyPath,
      "-out",
      certPath,
      "-days",
      "1",
      "-subj",
      "/CN=localhost",
      "-extensions",
      "SAN",
      "-config",
      sanPath,
    ],
    { stdio: "ignore" }
  );
  return { certPath, keyPath };
}

function startServer() {
  const runtimeDir = fs.mkdtempSync(path.join(os.tmpdir(), "server-client-e2e-"));
  const { certPath, keyPath } = createSelfSignedCert(runtimeDir);
  const filterRulesPath = path.join(runtimeDir, "filter_rules.json");
  const settingsPath = path.join(runtimeDir, "settings.json");
  const webhooksPath = path.join(runtimeDir, "webhooks.json");
  fs.writeFileSync(filterRulesPath, "[]");
  fs.writeFileSync(settingsPath, "{}");
  fs.writeFileSync(webhooksPath, "[]");
  const script = `
import os, sys, threading, logging
os.environ['ADMIN_PASSWORD'] = 'test'
os.environ['PORT'] = '${HTTP_PORT}'
os.environ['WS_PORT'] = '${WS_PORT}'
os.environ['FILTER_RULES_FILE'] = ${JSON.stringify(filterRulesPath)}
os.environ['SETTINGS_FILE'] = ${JSON.stringify(settingsPath)}
os.environ['WEBHOOKS_PATH'] = ${JSON.stringify(webhooksPath)}
sys.path.insert(0, '.')

from server.config import Config
Config.WS_REQUIRE_TOKEN = False
Config.WS_AUTH_TOKEN = ''
Config.WS_ALLOWED_ORIGINS = []
Config.WS_PORT = ${WS_PORT}
Config.WS_TLS_CERTFILE = ${JSON.stringify(certPath)}
Config.WS_TLS_KEYFILE = ${JSON.stringify(keyPath)}
Config.ADMIN_PASSWORD = 'test'
Config.FIRE_RATE_LIMIT = 1000
Config.FIRE_RATE_WINDOW = 1
Config.CAPTCHA_PROVIDER = 'none'
Config.CAPTCHA_SECRET = ''

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
  proc.__runtimeDir = runtimeDir;

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

async function waitForFirePayloadAccepted(payload, attempts = 12) {
  let last;
  for (let i = 0; i < attempts; i++) {
    last = await httpPost(HTTP_PORT, "/fire", payload);
    if (last.status === 200) return last;
    await new Promise((r) => setTimeout(r, 1000));
  }
  return last;
}

async function waitForFireAccepted(text, attempts = 12) {
  return waitForFirePayloadAccepted({ text }, attempts);
}

async function getOverlayWindow(electronApp, mainWindow, timeoutMs = 10000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const childWindows = electronApp.windows().filter((w) => w !== mainWindow);
    if (childWindows.length > 0) return childWindows[0];
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error("overlay child window not found");
}

// ─── Tests ───────────────────────────────────────────────────────────────────

test.describe("Server + Client E2E", () => {
  /** @type {import('child_process').ChildProcess} */
  let serverProc;
  /** @type {import('@playwright/test').ElectronApplication} */
  let electronApp;
  /** @type {import('@playwright/test').Page | null} */
  let mainWindow = null;

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
      if (serverProc.__runtimeDir) {
        try { fs.rmSync(serverProc.__runtimeDir, { recursive: true, force: true }); } catch (_) {}
      }
    }
  });

  async function ensureOverlayStarted() {
    if (!electronApp) {
      electronApp = await electron.launch({
        args: [path.join(APP_DIR, "dist", "main.bundle.js")],
        cwd: APP_DIR,
      });
    }
    if (!mainWindow) {
      mainWindow = await electronApp.firstWindow();
      await mainWindow.waitForLoadState("domcontentloaded");
      await mainWindow.waitForSelector("#main-content.loaded", { timeout: 15000 });
    }

    const overlayButton = mainWindow.locator("[data-client-overlay-button]");
    const state = await overlayButton.getAttribute("data-state").catch(() => null);
    if (state === "running") return mainWindow;

    await mainWindow.locator('[data-nav="conn"]').click();
    await mainWindow.locator('[data-client-action="edit-conn"]').click();
    await mainWindow.waitForSelector("#host-input", { state: "visible", timeout: 5000 });
    await mainWindow.locator("#host-input").fill("127.0.0.1");
    await mainWindow.locator("#port-input").fill(String(WS_PORT));
    await mainWindow.locator('[data-nav="overlay"]').click();
    await overlayButton.click();
    await getOverlayWindow(electronApp, mainWindow);
    return mainWindow;
  }

  test("danmu text appears in overlay after POST /fire", async () => {
    // 2. Launch Electron app and start overlay via the visible v5 action.
    await ensureOverlayStarted();
    if (!mainWindow) throw new Error("mainWindow not initialized");

    // 3. POST /fire to send a danmu, retrying until the WSS overlay registers.
    const fireResult = await waitForFireAccepted("E2E_TEST_DANMU_123");
    expect(fireResult.status).toBe(200);

    // 4. Find the overlay child window and check for danmu
    await mainWindow.waitForTimeout(2000);

    const childWindows = electronApp.windows().filter((w) => w !== mainWindow);

    expect(childWindows.length).toBeGreaterThanOrEqual(1);

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
    await ensureOverlayStarted();

    // Login to admin to enable effects
    await httpPost(HTTP_PORT, "/login", { password: "test" });

    const fireResult = await waitForFirePayloadAccepted({
      text: "EFFECT_TEST_SPIN",
      effects: [{ name: "spin" }],
    });

    expect(fireResult.status).toBe(200);

    // Wait for danmu to render
    await new Promise((r) => setTimeout(r, 2000));

    const allWindows = electronApp.windows();
    if (!mainWindow) throw new Error("mainWindow not initialized");
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
    await ensureOverlayStarted();

    // Send 3 danmus and verify all get 200 (overlay connected, messages forwarded)
    const results = [];
    for (let i = 0; i < 3; i++) {
      const res = await waitForFireAccepted(`MULTI_TEST_${i}`, 4);
      results.push(res.status);
      await new Promise((r) => setTimeout(r, 200));
    }

    expect(results).toEqual([200, 200, 200]);
  });
});
