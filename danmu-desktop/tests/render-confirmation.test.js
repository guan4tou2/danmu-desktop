const { confirmRendered, waitForFont } = require("../renderer-modules/render-confirmation");

let element;
let animation;

beforeEach(() => {
  jest.useFakeTimers();
  document.body.innerHTML = '<div id="rendered" style="opacity: 1; visibility: visible"><h1 class="danmu">test</h1></div>';
  element = document.getElementById("rendered");
  element.getBoundingClientRect = () => ({ width: 100, height: 40, left: 20, right: 120, top: 20, bottom: 60 });
  Object.defineProperty(document, "visibilityState", { configurable: true, value: "visible" });
  animation = { playState: "running", currentTime: 100 };
});

afterEach(() => {
  // Flush the bounded observer so cases do not share pending confirmations.
  jest.advanceTimersByTime(16000);
  jest.useRealTimers();
});

test("only confirms after two visible animated observations", async () => {
  let resolved = false;
  const result = confirmRendered(element, animation).then(value => { resolved = true; return value; });
  jest.advanceTimersByTime(50);
  await Promise.resolve();
  expect(resolved).toBe(false);
  jest.advanceTimersByTime(50);
  await expect(result).resolves.toBe(true);
});

test.each(["hidden", "offscreen", "transparent", "not-started", "removed", "failed-image"])("does not confirm %s", async condition => {
  if (condition === "hidden") Object.defineProperty(document, "visibilityState", { configurable: true, value: "hidden" });
  if (condition === "offscreen") element.getBoundingClientRect = () => ({ width: 100, height: 40, left: 2000, right: 2100, top: 20, bottom: 60 });
  if (condition === "transparent") element.style.opacity = "0";
  if (condition === "not-started") animation.currentTime = 0;
  if (condition === "removed") element.remove();
  if (condition === "failed-image") element.innerHTML = '<img src="broken.png">';
  const result = confirmRendered(element, animation);
  jest.advanceTimersByTime(15000);
  await expect(result).resolves.toBe(false);
});

test("waits for a loaded image and visible window", async () => {
  const img = document.createElement("img");
  Object.defineProperty(img, "complete", { configurable: true, value: false });
  Object.defineProperty(img, "naturalWidth", { configurable: true, value: 0 });
  element.appendChild(img);
  let settled = false;
  const result = confirmRendered(element, animation).then(value => { settled = true; return value; });
  jest.advanceTimersByTime(100);
  await Promise.resolve();
  expect(settled).toBe(false);
  Object.defineProperty(img, "complete", { configurable: true, value: true });
  Object.defineProperty(img, "naturalWidth", { configurable: true, value: 100 });
  jest.advanceTimersByTime(100);
  await expect(result).resolves.toBe(true);
});

test("has a bounded pending observer and times out stalled fonts", async () => {
  Object.defineProperty(document, "visibilityState", { configurable: true, value: "hidden" });
  for (let index = 0; index < 500; index++) confirmRendered(element, animation);
  await expect(confirmRendered(element, animation)).resolves.toBe(false);
  const font = waitForFont(new Promise(() => {}));
  const rejected = expect(font).rejects.toThrow("Font load timed out");
  jest.advanceTimersByTime(5000);
  await rejected;
});
