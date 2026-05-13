// IA Spec · §H — answers the 5 IA rules from design-handoff-needs-2026-04-28.md.
// Three artboards meant to be read together:
//   IASpecRouteMatrix    — rule #1, #4, #5 (route visibility × mode × who)
//   IASpecStateDiagram   — rule #2, #3 (Session lifecycle, Broadcast state)
//   IASpecLiveOperatorPath — rule #5 illustrative (Live mode happy paths)
//
// All three share the same column tokens so they read as one spec.

const _ia = {
  bg:        '#020617',
  panel:     '#0f172a',
  raised:    '#1e293b',
  line:      'rgba(148, 163, 184, 0.18)',
  lineSoft:  'rgba(148, 163, 184, 0.18)',
  text:      '#f1f5f9',
  textDim:   '#94a3b8',
  textMute:  '#64748b',
  cyan:      '#38bdf8',
  cyanSoft:  'rgba(56,189,248,0.12)',
  cyanLine:  'rgba(56,189,248,0.45)',
  lime:      '#86efac',
  amber:     '#fbbf24',
  crimson:   '#f87171',
  fontSans:  '"Noto Sans TC", "Zen Kaku Gothic New", -apple-system, system-ui, sans-serif',
  fontMono:  '"IBM Plex Mono", ui-monospace, monospace',
};

function _IAFrame({ width = 1440, height = 920, eyebrow, title, children }) {
  return (
    <div style={{
      width, height, background: _ia.bg, color: _ia.text,
      fontFamily: _ia.fontSans, padding: '28px 32px 32px',
      display: 'flex', flexDirection: 'column', gap: 20,
      boxSizing: 'border-box', position: 'relative', overflow: 'hidden',
    }}>
      {/* HUD corners */}
      {[
        { top: 16, left: 16, r: '0deg' },
        { top: 16, right: 16, r: '90deg' },
        { bottom: 16, right: 16, r: '180deg' },
        { bottom: 16, left: 16, r: '270deg' },
      ].map((c, i) => (
        <span key={i} style={{
          position: 'absolute', ...c, width: 14, height: 14,
          borderTop: `1px solid ${_ia.cyanLine}`, borderLeft: `1px solid ${_ia.cyanLine}`,
          transform: `rotate(${c.r})`, transformOrigin: 'top left',
        }} />
      ))}
      <div>
        <div style={{ fontFamily: _ia.fontMono, fontSize: 10, letterSpacing: 2.5, color: _ia.cyan }}>{eyebrow}</div>
        <div style={{ fontSize: 24, fontWeight: 700, marginTop: 6, letterSpacing: -0.2 }}>{title}</div>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>{children}</div>
    </div>
  );
}

