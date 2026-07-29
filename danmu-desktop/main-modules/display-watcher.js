// Display hotplug watcher — keeps the renderer's display list and the overlay
// child windows converged with the actual monitor topology.
//   E1: re-emit `update-display-options` to the main window on any change
//   E2: overlay bounds follow resolution / metrics changes of their display
//   E3: overlay on a vanished display migrates to primary (single mode) or is
//       destroyed (sync mode — primary already has its own overlay; migrating
//       would double-stack two overlays on one screen)
//
// The pure layer (buildDisplayOptions / planOverlayReconciliation /
// createTrailingDebounce) has no Electron imports so jest can cover it
// directly; setupDisplayWatcher takes `screen` via injection for the same
// reason.

// `display-metrics-changed` fires in bursts during resolution changes and
// dock/mirroring animations (macOS especially) — coalesce with a trailing
// debounce so we reconcile once per burst.
const DISPLAY_DEBOUNCE_MS = 300;

/**
 * Trailing-edge-only debounce. `flush()` runs a pending call immediately
 * (exists for tests); `cancel()` drops it.
 */
function createTrailingDebounce(fn, ms) {
  let timer = null;
  return {
    trigger() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn();
      }, ms);
    },
    cancel() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    },
    flush() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
        fn();
      }
    },
  };
}

/**
 * Sanitize displays into the exact shape the `getDisplays` invoke handler
 * returns (ipc-handlers.js) — first-load, hotplug re-emit and invoke must
 * share one payload contract.
 */
function buildDisplayOptions(displays, primaryDisplayId) {
  return displays.map((d) => ({
    id: d.id,
    label: d.label || "",
    bounds: d.bounds,
    workArea: d.workArea,
    size: d.size,
    scaleFactor: d.scaleFactor,
    primary: d.id === primaryDisplayId,
  }));
}

function boundsEqual(a, b) {
  return (
    !!a && !!b &&
    a.x === b.x && a.y === b.y &&
    a.width === b.width && a.height === b.height
  );
}

/**
 * Pure reconciliation plan between overlay children and the current display
 * topology. `children` is plain data: [{key, displayId, bounds}].
 * Returns {moves, migrations, destroys, additions}.
 */
function planOverlayReconciliation({ children, displays, primaryDisplayId, syncMultiDisplay }) {
  const plan = { moves: [], migrations: [], destroys: [], additions: [] };
  if (!Array.isArray(displays) || displays.length === 0) return plan;

  const primary =
    displays.find((d) => d && d.id === primaryDisplayId) || displays[0];

  (children || []).forEach((child) => {
    const display = displays.find((d) => d && d.id === child.displayId);
    if (display) {
      // E2 — display still there; refit only when its bounds actually moved
      if (!boundsEqual(child.bounds, display.bounds)) {
        plan.moves.push({ key: child.key, bounds: display.bounds });
      }
    } else if (!syncMultiDisplay) {
      // E3 single mode — land the orphan overlay on the primary display
      plan.migrations.push({
        key: child.key,
        toDisplayId: primary.id,
        bounds: primary.bounds,
      });
    } else {
      // E3 sync mode — primary already has its own overlay
      plan.destroys.push(child.key);
    }
  });

  if (syncMultiDisplay) {
    const covered = new Set((children || []).map((c) => c.displayId));
    displays.forEach((d) => {
      if (d && !covered.has(d.id)) plan.additions.push(d.id);
    });
  }

  return plan;
}

/**
 * Registers screen hotplug listeners and applies reconciliation plans to the
 * real windows. All Electron objects arrive via injection.
 * Returns {dispose, reconcileNow}.
 */
function setupDisplayWatcher({
  screen,
  getMainWindow,
  childWindows,
  getOverlaySession,
  createOverlayForDisplay,
}) {
  function reconcile() {
    let displays;
    let primaryDisplay;
    try {
      displays = screen.getAllDisplays();
      primaryDisplay = screen.getPrimaryDisplay();
    } catch (err) {
      console.warn("[Main] display reconcile: screen query failed:", err && err.message);
      return;
    }
    if (!Array.isArray(displays) || displays.length === 0) return;
    const primaryDisplayId = primaryDisplay && primaryDisplay.id;

    // E1 — refresh the renderer's display list
    const mainWindow = getMainWindow();
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send(
        "update-display-options",
        buildDisplayOptions(displays, primaryDisplayId)
      );
    }

    // E2/E3 — reconcile overlay children (skip destroyed / unstamped windows)
    const session = getOverlaySession();
    const live = childWindows.filter(
      (win) => win && !win.isDestroyed() && win.overlayDisplayId !== undefined
    );
    const children = live.map((win, i) => ({
      key: i,
      displayId: win.overlayDisplayId,
      bounds: win.getBounds(),
    }));
    const plan = planOverlayReconciliation({
      children,
      displays,
      primaryDisplayId,
      syncMultiDisplay: !!(session && session.syncMultiDisplay),
    });

    // Overlay windows are created resizable:false; some platforms clamp
    // setBounds on non-resizable windows, so toggle around every change.
    const applyBounds = (win, bounds) => {
      win.setResizable(true);
      win.setBounds(bounds);
      win.setResizable(false);
    };

    plan.moves.forEach(({ key, bounds }) => {
      const win = live[key];
      if (win && !win.isDestroyed()) applyBounds(win, bounds);
    });
    plan.migrations.forEach(({ key, toDisplayId, bounds }) => {
      const win = live[key];
      if (win && !win.isDestroyed()) {
        applyBounds(win, bounds);
        win.overlayDisplayId = toDisplayId;
      }
    });
    // Copy first — each destroy() fires the `closed` handler which splices
    // childWindows mid-iteration.
    [...plan.destroys].forEach((key) => {
      const win = live[key];
      if (win && !win.isDestroyed()) win.destroy();
    });
    if (session && plan.additions.length && typeof createOverlayForDisplay === "function") {
      plan.additions.forEach((displayId) => {
        const display = displays.find((d) => d && d.id === displayId);
        if (display) createOverlayForDisplay(display, session);
      });
    }

    // E3 toast — main→renderer only; the ipcMain listeners on this channel
    // receive renderer→main traffic, so this cannot loop into tray rebuild.
    if (plan.migrations.length || plan.destroys.length) {
      const mw = getMainWindow();
      if (mw && !mw.isDestroyed()) {
        mw.webContents.send("overlay-connection-status", {
          status: "display-migrated",
          migrated: plan.migrations.length,
          removed: plan.destroys.length,
        });
      }
    }
  }

  const debouncer = createTrailingDebounce(reconcile, DISPLAY_DEBOUNCE_MS);
  const onChange = () => debouncer.trigger();
  screen.on("display-added", onChange);
  screen.on("display-removed", onChange);
  screen.on("display-metrics-changed", onChange);

  return {
    dispose() {
      screen.removeListener("display-added", onChange);
      screen.removeListener("display-removed", onChange);
      screen.removeListener("display-metrics-changed", onChange);
      debouncer.cancel();
    },
    reconcileNow() {
      debouncer.cancel();
      reconcile();
    },
  };
}

module.exports = {
  DISPLAY_DEBOUNCE_MS,
  createTrailingDebounce,
  buildDisplayOptions,
  planOverlayReconciliation,
  setupDisplayWatcher,
};
