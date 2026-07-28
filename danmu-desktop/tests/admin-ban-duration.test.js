const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

// 封禁時長的標籤直接取自 chip 上的文字，不從秒數反推。
//
// 反推過一次就出過錯：`seconds >= 604800` 那條除以 604800，於是 7 天算成
// 「1 天」，跟 24 小時選項的提示長得一模一樣 —— 管理員按了 7 天，畫面告訴他
// 封了 1 天。這裡把「不要再引入這種推算」釘住。

const SRC = fs.readFileSync(
  path.join(__dirname, "..", "..", "server", "static", "js", "admin-message-drawer.js"),
  "utf8"
);

test("duration chips carry both the seconds and the label", () => {
  // 三個時長 + 永久，值必須對得上秒數。
  const expected = [
    ['data-ban-duration="3600"', "1 小時"],
    ['data-ban-duration="86400"', "24 小時"],
    ['data-ban-duration="604800"', "7 天"],
    ['data-ban-duration="0"', "永久"],
  ];
  for (const [attr, label] of expected) {
    const row = SRC.split("\n").find((l) => l.includes(attr));
    // jest 的 expect 不吃第二個「訊息」參數（那是 chai 的寫法），所以自己丟。
    if (!row) throw new Error(`找不到帶 ${attr} 的 chip`);
    expect(row).toContain(label);
  }
});

test("chips are selectable, not disabled", () => {
  // 只看模板裡的 chip 本身 —— data-ban-duration 也出現在 closest() 選擇器裡。
  const chipLines = SRC.split("\n").filter(
    (l) => l.includes("data-ban-duration=") && l.includes("admin-bancfm-dchip")
  );
  expect(chipLines.length).toBe(4);
  for (const line of chipLines) {
    expect(line).not.toContain("is-disabled");
    expect(line).toContain('role="button"');
  }
});

test("no seconds-to-label arithmetic is reintroduced", () => {
  // 604800 只該以「chip 的值」出現，不該出現在除法裡。
  expect(SRC).not.toMatch(/\/\s*604800/);
  expect(SRC).not.toContain("_durationLabel");
});

test("timed bans go to /admin/modbans, permanent to /admin/live/block", () => {
  expect(SRC).toContain("/admin/modbans");
  expect(SRC).toContain("/admin/live/block");
  expect(SRC).toContain("duration_s");
});
