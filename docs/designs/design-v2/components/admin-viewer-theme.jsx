// Admin · Viewer Theme
// Controls the /fire viewer chrome — bg / primary accent / hero / light-dark / logo / UI font.
// Entirely independent from Theme Packs (which governs per-message danmu appearance).
// Layout: left controls · right "iframe" live preview of viewer.

const VT_PRESETS = [
  { id: 'default', name: '預設 · Midnight', bg: '#050910', bgGrad: null, primary: '#7DD3FC', hero: '#FCD34D', mode: 'dark', font: 'Zen Kaku Gothic New' },
  { id: 'daylight', name: '日光 · Daylight', bg: '#F8FAFC', bgGrad: null, primary: '#0284C7', hero: '#D97706', mode: 'light', font: 'Zen Kaku Gothic New' },
  { id: 'cinema',  name: '劇院 · Cinema',   bg: '#0A0A0F', bgGrad: 'linear-gradient(145deg, #1a0a20 0%, #050910 80%)', primary: '#F472B6', hero: '#FCD34D', mode: 'dark', font: 'Chakra Petch' },
  { id: 'retro',   name: '復古 · Retro',    bg: '#1A1511', bgGrad: 'linear-gradient(180deg, #2a1d10 0%, #120a06 100%)', primary: '#FB923C', hero: '#FDE68A', mode: 'dark', font: 'Bebas Neue' },
];

const VT_FONTS = [
  { v: 'Zen Kaku Gothic New', label: 'Zen Kaku · 預設現代' },
  { v: 'Noto Sans TC',        label: 'Noto Sans TC · 全字型' },
  { v: 'Chakra Petch',        label: 'Chakra Petch · 科幻 HUD' },
  { v: 'Bebas Neue',          label: 'Bebas Neue · 海報粗體' },
  { v: 'IBM Plex Mono',       label: 'IBM Plex Mono · 等寬' },
  { v: 'system-ui',           label: 'System UI · 系統預設' },
];

