// Shared design tokens — aligned to codebase `shared/tokens.css`.
// Primary = sky-400 #38bdf8 cyan. Deep bg = slate-950/900. Amber replaces magenta.
// NO violet/magenta/purple anywhere — they conflict with codebase tokens.

const hudTokens = {
  // Deep-ink base — slate-950 / slate-900 / slate-800
  bg0: '#020617',          // viewport (slate-950)
  bg1: '#0f172a',          // panels (slate-900)
  bg2: '#1e293b',          // raised (slate-800)
  bg3: '#334155',          // row hover (slate-700)
  line: 'rgba(148, 163, 184, 0.18)',     // hairlines (slate-400 @ low)
  lineStrong: 'rgba(148, 163, 184, 0.35)',

  // Text
  text: '#f1f5f9',           // slate-100
  textDim: '#94a3b8',        // slate-400
  textMute: '#64748b',       // slate-500

  // HUD signature — cyan primary
  cyan: '#38bdf8',           // sky-400
  cyanSoft: 'rgba(56, 189, 248, 0.12)',
  cyanLine: 'rgba(56, 189, 248, 0.45)',

  // Accents — amber replaces magenta; lime for healthy; crimson for danger
  amber:   '#fbbf24',        // amber-400 (live/recording/warn)
  lime:    '#86efac',        // green-300 (healthy)
  crimson: '#f87171',        // red-400 (danger)

  // DEPRECATED alias — kept so old refs resolve, but maps to amber
  magenta: '#fbbf24',

  // Type
  fontSans: '"Noto Sans TC", "Zen Kaku Gothic New", -apple-system, system-ui, sans-serif',
  fontMono: '"IBM Plex Mono", "JetBrains Mono", ui-monospace, monospace',
  fontDisplay: '"IBM Plex Mono", "Noto Sans TC", sans-serif',

  // Light mode mirror
  lightBg0: '#f8fafc',
  lightBg1: '#ffffff',
  lightBg2: '#f1f5f9',
  lightLine: 'rgba(15, 23, 42, 0.12)',
  lightText: '#0f172a',
  lightTextDim: '#475569',
};

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

function CutPanel({ children, cut = 14, style = {}, bg = hudTokens.bg1, border = hudTokens.line }) {
  const cp = `polygon(0 ${cut}px, ${cut}px 0, 100% 0, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, 0 100%)`;
  return (
    <div style={{ position: 'relative', background: border, clipPath: cp, padding: 1, ...style }}>
      <div style={{ background: bg, clipPath: cp, width: '100%', height: '100%', padding: style.padding || 0 }}>
        {children}
      </div>
    </div>
  );
}

function HudLabel({ children, color, style = {} }) {
  return (
    <span style={{
      fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 2,
      textTransform: 'uppercase', color: color || hudTokens.textMute,
      fontWeight: 500, ...style,
    }}>{children}</span>
  );
}

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

function MiniBars({ data, color = hudTokens.cyan, height = 18, width = 80, style = {} }) {
  const max = Math.max(...data, 1);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height, width, ...style }}>
      {data.map((v, i) => (
        <div key={i} style={{
          flex: 1, height: `${(v / max) * 100}%`, background: color,
          opacity: 0.35 + (v / max) * 0.65, minHeight: 2,
        }} />
      ))}
    </div>
  );
}

// Sparkline — smooth line with area fill. Used in Metrics/Dashboard.
function Sparkline({ data, color = hudTokens.cyan, width = 200, height = 40, strokeW = 1.2 }) {
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;
  const step = width / (data.length - 1 || 1);
  const pts = data.map((v, i) => [i * step, height - ((v - min) / range) * (height - 4) - 2]);
  const d = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const area = d + ` L${width},${height} L0,${height} Z`;
  return (
    <svg width={width} height={height} style={{ display: 'block' }}>
      <path d={area} fill={color} opacity="0.12" />
      <path d={d} fill="none" stroke={color} strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ---------------------------------------------------------------
// DanmuHero — product-identity lockup.
// Matches .server-hero-title from server/static/css/style.css:
//   font: Bebas Neue + Noto Sans CJK fallback (--font-display)
//   color: sky-300 #7dd3fc, uppercase, letter-spacing 0.02em, drop-shadow
// Sizes:
//   hero  — clamp(3.2rem, 8vw, 6rem)     → viewer home, overlay idle
//   large — clamp(2rem, 5vw, 3.5rem)     → admin login, connect dialog welcome
//   medium— 2rem                          → fixed medium
//   inline— 1.5rem                        → admin sidebar/header
// Subtitle is slate-300, max-width 40rem.
const HERO_FONT_DISPLAY = '"Bebas Neue", "Noto Sans TC", "Noto Sans CJK TC", sans-serif';
const HERO_SKY = '#7dd3fc';
const HERO_SLATE_300 = '#cbd5e1';

const HERO_SIZE = {
  hero:   'clamp(3.2rem, 8vw, 6rem)',
  large:  'clamp(2rem, 5vw, 3.5rem)',
  medium: '2rem',
  inline: '1.5rem',
};

function DanmuHero({
  title = 'Danmu Fire',
  subtitle,
  size = 'hero',
  align = 'center',
  chip,
  style = {},
  subStyle = {},
}) {
  return (
    <div style={{ textAlign: align, ...style }}>
      <h1 style={{
        margin: 0,
        fontFamily: HERO_FONT_DISPLAY,
        fontSize: HERO_SIZE[size] || size,
        fontWeight: 400,
        color: HERO_SKY,
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        lineHeight: 1,
        filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.45)) drop-shadow(0 4px 6px rgba(0,0,0,0.3))',
      }}>{title}</h1>
      {subtitle && (
        <p style={{
          margin: '14px auto 0',
          maxWidth: '40rem',
          color: HERO_SLATE_300,
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          lineHeight: 1.6,
          fontFamily: hudTokens.fontSans,
          fontWeight: 400,
          ...subStyle,
        }}>{subtitle}</p>
      )}
      {chip && (
        <div style={{ marginTop: 18, display: 'flex', justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
          {chip}
        </div>
      )}
    </div>
  );
}

function HeroInline({ title = 'Danmu Fire', suffix }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 10 }}>
      <span style={{
        fontFamily: HERO_FONT_DISPLAY,
        fontSize: HERO_SIZE.inline,
        color: HERO_SKY,
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        fontWeight: 400,
        lineHeight: 1,
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
      }}>{title}</span>
      {suffix}
    </div>
  );
}

Object.assign(window, {
  hudTokens, HudCorners, CutPanel, HudLabel, StatusDot, HudBackdrop, MiniBars, Sparkline,
  DanmuHero, HeroInline, HERO_FONT_DISPLAY, HERO_SKY, HERO_SLATE_300,
});
