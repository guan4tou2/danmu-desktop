// P0-0 · Live Console Dashboard (2026-05-04 IA pivot)
//
// Polestar: single presenter, 1–4hr mid-size event, 13" laptop @ 1440×900, NO inner scroll.
// Replaces the legacy KPI-summary Dashboard.
//
// Layout (1440×900, fits 13" without scrolling):
//   topbar (44):   nav (10 items collapsed to icon row) + session selector + bell + ⌘K + cog
//   kpi rail (56): 4 live counters (online · msg/s · queue · timer)
//   body (~800):
//     left 60%   = live message feed, newest top, auto-scroll w/ pause-on-hover
//     right 40%  = 4 quick-action zones stacked:
//                  ① Effects strip (8 .dme cards horizontal scroll)
//                  ② Poll launcher (collapsed deck w/ START)
//                  ③ Blacklist quick-add (textbox + recent fp chips)
//                  ④ Broadcast push (textbox + push button)
//
// Tweaks-A/B for the 4 backlog open questions:
//   topbar:   compact-icons | full-labels      (Q1 small viewport)
//   strip:    8-scroll      | 4×2-grid+more   (Q2)
//   feedback: toast | inline | both           (Q3)
//   recent:   sidebar | bell-only             (Q4)
//
// All variants live in this single component, default to the "recommended" pick.

const _lc = {
  bg:        hudTokens.bg0,
  panel:     hudTokens.bg1,
  raised:    hudTokens.bg2,
  raised2:   hudTokens.bg3,
  line:      hudTokens.line,
  lineSoft:  hudTokens.line,
  text:      hudTokens.text,
  textDim:   hudTokens.textDim,
  textMute:  hudTokens.textMute,
  cyan:      hudTokens.cyan,
  cyanSoft:  hudTokens.cyanSoft,
  cyanLine:  hudTokens.cyanLine,
  lime:      hudTokens.lime,
  amber:     hudTokens.amber,
  magenta:   hudTokens.amber,    // compat — was '#fbbf24', now amber
  crimson:   hudTokens.crimson,
  violet:    hudTokens.cyan,     // compat — was '#38bdf8', now cyan
  fontSans:  hudTokens.fontSans,
  fontMono:  hudTokens.fontMono,
  fontDisp:  '"Bebas Neue", sans-serif',
};

function _Pill({ tone, mono, sm, children }) {
  const c = {
    cyan:    { fg: _lc.cyan,    bg: _lc.cyanSoft,            br: _lc.cyanLine },
    lime:    { fg: _lc.lime,    bg: 'rgba(134, 239, 172,0.13)', br: 'rgba(134, 239, 172,0.45)' },
    amber:   { fg: _lc.amber,   bg: 'rgba(251,191,36,0.13)', br: 'rgba(251,191,36,0.45)' },
    crimson: { fg: _lc.crimson, bg: 'rgba(248, 113, 113,0.13)',  br: 'rgba(248, 113, 113,0.45)' },
    magenta: { fg: _lc.magenta, bg: 'rgba(251,191,36,0.13)', br: 'rgba(251,191,36,0.45)' },
    violet:  { fg: _lc.violet,  bg: 'rgba(56,189,248,0.13)', br: 'rgba(56,189,248,0.45)' },
    mute:    { fg: _lc.textMute, bg: 'transparent',           br: _lc.line },
  }[tone || 'mute'];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: sm ? '1px 6px' : '2px 8px', borderRadius: 2,
      background: c.bg, color: c.fg, border: `1px solid ${c.br}`,
      fontFamily: mono ? _lc.fontMono : _lc.fontSans,
      fontSize: sm ? 9 : 10, letterSpacing: mono ? 1 : 0.2, fontWeight: 600,
    }}>{children}</span>
  );
}

