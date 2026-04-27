// Batch 1 — 4 admin pages reachable from sidebar nav:
//   1) Messages list  · route="messages"
//   2) History Export · route="history"
//   3) Overlay Widgets · route="widgets"
//   4) Audit Log      · route="audit"  (new sidebar item)

/* =================================================================
   1) Messages — searchable / filterable list with row-level actions
   ================================================================= */

function AdminMessagesPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="messages" title="訊息紀錄" en="MESSAGES · LIVE FEED" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {
        const rows = [
          { id: '0042', t: '14:02:18', user: '小芸',     ip: '100.64.2.91',  text: '請問這能錄下來嗎？',                        flag: 'pinned',  fp: 'A4F2' },
          { id: '0041', t: '14:02:11', user: 'guest-22', ip: '100.64.7.13',  text: '同意 +1 🔥',                                  flag: null,      fp: '7C9D' },
          { id: '0040', t: '14:02:03', user: 'kevin',    ip: '100.64.3.4',   text: '聲音小一點',                                  flag: null,      fp: '2B11' },
          { id: '0039', t: '14:01:58', user: '小芸',     ip: '100.64.2.91',  text: '投影片能分享嗎？',                            flag: null,      fp: 'A4F2' },
          { id: '0038', t: '14:01:52', user: 'anonymous',ip: '100.64.9.47',  text: '【已過濾】a***t',                              flag: 'masked',  fp: 'D33A' },
          { id: '0037', t: '14:01:46', user: 'eric',     ip: '100.64.4.21',  text: '這場 keynote 很讚 ✨',                         flag: null,      fp: '8E20' },
          { id: '0036', t: '14:01:39', user: 'guest-09', ip: '100.64.5.62',  text: '【已封鎖】廣告詐騙連結',                        flag: 'blocked', fp: 'BAD1' },
          { id: '0035', t: '14:01:31', user: 'lin',      ip: '100.64.1.5',   text: '可以開字幕嗎？',                              flag: null,      fp: '4F22' },
          { id: '0034', t: '14:01:22', user: '小芸',     ip: '100.64.2.91',  text: '我也想知道 +1',                               flag: null,      fp: 'A4F2' },
          { id: '0033', t: '14:01:14', user: 'guest-11', ip: '100.64.6.88',  text: '👏👏👏',                                       flag: null,      fp: '11AA' },
          { id: '0032', t: '14:01:05', user: 'kevin',    ip: '100.64.3.4',   text: '+1',                                          flag: null,      fp: '2B11' },
          { id: '0031', t: '14:00:58', user: 'guest-44', ip: '100.64.8.12',  text: '請問 Q&A 環節?',                              flag: null,      fp: '9F31' },
          { id: '0030', t: '14:00:51', user: 'shawn',    ip: '100.64.2.7',   text: '彈幕速度可以慢一點嗎',                        flag: 'pinned',  fp: '6C44' },
        ];

        const flagCol = {
          pinned:  { color: hudTokens.amber,    label: '★ 置頂' },
          masked:  { color: hudTokens.textDim,  label: '◐ 遮罩' },
          blocked: { color: hudTokens.crimson,  label: '⊘ 封鎖' },
        };

        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
            {/* Filter bar */}
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{
                flex: '1 1 280px', maxWidth: 480,
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 12px',
                background: raised, border: `1px solid ${line}`, borderRadius: radius,
                fontFamily: hudTokens.fontMono, fontSize: 12, color: textDim, letterSpacing: 0.5,
              }}>
                <span>⌕</span>
                <span style={{ color: text }}>能錄下來</span>
                <span style={{ marginLeft: 'auto', fontSize: 10, color: textDim }}>13 筆 / 共 247</span>
              </div>
              <Pill label="全部" count="247" active textDim={textDim} text={text} accent={accent} line={line} />
              <Pill label="★ 置頂"  count="2"   textDim={textDim} text={text} accent={hudTokens.amber}    line={line} />
              <Pill label="◐ 遮罩"  count="14"  textDim={textDim} text={text} accent={hudTokens.textDim} line={line} />
              <Pill label="⊘ 封鎖"  count="9"   textDim={textDim} text={text} accent={hudTokens.crimson} line={line} />
              <span style={{ width: 1, height: 24, background: line }} />
              <DateChip label="近 1 小時" textDim={textDim} text={text} line={line} />
              <DateChip label="自訂…"     textDim={textDim} text={text} line={line} />
            </div>

            {/* Bulk actions hint */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '8px 14px', background: hudTokens.cyanSoft,
              border: `1px solid ${hudTokens.cyanLine}`, borderRadius: radius,
              fontFamily: hudTokens.fontMono, fontSize: 11, color: text, letterSpacing: 0.5,
            }}>
              <span style={{ color: accent }}>3 筆已選</span>
              <span style={{ color: textDim }}>|</span>
              <BulkBtn label="★ 置頂"     accent={hudTokens.amber}  textDim={textDim} line={line} />
              <BulkBtn label="◐ 遮罩"     accent={hudTokens.textDim} textDim={textDim} line={line} />
              <BulkBtn label="⊘ 封鎖"     accent={hudTokens.crimson} textDim={textDim} line={line} />
              <BulkBtn label="⊗ 封 IP"    accent={hudTokens.crimson} textDim={textDim} line={line} />
              <span style={{ marginLeft: 'auto', color: textDim }}>取消選取</span>
            </div>

            {/* Table */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '32px 70px 90px 110px 130px 1fr 130px 200px',
                padding: '10px 16px', borderBottom: `1px solid ${line}`,
                fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim,
              }}>
                <span>☐</span><span>ID</span><span>時間</span><span>暱稱</span><span>IP / 指紋</span><span>內容</span><span>狀態</span><span>動作</span>
              </div>
              <div style={{ flex: 1, overflow: 'auto' }}>
                {rows.map((r, i) => {
                  const selected = i < 3;
                  const f = r.flag ? flagCol[r.flag] : null;
                  return (
                    <div key={r.id} style={{
                      display: 'grid',
                      gridTemplateColumns: '32px 70px 90px 110px 130px 1fr 130px 200px',
                      padding: '10px 16px', borderBottom: `1px solid ${line}`,
                      alignItems: 'center', fontSize: 12,
                      background: selected ? hudTokens.cyanSoft : 'transparent',
                    }}>
                      <span style={{ color: selected ? accent : textDim }}>{selected ? '☑' : '☐'}</span>
                      <span style={{ fontFamily: hudTokens.fontMono, color: textDim, fontSize: 11 }}>#{r.id}</span>
                      <span style={{ fontFamily: hudTokens.fontMono, color: textDim, fontSize: 11 }}>{r.t}</span>
                      <span style={{ color: text, fontWeight: 500 }}>{r.user}</span>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, lineHeight: 1.3 }}>
                        {r.ip}<br /><span style={{ color: hudTokens.cyan }}>fp:{r.fp}</span>
                      </span>
                      <span style={{ color: text, opacity: r.flag === 'blocked' ? 0.45 : 1, textDecoration: r.flag === 'blocked' ? 'line-through' : 'none' }}>{r.text}</span>
                      <span>{f && (
                        <span style={{
                          fontFamily: hudTokens.fontMono, fontSize: 10,
                          padding: '2px 8px', borderRadius: 3,
                          background: `${f.color}1f`,
                          color: f.color,
                          border: `1px solid ${f.color}55`,
                          letterSpacing: 0.5,
                        }}>{f.label}</span>
                      )}</span>
                      <span style={{ display: 'flex', gap: 4 }}>
                        <RowBtn label="★"  hint="置頂"   color={hudTokens.amber}    textDim={textDim} line={line} />
                        <RowBtn label="◐"  hint="遮罩"   color={hudTokens.textDim}  textDim={textDim} line={line} />
                        <RowBtn label="⊘"  hint="封鎖"   color={hudTokens.crimson}  textDim={textDim} line={line} />
                        <RowBtn label="⊗"  hint="封 IP" color={hudTokens.crimson}  textDim={textDim} line={line} />
                        <RowBtn label="⋯"  hint="更多"   color={textDim}            textDim={textDim} line={line} />
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Footer / pagination */}
              <div style={{
                padding: '10px 16px', borderTop: `1px solid ${line}`,
                display: 'flex', alignItems: 'center', gap: 8,
                fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.5,
              }}>
                <span>顯示 1–13 / 247</span>
                <span style={{ marginLeft: 'auto' }}>
                  <PageBtn label="‹‹" textDim={textDim} line={line} />
                  <PageBtn label="‹"  textDim={textDim} line={line} />
                  <PageBtn label="1"  active accent={accent} textDim={textDim} line={line} />
                  <PageBtn label="2"  textDim={textDim} line={line} />
                  <PageBtn label="3"  textDim={textDim} line={line} />
                  <span style={{ color: textDim, padding: '0 6px' }}>…</span>
                  <PageBtn label="19" textDim={textDim} line={line} />
                  <PageBtn label="›"  textDim={textDim} line={line} />
                  <PageBtn label="››" textDim={textDim} line={line} />
                </span>
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

function Pill({ label, count, active, textDim, text, accent, line }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 12px',
      border: `1px solid ${active ? accent : line}`,
      background: active ? `${accent}1c` : 'transparent',
      borderRadius: 999,
      fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 0.5,
      color: active ? accent : text,
    }}>
      <span>{label}</span>
      <span style={{ color: active ? accent : textDim, fontSize: 10 }}>{count}</span>
    </span>
  );
}
function DateChip({ label, textDim, text, line }) {
  return (
    <span style={{
      padding: '6px 12px', border: `1px solid ${line}`, borderRadius: 999,
      fontFamily: hudTokens.fontMono, fontSize: 11, color: text, letterSpacing: 0.3,
    }}>📅 {label}</span>
  );
}
function BulkBtn({ label, accent, textDim, line }) {
  return (
    <span style={{
      padding: '4px 10px', border: `1px solid ${accent}55`,
      background: `${accent}1a`, color: accent, borderRadius: 4,
      fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 0.5,
    }}>{label}</span>
  );
}
function RowBtn({ label, hint, color, textDim, line }) {
  return (
    <span title={hint} style={{
      width: 26, height: 24,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      border: `1px solid ${line}`, borderRadius: 3,
      fontSize: 12, color, cursor: 'pointer',
    }}>{label}</span>
  );
}
function PageBtn({ label, active, accent, textDim, line }) {
  return (
    <span style={{
      display: 'inline-flex', minWidth: 22, height: 22, padding: '0 6px',
      alignItems: 'center', justifyContent: 'center',
      marginLeft: 2,
      border: `1px solid ${active ? accent : line}`,
      background: active ? `${accent}1c` : 'transparent',
      color: active ? accent : textDim,
      borderRadius: 3, fontSize: 11,
    }}>{label}</span>
  );
}


