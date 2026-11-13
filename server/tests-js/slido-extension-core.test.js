/**
 * slido-extension/core.js — the part of the Slido bridge that decides what
 * becomes danmu. Runs fully offline.
 *
 * Fixture provenance: fixtures/slido/questions-list.json follows the question
 * object Slido's own participant bundle builds when its dev tool fakes an
 * incoming question (fields event_question_id / text / author.name /
 * is_anonymous / is_public / path / date_published). Names and text are
 * placeholders. A live question-list response could not be captured without
 * joining a third-party event as a participant, so this shape is
 * "from the client code", not "recorded off the wire" — which is why the
 * rules prefer "not sent, error reported" over guessing.
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
  let t = 1_000_000;
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
    list: (body, eid, query) => bridge.ingest("questions", body, TAB, listUrl(eid || EVENT_A, query)),
    stream: (q) => bridge.ingest("stream", sioFrame(q), TAB, STREAM_URL),
  };
  return h;
}

// Event page loaded with an initial list, then live traffic.
function opened(opts, initial) {
  const h = harness(opts);
  h.list(initial || "[]");
  return h;
}

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

describe("bridge: lists are history, the stream is new", () => {
  test("the first list is history; a stream question is sent", async () => {
    const h = opened({}, LIST);
    h.stream(question(900, "2026-11-14T10:05:00Z"));
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 900"]);
    expect(h.bridge.snapshot()).toMatchObject({ state: "watching", sent: 1, skipped: 3 });
  });

  test("a 200-question backlog on page load sends nothing", async () => {
    const backlog = Array.from({ length: 200 }, (_, i) => question(i + 1, `2026-11-14T09:${String(i % 60).padStart(2, "0")}:00Z`));
    const h = opened({}, list(backlog));
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
    expect(h.bridge.snapshot().skipped).toBe(200);
  });

  test("stream questions without any timestamp are still sent", async () => {
    const h = opened({}, list([question(1)]));
    h.stream(question(2));
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 2"]);
  });

  test("a later list with a different sort order is history (N3)", async () => {
    // Baseline loaded sorted by "top" with only part of the questions.
    const h = opened({}, list([question(1, "2026-11-14T09:50:00Z"), question(2, "2026-11-14T10:00:00Z")]));
    // "Newest" list then shows older questions that were not in the top list.
    h.list(list([question(3, "2026-11-14T09:55:00Z"), question(4, "2026-11-14T09:10:00Z")]), EVENT_A, "sort=newest");
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
  });

  test("an older page of the list is history (N3)", async () => {
    const h = opened({}, list([question(10, "2026-11-14T10:00:00Z")]));
    h.list(list([question(5, "2026-11-14T08:00:00Z"), question(6)]), EVENT_A, "sort=newest&offset=50");
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
  });

  test("a list item is new only when Slido's clock proves it is newer", async () => {
    const h = opened({}, list([question(1, "2026-11-14T10:00:00Z")]));
    h.list(list([question(1, "2026-11-14T10:00:00Z"), question(2, "2026-11-14T10:00:30Z"), question(3, "2026-11-14T10:00:00Z")]));
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 2"]);
  });

  test("a stream update of an old question dated before the baseline is history", async () => {
    const h = opened({}, list([question(1, "2026-11-14T10:00:00Z")]));
    h.stream(question(9, "2026-11-14T09:30:00Z")); // older, never listed (e.g. upvoted)
    h.stream(question(10, "2026-11-14T10:00:30Z"));
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 10"]);
  });

  test("a local clock far ahead or behind changes nothing", async () => {
    for (const skew of [-3_600_000, 3_600_000]) {
      const h = harness({ bridge: { now: () => Date.now() + skew } });
      h.list(list([question(1, "2026-11-14T10:00:00Z")]));
      h.stream(question(2, "2026-11-14T10:00:01Z"));
      await h.bridge.idle();
      expect(h.posts).toHaveLength(1);
    }
  });

  test("switching to another event in the same tab takes a new baseline without any page signal (N3)", async () => {
    const h = opened({}, list([question(1)])); // event A
    // Single-page navigation to event B: no openPage(), just B's list.
    h.list(list([question(101, null, { event_id: 2 }), question(102, null, { event_id: 2 })]), EVENT_B);
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
    h.stream(question(103, null, { event_id: 2 }));
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

  test("stream traffic before any list is not sent; repeated it is flagged", async () => {
    const h = harness();
    h.stream(question(1));
    h.stream(question(2));
    expect(h.bridge.snapshot().state).toBe("watching");
    h.stream(question(3));
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
    expect(h.bridge.snapshot()).toMatchObject({ state: "error", error: "feed_unrecognized" });
  });

  test("lists with undatable unknown ids and no stream at all are flagged, not guessed (N3 rule 4)", async () => {
    const h = opened({}, list([question(1)]));
    h.list(list([question(1), question(2)])); // 2 is unknown, no timestamps, no stream seen
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
    expect(h.bridge.snapshot()).toMatchObject({ state: "error", error: "feed_unrecognized" });
  });

  test("the same unknown list id is fine once the stream is known to work", async () => {
    const h = opened({}, list([question(1)]));
    h.stream(question(2));
    await h.bridge.idle();
    h.list(list([question(1), question(2), question(3)]));
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 2"]);
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

describe("bridge: delivery", () => {
  test("the same question arriving via stream, list refresh and updates is sent once", async () => {
    const q = question(42);
    const h = opened();
    h.stream(q);
    h.list(list([q]));
    h.stream(Object.assign({}, q, { score: 9 }));
    await h.bridge.idle();
    expect(h.posts).toHaveLength(1);
  });

  test("handled ids and baselines survive a service-worker restart", async () => {
    const first = opened();
    first.stream(question(42));
    await first.bridge.idle();
    const posted = [];
    const restored = Core.createBridge({
      post: async (p) => { posted.push(p); return { status: 200 }; },
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

  test("a sent question is never re-sent after the handled-id cap evicts it (N5)", async () => {
    const h = opened({ bridge: { maxSeen: 5 } }, list([question(1, "2026-11-14T10:00:00Z")]));
    h.stream(question(2, "2026-11-14T10:01:00Z")); // Q2 is sent
    await h.bridge.idle();
    expect(texts(h.posts)).toEqual(["Question number 2"]);
    // Twenty other ids push Q2 out of the 5-entry handled set.
    h.list(list(Array.from({ length: 20 }, (_, i) => question(100 + i, "2026-11-14T09:00:00Z"))));
    expect(h.bridge.isHandled(EVENT_A, 2)).toBe(false);
    h.list(list([question(2, "2026-11-14T10:01:00Z")])); // list refresh, dated
    h.list(list([question(2)])); // and undated
    await h.bridge.idle();
    expect(h.posts).toHaveLength(1);
  });

  test("a question is only marked done after a final answer; failed ones are retried on the stream", async () => {
    const h = opened({ responses: [{ status: 503, body: '{"error":"No overlay connected."}' }] });
    const q = question(7);
    h.stream(q);
    await h.bridge.idle();
    expect(h.bridge.isHandled(EVENT_A, 7)).toBe(false);
    h.stream(Object.assign({}, q, { score: 1 }));
    await h.bridge.idle();
    expect(h.posts).toHaveLength(2);
    expect(h.bridge.isHandled(EVENT_A, 7)).toBe(true);
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
