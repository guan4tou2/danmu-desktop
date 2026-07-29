/**
 * Tests for renderer-modules/overlay-ws.js — the overlay WS client that
 * replaced main-modules/child-ws-script.js's injected template string.
 *
 * The old suite eval'd the generated script with mocked globals; the module
 * is now called directly with a config object in the jsdom environment.
 * String-generation / injection-escape assertions died with the codegen —
 * URL correctness is covered by the buildWsUrl pure function plus the URL
 * the MockWebSocket actually receives. Behavior tests (heartbeat, status
 * debounce, ping/pong, message handling, startup animation, sound guard)
 * keep their old semantics, only the entry point changed.
 */

const { initOverlayWs, buildWsUrl } = require("../renderer-modules/overlay-ws");

// ---------------------------------------------------------------------------
// Mock WebSocket
// ---------------------------------------------------------------------------
class MockWebSocket {
  constructor(url) {
    this.url = url;
    this.readyState = MockWebSocket.CONNECTING;
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
    this.readyState = MockWebSocket.CLOSED;
  }
  // --- Test helpers ---
  simulateOpen() {
    this.readyState = MockWebSocket.OPEN;
    this.onopen?.();
  }
  simulateClose(code = 1000, reason = "") {
    this.readyState = MockWebSocket.CLOSED;
    this.onclose?.({ code, reason });
  }
  simulateMessage(data) {
    this.onmessage?.({ data: typeof data === "string" ? data : JSON.stringify(data) });
  }
}
MockWebSocket.CONNECTING = 0;
MockWebSocket.OPEN = 1;
MockWebSocket.CLOSED = 3;
MockWebSocket.instances = [];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const BASE_CONFIG = {
  ip: "127.0.0.1",
  port: 9487,
  startupAnimationSettings: { enabled: false },
  wsAuthToken: "",
  displayHost: "127.0.0.1:9487",
  qrSvg: "",
};

function startClient(overrides = {}) {
  initOverlayWs({ ...BASE_CONFIG, ...overrides });
  return MockWebSocket.instances[MockWebSocket.instances.length - 1];
}

/** Open the socket and flush the 200ms status debounce. */
function openAndSettle(ws) {
  ws.simulateOpen();
  jest.advanceTimersByTime(300);
}

beforeEach(() => {
  jest.useFakeTimers();
  MockWebSocket.instances = [];
  global.WebSocket = MockWebSocket;
  document.body.innerHTML = "";
  document.head.querySelectorAll("style").forEach((el) => el.remove());
  window.API = { sendConnectionStatus: jest.fn() };
  jest.spyOn(console, "log").mockImplementation();
  jest.spyOn(console, "warn").mockImplementation();
  jest.spyOn(console, "error").mockImplementation();
});

afterEach(() => {
  jest.useRealTimers();
  jest.restoreAllMocks();
  delete global.WebSocket;
  delete global.Audio;
  delete window.API;
  delete window.showdanmu;
  delete window.__konamiTrigger;
});

// ===========================================================================
// buildWsUrl — pure URL shape
// ===========================================================================

describe("buildWsUrl", () => {
  test("builds wss URL with /ws path", () => {
    expect(buildWsUrl("192.168.1.100", 8080, "")).toBe("wss://192.168.1.100:8080/ws");
  });

  test("appends URL-encoded token as query parameter", () => {
    expect(buildWsUrl("localhost", 3000, "my token+")).toBe(
      "wss://localhost:3000/ws?token=my%20token%2B"
    );
  });

  test("omits token query when token is empty", () => {
    expect(buildWsUrl("localhost", 3000, "")).toBe("wss://localhost:3000/ws");
  });
});

// ===========================================================================
// initOverlayWs — connection bootstrap
// ===========================================================================

