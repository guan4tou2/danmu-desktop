const loadScript = require("./helpers/load-script");

// 手機底部導覽上的待審數量（admin-mobile-nav.js）。
// 釘住：導覽沒有顯示（桌面寬度）或分頁在背景時，不去抓這個數字。
describe("mobile nav pending badge", () => {
  let hidden;
  const nav = () => document.getElementById("admin-mobile-nav-root");
  const fetched = () => window.fetch.mock.calls.length;
  const wait = (ms) => jest.advanceTimersByTimeAsync(ms);

  beforeAll(async () => {
    jest.useFakeTimers();
    hidden = false;
    Object.defineProperty(document, "hidden", { configurable: true, get: () => hidden });
    document.body.className = "admin-body";
    window.DANMU_CONFIG = { session: { logged_in: true } };
    window.ServerI18n = { t: (key) => key };
    window.fetch = jest.fn(async () => ({ ok: true, json: async () => ({ pending: [{ id: "a" }, { id: "b" }] }) }));
    loadScript("admin-mobile-nav.js");
    await wait(0);
  });

  afterAll(() => {
    delete document.hidden;
    jest.useRealTimers();
  });

  beforeEach(() => {
    hidden = false;
    nav().style.display = "";
    window.fetch.mockClear();
  });

  test("while the nav is on screen the count is kept up to date", async () => {
    await wait(16000);

    expect(fetched()).toBe(2); // 每 8 秒
    const badge = document.querySelector("[data-mn-badge='pending']");
    expect(badge.textContent).toBe("2");
    expect(badge.hidden).toBe(false);
  });

  test("at desktop width the nav is not displayed, so nothing is fetched", async () => {
    nav().style.display = "none"; // 樣式表在桌面寬度下做的事
    await wait(60000);

    expect(fetched()).toBe(0);
  });

  test("a tab in the background fetches nothing, and catches up when it returns", async () => {
    hidden = true;
    await wait(60000);
    expect(fetched()).toBe(0);

    hidden = false;
    document.dispatchEvent(new Event("visibilitychange"));
    await wait(0);
    expect(fetched()).toBe(1);
  });
});
