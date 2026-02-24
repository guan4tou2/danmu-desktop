// Konami Code effect, startup animation, and display options handlers (child window)

function initGlobalEffects() {
  if (!window.API) return;

  // Update display options (main window)
  window.API.onUpdateDisplayOptions((options) => {
    const screenSelect = document.getElementById("screen-select");
    if (!screenSelect) return;

    screenSelect.innerHTML = "";
    options.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.textContent = option.text;
      screenSelect.appendChild(opt);
    });
    console.log("[Renderer] Display options updated:", options);
  });

  // Startup animation (child window)
  window.API.onShowStartupAnimation((data) => {
    try {
      const oldOverlay = document.getElementById("startup-overlay");
      if (oldOverlay) oldOverlay.remove();

      const oldStyle = document.getElementById("startup-overlay-style");
      if (oldStyle) oldStyle.remove();

      const overlay = document.createElement("div");
      overlay.id = "startup-overlay";

      const style = document.createElement("style");
      style.id = "startup-overlay-style";
      style.textContent = `
        @font-face {
          font-family: 'SDGlitch';
          src: url('assets/SDGlitch_Demo.ttf') format('truetype');
        }

        #startup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0,0,0,0);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          pointer-events: none;
          animation: startup-vignette 4s ease-out forwards;
        }

        @keyframes startup-vignette {
          0% { box-shadow: inset 0 0 0 0 rgba(0,0,0,0); }
          25% { box-shadow: inset 0 0 200px 100px rgba(0,0,0,0.7); }
          75% { box-shadow: inset 0 0 200px 100px rgba(0,0,0,0.7); }
          100% { box-shadow: inset 0 0 0 0 rgba(0,0,0,0); }
        }

        .startup-text {
          font-family: 'SDGlitch', 'Courier New', Courier, monospace;
          font-size: 12vw;
          color: rgb(56, 189, 248);
          text-shadow: 0 0 10px rgb(56, 189, 248), 0 0 20px rgb(56, 189, 248), 0 0 40px rgb(56, 189, 248);
          animation: startup-text-appear 3s ease-out forwards;
          opacity: 0;
        }

        @keyframes startup-text-appear {
          0% { opacity: 0; transform: scale(0.5); filter: blur(20px); }
          50% { opacity: 1; transform: scale(1.1); filter: blur(0px); }
          75% { opacity: 1; transform: scale(1); filter: blur(0px); }
          100% { opacity: 0; transform: scale(1); filter: blur(10px); }
        }
      `;

      document.head.appendChild(style);

      const textElement = document.createElement("div");
      textElement.className = "startup-text";
      textElement.textContent = data.text;

      overlay.appendChild(textElement);
      document.body.appendChild(overlay);

      setTimeout(() => {
        overlay.remove();
        style.remove();
      }, 4000);
    } catch (error) {
      console.error("[Renderer] Error in startup animation:", error.message);
    }
  });

  // Konami Code effect (child window)
  window.API.onKonamiEffect(() => {
    try {
      const oldOverlay = document.getElementById("konami-overlay");
      if (oldOverlay) oldOverlay.remove();

      const overlay = document.createElement("div");
      overlay.id = "konami-overlay";

      const style = document.createElement("style");
      style.textContent = `
        @font-face {
          font-family: 'SDGlitch';
          src: url('assets/SDGlitch_Demo.ttf') format('truetype');
        }

        #konami-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0,0,0,0);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          pointer-events: none;
          animation: konami-vignette 4s ease-out forwards, konami-screen-shake 0.5s 2;
        }

        @keyframes konami-vignette {
          0% { box-shadow: inset 0 0 0 0 rgba(0,0,0,0); }
          25% { box-shadow: inset 0 0 200px 100px rgba(0,0,0,0.7); }
          75% { box-shadow: inset 0 0 200px 100px rgba(0,0,0,0.7); }
          100% { box-shadow: inset 0 0 0 0 rgba(0,0,0,0); }
        }

        @keyframes konami-screen-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .konami-text {
          font-family: 'SDGlitch', 'Courier New', Courier, monospace;
          font-size: 12vw;
          color: rgb(222, 187, 32);
          text-shadow: 0 0 10px rgb(217, 233, 42), 0 0 20px rgb(217, 233, 42);
          position: relative;
          animation: konami-text-flicker 3s infinite alternate;
          white-space: nowrap;
          letter-spacing: -0.05em;
        }

        .konami-text::before, .konami-text::after {
          content: 'KONAMI CODE ACTIVATED!';
          position: absolute;
          top: 0;
          left: 0;
          background: transparent;
          clip: rect(0, 900px, 0, 0);
        }

        .konami-text::before {
          left: -2px;
          text-shadow: -1px 0 red;
          animation: konami-glitch-1 2s infinite linear alternate-reverse;
        }

        .konami-text::after {
          left: 2px;
          text-shadow: 1px 0 blue;
          animation: konami-glitch-2 3s infinite linear alternate-reverse;
        }

        @keyframes konami-text-flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes konami-glitch-1 {
          0% { clip: rect(42px, 9999px, 44px, 0); }
          10% { clip: rect(17px, 9999px, 94px, 0); }
          20% { clip: rect(83px, 9999px, 86px, 0); }
          30% { clip: rect(28px, 9999px, 16px, 0); }
          40% { clip: rect(42px, 9999px, 62px, 0); }
          50% { clip: rect(34px, 9999px, 14px, 0); }
          60% { clip: rect(77px, 9999px, 77px, 0); }
          70% { clip: rect(61px, 9999px, 52px, 0); }
          80% { clip: rect(40px, 9999px, 50px, 0); }
          90% { clip: rect(43px, 9999px, 86px, 0); }
          100% { clip: rect(97px, 9999px, 82px, 0); }
        }

        @keyframes konami-glitch-2 {
          0% { clip: rect(85px, 9999px, 9px, 0); }
          10% { clip: rect(8px, 9999px, 3px, 0); }
          20% { clip: rect(42px, 9999px, 94px, 0); }
          30% { clip: rect(23px, 9999px, 33px, 0); }
          40% { clip: rect(38px, 9999px, 49px, 0); }
          50% { clip: rect(12px, 9999px, 48px, 0); }
          60% { clip: rect(81px, 9999px, 91px, 0); }
          70% { clip: rect(30px, 9999px, 75px, 0); }
          80% { clip: rect(88px, 9999px, 100px, 0); }
          90% { clip: rect(22px, 9999px, 66px, 0); }
          100% { clip: rect(1px, 9999px, 52px, 0); }
        }
      `;

      const textElement = document.createElement("div");
      textElement.className = "konami-text";
      textElement.textContent = "KONAMI CODE ACTIVATED!";

      overlay.appendChild(style);
      overlay.appendChild(textElement);
      document.body.appendChild(overlay);

      setTimeout(() => {
        const overlayToRemove = document.getElementById("konami-overlay");
        if (overlayToRemove) {
          overlayToRemove.remove();
        }
      }, 4000);

      // Explosion effect on existing danmus
      const danmusToExplode = document.querySelectorAll("h1.danmu, img.danmu");
      danmusToExplode.forEach((el) => {
        if (el.dataset.exploding) return;

        const rect = el.getBoundingClientRect();
        const particle = el.cloneNode(true);
        particle.style.transform = "";
        particle.style.left = rect.left + "px";
        particle.style.top = rect.top + "px";
        particle.style.margin = "0";
        particle.style.position = "fixed";
        document.body.appendChild(particle);

        const duration = 800 + Math.random() * 400;
        const targetX = (Math.random() - 0.5) * window.innerWidth;
        const targetY = (Math.random() - 0.5) * window.innerHeight;
        const targetScale = 1.5 + Math.random() * 2;
        const targetRot = (Math.random() - 0.5) * 1080;

        particle.animate(
          [
            {
              transform: "translate(0, 0) scale(1) rotate(0)",
              opacity: particle.style.opacity,
            },
            {
              transform: `translate(${targetX}px, ${targetY}px) scale(${targetScale}) rotate(${targetRot}deg)`,
              opacity: 0,
            },
          ],
          { duration: duration, easing: "ease-out", fill: "forwards" }
        );

        setTimeout(() => particle.remove(), duration);
        el.dataset.exploding = "true";
        el.style.display = "none";
      });
    } catch (error) {
      console.error("[Renderer] Error in Konami message:", error.message);
    }
  });
}

module.exports = { initGlobalEffects };
