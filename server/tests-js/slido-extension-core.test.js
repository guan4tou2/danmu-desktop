/**
 * slido-extension/core.js — the part of the Slido bridge that decides what
 * becomes danmu. Runs fully offline.
 *
 * Fixture provenance: fixtures/slido/questions-list.json follows the question
 * object Slido's own participant bundle builds when its dev tool fakes an
 * incoming question (fields event_question_id / text / author.name /
 * is_anonymous / is_public / path / date_published). Names and text are
 * placeholders. That shape is "from the client code".
 *
 * fixtures/slido/recorded-2026-11-14.json is different: it was recorded off
 * the wire from a live event (see its _provenance) and is exercised by the
 * last describe block. Only an anonymous question was captured, so named
 * authors, moderation and reply events still rest on the client code — which
 * is why the rules prefer "not sent, error reported" over guessing.
 */
const fs = require("fs");
const path = require("path");

const Core = require("../../slido-extension/core.js");

const LIST = fs.readFileSync(path.join(__dirname, "fixtures/slido/questions-list.json"), "utf8");
// Underscores on purpose: tailwind's scanner reads this folder, and a
// hyphenated id that looks like a utility would be emitted as a class.
const TAB = "tab_one";
const EVENT_A = "4914ff81_event_a";
const EVENT_B = "77aa0000_event_b";
const listUrl = (eid, query) =>
  `https://app.sli.do/eu1/api/v0.5/events/${eid}/questions?path=%2Fquestions&${query || "sort=top"}`;
const STREAM_URL = "wss://app.sli.do/eu1/stream/v0.5/stream-sio/?EIO=4&transport=websocket";

function question(id, publishedIso, extra) {
  const q = Object.assign(
    {
      author: { event_user_id: 9000 + id, name: `Person ${id}` },
      event_question_id: id,
      event_user_id: 9000 + id,
      is_anonymous: false,
      is_public: true,
      path: "/questions",
      text: `Question number ${id}`,
    },
    extra || {},
  );
  if (publishedIso) q.date_published = publishedIso;
  return q;
}

function sioFrame(payload) {
  return "42" + JSON.stringify(["slido.event.question.update", payload]);
}

const list = (qs) => JSON.stringify(qs);

// A fake clock: sleep() advances time instead of waiting, so pacing is
// asserted on timestamps rather than on wall-clock flakiness.
function harness(opts) {
  // clock: where the local clock starts (only pacing reads it).
  let t = opts && opts.clock != null ? opts.clock : 1_000_000;
  const posts = [];
  const responses = (opts && opts.responses) || [];
  const bridge = Core.createBridge(
    Object.assign(
      {
        now: () => t,
        sleep: async (ms) => {
          t += ms;
        },
        post: async (payload) => {
          posts.push({ at: t, payload });
          const next = responses.length ? responses.shift() : { status: 200, body: "{}" };
          if (next instanceof Error) throw next;
          return next;
        },
      },
      (opts && opts.bridge) || {},
    ),
  );
  const h = {
    bridge,
    posts,
    // date: the response's HTTP Date header ("" = could not be read).
    list: (body, eid, query, date) =>
      bridge.ingest("questions", body, TAB, listUrl(eid || EVENT_A, query), date || ""),
    stream: (q, date) => bridge.ingest("stream", sioFrame(q), TAB, STREAM_URL, date || ""),
  };
  return h;
}

// Event page loaded with an initial list, then live traffic.
function opened(opts, initial, date) {
  const h = harness(opts);
  h.list(initial || "[]", EVENT_A, undefined, date);
  return h;
}

// The page opened at 10:00:00 Slido time (HTTP Date header of the first list).
const OPENED_AT = "Sat, 14 Nov 2026 10:00:00 GMT";
const at = (hhmmss) => `2026-11-14T${hhmmss}Z`;

const texts = (posts) => posts.map((p) => p.payload.text);

test("core VERSION matches manifest.json", () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "../../slido-extension/manifest.json"), "utf8"));
  expect(Core.VERSION).toBe(manifest.version);
});

