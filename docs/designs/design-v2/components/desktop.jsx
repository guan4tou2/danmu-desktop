// Desktop Client (Electron) — 5 scenarios.
// firstrun (gate) → overlay + control + tray → disconnected fallback.
// NO host/主持人 language anywhere. Control window is DISPLAY control only,
// not viewer send params (those live in the viewer).

function DesktopClient({ theme = 'dark', scenario = 'overlay' }) {
  if (scenario === 'firstrun')     return <FirstRunGate    theme={theme} />;
  if (scenario === 'overlay')      return <OverlayOnDesktop theme={theme} />;
  if (scenario === 'disconnected') return <OverlayOnDesktop theme={theme} disconnected />;
  if (scenario === 'control')      return <ControlWindow   theme={theme} />;
  if (scenario === 'tray')         return <TrayMenu        theme={theme} />;
  if (scenario === 'tray-disconnected') return <TrayMenu   theme={theme} disconnected />;
  return null;
}

/* ------------------- 1. Overlay on Desktop ------------------- */

function OverlayOnDesktop({ theme, disconnected }) {
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

      {/* Floating danmu — pass-through overlay (hidden when disconnected) */}
      {!disconnected && (
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
      )}

      {/* Disconnected toast — only thing shown when offline */}
      {disconnected && (
        <div style={{
          position: 'absolute', top: 24, right: 24,
          width: 320,
          background: 'rgba(15, 23, 42, 0.92)',
          backdropFilter: 'blur(20px)',
          border: `1px solid rgba(251, 191, 36, 0.4)`,
          borderRadius: 12,
          padding: '14px 16px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
          fontFamily: hudTokens.fontSans,
          color: '#fff',
          display: 'flex', gap: 12, alignItems: 'flex-start',
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: 'rgba(251, 191, 36, 0.15)',
            border: `1px solid rgba(251, 191, 36, 0.4)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ fontSize: 18, color: hudTokens.amber }}>⚠</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>Danmu Desktop</span>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: 'rgba(255,255,255,0.4)', letterSpacing: 0.5 }}>14:02</span>
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: hudTokens.amber, marginBottom: 4 }}>無法連線到伺服器</div>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: 'rgba(255,255,255,0.55)', letterSpacing: 0.3, lineHeight: 1.5 }}>
              ws://danmu.local:4001<br />
              重連中（第 4 次）· 退避 8s
            </div>
          </div>
        </div>
      )}
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
    { k: 'overlay', icon: '▢', zh: 'Overlay',  en: 'DISPLAY' },
    { k: 'conn',    icon: '⇌', zh: '連線',     en: 'CONNECTION' },
    { k: 'keys',    icon: '⌘', zh: '快捷鍵',   en: 'SHORTCUTS' },
    { k: 'update',  icon: '↻', zh: '更新',     en: 'UPDATES' },
    { k: 'about',   icon: '○', zh: '關於',     en: 'ABOUT' },
  ];

  return (
    <div style={{ width: '100%', height: '100%', background: bg, color: text, fontFamily: hudTokens.fontSans, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Title bar */}
      <div style={{ height: 36, display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px', borderBottom: `1px solid ${line}`, background: panel }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
        <span style={{ flex: 1, textAlign: 'center', fontSize: 12, fontFamily: hudTokens.fontMono, letterSpacing: 1, color: textDim }}>
          Danmu Desktop
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
          {section === 'conn'    && <ConnSection    {...{ panel, raised, line, text, textDim, accent, bg }} />}
          {section === 'keys'    && <KeysSection    {...{ panel, raised, line, text, textDim, accent }} />}
          {section === 'update'  && <UpdateSection  {...{ panel, raised, line, text, textDim, accent }} />}
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
          <HudLabel color={textDim}>DISPLAY · 2 SCREENS DETECTED</HudLabel>
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

function ConnSection({ panel, raised, line, text, textDim, accent, bg }) {
  const [editing, setEditing] = React.useState(false);
  const [url, setUrl] = React.useState('ws://danmu.local:4001');
  const [pwOpen, setPwOpen] = React.useState(false);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
        <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.2 }}>連線設定</div>
        <HudLabel color={textDim}>SERVER · AUTH · STARTUP</HudLabel>
      </div>

      {/* SERVER · live status + inline-editable URL */}
      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel, marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <StatusDot color={accent} size={6} />
          <HudLabel color={textDim}>SERVER · CONNECTED · 02:41:08</HudLabel>
          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
            延遲 23ms · 重連 0 次
          </span>
        </div>
        {editing ? (
          <div style={{ display: 'flex', gap: 6 }}>
            <input
              value={url}
              onChange={e => setUrl(e.target.value)}
              autoFocus
              style={{
                flex: 1, padding: '10px 12px', background: bg, border: `1px solid ${accent}`, borderRadius: 6,
                color: text, fontFamily: hudTokens.fontMono, fontSize: 13, outline: 'none', boxSizing: 'border-box',
                boxShadow: `0 0 0 3px ${hudTokens.cyanSoft}`,
              }}
            />
            <span onClick={() => setEditing(false)} style={{
              padding: '8px 14px', borderRadius: 6, background: accent, color: '#000',
              fontFamily: hudTokens.fontMono, fontSize: 11, fontWeight: 600, letterSpacing: 1,
              cursor: 'pointer', display: 'inline-flex', alignItems: 'center',
            }}>套用</span>
            <span onClick={() => { setEditing(false); setUrl('ws://danmu.local:4001'); }} style={{
              padding: '8px 12px', borderRadius: 6, border: `1px solid ${line}`, color: textDim,
              fontFamily: hudTokens.fontMono, fontSize: 11, cursor: 'pointer', display: 'inline-flex', alignItems: 'center',
            }}>取消</span>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ flex: 1, padding: '10px 12px', background: raised, borderRadius: 6, fontFamily: hudTokens.fontMono, fontSize: 13, color: text, border: `1px solid ${line}` }}>{url}</span>
            <MiniBtn onClick={() => setEditing(true)}>⚙ 更改</MiniBtn>
            <MiniBtn>↻ 重連</MiniBtn>
          </div>
        )}
      </div>

      {/* AUTH · admin password (optional, collapsed by default) */}
      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel, marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} onClick={() => setPwOpen(!pwOpen)}>
          <span style={{ fontSize: 12, color: textDim }}>{pwOpen ? '▾' : '▸'}</span>
          <span style={{ fontSize: 13, fontWeight: 500 }}>管理密碼</span>
          <HudLabel color={textDim}>OPTIONAL · ADMIN ACCESS</HudLabel>
          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: pwOpen ? accent : textDim, letterSpacing: 0.5 }}>
            {pwOpen ? '展開' : '未設定 · 點此設定'}
          </span>
        </div>
        {pwOpen && (
          <div style={{ marginTop: 10 }}>
            <input
              type="password"
              placeholder="僅當你要使用 admin 後台時填寫"
              style={{
                width: '100%', padding: '10px 12px', background: bg, border: `1px solid ${line}`, borderRadius: 6,
                color: text, fontFamily: hudTokens.fontMono, fontSize: 13, outline: 'none', boxSizing: 'border-box',
              }}
            />
            <div style={{ marginTop: 6, fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.3, lineHeight: 1.5 }}>
              密碼存於 macOS Keychain · 僅本機可讀
            </div>
          </div>
        )}
      </div>

      {/* STARTUP · auto-start toggles */}
      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel, marginBottom: 14 }}>
        <HudLabel color={textDim}>STARTUP</HudLabel>
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <StartupRow label="開機啟動 & 自動連線" hint="登入後立即在背景連線到 server" on accent={accent} line={line} text={text} textDim={textDim} />
          <StartupRow label="連線後自動顯示 overlay" hint="不必手動開啟透明層" on accent={accent} line={line} text={text} textDim={textDim} />
          <StartupRow label="背景時保持連線"     hint="關閉控制視窗時仍接收彈幕" on accent={accent} line={line} text={text} textDim={textDim} />
        </div>
      </div>

      {/* RECENT · last-N servers */}
      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel, marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <HudLabel color={textDim}>RECENT CONNECTIONS</HudLabel>
          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
            點擊以快速切換
          </span>
        </div>
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <RecentRow addr="ws://danmu.local:4001"  when="目前 · 02:41:08" accent={accent} line={line} text={text} textDim={textDim} active />
          <RecentRow addr="wss://danmu.acme.co"    when="昨天 14:22"   accent={accent} line={line} text={text} textDim={textDim} />
          <RecentRow addr="ws://192.168.1.50:4001" when="3 天前"      accent={accent} line={line} text={text} textDim={textDim} />
        </div>
      </div>

      {/* MESSAGE FLOW · sparkline */}
      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel, marginBottom: 14 }}>
        <HudLabel color={textDim}>MESSAGE FLOW · LAST 30s</HudLabel>
        <div style={{ marginTop: 10 }}>
          <Sparkline data={[2, 4, 3, 6, 5, 7, 9, 6, 8, 11, 8, 10, 9, 12, 14, 11, 13, 15, 12, 10, 8, 11, 14, 16, 13, 11, 9, 12, 15, 18]} color={accent} width={560} height={56} />
        </div>
        <div style={{ display: 'flex', gap: 20, marginTop: 8, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
          <span>RX · <span style={{ color: text }}>1,284</span></span>
          <span>RATE · <span style={{ color: accent }}>4.2/s</span></span>
          <span>PEAK · <span style={{ color: text }}>18/s</span></span>
        </div>
      </div>

      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
        部署文件 → <span style={{ color: accent, cursor: 'pointer' }}>github.com/.../docs/server-setup</span>
      </div>
    </>
  );
}

function StartupRow({ label, hint, on, accent, line, text, textDim }) {
  const [v, setV] = React.useState(on);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: text }}>{label}</div>
        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.3, marginTop: 2 }}>{hint}</div>
      </div>
      <span onClick={() => setV(!v)} style={{ cursor: 'pointer' }}><Toggle on={v} accent={accent} line={line} /></span>
    </div>
  );
}

function UpdateSection({ panel, raised, line, text, textDim, accent }) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
        <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.2 }}>更新</div>
        <HudLabel color={textDim}>AUTO-UPDATE · CHANGELOG</HudLabel>
      </div>

      {/* Status card */}
      <div style={{
        padding: 16, borderRadius: 8, border: `1px solid ${line}`, background: panel,
        display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14,
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 8,
          background: 'rgba(134, 239, 172, 0.12)', border: `1px solid ${hudTokens.lime}55`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: hudTokens.lime, fontSize: 22,
        }}>✓</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: text }}>已是最新版本</div>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5, marginTop: 3 }}>
            v4.8.7 · 5 分鐘前檢查 · 下次自動檢查 24h 後
          </div>
        </div>
        <ActionBtn accent={accent} line={line} text={text}>立即檢查</ActionBtn>
      </div>

      {/* Update preferences */}
      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel, marginBottom: 14 }}>
        <HudLabel color={textDim}>UPDATE BEHAVIOR</HudLabel>
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <StartupRow label="自動下載更新"   hint="背景下載 · 下次啟動套用" on  accent={accent} line={line} text={text} textDim={textDim} />
          <StartupRow label="加入測試版通道" hint="搶先測試新功能 · 可能不穩"  accent={accent} line={line} text={text} textDim={textDim} />
        </div>
      </div>

      {/* Changelog */}
      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <HudLabel color={textDim}>RECENT CHANGES</HudLabel>
          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 0.5, cursor: 'pointer' }}>
            完整 changelog →
          </span>
        </div>
        <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column' }}>
          <ChangeRow ver="4.8.7" date="2025-08-12" tag="CURRENT" tagColor={accent} items={['修復多螢幕切換時 overlay 閃爍', 'Tray 圖示在 macOS 26 上的對齊']} text={text} textDim={textDim} line={line} />
          <ChangeRow ver="4.8.6" date="2025-08-04" items={['新增 ⌘⇧M 切換主/副螢幕', 'Sparkline 改為 30s 滾動']} text={text} textDim={textDim} line={line} />
          <ChangeRow ver="4.8.5" date="2025-07-28" items={['密碼存入 macOS Keychain', 'WebSocket 重連退避策略']} text={text} textDim={textDim} line={line} last />
        </div>
      </div>
    </>
  );
}

function ChangeRow({ ver, date, tag, tagColor, items, text, textDim, line, last }) {
  return (
    <div style={{ padding: '10px 0', borderBottom: last ? 'none' : `1px solid ${line}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 600, color: text, letterSpacing: 0.3 }}>v{ver}</span>
        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.3 }}>{date}</span>
        {tag && (
          <span style={{
            fontFamily: hudTokens.fontMono, fontSize: 8, letterSpacing: 1,
            padding: '1px 6px', borderRadius: 2, color: tagColor,
            background: hudTokens.cyanSoft, border: `1px solid ${tagColor}55`,
          }}>{tag}</span>
        )}
      </div>
      <ul style={{ margin: 0, padding: '0 0 0 16px', fontSize: 11, color: textDim, lineHeight: 1.7 }}>
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </div>
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
          <div style={{ fontSize: 16, fontWeight: 600 }}>Danmu Desktop</div>
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

function RecentRow({ addr, when, accent, line, text, textDim, active }) {
  return (
    <div style={{
      padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10,
      borderRadius: 6, cursor: 'pointer',
      border: `1px solid ${active ? accent : line}`,
      background: active ? hudTokens.cyanSoft : 'transparent',
    }}>
      <span style={{ color: active ? accent : textDim }}>{active ? '●' : '↻'}</span>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: active ? accent : text, flex: 1, fontWeight: active ? 600 : 400 }}>{addr}</span>
      <span style={{ fontSize: 10, fontFamily: hudTokens.fontMono, color: textDim, letterSpacing: 0.5 }}>{when}</span>
    </div>
  );
}
/* ------------------- 4. Tray Menu ------------------- */