/* =================================================================
   2) History Export — pick range + format, generate file
   ================================================================= */

function AdminHistoryPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="history" title="時間軸匯出" en="HISTORY · TIMELINE EXPORT" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 16, height: '100%', minHeight: 0 }}>
          {/* Left — picker */}
          <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 24, overflow: 'auto' }}>
            <SectionHd>① 時間範圍</SectionHd>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
              {['本場活動 · 14:00–現在', '近 1 小時', '近 24 小時', '今天', '昨天', '近 7 天', '自訂…'].map((p, i) => (
                <span key={p} style={{
                  padding: '8px 14px',
                  border: `1px solid ${i === 0 ? accent : line}`,
                  background: i === 0 ? hudTokens.cyanSoft : 'transparent',
                  color: i === 0 ? accent : text,
                  borderRadius: 4, fontSize: 12, fontFamily: i === 0 ? hudTokens.fontSans : hudTokens.fontSans,
                }}>{p}</span>
              ))}
            </div>

            {/* Date range custom row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
              <HistoryField label="開始" textDim={textDim} line={line} value="2025-01-15  14:00:00" accent={accent} />
              <HistoryField label="結束" textDim={textDim} line={line} value="2025-01-15  16:30:00" accent={accent} />
            </div>

            <SectionHd>② 內容篩選</SectionHd>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
              <Toggle on accent={accent} text={text} textDim={textDim} line={line}>包含原始訊息</Toggle>
              <Toggle on accent={accent} text={text} textDim={textDim} line={line}>包含投票</Toggle>
              <Toggle accent={accent} text={text} textDim={textDim} line={line}>包含被遮罩 / 封鎖</Toggle>
              <Toggle on accent={accent} text={text} textDim={textDim} line={line}>包含元資料 (IP / 指紋)</Toggle>
            </div>

            <SectionHd>③ 輸出格式</SectionHd>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              <FormatCard
                ext="JSON"
                desc="完整原始紀錄、機器可讀，含所有 metadata"
                size="~ 4.2 MB"
                selected accent={accent} text={text} textDim={textDim} panel={raised} line={line}
              />
              <FormatCard
                ext="CSV"
                desc="試算表友善，預設欄位：時間 / 暱稱 / IP / 內容 / 狀態"
                size="~ 1.8 MB"
                accent={accent} text={text} textDim={textDim} panel={raised} line={line}
              />
              <FormatCard
                ext="SRT"
                desc="字幕格式，可直接套到 YouTube / Premiere"
                size="~ 280 KB"
                badge="字幕"
                accent={accent} text={text} textDim={textDim} panel={raised} line={line}
              />
            </div>

            <div style={{ marginTop: 28, display: 'flex', gap: 10, alignItems: 'center' }}>
              <button style={{
                padding: '12px 26px', borderRadius: 4, border: 'none',
                background: accent, color: '#000',
                fontFamily: hudTokens.fontMono, fontSize: 13, fontWeight: 700, letterSpacing: 1.5,
                cursor: 'pointer',
              }}>↓ 產生並下載</button>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.5 }}>
                預估：247 則訊息 · 18 個投票 · 4.2 MB
              </span>
            </div>
          </div>

          {/* Right — recent exports */}
          <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 18, overflow: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
              <HudLabel color={textDim}>最近匯出</HudLabel>
              <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim }}>過去 30 天</span>
            </div>
            {[
              { name: '2025-01-14_keynote.json',  who: 'admin', when: '昨天 22:14', size: '5.1 MB', fmt: 'JSON' },
              { name: 'taipei-meetup_subs.srt',   who: 'admin', when: '01-12 19:08', size: '342 KB', fmt: 'SRT' },
              { name: 'all-hands-q4.csv',         who: 'kevin', when: '01-09 11:22', size: '1.4 MB', fmt: 'CSV' },
              { name: 'product-launch.json',      who: 'admin', when: '01-05 09:47', size: '8.8 MB', fmt: 'JSON' },
            ].map((f, i) => (
              <div key={i} style={{
                padding: '10px 12px', borderBottom: i < 3 ? `1px solid ${line}` : 'none',
                display: 'flex', alignItems: 'center', gap: 10, fontSize: 12,
              }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 4,
                  background: hudTokens.cyanSoft, color: accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: hudTokens.fontMono, fontSize: 9, fontWeight: 700, letterSpacing: 0.5,
                }}>{f.fmt}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: text, fontFamily: hudTokens.fontMono, fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</div>
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3, marginTop: 2 }}>
                    {f.who} · {f.when} · {f.size}
                  </div>
                </div>
                <span style={{ color: textDim, fontFamily: hudTokens.fontMono, fontSize: 12, cursor: 'pointer' }}>↓</span>
              </div>
            ))}
            <div style={{
              marginTop: 14, padding: '10px 12px',
              background: 'rgba(251, 191, 36, 0.08)',
              border: `1px solid rgba(251, 191, 36, 0.3)`,
              borderRadius: 4, fontSize: 11, color: text, lineHeight: 1.6,
            }}>
              <div style={{ color: hudTokens.amber, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, marginBottom: 4 }}>⚠ 隱私</div>
              匯出包含 IP / 指紋的檔案 24 小時後自動刪除，避免外洩。
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

