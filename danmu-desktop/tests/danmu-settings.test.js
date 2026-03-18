const {
  DEFAULT_DANMU_SETTINGS,
  initDanmuSettings,
  loadDanmuSettings,
  saveDanmuSettings,
  updateDisplayAreaIndicator,
} = require("../renderer-modules/danmu-settings");

// ---------------------------------------------------------------------------
// DOM setup helper
// ---------------------------------------------------------------------------
function createDOM() {
  document.body.innerHTML = `
    <input id="overlay-opacity" type="range" min="0" max="100" value="100" />
    <span id="opacity-value">100%</span>

    <input id="danmu-speed" type="range" min="1" max="10" value="5" />
    <span id="speed-value">5</span>

    <input id="danmu-size" type="range" min="10" max="200" value="50" />
    <span id="size-value">50px</span>

    <input id="danmu-color" type="color" value="#ffffff" />

    <input id="text-stroke-toggle" type="checkbox" checked />
    <div id="stroke-controls">
      <input id="stroke-width" type="range" min="1" max="10" value="2" />
      <span id="stroke-width-value">2px</span>
      <input id="stroke-color" type="color" value="#000000" />
    </div>

    <input id="text-shadow-toggle" type="checkbox" />
    <div id="shadow-controls" class="hidden">
      <input id="shadow-blur" type="range" min="1" max="20" value="4" />
      <span id="shadow-blur-value">4px</span>
    </div>

    <input id="display-area-top" type="range" min="0" max="100" value="0" />
    <span id="display-area-top-value">0%</span>
    <input id="display-area-height" type="range" min="0" max="100" value="100" />
    <span id="display-area-height-value">100%</span>

    <input id="max-tracks" type="range" min="0" max="30" value="10" />
    <span id="max-tracks-value">10</span>

    <input id="collision-detection-toggle" type="checkbox" checked />

    <div id="display-area-indicator" style=""></div>

    <button id="preview-button">Preview</button>
    <input id="preview-text" type="text" value="" />

    <button id="batch-test-button">Batch Test</button>
    <input id="batch-test-count" type="number" value="5" />
  `;
}

function fireInput(el, value) {
  el.value = value;
  el.dispatchEvent(new Event("input", { bubbles: true }));
}

