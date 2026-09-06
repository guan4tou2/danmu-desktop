// Lock the i18n contract for the new conn-section impl alignment.
// Asserts every locale defines the new keys (test button, chip states,
// error labels, auth panel) and drops the retired live-meta keys.

const { test, expect, describe } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

const LOCALES = ["en", "zh", "ja", "ko"];

function loadLocale(loc) {
  const p = path.join(__dirname, "..", "locales", loc, "translation.json");
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

// 2026-09-06 設計稿 04：連線設定從獨立分頁搬進 ⚙ 面板的一組設定列。
// 剩下的 key 是那組列真正用得到的；kicker 與卡片標題整組退場
// （設計稿 14 刪除清單）。
const REQUIRED_KEYS = [
  // ⚙ › 伺服器
  "clientServerLabel",
  "clientAddress",
  "connServerPlaceholder",
  "connTestBtn",
  "connBtnApply",
  "connBtnCancel",
  "connHostEmptyHint",
  "connLastNever",
  // ⚙ › 伺服器 › 連線密碼（原 WebSocket Token）
  "clientConnPassword",
  "clientConnPasswordPlaceholder",
  "clientConnPasswordHelp",
  "connAuthStatusUnset",
  // ⚙ › 關於
  "sectionAboutTitle",
  "checkForUpdates",
  // S1 首次啟動精靈
  "clientOnboardTitle",
  "clientOnboardBody",
  "clientOnboardContinue",
  "clientOnboardSkip",
  // S4 連線失敗橫幅
  "clientConnFailTitle",
  "clientConnFailBody",
  "clientRetry",
  "clientChangeAddress",
];

// Retired keys — must not appear (UI elements they label are gone).
const RETIRED_KEYS = [
  "connStatLatency",
  "connStatReconnect",
  "connStatReconnectUnit",
  "connStatUptime",
  "connBtnReconnect",
  // 設計稿 14 刪除清單：kicker 與併頁後的 key
  "connSectionTitle",
  "connSectionKicker",
  "connServerLabel",
  "connServerHelp",
  "connTestChipIdle",
  "connTestHint",
  "connAuthSummary",
  "connAuthKicker",
  "connAuthHint",
  "connLastKicker",
  "connLastMeta",
  "aboutCopyright",
  "aboutDesc",
];

describe.each(LOCALES)("locale %s", (loc) => {
  const dict = loadLocale(loc);

  for (const key of REQUIRED_KEYS) {
    test(`defines ${key} with non-empty value`, () => {
      expect(dict).toHaveProperty(key);
      expect(typeof dict[key]).toBe("string");
      expect(dict[key].trim().length).toBeGreaterThan(0);
    });
  }

  for (const key of RETIRED_KEYS) {
    test(`does NOT define retired key ${key}`, () => {
      expect(dict).not.toHaveProperty(key);
    });
  }

  test("connSectionTitle reflects configure-only model (not live status)", () => {
    // The previous title was "連線狀態" / "Connection" implying live state.
    // The configure-only model uses "連線設定" / "Connection settings".
    if (loc === "zh") {
      expect(dict.connSectionTitle).not.toBe("連線狀態");
    }
  });
});
