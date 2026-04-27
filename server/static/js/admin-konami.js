/**
 * Admin Konami easter egg trigger.
 *
 * Sequence: ↑ ↑ ↓ ↓ ← → ← → B A
 * On match: POST /admin/konami/trigger → server WS broadcasts
 * `{type: "konami"}` → overlay.js freezes + explodes every visible danmu.
 *
 * Combo HUD lives in the bottom-right corner of the admin page; only the
 * operator sees it. After the sequence completes (or 2.5s of inactivity)
 * the HUD fades out.
 *
 * Per prototype priority-2-pieces.jsx + konami.jsx.
 */
(function () {
  "use strict";

  const SEQ = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a",
  ];
  // Mapping of sequence keys → glyph for the combo HUD.
  const GLYPH = {
    ArrowUp: "▲", ArrowDown: "▼", ArrowLeft: "◀", ArrowRight: "▶",
    b: "B", a: "A",
  };
  const RESET_AFTER_MS = 2500;

  let _idx = 0;
  let _timer = 0;
  let _hud = null;

  function _ensureHud() {
    if (_hud) return _hud;
    const el = document.createElement("div");
    el.className = "admin-konami-hud";
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = `
      <div class="admin-konami-hud-label">KONAMI</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `;
    document.body.appendChild(el);
    _hud = el;
    return el;
  }

  function _renderHud() {
    if (_idx === 0) {
      if (_hud) _hud.classList.remove("is-on");
      return;
    }
    const el = _ensureHud();
    el.classList.add("is-on");
    const keysEl = el.querySelector(".admin-konami-hud-keys");
    if (keysEl) {
      keysEl.innerHTML = SEQ.map((k, i) => {
        const filled = i < _idx ? "is-filled" : "";
        return `<span class="admin-konami-hud-key ${filled}">${GLYPH[k]}</span>`;
      }).join("");
    }
    const progressEl = el.querySelector(".admin-konami-hud-progress");
    if (progressEl) {
      const pct = Math.round((_idx / SEQ.length) * 100);
      progressEl.style.width = pct + "%";
    }
  }

  function _reset(silent) {
    _idx = 0;
    if (_timer) { clearTimeout(_timer); _timer = 0; }
    if (!silent) _renderHud();
  }

  function _scheduleReset() {
    if (_timer) clearTimeout(_timer);
    _timer = setTimeout(() => _reset(), RESET_AFTER_MS);
  }

  async function _trigger() {
    try {
      const r = await window.csrfFetch("/admin/konami/trigger", { method: "POST" });
      if (!r.ok) throw new Error("HTTP " + r.status);
      if (window.showToast) {
        window.showToast("🎮 KONAMI · 已觸發 overlay 爆炸動畫", true);
      }
    } catch (e) {
      console.warn("[konami] trigger failed:", e && e.message);
      if (window.showToast) window.showToast("Konami 觸發失敗", false);
    }
  }

  document.addEventListener("keydown", (e) => {
    // Ignore when user is typing in an input / textarea / contenteditable.
    const target = e.target;
    if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
      return;
    }
    const expected = SEQ[_idx];
    // Match ArrowKeys exactly; B / A case-insensitive.
    const matched = e.key === expected
      || (expected === "b" && e.key.toLowerCase() === "b")
      || (expected === "a" && e.key.toLowerCase() === "a");

    if (!matched) {
      // If the wrong key is the START of the sequence, restart at 1; else 0.
      _idx = e.key === SEQ[0] ? 1 : 0;
      _renderHud();
      if (_idx > 0) _scheduleReset(); else if (_timer) { clearTimeout(_timer); _timer = 0; }
      return;
    }

    _idx++;
    _renderHud();
    if (_idx >= SEQ.length) {
      _reset(true);  // hide HUD silently
      _trigger();
      return;
    }
    _scheduleReset();
  });

  // Expose for tests / other callers.
  window.AdminKonami = { trigger: _trigger };
})();