function _Tag({ tone = 'neutral', children, mono }) {
  const c = {
    neutral: { bg: 'transparent',     fg: _ia.textDim, br: _ia.line },
    cyan:    { bg: _ia.cyanSoft,      fg: _ia.cyan,    br: _ia.cyanLine },
    lime:    { bg: 'rgba(134, 239, 172,0.12)', fg: _ia.lime,   br: 'rgba(134, 239, 172,0.45)' },
    amber:   { bg: 'rgba(251,191,36,0.12)', fg: _ia.amber,  br: 'rgba(251,191,36,0.45)' },
    crimson: { bg: 'rgba(248, 113, 113,0.12)',  fg: _ia.crimson, br: 'rgba(248, 113, 113,0.45)' },
    mute:    { bg: 'rgba(107,115,133,0.10)', fg: _ia.textMute, br: 'rgba(107,115,133,0.4)' },
  }[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '2px 7px', borderRadius: 2, background: c.bg, color: c.fg,
      border: `1px solid ${c.br}`,
      fontFamily: mono ? _ia.fontMono : _ia.fontSans,
      fontSize: 10, letterSpacing: mono ? 0.8 : 0.2, fontWeight: 500,
    }}>{children}</span>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Artboard 1 · Route Visibility Matrix (rules #1 / #4 / #5)
// 25 routes × 3 modes (Live / Backstage / Admin) × ownership column
// ─────────────────────────────────────────────────────────────────────────
function IASpecRouteMatrix() {
  // O = visible default, ○ = available via menu, — = hidden in this mode, × = blocked
  const M = (live, backstage, admin) => ({ live, backstage, admin });
  const rows = [
    { sec: 'Live · 即時操作',           items: [
      { r: '#/dashboard',       n: '控制台 Dashboard',    own: 'live',      m: M('O', 'O', 'O') },
      { r: '#/messages',        n: '訊息審核',            own: 'live',      m: M('O', 'O', 'O') },
      { r: '#/messages/:id',    n: '訊息細節 Drawer',     own: 'live',      m: M('O', 'O', 'O'), drawer: true },
      { r: '#/polls',           n: '投票',                own: 'live',      m: M('O', 'O', 'O') },
      { r: '#/polls/:id',       n: '投票深度分析',        own: 'live',      m: M('O', 'O', 'O') },
      { r: '#/broadcast',       n: '廣播控制',            own: 'live',      m: M('O', 'O', 'O') },
      { r: '#/notifications',   n: '通知中心',            own: 'live',      m: M('O', 'O', 'O') },
      { r: '#/audience',        n: '觀眾名單',            own: 'live',      m: M('O', 'O', 'O') },
      { r: '#/widgets',         n: 'Overlay Widgets',     own: 'live',      m: M('O', 'O', 'O') },
    ]},
    { sec: 'Backstage · 設定 / 內容',    items: [
      { r: '#/viewer-config',   n: '觀眾頁設定 (PAGE/FIELDS)', own: 'backstage', m: M('○', 'O', 'O'), tabbed: true },
      { r: '#/themes',          n: '風格主題包',          own: 'backstage', m: M('○', 'O', 'O') },
      { r: '#/effects',         n: '效果庫 .dme',         own: 'backstage', m: M('○', 'O', 'O') },
      { r: '#/fonts',           n: '字型管理',            own: 'backstage', m: M('○', 'O', 'O') },
      { r: '#/history',         n: '歷史 (EXPORT/LIST/REPLAY)', own: 'backstage', m: M('○', 'O', 'O'), tabbed: true },
      { r: '#/sessions',        n: '場次紀錄',            own: 'backstage', m: M('○', 'O', 'O') },
      { r: '#/sessions/:id',    n: '場次細節 (lifecycle)', own: 'backstage', m: M('○', 'O', 'O') },
      { r: '#/search',          n: '跨場次搜尋',          own: 'backstage', m: M('○', 'O', 'O') },
      { r: '#/audit',           n: '操作日誌',            own: 'backstage', m: M('○', 'O', 'O') },
    ]},
    { sec: 'Admin · 系統 / 高風險',      items: [
      { r: '#/integrations',    n: 'Extensions / 整合',   own: 'admin',     m: M('—', '○', 'O') },
      { r: '#/system',          n: '系統 & Webhooks',      own: 'admin',     m: M('—', '○', 'O'), risky: true },
      { r: '#/api-tokens',      n: 'API Tokens',          own: 'admin',     m: M('—', '○', 'O'), risky: true },
      { r: '#/backup',          n: 'Backup & Restore',    own: 'admin',     m: M('—', '○', 'O'), risky: true },
      { r: '#/plugins',         n: '伺服器插件',          own: 'admin',     m: M('—', '○', 'O'), risky: true },
      { r: '#/about',           n: '關於 / Changelog',    own: 'admin',     m: M('—', '○', 'O') },
      { r: '#/setup',           n: 'Setup Wizard',        own: 'admin',     m: M('×', '×', 'O'), gated: '首次啟動 / 重設' },
    ]},
  ];

  const cellFor = (v) => {
    if (v === 'O')  return { ch: '●', tone: 'cyan',    label: '預設可見' };
    if (v === '○')  return { ch: '○', tone: 'mute',    label: '收於選單' };
    if (v === '—')  return { ch: '—', tone: 'neutral', label: '此模式隱藏' };
    if (v === '×')  return { ch: '✕', tone: 'crimson', label: '禁止 (gated)' };
  };

  return (
    <_IAFrame eyebrow="IA · §H RULE #1 · #4 · #5" title="路由可見性矩陣 · Route × Mode × Ownership">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16, height: '100%' }}>
        {/* Matrix */}
        <div style={{ background: _ia.panel, border: `1px solid ${_ia.line}`, borderRadius: 4, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          {/* header */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 90px 90px 90px 110px',
            padding: '10px 14px', borderBottom: `1px solid ${_ia.line}`,
            fontFamily: _ia.fontMono, fontSize: 10, color: _ia.textDim, letterSpacing: 1.5,
          }}>
            <span>ROUTE · 名稱</span>
            <span style={{ textAlign: 'center', color: _ia.cyan }}>LIVE</span>
            <span style={{ textAlign: 'center' }}>BACKSTAGE</span>
            <span style={{ textAlign: 'center' }}>ADMIN</span>
            <span style={{ textAlign: 'right' }}>OWNERSHIP</span>
          </div>
          <div style={{ flex: 1, overflow: 'auto' }}>
            {rows.map((sec, si) => (
              <div key={si}>
                <div style={{
                  padding: '8px 14px', background: _ia.raised,
                  fontFamily: _ia.fontMono, fontSize: 10, letterSpacing: 1.5,
                  color: si === 0 ? _ia.cyan : si === 1 ? _ia.text : _ia.amber,
                  borderTop: si > 0 ? `1px solid ${_ia.line}` : 'none',
                  borderBottom: `1px solid ${_ia.line}`,
                }}>{sec.sec}</div>
                {sec.items.map((it, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '1fr 90px 90px 90px 110px',
                    padding: '9px 14px', borderBottom: `1px solid ${_ia.lineSoft}`,
                    alignItems: 'center', fontSize: 12,
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                      <span style={{ fontFamily: _ia.fontMono, fontSize: 10.5, color: _ia.textDim, letterSpacing: 0.2, width: 168, flexShrink: 0 }}>{it.r}</span>
                      <span style={{ color: _ia.text }}>{it.n}</span>
                      {it.tabbed && <_Tag tone="cyan" mono>TABBED</_Tag>}
                      {it.drawer && <_Tag tone="mute" mono>DRAWER</_Tag>}
                      {it.risky && <_Tag tone="amber" mono>HIGH RISK</_Tag>}
                      {it.gated && <_Tag tone="crimson" mono>{it.gated}</_Tag>}
                    </span>
                    {['live', 'backstage', 'admin'].map((mk) => {
                      const c = cellFor(it.m[mk]);
                      return (
                        <span key={mk} style={{
                          textAlign: 'center', fontFamily: _ia.fontMono, fontSize: 13,
                          color: c.tone === 'cyan' ? _ia.cyan : c.tone === 'crimson' ? _ia.crimson : c.tone === 'mute' ? _ia.textMute : _ia.textDim,
                        }}>{c.ch}</span>
                      );
                    })}
                    <span style={{ textAlign: 'right' }}>
                      <_Tag tone={it.own === 'live' ? 'cyan' : it.own === 'admin' ? 'amber' : 'neutral'} mono>
                        {it.own.toUpperCase()}
                      </_Tag>
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend / rules */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, overflow: 'auto' }}>
          <div style={{ background: _ia.panel, border: `1px solid ${_ia.line}`, borderRadius: 4, padding: 14 }}>
            <div style={{ fontFamily: _ia.fontMono, fontSize: 10, letterSpacing: 1.5, color: _ia.textDim, marginBottom: 10 }}>圖例 · LEGEND</div>
            {[
              { ch: '●', tone: _ia.cyan,    l: '預設可見 · sidebar 直達' },
              { ch: '○', tone: _ia.textMute, l: '收於選單 · 需展開「⚙ 後台 & 設定」' },
              { ch: '—', tone: _ia.textDim, l: '此模式隱藏 · 不在 sidebar / 不在 menu' },
              { ch: '✕', tone: _ia.crimson, l: '禁止 · 需 gated entry (首次啟動 / 重設)' },
            ].map((g, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '5px 0', fontSize: 11, color: _ia.text }}>
                <span style={{ width: 24, textAlign: 'center', fontFamily: _ia.fontMono, fontSize: 14, color: g.tone }}>{g.ch}</span>
                <span>{g.l}</span>
              </div>
            ))}
          </div>

          <div style={{ background: _ia.panel, border: `1px solid ${_ia.cyanLine}`, borderRadius: 4, padding: 14 }}>
            <div style={{ fontFamily: _ia.fontMono, fontSize: 10, letterSpacing: 1.5, color: _ia.cyan, marginBottom: 8 }}>規則 · §H #1 模式減法</div>
            <div style={{ fontSize: 11.5, color: _ia.text, lineHeight: 1.7 }}>
              25 條路由不同層平鋪。<b style={{ color: _ia.cyan }}>Live</b> 預設只露 9 條(主持/操作員每天用),其餘收在「<b>⚙ 後台 & 設定</b>」menu。<b style={{ color: _ia.amber }}>Admin</b> 模式才看得到高風險頁(plugins / system / backup / api-tokens)。
            </div>
          </div>

          <div style={{ background: _ia.panel, border: `1px solid ${_ia.line}`, borderRadius: 4, padding: 14 }}>
            <div style={{ fontFamily: _ia.fontMono, fontSize: 10, letterSpacing: 1.5, color: _ia.textDim, marginBottom: 8 }}>規則 · §H #4 責任收斂</div>
            <div style={{ fontSize: 11.5, color: _ia.text, lineHeight: 1.7 }}>
              事件回顧頁原本 6 條重疊嚴重,收斂為:<br/>
              <span style={{ fontFamily: _ia.fontMono, fontSize: 10.5, color: _ia.textDim, letterSpacing: 0.3 }}>
                · <b style={{ color: _ia.text }}>messages</b> = 即時(本場 / 5 分鐘)<br/>
                · <b style={{ color: _ia.text }}>history</b> = 跨場次列表 + 重播(L/E/R 三 tab)<br/>
                · <b style={{ color: _ia.text }}>sessions</b> = 場次 lifecycle(start/end metadata)<br/>
                · <b style={{ color: _ia.text }}>search</b> = 全文檢索 entry point<br/>
                · <b style={{ color: _ia.text }}>notifications</b> = 系統警示(non-msg)<br/>
                · <b style={{ color: _ia.text }}>audit</b> = 寫入操作審計
              </span>
            </div>
          </div>

          <div style={{ background: _ia.panel, border: `1px solid ${_ia.line}`, borderRadius: 4, padding: 14 }}>
            <div style={{ fontFamily: _ia.fontMono, fontSize: 10, letterSpacing: 1.5, color: _ia.textDim, marginBottom: 8 }}>規則 · §H #5 風險隔離</div>
            <div style={{ fontSize: 11.5, color: _ia.text, lineHeight: 1.7 }}>
              <_Tag tone="amber" mono>HIGH RISK</_Tag> 標記頁在 Live 完全不可達。要操作這些頁,sidebar 切到 <b style={{ color: _ia.amber }}>Admin</b>,UI 出現確認 toast「進入後台模式 · 直播仍持續」。
            </div>
          </div>
        </div>
      </div>
    </_IAFrame>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Artboard 2 · State Diagrams (rules #2 Session lifecycle, #3 Broadcast)
// ─────────────────────────────────────────────────────────────────────────
function IASpecStateDiagram() {
  return (
    <_IAFrame eyebrow="IA · §H RULE #2 · #3" title="狀態語義 · Session Lifecycle / Broadcast State">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, height: '100%' }}>
        {/* SESSION lifecycle */}
        <div style={{ background: _ia.panel, border: `1px solid ${_ia.line}`, borderRadius: 4, padding: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <div style={{ fontFamily: _ia.fontMono, fontSize: 10, letterSpacing: 1.5, color: _ia.cyan }}>RULE #2 · SESSION LIFECYCLE</div>
            <div style={{ fontSize: 16, fontWeight: 600, marginTop: 4, color: _ia.text }}>場次唯一語義</div>
            <div style={{ fontSize: 11, color: _ia.textDim, marginTop: 4, lineHeight: 1.6 }}>
              <span style={{ color: _ia.crimson }}>不再用</span>「30 分鐘空窗自動切段」描述。Session = open/close lifecycle event,<code style={{ color: _ia.text, fontFamily: _ia.fontMono }}>/admin/session/*</code> 為 source of truth。
            </div>
          </div>

          {/* state nodes */}
          <div style={{ flex: 1, position: 'relative', padding: '8px 0' }}>
            {/* horizontal flow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, justifyContent: 'space-between', position: 'relative' }}>
              {[
                { l: 'IDLE',     en: 'no session',       c: _ia.textMute, dot: _ia.line },
                { l: 'OPEN',     en: 'collecting',       c: _ia.lime,     dot: _ia.lime, active: true },
                { l: 'PAUSED',   en: 'standby',          c: _ia.amber,    dot: _ia.amber },
                { l: 'CLOSED',   en: 'archived',         c: _ia.textDim,  dot: _ia.textDim },
              ].map((s, i, arr) => (
                <React.Fragment key={s.l}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: '50%',
                      background: s.active ? `${s.dot}22` : _ia.raised,
                      border: `2px solid ${s.dot}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: s.active ? `0 0 18px ${s.dot}55` : 'none',
                    }}>
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: s.dot }} />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: s.c }}>{s.l}</div>
                      <div style={{ fontFamily: _ia.fontMono, fontSize: 9.5, color: _ia.textDim, marginTop: 2, letterSpacing: 0.4 }}>{s.en}</div>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ flex: 0, width: 24, height: 1, background: _ia.line, position: 'relative', alignSelf: 'center', marginTop: -22 }}>
                      <span style={{ position: 'absolute', right: -4, top: -4, width: 0, height: 0, borderLeft: `6px solid ${_ia.line}`, borderTop: '4px solid transparent', borderBottom: '4px solid transparent' }} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* transitions table */}
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { f: 'IDLE',   t: 'OPEN',   ev: 'POST /admin/session/open',     by: 'operator · F1' },
                { f: 'OPEN',   t: 'PAUSED', ev: 'POST /admin/broadcast/standby', by: 'operator · F2' },
                { f: 'PAUSED', t: 'OPEN',   ev: 'POST /admin/broadcast/resume',  by: 'operator · F2' },
                { f: 'OPEN',   t: 'CLOSED', ev: 'POST /admin/session/close',    by: 'operator · F3' },
                { f: 'PAUSED', t: 'CLOSED', ev: 'POST /admin/session/close',    by: 'operator · F3' },
              ].map((t, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '70px 24px 70px 1fr',
                  gap: 8, padding: '6px 8px', background: _ia.raised, borderRadius: 2,
                  fontFamily: _ia.fontMono, fontSize: 10, alignItems: 'center', letterSpacing: 0.3,
                }}>
                  <span style={{ color: _ia.textDim }}>{t.f}</span>
                  <span style={{ textAlign: 'center', color: _ia.cyan }}>→</span>
                  <span style={{ color: _ia.text }}>{t.t}</span>
                  <span style={{ color: _ia.textMute }}>{t.ev} <span style={{ color: _ia.amber, marginLeft: 6 }}>· {t.by}</span></span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            padding: 10, background: `${_ia.crimson}14`, border: `1px solid ${_ia.crimson}55`, borderRadius: 3,
            fontFamily: _ia.fontMono, fontSize: 10, color: _ia.text, lineHeight: 1.6, letterSpacing: 0.3,
          }}>
            <span style={{ color: _ia.crimson, letterSpacing: 1.2 }}>禁止文案</span> · 不得寫「30 分鐘自動切段」「閒置自動關閉」— 兩者皆非 lifecycle 事件,只是 sessions 列表的 derive view。
          </div>
        </div>

        {/* BROADCAST state */}
        <div style={{ background: _ia.panel, border: `1px solid ${_ia.line}`, borderRadius: 4, padding: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <div style={{ fontFamily: _ia.fontMono, fontSize: 10, letterSpacing: 1.5, color: _ia.amber }}>RULE #3 · BROADCAST STATE</div>
            <div style={{ fontSize: 16, fontWeight: 600, marginTop: 4, color: _ia.text }}>廣播狀態語義修正</div>
            <div style={{ fontSize: 11, color: _ia.textDim, marginTop: 4, lineHeight: 1.6 }}>
              <code style={{ color: _ia.amber, fontFamily: _ia.fontMono }}>standby</code> = 暫停顯示,<b style={{ color: _ia.lime }}>仍持續收訊息</b>(進入 queue)。不是「停止」也不是「結束」。
            </div>
          </div>

          {/* state diagram */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              {
                k: 'LIVE',     c: _ia.lime,
                in:  '收訊息: ✓',
                show: '顯示彈幕: ✓',
                out: 'queue: 0',
                doc: '預設狀態 · 觀眾發送即時顯示',
              },
              {
                k: 'STANDBY',  c: _ia.amber, active: true,
                in:  '收訊息: ✓ (queue)',
                show: '顯示彈幕: ✗',
                out: 'queue: +N',
                doc: '主持講話中 / 段落切換 · 結束後 queue 統一回放(可選擇 drain/discard)',
              },
              {
                k: 'GATED',    c: _ia.cyan,
                in:  '收訊息: ✓ (審核)',
                show: '顯示彈幕: ✓ (僅通過)',
                out: 'queue: pending',
                doc: '審核模式 · 訊息進 messages 列表,operator 標 SHOWN 才上廣播',
              },
            ].map((s) => (
              <div key={s.k} style={{
                padding: 12, background: s.active ? `${s.c}10` : _ia.raised,
                border: `1px solid ${s.active ? s.c : _ia.line}`, borderRadius: 3,
                display: 'grid', gridTemplateColumns: '90px 1fr', gap: 12, alignItems: 'center',
                boxShadow: s.active ? `0 0 14px ${s.c}33` : 'none',
              }}>
                <div style={{
                  textAlign: 'center', padding: '8px 0', borderRadius: 3,
                  background: `${s.c}1f`, border: `1px solid ${s.c}55`,
                  fontFamily: _ia.fontMono, fontSize: 12, fontWeight: 700, color: s.c, letterSpacing: 1.5,
                }}>{s.k}</div>
                <div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 6 }}>
                    <_Tag tone="lime" mono>{s.in}</_Tag>
                    <_Tag tone={s.show.includes('✗') ? 'crimson' : 'cyan'} mono>{s.show}</_Tag>
                    <_Tag tone="mute" mono>{s.out}</_Tag>
                  </div>
                  <div style={{ fontSize: 11.5, color: _ia.text, lineHeight: 1.5 }}>{s.doc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            padding: 10, background: `${_ia.crimson}14`, border: `1px solid ${_ia.crimson}55`, borderRadius: 3,
            fontFamily: _ia.fontMono, fontSize: 10, color: _ia.text, lineHeight: 1.6, letterSpacing: 0.3,
          }}>
            <span style={{ color: _ia.crimson, letterSpacing: 1.2 }}>禁止文案</span> · 「停止收訊息」「時間軸停止」「完全結束」— 三者描述的都是 Session CLOSED,不是 broadcast STANDBY。
          </div>
        </div>
      </div>
    </_IAFrame>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Artboard 3 · Live Mode Operator Path (rule #5 illustrative)
// ─────────────────────────────────────────────────────────────────────────
function IASpecLiveOperatorPath() {
  const paths = [
    {
      title: '主持流 · MC 開場 → 結束',
      tone: _ia.lime,
      steps: [
        { r: 'sessions',     a: '建立場次 · F1',      out: 'session.id 出現在 topbar' },
        { r: 'broadcast',    a: '進入 LIVE',          out: '彈幕開始顯示' },
        { r: 'messages',     a: '審核可疑訊息',       out: '隱藏 / 遮罩 / 封禁' },
        { r: 'broadcast',    a: 'STANDBY · 講話段落', out: '訊息進 queue' },
        { r: 'broadcast',    a: 'LIVE · 結束 standby', out: 'drain queue / discard' },
        { r: 'sessions',     a: '結束場次 · F3',      out: 'CLOSED · 自動跳到 history' },
      ],
    },
    {
      title: '操作員流 · 投票即時觀察',
      tone: _ia.cyan,
      steps: [
        { r: 'polls',        a: '建立 4 選項',        out: 'poll.id created' },
        { r: 'polls',        a: '推到 overlay',       out: '觀眾端 Poll tab 出現' },
        { r: 'polls/:id',    a: '監看實時 KPI',       out: '5-tile + 時間直方圖' },
        { r: 'polls',        a: '結束投票',           out: 'celebration overlay' },
        { r: 'history',      a: '匯出結果 · CSV',     out: '檔案 + audit event' },
      ],
    },
    {
      title: '高風險逃逸 · 進入後台',
      tone: _ia.amber,
      steps: [
        { r: 'live',         a: 'sidebar 切「Admin」', out: 'toast: 進入後台模式 · 直播仍持續' },
        { r: 'system',       a: '開 Webhook',         out: 'audit 記錄 register' },
        { r: 'live',         a: 'sidebar 切回 Live',   out: 'toast: 回到 Live · 廣播未中斷' },
      ],
    },
  ];

  return (
    <_IAFrame eyebrow="IA · §H RULE #5 · LIVE OPERATOR PATH" title="Live 模式操作流 · 三條 happy path">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, height: '100%' }}>
        {paths.map((p) => (
          <div key={p.title} style={{
            background: _ia.panel, border: `1px solid ${_ia.line}`, borderRadius: 4, padding: 16,
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <div>
              <div style={{ width: 28, height: 3, background: p.tone, borderRadius: 2, marginBottom: 10 }} />
              <div style={{ fontSize: 14, fontWeight: 600, color: _ia.text, letterSpacing: 0.2 }}>{p.title}</div>
            </div>
            <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {/* vertical line */}
              <div style={{ position: 'absolute', left: 11, top: 12, bottom: 12, width: 1, background: _ia.line }} />
              {p.steps.map((s, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '24px 1fr', gap: 10,
                  position: 'relative', padding: '6px 0',
                }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: _ia.raised, border: `1.5px solid ${p.tone}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: _ia.fontMono, fontSize: 10, color: p.tone, fontWeight: 700,
                    zIndex: 1,
                  }}>{i + 1}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: _ia.fontMono, fontSize: 9.5, color: _ia.textDim, letterSpacing: 0.5, padding: '1px 5px', border: `1px solid ${_ia.line}`, borderRadius: 2 }}>#{s.r}</span>
                    </div>
                    <div style={{ fontSize: 12, color: _ia.text, marginTop: 4, lineHeight: 1.45 }}>{s.a}</div>
                    <div style={{ fontFamily: _ia.fontMono, fontSize: 10, color: _ia.textMute, marginTop: 3, letterSpacing: 0.2, lineHeight: 1.5 }}>
                      → {s.out}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              padding: '8px 10px', background: `${p.tone}10`, border: `1px solid ${p.tone}55`, borderRadius: 3,
              fontFamily: _ia.fontMono, fontSize: 10, color: _ia.text, lineHeight: 1.6, letterSpacing: 0.3,
            }}>
              <span style={{ color: p.tone, letterSpacing: 1.2 }}>常駐 sidebar</span> · 全程 Live 視角,sidebar 不需切換。
            </div>
          </div>
        ))}
      </div>
    </_IAFrame>
  );
}

Object.assign(window, { IASpecRouteMatrix, IASpecStateDiagram, IASpecLiveOperatorPath });
