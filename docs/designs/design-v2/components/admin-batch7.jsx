// Batch A — operator inbox + investigative tools
// (1) Notifications inbox  (2) Message detail drawer
// (3) Cross-session search (4) Audience list

// =========================================================================
// (1) Notifications Inbox · 通知中心
// =========================================================================
function AdminNotificationsPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="notifications" title="通知中心" en="ADMIN LANE · NOTIFICATION INBOX" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {

        const groups = [
          { k: '全部',     n: 24, on: false },
          { k: '未讀',     n: 8,  on: true  },
          { k: '已標記',   n: 3,  on: false },
          { k: '已封存',   n: 142,on: false },
        ];

        const sources = [
          { k: 'Fire Token',       n: 4 },
          { k: 'Webhooks',         n: 6 },
          { k: 'Backup',           n: 2 },
          { k: 'Moderation',       n: 9 },
          { k: 'System',           n: 3 },
        ];

        const items = [
          {
            id: 'n01', sev: 'crit', src: 'Backup', t: '14 分鐘前',
            title: 'D-17 自動快照失敗 · SQLite checksum mismatch',
            desc: '凌晨 03:00 寫入時中斷,該日 54 筆訊息未含在快照內。已自動發送 Slack alert + email,建議從 D-16 還原並補錄。',
            actions: ['查看快照', '從 D-16 還原', '標記已處理'],
            unread: true, starred: true,
          },
          {
            id: 'n02', sev: 'warn', src: 'Webhooks', t: '32 分鐘前',
            title: 'Internal Slack endpoint 失敗率攀升',
            desc: 'webhook wh_03 近 1h 失敗率 11.3%(18/160),對方端點回 503。目前 retry queue 有 2 筆排隊。',
            actions: ['查看 endpoint', '暫停推送', '標記已處理'],
            unread: true,
          },
          {
            id: 'n03', sev: 'warn', src: 'Fire Token', t: '47 分鐘前',
            title: '單分鐘請求 178 接近 ceiling 200',
            desc: '13:48 出現 burst,extension slido 來源占 87%。已自動觸發限流,3 分鐘後速率恢復 86/min。',
            actions: ['查看 Fire Token', '提高 ceiling', '標記已處理'],
            unread: true,
          },
          {
            id: 'n04', sev: 'info', src: 'Moderation', t: '1 小時前',
            title: '指紋 fp_a3f2…b9c1 被自動封禁',
            desc: '5 分鐘內送出 12 筆 dirty word(>0.85),命中 anti-spam 規則 #4。已加入 deny list,持續 7 天。',
            actions: ['查看指紋', '解除封禁', '標記已處理'],
            unread: true,
          },
          {
            id: 'n05', sev: 'info', src: 'System', t: '今天 09:14',
            title: 'Fire Token 已重新產生 by admin',
            desc: '舊 token 立即失效。新 token 已寫入 .env,已通知 webhook 訂閱者 token.rotated 事件。',
            actions: ['查看 audit log'],
            unread: true,
          },
          {
            id: 'n06', sev: 'good', src: 'Backup', t: '昨天 03:01',
            title: '昨天自動快照完成 · 212 MB · 64s',
            desc: 'snap_2025-01-25_0300 · 12,847 訊息 · 4 場次 · 8 polls。SHA-256 已校驗。',
            actions: ['下載快照'],
          },
          {
            id: 'n07', sev: 'info', src: 'Moderation', t: '昨天 21:18',
            title: '由觀眾舉報的訊息已自動隱藏',
            desc: 'msg_8d7e — 3 位觀眾舉報「人身攻擊」。已自動進入遮罩狀態,等待管理員確認。',
            actions: ['查看訊息', '確認封鎖', '取消遮罩'],
          },
          {
            id: 'n08', sev: 'info', src: 'Webhooks', t: '2 天前',
            title: 'Discord webhook 連續成功 1,000 次',
            desc: '近 24h 共 1,287 次推送,失敗 3 筆(均已 retry 成功)。健康狀態維持綠燈。',
            actions: [],
          },
        ];

        const sevMap = {
          crit: { c: hudTokens.crimson, label: 'CRIT',  icon: '⊗' },
          warn: { c: hudTokens.amber,   label: 'WARN',  icon: '◬' },
          info: { c: accent,            label: 'INFO',  icon: '◉' },
          good: { c: hudTokens.lime,    label: 'OK',    icon: '✓' },
        };

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr 380px', gap: 14, height: '100%', minHeight: 0 }}>
            {/* LEFT FILTER */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14, overflow: 'auto' }}>
              <HudLabel color={textDim}>狀態</HudLabel>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {groups.map(g => (
                  <div key={g.k} style={{
                    display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px',
                    background: g.on ? hudTokens.cyanSoft : 'transparent',
                    border: `1px solid ${g.on ? hudTokens.cyanLine : 'transparent'}`,
                    borderRadius: 3, cursor: 'pointer',
                  }}>
                    <span style={{ flex: 1, fontSize: 12, color: g.on ? text : textDim }}>{g.k}</span>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: g.on ? accent : textDim, letterSpacing: 0.5 }}>{g.n}</span>
                  </div>
                ))}
              </div>

              <HudLabel color={textDim} top>來源 · Source</HudLabel>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {sources.map(s => (
                  <div key={s.k} style={{
                    display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px',
                    fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.3,
                  }}>
                    <span style={{ flex: 1 }}>{s.k}</span>
                    <span style={{ fontSize: 10 }}>{s.n}</span>
                  </div>
                ))}
              </div>

              <HudLabel color={textDim} top>嚴重度</HudLabel>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {Object.entries(sevMap).map(([k, v]) => (
                  <div key={k} style={{
                    display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px',
                    fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.5,
                  }}>
                    <span style={{ color: v.c }}>{v.icon}</span>
                    <span style={{ flex: 1 }}>{v.label}</span>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 14, padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 3,
                fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3, lineHeight: 1.6,
              }}>
                <span style={{ color: accent }}>提示:</span> 通知保留 30 天,超過會自動封存到 Audit Log。
              </div>
            </div>

            {/* CENTER LIST */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <HudLabel color={textDim}>未讀 · 8 筆</HudLabel>
                <span style={{ marginLeft: 'auto', display: 'flex', gap: 6, fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 0.4 }}>
                  <span style={{ padding: '6px 12px', color: textDim, border: `1px solid ${line}`, borderRadius: 3, cursor: 'pointer' }}>✓ 全部已讀</span>
                  <span style={{ padding: '6px 12px', color: textDim, border: `1px solid ${line}`, borderRadius: 3, cursor: 'pointer' }}>↓ 封存全部</span>
                  <span style={{ padding: '6px 12px', background: hudTokens.cyanSoft, color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 3, cursor: 'pointer' }}>⚙ 通知偏好</span>
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {items.map(it => {
                  const sev = sevMap[it.sev];
                  const selected = it.id === 'n01';
                  return (
                    <div key={it.id} style={{
                      padding: 12,
                      background: selected ? hudTokens.cyanSoft : (it.unread ? raised : 'transparent'),
                      border: `1px solid ${selected ? hudTokens.cyanLine : (it.unread ? line : 'transparent')}`,
                      borderLeft: `3px solid ${sev.c}`,
                      borderRadius: 4, cursor: 'pointer',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                        {it.unread && <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent, boxShadow: `0 0 4px ${accent}` }} />}
                        {it.starred && <span style={{ color: hudTokens.amber, fontSize: 10 }}>★</span>}
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: sev.c, letterSpacing: 1.2, padding: '2px 6px', background: `${sev.c}1c`, border: `1px solid ${sev.c}55`, borderRadius: 2 }}>
                          {sev.label}
                        </span>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>{it.src}</span>
                        <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3 }}>{it.t}</span>
                      </div>
                      <div style={{ fontSize: 13, color: text, fontWeight: it.unread ? 600 : 400, marginBottom: 4 }}>{it.title}</div>
                      <div style={{ fontSize: 11, color: textDim, lineHeight: 1.5, letterSpacing: 0.2 }}>{it.desc}</div>
                      {it.actions.length > 0 && (
                        <div style={{ display: 'flex', gap: 4, marginTop: 8, flexWrap: 'wrap' }}>
                          {it.actions.map((a, i) => {
                            const primary = i === 0;
                            return (
                              <span key={a} style={{
                                fontFamily: hudTokens.fontMono, fontSize: 10, padding: '4px 10px',
                                background: primary ? hudTokens.cyanSoft : 'transparent',
                                color: primary ? accent : textDim,
                                border: `1px solid ${primary ? hudTokens.cyanLine : line}`, borderRadius: 2,
                                letterSpacing: 0.3, cursor: 'pointer',
                              }}>{a}</span>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT DETAIL — selected = n01 */}
            <div style={{ background: panel, border: `1px solid ${hudTokens.crimson}55`, borderRadius: radius, padding: 16, overflow: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.crimson, letterSpacing: 1.5, padding: '2px 8px', background: `${hudTokens.crimson}1c`, border: `1px solid ${hudTokens.crimson}55`, borderRadius: 2 }}>CRIT · 需要操作</span>
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim }}>14m ago · 03:00:42</span>
              </div>
              <div style={{ fontSize: 14, color: text, fontWeight: 600, marginTop: 6, marginBottom: 8, lineHeight: 1.4 }}>
                D-17 自動快照失敗 · SQLite checksum mismatch
              </div>

              <HudLabel color={textDim}>事件鏈</HudLabel>
              <div style={{ marginTop: 8, fontFamily: hudTokens.fontMono, fontSize: 11, color: text, lineHeight: 1.7, letterSpacing: 0.3, padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 3 }}>
                <div style={{ color: textDim }}>03:00:00  <span style={{ color: hudTokens.lime }}>scheduler</span> 觸發 daily backup</div>
                <div style={{ color: textDim }}>03:00:14  <span style={{ color: text }}>messages.db</span> 開始寫入(2.1 GB)</div>
                <div style={{ color: textDim }}>03:00:38  <span style={{ color: hudTokens.amber }}>⚠ I/O timeout</span> · disk pressure 88%</div>
                <div style={{ color: textDim }}>03:00:42  <span style={{ color: hudTokens.crimson }}>✕ checksum mismatch</span> · 中止寫入</div>
                <div style={{ color: textDim }}>03:00:43  <span style={{ color: text }}>cleanup</span> 移除 partial file</div>
                <div style={{ color: textDim }}>03:00:44  <span style={{ color: accent }}>notify</span> Slack + email + this inbox</div>
              </div>

              <HudLabel color={textDim} top>影響範圍</HudLabel>
              <div style={{
                marginTop: 8, padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 3,
                fontSize: 11, color: text, lineHeight: 1.7, letterSpacing: 0.3,
              }}>
                · 該日 <span style={{ color: hudTokens.amber }}>54 筆訊息</span> 不在任何快照內<br/>
                · D-16 快照仍可用(212 MB · 12,847 訊息)<br/>
                · 距下次自動快照還有 <span style={{ color: accent }}>15h 14m</span>
              </div>

              <HudLabel color={textDim} top>建議動作</HudLabel>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ padding: 10, background: hudTokens.cyanSoft, color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 3, fontSize: 12, fontFamily: hudTokens.fontMono, letterSpacing: 0.4, cursor: 'pointer' }}>① ↩ 從 D-16 還原 (推薦)</span>
                <span style={{ padding: 10, background: 'transparent', color: text, border: `1px solid ${line}`, borderRadius: 3, fontSize: 12, fontFamily: hudTokens.fontMono, letterSpacing: 0.4, cursor: 'pointer' }}>② 立即手動快照</span>
                <span style={{ padding: 10, background: 'transparent', color: text, border: `1px solid ${line}`, borderRadius: 3, fontSize: 12, fontFamily: hudTokens.fontMono, letterSpacing: 0.4, cursor: 'pointer' }}>③ 檢查磁碟空間 + I/O</span>
              </div>

              <div style={{ marginTop: 14, display: 'flex', gap: 6 }}>
                <span style={{ flex: 1, padding: '8px', textAlign: 'center', color: textDim, border: `1px solid ${line}`, borderRadius: 3, fontSize: 11, cursor: 'pointer' }}>✓ 標記已處理</span>
                <span style={{ padding: '8px 12px', color: textDim, border: `1px solid ${line}`, borderRadius: 3, fontSize: 11, cursor: 'pointer' }}>📌 釘選</span>
                <span style={{ padding: '8px 12px', color: textDim, border: `1px solid ${line}`, borderRadius: 3, fontSize: 11, cursor: 'pointer' }}>↓ 封存</span>
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

// =========================================================================
// (2) Message Detail Drawer · 訊息細節
// =========================================================================
function AdminMessageDetailPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="messages" title="訊息細節" en="ADMIN LANE · MESSAGE INSPECT" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: 14, height: '100%', minHeight: 0 }}>
            {/* LEFT — list (faded background, drawer is the focus) */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14, overflow: 'hidden', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <HudLabel color={textDim}>訊息列表 · 5 分鐘前 — 現在</HudLabel>
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>1,287 筆 · live</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, opacity: 0.4 }}>
                {[
                  { t: '14:02:18', n: '小明', m: '這個 demo 看起來超讚 👏', col: text },
                  { t: '14:02:14', n: '訪客6824', m: '想問講者幾個問題', col: text },
                  { t: '14:02:11', n: '阿傑', m: '+1 求簡報', col: text },
                  { t: '14:02:08', n: 'fp_a3f2', m: '<已遮罩 · profanity>', col: hudTokens.amber },
                  { t: '14:02:04', n: 'Yvonne', m: '今天的場地有點冷 🥶', col: text },
                  { t: '14:01:58', n: '匿名', m: '請問 Q&A 環節在哪裡', col: text },
                ].map((r, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '70px 90px 1fr', gap: 8, padding: '8px 10px',
                    fontFamily: hudTokens.fontMono, fontSize: 11, alignItems: 'center', borderBottom: `1px solid ${line}`,
                  }}>
                    <span style={{ color: textDim }}>{r.t}</span>
                    <span style={{ color: text }}>{r.n}</span>
                    <span style={{ color: r.col, fontFamily: 'inherit', fontSize: 12 }}>{r.m}</span>
                  </div>
                ))}
              </div>
              {/* Selected row spotlight */}
              <div style={{
                position: 'absolute', left: 14, right: 14, top: 174, height: 36,
                background: hudTokens.cyanSoft, border: `1px solid ${accent}`,
                borderRadius: 3, pointerEvents: 'none',
                boxShadow: `0 0 0 2px ${accent}33, 0 4px 24px ${accent}33`,
              }}>
                <div style={{
                  position: 'absolute', right: -10, top: '50%', transform: 'translateY(-50%)',
                  width: 16, height: 16, background: accent,
                  clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                }} />
              </div>
              <div style={{
                position: 'absolute', inset: 0, background: `linear-gradient(90deg, transparent 60%, ${panel} 100%)`,
                pointerEvents: 'none',
              }} />
            </div>

            {/* RIGHT — DRAWER (the focus) */}
            <div style={{
              background: panel, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: radius,
              padding: 16, overflow: 'auto', display: 'flex', flexDirection: 'column',
              boxShadow: `-8px 0 32px rgba(0,0,0,0.3)`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 1.5 }}>MESSAGE · INSPECTOR</span>
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, cursor: 'pointer' }}>← 上一筆</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, cursor: 'pointer' }}>下一筆 →</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 14, color: textDim, cursor: 'pointer' }}>✕</span>
              </div>

              {/* Message bubble */}
              <div style={{
                marginTop: 10, padding: 14, background: raised, border: `1px solid ${line}`, borderRadius: 4,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#7c3aed', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600 }}>阿</div>
                  <div>
                    <div style={{ fontSize: 12, color: text, fontWeight: 600 }}>阿傑</div>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.3 }}>fp_a3f2…b9c1 · 14:02:11.428</div>
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.lime, padding: '2px 6px', background: `${hudTokens.lime}1c`, border: `1px solid ${hudTokens.lime}55`, borderRadius: 2, letterSpacing: 0.5 }}>SHOWN</span>
                  </div>
                </div>
                <div style={{ fontSize: 18, color: text, lineHeight: 1.5, letterSpacing: 0.3, padding: '4px 0' }}>
                  +1 求簡報
                </div>
                <div style={{ marginTop: 8, paddingTop: 8, borderTop: `1px dashed ${line}`, display: 'flex', gap: 12, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3 }}>
                  <span>id <span style={{ color: text }}>msg_8d7e</span></span>
                  <span>session <span style={{ color: text }}>sess_a3f2</span></span>
                  <span>color <span style={{ color: '#7c3aed' }}>#7c3aed</span></span>
                </div>
              </div>

              {/* Action bar */}
              <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 4 }}>
                {[
                  { i: '★', l: '置頂', c: hudTokens.amber },
                  { i: '◐', l: '遮罩', c: textDim },
                  { i: '⊘', l: '隱藏', c: hudTokens.crimson },
                  { i: '⊗', l: '封禁指紋', c: hudTokens.crimson, danger: true },
                  { i: '↗', l: '回覆 overlay', c: accent },
                ].map(b => (
                  <span key={b.l} style={{
                    padding: '8px 4px', textAlign: 'center', fontSize: 11, color: b.c,
                    border: `1px solid ${b.danger ? hudTokens.crimson + '55' : line}`,
                    borderRadius: 3, cursor: 'pointer',
                    background: b.danger ? `${hudTokens.crimson}10` : 'transparent',
                  }}>
                    <div style={{ fontSize: 14, marginBottom: 2 }}>{b.i}</div>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 0.4 }}>{b.l}</div>
                  </span>
                ))}
              </div>

              <HudLabel color={textDim} top>指紋活動 · fp_a3f2…b9c1</HudLabel>
              <div style={{
                marginTop: 8, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6,
                padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 3,
              }}>
                <div>
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1 }}>本場</div>
                  <div style={{ fontSize: 18, color: text, fontWeight: 600 }}>14<span style={{ fontSize: 11, color: textDim, marginLeft: 4 }}>則</span></div>
                </div>
                <div>
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1 }}>歷史</div>
                  <div style={{ fontSize: 18, color: text, fontWeight: 600 }}>342<span style={{ fontSize: 11, color: textDim, marginLeft: 4 }}>則</span></div>
                </div>
                <div>
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1 }}>違規</div>
                  <div style={{ fontSize: 18, color: hudTokens.amber, fontWeight: 600 }}>0</div>
                </div>
              </div>

              <div style={{ marginTop: 6, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3, lineHeight: 1.6 }}>
                首次出現 <span style={{ color: text }}>32 天前</span> · 最常用暱稱 <span style={{ color: text }}>阿傑 / Jay / 傑哥</span> · IP <span style={{ color: text }}>203.0.113.42</span>(TW · Taipei)
              </div>

              <HudLabel color={textDim} top>同指紋最近訊息</HudLabel>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  { t: '14:02:11', m: '+1 求簡報', s: 'sent', c: hudTokens.lime, current: true },
                  { t: '13:58:42', m: '這個 demo 看起來超讚 👏', s: 'sent', c: hudTokens.lime },
                  { t: '13:54:18', m: '請問 Q&A 在第幾段', s: 'sent', c: hudTokens.lime },
                  { t: '13:48:02', m: '聲音可以再大一點嗎', s: 'sent', c: hudTokens.lime },
                  { t: '13:42:14', m: '<已遮罩 · 重複訊息>', s: 'masked', c: hudTokens.amber },
                ].map((r, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '60px 1fr 50px', gap: 8, padding: '6px 8px',
                    background: r.current ? hudTokens.cyanSoft : 'transparent',
                    border: `1px solid ${r.current ? hudTokens.cyanLine : 'transparent'}`,
                    borderRadius: 2, fontFamily: hudTokens.fontMono, fontSize: 11, alignItems: 'center',
                  }}>
                    <span style={{ color: textDim }}>{r.t}</span>
                    <span style={{ color: text, fontSize: 11.5 }}>{r.m}</span>
                    <span style={{ color: r.c, fontSize: 9, letterSpacing: 0.5, textAlign: 'right' }}>{r.s.toUpperCase()}</span>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 14, padding: 10, background: `${accent}10`, border: `1px solid ${accent}55`, borderRadius: 3,
                fontSize: 11, color: text, lineHeight: 1.6,
              }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: accent, letterSpacing: 1.2 }}>BAN 預覽</span><br/>
                封禁此指紋會同步影響該觀眾在 <span style={{ color: text }}>過去 / 現在 / 未來</span> 所有場次的發送權。<br/>
                預估影響: <span style={{ color: hudTokens.amber }}>14 則本場訊息將被遮罩</span>。
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

