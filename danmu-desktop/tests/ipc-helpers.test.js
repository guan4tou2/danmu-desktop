jest.mock("electron", () => ({
  ipcMain: { on: jest.fn(), handle: jest.fn() },
  screen: { getAllDisplays: jest.fn(() => []) },
}));

const { validateDanmuParams } = require("../main-modules/ipc-handlers");

describe("validateDanmuParams extended validation", () => {
  test("rejects text longer than 500 characters", () => {
    const result = validateDanmuParams({
      text: "a".repeat(501),
      opacity: 100,
      size: 24,
      speed: 5,
      color: "#ffffff",
    });
    expect(result).toBeNull();
  });

  test("rejects non-string text", () => {
    const result = validateDanmuParams({
      text: { malicious: true },
      opacity: 100,
      size: 24,
      speed: 5,
      color: "#ffffff",
    });
    expect(result).toBeNull();
  });

  test("accepts valid text within 500 chars", () => {
    const result = validateDanmuParams({
      text: "Hello World",
      opacity: 100,
      size: 24,
      speed: 5,
      color: "#ffffff",
    });
    expect(result).not.toBeNull();
    expect(result.text).toBe("Hello World");
  });
});