describe("classifyUrl / eventIdFromUrl", () => {
  test("recognises the question list and the realtime stream on Slido hosts only", () => {
    expect(Core.classifyUrl(listUrl(EVENT_A))).toBe("questions");
    expect(Core.classifyUrl(STREAM_URL)).toBe("stream");
    expect(Core.classifyUrl("https://app.sli.do/eu1/stream/v0.5/stream-sio/?EIO=4&transport=polling")).toBe("stream");
    expect(Core.classifyUrl("https://admin.slido.com/api/v0.5/events/abc/questions")).toBe("questions");
  });

  test("ignores replies, answered lists, other APIs and look-alike hosts", () => {
    expect(Core.classifyUrl("https://app.sli.do/api/v0.5/events/abc/questions/502")).toBeNull();
    expect(Core.classifyUrl("https://app.sli.do/api/v0.5/events/abc/questions/answered")).toBeNull();
    expect(Core.classifyUrl("https://app.sli.do/api/v0.5/app/events?hash=abc")).toBeNull();
    expect(Core.classifyUrl("https://evil.example/sli.do/events/abc/questions")).toBeNull();
    expect(Core.classifyUrl("https://sli.do.evil.example/api/events/abc/questions")).toBeNull();
    expect(Core.classifyUrl("")).toBeNull();
    expect(Core.classifyUrl(null)).toBeNull();
  });

  test("the event id comes from the list URL", () => {
    expect(Core.eventIdFromUrl(listUrl(EVENT_B, "sort=newest&limit=20"))).toBe(EVENT_B);
    expect(Core.eventIdFromUrl(STREAM_URL)).toBe("");
  });
});

describe("parseBody", () => {
  test("question list: keeps the explicit fields, nothing else", () => {
    const { questions, recognized } = Core.parseBody("questions", LIST);
    expect(recognized).toBe(true);
    expect(questions.map((q) => q.id)).toEqual(["501", "502", "503", "504", "505"]);
    const anon = questions.find((q) => q.id === "503");
    expect(anon.author).toBe(""); // is_anonymous hides the name
    expect(anon.anonymous).toBe(true);
    expect(anon.authorId).toBe(""); // and the participant id
    expect(questions.find((q) => q.id === "504").isPublic).toBe(false);
    expect(questions.find((q) => q.id === "505").isReply).toBe(true);
  });

  test("question list wrapped in an object is accepted", () => {
    const wrapped = JSON.stringify({ items: JSON.parse(LIST) });
    expect(Core.parseBody("questions", wrapped).questions).toHaveLength(5);
  });

  test("does not mine arbitrary text fields (the v0.2 heuristic did)", () => {
    const eventMeta = JSON.stringify([{ name: "Event title", description: "Agenda text", title: "Poll" }]);
    expect(Core.parseBody("questions", eventMeta)).toEqual({ questions: [], recognized: false });
  });

  test("broken JSON and unknown shapes are flagged as unrecognized, empty list is fine", () => {
    expect(Core.parseBody("questions", "{not json").recognized).toBe(false);
    expect(Core.parseBody("questions", JSON.stringify({ foo: 1 })).recognized).toBe(false);
    expect(Core.parseBody("questions", "[]")).toEqual({ questions: [], recognized: true });
  });

  test("socket.io event frames, with params wrapper, namespace and polling batches", () => {
    const q = question(700, "2026-11-14T10:01:00.000Z");
    expect(Core.parseBody("stream", sioFrame(q)).questions[0].id).toBe("700");
    expect(Core.parseBody("stream", sioFrame({ params: q })).questions[0].id).toBe("700");
    const ns = "42/participant," + JSON.stringify(["slido.event.question.update", q]);
    expect(Core.parseBody("stream", ns).questions[0].id).toBe("700");
    const batch = ["2", "40", sioFrame(question(701)), sioFrame(question(702))].join("\x1e");
    expect(Core.parseBody("stream", batch).questions.map((x) => x.id)).toEqual(["701", "702"]);
  });

  test("stream: pings, patches and unrelated events are ignored; garbled question event is flagged", () => {
    expect(Core.parseBody("stream", "2")).toEqual({ questions: [], recognized: true });
    const patch = "42" + JSON.stringify(["slido.event.question.patch", { event_question_id: 1, score: 5 }]);
    expect(Core.parseBody("stream", patch)).toEqual({ questions: [], recognized: true });
    const garbled = "42" + JSON.stringify(["slido.event.question.update", { renamed_id: 1, body: "x" }]);
    expect(Core.parseBody("stream", garbled).recognized).toBe(false);
  });
});

