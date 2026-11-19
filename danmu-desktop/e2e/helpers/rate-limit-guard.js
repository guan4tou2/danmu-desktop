// @ts-check
// Playwright globalSetup：記下跑 e2e 之前的請求上限，跑完還原成原樣。
//
// system-* 每一檔的 beforeAll 都會用 POST /admin/ratelimit/apply 把 admin 與
// login 的上限調到 1000（預設值會讓測試自己被 429 擋掉），有的還會動 fire。
// 2026-11-19 起這些值會寫進 server/runtime/rate_limits.json、重啟後仍在——
// 不還原的話，開發用的 server 會一直允許每分鐘 1000 次登入嘗試。
//
// 還原的是「跑之前的樣子」，不是一律重設：開發者自己存過的上限要留著，
// 只有測試動過的才改回去。
//
// 不放在各檔的 afterAll：六個檔案各登入一次，中途還原會讓後面的檔案在登入頁
// 被預設的 5 次／5 分鐘擋下。
//
// globalSetup 回傳的函式就是 globalTeardown，兩邊共用同一份快照。

const WARN = "[e2e rate-limit guard]";

/** @returns {Promise<{cookie: string, csrf: string}>} */
async function signIn(server, password) {
  const res = await fetch(`${server}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
    body: new URLSearchParams({ password }).toString(),
    redirect: "manual",
  });
  if (!res.ok) throw new Error(`login HTTP ${res.status}`);
  const cookie = res.headers
    .getSetCookie()
    .map((c) => c.split(";")[0])
    .join("; ");
  const { csrf_token: csrf } = await res.json();
  return { cookie, csrf };
}

async function readScopes(server, session) {
  const res = await fetch(`${server}/admin/ratelimit/config`, { headers: { Cookie: session.cookie } });
  if (!res.ok) throw new Error(`config HTTP ${res.status}`);
  return (await res.json()).scopes;
}

/** POST 一個會寫檔的端點；回應說沒寫進磁碟也算失敗。 */
async function write(server, session, pathname, body) {
  const res = await fetch(`${server}${pathname}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-CSRF-Token": session.csrf, Cookie: session.cookie },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${pathname} ${JSON.stringify(body)} → HTTP ${res.status}`);
  const data = await res.json();
  if (data.persisted === false) {
    throw new Error(`${pathname} ${JSON.stringify(body)} 已套用但沒有寫進磁碟，重啟後舊值會回來`);
  }
}

/** 把每個對象改回 before 記下的樣子。回傳實際動過的對象。 */
async function restore(server, session, before) {
  const now = await readScopes(server, session);
  const changed = [];
  for (const [scope, was] of Object.entries(before)) {
    const is = now[scope];
    if (!is) continue;
    const same = is.saved === was.saved && is.limit === was.limit && is.window === was.window;
    if (same) continue;
    // 先回到啟動值，再視需要把原本存的值放回去。先重設是因為時間窗若來自
    // 環境變數（不在選單上的秒數），只有它正在生效時才存得回去。
    await write(server, session, "/admin/ratelimit/reset", { scope });
    if (was.saved) {
      await write(server, session, "/admin/ratelimit/apply", { scope, limit: was.limit, window: was.window });
    }
    changed.push(scope);
  }
  return changed;
}

module.exports = async () => {
  const server = process.env.DANMU_E2E_SERVER;
  if (!server) return undefined; // 沒有指定 server：system-* 都被 skip，沒有東西要還原
  const password = process.env.DANMU_E2E_ADMIN_PASSWORD || "test";

  let before;
  try {
    before = await readScopes(server, await signIn(server, password));
  } catch (err) {
    console.warn(`${WARN} 讀不到跑之前的請求上限（${err && err.message}），跑完不會自動還原。`);
    return undefined;
  }

  return async () => {
    try {
      // 重新登入：測試期間原本的 session 可能已經登出或過期。
      await restore(server, await signIn(server, password), before);
    } catch (err) {
      // 還原失敗不該讓整輪測試變紅，但要讓人看得到。
      console.warn(
        `${WARN} 請求上限沒有還原（${err && err.message}）。` +
          "到後台 審核 › 發送上限 確認，或按「全部重設為預設」。",
      );
    }
  };
};

module.exports.restore = restore;
module.exports.signIn = signIn;
module.exports.readScopes = readScopes;
