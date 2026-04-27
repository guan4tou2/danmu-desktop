// Priority-2 design pieces, bundled:
//   1) CommandPalette  (⌘K)  — scoped search, keyboard hints, result groups
//   2) OverlayIdleQR    — real QR pattern + pairing states (idle/scanning/paired/failed)
//   3) BroadcastToggle  — explicit 2-state control (LIVE / STANDBY) w/ confirm modal
//   4) OverlayMiniCtrl  — production-ready floating mini control for Desktop overlay
//   5) PollBuilderDoc   — tiny spec card reconciling Dashboard inline builder vs /polls page

// ======================================================================
// 1. Command Palette (⌘K)
// ======================================================================
function CommandPalette({ theme = 'dark' }) {
  const isDark = theme === 'dark';
  const bg = isDark ? 'rgba(10,14,26,0.72)' : 'rgba(241,245,249,0.72)';
  const panel = isDark ? '#0F1524' : '#fff';
  const line = isDark ? 'rgba(125,211,252,0.18)' : hudTokens.lightLine;
  const raised = isDark ? 'rgba(125,211,252,0.06)' : '#F8FAFC';
  const text = isDark ? hudTokens.text : hudTokens.lightText;
  const textDim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  const accent = hudTokens.cyan;

  const scopes = [
    { k: 'all',      label: '全部',       n: 24, active: true },
    { k: 'messages', label: '訊息',       n: 8 },
    { k: 'users',    label: '用戶',       n: 3 },
    { k: 'settings', label: '設定',       n: 12 },
    { k: 'themes',   label: '主題包',     n: 6 },
    { k: 'actions',  label: '快速動作',   n: 7 },
  ];

  const groups = [
    {
      label: '快速動作', items: [
        { icon: '▶', label: '開始廣播',       sub: 'Server 切換到廣播中',                  shortcut: '⌘B', active: true },
        { icon: '⏸', label: '暫停接收訊息',   sub: '保留連線 · 不推送到 overlay',          shortcut: '⌘.' },
        { icon: '✚', label: '新增投票',       sub: '2–6 選項 · 可排序 · 可上傳圖片',        shortcut: '⌘⇧P' },
        { icon: '⤓', label: '匯出時間軸 CSV', sub: '最近 4 小時 · 從 Server 下載',         shortcut: '⌘⇧E' },
      ]
    },
    {
      label: '訊息', items: [
        { icon: '◆', label: '「百萬級 DAU 怎麼處理?」', sub: 'Q&A · @dev_kun · 14:02:11 · 未回覆', shortcut: '↵' },
        { icon: '◆', label: '「先舉手發問 🙋」',         sub: '聊天 · @annie · 14:01:47',           shortcut: '↵' },
      ]
    },
    {
      label: '設定', items: [
        { icon: '❖', label: '切換主題包 · 影院',     sub: '全黑背景 + 字體放大',                shortcut: '↵' },
        { icon: '◐', label: '調整透明度',             sub: '彈幕目前 92%',                        shortcut: '↵' },
        { icon: '⊘', label: '編輯敏感字清單',         sub: '847 條',                              shortcut: '↵' },
      ]
    },
  ];

  return (
    <div style={{
      width: '100%', height: '100%', background: bg,
      backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
      display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
      paddingTop: 100, fontFamily: hudTokens.fontSans, color: text,
    }}>
      <div style={{
        width: 640, background: panel, borderRadius: 10, border: `1px solid ${line}`,
        boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(125,211,252,0.06)',
        overflow: 'hidden',
      }}>
        {/* Search bar */}
        <div style={{ padding: '16px 18px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: accent, fontSize: 16 }}>⌕</span>
          <div style={{ flex: 1, position: 'relative' }}>
            <span style={{ fontSize: 15, color: text }}>poll</span>
            <span style={{
              display: 'inline-block', width: 2, height: 16,
              background: accent, marginLeft: 1, verticalAlign: '-3px',
              animation: 'blink 1s infinite',
            }} />
          </div>
          <span style={{
            padding: '3px 8px', border: `1px solid ${line}`, borderRadius: 4,
            fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, color: textDim,
          }}>⌘K</span>
        </div>

        {/* Scope chips */}
        <div style={{ padding: '10px 18px', borderBottom: `1px solid ${line}`, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {scopes.map(s => (
            <span key={s.k} style={{
              padding: '4px 10px', borderRadius: 999,
              border: `1px solid ${s.active ? accent : line}`,
              background: s.active ? hudTokens.cyanSoft : 'transparent',
              color: s.active ? accent : textDim,
              fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
            }}>
              {s.label}
              <span style={{ color: s.active ? accent : textDim, opacity: 0.6 }}>· {s.n}</span>
            </span>
          ))}
        </div>

        {/* Results */}
        <div style={{ maxHeight: 400, overflow: 'auto' }}>
          {groups.map((g, gi) => (
            <div key={g.label}>
              <div style={{
                padding: '10px 18px 6px', fontFamily: hudTokens.fontMono, fontSize: 9,
                letterSpacing: 1.5, color: textDim,
              }}>{g.label}</div>
              {g.items.map((it, i) => (
                <div key={i} style={{
                  padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 12,
                  background: it.active ? hudTokens.cyanSoft : 'transparent',
                  borderLeft: it.active ? `2px solid ${accent}` : '2px solid transparent',
                  cursor: 'pointer',
                }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: 5, background: raised,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: it.active ? accent : textDim, fontSize: 13,
                  }}>{it.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: text }}>{it.label}</div>
                    <div style={{
                      fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5,
                      color: textDim, marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                    }}>{it.sub}</div>
                  </div>
                  <span style={{
                    padding: '3px 7px', border: `1px solid ${line}`, borderRadius: 3,
                    fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, color: textDim,
                  }}>{it.shortcut}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          padding: '10px 18px', borderTop: `1px solid ${line}`,
          display: 'flex', alignItems: 'center', gap: 16,
          fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5, color: textDim,
        }}>
          <span><KBD line={line} textDim={textDim}>↑</KBD><KBD line={line} textDim={textDim}>↓</KBD> 移動</span>
          <span><KBD line={line} textDim={textDim}>↵</KBD> 執行</span>
          <span><KBD line={line} textDim={textDim}>⇥</KBD> 切換範圍</span>
          <span style={{ marginLeft: 'auto' }}><KBD line={line} textDim={textDim}>ESC</KBD> 關閉</span>
        </div>

        {/* Server-side scope note */}
        <div style={{
          padding: '8px 18px', background: 'rgba(125,211,252,0.04)',
          borderTop: `1px solid ${line}`,
          fontFamily: hudTokens.fontMono, fontSize: 9.5, letterSpacing: 0.5, color: textDim,
        }}>
          所有動作在 Server 執行 · Desktop Client 只負責顯示彈幕 · 不接收控制指令
        </div>
      </div>
    </div>
  );
}

function KBD({ line, textDim, children }) {
  return (
    <span style={{
      display: 'inline-block', padding: '1px 5px', border: `1px solid ${line}`, borderRadius: 3,
      marginRight: 4, color: textDim,
    }}>{children}</span>
  );
}

// ======================================================================
// 2. Overlay Idle — Real QR code + pairing states
// ======================================================================
function OverlayIdleQR({ theme = 'dark', state = 'idle' }) {
  // state: 'idle' | 'scanning' | 'paired' | 'failed'
  const accent = hudTokens.cyan;
  const magenta = hudTokens.magenta;
  const red = hudTokens.red || '#FB7185';
  const text = '#E2E8F0';
  const textDim = 'rgba(148,163,184,0.7)';

  const stateConfig = {
    idle:     { chipColor: accent,  chipLabel: '等待配對',     en: 'STANDBY · WAITING FOR PAIR',  msg: '用手機掃描 QR 連入 danmu.local:4001',  note: '或輸入 6 碼連線碼: 84-29-17' },
    scanning: { chipColor: magenta, chipLabel: '掃描中',       en: 'PAIRING · HANDSHAKE',         msg: '偵測到裝置 · 正在握手',                 note: 'iPhone · Safari · 192.168.1.84' },
    paired:   { chipColor: '#86EFAC', chipLabel: '已連線',     en: 'PAIRED · CONNECTED',          msg: '247 位觀眾已進入 · Q&A 可開始',         note: 'Danmu Fire 已啟動 · 你可以講話了' },
    failed:   { chipColor: red,     chipLabel: '連線失敗',     en: 'UNREACHABLE · NO SERVER',      msg: '找不到 danmu.local:4001 · 檢查網路',    note: '確認 Server 啟動 · 或手動輸入 ws:// 位址' },
  };
  const cfg = stateConfig[state];

  return (
    <div style={{
      width: '100%', height: '100%', background: '#000', color: text,
      fontFamily: hudTokens.fontSans, position: 'relative', overflow: 'hidden',
      backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 40%, rgba(125,211,252,${state === 'failed' ? 0.02 : 0.08}) 0%, transparent 70%), linear-gradient(to right, rgba(125,211,252,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(125,211,252,0.04) 1px, transparent 1px)`,
      backgroundSize: 'auto, 40px 40px, 40px 40px',
    }}>
      {/* Corner crops for HUD framing */}
      {['tl', 'tr', 'bl', 'br'].map(p => (
        <div key={p} style={{
          position: 'absolute',
          [p[0] === 't' ? 'top' : 'bottom']: 24,
          [p[1] === 'l' ? 'left' : 'right']: 24,
          width: 22, height: 22,
          borderTop: p[0] === 't' ? `1px solid ${accent}` : 'none',
          borderBottom: p[0] === 'b' ? `1px solid ${accent}` : 'none',
          borderLeft: p[1] === 'l' ? `1px solid ${accent}` : 'none',
          borderRight: p[1] === 'r' ? `1px solid ${accent}` : 'none',
          opacity: 0.55,
        }} />
      ))}

      {/* Top bar */}
      <div style={{
        position: 'absolute', top: 30, left: 60, right: 60,
        display: 'flex', alignItems: 'center', gap: 12,
        fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5,
      }}>
        <span style={{ color: accent }}>DANMU FIRE · OVERLAY</span>
        <span style={{ color: textDim }}>|</span>
        <span style={{ color: textDim }}>v4.8.7 · ws://danmu.local:4001</span>
        <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <StatusDot color={cfg.chipColor} size={7} pulse={state === 'scanning'} />
          <span style={{ color: cfg.chipColor }}>{cfg.en}</span>
        </span>
      </div>

      {/* Center content */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 20,
      }}>
        <DanmuHero
          title="DANMU FIRE"
          theme={theme}
          size="hero"
          subtitle={cfg.msg}
          chip={
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 999,
              background: state === 'failed' ? 'rgba(251,113,133,0.08)' : hudTokens.cyanSoft,
              border: `1px solid ${cfg.chipColor}`,
              fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5, color: cfg.chipColor,
            }}>
              <StatusDot color={cfg.chipColor} size={6} pulse={state === 'scanning'} />
              {cfg.chipLabel}
            </span>
          }
        />

        {/* QR area */}
        <div style={{ marginTop: 14, position: 'relative' }}>
          <QrBlock size={180} accent={accent} state={state} />
          {state === 'scanning' && (
            <div style={{
              position: 'absolute', inset: 0, border: `2px solid ${magenta}`,
              borderRadius: 6, boxShadow: `0 0 30px ${magenta}`, animation: 'pulse 1.2s infinite',
            }} />
          )}
          {state === 'paired' && (
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(0,0,0,0.7)', borderRadius: 6,
            }}>
              <span style={{ fontSize: 72, color: '#86EFAC', textShadow: '0 0 20px #86EFAC' }}>✓</span>
            </div>
          )}
          {state === 'failed' && (
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(0,0,0,0.7)', borderRadius: 6,
            }}>
              <span style={{ fontSize: 60, color: red, textShadow: `0 0 20px ${red}` }}>⚠</span>
            </div>
          )}
        </div>

        <div style={{
          fontFamily: hudTokens.fontMono, fontSize: 12, letterSpacing: 1,
          color: textDim, textAlign: 'center', marginTop: 4,
        }}>{cfg.note}</div>

        {/* Action row */}
        <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
          {state === 'failed' ? (
            <>
              <button style={{
                padding: '9px 18px', borderRadius: 4, border: `1px solid ${accent}`,
                background: accent, color: '#000', cursor: 'pointer',
                fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5, fontWeight: 700,
              }}>▶ 重試連線</button>
              <button style={{
                padding: '9px 18px', borderRadius: 4, border: `1px solid rgba(255,255,255,0.25)`,
                background: 'transparent', color: text, cursor: 'pointer',
                fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1,
              }}>手動輸入位址</button>
            </>
          ) : state === 'paired' ? (
            <button style={{
              padding: '9px 18px', borderRadius: 4, border: `1px solid ${accent}`,
              background: accent, color: '#000', cursor: 'pointer',
              fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5, fontWeight: 700,
            }}>開始廣播 · SPACE</button>
          ) : (
            <span style={{
              padding: '8px 14px', fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1,
              color: textDim,
            }}>⌥⌘C 複製配對碼 · ESC 進入設定</span>
          )}
        </div>
      </div>
    </div>
  );
}

// Fake but plausible QR pattern — seeded so it looks like a real QR, not random noise.
function QrBlock({ size = 180, accent, state }) {
  const N = 29;
  const rand = (seed) => { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 0xFFFFFFFF; }; };
  const r = rand(42);
  const cells = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      cells.push(r() > 0.5 ? 1 : 0);
    }
  }
  // Stamp finder boxes at 3 corners
  const stampFinder = (cx, cy) => {
    for (let y = 0; y < 7; y++) for (let x = 0; x < 7; x++) {
      const xx = cx + x, yy = cy + y;
      if (xx < N && yy < N) {
        const edge = x === 0 || x === 6 || y === 0 || y === 6;
        const inner = x >= 2 && x <= 4 && y >= 2 && y <= 4;
        cells[yy * N + xx] = (edge || inner) ? 1 : 0;
      }
    }
    // Quiet ring
    for (let y = -1; y < 8; y++) for (let x = -1; x < 8; x++) {
      if ((x === -1 || x === 7 || y === -1 || y === 7)) {
        const xx = cx + x, yy = cy + y;
        if (xx >= 0 && xx < N && yy >= 0 && yy < N) cells[yy * N + xx] = 0;
      }
    }
  };
  stampFinder(0, 0); stampFinder(N - 7, 0); stampFinder(0, N - 7);

  const cell = size / N;
  const dim = state === 'scanning' || state === 'paired' || state === 'failed';
  return (
    <div style={{
      width: size, height: size, background: '#fff', padding: 6, borderRadius: 6,
      boxShadow: `0 0 40px rgba(125,211,252,0.3)`,
      opacity: dim ? 0.35 : 1, transition: 'opacity .3s',
    }}>
      <svg width={size - 12} height={size - 12} viewBox={`0 0 ${size} ${size}`}>
        {cells.map((v, i) => v ? (
          <rect key={i} x={(i % N) * cell} y={Math.floor(i / N) * cell} width={cell} height={cell} fill="#000" />
        ) : null)}
      </svg>
    </div>
  );
}

// ======================================================================
// 3. Broadcasting / Standby toggle
// ======================================================================
function BroadcastToggle({ theme = 'dark' }) {
  return (
    <AdminPageShell route="broadcast" title="廣播狀態 · Broadcast" en="BROADCAST · LIVE / STANDBY · 控制觀眾是否看到訊息" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 20 }}>
            <CardHeader title="當前狀態" en="CURRENT STATE" textDim={textDim} />
            <div style={{
              marginTop: 18, padding: 18, borderRadius: radius,
              background: hudTokens.cyanSoft, border: `1px solid ${accent}`,
              display: 'flex', alignItems: 'center', gap: 16,
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: '#000', border: `2px solid ${accent}`,
                boxShadow: `0 0 24px ${accent}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <StatusDot color={accent} size={16} />
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, color: accent, letterSpacing: 1 }}>LIVE · 廣播中</div>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, marginTop: 4, letterSpacing: 0.5 }}>
                  01:24:07 進行中 · 247 連線 · 1,284 則訊息
                </div>
              </div>
              <button style={{
                marginLeft: 'auto', padding: '10px 18px', borderRadius: radius,
                border: `1px solid ${hudTokens.magenta}`, background: 'transparent',
                color: hudTokens.magenta, cursor: 'pointer',
                fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5, fontWeight: 700,
              }}>⏸ 切到 STANDBY</button>
            </div>

            <div style={{ marginTop: 20 }}>
              <CardHeader title="狀態差異" en="LIVE vs STANDBY" textDim={textDim} />
              <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <StateCol label="LIVE" color={accent} raised={raised} line={line} text={text} textDim={textDim}
                  items={['觀眾訊息推送到 Overlay', '投票可投票', 'OBS Widgets 更新', '時間軸紀錄寫入']} />
                <StateCol label="STANDBY" color={hudTokens.magenta} raised={raised} line={line} text={text} textDim={textDim}
                  items={['訊息進 queue · 不推送', '投票暫停（保留已投）', 'Overlay 顯示 Standby', '時間軸仍寫入（可匯出）']} />
              </div>
            </div>

            <div style={{
              marginTop: 18, padding: 12, background: raised, borderRadius: 4,
              fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5, lineHeight: 1.7,
            }}>
              切換為立即生效 · WebSocket 仍保持連線 · 觀眾側會看到「暫停接收」而非斷線。
            </div>
          </div>

          {/* Right: confirm modal for irreversible transitions */}
          <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 20, position: 'relative' }}>
            <CardHeader title="結束廣播（需確認）" en="END BROADCAST · NEEDS CONFIRM" textDim={textDim} />
            <div style={{
              marginTop: 16, padding: 16, borderRadius: radius,
              background: 'rgba(251,113,133,0.08)', border: `1px solid rgba(251,113,133,0.45)`,
            }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#FB7185', marginBottom: 8 }}>⚠ 結束後將斷開所有 WebSocket 連線</div>
              <div style={{ fontSize: 12, color: textDim, lineHeight: 1.8 }}>
                Standby 是暫停；結束廣播 = 時間軸封檔、觀眾頁顯示「已結束 · 感謝參加」、Overlay 關閉。
                時間軸可在 <span style={{ color: '#FB7185' }}>訊息紀錄 → 匯出</span> 重新下載。
              </div>
              <div style={{
                marginTop: 14, display: 'flex', alignItems: 'center', gap: 10,
                fontFamily: hudTokens.fontMono, fontSize: 11,
              }}>
                <span style={{ color: textDim }}>確認碼</span>
                <input defaultValue="END-LIVE" style={{
                  flex: 1, padding: '8px 10px', borderRadius: 4, background: raised,
                  border: `1px solid ${line}`, color: text, fontFamily: hudTokens.fontMono, outline: 'none',
                }} />
              </div>
              <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
                <button style={{
                  flex: 1, padding: '10px', borderRadius: 4,
                  border: `1px solid rgba(251,113,133,0.6)`, background: 'rgba(251,113,133,0.15)',
                  color: '#FB7185', cursor: 'pointer',
                  fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5, fontWeight: 700,
                }}>■ 結束廣播</button>
                <button style={{
                  padding: '10px 16px', borderRadius: 4, border: `1px solid ${line}`,
                  background: 'transparent', color: text, cursor: 'pointer',
                  fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1,
                }}>取消</button>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <CardHeader title="切換行為" en="TRANSITION RULES · 無確認 / 需確認" textDim={textDim} />
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6, fontFamily: hudTokens.fontMono, fontSize: 11 }}>
                <Rule from="STANDBY" to="LIVE"    instant color={hudTokens.lime} line={line} text={text} textDim={textDim} />
                <Rule from="LIVE"    to="STANDBY" instant color={hudTokens.magenta} line={line} text={text} textDim={textDim} />
                <Rule from="任意"    to="ENDED"   instant={false} color="#FB7185" line={line} text={text} textDim={textDim} />
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

function StateCol({ label, color, items, raised, line, text, textDim }) {
  return (
    <div style={{ background: raised, border: `1px solid ${line}`, borderRadius: 4, padding: 12 }}>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5, color, marginBottom: 8 }}>{label}</div>
      {items.map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 4, fontSize: 12, color: text }}>
          <span style={{ color, opacity: 0.6, marginTop: 1 }}>›</span>{t}
        </div>
      ))}
    </div>
  );
}