describe("initOverlayWs connection bootstrap", () => {
  test("creates a WebSocket to the configured host/port", () => {
    const ws = startClient();
    expect(MockWebSocket.instances).toHaveLength(1);
    expect(ws.url).toBe("wss://127.0.0.1:9487/ws");
  });

  test("coerces a string port to a number in the URL", () => {
    const ws = startClient({ port: "9999" });
    expect(ws.url).toBe("wss://127.0.0.1:9999/ws");
  });

  test("URL includes token when provided", () => {
    const ws = startClient({ wsAuthToken: "abc123" });
    expect(ws.url).toBe("wss://127.0.0.1:9487/ws?token=abc123");
  });

  test("sends 'connected' status through window.API after open (debounced)", () => {
    const ws = startClient();
    openAndSettle(ws);
    expect(window.API.sendConnectionStatus).toHaveBeenCalledWith(
      "connected",
      undefined,
      undefined
    );
  });

  test("1008 close stops reconnection and reports connection-failed", () => {
    const ws = startClient();
    openAndSettle(ws);
    window.API.sendConnectionStatus.mockClear();

    ws.simulateClose(1008, "policy violation");
    jest.advanceTimersByTime(300); // debounce
    expect(window.API.sendConnectionStatus).toHaveBeenCalledWith(
      "connection-failed",
      undefined,
      undefined
    );

    // No reconnect ever gets scheduled — still just the one socket.
    jest.advanceTimersByTime(60000);
    expect(MockWebSocket.instances).toHaveLength(1);
  });
});

// ===========================================================================
// Heartbeat + control messages
// ===========================================================================

describe("heartbeat and control messages", () => {
  test("sends heartbeat JSON every 15s while open", () => {
    const ws = startClient();
    openAndSettle(ws);
    jest.advanceTimersByTime(16000);
    const heartbeats = ws.sentMessages.filter((m) => {
      try { return JSON.parse(m).type === "heartbeat"; } catch { return false; }
    });
    expect(heartbeats.length).toBeGreaterThanOrEqual(1);
    expect(JSON.parse(heartbeats[0]).timestamp).toBeDefined();
  });

  test("responds to ping with pong", () => {
    const ws = startClient();
    openAndSettle(ws);
    ws.simulateMessage({ type: "ping" });
    const pongs = ws.sentMessages.filter((m) => {
      try { return JSON.parse(m).type === "pong"; } catch { return false; }
    });
    expect(pongs).toHaveLength(1);
  });

  test("handles heartbeat_ack string without crashing", () => {
    const ws = startClient();
    openAndSettle(ws);
    expect(() => ws.simulateMessage("heartbeat_ack")).not.toThrow();
    expect(console.log).toHaveBeenCalledWith("Received heartbeat response");
  });

  test("handles 'connection' string message", () => {
    const ws = startClient();
    openAndSettle(ws);
    ws.simulateMessage("connection");
    expect(console.log).toHaveBeenCalledWith("connection");
  });

  test("settings_changed messages (valid or malformed) never throw", () => {
    const ws = startClient();
    openAndSettle(ws);
    window.showdanmu = jest.fn();
    expect(() => {
      ws.simulateMessage({ type: "settings_changed", settings: { Speed: [true, 1, 10, 5] } });
      ws.simulateMessage({ type: "settings_changed" });
      ws.simulateMessage({ type: "settings_changed", settings: null });
      ws.simulateMessage({ type: "settings_changed", settings: "invalid" });
    }).not.toThrow();
    const processingErrors = console.error.mock.calls.filter(
      (c) => c[0] && String(c[0]).includes("Error processing message")
    );
    expect(processingErrors).toHaveLength(0);
  });
});

// ===========================================================================
// Danmu dispatch + admin messages
// ===========================================================================

