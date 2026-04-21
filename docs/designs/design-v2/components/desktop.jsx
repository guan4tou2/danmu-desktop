// Desktop Client (Electron) — transparent overlay + small control window + tray.

function DesktopClient({ theme = 'dark', scenario = 'overlay' }) {
  if (scenario === 'overlay') return <OverlayOnDesktop theme={theme} />;
  if (scenario === 'control') return <ControlWindow theme={theme} />;
  if (scenario === 'connect') return <ConnectDialog theme={theme} />;
  if (scenario === 'tray') return <TrayMenu theme={theme} />;
  return null;
}

// Fullscreen desktop-ish background with floating danmu pass-through
function OverlayOnDesktop({ theme }) {
  const isDark = theme === 'dark';
  const deskBg = isDark
    ? 'linear-gradient(135deg, oklch(0.22 0.04 260) 0%, oklch(0.30 0.06 220) 100%)'
    : 'linear-gradient(135deg, oklch(0.78 0.04 240) 0%, oklch(0.86 0.05 200) 100%)';
  const accent = hudTokens.cyan;
  const fakeWindow = isDark ? 'oklch(0.18 0.02 250)' : '#fff';
  const fakeWinLine = isDark ? hudTokens.line : hudTokens.lightLine;

  return (
    <div style={{
      width: '100%', height: '100%', background: deskBg, position: 'relative', overflow: 'hidden',
      fontFamily: hudTokens.fontSans,
    }}>
      {/* Fake app window (Keynote-ish) being overlaid */}
      <div style={{
        position: 'absolute', left: 60, top: 60, right: 60, bottom: 80,
        background: fakeWindow, borderRadius: 10, border: `1px solid ${fakeWinLine}`,
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ height: 38, display: 'flex', alignItems: 'center', gap: 8, padding: '0 14px', borderBottom: `1px solid ${fakeWinLine}` }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
          <span style={{ flex: 1, textAlign: 'center', fontSize: 12, color: '#888', fontFamily: hudTokens.fontSans }}>Keynote — 年度演講.key</span>
        </div>
        <div style={{ flex: 1, background: '#0a0a0a', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: '#fff', fontFamily: hudTokens.fontDisplay, fontSize: 52, fontWeight: 700, letterSpacing: -1, textAlign: 'center' }}>
            為什麼我們<br /><span style={{ color: accent }}>需要彈幕</span>？
          </div>
        </div>
      </div>

      {/* Floating danmu — click-through transparent overlay */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[
          { text: '請問這能錄下來嗎', top: 110, left: -200, color: '#fff', delay: 0, fs: 28 },
          { text: '同意 +1 🔥', top: 180, left: -100, color: accent, delay: 2.5, fs: 32 },
          { text: '聲音小一點', top: 280, left: -300, color: hudTokens.amber, delay: 1.2, fs: 26 },
          { text: '投影片能分享嗎？', top: 380, left: -150, color: hudTokens.magenta, delay: 3.8, fs: 30 },
          { text: '好看 ✨', top: 460, left: -80, color: hudTokens.lime, delay: 0.8, fs: 34 },
          { text: 'B', top: 540, left: -60, color: accent, delay: 2, fs: 44 },
        ].map((d, i) => (
          <div key={i} style={{
            position: 'absolute', top: d.top, left: d.left,
            color: d.color, fontSize: d.fs, fontWeight: 700,
            fontFamily: hudTokens.fontDisplay, whiteSpace: 'nowrap',
            textShadow: '0 2px 6px rgba(0,0,0,0.8)',
            WebkitTextStroke: '1px rgba(0,0,0,0.9)',
            animation: `dm-scroll 14s linear ${d.delay}s infinite`,
          }}>{d.text}</div>
        ))}
      </div>

      {/* Floating mini control — actual Electron controller window */}
      <div style={{
        position: 'absolute', right: 24, bottom: 24,
        width: 280, background: isDark ? 'oklch(0.16 0.022 250)' : '#fff',
        border: `1px solid ${accent}`, borderRadius: 8,
        boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px ${hudTokens.cyanLine}`,
        overflow: 'hidden', fontFamily: hudTokens.fontSans,
        color: isDark ? hudTokens.text : hudTokens.lightText,
      }}>
        <div style={{ padding: '10px 14px', borderBottom: `1px solid ${hudTokens.cyanLine}`, display: 'flex', alignItems: 'center', gap: 8, background: isDark ? hudTokens.cyanSoft : 'oklch(0.82 0.14 195 / 0.08)' }}>
          <StatusDot color={accent} size={7} />
          <HudLabel color={accent}>DANMU CLIENT · CONNECTED</HudLabel>
          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.textDim, letterSpacing: 1 }}>— ▢ ✕</span>
        </div>
        <div style={{ padding: 12, fontSize: 11, fontFamily: hudTokens.fontMono, letterSpacing: 0.5, color: hudTokens.textDim, lineHeight: 1.6 }}>
          <div>SERVER · ws://danmu.local:4001</div>
        </div>
        <div style={{ padding: '0 12px 12px' }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
            <MiniBtn on>▶ 接收</MiniBtn>
            <MiniBtn>⏸ 暫停</MiniBtn>
            <MiniBtn>⌫ 清空</MiniBtn>
          </div>
          <div style={{
            marginTop: 2, padding: '6px 8px', textAlign: 'right',
            fontFamily: hudTokens.fontMono, fontSize: 10, color: accent,
            letterSpacing: 0.5, cursor: 'pointer',
          }}>→ 開 Admin</div>
        </div>
      </div>

      {/* macOS-style menubar hint */}
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

function ControlWindow({ theme }) {
  const isDark = theme === 'dark';
  const bg = isDark ? hudTokens.bg0 : hudTokens.lightBg0;
  const panel = isDark ? hudTokens.bg1 : '#fff';
  const raised = isDark ? hudTokens.bg2 : hudTokens.lightBg2;
  const line = isDark ? hudTokens.line : hudTokens.lightLine;
  const text = isDark ? hudTokens.text : hudTokens.lightText;
  const textDim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  const accent = hudTokens.cyan;

  const navItems = [
    { k: 'overlay', icon: '▢', zh: 'Overlay', en: 'DISPLAY', active: true },
    { k: 'conn', icon: '⇌', zh: '連線', en: 'CONNECTION' },
    { k: 'keys', icon: '⌘', zh: '快捷鍵', en: 'SHORTCUTS' },
    { k: 'about', icon: '○', zh: '關於', en: 'ABOUT & UPDATE' },
  ];

  return (
    <div style={{ width: '100%', height: '100%', background: bg, color: text, fontFamily: hudTokens.fontSans, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Title bar */}
      <div style={{ height: 36, display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px', borderBottom: `1px solid ${line}`, background: panel, WebkitAppRegion: 'drag' }}>
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
          {navItems.map(n => (
            <div key={n.k} style={{
              padding: '9px 12px', borderRadius: 6, marginBottom: 2, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 10,
              background: n.active ? hudTokens.cyanSoft : 'transparent',
              color: n.active ? accent : text,
            }}>
              <span style={{ width: 14, textAlign: 'center' }}>{n.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: n.active ? 600 : 400 }}>{n.zh}</div>
                <div style={{ fontSize: 9, fontFamily: hudTokens.fontMono, letterSpacing: 1, color: textDim, marginTop: 1 }}>{n.en}</div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 'auto', padding: '10px 12px', fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 0.5, color: textDim, lineHeight: 1.6, borderTop: `1px solid ${line}` }}>
            <div>v4.8.7 · macOS</div>
            <div style={{ color: hudTokens.lime }}>● UP TO DATE</div>
          </div>
        </div>

        {/* Main — Overlay controls */}
        <div style={{ flex: 1, padding: 22, overflow: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
            <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.2 }}>Overlay 控制</div>
            <HudLabel color={textDim}>透明層 · 點選穿透</HudLabel>
          </div>

          {/* Master switch */}
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel }}>
              <HudLabel color={textDim}>SERVER</HudLabel>
              <div style={{ fontSize: 13, fontWeight: 600, marginTop: 6, fontFamily: hudTokens.fontMono }}>ws://danmu.local:4001</div>
              <div style={{ fontSize: 10, color: textDim, marginTop: 4, fontFamily: hudTokens.fontMono, letterSpacing: 0.5 }}>· 延遲 23ms　· 重連 0 次</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                <MiniBtn>↻ 重連</MiniBtn>
                <MiniBtn>⚙ 更改</MiniBtn>
              </div>
            </div>
            <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel }}>
              <HudLabel color={textDim}>QUEUE</HudLabel>
              <div style={{ fontSize: 13, fontWeight: 600, marginTop: 6, fontFamily: hudTokens.fontMono }}>3 / 16</div>
              <div style={{ fontSize: 10, color: textDim, marginTop: 4, fontFamily: hudTokens.fontMono, letterSpacing: 0.5 }}>· rate 42/min　· 247 WS 連線</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                <MiniBtn>⌫ 清空</MiniBtn>
              </div>
            </div>
          </div>

          {/* Screen selector */}
          <div style={{ marginTop: 14, padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 12, fontWeight: 500 }}>顯示於</span>
              <HudLabel color={textDim}>DISPLAY · 檢到 2 個螢幕</HudLabel>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <ScreenChip label="主螢幕" meta="Built-in · 2560×1600" active accent={accent} line={line} text={text} textDim={textDim} />
              <ScreenChip label="副螢幕" meta="HDMI-1 · 1920×1080" accent={accent} line={line} text={text} textDim={textDim} />
            </div>
          </div>

          {/* Actions */}
          <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
            <ActionBtn main accent={accent}>▶ 開始接收</ActionBtn>
            <ActionBtn accent={accent} line={line} text={text}>⏸ 暫停</ActionBtn>
            <ActionBtn accent={accent} line={line} text={text}>⌫ 清空畫面</ActionBtn>
            <ActionBtn accent={accent} line={line} text={text} style={{ marginLeft: 'auto' }}>⤴ 開啟 Admin 後台</ActionBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({ on, accent, line }) {
  return (
    <span style={{
      width: 40, height: 22, borderRadius: 999, position: 'relative',
      background: on ? accent : line, cursor: 'pointer',
      transition: 'background 0.2s',
    }}>
      <span style={{
        position: 'absolute', top: 2, left: on ? 20 : 2,
        width: 18, height: 18, borderRadius: '50%', background: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        transition: 'left 0.2s',
      }} />
    </span>
  );
}
function Bar({ value, accent, line }) {
  return (
    <div style={{ height: 4, background: line, borderRadius: 2, overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${value}%`, background: accent, borderRadius: 2 }} />
    </div>
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
          width: 26, height: 18, borderRadius: 2, border: `1px solid ${active ? accent : line}`,
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
        {/* Left rail — branding + step indicator */}
        <div style={{
          background: isDark ? 'linear-gradient(180deg, oklch(0.16 0.03 215), oklch(0.13 0.02 250))' : 'linear-gradient(180deg, oklch(0.97 0.02 215), oklch(0.94 0.01 240))',
          borderRight: `1px solid ${line}`, padding: '26px 20px',
          display: 'flex', flexDirection: 'column', gap: 22,
        }}>
          <div>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#000', fontFamily: hudTokens.fontDisplay, fontWeight: 700, fontSize: 18,
            }}>弾</div>
            <div style={{ fontSize: 14, fontWeight: 600, marginTop: 12, letterSpacing: -0.2 }}>Danmu Client</div>
            <div style={{ fontSize: 10, fontFamily: hudTokens.fontMono, color: textDim, letterSpacing: 1, marginTop: 2 }}>SETUP · v4.8.7</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <StepRow n={1} zh="選擇 Server" en="SERVER" done />
            <StepRow n={2} zh="驗證 & 偏好" en="AUTH & PREFS" active accent={accent} />
            <StepRow n={3} zh="完成" en="DONE" />
          </div>

          <div style={{ marginTop: 'auto', fontSize: 10, color: textDim, lineHeight: 1.6, fontFamily: hudTokens.fontMono, letterSpacing: 0.3 }}>
            可於任意時間重新設定<br />
            選單列 ▸ 偏好設定
          </div>
        </div>

        {/* Right — main content */}
        <div style={{ padding: '26px 32px', overflow: 'auto' }}>
          <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.3 }}>連線到 Danmu Server</div>
          <div style={{ fontSize: 12, color: textDim, marginTop: 4, lineHeight: 1.6 }}>
            輸入伺服器位址 — 区網 IP 、公網網址或 mDNS 名稱均可
          </div>

          {/* Manual */}
          <div style={{ marginTop: 18, padding: 14, background: panel, border: `1px solid ${line}`, borderRadius: 8 }}>
            <HudLabel color={textDim}>WEBSOCKET URL</HudLabel>
            <input placeholder="ws://... 或 wss://..." style={{
              width: '100%', marginTop: 8, padding: '12px 14px', background: bg, border: `1px solid ${line}`, borderRadius: 6,
              color: text, fontFamily: hudTokens.fontMono, fontSize: 14, outline: 'none', boxSizing: 'border-box',
            }} />
            <div style={{ marginTop: 14 }}>
              <HudLabel color={textDim}>管理密碼 · 選填</HudLabel>
              <input type="password" placeholder="僅當你要使用 Admin 後台時填寫" style={{
                width: '100%', marginTop: 8, padding: '12px 14px', background: bg, border: `1px solid ${line}`, borderRadius: 6,
                color: text, fontFamily: hudTokens.fontMono, fontSize: 13, outline: 'none', boxSizing: 'border-box',
              }} />
            </div>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 11, color: textDim }}>
              <Check label="開機啟動 & 自動連線" on accent={accent} line={line} />
            </div>
          </div>

          {/* Recent */}
          <div style={{ marginTop: 18 }}>
            <HudLabel color={textDim}>RECENT · 最近連線</HudLabel>
            <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <RecentRow addr="wss://danmu.acme.co" when="昨天 14:22" accent={accent} line={line} text={text} textDim={textDim} />
              <RecentRow addr="ws://192.168.1.50:4001" when="3 天前" accent={accent} line={line} text={text} textDim={textDim} />
            </div>
          </div>

          {/* Footer actions */}
          <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 11, color: textDim, cursor: 'pointer' }}>閱讀部署文件 →</span>
            <span style={{ marginLeft: 'auto', padding: '9px 16px', borderRadius: 6, border: `1px solid ${line}`, color: text, fontSize: 12, cursor: 'pointer' }}>跳過 · 稍後設定</span>
            <span style={{
              padding: '9px 20px', borderRadius: 6, background: accent, color: '#000',
              fontSize: 12, fontWeight: 700, fontFamily: hudTokens.fontMono, letterSpacing: 1.5, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>CONNECT ▶</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepRow({ n, zh, en, active, done, accent = hudTokens.cyan }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 4px' }}>
      <span style={{
        width: 22, height: 22, borderRadius: '50%',
        background: done ? accent : (active ? 'transparent' : 'transparent'),
        border: `1px solid ${active || done ? accent : hudTokens.line}`,
        color: done ? '#000' : (active ? accent : hudTokens.textDim),
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'ui-monospace, monospace', fontSize: 10, fontWeight: 700,
      }}>{done ? '✓' : n}</span>
      <div style={{ lineHeight: 1.3 }}>
        <div style={{ fontSize: 12, fontWeight: active ? 600 : 400, color: active ? accent : (done ? undefined : hudTokens.textDim) }}>{zh}</div>
        <div style={{ fontSize: 9, fontFamily: 'ui-monospace, monospace', letterSpacing: 1, color: hudTokens.textDim }}>{en}</div>
      </div>
    </div>
  );
}
function ServerRow({ icon, name, addr, meta, badge, active, accent, line, text, textDim }) {
  return (
    <div style={{
      padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12,
      borderBottom: `1px solid ${line}`, cursor: 'pointer',
      background: active ? hudTokens.cyanSoft : 'transparent',
    }}>
      <span style={{ color: active ? accent : textDim, fontSize: 14 }}>{icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: active ? 600 : 500, color: active ? accent : text }}>{name}</span>
          {badge && <span style={{
            padding: '1px 6px', borderRadius: 2, fontSize: 9, fontFamily: 'ui-monospace, monospace',
            letterSpacing: 0.5, border: `1px solid ${active ? accent : line}`, color: active ? accent : textDim,
          }}>{badge}</span>}
        </div>
        <div style={{ fontSize: 11, fontFamily: 'ui-monospace, monospace', color: textDim, marginTop: 2 }}>{addr}</div>
      </div>
      <div style={{ fontSize: 10, fontFamily: 'ui-monospace, monospace', color: textDim, letterSpacing: 0.5, textAlign: 'right' }}>
        {meta.split(' · ').map((m, i) => <div key={i}>{m}</div>)}
      </div>
      {active && <span style={{ color: accent, fontSize: 14 }}>→</span>}
    </div>
  );
}
function RecentRow({ addr, when, accent, line, text, textDim }) {
  return (
    <div style={{
      padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10,
      borderRadius: 6, cursor: 'pointer',
    }}>
      <span style={{ color: textDim }}>↻</span>
      <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, color: text, flex: 1 }}>{addr}</span>
      <span style={{ fontSize: 10, fontFamily: 'ui-monospace, monospace', color: textDim, letterSpacing: 0.5 }}>{when}</span>
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

