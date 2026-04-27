// Batch B — historical analysis + mobile
// (1) Sessions list + Session detail (timeline replay)
// (2) Poll deep-dive (fingerprint distribution, time, geo)
// (3) Mobile Admin (host using phone on stage)

// =========================================================================
// (1A) Sessions List · 場次列表
// =========================================================================
function AdminSessionsPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="sessions" title="場次紀錄" en="ADMIN LANE · SESSIONS HISTORY" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {

        const sessions = [
          { id: 'sess_a3f2', name: 'Q1 OKR Town Hall', tag: '進行中', t: '今天 13:30',  dur: '32m · 持續中', viewers: 287, msgs: 1287, polls: 3, peak: 178, status: 'live', sparkBase: 80 },
          { id: 'sess_8d7e', name: '產品週會 #142',     tag: '已結束', t: '昨天 14:00',  dur: '1h 04m',       viewers: 64,  msgs: 412,  polls: 1, peak: 38,  status: 'ended', sparkBase: 30 },
          { id: 'sess_4c1b', name: 'AI 讀書會 vol.7',   tag: '已結束', t: '3 天前',      dur: '2h 12m',       viewers: 124, msgs: 892,  polls: 2, peak: 92,  status: 'ended', sparkBase: 50 },
          { id: 'sess_2d9e', name: 'Engineering All-Hands', tag: '已結束', t: '5 天前', dur: '1h 30m',       viewers: 412, msgs: 2148, polls: 4, peak: 224, status: 'ended', sparkBase: 120, important: true },
          { id: 'sess_9e1c', name: '新人歡迎會',         tag: '已結束', t: '12 天前',     dur: '45m',          viewers: 28,  msgs: 142,  polls: 0, peak: 18,  status: 'ended', sparkBase: 12 },
          { id: 'sess_1a4f', name: '客戶 demo · ACME',  tag: '已結束', t: '18 天前',     dur: '52m',          viewers: 18,  msgs: 89,   polls: 1, peak: 14,  status: 'ended', sparkBase: 8 },
          { id: 'sess_3b91', name: '研發 retro Q4',      tag: '已結束', t: '24 天前',     dur: '1h 12m',       viewers: 42,  msgs: 218,  polls: 1, peak: 24,  status: 'ended', sparkBase: 18 },
          { id: 'sess_7c2a', name: '行銷月會',           tag: '已結束', t: '28 天前',     dur: '38m',          viewers: 22,  msgs: 64,   polls: 0, peak: 8,   status: 'ended', sparkBase: 4 },
        ];

        const sparkPoints = (base) => Array.from({ length: 30 }, (_, i) => Math.max(1, Math.round(base * (0.4 + Math.sin(i / 4) * 0.3 + Math.cos(i / 7) * 0.2 + (i / 60)))));

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 14, height: '100%', minHeight: 0 }}>
            {/* MAIN */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0, overflow: 'auto' }}>
              {/* Stat row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {[
                  { k: '近 30 天場次',   v: '32',     col: text },
                  { k: '總觀眾人次',     v: '4,824',   col: hudTokens.lime },
                  { k: '總訊息',         v: '38,942',  col: accent },
                  { k: '高峰場次',       v: 'All-Hands', col: hudTokens.amber, sub: '5 天前 · 412 viewers' },
                ].map((s, i) => (
                  <div key={i} style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 12 }}>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1.2 }}>{s.k}</div>
                    <div style={{ color: s.col, fontSize: i === 3 ? 16 : 22, fontWeight: 600, marginTop: 4 }}>{s.v}</div>
                    {s.sub && <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, marginTop: 3, letterSpacing: 0.4 }}>{s.sub}</div>}
                  </div>
                ))}
              </div>

              {/* List */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <HudLabel color={textDim}>場次列表 · {sessions.length}</HudLabel>
                  <span style={{ marginLeft: 'auto', display: 'flex', gap: 4, fontFamily: hudTokens.fontMono, fontSize: 11 }}>
                    <span style={{ padding: '4px 10px', background: hudTokens.cyanSoft, color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 2 }}>全部</span>
                    <span style={{ padding: '4px 10px', color: hudTokens.lime, border: `1px solid ${hudTokens.lime}55`, borderRadius: 2 }}>● 進行中 1</span>
                    <span style={{ padding: '4px 10px', color: textDim, border: `1px solid ${line}`, borderRadius: 2 }}>已結束 31</span>
                    <span style={{ padding: '4px 10px', color: textDim, border: `1px solid ${line}`, borderRadius: 2 }}>★ 釘選</span>
                  </span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '24px 1.6fr 1fr 1fr 70px 70px 60px 100px 90px',
                  gap: 8, fontFamily: hudTokens.fontMono, fontSize: 9,
                  color: textDim, letterSpacing: 1, padding: '6px 10px', borderBottom: `1px solid ${line}`,
                }}>
                  <span></span>
                  <span>SESSION</span>
                  <span>TIME</span>
                  <span>DURATION</span>
                  <span style={{ textAlign: 'right' }}>VIEWERS</span>
                  <span style={{ textAlign: 'right' }}>MSGS</span>
                  <span style={{ textAlign: 'right' }}>POLLS</span>
                  <span style={{ textAlign: 'center' }}>ACTIVITY</span>
                  <span style={{ textAlign: 'right' }}>ACTIONS</span>
                </div>
                {sessions.map((s, i) => {
                  const isLive = s.status === 'live';
                  const selected = s.id === 'sess_2d9e';
                  const points = sparkPoints(s.sparkBase);
                  const max = Math.max(...points);
                  return (
                    <div key={s.id} style={{
                      display: 'grid',
                      gridTemplateColumns: '24px 1.6fr 1fr 1fr 70px 70px 60px 100px 90px',
                      gap: 8, padding: '12px 10px', alignItems: 'center',
                      borderBottom: `1px solid ${line}`,
                      background: selected ? hudTokens.cyanSoft : (isLive ? `${hudTokens.lime}06` : 'transparent'),
                      cursor: 'pointer',
                    }}>
                      <span style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: isLive ? hudTokens.lime : textDim,
                        boxShadow: isLive ? `0 0 6px ${hudTokens.lime}` : 'none',
                      }} />
                      <div>
                        <div style={{ fontSize: 13, color: text, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                          {s.name}
                          {s.important && <span style={{ color: hudTokens.amber, fontSize: 11 }}>★</span>}
                        </div>
                        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 2, letterSpacing: 0.3 }}>{s.id}</div>
                      </div>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: text, letterSpacing: 0.3 }}>{s.t}</span>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.3 }}>{s.dur}</span>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: text, textAlign: 'right' }}>{s.viewers}</span>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: hudTokens.lime, fontWeight: 600, textAlign: 'right' }}>{s.msgs.toLocaleString()}</span>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: s.polls > 0 ? accent : textDim, textAlign: 'right' }}>{s.polls > 0 ? `▪ ${s.polls}` : '—'}</span>
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 1, height: 24, justifyContent: 'center' }}>
                        {points.map((v, j) => (
                          <div key={j} style={{
                            width: 2, height: `${(v / max) * 100}%`,
                            background: isLive ? hudTokens.lime : `${accent}88`, borderRadius: 0.5,
                          }} />
                        ))}
                      </div>
                      <span style={{ display: 'flex', gap: 3, justifyContent: 'flex-end' }}>
                        <span style={{ padding: '3px 8px', color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 2, fontSize: 10, fontFamily: hudTokens.fontMono, cursor: 'pointer' }}>▶ open</span>
                        <span style={{ padding: '3px 6px', color: textDim, border: `1px solid ${line}`, borderRadius: 2, fontSize: 10, fontFamily: hudTokens.fontMono, cursor: 'pointer' }}>↓</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT — quick preview */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, overflow: 'auto' }}>
              <HudLabel color={accent}>選中 · Engineering All-Hands</HudLabel>
              <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 4, letterSpacing: 0.3 }}>sess_2d9e · 5 天前 · 1h 30m</div>

              <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                {[
                  { k: 'VIEWERS', v: '412', c: text },
                  { k: 'PEAK',    v: '224', c: accent, sub: '14:42' },
                  { k: 'MSGS',    v: '2,148', c: hudTokens.lime },
                  { k: 'POLLS',   v: '4', c: text, sub: '88% 投票率' },
                  { k: 'BLOCKED', v: '14', c: hudTokens.crimson, sub: '0.6% rate' },
                  { k: 'PINNED',  v: '8', c: hudTokens.amber },
                ].map((s, i) => (
                  <div key={i} style={{ padding: 8, background: raised, border: `1px solid ${line}`, borderRadius: 3 }}>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1 }}>{s.k}</div>
                    <div style={{ color: s.c, fontSize: 16, fontWeight: 600, marginTop: 2 }}>{s.v}</div>
                    {s.sub && <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, marginTop: 2, letterSpacing: 0.3 }}>{s.sub}</div>}
                  </div>
                ))}
              </div>

              <HudLabel color={textDim} top>活動高峰</HudLabel>
              <div style={{ marginTop: 8, padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 3 }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 1, height: 60 }}>
                  {sparkPoints(140).map((v, j) => {
                    const peak = j === 22;
                    return (
                      <div key={j} style={{
                        flex: 1, height: `${(v / 140) * 100}%`,
                        background: peak ? hudTokens.amber : `${accent}55`,
                        border: peak ? `1px solid ${hudTokens.amber}` : 'none',
                        borderRadius: '1px 1px 0 0',
                      }} />
                    );
                  })}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, marginTop: 4, letterSpacing: 0.3 }}>
                  <span>14:00</span><span style={{ color: hudTokens.amber }}>peak 14:42</span><span>15:30</span>
                </div>
              </div>

              <HudLabel color={textDim} top>關鍵時刻</HudLabel>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  { t: '14:08', l: '開場致詞 · CTO',         c: textDim },
                  { t: '14:14', l: 'Poll 1 · OKR 滿意度開啟', c: accent },
                  { t: '14:32', l: '產品 demo 開始',           c: textDim },
                  { t: '14:42', l: '★ 訊息高峰 224/min',       c: hudTokens.amber },
                  { t: '14:58', l: 'Poll 2 · 開放 Q&A',        c: accent },
                  { t: '15:24', l: '結束致詞',                  c: textDim },
                ].map((m, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '40px 1fr', gap: 6, padding: '4px 0',
                    fontFamily: hudTokens.fontMono, fontSize: 11, alignItems: 'center',
                  }}>
                    <span style={{ color: m.c }}>{m.t}</span>
                    <span style={{ color: m.c === textDim ? text : m.c, letterSpacing: 0.3, fontSize: 11 }}>{m.l}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ padding: 10, textAlign: 'center', background: hudTokens.cyanSoft, color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 3, fontSize: 12, fontFamily: hudTokens.fontMono, letterSpacing: 0.5, cursor: 'pointer' }}>▶ 進入時間軸重播</span>
                <span style={{ padding: 8, textAlign: 'center', color: text, border: `1px solid ${line}`, borderRadius: 3, fontSize: 11, fontFamily: hudTokens.fontMono, letterSpacing: 0.3, cursor: 'pointer' }}>↓ 匯出 (JSON / CSV / SRT)</span>
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

