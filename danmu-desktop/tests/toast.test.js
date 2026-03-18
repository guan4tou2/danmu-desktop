/**
 * Tests for renderer-modules/toast.js
 */

const { showToast } = require("../renderer-modules/toast");

beforeEach(() => {
  jest.useFakeTimers();
  document.body.innerHTML = '<div id="toast-container"></div>';
});

afterEach(() => {
  jest.runAllTimers();
  jest.useRealTimers();
});

function container() {
  return document.getElementById("toast-container");
}

// ---------------------------------------------------------------------------
// Element creation
// ---------------------------------------------------------------------------

describe("showToast() – element creation", () => {
  test("appends a toast element to the container", () => {
    showToast("Hello");
    expect(container().children.length).toBe(1);
  });

  test("does nothing when #toast-container is absent", () => {
    document.body.innerHTML = "";
    expect(() => showToast("Hello")).not.toThrow();
  });

  test("created element has the 'toast' class", () => {
    showToast("Hello");
    expect(container().firstChild.classList.contains("toast")).toBe(true);
  });

  test("multiple toasts stack in the container", () => {
    showToast("First");
    showToast("Second");
    showToast("Third");
    expect(container().children.length).toBe(3);
  });
});

// ---------------------------------------------------------------------------
// XSS prevention: message must NOT be injected via innerHTML
// ---------------------------------------------------------------------------

describe("showToast() – XSS prevention", () => {
  test("HTML in message is escaped, not rendered", () => {
    const malicious = '<img src=x onerror=alert(1)>';
    showToast(malicious);
    // The img element must NOT exist inside the container
    expect(container().querySelector("img")).toBeNull();
    // The raw string should appear as text content somewhere inside the toast
    const p = container().querySelector("p");
    expect(p.textContent).toBe(malicious);
  });

  test("script tags in message are not executed", () => {
    const malicious = '<script>window.__xss = true;</script>';
    showToast(malicious);
    expect(window.__xss).toBeUndefined();
    const p = container().querySelector("p");
    expect(p.textContent).toBe(malicious);
  });

  test("message is set via textContent on the <p> element", () => {
    showToast("Safe text");
    const p = container().querySelector("p");
    expect(p.textContent).toBe("Safe text");
  });
});

// ---------------------------------------------------------------------------
// Type variants
// ---------------------------------------------------------------------------

describe("showToast() – type handling", () => {
  test("defaults to 'info' type background when no type given", () => {
    showToast("msg");
    const toast = container().firstChild;
    // info bg colour is rgba(59, 130, 246, 0.15)
    expect(toast.style.backgroundColor).toBe("rgba(59, 130, 246, 0.15)");
  });

  test("success type sets green background", () => {
    showToast("ok", "success");
    expect(container().firstChild.style.backgroundColor).toBe("rgba(16, 185, 129, 0.15)");
  });

  test("error type sets red background", () => {
    showToast("err", "error");
    expect(container().firstChild.style.backgroundColor).toBe("rgba(239, 68, 68, 0.15)");
  });

  test("warning type sets yellow background", () => {
    showToast("warn", "warning");
    expect(container().firstChild.style.backgroundColor).toBe("rgba(234, 179, 8, 0.15)");
  });

  test("unknown type falls back to info background", () => {
    showToast("msg", "nonexistent");
    expect(container().firstChild.style.backgroundColor).toBe("rgba(59, 130, 246, 0.15)");
  });
});

// ---------------------------------------------------------------------------
// Auto-removal
// ---------------------------------------------------------------------------

describe("showToast() – auto-removal", () => {
  test("toast is removed after 4000 ms + fade (300 ms)", () => {
    showToast("Gone");
    expect(container().children.length).toBe(1);
    jest.advanceTimersByTime(4300);
    expect(container().children.length).toBe(0);
  });

  test("toast is still present at 3999 ms", () => {
    showToast("Still here");
    jest.advanceTimersByTime(3999);
    expect(container().children.length).toBe(1);
  });
});

// ---------------------------------------------------------------------------
// Close button
// ---------------------------------------------------------------------------

describe("showToast() – close button", () => {
  test("clicking the close button removes the toast immediately", () => {
    showToast("Closable");
    const closeBtn = container().querySelector("button");
    expect(closeBtn).not.toBeNull();
    closeBtn.click();
    expect(container().children.length).toBe(0);
  });
});
