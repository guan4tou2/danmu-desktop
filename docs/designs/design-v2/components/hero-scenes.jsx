// Admin Login — full-screen, Hero lockup on top, sky-300 brand color.
function AdminLogin({ theme = 'dark' }) {
  const isDark = theme === 'dark';
  const bg = isDark
    ? 'radial-gradient(ellipse at 50% 30%, oklch(0.20 0.03 240) 0%, oklch(0.10 0.02 250) 70%)'
    : hudTokens.lightBg0;
  const panel = isDark ? 'oklch(0.18 0.025 250)' : '#fff';
  const raised = isDark ? 'oklch(0.14 0.025 250)' : hudTokens.lightBg2;
  const line = isDark ? hudTokens.line : hudTokens.lightLine;
  const text = isDark ? hudTokens.text : hudTokens.lightText;
  const textDim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  const accent = hudTokens.cyan;

  return (
    <div style={{
      width: '100%', height: '100%', background: bg, color: text,
      fontFamily: hudTokens.fontSans, display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 32, position: 'relative', overflow: 'hidden',
    }}>
      <HudBackdrop opacity={0.25} />
      <div style={{
        width: 420, background: panel, border: `1px solid ${line}`,
        borderRadius: 12, padding: '36px 32px 28px', position: 'relative', zIndex: 1,
        boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
      }}>
        {/* Hero — large size per spec */}
        <div style={{ textAlign: 'center', paddingBottom: 22, borderBottom: `1px solid ${line}` }}>
          <DanmuHero
            title="Danmu Fire"
            theme={theme}
            size="large"
            subtitle="管理後台登入"
            subStyle={{ fontSize: 13, margin: '10px 0 0', color: textDim }}
          />
        </div>

        {/* Form */}
        <div style={{ marginTop: 22 }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim, marginBottom: 6 }}>
              管理密碼
            </div>
            <input type="password" defaultValue="••••••••••" style={{
              width: '100%', padding: '11px 14px', background: raised,
              border: `1px solid ${line}`, borderRadius: 6, color: text,
              fontFamily: hudTokens.fontMono, fontSize: 13, outline: 'none', boxSizing: 'border-box',
              letterSpacing: 3,
            }} />
            <div style={{ marginTop: 8, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
              密碼於 config.yaml 設定 · 忘記可從 server CLI 重設
            </div>
          </div>
          <button style={{
            width: '100%', padding: '12px 16px', background: accent, color: '#000',
            border: 'none', borderRadius: 6, cursor: 'pointer',
            fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 700, letterSpacing: 2,
          }}>登入 ▶</button>
        </div>

        {/* Status chip */}
        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '4px 10px', borderRadius: 999,
            background: hudTokens.cyanSoft, border: `1px solid ${hudTokens.cyanLine}`,
            fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1.5, color: accent,
          }}>
            <StatusDot color={accent} size={6} />伺服器上線
          </span>
          <span style={{
            padding: '4px 10px', borderRadius: 999, border: `1px solid ${line}`,
            fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1.5, color: textDim,
          }}>v4.8.7</span>
        </div>
      </div>
    </div>
  );
}

// Overlay Idle — what the screen shows when overlay is on but nobody's fired yet.
function OverlayIdle({ theme = 'dark' }) {
  const accent = hudTokens.cyan;
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'radial-gradient(ellipse at 50% 40%, #0b1220 0%, #000 80%)',
      color: '#fff', fontFamily: hudTokens.fontSans,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: 40,
    }}>
      <HudBackdrop opacity={0.2} />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <DanmuHero
          title="Danmu Fire"
          theme={theme}
          size="hero"
          subtitle="掃描 QR code 或打開 danmu.im/42 — 開始送彈幕"
        />
        {/* Connection chip */}
        <div style={{ marginTop: 26, display: 'inline-flex', alignItems: 'center', gap: 16, padding: '10px 20px', borderRadius: 999, border: `1px solid ${hudTokens.cyanLine}`, background: hudTokens.cyanSoft }}>
          <StatusDot color={accent} size={8} />
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, letterSpacing: 2, color: accent }}>OVERLAY READY</span>
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1, color: HERO_SLATE_300 }}>· 等待中</span>
        </div>

        {/* QR placeholder */}
        <div style={{
          margin: '34px auto 0', width: 140, height: 140,
          background: '#fff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)', position: 'relative',
        }}>
          <svg width="108" height="108" viewBox="0 0 21 21">
            {Array.from({ length: 21 * 21 }).map((_, i) => {
              const x = i % 21, y = (i / 21) | 0;
              const isCorner = (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13);
              const on = isCorner
                ? ((x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4))
                    || (x >= 14 && (x === 14 || x === 20 || y === 0 || y === 6 || (x >= 16 && x <= 18 && y >= 2 && y <= 4)))
                    || (y >= 14 && (y === 14 || y === 20 || x === 0 || x === 6 || (x >= 2 && x <= 4 && y >= 16 && y <= 18))))
                : ((x * 7 + y * 13 + x * y) % 3 === 0);
              return on ? <rect key={i} x={x} y={y} width="1" height="1" fill="#000" /> : null;
            })}
          </svg>
        </div>
        <div style={{ marginTop: 12, fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 2, color: HERO_SLATE_300 }}>
          DANMU.IM/42
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AdminLogin, OverlayIdle });
