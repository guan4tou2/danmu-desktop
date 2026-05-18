// Theme Packs (風格主題包) — 只定義「彈幕本身」的樣式:
// 配色 · 字型 · 特效疊加 · 排版 (layout)
// 不控制背景 (背景由 Overlay 頁面本體 / 投影軟體控制)

function AdminThemePacksPage({ theme = 'dark' }) {
  const packs = [
    {
      id: 'default', zh: '預設', en: 'DEFAULT',
      desc: '乾淨、清晰 — 適合研討會、產品說明',
      active: true, builtin: true, uses: 1284,
      sw: ['#ffffff', '#3dd5f3', '#e879f9'],
      font: 'Noto Sans TC',
      layout: 'scroll · 右→左',
      effects: ['glow-soft'],
    },
    {
      id: 'neon', zh: '霓虹', en: 'NEON',
      desc: '賽博、電玩夜 — 螢光色 + glow + 抖動',
      active: false, builtin: true, uses: 892,
      sw: ['#39ff14', '#ff007a', '#00e7ff'],
      font: 'Orbitron + Noto TC',
      layout: 'scroll + rise 混合',
      effects: ['glow-neon', 'shake-light', 'rainbow-cycle'],
    },
    {
      id: 'retro', zh: '復古', en: 'RETRO',
      desc: '昭和夜市、懷舊錄影帶風',
      active: false, builtin: true, uses: 412,
      sw: ['#f4d35e', '#ee964b', '#f95738'],
      font: 'Klee One + Zpix',
      layout: 'scroll · 慢速',
      effects: ['blink-crt', 'typewriter'],
    },
    {
      id: 'cinema', zh: '電影', en: 'CINEMA',
      desc: '字幕風格 · 置中 — 適合放映',
      active: false, builtin: true, uses: 203,
      sw: ['#ffcc70', '#e07a5f', '#2a9d8f'],
      font: 'Noto Serif TC',
      layout: 'bottom · 置中',
      effects: ['zoom-in-out'],
    },
    {
      id: 'pride', zh: '驕傲', en: 'PRIDE',
      desc: '社群自製 · 彩虹漸變配色',
      active: false, builtin: false, author: '@mei', uses: 142,
      sw: ['#ff3b30', '#ff9500', '#ffcc00'],
      font: 'Noto Sans TC',
      layout: 'scroll + rise',
      effects: ['rainbow-cycle', 'glow-soft'],
    },
    {
      id: 'study', zh: '讀書會', en: 'STUDY',
      desc: '低飽和、低干擾 — 長時間閱讀',
      active: false, builtin: false, author: '@kairi', uses: 88,
      sw: ['#d6d3d1', '#78716c', '#0c4a6e'],
      font: 'Noto Serif TC',
      layout: 'bottom · 慢速',
      effects: [],
    },
  ];

  const activePack = packs.find(p => p.active);

  return (
    <AdminPageShell route="themes" title="風格主題包" en="THEME PACKS · STYLE + EFFECTS PRESETS" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Toolbar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>
                6 PACKS · 4 內建 · 2 社群
              </span>
              <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 1, cursor: 'pointer' }}>
                + 新增主題包  ·  ⤓ 匯入 .dmtheme  ·  ⤒ 匯出
              </span>
            </div>

            {/* Cards grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
              {packs.map(p => (
                <ThemePackCard key={p.id} pack={p} panel={panel} raised={raised} line={line} text={text} textDim={textDim} accent={accent} radius={radius} />
              ))}
            </div>
          </div>

          {/* Right: active pack inspector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, overflow: 'hidden' }}>
              <div style={{ padding: '12px 14px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                <StatusDot color={hudTokens.lime} size={7} pulse />
                <span style={{ fontSize: 13, fontWeight: 600 }}>{activePack.zh}</span>
                <HudLabel color={textDim}>ACTIVE · BROADCASTING</HudLabel>
              </div>
              {/* Live preview */}
              <div style={{
                position: 'relative', height: 180, background: '#0a0a12',
                overflow: 'hidden', borderBottom: `1px solid ${line}`,
              }}>
                <PreviewStrip pack={activePack} />
              </div>
              <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <SpecRow k="配色" v={
                  <div style={{ display: 'flex', gap: 4 }}>
                    {activePack.sw.map((c, i) => (
                      <div key={i} style={{ width: 16, height: 16, borderRadius: 3, background: c, border: `1px solid ${line}` }} />
                    ))}
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginLeft: 4, alignSelf: 'center' }}>
                      {activePack.sw.map(c => c.toUpperCase()).join(' · ')}
                    </span>
                  </div>
                } text={text} textDim={textDim} />
                <SpecRow k="字型" v={activePack.font} text={text} textDim={textDim} />
                <SpecRow k="Layout" v={activePack.layout} text={text} textDim={textDim} />
                <div>
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, color: textDim, marginBottom: 6 }}>特效疊加</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {activePack.effects.length === 0 ? (
                      <span style={{ fontSize: 11, color: textDim }}>— 無特效 —</span>
                    ) : activePack.effects.map(e => (
                      <span key={e} style={{
                        fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5,
                        padding: '3px 8px', borderRadius: 3, border: `1px solid ${accent}`,
                        color: accent, background: hudTokens.cyanSoft,
                      }}>{e}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
              <HudLabel color={textDim}>AUDIENCE OVERRIDE</HudLabel>
              <div style={{ fontSize: 12, color: text, marginTop: 8, lineHeight: 1.5 }}>
                觀眾仍可在 Fire tab 的「主題」欄選擇自己的樣式。主題包只定義 <span style={{ color: accent }}>預設值</span>。
              </div>
              <div style={{ marginTop: 10, display: 'flex', gap: 6 }}>
                <Toggle label="允許覆蓋" on text={text} line={line} accent={accent} />
                <Toggle label="強制鎖定" text={text} line={line} accent={accent} />
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

function ThemePackCard({ pack, panel, raised, line, text, textDim, accent, radius }) {
  const active = pack.active;
  return (
    <div style={{
      background: panel,
      border: `1px solid ${active ? accent : line}`,
      borderRadius: radius, overflow: 'hidden',
      boxShadow: active ? `0 0 0 2px ${hudTokens.cyanSoft}` : 'none',
    }}>
      {/* Preview strip */}
      <div style={{
        position: 'relative', height: 120, background: '#0a0a12',
        overflow: 'hidden', borderBottom: `1px solid ${line}`,
      }}>
        <PreviewStrip pack={pack} compact />
        {active && (
          <div style={{
            position: 'absolute', top: 8, left: 8,
            fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1,
            padding: '2px 8px', borderRadius: 3, background: accent, color: '#000', fontWeight: 700,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <StatusDot color="#000" size={5} pulse />LIVE
          </div>
        )}
      </div>
      {/* Meta */}
      <div style={{ padding: 12 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: text }}>{pack.zh}</div>
          <HudLabel color={textDim}>{pack.en}</HudLabel>
          <span style={{
            marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1,
            padding: '2px 6px', borderRadius: 3,
            border: `1px solid ${line}`,
            color: pack.builtin ? textDim : hudTokens.magenta,
          }}>{pack.builtin ? '內建' : pack.author}</span>
        </div>
        <div style={{ fontSize: 11, color: textDim, marginTop: 4, lineHeight: 1.4 }}>{pack.desc}</div>
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
          {pack.sw.map((c, i) => (
            <div key={i} style={{ width: 14, height: 14, borderRadius: 3, background: c, border: `1px solid ${line}` }} />
          ))}
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5, marginLeft: 4 }}>
            {pack.effects.length} 特效 · {pack.uses.toLocaleString()} 次使用
          </span>
        </div>
        <div style={{ marginTop: 10, display: 'flex', gap: 4 }}>
          {active ? (
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '4px 10px', borderRadius: 3, background: accent, color: '#000', fontWeight: 700 }}>
              ACTIVE
            </span>
          ) : (
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '4px 10px', borderRadius: 3, border: `1px solid ${accent}`, color: accent, cursor: 'pointer' }}>
              APPLY
            </span>
          )}
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '4px 10px', borderRadius: 3, border: `1px solid ${line}`, color: text, cursor: 'pointer' }}>EDIT</span>
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '4px 10px', borderRadius: 3, border: `1px solid ${line}`, color: textDim, cursor: 'pointer' }}>DUP</span>
          <span style={{ marginLeft: 'auto', color: textDim, cursor: 'pointer', fontSize: 14 }}>⋯</span>
        </div>
      </div>
    </div>
  );
}

