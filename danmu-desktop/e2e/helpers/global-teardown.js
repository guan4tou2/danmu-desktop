// @ts-check
// 跑完 e2e 之後，把 system-* 拉高的請求上限全部還原。
//
// system-* 每一檔的 beforeAll 都會用 POST /admin/ratelimit/apply 把 admin 與
// login 的上限調到 1000（預設值會讓測試自己被 429 擋掉）。2026-11-19 起這些值
// 會寫進 server/runtime/rate_limits.json、重啟後仍在——不還原的話，開發用的
// server 會一直允許每分鐘 1000 次登入嘗試。
//
// 不放在各檔的 afterAll：六個檔案各登入一次，中途還原會讓後面的檔案在登入頁
// 被預設的 5 次／5 分鐘擋下。
module.exports = async () => {
  const server = process.env.DANMU_E2E_SERVER;
  if (!server) return; // 沒有指定 server：system-* 都被 skip，沒有東西要還原
  const password = process.env.DANMU_E2E_ADMIN_PASSWORD || "test";
  try {
    const login = await fetch(`${server}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
      body: new URLSearchParams({ password }).toString(),
      redirect: "manual",
    });
    if (!login.ok) throw new Error(`login HTTP ${login.status}`);
    const cookie = login.headers
      .getSetCookie()
      .map((c) => c.split(";")[0])
      .join("; ");
    const { csrf_token: csrf } = await login.json();
    const reset = await fetch(`${server}/admin/ratelimit/reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-CSRF-Token": csrf, Cookie: cookie },
      body: "{}",
    });
    if (!reset.ok) throw new Error(`reset HTTP ${reset.status}`);
  } catch (err) {
    // 還原失敗不該讓整輪測試變紅，但要讓人看得到。
    console.warn(
      `[e2e teardown] 請求上限沒有還原（${err && err.message}）。` +
        "到後台 審核 › 發送上限 按「全部重設為預設」。",
    );
  }
};
