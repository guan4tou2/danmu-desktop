// Desktop Client (Electron) — 4 scenarios.
// Overlay / Control Window / Connect Dialog / Tray Menu.
// NO host/主持人 language anywhere. Control window is DISPLAY control only,
// not viewer send params (those live in the viewer).

function DesktopClient({ theme = 'dark', scenario = 'overlay' }) {
  if (scenario === 'overlay') return <OverlayOnDesktop theme={theme} />;
  if (scenario === 'control') return <ControlWindow theme={theme} />;
  if (scenario === 'connect') return <ConnectDialog theme={theme} />;
  if (scenario === 'tray') return <TrayMenu theme={theme} />;
  return null;
}

/* ------------------- 1. Overlay on Desktop ------------------- */

function OverlayOnDesktop({ theme }) {
  const isDark = theme === 'dark';
  const deskBg = isDark
    ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 60%, #020617 100%)'
    : 'linear-gradient(135deg, #cbd5e1 0%, #e2e8f0 100%)';
  const accent = hudTokens.cyan;
  const fakeWindow = isDark ? '#0f172a' : '#fff';
  const fakeWinLine = isDark ? hudTokens.line : hudTokens.lightLine;

  return (
    <div style={{
      width: '100%', height: '100%', background: deskBg, position: 'relative', overflow: 'hidden',
      fontFamily: hudTokens.fontSans,
    }}>
      {/* Fake Keynote window */}
      <div style={{
        position: 'absolute', left: 60, top: 60, right: 60, bottom: 80,
        background: fakeWindow, borderRadius: 10, border: `1px solid ${fakeWinLine}`,
        boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ height: 38, display: 'flex', alignItems: 'center', gap: 8, padding: '0 14px', borderBottom: `1px solid ${fakeWinLine}` }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
          <span style={{ flex: 1, textAlign: 'center', fontSize: 12, color: '#888' }}>Keynote — 年度演講.key</span>
        </div>
        <div style={{ flex: 1, background: '#0a0a0a', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: '#fff', fontFamily: hudTokens.fontDisplay, fontSize: 52, fontWeight: 700, letterSpacing: -1, textAlign: 'center' }}>
            為什麼我們<br /><span style={{ color: accent }}>需要彈幕</span>？
          </div>
        </div>
      </div>

      {/* Floating danmu — pass-through overlay */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[
          { text: '請問這能錄下來嗎', top: 110, left: -200, color: '#fff', delay: 0, fs: 28 },
          { text: '同意 +1 🔥', top: 180, left: -100, color: accent, delay: 2.5, fs: 32 },
          { text: '聲音小一點', top: 280, left: -300, color: hudTokens.amber, delay: 1.2, fs: 26 },
          { text: '投影片能分享嗎？', top: 380, left: -150, color: accent, delay: 3.8, fs: 30 },
          { text: '好看 ✨', top: 460, left: -80, color: hudTokens.lime, delay: 0.8, fs: 34 },
        ].map((d, i) => (
          <div key={i} style={{
            position: 'absolute', top: d.top, left: d.left,
            color: d.color, fontSize: d.fs, fontWeight: 700,
            fontFamily: hudTokens.fontDisplay, whiteSpace: 'nowrap',
            textShadow: `0 0 10px ${d.color}, 0 2px 6px rgba(0,0,0,0.8)`,
            animation: `dm-scroll 14s linear ${d.delay}s infinite`,
          }}>{d.text}</div>
        ))}
      </div>

      {/* Floating mini-control */}
      <div style={{
        position: 'absolute', right: 24, bottom: 24,
        width: 280, background: '#0f172a',
        border: `1px solid ${accent}`, borderRadius: 8,
        boxShadow: `0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px ${hudTokens.cyanLine}`,
        overflow: 'hidden', fontFamily: hudTokens.fontSans,
        color: hudTokens.text,
      }}>
        <div style={{ padding: '10px 14px', borderBottom: `1px solid ${hudTokens.cyanLine}`, display: 'flex', alignItems: 'center', gap: 8, background: hudTokens.cyanSoft }}>
          <StatusDot color={accent} size={7} />
          <HudLabel color={accent}>OVERLAY · CONNECTED</HudLabel>
          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.textDim, letterSpacing: 1 }}>— ▢ ✕</span>
        </div>
        <div style={{ padding: 12, fontSize: 11, fontFamily: hudTokens.fontMono, letterSpacing: 0.5, color: hudTokens.textDim, lineHeight: 1.6 }}>
          <div>SERVER · ws://danmu.local:4001</div>
          <div>LATENCY · 23ms · RECONN 0</div>
        </div>
        <div style={{ padding: '0 12px 12px' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <MiniBtn on>▶ 接收</MiniBtn>
            <MiniBtn>⏸ 暫停</MiniBtn>
            <MiniBtn>⌫ 清空</MiniBtn>
          </div>
          <div style={{ marginTop: 10, fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.textDim, letterSpacing: 1 }}>SHORTCUTS</div>
          <div style={{ marginTop: 4, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.textDim, letterSpacing: 0.5 }}>
            <span>⌘⇧D</span><span>顯示/隱藏</span>
            <span>⌘⇧P</span><span>暫停</span>
            <span>⌘⇧K</span><span>清空</span>
          </div>
        </div>
      </div>

      {/* Menubar hint */}
      <div style={{
        position: 'absolute', top: 10, right: 24, display: 'flex', alignItems: 'center', gap: 10,
        fontFamily: hudTokens.fontMono, fontSize: 11, color: isDark ? '#fff' : '#222', letterSpacing: 1,
      }}>
        <span style={{ color: accent }}>弾</span>
        <span>14:02</span>
      </div>
    </div>
  );
}

function MiniBtn({ children, on }) {
  return (
    <span style={{
      flex: 1, padding: '6px 0', textAlign: 'center', borderRadius: 4,
      border: `1px solid ${on ? hudTokens.cyan : hudTokens.line}`,
      background: on ? hudTokens.cyanSoft : 'transparent',
      color: on ? hudTokens.cyan : hudTokens.text,
      fontSize: 11, cursor: 'pointer', fontFamily: hudTokens.fontSans,
    }}>{children}</span>
  );
}

/* ------------------- 2. Control Window ------------------- */
// Sidebar: Overlay / Connection / Shortcuts / About
// NO viewer send params (font/opacity/speed — those are viewer-only).
// Focuses on DISPLAY control: on/off, screen target, server health.

function ControlWindow({ theme }) {
  const isDark = theme === 'dark';
  const bg = isDark ? hudTokens.bg0 : hudTokens.lightBg0;
  const panel = isDark ? hudTokens.bg1 : '#fff';
  const raised = isDark ? hudTokens.bg2 : hudTokens.lightBg2;
  const line = isDark ? hudTokens.line : hudTokens.lightLine;
  const text = isDark ? hudTokens.text : hudTokens.lightText;
  const textDim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  const accent = hudTokens.cyan;

  const [section, setSection] = React.useState('overlay');

  const navItems = [
    { k: 'overlay', icon: '▢', zh: 'Overlay', en: 'DISPLAY' },
    { k: 'conn',    icon: '⇌', zh: '連線', en: 'CONNECTION' },
    { k: 'keys',    icon: '⌘', zh: '快捷鍵', en: 'SHORTCUTS' },
    { k: 'about',   icon: '○', zh: '關於', en: 'ABOUT' },
  ];

  return (
    <div style={{ width: '100%', height: '100%', background: bg, color: text, fontFamily: hudTokens.fontSans, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Title bar */}
      <div style={{ height: 36, display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px', borderBottom: `1px solid ${line}`, background: panel }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
        <span style={{ flex: 1, textAlign: 'center', fontSize: 12, fontFamily: hudTokens.fontMono, letterSpacing: 1, color: textDim }}>
          Danmu Client
        </span>
        <StatusDot color={accent} size={6} />
        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>CONNECTED</span>
      </div>

      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        {/* Sidebar */}
        <div style={{ width: 168, background: panel, borderRight: `1px solid ${line}`, padding: 10, display: 'flex', flexDirection: 'column' }}>
          {navItems.map(n => {
            const active = section === n.k;
            return (
              <div key={n.k} onClick={() => setSection(n.k)} style={{
                padding: '9px 12px', borderRadius: 6, marginBottom: 2, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 10,
                background: active ? hudTokens.cyanSoft : 'transparent',
                color: active ? accent : text,
              }}>
                <span style={{ width: 14, textAlign: 'center' }}>{n.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: active ? 600 : 400 }}>{n.zh}</div>
                  <div style={{ fontSize: 9, fontFamily: hudTokens.fontMono, letterSpacing: 1, color: textDim, marginTop: 1 }}>{n.en}</div>
                </div>
              </div>
            );
          })}

          <div style={{ marginTop: 'auto', padding: '10px 12px', fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 0.5, color: textDim, lineHeight: 1.6, borderTop: `1px solid ${line}` }}>
            <div>v4.8.7 · macOS</div>
            <div style={{ color: hudTokens.lime }}>● UP TO DATE</div>
          </div>
        </div>

        {/* Main */}
        <div style={{ flex: 1, padding: 22, overflow: 'auto' }}>
          {section === 'overlay' && <OverlaySection {...{ panel, raised, line, text, textDim, accent }} />}
          {section === 'conn'    && <ConnSection    {...{ panel, raised, line, text, textDim, accent }} />}
          {section === 'keys'    && <KeysSection    {...{ panel, raised, line, text, textDim, accent }} />}
          {section === 'about'   && <AboutSection   {...{ panel, raised, line, text, textDim, accent }} />}
        </div>
      </div>
    </div>
  );
}

function OverlaySection({ panel, raised, line, text, textDim, accent }) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
        <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.2 }}>Overlay 控制</div>
        <HudLabel color={textDim}>透明層 · 點擊穿透</HudLabel>
      </div>

      <div style={{
        padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel,
        display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600 }}>顯示彈幕 Overlay</div>
          <div style={{ fontSize: 11, color: textDim, marginTop: 2 }}>任何時候可用 ⌘⇧D 快速切換</div>
        </div>
        <Toggle on accent={accent} line={line} />
      </div>

      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel, marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 12, fontWeight: 500 }}>顯示於</span>
          <HudLabel color={textDim}>DISPLAY · 偵測到 2 個螢幕</HudLabel>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <ScreenChip label="主螢幕" meta="Built-in · 2560×1600" active accent={accent} line={line} text={text} textDim={textDim} />
          <ScreenChip label="副螢幕" meta="HDMI-1 · 1920×1080" accent={accent} line={line} text={text} textDim={textDim} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <ActionBtn main accent={accent}>▶ 開始接收</ActionBtn>
        <ActionBtn accent={accent} line={line} text={text}>⏸ 暫停</ActionBtn>
        <ActionBtn accent={accent} line={line} text={text}>⌫ 清空畫面</ActionBtn>
      </div>

      <div style={{ marginTop: 14, padding: 12, background: raised, borderRadius: 6, fontSize: 11, color: textDim, lineHeight: 1.6 }}>
        <HudLabel color={accent}>NOTE</HudLabel>
        <div style={{ marginTop: 4 }}>
          彈幕的字體、顏色、大小、透明度、速度、排版與效果為<b style={{ color: text }}>觀眾每次發送時帶上的參數</b>，
          不在此視窗控制。此視窗僅決定 overlay 是否顯示、顯示於哪個螢幕，以及與 server 的連線。
        </div>
      </div>
    </>
  );
}

