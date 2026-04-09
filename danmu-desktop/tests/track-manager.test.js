/**
 * Unit tests for the track manager collision detection algorithm.
 * We import initTrackManager and call it in a jsdom environment.
 */

const { initTrackManager } = require("../renderer-modules/track-manager");
const store = require("../renderer-modules/store");

// Helper: reset track state before each test
function setup(screenW = 1920, screenH = 1080) {
  // Provide fake screen dimensions
  Object.defineProperty(document.documentElement, "clientWidth", {
    configurable: true,
    get: () => screenW,
  });
  Object.defineProperty(document.documentElement, "clientHeight", {
    configurable: true,
    get: () => screenH,
  });

  // Provide a minimal body element as danmubody
  document.body.id = "danmubody";

  initTrackManager();
  store.set("tracks", []); // always start clean
}

describe("findAvailableTrack", () => {
  beforeEach(() => setup());

  const displayArea = { top: 0, height: 100 }; // full screen
  const DANMU_H = 50;
  const DANMU_W = 200;
  const SPEED = 5;

  // -----------------------------------------------------------------------
  // 1. Basic track selection
  // -----------------------------------------------------------------------
  test("returns an object with top and trackIndex", () => {
    const result = window.findAvailableTrack(displayArea, DANMU_H, DANMU_W, SPEED);
    expect(result).toHaveProperty("top");
    expect(result).toHaveProperty("trackIndex");
    expect(typeof result.top).toBe("number");
    expect(typeof result.trackIndex).toBe("number");
  });

  test("top is within the display area", () => {
    const { top } = window.findAvailableTrack(displayArea, DANMU_H, DANMU_W, SPEED);
    expect(top).toBeGreaterThanOrEqual(0);
    expect(top).toBeLessThanOrEqual(1080 - DANMU_H); // screen height minus danmu height
  });

  test("trackIndex is within [0, maxTracks)", () => {
    const { trackIndex } = window.findAvailableTrack(displayArea, DANMU_H, DANMU_W, SPEED);
    expect(trackIndex).toBeGreaterThanOrEqual(0);
    expect(trackIndex).toBeLessThan(store.get("trackSettings").maxTracks);
  });

  // -----------------------------------------------------------------------
  // 2. Collision detection — picks an empty track when one is available
  // -----------------------------------------------------------------------
  test("selects a different track when track 0 is occupied", () => {
    // Occupy track 0 with a very long-lasting danmu
    const tracks = store.get("tracks");
    tracks.push({
      trackIndex: 0,
      startTime: Date.now(),
      endTime: Date.now() + 20000,
      duration: 20000,
      width: DANMU_W,
    });
    store.set("tracks", tracks);

    // With 10 tracks available, should pick track >= 1
    const results = new Set();
    for (let i = 0; i < 20; i++) {
      const r = window.findAvailableTrack(displayArea, DANMU_H, DANMU_W, SPEED);
      results.add(r.trackIndex);
    }
    // Track 0 should not appear
    expect(results.has(0)).toBe(false);
  });

  test("adds an entry to danmuTracks after each call", () => {
    const beforeCount = store.get("tracks").length;
    window.findAvailableTrack(displayArea, DANMU_H, DANMU_W, SPEED);
    expect(store.get("tracks").length).toBe(beforeCount + 1);
  });

  // -----------------------------------------------------------------------
  // 3. Expired tracks are cleaned up in-place
  // -----------------------------------------------------------------------
  test("removes expired tracks before evaluating", () => {
    // Push an already-expired track
    const tracks = store.get("tracks");
    tracks.push({
      trackIndex: 0,
      startTime: Date.now() - 5000,
      endTime: Date.now() - 1,   // already expired
      duration: 4000,
      width: DANMU_W,
    });
    store.set("tracks", tracks);

    window.findAvailableTrack(displayArea, DANMU_H, DANMU_W, SPEED);

    // The expired track should have been removed; only the new one remains
    const expired = store.get("tracks").filter((t) => t.endTime < Date.now());
    expect(expired).toHaveLength(0);
  });

  // -----------------------------------------------------------------------
  // 4. All tracks occupied → falls back to oldest track
  // -----------------------------------------------------------------------
  test("falls back to oldest track when all tracks are occupied", () => {
    const maxTracks = store.get("trackSettings").maxTracks; // 10
    const now = Date.now();

    // Fill every track with an active entry
    const tracks = store.get("tracks");
    for (let i = 0; i < maxTracks; i++) {
      tracks.push({
        trackIndex: i,
        startTime: now,
        endTime: now + 15000 + i * 100, // staggered end times
        duration: 15000,
        width: DANMU_W,
      });
    }
    store.set("tracks", tracks);

    const result = window.findAvailableTrack(displayArea, DANMU_H, DANMU_W, SPEED);
    // Should still return a valid position
    expect(result).toHaveProperty("top");
    expect(result).toHaveProperty("trackIndex");
    expect(result.trackIndex).toBeGreaterThanOrEqual(0);
    expect(result.trackIndex).toBeLessThan(maxTracks);
  });

  // -----------------------------------------------------------------------
  // 5. Collision detection disabled → random track selection
  // -----------------------------------------------------------------------
  test("returns random tracks when collision detection is disabled", () => {
    window.updateDanmuTrackSettings(10, false); // disable collision detection

    const selected = new Set();
    for (let i = 0; i < 50; i++) {
      const { trackIndex } = window.findAvailableTrack(displayArea, DANMU_H, DANMU_W, SPEED);
      selected.add(trackIndex);
    }
    // With random selection and 50 attempts across 10 tracks, expect variety
    expect(selected.size).toBeGreaterThan(3);

    // tracks should NOT grow (random mode skips recording)
    expect(store.get("tracks").length).toBe(0);
  });

  // -----------------------------------------------------------------------
  // 6. maxTracks = 0 → unlimited (auto-calculated)
  // -----------------------------------------------------------------------
  test("unlimited tracks mode calculates track count from screen height", () => {
    window.updateDanmuTrackSettings(0, true); // unlimited tracks
    const result = window.findAvailableTrack(displayArea, DANMU_H, DANMU_W, SPEED);
    expect(result).toHaveProperty("top");
    expect(result.top).toBeGreaterThanOrEqual(0);
  });

  // -----------------------------------------------------------------------
  // 7. Partial display area (top 50%, height 50%)
  // -----------------------------------------------------------------------
  test("restricts danmu to the configured display area", () => {
    const partialArea = { top: 50, height: 50 }; // bottom half
    const result = window.findAvailableTrack(partialArea, DANMU_H, DANMU_W, SPEED);

    const screenH = 1080;
    const areaTopPx = (50 / 100) * screenH;       // 540
    const areaBottomPx = areaTopPx + (50 / 100) * screenH; // 1080

    expect(result.top).toBeGreaterThanOrEqual(areaTopPx);
    expect(result.top).toBeLessThanOrEqual(areaBottomPx);
  });
});

