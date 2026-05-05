const { buildTrayPopoverSections } = require("../main-modules/tray-popover");

describe("tray-popover", () => {
  test("builds read-only status snapshot without dead shortcut hints", () => {
    const sections = buildTrayPopoverSections({
      overlayCount: 2,
      serverText: "● Connected",
      updaterPhase: "downloading",
    });

    const labels = sections.filter((item) => item.label).map((item) => item.label);
    expect(labels).toContain("Live Snapshot");
    expect(labels).toContain("Overlay 視窗：2");
    expect(labels).toContain("伺服器：● Connected");
    expect(labels).toContain("更新狀態：downloading");
    expect(labels).not.toContain("快捷鍵");
    expect(labels).not.toContain("⌘⇧P 暫停接收");
    expect(labels).not.toContain("⌘⇧K 清空畫面");
  });
});
