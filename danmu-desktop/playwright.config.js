// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
  testDir: "./e2e",
  timeout: 30000,
  retries: 1,
  workers: 1, // Electron tests must run sequentially
  reporter: "list",
};