describe("buildFirePayload", () => {
  test("named question: per-participant fingerprint, nickname capped at 20, text capped at 100", () => {
    const q = Core.normalizeQuestion(question(1, null, { text: "x".repeat(150), author: { event_user_id: 77, name: "N".repeat(30) }, event_user_id: 77 }));
    const p = Core.buildFirePayload(q, {});
    expect(p.fingerprint).toBe("slido:77");
    expect(Array.from(p.text)).toHaveLength(100);
    expect(Array.from(p.nickname)).toHaveLength(20);
  });

  test("anonymous question: shown as Slido, no fingerprint that could link it to a person", () => {
    const a = Core.normalizeQuestion(question(2, null, { is_anonymous: true, event_user_id: 55, author: { event_user_id: 55, name: "Hidden" } }));
    const b = Core.normalizeQuestion(question(3, null, { is_anonymous: true, event_user_id: 55, author: { event_user_id: 55, name: "Hidden" } }));
    const pa = Core.buildFirePayload(a, {});
    const pb = Core.buildFirePayload(b, {});
    expect(pa).toEqual({ text: "Question number 2", nickname: "Slido" });
    expect(pb).toEqual({ text: "Question number 3", nickname: "Slido" });
    expect(JSON.stringify([pa, pb])).not.toContain("55");
  });

  test("with author names switched off, the display name is Slido", () => {
    const q = Core.normalizeQuestion(question(4));
    expect(Core.buildFirePayload(q, { includeAuthor: false }).nickname).toBe("Slido");
  });
});

describe("classifyFireResponse", () => {
  test.each([
    [200, "", "sent", ""],
    [202, '{"status":"queued_for_review"}', "held", ""],
    [400, '{"error":"Content contains blocked keywords"}', "blocked", ""],
    [400, '{"error":"Keyword match"}', "blocked", ""],
    [400, '{"error":"Captcha verification failed"}', "failed", "captcha_required"],
    [400, '{"error":"Validation failed"}', "failed", "rejected"],
    [400, "Invalid JSON", "failed", "rejected"],
    [401, '{"error":"Invalid fire token"}', "failed", "token_invalid"],
    [403, "banned", "blocked", ""],
    [429, '{"error":"Too many requests. Please try again later."}', "failed", "rate_limited"],
    [429, '{"status":"dropped","reason":"full"}', "failed", "screen_full"],
    [429, '{"status":"rejected","reason":"queue_full"}', "failed", "screen_full"],
    [503, '{"error":"No overlay connected."}', "failed", "no_overlay"],
    [503, "", "failed", "rejected"],
    [500, "", "failed", "rejected"],
    [0, "", "failed", "server_unreachable"],
  ])("HTTP %s %s → %s", (status, body, outcome, error) => {
    expect(Core.classifyFireResponse(status, body)).toEqual({ outcome, error });
  });
});

