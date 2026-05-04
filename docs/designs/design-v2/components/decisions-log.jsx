// Decisions Log · 2026-04-28 sprint lock-in
// One artboard summarising the 4 PM-confirmed decisions returned this round.
// Sits right after IA Spec so engineering can cite a single visual source.

const _dec = {
  bg:        '#020617',
  panel:     '#0f172a',
  raised:    '#1e293b',
  line:      'rgba(148, 163, 184, 0.18)',
  lineSoft:  'rgba(148, 163, 184, 0.18)',
  text:      '#f1f5f9',
  textDim:   '#94a3b8',
  textMute:  '#64748b',
  cyan:      '#38bdf8',
  cyanLine:  'rgba(56,189,248,0.45)',
  lime:      '#86efac',
  amber:     '#fbbf24',
  crimson:   '#f87171',
  fontSans:  '"Noto Sans TC", "Zen Kaku Gothic New", -apple-system, system-ui, sans-serif',
  fontMono:  '"IBM Plex Mono", ui-monospace, monospace',
};

function _DecChip({ tone, children }) {
  const c = {
    locked:   { bg: 'rgba(134, 239, 172,0.14)', fg: _dec.lime,    br: 'rgba(134, 239, 172,0.55)' },
    accept:   { bg: 'rgba(56,189,248,0.12)', fg: _dec.cyan,    br: _dec.cyanLine },
    keep:     { bg: 'rgba(251,191,36,0.12)', fg: _dec.amber,   br: 'rgba(251,191,36,0.45)' },
    drop:     { bg: 'rgba(248, 113, 113,0.12)',  fg: _dec.crimson, br: 'rgba(248, 113, 113,0.45)' },
    mono:     { bg: 'transparent',           fg: _dec.textDim, br: _dec.line },
  }[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '3px 8px', borderRadius: 2,
      background: c.bg, color: c.fg, border: `1px solid ${c.br}`,
      fontFamily: _dec.fontMono, fontSize: 10, fontWeight: 600, letterSpacing: 1.2,
    }}>{children}</span>
  );
}

