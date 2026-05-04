// Tab Container Chrome — shared shell for moderation / appearance / automation / history
//
// 1 spec artboard + 4 page mockups (each page rendered with default-tab pre-selected).
// Chrome anatomy:
//   topbar (44, reused from Live Console — same 10-nav active state)
//   page header (76):
//     left: kicker + page title + meta count
//     right: page-level CTA (1 primary, optional)
//   tab strip (40):
//     [zh label] [EN kicker] [badge?]   · active = cyan underline + cyanSoft fill
//   tab body (~720): page-specific content
//
// Default-tab decisions (locked):
//   moderation → blacklist  (mid-event 最常用)
//   appearance → themes     (場次開始前)
//   automation → scheduler  (高頻 vs webhooks)
//   history    → sessions   (入口式提問)
//
// Badge rule: tab strip carries a small mono numeric badge when tab has
// "actionable backlog" — failed webhooks, queued audit alerts, etc.
// Calm tabs (no count) show no badge.


// topbar handled by AdminPageShell

// shared tab strip
function _TabStrip({ tabs, active }) {
  return (
    <div style={{
      height: 40, flexShrink: 0, padding: '0 32px',
      background: hudTokens.bg1, borderBottom: `1px solid ${hudTokens.line}`,
      display: 'flex', alignItems: 'stretch',
    }}>
      {tabs.map((t, i) => {
        const isActive = t.id === active;
        return (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '0 16px', position: 'relative',
            background: isActive ? hudTokens.cyanSoft : 'transparent',
            color: isActive ? hudTokens.cyan : hudTokens.textDim,
            borderBottom: `2px solid ${isActive ? hudTokens.cyan : 'transparent'}`,
            fontFamily: hudTokens.fontSans, fontSize: 12.5, fontWeight: isActive ? 600 : 500,
          }}>
            <span>{t.zh}</span>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 8.5, color: isActive ? hudTokens.cyan : hudTokens.textMute, letterSpacing: 1.4, opacity: isActive ? 0.85 : 0.7 }}>{t.en}</span>
            {t.badge != null && t.badge > 0 && (
              <span style={{
                padding: '1px 5px', borderRadius: 2,
                background: t.badgeTone === 'crimson' ? 'rgba(248, 113, 113,0.18)' : t.badgeTone === 'amber' ? 'rgba(251,191,36,0.18)' : hudTokens.cyanSoft,
                color: t.badgeTone === 'crimson' ? hudTokens.crimson : t.badgeTone === 'amber' ? hudTokens.amber : hudTokens.cyan,
                border: `1px solid ${t.badgeTone === 'crimson' ? 'rgba(248, 113, 113,0.45)' : t.badgeTone === 'amber' ? 'rgba(251,191,36,0.45)' : hudTokens.cyanLine}`,
                fontFamily: hudTokens.fontMono, fontSize: 9, fontWeight: 700, letterSpacing: 0.3, lineHeight: 1.3,
              }}>{t.badge}</span>
            )}
          </span>
        );
      })}
      <span style={{ flex: 1 }} />
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 5, paddingRight: 4,
        fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.textMute, letterSpacing: 0.8,
      }}>
        ⇥ TAB · ⌘1–9 · 跳轉
      </span>
    </div>
  );
}

