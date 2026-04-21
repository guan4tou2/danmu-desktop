// Live danmu preview strip — animates sample bullets across a fake screen.
// Used inside admin panels so settings changes feel alive.

function DanmuPreview({
  height = 200,
  layout = 'scroll',        // scroll | top | bottom | float | rise
  speed = 1,
  size = 26,
  color = '#ffffff',
  effect = 'none',          // none | glow | rainbow | shake
  messages,
  style = {},
  showLabel = true,
  bg = 'linear-gradient(135deg, oklch(0.22 0.04 260), oklch(0.14 0.03 250))',
}) {
  const defaultMsgs = [
    { t: '主題很精彩！', u: 'alice' },
    { t: 'Q: 如何 scale 到 10M?', u: 'dev_kun' },
    { t: '🔥🔥🔥', u: 'hype' },
    { t: '下一題可以講 cache 嗎', u: 'mei' },
    { t: 'sound check OK', u: 'ops' },
    { t: '+1 agree', u: 'pm_sara' },
    { t: '請問投影片之後會分享嗎？', u: 'student01' },
    { t: '👏 bravo', u: 'fan' },
  ];
  const msgs = messages || defaultMsgs;
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 3500 / speed);
    return () => clearInterval(id);
  }, [speed]);

  const renderLayout = () => {
    if (layout === 'scroll') {
      return msgs.slice(0, 5).map((m, i) => (
        <div key={`${tick}-${i}`} style={{
          position: 'absolute',
          top: `${15 + i * 15}%`,
          right: '-40%',
          animation: `dm-scroll ${8 / speed}s linear ${i * 0.9}s infinite`,
          whiteSpace: 'nowrap',
          ...bulletStyle(size, color, effect),
        }}>{m.t}</div>
      ));
    }
    if (layout === 'top') {
      return (
        <div style={{
          position: 'absolute', top: 12, left: 0, right: 0,
          display: 'flex', justifyContent: 'center', gap: 20,
          ...bulletStyle(size, color, effect),
        }}>
          {msgs.slice(0, 2).map((m, i) => <span key={i}>{m.t}</span>)}
        </div>
      );
    }
    if (layout === 'bottom') {
      return (
        <div style={{
          position: 'absolute', bottom: 12, left: 0, right: 0,
          display: 'flex', justifyContent: 'center', gap: 20,
          ...bulletStyle(size, color, effect),
        }}>
          {msgs.slice(0, 2).map((m, i) => <span key={i}>{m.t}</span>)}
        </div>
      );
    }
    if (layout === 'float') {
      return msgs.slice(0, 6).map((m, i) => (
        <div key={`${tick}-${i}`} style={{
          position: 'absolute',
          top: `${(i * 37 + tick * 13) % 80}%`,
          left: `${(i * 23 + tick * 17) % 70 + 10}%`,
          animation: `dm-fade ${4 / speed}s ease-out ${i * 0.3}s infinite`,
          ...bulletStyle(size, color, effect),
        }}>{m.t}</div>
      ));
    }
    if (layout === 'rise') {
      return msgs.slice(0, 5).map((m, i) => (
        <div key={`${tick}-${i}`} style={{
          position: 'absolute',
          bottom: '-15%',
          left: `${10 + i * 16}%`,
          animation: `dm-rise ${6 / speed}s linear ${i * 1.1}s infinite`,
          ...bulletStyle(size, color, effect),
        }}>{m.t}</div>
      ));
    }
  };

  return (
    <div style={{
      position: 'relative',
      height,
      background: bg,
      overflow: 'hidden',
      border: `1px solid ${hudTokens.cyanLine}`,
      ...style,
    }}>
      {showLabel && (
        <div style={{
          position: 'absolute', top: 8, left: 10, zIndex: 2,
        }}>
          <HudLabel color={hudTokens.cyan}>LIVE PREVIEW · {layout.toUpperCase()}</HudLabel>
        </div>
      )}
      {/* Fake slide background to show readability */}
      <div style={{
        position: 'absolute', inset: '30% 10%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: `1px dashed ${hudTokens.line}`,
        color: hudTokens.textMute, fontFamily: hudTokens.fontMono, fontSize: 11,
        letterSpacing: 2,
      }}>SLIDE · Q&amp;A</div>
      {renderLayout()}
    </div>
  );
}

function bulletStyle(size, color, effect) {
  const base = {
    fontSize: size,
    fontFamily: hudTokens.fontDisplay,
    fontWeight: 600,
    color,
    textShadow: '0 0 6px rgba(0,0,0,0.6), 1px 1px 2px rgba(0,0,0,0.8)',
    pointerEvents: 'none',
  };
  if (effect === 'glow') {
    base.textShadow = `0 0 8px ${color}, 0 0 20px ${color}, 1px 1px 2px #000`;
  }
  if (effect === 'rainbow') {
    base.background = 'linear-gradient(90deg, #ff6b9d, #ffd93d, #6bcb77, #4d96ff, #c780ff)';
    base.WebkitBackgroundClip = 'text';
    base.WebkitTextFillColor = 'transparent';
    base.filter = 'drop-shadow(0 0 3px rgba(255,255,255,0.3))';
  }
  if (effect === 'shake') {
    base.animation = `dm-shake 0.3s ease-in-out infinite`;
    base.display = 'inline-block';
  }
  return base;
}

Object.assign(window, { DanmuPreview });
