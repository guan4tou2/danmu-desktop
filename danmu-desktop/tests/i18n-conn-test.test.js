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

const REQUIRED_KEYS = [
  // Section header (renamed connSectionTitle from "連線狀態" → "連線設定")
  "connSectionTitle",
  "connSectionKicker",
  // Single Server field
  "connServerLabel",
  "connServerPlaceholder",
  "connServerHelp",
  // ⚐ 測試 button + chip states
  "connTestBtn",
  "connTestChipIdle",
  "connTestHint",
  // In-place edit save/cancel
  "connBtnApply",
  "connBtnCancel",
  // Collapsible WebSocket Token panel
  "connAuthSummary",
  "connAuthKicker",
  "connAuthHint",
  "connAuthStatusUnset",
  "connTokenPlaceholder",
  // LAST USED SERVER card
  "connLastKicker",
  "connLastMeta",
  "connLastNever",
  // About page
  "aboutCopyright",
  "aboutDesc",
  "checkForUpdates",
];

// Retired keys — must not appear (UI elements they label are gone).
const RETIRED_KEYS = [
  "connStatLatency",
  "connStatReconnect",
  "connStatReconnectUnit",
  "connStatUptime",
  "connBtnReconnect",
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
