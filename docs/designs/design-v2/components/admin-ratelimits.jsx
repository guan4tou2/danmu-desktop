// Admin · 速率限制 (Rate Limits) — 可編輯的 4 scopes + 即時違規統計
//
// Backend exposes `rate_limits.yaml`:
//   FIRE   · 觀眾送 danmu    · per_fingerprint     · 10/60s
//   API    · 公開 /api/*     · per_ip              · 120/60s
//   ADMIN  · 管理操作        · per_admin_session   · 600/60s
//   LOGIN  · 密碼登入嘗試    · per_ip (sliding)    · 5/300s + 15m lockout
//
// This page is the dedicated editor — the System page只保留 read-only summary。

function AdminRateLimitsPage({ theme = 'dark' }) {
  const scopes = [
    {
      id: 'FIRE',
      zh: '觀眾發送 Danmu',
      desc: '觀眾在 Viewer 按 FIRE · 命中時丟棄訊息 + 回 429',
      keyBy: 'per_fingerprint', keyZh: '以指紋為單位 (fp_*)',
      limit: 10, window: 60,
      lockout: 0,
      state: 'live',
      hits24h: 1842, viol: 47, violRate: 2.5,
      suggest: { limit: 15, window: 60, reason: '高峰時段 P95 = 12/60s · 留 25% 餘量' },
    },
    {
      id: 'API',
      zh: '公開 API',
      desc: '/api/polls · /api/history · /api/effects · 命中時回 429',
      keyBy: 'per_ip', keyZh: '以 IP 為單位',
      limit: 120, window: 60,
      lockout: 0,
      state: 'live',
      hits24h: 8421, viol: 12, violRate: 0.14,
      suggest: null,
    },
    {
      id: 'ADMIN',
      zh: '管理後台',
      desc: '已登入管理的所有寫入 · 命中時回 429 且寫入 audit log',
      keyBy: 'per_admin_session', keyZh: '以管理 session 為單位',
      limit: 600, window: 60,
      lockout: 0,
      state: 'live',
      hits24h: 284, viol: 0, violRate: 0,
      suggest: null,
    },
    {
      id: 'LOGIN',
      zh: '管理密碼登入',
      desc: '連續錯誤達上限即鎖定 · 回 429 + 提示剩餘鎖定時間',
      keyBy: 'per_ip_sliding', keyZh: '以 IP + 滑動視窗',
      limit: 5, window: 300,
      lockout: 900,
      state: 'live',
      hits24h: 18, viol: 3, violRate: 16.7,
      suggest: { limit: 5, window: 300, lockout: 1800, reason: '觀察到暴力嘗試 · 鎖定延長至 30 分' },
    },
  ];

  return (
    <AdminPageShell
      route="ratelimit"
      title="速率限制"
      en="RATE LIMITS · 4 SCOPES · rate_limits.yaml"
      theme={theme}
    >
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* Summary strip */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14,
          }}>
            <SumTile label="24h 請求" value="10,575" delta="+8% vs 昨日" deltaColor={textDim} panel={panel} line={line} textDim={textDim} text={text} accent={accent} radius={radius} />
            <SumTile label="24h 違規" value="62" delta="命中率 0.59%" deltaColor={hudTokens.lime} panel={panel} line={line} textDim={textDim} text={text} accent={accent} radius={radius} />
            <SumTile label="現正鎖定" value="2 IP" delta="LOGIN · 15 分後自動解除" deltaColor={hudTokens.amber} panel={panel} line={line} textDim={textDim} text={text} accent={accent} radius={radius} />
            <SumTile label="黑名單" value="4 IP" delta="手動加入 · 永久" deltaColor={hudTokens.crimson} panel={panel} line={line} textDim={textDim} text={text} accent={accent} radius={radius} />
          </div>

          {/* Editable scopes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {scopes.map(s => (
              <ScopeCard
                key={s.id} s={s}
                panel={panel} raised={raised} line={line} text={text} textDim={textDim} accent={accent} radius={radius}
              />
            ))}
          </div>

          {/* Two-column bottom: recent violations + IP policy */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14 }}>
            <ViolationsFeed panel={panel} raised={raised} line={line} text={text} textDim={textDim} accent={accent} radius={radius} />
            <IpPolicyCard panel={panel} raised={raised} line={line} text={text} textDim={textDim} accent={accent} radius={radius} />
          </div>

          {/* Save rail */}
          <div style={{
            padding: 14, background: panel, border: `1px solid ${line}`, borderRadius: radius,
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <HudLabel color={accent}>未套用變更 · 2 項</HudLabel>
            <span style={{ fontSize: 12, color: textDim, fontFamily: hudTokens.fontMono }}>
              FIRE limit 10 → 15 · LOGIN lockout 900 → 1800
            </span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              <button style={{
                padding: '8px 14px', borderRadius: 4, border: `1px solid ${line}`,
                background: 'transparent', color: text, cursor: 'pointer',
                fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1,
              }}>還原</button>
              <button style={{
                padding: '8px 18px', borderRadius: 4, border: `1px solid ${accent}`,
                background: accent, color: '#000', cursor: 'pointer', fontWeight: 700,
                fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5,
              }}>▶ 立即套用 (熱重載)</button>
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

function SumTile({ label, value, delta, deltaColor, panel, line, textDim, text, accent, radius }) {
  return (
    <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
      <HudLabel color={textDim}>{label}</HudLabel>
      <div style={{
        fontFamily: hudTokens.fontDisplay, fontSize: 28, fontWeight: 600,
        color: text, letterSpacing: -0.5, lineHeight: 1.1, marginTop: 6,
      }}>{value}</div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: deltaColor, letterSpacing: 0.5, marginTop: 6 }}>{delta}</div>
    </div>
  );
}

