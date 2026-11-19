// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
  testDir: "./e2e",
  timeout: 30000,
  retries: 1,
  workers: 1, // Electron tests must run sequentially
  reporter: "list",
  // system-* 會把請求上限拉高好讓自己跑得完。上限現在存檔、重啟後保留，
  // 所以開跑前記下原樣、跑完還原（globalSetup 回傳的函式就是 teardown），
  // 否則開發用的 server 會一直留著 login 1000 次／分。
  globalSetup: "./e2e/helpers/rate-limit-guard.js",
};