function SectionHd({ children }) {
  return (
    <div style={{
      fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1.5,
      color: hudTokens.cyan, marginBottom: 10, marginTop: 4,
    }}>{children}</div>
  );
}
function HistoryField({ label, value, textDim, line, accent }) {
  return (
    <div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, color: textDim, marginBottom: 6 }}>{label}</div>
      <div style={{
        padding: '10px 12px', borderRadius: 4, border: `1px solid ${line}`,
        fontFamily: hudTokens.fontMono, fontSize: 12, color: accent, letterSpacing: 0.3,
      }}>{value} <span style={{ float: 'right', color: textDim }}>📅</span></div>
    </div>
  );
}
function Toggle({ on, accent, text, textDim, line, children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '7px 14px',
      border: `1px solid ${on ? accent : line}`,
      background: on ? `${accent}1c` : 'transparent',
      borderRadius: 4, fontSize: 12, color: on ? accent : text,
    }}>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10 }}>{on ? '✓' : '○'}</span>
      {children}
    </span>
  );
}
function FormatCard({ ext, desc, size, selected, badge, accent, text, textDim, panel, line }) {
  return (
    <div style={{
      padding: 14, borderRadius: 6,
      background: panel,
      border: `2px solid ${selected ? accent : line}`,
      cursor: 'pointer', position: 'relative',
    }}>
      {selected && (
        <span style={{
          position: 'absolute', top: 8, right: 8,
          width: 18, height: 18, borderRadius: '50%',
          background: accent, color: '#000', fontWeight: 700, fontSize: 11,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>✓</span>
      )}
      {badge && (
        <span style={{
          position: 'absolute', top: 8, right: 8,
          fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1,
          padding: '2px 6px', background: hudTokens.amber, color: '#000', borderRadius: 3,
        }}>{badge}</span>
      )}
      <div style={{ fontFamily: hudTokens.fontDisplay, fontSize: 32, fontWeight: 700, color: selected ? accent : text, letterSpacing: 1 }}>{ext}</div>
      <div style={{ fontSize: 11, color: textDim, marginTop: 6, lineHeight: 1.5, minHeight: 48 }}>{desc}</div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 8, letterSpacing: 0.3 }}>{size}</div>
    </div>
  );
}


