// Konami Code easter egg overlay scenario.
// Sequence: ↑ ↑ ↓ ↓ ← → ← → B A
// On trigger: all on-screen danmu freeze, scale up, then explode outward as particles.
// Combo HUD lives in a corner — only the operator sees it (overlay is pass-through to audience).

function KonamiOverlay({ theme = 'dark', state = 'inputting' }) {
  // state = 'inputting' (combo halfway) | 'firing' (explosion frame)
  const isDark = theme === 'dark';
  const accent = hudTokens.cyan;
  const deskBg = isDark
    ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 60%, #020617 100%)'
    : 'linear-gradient(135deg, #cbd5e1 0%, #e2e8f0 100%)';
  const fakeWindow = isDark ? '#0f172a' : '#fff';
  const fakeWinLine = isDark ? hudTokens.line : hudTokens.lightLine;

  // Konami sequence — entered = pressed so far, total = 10
  const SEQ = ['▲', '▲', '▼', '▼', '◀', '▶', '◀', '▶', 'B', 'A'];
  const entered = state === 'firing' ? SEQ.length : 6;  // 6 of 10 keys pressed in 'inputting' demo

  const danmuSeed = [
    { text: '請問這能錄下來嗎', top: 110, left: 920, color: '#fff',          fs: 28 },
    { text: '同意 +1 🔥',      top: 180, left: 240, color: accent,            fs: 32 },
    { text: '聲音小一點',      top: 280, left: 700, color: hudTokens.amber,   fs: 26 },
    { text: '投影片能分享嗎？', top: 380, left: 80,  color: accent,            fs: 30 },
    { text: '好看 ✨',         top: 460, left: 540, color: hudTokens.lime,    fs: 34 },
    { text: '+1',             top: 520, left: 320, color: '#fff',            fs: 30 },
    { text: '👏👏👏',          top: 600, left: 880, color: hudTokens.amber,   fs: 36 },
  ];

  return (
    <div style={{
      width: '100%', height: '100%', background: deskBg, position: 'relative', overflow: 'hidden',
      fontFamily: hudTokens.fontSans,
    }}>
      {/* Fake Keynote */}
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
        <div style={{ flex: 1, background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: '#fff', fontFamily: hudTokens.fontDisplay, fontSize: 52, fontWeight: 700, letterSpacing: -1, textAlign: 'center' }}>
            為什麼我們<br /><span style={{ color: accent }}>需要彈幕</span>？
          </div>
        </div>
      </div>

      {/* DANMU LAYER — frozen mid-screen, exploding when state===firing */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {danmuSeed.map((d, i) => {
          if (state === 'firing') {
            // Explosion: each piece flies in a direction, scales up + rotates + fades
            const angle = (i * 360) / danmuSeed.length;
            const dist = 600;
            const dx = Math.cos((angle * Math.PI) / 180) * dist;
            const dy = Math.sin((angle * Math.PI) / 180) * dist;
            return (
              <div key={i} style={{
                position: 'absolute', top: d.top, left: d.left,
                color: d.color, fontSize: d.fs * 1.6, fontWeight: 700,
                fontFamily: hudTokens.fontDisplay, whiteSpace: 'nowrap',
                textShadow: `0 0 24px ${d.color}, 0 0 48px ${d.color}, 0 2px 6px rgba(0,0,0,0.8)`,
                transform: `translate(${dx * 0.5}px, ${dy * 0.5}px) rotate(${angle}deg) scale(1.4)`,
                opacity: 0.85,
                animation: `dm-explode-${i} 1.6s ease-out infinite`,
                filter: `drop-shadow(0 0 12px ${d.color})`,
              }}>
                {d.text}
                <style>{`
                  @keyframes dm-explode-${i} {
                    0%   { transform: translate(0,0) rotate(0deg) scale(1);    opacity: 1; filter: blur(0px); }
                    20%  { transform: translate(0,0) rotate(${angle/4}deg) scale(1.6); opacity: 1; filter: blur(0px); }
                    100% { transform: translate(${dx}px, ${dy}px) rotate(${angle * 1.5}deg) scale(0.4); opacity: 0; filter: blur(3px); }
                  }
                `}</style>
              </div>
            );
          }
          return (
            <div key={i} style={{
              position: 'absolute', top: d.top, left: d.left,
              color: d.color, fontSize: d.fs, fontWeight: 700,
              fontFamily: hudTokens.fontDisplay, whiteSpace: 'nowrap',
              textShadow: `0 0 10px ${d.color}, 0 2px 6px rgba(0,0,0,0.8)`,
              opacity: state === 'inputting' ? 0.92 : 1,
            }}>{d.text}</div>
          );
        })}

        {/* Center shockwave (only when firing) */}
        {state === 'firing' && (
          <>
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 12, height: 12, borderRadius: '50%',
              background: '#fff',
              boxShadow: `0 0 40px 20px ${accent}, 0 0 80px 40px ${hudTokens.amber}, 0 0 160px 80px rgba(255,255,255,0.4)`,
              animation: 'dm-shock 1.6s ease-out infinite',
            }} />
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 80, height: 80, borderRadius: '50%',
              border: `3px solid ${accent}`,
              animation: 'dm-ring 1.6s ease-out infinite',
            }} />
            <style>{`
              @keyframes dm-shock {
                0%   { transform: translate(-50%, -50%) scale(0.3); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(8);   opacity: 0; }
              }
              @keyframes dm-ring {
                0%   { transform: translate(-50%, -50%) scale(0.3); opacity: 1; border-width: 4px; }
                100% { transform: translate(-50%, -50%) scale(14);  opacity: 0; border-width: 1px; }
              }
            `}</style>
          </>
        )}
      </div>

      {/* COMBO HUD — bottom-left, operator-only (audience never sees, overlay is click-through) */}
      <div style={{
        position: 'absolute', left: 24, bottom: 24,
        background: 'rgba(2, 6, 23, 0.78)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${state === 'firing' ? hudTokens.amber : hudTokens.cyanLine}`,
        borderRadius: 8,
        padding: '12px 14px',
        fontFamily: hudTokens.fontMono,
        boxShadow: `0 0 0 1px ${hudTokens.cyanSoft}, 0 12px 40px rgba(0,0,0,0.5)`,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: 9, letterSpacing: 2,
          color: state === 'firing' ? hudTokens.amber : hudTokens.textDim,
          marginBottom: 8,
        }}>
          <StatusDot color={state === 'firing' ? hudTokens.amber : accent} size={6} />
          <span>{state === 'firing' ? 'KONAMI · TRIGGERED' : 'KEYSTROKE COMBO · 6 / 10'}</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {SEQ.map((k, i) => {
            const filled = i < entered;
            const justFired = state === 'firing';
            return (
              <span key={i} style={{
                width: 28, height: 28, borderRadius: 4,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 600,
                color: filled ? (justFired ? '#000' : accent) : hudTokens.textDim,
                background: filled ? (justFired ? hudTokens.amber : hudTokens.cyanSoft) : 'transparent',
                border: `1px solid ${filled ? (justFired ? hudTokens.amber : accent) : hudTokens.line}`,
                boxShadow: filled && justFired ? `0 0 12px ${hudTokens.amber}` : 'none',
                fontFamily: ['B', 'A'].includes(k) ? hudTokens.fontDisplay : hudTokens.fontSans,
              }}>{k}</span>
            );
          })}
        </div>
        {state === 'firing' && (
          <div style={{
            marginTop: 8,
            fontSize: 10, color: hudTokens.amber, letterSpacing: 1,
          }}>
            🔥 BLAST — 清空 7 條彈幕 · 4.9s 後恢復
          </div>
        )}
        {state !== 'firing' && (
          <div style={{
            marginTop: 8,
            fontSize: 9, color: hudTokens.textDim, letterSpacing: 0.3, lineHeight: 1.5,
          }}>
            操作者快捷鍵 · 觀眾看不見此面板（overlay 點擊穿透）
          </div>
        )}
      </div>

      {/* Menubar hint — operator timestamp only when combo is active or firing */}
    </div>
  );
}

Object.assign(window, { KonamiOverlay });
