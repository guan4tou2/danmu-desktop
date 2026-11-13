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
      // Slido's numeric event id; lets stream items from another event
      // (single-page navigation) be told apart from the current one.
      eventNum: raw.event_id != null ? String(raw.event_id) : "",
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

  // What counts as "new" — prefer not sending over replaying old questions:
  //   1. State is kept per browser tab *and* per Slido event (the event id
  //      comes from the question-list URL), so moving to another event in
  //      the same tab starts a fresh baseline without any page signal.
  //   2. Anything that arrives in a question *list* is history — whatever
  //      the sort order, page or refresh — unless Slido's own clock proves
  //      it is newer: both it and the event's reference time have a
  //      timestamp and it is strictly later.
  //   3. Anything that arrives on the realtime *stream* and has not been
  //      handled is new, with or without a timestamp (a timestamp at or
  //      before the reference still marks it as history).
  //   4. If lists keep showing unknown ids that cannot be dated and no
  //      stream traffic is seen, the feed is not what we expect: report
  //      feed_unrecognized instead of guessing.
  // The local clock is never compared with Slido's.
  const ORPHAN_LIMIT = 3;
  const EVENT_IN_URL = /\/events\/([^/?#]+)\/questions(?:[?#/]|$)/;

  function eventIdFromUrl(url) {
    const m = EVENT_IN_URL.exec(String(url || ""));
    return m ? decodeURIComponent(m[1]) : "";
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

  function _newTab() {
    return { current: "", events: {}, orphans: 0, streamSeen: false };
  }

  function _max(a, b) {
    if (!Number.isFinite(a)) return Number.isFinite(b) ? b : null;
    return Number.isFinite(b) && b > a ? b : a;
  }

  // deps.post(payload) -> Promise<{status, body}> (throw = network error)
  // deps.now() -> ms (pacing only); deps.sleep(ms) -> Promise
  // deps.handled / deps.tabs restore state saved by the service worker.
  // deps.tokenSet: false keeps everything observe-only (token_missing).
  function createBridge(deps) {
    const now = deps.now || (() => Date.now());
    const sleep = deps.sleep || ((ms) => new Promise((r) => setTimeout(r, ms)));
    let minIntervalMs = deps.minIntervalMs != null ? deps.minIntervalMs : 3000;
    let includeAuthor = deps.includeAuthor !== false;
    const maxQueue = deps.maxQueue != null ? deps.maxQueue : 10;
    const maxSeen = deps.maxSeen != null ? deps.maxSeen : MAX_SEEN;

    // Handled ids per event (sent, held, blocked, dropped or history).
    const handled = {};
    for (const [eid, ids] of Object.entries(deps.handled || {})) handled[eid] = new Set(ids);
    const tabs = JSON.parse(JSON.stringify(deps.tabs || {}));
    const queue = [];
    const queued = new Set();
    const stats = { sent: 0, held: 0, blocked: 0, failed: 0, dropped: 0, skipped: 0, lastError: "" };
    let active = deps.active !== false;
    let tokenSet = deps.tokenSet !== false;
    let pumping = null;
    let lastSentAt = -Infinity;

    const key = (eid, id) => eid + "|" + id;
    const sending = () => active && tokenSet;

    function _isHandled(eid, id) {
      return !!(handled[eid] && handled[eid].has(id));
    }

    function _remember(eid, id) {
      const set = handled[eid] || (handled[eid] = new Set());
      set.add(id);
      // Capped per event. An id evicted here can come back only through a
      // list (history by rule 2) or a stream update dated at or before the
      // event's reference time, which sending advances — never as "new".
      if (set.size > maxSeen) set.delete(set.values().next().value);
    }

    function _event(tab, eid) {
      return tab.events[eid] || (tab.events[eid] = { ref: null, num: "" });
    }

    function _history(eid, q) {
      _remember(eid, q.id);
      stats.skipped++;
    }

    function _enqueue(eid, q) {
      if (queue.length >= maxQueue) {
        // Oldest pending goes first: a late question is worth less on a
        // live screen than the one just asked. It counts as handled, so a
        // later list refresh cannot bring it back.
        const old = queue.shift();
        queued.delete(key(old.eid, old.id));
        _remember(old.eid, old.id);
        stats.dropped++;
      }
      q.eid = eid;
      queue.push(q);
      queued.add(key(eid, q.id));
    }

    function openPage(tabId) {
      tabs[tabId] = _newTab();
    }

    function _ingestList(tab, eid, questions) {
      const ev = tab.events[eid];
      const first = !ev;
      const event = _event(tab, eid);
      tab.current = eid;
      let newest = null;
      let undatable = 0;
      let added = 0;
      for (const q of questions) {
        newest = _max(newest, q.publishedAt);
        if (!event.num && q.eventNum) event.num = q.eventNum;
        if (q.isReply || !q.isPublic) continue;
        if (_isHandled(eid, q.id) || queued.has(key(eid, q.id))) continue;
        const provenNew =
          !first && Number.isFinite(q.publishedAt) && Number.isFinite(event.ref) && q.publishedAt > event.ref;
        if (provenNew && sending()) {
          _enqueue(eid, q);
          added++;
          continue;
        }
        if (!first && !provenNew && !(Number.isFinite(q.publishedAt) && Number.isFinite(event.ref))) {
          undatable++;
        }
        _history(eid, q);
      }
      if (undatable && !tab.streamSeen) stats.lastError = "feed_unrecognized";
      event.ref = _max(event.ref, newest);
      return added;
    }

    function _ingestStream(tab, questions) {
      if (questions.length) tab.streamSeen = true;
      const eid = tab.current;
      let added = 0;
      for (const q of questions) {
        if (q.isReply || !q.isPublic) continue;
        if (!eid) {
          // Stream traffic before this tab showed any event's list: we
          // cannot tell which event it belongs to, let alone old from new.
          tab.orphans++;
          stats.skipped++;
          if (tab.orphans >= ORPHAN_LIMIT) stats.lastError = "feed_unrecognized";
          continue;
        }
        const event = _event(tab, eid);
        if (_isHandled(eid, q.id) || queued.has(key(eid, q.id))) continue;
        const otherEvent = q.eventNum && event.num && q.eventNum !== event.num;
        const datedOld =
          Number.isFinite(q.publishedAt) && Number.isFinite(event.ref) && q.publishedAt <= event.ref;
        if (otherEvent || datedOld || !sending()) {
          _history(eid, q);
          continue;
        }
        _enqueue(eid, q);
        added++;
      }
      return added;
    }

    function ingest(kind, text, tabId, url) {
      const parsed = parseBody(kind, text);
      if (!parsed.recognized) stats.lastError = "feed_unrecognized";
      else if (stats.lastError === "feed_unrecognized") stats.lastError = "";
      const tab = tabs[tabId] || (tabs[tabId] = _newTab());
      let added = 0;
      if (kind === "questions" && parsed.recognized) {
        added = _ingestList(tab, eventIdFromUrl(url) || "?", parsed.questions);
      } else if (kind === "stream") {
        added = _ingestStream(tab, parsed.questions);
      }
      if (!tokenSet) stats.lastError = "token_missing";
      if (added) _pump();
      return added;
    }

    function _pump() {
      if (pumping) return pumping;
      pumping = (async () => {
        try {
          while (queue.length && sending()) {
            const wait = lastSentAt + minIntervalMs - now();
            if (wait > 0) await sleep(wait);
            if (!sending()) break;
            const q = queue.shift();
            if (!q) break;
            lastSentAt = now();
            // Stays in `queued` while in flight, so a copy arriving meanwhile
            // (list refresh, upvote) is not queued a second time.
            await _sendOne(q);
            queued.delete(key(q.eid, q.id));
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
      // unhandled so the next time the stream shows it, it is tried again.
      if (verdict.outcome !== "failed") {
        _remember(q.eid, q.id);
        // Advance the event's reference time past everything handled, so an
        // id later evicted from the handled set still reads as history.
        for (const tab of Object.values(tabs)) {
          if (tab.events[q.eid]) tab.events[q.eid].ref = _max(tab.events[q.eid].ref, q.publishedAt);
        }
      }
      if (verdict.error) stats.lastError = verdict.error;
      else if (stats.lastError !== "feed_unrecognized" && stats.lastError !== "token_missing") {
        stats.lastError = "";
      }
    }

    // Anything still waiting when sending stops is counted and marked
    // handled: switching back on means "from now on", not "the backlog".
    function _dropPending() {
      for (const q of queue) {
        _remember(q.eid, q.id);
        queued.delete(key(q.eid, q.id));
        stats.dropped++;
      }
      queue.length = 0;
    }

    function setActive(on) {
      active = !!on;
      if (!sending()) _dropPending();
      else if (queue.length) _pump();
    }

    function configure(opts) {
      if (opts.minIntervalMs != null) minIntervalMs = opts.minIntervalMs;
      if (opts.includeAuthor != null) includeAuthor = opts.includeAuthor !== false;
      if (opts.tokenSet != null) {
        tokenSet = !!opts.tokenSet;
        if (!tokenSet) {
          stats.lastError = "token_missing";
          _dropPending();
        } else if (stats.lastError === "token_missing") {
          stats.lastError = "";
        }
      }
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

    if (!tokenSet) stats.lastError = "token_missing";

    return {
      ingest,
      openPage,
      setActive,
      configure,
      noteError,
      snapshot,
      idle: () => pumping || Promise.resolve(),
      pending: () => queue.length,
      isHandled: (eid, id) => _isHandled(eid, String(id)),
      handled: () => Object.fromEntries(Object.entries(handled).map(([e, s]) => [e, Array.from(s)])),
      tabs: () => JSON.parse(JSON.stringify(tabs)),
    };
  }

  return {
    VERSION,
    SOURCE,
    classifyUrl,
    eventIdFromUrl,
    normalizeQuestion,
    parseBody,
    buildFirePayload,
    classifyFireResponse,
    createBridge,
  };
});
