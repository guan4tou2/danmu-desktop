// Batch 5 — Admin EN i18n + WCAG Contrast Checker

/* =================================================================
   1) Admin Dashboard EN — full English locale screenshot
   ================================================================= */

function AdminDashboardEN({ theme = 'dark' }) {
  return (
    <AdminPageShellEN route="dashboard" title="Dashboard" en="LIVE · KEYNOTE 2025" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, height: '100%', minHeight: 0 }}>
          <KpiEN label="LIVE VIEWERS"  value="1,124"  delta="+87 / 5m"  accent={hudTokens.lime}  panel={panel} line={line} text={text} textDim={textDim} />
          <KpiEN label="MSG/SEC"        value="8.2"    delta="↘ from 12.4" accent={hudTokens.amber} panel={panel} line={line} text={text} textDim={textDim} />
          <KpiEN label="AVG LATENCY"    value="42 ms"  delta="● healthy"  accent={accent}           panel={panel} line={line} text={text} textDim={textDim} />

          <div style={{ gridColumn: 'span 2', background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim, marginBottom: 10 }}>MESSAGE FLOW · LAST 60 SEC</div>
            <svg width="100%" height="120" viewBox="0 0 600 120" preserveAspectRatio="none">
              <polyline points="0,90 50,80 100,72 150,60 200,68 250,55 300,42 350,38 400,45 450,50 500,42 550,40 600,48"
                fill={`${accent}22`} stroke={accent} strokeWidth="1.5" />
              <line x1="0" y1="55" x2="600" y2="55" stroke={hudTokens.amber} strokeDasharray="4 4" opacity="0.5" />
            </svg>
          </div>
          <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim, marginBottom: 10 }}>QUICK ACTIONS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['+ Create Poll', 'Push QR to Overlay', '⊘ Pause Receiving', '↓ Export Session'].map(a => (
                <span key={a} style={{ padding: '8px 10px', border: `1px solid ${line}`, borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 11, color: text, letterSpacing: 0.4 }}>{a}</span>
              ))}
            </div>
          </div>

          <div style={{ gridColumn: 'span 3', background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim }}>RECENT MESSAGES</span>
              <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.lime }}>● live</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim }}>
              {[
                { t: '14:02:48', n: 'Anonymous_4F2A',  m: 'Killer demo!' },
                { t: '14:02:46', n: 'cat-lover-99',     m: 'Where can I download this?' },
                { t: '14:02:44', n: 'Anonymous_8C19',  m: 'Loving the new theme 🔥' },
                { t: '14:02:42', n: 'jenny.chen',       m: 'Big +1 on translation feature' },
                { t: '14:02:40', n: 'Anonymous_2B7E',  m: 'Speed is insane' },
              ].map((r, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 140px 1fr', gap: 12 }}>
                  <span>{r.t}</span>
                  <span style={{ color: accent }}>{r.n}</span>
                  <span style={{ color: text }}>{r.m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </AdminPageShellEN>
  );
}

function KpiEN({ label, value, delta, accent, panel, line, text, textDim }) {
  return (
    <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: 4, padding: 18 }}>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim, marginBottom: 10 }}>{label}</div>
      <div style={{ fontFamily: hudTokens.fontDisplay, fontSize: 32, fontWeight: 600, color: accent, letterSpacing: 0.5, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 6, letterSpacing: 0.4 }}>{delta}</div>
    </div>
  );
}

const radius = 4;

