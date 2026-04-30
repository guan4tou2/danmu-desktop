/**
 * Build read-only tray popover sections.
 *
 * Keeps menu composition deterministic and testable.
 */

function buildTrayPopoverSections(state) {
  const overlayCount = Number(state && state.overlayCount) || 0;
  const receivePaused = !!(state && state.receivePaused);
  const serverText = (state && state.serverText) || "⊘ Disconnected";
  const updaterPhase = (state && state.updaterPhase) || "idle";

  const sections = [
    { label: "Live Snapshot", enabled: false },
    { label: `Overlay 視窗：${overlayCount}`, enabled: false },
    { label: `接收狀態：${receivePaused ? "暫停" : "即時"}`, enabled: false },
    { label: `伺服器：${serverText}`, enabled: false },
  ];

  if (updaterPhase && updaterPhase !== "idle") {
    sections.push({ label: `更新狀態：${updaterPhase}`, enabled: false });
  }

  sections.push({ type: "separator" });
  sections.push({ label: "快捷鍵", enabled: false });
  sections.push({ label: "⌘⇧D 切換 overlay 顯示", enabled: false });
  sections.push({ label: "⌘⇧P 暫停接收", enabled: false });
  sections.push({ label: "⌘⇧K 清空畫面", enabled: false });
  sections.push({ type: "separator" });
  return sections;
}

module.exports = {
  buildTrayPopoverSections,
};
