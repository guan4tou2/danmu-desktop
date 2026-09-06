const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

// 設計稿 04「桌面端示範」：三分區側欄 800×900 → 單頁 560×440。
// 側欄與 data-section 分頁整組退休；版面剩下標題列、主卡、設定群組，
// 連線與關於收進 ⚙ 面板。
test("main control page is the design-04 single-page shell", () => {
  const htmlPath = path.join(__dirname, "..", "index.html");
  const html = fs.readFileSync(htmlPath, "utf8");

  expect(html).toContain("client-titlebar");
  expect(html).toContain("client-shell");
  expect(html).toContain("client-main");
  // 主卡是唯一的狀態顯示與主要動作所在
  expect(html).toContain("data-client-main-card");
  expect(html).toContain("data-client-overlay-button");
  expect(html).toContain("data-client-overlay-status");
  // ⚙ 設定面板取代原本的「連線」與「關於」分頁
  expect(html).toContain('id="client-settings"');
  expect(html).toContain('id="client-settings-btn"');

  // 退休的結構不該再出現
  expect(html).not.toContain("client-sidebar");
  expect(html).not.toContain('data-section="overlay"');
  expect(html).not.toContain('data-section="conn"');
  expect(html).not.toContain('data-section="about"');
});