// =========================================================================
// (1B) Session Detail · 時間軸重播
// =========================================================================
function AdminSessionDetailPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="session-detail" title="Engineering All-Hands · 時間軸重播" en="ADMIN LANE · SESSION REPLAY · sess_2d9e" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {

        // Density bars per minute (90 minutes total)
        const density = Array.from({ length: 90 }, (_, i) => {
          const base = 30 + Math.sin(i / 6) * 30 + Math.cos(i / 11) * 18 + (i / 90) * 20;
          if (i === 42) return 224;
          return Math.max(4, Math.round(base + (i % 4) * 6));
        });
        const playheadIdx = 42;
        const maxD = Math.max(...density);

        const playheadMessages = [
          { t: '14:42:14.082', n: 'Yvonne',     fp: 'fp_8d7e', m: 'CTO 講的這段太到位了',                 c: '#06b6d4', s: 'shown',  pinned: true },
          { t: '14:42:13.428', n: '阿傑',       fp: 'fp_a3f2', m: '+1 完全同意',                            c: '#7c3aed', s: 'shown' },
          { t: '14:42:12.917', n: 'Slido user', fp: 'fp_3b91', m: '請問這個 metric 是季度還是年度?',       c: hudTokens.amber, s: 'shown', ext: true },
          { t: '14:42:12.402', n: '小明',       fp: 'fp_2d9e', m: '👏👏👏👏👏',                              c: '#f97316', s: 'shown' },
          { t: '14:42:11.844', n: '訪客6824',   fp: 'fp_4c1b', m: '聲音可以再大一點嗎',                     c: '#84cc16', s: 'shown' },
          { t: '14:42:11.218', n: '匿名',       fp: 'fp_9e1c', m: '<已遮罩 · 重複訊息>',                    c: '#ef4444', s: 'masked' },
          { t: '14:42:10.604', n: '阿傑',       fp: 'fp_a3f2', m: '簡報可以分享嗎',                          c: '#7c3aed', s: 'shown' },
          { t: '14:42:10.022', n: 'Yvonne',     fp: 'fp_8d7e', m: '同問 +1',                                 c: '#06b6d4', s: 'shown' },
        ];

        const events = [
          { t: 14, l: 'Poll 1 開啟', c: accent },
          { t: 32, l: 'Demo 開始',   c: textDim },
          { t: 42, l: '★ 訊息高峰',  c: hudTokens.amber },
          { t: 58, l: 'Poll 2 開啟', c: accent },
          { t: 84, l: '結束致詞',    c: textDim },
        ];

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 14, height: '100%', minHeight: 0 }}>
            {/* MAIN */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0, overflow: 'auto' }}>
              {/* Replay controls */}
              <div style={{
                background: panel, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: radius,
                padding: 14, display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <span style={{
                  padding: '8px 16px', background: hudTokens.cyanSoft, color: accent,
                  border: `1px solid ${accent}`, borderRadius: 3, cursor: 'pointer',
                  fontFamily: hudTokens.fontMono, fontSize: 14, letterSpacing: 0.5,
                }}>▌▌</span>
                <span style={{
                  padding: '6px 10px', color: textDim, border: `1px solid ${line}`, borderRadius: 3,
                  fontFamily: hudTokens.fontMono, fontSize: 11, cursor: 'pointer',
                }}>« 前一分鐘</span>
                <span style={{
                  padding: '6px 10px', color: textDim, border: `1px solid ${line}`, borderRadius: 3,
                  fontFamily: hudTokens.fontMono, fontSize: 11, cursor: 'pointer',
                }}>後一分鐘 »</span>
                <div style={{ flex: 1 }} />
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 13, color: text, letterSpacing: 0.4 }}>
                  <span style={{ color: accent }}>14:42:12</span> <span style={{ color: textDim }}>/ 15:30:00</span>
                </div>
                <div style={{ display: 'flex', gap: 4, fontFamily: hudTokens.fontMono, fontSize: 10 }}>
                  {['0.5×', '1×', '2×', '4×'].map((v, i) => (
                    <span key={v} style={{
                      padding: '4px 8px', textAlign: 'center', minWidth: 32,
                      background: i === 1 ? hudTokens.cyanSoft : 'transparent',
                      color: i === 1 ? accent : textDim,
                      border: `1px solid ${i === 1 ? hudTokens.cyanLine : line}`, borderRadius: 2,
                      cursor: 'pointer', letterSpacing: 0.3,
                    }}>{v}</span>
                  ))}
                </div>
              </div>

              {/* Density timeline */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <HudLabel color={textDim}>訊息密度時間軸 · 90 分鐘</HudLabel>
                  <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>
                    當前位置 14:42 · peak 224/min
                  </span>
                </div>
                <div style={{ position: 'relative', height: 80, paddingTop: 16 }}>
                  {/* event markers above */}
                  <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 14 }}>
                    {events.map((e, i) => (
                      <div key={i} style={{
                        position: 'absolute', left: `${(e.t / 90) * 100}%`, top: 0, transform: 'translateX(-50%)',
                        fontFamily: hudTokens.fontMono, fontSize: 9, color: e.c, whiteSpace: 'nowrap', letterSpacing: 0.3,
                      }}>{e.l}</div>
                    ))}
                  </div>
                  {/* density bars */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 1, height: 50 }}>
                    {density.map((v, i) => {
                      const isPlay = i === playheadIdx;
                      return (
                        <div key={i} style={{
                          flex: 1, height: `${(v / maxD) * 100}%`,
                          background: isPlay ? hudTokens.amber : `${accent}66`,
                          border: isPlay ? `1px solid ${hudTokens.amber}` : 'none',
                          borderRadius: '1px 1px 0 0',
                        }} />
                      );
                    })}
                  </div>
                  {/* playhead line */}
                  <div style={{
                    position: 'absolute', left: `${(playheadIdx / 90) * 100}%`, top: 14, bottom: 0,
                    width: 2, background: accent, boxShadow: `0 0 8px ${accent}`,
                  }}>
                    <div style={{
                      position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)',
                      width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
                      borderTop: `8px solid ${accent}`,
                    }} />
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, marginTop: 4, letterSpacing: 0.3 }}>
                  <span>14:00</span><span>14:30</span><span>15:00</span><span>15:30</span>
                </div>
              </div>

              {/* Messages at playhead */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <HudLabel color={textDim}>當前時刻訊息 · ±2 秒窗口</HudLabel>
                  <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>
                    8 筆 · 14:42:10 — 14:42:14
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {playheadMessages.map((m, i) => {
                    const stat = m.s === 'masked' ? hudTokens.amber : hudTokens.lime;
                    return (
                      <div key={i} style={{
                        padding: 10, background: raised, border: `1px solid ${m.pinned ? hudTokens.amber + '55' : line}`, borderRadius: 3,
                        opacity: m.s === 'masked' ? 0.6 : 1,
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: m.c }} />
                          <span style={{ fontSize: 12, color: text, fontWeight: 600 }}>{m.n}</span>
                          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3 }}>{m.fp}</span>
                          {m.ext && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.amber, letterSpacing: 0.5 }}>SLIDO</span>}
                          {m.pinned && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.amber, letterSpacing: 0.5 }}>★ PINNED</span>}
                          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: stat, padding: '1px 6px', background: `${stat}1c`, border: `1px solid ${stat}55`, borderRadius: 2, letterSpacing: 0.5 }}>{m.s.toUpperCase()}</span>
                          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3 }}>{m.t}</span>
                        </div>
                        <div style={{ fontSize: 13, color: text, lineHeight: 1.5, letterSpacing: 0.3, marginLeft: 14 }}>{m.m}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT — chapters / summary */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
              <HudLabel color={accent}>章節 · Chapters</HudLabel>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  { t: '00:00', l: '進場 + 等待', dur: '8m',  cur: false },
                  { t: '00:08', l: '開場致詞 · CTO', dur: '6m',  cur: false },
                  { t: '00:14', l: 'Poll 1 · OKR 滿意度', dur: '18m', cur: false, accent: true },
                  { t: '00:32', l: '產品 demo', dur: '10m', cur: false },
                  { t: '00:42', l: '★ Q&A 高峰時段', dur: '16m', cur: true },
                  { t: '00:58', l: 'Poll 2 · Q&A 投票', dur: '26m', cur: false, accent: true },
                  { t: '01:24', l: '結束致詞', dur: '6m', cur: false },
                ].map((c, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '50px 1fr 40px', gap: 6, padding: '6px 8px',
                    background: c.cur ? hudTokens.cyanSoft : 'transparent',
                    border: `1px solid ${c.cur ? hudTokens.cyanLine : 'transparent'}`, borderRadius: 2,
                    fontFamily: hudTokens.fontMono, fontSize: 11, alignItems: 'center', cursor: 'pointer',
                  }}>
                    <span style={{ color: c.cur ? accent : textDim, letterSpacing: 0.3 }}>{c.t}</span>
                    <span style={{ color: c.accent ? accent : (c.cur ? text : text), fontSize: 11 }}>{c.l}</span>
                    <span style={{ color: textDim, fontSize: 10, textAlign: 'right' }}>{c.dur}</span>
                  </div>
                ))}
              </div>

              <HudLabel color={textDim} top>頂發言者</HudLabel>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  { n: 'Slido user', c: hudTokens.amber, msgs: 287 },
                  { n: '小明', c: '#f97316', msgs: 142 },
                  { n: '阿傑', c: '#7c3aed', msgs: 88 },
                  { n: 'Yvonne', c: '#06b6d4', msgs: 64 },
                  { n: '訪客6824', c: '#84cc16', msgs: 38 },
                ].map((p, i) => {
                  const max = 287;
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: p.c }} />
                      <span style={{ flex: 0, minWidth: 80, fontSize: 11, color: text }}>{p.n}</span>
                      <div style={{ flex: 1, height: 4, background: line, borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{ width: `${(p.msgs / max) * 100}%`, height: '100%', background: p.c }} />
                      </div>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, minWidth: 30, textAlign: 'right' }}>{p.msgs}</span>
                    </div>
                  );
                })}
              </div>

              <HudLabel color={textDim} top>關鍵字雲</HudLabel>
              <div style={{
                marginTop: 8, padding: 12, background: raised, border: `1px solid ${line}`, borderRadius: 3,
                display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', justifyContent: 'center', minHeight: 80,
              }}>
                {[
                  { w: 'OKR',     s: 22, c: accent },
                  { w: 'demo',    s: 18, c: text },
                  { w: '簡報',    s: 16, c: text },
                  { w: 'Q3',      s: 14, c: textDim },
                  { w: 'roadmap', s: 13, c: text },
                  { w: '同意',    s: 12, c: textDim },
                  { w: '+1',      s: 11, c: accent },
                  { w: 'metric',  s: 10, c: textDim },
                  { w: 'Q&A',     s: 9, c: textDim },
                  { w: 'hire',    s: 8, c: textDim },
                ].map((t, i) => (
                  <span key={i} style={{
                    fontSize: t.s, color: t.c, fontWeight: t.s > 14 ? 600 : 400, letterSpacing: 0.3,
                  }}>{t.w}</span>
                ))}
              </div>

              <div style={{
                marginTop: 'auto', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 6,
              }}>
                <span style={{ padding: 8, textAlign: 'center', background: hudTokens.cyanSoft, color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 3, fontSize: 11, fontFamily: hudTokens.fontMono, letterSpacing: 0.4, cursor: 'pointer' }}>↓ 匯出本場 (JSON · 2.4 MB)</span>
                <span style={{ padding: 8, textAlign: 'center', color: text, border: `1px solid ${line}`, borderRadius: 3, fontSize: 11, fontFamily: hudTokens.fontMono, letterSpacing: 0.4, cursor: 'pointer' }}>📤 分享重播連結</span>
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

