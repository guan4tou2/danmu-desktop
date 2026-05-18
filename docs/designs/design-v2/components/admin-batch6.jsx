// Sprint 3 — Webhooks management
// Endpoints list + event subscriptions + delivery log + retry
// Sprint 4 — API Tokens
// Multiple tokens + scopes + revoke

function AdminWebhooksPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="webhooks" title="Webhooks · 事件推送" en="ADMIN LANE · WEBHOOKS" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {

        const endpoints = [
          {
            id: 'wh_01',
            name: 'Discord 直播通知',
            url: 'https://discord.com/api/webhooks/1234567890/abc...xyz',
            events: ['message.pinned', 'poll.closed', 'session.started'],
            status: 'active',
            success: 1287,
            fail: 3,
            successRate: 99.8,
            lastDelivery: '2 秒前',
            color: 'lime',
          },
          {
            id: 'wh_02',
            name: 'Notion · 活動紀錄',
            url: 'https://api.notion.com/v1/pages/8a3f...d2e1/webhook',
            events: ['session.ended', 'message.exported'],
            status: 'active',
            success: 24,
            fail: 0,
            successRate: 100,
            lastDelivery: '4 小時前',
            color: 'lime',
          },
          {
            id: 'wh_03',
            name: 'Internal Slack · #danmu-alerts',
            url: 'https://hooks.slack.com/services/T01.../B02.../xY...',
            events: ['fire-token.rate-near', 'message.blocked', 'system.error'],
            status: 'degraded',
            success: 142,
            fail: 18,
            successRate: 88.7,
            lastDelivery: '12 秒前',
            color: 'amber',
            warn: '近 1h 失敗率 11% · 對方端點回 503',
          },
          {
            id: 'wh_04',
            name: 'Zapier · CRM sync',
            url: 'https://hooks.zapier.com/hooks/catch/123456/abcdef/',
            events: ['session.ended'],
            status: 'paused',
            success: 6,
            fail: 0,
            successRate: 100,
            lastDelivery: '3 天前',
            color: 'mid',
            warn: '已手動暫停 · 等待對方修復',
          },
        ];

        const deliveryLog = [
          { t: '14:02:18', code: 200, dur: '142ms', ep: 'Discord 直播通知',     evt: 'message.pinned',  retries: 0, ok: true },
          { t: '14:02:11', code: 200, dur: '88ms',  ep: 'Internal Slack',         evt: 'fire-token.rate-near', retries: 0, ok: true },
          { t: '14:01:54', code: 503, dur: '5.0s ⚠', ep: 'Internal Slack',       evt: 'message.blocked', retries: 2, ok: false, retry: true },
          { t: '14:01:42', code: 200, dur: '124ms', ep: 'Discord 直播通知',     evt: 'poll.closed',    retries: 0, ok: true },
          { t: '14:01:18', code: 503, dur: '5.0s ⚠', ep: 'Internal Slack',       evt: 'system.error',    retries: 1, ok: false, retry: true },
          { t: '14:00:48', code: 200, dur: '96ms',  ep: 'Discord 直播通知',     evt: 'message.pinned',  retries: 0, ok: true },
          { t: '14:00:22', code: 200, dur: '218ms', ep: 'Notion · 活動紀錄',     evt: 'session.ended',   retries: 0, ok: true },
          { t: '13:59:54', code: 502, dur: '3.2s ⚠', ep: 'Internal Slack',       evt: 'message.blocked', retries: 3, ok: false, retry: false, dropped: true },
          { t: '13:59:38', code: 200, dur: '88ms',  ep: 'Discord 直播通知',     evt: 'message.pinned',  retries: 0, ok: true },
          { t: '13:58:12', code: 200, dur: '152ms', ep: 'Discord 直播通知',     evt: 'poll.closed',     retries: 0, ok: true },
        ];

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 16, height: '100%', minHeight: 0 }}>
            {/* MAIN */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0, overflow: 'auto' }}>
              {/* Header stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {[
                  { k: '已啟用 endpoints', v: '3 / 4', col: text },
                  { k: '近 24h 推送', v: '1,459',     col: hudTokens.lime },
                  { k: '失敗（待重試）', v: '2',       col: hudTokens.amber },
                  { k: '已放棄（>3 次）', v: '1',      col: hudTokens.crimson },
                ].map((s, i) => (
                  <div key={i} style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 12 }}>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1.2 }}>{s.k}</div>
                    <div style={{ color: s.col, fontSize: 22, fontWeight: 600, marginTop: 4 }}>{s.v}</div>
                  </div>
                ))}
              </div>

              {/* Endpoints */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <HudLabel color={textDim}>Endpoints · {endpoints.length} 個</HudLabel>
                  <span style={{ marginLeft: 'auto', padding: '6px 12px', background: hudTokens.cyanSoft, color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 3, fontSize: 11, cursor: 'pointer' }}>＋ 新增 endpoint</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {endpoints.map(ep => {
                    const colMap = { lime: hudTokens.lime, amber: hudTokens.amber, crimson: hudTokens.crimson, mid: textDim };
                    const c = colMap[ep.color];
                    const selected = ep.id === 'wh_03';
                    return (
                      <div key={ep.id} style={{
                        padding: 12,
                        background: selected ? hudTokens.cyanSoft : raised,
                        border: `1px solid ${selected ? hudTokens.cyanLine : line}`,
                        borderRadius: 4,
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                          <span style={{
                            width: 8, height: 8, borderRadius: '50%', background: c,
                            boxShadow: ep.status === 'active' ? `0 0 6px ${c}` : 'none',
                          }} />
                          <span style={{ fontSize: 13, color: text, fontWeight: 600 }}>{ep.name}</span>
                          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, padding: '2px 8px', background: `${c}1c`, color: c, border: `1px solid ${c}55`, borderRadius: 2, letterSpacing: 0.8 }}>
                            {ep.status === 'active' ? 'ACTIVE' : ep.status === 'degraded' ? 'DEGRADED' : 'PAUSED'}
                          </span>
                          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>last · {ep.lastDelivery}</span>
                        </div>
                        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3, marginBottom: 8, wordBreak: 'break-all' }}>
                          {ep.url}
                        </div>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
                          {ep.events.map(e => (
                            <span key={e} style={{
                              fontFamily: hudTokens.fontMono, fontSize: 10, color: text,
                              padding: '3px 8px', background: panel, border: `1px solid ${line}`, borderRadius: 2, letterSpacing: 0.3,
                            }}>{e}</span>
                          ))}
                        </div>
                        {ep.warn && (
                          <div style={{
                            fontSize: 11, color: hudTokens.amber, padding: '6px 10px',
                            background: `${hudTokens.amber}10`, border: `1px solid ${hudTokens.amber}55`, borderRadius: 3,
                            marginBottom: 8, fontFamily: hudTokens.fontMono, letterSpacing: 0.3,
                          }}>⚠ {ep.warn}</div>
                        )}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto auto', gap: 12, alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5 }}>SUCCESS RATE</span>
                            <div style={{ flex: 1, maxWidth: 120, height: 4, background: line, borderRadius: 2, overflow: 'hidden' }}>
                              <div style={{ width: `${ep.successRate}%`, height: '100%', background: c }} />
                            </div>
                            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: c, fontWeight: 600 }}>{ep.successRate}%</span>
                          </div>
                          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.lime }}>✓ {ep.success.toLocaleString()}</span>
                          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: ep.fail > 0 ? hudTokens.amber : textDim }}>✗ {ep.fail}</span>
                          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, padding: '4px 8px', border: `1px solid ${line}`, borderRadius: 2, cursor: 'pointer' }}>↻ 測試</span>
                          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, padding: '4px 8px', border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 2, cursor: 'pointer' }}>⚙ 設定</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Delivery log */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <HudLabel color={textDim}>Delivery log · 即時</HudLabel>
                  <span style={{ marginLeft: 'auto', display: 'flex', gap: 6, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.4 }}>
                    <span style={{ padding: '4px 10px', background: hudTokens.cyanSoft, color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 2 }}>全部</span>
                    <span style={{ padding: '4px 10px', color: textDim, border: `1px solid ${line}`, borderRadius: 2 }}>失敗 (3)</span>
                    <span style={{ padding: '4px 10px', color: textDim, border: `1px solid ${line}`, borderRadius: 2 }}>2xx</span>
                    <span style={{ padding: '4px 10px', color: textDim, border: `1px solid ${line}`, borderRadius: 2 }}>5xx</span>
                  </span>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '70px 60px 70px 1.4fr 1.6fr 60px 100px',
                  gap: 8, fontFamily: hudTokens.fontMono, fontSize: 9,
                  color: textDim, letterSpacing: 1, padding: '6px 10px', borderBottom: `1px solid ${line}`,
                }}>
                  <span>TIME</span><span>CODE</span><span>DUR</span><span>ENDPOINT</span><span>EVENT</span><span>RETRY</span><span></span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {deliveryLog.map((row, i) => (
                    <div key={i} style={{
                      display: 'grid',
                      gridTemplateColumns: '70px 60px 70px 1.4fr 1.6fr 60px 100px',
                      gap: 8, padding: '8px 10px', alignItems: 'center',
                      borderBottom: `1px solid ${line}`,
                      fontFamily: hudTokens.fontMono, fontSize: 11,
                      background: row.dropped ? `${hudTokens.crimson}08` : 'transparent',
                    }}>
                      <span style={{ color: textDim }}>{row.t}</span>
                      <span style={{
                        color: row.ok ? hudTokens.lime : hudTokens.crimson,
                        padding: '2px 6px', background: `${row.ok ? hudTokens.lime : hudTokens.crimson}15`,
                        border: `1px solid ${row.ok ? hudTokens.lime : hudTokens.crimson}55`, borderRadius: 2,
                        textAlign: 'center', fontSize: 10,
                      }}>{row.code}</span>
                      <span style={{ color: row.ok ? text : hudTokens.amber }}>{row.dur}</span>
                      <span style={{ color: text, fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.ep}</span>
                      <span style={{ color: accent, fontSize: 11 }}>{row.evt}</span>
                      <span style={{ color: row.retries > 0 ? hudTokens.amber : textDim, textAlign: 'center' }}>{row.retries === 0 ? '—' : `×${row.retries}`}</span>
                      <span style={{ display: 'flex', gap: 4, justifyContent: 'flex-end' }}>
                        {row.retry && <span style={{ padding: '3px 8px', color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 2, fontSize: 10, cursor: 'pointer' }}>↻ retry</span>}
                        {row.dropped && <span style={{ padding: '3px 8px', color: hudTokens.crimson, border: `1px solid ${hudTokens.crimson}55`, borderRadius: 2, fontSize: 10 }}>dropped</span>}
                        {row.ok && <span style={{ color: textDim, fontSize: 10, cursor: 'pointer' }}>view</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — endpoint detail (Internal Slack selected) */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: hudTokens.amber, boxShadow: `0 0 6px ${hudTokens.amber}` }} />
                <span style={{ fontSize: 13, color: text, fontWeight: 600 }}>Internal Slack · #danmu-alerts</span>
              </div>

              <HudLabel color={textDim}>事件訂閱</HudLabel>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  { e: 'message.created',          on: false },
                  { e: 'message.pinned',           on: false },
                  { e: 'message.blocked',          on: true },
                  { e: 'poll.opened',              on: false },
                  { e: 'poll.closed',              on: false },
                  { e: 'session.started',          on: false },
                  { e: 'session.ended',            on: false },
                  { e: 'fire-token.rate-near',     on: true },
                  { e: 'fire-token.rotated',       on: false },
                  { e: 'system.error',             on: true },
                ].map(s => (
                  <label key={s.e} style={{
                    display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px',
                    background: s.on ? hudTokens.cyanSoft : raised,
                    border: `1px solid ${s.on ? hudTokens.cyanLine : line}`, borderRadius: 3,
                    fontFamily: hudTokens.fontMono, fontSize: 11, cursor: 'pointer',
                  }}>
                    <span style={{
                      width: 12, height: 12, border: `1px solid ${s.on ? accent : line}`, borderRadius: 2,
                      background: s.on ? accent : 'transparent',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      color: '#000', fontSize: 9, fontWeight: 700,
                    }}>{s.on ? '✓' : ''}</span>
                    <span style={{ color: s.on ? text : textDim, letterSpacing: 0.3 }}>{s.e}</span>
                  </label>
                ))}
              </div>

              <HudLabel color={textDim} top>Retry policy</HudLabel>
              <div style={{
                marginTop: 8, padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 4,
                fontFamily: hudTokens.fontMono, fontSize: 11, lineHeight: 1.7, color: text, letterSpacing: 0.3,
              }}>
                <div style={{ color: textDim }}>Max retries: <span style={{ color: text }}>3</span></div>
                <div style={{ color: textDim }}>Backoff: <span style={{ color: text }}>exponential · 1s → 5s → 25s</span></div>
                <div style={{ color: textDim }}>Timeout: <span style={{ color: text }}>5,000ms</span></div>
                <div style={{ color: textDim }}>HMAC sign: <span style={{ color: hudTokens.lime }}>SHA-256 · X-Webhook-Sig</span></div>
              </div>

              <HudLabel color={textDim} top>Payload sample</HudLabel>
              <div style={{
                marginTop: 8, fontFamily: hudTokens.fontMono, fontSize: 10,
                background: '#000', color: hudTokens.lime, padding: 10, borderRadius: 4,
                lineHeight: 1.6, letterSpacing: 0.2, border: `1px solid ${line}`,
              }}>
                {`{`}<br/>
                &nbsp;&nbsp;<span style={{ color: accent }}>"event"</span>: <span style={{ color: text }}>"message.blocked"</span>,<br/>
                &nbsp;&nbsp;<span style={{ color: accent }}>"ts"</span>: <span style={{ color: text }}>1737554431</span>,<br/>
                &nbsp;&nbsp;<span style={{ color: accent }}>"sid"</span>: <span style={{ color: text }}>"sess_a3f2"</span>,<br/>
                &nbsp;&nbsp;<span style={{ color: accent }}>"data"</span>: {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: accent }}>"id"</span>: <span style={{ color: text }}>"msg_8d7e"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: accent }}>"reason"</span>: <span style={{ color: text }}>"profanity"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: accent }}>"score"</span>: <span style={{ color: text }}>0.94</span><br/>
                &nbsp;&nbsp;{`}`}<br/>
                {`}`}
              </div>

              <div style={{
                marginTop: 'auto', paddingTop: 14, display: 'flex', gap: 8,
              }}>
                <span style={{ flex: 1, padding: '8px', textAlign: 'center', background: hudTokens.cyanSoft, color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 3, fontSize: 11, cursor: 'pointer' }}>↻ 送測試 ping</span>
                <span style={{ padding: '8px 12px', color: hudTokens.amber, border: `1px solid ${hudTokens.amber}55`, borderRadius: 3, fontSize: 11, cursor: 'pointer' }}>⏸ 暫停</span>
                <span style={{ padding: '8px 12px', color: hudTokens.crimson, border: `1px solid ${hudTokens.crimson}55`, borderRadius: 3, fontSize: 11, cursor: 'pointer' }}>⊘ 刪除</span>
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Sprint 4 — API Tokens
// ─────────────────────────────────────────────────────────────────────

function AdminTokensPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="api-tokens" title="API Tokens" en="ADMIN LANE · API TOKENS" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {

        const SCOPES = [
          { k: 'messages:read',     desc: '讀取訊息歷史 + 即時 stream' },
          { k: 'messages:write',    desc: '送出訊息 (走 API 不走 fire)' },
          { k: 'messages:moderate', desc: '置頂 / 遮罩 / 封鎖' },
          { k: 'sessions:read',     desc: '查詢場次列表 + 統計' },
          { k: 'sessions:write',    desc: '建立 / 結束場次' },
          { k: 'polls:read',        desc: '查詢投票結果' },
          { k: 'polls:write',       desc: '建立 / 關閉投票' },
          { k: 'export:read',       desc: '產生 + 下載匯出' },
          { k: 'admin:*',           desc: '⚠ 所有權限 (含設定 / token / webhook)' },
        ];

        const tokens = [
          {
            id: 'tok_01',
            label: 'Recap Bot · 場後摘要服務',
            prefix: 'dnm_pa_8f2c',
            scopes: ['messages:read', 'sessions:read', 'export:read'],
            created: '32 天前',
            lastUsed: '14:01 · 2 分鐘前',
            ip: '10.0.4.18',
            usage: 487,
            color: 'lime',
          },
          {
            id: 'tok_02',
            label: 'Slido Bridge (extension)',
            prefix: 'dnm_pa_3b91',
            scopes: ['messages:write', 'sessions:read'],
            created: '18 天前',
            lastUsed: '13:58 · 5 分鐘前',
            ip: '203.0.113.42',
            usage: 1243,
            color: 'lime',
          },
          {
            id: 'tok_03',
            label: 'CI · 自動化測試',
            prefix: 'dnm_pa_d7e2',
            scopes: ['admin:*'],
            created: '7 天前',
            lastUsed: '昨天 18:42',
            ip: '54.230.18.4',
            usage: 142,
            color: 'amber',
            warn: 'admin:* scope · 建議改用 narrow scope',
          },
          {
            id: 'tok_04',
            label: '舊版 dashboard (Yvonne)',
            prefix: 'dnm_pa_1a4f',
            scopes: ['messages:read', 'polls:read'],
            created: '124 天前',
            lastUsed: '92 天前',
            ip: '—',
            usage: 18,
            color: 'mid',
            warn: '90+ 天未使用 · 建議撤銷',
          },
        ];

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 16, height: '100%', minHeight: 0 }}>
            {/* MAIN */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0, overflow: 'auto' }}>

              {/* New token banner — show success state */}
              <div style={{
                background: `${hudTokens.lime}10`, border: `1px solid ${hudTokens.lime}66`,
                borderRadius: radius, padding: 14, position: 'relative',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.lime, letterSpacing: 1.5 }}>✓ TOKEN CREATED</span>
                  <span style={{ marginLeft: 'auto', fontSize: 11, color: textDim }}>30 秒前 · 此畫面只會顯示一次</span>
                </div>
                <div style={{
                  padding: 12, background: '#000',
                  border: `1px solid ${hudTokens.lime}55`, borderRadius: 4,
                  fontFamily: hudTokens.fontMono, fontSize: 13, color: hudTokens.lime,
                  letterSpacing: 0.5, display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <span style={{ flex: 1, wordBreak: 'break-all' }}>dnm_pa_8f2c<span style={{ color: hudTokens.amber }}>_FrkjA9xLm2qZpVnT8H7sN3wY5cKuG6dEbR1iMoX4tP</span></span>
                  <span style={{ padding: '6px 12px', background: hudTokens.cyanSoft, color: accent, borderRadius: 3, fontSize: 11, cursor: 'pointer', whiteSpace: 'nowrap' }}>📋 複製</span>
                  <span style={{ padding: '6px 10px', color: textDim, fontSize: 11, cursor: 'pointer' }}>✕</span>
                </div>
              </div>

              {/* Tokens list */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <HudLabel color={textDim}>Personal Access Tokens · {tokens.length}</HudLabel>
                  <span style={{ marginLeft: 'auto', padding: '6px 12px', background: hudTokens.cyanSoft, color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 3, fontSize: 11, cursor: 'pointer' }}>＋ 產生新 token</span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1.6fr 1fr 1fr 90px 90px 100px',
                  gap: 8, fontFamily: hudTokens.fontMono, fontSize: 9,
                  color: textDim, letterSpacing: 1, padding: '6px 10px', borderBottom: `1px solid ${line}`,
                }}>
                  <span>LABEL</span>
                  <span>PREFIX · SCOPE</span>
                  <span>LAST USED</span>
                  <span>USAGE</span>
                  <span>CREATED</span>
                  <span></span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {tokens.map(t => {
                    const colMap = { lime: hudTokens.lime, amber: hudTokens.amber, mid: textDim };
                    const c = colMap[t.color];
                    return (
                      <div key={t.id} style={{
                        display: 'grid',
                        gridTemplateColumns: '1.6fr 1fr 1fr 90px 90px 100px',
                        gap: 8, padding: '12px 10px', alignItems: 'start',
                        borderBottom: `1px solid ${line}`,
                        background: t.warn ? `${hudTokens.amber}06` : 'transparent',
                      }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: c }} />
                            <span style={{ color: text, fontSize: 12, fontWeight: 600 }}>{t.label}</span>
                          </div>
                          {t.warn && (
                            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.amber, letterSpacing: 0.3 }}>⚠ {t.warn}</div>
                          )}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: text, letterSpacing: 0.3 }}>{t.prefix}<span style={{ color: textDim }}>•••</span></span>
                          <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                            {t.scopes.map(s => {
                              const isAdmin = s === 'admin:*';
                              return (
                                <span key={s} style={{
                                  fontFamily: hudTokens.fontMono, fontSize: 9,
                                  padding: '2px 6px',
                                  background: isAdmin ? `${hudTokens.crimson}1c` : raised,
                                  color: isAdmin ? hudTokens.crimson : textDim,
                                  border: `1px solid ${isAdmin ? hudTokens.crimson + '66' : line}`,
                                  borderRadius: 2, letterSpacing: 0.3,
                                }}>{s}</span>
                              );
                            })}
                          </div>
                        </div>
                        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 11, lineHeight: 1.5 }}>
                          <div style={{ color: text }}>{t.lastUsed}</div>
                          <div style={{ color: textDim, fontSize: 10 }}>{t.ip}</div>
                        </div>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: hudTokens.lime, fontWeight: 600 }}>{t.usage.toLocaleString()}</span>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim }}>{t.created}</span>
                        <div style={{ display: 'flex', gap: 4, justifyContent: 'flex-end' }}>
                          <span style={{ padding: '3px 8px', color: textDim, border: `1px solid ${line}`, borderRadius: 2, fontSize: 10, cursor: 'pointer', fontFamily: hudTokens.fontMono }}>edit</span>
                          <span style={{ padding: '3px 8px', color: hudTokens.crimson, border: `1px solid ${hudTokens.crimson}55`, borderRadius: 2, fontSize: 10, cursor: 'pointer', fontFamily: hudTokens.fontMono }}>revoke</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT — create token form */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, overflow: 'auto' }}>
              <HudLabel color={accent}>產生新 Token</HudLabel>

              <div style={{ marginTop: 12 }}>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1.2, marginBottom: 6 }}>LABEL · 給人看的名字</div>
                <div style={{
                  padding: '8px 10px', background: raised, border: `1px solid ${line}`, borderRadius: 3,
                  fontFamily: hudTokens.fontMono, fontSize: 12, color: text, letterSpacing: 0.3,
                }}>Recap Bot · 場後摘要服務|</div>
              </div>

              <div style={{ marginTop: 14 }}>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1.2, marginBottom: 6 }}>SCOPES · 最小權限原則</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {SCOPES.map((s, i) => {
                    const checked = i === 0 || i === 3 || i === 7;
                    const danger = s.k === 'admin:*';
                    return (
                      <label key={s.k} style={{
                        display: 'grid', gridTemplateColumns: '14px 1fr', gap: 8, padding: '6px 8px',
                        background: checked ? hudTokens.cyanSoft : (danger ? `${hudTokens.crimson}08` : 'transparent'),
                        border: `1px solid ${checked ? hudTokens.cyanLine : (danger ? hudTokens.crimson + '55' : 'transparent')}`,
                        borderRadius: 3, cursor: 'pointer',
                      }}>
                        <span style={{
                          width: 12, height: 12, marginTop: 1,
                          border: `1px solid ${checked ? accent : line}`, borderRadius: 2,
                          background: checked ? accent : 'transparent',
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          color: '#000', fontSize: 9, fontWeight: 700,
                        }}>{checked ? '✓' : ''}</span>
                        <div>
                          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: danger ? hudTokens.crimson : text, letterSpacing: 0.3 }}>{s.k}</div>
                          <div style={{ fontSize: 10, color: textDim, marginTop: 2, lineHeight: 1.4 }}>{s.desc}</div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div style={{ marginTop: 14 }}>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1.2, marginBottom: 6 }}>EXPIRY</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4 }}>
                  {['7d', '30d', '90d', '永久'].map((v, i) => (
                    <span key={v} style={{
                      padding: '6px', textAlign: 'center', fontFamily: hudTokens.fontMono, fontSize: 11,
                      background: i === 2 ? hudTokens.cyanSoft : raised,
                      color: i === 2 ? accent : textDim,
                      border: `1px solid ${i === 2 ? hudTokens.cyanLine : line}`,
                      borderRadius: 3, cursor: 'pointer', letterSpacing: 0.3,
                    }}>{v}</span>
                  ))}
                </div>
                <div style={{ fontSize: 10, color: textDim, marginTop: 6, lineHeight: 1.5 }}>
                  到期後自動撤銷 · 「永久」會在 90 天未使用時警告
                </div>
              </div>

              <div style={{
                marginTop: 18, padding: 10,
                background: `${hudTokens.amber}10`, border: `1px solid ${hudTokens.amber}55`, borderRadius: 3,
                fontSize: 11, color: text, lineHeight: 1.6,
              }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.amber, letterSpacing: 1.2 }}>⚠ 提醒</span><br/>
                Token 完整字串只會顯示一次。請立即複製並存到 secret manager。
              </div>

              <div style={{
                marginTop: 14, padding: '10px 14px', textAlign: 'center',
                background: accent, color: '#000', borderRadius: 3,
                fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 600, letterSpacing: 1.2, cursor: 'pointer',
              }}>產生 TOKEN</div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Sprint 5 — Backup & Restore
