// Viewer — "Danmu Fire" launcher. Send-only, not a chat room.
// Per spec: nickname / color / fontSize / opacity / speed / fontFamily / layout (5) /
// effects (8, stackable) / emoji picker inline-insert. Max 100 chars. Button = FIRE.
// NO: Poll tab, sticker quick-panel, quick-reply phrases, per-message stroke/shadow.

function ViewerMobile({ theme = 'dark', inBrowser = false, pollEnabled = false }) {
  return <ViewerCore theme={theme} form="mobile" inBrowser={inBrowser} pollEnabled={pollEnabled} />;
}
function ViewerDesktop({ theme = 'dark', inBrowser = false, pollEnabled = false }) {
  return <ViewerCore theme={theme} form="desktop" inBrowser={inBrowser} pollEnabled={pollEnabled} />;
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

// Poll demo data (admin pushes; viewer votes)
const POLL_DEMO = {
  q: '今天最有收穫的是？',
  options: [
    { k: 'a', label: 'A. Demo 現場',     pct: 42, votes: 104 },
    { k: 'b', label: 'B. 架構說明', pct: 28, votes: 69 },
    { k: 'c', label: 'C. Q&A',                  pct: 18, votes: 45 },
    { k: 'd', label: 'D. Roadmap',              pct: 12, votes: 29 },
  ],
  total: 247,
};

function ViewerCore({ theme, form, inBrowser, pollEnabled }) {
  const isDark = theme === 'dark';
  const bg = isDark ? hudTokens.bg0 : hudTokens.lightBg0;
  const panel = isDark ? hudTokens.bg1 : '#fff';
  const raised = isDark ? hudTokens.bg2 : hudTokens.lightBg2;
  const line = isDark ? hudTokens.line : hudTokens.lightLine;
  const text = isDark ? hudTokens.text : hudTokens.lightText;
  const textDim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  const accent = hudTokens.cyan;

  // viewer 不暴露 fingerprint：fp 仍存在(僅供後端/admin 使用 + avatar hue),
  // 但 viewer UI 完全不顯示 fp 字串。
  // 未命名時 fallback 為「訪客 #ABCD」(fp 前 4 hex 大寫,視覺上像房間代碼)。
  const [fp] = React.useState('a3f2b9c1');
  const guestTag = '暱稱';
  const [nick, setNick] = React.useState('');
  const [editingNick, setEditingNick] = React.useState(false);
  const [nickJustSaved, setNickJustSaved] = React.useState(false);
  const displayName = nick || guestTag;
  const [msg, setMsg] = React.useState('');
  const [color, setColor] = React.useState('#ffffff');
  const [fontSize, setFontSize] = React.useState(32);
  const [opacity, setOpacity] = React.useState(100);
  const [speed, setSpeed] = React.useState(1.0);
  const [fontFamily, setFontFamily] = React.useState('Noto Sans TC');
  const [effects, setEffects] = React.useState(['glow']);
  const [layout, setLayout] = React.useState('scroll');
  const [emojiOpen, setEmojiOpen] = React.useState(false);
  const [tab, setTab] = React.useState('fire');
  const [vote, setVote] = React.useState(null);

  // #2 送出反饋 + cooldown + moderation
  const [sendStatus, setSendStatus] = React.useState(null); // null | 'sent' | 'blocked'
  const [cooldownEnd, setCooldownEnd] = React.useState(0);
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    if (cooldownEnd === 0) return;
    const id = setInterval(() => setNow(Date.now()), 100);
    return () => clearInterval(id);
  }, [cooldownEnd]);
  const cooldownLeft = Math.max(0, (cooldownEnd - now) / 1000);
  const onCooldown = cooldownLeft > 0;

  // mock moderation: 含這些詞會被 BLOCK
  const BLOCKED_WORDS = ['垃圾', '幹', 'spam'];
  const willBeBlocked = (text) => BLOCKED_WORDS.some(w => text.includes(w));

  const handleFire = () => {
    if (!msg || onCooldown) return;
    if (willBeBlocked(msg)) {
      setSendStatus('blocked');
      setTimeout(() => setSendStatus(null), 2400);
      return;
    }
    setSendStatus('sent');
    setMsg('');
    setCooldownEnd(Date.now() + 3000); // 3s mock cooldown
    setTimeout(() => setSendStatus(null), 1800);
  };

  // If poll tab gets disabled, fall back to fire.
  React.useEffect(() => {
    if (tab === 'poll' && !pollEnabled) setTab('fire');
  }, [pollEnabled, tab]);
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

      {/* Hero lockup — Mobile + Desktop 統一三欄:
          左 logo · 中央彈幕跑馬(滿版背景) · 右 chip+lang+theme */}
      <div style={{
        padding: isMobile ? '14px 12px 12px' : '28px 32px 22px',
        borderBottom: `1px solid ${line}`,
        background: isDark ? 'linear-gradient(180deg, rgba(125,211,252,0.04) 0%, transparent 100%)' : 'transparent',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: isMobile ? 8 : 24,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* 滿版彈幕跑馬 — 壓在最底層,文字從右飛到左穿過整個 hero */}
        <DanmuMarquee isDark={isDark} accent={accent} isMobile={isMobile} />

        <div style={{ minWidth: 0, flexShrink: 0, textAlign: 'left', position: 'relative', zIndex: 2 }}>
          <DanmuHero
            title="Danmu Fire"
            theme={theme}
            size={isMobile ? 'medium' : 'hero'}
            align="left"
            subtitle="把你的訊息送上螢幕!"
            subStyle={{ margin: isMobile ? '4px 0 0' : '10px 0 0', fontSize: isMobile ? 11 : undefined }}
          />
        </div>

        <div style={{ flex: 1 }} />

        <div style={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 4,
          position: 'relative', zIndex: 2,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
            <ConnChip label="伺服器" state="online" accent={accent} textDim={textDim} mini={isMobile} bg={panel} />
            <ConnChip label="Overlay" state="offline" textDim={textDim} line={line} mini={isMobile} bg={panel} />
          </div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 4 }}>
            <LangSelect isDark={isDark} text={text} textDim={textDim} line={line} raised={raised} mini={isMobile} />
            <ThemeToggle isDark={isDark} text={text} textDim={textDim} line={line} accent={accent} mini={isMobile} />
          </div>
        </div>
      </div>

      {/* Tabs — Fire 永遠在,Poll 依 admin 開關 */}
      <ViewerTabs
        tab={tab} setTab={setTab}
        pollEnabled={pollEnabled}
        accent={accent} text={text} textDim={textDim} line={line}
      />

      <div style={{ flex: 1, overflow: 'auto', padding: `${pad}px ${pad}px ${pad + 6}px`, minHeight: 0 }}>
        {tab === 'fire' && (<>
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
            textShadow: (effects.includes('glow') || sendStatus === 'sent')
              ? `0 0 ${sendStatus === 'sent' ? 24 : 12}px ${color}, 0 2px 4px rgba(0,0,0,0.6)`
              : '0 2px 4px rgba(0,0,0,0.55)',
            transition: 'text-shadow 300ms',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            display: 'flex', alignItems: 'baseline', gap: 10,
          }}>
            <span style={{
              fontSize: Math.max(11, fontSize * 0.42), fontFamily: hudTokens.fontMono,
              fontWeight: 500, opacity: 0.75, letterSpacing: 0.5,
            }}>@{displayName}</span>
            <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {msg || '示例彈幕文字'}
            </span>
          </div>
        </div>

        <Field label="暱稱" textDim={textDim}>
          <input
            type="text"
            value={nick}
            onChange={e => setNick(e.target.value.slice(0, 12))}
            maxLength={12}
            placeholder="暱稱"
            style={inputStyle({ line, text, raised })}
          />
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
        </>)}

        {tab === 'poll' && (
          <ViewerPollTab
            data={POLL_DEMO} vote={vote} setVote={setVote}
            isDark={isDark} accent={accent} text={text} textDim={textDim}
            line={line} raised={raised} panel={panel}
          />
        )}
      </div>

      {/* Send bar — Fire tab only */}
      {tab === 'fire' && (
      <div style={{ padding: `10px ${pad - 4}px 12px`, borderTop: `1px solid ${line}`, background: panel, position: 'relative' }}>
        {/* #2 toast — sent / blocked */}
        {sendStatus && (
          <div style={{
            position: 'absolute', left: '50%', bottom: 'calc(100% + 8px)',
            transform: 'translateX(-50%)', zIndex: 10,
            padding: '8px 14px', borderRadius: 999,
            background: sendStatus === 'sent' ? hudTokens.lime : hudTokens.crimson,
            color: sendStatus === 'sent' ? '#001428' : '#fff',
            fontFamily: hudTokens.fontMono, fontSize: 11, fontWeight: 700, letterSpacing: 1,
            boxShadow: `0 4px 20px ${sendStatus === 'sent' ? 'rgba(132,225,0,0.4)' : 'rgba(255,77,79,0.4)'}`,
            animation: 'viewerToastIn 240ms cubic-bezier(0.34, 1.56, 0.64, 1)',
            whiteSpace: 'nowrap', pointerEvents: 'none',
          }}>
            {sendStatus === 'sent' ? '✓ 已送上螢幕' : '⚠ 此訊息含敏感字 · 已被主持人設定遮罩'}
          </div>
        )}
        <style>{`@keyframes viewerToastIn { from { opacity: 0; transform: translate(-50%, 8px); } to { opacity: 1; transform: translate(-50%, 0); } }`}</style>
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
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleFire(); } }}
            placeholder={onCooldown ? `冷卻中 · ${cooldownLeft.toFixed(1)}s 後可再送` : '想對現場說點什麼？'}
            maxLength={100}
            style={{
              flex: 1, background: 'transparent', border: 'none', outline: 'none',
              color, fontSize: 14, padding: '10px 0', fontFamily,
              fontWeight: 500,
            }}
          />
          <button onClick={handleFire} disabled={!msg || onCooldown} style={{
            padding: '9px 16px', borderRadius: 999, position: 'relative', overflow: 'hidden',
            background: onCooldown ? raised : (sendStatus === 'blocked' ? hudTokens.crimson : (msg ? accent : raised)),
            border: 'none', color: onCooldown ? textDim : (sendStatus === 'blocked' ? '#fff' : (msg ? '#000' : textDim)),
            cursor: (msg && !onCooldown) ? 'pointer' : 'default', fontSize: 12, fontWeight: 700,
            fontFamily: hudTokens.fontMono, letterSpacing: 1.5,
            transition: 'background 200ms, color 200ms',
          }}>
            {onCooldown ? `${cooldownLeft.toFixed(1)}s` : (sendStatus === 'blocked' ? '⚠ BLOCKED' : 'FIRE ▶')}
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1, padding: '0 4px' }}>
          <span style={{
            color: sendStatus === 'sent' ? hudTokens.lime
              : sendStatus === 'blocked' ? hudTokens.crimson
              : onCooldown ? hudTokens.amber
              : textDim,
          }}>
            {sendStatus === 'sent' ? '✓ 已送上螢幕'
              : sendStatus === 'blocked' ? '⚠ 含敏感字 · 主持人已設為遮罩'
              : onCooldown ? `⏱ 冷卻中 · 速率限制 10/60s`
              : 'Enter 送出 · emoji 可用 :name:'}
          </span>
          <span style={{ color: msg.length > 90 ? hudTokens.amber : textDim }}>{msg.length}/100</span>
        </div>
      </div>
      )}
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

