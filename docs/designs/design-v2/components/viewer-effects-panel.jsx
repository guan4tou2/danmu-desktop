// DS-004 · Viewer Effects parameter panel
// Two artboards covering dark / light × bounce / blink — per design-handoff-needs-2026-04-28.md
//
// What this is: the panel an operator opens after picking an effect from the library
// (AdminEffectsPage). It tunes per-effect runtime params, shows a live preview of the
// effect on a sample danmu, and previews against both background contexts.

const _fx = {
  // dark tokens
  darkBg:        '#0B1020',
  darkPanel:     '#0F1421',
  darkRaised:    '#13192C',
  darkLine:      '#1F2944',
  darkLineSoft:  '#1A2238',
  darkText:      '#E6E8EE',
  darkTextDim:   '#9aa4b2',
  darkTextMute:  '#6b7385',

  // light tokens
  lightBg:       '#F4F6FA',
  lightPanel:    '#FFFFFF',
  lightRaised:   '#F8FAFC',
  lightLine:     '#E2E8F0',
  lightLineSoft: '#EDF1F7',
  lightText:     '#0F172A',
  lightTextDim:  '#475569',
  lightTextMute: '#94A3B8',

  // shared accents
  cyan:     '#38bdf8',
  cyanLine: 'rgba(56,189,248,0.45)',
  lime:     '#84cc16',
  amber:    '#fbbf24',
  magenta:  '#f472b6',
  crimson:  '#f43f5e',

  fontSans:    '"Noto Sans TC", "Zen Kaku Gothic New", -apple-system, system-ui, sans-serif',
  fontMono:    '"IBM Plex Mono", ui-monospace, monospace',
  fontDisplay: '"Zen Kaku Gothic New", "Noto Sans TC", sans-serif',
};

function _fxTokens(theme) {
  const dark = theme === 'dark';
  return {
    bg:       dark ? _fx.darkBg : _fx.lightBg,
    panel:    dark ? _fx.darkPanel : _fx.lightPanel,
    raised:   dark ? _fx.darkRaised : _fx.lightRaised,
    line:     dark ? _fx.darkLine : _fx.lightLine,
    lineSoft: dark ? _fx.darkLineSoft : _fx.lightLineSoft,
    text:     dark ? _fx.darkText : _fx.lightText,
    textDim:  dark ? _fx.darkTextDim : _fx.lightTextDim,
    textMute: dark ? _fx.darkTextMute : _fx.lightTextMute,
    accent:   _fx.cyan,
    accentSoft: dark ? 'rgba(56,189,248,0.12)' : 'rgba(56,189,248,0.10)',
    panelShadow: dark ? 'none' : '0 1px 2px rgba(15,23,42,0.04)',
  };
}

function _FxChip({ tone = 'mute', children, t }) {
  const colorMap = {
    cyan:    { fg: _fx.cyan,    bg: 'rgba(56,189,248,0.12)',  br: _fx.cyanLine },
    lime:    { fg: _fx.lime,    bg: 'rgba(132,204,22,0.13)',  br: 'rgba(132,204,22,0.45)' },
    amber:   { fg: _fx.amber,   bg: 'rgba(251,191,36,0.13)',  br: 'rgba(251,191,36,0.45)' },
    crimson: { fg: _fx.crimson, bg: 'rgba(244,63,94,0.13)',   br: 'rgba(244,63,94,0.45)' },
    mute:    { fg: t.textMute,  bg: 'transparent',            br: t.line },
  }[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '2px 7px', borderRadius: 2,
      background: colorMap.bg, color: colorMap.fg, border: `1px solid ${colorMap.br}`,
      fontFamily: _fx.fontMono, fontSize: 9.5, letterSpacing: 1, fontWeight: 600,
    }}>{children}</span>
  );
}

function _FxSlider({ t, label, unit, value, min, max, knobAt }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 11, color: t.text, fontWeight: 500 }}>{label}</span>
        <span style={{ fontFamily: _fx.fontMono, fontSize: 11, color: t.text, letterSpacing: 0.3 }}>
          {value}
          <span style={{ color: t.textMute, marginLeft: 3 }}>{unit}</span>
        </span>
      </div>
      <div style={{ position: 'relative', height: 6, background: t.raised, border: `1px solid ${t.line}`, borderRadius: 3 }}>
        <div style={{ position: 'absolute', left: 0, top: -1, bottom: -1, width: `${pct}%`, background: t.accent, borderRadius: 3, opacity: 0.85 }} />
        <div style={{
          position: 'absolute', left: `calc(${pct}% - 7px)`, top: -5,
          width: 14, height: 14, borderRadius: '50%',
          background: t.panel, border: `2px solid ${t.accent}`,
          boxShadow: `0 0 8px ${t.accent}66`,
        }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, fontFamily: _fx.fontMono, fontSize: 9, color: t.textMute, letterSpacing: 0.3 }}>
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
}

