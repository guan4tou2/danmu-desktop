const {
  formatAppVersion,
  formatElectronVersion,
  initAppShellMeta,
} = require("../renderer-modules/app-shell-meta");

describe("app-shell-meta", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="ver"><span data-client-version>v5.2.0</span></div>
      <div class="meta">
        <span data-client-about-version>v5.2.0</span>
        <span data-client-about-electron-version>Electron 42.1.0</span>
      </div>
    `;
  });

  test("formatAppVersion normalizes raw versions for the client chrome", () => {
    expect(formatAppVersion("5.2.0")).toBe("v5.2.0");
    expect(formatAppVersion("v5.2.0")).toBe("v5.2.0");
    expect(formatAppVersion("")).toBe("");
  });

  test("formatElectronVersion normalizes raw Electron runtime values", () => {
    expect(formatElectronVersion("42.1.0")).toBe("Electron 42.1.0");
    expect(formatElectronVersion("")).toBe("");
  });

  test("hydrates app and Electron versions from the runtime API", async () => {
    await initAppShellMeta({
      api: {
        getAppVersion: jest.fn().mockResolvedValue("5.3.1"),
        getRuntimeVersions: jest
          .fn()
          .mockResolvedValue({ electron: "42.2.1" }),
      },
    });

    expect(document.querySelector("[data-client-version]").textContent).toBe(
      "v5.3.1"
    );
    expect(
      document.querySelector("[data-client-about-version]").textContent
    ).toBe("v5.3.1");
    expect(
      document.querySelector("[data-client-about-electron-version]").textContent
    ).toBe("Electron 42.2.1");
  });

  test("leaves fallback labels untouched when the runtime API is unavailable", async () => {
    await initAppShellMeta({});

    expect(document.querySelector("[data-client-version]").textContent).toBe(
      "v5.2.0"
    );
    expect(
      document.querySelector("[data-client-about-version]").textContent
    ).toBe("v5.2.0");
    expect(
      document.querySelector("[data-client-about-electron-version]").textContent
    ).toBe("Electron 42.1.0");
  });
});
