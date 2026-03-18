/**
 * Tests for renderer-modules/danmu-effects.js
 *
 * The module keeps module-level Map + _cssInjected flag, so we reset the
 * module registry before each test to get a clean slate.
 */

let effects;

beforeEach(() => {
  jest.resetModules();
  effects = require("../renderer-modules/danmu-effects");
});

// ---------------------------------------------------------------------------
// list() – built-in effects
// ---------------------------------------------------------------------------

describe("list()", () => {
  const BUILT_IN_NAMES = ["spin", "blink", "shake", "bounce", "rainbow", "glow", "wave", "zoom"];

  test("returns an array", () => {
    expect(Array.isArray(effects.list())).toBe(true);
  });

  test("contains all 8 built-in effects", () => {
    const names = effects.list().map((e) => e.name);
    BUILT_IN_NAMES.forEach((n) => expect(names).toContain(n));
  });

  test("each entry has name and label", () => {
    effects.list().forEach((e) => {
      expect(typeof e.name).toBe("string");
      expect(typeof e.label).toBe("string");
    });
  });

  test("has exactly 8 built-in entries on a fresh module load", () => {
    expect(effects.list().length).toBe(8);
  });
});

// ---------------------------------------------------------------------------
// register() – custom effects
// ---------------------------------------------------------------------------

describe("register()", () => {
  test("returns true for a valid plugin", () => {
    const result = effects.register({ name: "myFx", label: "My Effect", apply: () => {} });
    expect(result).toBe(true);
  });

  test("registered effect appears in list()", () => {
    effects.register({ name: "customFx", label: "Custom", apply: () => {} });
    const names = effects.list().map((e) => e.name);
    expect(names).toContain("customFx");
  });

  test("returns false when name is missing", () => {
    const result = effects.register({ label: "Bad", apply: () => {} });
    expect(result).toBe(false);
  });

  test("returns false when apply is not a function", () => {
    const result = effects.register({ name: "badFx", label: "Bad", apply: "notAFunction" });
    expect(result).toBe(false);
  });

  test("returns false for null plugin", () => {
    const result = effects.register(null);
    expect(result).toBe(false);
  });

  test("returns false for undefined plugin", () => {
    const result = effects.register(undefined);
    expect(result).toBe(false);
  });

  test("overwrites an existing effect with the same name", () => {
    effects.register({ name: "dup", label: "First", apply: () => {} });
    effects.register({ name: "dup", label: "Second", apply: () => {} });
    const entry = effects.list().find((e) => e.name === "dup");
    expect(entry.label).toBe("Second");
  });
});

// ---------------------------------------------------------------------------
// apply() – plugin invocation
// ---------------------------------------------------------------------------

describe("apply()", () => {
  function makeEl() {
    return document.createElement("span");
  }

  test("calls the plugin's apply function", () => {
    const spy = jest.fn();
    effects.register({ name: "testFx", label: "Test", apply: spy });
    const el = makeEl();
    effects.apply("testFx", el);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(el, expect.any(Object));
  });

  test("merges defaultOptions with caller options", () => {
    const spy = jest.fn();
    effects.register({
      name: "optFx",
      label: "Opt",
      defaultOptions: { duration: "1s", color: "red" },
      apply: spy,
    });
    effects.apply("optFx", makeEl(), { duration: "2s" });
    expect(spy).toHaveBeenCalledWith(expect.any(Object), { duration: "2s", color: "red" });
  });

  test("does nothing when name is 'none'", () => {
    const spy = jest.fn();
    effects.register({ name: "none", label: "None", apply: spy });
    effects.apply("none", makeEl());
    expect(spy).not.toHaveBeenCalled();
  });

  test("does nothing when name is empty string", () => {
    expect(() => effects.apply("", makeEl())).not.toThrow();
  });

  test("does not throw for an unknown effect name", () => {
    expect(() => effects.apply("unknownXYZ", makeEl())).not.toThrow();
  });

  test("does not throw when plugin.apply throws internally", () => {
    effects.register({
      name: "buggyFx",
      label: "Buggy",
      apply() { throw new Error("oops"); },
    });
    expect(() => effects.apply("buggyFx", makeEl())).not.toThrow();
  });

  test("built-in 'spin' sets animation style on element", () => {
    const el = makeEl();
    effects.apply("spin", el);
    expect(el.style.animation).toMatch(/de-spin/);
  });

  test("built-in 'blink' sets animation style on element", () => {
    const el = makeEl();
    effects.apply("blink", el);
    expect(el.style.animation).toMatch(/de-blink/);
  });

  test("caller can override duration for built-in effects", () => {
    const el = makeEl();
    effects.apply("spin", el, { duration: "3s" });
    expect(el.style.animation).toContain("3s");
  });
});