// EN-only shell — same chrome as AdminPageShell but English nav labels.
function AdminPageShellEN({ route, title, en, children, theme = 'dark' }) {
  const isDark = theme === 'dark';
  const bg = isDark ? 'oklch(0.16 0.022 250)' : hudTokens.lightBg0;
  const panel = isDark ? hudTokens.bg1 : '#fff';
  const raised = isDark ? hudTokens.bg2 : hudTokens.lightBg2;
  const line = isDark ? hudTokens.line : hudTokens.lightLine;
  const text = isDark ? hudTokens.text : hudTokens.lightText;
  const textDim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  const accent = hudTokens.cyan;

  return (
    <div style={{
      width: '100%', height: '100%', background: bg, color: text, display: 'flex',
      fontFamily: hudTokens.fontSans, colorScheme: isDark ? 'dark' : 'light', overflow: 'hidden',
    }}>
      <ScanlineBg opacity={isDark ? 0.04 : 0.02} />
      {/* Sidebar */}
      <div style={{ width: 220, background: panel, borderRight: `1px solid ${line}`, padding: '18px 12px', display: 'flex', flexDirection: 'column', gap: 6, position: 'relative', zIndex: 1, overflow: 'auto' }}>
        <div style={{ padding: '0 6px 14px', borderBottom: `1px solid ${line}`, marginBottom: 10 }}>
          <DanmuHero title="Danmu Fire" theme={theme} size="small" align="left" />
        </div>
        {[
          { i: '◉', l: 'Dashboard', k: 'dashboard' },
          { i: '🎨', l: 'Theme Packs', k: 'themes' },
          { i: '⚙', l: 'Display Settings', k: 'display' },
          { i: '✨', l: 'Effects', k: 'effects' },
          { i: '🔌', l: 'Plugins', k: 'plugins' },
          { i: 'A', l: 'Fonts', k: 'fonts' },
          { i: '⚙', l: 'System', k: 'system' },
          { i: '⊘', l: 'Moderation', k: 'mod', badge: '143' },
          { i: '⏱', l: 'Rate Limits', k: 'rate' },
          { i: '☰', l: 'Messages', k: 'messages' },
          { i: '↓', l: 'History Export', k: 'export' },
          { i: '⊞', l: 'Overlay Widgets', k: 'widgets' },
          { i: '◷', l: 'Audit Log', k: 'audit' },
        ].map(n => (
          <div key={n.k} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '8px 10px', borderRadius: 4,
            background: route === n.k ? hudTokens.cyanSoft : 'transparent',
            color: route === n.k ? accent : text,
            fontSize: 12, cursor: 'pointer',
          }}>
            <span style={{ width: 16, fontFamily: hudTokens.fontMono, fontSize: 11, opacity: 0.7 }}>{n.i}</span>
            <span style={{ flex: 1 }}>{n.l}</span>
            {n.badge && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, padding: '1px 5px', background: hudTokens.crimson + '33', color: hudTokens.crimson, borderRadius: 2 }}>{n.badge}</span>}
          </div>
        ))}
        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 8, letterSpacing: 1.5, color: textDim, marginTop: 14, marginBottom: 4, padding: '0 6px' }}>INTEGRATIONS</div>
        {[
          { i: '⌬', l: 'Extensions', k: 'extensions', badge: '1' },
          { i: '⇌', l: 'Webhooks', k: 'webhooks', badge: '3' },
          { i: '⚿', l: 'API Tokens', k: 'tokens', badge: '4' },
          { i: '⇪', l: 'Backup & Restore', k: 'backup' },
        ].map(n => (
          <div key={n.k} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 4, color: text, fontSize: 12, cursor: 'pointer' }}>
            <span style={{ width: 16, fontFamily: hudTokens.fontMono, fontSize: 11, opacity: 0.7 }}>{n.i}</span>
            <span style={{ flex: 1 }}>{n.l}</span>
            {n.badge && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, padding: '1px 5px', background: textDim + '22', color: textDim, borderRadius: 2 }}>{n.badge}</span>}
          </div>
        ))}
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, position: 'relative', zIndex: 1 }}>
        <div style={{ padding: '14px 22px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 16 }}>
          <h1 style={{ margin: 0, fontFamily: hudTokens.fontDisplay, fontSize: 20, fontWeight: 600, color: text, letterSpacing: 0.5 }}>{title}</h1>
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1.5 }}>· {en}</span>
          <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12, fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.4 }}>
            <span style={{ color: hudTokens.lime }}>● LIVE</span>
            <span>1,124 viewers</span>
            <span>42ms</span>
            <span style={{ padding: '2px 8px', border: `1px solid ${accent}55`, borderRadius: 3, color: accent }}>EN</span>
          </span>
        </div>
        <div style={{ flex: 1, padding: 18, overflow: 'auto' }}>
          {children({ panel, raised, line, text, textDim, accent, radius })}
        </div>
      </div>
    </div>
  );
}


/* =================================================================
   2) WCAG Contrast Checker — full tool page
   ================================================================= */

function AdminWcagPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="display" title="無障礙檢查" en="A11Y · WCAG CONTRAST CHECKER" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {
        const checks = [
          { name: '彈幕白字 / 黑底',   fg: '#FFFFFF', bg: '#000000', ratio: 21.0,  pass: 'AAA' },
          { name: '彈幕青色 / 黑底',   fg: '#38BDF8', bg: '#000000', ratio: 8.92,  pass: 'AAA' },
          { name: '彈幕黃色 / 黑底',   fg: '#FBBF24', bg: '#000000', ratio: 11.5,  pass: 'AAA' },
          { name: '彈幕粉紅 / 黑底',   fg: '#FB7185', bg: '#000000', ratio: 4.52,  pass: 'AA',  warn: '小字未過 AAA' },
          { name: '彈幕紫色 / 白底',   fg: '#A78BFA', bg: '#FFFFFF', ratio: 3.18,  pass: 'fail', warn: '未過 AA' },
          { name: '彈幕綠色 / 投影底', fg: '#86EFAC', bg: '#0F172A', ratio: 9.8,   pass: 'AAA' },
          { name: '系統訊息 / 面板',   fg: '#94A3B8', bg: '#1E293B', ratio: 5.04,  pass: 'AA' },
          { name: '輔助灰文字 / 卡片', fg: '#64748B', bg: '#1E293B', ratio: 3.42,  pass: 'fail', warn: '未過 AA' },
        ];

        const PassPill = ({ p }) => {
          const map = {
            AAA:  { bg: hudTokens.lime + '22',    fg: hudTokens.lime,    label: '✓ AAA' },
            AA:   { bg: accent + '22',            fg: accent,            label: '✓ AA' },
            fail: { bg: hudTokens.crimson + '22', fg: hudTokens.crimson, label: '✗ FAIL' },
          }[p];
          return <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, padding: '3px 8px', borderRadius: 3, background: map.bg, color: map.fg, letterSpacing: 0.6, border: `1px solid ${map.fg}55` }}>{map.label}</span>;
        };

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 16, height: '100%', minHeight: 0 }}>
            {/* Left — checks table */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16, overflow: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <HudLabel color={textDim}>當前主題顏色檢查</HudLabel>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.lime, letterSpacing: 0.5 }}>● 6 過 AA+</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.crimson, letterSpacing: 0.5 }}>● 2 未過</span>
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>主題:CLASSIC · 8 對顏色</span>
              </div>

              {/* Visual Bar */}
              <div style={{ height: 28, background: '#000', borderRadius: 4, overflow: 'hidden', display: 'flex', marginBottom: 16 }}>
                <div style={{ width: '75%', background: hudTokens.lime, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: hudTokens.fontMono, fontSize: 10, color: '#000', fontWeight: 600 }}>75% PASS</div>
                <div style={{ width: '25%', background: hudTokens.crimson, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: hudTokens.fontMono, fontSize: 10, color: '#fff', fontWeight: 600 }}>25%</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {checks.map((c, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '180px 1fr 80px 100px',
                    alignItems: 'center', gap: 12,
                    padding: '10px 12px',
                    background: c.pass === 'fail' ? `${hudTokens.crimson}08` : raised,
                    border: `1px solid ${c.pass === 'fail' ? hudTokens.crimson + '55' : line}`,
                    borderRadius: 4,
                  }}>
                    <span style={{ fontSize: 12, color: text }}>{c.name}</span>
                    {/* live preview swatch */}
                    <div style={{
                      background: c.bg, padding: '8px 12px', borderRadius: 3,
                      display: 'flex', alignItems: 'center', gap: 8,
                    }}>
                      <span style={{ color: c.fg, fontFamily: hudTokens.fontDisplay, fontSize: 18, fontWeight: 700 }}>Aa 彈幕</span>
                      <span style={{ color: c.fg, fontFamily: hudTokens.fontMono, fontSize: 10, opacity: 0.7 }}>{c.fg} / {c.bg}</span>
                    </div>
                    <span style={{ fontFamily: hudTokens.fontDisplay, fontSize: 16, fontWeight: 600, color: c.pass === 'fail' ? hudTokens.crimson : text, textAlign: 'right' }}>
                      {c.ratio.toFixed(2)}<span style={{ fontSize: 10, color: textDim, marginLeft: 2 }}>:1</span>
                    </span>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}><PassPill p={c.pass} /></div>
                    {c.warn && (
                      <div style={{ gridColumn: '1 / -1', fontFamily: hudTokens.fontMono, fontSize: 10, color: c.pass === 'fail' ? hudTokens.crimson : hudTokens.amber, letterSpacing: 0.3, paddingTop: 4 }}>⚠ {c.warn} · 建議調整 fg lightness +12%</div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 16, padding: '10px 12px', background: hudTokens.cyanSoft, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 4, fontSize: 12, color: text, lineHeight: 1.6 }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: accent, letterSpacing: 1.5 }}>BUILT-IN GUARDRAIL</span><br/>
                觀眾自選顏色時,系統會自動拒絕未過 AA 的組合,並提示替代色。
              </div>
            </div>

            {/* Right — single-pair tester */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 18, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
              <HudLabel color={accent}>單對測試器</HudLabel>
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div>
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim, marginBottom: 6 }}>FOREGROUND</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 32, height: 32, background: '#FB7185', borderRadius: 4, border: `1px solid ${line}` }} />
                    <input defaultValue="#FB7185" style={{ flex: 1, padding: '8px 10px', background: raised, border: `1px solid ${line}`, color: text, fontFamily: hudTokens.fontMono, fontSize: 12, borderRadius: 3 }} />
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim, marginBottom: 6 }}>BACKGROUND</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 32, height: 32, background: '#000', borderRadius: 4, border: `1px solid ${line}` }} />
                    <input defaultValue="#000000" style={{ flex: 1, padding: '8px 10px', background: raised, border: `1px solid ${line}`, color: text, fontFamily: hudTokens.fontMono, fontSize: 12, borderRadius: 3 }} />
                  </div>
                </div>
              </div>

              {/* Preview block */}
              <div style={{ marginTop: 14, padding: 22, background: '#000', borderRadius: 4, textAlign: 'center', border: `1px solid ${line}` }}>
                <div style={{ color: '#FB7185', fontFamily: hudTokens.fontDisplay, fontSize: 28, fontWeight: 700, letterSpacing: 0.5 }}>太精彩了!</div>
                <div style={{ color: '#FB7185', fontSize: 13, marginTop: 6, opacity: 0.85 }}>The quick brown fox jumps over</div>
                <div style={{ color: '#FB7185', fontSize: 10, marginTop: 4, opacity: 0.7 }}>9px sample text · 小字測試</div>
              </div>

              <div style={{ marginTop: 14, padding: 14, background: raised, border: `1px solid ${line}`, borderRadius: 4 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontFamily: hudTokens.fontDisplay, fontSize: 32, fontWeight: 600, color: accent, letterSpacing: 0.5 }}>4.52</span>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: textDim }}>: 1</span>
                </div>
                <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                  <PassRow level="AA · 一般文字 (≥4.5)" pass={true} accent={hudTokens.lime} text={text} />
                  <PassRow level="AA · 大字 (≥3.0)"     pass={true} accent={hudTokens.lime} text={text} />
                  <PassRow level="AAA · 一般 (≥7.0)"    pass={false} accent={hudTokens.crimson} text={text} />
                  <PassRow level="AAA · 大字 (≥4.5)"    pass={true} accent={hudTokens.lime} text={text} />
                </div>
              </div>

              <HudLabel color={textDim} top>建議</HudLabel>
              <div style={{ marginTop: 8, padding: 12, background: `${hudTokens.amber}10`, border: `1px solid ${hudTokens.amber}55`, borderRadius: 4 }}>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.amber, letterSpacing: 1, marginBottom: 6 }}>SUGGESTED FG</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {['#F87171', '#FCA5A5', '#FECDD3'].map((c, i) => (
                    <span key={c} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 8px', background: '#000', borderRadius: 3, border: `1px solid ${line}`, cursor: 'pointer' }}>
                      <span style={{ width: 14, height: 14, background: c, borderRadius: 2 }} />
                      <span style={{ color: c, fontFamily: hudTokens.fontMono, fontSize: 10 }}>{c}</span>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: hudTokens.lime }}>{[5.18, 6.92, 14.4][i]}:1</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

function PassRow({ level, pass, accent, text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 0' }}>
      <span style={{ color: accent, fontSize: 12, fontWeight: 700 }}>{pass ? '✓' : '✗'}</span>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: text, letterSpacing: 0.3 }}>{level}</span>
    </div>
  );
}

Object.assign(window, { AdminDashboardEN, AdminWcagPage });
