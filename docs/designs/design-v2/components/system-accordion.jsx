// DS-010 · System Settings Accordion — Round 2 rewrite
// Uses hudTokens + AdminPageShell exclusively. No local token const.
//
// 8 sections (default-collapsed, single-open per R2-3 spec):
//   1 setup · 2 security · 3 firetoken · 4 backup
//   5 integrations · 6 wcag · 7 mobile · 8 about

const SYS_SECTIONS = [
  { id: 'setup',        zh: '站台設定',  en: 'SETUP',        icon: '⚙',  count: '4 項',               tone: 'cyan' },
  { id: 'security',     zh: '安全',      en: 'SECURITY',     icon: '⚿',  count: '2FA · 啟用',          tone: 'lime' },
  { id: 'firetoken',    zh: 'API 金鑰',  en: 'FIRETOKEN',    icon: '⚿',  count: '3 / 5 quota',         tone: 'amber' },
  { id: 'backup',       zh: '備份',      en: 'BACKUP',       icon: '⤓',  count: '上次 03:00 ✓',        tone: 'cyan' },
  { id: 'integrations', zh: '整合',      en: 'INTEGRATIONS', icon: '⇄',  count: '4 已連 · 1 失敗',     tone: 'crimson' },
  { id: 'wcag',         zh: '無障礙',    en: 'WCAG',         icon: 'Ⓦ',  count: 'AA · contrast OK',    tone: 'lime' },
  { id: 'mobile',       zh: '手機後台',  en: 'MOBILE',       icon: '⎙',  count: 'iOS · 推播啟用',      tone: 'cyan' },
  { id: 'about',        zh: '關於',      en: 'ABOUT',        icon: 'ⓘ',  count: 'v5.0.0 · Pro',        tone: 'cyan' },
];

function _toneStyle(tone) {
  const T = hudTokens;
  return {
    cyan:    { fg: T.cyan,    bg: T.cyanSoft,                          br: T.cyanLine },
    lime:    { fg: T.lime,    bg: 'rgba(134,239,172,0.12)',             br: 'rgba(134,239,172,0.45)' },
    amber:   { fg: T.amber,   bg: 'rgba(251,191,36,0.12)',              br: 'rgba(251,191,36,0.45)' },
    crimson: { fg: T.crimson, bg: 'rgba(248,113,113,0.12)',             br: 'rgba(248,113,113,0.45)' },
    mute:    { fg: T.textMute,bg: 'transparent',                        br: T.line },
  }[tone] || { fg: T.textDim, bg: 'transparent', br: T.line };
}

// Collapsed accordion row
function _SysAccordionRow({ s, expanded, onClick }) {
  const t = _toneStyle(s.tone);
  const T = hudTokens;
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '13px 22px',
        background: expanded ? T.bg2 : T.bg1,
        borderLeft: `3px solid ${expanded ? t.fg : 'transparent'}`,
        borderBottom: `1px solid ${T.line}`,
        cursor: 'pointer',
        transition: 'background 100ms, border-left-color 100ms',
      }}
    >
      <span style={{
        fontFamily: T.fontMono, fontSize: 13,
        color: expanded ? T.cyan : T.textMute,
        width: 18, textAlign: 'center',
        transition: 'transform 120ms',
        display: 'inline-block',
        transform: expanded ? 'rotate(90deg)' : 'rotate(0)',
      }}>›</span>

      <span style={{ width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
        background: t.fg, boxShadow: `0 0 6px ${t.fg}88` }} />

      <span style={{
        width: 24, height: 24, borderRadius: 3,
        background: expanded ? T.cyanSoft : T.bg2, border: `1px solid ${T.line}`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: expanded ? T.cyan : T.textDim, fontSize: 13,
      }}>{s.icon}</span>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 13.5, color: T.text, fontWeight: 600 }}>{s.zh}</span>
          <span style={{ fontFamily: T.fontMono, fontSize: 9.5, color: T.textMute, letterSpacing: 1.4 }}>· {s.en}</span>
        </div>
      </div>

      <span style={{
        padding: '2px 8px', borderRadius: 2,
        background: t.bg, color: t.fg, border: `1px solid ${t.br}`,
        fontFamily: T.fontMono, fontSize: 9.5, letterSpacing: 0.5, fontWeight: 600,
      }}>{s.count}</span>

      <span style={{ fontFamily: T.fontMono, fontSize: 9, color: T.textMute, letterSpacing: 1, width: 72, textAlign: 'right' }}>#{s.id}</span>
    </div>
  );
}