describe("bridge: one fixed start point per tab and event (rules 1–2)", () => {
  test("the first list is history; a newer stream question is sent", async () => {
    const h = opened({}, LIST, OPENED_AT);
    h.stream(question(900, at("10:05:00")));
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 900"]);
    expect(h.bridge.snapshot()).toMatchObject({ state: "watching", sent: 1, skipped: 3, late_skipped: 0 });
  });

  test("a 200-question backlog on page load sends nothing", async () => {
    const backlog = Array.from({ length: 200 }, (_, i) => question(i + 1, at(`09:${String(i % 60).padStart(2, "0")}:00`)));
    const h = opened({}, list(backlog), OPENED_AT);
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
    expect(h.bridge.snapshot().skipped).toBe(200);
  });

  test("P1: a 'popular' baseline without the newest questions, then the 'newest' list: nothing from before opening is sent", async () => {
    // Opened at 10:00 on the "top" sort, which holds older, upvoted questions only.
    const h = opened({}, list([question(1, at("09:10:00")), question(2, at("09:20:00"))]), OPENED_AT);
    // Switching to "newest" shows questions asked at 09:58 / 09:59 — before opening.
    h.list(list([question(3, at("09:58:00")), question(4, at("09:59:00")), question(1, at("09:10:00"))]), EVENT_A, "sort=newest");
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
    expect(h.bridge.snapshot()).toMatchObject({ state: "watching", late_skipped: 2 });
  });

  test("P2: out-of-order stream — the later question arrives first; both are sent, once each", async () => {
    const h = opened({}, list([question(1, at("09:50:00"))]), OPENED_AT);
    h.stream(question(31, at("10:00:20")));
    await h.bridge.idle();
    h.stream(question(30, at("10:00:19"))); // earlier, but still after opening
    await h.bridge.idle();
    h.stream(question(31, at("10:00:20"), { score: 2 }));
    h.stream(question(30, at("10:00:19"), { score: 1 }));
    h.list(list([question(31, at("10:00:20")), question(30, at("10:00:19"))]), EVENT_A, "sort=newest");
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 31", "Question number 30"]);
  });

  test("P2: a question held for Slido moderation is sent on approval, even after newer ones went out", async () => {
    const h = opened({}, "[]", OPENED_AT);
    // Submitted at 10:00:05, waiting for the Slido moderator.
    h.stream(question(40, null, { is_public: false, date_created: at("10:00:05") }));
    h.stream(question(41, at("10:00:10")));
    await h.bridge.idle();
    // Approved later; date_published is the approval (date_created is kept).
    h.stream(question(40, at("10:00:30"), { date_created: at("10:00:05") }));
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 41", "Question number 40"]);
  });

  test("a question asked after the start that only shows up in a later list (no stream) is sent", async () => {
    const h = opened({}, list([question(1, at("09:50:00"))]), OPENED_AT);
    h.list(list([question(2, at("10:00:01")), question(1, at("09:50:00"))]), EVENT_A, "sort=newest");
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 2"]);
  });

  test("a question asked before the start that is first seen after it (older page, other sort) is not sent", async () => {
    const h = opened({}, list([question(10, at("09:59:00"))]), OPENED_AT);
    h.list(list([question(5, at("08:00:00")), question(6, at("09:59:59"))]), EVENT_A, "sort=newest&offset=50");
    h.list(list([question(7, at("09:00:00"))]), EVENT_A, "sort=top");
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
    expect(h.bridge.snapshot()).toMatchObject({ state: "watching", late_skipped: 3 });
  });

  test("a stream update of a question asked before the start is history", async () => {
    const h = opened({}, list([question(1, at("09:50:00"))]), OPENED_AT);
    h.stream(question(9, at("09:30:00"))); // older, never listed (e.g. upvoted)
    h.stream(question(10, at("10:00:30")));
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 10"]);
  });

  test("the HTTP Date header sets the start; without it the newest list time does; with both the later one wins", async () => {
    // Date header only (empty list).
    let h = opened({}, "[]", OPENED_AT);
    h.stream(question(1, at("09:59:59")));
    h.stream(question(2, at("10:00:01")));
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 2"]);

    // No readable Date header: the newest question in the first list.
    h = opened({}, list([question(1, at("09:50:00"))]));
    h.list(list([question(2, at("09:49:00")), question(3, at("09:55:00"))]), EVENT_A, "sort=newest");
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 3"]);

    // Both, header later: the header wins.
    h = opened({}, list([question(1, at("09:50:00"))]), OPENED_AT);
    h.list(list([question(3, at("09:55:00"))]), EVENT_A, "sort=newest");
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);

    // Both, list later (e.g. a cached Date): the list wins.
    h = opened({}, list([question(1, at("09:50:00"))]), "Sat, 14 Nov 2026 09:40:00 GMT");
    h.list(list([question(2, at("09:45:00")), question(3, at("09:55:00"))]), EVENT_A, "sort=newest");
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 3"]);
  });

  test("the start never moves: later lists, later Date headers and sends leave it where it was", async () => {
    const h = opened({}, list([question(1, at("09:50:00"))]), OPENED_AT);
    const armedAt = Date.parse(OPENED_AT);
    h.stream(question(2, at("10:10:00")));
    await h.bridge.idle();
    h.list(list([question(2, at("10:10:00")), question(3, at("10:20:00"))]), EVENT_A, "sort=newest", "Sat, 14 Nov 2026 10:30:00 GMT");
    await h.bridge.idle();
    expect(h.bridge.tabs()[TAB].events[EVENT_A].armedAt).toBe(armedAt);
    h.stream(question(4, at("10:05:00"))); // before the latest send, after the start
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 2", "Question number 3", "Question number 4"]);
  });

  test("a local clock ±1 h off changes none of these outcomes", async () => {
    const scenario = async (clock) => {
      const h = harness({ clock });
      h.list(list([question(1, at("09:10:00"))]), EVENT_A, "sort=top", OPENED_AT);
      h.list(list([question(3, at("09:58:00")), question(5, at("10:00:02"))]), EVENT_A, "sort=newest");
      h.stream(question(31, at("10:00:20")));
      h.stream(question(30, at("10:00:19")));
      h.stream(question(32));
      h.list(list([question(40), question(41), question(42)]), EVENT_A, "sort=newest&offset=20");
      await h.bridge.idle();
      return { sent: texts(h.posts), snap: h.bridge.snapshot() };
    };
    const base = Date.parse(OPENED_AT);
    const reference = await scenario(base);
    expect(reference.sent).toEqual(["Question number 5", "Question number 31", "Question number 30", "Question number 32"]);
    expect(reference.snap).toMatchObject({ error: "feed_unrecognized", late_skipped: 4 });
    for (const skew of [-3_600_000, 3_600_000]) {
      expect(await scenario(base + skew)).toEqual(reference);
    }
  });

  test("switching to another event in the same tab takes that event's own start, without any page signal", async () => {
    const h = opened({}, list([question(1, at("09:00:00"), { event_id: 1 })]), OPENED_AT); // event A
    // Single-page navigation to event B at 10:30: no openPage(), just B's list.
    h.list(list([question(101, at("10:25:00"), { event_id: 2 })]), EVENT_B, undefined, "Sat, 14 Nov 2026 10:30:00 GMT");
    h.stream(question(102, at("10:20:00"), { event_id: 2 })); // after A's start, before B's
    h.stream(question(103, at("10:31:00"), { event_id: 2 }));
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 103"]);
  });

  test("after navigating away, stream items from the previous event are not sent", async () => {
    const h = opened({}, list([question(1, null, { event_id: 1 })]));
    h.list(list([question(101, null, { event_id: 2 })]), EVENT_B);
    h.stream(question(5, null, { event_id: 1 }));
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
  });

  test("the start point survives a service-worker restart", async () => {
    const first = opened({}, list([question(1, at("09:50:00"))]), OPENED_AT);
    const posted = [];
    const restored = Core.createBridge({
      post: async (p) => {
        posted.push(p);
        return { status: 200 };
      },
      handled: first.bridge.handled(),
      tabs: JSON.parse(JSON.stringify(first.bridge.tabs())), // as chrome.storage.session returns it
    });
    restored.ingest("stream", sioFrame(question(2, at("09:59:00"))), TAB, STREAM_URL, "");
    restored.ingest("stream", sioFrame(question(3, at("10:01:00"))), TAB, STREAM_URL, "");
    await restored.idle();
    expect(posted.map((p) => p.text)).toEqual(["Question number 3"]);
  });
});

