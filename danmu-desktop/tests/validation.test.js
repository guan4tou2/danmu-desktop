const { validateIP, validatePort } = require("../shared/utils");

describe("validateIP", () => {
  test("accepts localhost", () => {
    expect(validateIP("localhost")).toBe(true);
  });
  test("accepts 127.0.0.1", () => {
    expect(validateIP("127.0.0.1")).toBe(true);
  });
  test("accepts valid domain", () => {
    expect(validateIP("example.com")).toBe(true);
  });
  test("rejects empty string", () => {
    expect(validateIP("")).toBe(false);
  });
  test("rejects invalid string", () => {
    expect(validateIP("not a valid address!")).toBe(false);
  });
});

describe("validatePort", () => {
  test("accepts valid port", () => {
    expect(validatePort("8080")).toBe(true);
  });
  test("rejects 0", () => {
    expect(validatePort("0")).toBe(false);
  });
  test("rejects port > 65535", () => {
    expect(validatePort("70000")).toBe(false);
  });
  test("rejects non-numeric", () => {
    expect(validatePort("abc")).toBe(false);
  });
});
