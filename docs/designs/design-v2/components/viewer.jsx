// Viewer — "Danmu Fire" launcher. Send-only, not a chat room.
// Per spec: nickname / color / fontSize / opacity / speed / fontFamily / layout (5) /
// effects (8, stackable) / emoji picker inline-insert. Max 100 chars. Button = FIRE.
// NO: Poll tab, sticker quick-panel, quick-reply phrases, per-message stroke/shadow.

function ViewerMobile({ theme = 'dark', inBrowser = false }) {
  return <ViewerCore theme={theme} form="mobile" inBrowser={inBrowser} />;
}
function ViewerDesktop({ theme = 'dark', inBrowser = false }) {
  return <ViewerCore theme={theme} form="desktop" inBrowser={inBrowser} />;
}

// Emoji set available to the viewer (from admin-managed Emojis module).
// `:name:` syntax — picker inserts into the textbox at caret.
const VIEWER_EMOJIS = [
  { k: 'fire',    c: '🔥' }, { k: 'clap',    c: '👏' }, { k: 'heart',  c: '❤️' },
  { k: 'hundred', c: '💯' }, { k: 'laugh',   c: '😂' }, { k: 'wow',    c: '😮' },
  { k: 'think',   c: '🤔' }, { k: 'cry',     c: '😭' }, { k: 'rocket', c: '🚀' },
  { k: 'ok',      c: '✅' }, { k: 'no',      c: '❌' }, { k: 'spark',  c: '✨' },
  { k: 'party',   c: '🎉' }, { k: 'star',    c: '⭐' }, { k: 'pray',   c: '🙏' },
  { k: 'bulb',    c: '💡' },
];

const VIEWER_FONTS = [
  'Noto Sans TC', 'Zen Kaku Gothic New', 'IBM Plex Mono',
  'Source Han Sans', 'Source Han Serif', 'LXGW WenKai',
  'Arial', 'Georgia', 'Courier New',
];

