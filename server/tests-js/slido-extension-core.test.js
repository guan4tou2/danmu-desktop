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
 * "from the client code", not "recorded off the wire".
 */
const fs = require("fs");
const path = require("path");

const Core = require("../../slido-extension/core.js");

const LIST = fs.readFileSync(path.join(__dirname, "fixtures/slido/questions-list.json"), "utf8");
const ARMED_AT = Date.parse("2026-11-14T10:00:00.000Z");
const QUESTIONS_URL =
  "https://app.sli.do/eu1/api/v0.5/events/4914ff81-0000-4000-8000-000000000000/questions?path=%2Fquestions&sort=newest";

function question(id, publishedIso, extra) {
  return Object.assign(
    {
      author: { event_user_id: 9000 + id, name: `Person ${id}` },
      date_published: publishedIso,
      event_question_id: id,
      event_user_id: 9000 + id,
      is_anonymous: false,
      is_public: true,
      path: "/questions",
      text: `Question number ${id}`,
    },
    extra || {},
  );
}

function sioFrame(payload) {
  return "42" + JSON.stringify(["slido.event.question.update", payload]);
}

// A fake clock: sleep() advances time instead of waiting, so pacing is
// asserted on timestamps rather than on wall-clock flakiness.
function harness(opts) {
  let t = ARMED_AT + 60_000;
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
  return { bridge, posts, advance: (ms) => (t += ms) };
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
    expect(anon.authorId).toBe("1003");
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
    const ns = '42/participant,' + JSON.stringify(["slido.event.question.update", q]);
    expect(Core.parseBody("stream", ns).questions[0].id).toBe("700");
    const batch = ["2", "40", sioFrame(question(701, "2026-11-14T10:01:00Z")), sioFrame(question(702, "2026-11-14T10:01:00Z"))].join("\x1e");
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
  test("per-participant fingerprint, nickname capped at 20, text capped at 100", () => {
    const q = Core.normalizeQuestion(question(1, "2026-11-14T10:01:00Z", { text: "x".repeat(150), author: { event_user_id: 77, name: "N".repeat(30) }, event_user_id: 77 }));
    const p = Core.buildFirePayload(q, {});
    expect(p.fingerprint).toBe("slido:77");
    expect(Array.from(p.text)).toHaveLength(100);
    expect(Array.from(p.nickname)).toHaveLength(20);
    expect(Core.buildFirePayload(q, { includeAuthor: false }).nickname).toBeUndefined();
  });
});

describe("classifyFireResponse", () => {
  test.each([
    [200, "", "sent", ""],
    [202, "", "sent", ""],
    [400, "blocked", "blocked", ""],
    [403, "banned", "blocked", ""],
    [429, "", "failed", "rate_limited"],
    [503, '{"error":"No overlay connected."}', "failed", "no_overlay"],
    [503, "", "failed", "rejected"],
    [500, "", "failed", "rejected"],
    [0, "", "failed", "server_unreachable"],
  ])("HTTP %s → %s", (status, body, outcome, error) => {
    expect(Core.classifyFireResponse(status, body)).toEqual({ outcome, error });
  });
});