function Rule({ from, to, instant, color, line, text, textDim }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '8px 10px', border: `1px solid ${line}`, borderRadius: 4,
    }}>
      <span style={{ color: text, letterSpacing: 1 }}>{from}</span>
      <span style={{ color: textDim }}>→</span>
      <span style={{ color, letterSpacing: 1 }}>{to}</span>
      <span style={{ marginLeft: 'auto', color: instant ? hudTokens.lime : '#FB7185', fontSize: 10, letterSpacing: 1 }}>
        {instant ? '● 即時切換' : '● 需確認碼'}
      </span>
    </div>
  );
}

// ======================================================================
// 4. Overlay-on-Desktop mini-control (production spec)
// ======================================================================
function OverlayMiniCtrl({ theme = 'dark' }) {
  const accent = hudTokens.cyan;
  const panel = '#0F1524';
  const line = 'rgba(125,211,252,0.18)';
  const text = '#E2E8F0';
  const textDim = 'rgba(148,163,184,0.7)';

  return (
    <div style={{
      width: '100%', height: '100%', background: '#0A0E1A', color: text,
      fontFamily: hudTokens.fontSans, position: 'relative', overflow: 'hidden',
    }}>
      {/* Fake presentation slide background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
        backgroundImage: 'linear-gradient(to right, rgba(125,211,252,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(125,211,252,0.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}>
        <div style={{
          position: 'absolute', top: '35%', left: 0, right: 0, textAlign: 'center',
          fontSize: 72, fontWeight: 700, color: 'rgba(226,232,240,0.15)', letterSpacing: -2,
        }}>主持簡報視圖</div>
      </div>

      {/* Floating mini control */}
      <div style={{
        position: 'absolute', bottom: 30, right: 30, width: 300,
        background: panel, border: `1px solid ${line}`, borderRadius: 8,
        boxShadow: '0 14px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(125,211,252,0.06)',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '10px 14px', borderBottom: `1px solid ${line}`,
          display: 'flex', alignItems: 'center', gap: 10,
          background: 'linear-gradient(90deg, rgba(125,211,252,0.06) 0%, transparent 100%)',
          cursor: 'move',
        }}>
          <StatusDot color={accent} size={7} />
          <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5, color: accent }}>DANMU · LIVE</span>
          <span style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
            <IconBtn textDim={textDim} line={line}>◱</IconBtn>
            <IconBtn textDim={textDim} line={line}>—</IconBtn>
            <IconBtn textDim={textDim} line={line}>✕</IconBtn>
          </span>
        </div>
        <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>
            <span>247</span>
            <span style={{ color: text }}>連線</span>
            <span style={{ marginLeft: 'auto' }}>4.2/s 訊息速率</span>
          </div>
          {/* Pulse chart */}
          <div style={{ height: 28, display: 'flex', alignItems: 'flex-end', gap: 2 }}>
            {[3, 5, 4, 7, 5, 8, 6, 9, 7, 5, 6, 8, 9, 7, 6, 8, 6, 5, 7, 8, 6, 5, 7, 9].map((v, i) => (
              <div key={i} style={{
                flex: 1, height: `${(v / 10) * 100}%`,
                background: i > 18 ? accent : `${accent}66`, borderRadius: 1,
              }} />
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            <ActionBtn accent={accent} line={line}>▶ 廣播</ActionBtn>
            <ActionBtn line={line} text={text}>⏸ 暫停</ActionBtn>
            <ActionBtn line={line} text={text}>◈ 投票</ActionBtn>
            <ActionBtn line={line} text={text}>✕ 清空</ActionBtn>
          </div>
          <div style={{
            padding: 8, background: 'rgba(125,211,252,0.04)', borderRadius: 4,
            fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5, lineHeight: 1.6,
          }}>
            <div><span style={{ color: text }}>click-through</span> 關閉 · 可點到下方簡報 <span style={{ color: accent }}>⌥⌘T</span></div>
            <div style={{ marginTop: 2 }}><span style={{ color: text }}>跨螢幕固定</span> · 拖曳到其他 display 記憶位置</div>
          </div>
        </div>
      </div>

      {/* Pass-through zone indicator (educational annotation) */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs>
          <marker id="mini-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 Z" fill={accent} opacity="0.65" />
          </marker>
        </defs>
        <line x1="700" y1="170" x2="970" y2="520" stroke={accent} strokeOpacity="0.4" strokeDasharray="4 4" strokeWidth="1.5" markerEnd="url(#mini-arrow)" />
        <text x="540" y="160" fill={textDim} fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="1">
          <tspan x="540" dy="0" fill={accent}>HIT REGION</tspan>
          <tspan x="540" dy="16">只有 mini-control 卡片本體接收事件</tspan>
          <tspan x="540" dy="16">其餘區域透傳到下方應用（Keynote / PPT）</tspan>
        </text>
      </svg>
    </div>
  );
}

function IconBtn({ textDim, line, children }) {
  return (
    <span style={{
      width: 20, height: 20, borderRadius: 3, border: `1px solid ${line}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: textDim, cursor: 'pointer', fontSize: 11,
    }}>{children}</span>
  );
}
function ActionBtn({ accent, line, text, children }) {
  return (
    <button style={{
      padding: '7px 10px', borderRadius: 4,
      border: `1px solid ${accent || line}`,
      background: accent || 'transparent',
      color: accent ? '#000' : (text || 'rgba(226,232,240,0.9)'),
      cursor: 'pointer', fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1,
      fontWeight: accent ? 700 : 500,
    }}>{children}</button>
  );
}

// ======================================================================
// 5. Poll Builder — Multi-question queue with ordering + per-Q image
// ======================================================================
function PollBuilderSpec({ theme = 'dark' }) {
  return (
    <AdminPageShell route="polls" title="投票" en="POLL · 多題目 · 可排序 · 每題可上傳圖片" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => {
        const questions = [
          {
            q: '新版 onboarding 哪一版最直覺?',
            options: [
              { img: true,  label: '版本 A · 全螢幕引導' },
              { img: true,  label: '版本 B · 浮動提示' },
              { img: true,  label: '版本 C · 影片教學' },
              { img: false, label: '都還可以接受' },
            ],
            timer: '90s', status: 'editing', live: true,
          },
          {
            q: '你覺得現在進度合理嗎?',
            options: [
              { img: false, label: '太趕了 · 放慢' },
              { img: false, label: '剛好' },
              { img: false, label: '可以再加快' },
            ],
            timer: '3 分', status: 'queued',
          },
          {
            q: '最喜歡哪一個 logo?',
            options: [
              { img: true, label: '提案 1' },
              { img: true, label: '提案 2' },
              { img: true, label: '提案 3' },
            ],
            timer: '無時限', status: 'queued',
          },
          {
            q: 'Q4 要不要辦實體 Meetup?',
            options: [
              { img: false, label: '要' },
              { img: false, label: '不要' },
            ],
            timer: '90s', status: 'queued',
          },
        ];

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 20 }}>
            {/* LEFT · Question queue (drag to reorder) */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 18, height: 'fit-content', position: 'sticky', top: 20 }}>
              <CardHeader title="題目佇列" en="QUEUE · 拖曳排序 · 自動依序播放" textDim={textDim} />
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {questions.map((it, i) => {
                  const isLive = it.live;
                  const isEditing = it.status === 'editing';
                  return (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '10px 12px', borderRadius: 4,
                      background: isEditing ? hudTokens.cyanSoft : raised,
                      border: `1px solid ${isEditing ? accent : line}`,
                      cursor: 'grab',
                    }}>
                      <span style={{ color: textDim, fontFamily: hudTokens.fontMono, fontSize: 13, lineHeight: 1 }}>⋮⋮</span>
                      <span style={{
                        width: 22, height: 22, borderRadius: 3, background: isEditing ? accent : 'transparent',
                        border: `1px solid ${isEditing ? accent : line}`,
                        color: isEditing ? '#000' : textDim,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: hudTokens.fontMono, fontSize: 11, fontWeight: 700,
                      }}>{i + 1}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12.5, color: text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{it.q}</div>
                        <div style={{ marginTop: 2, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
                          {it.options.length} 選項 · {it.timer} · {it.options.some(o => o.img) ? '含圖' : '純文字'}
                        </div>
                      </div>
                      {isLive && (
                        <span style={{
                          padding: '2px 7px', borderRadius: 999,
                          background: hudTokens.cyanSoft, border: `1px solid ${accent}`,
                          fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, color: accent,
                        }}><StatusDot color={accent} size={5} /> 編輯中</span>
                      )}
                    </div>
                  );
                })}
                <button style={{
                  padding: '10px', borderRadius: 4,
                  border: `1px dashed ${line}`, background: 'transparent', color: textDim,
                  cursor: 'pointer', fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1,
                }}>＋ 新增題目</button>
              </div>

              <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${line}` }}>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, color: textDim, marginBottom: 8 }}>
                  播放模式
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <PollModeBtn active label="手動" sub="每題按 Next" accent={accent} line={line} text={text} textDim={textDim} />
                  <PollModeBtn label="自動" sub="時限到自動下一題" line={line} text={text} textDim={textDim} />
                </div>
              </div>
            </div>

            {/* RIGHT · Active question editor */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 4, background: accent, color: '#000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: hudTokens.fontMono, fontSize: 13, fontWeight: 700,
                }}>1</span>
                <CardHeader title="編輯題目 1" en="EDITING Q1 · 變更即時同步到 Overlay 預覽" textDim={textDim} />
                <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, color: textDim }}>
                  Q1 / {questions.length}
                </span>
              </div>

              <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, color: textDim, marginBottom: 6 }}>
                問題
              </div>
              <input defaultValue="新版 onboarding 哪一版最直覺?" style={{
                width: '100%', padding: '12px 14px', borderRadius: 4, background: raised,
                border: `1px solid ${line}`, color: text, fontFamily: hudTokens.fontSans, fontSize: 15, outline: 'none', boxSizing: 'border-box',
              }} />

              <div style={{ marginTop: 18, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, color: textDim, marginBottom: 6 }}>
                選項 · 2–6 · 每項可選擇上傳圖片
              </div>

              {questions[0].options.map((opt, i) => (
                <PollOptionRow key={i} i={i} opt={opt} raised={raised} line={line} text={text} textDim={textDim} accent={accent} />
              ))}

              <button style={{
                marginTop: 8, padding: '8px 14px', borderRadius: 4,
                border: `1px dashed ${line}`, background: 'transparent', color: textDim,
                cursor: 'pointer', fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1,
              }}>＋ 新增選項 (最多 6)</button>

              <div style={{
                marginTop: 22, paddingTop: 18, borderTop: `1px solid ${line}`,
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 1 }}>時限</span>
                  <select defaultValue="90s" style={{
                    padding: '8px 10px', borderRadius: 4, background: raised,
                    border: `1px solid ${line}`, color: text, fontFamily: hudTokens.fontMono, fontSize: 11,
                  }}>
                    <option>30s</option><option>90s</option><option>3 分</option><option>5 分</option><option>無時限</option>
                  </select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 1 }}>複選</span>
                  <label style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: hudTokens.fontMono, fontSize: 11, color: text }}>
                    <input type="checkbox" /> 允許多選
                  </label>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                  <button style={{
                    padding: '9px 16px', borderRadius: 4, border: `1px solid ${line}`,
                    background: 'transparent', color: text, cursor: 'pointer',
                    fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1,
                  }}>儲存為草稿</button>
                  <button style={{
                    padding: '9px 18px', borderRadius: 4, border: `1px solid ${accent}`,
                    background: accent, color: '#000', cursor: 'pointer',
                    fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5, fontWeight: 700,
                  }}>START Q1 ▶</button>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </AdminPageShell>
  );
}

