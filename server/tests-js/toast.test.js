const loadScript = require("./helpers/load-script");

// 2026-10-29：toast 重寫後的行為契約。原本沒有去重也沒有上限——
// 連續調參時右上角會疊出一整柱同時消失的訊息。
describe("toast dedupe and cap", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="toast-container" role="status" aria-live="polite"></div>';
    jest.spyOn(window, "requestAnimationFrame").mockImplementation(cb => { cb(); return 1; });
    loadScript("toast.js");
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  const toasts = () => Array.from(document.querySelectorAll("#toast-container > div"));

  test("same message within the window collapses into one toast with a counter", () => {
    window.showToast("已封鎖");
    window.showToast("已封鎖");
    window.showToast("已封鎖");

    expect(toasts()).toHaveLength(1);
    expect(toasts()[0].textContent).toContain("已封鎖");
    expect(toasts()[0].textContent).toContain("×3");
  });

  test("success and failure with the same text stay separate", () => {
    window.showToast("已更新");
    window.showToast("已更新", false);

    expect(toasts()).toHaveLength(2);
  });

  test("never stacks more than four toasts", () => {
    for (let i = 0; i < 9; i++) window.showToast("訊息 " + i);

    expect(toasts()).toHaveLength(4);
    // 留下的是最新的四則
    const text = toasts().map(el => el.textContent).join(" ");
    expect(text).toContain("訊息 8");
    expect(text).not.toContain("訊息 0");
  });

  test("auto-dismisses after the lifetime", () => {
    jest.useFakeTimers();
    window.showToast("稍縱即逝");
    expect(toasts()).toHaveLength(1);

    jest.advanceTimersByTime(3000 + 200);
    expect(toasts()).toHaveLength(0);
  });

  test("hovering pauses the countdown", () => {
    jest.useFakeTimers();
    window.showToast("先別走");
    const el = toasts()[0];

    el.dispatchEvent(new MouseEvent("mouseenter"));
    jest.advanceTimersByTime(10000);
    expect(toasts()).toHaveLength(1);

    el.dispatchEvent(new MouseEvent("mouseleave"));
    jest.advanceTimersByTime(3000 + 200);
    expect(toasts()).toHaveLength(0);
  });

  test("repeating a message after the window creates a new toast", () => {
    jest.useFakeTimers();
    window.showToast("再一次");
    jest.advanceTimersByTime(3000 + 200);
    window.showToast("再一次");

    expect(toasts()).toHaveLength(1);
    expect(toasts()[0].textContent).not.toContain("×2");
  });
});
