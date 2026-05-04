// Decisions Log · 2026-05-04 sprint lock-in (P0-0 IA pivot + Live Console Q1-Q4)
//
// 5 條 PM-confirmed lock。第 1 條是大決定(整個 IA 32→10 + Dashboard 重新定義);
// Q1–Q4 是 Live Console 的 4 個 open question lock。
// Q3 額外帶一個「使用條件」的細化規則(toast 普適 / inline 只在可撤銷時出)。

// Token aliases — proxy to hudTokens (single source of truth).
// magenta/violet kept as compat aliases mapping to amber/cyan respectively.
const _d504 = {
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
  crimson:   hudTokens.crimson,
  magenta:   hudTokens.amber,    // compat — was '#fbbf24', now amber
  violet:    hudTokens.cyan,     // compat — was '#38bdf8', now cyan
  fontSans:  hudTokens.fontSans,
  fontMono:  hudTokens.fontMono,
};

function _D504Chip({ tone, children, sm }) {
  const c = {
    locked:   { bg: 'rgba(134, 239, 172,0.14)', fg: _d504.lime,    br: 'rgba(134, 239, 172,0.55)' },
    pivot:    { bg: 'rgba(56,189,248,0.14)', fg: _d504.violet, br: 'rgba(56,189,248,0.55)' },
    accept:   { bg: _d504.cyanSoft,           fg: _d504.cyan,    br: _d504.cyanLine },
    keep:     { bg: 'rgba(251,191,36,0.12)',  fg: _d504.amber,   br: 'rgba(251,191,36,0.45)' },
    drop:     { bg: 'rgba(248, 113, 113,0.12)',   fg: _d504.crimson, br: 'rgba(248, 113, 113,0.45)' },
    mono:     { bg: 'transparent',            fg: _d504.textDim, br: _d504.line },
  }[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: sm ? '2px 6px' : '3px 8px', borderRadius: 2,
      background: c.bg, color: c.fg, border: `1px solid ${c.br}`,
      fontFamily: _d504.fontMono, fontSize: sm ? 9 : 10, fontWeight: 600, letterSpacing: 1.2,
    }}>{children}</span>
  );
}

