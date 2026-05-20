// Tests for the trusted-wss-hosts registry — narrows self-signed cert
// acceptance to user-configured endpoints only.
const trustedWssHosts = require("../main-modules/trusted-wss-hosts");

describe("trustedWssHosts", () => {
  beforeEach(() => {
    trustedWssHosts.clear();
  });

  test("add + has roundtrip with int port", () => {
    trustedWssHosts.add("138.2.59.206", 443);
    expect(trustedWssHosts.has("138.2.59.206", 443)).toBe(true);
  });

  test("add coerces string port to int (so URL.port string matches)", () => {
    trustedWssHosts.add("example.com", 443);
    // URL.port is always a string when present; ensure has() treats them equally.
    expect(trustedWssHosts.has("example.com", "443")).toBe(true);
  });

  test("has returns false for unknown host", () => {
    trustedWssHosts.add("a.example", 443);
    expect(trustedWssHosts.has("b.example", 443)).toBe(false);
  });

  test("has returns false for known host but different port", () => {
    trustedWssHosts.add("a.example", 443);
    expect(trustedWssHosts.has("a.example", 5001)).toBe(false);
  });

  test("add rejects empty / non-string host", () => {
    trustedWssHosts.add("", 443);
    trustedWssHosts.add("   ", 443);
    trustedWssHosts.add(null, 443);
    trustedWssHosts.add(undefined, 443);
    expect(trustedWssHosts.snapshot()).toEqual([]);
  });

  test("add rejects out-of-range / non-integer port", () => {
    trustedWssHosts.add("a.example", 0);
    trustedWssHosts.add("a.example", 65536);
    trustedWssHosts.add("a.example", "not-a-number");
    trustedWssHosts.add("a.example", null);
    expect(trustedWssHosts.snapshot()).toEqual([]);
  });

  test("clear empties the registry", () => {
    trustedWssHosts.add("a.example", 443);
    trustedWssHosts.add("b.example", 443);
    expect(trustedWssHosts.snapshot()).toHaveLength(2);
    trustedWssHosts.clear();
    expect(trustedWssHosts.snapshot()).toEqual([]);
  });

  test("trims surrounding whitespace from host before storing", () => {
    trustedWssHosts.add("  a.example  ", 443);
    expect(trustedWssHosts.has("a.example", 443)).toBe(true);
    expect(trustedWssHosts.has("  a.example  ", 443)).toBe(false);
  });
});
