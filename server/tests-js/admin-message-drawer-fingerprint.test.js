const loadScript = require("./helpers/load-script");

// 抽屜的「此人」統計要用完整指紋比對。以前比前 8 字元：具名 Slido 提問的
// 指紋是 "slido:<id>"，"slido:12345" 與 "slido:12999" 前綴相同，會把兩個
// 不同參與者的訊息與統計混在一起。
describe("message drawer matches the full fingerprint", () => {
  let records;
  let feed;

  beforeEach(async () => {
    jest.useFakeTimers();
    document.body.innerHTML = "";
    window.DANMU_CONFIG = { session: { logged_in: true } };
    window.ServerI18n = { t: (key) => key };
    window.AdminUtils = {
      escapeHtml: (s) => String(s == null ? "" : s),
      closeIcon: "x",
    };
    records = [
      { fingerprint: "slido:12999", message_count: 50, violation_count: 4 },
      { fingerprint: "slido:12345", message_count: 3, violation_count: 0 },
    ];
    feed = [
      { id: "a", ts: 1, data: { text: "mine one", fingerprint: "slido:12345" } },
      { id: "b", ts: 2, data: { text: "someone else", fingerprint: "slido:12999" } },
      { id: "c", ts: 3, data: { text: "mine two", fingerprint: "slido:12345" } },
    ];
    window.AdminLiveFeed = { getEntries: () => feed };
    global.fetch = jest.fn(async () => ({ ok: true, json: async () => ({ records }) }));
    loadScript("admin-message-drawer.js");
    document.dispatchEvent(new Event("DOMContentLoaded"));
  });

  afterEach(() => {
    jest.useRealTimers();
    delete window.AdminLiveFeed;
    delete window.AdminMessageDrawer;
  });

  const stat = (i) => document.querySelectorAll(".admin-msgd-v4__sender-stats .v")[i].textContent.trim();

  test("stats come from the exact sender, not one sharing an 8-char prefix", async () => {
    window.AdminMessageDrawer.open(feed[2]);
    await jest.advanceTimersByTimeAsync(0);
    expect(stat(0)).toBe("3");
    expect(stat(2)).toBe("0");
  });

  test("same-sender messages exclude a different participant with the same prefix", async () => {
    records = [];
    window.AdminMessageDrawer.open(feed[2]);
    await jest.advanceTimersByTimeAsync(0);
    // Falls back to the in-memory same-sender count: 2 ("mine one/two"), not 3.
    expect(stat(0)).toBe("2");
  });
});
