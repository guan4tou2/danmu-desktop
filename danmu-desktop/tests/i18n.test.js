const i18n = require("../i18n");

// Reset module state before each test
beforeEach(() => {
  i18n.currentLang = "en";
  localStorage.clear();
});

// ---------------------------------------------------------------------------
// t() – translation lookup
// ---------------------------------------------------------------------------

describe("t()", () => {
  test("returns translation for a known English key", () => {
    expect(i18n.t("title")).toBe("Danmu Overlay Setup");
  });

  test("returns translation for a known Chinese key when lang is zh", () => {
    i18n.currentLang = "zh";
    expect(i18n.t("title")).toBe("彈幕設定");
  });

  test("falls back to the key name for an unknown key", () => {
    expect(i18n.t("nonExistentKey_xyz")).toBe("nonExistentKey_xyz");
  });

  test("falls back to the key name for an unknown key in zh", () => {
    i18n.currentLang = "zh";
    expect(i18n.t("nonExistentKey_xyz")).toBe("nonExistentKey_xyz");
  });

  test("returns the key when currentLang has no translations", () => {
    i18n.currentLang = "de"; // not in translations
    expect(i18n.t("title")).toBe("title");
  });
});

// ---------------------------------------------------------------------------
// setLanguage()
// ---------------------------------------------------------------------------

describe("setLanguage()", () => {
  test("changes currentLang to a valid language", () => {
    i18n.setLanguage("zh");
    expect(i18n.currentLang).toBe("zh");
  });

  test("persists the chosen language to localStorage", () => {
    i18n.setLanguage("zh");
    expect(localStorage.getItem("danmu-lang")).toBe("zh");
  });

  test("switching back to en works", () => {
    i18n.setLanguage("zh");
    i18n.setLanguage("en");
    expect(i18n.currentLang).toBe("en");
    expect(localStorage.getItem("danmu-lang")).toBe("en");
  });

  test("ignores an unknown language code", () => {
    i18n.setLanguage("fr");
    expect(i18n.currentLang).toBe("en"); // unchanged
    expect(localStorage.getItem("danmu-lang")).toBeNull();
  });

  test("calls updateUI when setting a valid language", () => {
    const spy = jest.spyOn(i18n, "updateUI").mockImplementation(() => {});
    i18n.setLanguage("zh");
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });

  test("does NOT call updateUI for an invalid language", () => {
    const spy = jest.spyOn(i18n, "updateUI").mockImplementation(() => {});
    i18n.setLanguage("fr");
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});

// ---------------------------------------------------------------------------
// loadLanguage()
// ---------------------------------------------------------------------------

describe("loadLanguage()", () => {
  test("restores language from localStorage", async () => {
    localStorage.setItem("danmu-lang", "zh");
    await i18n.loadLanguage();
    expect(i18n.currentLang).toBe("zh");
  });

  test("ignores unknown language stored in localStorage", async () => {
    localStorage.setItem("danmu-lang", "fr");
    await i18n.loadLanguage();
    // Falls through to browser detection; default env has no zh navigator.language
    expect(["en", "zh"]).toContain(i18n.currentLang);
  });

  test("sets zh when window.API.getSystemLocale returns zh-TW", async () => {
    global.window = global.window || {};
    window.API = { getSystemLocale: jest.fn().mockResolvedValue("zh-TW") };
    i18n.currentLang = "en";
    await i18n.loadLanguage();
    expect(i18n.currentLang).toBe("zh");
    delete window.API;
  });

  test("falls back gracefully when getSystemLocale rejects", async () => {
    global.window = global.window || {};
    window.API = {
      getSystemLocale: jest.fn().mockRejectedValue(new Error("unavailable")),
    };
    i18n.currentLang = "en";
    // Should not throw
    await expect(i18n.loadLanguage()).resolves.toBeUndefined();
    delete window.API;
  });
});