// Setup body — shown when setup is expanded
function _SetupBody({ line, panel, raised, text, textDim, accent, radius }) {
  const T = hudTokens;
  return (
    <div style={{ padding: '22px 28px 26px 68px', background: T.bg2,
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
      {/* Identity fields */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <HudLabel color={T.cyan}>身份 · IDENTITY</HudLabel>
        {[
          { l: '站台名稱',  k: 'site.name',   v: 'Danmu Fire · Q1 大會',  hint: 'browser title 與 viewer footer 顯示' },
          { l: '主機名稱',  k: 'site.host',   v: 'danmu.example.com',     hint: 'CORS / cookie scope', mono: true },
          { l: 'Locale',   k: 'site.locale', v: 'zh-TW',                  hint: 'fallback en' },
          { l: '時區',      k: 'site.tz',     v: 'Asia/Taipei (+08:00)',   hint: '排程 cron 解讀依此' },
        ].map((f, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ paddingTop: 8 }}>
              <div style={{ fontSize: 12, color: T.text, fontWeight: 500 }}>{f.l}</div>
              <div style={{ fontFamily: T.fontMono, fontSize: 9, color: T.textMute, marginTop: 2 }}>{f.k}</div>
            </div>
            <div>
              <div style={{
                padding: '7px 11px', background: T.bg1, border: `1px solid ${T.line}`, borderRadius: 2,
                fontFamily: f.mono ? T.fontMono : T.fontSans,
                fontSize: f.mono ? 11.5 : 12.5, color: T.text,
              }}>{f.v}</div>
              <div style={{ fontSize: 10.5, color: T.textMute, marginTop: 4, lineHeight: 1.4 }}>{f.hint}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Session defaults */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <HudLabel color={T.amber}>場次預設 · NEW SESSION DEFAULTS</HudLabel>
        <div style={{ background: T.bg1, border: `1px solid ${T.line}`, borderRadius: 3, overflow: 'hidden' }}>
          {[
            { l: '預設場次時長',  v: '120 分鐘' },
            { l: '預設效果包',    v: 'cyber · 賽博龐克' },
            { l: '預設主題包',    v: 'cyber' },
            { l: '訊息保留',      v: '90 天 · 自動歸檔' },
          ].map((d, i, arr) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', padding: '10px 14px', gap: 12,
              borderBottom: i < arr.length - 1 ? `1px solid ${T.line}` : 'none',
            }}>
              <span style={{ flex: 1, fontSize: 12, color: T.text }}>{d.l}</span>
              <span style={{ fontFamily: T.fontMono, fontSize: 11, color: T.cyan }}>{d.v}</span>
              <span style={{ fontFamily: T.fontMono, fontSize: 9, color: T.textMute }}>編輯</span>
            </div>
          ))}
        </div>

        <HudLabel color={T.cyan} style={{ marginTop: 6 }}>系統行為 · BEHAVIOR</HudLabel>
        {[
          { l: '新場次自動發 Slack 通知', on: true },
          { l: '達 1,000 訊息發 webhook', on: true },
          { l: '夜間維護視窗 02:00-04:00', on: false, hint: '啟用後排程在此時段不觸發' },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '4px 0' }}>
            <span style={{
              marginTop: 2, display: 'inline-block', width: 28, height: 16, borderRadius: 8, position: 'relative',
              background: s.on ? 'rgba(134,239,172,0.35)' : T.bg2, border: `1px solid ${s.on ? 'rgba(134,239,172,0.6)' : T.line}`,
              flexShrink: 0,
            }}>
              <span style={{
                position: 'absolute', top: 1, [s.on ? 'right' : 'left']: 1,
                width: 12, height: 12, borderRadius: '50%',
                background: s.on ? T.lime : T.textMute,
              }} />
            </span>
            <div>
              <span style={{ fontSize: 12, color: T.text }}>{s.l}</span>
              {s.hint && <div style={{ fontSize: 10.5, color: T.textMute, marginTop: 2 }}>{s.hint}</div>}
            </div>
          </div>
        ))}

        <div style={{
          marginTop: 6, padding: '8px 12px', background: T.bg1,
          border: `1px dashed ${T.line}`, borderRadius: 2,
          fontFamily: T.fontMono, fontSize: 10, color: T.textMute, lineHeight: 1.5,
        }}>
          <span style={{ color: T.amber }}>!</span> 修改 host / locale / tz 會中斷 active session,系統會在送出前再次提醒
        </div>
      </div>
    </div>
  );
}

