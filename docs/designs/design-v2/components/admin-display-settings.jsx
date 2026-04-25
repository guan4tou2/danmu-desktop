// Display Settings — compound row control.
// 每列 = [Audience toggle] + [Default picker] + [Min/Max range if ON].
// OFF 態清楚顯示「觀眾只能用預設值」,無 range editor。

function AdminDisplaySettingsPage({ theme = 'dark' }) {
  const [cfg, setCfg] = React.useState({
    opacity:  { audience: true,  value: 92,  min: 30,  max: 100, step: 1,   unit: '%' },
    fontSize: { audience: true,  value: 32,  min: 14,  max: 64,  step: 2,   unit: 'px' },
    speed:    { audience: false, value: 1.0, min: 0.5, max: 3.0, step: 0.1, unit: '×' },
    color:    { audience: true,  value: '#7DD3FC' },
    font:     { audience: true,  value: 'Noto Sans TC' },
    layout:   { audience: false, value: 'SCROLL' },
  });

  const patch = (k, v) => setCfg(c => ({ ...c, [k]: { ...c[k], ...v } }));

  return (
    <AdminPageShell
      route="display"
      title="顯示設定"
      en="DISPLAY SETTINGS · 每列決定該參數的預設值 + 是否讓觀眾自訂 + 自訂範圍"
      theme={theme}
    >
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
          {/* Left · row list */}
          <div style={{
            background: panel, border: `1px solid ${line}`, borderRadius: radius, overflow: 'hidden',
          }}>
            {/* Table header */}
            <div style={{
              display: 'grid', gridTemplateColumns: '150px 1fr 160px',
              padding: '10px 16px', borderBottom: `1px solid ${line}`, background: raised,
              fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim,
            }}>
              <span>參數 · PARAM</span>
              <span>預設值 · DEFAULT</span>
              <span style={{ textAlign: 'right' }}>觀眾自訂 · AUDIENCE</span>
            </div>

            <CompoundRow
              label="透明度" en="OPACITY" k="opacity" cfg={cfg.opacity} patch={patch}
              tokens={{ panel, raised, line, text, textDim, accent }}
              fmt={v => `${Math.round(v)}%`}
              renderDefault={() => (
                <TrackSlider value={cfg.opacity.value} min={cfg.opacity.min} max={cfg.opacity.max} step={1}
                  onChange={v => patch('opacity', { value: v })} accent={accent} raised={raised} line={line} />
              )}
            />
            <CompoundRow
              label="字級" en="FONT SIZE" k="fontSize" cfg={cfg.fontSize} patch={patch}
              tokens={{ panel, raised, line, text, textDim, accent }}
              fmt={v => `${v}px`}
              renderDefault={() => (
                <div style={{ display: 'flex', gap: 6 }}>
                  {[14, 20, 32, 44, 64].map(s => {
                    const on = cfg.fontSize.value === s;
                    return (
                      <button key={s} onClick={() => patch('fontSize', { value: s })}
                        style={{
                          flex: 1, padding: '6px 0', borderRadius: 4,
                          border: `1px solid ${on ? accent : line}`,
                          background: on ? hudTokens.cyanSoft : 'transparent',
                          color: on ? accent : text,
                          fontFamily: hudTokens.fontMono, fontSize: 11, cursor: 'pointer',
                        }}>{s}</button>
                    );
                  })}
                </div>
              )}
            />
            <CompoundRow
              label="滾動速度" en="SPEED" k="speed" cfg={cfg.speed} patch={patch}
              tokens={{ panel, raised, line, text, textDim, accent }}
              fmt={v => `${(+v).toFixed(1)}×`}
              renderDefault={() => (
                <TrackSlider value={cfg.speed.value} min={cfg.speed.min} max={cfg.speed.max} step={0.1}
                  onChange={v => patch('speed', { value: +v.toFixed(1) })} accent={accent} raised={raised} line={line} />
              )}
            />
            <CompoundRow
              label="顏色" en="COLOR" k="color" cfg={cfg.color} patch={patch}
              tokens={{ panel, raised, line, text, textDim, accent }}
              noRange
              renderDefault={() => (
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['#F8FAFC', '#7DD3FC', '#FCD34D', '#F472B6', '#86EFAC', '#C084FC', '#FB923C', '#FCA5A5'].map(c => {
                    const on = cfg.color.value === c;
                    return (
                      <span key={c} onClick={() => patch('color', { value: c })}
                        style={{
                          width: 28, height: 28, borderRadius: 6, background: c, cursor: 'pointer',
                          border: on ? `2px solid ${accent}` : `1px solid ${line}`,
                          boxShadow: on ? `0 0 0 3px ${hudTokens.cyanSoft}` : 'none',
                        }} />
                    );
                  })}
                </div>
              )}
            />
            <CompoundRow
              label="字型" en="FONT FAMILY" k="font" cfg={cfg.font} patch={patch}
              tokens={{ panel, raised, line, text, textDim, accent }}
              noRange
              renderDefault={() => (
                <select value={cfg.font.value} onChange={e => patch('font', { value: e.target.value })}
                  style={{
                    width: '100%', padding: '8px 10px', borderRadius: 4,
                    background: raised, border: `1px solid ${line}`, color: text,
                    fontFamily: hudTokens.fontSans, fontSize: 13, outline: 'none',
                  }}>
                  {['System UI', 'Noto Sans TC', 'PingFang TC', 'Source Han Sans', 'JetBrains Mono', 'Orbitron', 'Space Grotesk', 'Bebas Neue', 'Inter', '自訂字型檔…'].map(f =>
                    <option key={f}>{f}</option>
                  )}
                </select>
              )}
            />
            <CompoundRow
              label="排版" en="LAYOUT" k="layout" cfg={cfg.layout} patch={patch}
              tokens={{ panel, raised, line, text, textDim, accent }}
              noRange
              last
              renderDefault={() => (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
                  {[
                    { n: 'SCROLL', icon: '→' },
                    { n: 'TOP',    icon: '▀' },
                    { n: 'BOTTOM', icon: '▄' },
                    { n: 'CENTER', icon: '■' },
                    { n: 'SIDE',   icon: '▌' },
                  ].map(l => {
                    const on = cfg.layout.value === l.n;
                    return (
                      <div key={l.n} onClick={() => patch('layout', { value: l.n })}
                        style={{
                          padding: '8px 4px', borderRadius: 4, textAlign: 'center', cursor: 'pointer',
                          border: `1px solid ${on ? accent : line}`,
                          background: on ? hudTokens.cyanSoft : 'transparent',
                          color: on ? accent : text,
                        }}>
                        <div style={{ fontSize: 14, lineHeight: 1 }}>{l.icon}</div>
                        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 8, letterSpacing: 1, marginTop: 3, color: on ? accent : textDim }}>{l.n}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            />
          </div>

          {/* Right rail */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <PreviewCard cfg={cfg} tokens={{ panel, line, textDim, accent, radius }} />
            <DeployCard tokens={{ panel, raised, line, text, textDim, accent, radius }} />
            <SummaryCard cfg={cfg} tokens={{ panel, raised, line, text, textDim, accent, radius }} />
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

// ---------------------------------------------------------------
// CompoundRow — [Param label] + [Default picker] + [Audience toggle + Range]
// ON 態:Default picker 可點,Range editor 顯示在 row 底下
// OFF 態:Default picker 可點(決定給觀眾看的固定值),Range editor 隱藏,顯示 "LOCKED"
function CompoundRow({ label, en, k, cfg, patch, renderDefault, fmt, noRange, last, tokens }) {
  const { raised, line, text, textDim, accent } = tokens;
  const on = cfg.audience;
  const shownVal = fmt && cfg.value != null ? fmt(cfg.value) : (cfg.value ?? '—');

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '150px 1fr 160px',
      alignItems: 'start', padding: '16px', gap: 14,
      borderBottom: last ? 'none' : `1px solid ${line}`,
      background: on ? 'transparent' : 'rgba(148,163,184,0.03)',
      position: 'relative',
    }}>
      {/* Left · param label + current value badge */}
      <div style={{ paddingTop: 2 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: text }}>{label}</div>
        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1.3, marginTop: 2 }}>{en}</div>
        <div style={{
          marginTop: 8, display: 'inline-block',
          padding: '3px 8px', borderRadius: 3,
          background: on ? hudTokens.cyanSoft : raised,
          border: `1px solid ${on ? accent : line}`,
          fontFamily: hudTokens.fontMono, fontSize: 11, fontWeight: 600, letterSpacing: 0.5,
          color: on ? accent : textDim,
        }}>{shownVal}</div>
      </div>

      {/* Middle · default picker (always active — admin 總是能設預設值) */}
      <div style={{ paddingTop: 2 }}>
        <div style={{
          fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1.3,
          marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ color: accent }}>▸</span>
          {on ? '觀眾拖動滑桿時的起始值' : '所有觀眾看到的固定值'}
        </div>
        {renderDefault()}

        {/* Range editor — 只在 audience ON 且有 min/max 時顯示 */}
        {on && !noRange && (
          <div style={{
            marginTop: 14, padding: '10px 12px', background: raised,
            border: `1px dashed ${accent}`, borderRadius: 4,
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, alignItems: 'end',
          }}>
            <RangeCell label="觀眾 MIN" value={cfg.min} step={cfg.step}
              onChange={v => patch(k, { min: +v })} unit={cfg.unit}
              raised={raised} line={line} text={text} textDim={textDim} />
            <RangeCell label="觀眾 MAX" value={cfg.max} step={cfg.step}
              onChange={v => patch(k, { max: +v })} unit={cfg.unit}
              raised={raised} line={line} text={text} textDim={textDim} />
            <RangeCell label="STEP" value={cfg.step} step={cfg.step / 10 || 0.1}
              onChange={v => patch(k, { step: +v })} unit={cfg.unit}
              raised={raised} line={line} text={text} textDim={textDim} />
          </div>
        )}
      </div>

      {/* Right · audience toggle */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
        <AudienceToggle on={on} onToggle={() => patch(k, { audience: !on })}
          accent={accent} line={line} text={text} textDim={textDim} />
        <div style={{
          fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, textAlign: 'right',
          color: on ? accent : textDim, maxWidth: 150, lineHeight: 1.5,
        }}>
          {on ? '觀眾端顯示此欄位' : noRange ? '觀眾看不到選項' : '觀眾看不到 slider'}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// AudienceToggle — 右側大 pill toggle
function AudienceToggle({ on, onToggle, accent, line, text, textDim }) {
  return (
    <button onClick={onToggle} style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '5px 10px 5px 8px', borderRadius: 999,
      background: on ? hudTokens.cyanSoft : 'transparent',
      border: `1px solid ${on ? accent : line}`,
      cursor: 'pointer', color: on ? accent : textDim,
      fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, fontWeight: 700,
    }}>
      <span style={{
        width: 26, height: 14, borderRadius: 8, position: 'relative',
        background: on ? accent : line, transition: 'background .15s',
      }}>
        <span style={{
          position: 'absolute', top: 1, left: on ? 13 : 1,
          width: 12, height: 12, borderRadius: '50%',
          background: on ? '#000' : '#fff', transition: 'left .15s',
        }} />
      </span>
      {on ? '可自訂' : '鎖定'}
    </button>
  );
}

// ---------------------------------------------------------------
// RangeCell — 單一小 input 有 unit
function RangeCell({ label, value, step, onChange, unit, raised, line, text, textDim }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 8, letterSpacing: 1.2, color: textDim }}>{label}</span>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 4,
        padding: '4px 8px', borderRadius: 3,
        background: 'rgba(0,0,0,0.25)', border: `1px solid ${line}`,
      }}>
        <input type="number" value={value} step={step}
          onChange={e => onChange(e.target.value)}
          style={{
            flex: 1, minWidth: 0, padding: 0,
            background: 'transparent', border: 'none', color: text,
            fontFamily: hudTokens.fontMono, fontSize: 12, outline: 'none',
          }} />
        {unit && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim }}>{unit}</span>}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// TrackSlider — clickable track + thumb