describe("bridge", () => {
  test("only questions published after arming are sent; history, replies and unapproved ones are not", async () => {
    const { bridge, posts } = harness();
    bridge.ingest("questions", LIST, ARMED_AT);
    await bridge.idle();
    expect(posts.map((p) => p.payload.text)).toEqual([
      "Placeholder question asked after the bridge started",
      "Placeholder anonymous question",
    ]);
    expect(posts[1].payload.nickname).toBeUndefined();
    expect(bridge.snapshot()).toMatchObject({ state: "watching", sent: 2, skipped: 1 });
  });

  test("a 200-question backlog on page load sends nothing", async () => {
    const backlog = Array.from({ length: 200 }, (_, i) => question(i + 1, new Date(ARMED_AT - (200 - i) * 1000).toISOString()));
    const { bridge, posts } = harness();
    bridge.ingest("questions", JSON.stringify(backlog), ARMED_AT);
    await bridge.idle();
    expect(posts).toHaveLength(0);
    expect(bridge.snapshot().skipped).toBe(200);
  });

  test("questions without a timestamp are treated as history", async () => {
    const { bridge, posts } = harness();
    bridge.ingest("stream", sioFrame(question(1, undefined)), ARMED_AT);
    await bridge.idle();
    expect(posts).toHaveLength(0);
  });

  test("the same question arriving via list, stream and later updates is sent once", async () => {
    const q = question(42, "2026-11-14T10:05:00Z");
    const { bridge, posts } = harness();
    bridge.ingest("stream", sioFrame(q), ARMED_AT);
    bridge.ingest("questions", JSON.stringify([q]), ARMED_AT);
    bridge.ingest("stream", sioFrame(Object.assign({}, q, { score: 9 })), ARMED_AT);
    await bridge.idle();
    expect(posts).toHaveLength(1);
  });

  test("seen ids restored after a service-worker restart are not re-sent", async () => {
    const q = question(42, "2026-11-14T10:05:00Z");
    const first = harness();
    first.bridge.ingest("stream", sioFrame(q), ARMED_AT);
    await first.bridge.idle();
    const second = harness({ bridge: { seenIds: first.bridge.seenIds() } });
    second.bridge.ingest("stream", sioFrame(q), ARMED_AT);
    await second.bridge.idle();
    expect(second.posts).toHaveLength(0);
  });

  test("sends are paced by minIntervalMs", async () => {
    const burst = [1, 2, 3, 4].map((i) => question(i, "2026-11-14T10:05:00Z"));
    const { bridge, posts } = harness({ bridge: { minIntervalMs: 3000 } });
    bridge.ingest("questions", JSON.stringify(burst), ARMED_AT);
    await bridge.idle();
    expect(posts).toHaveLength(4);
    const gaps = posts.slice(1).map((p, i) => p.at - posts[i].at);
    gaps.forEach((g) => expect(g).toBeGreaterThanOrEqual(3000));
  });

  test("a flood beyond maxQueue drops the oldest pending questions and counts them", async () => {
    const flood = Array.from({ length: 25 }, (_, i) => question(i + 1, "2026-11-14T10:05:00Z"));
    const { bridge, posts } = harness({ bridge: { maxQueue: 10 } });
    bridge.ingest("questions", JSON.stringify(flood), ARMED_AT);
    await bridge.idle();
    // The first one is already being sent when the overflow starts.
    expect(posts.length).toBeLessThanOrEqual(11);
    expect(posts[posts.length - 1].payload.text).toBe("Question number 25");
    expect(bridge.snapshot().dropped).toBe(25 - posts.length);
  });

  test("stop() empties the queue and later frames are ignored", async () => {
    const { bridge, posts } = harness();
    bridge.ingest("questions", JSON.stringify([1, 2, 3].map((i) => question(i, "2026-11-14T10:05:00Z"))), ARMED_AT);
    bridge.stop();
    await bridge.idle();
    expect(posts.length).toBeLessThanOrEqual(1);
    const before = posts.length;
    expect(bridge.ingest("stream", sioFrame(question(9, "2026-11-14T10:06:00Z")), ARMED_AT)).toBe(0);
    await bridge.idle();
    expect(posts).toHaveLength(before);
    expect(bridge.pending()).toBe(0);
  });

  test("server outcomes become counters and a visible error state", async () => {
    const responses = [
      { status: 400, body: "blocked" },
      { status: 429, body: "" },
      new Error("network down"),
      { status: 200, body: "{}" },
    ];
    const { bridge } = harness({ responses });
    bridge.ingest("questions", JSON.stringify([1, 2, 3].map((i) => question(i, "2026-11-14T10:05:00Z"))), ARMED_AT);
    await bridge.idle();
    expect(bridge.snapshot()).toMatchObject({ state: "error", error: "server_unreachable", blocked: 1, failed: 2, sent: 0 });
    bridge.ingest("stream", sioFrame(question(4, "2026-11-14T10:06:00Z")), ARMED_AT);
    await bridge.idle();
    expect(bridge.snapshot()).toMatchObject({ state: "watching", error: "", sent: 1 });
  });

  test("an unrecognized question feed surfaces as feed_unrecognized", () => {
    const { bridge } = harness();
    bridge.ingest("questions", JSON.stringify({ unexpected: true }), ARMED_AT);
    expect(bridge.snapshot()).toMatchObject({ state: "error", error: "feed_unrecognized" });
    bridge.ingest("questions", "[]", ARMED_AT);
    expect(bridge.snapshot().state).toBe("watching");
  });
});
