// DS-003 · RWD batch1 — 768 breakpoint, 6 high-frequency live pages
//
// Per Decisions Log lock-in:
// - Dashboard:     4-col KPI → 2-col; side session banner → top strip
// - Messages:      filters collapse into drawer (chip + badge of active count)
// - Polls:         master-detail stacked — list above / editor below (DS-006 lock)
// - Broadcast:     vertical action stack, primary CTA full-width
// - Notifications: filter rail → drawer, list / detail stack (DS-008 lock)
// - Sessions:      table → card stack, sortable chips at top
//
// Each artboard is rendered inside a Safari-tablet-ish frame so the responsive
// chrome reads as 768 instead of "narrow desktop". 768 width = the *content*
// viewport; the surrounding frame adds ~28px chrome on each side.


// 768 artboard frame — wraps AdminPageShell at fixed viewport for canvas display
function _F768({ route, title, en, badge, children }) {
  return (
    <div style={{ width: 768, height: 1024, overflow: 'hidden', position: 'relative', borderRadius: 14, boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
      <AdminPageShell route={route.replace('#/','')} title={title} en={en || ''} theme="dark">
        {({ panel, raised, line, text, textDim, accent, radius }) => (
          <div style={{ height: '100%', overflow: 'auto' }}>
            {typeof children === 'function' ? children({ panel, raised, line, text, textDim, accent, radius }) : children}
          </div>
        )}
      </AdminPageShell>
      <span style={{
        position: 'absolute', top: 8, right: 8, zIndex: 10,
        fontFamily: hudTokens.fontMono, fontSize: 8.5, color: hudTokens.textMute, letterSpacing: 1.4,
        padding: '2px 6px', background: hudTokens.bg0, border: `1px solid ${hudTokens.line}`, borderRadius: 2,
      }}>768 · iPad portrait</span>
    </div>
  );
}

function _R768Tag({ tone, mono, children }) {
  const c = {
    cyan:    { fg: hudTokens.cyan,    bg: hudTokens.cyanSoft,                 br: hudTokens.cyanLine },
    lime:    { fg: hudTokens.lime,    bg: 'rgba(134, 239, 172,0.13)',       br: 'rgba(134, 239, 172,0.45)' },
    amber:   { fg: hudTokens.amber,   bg: 'rgba(251,191,36,0.13)',       br: 'rgba(251,191,36,0.45)' },
    crimson: { fg: hudTokens.crimson, bg: 'rgba(248, 113, 113,0.13)',        br: 'rgba(248, 113, 113,0.45)' },
    magenta: { fg: hudTokens.amber, bg: 'rgba(251,191,36,0.13)',      br: 'rgba(251,191,36,0.45)' },
    mute:    { fg: hudTokens.textMute, bg: 'transparent',                br: hudTokens.line },
  }[tone || 'mute'];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '2px 6px', borderRadius: 2,
      background: c.bg, color: c.fg, border: `1px solid ${c.br}`,
      fontFamily: mono ? hudTokens.fontMono : hudTokens.fontSans,
      fontSize: 9.5, letterSpacing: mono ? 1 : 0.2, fontWeight: 600,
    }}>{children}</span>
  );
}

