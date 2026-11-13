const DEFAULTS = {
  enabled: true,
  serverUrl: "http://localhost:4000",
  includeAuthor: true,
  minIntervalMs: 3000,
  fireToken: "",
};

const ERROR_TEXT = {
  token_invalid: "Fire token rejected",
  captcha_required: "Captcha required (set a fire token)",
  rate_limited: "Rate-limited by the danmu server",
  screen_full: "Screen full",
  no_overlay: "No overlay connected",
  rejected: "Rejected by the danmu server",
  feed_unrecognized: "Slido format not recognized",
  server_unreachable: "Danmu server unreachable",
};

const $ = (id) => document.getElementById(id);
const statusEl = $("status");

function setStatus(msg, kind) {
  statusEl.textContent = msg;
  statusEl.className = "status" + (kind ? " " + kind : "");
}

async function load() {
  const stored = await chrome.storage.local.get(["settings"]);
  const s = { ...DEFAULTS, ...(stored.settings || {}) };
  $("enabled").checked = !!s.enabled;
  $("serverUrl").value = s.serverUrl;
  $("fireToken").value = s.fireToken || "";
  $("includeAuthor").checked = !!s.includeAuthor;
  $("minIntervalMs").value = s.minIntervalMs;

  try {
    const res = await chrome.runtime.sendMessage({ type: "get_stats" });
    if (res?.ok && res.stats) {
      const { sent, held, blocked, failed, dropped, error } = res.stats;
      const counts = `sent ${sent} · held ${held} · blocked ${blocked} · failed ${failed} · dropped ${dropped}`;
      setStatus(error ? `${ERROR_TEXT[error] || error} · ${counts}` : counts, error ? "err" : "");
    }
  } catch {
    // Service worker might be asleep; no stats yet.
  }
}

async function save() {
  const settings = {
    enabled: $("enabled").checked,
    serverUrl: $("serverUrl").value.trim() || DEFAULTS.serverUrl,
    fireToken: $("fireToken").value.trim(),
    includeAuthor: $("includeAuthor").checked,
    minIntervalMs: Math.min(10000, Math.max(500, parseInt($("minIntervalMs").value, 10) || DEFAULTS.minIntervalMs)),
  };
  await chrome.storage.local.set({ settings });
  setStatus("Saved.", "ok");
}

async function testFire() {
  const btn = $("test");
  btn.disabled = true;
  setStatus("Sending…");
  try {
    const res = await chrome.runtime.sendMessage({ type: "test_connection" });
    if (res?.ok) setStatus("Connected — a test danmu should appear on the overlay.", "ok");
    else setStatus(`Failed: ${ERROR_TEXT[res?.error] || res?.error || "unknown error"}`, "err");
  } catch (err) {
    setStatus(`Failed: ${err.message || err}`, "err");
  } finally {
    btn.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  load();
  $("save").addEventListener("click", save);
  $("test").addEventListener("click", testFire);
});
