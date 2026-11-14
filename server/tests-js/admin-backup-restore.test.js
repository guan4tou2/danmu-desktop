const loadScript = require("./helpers/load-script");

// 系統 › 備份：完整備份還原之後，頁面要講清楚需不需要重啟。
// 還原了連線憑證以外的設定時，執行中的伺服器還握著啟動時讀的那份；不重啟的話，
// 之後在後台改同一項設定會把還原前的內容寫回去。
describe("full backup restore result", () => {
  let importResult;
  const observers = [];
  const RealObserver = window.MutationObserver;

  const flush = async () => {
    for (let i = 0; i < 6; i++) await new Promise((r) => setTimeout(r, 0));
  };

  beforeAll(async () => {
    window.ServerI18n = { t: (key, params) => key + (params ? ":" + JSON.stringify(params) : "") };
    window.showToast = jest.fn();
    window.HudConfirm = { open: jest.fn(async () => true) };
    window.DANMU_CONFIG = { session: { logged_in: true } };
    window.csrfFetch = jest.fn(async (url) => {
      if (String(url).startsWith("/admin/backup/import?dry_run")) {
        return { ok: true, json: async () => ({ ok: true, members: [{ path: "runtime/settings.json" }] }) };
      }
      if (url === "/admin/backup/import") return { ok: true, json: async () => importResult };
      return { ok: true, json: async () => ({}) };
    });
    window.fetch = jest.fn(async () => ({ ok: true, json: async () => ({}) }));
    document.body.innerHTML = '<div class="admin-dash-grid" data-active-leaf="backup"><div id="settings-grid"></div></div>';
    window.MutationObserver = class extends RealObserver {
      constructor(callback) {
        super(callback);
        observers.push(this);
      }
    };
    loadScript("admin-utils.js");
    loadScript("admin-backup.js");
    await flush();
  });

  // 模組的 MutationObserver 掛在 body 上；環境拆掉時它還會被叫一次、那時已經沒有
  // document。記下它建立的 observer，結束時解除。
  afterAll(() => {
    observers.forEach((o) => o.disconnect());
    window.MutationObserver = RealObserver;
  });

  const restore = async (result) => {
    importResult = result;
    window.showToast.mockClear();
    const input = document.getElementById("bk2-pack-upload");
    const file = new File([new Uint8Array([31, 139, 8, 0])], "backup.tar.gz", { type: "application/gzip" });
    Object.defineProperty(input, "files", { configurable: true, value: [file] });
    document.getElementById("bk2-pack-dryrun").click();
    await flush();
    expect(document.getElementById("bk2-pack-apply").disabled).toBe(false);
    document.getElementById("bk2-pack-apply").click();
    await flush();
    return document.getElementById("bk2-pack-diff").textContent;
  };

  test("a successful restore that needs a restart says so, in the result and the toast", async () => {
    const text = await restore({ ok: true, applied: 3, restart_required: true, skipped: [], merged: [] });
    expect(text).toContain("backupApplyCompleteHeader");
    expect(text).toContain("backupRestartRequired");
    expect(window.showToast).toHaveBeenLastCalledWith('backupPackAppliedRestartHint:{"n":3}', true);
  });

  test("a restore of connection credentials only does not ask for a restart", async () => {
    const text = await restore({ ok: true, applied: 1, restart_required: false, skipped: [], merged: [] });
    expect(text).toContain("backupApplyCompleteHeader");
    expect(text).not.toContain("backupRestartRequired");
    expect(window.showToast).toHaveBeenLastCalledWith('backupPackApplied:{"n":1}', true);
  });

  test("a failed restore that still wrote files keeps the restart line", async () => {
    const text = await restore({ ok: false, applied: 1, restart_required: true, errors: ["reload x: boom"] });
    expect(text).toContain("backupApplyFailedHeader");
    expect(text).toContain("backupRestartRequired");
  });
});
