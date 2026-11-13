// Service worker: glue between the Slido tabs, chrome.storage and the
// danmu server. All decisions (what counts as a question, what is new,
// pacing, outcome mapping) live in core.js so they can be tested offline.
import "./core.js";

const Core = globalThis.SlidoDanmuCore;

const DEFAULTS = {
  enabled: true,
  serverUrl: "http://localhost:4000",
  includeAuthor: true,
  // 3 s keeps the bridge under the public /fire per-IP ceiling (20/min)
  // when no fire token is configured.
  minIntervalMs: 3000,
  fireToken: "",
};
const HEARTBEAT_MS = 30_000;

let settings = { ...DEFAULTS };
let bridge = null;
let lastHeartbeatAt = 0;
let lastReportedState = "";

function intervalOf(s) {
  return Math.max(500, Number(s.minIntervalMs) || DEFAULTS.minIntervalMs);
}

async function loadSettings() {
  const stored = await chrome.storage.local.get(["settings"]);
  settings = { ...DEFAULTS, ...(stored.settings || {}) };
  return settings;
}

function serverBase() {
  return String(settings.serverUrl || DEFAULTS.serverUrl).replace(/\/+$/, "");
}

function headers() {
  const h = { "Content-Type": "application/json", "X-Fire-Source": Core.SOURCE };
  if (settings.fireToken) h["X-Fire-Token"] = settings.fireToken;
  return h;
}

// Reads the *current* settings on every call, so changing the server URL
// or token never needs a new bridge (which would lose its queue).
async function postFire(payload) {
  const resp = await fetch(serverBase() + "/fire", {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(payload),
  });
  const body = await resp.text().catch(() => "");
  return { status: resp.status, body: body.slice(0, 300) };
}

// chrome.storage.session survives service-worker restarts (MV3 kills idle
// workers after ~30 s); without it a restart would forget which questions
// were already handled and each event's baseline.
async function getBridge() {
  if (bridge) return bridge;
  await loadSettings();
  const s = await chrome.storage.session.get(["handled", "tabs"]);
  bridge = Core.createBridge({
    post: postFire,
    minIntervalMs: intervalOf(settings),
    includeAuthor: settings.includeAuthor !== false,
    handled: s.handled && typeof s.handled === "object" ? s.handled : {},
    tabs: s.tabs && typeof s.tabs === "object" ? s.tabs : {},
    active: settings.enabled !== false,
    // Without a token, Slido questions would go out on the public lane:
    // unlabelled, counted as poll votes, captcha-gated. Observe only.
    tokenSet: !!settings.fireToken,
  });
  return bridge;
}

async function persist(b) {
  await chrome.storage.session.set({ handled: b.handled(), tabs: b.tabs() });
}

async function heartbeat(force) {
  if (!bridge || !settings.fireToken || settings.enabled === false) return;
  const snap = bridge.snapshot();
  const due = Date.now() - lastHeartbeatAt >= HEARTBEAT_MS;
  if (!force && !due && snap.state === lastReportedState) return;
  lastHeartbeatAt = Date.now();
  lastReportedState = snap.state;
  try {
    const resp = await fetch(serverBase() + "/integrations/slido/status", {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(snap),
    });
    if (resp.status === 401) bridge.noteError("token_invalid");
  } catch (err) {
    console.warn("[slido-danmu] status report failed", err);
  }
}

// Messages are handled one at a time: a page's "opened" mark must land
// before that page's first question list is used as its baseline.
let chain = Promise.resolve();
function serial(fn) {
  chain = chain.then(fn, fn);
  return chain;
}

async function handleBody(msg, tabId) {
  const kind = Core.classifyUrl(msg.url);
  if (!kind) return;
  const b = await getBridge();
  // Ingested even while switched off: ids are learned, nothing is queued.
  b.ingest(kind, String(msg.body || ""), String(tabId), msg.url);
  await persist(b);
  heartbeat(false)
    .then(() => b.idle())
    .then(() => persist(b))
    .then(() => heartbeat(false))
    .catch(() => {});
}

async function handlePageOpen(tabId) {
  const b = await getBridge();
  b.openPage(String(tabId));
  await persist(b);
  await heartbeat(true);
}

chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "local" || !changes.settings) return;
  settings = { ...DEFAULTS, ...(changes.settings.newValue || {}) };
  if (!bridge) return;
  bridge.configure({
    minIntervalMs: intervalOf(settings),
    includeAuthor: settings.includeAuthor !== false,
    tokenSet: !!settings.fireToken,
  });
  bridge.setActive(settings.enabled !== false);
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  const tabId = sender && sender.tab ? sender.tab.id : -1;
  if (msg && msg.type === "slido_body") {
    serial(() => handleBody(msg, tabId)).catch((err) => console.warn("[slido-danmu] handler error", err));
    sendResponse({ ok: true });
    return false;
  }
  if (msg && msg.type === "slido_page_open") {
    serial(() => handlePageOpen(tabId)).catch((err) => console.warn("[slido-danmu] page-open error", err));
    sendResponse({ ok: true });
    return false;
  }
  if (msg && msg.type === "slido_ping") {
    // The worker may have been restarted since the last event; rebuild the
    // bridge from session storage so the open tab keeps reporting.
    getBridge()
      .then(() => heartbeat(false))
      .catch(() => {});
    sendResponse({ ok: true });
    return false;
  }
  if (msg && msg.type === "get_stats") {
    sendResponse({ ok: true, stats: bridge ? bridge.snapshot() : null });
    return false;
  }
  if (msg && msg.type === "test_connection") {
    loadSettings().then(async () => {
      if (!settings.fireToken) {
        sendResponse({ ok: false, error: "token_missing" });
        return;
      }
      try {
        const res = await postFire({ text: "Slido → Danmu connected ✓", fingerprint: "slido:test" });
        const verdict = Core.classifyFireResponse(res.status, res.body);
        sendResponse(
          verdict.outcome === "sent"
            ? { ok: true }
            : { ok: false, error: verdict.error || `HTTP ${res.status}` },
        );
      } catch (err) {
        sendResponse({ ok: false, error: String(err.message || err) });
      }
    });
    return true;
  }
  return false;
});