function ScopeCard({ s, panel, raised, line, text, textDim, accent, radius }) {
  const violatorColor = s.violRate > 5 ? hudTokens.crimson : s.violRate > 1 ? hudTokens.amber : hudTokens.lime;

  return (
    <div style={{
      background: panel, border: `1px solid ${line}`, borderRadius: radius,
      padding: 16, display: 'grid', gridTemplateColumns: '180px 1fr 340px', gap: 16, alignItems: 'stretch',
    }}>
      {/* Scope identity */}
      <div style={{ borderRight: `1px solid ${line}`, paddingRight: 16 }}>
        <div style={{
          display: 'inline-block',
          fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 2, fontWeight: 700,
          color: accent, padding: '4px 10px', border: `1px solid ${accent}`, borderRadius: 3,
          background: hudTokens.cyanSoft,
        }}>{s.id}</div>
        <div style={{ fontSize: 14, fontWeight: 600, color: text, marginTop: 10 }}>{s.zh}</div>
        <div style={{ fontSize: 11, color: textDim, marginTop: 6, lineHeight: 1.6 }}>{s.desc}</div>
        <div style={{ marginTop: 10, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
          KEY · <span style={{ color: text }}>{s.keyBy}</span>
        </div>
        <div style={{ fontSize: 10, color: textDim, marginTop: 2 }}>{s.keyZh}</div>
      </div>

      {/* Knobs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: s.lockout !== undefined && s.id === 'LOGIN' ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)', gap: 10 }}>
          <Knob label="LIMIT" unit="次" value={s.limit} accent={accent} line={line} raised={raised} text={text} textDim={textDim} />
          <Knob label="WINDOW" unit="秒" value={s.window} accent={accent} line={line} raised={raised} text={text} textDim={textDim} />
          {s.id === 'LOGIN' && (
            <Knob label="LOCKOUT" unit="秒" value={s.lockout} accent={accent} line={line} raised={raised} text={text} textDim={textDim} />
          )}
        </div>

        <div style={{
          padding: 10, background: raised, borderRadius: 4, border: `1px solid ${line}`,
          fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3, lineHeight: 1.6,
        }}>
          <div style={{ color: text }}>
            <span style={{ color: accent }}>effective_rate</span> = {s.limit} / {s.window}s
            {s.id === 'LOGIN' && <> · <span style={{ color: accent }}>lock</span> = {s.lockout}s</>}
            {' · '}<span style={{ color: accent }}>burst</span> = {Math.round(s.limit * 1.5)}
          </div>
          {s.suggest && (
            <div style={{ marginTop: 6, color: hudTokens.amber, letterSpacing: 0.3 }}>
              ⚠ 建議 · {s.id === 'LOGIN' ? `lockout ${s.lockout}→${s.suggest.lockout}s` : `limit ${s.limit}→${s.suggest.limit}/${s.suggest.window}s`}
              <span style={{ color: textDim, marginLeft: 6 }}>· {s.suggest.reason}</span>
              <span style={{
                marginLeft: 8, padding: '1px 7px', border: `1px solid ${accent}`, borderRadius: 3,
                color: accent, cursor: 'pointer',
              }}>套用建議</span>
            </div>
          )}
        </div>
      </div>

      {/* Live activity */}
      <div style={{
        padding: 12, background: raised, borderRadius: 4, border: `1px solid ${line}`,
        display: 'flex', flexDirection: 'column', gap: 8,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <StatusDot color={hudTokens.lime} size={6} pulse />
          <HudLabel color={textDim}>24H ACTIVITY</HudLabel>
        </div>
        <Sparkline
          data={{
            FIRE:  [12, 18, 28, 24, 36, 42, 58, 62, 48, 52, 74, 68, 40, 28, 32],
            API:   [80, 95, 120, 140, 110, 128, 142, 135, 148, 155, 160, 138, 110, 92, 104],
            ADMIN: [4, 2, 5, 3, 7, 4, 6, 4, 3, 5, 4, 6, 3, 2, 4],
            LOGIN: [0, 0, 1, 0, 0, 2, 1, 0, 0, 3, 4, 2, 0, 0, 1],
          }[s.id]}
          height={38}
          stroke={accent}
          fill={hudTokens.cyanSoft}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginTop: 2 }}>
          <MiniPair kh="REQ" kv={s.hits24h.toLocaleString()} text={text} textDim={textDim} />
          <MiniPair kh="VIOL" kv={s.viol} text={violatorColor} textDim={textDim} />
          <MiniPair kh="RATE" kv={`${s.violRate.toFixed(2)}%`} text={violatorColor} textDim={textDim} />
        </div>
      </div>
    </div>
  );
}

function Knob({ label, unit, value, accent, line, raised, text, textDim }) {
  return (
    <div style={{
      padding: 10, background: raised, border: `1px solid ${line}`, borderRadius: 4,
    }}>
      <HudLabel color={textDim}>{label}</HudLabel>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
        <input
          defaultValue={value}
          style={{
            flex: 1, minWidth: 0, padding: '4px 6px', borderRadius: 3,
            background: 'transparent', border: `1px solid ${line}`,
            color: accent, fontFamily: hudTokens.fontMono, fontSize: 18, fontWeight: 700,
            letterSpacing: -0.5, outline: 'none', textAlign: 'right',
          }}
        />
        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>{unit}</span>
      </div>
    </div>
  );
}

function MiniPair({ kh, kv, text, textDim }) {
  return (
    <div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 1 }}>{kh}</div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 13, fontWeight: 700, color: text, letterSpacing: -0.3, marginTop: 2 }}>{kv}</div>
    </div>
  );
}

