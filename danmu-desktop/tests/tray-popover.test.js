const { buildTrayPopoverSections } = require("../main-modules/tray-popover");

describe("tray-popover", () => {
  test("builds mini snapshot + shortcut hint sections", () => {
    const sections = buildTrayPopoverSections({
      overlayCount: 2,
      receivePaused: true,
      serverText: "● Connected",
      updaterPhase: "downloading",
    });

    const labels = sections.filter((item) => item.label).map((item) => item.label);
    expect(labels).toContain("Live Snapshot");
    expect(labels).toContain("Overlay 視窗：2");
    expect(labels).toContain("接收狀態：暫停");
    expect(labels).toContain("伺服器：● Connected");
    expect(labels).toContain("更新狀態：downloading");
    expect(labels).toContain("快捷鍵");
    expect(labels).toContain("⌘⇧D 切換 overlay 顯示");
    expect(labels).toContain("⌘⇧P 暫停接收");
    expect(labels).toContain("⌘⇧K 清空畫面");
  });
});