// ─── SPEC artboard — anatomy + rules ─────────────────────────────────────
function TabChromeSpec() {
  return (
    <div style={{
      width: 1440, height: 920, background: hudTokens.bg0, color: hudTokens.text,
      fontFamily: hudTokens.fontSans, padding: '24px 32px',
      display: 'flex', flexDirection: 'column', gap: 16,
      boxSizing: 'border-box', position: 'relative', overflow: 'hidden',
    }}>
      {[
        { top: 16, left: 16, r: '0deg' }, { top: 16, right: 16, r: '90deg' },
        { bottom: 16, right: 16, r: '180deg' }, { bottom: 16, left: 16, r: '270deg' },
      ].map((c, i) => (
        <span key={i} style={{
          position: 'absolute', ...c, width: 14, height: 14,
          borderTop: `1px solid ${hudTokens.cyanLine}`, borderLeft: `1px solid ${hudTokens.cyanLine}`,
          transform: `rotate(${c.r})`, transformOrigin: 'top left',
        }} />
      ))}

      {/* header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexShrink: 0 }}>
        <div>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 2.5, color: hudTokens.cyan }}>
            DS-009 · TAB CONTAINER CHROME
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, marginTop: 5, letterSpacing: -0.2 }}>
            一份 chrome · 4 頁共用 · moderation / appearance / automation / history
          </div>
          <div style={{ fontSize: 11.5, color: hudTokens.textDim, marginTop: 5, lineHeight: 1.6, maxWidth: 940 }}>
            Tab 容器是 Settings layer 的共通樣式 — 內容形狀差很多(規則表 / 色票 / 行事曆 / 時間軸),chrome 不假設 list-detail。
          </div>
        </div>
        <span style={{
          padding: '3px 9px', borderRadius: 2,
          background: 'rgba(134, 239, 172,0.14)', color: hudTokens.lime, border: `1px solid rgba(134, 239, 172,0.55)`,
          fontFamily: hudTokens.fontMono, fontSize: 10, fontWeight: 600, letterSpacing: 1.2,
        }}>SPEC LOCKED · 2026-05-04</span>
      </div>

      {/* anatomy mockup */}
      <div style={{
        flex: '0 0 auto', background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* fake topbar */}
        <div style={{ height: 32, background: hudTokens.bg2, borderBottom: `1px solid ${hudTokens.line}`, display: 'flex', alignItems: 'center', padding: '0 14px', gap: 6 }}>
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.textMute, letterSpacing: 1 }}>⌂ 控制台 / 投票 / 效果 / 審核 / …</span>
        </div>
        {/* fake header */}
        <div style={{ padding: '14px 24px', borderBottom: `1px solid ${hudTokens.line}`, display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.cyan, letterSpacing: 1.6 }}>① KICKER · MODERATION</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 5 }}>
              <span style={{ fontSize: 18, fontWeight: 700 }}>② 頁面標題 · Page Title</span>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.textDim }}>· ③ meta · 28 / 142</span>
            </div>
          </div>
          <span style={{
            padding: '8px 14px', borderRadius: 3,
            background: hudTokens.cyan, color: hudTokens.bg0,
            fontFamily: hudTokens.fontMono, fontSize: 10.5, letterSpacing: 0.8, fontWeight: 700,
          }}>④ 頁面 CTA</span>
        </div>
        {/* fake tab strip */}
        <div style={{ height: 36, padding: '0 24px', background: hudTokens.bg1, borderBottom: `1px solid ${hudTokens.line}`, display: 'flex', alignItems: 'stretch', gap: 0 }}>
          {[
            { zh: 'Active', en: 'ACTIVE',   active: true,  badge: 23, tone: 'crimson' },
            { zh: 'Calm',   en: 'CALM',     active: false },
            { zh: 'Warn',   en: 'WARN',     active: false, badge: 3,  tone: 'amber' },
            { zh: 'Info',   en: 'INFO',     active: false, badge: 12, tone: 'cyan' },
          ].map((t, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '0 14px', position: 'relative',
              background: t.active ? hudTokens.cyanSoft : 'transparent',
              color: t.active ? hudTokens.cyan : hudTokens.textDim,
              borderBottom: `2px solid ${t.active ? hudTokens.cyan : 'transparent'}`,
              fontFamily: hudTokens.fontSans, fontSize: 11.5, fontWeight: t.active ? 600 : 500,
            }}>
              <span>⑤ {t.zh}</span>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 8, letterSpacing: 1.3, color: t.active ? hudTokens.cyan : hudTokens.textMute, opacity: 0.7 }}>{t.en}</span>
              {t.badge != null && (
                <span style={{
                  padding: '1px 5px', borderRadius: 2,
                  background: t.tone === 'crimson' ? 'rgba(248, 113, 113,0.18)' : t.tone === 'amber' ? 'rgba(251,191,36,0.18)' : hudTokens.cyanSoft,
                  color: t.tone === 'crimson' ? hudTokens.crimson : t.tone === 'amber' ? hudTokens.amber : hudTokens.cyan,
                  border: `1px solid ${t.tone === 'crimson' ? 'rgba(248, 113, 113,0.45)' : t.tone === 'amber' ? 'rgba(251,191,36,0.45)' : hudTokens.cyanLine}`,
                  fontFamily: hudTokens.fontMono, fontSize: 8.5, fontWeight: 700,
                }}>⑥ {t.badge}</span>
              )}
            </span>
          ))}
          <span style={{ flex: 1 }} />
          <span style={{
            display: 'inline-flex', alignItems: 'center', padding: '0 4px',
            fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.textMute, letterSpacing: 0.8,
          }}>⑦ ⇥ · ⌘1–9</span>
        </div>
        {/* fake body */}
        <div style={{
          height: 140, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: hudTokens.bg0,
        }}>
          <span style={{
            padding: '8px 14px', borderRadius: 3,
            border: `1px dashed ${hudTokens.line}`, color: hudTokens.textMute,
            fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1,
          }}>⑧ TAB BODY · 自由內容 · 不假設 list-detail</span>
        </div>

        {/* annotation overlays */}
        {[
          { label: '①', text: 'Kicker · 1.8 letterspacing · cyan · 永遠雙語 (zh + EN)', t: 56, l: 24 },
          { label: '②', text: '頁面標題 · 22px / 700 · 不重複 nav 名稱', t: 76, l: 130 },
          { label: '③', text: 'meta · mono · 「28/142」「3 enabled」「last update 2 min ago」', t: 76, l: 320 },
          { label: '④', text: 'Page CTA · 1 個 primary · 例:加入黑名單 / 上傳字型', t: 50, l: 1080 },
          { label: '⑤', text: 'Tab label · zh + EN kicker · active = cyan underline 2px + cyanSoft fill', t: 122, l: 24 },
          { label: '⑥', text: 'Badge · mono · 只在「actionable backlog」時出 — failed webhook / queued alert', t: 122, l: 220 },
          { label: '⑦', text: '鍵盤提示 · ⇥ 切換 / ⌘1–9 直接跳', t: 122, l: 1010 },
          { label: '⑧', text: 'Body · 1290×~720 · 不限結構 · regular content frame', t: 196, l: 24 },
        ].map((a, i) => null)}
      </div>

      {/* spec rules grid */}
      <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        {/* default-tab rules */}
        <div style={{ background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.amber, letterSpacing: 1.6, fontWeight: 600 }}>DEFAULT TAB · 中場最常用</div>
          {[
            { p: 'moderation', t: 'blacklist',  why: '中場破壞者 → 加敏感字' },
            { p: 'appearance', t: 'themes',     why: '場次開始前套主題包' },
            { p: 'automation', t: 'scheduler',  why: '比 webhooks 高頻' },
            { p: 'history',    t: 'sessions',   why: '入口式提問:上一場?' },
          ].map((r, i) => (
            <div key={i} style={{
              padding: '7px 10px', background: hudTokens.bg2, border: `1px solid ${hudTokens.line}`, borderRadius: 2,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.textDim, letterSpacing: 0.4 }}>{r.p}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.textMute }}>→</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10.5, color: hudTokens.cyan, fontWeight: 600, letterSpacing: 0.4 }}>{r.t}</span>
              </div>
              <div style={{ fontSize: 10.5, color: hudTokens.textDim, marginTop: 3, lineHeight: 1.4 }}>{r.why}</div>
            </div>
          ))}
        </div>

        {/* badge rules */}
        <div style={{ background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.crimson, letterSpacing: 1.6, fontWeight: 600 }}>BADGE · 出現條件</div>
          <div style={{ fontSize: 11, color: hudTokens.textDim, lineHeight: 1.55 }}>
            只在 tab 有「actionable backlog」時顯示 — 不是「count = 0 就藏」,而是「事情需要看」才出。
          </div>
          {[
            { tone: 'crimson', label: 'CRIMSON · 必須處理', ex: 'webhooks 連續失敗 3 次 / fingerprints 有新 violation' },
            { tone: 'amber',   label: 'AMBER · 需注意',     ex: 'audit log 有未審 / scheduler 有衝突' },
            { tone: 'cyan',    label: 'CYAN · 純計數',       ex: 'sessions 142 / blacklist 28 / fonts 5 已啟用' },
          ].map((r, i) => (
            <div key={i} style={{ padding: '7px 10px', background: hudTokens.bg2, border: `1px solid ${hudTokens.line}`, borderRadius: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{
                  width: 14, height: 14, borderRadius: 2,
                  background: r.tone === 'crimson' ? 'rgba(248, 113, 113,0.18)' : r.tone === 'amber' ? 'rgba(251,191,36,0.18)' : hudTokens.cyanSoft,
                  border: `1px solid ${r.tone === 'crimson' ? 'rgba(248, 113, 113,0.45)' : r.tone === 'amber' ? 'rgba(251,191,36,0.45)' : hudTokens.cyanLine}`,
                }} />
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.text, letterSpacing: 1, fontWeight: 600 }}>{r.label}</span>
              </div>
              <div style={{ fontSize: 10.5, color: hudTokens.textDim, marginTop: 3, lineHeight: 1.4 }}>{r.ex}</div>
            </div>
          ))}
        </div>

        {/* RWD + keyboard rules */}
        <div style={{ background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 4, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.cyan, letterSpacing: 1.6, fontWeight: 600 }}>RESPONSIVE · KEYBOARD</div>
          {/* desktop -> mobile select */}
          <div style={{ padding: '7px 10px', background: hudTokens.bg2, border: `1px solid ${hudTokens.line}`, borderRadius: 2 }}>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textDim, letterSpacing: 1.2, marginBottom: 5 }}>≥ 768 · 顯示 tab strip</div>
            <div style={{ display: 'flex', gap: 1 }}>
              {['黑名單', '敏感字', '速率', '指紋'].map((t, i) => (
                <span key={i} style={{
                  padding: '3px 8px', fontFamily: hudTokens.fontSans, fontSize: 10,
                  borderBottom: `2px solid ${i === 0 ? hudTokens.cyan : 'transparent'}`,
                  background: i === 0 ? hudTokens.cyanSoft : 'transparent',
                  color: i === 0 ? hudTokens.cyan : hudTokens.textDim,
                }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ padding: '7px 10px', background: hudTokens.bg2, border: `1px solid ${hudTokens.line}`, borderRadius: 2 }}>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textDim, letterSpacing: 1.2, marginBottom: 5 }}>{`< 768 · 折成 <select>`}</div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '6px 10px', background: hudTokens.bg0, border: `1px solid ${hudTokens.line}`, borderRadius: 2,
              fontFamily: hudTokens.fontSans, fontSize: 11, color: hudTokens.cyan,
            }}>
              <span>黑名單 · BLACKLIST</span>
              <span style={{
                padding: '0 4px', borderRadius: 2, background: 'rgba(248, 113, 113,0.18)', color: hudTokens.crimson,
                fontFamily: hudTokens.fontMono, fontSize: 8.5, border: `1px solid rgba(248, 113, 113,0.45)`, fontWeight: 700,
              }}>23</span>
              <span style={{ marginLeft: 'auto', color: hudTokens.textMute, fontFamily: hudTokens.fontMono }}>▾</span>
            </div>
          </div>
          {/* keyboard */}
          <div style={{ padding: '7px 10px', background: hudTokens.bg2, border: `1px solid ${hudTokens.line}`, borderRadius: 2, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textDim, letterSpacing: 1.2 }}>KEYBOARD</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 10.5, color: hudTokens.text }}>
              <span style={{ padding: '1px 6px', background: hudTokens.bg0, border: `1px solid ${hudTokens.line}`, borderRadius: 2, fontFamily: hudTokens.fontMono, fontSize: 9.5 }}>⇥ Tab</span>
              <span style={{ color: hudTokens.textDim }}>下一個 tab(loop)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 10.5, color: hudTokens.text }}>
              <span style={{ padding: '1px 6px', background: hudTokens.bg0, border: `1px solid ${hudTokens.line}`, borderRadius: 2, fontFamily: hudTokens.fontMono, fontSize: 9.5 }}>⌘1–9</span>
              <span style={{ color: hudTokens.textDim }}>直接跳第 N 個</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 10.5, color: hudTokens.text }}>
              <span style={{ padding: '1px 6px', background: hudTokens.bg0, border: `1px solid ${hudTokens.line}`, borderRadius: 2, fontFamily: hudTokens.fontMono, fontSize: 9.5 }}>⌘[ / ⌘]</span>
              <span style={{ color: hudTokens.textDim }}>歷史前後</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 2) MODERATION — default = blacklist ─────────────────────────────────
