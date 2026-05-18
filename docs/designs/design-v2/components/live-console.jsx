// P0-0 · Live Console Dashboard — Round 2
// AdminPageShell + AdminV3SoftHolo panel grid. No local token const.
//
// Layout: AdminPageShell handles topbar/sidebar chrome.
// Body uses AdminV3SoftHolo's 12-col grid, extended with:
//   - live feed column (span 7, replaces messages stream)
//   - 4 quick actions (span 5, replaces widgets panel)
//   - KPI strip (span 12, from AdminV3SoftHolo)
//   - Poll in-progress (span 7, from AdminV3SoftHolo)
//   - recent actions sidebar (span 5)
//
// Q1-Q4 variants preserved via props (same API as R1).

function _LCPill({ tone, mono, sm, children }) {
  const T = hudTokens;
  const c = {
    cyan:    { fg: T.cyan,    bg: T.cyanSoft,                    br: T.cyanLine },
    lime:    { fg: T.lime,    bg: 'rgba(134,239,172,0.12)',       br: 'rgba(134,239,172,0.45)' },
    amber:   { fg: T.amber,   bg: 'rgba(251,191,36,0.12)',        br: 'rgba(251,191,36,0.45)' },
    crimson: { fg: T.crimson, bg: 'rgba(248,113,113,0.12)',       br: 'rgba(248,113,113,0.45)' },
    mute:    { fg: T.textMute,bg: 'transparent',                  br: T.line },
  }[tone || 'mute'];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: sm ? '1px 6px' : '2px 8px', borderRadius: 2,
      background: c.bg, color: c.fg, border: `1px solid ${c.br}`,
      fontFamily: mono ? T.fontMono : T.fontSans,
      fontSize: sm ? 9 : 10, letterSpacing: mono ? 1 : 0.2, fontWeight: 600,
    }}>{children}</span>
  );
}