function ViolationsFeed({ panel, raised, line, text, textDim, accent, radius }) {
  const rows = [
    { time: '14:02:38', scope: 'FIRE',  key: 'fp_88bc…44f2',  ua: 'Safari iOS · 100.64.1.59', hits: 14, action: 'DROPPED', act: hudTokens.amber },
    { time: '14:01:12', scope: 'LOGIN', key: '203.74.12.88',   ua: 'curl/8.4',                  hits: 5,  action: 'LOCKED · 15m', act: hudTokens.crimson },
    { time: '13:58:04', scope: 'FIRE',  key: 'fp_c091…8af3',  ua: 'Chrome mac · 100.64.1.88',  hits: 11, action: 'DROPPED', act: hudTokens.amber },
    { time: '13:42:27', scope: 'API',   key: '100.64.3.12',   ua: 'python-requests/2.31',      hits: 127,action: 'THROTTLED',act: hudTokens.amber },
    { time: '13:12:51', scope: 'LOGIN', key: '91.203.8.17',   ua: 'hydra',                     hits: 5,  action: 'BLACKLIST · 永久', act: hudTokens.crimson },
    { time: '12:48:09', scope: 'FIRE',  key: 'fp_21de…9b0a',  ua: 'Edge win · 100.64.2.17',    hits: 10, action: 'DROPPED', act: hudTokens.amber },
  ];
  return (
    <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '12px 14px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: text }}>近期違規</div>
        <HudLabel color={textDim}>RECENT VIOLATIONS · 6 筆 · 近 2 小時</HudLabel>
        <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 1, cursor: 'pointer' }}>匯出 CSV →</span>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: '70px 60px 1fr 140px 56px 130px 36px',
        fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim,
        padding: '8px 14px', gap: 10, borderBottom: `1px solid ${line}`, letterSpacing: 1,
      }}>
        <span>TIME</span><span>SCOPE</span><span>KEY</span><span>UA</span><span>HITS</span><span>ACTION</span><span />
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '70px 60px 1fr 140px 56px 130px 36px',
          fontFamily: hudTokens.fontMono, fontSize: 11,
          padding: '8px 14px', gap: 10, borderBottom: `1px solid ${line}`, alignItems: 'center',
        }}>
          <span style={{ color: textDim, fontSize: 10 }}>{r.time}</span>
          <span style={{ color: accent, letterSpacing: 1 }}>{r.scope}</span>
          <span style={{ color: text, overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.key}</span>
          <span style={{ color: textDim, fontSize: 10, overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.ua}</span>
          <span style={{ color: text }}>{r.hits}</span>
          <span style={{ color: r.act, letterSpacing: 0.5 }}>{r.action}</span>
          <span style={{ color: textDim, cursor: 'pointer', textAlign: 'right' }}>⋯</span>
        </div>
      ))}
    </div>
  );
}

