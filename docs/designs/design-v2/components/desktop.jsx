// Desktop Client (Electron) — canonical desktop mirror.
// Control Window uses only Connection / Overlay / About as primary sections.
// Tray is status-only, not a second controller. First-run is represented as
// inline connection setup, not as a standalone desktop surface.

function DesktopClient({ theme = 'dark', scenario = 'overlay', testState }) {
  if (scenario === 'overlay')      return <OverlayOnDesktop theme={theme} />;
  if (scenario === 'disconnected') return <OverlayOnDesktop theme={theme} disconnected />;
  if (scenario === 'control')      return <ControlWindow   theme={theme} defaultTestState={testState} />;
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
              wss://danmu.local/ws<br />
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
// Sidebar: Connection / Overlay / About
// NO viewer send params (font/opacity/speed — those are viewer-only).
// Focuses on DISPLAY control: on/off, screen target, server health.

function ControlWindow({ theme, defaultTestState }) {
  const isDark = theme === 'dark';
  const bg = isDark ? hudTokens.bg0 : hudTokens.lightBg0;
  const panel = isDark ? hudTokens.bg1 : '#fff';
  const raised = isDark ? hudTokens.bg2 : hudTokens.lightBg2;
  const line = isDark ? hudTokens.line : hudTokens.lightLine;
  const text = isDark ? hudTokens.text : hudTokens.lightText;
  const textDim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  const accent = hudTokens.cyan;

  const [section, setSection] = React.useState('conn');

  const navItems = [
    { k: 'conn',    icon: '⇌', zh: '連線',     en: 'CONNECTION' },
    { k: 'overlay', icon: '▢', zh: 'Overlay',  en: 'DISPLAY' },
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
          {section === 'conn'    && <ConnSection    {...{ panel, raised, line, text, textDim, accent, bg }} testState={defaultTestState} />}
          {section === 'overlay' && <OverlaySection {...{ panel, raised, line, text, textDim, accent }} />}
          {section === 'about'   && <AboutSection   {...{ panel, raised, line, text, textDim, accent }} />}
        </div>
      </div>
    </div>
  );
}

function OverlaySection({ panel, raised, line, text, textDim, accent }) {
  // Mockup-only on/off state; real impl reads `data-client-overlay-button`
  // aria-pressed and drives the button copy via overlay-button state in
  // `client-nav.js` (see renderer-modules/connection-status.js).
  const [open, setOpen] = React.useState(true);
  const [syncMulti, setSyncMulti] = React.useState(false);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
        <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.2 }}>Overlay 控制</div>
        <HudLabel color={textDim}>透明層 · 點擊穿透</HudLabel>
      </div>

      {/* Primary control — button, not Toggle. Button state text is the
          source of truth ("▶ 開啟 Overlay" ↔ "◼ 關閉 Overlay"), matching
          the Electron client's `data-client-overlay-button`. */}
      <div style={{
        padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel,
        display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600 }}>顯示彈幕 Overlay</div>
          <div style={{ fontSize: 11, color: textDim, marginTop: 2 }}>快捷鍵: ⌘⇧D</div>
        </div>
        <span
          onClick={() => setOpen(!open)}
          aria-pressed={open}
          style={{
            padding: '10px 18px', borderRadius: 6,
            background: open ? accent : 'transparent',
            color: open ? '#000' : accent,
            border: `1px solid ${accent}`,
            fontFamily: hudTokens.fontSans, fontSize: 13, fontWeight: 600, letterSpacing: 0.5,
            cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
          }}
        >
          {open ? '◼ 關閉 Overlay' : '▶ 開啟 Overlay'}
        </span>
      </div>

      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel, marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 12, fontWeight: 500 }}>顯示於</span>
          <HudLabel color={textDim}>DISPLAY · 2 SCREENS DETECTED</HudLabel>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <ScreenChip label="主螢幕" meta="Built-in · 2560×1600" active={!syncMulti} accent={accent} line={line} text={text} textDim={textDim} />
          <ScreenChip label="副螢幕" meta="HDMI-1 · 1920×1080" accent={accent} line={line} text={text} textDim={textDim} />
        </div>
        {/* Sync multi-display checkbox — mirrors impl
            `#sync-multi-display-checkbox`. When on, screen-picker is
            disabled and overlay spans every detected display. */}
        <label style={{
          marginTop: 10, display: 'flex', alignItems: 'center', gap: 8,
          fontSize: 12, color: text, cursor: 'pointer',
        }}>
          <span
            onClick={() => setSyncMulti(!syncMulti)}
            style={{
              width: 16, height: 16, borderRadius: 3,
              border: `1.5px solid ${syncMulti ? accent : line}`,
              background: syncMulti ? accent : 'transparent',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: '#000', fontSize: 11, fontWeight: 700, flexShrink: 0,
            }}
          >{syncMulti ? '✓' : ''}</span>
          <span>Enable synchronous multi-display</span>
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.3, marginLeft: 'auto' }}>
            所有螢幕同步顯示 overlay
          </span>
        </label>
      </div>

      {/* Single secondary action. Start/stop is owned by the primary button
          above; any extra "start receive" / "pause" buttons would duplicate
          that control and are intentionally absent in impl
          (`index.html` only has clear). */}
      <div style={{ display: 'flex', gap: 8 }}>
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

