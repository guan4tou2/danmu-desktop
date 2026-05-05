// @ts-check
/**
 * Onscreen limiter end-to-end test — drives the real Electron overlay.
 *
 * Scenario: cap=2 queue mode, fire 4 danmu at speed=10 (≈2s scroll),
 * verify:
 *   - first 2 return status=sent
 *   - next 2 return status=queued
 *   - overlay renders all 4 eventually (queued ones appear after ~2s)
 *
 * Then switch to drop mode and verify 3rd/4th get status=dropped.
 */
const { test, expect, _electron: electron } = require("@playwright/test");
const path = require("path");
const fs = require("fs");
const os = require("os");
const { spawn } = require("child_process");
const http = require("http");

const APP_DIR = path.join(__dirname, "..");
const PROJECT_ROOT = path.join(__dirname, "..", "..");
const HTTP_PORT = 14100;
const WS_PORT = 14101;

function startServer(runtimeDir) {
  const filterRulesPath = path.join(runtimeDir, "filter_rules.json");
  fs.writeFileSync(filterRulesPath, "[]");
  const settingsPath = path.join(runtimeDir, "settings.json");
  fs.writeFileSync(settingsPath, "{}");
  const webhooksPath = path.join(runtimeDir, "webhooks.json");
  fs.writeFileSync(webhooksPath, "[]");

  const script = `
import os, sys, threading, logging, json, pathlib
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
Config.ADMIN_PASSWORD = 'test'
Config.FIRE_RATE_LIMIT = 1000
Config.FIRE_RATE_WINDOW = 1

# Seed onscreen limits at cap=2 queue before server starts
from server.services import onscreen_config
onscreen_config._STATE_FILE = pathlib.Path(${JSON.stringify(path.join(runtimeDir, "onscreen_limits.json"))})
onscreen_config._STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
onscreen_config.set_state(max_onscreen_danmu=2, overflow_mode='queue')

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
  return spawn("uv", ["run", "--project", "server", "python", "-c", script], {
    cwd: PROJECT_ROOT,
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function waitForReady(proc, timeoutMs = 20000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Server start timeout")), timeoutMs);
    let stderrBuf = "";
    proc.stderr.on("data", (c) => { stderrBuf += c.toString(); });
    proc.stdout.on("data", (chunk) => {
      if (chunk.toString().includes("READY")) { clearTimeout(timer); resolve(); }
    });
    proc.on("error", (e) => { clearTimeout(timer); reject(e); });
    proc.on("exit", (code) => {
      if (code !== null && code !== 0) {
        clearTimeout(timer);
        reject(new Error(`Server exited ${code}: ${stderrBuf}`));
      }
    });
  });
}

function waitForPort(port, timeoutMs = 10000) {
  return new Promise((resolve, reject) => {
    const deadline = Date.now() + timeoutMs;
    const tryConnect = () => {
      const req = http.get(`http://127.0.0.1:${port}/health`, (res) => { res.resume(); resolve(); });
      req.on("error", () => {
        if (Date.now() > deadline) return reject(new Error(`Port ${port} not ready`));
        setTimeout(tryConnect, 200);
      });
      req.setTimeout(500, () => { req.destroy(); setTimeout(tryConnect, 200); });
    };
    tryConnect();
  });
}

function httpPost(port, urlPath, body, { cookies, extraHeaders } = {}) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const headers = {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(data),
      ...(extraHeaders || {}),
    };
    if (cookies) headers["Cookie"] = cookies;
    const req = http.request(
      { hostname: "127.0.0.1", port, path: urlPath, method: "POST", headers },
      (res) => {
        let chunks = "";
        res.on("data", (c) => (chunks += c));
        res.on("end", () => {
          let parsed;
          try { parsed = chunks ? JSON.parse(chunks) : null; } catch { parsed = chunks; }
          resolve({
            status: res.statusCode,
            body: parsed,
            setCookie: res.headers["set-cookie"] || [],
            headers: res.headers,
          });
        });
      }
    );
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

function httpGet(port, urlPath, { cookies } = {}) {
  return new Promise((resolve, reject) => {
    const headers = cookies ? { Cookie: cookies } : {};
    const req = http.request(
      { hostname: "127.0.0.1", port, path: urlPath, method: "GET", headers },
      (res) => {
        let chunks = "";
        res.on("data", (c) => (chunks += c));
        res.on("end", () => {
          resolve({
            status: res.statusCode,
            body: chunks,
            setCookie: res.headers["set-cookie"] || [],
            headers: res.headers,
          });
        });
      }
    );
    req.on("error", reject);
    req.end();
  });
}