function IpPolicyCard({ panel, raised, line, text, textDim, accent, radius }) {
  const entries = [
    { ip: '203.74.12.88', note: '暴力登入嘗試 · hydra', added: '今日 14:01', by: 'auto · LOGIN',   kind: 'DENY',  dur: '15 分後解除' },
    { ip: '91.203.8.17',  note: '登入黑名單',           added: '今日 13:13', by: 'auto · LOGIN',   kind: 'DENY',  dur: '永久' },
    { ip: '100.64.0.0/16',note: '辦公室網段 · 免限速', added: '3d',        by: 'admin',          kind: 'ALLOW', dur: '永久' },
    { ip: '8.8.8.8',      note: '測試用 · 預計下週移除',added: '1d',        by: 'admin',          kind: 'DENY',  dur: '7d' },
  ];
  return (
    <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '12px 14px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: text }}>IP 黑/白名單</div>
        <HudLabel color={textDim}>IP POLICY · 4 條</HudLabel>
      </div>
      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <input placeholder="IP 或 CIDR · e.g. 203.74.12.88 / 100.64.0.0/16" style={{
            flex: 1, padding: '7px 10px', borderRadius: 4, background: raised,
            border: `1px solid ${line}`, color: text, fontSize: 12, outline: 'none', fontFamily: hudTokens.fontMono,
          }} />
          <select style={{
            padding: '7px 8px', borderRadius: 4, background: raised, border: `1px solid ${line}`,
            color: text, fontFamily: hudTokens.fontMono, fontSize: 11,
          }}>
            <option>DENY</option>
            <option>ALLOW</option>
          </select>
          <button style={{
            padding: '7px 12px', borderRadius: 4, border: `1px solid ${accent}`,
            background: hudTokens.cyanSoft, color: accent, fontFamily: hudTokens.fontMono, fontSize: 11, fontWeight: 700, cursor: 'pointer', letterSpacing: 1,
          }}>新增</button>
        </div>
        {entries.map((e, i) => (
          <div key={i} style={{
            padding: '8px 10px', background: raised, border: `1px solid ${line}`, borderRadius: 4,
            display: 'grid', gridTemplateColumns: '54px 1fr auto', gap: 10, alignItems: 'center',
          }}>
            <span style={{
              fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, fontWeight: 700,
              color: e.kind === 'DENY' ? hudTokens.crimson : hudTokens.lime,
              padding: '2px 6px', border: `1px solid ${e.kind === 'DENY' ? hudTokens.crimson : hudTokens.lime}`,
              borderRadius: 3, textAlign: 'center',
            }}>{e.kind}</span>
            <div>
              <div style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: text }}>{e.ip}</div>
              <div style={{ fontSize: 10, color: textDim, marginTop: 2 }}>
                {e.note} · {e.added} · {e.by} · <span style={{ color: e.dur === '永久' ? hudTokens.crimson : textDim }}>{e.dur}</span>
              </div>
            </div>
            <span style={{ color: textDim, fontSize: 14, cursor: 'pointer' }}>✕</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { AdminRateLimitsPage });