// ─── 1) Dashboard ─────────────────────────────────────────────────────────
function RwdDashboard768() {
  return (
    <_F768 route="#/dashboard" title="控制台" en="DASHBOARD · LIVE · 02:42:18" badge="● LIVE">
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 14, height: '100%', overflow: 'auto' }}>
        {/* session banner — moved to top strip */}
        <div style={{
          padding: '10px 14px', borderRadius: 4,
          background: hudTokens.cyanSoft, border: `1px solid ${hudTokens.cyanLine}`,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: hudTokens.lime, boxShadow: `0 0 8px ${hudTokens.lime}` }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.cyan, letterSpacing: 1.2 }}>SESSION · keynote</div>
            <div style={{ fontSize: 12, color: hudTokens.text, marginTop: 1 }}>14:00 開場 · 已 02:42:18 · 1,287 訊息</div>
          </div>
          <_R768Tag tone="lime" mono>OPEN</_R768Tag>
        </div>

        {/* KPI 4→2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { l: '本場訊息',    v: '1,287',  d: '+24 在過去 1m', tone: 'cyan' },
            { l: '當前並發',    v: '184',    d: 'peak 247',      tone: 'lime' },
            { l: '審核佇列',    v: '3',      d: 'oldest 14s',    tone: 'amber' },
            { l: '進行中投票',  v: '1 / 4',  d: '76 票 · 2:14',  tone: 'magenta' },
          ].map((k, i) => (
            <div key={i} style={{
              background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4, padding: 12,
            }}>
              <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.textMute, letterSpacing: 1.2 }}>{k.l.toUpperCase()}</div>
              <div style={{
                fontFamily: '"Zen Kaku Gothic New", sans-serif', fontSize: 28, fontWeight: 700, marginTop: 6,
                color: k.tone === 'cyan' ? hudTokens.cyan : k.tone === 'lime' ? hudTokens.lime : k.tone === 'amber' ? hudTokens.amber : hudTokens.amber,
                letterSpacing: -0.5, lineHeight: 1,
              }}>{k.v}</div>
              <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.textDim, marginTop: 4, letterSpacing: 0.3 }}>{k.d}</div>
            </div>
          ))}
        </div>

        {/* density chart */}
        <div style={{ background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4, padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textDim, letterSpacing: 1.2 }}>訊息密度 · 過去 30 分鐘</span>
            <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.textMute }}>peak 86 / min</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 56 }}>
            {[18, 32, 45, 28, 12, 24, 41, 58, 34, 22, 48, 67, 53, 29, 38, 71, 86, 52, 33, 41, 28, 36, 49, 62, 71, 58, 44, 39, 51, 38].map((h, i) => (
              <span key={i} style={{
                flex: 1, height: `${(h / 86) * 100}%`,
                background: h > 70 ? hudTokens.amber : h > 50 ? hudTokens.cyan : hudTokens.cyanLine, borderRadius: 1,
                opacity: h > 70 ? 0.9 : 0.7,
              }} />
            ))}
          </div>
        </div>

        {/* recent activity card */}
        <div style={{ background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4, padding: 14 }}>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textDim, letterSpacing: 1.2, marginBottom: 8 }}>最近操作</div>
          {[
            { t: '14:01:52', a: '隱藏訊息 fp_88c1', who: 'admin · K' },
            { t: '13:58:21', a: '推送投票「下一個 demo?」', who: 'admin · K' },
            { t: '13:54:08', a: '進入 STANDBY · 講話段落', who: 'kevin' },
          ].map((r, i, arr) => (
            <div key={i} style={{
              display: 'flex', gap: 10, padding: '8px 0',
              borderBottom: i < arr.length - 1 ? `1px solid ${hudTokens.line}` : 'none',
              fontSize: 11, alignItems: 'center',
            }}>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.textMute, letterSpacing: 0.3, width: 60 }}>{r.t}</span>
              <span style={{ flex: 1, color: hudTokens.text }}>{r.a}</span>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textDim, letterSpacing: 0.4 }}>{r.who}</span>
            </div>
          ))}
        </div>
      </div>
    </_F768>
  );
}

