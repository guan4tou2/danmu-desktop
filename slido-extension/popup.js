const DEFAULTS = {
  enabled: true,
  serverUrl: "http://localhost:4000",
  mode: "live",
  includeAuthor: true,
  minIntervalMs: 800,
  maxTextLen: 100,
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
  $("mode").value = s.mode;
  $("includeAuthor").checked = !!s.includeAuthor;
  $("minIntervalMs").value = s.minIntervalMs;
  $("maxTextLen").value = s.maxTextLen;

  try {
    const res = await chrome.runtime.sendMessage({ type: "get_stats" });
    if (res?.ok) {
      const { forwarded, skipped, errors, lastError } = res.stats;
      setStatus(
        `forwarded ${forwarded} · skipped ${skipped} · errors ${errors}` +
          (lastError ? ` · ${lastError}` : ""),
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
    mode: $("mode").value,
    includeAuthor: $("includeAuthor").checked,
    minIntervalMs: Math.max(0, parseInt($("minIntervalMs").value, 10) || 0),
    maxTextLen: Math.min(
      100,
      Math.max(10, parseInt($("maxTextLen").value, 10) || 100),
    ),
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
