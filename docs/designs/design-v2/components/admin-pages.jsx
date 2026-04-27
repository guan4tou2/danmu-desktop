// Admin sub-pages: Effects library, Plugins, Fonts, System & Fingerprint.
// Same chrome (sidebar + topbar) as AdminV3SoftHolo; page body varies per route.
// Goal: show that Admin is a real multi-page app, not just a Dashboard mock.

function AdminPageShell({ route, title, en, children, theme = 'dark' }) {
  const isDark = theme === 'dark';
  const bg = isDark ? 'oklch(0.16 0.022 250)' : hudTokens.lightBg0;
  const panel = isDark ? 'oklch(0.20 0.025 250)' : '#fff';
  const line = isDark ? 'oklch(0.32 0.03 220 / 0.35)' : hudTokens.lightLine;
  const text = isDark ? hudTokens.text : hudTokens.lightText;
  const textDim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  const accent = hudTokens.cyan;
  const radius = 6;

  return (
    <div style={{
      width: '100%', height: '100%', background: bg, color: text,
      fontFamily: hudTokens.fontSans, display: 'flex', overflow: 'hidden',
    }}>
      {/* Sidebar */}
      <div style={{
        width: 240, background: panel, borderRight: `1px solid ${line}`,
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ padding: '20px 22px 18px', borderBottom: `1px solid ${line}` }}>
          <div style={{
            fontFamily: HERO_FONT_DISPLAY,
            fontSize: 30,
            color: HERO_SKY,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            fontWeight: 400,
            lineHeight: 1,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
          }}>Danmu Fire</div>
          <div style={{
            marginTop: 8,
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim,
          }}>
            <StatusDot color={hudTokens.lime} size={5} pulse />
            <span>ADMIN</span>
            <span style={{ color: line }}>·</span>
            <span>v4.8.7</span>
          </div>
        </div>

        <div style={{ flex: 1, padding: '14px 10px', overflow: 'auto' }}>
          <AdminNavSection label="總覽" textDim={textDim} />
          <AdminNavItem icon="◉" label="控制台" active={route === 'dashboard'} text={text} textDim={textDim} accent={accent} line={line} />
          <AdminNavItem icon="≡" label="訊息紀錄" badge="12" active={route === 'messages'} text={text} textDim={textDim} accent={accent} line={line} />
          <AdminNavItem icon="↳" label="時間軸匯出" active={route === 'history'} text={text} textDim={textDim} accent={accent} line={line} />

          <AdminNavSection label="互動" textDim={textDim} top />
          <AdminNavItem icon="◈" label="投票" live active={route === 'polls'} text={text} textDim={textDim} accent={accent} line={line} />
          <AdminNavItem icon="⬚" label="Overlay Widgets" badge="2" active={route === 'widgets'} text={text} textDim={textDim} accent={accent} line={line} />
          <AdminNavItem icon="❖" label="風格主題包" badge="6" active={route === 'themes'} text={text} textDim={textDim} accent={accent} line={line} />
          <AdminNavItem icon="◐" label="顯示設定" active={route === 'display'} text={text} textDim={textDim} accent={accent} line={line} />
          <AdminNavItem icon="▦" label="素材庫" active={route === 'assets'} text={text} textDim={textDim} accent={accent} line={line} />

          <AdminNavSection label="審核" textDim={textDim} top />
          <AdminNavItem icon="⊘" label="敏感字 & 黑名單" badge="847" active={route === 'moderation'} text={text} textDim={textDim} accent={accent} line={line} />
          <AdminNavItem icon="◑" label="速率限制" active={route === 'ratelimit'} text={text} textDim={textDim} accent={accent} line={line} />

          <AdminNavSection label="設定" textDim={textDim} top />
          <AdminNavItem icon="✦" label="效果庫 .dme" badge="24" active={route === 'effects'} text={text} textDim={textDim} accent={accent} line={line} />
          <AdminNavItem icon="⬢" label="伺服器插件" badge="7" active={route === 'plugins'} text={text} textDim={textDim} accent={accent} line={line} />
          <AdminNavItem icon="⌂" label="字型管理" active={route === 'fonts'} text={text} textDim={textDim} accent={accent} line={line} />
          <AdminNavItem icon="⚙" label="系統 & 指紋" active={route === 'system'} text={text} textDim={textDim} accent={accent} line={line} />
        </div>

        <div style={{ padding: '12px 16px', borderTop: `1px solid ${line}`, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5, color: textDim }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span>TELEMETRY</span>
            <span style={{ color: hudTokens.lime }}>● HEALTHY</span>
          </div>
          <TelemBar label="CPU"  value="12%"     bars={[2, 3, 2, 4, 3, 2, 3, 2]} text={text} textDim={textDim} accent={accent} />
          <TelemBar label="WS"   value="247"     bars={[5, 6, 7, 6, 8, 7, 9, 8]} text={text} textDim={textDim} accent={accent} />
          <TelemBar label="MEM"  value="218 MB"  bars={[4, 4, 5, 4, 5, 5, 6, 5]} text={text} textDim={textDim} accent={accent} />
          <TelemBar label="RATE" value="4.2/s"   bars={[3, 5, 4, 6, 4, 5, 7, 6]} text={text} textDim={textDim} accent={accent} />
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
        <div style={{
          padding: '18px 28px', display: 'flex', alignItems: 'center', gap: 18,
          borderBottom: `1px solid ${line}`,
        }}>
          <div>
            <HudLabel color={textDim}>{en}</HudLabel>
            <div style={{ fontSize: 22, fontWeight: 600, marginTop: 2, letterSpacing: -0.3 }}>{title}</div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
            <div style={{
              padding: '7px 14px', borderRadius: radius, border: `1px solid ${line}`,
              fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1, color: textDim,
            }}>⌕ 搜尋  ⌘K</div>
            <button style={{
              padding: '7px 14px', borderRadius: radius, border: `1px solid ${accent}`,
              background: accent, color: '#000',
              fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5, fontWeight: 700,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <StatusDot color="#000" size={6} pulse={false} />BROADCASTING
            </button>
          </div>
        </div>

        <div style={{ flex: 1, overflow: 'auto', padding: 24 }}>
          {children({ bg, panel, raised: isDark ? 'oklch(0.24 0.028 250)' : hudTokens.lightBg2, line, text, textDim, accent, radius })}
        </div>
      </div>
    </div>
  );
}

function AdminNavSection({ label, textDim, top }) {
  return (<div style={{ padding: '6px 12px 4px', marginTop: top ? 16 : 0 }}><HudLabel color={textDim}>{label}</HudLabel></div>);
}
function AdminNavItem({ icon, label, active, badge, live, text, textDim, accent, line }) {
  return (
    <div style={{
      height: 34, display: 'flex', alignItems: 'center', gap: 10, padding: '0 12px', borderRadius: 4,
      background: active ? hudTokens.cyanSoft : 'transparent', marginBottom: 2,
    }}>
      <span style={{ color: active ? accent : textDim, width: 14, textAlign: 'center' }}>{icon}</span>
      <span style={{ fontSize: 13, fontWeight: active ? 500 : 400, color: text }}>{label}</span>
      {badge && (
        <span style={{
          marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9,
          color: textDim, padding: '1px 6px', border: `1px solid ${line}`, borderRadius: 4,
        }}>{badge}</span>
      )}
      {live && <StatusDot color={hudTokens.magenta} size={6} style={{ marginLeft: 'auto' }} />}
    </div>
  );
}

/* ---------- Page 1: Effects Library (.dme) ---------- */

function AdminEffectsPage({ theme = 'dark' }) {
  const [dropOver, setDropOver] = React.useState(false);
  const effects = [
    { name: 'glow-soft',       cat: 'GLOW',   author: 'built-in', enabled: true,  uses: 1284, ver: '1.0.0' },
    { name: 'glow-neon',       cat: 'GLOW',   author: 'built-in', enabled: true,  uses: 892,  ver: '1.0.0' },
    { name: 'shake-light',     cat: 'SHAKE',  author: 'built-in', enabled: true,  uses: 412,  ver: '1.0.0' },
    { name: 'shake-heavy',     cat: 'SHAKE',  author: 'built-in', enabled: true,  uses: 88,   ver: '1.0.0' },
    { name: 'wave-sine',       cat: 'MOTION', author: 'built-in', enabled: true,  uses: 321,  ver: '1.0.0' },
    { name: 'rainbow-cycle',   cat: 'COLOR',  author: 'built-in', enabled: true,  uses: 567,  ver: '1.1.0' },
    { name: 'spin-3d',         cat: 'MOTION', author: '@mei',     enabled: true,  uses: 142,  ver: '0.3.1' },
    { name: 'bounce-cartoon',  cat: 'MOTION', author: '@kairi',   enabled: true,  uses: 203,  ver: '0.2.0' },
    { name: 'blink-crt',       cat: 'COLOR',  author: 'built-in', enabled: false, uses: 44,   ver: '1.0.0' },
    { name: 'zoom-in-out',     cat: 'MOTION', author: 'built-in', enabled: true,  uses: 512,  ver: '1.0.0' },
    { name: 'typewriter',      cat: 'TEXT',   author: '@roy',     enabled: true,  uses: 77,   ver: '0.1.2' },
    { name: 'fire-trail',      cat: 'MOTION', author: '@roy',     enabled: false, uses: 12,   ver: '0.0.9-beta' },
  ];

  return (
    <AdminPageShell route="effects" title="效果庫 .dme" en="EFFECTS LIBRARY · 24 ENTRIES · 3 AUTHORS" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Drop zone strip — drag-target for .dme files */}
            <div
              onDragOver={(e) => { e.preventDefault(); setDropOver(true); }}
              onDragLeave={() => setDropOver(false)}
              onDrop={(e) => { e.preventDefault(); setDropOver(false); }}
              style={{
                position: 'relative', padding: '14px 16px', borderRadius: radius,
                border: `1.5px dashed ${dropOver ? accent : line}`,
                background: dropOver ? hudTokens.cyanSoft : raised,
                display: 'flex', alignItems: 'center', gap: 14,
                transition: 'background 150ms, border-color 150ms',
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 4, flexShrink: 0,
                border: `1px solid ${dropOver ? accent : line}`,
                background: dropOver ? `${hudTokens.cyan}22` : panel,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, color: dropOver ? accent : textDim,
                transition: 'all 150ms',
                transform: dropOver ? 'scale(1.08)' : 'scale(1)',
              }}>{dropOver ? '↓' : '✦'}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1, color: dropOver ? accent : text }}>
                  {dropOver ? '放開以匯入 .dme 效果包' : '拖入 .dme 檔上傳新效果 · 或點此瀏覽'}
                </div>
                <div style={{ marginTop: 2, fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 0.5, color: textDim }}>
                  支援 .dme · .dme.zip · 最大 4 MB · 上傳後自動熱重載 · 不影響進行中效果
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                <span style={{
                  padding: '6px 11px', borderRadius: 3,
                  border: `1px solid ${line}`, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1,
                  color: textDim, background: panel,
                }}>↻ 熱重載</span>
                <span style={{
                  padding: '6px 11px', borderRadius: 3,
                  border: `1px solid ${accent}`, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1,
                  color: accent, background: hudTokens.cyanSoft,
                }}>+ 瀏覽檔案</span>
              </div>
            </div>

            {/* Toolbar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['全部 24', 'GLOW 4', 'MOTION 8', 'COLOR 6', 'SHAKE 3', 'TEXT 3'].map((f, i) => (
                  <span key={f} style={{
                    padding: '5px 12px', borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 10,
                    letterSpacing: 1, border: `1px solid ${i === 0 ? accent : line}`,
                    color: i === 0 ? accent : textDim, background: i === 0 ? hudTokens.cyanSoft : 'transparent',
                  }}>{f}</span>
                ))}
              </div>
              <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>
                排序 · 最近使用 ▾
              </span>
            </div>

            {/* Grid of effect cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              {effects.map(e => (
                <div key={e.name} style={{
                  background: panel, border: `1px solid ${line}`, borderRadius: radius,
                  padding: 12, display: 'flex', flexDirection: 'column', gap: 8,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <StatusDot color={e.enabled ? hudTokens.lime : textDim} size={6} pulse={e.enabled} />
                    <HudLabel color={textDim}>{e.cat}</HudLabel>
                    <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim }}>v{e.ver}</span>
                  </div>
                  {/* Preview chip */}
                  <div style={{
                    height: 44, borderRadius: 4, background: raised, border: `1px solid ${line}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: hudTokens.fontDisplay, fontSize: 16, fontWeight: 600,
                    color: e.cat === 'COLOR' ? hudTokens.magenta : e.cat === 'GLOW' ? accent : text,
                    textShadow: e.cat === 'GLOW' ? `0 0 12px ${accent}` : 'none',
                    letterSpacing: e.cat === 'TEXT' ? 2 : 0,
                  }}>
                    {e.cat === 'SHAKE' ? '≈ ABC ≈' : e.cat === 'MOTION' ? '→ ABC →' : 'ABC'}
                  </div>
                  <div>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: text }}>{e.name}</div>
                    <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5, marginTop: 2 }}>
                      {e.author} · {e.uses.toLocaleString()} 次使用
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '2px 8px', borderRadius: 3, border: `1px solid ${e.enabled ? accent : line}`, color: e.enabled ? accent : textDim, cursor: 'pointer' }}>
                      {e.enabled ? 'ON' : 'OFF'}
                    </span>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '2px 8px', borderRadius: 3, border: `1px solid ${line}`, color: textDim, cursor: 'pointer' }}>EDIT</span>
                    <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, cursor: 'pointer' }}>⋯</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: YAML inspector */}
          <div style={{
            background: panel, border: `1px solid ${line}`, borderRadius: radius,
            display: 'flex', flexDirection: 'column', overflow: 'hidden',
          }}>
            <div style={{ padding: '12px 14px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <StatusDot color={hudTokens.lime} size={6} pulse />
              <span style={{ fontSize: 13, fontWeight: 600 }}>glow-neon.dme</span>
              <HudLabel color={textDim}>HOT-RELOADED · 2s AGO</HudLabel>
            </div>
            <div style={{
              padding: 14, fontFamily: hudTokens.fontMono, fontSize: 11, lineHeight: 1.7,
              color: text, background: raised, flex: 1, overflow: 'auto',
            }}>
              <YamlLine kw="name" val='"glow-neon"' textDim={textDim} accent={accent} />
              <YamlLine kw="version" val='"1.0.0"' textDim={textDim} accent={accent} />
              <YamlLine kw="category" val="GLOW" textDim={textDim} accent={accent} />
              <YamlLine kw="author" val='"built-in"' textDim={textDim} accent={accent} />
              <div style={{ height: 8 }} />
              <div style={{ color: textDim }}># CSS hook applied to .danmu-item</div>
              <YamlLine kw="css" textDim={textDim} accent={accent} />
              <div style={{ paddingLeft: 14 }}>
                <YamlLine kw="text-shadow" val='"0 0 8px #FF4D9E, 0 0 20px #FF4D9E"' textDim={textDim} accent={accent} />
                <YamlLine kw="color" val='"#FFFFFF"' textDim={textDim} accent={accent} />
                <YamlLine kw="filter" val='"saturate(1.5)"' textDim={textDim} accent={accent} />
              </div>
              <div style={{ height: 8 }} />
              <YamlLine kw="keyframes" textDim={textDim} accent={accent} />
              <div style={{ paddingLeft: 14 }}>
                <YamlLine kw="0%" val="{ opacity: 0.6 }" textDim={textDim} accent={accent} />
                <YamlLine kw="50%" val="{ opacity: 1.0 }" textDim={textDim} accent={accent} />
                <YamlLine kw="100%" val="{ opacity: 0.6 }" textDim={textDim} accent={accent} />
              </div>
              <div style={{ height: 8 }} />
              <YamlLine kw="duration" val="2s" textDim={textDim} accent={accent} />
              <YamlLine kw="loop" val="true" textDim={textDim} accent={accent} />
            </div>
            <div style={{ padding: 12, borderTop: `1px solid ${line}`, display: 'flex', gap: 6 }}>
              <button style={{ flex: 1, padding: '7px', borderRadius: 4, border: `1px solid ${line}`, background: 'transparent', color: text, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1 }}>RELOAD</button>
              <button style={{ flex: 1, padding: '7px', borderRadius: 4, border: `1px solid ${accent}`, background: hudTokens.cyanSoft, color: accent, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, fontWeight: 700 }}>PREVIEW</button>
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

function YamlLine({ kw, val, textDim, accent }) {
  return (
    <div>
      <span style={{ color: accent }}>{kw}</span>
      {val !== undefined && <span style={{ color: textDim }}>: </span>}
      {val !== undefined && <span>{val}</span>}
    </div>
  );
}

/* ---------- Page 2: Plugins ---------- */

function AdminPluginsPage({ theme = 'dark' }) {
  // Plugins = OPTIONAL third-party extensions only.
  // Blacklist / rate-limit / fingerprint are first-class features (see 系統 & 指紋 頁).
  const plugins = [
    { name: 'autoreply.py',      desc: 'AI 自動回覆常見問題 · 用 Haiku',       running: false, uptime: '—',          mem: '0 MB',  calls: 0,    lang: 'py' },
    { name: 'scoreboard.js',     desc: 'Overlay 分數板 · OBS browser source',  running: true,  uptime: '02:41:08', mem: '8 MB',  calls: 412,  lang: 'js' },
    { name: 'ticker.js',         desc: 'Overlay 跑馬燈 · 推播訊息',            running: true,  uptime: '02:41:08', mem: '6 MB',  calls: 89,   lang: 'js' },
    { name: 'whisper-stt.py',    desc: '語音轉字幕 · 送到彈幕 stream',         running: false, uptime: '—',          mem: '0 MB',  calls: 0,    lang: 'py' },
    { name: 'gift-effects.js',   desc: '抖內觸發大字效果 · 金額 → dme',        running: true,  uptime: '01:12:30', mem: '4 MB',  calls: 18,   lang: 'js' },
    { name: 'translate.py',      desc: '即時翻譯彈幕 · ZH ⇌ EN ⇌ JA',          running: false, uptime: '—',          mem: '0 MB',  calls: 0,    lang: 'py' },
    { name: 'clipper.js',        desc: '高讚彈幕自動剪輯 · 送 Notion',         running: true,  uptime: '00:48:12', mem: '12 MB', calls: 7,    lang: 'js' },
  ];

  return (
    <AdminPageShell route="plugins" title="伺服器插件" en="PLUGIN SDK · HOT-RELOAD · SANDBOX" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{
            background: panel, border: `1px solid ${line}`, borderRadius: radius,
            padding: 14, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
          }}>
            <SmallStat label="已載入" en="LOADED" value="7" accent={text} textDim={textDim} />
            <SmallStat label="運行中" en="RUNNING" value="4" accent={hudTokens.lime} textDim={textDim} />
            <SmallStat label="已暫停" en="PAUSED" value="3" accent={hudTokens.amber} textDim={textDim} />
            <SmallStat label="今日呼叫" en="CALLS · 24H" value="526" accent={accent} textDim={textDim} />
          </div>

          <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, overflow: 'hidden' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '32px 1fr 120px 110px 90px 90px 80px',
              padding: '10px 14px', gap: 10, fontFamily: hudTokens.fontMono, fontSize: 10,
              letterSpacing: 1, color: textDim, borderBottom: `1px solid ${line}`,
            }}>
              <span>●</span>
              <span>PLUGIN · 描述</span>
              <span>UPTIME</span>
              <span>MEM</span>
              <span>CALLS</span>
              <span>LANG</span>
              <span style={{ textAlign: 'right' }}>ACTIONS</span>
            </div>
            {plugins.map(p => (
              <div key={p.name} style={{
                display: 'grid', gridTemplateColumns: '32px 1fr 120px 110px 90px 90px 80px',
                padding: '12px 14px', gap: 10, alignItems: 'center',
                borderBottom: `1px solid ${line}`,
              }}>
                <StatusDot color={p.running ? hudTokens.lime : hudTokens.amber} size={7} pulse={p.running} />
                <div>
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 13, color: text }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: textDim, marginTop: 2 }}>{p.desc}</div>
                </div>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: text }}>{p.uptime}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: text }}>{p.mem}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: text }}>{p.calls.toLocaleString()}</span>
                <span style={{
                  fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1,
                  padding: '2px 8px', borderRadius: 3, border: `1px solid ${line}`,
                  color: p.lang === 'py' ? hudTokens.amber : accent, width: 'fit-content',
                }}>{p.lang.toUpperCase()}</span>
                <div style={{ display: 'flex', gap: 4, justifyContent: 'flex-end' }}>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '2px 6px', borderRadius: 3, border: `1px solid ${line}`, color: text }}>{p.running ? '⏸' : '▶'}</span>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '2px 6px', borderRadius: 3, border: `1px solid ${line}`, color: textDim }}>↻</span>
                </div>
              </div>
            ))}
          </div>

          {/* Console */}
          <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, overflow: 'hidden' }}>
            <div style={{ padding: '10px 14px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <StatusDot color={hudTokens.lime} size={6} pulse />
              <span style={{ fontSize: 13, fontWeight: 600 }}>LIVE CONSOLE</span>
              <HudLabel color={textDim}>stdout + stderr · filter by plugin</HudLabel>
              <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>TAIL · 6 LINES</span>
            </div>
            <div style={{ padding: 12, fontFamily: hudTokens.fontMono, fontSize: 11, lineHeight: 1.7, background: raised }}>
              {[
                { t: '14:02:11', lv: 'INFO',  plg: 'scoreboard.js',  msg: 'render tick · team_a=12 team_b=9' },
                { t: '14:02:04', lv: 'INFO',  plg: 'clipper.js',     msg: 'clipped "這段很猛" · 28 likes → Notion' },
                { t: '14:01:58', lv: 'WARN',  plg: 'gift-effects.js', msg: 'queue depth 4 — consider throttling' },
                { t: '14:01:52', lv: 'INFO',  plg: 'ticker.js',      msg: 'pushed "歡迎 @pm_sara 加入"' },
                { t: '14:01:44', lv: 'DEBUG', plg: 'scoreboard.js',  msg: 'hot-reloaded ruleset.yaml' },
                { t: '14:01:30', lv: 'INFO',  plg: 'gift-effects.js', msg: 'triggered mega-glow · NT$500' },
              ].map((l, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 50px 130px 1fr', gap: 10 }}>
                  <span style={{ color: textDim }}>{l.t}</span>
                  <span style={{ color: l.lv === 'WARN' ? hudTokens.amber : l.lv === 'DEBUG' ? textDim : hudTokens.lime, letterSpacing: 1 }}>{l.lv}</span>
                  <span style={{ color: accent }}>{l.plg}</span>
                  <span style={{ color: text }}>{l.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

function SmallStat({ label, en, value, accent, textDim }) {
  return (
    <div>
      <HudLabel color={textDim}>{en}</HudLabel>
      <div style={{ fontFamily: hudTokens.fontDisplay, fontSize: 28, fontWeight: 600, color: accent, lineHeight: 1, marginTop: 4, letterSpacing: -0.5 }}>{value}</div>
      <div style={{ fontSize: 11, color: textDim, marginTop: 4 }}>{label}</div>
    </div>
  );
}

/* ---------- Page 3: Fonts ---------- */

function AdminFontsPage({ theme = 'dark' }) {
  const fonts = [
    { name: 'Noto Sans TC',      foundry: 'Google',   weight: '400–900', size: '1.2 MB', status: 'default', format: 'WOFF2' },
    { name: 'Noto Serif TC',     foundry: 'Google',   weight: '400–900', size: '1.8 MB', status: 'enabled', format: 'WOFF2' },
    { name: 'JetBrains Mono',    foundry: 'JetBrains',weight: '400/700', size: '220 KB', status: 'enabled', format: 'WOFF2' },
    { name: 'Orbitron',          foundry: 'Google',   weight: '500–900', size: '88 KB',  status: 'enabled', format: 'WOFF2' },
    { name: 'Source Han Sans',   foundry: 'Adobe',    weight: '300–900', size: '2.4 MB', status: 'enabled', format: 'OTF' },
    { name: 'Zpix · 最像素',     foundry: 'SolidZORO',weight: '400',     size: '2.1 MB', status: 'enabled', format: 'TTF' },
    { name: 'Cubic 11',          foundry: 'ACh·K',    weight: '400',     size: '580 KB', status: 'disabled',format: 'TTF' },
    { name: 'Klee One',          foundry: 'Google',   weight: '400/600', size: '960 KB', status: 'enabled', format: 'WOFF2' },
  ];

  return (
    <AdminPageShell route="fonts" title="字型管理" en="FONT LIBRARY · 8 FONTS · AUDIENCE-SELECTABLE" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 20 }}>
          <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, overflow: 'hidden' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 90px 90px 80px',
              padding: '10px 16px', gap: 12, fontFamily: hudTokens.fontMono, fontSize: 10,
              letterSpacing: 1, color: textDim, borderBottom: `1px solid ${line}`,
            }}>
              <span>FAMILY</span>
              <span>FOUNDRY</span>
              <span>WEIGHT</span>
              <span>SIZE</span>
              <span>FMT</span>
              <span style={{ textAlign: 'right' }}>STATUS</span>
            </div>
            {fonts.map(f => (
              <div key={f.name} style={{
                display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 90px 90px 80px',
                padding: '14px 16px', gap: 12, alignItems: 'center',
                borderBottom: `1px solid ${line}`,
              }}>
                <div>
                  <div style={{ fontSize: 16, color: text }}>{f.name}</div>
                  <div style={{ fontSize: 11, color: textDim, marginTop: 2, fontFamily: hudTokens.fontMono }}>
                    啊 永 の A a 123 — 樣本
                  </div>
                </div>
                <span style={{ fontSize: 12, color: text }}>{f.foundry}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim }}>{f.weight}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: text }}>{f.size}</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '2px 8px', borderRadius: 3, border: `1px solid ${line}`, color: textDim, width: 'fit-content' }}>{f.format}</span>
                <div style={{ textAlign: 'right' }}>
                  {f.status === 'default' ? (
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '3px 8px', borderRadius: 3, background: accent, color: '#000', fontWeight: 700 }}>預設</span>
                  ) : f.status === 'enabled' ? (
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '3px 8px', borderRadius: 3, border: `1px solid ${hudTokens.lime}`, color: hudTokens.lime }}>ON</span>
                  ) : (
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '3px 8px', borderRadius: 3, border: `1px solid ${line}`, color: textDim }}>OFF</span>
                  )}
                </div>
              </div>
            ))}
            <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 1, cursor: 'pointer' }}>+ 上傳字型檔  ·  WOFF2 / OTF / TTF</span>
              <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>總計 9.4 MB</span>
            </div>
          </div>

          {/* Preview panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
              <HudLabel color={textDim}>PREVIEW · Noto Sans TC</HudLabel>
              <div style={{ marginTop: 12, fontSize: 36, fontWeight: 700, lineHeight: 1.2 }}>彈幕即時互動</div>
              <div style={{ marginTop: 6, fontSize: 20, color: textDim }}>The quick brown 狐 jumps over 狸</div>
              <div style={{
                marginTop: 12, padding: 10, background: raised, borderRadius: 4,
                fontSize: 13, color: text,
              }}>
                <div>永 和 安 康 繁 體 中 文 測 試</div>
                <div style={{ marginTop: 6, fontSize: 11, color: textDim, fontFamily: hudTokens.fontMono }}>
                  U+6C38 U+548C U+5B89 U+5EB7 · 12 家族 · 1,284 字符
                </div>
              </div>
            </div>

            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
              <HudLabel color={textDim}>SUBSETTING</HudLabel>
              <div style={{ fontSize: 13, marginTop: 10 }}>自動產生子集，只載入實際用到的字</div>
              <div style={{
                marginTop: 12, height: 8, borderRadius: 4, background: raised,
                overflow: 'hidden',
              }}>
                <div style={{ width: '38%', height: '100%', background: accent }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
                <span>ORIG · 9.4 MB</span>
                <span style={{ color: accent }}>SUBSET · 3.6 MB · 62% 節省</span>
              </div>
            </div>

            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 16 }}>
              <HudLabel color={textDim}>CDN DELIVERY</HudLabel>
              <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <MiniStat label="HIT RATE" value="98.4%" color={hudTokens.lime} textDim={textDim} />
                <MiniStat label="P95 TTFB" value="42ms" color={accent} textDim={textDim} />
                <MiniStat label="REQ/24H" value="18.2K" color={text} textDim={textDim} />
                <MiniStat label="EDGE" value="TPE-01" color={text} textDim={textDim} />
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

function MiniStat({ label, value, color, textDim }) {
  return (
    <div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, color: textDim }}>{label}</div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 18, fontWeight: 600, color, marginTop: 2 }}>{value}</div>
    </div>
  );
}

/* ---------- Page 4: System & Fingerprint ---------- */

function AdminSystemPage({ theme = 'dark' }) {
  return (
    <AdminPageShell route="system" title="系統 & 指紋" en="SYSTEM · FINGERPRINT · RATE LIMITS" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16 }}>
          {/* Server block */}
          <div style={{ gridColumn: 'span 7', background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <StatusDot color={hudTokens.lime} size={7} pulse />
              <span style={{ fontSize: 14, fontWeight: 600 }}>Danmu Server</span>
              <HudLabel color={textDim}>v4.8.7 · go1.22 · linux/amd64</HudLabel>
              <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.lime, letterSpacing: 1 }}>UPTIME · 14d 02h</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              <KV k="HTTP PORT" v=":4000" text={text} textDim={textDim} />
              <KV k="WS PORT" v=":4001" text={text} textDim={textDim} />
              <KV k="BIND" v="0.0.0.0" text={text} textDim={textDim} />
              <KV k="CPU USAGE" v="12%" text={text} textDim={textDim} />
              <KV k="MEM RSS" v="218 MB / 2 GB" text={text} textDim={textDim} />
              <KV k="GOROUTINES" v="142" text={text} textDim={textDim} />
              <KV k="WS CLIENTS" v="247 peak 312" text={text} textDim={textDim} />
              <KV k="MSG RATE" v="4.2/s avg · 86/s peak" text={text} textDim={textDim} />
              <KV k="DB" v="sqlite · 42 MB" text={text} textDim={textDim} />
            </div>
            <div style={{ marginTop: 18, padding: 12, background: raised, borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 11, color: text }}>
              <div style={{ color: textDim, fontSize: 10, letterSpacing: 1, marginBottom: 6 }}>PUBLIC URL</div>
              <div style={{ color: accent }}>https://138.2.59.206:4000/</div>
              <div style={{ marginTop: 4, color: textDim, fontSize: 10 }}>QR · 觀眾掃碼即加入 · 可點擊複製</div>
            </div>
          </div>

          {/* Rate limits */}
          <div style={{ gridColumn: 'span 5', background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 18 }}>
            <CardHeader title="速率限制" en="RATE LIMITS · ANTI-SPAM" textDim={textDim} />
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { label: '每用戶 · 每分鐘', value: 30, max: 60, unit: '則' },
                { label: '每用戶 · 相同訊息', value: 3,  max: 10, unit: '次/10min' },
                { label: '全房間 · 每秒', value: 80, max: 200, unit: '則' },
                { label: '字元上限', value: 140, max: 500, unit: '字' },
              ].map(r => (
                <div key={r.label}>
                  <div style={{ display: 'flex', fontSize: 12 }}>
                    <span style={{ color: text }}>{r.label}</span>
                    <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, color: accent, fontWeight: 600 }}>{r.value} {r.unit}</span>
                  </div>
                  <div style={{ marginTop: 6, height: 4, borderRadius: 2, background: raised, overflow: 'hidden' }}>
                    <div style={{ width: `${(r.value / r.max) * 100}%`, height: '100%', background: accent, opacity: 0.7 }} />
                  </div>
                  <div style={{ marginTop: 2, fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5 }}>UP TO {r.max}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Fingerprint */}
          <div style={{ gridColumn: 'span 7', background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 18 }}>
            <CardHeader title="觀眾指紋" en="FINGERPRINT · DEDUPE · NO LOGIN" textDim={textDim} right={
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>247 UNIQUE · 2 FLAGGED</span>
            } />
            <div style={{ marginTop: 14, fontFamily: hudTokens.fontMono, fontSize: 11 }}>
              <div style={{
                display: 'grid', gridTemplateColumns: '120px 1fr 90px 70px 80px 60px',
                padding: '6px 10px', color: textDim, fontSize: 9, letterSpacing: 1, borderBottom: `1px solid ${line}`,
              }}>
                <span>NICK · FP</span><span>UA · IP</span><span>MSGS</span><span>RATE</span><span>SEEN</span><span style={{ textAlign: 'right' }}>STATE</span>
              </div>
              {[
                // #18: 顯示「暱稱 + fp:8hex」對應; 未命名時 fp 直接當顯示名
                { nick: '小明',     h: '7a4b2e1c', ua: 'Safari iOS · 100.64.1.42', msg: 18, rate: '0.8/m', seen: '00:12', state: 'OK',      col: text },
                { nick: 'roy',     h: 'c0918af3', ua: 'Chrome mac · 100.64.1.88', msg: 142, rate: '6.1/m', seen: '00:04', state: 'LIMITED',col: hudTokens.amber },
                { nick: '',        h: '21de9b0a', ua: 'Edge win · 100.64.2.17',   msg: 4,   rate: '0.2/m', seen: '00:22', state: 'OK',      col: text },
                { nick: 'troll1',  h: '88bc44f2', ua: 'Safari iOS · 100.64.1.59', msg: 287, rate: '14.2/m',seen: '00:02', state: 'BLOCKED', col: hudTokens.crimson },
                { nick: '',        h: '4e3a1100', ua: 'Chrome and · 100.64.3.04', msg: 9,   rate: '0.4/m', seen: '00:18', state: 'OK',      col: text },
                { nick: '阿凱',    h: '55bb77cd', ua: 'Firefox lin · 100.64.1.71', msg: 26, rate: '1.1/m', seen: '00:15', state: 'OK',      col: text },
              ].map((f, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '120px 1fr 90px 70px 80px 60px',
                  padding: '8px 10px', gap: 8, alignItems: 'center',
                  borderBottom: `1px solid ${line}`,
                }}>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
                    {f.nick ? (
                      <>
                        <span style={{ color: text, fontFamily: hudTokens.fontSans, fontWeight: 600, fontSize: 11, lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.nick}</span>
                        <span style={{ color: textDim, fontSize: 9, letterSpacing: 0.3 }}>fp:{f.h}</span>
                      </>
                    ) : (
                      <>
                        <span style={{ color: accent, fontWeight: 600, fontSize: 11, letterSpacing: 0.3 }}>fp:{f.h}</span>
                        <span style={{ color: textDim, fontFamily: hudTokens.fontSans, fontSize: 9, opacity: 0.7 }}>未命名</span>
                      </>
                    )}
                  </span>
                  <span style={{ color: text }}>{f.ua}</span>
                  <span style={{ color: text }}>{f.msg}</span>
                  <span style={{ color: textDim }}>{f.rate}</span>
                  <span style={{ color: textDim }}>{f.seen}</span>
                  <span style={{ color: f.col, textAlign: 'right', letterSpacing: 1 }}>{f.state}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backup / export */}
          <div style={{ gridColumn: 'span 5', background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <CardHeader title="備份 & 匯出" en="BACKUP · EXPORT" textDim={textDim} />
            <div style={{ padding: 12, background: raised, borderRadius: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <StatusDot color={hudTokens.lime} size={6} pulse />
                <span style={{ fontSize: 12, fontWeight: 600 }}>自動備份 · 每 6 小時</span>
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>下次 02:14:22</span>
              </div>
              <div style={{ marginTop: 8, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
                最近 · 08:00 · 41 MB · sqlite + .dme + plugins
              </div>
            </div>
            <div>
              <HudLabel color={textDim}>匯出格式</HudLabel>
              <div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                {['JSON · 完整', 'CSV · 訊息', 'MD · 摘要', 'ZIP · 全站'].map((k, i) => (
                  <span key={k} style={{
                    padding: '8px 10px', borderRadius: 4, fontSize: 12,
                    border: `1px solid ${i === 0 ? accent : line}`,
                    color: i === 0 ? accent : text, cursor: 'pointer', textAlign: 'center',
                    background: i === 0 ? hudTokens.cyanSoft : 'transparent',
                  }}>{k}</span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 'auto', padding: 12, border: `1px dashed ${hudTokens.crimson}`, borderRadius: 4 }}>
              <HudLabel color={hudTokens.crimson}>DANGER ZONE</HudLabel>
              <div style={{ fontSize: 11, color: textDim, marginTop: 4 }}>結束 Session 會清除即時訊息、保留日誌</div>
              <button style={{
                marginTop: 10, width: '100%', padding: '8px', borderRadius: 4,
                border: `1px solid ${hudTokens.crimson}`, background: 'transparent',
                color: hudTokens.crimson, fontFamily: hudTokens.fontMono, fontSize: 11,
                letterSpacing: 1.5, fontWeight: 700,
              }}>END SESSION</button>
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

function AdminModerationPage({ theme = 'dark' }) {
  const rules = [
    { pat: '/政治|選舉/', type: 'REGEX',   action: 'MASK',    hits: 42,  added: '3d ago', by: 'admin' },
    { pat: 'spam.*buy',    type: 'REGEX',   action: 'BLOCK',   hits: 18,  added: '1w ago', by: 'admin' },
    { pat: '幹',           type: 'WORD',    action: 'MASK',    hits: 127, added: '14d ago', by: 'builtin' },
    { pat: '垃圾',         type: 'WORD',    action: 'MASK',    hits: 24,  added: '14d ago', by: 'builtin' },
    { pat: 'https://t\\.me', type: 'REGEX', action: 'BLOCK',   hits: 8,   added: '2d ago', by: 'admin' },
    { pat: '加 line',      type: 'WORD',    action: 'BLOCK',   hits: 62,  added: '1w ago', by: 'admin' },
    { pat: '詐騙|博弈',    type: 'REGEX',   action: 'REVIEW',  hits: 14,  added: '5d ago', by: 'admin' },
  ];

  return (
    <AdminPageShell route="moderation" title="敏感字 & 黑名單" en="MODERATION · BUILT-IN · NOT A PLUGIN" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Overview */}
          <div style={{
            background: panel, border: `1px solid ${line}`, borderRadius: radius,
            padding: 14, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20,
          }}>
            <SmallStat label="規則數" en="RULES" value="847" accent={text} textDim={textDim} />
            <SmallStat label="今日遮罩" en="MASKED · 24H" value="295" accent={hudTokens.amber} textDim={textDim} />
            <SmallStat label="今日封鎖" en="BLOCKED · 24H" value="38" accent={hudTokens.crimson} textDim={textDim} />
            <SmallStat label="待審核" en="REVIEW QUEUE" value="12" accent={accent} textDim={textDim} />
            <SmallStat label="封鎖用戶" en="BANNED" value="6" accent={hudTokens.crimson} textDim={textDim} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
            {/* Rules list */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, overflow: 'hidden' }}>
              <div style={{ padding: '12px 16px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>規則庫</span>
                <HudLabel color={textDim}>RULESET · ORDER MATTERS</HudLabel>
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 1, cursor: 'pointer' }}>
                  + 新增規則 · ⤓ 匯入 · ⤒ 匯出
                </span>
              </div>
              <div style={{ padding: '8px 16px', display: 'flex', gap: 6, borderBottom: `1px solid ${line}` }}>
                {['全部 847', 'WORD 649', 'REGEX 198'].map((f, i) => (
                  <span key={f} style={{
                    padding: '4px 10px', borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1,
                    border: `1px solid ${i === 0 ? accent : line}`,
                    color: i === 0 ? accent : textDim,
                    background: i === 0 ? hudTokens.cyanSoft : 'transparent',
                  }}>{f}</span>
                ))}
              </div>
              <div style={{
                display: 'grid', gridTemplateColumns: '1.6fr 70px 80px 60px 80px 40px',
                padding: '8px 16px', gap: 10, fontFamily: hudTokens.fontMono, fontSize: 9,
                letterSpacing: 1, color: textDim, borderBottom: `1px solid ${line}`,
              }}>
                <span>PATTERN</span><span>TYPE</span><span>ACTION</span><span>HITS</span><span>ADDED</span><span></span>
              </div>
              {rules.map((r, i) => {
                const acol = r.action === 'BLOCK' ? hudTokens.crimson : r.action === 'MASK' ? hudTokens.amber : accent;
                const tcol = r.type === 'REGEX' ? accent : text;
                return (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '1.6fr 70px 80px 60px 80px 40px',
                    padding: '10px 16px', gap: 10, alignItems: 'center',
                    borderBottom: i === rules.length - 1 ? 'none' : `1px solid ${line}`,
                  }}>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: text }}>{r.pat}</span>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '2px 6px', borderRadius: 3, border: `1px solid ${tcol}`, color: tcol, width: 'fit-content' }}>{r.type}</span>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, padding: '2px 6px', borderRadius: 3, background: acol, color: '#000', fontWeight: 700, width: 'fit-content' }}>{r.action}</span>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: text }}>{r.hits}</span>
                    <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim }}>{r.added}</span>
                    <span style={{ color: textDim, cursor: 'pointer', fontSize: 14, textAlign: 'right' }}>⋯</span>
                  </div>
                );
              })}
            </div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Banned users */}
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, overflow: 'hidden' }}>
                <div style={{ padding: '12px 14px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>黑名單 · BANNED</span>
                  <HudLabel color={textDim}>IP · FINGERPRINT · NICK</HudLabel>
                </div>
                {[
                  { who: 'fp:88bc44f2', why: 'spam flood · 287/m', when: '00:02' },
                  { who: '100.64.2.91', why: '手動封鎖',         when: '01:18' },
                  { who: '@troll_ikr',  why: '連續長廟訊息',     when: '02:44' },
                  { who: 'fp:a0115c19', why: '只丟廣告鏈結',      when: '3d ago' },
                  { who: '203.0.113.0/24', why: '匿名代理段',         when: '1w ago' },
                ].map((b, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px',
                    borderBottom: `1px solid ${line}`, fontFamily: hudTokens.fontMono, fontSize: 11,
                  }}>
                    <span style={{ color: hudTokens.crimson }}>⊘</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: text }}>{b.who}</div>
                      <div style={{ color: textDim, fontSize: 9, marginTop: 2, letterSpacing: 0.5 }}>{b.why}</div>
                    </div>
                    <span style={{ color: textDim, fontSize: 9, letterSpacing: 1 }}>{b.when}</span>
                    <span style={{ color: accent, cursor: 'pointer', fontSize: 10, letterSpacing: 1 }}>UNBAN</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live moderation log */}
          <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, overflow: 'hidden' }}>
            <div style={{ padding: '10px 14px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <StatusDot color={hudTokens.lime} size={6} pulse />
              <span style={{ fontSize: 13, fontWeight: 600 }}>即時審核日誌</span>
              <HudLabel color={textDim}>LAST 6 EVENTS</HudLabel>
              <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>AUTO-SCROLL ▶</span>
            </div>
            <div style={{ padding: 12, fontFamily: hudTokens.fontMono, fontSize: 11, lineHeight: 1.7, background: raised }}>
              {[
                { t: '14:02:11', act: 'MASK',   col: hudTokens.amber,   msg: '「這根本是 **」— 規則 #127（WORD · 幹）· @anon_82' },
                { t: '14:02:08', act: 'PASS',   col: hudTokens.lime,    msg: '正常訊息 · @dev_kun' },
                { t: '14:01:58', act: 'BLOCK',  col: hudTokens.crimson, msg: '「加 line ********」— 規則 #412（WORD · 加 line）· @troll_ikr' },
                { t: '14:01:52', act: 'REVIEW', col: accent,           msg: '「博弈外圍」— 規則 #319（REGEX · 詐騙|博弈）· @mei' },
                { t: '14:01:44', act: 'PASS',   col: hudTokens.lime,    msg: '正常訊息 · @alice' },
                { t: '14:01:30', act: 'MASK',   col: hudTokens.amber,   msg: '「垃圾 節目」— 規則 #84（WORD · 垃圾）· @pm_sara' },
              ].map((l, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 70px 1fr', gap: 10 }}>
                  <span style={{ color: textDim }}>{l.t}</span>
                  <span style={{ color: l.col, letterSpacing: 1, fontWeight: 700 }}>{l.act}</span>
                  <span style={{ color: text }}>{l.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

Object.assign(window, { AdminEffectsPage, AdminPluginsPage, AdminFontsPage, AdminSystemPage, AdminModerationPage, AdminPageShell });

function KV({ k, v, text, textDim }) {
  return (
    <div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, color: textDim }}>{k}</div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 13, color: text, marginTop: 2 }}>{v}</div>
    </div>
  );
}

function TelemBar({ label, value, bars, text, textDim, accent }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
      <span style={{ width: 30, color: textDim, fontSize: 9, letterSpacing: 1 }}>{label}</span>
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 2, height: 14 }}>
        {bars.map((b, i) => (
          <div key={i} style={{
            flex: 1, height: `${(b / 10) * 100}%`,
            background: i === bars.length - 1 ? accent : (i >= bars.length - 2 ? `${accent}aa` : `${accent}44`),
            borderRadius: 1, minHeight: 2,
          }} />
        ))}
      </div>
      <span style={{ color: text, fontSize: 10, width: 50, textAlign: 'right' }}>{value}</span>
    </div>
  );
}