// ─── 2) Messages ──────────────────────────────────────────────────────────
function RwdMessages768() {
  return (
    <_F768 route="#/messages" title="訊息審核" en="MESSAGES · LIVE FEED · 1,287">
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>
        {/* toolbar — filters collapsed */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '7px 12px', background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4,
            fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.text, letterSpacing: 0.3,
          }}>
            <span>⊟ 篩選</span>
            <span style={{ padding: '0 5px', background: hudTokens.cyan, color: hudTokens.bg0, borderRadius: 2, fontSize: 9, fontWeight: 700 }}>3</span>
          </span>
          <div style={{ flex: 1, minWidth: 0, padding: '7px 12px', background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4 }}>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.textMute, letterSpacing: 0.3 }}>⌕ 搜尋訊息 / 暱稱 / 指紋…</span>
          </div>
          <span style={{
            padding: '7px 12px', background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4,
            fontFamily: hudTokens.fontMono, fontSize: 12, color: hudTokens.text,
          }}>⋮</span>
        </div>

        {/* active filter chips row */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {[
            { l: 'SHOWN · 1,184', tone: 'lime' },
            { l: 'MASKED · 67', tone: 'amber' },
            { l: '近 5 分鐘', tone: 'cyan' },
          ].map((f, i) => (
            <span key={i} style={{
              fontFamily: hudTokens.fontMono, fontSize: 9.5, letterSpacing: 0.8,
              padding: '4px 8px', borderRadius: 2,
              background: f.tone === 'lime' ? 'rgba(134, 239, 172,0.13)' : f.tone === 'amber' ? 'rgba(251,191,36,0.13)' : hudTokens.cyanSoft,
              color: f.tone === 'lime' ? hudTokens.lime : f.tone === 'amber' ? hudTokens.amber : hudTokens.cyan,
              border: `1px solid ${f.tone === 'lime' ? 'rgba(134, 239, 172,0.45)' : f.tone === 'amber' ? 'rgba(251,191,36,0.45)' : hudTokens.cyanLine}`,
              display: 'inline-flex', alignItems: 'center', gap: 4,
            }}>
              {f.l} <span>×</span>
            </span>
          ))}
        </div>

        {/* messages list — denser at 768 */}
        <div style={{ flex: 1, minHeight: 0, background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4, overflow: 'auto' }}>
          {[
            { t: '14:02:18', n: '小明',     m: '這個 demo 看起來超讚 👏', s: 'SHOWN',  c: 'lime' },
            { t: '14:02:14', n: '訪客6824', m: '想問講者幾個問題',         s: 'SHOWN',  c: 'lime' },
            { t: '14:02:11', n: '阿傑',     m: '+1 求簡報',                s: 'SHOWN',  c: 'lime' },
            { t: '14:02:08', n: 'fp_a3f2',  m: '<已遮罩 · profanity>',     s: 'MASKED', c: 'amber' },
            { t: '14:02:04', n: 'Yvonne',   m: '今天的場地有點冷 🥶',      s: 'SHOWN',  c: 'lime' },
            { t: '14:01:58', n: '匿名',     m: '請問 Q&A 環節在哪裡',       s: 'SHOWN',  c: 'lime' },
            { t: '14:01:52', n: 'fp_88c1',  m: '<已隱藏 · admin>',          s: 'HIDDEN', c: 'crimson' },
            { t: '14:01:47', n: 'Mei',      m: '現場聲音可以調大嗎',         s: 'SHOWN',  c: 'lime' },
            { t: '14:01:39', n: '阿傑',     m: '推推 👍',                    s: 'SHOWN',  c: 'lime' },
            { t: '14:01:30', n: '訪客0428', m: '可以分享簡報連結嗎?',         s: 'SHOWN',  c: 'lime' },
          ].map((r, i, arr) => (
            <div key={i} style={{
              padding: '10px 14px', borderBottom: i < arr.length - 1 ? `1px solid ${hudTokens.line}` : 'none',
              display: 'flex', gap: 10,
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 4, flexShrink: 0,
                background: hudTokens.bg3, border: `1px solid ${hudTokens.line}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.cyan, letterSpacing: 0.3,
              }}>{r.n.slice(0, 2)}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                  <span style={{ fontSize: 12, color: hudTokens.text, fontWeight: 500 }}>{r.n}</span>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textMute, letterSpacing: 0.3, marginLeft: 'auto' }}>{r.t}</span>
                  <_R768Tag tone={r.c} mono>{r.s}</_R768Tag>
                </div>
                <div style={{ fontSize: 12, color: r.s === 'SHOWN' ? hudTokens.text : hudTokens.textDim, fontStyle: r.s !== 'SHOWN' ? 'italic' : 'normal', lineHeight: 1.45 }}>
                  {r.m}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </_F768>
  );
}

// ─── 3) Polls (master-detail stack) ────────────────────────────────────────
function RwdPolls768() {
  return (
    <_F768 route="#/polls" title="投票" en="POLLS · MASTER-DETAIL STACK">
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>
        {/* MASTER — list above */}
        <div style={{ background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4, padding: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textDim, letterSpacing: 1.2 }}>本場投票 · 4</span>
            <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.cyan, letterSpacing: 0.5, padding: '3px 8px', background: hudTokens.cyanSoft, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 2 }}>+ 新建</span>
          </div>
          {[
            { t: '下一個 demo 看哪一個?', s: 'LIVE',     v: 76,  c: 'lime',    selected: true },
            { t: '今天的場地溫度?',       s: 'CLOSED',   v: 142, c: 'mute' },
            { t: '想看哪一場 keynote?',   s: 'CLOSED',   v: 218, c: 'mute' },
            { t: 'Q&A 想問哪一題?',       s: 'DRAFT',    v: 0,   c: 'amber' },
          ].map((p, i, arr) => (
            <div key={i} style={{
              padding: '9px 10px', borderRadius: 3,
              background: p.selected ? hudTokens.cyanSoft : 'transparent',
              border: `1px solid ${p.selected ? hudTokens.cyanLine : 'transparent'}`,
              borderBottom: i < arr.length - 1 && !p.selected ? `1px solid ${hudTokens.line}` : (p.selected ? `1px solid ${hudTokens.cyanLine}` : 'none'),
              display: 'flex', alignItems: 'center', gap: 10,
              marginBottom: i < arr.length - 1 ? 2 : 0,
            }}>
              <_R768Tag tone={p.c} mono>{p.s}</_R768Tag>
              <span style={{ flex: 1, minWidth: 0, fontSize: 12, color: hudTokens.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.t}</span>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.textDim, letterSpacing: 0.3 }}>{p.v} 票</span>
            </div>
          ))}
        </div>

        {/* DETAIL — editor below */}
        <div style={{ flex: 1, minHeight: 0, background: hudTokens.bg1, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 4, padding: 14, display: 'flex', flexDirection: 'column', gap: 10, overflow: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <_R768Tag tone="lime" mono>● LIVE</_R768Tag>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textDim, letterSpacing: 1, marginLeft: 'auto' }}>poll_47fa · 02:14 / 05:00</span>
          </div>
          <div style={{ fontSize: 16, fontWeight: 600, color: hudTokens.text, lineHeight: 1.3 }}>下一個 demo 看哪一個?</div>

          {/* options with bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
            {[
              { l: '即時翻譯',     v: 32, p: 42 },
              { l: '多人協作畫板', v: 21, p: 28 },
              { l: 'AI 投票分析',  v: 18, p: 24 },
              { l: 'Webhook 整合', v: 5,  p: 6 },
            ].map((o, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: hudTokens.text }}>{o.l}</span>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.text }}>
                    {o.v} <span style={{ color: hudTokens.textMute }}>· {o.p}%</span>
                  </span>
                </div>
                <div style={{ height: 6, background: hudTokens.bg2, borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: `${o.p}%`, height: '100%', background: i === 0 ? hudTokens.cyan : hudTokens.cyanLine, borderRadius: 3 }} />
                </div>
              </div>
            ))}
          </div>

          {/* action buttons stacked at bottom */}
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{
              padding: '10px 14px', borderRadius: 3, textAlign: 'center',
              background: hudTokens.amber, color: hudTokens.bg0,
              fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1, fontWeight: 700,
            }}>結束投票 · 顯示結果</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <span style={{
                padding: '8px 12px', borderRadius: 3, textAlign: 'center',
                background: hudTokens.bg2, color: hudTokens.text, border: `1px solid ${hudTokens.line}`,
                fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.6,
              }}>取消推送</span>
              <span style={{
                padding: '8px 12px', borderRadius: 3, textAlign: 'center',
                background: hudTokens.bg2, color: hudTokens.text, border: `1px solid ${hudTokens.line}`,
                fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.6,
              }}>↗ 深度分析</span>
            </div>
          </div>
        </div>
      </div>
    </_F768>
  );
}

// ─── 4) Broadcast ─────────────────────────────────────────────────────────
function RwdBroadcast768() {
  return (
    <_F768 route="#/broadcast" title="廣播控制" en="BROADCAST CONSOLE" badge="● LIVE">
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 14, height: '100%', overflow: 'auto' }}>
        {/* state hero */}
        <div style={{
          padding: 18, background: 'rgba(134, 239, 172,0.10)', border: `1px solid rgba(134, 239, 172,0.45)`, borderRadius: 4,
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: 'rgba(134, 239, 172,0.18)', border: `2px solid ${hudTokens.lime}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 0 16px rgba(134, 239, 172,0.5)`,
          }}>
            <span style={{ width: 14, height: 14, borderRadius: '50%', background: hudTokens.lime }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.lime, letterSpacing: 1.5 }}>CURRENT STATE</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: hudTokens.text, marginTop: 4, letterSpacing: -0.3 }}>LIVE · 顯示彈幕中</div>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.textDim, marginTop: 4, letterSpacing: 0.3 }}>queue: 0 · uptime 02:42:18</div>
          </div>
        </div>

        {/* primary CTA full width */}
        <span style={{
          padding: '14px 16px', borderRadius: 4, textAlign: 'center',
          background: hudTokens.amber, color: hudTokens.bg0,
          fontFamily: hudTokens.fontMono, fontSize: 13, letterSpacing: 1.2, fontWeight: 700,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <span style={{ fontFamily: hudTokens.fontMono }}>F2</span>
          <span>進入 STANDBY · 暫停顯示</span>
        </span>

        {/* secondary stack */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            { k: 'F3', l: '結束場次',     tone: 'crimson' },
            { k: '⌘G', l: '切換審核模式', tone: 'cyan' },
          ].map((b, i) => (
            <span key={i} style={{
              padding: '12px 14px', borderRadius: 3, textAlign: 'center',
              background: hudTokens.bg1, border: `1px solid ${b.tone === 'crimson' ? 'rgba(248, 113, 113,0.45)' : hudTokens.cyanLine}`,
              color: b.tone === 'crimson' ? hudTokens.crimson : hudTokens.cyan,
              fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 0.6,
              display: 'flex', flexDirection: 'column', gap: 4,
            }}>
              <span style={{ fontSize: 9, color: hudTokens.textMute, letterSpacing: 1.2 }}>{b.k}</span>
              <span style={{ fontWeight: 600 }}>{b.l}</span>
            </span>
          ))}
        </div>

        {/* queue / live counters */}
        <div style={{ background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4, padding: 14 }}>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textDim, letterSpacing: 1.2, marginBottom: 10 }}>QUEUE / METRICS</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { l: 'queue (standby)', v: '0',   sub: '' },
              { l: 'overlay 連線',     v: '3',   sub: 'main · projector · backup' },
              { l: '訊息 throughput',  v: '24', sub: '/ min · 過去 5 分鐘' },
              { l: 'WebSocket lag',   v: '38', sub: 'ms · p95' },
            ].map((m, i) => (
              <div key={i}>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.textMute, letterSpacing: 1 }}>{m.l.toUpperCase()}</div>
                <div style={{ fontFamily: '"Zen Kaku Gothic New", sans-serif', fontSize: 22, fontWeight: 700, color: hudTokens.text, marginTop: 4, letterSpacing: -0.3, lineHeight: 1 }}>{m.v}</div>
                {m.sub && <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.textDim, marginTop: 3, letterSpacing: 0.3 }}>{m.sub}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* mode hint */}
        <div style={{
          padding: 10, background: hudTokens.cyanSoft, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 3,
          fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.text, lineHeight: 1.55, letterSpacing: 0.3,
        }}>
          <span style={{ color: hudTokens.cyan, letterSpacing: 1.2 }}>STANDBY 提醒</span> · 暫停顯示時觀眾仍可送訊息(進 queue)。結束 standby 可選擇 drain 全部回放或丟棄。
        </div>
      </div>
    </_F768>
  );
}

// ─── 5) Notifications ────────────────────────────────────────────────────
function RwdNotifications768() {
  return (
    <_F768 route="#/notifications" title="通知中心" en="NOTIFICATIONS · 14 UNREAD">
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>
        {/* filter chip row — drawer entry */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '7px 12px', background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4,
            fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.text,
          }}>
            <span>⊟</span><span>分類</span>
            <span style={{ padding: '0 5px', background: hudTokens.cyan, color: hudTokens.bg0, borderRadius: 2, fontSize: 9, fontWeight: 700 }}>2</span>
          </span>
          {['全部 32', '未讀 14', '系統 8', '安全 3'].map((c, i) => (
            <span key={c} style={{
              padding: '6px 10px', borderRadius: 3,
              background: i === 0 ? hudTokens.cyanSoft : 'transparent',
              border: `1px solid ${i === 0 ? hudTokens.cyanLine : hudTokens.line}`,
              color: i === 0 ? hudTokens.cyan : hudTokens.textDim,
              fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5,
              flexShrink: 0,
            }}>{c}</span>
          ))}
        </div>

        {/* LIST + selected item DETAIL stacked (vs 3-col) */}
        <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateRows: 'auto 1fr', gap: 12 }}>
          {/* selected detail card on top — bigger emphasis */}
          <div style={{ background: hudTokens.bg1, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 4, padding: 14 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{
                width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                background: 'rgba(248, 113, 113,0.18)', border: `1.5px solid ${hudTokens.crimson}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: hudTokens.fontMono, fontSize: 14, color: hudTokens.crimson,
              }}>!</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                  <_R768Tag tone="crimson" mono>SECURITY</_R768Tag>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textMute, letterSpacing: 0.5, marginLeft: 'auto' }}>14:01:38 · 40s ago</span>
                </div>
                <div style={{ fontSize: 14, color: hudTokens.text, fontWeight: 600, marginTop: 6, lineHeight: 1.35 }}>
                  3 次來自 fp_a3f2 的密集發送觸發速率限制
                </div>
                <div style={{ fontSize: 11.5, color: hudTokens.textDim, marginTop: 6, lineHeight: 1.55 }}>
                  IP <code style={{ fontFamily: hudTokens.fontMono, color: hudTokens.text }}>192.168.5.12</code> 在 8 秒內送出 23 則訊息,系統已自動冷卻 5 分鐘。建議:檢視來源、考慮永久封禁。
                </div>
                <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                  <span style={{ padding: '5px 10px', borderRadius: 2, background: hudTokens.crimson, color: hudTokens.bg0, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5, fontWeight: 600 }}>永久封禁 IP</span>
                  <span style={{ padding: '5px 10px', borderRadius: 2, background: hudTokens.bg2, color: hudTokens.text, border: `1px solid ${hudTokens.line}`, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5 }}>檢視來源</span>
                  <span style={{ padding: '5px 10px', borderRadius: 2, background: hudTokens.bg2, color: hudTokens.textDim, border: `1px solid ${hudTokens.line}`, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5 }}>標記已讀</span>
                </div>
              </div>
            </div>
          </div>

          {/* list of items below */}
          <div style={{ background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4, overflow: 'auto' }}>
            {[
              { k: 'SECURITY', m: '3 次來自 fp_a3f2 的密集發送觸發速率限制',  t: '40s', tone: 'crimson', sel: true,  unread: true },
              { k: 'SYSTEM',   m: 'Overlay #2 (projector) 自動重連成功',        t: '2m',  tone: 'amber',   unread: true },
              { k: 'SYSTEM',   m: '插件 voting-pro 0.3.4 → 0.3.5 可更新',       t: '14m', tone: 'cyan',    unread: true },
              { k: 'SECURITY', m: '新管理員登入 · admin 從新裝置',              t: '1h',  tone: 'amber',   unread: false },
              { k: 'SYSTEM',   m: '備份完成 · 4.2 MB · /var/danmu/backups',     t: '2h',  tone: 'mute',    unread: false },
              { k: 'INFO',     m: 'Q1 使用報表已產生',                         t: '5h',  tone: 'mute',    unread: false },
            ].map((n, i, arr) => (
              <div key={i} style={{
                padding: '10px 14px', borderBottom: i < arr.length - 1 ? `1px solid ${hudTokens.line}` : 'none',
                display: 'flex', gap: 10, alignItems: 'center',
                background: n.sel ? hudTokens.cyanSoft : 'transparent',
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: n.unread ? hudTokens.cyan : 'transparent', flexShrink: 0,
                }} />
                <_R768Tag tone={n.tone} mono>{n.k}</_R768Tag>
                <span style={{ flex: 1, fontSize: 11.5, color: hudTokens.text, lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n.m}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textMute, letterSpacing: 0.4 }}>{n.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </_F768>
  );
}

// ─── 6) Sessions ─────────────────────────────────────────────────────────
function RwdSessions768() {
  return (
    <_F768 route="#/sessions" title="場次紀錄" en="SESSIONS · 142 ARCHIVED">
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>
        {/* sort chip row */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {[
            { l: '全部 142', sel: true },
            { l: 'OPEN 1' },
            { l: 'CLOSED 141' },
            { l: '最近 7 天' },
          ].map((c, i) => (
            <span key={i} style={{
              padding: '6px 11px', borderRadius: 3,
              background: c.sel ? hudTokens.cyanSoft : 'transparent',
              border: `1px solid ${c.sel ? hudTokens.cyanLine : hudTokens.line}`,
              color: c.sel ? hudTokens.cyan : hudTokens.textDim,
              fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.6,
            }}>{c.l}</span>
          ))}
          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.textDim, letterSpacing: 0.4, padding: '6px 0' }}>
            時間 ↓
          </span>
        </div>

        {/* card stack — replaces table */}
        <div style={{ flex: 1, minHeight: 0, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { id: 'sess_a3f2', t: 'keynote · Q1 全員大會', s: 'OPEN',   d: '2026-04-28 14:00 →',           m: '1,287 訊息 · 4 投票',  ms: '184 並發',   tone: 'lime' },
            { id: 'sess_8e21', t: 'demo day · Spring',      s: 'CLOSED', d: '2026-04-21 13:00 — 17:42',     m: '2,418 訊息 · 8 投票',  ms: 'peak 312',   tone: 'mute' },
            { id: 'sess_4d7c', t: 'workshop · Webhooks 101', s: 'CLOSED', d: '2026-04-15 10:00 — 12:30',    m: '482 訊息 · 0 投票',    ms: 'peak 89',    tone: 'mute' },
            { id: 'sess_2b81', t: 'all-hands · monthly',    s: 'CLOSED', d: '2026-04-08 09:00 — 11:45',     m: '1,824 訊息 · 6 投票',  ms: 'peak 248',   tone: 'mute' },
            { id: 'sess_15a3', t: 'product launch · alpha', s: 'CLOSED', d: '2026-04-01 19:00 — 21:30',     m: '3,214 訊息 · 12 投票', ms: 'peak 482',   tone: 'mute' },
            { id: 'sess_0c9f', t: 'taipei meetup',          s: 'CLOSED', d: '2026-03-28 19:08 — 22:14',     m: '784 訊息 · 2 投票',    ms: 'peak 142',   tone: 'mute' },
          ].map((s, i) => (
            <div key={i} style={{
              background: hudTokens.bg1, border: `1px solid ${s.s === 'OPEN' ? hudTokens.cyanLine : hudTokens.line}`, borderRadius: 4,
              padding: 12, display: 'flex', flexDirection: 'column', gap: 6,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <_R768Tag tone={s.tone} mono>{s.s}</_R768Tag>
                <span style={{ fontSize: 13, color: hudTokens.text, fontWeight: 600, flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.t}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textMute, letterSpacing: 0.4 }}>{s.id}</span>
              </div>
              <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.textDim, letterSpacing: 0.3 }}>{s.d}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 2 }}>
                <span style={{ fontSize: 11, color: hudTokens.text }}>{s.m}</span>
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9.5, color: s.s === 'OPEN' ? hudTokens.lime : hudTokens.textDim, letterSpacing: 0.4 }}>{s.ms}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </_F768>
  );
}

Object.assign(window, {
  RwdDashboard768, RwdMessages768, RwdPolls768,
  RwdBroadcast768, RwdNotifications768, RwdSessions768,
});
