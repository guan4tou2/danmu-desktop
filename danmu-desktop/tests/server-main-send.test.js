const { describe, test, expect, beforeEach, jest } = require("@jest/globals");

function flush() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

describe("web client send behavior", () => {
  beforeEach(() => {
    jest.resetModules();
    // Mock ServerI18n (used by server's main.js)
    window.ServerI18n = {
      currentLang: "en",
      t: (key) => key,
      init: () => {},
      setLanguage: () => {},
      updateUI: () => {},
    };
    document.body.innerHTML = `
      <div id="vanta-bg"></div>
      <textarea id="danmuText"></textarea>
      <div id="charCount"></div>
      <div id="previewText"></div>
      <button id="btnSend"></button>
      <span id="btnSendText"></span>
      <span id="btnSendIcon"></span>
      <span id="btnSendSpinner" class="hidden"></span>
      <input id="colorInput" value="#ffffff" />
      <span id="colorValue"></span>
      <div id="colorGradientPreview"></div>
      <input id="sizeInput" value="32" />
      <span id="sizeValue"></span>
      <input id="opacityRange" value="80" />
      <span id="opacityValue"></span>
      <input id="speedRange" value="5" />
      <span id="speedValue"></span>
      <div id="userFontSelectControl" style="display:none"></div>
      <select id="userFontSelect"></select>
      <div id="effectButtons"></div>
      <div id="effectParamsPanel"></div>
      <div id="toast-container"></div>
      <div id="blacklistWarningModal"></div>
      <div id="blacklistWarningMessage"></div>
      <button id="blacklistWarningOkBtn"></button>
      <div id="connectionStatus"><span class="connection-dot"></span></div>
      <div id="connectionLabel"></div>
    `;

    global.VANTA = { NET: jest.fn() };
    global.showToast = jest.fn();

    class MockWebSocket {
      constructor() {
        this.onopen = null;
        this.onmessage = null;
        this.onclose = null;
        this.onerror = null;
      }
      close() {}
    }
    global.WebSocket = MockWebSocket;

    global.fetch = jest.fn(async (url) => {
      if (url === "/effects") {
        return { ok: true, json: async () => ({ effects: [] }) };
      }
      if (url === "/get_settings") {
        return {
          ok: true,
          json: async () => ({ FontFamily: [false], Effects: [true] }),
        };
      }
      if (url === "/fonts") {
        return { ok: true, json: async () => ({ fonts: [], tokenTTL: 3600 }) };
      }
      if (url === "/check_blacklist") {
        return { ok: true, json: async () => ({ blocked: false }) };
      }
      if (url === "/fire") {
        return { ok: false, json: async () => ({ error: "Failed" }) };
      }
      return { ok: false, json: async () => ({}) };
    });

    require("../../server/static/js/main.js");
    document.dispatchEvent(new Event("DOMContentLoaded"));
  });

  test("keeps text when /fire request fails", async () => {
    const input = document.getElementById("danmuText");
    const sendBtn = document.getElementById("btnSend");

    input.value = "do not clear me";
    sendBtn.click();

    await flush();
    await flush();

    expect(input.value).toBe("do not clear me");
  });
});