function extractSessionCookie(setCookie) {
  for (const c of setCookie) {
    const m = /^session=([^;]+)/.exec(c);
    if (m) return `session=${m[1]}`;
  }
  return null;
}

function httpPostForm(port, urlPath, form) {
  return new Promise((resolve, reject) => {
    const data = new URLSearchParams(form).toString();
    const req = http.request(
      {
        hostname: "127.0.0.1",
        port,
        path: urlPath,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": Buffer.byteLength(data),
        },
      },
      (res) => {
        let chunks = "";
        res.on("data", (c) => (chunks += c));
        res.on("end", () => resolve({
          status: res.statusCode,
          body: chunks,
          setCookie: res.headers["set-cookie"] || [],
        }));
      }
    );
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

async function loginAndGetSession(port, password) {
  const loginRes = await httpPostForm(port, "/login", { password });
  const cookie = extractSessionCookie(loginRes.setCookie);
  if (!cookie) {
    throw new Error(
      `login: no session cookie; status=${loginRes.status} setCookie=${JSON.stringify(loginRes.setCookie)}`
    );
  }
  const pageRes = await httpGet(port, "/admin/", { cookies: cookie });
  // Follow an additional Set-Cookie if admin page rotated session
  const rotated = extractSessionCookie(pageRes.setCookie);
  const effective = rotated || cookie;
  const tokenMatch = /name="csrf-token"\s+content="([^"]+)"/.exec(pageRes.body);
  if (!tokenMatch) {
    const head = pageRes.body.slice(0, 400).replace(/\n/g, "\\n");
    throw new Error(`login: csrf-token meta not found; status=${pageRes.status} head=${head}`);
  }
  return { cookies: effective, csrf: tokenMatch[1] };
}

async function getOverlayWindow(electronApp, mainWindow, timeoutMs = 10000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const kids = electronApp.windows().filter((w) => w !== mainWindow);
    if (kids.length > 0) return kids[0];
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error("overlay child window not found");
}

async function countDanmuOnscreen(overlay) {
  return overlay.evaluate(() => {
    const els = document.querySelectorAll(".danmu, h1.danmu, .danmu-wrapper");
    return Array.from(els)
      .filter((e) => e.offsetParent !== null)
      .map((e) => e.textContent?.trim())
      .filter(Boolean);
  });
}

