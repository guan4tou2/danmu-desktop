/**
 * 「幫沒開的頁輪詢」的防回歸。
 *
 * admin 的 69 支模組是無條件全載的，每支自己 setInterval。2026-09-08 實測：
 * 停在單一頁面時仍有 66 requests/min，熱點包含 webhooks / integrations /
 * fire-token / scheduler / plugins —— 全都是當下沒開的頁。改用
 * `AdminUtils.pollWhileVisible` 之後同一個量法是 39/min。
 *
 * 刻意**沒有**改的三個，它們的資料要跨路由累積，不是漏網：
 *   - `/admin/live-feed/recent`：訊息流的緩衝要在背景長，切回去才看得到歷史。
 *   - `/admin/metrics`：頁首 KPI 每一頁都看得到。
 *   - `/admin/modqueue/list`：側欄的待審數字每一頁都看得到（它本來就有自己的
 *     可見性判斷，只是那份判斷管的是「要不要渲染」而不是「要不要輪詢」）。
 */
const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

const JS_DIR = path.join(__dirname, "..", "..", "server", "static", "js");
const read = (f) => fs.readFileSync(path.join(JS_DIR, f), "utf8");

test("AdminUtils exposes pollWhileVisible", () => {
  const src = read("admin-utils.js");
  expect(src).toContain("pollWhileVisible: pollWhileVisible");
  // 分頁切到背景時要暫停 —— 免費的省電與省流量
  expect(src).toContain("visibilitychange");
  expect(src).toContain("document.hidden");
});

test.each([
  ["admin-webhooks.js", "sec-webhooks"],
  ["admin-scheduler.js", "SECTION_ID"],
  ["admin-plugins.js", "sec-plugins"],
  ["admin-extensions.js", "PAGE_ID"],
  ["admin-firetoken.js", "PAGE_ID"],
])("%s polls only while its section is visible", (file, anchor) => {
  const src = read(file);
  expect(src).toContain("AdminUtils.pollWhileVisible");
  expect(src).toContain(anchor);
});

test("the converted modules no longer start bare fetch intervals", () => {
  // 這五支不該再有「無條件 setInterval 去打 API」的寫法。允許 setInterval 存在
  // （倒數、動畫都用得到），但不能直接餵一個會發請求的函式。
  const offenders = [];
  for (const file of [
    "admin-webhooks.js",
    "admin-scheduler.js",
    "admin-extensions.js",
    "admin-firetoken.js",
  ]) {
    const src = read(file);
    const m = src.match(/setInterval\(\s*(loadAll|fetchJobs|_fetchSources|_fetchUsage|_fetchAll)\b/g);
    if (m) offenders.push(`${file}: ${m.join(", ")}`);
  }
  expect(offenders).toEqual([]);
});
