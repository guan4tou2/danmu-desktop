// Service worker: receives candidate messages from content scripts, dedups
// them, applies filters, and POSTs to the danmu-desktop /fire endpoint.

const DEFAULTS = {
  enabled: true,
  serverUrl: "http://localhost:4000",
  mode: "live",          // "live" | "dry-run"
  includeAuthor: true,
  minIntervalMs: 800,    // per-message send floor (rate limit)
  dedupTtlMs: 5 * 60_000,
  maxTextLen: 100,       // server FireRequestSchema caps at 100
  color: "",             // empty = server/theme default
  opacity: null,
  size: null,
  speed: null,
};

const seen = new Map();        // key -> timestamp
let lastSendAt = 0;
let recentStats = { forwarded: 0, skipped: 0, errors: 0, lastError: "" };

async function getSettings() {
  const stored = await chrome.storage.local.get(["settings"]);
  return { ...DEFAULTS, ...(stored.settings || {}) };
}

function pruneSeen(ttl) {
  const cutoff = Date.now() - ttl;
  for (const [k, t] of seen) {
    if (t < cutoff) seen.delete(k);
  }
}

function stableKey(cand) {
  if (cand.id) return `id:${cand.id}`;
  // Fall back to content hash-ish key. Good enough for 5-min dedup.
  const text = (cand.text || "").slice(0, 160).trim().toLowerCase();
  const author = (cand.author || "").slice(0, 40).trim().toLowerCase();
  return `t:${author}|${text}`;
}

function truncate(text, max) {
  if (!text) return text;
  const s = String(text).replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;
  return s.slice(0, Math.max(1, max - 1)) + "…";
}

function composeDanmuText(cand, settings) {
  const base = truncate(cand.text || "", settings.maxTextLen);
  if (!settings.includeAuthor || !cand.author) return base;
  const prefix = `${cand.author}: `;
  const room = settings.maxTextLen - prefix.length;
  if (room < 4) return base; // not worth prefixing
  return prefix + truncate(cand.text, room);
}

function buildPayload(text, settings) {
  const payload = { text };
  if (settings.color) payload.color = settings.color;
  if (Number.isInteger(settings.opacity)) payload.opacity = settings.opacity;
  if (Number.isInteger(settings.size)) payload.size = settings.size;
  if (Number.isInteger(settings.speed)) payload.speed = settings.speed;
  payload.fingerprint = "slido-extension";
  return payload;
}

async function postFire(serverUrl, payload) {
  const url = serverUrl.replace(/\/+$/, "") + "/fire";
  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    // credentials intentionally omitted: /fire is public, no cookies needed.
  });
  if (!resp.ok) {
    const body = await resp.text().catch(() => "");
    throw new Error(`HTTP ${resp.status}: ${body.slice(0, 200)}`);
  }
  return true;
}

async function handleCandidates(candidates) {
  const settings = await getSettings();
  if (!settings.enabled) return;
  if (!Array.isArray(candidates) || !candidates.length) return;

  pruneSeen(settings.dedupTtlMs);

  for (const cand of candidates) {
    const key = stableKey(cand);
    if (seen.has(key)) {
      recentStats.skipped++;
      continue;
    }
    seen.set(key, Date.now());

    const text = composeDanmuText(cand, settings);
    if (!text) {
      recentStats.skipped++;
      continue;
    }

    // Per-message rate-limit floor (server also rate-limits; this avoids
    // hammering it when Slido dumps a backlog on page load).
    const now = Date.now();
    const gap = now - lastSendAt;
    if (gap < settings.minIntervalMs) {
      await new Promise((r) => setTimeout(r, settings.minIntervalMs - gap));
    }
    lastSendAt = Date.now();

    const payload = buildPayload(text, settings);

    if (settings.mode === "dry-run") {
      console.info("[slido-danmu] dry-run", payload);
      recentStats.forwarded++;
      continue;
    }

    try {
      await postFire(settings.serverUrl, payload);
      recentStats.forwarded++;
    } catch (err) {
      recentStats.errors++;
      recentStats.lastError = String(err.message || err);
      console.warn("[slido-danmu] POST failed", err);
    }
  }
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg && msg.type === "slido_candidates") {
    handleCandidates(msg.candidates).catch((err) =>
      console.warn("[slido-danmu] handler error", err),
    );
    sendResponse({ ok: true });
    return true;
  }
  if (msg && msg.type === "get_stats") {
    sendResponse({ ok: true, stats: recentStats, seenSize: seen.size });
    return true;
  }
  if (msg && msg.type === "test_connection") {
    getSettings().then(async (settings) => {
      try {
        await postFire(settings.serverUrl, {
          text: "Slido → Danmu connected ✓",
          fingerprint: "slido-extension",
        });
        sendResponse({ ok: true });
      } catch (err) {
        sendResponse({ ok: false, error: String(err.message || err) });
      }
    });
    return true;
  }
});
