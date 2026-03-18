/**
 * Tests for renderer-modules/settings-io.js
 *
 * importSettings() is file-input + FileReader driven, so we can't call it
 * directly as a black box.  Instead we extract its core logic into an inline
 * helper that mirrors the reader.onload parsing branch, and test that.
 *
 * exportSettings() requires Blob / URL.createObjectURL / DOM which are not
 * available in the jsdom environment used here, so it is smoke-tested only.
 */

const SETTINGS_KEYS = [
  "danmu-settings",
  "danmu-startup-animation",
  "danmu-display-settings",
];

/**
 * Inline replica of the reader.onload parsing logic inside importSettings().
 * Returns { ok, message } exactly as the real function does.
 */
function parseAndImport(jsonText) {
  try {
    const payload = JSON.parse(jsonText);

    if (typeof payload !== "object" || !payload.settings) {
      return { ok: false, message: "Invalid settings file format" };
    }

    let imported = 0;
    SETTINGS_KEYS.forEach((key) => {
      if (key in payload.settings) {
        localStorage.setItem(key, JSON.stringify(payload.settings[key]));
        imported++;
      }
    });

    return {
      ok: true,
      message: `Imported ${imported} settings groups. Reload to apply.`,
    };
  } catch {
    return { ok: false, message: "Failed to parse settings file" };
  }
}

// ---------------------------------------------------------------------------
// Module smoke test
// ---------------------------------------------------------------------------

test("module exports exportSettings and importSettings", () => {
  const mod = require("../renderer-modules/settings-io");
  expect(typeof mod.exportSettings).toBe("function");
  expect(typeof mod.importSettings).toBe("function");
});

// ---------------------------------------------------------------------------
// Parsing / validation logic
// ---------------------------------------------------------------------------

describe("importSettings – JSON parsing logic", () => {
  beforeEach(() => localStorage.clear());

  test("returns error on invalid JSON", () => {
    const result = parseAndImport("{not valid json}");
    expect(result.ok).toBe(false);
    expect(result.message).toBe("Failed to parse settings file");
  });

  test("returns error when settings key is missing", () => {
    const result = parseAndImport(JSON.stringify({ schemaVersion: 1 }));
    expect(result.ok).toBe(false);
    expect(result.message).toBe("Invalid settings file format");
  });

  test("returns error when top-level value is not an object", () => {
    const result = parseAndImport(JSON.stringify("a string"));
    expect(result.ok).toBe(false);
  });

  test("returns error when top-level value is null", () => {
    const result = parseAndImport(JSON.stringify(null));
    expect(result.ok).toBe(false);
  });

  test("returns error when payload is an array (no .settings)", () => {
    const result = parseAndImport(JSON.stringify([1, 2, 3]));
    expect(result.ok).toBe(false);
    expect(result.message).toBe("Invalid settings file format");
  });

  test("imports zero groups when settings object is empty", () => {
    const result = parseAndImport(JSON.stringify({ settings: {} }));
    expect(result.ok).toBe(true);
    expect(result.message).toBe("Imported 0 settings groups. Reload to apply.");
  });

  test("imports only known keys, ignores unknown keys", () => {
    const payload = {
      schemaVersion: 1,
      settings: {
        "danmu-settings": { host: "localhost", port: "8080" },
        "unknown-key": { data: 42 },
      },
    };
    const result = parseAndImport(JSON.stringify(payload));
    expect(result.ok).toBe(true);
    expect(result.message).toBe("Imported 1 settings groups. Reload to apply.");
    const stored = JSON.parse(localStorage.getItem("danmu-settings"));
    expect(stored.host).toBe("localhost");
    expect(localStorage.getItem("unknown-key")).toBeNull();
  });

  test("imports all three known settings keys", () => {
    const payload = {
      schemaVersion: 1,
      settings: {
        "danmu-settings": { host: "192.168.1.1", port: "9000" },
        "danmu-startup-animation": { enabled: false, type: "custom", customText: "Hi" },
        "danmu-display-settings": { opacity: 80, size: 36 },
      },
    };
    const result = parseAndImport(JSON.stringify(payload));
    expect(result.ok).toBe(true);
    expect(result.message).toBe("Imported 3 settings groups. Reload to apply.");

    const conn = JSON.parse(localStorage.getItem("danmu-settings"));
    expect(conn.port).toBe("9000");

    const anim = JSON.parse(localStorage.getItem("danmu-startup-animation"));
    expect(anim.enabled).toBe(false);

    const display = JSON.parse(localStorage.getItem("danmu-display-settings"));
    expect(display.opacity).toBe(80);
  });

  test("overwrites existing localStorage values on re-import", () => {
    localStorage.setItem("danmu-settings", JSON.stringify({ host: "old" }));
    const payload = {
      settings: { "danmu-settings": { host: "new" } },
    };
    parseAndImport(JSON.stringify(payload));
    const stored = JSON.parse(localStorage.getItem("danmu-settings"));
    expect(stored.host).toBe("new");
  });
});
