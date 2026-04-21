// Viewer — "Danmu Fire" launcher (user-facing send page).
// Full parity with original danmu-desktop user page:
//   nickname, text, color, stroke, shadow, effects (stackable),
//   layout pick, theme, A/B/C poll shortcut — + opacity/font-size/font-family extras.
// Conference Q&A rules: send-only, no live feed from others.
// Poll + quick-replies CONDITIONAL on admin enabling.
// Poll has NO % during voting.

function ViewerMobile({ theme = 'dark', pollEnabled = true, quickEnabled = true, inBrowser = false }) {
  return <ViewerCore theme={theme} pollEnabled={pollEnabled} quickEnabled={quickEnabled} form="mobile" inBrowser={inBrowser} />;
}
function ViewerDesktop({ theme = 'dark', pollEnabled = true, quickEnabled = true, inBrowser = false }) {
  return <ViewerCore theme={theme} pollEnabled={pollEnabled} quickEnabled={quickEnabled} form="desktop" inBrowser={inBrowser} />;
}

function ViewerCore({ theme, pollEnabled, quickEnabled, form, inBrowser }) {
  const isDark = theme === 'dark';
  const bg = isDark ? hudTokens.bg0 : hudTokens.lightBg0;
  const panel = isDark ? hudTokens.bg1 : '#fff';
  const raised = isDark ? hudTokens.bg2 : hudTokens.lightBg2;
  const line = isDark ? hudTokens.line : hudTokens.lightLine;
  const text = isDark ? hudTokens.text : hudTokens.lightText;
  const textDim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  const accent = hudTokens.cyan;

  const [nick, setNick] = React.useState('guest#1284');
  const [msg, setMsg] = React.useState('');
  const [color, setColor] = React.useState('#ffffff');
  const [stroke, setStroke] = React.useState(true);
  const [shadow, setShadow] = React.useState(true);
  const [fontSize, setFontSize] = React.useState(32);
  const [opacity, setOpacity] = React.useState(100);
  const [speed, setSpeed] = React.useState(1.0);
  const [sticker, setSticker] = React.useState(null);
  const [fontFamily, setFontFamily] = React.useState('Zen Kaku Gothic New');
  const [effects, setEffects] = React.useState(['glow']);
  const [layout, setLayout] = React.useState('scroll');
  const [themeSel, setThemeSel] = React.useState('default');
  const [tab, setTab] = React.useState('fire');

  const toggleEffect = (e) =>
    setEffects(es => es.includes(e) ? es.filter(x => x !== e) : [...es, e]);

  const isMobile = form === 'mobile';
  const width = inBrowser ? '100%' : (isMobile ? 375 : '100%');
  const height = inBrowser ? '100%' : (isMobile ? 812 : '100%');
  const pad = isMobile ? 16 : 24;

  return (
    <div style={{
      width, height, background: bg, color: text,
      fontFamily: hudTokens.fontSans, display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative',
    }}>
      {isMobile && !inBrowser && (
        <div style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', fontFamily: hudTokens.fontMono, fontSize: 13, fontWeight: 600 }}>
          <span>14:02</span>
          <span style={{ fontSize: 11, color: textDim }}>● ● ● ●</span>
        </div>
      )}

      {/* Minimal header — logo + session name + subtle connected dot. No numbers. */}
      <div style={{
        padding: isMobile ? '10px 20px 12px' : '14px 24px',
        borderBottom: `1px solid ${line}`,
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: 6,
          background: `linear-gradient(135deg, ${accent}, ${hudTokens.magenta})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#000', fontFamily: hudTokens.fontDisplay, fontWeight: 700, fontSize: 13,
        }}>弾</div>
        <div style={{ flex: 1, minWidth: 0, fontSize: 13, fontWeight: 600, lineHeight: 1.2 }}>Danmu Fire</div>
        <StatusDot color={accent} size={7} />
      </div>

      {/* Tabs — Fire / Poll. Poll tab only if enabled. */}
      <div style={{ display: 'flex', borderBottom: `1px solid ${line}`, padding: `0 ${pad}px`, gap: 20 }}>
        <TabBtn active={tab === 'fire'} onClick={() => setTab('fire')} text={text} textDim={textDim} accent={accent}>
          發射 · FIRE
        </TabBtn>
        {pollEnabled && (
          <TabBtn active={tab === 'poll'} onClick={() => setTab('poll')} text={text} textDim={textDim} accent={accent}>
            投票 · POLL
            <StatusDot color={hudTokens.magenta} size={5} style={{ marginLeft: 6 }} />
          </TabBtn>
        )}
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: `${pad}px ${pad}px ${pad + 6}px`, minHeight: 0 }}>
        {tab === 'fire' && (
          <FireTab {...{ isMobile, nick, setNick, msg, setMsg, color, setColor, stroke, setStroke, shadow, setShadow, fontSize, setFontSize, opacity, setOpacity, speed, setSpeed, sticker, setSticker, fontFamily, setFontFamily, effects, toggleEffect, layout, setLayout, themeSel, setThemeSel, panel, raised, line, text, textDim, accent, isDark, quickEnabled }} />
        )}
        {tab === 'poll' && pollEnabled && (
          <PollTab {...{ line, accent, text, textDim, panel, raised, isDark, isMobile }} />
        )}
      </div>

      {/* Send bar — always */}
      {tab === 'fire' && (
        <div style={{ padding: `10px ${pad - 4}px 12px`, borderTop: `1px solid ${line}`, background: panel }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '4px 4px 4px 14px', borderRadius: 999,
            border: `1px solid ${msg ? accent : line}`,
            background: isDark ? hudTokens.bg0 : hudTokens.lightBg2,
          }}>
            <input
              value={msg}
              onChange={e => setMsg(e.target.value)}
              placeholder={pollEnabled ? '輸入訊息或 A / B / C 投票…' : '想對現場說點什麼？'}
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                color, fontSize: 14, padding: '10px 0', fontFamily: hudTokens.fontSans,
                fontWeight: 500,
                textShadow: shadow ? '0 1px 2px rgba(0,0,0,0.55)' : 'none',
                WebkitTextStroke: stroke ? `0.6px ${isDark ? '#000' : '#000'}` : 'none',
              }}
            />
            <button style={{
              padding: '9px 16px', borderRadius: 999,
              background: msg ? accent : raised,
              border: 'none', color: msg ? '#000' : textDim,
              cursor: msg ? 'pointer' : 'default', fontSize: 12, fontWeight: 700,
              fontFamily: hudTokens.fontMono, letterSpacing: 1.5,
            }}>FIRE ▶</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1, padding: '0 4px' }}>
            <span>Enter 送出 · 1 則 / 3 秒</span>
            <span>{msg.length}/80</span>
          </div>
        </div>
      )}
      {isMobile && !inBrowser && <div style={{ height: 20, background: panel }} />}
    </div>
  );
}

function TabBtn({ active, onClick, text, textDim, accent, children }) {
  return (
    <button onClick={onClick} style={{
      padding: '12px 0', background: 'transparent', border: 'none', cursor: 'pointer',
      color: active ? accent : textDim,
      fontSize: 12, fontFamily: hudTokens.fontMono, letterSpacing: 1.5, fontWeight: 600,
      borderBottom: `2px solid ${active ? accent : 'transparent'}`,
      display: 'flex', alignItems: 'center',
    }}>{children}</button>
  );
}

function FireTab({
  isMobile, nick, setNick, msg, color, setColor, stroke, setStroke, shadow, setShadow,
  fontSize, setFontSize, opacity, setOpacity, speed, setSpeed, sticker, setSticker,
  fontFamily, setFontFamily,
  effects, toggleEffect, layout, setLayout, themeSel, setThemeSel,
  panel, raised, line, text, textDim, accent, isDark, quickEnabled,
}) {
  const colors = ['#ffffff', accent, hudTokens.magenta, hudTokens.amber, hudTokens.lime, hudTokens.crimson, '#ffd166', '#000000'];
  const effectList = [
    { e: 'glow', zh: '發光' }, { e: 'shake', zh: '震動' }, { e: 'wave', zh: '波浪' },
    { e: 'rainbow', zh: '彩虹' }, { e: 'spin', zh: '旋轉' }, { e: 'bounce', zh: '彈跳' },
    { e: 'blink', zh: '閃爍' }, { e: 'zoom', zh: '縮放' },
  ];
  const layouts = [
    { k: 'scroll', zh: '滾動' }, { k: 'top', zh: '頂部' }, { k: 'bottom', zh: '底部' },
    { k: 'float', zh: '隨機' }, { k: 'rise', zh: '上升' },
  ];
  const themes = [
    { k: 'default', zh: '預設',  en: 'DEFAULT', sw: ['#ffffff', '#3dd5f3', '#e879f9'] },
    { k: 'neon',    zh: '霓虹',  en: 'NEON',    sw: ['#39ff14', '#ff007a', '#00e7ff'] },
    { k: 'retro',   zh: '復古',  en: 'RETRO',   sw: ['#f4d35e', '#ee964b', '#f95738'] },
    { k: 'cinema',  zh: '電影',  en: 'CINEMA',  sw: ['#ffcc70', '#e07a5f', '#2a9d8f'] },
  ];
  const stickerPacks = [
    { k: 'reaction', zh: '反應', list: ['👏', '🔥', '💯', '🤔', '❤️', '😂', '😮', '🙌'] },
    { k: 'vote',     zh: '表決', list: ['✅', '❌', '👍', '👎', '🙋', '❓'] },
    { k: 'mood',     zh: '氣氛', list: ['🎉', '✨', '🙏', '💡', '⚡', '💀', '🌟', '👁️'] },
  ];
  const [stickerPack, setStickerPack] = React.useState('reaction');
  const currentPack = stickerPacks.find(p => p.k === stickerPack);
  const fonts = [
    'Zen Kaku Gothic New', 'Noto Sans TC', 'Chakra Petch', 'IBM Plex Mono',
    'Source Han Sans', 'Source Han Serif', 'LXGW WenKai',
    'Arial', 'Georgia', 'Courier New',
  ];

  return (
    <>
      {/* Live preview strip */}
      <div style={{
        background: isDark ? 'oklch(0.08 0.01 250)' : 'oklch(0.14 0.02 250)',
        borderRadius: 8, padding: '18px 14px', marginBottom: 16,
        border: `1px solid ${line}`,
        position: 'relative', overflow: 'hidden', minHeight: 72,
      }}>
        <div style={{
          position: 'absolute', top: 6, left: 10, fontFamily: hudTokens.fontMono, fontSize: 9,
          color: 'oklch(0.72 0.015 240 / 0.6)', letterSpacing: 1.5,
        }}>PREVIEW · 你送出的樣子</div>
        <div style={{
          marginTop: 10,
          fontSize,
          fontFamily,
          fontWeight: 600,
          color,
          opacity: opacity / 100,
          textShadow: shadow ? `0 2px 4px rgba(0,0,0,0.55), 0 0 8px ${effects.includes('glow') ? color : 'transparent'}` : 'none',
          WebkitTextStroke: stroke ? '1px #000' : 'none',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          display: 'flex', alignItems: 'baseline', gap: 10,
        }}>
          <span style={{
            fontSize: Math.max(11, fontSize * 0.42),
            fontFamily: hudTokens.fontMono,
            fontWeight: 500,
            opacity: 0.75,
            letterSpacing: 0.5,
            WebkitTextStroke: 'inherit',
          }}>@{nick}</span>
          <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {sticker && <span style={{ marginRight: 8 }}>{sticker}</span>}
            {msg || (sticker ? '' : '示例彈幕文字')}
          </span>
        </div>
      </div>

      <Field label="暱稱 · NICKNAME" textDim={textDim}>
        <input value={nick} onChange={e => setNick(e.target.value)} style={inputStyle({ line, text, raised, isDark })} />
      </Field>

      <Field label="顏色 · COLOR" textDim={textDim}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {colors.map(c => (
            <button key={c} onClick={() => setColor(c)} style={{
              width: 28, height: 28, borderRadius: '50%', background: c, cursor: 'pointer',
              border: color === c ? `2px solid ${accent}` : `1px solid ${line}`,
              outline: color === c ? `1px solid ${accent}` : 'none', outlineOffset: 2,
            }} />
          ))}
          <label style={{
            width: 28, height: 28, borderRadius: '50%', cursor: 'pointer',
            border: `1px dashed ${line}`, color: textDim,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontFamily: hudTokens.fontMono,
          }}>
            +<input type="color" value={color} onChange={e => setColor(e.target.value)} style={{ display: 'none' }} />
          </label>
        </div>
      </Field>

      <Field label="字型 · FONT FAMILY" textDim={textDim}>
        <div style={{ position: 'relative' }}>
          <select value={fontFamily} onChange={e => setFontFamily(e.target.value)} style={{
            width: '100%', padding: '9px 34px 9px 12px', borderRadius: 6,
            background: raised, border: `1px solid ${line}`, color: text,
            fontFamily, fontSize: 13, outline: 'none', cursor: 'pointer',
            appearance: 'none', WebkitAppearance: 'none',
          }}>
            {fonts.map(f => (
              <option key={f} value={f} style={{ fontFamily: f }}>{f}</option>
            ))}
          </select>
          <span style={{
            position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
            pointerEvents: 'none', color: textDim, fontFamily: hudTokens.fontMono, fontSize: 10,
          }}>▾</span>
        </div>
      </Field>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        <Field label={`字級 · ${fontSize}px`} textDim={textDim} nomb>
          <input type="range" min="16" max="64" value={fontSize} onChange={e => setFontSize(+e.target.value)} style={rangeStyle(accent, line)} />
        </Field>
        <Field label={`透明度 · ${opacity}%`} textDim={textDim} nomb>
          <input type="range" min="20" max="100" value={opacity} onChange={e => setOpacity(+e.target.value)} style={rangeStyle(accent, line)} />
        </Field>
      </div>

      <Field label={`速度 · SPEED · ${speed.toFixed(1)}x`} textDim={textDim}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <input type="range" min="0.5" max="3" step="0.1" value={speed} onChange={e => setSpeed(+e.target.value)} style={{ ...rangeStyle(accent, line), flex: 1 }} />
          <div style={{ display: 'flex', gap: 4 }}>
            {[0.5, 1.0, 1.5, 2.0].map(s => (
              <button key={s} onClick={() => setSpeed(s)} style={{
                padding: '4px 8px', borderRadius: 4, cursor: 'pointer',
                border: `1px solid ${Math.abs(speed - s) < 0.05 ? accent : line}`,
                background: Math.abs(speed - s) < 0.05 ? hudTokens.cyanSoft : 'transparent',
                color: Math.abs(speed - s) < 0.05 ? accent : textDim,
                fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5,
              }}>{s.toFixed(1)}x</button>
            ))}
          </div>
        </div>
      </Field>

      <Field label="描邊 & 陰影 · STROKE · SHADOW" textDim={textDim}>
        <div style={{ display: 'flex', gap: 8 }}>
          <ToggleChip on={stroke} onClick={() => setStroke(!stroke)} accent={accent} line={line} text={text} textDim={textDim}>文字描邊</ToggleChip>
          <ToggleChip on={shadow} onClick={() => setShadow(!shadow)} accent={accent} line={line} text={text} textDim={textDim}>文字陰影</ToggleChip>
        </div>
      </Field>

      <Field label={`效果 · EFFECTS · 已選 ${effects.length} · 可疊加`} textDim={textDim}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {effectList.map(x => (
            <button key={x.e} onClick={() => toggleEffect(x.e)} style={chipStyle({ active: effects.includes(x.e), accent, line, text, textDim })}>
              {effects.includes(x.e) ? '●' : '○'} {x.zh}
            </button>
          ))}
        </div>
      </Field>

      <Field label="排版 · LAYOUT" textDim={textDim}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(5, 1fr)`, gap: 6 }}>
          {layouts.map(l => (
            <button key={l.k} onClick={() => setLayout(l.k)} style={{
              padding: '8px 4px', borderRadius: 6, cursor: 'pointer',
              border: `1px solid ${layout === l.k ? accent : line}`,
              background: layout === l.k ? hudTokens.cyanSoft : 'transparent',
              color: layout === l.k ? accent : text,
              fontSize: 11, fontWeight: 500, fontFamily: hudTokens.fontSans,
            }}>{l.zh}</button>
          ))}
        </div>
      </Field>

      <Field label={`主題 · THEME · ${themes.find(t => t.k === themeSel)?.en}`} textDim={textDim}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
          {themes.map(t => {
            const active = themeSel === t.k;
            return (
              <button key={t.k} onClick={() => setThemeSel(t.k)} style={{
                padding: '10px 6px', borderRadius: 6, cursor: 'pointer',
                border: `1px solid ${active ? accent : line}`,
                background: active ? hudTokens.cyanSoft : 'transparent',
                color: active ? accent : text,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              }}>
                <div style={{ display: 'flex', gap: 3 }}>
                  {t.sw.map((c, i) => (
                    <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, border: `1px solid ${line}` }} />
                  ))}
                </div>
                <span style={{ fontSize: 11, fontWeight: active ? 600 : 500 }}>{t.zh}</span>
              </button>
            );
          })}
        </div>
      </Field>

      <Field label={`表情包 · STICKERS${sticker ? ` · 已選 ${sticker}` : ''}`} textDim={textDim}>
        <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
          {stickerPacks.map(p => (
            <button key={p.k} onClick={() => setStickerPack(p.k)} style={{
              padding: '4px 10px', borderRadius: 999, cursor: 'pointer',
              border: `1px solid ${stickerPack === p.k ? accent : line}`,
              background: stickerPack === p.k ? hudTokens.cyanSoft : 'transparent',
              color: stickerPack === p.k ? accent : textDim,
              fontSize: 10, fontFamily: hudTokens.fontMono, letterSpacing: 1,
            }}>{p.zh}</button>
          ))}
          {sticker && (
            <button onClick={() => setSticker(null)} style={{
              marginLeft: 'auto', padding: '4px 10px', borderRadius: 999,
              border: `1px solid ${line}`, background: 'transparent', color: textDim,
              fontSize: 10, fontFamily: hudTokens.fontMono, letterSpacing: 1, cursor: 'pointer',
            }}>✕ 清除</button>
          )}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${isMobile ? 8 : 10}, 1fr)`, gap: 4 }}>
          {currentPack.list.map(s => (
            <button key={s} onClick={() => setSticker(sticker === s ? null : s)} style={{
              padding: '6px 0', borderRadius: 6, cursor: 'pointer',
              border: `1px solid ${sticker === s ? accent : line}`,
              background: sticker === s ? hudTokens.cyanSoft : 'transparent',
              fontSize: 18, lineHeight: 1,
            }}>{s}</button>
          ))}
        </div>
      </Field>

      {quickEnabled && (
        <Field label="快速回應 · QUICK" textDim={textDim} nomb>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['+1 同意', '聲音太小', '看不清投影片', '重複', '下一題', '👏', '🔥', '💯', '🤔', '❤️'].map(p => (
              <button key={p} style={chipStyle({ active: false, accent, line, text, textDim })}>{p}</button>
            ))}
          </div>
        </Field>
      )}
    </>
  );
}

function PollTab({ line, accent, text, textDim, panel, raised, isDark, isMobile }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <StatusDot color={hudTokens.magenta} size={7} />
        <HudLabel color={hudTokens.magenta}>LIVE POLL · 剩餘 01:24</HudLabel>
      </div>
      <div style={{ fontSize: isMobile ? 16 : 20, fontWeight: 600, lineHeight: 1.3, marginBottom: 16 }}>
        你對今日主題的熟悉程度？
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {[
          { k: 'A', label: '完全陌生' },
          { k: 'B', label: '聽過沒用過', picked: true },
          { k: 'C', label: '用過一些' },
          { k: 'D', label: '深度使用' },
        ].map(o => (
          <button key={o.k} style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '14px 14px',
            borderRadius: 8, border: `1px solid ${o.picked ? accent : line}`,
            background: o.picked ? hudTokens.cyanSoft : 'transparent',
            color: text, cursor: 'pointer', textAlign: 'left',
          }}>
            <span style={{
              width: 28, height: 28, borderRadius: 6, flexShrink: 0,
              background: o.picked ? accent : raised,
              color: o.picked ? '#000' : text,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: hudTokens.fontMono, fontSize: 13, fontWeight: 700,
            }}>{o.k}</span>
            <span style={{ fontSize: 13, flex: 1 }}>{o.label}</span>
            {o.picked && <span style={{ fontSize: 10, color: accent, fontFamily: hudTokens.fontMono, letterSpacing: 1 }}>✓</span>}
          </button>
        ))}
      </div>
      <div style={{
        marginTop: 18, padding: 12, borderRadius: 6,
        background: raised, fontSize: 11, color: textDim, textAlign: 'center', lineHeight: 1.6,
      }}>
        也可在發射頁直接送 <span style={{ fontFamily: hudTokens.fontMono, color: accent }}>A / B / C / D</span> 投票<br />
        結果將在投票結束後公布
      </div>
    </div>
  );
}

function Field({ label, textDim, children, nomb }) {
  return (
    <div style={{ marginBottom: nomb ? 0 : 14 }}>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim, marginBottom: 6, textTransform: 'uppercase' }}>
        {label}
      </div>
      {children}
    </div>
  );
}
function ToggleChip({ on, onClick, children, accent, line, text, textDim }) {
  return (
    <button onClick={onClick} style={chipStyle({ active: on, accent, line, text, textDim })}>
      {on ? '●' : '○'} {children}
    </button>
  );
}
function chipStyle({ active, accent, line, text, textDim, font }) {
  return {
    padding: '6px 12px', borderRadius: 999,
    border: `1px solid ${active ? accent : line}`,
    background: active ? hudTokens.cyanSoft : 'transparent',
    color: active ? accent : text,
    fontFamily: font || hudTokens.fontSans, fontSize: 11, cursor: 'pointer',
    fontWeight: active ? 600 : 400,
  };
}
function inputStyle({ line, text, raised, isDark }) {
  return {
    width: '100%', background: raised, border: `1px solid ${line}`,
    color: text, padding: '8px 12px', borderRadius: 6, outline: 'none',
    fontFamily: hudTokens.fontSans, fontSize: 13,
  };
}
function rangeStyle(accent, line) {
  return {
    width: '100%', accentColor: accent, height: 4,
  };
}

Object.assign(window, { ViewerMobile, ViewerDesktop });
