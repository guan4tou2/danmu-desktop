const loadScript = require("./helpers/load-script");

// 訊息流的輪詢（admin-live-feed.js）只在看得見的時候全速跑。
// 釘住：在控制台每 1.5 秒抓一次；在別的頁面放慢到 15 秒、待審數量不抓；
// 分頁藏到背景時完全不抓；回到控制台或回到前景時立刻補抓。
describe("live feed polling follows what is on screen", () => {
  let hidden;

  const calls = (path) => window.fetch.mock.calls.filter(([url]) => String(url).startsWith(path)).length;
  const feed = () => calls("/admin/live-feed/recent");
  const pending = () => calls("/admin/modqueue/list");
  const goTo = (route) => document.dispatchEvent(
    new CustomEvent("admin-route-applied", { detail: { route } }));
  const setHidden = (value) => {
    hidden = value;
    document.dispatchEvent(new Event("visibilitychange"));
  };
  const wait = (ms) => jest.advanceTimersByTimeAsync(ms);

  beforeAll(async () => {
    jest.useFakeTimers();
    hidden = false;
    Object.defineProperty(document, "hidden", { configurable: true, get: () => hidden });
    document.body.innerHTML = '<div id="settings-grid"></div>';
    window.DANMU_CONFIG = { session: { logged_in: true } };
    window.ServerI18n = { t: (key) => key };
    window.AdminUtils = { escapeHtml: (s) => String(s == null ? "" : s) };
    window.fetch = jest.fn(async (url) => ({
      ok: true,
      json: async () => (String(url).startsWith("/admin/modqueue/list")
        ? { pending: [] }
        : { entries: [], next_since: 0 }),
    }));
    jest.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => { cb(); return 1; });
    loadScript("admin-moderation-actions.js");
    loadScript("admin-live-feed.js");
    await wait(0);
  });

  afterAll(() => {
    delete document.hidden;
    jest.useRealTimers();
  });

  beforeEach(async () => {
    setHidden(false);
    goTo("live");
    await wait(0);
    window.fetch.mockClear();
  });

  test("on the console it polls at full speed", async () => {
    await wait(15000);

    expect(feed()).toBe(10); // 每 1.5 秒
    expect(pending()).toBe(3); // 每 5 秒
  });

  test("on another page the feed slows down and the pending count is not fetched", async () => {
    goTo("system");
    await wait(60000);

    expect(feed()).toBeLessThanOrEqual(4); // 15 秒一次，不是 40 次
    expect(feed()).toBeGreaterThanOrEqual(3);
    expect(pending()).toBe(0);
  });

  test("coming back to the console catches up at once", async () => {
    goTo("system");
    await wait(4000);
    window.fetch.mockClear();

    goTo("live");
    await wait(0);

    expect(feed()).toBe(1);
    expect(pending()).toBe(1);
  });

  test("the page settling again on the console does not fetch again", async () => {
    // admin-route-applied 在版面同步時也會發；人沒有離開過就不是「回來」。
    for (let i = 0; i < 5; i++) goTo("live");
    await wait(0);

    expect(feed()).toBe(0);
    expect(pending()).toBe(0);
  });

  test("a tab in the background does not poll at all, and catches up when it returns", async () => {
    setHidden(true);
    await wait(0);
    window.fetch.mockClear();
    await wait(60000);
    expect(feed()).toBe(0);
    expect(pending()).toBe(0);

    setHidden(false);
    await wait(0);
    expect(feed()).toBe(1);
    expect(pending()).toBe(1);
  });
});