// --- contrast utils (WCAG) ---
function vtHex2Rgb(h) {
  const m = /^#?([0-9a-f]{6})$/i.exec(h);
  if (!m) return [0, 0, 0];
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function vtRelLum([r, g, b]) {
  const c = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
function vtContrast(a, b) {
  const la = vtRelLum(vtHex2Rgb(a)), lb = vtRelLum(vtHex2Rgb(b));
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

function AdminViewerThemePage({ theme = 'dark' }) {
  const [t, setT] = React.useState({ ...VT_PRESETS[0] });
  const [preset, setPreset] = React.useState('default');
  const [logo, setLogo] = React.useState(null); // {name, dataUri}
  const [logoOver, setLogoOver] = React.useState(false);
  const [customPresets, setCustomPresets] = React.useState([]);
  const [previewDevice, setPreviewDevice] = React.useState('desktop');
  const [useGradient, setUseGradient] = React.useState(false);

  const patch = (v) => { setT(x => ({ ...x, ...v })); setPreset('custom'); };
  const loadPreset = (id) => {
    const p = [...VT_PRESETS, ...customPresets].find(x => x.id === id);
    if (!p) return;
    setT({ ...p });
    setPreset(id);
    setUseGradient(!!p.bgGrad);
  };

  // text-color auto chosen for mode
  const fgOnBg = t.mode === 'dark' ? '#F8FAFC' : '#0F172A';
  const fgMuted = t.mode === 'dark' ? 'rgba(248,250,252,0.60)' : 'rgba(15,23,42,0.55)';

  // WCAG
  const bgSample = t.bg;
  const cTextOnBg = vtContrast(fgOnBg, bgSample);
  const cPrimaryOnBg = vtContrast(t.primary, bgSample);
  const cHeroOnBg = vtContrast(t.hero, bgSample);

  return (
    <AdminPageShell route="viewer-theme" title="觀眾頁主題"
      en="VIEWER THEME · /fire 頁面外觀 · 與 Theme Packs 完全獨立" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 20 }}>
          {/* ---------- LEFT · control panel ---------- */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Scope banner */}
            <div style={{
              padding: '10px 14px', borderRadius: radius,
              background: hudTokens.cyanSoft, border: `1px solid ${accent}`,
              display: 'flex', alignItems: 'flex-start', gap: 10,
            }}>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 14, color: accent, lineHeight: 1 }}>◉</span>
              <div>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1.5, color: accent, fontWeight: 700 }}>SCOPE</div>
                <div style={{ fontSize: 12, color: text, lineHeight: 1.5, marginTop: 2 }}>
                  僅影響觀眾進入 <span style={{ fontFamily: hudTokens.fontMono, color: accent }}>/fire</span> 時看到的頁面外觀;彈幕本身的顏色/描邊/陰影由 Theme Packs 管理
                </div>
              </div>
            </div>

            {/* Presets */}
            <VTCard title="主題預設" en="PRESETS" panel={panel} line={line} textDim={textDim}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {[...VT_PRESETS, ...customPresets].map(p => {
                  const on = preset === p.id;
                  return (
                    <button key={p.id} onClick={() => loadPreset(p.id)}
                      style={{
                        padding: 10, borderRadius: 4, cursor: 'pointer',
                        border: `1px solid ${on ? accent : line}`,
                        background: on ? hudTokens.cyanSoft : 'transparent',
                        textAlign: 'left', color: 'inherit',
                      }}>
                      <div style={{
                        height: 28, borderRadius: 3, marginBottom: 6, position: 'relative', overflow: 'hidden',
                        background: p.bgGrad || p.bg, border: `1px solid ${line}`,
                      }}>
                        <span style={{ position: 'absolute', top: 6, left: 6, width: 10, height: 10, borderRadius: '50%', background: p.primary, boxShadow: `0 0 6px ${p.primary}` }} />
                        <span style={{ position: 'absolute', top: 6, left: 20, width: 10, height: 10, borderRadius: '50%', background: p.hero, boxShadow: `0 0 6px ${p.hero}` }} />
                      </div>
                      <div style={{ fontSize: 11, color: text, fontWeight: on ? 600 : 400 }}>{p.name}</div>
                      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5, marginTop: 2, textTransform: 'uppercase' }}>
                        {p.mode}{p.bgGrad ? ' · GRADIENT' : ''}
                      </div>
                    </button>
                  );
                })}
              </div>
              {preset === 'custom' && (
                <div style={{ marginTop: 10, display: 'flex', gap: 6 }}>
                  <button
                    onClick={() => {
                      const id = 'custom_' + Date.now().toString(36).slice(-5);
                      setCustomPresets(ps => [...ps, { ...t, id, name: `自訂 · ${ps.length + 1}` }]);
                      setPreset(id);
                    }}
                    style={{
                      flex: 1, padding: '7px 10px', borderRadius: 3, border: `1px solid ${accent}`, background: accent, color: '#000',
                      fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, fontWeight: 700, cursor: 'pointer',
                    }}>＋ 存為自訂主題</button>
                  <button
                    onClick={() => loadPreset('default')}
                    style={{
                      padding: '7px 12px', borderRadius: 3, border: `1px solid ${line}`, background: 'transparent', color: textDim,
                      fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, cursor: 'pointer',
                    }}>還原</button>
                </div>
              )}
            </VTCard>

            {/* Mode */}
            <VTCard title="明暗模式" en="MODE" panel={panel} line={line} textDim={textDim}>
              <div style={{ display: 'flex', gap: 6 }}>
                {[
                  { k: 'dark',  icon: '◐', label: '深色', sub: 'DARK' },
                  { k: 'light', icon: '☼', label: '淺色', sub: 'LIGHT' },
                  { k: 'auto',  icon: '◑', label: '跟隨系統', sub: 'AUTO' },
                ].map(m => {
                  const on = t.mode === m.k;
                  return (
                    <button key={m.k} onClick={() => patch({ mode: m.k })}
                      style={{
                        flex: 1, padding: '9px 6px', borderRadius: 4, cursor: 'pointer',
                        border: `1px solid ${on ? accent : line}`,
                        background: on ? hudTokens.cyanSoft : 'transparent',
                        color: on ? accent : text,
                      }}>
                      <div style={{ fontSize: 16, lineHeight: 1 }}>{m.icon}</div>
                      <div style={{ fontSize: 11, marginTop: 4, fontWeight: on ? 600 : 400 }}>{m.label}</div>
                      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 8, letterSpacing: 1, color: on ? accent : textDim, marginTop: 2 }}>{m.sub}</div>
                    </button>
                  );
                })}
              </div>
            </VTCard>

            {/* Colors */}
            <VTCard title="顏色" en="COLORS · BG / PRIMARY / HERO" panel={panel} line={line} textDim={textDim}>
              <VTColorRow label="背景" en="BG" value={t.bg} onChange={v => patch({ bg: v, bgGrad: null })}
                contrast={{ vs: fgOnBg, label: '文字' }} tokens={{ raised, line, text, textDim, accent }} />

              <label style={{
                display: 'flex', alignItems: 'center', gap: 8, margin: '10px 0 6px',
                fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, color: textDim, cursor: 'pointer',
              }}>
                <input type="checkbox" checked={useGradient} onChange={e => {
                  setUseGradient(e.target.checked);
                  if (!e.target.checked) patch({ bgGrad: null });
                  else patch({ bgGrad: `linear-gradient(145deg, ${t.bg} 0%, #05060B 80%)` });
                }} />
                使用漸層背景
              </label>

              <VTColorRow label="主色" en="PRIMARY" value={t.primary} onChange={v => patch({ primary: v })}
                contrast={{ vs: t.bg, label: '背景' }} tokens={{ raised, line, text, textDim, accent }} />
              <VTColorRow label="強調色" en="HERO" value={t.hero} onChange={v => patch({ hero: v })}
                contrast={{ vs: t.bg, label: '背景' }} tokens={{ raised, line, text, textDim, accent }} />
            </VTCard>

            {/* Logo */}
            <VTCard title="LOGO" en="LOGO · PNG 200×80 建議透明底" panel={panel} line={line} textDim={textDim}>
              <div
                onDragOver={e => { e.preventDefault(); setLogoOver(true); }}
                onDragLeave={() => setLogoOver(false)}
                onDrop={e => {
                  e.preventDefault(); setLogoOver(false);
                  // stub — if a real file, read it. Here we just simulate with placeholder
                  setLogo({ name: 'brand-logo.png', dataUri: null });
                }}
                style={{
                  height: 96, borderRadius: 4, padding: 12,
                  border: `1px dashed ${logoOver ? accent : line}`,
                  background: logoOver ? hudTokens.cyanSoft : raised,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: logoOver ? accent : textDim, cursor: 'pointer',
                  fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 0.5,
                  textAlign: 'center', position: 'relative',
                }}>
                {logo ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 80, height: 32,
                      background: `linear-gradient(90deg, ${t.primary}, ${t.hero})`,
                      borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: t.mode === 'dark' ? '#000' : '#fff', fontFamily: hudTokens.fontDisplay, fontSize: 12, fontWeight: 700, letterSpacing: 1.2,
                    }}>ACME</div>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: 11, color: text }}>{logo.name}</div>
                      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5 }}>PNG · 200×80 · 透明</div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div style={{ fontSize: 22, marginBottom: 4 }}>{logoOver ? '↓' : '⇪'}</div>
                    <div>{logoOver ? '放開上傳' : '拖放 PNG · 或點擊選擇'}</div>
                    <div style={{ fontSize: 9, marginTop: 3, opacity: 0.7 }}>建議尺寸 200×80 · 透明底</div>
                  </div>
                )}
              </div>
              {logo && (
                <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                  <button
                    onClick={() => setLogo(null)}
                    style={{
                      padding: '6px 10px', borderRadius: 3, border: `1px solid ${line}`, background: 'transparent', color: textDim,
                      fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, cursor: 'pointer', flex: 1,
                    }}>移除</button>
                  <button
                    style={{
                      padding: '6px 10px', borderRadius: 3, border: `1px solid ${line}`, background: 'transparent', color: textDim,
                      fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, cursor: 'pointer', flex: 1,
                    }}>替換</button>
                </div>
              )}
            </VTCard>

            {/* UI Font */}
            <VTCard title="介面字型" en="UI FONT · /fire 頁面用" panel={panel} line={line} textDim={textDim}>
              <select value={t.font} onChange={e => patch({ font: e.target.value })}
                style={{
                  width: '100%', padding: '8px 10px', borderRadius: 3,
                  background: raised, border: `1px solid ${line}`, color: text,
                  fontFamily: hudTokens.fontSans, fontSize: 13, outline: 'none',
                }}>
                {VT_FONTS.map(f => <option key={f.v} value={f.v}>{f.label}</option>)}
              </select>
              <div style={{
                marginTop: 8, padding: '10px 12px', background: raised, border: `1px solid ${line}`, borderRadius: 3,
                fontFamily: t.font, fontSize: 16, color: text, lineHeight: 1.4, letterSpacing: 0.3,
              }}>
                發送彈幕 · 2026 現場
              </div>
            </VTCard>

            {/* Persist */}
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{
                flex: 1, padding: '11px', borderRadius: 4, border: `1px solid ${accent}`,
                background: accent, color: '#000', cursor: 'pointer',
                fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5, fontWeight: 700,
              }}>▶ 立即套用</button>
              <button style={{
                padding: '11px 16px', borderRadius: 4, border: `1px solid ${line}`,
                background: 'transparent', color: text, cursor: 'pointer',
                fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1,
              }}>恢復預設</button>
            </div>
          </div>

          {/* ---------- RIGHT · iframe preview ---------- */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Top bar — device switcher + WCAG strip */}
            <div style={{
              background: panel, border: `1px solid ${line}`, borderRadius: radius, overflow: 'hidden',
            }}>
              <div style={{
                padding: '10px 14px', borderBottom: `1px solid ${line}`,
                display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
              }}>
                <HudLabel color={textDim}>LIVE PREVIEW</HudLabel>
                <div style={{ display: 'flex', gap: 4 }}>
                  {[
                    { k: 'desktop', label: '桌面', w: '1200 ·' },
                    { k: 'tablet',  label: '平板', w: '768 ·' },
                    { k: 'mobile',  label: '手機', w: '375 ·' },
                  ].map(d => {
                    const on = previewDevice === d.k;
                    return (
                      <button key={d.k} onClick={() => setPreviewDevice(d.k)}
                        style={{
                          padding: '4px 10px', borderRadius: 3, border: `1px solid ${on ? accent : line}`,
                          background: on ? hudTokens.cyanSoft : 'transparent',
                          color: on ? accent : text, cursor: 'pointer',
                          fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, fontWeight: on ? 700 : 400,
                        }}>{d.label}</button>
                    );
                  })}
                </div>
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 1 }}>
                  <StatusDot color={accent} size={5} /> 即時套用
                </span>
              </div>

              {/* WCAG bar */}
              <div style={{
                padding: '8px 14px', borderBottom: `1px solid ${line}`,
                background: raised,
                display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
              }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim }}>
                  WCAG AA
                </span>
                <WCAGChip label="文字 / 背景" ratio={cTextOnBg} textDim={textDim} accent={accent} />
                <WCAGChip label="主色 / 背景" ratio={cPrimaryOnBg} textDim={textDim} accent={accent} />
                <WCAGChip label="強調 / 背景" ratio={cHeroOnBg} textDim={textDim} accent={accent} />
              </div>

              {/* fake iframe */}
              <div style={{
                padding: previewDevice === 'mobile' ? '20px 40px' : previewDevice === 'tablet' ? '20px' : '14px 14px 0',
                background: 'rgba(0,0,0,0.25)',
                display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
              }}>
                <FakeIframe device={previewDevice}
                  theme={t} logo={logo} fgOnBg={fgOnBg} fgMuted={fgMuted}
                  line={line} />
              </div>

              <div style={{
                padding: '10px 14px', borderTop: `1px solid ${line}`,
                fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1,
                display: 'flex', justifyContent: 'space-between',
              }}>
                <span>URL · 138.2.59.206:4000</span>
                <span style={{ color: accent }}>VIEWER · {previewDevice.toUpperCase()}</span>
              </div>
            </div>

            {/* Legend · what this page does NOT control */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
              <CardHeader title="此頁不管理的項目" en="OUT OF SCOPE" textDim={textDim} />
              <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { k: '彈幕顏色 / 描邊 / 陰影',  to: '/theme-packs', label: 'Theme Packs' },
                  { k: '彈幕字級 / 速度 / 透明度', to: '/display',     label: 'Display Settings' },
                  { k: '彈幕效果 (.dme)',          to: '/effects',     label: 'Effects' },
                  { k: '速率限制 · 黑名單',        to: '/moderation',  label: 'Moderation' },
                ].map(i => (
                  <div key={i.to} style={{
                    padding: '8px 10px', background: raised, border: `1px solid ${line}`, borderRadius: 3,
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <span style={{ fontSize: 12, color: text, flex: 1 }}>{i.k}</span>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: accent, letterSpacing: 0.5 }}>↗ {i.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

// ---------- sub components ----------

function VTCard({ title, en, children, panel, line, textDim }) {
  return (
    <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: 4, padding: 14 }}>
      <CardHeader title={title} en={en} textDim={textDim} />
      <div style={{ marginTop: 12 }}>{children}</div>
    </div>
  );
}

function VTColorRow({ label, en, value, onChange, contrast, tokens }) {
  const { raised, line, text, textDim, accent } = tokens;
  const ratio = contrast ? vtContrast(value, contrast.vs) : 0;
  const rlevel = wcagLevel(ratio);
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 38, height: 38, borderRadius: 4, background: value, border: `1px solid ${line}`, position: 'relative', cursor: 'pointer', flexShrink: 0 }}>
          <input type="color" value={value} onChange={e => onChange(e.target.value)}
            style={{ position: 'absolute', inset: 0, opacity: 0, width: '100%', height: '100%', cursor: 'pointer', padding: 0, border: 'none' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontSize: 12, color: text, fontWeight: 600 }}>{label}</span>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1 }}>{en}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
            <input
              value={value.toUpperCase()}
              onChange={e => {
                const v = e.target.value;
                if (/^#[0-9A-Fa-f]{6}$/.test(v)) onChange(v);
                else if (/^[0-9A-Fa-f]{6}$/.test(v)) onChange('#' + v);
                else onChange(v); // allow partial typing
              }}
              style={{
                flex: 1, minWidth: 0,
                padding: '4px 8px', borderRadius: 3,
                background: raised, border: `1px solid ${line}`, color: text,
                fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 0.5, outline: 'none',
              }} />
            {contrast && (
              <span style={{
                padding: '3px 7px', borderRadius: 2,
                background: rlevel.bg, border: `1px solid ${rlevel.border}`,
                fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 0.5, color: rlevel.fg, fontWeight: 700,
                whiteSpace: 'nowrap',
              }} title={`vs ${contrast.label}: ${ratio.toFixed(2)}:1`}>
                {ratio.toFixed(1)}:1 · {rlevel.tag}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function wcagLevel(r) {
  if (r >= 7)   return { tag: 'AAA',  bg: 'rgba(134,239,172,0.15)', border: '#86EFAC', fg: '#86EFAC' };
  if (r >= 4.5) return { tag: 'AA',   bg: 'rgba(125,211,252,0.15)', border: '#7DD3FC', fg: '#7DD3FC' };
  if (r >= 3)   return { tag: 'AA/LG', bg: 'rgba(252,211,77,0.15)', border: '#FCD34D', fg: '#FCD34D' };
  return { tag: 'FAIL', bg: 'rgba(244,63,94,0.15)', border: '#F43F5E', fg: '#F87171' };
}

function WCAGChip({ label, ratio, textDim, accent }) {
  const l = wcagLevel(ratio);
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '3px 8px', borderRadius: 3,
      background: l.bg, border: `1px solid ${l.border}`,
    }}>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5 }}>{label}</span>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: l.fg, fontWeight: 700, letterSpacing: 0.5 }}>
        {ratio.toFixed(1)} · {l.tag}
      </span>
    </span>
  );
}