function DecisionsLog2026Apr28() {
  const rows = [
    {
      id: 'B.3 / DS-010',
      topic: 'Identity 欄位形態',
      decision: 'plain input',
      detail: '文案固定為「暱稱 / Nickname」。doc 已記錄,本次正式 lock — 不再考慮 dropdown / segmented / floating label 等變體。',
      action: '工程沿用 prototype <input type="text" placeholder="暱稱 / Nickname"> 即可,無 RWD 變動。',
      tone: 'locked',
      verb: 'LOCKED',
    },
    {
      id: 'B.1 / DS-006',
      topic: 'Polls layout',
      decision: '接受 master-detail 偏離',
      detail: '原規格列表 + 編輯 modal,prototype 改為左 list / 右 editor。lock 偏離理由:RWD 優先 — modal 在 768/480 攤平難看,master-detail 直接 stack 即可。',
      action: 'DS-003 RWD 階段:768 → list 上 / editor 下;480 → 點擊 list item 進入 editor 全屏,左上角返回。',
      tone: 'accept',
      verb: 'ACCEPTED',
    },
    {
      id: 'DS-007',
      topic: 'Message Detail · drawer vs full page',
      decision: 'drawer 為 final',
      detail: 'G10 已在 drawer 上加 prev/next counter + K/J/Esc keycaps。full page 形態不再維護,移出 backlog。',
      action: '工程拆掉 /messages/:id 的 full-page route,改為 query param (?drawer=:id) 或 state-only。',
      tone: 'drop',
      verb: 'FULL PAGE DROPPED',
    },
    {
      id: 'DS-008',
      topic: 'Notifications layout',
      decision: '維持 prototype 3 欄',
      detail: '工程未動原規格,本次保留 — 左 filter rail / 中 list / 右 detail。doc §F 提到的「考慮 2 欄合併」不採納。',
      action: '無新工作。768 之下 RWD 仍按既定 stack 規則(filter 收 drawer,list/detail 上下)。',
      tone: 'keep',
      verb: 'KEPT AS-IS',
    },
  ];

  return (
    <div style={{
      width: 1440, height: 920, background: _dec.bg, color: _dec.text,
      fontFamily: _dec.fontSans, padding: '28px 32px 32px',
      display: 'flex', flexDirection: 'column', gap: 18,
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
          borderTop: `1px solid ${_dec.cyanLine}`, borderLeft: `1px solid ${_dec.cyanLine}`,
          transform: `rotate(${c.r})`, transformOrigin: 'top left',
        }} />
      ))}

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
        <div>
          <div style={{ fontFamily: _dec.fontMono, fontSize: 10, letterSpacing: 2.5, color: _dec.cyan }}>
            DECISIONS LOG · 2026-04-28 SPRINT LOCK
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, marginTop: 6, letterSpacing: -0.2 }}>
            4 條 PM 確認結論 · 取代 chat 為 source of truth
          </div>
          <div style={{ fontSize: 12, color: _dec.textDim, marginTop: 6, lineHeight: 1.6, maxWidth: 920 }}>
            本批 lock 對應 design-handoff-needs-2026-04-28.md §B / §F 提出的 4 個待回答問題。Engineer 與 PM 之後直接引用本 artboard,不再 reopen 討論。
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <_DecChip tone="locked">SIGNED-OFF</_DecChip>
          <div style={{ fontFamily: _dec.fontMono, fontSize: 10, color: _dec.textMute, letterSpacing: 0.3 }}>
            sprint · 2026-04-28 → 2026-05-12
          </div>
        </div>
      </div>

      {/* Decision rows */}
      <div style={{
        flex: 1, background: _dec.panel, border: `1px solid ${_dec.line}`, borderRadius: 4,
        display: 'flex', flexDirection: 'column', minHeight: 0,
      }}>
        {/* table head */}
        <div style={{
          display: 'grid', gridTemplateColumns: '160px 1fr 200px',
          padding: '12px 18px', borderBottom: `1px solid ${_dec.line}`,
          fontFamily: _dec.fontMono, fontSize: 10, color: _dec.textDim, letterSpacing: 1.5,
        }}>
          <span>ITEM · TOPIC</span>
          <span>DECISION · ACTION</span>
          <span style={{ textAlign: 'right' }}>STATUS</span>
        </div>

        <div style={{ flex: 1, overflow: 'auto' }}>
          {rows.map((row, i) => (
            <div key={row.id} style={{
              display: 'grid', gridTemplateColumns: '160px 1fr 200px',
              padding: '20px 18px', gap: 14, alignItems: 'flex-start',
              borderBottom: i < rows.length - 1 ? `1px solid ${_dec.lineSoft}` : 'none',
            }}>
              {/* item id */}
              <div>
                <div style={{ fontFamily: _dec.fontMono, fontSize: 11, color: _dec.cyan, letterSpacing: 0.4, fontWeight: 600 }}>
                  {row.id}
                </div>
                <div style={{ fontSize: 13, color: _dec.text, marginTop: 6, fontWeight: 500, lineHeight: 1.4 }}>
                  {row.topic}
                </div>
              </div>

              {/* decision */}
              <div>
                <div style={{ fontSize: 14, color: _dec.text, fontWeight: 600, lineHeight: 1.4 }}>
                  → {row.decision}
                </div>
                <div style={{ fontSize: 11.5, color: _dec.textDim, marginTop: 8, lineHeight: 1.65 }}>
                  {row.detail}
                </div>
                <div style={{
                  marginTop: 10, padding: '8px 10px',
                  background: _dec.raised, border: `1px solid ${_dec.line}`, borderRadius: 2,
                  display: 'flex', gap: 8, alignItems: 'flex-start',
                }}>
                  <span style={{
                    fontFamily: _dec.fontMono, fontSize: 9.5, color: _dec.amber, letterSpacing: 1.2,
                    padding: '1px 5px', border: `1px solid rgba(251,191,36,0.45)`, borderRadius: 2,
                    flexShrink: 0, marginTop: 1,
                  }}>NEXT</span>
                  <span style={{ fontFamily: _dec.fontMono, fontSize: 11, color: _dec.text, lineHeight: 1.55, letterSpacing: 0.1 }}>
                    {row.action}
                  </span>
                </div>
              </div>

              {/* status */}
              <div style={{ textAlign: 'right' }}>
                <_DecChip tone={row.tone}>{row.verb}</_DecChip>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer cross-refs */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12,
      }}>
        {[
          {
            t: '已交付的 artboard',
            body: 'DS-001 History tabbed (E/L/R) · DS-002 Viewer Config tabbed (P/F) · §H.1 Audit Log diff (G1-G3) · DS-007 drawer counter + keycaps (G10)',
            tone: 'lime',
          },
          {
            t: '下一輪 P0',
            body: 'DS-004 Viewer Effects 參數面板 (dark/light × 彈跳/閃爍 兩示例) — 預估 2 artboard',
            tone: 'cyan',
          },
          {
            t: '高工作量 backlog',
            body: 'DS-003 RWD 768/480 · 高頻 6 頁 × 2 斷點 = 12 張,排在 DS-004 之後單獨開 sprint',
            tone: 'amber',
          },
        ].map((b, i) => (
          <div key={i} style={{
            background: _dec.panel, border: `1px solid ${_dec.line}`, borderRadius: 4, padding: 12,
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: b.tone === 'lime' ? _dec.lime : b.tone === 'cyan' ? _dec.cyan : _dec.amber,
              }} />
              <span style={{ fontFamily: _dec.fontMono, fontSize: 10, color: _dec.textDim, letterSpacing: 1.5 }}>
                {b.t.toUpperCase()}
              </span>
            </div>
            <div style={{ fontSize: 11.5, color: _dec.text, lineHeight: 1.55 }}>{b.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { DecisionsLog2026Apr28 });