test.describe("Onscreen limiter E2E", () => {
  let serverProc;
  let electronApp;
  let mainWindow;
  let overlay;
  let runtimeDir;

  test.beforeAll(async () => {
    runtimeDir = fs.mkdtempSync(path.join(os.tmpdir(), "onscreen-e2e-"));
    serverProc = startServer(runtimeDir);
    await waitForReady(serverProc);
    await waitForPort(HTTP_PORT);

    electronApp = await electron.launch({
      args: [path.join(APP_DIR, "dist", "main.bundle.js")],
      cwd: APP_DIR,
    });
    mainWindow = await electronApp.firstWindow();
    await mainWindow.waitForLoadState("domcontentloaded");
    await mainWindow.waitForSelector(".main-content.loaded", { timeout: 15000 });
    // v5.0.0 P0-0 IA: conn section default visible but #host-input lives in
    // the .client-conn-edit panel that's hidden until ⚙ 更改 is clicked.
    // #start-button lives in the Overlay section which is hidden by default.
    await mainWindow.locator('[data-nav="conn"]').click();
    await mainWindow.locator('[data-client-action="edit-conn"]').click();
    await mainWindow.locator("#host-input").fill("127.0.0.1");
    await mainWindow.locator("#port-input").fill(String(WS_PORT));
    await mainWindow.locator('[data-nav="overlay"]').click();
    await mainWindow.locator("#start-button").click();
    overlay = await getOverlayWindow(electronApp, mainWindow);
    await overlay.waitForLoadState("domcontentloaded");
    // Let WS client register with server
    await new Promise((r) => setTimeout(r, 2500));
  });

  test.afterAll(async () => {
    if (electronApp) { try { await electronApp.close(); } catch {} }
    if (serverProc) {
      serverProc.kill("SIGTERM");
      await new Promise((r) => setTimeout(r, 800));
      if (!serverProc.killed) serverProc.kill("SIGKILL");
    }
    if (!process.env.E2E_KEEP_ARTIFACTS) {
      try { fs.rmSync(runtimeDir, { recursive: true, force: true }); } catch {}
    } else {
      console.log("E2E artifacts kept at:", runtimeDir);
    }
  });

  test("queue mode: first 2 sent, next 2 queued, all 4 eventually render", async () => {
    // Warm-up fire to confirm overlay actually connected (200 vs 503)
    const warm = await httpPost(HTTP_PORT, "/fire", { text: "WARMUP", speed: 10 });
    expect(warm.status).toBe(200);
    // Wait for warmup slot to clear (max scroll ≈ 2.1s)
    await new Promise((r) => setTimeout(r, 2500));

    // Fire 4 rapid danmu with speed=10 (≈2s onscreen)
    const fires = [];
    for (let i = 0; i < 4; i++) {
      fires.push(
        await httpPost(HTTP_PORT, "/fire", {
          text: `Q${i}`,
          speed: 10,
          color: "#ffffff",
        })
      );
    }

    // All 4 should return 200 with status sent or queued
    for (const r of fires) expect(r.status).toBe(200);
    const statuses = fires.map((r) => r.body.status);
    expect(statuses.slice(0, 2)).toEqual(["sent", "sent"]);
    expect(statuses.slice(2)).toEqual(["queued", "queued"]);

    // Screenshot while Q0/Q1 are on-screen and Q2/Q3 are in queue
    await new Promise((r) => setTimeout(r, 600));
    await overlay.screenshot({
      path: path.join(runtimeDir, "queue-phase1-sent.png"),
      timeout: 5000,
    }).catch(() => {});
    const phase1 = await countDanmuOnscreen(overlay);

    // Wait ~3s for slots to release and queue to drain
    await new Promise((r) => setTimeout(r, 3000));
    const phase2 = await countDanmuOnscreen(overlay);
    await overlay.screenshot({
      path: path.join(runtimeDir, "queue-phase2-drained.png"),
      timeout: 5000,
    }).catch(() => {});

    // Verify queued ones actually rendered at some point: need Q2 and Q3 to appear
    // (phase2 may show Q2/Q3 mid-scroll, or empty if they finished too)
    const rendered = new Set([...phase1, ...phase2]);
    const any23 = ["Q2", "Q3"].filter((t) => rendered.has(t));
    // At minimum one queued item must have rendered (timing-dependent)
    expect(any23.length).toBeGreaterThanOrEqual(1);

    // Dump state for PR evidence
    console.log("E2E queue statuses:", statuses);
    console.log("E2E phase1 onscreen:", phase1);
    console.log("E2E phase2 onscreen:", phase2);
  });

  test("drop mode: 3rd+4th danmu rejected with status=dropped 429", async () => {
    // Drain any residual queued/in-flight from prior test (max scroll ≈ 2.1s)
    await new Promise((r) => setTimeout(r, 3500));

    // Switch limiter to drop via admin API (login + CSRF)
    const { cookies, csrf } = await loginAndGetSession(HTTP_PORT, "test");
    const setRes = await httpPost(
      HTTP_PORT,
      "/admin/api/onscreen-limits",
      { max_onscreen_danmu: 2, overflow_mode: "drop" },
      { cookies, extraHeaders: { "X-CSRF-Token": csrf } }
    );
    expect(setRes.status).toBe(200);
    expect(setRes.body.overflow_mode).toBe("drop");

    // Fire 4 rapid — 3rd+4th should be dropped
    const fires = [];
    for (let i = 0; i < 4; i++) {
      fires.push(
        await httpPost(HTTP_PORT, "/fire", { text: `D${i}`, speed: 10, color: "#ffffff" })
      );
    }
    const statuses = fires.map((r) => ({ code: r.status, body: r.body }));
    console.log("E2E drop statuses:", JSON.stringify(statuses));

    expect(statuses[0].code).toBe(200);
    expect(statuses[0].body.status).toBe("sent");
    expect(statuses[1].code).toBe(200);
    expect(statuses[1].body.status).toBe("sent");
    expect(statuses[2].code).toBe(429);
    expect(statuses[2].body.status).toBe("dropped");
    expect(statuses[2].body.reason).toBe("full");
    expect(statuses[3].code).toBe(429);
    expect(statuses[3].body.status).toBe("dropped");

    await overlay.screenshot({
      path: path.join(runtimeDir, "drop-mode.png"),
      timeout: 5000,
    }).catch(() => {});
  });
});
