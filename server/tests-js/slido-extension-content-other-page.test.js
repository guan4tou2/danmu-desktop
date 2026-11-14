/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://www.slido.com/features-live-qa"}
 */
const fs = require("fs");
const path = require("path");

// S11: a marketing page on the same domain must not turn the card green.
test("a non-event Slido page never announces or pings", () => {
  jest.useFakeTimers();
  const sent = [];
  global.chrome = {
    runtime: { getURL: (p) => "chrome-extension://x/" + p, sendMessage: (m) => sent.push(m) },
  };
  window.eval(fs.readFileSync(path.join(__dirname, "../../slido-extension/content.js"), "utf8"));
  jest.advanceTimersByTime(90_000);
  expect(sent).toEqual([]);
  jest.useRealTimers();
});
