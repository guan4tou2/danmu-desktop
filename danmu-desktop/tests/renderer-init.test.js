// Regression: renderer.js once declared `const api` midway through
// initRenderer while `initWindowPicker(api)` ran earlier in the same block.
// The TDZ ReferenceError (try…finally, no catch) silently skipped i18n,
// screen-select population and app-shell meta, while e2e still passed because
// the finally block added `.loaded` anyway. This test requires the real entry
// module and asserts init runs all the way to the end.

const flush = () => new Promise((resolve) => setTimeout(resolve, 0));

describe("renderer entry init", () => {
  beforeEach(() => {
    jest.resetModules();
    document.body.innerHTML = `
      <div id="main-content"></div>
      <select id="screen-select"></select>
      <span data-client-version>v—</span>
    `;
    window.API = {
      getDisplays: jest.fn().mockResolvedValue([
        {
          id: 101,
          primary: true,
          label: "Built-in",
          size: { width: 2560, height: 1600 },
        },
        {
          id: 202,
          primary: false,
          label: "HDMI",
          size: { width: 1920, height: 1080 },
        },
      ]),
      setOverlayDisplayId: jest.fn(),
      getAppVersion: jest.fn().mockResolvedValue("5.4.0"),
      getRuntimeVersions: jest.fn().mockResolvedValue({ electron: "42.0.0" }),
      getSystemLocale: jest.fn().mockResolvedValue("zh-TW"),
      onConnectionStatus: jest.fn(),
      onKonamiEffect: jest.fn(),
      onShowStartupAnimation: jest.fn(),
      onUpdateDisplayOptions: jest.fn(),
      onUpdateStatus: jest.fn(),
      sendUpdateAction: jest.fn(),
      testConnection: jest.fn(),
      updateTrayStatus: jest.fn(),
    };
  });

  test("runs to completion: screen-select populated after the window-picker call site", async () => {
    require("../renderer.js");
    await flush();
    await flush();

    const options = [...document.querySelectorAll("#screen-select option")];
    expect(options.map((o) => o.dataset.displayId)).toEqual(["101", "202"]);
    expect(options[0].textContent).toBe("主螢幕 · Built-in · 2560×1600");
    expect(window.API.setOverlayDisplayId).toHaveBeenCalledWith(101);

    // display-select registers the hotplug listener (update-display-options
    // re-emit path) — konami.js no longer touches this channel.
    expect(window.API.onUpdateDisplayOptions).toHaveBeenCalledTimes(1);

    // app-shell meta sits right after the once-crashing initWindowPicker call
    expect(document.querySelector("[data-client-version]").textContent).toBe(
      "v5.4.0"
    );

    // finally-block marker still applies
    expect(
      document.getElementById("main-content").classList.contains("loaded")
    ).toBe(true);
  });
});
