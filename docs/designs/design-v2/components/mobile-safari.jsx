// Mobile Safari chrome — tiny URL bar top + home indicator bottom.
// Used to frame web pages inside an iOS device, emphasizing "this is a website, not an app".

function MobileSafariChrome({ url = 'danmu.im/42', children, dark = false }) {
  const bg = dark ? '#1c1c1e' : '#f2f2f7';
  const bar = dark ? 'rgba(44,44,46,0.92)' : 'rgba(246,246,248,0.92)';
  const text = dark ? '#fff' : '#000';
  const dim = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const sep = dark ? 'rgba(84,84,88,0.45)' : 'rgba(60,60,67,0.18)';

  return (
    <div style={{
      width: '100%', height: '100%', background: bg,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      fontFamily: '-apple-system, system-ui, sans-serif',
    }}>
      {/* Status bar row */}
      <div style={{
        height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 22px', flexShrink: 0, background: bar,
        fontSize: 15, fontWeight: 600, color: text, letterSpacing: -0.2,
      }}>
        <span>9:41</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <svg width="17" height="11" viewBox="0 0 17 11"><rect x="0" y="6" width="3" height="5" rx="0.6" fill={text}/><rect x="4.5" y="4" width="3" height="7" rx="0.6" fill={text}/><rect x="9" y="2" width="3" height="9" rx="0.6" fill={text}/><rect x="13.5" y="0" width="3" height="11" rx="0.6" fill={text}/></svg>
          <svg width="24" height="11" viewBox="0 0 24 11"><rect x="0.5" y="0.5" width="20" height="10" rx="3" stroke={text} fill="none"/><rect x="2" y="2" width="17" height="7" rx="1.5" fill={text}/></svg>
        </div>
      </div>
      {/* URL bar */}
      <div style={{
        padding: '6px 10px 8px', background: bar, flexShrink: 0,
        borderBottom: `0.5px solid ${sep}`,
      }}>
        <div style={{
          height: 36, borderRadius: 10, background: dark ? 'rgba(118,118,128,0.24)' : 'rgba(118,118,128,0.12)',
          display: 'flex', alignItems: 'center', padding: '0 10px', gap: 8,
        }}>
          <span style={{ color: dim, fontSize: 13 }}>⟨</span>
          <svg width="13" height="13" viewBox="0 0 13 13" style={{ flexShrink: 0 }}>
            <path d="M6.5 1a5.5 5.5 0 015.2 3.7h-1a4.5 4.5 0 100 3.6h1A5.5 5.5 0 116.5 1z" fill={dim}/>
            <circle cx="6.5" cy="6.5" r="1.8" fill="none" stroke={dim} strokeWidth="1"/>
          </svg>
          <span style={{
            flex: 1, fontSize: 14, color: text, letterSpacing: -0.2,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            <span style={{ color: dim }}>🔒</span> {url}
          </span>
          <span style={{ color: dim, fontSize: 15, fontWeight: 600 }}>↻</span>
        </div>
      </div>
      {/* Page */}
      <div style={{ flex: 1, overflow: 'auto', minHeight: 0 }}>{children}</div>
      {/* Bottom toolbar */}
      <div style={{
        height: 50, background: bar, flexShrink: 0,
        borderTop: `0.5px solid ${sep}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        padding: '0 12px', color: dim, fontSize: 22,
      }}>
        <span style={{ color: text }}>⟨</span>
        <span>⟩</span>
        <span style={{ fontSize: 18 }}>⎘</span>
        <span style={{ fontSize: 18 }}>⌸</span>
        <span style={{ fontSize: 18 }}>⇱</span>
      </div>
      {/* Home indicator */}
      <div style={{
        height: 20, flexShrink: 0, background: bar,
        display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}>
        <div style={{
          width: 134, height: 5, borderRadius: 3,
          background: dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.8)',
        }} />
      </div>
    </div>
  );
}

Object.assign(window, { MobileSafariChrome });