// =========================================================================
// (2) Poll Deep-Dive · 投票完整分析
// =========================================================================
function AdminPollDeepDivePage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="poll-detail" title="OKR 滿意度 · 完整分析" en="ADMIN LANE · POLL ANALYTICS · poll_4f2c" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {

        const options = [
          { l: '非常滿意',   votes: 142, pct: 38.7, c: hudTokens.lime,    geos: { TW: 96, JP: 18, US: 18, OTHER: 10 } },
          { l: '尚可',       votes: 124, pct: 33.8, c: accent,             geos: { TW: 80, JP: 22, US: 12, OTHER: 10 } },
          { l: '不太滿意',   votes:  68, pct: 18.5, c: hudTokens.amber,    geos: { TW: 42, JP: 14, US:  8, OTHER:  4 } },
          { l: '完全不滿意', votes:  34, pct:  9.2, c: hudTokens.crimson,  geos: { TW: 18, JP:  6, US:  8, OTHER:  2 } },
        ];
        const total = options.reduce((s, o) => s + o.votes, 0);

        // Time histogram for 18 minute poll, sample by minute
        const timeline = [4, 12, 28, 42, 38, 32, 24, 18, 14, 12, 10, 8, 6, 4, 4, 2, 2, 2];
        const maxT = Math.max(...timeline);

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14, height: '100%', minHeight: 0 }}>
            {/* MAIN */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0, overflow: 'auto' }}>
              {/* Header */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.lime, letterSpacing: 1.2, padding: '2px 8px', background: `${hudTokens.lime}1c`, border: `1px solid ${hudTokens.lime}55`, borderRadius: 2 }}>● ENDED</span>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>poll_4f2c · Engineering All-Hands · sess_2d9e</span>
                </div>
                <div style={{ fontSize: 22, color: text, fontWeight: 600, marginBottom: 10, letterSpacing: 0.3 }}>
                  你對本季 OKR 達成率的整體滿意度?
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, paddingTop: 10, borderTop: `1px dashed ${line}` }}>
                  <KVB k="總票數"     v={total}   col={hudTokens.lime}/>
                  <KVB k="參與率"     v="88.3%"   sub={`${total} / 412 觀眾`} col={accent} />
                  <KVB k="持續時間"   v="14m 32s" col={text} />
                  <KVB k="重複指紋"   v="0"       sub="已自動去重" col={hudTokens.lime} />
                  <KVB k="作弊嘗試"   v="3"       sub="同 IP 連投" col={hudTokens.amber} />
                </div>
              </div>

              {/* Result bars */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
                <HudLabel color={textDim}>選項分佈</HudLabel>
                <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {options.map((o, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 4 }}>
                        <span style={{ fontSize: 13, color: text, fontWeight: 600 }}>{o.l}</span>
                        <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.3 }}>{o.votes} 票</span>
                        <span style={{ marginLeft: 12, fontFamily: hudTokens.fontMono, fontSize: 16, color: o.c, fontWeight: 600 }}>{o.pct}%</span>
                      </div>
                      <div style={{ height: 8, background: line, borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{ width: `${o.pct}%`, height: '100%', background: `linear-gradient(90deg, ${o.c}, ${o.c}aa)`, boxShadow: `0 0 8px ${o.c}55` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                  <div style={{ padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 3 }}>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1.2 }}>SENTIMENT INDEX</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
                      <span style={{ fontSize: 28, color: hudTokens.lime, fontWeight: 600 }}>+47</span>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim }}>正面 - 負面 / 100</span>
                    </div>
                  </div>
                  <div style={{ padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 3 }}>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1.2 }}>VS 上次 (Q4)</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
                      <span style={{ fontSize: 28, color: hudTokens.lime, fontWeight: 600 }}>↑ +12</span>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim }}>滿意度上升</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time histogram */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
                <HudLabel color={textDim}>投票時間分佈 · 14m 32s 內</HudLabel>
                <div style={{ marginTop: 10, position: 'relative', height: 100 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: '100%' }}>
                    {timeline.map((v, i) => (
                      <div key={i} style={{
                        flex: 1, height: `${(v / maxT) * 100}%`,
                        background: i < 5 ? `linear-gradient(180deg, ${accent}, ${accent}55)` : `${accent}66`,
                        border: `1px solid ${accent}77`, borderRadius: '1px 1px 0 0',
                      }} />
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, marginTop: 4, letterSpacing: 0.3 }}>
                  <span>14:14 開啟</span><span>14:18 高峰 · 42 票/min</span><span>14:32 關閉</span>
                </div>
                <div style={{
                  marginTop: 10, padding: 8, background: raised, border: `1px solid ${line}`, borderRadius: 3,
                  fontSize: 11, color: textDim, lineHeight: 1.5, letterSpacing: 0.3,
                }}>
                  · 80% 票數在前 4 分鐘湧入 · 觀眾看到問題立刻投<br/>
                  · 後段 10 分鐘為 long-tail · 後到觀眾補投<br/>
                  · 沒有明顯尾段反轉 · 結果穩定
                </div>
              </div>
            </div>

            {/* RIGHT — geo + integrity */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
              <HudLabel color={accent}>地理分佈</HudLabel>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { g: 'TW · 台灣',  n: 236, pct: 64.3 },
                  { g: 'JP · 日本',  n:  60, pct: 16.3 },
                  { g: 'US · 美國',  n:  46, pct: 12.5 },
                  { g: '其他 (4 國)', n:  26, pct:  7.0 },
                ].map((g, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 3 }}>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: text, letterSpacing: 0.3 }}>{g.g}</span>
                      <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.lime }}>{g.n}</span>
                      <span style={{ marginLeft: 8, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim }}>{g.pct}%</span>
                    </div>
                    <div style={{ height: 4, background: line, borderRadius: 2, overflow: 'hidden' }}>
                      <div style={{ width: `${g.pct}%`, height: '100%', background: accent }} />
                    </div>
                  </div>
                ))}
              </div>

              <HudLabel color={textDim} top>跨選項地區交叉</HudLabel>
              <div style={{ marginTop: 8, padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 11, lineHeight: 1.7, letterSpacing: 0.3 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1fr 1fr 1fr', gap: 4, color: textDim, fontSize: 9, letterSpacing: 0.8, paddingBottom: 4, borderBottom: `1px solid ${line}` }}>
                  <span></span><span>非常</span><span>尚可</span><span>不太</span><span>完全</span>
                </div>
                {[
                  { g: 'TW', n: [96, 80, 42, 18], dom: 0 },
                  { g: 'JP', n: [18, 22, 14,  6], dom: 1 },
                  { g: 'US', n: [18, 12,  8,  8], dom: 0 },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1fr 1fr 1fr', gap: 4, padding: '4px 0' }}>
                    <span style={{ color: text }}>{row.g}</span>
                    {row.n.map((n, j) => (
                      <span key={j} style={{
                        color: j === row.dom ? hudTokens.lime : textDim,
                        fontWeight: j === row.dom ? 600 : 400, textAlign: 'right',
                      }}>{n}</span>
                    ))}
                  </div>
                ))}
              </div>

              <HudLabel color={textDim} top>誠信檢查 · Integrity</HudLabel>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { l: '指紋去重',          v: '無重複',   c: hudTokens.lime,    sub: '368 unique fp' },
                  { l: '同 IP 多投',        v: '3 次封鎖', c: hudTokens.amber,   sub: '203.0.113.42 試圖連投' },
                  { l: 'Bot 風險',          v: '低',       c: hudTokens.lime,    sub: '無異常 UA / timing' },
                  { l: 'Extension 占比',    v: '12.4%',    c: accent,            sub: '46 票來自 Slido bridge' },
                  { l: '匿名 VPN',          v: '4 票',     c: hudTokens.amber,   sub: '已標記但仍計入' },
                ].map((c, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '14px 1fr auto', gap: 8, padding: '6px 8px',
                    background: raised, border: `1px solid ${line}`, borderRadius: 2, alignItems: 'center',
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: c.c }} />
                    <div>
                      <div style={{ fontSize: 11, color: text, letterSpacing: 0.3 }}>{c.l}</div>
                      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 1, letterSpacing: 0.3 }}>{c.sub}</div>
                    </div>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: c.c, fontWeight: 600 }}>{c.v}</span>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 'auto', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 6,
              }}>
                <span style={{ padding: 8, textAlign: 'center', background: hudTokens.cyanSoft, color: accent, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 3, fontSize: 11, fontFamily: hudTokens.fontMono, letterSpacing: 0.4, cursor: 'pointer' }}>↓ 匯出 raw votes (CSV · 18 KB)</span>
                <span style={{ padding: 8, textAlign: 'center', color: text, border: `1px solid ${line}`, borderRadius: 3, fontSize: 11, fontFamily: hudTokens.fontMono, letterSpacing: 0.4, cursor: 'pointer' }}>📋 複製分享連結</span>
                <span style={{ padding: 8, textAlign: 'center', color: textDim, border: `1px solid ${line}`, borderRadius: 3, fontSize: 11, fontFamily: hudTokens.fontMono, letterSpacing: 0.4, cursor: 'pointer' }}>↻ 重啟此題目(新場次)</span>
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}
function KVB({ k, v, sub, col }) {
  return (
    <div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: '#9aa4b2', letterSpacing: 1.2 }}>{k}</div>
      <div style={{ color: col, fontSize: 22, fontWeight: 600, marginTop: 2 }}>{v}</div>
      {sub && <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: '#9aa4b2', marginTop: 2, letterSpacing: 0.4 }}>{sub}</div>}
    </div>
  );
}