function TrayMenu({ theme, disconnected }) {
  const isDark = theme === 'dark';
  const accent = disconnected ? hudTokens.amber : hudTokens.cyan;
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
            <span style={{ fontWeight: 600 }}>Danmu Desktop</span>
            <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9, color: isDark ? hudTokens.textDim : hudTokens.lightTextDim, letterSpacing: 1 }}>v4.8.7</span>
          </div>
          <div style={{ fontSize: 10, color: isDark ? hudTokens.textDim : hudTokens.lightTextDim, fontFamily: hudTokens.fontMono, letterSpacing: 0.5, marginTop: 4 }}>
            {disconnected ? '連線中斷 · 重連中…' : '已連線 · ws://danmu.local:4001'}
          </div>
        </div>
        {disconnected ? (
          <>
            <TrayRow label="重新連線…" sc="↵" isDark={isDark} accent={accent} />
            <TrayRow label="連線設定…" isDark={isDark} />
            <div style={{ height: 1, background: isDark ? hudTokens.line : hudTokens.lightLine, margin: '4px 0' }} />
            <TrayRow label="關於 Danmu Desktop…" isDark={isDark} />
            <TrayRow label="結束 Danmu" isDark={isDark} danger />
          </>
        ) : (
          <>
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
          </>
        )}
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

