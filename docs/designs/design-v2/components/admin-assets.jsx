// Admin · 素材庫 Assets Library
// Unified asset dashboard — single upload entry point for .dme effects,
// fonts, logos, theme pack assets, sounds. Doesn't replace per-page editors;
// surfaces them. Click an asset → jump to its source page (Effects / Fonts /
// Theme Packs / Viewer Theme).

function AdminAssetsPage({ theme = 'dark' }) {
  const [filter, setFilter] = React.useState('all');
  const [dropOver, setDropOver] = React.useState(false);
  const [view, setView] = React.useState('grid'); // grid | list

  // Mixed asset bank — kind drives icon + accent + jump-to page
  const assets = [
    { id: 'a1',  kind: 'dme',   name: 'glow-neon.dme',         size: '12 KB',   author: 'built-in', uses: 892,  ago: '2h',  flag: 'live' },
    { id: 'a2',  kind: 'dme',   name: 'fire-trail.dme',        size: '34 KB',   author: '@roy',     uses: 12,   ago: '3d',  flag: 'beta' },
    { id: 'a3',  kind: 'dme',   name: 'rainbow-cycle.dme',     size: '8 KB',    author: 'built-in', uses: 567,  ago: '1w',  flag: '' },
    { id: 'f1',  kind: 'font',  name: 'NotoSansTC-VF.woff2',   size: '412 KB',  author: 'Google',   uses: 1820, ago: '5d',  flag: 'subset' },
    { id: 'f2',  kind: 'font',  name: 'JetBrainsMono.woff2',   size: '88 KB',   author: 'JB',       uses: 412,  ago: '5d',  flag: '' },
    { id: 'f3',  kind: 'font',  name: 'WenQuanWeiMi.woff2',    size: '1.2 MB',  author: 'community', uses: 78,  ago: '12d', flag: '' },
    { id: 'l1',  kind: 'logo',  name: 'company-logo.png',      size: '24 KB',   author: 'admin',    uses: 1,    ago: '4d',  flag: 'viewer' },
    { id: 'l2',  kind: 'logo',  name: 'event-banner.png',      size: '180 KB',  author: 'admin',    uses: 1,    ago: '2d',  flag: 'viewer' },
    { id: 't1',  kind: 'theme', name: 'cyberpunk-2099.json',   size: '4 KB',    author: '@mei',     uses: 1,    ago: '1w',  flag: 'pack' },
    { id: 't2',  kind: 'theme', name: 'minimal-mono.json',     size: '2 KB',    author: 'built-in', uses: 1,    ago: '2w',  flag: '' },
    { id: 's1',  kind: 'sound', name: 'fire-whoosh.mp3',       size: '48 KB',   author: '@roy',     uses: 142,  ago: '6d',  flag: '' },
    { id: 's2',  kind: 'sound', name: 'poll-tick.mp3',         size: '6 KB',    author: 'built-in', uses: 88,   ago: '2w',  flag: '' },
  ];

  const counts = {
    all: assets.length,
    dme: assets.filter(a => a.kind === 'dme').length,
    font: assets.filter(a => a.kind === 'font').length,
    logo: assets.filter(a => a.kind === 'logo').length,
    theme: assets.filter(a => a.kind === 'theme').length,
    sound: assets.filter(a => a.kind === 'sound').length,
  };
  const visible = filter === 'all' ? assets : assets.filter(a => a.kind === filter);

  return (
    <AdminPageShell route="assets" title="素材庫" en="ASSETS LIBRARY · UNIFIED UPLOAD · 12 ASSETS · 2.0 MB" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>

          {/* CENTER */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Top stat strip */}
            <div style={{
              background: panel, border: `1px solid ${line}`, borderRadius: radius,
              padding: 14, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
            }}>
              <AStat label="總素材" en="ASSETS"        value="12"     accent={text} textDim={textDim} />
              <AStat label="容量"   en="STORAGE"       value="2.0 MB" accent={accent} textDim={textDim} sub="/ 100 MB · 2%" />
              <AStat label="24h 上傳" en="UPLOADS · 24H" value="3"    accent={hudTokens.lime} textDim={textDim} />
              <AStat label="待清理" en="ORPHANED"      value="1"      accent={hudTokens.amber} textDim={textDim} sub="未被引用 · 12 KB" />
            </div>

            {/* Drop zone strip — universal upload */}
            <div
              onDragOver={(e) => { e.preventDefault(); setDropOver(true); }}
              onDragLeave={() => setDropOver(false)}
              onDrop={(e) => { e.preventDefault(); setDropOver(false); }}
              style={{
                position: 'relative', padding: '14px 16px', borderRadius: radius,
                border: `1.5px dashed ${dropOver ? accent : line}`,
                background: dropOver ? hudTokens.cyanSoft : raised,
                display: 'flex', alignItems: 'center', gap: 14,
                transition: 'background 150ms, border-color 150ms', cursor: 'pointer',
              }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 4, flexShrink: 0,
                border: `1px solid ${dropOver ? accent : line}`,
                background: dropOver ? `${hudTokens.cyan}22` : panel,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, color: dropOver ? accent : textDim,
                transition: 'all 150ms', transform: dropOver ? 'scale(1.08)' : 'scale(1)',
              }}>{dropOver ? '↓' : '▦'}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1, color: dropOver ? accent : text }}>
                  {dropOver ? '放開以上傳 · 自動依副檔名分類' : '拖入任意素材 · 或點此瀏覽 · 系統自動分類到對應頁面'}
                </div>
                <div style={{ marginTop: 2, fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 0.5, color: textDim }}>
                  支援 .dme · .woff2/.ttf · .png/.jpg/.svg · .json · .mp3/.wav · 單檔最大 4 MB
                </div>
              </div>
              <span style={{
                padding: '6px 11px', borderRadius: 3,
                border: `1px solid ${accent}`, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1,
                color: accent, background: hudTokens.cyanSoft,
              }}>+ 瀏覽檔案</span>
            </div>

            {/* Toolbar — kind filters + view toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <FilterChip active={filter === 'all'}   onClick={() => setFilter('all')}   label="全部"   en={`ALL · ${counts.all}`}   accent={accent} line={line} textDim={textDim} />
                <FilterChip active={filter === 'dme'}   onClick={() => setFilter('dme')}   label="效果"   en={`DME · ${counts.dme}`}   accent={accent} line={line} textDim={textDim} />
                <FilterChip active={filter === 'font'}  onClick={() => setFilter('font')}  label="字型"   en={`FONTS · ${counts.font}`} accent={accent} line={line} textDim={textDim} />
                <FilterChip active={filter === 'logo'}  onClick={() => setFilter('logo')}  label="圖片"   en={`IMAGES · ${counts.logo}`} accent={accent} line={line} textDim={textDim} />
                <FilterChip active={filter === 'theme'} onClick={() => setFilter('theme')} label="主題包" en={`THEMES · ${counts.theme}`} accent={accent} line={line} textDim={textDim} />
                <FilterChip active={filter === 'sound'} onClick={() => setFilter('sound')} label="音效"   en={`SOUNDS · ${counts.sound}`} accent={accent} line={line} textDim={textDim} />
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 6, alignItems: 'center' }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>
                  排序 · 最近 ▾
                </span>
                <span style={{ width: 1, height: 14, background: line }} />
                <ViewToggle active={view === 'grid'} onClick={() => setView('grid')} label="▦" line={line} accent={accent} textDim={textDim} />
                <ViewToggle active={view === 'list'} onClick={() => setView('list')} label="≡" line={line} accent={accent} textDim={textDim} />
              </div>
            </div>

            {/* Grid / List */}
            {view === 'grid' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {visible.map(a => <AssetCard key={a.id} asset={a} panel={panel} raised={raised} line={line} text={text} textDim={textDim} accent={accent} radius={radius} />)}
              </div>
            ) : (
              <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, overflow: 'hidden' }}>
                <div style={{ padding: '8px 14px', borderBottom: `1px solid ${line}`, display: 'grid', gridTemplateColumns: '40px 1.6fr 80px 80px 90px 80px 60px', gap: 10, alignItems: 'center' }}>
                  {['', '名稱 · NAME', '類型 · KIND', '大小 · SIZE', '使用 · USES', '更新 · AGO', ''].map((h, i) => (
                    <span key={i} style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, color: textDim }}>{h}</span>
                  ))}
                </div>
                {visible.map((a, i) => <AssetRow key={a.id} asset={a} odd={i % 2 === 1} raised={raised} line={line} text={text} textDim={textDim} accent={accent} />)}
              </div>
            )}
          </div>

          {/* RIGHT RAIL */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Storage breakdown */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
              <CardHeader title="容量分布" en="STORAGE BREAKDOWN" textDim={textDim} />
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <StorageBar label="字型"  pct={82} size="1.6 MB" color={hudTokens.cyan} line={line} text={text} textDim={textDim} />
                <StorageBar label="圖片"  pct={11} size="204 KB" color={hudTokens.lime} line={line} text={text} textDim={textDim} />
                <StorageBar label="音效"  pct={3}  size="54 KB"  color={hudTokens.magenta} line={line} text={text} textDim={textDim} />
                <StorageBar label="效果"  pct={3}  size="54 KB"  color={hudTokens.amber} line={line} text={text} textDim={textDim} />
                <StorageBar label="主題"  pct={1}  size="6 KB"   color={textDim} line={line} text={text} textDim={textDim} />
              </div>
              <div style={{ marginTop: 14, padding: 10, background: raised, borderRadius: 4, border: `1px solid ${line}` }}>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, color: textDim }}>TOTAL · 2.0 / 100 MB</div>
                <div style={{ marginTop: 6, height: 6, background: panel, borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: '2%', height: '100%', background: accent, boxShadow: `0 0 8px ${accent}` }} />
                </div>
              </div>
            </div>

            {/* Recent uploads */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
              <CardHeader title="最近上傳" en="RECENT · 24H" textDim={textDim} />
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column' }}>
                <RecentRow name="glow-neon.dme"     when="2h ago"  by="built-in" accent={accent} textDim={textDim} text={text} line={line} />
                <RecentRow name="event-banner.png"  when="1d ago"  by="admin"    accent={accent} textDim={textDim} text={text} line={line} />
                <RecentRow name="fire-trail.dme"    when="3d ago"  by="@roy"     accent={accent} textDim={textDim} text={text} line={line} last />
              </div>
            </div>

            {/* Cleanup */}
            <div style={{
              background: 'rgba(245,158,11,0.06)', border: `1px solid ${hudTokens.amber}55`,
              borderRadius: radius, padding: 14,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <StatusDot color={hudTokens.amber} size={6} pulse />
                <HudLabel color={hudTokens.amber}>ORPHANED · 1 ASSET</HudLabel>
              </div>
              <div style={{ fontSize: 12, color: text, lineHeight: 1.5 }}>
                <span style={{ fontFamily: hudTokens.fontMono, color: textDim }}>old-banner.png</span> 已 14 天未被任何頁面引用 · 12 KB
              </div>
              <div style={{ marginTop: 10, display: 'flex', gap: 6 }}>
                <button style={btn(hudTokens.amber, hudTokens.amber, 'rgba(245,158,11,0.12)')}>立即清理</button>
                <button style={btn(line, textDim, 'transparent')}>保留 30 天</button>
              </div>
            </div>

            {/* Source pages legend */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
              <CardHeader title="來源頁面" en="SOURCE PAGES" textDim={textDim} />
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <SourceLink icon="✦" label="效果庫 .dme"     hint=".dme files"             route="effects"   accent={accent} line={line} text={text} textDim={textDim} />
                <SourceLink icon="⌂" label="字型管理"        hint=".woff2 / .ttf"          route="fonts"     accent={accent} line={line} text={text} textDim={textDim} />
                <SourceLink icon="❖" label="風格主題包"      hint=".json packs"            route="themes"    accent={accent} line={line} text={text} textDim={textDim} />
                <SourceLink icon="◐" label="觀眾頁主題"      hint=".png logos / images"    route="viewer-theme" accent={accent} line={line} text={text} textDim={textDim} />
              </div>
              <div style={{ marginTop: 10, fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 0.5, color: textDim, lineHeight: 1.6 }}>
                點素材卡會跳到對應頁面編輯 · 此處只負責上傳與總覽。
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

/* ---------- Sub-components ---------- */

function AStat({ label, en, value, accent, textDim, sub }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontSize: 11, color: textDim }}>{label}</span>
        <HudLabel color={textDim}>{en}</HudLabel>
      </div>
      <div style={{
        marginTop: 4, fontFamily: hudTokens.fontDisplay, fontSize: 26, fontWeight: 600,
        color: accent, letterSpacing: -0.5,
      }}>{value}</div>
      {sub && (
        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 0.5, color: textDim, marginTop: 2 }}>
          {sub}
        </div>
      )}
    </div>
  );
}