function _FxRadio({ t, label, options, picked }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: t.text, fontWeight: 500, marginBottom: 8 }}>{label}</div>
      <div style={{ display: 'flex', background: t.raised, border: `1px solid ${t.line}`, borderRadius: 3, padding: 2 }}>
        {options.map((o) => (
          <button key={o} type="button" style={{
            flex: 1, padding: '6px 10px',
            border: 'none', cursor: 'pointer',
            background: o === picked ? t.accent : 'transparent',
            color: o === picked ? (t === _fxTokens('dark') ? '#0B1020' : '#FFFFFF') : t.textDim,
            fontFamily: _fx.fontMono, fontSize: 10, letterSpacing: 0.5, fontWeight: 600,
            borderRadius: 2, transition: 'all 120ms',
          }}>{o}</button>
        ))}
      </div>
    </div>
  );
}

function _FxColor({ t, label, color }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: t.text, fontWeight: 500, marginBottom: 8 }}>{label}</div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
        background: t.raised, border: `1px solid ${t.line}`, borderRadius: 3,
      }}>
        <div style={{ width: 24, height: 24, borderRadius: 3, background: color, border: `1px solid ${t.line}`, flexShrink: 0 }} />
        <span style={{ fontFamily: _fx.fontMono, fontSize: 11, color: t.text, letterSpacing: 0.3, flex: 1 }}>{color}</span>
        <_FxChip t={t} tone="mute">PICK</_FxChip>
      </div>
    </div>
  );
}

function _FxToggle({ t, label, on, hint }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 11, color: t.text, fontWeight: 500 }}>{label}</div>
        {hint && <div style={{ fontSize: 10, color: t.textMute, marginTop: 2, lineHeight: 1.45 }}>{hint}</div>}
      </div>
      <div style={{
        flexShrink: 0, width: 32, height: 18, borderRadius: 10, padding: 2,
        background: on ? t.accent : t.raised, border: `1px solid ${on ? t.accent : t.line}`,
        display: 'flex', alignItems: 'center',
        transition: 'background 150ms',
      }}>
        <div style={{
          width: 12, height: 12, borderRadius: '50%', background: on ? '#0B1020' : t.textDim,
          transform: on ? 'translateX(14px)' : 'translateX(0)', transition: 'transform 150ms',
        }} />
      </div>
    </div>
  );
}

