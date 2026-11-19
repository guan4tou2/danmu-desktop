const loadScript = require("./helpers/load-script");

// 頂欄通知鈴（admin-notifications.js）。
// 釘住：標過已讀的事件，在新事件進來之後仍然是已讀（鈴鐺歸得了零）；
// 自己的登入、登出不算通知，登入失敗才算。
// 全程走真實操作：點鈴鐺開面板、面板開著時每 30 秒刷新、按「全部已讀」。
describe("notification bell", () => {
  let audit; // /admin/audit 回的事件，新的在前
  let filterEvents; // /admin/filters/events 回的事件

  const event = (ts, source, kind) => ({ ts, source, kind, actor: "admin" });
  const badge = () => {
    const el = document.querySelector("[data-notif-badge]");
    return !el || el.hidden ? "" : el.textContent.trim();
  };
  const panel = () => document.getElementById("admin-notif-panel");
  // 面板開著時模組每 30 秒重抓一次；這是測試裡唯一的「刷新」手段。
  async function refresh() {
    if (panel().hidden) document.getElementById("admin-notif-bell").click();
    await jest.advanceTimersByTimeAsync(30000);
  }

  beforeAll(async () => {
    jest.useFakeTimers();
    audit = [];
    filterEvents = [];
    window.ServerI18n = {
      t: (key, params) => key + (params ? ":" + JSON.stringify(params) : ""),
      currentLang: "zh",
    };
    window.showToast = jest.fn();
    window.DANMU_CONFIG = { session: { logged_in: true } };
    window.fetch = jest.fn(async (url) => {
      const u = String(url);
      const system = u.startsWith("/admin/audit") && !u.includes("source=webhooks");
      if (u.startsWith("/admin/filters/events")) {
        return { ok: true, json: async () => ({ events: filterEvents }) };
      }
      return { ok: true, json: async () => ({ events: system ? audit : [] }) };
    });
    document.body.innerHTML =
      '<div id="app-container"><div class="admin-dash-topbar-actions"></div></div>';
    loadScript("admin-notifications.js");
    document.dispatchEvent(new Event("DOMContentLoaded"));
    await jest.advanceTimersByTimeAsync(0);
  });

  afterAll(() => jest.useRealTimers());

  beforeEach(() => {
    window.localStorage.clear();
    audit = [];
    filterEvents = [];
  });

  test("your own sign-ins are not notifications; a failed one is", async () => {
    audit = [
      event(300, "auth", "login"),
      event(200, "auth", "login_failed"),
      event(150, "auth", "logout"),
      event(100, "session", "opened"),
    ];
    await refresh();

    expect(badge()).toBe("2"); // login_failed 與 session opened
  });

  test("marking everything read still holds after a newer event arrives", async () => {
    audit = [event(200, "auth", "login_failed"), event(100, "session", "opened")];
    await refresh();
    expect(badge()).toBe("2");

    panel().querySelector("[data-notif-readall]").click();
    expect(badge()).toBe("");

    // 新事件排在最前面，舊事件在清單裡的位置全部往後移一格。
    audit = [event(300, "session", "closed"), ...audit];
    await refresh();

    expect(badge()).toBe("1"); // 只有新的那一則
  });

  test("two events identical down to the timestamp are still two notifications", async () => {
    // 伺服器給每筆事件一個 id；時間與內容完全相同也分得開。
    const twin = (id) => ({ ...event(200.5, "auth", "login_failed"), id });
    audit = [twin("bbbb"), twin("aaaa")];
    await refresh();
    expect(badge()).toBe("2");

    // 讀掉較舊的那一則；它滾出這一頁之後，較新的那則仍是未讀。
    const rows = panel().querySelectorAll("[data-notif-go]");
    rows[rows.length - 1].click();
    expect(badge()).toBe("1");
    audit = [twin("bbbb")];
    await refresh();
    expect(badge()).toBe("1");
  });

  test("two failed sign-ins a moment apart are two notifications", async () => {
    // 伺服器記的時間帶小數；同一秒內的兩次嘗試時間不同。
    audit = [event(200.412, "auth", "login_failed"), event(200.108, "auth", "login_failed")];
    await refresh();

    expect(badge()).toBe("2");
  });

  test("reading one of them stays put when older events leave the page", async () => {
    audit = [event(200.412, "auth", "login_failed"), event(200.108, "auth", "login_failed")];
    await refresh();
    // 只讀較舊的那一則。
    const rows = panel().querySelectorAll("[data-notif-go]");
    expect(rows.length).toBe(2);
    rows[rows.length - 1].click();
    expect(badge()).toBe("1");

    // 較舊的那則滾出伺服器回傳的範圍，較新的那則還在，而且還是未讀。
    audit = [event(200.412, "auth", "login_failed")];
    await refresh();

    expect(badge()).toBe("1");
  });

  test("after a restart, a new rule hit is not taken for one already read", async () => {
    // seq 是伺服器記憶體裡的流水號，重啟後從 1 重新數。
    filterEvents = [{ seq: 1, ts: 100, action: "drop", rule_id: "r1", text_excerpt: "spam" }];
    await refresh();
    panel().querySelector("[data-notif-readall]").click();
    expect(badge()).toBe("");

    filterEvents = [{ seq: 1, ts: 900, action: "drop", rule_id: "r1", text_excerpt: "spam" }];
    await refresh();

    expect(badge()).toBe("1");
  });
});