/* ------------------- 5. First-run Gate ------------------- */
// Modal-as-app — until user enters server URL & validates, the rest of
// the app is unavailable. Reveals on every launch if no server.yaml exists,
// or if last-known server can't be reached after timeout.

function FirstRunGate({ theme }) {
  const isDark = theme === 'dark';
  const bg = isDark ? hudTokens.bg0 : hudTokens.lightBg0;
  const panel = isDark ? hudTokens.bg1 : '#fff';
  const raised = isDark ? hudTokens.bg2 : hudTokens.lightBg2;
  const line = isDark ? hudTokens.line : hudTokens.lightLine;
  const text = isDark ? hudTokens.text : hudTokens.lightText;
  const textDim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  const accent = hudTokens.cyan;
  const [step, setStep] = React.useState(2); // 1 welcome · 2 server · 3 testing · 4 done
  const [url, setUrl] = React.useState('ws://danmu.local:4001');
  const [remember, setRemember] = React.useState(true);

  return (
    <div style={{
      width: '100%', height: '100%', position: 'relative',
      background: isDark
        ? 'radial-gradient(circle at 30% 20%, #1e293b 0%, #020617 60%)'
        : 'radial-gradient(circle at 30% 20%, #e2e8f0 0%, #cbd5e1 60%)',
      fontFamily: hudTokens.fontSans, color: text, overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* macOS title bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 36,
        background: panel, borderBottom: `1px solid ${line}`,
        display: 'flex', alignItems: 'center', gap: 8, padding: '0 14px',
      }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
        <span style={{ flex: 1, textAlign: 'center', fontSize: 12, fontFamily: hudTokens.fontMono, letterSpacing: 1, color: textDim }}>
          Danmu Desktop · 連線設定
        </span>
        <StatusDot color={hudTokens.amber} size={6} />
        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.amber, letterSpacing: 1 }}>NO CONNECTION</span>
      </div>

      {/* Card */}
      <div style={{
        width: 560, marginTop: 24, padding: '36px 40px 32px',
        background: panel, border: `1px solid ${line}`, borderRadius: 12,
        boxShadow: '0 30px 60px rgba(0,0,0,0.45)',
      }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 22 }}>
          <DanmuHero title="Danmu Fire" size="medium" align="center" subtitle="Desktop · Electron app" />
        </div>

        <div style={{ fontSize: 14, color: text, marginBottom: 4 }}>連到你的彈幕伺服器</div>
        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.3, marginBottom: 18, lineHeight: 1.6 }}>
          首次啟動需要設定伺服器位址 · 設定後會記住，下次自動重連
        </div>

        {/* Stepper */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 22, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>
          {['SERVER', 'TEST', 'READY'].map((label, i) => {
            const idx = i + 1;
            const active = step === idx + 1;  // 2 = server, 3 = test, 4 = ready
            const done = step > idx + 1;
            return (
              <React.Fragment key={label}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: active ? accent : done ? hudTokens.lime : textDim,
                }}>
                  <span style={{
                    width: 18, height: 18, borderRadius: '50%',
                    border: `1px solid ${active ? accent : done ? hudTokens.lime : line}`,
                    background: active ? hudTokens.cyanSoft : done ? 'rgba(134, 239, 172,0.12)' : 'transparent',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 10, fontWeight: 600,
                  }}>{done ? '✓' : idx}</span>
                  <span>{label}</span>
                </span>
                {i < 2 && <span style={{ flex: 1, height: 1, background: line }} />}
              </React.Fragment>
            );
          })}
        </div>

        {/* URL field */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1, marginBottom: 6 }}>SERVER URL</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              value={url}
              onChange={e => setUrl(e.target.value)}
              style={{
                flex: 1, padding: '12px 14px', background: bg, border: `1px solid ${accent}`, borderRadius: 6,
                color: text, fontFamily: hudTokens.fontMono, fontSize: 14, outline: 'none', boxSizing: 'border-box',
                boxShadow: `0 0 0 3px ${hudTokens.cyanSoft}`,
              }}
            />
            <span style={{
              padding: '12px 18px', borderRadius: 6, background: accent, color: '#000',
              fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 600, letterSpacing: 1,
              cursor: 'pointer', display: 'inline-flex', alignItems: 'center',
            }}>測試連線</span>
          </div>
          <div style={{ marginTop: 6, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3, lineHeight: 1.6 }}>
            支援 ws:// 或 wss:// · 區網或公網皆可
          </div>
        </div>

        {/* Recent (if any) */}
        <div style={{
          padding: 12, borderRadius: 6, background: raised, border: `1px solid ${line}`,
          marginBottom: 18,
        }}>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1, marginBottom: 8 }}>之前用過</div>
          {[
            { addr: 'wss://danmu.acme.co', when: '昨天' },
            { addr: 'ws://192.168.1.50:4001', when: '3 天前' },
          ].map(r => (
            <div key={r.addr} style={{ display: 'flex', alignItems: 'center', padding: '5px 0', cursor: 'pointer' }}>
              <span style={{ flex: 1, fontFamily: hudTokens.fontMono, fontSize: 12, color: text }}>{r.addr}</span>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5 }}>{r.when}</span>
            </div>
          ))}
        </div>

        {/* Remember + admin pwd */}
        <div style={{ marginBottom: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => setRemember(!remember)}>
            <span style={{
              width: 16, height: 16, borderRadius: 3,
              border: `1.5px solid ${remember ? accent : line}`,
              background: remember ? accent : 'transparent',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: '#000', fontSize: 11, fontWeight: 700,
            }}>{remember ? '✓' : ''}</span>
            <span style={{ fontSize: 12, color: text }}>記住這個伺服器（下次自動連線）</span>
          </div>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3, lineHeight: 1.6, marginLeft: 26 }}>
            設定存於 <span style={{ color: text }}>~/.danmu/server.yaml</span> · 密碼存入 macOS Keychain
          </div>
        </div>

        {/* Footer actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 18, borderTop: `1px solid ${line}` }}>
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3, cursor: 'pointer' }}>
            部署文件 →
          </span>
          <span style={{ flex: 1 }} />
          <span style={{
            padding: '9px 16px', borderRadius: 6, border: `1px solid ${line}`, color: textDim,
            fontSize: 12, fontWeight: 500, cursor: 'pointer',
          }}>稍後設定</span>
          <span style={{
            padding: '9px 22px', borderRadius: 6, background: accent, color: '#000',
            fontSize: 13, fontWeight: 600, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>連線並開始接收 →</span>
        </div>
      </div>

      {/* Background hint */}
      <div style={{
        position: 'absolute', bottom: 16, left: 0, right: 0, textAlign: 'center',
        fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5,
      }}>
        未完成設定前無法使用 overlay · 可從 ⌘Q 結束
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
