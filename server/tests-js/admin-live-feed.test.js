const loadScript = require("./helpers/load-script");

// 2026-10-29：訊息流從「每則訊息整表重建」改成「只插一列」。
// 這裡釘住三件在真實流量下會壞掉的事：
//   1. 新訊息進來時，既有那一列還是同一個 DOM 節點（沒有被重建）
//   2. 鍵盤焦點不會因為新訊息而消失（J/K 巡覽的前提）
//   3. 有 message_id 的訊息才有「撤下」，而且打的是 /admin/overlay/recall
describe("live feed incremental rendering", () => {
  let queue;
  let fetchMock;

  function entry(seq, text, messageId) {
    return { seq, data: { text, message_id: messageId, fingerprint: "fp-" + seq } };
  }

  beforeEach(async () => {
    jest.useFakeTimers();
    document.body.innerHTML = '<div id="settings-grid"></div>';

    window.DANMU_CONFIG = { session: { logged_in: true } };
    window.ServerI18n = { t: key => key };
    window.AdminUtils = {
      escapeHtml: s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
      })[c])
    };

    queue = [];
    fetchMock = jest.fn(async url => {
      const since = Number(new URL(url, "http://localhost").searchParams.get("since") || 0);
      const fresh = queue.filter(e => e.seq > since);
      return {
        ok: true,
        json: async () => ({
          entries: fresh,
          next_since: fresh.length ? fresh[fresh.length - 1].seq : since
        })
      };
    });
    global.fetch = fetchMock;

    jest.spyOn(window, "requestAnimationFrame").mockImplementation(cb => { cb(); return 1; });

    // 訊息流的封鎖／撤下拉共用的 AdminModeration——要先載。
    loadScript("admin-moderation-actions.js");
    loadScript("admin-live-feed.js");
    await jest.advanceTimersByTimeAsync(0);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
    delete window.DANMU_CONFIG;
    delete window.AdminLiveFeed;
  });

  test("restores the feed after the admin shell replaces its container", async () => {
    queue.push(entry(1, "retained", "message-1"));
    await jest.advanceTimersByTimeAsync(1500);
    document.getElementById("settings-grid").innerHTML = "";
    document.dispatchEvent(new CustomEvent("admin-panel-rendered"));
    expect(document.querySelectorAll("#sec-live-feed")).toHaveLength(1);
    expect(document.querySelector("#liveFeedList").textContent).toContain("retained");
    queue.push(entry(2, "after remount", "message-2"));
    await jest.advanceTimersByTimeAsync(1500);
    expect(document.querySelectorAll(".admin-live-feed-row")).toHaveLength(2);
  });

  const rows = () => Array.from(document.querySelectorAll("#liveFeedList .admin-live-feed-row"));

  async function poll() {
    await jest.advanceTimersByTimeAsync(1500);
  }

  test("new message inserts one row instead of rebuilding the list", async () => {
    queue.push(entry(1, "第一則", "id1"));
    await poll();
    expect(rows()).toHaveLength(1);

    const firstRow = rows()[0];

    queue.push(entry(2, "第二則", "id2"));
    await poll();

    expect(rows()).toHaveLength(2);
    // 關鍵：舊的那一列是同一個節點。整表重建會讓這個參照失效。
    expect(rows()[1]).toBe(firstRow);
  });

  test("keyboard focus survives an incoming message", async () => {
    queue.push(entry(1, "第一則", "id1"));
    await poll();

    const row = rows()[0];
    row.focus();
    expect(document.activeElement).toBe(row);

    queue.push(entry(2, "第二則", "id2"));
    await poll();

    expect(document.activeElement).toBe(row);
  });

  test("rows carry the server message_id so recall can target one message", async () => {
    queue.push(entry(1, "要撤下的那一則", "abc123"));
    await poll();

    const row = rows()[0];
    expect(row.dataset.id).toBe("mabc123");
    expect(row.querySelector("[data-message-id]")).toBeNull();
    expect(row.textContent).toContain("lfRecallBtn");
  });

  test("messages without message_id get no recall button", async () => {
    queue.push({ seq: 1, data: { text: "舊資料", fingerprint: "fp" } });
    await poll();

    const row = rows()[0];
    expect(row.dataset.id).toBe("e1");
    expect(row.textContent).not.toContain("lfRecallBtn");
  });

  test("recall posts the message id and marks the row", async () => {
    const calls = [];
    window.csrfFetch = jest.fn(async (url, opts) => {
      calls.push({ url, body: JSON.parse(opts.body) });
      return { ok: true, json: async () => ({ status: "ok" }) };
    });
    window.showToast = jest.fn();

    queue.push(entry(1, "不該出現的話", "xyz789"));
    await poll();

    const row = rows()[0];
    const btn = Array.from(row.querySelectorAll("button"))
      .find(b => b.textContent === "lfRecallBtn");
    btn.click();
    await jest.advanceTimersByTimeAsync(0);

    expect(calls).toHaveLength(1);
    expect(calls[0].url).toBe("/admin/overlay/recall");
    expect(calls[0].body).toEqual({ message_id: "xyz789" });
    expect(row.classList.contains("is-recalled")).toBe(true);
  });

  test("clicking a row opens the message detail drawer", async () => {
    const opened = [];
    window.AdminMessageDrawer = { open: e => opened.push(e) };

    queue.push(entry(1, "點我", "id1"));
    await poll();

    rows()[0].click();
    expect(opened).toHaveLength(1);
    expect(opened[0].data.message_id).toBe("id1");

    delete window.AdminMessageDrawer;
  });

  test("a slow poll does not overlap with the next tick (no duplicate rows)", async () => {
    queue.push(entry(1, "慢回應", "id1"));
    let release;
    const gate = new Promise(r => { release = r; });
    const base = fetchMock.getMockImplementation();
    fetchMock.mockImplementation(async url => { await gate; return base(url); });

    // 三個 tick 都在第一個請求還沒回來時觸發
    const before = fetchMock.mock.calls.length;
    await jest.advanceTimersByTimeAsync(1500 * 3);
    expect(fetchMock.mock.calls.length - before).toBe(1);

    release();
    await jest.advanceTimersByTimeAsync(0);
    expect(rows()).toHaveLength(1);
  });

  test("entries at or below the cursor are ignored even if a response replays them", async () => {
    queue.push(entry(1, "a", "id1"), entry(2, "b", "id2"));
    await poll();
    expect(rows()).toHaveLength(2);

    // 伺服器重送舊資料（例如代理快取或亂序回應），不該重複插入
    fetchMock.mockImplementation(async () => ({
      ok: true,
      json: async () => ({ entries: [entry(1, "a", "id1"), entry(2, "b", "id2")], next_since: 2 })
    }));
    await poll();
    expect(rows()).toHaveLength(2);
  });

  test("the list is capped and the oldest rows are removed", async () => {
    for (let i = 1; i <= 205; i++) queue.push(entry(i, "訊息 " + i, "id" + i));
    await poll();

    expect(rows().length).toBeLessThanOrEqual(200);
    expect(rows()[0].dataset.id).toBe("mid205");
  });
});