function ModerationPage({ theme = 'dark' }) {
  const tabs = [
    { id: 'blacklist',     zh: '黑名單', en: 'BLACKLIST',     badge: 28, badgeTone: 'cyan' },
    { id: 'filters',       zh: '敏感字', en: 'FILTERS',       badge: 142, badgeTone: 'cyan' },
    { id: 'ratelimit',     zh: '速率',   en: 'RATE LIMIT',    badge: 3,   badgeTone: 'amber' },
    { id: 'fingerprints',  zh: '指紋',   en: 'FINGERPRINTS',  badge: 1,   badgeTone: 'crimson' },
  ];

  const blacklist = [
    { kind: 'fp',      v: 'fp:a3f200', n: '阿傑 → spam_bot', why: 'profanity · 23/8s', who: '管理員', when: '14:01:38' },
    { kind: 'fp',      v: 'fp:88c100', n: '匿名',           why: 'admin manual',       who: '管理員', when: '14:00:52' },
    { kind: 'name',    v: '@spam_bot', n: '4 個 fp',        why: 'pattern match',      who: 'auto',   when: '13:58:21' },
    { kind: 'fp',      v: 'fp:5c8e21', n: '訪客6824',       why: 'rate · 47/12s',      who: 'auto',   when: '13:55:44' },
    { kind: 'fp',      v: 'fp:0c9f4d', n: '阿傑',           why: 'admin manual',       who: '管理員', when: '13:42:18' },
    { kind: 'name',    v: '@trolling', n: '2 個 fp',        why: 'profanity · keyword', who: '管理員', when: '13:28:02' },
    { kind: 'fp',      v: 'fp:7f3b2c', n: '訪客0428',       why: 'rate · 31/8s',       who: 'auto',   when: '13:14:30' },
    { kind: 'ip',      v: '192.168.5.12', n: 'fp_a3f200',  why: 'manual · permanent', who: '管理員', when: '12:55:08' },
  ];

  return (
    <AdminPageShell route="moderation" title="審核工具" en="ADMIN LANE · MODERATION · BLACKLIST · FILTERS · RATE LIMIT · FINGERPRINTS" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
          <_TabStrip tabs={tabs} active="blacklist" />
          <div style={{ flex: 1, minHeight: 0, padding: 24, display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>
        {/* search + filter */}
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <div style={{ flex: 1, padding: '8px 12px', background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 3 }}>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.textMute }}>⌕  搜尋 fp / 暱稱 / IP …</span>
          </div>
          {[
            { l: 'fp 11', sel: true },
            { l: '@暱稱 6' },
            { l: 'IP 11' },
            { l: '自動 8' },
            { l: '管理員 20' },
          ].map((c, i) => (
            <span key={i} style={{
              padding: '8px 14px', background: c.sel ? hudTokens.cyanSoft : hudTokens.bg1,
              border: `1px solid ${c.sel ? hudTokens.cyanLine : hudTokens.line}`, borderRadius: 3,
              color: c.sel ? hudTokens.cyan : hudTokens.textDim,
              fontFamily: hudTokens.fontMono, fontSize: 10.5, letterSpacing: 0.4,
            }}>{c.l}</span>
          ))}
        </div>

        {/* table */}
        <div style={{ flex: 1, minHeight: 0, background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 3, display: 'flex', flexDirection: 'column' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '70px 220px 1fr 200px 140px 100px',
            padding: '10px 18px', borderBottom: `1px solid ${hudTokens.line}`,
            fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textDim, letterSpacing: 1.4,
          }}>
            <span>類型</span><span>對象</span><span>備註</span><span>原因</span><span>來源 / 時間</span><span style={{ textAlign: 'right' }}>動作</span>
          </div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            {blacklist.map((b, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '70px 220px 1fr 200px 140px 100px',
                padding: '11px 18px', alignItems: 'center', gap: 10,
                borderBottom: `1px solid ${hudTokens.line}`,
              }}>
                <span style={{
                  display: 'inline-block', padding: '2px 6px', borderRadius: 2,
                  background: b.kind === 'fp' ? hudTokens.cyanSoft : b.kind === 'name' ? 'rgba(251,191,36,0.13)' : 'rgba(56,189,248,0.13)',
                  color: b.kind === 'fp' ? hudTokens.cyan : b.kind === 'name' ? hudTokens.amber : hudTokens.cyan,
                  border: `1px solid ${b.kind === 'fp' ? hudTokens.cyanLine : b.kind === 'name' ? 'rgba(251,191,36,0.45)' : 'rgba(56,189,248,0.45)'}`,
                  fontFamily: hudTokens.fontMono, fontSize: 9, fontWeight: 600, letterSpacing: 0.6, width: 'fit-content',
                }}>{b.kind.toUpperCase()}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11.5, color: hudTokens.text, letterSpacing: 0.3 }}>{b.v}</span>
                <span style={{ fontSize: 12, color: hudTokens.textDim }}>{b.n}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10.5, color: hudTokens.textDim, letterSpacing: 0.2 }}>{b.why}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.textMute, letterSpacing: 0.3 }}>
                  {b.who} · {b.when}
                </span>
                <div style={{ display: 'flex', gap: 4, justifyContent: 'flex-end' }}>
                  <span style={{ padding: '3px 7px', background: 'transparent', border: `1px solid ${hudTokens.line}`, borderRadius: 2, color: hudTokens.textDim, fontFamily: hudTokens.fontMono, fontSize: 9.5, letterSpacing: 0.4 }}>編輯</span>
                  <span style={{ padding: '3px 7px', background: 'transparent', border: `1px solid rgba(134, 239, 172,0.45)`, borderRadius: 2, color: hudTokens.lime, fontFamily: hudTokens.fontMono, fontSize: 9.5, letterSpacing: 0.4 }}>↶</span>
                </div>
              </div>
            ))}
          </div>
        </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

