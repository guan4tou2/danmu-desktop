// Batch 4 — Viewer Banned · Overlay Poll Live · Result Celebration

/* =================================================================
   1) Viewer Banned — IP/fingerprint blocked, sees this instead
   ================================================================= */

function ViewerBanned({ theme = 'dark', form = 'mobile' }) {
  const isDark = theme === 'dark';
  const bg = isDark ? hudTokens.bg0 : hudTokens.lightBg0;
  const panel = isDark ? hudTokens.bg1 : '#fff';
  const line = isDark ? hudTokens.line : hudTokens.lightLine;
  const text = isDark ? hudTokens.text : hudTokens.lightText;
  const textDim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  const accent = hudTokens.cyan;

  const isMobile = form === 'mobile';
  const W = isMobile ? 375 : '100%';
  const H = isMobile ? 812 : '100%';

  return (
    <div style={{
      width: W, height: H, background: bg, color: text,
      fontFamily: hudTokens.fontSans,
      display: 'flex', flexDirection: 'column',
      colorScheme: isDark ? 'dark' : 'light', overflow: 'hidden', position: 'relative',
    }}>
      {isMobile && (
        <div style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', fontFamily: hudTokens.fontMono, fontSize: 13, fontWeight: 600 }}>
          <span>14:02</span>
          <span style={{ fontSize: 11, color: textDim }}>● ● ● ●</span>
        </div>
      )}

      {/* Hero strip — same as normal viewer but muted */}
      <div style={{
        padding: isMobile ? '14px 12px 12px' : '28px 32px 22px',
        borderBottom: `1px solid ${line}`,
        display: 'flex', flexDirection: 'row', alignItems: 'center',
        gap: isMobile ? 8 : 24, opacity: 0.4,
      }}>
        <DanmuHero title="Danmu Fire" theme={theme} size={isMobile ? 'medium' : 'hero'} align="left" />
      </div>

      {/* Banned content */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: isMobile ? 24 : 48, textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* glitchy red HUD frame */}
        <div style={{
          position: 'absolute', inset: isMobile ? 16 : 32,
          border: `1px solid ${hudTokens.crimson}55`, borderRadius: 8,
          pointerEvents: 'none',
        }} />
        <HudCorners size={16} color={hudTokens.crimson} inset={isMobile ? 16 : 32} />

        {/* Big BLOCKED icon */}
        <div style={{
          width: isMobile ? 110 : 140, height: isMobile ? 110 : 140, borderRadius: '50%',
          border: `3px solid ${hudTokens.crimson}`,
          background: `${hudTokens.crimson}10`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: hudTokens.crimson, fontSize: isMobile ? 56 : 72, fontWeight: 700,
          fontFamily: hudTokens.fontDisplay,
          boxShadow: `0 0 32px ${hudTokens.crimson}33`,
          marginBottom: 24,
          position: 'relative',
        }}>
          {/* slash through it */}
          <span style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              width: '70%', height: 4, background: hudTokens.crimson,
              transform: 'rotate(-45deg)', borderRadius: 2,
            }} />
          </span>
        </div>

        <div style={{
          fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 2.5,
          color: hudTokens.crimson, marginBottom: 8,
        }}>BLOCKED · 已被禁言</div>
        <h2 style={{
          margin: 0, fontSize: isMobile ? 22 : 28, fontWeight: 600,
          color: text, fontFamily: hudTokens.fontDisplay, letterSpacing: 1,
        }}>你的訊息暫時無法送出</h2>
        <p style={{
          fontSize: isMobile ? 13 : 14, color: textDim,
          lineHeight: 1.7, marginTop: 12, maxWidth: 380,
        }}>
          因違反活動社群守則,主辦方已暫停你發送彈幕的權限。<br/>
          其他訊息仍可正常觀看,本次禁言只影響發送。
        </p>

        <div style={{
          marginTop: 24, padding: '12px 16px',
          background: panel, border: `1px solid ${line}`, borderRadius: 4,
          display: 'flex', flexDirection: 'column', gap: 8,
          fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim,
          letterSpacing: 0.4, lineHeight: 1.7,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
            <span>你的識別碼</span>
            <span style={{ color: text }}>fp:A4F2B9C1</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
            <span>禁言原因</span>
            <span style={{ color: text }}>不當內容 · 多次警告</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
            <span>禁言時間</span>
            <span style={{ color: text }}>本場活動結束</span>
          </div>
        </div>

        <div style={{
          marginTop: 18, padding: '10px 14px',
          background: hudTokens.cyanSoft, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 4,
          fontSize: 11, color: text, lineHeight: 1.6, maxWidth: 380,
        }}>
          <span style={{ color: accent, fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5 }}>覺得是誤判?</span><br/>
          請在現場詢問工作人員,提供上面的識別碼。
        </div>
      </div>
    </div>
  );
}


