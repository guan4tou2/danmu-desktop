// Batch C — onboarding, about, desktop chrome, viewer thank-you
// (1) Onboarding tour  (2) About / Changelog
// (3) Desktop tray + window picker  (4) Viewer poll thank-you

// =========================================================================
// (1) Onboarding Tour · 第一次進 Dashboard 的氣泡指引
// =========================================================================
function AdminOnboardingTour({ theme = 'dark', step = 1 }) {
  return (
    <AdminPageShell route="dashboard" title="控制台" en="ADMIN LANE · DASHBOARD" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {

        // Steps and their target zones
        const steps = [
          {
            n: 1, total: 5, title: '即時控制台',
            body: '你會在這個頁面看到正在進行的場次概況 — 觀眾數、訊息流、Polls、健康度。所有重要資訊都在第一屏。',
            x: 50, y: 70, w: 660, h: 200,
            tipX: 380, tipY: 290, arrow: 'top',
          },
          {
            n: 2, total: 5, title: '⌘K 命令面板',
            body: '隨時按 ⌘K 開啟。可搜尋訊息、跳到任何頁面、執行快速動作。學會這個就能少點 3/4 的次數。',
            x: 880, y: 18, w: 280, h: 36,
            tipX: 720, tipY: 80, arrow: 'top-right',
          },
          {
            n: 3, total: 5, title: 'Fire Token 整合',
            body: '想接 Slido、OBS、自製 bot? 在「整合」分頁取得 Fire Token,任何工具都能 POST 訊息到你的場次。',
            x: 24, y: 580, w: 200, h: 36,
            tipX: 240, tipY: 540, arrow: 'left',
          },
          {
            n: 4, total: 5, title: '通知中心',
            body: '當 webhook 失敗、quota 接近上限、備份失敗時,會集中在這裡通知。建議養成每天看一次的習慣。',
            x: 1200, y: 18, w: 36, h: 36,
            tipX: 880, tipY: 100, arrow: 'top-right',
          },
          {
            n: 5, total: 5, title: '完成 · 開始使用',
            body: '指引隨時可以從「設定 → 重新顯示提示」叫回來。試著開一個測試場次,看看觀眾發訊息會怎麼跑。',
            x: 0, y: 0, w: 0, h: 0,
            tipX: 540, tipY: 360, arrow: 'center',
          },
        ];
        const cur = steps[step - 1] || steps[0];
        const isCenter = cur.arrow === 'center';

        return (
          <div style={{ position: 'relative', height: '100%', minHeight: 700, overflow: 'hidden' }}>
            {/* Faded dashboard background */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.45, pointerEvents: 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 14, height: '100%' }}>
                {/* Top bar */}
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', padding: 12, background: panel, border: `1px solid ${line}`, borderRadius: radius }}>
                  <span style={{ width: 100, height: 14, background: line, borderRadius: 2 }} />
                  <span style={{ flex: 1 }} />
                  <span style={{ width: 280, height: 28, background: raised, border: `1px solid ${line}`, borderRadius: 3 }} />
                  <span style={{ width: 28, height: 28, background: raised, border: `1px solid ${line}`, borderRadius: '50%' }} />
                </div>
                {/* Hero */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 10 }}>
                  {[1,2,3,4].map(i => (
                    <div key={i} style={{ height: 110, background: panel, border: `1px solid ${line}`, borderRadius: radius }} />
                  ))}
                </div>
                {/* Body grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 10, flex: 1 }}>
                  <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius }} />
                  <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius }} />
                </div>
              </div>
            </div>

            {/* Dim overlay */}
            <div style={{
              position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', pointerEvents: 'none',
              clipPath: isCenter ? 'none' : `polygon(
                0 0, 100% 0, 100% 100%, 0 100%, 0 0,
                ${cur.x}px ${cur.y}px,
                ${cur.x}px ${cur.y + cur.h}px,
                ${cur.x + cur.w}px ${cur.y + cur.h}px,
                ${cur.x + cur.w}px ${cur.y}px,
                ${cur.x}px ${cur.y}px
              )`,
            }} />

            {/* Spotlight ring */}
            {!isCenter && (
              <div style={{
                position: 'absolute', left: cur.x - 4, top: cur.y - 4, width: cur.w + 8, height: cur.h + 8,
                border: `2px solid ${accent}`, borderRadius: 6, pointerEvents: 'none',
                boxShadow: `0 0 0 2px ${accent}33, 0 0 20px ${accent}66`,
                animation: 'pulse 2s ease-in-out infinite',
              }} />
            )}

            {/* Tooltip */}
            <div style={{
              position: 'absolute', left: cur.tipX, top: cur.tipY,
              ...(isCenter ? { transform: 'translate(-50%, -50%)' } : {}),
              width: 360, background: panel, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 6,
              padding: 18, boxShadow: `0 16px 40px rgba(0,0,0,0.45), 0 0 0 1px ${accent}22`,
            }}>
              {/* Tail */}
              {cur.arrow === 'top' && (
                <div style={{ position: 'absolute', top: -8, left: 60, width: 14, height: 14, background: panel, borderTop: `1px solid ${hudTokens.cyanLine}`, borderLeft: `1px solid ${hudTokens.cyanLine}`, transform: 'rotate(45deg)' }} />
              )}
              {cur.arrow === 'top-right' && (
                <div style={{ position: 'absolute', top: -8, right: 30, width: 14, height: 14, background: panel, borderTop: `1px solid ${hudTokens.cyanLine}`, borderLeft: `1px solid ${hudTokens.cyanLine}`, transform: 'rotate(45deg)' }} />
              )}
              {cur.arrow === 'left' && (
                <div style={{ position: 'absolute', left: -8, top: 30, width: 14, height: 14, background: panel, borderTop: `1px solid ${hudTokens.cyanLine}`, borderLeft: `1px solid ${hudTokens.cyanLine}`, transform: 'rotate(-45deg)' }} />
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: accent, letterSpacing: 1.5, padding: '3px 8px', background: hudTokens.cyanSoft, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 2 }}>
                  STEP {cur.n} / {cur.total}
                </span>
                <div style={{ flex: 1, display: 'flex', gap: 3 }}>
                  {steps.map((_, i) => (
                    <span key={i} style={{
                      flex: 1, height: 2,
                      background: i < cur.n ? accent : line,
                      borderRadius: 1,
                    }} />
                  ))}
                </div>
              </div>

              <div style={{ fontSize: 18, color: text, fontWeight: 600, marginBottom: 6, letterSpacing: 0.3 }}>
                {cur.title}
              </div>
              <div style={{ fontSize: 13, color: textDim, lineHeight: 1.6, letterSpacing: 0.2 }}>
                {cur.body}
              </div>

              <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, cursor: 'pointer', letterSpacing: 0.4 }}>跳過導覽</span>
                <div style={{ flex: 1 }} />
                {cur.n > 1 && (
                  <span style={{
                    padding: '8px 14px', color: text, border: `1px solid ${line}`, borderRadius: 3,
                    fontFamily: hudTokens.fontMono, fontSize: 11, cursor: 'pointer', letterSpacing: 0.4,
                  }}>← 上一步</span>
                )}
                <span style={{
                  padding: '8px 16px', background: accent, color: '#000', borderRadius: 3,
                  fontFamily: hudTokens.fontMono, fontSize: 11, cursor: 'pointer', letterSpacing: 0.5, fontWeight: 600,
                }}>{cur.n === cur.total ? '✓ 完成' : '下一步 →'}</span>
              </div>
            </div>

            <style>{`@keyframes pulse { 0%, 100% { box-shadow: 0 0 0 2px ${accent}33, 0 0 20px ${accent}66; } 50% { box-shadow: 0 0 0 4px ${accent}55, 0 0 32px ${accent}aa; } }`}</style>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

