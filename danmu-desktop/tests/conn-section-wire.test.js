const mockConnTestStart = jest.fn();
const mockConnTestOnChange = jest.fn();
const mockLoadSettings = jest.fn();
const mockSaveSettings = jest.fn();

jest.mock("../renderer-modules/conn-test", () => ({
  createConnTest: () => ({
    getChipLabel: () => "TEST",
    getState: () => "idle",
    onChange: mockConnTestOnChange,
    start: mockConnTestStart,
  }),
}));

jest.mock("../renderer-modules/settings", () => ({
  loadSettings: mockLoadSettings,
  saveSettings: mockSaveSettings,
}));

function buildDOM() {
  document.body.innerHTML = `
    <input id="conn-server-input" value="" />
    <input id="host-input" value="old.example.com" hidden />
    <input id="port-input" value="443" hidden />
    <input id="ws-token-input" value="fresh-token" />
    <div data-client-server-host></div>
    <div data-conn-canonical-preview></div>
    <button data-conn-test-btn type="button">test</button>
    <div data-conn-test-chip></div>
    <div data-conn-display></div>
    <div data-conn-edit hidden></div>
    <button data-client-action="edit-conn" type="button">edit</button>
    <button data-conn-edit-save type="button">save</button>
    <button data-conn-edit-cancel type="button">cancel</button>
    <div data-conn-last-addr></div>
    <div data-conn-last-when data-empty></div>
    <div data-conn-auth-status></div>
    <select id="screen-select">
      <option value="0">Display 1</option>
      <option value="2" selected>Display 3</option>
    </select>
    <input id="sync-multi-display-checkbox" type="checkbox" checked />
  `;
}

describe("initConnSection", () => {
  let savedSettings;

  beforeEach(() => {
    jest.resetModules();
    buildDOM();
    mockConnTestStart.mockClear();
    mockConnTestOnChange.mockClear();
    mockSaveSettings.mockClear();

    savedSettings = {
      host: "old.example.com",
      port: "443",
      displayIndex: 1,
      syncMultiDisplay: false,
      wsToken: "saved-token",
    };

    mockLoadSettings.mockImplementation(() =>
      savedSettings ? { ...savedSettings } : null
    );
    mockSaveSettings.mockImplementation(
      (host, port, displayIndex, syncMultiDisplay, wsToken) => {
        savedSettings = {
          host,
          port,
          displayIndex,
          syncMultiDisplay,
          wsToken,
        };
      }
    );
  });

  test("renders the last-used server card from persisted settings", () => {
    const { initConnSection } = require("../renderer-modules/conn-section-wire");
    initConnSection();

    expect(document.querySelector("[data-conn-last-addr]").textContent).toBe(
      "old.example.com"
    );
    expect(
      document.querySelector("[data-conn-last-when]").hasAttribute("data-empty")
    ).toBe(false);
  });

  test("blur validation marks a valid server input with .input-valid", () => {
    const { initConnSection } = require("../renderer-modules/conn-section-wire");
    const api = initConnSection();

    const serverInput = document.getElementById("conn-server-input");
    serverInput.value = "danmu.example.com:8443";
    api.applyServerValidity();

    expect(serverInput.classList.contains("input-valid")).toBe(true);
    expect(serverInput.classList.contains("input-invalid")).toBe(false);
  });

  test("blur validation marks an invalid host:port with .input-invalid", () => {
    const { initConnSection } = require("../renderer-modules/conn-section-wire");
    const api = initConnSection();

    const serverInput = document.getElementById("conn-server-input");
    serverInput.value = "danmu.example.com:99999"; // port out of range
    api.applyServerValidity();

    expect(serverInput.classList.contains("input-invalid")).toBe(true);
    expect(serverInput.classList.contains("input-valid")).toBe(false);
  });

  test("blur validation leaves an empty server input neutral (no class)", () => {
    const { initConnSection } = require("../renderer-modules/conn-section-wire");
    const api = initConnSection();

    const serverInput = document.getElementById("conn-server-input");
    serverInput.value = "   ";
    api.applyServerValidity();

    expect(serverInput.classList.contains("input-valid")).toBe(false);
    expect(serverInput.classList.contains("input-invalid")).toBe(false);
  });

  test("saving a new server persists it and refreshes the last-used card immediately", () => {
    const { initConnSection } = require("../renderer-modules/conn-section-wire");
    initConnSection();

    const serverInput = document.getElementById("conn-server-input");
    serverInput.value = "127.0.0.1:14443";
    document.querySelector("[data-conn-edit-save]").click();

    expect(mockSaveSettings).toHaveBeenCalledWith(
      "127.0.0.1",
      "14443",
      2,
      true,
      "fresh-token"
    );
    expect(document.getElementById("host-input").value).toBe("127.0.0.1");
    expect(document.getElementById("port-input").value).toBe("14443");
    expect(document.querySelector("[data-conn-last-addr]").textContent).toBe(
      "127.0.0.1:14443"
    );
  });

  test("ESC in edit mode reverts the unsaved value and closes the editor (F10a)", () => {
    const { initConnSection } = require("../renderer-modules/conn-section-wire");
    const api = initConnSection();

    // Enter edit mode, then type an unsaved value.
    api.openEdit();
    const editBlock = document.querySelector("[data-conn-edit]");
    expect(editBlock.hasAttribute("hidden")).toBe(false);

    const serverInput = document.getElementById("conn-server-input");
    serverInput.value = "typed-but-unsaved.example.com:9999";

    // Press ESC inside the edit block — same path as ✕ cancel.
    editBlock.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true })
    );

    // Value reverts to the persisted host (port 443 hidden in display form)
    // and the editor closes.
    expect(serverInput.value).toBe("old.example.com");
    expect(editBlock.hasAttribute("hidden")).toBe(true);
  });

  test("connTest 'testing' state disables the button and shows a 測試中 label (F10b)", () => {
    jest.isolateModules(() => {
      // Override the conn-test mock so it reports the in-flight state and
      // synchronously invokes the onChange render callback.
      jest.doMock("../renderer-modules/conn-test", () => ({
        createConnTest: () => ({
          getChipLabel: () => "TESTING",
          getState: () => "testing",
          onChange: (cb) => cb(),
          start: jest.fn(),
        }),
      }));
      jest.doMock("../renderer-modules/settings", () => ({
        loadSettings: mockLoadSettings,
        saveSettings: mockSaveSettings,
      }));

      // The button carries the connTestBtn i18n label span that the wire swaps.
      const testBtn = document.querySelector("[data-conn-test-btn]");
      testBtn.innerHTML = `<span data-i18n="connTestBtn">⚐ 測試</span>`;

      const i18n = require("../i18n");
      i18n.currentLang = "zh";

      const { initConnSection } = require("../renderer-modules/conn-section-wire");
      initConnSection();

      expect(testBtn.disabled).toBe(true);
      expect(testBtn.getAttribute("aria-busy")).toBe("true");
      expect(testBtn.textContent).toContain("測試中");
    });
  });
});
