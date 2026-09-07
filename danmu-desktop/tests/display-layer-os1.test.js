/**
 * 設計稿 16 · OS1／OS2：投影安全區與淺底描邊的接收端。
 *
 * 這兩件事在 2026-09-07 之前是斷的：child.css 的 --overlay-safe 永遠是寫死
 * 的 5%，stage-luminance.js 的 setForced 沒有任何呼叫端。顯示層那半早就寫
 * 好，缺的一直只是「把 admin 設的值送過來」。
 */
function freshModule() {
  let mod;
  jest.isolateModules(() => {
    mod = require("../renderer-modules/display-layer");
  });
  return mod;
}

beforeEach(() => {
  document.documentElement.removeAttribute("style");
  delete window.StageLuminance;
  delete window.OverlayDisplayLayer;
});

describe("--overlay-safe", () => {
  test("admin 設的安全區寫進 CSS 變數（child.css 的 idle/poll 吃它）", () => {
    const dl = freshModule();
    dl.apply({ safe_area: 8 });
    expect(document.documentElement.style.getPropertyValue("--overlay-safe")).toBe("8%");
  });

  test("沒收到值也要落地成預設 5%——不是留空讓 CSS fallback 決定", () => {
    const dl = freshModule();
    dl.apply(null);
    expect(document.documentElement.style.getPropertyValue("--overlay-safe")).toBe("5%");
    expect(dl.getState().safe_area).toBe(5);
  });
});

describe("stroke_mode", () => {
  test("轉交給 StageLuminance.setForced", () => {
    const calls = [];
    window.StageLuminance = { setForced: (m) => calls.push(m) };
    const dl = freshModule();
    dl.apply({ stroke_mode: "always" });
    expect(calls).toEqual(["always"]);
  });

  test("StageLuminance 還沒載進來時不炸", () => {
    const dl = freshModule();
    expect(() => dl.apply({ stroke_mode: "never" })).not.toThrow();
    expect(dl.getState().stroke_mode).toBe("never");
  });
});

describe("insetArea", () => {
  test("滿版顯示範圍往內縮一圈", () => {
    const dl = freshModule();
    dl.apply({ safe_area: 5 });
    expect(dl.insetArea({ top: 0, height: 100 })).toEqual({ top: 5, height: 90 });
  });

  test("安全區 0 時原樣放行", () => {
    const dl = freshModule();
    dl.apply({ safe_area: 0 });
    expect(dl.insetArea({ top: 0, height: 100 })).toEqual({ top: 0, height: 100 });
  });

  test("主持人自己畫的框已經在安全區內就不動它", () => {
    const dl = freshModule();
    dl.apply({ safe_area: 5 });
    expect(dl.insetArea({ top: 20, height: 40 })).toEqual({ top: 20, height: 40 });
  });

  test("刻意把彈幕推出畫面下方（下緣 > 100）的用法不拉回來", () => {
    // display_layer.py 明文允許 area_top + area_height > 100
    const dl = freshModule();
    dl.apply({ safe_area: 5 });
    expect(dl.insetArea({ top: 60, height: 60 })).toEqual({ top: 60, height: 60 });
  });

  test("貼著下緣的框才被拉進安全區", () => {
    const dl = freshModule();
    dl.apply({ safe_area: 8 });
    expect(dl.insetArea({ top: 50, height: 50 })).toEqual({ top: 50, height: 42 });
  });
});

test("apply 是冪等的——server 在連上時補推一次，admin 再改又推一次", () => {
  const seen = [];
  window.StageLuminance = { setForced: (m) => seen.push(m) };
  const dl = freshModule();
  dl.apply({ safe_area: 8, stroke_mode: "always" });
  dl.apply({ safe_area: 8, stroke_mode: "always" });
  expect(dl.getState()).toEqual({ safe_area: 8, stroke_mode: "always" });
  expect(seen).toEqual(["always", "always"]);
});

test("部分更新不會把另一個欄位打回預設", () => {
  const dl = freshModule();
  dl.apply({ safe_area: 0, stroke_mode: "never" });
  dl.apply({ safe_area: 8 });
  expect(dl.getState()).toEqual({ safe_area: 8, stroke_mode: "never" });
});