function TrayMenu({ theme }) {
  const isDark = theme === 'dark';
  const accent = hudTokens.cyan;
  return (
    <div style={{ width: '100%', height: '100%', background: isDark ? 'oklch(0.14 0.02 250)' : 'oklch(0.92 0.01 240)', position: 'relative', fontFamily: hudTokens.fontSans }}>
      {/* menubar */}
      <div style={{ height: 28, background: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 14, fontFamily: hudTokens.fontMono, fontSize: 11, color: isDark ? '#fff' : '#222', letterSpacing: 1 }}>
        <span style={{ flex: 1 }} />
        <span style={{ color: accent, fontSize: 13 }}>弾</span>
        <span>🔋</span>
        <span>🔊</span>
        <span>14:02</span>
      </div>
      {/* menu pop */}
      <div style={{
        position: 'absolute', top: 32, right: 66,
        width: 260, background: isDark ? 'oklch(0.18 0.022 250 / 0.95)' : 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${isDark ? hudTokens.line : hudTokens.lightLine}`,
        borderRadius: 8, boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
        padding: 6, color: isDark ? hudTokens.text : hudTokens.lightText, fontSize: 12,
      }}>
        <div style={{ padding: '8px 10px', borderBottom: `1px solid ${isDark ? hudTokens.line : hudTokens.lightLine}`, marginBottom: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <StatusDot color={accent} size={7} />
            <span style={{ fontWeight: 600 }}>Danmu Client</span>
            <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9, color: isDark ? hudTokens.textDim : hudTokens.lightTextDim, letterSpacing: 1 }}>v4.8.7</span>
          </div>
          <div style={{ fontSize: 10, color: isDark ? hudTokens.textDim : hudTokens.lightTextDim, fontFamily: hudTokens.fontMono, letterSpacing: 0.5, marginTop: 4 }}>
            尚未連線 · 點選下方項目開始連線
          </div>
        </div>
        {[
          { k: '顯示 / 隱藏 overlay', sc: '⌘⇧D' },
          { k: '暫停接收', sc: '⌘⇧P' },
          { k: '清空畫面', sc: '⌘⇧K' },
        ].map(m => (
          <div key={m.k} style={{ display: 'flex', padding: '6px 10px', borderRadius: 4, cursor: 'pointer', alignItems: 'center' }}>
            <span style={{ flex: 1 }}>{m.k}</span>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: isDark ? hudTokens.textDim : hudTokens.lightTextDim, letterSpacing: 1 }}>{m.sc}</span>
          </div>
        ))}
        <div style={{ height: 1, background: isDark ? hudTokens.line : hudTokens.lightLine, margin: '4px 0' }} />
        <div style={{ padding: '6px 10px', display: 'flex', alignItems: 'center' }}>
          <span style={{ flex: 1 }}>顯示於</span>
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: isDark ? hudTokens.textDim : hudTokens.lightTextDim, letterSpacing: 0.5 }}>主螢幕 ▸</span>
        </div>
        <div style={{ padding: '6px 10px', display: 'flex', alignItems: 'center' }}>
          <span style={{ flex: 1 }}>伺服器</span>
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: isDark ? hudTokens.textDim : hudTokens.lightTextDim, letterSpacing: 0.5 }}>已連線 ▸</span>
        </div>
        <div style={{ height: 1, background: isDark ? hudTokens.line : hudTokens.lightLine, margin: '4px 0' }} />
        <div style={{ padding: '6px 10px', cursor: 'pointer' }}>開啟 Admin 後台…</div>
        <div style={{ padding: '6px 10px', cursor: 'pointer' }}>偏好設定…</div>
        <div style={{ padding: '6px 10px', cursor: 'pointer', color: hudTokens.crimson }}>退出 Danmu</div>
      </div>
    </div>
  );
}

Object.assign(window, { DesktopClient });
