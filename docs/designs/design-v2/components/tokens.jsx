// Shared design tokens + utility atoms for the SAO-HUD refined system.
// All admin variations share these tokens so the language stays consistent.
//
// Values mirror shared/tokens.css (the real production token source). Migrated
// oklch → hex in design-v2 round 2 so the prototype stops parallel-tracking
// a separate color system. No-magenta rule from design-feedback-desktop-v2.md:
// `magenta` + `crimson` are retained as keys but now resolve to amber / red
// respectively — usages should be renamed in a follow-up pass.

const hudTokens = {
  // Deep-ink base — matches --color-bg-base family
  bg0: '#020617',         // slate-950 — viewport
  bg1: '#0f172a',         // slate-900 — panels
  bg2: '#1e293b',         // slate-800 — raised
  bg3: '#334155',         // slate-700 — row hover
  line: 'rgba(71, 85, 105, 0.55)',   // slate-600 @ 0.55
  lineStrong: 'rgba(100, 116, 139, 0.85)',  // slate-500 @ 0.85

  // Text — matches --color-text-*
  text: '#f1f5f9',        // slate-100
  textDim: '#94a3b8',     // slate-400
  textMute: '#64748b',    // slate-500

  // HUD signature — sky-400 primary, matches --color-primary
  cyan: '#38bdf8',
  cyanSoft: 'rgba(56, 189, 248, 0.14)',
  cyanLine: 'rgba(56, 189, 248, 0.45)',

  // Accents — no-magenta rule: alerts/warnings use amber, errors use red.
  // `magenta` + `crimson` keys kept as aliases so downstream usages don't
  // break; rename to `amber` / `red` in a follow-up sweep.
  magenta: '#f59e0b',     // was oklch magenta → now amber-500 (warning/live)
  amber:   '#f59e0b',     // amber-500 — matches --color-warning-ish
  lime:    '#22c55e',     // green-500 — matches --color-success
  crimson: '#ef4444',     // was oklch crimson → now red-500 (--color-error)

  // Type — matches --font-display / --font-mono / --font-ui from shared tokens
  fontSans: '"Noto Sans", "Noto Sans TC", "Zen Kaku Gothic New", -apple-system, system-ui, sans-serif',
  fontMono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
  fontDisplay: '"Bebas Neue", "Noto Sans", "Noto Sans TC", system-ui, sans-serif',

  // Light mode mirror — slate-50 family
  lightBg0: '#f8fafc',    // slate-50
  lightBg1: '#ffffff',
  lightBg2: '#f1f5f9',    // slate-100
  lightLine: 'rgba(203, 213, 225, 0.8)',   // slate-300 @ 0.8
  lightText: '#1e293b',   // slate-800
  lightTextDim: '#64748b', // slate-500
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