// =========================================================================
// (2) About / Version · 版本與授權
// =========================================================================
function AdminAboutPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="about" title="關於 Danmu Fire" en="ADMIN LANE · ABOUT · LICENSE · CHANGELOG" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {

        const changelog = [
          {
            v: '2.4.1', d: '2025-01-22', tag: 'current', notes: [
              { t: 'feat', l: 'Audit Log 加入 SHA-256 簽章,單筆無法竄改' },
              { t: 'feat', l: 'Webhooks 支援 retry policy 自訂(exponential / linear)' },
              { t: 'fix',  l: '修正 Backup 在大型 DB(>2GB) 偶發 checksum 錯誤' },
              { t: 'fix',  l: 'Slido bridge 在 token 旋轉後沒有自動重連' },
            ]
          },
          {
            v: '2.4.0', d: '2025-01-08', tag: '', notes: [
              { t: 'feat', l: '新增 Notifications inbox · 集中所有警示' },
              { t: 'feat', l: 'API Tokens 支援多把 + scope 權限' },
              { t: 'feat', l: '跨場次訊息搜尋 + 進階 operators' },
              { t: 'perf', l: '訊息列表 virtualized · 1 萬筆滑順 60fps' },
            ]
          },
          {
            v: '2.3.4', d: '2024-12-19', tag: '', notes: [
              { t: 'fix', l: '修正 Overlay 在多螢幕配置下 mouse passthrough 失效' },
              { t: 'fix', l: 'WCAG checker 漏掉 disabled 狀態的對比度' },
            ]
          },
          {
            v: '2.3.0', d: '2024-12-02', tag: '', notes: [
              { t: 'feat', l: '主題包(Theme Packs) · Lab Cyan / Sunset Orange / Mono' },
              { t: 'feat', l: '速率限制 · 觀眾分群 + 慢動作模式' },
              { t: 'feat', l: '指紋(fingerprint)系統取代 IP 為主的 ban 機制' },
            ]
          },
        ];

        const tagCol = { feat: hudTokens.lime, fix: accent, perf: hudTokens.amber, breaking: hudTokens.crimson };

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, height: '100%', minHeight: 0 }}>
            {/* LEFT — version + license */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, overflow: 'auto' }}>
              {/* Big version card */}
              <div style={{
                background: panel, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: radius,
                padding: 24, position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', right: -40, top: -40, width: 240, height: 240,
                  background: `radial-gradient(circle, ${accent}22, transparent 70%)`, pointerEvents: 'none',
                }} />
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: 12, background: hudTokens.cyanSoft, color: accent,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36,
                    border: `1px solid ${hudTokens.cyanLine}`,
                  }}>▲</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 28, fontWeight: 700, color: text, letterSpacing: 0.5 }}>Danmu Fire</div>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 13, color: accent, letterSpacing: 0.5, marginTop: 4 }}>v2.4.1 · "Cinder"</div>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, marginTop: 6, letterSpacing: 0.3 }}>
                      Build 2025.01.22.143 · production · stable channel
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                  {[
                    { k: '版本狀態',    icon: '✓', iconCol: hudTokens.lime, v: '最新' },
                    { k: '上次檢查',    icon: '↻', iconCol: textDim,        v: '12 分鐘前' },
                    { k: 'Server uptime', icon: '●', iconCol: hudTokens.lime, v: '14d 6h' },
                    { k: '授權 · License', icon: '◆', iconCol: textDim,      v: 'Pro · 2026-08' },
                  ].map((c, i) => (
                    <div key={i} style={{ padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 3, minHeight: 64, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1, textTransform: 'uppercase' }}>{c.k}</div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
                        <span style={{ color: c.iconCol, fontSize: 12, lineHeight: 1, width: 12, textAlign: 'left' }}>{c.icon}</span>
                        <span style={{ color: text, fontSize: 14, fontWeight: 600, letterSpacing: 0.2, lineHeight: 1.1 }}>{c.v}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 14, display: 'flex', gap: 6 }}>
                  <span style={{ flex: 1, padding: '8px', textAlign: 'center', background: hudTokens.cyanSoft, color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 11, cursor: 'pointer', letterSpacing: 0.4 }}>↻ 檢查更新</span>
                  <span style={{ flex: 1, padding: '8px', textAlign: 'center', color: text, border: `1px solid ${line}`, borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 11, cursor: 'pointer', letterSpacing: 0.4 }}>📋 複製版本資訊</span>
                </div>
              </div>

              {/* License */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
                <HudLabel color={textDim}>授權 · Pro Edition</HudLabel>
                <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {[
                    { k: '組織',         v: 'ACME Studio Ltd.' },
                    { k: '授權人數',     v: '無限' },
                    { k: '同時場次',     v: '20' },
                    { k: '到期',         v: '2026-08-14' },
                    { k: '授權類型',     v: 'Annual · 訂閱' },
                    { k: '客戶 ID',      v: 'cust_8d7e3f' },
                  ].map((p, i) => (
                    <div key={i} style={{
                      padding: '6px 8px', background: raised, border: `1px solid ${line}`, borderRadius: 2,
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>{p.k}</span>
                      <span style={{ fontSize: 11, color: text, fontWeight: 500 }}>{p.v}</span>
                    </div>
                  ))}
                </div>
                <div style={{
                  marginTop: 10, padding: 8, background: `${accent}10`, border: `1px solid ${accent}55`, borderRadius: 3,
                  fontSize: 11, color: text, lineHeight: 1.5, letterSpacing: 0.2,
                }}>
                  距離到期還有 <span style={{ color: accent, fontWeight: 600 }}>567 天</span>。在到期前 30 天會自動提醒。
                </div>
              </div>

              {/* Third party */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
                <HudLabel color={textDim}>第三方授權 · OSS Notices</HudLabel>
                <div style={{ marginTop: 10, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, lineHeight: 1.7, letterSpacing: 0.3 }}>
                  {[
                    { n: 'React',          v: '18.3.1', l: 'MIT' },
                    { n: 'better-sqlite3', v: '11.5.0', l: 'MIT' },
                    { n: 'fastify',        v: '4.26.2', l: 'MIT' },
                    { n: 'pino',           v: '9.5.0',  l: 'MIT' },
                    { n: 'date-fns',       v: '4.1.0',  l: 'MIT' },
                    { n: 'electron',       v: '32.2.5', l: 'MIT' },
                    { n: 'tldraw',         v: '2.4.0',  l: 'Apache-2.0' },
                  ].map((p, i) => (
                    <div key={i} style={{
                      display: 'grid', gridTemplateColumns: '1fr 80px 80px', gap: 8, padding: '4px 0',
                      borderBottom: i < 6 ? `1px dashed ${line}` : 'none',
                    }}>
                      <span style={{ color: text }}>{p.n}</span>
                      <span style={{ textAlign: 'right' }}>{p.v}</span>
                      <span style={{ color: hudTokens.lime, textAlign: 'right' }}>{p.l}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 8, fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 0.3, cursor: 'pointer' }}>查看完整授權清單(247 個套件) →</div>
              </div>
            </div>

            {/* RIGHT — Changelog */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <HudLabel color={textDim}>更新紀錄 · Changelog</HudLabel>
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, cursor: 'pointer', letterSpacing: 0.4 }}>查看完整紀錄 →</span>
              </div>

              {changelog.map((cl, i) => (
                <div key={i} style={{ marginBottom: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 16, color: text, fontWeight: 700, letterSpacing: 0.5 }}>v{cl.v}</span>
                    {cl.tag && (
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: accent, letterSpacing: 1.2, padding: '2px 8px', background: hudTokens.cyanSoft, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 2 }}>
                        ● 目前版本
                      </span>
                    )}
                    <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.3 }}>{cl.d}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingLeft: 6, borderLeft: `2px solid ${line}` }}>
                    {cl.notes.map((n, j) => (
                      <div key={j} style={{ display: 'grid', gridTemplateColumns: '50px 1fr', gap: 8, padding: '4px 0 4px 8px' }}>
                        <span style={{
                          fontFamily: hudTokens.fontMono, fontSize: 9, color: tagCol[n.t], letterSpacing: 1,
                          padding: '2px 0', textAlign: 'center', background: `${tagCol[n.t]}1c`, border: `1px solid ${tagCol[n.t]}55`, borderRadius: 2,
                        }}>{n.t.toUpperCase()}</span>
                        <span style={{ fontSize: 12, color: text, lineHeight: 1.5, letterSpacing: 0.2 }}>{n.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div style={{
                marginTop: 'auto', padding: 12, background: raised, border: `1px solid ${line}`, borderRadius: 3,
                fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, lineHeight: 1.7, letterSpacing: 0.3,
              }}>
                <div style={{ color: text, marginBottom: 6 }}>有問題?</div>
                <div>📖 <span style={{ color: accent, cursor: 'pointer' }}>docs.danmu.fire</span></div>
                <div>💬 <span style={{ color: accent, cursor: 'pointer' }}>support@danmu.fire</span></div>
                <div>🐛 <span style={{ color: accent, cursor: 'pointer' }}>github.com/danmufire/issues</span></div>
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

// =========================================================================
// (3) Desktop Tray + Window Picker
// =========================================================================
function DesktopTrayPopover({ theme = 'dark' }) {
  const dark = theme !== 'light';
  const bg = dark ? '#0A0E1A' : '#F2F4F7';
  const panel = dark ? '#0F1421' : '#FFFFFF';
  const raised = dark ? '#13192C' : '#F7F9FC';
  const text = dark ? '#E6E8EE' : '#0F1421';
  const textDim = dark ? '#9aa4b2' : '#5b6478';
  const line = dark ? '#1F2944' : '#D9DEE8';
  const accent = hudTokens.cyan;

  return (
    <div style={{
      width: 1200, height: 780, background: '#1a1d24',
      backgroundImage: 'radial-gradient(circle at 30% 20%, #2d3748 0, #0a0d12 70%)',
      position: 'relative', fontFamily: hudTokens.font, color: text,
      overflow: 'hidden',
    }}>
      {/* Fake macOS desktop wallpaper */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1e3a8a, #581c87, #831843)', opacity: 0.7 }} />

      {/* Menu bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 28,
        background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(20px)',
        display: 'flex', alignItems: 'center', padding: '0 14px', gap: 18, fontSize: 13, color: '#fff',
      }}>
        <span style={{ fontSize: 16, fontWeight: 600 }}>⌘</span>
        <span style={{ fontWeight: 600 }}>Danmu Fire</span>
        <span style={{ opacity: 0.8 }}>File</span>
        <span style={{ opacity: 0.8 }}>Edit</span>
        <span style={{ opacity: 0.8 }}>View</span>
        <span style={{ opacity: 0.8 }}>Window</span>
        <span style={{ opacity: 0.8 }}>Help</span>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: 11, opacity: 0.85 }}>🔋</span>
        <span style={{ fontSize: 11, opacity: 0.85 }}>📶</span>
        {/* Tray icon highlighted */}
        <div style={{
          width: 22, height: 22, borderRadius: 4, background: hudTokens.cyanSoft,
          border: `1px solid ${accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: accent, fontSize: 13, position: 'relative',
        }}>
          ▲
          <span style={{
            position: 'absolute', top: -2, right: -2, width: 8, height: 8,
            background: hudTokens.lime, borderRadius: '50%', boxShadow: `0 0 4px ${hudTokens.lime}`,
          }} />
        </div>
        <span style={{ fontSize: 11, opacity: 0.85 }}>Wed 14:02</span>
      </div>

      {/* Tray popover — anchored to tray icon */}
      <div style={{
        position: 'absolute', top: 38, right: 70, width: 340,
        background: panel, border: `1px solid ${line}`, borderRadius: 8,
        boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.4)',
        overflow: 'hidden',
      }}>
        {/* Tail pointer */}
        <div style={{
          position: 'absolute', top: -6, right: 50, width: 12, height: 12,
          background: panel, borderTop: `1px solid ${line}`, borderLeft: `1px solid ${line}`,
          transform: 'rotate(45deg)',
        }} />

        {/* Header */}
        <div style={{ padding: '12px 14px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: hudTokens.lime, boxShadow: `0 0 6px ${hudTokens.lime}` }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: text }}>已連線到 138.2.59.206:4000</div>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.lime, marginTop: 2, letterSpacing: 0.3 }}>● 287 viewers · 64 msg/min</div>
          </div>
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, padding: '2px 6px', background: raised, border: `1px solid ${line}`, borderRadius: 2, letterSpacing: 0.4 }}>v2.4.1</span>
        </div>

        {/* Live mini stats */}
        <div style={{ padding: 14, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, borderBottom: `1px solid ${line}` }}>
          {[
            { k: 'MSGS', v: '1,287', c: hudTokens.lime },
            { k: 'POLLS', v: '1', c: accent },
            { k: 'BLOCKED', v: '3', c: hudTokens.amber },
          ].map((s, i) => (
            <div key={i} style={{ padding: 8, background: raised, border: `1px solid ${line}`, borderRadius: 3, textAlign: 'center' }}>
              <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1 }}>{s.k}</div>
              <div style={{ color: s.c, fontSize: 16, fontWeight: 600, marginTop: 2 }}>{s.v}</div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div style={{ padding: '8px 0' }}>
          {[
            { i: '⚡', l: '快速啟動 Overlay',     sub: 'Display 2 · 1920×1080', shortcut: '⌘⇧O' },
            { i: '⏸',  l: '暫停接收訊息',         sub: '慢動作模式',             shortcut: '⌘⇧P' },
            { i: '✦',  l: '啟動 Poll',             sub: '3 個草稿',               shortcut: '⌘⇧V' },
            { i: '⌘K', l: '開啟命令面板',         sub: '搜尋訊息 / 跳到任何頁',  shortcut: '⌘K' },
          ].map((a, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '32px 1fr auto', gap: 10, padding: '8px 14px', alignItems: 'center',
              cursor: 'pointer',
              background: i === 0 ? hudTokens.cyanSoft : 'transparent',
            }}>
              <span style={{
                width: 28, height: 28, borderRadius: 4, background: raised, border: `1px solid ${line}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: i === 0 ? accent : text, fontSize: 12, fontFamily: hudTokens.fontMono,
              }}>{a.i}</span>
              <div>
                <div style={{ fontSize: 12, color: text, letterSpacing: 0.2 }}>{a.l}</div>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 1, letterSpacing: 0.3 }}>{a.sub}</div>
              </div>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, padding: '2px 6px', background: raised, border: `1px solid ${line}`, borderRadius: 2, letterSpacing: 0.4 }}>{a.shortcut}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          padding: '10px 14px', borderTop: `1px solid ${line}`,
          display: 'flex', alignItems: 'center', gap: 8, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4,
        }}>
          <span style={{ cursor: 'pointer' }}>顯示主視窗</span>
          <span>·</span>
          <span style={{ cursor: 'pointer' }}>偏好設定</span>
          <div style={{ flex: 1 }} />
          <span style={{ color: hudTokens.crimson, cursor: 'pointer' }}>結束 Q</span>
        </div>
      </div>
    </div>
  );
}

function DesktopWindowPicker({ theme = 'dark' }) {
  const text = '#E6E8EE';
  const textDim = '#9aa4b2';
  const line = '#1F2944';
  const accent = hudTokens.cyan;

  // Mock detected windows
  const windows = [
    { app: 'Keynote',   title: 'Q1 OKR Town Hall.key — 第 14 頁',     w: 1920, h: 1080, tag: 'recommended', icon: '🎬' },
    { app: 'Chrome',    title: 'Slido — Q1 All-Hands · 主持人',        w: 1440, h: 900,  tag: 'browser',     icon: '🌐' },
    { app: 'Zoom',      title: 'Q1 OKR Town Hall · Zoom Meeting',      w: 1280, h: 720,  tag: 'video',       icon: '📹' },
    { app: 'OBS',       title: 'OBS · Scene · Main Stream',            w: 1920, h: 1080, tag: 'broadcast',   icon: '🎙' },
    { app: 'Display 1', title: 'Built-in Display · 內建',              w: 2560, h: 1600, tag: 'screen',      icon: '🖥' },
    { app: 'Display 2', title: 'Studio Display · 4K',                  w: 3840, h: 2160, tag: 'screen',      icon: '🖥' },
  ];

  return (
    <div style={{
      width: 1100, height: 760, background: '#0A0E1A', color: text, fontFamily: hudTokens.font,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      {/* macOS chrome */}
      <div style={{ height: 34, background: '#1A1F2E', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10 }}>
        <div style={{ display: 'flex', gap: 7 }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <span style={{ flex: 1, textAlign: 'center', fontSize: 13, color: text, fontWeight: 500 }}>選擇 Overlay 來源視窗</span>
      </div>

      <div style={{ flex: 1, padding: 24, overflow: 'auto' }}>
        <div style={{ marginBottom: 6 }}>
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: accent, letterSpacing: 1.5 }}>OVERLAY · WINDOW PICKER</span>
        </div>
        <div style={{ fontSize: 22, fontWeight: 600, color: text, letterSpacing: 0.3, marginBottom: 4 }}>選擇要顯示彈幕的螢幕或視窗</div>
        <div style={{ fontSize: 13, color: textDim, lineHeight: 1.6, marginBottom: 20 }}>
          觀眾的訊息會疊在這個視窗上方。建議選擇你正在分享或投影的內容。
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {windows.map((w, i) => {
            const selected = i === 0;
            const tagColMap = { recommended: hudTokens.lime, browser: accent, video: '#a78bfa', broadcast: hudTokens.amber, screen: textDim };
            const tagLabelMap = { recommended: '★ 建議', browser: '瀏覽器', video: '視訊', broadcast: '直播', screen: '整個螢幕' };
            const tagC = tagColMap[w.tag];
            return (
              <div key={i} style={{
                background: selected ? hudTokens.cyanSoft : '#0F1421',
                border: `1px solid ${selected ? accent : line}`,
                borderRadius: 6, overflow: 'hidden', cursor: 'pointer',
                boxShadow: selected ? `0 0 0 2px ${accent}33, 0 8px 24px ${accent}22` : 'none',
              }}>
                {/* Mini preview */}
                <div style={{
                  aspectRatio: `${w.w} / ${w.h}`, background: '#000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                }}>
                  {/* Fake window content based on app */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: w.app === 'Keynote' ? 'linear-gradient(135deg, #1e3a8a, #0c4a6e)' :
                               w.app === 'Chrome' ? '#fff' :
                               w.app === 'Zoom' ? '#1A1F2E' :
                               w.app === 'OBS' ? '#0c0e12' :
                               'linear-gradient(135deg, #4338ca, #be185d)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {w.app === 'Keynote' && <div style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>Q1 OKR Highlights</div>}
                    {w.app === 'Chrome' && <div style={{ color: '#0f172a', fontSize: 14 }}>Slido · 14 questions</div>}
                    {w.app === 'Zoom' && (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4, padding: 16, width: '100%', height: '100%' }}>
                        {[1,2,3,4,5,6].map(n => <div key={n} style={{ background: '#374151', borderRadius: 3 }} />)}
                      </div>
                    )}
                    {w.app === 'OBS' && (
                      <div style={{ color: '#f87171', fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 0.5 }}>● REC 23:14</div>
                    )}
                  </div>
                  {selected && (
                    <div style={{
                      position: 'absolute', top: 8, right: 8,
                      width: 24, height: 24, borderRadius: '50%', background: accent, color: '#000',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700,
                    }}>✓</div>
                  )}
                </div>
                <div style={{ padding: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <span style={{ fontSize: 14 }}>{w.icon}</span>
                    <span style={{ fontSize: 13, color: text, fontWeight: 600 }}>{w.app}</span>
                    <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9, color: tagC, letterSpacing: 0.6, padding: '2px 6px', background: `${tagC}1c`, border: `1px solid ${tagC}55`, borderRadius: 2 }}>
                      {tagLabelMap[w.tag]}
                    </span>
                  </div>
                  <div style={{ fontSize: 11, color: textDim, lineHeight: 1.4, height: 30, overflow: 'hidden' }}>{w.title}</div>
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 4, letterSpacing: 0.3 }}>{w.w}×{w.h}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          marginTop: 20, padding: 12, background: '#0F1421', border: `1px solid ${line}`, borderRadius: 4,
          display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: textDim,
        }}>
          <span style={{ color: accent, fontSize: 14 }}>ℹ</span>
          <span style={{ flex: 1 }}>找不到要分享的視窗?確認該 app 已開啟,或點「重新掃描」。</span>
          <span style={{ padding: '4px 10px', color: text, border: `1px solid ${line}`, borderRadius: 2, fontFamily: hudTokens.fontMono, fontSize: 10, cursor: 'pointer', letterSpacing: 0.4 }}>↻ 重新掃描</span>
        </div>
      </div>

      <div style={{ padding: 16, borderTop: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.4 }}>已選擇 · Keynote · 1920×1080</span>
        <div style={{ flex: 1 }} />
        <span style={{ padding: '8px 16px', color: text, border: `1px solid ${line}`, borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 12, cursor: 'pointer' }}>取消</span>
        <span style={{ padding: '8px 20px', background: accent, color: '#000', borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 12, cursor: 'pointer', fontWeight: 600, letterSpacing: 0.5 }}>啟動 Overlay →</span>
      </div>
    </div>
  );
}

// =========================================================================
// (4) Viewer Poll Thank-You
// =========================================================================
function ViewerPollThankYou({ theme = 'dark' }) {
  const dark = theme !== 'light';
  const bg = dark ? '#0A0E1A' : '#F2F4F7';
  const panel = dark ? '#0F1421' : '#FFFFFF';
  const text = dark ? '#E6E8EE' : '#0F1421';
  const textDim = dark ? '#9aa4b2' : '#5b6478';
  const line = dark ? '#1F2944' : '#D9DEE8';
  const accent = hudTokens.cyan;

  return (
    <div style={{
      width: 375, height: 812, background: bg, color: text, fontFamily: hudTokens.font,
      display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative',
    }}>
      {/* Status bar */}
      <div style={{
        height: 44, padding: '0 24px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        fontSize: 14, fontWeight: 600, color: text, paddingBottom: 4,
      }}>
        <span>14:18</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11 }}>
          <span>📶</span>
          <span style={{ width: 24, height: 11, border: `1px solid ${text}`, borderRadius: 2, padding: 1 }}>
            <span style={{ display: 'block', height: '100%', width: '70%', background: text, borderRadius: 1 }} />
          </span>
        </span>
      </div>

      {/* Header */}
      <div style={{ padding: '8px 16px 12px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 16, color: textDim }}>‹</span>
        <div style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>Q1 OKR Town Hall</div>
        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.lime, letterSpacing: 0.5, padding: '2px 6px', background: `${hudTokens.lime}1c`, border: `1px solid ${hudTokens.lime}55`, borderRadius: 2 }}>● LIVE</span>
      </div>

      {/* Body — Thank-you state */}
      <div style={{
        flex: 1, padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        {/* Big check */}
        <div style={{
          width: 96, height: 96, borderRadius: '50%',
          background: hudTokens.cyanSoft, border: `2px solid ${accent}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: accent, fontSize: 48,
          boxShadow: `0 0 40px ${accent}55, inset 0 0 24px ${accent}22`,
          marginBottom: 18, position: 'relative',
        }}>
          ✓
          {/* Concentric rings */}
          <div style={{ position: 'absolute', inset: -10, borderRadius: '50%', border: `1px solid ${accent}55` }} />
          <div style={{ position: 'absolute', inset: -22, borderRadius: '50%', border: `1px solid ${accent}22` }} />
        </div>

        <div style={{ fontSize: 22, fontWeight: 700, color: text, letterSpacing: 0.3, textAlign: 'center', marginBottom: 6 }}>
          已送出投票
        </div>
        <div style={{ fontSize: 13, color: textDim, lineHeight: 1.6, textAlign: 'center', marginBottom: 20, maxWidth: 280 }}>
          結果會在主持人關閉投票後一起公佈,不會即時顯示。
        </div>

        {/* Recap card */}
        <div style={{
          width: '100%', padding: 16, background: panel, border: `1px solid ${line}`, borderRadius: 8,
          marginBottom: 16,
        }}>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1.2, marginBottom: 6 }}>你的選擇</div>
          <div style={{ fontSize: 14, color: text, lineHeight: 1.5, fontWeight: 600, marginBottom: 12 }}>
            你對本季 OKR 達成率的整體滿意度?
          </div>
          <div style={{
            padding: '10px 12px', background: hudTokens.cyanSoft, border: `1px solid ${accent}`, borderRadius: 4,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{
              width: 20, height: 20, borderRadius: '50%', background: accent, color: '#000',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700,
            }}>✓</span>
            <span style={{ flex: 1, fontSize: 14, color: text, fontWeight: 600 }}>非常滿意</span>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>14:16:32</span>
          </div>

          <div style={{ marginTop: 10, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, lineHeight: 1.6, letterSpacing: 0.3 }}>
            <span style={{ color: hudTokens.lime }}>●</span> 投票已記錄 · 不可重投<br/>
            <span style={{ color: textDim }}>●</span> 還有 <span style={{ color: text }}>13 分鐘</span> 投票時間
          </div>
        </div>

        {/* Live count */}
        <div style={{
          width: '100%', padding: 14, background: panel, border: `1px solid ${line}`, borderRadius: 8,
          marginBottom: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: hudTokens.lime, boxShadow: `0 0 4px ${hudTokens.lime}` }} />
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>已參與</span>
            <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.lime, fontWeight: 600 }}>248 / 287</span>
          </div>
          <div style={{ height: 4, background: line, borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ width: '86.4%', height: '100%', background: `linear-gradient(90deg, ${hudTokens.lime}, ${accent})`, boxShadow: `0 0 8px ${hudTokens.lime}66` }} />
          </div>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 6, letterSpacing: 0.3 }}>
            86.4% 觀眾已投票 · 結果將在 13m 後公佈
          </div>
        </div>

        {/* Continue */}
        <button style={{
          width: '100%', padding: '14px', background: accent, color: '#000', border: 'none', borderRadius: 8,
          fontSize: 14, fontWeight: 600, fontFamily: hudTokens.font, letterSpacing: 0.4, cursor: 'pointer',
          boxShadow: `0 4px 16px ${accent}55`,
        }}>
          ← 回到聊天
        </button>

        <div style={{ marginTop: 14, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3 }}>
          記錄編號 vote_8d7e3f · fp_a3f2…b9c1
        </div>
      </div>

      {/* Home indicator */}
      <div style={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', width: 134, height: 5, background: text, borderRadius: 3, opacity: 0.4 }} />
    </div>
  );
}

Object.assign(window, { AdminOnboardingTour, AdminAboutPage, DesktopTrayPopover, DesktopWindowPicker, ViewerPollThankYou });
