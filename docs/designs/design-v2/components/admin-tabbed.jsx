// DS-001 + DS-002 — shared tabbed-page pattern.
//
// Engineering shipped `[PLACEHOLDER]` tab strips for /history (3 tabs:
// EXPORT / LIST / REPLAY) and /viewer-config (2 tabs: PAGE / FIELDS).
// This file is the canonical artboard for that pattern so engineering can
// 1:1 align without inventing tokens.
//
// `TabStrip` is reusable — any future tabbed sub-page should import it
// from window.TabStrip rather than re-rolling.

function TabStrip({ tabs, activeKey, onChange, accent, text, textDim, line, panel }) {
  return (
    <div
      role="tablist"
      style={{
        display: 'flex',
        gap: 0,
        borderBottom: `1px solid ${line}`,
        background: panel,
        padding: '0 4px',
      }}
    >
      {tabs.map((t) => {
        const active = t.k === activeKey;
        return (
          <button
            key={t.k}
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(t.k)}
            style={{
              position: 'relative',
              padding: '14px 20px 12px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: active ? accent : textDim,
              fontFamily: hudTokens.fontSans,
              fontSize: 13,
              fontWeight: active ? 600 : 500,
              letterSpacing: 0.3,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              {t.icon && (
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: active ? accent : textDim, lineHeight: 1 }}>
                  {t.icon}
                </span>
              )}
              <span>{t.zh}</span>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>
                {t.en}
              </span>
              {typeof t.count !== 'undefined' && (
                <span style={{
                  fontFamily: hudTokens.fontMono, fontSize: 9.5,
                  padding: '2px 6px', borderRadius: 2,
                  background: active ? hudTokens.cyanSoft : 'transparent',
                  border: `1px solid ${active ? hudTokens.cyanLine : line}`,
                  color: active ? accent : textDim, letterSpacing: 0.5,
                  marginLeft: 2,
                }}>{t.count}</span>
              )}
            </span>
            {/* underline indicator */}
            <span style={{
              position: 'absolute', left: 8, right: 8, bottom: -1, height: 2,
              background: active ? accent : 'transparent',
              boxShadow: active ? `0 0 8px ${accent}` : 'none',
            }} />
          </button>
        );
      })}
      <span style={{ flex: 1 }} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// DS-001 · AdminHistoryTabbedPage — 3 tabs: EXPORT / LIST / REPLAY
// ─────────────────────────────────────────────────────────────────────────
function AdminHistoryTabbedPage({ theme = 'dark', initialTab = 'export' }) {
  const [tab, setTab] = React.useState(initialTab);
  return (
    <AdminPageShell route="history" title="歷史紀錄" en="HISTORY · TIMELINE · LIST · REPLAY" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {
        const tabs = [
          { k: 'export',  zh: '時間軸匯出', en: 'EXPORT', icon: '↓', count: 4 },
          { k: 'list',    zh: '訊息清單',   en: 'LIST',   icon: '☰', count: '1,287' },
          { k: 'replay',  zh: '重播',       en: 'REPLAY', icon: '▶' },
        ];
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, gap: 14 }}>
            <TabStrip tabs={tabs} activeKey={tab} onChange={setTab}
              accent={accent} text={text} textDim={textDim} line={line} panel={panel} />

            {tab === 'export' && (
              <div style={{ flex: 1, minHeight: 0 }}>
                <AdminHistoryPage theme={theme} __embedded />
              </div>
            )}

            {tab === 'list' && (
              <div style={{
                flex: 1, minHeight: 0, background: panel, border: `1px solid ${line}`, borderRadius: radius,
                padding: 18, display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <HudLabel color={textDim}>訊息清單 · 本場活動 14:00 — 現在</HudLabel>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.lime, letterSpacing: 0.5 }}>● 1,287 筆 · live</span>
                  <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 11, color: text, padding: '5px 10px', border: `1px solid ${line}`, borderRadius: 3 }}>↓ 匯出此視圖</span>
                </div>
                <div style={{
                  display: 'grid', gridTemplateColumns: '90px 110px 1fr 80px', gap: 8,
                  padding: '8px 10px', borderBottom: `1px solid ${line}`,
                  fontFamily: hudTokens.fontMono, fontSize: 9.5, color: textDim, letterSpacing: 1,
                }}>
                  <span>TIME</span><span>NICK</span><span>MESSAGE</span><span style={{ textAlign: 'right' }}>STATE</span>
                </div>
                <div style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
                  {[
                    { t: '14:02:18', n: '小明',     m: '這個 demo 看起來超讚 👏', s: 'SHOWN',   c: hudTokens.lime },
                    { t: '14:02:14', n: '訪客6824', m: '想問講者幾個問題',         s: 'SHOWN',   c: hudTokens.lime },
                    { t: '14:02:11', n: '阿傑',     m: '+1 求簡報',                s: 'SHOWN',   c: hudTokens.lime },
                    { t: '14:02:08', n: 'fp_a3f2',  m: '<已遮罩 · profanity>',     s: 'MASKED',  c: hudTokens.amber },
                    { t: '14:02:04', n: 'Yvonne',   m: '今天的場地有點冷 🥶',      s: 'SHOWN',   c: hudTokens.lime },
                    { t: '14:01:58', n: '匿名',     m: '請問 Q&A 環節在哪裡',       s: 'SHOWN',   c: hudTokens.lime },
                    { t: '14:01:52', n: 'fp_88c1',  m: '<已隱藏 · admin>',          s: 'HIDDEN',  c: hudTokens.crimson },
                    { t: '14:01:47', n: 'Mei',      m: '現場聲音可以調大嗎',         s: 'SHOWN',   c: hudTokens.lime },
                    { t: '14:01:39', n: '阿傑',     m: '推推 👍',                    s: 'SHOWN',   c: hudTokens.lime },
                    { t: '14:01:30', n: '訪客0428', m: '可以分享簡報連結嗎?',         s: 'SHOWN',   c: hudTokens.lime },
                  ].map((r, i) => (
                    <div key={i} style={{
                      display: 'grid', gridTemplateColumns: '90px 110px 1fr 80px', gap: 8,
                      padding: '8px 10px', borderBottom: `1px solid ${line}`,
                      fontSize: 12, alignItems: 'center',
                    }}>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim }}>{r.t}</span>
                      <span style={{ color: text }}>{r.n}</span>
                      <span style={{ color: r.s === 'SHOWN' ? text : textDim, fontStyle: r.s !== 'SHOWN' ? 'italic' : 'normal' }}>{r.m}</span>
                      <span style={{
                        textAlign: 'right', fontFamily: hudTokens.fontMono, fontSize: 9.5, letterSpacing: 1,
                        color: r.c, padding: '2px 6px', borderRadius: 2, justifySelf: 'end',
                        background: `${r.c}1c`, border: `1px solid ${r.c}55`,
                      }}>{r.s}</span>
                    </div>
                  ))}
                </div>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4, textAlign: 'center', padding: 6 }}>
                  顯示 1 — 10 / 1,287 · 滾動載入更多
                </div>
              </div>
            )}

            {tab === 'replay' && (
              <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: '1fr 320px', gap: 14 }}>
                {/* viewport */}
                <div style={{ background: '#000', border: `1px solid ${line}`, borderRadius: radius, position: 'relative', overflow: 'hidden' }}>
                  {/* fake danmu floating */}
                  {[
                    { x: 60,  y: 80,  c: '#fff',   t: '推推 👍' },
                    { x: 220, y: 140, c: '#fde68a', t: '+1 求簡報' },
                    { x: 80,  y: 220, c: '#a7f3d0', t: '想問講者幾個問題' },
                    { x: 340, y: 300, c: '#bae6fd', t: '可以分享簡報連結嗎?' },
                    { x: 140, y: 380, c: '#fbcfe8', t: '這個 demo 看起來超讚 👏' },
                  ].map((d, i) => (
                    <div key={i} style={{
                      position: 'absolute', left: d.x, top: d.y,
                      color: d.c, fontFamily: hudTokens.fontSans, fontSize: 22, fontWeight: 600,
                      textShadow: '0 2px 4px rgba(0,0,0,0.6)', letterSpacing: 0.5,
                    }}>{d.t}</div>
                  ))}
                  {/* timeline */}
                  <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14, height: 56, background: 'rgba(15,20,33,0.85)', border: `1px solid ${line}`, borderRadius: 3, padding: 10, backdropFilter: 'blur(8px)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>
                      <span style={{ color: accent, fontSize: 14 }}>▶</span>
                      <span style={{ color: text }}>14:02:11</span>
                      <span>/ 02:42:18</span>
                      <span style={{ marginLeft: 'auto' }}>1× · 即時模擬</span>
                    </div>
                    <div style={{ marginTop: 6, height: 4, background: hudTokens.bg2, borderRadius: 2, position: 'relative' }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '52%', background: accent, borderRadius: 2 }} />
                      {/* density markers */}
                      {[12, 24, 38, 51, 67, 79].map((p, i) => (
                        <span key={i} style={{ position: 'absolute', left: `${p}%`, top: -3, width: 2, height: 10, background: hudTokens.amber, opacity: 0.7 }} />
                      ))}
                    </div>
                  </div>
                  <div style={{ position: 'absolute', top: 12, left: 14, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1.2, padding: '3px 8px', background: 'rgba(0,0,0,0.5)', border: `1px solid ${line}`, borderRadius: 2 }}>
                    REPLAY · sess_a3f2 · keynote
                  </div>
                </div>

                {/* sidecar — replay controls */}
                <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <HudLabel color={textDim}>重播設定</HudLabel>
                  <div>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: textDim, letterSpacing: 1, marginBottom: 6 }}>速度</div>
                    <div style={{ display: 'flex', gap: 4 }}>
                      {['0.5×', '1×', '2×', '4×', '8×'].map((s, i) => (
                        <span key={s} style={{
                          flex: 1, padding: '6px 0', textAlign: 'center', fontFamily: hudTokens.fontMono, fontSize: 11,
                          background: i === 1 ? hudTokens.cyanSoft : 'transparent', color: i === 1 ? accent : text,
                          border: `1px solid ${i === 1 ? hudTokens.cyanLine : line}`, borderRadius: 3, cursor: 'pointer',
                        }}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: textDim, letterSpacing: 1, marginBottom: 6 }}>顯示</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <Toggle on accent={accent} text={text} textDim={textDim} line={line}>顯示已遮罩訊息</Toggle>
                      <Toggle accent={accent} text={text} textDim={textDim} line={line}>顯示已隱藏訊息</Toggle>
                      <Toggle on accent={accent} text={text} textDim={textDim} line={line}>同步當時主題</Toggle>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: textDim, letterSpacing: 1, marginBottom: 6 }}>跳到密度高峰</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
                      {[
                        { t: '14:18', d: '86 / min' },
                        { t: '14:34', d: '74 / min' },
                        { t: '15:02', d: '68 / min' },
                        { t: '15:47', d: '62 / min' },
                      ].map((p) => (
                        <span key={p.t} style={{
                          padding: '6px 8px', background: raised, border: `1px solid ${line}`, borderRadius: 3,
                          fontFamily: hudTokens.fontMono, fontSize: 10, color: text, cursor: 'pointer',
                        }}>
                          <div>{p.t}</div>
                          <div style={{ color: hudTokens.amber, marginTop: 2 }}>{p.d}</div>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{
                    marginTop: 'auto', padding: 10, background: `${accent}10`, border: `1px solid ${accent}55`, borderRadius: 3,
                    fontFamily: hudTokens.fontMono, fontSize: 10, color: text, lineHeight: 1.6, letterSpacing: 0.3,
                  }}>
                    <div style={{ color: accent, letterSpacing: 1.2, marginBottom: 4 }}>提示</div>
                    重播只渲染當時 broadcast 顯示出的訊息;隱藏 / 遮罩可從上方切換還原。
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      }}
    </AdminPageShell>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// DS-002 · AdminViewerConfigTabbedPage — 2 tabs: PAGE / FIELDS
