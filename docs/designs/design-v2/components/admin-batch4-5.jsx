// Batch 4.5 — Extensions Catalog (v5.2 Sprint 1)
// Slido + Discord/OBS/Bookmarklet placeholders + inline Fire Token

function AdminExtensionsPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="extensions" title="Extensions" en="INTEGRATIONS · EXTENSIONS" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {
        const exts = [
          {
            id: 'slido', name: 'Slido Bridge', version: 'v0.2.0',
            kind: 'browser-extension', status: 'active', recentMsgs: 47,
            desc: '把 Slido 上的觀眾訊息即時轉發到 Danmu Fire,適合已經在用 Slido 卻想用本平台 overlay 的場景。',
            badge: 'OFFICIAL',
            steps: [
              { t: '下載 .crx',    s: 'Chrome / Edge · 1.2 MB' },
              { t: '在瀏覽器安裝',  s: 'chrome://extensions → 開發者模式 → 載入' },
              { t: '在 popup 填 Server URL', s: 'https://danmu.local:42' },
              { t: '貼上 Fire Token',         s: '從下方複製' },
              { t: '前往 slido.com 開始轉發', s: 'extension 自動偵測 slido 頁面' },
            ],
          },
          {
            id: 'discord', name: 'Discord Bridge', version: '即將支援',
            kind: 'bot', status: 'planned', recentMsgs: 0,
            desc: '把 Discord 指定頻道的訊息轉發成彈幕,跨社群活動用。',
            badge: 'COMING',
          },
          {
            id: 'obs', name: 'OBS Plugin', version: '即將支援',
            kind: 'native-plugin', status: 'planned', recentMsgs: 0,
            desc: '在 OBS 內以 Source 形式直接接收 Overlay,免再開瀏覽器。',
            badge: 'COMING',
          },
          {
            id: 'bookmarklet', name: 'Universal Bookmarklet', version: 'v0.1',
            kind: 'bookmarklet', status: 'beta', recentMsgs: 2,
            desc: '一段 JS bookmark,在任何聊天頁面點一下就把訊息轉發過來。沒有 extension 權限時的備案。',
            badge: 'BETA',
          },
        ];

        const fireTokenMasked = 'fire_a3f2b9c1•••••••••••••••••••••••••8d7e';

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 16, height: '100%', minHeight: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0, overflow: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <HudLabel color={textDim}>已知 extensions · 4 個</HudLabel>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.lime, letterSpacing: 0.5 }}>● 1 啟用 · 1 beta · 2 即將支援</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {exts.map(e => <ExtCard key={e.id} ext={e} panel={panel} raised={raised} line={line} text={text} textDim={textDim} accent={accent} radius={radius} />)}
              </div>
            </div>

            {/* Right — Fire Token panel */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 18, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
              <HudLabel color={accent}>⚿ FIRE TOKEN · 共享密鑰</HudLabel>
              <div style={{ fontSize: 12, color: textDim, marginTop: 8, lineHeight: 1.7 }}>
                Extension 用這個 token 走 <code style={{ fontFamily: hudTokens.fontMono, color: accent }}>/fire</code> 通道,可繞過 captcha 和 public 速率上限,但有 admin lane 自己的 ceiling 防止暴衝。
              </div>

              <div style={{
                marginTop: 14, padding: 12, background: '#000',
                border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 4,
                fontFamily: hudTokens.fontMono, fontSize: 12, color: hudTokens.lime,
                letterSpacing: 0.4, wordBreak: 'break-all',
              }}>{fireTokenMasked}</div>

              <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
                <span style={{ flex: 1, padding: '8px 12px', background: hudTokens.cyanSoft, border: `1px solid ${hudTokens.cyanLine}`, color: accent, borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 0.5, textAlign: 'center', cursor: 'pointer' }}>📋 複製</span>
                <span style={{ flex: 1, padding: '8px 12px', border: `1px solid ${hudTokens.amber}55`, background: `${hudTokens.amber}1c`, color: hudTokens.amber, borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 0.5, textAlign: 'center', cursor: 'pointer' }}>↻ 重新產生</span>
              </div>

              <div style={{
                marginTop: 14, padding: 10, background: `${hudTokens.amber}10`,
                border: `1px solid ${hudTokens.amber}55`, borderRadius: 3,
                fontSize: 11, color: text, lineHeight: 1.6,
              }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.amber, letterSpacing: 1.5 }}>⚠ 重新產生會立即失效舊 token</span><br/>
                所有已設定的 extension 需重新貼上新 token。
              </div>

              <HudLabel color={textDim} top>近 1 小時 admin lane 用量</HudLabel>
              <div style={{ marginTop: 8, padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 4 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
                  <span style={{ fontFamily: hudTokens.fontDisplay, fontSize: 22, color: accent, fontWeight: 600, letterSpacing: 0.5 }}>47</span>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>/ 200 上限/min</span>
                  <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.lime, letterSpacing: 0.5 }}>● 健康</span>
                </div>
                <svg width="100%" height="40" viewBox="0 0 300 40" preserveAspectRatio="none">
                  <polyline points="0,28 30,30 60,22 90,18 120,24 150,16 180,12 210,18 240,15 270,20 300,18"
                    fill={`${accent}22`} stroke={accent} strokeWidth="1.5" />
                </svg>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.4, marginTop: 4 }}>
                  60 分鐘前 → 現在
                </div>
              </div>

              <HudLabel color={textDim} top>近期來源 IP</HudLabel>
              <div style={{ marginTop: 8, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3, lineHeight: 1.7 }}>
                {[
                  { ip: '203.0.113.42', n: 38, ext: 'slido' },
                  { ip: '198.51.100.7', n:  9, ext: 'slido' },
                  { ip: '100.64.2.91',  n:  2, ext: 'bookmarklet' },
                ].map(r => (
                  <div key={r.ip} style={{ display: 'grid', gridTemplateColumns: '1fr 60px 50px', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: text }}>{r.ip}</span>
                    <span style={{ color: accent }}>{r.ext}</span>
                    <span style={{ textAlign: 'right' }}>{r.n} 則</span>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 'auto', paddingTop: 14, borderTop: `1px dashed ${line}`,
                fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5, lineHeight: 1.7,
              }}>
                Token 存於 <code style={{ color: accent }}>~/.danmu/.env</code> · ENV: <code style={{ color: accent }}>DANMU_FIRE_TOKEN</code><br/>
                重新產生後會 hot-reload,不需重啟 server
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

function ExtCard({ ext, panel, raised, line, text, textDim, accent, radius }) {
  const statusCol = {
    active:  { dot: hudTokens.lime,    label: '● 啟用中',     pill: hudTokens.lime },
    beta:    { dot: hudTokens.amber,   label: '◐ Beta',       pill: hudTokens.amber },
    planned: { dot: textDim,           label: '○ 即將支援',   pill: textDim },
  }[ext.status];

  const badgeCol = ext.badge === 'OFFICIAL' ? hudTokens.cyan
                : ext.badge === 'BETA'      ? hudTokens.amber
                                            : textDim;

  return (
    <div style={{
      background: panel,
      border: `1px solid ${ext.status === 'active' ? hudTokens.cyanLine : line}`,
      borderRadius: radius, padding: 16,
      display: 'flex', flexDirection: 'column', gap: 10,
      opacity: ext.status === 'planned' ? 0.6 : 1,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <ExtIcon kind={ext.id} accent={accent} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: text }}>{ext.name}</span>
            <span style={{
              fontFamily: hudTokens.fontMono, fontSize: 8, letterSpacing: 1,
              padding: '1px 5px', borderRadius: 2,
              background: `${badgeCol}1c`, color: badgeCol, border: `1px solid ${badgeCol}66`,
            }}>{ext.badge}</span>
          </div>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 2, letterSpacing: 0.3 }}>
            {ext.kind} · {ext.version}
          </div>
        </div>
        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: statusCol.pill, letterSpacing: 0.5 }}>{statusCol.label}</span>
      </div>

      <div style={{ fontSize: 12, color: textDim, lineHeight: 1.6 }}>{ext.desc}</div>

      {ext.status === 'active' && (
        <>
          <div style={{
            display: 'flex', gap: 12, alignItems: 'center',
            padding: '8px 10px', background: raised, borderRadius: 3,
          }}>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1 }}>近 5 分鐘訊息</span>
            <span style={{ fontFamily: hudTokens.fontDisplay, fontSize: 18, color: accent, fontWeight: 600, letterSpacing: 0.5 }}>{ext.recentMsgs}</span>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.4 }}>則</span>
            <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.lime, letterSpacing: 0.5 }}>{statusCol.label.replace('● ', '● ')}</span>
          </div>

          {/* Steps */}
          <div style={{ marginTop: 4 }}>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim, marginBottom: 6 }}>安裝步驟</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {ext.steps.map((st, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 11 }}>
                  <span style={{
                    fontFamily: hudTokens.fontMono, fontSize: 9,
                    width: 16, height: 16, lineHeight: '16px', textAlign: 'center',
                    background: hudTokens.cyanSoft, color: accent, borderRadius: '50%',
                    border: `1px solid ${hudTokens.cyanLine}`, flexShrink: 0, marginTop: 1,
                  }}>{i + 1}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: text }}>{st.t}</div>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3, marginTop: 1 }}>{st.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
            <span style={{ flex: 1, padding: '8px 10px', background: accent, color: '#000', borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 11, fontWeight: 700, letterSpacing: 0.5, textAlign: 'center', cursor: 'pointer' }}>↓ 下載 .crx</span>
            <span style={{ padding: '8px 10px', border: `1px solid ${line}`, color: text, borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 0.5, cursor: 'pointer' }}>說明文件</span>
          </div>
        </>
      )}

      {ext.status === 'beta' && (
        <>
          <div style={{
            padding: '8px 10px', background: raised, borderRadius: 3,
            fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3, lineHeight: 1.6,
          }}>
            把這段 JS 拖到書籤列,在任何聊天頁點一下開始轉發。<br/>
            近 5 分鐘 · {ext.recentMsgs} 則
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ flex: 1, padding: '8px 10px', background: accent, color: '#000', borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 11, fontWeight: 700, letterSpacing: 0.5, textAlign: 'center', cursor: 'pointer' }}>📋 複製 bookmarklet</span>
          </div>
        </>
      )}

      {ext.status === 'planned' && (
        <div style={{
          padding: '10px 12px', background: raised, borderRadius: 3,
          fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4, textAlign: 'center',
        }}>👀 加入 watchlist · 上線時通知我</div>
      )}
    </div>
  );
}

function ExtIcon({ kind, accent }) {
  const palette = {
    slido:       { bg: '#fb764311', col: '#fb7643', glyph: 'S' },
    discord:     { bg: '#5865f211', col: '#5865f2', glyph: 'D' },
    obs:         { bg: '#30245011', col: '#9b8bdb', glyph: 'O' },
    bookmarklet: { bg: `${accent}1c`, col: accent,  glyph: '⌘' },
  }[kind];
  return (
    <span style={{
      width: 36, height: 36, borderRadius: 6,
      background: palette.bg, color: palette.col,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: hudTokens.fontDisplay, fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
      border: `1px solid ${palette.col}55`, flexShrink: 0,
    }}>{palette.glyph}</span>
  );
}

Object.assign(window, { AdminExtensionsPage });