// ─── 3) APPEARANCE — default = themes ────────────────────────────────────
function AppearancePage({ theme = 'dark' }) {
  const tabs = [
    { id: 'themes',        zh: '主題包', en: 'THEME PACKS',  badge: 4,  badgeTone: 'cyan' },
    { id: 'viewer-theme',  zh: '觀眾主題', en: 'VIEWER THEME', badge: null },
    { id: 'display',       zh: '觀眾權限', en: 'DISPLAY',      badge: null },
    { id: 'fonts',         zh: '字型',   en: 'FONTS',         badge: 5,  badgeTone: 'cyan' },
  ];

  const themePacks = [
    { id: 'cyber',     name: '賽博龐克',  bg: 'linear-gradient(135deg,#0a0a3e,#3a0a6e)',  accent: '#38bdf8', sample: 'ABCDEF', active: true,  count: 12 },
    { id: 'sakura',    name: '櫻花祭',    bg: 'linear-gradient(135deg,#ffe5ec,#ff8fa8)',  accent: '#c8186a', sample: 'ABCDEF', count: 8 },
    { id: 'forest',    name: '深林',      bg: 'linear-gradient(135deg,#0d2818,#1a4530)',  accent: '#86efac', sample: 'ABCDEF', count: 6 },
    { id: 'neon',      name: '霓虹',      bg: 'linear-gradient(135deg,#1a0033,#330066)',  accent: '#ff00ff', sample: 'ABCDEF', count: 10 },
    { id: 'sunset',    name: '黃昏',      bg: 'linear-gradient(135deg,#ff6b35,#f7931e)',  accent: '#fff', sample: 'ABCDEF', count: 7 },
    { id: 'ocean',     name: '海',        bg: 'linear-gradient(135deg,#003d5b,#005c8a)',  accent: '#7fdfff', sample: 'ABCDEF', count: 9 },
    { id: 'mono',      name: '單色',      bg: 'linear-gradient(135deg,#1a1a1a,#2a2a2a)',  accent: '#fff', sample: 'ABCDEF', count: 5 },
    { id: 'custom',    name: '+ 新建',    bg: 'transparent',                              accent: hudTokens.textDim, sample: '', empty: true },
  ];

  return (
    <AdminPageShell route="appearance" title="主題與顯示" en="ADMIN LANE · APPEARANCE · THEME PACKS · VIEWER THEME · DISPLAY · FONTS" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
          <_TabStrip tabs={tabs} active="themes" />
          <div style={{ flex: 1, minHeight: 0, padding: 24, display: 'grid', gridTemplateColumns: '1fr 360px', gap: 16, overflow: 'hidden' }}>
        {/* left: pack grid */}
        <div style={{ background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 3, padding: 18, display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.cyan, letterSpacing: 1.4 }}>主題包庫 · 8 個</span>
            <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textMute, letterSpacing: 0.5 }}>danmu 預設樣式 · 不影響觀眾頁面</span>
          </div>
          <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, overflow: 'hidden' }}>
            {themePacks.map((p, i) => (
              <div key={i} style={{
                position: 'relative', borderRadius: 3,
                background: p.empty ? 'transparent' : p.bg,
                border: `1px solid ${p.active ? hudTokens.cyan : p.empty ? `${hudTokens.line} dashed` : 'rgba(255,255,255,0.08)'}`,
                borderStyle: p.empty ? 'dashed' : 'solid',
                padding: 12, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                minHeight: 130,
                outline: p.active ? `2px solid ${hudTokens.cyan}` : 'none',
                outlineOffset: p.active ? 2 : 0,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 11, color: p.empty ? hudTokens.textMute : '#fff', fontWeight: 600, letterSpacing: 0.3, opacity: 0.95 }}>{p.name}</span>
                  {p.active && (
                    <span style={{
                      padding: '1px 5px', borderRadius: 2,
                      background: hudTokens.cyan, color: hudTokens.bg0,
                      fontFamily: hudTokens.fontMono, fontSize: 8, fontWeight: 700, letterSpacing: 0.6,
                    }}>ACTIVE</span>
                  )}
                </div>
                <div style={{
                  fontFamily: '"Bebas Neue", sans-serif', fontSize: 32, letterSpacing: 1.5,
                  color: p.accent, textAlign: 'center', lineHeight: 1,
                  textShadow: p.empty ? 'none' : `0 0 10px ${p.accent}66`,
                }}>{p.sample}</div>
                {!p.empty ? (
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 8.5, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, textAlign: 'right' }}>
                    {p.count} 已用 · #{p.id}
                  </div>
                ) : (
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.textMute, letterSpacing: 1, textAlign: 'center' }}>+ EMPTY</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* right: editor for active pack */}
        <div style={{ background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 3, padding: 18, display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>
          <div>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.cyan, letterSpacing: 1.4 }}>編輯 · 賽博龐克</div>
            <div style={{ fontSize: 14, color: hudTokens.text, fontWeight: 600, marginTop: 4 }}>cyber · 12 場使用</div>
          </div>
          {/* preview */}
          <div style={{
            padding: 22, borderRadius: 3,
            background: 'linear-gradient(135deg,#0a0a3e,#3a0a6e)',
            border: `1px solid rgba(255,255,255,0.08)`,
            textAlign: 'center',
          }}>
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 36, color: '#38bdf8', textShadow: '0 0 14px #38bdf899', letterSpacing: 2, lineHeight: 1 }}>
              ABCDEF
            </div>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: 'rgba(255,255,255,0.6)', letterSpacing: 1.2, marginTop: 6 }}>SAMPLE · 預覽</div>
          </div>
          {/* params */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { l: '主色', v: '#38bdf8',  swatch: '#38bdf8' },
              { l: '描邊', v: '2px · #1a1a3a', swatch: '#1a1a3a' },
              { l: '陰影', v: 'glow · 14px',   swatch: '#38bdf8' },
              { l: '字重', v: '600 / 700' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.textMute, letterSpacing: 1, width: 50 }}>{r.l.toUpperCase()}</span>
                {r.swatch && <span style={{ width: 14, height: 14, borderRadius: 2, background: r.swatch, border: `1px solid ${hudTokens.line}` }} />}
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.text, letterSpacing: 0.2 }}>{r.v}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', gap: 6 }}>
            <span style={{ flex: 1, padding: '9px 10px', textAlign: 'center', borderRadius: 3, background: hudTokens.cyan, color: hudTokens.bg0, fontFamily: hudTokens.fontMono, fontSize: 11, fontWeight: 700, letterSpacing: 0.6 }}>套用為預設</span>
            <span style={{ padding: '9px 12px', borderRadius: 3, background: hudTokens.bg2, color: hudTokens.textDim, border: `1px solid ${hudTokens.line}`, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5 }}>複製</span>
          </div>
        </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

