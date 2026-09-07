/**
 * 設計稿 10 · S7：「更新已下載」——**顯示中時不打斷；關閉顯示層後才提示**。
 *
 * 主持人正在台上放彈幕的時候，一個「要不要重新啟動」的對話框是最糟的打斷
 * ——重新啟動就是把大螢幕關掉。
 */
const DIALOG = "#client-update-dialog";

// update-status.js 的 _state / _toastShown 是模組層變數——同一個檔案裡的
// 測試共用 require 快取的話，第二條測試一開始就帶著第一條的殘留狀態。
// 每條測試拿一份新的模組。
function freshModule() {
  let mod;
  jest.isolateModules(() => {
    mod = require("../renderer-modules/update-status");
  });
  return mod;
}

function setupDom() {
  document.body.innerHTML = `
    <span id="titlebar-update-badge" hidden></span>
    <div class="client-sidebar-foot"><div class="status"><span class="dot"></span> UP TO DATE</div></div>
  `;
}

/** 造一個可控的 OverlayControl（跟 ws-manager.js 的介面一致）。 */
function fakeOverlay(running) {
  const subscribers = [];
  return {
    _running: running,
    isRunning() { return this._running; },
    subscribe(fn) {
      subscribers.push(fn);
      return () => {
        const i = subscribers.indexOf(fn);
        if (i >= 0) subscribers.splice(i, 1);
      };
    },
    /** 測試用：切換狀態並通知訂閱者 */
    set(running) {
      this._running = running;
      subscribers.slice().forEach((fn) => fn());
    },
    subscriberCount() { return subscribers.length; },
  };
}

let onStatus;
let sendUpdateAction;

beforeEach(() => {
  setupDom();
  sendUpdateAction = jest.fn();
  onStatus = null;
  window.API = {
    onUpdateStatus: (cb) => { onStatus = cb; },
    sendUpdateAction,
  };
});

afterEach(() => {
  delete window.API;
  delete window.OverlayControl;
});

test("顯示中不跳對話框，關閉顯示層之後才跳", () => {
  const overlay = fakeOverlay(true);
  window.OverlayControl = overlay;
  freshModule().initUpdateStatus({ t: (k) => k });

  onStatus({ phase: "downloaded", version: "5.4.1" });
  expect(document.querySelector(DIALOG)).toBeNull();

  overlay.set(false);
  const dialog = document.querySelector(DIALOG);
  expect(dialog).not.toBeNull();
  expect(dialog.textContent).toContain("5.4.1");
  // 跳出來之後就不該再佔著訂閱
  expect(overlay.subscriberCount()).toBe(0);
});

test("顯示層本來就沒開，下載完成直接跳", () => {
  window.OverlayControl = fakeOverlay(false);
  freshModule().initUpdateStatus({ t: (k) => k });

  onStatus({ phase: "downloaded", version: "5.4.1" });
  expect(document.querySelector(DIALOG)).not.toBeNull();
});

test("兩顆按鈕直排，各自送出 install / later", () => {
  window.OverlayControl = fakeOverlay(false);
  freshModule().initUpdateStatus({ t: (k) => k });
  onStatus({ phase: "downloaded", version: "5.4.1" });

  const primary = document.querySelector('[data-update-dialog="install"]');
  const ghost = document.querySelector('[data-update-dialog="later"]');
  expect(primary).not.toBeNull();
  expect(ghost).not.toBeNull();

  primary.click();
  expect(sendUpdateAction).toHaveBeenCalledWith("install", "5.4.1");
  // 按下去對話框要收掉，不然使用者會以為沒反應
  expect(document.querySelector(DIALOG)).toBeNull();

  onStatus({ phase: "idle" });
  onStatus({ phase: "downloaded", version: "5.4.1" });
  document.querySelector('[data-update-dialog="later"]').click();
  expect(sendUpdateAction).toHaveBeenCalledWith("later", "5.4.1");
});

test("同一次下載只跳一次", () => {
  window.OverlayControl = fakeOverlay(false);
  freshModule().initUpdateStatus({ t: (k) => k });

  onStatus({ phase: "downloaded", version: "5.4.1" });
  document.querySelector('[data-update-dialog="later"]').click();
  // 又收到一次同樣的 downloaded（main 會週期性重播狀態）
  onStatus({ phase: "downloaded", version: "5.4.1" });
  expect(document.querySelector(DIALOG)).toBeNull();
});
