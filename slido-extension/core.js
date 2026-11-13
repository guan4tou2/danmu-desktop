// Pure bridge logic shared by the service worker (background.js) and the
// jest suite (server/tests-js/slido-extension-core.test.js). No chrome.*
// and no DOM here, so every rule below can be tested offline against the
// response shapes recorded in server/tests-js/fixtures/slido/.
//
// Loaded two ways: as a side-effect module import from background.js
// (exposes globalThis.SlidoDanmuCore) and via require() under jest.
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module && module.exports) module.exports = api;
  else root.SlidoDanmuCore = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const VERSION = "0.3.0";
  const SOURCE = "slido";

  // Only these two transports carry questions. Matching on the path shape
  // rather than on every *.sli.do response is what replaced the old
  // field-name guessing (which also turned event titles, poll options and
  // the host's own name into danmu).
  const QUESTIONS_URL = /\/events\/[^/?#]+\/questions(?:[?#]|$)/;
  const STREAM_URL = /\/stream-sio\b|\/socket\.io\//;

  // Event names come from Slido's participant bundle (enum entry
  // SlidoEventQuestionUpdate, and the pair its own dev tool emits when it
  // fakes an incoming question). Patches carry partial objects (score,
  // answered flag) and are deliberately ignored.
  const QUESTION_EVENTS = new Set(["slido.event.question.update", "newQuestion"]);

  const MAX_TEXT = 100; // FireRequestSchema.text
  const MAX_NICKNAME = 20; // FireRequestSchema.nickname
  const MAX_SEEN = 2000;

  function classifyUrl(url) {
    if (typeof url !== "string" || !url) return null;
    let parsed;
    try {
      parsed = new URL(url, "https://app.sli.do/");
    } catch (_) {
      return null;
    }
    if (!/(^|\.)(sli\.do|slido\.com)$/i.test(parsed.hostname)) return null;
    const path = parsed.pathname + (parsed.search ? "?" : "");
    if (QUESTIONS_URL.test(path)) return "questions";
    if (STREAM_URL.test(parsed.pathname)) return "stream";
    return null;
  }

  function normalizeQuestion(raw) {
    if (!raw || typeof raw !== "object") return null;
    const id = raw.event_question_id;
    if ((typeof id !== "number" && typeof id !== "string") || id === "") return null;
    if (typeof raw.text !== "string" || !raw.text.trim()) return null;
    const author = raw.author && typeof raw.author === "object" ? raw.author : {};
    const authorId = raw.event_user_id != null ? raw.event_user_id : author.event_user_id;
    const stamp = raw.date_published || raw.date_created;
    return {
      id: String(id),
      text: raw.text.replace(/\s+/g, " ").trim(),
      author: !raw.is_anonymous && typeof author.name === "string" ? author.name.trim() : "",
      authorId: authorId != null ? String(authorId) : "",
      publishedAt: typeof stamp === "string" ? Date.parse(stamp) : NaN,
      // Replies live under "/questions/<id>"; held-for-review questions are
      // is_public:false until the Slido moderator approves them.
      isReply: typeof raw.path === "string" && raw.path !== "/questions",
      isPublic: raw.is_public !== false,
    };
  }

  function _listFromJson(json) {
    if (Array.isArray(json)) return json;
    if (json && typeof json === "object") {
      for (const key of ["items", "questions", "data"]) {
        if (Array.isArray(json[key])) return json[key];
      }
    }
    return null;
  }

  // socket.io v4 text frames: engine.io type "4" (message) + socket.io type
  // "2" (event), optional "/namespace," and ack id, then a JSON array.
  // Long-polling bodies batch several packets separated by \x1e.
  const SIO_EVENT = /^42(?:\/[^,]*,)?\d*(\[[\s\S]*\])$/;

  function _questionsFromStream(text) {
    const out = [];
    let sawQuestionEvent = false;
    for (const packet of String(text).split("\x1e")) {
      const m = SIO_EVENT.exec(packet.trim());
      if (!m) continue;
      let arr;
      try {
        arr = JSON.parse(m[1]);
      } catch (_) {
        continue;
      }
      if (!Array.isArray(arr) || !QUESTION_EVENTS.has(arr[0])) continue;
      sawQuestionEvent = true;
      for (const payload of arr.slice(1)) {
        const body = payload && typeof payload === "object" ? payload.params || payload.data || payload : null;
        const q = normalizeQuestion(body);
        if (q) out.push(q);
      }
    }
    return { questions: out, recognized: !sawQuestionEvent || out.length > 0 };
  }

  // `recognized:false` means "this looked like a question feed but none of
  // it parsed" — the schema-drift signal surfaced to the admin card.
  function parseBody(kind, text) {
    if (kind === "stream") return _questionsFromStream(text);
    if (kind !== "questions") return { questions: [], recognized: true };
    let json;
    try {
      json = JSON.parse(text);
    } catch (_) {
      return { questions: [], recognized: false };
    }
    const list = _listFromJson(json);
    if (!list) return { questions: [], recognized: false };
    const questions = list.map(normalizeQuestion).filter(Boolean);
    return { questions, recognized: list.length === 0 || questions.length > 0 };
  }

  // A question with no timestamp is treated as history: dropping one new
  // question is better than replaying a 200-question backlog onto the screen.
  function isNewQuestion(q, armedAt) {
    return Number.isFinite(q.publishedAt) && Number.isFinite(armedAt) && q.publishedAt >= armedAt;
  }

  function _truncate(s, max) {
    const chars = Array.from(s);
    return chars.length <= max ? s : chars.slice(0, max - 1).join("") + "…";
  }

  function buildFirePayload(q, opts) {
    const payload = {
      text: _truncate(q.text, MAX_TEXT),
      // Per-participant fingerprint so the admin feed's "block this person"
      // targets one Slido participant instead of the whole integration.
      fingerprint: q.authorId ? `slido:${q.authorId}` : `slido:q${q.id}`,
    };
    if ((!opts || opts.includeAuthor !== false) && q.author) {
      payload.nickname = _truncate(q.author, MAX_NICKNAME);
    }
    return payload;
  }

  // Maps a /fire reply onto the three counters the admin card shows.
  function classifyFireResponse(status, bodyText) {
    if (status === 200 || status === 202) return { outcome: "sent", error: "" };
    if (status === 400 || status === 403) return { outcome: "blocked", error: "" };
    if (status === 429) return { outcome: "failed", error: "rate_limited" };
    if (status === 503 && /overlay/i.test(String(bodyText || ""))) {
      return { outcome: "failed", error: "no_overlay" };
    }
    if (!status) return { outcome: "failed", error: "server_unreachable" };
    return { outcome: "failed", error: "rejected" };
  }

  // deps.post(payload) -> Promise<{status, body}> (throw = network error)
  // deps.now() -> ms; deps.sleep(ms) -> Promise
  function createBridge(deps) {
    const now = deps.now || (() => Date.now());
    const sleep = deps.sleep || ((ms) => new Promise((r) => setTimeout(r, ms)));
    const minIntervalMs = deps.minIntervalMs != null ? deps.minIntervalMs : 3000;
    const maxQueue = deps.maxQueue != null ? deps.maxQueue : 10;
    const includeAuthor = deps.includeAuthor !== false;

    const seen = new Set(deps.seenIds || []);
    const queue = [];
    const stats = { sent: 0, blocked: 0, failed: 0, dropped: 0, skipped: 0, lastError: "" };
    let stopped = false;
    let pumping = null;
    let lastSentAt = -Infinity;

    function _remember(id) {
      seen.add(id);
      if (seen.size > MAX_SEEN) seen.delete(seen.values().next().value);
    }

    function ingest(kind, text, armedAt) {
      if (stopped) return 0;
      const parsed = parseBody(kind, text);
      if (!parsed.recognized) stats.lastError = "feed_unrecognized";
      else if (stats.lastError === "feed_unrecognized") stats.lastError = "";
      let added = 0;
      for (const q of parsed.questions) {
        if (q.isReply || !q.isPublic || seen.has(q.id)) continue;
        _remember(q.id);
        if (!isNewQuestion(q, armedAt)) {
          stats.skipped++;
          continue;
        }
        if (queue.length >= maxQueue) {
          // Oldest pending goes first: a late question is worth less on a
          // live screen than the one just asked.
          queue.shift();
          stats.dropped++;
        }
        queue.push(q);
        added++;
      }
      if (added) _pump();
      return added;
    }

    function _pump() {
      if (pumping) return pumping;
      pumping = (async () => {
        try {
          while (queue.length && !stopped) {
            const wait = lastSentAt + minIntervalMs - now();
            if (wait > 0) await sleep(wait);
            if (stopped) break;
            const q = queue.shift();
            if (!q) break;
            lastSentAt = now();
            await _sendOne(q);
          }
        } finally {
          pumping = null;
        }
      })();
      return pumping;
    }

    async function _sendOne(q) {
      let res;
      try {
        res = await deps.post(buildFirePayload(q, { includeAuthor }));
      } catch (_) {
        res = { status: 0, body: "" };
      }
      const verdict = classifyFireResponse(res && res.status, res && res.body);
      stats[verdict.outcome]++;
      if (verdict.error) stats.lastError = verdict.error;
      else if (stats.lastError !== "feed_unrecognized") stats.lastError = "";
    }

    function stop() {
      stopped = true;
      queue.length = 0;
    }

    function snapshot() {
      return {
        state: stats.lastError ? "error" : "watching",
        error: stats.lastError,
        sent: stats.sent,
        blocked: stats.blocked,
        failed: stats.failed,
        dropped: stats.dropped,
        skipped: stats.skipped,
        version: VERSION,
      };
    }

    return {
      ingest,
      stop,
      snapshot,
      idle: () => pumping || Promise.resolve(),
      pending: () => queue.length,
      seenIds: () => Array.from(seen),
      isStopped: () => stopped,
    };
  }

  return {
    VERSION,
    SOURCE,
    classifyUrl,
    normalizeQuestion,
    parseBody,
    isNewQuestion,
    buildFirePayload,
    classifyFireResponse,
    createBridge,
  };
});
