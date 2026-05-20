// Tests for the conn-input parser shared by the conn-card display + edit form.
// The parser maps a single human-typed Server string into the storage shape
// {host, port}, builds the canonical wss URL, and formats a display string
// that round-trips (formatDisplayHost ∘ parseServerInput = identity).

const { test, expect, describe } = require("@jest/globals");
const {
  parseServerInput,
  buildCanonicalUrl,
  formatDisplayHost,
} = require("../renderer-modules/conn-parser");

describe("parseServerInput", () => {
  test("bare hostname → host + default port 443", () => {
    expect(parseServerInput("danmu.acme.co")).toEqual({
      host: "danmu.acme.co",
      port: 443,
    });
  });

  test("host:port → host + parsed port", () => {
    expect(parseServerInput("danmu.acme.co:443")).toEqual({
      host: "danmu.acme.co",
      port: 443,
    });
  });

  test("wss:// scheme + /ws path stripped", () => {
    expect(parseServerInput("wss://danmu.acme.co/ws")).toEqual({
      host: "danmu.acme.co",
      port: 443,
    });
  });

  test("https:// scheme + custom port + /ws path stripped", () => {
    expect(parseServerInput("https://danmu.acme.co:8443/ws")).toEqual({
      host: "danmu.acme.co",
      port: 8443,
    });
  });

  test("ws:// scheme + whitespace trimmed (IPv4)", () => {
    expect(parseServerInput("  ws://192.168.1.50:443  ")).toEqual({
      host: "192.168.1.50",
      port: 443,
    });
  });

  test("trailing slash stripped", () => {
    expect(parseServerInput("danmu.acme.co/")).toEqual({
      host: "danmu.acme.co",
      port: 443,
    });
  });

  test("http:// scheme stripped", () => {
    expect(parseServerInput("http://danmu.local")).toEqual({
      host: "danmu.local",
      port: 443,
    });
  });

  test("empty string throws", () => {
    expect(() => parseServerInput("")).toThrow("host required");
  });

  test("whitespace-only throws", () => {
    expect(() => parseServerInput("   ")).toThrow("host required");
  });

  test("non-numeric port throws", () => {
    expect(() => parseServerInput("danmu.acme.co:abc")).toThrow("invalid port");
  });

  test("port out of range throws (too high)", () => {
    expect(() => parseServerInput("danmu.acme.co:99999")).toThrow("invalid port");
  });

  test("port out of range throws (zero)", () => {
    expect(() => parseServerInput("danmu.acme.co:0")).toThrow("invalid port");
  });

  test("port out of range throws (negative)", () => {
    expect(() => parseServerInput("danmu.acme.co:-1")).toThrow("invalid port");
  });
});

describe("buildCanonicalUrl", () => {
  test("default port 443 hidden in URL", () => {
    expect(buildCanonicalUrl({ host: "danmu.acme.co", port: 443 })).toBe(
      "wss://danmu.acme.co/ws"
    );
  });

  test("custom port shown in URL", () => {
    expect(buildCanonicalUrl({ host: "danmu.acme.co", port: 8443 })).toBe(
      "wss://danmu.acme.co:8443/ws"
    );
  });

  test("IPv4 + default port 443 hidden in URL", () => {
    expect(buildCanonicalUrl({ host: "192.168.1.50", port: 443 })).toBe(
      "wss://192.168.1.50/ws"
    );
  });
});

describe("formatDisplayHost", () => {
  test("default port 443 hidden in display", () => {
    expect(formatDisplayHost({ host: "danmu.acme.co", port: 443 })).toBe(
      "danmu.acme.co"
    );
  });

  test("custom port shown in display", () => {
    expect(formatDisplayHost({ host: "danmu.acme.co", port: 8443 })).toBe(
      "danmu.acme.co:8443"
    );
  });

  test("round-trip: parseServerInput(formatDisplayHost(x)) === x", () => {
    const cases = [
      { host: "danmu.acme.co", port: 443 },
      { host: "danmu.acme.co", port: 8443 },
      { host: "192.168.1.50", port: 443 },
    ];
    for (const c of cases) {
      expect(parseServerInput(formatDisplayHost(c))).toEqual(c);
    }
  });
});
