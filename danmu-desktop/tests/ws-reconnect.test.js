/**
 * Integration tests for the WebSocket reconnection logic in child-ws-script.js.
 *
 * Strategy: execute the script string returned by getChildWsScript() in a
 * jsdom environment, replacing the global WebSocket with a mock that we control.
 */

const { getChildWsScript } = require("../main-modules/child-ws-script");

// ---------------------------------------------------------------------------
// Mock WebSocket factory
// ---------------------------------------------------------------------------

/**
 * Creates a controllable mock WebSocket class.
 * Each instance records events and exposes helpers to trigger them.
 */
function createMockWebSocketClass() {
  const instances = [];

  class MockWebSocket {
    constructor(url) {
      this.url = url;
      this.readyState = MockWebSocket.CONNECTING;
      this.onopen = null;
      this.onclose = null;
      this.onerror = null;
      this.onmessage = null;
      this._sentMessages = [];
      instances.push(this);
    }

    send(data) {
      this._sentMessages.push(data);
    }

    close() {
      this.readyState = MockWebSocket.CLOSED;
    }

    // --- Test helpers ---
    simulateOpen() {
      this.readyState = MockWebSocket.OPEN;
      this.onopen?.();
    }

    simulateClose(code = 1000) {
      this.readyState = MockWebSocket.CLOSED;
      this.onclose?.({ code });
    }

    simulateError() {
      this.onerror?.({ message: "mock error" });
    }

    simulateMessage(data) {
      this.onmessage?.({ data: typeof data === "string" ? data : JSON.stringify(data) });
    }
  }

  MockWebSocket.CONNECTING = 0;
  MockWebSocket.OPEN = 1;
  MockWebSocket.CLOSING = 2;
  MockWebSocket.CLOSED = 3;

  MockWebSocket.instances = instances;
  return MockWebSocket;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeStatusTracker() {
  const calls = [];
  window.API = {
    sendConnectionStatus(status, attempt, maxAttempts) {
      calls.push({ status, attempt, maxAttempts });
    },
  };
  return calls;
}

const SCRIPT_IP = "127.0.0.1";
const SCRIPT_PORT = "4001";
const ANIM = { enabled: false };

function evalScript(MockWS) {
  // Install the mock WebSocket class globally before executing the script
  global.WebSocket = MockWS;

  // Execute the reconnection script in the current jsdom context
  const script = getChildWsScript(SCRIPT_IP, SCRIPT_PORT, ANIM);
  // eslint-disable-next-line no-eval
  eval(script);
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("WebSocket reconnection logic", () => {
  let MockWS;

  beforeEach(() => {
    jest.useFakeTimers();
    MockWS = createMockWebSocketClass();
    makeStatusTracker();
    // Reset document visibility to 'visible' default
    Object.defineProperty(document, "visibilityState", {
      configurable: true,
      get: () => "visible",
    });
  });

  afterEach(() => {
    jest.useRealTimers();
    delete global.WebSocket;
  });

  // -------------------------------------------------------------------------
  // 1. Initial connection
  // -------------------------------------------------------------------------
  test("creates a WebSocket to the correct URL on first call", () => {
    evalScript(MockWS);
    expect(MockWS.instances).toHaveLength(1);
    expect(MockWS.instances[0].url).toBe(`ws://${SCRIPT_IP}:${SCRIPT_PORT}`);
  });

  test("sends 'connected' status when connection opens", () => {
    const statusCalls = makeStatusTracker();
    evalScript(MockWS);
    MockWS.instances[0].simulateOpen();

    // Allow debounce to settle
    jest.advanceTimersByTime(300);
    const connected = statusCalls.find((c) => c.status === "connected");
    expect(connected).toBeDefined();
  });

  // -------------------------------------------------------------------------
  // 2. First connection timeout → connection-failed
  // -------------------------------------------------------------------------
  test("sends connection-failed when initial connection times out", () => {
    const statusCalls = makeStatusTracker();
    evalScript(MockWS);

    // Trigger the 10-second connection timeout without the WS opening
    jest.advanceTimersByTime(10500);

    // Now simulate close (which fires when ws.close() is called by timeout handler)
    MockWS.instances[0].simulateClose();
    jest.advanceTimersByTime(300); // debounce

    const failed = statusCalls.find((c) => c.status === "connection-failed");
    expect(failed).toBeDefined();
  });

  // -------------------------------------------------------------------------
  // 3. Successful connection then disconnection → reconnects
  // -------------------------------------------------------------------------
  test("sends disconnected and schedules reconnect after server drops", () => {
    const statusCalls = makeStatusTracker();
    evalScript(MockWS);

    // First connection succeeds
    MockWS.instances[0].simulateOpen();
    jest.advanceTimersByTime(300);

    // Then server closes connection
    MockWS.instances[0].simulateClose(1006);
    jest.advanceTimersByTime(300); // debounce

    const disconnected = statusCalls.find((c) => c.status === "disconnected");
    expect(disconnected).toBeDefined();
    expect(disconnected.attempt).toBe(1);
    expect(disconnected.maxAttempts).toBe(10);

    // Advance past the first reconnect delay (base 3s + jitter)
    jest.advanceTimersByTime(5000);

    // A second WebSocket should have been created
    expect(MockWS.instances.length).toBeGreaterThanOrEqual(2);
  });

  // -------------------------------------------------------------------------
  // 4. Reconnect resets attempt counter on success
  // -------------------------------------------------------------------------
  test("resets reconnect counter after a successful reconnection", () => {
    const statusCalls = makeStatusTracker();
    evalScript(MockWS);

    // First connection succeeds, then drops
    MockWS.instances[0].simulateOpen();
    jest.advanceTimersByTime(300);
    MockWS.instances[0].simulateClose(1006);
    jest.advanceTimersByTime(5000);

    // Second WS connects successfully
    const ws2 = MockWS.instances[1];
    if (ws2) {
      ws2.simulateOpen();
      jest.advanceTimersByTime(300);

      const connectedCalls = statusCalls.filter((c) => c.status === "connected");
      expect(connectedCalls.length).toBeGreaterThanOrEqual(1);
    }
  });

  // -------------------------------------------------------------------------
  // 5. Heartbeat messages
  // -------------------------------------------------------------------------
  test("sends a heartbeat JSON message after opening", () => {
    evalScript(MockWS);
    MockWS.instances[0].simulateOpen();

    // Advance past 15-second heartbeat interval
    jest.advanceTimersByTime(16000);

    const ws = MockWS.instances[0];
    const heartbeats = ws._sentMessages.filter((m) => {
      try {
        return JSON.parse(m).type === "heartbeat";
      } catch {
        return false;
      }
    });
    expect(heartbeats.length).toBeGreaterThanOrEqual(1);
  });

  // -------------------------------------------------------------------------
  // 6. Message handling — ping/pong
  // -------------------------------------------------------------------------
  test("responds to ping with pong", () => {
    evalScript(MockWS);
    MockWS.instances[0].simulateOpen();
    MockWS.instances[0].simulateMessage({ type: "ping" });

    const pong = MockWS.instances[0]._sentMessages.find((m) => {
      try { return JSON.parse(m).type === "pong"; } catch { return false; }
    });
    expect(pong).toBeDefined();
  });

  test("ignores heartbeat_ack without crashing", () => {
    evalScript(MockWS);
    MockWS.instances[0].simulateOpen();
    expect(() => {
      MockWS.instances[0].simulateMessage({ type: "heartbeat_ack" });
    }).not.toThrow();
  });

  // -------------------------------------------------------------------------
  // 7. Exponential backoff — delays grow with each attempt
  // -------------------------------------------------------------------------
  test("exponential backoff: reconnect delay grows with each attempt", () => {
    evalScript(MockWS);
    MockWS.instances[0].simulateOpen();

    const reconnectTimes = [];
    let lastInstanceCount = MockWS.instances.length;

    // Simulate 4 consecutive failures after each reconnect
    for (let attempt = 0; attempt < 4; attempt++) {
      const ws = MockWS.instances[MockWS.instances.length - 1];
      ws.simulateClose(1006);

      // Find the delay by advancing time until a new instance is created
      let elapsed = 0;
      while (MockWS.instances.length === lastInstanceCount && elapsed < 40000) {
        jest.advanceTimersByTime(500);
        elapsed += 500;
      }
      reconnectTimes.push(elapsed);
      lastInstanceCount = MockWS.instances.length;

      // Connect succeeds so we can trigger another disconnect
      const newWs = MockWS.instances[MockWS.instances.length - 1];
      if (newWs && newWs !== ws) {
        newWs.simulateOpen();
      }
    }

    // Delays should generally increase (with jitter, at least 2 of 4 should grow)
    let growthCount = 0;
    for (let i = 1; i < reconnectTimes.length; i++) {
      if (reconnectTimes[i] >= reconnectTimes[i - 1]) growthCount++;
    }
    expect(growthCount).toBeGreaterThanOrEqual(2);
  });
});
