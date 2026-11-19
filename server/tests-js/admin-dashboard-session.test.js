const loadScript = require("./helpers/load-script");

// 控制台的「訊息」「已進行」兩格是這一場的數字（admin-dashboard.js）。
// 釘住：訊息數來自 /admin/session/current 的 message_count；已進行會走；
// 沒有進行中的場次時兩格都是「—」。
describe("console session tiles", () => {
  let session;

  const tile = (name) => document.querySelector(`[data-kpi="${name}"] [data-kpi-value]`).textContent;

  beforeAll(() => {
    window.ServerI18n = { t: (key) => key, currentLang: "zh" };
    window.showToast = jest.fn();
    loadScript("admin-dashboard.js");
  });

  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2026, 10, 19, 12, 0, 0));
    document.body.innerHTML = `
      <div data-kpi="messages"><div data-kpi-value>—</div></div>
      <div data-kpi="session"><div data-kpi-value>—</div></div>`;
    window.fetch = jest.fn(async () => ({ ok: true, json: async () => session }));
  });

  afterEach(() => {
    session = { status: "idle" };
    return window.AdminDashboard.refreshSessionBanner().then(() => jest.useRealTimers());
  });

  test("a live session shows its own message count and a running clock", async () => {
    const startedAt = Date.now() / 1000 - 125; // 2 分 5 秒前開場
    session = { status: "live", id: "sess_1", name: "Friday", started_at: startedAt, message_count: 42 };

    await window.AdminDashboard.refreshSessionBanner();
    expect(tile("messages")).toBe("42");
    expect(tile("session")).toBe("02:05");

    jest.advanceTimersByTime(3000);
    expect(tile("session")).toBe("02:08");

    // 下一次輪詢帶回新的則數。
    session = { ...session, message_count: 47 };
    await window.AdminDashboard.refreshSessionBanner();
    expect(tile("messages")).toBe("47");
  });

  test("without a session both tiles are blank and the clock stops", async () => {
    session = { status: "live", started_at: Date.now() / 1000 - 10, message_count: 3 };
    await window.AdminDashboard.refreshSessionBanner();
    expect(tile("messages")).toBe("3");

    session = { status: "idle", id: null };
    await window.AdminDashboard.refreshSessionBanner();
    expect(tile("messages")).toBe("—");
    expect(tile("session")).toBe("—");

    jest.advanceTimersByTime(5000);
    expect(tile("session")).toBe("—");
  });

  test("an answer that was asked earlier but arrives later does not win", async () => {
    // 兩條路都在抓場次狀態；回來的順序不一定是送出的順序。
    const startedAt = Date.now() / 1000 - 60;
    const live = (count) => ({ status: "live", id: "sess_1", started_at: startedAt, message_count: count });
    const pending = [];
    window.fetch = jest.fn(() => new Promise((resolve) => {
      pending.push((body) => resolve({ ok: true, json: async () => body }));
    }));

    const older = window.AdminDashboard.refreshSessionBanner();
    const newer = window.AdminDashboard.refreshSessionBanner();
    pending[1](live(12)); // 後送出的先回來
    await newer;
    expect(tile("messages")).toBe("12");

    pending[0](live(10)); // 先送出的這時才回來
    await older;
    expect(tile("messages")).toBe("12");

    window.fetch = jest.fn(async () => ({ ok: true, json: async () => session }));
  });

  test("a poll sent before the session was opened does not undo the opening", async () => {
    document.body.insertAdjacentHTML("beforeend", '<div id="admin-session-banner"></div>');
    session = { status: "idle", id: null };
    await window.AdminDashboard.refreshSessionBanner(); // 畫出「開啟場次」表單

    // 一次輪詢送出去了（當時還沒有場次），回應還在路上……
    let answerPoll;
    window.fetch = jest.fn(() => new Promise((resolve) => {
      answerPoll = () => resolve({ ok: true, json: async () => ({ status: "idle", id: null }) });
    }));
    const poll = window.AdminDashboard.refreshSessionBanner();

    // ……主持人按下開啟場次。
    const startedAt = Date.now() / 1000;
    window.csrfFetch = jest.fn(async () => ({
      ok: true,
      json: async () => ({ session: { status: "live", id: "sess_2", name: "Friday", started_at: startedAt } }),
    }));
    document.querySelector("[data-sess-name]").value = "Friday";
    document.querySelector('[data-sess-action="open"]').click();
    for (let i = 0; i < 5; i++) await Promise.resolve();
    expect(tile("messages")).toBe("0");
    expect(tile("session")).toBe("00:00");

    answerPoll(); // 舊的那次這時才回來，說「沒有場次」
    await poll;

    expect(tile("messages")).toBe("0");
    expect(document.querySelector('[data-sess-action="close"]')).not.toBeNull();

    window.fetch = jest.fn(async () => ({ ok: true, json: async () => session }));
  });
});
