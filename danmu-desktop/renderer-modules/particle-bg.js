/**
 * Lightweight Canvas 2D particle network background.
 * Replaces Vanta.js NET effect — zero dependencies (no three.js).
 *
 * Usage: initParticleBg("#vanta-bg", { color, bgColor, points, maxDist })
 */

const DEFAULTS = {
  color: [59, 130, 246],       // #3b82f6 (sky-500)
  bgColor: [15, 23, 42],      // #0f172a (slate-900)
  points: 60,
  maxDist: 120,
  speed: 0.4,
  mouseRadius: 150,
};

function initParticleBg(selector, opts = {}) {
  const cfg = { ...DEFAULTS, ...opts };
  const container = document.querySelector(selector);
  if (!container) return;

  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%";
  container.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  let W, H;
  let particles = [];
  let mouse = { x: -9999, y: -9999 };
  let animId = null;

  function resize() {
    W = canvas.width = container.offsetWidth * (window.devicePixelRatio || 1);
    H = canvas.height = container.offsetHeight * (window.devicePixelRatio || 1);
    canvas.style.width = container.offsetWidth + "px";
    canvas.style.height = container.offsetHeight + "px";
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < cfg.points; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * cfg.speed,
        vy: (Math.random() - 0.5) * cfg.speed,
        r: Math.random() * 2 + 1,
      });
    }
  }

  function draw() {
    const [br, bg, bb] = cfg.bgColor;
    ctx.fillStyle = `rgb(${br},${bg},${bb})`;
    ctx.fillRect(0, 0, W, H);

    const [cr, cg, cb] = cfg.color;
    const dpr = window.devicePixelRatio || 1;
    const maxDist = cfg.maxDist * dpr;
    const mouseR = cfg.mouseRadius * dpr;
    const mx = mouse.x * dpr;
    const my = mouse.y * dpr;

    // Update positions
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      // Mouse repulsion
      const dmx = p.x - mx;
      const dmy = p.y - my;
      const dm = Math.sqrt(dmx * dmx + dmy * dmy);
      if (dm < mouseR && dm > 0) {
        const force = (mouseR - dm) / mouseR * 0.02;
        p.vx += (dmx / dm) * force;
        p.vy += (dmy / dm) * force;
      }

      // Speed cap
      const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (spd > cfg.speed * 2) {
        p.vx = (p.vx / spd) * cfg.speed * 2;
        p.vy = (p.vy / spd) * cfg.speed * 2;
      }
    }

    // Draw lines
    ctx.lineWidth = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.6;
          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${alpha})`;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw points
    for (const p of particles) {
      ctx.fillStyle = `rgba(${cr},${cg},${cb},0.8)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * dpr, 0, Math.PI * 2);
      ctx.fill();
    }

    animId = requestAnimationFrame(draw);
  }

  // Event listeners
  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  container.addEventListener("mouseleave", () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // Start
  resize();
  createParticles();
  draw();

  return {
    destroy() {
      if (animId) cancelAnimationFrame(animId);
      canvas.remove();
    },
  };
}

module.exports = { initParticleBg };