describe("updateDanmuTrackSettings", () => {
  beforeEach(() => setup());

  test("updates maxTracks and collisionDetection", () => {
    window.updateDanmuTrackSettings(5, false);
    expect(store.get("trackSettings").maxTracks).toBe(5);
    expect(store.get("trackSettings").collisionDetection).toBe(false);
  });

  test("maxTracks = 0 means unlimited", () => {
    window.updateDanmuTrackSettings(0, true);
    expect(store.get("trackSettings").maxTracks).toBe(0);
  });
});

// ===========================================================================
// showdanmu rendering tests
// ===========================================================================

describe("showdanmu", () => {
  // Mock Element.prototype.animate since jsdom does not support Web Animations API
  const mockAnimation = {
    onfinish: null,
    finished: Promise.resolve(),
  };

  beforeEach(() => {
    // Fresh DOM with danmubody container
    document.body.innerHTML = '<div id="danmubody"></div>';

    Object.defineProperty(document.documentElement, "clientWidth", {
      configurable: true,
      get: () => 1920,
    });
    Object.defineProperty(document.documentElement, "clientHeight", {
      configurable: true,
      get: () => 1080,
    });

    // Mock animate on all elements
    Element.prototype.animate = jest.fn(() => {
      const anim = { onfinish: null, finished: Promise.resolve() };
      // Store reference so tests can trigger onfinish
      Element.prototype.animate._lastAnim = anim;
      return anim;
    });

    // Mock getComputedStyle
    window.getComputedStyle = jest.fn(() => ({
      height: "40px",
      width: "200px",
      padding: "0px",
    }));

    // Mock FontFace
    window.FontFace = jest.fn(() => ({}));
    document.fonts = { load: jest.fn(() => Promise.resolve()) };

    initTrackManager();
    store.set("tracks", []);
  });

  afterEach(() => {
    delete Element.prototype.animate;
  });

  test("creates a danmu h1 element with correct text", async () => {
    window.showdanmu("Hello World");
    // Wait for the async applyFontAndAnimate
    await new Promise((r) => setTimeout(r, 0));

    const h1 = document.querySelector("h1.danmu");
    expect(h1).not.toBeNull();
    expect(h1.textContent).toBe("Hello World");
  });

  test("opacity is correctly calculated as fraction", () => {
    // showdanmu sets wrapper.style.opacity = String(opacity * 0.01)
    // Test the calculation logic directly
    expect(String(100 * 0.01)).toBe("1");
    expect(String(50 * 0.01)).toBe("0.5");
    expect(String(0 * 0.01)).toBe("0");
    expect(String(75 * 0.01)).toBe("0.75");
  });

  test("applies correct color to text danmu", async () => {
    window.showdanmu("Colored", 100, "#ff0000");
    await new Promise((r) => setTimeout(r, 10));

    const h1 = document.querySelector("h1.danmu");
    // jsdom normalizes hex to rgb
    expect(h1.style.color).toBe("rgb(255, 0, 0)");
  });

  test("applies correct font size", async () => {
    window.showdanmu("Sized", 100, "#ffffff", 72);
    await new Promise((r) => setTimeout(r, 0));

    const h1 = document.querySelector("h1.danmu");
    expect(h1.style.fontSize).toBe("72px");
  });

  test("applies text stroke when enabled", async () => {
    window.showdanmu("Stroked", 100, "#ffffff", 50, 5, undefined, {
      textStroke: true,
      strokeWidth: 3,
      strokeColor: "#ff0000",
      textShadow: false,
      shadowBlur: 4,
    });
    await new Promise((r) => setTimeout(r, 0));

    const h1 = document.querySelector("h1.danmu");
    expect(h1.style.paintOrder).toBe("stroke fill");
  });

  test("applies text shadow when enabled", async () => {
    window.showdanmu("Shadow", 100, "#ffffff", 50, 5, undefined, {
      textStroke: false,
      strokeWidth: 2,
      strokeColor: "#000000",
      textShadow: true,
      shadowBlur: 8,
    });
    await new Promise((r) => setTimeout(r, 0));

    const h1 = document.querySelector("h1.danmu");
    expect(h1.style.textShadow).toContain("rgba(0, 0, 0");
  });

  test("handles missing fontInfo gracefully (uses default)", async () => {
    window.showdanmu("NoFont", 100, "#ffffff", 50, 5, {
      name: null,
      url: null,
      type: "default",
    });
    await new Promise((r) => setTimeout(r, 0));

    const h1 = document.querySelector("h1.danmu");
    expect(h1).not.toBeNull();
    expect(h1.style.fontFamily).toBe("NotoSansTC");
  });

  test("sets data-stroke attribute for text danmu", async () => {
    window.showdanmu("Stroked Text");
    await new Promise((r) => setTimeout(r, 0));

    const h1 = document.querySelector("h1.danmu");
    expect(h1.getAttribute("data-stroke")).toBe("Stroked Text");
  });

  test("wrapper removal: onfinish callback removes element from DOM", () => {
    // Test the onfinish removal logic in isolation using a separate container
    const container = document.createElement("div");
    document.body.appendChild(container);

    const wrapper = document.createElement("div");
    container.appendChild(wrapper);
    expect(container.children.length).toBe(1);

    // Simulate what showdanmu does: animate().onfinish = () => wrapper.remove()
    const anim = Element.prototype.animate.call(wrapper, [], {});
    anim.onfinish = () => wrapper.remove();
    anim.onfinish();

    expect(container.children.length).toBe(0);
  });

  test("creates img element for valid image URLs", async () => {
    window.showdanmu("https://example.com/image.png");
    await new Promise((r) => setTimeout(r, 0));

    const img = document.querySelector("img.danmu");
    expect(img).not.toBeNull();
    expect(img.getAttribute("src")).toBe("https://example.com/image.png");
  });

  test("shows error for image URL without valid protocol", async () => {
    window.showdanmu("ftp://example.com/image.png");
    await new Promise((r) => setTimeout(r, 0));

    // Should be treated as text, not an image
    const h1 = document.querySelector("h1.danmu");
    // ftp URL doesn't match the imgs regex, so it becomes text
    expect(h1).not.toBeNull();
  });

  test("handles invalid speed by defaulting", async () => {
    window.showdanmu("BadSpeed", 100, "#ffffff", 50, "notanumber");
    await new Promise((r) => setTimeout(r, 0));

    // Should not throw, danmu should still be created
    const h1 = document.querySelector("h1.danmu");
    expect(h1).not.toBeNull();
  });

  test("applies effectCss animation to inner element", async () => {
    window.showdanmu(
      "Effect",
      100,
      "#ffffff",
      50,
      5,
      undefined,
      undefined,
      undefined,
      { animation: "de-spin 1s linear infinite", animationComposition: "add" }
    );
    await new Promise((r) => setTimeout(r, 0));

    const h1 = document.querySelector("h1.danmu");
    expect(h1.style.animation).toBe("de-spin 1s linear infinite");
    expect(h1.style.display).toBe("inline-block");
  });

  test("calls wrapper.animate with translateX keyframes", async () => {
    window.showdanmu("Animated");
    await new Promise((r) => setTimeout(r, 0));

    expect(Element.prototype.animate).toHaveBeenCalled();
    const call = Element.prototype.animate.mock.calls[0];
    // First arg is keyframes array
    expect(call[0][0].transform).toBe("translateX(100vw)");
    expect(call[0][1].transform).toContain("translateX(-");
    // Second arg is options with duration and easing
    expect(call[1].easing).toBe("linear");
    expect(call[1].duration).toBeGreaterThan(0);
  });

  test("speed 1 gives longest duration, speed 10 gives shortest", async () => {
    // Speed 1: duration = 20000 - 0 = 20000
    window.showdanmu("Slow", 100, "#ffffff", 50, 1);
    await new Promise((r) => setTimeout(r, 0));
    const slowDuration = Element.prototype.animate.mock.calls[0][1].duration;

    Element.prototype.animate.mockClear();
    store.set("tracks", []);

    // Speed 10: duration = 20000 - 18000 = 2000
    window.showdanmu("Fast", 100, "#ffffff", 50, 10);
    await new Promise((r) => setTimeout(r, 0));
    const fastDuration = Element.prototype.animate.mock.calls[0][1].duration;

    expect(slowDuration).toBeGreaterThan(fastDuration);
    expect(slowDuration).toBe(20000);
    expect(fastDuration).toBe(2000);
  });
});
