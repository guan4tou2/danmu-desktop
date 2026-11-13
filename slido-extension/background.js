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

let bridge = null;
let bridgeKey = "";
let lastHeartbeatAt = 0;
let lastReportedState = "";

async function getSettings() {
  const stored = await chrome.storage.local.get(["settings"]);
  return { ...DEFAULTS, ...(stored.settings || {}) };
}

function serverBase(settings) {
  return String(settings.serverUrl || DEFAULTS.serverUrl).replace(/\/+$/, "");
}

function headersFor(settings) {
  const headers = { "Content-Type": "application/json", "X-Fire-Source": Core.SOURCE };
  if (settings.fireToken) headers["X-Fire-Token"] = settings.fireToken;
  return headers;
}

async function postFire(settings, payload) {
  const resp = await fetch(serverBase(settings) + "/fire", {
    method: "POST",
    headers: headersFor(settings),
    body: JSON.stringify(payload),
  });
  const body = await resp.text().catch(() => "");
  return { status: resp.status, body: body.slice(0, 300) };
}

// chrome.storage.session survives service-worker restarts (MV3 kills idle
// workers after ~30 s); without it a restart would forget which questions
// were already sent.
async function loadSession() {
  const s = await chrome.storage.session.get(["seenIds", "tabArmedAt", "enabledAt"]);
  return {
    seenIds: Array.isArray(s.seenIds) ? s.seenIds : [],
    tabArmedAt: s.tabArmedAt && typeof s.tabArmedAt === "object" ? s.tabArmedAt : {},
    enabledAt: Number.isFinite(s.enabledAt) ? s.enabledAt : null,
  };
}

async function ensureBridge(settings) {
  const key = [settings.serverUrl, settings.fireToken, settings.minIntervalMs, settings.includeAuthor].join("|");
  if (bridge && bridgeKey === key && !bridge.isStopped()) return bridge;
  const session = await loadSession();
  if (bridge) bridge.stop();
  bridgeKey = key;
  bridge = Core.createBridge({
    post: (payload) => postFire(settings, payload),
    minIntervalMs: Math.max(500, Number(settings.minIntervalMs) || DEFAULTS.minIntervalMs),
    includeAuthor: settings.includeAuthor !== false,
    seenIds: session.seenIds,
  });
  return bridge;
}

async function armedAtFor(tabId) {
  const session = await loadSession();
  let enabledAt = session.enabledAt;
  if (enabledAt == null) {
    // Session storage is wiped on browser restart. Pin the start point
    // once; a fresh Date.now() per call would keep moving it past every
    // question that is already in flight.
    enabledAt = Date.now();
    await chrome.storage.session.set({ enabledAt });
  }
  const tabAt = session.tabArmedAt[String(tabId)] ?? enabledAt;
  return Math.max(enabledAt, tabAt);
}

async function heartbeat(settings, force) {
  if (!bridge || !settings.fireToken) return;
  const snap = bridge.snapshot();
  const due = Date.now() - lastHeartbeatAt >= HEARTBEAT_MS;
  if (!force && !due && snap.state === lastReportedState) return;
  lastHeartbeatAt = Date.now();
  lastReportedState = snap.state;
  try {
    await fetch(serverBase(settings) + "/integrations/slido/status", {
      method: "POST",
      headers: headersFor(settings),
      body: JSON.stringify(snap),
    });
  } catch (err) {
    console.warn("[slido-danmu] status report failed", err);
  }
}

// Messages are handled one at a time: the page-open stamp must be stored
// before the first question list from that page is judged against it,
// or the page's backlog would be compared with an older start point.
let chain = Promise.resolve();
function serial(fn) {
  chain = chain.then(fn, fn);
  return chain;
}

async function handleBody(msg, tabId) {
  const settings = await getSettings();
  if (!settings.enabled) return;
  const kind = Core.classifyUrl(msg.url);
  if (!kind) return;
  const b = await ensureBridge(settings);
  b.ingest(kind, String(msg.body || ""), await armedAtFor(tabId));
  await chrome.storage.session.set({ seenIds: b.seenIds() });
  // Sending is paced; report once it drains, without holding up the queue.
  heartbeat(settings, false)
    .then(() => b.idle())
    .then(() => heartbeat(settings, false))
    .catch(() => {});
}

async function handlePageOpen(tabId) {
  const session = await loadSession();
  session.tabArmedAt[String(tabId)] = Date.now();
  await chrome.storage.session.set({ tabArmedAt: session.tabArmedAt });
  const settings = await getSettings();
  if (settings.enabled) {
    await ensureBridge(settings);
    await heartbeat(settings, true);
  }
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.session.set({ enabledAt: Date.now() });
});

// Turning the switch back on re-arms the "only questions from now on" rule.
chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "local" || !changes.settings) return;
  const before = (changes.settings.oldValue || {}).enabled;
  const after = (changes.settings.newValue || {}).enabled;
  if (after === false && bridge) {
    bridge.stop();
    bridge = null;
  }
  if (after && before === false) chrome.storage.session.set({ enabledAt: Date.now() });
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
    // bridge (counters start over) so the open tab keeps reporting.
    getSettings()
      .then(async (s) => {
        if (!s.enabled) return;
        await ensureBridge(s);
        await heartbeat(s, false);
      })
      .catch(() => {});
    sendResponse({ ok: true });
    return false;
  }
  if (msg && msg.type === "get_stats") {
    sendResponse({ ok: true, stats: bridge ? bridge.snapshot() : null });
    return false;
  }
  if (msg && msg.type === "test_connection") {
    getSettings().then(async (settings) => {
      try {
        const res = await postFire(settings, { text: "Slido → Danmu connected ✓", fingerprint: "slido:test" });
        const verdict = Core.classifyFireResponse(res.status, res.body);
        sendResponse(verdict.outcome === "sent" ? { ok: true } : { ok: false, error: `HTTP ${res.status}` });
      } catch (err) {
        sendResponse({ ok: false, error: String(err.message || err) });
      }
    });
    return true;
  }
  return false;
});