describe("danmu dispatch and admin messages", () => {
  test("danmu message calls window.showdanmu with normalized args", () => {
    window.showdanmu = jest.fn();
    const ws = startClient();
    openAndSettle(ws);
    ws.simulateMessage({ text: "hello", color: "ffffff", opacity: 100, size: 50, speed: "5" });
    expect(window.showdanmu).toHaveBeenCalledTimes(1);
    const args = window.showdanmu.mock.calls[0];
    expect(args[0]).toBe("hello");
    expect(args[2]).toBe("#ffffff");
    expect(args[4]).toBe(5); // parseInt'd speed
  });

  test("retries until window.showdanmu appears (bundle-load safety net)", () => {
    const ws = startClient();
    openAndSettle(ws);
    ws.simulateMessage({ text: "late", color: "ffffff", opacity: 100, size: 50, speed: 5 });
    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining("window.showdanmu not ready")
    );
    window.showdanmu = jest.fn();
    jest.advanceTimersByTime(150);
    expect(window.showdanmu).toHaveBeenCalledTimes(1);
  });

  test("effectCss keyframes are injected once under a dme- style id", () => {
    window.showdanmu = jest.fn();
    const ws = startClient();
    openAndSettle(ws);
    const msg = {
      text: "x", color: "ffffff", opacity: 100, size: 50, speed: 5,
      effectCss: {
        keyframes: "@keyframes test-spin { to { transform: rotate(360deg); } }",
        animation: "test-spin 1s linear infinite",
        styleId: "test-spin",
      },
    };
    ws.simulateMessage(msg);
    ws.simulateMessage(msg);
    const styles = document.querySelectorAll("#dme-test-spin");
    expect(styles).toHaveLength(1);
    expect(styles[0].textContent).toContain("test-spin");
  });

  test("clear message removes rendered danmu elements", () => {
    const ws = startClient();
    openAndSettle(ws);
    const el = document.createElement("h1");
    el.className = "danmu";
    document.body.appendChild(el);
    ws.simulateMessage({ type: "clear" });
    expect(document.querySelector("h1.danmu")).toBeNull();
    expect(console.log).toHaveBeenCalledWith(
      "[WebSocket] Overlay cleared by admin remote control"
    );
  });

  test("konami message prefers window.__konamiTrigger when defined", () => {
    window.__konamiTrigger = jest.fn();
    const ws = startClient();
    openAndSettle(ws);
    ws.simulateMessage({ type: "konami" });
    expect(window.__konamiTrigger).toHaveBeenCalledTimes(1);
  });

  test("konami message without __konamiTrigger falls back without throwing", () => {
    const ws = startClient();
    openAndSettle(ws);
    const el = document.createElement("h1");
    el.className = "danmu";
    document.body.appendChild(el);
    expect(() => ws.simulateMessage({ type: "konami" })).not.toThrow();
  });
});

// ===========================================================================
// Startup animation
// ===========================================================================

describe("startup animation", () => {
  test("plays LINK START scene 800ms after first open when enabled", () => {
    const ws = startClient({ startupAnimationSettings: { enabled: true } });
    openAndSettle(ws);
    jest.advanceTimersByTime(900);
    expect(document.querySelector(".scene")).not.toBeNull();
    const linkStart = document.querySelector(".link-start");
    expect(linkStart).not.toBeNull();
    expect(linkStart.textContent).toBe("LINK START");
  });

  test("uses custom text when type is custom", () => {
    const ws = startClient({
      startupAnimationSettings: { enabled: true, type: "custom", customText: "MyCustomText" },
    });
    openAndSettle(ws);
    jest.advanceTimersByTime(900);
    const linkStart = document.querySelector(".link-start");
    expect(linkStart.textContent).toBe("MyCustomText");
    expect(linkStart.getAttribute("data-text")).toBe("MyCustomText");
  });

  test("does not play when settings are null (defaults to disabled)", () => {
    const ws = startClient({ startupAnimationSettings: null });
    openAndSettle(ws);
    jest.advanceTimersByTime(900);
    expect(document.querySelector(".link-start")).toBeNull();
  });

  test("injected scene style never references Google Fonts (offline vendoring)", () => {
    const ws = startClient({ startupAnimationSettings: { enabled: true } });
    openAndSettle(ws);
    jest.advanceTimersByTime(900);
    const style = document.getElementById("link-start-style");
    expect(style).not.toBeNull();
    expect(style.textContent).not.toContain("fonts.googleapis.com");
    expect(style.textContent).not.toContain("fonts.gstatic.com");
  });
});