function ConnSection({ panel, raised, line, text, textDim, accent }) {
  return (
    <>
      <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.2, marginBottom: 14 }}>連線狀態</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel }}>
          <HudLabel color={textDim}>SERVER</HudLabel>
          <div style={{ fontSize: 13, fontWeight: 600, marginTop: 6, fontFamily: hudTokens.fontMono }}>ws://danmu.local:4001</div>
          <div style={{ fontSize: 10, color: textDim, marginTop: 4, fontFamily: hudTokens.fontMono, letterSpacing: 0.5 }}>延遲 23ms · 重連 0 次 · 上線 02:41:08</div>
          <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
            <MiniBtn>↻ 重連</MiniBtn>
            <MiniBtn>⚙ 更改</MiniBtn>
          </div>
        </div>
        <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel }}>
          <HudLabel color={textDim}>CERTIFICATE</HudLabel>
          <div style={{ fontSize: 13, fontWeight: 600, marginTop: 6 }}>本機 · 無 TLS</div>
          <div style={{ fontSize: 10, color: textDim, marginTop: 4 }}>區網連線不需 TLS · 公網建議 wss://</div>
        </div>
      </div>

      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel }}>
        <HudLabel color={textDim}>MESSAGE FLOW · 最近 30 秒</HudLabel>
        <div style={{ marginTop: 10 }}>
          <Sparkline data={[2, 4, 3, 6, 5, 7, 9, 6, 8, 11, 8, 10, 9, 12, 14, 11, 13, 15, 12, 10, 8, 11, 14, 16, 13, 11, 9, 12, 15, 18]} color={accent} width={560} height={56} />
        </div>
        <div style={{ display: 'flex', gap: 20, marginTop: 8, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
          <span>RX · <span style={{ color: text }}>1,284</span></span>
          <span>RATE · <span style={{ color: accent }}>4.2/s</span></span>
          <span>PEAK · <span style={{ color: text }}>18/s</span></span>
        </div>
      </div>
    </>
  );
}

