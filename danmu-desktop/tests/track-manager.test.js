/**
 * Unit tests for the track manager collision detection algorithm.
 * We import initTrackManager and call it in a jsdom environment.
 */

const { initTrackManager } = require("../renderer-modules/track-manager");

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
  window.danmuTracks = []; // always start clean
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
    expect(trackIndex).toBeLessThan(window.danmuTrackSettings.maxTracks);
  });

  // -----------------------------------------------------------------------
  // 2. Collision detection — picks an empty track when one is available
  // -----------------------------------------------------------------------
  test("selects a different track when track 0 is occupied", () => {
    // Occupy track 0 with a very long-lasting danmu
    window.danmuTracks.push({
      trackIndex: 0,
      startTime: Date.now(),
      endTime: Date.now() + 20000,
      duration: 20000,
      width: DANMU_W,
    });

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
    const beforeCount = window.danmuTracks.length;
    window.findAvailableTrack(displayArea, DANMU_H, DANMU_W, SPEED);
    expect(window.danmuTracks.length).toBe(beforeCount + 1);
  });

  // -----------------------------------------------------------------------
  // 3. Expired tracks are cleaned up in-place
  // -----------------------------------------------------------------------
  test("removes expired tracks before evaluating", () => {
    // Push an already-expired track
    window.danmuTracks.push({
      trackIndex: 0,
      startTime: Date.now() - 5000,
      endTime: Date.now() - 1,   // already expired
      duration: 4000,
      width: DANMU_W,
    });

    window.findAvailableTrack(displayArea, DANMU_H, DANMU_W, SPEED);

    // The expired track should have been removed; only the new one remains
    const expired = window.danmuTracks.filter((t) => t.endTime < Date.now());
    expect(expired).toHaveLength(0);
  });

  // -----------------------------------------------------------------------
  // 4. All tracks occupied → falls back to oldest track
  // -----------------------------------------------------------------------
  test("falls back to oldest track when all tracks are occupied", () => {
    const maxTracks = window.danmuTrackSettings.maxTracks; // 10
    const now = Date.now();

    // Fill every track with an active entry
    for (let i = 0; i < maxTracks; i++) {
      window.danmuTracks.push({
        trackIndex: i,
        startTime: now,
        endTime: now + 15000 + i * 100, // staggered end times
        duration: 15000,
        width: DANMU_W,
      });
    }

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

    // danmuTracks should NOT grow (random mode skips recording)
    expect(window.danmuTracks.length).toBe(0);
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
    expect(window.danmuTrackSettings.maxTracks).toBe(5);
    expect(window.danmuTrackSettings.collisionDetection).toBe(false);
  });

  test("maxTracks = 0 means unlimited", () => {
    window.updateDanmuTrackSettings(0, true);
    expect(window.danmuTrackSettings.maxTracks).toBe(0);
  });
});