// ── live preview chip ─────────────────────────────────────────────────────
function _FxPreviewChip({ t, kind, bgKind, text = '舉手 +1', amplitude, rate, color }) {
  const bg = bgKind === 'dark' ? '#0B0E18' : bgKind === 'light' ? '#F8FAFC' : 'transparent';
  const stripe = bgKind === 'photo' ? `linear-gradient(135deg, #5B5142 0%, #886A45 30%, #4A6B82 60%, #2D3F58 100%)` : null;
  const shadow = kind === 'glow' ? `0 0 ${amplitude}px ${color}` : 'none';

  // animation keyframes are inlined per-instance via a unique class
  const animName = `fx_${kind}_${Math.round(amplitude * 10)}_${Math.round(rate * 100)}`;
  const css = kind === 'bounce'
    ? `@keyframes ${animName} { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-${amplitude}px); } }`
    : `@keyframes ${animName} { 0%,100% { opacity: 1; } 50% { opacity: ${1 - amplitude / 100}; } }`;
  const dur = (1 / rate).toFixed(2) + 's';

  return (
    <div style={{
      flex: 1, position: 'relative', borderRadius: 4, overflow: 'hidden',
      background: stripe || bg, border: `1px solid ${t.line}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: 132,
    }}>
      <style>{css}</style>
      {/* corner labels */}
      <span style={{
        position: 'absolute', top: 6, left: 8, fontFamily: _fx.fontMono, fontSize: 8.5,
        color: bgKind === 'dark' ? '#9aa4b2' : '#94A3B8', letterSpacing: 1.2,
      }}>BG · {bgKind.toUpperCase()}</span>
      <span style={{
        position: 'absolute', top: 6, right: 8, fontFamily: _fx.fontMono, fontSize: 8.5,
        color: bgKind === 'dark' ? '#6b7385' : '#94A3B8', letterSpacing: 1.2,
      }}>{rate}× · {amplitude}{kind === 'bounce' ? 'px' : '%'}</span>
      {/* sample danmu */}
      <div style={{
        fontFamily: _fx.fontDisplay, fontSize: 26, fontWeight: 700,
        color: color, textShadow: shadow,
        animation: `${animName} ${dur} ease-in-out infinite`,
        letterSpacing: 0.5,
      }}>{text}</div>
    </div>
  );
}

// ── main artboard ─────────────────────────────────────────────────────────
function ViewerEffectsParamPanel({ theme = 'dark', effect = 'bounce-cartoon' }) {
  const t = _fxTokens(theme);
  const isDark = theme === 'dark';

  // params per effect
  const ef = effect === 'bounce-cartoon'
    ? {
        cat: 'MOTION', kind: 'bounce', ver: '0.2.0', author: '@kairi',
        defs: { amplitude: 14, rate: 1.6, color: '#FFD93D', easing: 'ease-in-out', loop: true, fadeOut: false },
        sliders: [
          { k: 'amplitude', label: '振幅', unit: 'px', min: 0, max: 40 },
          { k: 'rate',      label: '頻率', unit: '×',  min: 0.2, max: 4 },
        ],
        warn: '振幅 > 30px 在低端裝置可能掉幀(< 50fps),建議 ≤ 24px',
        warnTone: amp => amp > 30 ? 'crimson' : amp > 24 ? 'amber' : 'lime',
      }
    : {
        cat: 'COLOR', kind: 'blink', ver: '1.0.0', author: 'built-in',
        defs: { amplitude: 60, rate: 2.0, color: '#FF4D6D', easing: 'linear', loop: true, fadeOut: true },
        sliders: [
          { k: 'amplitude', label: '透明度差距', unit: '%', min: 10, max: 90 },
          { k: 'rate',      label: '頻率',      unit: '×',  min: 0.5, max: 6 },
        ],
        warn: '頻率 > 4× 可能誘發光敏性癲癇,WCAG 2.1 SC 2.3.1 警告',
        warnTone: rate => rate > 4 ? 'crimson' : rate > 3 ? 'amber' : 'lime',
      };

  const params = ef.defs;
  const tone = ef.kind === 'bounce' ? ef.warnTone(params.amplitude) : ef.warnTone(params.rate);

  return (
    <div style={{
      width: 1440, height: 920, background: t.bg, color: t.text,
      fontFamily: _fx.fontSans, padding: '24px 28px',
      display: 'flex', flexDirection: 'column', gap: 18,
      boxSizing: 'border-box',
    }}>
      {/* breadcrumb topbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontFamily: _fx.fontMono, fontSize: 10, color: t.textMute, letterSpacing: 1.3 }}>
          #/effects → {effect} → 參數調整
        </span>
        <span style={{ flex: 1 }} />
        <_FxChip t={t} tone="mute">{ef.cat}</_FxChip>
        <_FxChip t={t} tone="mute">v{ef.ver}</_FxChip>
        <_FxChip t={t} tone="mute">{ef.author}</_FxChip>
        <_FxChip t={t} tone="cyan">⌘S 儲存</_FxChip>
      </div>

      {/* header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
        <div>
          <div style={{ fontFamily: _fx.fontMono, fontSize: 10, letterSpacing: 2.2, color: t.accent }}>
            DS-004 · VIEWER EFFECTS · PARAM PANEL
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, marginTop: 6, letterSpacing: -0.3 }}>
            {effect}
            <span style={{ fontFamily: _fx.fontMono, fontSize: 13, color: t.textDim, marginLeft: 14, fontWeight: 400, letterSpacing: 0.5 }}>
              · {ef.kind === 'bounce' ? '彈跳' : '閃爍'} · {theme.toUpperCase()} 模式
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{
            padding: '8px 14px', borderRadius: 3, border: `1px solid ${t.line}`,
            background: t.panel, fontFamily: _fx.fontMono, fontSize: 11, color: t.textDim, letterSpacing: 0.8,
            cursor: 'pointer',
          }}>↺ 還原預設</span>
          <span style={{
            padding: '8px 14px', borderRadius: 3,
            background: t.accent, color: isDark ? '#0B1020' : '#FFFFFF',
            fontFamily: _fx.fontMono, fontSize: 11, letterSpacing: 0.8, fontWeight: 600,
            cursor: 'pointer',
          }}>套用到 overlay</span>
        </div>
      </div>

      {/* main grid: params (left) + preview (right) */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '380px 1fr', gap: 18, minHeight: 0 }}>
        {/* LEFT — param panel */}
        <div style={{
          background: t.panel, border: `1px solid ${t.line}`, borderRadius: 4,
          padding: 18, display: 'flex', flexDirection: 'column', gap: 16,
          boxShadow: t.panelShadow, overflow: 'auto',
        }}>
          <div>
            <div style={{ fontFamily: _fx.fontMono, fontSize: 10, color: t.textDim, letterSpacing: 1.5, marginBottom: 10 }}>
              §1 · 動態參數
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {ef.sliders.map((s) => (
                <_FxSlider key={s.k} t={t} {...s} value={params[s.k]} />
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: t.line }} />

          <div>
            <div style={{ fontFamily: _fx.fontMono, fontSize: 10, color: t.textDim, letterSpacing: 1.5, marginBottom: 10 }}>
              §2 · 視覺
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <_FxColor t={t} label="主色" color={params.color} />
              <_FxRadio t={t} label="緩動曲線" options={['linear', 'ease-in-out', 'spring']} picked={params.easing} />
            </div>
          </div>

          <div style={{ height: 1, background: t.line }} />

          <div>
            <div style={{ fontFamily: _fx.fontMono, fontSize: 10, color: t.textDim, letterSpacing: 1.5, marginBottom: 10 }}>
              §3 · 行為
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <_FxToggle t={t} label="無限循環" on={params.loop} hint="關閉則播放一次,2 秒後淡出" />
              <_FxToggle t={t} label="尾段淡出" on={params.fadeOut} hint="最後 200ms 從 100% → 0% 透明度" />
            </div>
          </div>

          {/* warn box bottom */}
          <div style={{
            marginTop: 'auto', padding: 10, borderRadius: 3,
            background: tone === 'crimson' ? 'rgba(244,63,94,0.10)' : tone === 'amber' ? 'rgba(251,191,36,0.10)' : 'rgba(132,204,22,0.10)',
            border: `1px solid ${tone === 'crimson' ? 'rgba(244,63,94,0.45)' : tone === 'amber' ? 'rgba(251,191,36,0.45)' : 'rgba(132,204,22,0.45)'}`,
            display: 'flex', gap: 8, alignItems: 'flex-start',
          }}>
            <_FxChip t={t} tone={tone}>{tone === 'crimson' ? 'BLOCK' : tone === 'amber' ? 'WARN' : 'OK'}</_FxChip>
            <span style={{ fontSize: 10.5, color: t.text, lineHeight: 1.55, flex: 1 }}>{ef.warn}</span>
          </div>
        </div>

        {/* RIGHT — preview matrix */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
          {/* preview header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '10px 14px', background: t.panel, border: `1px solid ${t.line}`, borderRadius: 4,
            boxShadow: t.panelShadow,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: _fx.fontMono, fontSize: 10, color: t.textDim, letterSpacing: 1.5 }}>
                LIVE PREVIEW · 3 BACKGROUND CONTEXTS
              </span>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <_FxChip t={t} tone="lime">●  60 fps</_FxChip>
              <_FxChip t={t} tone="mute">M2 · macOS 14</_FxChip>
            </div>
          </div>

          {/* 3 preview chips */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, flex: 1, minHeight: 0 }}>
            {['dark', 'light', 'photo'].map((bg) => (
              <_FxPreviewChip
                key={bg} t={t} kind={ef.kind} bgKind={bg}
                amplitude={params.amplitude} rate={params.rate} color={params.color}
              />
            ))}
          </div>

          {/* metrics row */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10,
          }}>
            {[
              { l: 'GPU 負載',     v: ef.kind === 'bounce' ? '6.2' : '2.1', u: '%',  tone: 'lime' },
              { l: 'CPU thread',  v: ef.kind === 'bounce' ? '12'  : '4',   u: '%',  tone: 'lime' },
              { l: '同屏支援',    v: ef.kind === 'bounce' ? '120' : '300', u: '個', tone: 'cyan' },
              { l: 'WCAG 等級',   v: ef.kind === 'blink' && params.rate > 3 ? 'FAIL' : 'AA',  u: '',  tone: ef.kind === 'blink' && params.rate > 3 ? 'crimson' : 'lime' },
            ].map((m, i) => (
              <div key={i} style={{
                background: t.panel, border: `1px solid ${t.line}`, borderRadius: 4,
                padding: '10px 12px', boxShadow: t.panelShadow,
              }}>
                <div style={{ fontFamily: _fx.fontMono, fontSize: 9, color: t.textMute, letterSpacing: 1.2 }}>{m.l.toUpperCase()}</div>
                <div style={{ marginTop: 4, display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ fontFamily: _fx.fontDisplay, fontSize: 22, fontWeight: 700, color: m.tone === 'crimson' ? _fx.crimson : m.tone === 'cyan' ? _fx.cyan : _fx.lime, letterSpacing: -0.5 }}>{m.v}</span>
                  {m.u && <span style={{ fontFamily: _fx.fontMono, fontSize: 11, color: t.textDim }}>{m.u}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* footer notes */}
          <div style={{
            padding: '10px 14px', background: t.raised, border: `1px solid ${t.line}`, borderRadius: 3,
            fontSize: 10.5, color: t.textDim, lineHeight: 1.6,
          }}>
            <span style={{ color: t.text, fontWeight: 600 }}>備註 ·</span> 預覽即時反映 slider 變動,儲存後熱重載到所有 overlay,不中斷進行中的場次。WCAG 失敗時「套用」按鈕鎖定。
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ViewerEffectsParamPanel });