function KeysSection({ panel, raised, line, text, textDim, accent }) {
  const keys = [
    { act: '顯示 / 隱藏 overlay', sc: '⌘⇧D' },
    { act: '暫停接收',          sc: '⌘⇧P' },
    { act: '清空畫面',          sc: '⌘⇧K' },
    { act: '開啟控制視窗',      sc: '⌘⇧C' },
    { act: '切換主螢幕 / 副螢幕', sc: '⌘⇧M' },
  ];
  return (
    <>
      <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.2, marginBottom: 14 }}>快捷鍵</div>
      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel, overflow: 'hidden' }}>
        {keys.map((k, i) => (
          <div key={k.sc} style={{
            display: 'flex', alignItems: 'center', padding: '10px 6px',
            borderBottom: i === keys.length - 1 ? 'none' : `1px solid ${line}`,
          }}>
            <span style={{ flex: 1, fontSize: 13 }}>{k.act}</span>
            <span style={{
              fontFamily: hudTokens.fontMono, fontSize: 12, color: accent, letterSpacing: 1,
              padding: '4px 10px', border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 4, background: hudTokens.cyanSoft,
            }}>{k.sc}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
        點擊任一快捷鍵可自訂 · 偏好會立即生效
      </div>
    </>
  );
}

function AboutSection({ panel, raised, line, text, textDim, accent }) {
  return (
    <>
      <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.2, marginBottom: 14 }}>關於</div>
      <div style={{ padding: 20, borderRadius: 8, border: `1px solid ${line}`, background: panel, display: 'flex', gap: 16, alignItems: 'center', marginBottom: 14 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 10, background: accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#000', fontFamily: hudTokens.fontDisplay, fontWeight: 700, fontSize: 28,
        }}>弾</div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 600 }}>Danmu Client</div>
          <div style={{ fontSize: 11, color: textDim, marginTop: 2, fontFamily: hudTokens.fontMono, letterSpacing: 0.5 }}>v4.8.7 · Electron 28 · macOS</div>
          <div style={{ fontSize: 11, color: hudTokens.lime, marginTop: 4, fontFamily: hudTokens.fontMono, letterSpacing: 1 }}>● UP TO DATE</div>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <ActionBtn accent={accent} line={line} text={text}>檢查更新</ActionBtn>
        </div>
      </div>
      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel, fontSize: 12, color: text, lineHeight: 1.7 }}>
        Danmu 是即時彈幕送字系統。觀眾用手機或桌機網頁輸入文字，送到主場大螢幕的 overlay。
        <br />
        <span style={{ color: textDim }}>© 2025 · Open source at github.com/…</span>
      </div>
    </>
  );
}

