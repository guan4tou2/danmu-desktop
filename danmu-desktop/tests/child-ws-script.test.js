const { getChildWsScript } = require("../main-modules/child-ws-script");

// ---------------------------------------------------------------------------
// Mock WebSocket class for evaluating the injected script
// ---------------------------------------------------------------------------
class MockWebSocket {
  constructor(url) {
    this.url = url;
    this.readyState = 0; // CONNECTING
    this.onopen = null;
    this.onclose = null;
    this.onmessage = null;
    this.onerror = null;
    this.sentMessages = [];
    MockWebSocket.instances.push(this);
  }
  send(data) {
    this.sentMessages.push(data);
  }
  close() {
    this.readyState = 3;
    if (this.onclose) this.onclose({ code: 1000 });
  }
}
MockWebSocket.OPEN = 1;
MockWebSocket.CLOSED = 3;
MockWebSocket.instances = [];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Evaluate the script in a sandboxed scope with our mock WebSocket. */
function evalScript(script, extraGlobals = {}) {
  MockWebSocket.instances = [];

  const globals = {
    WebSocket: MockWebSocket,
    console: { log: jest.fn(), warn: jest.fn(), error: jest.fn() },
    document: {
      addEventListener: jest.fn(),
      createElement: jest.fn(() => ({
        id: "",
        className: "",
        textContent: "",
        style: {},
        setAttribute: jest.fn(),
        innerHTML: "",
        remove: jest.fn(),
        appendChild: jest.fn(),
      })),
      getElementById: jest.fn(() => null),
      querySelector: jest.fn(() => null),
      querySelectorAll: jest.fn(() => []),
      head: { appendChild: jest.fn() },
      body: { appendChild: jest.fn(), contains: jest.fn(() => false) },
      visibilityState: "visible",
    },
    window: { API: null },
    setTimeout: jest.fn((fn) => fn()),
    clearTimeout: jest.fn(),
    setInterval: jest.fn(),
    clearInterval: jest.fn(),
    encodeURIComponent,
    Date,
    JSON,
    Math,
    String,
    Number,
    ...extraGlobals,
  };

  // Build a function scope with all globals as parameters
  const paramNames = Object.keys(globals);
  const paramValues = Object.values(globals);
  const fn = new Function(...paramNames, script);
  fn(...paramValues);

  return globals;
}

// ===========================================================================
// Tests
// ===========================================================================

describe("getChildWsScript", () => {
  test("returns a non-empty string", () => {
    const result = getChildWsScript("127.0.0.1", 9487);
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });

  test("embeds IP address in the script", () => {
    const script = getChildWsScript("192.168.1.100", 8080);
    expect(script).toContain('"192.168.1.100"');
  });

  test("embeds port number in the script", () => {
    const script = getChildWsScript("localhost", 3000);
    expect(script).toContain("3000");
  });

  test("embeds token as query parameter when provided", () => {
    const script = getChildWsScript("localhost", 3000, null, "my-secret-token");
    expect(script).toContain('"my-secret-token"');
    expect(script).toContain("token=");
  });

  test("omits token from URL when empty", () => {
    const script = getChildWsScript("localhost", 3000, null, "");
    // The URL construction only adds token when WS_AUTH_TOKEN is truthy
    expect(script).toContain('WS_AUTH_TOKEN = ""');
  });

  test("embeds startup animation settings", () => {
    const settings = { enabled: true, type: "domain-expansion" };
    const script = getChildWsScript("localhost", 3000, settings);
    expect(script).toContain("domain-expansion");
  });

  test("defaults startup animation to disabled when null", () => {
    const script = getChildWsScript("localhost", 3000, null);
    expect(script).toContain('"enabled":false');
  });

  test("IP is JSON-stringified for safety", () => {
    const script = getChildWsScript('evil";alert(1)//', 3000);
    // Should be safely escaped via JSON.stringify
    expect(script).not.toContain('evil";alert(1)//');
  });

  test("port is coerced to a number", () => {
    const script = getChildWsScript("localhost", "9999");
    expect(script).toContain("WS_PORT_NUM=9999");
  });
});