// ─── Full-page artboard: Setup expanded, others collapsed ──────────────
function SystemAccordionPage({ theme = 'dark' }) {
  const [open, setOpen] = React.useState('setup');
  const toggle = (id) => setOpen(prev => prev === id ? null : id);

  return (
    <AdminPageShell route="system" title="系統設定" en="SYSTEM · SETUP · SECURITY · INTEGRATIONS · ABOUT" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, height: '100%', overflow: 'auto' }}>
          {/* accordion hint strip */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '8px 22px', background: hudTokens.bg2, borderBottom: `1px solid ${hudTokens.line}`,
            fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.textMute, letterSpacing: 0.4,
          }}>
            <span>8 段 · 1 展開 · 單開模式</span>
            <span style={{ marginLeft: 'auto', display: 'inline-flex', gap: 6 }}>
              {[{ k: '↑↓', l: '移焦' }, { k: '↩', l: '展/收' }, { k: '#hash', l: '深連結' }].map((h, i) => (
                <span key={i} style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
                  <span style={{ padding: '1px 5px', background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 2, fontSize: 9 }}>{h.k}</span>
                  <span style={{ color: hudTokens.textMute, fontSize: 9 }}>{h.l}</span>
                </span>
              ))}
            </span>
          </div>

          {/* accordion rows */}
          <div style={{ background: hudTokens.bg1, flex: 1, minHeight: 0, overflow: 'auto' }}>
            {SYS_SECTIONS.map((s) => (
              <div key={s.id}>
                <_SysAccordionRow s={s} expanded={open === s.id} onClick={() => toggle(s.id)} />
                {open === s.id && (
                  <_SetupBody panel={panel} raised={raised} line={line} text={text} textDim={textDim} accent={accent} radius={radius} />
                )}
              </div>
            ))}
          </div>

          {/* footer */}
          <div style={{
            padding: '10px 22px', background: hudTokens.bg1, borderTop: `1px solid ${hudTokens.line}`,
            display: 'flex', alignItems: 'center', gap: 14,
            fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.textMute, flexShrink: 0,
          }}>
            <span>共 {SYS_SECTIONS.length} 段 · {open ? '1 展開' : '全收'}</span>
            <span style={{ width: 1, height: 12, background: hudTokens.line }} />
            <span>修改自動儲存 · 每段右下 ✓ toast</span>
            <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              上次同步 <span style={{ color: hudTokens.lime }}>14:01:38</span> · 由 <span style={{ color: hudTokens.cyan }}>@雅婷</span>
            </span>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

