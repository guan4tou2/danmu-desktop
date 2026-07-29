const { initGlobalEffects } = require("../renderer-modules/konami");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function setupDOM() {
  document.body.innerHTML = `
    <select id="screen-select"></select>
  `;
}

function mockAPI() {
  const handlers = {};
  return {
    onUpdateDisplayOptions: jest.fn((cb) => {
      handlers.updateDisplayOptions = cb;
    }),
    onShowStartupAnimation: jest.fn((cb) => {
      handlers.showStartupAnimation = cb;
    }),
    onKonamiEffect: jest.fn((cb) => {
      handlers.konamiEffect = cb;
    }),
    _handlers: handlers,
  };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("initGlobalEffects", () => {
  beforeEach(() => {
    setupDOM();
  });

  test("returns immediately when window.API is not set", () => {
    window.API = null;
    // Should not throw
    expect(() => initGlobalEffects()).not.toThrow();
  });

  test("registers the two child-window listeners only", () => {
    window.API = mockAPI();
    initGlobalEffects();

    expect(window.API.onShowStartupAnimation).toHaveBeenCalledTimes(1);
    expect(window.API.onKonamiEffect).toHaveBeenCalledTimes(1);
  });

  test("does NOT register onUpdateDisplayOptions — display-select owns that channel", () => {
    // Contract: preload keeps only the last-registered listener per channel,
    // so a second subscriber here would nondeterministically win/lose against
    // display-select and strip dataset.displayId on hotplug repopulates.
    window.API = mockAPI();
    initGlobalEffects();

    expect(window.API.onUpdateDisplayOptions).not.toHaveBeenCalled();
  });

  describe("onShowStartupAnimation", () => {
    test("creates startup overlay with text", () => {
      window.API = mockAPI();
      initGlobalEffects();

      window.API._handlers.showStartupAnimation({ text: "LINK START" });

      const overlay = document.getElementById("startup-overlay");
      expect(overlay).not.toBeNull();

      const textEl = overlay.querySelector(".startup-text");
      expect(textEl).not.toBeNull();
      expect(textEl.textContent).toBe("LINK START");
    });

    test("creates style element with id startup-overlay-style", () => {
      window.API = mockAPI();
      initGlobalEffects();

      window.API._handlers.showStartupAnimation({ text: "TEST" });

      const style = document.getElementById("startup-overlay-style");
      expect(style).not.toBeNull();
      expect(style.textContent).toContain("startup-overlay");
    });

    test("removes existing overlay before creating new one", () => {
      window.API = mockAPI();
      initGlobalEffects();

      window.API._handlers.showStartupAnimation({ text: "First" });
      window.API._handlers.showStartupAnimation({ text: "Second" });

      const overlays = document.querySelectorAll("#startup-overlay");
      expect(overlays.length).toBe(1);
      expect(overlays[0].querySelector(".startup-text").textContent).toBe("Second");
    });

    test("overlay is removed after timeout", () => {
      jest.useFakeTimers();
      window.API = mockAPI();
      initGlobalEffects();

      window.API._handlers.showStartupAnimation({ text: "Fade" });
      expect(document.getElementById("startup-overlay")).not.toBeNull();

      jest.advanceTimersByTime(4000);
      expect(document.getElementById("startup-overlay")).toBeNull();
      expect(document.getElementById("startup-overlay-style")).toBeNull();

      jest.useRealTimers();
    });

    test("handles errors gracefully", () => {
      window.API = mockAPI();
      initGlobalEffects();

      // Remove body to cause an error
      const originalAppendChild = document.body.appendChild.bind(document.body);
      document.body.appendChild = jest.fn(() => {
        throw new Error("DOM error");
      });

      // Should not throw
      expect(() =>
        window.API._handlers.showStartupAnimation({ text: "Err" })
      ).not.toThrow();

      document.body.appendChild = originalAppendChild;
    });
  });

  describe("onKonamiEffect", () => {
    beforeEach(() => {
      // Mock Element.prototype.animate for explosion particles
      Element.prototype.animate = jest.fn(() => ({
        onfinish: null,
        finished: Promise.resolve(),
      }));
    });

    test("creates konami overlay element", () => {
      window.API = mockAPI();
      initGlobalEffects();

      window.API._handlers.konamiEffect();

      const overlay = document.getElementById("konami-overlay");
      expect(overlay).not.toBeNull();
    });

    test("overlay contains KONAMI CODE ACTIVATED text", () => {
      window.API = mockAPI();
      initGlobalEffects();

      window.API._handlers.konamiEffect();

      const textEl = document.querySelector(".konami-text");
      expect(textEl).not.toBeNull();
      expect(textEl.textContent).toBe("KONAMI CODE ACTIVATED!");
    });

    test("removes existing konami overlay before creating new one", () => {
      window.API = mockAPI();
      initGlobalEffects();

      window.API._handlers.konamiEffect();
      window.API._handlers.konamiEffect();

      const overlays = document.querySelectorAll("#konami-overlay");
      expect(overlays.length).toBe(1);
    });

    test("overlay is removed after 4 seconds", () => {
      jest.useFakeTimers();
      window.API = mockAPI();
      initGlobalEffects();

      window.API._handlers.konamiEffect();
      expect(document.getElementById("konami-overlay")).not.toBeNull();

      jest.advanceTimersByTime(4000);
      expect(document.getElementById("konami-overlay")).toBeNull();

      jest.useRealTimers();
    });

    test("explodes existing danmu elements", () => {
      document.body.innerHTML += '<h1 class="danmu">Test</h1>';
      window.API = mockAPI();
      initGlobalEffects();

      window.API._handlers.konamiEffect();

      const danmu = document.querySelector("h1.danmu");
      expect(danmu.dataset.exploding).toBe("true");
      expect(danmu.style.display).toBe("none");
    });

    test("does not re-explode already exploding danmu", () => {
      document.body.innerHTML += '<h1 class="danmu" data-exploding="true">Test</h1>';
      window.API = mockAPI();
      initGlobalEffects();

      // Should not throw or double-process
      expect(() => window.API._handlers.konamiEffect()).not.toThrow();
    });

    test("explosion creates cloned particles with animation", () => {
      document.body.innerHTML += '<h1 class="danmu" style="opacity: 1;">Boom</h1>';

      // getBoundingClientRect is needed for explosion particles
      const danmu = document.querySelector("h1.danmu");
      danmu.getBoundingClientRect = jest.fn(() => ({
        left: 100,
        top: 200,
        width: 300,
        height: 50,
      }));

      window.API = mockAPI();
      initGlobalEffects();

      window.API._handlers.konamiEffect();

      // animate() should have been called on a cloned particle
      expect(Element.prototype.animate).toHaveBeenCalled();
    });
  });
});
