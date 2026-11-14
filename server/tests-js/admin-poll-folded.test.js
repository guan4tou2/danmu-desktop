const loadScript = require("./helpers/load-script");

// 「系統 › 擴充」裡的 Webhook／插件／定時發送是預設收合的 <details>。收合時
// 內容不在畫面上，輪詢要等展開才開始；收起來就停。
describe("pollWhileVisible and folded sections", () => {
  beforeAll(() => loadScript("admin-utils.js"));

  const flush = () => new Promise((r) => setTimeout(r, 0));

  test("a closed <details> section does not poll until it is opened", async () => {
    document.body.innerHTML = `<details id="sec-webhooks"><summary>Webhook</summary><div>body</div></details>`;
    const fold = document.getElementById("sec-webhooks");
    fold.getClientRects = () => [{}]; // jsdom 沒有版面；當成有畫出來
    const tick = jest.fn();
    const stop = window.AdminUtils.pollWhileVisible({ el: () => fold, intervalMs: 60000, tick });
    expect(tick).not.toHaveBeenCalled();

    fold.open = true;
    await flush();
    expect(tick).toHaveBeenCalledTimes(1);

    fold.open = false;
    await flush();
    fold.open = true;
    await flush();
    expect(tick).toHaveBeenCalledTimes(2); // 收起來停、再展開重新開始
    stop();
  });

  test("an element inside a closed fold is hidden, its summary is not", () => {
    document.body.innerHTML = `<details><summary><span id="s">x</span></summary><div id="b">y</div></details>`;
    const b = document.getElementById("b");
    const s = document.getElementById("s");
    b.getClientRects = s.getClientRects = () => [{}];
    const seen = [];
    const stops = [b, s].map((el) =>
      window.AdminUtils.pollWhileVisible({ el, intervalMs: 60000, tick: () => seen.push(el.id) }));
    expect(seen).toEqual(["s"]);
    stops.forEach((stop) => stop());
  });
});