/* =================================================================
   3) Overlay Widgets — toggleable on-screen extras
   ================================================================= */

function AdminWidgetsPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="widgets" title="Overlay Widgets" en="OVERLAY · WIDGET LAYER" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {
        const widgets = [
          {
            id: 'qr',     name: 'QR Carousel',    on: true,
            desc: '左下角輪播 QR · danmu.im/42 + 講者社群連結',
            pos: '左下', size: 'small',
            preview: <QrPreviewWidget accent={accent} />,
          },
          {
            id: 'ticker', name: '跑馬燈 Ticker',  on: true,
            desc: '底部活動公告/贊助商，可串多則訊息',
            pos: '底部', size: 'wide',
            preview: <TickerPreview accent={accent} />,
          },
          {
            id: 'timer',  name: '計時器 Timer',   on: false,
            desc: '右上角倒數，常用於 Q&A、休息時間',
            pos: '右上', size: 'small',
            preview: <TimerPreview accent={hudTokens.amber} />,
          },
          {
            id: 'logo',   name: '活動 Logo',       on: false,
            desc: '左上角浮水印，可調透明度與大小',
            pos: '左上', size: 'small',
            preview: <LogoPreview text={text} textDim={textDim} />,
          },
          {
            id: 'nowp',   name: '正在播放 Now-Playing', on: false,
            desc: '若有串接音樂源，顯示曲名 / 演奏者',
            pos: '右下', size: 'wide',
            preview: <NowPlayingPreview accent={accent} text={text} textDim={textDim} />,
          },
          {
            id: 'poll',   name: '投票結果 Poll Bar', on: false,
            desc: '當投票進行中於底部顯示即時長條',
            pos: '底部', size: 'wide',
            preview: <PollBarPreview accent={accent} />,
          },
        ];

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 16, height: '100%', minHeight: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, overflow: 'auto', minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <HudLabel color={textDim}>Widget 庫 · 6 個</HudLabel>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.lime, letterSpacing: 0.5 }}>● 2 啟用中</span>
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.5 }}>+ 上傳自訂 widget</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {widgets.map((w) => (
                  <div key={w.id} style={{
                    background: panel, border: `1px solid ${w.on ? hudTokens.cyanLine : line}`,
                    borderRadius: radius, overflow: 'hidden',
                  }}>
                    <div style={{
                      height: 110, background: '#000', position: 'relative', overflow: 'hidden',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {w.preview}
                      <span style={{
                        position: 'absolute', top: 6, left: 8,
                        fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1,
                        color: '#fff', opacity: 0.5, textTransform: 'uppercase',
                      }}>{w.pos}</span>
                    </div>
                    <div style={{ padding: '12px 14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: text }}>{w.name}</span>
                        <span style={{ marginLeft: 'auto' }}>
                          <SwitchPill on={w.on} accent={accent} line={line} textDim={textDim} />
                        </span>
                      </div>
                      <div style={{ fontSize: 11, color: textDim, lineHeight: 1.5 }}>{w.desc}</div>
                      <div style={{ marginTop: 10, display: 'flex', gap: 6 }}>
                        <ChipBtn line={line} textDim={textDim} text={text}>設定</ChipBtn>
                        <ChipBtn line={line} textDim={textDim} text={text}>預覽</ChipBtn>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right inspector — overlay layout preview */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, overflow: 'auto' }}>
              <HudLabel color={textDim}>佈局預覽</HudLabel>
              <div style={{ marginTop: 10, aspectRatio: '16 / 9', position: 'relative', background: '#000', borderRadius: 4, overflow: 'hidden', border: `1px solid ${line}` }}>
                {/* Fake danmu layer */}
                <div style={{
                  position: 'absolute', inset: 0,
                  fontFamily: hudTokens.fontDisplay, color: '#fff', opacity: 0.4, fontSize: 11,
                }}>
                  <span style={{ position: 'absolute', top: '20%', left: '40%' }}>同意 +1</span>
                  <span style={{ position: 'absolute', top: '38%', left: '12%', color: accent }}>聲音小一點</span>
                  <span style={{ position: 'absolute', top: '60%', left: '55%', color: hudTokens.amber }}>+1</span>
                </div>
                {/* QR widget — left bottom */}
                <div style={{
                  position: 'absolute', left: 8, bottom: 8,
                  width: 56, height: 56, background: '#fff', borderRadius: 4,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: hudTokens.fontMono, fontSize: 8, color: '#000',
                  border: `2px solid ${accent}`,
                }}>QR</div>
                {/* Ticker widget — bottom */}
                <div style={{
                  position: 'absolute', left: 76, right: 8, bottom: 8, height: 22,
                  background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
                  border: `1px solid ${accent}`, borderRadius: 3,
                  display: 'flex', alignItems: 'center', padding: '0 10px',
                  fontFamily: hudTokens.fontMono, fontSize: 9, color: '#fff', letterSpacing: 0.5, overflow: 'hidden',
                }}>★ 感謝 Sponsor A · 中場休息 15 分鐘 · 講者 Q&A 14:30</div>
                {/* Position guides */}
                <div style={{ position: 'absolute', top: 8, left: 8, width: 32, height: 32, border: `1px dashed ${textDim}`, borderRadius: 2 }} />
                <div style={{ position: 'absolute', top: 8, right: 8, width: 32, height: 32, border: `1px dashed ${textDim}`, borderRadius: 2 }} />
                <div style={{ position: 'absolute', bottom: 38, right: 8, width: 80, height: 24, border: `1px dashed ${textDim}`, borderRadius: 2 }} />
              </div>

              <div style={{ marginTop: 14 }}>
                <HudLabel color={textDim}>啟用順序 (z-index)</HudLabel>
                <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <ZIndexRow n={1} on label="跑馬燈 Ticker" pos="底部"   accent={accent} text={text} textDim={textDim} line={line} />
                  <ZIndexRow n={2} on label="QR Carousel"   pos="左下"   accent={accent} text={text} textDim={textDim} line={line} />
                  <ZIndexRow n={3}    label="計時器 Timer"  pos="右上 · 已停用" accent={accent} text={text} textDim={textDim} line={line} dim />
                  <ZIndexRow n={4}    label="活動 Logo"     pos="左上 · 已停用" accent={accent} text={text} textDim={textDim} line={line} dim />
                </div>
              </div>

              <div style={{
                marginTop: 14, padding: '10px 12px', background: hudTokens.cyanSoft,
                border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 4,
                fontSize: 11, color: text, lineHeight: 1.6,
              }}>
                <span style={{ color: accent, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1 }}>TIP</span><br/>
                Widget 不會擋彈幕，會自動避開高密度區域。
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

/* — small widget previews — */
function QrPreviewWidget({ accent }) {
  return (
    <div style={{ position: 'absolute', left: 12, bottom: 12 }}>
      <div style={{ width: 50, height: 50, background: '#fff', borderRadius: 3, border: `2px solid ${accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontFamily: hudTokens.fontMono, color: '#000' }}>QR</div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 8, color: '#fff', textAlign: 'center', marginTop: 3, letterSpacing: 0.5 }}>danmu.im/42</div>
    </div>
  );
}
function TickerPreview({ accent }) {
  return (
    <div style={{
      position: 'absolute', left: 8, right: 8, bottom: 8, height: 18,
      background: 'rgba(0,0,0,0.7)', border: `1px solid ${accent}`, borderRadius: 3,
      display: 'flex', alignItems: 'center', padding: '0 8px',
      fontFamily: hudTokens.fontMono, fontSize: 8, color: '#fff', letterSpacing: 0.4,
    }}>★ 中場休息 15 分鐘 · 講者 Q&A 14:30 · 感謝 Sponsor A</div>
  );
}
function TimerPreview({ accent }) {
  return (
    <div style={{
      position: 'absolute', top: 12, right: 12,
      padding: '8px 14px', background: 'rgba(0,0,0,0.7)',
      border: `1px solid ${accent}`, borderRadius: 4,
      fontFamily: hudTokens.fontDisplay, fontSize: 22, color: accent, letterSpacing: 1,
    }}>04:32</div>
  );
}
function LogoPreview({ text, textDim }) {
  return (
    <div style={{
      position: 'absolute', top: 12, left: 12,
      width: 48, height: 48, borderRadius: 4,
      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.2)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: hudTokens.fontMono, fontSize: 8, color: '#fff', opacity: 0.6,
    }}>LOGO</div>
  );
}
function NowPlayingPreview({ accent, text, textDim }) {
  return (
    <div style={{
      position: 'absolute', right: 8, bottom: 14,
      padding: '6px 12px', background: 'rgba(0,0,0,0.7)',
      border: `1px solid ${accent}`, borderRadius: 4,
      fontFamily: hudTokens.fontMono, fontSize: 9, color: '#fff', letterSpacing: 0.4,
    }}>♪ Aqueous Transmission · Incubus</div>
  );
}
function PollBarPreview({ accent }) {
  return (
    <div style={{
      position: 'absolute', left: 8, right: 8, bottom: 8,
      height: 14, background: 'rgba(0,0,0,0.6)', borderRadius: 7, overflow: 'hidden',
      border: `1px solid ${accent}`,
    }}>
      <div style={{ width: '60%', height: '100%', background: accent, opacity: 0.8 }} />
    </div>
  );
}

function SwitchPill({ on, accent, line, textDim }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      width: 36, height: 18, borderRadius: 999,
      padding: 2,
      background: on ? `${accent}55` : 'transparent',
      border: `1px solid ${on ? accent : line}`,
    }}>
      <span style={{
        width: 12, height: 12, borderRadius: '50%',
        background: on ? accent : textDim,
        marginLeft: on ? 16 : 0, transition: 'all 0.2s',
      }} />
    </span>
  );
}
function ChipBtn({ line, textDim, text, children }) {
  return (
    <span style={{
      padding: '4px 10px', border: `1px solid ${line}`, borderRadius: 3,
      fontFamily: hudTokens.fontMono, fontSize: 10, color: text, letterSpacing: 0.4,
    }}>{children}</span>
  );
}
function ZIndexRow({ n, on, label, pos, accent, text, textDim, line, dim }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '6px 8px', borderRadius: 3,
      background: on ? hudTokens.cyanSoft : 'transparent',
      border: `1px solid ${on ? hudTokens.cyanLine : line}`,
      opacity: dim ? 0.5 : 1,
    }}>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>z{n}</span>
      <span style={{ fontSize: 11, color: text, fontWeight: on ? 500 : 400 }}>{label}</span>
      <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5 }}>{pos}</span>
      <span style={{ color: textDim, fontSize: 11, cursor: 'grab' }}>≡</span>
    </div>
  );
}


/* =================================================================
   4) Audit Log — who changed what, when
   ================================================================= */

function AdminAuditLogPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="audit" title="操作日誌 · Audit Log" en="AUDIT · COMPLIANCE TRAIL" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {
        const events = [
          { t: '14:02:48', who: 'admin', src: '🌐 web',     act: 'UPDATE', target: '速率限制 · FIRE',          before: '5 / 10s',     after: '3 / 10s',      kind: 'config' },
          { t: '14:01:12', who: 'admin', src: '🖥 desktop', act: 'TOGGLE', target: 'Overlay · QR Carousel',     before: 'OFF',         after: 'ON',           kind: 'widget' },
          { t: '13:58:33', who: 'admin', src: '🌐 web',     act: 'BLOCK',  target: 'IP · 100.64.9.47',         before: null,           after: '永久',         kind: 'mod' },
          { t: '13:55:09', who: 'kevin', src: '🌐 web',     act: 'PIN',    target: '訊息 #0042 · 「能錄下來嗎」', before: null,         after: null,           kind: 'msg' },
          { t: '13:42:01', who: 'admin', src: '🌐 web',     act: 'CREATE', target: '投票 · 哪個 demo 想看?',     before: null,         after: '4 個選項',      kind: 'poll' },
          { t: '13:38:55', who: 'admin', src: '🌐 web',     act: 'APPLY',  target: '主題包 · NEON',              before: 'DEFAULT',     after: 'NEON',         kind: 'theme' },
          { t: '13:30:12', who: 'admin', src: '🖥 desktop', act: 'START',  target: '會話 · keynote',             before: null,         after: '開始接收',      kind: 'session' },
          { t: '13:20:44', who: 'admin', src: '🌐 web',     act: 'IMPORT', target: '敏感字清單 · v2',             before: '127 條',     after: '143 條',       kind: 'mod' },
          { t: '12:58:01', who: 'kevin', src: '🌐 web',     act: 'UPDATE', target: '顯示設定 · 速度',             before: '2',           after: '3',            kind: 'config' },
          { t: '12:42:18', who: 'admin', src: '🌐 web',     act: 'LOGIN',  target: '登入',                       before: null,         after: '成功',         kind: 'auth' },
        ];

        const actCol = {
          UPDATE: hudTokens.cyan, TOGGLE: hudTokens.cyan, APPLY: hudTokens.cyan,
          CREATE: hudTokens.lime, START:  hudTokens.lime,
          BLOCK:  hudTokens.crimson, IMPORT: hudTokens.amber,
          PIN:    hudTokens.amber, LOGIN: hudTokens.lime,
        };

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 16, height: '100%', minHeight: 0 }}>
            {/* Filters */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14, overflow: 'auto' }}>
              <FilterGroup label="動作" textDim={textDim}>
                {['全部', 'UPDATE', 'CREATE', 'BLOCK', 'TOGGLE', 'IMPORT', 'PIN', 'LOGIN'].map((a, i) => (
                  <FilterRow key={a} active={i === 0} count={i === 0 ? 247 : [12, 5, 3, 8, 2, 4, 6][i - 1] || 0} accent={accent} text={text} textDim={textDim} line={line}>{a}</FilterRow>
                ))}
              </FilterGroup>
              <FilterGroup label="操作者" textDim={textDim} top>
                <FilterRow active={false} count="247" accent={accent} text={text} textDim={textDim} line={line}>全部</FilterRow>
                <FilterRow active={false} count="183" accent={accent} text={text} textDim={textDim} line={line}>admin</FilterRow>
                <FilterRow active={false} count="64"  accent={accent} text={text} textDim={textDim} line={line}>kevin</FilterRow>
              </FilterGroup>
              <FilterGroup label="時段" textDim={textDim} top>
                <FilterRow active count="247" accent={accent} text={text} textDim={textDim} line={line}>近 24 小時</FilterRow>
                <FilterRow count="——"  accent={accent} text={text} textDim={textDim} line={line}>近 7 天</FilterRow>
                <FilterRow count="——"  accent={accent} text={text} textDim={textDim} line={line}>近 30 天</FilterRow>
                <FilterRow count="——"  accent={accent} text={text} textDim={textDim} line={line}>自訂…</FilterRow>
              </FilterGroup>
              <button style={{
                marginTop: 18, width: '100%',
                padding: '8px 12px', borderRadius: 4,
                border: `1px solid ${line}`, background: 'transparent',
                fontFamily: hudTokens.fontMono, fontSize: 11, color: text, letterSpacing: 0.5,
                cursor: 'pointer',
              }}>↓ 匯出 CSV</button>
            </div>

            {/* Events */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '10px 16px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 12 }}>
                <HudLabel color={textDim}>事件 · 247 筆</HudLabel>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.lime, letterSpacing: 0.5 }}>● 即時</span>
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim }}>保留 90 天 · 每筆 SHA-256 簽章</span>
              </div>
              <div style={{ flex: 1, overflow: 'auto' }}>
                {events.map((e, i) => (
                  <div key={i} style={{
                    padding: '14px 16px', borderBottom: i < events.length - 1 ? `1px solid ${line}` : 'none',
                    display: 'grid', gridTemplateColumns: '90px 90px 130px 1fr 220px',
                    alignItems: 'center', gap: 12, fontSize: 12,
                  }}>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.3 }}>{e.t}</span>
                    <span style={{
                      fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1,
                      padding: '3px 8px', borderRadius: 3,
                      background: `${actCol[e.act]}1c`, color: actCol[e.act],
                      border: `1px solid ${actCol[e.act]}55`,
                      textAlign: 'center', fontWeight: 700,
                    }}>{e.act}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: text }}>
                      <span style={{ width: 22, height: 22, borderRadius: '50%', background: hudTokens.cyanSoft, color: accent, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>{e.who[0].toUpperCase()}</span>
                      <span>{e.who}</span>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.3 }}>{e.src}</span>
                    </span>
                    <span style={{ color: text }}>{e.target}</span>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3 }}>
                      {e.before && (
                        <>
                          <span style={{ color: hudTokens.crimson }}>{e.before}</span>
                          <span style={{ margin: '0 6px' }}>→</span>
                          <span style={{ color: hudTokens.lime }}>{e.after}</span>
                        </>
                      )}
                      {!e.before && e.after && (
                        <span style={{ color: hudTokens.lime }}>{e.after}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}
function FilterGroup({ label, textDim, top, children }) {
  return (
    <div style={{ marginTop: top ? 16 : 0 }}>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim, marginBottom: 8 }}>{label}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>{children}</div>
    </div>
  );
}
function FilterRow({ active, count, accent, text, textDim, line, children }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '5px 10px', borderRadius: 3,
      background: active ? hudTokens.cyanSoft : 'transparent',
      border: `1px solid ${active ? hudTokens.cyanLine : 'transparent'}`,
      fontSize: 12,
    }}>
      <span style={{ color: active ? accent : text }}>{children}</span>
      <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim }}>{count}</span>
    </div>
  );
}

Object.assign(window, {
  AdminMessagesPage, AdminHistoryPage, AdminWidgetsPage, AdminAuditLogPage,
});