function PreviewStrip({ pack, compact }) {
  // Mock danmu items styled per pack (背景固定為彈幕示範用暗底,非 theme pack 管控)
  const items = [
    { txt: '太精彩了!', y: 0.2, x: 0.1, col: 0 },
    { txt: '請問這部分可以展開嗎?', y: 0.5, x: 0.4, col: 1 },
    { txt: '🔥🔥 同意', y: 0.75, x: 0.15, col: 2 },
    { txt: '想看 demo', y: 0.35, x: 0.65, col: 0 },
  ].slice(0, compact ? 3 : 4);

  const shadow = {
    default: '0 0 2px rgba(0,0,0,0.9)',
    neon: `0 0 8px ${pack.sw[0]}, 0 0 16px ${pack.sw[0]}`,
    retro: '2px 2px 0 rgba(0,0,0,0.9)',
    cinema: '0 2px 6px rgba(0,0,0,0.95)',
    pride: `0 0 6px ${pack.sw[0]}`,
    study: 'none',
  }[pack.id] || '0 0 2px rgba(0,0,0,0.9)';

  const fontFam = pack.id === 'cinema' ? 'serif' : pack.id === 'retro' ? 'monospace' : hudTokens.fontSans;
  const fontSize = compact ? 13 : 15;

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {items.map((it, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: `${it.y * 100}%`,
          left: `${it.x * 100}%`,
          fontFamily: fontFam,
          fontSize,
          fontWeight: pack.id === 'neon' ? 700 : 600,
          color: it.col === 0 ? '#fff' : pack.sw[it.col],
          textShadow: shadow,
          letterSpacing: pack.id === 'retro' ? 1 : 0,
          whiteSpace: 'nowrap',
          fontStyle: pack.id === 'cinema' ? 'italic' : 'normal',
        }}>{it.txt}</div>
      ))}
    </div>
  );
}

function SpecRow({ k, v, text, textDim }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12 }}>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, color: textDim, width: 50 }}>{k.toUpperCase()}</span>
      <div style={{ color: text, flex: 1 }}>{v}</div>
    </div>
  );
}

function Toggle({ label, on, text, line, accent }) {
  return (
    <div style={{
      flex: 1, padding: '8px 10px', borderRadius: 4,
      border: `1px solid ${on ? accent : line}`,
      background: on ? hudTokens.cyanSoft : 'transparent',
      color: on ? accent : text,
      fontSize: 12, textAlign: 'center', cursor: 'pointer',
      fontFamily: hudTokens.fontMono, letterSpacing: 0.5,
    }}>{label}</div>
  );
}

Object.assign(window, { AdminThemePacksPage });
