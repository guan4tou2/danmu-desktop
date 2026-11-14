/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://app.sli.do/event/a2qmjbDYGqei5UxQQpy554/live/questions"}
 */
const fs = require("fs");
const path = require("path");

// S11: only an actual Slido event page reports "watching".
test("an event page announces itself and pings", () => {
  jest.useFakeTimers();
  const sent = [];
  global.chrome = {
    runtime: { getURL: (p) => "chrome-extension://x/" + p, sendMessage: (m) => sent.push(m) },
  };
  window.eval(fs.readFileSync(path.join(__dirname, "../../slido-extension/content.js"), "utf8"));
  expect(sent.map((m) => m.type)).toEqual(["slido_page_open"]);
  jest.advanceTimersByTime(30_000);
  expect(sent.map((m) => m.type)).toEqual(["slido_page_open", "slido_ping"]);
  jest.useRealTimers();
});