// =========================================================================
// (3) Mobile Admin · 主持人手機後台
// =========================================================================
function AdminMobilePage({ theme = 'dark', view = 'home' }) {
  // We'll render this without the desktop AdminPageShell — it's a phone form.
  const dark = theme !== 'light';
  const bg     = dark ? '#0A0E1A' : '#F2F4F7';
  const panel  = dark ? '#0F1421' : '#FFFFFF';
  const raised = dark ? '#13192C' : '#F7F9FC';
  const text   = dark ? '#E6E8EE' : '#0F1421';
  const textDim= dark ? '#9aa4b2' : '#5b6478';
  const line   = dark ? '#1F2944' : '#D9DEE8';
  const accent = hudTokens.cyan;

  const fontMono = hudTokens.fontMono;

  return (
    <div style={{
      width: 375, height: 812, background: bg, color: text, fontFamily: hudTokens.font,
      display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative',
    }}>
      {/* iOS status bar */}
      <div style={{
        height: 44, padding: '0 24px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        fontSize: 14, fontWeight: 600, color: text, paddingBottom: 4,
      }}>
        <span>14:02</span>
        <span style={{ fontSize: 12, fontFamily: fontMono, letterSpacing: 0.4 }}>● LIVE</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11 }}>
          <span>📶</span>
          <span style={{ width: 24, height: 11, border: `1px solid ${text}`, borderRadius: 2, padding: 1 }}>
            <span style={{ display: 'block', height: '100%', width: '70%', background: text, borderRadius: 1 }} />
          </span>
        </span>
      </div>

      {/* App header */}
      <div style={{
        padding: '8px 16px 12px', borderBottom: `1px solid ${line}`,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{
          width: 32, height: 32, borderRadius: 6, background: hudTokens.cyanSoft, color: accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
          border: `1px solid ${hudTokens.cyanLine}`,
        }}>▲</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: text, lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Q1 OKR Town Hall</div>
          <div style={{ fontFamily: fontMono, fontSize: 9, color: hudTokens.lime, letterSpacing: 0.5, marginTop: 2 }}>● 287 viewers · 32m elapsed</div>
        </div>
        <span style={{
          padding: '6px 10px', background: `${hudTokens.crimson}1c`, color: hudTokens.crimson,
          border: `1px solid ${hudTokens.crimson}55`, borderRadius: 3, fontFamily: fontMono, fontSize: 10, letterSpacing: 0.5,
        }}>結束</span>
      </div>

      {/* Body */}
      <div style={{ flex: 1, overflow: 'auto', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Live ticker */}
        <div style={{
          background: panel, border: `1px solid ${line}`, borderRadius: 8, padding: 12,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <span style={{ fontFamily: fontMono, fontSize: 9, color: textDim, letterSpacing: 1 }}>NOW · 訊息流</span>
            <span style={{ marginLeft: 'auto', fontFamily: fontMono, fontSize: 10, color: hudTokens.lime }}>● 64/min</span>
          </div>
          {[
            { n: '阿傑',     m: '+1 求簡報',                 c: '#7c3aed', t: '14s' },
            { n: 'Yvonne',   m: '剛剛那張投影片好酷',         c: '#06b6d4', t: '28s' },
            { n: '小明',     m: '👏👏👏',                     c: '#f97316', t: '42s' },
          ].map((m, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderTop: i > 0 ? `1px dashed ${line}` : 'none' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: m.c }} />
              <span style={{ fontSize: 11, color: text, fontWeight: 600, minWidth: 50 }}>{m.n}</span>
              <span style={{ flex: 1, fontSize: 12, color: text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.m}</span>
              <span style={{ fontFamily: fontMono, fontSize: 9, color: textDim }}>{m.t}</span>
            </div>
          ))}
          <div style={{ textAlign: 'center', marginTop: 6, fontFamily: fontMono, fontSize: 10, color: accent, letterSpacing: 0.4 }}>查看全部 1,287 →</div>
        </div>

        {/* Big actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div style={{
            padding: 14, background: hudTokens.cyanSoft, color: accent, borderRadius: 8,
            border: `1px solid ${hudTokens.cyanLine}`, textAlign: 'center',
          }}>
            <div style={{ fontSize: 22, marginBottom: 4 }}>📊</div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>啟動投票</div>
            <div style={{ fontFamily: fontMono, fontSize: 9, color: textDim, marginTop: 2 }}>3 個草稿可選</div>
          </div>
          <div style={{
            padding: 14, background: `${hudTokens.amber}10`, color: hudTokens.amber, borderRadius: 8,
            border: `1px solid ${hudTokens.amber}66`, textAlign: 'center',
          }}>
            <div style={{ fontSize: 22, marginBottom: 4 }}>★</div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>釘選一則</div>
            <div style={{ fontFamily: fontMono, fontSize: 9, color: textDim, marginTop: 2 }}>讓全場看到</div>
          </div>
          <div style={{
            padding: 14, background: panel, color: text, borderRadius: 8,
            border: `1px solid ${line}`, textAlign: 'center',
          }}>
            <div style={{ fontSize: 22, marginBottom: 4 }}>⏸</div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>暫停接收</div>
            <div style={{ fontFamily: fontMono, fontSize: 9, color: textDim, marginTop: 2 }}>慢動作模式</div>
          </div>
          <div style={{
            padding: 14, background: panel, color: text, borderRadius: 8,
            border: `1px solid ${line}`, textAlign: 'center',
          }}>
            <div style={{ fontSize: 22, marginBottom: 4 }}>🚫</div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>清空螢幕</div>
            <div style={{ fontFamily: fontMono, fontSize: 9, color: textDim, marginTop: 2 }}>一鍵 panic</div>
          </div>
        </div>

        {/* Live stats */}
        <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: 8, padding: 12 }}>
          <div style={{ fontFamily: fontMono, fontSize: 9, color: textDim, letterSpacing: 1, marginBottom: 8 }}>即時數據</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
            <div>
              <div style={{ fontFamily: fontMono, fontSize: 9, color: textDim, letterSpacing: 0.8 }}>連線</div>
              <div style={{ fontSize: 18, color: text, fontWeight: 600 }}>287</div>
            </div>
            <div>
              <div style={{ fontFamily: fontMono, fontSize: 9, color: textDim, letterSpacing: 0.8 }}>訊息/min</div>
              <div style={{ fontSize: 18, color: hudTokens.lime, fontWeight: 600 }}>64</div>
            </div>
            <div>
              <div style={{ fontFamily: fontMono, fontSize: 9, color: textDim, letterSpacing: 0.8 }}>已遮罩</div>
              <div style={{ fontSize: 18, color: hudTokens.amber, fontWeight: 600 }}>3</div>
            </div>
          </div>
        </div>

        {/* Quick toggles */}
        <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: 8, padding: 12 }}>
          <div style={{ fontFamily: fontMono, fontSize: 9, color: textDim, letterSpacing: 1, marginBottom: 10 }}>快速開關</div>
          {[
            { l: '允許新訊息',     on: true },
            { l: '允許 Polls',     on: true },
            { l: '允許表情快速反應', on: false },
            { l: '隱藏 NSFW(自動)', on: true },
          ].map((t, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0',
              borderTop: i > 0 ? `1px dashed ${line}` : 'none',
            }}>
              <span style={{ flex: 1, fontSize: 13, color: text }}>{t.l}</span>
              <span style={{
                width: 36, height: 20, borderRadius: 10, position: 'relative',
                background: t.on ? hudTokens.lime : line, transition: 'background 0.2s',
              }}>
                <span style={{
                  position: 'absolute', top: 2, left: t.on ? 18 : 2,
                  width: 16, height: 16, borderRadius: '50%', background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                  transition: 'left 0.2s',
                }} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom tab bar */}
      <div style={{
        height: 80, background: panel, borderTop: `1px solid ${line}`,
        padding: '8px 8px 24px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 4,
      }}>
        {[
          { i: '⌂', l: '控制台', on: true },
          { i: '✦', l: '投票' },
          { i: '✉', l: '訊息' },
          { i: '◔', l: '通知', badge: 3 },
          { i: '⚙', l: '更多' },
        ].map((t, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2,
            color: t.on ? accent : textDim, position: 'relative',
          }}>
            <span style={{ fontSize: 18 }}>{t.i}</span>
            <span style={{ fontSize: 10, letterSpacing: 0.3 }}>{t.l}</span>
            {t.badge && (
              <span style={{
                position: 'absolute', top: 4, right: 'calc(50% - 18px)', minWidth: 14, height: 14,
                background: hudTokens.crimson, color: '#fff', borderRadius: 7,
                fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px',
              }}>{t.badge}</span>
            )}
          </div>
        ))}
      </div>

      {/* Home indicator */}
      <div style={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', width: 134, height: 5, background: text, borderRadius: 3, opacity: 0.4 }} />
    </div>
  );
}

Object.assign(window, { AdminSessionsPage, AdminSessionDetailPage, AdminPollDeepDivePage, AdminMobilePage });