// ─── 4) AUTOMATION — default = scheduler ─────────────────────────────────
function AutomationPage({ theme = 'dark' }) {
  const tabs = [
    { id: 'scheduler',  zh: '排程',     en: 'SCHEDULER', badge: 7,  badgeTone: 'cyan' },
    { id: 'webhooks',   zh: 'Webhooks', en: 'WEBHOOKS',  badge: 2,  badgeTone: 'crimson' },
    { id: 'plugins',    zh: '進階',     en: 'ADVANCED',  badge: null },
  ];

  const schedules = [
    { name: '開場歡迎',    type: '一次性', when: '09:00 · 04-29',   next: '明天',    last: '——',         on: true },
    { name: '休息提醒',    type: '每日',   when: '12:00',           next: '15h 28m', last: '昨天 12:00 ✓', on: true },
    { name: '午後冷場',    type: 'cron',   when: '0 14 * * 1-5',    next: '17h 28m', last: '昨天 14:00 ✓', on: true },
    { name: '結束彩蛋',    type: '一次性', when: '17:30 · 04-29',   next: '明天',    last: '——',         on: true },
    { name: '週五簡報',    type: '每週',   when: '週五 16:00',      next: '4d 02h',  last: '上週五 ✓',    on: true },
    { name: '系統健康檢查', type: 'cron',  when: '*/30 * * * *',    next: '14m',     last: '14:01:38 ✓',  on: true },
    { name: 'Q&A 開放',    type: '一次性', when: '15:30 · 04-28',   next: '已過',    last: '——',         on: false },
  ];

  return (
    <AdminPageShell route="automation" title="排程與整合" en="ADMIN LANE · AUTOMATION · SCHEDULER · WEBHOOKS · ADVANCED" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
          <_TabStrip tabs={tabs} active="scheduler" />
          <div style={{ flex: 1, minHeight: 0, padding: 24, display: 'grid', gridTemplateColumns: '1fr 480px', gap: 16, overflow: 'hidden' }}>
        {/* left: schedule list */}
        <div style={{ background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 3, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 80px 200px 120px 120px 60px',
            padding: '10px 18px', borderBottom: `1px solid ${hudTokens.line}`,
            fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textDim, letterSpacing: 1.4,
          }}>
            <span>名稱</span><span>類型</span><span>時間 / cron</span><span>下次觸發</span><span>上次</span><span style={{ textAlign: 'right' }}>狀態</span>
          </div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            {schedules.map((s, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1fr 80px 200px 120px 120px 60px',
                padding: '11px 18px', alignItems: 'center', gap: 10,
                borderBottom: `1px solid ${hudTokens.line}`,
                opacity: s.on ? 1 : 0.55,
              }}>
                <span style={{ fontSize: 12, color: hudTokens.text, fontWeight: 500 }}>{s.name}</span>
                <span style={{
                  display: 'inline-block', padding: '1px 6px', borderRadius: 2,
                  background: s.type === 'cron' ? 'rgba(56,189,248,0.13)' : s.type === '每日' ? 'rgba(134, 239, 172,0.13)' : s.type === '每週' ? hudTokens.cyanSoft : 'rgba(251,191,36,0.13)',
                  color: s.type === 'cron' ? hudTokens.cyan : s.type === '每日' ? hudTokens.lime : s.type === '每週' ? hudTokens.cyan : hudTokens.amber,
                  border: `1px solid ${s.type === 'cron' ? 'rgba(56,189,248,0.45)' : s.type === '每日' ? 'rgba(134, 239, 172,0.45)' : s.type === '每週' ? hudTokens.cyanLine : 'rgba(251,191,36,0.45)'}`,
                  fontFamily: hudTokens.fontMono, fontSize: 9, fontWeight: 600, letterSpacing: 0.4, width: 'fit-content',
                }}>{s.type}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10.5, color: hudTokens.textDim, letterSpacing: 0.3 }}>{s.when}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10.5, color: s.next === '已過' ? hudTokens.textMute : hudTokens.cyan, letterSpacing: 0.3 }}>{s.next}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.textMute, letterSpacing: 0.3 }}>{s.last}</span>
                <span style={{ textAlign: 'right' }}>
                  <span style={{
                    display: 'inline-block', width: 26, height: 14, borderRadius: 8, position: 'relative',
                    background: s.on ? 'rgba(134, 239, 172,0.4)' : hudTokens.bg2,
                    border: `1px solid ${s.on ? 'rgba(134, 239, 172,0.6)' : hudTokens.line}`,
                  }}>
                    <span style={{
                      position: 'absolute', top: 1, [s.on ? 'right' : 'left']: 1,
                      width: 10, height: 10, borderRadius: '50%',
                      background: s.on ? hudTokens.lime : hudTokens.textMute,
                    }} />
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* right: calendar mini view */}
        <div style={{ background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 3, padding: 18, display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.cyan, letterSpacing: 1.4 }}>本週 · 04-28 → 05-04</span>
            <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textMute }}>檢視 · 月 ▾</span>
          </div>
          {/* heatmap */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
            {['一','二','三','四','五','六','日'].map((d, i) => (
              <div key={i} style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.textMute, letterSpacing: 1, textAlign: 'center', padding: '4px 0' }}>{d}</div>
            ))}
            {[
              { dots: 4, today: true }, { dots: 3 }, { dots: 2 }, { dots: 5 }, { dots: 4 }, { dots: 1 }, { dots: 0 },
            ].map((d, i) => (
              <div key={i} style={{
                aspectRatio: '1 / 1', borderRadius: 2,
                background: d.today ? hudTokens.cyanSoft : hudTokens.bg2,
                border: `1px solid ${d.today ? hudTokens.cyanLine : hudTokens.line}`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2,
              }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: d.today ? hudTokens.cyan : hudTokens.text, fontWeight: d.today ? 700 : 400 }}>{28 + i}</span>
                <div style={{ display: 'flex', gap: 1 }}>
                  {Array.from({ length: d.dots }).map((_, j) => (
                    <span key={j} style={{ width: 3, height: 3, borderRadius: '50%', background: hudTokens.cyan }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* upcoming today */}
          <div style={{ borderTop: `1px solid ${hudTokens.line}`, paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textDim, letterSpacing: 1.4 }}>今日剩餘 · 4 個</span>
            {[
              { t: '14:30', n: '系統健康檢查', tone: 'cyan' },
              { t: '15:00', n: '系統健康檢查', tone: 'cyan' },
              { t: '15:30', n: '系統健康檢查', tone: 'cyan' },
              { t: '17:30', n: '結束彩蛋', tone: 'amber' },
            ].map((u, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 0' }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.cyan, letterSpacing: 0.3 }}>{u.t}</span>
                <span style={{ fontSize: 11.5, color: hudTokens.text }}>{u.n}</span>
                <span style={{ marginLeft: 'auto', width: 6, height: 6, borderRadius: '50%', background: u.tone === 'cyan' ? hudTokens.cyan : hudTokens.amber }} />
              </div>
            ))}
          </div>
        </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

// ─── 5) HISTORY — default = sessions ─────────────────────────────────────
function HistoryPage({ theme = 'dark' }) {
  const tabs = [
    { id: 'sessions', zh: '場次',   en: 'SESSIONS', badge: 142, badgeTone: 'cyan' },
    { id: 'search',   zh: '搜尋',   en: 'SEARCH',   badge: null },
    { id: 'audit',    zh: '審計',   en: 'AUDIT',    badge: 5,   badgeTone: 'amber' },
    { id: 'replay',   zh: '重播',   en: 'REPLAY',   badge: null },
    { id: 'audience', zh: '觀眾',   en: 'AUDIENCE', badge: 2148, badgeTone: 'cyan' },
  ];

  const sessions = [
    { id: 'sess_a3f2', t: 'keynote · Q1 全員大會',   d: '04-28 14:00 → 進行中', m: '1,287',  p: 184, tone: 'lime',  open: true },
    { id: 'sess_8e21', t: 'demo day · Spring',        d: '04-21 13:00 — 17:42', m: '2,418',  p: 312 },
    { id: 'sess_4d7c', t: 'workshop · Webhooks',      d: '04-15 10:00 — 12:30', m: '482',    p: 89 },
    { id: 'sess_2b81', t: 'all-hands · monthly',      d: '04-08 09:00 — 11:45', m: '1,824',  p: 248 },
    { id: 'sess_15a3', t: 'product launch · alpha',   d: '04-01 19:00 — 21:30', m: '3,214',  p: 482 },
    { id: 'sess_0c9f', t: 'taipei meetup',            d: '03-28 19:08 — 22:14', m: '784',    p: 142 },
    { id: 'sess_88c1', t: 'engineering sync',         d: '03-22 10:00 — 11:30', m: '218',    p: 32 },
    { id: 'sess_5c8e', t: 'hackathon · finale',       d: '03-15 18:00 → 23:42', m: '4,128',  p: 624 },
  ];

  return (
    <AdminPageShell route="history" title="場次與分析" en="ADMIN LANE · HISTORY · SESSIONS · SEARCH · AUDIT · REPLAY · AUDIENCE" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
          <_TabStrip tabs={tabs} active="sessions" />
          <div style={{ flex: 1, minHeight: 0, padding: 24, display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>
        {/* filter row */}
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <div style={{ flex: 1, padding: '8px 12px', background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 3 }}>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.textMute }}>⌕  搜尋場次名稱 / id …</span>
          </div>
          {[
            { l: '全部 142', sel: true },
            { l: 'OPEN 1', tone: 'lime' },
            { l: '本週 4' },
            { l: '本月 12' },
            { l: '> 1,000 訊息 23' },
          ].map((c, i) => (
            <span key={i} style={{
              padding: '8px 14px',
              background: c.sel ? hudTokens.cyanSoft : hudTokens.bg1,
              border: `1px solid ${c.sel ? hudTokens.cyanLine : hudTokens.line}`, borderRadius: 3,
              color: c.sel ? hudTokens.cyan : c.tone === 'lime' ? hudTokens.lime : hudTokens.textDim,
              fontFamily: hudTokens.fontMono, fontSize: 10.5, letterSpacing: 0.4,
            }}>{c.l}</span>
          ))}
        </div>

        {/* session list */}
        <div style={{ flex: 1, minHeight: 0, background: hudTokens.bg1, border: `1px solid ${hudTokens.line}`, borderRadius: 3, display: 'flex', flexDirection: 'column' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '120px 1fr 240px 110px 110px 100px',
            padding: '10px 18px', borderBottom: `1px solid ${hudTokens.line}`,
            fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textDim, letterSpacing: 1.4,
          }}>
            <span>狀態 · ID</span><span>標題</span><span>時間</span><span>訊息</span><span>peak 並發</span><span style={{ textAlign: 'right' }}>動作</span>
          </div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            {sessions.map((s, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '120px 1fr 240px 110px 110px 100px',
                padding: '13px 18px', alignItems: 'center', gap: 10,
                borderBottom: `1px solid ${hudTokens.line}`,
                background: s.open ? 'rgba(56,189,248,0.04)' : 'transparent',
              }}>
                <div>
                  <span style={{
                    display: 'inline-block', padding: '1px 6px', borderRadius: 2,
                    background: s.open ? 'rgba(134, 239, 172,0.13)' : 'transparent',
                    border: `1px solid ${s.open ? 'rgba(134, 239, 172,0.45)' : hudTokens.line}`,
                    color: s.open ? hudTokens.lime : hudTokens.textMute,
                    fontFamily: hudTokens.fontMono, fontSize: 9, fontWeight: 600, letterSpacing: 0.6,
                  }}>{s.open ? '● OPEN' : 'CLOSED'}</span>
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: hudTokens.textMute, letterSpacing: 0.3, marginTop: 2 }}>{s.id}</div>
                </div>
                <span style={{ fontSize: 12.5, color: hudTokens.text, fontWeight: 500 }}>{s.t}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10.5, color: hudTokens.textDim, letterSpacing: 0.3 }}>{s.d}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11.5, color: hudTokens.text }}>{s.m}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: s.tone === 'lime' ? hudTokens.lime : hudTokens.textDim, letterSpacing: 0.3 }}>{s.p}</span>
                <div style={{ display: 'flex', gap: 4, justifyContent: 'flex-end' }}>
                  <span style={{ padding: '3px 7px', background: 'transparent', border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 2, color: hudTokens.cyan, fontFamily: hudTokens.fontMono, fontSize: 9.5, letterSpacing: 0.4 }}>↗ 開</span>
                  <span style={{ padding: '3px 7px', background: 'transparent', border: `1px solid ${hudTokens.line}`, borderRadius: 2, color: hudTokens.textDim, fontFamily: hudTokens.fontMono, fontSize: 9.5, letterSpacing: 0.4 }}>⋯</span>
                </div>
              </div>
            ))}
          </div>
        </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

window.TabChromeSpec   = TabChromeSpec;
window.ModerationPage  = ModerationPage;
window.AppearancePage  = AppearancePage;
window.AutomationPage  = AutomationPage;
window.HistoryPage     = HistoryPage;