// ─────────────────────────────────────────────────────────────────────────
function AdminViewerConfigTabbedPage({ theme = 'dark', initialTab = 'page' }) {
  const [tab, setTab] = React.useState(initialTab);
  return (
    <AdminPageShell route="viewer-config" title="觀眾頁設定" en="VIEWER CONFIG · PAGE THEME · INPUT FIELDS" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {
        const tabs = [
          { k: 'page',   zh: '整頁主題', en: 'PAGE',   icon: '◧' },
          { k: 'fields', zh: '表單欄位', en: 'FIELDS', icon: '☷' },
        ];
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, gap: 14 }}>
            <TabStrip tabs={tabs} activeKey={tab} onChange={setTab}
              accent={accent} text={text} textDim={textDim} line={line} panel={panel} />

            <div style={{
              padding: '8px 12px', background: hudTokens.cyanSoft, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 3,
              fontFamily: hudTokens.fontMono, fontSize: 10, color: text, letterSpacing: 0.3, lineHeight: 1.5,
            }}>
              <span style={{ color: accent, letterSpacing: 1.2 }}>觀眾頁主題</span> 控制 <code style={{ color: text }}>/fire</code> 的整體外觀(背景、tab、字色);
              <span style={{ color: accent, letterSpacing: 1.2, marginLeft: 6 }}>表單欄位</span> 控制觀眾在「發送 danmu」表單上看到的輸入(暱稱 / 顏色 / 字級 / 描邊 …)。兩者獨立。
            </div>

            {tab === 'page' && (
              <div style={{ flex: 1, minHeight: 0 }}>
                <AdminViewerThemePage theme={theme} __embedded />
              </div>
            )}

            {tab === 'fields' && (
              <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: '1fr 360px', gap: 14, overflow: 'hidden' }}>
                {/* Left — field list */}
                <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <HudLabel color={textDim}>觀眾表單欄位 · 11 項</HudLabel>
                    <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>顯示 8 · 隱藏 3</span>
                  </div>
                  {[
                    { k: '暱稱 / Nickname',  zh: '單行文字輸入,viewer 顯示為作者名',     on: true,  pinned: true },
                    { k: '訊息 / Message',   zh: '主要 textarea(必填,長度上限 80)',     on: true,  pinned: true },
                    { k: '顏色 / Color',      zh: '6 個預設色票 + 自訂 hex',               on: true },
                    { k: '字型 / Font',       zh: '從 Font Library 選擇',                  on: true },
                    { k: '字級 / Size',       zh: 'small / regular / large 三段',           on: true },
                    { k: '透明度 / Opacity',  zh: '0.4 / 0.7 / 1.0 三段',                   on: true },
                    { k: '描邊 / Stroke',     zh: '黑邊 toggle',                            on: true },
                    { k: '陰影 / Shadow',     zh: 'soft / hard / none',                     on: true },
                    { k: '效果 / Effect',     zh: '可選 1-3 個從 Effect Library',           on: false },
                    { k: '匿名送出',          zh: '隱藏 nickname,顯示 fp_xxxx',            on: false },
                    { k: '附加圖片',          zh: 'BE 尚未支援',                            on: false, blocked: true },
                  ].map((f, i) => (
                    <div key={i} style={{
                      display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 10,
                      padding: '10px 12px', background: raised, border: `1px solid ${line}`, borderRadius: 3,
                      alignItems: 'center', opacity: f.blocked ? 0.55 : 1,
                    }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: f.on ? accent : line, boxShadow: f.on ? `0 0 6px ${accent}` : 'none' }} />
                      <div>
                        <div style={{ fontSize: 13, color: text, display: 'flex', alignItems: 'center', gap: 6 }}>
                          {f.k}
                          {f.pinned && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, padding: '1px 5px', border: `1px solid ${line}`, borderRadius: 2, letterSpacing: 0.5 }}>必填</span>}
                          {f.blocked && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.amber, padding: '1px 5px', border: `1px solid ${hudTokens.amber}55`, background: `${hudTokens.amber}1a`, borderRadius: 2, letterSpacing: 0.5 }}>BE BLOCKED</span>}
                        </div>
                        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 2, letterSpacing: 0.3 }}>{f.zh}</div>
                      </div>
                      <span style={{
                        fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1,
                        padding: '4px 10px', borderRadius: 3,
                        color: f.on ? accent : textDim,
                        background: f.on ? hudTokens.cyanSoft : 'transparent',
                        border: `1px solid ${f.on ? hudTokens.cyanLine : line}`,
                        cursor: f.blocked ? 'not-allowed' : 'pointer',
                      }}>{f.on ? '顯示' : '隱藏'}</span>
                    </div>
                  ))}
                </div>

                {/* Right — preview */}
                <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <HudLabel color={textDim}>觀眾端預覽</HudLabel>
                  <div style={{
                    background: hudTokens.bg1, border: `1px solid ${line}`, borderRadius: 3, padding: 14,
                    display: 'flex', flexDirection: 'column', gap: 10,
                  }}>
                    <PrevField label="暱稱 / Nickname" required>阿傑</PrevField>
                    <PrevField label="訊息 / Message" required area>+1 求簡報</PrevField>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                      <PrevField label="顏色">
                        <div style={{ display: 'flex', gap: 4 }}>
                          {['#fde68a', '#a7f3d0', '#bae6fd', '#fbcfe8', '#c4b5fd', '#fff'].map((c, i) => (
                            <span key={c} style={{ width: 18, height: 18, borderRadius: 9, background: c, border: i === 0 ? `2px solid ${accent}` : `1px solid ${line}` }} />
                          ))}
                        </div>
                      </PrevField>
                      <PrevField label="字級">small · <b>regular</b> · large</PrevField>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                      <PrevField label="透明度">0.4 · 0.7 · <b>1.0</b></PrevField>
                      <PrevField label="描邊">○ <b>● 黑邊</b></PrevField>
                    </div>
                    <span style={{
                      marginTop: 4, padding: '10px 14px', textAlign: 'center',
                      background: accent, color: '#000',
                      fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 700, letterSpacing: 1.5,
                      borderRadius: 3,
                    }}>↗ 發送 DANMU</span>
                  </div>
                  <div style={{
                    marginTop: 'auto', padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 3,
                    fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, lineHeight: 1.6, letterSpacing: 0.3,
                  }}>
                    <span style={{ color: accent, letterSpacing: 1.2 }}>提示</span> · 隱藏的欄位仍會以預設值送出(顏色用主題色、字級 regular)。
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      }}
    </AdminPageShell>
  );
}

function PrevField({ label, required, area, children }) {
  return (
    <div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9.5, color: 'var(--td, #9aa4b2)', letterSpacing: 1, marginBottom: 4 }}>
        {label} {required && <span style={{ color: hudTokens.crimson }}>*</span>}
      </div>
      <div style={{
        padding: area ? '10px 12px' : '8px 12px',
        minHeight: area ? 56 : 'auto',
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid ${hudTokens.line}`,
        borderRadius: 3,
        fontSize: 13, color: hudTokens.text, lineHeight: 1.5,
      }}>{children}</div>
    </div>
  );
}

Object.assign(window, { TabStrip, AdminHistoryTabbedPage, AdminViewerConfigTabbedPage });