function ViewerCore({ theme, form, inBrowser }) {
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
  const [fontSize, setFontSize] = React.useState(32);
  const [opacity, setOpacity] = React.useState(100);
  const [speed, setSpeed] = React.useState(1.0);
  const [fontFamily, setFontFamily] = React.useState('Noto Sans TC');
  const [effects, setEffects] = React.useState(['glow']);
  const [layout, setLayout] = React.useState('scroll');
  const [emojiOpen, setEmojiOpen] = React.useState(false);
  const inputRef = React.useRef(null);

  const toggleEffect = (e) =>
    setEffects(es => es.includes(e) ? es.filter(x => x !== e) : [...es, e]);

  const insertEmoji = (c) => {
    const el = inputRef.current;
    if (!el) return setMsg(m => (m + c).slice(0, 100));
    const start = el.selectionStart ?? msg.length;
    const end = el.selectionEnd ?? msg.length;
    const next = (msg.slice(0, start) + c + msg.slice(end)).slice(0, 100);
    setMsg(next);
    setTimeout(() => {
      el.focus();
      el.selectionStart = el.selectionEnd = start + c.length;
    }, 0);
  };

  const isMobile = form === 'mobile';
  const width = inBrowser ? '100%' : (isMobile ? 375 : '100%');
  const height = inBrowser ? '100%' : (isMobile ? 812 : '100%');
  const pad = isMobile ? 16 : 24;

  return (
    <div style={{
      width, height, background: bg, color: text,
      fontFamily: hudTokens.fontSans, display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative', colorScheme: isDark ? 'dark' : 'light',
    }}>
      {isMobile && !inBrowser && (
        <div style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', fontFamily: hudTokens.fontMono, fontSize: 13, fontWeight: 600 }}>
          <span>14:02</span>
          <span style={{ fontSize: 11, color: textDim }}>● ● ● ●</span>
        </div>
      )}

      {/* Hero lockup — 左右兩欄 (mobile + desktop 統一):
          左 · Danmu Fire logo + 副標題
          右 · 伺服器 / Overlay 連線 chip + (desktop) 語言 & 主題切換 */}
      <div style={{
        padding: isMobile ? '18px 16px 16px' : '28px 32px 22px',
        borderBottom: `1px solid ${line}`,
        background: isDark ? 'linear-gradient(180deg, rgba(125,211,252,0.04) 0%, transparent 100%)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? 10 : 24,
        position: 'relative',
      }}>
        <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
          <DanmuHero
            title="Danmu Fire"
            theme={theme}
            size={isMobile ? 'medium' : 'hero'}
            align="left"
            subtitle="把你的訊息送上螢幕!"
            subStyle={{ margin: isMobile ? '6px 0 0' : '10px 0 0', fontSize: isMobile ? 12 : undefined }}
          />
        </div>
        <div style={{
          flexShrink: 0, display: 'flex', flexDirection: 'column',
          gap: 4, alignItems: 'flex-end',
        }}>
          <ConnChip label="伺服器" state="online" accent={accent} textDim={textDim} mini={isMobile} />
          <ConnChip label="Overlay" state="offline" textDim={textDim} line={line} mini={isMobile} />
          {!isMobile && (
            <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
              <Seg>
                <SegBtn on>中</SegBtn>
                <SegBtn>EN</SegBtn>
              </Seg>
              <Seg>
                <SegBtn on={isDark}>◐</SegBtn>
                <SegBtn on={!isDark}>◑</SegBtn>
              </Seg>
            </div>
          )}
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: `${pad}px ${pad}px ${pad + 6}px`, minHeight: 0 }}>
        {/* Live preview — 模擬「投到螢幕上」;dark/light 各自的深色舞台背景 */}
        <div style={{
          background: isDark
            ? 'linear-gradient(135deg, #000814 0%, #001428 100%)'
            : 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: 8, padding: '18px 14px', marginBottom: 16,
          border: `1px solid ${isDark ? 'rgba(125,211,252,0.18)' : 'rgba(125,211,252,0.25)'}`,
          position: 'relative', overflow: 'hidden', minHeight: 72,
          boxShadow: isDark
            ? 'inset 0 0 40px rgba(125,211,252,0.06)'
            : '0 4px 14px rgba(15,23,42,0.18), inset 0 0 40px rgba(125,211,252,0.08)',
        }}>
          {/* scanline texture to sell "screen" feel */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(255,255,255,0.015) 3px, rgba(255,255,255,0.015) 4px)',
          }} />
          <div style={{
            position: 'absolute', top: 6, left: 10, fontFamily: hudTokens.fontMono, fontSize: 9,
            color: 'rgba(148,163,184,0.7)', letterSpacing: 1.5, zIndex: 1,
          }}>預覽 · 你送出的樣子</div>
          <div style={{
            marginTop: 10, fontSize, fontFamily, fontWeight: 600, color,
            opacity: opacity / 100,
            textShadow: effects.includes('glow') ? `0 0 12px ${color}, 0 2px 4px rgba(0,0,0,0.6)` : '0 2px 4px rgba(0,0,0,0.55)',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            display: 'flex', alignItems: 'baseline', gap: 10,
          }}>
            <span style={{
              fontSize: Math.max(11, fontSize * 0.42), fontFamily: hudTokens.fontMono,
              fontWeight: 500, opacity: 0.75, letterSpacing: 0.5,
            }}>@{nick}</span>
            <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {msg || '示例彈幕文字'}
            </span>
          </div>
        </div>

        <Field label="暱稱" textDim={textDim}>
          <input value={nick} onChange={e => setNick(e.target.value.slice(0, 20))} maxLength={20}
            style={inputStyle({ line, text, raised })} />
        </Field>

        <Field label="顏色" textDim={textDim}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {['#ffffff', accent, hudTokens.amber, hudTokens.lime, hudTokens.crimson, '#ffd166'].map(c => (
              <button key={c} onClick={() => setColor(c)} style={{
                width: 28, height: 28, borderRadius: '50%', background: c, cursor: 'pointer',
                border: color === c ? `2px solid ${accent}` : `1px solid ${line}`, padding: 0,
              }} />
            ))}
            <label style={{
              width: 28, height: 28, borderRadius: '50%', cursor: 'pointer',
              border: `1px dashed ${line}`, color: textDim,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontFamily: hudTokens.fontMono,
            }}>
              +<input type="color" value={color} onChange={e => setColor(e.target.value)} style={{ display: 'none' }} />
            </label>
            <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>{color.toUpperCase()}</span>
          </div>
        </Field>

        <Field label="字型" textDim={textDim}>
          <div style={{ position: 'relative' }}>
            <select value={fontFamily} onChange={e => setFontFamily(e.target.value)} style={{
              width: '100%', padding: '9px 34px 9px 12px', borderRadius: 6,
              background: raised, border: `1px solid ${line}`, color: text,
              fontFamily, fontSize: 13, outline: 'none', cursor: 'pointer',
              appearance: 'none', WebkitAppearance: 'none', colorScheme: isDark ? 'dark' : 'light',
            }}>
              {VIEWER_FONTS.map(f => (<option key={f} value={f} style={{ fontFamily: f }}>{f}</option>))}
            </select>
            <span style={{
              position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
              pointerEvents: 'none', color: textDim, fontFamily: hudTokens.fontMono, fontSize: 10,
            }}>▾</span>
          </div>
        </Field>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
          <Field label={`字級 · ${fontSize}px`} textDim={textDim} nomb>
            <input type="range" min="16" max="64" value={fontSize} onChange={e => setFontSize(+e.target.value)} style={rangeStyle(accent)} />
          </Field>
          <Field label={`透明度 · ${opacity}%`} textDim={textDim} nomb>
            <input type="range" min="20" max="100" value={opacity} onChange={e => setOpacity(+e.target.value)} style={rangeStyle(accent)} />
          </Field>
        </div>

        <Field label={`速度 ${speed.toFixed(1)}x`} textDim={textDim}>
          <input type="range" min="0.5" max="3" step="0.1" value={speed} onChange={e => setSpeed(+e.target.value)} style={rangeStyle(accent)} />
        </Field>

        <Field label={`效果 已選 ${effects.length} / 8 · 可疊加`} textDim={textDim}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {[
              { e: 'blink',   zh: '閃爍' }, { e: 'bounce',  zh: '彈跳' },
              { e: 'glow',    zh: '發光' }, { e: 'rainbow', zh: '彩虹' },
              { e: 'shake',   zh: '震動' }, { e: 'spin',    zh: '旋轉' },
              { e: 'wave',    zh: '波浪' }, { e: 'zoom',    zh: '縮放' },
            ].map(x => {
              const on = effects.includes(x.e);
              return (
                <button key={x.e} onClick={() => toggleEffect(x.e)} style={{
                  minWidth: 64, minHeight: 44, padding: '6px 14px', borderRadius: 999,
                  border: `1px solid ${on ? accent : line}`,
                  background: on ? hudTokens.cyanSoft : 'transparent',
                  color: on ? accent : text, cursor: 'pointer',
                  fontFamily: hudTokens.fontSans, fontSize: 12,
                  fontWeight: on ? 600 : 400,
                }}>{on ? '●' : '○'} {x.zh}</button>
              );
            })}
          </div>
        </Field>

        <Field label="排版" textDim={textDim} nomb>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(5, 1fr)`, gap: 6 }}>
            {[
              { k: 'scroll',       zh: '滾動',     sub: '右→左' },
              { k: 'top_fixed',    zh: '頂固定',   sub: 'TOP' },
              { k: 'bottom_fixed', zh: '底固定',   sub: 'BOT' },
              { k: 'float',        zh: '浮動',     sub: 'RANDOM' },
              { k: 'rise',         zh: '上升',     sub: '底→頂' },
            ].map(l => {
              const on = layout === l.k;
              return (
                <button key={l.k} onClick={() => setLayout(l.k)} style={{
                  minHeight: 56, padding: '8px 4px', borderRadius: 6, cursor: 'pointer',
                  border: `1px solid ${on ? accent : line}`,
                  background: on ? hudTokens.cyanSoft : 'transparent',
                  color: on ? accent : text,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3,
                }}>
                  <span style={{ fontSize: 12, fontWeight: 500 }}>{l.zh}</span>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 0.5, color: textDim }}>{l.sub}</span>
                </button>
              );
            })}
          </div>
        </Field>
      </div>

      {/* Send bar with inline emoji picker */}
      <div style={{ padding: `10px ${pad - 4}px 12px`, borderTop: `1px solid ${line}`, background: panel, position: 'relative' }}>
        {emojiOpen && (
          <div style={{
            position: 'absolute', left: pad - 4, right: pad - 4, bottom: '100%',
            marginBottom: 6, background: panel, border: `1px solid ${line}`, borderRadius: 8,
            padding: 8, display: 'grid', gridTemplateColumns: `repeat(${isMobile ? 8 : 12}, 1fr)`, gap: 4,
            boxShadow: '0 -4px 20px rgba(0,0,0,0.4)',
          }}>
            {VIEWER_EMOJIS.map(e => (
              <button key={e.k} onClick={() => { insertEmoji(e.c); setEmojiOpen(false); }}
                title={`:${e.k}:`}
                style={{
                  padding: '6px 0', minHeight: 36, borderRadius: 4, cursor: 'pointer',
                  border: `1px solid ${line}`, background: 'transparent',
                  fontSize: 18, lineHeight: 1,
                }}>{e.c}</button>
            ))}
          </div>
        )}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '4px 4px 4px 10px', borderRadius: 999,
          border: `1px solid ${msg ? accent : line}`,
          background: isDark ? hudTokens.bg0 : hudTokens.lightBg2,
        }}>
          <button onClick={() => setEmojiOpen(o => !o)} style={{
            width: 32, height: 32, borderRadius: '50%', border: 'none',
            background: emojiOpen ? hudTokens.cyanSoft : 'transparent',
            color: emojiOpen ? accent : textDim, cursor: 'pointer', fontSize: 16,
          }}>☺</button>
          <input
            ref={inputRef}
            value={msg}
            onChange={e => setMsg(e.target.value.slice(0, 100))}
            placeholder="想對現場說點什麼？"
            maxLength={100}
            style={{
              flex: 1, background: 'transparent', border: 'none', outline: 'none',
              color, fontSize: 14, padding: '10px 0', fontFamily,
              fontWeight: 500,
            }}
          />
          <button disabled={!msg} style={{
            padding: '9px 16px', borderRadius: 999,
            background: msg ? accent : raised,
            border: 'none', color: msg ? '#000' : textDim,
            cursor: msg ? 'pointer' : 'default', fontSize: 12, fontWeight: 700,
            fontFamily: hudTokens.fontMono, letterSpacing: 1.5,
          }}>FIRE ▶</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1, padding: '0 4px' }}>
          <span>Enter 送出 · emoji 可用 :name:</span>
          <span style={{ color: msg.length > 90 ? hudTokens.amber : textDim }}>{msg.length}/100</span>
        </div>
      </div>
      {isMobile && !inBrowser && <div style={{ height: 20, background: panel }} />}
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
function inputStyle({ line, text, raised }) {
  return {
    width: '100%', background: raised, border: `1px solid ${line}`,
    color: text, padding: '10px 12px', borderRadius: 6, outline: 'none',
    fontFamily: hudTokens.fontSans, fontSize: 13, boxSizing: 'border-box',
  };
}
function rangeStyle(accent) {
  return { width: '100%', accentColor: accent, height: 4 };
}

function Seg({ children }) {
  return (
    <div style={{
      display: 'inline-flex', padding: 2, borderRadius: 6,
      background: hudTokens.raised, border: `1px solid ${hudTokens.line}`,
    }}>{children}</div>
  );
}
function SegBtn({ on, children }) {
  return (
    <button style={{
      padding: '4px 10px', borderRadius: 4, border: 'none', cursor: 'pointer',
      background: on ? hudTokens.cyanSoft : 'transparent',
      color: on ? hudTokens.cyan : hudTokens.textDim,
      fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1,
    }}>{children}</button>
  );
}

// Connection chip — 伺服器 / Overlay 單行小膠囊
function ConnChip({ label, state, accent, textDim, line, mini }) {
  const online = state === 'online';
  const color = online ? (accent || hudTokens.cyan) : (textDim || hudTokens.textDim);
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: mini ? 4 : 6,
      padding: mini ? '2px 7px' : '4px 10px', borderRadius: 999,
      background: online ? hudTokens.cyanSoft : 'transparent',
      border: `1px solid ${online ? hudTokens.cyanLine : (line || 'rgba(148,163,184,0.25)')}`,
      fontFamily: hudTokens.fontMono, fontSize: mini ? 9 : 10, letterSpacing: mini ? 0.5 : 1, color,
      whiteSpace: 'nowrap',
    }}>
      <StatusDot color={color} size={mini ? 5 : 6} />
      <span style={{ opacity: 0.85 }}>{label}</span>
      <span style={{ color, opacity: online ? 1 : 0.7 }}>· {online ? '已連線' : '未連線'}</span>
    </span>
  );
}

Object.assign(window, { ViewerMobile, ViewerDesktop });