// ---- Fake iframe — renders a simplified /fire viewer using the theme ----
function FakeIframe({ device, theme: t, logo, fgOnBg, fgMuted, line }) {
  const sizes = {
    desktop: { w: 900, h: 520, pad: 32, titleSize: 32, heroSize: 14, bubble: 15 },
    tablet:  { w: 560, h: 760, pad: 24, titleSize: 26, heroSize: 13, bubble: 14 },
    mobile:  { w: 300, h: 620, pad: 18, titleSize: 20, heroSize: 12, bubble: 13 },
  };
  const s = sizes[device];
  const bg = t.bgGrad || t.bg;
  const isMobile = device === 'mobile';

  return (
    <div style={{
      width: s.w, height: s.h,
      background: bg,
      color: fgOnBg,
      borderRadius: isMobile ? 28 : 6,
      boxShadow: '0 14px 44px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04) inset',
      fontFamily: t.font, position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* notch for mobile */}
      {isMobile && (
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: 120, height: 22,
          background: '#000',
          borderBottomLeftRadius: 14, borderBottomRightRadius: 14,
          zIndex: 3,
        }} />
      )}

      {/* chrome top · logo + session id */}
      <div style={{
        padding: `${s.pad}px ${s.pad}px 0`,
        display: 'flex', alignItems: 'center', gap: 10,
        marginTop: isMobile ? 22 : 0,
      }}>
        {logo ? (
          <div style={{
            height: 24, padding: '0 10px', borderRadius: 3,
            background: `linear-gradient(90deg, ${t.primary}, ${t.hero})`,
            display: 'flex', alignItems: 'center',
            color: t.mode === 'dark' ? '#000' : '#fff',
            fontFamily: 'Chakra Petch, Bebas Neue, sans-serif',
            fontSize: 12, fontWeight: 700, letterSpacing: 1.5,
          }}>ACME</div>
        ) : (
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: t.primary, boxShadow: `0 0 8px ${t.primary}`,
          }} />
        )}
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, letterSpacing: 1.5, color: fgMuted }}>
          DANMU · #MTG-042
        </span>
        <span style={{ marginLeft: 'auto', fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: t.primary, letterSpacing: 1 }}>
          ● LIVE
        </span>
      </div>

      {/* hero */}
      <div style={{ padding: `${Math.floor(s.pad * 0.6)}px ${s.pad}px ${s.pad}px`, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, letterSpacing: 1.5,
          color: t.hero, marginBottom: 6, fontWeight: 600,
        }}>HELLO · 歡迎來到</div>
        <div style={{
          fontSize: s.titleSize, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4,
          color: fgOnBg,
        }}>
          Q2 全員大會<br />
          <span style={{ color: t.primary }}>即時彈幕</span>
        </div>
        <div style={{
          fontSize: s.heroSize, color: fgMuted, marginTop: 10, lineHeight: 1.55,
        }}>
          在下方輸入框發送訊息 · 將即時出現在主螢幕的彈幕上
        </div>

        {/* sample recent danmu list */}
        <div style={{ marginTop: Math.floor(s.pad * 0.8), flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { who: '@alex',   txt: '這個想法真的很棒 ✨', isMe: false },
            { who: '@annie',  txt: '先舉手發問 🙋',        isMe: false },
            { who: '@you',    txt: '同意！可以多講一點嗎', isMe: true },
          ].map((m, i) => (
            <div key={i} style={{
              alignSelf: m.isMe ? 'flex-end' : 'flex-start',
              maxWidth: '80%',
              padding: '7px 12px',
              borderRadius: 14,
              background: m.isMe
                ? `linear-gradient(90deg, ${t.primary}, ${t.hero})`
                : (t.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.06)'),
              color: m.isMe ? (t.mode === 'dark' ? '#000' : '#fff') : fgOnBg,
              fontSize: s.bubble, fontWeight: m.isMe ? 600 : 400,
              boxShadow: m.isMe ? `0 2px 14px ${hex2rgba(t.primary, 0.28)}` : 'none',
            }}>
              {!m.isMe && (
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: fgMuted, marginRight: 6 }}>{m.who}</span>
              )}
              {m.txt}
            </div>
          ))}
        </div>

        {/* composer */}
        <div style={{
          marginTop: Math.floor(s.pad * 0.6),
          padding: '10px 12px',
          borderRadius: 10,
          background: t.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(15,23,42,0.05)',
          border: `1px solid ${t.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)'}`,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ color: fgMuted, fontSize: s.bubble }}>說點什麼…</span>
          <span style={{
            marginLeft: 'auto',
            padding: '5px 12px', borderRadius: 6,
            background: t.primary, color: t.mode === 'dark' ? '#000' : '#fff',
            fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, fontWeight: 700, letterSpacing: 1.2,
            boxShadow: `0 0 12px ${hex2rgba(t.primary, 0.4)}`,
          }}>SEND</span>
        </div>
      </div>

      {/* mobile home indicator */}
      {isMobile && (
        <div style={{
          position: 'absolute', bottom: 7, left: '50%', transform: 'translateX(-50%)',
          width: 110, height: 4, borderRadius: 2,
          background: t.mode === 'dark' ? 'rgba(255,255,255,0.35)' : 'rgba(15,23,42,0.35)',
        }} />
      )}
    </div>
  );
}

function hex2rgba(h, a) {
  const [r, g, b] = vtHex2Rgb(h);
  return `rgba(${r},${g},${b},${a})`;
}

Object.assign(window, { AdminViewerThemePage });
