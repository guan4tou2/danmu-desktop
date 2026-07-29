// Tests for renderer-modules/display-select.js — #screen-select population,
// selection restore across hotplug, and the client-nav chip label contract.

const {
  initDisplaySelect,
  buildScreenOptions,
  pickSelectionIndex,
} = require("../renderer-modules/display-select");

function display(id, { primary = false, label = "", w = 1920, h = 1080 } = {}) {
  return { id, primary, label, size: { width: w, height: h } };
}

// ---------------------------------------------------------------------------
// buildScreenOptions
// ---------------------------------------------------------------------------

describe("buildScreenOptions", () => {
  test("primary → 主螢幕, single secondary → 副螢幕 (no number at ≤2 displays)", () => {
    const opts = buildScreenOptions([
      display(1, { primary: true, label: "Built-in", w: 2560, h: 1600 }),
      display(2, { label: "HDMI" }),
    ]);
    expect(opts[0].label).toBe("主螢幕 · Built-in · 2560×1600");
    expect(opts[1].label).toBe("副螢幕 · HDMI · 1920×1080");
    expect(opts.map((o) => o.displayId)).toEqual([1, 2]);
    expect(opts.map((o) => o.value)).toEqual([0, 1]);
  });

  test("secondaries are numbered when more than 2 displays", () => {
    const opts = buildScreenOptions([
      display(1, { primary: true, label: "Built-in" }),
      display(2, { label: "HDMI" }),
      display(3, { label: "DP" }),
    ]);
    expect(opts[1].label).toContain("副螢幕 1");
    expect(opts[2].label).toContain("副螢幕 2");
  });

  test("connector falls back when display.label is absent", () => {
    const opts = buildScreenOptions([
      display(1, { primary: true }),
      display(2),
    ]);
    expect(opts[0].label).toBe("主螢幕 · Built-in · 1920×1080");
    expect(opts[1].label).toBe("副螢幕 · Display 2 · 1920×1080");
  });

  test("labels are ·-joined — the client-nav chip split contract", () => {
    const opts = buildScreenOptions([
      display(1, { primary: true, label: "Built-in", w: 2560, h: 1600 }),
    ]);
    // client-nav splits on " · " → chip name | meta
    const parts = opts[0].label.split(/\s·\s/);
    expect(parts).toEqual(["主螢幕", "Built-in", "2560×1600"]);
  });
});

// ---------------------------------------------------------------------------
// pickSelectionIndex
// ---------------------------------------------------------------------------

describe("pickSelectionIndex", () => {
  const A = { value: 0, displayId: 10, primary: true };
  const B = { value: 1, displayId: 20, primary: false };
  const C = { value: 2, displayId: 30, primary: false };

  test("displayId survives index shift after unplug ([A,B,C]→[A,C], selected C)", () => {
    const after = [A, { ...C, value: 1 }];
    expect(pickSelectionIndex({ options: after, prevDisplayId: 30, savedIndex: null })).toBe(1);
  });

  test("falls back to primary when the selected display vanished", () => {
    expect(pickSelectionIndex({ options: [A, B], prevDisplayId: 30, savedIndex: null })).toBe(0);
  });

  test("savedIndex honoured on first populate (no prevDisplayId)", () => {
    expect(pickSelectionIndex({ options: [A, B, C], prevDisplayId: null, savedIndex: 2 })).toBe(2);
  });

  test("prevDisplayId outranks savedIndex", () => {
    expect(pickSelectionIndex({ options: [A, B, C], prevDisplayId: 20, savedIndex: 2 })).toBe(1);
  });

  test("out-of-range savedIndex ignored → primary", () => {
    expect(pickSelectionIndex({ options: [A, B], prevDisplayId: null, savedIndex: 7 })).toBe(0);
  });

  test("no primary flag anywhere → index 0", () => {
    expect(pickSelectionIndex({ options: [B, C], prevDisplayId: null, savedIndex: null })).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// initDisplaySelect — jsdom populate/repopulate
// ---------------------------------------------------------------------------

describe("initDisplaySelect", () => {
  let api;
  let hotplugCb;

  function makeApi(displays) {
    hotplugCb = null;
    return {
      getDisplays: jest.fn().mockImplementation(() => Promise.resolve(displays.current)),
      setOverlayDisplayId: jest.fn(),
      onUpdateDisplayOptions: jest.fn((cb) => {
        hotplugCb = cb;
      }),
    };
  }

  beforeEach(() => {
    document.body.innerHTML = `<select id="screen-select"></select>`;
  });

  test("guards: no api / no #screen-select → no throw", () => {
    expect(() => initDisplaySelect({ api: null })).not.toThrow();
    document.body.innerHTML = ""; // child.html has no select
    expect(() =>
      initDisplaySelect({ api: makeApi({ current: [] }) })
    ).not.toThrow();
  });

  test("populate keeps dataset.displayId on every option and syncs preferred id", async () => {
    const displays = {
      current: [
        display(101, { primary: true, label: "Built-in", w: 2560, h: 1600 }),
        display(202, { label: "HDMI" }),
      ],
    };
    api = makeApi(displays);
    await initDisplaySelect({ api });

    const opts = [...document.querySelectorAll("#screen-select option")];
    expect(opts.map((o) => o.dataset.displayId)).toEqual(["101", "202"]);
    expect(opts[0].textContent).toBe("主螢幕 · Built-in · 2560×1600");
    expect(api.setOverlayDisplayId).toHaveBeenCalledWith(101);
  });

  test("repopulate dispatches a bubbling change event", async () => {
    const displays = { current: [display(101, { primary: true })] };
    api = makeApi(displays);
    const seen = [];
    // Listen on body — only a bubbling event reaches it
    document.body.addEventListener("change", (e) => seen.push(e.target.id));
    await initDisplaySelect({ api });
    expect(seen).toEqual(["screen-select"]);
  });

  test("hotplug callback re-fetches via getDisplays and keeps the selected display by id", async () => {
    const displays = {
      current: [
        display(101, { primary: true, label: "Built-in" }),
        display(202, { label: "HDMI" }),
        display(303, { label: "DP" }),
      ],
    };
    api = makeApi(displays);
    await initDisplaySelect({ api });
    expect(api.getDisplays).toHaveBeenCalledTimes(1);

    // User selects the third display (id 303)
    const select = document.getElementById("screen-select");
    select.value = "2";

    // Unplug the middle display → 303 shifts from index 2 to index 1
    displays.current = [
      display(101, { primary: true, label: "Built-in" }),
      display(303, { label: "DP" }),
    ];
    expect(typeof hotplugCb).toBe("function");
    await hotplugCb();

    expect(api.getDisplays).toHaveBeenCalledTimes(2);
    expect(select.value).toBe("1");
    expect(select.options[select.selectedIndex].dataset.displayId).toBe("303");
    expect(api.setOverlayDisplayId).toHaveBeenLastCalledWith(303);
  });

  test("selected display vanished → falls back to primary", async () => {
    const displays = {
      current: [
        display(101, { primary: true }),
        display(202),
      ],
    };
    api = makeApi(displays);
    await initDisplaySelect({ api });

    const select = document.getElementById("screen-select");
    select.value = "1"; // secondary (202)

    displays.current = [display(101, { primary: true })];
    await hotplugCb();

    expect(select.options[select.selectedIndex].dataset.displayId).toBe("101");
    expect(api.setOverlayDisplayId).toHaveBeenLastCalledWith(101);
  });
});
