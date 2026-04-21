// Shared design tokens + utility atoms for the SAO-HUD refined system.
// All admin variations share these tokens so the language stays consistent.

const hudTokens = {
  // Deep-ink base, neutral-cool
  bg0: 'oklch(0.12 0.02 250)',          // viewport
  bg1: 'oklch(0.16 0.022 250)',         // panels
  bg2: 'oklch(0.20 0.025 250)',         // raised
  bg3: 'oklch(0.24 0.028 250)',         // row hover
  line: 'oklch(0.32 0.03 220 / 0.55)',  // hairlines
  lineStrong: 'oklch(0.45 0.05 220 / 0.85)',

  // Text
  text: 'oklch(0.96 0.01 240)',
  textDim: 'oklch(0.72 0.015 240)',
  textMute: 'oklch(0.55 0.015 240)',

  // HUD signature — cyan primary, same chroma family
  cyan: 'oklch(0.82 0.14 195)',
  cyanSoft: 'oklch(0.82 0.14 195 / 0.14)',
  cyanLine: 'oklch(0.82 0.14 195 / 0.45)',

  // Accents (same chroma, different hue)
  magenta: 'oklch(0.75 0.16 330)',
  amber:   'oklch(0.82 0.14 80)',
  lime:    'oklch(0.85 0.14 140)',
  crimson: 'oklch(0.68 0.20 25)',

  // Type
  fontSans: '"Zen Kaku Gothic New", "Noto Sans TC", -apple-system, system-ui, sans-serif',
  fontMono: '"IBM Plex Mono", "JetBrains Mono", ui-monospace, monospace',
  fontDisplay: '"Chakra Petch", "Zen Kaku Gothic New", sans-serif',

  // Light mode mirror
  lightBg0: 'oklch(0.98 0.005 240)',
  lightBg1: 'oklch(0.99 0.003 240)',
  lightBg2: 'oklch(0.96 0.005 240)',
  lightLine: 'oklch(0.82 0.015 240 / 0.8)',
  lightText: 'oklch(0.22 0.015 240)',
  lightTextDim: 'oklch(0.45 0.015 240)',
};

// Corner bracket decoration — wraps any child with HUD brackets
function HudCorners({ children, size = 10, color, style = {}, inset = 0, thickness = 1 }) {
  const c = color || hudTokens.cyanLine;
  const common = { position: 'absolute', width: size, height: size, pointerEvents: 'none' };
  return (
    <div style={{ position: 'relative', ...style }}>
      <span style={{ ...common, top: inset, left: inset, borderTop: `${thickness}px solid ${c}`, borderLeft: `${thickness}px solid ${c}` }} />
      <span style={{ ...common, top: inset, right: inset, borderTop: `${thickness}px solid ${c}`, borderRight: `${thickness}px solid ${c}` }} />
      <span style={{ ...common, bottom: inset, left: inset, borderBottom: `${thickness}px solid ${c}`, borderLeft: `${thickness}px solid ${c}` }} />
      <span style={{ ...common, bottom: inset, right: inset, borderBottom: `${thickness}px solid ${c}`, borderRight: `${thickness}px solid ${c}` }} />
      {children}
    </div>
  );
}

// Angular-cut panel (SAO-ish notched corner). Uses clip-path.
function CutPanel({ children, cut = 14, style = {}, bg = hudTokens.bg1, border = hudTokens.line }) {
  const cp = `polygon(0 ${cut}px, ${cut}px 0, 100% 0, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, 0 100%)`;
  return (
    <div style={{
      position: 'relative',
      background: border,
      clipPath: cp,
      padding: 1,
      ...style,
    }}>
      <div style={{ background: bg, clipPath: cp, width: '100%', height: '100%', padding: style.padding || 0 }}>
        {children}
      </div>
    </div>
  );
}

// Small HUD label — monospace, caps, tracked
function HudLabel({ children, color, style = {} }) {
  return (
    <span style={{
      fontFamily: hudTokens.fontMono,
      fontSize: 10,
      letterSpacing: 2,
      textTransform: 'uppercase',
      color: color || hudTokens.textMute,
      fontWeight: 500,
      ...style,
    }}>{children}</span>
  );
}

// Status dot with subtle pulse
function StatusDot({ color = hudTokens.cyan, size = 8, pulse = true, style = {} }) {
  return (
    <span style={{
      display: 'inline-block', width: size, height: size, borderRadius: '50%',
      background: color,
      boxShadow: `0 0 ${size}px ${color}, 0 0 ${size * 2}px ${color}55`,
      animation: pulse ? 'hud-pulse 2s ease-in-out infinite' : 'none',
      ...style,
    }} />
  );
}

// Scanline + grid backdrop atom
function HudBackdrop({ opacity = 0.35, showGrid = true }) {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {showGrid && (
        <div style={{
          position: 'absolute', inset: 0, opacity,
          backgroundImage: `
            linear-gradient(${hudTokens.cyanLine} 1px, transparent 1px),
            linear-gradient(90deg, ${hudTokens.cyanLine} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, #000 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, #000 0%, transparent 70%)',
        }} />
      )}
    </div>
  );
}

// Inline mini bar chart (for density displays)
function MiniBars({ data, color = hudTokens.cyan, height = 18, width = 80, style = {} }) {
  const max = Math.max(...data, 1);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height, width, ...style }}>
      {data.map((v, i) => (
        <div key={i} style={{
          flex: 1,
          height: `${(v / max) * 100}%`,
          background: color,
          opacity: 0.35 + (v / max) * 0.65,
          minHeight: 2,
        }} />
      ))}
    </div>
  );
}

Object.assign(window, { hudTokens, HudCorners, CutPanel, HudLabel, StatusDot, HudBackdrop, MiniBars });
