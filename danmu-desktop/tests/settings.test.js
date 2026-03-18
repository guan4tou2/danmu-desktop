const {
  saveSettings,
  loadSettings,
  saveStartupAnimationSettings,
  loadStartupAnimationSettings,
} = require("../renderer-modules/settings");

describe("saveSettings / loadSettings", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("roundtrip: saved values are returned by loadSettings", () => {
    saveSettings("localhost", "8080", 0, false, "tok123");
    const result = loadSettings();
    expect(result).toEqual({
      host: "localhost",
      port: "8080",
      displayIndex: 0,
      syncMultiDisplay: false,
      wsToken: "tok123",
    });
  });

  test("wsToken defaults to empty string when omitted", () => {
    saveSettings("192.168.1.1", "9000", 1, true);
    const result = loadSettings();
    expect(result.wsToken).toBe("");
  });

  test("loadSettings returns null when nothing is stored", () => {
    expect(loadSettings()).toBeNull();
  });

  test("loadSettings returns null and clears key on corrupted JSON", () => {
    localStorage.setItem("danmu-settings", "{not valid json}");
    const result = loadSettings();
    expect(result).toBeNull();
    expect(localStorage.getItem("danmu-settings")).toBeNull();
  });

  test("overwriting settings replaces previous values", () => {
    saveSettings("localhost", "8080", 0, false, "first");
    saveSettings("192.168.0.1", "9999", 2, true, "second");
    const result = loadSettings();
    expect(result.host).toBe("192.168.0.1");
    expect(result.wsToken).toBe("second");
  });
});

describe("saveStartupAnimationSettings / loadStartupAnimationSettings", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("roundtrip: saved values are returned", () => {
    saveStartupAnimationSettings(false, "custom", "Hello!");
    const result = loadStartupAnimationSettings();
    expect(result).toEqual({ enabled: false, type: "custom", customText: "Hello!" });
  });

  test("returns default when nothing is stored", () => {
    const result = loadStartupAnimationSettings();
    expect(result).toEqual({ enabled: true, type: "link-start", customText: "" });
  });

  test("returns default and clears key on corrupted JSON", () => {
    localStorage.setItem("danmu-startup-animation", "%%garbage%%");
    const result = loadStartupAnimationSettings();
    expect(result).toEqual({ enabled: true, type: "link-start", customText: "" });
    expect(localStorage.getItem("danmu-startup-animation")).toBeNull();
  });
});