function Toggle({ on, accent, line }) {
  return (
    <span style={{
      width: 40, height: 22, borderRadius: 999, position: 'relative',
      background: on ? accent : line, cursor: 'pointer',
    }}>
      <span style={{
        position: 'absolute', top: 2, left: on ? 20 : 2,
        width: 18, height: 18, borderRadius: '50%', background: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
      }} />
    </span>
  );
}
function ScreenChip({ label, meta, active, accent, line, text, textDim }) {
  return (
    <div style={{
      flex: 1, padding: '10px 12px', borderRadius: 6,
      border: `1px solid ${active ? accent : line}`,
      background: active ? hudTokens.cyanSoft : 'transparent',
      cursor: 'pointer',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{
          width: 26, height: 18, borderRadius: 2,
          border: `1px solid ${active ? accent : line}`,
          background: active ? accent : 'transparent',
        }} />
        <span style={{ fontSize: 12, fontWeight: active ? 600 : 500, color: active ? accent : text }}>{label}</span>
        {active && <span style={{ marginLeft: 'auto', color: accent, fontFamily: hudTokens.fontMono, fontSize: 10 }}>✓</span>}
      </div>
      <div style={{ fontSize: 10, color: textDim, fontFamily: hudTokens.fontMono, letterSpacing: 0.5, marginTop: 4 }}>{meta}</div>
    </div>
  );
}
function ActionBtn({ main, children, accent, line, text, style = {} }) {
  return (
    <span style={{
      padding: '9px 16px', borderRadius: 6, cursor: 'pointer',
      border: main ? `1px solid ${accent}` : `1px solid ${line}`,
      background: main ? accent : 'transparent',
      color: main ? '#000' : text,
      fontSize: 12, fontWeight: main ? 600 : 500,
      display: 'inline-flex', alignItems: 'center', gap: 6,
      ...style,
    }}>{children}</span>
  );
}

/* ------------------- 3. Connect Dialog (3-step wizard) ------------------- */

function ConnectDialog({ theme }) {
  const isDark = theme === 'dark';
  const bg = isDark ? hudTokens.bg0 : hudTokens.lightBg0;
  const panel = isDark ? hudTokens.bg1 : '#fff';
  const line = isDark ? hudTokens.line : hudTokens.lightLine;
  const text = isDark ? hudTokens.text : hudTokens.lightText;
  const textDim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  const accent = hudTokens.cyan;
  return (
    <div style={{ width: '100%', height: '100%', background: bg, color: text, fontFamily: hudTokens.fontSans, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ height: 36, display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px', borderBottom: `1px solid ${line}`, background: panel }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
        <span style={{ flex: 1, textAlign: 'center', fontSize: 12, color: textDim, fontFamily: hudTokens.fontMono, letterSpacing: 1 }}>Danmu Client — 首次啟動</span>
      </div>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: 0 }}>
        {/* Left rail — steps */}
        <div style={{
          background: isDark ? '#0a1222' : '#f1f5f9',
          borderRight: `1px solid ${line}`, padding: '26px 20px',
          display: 'flex', flexDirection: 'column', gap: 22,
        }}>
          <div>
            <div style={{
              width: 36, height: 36, borderRadius: 8, background: accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#000', fontFamily: hudTokens.fontDisplay, fontWeight: 700, fontSize: 18,
            }}>弾</div>
            <div style={{ fontSize: 14, fontWeight: 600, marginTop: 12, letterSpacing: -0.2 }}>Danmu Client</div>
            <div style={{ fontSize: 10, fontFamily: hudTokens.fontMono, color: textDim, letterSpacing: 1, marginTop: 2 }}>SETUP · v4.8.7</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <StepRow n={1} zh="選擇 Server" en="SERVER" done accent={accent} textDim={textDim} />
            <StepRow n={2} zh="驗證 & 偏好" en="AUTH & PREFS" active accent={accent} textDim={textDim} />
            <StepRow n={3} zh="完成" en="DONE" accent={accent} textDim={textDim} />
          </div>

          <div style={{ marginTop: 'auto', fontSize: 10, color: textDim, lineHeight: 1.6, fontFamily: hudTokens.fontMono, letterSpacing: 0.3 }}>
            可於任意時間重新設定<br />
            選單列 ▸ 偏好設定
          </div>
        </div>

        {/* Right — step 2 body */}
        <div style={{ padding: '26px 32px', overflow: 'auto' }}>
          <div style={{
            padding: '18px 0 22px', marginBottom: 14,
            borderBottom: `1px solid ${line}`, textAlign: 'left',
          }}>
            <DanmuHero
              title="Danmu Fire"
              size="large"
              align="left"
              subtitle="歡迎 — 來連線到你的 server,接收觀眾送來的彈幕"
              subStyle={{ margin: '10px 0 0' }}
            />
          </div>
          <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.3 }}>連線到 Danmu Server</div>
          <div style={{ fontSize: 12, color: textDim, marginTop: 4, lineHeight: 1.6 }}>
            輸入伺服器位址 — 區網 IP、公網網址或 mDNS 名稱均可
          </div>

          <div style={{ marginTop: 18, padding: 14, background: panel, border: `1px solid ${line}`, borderRadius: 8 }}>
            <HudLabel color={textDim}>WEBSOCKET URL</HudLabel>
            <input placeholder="ws://... 或 wss://..." defaultValue="ws://danmu.local:4001" style={{
              width: '100%', marginTop: 8, padding: '12px 14px', background: bg, border: `1px solid ${line}`, borderRadius: 6,
              color: text, fontFamily: hudTokens.fontMono, fontSize: 14, outline: 'none', boxSizing: 'border-box',
            }} />
            <div style={{ marginTop: 14 }}>
              <HudLabel color={textDim}>管理密碼 · 選填</HudLabel>
              <input type="password" placeholder="僅當你要使用 admin 後台時填寫" style={{
                width: '100%', marginTop: 8, padding: '12px 14px', background: bg, border: `1px solid ${line}`, borderRadius: 6,
                color: text, fontFamily: hudTokens.fontMono, fontSize: 13, outline: 'none', boxSizing: 'border-box',
              }} />
            </div>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 11, color: text }}>
              <Check label="開機啟動 & 自動連線" on accent={accent} line={line} />
              <Check label="連線後自動顯示 overlay" on accent={accent} line={line} />
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <HudLabel color={textDim}>RECENT · 最近連線</HudLabel>
            <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <RecentRow addr="wss://danmu.acme.co" when="昨天 14:22" accent={accent} line={line} text={text} textDim={textDim} />
              <RecentRow addr="ws://192.168.1.50:4001" when="3 天前" accent={accent} line={line} text={text} textDim={textDim} />
            </div>
          </div>

          <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 11, color: textDim, cursor: 'pointer' }}>閱讀部署文件 →</span>
            <span style={{ marginLeft: 'auto', padding: '9px 16px', borderRadius: 6, border: `1px solid ${line}`, color: text, fontSize: 12, cursor: 'pointer' }}>上一步</span>
            <span style={{
              padding: '9px 20px', borderRadius: 6, background: accent, color: '#000',
              fontSize: 12, fontWeight: 700, fontFamily: hudTokens.fontMono, letterSpacing: 1.5, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>下一步 ▶</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepRow({ n, zh, en, active, done, accent, textDim }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 4px' }}>
      <span style={{
        width: 22, height: 22, borderRadius: '50%',
        background: done ? accent : 'transparent',
        border: `1px solid ${active || done ? accent : hudTokens.line}`,
        color: done ? '#000' : (active ? accent : textDim),
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: hudTokens.fontMono, fontSize: 10, fontWeight: 700,
      }}>{done ? '✓' : n}</span>
      <div style={{ lineHeight: 1.3 }}>
        <div style={{ fontSize: 12, fontWeight: active ? 600 : 400, color: active ? accent : (done ? undefined : textDim) }}>{zh}</div>
        <div style={{ fontSize: 9, fontFamily: hudTokens.fontMono, letterSpacing: 1, color: textDim }}>{en}</div>
      </div>
    </div>
  );
}
function RecentRow({ addr, when, accent, line, text, textDim }) {
  return (
    <div style={{
      padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10,
      borderRadius: 6, cursor: 'pointer', border: `1px solid ${line}`,
    }}>
      <span style={{ color: textDim }}>↻</span>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: text, flex: 1 }}>{addr}</span>
      <span style={{ fontSize: 10, fontFamily: hudTokens.fontMono, color: textDim, letterSpacing: 0.5 }}>{when}</span>
    </div>
  );
}
function Check({ label, on, accent, line }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
      <span style={{
        width: 14, height: 14, borderRadius: 3,
        border: `1px solid ${on ? accent : line}`,
        background: on ? accent : 'transparent',
        color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 10, fontWeight: 700,
      }}>{on ? '✓' : ''}</span>
      {label}
    </span>
  );
}

