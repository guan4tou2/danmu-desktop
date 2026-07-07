// Window Picker — visual source selector using desktopCapturer (#117)

let _sources = [];
let _activeTab = "screen";
// Bound ESC handler, attached to document only while the picker is open so we
// don't leave a global listener running (A7).
let _escHandler = null;

function initWindowPicker(api) {
  const btn = document.getElementById("openWindowPicker");
  const backdrop = document.getElementById("wpBackdrop");
  const closeBtn = document.getElementById("wpClose");
  const grid = document.getElementById("wpGrid");
  const tabs = document.querySelectorAll("[data-wp-tab]");

  if (!btn || !backdrop || !grid) return;

  btn.addEventListener("click", () => openPicker(api, backdrop, grid));

  closeBtn.addEventListener("click", () => closePicker(backdrop));
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closePicker(backdrop);
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      _activeTab = tab.dataset.wpTab;
      tabs.forEach((t) => t.classList.toggle("active", t === tab));
      renderGrid(grid, api);
    });
  });
}

async function openPicker(api, backdrop, grid) {
  backdrop.hidden = false;
  grid.innerHTML = '<div class="wp-loading">載入中…</div>';

  // Attach an ESC-to-close handler for the duration the modal is open.
  if (!_escHandler) {
    _escHandler = (e) => {
      if (e.key === "Escape") closePicker(backdrop);
    };
    document.addEventListener("keydown", _escHandler);
  }

  try {
    _sources = await api.getCapturerSources();
  } catch (_) {
    _sources = [];
  }

  if (!_sources.length) {
    grid.innerHTML = '<div class="wp-empty">無法取得畫面來源。macOS 需要「螢幕錄製」權限。</div>';
    return;
  }

  renderGrid(grid, api);
}

function closePicker(backdrop) {
  backdrop.hidden = true;
  if (_escHandler) {
    document.removeEventListener("keydown", _escHandler);
    _escHandler = null;
  }
}

function renderGrid(grid, api) {
  const filtered = _sources.filter((s) =>
    _activeTab === "screen" ? s.isScreen : !s.isScreen
  );

  if (!filtered.length) {
    grid.innerHTML = _activeTab === "screen"
      ? '<div class="wp-empty">未偵測到螢幕</div>'
      : '<div class="wp-empty">未偵測到視窗</div>';
    return;
  }

  grid.innerHTML = "";
  filtered.forEach((source) => {
    const card = document.createElement("button");
    card.className = "wp-card";
    card.type = "button";
    card.title = source.name;

    const thumb = document.createElement("img");
    thumb.className = "wp-thumb";
    thumb.src = source.thumbnail || "";
    thumb.alt = source.name;
    thumb.draggable = false;

    const label = document.createElement("div");
    label.className = "wp-card-label";

    if (source.appIcon && !source.isScreen) {
      const icon = document.createElement("img");
      icon.className = "wp-card-icon";
      icon.src = source.appIcon;
      icon.width = 16;
      icon.height = 16;
      icon.alt = "";
      label.appendChild(icon);
    }

    const nameSpan = document.createElement("span");
    nameSpan.className = "wp-card-name";
    nameSpan.textContent = source.name;
    label.appendChild(nameSpan);

    card.appendChild(thumb);
    card.appendChild(label);

    card.addEventListener("click", () => {
      selectSource(source, api);
    });

    grid.appendChild(card);
  });
}

function selectSource(source, api) {
  // Find matching display and set it as preferred overlay display.
  // Screen sources have displayId directly; window sources may have
  // a displayId indicating which screen they're on.
  if (source.displayId) {
    const displayIdNum = parseInt(source.displayId, 10);
    if (!isNaN(displayIdNum)) {
      api.setOverlayDisplayId(displayIdNum);

      // Also update the screen-select dropdown to match
      const select = document.getElementById("screen-select");
      if (select) {
        for (const opt of select.options) {
          if (String(opt.dataset.displayId) === String(displayIdNum)) {
            select.selectedIndex = opt.index;
            select.dispatchEvent(new Event("change"));
            break;
          }
        }
      }
    }
  }

  // Update hint with selected source name
  const hint = document.getElementById("wpHint");
  if (hint) {
    hint.textContent = "✓ " + source.name;
    hint.classList.add("wp-hint-selected");
  }

  // Close after brief delay so user sees the confirmation
  const backdrop = document.getElementById("wpBackdrop");
  setTimeout(() => {
    closePicker(backdrop);
    if (hint) {
      hint.classList.remove("wp-hint-selected");
    }
  }, 400);
}

module.exports = { initWindowPicker };