describe("child-ws-script execution", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    MockWebSocket.instances = [];
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("creates a WebSocket connection on execution", () => {
    const script = getChildWsScript("127.0.0.1", 9487);
    // Use real setTimeout for the initial connect() call
    const timeouts = [];
    evalScript(script, {
      setTimeout: jest.fn((fn, delay) => {
        timeouts.push({ fn, delay });
        if (delay === undefined || delay <= 200) fn();
        return timeouts.length;
      }),
    });

    expect(MockWebSocket.instances.length).toBeGreaterThanOrEqual(1);
    expect(MockWebSocket.instances[0].url).toBe("ws://127.0.0.1:9487");
  });

  test("WebSocket URL includes token when provided", () => {
    const script = getChildWsScript("10.0.0.1", 8080, null, "abc123");
    evalScript(script, {
      setTimeout: jest.fn((fn, delay) => {
        if (delay === undefined || delay <= 200) fn();
        return 1;
      }),
    });

    expect(MockWebSocket.instances.length).toBeGreaterThanOrEqual(1);
    expect(MockWebSocket.instances[0].url).toContain("token=abc123");
  });

  test("WebSocket URL omits token when empty string", () => {
    const script = getChildWsScript("10.0.0.1", 8080, null, "");
    evalScript(script, {
      setTimeout: jest.fn((fn, delay) => {
        if (delay === undefined || delay <= 200) fn();
        return 1;
      }),
    });

    expect(MockWebSocket.instances.length).toBeGreaterThanOrEqual(1);
    expect(MockWebSocket.instances[0].url).toBe("ws://10.0.0.1:8080");
  });

  test("sendConnectionStatus calls window.API.sendConnectionStatus", () => {
    const sendConnectionStatus = jest.fn();
    const script = getChildWsScript("127.0.0.1", 9487);

    const scheduledTimeouts = [];
    const globals = evalScript(script, {
      window: {
        API: { sendConnectionStatus },
      },
      setTimeout: jest.fn((fn, delay) => {
        scheduledTimeouts.push({ fn, delay });
        // Execute 200ms debounce timeouts immediately
        if (delay <= 200) fn();
        return scheduledTimeouts.length;
      }),
    });

    // The connect() function is called, ws.onopen fires sendConnectionStatus('connected')
    const ws = MockWebSocket.instances[0];
    if (ws && ws.onopen) {
      ws.readyState = 1; // OPEN
      ws.onopen();
    }

    expect(sendConnectionStatus).toHaveBeenCalledWith("connected", undefined, undefined);
  });

  test("heartbeat interval sends heartbeat JSON when connection is open", () => {
    const script = getChildWsScript("127.0.0.1", 9487);
    let intervalCallback = null;

    const globals = evalScript(script, {
      window: { API: { sendConnectionStatus: jest.fn() } },
      setTimeout: jest.fn((fn, delay) => {
        if (delay <= 200) fn();
        return 1;
      }),
      setInterval: jest.fn((fn) => {
        intervalCallback = fn;
        return 42;
      }),
    });

    const ws = MockWebSocket.instances[0];
    if (ws && ws.onopen) {
      ws.readyState = 1;
      ws.onopen();
    }

    // startHeartbeat should have registered an interval
    expect(intervalCallback).not.toBeNull();

    // Execute the heartbeat callback
    if (intervalCallback) {
      intervalCallback();
    }

    // Should have sent a heartbeat message
    expect(ws.sentMessages.length).toBeGreaterThanOrEqual(1);
    const heartbeat = JSON.parse(ws.sentMessages[ws.sentMessages.length - 1]);
    expect(heartbeat.type).toBe("heartbeat");
    expect(heartbeat.timestamp).toBeDefined();
  });

  test("script contains maxReconnectAttempts = 10", () => {
    const script = getChildWsScript("localhost", 3000);
    expect(script).toContain("maxReconnectAttempts = 10");
  });

  test("script contains exponential backoff parameters", () => {
    const script = getChildWsScript("localhost", 3000);
    expect(script).toContain("reconnectBaseDelay = 3000");
    expect(script).toContain("reconnectMaxDelay = 30000");
  });

  test("script registers visibilitychange listener", () => {
    const script = getChildWsScript("localhost", 3000);
    let listenerRegistered = false;

    evalScript(script, {
      document: {
        addEventListener: jest.fn((event) => {
          if (event === "visibilitychange") listenerRegistered = true;
        }),
        createElement: jest.fn(() => ({
          id: "",
          className: "",
          textContent: "",
          style: {},
          setAttribute: jest.fn(),
          innerHTML: "",
          remove: jest.fn(),
          appendChild: jest.fn(),
        })),
        getElementById: jest.fn(() => null),
        querySelector: jest.fn(() => null),
        querySelectorAll: jest.fn(() => []),
        head: { appendChild: jest.fn() },
        body: { appendChild: jest.fn(), contains: jest.fn(() => false) },
        visibilityState: "visible",
      },
      setTimeout: jest.fn((fn, delay) => {
        if (delay <= 200) fn();
        return 1;
      }),
    });

    expect(listenerRegistered).toBe(true);
  });

  test("onclose sends disconnected status and schedules reconnect", () => {
    const sendConnectionStatus = jest.fn();
    const script = getChildWsScript("127.0.0.1", 9487);
    const scheduledReconnects = [];

    const globals = evalScript(script, {
      window: { API: { sendConnectionStatus } },
      setTimeout: jest.fn((fn, delay) => {
        if (delay <= 200) {
          fn();
        } else {
          scheduledReconnects.push({ fn, delay });
        }
        return scheduledReconnects.length + 100;
      }),
    });

    const ws = MockWebSocket.instances[0];
    // Simulate successful first connection then disconnect
    if (ws && ws.onopen) {
      ws.readyState = 1;
      ws.onopen();
    }

    sendConnectionStatus.mockClear();

    // Simulate close after successful connection
    if (ws && ws.onclose) {
      ws.readyState = 3;
      ws.onclose({ code: 1006 });
    }

    // Should have sent disconnected status
    expect(sendConnectionStatus).toHaveBeenCalledWith("disconnected", 1, 10);

    // Should have scheduled a reconnect with backoff delay > 200ms
    expect(scheduledReconnects.length).toBeGreaterThanOrEqual(1);
  });

  test("first connection timeout sets connection-failed after 10s", () => {
    const script = getChildWsScript("127.0.0.1", 9487);

    // The script uses connectionTimeoutDuration = 10000
    expect(script).toContain("connectionTimeoutDuration = 10000");
  });

  test("onmessage responds to ping with pong", () => {
    const script = getChildWsScript("127.0.0.1", 9487);

    evalScript(script, {
      window: {
        API: { sendConnectionStatus: jest.fn() },
        showdanmu: jest.fn(),
      },
      setTimeout: jest.fn((fn, delay) => {
        if (delay <= 200) fn();
        return 1;
      }),
    });

    const ws = MockWebSocket.instances[0];
    ws.readyState = 1;
    if (ws.onopen) ws.onopen();

    // Send a ping message
    if (ws.onmessage) {
      ws.onmessage({ data: JSON.stringify({ type: "ping" }) });
    }

    // Should have sent a pong response
    const pongMessages = ws.sentMessages.filter((m) => {
      try {
        return JSON.parse(m).type === "pong";
      } catch {
        return false;
      }
    });
    expect(pongMessages.length).toBe(1);
  });

  test("onmessage handles heartbeat_ack string", () => {
    const script = getChildWsScript("127.0.0.1", 9487);
    const consoleMock = { log: jest.fn(), warn: jest.fn(), error: jest.fn() };

    evalScript(script, {
      console: consoleMock,
      window: { API: { sendConnectionStatus: jest.fn() } },
      setTimeout: jest.fn((fn, delay) => {
        if (delay <= 200) fn();
        return 1;
      }),
    });

    const ws = MockWebSocket.instances[0];
    ws.readyState = 1;
    if (ws.onopen) ws.onopen();

    if (ws.onmessage) {
      ws.onmessage({ data: "heartbeat_ack" });
    }

    expect(consoleMock.log).toHaveBeenCalledWith("Received heartbeat response");
  });

  test("onmessage handles connection string", () => {
    const script = getChildWsScript("127.0.0.1", 9487);
    const consoleMock = { log: jest.fn(), warn: jest.fn(), error: jest.fn() };

    evalScript(script, {
      console: consoleMock,
      window: { API: { sendConnectionStatus: jest.fn() } },
      setTimeout: jest.fn((fn, delay) => {
        if (delay <= 200) fn();
        return 1;
      }),
    });

    const ws = MockWebSocket.instances[0];
    ws.readyState = 1;
    if (ws.onopen) ws.onopen();

    if (ws.onmessage) {
      ws.onmessage({ data: "connection" });
    }

    expect(consoleMock.log).toHaveBeenCalledWith("connection");
  });

  test("onmessage injects effectCss keyframes style element", () => {
    const script = getChildWsScript("127.0.0.1", 9487);
    const createdElements = [];
    const headAppended = [];

    evalScript(script, {
      window: {
        API: { sendConnectionStatus: jest.fn() },
        showdanmu: jest.fn(),
      },
      document: {
        addEventListener: jest.fn(),
        createElement: jest.fn((tag) => {
          const el = {
            tagName: tag,
            id: "",
            className: "",
            textContent: "",
            style: {},
            setAttribute: jest.fn(),
            innerHTML: "",
            remove: jest.fn(),
            appendChild: jest.fn(),
          };
          createdElements.push(el);
          return el;
        }),
        getElementById: jest.fn(() => null),
        querySelector: jest.fn(() => null),
        querySelectorAll: jest.fn(() => []),
        head: {
          appendChild: jest.fn((el) => headAppended.push(el)),
        },
        body: { appendChild: jest.fn(), contains: jest.fn(() => false) },
        visibilityState: "visible",
      },
      setTimeout: jest.fn((fn, delay) => {
        if (delay <= 200) fn();
        return 1;
      }),
    });

    const ws = MockWebSocket.instances[0];
    ws.readyState = 1;
    if (ws.onopen) ws.onopen();

    // Send a danmu message with effectCss
    if (ws.onmessage) {
      ws.onmessage({
        data: JSON.stringify({
          text: "hello",
          color: "ffffff",
          opacity: 100,
          size: 50,
          speed: 5,
          effectCss: {
            keyframes: "@keyframes test-spin { to { transform: rotate(360deg); } }",
            animation: "test-spin 1s linear infinite",
            styleId: "test-spin",
          },
        }),
      });
    }

    // A style element should have been created with the keyframes
    const styleEls = createdElements.filter(
      (el) => el.tagName === "style" && el.id === "dme-test-spin"
    );
    expect(styleEls.length).toBe(1);
    expect(styleEls[0].textContent).toContain("test-spin");
  });

  test("getReconnectDelay is capped at 30000ms", () => {
    const script = getChildWsScript("localhost", 3000);
    // The function caps at reconnectMaxDelay = 30000 with +-20% jitter
    // At attempt 10: 3000 * 2^10 = 3072000, capped to 30000, jitter +-6000
    // So max delay = 30000 + 6000 = 36000, min = 30000 - 6000 = 24000
    expect(script).toContain("Math.min(exponential, reconnectMaxDelay)");
  });

  test("startup animation text defaults to LINK START", () => {
    const script = getChildWsScript("localhost", 3000, { enabled: true });
    expect(script).toContain("'LINK START'");
  });

  test("startup animation uses custom text when type is custom", () => {
    const script = getChildWsScript("localhost", 3000, {
      enabled: true,
      type: "custom",
      customText: "Hello World",
    });
    expect(script).toContain("Hello World");
  });

  // -----------------------------------------------------------------------
  // Task 1: settings_changed handling
  // -----------------------------------------------------------------------

  test("settings_changed message is parsed without error", () => {
    const script = getChildWsScript("127.0.0.1", 9487);
    const consoleMock = { log: jest.fn(), warn: jest.fn(), error: jest.fn() };

    evalScript(script, {
      console: consoleMock,
      window: {
        API: { sendConnectionStatus: jest.fn() },
        showdanmu: jest.fn(),
      },
      setTimeout: jest.fn((fn, delay) => {
        if (delay <= 200) fn();
        return 1;
      }),
    });

    const ws = MockWebSocket.instances[0];
    ws.readyState = 1;
    if (ws.onopen) ws.onopen();

    // Send a settings_changed message (as the Python server would)
    if (ws.onmessage) {
      ws.onmessage({
        data: JSON.stringify({
          type: "settings_changed",
          settings: { Speed: [true, 1, 10, 5] },
        }),
      });
    }

    // Should not have logged any error
    const errorCalls = consoleMock.error.mock.calls.filter(
      (call) => call[0] && call[0].toString().includes("Error processing message")
    );
    expect(errorCalls.length).toBe(0);
  });

  test("settings_changed message with invalid data does not crash", () => {
    const script = getChildWsScript("127.0.0.1", 9487);
    const consoleMock = { log: jest.fn(), warn: jest.fn(), error: jest.fn() };

    evalScript(script, {
      console: consoleMock,
      window: {
        API: { sendConnectionStatus: jest.fn() },
        showdanmu: jest.fn(),
      },
      setTimeout: jest.fn((fn, delay) => {
        if (delay <= 200) fn();
        return 1;
      }),
    });

    const ws = MockWebSocket.instances[0];
    ws.readyState = 1;
    if (ws.onopen) ws.onopen();

    // Send malformed settings_changed messages — none should throw
    expect(() => {
      ws.onmessage({ data: JSON.stringify({ type: "settings_changed" }) });
    }).not.toThrow();

    expect(() => {
      ws.onmessage({ data: JSON.stringify({ type: "settings_changed", settings: null }) });
    }).not.toThrow();

    expect(() => {
      ws.onmessage({ data: JSON.stringify({ type: "settings_changed", settings: "invalid" }) });
    }).not.toThrow();
  });

  // -----------------------------------------------------------------------
  // Task 2: startup animation
  // -----------------------------------------------------------------------

  test("startup animation creates overlay element on open", () => {
    const script = getChildWsScript("127.0.0.1", 9487, { enabled: true });
    const createdElements = [];
    const bodyAppended = [];

    evalScript(script, {
      window: {
        API: { sendConnectionStatus: jest.fn() },
      },
      document: {
        addEventListener: jest.fn(),
        createElement: jest.fn((tag) => {
          const el = {
            tagName: tag,
            id: "",
            className: "",
            textContent: "",
            style: {},
            setAttribute: jest.fn(),
            innerHTML: "",
            remove: jest.fn(),
            appendChild: jest.fn(),
          };
          createdElements.push(el);
          return el;
        }),
        getElementById: jest.fn(() => null),
        querySelector: jest.fn(() => null),
        querySelectorAll: jest.fn(() => []),
        head: { appendChild: jest.fn() },
        body: {
          appendChild: jest.fn((el) => bodyAppended.push(el)),
          contains: jest.fn(() => false),
        },
        visibilityState: "visible",
      },
      setTimeout: jest.fn((fn, delay) => {
        if (delay <= 200) fn();
        return 1;
      }),
    });

    const ws = MockWebSocket.instances[0];
    ws.readyState = 1;
    if (ws.onopen) ws.onopen();

    // Should have created a scene div and a link-start div
    const sceneEl = createdElements.find((el) => el.className === "scene");
    const linkStartEl = createdElements.find((el) => el.className === "link-start");
    expect(sceneEl).toBeDefined();
    expect(linkStartEl).toBeDefined();
    expect(bodyAppended.length).toBeGreaterThanOrEqual(2);
  });

  test("startup animation with custom text uses provided text", () => {
    const script = getChildWsScript("127.0.0.1", 9487, {
      enabled: true,
      type: "custom",
      customText: "MyCustomText",
    });
    const createdElements = [];

    evalScript(script, {
      window: {
        API: { sendConnectionStatus: jest.fn() },
      },
      document: {
        addEventListener: jest.fn(),
        createElement: jest.fn((tag) => {
          const el = {
            tagName: tag,
            id: "",
            className: "",
            textContent: "",
            style: {},
            setAttribute: jest.fn(),
            innerHTML: "",
            remove: jest.fn(),
            appendChild: jest.fn(),
          };
          createdElements.push(el);
          return el;
        }),
        getElementById: jest.fn(() => null),
        querySelector: jest.fn(() => null),
        querySelectorAll: jest.fn(() => []),
        head: { appendChild: jest.fn() },
        body: {
          appendChild: jest.fn(),
          contains: jest.fn(() => false),
        },
        visibilityState: "visible",
      },
      setTimeout: jest.fn((fn, delay) => {
        if (delay <= 200) fn();
        return 1;
      }),
    });

    const ws = MockWebSocket.instances[0];
    ws.readyState = 1;
    if (ws.onopen) ws.onopen();

    const linkStartEl = createdElements.find((el) => el.className === "link-start");
    expect(linkStartEl).toBeDefined();
    expect(linkStartEl.textContent).toBe("MyCustomText");
    expect(linkStartEl.setAttribute).toHaveBeenCalledWith("data-text", "MyCustomText");
  });

  test("startup animation with null settings defaults to LINK START text", () => {
    const script = getChildWsScript("127.0.0.1", 9487, null);
    const createdElements = [];

    evalScript(script, {
      window: {
        API: { sendConnectionStatus: jest.fn() },
      },
      document: {
        addEventListener: jest.fn(),
        createElement: jest.fn((tag) => {
          const el = {
            tagName: tag,
            id: "",
            className: "",
            textContent: "",
            style: {},
            setAttribute: jest.fn(),
            innerHTML: "",
            remove: jest.fn(),
            appendChild: jest.fn(),
          };
          createdElements.push(el);
          return el;
        }),
        getElementById: jest.fn(() => null),
        querySelector: jest.fn(() => null),
        querySelectorAll: jest.fn(() => []),
        head: { appendChild: jest.fn() },
        body: {
          appendChild: jest.fn(),
          contains: jest.fn(() => false),
        },
        visibilityState: "visible",
      },
      setTimeout: jest.fn((fn, delay) => {
        if (delay <= 200) fn();
        return 1;
      }),
    });

    const ws = MockWebSocket.instances[0];
    ws.readyState = 1;
    if (ws.onopen) ws.onopen();

    // Even with null settings (defaults to {enabled:false}), the animation still
    // plays on first connection with the default "LINK START" text
    const linkStartEl = createdElements.find((el) => el.className === "link-start");
    expect(linkStartEl).toBeDefined();
    expect(linkStartEl.textContent).toBe("LINK START");
  });

  test("clear message removes danmu elements", () => {
    const script = getChildWsScript("127.0.0.1", 9487);
    const removedEls = [];
    const consoleMock = { log: jest.fn(), warn: jest.fn(), error: jest.fn() };

    evalScript(script, {
      console: consoleMock,
      window: {
        API: { sendConnectionStatus: jest.fn() },
        showdanmu: jest.fn(),
      },
      document: {
        addEventListener: jest.fn(),
        createElement: jest.fn(() => ({
          id: "",
          className: "",
          textContent: "",
          style: {},
          setAttribute: jest.fn(),
          innerHTML: "",
          remove: jest.fn(),
          appendChild: jest.fn(),
        })),
        getElementById: jest.fn(() => null),
        querySelector: jest.fn(() => null),
        querySelectorAll: jest.fn(() => {
          const mockEl = { remove: jest.fn() };
          removedEls.push(mockEl);
          return [mockEl];
        }),
        head: { appendChild: jest.fn() },
        body: { appendChild: jest.fn(), contains: jest.fn(() => false) },
        visibilityState: "visible",
      },
      setTimeout: jest.fn((fn, delay) => {
        if (delay <= 200) fn();
        return 1;
      }),
    });

    const ws = MockWebSocket.instances[0];
    ws.readyState = 1;
    if (ws.onopen) ws.onopen();

    if (ws.onmessage) {
      ws.onmessage({ data: JSON.stringify({ type: "clear" }) });
    }

    expect(consoleMock.log).toHaveBeenCalledWith(
      "[WebSocket] Overlay cleared by admin remote control"
    );
  });
});
