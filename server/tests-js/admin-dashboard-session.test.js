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
});