// Connection chip — 伺服器 / Overlay 單行小膠囊 · bg 為實心背景(避免被彈幕透出)
function ConnChip({ label, state, accent, textDim, line, mini, bg }) {
  const online = state === 'online';
  const color = online ? (accent || hudTokens.cyan) : (textDim || hudTokens.textDim);
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: mini ? 4 : 6,
      padding: mini ? '2px 7px' : '4px 10px', borderRadius: 999,
      // 兩層: bg 提供實心底,online 時上 cyanSoft 疊色
      background: bg
        ? (online ? `linear-gradient(${hudTokens.cyanSoft}, ${hudTokens.cyanSoft}), ${bg}` : bg)
        : (online ? hudTokens.cyanSoft : 'transparent'),
      backgroundOrigin: 'border-box',
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

// Lang dropdown — endonyms 4 langs · mobile 同 desktop
function LangSelect({ isDark, text, textDim, line, raised, mini }) {
  const [v, setV] = React.useState('zh-Hant');
  return (
    <div style={{
      position: 'relative',
      background: raised, border: `1px solid ${line}`, borderRadius: 6,
      display: 'inline-flex', alignItems: 'center',
      padding: mini ? '0 16px 0 8px' : '0 18px 0 10px',
      height: mini ? 22 : 26,
    }}>
      <span style={{
        fontFamily: hudTokens.fontMono, fontSize: mini ? 10 : 11, color: text,
        letterSpacing: 0.3, fontWeight: 500,
      }}>
        {v === 'zh-Hant' ? '中文' : v === 'en' ? 'English' : v === 'ja' ? '日本語' : '한국어'}
      </span>
      <span style={{
        position: 'absolute', right: mini ? 5 : 6, top: '50%', transform: 'translateY(-50%)',
        color: textDim, fontFamily: hudTokens.fontMono, fontSize: 8, pointerEvents: 'none',
      }}>▾</span>
      <select value={v} onChange={e => setV(e.target.value)} style={{
        position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer',
        appearance: 'none', WebkitAppearance: 'none',
        colorScheme: isDark ? 'dark' : 'light',
      }}>
        <option value="zh-Hant">中文</option>
        <option value="en">English</option>
        <option value="ja">日本語</option>
        <option value="ko">한국어</option>
      </select>
    </div>
  );
}

// Theme toggle — single icon button (mobile + desktop 統一)
function ThemeToggle({ isDark, text, line, accent, mini }) {
  return (
    <button style={{
      width: mini ? 22 : 26, height: mini ? 22 : 26, borderRadius: 6,
      border: `1px solid ${line}`, background: hudTokens.cyanSoft,
      color: accent, cursor: 'pointer',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: hudTokens.fontMono, fontSize: mini ? 11 : 12, padding: 0,
    }} title={isDark ? '切換到淺色' : '切換到深色'}>
      {isDark ? '◐' : '◑'}
    </button>
  );
}

// Tabs bar — Fire 永遠在,Poll 依 admin 開關
function ViewerTabs({ tab, setTab, pollEnabled, accent, text, textDim, line }) {
  const tabs = [
    { k: 'fire',  zh: 'Fire',   sub: '送彈幕', show: true },
    { k: 'poll',  zh: 'Poll',   sub: '即時投票', show: pollEnabled },
  ].filter(t => t.show);
  if (tabs.length <= 1) return null;
  return (
    <div role="tablist" style={{
      display: 'flex', borderBottom: `1px solid ${line}`,
      paddingLeft: 12, gap: 0, position: 'relative',
    }}>
      {tabs.map(t => {
        const on = tab === t.k;
        return (
          <button key={t.k} role="tab" aria-selected={on} onClick={() => setTab(t.k)} style={{
            padding: '12px 18px', border: 'none', background: 'transparent', cursor: 'pointer',
            display: 'flex', alignItems: 'baseline', gap: 8,
            color: on ? accent : text,
            borderBottom: on ? `2px solid ${accent}` : '2px solid transparent',
            marginBottom: -1, fontFamily: hudTokens.fontSans,
          }}>
            <span style={{ fontSize: 14, fontWeight: on ? 700 : 500, letterSpacing: 0.3 }}>{t.zh}</span>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, color: on ? accent : textDim, textTransform: 'uppercase' }}>{t.sub}</span>
          </button>
        );
      })}
    </div>
  );
}

