const DEFAULTS = {
  enabled: true,
  serverUrl: "http://localhost:4000",
  includeAuthor: true,
  minIntervalMs: 3000,
  fireToken: "",
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
      const { sent, blocked, failed, dropped, error } = res.stats;
      setStatus(
        `sent ${sent} · blocked ${blocked} · failed ${failed} · dropped ${dropped}` +
          (error ? ` · ${error}` : ""),
        error ? "err" : "",
      );
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
    else setStatus(`Failed: ${res?.error || "unknown error"}`, "err");
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
