jest.mock("electron", () => ({
  app: { getLocale: jest.fn(() => "en-US"), focus: jest.fn() },
  BrowserWindow: jest.fn(),
  screen: { getAllDisplays: jest.fn(() => []), getCursorScreenPoint: jest.fn(() => ({ x: 0, y: 0 })) },
}));

const { pickOverlayDisplay } = require("../main-modules/window-manager");

describe("window-picker", () => {
  const displays = [
    { id: 11, bounds: { x: 0, y: 0, width: 1920, height: 1080 } },
    { id: 22, bounds: { x: 1920, y: 0, width: 2560, height: 1440 } },
  ];

  test("selects preferred display id when available", () => {
    const selected = pickOverlayDisplay(displays, { preferredDisplayId: 22, primaryDisplayId: 11 });
    expect(selected.id).toBe(22);
  });

  test("falls back to primary display when preferred id is missing", () => {
    const selected = pickOverlayDisplay(displays, { preferredDisplayId: 999, primaryDisplayId: 11 });
    expect(selected.id).toBe(11);
  });

  test("falls back to first display when no primary id is provided", () => {
    const selected = pickOverlayDisplay(displays, { preferredDisplayId: 999 });
    expect(selected.id).toBe(11);
  });
});
