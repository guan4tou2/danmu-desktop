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
    // date_published first: by its name, the moment the question became
    // public, which for a question held for moderation is the approval, not
    // the submission. Slido's participant bundle only shows that the three
    // fields exist (its dev tool that fakes an incoming question sets
    // date_created = date_updated = date_published = now); what Slido puts
    // in date_published on approval is unverified without a real event.
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

  // What counts as "new". "Is it new" and "was it already sent" are two
  // separate questions with separate state; prefer not sending over
  // replaying old questions, and say so when a question cannot be judged.
  //
  //   1. Start point. Per browser tab *and* per Slido event (the event id
  //      comes from the question-list URL), armedAt is Slido's server time
  //      when that event's first response reached this tab: the response's
  //      HTTP Date header; if it cannot be read, the newest timestamp in that
  //      list; if both exist, the later one. Once set it never moves — not
  //      for later lists, other sort orders, or sends.
  //   2. A dated question (date_published, else date_created) is new iff it
  //      is strictly later than armedAt — from a list or the stream, in any
  //      order. Both sides are Slido's clock; the local clock is only used
  //      for pacing.
  //   3. An undated question is new only when it arrives on the stream and
  //      its id was never seen for this event. In a list it cannot be judged
  //      and is not sent.
  //   4. Questions that cannot be judged are visible: UNDECIDED_LIMIT of
  //      them in an event → feed_unrecognized, whether or not stream traffic
  //      was seen. Unknown ids first seen after the start and skipped as
  //      history are counted (late_skipped) for the popup and the card.
  //   5. Never sending twice rests only on the per-event "kept" set: ids
  //      that got a final outcome (sent, held, blocked, dropped, or learned
  //      while switched off) plus undated history, which rule 2 cannot judge
  //      again. That set is never trimmed; at maxKept the event stops
  //      forwarding and reports tracking_full. Dated history lives in a
  //      trimmed set, because rule 2 judges it the same way every time.
  const UNDECIDED_LIMIT = 3;
  const MAX_HISTORY = 2000;
  const MAX_KEPT = 5000;
  const EVENT_IN_URL = /\/events\/([^/?#]+)\/questions(?:[?#/]|$)/;

  function eventIdFromUrl(url) {
    const m = EVENT_IN_URL.exec(String(url || ""));
    return m ? decodeURIComponent(m[1]) : "";
  }

  function serverTime(dateHeader) {
    return typeof dateHeader === "string" && dateHeader ? Date.parse(dateHeader) : NaN;
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
    return { current: "", events: {}, orphans: 0 };
  }

  function _max(a, b) {
    if (!Number.isFinite(a)) return Number.isFinite(b) ? b : null;
    return Number.isFinite(b) && b > a ? b : a;
  }

  const _setsFrom = (obj) =>
    Object.fromEntries(Object.entries(obj && typeof obj === "object" ? obj : {}).map(([e, ids]) => [e, new Set(ids)]));
  const _setsTo = (obj) => Object.fromEntries(Object.entries(obj).map(([e, s]) => [e, Array.from(s)]));

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
    const maxHistory = deps.maxHistory != null ? deps.maxHistory : MAX_HISTORY;
    const maxKept = deps.maxKept != null ? deps.maxKept : MAX_KEPT;

    const saved = deps.handled && typeof deps.handled === "object" ? deps.handled : {};
    const kept = _setsFrom(saved.kept); // rule 5: never trimmed
    const history = _setsFrom(saved.history); // dated history: trimmed
    const trimmed = new Set(Array.isArray(saved.trimmed) ? saved.trimmed : []);
    const tabs = JSON.parse(JSON.stringify(deps.tabs || {}));
    const queue = [];
    const queued = new Set();
    const retrying = new Set(); // failed sends, keyed like `queued`
    const stats = { sent: 0, held: 0, blocked: 0, failed: 0, dropped: 0, skipped: 0, lateSkipped: 0 };
    let sendError = "";
    let parseError = false;
    let active = deps.active !== false;
    let tokenSet = deps.tokenSet !== false;
    let pumping = null;
    let lastSentAt = -Infinity;

    const key = (eid, id) => eid + "|" + id;
    const sending = () => active && tokenSet;
    const _has = (sets, eid, id) => !!(sets[eid] && sets[eid].has(id));
    const _seen = (eid, id) => _has(kept, eid, id) || _has(history, eid, id) || queued.has(key(eid, id));
    const _full = (eid) => !!kept[eid] && kept[eid].size >= maxKept;

    // force: final outcomes are always kept, even past the cap (the cap
    // only stops new work, it never forgets what was sent).
    function _keep(eid, id, force) {
      const set = kept[eid] || (kept[eid] = new Set());
      if (!force && set.size >= maxKept) return;
      set.add(id);
    }

    function _rememberHistory(eid, q) {
      if (!Number.isFinite(q.publishedAt)) {
        _keep(eid, q.id); // rule 2 cannot judge it again: never trim
        return;
      }
      const set = history[eid] || (history[eid] = new Set());
      set.add(q.id);
      if (set.size > maxHistory) {
        set.delete(set.values().next().value);
        // A trimmed dated id may come back undated on the stream; from now
        // on rule 3 cannot prove "never seen" for this event.
        trimmed.add(eid);
      }
    }

    function _arm(ev, dateHeader, newestInList) {
      if (Number.isFinite(ev.armedAt)) return; // rule 1: fixed once set
      const at = _max(serverTime(dateHeader), newestInList);
      if (Number.isFinite(at)) ev.armedAt = at;
    }

    // -> "new" | "history" | "undecided"
    function _judge(eid, ev, q, fromStream) {
      if (Number.isFinite(q.publishedAt) && Number.isFinite(ev.armedAt)) {
        return q.publishedAt > ev.armedAt ? "new" : "history"; // rule 2
      }
      if (!fromStream) return "undecided"; // rule 3, list side
      // Rule 3, stream side. (A dated stream item with no start point only
      // happens when the first list was empty and had no Date header: there
      // was no history to replay.)
      return trimmed.has(eid) ? "undecided" : "new";
    }

    function _enqueue(eid, q) {
      if (queue.length >= maxQueue) {
        // Oldest pending goes first: a late question is worth less on a
        // live screen than the one just asked. Kept, so it never returns.
        const old = queue.shift();
        queued.delete(key(old.eid, old.id));
        _keep(old.eid, old.id, true);
        stats.dropped++;
      }
      q.eid = eid;
      queue.push(q);
      queued.add(key(eid, q.id));
    }

    function _consider(eid, ev, questions, fromStream, baseline) {
      let added = 0;
      for (const q of questions) {
        if (q.isReply || !q.isPublic) continue;
        if (_seen(eid, q.id)) continue;
        // An undated failed send seen again in a list is not a sign of a
        // broken feed; the stream will retry it. (Dated, rule 2 retries it.)
        if (!fromStream && !Number.isFinite(q.publishedAt) && retrying.has(key(eid, q.id))) continue;
        // The first response is history by construction (armedAt is at or
        // after everything it holds).
        const verdict = baseline ? "history" : _judge(eid, ev, q, fromStream);
        if (verdict === "new") {
          if (sending() && !_full(eid)) {
            _enqueue(eid, q);
            added++;
          } else {
            _keep(eid, q.id); // switched off / no token: "from now on"
            stats.skipped++;
          }
          continue;
        }
        _rememberHistory(eid, q);
        stats.skipped++;
        if (baseline) continue;
        stats.lateSkipped++;
        if (verdict === "undecided") ev.undecided = (ev.undecided || 0) + 1;
      }
      return added;
    }

    function _ingestList(tab, eid, questions, dateHeader) {
      const baseline = !tab.events[eid];
      const ev = tab.events[eid] || (tab.events[eid] = { armedAt: null, num: "", undecided: 0 });
      tab.current = eid;
      tab.orphans = 0;
      let newest = null;
      for (const q of questions) {
        newest = _max(newest, q.publishedAt);
        if (!ev.num && q.eventNum) ev.num = q.eventNum;
      }
      // The list fallback only applies to the event's first response; a later
      // list's newest item may itself be new.
      _arm(ev, dateHeader, baseline ? newest : null);
      return _consider(eid, ev, questions, false, baseline);
    }

    function _ingestStream(tab, questions, dateHeader) {
      const eid = tab.current;
      if (!eid) {
        // Stream traffic before this tab showed any event's list: we cannot
        // tell which event it belongs to. Not sent; repeated, it is flagged.
        for (const q of questions) {
          if (q.isReply || !q.isPublic) continue;
          tab.orphans++;
          stats.skipped++;
        }
        return 0;
      }
      const ev = tab.events[eid];
      _arm(ev, dateHeader, null);
      // Items of another event (the previous page's socket) are not ours.
      const mine = questions.filter((q) => !(q.eventNum && ev.num && q.eventNum !== ev.num));
      return _consider(eid, ev, mine, true, false);
    }

    // dateHeader: the HTTP Date header of the response, when inject.js could
    // read it ("" for WebSocket frames and unreadable headers).
    function ingest(kind, text, tabId, url, dateHeader) {
      const parsed = parseBody(kind, text);
      parseError = !parsed.recognized;
      const tab = tabs[tabId] || (tabs[tabId] = _newTab());
      let added = 0;
      if (kind === "questions" && parsed.recognized) {
        added = _ingestList(tab, eventIdFromUrl(url) || "?", parsed.questions, dateHeader);
      } else if (kind === "stream") {
        added = _ingestStream(tab, parsed.questions, dateHeader);
      }
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
      // unknown, so the next time it is seen it is judged — and tried — again.
      if (verdict.outcome !== "failed") {
        _keep(q.eid, q.id, true);
        retrying.delete(key(q.eid, q.id));
      } else {
        retrying.add(key(q.eid, q.id));
      }
      sendError = verdict.error;
    }

    // Anything still waiting when sending stops is counted and kept:
    // switching back on means "from now on", not "the backlog".
    function _dropPending() {
      for (const q of queue) {
        _keep(q.eid, q.id, true);
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
        if (!tokenSet) _dropPending();
      }
    }

    // Problems seen outside /fire (e.g. the status heartbeat got a 401).
    function noteError(code) {
      sendError = code;
    }

    function closeTab(tabId) {
      delete tabs[tabId];
    }

    function _currentEvents() {
      return Object.values(tabs).map((t) => [t, t.current && t.events[t.current]]);
    }

    function _error() {
      if (!tokenSet) return "token_missing";
      if (sendError) return sendError;
      const current = _currentEvents();
      if (current.some(([t]) => t.current && _full(t.current))) return "tracking_full";
      const blind = current.some(
        ([t, ev]) => t.orphans >= UNDECIDED_LIMIT || (ev && ev.undecided >= UNDECIDED_LIMIT),
      );
      return parseError || blind ? "feed_unrecognized" : "";
    }

    function snapshot() {
      const error = _error();
      return {
        state: error ? "error" : "watching",
        error,
        sent: stats.sent,
        held: stats.held,
        blocked: stats.blocked,
        failed: stats.failed,
        dropped: stats.dropped,
        skipped: stats.skipped,
        late_skipped: stats.lateSkipped,
        version: VERSION,
      };
    }

    return {
      ingest,
      openPage: (tabId) => {
        tabs[tabId] = _newTab();
      },
      closeTab,
      setActive,
      configure,
      noteError,
      snapshot,
      idle: () => pumping || Promise.resolve(),
      pending: () => queue.length,
      isHandled: (eid, id) => _has(kept, eid, String(id)) || _has(history, eid, String(id)),
      isKept: (eid, id) => _has(kept, eid, String(id)),
      handled: () => ({ kept: _setsTo(kept), history: _setsTo(history), trimmed: Array.from(trimmed) }),
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
