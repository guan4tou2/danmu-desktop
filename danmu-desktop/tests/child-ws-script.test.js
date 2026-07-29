/**
 * @jest-environment node
 *
 * Main-process module — tested in the node environment because qrcode needs
 * TextEncoder, which the default jsdom test environment doesn't provide
 * (matching how it actually runs: in Electron's main process, not a page).
 *
 * Tests for main-modules/child-ws-script.js — since the L2 de-injection this
 * module only builds the overlay bootstrap config (the WS client itself is
 * renderer-modules/overlay-ws.js, covered by overlay-ws.test.js /
 * ws-reconnect.test.js). The old getChildWsScript string-generation and
 * injection-escape tests died with the codegen: with no string interpolation
 * there is no script-injection surface left to escape.
 */

const childWsScript = require("../main-modules/child-ws-script");
const { buildOverlayConfig } = childWsScript;

describe("buildOverlayConfig", () => {
  test("returns the full config shape with coerced types", () => {
    const cfg = buildOverlayConfig("192.168.1.100", "8080", { enabled: true }, "tok");
    expect(cfg).toEqual({
      ip: "192.168.1.100",
      port: 8080,
      startupAnimationSettings: { enabled: true },
      wsAuthToken: "tok",
      displayHost: "192.168.1.100:8080",
      qrSvg: expect.any(String),
    });
  });

  test("displayHost drops the port for 443 (default https)", () => {
    expect(buildOverlayConfig("danmu.example.com", 443, null, "").displayHost).toBe(
      "danmu.example.com"
    );
    expect(buildOverlayConfig("danmu.example.com", "443", null, "").displayHost).toBe(
      "danmu.example.com"
    );
  });

  test("displayHost keeps host:port for non-443 ports", () => {
    expect(buildOverlayConfig("127.0.0.1", 9487, null, "").displayHost).toBe(
      "127.0.0.1:9487"
    );
  });

  test("defaults startup animation to disabled when null", () => {
    expect(buildOverlayConfig("localhost", 3000, null).startupAnimationSettings).toEqual({
      enabled: false,
    });
  });

  test("defaults wsAuthToken to empty string", () => {
    expect(buildOverlayConfig("localhost", 3000, null).wsAuthToken).toBe("");
    expect(buildOverlayConfig("localhost", 3000, null, undefined).wsAuthToken).toBe("");
  });

  test("qrSvg is a renderable SVG for the viewer URL", () => {
    const cfg = buildOverlayConfig("127.0.0.1", 9487, null, "");
    expect(cfg.qrSvg).toContain("<svg");
    expect(cfg.qrSvg).toContain("viewBox");
    expect(cfg.qrSvg.length).toBeGreaterThan(100);
  });

  test("module no longer exports the retired getChildWsScript codegen", () => {
    expect(childWsScript.getChildWsScript).toBeUndefined();
  });
});