function fireChange(el, checked) {
  el.checked = checked;
  el.dispatchEvent(new Event("change", { bubbles: true }));
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("DEFAULT_DANMU_SETTINGS", () => {
  test("has expected default values", () => {
    expect(DEFAULT_DANMU_SETTINGS.opacity).toBe(100);
    expect(DEFAULT_DANMU_SETTINGS.speed).toBe(5);
    expect(DEFAULT_DANMU_SETTINGS.size).toBe(50);
    expect(DEFAULT_DANMU_SETTINGS.color).toBe("#ffffff");
    expect(DEFAULT_DANMU_SETTINGS.textStroke).toBe(true);
    expect(DEFAULT_DANMU_SETTINGS.strokeWidth).toBe(2);
    expect(DEFAULT_DANMU_SETTINGS.strokeColor).toBe("#000000");
    expect(DEFAULT_DANMU_SETTINGS.textShadow).toBe(false);
    expect(DEFAULT_DANMU_SETTINGS.shadowBlur).toBe(4);
    expect(DEFAULT_DANMU_SETTINGS.displayAreaTop).toBe(0);
    expect(DEFAULT_DANMU_SETTINGS.displayAreaHeight).toBe(100);
    expect(DEFAULT_DANMU_SETTINGS.maxTracks).toBe(10);
    expect(DEFAULT_DANMU_SETTINGS.collisionDetection).toBe(true);
  });
});

describe("saveDanmuSettings / loadDanmuSettings", () => {
  beforeEach(() => {
    localStorage.clear();
    createDOM();
  });

  test("saveDanmuSettings persists to localStorage", () => {
    const settings = { ...DEFAULT_DANMU_SETTINGS, opacity: 75 };
    saveDanmuSettings(settings);

    const stored = JSON.parse(localStorage.getItem("danmu-display-settings"));
    expect(stored.opacity).toBe(75);
  });

  test("loadDanmuSettings restores from localStorage", () => {
    const saved = { ...DEFAULT_DANMU_SETTINGS, speed: 8, size: 80 };
    localStorage.setItem("danmu-display-settings", JSON.stringify(saved));

    const settings = { ...DEFAULT_DANMU_SETTINGS };
    loadDanmuSettings(settings);

    expect(settings.speed).toBe(8);
    expect(settings.size).toBe(80);
  });

  test("loadDanmuSettings updates DOM elements", () => {
    const saved = { ...DEFAULT_DANMU_SETTINGS, opacity: 42, speed: 3 };
    localStorage.setItem("danmu-display-settings", JSON.stringify(saved));

    const settings = { ...DEFAULT_DANMU_SETTINGS };
    loadDanmuSettings(settings);

    expect(document.getElementById("overlay-opacity").value).toBe("42");
    expect(document.getElementById("opacity-value").textContent).toBe("42%");
    expect(document.getElementById("danmu-speed").value).toBe("3");
    expect(document.getElementById("speed-value").textContent).toBe("3");
  });

  test("loadDanmuSettings does nothing when localStorage is empty", () => {
    const settings = { ...DEFAULT_DANMU_SETTINGS };
    loadDanmuSettings(settings);
    // Settings should remain unchanged
    expect(settings.opacity).toBe(100);
  });

  test("loadDanmuSettings handles corrupt JSON gracefully", () => {
    localStorage.setItem("danmu-display-settings", "not-json{{{");
    const settings = { ...DEFAULT_DANMU_SETTINGS };
    // Should not throw
    expect(() => loadDanmuSettings(settings)).not.toThrow();
  });

  test("loadDanmuSettings toggles stroke controls visibility", () => {
    const saved = { ...DEFAULT_DANMU_SETTINGS, textStroke: false };
    localStorage.setItem("danmu-display-settings", JSON.stringify(saved));

    const settings = { ...DEFAULT_DANMU_SETTINGS };
    loadDanmuSettings(settings);

    expect(
      document.getElementById("stroke-controls").classList.contains("hidden")
    ).toBe(true);
  });

  test("loadDanmuSettings toggles shadow controls visibility", () => {
    const saved = { ...DEFAULT_DANMU_SETTINGS, textShadow: true };
    localStorage.setItem("danmu-display-settings", JSON.stringify(saved));

    const settings = { ...DEFAULT_DANMU_SETTINGS };
    loadDanmuSettings(settings);

    expect(
      document.getElementById("shadow-controls").classList.contains("hidden")
    ).toBe(false);
  });

  test("loadDanmuSettings calls updateDanmuTrackSettings when available", () => {
    window.updateDanmuTrackSettings = jest.fn();
    const saved = { ...DEFAULT_DANMU_SETTINGS, maxTracks: 5 };
    localStorage.setItem("danmu-display-settings", JSON.stringify(saved));

    const settings = { ...DEFAULT_DANMU_SETTINGS };
    loadDanmuSettings(settings);

    expect(window.updateDanmuTrackSettings).toHaveBeenCalledWith(5, true);
    delete window.updateDanmuTrackSettings;
  });

  test("loadDanmuSettings shows Unlimited for maxTracks=0", () => {
    const saved = { ...DEFAULT_DANMU_SETTINGS, maxTracks: 0 };
    localStorage.setItem("danmu-display-settings", JSON.stringify(saved));

    const settings = { ...DEFAULT_DANMU_SETTINGS };
    loadDanmuSettings(settings);

    expect(document.getElementById("max-tracks-value").textContent).toBe(
      "Unlimited"
    );
  });
});

describe("updateDisplayAreaIndicator", () => {
  beforeEach(() => createDOM());

  test("sets top and height style on indicator element", () => {
    const settings = { displayAreaTop: 20, displayAreaHeight: 60 };
    updateDisplayAreaIndicator(settings);

    const indicator = document.getElementById("display-area-indicator");
    expect(indicator.style.top).toBe("20%");
    expect(indicator.style.height).toBe("60%");
  });

  test("handles missing indicator element gracefully", () => {
    document.body.innerHTML = "";
    expect(() =>
      updateDisplayAreaIndicator({ displayAreaTop: 10, displayAreaHeight: 90 })
    ).not.toThrow();
  });
});

describe("initDanmuSettings", () => {
  let settings;
  let showToast;
  let t;

  beforeEach(() => {
    createDOM();
    localStorage.clear();
    settings = { ...DEFAULT_DANMU_SETTINGS };
    showToast = jest.fn();
    t = jest.fn((key) => key);
    initDanmuSettings(settings, showToast, t);
  });

  // --- Slider input events ---
  test("opacity slider updates settings and saves", () => {
    fireInput(document.getElementById("overlay-opacity"), "60");
    expect(settings.opacity).toBe(60);
    expect(document.getElementById("opacity-value").textContent).toBe("60%");
    expect(
      JSON.parse(localStorage.getItem("danmu-display-settings")).opacity
    ).toBe(60);
  });

  test("speed slider updates settings and saves", () => {
    fireInput(document.getElementById("danmu-speed"), "8");
    expect(settings.speed).toBe(8);
    expect(document.getElementById("speed-value").textContent).toBe("8");
  });

  test("size slider updates settings and saves", () => {
    fireInput(document.getElementById("danmu-size"), "72");
    expect(settings.size).toBe(72);
    expect(document.getElementById("size-value").textContent).toBe("72px");
  });

  test("color input updates settings and saves", () => {
    fireInput(document.getElementById("danmu-color"), "#ff0000");
    expect(settings.color).toBe("#ff0000");
  });

  // --- Toggle events ---
  test("text stroke toggle updates settings and toggles controls", () => {
    fireChange(document.getElementById("text-stroke-toggle"), false);
    expect(settings.textStroke).toBe(false);
    expect(
      document.getElementById("stroke-controls").classList.contains("hidden")
    ).toBe(true);
  });

  test("text shadow toggle updates settings and shows controls", () => {
    fireChange(document.getElementById("text-shadow-toggle"), true);
    expect(settings.textShadow).toBe(true);
    expect(
      document.getElementById("shadow-controls").classList.contains("hidden")
    ).toBe(false);
  });

  test("stroke width slider updates settings", () => {
    fireInput(document.getElementById("stroke-width"), "5");
    expect(settings.strokeWidth).toBe(5);
    expect(document.getElementById("stroke-width-value").textContent).toBe(
      "5px"
    );
  });

  test("stroke color input updates settings", () => {
    fireInput(document.getElementById("stroke-color"), "#00ff00");
    expect(settings.strokeColor).toBe("#00ff00");
  });

  test("shadow blur slider updates settings", () => {
    fireInput(document.getElementById("shadow-blur"), "10");
    expect(settings.shadowBlur).toBe(10);
    expect(document.getElementById("shadow-blur-value").textContent).toBe(
      "10px"
    );
  });

  // --- Display area ---
  test("display area top slider updates settings and indicator", () => {
    fireInput(document.getElementById("display-area-top"), "25");
    expect(settings.displayAreaTop).toBe(25);
    expect(document.getElementById("display-area-top-value").textContent).toBe(
      "25%"
    );
    expect(document.getElementById("display-area-indicator").style.top).toBe(
      "25%"
    );
  });

  test("display area height slider updates settings and indicator", () => {
    fireInput(document.getElementById("display-area-height"), "50");
    expect(settings.displayAreaHeight).toBe(50);
    expect(
      document.getElementById("display-area-height-value").textContent
    ).toBe("50%");
    expect(
      document.getElementById("display-area-indicator").style.height
    ).toBe("50%");
  });

  // --- Max tracks ---
  test("max tracks slider updates settings", () => {
    window.updateDanmuTrackSettings = jest.fn();
    fireInput(document.getElementById("max-tracks"), "7");
    expect(settings.maxTracks).toBe(7);
    expect(document.getElementById("max-tracks-value").textContent).toBe("7");
    expect(window.updateDanmuTrackSettings).toHaveBeenCalledWith(7, true);
    delete window.updateDanmuTrackSettings;
  });

  test("max tracks 0 shows Unlimited", () => {
    fireInput(document.getElementById("max-tracks"), "0");
    expect(settings.maxTracks).toBe(0);
    expect(document.getElementById("max-tracks-value").textContent).toBe(
      "Unlimited"
    );
  });

  // --- Collision detection ---
  test("collision detection toggle updates settings", () => {
    window.updateDanmuTrackSettings = jest.fn();
    fireChange(document.getElementById("collision-detection-toggle"), false);
    expect(settings.collisionDetection).toBe(false);
    expect(window.updateDanmuTrackSettings).toHaveBeenCalledWith(10, false);
    delete window.updateDanmuTrackSettings;
  });

  // --- Preview button ---
  test("preview button with empty text shows error toast", () => {
    document.getElementById("preview-text").value = "";
    document.getElementById("preview-button").click();
    expect(showToast).toHaveBeenCalledWith("errorEmptyPreview", "error");
  });

  test("preview button without API shows warning toast", () => {
    document.getElementById("preview-text").value = "test";
    window.API = null;
    document.getElementById("preview-button").click();
    expect(showToast).toHaveBeenCalledWith("errorOverlayNotActive", "warning");
  });

  test("preview button calls API.sendTestDanmu and shows success", () => {
    const sendTestDanmu = jest.fn();
    window.API = { sendTestDanmu };
    document.getElementById("preview-text").value = "Hello!";
    document.getElementById("preview-button").click();

    expect(sendTestDanmu).toHaveBeenCalledTimes(1);
    expect(sendTestDanmu).toHaveBeenCalledWith(
      "Hello!",
      100,
      "#ffffff",
      50,
      5,
      expect.objectContaining({ textStroke: true }),
      expect.objectContaining({ top: 0, height: 100 })
    );
    expect(showToast).toHaveBeenCalledWith("previewSent", "success");
    delete window.API;
  });

  // --- Batch test button ---
  test("batch test button without API shows warning", () => {
    window.API = null;
    document.getElementById("batch-test-button").click();
    expect(showToast).toHaveBeenCalledWith("errorOverlayNotActive", "warning");
  });

  test("batch test button sends multiple danmu", () => {
    jest.useFakeTimers();
    const sendTestDanmu = jest.fn();
    window.API = { sendTestDanmu };
    document.getElementById("batch-test-count").value = "3";

    document.getElementById("batch-test-button").click();
    expect(showToast).toHaveBeenCalledWith("batchTestStarted", "info");

    // Advance past 3 intervals (500ms each)
    jest.advanceTimersByTime(500);
    jest.advanceTimersByTime(500);
    jest.advanceTimersByTime(500);
    // One more to clear the interval
    jest.advanceTimersByTime(500);

    expect(sendTestDanmu).toHaveBeenCalledTimes(3);
    delete window.API;
    jest.useRealTimers();
  });

  test("batch test clamps count to [1, 20]", () => {
    jest.useFakeTimers();
    const sendTestDanmu = jest.fn();
    window.API = { sendTestDanmu };
    document.getElementById("batch-test-count").value = "50";

    document.getElementById("batch-test-button").click();

    // Advance enough to send 20 + one extra tick to clear
    for (let i = 0; i < 22; i++) {
      jest.advanceTimersByTime(500);
    }

    expect(sendTestDanmu).toHaveBeenCalledTimes(20);
    delete window.API;
    jest.useRealTimers();
  });
});
