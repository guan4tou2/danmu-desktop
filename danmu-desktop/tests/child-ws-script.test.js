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
const { buildOverlayConfig, resolveViewerHost } = childWsScript;

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
    expect(buildOverlayConfig("192.168.1.100", 9487, null, "").displayHost).toBe(
      "192.168.1.100:9487"
    );
  });

  test("the idle screen shows the connection address unless told otherwise", () => {
    const cfg = buildOverlayConfig("127.0.0.1", 9487, null, "");
    expect(cfg.displayHost).toBe("127.0.0.1:9487");
  });

  test("a viewer address replaces what the idle screen shows, not what the display connects to", () => {
    const cfg = buildOverlayConfig("127.0.0.1", 9487, null, "", "192.168.1.20");
    expect(cfg.displayHost).toBe("192.168.1.20:9487");
    expect(cfg.ip).toBe("127.0.0.1");
    // 443 照樣省略埠號。
    expect(buildOverlayConfig("localhost", 443, null, "", "192.168.1.20").displayHost).toBe(
      "192.168.1.20"
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

// 待機畫面上給觀眾掃的位址。顯示端連本機時不能印 localhost——但也不能印一個
// server 不認的位址（TRUSTED_HOSTS 會回 400）。
describe("resolveViewerHost", () => {
  const os = require("os");
  const dgram = require("dgram");
  const yes = jest.fn(async () => true);
  const no = jest.fn(async () => false);
  const lan = (address) => async () => address;

  afterEach(() => {
    jest.restoreAllMocks();
    yes.mockClear();
    no.mockClear();
  });

  test.each(["127.0.0.1", "localhost", "LOCALHOST", "localhost.", "::1", "[::1]", "0.0.0.0"])(
    "%s becomes the LAN address when the server answers there",
    async (loopback) => {
      const host = await resolveViewerHost(loopback, 9487, {
        lanAddress: lan("192.168.1.20"),
        probe: yes,
      });
      expect(host).toBe("192.168.1.20");
      expect(yes).toHaveBeenCalledWith("192.168.1.20", 9487);
    }
  );

  test("a LAN address the server refuses is not shown", async () => {
    const host = await resolveViewerHost("127.0.0.1", 9487, {
      lanAddress: lan("192.168.1.20"),
      probe: no,
    });
    expect(host).toBe("127.0.0.1");
  });

  test("with no network it stays what was typed, without asking the server", async () => {
    const host = await resolveViewerHost("127.0.0.1", 9487, { lanAddress: lan(null), probe: yes });
    expect(host).toBe("127.0.0.1");
    expect(yes).not.toHaveBeenCalled();
  });

  test.each(["danmu.example.com", "192.168.1.100", "127.example.com"])(
    "a server elsewhere (%s) keeps its own address",
    async (remote) => {
      const lanAddress = jest.fn(lan("192.168.1.20"));
      expect(await resolveViewerHost(remote, 443, { lanAddress, probe: yes })).toBe(remote);
      expect(lanAddress).not.toHaveBeenCalled();
      expect(yes).not.toHaveBeenCalled();
    }
  );

  test("a failing lookup is not an error", async () => {
    const lanAddress = async () => {
      throw new Error("boom");
    };
    expect(await resolveViewerHost("127.0.0.1", 9487, { lanAddress, probe: yes })).toBe("127.0.0.1");
  });

  test("a lookup that never finishes does not hold the display up", async () => {
    const never = () => new Promise(() => {});
    const host = await resolveViewerHost("127.0.0.1", 9487, {
      lanAddress: never,
      probe: yes,
      timeoutMs: 20,
    });
    expect(host).toBe("127.0.0.1");
  });

  describe("finding the LAN address", () => {
    const interfaces = (address) => ({
      lo0: [{ address: "127.0.0.1", family: "IPv4", internal: true }],
      en0: [
        { address: "fe80::1", family: "IPv6", internal: false },
        { address, family: "IPv4", internal: false },
      ],
    });
    const routeVia = (address) =>
      jest.spyOn(dgram, "createSocket").mockReturnValue({
        once: jest.fn(),
        connect: (_port, _host, onConnect) => onConnect(),
        address: () => ({ address }),
        close: jest.fn(),
      });

    test("the default route's address wins over the first interface listed", async () => {
      routeVia("192.168.1.20");
      jest.spyOn(os, "networkInterfaces").mockReturnValue(interfaces("172.17.0.1"));
      expect(await resolveViewerHost("127.0.0.1", 9487, { probe: yes })).toBe("192.168.1.20");
    });

    test("with no default route it falls back to the interface list", async () => {
      jest.spyOn(dgram, "createSocket").mockImplementation(() => {
        throw new Error("no socket");
      });
      jest.spyOn(os, "networkInterfaces").mockReturnValue(interfaces("192.168.1.20"));
      expect(await resolveViewerHost("127.0.0.1", 9487, { probe: yes })).toBe("192.168.1.20");
    });

    test("link-local addresses are not offered", async () => {
      routeVia("169.254.3.4");
      jest.spyOn(os, "networkInterfaces").mockReturnValue(interfaces("169.254.3.4"));
      expect(await resolveViewerHost("127.0.0.1", 9487, { probe: yes })).toBe("127.0.0.1");
      expect(yes).not.toHaveBeenCalled();
    });
  });
});
