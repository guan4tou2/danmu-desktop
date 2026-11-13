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
 * "from the client code", not "recorded off the wire" — which is why newness
 * is decided by id and the tests below also cover payloads without dates.
 */
const fs = require("fs");
const path = require("path");

const Core = require("../../slido-extension/core.js");

const LIST = fs.readFileSync(path.join(__dirname, "fixtures/slido/questions-list.json"), "utf8");
// Underscore on purpose: tailwind's scanner reads this folder, and a
// hyphenated id that looks like a utility would be emitted as a class.
const PAGE = "page_one";
const QUESTIONS_URL =
  "https://app.sli.do/eu1/api/v0.5/events/4914ff81-0000-4000-8000-000000000000/questions?path=%2Fquestions&sort=newest";

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
  bridge.openPage(PAGE);
  return { bridge, posts };
}

// Page loaded with an initial list, then live traffic.
function opened(opts, initial) {
  const h = harness(opts);
  h.bridge.ingest("questions", initial || "[]", PAGE);
  return h;
}

describe("classifyUrl", () => {
  test("recognises the question list and the realtime stream on Slido hosts only", () => {
    expect(Core.classifyUrl(QUESTIONS_URL)).toBe("questions");
    expect(Core.classifyUrl("https://app.sli.do/eu1/stream/v0.5/stream-sio/?EIO=4&transport=websocket")).toBe("stream");
    expect(Core.classifyUrl("wss://app.sli.do/eu1/stream/v0.5/stream-sio/?EIO=4")).toBe("stream");
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

describe("bridge: what counts as new", () => {
  test("the page's first question list is history; only later ids are sent", async () => {
    const { bridge, posts } = opened({}, LIST);
    await bridge.idle();
    expect(posts).toHaveLength(0);
    bridge.ingest("stream", sioFrame(question(900, "2026-11-14T10:05:00Z")), PAGE);
    await bridge.idle();
    expect(posts.map((p) => p.payload.text)).toEqual(["Question number 900"]);
    expect(bridge.snapshot()).toMatchObject({ state: "watching", sent: 1, skipped: 5 });
  });

  test("a 200-question backlog on page load sends nothing", async () => {
    const backlog = Array.from({ length: 200 }, (_, i) => question(i + 1, `2026-11-14T09:${String(i % 60).padStart(2, "0")}:00Z`));
    const { bridge, posts } = opened({}, list(backlog));
    await bridge.idle();
    expect(posts).toHaveLength(0);
    expect(bridge.snapshot().skipped).toBe(200);
  });

  test("stream questions without any timestamp are still sent once the page has a baseline", async () => {
    const { bridge, posts } = opened({}, list([question(1)]));
    bridge.ingest("stream", sioFrame(question(2)), PAGE);
    await bridge.idle();
    expect(posts.map((p) => p.payload.text)).toEqual(["Question number 2"]);
  });

  test("timestamps are compared with Slido's clock, not this computer's", async () => {
    // Initial list's newest question is 10:00 server time. Whatever the local
    // clock says, a question published at 10:00:30 is new and an old one
    // that resurfaces (e.g. someone upvotes it) is not.
    const { bridge, posts } = opened({}, list([question(1, "2026-11-14T09:59:00Z"), question(2, "2026-11-14T10:00:00Z")]));
    bridge.ingest("stream", sioFrame(question(3, "2026-11-14T10:00:30Z")), PAGE);
    bridge.ingest("stream", sioFrame(question(4, "2026-11-14T09:30:00Z")), PAGE); // older, never listed
    await bridge.idle();
    expect(posts.map((p) => p.payload.text)).toEqual(["Question number 3"]);
  });

  test("a local clock far ahead or behind changes nothing", async () => {
    for (const skew of [-3_600_000, 3_600_000]) {
      const h = harness({ bridge: { now: () => Date.now() + skew } });
      h.bridge.ingest("questions", list([question(1, "2026-11-14T10:00:00Z")]), PAGE);
      h.bridge.ingest("stream", sioFrame(question(2, "2026-11-14T10:00:01Z")), PAGE);
      await h.bridge.idle();
      expect(h.posts).toHaveLength(1);
    }
  });

  test("stream traffic before the page's list is history; repeated it is flagged", async () => {
    const h = harness();
    for (const id of [1, 2]) h.bridge.ingest("stream", sioFrame(question(id)), PAGE);
    expect(h.bridge.snapshot().state).toBe("watching");
    h.bridge.ingest("stream", sioFrame(question(3)), PAGE);
    await h.bridge.idle();
    expect(h.posts).toHaveLength(0);
    expect(h.bridge.snapshot()).toMatchObject({ state: "error", error: "feed_unrecognized" });
  });

  test("replies and questions still waiting for Slido moderation are not sent", async () => {
    const { bridge, posts } = opened();
    bridge.ingest("stream", sioFrame(question(1, null, { path: "/questions/77" })), PAGE);
    bridge.ingest("stream", sioFrame(question(2, null, { is_public: false })), PAGE);
    await bridge.idle();
    expect(posts).toHaveLength(0);
  });

  test("reopening the page takes a new baseline", async () => {
    const { bridge, posts } = opened({}, list([question(1)]));
    bridge.openPage(PAGE);
    bridge.ingest("questions", list([question(1), question(2)]), PAGE); // 2 arrived while reloading
    await bridge.idle();
    expect(posts).toHaveLength(0);
  });

  test("while switched off ids are learned, so switching on means from now on", async () => {
    const { bridge, posts } = opened({ bridge: { active: false } });
    bridge.ingest("stream", sioFrame(question(1)), PAGE);
    bridge.setActive(true);
    bridge.ingest("stream", sioFrame(question(1, null, { score: 3 })), PAGE); // upvote of the old one
    bridge.ingest("stream", sioFrame(question(2)), PAGE);
    await bridge.idle();
    expect(posts.map((p) => p.payload.text)).toEqual(["Question number 2"]);
  });
});

describe("bridge: delivery", () => {
  test("the same question arriving via stream, list refresh and updates is sent once", async () => {
    const q = question(42);
    const { bridge, posts } = opened();
    bridge.ingest("stream", sioFrame(q), PAGE);
    bridge.ingest("questions", list([q]), PAGE);
    bridge.ingest("stream", sioFrame(Object.assign({}, q, { score: 9 })), PAGE);
    await bridge.idle();
    expect(posts).toHaveLength(1);
  });

  test("seen ids and page baselines survive a service-worker restart", async () => {
    const first = opened();
    first.bridge.ingest("stream", sioFrame(question(42)), PAGE);
    await first.bridge.idle();
    const posted = [];
    const restored = Core.createBridge({
      post: async (p) => { posted.push(p); return { status: 200 }; },
      seenIds: first.bridge.seenIds(),
      pages: first.bridge.pages(), // baseline kept: no reopen needed
    });
    expect(restored.ingest("stream", sioFrame(question(42)), PAGE)).toBe(0);
    expect(restored.ingest("stream", sioFrame(question(43)), PAGE)).toBe(1);
    await restored.idle();
    expect(posted.map((p) => p.text)).toEqual(["Question number 43"]);
  });

  test("sends are paced by minIntervalMs", async () => {
    const { bridge, posts } = opened({ bridge: { minIntervalMs: 3000 } });
    bridge.ingest("questions", list([1, 2, 3, 4].map((i) => question(i))), PAGE);
    await bridge.idle();
    expect(posts).toHaveLength(4);
    posts.slice(1).forEach((p, i) => expect(p.at - posts[i].at).toBeGreaterThanOrEqual(3000));
  });

  test("a flood beyond maxQueue drops the oldest pending questions and counts them", async () => {
    const { bridge, posts } = opened({ bridge: { maxQueue: 10 } });
    bridge.ingest("questions", list(Array.from({ length: 25 }, (_, i) => question(i + 1))), PAGE);
    await bridge.idle();
    expect(posts).toHaveLength(10);
    expect(posts[posts.length - 1].payload.text).toBe("Question number 25");
    expect(bridge.snapshot().dropped).toBe(15);
  });

  test("switching off counts what was still waiting and sends nothing more", async () => {
    const { bridge, posts } = opened();
    bridge.ingest("questions", list([1, 2, 3].map((i) => question(i))), PAGE);
    bridge.setActive(false);
    await bridge.idle();
    const sent = posts.length;
    expect(sent).toBeLessThanOrEqual(1);
    expect(bridge.snapshot().dropped).toBe(3 - sent);
    expect(bridge.ingest("stream", sioFrame(question(9)), PAGE)).toBe(0);
    await bridge.idle();
    expect(posts).toHaveLength(sent);
    expect(bridge.pending()).toBe(0);
  });

  test("a question is only marked done after a final answer; failed ones are retried when seen again", async () => {
    const { bridge, posts } = opened({ responses: [{ status: 503, body: '{"error":"No overlay connected."}' }] });
    const q = question(7);
    bridge.ingest("stream", sioFrame(q), PAGE);
    await bridge.idle();
    expect(bridge.seenIds()).not.toContain("7");
    bridge.ingest("stream", sioFrame(Object.assign({}, q, { score: 1 })), PAGE);
    await bridge.idle();
    expect(posts).toHaveLength(2);
    expect(bridge.seenIds()).toContain("7");
    bridge.ingest("stream", sioFrame(q), PAGE);
    await bridge.idle();
    expect(posts).toHaveLength(2);
  });

  test("server outcomes become counters and a visible error state", async () => {
    const responses = [
      { status: 400, body: "blocked" },
      { status: 202, body: "{}" },
      { status: 429, body: "" },
      new Error("network down"),
      { status: 200, body: "{}" },
    ];
    const { bridge } = opened({ responses });
    bridge.ingest("questions", list([1, 2, 3, 4].map((i) => question(i))), PAGE);
    await bridge.idle();
    expect(bridge.snapshot()).toMatchObject({ state: "error", error: "server_unreachable", blocked: 1, held: 1, failed: 2, sent: 0 });
    bridge.ingest("stream", sioFrame(question(5)), PAGE);
    await bridge.idle();
    expect(bridge.snapshot()).toMatchObject({ state: "watching", error: "", sent: 1 });
  });

  test("a rejected token is a distinct, visible error", async () => {
    const { bridge } = opened({ responses: [{ status: 401, body: '{"error":"Invalid fire token"}' }] });
    bridge.ingest("stream", sioFrame(question(1)), PAGE);
    await bridge.idle();
    expect(bridge.snapshot()).toMatchObject({ state: "error", error: "token_invalid", failed: 1 });
    const h = opened();
    h.bridge.noteError("token_invalid"); // heartbeat got a 401
    expect(h.bridge.snapshot().error).toBe("token_invalid");
  });

  test("an unrecognized question feed surfaces as feed_unrecognized", () => {
    const { bridge } = opened();
    bridge.ingest("questions", JSON.stringify({ unexpected: true }), PAGE);
    expect(bridge.snapshot()).toMatchObject({ state: "error", error: "feed_unrecognized" });
    bridge.ingest("questions", "[]", PAGE);
    expect(bridge.snapshot().state).toBe("watching");
  });
});