function PollOptionRow({ i, opt, raised, line, text, textDim, accent }) {
  const letter = String.fromCharCode(65 + i);
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8,
      padding: 8, borderRadius: 4, border: `1px solid ${line}`, background: raised,
    }}>
      <span style={{ color: textDim, fontFamily: hudTokens.fontMono, fontSize: 13, cursor: 'grab' }}>⋮⋮</span>
      <span style={{
        width: 28, height: 28, borderRadius: 4, background: accent, color: '#000',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 700,
      }}>{letter}</span>
      {/* Image slot */}
      {opt.img ? (
        <div style={{
          width: 44, height: 44, borderRadius: 4, flexShrink: 0, position: 'relative', overflow: 'hidden',
          background: `linear-gradient(135deg, ${['#1E293B','#312E81','#134E4A','#78350F'][i % 4]} 0%, ${['#0F172A','#1E1B4B','#064E3B','#451A03'][i % 4]} 100%)`,
          border: `1px solid ${line}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'rgba(255,255,255,0.45)', fontFamily: hudTokens.fontMono, fontSize: 10,
        }}>{letter}.png</div>
      ) : (
        <label style={{
          width: 44, height: 44, borderRadius: 4, flexShrink: 0,
          border: `1px dashed ${line}`, background: 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: textDim, fontFamily: hudTokens.fontMono, fontSize: 10, cursor: 'pointer', lineHeight: 1.1,
          textAlign: 'center',
        }}>+<br/>圖片</label>
      )}
      <input defaultValue={opt.label} style={{
        flex: 1, padding: '8px 10px', borderRadius: 4, background: 'transparent',
        border: `1px solid transparent`, color: text, fontSize: 13, outline: 'none',
      }} />
      <button style={{
        width: 28, height: 28, borderRadius: 4, border: `1px solid ${line}`,
        background: 'transparent', color: textDim, cursor: 'pointer',
        fontSize: 13, lineHeight: 1,
      }}>✕</button>
    </div>
  );
}

function PollModeBtn({ active, label, sub, accent, line, text, textDim }) {
  return (
    <div style={{
      flex: 1, padding: 10, borderRadius: 4, cursor: 'pointer',
      border: `1px solid ${active ? accent : line}`,
      background: active ? hudTokens.cyanSoft : 'transparent',
    }}>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1, color: active ? accent : text, fontWeight: 600 }}>{label}</div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, marginTop: 2 }}>{sub}</div>
    </div>
  );
}

Object.assign(window, { CommandPalette, OverlayIdleQR, BroadcastToggle, OverlayMiniCtrl, PollBuilderSpec });
