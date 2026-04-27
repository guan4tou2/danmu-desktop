// Sprint 2 — Fire Token full-page management
// Usage chart (24h x 200/min) + recent IPs + audit + regenerate flow

function AdminFireTokenPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="firetoken" title="Fire Token" en="ADMIN LANE · FIRE TOKEN" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {

        // 24h hourly samples — peak around event time (hour 14-16)
        const usage24h = [
          12, 8, 5, 3, 2, 4, 8, 22, 38, 45, 52, 68,
          82, 124, 178, 156, 142, 88, 64, 48, 36, 28, 22, 18,
        ];
        const ceiling = 200;
        const max24 = Math.max(...usage24h);

        // Per-minute (last 60 min) — fluctuating
        const usage60m = Array.from({ length: 60 }, (_, i) => {
          const base = 60 + Math.sin(i / 8) * 30 + Math.cos(i / 3) * 12;
          return Math.max(0, Math.round(base + (i % 7) * 2));
        });

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 16, height: '100%', minHeight: 0 }}>
            {/* MAIN */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0, overflow: 'auto' }}>

              {/* Token card */}
              <div style={{
                background: panel, border: `1px solid ${hudTokens.cyanLine}`,
                borderRadius: radius, padding: 18,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{
                    width: 38, height: 38, borderRadius: 6,
                    background: hudTokens.cyanSoft, color: accent,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    border: `1px solid ${hudTokens.cyanLine}`,
                  }}>⚿</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: text }}>Fire Token · 共享密鑰</div>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 2, letterSpacing: 0.4 }}>
                      ENV · DANMU_FIRE_TOKEN · 給 extension 走 /fire 通道用,繞過 captcha 但有 admin lane ceiling
                    </div>
                  </div>
                  <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.lime, letterSpacing: 1 }}>● 啟用 · 健康</span>
                </div>

                <div style={{
                  padding: 14, background: '#000',
                  border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 4,
                  fontFamily: hudTokens.fontMono, fontSize: 13, color: hudTokens.lime,
                  letterSpacing: 0.5, wordBreak: 'break-all', display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <span style={{ flex: 1 }}>fire_a3f2b9c1<span style={{ opacity: 0.4 }}>•••••••••••••••••••••••••</span>8d7e</span>
                  <span style={{ padding: '6px 12px', background: hudTokens.cyanSoft, color: accent, borderRadius: 3, fontSize: 11, cursor: 'pointer', whiteSpace: 'nowrap' }}>📋 複製</span>
                  <span style={{ padding: '6px 12px', border: `1px solid ${hudTokens.amber}55`, background: `${hudTokens.amber}1c`, color: hudTokens.amber, borderRadius: 3, fontSize: 11, cursor: 'pointer', whiteSpace: 'nowrap' }}>↻ 重新產生</span>
                </div>

                <div style={{
                  marginTop: 10, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                  fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4,
                  gap: 12, padding: '10px 0 0', borderTop: `1px dashed ${line}`,
                }}>
                  <KV3 k="建立時間" v="2025-01-12 09:14"  text={text} />
                  <KV3 k="上次旋轉" v="14 天前"            text={text} />
                  <KV3 k="近 24h 請求" v="1,287"           text={hudTokens.lime} />
                  <KV3 k="目前用量" v="63 / 200 per min"   text={accent} />
                </div>
              </div>

              {/* 24h hourly chart */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <HudLabel color={textDim}>近 24 小時 · 每小時請求數</HudLabel>
                  <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>峰值 178 / hr · 14:00-15:00</span>
                </div>
                <div style={{ position: 'relative', height: 160, paddingTop: 18 }}>
                  {/* ceiling line marker */}
                  <div style={{ position: 'absolute', left: 0, right: 0, top: 18, borderTop: `1px dashed ${hudTokens.amber}`, opacity: 0.5 }}>
                    <span style={{ position: 'absolute', right: 0, top: -16, fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.amber, letterSpacing: 0.5 }}>ceiling 200/min × 60 = 12,000</span>
                  </div>
                  <div style={{ position: 'absolute', left: 0, right: 0, top: 18, bottom: 28, display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                    {usage24h.map((v, i) => {
                      const h = Math.max(2, (v / max24) * 100);
                      const peak = v === max24;
                      return (
                        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: 2 }}>
                          <div style={{
                            width: '70%', height: `${h}%`,
                            background: peak ? `linear-gradient(180deg, ${hudTokens.amber}, ${accent})` : `linear-gradient(180deg, ${accent}88, ${accent}44)`,
                            border: `1px solid ${peak ? hudTokens.amber : hudTokens.cyanLine}`,
                            borderRadius: '2px 2px 0 0', position: 'relative',
                          }}>
                            {peak && (
                              <span style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.amber, fontWeight: 600 }}>{v}</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ position: 'absolute', left: 0, right: 0, bottom: 4, display: 'flex', gap: 2, fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.3 }}>
                    {[0, 4, 8, 12, 16, 20].map(h => (
                      <span key={h} style={{ flex: 1, textAlign: 'center' }}>{String(h).padStart(2, '0')}:00</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 60-min line chart */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <HudLabel color={textDim}>近 60 分鐘 · 每分鐘請求</HudLabel>
                  <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.lime, letterSpacing: 0.4 }}>● 平均 63/min · 高於閾值 0 次</span>
                </div>
                <div style={{ position: 'relative', height: 100 }}>
                  {/* ceiling */}
                  <div style={{ position: 'absolute', left: 0, right: 0, top: 0, borderTop: `1px dashed ${hudTokens.crimson}`, opacity: 0.4 }} />
                  <span style={{ position: 'absolute', right: 0, top: -14, fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.crimson, letterSpacing: 0.4 }}>200/min · ceiling</span>
                  <svg width="100%" height="100" viewBox="0 0 600 100" preserveAspectRatio="none" style={{ display: 'block' }}>
                    <polyline
                      points={usage60m.map((v, i) => `${(i / 59) * 600},${100 - (v / ceiling) * 100}`).join(' ')}
                      fill={`${accent}1c`} stroke={accent} strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.3, marginTop: 4 }}>
                  <span>60m 前</span>
                  <span>30m</span>
                  <span>現在 14:02</span>
                </div>
              </div>

              {/* Audit log of token events */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
                <HudLabel color={textDim}>Token 事件 · 近 30 天</HudLabel>
                <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[
                    { t: '14 天前 · 09:14', e: 'rotated',    by: 'admin · web',     d: '管理員手動產生新 token (舊 token 立即失效)', col: hudTokens.amber },
                    { t: '14 天前 · 09:15', e: 'config-write', by: 'system',           d: '寫入 ~/.danmu/.env · DANMU_FIRE_TOKEN', col: textDim },
                    { t: '12 天前 · 11:32', e: 'first-use',   by: 'extension',        d: 'Slido extension 首次成功送出 (203.0.113.42)', col: hudTokens.lime },
                    { t: '今天 · 13:48',    e: 'rate-near',   by: 'system',           d: '單分鐘 178 接近 200 ceiling · 自動限流啟動', col: hudTokens.amber },
                    { t: '今天 · 13:51',    e: 'rate-recover', by: 'system',           d: '速率回到 86/min · 限流解除', col: hudTokens.lime },
                  ].map((row, i) => (
                    <div key={i} style={{
                      display: 'grid', gridTemplateColumns: '120px 100px 1fr',
                      gap: 12, padding: '8px 10px', borderRadius: 3,
                      background: raised, border: `1px solid ${line}`,
                      fontFamily: hudTokens.fontMono, fontSize: 11, alignItems: 'center',
                    }}>
                      <span style={{ color: textDim, letterSpacing: 0.3 }}>{row.t}</span>
                      <span style={{ color: row.col, letterSpacing: 0.5, padding: '2px 8px', background: `${row.col}1c`, border: `1px solid ${row.col}55`, borderRadius: 3, textAlign: 'center', fontSize: 10 }}>{row.e}</span>
                      <span style={{ color: text, fontSize: 11, letterSpacing: 0.3 }}>
                        <span style={{ color: textDim }}>{row.by} · </span>{row.d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — IP log + summary */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
              <HudLabel color={accent}>近 1 小時來源 IP</HudLabel>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { ip: '203.0.113.42',  geo: 'TW · Taipei',  ext: 'slido',       n: 287, ua: 'Chrome/Slido-Bridge/0.2',  hot: true },
                  { ip: '198.51.100.7',  geo: 'JP · Tokyo',   ext: 'slido',       n: 142, ua: 'Firefox/Slido-Bridge/0.2' },
                  { ip: '100.64.2.91',   geo: 'TW · Taipei',  ext: 'bookmarklet', n:  18, ua: 'Safari/17.2 · bookmarklet' },
                  { ip: '54.230.18.4',   geo: 'US · CloudFront', ext: 'unknown',  n:   4, ua: '?', warn: '未知 user-agent' },
                ].map((r, i) => (
                  <div key={i} style={{
                    padding: '10px 12px', borderRadius: 3,
                    background: r.hot ? hudTokens.cyanSoft : raised,
                    border: `1px solid ${r.warn ? `${hudTokens.amber}55` : (r.hot ? hudTokens.cyanLine : line)}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: text, letterSpacing: 0.4 }}>{r.ip}</span>
                      {r.hot && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: accent, letterSpacing: 0.5 }}>★ TOP</span>}
                      {r.warn && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.amber, letterSpacing: 0.5 }}>⚠</span>}
                      <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.lime, fontWeight: 600 }}>{r.n}</span>
                    </div>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, marginTop: 4, letterSpacing: 0.3, lineHeight: 1.5 }}>
                      {r.geo} · <span style={{ color: accent }}>{r.ext}</span><br/>
                      {r.ua}
                    </div>
                    {r.warn && (
                      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.amber, marginTop: 4, letterSpacing: 0.3 }}>{r.warn} · 建議調查</div>
                    )}
                  </div>
                ))}
              </div>

              <HudLabel color={textDim} top>路由分布</HudLabel>
              <div style={{ marginTop: 8, padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3, lineHeight: 1.7 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 50px 50px', gap: 6 }}>
                  <span>POST /fire</span>
                  <span style={{ textAlign: 'right', color: hudTokens.lime }}>1,243</span>
                  <span style={{ textAlign: 'right' }}>97%</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 50px 50px', gap: 6 }}>
                  <span>POST /fire/poll-vote</span>
                  <span style={{ textAlign: 'right', color: hudTokens.lime }}>38</span>
                  <span style={{ textAlign: 'right' }}>3%</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 50px 50px', gap: 6 }}>
                  <span>4xx errors</span>
                  <span style={{ textAlign: 'right', color: hudTokens.crimson }}>6</span>
                  <span style={{ textAlign: 'right' }}>0.5%</span>
                </div>
              </div>

              <HudLabel color={textDim} top>使用範例</HudLabel>
              <div style={{
                marginTop: 8, fontFamily: hudTokens.fontMono, fontSize: 10,
                background: '#000', color: hudTokens.lime, padding: 10, borderRadius: 4,
                lineHeight: 1.7, letterSpacing: 0.2, border: `1px solid ${line}`, overflow: 'auto',
              }}>
                curl https://danmu.local:42/fire \<br/>
                &nbsp;&nbsp;-H "<span style={{ color: accent }}>X-Fire-Token: fire_***</span>" \<br/>
                &nbsp;&nbsp;-H "Content-Type: application/json" \<br/>
                &nbsp;&nbsp;-d '{'{'}"text":"hello","source":"slido"{'}'}'
              </div>

              <div style={{
                marginTop: 14, padding: 10,
                background: `${hudTokens.amber}10`, border: `1px solid ${hudTokens.amber}55`, borderRadius: 3,
                fontSize: 11, color: text, lineHeight: 1.6,
              }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.amber, letterSpacing: 1.2 }}>SECURITY · ROTATION POLICY</span><br/>
                建議每 90 天輪換一次,或在懷疑外洩時立即 regen。重新產生會發送 webhook <code style={{ color: hudTokens.amber, fontFamily: hudTokens.fontMono }}>token.rotated</code>。
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

function KV3({ k, v, text }) {
  return (
    <div>
      <div style={{ fontSize: 9, letterSpacing: 1.2, marginBottom: 3, opacity: 0.7 }}>{k}</div>
      <div style={{ color: text, fontSize: 11 }}>{v}</div>
    </div>
  );
}

Object.assign(window, { AdminFireTokenPage });