/* =================================================================
   2) Overlay Poll Live — full overlay during a poll
   ================================================================= */

function OverlayPollLive({ theme = 'dark' }) {
  // overlay always renders dark on a transparent canvas.
  // For artboard, render against a fake "presentation" backdrop so we see scale.
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#000', position: 'relative', overflow: 'hidden',
      fontFamily: hudTokens.fontSans, color: '#fff',
    }}>
      {/* fake presentation slide behind */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #0c1f3d 0%, #1a3a6e 50%, #0c1f3d 100%)',
      }}>
        <div style={{
          position: 'absolute', top: 60, left: 60, fontFamily: hudTokens.fontDisplay,
          fontSize: 48, fontWeight: 700, color: 'rgba(255,255,255,0.18)', letterSpacing: 2,
        }}>KEYNOTE 2025</div>
        <div style={{
          position: 'absolute', top: 130, left: 60, fontFamily: hudTokens.fontMono,
          fontSize: 16, color: 'rgba(255,255,255,0.12)', letterSpacing: 1,
        }}>SLIDE 14 · PRODUCT ROADMAP</div>
      </div>

      {/* DanmuMarquee in mid layer */}
      <DanmuMarquee isDark={true} accent={hudTokens.cyan} isMobile={false} />

      {/* Top overlay HUD — session bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        padding: '14px 24px',
        display: 'flex', alignItems: 'center', gap: 12,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 100%)',
        zIndex: 10,
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: '50%', background: hudTokens.crimson,
          animation: 'opl-pulse 1.4s infinite',
        }} />
        <style>{'@keyframes opl-pulse { 0%, 100% { box-shadow: 0 0 0 0 ' + hudTokens.crimson + '88; } 50% { box-shadow: 0 0 0 6px transparent; } }'}</style>
        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.crimson, letterSpacing: 2, fontWeight: 600 }}>POLL · LIVE</span>
        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: 'rgba(255,255,255,0.6)', letterSpacing: 1 }}>第 2 / 3 題</span>
        <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.cyan, letterSpacing: 1 }}>
          danmu.im/42
        </span>
      </div>

      {/* Centered poll panel */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '76%', maxWidth: 880,
        padding: 32,
        background: 'rgba(8, 14, 26, 0.86)',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 12,
        boxShadow: `0 0 40px ${hudTokens.cyan}25, inset 0 0 30px rgba(56, 189, 248, 0.06)`,
        zIndex: 20,
      }}>
        <HudCorners size={16} color={hudTokens.cyanLine} inset={6} thickness={1.5} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 2, color: hudTokens.cyan }}>QUESTION 02</span>
          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, color: 'rgba(255,255,255,0.55)' }}>247 votes · 1,124 viewers</span>
        </div>

        <h2 style={{
          margin: 0, fontFamily: hudTokens.fontDisplay,
          fontSize: 36, fontWeight: 600, color: '#fff',
          letterSpacing: 0.5, lineHeight: 1.25,
        }}>哪個 demo 你最想看深入版?</h2>

        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { k: 'A', label: '即時翻譯',      v: 102, p: 41, lead: true,  color: hudTokens.cyan },
            { k: 'B', label: '雲端錄影',      v: 78,  p: 32,             color: '#a78bfa' },
            { k: 'C', label: 'AI 摘要',       v: 44,  p: 18,             color: hudTokens.amber },
            { k: 'D', label: '多語字幕同步',  v: 23,  p: 9,              color: hudTokens.lime },
          ].map(o => (
            <div key={o.k}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
                <span style={{
                  fontFamily: hudTokens.fontDisplay, fontSize: 22,
                  color: o.color, letterSpacing: 1, minWidth: 24,
                }}>{o.k}</span>
                <span style={{ fontSize: 18, color: '#fff', flex: 1 }}>{o.label}</span>
                {o.lead && (
                  <span style={{
                    fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1,
                    padding: '2px 8px', background: `${o.color}33`, color: o.color,
                    border: `1px solid ${o.color}88`, borderRadius: 3,
                  }}>★ LEADING</span>
                )}
                <span style={{
                  fontFamily: hudTokens.fontDisplay, fontSize: 22,
                  color: o.color, letterSpacing: 1, fontWeight: 600, minWidth: 60, textAlign: 'right',
                }}>{o.p}%</span>
                <span style={{
                  fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 0.4,
                  color: 'rgba(255,255,255,0.45)', minWidth: 50, textAlign: 'right',
                }}>{o.v} 票</span>
              </div>
              <div style={{ height: 14, background: 'rgba(255,255,255,0.06)', borderRadius: 7, overflow: 'hidden', position: 'relative' }}>
                <div style={{
                  position: 'absolute', inset: 0, left: 0, width: `${o.p}%`,
                  background: `linear-gradient(90deg, ${o.color}88, ${o.color})`,
                  borderRadius: 7,
                  boxShadow: `0 0 12px ${o.color}66`,
                  transition: 'width 600ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Countdown */}
        <div style={{
          marginTop: 28, display: 'flex', alignItems: 'center', gap: 16,
          paddingTop: 18, borderTop: `1px dashed rgba(255,255,255,0.12)`,
        }}>
          <div>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>剩餘時間</div>
            <div style={{ fontFamily: hudTokens.fontDisplay, fontSize: 32, color: hudTokens.amber, letterSpacing: 1, fontWeight: 600 }}>00:18</div>
          </div>
          <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{
              width: '22%', height: '100%',
              background: `linear-gradient(90deg, ${hudTokens.crimson}, ${hudTokens.amber})`,
              borderRadius: 3,
            }} />
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>於手機投票</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 32, height: 32, background: '#fff', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: hudTokens.fontMono, fontSize: 9, color: '#000', fontWeight: 700 }}>QR</span>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 13, color: hudTokens.cyan, letterSpacing: 0.5 }}>danmu.im/42</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker — danmu still flying */}
      <div style={{
        position: 'absolute', bottom: 14, left: 14,
        padding: '6px 12px', background: 'rgba(0,0,0,0.65)',
        border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 4,
        fontFamily: hudTokens.fontMono, fontSize: 10, color: 'rgba(255,255,255,0.7)',
        letterSpacing: 0.5, zIndex: 10,
      }}>
        ● 247 / 1124 已投票 · 剩餘 18 秒
      </div>
    </div>
  );
}