function ConnSection({ panel, raised, line, text, textDim, accent, bg, testState }) {
  const [editing, setEditing] = React.useState(false);
  const [host, setHost] = React.useState('danmu.local');
  const [pwOpen, setPwOpen] = React.useState(false);
  // 4 states: idle (未測試) / testing (測試中) / ok (成功) / fail (失敗).
  // Driven by silent one-shot WSS handshake — NOT a live connection
  // status, since the conn page has no overlay (overlay tab owns that).
  const [tState, setTState] = React.useState(testState || 'idle');

  // Parse host input → canonical URL.
  // Accepts: hostname, host:port, or full URL (auto-strips
  // wss:// / https:// scheme + trailing /ws or /).
  const parseHost = (raw) => raw.trim()
    .replace(/^wss?:\/\//, '').replace(/^https?:\/\//, '')
    .replace(/\/ws\/?$/, '').replace(/\/$/, '');
  const parsed = parseHost(host);
  // Port 443 is the default (hidden); custom ports stay in the host string.
  const canonicalUrl = `wss://${parsed}/ws`;

  const TestChip = () => {
    const chipStyles = {
      idle:    { color: textDim,         icon: '—', label: 'LAST TEST · —' },
      testing: { color: accent,          icon: '⟳', label: '測試中…' },
      ok:      { color: accent,          icon: '✓', label: '02:41:08 · 23ms' },
      fail:    { color: hudTokens.amber, icon: '✗', label: '02:41:08 · Connection refused' },
    };
    const c = chipStyles[tState];
    return (
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '4px 10px', borderRadius: 4,
        background: tState === 'idle' ? 'transparent' : `${c.color}11`,
        border: `1px solid ${tState === 'idle' ? line : `${c.color}33`}`,
        fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5, color: c.color,
      }}>
        <span>{c.icon}</span>
        <span>{c.label}</span>
      </div>
    );
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
        <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.2 }}>連線設定</div>
        <HudLabel color={textDim}>SERVER · CONFIGURE</HudLabel>
      </div>

      {/* SERVER · single host field + live canonical preview + test button.
          Conn page is configure-only — NO live connection here; live status
          lives in OverlaySection while the overlay window is running. */}
      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel, marginBottom: 14 }}>
        <div style={{ marginBottom: 10 }}>
          <TestChip />
        </div>

        {editing ? (
          <div>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1, marginBottom: 6 }}>SERVER</div>
            <div style={{ display: 'flex', gap: 6 }}>
              <input
                value={host}
                onChange={e => setHost(e.target.value)}
                autoFocus
                placeholder="danmu.acme.co 或 192.168.1.50:8443"
                style={{
                  flex: 1, padding: '10px 12px', background: bg, border: `1px solid ${accent}`, borderRadius: 6,
                  color: text, fontFamily: hudTokens.fontMono, fontSize: 13, outline: 'none', boxSizing: 'border-box',
                  boxShadow: `0 0 0 3px ${hudTokens.cyanSoft}`,
                }}
              />
              <span onClick={() => { setHost(parseHost(host)); setEditing(false); }} style={{
                padding: '8px 14px', borderRadius: 6, background: accent, color: '#000',
                fontFamily: hudTokens.fontMono, fontSize: 11, fontWeight: 600, letterSpacing: 1,
                cursor: 'pointer', display: 'inline-flex', alignItems: 'center',
              }}>套用</span>
              <span onClick={() => { setEditing(false); setHost('danmu.local'); }} style={{
                padding: '8px 12px', borderRadius: 6, border: `1px solid ${line}`, color: textDim,
                fontFamily: hudTokens.fontMono, fontSize: 11, cursor: 'pointer', display: 'inline-flex', alignItems: 'center',
              }}>取消</span>
            </div>
            <div style={{ marginTop: 6, fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.3, lineHeight: 1.5 }}>
              輸入 hostname 或 host:port · 自動 strip wss:// / https:// / /ws · port 預設 443（隱藏）
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div onClick={() => setEditing(true)} style={{
              padding: '10px 12px', background: raised, borderRadius: 6,
              fontFamily: hudTokens.fontMono, fontSize: 13, color: text,
              border: `1px solid ${line}`, cursor: 'text',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ flex: 1 }}>{parsed}</span>
              <span style={{ fontSize: 11, color: textDim, flexShrink: 0 }}>✎</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                flex: 1, padding: '6px 12px', borderRadius: 4,
                background: `${accent}08`, border: `1px solid ${accent}22`,
                fontFamily: hudTokens.fontMono, fontSize: 11, color: accent, letterSpacing: 0.3,
              }}>
                {canonicalUrl}
              </div>
              {/* Mockup-only: click cycles state for canvas demo. Real impl
                  fires a one-shot WSS handshake via IPC. */}
              <span onClick={() => setTState(tState === 'ok' ? 'fail' : tState === 'fail' ? 'idle' : tState === 'idle' ? 'testing' : 'ok')} style={{
                flex: 'none', padding: '6px 12px', textAlign: 'center', borderRadius: 4,
                border: `1px solid ${accent}`, background: hudTokens.cyanSoft,
                color: accent, fontSize: 11, cursor: 'pointer', fontFamily: hudTokens.fontSans,
              }}>⚐ 測試</span>
            </div>
          </div>
        )}

        <div style={{ marginTop: 8, fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.3, lineHeight: 1.5 }}>
          測試：one-shot WSS handshake 驗證，不觸發 overlay、不留 connection
        </div>
      </div>

      {/* AUTH · WebSocket Token (optional, collapsed by default).
          NOT an admin password — desktop only subscribes to the broadcast
          channel. Required when server has WS_REQUIRE_TOKEN=true. */}
      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel, marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} onClick={() => setPwOpen(!pwOpen)}>
          <span style={{ fontSize: 12, color: textDim }}>{pwOpen ? '▾' : '▸'}</span>
          <span style={{ fontSize: 13, fontWeight: 500 }}>WebSocket Token</span>
          <HudLabel color={textDim}>OPTIONAL · WSS HANDSHAKE</HudLabel>
          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: pwOpen ? accent : textDim, letterSpacing: 0.5 }}>
            {pwOpen ? '展開' : '未設定 · 點此設定'}
          </span>
        </div>
        {pwOpen && (
          <div style={{ marginTop: 10 }}>
            <input
              type="password"
              placeholder="Server 啟用 WS_REQUIRE_TOKEN 時，從 admin 抄出 token 貼入"
              style={{
                width: '100%', padding: '10px 12px', background: bg, border: `1px solid ${line}`, borderRadius: 6,
                color: text, fontFamily: hudTokens.fontMono, fontSize: 13, outline: 'none', boxSizing: 'border-box',
              }}
            />
            <div style={{ marginTop: 6, fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.3, lineHeight: 1.5 }}>
              僅當 server 啟用 WS_REQUIRE_TOKEN 時需要 · 從 Admin → System → Security 取得
            </div>
          </div>
        )}
      </div>

      {/* RECENT · last-N servers (host-only; canonical wss://HOST/ws derived).
          TODO (2026-05-16): impl currently stores ONE server in localStorage
          (host/port/wsToken/displayIndex single key). The 3 demo entries
          below are design fiction. Two paths to align — A) trim mirror to
          1 entry, B) impl adds multi-server history schema. Engineering
          confirmation needed before either move. Keep 3 here for now so
          the design proposal stays visible. */}
      <div style={{ padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel, marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <HudLabel color={textDim}>RECENT CONNECTIONS</HudLabel>
          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
            點擊以快速切換
          </span>
        </div>
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <RecentRow addr="danmu.local"          when="上次 · 昨天 16:30" accent={accent} line={line} text={text} textDim={textDim} active />
          <RecentRow addr="danmu.acme.co"        when="3 天前"   accent={accent} line={line} text={text} textDim={textDim} />
          <RecentRow addr="192.168.1.50:8443"    when="1 週前"   accent={accent} line={line} text={text} textDim={textDim} />
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
      <div style={{ marginTop: 14, padding: 14, borderRadius: 8, border: `1px solid ${line}`, background: panel }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <HudLabel color={textDim}>RECENT CHANGES</HudLabel>
          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 0.5, cursor: 'pointer' }}>
            完整 changelog →
          </span>
        </div>
        <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column' }}>
          <ChangeRow ver="4.8.7" date="2025-08-12" tag="CURRENT" tagColor={accent} items={['修復多螢幕切換時 overlay 閃爍', 'Tray 圖示在 macOS 26 上的對齊']} text={text} textDim={textDim} line={line} />
          <ChangeRow ver="4.8.6" date="2025-08-04" items={['新增 ⌘⇧M 切換主/副螢幕', 'WebSocket Token UI 從 conn 區整理']} text={text} textDim={textDim} line={line} />
          <ChangeRow ver="4.8.5" date="2025-07-28" items={['WebSocket 重連退避策略 (3s → 30s + jitter)', 'TrayMenu 改為 status-only']} text={text} textDim={textDim} line={line} last />
        </div>
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
            {disconnected ? '連線中斷 · 重連中…' : '已連線 · wss://danmu.local/ws'}
          </div>
        </div>
        {/* Single canonical schema — only status text + accent color change
            between Connected / Disconnected. Mirrors main.js rebuildTrayMenu. */}
        <TrayRow label="Overlay 視窗" meta={disconnected ? '0 個' : '1 個'} isDark={isDark} />
        <TrayToggleRow label="待機畫面" sc="⌘⇧D" on={!disconnected} accent={accent} isDark={isDark} />
        <div style={{ height: 1, background: isDark ? hudTokens.line : hudTokens.lightLine, margin: '4px 0' }} />
        <TrayRow label="伺服器" meta={disconnected ? '中斷 ▸' : '已連線 ▸'} isDark={isDark} />
        <div style={{ height: 1, background: isDark ? hudTokens.line : hudTokens.lightLine, margin: '4px 0' }} />
        <TrayRow label="開啟控制視窗…" sc="⌘⇧C" isDark={isDark} />
        <TrayRow label="偏好設定…" isDark={isDark} />
        <TrayRow label="關於 Danmu Fire…" isDark={isDark} />
        <div style={{ height: 1, background: isDark ? hudTokens.line : hudTokens.lightLine, margin: '4px 0' }} />
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