// Hero 全寬彈幕跑馬燈 — 壓在 z-index: 0,文字從右飛過整個 hero 到左邊穿過 logo。
// 純裝飾,無資訊。多條彈幕各自獨立速度/Y軸/顏色/透明度。
function DanmuMarquee({ isDark, accent, isMobile }) {
  const items = [
    { t: '🔥🔥🔥',           c: '#fb7185', d: 0,    s: 14, y: 16, op: 0.32 },
    { t: '+1',               c: '#7dd3fc', d: 1.8,  s: 17, y: 44, op: 0.28 },
    { t: '哈哈哈',          c: '#fcd34d', d: 3.4,  s: 16, y: 6,  op: 0.36 },
    { t: '👏',               c: accent,    d: 5.0,  s: 13, y: 56, op: 0.32 },
    { t: '講得好！',         c: '#a3e635', d: 6.4,  s: 19, y: 28, op: 0.26 },
    { t: '✨ wow',           c: '#c4b5fd', d: 7.8,  s: 15, y: 4,  op: 0.30 },
    { t: '666',              c: '#7dd3fc', d: 9.0,  s: 16, y: 50, op: 0.26 },
    { t: '💯',               c: '#fcd34d', d: 10.4, s: 13, y: 22, op: 0.36 },
    { t: '+1 同意',          c: '#a3e635', d: 11.6, s: 17, y: 38, op: 0.28 },
    { t: 'GG',               c: '#fb7185', d: 13.0, s: 14, y: 12, op: 0.32 },
    { t: '太強了',          c: accent,    d: 14.2, s: 18, y: 60, op: 0.30 },
    { t: '謝謝主持',        c: '#c4b5fd', d: 15.6, s: 16, y: 32, op: 0.26 },
  ];
  // mobile hero 較矮(~62px),clamp y 軸到較小範圍
  const mqClass = isMobile ? 'dm-mq-item-mobile' : 'dm-mq-item';
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 0,
      pointerEvents: 'none', overflow: 'hidden',
      maskImage: 'linear-gradient(90deg, transparent 0, transparent 22%, #000 38%, #000 88%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent 0, transparent 22%, #000 38%, #000 88%, transparent 100%)',
    }}>
      {items.map((m, i) => (
        <div key={i} className={mqClass} style={{
          position: 'absolute', top: isMobile ? Math.min(m.y, 38) : m.y, left: '100%',
          color: m.c, opacity: m.op,
          fontFamily: hudTokens.fontSans, fontWeight: 700, fontSize: isMobile ? 12 : 14,
          whiteSpace: 'nowrap', letterSpacing: 0.3,
          textShadow: `0 0 8px ${m.c}55`,
          animationDelay: `${m.d}s`,
          animationDuration: `${m.s}s`,
        }}>{m.t}</div>
      ))}
      <style>{`
        @keyframes dm-mq-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-1100px); }
        }
        @keyframes dm-mq-scroll-mobile {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-500px); }
        }
        .dm-mq-item {
          animation-name: dm-mq-scroll;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        .dm-mq-item-mobile {
          animation-name: dm-mq-scroll-mobile;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>
    </div>
  );
}

// Poll tab content
function ViewerPollTab({ data, vote, setVote, isDark, accent, text, textDim, line, raised, panel }) {
  const voted = vote != null;
  return (
    <div>
      <div style={{
        padding: '14px 16px', borderRadius: 8,
        background: isDark ? 'rgba(125,211,252,0.06)' : 'rgba(125,211,252,0.08)',
        border: `1px solid ${isDark ? 'rgba(125,211,252,0.25)' : 'rgba(125,211,252,0.4)'}`,
        marginBottom: 14,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.4, color: textDim }}>
          <StatusDot color={accent} size={5} pulse />
          <span>POLL · 主持人推送</span>
          <span style={{ marginLeft: 'auto', color: textDim }}>{data.total} 票</span>
        </div>
        <div style={{ fontSize: 16, fontWeight: 600, color: text, lineHeight: 1.4 }}>{data.q}</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {data.options.map(o => {
          const selected = vote === o.k;
          return (
            <button key={o.k} onClick={() => setVote(o.k)}
              disabled={voted && !selected}
              style={{
                position: 'relative', textAlign: 'left',
                padding: '12px 14px', borderRadius: 8, overflow: 'hidden',
                border: `1px solid ${selected ? accent : line}`,
                background: selected ? hudTokens.cyanSoft : raised,
                color: text, cursor: voted && !selected ? 'default' : 'pointer',
                opacity: voted && !selected ? 0.7 : 1,
                fontFamily: hudTokens.fontSans, fontSize: 14, fontWeight: 500,
              }}>
              {voted && (
                <div style={{
                  position: 'absolute', inset: 0, width: `${o.pct}%`,
                  background: selected
                    ? 'linear-gradient(90deg, rgba(125,211,252,0.22), rgba(125,211,252,0.08))'
                    : (isDark ? 'rgba(148,163,184,0.10)' : 'rgba(148,163,184,0.14)'),
                  pointerEvents: 'none',
                }} />
              )}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  width: 18, height: 18, borderRadius: '50%',
                  border: `1.5px solid ${selected ? accent : line}`,
                  background: selected ? accent : 'transparent', flexShrink: 0,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: '#000', fontSize: 11,
                }}>{selected ? '✓' : ''}</span>
                <span style={{ flex: 1, minWidth: 0 }}>{o.label}</span>
                {voted && (
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 700, color: selected ? accent : textDim, letterSpacing: 0.5 }}>
                    {o.pct}%
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: 14, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5, color: textDim, textAlign: 'center' }}>
        {voted ? '你已投票 · 結果即時更新' : '選擇一個選項即送出 · 不可更改'}
      </div>
    </div>
  );
}

// Quick reply tab — REMOVED (功能取消)

// IdentityChip — viewer 不顯示 fp 字串。已命名: 只顯示暱稱; 未命名: 顯示「訪客 #ABCD」+ 提示。
// avatar hue 仍由 fp 決定(視覺穩定),但 fp 字串不出現在 UI。
function IdentityChip({ fp, guestTag, nick, setNick, editing, setEditing, justSaved, setJustSaved, text, textDim, line, raised, accent, panel }) {
  const inputRef = React.useRef(null);
  const [draft, setDraft] = React.useState(nick);
  React.useEffect(() => { if (editing && inputRef.current) inputRef.current.focus(); }, [editing]);
  React.useEffect(() => { setDraft(nick); }, [nick, editing]);
  React.useEffect(() => {
    if (!justSaved) return;
    const t = setTimeout(() => setJustSaved(false), 600);
    return () => clearTimeout(t);
  }, [justSaved, setJustSaved]);

  const commit = () => {
    const v = draft.trim().slice(0, 12);
    setNick(v);
    setEditing(false);
    setJustSaved(true);
  };
  const cancel = () => { setDraft(nick); setEditing(false); };

  if (editing) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: raised, border: `1px solid ${accent}`, borderRadius: 6,
        padding: '8px 10px', boxShadow: `0 0 0 3px ${hudTokens.cyanSoft}`,
      }}>
        <input
          ref={inputRef}
          value={draft}
          onChange={e => setDraft(e.target.value.slice(0, 12))}
          onKeyDown={e => {
            if (e.key === 'Enter') commit();
            if (e.key === 'Escape') cancel();
          }}
          maxLength={12}
          placeholder="輸入暱稱 · 最多 12 字"
          style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            color: text, fontFamily: hudTokens.fontSans, fontSize: 13, padding: 0,
          }}
        />
        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5 }}>
          {draft.length}/12
        </span>
        <button onClick={commit} title="儲存 · Enter" style={{
          background: accent, color: '#000', border: 'none', borderRadius: 4,
          padding: '3px 8px', fontFamily: hudTokens.fontMono, fontSize: 10,
          letterSpacing: 0.5, cursor: 'pointer', fontWeight: 600,
        }}>OK</button>
        <button onClick={cancel} title="取消 · Esc" style={{
          background: 'transparent', color: textDim, border: `1px solid ${line}`, borderRadius: 4,
          padding: '3px 8px', fontFamily: hudTokens.fontMono, fontSize: 10,
          letterSpacing: 0.5, cursor: 'pointer',
        }}>×</button>
      </div>
    );
  }

  return (
    <div
      onClick={() => setEditing(true)}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        background: justSaved
          ? `linear-gradient(${hudTokens.cyanSoft}, ${hudTokens.cyanSoft}), ${raised}`
          : raised,
        border: `1px solid ${justSaved ? accent : line}`, borderRadius: 6,
        padding: '8px 10px', cursor: 'pointer',
        transition: 'background 400ms ease, border-color 400ms ease',
      }}
      title="點一下改暱稱"
    >
      {/* 圓形 avatar 用 fp 前 2 hex 當 hue */}
      <span style={{
        width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
        background: `oklch(0.65 0.15 ${(parseInt(fp.slice(0, 2), 16) * 1.41) % 360})`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: '#000', fontFamily: hudTokens.fontMono, fontSize: 10, fontWeight: 700,
      }}>{(nick || guestTag).slice(0, 1).toUpperCase()}</span>

      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {nick ? (
          <>
            <span style={{ color: text, fontSize: 13, fontWeight: 600, fontFamily: hudTokens.fontSans, lineHeight: 1.2 }}>
              {nick}
            </span>
            <span style={{ color: textDim, fontSize: 10, fontFamily: hudTokens.fontSans }}>
              已設定暱稱 · 點此修改
            </span>
          </>
        ) : (
          <>
            <span style={{ color: text, fontFamily: hudTokens.fontSans, fontSize: 13, fontWeight: 600, letterSpacing: 0.3, lineHeight: 1.2 }}>
              {guestTag}
            </span>
            <span style={{ color: textDim, fontSize: 10, fontFamily: hudTokens.fontSans }}>
              未命名 · 點此設定暱稱
            </span>
          </>
        )}
      </div>

      <span style={{
        fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim,
        opacity: 0.7, flexShrink: 0,
      }}>✎</span>
    </div>
  );
}

Object.assign(window, { ViewerMobile, ViewerDesktop });