describe("bridge: questions without a timestamp (rules 3–4)", () => {
  test("an undated stream question is new the first time its id is seen", async () => {
    const h = opened({}, list([question(1)]));
    h.stream(question(2));
    h.stream(question(2, null, { score: 1 }));
    h.stream(question(1, null, { score: 1 })); // listed before: history
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 2"]);
  });

  test("P3: undated baseline, stream updates seen, then unknown list ids: nothing sent, and feed_unrecognized at the threshold", async () => {
    const h = opened({}, list([question(1), question(2)]));
    h.stream(question(1, null, { score: 4 })); // upvote of an old question: the stream works
    h.list(list([question(1), question(3)]), EVENT_A, "sort=newest");
    await h.bridge.idle();
    expect(h.bridge.snapshot()).toMatchObject({ state: "watching", late_skipped: 1 });
    h.list(list([question(4), question(5), question(3)]), EVENT_A, "sort=newest");
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
    expect(h.bridge.snapshot()).toMatchObject({ state: "error", error: "feed_unrecognized", late_skipped: 3 });
  });

  test("dated lists without any readable start point are undecidable too", async () => {
    // First list empty and no Date header: there is nothing to compare with.
    const h = opened({}, "[]");
    h.list(list([question(1, at("10:00:01")), question(2, at("10:00:02")), question(3, at("10:00:03"))]), EVENT_A, "sort=newest");
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
    expect(h.bridge.snapshot().error).toBe("feed_unrecognized");
  });

  test("stream traffic before any list is not sent; repeated it is flagged; closing the tab clears it", async () => {
    const h = harness();
    h.stream(question(1));
    h.stream(question(2));
    expect(h.bridge.snapshot().state).toBe("watching");
    h.stream(question(3));
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
    expect(h.bridge.snapshot()).toMatchObject({ state: "error", error: "feed_unrecognized" });
    h.bridge.closeTab(TAB);
    expect(h.bridge.snapshot().state).toBe("watching");
  });

  test("replies and questions still waiting for Slido moderation are not sent", async () => {
    const h = opened();
    h.stream(question(1, null, { path: "/questions/77" }));
    h.stream(question(2, null, { is_public: false }));
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
  });

  test("while switched off ids are learned, so switching on means from now on", async () => {
    const h = opened({ bridge: { active: false } });
    h.stream(question(1));
    h.bridge.setActive(true);
    h.stream(question(1, null, { score: 3 })); // upvote of the old one
    h.stream(question(2));
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 2"]);
  });
});