// ─────────────────────────────────────────────────────────────────────

function AdminBackupPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="backup" title="Backup & Restore" en="ADMIN LANE · BACKUP" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {

        // 30-day backup grid
        const backups = Array.from({ length: 30 }, (_, i) => {
          const day = 30 - i;
          const dateLabel = day === 1 ? '今天' : day === 2 ? '昨天' : `D-${day - 1}`;
          const corrupt = day === 18;
          const inProgress = day === 1;
          return {
            day, dateLabel,
            size: corrupt ? null : (180 + Math.round(Math.sin(i / 3) * 24 + (i % 5) * 4)),
            time: '03:00',
            status: corrupt ? 'corrupt' : inProgress ? 'in-progress' : 'ok',
            inProgress,
          };
        });

        const restorePoints = [
          { label: '昨天 03:00 自動快照',         id: 'snap_2025-01-25_0300', size: '212 MB', items: '12,847 訊息 · 4 場次 · 8 polls', selected: true },
          { label: '上週六 14:32 手動快照',        id: 'snap_2025-01-19_1432', size: '198 MB', items: '11,204 訊息 · 3 場次 · 6 polls', tag: '版本上線前' },
          { label: 'D-7 自動快照',                  id: 'snap_2025-01-19_0300', size: '188 MB', items: '10,892 訊息 · 3 場次 · 6 polls' },
          { label: 'D-14 自動快照',                 id: 'snap_2025-01-12_0300', size: '142 MB', items: '8,440 訊息 · 2 場次 · 3 polls' },
          { label: 'D-30 自動快照 · 即將過期 ⚠',   id: 'snap_2024-12-27_0300', size: '88 MB',  items: '4,182 訊息 · 1 場次 · 1 poll', warn: '4 小時後自動清除' },
        ];

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 16, height: '100%', minHeight: 0 }}>
            {/* MAIN */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0, overflow: 'auto' }}>

              {/* Status row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {[
                  { k: '保留快照',     v: '29 / 30', col: text,            sub: '日快照 · 30 天' },
                  { k: '總大小',       v: '5.4 GB',  col: text,            sub: '本地 SSD · 加密' },
                  { k: '上次成功',     v: '昨天 03:00', col: hudTokens.lime, sub: '212 MB · 64s' },
                  { k: '下次排程',     v: '今晚 03:00', col: accent,         sub: '15h 14m 後' },
                ].map((s, i) => (
                  <div key={i} style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1.2 }}>{s.k}</div>
                    <div style={{ color: s.col, fontSize: 22, fontWeight: 600, marginTop: 4 }}>{s.v}</div>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 4, letterSpacing: 0.4 }}>{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Daily backup grid */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <HudLabel color={textDim}>每日快照 · 近 30 天</HudLabel>
                  <span style={{ marginLeft: 'auto', display: 'flex', gap: 12, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>
                    <span><span style={{ color: hudTokens.lime }}>●</span> 成功 28</span>
                    <span><span style={{ color: hudTokens.crimson }}>●</span> 失敗 1</span>
                    <span><span style={{ color: accent }}>●</span> 進行中 1</span>
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(15, 1fr)', gap: 4 }}>
                  {backups.slice().reverse().map((b, i) => {
                    const isOk = b.status === 'ok';
                    const isCorrupt = b.status === 'corrupt';
                    const isInProgress = b.status === 'in-progress';
                    const c = isCorrupt ? hudTokens.crimson : isInProgress ? accent : hudTokens.lime;
                    return (
                      <div key={i} style={{
                        aspectRatio: '1', borderRadius: 3,
                        background: isOk ? `${hudTokens.lime}1c` : isCorrupt ? `${hudTokens.crimson}1c` : hudTokens.cyanSoft,
                        border: `1px solid ${c}66`,
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        position: 'relative', cursor: 'pointer',
                      }}>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.3 }}>D-{b.day - 1}</span>
                        {b.size && (
                          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: c, fontWeight: 600 }}>{b.size}M</span>
                        )}
                        {isCorrupt && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: hudTokens.crimson, lineHeight: 1, marginTop: 2 }}>✕</span>}
                        {isInProgress && (
                          <span style={{ position: 'absolute', top: 3, right: 3, width: 5, height: 5, borderRadius: '50%', background: accent, boxShadow: `0 0 4px ${accent}` }} />
                        )}
                      </div>
                    );
                  })}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.4 }}>
                  <span>30 天前</span>
                  <span>今天 · 進行中</span>
                </div>

                {/* Failed backup detail */}
                <div style={{
                  marginTop: 12, padding: 10,
                  background: `${hudTokens.crimson}10`, border: `1px solid ${hudTokens.crimson}55`, borderRadius: 3,
                  fontSize: 11, color: text, lineHeight: 1.6,
                }}>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.crimson, letterSpacing: 1.2 }}>✕ FAILED · D-17 (2025-01-09 03:00)</span><br/>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.3 }}>
                    SQLite checksum mismatch — write 中斷。已自動觸發告警 + Slack 通知 admin。建議從 D-16 還原 + 補錄 D-17 訊息（54 筆）。
                  </span>
                </div>
              </div>

              {/* Restore points */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <HudLabel color={textDim}>還原點 · Restore Points</HudLabel>
                  <span style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                    <span style={{ padding: '6px 12px', background: hudTokens.cyanSoft, color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 3, fontSize: 11, cursor: 'pointer', fontFamily: hudTokens.fontMono, letterSpacing: 0.5 }}>＋ 立即建立快照</span>
                    <span style={{ padding: '6px 12px', color: textDim, border: `1px solid ${line}`, borderRadius: 3, fontSize: 11, cursor: 'pointer', fontFamily: hudTokens.fontMono, letterSpacing: 0.5 }}>↑ 上傳 .danmu.bak</span>
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {restorePoints.map((rp, i) => (
                    <div key={i} style={{
                      padding: '10px 14px',
                      background: rp.selected ? hudTokens.cyanSoft : raised,
                      border: `1px solid ${rp.selected ? hudTokens.cyanLine : (rp.warn ? hudTokens.amber + '55' : line)}`,
                      borderRadius: 4,
                      display: 'grid', gridTemplateColumns: '14px 1fr auto auto auto', gap: 12, alignItems: 'center',
                    }}>
                      <span style={{
                        width: 14, height: 14, borderRadius: '50%',
                        border: `1px solid ${rp.selected ? accent : line}`,
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {rp.selected && <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent }} />}
                      </span>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ fontSize: 12, color: text, fontWeight: 600 }}>{rp.label}</span>
                          {rp.tag && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, padding: '2px 6px', background: panel, border: `1px solid ${line}`, color: textDim, letterSpacing: 0.5, borderRadius: 2 }}>{rp.tag}</span>}
                        </div>
                        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 3, letterSpacing: 0.3 }}>{rp.id} · {rp.items}</div>
                        {rp.warn && <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.amber, marginTop: 3, letterSpacing: 0.3 }}>⚠ {rp.warn}</div>}
                      </div>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.lime, fontWeight: 600 }}>{rp.size}</span>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, padding: '4px 8px', border: `1px solid ${line}`, borderRadius: 2, cursor: 'pointer' }}>↓ 下載</span>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, padding: '4px 8px', border: `1px solid ${line}`, borderRadius: 2, cursor: 'pointer' }}>👁 預覽</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Restore wizard for selected snapshot */}
            <div style={{ background: panel, border: `1px solid ${hudTokens.crimson}55`, borderRadius: radius, padding: 16, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.crimson, letterSpacing: 1.5 }}>↩ RESTORE · DESTRUCTIVE</span>
              </div>
              <div style={{ fontSize: 13, color: text, fontWeight: 600, marginBottom: 4 }}>從昨天 03:00 自動快照還原</div>
              <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3, marginBottom: 14 }}>snap_2025-01-25_0300 · 212 MB</div>

              <HudLabel color={textDim}>還原範圍</HudLabel>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  { k: '訊息 (messages.db)',           on: true,  n: '12,847 → 替換現有 14,892' },
                  { k: '場次 + Polls (sessions.db)',   on: true,  n: '4 場次 · 8 polls'           },
                  { k: '系統設定 (config.json)',        on: false, n: '保留現有設定（推薦）'        },
                  { k: 'Webhooks + API Tokens',         on: false, n: '保留現有 (避免外部服務斷)'    },
                  { k: 'Audit log',                     on: false, n: 'audit log 永遠不還原'        },
                ].map((s, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '14px 1fr', gap: 8, padding: '8px 10px',
                    background: s.on ? hudTokens.cyanSoft : raised,
                    border: `1px solid ${s.on ? hudTokens.cyanLine : line}`, borderRadius: 3,
                  }}>
                    <span style={{
                      width: 12, height: 12, marginTop: 2,
                      border: `1px solid ${s.on ? accent : line}`, borderRadius: 2,
                      background: s.on ? accent : 'transparent',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      color: '#000', fontSize: 9, fontWeight: 700,
                    }}>{s.on ? '✓' : ''}</span>
                    <div>
                      <div style={{ fontSize: 11, color: text, letterSpacing: 0.3 }}>{s.k}</div>
                      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 2, letterSpacing: 0.3 }}>{s.n}</div>
                    </div>
                  </div>
                ))}
              </div>

              <HudLabel color={textDim} top>Diff · 預覽</HudLabel>
              <div style={{
                marginTop: 8, padding: 10, background: '#000', border: `1px solid ${line}`, borderRadius: 4,
                fontFamily: hudTokens.fontMono, fontSize: 10, color: text, lineHeight: 1.7, letterSpacing: 0.3,
              }}>
                <div><span style={{ color: hudTokens.crimson }}>−</span> messages    : 14,892</div>
                <div><span style={{ color: hudTokens.lime }}>+</span> messages    : 12,847</div>
                <div style={{ color: textDim, marginLeft: 12 }}>＝ 將遺失最近 2,045 筆</div>
                <div style={{ marginTop: 4 }}><span style={{ color: hudTokens.crimson }}>−</span> sessions    : 5</div>
                <div><span style={{ color: hudTokens.lime }}>+</span> sessions    : 4</div>
                <div><span style={{ color: hudTokens.lime }}>=</span> config      : 保留現有</div>
              </div>

              <div style={{
                marginTop: 14, padding: 10,
                background: `${hudTokens.crimson}10`, border: `1px solid ${hudTokens.crimson}55`, borderRadius: 3,
                fontSize: 11, color: text, lineHeight: 1.6,
              }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.crimson, letterSpacing: 1.2 }}>⚠ 此操作無法復原</span><br/>
                還原前會自動建立「還原前快照」(pre_restore_yyyymmdd) 保留 7 天。請輸入 <code style={{ color: hudTokens.crimson, fontFamily: hudTokens.fontMono }}>RESTORE</code> 確認。
              </div>

              <div style={{
                marginTop: 8, padding: '8px 10px', background: raised, border: `1px solid ${hudTokens.crimson}55`, borderRadius: 3,
                fontFamily: hudTokens.fontMono, fontSize: 12, color: text, letterSpacing: 1,
              }}>RESTORE|</div>

              <div style={{
                marginTop: 'auto', paddingTop: 14, display: 'flex', gap: 8,
              }}>
                <span style={{ flex: 1, padding: '10px', textAlign: 'center', background: hudTokens.crimson, color: '#fff', borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 600, letterSpacing: 1.2, cursor: 'pointer' }}>↩ 開始還原</span>
                <span style={{ padding: '10px 14px', color: textDim, border: `1px solid ${line}`, borderRadius: 3, fontSize: 11, cursor: 'pointer' }}>取消</span>
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

Object.assign(window, { AdminWebhooksPage, AdminTokensPage, AdminBackupPage });
