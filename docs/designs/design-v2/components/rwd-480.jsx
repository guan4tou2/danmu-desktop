// DS-003 · RWD batch2 — 480 breakpoint, same 6 high-frequency live pages
//
// Per Decisions Log lock-in:
// - Dashboard:     KPI single column, density chart compresses, recent activity collapsed
// - Messages:      filter chip → bottom sheet drawer, list dense, swipe affordance shown
// - Polls:         master-detail FULL-SWITCH — list item taps → editor full screen with back arrow (DS-006)
// - Broadcast:     state hero compact, primary CTA full-width, secondary actions stacked
// - Notifications: filter chips horizontal scroll, list/detail FULL-SWITCH (item tap → detail screen) (DS-008)
// - Sessions:      card stack ultra-compact, primary metadata only
//
// Each artboard rendered inside an iPhone-like Safari frame so 480px reads as portrait phone.

const _r480 = {
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
  magenta:   hudTokens.amber,    // compat
  crimson:   hudTokens.crimson,
  violet:    hudTokens.cyan,     // compat
  fontSans:  hudTokens.fontSans,
  fontMono:  hudTokens.fontMono,
};

// shared 480 frame
function _F480({ route, title, en, badge, back, children, hideTopbar }) {
  return (
    <div style={{
      width: 480, height: 900, background: _r480.bg, color: _r480.text,
      fontFamily: _r480.fontSans, position: 'relative',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      borderRadius: 28, boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
    }}>
      {/* notch placeholder */}
      <div style={{
        height: 36, background: _r480.bg, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px',
        fontFamily: _r480.fontMono, fontSize: 12, color: _r480.text, letterSpacing: 0.4,
      }}>
        <span>14:02</span>
        <span style={{
          width: 100, height: 22, borderRadius: 12, background: '#000',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: _r480.fontMono, fontSize: 8, color: _r480.lime, letterSpacing: 1.2,
        }}>● LIVE 02:42</span>
        <span style={{ fontSize: 11 }}>5G · 96%</span>
      </div>

      {/* topbar */}
      {!hideTopbar && (
        <div style={{
          padding: '10px 16px', borderBottom: `1px solid ${_r480.line}`,
          background: _r480.panel,
          display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0,
        }}>
          {back ? (
            <span style={{
              width: 28, height: 28, borderRadius: 4, flexShrink: 0,
              border: `1px solid ${_r480.line}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: _r480.fontMono, fontSize: 14, color: _r480.cyan,
            }}>‹</span>
          ) : (
            <span style={{
              width: 28, height: 28, border: `1px solid ${_r480.line}`, borderRadius: 4,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: _r480.fontMono, fontSize: 13, color: _r480.text,
            }}>☰</span>
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: _r480.fontMono, fontSize: 8.5, color: _r480.cyan, letterSpacing: 1.4 }}>{en}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: _r480.text, marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</div>
          </div>
          {badge && (
            <span style={{
              fontFamily: _r480.fontMono, fontSize: 9, color: _r480.lime, letterSpacing: 1,
              padding: '3px 7px', background: 'rgba(134, 239, 172,0.13)',
              border: `1px solid rgba(134, 239, 172,0.45)`, borderRadius: 2,
            }}>{badge}</span>
          )}
        </div>
      )}

      {/* breakpoint indicator */}
      <span style={{
        position: 'absolute', top: 44, right: 14, zIndex: 10,
        fontFamily: _r480.fontMono, fontSize: 8, color: _r480.textMute, letterSpacing: 1.3,
        padding: '2px 5px', background: _r480.bg, border: `1px solid ${_r480.line}`, borderRadius: 2,
      }}>480 · {route}</span>

      {/* page body */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

function _Tag480({ tone, mono, children, sm }) {
  const c = {
    cyan:    { fg: _r480.cyan,    bg: _r480.cyanSoft,           br: _r480.cyanLine },
    lime:    { fg: _r480.lime,    bg: 'rgba(134, 239, 172,0.13)', br: 'rgba(134, 239, 172,0.45)' },
    amber:   { fg: _r480.amber,   bg: 'rgba(251,191,36,0.13)', br: 'rgba(251,191,36,0.45)' },
    crimson: { fg: _r480.crimson, bg: 'rgba(248, 113, 113,0.13)',  br: 'rgba(248, 113, 113,0.45)' },
    magenta: { fg: _r480.magenta, bg: 'rgba(251,191,36,0.13)', br: 'rgba(251,191,36,0.45)' },
    mute:    { fg: _r480.textMute, bg: 'transparent',          br: _r480.line },
  }[tone || 'mute'];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 3,
      padding: sm ? '1px 5px' : '2px 6px', borderRadius: 2,
      background: c.bg, color: c.fg, border: `1px solid ${c.br}`,
      fontFamily: mono ? _r480.fontMono : _r480.fontSans,
      fontSize: sm ? 8.5 : 9, letterSpacing: mono ? 1 : 0.2, fontWeight: 600,
    }}>{children}</span>
  );
}

// ─── 1) Dashboard ─────────────────────────────────────────────────────────
function RwdDashboard480() {
  return (
    <_F480 route="#/dashboard" title="控制台" en="DASHBOARD · LIVE">
      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 10, height: '100%', overflow: 'auto' }}>
        {/* session strip */}
        <div style={{
          padding: '8px 12px', borderRadius: 4,
          background: _r480.cyanSoft, border: `1px solid ${_r480.cyanLine}`,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: _r480.lime, boxShadow: `0 0 6px ${_r480.lime}`, flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: _r480.fontMono, fontSize: 8.5, color: _r480.cyan, letterSpacing: 1.1 }}>SESSION · keynote</div>
            <div style={{ fontSize: 11, color: _r480.text, marginTop: 1 }}>02:42:18 · 1,287 訊息</div>
          </div>
          <_Tag480 tone="lime" mono sm>OPEN</_Tag480>
        </div>

        {/* KPI single col, paired */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            { l: '本場訊息',   v: '1,287',  d: '+24 / 1m',    tone: 'cyan' },
            { l: '當前並發',   v: '184',    d: 'peak 247',    tone: 'lime' },
            { l: '審核佇列',   v: '3',      d: 'oldest 14s',  tone: 'amber' },
            { l: '進行中投票', v: '1 / 4',  d: '76 票',       tone: 'magenta' },
          ].map((k, i) => (
            <div key={i} style={{
              background: _r480.panel, border: `1px solid ${_r480.line}`, borderRadius: 4, padding: 10,
            }}>
              <div style={{ fontFamily: _r480.fontMono, fontSize: 8.5, color: _r480.textMute, letterSpacing: 1.1 }}>{k.l.toUpperCase()}</div>
              <div style={{
                fontFamily: '"Zen Kaku Gothic New", sans-serif', fontSize: 22, fontWeight: 700, marginTop: 4,
                color: k.tone === 'cyan' ? _r480.cyan : k.tone === 'lime' ? _r480.lime : k.tone === 'amber' ? _r480.amber : _r480.magenta,
                letterSpacing: -0.4, lineHeight: 1,
              }}>{k.v}</div>
              <div style={{ fontFamily: _r480.fontMono, fontSize: 8.5, color: _r480.textDim, marginTop: 3 }}>{k.d}</div>
            </div>
          ))}
        </div>

        {/* density chart */}
        <div style={{ background: _r480.panel, border: `1px solid ${_r480.line}`, borderRadius: 4, padding: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontFamily: _r480.fontMono, fontSize: 9, color: _r480.textDim, letterSpacing: 1.1 }}>密度 · 30 分鐘</span>
            <span style={{ marginLeft: 'auto', fontFamily: _r480.fontMono, fontSize: 8.5, color: _r480.textMute }}>peak 86</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 1.5, height: 44 }}>
            {[18, 32, 45, 28, 12, 24, 41, 58, 34, 22, 48, 67, 53, 29, 38, 71, 86, 52, 33, 41, 28, 36, 49, 62, 71, 58, 44, 39, 51, 38].map((h, i) => (
              <span key={i} style={{
                flex: 1, height: `${(h / 86) * 100}%`,
                background: h > 70 ? _r480.amber : h > 50 ? _r480.cyan : _r480.cyanLine, borderRadius: 1,
                opacity: h > 70 ? 0.9 : 0.7,
              }} />
            ))}
          </div>
        </div>

        {/* recent — collapsed accordion */}
        <div style={{ background: _r480.panel, border: `1px solid ${_r480.line}`, borderRadius: 4, padding: '10px 12px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontFamily: _r480.fontMono, fontSize: 9, color: _r480.textDim, letterSpacing: 1.1 }}>最近操作 · 8</span>
            <span style={{ marginLeft: 'auto', fontFamily: _r480.fontMono, fontSize: 12, color: _r480.cyan }}>›</span>
          </div>
          <div style={{ marginTop: 8, fontSize: 11, color: _r480.text, lineHeight: 1.4 }}>
            <span style={{ fontFamily: _r480.fontMono, fontSize: 9.5, color: _r480.textMute, marginRight: 6 }}>14:01:52</span>
            隱藏訊息 fp_88c1
          </div>
        </div>

        {/* quick actions strip */}
        <div style={{ display: 'flex', gap: 6, marginTop: 'auto' }}>
          {[
            { i: '⏸', l: 'STANDBY', tone: 'amber' },
            { i: '⌘K', l: '命令',    tone: 'cyan' },
            { i: '↻', l: '重整',    tone: 'mute' },
          ].map((a, i) => (
            <span key={i} style={{
              flex: 1, padding: '10px 8px', borderRadius: 3, textAlign: 'center',
              background: _r480.panel,
              border: `1px solid ${a.tone === 'amber' ? 'rgba(251,191,36,0.45)' : a.tone === 'cyan' ? _r480.cyanLine : _r480.line}`,
              color: a.tone === 'amber' ? _r480.amber : a.tone === 'cyan' ? _r480.cyan : _r480.textDim,
              fontFamily: _r480.fontMono, fontSize: 10, letterSpacing: 0.6, fontWeight: 600,
              display: 'flex', flexDirection: 'column', gap: 3,
            }}>
              <span style={{ fontSize: 12 }}>{a.i}</span>
              <span>{a.l}</span>
            </span>
          ))}
        </div>
      </div>
    </_F480>
  );
}

// ─── 2) Messages ──────────────────────────────────────────────────────────
function RwdMessages480() {
  return (
    <_F480 route="#/messages" title="訊息審核" en="MESSAGES · 1,287">
      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 10, height: '100%' }}>
        {/* search + filter button */}
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ flex: 1, padding: '8px 12px', background: _r480.panel, border: `1px solid ${_r480.line}`, borderRadius: 4 }}>
            <span style={{ fontFamily: _r480.fontMono, fontSize: 11, color: _r480.textMute, letterSpacing: 0.3 }}>⌕ 搜尋…</span>
          </div>
          <span style={{
            padding: '8px 12px', background: _r480.panel, border: `1px solid ${_r480.line}`, borderRadius: 4,
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontFamily: _r480.fontMono, fontSize: 11, color: _r480.text,
          }}>
            <span>⊟</span>
            <span style={{ padding: '0 4px', background: _r480.cyan, color: hudTokens.bg0, borderRadius: 2, fontSize: 9, fontWeight: 700 }}>3</span>
          </span>
        </div>

        {/* messages list */}
        <div style={{ flex: 1, minHeight: 0, background: _r480.panel, border: `1px solid ${_r480.line}`, borderRadius: 4, overflow: 'auto' }}>
          {[
            { t: '14:02:18', n: '小明',     m: '這個 demo 看起來超讚 👏', s: 'SHOWN',  c: 'lime' },
            { t: '14:02:14', n: '訪客6824', m: '想問講者幾個問題',         s: 'SHOWN',  c: 'lime' },
            { t: '14:02:11', n: '阿傑',     m: '+1 求簡報',                s: 'SHOWN',  c: 'lime' },
            { t: '14:02:08', n: 'fp_a3f2',  m: '<已遮罩 · profanity>',     s: 'MASK',   c: 'amber' },
            { t: '14:02:04', n: 'Yvonne',   m: '今天的場地有點冷 🥶',      s: 'SHOWN',  c: 'lime' },
            { t: '14:01:58', n: '匿名',     m: '請問 Q&A 環節在哪裡',       s: 'SHOWN',  c: 'lime' },
            { t: '14:01:52', n: 'fp_88c1',  m: '<已隱藏 · admin>',          s: 'HIDE',   c: 'crimson' },
            { t: '14:01:47', n: 'Mei',      m: '現場聲音可以調大嗎',         s: 'SHOWN',  c: 'lime' },
            { t: '14:01:39', n: '阿傑',     m: '推推 👍',                    s: 'SHOWN',  c: 'lime' },
            { t: '14:01:30', n: '訪客0428', m: '可以分享簡報連結嗎?',         s: 'SHOWN',  c: 'lime' },
          ].map((r, i, arr) => (
            <div key={i} style={{
              padding: '9px 12px', borderBottom: i < arr.length - 1 ? `1px solid ${_r480.lineSoft}` : 'none',
              display: 'flex', flexDirection: 'column', gap: 3,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 11.5, color: _r480.text, fontWeight: 500 }}>{r.n}</span>
                <_Tag480 tone={r.c} mono sm>{r.s}</_Tag480>
                <span style={{ marginLeft: 'auto', fontFamily: _r480.fontMono, fontSize: 9, color: _r480.textMute }}>{r.t}</span>
              </div>
              <div style={{
                fontSize: 12, color: r.s === 'SHOWN' ? _r480.text : _r480.textDim,
                fontStyle: r.s !== 'SHOWN' ? 'italic' : 'normal', lineHeight: 1.4,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>{r.m}</div>
            </div>
          ))}
        </div>

        {/* swipe hint at bottom */}
        <div style={{
          fontFamily: _r480.fontMono, fontSize: 9, color: _r480.textMute, letterSpacing: 0.6,
          textAlign: 'center', padding: '4px 0',
        }}>
          ◂ 左滑遮罩 · 右滑通過 ▸
        </div>
      </div>
    </_F480>
  );
}

// ─── 3) Polls (full-switch — editor full screen with back arrow) ─────────
function RwdPolls480() {
  return (
    <_F480 route="#/polls/poll_47fa" title="下一個 demo 看哪一個?" en="POLL · DETAIL · LIVE" back>
      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 10, height: '100%', overflow: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <_Tag480 tone="lime" mono>● LIVE</_Tag480>
          <span style={{ fontFamily: _r480.fontMono, fontSize: 9, color: _r480.textDim, letterSpacing: 1, marginLeft: 'auto' }}>poll_47fa · 02:14 / 05:00</span>
        </div>

        {/* editable title */}
        <div style={{ background: _r480.panel, border: `1px solid ${_r480.line}`, borderRadius: 4, padding: 12 }}>
          <div style={{ fontFamily: _r480.fontMono, fontSize: 8.5, color: _r480.textMute, letterSpacing: 1.1, marginBottom: 6 }}>標題</div>
          <div style={{ fontSize: 15, fontWeight: 600, color: _r480.text, lineHeight: 1.3 }}>下一個 demo 看哪一個?</div>
        </div>

        {/* options live results */}
        <div style={{ background: _r480.panel, border: `1px solid ${_r480.line}`, borderRadius: 4, padding: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontFamily: _r480.fontMono, fontSize: 9, color: _r480.textDim, letterSpacing: 1.1 }}>選項 · 4</span>
            <span style={{ marginLeft: 'auto', fontFamily: _r480.fontMono, fontSize: 9, color: _r480.cyan, letterSpacing: 0.5 }}>即時 · 76 票</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { l: '即時翻譯',     v: 32, p: 42, lead: true },
              { l: '多人協作畫板', v: 21, p: 28 },
              { l: 'AI 投票分析',  v: 18, p: 24 },
              { l: 'Webhook 整合', v: 5,  p: 6 },
            ].map((o, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: _r480.text, fontWeight: o.lead ? 600 : 400 }}>{o.l}</span>
                  <span style={{ fontFamily: _r480.fontMono, fontSize: 11, color: _r480.text }}>
                    {o.v} <span style={{ color: _r480.textMute }}>· {o.p}%</span>
                  </span>
                </div>
                <div style={{ height: 5, background: _r480.raised, borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: `${o.p}%`, height: '100%', background: o.lead ? _r480.cyan : _r480.cyanLine, borderRadius: 3 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* meta strip */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            { l: '剩餘時間',  v: '02:46',  tone: 'cyan' },
            { l: '參與率',    v: '41 %',   tone: 'lime' },
          ].map((m, i) => (
            <div key={i} style={{ background: _r480.panel, border: `1px solid ${_r480.line}`, borderRadius: 4, padding: 10 }}>
              <div style={{ fontFamily: _r480.fontMono, fontSize: 8.5, color: _r480.textMute, letterSpacing: 1.1 }}>{m.l.toUpperCase()}</div>
              <div style={{ fontFamily: '"Zen Kaku Gothic New", sans-serif', fontSize: 20, fontWeight: 700, marginTop: 3, color: m.tone === 'cyan' ? _r480.cyan : _r480.lime, letterSpacing: -0.3, lineHeight: 1 }}>{m.v}</div>
            </div>
          ))}
        </div>

        {/* sticky action bar at bottom */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{
            padding: '12px 14px', borderRadius: 3, textAlign: 'center',
            background: _r480.amber, color: hudTokens.bg0,
            fontFamily: _r480.fontMono, fontSize: 12, letterSpacing: 1, fontWeight: 700,
          }}>結束投票 · 顯示結果</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            <span style={{
              padding: '9px 10px', borderRadius: 3, textAlign: 'center',
              background: _r480.raised, color: _r480.text, border: `1px solid ${_r480.line}`,
              fontFamily: _r480.fontMono, fontSize: 10, letterSpacing: 0.5,
            }}>取消推送</span>
            <span style={{
              padding: '9px 10px', borderRadius: 3, textAlign: 'center',
              background: _r480.raised, color: _r480.text, border: `1px solid ${_r480.line}`,
              fontFamily: _r480.fontMono, fontSize: 10, letterSpacing: 0.5,
            }}>↗ 深度分析</span>
          </div>
        </div>
      </div>
    </_F480>
  );
}

// ─── 4) Broadcast ─────────────────────────────────────────────────────────
function RwdBroadcast480() {
  return (
    <_F480 route="#/broadcast" title="廣播控制" en="BROADCAST" badge="● LIVE">
      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 12, height: '100%', overflow: 'auto' }}>
        {/* state hero compact */}
        <div style={{
          padding: 14, background: 'rgba(134, 239, 172,0.10)', border: `1px solid rgba(134, 239, 172,0.45)`, borderRadius: 4,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(134, 239, 172,0.18)', border: `2px solid ${_r480.lime}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 0 12px rgba(134, 239, 172,0.5)`, flexShrink: 0,
          }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: _r480.lime }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: _r480.fontMono, fontSize: 9, color: _r480.lime, letterSpacing: 1.3 }}>CURRENT</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: _r480.text, marginTop: 2, letterSpacing: -0.3 }}>LIVE · 顯示中</div>
            <div style={{ fontFamily: _r480.fontMono, fontSize: 9, color: _r480.textDim, marginTop: 2, letterSpacing: 0.3 }}>queue: 0 · 02:42:18</div>
          </div>
        </div>

        {/* primary CTA */}
        <span style={{
          padding: '14px 14px', borderRadius: 4, textAlign: 'center',
          background: _r480.amber, color: hudTokens.bg0,
          fontFamily: _r480.fontMono, fontSize: 12, letterSpacing: 1, fontWeight: 700,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          <span>F2</span><span>·</span><span>進入 STANDBY</span>
        </span>

        {/* secondary stack */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
          {[
            { k: 'F3', l: '結束場次',     tone: 'crimson' },
            { k: '⌘G', l: '審核模式',     tone: 'cyan' },
          ].map((b, i) => (
            <span key={i} style={{
              padding: '11px 10px', borderRadius: 3, textAlign: 'center',
              background: _r480.panel, border: `1px solid ${b.tone === 'crimson' ? 'rgba(248, 113, 113,0.45)' : _r480.cyanLine}`,
              color: b.tone === 'crimson' ? _r480.crimson : _r480.cyan,
              display: 'flex', flexDirection: 'column', gap: 3,
              fontFamily: _r480.fontMono, fontSize: 11, letterSpacing: 0.5,
            }}>
              <span style={{ fontSize: 8.5, color: _r480.textMute, letterSpacing: 1.2 }}>{b.k}</span>
              <span style={{ fontWeight: 600 }}>{b.l}</span>
            </span>
          ))}
        </div>

        {/* metrics 2×2 */}
        <div style={{ background: _r480.panel, border: `1px solid ${_r480.line}`, borderRadius: 4, padding: 12 }}>
          <div style={{ fontFamily: _r480.fontMono, fontSize: 9, color: _r480.textDim, letterSpacing: 1.1, marginBottom: 10 }}>METRICS</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { l: 'queue',         v: '0',  s: '' },
              { l: 'overlay',       v: '3',  s: 'main · proj · backup' },
              { l: 'throughput',    v: '24', s: '/ min' },
              { l: 'WS lag p95',    v: '38', s: 'ms' },
            ].map((m, i) => (
              <div key={i}>
                <div style={{ fontFamily: _r480.fontMono, fontSize: 8.5, color: _r480.textMute, letterSpacing: 1 }}>{m.l.toUpperCase()}</div>
                <div style={{ fontFamily: '"Zen Kaku Gothic New", sans-serif', fontSize: 18, fontWeight: 700, color: _r480.text, marginTop: 3, lineHeight: 1, letterSpacing: -0.3 }}>{m.v}</div>
                {m.s && <div style={{ fontFamily: _r480.fontMono, fontSize: 8.5, color: _r480.textDim, marginTop: 2, letterSpacing: 0.3 }}>{m.s}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* hint */}
        <div style={{
          padding: 10, background: _r480.cyanSoft, border: `1px solid ${_r480.cyanLine}`, borderRadius: 3,
          fontSize: 10, color: _r480.text, lineHeight: 1.55, letterSpacing: 0.2,
        }}>
          <span style={{ fontFamily: _r480.fontMono, color: _r480.cyan, letterSpacing: 1.1 }}>STANDBY 提醒</span> · 暫停顯示時觀眾仍可送訊息進 queue。
        </div>
      </div>
    </_F480>
  );
}

// ─── 5) Notifications (full-switch detail screen) ────────────────────────
function RwdNotifications480() {
  return (
    <_F480 route="#/notifications/sec_8e21" title="速率限制觸發" en="NOTIFICATION · DETAIL" back>
      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 12, height: '100%', overflow: 'auto' }}>
        {/* hero */}
        <div style={{
          padding: 14, borderRadius: 4,
          background: 'rgba(248, 113, 113,0.10)', border: `1px solid rgba(248, 113, 113,0.45)`,
          display: 'flex', gap: 12, alignItems: 'flex-start',
        }}>
          <span style={{
            width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
            background: 'rgba(248, 113, 113,0.18)', border: `1.5px solid ${_r480.crimson}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: _r480.fontMono, fontSize: 14, color: _r480.crimson,
          }}>!</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <_Tag480 tone="crimson" mono sm>SECURITY</_Tag480>
            <div style={{ fontSize: 14, color: _r480.text, fontWeight: 600, marginTop: 6, lineHeight: 1.35 }}>
              3 次來自 fp_a3f2 的密集發送觸發速率限制
            </div>
            <div style={{ fontFamily: _r480.fontMono, fontSize: 9, color: _r480.textDim, marginTop: 6, letterSpacing: 0.4 }}>14:01:38 · 40 秒前</div>
          </div>
        </div>

        {/* details */}
        <div style={{ background: _r480.panel, border: `1px solid ${_r480.line}`, borderRadius: 4, padding: 12 }}>
          <div style={{ fontFamily: _r480.fontMono, fontSize: 9, color: _r480.textDim, letterSpacing: 1.1, marginBottom: 8 }}>事件摘要</div>
          <div style={{ fontSize: 11.5, color: _r480.text, lineHeight: 1.6 }}>
            IP <code style={{ fontFamily: _r480.fontMono, color: _r480.amber }}>192.168.5.12</code> 在 <b>8 秒</b> 內送出 <b>23 則訊息</b>,系統已自動冷卻 5 分鐘。指紋連續匹配 3 場次 — 建議檢視來源並考慮永久封禁。
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginTop: 12 }}>
            {[
              { l: 'IP',      v: '192.168.5.12' },
              { l: '指紋',    v: 'fp_a3f2 · 3場' },
              { l: '頻率',    v: '23 / 8s' },
              { l: '冷卻',    v: '5 min' },
            ].map((m, i) => (
              <div key={i} style={{ background: _r480.raised, borderRadius: 3, padding: '6px 8px' }}>
                <div style={{ fontFamily: _r480.fontMono, fontSize: 8.5, color: _r480.textMute, letterSpacing: 1 }}>{m.l.toUpperCase()}</div>
                <div style={{ fontFamily: _r480.fontMono, fontSize: 11, color: _r480.text, marginTop: 2, letterSpacing: 0.3 }}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* actions */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{
            padding: '12px 14px', borderRadius: 3, textAlign: 'center',
            background: _r480.crimson, color: hudTokens.bg0,
            fontFamily: _r480.fontMono, fontSize: 12, letterSpacing: 1, fontWeight: 700,
          }}>永久封禁 IP</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            <span style={{
              padding: '9px 10px', borderRadius: 3, textAlign: 'center',
              background: _r480.raised, color: _r480.text, border: `1px solid ${_r480.line}`,
              fontFamily: _r480.fontMono, fontSize: 10, letterSpacing: 0.5,
            }}>檢視來源</span>
            <span style={{
              padding: '9px 10px', borderRadius: 3, textAlign: 'center',
              background: _r480.raised, color: _r480.textDim, border: `1px solid ${_r480.line}`,
              fontFamily: _r480.fontMono, fontSize: 10, letterSpacing: 0.5,
            }}>標記已讀</span>
          </div>
        </div>
      </div>
    </_F480>
  );
}

// ─── 6) Sessions ─────────────────────────────────────────────────────────
function RwdSessions480() {
  return (
    <_F480 route="#/sessions" title="場次紀錄" en="SESSIONS · 142">
      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 10, height: '100%' }}>
        {/* sort chips horizontal */}
        <div style={{ display: 'flex', gap: 5, overflowX: 'auto', paddingBottom: 2, flexShrink: 0 }}>
          {[
            { l: '全部 142', sel: true },
            { l: 'OPEN 1' },
            { l: 'CLOSED 141' },
            { l: '7 天' },
            { l: '30 天' },
          ].map((c, i) => (
            <span key={i} style={{
              padding: '5px 10px', borderRadius: 3, flexShrink: 0,
              background: c.sel ? _r480.cyanSoft : 'transparent',
              border: `1px solid ${c.sel ? _r480.cyanLine : _r480.line}`,
              color: c.sel ? _r480.cyan : _r480.textDim,
              fontFamily: _r480.fontMono, fontSize: 10, letterSpacing: 0.5,
            }}>{c.l}</span>
          ))}
        </div>

        {/* card stack */}
        <div style={{ flex: 1, minHeight: 0, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { id: 'sess_a3f2', t: 'keynote · Q1 全員大會', s: 'OPEN',   d: '04-28 14:00 →',    m: '1,287 訊息',  ms: '184 並發',  tone: 'lime' },
            { id: 'sess_8e21', t: 'demo day · Spring',      s: 'CLOSED', d: '04-21 13:00 — 17:42', m: '2,418 訊息',  ms: 'peak 312',  tone: 'mute' },
            { id: 'sess_4d7c', t: 'workshop · Webhooks',    s: 'CLOSED', d: '04-15 10:00 — 12:30', m: '482 訊息',    ms: 'peak 89',   tone: 'mute' },
            { id: 'sess_2b81', t: 'all-hands · monthly',    s: 'CLOSED', d: '04-08 09:00 — 11:45', m: '1,824 訊息',  ms: 'peak 248',  tone: 'mute' },
            { id: 'sess_15a3', t: 'product launch · alpha', s: 'CLOSED', d: '04-01 19:00 — 21:30', m: '3,214 訊息',  ms: 'peak 482',  tone: 'mute' },
            { id: 'sess_0c9f', t: 'taipei meetup',          s: 'CLOSED', d: '03-28 19:08 — 22:14', m: '784 訊息',    ms: 'peak 142',  tone: 'mute' },
          ].map((s, i) => (
            <div key={i} style={{
              background: _r480.panel, border: `1px solid ${s.s === 'OPEN' ? _r480.cyanLine : _r480.line}`, borderRadius: 4,
              padding: 10, display: 'flex', flexDirection: 'column', gap: 4,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <_Tag480 tone={s.tone} mono sm>{s.s}</_Tag480>
                <span style={{ fontSize: 12, color: _r480.text, fontWeight: 600, flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.t}</span>
              </div>
              <div style={{ fontFamily: _r480.fontMono, fontSize: 9, color: _r480.textDim, letterSpacing: 0.3 }}>{s.d}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 10.5, color: _r480.text }}>{s.m}</span>
                <span style={{ marginLeft: 'auto', fontFamily: _r480.fontMono, fontSize: 9, color: s.s === 'OPEN' ? _r480.lime : _r480.textDim, letterSpacing: 0.4 }}>{s.ms}</span>
                <span style={{ fontFamily: _r480.fontMono, fontSize: 11, color: _r480.cyan }}>›</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </_F480>
  );
}

Object.assign(window, {
  RwdDashboard480, RwdMessages480, RwdPolls480,
  RwdBroadcast480, RwdNotifications480, RwdSessions480,
});
