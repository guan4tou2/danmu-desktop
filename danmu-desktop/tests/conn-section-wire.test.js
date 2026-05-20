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
});