// ===========================================================================
// Sound playback guard (server-origin allowlist + relative-URL absolutize)
// ===========================================================================

describe("sound playback guard", () => {
  function playSound(serverIp, serverPort, soundUrl) {
    class MockAudio {
      constructor(url) {
        this.url = url;
        this.volume = 1;
        MockAudio.instances.push(this);
      }
      play() {
        return Promise.resolve();
      }
    }
    MockAudio.instances = [];
    global.Audio = MockAudio;

    window.showdanmu = jest.fn();
    const ws = startClient({ ip: serverIp, port: serverPort });
    openAndSettle(ws);
    ws.simulateMessage({
      text: "hello", color: "ffffff", opacity: 100, size: 50, speed: 5,
      sound: { url: soundUrl, volume: 0.5 },
    });
    return MockAudio.instances;
  }

  test("relative sound URL is absolutized to the connected server origin", () => {
    const audios = playSound("127.0.0.1", 9487, "/static/sounds/ding.mp3");
    expect(audios).toHaveLength(1);
    expect(audios[0].url).toBe("https://127.0.0.1:9487/static/sounds/ding.mp3");
    expect(audios[0].volume).toBe(0.5);
  });

  test("absolute sound URL from the connected (remote) server is allowed", () => {
    const audios = playSound("192.168.1.50", 9487, "https://192.168.1.50:9487/static/sounds/x.mp3");
    expect(audios).toHaveLength(1);
  });

  test("sound URL on a foreign host is blocked", () => {
    const audios = playSound("192.168.1.50", 9487, "https://evil.example/x.mp3");
    expect(audios).toHaveLength(0);
    expect(console.warn).toHaveBeenCalledWith(
      "[WebSocket] Blocked non-local sound URL:",
      expect.stringContaining("evil.example")
    );
  });

  test("data:audio and blob: sound URLs stay allowed", () => {
    const dataUrl = "data:audio/mpeg;base64,AAAA";
    expect(playSound("127.0.0.1", 9487, dataUrl)[0].url).toBe(dataUrl);
    const blobUrl = "blob:https://127.0.0.1:9487/some-uuid";
    expect(playSound("127.0.0.1", 9487, blobUrl)[0].url).toBe(blobUrl);
  });
});

// ===========================================================================
// Idle screen hydration
// ===========================================================================

describe("idle screen hydration", () => {
  test("hydrates subtitle, URL and QR container from config", () => {
    document.body.innerHTML = `
      <div id="overlay-idle">
        <p class="overlay-idle-subtitle">掃描 QR code 或打開 — — 開始送彈幕</p>
        <div class="overlay-idle-qr"></div>
        <div class="overlay-idle-url">—</div>
      </div>
    `;
    startClient({
      displayHost: "danmu.example.com",
      qrSvg: '<svg viewBox="0 0 10 10"></svg>',
    });
    expect(document.querySelector(".overlay-idle-subtitle").textContent).toBe(
      "掃描 QR code 或打開 danmu.example.com — 開始送彈幕"
    );
    expect(document.querySelector(".overlay-idle-url").textContent).toBe("DANMU.EXAMPLE.COM");
    expect(document.querySelector(".overlay-idle-qr svg")).not.toBeNull();
  });
});

// ===========================================================================
// overlay-clear IPC subscription
// ===========================================================================

describe("overlay-clear subscription", () => {
  test("subscribes via window.API.onOverlayClear and removes danmu nodes", () => {
    let clearCb = null;
    window.API.onOverlayClear = jest.fn((cb) => { clearCb = cb; });
    startClient();
    expect(window.API.onOverlayClear).toHaveBeenCalledTimes(1);

    const el = document.createElement("div");
    el.className = "danmu-wrapper";
    document.body.appendChild(el);
    clearCb();
    expect(document.querySelector(".danmu-wrapper")).toBeNull();
  });
});