/* ------------------- 4. Tray Menu ------------------- */

function TrayMenu({ theme }) {
  const isDark = theme === 'dark';
  const accent = hudTokens.cyan;
  return (
    <div style={{ width: '100%', height: '100%', background: isDark ? '#0f172a' : '#e2e8f0', position: 'relative', fontFamily: hudTokens.fontSans }}>
      {/* menubar */}
      <div style={{ height: 28, background: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 14, fontFamily: hudTokens.fontMono, fontSize: 11, color: isDark ? '#fff' : '#222', letterSpacing: 1 }}>
        <span style={{ flex: 1 }} />
        <span style={{ color: accent, fontSize: 13, border: `1px solid ${hudTokens.cyanLine}`, padding: '1px 5px', borderRadius: 3 }}>弾</span>
        <span>🔋</span>
        <span>🔊</span>
        <span>14:02</span>
      </div>
      {/* menu pop */}
      <div style={{
        position: 'absolute', top: 32, right: 36,
        width: 280,
        background: isDark ? 'rgba(15, 23, 42, 0.96)' : 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${isDark ? hudTokens.line : hudTokens.lightLine}`,
        borderRadius: 8, boxShadow: '0 12px 40px rgba(0,0,0,0.45)',
        padding: 6, color: isDark ? hudTokens.text : hudTokens.lightText, fontSize: 12,
      }}>
        <div style={{ padding: '8px 10px', borderBottom: `1px solid ${isDark ? hudTokens.line : hudTokens.lightLine}`, marginBottom: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <StatusDot color={accent} size={7} />
            <span style={{ fontWeight: 600 }}>Danmu Client</span>
            <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9, color: isDark ? hudTokens.textDim : hudTokens.lightTextDim, letterSpacing: 1 }}>v4.8.7</span>
          </div>
          <div style={{ fontSize: 10, color: isDark ? hudTokens.textDim : hudTokens.lightTextDim, fontFamily: hudTokens.fontMono, letterSpacing: 0.5, marginTop: 4 }}>
            已連線 · ws://danmu.local:4001
          </div>
        </div>
        {/* Toggle overlay */}
        <TrayToggleRow label="顯示 overlay" sc="⌘⇧D" on accent={accent} isDark={isDark} />
        <TrayRow label="暫停接收" sc="⌘⇧P" isDark={isDark} />
        <TrayRow label="清空畫面" sc="⌘⇧K" isDark={isDark} />

        <div style={{ height: 1, background: isDark ? hudTokens.line : hudTokens.lightLine, margin: '4px 0' }} />

        <TrayRow label="顯示於" meta="主螢幕 ▸" isDark={isDark} />
        <TrayRow label="伺服器" meta="已連線 ▸" isDark={isDark} />

        <div style={{ height: 1, background: isDark ? hudTokens.line : hudTokens.lightLine, margin: '4px 0' }} />

        <TrayRow label="開啟控制視窗…" isDark={isDark} />
        <TrayRow label="偏好設定…" isDark={isDark} />
        <TrayRow label="結束 Danmu" isDark={isDark} danger />
      </div>
    </div>
  );
}

function TrayRow({ label, sc, meta, isDark, danger }) {
  const dim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  return (
    <div style={{
      display: 'flex', padding: '6px 10px', borderRadius: 4, cursor: 'pointer',
      alignItems: 'center', color: danger ? hudTokens.crimson : undefined,
    }}>
      <span style={{ flex: 1 }}>{label}</span>
      {sc && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: dim, letterSpacing: 1 }}>{sc}</span>}
      {meta && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: dim, letterSpacing: 0.5 }}>{meta}</span>}
    </div>
  );
}
function TrayToggleRow({ label, sc, on, accent, isDark }) {
  const dim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  return (
    <div style={{ display: 'flex', padding: '6px 10px', borderRadius: 4, cursor: 'pointer', alignItems: 'center' }}>
      <span style={{ width: 14, color: on ? accent : 'transparent' }}>✓</span>
      <span style={{ flex: 1 }}>{label}</span>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: dim, letterSpacing: 1 }}>{sc}</span>
    </div>
  );
}

Object.assign(window, { DesktopClient });