function LiveConsoleDashboard({
  strip = 'scroll',           // scroll | grid
  feedback = 'both',          // toast | inline | both
  recent = 'sidebar',         // sidebar | bell
  showToast = false,
  showInlineConfirm = null,
  theme = 'dark',
} = {}) {
  const T = hudTokens;

  const feed = [
    { t: '14:02:18', n: '小明',     fp: 'a3f1c8', m: '這個 demo 看起來超讚 👏', tag: 'MSG',  tagTone: 'cyan' },
    { t: '14:02:14', n: '訪客6824', fp: '8b2e74', m: 'A',                        tag: 'POLL', tagTone: 'amber' },
    { t: '14:02:12', n: '阿傑',     fp: 'c4a91d', m: '+1 求簡報',               tag: 'MSG',  tagTone: 'cyan' },
    { t: '14:02:09', n: 'Yvonne',   fp: '7f3b2c', m: '想問講者幾個問題',        tag: 'Q&A',  tagTone: 'amber' },
    { t: '14:02:07', n: '匿名',     fp: 'd8e5a2', m: '聲音可以調大嗎',          tag: 'MSG',  tagTone: 'cyan' },
    { t: '14:02:04', n: 'fp_a3f2',  fp: 'a3f200', m: '<已遮罩 · profanity>',    tag: 'FLAG', tagTone: 'crimson', masked: true },
    { t: '14:02:01', n: '訪客0428', fp: '0428aa', m: 'A',                        tag: 'POLL', tagTone: 'amber' },
    { t: '14:01:58', n: 'Mei',      fp: '5c8e21', m: '今天的場地有點冷 🥶',     tag: 'MSG',  tagTone: 'cyan' },
    { t: '14:01:55', n: '小明',     fp: 'a3f1c8', m: '+1',                      tag: 'MSG',  tagTone: 'cyan' },
    { t: '14:01:52', n: 'fp_88c1',  fp: '88c100', m: '<已隱藏 · admin>',         tag: 'FLAG', tagTone: 'crimson', masked: true },
    { t: '14:01:48', n: '阿傑',     fp: 'c4a91d', m: '推推 👍',                 tag: 'MSG',  tagTone: 'cyan' },
    { t: '14:01:44', n: '訪客6824', fp: '8b2e74', m: 'B',                        tag: 'POLL', tagTone: 'amber' },
    { t: '14:01:41', n: 'Yvonne',   fp: '7f3b2c', m: '請問 Q&A 環節在哪裡',      tag: 'Q&A',  tagTone: 'amber' },
  ];

  const effects = [
    { name: '彩虹漸變', en: 'rainbow',   bg: `linear-gradient(90deg, ${T.crimson}, ${T.amber}, ${T.lime}, ${T.cyan})` },
    { name: '彈跳',     en: 'bounce',    bg: T.bg2, accent: T.amber },
    { name: '螢光',     en: 'glow-cyan', bg: T.bg2, accent: T.cyan },
    { name: '震動',     en: 'shake',     bg: T.bg2, accent: T.crimson },
    { name: '粒子爆破', en: 'particles', bg: T.bg2, accent: T.cyan },
    { name: '漸顯',     en: 'fade-in',   bg: T.bg2, accent: T.lime },
    { name: '加粗描邊', en: 'stroke',    bg: T.bg2, accent: T.text },
    { name: '閃爍',     en: 'flicker',   bg: T.bg2, accent: T.amber },
  ];

  const recentActs = [
    { t: '14:02:08', op: '隱藏訊息',   tgt: 'fp_a3f2',      tone: 'crimson' },
    { t: '14:01:52', op: '加入黑名單', tgt: 'fp_88c1',      tone: 'amber' },
    { t: '14:01:30', op: '推送廣播',   tgt: '休息 10 分鐘', tone: 'cyan' },
    { t: '14:00:48', op: '結束投票',   tgt: 'poll_47fa',    tone: 'lime' },
    { t: '13:58:12', op: '啟動效果',   tgt: 'rainbow',      tone: 'cyan' },
    { t: '13:57:02', op: '隱藏訊息',   tgt: 'fp_5c8e',      tone: 'crimson' },
  ];

  return (
    <AdminPageShell route="dashboard" title="控制台" en="DASHBOARD · LIVE CONSOLE · KEYNOTE 2026" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 18, height: '100%', overflow: 'hidden' }}>

          {/* KPI strip */}
          <div style={{
            gridColumn: 'span 12', background: panel,
            borderRadius: radius, border: `1px solid ${line}`,
            padding: 18, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18,
          }}>
            {[
              { k: '在線觀眾',  en: 'ONLINE',    v: '184',   d: 'peak 247',     col: T.lime,    spark: [22,28,31,29,34,38,42,40,44,42,46,48,52,49,53,51,55,58,52,184].map(x=>Math.min(x,60)) },
              { k: '訊息流速',  en: 'MSG/SEC',   v: '24.3',  d: '+12% vs avg',  col: T.cyan,    spark: [12,15,18,14,22,28,24,31,26,35,32,38,29,33,28,36,42,38,31,24].map(x=>x*1.5) },
              { k: '佇列深度',  en: 'QUEUE',     v: '3',     d: 'oldest 14s',   col: T.amber,   spark: [0,1,2,1,3,2,4,3,5,4,2,1,3,5,3,4,2,3,4,3].map(x=>x*8) },
              { k: '本場時長',  en: 'SESSION',   v: '02:42', d: '/ 計畫 04:00', col: T.cyan,    spark: null },
            ].map((k, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span style={{ fontFamily: hudTokens.fontDisplay, fontSize: 30, color: k.col, letterSpacing: 0.5, lineHeight: 1 }}>{k.v}</span>
                    <HudLabel color={textDim}>{k.en}</HudLabel>
                  </div>
                  <div style={{ fontSize: 11, color: textDim, marginTop: 3 }}>{k.k} · <span style={{ fontFamily: T.fontMono, fontSize: 9, color: T.textMute }}>{k.d}</span></div>
                </div>
                {k.spark && (
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 1.5, width: 60, height: 26 }}>
                    {k.spark.map((h, j) => (
                      <span key={j} style={{
                        flex: 1, height: `${(h / 80) * 100}%`,
                        background: k.col, borderRadius: 0.5, opacity: j === 19 ? 1 : 0.5,
                      }} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* LIVE FEED */}
          <div style={{ gridColumn: 'span 7', background: panel, borderRadius: radius, border: `1px solid ${line}`, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
            <div style={{ padding: '12px 16px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: T.fontMono, fontSize: 10, color: T.cyan, letterSpacing: 1.3 }}>LIVE FEED</span>
              <HudLabel color={textDim}>1,287 訊息 · 24/sec</HudLabel>
              <div style={{ marginLeft: 8, display: 'flex', gap: 4 }}>
                {[
                  { l: '全部', sel: true }, { l: 'Q&A 23', tone: 'amber' },
                  { l: 'POLL 76', tone: 'amber' }, { l: 'FLAG 12', tone: 'crimson' },
                ].map((c, i) => (
                  <span key={i} style={{
                    padding: '2px 8px', borderRadius: 2,
                    background: c.sel ? T.cyanSoft : 'transparent',
                    border: `1px solid ${c.sel ? T.cyanLine : line}`,
                    color: c.sel ? T.cyan : textDim,
                    fontFamily: T.fontMono, fontSize: 9.5, letterSpacing: 0.4,
                  }}>{c.l}</span>
                ))}
              </div>
              <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <StatusDot color={T.lime} size={6} />
                <span style={{ fontFamily: T.fontMono, fontSize: 9, color: T.lime, letterSpacing: 1 }}>AUTO-SCROLL · ON</span>
              </span>
              <span style={{ padding: '3px 8px', borderRadius: 2, background: raised, border: `1px solid ${line}`, color: textDim, fontFamily: T.fontMono, fontSize: 9 }}>⏸ 暫停</span>
            </div>
            <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {feed.map((r, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '64px 50px 1fr auto',
                  gap: 10, alignItems: 'baseline', padding: '8px 16px',
                  borderBottom: `1px solid ${line}`,
                  background: i === 0 ? `rgba(56,189,248,0.04)` : 'transparent',
                }}>
                  <span style={{ fontFamily: T.fontMono, fontSize: 10, color: T.textMute }}>{r.t}</span>
                  <_LCPill tone={r.tagTone} mono sm>{r.tag}</_LCPill>
                  <div style={{ minWidth: 0, display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span style={{ fontSize: 12, color: text, fontWeight: 500, flexShrink: 0 }}>@{r.n}</span>
                    <span style={{ fontFamily: T.fontMono, fontSize: 9.5, color: T.textMute, flexShrink: 0 }}>fp:{r.fp}</span>
                    <span style={{ fontSize: 12.5, color: r.masked ? textDim : text, fontStyle: r.masked ? 'italic' : 'normal', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>· {r.m}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 3, opacity: i === 0 ? 1 : 0.35 }}>
                    {['遮罩','隱藏','黑名單','⋯'].map((b, j) => (
                      <span key={j} style={{ padding: '2px 7px', borderRadius: 2, background: 'transparent', border: `1px solid ${line}`, color: textDim, fontFamily: T.fontMono, fontSize: 9 }}>{b}</span>
                    ))}
                  </div>
                </div>
              ))}
              <div style={{ height: 24, background: `linear-gradient(180deg, transparent, ${panel})`, flexShrink: 0 }} />
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div style={{ gridColumn: recent === 'sidebar' ? 'span 3' : 'span 5', background: panel, borderRadius: radius, border: `1px solid ${line}`, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
            <div style={{ padding: '12px 16px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: T.fontMono, fontSize: 10, color: T.amber, letterSpacing: 1.3 }}>QUICK ACTIONS</span>
              <HudLabel color={textDim}>F1–F4</HudLabel>
            </div>
            <div style={{ flex: 1, minHeight: 0, padding: 14, display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>

              {/* ① EFFECTS */}
              <div style={{ background: raised, border: `1px solid ${line}`, borderRadius: 3, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <HudLabel color={T.cyan}>① EFFECTS · F1</HudLabel>
                  <span style={{ marginLeft: 'auto', fontFamily: T.fontMono, fontSize: 9, color: textDim }}>8 / 8</span>
                </div>
                <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4 }}>
                  {effects.map((e, i) => (
                    <div key={i} style={{
                      flexShrink: 0, width: 66, height: 48, borderRadius: 3,
                      background: e.bg, border: `1px solid rgba(255,255,255,0.08)`,
                      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                      padding: '4px 6px',
                    }}>
                      <span style={{ fontFamily: T.fontMono, fontSize: 7.5, color: e.accent || T.bg0, letterSpacing: 0.8, fontWeight: 700 }}>{e.en.toUpperCase()}</span>
                      <span style={{ fontFamily: hudTokens.fontDisplay, fontSize: 14, color: e.accent || T.bg0, textAlign: 'center', lineHeight: 1 }}>ABC</span>
                      <span style={{ fontSize: 7.5, color: e.accent ? textDim : T.bg0, textAlign: 'center' }}>{e.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ② POLL */}
              <div style={{ background: raised, border: `1px solid ${line}`, borderRadius: 3, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <HudLabel color={accent}>② POLL · F2</HudLabel>
                  <span style={{ marginLeft: 'auto', fontFamily: T.fontMono, fontSize: 9, color: textDim }}>Q3 / 12</span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ flex: 1, padding: '7px 10px', background: panel, border: `1px solid ${line}`, borderRadius: 3 }}>
                    <div style={{ fontFamily: T.fontMono, fontSize: 8, color: T.textMute }}>下一題</div>
                    <div style={{ fontSize: 12, color: text, marginTop: 2, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>下一個 demo 看哪一個?</div>
                  </div>
                  <span style={{ padding: '8px 12px', borderRadius: 3, background: accent, color: T.bg0, fontFamily: T.fontMono, fontSize: 10.5, letterSpacing: 0.8, fontWeight: 700, flexShrink: 0 }}>啟動 ▶</span>
                </div>
              </div>

              {/* ③ BLACKLIST */}
              <div style={{ background: raised, border: `1px solid ${line}`, borderRadius: 3, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <HudLabel color={T.crimson}>③ BLACKLIST · F3</HudLabel>
                  <span style={{ marginLeft: 'auto', fontFamily: T.fontMono, fontSize: 9, color: textDim }}>已封禁 8</span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ flex: 1, padding: '7px 10px', background: panel, border: `1px solid ${line}`, borderRadius: 3, fontFamily: T.fontMono, fontSize: 11, color: T.textMute }}>fp_ 或 @暱稱…</div>
                  <span style={{ padding: '7px 12px', borderRadius: 3, background: T.crimson, color: T.bg0, fontFamily: T.fontMono, fontSize: 10.5, letterSpacing: 0.8, fontWeight: 700 }}>+ 加入</span>
                </div>
                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                  {['fp:a3f200', 'fp:88c100', '@spam_bot'].map((c, i) => (
                    <span key={i} style={{ padding: '2px 6px', borderRadius: 2, background: 'rgba(248,113,113,0.10)', border: `1px solid rgba(248,113,113,0.35)`, color: T.crimson, fontFamily: T.fontMono, fontSize: 9 }}>{c} ×</span>
                  ))}
                </div>
              </div>

              {/* ④ BROADCAST */}
              <div style={{ background: raised, border: `1px solid ${line}`, borderRadius: 3, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <HudLabel color={accent}>④ BROADCAST · F4</HudLabel>
                  <span style={{ marginLeft: 'auto', fontFamily: T.fontMono, fontSize: 9, color: textDim }}>0 in queue</span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ flex: 1, padding: '7px 10px', background: panel, border: `1px solid ${line}`, borderRadius: 3, fontFamily: T.fontSans, fontSize: 11.5, color: text }}>休息 10 分鐘 · 14:30 回來</div>
                  <span style={{ padding: '7px 12px', borderRadius: 3, background: accent, color: T.bg0, fontFamily: T.fontMono, fontSize: 10.5, letterSpacing: 0.8, fontWeight: 700 }}>推送 ↗</span>
                </div>
                {(feedback === 'inline' || feedback === 'both') && showInlineConfirm === 'broadcast' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 8px', borderRadius: 2, background: 'rgba(134,239,172,0.10)', border: `1px solid rgba(134,239,172,0.45)`, fontFamily: T.fontMono, fontSize: 9.5, color: T.lime }}>
                    <span>✓</span><span style={{ flex: 1 }}>已推送到 184 位觀眾 · 1.2s 前</span>
                    <span style={{ color: textDim }}>↶ 撤回</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RECENT ACTIONS sidebar */}
          {recent === 'sidebar' && (
            <div style={{ gridColumn: 'span 2', background: panel, borderRadius: radius, border: `1px solid ${line}`, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
              <div style={{ padding: '12px 16px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: T.fontMono, fontSize: 10, color: T.lime, letterSpacing: 1.3 }}>MY ACTIONS</span>
                <span style={{ marginLeft: 'auto', fontFamily: T.fontMono, fontSize: 9, color: T.textMute }}>{recentActs.length}</span>
              </div>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                {recentActs.map((a, i) => (
                  <div key={i} style={{ padding: '8px 14px', borderBottom: `1px solid ${line}`, display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                      <_LCPill tone={a.tone} mono sm>{a.op}</_LCPill>
                      <span style={{ marginLeft: 'auto', fontFamily: T.fontMono, fontSize: 9, color: T.textMute }}>{a.t}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontFamily: T.fontMono, fontSize: 10, color: text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{a.tgt}</span>
                      <span style={{ fontFamily: T.fontMono, fontSize: 9, color: accent }}>↶</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TOAST */}
          {(feedback === 'toast' || feedback === 'both') && showToast && (
            <div style={{
              position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)',
              padding: '10px 16px', borderRadius: 3,
              background: raised, border: `1px solid rgba(134,239,172,0.45)`,
              boxShadow: '0 8px 28px rgba(0,0,0,0.6)',
              display: 'flex', alignItems: 'center', gap: 10,
              fontFamily: T.fontSans, fontSize: 12, color: text, zIndex: 20,
            }}>
              <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(134,239,172,0.25)', border: `1.5px solid ${T.lime}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.lime, fontSize: 11, fontWeight: 700 }}>✓</span>
              <span>已加入黑名單 · <span style={{ fontFamily: T.fontMono, color: textDim }}>fp:a3f200</span></span>
              <span style={{ marginLeft: 6, fontFamily: T.fontMono, fontSize: 10, color: accent, letterSpacing: 0.6 }}>↶ 撤銷 · 5s</span>
            </div>
          )}
        </div>
      )}
    </AdminPageShell>
  );
}

window.LiveConsoleDashboard = LiveConsoleDashboard;
