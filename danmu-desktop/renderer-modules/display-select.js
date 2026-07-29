// #screen-select population — extracted from renderer.js so first load and
// hotplug re-emits (update-display-options) share one code path.
//
// The IPC payload is deliberately ignored: populate() re-invokes
// api.getDisplays() so the invoke handler stays the single source of truth
// for the display list shape.
//
// renderer.bundle.js is also loaded by child.html which has no #screen-select
// — everything guards on the element existing.

/**
 * Build option descriptors from the sanitized display list.
 * Label format "主螢幕 · Built-in · 2560×1600" is a contract with
 * client-nav.js, which splits on " · " into chip name | meta.
 */
function buildScreenOptions(displays) {
  let secondaryIdx = 0;
  return displays.map((display, index) => {
    const res = `${display.size.width}×${display.size.height}`;
    let chipName;
    if (display.primary) {
      chipName = "主螢幕";
    } else {
      secondaryIdx++;
      chipName = displays.length <= 2 ? "副螢幕" : `副螢幕 ${secondaryIdx}`;
    }
    const connector =
      display.label || (display.primary ? "Built-in" : `Display ${index + 1}`);
    return {
      value: index,
      displayId: display.id,
      primary: !!display.primary,
      label: `${chipName} · ${connector} · ${res}`,
    };
  });
}

/**
 * Selection restore priority: matching displayId (hotplug-stable — survives
 * index shifts after an unplug) → valid savedIndex (first-populate path) →
 * primary → 0.
 */
function pickSelectionIndex({ options, prevDisplayId, savedIndex }) {
  if (Number.isInteger(prevDisplayId)) {
    const byId = options.findIndex((o) => o.displayId === prevDisplayId);
    if (byId >= 0) return byId;
  }
  if (
    Number.isInteger(savedIndex) &&
    savedIndex >= 0 &&
    savedIndex < options.length
  ) {
    return savedIndex;
  }
  const primaryIndex = options.findIndex((o) => o.primary);
  return primaryIndex >= 0 ? primaryIndex : 0;
}

function initDisplaySelect({ api }) {
  if (!api) return;
  const screenSelect = document.getElementById("screen-select");
  if (!screenSelect) return;

  // Saved index restored by settings hydration before this runs — only
  // meaningful on the first populate; hotplug repopulates track displayId.
  const savedIndex = parseInt(screenSelect.value, 10);
  let firstPopulate = true;

  const syncPreferredDisplayId = () => {
    if (typeof api.setOverlayDisplayId !== "function") return;
    const opt = screenSelect.options[screenSelect.selectedIndex];
    if (!opt) return;
    const displayId = Number(opt.dataset.displayId);
    if (!Number.isInteger(displayId)) return;
    api.setOverlayDisplayId(displayId);
  };

  const populate = () =>
    api.getDisplays().then((displays) => {
      // Read the current selection's displayId BEFORE wiping the options
      const prevOpt = screenSelect.options[screenSelect.selectedIndex];
      const rawPrevId = prevOpt ? Number(prevOpt.dataset.displayId) : NaN;

      const options = buildScreenOptions(displays);
      screenSelect.innerHTML = "";
      options.forEach((o) => {
        const option = document.createElement("option");
        option.value = String(o.value);
        option.dataset.displayId = String(o.displayId);
        option.textContent = o.label;
        screenSelect.appendChild(option);
      });
      if (options.length === 0) return;

      const idx = pickSelectionIndex({
        options,
        prevDisplayId: Number.isInteger(rawPrevId) ? rawPrevId : null,
        savedIndex: firstPopulate ? savedIndex : null,
      });
      firstPopulate = false;
      screenSelect.value = String(idx);
      syncPreferredDisplayId();
      // Bubbling change → client-nav re-renders chip active state. Its
      // MutationObserver already catches the childList swap for the labels.
      screenSelect.dispatchEvent(new Event("change", { bubbles: true }));
    });

  screenSelect.addEventListener("change", syncPreferredDisplayId);

  // Hotplug: main re-emits update-display-options → re-fetch and repopulate.
  if (typeof api.onUpdateDisplayOptions === "function") {
    api.onUpdateDisplayOptions(() => {
      populate();
    });
  }

  return populate();
}

module.exports = { initDisplaySelect, buildScreenOptions, pickSelectionIndex };