function TrackSlider({ value, min = 0, max = 100, step = 1, onChange, accent, raised, line }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ position: 'relative', padding: '12px 0 4px' }}>
      <div style={{ position: 'relative', height: 4, background: raised, borderRadius: 2, border: `1px solid ${line}` }}>
        <div style={{
          position: 'absolute', left: 0, top: -1, height: 4, width: `${pct}%`,
          background: accent, borderRadius: 2,
        }} />
        <div style={{
          position: 'absolute', left: `calc(${pct}% - 8px)`, top: -7, width: 16, height: 16, borderRadius: '50%',
          background: accent, border: '2px solid #0a0e1a', boxShadow: '0 0 0 1px rgba(125,211,252,0.4)',
          pointerEvents: 'none',
        }} />
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange?.(+e.target.value)}
        style={{
          position: 'absolute', left: 0, right: 0, top: 6, width: '100%', height: 20,
          opacity: 0, cursor: 'pointer', margin: 0,
        }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: hudTokens.fontMono, fontSize: 9, color: 'rgba(148,163,184,0.7)', marginTop: 4 }}>
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// PreviewCard — 即時預覽彈幕
function PreviewCard({ cfg, tokens }) {
  const { panel, line, textDim, accent, radius } = tokens;
  const fontSizeVal = typeof cfg.fontSize.value === 'number' ? cfg.fontSize.value : 32;
  const opacityVal = typeof cfg.opacity.value === 'number' ? cfg.opacity.value : 92;
  const speedVal = typeof cfg.speed.value === 'number' ? cfg.speed.value : 1;
  return (
    <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, overflow: 'hidden' }}>
      <div style={{ padding: '10px 14px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 8 }}>
        <HudLabel color={textDim}>LIVE PREVIEW</HudLabel>
        <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 1 }}>
          <StatusDot color={accent} size={5} /> 同步 Overlay
        </span>
      </div>
      <div style={{
        height: 180, background: '#000', position: 'relative', overflow: 'hidden',
        backgroundImage: 'linear-gradient(to right, rgba(125,211,252,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(125,211,252,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}>
        <div style={{
          position: 'absolute', top: 26, left: -20,
          fontSize: Math.min(fontSizeVal, 48), fontWeight: 600,
          color: cfg.color.value || '#7DD3FC',
          textShadow: `0 0 16px ${cfg.color.value ? 'rgba(125,211,252,0.6)' : 'rgba(125,211,252,0.6)'}`,
          fontFamily: hudTokens.fontSans, whiteSpace: 'nowrap',
          opacity: opacityVal / 100,
        }}>
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: Math.min(fontSizeVal, 48) * 0.42, marginRight: 10, verticalAlign: 'middle', color: 'rgba(148,163,184,0.8)' }}>@guest#1284</span>
          這個想法真的很棒 ✨
        </div>
        <div style={{
          position: 'absolute', top: 26 + Math.min(fontSizeVal, 48) + 18, left: 40,
          fontSize: Math.min(fontSizeVal, 48) * 0.75, fontWeight: 500,
          color: '#FCD34D',
          textShadow: '0 0 14px rgba(252,211,77,0.5)',
          fontFamily: hudTokens.fontSans, whiteSpace: 'nowrap',
          opacity: (opacityVal / 100) * 0.9,
        }}>
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: Math.min(fontSizeVal, 48) * 0.34, marginRight: 8, color: 'rgba(148,163,184,0.8)' }}>@annie</span>
          先舉手發問 🙋
        </div>
      </div>
      <div style={{ padding: '10px 14px', borderTop: `1px solid ${line}`, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1, display: 'flex', justifyContent: 'space-between' }}>
        <span>{cfg.layout.value} · {fontSizeVal}px · {speedVal.toFixed(1)}×</span>
        <span style={{ color: accent }}>{opacityVal}% OPACITY</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// DeployCard — 推送動作