/* =================================================================
   3) Result Celebration — winner reveal full-bleed
   ================================================================= */

function OverlayResultCelebration({ theme = 'dark' }) {
  const winnerColor = hudTokens.cyan;
  const winnerKey = 'A';
  const winnerLabel = '即時翻譯';
  const winnerPct = 41;
  const winnerVotes = 102;

  return (
    <div style={{
      width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
      background: 'radial-gradient(ellipse at 50% 40%, #0a2748 0%, #050912 70%, #000 100%)',
      fontFamily: hudTokens.fontSans, color: '#fff',
    }}>
      {/* Sweeping radial light */}
      <div style={{
        position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -50%)',
        width: '180%', aspectRatio: '1',
        background: `conic-gradient(from 0deg at 50% 50%,
          transparent 0deg,
          ${winnerColor}10 30deg,
          transparent 60deg,
          ${winnerColor}08 180deg,
          transparent 240deg,
          ${winnerColor}10 330deg,
          transparent 360deg
        )`,
        animation: 'orc-sweep 16s linear infinite',
        opacity: 0.6,
      }} />
      <style>{`@keyframes orc-sweep { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }`}</style>

      {/* Confetti dots */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {Array.from({ length: 28 }).map((_, i) => {
          const colors = [hudTokens.cyan, hudTokens.amber, hudTokens.lime, '#a78bfa', '#fb7185', '#fde047'];
          const c = colors[i % colors.length];
          return (
            <div key={i} className="orc-confetti" style={{
              position: 'absolute',
              left: `${(i * 13 + 8) % 96}%`,
              top: `-${5 + (i * 7) % 30}%`,
              width: 6 + (i % 3) * 2, height: 6 + (i % 3) * 2,
              background: c, borderRadius: i % 2 ? '50%' : 1,
              opacity: 0.85,
              animationDelay: `${(i * 0.2)}s`,
              animationDuration: `${4 + (i % 5) * 0.8}s`,
            }} />
          );
        })}
        <style>{`
          @keyframes orc-fall {
            from { transform: translateY(0) rotate(0deg); opacity: 0.85; }
            to   { transform: translateY(120vh) rotate(720deg); opacity: 0; }
          }
          .orc-confetti {
            animation-name: orc-fall;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }
        `}</style>
      </div>

      {/* HUD frame */}
      <HudCorners size={24} color={`${winnerColor}77`} inset={32} thickness={2} />

      {/* Top label */}
      <div style={{
        position: 'absolute', top: 40, left: '50%', transform: 'translateX(-50%)',
        textAlign: 'center', zIndex: 10,
      }}>
        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 4, color: winnerColor, marginBottom: 6 }}>
          ★ POLL CLOSED · 投票結果 ★
        </div>
        <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', fontWeight: 400 }}>哪個 demo 你最想看深入版?</div>
      </div>

      {/* Winner card */}
      <div style={{
        position: 'absolute', left: '50%', top: '52%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center', zIndex: 20,
      }}>
        <div style={{
          fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 3,
          color: hudTokens.amber, marginBottom: 14,
        }}>WINNER · 最高票</div>

        {/* Big A */}
        <div style={{
          width: 220, height: 220, borderRadius: '50%',
          margin: '0 auto', position: 'relative',
          background: `radial-gradient(circle, ${winnerColor}33 0%, ${winnerColor}11 60%, transparent 100%)`,
          border: `3px solid ${winnerColor}`,
          boxShadow: `0 0 60px ${winnerColor}66, inset 0 0 40px ${winnerColor}22`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'orc-pop 700ms cubic-bezier(0.22, 1.2, 0.36, 1)',
        }}>
          <style>{`@keyframes orc-pop { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
          <span style={{
            fontFamily: hudTokens.fontDisplay, fontSize: 140, fontWeight: 700,
            color: winnerColor, letterSpacing: -2, lineHeight: 1,
            textShadow: `0 0 40px ${winnerColor}88`,
          }}>{winnerKey}</span>
          {/* orbital tick marks */}
          {[0, 60, 120, 180, 240, 300].map(deg => (
            <span key={deg} style={{
              position: 'absolute', left: '50%', top: '50%',
              width: 4, height: 14, marginLeft: -2, marginTop: -120,
              background: winnerColor, borderRadius: 2, opacity: 0.7,
              transformOrigin: '2px 120px',
              transform: `rotate(${deg}deg)`,
            }} />
          ))}
        </div>

        <h1 style={{
          margin: '24px 0 6px', fontFamily: hudTokens.fontDisplay,
          fontSize: 56, fontWeight: 700, color: '#fff', letterSpacing: 1, lineHeight: 1.1,
        }}>{winnerLabel}</h1>

        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 18 }}>
          <div>
            <div style={{ fontFamily: hudTokens.fontDisplay, fontSize: 56, color: winnerColor, fontWeight: 700, letterSpacing: 1, lineHeight: 1 }}>{winnerPct}%</div>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 2, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>得票率</div>
          </div>
          <div style={{ width: 1, background: 'rgba(255,255,255,0.18)' }} />
          <div>
            <div style={{ fontFamily: hudTokens.fontDisplay, fontSize: 56, color: winnerColor, fontWeight: 700, letterSpacing: 1, lineHeight: 1 }}>{winnerVotes}</div>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 2, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>票</div>
          </div>
          <div style={{ width: 1, background: 'rgba(255,255,255,0.18)' }} />
          <div>
            <div style={{ fontFamily: hudTokens.fontDisplay, fontSize: 56, color: '#fff', fontWeight: 700, letterSpacing: 1, lineHeight: 1 }}>247</div>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 2, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>總投票</div>
          </div>
        </div>
      </div>

      {/* Bottom — runners up */}
      <div style={{
        position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 18, alignItems: 'center', zIndex: 10,
      }}>
        {[
          { k: 'B', label: '雲端錄影',     pct: 32, col: '#a78bfa' },
          { k: 'C', label: 'AI 摘要',      pct: 18, col: hudTokens.amber },
          { k: 'D', label: '多語字幕同步', pct: 9,  col: hudTokens.lime },
        ].map(r => (
          <div key={r.k} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '8px 16px',
            background: 'rgba(0,0,0,0.5)', border: `1px solid ${r.col}55`,
            borderRadius: 6, backdropFilter: 'blur(8px)',
          }}>
            <span style={{ fontFamily: hudTokens.fontDisplay, fontSize: 22, color: r.col, fontWeight: 700, letterSpacing: 1 }}>{r.k}</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>{r.label}</span>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: r.col, fontWeight: 600 }}>{r.pct}%</span>
          </div>
        ))}
      </div>

      {/* Top-right session marker */}
      <div style={{
        position: 'absolute', top: 36, right: 36,
        fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1,
        color: 'rgba(255,255,255,0.5)', textAlign: 'right',
      }}>
        SESSION · KEYNOTE 2025<br/>
        <span style={{ color: hudTokens.cyan, fontSize: 12 }}>danmu.im/42</span>
      </div>
    </div>
  );
}

Object.assign(window, {
  ViewerBanned, OverlayPollLive, OverlayResultCelebration,
});