describe("bridge: never sent twice (rule 5)", () => {
  test("the same question arriving via stream, list refresh and updates is sent once", async () => {
    const q = question(42);
    const h = opened();
    h.stream(q);
    h.list(list([q]));
    h.stream(Object.assign({}, q, { score: 9 }));
    await h.bridge.idle();
    expect(h.posts).toHaveLength(1);
    expect(h.bridge.snapshot().late_skipped).toBe(0);
  });

  test("P4: an undated stream question that was sent is never re-sent, however many other ids follow", async () => {
    const h = opened({ bridge: { maxHistory: 5 } }, list([question(1, at("09:00:00"))]), OPENED_AT);
    h.stream(question(2)); // undated, sent
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 2"]);
    // Far more than the history cap of other ids, dated and undated.
    h.list(list(Array.from({ length: 30 }, (_, i) => question(100 + i, at("09:30:00")))), EVENT_A, "sort=top");
    h.list(list(Array.from({ length: 30 }, (_, i) => question(200 + i))), EVENT_A, "sort=top&offset=30");
    expect(h.bridge.isKept(EVENT_A, 2)).toBe(true);
    h.list(list([question(2)]), EVENT_A, "sort=newest"); // list refresh
    h.stream(question(2, null, { score: 5 })); // and a stream update
    await h.bridge.idle();
    expect(h.posts).toHaveLength(1);
  });

  test("once dated history was trimmed, an unknown undated stream id can no longer be proven new", async () => {
    const backlog = Array.from({ length: 5 }, (_, i) => question(i + 1, at("09:00:00")));
    const h = opened({ bridge: { maxHistory: 3 } }, list(backlog), OPENED_AT);
    h.stream(question(1, null, { score: 1 })); // trimmed id, back without a date
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
    expect(h.bridge.snapshot().late_skipped).toBe(1);
  });

  test("at the kept-id cap the event stops forwarding and says tracking_full", async () => {
    const h = opened({ bridge: { maxKept: 3 } });
    [1, 2, 3].forEach((i) => h.stream(question(i)));
    await h.bridge.idle();
    h.stream(question(4));
    [1, 2, 3].forEach((i) => h.stream(question(i, null, { score: 1 })));
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 1", "Question number 2", "Question number 3"]);
    expect(h.bridge.snapshot()).toMatchObject({ state: "error", error: "tracking_full" });
  });

  test("handled ids survive a service-worker restart", async () => {
    const first = opened();
    first.stream(question(42));
    await first.bridge.idle();
    const posted = [];
    const restored = Core.createBridge({
      post: async (p) => {
        posted.push(p);
        return { status: 200 };
      },
      handled: first.bridge.handled(),
      tabs: first.bridge.tabs(),
    });
    expect(restored.ingest("stream", sioFrame(question(42)), TAB, STREAM_URL)).toBe(0);
    expect(restored.ingest("stream", sioFrame(question(43)), TAB, STREAM_URL)).toBe(1);
    await restored.idle();
    expect(posted.map((p) => p.text)).toEqual(["Question number 43"]);
  });

  test("sends are paced by minIntervalMs", async () => {
    const h = opened({ bridge: { minIntervalMs: 3000 } });
    [1, 2, 3, 4].forEach((i) => h.stream(question(i)));
    await h.bridge.idle();
    expect(h.posts).toHaveLength(4);
    h.posts.slice(1).forEach((p, i) => expect(p.at - h.posts[i].at).toBeGreaterThanOrEqual(3000));
  });

  test("a flood beyond maxQueue drops the oldest, counts them, and they never come back (N4)", async () => {
    const h = opened({ bridge: { maxQueue: 10 } });
    const flood = Array.from({ length: 25 }, (_, i) => question(i + 1));
    flood.forEach((q) => h.stream(q));
    await h.bridge.idle();
    const sentFirst = h.posts.length;
    expect(h.bridge.snapshot().dropped).toBe(25 - sentFirst);
    // A list refresh and a second round of stream updates bring nothing back.
    h.list(list(flood));
    flood.forEach((q) => h.stream(Object.assign({}, q, { score: 1 })));
    await h.bridge.idle();
    expect(h.posts).toHaveLength(sentFirst);
    expect(h.bridge.snapshot().dropped).toBe(25 - sentFirst);
  });

  test("switching off counts what was still waiting; it is not sent after switching on (N4)", async () => {
    const h = opened();
    [1, 2, 3].forEach((i) => h.stream(question(i)));
    h.bridge.setActive(false);
    await h.bridge.idle();
    const sent = h.posts.length;
    expect(sent).toBeLessThanOrEqual(1);
    expect(h.bridge.snapshot().dropped).toBe(3 - sent);
    h.bridge.setActive(true);
    [1, 2, 3].forEach((i) => h.stream(question(i, null, { score: 2 })));
    await h.bridge.idle();
    expect(h.posts).toHaveLength(sent);
    expect(h.bridge.pending()).toBe(0);
  });

  test("a question is only marked done after a final answer; failed ones are retried, and are not 'undecidable'", async () => {
    const h = opened({ responses: [{ status: 503, body: '{"error":"No overlay connected."}' }] });
    const q = question(7);
    h.stream(q);
    await h.bridge.idle();
    expect(h.bridge.isHandled(EVENT_A, 7)).toBe(false);
    h.list(list([q])); // list refresh while it is waiting for a retry
    expect(h.bridge.snapshot().late_skipped).toBe(0);
    h.stream(Object.assign({}, q, { score: 1 }));
    await h.bridge.idle();
    expect(h.posts).toHaveLength(2);
    expect(h.bridge.isKept(EVENT_A, 7)).toBe(true);
    h.stream(q);
    await h.bridge.idle();
    expect(h.posts).toHaveLength(2);
  });

  test("server outcomes become counters and a visible error state", async () => {
    const responses = [
      { status: 400, body: "blocked" },
      { status: 202, body: "{}" },
      { status: 429, body: "" },
      new Error("network down"),
      { status: 200, body: "{}" },
    ];
    const h = opened({ responses });
    [1, 2, 3, 4].forEach((i) => h.stream(question(i)));
    await h.bridge.idle();
    expect(h.bridge.snapshot()).toMatchObject({ state: "error", error: "server_unreachable", blocked: 1, held: 1, failed: 2, sent: 0 });
    h.stream(question(5));
    await h.bridge.idle();
    expect(h.bridge.snapshot()).toMatchObject({ state: "watching", error: "", sent: 1 });
  });

  test("a rejected token is a distinct, visible error", async () => {
    const h = opened({ responses: [{ status: 401, body: '{"error":"Invalid fire token"}' }] });
    h.stream(question(1));
    await h.bridge.idle();
    expect(h.bridge.snapshot()).toMatchObject({ state: "error", error: "token_invalid", failed: 1 });
    const h2 = opened();
    h2.bridge.noteError("token_invalid"); // heartbeat got a 401
    expect(h2.bridge.snapshot().error).toBe("token_invalid");
  });

  test("without a token nothing is sent and the error says so (N7)", async () => {
    const h = opened({ bridge: { tokenSet: false } });
    h.stream(question(1));
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
    expect(h.bridge.snapshot()).toMatchObject({ state: "error", error: "token_missing" });
    // Setting a token later: still "from now on", the earlier one stays unsent.
    h.bridge.configure({ tokenSet: true });
    expect(h.bridge.snapshot().state).toBe("watching");
    h.stream(question(1, null, { score: 1 }));
    h.stream(question(2));
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 2"]);
    // Clearing it again drops what was queued and reports it.
    h.bridge.configure({ tokenSet: false });
    expect(h.bridge.snapshot().error).toBe("token_missing");
  });

  test("an unrecognized question feed surfaces as feed_unrecognized", () => {
    const h = opened();
    h.list(JSON.stringify({ unexpected: true }));
    expect(h.bridge.snapshot()).toMatchObject({ state: "error", error: "feed_unrecognized" });
    h.list("[]");
    expect(h.bridge.snapshot().state).toBe("watching");
  });
});