function DeployCard({ tokens }) {
  const { panel, raised, line, text, textDim, accent, radius } = tokens;
  return (
    <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
      <CardHeader title="推送動作" en="DEPLOY" textDim={textDim} />
      <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
        <button style={{
          flex: 1, padding: '10px', borderRadius: 4, border: `1px solid ${accent}`,
          background: accent, color: '#000', cursor: 'pointer',
          fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5, fontWeight: 700,
        }}>▶ 即時套用</button>
        <button style={{
          padding: '10px 14px', borderRadius: 4, border: `1px solid ${line}`,
          background: 'transparent', color: text, cursor: 'pointer',
          fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1,
        }}>還原預設</button>
      </div>
      <div style={{ marginTop: 8, fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5 }}>
        即時同步到 overlay · 觀眾端下次刷新 viewer 生效
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// SummaryCard — 目前哪些參數開啟 audience
function SummaryCard({ cfg, tokens }) {
  const { panel, raised, line, text, textDim, accent, radius } = tokens;
  const entries = [
    { k: 'opacity',  label: '透明度' },
    { k: 'fontSize', label: '字級' },
    { k: 'speed',    label: '滾動速度' },
    { k: 'color',    label: '顏色' },
    { k: 'font',     label: '字型' },
    { k: 'layout',   label: '排版' },
  ];
  const on = entries.filter(e => cfg[e.k].audience).length;
  return (
    <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
      <CardHeader title="觀眾端摘要" en={`AUDIENCE · ${on}/6 OPEN`} textDim={textDim} />
      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {entries.map(e => {
          const open = cfg[e.k].audience;
          return (
            <div key={e.k} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 10px', borderRadius: 3,
              background: open ? hudTokens.cyanSoft : raised,
              border: `1px solid ${open ? accent : line}`,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: open ? accent : textDim,
                boxShadow: open ? `0 0 8px ${accent}` : 'none',
              }} />
              <span style={{ fontSize: 12, color: open ? text : textDim, fontWeight: open ? 600 : 400 }}>{e.label}</span>
              <span style={{
                marginLeft: 'auto',
                fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1,
                color: open ? accent : textDim,
              }}>{open ? '觀眾可改' : '鎖定'}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, { AdminDisplaySettingsPage });