// =========================================================================
// (3) Cross-Session Search · 跨場次訊息搜尋
// =========================================================================
function AdminSearchPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="search" title="跨場次搜尋" en="ADMIN LANE · GLOBAL SEARCH" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 14, height: '100%', minHeight: 0 }}>
            {/* LEFT FILTERS */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14, overflow: 'auto' }}>
              <HudLabel color={textDim}>時段 · Time range</HudLabel>
              <div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
                {['今天', '7 天', '30 天', '90 天', '全部', '自訂'].map((v, i) => (
                  <span key={v} style={{
                    padding: '6px', textAlign: 'center', fontFamily: hudTokens.fontMono, fontSize: 11,
                    background: i === 2 ? hudTokens.cyanSoft : raised,
                    color: i === 2 ? accent : textDim,
                    border: `1px solid ${i === 2 ? hudTokens.cyanLine : line}`, borderRadius: 3, cursor: 'pointer',
                  }}>{v}</span>
                ))}
              </div>

              <HudLabel color={textDim} top>場次 · Sessions</HudLabel>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4, maxHeight: 200, overflow: 'auto' }}>
                {[
                  { n: 'Q1 OKR Town Hall',    d: '今天 13:30-15:30', sel: true },
                  { n: '產品週會 #142',        d: '昨天 14:00-15:00', sel: true },
                  { n: 'AI 讀書會 vol.7',      d: '3 天前',           sel: true },
                  { n: 'Engineering All-Hands', d: '5 天前',           sel: false },
                  { n: '新人歡迎會',            d: '12 天前',          sel: false },
                  { n: '客戶 demo · ACME',     d: '18 天前',          sel: false },
                ].map(s => (
                  <label key={s.n} style={{
                    display: 'grid', gridTemplateColumns: '12px 1fr', gap: 8, padding: '6px 8px',
                    background: s.sel ? hudTokens.cyanSoft : 'transparent',
                    border: `1px solid ${s.sel ? hudTokens.cyanLine : 'transparent'}`,
                    borderRadius: 2, cursor: 'pointer',
                  }}>
                    <span style={{
                      width: 11, height: 11, marginTop: 2,
                      border: `1px solid ${s.sel ? accent : line}`, borderRadius: 1,
                      background: s.sel ? accent : 'transparent',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      color: '#000', fontSize: 8, fontWeight: 700,
                    }}>{s.sel ? '✓' : ''}</span>
                    <div>
                      <div style={{ fontSize: 11, color: text, letterSpacing: 0.3 }}>{s.n}</div>
                      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, marginTop: 1, letterSpacing: 0.3 }}>{s.d}</div>
                    </div>
                  </label>
                ))}
              </div>

              <HudLabel color={textDim} top>狀態</HudLabel>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  { l: '已顯示 (shown)',  on: true,  c: hudTokens.lime },
                  { l: '已置頂 (pinned)', on: true,  c: hudTokens.amber },
                  { l: '已遮罩 (masked)', on: false, c: textDim },
                  { l: '已封鎖 (blocked)', on: false, c: hudTokens.crimson },
                ].map(s => (
                  <label key={s.l} style={{
                    display: 'flex', alignItems: 'center', gap: 8, padding: '5px 8px',
                    fontFamily: hudTokens.fontMono, fontSize: 11, color: s.on ? text : textDim, letterSpacing: 0.3, cursor: 'pointer',
                  }}>
                    <span style={{
                      width: 11, height: 11, border: `1px solid ${s.on ? accent : line}`, borderRadius: 1,
                      background: s.on ? accent : 'transparent',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      color: '#000', fontSize: 8, fontWeight: 700,
                    }}>{s.on ? '✓' : ''}</span>
                    <span style={{ color: s.c }}>●</span>
                    <span>{s.l}</span>
                  </label>
                ))}
              </div>

              <HudLabel color={textDim} top>進階 · Operators</HudLabel>
              <div style={{
                marginTop: 8, padding: 10, background: '#000', border: `1px solid ${line}`, borderRadius: 3,
                fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, lineHeight: 1.7, letterSpacing: 0.3,
              }}>
                <div><span style={{ color: accent }}>"完整短語"</span></div>
                <div><span style={{ color: accent }}>fp:</span>a3f2 <span style={{ color: textDim }}># 指紋</span></div>
                <div><span style={{ color: accent }}>nick:</span>阿傑</div>
                <div><span style={{ color: accent }}>session:</span>sess_a3f2</div>
                <div><span style={{ color: accent }}>after:</span>2025-01-20</div>
                <div><span style={{ color: accent }}>has:</span>image / poll / vote</div>
              </div>
            </div>

            {/* RIGHT — Search results */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
              {/* Search bar */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px',
                background: raised, border: `1px solid ${accent}`, borderRadius: 3,
              }}>
                <span style={{ color: accent, fontSize: 14 }}>⌕</span>
                <span style={{ flex: 1, fontFamily: hudTokens.fontMono, fontSize: 14, color: text, letterSpacing: 0.3 }}>
                  簡報 OR slides nick:阿傑|
                </span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, padding: '3px 8px', background: panel, border: `1px solid ${line}`, borderRadius: 2, letterSpacing: 0.5 }}>⌘K</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, padding: '3px 8px', background: panel, border: `1px solid ${line}`, borderRadius: 2, letterSpacing: 0.5 }}>?</span>
              </div>

              <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 12 }}>
                <HudLabel color={textDim}>247 筆結果 · 3 個場次 · 18ms</HudLabel>
                <span style={{ marginLeft: 'auto', display: 'flex', gap: 6, fontFamily: hudTokens.fontMono, fontSize: 11 }}>
                  <span style={{ padding: '4px 10px', background: hudTokens.cyanSoft, color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 2 }}>相關度</span>
                  <span style={{ padding: '4px 10px', color: textDim, border: `1px solid ${line}`, borderRadius: 2 }}>時間 ↓</span>
                  <span style={{ padding: '4px 10px', color: textDim, border: `1px solid ${line}`, borderRadius: 2 }}>↓ 匯出 CSV</span>
                </span>
              </div>

              {/* Histogram */}
              <div style={{ marginTop: 12, padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 3 }}>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1, marginBottom: 6 }}>
                  TIME DISTRIBUTION · 247 hits across 3 sessions
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 1, height: 50 }}>
                  {[2, 5, 8, 12, 18, 24, 32, 28, 22, 18, 14, 10, 8, 4, 12, 32, 64, 88, 124, 142, 98, 62, 24, 8].map((v, i) => (
                    <div key={i} style={{
                      flex: 1, height: `${(v / 142) * 100}%`,
                      background: i >= 16 && i <= 21 ? accent : `${accent}55`,
                      borderRadius: '1px 1px 0 0',
                    }} />
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, marginTop: 4, letterSpacing: 0.3 }}>
                  <span>30 天前</span><span>peak · 今天 13:30</span><span>現在</span>
                </div>
              </div>

              {/* Results */}
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { sess: 'Q1 OKR Town Hall',     t: '今天 14:02:11', n: '阿傑',       fp: 'fp_a3f2',  m: '+1 求簡報',                          c: '#7c3aed', stat: 'shown',  hl: '簡報' },
                  { sess: 'Q1 OKR Town Hall',     t: '今天 13:54:18', n: '阿傑',       fp: 'fp_a3f2',  m: '簡報可以放雲端嗎',                    c: '#7c3aed', stat: 'shown',  hl: '簡報' },
                  { sess: 'Q1 OKR Town Hall',     t: '今天 13:48:02', n: 'Yvonne',     fp: 'fp_8d7e',  m: '剛剛那張簡報好酷',                    c: '#06b6d4', stat: 'pinned', hl: '簡報' },
                  { sess: '產品週會 #142',         t: '昨天 14:32:08', n: '阿傑',       fp: 'fp_a3f2',  m: '能分享一下昨天的 slides 嗎',          c: '#7c3aed', stat: 'shown',  hl: 'slides' },
                  { sess: 'AI 讀書會 vol.7',       t: '3 天前',         n: '阿傑',       fp: 'fp_a3f2',  m: '請問講者的簡報哪邊可以下載',         c: '#7c3aed', stat: 'shown',  hl: '簡報' },
                ].map((r, i) => {
                  const statCol = r.stat === 'pinned' ? hudTokens.amber : hudTokens.lime;
                  return (
                    <div key={i} style={{
                      padding: 12, background: raised, border: `1px solid ${line}`, borderRadius: 3, cursor: 'pointer',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: r.c }} />
                        <span style={{ fontSize: 12, color: text, fontWeight: 600 }}>{r.n}</span>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3 }}>{r.fp}</span>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: statCol, padding: '1px 6px', background: `${statCol}1c`, border: `1px solid ${statCol}55`, borderRadius: 2, letterSpacing: 0.6 }}>{r.stat.toUpperCase()}</span>
                        <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 0.3 }}>{r.sess}</span>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3 }}>{r.t}</span>
                      </div>
                      <div style={{ fontSize: 13, color: text, lineHeight: 1.5, letterSpacing: 0.3 }}>
                        {r.m.split(r.hl).map((part, j, arr) => (
                          <React.Fragment key={j}>
                            {part}
                            {j < arr.length - 1 && (
                              <mark style={{ background: `${accent}55`, color: text, padding: '1px 3px', borderRadius: 2 }}>{r.hl}</mark>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  );
                })}

                <div style={{ padding: '12px', textAlign: 'center', fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.4 }}>
                  ↓ 載入更多 (242 / 247)
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

// =========================================================================
// (4) Audience List · 當下連線觀眾
// =========================================================================
function AdminAudiencePage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="audience" title="觀眾列表" en="ADMIN LANE · LIVE AUDIENCE" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {

        const audience = [
          { fp: 'fp_a3f2…b9c1', nick: '阿傑',           geo: 'TW · Taipei',  ip: '203.0.113.42',  ua: 'iPhone · Safari',  joined: '32m',  msgs: 14, score: 92, status: 'active',   color: '#7c3aed', risk: 'low' },
          { fp: 'fp_8d7e…2f4a', nick: 'Yvonne',         geo: 'TW · Taipei',  ip: '198.51.100.7',  ua: 'Mac · Chrome',     joined: '28m',  msgs: 8,  score: 88, status: 'active',   color: '#06b6d4', risk: 'low' },
          { fp: 'fp_4c1b…7d8e', nick: '訪客6824',       geo: 'JP · Tokyo',   ip: '198.51.100.42', ua: 'Mac · Safari',     joined: '24m',  msgs: 4,  score: 64, status: 'active',   color: '#84cc16', risk: 'low' },
          { fp: 'fp_2d9e…8a3c', nick: '小明',           geo: 'TW · Taoyuan', ip: '100.64.2.91',   ua: 'Android · Chrome', joined: '18m',  msgs: 22, score: 97, status: 'active',   color: '#f97316', risk: 'low' },
          { fp: 'fp_9e1c…4d2f', nick: '匿名',           geo: 'US · CA',      ip: '54.230.18.4',   ua: 'Linux · Firefox',  joined: '14m',  msgs: 38, score: 32, status: 'flagged',  color: '#ef4444', risk: 'high', warn: '5min 12 訊息 · 接近 spam threshold' },
          { fp: 'fp_1a4f…9b3d', nick: '阿傑',           geo: 'TW · Taipei',  ip: '203.0.113.42',  ua: 'iPad · Safari',    joined: '12m',  msgs: 6,  score: 84, status: 'duplicate', color: '#7c3aed', risk: 'low', warn: '同 IP+暱稱 · 可能是同人換裝置' },
          { fp: 'fp_3b91…5e7c', nick: 'Slido user',     geo: 'TW · Taipei',  ip: '203.0.113.42',  ua: 'extension',        joined: '45m',  msgs: 287, score: 96, status: 'extension', color: hudTokens.amber, risk: 'mid', warn: 'Slido 橋接 · 訊息來自 fire token' },
          { fp: 'fp_7c2a…1d4b', nick: '阿傑',           geo: 'TW · Taipei',  ip: '203.0.113.42',  ua: 'iPhone · Safari',  joined: '8m',   msgs: 0,  score: 50, status: 'idle',     color: '#7c3aed', risk: 'low' },
        ];

        const stats = {
          total: 287,
          active: 142,
          msgsLastMin: 64,
          riskHigh: 1,
          banned: 3,
        };

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 14, height: '100%', minHeight: 0 }}>
            {/* MAIN */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0, overflow: 'auto' }}>
              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
                {[
                  { k: '當前連線',   v: stats.total,        col: text },
                  { k: '5min 活躍', v: stats.active,       col: hudTokens.lime },
                  { k: '訊息 / min', v: stats.msgsLastMin,  col: accent },
                  { k: '高風險',     v: stats.riskHigh,     col: hudTokens.amber },
                  { k: '已封禁',     v: stats.banned,       col: hudTokens.crimson },
                ].map((s, i) => (
                  <div key={i} style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 12 }}>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1.2 }}>{s.k}</div>
                    <div style={{ color: s.col, fontSize: 24, fontWeight: 600, marginTop: 4 }}>{s.v}</div>
                  </div>
                ))}
              </div>

              {/* List */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <HudLabel color={textDim}>觀眾列表 · 即時</HudLabel>
                  <span style={{ marginLeft: 'auto', display: 'flex', gap: 4, fontFamily: hudTokens.fontMono, fontSize: 11 }}>
                    <span style={{ padding: '4px 10px', background: hudTokens.cyanSoft, color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 2 }}>全部</span>
                    <span style={{ padding: '4px 10px', color: textDim, border: `1px solid ${line}`, borderRadius: 2 }}>高風險 1</span>
                    <span style={{ padding: '4px 10px', color: textDim, border: `1px solid ${line}`, borderRadius: 2 }}>重複指紋</span>
                    <span style={{ padding: '4px 10px', color: textDim, border: `1px solid ${line}`, borderRadius: 2 }}>extension</span>
                  </span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '24px 1.6fr 1fr 1.2fr 80px 80px 60px 80px 90px',
                  gap: 8, fontFamily: hudTokens.fontMono, fontSize: 9,
                  color: textDim, letterSpacing: 1, padding: '6px 10px', borderBottom: `1px solid ${line}`,
                }}>
                  <span></span>
                  <span>NICK · FP</span>
                  <span>IP / GEO</span>
                  <span>UA</span>
                  <span style={{ textAlign: 'right' }}>JOINED</span>
                  <span style={{ textAlign: 'right' }}>MSGS</span>
                  <span style={{ textAlign: 'right' }}>SCORE</span>
                  <span style={{ textAlign: 'center' }}>STATUS</span>
                  <span style={{ textAlign: 'right' }}>ACTIONS</span>
                </div>
                <div>
                  {audience.map((p, i) => {
                    const selected = i === 4;
                    const statColMap = { active: hudTokens.lime, idle: textDim, flagged: hudTokens.crimson, duplicate: hudTokens.amber, extension: accent };
                    const statCol = statColMap[p.status];
                    return (
                      <div key={i} style={{
                        display: 'grid',
                        gridTemplateColumns: '24px 1.6fr 1fr 1.2fr 80px 80px 60px 80px 90px',
                        gap: 8, padding: '10px', alignItems: 'center',
                        borderBottom: `1px solid ${line}`,
                        background: selected ? hudTokens.cyanSoft : (p.warn ? `${statCol}05` : 'transparent'),
                        cursor: 'pointer',
                      }}>
                        <div style={{ width: 22, height: 22, borderRadius: '50%', background: p.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>
                          {p.nick === '匿名' ? '?' : p.nick.slice(0, 1)}
                        </div>
                        <div>
                          <div style={{ fontSize: 12, color: text, fontWeight: 600 }}>{p.nick}</div>
                          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 2, letterSpacing: 0.3 }}>{p.fp}</div>
                        </div>
                        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 11, lineHeight: 1.5 }}>
                          <div style={{ color: text }}>{p.ip}</div>
                          <div style={{ color: textDim, fontSize: 10 }}>{p.geo}</div>
                        </div>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.3 }}>{p.ua}</span>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: text, textAlign: 'right' }}>{p.joined}</span>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: hudTokens.lime, fontWeight: 600, textAlign: 'right' }}>{p.msgs}</span>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: p.score >= 80 ? hudTokens.lime : p.score >= 50 ? hudTokens.amber : hudTokens.crimson, textAlign: 'right', fontWeight: 600 }}>{p.score}</span>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: statCol, padding: '2px 6px', background: `${statCol}1c`, border: `1px solid ${statCol}55`, borderRadius: 2, letterSpacing: 0.5, textAlign: 'center', textTransform: 'uppercase' }}>{p.status}</span>
                        <span style={{ display: 'flex', gap: 3, justifyContent: 'flex-end' }}>
                          <span style={{ padding: '3px 6px', color: textDim, border: `1px solid ${line}`, borderRadius: 2, fontSize: 10, fontFamily: hudTokens.fontMono, cursor: 'pointer' }}>kick</span>
                          <span style={{ padding: '3px 6px', color: hudTokens.crimson, border: `1px solid ${hudTokens.crimson}55`, borderRadius: 2, fontSize: 10, fontFamily: hudTokens.fontMono, cursor: 'pointer' }}>ban</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT — selected = high risk row */}
            <div style={{ background: panel, border: `1px solid ${hudTokens.crimson}55`, borderRadius: radius, padding: 16, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.crimson, letterSpacing: 1.5, padding: '2px 8px', background: `${hudTokens.crimson}1c`, border: `1px solid ${hudTokens.crimson}55`, borderRadius: 2 }}>HIGH RISK</span>
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, cursor: 'pointer' }}>✕</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#ef4444', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 600 }}>?</div>
                <div>
                  <div style={{ fontSize: 14, color: text, fontWeight: 600 }}>匿名</div>
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 2, letterSpacing: 0.3 }}>fp_9e1c…4d2f</div>
                </div>
              </div>

              <div style={{
                marginTop: 10, padding: 10,
                background: `${hudTokens.crimson}10`, border: `1px solid ${hudTokens.crimson}55`, borderRadius: 3,
                fontSize: 11, color: text, lineHeight: 1.6,
              }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.crimson, letterSpacing: 1.2 }}>⚠ FLAG · 觸發 5 條規則</span><br/>
                · 5 分鐘內送出 38 則(超 spam threshold 25)<br/>
                · 4 則命中 dirty word(score &gt; 0.85)<br/>
                · IP 來自匿名 VPN(54.230.18.4 · CloudFront)<br/>
                · 暱稱「匿名」+ 第一次出現<br/>
                · 訊息中 80% 是同字串重複
              </div>

              <HudLabel color={textDim} top>近 5 分鐘訊息</HudLabel>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  { t: '14:02:18', m: '到底要看多久 講重點啦', s: 'masked', c: hudTokens.amber },
                  { t: '14:02:14', m: '這個講者 zzzz', s: 'masked', c: hudTokens.amber },
                  { t: '14:02:11', m: '到底要看多久', s: 'shown', c: hudTokens.lime },
                  { t: '14:02:09', m: '到底要看多久', s: 'shown', c: hudTokens.lime },
                  { t: '14:02:07', m: '到底要看多久', s: 'shown', c: hudTokens.lime },
                ].map((r, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '60px 1fr 50px', gap: 8, padding: '6px 8px',
                    background: raised, border: `1px solid ${line}`, borderRadius: 2,
                    fontFamily: hudTokens.fontMono, fontSize: 11, alignItems: 'center',
                  }}>
                    <span style={{ color: textDim }}>{r.t}</span>
                    <span style={{ color: text, fontSize: 11.5 }}>{r.m}</span>
                    <span style={{ color: r.c, fontSize: 9, letterSpacing: 0.5, textAlign: 'right' }}>{r.s.toUpperCase()}</span>
                  </div>
                ))}
              </div>

              <HudLabel color={textDim} top>建議動作</HudLabel>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ padding: 10, background: hudTokens.crimson, color: '#fff', borderRadius: 3, fontSize: 12, fontFamily: hudTokens.fontMono, letterSpacing: 0.5, cursor: 'pointer', textAlign: 'center' }}>⊗ 立即封禁指紋 · 7 天</span>
                <span style={{ padding: 10, background: 'transparent', color: hudTokens.amber, border: `1px solid ${hudTokens.amber}55`, borderRadius: 3, fontSize: 12, fontFamily: hudTokens.fontMono, letterSpacing: 0.5, cursor: 'pointer', textAlign: 'center' }}>◐ 改為遮罩模式</span>
                <span style={{ padding: 10, background: 'transparent', color: text, border: `1px solid ${line}`, borderRadius: 3, fontSize: 12, fontFamily: hudTokens.fontMono, letterSpacing: 0.5, cursor: 'pointer', textAlign: 'center' }}>👢 踢出此場(可重連)</span>
                <span style={{ padding: 10, background: 'transparent', color: textDim, border: `1px solid ${line}`, borderRadius: 3, fontSize: 12, fontFamily: hudTokens.fontMono, letterSpacing: 0.5, cursor: 'pointer', textAlign: 'center' }}>✓ 標記安全 · 解除 flag</span>
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

Object.assign(window, { AdminNotificationsPage, AdminMessageDetailPage, AdminSearchPage, AdminAudiencePage });