function DecisionsLog2026May04() {
  const rows = [
    {
      id: 'P0-0 · IA pivot',
      topic: 'Admin nav 32 → 10 + Dashboard pivot',
      decision: 'Live Console 取代 KPI 摘要',
      detail: 'Polestar 確認:單主持人 1–4 小時 mid-size event,目標是「互動 + 暖場」。Admin nav 從 32 路由收斂到 10(dashboard / polls / effects / moderation / widgets / appearance / assets / automation / history / system)。Dashboard 整頁重做為 live control console,鎖在 1440×900 不滾動。',
      action: '已交付 4 張 artboard(預設 + Q1 / Q2 / Q3+Q4 變體)。Messages / Notifications / Broadcast 三頁從 nav 移除但 endpoint 保留;legacy RWD batch1+2(12 張)凍結為 v5.0.0 reference。',
      tone: 'pivot',
      verb: 'PIVOT LOCKED',
    },
    {
      id: 'Q1 · Topbar 形態',
      topic: '小螢幕 nav 標籤密度',
      decision: 'compact (zh + icon)',
      detail: '1440 已經緊 — 10 個 nav + 右側 4 個 cluster(session selector / ⌘K / bell / cog)塞進去再加 EN kicker 會擠到 session 名稱。EN 是裝飾不是功能 — i18n 切英文時 zh 自然被替換,雙語並列冗餘。',
      action: '所有 admin 頁面 topbar 統一 compact 模式。labels 變體保留 doc 但不進工程。',
      tone: 'accept',
      verb: 'COMPACT',
    },
    {
      id: 'Q2 · Effects strip',
      topic: 'Dashboard effects 卡片排列',
      decision: '8 張橫滾',
      detail: 'Effects 是 polestar 主力 — Polls / Effects 是核心差異化(P0-0 點名)。藏 4 個在「展開 ▾」後面減少觸發機會,違背「visible at all times」原則。橫滾本身觸控成本低,鍵盤可用 ←/→ 快捷掃過。',
      action: 'Effects 卡片永遠 8 張可見 — 480px 變體沿用同邏輯(strip 橫滾)。grid+more 變體不進工程。',
      tone: 'accept',
      verb: 'SCROLL · 8',
    },
    {
      id: 'Q3 · Quick action 回饋',
      topic: 'toast / inline / both',
      decision: 'both · 互補規則',
      detail: 'toast 與 inline 不同職責 — toast = 全域成功通知(普適);inline 綠橫條 = 在動作面板原地顯示「還能撤銷 · 5s」。為避免雙噪音,加入互補規則:不是所有動作都同時出兩個。',
      action: '工程實作條件:① toast 適用全部快速動作(投票開始 ✓ / 效果觸發 ✓ / 推播送出 ✓);② inline 只在「該動作可撤銷」時出(加入黑名單 / mute / 封鎖訊息);③ 不可撤銷的動作(poll 已開、broadcast 已送)不出 inline。',
      tone: 'accept',
      verb: 'BOTH · COMPLEMENT',
      hasRule: true,
    },
    {
      id: 'Q4 · Recent actions',
      topic: '自己的動作放哪裡',
      decision: 'sidebar (220px)',
      detail: '1–4 小時高頻操作場景下,中場 undo 路徑必須短 — bell 多一次點擊在「剛剛誤封了一個觀眾」的 panic 情境會痛。sidebar 始終可見 + 每行有 ↶ 按鈕,單擊撤銷。bell 改回原職:系統通知(security / rate limit / 排程)。',
      action: 'sidebar 220px 永久占位。1280 以下逐步隱藏(降級到 bell-only)。bell tray 仍存在 — 但只裝系統通知,不裝自己的動作。',
      tone: 'accept',
      verb: 'SIDEBAR',
    },
  ];

  // Q3 細化規則 — 動作分類
  const q3Rules = [
    { op: '加入黑名單',     tone: 'crimson', kind: 'reversible',   note: 'fp 從 deny list 移除,容易' },
    { op: 'Mute 訊息',      tone: 'amber',   kind: 'reversible',   note: 'overlay 重新顯示' },
    { op: '封鎖單則訊息',   tone: 'amber',   kind: 'reversible',   note: '從審核佇列恢復' },
    { op: '隱藏訊息',       tone: 'amber',   kind: 'reversible',   note: '可在 audit log 還原' },
    { op: '啟動投票',       tone: 'magenta', kind: 'irreversible', note: '觀眾已看到,只能結束' },
    { op: '觸發效果',       tone: 'violet',  kind: 'irreversible', note: '已在 overlay 播放完' },
    { op: '推送廣播',       tone: 'cyan',    kind: 'irreversible', note: '訊息已送達 184 客戶端' },
    { op: '結束場次',       tone: 'crimson', kind: 'irreversible', note: 'state 已 commit, 無法 reopen' },
  ];

  return (
    <div style={{
      width: 1440, height: 920, background: _d504.bg, color: _d504.text,
      fontFamily: _d504.fontSans, padding: '24px 32px 28px',
      display: 'flex', flexDirection: 'column', gap: 14,
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
          borderTop: `1px solid ${_d504.cyanLine}`, borderLeft: `1px solid ${_d504.cyanLine}`,
          transform: `rotate(${c.r})`, transformOrigin: 'top left',
        }} />
      ))}

      {/* HEADER */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexShrink: 0 }}>
        <div>
          <div style={{ fontFamily: _d504.fontMono, fontSize: 10, letterSpacing: 2.5, color: _d504.violet }}>
            DECISIONS LOG · 2026-05-04 IA PIVOT LOCK
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, marginTop: 5, letterSpacing: -0.2 }}>
            P0-0 admin nav 32 → 10 + Live Console Q1–Q4
          </div>
          <div style={{ fontSize: 11.5, color: _d504.textDim, marginTop: 5, lineHeight: 1.6, maxWidth: 940 }}>
            對應 design-v2-backlog.md P0-0(2026-05-04 office-hours)+ Live Console 的 4 個 open question。
            本批 lock 之後,Q1–Q4 不再 reopen,整個 admin IA 以新 10-nav 為 source of truth。
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5 }}>
          <_D504Chip tone="locked">SIGNED-OFF</_D504Chip>
          <div style={{ fontFamily: _d504.fontMono, fontSize: 10, color: _d504.textMute, letterSpacing: 0.3 }}>
            sprint · 2026-05-04 → 2026-05-18
          </div>
        </div>
      </div>

      {/* DECISIONS table — 5 rows */}
      <div style={{
        flex: '0 0 auto', background: _d504.panel, border: `1px solid ${_d504.line}`, borderRadius: 4,
        display: 'flex', flexDirection: 'column', minHeight: 0,
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '170px 1fr 180px',
          padding: '10px 18px', borderBottom: `1px solid ${_d504.line}`,
          fontFamily: _d504.fontMono, fontSize: 9.5, color: _d504.textDim, letterSpacing: 1.5,
        }}>
          <span>ITEM · TOPIC</span>
          <span>DECISION · DETAIL · ACTION</span>
          <span style={{ textAlign: 'right' }}>STATUS</span>
        </div>

        {rows.map((row, i) => (
          <div key={row.id} style={{
            display: 'grid', gridTemplateColumns: '170px 1fr 180px',
            padding: '13px 18px', gap: 14, alignItems: 'flex-start',
            borderBottom: i < rows.length - 1 ? `1px solid ${_d504.lineSoft}` : 'none',
            background: i === 0 ? 'rgba(56,189,248,0.04)' : 'transparent',
          }}>
            {/* id */}
            <div>
              <div style={{ fontFamily: _d504.fontMono, fontSize: 10.5, color: i === 0 ? _d504.violet : _d504.cyan, letterSpacing: 0.4, fontWeight: 600 }}>
                {row.id}
              </div>
              <div style={{ fontSize: 12, color: _d504.text, marginTop: 5, fontWeight: 500, lineHeight: 1.4 }}>
                {row.topic}
              </div>
            </div>

            {/* decision body */}
            <div>
              <div style={{ fontSize: 13, color: _d504.text, fontWeight: 600, lineHeight: 1.4 }}>
                → {row.decision}
              </div>
              <div style={{ fontSize: 11, color: _d504.textDim, marginTop: 6, lineHeight: 1.6 }}>
                {row.detail}
              </div>
              <div style={{
                marginTop: 7, padding: '6px 9px',
                background: _d504.raised, border: `1px solid ${_d504.line}`, borderRadius: 2,
                display: 'flex', gap: 7, alignItems: 'flex-start',
              }}>
                <span style={{
                  fontFamily: _d504.fontMono, fontSize: 9, color: _d504.amber, letterSpacing: 1.2,
                  padding: '1px 5px', border: `1px solid rgba(251,191,36,0.45)`, borderRadius: 2,
                  flexShrink: 0, marginTop: 1, fontWeight: 600,
                }}>NEXT</span>
                <span style={{ fontFamily: _d504.fontMono, fontSize: 10.5, color: _d504.text, lineHeight: 1.55, letterSpacing: 0.1 }}>
                  {row.action}
                </span>
              </div>
            </div>

            {/* status */}
            <div style={{ textAlign: 'right' }}>
              <_D504Chip tone={row.tone}>{row.verb}</_D504Chip>
            </div>
          </div>
        ))}
      </div>

      {/* Q3 細化規則 — 動作分類矩陣 */}
      <div style={{
        flex: 1, minHeight: 0, background: _d504.panel, border: `1px solid ${_d504.line}`, borderRadius: 4,
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
      }}>
        <div style={{
          padding: '10px 18px', borderBottom: `1px solid ${_d504.line}`,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <_D504Chip tone="accept" sm>Q3 · 細化規則</_D504Chip>
          <span style={{ fontSize: 12, color: _d504.text, fontWeight: 600 }}>哪些動作出 inline 綠橫條</span>
          <span style={{ marginLeft: 'auto', fontFamily: _d504.fontMono, fontSize: 9, color: _d504.textMute, letterSpacing: 1 }}>
            判斷依據 · 動作是否可程序化撤銷
          </span>
        </div>

        <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          {/* reversible — both 出 */}
          <div style={{ padding: '12px 18px', borderRight: `1px solid ${_d504.lineSoft}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontFamily: _d504.fontMono, fontSize: 10, color: _d504.lime, letterSpacing: 1.5, fontWeight: 600 }}>REVERSIBLE</span>
              <span style={{ fontSize: 11, color: _d504.text }}>toast + inline · 含 ↶ 撤銷</span>
              <span style={{ marginLeft: 'auto', fontFamily: _d504.fontMono, fontSize: 9, color: _d504.textMute }}>4 個</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {q3Rules.filter(r => r.kind === 'reversible').map((r, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '120px 1fr 14px', gap: 10, alignItems: 'baseline',
                  padding: '5px 9px', background: _d504.raised, borderRadius: 2,
                  border: `1px solid ${_d504.lineSoft}`,
                }}>
                  <span style={{ fontSize: 11.5, color: _d504.text, fontWeight: 500 }}>{r.op}</span>
                  <span style={{ fontFamily: _d504.fontMono, fontSize: 9.5, color: _d504.textDim, letterSpacing: 0.2 }}>{r.note}</span>
                  <span style={{ color: _d504.lime, fontFamily: _d504.fontMono, fontSize: 11, textAlign: 'right' }}>↶</span>
                </div>
              ))}
            </div>

            {/* visual mock — both 顯示 */}
            <div style={{ marginTop: 4, padding: '8px 10px', background: _d504.bg, border: `1px dashed ${_d504.line}`, borderRadius: 2 }}>
              <div style={{ fontFamily: _d504.fontMono, fontSize: 8.5, color: _d504.textMute, letterSpacing: 1.2, marginBottom: 5 }}>觀感 · 範例</div>
              <div style={{
                padding: '5px 8px', borderRadius: 2,
                background: 'rgba(134, 239, 172,0.10)', border: `1px solid rgba(134, 239, 172,0.45)`,
                display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6,
              }}>
                <span style={{ fontFamily: _d504.fontMono, fontSize: 9.5, color: _d504.lime, letterSpacing: 0.4, flex: 1 }}>
                  ✓ 已加入黑名單 · fp:a3f200 · 1.2s 前
                </span>
                <span style={{ fontFamily: _d504.fontMono, fontSize: 9, color: _d504.textDim }}>↶ 撤回</span>
              </div>
              <div style={{ fontFamily: _d504.fontMono, fontSize: 8.5, color: _d504.textMute, letterSpacing: 0.4, textAlign: 'center' }}>
                ↑ inline · 在動作面板內 · 5s 後淡出
              </div>
            </div>
          </div>

          {/* irreversible — toast only */}
          <div style={{ padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontFamily: _d504.fontMono, fontSize: 10, color: _d504.amber, letterSpacing: 1.5, fontWeight: 600 }}>IRREVERSIBLE</span>
              <span style={{ fontSize: 11, color: _d504.text }}>toast only · 不出 inline</span>
              <span style={{ marginLeft: 'auto', fontFamily: _d504.fontMono, fontSize: 9, color: _d504.textMute }}>4 個</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {q3Rules.filter(r => r.kind === 'irreversible').map((r, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '120px 1fr 14px', gap: 10, alignItems: 'baseline',
                  padding: '5px 9px', background: _d504.raised, borderRadius: 2,
                  border: `1px solid ${_d504.lineSoft}`,
                }}>
                  <span style={{ fontSize: 11.5, color: _d504.text, fontWeight: 500 }}>{r.op}</span>
                  <span style={{ fontFamily: _d504.fontMono, fontSize: 9.5, color: _d504.textDim, letterSpacing: 0.2 }}>{r.note}</span>
                  <span style={{ color: _d504.textMute, fontFamily: _d504.fontMono, fontSize: 11, textAlign: 'right' }}>—</span>
                </div>
              ))}
            </div>

            {/* visual mock — toast only */}
            <div style={{ marginTop: 4, padding: '8px 10px', background: _d504.bg, border: `1px dashed ${_d504.line}`, borderRadius: 2 }}>
              <div style={{ fontFamily: _d504.fontMono, fontSize: 8.5, color: _d504.textMute, letterSpacing: 1.2, marginBottom: 5 }}>觀感 · 範例</div>
              <div style={{
                padding: '5px 10px', borderRadius: 2,
                background: _d504.raised2, border: `1px solid ${_d504.cyanLine}`,
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontFamily: _d504.fontSans, fontSize: 10.5, color: _d504.text,
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              }}>
                <span style={{
                  width: 14, height: 14, borderRadius: '50%',
                  background: 'rgba(56,189,248,0.25)', border: `1.5px solid ${_d504.cyan}`,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: _d504.cyan, fontSize: 9, fontWeight: 700,
                }}>✓</span>
                <span>已推送到 184 位觀眾</span>
              </div>
              <div style={{ fontFamily: _d504.fontMono, fontSize: 8.5, color: _d504.textMute, letterSpacing: 0.4, textAlign: 'center', marginTop: 5 }}>
                ↑ toast · 螢幕底部置中 · 3s 後消失 · 無 ↶
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer cross-ref */}
      <div style={{
        flexShrink: 0, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10,
      }}>
        {[
          {
            t: '已凍結',
            body: 'RWD batch1 (768 × 6) + batch2 (480 × 6) — 12 張 v5.0.0 reference,新 IA 穩定後重做',
            tone: 'amber',
          },
          {
            t: '下一輪 P0',
            body: 'P0-1 多題投票 + 圖片(凍結) · P0-2 Viewer Theme tab 內化進 appearance · P0-3 Display Settings 同上',
            tone: 'cyan',
          },
          {
            t: '即將開工',
            body: 'Tab 容器(moderation / appearance / automation / history)+ system 手風琴 — 4 種共用 chrome',
            tone: 'lime',
          },
        ].map((b, i) => (
          <div key={i} style={{
            background: _d504.panel, border: `1px solid ${_d504.line}`, borderRadius: 4, padding: 10,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: b.tone === 'lime' ? _d504.lime : b.tone === 'cyan' ? _d504.cyan : _d504.amber,
              }} />
              <span style={{ fontFamily: _d504.fontMono, fontSize: 9.5, color: _d504.textDim, letterSpacing: 1.5 }}>
                {b.t.toUpperCase()}
              </span>
            </div>
            <div style={{ fontSize: 11, color: _d504.text, lineHeight: 1.55 }}>{b.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.DecisionsLog2026May04 = DecisionsLog2026May04;
