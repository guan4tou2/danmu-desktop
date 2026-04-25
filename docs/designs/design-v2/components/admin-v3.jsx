// AdminV3SoftHolo (Dashboard) — now wrapped in AdminPageShell so the
// sidebar / topbar chrome, telemetry, and topbar action rail match every
// other admin sub-page (Effects / Plugins / Fonts / System / Moderation /
// Display Settings / Theme Packs / Rate Limits).
//
// The body below = KPI strip + Polls-in-progress + Poll builder +
// Messages stream + Widgets & Plugins grid.

function AdminV3SoftHolo({ density = 'comfy', theme = 'dark' }) {
  return (
    <AdminPageShell
      route="dashboard"
      title="控制台"
      en="DASHBOARD · 直播進行中"
      theme={theme}
    >
      {({ panel, raised, line, text, textDim, accent, radius }) => {
        const pad = 18;
        return (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: pad }}>
            {/* KPI strip */}
            <div style={{
              gridColumn: 'span 12',
              background: panel, borderRadius: radius, border: `1px solid ${line}`,
              padding: pad, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: pad,
            }}>
              <KpiTile label="訊息總數" en="MESSAGES" value="1,284" delta="+12% / min" deltaColor={hudTokens.lime} accent={text} textDim={textDim} bars={[12, 18, 25, 22, 31, 28, 42, 38, 55, 48, 62, 78]} />
              <KpiTile label="高峰/分鐘" en="PEAK" value="86" delta="於 22:41" deltaColor={textDim} accent={text} textDim={textDim} bars={[20, 35, 28, 48, 42, 62, 55, 86, 70, 65, 58, 60]} />
            </div>

            {/* Polls in-progress */}
            <div style={{ gridColumn: 'span 7', background: panel, borderRadius: radius, border: `1px solid ${line}`, padding: pad, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>進行中投票</div>
                <HudLabel color={textDim}>POLL · 觀眾已同步</HudLabel>
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.magenta, letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <StatusDot color={hudTokens.magenta} size={6} />01:24 剩餘
                </span>
              </div>
              <div style={{ fontSize: 13, marginTop: 12, marginBottom: 10, color: text }}>你對今日主題的熟悉程度?</div>
              {[
                { k: 'A', label: '完全陌生', v: 18 },
                { k: 'B', label: '聽過沒用過', v: 56, winner: true },
                { k: 'C', label: '用過一些', v: 22 },
                { k: 'D', label: '深度使用', v: 4 },
              ].map(o => (
                <div key={o.k} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <span style={{
                      width: 22, height: 22, borderRadius: 4,
                      background: o.winner ? accent : raised,
                      color: o.winner ? '#000' : text,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: hudTokens.fontMono, fontSize: 11, fontWeight: 700,
                    }}>{o.k}</span>
                    <span style={{ fontSize: 12, flex: 1 }}>{o.label}</span>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 600, color: o.winner ? accent : text }}>{o.v}%</span>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, width: 36, textAlign: 'right' }}>{Math.round(o.v * 2.31)} 票</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: raised, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${o.v}%`, background: o.winner ? accent : hudTokens.cyanLine, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 4, padding: 8, background: raised, borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5, display: 'flex', justifyContent: 'space-between' }}>
                <span>TOTAL · 231 票</span>
                <span>觀眾輸入 A B C D 即可投票</span>
              </div>
              <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
                <button style={{ flex: 1, padding: '8px', borderRadius: radius, border: `1px solid ${line}`, background: 'transparent', color: text, cursor: 'pointer', fontSize: 12 }}>延長 30s</button>
                <button style={{ flex: 1, padding: '8px', borderRadius: radius, border: `1px solid ${line}`, background: 'transparent', color: text, cursor: 'pointer', fontSize: 12 }}>暫停</button>
                <button style={{ flex: 1, padding: '8px', borderRadius: radius, border: `1px solid ${accent}`, background: hudTokens.cyanSoft, color: accent, cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>結束 & 公布</button>
              </div>
            </div>

            {/* Quick poll builder (see /polls for multi-question builder) */}
            <div style={{ gridColumn: 'span 5', background: panel, borderRadius: radius, border: `1px solid ${line}`, padding: pad, display: 'flex', flexDirection: 'column' }}>
              <CardHeader title="快速投票" en="QUICK POLL · 單題 · 2–6 選項" textDim={textDim} right={
                <a style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 1, textDecoration: 'none', cursor: 'pointer' }}>多題 builder →</a>
              } />
              <input placeholder="問題文字…" style={{
                marginTop: 12, padding: '10px 12px', borderRadius: radius, background: raised,
                border: `1px solid ${line}`, color: text, fontFamily: hudTokens.fontSans, fontSize: 13, outline: 'none',
              }} />
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {['A', 'B', 'C', 'D'].map((k, i) => (
                  <div key={k} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{
                      width: 26, height: 26, borderRadius: 4, background: raised, color: text,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: hudTokens.fontMono, fontSize: 11, fontWeight: 700,
                    }}>{k}</span>
                    <input placeholder={`選項 ${k}`} style={{
                      flex: 1, padding: '7px 10px', borderRadius: 4, background: 'transparent',
                      border: `1px solid ${line}`, color: text, fontSize: 12, outline: 'none', fontFamily: hudTokens.fontSans,
                    }} />
                    {i >= 2 && <span style={{ color: textDim, cursor: 'pointer', fontSize: 14 }}>✕</span>}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 8, fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 1, cursor: 'pointer' }}>+ 新增選項</div>
              <div style={{ marginTop: 'auto', paddingTop: 14, display: 'flex', gap: 8 }}>
                <select style={{
                  padding: '8px 10px', borderRadius: radius, background: raised,
                  border: `1px solid ${line}`, color: text, fontFamily: hudTokens.fontMono, fontSize: 11,
                }}>
                  <option>時限 90s</option><option>時限 3 分</option><option>無時限</option>
                </select>
                <button style={{ marginLeft: 'auto', padding: '8px 18px', borderRadius: radius, border: `1px solid ${accent}`, background: accent, color: '#000', cursor: 'pointer', fontSize: 12, fontWeight: 700, fontFamily: hudTokens.fontMono, letterSpacing: 1 }}>START ▶</button>
              </div>
            </div>

            {/* Messages stream */}
            <div style={{ gridColumn: 'span 7', background: panel, borderRadius: radius, border: `1px solid ${line}`, display: 'flex', flexDirection: 'column', minHeight: 300 }}>
              <div style={{ padding: '14px 16px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>即時訊息</span>
                <HudLabel color={textDim}>STREAM · 可封鎖 / 標記</HudLabel>
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 1 }}>▶ AUTO</span>
              </div>
              <div style={{ padding: 8, display: 'flex', gap: 6, borderBottom: `1px solid ${line}`, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1 }}>
                {['全部', 'Q&A', 'Poll 投票', '已遮罩', '已回覆'].map((f, i) => (
                  <span key={f} style={{
                    padding: '4px 10px', borderRadius: 4,
                    border: `1px solid ${i === 0 ? accent : line}`,
                    color: i === 0 ? accent : textDim, cursor: 'pointer',
                  }}>{f}</span>
                ))}
              </div>
              <div style={{ flex: 1, overflow: 'auto', fontFamily: hudTokens.fontMono, fontSize: 12 }}>
                {[
                  { time: '14:02:11', tag: 'Q&A', tagColor: hudTokens.magenta, text: '請問這個設計在百萬級 DAU 怎麼處理?', user: '@dev_kun', ip: '192.168.1.42' },
                  { time: '14:02:09', tag: 'POLL·B', tagColor: accent, text: '投票: 聽過沒用過', user: '@alice', ip: '10.0.0.88' },
                  { time: '14:02:07', tag: 'MSG', tagColor: textDim, text: '🔥🔥🔥 這段很猛', user: '@hype_fan', ip: '192.168.1.23' },
                  { time: '14:02:04', tag: 'Q&A', tagColor: hudTokens.magenta, text: 'cache 那頁可以停留久一點嗎', user: '@mei', ip: '192.168.1.17' },
                  { time: '14:01:58', tag: 'FLAG', tagColor: hudTokens.crimson, text: '[已由 filter.py 遮罩]', user: '@anon', ip: '10.0.0.4' },
                  { time: '14:01:52', tag: 'MSG', tagColor: textDim, text: '投影片在哪裡能看到?', user: '@student01', ip: '192.168.1.59' },
                  { time: '14:01:48', tag: 'MSG', tagColor: textDim, text: '+1 同意上一位', user: '@pm_sara', ip: '192.168.1.71' },
                ].map((m, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '62px 74px 1fr auto',
                    padding: '8px 14px', gap: 10, alignItems: 'center',
                    borderBottom: `1px solid ${line}`,
                  }}>
                    <span style={{ color: textDim, fontSize: 10 }}>{m.time}</span>
                    <span style={{ color: m.tagColor, fontSize: 10, letterSpacing: 1 }}>{m.tag}</span>
                    <div>
                      <div style={{ color: text, fontFamily: hudTokens.fontSans, fontSize: 12 }}>{m.text}</div>
                      <div style={{ color: textDim, fontSize: 10, marginTop: 2 }}>{m.user} · {m.ip}</div>
                    </div>
                    <span style={{ color: textDim, cursor: 'pointer', fontSize: 14 }}>⋯</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Widgets + Plugins */}
            <div style={{ gridColumn: 'span 5', background: panel, borderRadius: radius, border: `1px solid ${line}`, padding: pad }}>
              <CardHeader title="Widgets & Plugins" en="OBS WIDGETS · SERVER PLUGINS · 熱重載" textDim={textDim} right={
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 1, cursor: 'pointer' }}>+ 新增</span>
              } />
              <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {[
                  { title: '分數板', kind: 'WIDGET', running: true, uptime: '02:41', cat: 'OBS' },
                  { title: '跑馬燈', kind: 'WIDGET', running: true, uptime: '02:41', cat: 'OBS' },
                  { title: '敏感字過濾', kind: 'PLUGIN.py', running: true, uptime: '2d 14h', cat: 'Server' },
                  { title: 'AI 自動回覆', kind: 'PLUGIN.py', paused: true, uptime: '—', cat: 'Server' },
                ].map(w => {
                  const statusColor = w.running ? hudTokens.lime : w.paused ? hudTokens.amber : textDim;
                  return (
                    <div key={w.title} style={{ border: `1px solid ${line}`, borderRadius: radius, padding: 10, background: raised }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <StatusDot color={statusColor} size={6} pulse={w.running} />
                        <HudLabel color={textDim}>{w.kind}</HudLabel>
                        <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5 }}>{w.cat}</span>
                      </div>
                      <div style={{ fontWeight: 600, fontSize: 13, marginTop: 6 }}>{w.title}</div>
                      <div style={{ marginTop: 6, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>UPTIME · {w.uptime}</div>
                      <div style={{ marginTop: 8, display: 'flex', gap: 4 }}>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '2px 6px', borderRadius: 3, border: `1px solid ${line}`, color: text, cursor: 'pointer' }}>
                          {w.running ? 'PAUSE' : 'RUN'}
                        </span>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '2px 6px', borderRadius: 3, border: `1px solid ${line}`, color: textDim, cursor: 'pointer' }}>CONFIG</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

// CardHeader / KpiTile still used by Dashboard & other pages
function CardHeader({ title, en, textDim, right }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ fontSize: 14, fontWeight: 600 }}>{title}</div>
      <HudLabel color={textDim}>{en}</HudLabel>
      {right && <div style={{ marginLeft: 'auto' }}>{right}</div>}
    </div>
  );
}
function KpiTile({ label, en, value, delta, deltaColor, accent, textDim, bars }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span style={{ fontSize: 12, color: textDim }}>{label}</span>
        <HudLabel color={textDim}>{en}</HudLabel>
      </div>
      <div style={{
        fontFamily: hudTokens.fontDisplay, fontSize: 34, fontWeight: 600,
        color: accent, letterSpacing: -0.5, lineHeight: 1, marginTop: 6,
      }}>{value}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6 }}>
        <div style={{ flex: 1, display: 'flex', gap: 2, height: 16, alignItems: 'flex-end' }}>
          {bars.map((b, i) => (
            <div key={i} style={{
              flex: 1, height: `${(b / Math.max(...bars)) * 100}%`, minHeight: 2,
              background: hudTokens.cyan, opacity: 0.25 + (b / Math.max(...bars)) * 0.6,
            }} />
          ))}
        </div>
      </div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: deltaColor, letterSpacing: 0.5, marginTop: 4 }}>{delta}</div>
    </div>
  );
}

Object.assign(window, { AdminV3SoftHolo, CardHeader, KpiTile });