function FilterChip({ active, onClick, label, en, accent, line, textDim }) {
  return (
    <span onClick={onClick} style={{
      padding: '5px 12px', borderRadius: 4, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
      border: `1px solid ${active ? accent : line}`,
      background: active ? hudTokens.cyanSoft : 'transparent',
      transition: 'all 120ms',
    }}>
      <span style={{ fontSize: 11, color: active ? accent : textDim }}>{label}</span>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, color: active ? accent : textDim, opacity: active ? 1 : 0.7 }}>{en}</span>
    </span>
  );
}

function ViewToggle({ active, onClick, label, line, accent, textDim }) {
  return (
    <span onClick={onClick} style={{
      width: 24, height: 24, borderRadius: 3, cursor: 'pointer',
      border: `1px solid ${active ? accent : line}`,
      background: active ? hudTokens.cyanSoft : 'transparent',
      color: active ? accent : textDim,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 12,
    }}>{label}</span>
  );
}

function AssetCard({ asset, panel, raised, line, text, textDim, accent, radius }) {
  const meta = kindMeta(asset.kind);
  return (
    <div style={{
      background: panel, border: `1px solid ${line}`, borderRadius: radius,
      padding: 10, display: 'flex', flexDirection: 'column', gap: 8, cursor: 'pointer',
      transition: 'border-color 120ms',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{
          width: 16, height: 16, borderRadius: 2, background: meta.color, color: '#000',
          fontFamily: hudTokens.fontMono, fontSize: 9, fontWeight: 700, letterSpacing: 0.5,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{meta.tag}</span>
        <HudLabel color={textDim}>{meta.label}</HudLabel>
        {asset.flag && (
          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 8, letterSpacing: 1, color: meta.color }}>
            {asset.flag.toUpperCase()}
          </span>
        )}
      </div>
      {/* Preview chip */}
      <div style={{
        height: 56, borderRadius: 4, background: raised, border: `1px solid ${line}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <AssetPreview asset={asset} accent={accent} text={text} textDim={textDim} />
      </div>
      <div>
        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {asset.name}
        </div>
        <div style={{ marginTop: 2, fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 0.5, color: textDim }}>
          {asset.size} · {asset.author} · {asset.ago}
        </div>
      </div>
    </div>
  );
}

function AssetPreview({ asset, accent, text, textDim }) {
  if (asset.kind === 'dme') {
    return (
      <span style={{
        fontFamily: hudTokens.fontDisplay, fontSize: 18, fontWeight: 700,
        color: accent, textShadow: `0 0 12px ${accent}`, letterSpacing: 1,
      }}>ABC</span>
    );
  }
  if (asset.kind === 'font') {
    return (
      <span style={{ fontSize: 22, color: text, letterSpacing: 1 }}>Aa 字</span>
    );
  }
  if (asset.kind === 'logo') {
    return (
      <div style={{
        width: 40, height: 24, background: 'linear-gradient(135deg, #475569, #1e293b)',
        borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: hudTokens.fontMono, fontSize: 8, color: textDim, letterSpacing: 1,
      }}>IMG</div>
    );
  }
  if (asset.kind === 'theme') {
    return (
      <div style={{ display: 'flex', gap: 3 }}>
        {['#06B6D4', '#F472B6', '#A78BFA', '#FACC15'].map(c => (
          <div key={c} style={{ width: 8, height: 24, background: c, borderRadius: 1 }} />
        ))}
      </div>
    );
  }
  if (asset.kind === 'sound') {
    return (
      <svg width="60" height="20" viewBox="0 0 60 20">
        {Array.from({ length: 24 }).map((_, i) => {
          const h = 4 + Math.abs(Math.sin(i * 0.7) * 8) + ((i * 13) % 5);
          return <rect key={i} x={i * 2.5} y={(20 - h) / 2} width="1.5" height={h} fill={accent} opacity={0.7} />;
        })}
      </svg>
    );
  }
  return null;
}

function AssetRow({ asset, odd, raised, line, text, textDim, accent }) {
  const meta = kindMeta(asset.kind);
  return (
    <div style={{
      padding: '10px 14px', borderTop: `1px solid ${line}`,
      background: odd ? raised : 'transparent',
      display: 'grid', gridTemplateColumns: '40px 1.6fr 80px 80px 90px 80px 60px', gap: 10, alignItems: 'center',
      cursor: 'pointer',
    }}>
      <span style={{
        width: 22, height: 22, borderRadius: 3, background: meta.color, color: '#000',
        fontFamily: hudTokens.fontMono, fontSize: 9, fontWeight: 700, letterSpacing: 0.5,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{meta.tag}</span>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{asset.name}</span>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>{meta.label}</span>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: text }}>{asset.size}</span>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim }}>{asset.uses.toLocaleString()}</span>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim }}>{asset.ago}</span>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 1, textAlign: 'right' }}>編輯 →</span>
    </div>
  );
}

function StorageBar({ label, pct, size, color, line, text, textDim }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontSize: 11, color: text }}>{label}</span>
        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 0.5, color: textDim }}>{size}</span>
        <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: text }}>{pct}%</span>
      </div>
      <div style={{ marginTop: 4, height: 4, background: line, borderRadius: 2, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: color, transition: 'width 200ms' }} />
      </div>
    </div>
  );
}

function RecentRow({ name, when, by, accent, textDim, text, line, last }) {
  return (
    <div style={{
      padding: '8px 0', borderBottom: last ? 'none' : `1px solid ${line}`,
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent, flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</div>
        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 0.5, color: textDim, marginTop: 1 }}>{by} · {when}</div>
      </div>
    </div>
  );
}

function SourceLink({ icon, label, hint, route, accent, line, text, textDim }) {
  return (
    <div style={{
      padding: '8px 10px', borderRadius: 3, border: `1px solid ${line}`,
      display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
    }}>
      <span style={{ width: 20, color: accent, fontSize: 12 }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, color: text }}>{label}</div>
        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 0.5, color: textDim, marginTop: 1 }}>{hint}</div>
      </div>
      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim }}>→</span>
    </div>
  );
}

function kindMeta(kind) {
  switch (kind) {
    case 'dme':   return { tag: 'D', label: 'EFFECT', color: hudTokens.cyan };
    case 'font':  return { tag: 'F', label: 'FONT',   color: hudTokens.lime };
    case 'logo':  return { tag: 'I', label: 'IMAGE',  color: hudTokens.magenta };
    case 'theme': return { tag: 'T', label: 'THEME',  color: hudTokens.amber };
    case 'sound': return { tag: 'S', label: 'SOUND',  color: '#A78BFA' };
    default:      return { tag: '?', label: 'OTHER',  color: '#64748B' };
  }
}

function btn(border, color, bg) {
  return {
    padding: '6px 11px', borderRadius: 3, cursor: 'pointer',
    border: `1px solid ${border}`, color, background: bg,
    fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1,
  };
}

Object.assign(window, { AdminAssetsPage });