function LiveConsoleDashboard({
  topbar = 'compact',     // compact | labels
  strip = 'scroll',       // scroll | grid
  feedback = 'both',      // toast | inline | both
  recent = 'sidebar',     // sidebar | bell
  showToast = false,
  showInlineConfirm = null, // 'poll' | 'blacklist' | 'broadcast' | 'effect' | null
} = {}) {
  // 10-nav slugs per backlog P0-0
  const nav = [
    { slug: 'dashboard',  zh: '控制台',     en: 'CONSOLE',     icon: '⌂', active: true },
    { slug: 'polls',      zh: '投票',       en: 'POLLS',       icon: '◉' },
    { slug: 'effects',    zh: '效果',       en: 'EFFECTS',     icon: '✦' },
    { slug: 'moderation', zh: '審核',       en: 'MOD',         icon: '⊘' },
    { slug: 'widgets',    zh: '小工具',     en: 'WIDGETS',     icon: '◫' },
    { slug: 'appearance', zh: '外觀',       en: 'APPEARANCE',  icon: '◐' },
    { slug: 'assets',     zh: '素材',       en: 'ASSETS',      icon: '⌬' },
    { slug: 'automation', zh: '自動化',     en: 'AUTOMATION',  icon: '↻' },
    { slug: 'history',    zh: '歷史',       en: 'HISTORY',     icon: '⌚' },
    { slug: 'system',     zh: '系統',       en: 'SYSTEM',      icon: '⚙' },
  ];

  // simulated live feed
  const feed = [
    { t: '14:02:18', n: '小明',     fp: 'a3f1c8', m: '這個 demo 看起來超讚 👏', tag: 'MSG',  tagTone: 'cyan' },
    { t: '14:02:14', n: '訪客6824', fp: '8b2e74', m: 'A',                       tag: 'POLL', tagTone: 'magenta' },
    { t: '14:02:12', n: '阿傑',     fp: 'c4a91d', m: '+1 求簡報',              tag: 'MSG',  tagTone: 'cyan' },
    { t: '14:02:09', n: 'Yvonne',   fp: '7f3b2c', m: '想問講者幾個問題',       tag: 'Q&A',  tagTone: 'amber' },
    { t: '14:02:07', n: '匿名',     fp: 'd8e5a2', m: '聲音可以調大嗎',         tag: 'MSG',  tagTone: 'cyan' },
    { t: '14:02:04', n: 'fp_a3f2',  fp: 'a3f200', m: '<已遮罩 · profanity>',   tag: 'FLAG', tagTone: 'crimson', masked: true },
    { t: '14:02:01', n: '訪客0428', fp: '0428aa', m: 'A',                       tag: 'POLL', tagTone: 'magenta' },
    { t: '14:01:58', n: 'Mei',      fp: '5c8e21', m: '今天的場地有點冷 🥶',    tag: 'MSG',  tagTone: 'cyan' },
    { t: '14:01:55', n: '小明',     fp: 'a3f1c8', m: '+1',                     tag: 'MSG',  tagTone: 'cyan' },
    { t: '14:01:52', n: 'fp_88c1',  fp: '88c100', m: '<已隱藏 · admin>',        tag: 'FLAG', tagTone: 'crimson', masked: true },
    { t: '14:01:48', n: '阿傑',     fp: 'c4a91d', m: '推推 👍',                tag: 'MSG',  tagTone: 'cyan' },
    { t: '14:01:44', n: '訪客6824', fp: '8b2e74', m: 'B',                       tag: 'POLL', tagTone: 'magenta' },
    { t: '14:01:41', n: 'Yvonne',   fp: '7f3b2c', m: '請問 Q&A 環節在哪裡',     tag: 'Q&A',  tagTone: 'amber' },
    { t: '14:01:38', n: '匿名',     fp: 'd8e5a2', m: '請分享簡報連結',          tag: 'MSG',  tagTone: 'cyan' },
    { t: '14:01:34', n: 'Kai',      fp: '4d7c2e', m: '🔥🔥🔥',                 tag: 'MSG',  tagTone: 'cyan' },
  ];

  // 8 effects (.dme)
  const effects = [
    { name: '彩虹漸變',  en: 'rainbow',     bg: `linear-gradient(90deg, ${hudTokens.crimson}, ${hudTokens.amber}, ${hudTokens.lime}, ${hudTokens.cyan})` },
    { name: '彈跳',      en: 'bounce',      bg: '#1e293b', accent: _lc.amber },
    { name: '螢光',      en: 'glow-cyan',   bg: '#1e293b', accent: _lc.cyan },
    { name: '震動',      en: 'shake',       bg: '#1e293b', accent: _lc.crimson },
    { name: '粒子爆破',  en: 'particles',   bg: '#1e293b', accent: _lc.violet },
    { name: '漸顯',      en: 'fade-in',     bg: '#1e293b', accent: _lc.lime },
    { name: '加粗描邊',  en: 'stroke',      bg: '#1e293b', accent: _lc.text },
    { name: '閃爍',      en: 'flicker',     bg: '#1e293b', accent: _lc.magenta },
  ];

  // recent moderator actions (sidebar variant)
  const recentActs = [
    { t: '14:02:08', op: '隱藏訊息',     tgt: 'fp_a3f2',  tone: 'crimson' },
    { t: '14:01:52', op: '加入黑名單',   tgt: 'fp_88c1',  tone: 'amber' },
    { t: '14:01:30', op: '推送廣播',     tgt: '休息 10 分鐘', tone: 'cyan' },
    { t: '14:00:48', op: '結束投票',     tgt: 'poll_47fa', tone: 'lime' },
    { t: '13:58:12', op: '啟動效果',     tgt: 'rainbow',  tone: 'violet' },
    { t: '13:57:02', op: '隱藏訊息',     tgt: 'fp_5c8e',  tone: 'crimson' },
  ];

  return (
    <div style={{
      width: 1440, height: 900, background: _lc.bg, color: _lc.text,
      fontFamily: _lc.fontSans, position: 'relative',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      {/* TOPBAR — 44px */}
      <div style={{
        height: 44, flexShrink: 0,
        background: _lc.panel, borderBottom: `1px solid ${_lc.line}`,
        display: 'flex', alignItems: 'stretch',
      }}>
        {/* brand */}
        <div style={{
          width: 200, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 8,
          borderRight: `1px solid ${_lc.line}`,
        }}>
          <span style={{
            width: 22, height: 22, borderRadius: 4,
            background: 'linear-gradient(135deg, ${hudTokens.crimson}, ${hudTokens.amber})',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: _lc.fontDisp, fontSize: 13, color: hudTokens.bg0, fontWeight: 700,
          }}>D</span>
          <div>
            <div style={{ fontFamily: _lc.fontDisp, fontSize: 15, color: _lc.text, lineHeight: 1, letterSpacing: 0.5 }}>DANMU FIRE</div>
            <div style={{ fontFamily: _lc.fontMono, fontSize: 8, color: _lc.cyan, letterSpacing: 1.2, marginTop: 2 }}>v5.0.0</div>
          </div>
        </div>

        {/* 10 nav items */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 6px', gap: 1, overflow: 'hidden' }}>
          {nav.map((n, i) => {
            const compact = topbar === 'compact';
            return (
              <span key={i} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: compact ? '6px 10px' : '6px 12px',
                borderRadius: 3,
                background: n.active ? _lc.cyanSoft : 'transparent',
                border: `1px solid ${n.active ? _lc.cyanLine : 'transparent'}`,
                color: n.active ? _lc.cyan : _lc.textDim,
                fontFamily: _lc.fontMono, fontSize: 10, letterSpacing: 0.6, fontWeight: 600,
                whiteSpace: 'nowrap',
              }}>
                <span style={{ fontSize: 12 }}>{n.icon}</span>
                {compact ? (
                  <span style={{ fontFamily: _lc.fontSans, fontSize: 11 }}>{n.zh}</span>
                ) : (
                  <>
                    <span style={{ fontFamily: _lc.fontSans, fontSize: 11 }}>{n.zh}</span>
                    <span style={{ fontSize: 8.5, color: _lc.textMute, letterSpacing: 1.1 }}>{n.en}</span>
                  </>
                )}
              </span>
            );
          })}
        </div>

        {/* right cluster: session selector · ⌘K · bell · cog */}
        <div style={{ display: 'flex', alignItems: 'center', borderLeft: `1px solid ${_lc.line}` }}>
          {/* session selector */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0 12px', height: '100%',
            borderRight: `1px solid ${_lc.line}`,
            cursor: 'default',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: _lc.lime, boxShadow: `0 0 6px ${_lc.lime}` }} />
            <div>
              <div style={{ fontFamily: _lc.fontMono, fontSize: 8, color: _lc.lime, letterSpacing: 1.1 }}>OPEN · 02:42:18</div>
              <div style={{ fontSize: 11, color: _lc.text, marginTop: 1 }}>keynote · Q1 全員大會</div>
            </div>
            <span style={{ fontFamily: _lc.fontMono, fontSize: 11, color: _lc.textMute, marginLeft: 4 }}>▾</span>
          </span>

          {/* ⌘K */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0 12px', height: '100%',
            borderRight: `1px solid ${_lc.line}`,
            fontFamily: _lc.fontMono, fontSize: 10, color: _lc.textDim, letterSpacing: 0.6,
          }}>
            <span style={{ fontSize: 13 }}>⌕</span>
            <span style={{ padding: '1px 5px', background: _lc.raised, border: `1px solid ${_lc.line}`, borderRadius: 2, fontSize: 9, color: _lc.text }}>⌘K</span>
          </span>

          {/* bell */}
          <span style={{
            position: 'relative',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 44, height: 44, borderRight: `1px solid ${_lc.line}`,
            color: _lc.textDim,
          }}>
            <span style={{ fontSize: 14 }}>🔔</span>
            <span style={{
              position: 'absolute', top: 8, right: 8,
              width: 14, height: 14, borderRadius: '50%',
              background: _lc.crimson, color: _lc.text,
              fontFamily: _lc.fontMono, fontSize: 8, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: 0,
            }}>3</span>
          </span>

          {/* cog */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 44, height: 44, color: _lc.textDim, fontSize: 14,
          }}>⚙</span>
        </div>
      </div>

      {/* KPI RAIL — 56px, 4 counters across full width */}
      <div style={{
        height: 56, flexShrink: 0, background: _lc.panel,
        borderBottom: `1px solid ${_lc.line}`,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      }}>
        {[
          { k: '在線觀眾',  ke: 'ONLINE',     v: '184',   s: 'peak 247',     tone: 'lime',    spark: [22,28,31,29,34,38,42,40,44,42,46,48,52,49,53,51,55,58,52,184].map(x => Math.min(x, 60)) },
          { k: '訊息流速',  ke: 'MSG / SEC',  v: '24.3',  s: '+12% vs avg', tone: 'cyan',    spark: [12,15,18,14,22,28,24,31,26,35,32,38,29,33,28,36,42,38,31,24].map(x=>x*1.5) },
          { k: '佇列深度',  ke: 'QUEUE',      v: '3',     s: 'oldest 14s',  tone: 'amber',   spark: [0,1,2,1,3,2,4,3,5,4,2,1,3,5,3,4,2,3,4,3].map(x=>x*8) },
          { k: '本場時長',  ke: 'SESSION',    v: '02:42', s: '/ 計畫 04:00', tone: 'violet',  spark: null },
        ].map((k, i, arr) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px',
            borderRight: i < arr.length - 1 ? `1px solid ${_lc.lineSoft}` : 'none',
          }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{
                  fontFamily: _lc.fontDisp, fontSize: 28,
                  color: k.tone === 'cyan' ? _lc.cyan : k.tone === 'lime' ? _lc.lime : k.tone === 'amber' ? _lc.amber : _lc.violet,
                  letterSpacing: 0.5, lineHeight: 1,
                }}>{k.v}</span>
                <span style={{ fontFamily: _lc.fontMono, fontSize: 9, color: _lc.textMute, letterSpacing: 1.1 }}>{k.ke}</span>
              </div>
              <div style={{ fontSize: 10.5, color: _lc.textDim, marginTop: 3 }}>{k.k} · <span style={{ fontFamily: _lc.fontMono, fontSize: 9, color: _lc.textMute }}>{k.s}</span></div>
            </div>
            {k.spark && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 1.5, width: 80, height: 28 }}>
                {k.spark.map((h, j) => (
                  <span key={j} style={{
                    flex: 1, height: `${(h / 80) * 100}%`,
                    background: k.tone === 'cyan' ? _lc.cyanLine : k.tone === 'lime' ? 'rgba(134, 239, 172,0.5)' : k.tone === 'amber' ? 'rgba(251,191,36,0.5)' : 'rgba(56,189,248,0.5)',
                    borderRadius: 0.5, opacity: j === 19 ? 1 : 0.7,
                  }} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* BODY — 800px split 60/40 (recent sidebar) or 65/35 (bell-only) */}
      <div style={{
        flex: 1, minHeight: 0,
        display: 'grid',
        gridTemplateColumns: recent === 'sidebar' ? '1fr 480px 220px' : '1fr 480px',
        gap: 1,
        background: _lc.line,
      }}>
        {/* ── LEFT · LIVE FEED (60%) ──────────────────────────────── */}
        <div style={{ background: _lc.bg, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          {/* feed header */}
          <div style={{
            height: 40, flexShrink: 0, padding: '0 16px',
            display: 'flex', alignItems: 'center', gap: 10,
            borderBottom: `1px solid ${_lc.line}`, background: _lc.panel,
          }}>
            <span style={{ fontFamily: _lc.fontMono, fontSize: 10, color: _lc.cyan, letterSpacing: 1.3 }}>LIVE FEED</span>
            <span style={{ fontFamily: _lc.fontMono, fontSize: 9, color: _lc.textMute, letterSpacing: 0.5 }}>· 1,287 訊息 · 24/sec</span>

            {/* filter chips */}
            <div style={{ marginLeft: 12, display: 'flex', gap: 4 }}>
              {[
                { l: '全部 1,287', sel: true },
                { l: 'Q&A 23', tone: 'amber' },
                { l: 'POLL 76', tone: 'magenta' },
                { l: 'FLAG 12', tone: 'crimson' },
              ].map((c, i) => (
                <span key={i} style={{
                  padding: '2px 8px', borderRadius: 2,
                  background: c.sel ? _lc.cyanSoft : 'transparent',
                  border: `1px solid ${c.sel ? _lc.cyanLine : _lc.line}`,
                  color: c.sel ? _lc.cyan : _lc.textDim,
                  fontFamily: _lc.fontMono, fontSize: 9.5, letterSpacing: 0.4,
                }}>{c.l}</span>
              ))}
            </div>

            <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: _lc.lime, animation: 'hud-pulse 1.6s infinite' }} />
              <span style={{ fontFamily: _lc.fontMono, fontSize: 9, color: _lc.lime, letterSpacing: 1 }}>AUTO-SCROLL · ON</span>
            </span>
            <span style={{
              padding: '3px 8px', borderRadius: 2, background: _lc.raised,
              border: `1px solid ${_lc.line}`, color: _lc.textDim,
              fontFamily: _lc.fontMono, fontSize: 9, letterSpacing: 0.6,
            }}>⏸ 暫停</span>
          </div>

          {/* feed list */}
          <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {feed.map((r, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '64px 50px 1fr auto',
                gap: 10, alignItems: 'baseline',
                padding: '8px 16px',
                borderBottom: `1px solid ${_lc.lineSoft}`,
                background: i === 0 ? 'rgba(56,189,248,0.04)' : 'transparent',
              }}>
                <span style={{ fontFamily: _lc.fontMono, fontSize: 10, color: _lc.textMute, letterSpacing: 0.4 }}>{r.t}</span>
                <_Pill tone={r.tagTone} mono sm>{r.tag}</_Pill>
                <div style={{ minWidth: 0, display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 12, color: _lc.text, fontWeight: 500, flexShrink: 0 }}>@{r.n}</span>
                  <span style={{ fontFamily: _lc.fontMono, fontSize: 9.5, color: _lc.textMute, flexShrink: 0 }}>fp:{r.fp}</span>
                  <span style={{
                    fontSize: 12.5, color: r.masked ? _lc.textDim : _lc.text,
                    fontStyle: r.masked ? 'italic' : 'normal',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>· {r.m}</span>
                </div>
                <div style={{ display: 'flex', gap: 3, opacity: i === 0 ? 1 : 0.35 }}>
                  {['遮罩', '隱藏', '黑名單', '⋯'].map((b, j) => (
                    <span key={j} style={{
                      padding: '2px 7px', borderRadius: 2,
                      background: 'transparent', border: `1px solid ${_lc.line}`,
                      color: _lc.textDim, fontFamily: _lc.fontMono, fontSize: 9, letterSpacing: 0.4,
                    }}>{b}</span>
                  ))}
                </div>
              </div>
            ))}
            {/* fade-out at bottom to suggest scroll */}
            <div style={{ height: 24, background: 'linear-gradient(180deg, transparent, #0A0E1A)', flexShrink: 0 }} />
          </div>
        </div>

        {/* ── MIDDLE · 4 QUICK ACTIONS (480px) ────────────────────── */}
        <div style={{ background: _lc.bg, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
          {/* header */}
          <div style={{
            height: 40, flexShrink: 0, padding: '0 16px',
            display: 'flex', alignItems: 'center', gap: 10,
            borderBottom: `1px solid ${_lc.line}`, background: _lc.panel,
          }}>
            <span style={{ fontFamily: _lc.fontMono, fontSize: 10, color: _lc.amber, letterSpacing: 1.3 }}>QUICK ACTIONS</span>
            <span style={{ fontFamily: _lc.fontMono, fontSize: 9, color: _lc.textMute, letterSpacing: 0.5 }}>· F1–F4 快捷鍵</span>
          </div>

          <div style={{ flex: 1, minHeight: 0, padding: 14, display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden' }}>
            {/* ① EFFECTS STRIP */}
            <div style={{ background: _lc.panel, border: `1px solid ${_lc.line}`, borderRadius: 4, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontFamily: _lc.fontMono, fontSize: 9, color: _lc.violet, letterSpacing: 1.2, fontWeight: 600 }}>① EFFECTS</span>
                <span style={{ fontFamily: _lc.fontMono, fontSize: 9, color: _lc.textMute }}>F1 · 點擊觸發</span>
                <span style={{ marginLeft: 'auto', fontFamily: _lc.fontMono, fontSize: 9, color: _lc.textDim }}>{strip === 'scroll' ? '8 / 8' : '4 + more'}</span>
              </div>
              {strip === 'scroll' ? (
                <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4 }}>
                  {effects.map((e, i) => (
                    <div key={i} style={{
                      flexShrink: 0, width: 76, height: 56, borderRadius: 3,
                      background: e.bg, border: `1px solid ${e.accent ? `rgba(255,255,255,0.08)` : 'rgba(255,255,255,0.18)'}`,
                      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                      padding: '5px 7px', position: 'relative', overflow: 'hidden',
                    }}>
                      <span style={{ fontFamily: _lc.fontMono, fontSize: 8, color: e.accent || '#020617', letterSpacing: 0.8, fontWeight: 700 }}>{e.en.toUpperCase()}</span>
                      <span style={{
                        fontFamily: _lc.fontDisp, fontSize: 18, letterSpacing: 1,
                        color: e.accent || '#020617', textAlign: 'center', lineHeight: 1,
                      }}>ABC</span>
                      <span style={{ fontSize: 8.5, color: e.accent ? _lc.textDim : '#020617', textAlign: 'center' }}>{e.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
                  {effects.slice(0, 4).map((e, i) => (
                    <div key={i} style={{
                      height: 56, borderRadius: 3,
                      background: e.bg, border: `1px solid rgba(255,255,255,0.08)`,
                      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                      padding: '5px 7px',
                    }}>
                      <span style={{ fontFamily: _lc.fontMono, fontSize: 8, color: e.accent || '#020617', letterSpacing: 0.8, fontWeight: 700 }}>{e.en.toUpperCase()}</span>
                      <span style={{ fontFamily: _lc.fontDisp, fontSize: 16, letterSpacing: 1, color: e.accent || '#020617', textAlign: 'center', lineHeight: 1 }}>ABC</span>
                      <span style={{ fontSize: 8.5, color: e.accent ? _lc.textDim : '#020617', textAlign: 'center' }}>{e.name}</span>
                    </div>
                  ))}
                  <div style={{
                    gridColumn: '1 / -1', textAlign: 'center', padding: '8px 0',
                    background: _lc.raised, border: `1px solid ${_lc.line}`, borderRadius: 3,
                    fontFamily: _lc.fontMono, fontSize: 10, color: _lc.textDim, letterSpacing: 0.6,
                  }}>還有 4 個 · 展開 ▾</div>
                </div>
              )}
            </div>

            {/* ② POLL LAUNCHER */}
            <div style={{ background: _lc.panel, border: `1px solid ${_lc.line}`, borderRadius: 4, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontFamily: _lc.fontMono, fontSize: 9, color: _lc.magenta, letterSpacing: 1.2, fontWeight: 600 }}>② POLL</span>
                <span style={{ fontFamily: _lc.fontMono, fontSize: 9, color: _lc.textMute }}>F2 · 從 deck 啟動</span>
                <span style={{ marginLeft: 'auto', fontFamily: _lc.fontMono, fontSize: 9, color: _lc.textDim }}>deck · 12 個問題</span>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={{ flex: 1, padding: '8px 10px', background: _lc.raised, border: `1px solid ${_lc.line}`, borderRadius: 3 }}>
                  <div style={{ fontFamily: _lc.fontMono, fontSize: 8, color: _lc.textMute, letterSpacing: 1 }}>下一題 · Q3 / 12</div>
                  <div style={{ fontSize: 12, color: _lc.text, marginTop: 3, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>下一個 demo 看哪一個?</div>
                </div>
                <span style={{
                  padding: '10px 14px', borderRadius: 3,
                  background: _lc.magenta, color: hudTokens.bg0,
                  fontFamily: _lc.fontMono, fontSize: 11, letterSpacing: 0.8, fontWeight: 700, flexShrink: 0,
                }}>啟動 ▶</span>
              </div>
            </div>

            {/* ③ BLACKLIST */}
            <div style={{ background: _lc.panel, border: `1px solid ${_lc.line}`, borderRadius: 4, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontFamily: _lc.fontMono, fontSize: 9, color: _lc.crimson, letterSpacing: 1.2, fontWeight: 600 }}>③ BLACKLIST</span>
                <span style={{ fontFamily: _lc.fontMono, fontSize: 9, color: _lc.textMute }}>F3 · fp / 暱稱 / 關鍵字</span>
                <span style={{ marginLeft: 'auto', fontFamily: _lc.fontMono, fontSize: 9, color: _lc.textDim }}>已封禁 8</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{
                  flex: 1, padding: '7px 10px', background: _lc.raised,
                  border: `1px solid ${_lc.line}`, borderRadius: 3,
                  fontFamily: _lc.fontMono, fontSize: 11, color: _lc.textMute, letterSpacing: 0.3,
                }}>fp_ 或 @暱稱…</div>
                <span style={{
                  padding: '7px 12px', borderRadius: 3,
                  background: _lc.crimson, color: hudTokens.bg0,
                  fontFamily: _lc.fontMono, fontSize: 10.5, letterSpacing: 0.8, fontWeight: 700,
                }}>+ 加入</span>
              </div>
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                {['fp:a3f200', 'fp:88c100', '@spam_bot', 'fp:5c8e21'].map((c, i) => (
                  <span key={i} style={{
                    padding: '2px 6px', borderRadius: 2,
                    background: 'rgba(248, 113, 113,0.10)', border: `1px solid rgba(248, 113, 113,0.35)`,
                    color: _lc.crimson,
                    fontFamily: _lc.fontMono, fontSize: 9, letterSpacing: 0.3,
                  }}>{c} ×</span>
                ))}
              </div>
            </div>

            {/* ④ BROADCAST */}
            <div style={{
              background: _lc.panel, border: `1px solid ${_lc.line}`, borderRadius: 4, padding: '10px 12px',
              display: 'flex', flexDirection: 'column', gap: 8, position: 'relative',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontFamily: _lc.fontMono, fontSize: 9, color: _lc.cyan, letterSpacing: 1.2, fontWeight: 600 }}>④ BROADCAST</span>
                <span style={{ fontFamily: _lc.fontMono, fontSize: 9, color: _lc.textMute }}>F4 · 推送系統訊息</span>
                <span style={{ marginLeft: 'auto', fontFamily: _lc.fontMono, fontSize: 9, color: _lc.textDim }}>0 in queue</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{
                  flex: 1, padding: '7px 10px', background: _lc.raised,
                  border: `1px solid ${_lc.line}`, borderRadius: 3,
                  fontFamily: _lc.fontSans, fontSize: 11.5, color: _lc.text, letterSpacing: 0.2,
                }}>休息 10 分鐘 · 14:30 回來</div>
                <span style={{
                  padding: '7px 12px', borderRadius: 3,
                  background: _lc.cyan, color: hudTokens.bg0,
                  fontFamily: _lc.fontMono, fontSize: 10.5, letterSpacing: 0.8, fontWeight: 700,
                }}>推送 ↗</span>
              </div>

              {/* INLINE confirmation (Q3 variant) */}
              {(feedback === 'inline' || feedback === 'both') && showInlineConfirm === 'broadcast' && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '5px 8px', borderRadius: 2,
                  background: 'rgba(134, 239, 172,0.10)', border: `1px solid rgba(134, 239, 172,0.45)`,
                  fontFamily: _lc.fontMono, fontSize: 9.5, color: _lc.lime, letterSpacing: 0.4,
                }}>
                  <span>✓</span>
                  <span>已推送到 184 位觀眾 · 1.2s 前</span>
                  <span style={{ marginLeft: 'auto', color: _lc.textDim }}>↶ 撤回</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── RIGHT · RECENT ACTIONS sidebar (220px, optional) ─────── */}
        {recent === 'sidebar' && (
          <div style={{ background: _lc.bg, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
            <div style={{
              height: 40, flexShrink: 0, padding: '0 14px',
              display: 'flex', alignItems: 'center', gap: 8,
              borderBottom: `1px solid ${_lc.line}`, background: _lc.panel,
            }}>
              <span style={{ fontFamily: _lc.fontMono, fontSize: 10, color: _lc.lime, letterSpacing: 1.3 }}>MY ACTIONS</span>
              <span style={{ marginLeft: 'auto', fontFamily: _lc.fontMono, fontSize: 9, color: _lc.textMute }}>{recentActs.length}</span>
            </div>
            <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', padding: '6px 0' }}>
              {recentActs.map((a, i) => (
                <div key={i} style={{
                  padding: '8px 14px', borderBottom: `1px solid ${_lc.lineSoft}`,
                  display: 'flex', flexDirection: 'column', gap: 3,
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <_Pill tone={a.tone} mono sm>{a.op}</_Pill>
                    <span style={{ marginLeft: 'auto', fontFamily: _lc.fontMono, fontSize: 9, color: _lc.textMute }}>{a.t}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontFamily: _lc.fontMono, fontSize: 10, color: _lc.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{a.tgt}</span>
                    <span style={{ fontFamily: _lc.fontMono, fontSize: 9, color: _lc.cyan, letterSpacing: 0.4 }}>↶</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* TOAST (Q3 variant) */}
      {(feedback === 'toast' || feedback === 'both') && showToast && (
        <div style={{
          position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)',
          padding: '10px 16px', borderRadius: 3,
          background: _lc.raised2, border: `1px solid rgba(134, 239, 172,0.45)`,
          boxShadow: '0 8px 28px rgba(0,0,0,0.6)',
          display: 'flex', alignItems: 'center', gap: 10,
          fontFamily: _lc.fontSans, fontSize: 12, color: _lc.text,
        }}>
          <span style={{
            width: 18, height: 18, borderRadius: '50%',
            background: 'rgba(134, 239, 172,0.25)', border: `1.5px solid ${_lc.lime}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: _lc.lime, fontSize: 11, fontWeight: 700,
          }}>✓</span>
          <span>已加入黑名單 · <span style={{ fontFamily: _lc.fontMono, color: _lc.textDim }}>fp:a3f200</span></span>
          <span style={{ marginLeft: 6, fontFamily: _lc.fontMono, fontSize: 10, color: _lc.cyan, letterSpacing: 0.6 }}>↶ 撤銷 · 5s</span>
        </div>
      )}

      {/* breakpoint indicator */}
      <span style={{
        position: 'absolute', top: 50, right: 14, zIndex: 10,
        fontFamily: _lc.fontMono, fontSize: 8, color: _lc.textMute, letterSpacing: 1.3,
        padding: '2px 6px', background: _lc.bg, border: `1px solid ${_lc.line}`, borderRadius: 2,
      }}>1440 · #/dashboard · LIVE CONSOLE</span>
    </div>
  );
}

window.LiveConsoleDashboard = LiveConsoleDashboard;