// ─── Spec artboard — anatomy + rules ─────────────────────────────────────
function SystemAccordionSpec() {
  const T = hudTokens;
  return (
    <div style={{
      width: 1440, height: 920, background: T.bg0, color: T.text,
      fontFamily: T.fontSans, padding: '24px 32px',
      display: 'flex', flexDirection: 'column', gap: 16,
      boxSizing: 'border-box', position: 'relative', overflow: 'hidden',
    }}>
      <HudCorners style={{ position: 'absolute', inset: 14 }} size={14} />

      {/* header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexShrink: 0 }}>
        <div>
          <HudLabel color={T.cyan}>DS-010 · SYSTEM ACCORDION · R2</HudLabel>
          <div style={{ fontSize: 22, fontWeight: 700, marginTop: 5, letterSpacing: -0.2 }}>
            8 段手風琴 · default-collapsed · single-open · hudTokens + AdminPageShell
          </div>
          <div style={{ fontSize: 11.5, color: T.textDim, marginTop: 5, lineHeight: 1.6 }}>
            Back-of-manual settings. Default all collapsed. One section open at a time. URL #hash deep-link.
          </div>
        </div>
        <span style={{
          padding: '3px 9px', borderRadius: 2,
          background: 'rgba(134,239,172,0.14)', color: T.lime, border: `1px solid rgba(134,239,172,0.55)`,
          fontFamily: T.fontMono, fontSize: 10, fontWeight: 600, letterSpacing: 1.2,
        }}>R2 · LOCKED · 2026-05-04</span>
      </div>

      {/* anatomy mockup */}
      <div style={{ background: T.bg1, border: `1px solid ${T.line}`, borderRadius: 4, overflow: 'hidden', flexShrink: 0 }}>
        {/* collapsed row sample */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 22px', background: T.bg1, borderBottom: `1px solid ${T.line}` }}>
          <span style={{ fontFamily: T.fontMono, fontSize: 13, color: T.textMute, width: 18, textAlign: 'center' }}>›</span>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: T.lime, boxShadow: `0 0 6px ${T.lime}88` }} />
          <span style={{ width: 24, height: 24, borderRadius: 3, background: T.bg2, border: `1px solid ${T.line}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: T.textDim, fontSize: 13 }}>⚿</span>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 13.5, color: T.text, fontWeight: 600 }}>① 安全</span>
            <span style={{ fontFamily: T.fontMono, fontSize: 9.5, color: T.textMute, letterSpacing: 1.4, marginLeft: 8 }}>· ② SECURITY</span>
          </div>
          <span style={{ padding: '2px 8px', borderRadius: 2, background: 'rgba(134,239,172,0.12)', color: T.lime, border: `1px solid rgba(134,239,172,0.45)`, fontFamily: T.fontMono, fontSize: 9.5, letterSpacing: 0.5, fontWeight: 600 }}>③ 2FA · 啟用</span>
          <span style={{ fontFamily: T.fontMono, fontSize: 9, color: T.textMute, letterSpacing: 1, width: 72, textAlign: 'right' }}>④ #security</span>
        </div>
        {/* expanded row sample */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 22px', background: T.bg2, borderLeft: `3px solid ${T.cyan}`, borderBottom: `1px solid ${T.line}` }}>
          <span style={{ fontFamily: T.fontMono, fontSize: 13, color: T.cyan, width: 18, textAlign: 'center', display: 'inline-block', transform: 'rotate(90deg)' }}>›</span>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: T.cyan, boxShadow: `0 0 8px ${T.cyan}` }} />
          <span style={{ width: 24, height: 24, borderRadius: 3, background: T.cyanSoft, border: `1px solid ${T.cyanLine}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: T.cyan, fontSize: 13 }}>⚙</span>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 13.5, color: T.text, fontWeight: 700 }}>站台設定</span>
            <span style={{ fontFamily: T.fontMono, fontSize: 9.5, color: T.cyan, letterSpacing: 1.4, marginLeft: 8 }}>· SETUP · expanded</span>
          </div>
          <span style={{ padding: '2px 8px', borderRadius: 2, background: T.cyanSoft, color: T.cyan, border: `1px solid ${T.cyanLine}`, fontFamily: T.fontMono, fontSize: 9.5, fontWeight: 600 }}>4 項</span>
          <span style={{ fontFamily: T.fontMono, fontSize: 9, color: T.textMute, width: 72, textAlign: 'right' }}>#setup</span>
        </div>
        <div style={{ padding: '14px 22px 14px 68px', background: T.bg2, borderBottom: `1px solid ${T.line}` }}>
          <span style={{ fontFamily: T.fontMono, fontSize: 10, color: T.textMute, letterSpacing: 1 }}>⑤ EXPANDED BODY — 自由內容 · identity fields / defaults / toggles / danger zone</span>
        </div>
      </div>

      {/* rules grid */}
      <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        {/* expand rules */}
        <div style={{ background: T.bg1, border: `1px solid ${T.line}`, borderRadius: 4, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <HudLabel color={T.amber}>EXPAND BEHAVIOR</HudLabel>
          {[
            { k: 'DEFAULT',   v: '全部收起(8 收 0 展)' },
            { k: 'SINGLE',    v: '展開新的 → 自動收起舊的' },
            { k: 'TOGGLE',    v: '點 header 任處展/收 · ⌘← 關閉' },
            { k: 'KEYBOARD',  v: '↑/↓ 移焦 · Enter 展 · Home/End 首末' },
            { k: 'DEEP LINK', v: 'URL #section → 直接展開 + scroll-into-view' },
          ].map((r, i) => (
            <div key={i} style={{ padding: '7px 10px', background: T.bg2, border: `1px solid ${T.line}`, borderRadius: 2 }}>
              <div style={{ fontFamily: T.fontMono, fontSize: 9, color: T.cyan, letterSpacing: 1.3, fontWeight: 600 }}>{r.k}</div>
              <div style={{ fontSize: 11, color: T.textDim, marginTop: 3, lineHeight: 1.5 }}>{r.v}</div>
            </div>
          ))}
        </div>

        {/* health dot legend */}
        <div style={{ background: T.bg1, border: `1px solid ${T.line}`, borderRadius: 4, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <HudLabel color={T.crimson}>HEALTH DOT · 4 級</HudLabel>
          {[
            { c: T.lime,    l: 'HEALTHY',  d: '已設定 / 達標 / 連線正常' },
            { c: T.cyan,    l: 'INFO',     d: '中性計數 · 版本資訊' },
            { c: T.amber,   l: 'NOTE',     d: '需注意 · quota 過半' },
            { c: T.crimson, l: 'ALERT',    d: '需處理 · 連續失敗 · 憑證錯誤' },
          ].map((d, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: d.c, boxShadow: `0 0 6px ${d.c}66`, flexShrink: 0 }} />
              <span style={{ fontFamily: T.fontMono, fontSize: 10, color: T.text, letterSpacing: 0.6, fontWeight: 600, width: 60 }}>{d.l}</span>
              <span style={{ fontSize: 10.5, color: T.textDim, lineHeight: 1.4 }}>{d.d}</span>
            </div>
          ))}
          <div style={{ marginTop: 6, padding: '8px 10px', background: T.bg2, border: `1px solid ${T.line}`, borderRadius: 2 }}>
            <HudLabel color={T.amber}>ORDERING</HudLabel>
            <div style={{ fontSize: 10.5, color: T.textDim, marginTop: 4, lineHeight: 1.55 }}>
              setup → security → firetoken → backup → integrations → wcag → mobile → about
            </div>
            <div style={{ fontSize: 10, color: T.textMute, marginTop: 4, fontStyle: 'italic' }}>about 永遠最後</div>
          </div>
        </div>

        {/* annotation table */}
        <div style={{ background: T.bg1, border: `1px solid ${T.line}`, borderRadius: 4, padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <HudLabel color={T.cyan}>ROW ANATOMY · 5 部件</HudLabel>
          {[
            { n: '①', l: 'zh 標題', d: '14px / 600 · 搭配 EN kicker' },
            { n: '②', l: 'EN kicker', d: 'mono · 9.5px · textMute · 1.4 letter-spacing' },
            { n: '③', l: 'count chip', d: '現況摘要:已啟用 / quota / 上次時間' },
            { n: '④', l: '#hash', d: 'deep-link · desktop only · 9px textMute' },
            { n: '⑤', l: 'body', d: '68px indent · 自由內容 · bg2 底色' },
          ].map((a, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, padding: '5px 8px', background: T.bg2, border: `1px solid ${T.line}`, borderRadius: 2 }}>
              <span style={{ fontFamily: T.fontMono, fontSize: 10, color: T.cyan, fontWeight: 600, width: 16 }}>{a.n}</span>
              <span style={{ fontFamily: T.fontMono, fontSize: 10, color: T.text, fontWeight: 600, width: 60 }}>{a.l}</span>
              <span style={{ fontSize: 10.5, color: T.textDim, lineHeight: 1.4 }}>{a.d}</span>
            </div>
          ))}
          <div style={{ marginTop: 4, padding: '8px 10px', background: T.bg2, border: `1px solid ${T.line}`, borderRadius: 2 }}>
            <HudLabel color={T.cyan}>RWD</HudLabel>
            <div style={{ fontSize: 10.5, color: T.textDim, marginTop: 4, lineHeight: 1.55 }}>
              {`< 768`}: row 高 56px · #hash 隱藏 · 結構不變
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SystemAccordionSpec, SystemAccordionPage });
