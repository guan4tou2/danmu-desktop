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
      anonymous: !!raw.is_anonymous,
      // Never kept for anonymous questions — see buildFirePayload.
      authorId: !raw.is_anonymous && authorId != null ? String(authorId) : "",
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

  // What counts as "new" is decided by id, not by clocks:
  //   - the first question list a page loads is its baseline — every id in
  //     it is history;
  //   - an id first seen after that is a new question, even without any
  //     timestamp (the live stream may not carry one);
  //   - timestamps only help when they exist on both sides, and then they
  //     are compared with Slido's own clock (the newest date in the
  //     baseline list), never with this computer's clock.
  function isHistory(q, page) {
    if (!page || !page.baselined) return true;
    return Number.isFinite(q.publishedAt) && Number.isFinite(page.refTime) && q.publishedAt <= page.refTime;
  }

  function _truncate(s, max) {
    const chars = Array.from(s);
    return chars.length <= max ? s : chars.slice(0, max - 1).join("") + "…";
  }

  // Shown instead of a person's name when there is none to show.
  const BRAND_NICKNAME = "Slido";

  function buildFirePayload(q, opts) {
    const showAuthor = (!opts || opts.includeAuthor !== false) && !!q.author;
    const payload = {
      text: _truncate(q.text, MAX_TEXT),
      nickname: showAuthor ? _truncate(q.author, MAX_NICKNAME) : BRAND_NICKNAME,
    };
    // Named questions get a per-participant fingerprint, so the admin
    // feed's "block this person" targets exactly that Slido participant.
    // Anonymous ones get none at all: Slido's event_user_id would let the
    // admin link several anonymous questions to one person, and a shared
    // stand-in id would turn "block" into "block every anonymous question".
    // Without a fingerprint the feed offers recall / keyword block only.
    if (!q.anonymous && q.authorId) payload.fingerprint = `slido:${q.authorId}`;
    return payload;
  }

  // Maps a /fire reply onto the counters and the error the status shows.
  // Bodies are matched against the server's own messages (routes/api.py).
  function classifyFireResponse(status, bodyText) {
    const body = String(bodyText || "");
    if (status === 200) return { outcome: "sent", error: "" };
    if (status === 202) return { outcome: "held", error: "" }; // review queue
    if (status === 400) {
      if (/captcha/i.test(body)) return { outcome: "failed", error: "captcha_required" };
      if (/Validation failed|Invalid JSON|Invalid image/i.test(body)) {
        return { outcome: "failed", error: "rejected" };
      }
      return { outcome: "blocked", error: "" }; // filter rule / blacklist
    }
    if (status === 401) return { outcome: "failed", error: "token_invalid" };
    if (status === 403) return { outcome: "blocked", error: "" }; // banned
    if (status === 429) {
      if (/"reason"\s*:\s*"(full|queue_full)"/.test(body)) return { outcome: "failed", error: "screen_full" };
      return { outcome: "failed", error: "rate_limited" };
    }
    if (status === 503 && /overlay/i.test(body)) return { outcome: "failed", error: "no_overlay" };
    if (!status) return { outcome: "failed", error: "server_unreachable" };
    return { outcome: "failed", error: "rejected" };
  }

  const ORPHAN_LIMIT = 3;

  // deps.post(payload) -> Promise<{status, body}> (throw = network error)
  // deps.now() -> ms (pacing only); deps.sleep(ms) -> Promise
  // deps.seenIds / deps.pages restore state saved by the service worker.
  function createBridge(deps) {
    const now = deps.now || (() => Date.now());
    const sleep = deps.sleep || ((ms) => new Promise((r) => setTimeout(r, ms)));
    let minIntervalMs = deps.minIntervalMs != null ? deps.minIntervalMs : 3000;
    let includeAuthor = deps.includeAuthor !== false;
    const maxQueue = deps.maxQueue != null ? deps.maxQueue : 10;

    const seen = new Set(deps.seenIds || []);
    const pages = Object.assign({}, deps.pages || {});
    const queue = [];
    const queued = new Set();
    const stats = { sent: 0, held: 0, blocked: 0, failed: 0, dropped: 0, skipped: 0, lastError: "" };
    let active = deps.active !== false;
    let pumping = null;
    let lastSentAt = -Infinity;

    function _remember(id) {
      seen.add(id);
      if (seen.size > MAX_SEEN) seen.delete(seen.values().next().value);
    }

    function _clearError(except) {
      if (stats.lastError && stats.lastError !== except) stats.lastError = "";
    }

    function openPage(pageId) {
      pages[pageId] = { baselined: false, refTime: NaN, orphans: 0 };
    }

    function _history(q) {
      _remember(q.id);
      stats.skipped++;
    }

    function ingest(kind, text, pageId) {
      const parsed = parseBody(kind, text);
      if (!parsed.recognized) stats.lastError = "feed_unrecognized";
      else if (stats.lastError === "feed_unrecognized") stats.lastError = "";
      if (!pages[pageId]) openPage(pageId);
      const page = pages[pageId];

      if (kind === "questions" && !page.baselined && parsed.recognized) {
        let ref = NaN;
        for (const q of parsed.questions) {
          if (!seen.has(q.id)) _history(q);
          if (Number.isFinite(q.publishedAt) && !(q.publishedAt <= ref)) ref = q.publishedAt;
        }
        page.baselined = true;
        page.refTime = ref;
        return 0;
      }

      let added = 0;
      for (const q of parsed.questions) {
        if (q.isReply || !q.isPublic || seen.has(q.id) || queued.has(q.id)) continue;
        if (!page.baselined) {
          // Stream traffic before the page's question list: we cannot tell
          // old from new. Treat as history; if it keeps happening the feed
          // is not shaped the way this extension expects.
          _history(q);
          page.orphans++;
          if (page.orphans >= ORPHAN_LIMIT) stats.lastError = "feed_unrecognized";
          continue;
        }
        if (isHistory(q, page) || !active) {
          // While switched off we still learn ids, so turning the switch on
          // means "from now on" without needing a page reload.
          _history(q);
          continue;
        }
        if (queue.length >= maxQueue) {
          // Oldest pending goes first: a late question is worth less on a
          // live screen than the one just asked.
          const old = queue.shift();
          queued.delete(old.id);
          stats.dropped++;
        }
        queue.push(q);
        queued.add(q.id);
        added++;
      }
      if (added) _pump();
      return added;
    }

    function _pump() {
      if (pumping) return pumping;
      pumping = (async () => {
        try {
          while (queue.length && active) {
            const wait = lastSentAt + minIntervalMs - now();
            if (wait > 0) await sleep(wait);
            if (!active) break;
            const q = queue.shift();
            if (!q) break;
            lastSentAt = now();
            // Stays in `queued` while in flight, so a copy arriving meanwhile
            // (list refresh, upvote) is not queued a second time.
            await _sendOne(q);
            queued.delete(q.id);
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
      // Only a final answer marks the question done; a failed send stays
      // unseen so the next time Slido shows it, it is tried again.
      if (verdict.outcome !== "failed") _remember(q.id);
      if (verdict.error) stats.lastError = verdict.error;
      else _clearError("feed_unrecognized");
    }

    // Switching off drops whatever is still waiting — counted, not silent.
    function setActive(on) {
      active = !!on;
      if (!active) {
        stats.dropped += queue.length;
        queue.length = 0;
        queued.clear();
      } else if (queue.length) {
        _pump();
      }
    }

    function configure(opts) {
      if (opts.minIntervalMs != null) minIntervalMs = opts.minIntervalMs;
      if (opts.includeAuthor != null) includeAuthor = opts.includeAuthor !== false;
    }

    // Problems seen outside /fire (e.g. the status heartbeat got a 401).
    function noteError(code) {
      stats.lastError = code;
    }

    function snapshot() {
      return {
        state: stats.lastError ? "error" : "watching",
        error: stats.lastError,
        sent: stats.sent,
        held: stats.held,
        blocked: stats.blocked,
        failed: stats.failed,
        dropped: stats.dropped,
        skipped: stats.skipped,
        version: VERSION,
      };
    }

    return {
      ingest,
      openPage,
      setActive,
      configure,
      noteError,
      snapshot,
      idle: () => pumping || Promise.resolve(),
      pending: () => queue.length,
      seenIds: () => Array.from(seen),
      pages: () => JSON.parse(JSON.stringify(pages, (k, v) => (Number.isNaN(v) ? null : v))),
    };
  }

  return {
    VERSION,
    SOURCE,
    classifyUrl,
    normalizeQuestion,
    parseBody,
    isHistory,
    buildFirePayload,
    classifyFireResponse,
    createBridge,
  };
});