// Shapes recorded off the wire from a live event (see the fixture's
// _provenance). Everything above was written against Slido's client code;
// this block is the first check against what the server actually sends.
describe("recorded from a live Slido event (2026-11-14)", () => {
  const REC = JSON.parse(
    fs.readFileSync(path.join(__dirname, "fixtures/slido/recorded-2026-11-14.json"), "utf8"),
  );
  const frame = "42" + JSON.stringify(REC.stream_new_question);

  test("the real URLs are recognised, cluster prefix included", () => {
    expect(Core.classifyUrl(REC.list_url)).toBe("questions");
    expect(Core.classifyUrl(REC.stream_url)).toBe("stream");
    expect(Core.eventIdFromUrl(REC.list_url)).toBe(REC.event_uuid);
  });

  test("a newQuestion frame wraps the question in {target, params}; date_published is null", () => {
    const parsed = Core.parseBody("stream", frame);
    expect(parsed.recognized).toBe(true);
    expect(parsed.questions).toHaveLength(1);
    const q = parsed.questions[0];
    expect(q.text).toBe("Recorded question 1");
    expect(q.anonymous).toBe(true);
    expect(q.isPublic).toBe(true);
    // date_published came back null for a public, unmoderated question:
    // the time has to come from date_created.
    expect(q.publishedAt).toBe(Date.parse("2026-11-14T07:07:01.000Z"));
  });

  test("open on an empty list, then a question arrives on the stream: sent once, as Slido, no fingerprint", async () => {
    const h = harness();
    expect(h.bridge.ingest("questions", JSON.stringify(REC.empty_list.body), TAB, REC.list_url,
      REC.empty_list.date_header)).toBe(0);
    expect(h.bridge.ingest("stream", frame, TAB, REC.stream_url, "")).toBe(1);
    await h.bridge.idle();
    expect(h.posts.map((p) => p.payload)).toEqual([{ text: "Recorded question 1", nickname: "Slido" }]);
    expect(h.bridge.snapshot().state).toBe("watching");
  });

  test("the page's own 'ask' response on the same URL is a question, not an unreadable feed", async () => {
    const h = harness();
    h.bridge.ingest("questions", "[]", TAB, REC.list_url, REC.empty_list.date_header);
    h.bridge.ingest("stream", frame, TAB, REC.stream_url, "");
    // Same question again, this time as the single object the POST returns.
    expect(Core.parseBody("questions", JSON.stringify(REC.post_response.body)).recognized).toBe(true);
    expect(h.bridge.ingest("questions", JSON.stringify(REC.post_response.body), TAB, REC.post_url,
      REC.post_response.date_header)).toBe(0);
    await h.bridge.idle();
    expect(h.posts).toHaveLength(1);
    expect(h.bridge.snapshot().error || "").not.toBe("feed_unrecognized");
  });

  test("other stream events seen on the wire are ignored without complaint", () => {
    for (const name of REC.other_stream_events_seen) {
      const parsed = Core.parseBody("stream", "42" + JSON.stringify([name, { target: "x", params: {} }]));
      expect(parsed).toEqual({ questions: [], recognized: true });
    }
  });
});
