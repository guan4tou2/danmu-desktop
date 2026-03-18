const { validateIP, validatePort, sanitizeLog } = require("../shared/utils");

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

describe("sanitizeLog", () => {
  test("removes newlines (LF)", () => {
    expect(sanitizeLog("line1\nline2")).toBe("line1 line2");
  });

  test("removes carriage returns (CR)", () => {
    expect(sanitizeLog("line1\rline2")).toBe("line1 line2");
  });

  test("removes CRLF", () => {
    expect(sanitizeLog("line1\r\nline2")).toBe("line1 line2");
  });

  test("removes tabs", () => {
    expect(sanitizeLog("col1\tcol2")).toBe("col1 col2");
  });

  test("removes mixed newlines and tabs", () => {
    expect(sanitizeLog("a\nb\tc\r\nd")).toBe("a b c d");
  });

  test("passes through clean strings unchanged", () => {
    expect(sanitizeLog("hello world")).toBe("hello world");
  });

  test("handles empty string", () => {
    expect(sanitizeLog("")).toBe("");
  });

  test("handles non-string input (number)", () => {
    expect(sanitizeLog(12345)).toBe("12345");
  });

  test("handles non-string input (null)", () => {
    expect(sanitizeLog(null)).toBe("null");
  });

  test("handles non-string input (undefined)", () => {
    expect(sanitizeLog(undefined)).toBe("undefined");
  });

  test("handles non-string input (object)", () => {
    expect(sanitizeLog({ key: "value" })).toBe("[object Object]");
  });

  test("handles non-string input (boolean)", () => {
    expect(sanitizeLog(true)).toBe("true");
  });
});

describe("validateIP - additional edge cases", () => {
  test("rejects IPv6 loopback ::1", () => {
    expect(validateIP("::1")).toBe(false);
  });

  test("rejects full IPv6 address", () => {
    expect(validateIP("2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBe(false);
  });

  test("rejects IPv6 shorthand", () => {
    expect(validateIP("fe80::1")).toBe(false);
  });

  test("rejects IPv4-mapped IPv6", () => {
    expect(validateIP("::ffff:192.168.1.1")).toBe(false);
  });

  test("accepts subdomain with numbers", () => {
    expect(validateIP("server1.example.com")).toBe(true);
  });

  test("rejects single label without TLD (not localhost)", () => {
    expect(validateIP("myserver")).toBe(false);
  });

  test("accepts multi-level subdomains", () => {
    expect(validateIP("a.b.c.d.example.com")).toBe(true);
  });

  test("rejects IP with extra octets", () => {
    expect(validateIP("1.2.3.4.5")).toBe(false);
  });

  test("rejects IP with values > 255", () => {
    expect(validateIP("256.1.1.1")).toBe(false);
  });

  test("accepts edge IP 0.0.0.0", () => {
    expect(validateIP("0.0.0.0")).toBe(true);
  });

  test("accepts edge IP 255.255.255.255", () => {
    expect(validateIP("255.255.255.255")).toBe(true);
  });

  test("rejects IP with leading spaces", () => {
    expect(validateIP(" 127.0.0.1")).toBe(false);
  });

  test("rejects IP with trailing spaces", () => {
    expect(validateIP("127.0.0.1 ")).toBe(false);
  });
});

describe("validatePort - additional edge cases", () => {
  test("accepts port 1 (minimum)", () => {
    expect(validatePort("1")).toBe(true);
  });

  test("accepts port 65535 (maximum)", () => {
    expect(validatePort("65535")).toBe(true);
  });

  test("rejects port 65536", () => {
    expect(validatePort("65536")).toBe(false);
  });

  test("rejects negative port", () => {
    expect(validatePort("-1")).toBe(false);
  });

  test("rejects floating point", () => {
    expect(validatePort("80.5")).toBe(false);
  });

  test("rejects empty string", () => {
    expect(validatePort("")).toBe(false);
  });

  test("rejects port with spaces", () => {
    expect(validatePort("80 80")).toBe(false);
  });

  test("rejects six-digit number", () => {
    expect(validatePort("100000")).toBe(false);
  });
});
